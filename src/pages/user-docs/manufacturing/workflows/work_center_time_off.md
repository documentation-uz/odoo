# Ish markazi dam olish vaqti

Odoo da *ish markazlari* ma'lum joylarda ishlab chiqarish operatsiyalarini bajarish uchun ishlatiladi. Biroq, agar ish markazi biron-bir sabab bilan ishlatilmasa, ish buyruqlari u yana ishlamaguncha ish markazida to'plana boshlaydi.

Natijada, yangi ish buyruqlarini ishlayotgan muqobil ish markazlariga yo'naltirish uchun ish markazini Odoo da mavjud bo'lmagan deb belgilash zarur. Odoo ning **Time Off** dasturidan foydalanib, ish markazini ma'lum vaqt davri uchun mavjud emas deb belgilash mumkin. Buni amalga oshirish ta'sirlangan ish markazi yana mavjud bo'lguncha ishlab chiqarish operatsiyalarining davom etishini ta'minlaydi.

## Konfiguratsiya

Ish markazi mavjud emas deb belgilanishidan oldin, Odoo platformasi to'g'ri sozlanishi kerak. Avvalo, `developer mode` ni yoqish zarur. Bu har bir ish markazining *Working Hours* sahifasida *Time Off* aqlli tugmasining paydo bo'lishiga imkon beradi.

Keyin, **Time Off** dasturini o'rnating. Bu xodimlar va ish markazlarini o'z ichiga olgan Odoo dagi barcha resurslar uchun dam olish vaqtini boshqarish uchun ishlatiladigan dastur.

Buning uchun `Apps` dasturiga o'ting, so'ng qidiruv panelida [Time Off] ni qidiring. `Time Off` dasturi uchun karta sahifada paydo bo'ladigan yagona karta bo'lishi kerak. Dasturni o'rnatish uchun kartadagi `Install` tugmasini bosing.

Oxirgi qadam ish markazlarini to'g'ri sozlashdir. Ushbu ish jarayoni uchun kamida ikkita ish markazi bo'lishi kerak: biri mavjud bo'lmagan va ikkinchisi boshqasi qabul qila olmaydigan ish buyruqlarini qabul qiladigan. Agar ikkinchi ish markazi konfiguratsiya qilinmagan bo'lsa, Odoo ish buyruqlarini mavjud bo'lmagan ish markazidan boshqa joyga yo'naltira olmaydi va ular uning navbatida to'planadi.

Ish markazi yaratish uchun `Manufacturing app ‣ Configuration ‣ Work Centers ‣ New` ga o'ting.

Ikkala ish markazida ham `Equipment` oynasi ostida bir xil uskunalar ro'yxatlangan bo'lishiga ishonch hosil qiling. Bu bir ish markazida bajariladigan operatsiyalarni boshqasida ham bajarish mumkinligini ta'minlaydi.

Mavjud bo'lmagan ish markazida ikkinchi ish markazini `Alternative Workcenters` ochiladigan menyusidan tanlang. Endi Odoo birinchi ish markazi biron-bir sabab bilan mavjud bo'lmaganda ish buyruqlarini ikkinchi ish markaziga yuborishni biladi.

![Muqobil ish markazi bilan sozlangan ish markazi formasi.](work_center_time_off/alternative-work-center-selection.png)

## Ish markazi uchun dam olish vaqti qo'shish

Konfiguratsiya tugallangandan so'ng, endi ish markaziga dam olish vaqti tayinlanishi mumkin. `Manufacturing app ‣ Configuration ‣ Work Centers` ga o'tib, ta'sirlangan ish markazini tanlashdan boshlang. Ish markazi uchun ish soatlari sahifasini ochish uchun `Working Hours` ochiladigan menyusining o'ng tomonidagi `oi-arrow-right` `(Internal link)` tugmasini bosing.

![Ish markazi formasidagi Working Hours "External link" tugmasi.](work_center_time_off/working-hours-button.png)

Ish soatlari sahifasi ish markazi uchun standart ish soatlarini ko'rsatadi. Ishlab chiquvchi rejimi faollashtirilgan holda sahifa tepasida `fa-plane` `Time Off` aqlli tugmasi paydo bo'ladi. `Resource Time Off` sahifasini ochish uchun uni bosing.

Ushbu sahifada yangi dam olish vaqti yozuvini sozlash uchun `New` tugmasini bosing. Dam olish vaqti formasida ish markazi yopilishining `Reason` ni (masalan, buzilgan uskunalar, texnik xizmat ko'rsatish va h.k.) belgilang, ta'sirlangan ish markazini `Resource` sifatida tanlang va ish markazi mavjud bo'lmagan davrni belgilash uchun `Start Date` va `End Date` ni tanlang.

!["Resource Time Off" formasi.](work_center_time_off/time-off-form.png)

## Muqobil ish markazi rejalashtiruvi

Ish markazi belgilangan dam olish vaqti davri ichida bo'lganda, unga yuborilgan ish buyruqlari *Plan* tugmasi yordamida avtomatik ravishda muqobil ish markaziga yo'naltirilishi mumkin.

`Manufacturing app ‣ Operations ‣ Manufacturing Orders ‣ New` ga o'tib, yangi ishlab chiqarish buyrug'i (MO) yaratishdan boshlang. `MO (manufacturing order)` formasida operatsiyalardan biri uchun mavjud bo'lmagan ish markazini ishlatadigan `Product` ni belgilang. `MO (manufacturing order)` ni tasdiqlash uchun `Confirm` tugmasini bosing.

Tasdiqlangan `MO (manufacturing order)` da `Work Orders` oynasini tanlang. Standart bo'yicha, mavjud bo'lmagan ish markazi `Work Center` ustunida belgilangan. Sahifaning yuqori chap tomonida `Plan` tugmasi ham mavjud.

`Plan` tugmasini bosing va `Work Orders` oynasining `Work Center` ustunida ro'yxatlangan ish markazi avtomatik ravishda muqobil ish markaziga o'zgartiriladi.

Plan tugmasini bosgandan oldin, ish buyrug'i Main Assembly Line da rejalashtirilgan.

Plan tugmasini bosgandan keyin, ish buyrug'i Alternative Assembly Line da qayta rejalashtirilgan.

Mavjud bo'lmagan ish markazi uchun dam olish vaqti davri tugagandan so'ng, Odoo ish markazi yana mavjud ekanligini tan oladi. Shu paytda `Plan` tugmasini bosish birinchisi sig'imi to'lgan bo'lmasa, ish buyruqlarini muqobil ish markaziga yo'naltirmaydi.