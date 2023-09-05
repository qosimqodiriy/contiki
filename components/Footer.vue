<template>
    <footer class="bg-black">
        <div class="my_container py-20 md:py-24 lg:py-30 xl:py-40">
            <p class="text-white">footer</p>
        </div>
    </footer>
</template>




<script>
export default {
    data() {
        return {
            data: {},
        }
    },

    methods: {
        
    },

    mounted() {
        
    }
}
</script>



<style scoped>
    .footer_title {
        font-size: 20px;
        font-weight: 600;
        line-height: 150%;
        font-style: normal;
        font-family: 'TT Firs Neue';
        color: var(--dark-green, #1D2B1E);
    }

    .footer_text {
        display: block;
        font-size: 18px;
        font-weight: 400;
        line-height: 150%;
        font-style: normal;
        white-space: nowrap;
        font-family: 'TT Interfaces';
        color: var(--dark-green, #1D2B1E);
    }
</style>