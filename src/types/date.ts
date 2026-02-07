export type Vibe =
  | 'romantic'
  | 'adventurous'
  | 'chill'
  | 'creative'
  | 'funny'
  | 'intellectual'
  | 'spontaneous'
  | 'nostalgic'
  | 'cozy'
  | 'active'
  | 'luxe'
  | 'quirky'
  | 'wholesome'
  | 'sensual'
  | 'competitive';

export type Budget = 'free' | '$' | '$$' | '$$$';

export type Setting = 'city' | 'home' | 'outdoor' | 'nature';

export type DateType =
  | 'first-date'
  | 'regular'
  | 'anniversary'
  | 'double-date'
  | 'long-distance'
  | 'rainy-day'
  | 'weeknight-quick';

export type Season = 'any' | 'spring' | 'summer' | 'fall' | 'winter' | 'rainy-day';

export type Duration = '1-2hrs' | '2-3hrs' | '3-4hrs' | 'half-day' | 'full-day';

export type SortOption = 'popular' | 'new' | 'random';

export interface Step {
  icon: string;
  color: string;
  label: string;
  text: string;
}

export interface Resource {
  label: string;
  url: string;
  icon: string;
}

export interface DateIdea {
  id: string;
  name: string;
  heroIcon: string;
  heroColor: string;
  vibe: Vibe[];
  budget: Budget;
  setting: Setting;
  type: DateType[];
  season: Season[];
  duration: Duration;
  steps: Step[];
  conversation: string;
  likes: number;
  createdAt: string;
  featured: boolean;
  resources?: Resource[];
}
