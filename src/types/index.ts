export interface TranslationsType {
  [key: string]: any;
  name: string;
  nav: NavType;
  hero: HeroType;
  about: AboutType;
  projects: ProjectsType;
  see_more: string;
  see_less: string;
  contact: ContactType;
  experience: ExperienceType;
  footer: FooterType;
  education: EducationType;
  skills: SkillsType;
}

export interface NavType {
  home: string;
  about: string;
  education: string;
  skills: string;
  projects: string;
  contact: string;
  experience: string;
}

export interface HeroType {
  title: string;
  subtitle: string;
}

export interface AboutType {
  title: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
  programming: string;
  programmingText: string;
  design: string;
  designText: string;
  teamwork: string;
  teamworkText: string;
}

export interface ProjectsType {
  title: string;
  lyraTitle: string;
  lyraDesc: string;
  lyraExtended: string;
  fenixTitle: string;
  fenixDesc: string;
  fenixExtended: string;
  spectreTitle: string;
  spectreDesc: string;
  spectreExtended: string;
  arpvenomTitle: string;
  arpvenomDesc: string;
  arpvenomExtended: string;
  supplyTitle: string;
  supplyDesc: string;
  supplyExtended: string;
}

export interface ContactType {
  title: string;
  email: string;
}

export interface ExperienceType {
  title: string;
  imibic: string;
  webdev: string;
  pentesting: string;
  databases: string;
  servers: string;
  carrier: string;
  simulator: string;
  tutoring: string;
  subjects: string;
  students: string;
  preparation: string;
  internshipDuration: string;
  carrierDuration: string;
  tutoringDuration: string;
}

export interface FooterType {
  rights: string;
}

export interface EducationType {
  title: string;
  formal: string;
  eso: string;
  cfgm: string;
  cfgs: string;
  cybersecuritySpecialization: string;
  complementary: string;
  complementaryItems: ComplementaryItemsType;
}

export interface ComplementaryItemsType {
  cisco: string;
  ethicalHacking: string;
  docker: string;
  aws: string;
  cloudflare: string;
  mysql: string;
  java: string;
  python: string;
  cLang: string;
  frameworks: string;
  linux: string;
  hardware: string;
  forensics: string;
  burp: string;
  metasploit: string;
  socialEngineering: string;
}

export interface SkillsType {
  title: string;
  technical: string;
  soft: string;
  teamwork: string;
  languages: string;
  english: string;
  fullstack: string;
  webdev: string;
  networking: string;
  security: string;
  databases: string;
  cloud: string;
  linux: string;
  hardware: string;
  communication: string;
  problem: string;
  adaptability: string;
  leadership: string;
}

export type Language = 'es' | 'en';