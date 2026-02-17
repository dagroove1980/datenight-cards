import type { Vibe, Budget, Setting, DateType, Season } from '@/types/date';

export const SITE_NAME = 'DateNightPlan';
export const SITE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'https://date-night-plan.com';
export const SITE_DESCRIPTION =
  'Curated date ideas with a full plan — not just "go to dinner." Browse by vibe, budget, or setting.';
export const DATES_PER_PAGE = 24;

export const ALL_VIBES: Vibe[] = [
  'romantic', 'adventurous', 'chill', 'creative', 'funny',
  'intellectual', 'spontaneous', 'nostalgic', 'cozy', 'active',
  'luxe', 'quirky', 'wholesome', 'sensual', 'competitive',
];

export const ALL_BUDGETS: Budget[] = ['free', '$', '$$', '$$$'];

export const ALL_SETTINGS: Setting[] = ['city', 'home', 'outdoor', 'nature'];

export const ALL_TYPES: DateType[] = [
  'first-date', 'regular', 'anniversary', 'double-date',
  'long-distance', 'rainy-day', 'weeknight-quick',
];

export const ALL_SEASONS: Season[] = ['any', 'spring', 'summer', 'fall', 'winter', 'rainy-day'];

export const vibeLabels: Record<Vibe, string> = {
  romantic: 'Romantic',
  adventurous: 'Adventurous',
  chill: 'Chill',
  creative: 'Creative',
  funny: 'Funny',
  intellectual: 'Intellectual',
  spontaneous: 'Spontaneous',
  nostalgic: 'Nostalgic',
  cozy: 'Cozy',
  active: 'Active',
  luxe: 'Luxe',
  quirky: 'Quirky',
  wholesome: 'Wholesome',
  sensual: 'Sensual',
  competitive: 'Competitive',
};

export const budgetLabels: Record<Budget, string> = {
  free: 'Free',
  $: '$',
  $$: '$$',
  $$$: '$$$',
};

export const settingLabels: Record<Setting, string> = {
  city: 'City',
  home: 'Home',
  outdoor: 'Outdoor',
  nature: 'Nature',
};

export const typeLabels: Record<DateType, string> = {
  'first-date': 'First Date',
  regular: 'Regular',
  anniversary: 'Anniversary',
  'double-date': 'Double Date',
  'long-distance': 'Long Distance',
  'rainy-day': 'Rainy Day',
  'weeknight-quick': 'Weeknight Quick',
};

export const seasonLabels: Record<Season, string> = {
  any: 'Any Season',
  spring: 'Spring',
  summer: 'Summer',
  fall: 'Fall',
  winter: 'Winter',
  'rainy-day': 'Rainy Day',
};

export const settingIcons: Record<Setting, string> = {
  city: 'building',
  home: 'home',
  outdoor: 'sun',
  nature: 'trees',
};

export const vibeIcons: Record<Vibe, string> = {
  romantic: 'heart',
  adventurous: 'compass',
  chill: 'coffee',
  creative: 'palette',
  funny: 'laugh',
  intellectual: 'book',
  spontaneous: 'zap',
  nostalgic: 'camera',
  cozy: 'flame',
  active: 'bike',
  luxe: 'gem',
  quirky: 'puzzle',
  wholesome: 'sun',
  sensual: 'moon',
  competitive: 'trophy',
};

// SEO page titles
export const vibePageTitles: Record<Vibe, string> = {
  romantic: 'Romantic Date Ideas',
  adventurous: 'Adventurous Date Ideas for Couples',
  chill: 'Chill Date Ideas for a Relaxed Night',
  creative: 'Creative Date Ideas for Artsy Couples',
  funny: 'Funny Date Ideas That Will Make You Both Laugh',
  intellectual: 'Intellectual Date Ideas for Curious Minds',
  spontaneous: 'Spontaneous Date Ideas for the Adventurous',
  nostalgic: 'Nostalgic Date Ideas to Relive the Magic',
  cozy: 'Cozy Date Night Ideas',
  active: 'Active Date Ideas for Energetic Couples',
  luxe: 'Luxury Date Ideas for a Special Night',
  quirky: 'Quirky Date Ideas That Break the Mold',
  wholesome: 'Wholesome Date Ideas for Couples',
  sensual: 'Sensual Date Night Ideas',
  competitive: 'Competitive Date Ideas for Fun-Loving Couples',
};

export const settingPageTitles: Record<Setting, string> = {
  city: 'City Date Night Ideas',
  home: 'At-Home Date Night Ideas',
  outdoor: 'Outdoor Date Ideas for Couples',
  nature: 'Nature Date Ideas — Get Outside Together',
};

export const budgetPageTitles: Record<Budget, string> = {
  free: "Free Date Ideas That Don't Feel Cheap",
  $: 'Budget-Friendly Date Ideas Under $30',
  $$: 'Date Night Ideas Worth the Splurge',
  $$$: 'Luxury Date Ideas for a Special Occasion',
};

export const typePageTitles: Record<DateType, string> = {
  'first-date': 'First Date Ideas That Go Beyond Dinner',
  regular: 'Date Night Ideas for Every Week',
  anniversary: 'Anniversary Date Ideas to Celebrate Your Love',
  'double-date': 'Double Date Ideas for a Great Night Out',
  'long-distance': 'Long Distance Date Ideas to Stay Connected',
  'rainy-day': 'Rainy Day Date Ideas — Make the Most of Bad Weather',
  'weeknight-quick': 'Quick Weeknight Date Ideas for Busy Couples',
};

export const seasonPageTitles: Record<Season, string> = {
  any: 'Date Ideas for Any Season',
  spring: 'Spring Date Ideas for Couples',
  summer: 'Summer Date Ideas — Soak Up the Sun Together',
  fall: 'Fall Date Ideas for Cozy Autumn Nights',
  winter: 'Cozy Winter Date Ideas',
  'rainy-day': 'Rainy Day Date Ideas — Make the Most of Bad Weather',
};

// SEO intro paragraphs
export const vibeIntros: Record<Vibe, string> = {
  romantic:
    "Not every romantic date needs a reservation and a dress code. Sometimes the most romantic thing you can do is show up with a plan — something thoughtful, a little unexpected, and completely about the two of you. Browse our favorite romantic date ideas below, from candlelit evenings at home to surprise adventures in the city.",
  adventurous:
    "If your idea of a perfect date involves a little adrenaline, some unknown territory, and the kind of stories you'll tell for years — you're in the right place. These adventurous date ideas push you out of your comfort zone and into something unforgettable.",
  chill:
    "Not every date needs to be an event. Sometimes the best nights are the ones where you slow down, settle in, and just enjoy each other's company. These chill date ideas are perfect for when you want quality time without the pressure.",
  creative:
    "Dates are better when you make something together. Whether it's art, music, food, or something completely weird — these creative date ideas let you collaborate, experiment, and surprise each other with hidden talents.",
  funny:
    "The couple that laughs together stays together. These funny date ideas are designed to get you both cracking up — from improv shows to ridiculous competitions that bring out your silliest sides.",
  intellectual:
    "For the couple that debates over dinner and stays up late talking about everything. These intellectual date ideas feed your curiosity and spark the kind of deep conversations that make you fall for each other all over again.",
  spontaneous:
    "Plans? Where we're going, we don't need plans. Well, actually we made the plan for you — but these spontaneous date ideas capture that thrilling feeling of saying 'let's just go' and seeing where the night takes you.",
  nostalgic:
    "Sometimes the best dates are the ones that remind you where it all started. These nostalgic date ideas help you revisit old memories, recreate first dates, and add new chapters to your favorite stories together.",
  cozy:
    "Blankets, candles, and nowhere to be. These cozy date ideas are for the nights when the best thing in the world is being wrapped up together at home with something warm to drink and something good to watch.",
  active:
    "Get your heart rate up — together. These active date ideas combine exercise, fresh air, and a little friendly competition. Perfect for couples who bond over doing things, not just talking about them.",
  luxe:
    "Sometimes you want to go all out. These luxury date ideas are for special occasions — or for random Tuesdays when you decide to treat yourselves like the power couple you are.",
  quirky:
    "Normal is overrated. These quirky date ideas are for couples who'd rather do something weird and wonderful than follow the usual dinner-and-a-movie script. Expect the unexpected.",
  wholesome:
    "Dates that make you feel good about each other and the world. These wholesome date ideas are sweet, genuine, and full of the kind of simple joy that reminds you why you're together.",
  sensual:
    "Turn up the intimacy. These sensual date night ideas create the kind of atmosphere where you can slow down, connect deeply, and focus entirely on each other.",
  competitive:
    "Game on. These competitive date ideas bring out your playful rivalry — from board game marathons to mini golf showdowns. Just remember: it's about having fun together. But also, winning.",
};

export const settingIntros: Record<Setting, string> = {
  city:
    "The city is your playground. From hidden speakeasies to rooftop sunsets, street food markets to late-night galleries — these city date ideas make the most of everything your town has to offer. No car required, just curiosity.",
  home:
    "You don't need to go out to have an amazing date night. These at-home date ideas prove that the best evenings often happen in your own space — with a little creativity, some good food, and each other.",
  outdoor:
    "Fresh air makes everything better. These outdoor date ideas take you to parks, rooftops, beaches, and streets — anywhere the sky is your ceiling and the vibe is effortlessly good.",
  nature:
    "Leave the city behind. These nature date ideas take you to trails, lakes, mountains, and meadows — where the only notification you'll get is a bird singing. Disconnect to reconnect.",
};

export const budgetIntros: Record<Budget, string> = {
  free:
    "The best dates don't cost a thing — they just take a little creativity. Whether it's a sunrise hike, a home-cooked challenge, or revisiting the place where it all started, these free date ideas prove that romance doesn't have a price tag.",
  $:
    "Great dates don't have to break the bank. These budget-friendly ideas keep you under $30 while delivering memorable, thoughtful experiences. A little planning goes a long way.",
  $$:
    "Ready to treat yourselves? These mid-range date ideas hit the sweet spot — special enough to feel like an occasion, reasonable enough to enjoy guilt-free. Think of it as investing in your relationship.",
  $$$:
    "Go big or go home. These premium date ideas are for the nights when you want everything to be perfect — fine dining, unique experiences, and the kind of evening you'll remember for years.",
};

export const typeIntros: Record<DateType, string> = {
  'first-date':
    "First dates are nerve-wracking enough without the added pressure of figuring out what to do. These first date ideas take the guesswork out of it — they're interesting enough to spark conversation, low-pressure enough to stay comfortable, and memorable enough to land a second date.",
  regular:
    "You don't need a special occasion to have a great date night. These regular date ideas are perfect for any week — keeping things fresh, fun, and full of the little moments that make a relationship great.",
  anniversary:
    "Anniversaries deserve something special. These date ideas go beyond the standard dinner reservation — they're thoughtful, personal, and designed to celebrate everything you've built together.",
  'double-date':
    "Four is not a crowd — it's a party. These double date ideas are designed for groups, with activities that keep everyone engaged, laughing, and bonding. Perfect for couples who love sharing great nights with friends.",
  'long-distance':
    "Distance doesn't mean disconnection. These long-distance date ideas help you share experiences across the miles — from synchronized movie nights to virtual cooking together. Technology is your wingman.",
  'rainy-day':
    "Don't let the weather cancel your plans. These rainy day date ideas embrace the grey skies — from cozy indoor adventures to romantic walks in the rain. Sometimes bad weather makes the best memories.",
  'weeknight-quick':
    "Big date energy, small time commitment. These quick weeknight ideas take 1-2 hours max — perfect for when you want to connect after work without turning it into a whole production.",
};

export const seasonIntros: Record<Season, string> = {
  any:
    "These date ideas work any time of year — rain or shine, summer or winter. No need to check the forecast, just pick one and go.",
  spring:
    "Cherry blossoms, longer evenings, and that feeling that anything is possible. These spring date ideas make the most of the season's fresh energy — from farmers market mornings to sunset picnics in the park.",
  summer:
    "Long days, warm nights, and zero excuses to stay inside. These summer date ideas are made for the season — beach trips, rooftop drinks, stargazing, and adventures that last until the sun goes down (which won't be for a while).",
  fall:
    "Crisp air, golden light, and the perfect excuse to get cozy. These fall date ideas lean into everything that makes autumn the most romantic season — from apple picking to fireside evenings.",
  winter:
    "Cold outside, warm inside. These winter date ideas make the most of the season's cozy magic — from ice skating to hot chocolate crawls to nights in by the fire. Winter is for cuddling.",
  'rainy-day':
    "Don't let the weather cancel your plans. These rainy day date ideas embrace the grey skies — from cozy indoor adventures to romantic walks in the rain. Sometimes bad weather makes the best memories.",
};
