(() => {
  'use strict';

  const WHATSAPP_NUMBER = '967782021367';
  const CONTACT_PHONE = '+967784342461';
  const EMAIL = 'bsmtktab1@gmail.com';

  const services = {
    1: {
      title: 'نسخ المخطوطات ورقمنتها', category: 'المخطوطات والنصوص',
      description: 'تحويل المخطوطات والمواد المكتوبة بخط اليد إلى نصوص رقمية قابلة للتحرير، مع مراجعة النصوص وضبطها وتنسيقها باحترافية، بما يحافظ على محتواها ويسهّل التعامل معها والاستفادة منها.',
      includes: ['قراءة النصوص المكتوبة بخط اليد ونقلها إلى ملفات رقمية.', 'مراجعة النص المنقول وتصحيح أخطاء النقل الظاهرة.', 'تنظيم الفقرات والعناوين وتقسيم النص.', 'ضبط التنسيق وعلامات الترقيم وفق طبيعة المادة.', 'إعداد الملف بصيغة مناسبة للتحرير أو الطباعة.'],
      output: 'ملف رقمي منسق وقابل للتحرير مثل Word أو PDF.',
      keywords: ['مخطوط','مخطوطة','مخطوطات','خط اليد','مكتوب بخط اليد','رقمنة مخطوط','نسخ مخطوط','تحويل المخطوط','اوراق قديمة','أوراق قديمة']
    },
    2: {
      title: 'تفريغ التسجيلات الصوتية', category: 'المخطوطات والنصوص',
      description: 'تحويل التسجيلات مثل المحاضرات والدروس والمقابلات واللقاءات إلى نصوص مكتوبة ومنظمة، مع مراجعة التفريغ وتنسيقه بما يجعل المحتوى واضحاً وسهل القراءة والاستخدام.',
      includes: ['الاستماع إلى التسجيل وتفريغ محتواه.', 'تنظيم الكلام والفقرات بحسب تسلسل المحتوى.', 'مراجعة النص ومطابقته للتسجيل.', 'إضافة علامات الترقيم وتصحيح الأخطاء الكتابية.', 'تنسيق النص الناتج.'],
      output: 'نص مكتوب ومنسق بصيغة Word أو PDF.',
      keywords: ['تفريغ','تفريغ صوتي','تسجيل صوتي','تسجيلات','صوت','محاضرة مسجلة','محاضرات مسجلة','درس مسجل','مقابلة مسجلة','ملف صوت','تسجيل']
    },
    3: {
      title: 'تنسيق المستندات', category: 'المخطوطات والنصوص',
      description: 'تنسيق المستندات والملفات بما يتناسب مع طبيعتها وغرضها، وضبط العناصر والمحتويات لتظهر بصورة منظمة وواضحة.',
      includes: ['تنسيق ملفات Word والمستندات النصية.', 'ضبط الخطوط والأحجام والهوامش والمسافات.', 'تنسيق العناوين والفقرات والقوائم والجداول.', 'تنظيم الترويسات والتذييلات وترقيم الصفحات.', 'إعداد النماذج والتقارير والمراسلات.'],
      output: 'مستند منظم ومنسق وفق الغرض المطلوب.',
      keywords: ['تنسيق مستند','تنسيق ملف','ملف وورد','وورد','word','مستند','مستندات','تقرير','نماذج','تنسيق تقرير','تنسيق ملفات']
    },
    4: {
      title: 'تنسيق الكتب وإخراجها', category: 'إنتاج الكتب والنشر',
      description: 'تنسيق الكتب والمخطوطات للإنتاج والنشر، وتنسيق النصوص وبناء الصفحات وضبط العناصر الطباعية وتجهيز الكتاب للطباعة أو النشر الإلكتروني.',
      includes: ['تنسيق النصوص والفصول والعناوين.', 'تصميم الصفحات الداخلية.', 'تنظيم الفهارس والحواشي والهوامش.', 'تنسيق الجداول والصور والترقيم والرؤوس والتذييلات.', 'إعداد الصفحات الافتتاحية والختامية وتجهيز الكتاب.'],
      output: 'كتاب مكتمل الإخراج الداخلي وجاهز للطباعة أو النشر الإلكتروني.',
      keywords: ['تنسيق كتاب','تنسيق الكتب','إخراج كتاب','اخراج كتاب','إخراج الكتب','كتاب للطباعة','كتاب للنشر','صفحات كتاب','إعداد كتاب','اعداد كتاب','تنضيد كتاب','تنسيق رواية']
    },
    5: {
      title: 'تطوير الكتب وإعادة إخراجها', category: 'إنتاج الكتب والنشر',
      description: 'تجديد الكتب والإصدارات السابقة وتطوير مظهرها الداخلي، ومعالجة مشكلات التنسيق والإخراج وتحسين ترتيب المحتوى مع المحافظة على المضمون.',
      includes: ['مراجعة الإخراج الحالي وتحديد جوانب التحسين.', 'إعادة تنسيق الصفحات والفصول.', 'تحسين توزيع النصوص والصور والجداول.', 'تطوير الفهارس والحواشي والعناصر الطباعية.', 'تحديث الإخراج البصري وتجهيز النسخة المطورة.'],
      output: 'نسخة مطورة من الكتاب بإخراج داخلي محسّن.',
      keywords: ['تطوير كتاب','تطوير الكتب','إعادة إخراج','اعادة اخراج','تحديث كتاب','تجديد كتاب','تحسين كتاب','كتاب قديم','تعديل إخراج','تعديل اخراج']
    },
    6: {
      title: 'تصميم أغلفة الكتب', category: 'إنتاج الكتب والنشر',
      description: 'تصميم أغلفة تعبر عن موضوع الكتاب ومضمونه وتمنحه حضوراً بصرياً مناسباً، مع إعداد التصميم وفق متطلبات الطباعة أو الاستخدام الرقمي.',
      includes: ['دراسة موضوع الكتاب والجمهور المستهدف.', 'ابتكار الفكرة البصرية المناسبة.', 'تصميم الغلاف الأمامي والخلفي والكعب عند الحاجة.', 'تنسيق العنوان واسم المؤلف والعناصر النصية.', 'إعداد المقاسات الطباعية ونسخة رقمية للعرض والترويج.'],
      output: 'غلاف جاهز للطباعة أو الاستخدام الرقمي.',
      keywords: ['غلاف','أغلفة','اغلفة','غلاف كتاب','تصميم غلاف','غلاف رواية','كفر كتاب','cover','تصميم واجهة كتاب']
    },
    7: {
      title: 'تنسيق البحوث والرسائل الجامعية والمجلات', category: 'الخدمات الأكاديمية والبحثية',
      description: 'تنسيق البحوث والرسائل والأطروحات والمجلات وفق المعايير الأكاديمية المعتمدة لدى الجامعات والجهات الناشرة.',
      includes: ['تنسيق البحوث والرسائل والأطروحات.', 'ضبط العناوين والهوامش والحواشي والإحالات.', 'تنظيم الفهارس والجداول والأشكال والملاحق.', 'ضبط ترقيم الصفحات والفصول.', 'تنسيق المجلات والدوريات وتجهيز الملفات للتقديم أو النشر.'],
      output: 'عمل منسق وجاهز للتقديم أو النشر من حيث الإخراج.',
      keywords: ['بحث جامعي','بحث','بحوث','رسالة جامعية','رسالة ماجستير','ماجستير','دكتوراه','أطروحة','اطروحة','مجلة علمية','مجلات','تنسيق بحث','تنسيق الرسالة','بحث أكاديمي','بحث اكاديمي']
    },
    8: {
      title: 'المراجعة العلمية واللغوية والتوثيق', category: 'الخدمات الأكاديمية والبحثية',
      description: 'مراجعة الأعمال من حيث سلامة المحتوى واتساقه، وسلامة الصياغة اللغوية ودقة الإحالات والمراجع وتوحيد أسلوب التوثيق.',
      includes: ['مراجعة وضوح العرض والترابط والاتساق.', 'تنظيم الأفكار والتنبيه إلى مواضع تحتاج استكمالاً.', 'المراجعة اللغوية والنحوية والإملائية.', 'مراجعة الاقتباسات والإحالات وقوائم المصادر والمراجع.', 'توحيد التوثيق وفق النمط أو المتطلبات المحددة.'],
      output: 'نسخة مراجعة ومنقحة مع التنبيه إلى المواضع التي تتطلب مراجعة الباحث.',
      keywords: ['مراجعة علمية','مراجعة لغوية','مراجعة','مراجعته','تدقيق لغوي','تدقيق','مراجعة بحث','مراجعة رسالة','مراجع','مصادر ومراجع','توثيق','التوثيق','ضبط المراجع','تصحيح لغوي','تدقيق إملائي','مراجعة المحتوى']
    },
    9: {
      title: 'تصميم المواد المعرفية والتعليمية', category: 'التصميم والحلول الرقمية',
      description: 'إعداد وتصميم المواد المعرفية والتعليمية بمختلف أشكالها، وتحويل المعلومات والمحتوى إلى مواد بصرية منظمة وجذابة تساعد على توضيح الأفكار وتيسير الفهم وتعزيز الاستفادة.',
      includes: ['إعداد العروض التقديمية.', 'تصميم الملخصات والخرائط الذهنية والإنفوجرافيك.', 'إعداد الأدلة والكتيبات والمواد الإرشادية.', 'تصميم الوسائل التعليمية.', 'تنظيم المعلومات وتحويلها إلى محتوى بصري.'],
      output: 'مواد معرفية وتعليمية جاهزة للعرض أو النشر أو الطباعة.',
      keywords: ['مواد تعليمية','مادة تعليمية','محتوى تعليمي','عرض تقديمي','بوربوينت','باوربوينت','ملخص','ملخصات','خريطة ذهنية','خرائط ذهنية','انفوجرافيك','إنفوجرافيك','دليل تعليمي','كتيب','وسائل تعليمية']
    },
    10: {
      title: 'التصميم الجرافيكي', category: 'التصميم والحلول الرقمية',
      description: 'تصميم وإخراج المواد البصرية والتعريفية والعلمية والتعليمية، وما يرتبط بها من هويات ومنشورات وعروض ومطبوعات، بما يلائم طبيعة المحتوى وأهدافه، إلى جانب مختلف الاحتياجات التصميمية للأفراد والمؤسسات.',
      includes: ['تصميم الهويات والعناصر البصرية.', 'تصميم المنشورات والإعلانات والمواد الترويجية.', 'إعداد المطبوعات والملفات التعريفية.', 'تصميم أغلفة الإصدارات والمواد الإعلامية.', 'إعداد التصاميم للنشر الرقمي والطباعة.'],
      output: 'تصاميم جاهزة بالصيغة والمقاسات المناسبة للاستخدام.',
      keywords: ['تصميم جرافيك','جرافيك','هوية بصرية','هوية','شعار','منشور','منشورات','اعلان','إعلان','بوستر','ملصق','مطبوعات','تصميم اعلان','تصميم إعلان','تصميم سوشيال','تصميم سوشيال ميديا']
    },
    11: {
      title: 'تصميم وتطوير المواقع والتطبيقات', category: 'التصميم والحلول الرقمية',
      description: 'تصميم وتطوير المواقع الإلكترونية والتطبيقات لتقديم المحتوى والمواد التعريفية والعلمية والتعليمية وإتاحة الخدمات والمشروعات عبر الوسائط الرقمية، بدءاً من تحديد المتطلبات وتصميم الواجهات وصولاً إلى البرمجة والاختبار والتنفيذ والتسليم.',
      includes: ['دراسة الفكرة وتحديد المتطلبات.', 'تخطيط البنية وتجربة الاستخدام.', 'تصميم الواجهات المناسبة للهواتف والحواسيب.', 'برمجة الوظائف وأنظمة إدارة المحتوى بحسب النطاق.', 'اختبار الموقع أو التطبيق ومعالجة الأخطاء والتجهيز للإطلاق.'],
      output: 'موقع أو تطبيق مكتمل التنفيذ وفق المواصفات المتفق عليها.',
      keywords: ['موقع','مواقع','موقع إلكتروني','موقع الكتروني','ويب','تطبيق','تطبيقات','برمجة','تطوير موقع','تصميم موقع','متجر إلكتروني','متجر الكتروني','منصة إلكترونية','منصة الكترونية','موقع انترنت','موقع انترنيت']
    },
    other: {
      title: 'طلب أو مشروع غير مدرج ضمن القائمة', category: 'احتياج خاص',
      description: 'طلب يحتاج إلى فهم ودراسة بحسب طبيعته ومتطلباته.',
      includes: ['فهم وصف المشروع واحتياجه.', 'تحديد النتيجة أو المخرج المتوقع.', 'تسجيل المتطلبات والملاحظات الأساسية لعرضها على المنصة.'],
      output: 'وصف منظم للطلب لتتمكن المنصة من دراسته والرد بشأن إمكانية تنفيذه.',
      keywords: []
    }
  };

  const questionSets = {
    1: [
      {label:'طبيعة المادة',text:'هل المادة مخطوط كامل أم صفحات متفرقة أو أوراق متنوعة؟',choices:['مخطوط كامل','صفحات متفرقة','أوراق ومواد متنوعة']},
      {label:'وضوح النص',text:'كيف تبدو حالة الخط في المادة؟',choices:['واضح ومقروء غالباً','متفاوت الوضوح','توجد مواضع صعبة أو مطموسة']},
      {label:'صيغة التسليم',text:'ما الصيغة التي تفضل استلام النص بها؟',choices:['Word قابل للتحرير','Word وPDF','PDF فقط','أحدد ذلك لاحقاً'],optional:true}
    ],
    2: [
      {label:'نوع التسجيل ومدته',text:'ما نوع التسجيل وما مدته التقريبية؟ مثال: محاضرة مدتها ساعة أو عدة لقاءات.',hint:'اكتب نوع التسجيل ومدته التقريبية.'},
      {label:'اللغة والمتحدثون',text:'ما لغة التسجيل؟ وهل يتحدث فيه شخص واحد أم عدة أشخاص؟',hint:'مثال: العربية، متحدث واحد.'},
      {label:'طريقة التفريغ',text:'ما طبيعة النص الذي تريده؟',choices:['تفريغ حرفي كما ورد','نص منقح ومنظم مع الحفاظ على المعنى','تفريغ مع تقسيم المتحدثين','أحتاج إلى توجيه'],optional:true}
    ],
    3: [
      {label:'نوع المستند',text:'ما نوع المستند والغرض من استخدامه؟',hint:'مثال: تقرير، ملف إداري، نموذج، مذكرة...'},
      {label:'المواصفات',text:'هل توجد مواصفات تنسيق أو نموذج تريد الالتزام به؟',choices:['نعم، توجد مواصفات أو نموذج','لا، أحتاج تنسيقاً مناسباً','لدي تنسيق حالي يحتاج إلى تحسين']},
      {label:'حجم المستند',text:'ما حجم المستند تقريباً؟ وهل يحتوي على جداول أو صور أو عناصر خاصة؟',optional:true}
    ],
    4: [
      {label:'بيانات الكتاب',text:'ما عنوان الكتاب وموضوعه؟',hint:'يمكنك ذكر عنوان مؤقت إن لم يكن نهائياً.'},
      {label:'جاهزية المحتوى',text:'هل نص الكتاب مكتمل ومراجع؟ وما عدد صفحاته التقريبي؟',choices:['المحتوى مكتمل','المحتوى يحتاج إلى استكمال','لدي نسخة سابقة تحتاج إلى تنسيق']},
      {label:'جهة الاستخدام',text:'هل تريد تجهيز الكتاب للطباعة أم للنشر الإلكتروني أم لكليهما؟',choices:['للطباعة','للنشر الإلكتروني','للطباعة والنشر الإلكتروني','لم أحدد بعد']}
    ],
    5: [
      {label:'النسخة الحالية',text:'هل لديك نسخة سابقة من الكتاب؟ وما صيغتها الحالية؟',hint:'مثال: PDF مطبوع، Word، أو نسخة ورقية.'},
      {label:'مجالات التطوير',text:'ما الجوانب التي ترغب في تطويرها؟',choices:['تحسين تنسيق الصفحات والخطوط','إعادة تنظيم الفصول والعناوين','تحسين الفهارس والجداول والصور','إعادة إخراج الكتاب بصرياً بالكامل','أكثر من جانب مما سبق']},
      {label:'الاتجاه المطلوب',text:'هل تفضل المحافظة على النمط الحالي مع تحسينه، أم اعتماد إخراج بصري جديد؟',choices:['تحسين النمط الحالي','إخراج جديد','أحتاج إلى اقتراح مناسب'],optional:true}
    ],
    6: [
      {label:'موضوع الكتاب',text:'ما عنوان الكتاب وموضوعه؟ ومن الجمهور المستهدف؟',hint:'اذكر العنوان والموضوع والفئة التي سيُوجّه إليها.'},
      {label:'التصور البصري',text:'هل لديك تصور بصري أو ألوان أو أغلفة مرجعية تفضلها؟',choices:['لدي تصور ومراجع','لدي ألوان محددة فقط','أترك ابتكار الفكرة للمصمم']},
      {label:'نوع الغلاف',text:'ما نوع الغلاف المطلوب؟',choices:['غلاف كامل للطباعة (أمامي وخلفي وكعب)','واجهة أمامية للاستخدام الرقمي','النوعان معاً','أحتاج إلى تحديد ذلك لاحقاً']}
    ],
    7: [
      {label:'نوع العمل والتخصص',text:'ما نوع العمل الأكاديمي وتخصصه؟',hint:'مثال: بحث تخرج في الإدارة، رسالة ماجستير في الشريعة...'},
      {label:'دليل الجامعة',text:'هل تتوفر لائحة الجامعة أو نموذج معتمد للتنسيق؟',choices:['نعم، لدي دليل أو نموذج','لدي تعليمات مكتوبة','لا، أحتاج إلى تنسيق أكاديمي مناسب']},
      {label:'المتطلبات الخاصة',text:'هل توجد متطلبات محددة للفهارس أو الحواشي أو الجداول أو التوثيق؟',optional:true}
    ],
    8: [
      {label:'نوع المراجعة',text:'ما نوع المراجعة المطلوبة؟',choices:['مراجعة لغوية وإملائية','مراجعة علمية للمحتوى','مراجعة التوثيق والمراجع','مراجعة شاملة لجميع الجوانب']},
      {label:'طبيعة المحتوى',text:'ما طبيعة العمل ومجاله العلمي أو المعرفي؟',hint:'مثال: بحث فقهي، دراسة تربوية، كتاب معرفي...'},
      {label:'نمط التوثيق',text:'هل يوجد نمط توثيق أو دليل أكاديمي يجب الالتزام به؟',choices:['APA','شيكاغو','نمط الجامعة أو الجهة','لا يوجد نمط محدد','نمط آخر'],optional:true}
    ],
    9: [
      {label:'نوع المادة',text:'ما نوع المادة المعرفية أو التعليمية التي تريد إعدادها؟',choices:['عرض تقديمي','ملخص أو خريطة ذهنية','إنفوجرافيك','دليل أو كتيب','وسيلة تعليمية','نوع آخر']},
      {label:'الفئة المستهدفة',text:'من الفئة المستهدفة بالمادة؟',hint:'مثال: طلاب جامعة، معلمون، جمهور عام، موظفون...'},
      {label:'صيغة الإخراج',text:'كيف ستستخدم المادة؟',choices:['عرض على الشاشة','طباعة','نشر عبر وسائل التواصل','أكثر من استخدام']}
    ],
    10: [
      {label:'نوع التصميم',text:'ما نوع التصميم الذي تحتاج إليه؟',choices:['هوية بصرية','منشورات وإعلانات','مطبوعات وملفات تعريفية','تصميم غلاف أو مادة إعلامية','تصميمات متعددة']},
      {label:'الغرض والاستخدام',text:'ما الغرض من التصميم وأين سيُستخدم؟',hint:'مثال: إعلان لمنصة، منشور توعوي، مطبوعات لمؤسسة...'},
      {label:'المحتوى والهوية',text:'هل تتوفر هوية بصرية أو نصوص أو صور تريد تضمينها؟',choices:['نعم، جميع المواد متوفرة','بعض المواد متوفرة','أحتاج إلى المساعدة في تجهيز المحتوى'],optional:true}
    ],
    11: [
      {label:'فكرة المشروع',text:'ما فكرة الموقع أو التطبيق؟ وما الغرض الأساسي منه؟',hint:'اشرح الفكرة باختصار وبالطريقة التي تناسبك.'},
      {label:'الوظائف المطلوبة',text:'ما أهم الوظائف التي تريد أن يتيحها الموقع أو التطبيق؟',hint:'مثال: عرض معلومات، استقبال طلبات، تسجيل مستخدمين، متجر، حجز...' },
      {label:'مواد ومراجع المشروع',text:'هل تتوفر هوية بصرية أو محتوى أو أمثلة لمواقع قريبة من فكرتك؟',choices:['نعم، تتوفر مواد ومراجع','تتوفر بعض المواد','الفكرة ما زالت في بدايتها'],optional:true}
    ],
    other: [
      {label:'وصف المشروع',text:'اشرح لنا ما العمل أو المشروع الذي تحتاج إلى تنفيذه، وما المشكلة أو الحاجة التي تريد معالجتها.',hint:'اكتب الفكرة بلغتك، حتى لو لم تكن تعرف اسم الخدمة.'},
      {label:'النتيجة المتوقعة',text:'ما النتيجة أو المخرج الذي تتوقع الحصول عليه في نهاية العمل؟',hint:'مثال: ملف جاهز، محتوى منسق، منتج معرفي، تصميم أو خدمة رقمية.'},
      {label:'متطلبات إضافية',text:'هل توجد متطلبات أو مراجع أو معلومات إضافية تساعدنا على فهم المشروع؟',optional:true}
    ]
  };

  const normalize = (value) => String(value || '')
    .toLowerCase()
    .replace(/[\u064B-\u065F\u0670\u0640]/g, '')
    .replace(/[أإآ]/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ؤ/g, 'و')
    .replace(/ئ/g, 'ي')
    .replace(/[\u200f\u200e]/g, '')
    .replace(/[.,،؛:!?؟()\[\]{}«»"']/g, ' ')
    .replace(/\s+/g, ' ').trim();

  function detectServices(text) {
    const input = normalize(text);
    const ranked = [];
    for (const [id, service] of Object.entries(services)) {
      let score = 0;
      for (const keyword of service.keywords) {
        const key = normalize(keyword);
        if (!key) continue;
        if (input.includes(key)) score += Math.max(2, Math.min(9, key.length / 2));
      }
      if (score > 0) ranked.push({ id: Number(id), score });
    }
    ranked.sort((a,b) => b.score - a.score);
    if (!ranked.length) return [];
    const top = ranked[0].score;
    return ranked.filter(item => item.score >= Math.max(2.2, top * .42)).slice(0,4).map(item => item.id);
  }

  const $ = (selector, root=document) => root.querySelector(selector);
  const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
  const chatMessages = $('#chatMessages');
  const chatForm = $('#chatForm');
  const chatInput = $('#chatInput');
  const progressWrap = $('#progressWrap');
  const progressLabel = $('#progressLabel');
  const progressPercent = $('#progressPercent');
  const progressBar = $('#progressBar');

  let state;
  let toastTimer;

  function resetState() {
    state = {
      step: 'initial', selected: [], candidates: [], currentService: 0,
      questionIndex: 0, answers: {}, initialDescription: '', contact: { name: '', phone: '', notes: '' },
      editingKey: null, returnToSummary: false
    };
  }

  function escapeHTML(value) {
    return String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  }

  function scrollChatToBottom() {
    requestAnimationFrame(() => { chatMessages.scrollTop = chatMessages.scrollHeight; });
  }

  function appendMessage(text, who='assistant') {
    const row = document.createElement('div');
    row.className = `message-row ${who === 'user' ? 'user-row' : 'assistant-row'}`;
    const bubble = document.createElement('div');
    bubble.className = 'message-bubble';
    const para = document.createElement('p');
    para.textContent = text;
    bubble.appendChild(para);
    const time = document.createElement('span');
    time.className = 'message-time';
    time.textContent = who === 'user' ? 'أنت' : 'مساعد بصمة كتاب';
    bubble.appendChild(time);
    if (who !== 'user') {
      const avatar = document.createElement('div');
      avatar.className = 'message-avatar';
      avatar.textContent = 'ب';
      row.append(avatar, bubble);
    } else row.append(bubble);
    chatMessages.appendChild(row);
    scrollChatToBottom();
    return row;
  }

  function appendOptions(buttons, className='message-options') {
    const wrap = document.createElement('div');
    wrap.className = className;
    buttons.forEach(item => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = item.label;
      if (item.action) btn.dataset.action = item.action;
      if (item.id != null) btn.dataset.id = String(item.id);
      if (item.value != null) btn.dataset.value = String(item.value);
      if (item.primary) btn.classList.add('primary-option');
      if (item.selected) btn.classList.add('selected');
      wrap.appendChild(btn);
    });
    chatMessages.appendChild(wrap);
    scrollChatToBottom();
    return wrap;
  }

  function appendQuickButtons(buttons) {
    return appendOptions(buttons, 'quick-start');
  }

  function toast(text) {
    const el = $('#toast');
    el.textContent = text;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 3000);
  }

  function setInputPlaceholder(text) {
    chatInput.placeholder = text || 'اكتب إجابتك هنا...';
  }

  function updateProgress() {
    const stepLabels = {
      initial: 'وصف الاحتياج', confirm: 'تأكيد الخدمات', 'service-pick': 'اختيار الخدمات',
      questions: 'تفاصيل الخدمة', name: 'بيانات التواصل', phone: 'بيانات التواصل', notes: 'ملاحظات إضافية',
      summary: 'مراجعة الطلب', editing: 'تعديل الإجابة'
    };
    if (state.step === 'initial') {
      progressWrap.hidden = true;
      return;
    }
    progressWrap.hidden = false;
    progressLabel.textContent = stepLabels[state.step] || 'تجهيز الطلب';
    let percent = 8;
    if (state.step === 'confirm' || state.step === 'service-pick') percent = 15;
    if (state.step === 'questions') {
      const total = state.selected.reduce((sum,id) => sum + questionSets[id].length, 0);
      const completedBefore = state.selected.slice(0, state.currentService).reduce((sum,id) => sum + questionSets[id].length, 0);
      const completed = completedBefore + state.questionIndex;
      percent = 18 + Math.round((completed / Math.max(total,1)) * 54);
    }
    if (state.step === 'name') percent = 77;
    if (state.step === 'phone') percent = 83;
    if (state.step === 'notes') percent = 90;
    if (state.step === 'summary' || state.step === 'editing') percent = 100;
    progressBar.style.width = `${percent}%`;
    progressPercent.textContent = `${percent}%`;
  }

  function isBookImageAmbiguity(text) {
    const value = normalize(text);
    const mentionsBook = value.includes('كتاب') || value.includes('كتب');
    const mentionsImages = ['صور','صوره','مصوره','مصور','صور الصفحات','صور كتاب'].some(term => value.includes(normalize(term)));
    const mentionsGoal = ['اطبعه','للطباعة','جاهز','ارتب','ترتيب','اخليه'].some(term => value.includes(normalize(term)));
    return mentionsBook && mentionsImages && mentionsGoal;
  }

  function askBookImageClarification(originalText) {
    state.initialDescription = originalText;
    state.step = 'book-image-clarify';
    updateProgress();
    appendMessage('حتى لا أقترح خدمة غير مناسبة، أحتاج إلى توضيح طبيعة النسخة الموجودة لديك:');
    appendMessage('هل النص الأصلي متوفر في ملف قابل للتحرير، أم أن الموجود لديك صور لصفحات الكتاب؟');
    appendOptions([
      {label:'النص موجود في ملف Word أو ملف نصي',action:'book-as-formatted'},
      {label:'الصفحات صور فقط وأحتاج تجهيزها',action:'book-as-other'},
      {label:'الكتاب مخطوط بخط اليد',action:'book-as-manuscript'}
    ]);
    setInputPlaceholder('يمكنك توضيح حالة الكتاب أيضاً...');
  }

  function selectDetected(candidates) {
    state.candidates = candidates;
    state.step = 'confirm';
    updateProgress();
    const names = candidates.map(id => services[id].title);
    if (candidates.length === 1) {
      appendMessage(`يبدو أن احتياجك يرتبط بخدمة «${names[0]}». هل هذا ما تقصده؟`);
    } else {
      appendMessage(`من وصفك، قد تحتاج إلى أكثر من خدمة. هذه المجالات الأقرب لما ذكرته:`);
      candidates.forEach(id => appendMessage(`• ${services[id].title}`));
      appendMessage('هل تريد اعتماد هذه الخدمات المقترحة، أم تفضّل اختيار الخدمات بنفسك؟');
    }
    appendOptions([
      {label: candidates.length === 1 ? 'نعم، هذه هي الخدمة' : 'اعتماد الخدمات المقترحة', action:'confirm-detected', primary:true},
      {label:'اختيار الخدمات يدوياً', action:'manual-pick'},
      {label:'هذا ليس ما أقصده', action:'manual-pick'}
    ]);
    setInputPlaceholder('يمكنك أيضاً توضيح ما تقصده...');
  }

  function showManualServices() {
    state.step = 'service-pick';
    updateProgress();
    appendMessage('اختر خدمة واحدة أو أكثر مما يلي. يمكنك إضافة عدة خدمات إلى الطلب نفسه:');
    renderServiceChoices();
    setInputPlaceholder('اكتب اسم خدمة لإضافتها أو اشرح احتياجك...');
  }

  function renderServiceChoices() {
    chatMessages.querySelectorAll('[data-service-picker]').forEach(node => node.remove());
    const picker = document.createElement('div');
    picker.className = 'service-picker';
    picker.dataset.servicePicker = 'true';
    const choices = document.createElement('div');
    choices.className = 'message-options';
    Object.entries(services).filter(([id]) => Number.isInteger(Number(id))).forEach(([id, service]) => {
      const numericId = Number(id);
      const selected = state.selected.includes(numericId);
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = `${selected ? '✓ ' : ''}${service.title}`;
      btn.dataset.action = 'toggle-service';
      btn.dataset.id = id;
      if (selected) btn.classList.add('selected');
      choices.appendChild(btn);
    });
    const actions = document.createElement('div');
    actions.className = 'message-options';
    actions.innerHTML = '<button type="button" data-action="confirm-selected" class="primary-option">اعتماد الخدمات المختارة</button><button type="button" data-action="clear-selected">مسح الاختيار</button><button type="button" data-action="other-request">لدي طلب آخر غير مدرج</button>';
    const status = document.createElement('div');
    status.className = 'picker-status';
    status.textContent = state.selected.length ? `المحدد: ${state.selected.map(id=>services[id].title).join('، ')}` : 'لم تختر خدمة بعد. اضغط على الخدمة الأقرب لاحتياجك.';
    picker.append(choices, actions, status);
    chatMessages.appendChild(picker);
    scrollChatToBottom();
  }

  function beginQuestions() {
    chatMessages.querySelectorAll('[data-service-picker]').forEach(node => node.remove());
    if (!state.selected.length) {
      appendMessage('لم يتم اختيار خدمة بعد. اختر خدمة من القائمة حتى نبدأ في تجهيز طلبك.');
      showManualServices();
      return;
    }
    state.step = 'questions';
    state.currentService = 0;
    state.questionIndex = 0;
    appendMessage(`حسناً. سنجمع تفاصيل ${state.selected.length === 1 ? 'الخدمة المحددة' : 'الخدمات المحددة'}، ثم نعرض عليك ملخصاً للمراجعة.`);
    askCurrentQuestion();
  }

  function askCurrentQuestion() {
    updateProgress();
    const serviceId = state.selected[state.currentService];
    const list = questionSets[serviceId];
    const q = list[state.questionIndex];
    appendMessage(`خدمة: ${services[serviceId].title}\n${q.text}`);
    if (q.hint) appendMessage(`يمكنك الاسترشاد بهذا المثال: ${q.hint}`);
    if (q.choices) {
      appendOptions(q.choices.map(choice => ({label:choice,action:'answer-choice',value:choice})));
    }
    if (q.optional) appendOptions([{label:'تخطي هذا السؤال',action:'skip-question'}]);
    setInputPlaceholder('اكتب إجابتك هنا...');
  }

  function advanceQuestion(answer) {
    const serviceId = state.selected[state.currentService];
    const q = questionSets[serviceId][state.questionIndex];
    if (!answer && !q.optional) {
      appendMessage('أحتاج إلى إجابة عن هذا السؤال حتى يكون الطلب واضحاً. يمكنك كتابة «لا أعرف» إن لم تكن متأكداً.');
      return;
    }
    state.answers[`service_${serviceId}_q_${state.questionIndex}`] = answer || 'لم يحدد العميل';
    state.questionIndex += 1;
    if (state.questionIndex < questionSets[serviceId].length) {
      askCurrentQuestion();
      return;
    }
    state.currentService += 1;
    if (state.currentService < state.selected.length) {
      state.questionIndex = 0;
      appendMessage(`اكتملت التفاصيل الأولية لخدمة «${services[serviceId].title}». ننتقل الآن إلى الخدمة التالية.`);
      askCurrentQuestion();
      return;
    }
    appendMessage('اكتملت تفاصيل الخدمات. بقيت بيانات التواصل حتى تتمكن المنصة من الرد عليك.');
    state.step = 'name';
    updateProgress();
    appendMessage('ما اسمك الكريم؟');
    setInputPlaceholder('اكتب الاسم...');
  }

  function disableLatestOptions() {
    const groups = [...chatMessages.querySelectorAll('.message-options')];
    const latest = groups[groups.length - 1];
    if (latest) latest.querySelectorAll('button').forEach(button => { button.disabled = true; });
  }

  function handleUserText(rawText) {
    const text = String(rawText || '').trim();
    if (!text) return;
    if (['confirm','questions','name','phone','notes','book-image-clarify'].includes(state.step)) disableLatestOptions();
    appendMessage(text, 'user');
    const normalized = normalize(text);

    if (state.step === 'initial') {
      state.initialDescription = text;
      if (isBookImageAmbiguity(text)) { askBookImageClarification(text); return; }
      const candidates = detectServices(text);
      if (candidates.length) selectDetected(candidates);
      else {
        appendMessage('أريد التأكد من فهم احتياجك قبل اقتراح خدمة. لم أتعرف على المجال بوضوح من العبارة الحالية. يمكنك توضيح ما تريد إنجازه، أو اختيار الخدمة الأقرب من القائمة.');
        showManualServices();
      }
      return;
    }

    if (state.step === 'book-image-clarify') {
      state.initialDescription = `${state.initialDescription}؛ توضيح إضافي: ${text}`;
      appendMessage('شكراً على التوضيح. أعد عرض الخيارات المناسبة حتى نحدد المسار الأقرب.');
      appendOptions([
        {label:'النص موجود في ملف Word أو ملف نصي',action:'book-as-formatted'},
        {label:'الصفحات صور فقط وأحتاج تجهيزها',action:'book-as-other'},
        {label:'الكتاب مخطوط بخط اليد',action:'book-as-manuscript'}
      ]);
      return;
    }

    if (state.step === 'confirm') {
      if (/^(نعم|ايوه|أيوه|صحيح|تمام|موافق)(\s|$)/i.test(normalized) || normalized === 'هذا هو' || normalized === 'هي') {
        state.selected = [...state.candidates];
        beginQuestions();
        return;
      }
      const detected = detectServices(text);
      if (detected.length) {
        state.selected = [];
        state.candidates = detected;
        selectDetected(detected);
      } else {
        appendMessage('لم يتضح لي بعد ما إذا كانت الخدمة المقترحة مناسبة. يمكنك تعديل وصفك أو اختيار الخدمة يدوياً.');
        showManualServices();
      }
      return;
    }

    if (state.step === 'service-pick') {
      const detected = detectServices(text);
      if (detected.length) {
        detected.forEach(id => { if (!state.selected.includes(id)) state.selected.push(id); });
        appendMessage('أضفت الخدمات الأقرب لوصفك. يمكنك اختيار المزيد أو اعتماد القائمة الحالية.');
        renderServiceChoices();
      } else {
        appendMessage('لم أتعرف على اسم خدمة محددة من هذه العبارة. اختر المجال الأقرب من الخيارات الظاهرة، أو أعد صياغة احتياجك ببساطة.');
      }
      return;
    }

    if (state.step === 'questions') {
      advanceQuestion(text);
      return;
    }

    if (state.step === 'name') {
      if (text.length < 2) { appendMessage('يرجى كتابة الاسم بصورة أوضح.'); return; }
      state.contact.name = text;
      state.step = 'phone';
      updateProgress();
      appendMessage('ما رقم واتساب أو الهاتف الذي يمكن للمنصة التواصل معك من خلاله؟');
      setInputPlaceholder('رقم الهاتف أو واتساب...');
      return;
    }

    if (state.step === 'phone') {
      const digits = text.replace(/[^0-9]/g,'');
      if (digits.length < 6) { appendMessage('يبدو أن الرقم قصير. اكتب رقم تواصل صالحاً مع مفتاح الدولة إن أمكن.'); return; }
      state.contact.phone = text;
      state.step = 'notes';
      updateProgress();
      appendMessage('هل توجد ملاحظات أو متطلبات إضافية تريد إبلاغنا بها؟ يمكنك كتابة الملاحظات أو تخطي هذا السؤال.');
      appendOptions([{label:'لا توجد ملاحظات إضافية',action:'skip-notes'}]);
      setInputPlaceholder('أي تفاصيل إضافية (اختياري)...');
      return;
    }

    if (state.step === 'notes') {
      state.contact.notes = text;
      showSummary();
      return;
    }

    if (state.step === 'editing') {
      const key = state.editingKey;
      if (key === 'contact_name') state.contact.name = text;
      else if (key === 'contact_phone') {
        if (text.replace(/[^0-9]/g,'').length < 6) { appendMessage('رقم التواصل غير مكتمل. أعد كتابة رقم صالح.'); return; }
        state.contact.phone = text;
      }
      else if (key === 'contact_notes') state.contact.notes = text;
      else state.answers[key] = text;
      state.editingKey = null;
      state.step = 'summary';
      updateProgress();
      appendMessage('تم تحديث الإجابة. هذا ملخص الطلب بعد التعديل:');
      renderSummaryCard();
      setInputPlaceholder('يمكنك تعديل إجابة من الملخص أو إرسال الطلب...');
      return;
    }

    if (state.step === 'summary') {
      appendMessage('الطلب جاهز للمراجعة. استخدم زر «تعديل» بجوار الإجابة التي تريد تغييرها، أو اضغط «إرسال الطلب إلى واتساب» للمتابعة.');
    }
  }

  function summaryRows() {
    const rows = [];
    state.selected.forEach((id) => {
        questionSets[id].forEach((q,index) => {
        const key = `service_${id}_q_${index}`;
        rows.push({group:services[id].title,label:q.label,value:state.answers[key] || '—',key});
      });
    });
    rows.push({group:'بيانات التواصل',label:'الاسم',value:state.contact.name,key:'contact_name'});
    rows.push({group:'بيانات التواصل',label:'رقم التواصل',value:state.contact.phone,key:'contact_phone'});
    if (state.contact.notes) rows.push({group:'ملاحظات إضافية',label:'ملاحظات',value:state.contact.notes,key:'contact_notes'});
    return rows;
  }

  function renderSummaryCard() {
    chatMessages.querySelectorAll('.summary-card').forEach(node => node.remove());
    const card = document.createElement('div');
    card.className = 'summary-card';
    const head = document.createElement('div');
    head.className = 'summary-head';
    head.innerHTML = '<span>ملخص طلبك</span><small>راجع التفاصيل قبل الإرسال</small>';
    card.appendChild(head);
    const body = document.createElement('div');
    body.className = 'summary-body';
    const rows = summaryRows();
    let currentGroup = '';
    let groupEl = null;
    rows.forEach(row => {
      if (row.group !== currentGroup) {
        currentGroup = row.group;
        groupEl = document.createElement('div');
        groupEl.className = 'summary-group';
        const title = document.createElement('strong');
        title.textContent = currentGroup;
        groupEl.appendChild(title);
        body.appendChild(groupEl);
      }
      const pair = document.createElement('div');
      pair.className = 'summary-pair';
      const label = document.createElement('span'); label.textContent = row.label;
      const valueWrap = document.createElement('span');
      valueWrap.textContent = row.value;
      if (row.key) {
        const edit = document.createElement('button');
        edit.type = 'button'; edit.className = 'summary-edit'; edit.textContent = 'تعديل';
        edit.dataset.action = 'edit-field'; edit.dataset.key = row.key;
        valueWrap.appendChild(document.createTextNode(' ')); valueWrap.appendChild(edit);
      }
      pair.append(label,valueWrap); groupEl.appendChild(pair);
    });
    card.appendChild(body);
    const actions = document.createElement('div');
    actions.className = 'summary-group';
    actions.style.padding = '12px 14px';
    actions.style.borderTop = '1px solid #f0eee8';
    actions.innerHTML = `<a class="button button-primary" style="width:100%;font-size:11px;min-height:43px" href="${makeWhatsAppUrl()}" target="_blank" rel="noopener">إرسال الطلب إلى بصمة كتاب عبر واتساب <span>←</span></a><button type="button" class="summary-edit" style="margin-top:10px" data-action="restart">بدء طلب جديد</button>`;
    card.appendChild(actions);
    chatMessages.appendChild(card);
    scrollChatToBottom();
  }

  function showSummary() {
    state.step = 'summary';
    updateProgress();
    appendMessage('اكتملت البيانات الأساسية. راجع ملخص طلبك أدناه. يمكنك تعديل أي إجابة قبل الإرسال.');
    renderSummaryCard();
    appendMessage('عند الضغط على زر الإرسال سيفتح واتساب برسالة جاهزة. اضغط إرسال داخل واتساب بنفسك، ثم أرفق الملفات والمستندات في المحادثة.');
    setInputPlaceholder('يمكنك تعديل إجابة من الملخص أو بدء طلب جديد...');
  }

  function makeWhatsAppUrl() {
    const lines = [];
    lines.push('طلب خدمة جديد – منصة بصمة كتاب');
    lines.push('');
    lines.push(`اسم العميل: ${state.contact.name}`);
    lines.push(`رقم التواصل: ${state.contact.phone}`);
    if (state.initialDescription) lines.push(`وصف العميل الأولي: ${state.initialDescription}`);
    lines.push('');
    lines.push('الخدمات المطلوبة:');
    state.selected.forEach((id, idx) => {
      lines.push(`${idx+1}. ${services[id].title}`);
      questionSets[id].forEach((q, index) => {
        const value = state.answers[`service_${id}_q_${index}`];
        if (value) lines.push(`- ${q.label}: ${value}`);
      });
      lines.push('');
    });
    if (state.contact.notes) lines.push(`ملاحظات إضافية: ${state.contact.notes}`);
    lines.push('');
    lines.push('سأرفق الملفات والمستندات ذات الصلة في محادثة واتساب بعد إرسال هذا الطلب.');
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
  }

  function handleChatAction(target) {
    const action = target.dataset.action;
    if (!action) return;
    if (action === 'toggle-service' || action === 'clear-selected') { /* the picker is rebuilt after each selection */ }
    else {
      const group = target.closest('.message-options');
      if (group) group.querySelectorAll('button').forEach(button => { button.disabled = true; });
      const quickGroup = target.closest('.quick-start');
      if (quickGroup) quickGroup.querySelectorAll('button').forEach(button => { button.disabled = true; });
    }
    if (action === 'quick-text') {
      handleUserText(target.dataset.value || target.textContent);
      return;
    }
    if (action === 'other-request') {
      state.selected = ['other'];
      beginQuestions();
      return;
    }
    if (action === 'book-as-formatted') { state.selected = [4]; beginQuestions(); return; }
    if (action === 'book-as-other') { state.selected = ['other']; beginQuestions(); return; }
    if (action === 'book-as-manuscript') { state.selected = [1]; beginQuestions(); return; }
    if (action === 'confirm-detected') {
      state.selected = [...state.candidates];
      beginQuestions();
      return;
    }
    if (action === 'manual-pick') {
      state.selected = [];
      showManualServices();
      return;
    }
    if (action === 'toggle-service') {
      const id = Number(target.dataset.id);
      if (state.selected.includes(id)) state.selected = state.selected.filter(value => value !== id);
      else state.selected.push(id);
      renderServiceChoices();
      return;
    }
    if (action === 'clear-selected') {
      state.selected = [];
      renderServiceChoices();
      return;
    }
    if (action === 'confirm-selected') {
      if (!state.selected.length) { appendMessage('اختر خدمة واحدة على الأقل قبل المتابعة.'); return; }
      beginQuestions();
      return;
    }
    if (action === 'answer-choice') {
      handleUserText(target.dataset.value || target.textContent);
      return;
    }
    if (action === 'skip-question') {
      advanceQuestion('');
      return;
    }
    if (action === 'skip-notes') {
      state.contact.notes = '';
      appendMessage('لا توجد ملاحظات إضافية.', 'user');
      showSummary();
      return;
    }
    if (action === 'edit-field') {
      const key = target.dataset.key;
      state.editingKey = key;
      state.step = 'editing';
      updateProgress();
      const labels = {};
      summaryRows().forEach(row => { if (row.key) labels[row.key] = row.label; });
      appendMessage(`اكتب الإجابة الجديدة لحقل «${labels[key] || 'الإجابة'}».`);
      setInputPlaceholder('اكتب الإجابة الجديدة...');
      chatInput.focus();
      return;
    }
    if (action === 'restart') {
      startNewRequest(true);
      return;
    }
  }

  function startNewRequest(keepScroll=false) {
    resetState();
    chatMessages.innerHTML = '<div class="chat-day-divider"><span>طلب جديد</span></div>';
    appendMessage('أهلاً بك مجدداً. ما العمل الذي تحتاج إلى تنفيذه؟ اكتب وصفك بطريقتك، أو استخدم أحد الأمثلة السريعة أدناه.');
    appendQuickButtons([
      {label:'تنسيق بحث جامعي',action:'quick-text',value:'أريد تنسيق بحث جامعي ومراجعته'},
      {label:'إعداد كتاب للنشر',action:'quick-text',value:'أريد تنسيق كتاب وتجهيزه للطباعة'},
      {label:'تفريغ تسجيل صوتي',action:'quick-text',value:'أريد تفريغ تسجيل صوتي إلى نص'},
      {label:'تصميم موقع إلكتروني',action:'quick-text',value:'أحتاج تصميم موقع إلكتروني'}
    ]);
    updateProgress();
    setInputPlaceholder('اكتب احتياجك هنا...');
    if (!keepScroll) document.querySelector('#assistant').scrollIntoView({behavior:'smooth',block:'start'});
  }

  chatForm.addEventListener('submit', event => {
    event.preventDefault();
    const text = chatInput.value;
    if (!text.trim()) return;
    chatInput.value = '';
    chatInput.style.height = 'auto';
    handleUserText(text);
  });

  chatInput.addEventListener('input', () => {
    chatInput.style.height = 'auto';
    chatInput.style.height = `${Math.min(chatInput.scrollHeight,100)}px`;
  });

  chatMessages.addEventListener('click', event => {
    const actionTarget = event.target.closest('[data-action]');
    if (actionTarget) { handleChatAction(actionTarget); return; }
    const quickTarget = event.target.closest('[data-quick]');
    if (quickTarget) {
      const group = quickTarget.closest('.quick-start');
      if (group) group.querySelectorAll('button').forEach(button => { button.disabled = true; });
      handleUserText(quickTarget.dataset.quick); return;
    }
  });

  // Main navigation and mobile menu.
  const menuToggle = $('#menuToggle');
  const mobileNav = $('#mobileNav');
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    mobileNav.hidden = expanded;
  });
  $$('#mobileNav a').forEach(link => link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded','false'); mobileNav.hidden = true;
  }));

  // Service category filters.
  $$('.filter-chip').forEach(button => button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    $$('.filter-chip').forEach(chip => { chip.classList.toggle('active', chip === button); chip.setAttribute('aria-selected', chip === button ? 'true' : 'false'); });
    $$('.service-card').forEach(card => { card.hidden = filter !== 'all' && card.dataset.category !== filter; });
  }));

  // Service details dialog.
  const dialog = $('#serviceDialog');
  let openServiceId = null;
  function openServiceDialog(id) {
    const service = services[id];
    if (!service) return;
    openServiceId = Number(id);
    $('#serviceDialogContent').innerHTML = `
      <div class="dialog-content">
        <span class="section-kicker">${escapeHTML(service.category)}</span>
        <h2 id="dialogTitle">${escapeHTML(service.title)}</h2>
        <p>${escapeHTML(service.description)}</p>
        <h3>تشمل الخدمة</h3>
        <ul>${service.includes.map(item => `<li>${escapeHTML(item)}</li>`).join('')}</ul>
        <div class="dialog-output"><strong>المخرج المتوقع:</strong> ${escapeHTML(service.output)}</div>
      </div>`;
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open','');
    document.body.classList.add('dialog-open');
  }
  function closeServiceDialog() { if (dialog.open) dialog.close(); else dialog.removeAttribute('open'); document.body.classList.remove('dialog-open'); }
  $$('.service-more').forEach(button => button.addEventListener('click', () => openServiceDialog(button.dataset.openService)));
  $('#closeDialog').addEventListener('click', closeServiceDialog);
  $('#closeDialogBottom').addEventListener('click', closeServiceDialog);
  dialog.addEventListener('click', event => { if (event.target === dialog) closeServiceDialog(); });
  dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));
  $('#requestThisService').addEventListener('click', () => {
    const id = openServiceId;
    closeServiceDialog();
    startNewRequest(true);
    state.selected = [id];
    state.step = 'questions';
    state.currentService = 0;
    state.questionIndex = 0;
    appendMessage(`اخترت خدمة «${services[id].title}». سنبدأ الآن بجمع تفاصيلها.`);
    askCurrentQuestion();
    document.querySelector('#assistant').scrollIntoView({behavior:'smooth',block:'start'});
  });

  // Keep the fixed mobile call-to-action clear of the chat composer while the assistant is in view.
  if ('IntersectionObserver' in window) {
    const mobileCtaObserver = new IntersectionObserver(entries => {
      document.body.classList.toggle('assistant-active', entries.some(entry => entry.isIntersecting));
    }, { threshold: 0.12 });
    const assistantSection = document.getElementById('assistant');
    if (assistantSection) mobileCtaObserver.observe(assistantSection);
  }

  // Back to top and active section indication.
  const backToTop = $('#backToTop');
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 560);
    const sections = ['home','about','services','how','contact'];
    let active = 'home';
    for (const id of sections) {
      const section = document.getElementById(id);
      if (section && section.getBoundingClientRect().top < 150) active = id;
    }
    $$('.nav-link').forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${active}`));
  }, {passive:true});
  backToTop.addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));

  $('#year').textContent = new Date().getFullYear();
  resetState();
  updateProgress();

  // Register the lightweight offline shell when served over HTTPS or localhost.
  if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
    window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
  }
})();
