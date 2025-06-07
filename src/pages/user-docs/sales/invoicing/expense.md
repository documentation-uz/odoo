# Mijozlarga xarajatlarni qayta hisoblash

Mijoz uchun loyiha ustida ishlayotganda, xodimlar ko'pincha loyiha bilan bog'liq turli xarajatlar uchun o'z pullarini sarflashga majbur bo'ladilar.

Masalan, xodim mijoz uchun joyida xizmat ko'rsatish paytida mehmonxona uchun o'z pulidan to'lashi kerak bo'lishi mumkin. Kompaniya sifatida, bu xarajat mijozga qayta hisob-kitob qilinishi kerak. Odoo bilan bu kabi xarajatlarni loyiha bilan bog'liq mijozga tez qayta hisob-kitob qilish mumkin.

## Xarajatlar ilovasi

Mijozga xarajat uchun qayta hisob-kitob qilish imkoniyatiga ega bo'lish uchun *Expenses* ilovasi **o'rnatilgan** bo'lishi kerak.

*Expenses* ilovasini o'rnatish uchun `main Odoo dashboard ‣ Apps`ga o'ting va *Expenses* ilovasi blokida `Install`ni bosing. Bosilganda, Odoo ilovani o'rnatadi, sahifani yangilaydi va asosiy Odoo dashboard'iga qaytadi.

## Sotish buyurtmalariga xarajatlar qo'shish

Boshida, qayta hisob-kitob qilinadigan xarajat qo'shilishi mumkin bo'lgan *Sales* ilovasida tasdiqlangan sotish buyurtmasiga ega bo'ling. Yoki noldan yangi sotish buyurtmasini yarating. Buning uchun `Sales app ‣ New`ga o'ting. Shunday qilish bo'sh taklifnoma formasini ko'rsatadi.

Keyin, `Customer` qo'shing va `Add a product`ni bosish orqali `Order Lines` bo'limiga mahsulot qo'shing. Keyin, pasayuvchi menyudan mahsulotni tanlang.

Nihoyat, sotish buyurtmasini tasdiqlash uchun `Confirm`ni bosing.

![Odoo Sales ilovasida tasdiqlangan sotish buyurtmasi shunday ko'rinadi.](expense/confirmed-sales-order.png)

Sotish buyurtmasi tasdiqlangach, xarajat yaratish vaqti keldi.

Buning uchun `main Odoo dashboard ‣ Expenses`ga o'tish orqali *Expenses* ilovasiga o'ting.

Keyin, *Expenses* dashboard'idan bo'sh xarajatlar formasini ko'rsatish uchun `New`ni bosing.

![Odoo Expenses ilovasida bo'sh xarajatlar formasi.](expense/blank-expenses-form.png)

Xarajatlar formasida xarajatga oson murojaat qilish uchun `Description` qo'shing.

Keyin, `Category` maydonida pasayuvchi menyudan quyidagi variantlardan birini tanlang:

- `Communication`: loyiha/buyurtma bilan bog'liq har qanday aloqa shakli.
- `Others`: boshqa kategoriyalarga mos kelmaydigan xarajat.
- `Meals`: loyiha/buyurtma bilan bog'liq har qanday ovqat xarajatlari.
- `Gifts`: loyiha/buyurtma bilan bog'liq har qanday sovg'a xarajatlari.
- `Mileage`: loyiha/buyurtma bilan bog'liq har qanday masofa (benzin) xarajatlari.
- `Travel & Accommodation`: loyiha/buyurtma bilan bog'liq har qanday sayohat yoki turar joy xarajatlari.

::: tip

Yangi xarajat kategoriyalarini xarajat formasidan yaratish mumkin, `Category` maydonining pasayuvchi menyusini bosib, `View All`ni tanlab va `Search:Category` pop-up oynasidan `New`ni bosish orqali.

![Odoo Expenses da bo'sh xarajatlar formasidan Search:Category xarajatlar pop-up oynasi.](expense/expense-category-pop-up.png)
::::

Mijozga qisqa mehmonxona yashashi uchun qayta hisob-kitob qilinadigan ushbu namunaviy ish oqimi uchun ushbu misol uchun `Category` `[TRANS & ACC] Travel & Accommodation` hisoblanadi.

::: tip

Quyidagi misol ish oqimi davomida aytib o'tilgan barcha maydonlarni ko'rish/o'zgartirish uchun *Sales*, *Accounting* va *Expense* ilovalarini talab qiladi.
::::

`Category` maydonining ostida `Total` maydoniga xarajat qilinadigan summani kiriting.

Keyin, `Total` ichida `Included taxes` bor yoki yo'qligini belgilang. Agar `Included taxes` maydonidan oldindan sozlangan soliq miqdori tanlansa, Odoo `Total` maydoniga kiritilgan summa asosida soliqli summani avtomatik hisoblab chiqadi.

Keyin, qaysi `Employee` xarajat uchun javobgar ekanligini tanlang va `Paid By` maydonida variantni tanlang: `Employee (to reimburse)` yoki `Company`.

Bu holda, bizning xodimimiz mehmonxona uchun o'z puli bilan to'lagan, shuning uchun `Employee (to reimburse)` varianti tanlanadi.

Xarajatlar formasining o'ng tomonida `Bill Reference` qo'shish imkoniyati mavjud. Uning ostida avtomatik to'ldirilgan `Expense Date` va `Account` maydonlari mavjud.

::: tip

Kerak bo'lsa, `Expense Date` va `Account` maydonlarini o'zgartirish mumkin.
::::

Keyin, `Customer to Reinvoice` maydonida bo'sh maydonni bosib pasayuvchi menyuni ko'rsating. Ushbu pasayuvchi menyudan ushbu xarajat biriktirilishi kerak bo'lgan tegishli sotish buyurtmasini tanlang. Mijozga xarajat uchun qayta hisob-kitob qilish uchun ushbu maydon **to'ldirilishi shart**.

Nihoyat, `Analytic Distribution` va `Company` maydonlarini o'zgartirish imkoniyati mavjud. Bu maydonlar mijozga qayta hisob-kitob qilinadigan xarajatni yakunlash uchun *talab qilinmaydi*, lekin kerak bo'lsa o'zgartirish uchun mavjud.

Shuningdek, xarajat formasining pastki qismida kerak bo'lsa ushbu xarajat bilan bog'liq har qanday eslatmalarni qo'shish mumkin bo'lgan `Notes...` bo'limi mavjud.

![Odoo Expenses ilovasida to'ldirilgan xarajatlar formasi.](expense/filled-in-expense-form.png)

Xarajat formasining yuqori qismida `Attach Receipt`, `Create Report` va `Split Expense` tugmalari mavjud.

Agar xarajatga biriktirilishi kerak bo'lgan jismoniy yoki raqamli kvitansiya bo'lsa, `Attach Receipt`ni bosing.

Agar ushbu xarajat narxini bo'lish kerak bo'lsa, `Split Expense`ni bosing. Bu xususiyat bir qator sabablarga ko'ra ishlatilishi mumkin (boshqa xodim bilan xarajatni bo'lish, turli soliq stavkalarini joylashtirish va boshqalar).

Agar bu variantlarning hech biri kerak bo'lmasa, hozirgina sozlangan xarajatlar hisobotini qulflash uchun `Create Report`ni bosing.

Shunday qilish yangi xarajat uchun `Expense Report Summary`ni ko'rsatadi.

![Odoo Expenses ilovasida xarajatlar hisoboti xulosasi.](expense/expense-report-summary-form.png)

Bu yerda, xarajat bilan bog'liq tafsilotlar tasdiqlangandan so'ng, `Submit to Manager`ni bosing. Bu xarajatlar hisobotini xarajatni ko'rib chiqadigan tasdiqlovchi menejerga yuboradi.

Xarajatni ko'rib chiqish va tasdiqlash uchun mas'ul menejer xarajat bilan bog'liq tafsilotlarni tekshiradi va agar hech qanday muammo bo'lmasa, ular `Approve` tugmasini bosingalar --- bu faqat xodim tomonidan menejerga yuborilgan `Expense Report Summary`ning menejer ko'rinishida *paydo bo'ladi*.

![Menejer Approve tugmasi bilan tasdiqlaydigan xarajatlar hisoboti xulosasi.](expense/expense-report-summary-manager-approve.png)

Tasdiqlangandan so'ng, `Expense Report Summary`ning yuqori qismidagi tugmalar yana o'zgaradi. Shu paytda `Expense Report Summary`ning yuqori qismidagi tugmalar quyidagilar: `Post Journal Entries`, `Report in Next Payslip`, `Refuse` va `Reset to Draft`.

![Formaning yuqori qismida post journal entries tugmasi bilan xarajatlar hisoboti xulosasi.](expense/expense-report-summary-manager-post-journal.png)

Menejer `Expense Report Summary` bilan qoniqganda, ular `Post Journal Entries`ni bosadi.

`Post Journal Entries`ni bosgandan so'ng, bu tugma yo'qoladi va `Expense` bo'limidagi `Analytic Distribution` ustuni `Customer to Reinvoice` maydonida xarajatga dastlab sozlangan sotish buyurtmasi bilan to'ldiriladi.

::: warning

Odatiy bo'lib, `Customer to Reinvoice` maydoni `[TRANS & ACC] Travel & Accommodation`, `[COMM] Communication`, `[FOOD] Meals` va `[MIL] Mileage` xarajat kategoriyasi uchun yoqilgan.

*Expenses* ilovasi bilan o'rnatilgan barcha standart xarajat kategoriyalarida qayta hisob-kitob siyosatlari faollashtirilgan **emas** ekanligini ta'kidlash kerak. Sozlamani qo'lda faollashtirish kerak bo'lishi mumkin.

Buning uchun ma'lumotlar bazasidagi barcha xarajat kategoriyalari ro'yxatini ko'rish uchun `Expenses app ‣ Configuration ‣ Expenses Categories`ga o'ting.

Har bir xarajat kategoriyasi uchun qaysi tanlovlar qilinganligini ko'rish uchun `Re-Invoice Expenses` ustuniga qarang.

![Odoo Expenses ilovasidagi Expense Categories sahifasida Re-Invoice Expenses ustuni.](expense/expense-categories-page.png)

Xarajat kategoriyasini o'zgartirish uchun o'sha aniq xarajatni ko'rsatish uchun `Category` maydonidagi `fa-arrow-right` `(o'ng strelka)`ni bosing.

`Invoicing` bo'limi ostida, `Re-Invoice Expenses` maydonida `At cost` yoki `Sales price`ni tanlang.

![Odoo Expenses ilovasidagi Expense Category formasidagi Re-Invoice Expenses maydoni.](expense/reinvoice-expenses-field.png)
::::

## Xarajatni qayta hisoblash

Ushbu qadamlar yakunlangach, mijozga xarajatning qayta hisob-kitobini yakunlash uchun sotish buyurtmasiga qaytish vaqti keldi.

Buning uchun `main Odoo dashboard ‣ Sales app`ga o'ting va xarajat uchun qayta hisob-kitob qilinishi kerak bo'lgan tegishli sotish buyurtmasini tanlang.

Sotish formasida yangi sozlangan xarajat endi `Order Lines` bo'limida, uning `Delivered` ustuni to'ldirilgan va hisob-kitob qilishga tayyor.

![Order Lines bo'limida hisob-kitob qilishga tayyor sozlangan xarajat bilan sotish buyurtmasi.](expense/sales-order-with-expense-order-lines.png)

Xarajat tafsilotlarini tasdiqlagandan so'ng, sotish buyurtmasining yuqori qismidagi `Create Invoice`ni bosing. Bosilganda, `Create invoices` pop-up oynasi paydo bo'ladi.

![Create Invoice bosilganda paydo bo'ladigan create invoices pop-up oynasi.](expense/create-invoices-popup.png)

Ushbu pop-up oynasidan `Create Invoice` maydonini standart `Regular invoice` variantida qoldiring va `Create Draft Invoice`ni bosing.

Shunday qilish `Invoice Lines` bo'limida *faqat* xarajatni ko'rsatadigan `Customer Invoice Draft`ni ko'rsatadi.

![Formaning Invoice Lines bo'limida xarajat bilan mijoz hisob-kitobi qoralamasi.](expense/customer-invoice-draft-with-expense.png)

Agar xarajat bilan bog'liq barcha ma'lumotlar to'g'ri bo'lsa, hisob-kitobni tasdiqlash uchun `Confirm`ni bosing. Shunday qilish hisob-kitob holatini `Draft`dan `Posted`ga o'tkazadi.

Hisob-kitobni mijozga yuborish uchun `Send & Print`ni bosing. Shunday qilish xabar tanasida oldindan sozlangan xabar va PDF hisob-kitob bilan `Send` pop-up oynasini ko'rsatadi. Xabarni ko'rib chiqish va kerak bo'lsa o'zgartirish mumkin.

Tayyor bo'lganda, hisob-kitobni mijozga yuborish uchun `Send & Print`ni bosing. Bosilganda, pop-up oynasi yo'qoladi va Odoo xabar/hisob-kitobni mijozga yuboradi. Qo'shimcha ravishda, hisob-kitobning PDF fayli yozuvlarni saqlash va/yoki chop etish maqsadida avtomatik yuklab olinadi.

`Customer Invoice`ga qaytib, mijoz hisob-kitob qilingan xarajat uchun to'laganda `Register Payment` tugmasini bosing.

![Register payment tugmasini bosishga tayyor mijoz hisob-kitobi.](expense/customer-invoice-register-payment.png)

`Register Payment` bosilganda, `Register Payment` pop-up oynasi paydo bo'ladi. Ushbu pop-up oynasida zarur maydonlar to'g'ri ma'lumotlar bilan avtomatik to'ldiriladi. Ma'lumotni ko'rib chiqqandan so'ng, `Create Payment`ni bosing.

![Odoo Sales da mijoz hisob-kitobida register payment pop-up oynasi.](expense/register-payment-popup.png)

`Create Payment` bosilgach, pop-up oynasi yo'qoladi va hisob-kitobning yuqori o'ng burchagida yashil `In Payment` banner paydo bo'ladi, bu ushbu hisob-kitob to'liq to'langanligini bildiradi. Shu bilan ish oqimi yakunlanadi.

![Odoo Sales da mijoz hisob-kitobida register payment pop-up oynasi.](expense/expense-invoice-in-payment-banner.png)