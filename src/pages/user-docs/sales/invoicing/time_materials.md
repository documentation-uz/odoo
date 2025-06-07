# Vaqt va materiallar asosida hisob-kitob

Vaqt va/yoki materiallar asosida hisob-kitob odatda loyiha hajmini aniq baholash mumkin bo'lmagan yoki loyiha talablari o'zgarishi mumkin bo'lgan hollarda qo'llaniladi.

Bu belgilangan narxli shartnomadan farq qiladi, bunda mijoz shartnomani bajarish uchun belgilangan umumiy summani to'lashga rozi bo'ladi - xodimlar, subpudratchilar, sotuvchilar, yetkazib beruvchilar va boshqalarga nima to'lanishidan qat'i nazar.

Odoo `Sales` ilovasi vaqt va turli xil xarajatlar (masalan, transport, turar joy), shuningdek buyurtmani bajarish uchun zarur bo'lgan xaridlar uchun hisob-kitob qilishi mumkin.

## Ilova va sozlamalar konfiguratsiyasi

Birinchidan, loyiha jarayonini aniq kuzatib borish uchun Odoo `Project` va `Accounting` ilovalarini **majburiy** ravishda o'rnatish kerak.

`Project` ilovasini o'rnatish uchun `Odoo main dashboard ‣ Apps` bo'limiga o'ting. Keyin `Apps` sahifasida `Project` ilova blokini toping va `Activate` tugmasini bosing. Sahifa avtomatik ravishda yangilanadi va Odoo asosiy boshqaruv paneliga qaytadi, bu yerda `Project` ilovasi endi foydalanish uchun mavjud.

`Accounting` ilovasini o'rnatish uchun ham xuddi shunday jarayonni takrorlang.

O'rnatishdan so'ng, Odoo asosiy boshqaruv panelidan `Accounting` ilova belgisini bosing va `Configuration ‣ Settings` bo'limiga o'ting. `Settings` sahifasida `Analytics` bo'limiga pastga aylaning va `Analytic Accounting` yonidagi katakcha belgilangan ekanligiga ishonch hosil qiling.

![Odoo Accounting Settings sahifasida Analytic Accounting sozlamasini faollashtirish ko'rinishi.](time_materials/analytic-accounting-setting.png)

Keyin barcha o'zgarishlarni saqlash uchun `Save` tugmasini bosing.

Keyin `Odoo main dashboard ‣ Project app ‣ Configuration ‣ Settings` bo'limiga o'ting. `Settings` sahifasida `Time Management` bo'limida `Timesheets` funksiyasi yonidagi katak belgilangan ekanligiga ishonch hosil qiling.

Keyin barcha o'zgarishlarni saqlash uchun `Save` tugmasini bosing.

![Odoo Project sozlamalari sahifasida Timesheets funksiyasi ko'rinishi.](time_materials/timesheets-feature.png)

## Xizmat mahsuloti konfiguratsiyasi

`Project` ilovasida `Timesheets` funksiyasi faollashtirilgach, loyihada sarflangan vaqt uchun hisob-kitob qilish mumkin bo'ladi, lekin **faqat** quyidagi mahsulot konfiguratsiyalari amalga oshirilganda.

::: warning

Loyihada sarflangan vaqt uchun hisob-kitob **faqat** mahsulot formasida `Product Type` sifatida `Service` o'rnatilgan mahsulotlar bilan mumkin.
:::

Xizmat mahsulotini sozlash uchun avval `Sales app ‣ Products ‣ Products` bo'limiga o'ting. `Products` sahifasida sozlanishi kerak bo'lgan xizmat mahsulotini tanlang yoki yangi mahsulot yaratish uchun `New` tugmasini bosing.

Mahsulot formasida `General Information` bo'limida `Product Type`ni `Service` qilib o'rnating. Keyin `Invoicing Policy` maydonidagi ochiladigan menyuni oching va `Based on Timesheets`ni tanlang.

Keyingi bosqichda `Create on Order` ochiladigan menyusidan `Project & Task`ni tanlang. Bu sozlama shuni ko'rsatadiki, ushbu maxsus xizmat mahsuloti bilan savdo buyurtmasi yaratilganda, `Project` ilovasida yangi loyiha va vazifa yaratiladi.

![Xizmat mahsuloti uchun Invoicing Policy va Create on Order maydonlarining to'g'ri sozlamalari.](time_materials/service-product-general-settings.png)

::: tip

`Create on Order` ochiladigan menyusidan o'rniga `Task` variantini tanlash mumkin. Agar `Task` tanlansa, vazifa paydo bo'ladigan mavjud loyihani `Project` maydonidan tanlang, bu maydon faqat `Create on Order` maydonida `Task` tanlanganda paydo bo'ladi.
:::

## Savdo buyurtmasiga sarflangan vaqtni qo'shish

To'g'ri `Invoicing Policy` va `Create on Order` variantlari bilan xizmat mahsulotini to'g'ri sozlagandan so'ng, savdo buyurtmasiga sarflangan vaqtni qo'shish mumkin.

Buni amalda ko'rish uchun bo'sh taklif formasini ochish uchun `Sales app ‣ New` bo'limiga o'ting. Keyin `Customer`ni qo'shing va `Order Lines` bo'limida `Add a product`ni bosing va ochiladigan menyudan `to'g'ri sozlangan xizmat mahsuloti`ni tanlang.

Keyingi bosqichda buyurtmani tasdiqlash uchun `Confirm` tugmasini bosing.

Savdo buyurtmasini tasdiqlagandan so'ng, buyurtma formasining yuqori qismida ikkita aqlli tugma paydo bo'ladi: `Projects` va `Tasks`.

![Odoo Sales'da Savdo Buyurtmasida Projects va Tasks aqlli tugmalarining ko'rinishi.](time_materials/projects-tasks-smart-buttons.png)

Agar `Projects` aqlli tugmasi bosilsa, u ushbu savdo buyurtmasi bilan bog'liq maxsus loyihani ko'rsatadi. Agar `Tasks` aqlli tugmasi bosilsa, u ushbu savdo buyurtmasi bilan bog'liq maxsus loyiha vazifasini ko'rsatadi. Ikkala variantga ham `Project` ilovasidan kirish mumkin.

Savdo buyurtmasiga sarflangan vaqtni qo'shish uchun `Tasks` aqlli tugmasini bosing.

Vazifa formasida `Timesheets` bo'limini tanlang. `Timesheets` bo'limidan xodimlarni loyihada ishlash uchun tayinlash va ular vazifada ishlagan vaqtini xodimlar tomonidan yoki savdo buyurtmasini yaratgan shaxs tomonidan qo'shish mumkin.

Xodim qo'shish va vazifada ishlagan vaqtni kiritish uchun `Timesheets` bo'limida `Add a line` tugmasini bosing. Keyin tegishli `Date` va `Employee`ni tanlang. Shuningdek, `Description` ustunida bu vaqt davomida qilingan ish haqida qisqacha tavsif qo'shish imkoniyati mavjud, lekin bu majburiy emas.

Nihoyat, `Hours Spent` ustunida vazifada ishlangan vaqt miqdorini kiriting va `Timesheets` bo'limidagi ushbu qatorni yakunlash uchun boshqa joyga bosing.

::: tip

`Hours Spent` ustuniga kiritilgan vaqt darhol `Allocated Time` maydonida (vazifa formasining yuqori qismida joylashgan) foiz sifatida aks ettiriladi, bu hozirgacha qilingan umumiy taqsimlangan ish soatlarining qancha qismini ko'rsatadi.

Xuddi shu ma'lumot `Timesheets` bo'limining pastki qismida joylashgan `Hours Spent` va `Remaining Hours` maydonlarida raqamli soatlar sifatida topiladi.

![Odoo Sales va Odoo Project'da vazifa formasida Timesheets bo'limining ko'rinishi.](time_materials/timesheets-tab-on-task.png)
:::

Loyihada ishlaydigan xodimlar va soatlar soni uchun bu jarayonni takrorlang.

## Sarflangan vaqt uchun hisob-kitob

Barcha zarur xodimlar va sarflangan vaqt loyiha vazifasiga qo'shilgandan so'ng, ushbu soatlar uchun mijozdan hisob-kitob qilish uchun savdo buyurtmasiga qayting. Buning uchun vazifa formasining yuqori qismidagi `Sales Order` aqlli tugmasini bosing yoki ekranning yuqori chap qismida joylashgan navbat havolalari orqali savdo buyurtmasiga qayting.

Savdo buyurtmasi formasiga qaytgach, vazifaga qo'shilgan vaqt `Order Lines` bo'limida (`Delivered` ustunida) va savdo buyurtmasining yuqori qismidagi yangi `Recorded Hours` aqlli tugmasida aks ettiriladi.

Loyihada sarflangan vaqt uchun mijozdan hisob-kitob qilish uchun `Create Invoice` tugmasini bosing va `Create invoices` oynasidan `Regular invoice`ni tanlang. Keyin `Create Draft Invoice` tugmasini bosing.

Bu `Customer Invoice Draft`ni ko'rsatadi va `Invoice Lines` bo'limida qilingan barcha ishlarni aniq ko'rsatadi.

::: tip

`Customer Invoice`dagi `Analytic Distribution` ustuniga e'tibor bering, chunki bu ma'lumot boshqa vaqt/material hisob-kitob vazifalarini to'g'ri va aniq bajarish uchun zarur.

![Odoo Sales'da savdo buyurtmasida sarflangan vaqtni ko'rsatuvchi hisob-kitob qoralaması.](time_materials/invoice-lines-time.png)
:::

Hisob-kitobni tasdiqlash va hisob-kitob jarayonini davom ettirish uchun `Confirm` tugmasini bosing.

## Xarajatlar konfiguratsiyasi

Savdo buyurtmasi bilan bog'liq xarajatlarni kuzatish va hisob-kitob qilish uchun Odoo `Expenses` ilovasini **majburiy** ravishda o'rnatish kerak.

`Expenses` ilovasini o'rnatish uchun `Odoo main dashboard ‣ Apps` bo'limiga o'ting. Keyin `Apps` sahifasida `Expenses` ilova blokini toping va `Activate` tugmasini bosing.

Sahifa avtomatik ravishda yangilanadi va Odoo asosiy boshqaruv paneliga qaytadi, bu yerda `Expenses` ilovasi endi foydalanish uchun mavjud.

## Savdo buyurtmasiga xarajatlarni qo'shish

Savdo buyurtmasiga xarajat qo'shish uchun avval `Expenses` ilovasiga o'ting. Keyin asosiy `Expenses` boshqaruv panelidan `New` tugmasini bosing, bu bo'sh xarajat formasini ko'rsatadi.

Xarajat formasida xarajatning `Description`ni qo'shing (masalan, [Mehmonxonada qolish], [Samolyot bileti]). Keyingi bosqichda `Category` maydonida ochiladigan menyudan tegishli variantni tanlang (masalan, `Meals`, `Miles`, `Travel & Accommodation`).

::: tip

Xarajat kategoriyalarini `Expenses app ‣ Configuration ‣ Expense Categories` bo'limiga o'tish orqali qo'shish va o'zgartirish mumkin.
:::

Keyin `Total` maydoniga xarajatning umumiy miqdorini, shuningdek qo'llanilishi mumkin bo'lgan `Included Taxes`ni kiriting. Keyingi bosqichda to'g'ri `Employee` tanlanganligiga ishonch hosil qiling va `Paid By` maydonida xarajat uchun kim to'laganini belgilang: `Employee (to reimburse)` yoki `Company`.

Keyingi bosqichda `Customer to Reinvoice` maydonida ochiladigan menyudan tegishli savdo buyurtmasini tanlang. Keyin `Analytic Distribution` maydonidan ham xuddi shu savdo buyurtmasi ma'lumotlarini tanlang.

::: tip

`Analytic Distribution` maydoni **faqat** savdo buyurtmasi `Timesheets`, `Milestones` yoki `Delivered Quantities` asosida hisob-kitob qilinadigan xizmat mahsulotini o'z ichiga olgan taqdirdagina tegishli savdo buyurtmasini variant sifatida beradi.
:::

![Odoo'da savdo buyurtmasiga biriktirilgan xarajat formasini to'g'ri to'ldirish usuli.](time_materials/expense-detail-form.png)

Agar xarajatga yuklanishi va biriktirilishi kerak bo'lgan kvitansiyalar bo'lsa, `Attach Receipt` tugmasini bosing va zarur hujjatlarni xarajatga yuklang. Bu **majburiy** emas, lekin xarajat tasdiqlash yoki tasdiqlanmasligiga ta'sir qilishi mumkin.

Barcha ma'lumotlar kiritilgach, hozirgina kiritilgan barcha xarajat ma'lumotlarini batafsil bayon qiluvchi xarajat hisobotini yaratish uchun `Create Report` tugmasini bosing.

![Odoo Expenses'da Xarajat Hisoboti Xulosasining ko'rinishi.](time_materials/expense-report-summary.png)

Keyin tasdiqlash uchun `Submit to Manager` variantini tanlash imkoniyati mavjud. Tasdiqlagandan so'ng `Report in Next Payslip` paydo bo'ladi.

Ushbu misolda to'liq oqimni ko'rsatish uchun `Submit to Manager`ni tanlang. Keyin menejer ushbu xarajatni tasdiqlash uchun `Approve` tugmasini bosadi va ushbu xarajatni buxgalteriya jurnalida qayd qilish uchun `Post Journal Entries` tugmasini bosadi.

## Xarajatlar uchun hisob-kitob

`Savdo buyurtmasidagi xarajat` uchun mijozdan hisob-kitob qilish uchun `Sales` ilovasidan yoki `Expenses` ilovasidagi xarajat hisobotidan tegishli savdo buyurtmasiga o'ting. Xarajat hisobotidan sahifaning yuqori qismidagi `Sales Orders` aqlli tugmasini bosing.

Agar xarajat hisoboti savdo buyurtmasiga bog'langan bo'lsa, yangi sozlangan xarajat endi `Order Lines` bo'limida o'z qatoriga ega va mijozdan hisob-kitob qilish mumkin.

![Odoo Sales ilovasida Savdo Buyurtmasining Order Lines bo'limida ko'rinayotgan xarajat.](time_materials/invoice-expense-from-sales-order.png)

Savdo buyurtmasidagi xarajat uchun mijozdan hisob-kitob qilish uchun `Create Invoice` tugmasini bosing, `Create invoices` oynasidan `Regular Invoice`ni tanlang, keyin `Create Draft Invoice` tugmasini bosing.

Bu xarajat uchun `Customer Invoice Draft`ni ko'rsatadi. Keyin hisob-kitob jarayonini odatdagidek yakunlash mumkin.

![Odoo Sales'da savdo buyurtmasidan yaratilgan xarajat uchun mijoz hisob-kitobi namunasi.](time_materials/customer-invoice-for-expense.png)

## Xarid konfiguratsiyasi

Savdo buyurtmasida qilingan xaridlar uchun mijozdan hisob-kitob qilish uchun `Purchase` ilovasini **majburiy** ravishda o'rnatish kerak.

`Purchase` ilovasini o'rnatish uchun `Odoo main dashboard ‣ Apps` bo'limiga o'ting. Keyin `Apps` sahifasida `Purchase` ilova blokini toping va `Activate` tugmasini bosing. Sahifa avtomatik ravishda yangilanadi va Odoo asosiy boshqaruv paneliga qaytadi, bu yerda `Purchase` ilovasi endi foydalanish uchun mavjud.

## Savdo buyurtmasiga xarid qo'shish

Savdo buyurtmasiga xarid qo'shish uchun avval xarid buyurtmasini yaratish kerak. Xarid buyurtmasini yaratish uchun bo'sh xarid buyurtmasi formasini ko'rsatish uchun `Purchase app ‣ New` bo'limiga o'ting.

Birinchidan, xarid buyurtmasiga `Vendor`ni qo'shing. Keyin `Products` bo'limida ustun sarlavhalarining eng o'ng tomonida joylashgan va ustida nuqtalar bo'lgan ikkita gorizontal chiziq bilan ifodalangan `extra column options` ochiladigan menyusini bosing. Ushbu ochiladigan menyudan `Analytic Distribution`ni tanlang.

![Odoo Purchase'da xarid buyurtmasi formasida analitik taqsimlash ustunini qo'shish usuli.](time_materials/extra-column-analytic-distribution-option.png)

Xarid buyurtmasi formasining `Products` bo'limidagi sarlavhalarga `Analytic Distribution` ustunini qo'shgandan so'ng, xarid buyurtmasiga mahsulot(lar)ni qo'shishni davom eting. Buning uchun `Add a product` tugmasini bosing va ochiladigan menyudan kerakli mahsulotni tanlang. Qo'shiladigan barcha mahsulotlar uchun takrorlang.

::: warning

Xaridni savdo buyurtmasida to'g'ri hisob-kitob qilish uchun xarid buyurtmasidagi mahsulot **majburiy** ravishda `Can be Expensed` deb belgilangan, `Invoicing Policy` `Delivered quantities` ga o'rnatilgan va mahsulot formasidagi `Re-Invoice Expenses` maydonida `At cost` varianti tanlangan bo'lishi kerak.

![Odoo'da savdo buyurtmasida hisob-kitobi qilinadigan xarid buyurtmasi uchun mahsulot sozlamalari.](time_materials/product-form-settings-invoice-purchase.png)
:::

Keyin ushbu xarid buyurtmasi bog'liq bo'lgan savdo buyurtmasi bilan bog'langan tegishli `Analytic Distribution`ni tanlang. Buning uchun `Analytic` oynasini ko'rsatish uchun bo'sh `Analytic Distribution` maydonini bosing.

Keyin `Departments` ochiladigan menyusidan xarid uchun hisob-kitob qilinishi kerak bo'lgan savdo buyurtmasi bilan bog'langan analitik taqsimotni tanlang.

![Odoo'da xarid buyurtmasidan Analytic Distribution bo'limini tanlash usuli.](time_materials/analytic-drop-down-distribution.png)

Xarid buyurtmasining `Products` bo'limida barcha ma'lumotlar kiritilgach, `Confirm Order` tugmasini bosish orqali buyurtmani tasdiqlang. Keyin mahsulotlar qabul qilinganda `Receive Products` tugmasini bosing. Bu qabul qilish formasini yaratadi.

::: tip

Agar mahsulotlar qabulini tasdiqlashdan oldin har qanday seriya/lot raqamlarini kiritish kerak bo'lsa, qabul qilish formasida mahsulot qatorining eng o'ng tomonida joylashgan to'rtta gorizontal chiziq bilan ifodalangan `details` belgisini bosing.

Bu zarur `Lot/Serial Number(s)` va `Done` miqdorini qo'shish mumkin bo'lgan `Detailed Operations` bo'limini ko'rsatadi. Tayyor bo'lgach, ma'lumotlarni tasdiqlash uchun `Confirm` tugmasini bosing.
:::

Keyin xarid buyurtmasini tasdiqlash uchun `Validate` tugmasini bosing.

Keyingi bosqichda sahifaning yuqori qismidagi navbat havolalari orqali xarid buyurtmasiga qayting va biriktirilgan savdo buyurtmasida mijozga hisob-kitob qilinishi mumkin bo'lgan sotuvchi hisob-kitobini yaratish uchun `Create Bill` tugmasini bosing.

![Odoo'da mijozga hisob-kitob qilinadigan xarid buyurtmasi uchun sotuvchi hisob-kitobi qoralamasi.](time_materials/vendor-bill-draft.png)

::: tip

Tasdiqlashdan oldin `Vendor Bill Draft`da `Bill Date`ni kiritishni unutmang. Agar `Bill Date` kiritilmasa, tasdiqlash amalga oshirilishidan oldin ushbu ma'lumotni kiritishni so'rovchi xato oynasi paydo bo'ladi.
:::

Keyin sotuvchi hisob-kitobini tasdiqlash uchun `Confirm` tugmasini bosing, keyin u avtomatik ravishda savdo buyurtmasiga qo'shiladi va u yerda unga biriktirilgan mijozga bevosita hisob-kitob qilish mumkin.

## Xarid uchun hisob-kitob

Savdo buyurtmasidagi xarid uchun mijozdan hisob-kitob qilish uchun avval `xaridni savdo buyurtmasiga qo'shing`, keyin `Sales` ilovasida kerakli savdo buyurtmasiga o'ting.

Xarid buyurtmasiga biriktirilgan savdo buyurtmasida xarid qilingan mahsulot endi `Order Lines` bo'limida o'z mahsulot qatoriga ega va hisob-kitob qilishga tayyor.

![Odoo Sales orqali mijozga hisob-kitob qilinadigan savdo buyurtmasidagi xarid buyurtmasi mahsuloti.](time_materials/purchase-order-on-sales-order.png)

Xarid uchun mijozdan hisob-kitob qilish uchun `Create Invoice` tugmasini bosing, `Create invoices` oynasidan `Regular Invoice`ni tanlang, keyin `Create Draft Invoice` tugmasini bosing.

Bu `Invoice Lines` bo'limida yangi qo'shilgan xarid buyurtmasi mahsuloti bilan `Customer Invoice Draft`ni ko'rsatadi.

![Odoo'da savdo buyurtmasiga biriktirilgan xarid mahsuloti bilan mijoz hisob-kitobi qoralamasi.](time_materials/draft-invoice-with-purchase-product.png)

Hisob-kitob jarayonini yakunlash uchun hisob-kitobni tasdiqlash uchun `Confirm` tugmasini bosing, keyin `Register Payment` oynasida `Register Payment` tugmasini bosing.