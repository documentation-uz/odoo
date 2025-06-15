# Subkontrakt

Ishlab chiqarishda *subkontrakt* - bu kompaniyaning uchinchi tomon ishlab chiqaruvchi yoki subpudratchi bilan shartnoma tuzib, mahsulotlarni ishlab chiqarish jarayonidir. Keyinchalik bu mahsulotlar shartnoma tuzuvchi kompaniya tomonidan sotiladi.

Subkontrakt ham shartnoma tuzuvchi kompaniya, ham subpudratchi uchun turli xil afzalliklarni taqdim etadi.

Shartnoma tuzuvchi kompaniya uchun subkontrakt ularga ishlab chiqarishni o'zlari amalga oshirish uchun zarur bo'lgan jihozlar va ishchi kuchiga sarmoya kiritish va ularni saqlash haqida qayg'urmasdan, keng turdagi ishlab chiqarilgan mahsulotlarni sotish imkonini beradi.

Bu shartnoma tuzuvchi kompaniyalarga iqtisodiy tsikllar davomida moslashuvchanlikni saqlashga yordam beradi, chunki ular hozirgi vaziyat talab qilganidek, subpudratchilar bilan hamkorlikni osongina oshirishi yoki kamaytirishilari mumkin. Bu shuningdek, ular o'zlari mukammal bajaradigan vazifalar ustida e'tiborni jamlash imkonini beradi, shu bilan birga maxsus ishlarni subpudratchilarga topshiradi.

Munosabatning boshqa tomonida, subkontrakt subpudratchilarining subkontrakt shartnomasi doirasidan tashqarida unchalik foydali bo'lmasligi mumkin bo'lgan mahsulot ishlab chiqarishning tor sohalariga ixtisoslashtirish imkonini beradi. Muayyan kelishuvlarda, bu ularga qaysi loyihalarni qabul qilish yoki rad etish va ma'lum vaqtda qanchaga ishlash bo'yicha moslashuvchanlikni ham taqdim etadi.

Odoo'da kompaniyalar o'zlarining subkontrakt ish oqimlarini turli omillarga asoslanib sozlashlari mumkin, jumladan komponentlar qanday olinishi va tayyor mahsulotlar ishlab chiqarilgach nima bo'lishi.

:::::: cards
::: 
Asosiy subkontrakt

Subpudratchi kompaniya komponentlar bilan ta'minlamasdan mahsulotlarni subkontrakt qilish.
:::

::: 
Subpudratchi ta'minlash

Subkontrakt qilingan mahsulot uchun PO tasdiqlanganda har safar komponentlarni subpudratchi kompaniyaga yuborish.
:::

::: 
Subpudratchi kompaniyaga to'g'ridan-to'g'ri yetkazib berish

Subkontrakt qilingan mahsulot uchun PO tasdiqlanganda har safar komponentlarni subpudratchi kompaniyaga to'g'ridan-to'g'ri yetkazib berish.
:::
::::::

## Sozlash

Odoo'da subkontraktni yoqish uchun `Manufacturing app ‣ Configuration ‣ Settings` bo'limiga o'tib, `Operations` sarlavhasi ostidagi `Subcontracting` sozlamasi yonidagi katakchani belgilang. Keyin `Save` tugmasini bosing.

![Ishlab chiqarish ilovasidagi Subkontrakt sozlamasi.](subcontracting/subcontracting-setting.png)

Subkontrakt yoqilgach, Odoo'da bir nechta turli xil funksiyalar mavjud bo'ladi:

- Materiallar ro'yxatlarida (BoM), *BoM turi* maydoni endi *Subkontrakt* variantini o'z ichiga oladi. *Subkontrakt* `BoM (Bill of Materials)` turini yoqish `BoM (Bill of Materials)`ning mahsulotini subkontrakt qilingan mahsulot sifatida belgilaydi, ya'ni Odoo uni Odoo ma'lumotlar bazasiga ega bo'lgan kompaniya tomonidan emas, balki subpudratchi tomonidan ishlab chiqarilganini biladi.
- Ikkita subkontrakt yo'nalishlari *Inventory* ilovasida mavjud bo'ladi va ularning mahsulot sahifalarining *Inventory* bo'limida muayyan mahsulotlarga tayinlanishi mumkin:
  - *Buyurtma bo'yicha subpudratchi ta'minlash*
  - *Buyurtma bo'yicha subpudratchi kompaniyaga to'g'ridan-to'g'ri yetkazib berish*

## Subkontrakt ish oqimlari

Odoo'da uchta subkontrakt ish oqimi mavjud, ular orasidagi asosiy farq subpudratchi zarur komponentlarni *qanday* olishida:

- *Asosiy* subkontrakt ish oqimida subpudratchi komponentlarni olish uchun to'liq javobgardir. Bu ish oqimi `subcontracting/subcontracting_basic` hujjatlashtirishda batafsil bayon etilgan.
- *Buyurtma bo'yicha subpudratchi ta'minlash* ish oqimida shartnoma tuzuvchi kompaniya komponentlarni o'z omboridan subpudratchi kompaniyaga yuboradi. Bu ish oqimi `subcontracting/subcontracting_resupply` hujjatlashtirishda bayon etilgan.
- *Buyurtma bo'yicha subpudratchi kompaniyaga to'g'ridan-to'g'ri yetkazib berish* ish oqimida shartnoma tuzuvchi kompaniya komponentlarni sotuvchidan sotib oladi va ularni to'g'ridan-to'g'ri subpudratchi kompaniyaga yetkazib beradi. Bu ish oqimi `subcontracting/subcontracting_dropship` hujjatlashtirishda bayon etilgan.

Subpudratchi komponentlarni qanday olishidan tashqari, mahsulot nima uchun subkontrakt qilinayotgani, shuningdek mahsulotlar subpudratchi tomonidan ishlab chiqarilgandan keyin nima bo'lishini ham hisobga olish zarur.

Mahsulot nima uchun subkontrakt qilinayotgani nuqtai nazaridan, ikkita asosiy sabab bor: mijozning buyurtmasini bajarish yoki qo'ldagi zaxira miqdorini to'ldirish.

Mahsulotlar ishlab chiqarilgandan keyin nima bo'lishi nuqtai nazaridan, ular yo shartnoma tuzuvchi kompaniyaga yetkazib berilishi yoki to'g'ridan-to'g'ri yakuniy mijozga yetkazib berilishi mumkin.

Yuqorida tavsiflangan uchta subkontrakt ish oqimining har biri ushbu imkoniyatlarning istalgan birini amalga oshirish uchun sozlanishi mumkin va buning usullari tegishli hujjatlashtirishda bayon etilgan.

## Subkontrakt qilingan mahsulot baholash

Subkontrakt qilingan mahsulotning baholash bir nechta turli o'zgaruvchilardan bog'liq:

- Agar shartnoma tuzuvchi kompaniya tomonidan taqdim etilgan bo'lsa, zarur komponentlar narxi; bundan keyin [C] deb ataladi.
- Subkontrakt qilingan mahsulotni ishlab chiqarish xizmati uchun subpudratchi kompaniyaga to'lanadigan narx; bundan keyin [M] deb ataladi.
- Komponentlarni subpudratchi kompaniyaga yuborish va ularni shartnoma tuzuvchi kompaniyaga qaytarib yuborish narxi; bundan keyin [S] deb ataladi.
- Agar komponentlar subpudratchi tomonidan yakuniy mijozga yuborilsa, to'g'ridan-to'g'ri yetkazib berish narxi; bundan keyin [D] deb ataladi.
- Import soliqlarini kabi boshqa bog'liq xarajatlar; bundan keyin [x] deb ataladi.

Shuning uchun, subkontrakt qilingan mahsulotning umumiy baholash ([P]) quyidagi tenglama bilan ifodalanishi mumkin:

$$P = C + M + S + D + x$$

Shuni ta'kidlash kerakki, har bir subkontrakt qilingan mahsulot baholash ushbu o'zgaruvchilarning barchasini o'z ichiga olmaydi. Masalan, agar mahsulot yakuniy mijozga to'g'ridan-to'g'ri yetkazib berilmasa, to'g'ridan-to'g'ri yetkazib berish narxini hisobga olish shart emas.

::: toctree
subcontracting/subcontracting_basic
subcontracting/basic_subcontracting_lead_times
subcontracting/subcontracting_resupply
subcontracting/resupply_subcontracting_lead_times
subcontracting/subcontracting_dropship
subcontracting/dropship_subcontracting_lead_times
:::