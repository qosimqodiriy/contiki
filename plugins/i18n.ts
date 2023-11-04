import { createI18n } from 'vue-i18n'

export default defineNuxtPlugin(({ vueApp }) => {
    let i18n = createI18n({
        locale: 'eng',
        legacy: false,
        globalInjection: true,
        messages: {
            uz: {
                page_name_1: "Asosiy",
                page_name_2: "Manzillar",
                page_name_3: "Kompaniya haqida",
                page_name_4: "Kontaktlar",
                
                text_1: "Dunyo bo'ylab sayohatlar",
                text_2: "Toshkentdan sayohatlar: raqobatbardosh narxda unutilmas sayohatlar",
                text_3: "Qo'shimcha ma'lumot",
                text_4: "Ekskursiyalarni ko'rish",
                text_5: "Biz biznesimizda eng yaxshimiz",
                text_6: "Nega bizni tanlaysiz? Bizning afzalliklarimiz.",
                text_7: "Mashhur sayohatlar",
                text_8: "Toshkentdan eng foydali va qiziqarli turlar",
                text_9: "Hammasini ko'rish",
                text_10: "Yangiliklar",
                text_11: "Eng qiziqarli yangiliklar va blog",
                text_12: "Biz bilan Ajoyib sayohatdan rohatlaning",
                text_13: "Kompaniyamiz turizm sohasida keng ko'lamli xizmatlarni taqdim etadi. Biz Toshkentdagi eng yaxshi turoperatorlarni ishga olamiz, ular sizga yordam beradi: pul o'tkazmalarini raqobatbardosh narxlarda oldindan bron qilish; eng yaxshi mehmonxonani tanlang va u erda xonani bron qiling; Biz sizga dam olish joyini tanlashda yordam beramiz; eng keng doiradan eng qulay turni tanlang.",
                text_14: "Batafsil",
                
                adventure_text_1: "Sizning ideal sarguzasht tajribangiz",
                adventure_text_2: "Faoliyat va turar joy",
                
                about_text_1: "Nima uchun Delta Tourni tanlaysiz",
                about_text_2: "Bizning kelib chiqishimiz va tariximiz",
                about_text_3: "Misrga sayohatlar ajoyib vaqt o'tkazishingiz mumkin bo'lgan kurortlarni tanlashni o'z ichiga oladi, ularning har biri ma'lum bir dam olish turi bilan mashhur, shuning uchun siz mintaqani tanlashga katta e'tibor berishingiz kerak. Biz sizga eng mashhurlari haqida batafsil ma'lumot beramiz, ammo bizning sayyohlik agentligimiz xodimlari sizga to'liqroq ma'lumot berishi mumkin; ular sizning didingiz va byudjetingizga mos ravishda Chimkentdan Misrga sayohat qilish uchun eng foydali va maqbul variantni tanlaydilar. <br><br> Misrdagi eng qadimgi kurortlardan biri oddiy ishchi qishlog'idan kelib chiqqan Xurgadadir. Bu go'zal hudud o'z vaqtida e'tiborga olindi va tiniq suvli, tekis tubi va juda nozik oq qumli ajoyib plyajlari bilan mashhur bo'lgan aholi punkti o'rnida hashamatli kurort qurilgan. Hurghada turlar uchun ancha arzon narxlarga ega va turli xil ekskursiyalar uchun jo'nash uchun eng maqbul nuqtadir; Bu erda ularning narxi ancha past degan fikr ham mavjud.",
                
                contact_text_1: "Toshkent shahri, Mirzo Ulug‘bek tumani, 100-uy, 700124",
                contact_text_2: "Hali ham savollaringiz bormi?",
                contact_text_3: "Ism",
                contact_text_4: "Familiya",
                contact_text_5: "Elektron pochta",
                contact_text_6: "Telefon raqami",
                contact_text_7: "Yuborish",
                contact_text_8:  `“Yuborish” tugmasini bosish orqali siz kompaniyaga roziligingizni berganligingizni tasdiqlaysiz shaxsiy ma'lumotlaringizni qayta ishlash`,
                
                tour_inner_text_1: "Kunlik miqdor",
                tour_inner_text_2: "so'm",
                tour_inner_text_3: "Kishi",
                tour_inner_text_4: "Ekskursiya davomiyligi",
                tour_inner_text_5: "kun",
                tour_inner_text_6: "Har bir qo'shimcha kun uchun",
                tour_inner_text_7: "Ismingiz",
                tour_inner_text_8: "Dan",
                tour_inner_text_9: "Oldin",
                tour_inner_text_10: "Sotib olish",
                
                footer_text_1: "“Sayohatga sarmoya kiritish o'zingizga investitsiya qilishdir”",
                footer_text_2: "“Yashagan ko'p narsani ko'radi. Sayohat qilgan ko'proq ko'radi”",
                footer_text_3: "Foydali havolalar",
                footer_text_4: "Biz bilan bog'laning",
                footer_text_5: "Bizni kuzating",
            },


            ru: {
                page_name_1: "Главная",
                page_name_2: "Destinations",
                page_name_3: "О нас",
                page_name_4: "Контакты",
                
                text_1: "Туры по всему миру",
                text_2: "Туры из Ташкента: незабываемые путешествия по выгодной цене",
                text_3: "Узнать больше",
                text_4: "Посмотреть туры",
                text_5: "Мы лучшие в своем деле",
                text_6: "Почему выбирают нас? Наши преимущества.",
                text_7: "Популярные Туры",
                text_8: "Самые выгодные и интересные туры из Ташкента",
                text_9: "Посмотреть все",
                text_10: "Новости",
                text_11: "Самые интересные новости и блог",
                text_12: "Наслаждайтесь ОТЛИЧНЫМ путешествием вместе с нами",
                text_13: "Наша компания оказывает широкий спектр услуг в сфере туризма. У нас работают лучшие туроператоры Ташкента, которые помогут:заранее забронировать трансферы по выгодным ценам; выбрать лучший отель и забронировать номер в нем; поможем определиться с выбором места отдыха; подобрать наиболее удобный тур из широчайшего ассортимента.",
                text_14: "Подробнее",
                
                adventure_text_1: "Ваш идеальный Приключенческий опыт",
                adventure_text_2: "Мероприятия и проживание",
                
                about_text_1: "Почему выбирают Delta Tour",
                about_text_2: "Наше происхождение и история",
                about_text_3: "Туров в Египет предполагают выбор курортов, на которых можно отлично провести время, каждый из них славится определенным видом отдыха, поэтому нужно уделить большое внимание выбору региона. Мы расскажем подробнее о самых популярных, однако, более полную информацию могут вам дать сотрудники нашего турагентства, они подберут самый выгодный и оптимальный вариант путевки в Египет из Шымкента на ваш вкус и кошелек. <br><br> Один из самых старинных курортов Египта – Хургада, который берет свое начало с обычной рабочей деревушки. Этот живописнейший край вовремя заметили, и построили на месте поселения шикарный курорт, который славится великолепными пляжами с чистейшей водой, пологим дном и очень мелким белоснежным песком. Хургада имеет достаточно демократичные цены на путевки, и является наиболее оптимальной точкой для отправления в различные экскурсии, также существует мнение, что и их стоимость здесь гораздо ниже.",
                
                contact_text_1: "город Ташкент Мирзо-Улугбекский район, дом 100, 700124",
                contact_text_2: "Остались вопросы?",
                contact_text_3: "Имя",
                contact_text_4: "Фамилия",
                contact_text_5: "Электронная почта",
                contact_text_6: "Телефон  номер",
                contact_text_7: "Отправить",
                contact_text_8: `Нажав кнопку "Отправить", вы подтверждаете, что даете компании свое согласие на обработку ваших персональных данных`,
                
                tour_inner_text_1: "Сумма за день",
                tour_inner_text_2: "сум",
                tour_inner_text_3: "человек",
                tour_inner_text_4: "Продолжительность тура",
                tour_inner_text_5: "дней",
                tour_inner_text_6: "За каждый дополнительный день",
                tour_inner_text_7: "Ваш имя",
                tour_inner_text_8: "От",
                tour_inner_text_9: "До",
                tour_inner_text_10: "Купить",
                
                footer_text_1: "«Инвестиции в поездки это инвестиции в себя»",
                footer_text_2: "«Тот, кто живет, видит много. Тот, кто путешествует, видит больше»",
                footer_text_3: "Полезные ссылки",
                footer_text_4: "Связаться с нами",
                footer_text_5: "Подпишитесь на нас",
            },


            eng: {
                page_name_1: "Home",
                page_name_2: "Destinations",
                page_name_3: "About company",
                page_name_4: "Contacts",
                
                text_1: "Tours around the world",
                text_2: "Tours from Tashkent: unforgettable trips at a competitive price",
                text_3: "To learn more",
                text_4: "View tours",
                text_5: "We are the best in our business",
                text_6: "Why choose us? Our advantages.",
                text_7: "Popular Tours",
                text_8: "The most profitable and interesting tours from Tashkent",
                text_9: "View all",
                text_10: "News",
                text_11: "The most interesting news and blog",
                text_12: "Enjoy a GREAT trip with us",
                text_13: "Our company provides a wide range of services in the field of tourism. We employ the best tour operators in Tashkent who will help you: book transfers in advance at competitive prices; choose the best hotel and book a room there; We will help you decide on your choice of vacation spot; choose the most convenient tour from the widest range.",
                text_14: "More details",
                
                adventure_text_1: "Your Ideal Adventure Experience",
                adventure_text_2: "Activities and Accommodation",
                
                about_text_1: "Why choose Delta Tour",
                about_text_2: "Our origins and history",
                about_text_3: "Tours to Egypt involve a choice of resorts where you can have a great time, each of them is famous for a certain type of recreation, so you need to pay great attention to the choice of region. We will tell you in more detail about the most popular ones, however, the staff of our travel agency can give you more complete information; they will select the most profitable and optimal option for a trip to Egypt from Shymkent to suit your taste and budget. <br><br> One of the oldest resorts in Egypt is Hurghada, which originates from an ordinary working village. This picturesque region was noticed in time, and a luxurious resort was built on the site of the settlement, which is famous for its magnificent beaches with clear water, a flat bottom and very fine white sand. Hurghada has fairly affordable prices for tours, and is the most optimal point for departure on various excursions; there is also an opinion that their cost here is much lower.",
                
                contact_text_1: "Tashkent city Mirzo-Ulugbek district, building 100, 700124",
                contact_text_2: "Still have questions?",
                contact_text_3: "Name",
                contact_text_4: "Surname",
                contact_text_5: "Email",
                contact_text_6: "Phone number",
                contact_text_7: "Send",
                contact_text_8: `By clicking the "Submit" button, you confirm that you give the company your consent to processing of your personal data`,
                
                tour_inner_text_1: "Amount per day",
                tour_inner_text_2: "sum",
                tour_inner_text_3: "Human",
                tour_inner_text_4: "Duration of the tour",
                tour_inner_text_5: "days",
                tour_inner_text_6: "For each additional day",
                tour_inner_text_7: "Your name",
                tour_inner_text_8: "From",
                tour_inner_text_9: "Before",
                tour_inner_text_10: "Buy",
                
                footer_text_1: "“Investing in travel is investing in yourself”",
                footer_text_2: "“He who lives sees a lot. He who travels sees more”",
                footer_text_3: "Useful links",
                footer_text_4: "Connect with us",
                footer_text_5: "Follow us",
            }
        }
    })

    vueApp.use(i18n)
})