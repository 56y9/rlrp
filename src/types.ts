export type RuleCategory = 
  | 'all'
  | 'roleplay_core'     // قوانين الرول بلاي الأساسية (RDM, VDM, NLR...)
  | 'crimes_gangs'      // قوانين الجرائم والسرقات والعصابات
  | 'police_ems'        // قوانين الشرطة والإسعاف والقطاعات
  | 'zones'             // قوانين المناطق والملاذ الآمن
  | 'character_ck'      // قوانين الشخصيات والموت والـ CK/PK
  | 'general_conduct'   // قوانين عامة، الديسكورد، والمحادثات الصوتية
  | 'power_meta';       // الباور جيمنج والميتا جيمنج والـ Fear RP

export type SeverityLevel = 'low' | 'medium' | 'high' | 'critical' | 'permanent';

export interface RuleItem {
  id: string;
  code: string;                  // e.g. "VDM", "RDM", "NLR", "PG-01"
  titleAr: string;
  titleEn: string;
  category: RuleCategory;
  severity: SeverityLevel;
  summaryAr: string;
  fullDescriptionAr: string;
  penalty1st: string;            // عقوبة المرة الأولى
  penalty2nd: string;            // عقوبة المرة الثانية
  penalty3rd: string;            // عقوبة المرة الثالثة
  violationExample: string;      // مثال واقعي على المخالفة (الخطأ)
  correctRoleplayExample: string;// المثال الصحيح والرول بلاي السليم
  adminNotes: string;            // توجيهات للمشرفين والتحقيق الإداري
  relatedCommands?: string[];    // أوامر مرتبطة مثل /me /do
  tags: string[];
}

export interface ZoneItem {
  id: string;
  nameAr: string;
  nameEn: string;
  type: 'green' | 'red' | 'neutral';
  description: string;
  allowedActions: string[];
  forbiddenActions: string[];
  locationExamples: string[];
  penalty: string;
  iconName: string;
}

export interface TermItem {
  id: string;
  term: string;
  abbr?: string;
  pronunciationAr: string;
  meaningAr: string;
  detailedExplanation: string;
  exampleScenario: string;
  category: 'core' | 'chat' | 'combat' | 'admin';
}

export interface CommandItem {
  id: string;
  command: string;
  usage: string;
  descriptionAr: string;
  exampleAr: string;
  isStaffOnly: boolean;
  category: 'roleplay' | 'action' | 'general' | 'support';
}

export interface FactionRuleGroup {
  id: string;
  factionNameAr: string;
  factionNameEn: string;
  badge: string;
  color: string;
  description: string;
  rules: {
    title: string;
    description: string;
    penalty: string;
    note?: string;
  }[];
}

export interface QuizQuestion {
  id: number;
  scenario: string;
  ruleTested: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
    explanation: string;
  }[];
}
