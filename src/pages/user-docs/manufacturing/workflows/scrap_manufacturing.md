# Ishlab chiqarish jarayonida chiqindilar

Ishlab chiqarish jarayonida mahsulotlar shikastlangan, nuqsonli yoki endi ishlatib bo'lmaydigan holda komponentlar yoki tayyor mahsulotlarni chiqindi sifatida belgilash zarur bo'lishi mumkin.

Chiqindi materiallarni kuzatish ishlab chiqaruvchilarga chiqindilarni nazorat qilish, jarayon muammolarini aniqlash va ishlab chiqarish xarajatlarini hisobga olishda yordam beradi.

Odoo dasturida chiqindi mahsulotlar jismoniy inventardan olib tashlanadi va *Virtual Locations/Scrap* deb ataladigan virtual joyga ko'chiriladi. Bu joy jismoniy maydon emas - bu haqiqiy zaxira darajalariga ta'sir qilmasdan yo'qotishlarni qayd etish va kuzatish usulidir.

::: tip

Chiqindi buyurtmalarini `Inventory ‣ Operations ‣ Scrap` bo'limiga o'tish orqali ko'rish mumkin. Har bir chiqindi buyurtmasi buyurtma yaratilgan sana va vaqt, shuningdek chiqindi qilingan mahsulot va miqdorni ko'rsatadi.

Har bir chiqindi qilingan mahsulotning umumiy miqdorini ko'rish uchun `Inventory ‣
Configuration ‣ Locations` bo'limiga o'ting, so'ngra barcha virtual joylarni ko'rsatish uchun `Search...` satridan `Internal` filtrini olib tashlang. Ro'yxatdan `Virtual Locations/Scrap` joyini tanlang.
::::

## Chiqindi oynasiga o'tish

Vazifaga qarab, chiqindi qilish **Manufacturing** ilovasida yoki **Shop Floor** modulida amalga oshirilishi mumkin.

**Manufacturing** ilovasi quyidagilarni amalga oshirishga imkon beradi:

- Tayyor mahsulotlarni chiqindi qilish (faqat `MO (Manufacturing Order)` *Done* bosqichida bo'lgan taqdirda).
- Komponentlarni chiqindi qilish (`MO (Manufacturing Order)` *Draft* yoki *Confirmed* bosqichida bo'lganida).

**Shop Floor** quyidagini amalga oshirishga imkon beradi:

- Faqat komponentlarni chiqindi qilish.

### Manufacturing ilovasi

**Manufacturing** ilovasidan mahsulotni chiqindi qilish uchun `Manufacturing ‣
Operations ‣ Manufacturing Orders` bo'limiga o'ting va kerakli `MO (Manufacturing Order)` ni tanlang.

`MO (Manufacturing Order)` da `fa-cog` `(Actions)` ikonasini bosing, so'ngra ochiluvchi menyudan `Scrap` ni tanlang.

![Scrap variantini ko'rsatish uchun tishli g'ildirak ochiluvchi menyusi ko'rsatilgan MO.](scrap_manufacturing/cog.png)

### Shop Floor

**Shop Floor**da faqat komponentlarni chiqindi qilish mumkin. Kerakli `MO (Manufacturing Order)` kartasiga o'ting va `fa-cog` `(Actions)` ikonasini bosing, `What do you want to do?` oynasida `Scrap` ni tanlang.

![Shop Floor ilovasidagi Scrap oynasi.](scrap_manufacturing/shop-floor.png)

## Chiqindi oynasi

`Scrap Products` oynasini `yuqorida batafsil bayon qilingan` usullardan biri yordamida ochgandan so'ng, `Product` ochiluvchi menyusidan chiqindi qilinayotgan komponent yoki tayyor mahsulotni tanlang.

`Quantity` maydoniga chiqindi qilinayotgan miqdorni kiriting.

Sukut bo'yicha `Source Location` maydoni omborning ishlab chiqarishdan oldingi joyiga o'rnatilgan, `Scrap Location` maydoni esa `Virtual Locations/Scrap` joyiga o'rnatilgan. Agar manba yoki chiqindi joyi o'zgartirilishi kerak bo'lsa, tegishli ochiluvchi menyulardan boshqa joyni tanlang.

Agar chiqindi buyurtmasi tasdiqlanganida chiqindi komponentni almashtirish uchun yig'ish buyurtmasi yaratilishi kerak bo'lsa, `Replenish Scrapped Quantities` katagini yoqing. Bu variant faqat `two-step` yoki `three-step` ishlab chiqarish yoqilgan omborlar uchun yoqilishi kerak, chunki komponentlar `one-step` ishlab chiqarish jarayonining bir qismi sifatida tanlanmaydi.

![Chiqindi oynasi.](scrap_manufacturing/scrap-window.png)

`Scrap Products` oynasini to'ldirgandan so'ng, `Scrap Products` tugmasini bosing. Bir yoki bir nechta chiqindi buyurtmalari yaratilgandan so'ng, ekranning yuqori qismida `Scraps` aqlli tugmasi paydo bo'ladi. `MO (Manufacturing Order)` uchun barcha chiqindi buyurtmalar ro'yxatini ko'rish uchun uni bosing.