# Subpudratchi ta'minoti

Ishlab chiqarishda subpudratchilik - bu kompaniyaning uchinchi tomon ishlab chiqaruvchi yoki subpudratchi bilan shartnoma tuzib, mahsulotlarni ishlab chiqarishga topshirish jarayoni bo'lib, keyinchalik bu mahsulotlar shartnoma tuzuvchi kompaniya tomonidan sotiladi.

Odoo dasturida `Resupply Subcontractor on Order` yo'nalishi subpudratchilik mahsuloti uchun xarid buyurtmasi (PO) har safar tasdiqlanganda subpudratchi tomon zarur komponentlarni yetkazib berish uchun ishlatiladi.

Subpudratchi keyin komponentlarni ishlatib kerakli mahsulotni ishlab chiqaradi va uni shartnoma tuzuvchi kompaniyaga qaytarib yuboradi yoki yakuniy mijozga dropship qiladi.

::: warning

`Resupply Subcontractor on Order` va `Dropship Subcontractor on Order` yo'nalishlari o'rtasidagi farqlarni tushunish zarur.

Ikki yo'nalish ham subpudratchini mahsulot ishlab chiqarish uchun zarur komponentlar bilan ta'minlash uchun ishlatilsa-da, ular komponentlar qanday ta'minlanishida farqlanadi.

`Resupply Subcontractor on Order` ishlatilganda komponentlar shartnoma tuzuvchi kompaniyaning omboridan yetkazib beriladi.

`Dropship Subcontractor on Order` ishlatilganda komponentlar sotuvchidan sotib olinib to'g'ridan-to'g'ri subpudratchi tomon yetkazib beriladi.

Qaysi yo'nalishni tanlash subpudratchilik kompaniyasi va ularning subpudratchilarining aniq talablariga bog'liq.

`Dropship Subcontractor on Order` yo'nalishining to'liq ko'rinishi uchun `subcontracting_dropship` hujjatiga qarang.
::::

## Sozlash

`Resupply Subcontractor on Order` yo'nalishini ishlatish uchun `Manufacturing app ‣ Configuration ‣ Settings` ga o'ting va `Operations` sarlavhasi ostidagi `Subcontracting` yonidagi katakchani belgilang.

`Subcontracting` sozlamasi yoqilgandan so'ng, subpudratchilik mahsuloti, mahsulotning materiallar ro'yxati (BoM) va `BoM (Bill of Materials)` da ko'rsatilgan komponentlarni to'g'ri sozlash zarur.

### Mahsulotni sozlash

Mahsulotni `Resupply Subcontractor on Order` yo'nalishi uchun sozlash uchun `Inventory app ‣ Products ‣ Products` ga o'ting va mahsulotni tanlang yoki `New` tugmasini bosib yangisini yarating.

`Purchase` yorlig'ini tanlang va mahsulotning subpudratchiini sotuvchi sifatida qo'shish uchun `Add a line` tugmasini bosing, `Vendor` ochiladigan menyusidan subpudratchini tanlang va `Price` maydoniga narxni kiriting.

::: tip

Subpudratchilik mahsulot sahifasining `Purchase` yorlig'idagi `Price` maydoniga kiritilgan qiymat subpudratchiga mahsulot ishlab chiqarish uchun to'lanadigan summadir.

Bu mahsulotning umumiy narxini ifodalamaydi, chunki unda boshqa elementlar, masalan, mahsulot komponentlarining narxi ham kiradi.
::::

Keyin `Inventory` yorlig'ini bosing va subpudratchi tomonidan ishlab chiqarilgandan so'ng tayyor mahsulot bilan nima qilishni belgilaydigan yo'nalishni sozlang.

Agar tayyor mahsulot shartnoma tuzuvchi kompaniyaga qaytarib yuborilsa, `Buy` yo'nalishi tanlanganligiga ishonch hosil qiling. Bundan tashqari, sotuv buyurtmasi (SO) tasdiqlanishi bilan `SO (Sales Order)` ni bajarish uchun qo'lda etarli zaxira bo'lmagan taqdirda mahsulot uchun avtomatik ravishda `PO (Purchase Order)` yaratish uchun `Replenish on Order (MTO)` yo'nalishini tanlang.

Agar tayyor mahsulot subpudratchi tomonidan to'g'ridan-to'g'ri mijozga yetkazib berilsa, faqat `Dropship` yo'nalishi tanlanganligiga ishonch hosil qiling.

### BoM ni sozlash

`Resupply Subcontractor on Order` yo'nalishi uchun `BoM (Bill of Materials)` ni sozlash uchun mahsulot sahifasidagi `Bill of Materials` aqlli tugmasini bosing va `BoM (Bill of Materials)` ni tanlang.

Yoki `Manufacturing app ‣ Products ‣ Bills of Materials` ga o'ting va subpudratchilik mahsuloti uchun `BoM (Bill of Materials)` ni tanlang.

`BoM Type` maydonida `Subcontracting` variantini tanlang. Keyin pastda paydo bo'ladigan `Subcontractors` maydoniga bir yoki bir nechta subpudratchilarni qo'shing.

![BoM dagi "BoM Type" maydoni subpudratchilik orqali mahsulot ishlab chiqarish uchun sozlangan.](subcontracting_resupply/bom-type.png)

Nihoyat, `Components` yorlig'ida barcha zarur komponentlar ko'rsatilganligiga ishonch hosil qiling. Yangi komponent qo'shish uchun `Add a line` tugmasini bosing, `Component` ochiladigan menyusidan komponentni tanlang va `Quantity` maydonida kerakli miqdorni belgilang.

### Komponentlarni sozlash

Komponentlarni `Resupply Subcontractor on Order` yo'nalishi uchun sozlash uchun `BoM (Bill of Materials)` dan har bir komponentga o'ting, buning uchun `Components` yorlig'ida komponent nomini tanlab, nom o'ng tomonidagi `➡️ (o'ng ko'rsatkich)` tugmasini bosing.

Yoki har bir komponentga `Inventory app ‣ Products ‣ Products` ga o'tib, komponentni tanlab kiring.

Komponent mahsulot formasida `Inventory` yorlig'ini bosing va `Routes` bo'limida `Resupply Subcontractor on Order` yo'nalishini tanlang.

Subpudratchi tomon yuborilishi kerak bo'lgan har bir komponent uchun jarayonni takrorlang.

## Buyurtma bo'yicha subpudratchi ta'minoti ish jarayoni

Buyurtma bo'yicha subpudratchi ta'minoti ish jarayoni beshta qadamdan iborat:

1. Subpudratchilik mahsuloti uchun `SO (Sales Order)` yaratish; bu subpudratchi tomon mahsulotni sotib olish uchun `PO (Purchase Order)` yaratadi.
2. Oldingi qadamda yaratilgan `PO (Purchase Order)` ni tasdiqlash yoki yangi `PO (Purchase Order)` yaratish; bu *Resupply Subcontractor* buyurtmasi hamda qabul qilish buyurtmasi yoki dropship buyurtmasini yaratadi.
3. Subpudratchilik mahsuloti uchun komponentlar subpudratchi tomon yuborigandan so'ng *Resupply Subcontractor* buyurtmasini qayta ishlash.
4. Subpudratchi subpudratchilik mahsulotini ishlab chiqarib, uni shartnoma tuzuvchi kompaniyaga qaytarib yuborgandan so'ng qabul qilishni qayta ishlash **YOKI** mahsulotni to'g'ridan-to'g'ri mijozga yetkazib berish uchun dropship buyurtmasini qayta ishlash.
5. Agar ish jarayoni `SO (Sales Order)` yaratish bilan boshlangan bo'lsa va tayyor mahsulot yakuniy mijozga dropship qilinmagan bo'lsa, mahsulot mijozga yetkazib berilgandan so'ng yetkazib berish buyurtmasini qayta ishlash.

Qadamlarning aniq soni subpudratchilik mahsuloti subpudratchi tomon nima uchun sotib olinayotganiga bog'liq.

Agar sabab ma'lum bir mijoz buyurtmasini bajarish bo'lsa, jarayon `SO (Sales Order)` yaratish bilan boshlanadi va mahsulotni mijozga yetkazib berish yoki subpudratchi tomonidan ularga dropship qilish bilan tugaydi.

Agar sabab qo'ldagi zaxira miqdorini oshirish bo'lsa, jarayon `PO (Purchase Order)` yaratish bilan boshlanadi va mahsulotni omborga qabul qilish bilan tugaydi.

::: warning

`Resupply Subcontractor on Order` yo'nalishi `PO (Purchase Order)` tasdiqlanishi bilan subpudratchini avtomatik ta'minlash uchun ishlatilishi mumkin bo'lsa-da, ta'minlash buyurtmasini qo'lda yaratish ham mumkin. Bu ish jarayoni `PO (Purchase Order)` yaratmasdan subpudratchini ta'minlash zarur bo'lganda foydali.

Subpudratchini qo'lda ta'minlash uchun `Inventory` ilovasiga o'ting va `Resupply Subcontractor` kartasini bosing. `New` tugmasini bosib yangi *Resupply Subcontractor* buyurtmasini yarating.

`Delivery Address` maydonida komponentlar yuborilishi kerak bo'lgan subpudratchini tanlang.

Keyin har bir komponentni `Operations` yorlig'iga qo'shing, buning uchun `Add a line` tugmasini bosing, `Product` ochiladigan maydonida komponentni tanlang va `Demand` maydonida miqdorni belgilang.

Nihoyat, buyurtmani ro'yxatga olish uchun `Mark as Todo` tugmasini bosing. Komponentlar subpudratchi tomon yuborigandan so'ng, buyurtma yuborilganini tasdiqlash uchun `Validate` tugmasini bosing.
::::

### SO yaratish

Bu qadamni faqat mahsulot mijoz ehtiyojini qondirish uchun subpudratchi tomon sotib olinayotgan bo'lsa bajarish zarur. Agar mahsulot qo'ldagi zaxira miqdorini oshirish uchun sotib olinayotgan bo'lsa, keyingi qadamga o'ting.

Yangi `SO (Sales Order)` yaratish uchun `Sales app ‣ Orders ‣ Orders` ga o'ting va `New` tugmasini bosing.

`Customer` ochiladigan menyusidan mijozni tanlang. Keyin `Order Lines` yorlig'ida `Add a product` tugmasini bosing, `Product` ochiladigan menyusidan subpudratchilik mahsulotini tanlang va `Quantity` maydoniga miqdorni kiriting.

`SO (Sales Order)` ni tasdiqlash uchun `Confirm` tugmasini bosing, shundan so'ng sahifa tepasida `Purchase` aqlli tugmasi paydo bo'ladi. Bu subpudratchi tomon subpudratchilik mahsulotini sotib olish uchun yaratilgan `PO (Purchase Order)` ni ochadi.

::: tip

Mahsulot uchun `SO (Sales Order)` faqat mahsulot sahifasida *Replenish on Order (MTO)* yo'nalishi yoqilgan bo'lsa **VA** `SO (Sales Order)` ni bajarish uchun mahsulotdan qo'lda etarli zaxira yo'q bo'lsagina `PO (Purchase Order)` yaratadi.

Agar qo'lda etarli zaxira mavjud bo'lsa, mahsulot uchun `SO (Sales Order)` ni tasdiqlash o'rniga yetkazib berish buyurtmasini yaratadi, chunki Odoo `SO (Sales Order)` ni ombordagi zaxira yordamida bajariladi deb taxmin qiladi.

Bu yakuniy mijozga dropship qilinadigan subpudratchilik mahsulotlari uchun bunday emas. Bunday holda, qo'lda etarli zaxira mavjud bo'lsa ham, `PO (Purchase Order)` **har doim** yaratiladi.
::::

### PO ni qayta ishlash

Agar oldingi qadamda `PO (Purchase Order)` yaratilgan bo'lsa, `Purchase app ‣ Orders ‣ Purchase Orders` ga o'ting va `PO (Purchase Order)` ni tanlang. Keyin uni tasdiqlash uchun `Confirm Order` tugmasini bosing.

Agar oldingi qadamda `PO (Purchase Order)` yaratilmagan bo'lsa, `Purchase app ‣ Orders ‣ Purchase Orders` ga o'tib, `New` tugmasini bosib hozir yarating.

`PO (Purchase Order)` ni to'ldirishni `Vendor` ochiladigan menyusidan subpudratchini tanlash bilan boshlang. `Products` yorlig'ida yangi mahsulot qatori yaratish uchun `Add a product` tugmasini bosing. `Product` maydonida subpudratchilik mahsulotini tanlang va `Quantity` maydoniga miqdorni kiriting. Nihoyat, `PO (Purchase Order)` ni tasdiqlash uchun `Confirm Order` tugmasini bosing.

Subpudratchini komponentlar bilan ta'minlashni talab qiladigan mahsulot uchun `PO (Purchase Order)` tasdiqlanganda, qabul qilish yoki dropship buyurtmasi avtomatik ravishda yaratiladi va `PO (Purchase Order)` tepasida paydo bo'ladigan tegishli `Receipt` yoki `Dropship` aqlli tugmasi orqali kirish mumkin.

Bundan tashqari, subpudratchi tomon zarur komponentlarni yetkazib berish uchun *Resupply Subcontractor* buyurtmasi yaratiladi. Bu buyurtmaga `PO (Purchase Order)` dan sahifa tepasidagi `Resupply` aqlli tugmasini bosish orqali ham kirish mumkin.

### Resupply Subcontractor buyurtmasini qayta ishlash

Subpudratchilik mahsulotining komponentlari subpudratchi tomon yuborigandan so'ng, `Purchase app ‣ Orders ‣ Purchase Orders` ga o'ting va `PO (Purchase Order)` ni tanlang.

*Resupply Subcontractor* buyurtmasini ochish uchun ekran tepasidagi `Resupply` aqlli tugmasini bosing va komponentlar subpudratchi tomon yuborilganini tasdiqlash uchun `Validate` tugmasini bosing.

Yoki `Inventory` ilovasiga o'ting, `Resupply Subcontractor` kartasidagi `# To Process` tugmasini bosing va *Resupply Subcontractor* buyurtmasini tanlang. Keyin komponentlar subpudratchi tomon yuborilganini tasdiqlash uchun `Validate` tugmasini bosing.

### Qabul qilish yoki dropship buyurtmasini qayta ishlash

Subpudratchi mahsulotni ishlab chiqarib bo'lgandan so'ng, mahsulot qanday `configured` qilinganiga qarab, uni shartnoma tuzuvchi kompaniyaga yuboradi yoki yakuniy mijozga dropship qiladi.

#### Qabul qilishni qayta ishlash

Agar subpudratchi tayyor mahsulotni shartnoma tuzuvchi kompaniyaga yuborsa, u qabul qilingandan so'ng `Purchase app ‣ Orders ‣ Purchase Orders` ga o'ting va `PO (Purchase Order)` ni tanlang.

Qabul qilishni ochish uchun `PO (Purchase Order)` tepasidagi `Receive Products` tugmasini yoki sahifa tepasidagi `Receipt` aqlli tugmasini bosing. Keyin mahsulotni omborga kiritish uchun qabul qilish tepasidagi `Validate` tugmasini bosing.

#### Dropship buyurtmasini qayta ishlash

Agar subpudratchi mahsulotni dropship qilsa, ular uni yuborgandan so'ng `Purchase app ‣ Orders ‣ Purchase Orders` ga o'ting va `PO (Purchase Order)` ni tanlang.

Dropship buyurtmasini ochish uchun sahifa tepasidagi `Dropship` aqlli tugmasini tanlang va mahsulot mijozga yuborilganini tasdiqlash uchun buyurtma tepasidagi `Validate` tugmasini bosing.

### Yetkazib berish buyurtmasini qayta ishlash

Agar subpudratchilik ish jarayoni mijoz `SO (Sales Order)` bilan boshlangan bo'lsa va tayyor mahsulot mijozga dropship qilinmagan, balki shartnoma tuzuvchi kompaniyaga yetkazib berilgan bo'lsa, mahsulotni mijozga yetkazib berish va yetkazib berish buyurtmasini qayta ishlash zarur.

Mahsulot mijozga yetkazib berilgandan so'ng, `Sales` ilovasiga o'ting va `SO (Sales Order)` ni tanlang. Yetkazib berish buyurtmasini ochish uchun sahifa tepasidagi `Delivery` aqlli tugmasini tanlang va mahsulot mijozga yetkazib berilganini tasdiqlash uchun buyurtmadagi `Validate` tugmasini bosing.