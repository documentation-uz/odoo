# Tijorat takliflari shablonlari

Odoo'ning **Sales** (Savdo) ilovasida ko‘p takrorlanadigan mahsulotlar yoki xizmatlar uchun qayta foydalaniladigan taklif (quotation) shablonlarini yaratish mumkin.

Bu shablonlar yordamida takliflar mijozlarga tezroq yuboriladi — har safar yangi taklif yaratishning hojati qolmaydi.

## Sozlash

Taklif shablonlaridan foydalanish uchun avvalo uni yoqish kerak. Buning uchun quyidagi yo‘ldan boring: `Sales > Configuration > Settings` va `Quotations & Orders` bo‘limiga tushing.

U yerda `Quotation Templates` (Taklif shablonlari) belgisini yoqing. Shundan so‘ng `Default Template` (Andoza shablon) nomli yangi maydon paydo bo‘ladi. Bu yerda sukut bo‘yicha ishlatiladigan taklif shabloni tanlanadi.

Shablonlar yoqilgach, `Quotation Templates` sahifasiga havola paydo bo‘ladi. Ushbu havola orqali mavjud shablonlarni yaratish, ko‘rish va tahrirlash mumkin.

E'tibor bering, `Settings` sahifasidagi o‘zgarishlarni saqlashni unutmang — buning uchun `Save` tugmasini bosing.

## Taklif shabloni yaratish

Taklif shablonini yaratish uchun:
- `Settings` sahifasidagi `Quotation Templates` havolasini bosing yoki
- `Sales > Configuration > Quotation Templates` yo‘nalishiga o‘ting.

Yangi shablon yaratish uchun sahifaning yuqori chap burchagidagi `New` tugmasini bosing.

### Asosiy maydonlar:

- `Quotation Template`: Shablon nomi.
- `Quotation Validity`: Shablon nechta kun amal qilishini ko‘rsatadi (`0` — cheksiz amal qilish).
- `Confirmation Mail`: Buyurtma tasdiqlanganda yuboriladigan email shabloni.

**Maslahat**: `Confirmation Mail` maydonida yangi email shablon yaratish uchun yangi nom yozib `Create` yoki `Create and edit...` tanlang.

Agar kompaniyada ko‘p filial (multi-company) mavjud bo‘lsa, `Company` maydonida shablon qaysi kompaniyaga tegishli ekanini belgilang.

Agar `Invoicing Journal` belgilanmasa, sukut bo‘yicha eng past ketma-ketlikdagi (sequence) jurnal tanlanadi.

Agar `Online Signature` va/yoki `Online Payment` funksiyalari yoqilgan bo‘lsa, bu variantlar ham shablon formasida ko‘rinadi.

- `Online Signature`: Mijozdan onlayn imzo talab qilinadi.
- `Online Payment`: Mijozdan onlayn to‘lov talab qilinadi (foiz miqdori kiritish mumkin).

Har ikkisi bir vaqtda yoqilsa, mijoz ham imzo, ham to‘lov kiritishi kerak bo‘ladi.

- `Recurring Plan`: Agar bu shablon obuna asosida bo‘lsa, qancha muddatda (oylik, choraklik) takrorlanishini belgilaydi.

## Lines (Qatorlar) bo‘limi

Bu bo‘limda mahsulotlar, bo‘limlar va eslatmalar qo‘shiladi.

- `Add a product`: Mahsulot qo‘shish
- `Add a section`: Qatorlarni tartiblash uchun sarlavha
- `Add a note`: Mijoz uchun eslatma (kafolat, shartlar, va h.k.)

Mahsulotni qo‘shishda sukut bo‘yicha `Quantity` = 1 bo‘ladi, lekin uni o‘zgartirish mumkin.

**Maslahat**: `Event` so‘zini yozib, tadbirga oid mahsulotlar (masalan, stendlar) ham qo‘shish mumkin.

## Optional Products (Qo‘shimcha mahsulotlar)

Bu bo‘limda mijozga asosiy mahsulot bilan birga taklif etiladigan qo‘shimcha mahsulotlar belgilanadi (kross-sotuv).

**Misol**: Avtomobil sotib olayotgan mijozga massajli o‘rindiqlarni taklif qilish.

`Add a line` tugmasi orqali mahsulot tanlab qo‘shiladi. Bu mahsulotlar savdo hujjatining pastki qismida ko‘rinadi.

Qo‘shimcha mahsulotlar majburiy emas.

## Terms & Conditions (Shartlar)

Bu bo‘limda shartlar va qoidalarni matn ko‘rinishida yozish mumkin.

Shartlar majburiy emas, lekin mijozni ogohlantirish uchun foydali bo‘lishi mumkin.

## Taklif shablonlaridan foydalanish

Yangi taklif yaratishda (`Sales > New`) `Quotation Template` maydonidan kerakli shablonni tanlang.

**Maslahat**: `Preview` tugmasi orqali mijoz ko‘radigan ko‘rinishni oldindan ko‘rish mumkin.

Barcha o‘zgarishlar kiritilgach, `Save` tugmasini bosing.

## Ko‘p sonli takliflarni bekor qilish

`Sales > Orders > Quotations` sahifasida kerakli takliflarni tanlab (`checkbox`) belgilang.

`Actions` menyusidan `Cancel quotations` ni tanlang.

Bu harakat tasdiqlanishi uchun `Cancel quotations` tugmasi bilan pop-up oynada tasdiqlanadi.

**Eslatma**: Agar taklif asosida obuna boshlangan bo‘lsa va unga hisob-faktura yaratilgan bo‘lsa, bekor qilib bo‘lmaydi.

## Qo‘shimcha manbalar

- [Imzo talab qilish](get_signature_to_validate.md)
- [To‘lov talab qilish](get_paid_to_validate.md)