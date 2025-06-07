# Savdo taklifnomalari

*Savdo taklifnomasi* yoki quote — bu mijozga yuboriladigan hujjat bo‘lib, unda mahsulot va xizmatlar uchun taxminiy
narxlar hamda shartlar bayon qilinadi. Agar mijoz taklifnomani qabul qilsa, u *savdo buyurtmasi*ga aylantiriladi. Bu esa
yetkazib berish va hisob-faktura chiqarishdan oldingi yakuniy kelishuv hisoblanadi.

## Savdo jarayoni sharhi

Taklifnomalar mijoz bilan munosabatlarning turli bosqichlarini — dastlabki qiziqishdan tortib to to‘lovgacha —
bog‘lovchi kengroq savdo jarayonining bir qismidir.

Odatdagi savdo jarayoni quyidagi bosqichlarni o‘z ichiga oladi:

1. *Taklifnoma* — Mijozga mahsulot tafsilotlari va narxlari ko‘rsatilgan tijorat taklifi yuboriladi.
2. *Savdo buyurtmasi* — Mijoz taklifnomani qabul qilgach, sotuv tasdiqlanadi va avtomatik savdo buyurtmasi yaratiladi.
3. *Yetkazib berish* (agar mavjud bo‘lsa) — Mahsulotlar yuboriladi yoki xizmatlar ko‘rsatiladi.
4. *Hisob-faktura* — Savdo buyurtmasi yoki yetkazilgan mahsulot/xizmatlar asosida yakuniy hisob-faktura chiqariladi.
5. *To‘lov* — Mijoz hisob-fakturani to‘laydi va savdo sikli yakunlanadi.

Ushbu jarayon korxonalarga savdoning butun hayotiy siklini kuzatishda yordam beradi va barcha ilovalarda ma’lumotlarning
uzluksizligini ta’minlaydi.

Odoo’da taklifnomalar **Savdo** ilovasida yaratiladi va sozlanadi. Ular quyidagi boshqa ilovalardan ham avtomatik
yaratilishi mumkin:

- **CRM**:  
  Potensial bitimlarni kuzatish uchun `imkoniyatlarni taklifnomaga aylantiring`.

- **Yordam markazi (Helpdesk)**:  
  Pullik xizmat yoki mahsulot taklif qilishda `chiptalardan taklifnomalar yarating`.

- **Obunalar (Subscriptions)**:  
  Avtomatik hisob-faktura jarayonini boshlashdan oldin `takrorlanuvchi xizmatlarni taklif qiling`.

## Biznes kelishuvlarida savdo taklifnomalari

Savdo taklifnomalari savdo jarayonida muhim bosqich hisoblanadi. Ular mijozning mahsulot va xizmatlarga bo‘lgan
dastlabki qiziqishidan boshlab, yakuniy to‘lov va yetkazib berish bo‘yicha kelishuvgacha bo‘lgan oraliqni to‘ldiradi.
Taklifnomalar narx borasida shaffoflikni ta’minlab, ikki tomon uchun muzokaralar olib borish va kelishuvdan oldin
shartlarni aniqlashtirish imkonini beradi.

Savdo taklifnomalari biznes bitimlarda quyidagi jihatlar bilan muhim rol o‘ynaydi:

- Sotilayotgan mahsulot yoki xizmat doirasini va narxini aniqlab beradi
- Narx, yetkazib berish, soliq va to‘lov shartlarini oldindan belgilaydi
- Bitimni rasmiylashtirishdan oldin muzokara olib borish imkonini beruvchi hujjatli bosqichni yaratadi

## Savdo taklifnomasining asosiy tarkibiy qismlari

Yaxshi tuzilgan savdo taklifnomasi quyidagi elementlarni o‘z ichiga oladi:

- **Taklifnoma raqami va sanasi**: Taklifnomani kuzatish va havola qilish uchun noyob identifikator. Shuningdek,
  `berilgan va amal qilish sanalari` ham ko‘rsatiladi. Odoo **Sales** ilovasida taklifnoma raqami tasdiqlangandan so‘ng,
  belgilangan nomlash tartibi asosida avtomatik belgilanadi.

- **Mijoz ma’lumotlari**: Mijozning ismi, aloqa ma’lumotlari hamda `hisob-faktura va yetkazib berish manzili`.

- **Mahsulot va xizmatlar**: Xarid qilinadigan mahsulotlarning ro‘yxati, miqdori, texnik tavsiflari (zarur bo‘lsa) va
  birlik narxi bilan birga.

- **To‘lov shartlari va `narxlar ro‘yxati`**: Ushbu savdo taklifnomasiga tegishli to‘lov va narx siyosati bo‘yicha
  kelishuvlar.

- **Maxsus narxlar**: Ixtiyoriy `chegirmalar va aksiyalar` orqali mahsulot qatorlarini yangilash yoki sozlash mumkin.

- **Umumiy qiymat va valyuta**: Mahsulot/xizmat narxi, yetkazib berish haqi va tegishli soliqlarni o‘z ichiga olgan
  umumiy qiymat.

Odoo’ning **Sales** ilovasida taklifnomalar quyidagi kabi qo‘shimcha ma’lumot va sozlamalarni ham o‘z ichiga olishi
mumkin:

- `Taklifnoma shablonlari`
- `Obuna rejasi`
- `Savdo guruhining yo‘naltiruvchi ismi`

![Odoo **Sales** ilovasida hali tasdiqlanmagan savdo taklifnomasi.](sales_quotations/sales-quotation.png)
