import giftForHarmony from "@assets/images/gift-for-harmony.png";
import giftForHealth from "@assets/images/gift-for-health.png";
import giftForWork from "@assets/images/gift-for-work.png";


export type Category = ("For Work" | "For Health" | "For Harmony") & string;

export interface Gift {
  id: number | string;
  img: string;
  category: Category;
  name: string;
  description: string;
  superpowers: {
    live: string;
    create: string;
    love: string;
    dream: string;
  };
  best: boolean;
}

export const gifts: Gift[] = [
  {
    id: 0,
    img: giftForWork,
    name: "Bug Magnet",
    description:
      "Able to find bugs in code like they were placed there on purpose.",
    category: "For Work",
    superpowers: {
      live: "+500",
      create: "+500",
      love: "+200",
      dream: "+400",
    },
    best: false,
  },
  {
    id: 1,
    img: giftForWork,
    name: "Console.log Guru",
    description: "Uses console.log like a crystal ball to find any issue.",
    category: "For Work",
    superpowers: {
      live: "+500",
      create: "+500",
      love: "+200",
      dream: "+400",
    },
    best: true,
  },
  {
    id: 2,
    img: giftForWork,
    name: "Shortcut Cheater",
    description: "Knows every keyboard shortcut like they were born with them.",
    category: "For Work",
    superpowers: {
      live: "+500",
      create: "+500",
      love: "+400",
      dream: "+200",
    },
    best: false,
  },
  {
    id: 3,
    img: giftForWork,
    name: "Merge Master",
    description:
      "Merges branches in Git without conflicts, like a wizard during an exam.",
    category: "For Work",
    superpowers: {
      live: "+200",
      create: "+500",
      love: "+200",
      dream: "+300",
    },
    best: true,
  },
  {
    id: 4,
    img: giftForWork,
    name: "Async Tamer",
    description:
      "Handles asynchronous code and promises like well-trained pets.",
    category: "For Work",
    superpowers: {
      live: "+100",
      create: "+400",
      love: "+200",
      dream: "+300",
    },
    best: false,
  },
  {
    id: 5,
    img: giftForWork,
    name: "CSS Tamer",
    description:
      "Can make Flexbox and Grid work together like they were always best friends.",
    category: "For Work",
    superpowers: {
      live: "+200",
      create: "+500",
      love: "+200",
      dream: "+300",
    },
    best: false,
  },
  {
    id: 7,
    img: giftForWork,
    name: "Time Hacker",
    description:
      "Writes code at the last moment but always meets the deadline.",
    category: "For Work",
    superpowers: {
      live: "+500",
      create: "+500",
      love: "+500",
      dream: "+200",
    },
    best: false,
  },
  {
    id: 8,
    img: giftForWork,
    name: "Layout Master",
    description:
      "Creates perfect layouts on the first try, like they can read the designer's mind.",
    category: "For Work",
    superpowers: {
      live: "+500",
      create: "+300",
      love: "+200",
      dream: "+200",
    },
    best: false,
  },
  {
    id: 9,
    img: giftForWork,
    name: "Documentation Whisperer",
    description:
      "Understands cryptic documentation as if they wrote it themselves.",
    category: "For Work",
    superpowers: {
      live: "+500",
      create: "+500",
      love: "+200",
      dream: "+100",
    },
    best: false,
  },
  {
    id: 10,
    img: giftForWork,
    name: "Feedback Master",
    description: "Accepts client revisions with the Zen calm of Buddha.",
    category: "For Work",
    superpowers: {
      live: "+300",
      create: "+500",
      love: "+300",
      dream: "+400",
    },
    best: false,
  },
  {
    id: 11,
    img: giftForWork,
    name: "Code Minimalist",
    description:
      "Writes code so concise that one line does more than a whole file.",
    category: "For Work",
    superpowers: {
      live: "+500",
      create: "+500",
      love: "+500",
      dream: "+200",
    },
    best: false,
  },
  {
    id: 12,
    img: giftForWork,
    name: "Pixel-Perfect Magician",
    description:
      "Aligns elements to the last pixel, even when the design looks abstract.",
    category: "For Work",
    superpowers: {
      live: "+500",
      create: "+500",
      love: "+400",
      dream: "+400",
    },
    best: false,
  },
  {
    id: 13,
    img: giftForHealth,
    name: "Posture Levitation",
    description:
      "Can sit for hours, but maintains perfect posture like a ballerina.",
    category: "For Health",
    superpowers: {
      live: "+400",
      create: "+500",
      love: "+500",
      dream: "+400",
    },
    best: false,
  },
  {
    id: 14,
    img: giftForHealth,
    name: "Step Master",
    description: "Gets 10,000 steps a day even while sitting at the computer.",
    category: "For Health",
    superpowers: {
      live: "+400",
      create: "+300",
      love: "+500",
      dream: "+400",
    },
    best: false,
  },
  {
    id: 15,
    img: giftForHealth,
    name: "Snack Resister",
    description: "Ignoring desktop snacks like a strict dietician.",
    category: "For Health",
    superpowers: {
      live: "+400",
      create: "+100",
      love: "+200",
      dream: "+400",
    },
    best: false,
  },
  {
    id: 16,
    img: giftForHealth,
    name: "Hydration Bot",
    description:
      "Drinks the recommended 2 liters of water a day like a health-programmed robot.",
    category: "For Health",
    superpowers: {
      live: "+500",
      create: "+300",
      love: "+500",
      dream: "+500",
    },
    best: true,
  },
  {
    id: 17,
    img: giftForHealth,
    name: "Sleep Overlord",
    description: "Sleeps 6 hours but feels like they had 10.",
    category: "For Health",
    superpowers: {
      live: "+400",
      create: "+500",
      love: "+500",
      dream: "+500",
    },
    best: false,
  },
  {
    id: 18,
    img: giftForHealth,
    name: "Break Guru",
    description:
      "Takes a stretch break every hour without forgetting, no matter how focused.",
    category: "For Health",
    superpowers: {
      live: "+300",
      create: "+300",
      love: "+300",
      dream: "+400",
    },
    best: false,
  },
  {
    id: 19,
    img: giftForHealth,
    name: "Eye Protector",
    description:
      "Can work all day at the monitor without feeling like their eyes are on fire.",
    category: "For Health",
    superpowers: {
      live: "+100",
      create: "+300",
      love: "+500",
      dream: "+400",
    },
    best: false,
  },
  {
    id: 20,
    img: giftForHealth,
    name: "Stress Dodger",
    description: "Masters meditation right at the keyboard.",
    category: "For Health",
    superpowers: {
      live: "+100",
      create: "+400",
      love: "+200",
      dream: "+400",
    },
    best: false,
  },
  {
    id: 21,
    img: giftForHealth,
    name: "Yoga Coder",
    description: "Easily switches from coding to yoga and back.",
    category: "For Health",
    superpowers: {
      live: "+400",
      create: "+400",
      love: "+400",
      dream: "+400",
    },
    best: false,
  },
  {
    id: 22,
    img: giftForHealth,
    name: "Healthy Snacker",
    description:
      "Always picks fruit, even when chocolate is within arm’s reach.",
    category: "For Health",
    superpowers: {
      live: "+400",
      create: "+300",
      love: "+200",
      dream: "+400",
    },
    best: false,
  },
  {
    id: 23,
    img: giftForHealth,
    name: "Chair Exerciser",
    description: "Manages to work out without leaving the chair.",
    category: "For Health",
    superpowers: {
      live: "+500",
      create: "+500",
      love: "+500",
      dream: "+400",
    },
    best: false,
  },
  {
    id: 24,
    img: giftForHealth,
    name: "Caffeine Filter",
    description:
      "Drinks coffee at night and still falls asleep with no problem.",
    category: "For Health",
    superpowers: {
      live: "+400",
      create: "+300",
      love: "+500",
      dream: "+200",
    },
    best: false,
  },
  {
    id: 25,
    img: giftForHarmony,
    name: "Joy Charger",
    description:
      "Finds joy in the little things—even in a build that finishes unexpectedly fast.",
    category: "For Harmony",
    superpowers: {
      live: "+200",
      create: "+200",
      love: "+500",
      dream: "+500",
    },
    best: false,
  },
  {
    id: 26,
    img: giftForHarmony,
    name: "Error Laugher",
    description:
      "Laughs at code errors like they’re jokes instead of getting angry.",
    category: "For Harmony",
    superpowers: {
      live: "+300",
      create: "+200",
      love: "+500",
      dream: "+500",
    },
    best: false,
  },
  {
    id: 27,
    img: giftForHarmony,
    name: "Bug Acceptance Guru",
    description:
      "Accepts bugs as part of the journey to perfection — it’s just another task.",
    category: "For Harmony",
    superpowers: {
      live: "+300",
      create: "+200",
      love: "+500",
      dream: "+400",
    },
    best: false,
  },
  {
    id: 28,
    img: giftForHarmony,
    name: "Spontaneous Coding Philosopher",
    description:
      "Philosophically accepts any client suggestion after a long refactor.",
    category: "For Harmony",
    superpowers: {
      live: "+300",
      create: "+200",
      love: "+500",
      dream: "+400",
    },
    best: true,
  },
  {
    id: 29,
    img: giftForHarmony,
    name: "Deadline Sage",
    description:
      "Remains zen even when the deadline is close and the project manager is stressed.",
    category: "For Harmony",
    superpowers: {
      live: "+200",
      create: "+200",
      love: "+300",
      dream: "+500",
    },
    best: false,
  },
  {
    id: 30,
    img: giftForHarmony,
    name: "Inspiration Maestro",
    description:
      "Finds inspiration on an empty screen as if masterpieces are already there.",
    category: "For Harmony",
    superpowers: {
      live: "+300",
      create: "+200",
      love: "+400",
      dream: "+100",
    },
    best: false,
  },
  {
    id: 31,
    img: giftForHarmony,
    name: "Peace Keeper",
    description: "Maintains inner calm even in moments of intense crisis.",
    category: "For Harmony",
    superpowers: {
      live: "+200",
      create: "+200",
      love: "+500",
      dream: "+500",
    },
    best: false,
  },
  {
    id: 32,
    img: giftForHarmony,
    name: "Empathy Guru",
    description: "Feels the team’s mood and can lift everyone’s spirits.",
    category: "For Harmony",
    superpowers: {
      live: "+500",
      create: "+200",
      love: "+500",
      dream: "+500",
    },
    best: false,
  },
  {
    id: 33,
    img: giftForHarmony,
    name: "Laughter Generator",
    description:
      "Can lighten any tense situation with a joke that even bugs laugh at.",
    category: "For Harmony",
    superpowers: {
      live: "+300",
      create: "+200",
      love: "+200",
      dream: "+500",
    },
    best: false,
  },
  {
    id: 34,
    img: giftForHarmony,
    name: "Pause Master",
    description: "Knows when to just step back from the keyboard and breathe.",
    category: "For Harmony",
    superpowers: {
      live: "+300",
      create: "+200",
      love: "+100",
      dream: "+100",
    },
    best: false,
  },
  {
    id: 35,
    img: giftForHarmony,
    name: "Coder Healer",
    description:
      "Can support a colleague in their darkest hour, even if it’s a 500 error.",
    category: "For Harmony",
    superpowers: {
      live: "+300",
      create: "+200",
      love: "+500",
      dream: "+500",
    },
    best: false,
  },
  {
    id: 36,
    img: giftForHarmony,
    name: "Music Code Curator",
    description:
      "Creates work playlists so good, even deadlines follow the rhythm.",
    category: "For Harmony",
    superpowers: {
      live: "+300",
      create: "+200",
      love: "+300",
      dream: "+200",
    },
    best: false,
  },
];

export const bestGiftsData = gifts.filter(gift => gift.best === true)
