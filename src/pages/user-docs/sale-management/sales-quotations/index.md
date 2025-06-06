# Sales Quotations

"Sales quotation" yoki quote — bu mijozga yuboriladigan, mahsulot yoki xizmatlarning taxminiy narxlari va shartlarini
o‘z ichiga olgan hujjatdir. Mijoz tomonidan qabul qilingach, quotation "sales order"ga aylantiriladi va yetkazib berish
hamda hisob-faktura qilishdan oldingi yakuniy kelishuv hisoblanadi.

## Savdo jarayoniga umumiy nazar

Kotirovkalar mijoz bilan munosabatlarning boshlang‘ich qiziqishdan to to‘lovgacha bo‘lgan turli bosqichlarini bog‘lovchi
kengroq savdo jarayonining bir qismidir.

Odatda ushbu jarayon quyidagi bosqichlardan iborat:

1. _Quotation_: Mahsulot tafsilotlari va narxlari aks ettirilgan taklif mijozga yuboriladi.
2. _Sales order_: Mijoz taklifni qabul qilishi bilan avtomatik yaratiladi va savdo tasdiqlanadi.
3. _Delivery_ (agar mavjud bo‘lsa): Mahsulotlar jo‘natiladi yoki xizmatlar ko‘rsatiladi.
4. _Invoice_: Yetkazib berilgan mahsulot yoki xizmatlarga asoslanib yakuniy hisob-faktura taqdim qilinadi.
5. _Payment_: Mijoz hisob-fakturani to‘laydi va savdo jarayoni yakunlanadi.

Ushbu jarayon korxonalarga savdoning butun hayotiy siklini kuzatish va ma’lumotlarni ilovalar orasida bir xil
ko‘rinishda saqlash imkonini beradi.

Odoo tizimida quotation'lar Sales ilovasida sozlanadi. Ular shuningdek, savdo jarayonining bir qismi sifatida boshqa
ilovalardan ham yaratilishi mumkin:

- **CRM**: Imkoniyatlarni (opportunities) kotirovkaga aylantirib, istiqbolli bitimlarni kuzatib borish.
- **Helpdesk**: Pulli xizmatlar yoki mahsulotlar taklif qilishda tiketlardan kotirovkalar yaratish.
- **Subscriptions**: Avtomatik to‘lov tsikliga o‘tishdan oldin davriy xizmatlarni kotirovka orqali taklif qilish.

## Biznes bitimlarida savdo kotirovkalari

Savdo kotirovkalari — mijozning mahsulot yoki xizmatlarga dastlabki qiziqishi va yakuniy shartnoma orqali to‘lov hamda
yetkazib berish majburiyatini o‘z ichiga olgan bosqich orasidagi muhim qadam hisoblanadi. Kotirovkalar shuningdek,
narxlarning ochiq va shaffof ko‘rinishda bo‘lishini ta’minlab, tomonlarga o‘zaro kelishuv oldidan shartlarni muhokama
qilish hamda aniqlashtirish imkonini beradi.

Savdo kotirovkalari biznes bitimlarida quyidagi muhim vazifalarni bajaradi:

- Yakuniy mijozga sotilayotgan mahsulot yoki xizmatlar hajmi va narxlarini belgilaydi.
- Narxlar, yetkazib berish, soliq va to‘lov shartlarini aniq tushunishga yordam beradi.
- Bitim shartlari ustida muzokaralar olib borish uchun hujjatlashtirilgan bosqich vazifasini o‘taydi.

## Savdo kotirovkasining asosiy qismlari

To‘g‘ri tuzilgan savdo kotirovkasi quyidagi asosiy qismlardan iborat:

- Kotirovka raqami va sanasi: Kuzatish hamda murojaat qilish uchun ishlatiladigan yagona raqam va hujjat yaratilgan
  hamda amal qilish muddati tugaydigan sanalar. Odoo Sales ilovasida kotirovka raqami tasdiqlangandan keyin standart
  tartibda belgilanadi.
- Mijoz haqida ma’lumotlar: Mijozning ismi va bog‘lanish ma’lumotlari, shuningdek hisob-faktura va yetkazib berish
  manzillari.
- Mahsulot va xizmatlar: Sotib olinadigan mahsulot yoki xizmatlarning batafsil ro‘yxati, shu jumladan miqdori, texnik
  tavsiflari (agar zarur bo‘lsa) va birlik narxi.
- To‘lov shartlari va narx ro‘yxatlari (Pricelists): Aynan ushbu savdo kotirovkasi uchun mo‘ljallangan narxlash va
  to‘lov tartiblari hamda kelishilgan qoidalar.
- Maxsus narxlar: Mahsulotlar bo‘yicha alohida chegirmalar va promo-narxlar (agar mavjud bo‘lsa).
- Umumiy qiymat va valyuta: Mahsulot yoki xizmatlarning umumiy summasi, yetkazib berish xarajatlari va tegishli
  soliqlarni o‘z ichiga olgan yakuniy narxlar.

Odoo Sales ilovasida kotirovkalarga qo‘shimcha tafsilot va sozlamalarni qo‘shish mumkin. Bu sozlamalar orqali kotirovka
mazmuni batafsillashadi va quyidagi imkoniyatlarni taqdim etadi:

Kotirovka shablonlari (Quotation templates): Kotirovkani tezkor yaratish uchun tayyorlangan standart shablonlar.

Obuna rejalar (Subscription plans): Takroriy xizmatlarni taklif qilish va to‘lovlarni avtomatlashtirish uchun obuna
shartlarini belgilash imkoniyati.

Savdo jamoasi va tavsiya qiluvchi shaxs (Sales team referrer name): Bitim ustida ishlayotgan savdo jamoasi yoki tavsiya
qilgan shaxs nomini ko‘rsatib qo‘yish orqali savdo jarayonini kuzatishni osonlashtiradi.

![Sales Quotation](https://www.odoo.com/documentation/18.0/_images/sales-quotation.png)
