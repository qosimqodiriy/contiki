<template>
    <div class="bg-white py-40 lg:py-52 xl:py-64 2xl:py-80">
        <div class="my_container">
            <div class="w-full mb-40 lg:mb-60 xl:mb-80">
                <img class="w-full mb-24 lg:mb-32" src="../../assets/images/map.png" alt="">

                <div class="flex flex-wrap items-center gap-y-20 gap-x-24 lg:ga-xp-32 xl:gap-x-40">
                    <div class="flex items-center gap-12">
                        <img class="w-24 md:w-28 lg:w-32 xl:w-36 h-24 md:h-28 lg:h-32 xl:h-36" src="../../assets/icons/location.png" alt="">
                        <p class="text-20 lg:text-24 xl:text-26 font-interfaces_500">{{ $t('contact_text_1') }}</p>
                    </div>
                    <a href="tel:+998909992222" class="flex items-center gap-12">
                        <img class="w-24 md:w-28 lg:w-32 xl:w-36 h-24 md:h-28 lg:h-32 xl:h-36" src="../../assets/icons/phone.png" alt="">
                        <p class="text-20 lg:text-24 xl:text-26 font-interfaces_500">+998 (90) 999-22-22</p>
                    </a>
                    <a href="mailto:support@tour.uz" class="flex items-center gap-12">
                        <img class="w-24 md:w-28 lg:w-32 xl:w-36 h-24 md:h-28 lg:h-32 xl:h-36" src="../../assets/icons/message.png" alt="">
                        <p class="text-20 lg:text-24 xl:text-26 font-interfaces_500">support@tour.uz</p>
                    </a>
                </div>
            </div>

            <div class="grid md:grid-cols-2 gap-32 lg:gap-46 xl:gap-56 2xl:gap-72 border border-grey_8 px-24 py-16 md:px-36 md:py-24 xl:px-64 xl:py-36 2xl:px-80 2xl:py-56">
                <form @submit.prevent="onSubmit()">
                    <h4 class="text-24 md:text-28 lg:text-32 xl:text-36 2xl:text-40 font-prosto_one mb-24 lg:mb-40 leading-100">{{ $t('contact_text_2') }}</h4>

                    <div class="grid xl:grid-cols-2 gap-x-16 gap-y-24 2xl:gap-y-32">
                        <div class="w-full relative">
                            <input type="text" v-model="name" class="base_input font-inter" name="firstname" id="firstname" required />
                            <label class="base_label font-inter" for="firstname">{{ $t('contact_text_3') }} *</label>
                            <!-- <label class="base_label font-inter" for="name">{{ $t('main_text_20') }}</label> -->
                        </div>
                        <div class="w-full relative">
                            <input type="text" v-model="surname" class="base_input font-inter" name="lastname" id="lastname" required />
                            <label class="base_label font-inter" for="lastname">{{ $t('contact_text_4') }} *</label>
                        </div>
                        <div class="w-full relative">
                            <input type="email" v-model="email" class="base_input font-inter" name="email" id="email" required />
                            <label class="base_label font-inter" for="email">{{ $t('contact_text_5') }} *</label>
                        </div>
                        <div class="w-full relative">
                            <input type="tel" v-model="phone" class="base_input font-inter" name="phone" id="phone" required />
                            <label class="base_label font-inter" for="phone">{{ $t('contact_text_6') }} *</label>
                        </div>

                        <button class="w-full lg:col-span-2 p-5 border border-orange">
                            <p class="w-full text-12 md:text-14 lg:text-16 font-prosto_one text-center py-14 lg:py-16 bg-orange text-white">{{ $t('contact_text_7') }}</p>
                        </button>
                        
                        <p class="lg:col-span-2 text-14 lg:text-16 font-inter text-grey_40">{{ $t('contact_text_8') }}</p>
                    </div>
                </form>

                <div class="w-full">
                    <img class="w-full h-auto" src="../../assets/images/contact_img.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios'

export default {
    data() {
        return {
            name: '',
            phone: '',
            email: '',
            surname: '',
            loading: false,
        }
    },

    methods: {
        async onSubmit() {
            this.loading - true;
            await axios.post('https://api.contiki.uz/user/questions', {
                name: this.name,
                email: this.email,
                phone: this.phone,
                surname: this.surname,
            })
            .then(response => {
                this.name = '';
                this.phone = '';
                this.email = '';
                this.surname = '';
                this.loading = false;
                console.log(response);
            })
            .catch(error => {
                console.log(error)
                this.loading = false;
                alert("Error: " + error.message);
            });
        },
    },

    mounted() {
        // this.getItems()
    }
}
</script>