
/**
 * AcademicPortfolio
 * Core Type Definitions
 */

// ==========================================
// 1. Personal Profile
// ==========================================

export interface Profile {
  name: string;
  englishName?: string;
  title: string;
  introduction: string;
  avatar?: string;
  email?: string;
  location?: string;
  socialLinks?: SocialLink[];
}

// ==========================================
// 2. Social Links
// ==========================================

export interface SocialLink {
  name: string;
  url: string;
  icon?: string;
}

// ==========================================
// 3. Education
// ==========================================

export interface Education {
  id: string;
  school: string;
  department?: string;
  degree?: string;
  startDate: string;
  endDate?: string;
  description?: string;
}

// ==========================================
// 4. Research
// ==========================================

export interface Research {
  id: string;
  title: string;
  subtitle?: string;
  abstract: string;
  motivation?: string;
  methodology?: string;
  results?: string;
  conclusion?: string;
  date: string;
  image?: string;
  documents?: string[];
  tags?: string[];
  status: PublicationStatus;
}

export type PublicationStatus =
  | "draft"
  | "in-progress"
  | "published";


// ==========================================
// 5. Projects
// ==========================================

export type ProjectCategory =
  | "Programming"
  | "Science"
  | "Engineering"
  | "Other";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  demoUrl?: string;
  date?: string;
}

// ==========================================
// 6. Achievements
// ==========================================

export type AchievementCategory =
  | "Competition"
  | "Academic"
  | "Certification"
  | "Other";

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  category: AchievementCategory;
  description?: string;
  image?: string;
}

// ==========================================
// 7. Navigation
// ==========================================

export interface NavigationItem {
  label: string;
  path: string;
}
