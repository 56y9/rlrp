import { RuleItem } from '../types';
import { CORE_RULES } from './rules/coreRules';
import { POWER_META_RULES } from './rules/powerMetaRules';
import { CRIMES_GANGS_RULES } from './rules/crimesGangsRules';
import { POLICE_EMS_RULES } from './rules/policeEmsRules';
import { ZONES_RULES } from './rules/zonesRules';
import { CHARACTER_ECONOMY_RULES } from './rules/characterEconomyRules';

// تجميع كافة قوانين الرول بلاي المئة (100 قانون متكامل واحترافي)
export const RULES_DATA: RuleItem[] = [
  ...CORE_RULES,             // القوانين 1 إلى 20 (قواعد الرول بلاي الأساسية والاشتباك)
  ...POWER_META_RULES,        // القوانين 21 إلى 38 (الباور، الميتا، Fear RP، والشيدرات والكروس هير)
  ...CRIMES_GANGS_RULES,     // القوانين 39 إلى 58 (السرقات، البنوك، الرهائن، التيرف، وحروب العصابات)
  ...POLICE_EMS_RULES,       // القوانين 59 إلى 76 (الشرطة، الإسعاف، المحاكم، والمطاردات الأمنية)
  ...ZONES_RULES,            // القوانين 77 إلى 88 (المناطق الخضراء والحمراء، العقارات والمطارات)
  ...CHARACTER_ECONOMY_RULES // القوانين 89 إلى 100 (الموت النهائي CK، الاقتصاد، الآداب، والريستارت)
];

// تصدير القوائم الفرعية للمرونة
export {
  CORE_RULES,
  POWER_META_RULES,
  CRIMES_GANGS_RULES,
  POLICE_EMS_RULES,
  ZONES_RULES,
  CHARACTER_ECONOMY_RULES
};
