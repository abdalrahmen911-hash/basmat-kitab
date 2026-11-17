(() => {
  'use strict';
  const root = document.getElementById('requestApp');
  if (!root) return;

  const WHATSAPP = '967782021367';
  const services = [
    {id:1,group:'texts',name:'نسخ المخطوطات ورقمنتها',desc:'تحويل المواد المكتوبة بخط اليد إلى نص رقمي.'},
    {id:2,group:'texts',name:'تفريغ التسجيلات الصوتية',desc:'تحويل المحاضرات والتسجيلات إلى نصوص.'},
    {id:3,group:'texts',name:'تنسيق المستندات',desc:'تنظيم ملفات Word والمستندات.'},
    {id:4,group:'books',name:'تنسيق الكتب وإخراجها',desc:'إعداد الصفحات الداخلية للطباعة أو النشر.'},
    {id:5,group:'books',name:'تطوير الكتب وإعادة إخراجها',desc:'تحسين الإخراج ومعالجة مشكلات النسخ السابقة.'},
    {id:6,group:'books',name:'تصميم أغلفة الكتب',desc:'تصميم الغلاف وتجهيزه للاستخدام.'},
    {id:7,group:'academic',name:'تنسيق البحوث والرسائل الجامعية والمجلات',desc:'تنسيق وفق المعايير الأكاديمية المعتمدة.'},
    {id:8,group:'academic',name:'المراجعة العلمية واللغوية والتوثيق',desc:'مراجعة النص والإحالات والمراجع.'},
    {id:9,group:'digital',name:'تصميم المواد المعرفية والتعليمية',desc:'إعداد عروض وملخصات ومواد بصرية.'},
    {id:10,group:'digital',name:'التصميم الجرافيكي',desc:'الهويات والمنشورات والإعلانات والمطبوعات.'},
    {id:11,group:'digital',name:'تصميم وتطوير المواقع والتطبيقات',desc:'تصميم وبرمجة المواقع والتطبيقات.'}
  ];
  const groupNames = {texts:'النصوص والمخطوطات',books:'الكتب والنشر',academic:'الخدمات الأكاديمية',digital:'التصميم والحلول الرقمية'};
  const state = {step:1,selected:[],suggested:[],initialDescription:'',details:{},format:'لا يوجد تفضيل محدد',timing:'بحسب الاتفاق',name:'',phone:'',notes:''};
  const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const serviceKeywords = {
    1:['مخطوط','مخطوطة','مخطوطات','خط اليد','مكتوب بخط اليد','رقمنة مخطوط','نسخ مخطوط'],
    2:['تفريغ صوت','تسجيل صوت','ملف صوت','محاضرة مسجلة','درس مسجل','مقابلة مسجلة','تسجيل'],
    3:['تنسيق مستند','تنسيق ملف','ملف وورد','مستند','تقرير','نماذج','وورد'],
    4:['تنسيق كتاب','تنسيق الكتب','اخراج كتاب','إخراج كتاب','صفحات كتاب','تجهيز كتاب','كتاب للطباعة'],
    5:['تطوير كتاب','إعادة إخراج','اعادة اخراج','تجديد كتاب','تحسين إخراج كتاب','تحديث كتاب'],
    6:['غلاف كتاب','أغلفة الكتب','تصميم غلاف','غلاف رواية','غلاف'],
    7:['بحث جامعي','بحث علمي','تنسيق بحث','رسالة جامعية','رسالة ماجستير','أطروحة','اطروحة','مجلة علمية'],
    8:['مراجعة لغوية','تدقيق لغوي','مراجعة علمية','توثيق','مراجع البحث','APA','تدقيق','مراجعة بحث'],
    9:['عرض تقديمي','ملخص','خريطة ذهنية','انفوجرافيك','إنفوجرافيك','مادة تعليمية','وسيلة تعليمية'],
    10:['هوية بصرية','شعار','منشور','اعلان','إعلان','تصميم جرافيكي','تصميم جرافيك','مطبوعات'],
    11:['موقع إلكتروني','موقع الكتروني','موقع ويب','تطبيق','برمجة موقع','متجر إلكتروني','متجر الكتروني','نظام إلكتروني']
  };
  function normalizeText(value) {
    return String(value || '').toLowerCase()
      .replace(/[\u064B-\u065F\u0670\u0640]/g,'')
      .replace(/[أإآ]/g,'ا').replace(/ى/g,'ي').replace(/ؤ/g,'و').replace(/ئ/g,'ي')
      .replace(/\s+/g,' ').trim();
  }
  function suggestServices(description) {
    const text = normalizeText(description);
    if (!text) return [];
    return Object.entries(serviceKeywords).map(([id,words]) => ({
      id:Number(id),
      score:words.reduce((sum,word) => sum + (text.includes(normalizeText(word)) ? Math.max(2,normalizeText(word).length/3) : 0),0)
    })).filter(item=>item.score>0).sort((a,b)=>b.score-a.score).slice(0,4).map(item=>item.id);
  }

  const queryService = Number(new URLSearchParams(location.search).get('service'));
  if (services.some(item => item.id === queryService)) state.selected = [queryService];

  function shell(content) {
    return `
      <div class="wizard-top"><strong>تجهيز طلب الخدمة</strong><small>الخطوة <span id="stepNumber">${state.step}</span> من 3</small></div>
      <div class="wizard-progress" role="progressbar" aria-label="تقدم نموذج الطلب" aria-valuemin="1" aria-valuemax="3" aria-valuenow="${state.step}"><span style="width:${state.step/3*100}%"></span></div>
      <div class="wizard-content">${content}</div>`;
  }

  function actions(backLabel='السابق', nextLabel='متابعة') {
    return `<div class="wizard-actions">
      <button type="button" class="button button-muted" data-action="back" ${state.step===1?'disabled':''}>${backLabel}</button>
      <button type="button" class="button button-primary" data-action="next">${nextLabel} <span aria-hidden="true">←</span></button>
    </div><div class="validation-message" id="validationMessage" role="alert" hidden></div>`;
  }

  function stepOne() {
    const cards = services.map(item => `
      <label class="service-option ${state.selected.includes(item.id)?'is-selected':''}" data-service-option="${item.id}">
        <input type="checkbox" value="${item.id}" ${state.selected.includes(item.id)?'checked':''}>
        <span class="option-check" aria-hidden="true">${state.selected.includes(item.id)?'✓':''}</span>
        <span class="option-copy"><strong>${item.name}</strong><small>${groupNames[item.group]} · ${item.desc}</small></span>
      </label>`).join('');
    return shell(`
      <h2>ما الخدمات التي تحتاج إليها؟</h2>
      <p class="wizard-intro">يمكنك وصف احتياجك أولاً للحصول على اقتراحات، أو اختيار الخدمات مباشرة من القائمة.</p>
      <div class="need-assistant">
        <label for="needDescription">صف العمل الذي تحتاج إلى إنجازه</label>
        <textarea id="needDescription" placeholder="مثال: أحتاج تنسيق بحث جامعي ومراجعة المراجع، أو تحويل مخطوط إلى ملف Word..."></textarea>
        <div class="need-assistant-actions"><button type="button" class="button button-muted" data-action="suggest">اقتراح الخدمات المناسبة</button><small>الاقتراحات مبنية على كلمات مفتاحية؛ ويمكنك تعديل الاختيار يدوياً.</small></div>
        <div id="suggestionResult" class="suggestion-result" aria-live="polite"></div>
      </div>
      <input class="service-search" id="serviceSearch" type="search" placeholder="أو ابحث باسم خدمة..." autocomplete="off" aria-label="البحث في الخدمات">
      <div class="service-options" id="serviceOptions">${cards}</div>
      <p class="wizard-intro" id="selectionCount" aria-live="polite">لم يتم اختيار خدمات بعد.</p>
      ${actions('السابق','متابعة إلى تفاصيل المشروع')}`);
  }

  function stepTwo() {
    const detailBlocks = state.selected.map(id => {
      const item = services.find(service => service.id === id);
      return `<section class="service-detail-block">
        <h3>${escapeHtml(item.name)}</h3>
        <div class="form-field">
          <label for="detail-${id}">صف المطلوب في هذه الخدمة <em>*</em></label>
          <textarea id="detail-${id}" data-detail="${id}" required placeholder="اكتب ما الذي تريد تنفيذه، وما الملفات أو المادة المتوفرة لديك، وأي شروط مهمة...">${escapeHtml(state.details[id]||'')}</textarea>
          <small>كلما كان الوصف محدداً، كان تقييم متطلبات العمل أدق.</small>
        </div>
      </section>`;
    }).join('');
    return shell(`
      <h2>تفاصيل المشروع</h2>
      <p class="wizard-intro">أدخل وصفاً موجزاً لكل خدمة اخترتها، وحدد تفضيلات التسليم والوقت إن وجدت.</p>
      ${detailBlocks}
      <div class="form-grid detail-optional">
        <div class="form-field"><label for="format">صيغة التسليم المفضلة</label><select id="format">
          <option>لا يوجد تفضيل محدد</option><option>Word</option><option>PDF</option><option>ملفات مفتوحة قابلة للتحرير</option><option>نسخة للطباعة وأخرى رقمية</option><option>يحدد لاحقاً</option>
        </select></div>
        <div class="form-field"><label for="timing">الإطار الزمني</label><select id="timing">
          <option>بحسب الاتفاق</option><option>في أقرب وقت ممكن</option><option>خلال أسبوع</option><option>خلال أسبوعين</option><option>لدي موعد محدد سأوضحه في الملاحظات</option>
        </select></div>
      </div>
      ${actions('العودة إلى الخدمات','متابعة إلى بيانات التواصل')}`);
  }

  function stepThree() {
    return shell(`
      <h2>بيانات التواصل</h2>
      <p class="wizard-intro">أدخل وسيلة تواصل صحيحة حتى نتمكن من مناقشة تفاصيل المشروع معك.</p>
      <div class="form-grid">
        <div class="form-field"><label for="clientName">الاسم <em>*</em></label><input id="clientName" type="text" autocomplete="name" value="${escapeHtml(state.name)}" placeholder="الاسم الكامل" required></div>
        <div class="form-field"><label for="clientPhone">رقم الهاتف أو واتساب <em>*</em></label><input id="clientPhone" type="tel" autocomplete="tel" inputmode="tel" value="${escapeHtml(state.phone)}" placeholder="+967..." required></div>
        <div class="form-field full"><label for="clientNotes">ملاحظات إضافية</label><textarea id="clientNotes" placeholder="أي معلومات أخرى تساعدنا على فهم طلبك (اختياري)...">${escapeHtml(state.notes)}</textarea></div>
      </div>
      <p class="request-disclaimer">بعد المتابعة ستظهر لك مراجعة نهائية للطلب. لا يتم إرسال البيانات تلقائياً أو حفظها في الموقع؛ الإرسال يتم بعد ضغطك على زر واتساب ثم تأكيد الإرسال من التطبيق.</p>
      ${actions('العودة إلى التفاصيل','مراجعة الطلب')}`);
  }

  function review() {
    const chosen = state.selected.map(id => {
      const item = services.find(service => service.id === id);
      return `<div class="review-group"><strong>${escapeHtml(item.name)}</strong><p>${escapeHtml(state.details[id])}</p></div>`;
    }).join('');
    const content = `
      <h2>مراجعة الطلب</h2><p class="wizard-intro">راجع المعلومات التالية قبل تجهيز رسالة واتساب. يمكنك الرجوع لتعديل أي بيان.</p>
      <div class="review-panel">
        <div class="review-group"><strong>الخدمات المختارة</strong><p>${state.selected.map(id => escapeHtml(services.find(s=>s.id===id).name)).join('، ')}</p></div>
        ${chosen}
        <div class="review-group"><strong>صيغة التسليم</strong><p>${escapeHtml(state.format)}</p></div>
        <div class="review-group"><strong>الإطار الزمني</strong><p>${escapeHtml(state.timing)}</p></div>
        <div class="review-group"><strong>بيانات التواصل</strong><p>${escapeHtml(state.name)} · ${escapeHtml(state.phone)}</p></div>
        ${state.notes?`<div class="review-group"><strong>ملاحظات إضافية</strong><p>${escapeHtml(state.notes)}</p></div>`:''}
      </div>
      <p class="request-disclaimer">لم يُرسل طلبك بعد. اضغط زر «فتح واتساب وإرسال الطلب» ثم راجع الرسالة واضغط إرسال داخل واتساب.</p>
      <div class="wizard-actions"><button type="button" class="button button-muted" data-action="back">تعديل البيانات</button><a class="button button-primary" id="sendRequest" href="${makeWhatsappUrl()}" target="_blank" rel="noopener">فتح واتساب وإرسال الطلب <span aria-hidden="true">↗</span></a></div>`;
    return `<div class="wizard-top"><strong>تأكيد بيانات الطلب</strong><small>المراجعة النهائية</small></div><div class="wizard-content">${content}</div>`;
  }

  function makeWhatsappUrl() {
    const lines = ['طلب خدمة جديد – منصة بصمة كتاب','',`اسم العميل: ${state.name}`,`رقم التواصل: ${state.phone}`];
    if (state.initialDescription) lines.push(`وصف العميل الأولي: ${state.initialDescription}`);
    lines.push('','الخدمات المطلوبة:');
    state.selected.forEach((id,index) => {
      lines.push(`${index+1}. ${services.find(s=>s.id===id).name}`);
      lines.push(state.details[id] || '');
      lines.push('');
    });
    lines.push(`صيغة التسليم المفضلة: ${state.format}`,`الإطار الزمني: ${state.timing}`);
    if (state.notes) lines.push(`ملاحظات إضافية: ${state.notes}`);
    lines.push('سأرفق الملفات ذات الصلة في محادثة واتساب.');
    return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines.join('\n'))}`;
  }

  function render() {
    root.innerHTML = state.step===1 ? stepOne() : state.step===2 ? stepTwo() : state.step===3 ? stepThree() : review();
    if (state.step===1) {
      const description = root.querySelector('#needDescription');
      if (description) description.value = state.initialDescription;
      const count = root.querySelector('#selectionCount');
      count.textContent = state.selected.length ? `الخدمات المحددة: ${state.selected.length}` : 'لم يتم اختيار خدمات بعد.';
      const search = root.querySelector('#serviceSearch');
      search.addEventListener('input', () => {
        const value = search.value.trim().toLowerCase();
        root.querySelectorAll('[data-service-option]').forEach(card => {
          card.hidden = !card.querySelector('.option-copy strong').textContent.toLowerCase().includes(value) &&
            !card.querySelector('.option-copy small').textContent.toLowerCase().includes(value);
        });
      });
      root.querySelectorAll('[data-service-option]').forEach(card => {
        card.addEventListener('change', event => {
          const id = Number(card.dataset.serviceOption);
          if (event.target.checked && !state.selected.includes(id)) state.selected.push(id);
          if (!event.target.checked) state.selected = state.selected.filter(value => value!==id);
          card.classList.toggle('is-selected', event.target.checked);
          card.querySelector('.option-check').textContent = event.target.checked ? '✓' : '';
          count.textContent = state.selected.length ? `الخدمات المحددة: ${state.selected.length}` : 'لم يتم اختيار خدمات بعد.';
        });
      });
    }
  }

  function showError(message) {
    const box = root.querySelector('#validationMessage');
    if (!box) return;
    box.hidden = false;
    box.textContent = message;
  }

  root.addEventListener('click', event => {
    const button = event.target.closest('[data-action]');
    if (!button) return;
    const action = button.dataset.action;
    if (action==='suggest') {
      state.initialDescription = root.querySelector('#needDescription').value.trim();
      state.suggested = suggestServices(state.initialDescription);
      const box = root.querySelector('#suggestionResult');
      box.replaceChildren();
      if (!state.suggested.length) {
        const empty = document.createElement('p');
        empty.className = 'suggestion-empty';
        empty.textContent = 'لم نتمكن من تحديد خدمة تلقائياً من الوصف الحالي. استخدم البحث أو اختر الخدمة المناسبة من القائمة.';
        box.appendChild(empty);
      } else {
        const heading = document.createElement('div');
        heading.className = 'suggestion-heading';
        heading.textContent = 'الخدمات الأقرب إلى وصفك';
        const names = document.createElement('p');
        names.textContent = state.suggested.map(id => services.find(service=>service.id===id).name).join('، ');
        const add = document.createElement('button');
        add.type = 'button';
        add.className = 'button button-primary';
        add.dataset.action = 'apply-suggestions';
        add.textContent = 'إضافة الاقتراحات إلى اختياراتي';
        box.append(heading,names,add);
      }
      return;
    }
    if (action==='apply-suggestions') {
      state.suggested.forEach(id => { if (!state.selected.includes(id)) state.selected.push(id); });
      render();
      return;
    }
    if (action==='back') {
      if (state.step===4) state.step=3;
      else if (state.step>1) state.step--;
      render();
      return;
    }
    if (action==='next') {
      if (state.step===1) {
        if (!state.selected.length) return showError('يرجى اختيار خدمة واحدة على الأقل للمتابعة.');
        state.step=2;
      } else if (state.step===2) {
        let valid = true;
        root.querySelectorAll('[data-detail]').forEach(field => {
          state.details[field.dataset.detail]=field.value.trim();
          if (!field.value.trim()) valid=false;
        });
        if (!valid) return showError('يرجى كتابة وصف للمطلوب في كل خدمة اخترتها.');
        state.format=root.querySelector('#format').value;
        state.timing=root.querySelector('#timing').value;
        state.step=3;
      } else if (state.step===3) {
        state.name=root.querySelector('#clientName').value.trim();
        state.phone=root.querySelector('#clientPhone').value.trim();
        state.notes=root.querySelector('#clientNotes').value.trim();
        if (state.name.length<2) return showError('يرجى إدخال الاسم بصورة صحيحة.');
        if (state.phone.replace(/[^0-9]/g,'').length<6) return showError('يرجى إدخال رقم هاتف أو واتساب صالح.');
        state.step=4;
      }
      render();
    }
  });

  render();
})();