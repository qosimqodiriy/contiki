<template>
    <div class="card relative h-screen overflow-hidden shrink-0">
        <img v-if="item.image" class="absolute top-0 left-0 w-full h-full object-cover object-center" :src="`https://contiki.uz/files/${item.image}`" alt="">

        <div class="my_container w-full h-full flex flex-col items-center justify-center">
            <NuxtLink to="/destinations" class="relative flex flex-col items-center max-w-900 xl:max-w-1200 mx-auto">
                <h2 class="text-24 md:text-28 lg:text-32 xl:text-48 leading-120 font-raleway font-semibold text-white text-center text_shadow mb-15">{{ item.title[$i18n.locale] }}</h2>
                <div class="button py-10 px-20 lg:py-12 lg:px-30 xl:py-16 xl:px-35 rounded-30 bg-white text-15 text-center font-bold">FIND OUT MORE</div>
            </NuxtLink>
        </div>
    </div>
</template>



<script>
export default {
    props: {
        item: {
            type: Object,
            required: true,
        },
    },

    methods: {
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
    }
}
</script>


<style scoped>

.card {
    background: linear-gradient(180deg, rgba(29, 35, 79, 0.56) 0%, rgba(29, 35, 79, 0.34) 50%, rgba(29, 35, 79, 0.56) 100%);
}

.button {
    background: rgba(255, 255, 255, 0.80);
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.10);
}

.text_shadow {
    text-shadow: 0px 0px 2px rgba(0,0,0,0.7);
}
</style>