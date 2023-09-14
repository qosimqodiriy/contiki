<template>
    <page-title :page="{name: $t('page_name_2'), path: '/tours'}" :name="data.name && data.name[$i18n.locale] ? data.name[$i18n.locale] : ''" :index="2" />
    <section-two :item="data" v-if="data.id" /> <!--  -->
</template>

<script>
import axios from 'axios'
import SectionTwo from '~/components/tours/SectionTwo.vue'


export default {
    data() {
        return {
            data: [],
            loading: false,
        }
    },

    components: {
        SectionTwo,
    },

    methods: {
        async getItems() {
            this.loading = true;
            const response = await axios.get(`http://176.96.241.124:8081/user/tour?id=${this.$route.params.id}`);
            this.loading = false;
            // console.log("Tour get id");
            // console.log(response.data);
            this.data = response.data.body;
        },
    },

    mounted() {
        this.getItems()
    }
}
</script>