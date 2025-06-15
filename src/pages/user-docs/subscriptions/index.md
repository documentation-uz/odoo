hide-toc

:   

# Obunalar

Odoo **Subscriptions** ilovasi obuna asosidagi mahsulotlar yoki xizmatlar orqali takrorlanuvchi daromadni boshqarish uchun mo'ljallangan. U avtomatlashtirilgan hisob-kitob, yangilanishni boshqarish va mijozlar hayot tsiklini kuzatishni qo'llab-quvvatlaydi.

Obunalar qo'lda yoki onlayn savdo orqali avtomatik ravishda yaratilishi mumkin, takrorlanuvchi hisob-kitob uchun turli xil variantlar bilan. Ilova boshqa Odoo modullari bilan **Invoicing**, **CRM**, **Sales** va **Helpdesk** kabi to'liq obuna ish oqimlarini qo'llab-quvvatlash uchun integratsiyalashadi.

::::::: cards
::: 
Obuna rejalari

Turli mahsulot takliflariga moslashtirilgan obuna reja shablonlarini sozlash
:::

::: 
Obunani yangilash

Obunalar uchun asosiy boshqaruv faoliyatini tushunish
:::

::: 
Obunani kengaytirish

Xuddi shu savdo buyurtmasida joriy obunachilar uchun ko'proq qiymat taklif qilish
:::

::: 
Obunalarni eCommerce bilan integratsiyalash

Odoo **eCommerce** ilovasi integratsiyasi bilan obuna mahsulotlarini taklif qilish
:::
:::::::


## Takrorlanuvchi rejalarni sozlash

Odoo'da obuna mahsulotlari bilan ishlashni boshlash uchun avval *takrorlanuvchi rejalar* (avval *takrorlanish davrlari* deb nomlangan) sozlanishi kerak.

Takrorlanuvchi rejalar obunalar yana yangilanishdan oldin faol bo'lgan vaqt oynalaridir. Obuna faol bo'lgan vaqtda mijozlar mahsulot yoki xizmatlarni oladi va qo'llab-quvvatlash xizmati triajasi kabi qo'shimcha imtiyozlarga ham ega bo'lishi mumkin. To'lov nuqtai nazaridan, bu takrorlanuvchi rejalar mijozning obuna imtiyozlarini saqlab qolish uchun qanchalik tez-tez to'lashi kerakligini belgilaydi.

Takrorlanuvchi rejalarni sozlash uchun `Subscriptions app ‣ Configuration ‣ Recurring Plans` sahifasiga o'ting.

Sukut bo'yicha, **Subscriptions** ilovasi `Monthly` va `Yearly` kabi allaqachon mavjud bo'lgan bir qator umumiy takrorlanuvchi rejalarni o'z ichiga oladi.

`Recurring Plans` boshqaruv panelida `New` tugmasini bosib yangi takrorlanuvchi reja yarating, bu reja `Name`, `DETAILS`, `SELF-SERVICE` va `Pricing` maydon qiymatlari belgilanadigan bo'sh formani ochadi.

![A blank recurring plan form in the Odoo Subscriptions application.](subscriptions/recurring-plan-blank-form.png)

::: warning

[Days] o'lchov birligi obuna mahsulotlari uchun `Billing Period` sifatida *ishlatilishi mumkin emas*. Odoo'da kunlik takrorlanish davri ijaralar uchun belgilangan va obuna asosidagi savdo buyurtmalariga **qo'shilishi mumkin emas**.

Bu cheklov kunlik hisob-kitoblarni yaratadigan savdo buyurtmalaridan qochish uchun mavjud.
::::

### DETAILS bo'limi

Takrorlanuvchi rejaga mos `Name` (masalan, [Monthly], [Bi-weekly], [Quarterly] va boshqalar) bergandan so'ng, quyidagi konfiguratsiya maydonlarini to'ldirish uchun formaning `DETAILS` bo'limiga o'ting:

- `Billing Period`: takrorlanuvchi rejaning takrorlanish davrini belgilaydi. Matn maydoniga raqamli qiymatni kiriting va miqdorni tegishli ochiladigan menyuda `Weeks`, `Months` yoki `Years` da vaqt birligi bilan kontekstuallashtiring.

- `Automatic Closing`: kunlarda raqamli qiymat, agar to'lov amalga oshirilmasa, obuna avtomatik ravishda yopilishi belgilanadi.

  ::: example
  Agar obuna har oyning 1-kunida yangilanishi belgilangan bo'lsa va `Automatic Closing` qiymati [15] `Days` ga o'rnatilgan bo'lsa, to'lov olinmasa obuna o'sha oyning 16-kunida yopiladi.
  :::

- `Align to Period Start`: ixtiyoriy ravishda bu reja ostidagi yangi va takrorlanuvchi obuna yangilanish sanalarini `Billing Period` da belgilangan narsaning birinchi kuniga majburan joylashtirish.

- `Company`: ixtiyoriy tayinlash, agar ma'lumotlar bazasida `Multi-company` funksiyasi yoqilgan bo'lsa. Bu qiymatni tayinlash takrorlanuvchi rejani o'sha kompaniyaning joylashuvi uchun maxsus ravishda mavjud qiladi.

- `Invoice Email Template`: obunalar hisob-kitob aloqalarida ishlatilishi uchun maxsus elektron pochta shablonini tayinlaydi. Bu yerdagi standart tayinlash [Invoice: Sending] bo'lib, unda `Subject` maydoni va `Content` yorlig'ida mijozning ismi, hisob-kitob raqami, jami hisobga olingan summa va boshqalar kabi turli xil dinamik maydonlar mavjud.

  ::: tip
  : note

Bu yerda qo'shilgan narx qoidalari obuna mahsulotining formasidagi standart narx ma'lumotlaridan ustun turadi. Bu mijozlarni takrorlanuvchi rejani sotib olishga rag'batlantiradigan bitimlar, chegirmalar va shunga o'xshash narx sozlash strategiyalarini qo'llab-quvvatlash uchun mo'ljallangan.
::::

### Aqlli tugmalar

Alohida `Recurring Plans` formasining yuqori qismida rejaga bog'langan takrorlanuvchi daromad manbalarida navigatsiya qilish uchun ikkita aqlli tugma mavjud:

- `Subscriptions`: takrorlanuvchi reja ostida tushadigan faol obunalar savdo buyurtmalari sonini ko'rsatadi. Tugmani bosish jadval ko'rinishiga olib boradi, bu yerda har bir qator tegishli obunalar savdo buyurtmasiga giperhavola qiladi.
- `Subscription Items`: barcha alohida takrorlanuvchi obuna xizmatlarini bandli tarzda ro'yxatlaydi. Agar mijoz bir xil savdo buyurtmasida bir nechta obuna buyurtma qilgan bo'lsa, `Subscription` va `Customer` qiymatlari takrorlanadi.

## Mahsulot formasini sozlash

Takrorlanuvchi rejalar sozlangandan so'ng, `Subscriptions app ‣ Products ‣ Products` sahifasiga o'tib obuna mahsulotini yarating va mavjud mahsulotni tahrirlash uchun bosing yoki `New` tugmasini bosib yangi mahsulot yarating, bu obuna mahsuloti formasini ochadi.

::: tip

Sukut bo'yicha, `Subscriptions` opsiyasi allaqachon yoqilgan, bu Odoo'ni uni obuna mahsuloti sifatida tan olishga undaydi. `Subscriptions` va `Sales` opsiyalarini yoqiq qoldirishga ishonch hosil qiling.
::::

![A basic subscription product form in Odoo Subscriptions application.](subscriptions/subscription-product-form.png)

Mahsulot formasida obuna mahsulotining to'g'ri ishlashi uchun `General Information` yorlig'ida quyidagi elementlarni sozlang:

- `Product type`: bu qiymat odatda `Service` ga o'rnatiladi, ammo obunaning maqsadiga qarab boshqa mahsulot turlari ham ishlatilishi mumkin (masalan, jismoniy mahsulot quti obunalari, qo'shimcha jismoniy tovarlar bilan eLearning kursi va boshqalar).
- `Invoicing policy`: bu qiymatni mijoz obunasi uchun qachon to'lashi kerakligiga o'rnating.
- `Unit of Measure`: mahsulot Odoo'da qanday hisoblanishi kerak, zaxira maqsadlari uchun. Ko'pgina obunalar uchun `UoM (Unit of Measure)` `Units` bo'ladi.
- `Sales Price`: mijoz takrorlanish davri uchun to'laydigan obunaning takrorlanuvchi narxini kiriting.

Ixtiyoriy ravishda quyidagilar haqida ma'lumot o'rnating:

- `Create on Order` maydoni: bu Odoo'da tanlangan `Project` `fa-building-o` da yangi `Task` yaratish, `Event Registration` yoki `Course Access` kabi ikkilamchi harakatlarni yoqadi. Agar bu maydonning ochiladigan menyusidagi tanlanadigan harakatlardan hech biri kerak bo'lmasa, maydon qiymati uchun `Nothing` ni tanlang.
- Agar obuna mijozlar uchun bir nechta tanlovni o'z ichiga olsa (ya'ni ovqat yetkazib berish, moslashtirilgan moda qutilari va boshqalar), `Attributes & Variants` yorlig'i.
- Agar mahsulot sotuvchidan olingan bo'lsa, masalan, qayta sotuvchi (chakana savdo) yoki subpudratchi operatsiyalarining bir qismi sifatida `Purchase` yorlig'i.

`Recurring Prices` yorlig'ida obuna uchun narx variantlarini aniqlashtiring. Mavjud bo'lgan har bir variant uchun yangi qator qo'shish uchun `Add a price rule` tugmasini bosing.

::: tip

Uzunroq vaqt `Recurring Plan` vaqt davrlari odatda xarajatlarni tejash bilan rag'batlantiriladi. Biznesning moliyaviy yo'lini qo'llab-quvvatlagan holda mijozlarga chegirma taklif qilish uchun umumiy `Recurring Price` qiymatlarini pasaytirishni o'ylab ko'ring.
::::

Nihoyat, agar obuna **eCommerce** veb-saytida sotilishi kerak bo'lsa, `fa-globe` `Go To Website` aqlli tugmasini bosing va mahsulot sahifasi sarlavhasida kulrang slayderni `Unpublished` dan yashil `Published` holatiga bosing.

## Obunalar taklifini yaratish 

`Sales` yoki `Subscriptions` ilova boshqaruv panellariga o'tib, so'ngra `New` tugmasini bosib yangi mijoz obunasini qo'lda yarating.

::: tip

Mahsulot formalarida `Subscriptions` deb belgilangan va **eCommerce** veb-saytida sotiladigan mahsulotlar Odoo'ning orqa qismida *avtomatik* ravishda obuna takliflarini yaratadi va tasdiqlaydi.
::::

::: warning

Belgilangan takrorlanuvchi rejaga ega savdo buyurtmalari avtomatik ravishda obunalarga aylanadi.
::::

Taklif formasida `Customer` va `Recurring Plan` kabi zarur maydonlarni, shuningdek `Order Lines` yorlig'ini to'ldiring.

Ixtiyoriy ravishda quyidagilarni belgilang:

- `Quotation Template`, agar forma maydonlarini to'ldirishga yordam berish uchun tayyor bo'lsa.

- `Expiration` sanasi, obuna taklifining qachon amal qilmasligini ko'rsatish uchun.

  ::: tip
  : tip

`Customer Addresses` xususiyatini yoqish orqali turli hisob-kitob va yetkazib berish manzillarini belgilang.
::::

## Tasdiqlash 

`Send By Email` tugmasini bosib taklifni mijozga tasdiqlash uchun yuboring yoki `Confirm` tugmasini bosib darhol tasdiqlang.

::: tip

Mijoz o'z taklifini ko'rishi, imzolashi va to'lashi va siz bilan muloqot qilishi mumkin bo'lgan mijoz portalini ko'rish uchun `Preview` tugmasini bosing.
::::

Agar taklifni tasdiqlash uchun `Online signature` yoki `Online payment` talab qilinsa, `Other Info` yorlig'ida `SALES` bo'limi ostidagi bu yorliqlardan biri (yoki ikkalasi) yonidagi katak belgilarini o'rnating.


::: 
subscriptions/ecommerce subscriptions/plans subscriptions/upselling
subscriptions/renewals subscriptions/closing
subscriptions/automatic_alerts subscriptions/scheduled_actions
subscriptions/reports
:::