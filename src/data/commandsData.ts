import { CommandItem } from '../types';

export const COMMANDS_DATA: CommandItem[] = [
  {
    id: 'cmd-me',
    command: '/me [الفعل]',
    usage: '/me يخرج المحفظة ويسلم البطاقة',
    descriptionAr: 'يُستخدم لوصف حركة أو فعل جسدي تقوم به شخصيتك لا يتوفر له أنيميشن مدمج في اللعبة.',
    exampleAr: '/me يضع كمادة باردة على جرح المصاب بحذر',
    isStaffOnly: false,
    category: 'roleplay'
  },
  {
    id: 'cmd-do',
    command: '/do [السؤال أو الحالة]',
    usage: '/do هل يظهر أثر للضرب على وجهه؟',
    descriptionAr: 'يُستخدم لوصف حالة البيئة المحيطة، أو طرح سؤال على الخصم، ويجب الإجابة عليه بصدق 100%.',
    exampleAr: '/do نعم، تظهر كدمات زرقاء واضحة أسفل عينه اليمنى',
    isStaffOnly: false,
    category: 'roleplay'
  },
  {
    id: 'cmd-ooc',
    command: '/ooc [الرسالة]',
    usage: '/ooc شباب السيرفر بيسوي ريستارت بعد 5 دقائق؟',
    descriptionAr: 'الشات العام لجميع اللاعبين للتحدث خارج الشخصية في الحالات الضرورية والاستفسارات العامة.',
    exampleAr: '/ooc تم تسجيل المشكلة وجاري تعديل المايكروفون',
    isStaffOnly: false,
    category: 'general'
  },
  {
    id: 'cmd-looc',
    command: '/looc [الرسالة]',
    usage: '/looc لحظة يا غالي بسوي انلوك للماوس',
    descriptionAr: 'الشات المحلي خارج الشخصية (Local OOC) ويراه فقط اللاعبون القريبون منك في دائرة 15 متراً.',
    exampleAr: '/looc أخوي المايك عندك في صدى ممكن تعيد الجملة؟',
    isStaffOnly: false,
    category: 'general'
  },
  {
    id: 'cmd-report',
    command: '/report [الآيدي والمشكلة]',
    usage: '/report ID: 44 قام بارتكاب VDM عند الكراج ومعي كليب كامل',
    descriptionAr: 'إرسال نداء إغاثة أو بلاغ فوري للمشرفين المتواجدين داخل السيرفر لمتابعة مخالفة جارية.',
    exampleAr: '/report ID: 102 لاعب علق داخل الجدار بعد الحادث',
    isStaffOnly: false,
    category: 'support'
  },
  {
    id: 'cmd-carry',
    command: '/carry [ID]',
    usage: '/carry 28',
    descriptionAr: 'حمل اللاعب المصاب أو المستسلم على الكتف لنقله إلى سيارة الإسعاف أو مكان آمن.',
    exampleAr: '/me يساعد المصاب في الوقوف ويحمله على كتفه',
    isStaffOnly: false,
    category: 'action'
  },
  {
    id: 'cmd-th',
    command: '/th [ID]',
    usage: '/th 15',
    descriptionAr: 'أخذ الضحية كرهينة (Take Hostage) ووضع السلاح على رقبته أثناء التفاوض مع الشرطة.',
    exampleAr: '/me يضع ذراعه حول عنق الرهينة ويوجه المسدس لرأسه',
    isStaffOnly: false,
    category: 'action'
  },
  {
    id: 'cmd-cpr',
    command: '/cpr [ID]',
    usage: '/cpr 89',
    descriptionAr: 'إجراء الإنعاش القلبي الرئوي للمصاب من قبل المسعفين المعتمدين أو حاملي رخص الإسعاف.',
    exampleAr: '/me يبدأ بالضغط على القفص الصدري بمعدل 100 ضغطة في الدقيقة',
    isStaffOnly: false,
    category: 'action'
  },
  {
    id: 'cmd-radio',
    command: '/radio [التردد]',
    usage: '/radio 101.5',
    descriptionAr: 'ضبط تردد جهاز اللاسلكي للتواصل الصوتي المشفر مع أفراد الشرطة، الإسعاف، أو العصابة.',
    exampleAr: '/radio 104.2 (تردد عمليات الشرطة المركزي)',
    isStaffOnly: false,
    category: 'general'
  },
  {
    id: 'cmd-factions',
    command: '/factions',
    usage: '/factions',
    descriptionAr: 'عرض عدد أفراد الشرطة والإسعاف والميكانيكيين المتصلين حالياً داخل السيرفر لمعرفة جاهزية السرقات.',
    exampleAr: 'الشرطة: 8 | الإسعاف: 4 | الميكانيك: 3 (السرقات متاحة)',
    isStaffOnly: false,
    category: 'general'
  }
];
