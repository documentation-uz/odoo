# PDF taklifnoma quruvchisi

Odoo *Sales* ilovasidagi *PDF Taklifnoma Quruvchisi* mijozlarga to‘liq moslashtirilgan PDF taklifnoma yuborish
imkoniyatini beradi. Bu PDF kompaniya va mahsulotlarni turli ma'lumotlar va dizayn elementlari bilan namoyish qiladi —
faqatgina narx va umumiy qiymat emas.

**PDF Taklifnoma Quruvchisi** sarlavha sahifalari, mahsulot tavsiflari, narx(lar), va quyi sahifalarni guruhlab,
batafsil taklifnoma hosil qiladi. Shuningdek, u PDF fayl ichiga dinamik matnlar yoki maxsus eslatmalarni kiritish
imkonini beradi, bu esa taklifni mijoz uchun shaxsiylashtiradi.

Taklifnomalarda moslashtirilgan PDF'lar mavjud bo‘lishi xarid qilish tajribasini yanada yuqori darajaga olib chiqadi va
kompaniyaga jiddiylik va professionallik baxsh etadi.

::: tip

PDF shakllarni tahrirlash uchun Adobe dasturidan foydalanish tavsiya etiladi. Sarlavha va quyi sahifalardagi PDF shablon
form maydonlari Odoo bilan dinamik qiymatlarni olish uchun zarur hisoblanadi.
:::

## Sozlamalar

Taklifnomalar uchun maxsus PDF fayllarni qo‘shish uchun, `PDF Taklifnoma Quruvchisi` funksiyasi **yoqilgan bo‘lishi
kerak**.

Buni sozlash uchun quyidagilarni bajaring:

1. `Savdo (Sales)` ilovasiga o‘ting.
2. `Konfiguratsiya ‣ Sozlamalar` (`Configuration ‣ Settings`) bo‘limini oching.
3. Sozlamalar sahifasida `Taklifnomalar va Buyurtmalar` (`Quotations & Orders`) bo‘limiga pastga tushing.
4. U yerdan `PDF Taklifnoma Quruvchisi` (`PDF Quote builder`) funksiyasini toping va uni yoqing.

## PDF faylini Header/Footer sifatida qo‘shish

Odoo **Sales** ilovasida maxsus PDF faylini sarlavha (header) yoki pastki qism (footer) sifatida qo‘shish mumkin. PDF
taklifnoma Quruvchisi faollashtirilgandan so‘ng, siz xohlagancha sarlavhalar va footerni tanlashingiz mumkin — ushbu
PDF fayllar yakuniy taklifnoma PDF hujjatiga qo‘shiladi.

Maxsus PDF faylini header yoki footer sifatida qo‘shish uchun quyidagilarni bajaring:

1. `Savdo ilovasi (Sales app) ‣ Konfiguratsiya ‣ Header/Footer` bo‘limiga o‘ting.
2. Bu sahifada `Yangi` (`New`) tugmasini bosing yoki `Yuklash` (`Upload`) tugmasidan foydalaning.

**Upload** tugmasini bosganingizda darhol hujjat yuklash imkoniyati paydo bo‘ladi. So‘ngra hujjat karta ko‘rinishida
yoki yuqori o‘ng burchakdagi `⋮` (uch nuqta) tugmasini bosib, `Tahrirlash` (`Edit`) orqali sozlanadi.

**Yangi** (`New`) tugmasini bosganingizda bo‘sh hujjat shakli ochiladi. Shu yerda siz `Fayl tarkibi` (`File Content`)
maydonida joylashgan `Faylni yuklang` (`Upload your file`) tugmasi orqali PDF faylni yuklaysiz.

Shuningdek, quyidagi maydonlar mavjud:

- **Nom (Name)**: PDF yuklangandan so‘ng avtomatik to‘ldiriladi va o‘zgartirish mumkin bo‘ladi.
- **Hujjat turi (Document Type)**: Tanlovdan `Header` yoki `Footer` ni tanlang. Bu sizning PDF faylingiz taklifnomada
  boshida yoki oxirida chiqishini belgilaydi.
- **Taklifnoma shablonlari (Quotation Templates)**: Ushbu PDF faqat ma’lum bir shablonlar uchun cheklanishi mumkin.

::: tip
Bundan tashqari, siz `Sales app ‣ Configuration ‣ Quotation Templates` bo‘limiga o‘tib, shablonni tanlab, bevosita
`Quote Builder` tabida `Yuklash` yoki `Qo‘shish` orqali PDF qo‘shishingiz mumkin.
:::

Eng so‘ngida, `Fayl tarkibi` (`File Content`) maydoni yonida `Dinamik maydonlarni sozlash` (`Configure dynamic fields`)
opsiyasi mavjud.

## PDF fayllarda dinamik matn

Maxsus taklifnoma (quotation) PDF fayllarini yaratishda, *dinamik matn* dan foydalaning. Bu Odoo bazasidagi ma’lumotlar
asosida PDF fayl tarkibini avtomatik to‘ldirish imkonini beradi — masalan, mijoz nomi, narxlar va boshqa tafsilotlar.

Dinamik matn qiymatlari — bu PDF faylga qo‘shiladigan forma komponentlari (matn kiritish maydonchalari) bo‘lib, Odoo bu
maydonlarni taklifnomaga tegishli ma’lumotlar bilan avtomatik to‘ldiradi.

### Dinamik matn qiymatlari

Quyida maxsus PDF fayllarda ishlatiladigan keng tarqalgan dinamik matn qiymatlari berilgan. Bu qiymatlar Odoo’da kerakli
maydonlarga moslab qo‘yilgan va quyidagilarni ifodalaydi.

#### Header va footer PDF fayllar uchun:

- `name`: Savdo buyurtmasi raqami
- `partner_id__name`: Mijozning ismi
- `user_id__name`: Savdo vakilining ismi
- `amount_untaxed`: Soliqsiz umumiy summa
- `amount_total`: Jami summa
- `delivery_date`: Yetkazib berish sanasi
- `validity_date`: Amal qilish muddati
- `client_order_ref`: Mijozning buyurtma raqami

#### Mahsulot PDF fayllari uchun:

- `description`: Mahsulot tavsifi
- `quantity`: Miqdori
- `uom`: O‘lchov birligi (UoM)
- `price_unit`: Birlik narxi
- `discount`: Chegirma
- `product_sale_price`: Mahsulotning ro‘yxat narxi
- `taxes`: Soliqlar nomi (vergullar bilan ajratilgan)
- `tax_excl_price`: Soliqsiz narx
- `tax_incl_price`: Soliqli narx

PDF yuklangach, `Dinamik maydonlarni sozlash` (Configure dynamic fields) tugmasi orqali, fayldagi istalgan form maydonni
Odoo modelidagi kerakli maydonga bog‘lash mumkin.

Header/footer fayllari uchun asosiy model — `sale_order`, mahsulot fayllari uchun esa `sale_order_line`.

Agar yo‘l (`path`) bo‘sh qoldirilsa, sotuvchi tomonidan taklifnomada to‘g‘ridan-to‘g‘ri matn yozish imkoniyati paydo
bo‘ladi.

#### 🧪 Misol:

PDF faylga quyidagi keng tarqalgan dinamik maydonlar qo‘shilgan:

- `name` — Odoo avtomatik ravishda savdo buyurtmasi raqamini kiritadi.
- `partner_id_name` — Mijoz nomi avtomatik tarzda to‘ldiriladi.

![PDF misol.](pdf_quote_builder/pdf-quote-builder-sample.png)

#### 🧪 Misol:

Agar `invoice_partner_country` form maydoni bo‘lgan PDF yuklansa, uni quyidagicha yo‘llar bilan bog‘lash mumkin:

- **Header/Footer uchun**: `partner_invoice_id.country_id.name`
- **Mahsulot fayli uchun**: `order_id.partner_invoice_id.country_id.name`

Bu orqali PDF faylga mijozning invoicing (hisob-faktura) mamlakati nomi avtomatik tarzda chiqadi.

#### 🧪 Misol:

Agar PDF faylda `custom_note` degan form maydon bo‘lsa va yo‘l (`path`) bo‘sh qoldirilsa, sotuvchi ushbu joyda istalgan
maxsus izohni taklifnomaga yozib qo‘yishi mumkin.

## Mahsulotga PDF qo‘shish

Odoo *Sales* modulida mahsulot kartasiga maxsus PDF fayl qo‘shish imkoniyati mavjud. Agar mahsulotga PDF biriktirilgan
bo‘lsa va bu mahsulot taklifnomaga qo‘shilsa, u PDF ham taklifnoma PDF fayliga avtomatik tarzda kiritiladi.

### Mahsulotga PDF biriktirish

Buning uchun quyidagicha yo‘l tuting:

`Savdo (Sales)` ilovasiga kirib, `Mahsulotlar (Products)` > `Mahsulotlar (Products)` bo‘limiga o‘ting. So‘ng, kerakli
mahsulotni tanlang.

::: tip
Hujjatni mahsulotga emas, balki mahsulot varianti (Product Variant) ga ham biriktirish mumkin. Agar bir vaqtning o‘zida
mahsulotga va uning variantiga fayllar biriktirilgan bo‘lsa, **faqat mahsulot variantidagi hujjatlar ko‘rsatiladi**.

Mahsulot variantiga hujjat qo‘shish uchun:  
`Sales` ilovasi > `Products` > `Product Variants` bo‘limiga o‘ting. So‘ng, kerakli variantni tanlang va yuqoridagi
`Hujjatlar (Documents)` tugmasini bosib, fayl yuklang.
:::

### PDF hujjatni yuklash

Mahsulot sahifasida yuqorida joylashgan `Hujjatlar (Documents)` smart tugmasini bosing. Bu sizni mahsulotga tegishli
hujjatlar sahifasiga olib boradi.

Bu sahifada quyidagi amallarni bajarish mumkin:

- `Yangi (New)` tugmasi: bo‘sh hujjat shakli ochiladi.
- `Yuklash (Upload)` tugmasi: kompyuterdan fayl yuklanadi.

![Mahsulot kartasidagi Hujjatlar tugmasi.](pdf_quote_builder/documents-smart-button.png)

#### Faylni tahrirlash

`Upload` tugmasi bosilgach, fayl tanlash oynasi ochiladi. Fayl yuklangach, uni tahrirlash uchun hujjat kartasining
yuqori o‘ng burchagidagi `⋮ (uch nuqta)` belgisi ustiga bosing va `Tahrirlash (Edit)` ni tanlang.

Agar `New` tugmasi bosilsa, bo‘sh shakl ochiladi. Bu yerda `Fayl mazmuni (File Content)` qismida
`Faylingizni yuklang (Upload your file)` tugmasi orqali PDF fayl yuklanadi.

### PDF shaklini sozlash

![Odoo Sales'dagi mahsulot uchun hujjat shakli.](pdf_quote_builder/blank-document-form.png)

Hujjat shaklidagi birinchi maydon — bu hujjatning `Nomi (Name)` bo‘lib, fayl yuklanmaguncha u faollashtirilmagan (
tahrirlab bo‘lmaydi). PDF fayl yuklangach, `Name` maydoni avtomatik to‘ldiriladi va keyinchalik uni o‘zgartirish mumkin
bo‘ladi.

Fayl yuklanishidan oldin, hujjatning turi `File` (Fayl) yoki `URL` (Havola) ekanligini `Type` ochiluvchi menyusidan
belgilash mumkin.

![Yuklangan PDF bilan hujjat shakli.](pdf_quote_builder/document-form-uploaded-pdf.png)

::: tip
Agar PDF fayl yuklansa, `Type` maydoni avtomatik tarzda `File` deb belgilanadi va uni o‘zgartirib bo‘lmaydi.
:::

### Ko‘rinish joyini tanlash

So‘ngra, `Sales` bo‘limidagi `Visible at` maydonidan quyidagi variantlardan birini tanlang:

- `On quotation` – Hujjat har doim mijozlar uchun mavjud bo‘ladi.
- `On confirmed order` – Hujjat faqat buyurtma tasdiqlangach yuboriladi (foydalanuvchi qo‘llanmalari, ilovalar uchun
  mos).
- `Inside quote pdf` – Hujjat taklifnoma PDF fayliga kiritiladi (sarlavha sahifalari va narxlar qismi orasida
  joylashadi).

::: misol
Agar `Visible at` maydonida `Inside quote` tanlansa va [Corner Desk.pdf] nomli PDF fayl yuklansa, ushbu fayl mijoz
portalida taklifnoma tarkibida `Documents` qismida ko‘rinadi.

![Quote fayliga joylangan PDF namunasi.](pdf_quote_builder/pdf-on-quote-sample.png)
:::

### Dinamik maydonlar

`File Content` maydoni yonidagi `Configure dynamic fields` tugmasi orqali, dinamik maydonlarni sozlash mumkin. Esda
tuting, mahsulotga biriktirilgan PDF fayllarda model yo‘li `sale_order_line` dan boshlanadi (sarlavha va pastki
sahifalarda esa `sale_order` dan).

### E-Commerce bo‘limi

`E-Commerce` bo‘limida siz ushbu faylni onlayn do‘kon sahifasida ko‘rsatishni tanlashingiz mumkin (
`Publish on Website`).

::: misol
Agar `Publish on Website` belgisi yoqilgan bo‘lsa, mahsulot sahifasida `Documents` sarlavhasi ostida fayl havolasi
ko‘rinadi (masalan, [Corner Desk.pdf]).

![Saytda mahsulot sahifasida fayl havolasini ko‘rsatish.](pdf_quote_builder/show-product-page.png)
:::

## PDF taklifnoma

Sotuv buyurtmasida, `Quote Builder` (Taklif quruvchisi) yorlig‘i ostida yakuniy PDF fayliga birlashtiriladigan
qo‘shimcha hujjatlarni tanlang. Agar tanlangan hujjatda maxsus maydonlar mavjud bo‘lsa, ular matn maydonchalari sifatida
ko‘rinadi va ularni to‘ldirish mumkin bo‘ladi.

![Quote Builder bo‘limida sarlavha va pastki sahifalarni tanlash.](pdf_quote_builder/quote-builder-headers.png)

Oldindan sozlangan PDF bilan taklif tasdiqlangach, Odoo bu taklifni chop etish imkonini beradi — xatoliklarni tekshirish
yoki arxiv uchun.

Tasdiqlangan taklifni PDF ko‘rinishida chop etish uchun:

1. Tasdiqlangan taklif sahifasiga o‘ting.
2. `⚙️ (shesterenka)` belgisi ustiga bosing.
3. Ochilgan menyudan `Print` (Chop etish) → `PDF Quote` ni tanlang.

![Tasdiqlangan sotuv buyurtmasidan PDF taklifni chop etish.](pdf_quote_builder/drop-down-print-pdf.png)

Shundan so‘ng, taklifnoma PDF shaklida kompyuterga yuklab olinadi. Uni ochganingizda, taklifning o‘zi va unga
biriktirilgan mahsulot PDF hujjatlari ko‘rinadi va chop etilishi mumkin.

::: tip
`PDF quote builder` bo‘yicha namunaviy fayllarni [bu yerda](#) yuklab oling yoki `taklif namunasi` faylini yuklab
oling (foydali ma'lumotlar uchun).
:::
