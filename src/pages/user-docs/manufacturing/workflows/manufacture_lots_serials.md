# Partiya va seriya raqamlari bilan ishlab chiqarish

Odoo dasturida *partiya raqamlari* va *seriya raqamlari* mahsulotlarni Odoo tizimida aniqlash va kuzatish uchun ishlatiladi. Seriya raqamlari individual mahsulotlarga noyob raqamlar berish uchun ishlatiladi, partiya raqamlari esa ma'lum bir mahsulotning bir nechta birligiga bitta raqam berish uchun ishlatiladi.

Partiya yoki seriya raqamlari yordamida kuzatiladigan mahsulotlarni ishlab chiqarishda, Odoo har bir mahsulotga partiya yoki seriya raqami berilishini talab qiladi, bu ishlab chiqarish tugallanishidan oldin amalga oshirilishi kerak. Bu har bir mahsulotning ombordagi paydo bo'lgan vaqtidanoq to'g'ri kuzatilishini ta'minlaydi.

## Mahsulotlarni kuzatish uchun sozlash

Sukut bo'yicha, Odoo har bir mahsulotning qo'lda mavjud miqdorini kuzatadi, lekin mahsulotning individual birliklarini kuzatmaydi. Partiya yoki seriya raqami kuzatuvi har bir mahsulot uchun alohida yoqilishi kerak.

Mahsulotni partiya yoki seriya raqamlari yordamida kuzatish uchun, `Inventory
‣ Configuration ‣ Settings` bo'limiga o'ting, so'ngra `Traceability` bo'limigacha pastga aylantiring va `Lots & Serial Numbers` katagiga belgi qo'ying. Nihoyat, o'zgarishni saqlash uchun `Save` tugmasini bosing.

Keyin `Products ‣ Products` bo'limini bosing va kuzatish uchun mahsulotni tanlang. `General Information` bo'limida `Track Inventory` katagiga belgi qo'yilganligiga ishonch hosil qiling. Partiya va seriya raqami funksiyasi yoqilganligi sababli, belgilangan katagi yonida ochiluvchi menyu paydo bo'ladi.

`Track Inventory` ochiluvchi menyusini bosing. Sukut bo'yicha `By Quantity` tanlangan bo'lib, bu faqat qo'ldagi miqdorni kuzatadi. Mahsulotni partiya raqamlari yordamida kuzatish uchun `By Lots` ni yoki seriya raqamlari yordamida kuzatish uchun `By Unique Serial Number` ni tanlang.

## Partiya raqami bilan ishlab chiqarish

Partiya bilan kuzatiladigan mahsulotni ishlab chiqarish uchun, `Manufacturing ‣
Operations ‣ Manufacturing Orders` bo'limiga o'ting. Yangi ishlab chiqarish buyurtmasini (MO) yaratish uchun `New` tugmasini bosing.

`Product` maydonida partiya yordamida kuzatiladigan mahsulotni tanlang va kerakli `Quantity` ni kiriting. `MO (Manufacturing Order)` ni tasdiqlash uchun `Confirm` tugmasini bosing.

`MO (Manufacturing Order)` tasdiqlangandan so'ng, `MO (Manufacturing Order)` formasining yuqori qismida `Lot/Serial Number` maydoni paydo bo'ladi. Sukut bo'yicha bu maydon bo'sh.

`Lot/Serial Number` maydonini partiya raqami bilan to'ldirish uchun, maydonning o'ng tomonidagi `fa-plus-square-o` `(plus)` ikonasini bosing. Buni qilish avtomatik ravishda keyingi mavjud raqamdan foydalanib partiyani yaratadi va uni maydonga kiradi.

Muqobil ravishda, `Lot/Serial Number` maydonini bosing va mavjud partiya raqamini tanlang yoki qo'lda yangi partiya raqamini kiriting va ochiluvchi menyuda `Create "#"` ni bosing.

![MO dagi \"Lot/Serial Number\" maydoni.](manufacture_lots_serials/lot-sn-field.png)

Ushbu usullarning har biri `MO (Manufacturing Order)` dagi mahsulot(lar)ga ishlab chiqarish tugallanishidan oldin partiya raqamini beradi. Shuningdek, partiya raqamini bermasdan ishlab chiqarishni yakunlash va `MO (Manufacturing Order)` ni `Produce All` tugmasini bosish orqali yopish ham mumkin. Buni qilish avtomatik ravishda keyingi mavjud raqamdan foydalanib partiyani yaratadi va beradi.

## Seriya raqami bilan ishlab chiqarish

Seriya raqamlari bilan kuzatiladigan mahsulotni ishlab chiqarish uchun, `Manufacturing ‣ Operations ‣ Manufacturing Orders` bo'limiga o'ting. Yangi `MO (Manufacturing Order)` yaratish uchun `New` tugmasini bosing.

`Product` maydonida seriya raqamlari yordamida kuzatiladigan mahsulotni tanlang va kerakli `Quantity` ni kiriting. `MO (Manufacturing Order)` ni tasdiqlash uchun `Confirm` tugmasini bosing.

`MO (Manufacturing Order)` tasdiqlangandan so'ng, `MO (Manufacturing Order)` formasining yuqori qismida `Lot/Serial Number` maydoni paydo bo'ladi. Sukut bo'yicha bu maydon bo'sh.

Ishlab chiqarish jarayonining qolgan qismi `MO (Manufacturing Order)` da nechta birlik borligiga bog'liq.

### Bitta birlik ishlab chiqarish

Agar mahsulotning bitta birligi ishlab chiqarilayotgan bo'lsa, `Produce All` tugmasini bosish `MO (Manufacturing Order)` ni yopadi va avtomatik ravishda keyingi mavjud seriya raqamini yaratadi va beradi, bu `Lot/Serial Number` maydonida ko'rinadi.

`MO (Manufacturing Order)` ni yopmasdan seriya raqamini berish uchun, `Lot/Serial Number` maydoniga qo'lda raqam kiriting va `Create "#"` ni bosing yoki maydonning o'ng tomonidagi `fa-plus-square-o` `(plus)` ikonasini bosib uni keyingi mavjud raqam bilan avtomatik to'ldiring.

![MO dagi \"Lot/Serial Number\" maydoni.](manufacture_lots_serials/lot-sn-field.png)

### Bir nechta birlik ishlab chiqarish

:::: warning

Seriya raqamlari yordamida kuzatiladigan mahsulotni ishlab chiqarishda, bir nechta birlik uchun `MO (Manufacturing Order)` yaratilishi mumkin. Biroq, har bir birlikka seriya raqamlari berilganda, ishlab chiqarish oxirida yoki oldin, `MO (Manufacturing Order)` bir nechta `MOs (Manufacturing Orders)` ga bo'linadi, har birida mahsulotning bitta birligi bo'ladi.

Bo'lingan `MOs (Manufacturing Orders)` ning har biri asl `MO (Manufacturing Order)` raqamining oxiriga qo'shilgan raqamli teg bilan aniqlanadi.

::: example
`MO (Manufacturing Order)` [WH/MO/00109] da seriya raqamlari yordamida kuzatiladigan mahsulot [Chair] ning ikki birligi mavjud. Stulning har bir birligiga seriya raqami beriladi. Bu `MO (Manufacturing Order)` ni ikki `MOs (Manufacturing Orders)` ga bo'linishiga olib keladi, har birida stulning bitta birligi bo'ladi. `MOs (Manufacturing Orders)` [WH/MO/00109-001] va [WH/MO/00109-002] deb ataladi.
:::
:::::

`MO (Manufacturing Order)` ning har bir birligiga seriya raqamlarini berish uchun, `Batch Production` oynasini ochish uchun `Produce All` tugmasini bosing.

Oynaning `First Lot/SN` maydoni keyingi mavjud seriya raqami bilan avtomatik to'ldiriladi. `Number of SN` maydoni sukut bo'yicha ishlab chiqarilayotgan birliklar soniga teng. Har ikki maydonning qiymatlari qo'lda o'zgartirilishi mumkin.

`First Lot/SN` maydoniga kiritilgan raqamdan boshlab belgilangan miqdordagi seriya raqamlarini yaratish uchun `Generate` tugmasini bosing. Seriya raqamlari oynaning pastki qismidagi matn maydonida ko'rsatiladi va yaratilgandan keyin qo'lda o'zgartirilishi mumkin.

Ishlab chiqarishni tugallamasdan seriya raqamlarini berish uchun `Prepare MO` tugmasini bosing. Buni qilish `MO (Manufacturing Order)` ni individual `MOs (Manufacturing Orders)` ga bo'ladi, asl `MO (Manufacturing Order)` dagi har bir birlik uchun bittadan. Har bir `MO (Manufacturing Order)` ochiq qoladi va alohida yopilishi mumkin.

Seriya raqamlarini berish va ishlab chiqarishni tugallash uchun `Produce` tugmasini bosing. Buni qilish `MO (Manufacturing Order)` ni individual `MOs (Manufacturing Orders)` ga bo'ladi, asl `MO (Manufacturing Order)` dagi har bir birlik uchun bittadan. Ishlab chiqarish tugallanganligi sababli, barcha `MOs (Manufacturing Orders)` yopiladi.

![Seriya raqamlarini berish mumkin bo'lgan \"Batch Production\" oynasi.](manufacture_lots_serials/batch-production.png)

`Prepare MO` yoki `Produce` tugmasini bosgandan so'ng, `Manufacturing` ilovasi avtomatik ravishda bo'lingan `MOs (Manufacturing Orders)` ning birinchisini ko'rsatadi (masalan, [WH/MO/00109-001]). Qolgan bo'lingan `MOs (Manufacturing Orders)` ni ko'rish va ularga kirish uchun, ekranning yuqori qismidagi `Backorders` aqlli tugmasini bosing.