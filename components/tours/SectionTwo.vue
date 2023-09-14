<template>
    <div class="bg-white py-40 lg:py-52 xl:py-64 2xl:py-80">
        <div class="my_container mb-40">
            <div class="flex flex-col lg:flex-row items-start gap-40">
                <div class="w-full">
                    <div class="w-full min-h-400 mb-24 relative">
                        <div class="relative w-full h-350 md:h-400 lg:h-500 overflow-hidden">
                            <img v-for="(img, index) in item.images" :key="index" :src="`https://contiki.uz/files/${img}`" class="swiper_img absolute top-0 left-0 w-full h-full max-h-full border border-grey_40 object-cover object-center" :class="active == index ? 'active' : 'not_active'" alt="">
                        </div>

                        <div @click="prevClick()" v-if="item.images && item.images.length > 1" class="change_btn absolute z-20 top-50% left-10 md:left-25 -translate-y-50% w-40 md:w-56 h-40 md:h-56 cursor-pointer rounded-full border border-white p-4">
                            <div class="change_btn_inner w-full h-full rounded-full flex items-center justify-center">
                                <img class="w-28 h-28" src="../../assets/icons/arrow-left-white.png" alt="">
                            </div>
                        </div>

                        <div @click="nextClick()" v-if="item.images && item.images.length > 1" class="change_btn absolute z-20 top-50% right-10 md:right-25 -translate-y-50% w-40 md:w-56 h-40 md:h-56 cursor-pointer rounded-full border border-white p-4">
                            <div class="change_btn_inner w-full h-full rounded-full flex items-center justify-center">
                                <img class="w-28 h-28" src="../../assets/icons/arrow-right-white.png" alt="">
                            </div>
                        </div>
                    </div>

                    <h2 class="text-20 xl:text-24 font-prosto_one text-black mb-8">{{ item.title[$i18n.locale] }}</h2>
                    <p class="text-18 font-interfaces text-gren mb-24">{{ $t('tour_inner_text_1') }}  + {{ formatPrice(item.dailyPrice) }} {{ $t('tour_inner_text_2') }}</p>

                    <div class="text_editor_inner text-18 font-interfaces text-grey_64" v-html="item.description[$i18n.locale]"></div>
                </div>

                <div class="w-full lg:w-350 shrink-0 p-16 lg:p-20 xl:p-24 border border-grey_8">
                    <p class="text-12 text-grey_64 font-interfaces uppercase mb-4">{{ $t('tour_inner_text_3') }}</p>
                    <p class="text-20 lg:text-24 font-prosto_one text-black mb-8">{{ formatPrice(item.price) }} UZS</p>
                    <p class="text-18 font-interfaces text-grey_64 mb-15">{{ $t('tour_inner_text_4') }}: {{ item.countDay }} {{ $t('tour_inner_text_5') }}</p>

                    <div class="p-16 relative">
                        <div class="bg absolute top-0 left-0 w-full h-full"></div>
                        <p class="z-10 font-interfaces text-gren">{{ $t('tour_inner_text_6') }}:</p>
                        <p class="z-10 font-interfaces text-gren">{{ formatPrice(item.dailyPrice) }} {{ $t('tour_inner_text_2') }}</p>
                    </div>

                    <div class="w-full border-b border-grey_8 my-24"></div>

                    <form @submit.prevent="onSubmit()" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-x-16">
                        <div class="space-y-8 mb-24">
                            <p class="text-18 font-interfaces text-black">{{ $t('tour_inner_text_7') }}</p>
                            <div class="w-full relative">
                                <input type="text" v-model="name" class="base_input font-inter bg-grey_8" name="name" id="name" required />
                                <label class="base_label font-inter" for="name">{{ $t('tour_inner_text_7') }}</label>
                            </div>
                        </div>

                        <div class="space-y-8 mb-24">
                            <p class="text-18 font-interfaces text-black">{{ $t('contact_text_6') }}</p>
                            <div class="w-full relative">
                                <input type="text" v-model="phone" class="base_input font-inter bg-grey_8" name="phone" id="phone" required />
                                <label class="base_label font-inter" for="phone">{{ $t('contact_text_6') }}</label>
                            </div>
                        </div>
                        <div class="space-y-8 mb-24">
                            <p class="text-18 font-interfaces text-black">{{ $t('tour_inner_text_8') }}</p>
                            <div class="w-full relative">
                                <input type="date" v-model="data_ot" class="base_input font-inter bg-grey_8" name="lastname" id="lastname" required />
                                <label class="base_label font-inter" for="lastname">KK/OO/YY</label>
                            </div>
                        </div>
                        <div class="space-y-8 mb-24">
                            <p class="text-18 font-interfaces text-black">{{ $t('tour_inner_text_9') }}</p>
                            <div class="w-full relative">
                                <input type="date" v-model="data_do" class="base_input font-inter bg-grey_8" name="lastname" id="lastname" required />
                                <label class="base_label font-inter" for="lastname">KK/OO/YY</label>
                            </div>
                        </div>

                        <button class="w-full md:col-span-2 lg:col-span-1 p-5 border border-orange">
                            <p class="w-full text-12 md:text-14 lg:text-16 font-prosto_one text-center py-14 lg:py-16 bg-orange text-white">{{ $t('tour_inner_text_10') }}</p>
                        </button>
                    </form>
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
            active: 0,
            data_ot: '',
            data_do: '',
            data_count: 0,
            loading: false,
        }
    },

    props: {
        item: {
            type: Object,
            required: true,
        },
    },

    methods: {
        prevClick() {
            this.active = this.active > 0 ? this.active - 1 : this.item.images.length - 1;
        },

        nextClick() {
            this.active = this.active < this.item.images.length - 1 ? this.active + 1 : 0;
        },

        formatPrice(price) {
            if (price < 0) {
                return price;
            } else {
                let myArray = [];

                let num = price.toString().split('');
                num = num.reverse();

                for (let i = 0; i < num.length; i++) {
                    if (i > 0 && i % 3 == 0) {
                        myArray.unshift(' ')
                    }
                    myArray.unshift(num.slice(i, i + 1))
                }

                return myArray.join('');
            }
        },

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
       
        // async getItems() {
        //     this.loading = true;
        //     const response = await axios.get(`http://176.96.241.124:8081/user/tour?id=${this.$route.params.id}`);
        //     this.loading = false;
        //     console.log("Tours");
        //     console.log(response.data.body);
        //     this.data = response.data.body.data;
        // },
    },

    mounted() {
        // this.getItems();

        console.log(this.item);
    }
}
</script>


<style scoped>
* {
    transition: 0.37s;
}

/* Swiper js */
.swiper_img.active {
    opacity: 1;
    z-index: 10;
    transform: scale(1);
}

.swiper_img.not_active {
    opacity: 0;
    z-index: -1;
    transform: scale(0.9);
}


.change_btn_inner {
    backdrop-filter: blur(8px);
    background: rgba(255, 255, 255, 0.3);
}

.bg {
    opacity: 0.08;
    background: var(--Agro-Green, #00CD69);
}

.base_input.bg-grey_8 {
    background: var(--Apple-Grey, #F5F5F7);
    border: 1px solid var(--grey-8, #EBEBEB);
}
</style>