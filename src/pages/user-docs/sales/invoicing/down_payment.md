# Oldindan to'lovlar

Oldindan to'lov - bu sotish bitimini tasdiqlash paytida amalga oshiriladigan dastlabki, oldindan to'lovdir. Oldindan to'lovlar har ikkala tomon (sotuvchi va xaridor) uchun xavfni kamaytiradi, chunki ular sotish bitimini yakunlash uchun o'zaro majburiyatni ko'rsatadi.

Oldindan to'lov bilan xaridor to'lanishi kerak bo'lgan umumiy summaning bir qismini to'laydi va qolgan summani keyinroq to'lashga rozi bo'ladi. O'z navbatida, sotuvchi oldindan to'lovni qabul qilgandan keyin yoki undan keyin xaridorga tovarlar yoki xizmatlarni taqdim etadi va qolgan summa keyinroq to'lanishiga ishonadi.

Odoo **Sales** ilovasida oldindan to'lovlar har bir alohida sotish bitimining ehtiyojlariga mos ravishda sozlanishi mumkin.

## Hisob-kitoblarni yaratish

Sotish buyurtmasi tasdiqlanganda, `Create Invoice` tugmasi orqali hisob-kitob yaratish imkoniyati paydo bo'ladi. Bosilganda, `Create invoice(s)` oynasi paydo bo'ladi.

![Odoo Sales da paydo bo'ladigan hisob-kitoblar yaratish pop-up formasi.](down_payment/create-invoices-popup-form.png)

::: tip

Hisob-kitoblar avtomatik ravishda qoralama sifatida yaratiladi, shuning uchun ular tasdiqlashdan oldin ko'rib chiqilishi mumkin.
::::

`Create invoices` pop-up oynasida `Create Invoice` maydonida tanlash uchun 3 ta variant mavjud:

- `Regular invoice`
- `Down payment (percentage)`
- `Down payment (fixed amount)`

## Dastlabki oldindan to'lov so'rovi

`Create invoice(s)` pop-up oynasida oldindan to'lov variantlari quyidagilar:

- `Down payment (percentage)`
- `Down payment (fixed amount)`

Kerakli oldindan to'lov variantini tanlang, so'ngra `Down Payment Amount` maydonida kerakli summani foiz yoki qat'iy summa sifatida belgilang.

Barcha maydonlar to'ldirilgandan so'ng, `Create Draft` tugmasini bosing. Ushbu tugmani bosgandan so'ng, Odoo `Customer Invoice Draft`ni ko'rsatadi.

::: warning

Agar `Invalid Operation` xatosi paydo bo'lsa, `invoicing policy` to'g'ri sozlanganligini ikki marta tekshiring. Ba'zi hollarda, masalan, hisob-kitob siyosati hisob-kitobdan oldin yetkazib berishni talab qilish uchun sozlangan.
::::

`Customer Invoice Draft`ning `Invoice Lines` bo'limida `Create invoices` pop-up formasida hozirda sozlangan oldindan to'lov `Product` sifatida ko'rinadi.

## Misol: 50% oldindan to'lov so'rash

::: tip

Quyidagi misol `Cabinet with Doors` mahsulotida 50% miqdordagi oldindan to'lovni o'z ichiga oladi, uning `Invoicing Policy`si `Ordered quantities` sifatida belgilangan.

![Turli xil tafsilotlar va maydonlarni ko'rsatadigan eshikli shkaf mahsuloti formasi.](down_payment/cabinet-product-details.png)
::::

Birinchidan, `Sales app ‣ New`ga o'ting va taklifnomaga `Customer` qo'shing.

Keyin, `Order Lines` bo'limida `Add a product`ni bosing va `Cabinet with Doors` mahsulotini tanlang.

Buyurtma tasdiqlanganda (`Confirm` tugmasi orqali), taklifnoma sotish buyurtmasiga aylanadi. Bu sodir bo'lgandan so'ng, `Create Invoice`ni bosish orqali hisob-kitobni yarating va ko'ring.

![Odoo Sales ilovasida tasdiqlangan eshikli shkafning sotish buyurtmasi.](down_payment/cabinet-sales-orders-confirmed.png)

Keyin, paydo bo'ladigan `Create invoices` pop-up oynasida `Down payment (percentage)`ni tanlang va `Down Payment Amount` maydoniga [50] ni kiriting.

::: tip

`Down payment` mahsulotiga biriktirilgan `Income Account`ni o'zgartirish mumkin.

Qo'shimcha ma'lumot uchun `income account modification on down payments` hujjatlarini ko'rib chiqing.

`Down payment Account`ni mahsulot kategoriyasida ham o'rnatish mumkin. Agar o'rnatilgan bo'lsa, bu hisob ustuvor hisoblanadi.
::::

Nihoyat, hisob-kitob qoralamasini yaratish va ko'rish uchun `Create Draft Invoice`ni bosing.

`Create Draft Invoice`ni bosish qoralama hisob-kitobni ko'rsatadi, u `Invoice Lines` bo'limida oldindan to'lovni `Product` sifatida o'z ichiga oladi.

Undan keyin hisob-kitobni `Confirm`ni bosish orqali tasdiqlash va e'lon qilish mumkin. Hisob-kitobni tasdiqlash holati `Draft`dan `Posted`ga o'zgaradi. Shuningdek, u sahifaning yuqori qismida yangi tugmalar qatorini ko'rsatadi.

![Odoo Sales da oldindan to'lov aytib o'tilgan namunaviy qoralama hisob-kitob.](down_payment/draft-invoice-sample.png)

Ushbu tugmalardan `Register Payment`ni bosish orqali to'lovni ro'yxatdan o'tkazish mumkin.

![Tasdiqlangan mijoz hisob-kitobida Register Payment tugmasining namoyishi.](down_payment/register-payment-button.png)

Shunday qilish kerakli ma'lumotlar bilan avtomatik to'ldirilgan `Register Payment` pop-up formasini ko'rsatadi. Berilgan ma'lumotlar to'g'riligini tasdiqlang va kerakli o'zgarishlarni kiriting. Tayyor bo'lganda, `Create Payment` tugmasini bosing.

![Create payment tugmasi bilan Register Payment pop-up oynasining namoyishi.](down_payment/register-payment-pop-up-window.png)

`Create Payment`ni bosgandan so'ng, Odoo mijoz hisob-kitobini ko'rsatadi, endi yuqori o'ng burchakda yashil `In Payment` banner bilan.

![Yuqori o'ng burchakda joylashgan yashil In Payment banner bilan mijoz hisob-kitobi.](down_payment/customer-invoice-green-payment-banner.png)

Endi, mijoz buyurtmaning qolgan summasini to'lamoqchi bo'lganda, yana bir hisob-kitob yaratilishi kerak. Buning uchun breadcrumb havolalar orqali sotish buyurtmasiga qayting.

Sotish buyurtmasiga qaytgandan so'ng, `Order Lines` bo'limida yangi `Down Payments` bo'limi, shuningdek, hozirgina hisob-kitob qilingan va e'lon qilingan oldindan to'lov mavjud.

![Sotish buyurtmasining order lines bo'limidagi down payments bo'limi.](down_payment/down-payments-section-order-lines.png)

Keyin, `Create Invoice` tugmasini bosing.

Paydo bo'ladigan `Create invoices` pop-up oynasida ikkita yangi maydon mavjud: `Already invoiced` va `Amount to invoice`.

![Odoo Sales da create invoices pop up da oldindan to'lovni chegirma qilish varianti.](down_payment/create-invoices-pop-up-already-invoiced.png)

Agar qolgan summa to'lashga tayyor bo'lsa, `Regular Invoice` variantini tanlang. Odoo `Amount to invoice` maydonida ko'rsatilganidek, umumiy to'lovni yakunlash uchun kerak bo'lgan aniq summa uchun hisob-kitob yaratadi.

Tayyor bo'lganda, `Create Draft Invoice`ni bosing.

Shunday qilish `Invoice Lines` bo'limida o'sha aniq sotish buyurtmasi uchun *barcha* hisob-kitoblarni ro'yxatlaydigan yana bir `Customer Invoice Draft` sahifasini ko'rsatadi. Har bir hisob-kitob qatori har bir hisob-kitob bilan bog'liq barcha kerakli ma'lumotlarni ko'rsatadi.

Oqimni yakunlash uchun hisob-kitob holatini `Draft`dan `Posted`ga o'zgartiradigan `Confirm`ni bosing. Keyin, `Register Payment`ni bosing.

Yana bir bor, `Register Payment` paydo bo'ladi, barcha maydonlar buyurtmada to'lanishi kerak bo'lgan qolgan summa bilan birga kerakli ma'lumotlar bilan avtomatik to'ldiriladi.

![Odoo sales da ikkinchi register payment pop-up formasi.](down_payment/second-register-payment-popup.png)

Ushbu ma'lumotni tasdiqlagandan so'ng, `Create Payment`ni bosing. Shunday qilish yuqori o'ng burchakda yashil `In Payment` banner bilan yakuniy `Customer Invoice`ni ko'rsatadi. Shuningdek, `Invoice Lines` bo'limida ikkala oldindan to'lov ham mavjud.

![Odoo Sales da in payment banner bilan ikkinchi oldindan to'lov hisob-kitobi.](down_payment/second-down-payment-in-payment-invoice.png)

Shu nuqtada oqim endi yakunlandi.

::: tip

Bu oqim `Fixed amount` oldindan to'lov varianti bilan ham mumkin.
::::

::: warning

Agar oldindan to'lov `Delivered quantities` hisob-kitob siyosatiga ega mahsulot bilan ishlatilsa va mahsulot narxi 50% oldindan to'lovdan *oshsa* (ko'pchilik hollarda bo'lgani kabi), oddiy hisob-kitob yaratiladi.

Biroq, 50% oldindan to'lovdan *kamroq* qimmatga tushadigan mahsulotlar uchun mijozni hisob-kitob qilish vaqti kelganda oldindan to'lovlar **chegirib bo'lmaydi**.

Buning sababi, Odoo hisob-kitoblar uchun salbiy umumiy summalarni ruxsat bermagani uchun mahsulot(lar) yakuniy hisob-kitobni yaratishdan *oldin* yetkazib berilishi kerak.

Agar hech narsa yetkazib berilmagan bo'lsa, oldindan to'lovdan keyin yaratilgan qoralama hisob-kitobni bekor qiladigan `Credit Note` yaratiladi.

`Credit Note` variantidan foydalanish uchun yetkazib berishni tasdiqlash maqsadida *Inventory* ilovasi o'rnatilgan bo'lishi kerak. Aks holda, yetkazib berilgan miqdorni to'g'ridan-to'g'ri sotish buyurtmasiga qo'lda kiritish mumkin.
::::

## Misol: 100% oldindan to'lov so'rash

100% oldindan to'lov so'rash jarayoni `50% oldindan to'lov` o'rnatish jarayoniga o'xshaydi, lekin kamroq qadamlar bilan.

::: tip

100% oldindan to'lov sotish buyurtmasining to'liq to'loviga **teng emas**.

Oddiy hisob-kitob jarayoni orqali to'langan sotish buyurtmasi qo'shimcha hisob-kitoblar yaratilishiga ruxsat bermaydi va Sotish buyurtmasida *Create Invoice* tugmasini **ko'rsatmaydi**.

Ushbu misolga rioya qilish Sotish buyurtmasida *Create Invoice* tugmasining ko'rsatilishiga **sabab bo'ladi**. Buning sababi, Odoo sotish buyurtmasining to'lovini yakunlash uchun oldindan to'lovdan keyin yana bir hisob-kitob yaratilishini kutadi.
::::

Ushbu misolda *Solar Panel Installation* mahsuloti ishlatilmoqda.

100% oldindan to'lovni sozlash uchun `Sales app ‣ New`ga o'tish orqali boshlang va taklifga `Customer` qo'shing.

Keyin, `Order Lines` bo'limida `Add a product`ni bosing va [Solar Panel Installation] mahsulotini tanlang.

`Confirm` tugmasini bosgandan so'ng, taklifnoma sotish buyurtmasiga aylanadi. Shu paytda yuqori chap burchakdagi `Create Invoice`ni bosish orqali hisob-kitob yaratish mumkin.

Paydo bo'ladigan `Create invoices` pop-up oynasida `Down payment (percentage)`ni tanlang va `Down Payment Amount` maydoniga [100] ni kiriting.

![100% Down Payment sifatida belgilangan Down payment (percentage) varianti tanlangan.](down_payment/100p-down-payment-percentage.png)

Keyin, hisob-kitob qoralamasini yaratish uchun `Create Draft Invoice`ni bosing. Bu shuningdek, qoralama hisob-kitobni ko'rishga olib keladi, u `Invoice Lines` bo'limida `Down payment`ni `Product` sifatida o'z ichiga oladi.

Hisob-kitobni endi `Confirm`ni bosish orqali tasdiqlash va e'lon qilish mumkin. Hisob-kitobni tasdiqlash holati `Draft`dan `Posted`ga o'zgaradi. Shuningdek, u sahifaning yuqori qismida yangi tugmalar qatorini ko'rsatadi.

To'lovni `Register Payment` tugmasini bosish orqali ro'yxatdan o'tkazish mumkin.

Shunday qilish kerakli ma'lumotlar bilan avtomatik to'ldirilgan `Register Payment` pop-up formasini ko'rsatadi. Berilgan ma'lumotlar to'g'riligini tasdiqlang va kerakli o'zgarishlarni kiriting. Tayyor bo'lganda, `Create Payment` tugmasini bosing.

`Create Payment`ni bosgandan so'ng, Odoo mijoz hisob-kitobini ko'rsatadi, endi yuqori o'ng burchakda yashil `In Payment` banner bilan.

![Yuqori o'ng burchakda joylashgan yashil In Payment banner bilan mijoz hisob-kitobi.](down_payment/100p-invoice.png)

Jarayon endi yakunlandi va 100% oldindan to'lov muvaffaqiyatli qo'llanildi.

## Oldindan to'lovlarda daromad hisobini o'zgartirish

`Down Payment` mahsulot sahifasiga biriktirilgan daromad hisobini o'zgartirish yoki sozlash uchun *Accounting* ilovasi **o'rnatilgan** bo'lishi kerak.

`Products` sahifasiga o'ting (`Sales app ‣ Products ‣ Products`), qidiruv panelida [Down Payment] mahsulotini qidiring va mahsulot tafsilot sahifasini ko'rsatish uchun uni tanlang.

*Accounting* ilovasi o'rnatilgan holda, mahsulot sahifasida `Accounting` bo'limi mavjud bo'ladi.

`Accounting` bo'limida `Receivables` bo'limida joylashgan `Income Account` maydonida daromad hisobini o'zgartirish mumkin.

![Oldindan to'lovlarga daromad hisobi havolasini qanday o'zgartirish.](down_payment/income-account.png)