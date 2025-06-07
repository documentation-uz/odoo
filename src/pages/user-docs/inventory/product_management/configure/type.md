# Mahsulot turi

Odoo dasturida tovarlar va xizmatlar ikkalasi ham *mahsulotlar* sifatida sozlanadi. Yangi mahsulot sozlashda, ehtiyotkorlik bilan tanlanishi kerak bo'lgan bir nechta maydonlar mavjud, chunki ular biznesning tovarlar yoki xizmatlarini hisoblash va kuzatish usulini belgilaydi.

Mavjud mahsulotni sozlash uchun `Inventory app ‣ Products ‣ Products` ga o'ting va ro'yxatdan kerakli mahsulotni tanlang. Shu bilan bir qatorda, `Products` menyusidan yangi mahsulot yaratish uchun `New` tugmasini bosing.

## Sotish va sotib olish

Tovarlar va xizmatlar sotib olinadigan, sotiladigan yoki ikkalasi ham sifatida belgilanishi mumkin. Mahsulot formasida, agar mahsulot mijozga *sotilishi* mumkin bo'lsa (masalan, tayyor mahsulotlar), `Sales` katakchani belgilang. Agar mahsulot *sotib olinishi* mumkin bo'lsa (masalan, xom ashyo), `Purchase` ni belgilang.

::: tip
Agar qayta sotish kiyim do'koni chegirma bilan denim kurtka sotib olib, uni oxirgi iste'molchiga yuqori narxda sotsa, [Jacket] mahsulot formasida `Sales` va `Purchase` katakchalari *ikkalasi ham* belgilanishi mumkin.

Boshqa tomondan, aytaylik do'kon vaqti-vaqti bilan denim va ip kabi xom ashyolardan foydalanib yangi kurtkalar tikadi. [Denim] va [Thread] mahsulot formalarida faqat `Purchase` belgilanishi kerak, [Handmade Jacket] mahsulot formasida esa faqat `Sales` belgilanadi.
:::

## Tovarlar va xizmatlar

Mahsulotni sozlashda mahsulot formasining `General Information` tabida `Product Type` tanlanishi kerak. Har bir mahsulot turi **Sales** va **Purchase** kabi boshqa Odoo ilovalarida turli operatsiyalarga ta'sir qiladi va ehtiyotkorlik bilan tanlanishi kerak.

- `Goods`: moddiy, material ob'ekt (masalan, gamburgerdan tortib uyga qadar hamma narsa)
- `Service`: nomoddiy, nomaterial taklif (masalan, ta'mirlash, soch kesish, qo'ng'iroq markazi yordami)
- `Combo`: tovarlar va xizmatlarning har qanday aralashmasi (masalan, yangi avtomobil (*tovar*) bilan moy almashtirish (*xizmat*) qo'shilgan)

::: tip
Ularning nomoddiy tabiatiga ko'ra, xizmatlar Odoo ning **Inventory** ilovasida kuzatilmaydi.
:::

## Tovarlarni sozlash

`Product Type` sifatida `Goods` ni tanlash mahsulot formasida bir nechta maydon va tablarning avtomatik paydo bo'lishiga olib keladi:

- `Inventory` tab: Bu yerdan `purchasing and manufacturing routes` va mahsulot logistikasi, masalan mahsulot og'irligi va mijoz etkazish vaqti belgilanishi mumkin.

- `Invoicing Policy` maydoni: Bu maydon sotish jarayonining qaysi bosqichida mijozga hisob-faktura berilishini belgilaydi.

::: warning
Agar mahsulotning turli joylardagi zaxirasini kuzatish, inventar baholash uchun, partiya va/yoki seriya raqamlari bilan yoki qayta buyurtma qoidalaridan foydalanganda zarur bo'lsa, `Track Inventory` katakchani belgilang.
:::

### Mahsulot turiga ko'ra inventar operatsiyalari

`Whether a good is tracked or untracked` **Inventory** ning umumiy operatsiyalariga, masalan o'tkazmalar va qayta buyurtma qoidalariga ta'sir qiladi.

Quyidagi jadval kuzatiladigan va kuzatilmaydigan tovarlar uchun qaysi operatsiyalar (va aqlli tugmalar) yoqilganligini xulosalaydi. Batafsil bo'limlar va tegishli hujjatlarga o'tish uchun ajratilgan jadval elementlarini bosing.

| Inventar operatsiyasi | Kuzatiladigan | Kuzatilmaydigan |
|----------------------|---------------|-----------------|
| `Show on-hand quantity` | Ha | Yo'q |
| `Show forecasted quantity` | Ha | Yo'q |
| `Use reordering rules` | Ha | Yo'q |
| `Can be included in a purchase order` | Ha | Ha |
| `Use putaway rules` | Ha | Yo'q |
| `Can be manufactured, subcontracted, or used in another good's BoM` | Ha | Ha |
| `Use inventory adjustments` | Ha | Yo'q |
| `Use inventory valuation` | Ha | Yo'q |
| `Create transfer` | Ha | Ha |
| `Use lot/serial number tracking` | Ha | Yo'q |
| `Can be placed in a kit` | Ha | Ha |
| `Can be placed in a package` | Ha | Ha |
| `Appears on inventory reports` | Ha | Yo'q |

#### Inventar

##### Qo'ldagi va prognoz qilingan miqdorlar

Kuzatiladigan mahsulotning qo'ldagi va kiruvchi hamda chiquvchi buyurtmalar asosida prognoz qilingan miqdorlari mahsulot formasida ikkita aqlli tugma bilan aks ettiriladi:

- `fa-cubes` `On-Hand Quantity`: Bu hozir inventarda mavjud birliklar sonini ifodalaydi. Kuzatiladigan mahsulot uchun zaxira darajalarini ko'rish yoki qo'shish uchun tugmani bosing.
- `fa-area-chart` `Forecasted`: Bu barcha buyurtmalar hisobga olingandan keyin inventarda mavjud bo'lishi *kutilayotgan* birliklar sonini ifodalaydi. Boshqacha qilib aytganda, $\text = \text + \text - \text$. `Forecasted Report` ni ko'rish uchun tugmani bosing.

Boshqa tomondan, kuzatilmaydigan mahsulotlar *doimo* mavjud deb hisoblanadi. Natijada, `On-Hand Quantity` kuzatilmaydi va `Forecasted` miqdori mavjud emas.

##### Joylash qoidalari va saqlash

Kuzatiladigan va kuzatilmaydigan tovarlar ikkalasi ham quyidagilardan foydalanib saqlashni optimallashtirishlari mumkin:

- `fa-random` `Putaway Rules`: Bu tovarga qo'llaniladigan joylash qoidalarini ifodalaydi, masalan yangi jo'natma kelganda uni qayerda saqlash kerak.
- `fa-cubes` `Storage Capacities`: Bu tovar uchun belgilangan har qanday saqlash sig'imi cheklovlarini ifodalaydi. Masalan, ombor ularning katta o'lchami tufayli ma'lum vaqtda o'nta (yoki undan kam) divanni saqlashni talab qilishi mumkin.

##### To'ldirish

###### Qayta buyurtma qoidalari

Faqat kuzatiladigan mahsulotlar sotib olish buyurtmalarini yaratish uchun `reordering rules` ni ishga tushirishlari mumkin. Kuzatilmaydigan tovarlar qayta buyurtma qoidalari yordamida boshqarilishi *mumkin emas*.

Qayta buyurtma qoidalari to'g'ridan-to'g'ri mahsulot formasida `fa-refresh` `(refresh)` belgisi orqali sozlanishi mumkin.

::: tip
Agar mahsulotda qayta buyurtma qoidalari allaqachon mavjud bo'lsa, Odoo bu tugmani `Min / Max` deb qayta nomlaydi, zaxirada bo'lishi kerak bo'lgan minimum va maksimum birliklar sonini ko'rsatish uchun.
:::

###### Sotib olish buyurtmalarini yaratish

Kuzatiladigan va kuzatilmaydigan mahsulotlar ikkalasi ham **Purchase** ilovasida kotirovka so'roviga kiritilishi mumkin. Ammo kuzatilmaydigan mahsulotlarni qabul qilishda, qabul qilish ([WH/IN]) ni tasdiqlashda ularning qo'ldagi miqdori o'zgarmaydi.

###### To'ldirish aqlli tugmasi

`Replenish` aqlli tugmasi barcha tovarlarga to'g'ridan-to'g'ri mahsulot formasidan *Afzal qilingan Yo'l* ga muvofiq zaxirani to'ldirishga imkon beradi.

#### Ishlab chiqarish

Kuzatiladigan va kuzatilmaydigan mahsulotlar ikkalasi ham ishlab chiqarilishi, `subcontracted` qilinishi yoki boshqa mahsulotning `bill of materials (BoM)` ga kiritilishi mumkin.

:::
Kuzatiladigan yoki kuzatilmaydigan tovar uchun mahsulot formasida ishlab chiqarish operatsiyalari uchun paydo bo'lishi mumkin bo'lgan bir nechta aqlli tugmalar mavjud:
:::

- `fa-flask` `Bill of Materials`: Bu mahsulotni ishlab chiqarish uchun ishlatiladigan BoM larni ko'rsatadi.
- `fa-level-up` `Used In`: Bu BoM da ushbu mahsulotni o'z ichiga olgan boshqa tovarlarni ko'rsatadi.

#### Tovarlarni o'tkazish

*O'tkazmalar* - bu tovarlar harakatini o'z ichiga olgan ombor operatsiyalari. O'tkazmalar misollariga `deliveries and receipts` hamda omborlar orasidagi `internal transfers` kiradi.

**Inventory** ilovasida kuzatiladigan mahsulotlar uchun o'tkazma yaratishda, o'tkazmalar har bir joydagi qo'ldagi miqdorni o'zgartiradi. Masalan, ichki joy [WH/Stock] dan [WH/Packing Zone] ga besh birlik o'tkazish [WH/Stock] da qayd etilgan miqdorni kamaytiradi va [WH/Packing Zone] da uni oshiradi.

Kuzatilmaydigan mahsulotlar uchun o'tkazmalar yaratilishi mumkin, ammo har bir saqlash joyidagi aniq miqdorlar kuzatilmaydi.

#### Paketlar

Kuzatiladigan va kuzatilmaydigan (inventar bo'lmagan) mahsulotlar ikkalasi ham `packages` ga joylashtirilishi mumkin.

Biroq, inventar bo'lmagan mahsulotlar uchun miqdor kuzatilmaydi va mahsulot paketning `Contents` da ro'yxatlanmaydi (`Inventory app ‣ Products ‣ Packages` ga o'tib, kerakli paketni tanlab ko'rish mumkin).

Kuzatilmaydigan mahsulot paketga joylashtirildi, ammo Content bo'limi uni ro'yxatlamaydi.

Qo'shimcha ravishda, agar *Move Entire Packages* funksiyasi yoqilgan bo'lsa, paketni ko'chirish o'z ichiga olgan kuzatiladigan mahsulotlarning joyini yangilaydi, ammo o'z ichiga olgan kuzatilmaydigan mahsulotlarnikini emas. Ushbu funksiyani yoqish uchun `Inventory app ‣ Configuration ‣ Operations Types` ga o'ting, har qanday operatsiyani tanlang va `Move Entire Packages` katakchani belgilang.

#### Inventar hisobotlari

**Faqat** kuzatiladigan mahsulotlar quyidagi hisobotlarda ko'rinadi.

::: warning
Bu hisobotlar faqat `administrator access` ga ega foydalanuvchilar uchun mavjud.
:::

- `Stock report`: Bu hisobot barcha qo'ldagi, zaxiralanmagan, kiruvchi va chiquvchi kuzatiladigan inventarning keng ro'yxatini taqdim etadi. Hisobotga kirish uchun `Inventory app ‣ Reporting ‣ Stock` ga o'ting.
- `Location report`: Bu hisobot har bir joyda (ichki, tashqi yoki virtual) qaysi kuzatiladigan mahsulotlar saqlanganligining taqsimotini ko'rsatadi. Hisobot faqat *Storage Location* funksiyasi faollashtirilgan holda mavjud (`Inventory app ‣ Configuration ‣ Settings`). Unga kirish uchun `Inventory app ‣ Reporting ‣ Locations` ga o'ting.
- `Moves History report`: Bu hisobot tovarning qayerda va qachon zaxiraga kirgan/chiqganini xulosalaydi. Hisobotga kirish uchun `Inventory app ‣ Reporting ‣ Moves History` ga o'ting. Shu bilan bir qatorda, mahsulot formasidagi `fa-exchange` `In / Out` aqlli tugmasini bosib, hisobotni shu mahsulotning o'ziga xos harakatlar tarixiga filtrlash mumkin.
- `Moves Analysis`: Bu hisobot operatsiya turiga ko'ra inventar o'tkazmalarining pivot jadval ko'rinishini taqdim etadi.
- `Stock Valuation report`: Barcha kuzatiladigan inventarning pul qiymatining batafsil yozuvi.