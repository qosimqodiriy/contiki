import { createI18n } from 'vue-i18n'

export default defineNuxtPlugin(({ vueApp }) => {
    let i18n = createI18n({
        locale: 'en',
        legacy: false,
        globalInjection: true,
        messages: {
            uz: {
                page_name_1: "Asosiy",
                page_name_2: "Ekskursiyalar",
                page_name_3: "Kompaniya haqida",
                page_name_4: "Kontaktlar",
            },


            ru: {
                page_name_1: "Главная",
                page_name_2: "Туры",
                page_name_3: "О нас",
                page_name_4: "Контакты",
            },


            en: {
                page_name_1: "Home",
                page_name_2: "Tours",
                page_name_3: "About company",
                page_name_4: "Contacts",
            }
        }
    })

    vueApp.use(i18n)
})