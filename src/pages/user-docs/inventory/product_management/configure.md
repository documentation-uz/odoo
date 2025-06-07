# Mahsulotni konfiguratsiya qilish

Odoo'da mahsulotlar guruhini quyidagilar yordamida aniqroq belgilash mumkin:

- `Units of measure (UoM)`: mahsulot miqdorlarini belgilash uchun standart miqdor (masalan, metr, yard, kilogram). Odoo'da o'lchov tizimlari o'rtasida avtomatik konvertatsiya qilish imkonini beradi, masalan, santimetrdan futga.
  - *Misol: Matoni metrda o'lchab sotib olish, lekin sotuvchidan yardda qabul qilish.*
- `configure/package`: bir xil yoki turli mahsulotlarni bir joyga guruhlash uchun ishlatiladigan jismoniy konteyner.
  - *Misol: Yetkazib berish uchun turli buyumlarni o'z ichiga olgan quti yoki tokchada ikki yuz tugmani saqlash uchun saqlash qutisi.*
- `configure/packaging`: *bir xil* mahsulotlarni belgilangan miqdorlarda qabul qilish yoki sotish uchun guruhlaydi.
  - *Misol: Olti, o'n ikki yoki yigirma to'rtta paketlarda sotiladigan gazli ichimlik bankalari.*

## Taqqoslash

Ushbu jadval o'lchov birliklari, paketlar va qadoqlashning batafsil taqqoslashini beradi, bu bizneslar o'z talablariga eng mos keladiganini baholashga yordam beradi.

  Xususiyat                    O'lchov birligi                                                                                                                                                 Paketlar                                                                                                                                                                     Qadoqlash
  ---------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------
  Maqsad                       Mahsulot birliklari uchun standartlashtirilgan o'lchov (masalan, sm, funt, L)                                                                                  Muayyan jismoniy konteyner va uning tarkibini kuzatib boradi                                                                                                                Osonroq boshqarish uchun belgilangan miqdordagi elementlarni guruhlaydi (masalan, 6, 12 yoki 24 paket)
  Mahsulot bir xilligi         Har bir mahsulot uchun belgilanadi; ma'lumotlar bazasida bitta `UoM (Unit of Measure)` sifatida saqlanadi                                                   Aralash mahsulotlarga ruxsat beradi                                                                                                                                         Faqat bir xil mahsulotlar
  Moslashuvchanlik             Sotuvchi/mijoz `UoMs (Units of Measure)` va ma'lumotlar bazasi `UoM (Unit of Measure)` o'rtasida konvertatsiya qiladi                                       Elementlarni konteynerga qo'shish yoki olib tashlash mumkin                                                                                                                 Miqdorlar belgilangan (masalan, har doim 6, 12 yoki 24 paket)
  Murakkablik                  Birlik konvertatsiyalari uchun eng oddiy                                                                                                                       Konteyner darajasidagi inventar kuzatuvi tufayli murakkabroq                                                                                                                Oddiyroq; bir xil mahsulot guruhlari uchun mos
  Inventarni kuzatish          Mahsulot formasida belgilangan aniq `UoM (Unit of Measure)` da ombordagi mahsulot miqdorlarini kuzatib boradi                                              Omborda paket joylashuvi va tarkibini kuzatib boradi                                                                                                                         Guruhlangan miqdorlarni kuzatib boradi, lekin alohida elementlarning joylashuvini emas
  Barkod operatsiyalarining silliqligii    Mavjud emas                                                                                                                                    Qabul qilish uchun paket va alohida elementlarni skanerlashni talab qiladi (paketda 30 ta element bo'lsa ham). Paketni ko'chirishda paketdagi elementlarning joylashuvini yangilash uchun `Move Entire Packages` xususiyatini yoqish mumkin                       Qadoqlash barkodini skanirlash barcha qo'shilgan birliklarni avtomatik ravishda qayd etadi (masalan, 1 paket = 12 birlik)
  Mahsulotni qidirish          Mavjud emas                                                                                                                                                   Mahsulot barkodini skanirlash Odoo ma'lumotlar bazasida uning odatiy saqlash joyini aniqlaydi                                                                            Barkod guruhlangan miqdorni aniqlaydi, saqlash joyini emas
  Noyob barkodlar              Mavjud emas                                                                                                                                                   Alohida paketlar uchun noyob barkodlar (masalan, Pallet #12)                                                                                                               Barkodlar qadoqlash turi darajasida o'rnatiladi (masalan, 6 paket uchun)
  Qayta ishlatish              Tegishli emas                                                                                                                                                  `Package Use` maydoni orqali konfiguratsiya qilingan holda bir martalik yoki qayta ishlatiladigan bo'lishi mumkin                                                       Faqat bir martalik
  Konteyner og'irligi          Tegishli emas                                                                                                                                                  Konteynerning o'zi og'irligi paketning *Shipping Weight* maydoniga kiritiladi (`Inventory app ‣ Products ‣ Packages`)                                                  Konteyner og'irligi *Package Type* sozlamalarida belgilanadi
  Lot/seriya raqami kuzatuvi   Lotlar orqali `UoMs (Units of Measure)` kuzatish uchun qo'lda tuzatishlar talab qiladi (tafsilotlar uchun `use case`ga qarang)                           Faqat tarkibdagi mahsulotlarga taalluqli                                                                                                                                    Tarkibdagi mahsulotlar va konteynerga ham taalluqli
  Maxsus marshrutlar           O'rnatib bo'lmaydi                                                                                                                                             O'rnatib bo'lmaydi                                                                                                                                                           Marshrutlar muayyan qadoqlash turi uchun aniq ombor yo'llarini belgilashi mumkin

## Foydalanish holatlari

Turli xil xususiyatlarni taqqoslagandan so'ng, turli inventar boshqaruvi va logistika ish jarayonlariga ega bo'lgan ushbu bizneslar o'z qarorlariga qanday kelganligini ko'rib chiqing.

### Qadoqlash yordamida elementlar palletlari

Ombor har birida 96 ta sovun bo'lgan jismoniy palletlarda tashkil etilgan sovun jo'natmalarini qabul qiladi. Ushbu palletlar ichki o'tkazmalar uchun ishlatiladi va mustaqil birliklar sifatida ham sotiladi. Logistik maqsadlar uchun paletning og'irligi ma'lum yetkazib berishlar uchun umumiy yuk og'irligiga kiritilishi kerak. Qo'shimcha ravishda, palet kuzatuvni osonlashtirish uchun barkodga muhtoj va palet qabul qilinganda alohida sovun miqdori zaxira hisobiga kiritilishi kerak.

Turli variantlarni baholagandan so'ng, *mahsulot qadoqlashi* eng mos yechim bo'ldi. Qadoqlash paletga barkod belgilash imkonini beradi va uni 96 ta sovun bo'lgan "palet turi" sifatida aniqlaydi. Ushbu barkod guruhlangan miqdorni avtomatik ravishda ro'yxatga olish orqali operatsiyalarni soddalashtiradi. Asosiy farqlar:

- **Ombor kuzatuvi cheklovlari**: Odoo faqat umumiy miqdorni kuzatib boradi, qadoqlash sonini emas. Masalan, 12 va 24 miqdorli palet qabul qilinsa, Odoo palet tafsilotlarini emas, 36 miqdorni qayd etadi.
- **Qadoqlash barkodlari tur-spetsifik, noyob emas**: Barkodlar qadoqlash turlarini (masalan, "96 ta sovunli palet") ifodalaydi, lekin Pallet #1 yoki Pallet #2 kabi alohida palletlarni noyob aniqlamas.

### Barkod yordamida mahsulot ma'lumotlarini olish

Odoo foydalanuvchisi **Barcode** ilovasi konteyner uchun barkodni skanerlash orqali mahsulotning odatiy saqlash joyini ko'rsatishini kutadi.

*Paketlar* eng mos keladi. `appropriate setting is enabled` bo'lganda, paket barkodini skanerlash **Barcode** ilovasida uning tarkibini ko'rsatadi.

Paketlar jismoniy konteynerlarni ifodalaydi va ular saqlagan elementlarni batafsil kuzatib borishga imkon beradi. Paketni skanerlash uning tarkibini ko'rish imkonini beradi va inventar harakatlari kabi operatsiyalarni osonlashtiradi.

### Saqlashda turli o'lchov birliklarini kuzatish 

Meva sharbati distribyutori o'z operatsiyalari uchun bir nechta `UoMs (Units of Measure)` kuzatib boradi:

- Mevalar tonnalarda sotib olinadi.
- Sharbat kilogrammda ishlab chiqariladi va saqlanadi.
- Kichik namunalar retsept sinovlari uchun grammlarda saqlanadi.

*O'lchov birligi* eng mos keladi. Odoo qabul qilish paytida tonnalarni kilogrammlarga avtomatik ravishda aylantiradi. Biroq, Odoo ma'lumotlar bazasida har bir mahsulot uchun faqat bitta `UoM (Unit of Measure)` kuzatib borganligi sababli, kompaniya `UoMs (Units of Measure)` farqlash uchun lot raqamlaridan foydalanadi:

- LOT1: Gramm (g)
- LOT2: Kilogram (kg)

LOT2 dan 1 kg ni ayirish va LOT1 ga 1000 g qo'shish kabi lotlar o'rtasida konvertatsiya qilish uchun qo'lda inventar tuzatishlari talab qilinadi. Funktsional bo'lsa-da, bu yechim vaqt talab qilishi va xatolarga moyil bo'lishi mumkin.

::: 
configure/type configure/uom configure/package configure/packaging
:::