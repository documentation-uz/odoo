# Create quotations

Odoo Sales tizimida kotirovkalar yaratiladi va mijozlarga yuboriladi. Kotirovka mijoz tomonidan tasdiqlangach, u rasmiy
ravishda sales orderga aylantiriladi. Shundan so‘ng, bu buyurtma asosida hisob-faktura chiqariladi va to‘lov amalga
oshiriladi.

## Kotirovka sozlamalari

Ushbu sozlamalarga kirish uchun Sales ilovasiga o‘ting ‣ Configuration ‣ Settings bo‘limini tanlang va Quotations &
Orders bo‘limigacha pastga tushing.

![Quotations & Orders section](https://www.odoo.com/documentation/18.0/_images/quotations-orders-section.png)

- **Quotation Templates**: Standart mahsulot takliflarini o‘z ichiga olgan kotirovka shablonlarini yaratish uchun ushbu
  parametrni yoqing. Ushbu belgi tanlanganda, Default Template maydoni va Quotation Templates sahifasiga havola paydo
  bo‘ladi.
- **Online Signature**: Buyurtmalarni tasdiqlash uchun onlayn imzo talab qiling.
- **Online Payment**: Buyurtmani tasdiqlash uchun mijozdan oldindan (to‘liq yoki qisman) onlayn to‘lov talab qiling.
  Ushbu belgi tanlanganda, Prepayment amount (%) maydoni va Payment Providers sahifasiga havola paydo bo‘ladi.
- **Default Quotation Validity**: Kotirovkaning amal qilish muddatini (kunlarda) belgilang.

Default Recurrence: Yangi kotirovka uchun takrorlanish davrini tanlang.

Sale Warnings: Maxsus mahsulotlar yoki mijozlar bilan bog‘liq buyurtmalar haqida ogohlantiruvchi xabarlar oling.

PDF Quote builder: Kotirovkalarni sarlavha sahifalari, mahsulot tavsiflari, pastki sahifalar va boshqa elementlar bilan
moslashtiring.

Lock Confirmed Sales: Tasdiqlangan buyurtmalarga keyinchalik o‘zgartirish kiritilishini oldini oling.

Pro-Forma Invoice: Mijozlarga pro-forma hisob-fakturalar yuboring.

Ushbu sozlamalardan birontasini faollashtirish uchun kerakli parametr yonidagi katakchani belgilang. So‘ngra Save
tugmasini bosing.

## Kotirovkalar boshqaruv paneli

Kotirovkalar boshqaruv paneli — bu Sales ilovasi ochilganda birinchi bo‘lib ko‘rinadigan sahifadir.

Standart holatda, boshqaruv panelida My Quotations filtri orqali joriy foydalanuvchiga tegishli bo‘lgan barcha
kotirovkalar ko‘rsatiladi.

![Quotations Dashboard](https://www.odoo.com/documentation/18.0/_images/quotations-dashboard.png)

::: tip Eslatma
Ma’lumotlar bazasidagi barcha kotirovkalarni ko‘rish uchun My Quotations filtrini qidiruv panelidan olib tashlang.
:::

Ushbu sahifadagi kotirovkalar standart holatda ro‘yxat ko‘rinishida (List view) namoyon bo‘ladi, biroq ularni Kanban,
Kalendar, Pivot jadval, Grafik yoki Faoliyat ko‘rinishi (Activity view) tarzida ham ko‘rish mumkin.

Kotirovkalar boshqaruv panelidagi ro‘yxatdan istalgan kotirovkani ko‘rish yoki tahrirlash uchun uning ustiga bosing —
Odoo tanlangan kotirovka uchun maxsus forma sahifasini ochadi.

## Kotirovka yaratish

Kotirovka yaratish uchun Sales ilovasini oching va Quotations boshqaruv panelining yuqori chap burchagida joylashgan New
tugmasini bosing.

::: warning Muhim
New tugmasi faqat Quotations boshqaruv paneli ro‘yxat (List) yoki Kanban ko‘rinishida bo‘lsa, ko‘rinadi.
:::

New tugmasini bosganingizda, turli maydonlar va ichki varaqalarga (tabs) ega bo‘lgan bo‘sh kotirovka formasi ochiladi.

![Quotation Form](https://www.odoo.com/documentation/18.0/_images/quotation-form.png)

Formaning yuqori qismidagi Customer maydoniga mijoz nomini kiriting. Bu majburiy maydondir.

Agar mijoz haqida ma’lumotlar allaqachon bazada mavjud bo‘lsa, Invoice Address va Delivery Address maydonlari Contacts
ilovasidagi mijoz kontaktlari asosida avtomatik to‘ldiriladi.

Agar mijoz boshqa mijoz yoki kontakt tomonidan tavsiya qilingan bo‘lsa, Referrer maydoniga ularning ismini kiriting.

Referrer tanlangach, yangi Commission Plan maydoni paydo bo‘ladi va u yerdan ro‘yxatdan komissiya rejasi tanlanadi.
Ushbu komissiya Referrer sifatida ko‘rsatilgan kontaktga beriladi.

Agar Invoice Address va Delivery Address maydonlari avtomatik to‘ldirilmagan bo‘lsa, kerakli manzillarni qo‘lda
kiriting. Har ikkala maydon ham majburiy hisoblanadi.

Keyingi bosqichda, istasangiz, bu kotirovka uchun Quotation Template (kotirovka shabloni) tanlang. Tanlangan shablon
turiga qarab, qo‘shimcha maydonlar paydo bo‘lishi mumkin.

Expiration (muddati tugash) maydonida ko‘rsatilgan standart sana Sales ilovasi ‣ Configuration ‣ Settings bo‘limida
sozlangan Default Quotation Validity (kotirovka amal qilish muddati) parametri asosida belgilanadi.

::: tip Maslahat
Agar kotirovka shablonidan foydalanilsa, Expiration (muddati tugash) maydonidagi sana shablon formasidagi Quotation
Validity (kotirovka amal qilish muddati) qiymatiga asoslanadi.
:::

Agar kotirovka davriy mahsulot yoki obunaga tegishli bo‘lsa, tegishli Recurring Plan (davriy reja) ni ro‘yxatdan
tanlang.

Agar kerak bo‘lsa, ushbu kotirovka uchun maxsus Pricelist (narx ro‘yxati) ni tanlang.

Va nihoyat, kotirovkaga nisbatan qo‘llaniladigan Payment Terms (to‘lov shartlari) ni belgilang.

## Order Lines varaqasi

Kotirovka formasidagi birinchi varaqa bu Order Lines (Buyurtma qatorlari) varaqasidir.

Ushbu varaqada kotirovkaga mahsulotlar va ularning miqdorlarini qo‘shasiz.

Mahsulotlarni kotirovkaga qo‘shishning ikki usuli mavjud:

- Add a product tugmasini bosing, Product ro‘yxatidan kerakli mahsulotni tanlang va kerak bo‘lsa, uning miqdorini
  o‘zgartiring.
- Yoki Catalog tugmasini bosing — bu barcha mahsulotlar va ularning variantlarini ko‘rsatadigan alohida sahifani ochadi.
  Mahsulotlar Product Category (mahsulot kategoriyasi) va Attributes (xususiyatlar) bo‘yicha saralanadi.

![Product Catalog](https://www.odoo.com/documentation/18.0/_images/product-catalog.png)
