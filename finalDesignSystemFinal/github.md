repo: asamani092-ux/designSystemFinal
branch: main

## Version
current: v1.2.1
date: 2026-08-07

### v1.2.1 — مقاسات الأزرار + zaad-addons مركزي
- أزرار بعقد sm(36) / md(44) / lg(52) — إلغاء فرض min-height:44 على كل الأزرار.
- نقل `zaad-addons.css` إلى الحزمة مع تصغير Chips/Tabs/Breadcrumb في السياقات الكثيفة.
- الاستهلاك: `#v1.2.1` + استيراد `zaad-addons.css` من الحزمة وحذف النسخ المحلية.

### v1.2.0 — التوزيع المركزي للمنصات
- حزمة npm: `@zaad/design-system` من جذر المستودع (`package.json` + `package/`).
- أمر الوكيل: `AGENT_COMMAND.md` — ربط المنصات وتحسين الواجهة بالمكوّنات الجديدة.
- توافق خلفي: متغيرات `--tmkeen-*` تُشتق من توكنات نظام الزاد الموحّد.
- المنصات المستهدفة: redaPlatform / mqiasPlatform / itsalplatform / tkafulPlatform / tmkeenpPlatform.

### v1.1.0 — التغييرات
- إضافة قسم ٦·١٧: نموذج إسناد المهام، بنّاء الاستبيان + توزيع (بريد/واتساب/رابط/QR)، بوابة استقبال الطلبات مع القبول والإسناد.
- الخريطة: تكبير/تصغير + توسيع النافذة (ملء الشاشة) + مصادر بيانات متعددة المشاريع.
- ترويسة أوف-وايت بنصوص حمراء؛ شعار شفاف الخلفية.

### v1.0.0 — الأساس
- الأسس، المكوّنات، المصادقة، المكوّنات الموسّعة، الأساسية والمنصية، منشئ العرض التقديمي.

## Files
- `package/` — حزمة الاستهلاك للمنصات (tokens / components / preset / contracts)
- `AGENT_COMMAND.md` — أمر لصقه لوكيل كل منصة
- `دليل الهوية الرسمي.dc.html` — المصدر (Design Component)
- `designSystemFinal1.html` — النسخة المستقلة المُصدّرة (للنشر/الرفع)

## Distribution
```json
"@zaad/design-system": "github:asamani092-ux/designSystemFinal#v1.2.0"
```
كل منصة تعتمد الحزمة وتحذف النسخ المحلية. تحسين المكوّنات يتم هنا فقط.

## How version is stamped
رقم الإصدار يظهر في تذييل الصفحة (footer) وفي هذا الملف. عند أي تعديل لاحق: ارفع الرقم هنا وفي التذييل، وأضف سطراً تحت "التغييرات"، وأنشئ git tag `vX.Y.Z`.
