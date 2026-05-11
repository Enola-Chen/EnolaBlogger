// 抽象詞池系統

// 第 1 輪｜固定詞池（所有人都看同一組）
export const round1Words = [
  { id: 'elegant', text: '優雅', targetNote: 'floral', group: '優雅/高貴' },
  { id: 'romantic', text: '浪漫', targetNote: 'floral', group: '柔美/女性' },
  { id: 'fresh', text: '清爽', targetNote: 'fruity', group: '清爽/自然' },
  { id: 'sweet', text: '甜美', targetNote: 'fruity', group: '甜感' },
  { id: 'smoky', text: '煙燻', targetNote: 'woody', group: '煙燻/深邃' },
  { id: 'warm', text: '溫暖', targetNote: 'woody', group: '溫暖/包覆' },
  { id: 'mysterious', text: '神秘', targetNote: 'animalic', group: '煙燻/深邃' },
  { id: 'pure', text: '純淨', targetNote: 'animalic', group: '純淨/乾淨' },
  { id: 'mature', text: '成熟', targetNote: 'cross', group: '沉靜/安定' },
  { id: 'light', text: '輕盈', targetNote: 'cross', group: '活力/青春' },
  { id: 'soft', text: '柔美', targetNote: 'cross', group: '柔美/女性' },
  { id: 'natural', text: '自然', targetNote: 'cross', group: '清爽/自然' }
];

// 第 2 輪｜動態子池
export const round2Pools = {
  // 🌸 floral_deep｜觸發：第1輪選了「優雅／浪漫／柔美」
  floral_deep: [
    { id: 'noble', text: '高雅', targetNote: 'floral', group: '優雅/高貴' },
    { id: 'powdery', text: '粉感', targetNote: 'floral', group: '粉感/浪漫' },
    { id: 'feminine', text: '女性', targetNote: 'floral', group: '柔美/女性' },
    { id: 'sweetClean', text: '清甜', targetNote: 'floral', group: '甜感' },
    { id: 'bloom', text: '盛開', targetNote: 'floral', group: '活力/青春' },
    { id: 'mellow', text: '溫潤', targetNote: 'fruity', group: '溫暖/包覆' },
    { id: 'layered', text: '層次', targetNote: 'fruity', group: '沉靜/安定' },
    { id: 'clean', text: '乾淨', targetNote: 'animalic', group: '純淨/乾淨' },
    { id: 'charming', text: '柔媚', targetNote: 'animalic', group: '柔美/女性' },
    { id: 'fireLight', text: '煙火', targetNote: 'woody', group: '溫暖/包覆' },
    { id: 'reserved', text: '內斂', targetNote: 'woody', group: '沉穩/深邃' },
    { id: 'lively', text: '活潑', targetNote: 'fruity', group: '活力/青春' }
  ],

  // 🌲 woody_deep｜觸發：第1輪選了「煙燻／溫暖／成熟」
  woody_deep: [
    { id: 'sandalwood', text: '檀香', targetNote: 'woody', group: '沉穩/深邃' },
    { id: 'serene', text: '靜謐', targetNote: 'woody', group: '沉靜/安定' },
    { id: 'steady', text: '沉穩', targetNote: 'woody', group: '沉靜/安定' },
    { id: 'embracing', text: '包覆', targetNote: 'woody', group: '溫暖/包覆' },
    { id: 'thick', text: '厚實', targetNote: 'woody', group: '沉靜/安定' },
    { id: 'deep', text: '深沉', targetNote: 'animalic', group: '沉穩/深邃' },
    { id: 'leather', text: '皮革', targetNote: 'animalic', group: '濃烈/野性' },
    { id: 'layered2', text: '層次', targetNote: 'fruity', group: '沉靜/安定' },
    { id: 'vintage', text: '復古', targetNote: 'floral', group: '優雅/高貴' },
    { id: 'refreshing', text: '清新', targetNote: 'fruity', group: '清爽/自然' },
    { id: 'sweetFeel', text: '甜感', targetNote: 'fruity', group: '甜感' },
    { id: 'airy', text: '飄逸', targetNote: 'floral', group: '活力/青春' }
  ],

  // 🍊 fruity_deep｜觸發：第1輪選了「清爽／甜美／自然／輕盈」
  fruity_deep: [
    { id: 'fruity', text: '水果', targetNote: 'fruity', group: '清爽/自然' },
    { id: 'juicy', text: '多汁', targetNote: 'fruity', group: '甜感' },
    { id: 'youthful', text: '青春', targetNote: 'fruity', group: '活力/青春' },
    { id: 'bright', text: '明亮', targetNote: 'fruity', group: '明亮' },
    { id: 'playful', text: '俏皮', targetNote: 'fruity', group: '活力/青春' },
    { id: 'elegantLight', text: '清雅', targetNote: 'floral', group: '粉感/浪漫' },
    { id: 'freshNew', text: '清新', targetNote: 'floral', group: '清爽/自然' },
    { id: 'mellowWarm', text: '溫潤', targetNote: 'fruity', group: '溫暖/包覆' },
    { id: 'transparent', text: '透明', targetNote: 'animalic', group: '純淨/乾淨' },
    { id: 'groundedContrast', text: '沉靜', targetNote: 'woody', group: '沉穩/深邃' },
    { id: 'intense', text: '濃烈', targetNote: 'animalic', group: '濃烈/野性' },
    { id: 'ripeContrast', text: '熟成', targetNote: 'fruity', group: '沉靜/安定' }
  ],

  // 🔥 animalic_deep｜觸發：第1輪選了「神秘／純淨」
  animalic_deep: [
    { id: 'blurry', text: '模糊', targetNote: 'animalic', group: '純淨/乾淨' },
    { id: 'minimal', text: '極簡', targetNote: 'animalic', group: '純淨/乾淨' },
    { id: 'cool', text: '冷感', targetNote: 'animalic', group: '自信/現代' },
    { id: 'alluring', text: '魅惑', targetNote: 'animalic', group: '異國/魅惑' },
    { id: 'sweetWarm', text: '甜暖', targetNote: 'animalic', group: '溫暖/包覆' },
    { id: 'deepDark', text: '深沉', targetNote: 'woody', group: '沉穩/深邃' },
    { id: 'exotic', text: '異國', targetNote: 'animalic', group: '異國/魅惑' },
    { id: 'sexy', text: '性感', targetNote: 'animalic', group: '異國/魅惑' },
    { id: 'luxurious', text: '高級', targetNote: 'woody', group: '優雅/高貴' },
    { id: 'freshContrast', text: '清透', targetNote: 'fruity', group: '清爽/自然' },
    { id: 'romanticContrast', text: '柔情', targetNote: 'floral', group: '柔美/女性' },
    { id: 'livelyContrast', text: '活潑', targetNote: 'fruity', group: '活力/青春' }
  ]
};

// 第 3 輪｜精準確認子池
export const round3Pools = {
  // 🌸 floral_confirm
  floral_confirm: [
    { id: 'pureWhite', text: '純白', targetFragrance: [13] }, // Blanche
    { id: 'nobleElegant', text: '貴氣', targetFragrance: [10] }, // Chanel No.5
    { id: 'softGentle', text: '柔軟', targetFragrance: [13, 16] }, // Blanche, Nude
    { id: 'luxuryGrand', text: '奢華', targetFragrance: [9] }, // J'adore
    { id: 'elegantLight2', text: '素雅', targetFragrance: [14] }, // Fleur de Peony
    { id: 'womanly', text: '嫵媚', targetFragrance: [7] }, // L'Interdit
    { id: 'pinkTender', text: '粉嫩', targetFragrance: [14] }, // Fleur de Peony
    { id: 'classic', text: '經典', targetFragrance: [10] }, // Chanel No.5
    { id: 'coldCrisp', text: '冷冽', targetFragrance: [8] }, // Rive Gauche
    { id: 'confident', text: '自信', targetFragrance: [8] }, // Rive Gauche
    { id: 'cleanPure', text: '純粹', targetFragrance: [23] }, // Another 13 (跨調)
    { id: 'mellowRich', text: '醇厚', targetFragrance: [15] } // Mitsouko (跨調)
  ],

  // 🌲 woody_confirm
  woody_confirm: [
    { id: 'sandalwoodPure', text: '木香', targetFragrance: [3] }, // Tam Dao
    { id: 'serenePeace', text: '寧靜', targetFragrance: [3] }, // Tam Dao
    { id: 'fireSide', text: '篝火', targetFragrance: [4] }, // By the Fireplace
    { id: 'thickSolid', text: '紮實', targetFragrance: [1] }, // Polo
    { id: 'highEnd', text: '頂級', targetFragrance: [5] }, // Oud Wood
    { id: 'dryWood', text: '乾燥', targetFragrance: [2] }, // Santal 33
    { id: 'leatherRich', text: '質感', targetFragrance: [26] }, // Tuscan Leather (跨調)
    { id: 'deepProfound', text: '幽深', targetFragrance: [5] }, // Oud Wood
    { id: 'embraceWrap', text: '環繞', targetFragrance: [4] }, // By the Fireplace
    { id: 'stableCalm', text: '安定', targetFragrance: [3] }, // Tam Dao
    { id: 'steadyFirm', text: '穩重', targetFragrance: [1] }, // Polo
    { id: 'reserved', text: '低調', targetFragrance: [2] } // Santal 33
  ],

  // 🍊 fruity_confirm
  fruity_confirm: [
    { id: 'mellowSmooth', text: '圓潤', targetFragrance: [15] }, // Mitsouko
    { id: 'skinClose', text: '肌膚', targetFragrance: [16] }, // Nude
    { id: 'sourSweet', text: '酸甜', targetFragrance: [18] }, // Eden Juicy Apple
    { id: 'cherryRed', text: '櫻桃', targetFragrance: [20] }, // Cherry in the Air
    { id: 'playfulFun', text: '調皮', targetFragrance: [19] }, // Perfect
    { id: 'watery', text: '水感', targetFragrance: [22] }, // Bright Crystal
    { id: 'greenFresh', text: '青綠', targetFragrance: [21] }, // Un Jardin
    { id: 'sweetMoist', text: '甜潤', targetFragrance: [16] }, // Nude
    { id: 'brightShine', text: '閃耀', targetFragrance: [17] }, // L'Imperatrice
    { id: 'layeredRich', text: '豐富', targetFragrance: [15] }, // Mitsouko
    { id: 'juicyFull', text: '飽滿', targetFragrance: [18] }, // Eden Juicy Apple
    { id: 'modernNew', text: '現代', targetFragrance: [19] } // Perfect
  ],

  // 🔥 animalic_confirm
  animalic_confirm: [
    { id: 'blurryVague', text: '朦朧', targetFragrance: [23] }, // Another 13
    { id: 'transparentClear', text: '無形', targetFragrance: [24] }, // Not A Perfume
    { id: 'diffusive', text: '擴散', targetFragrance: [25] }, // BR540
    { id: 'leatherRaw', text: '粗獷', targetFragrance: [26] }, // Tuscan Leather
    { id: 'skinIntimate', text: '親膚', targetFragrance: [27] }, // For Her
    { id: 'spicy', text: '辛香', targetFragrance: [28] }, // Black Saffron
    { id: 'boozy', text: '酒感', targetFragrance: [29] }, // Side Effect
    { id: 'primal', text: '原始', targetFragrance: [30] }, // Muscs
    { id: 'sweetWarmth', text: '暖甜', targetFragrance: [25] }, // BR540
    { id: 'coolCold', text: '冷冽', targetFragrance: [23] }, // Another 13
    { id: 'wild', text: '野性', targetFragrance: [26, 30] }, // Tuscan Leather, Muscs
    { id: 'sexyHot', text: '撩人', targetFragrance: [29] } // Side Effect
  ]
};

// 根據第1輪選擇決定第2輪子池
export function getRound2PoolKey(round1Selection) {
  const floralTriggers = ['elegant', 'romantic', 'soft'];
  const woodyTriggers = ['smoky', 'warm', 'mature'];
  const fruityTriggers = ['fresh', 'sweet', 'natural', 'light'];
  const animalicTriggers = ['mysterious', 'pure'];

  if (floralTriggers.includes(round1Selection)) return 'floral_deep';
  if (woodyTriggers.includes(round1Selection)) return 'woody_deep';
  if (fruityTriggers.includes(round1Selection)) return 'fruity_deep';
  if (animalicTriggers.includes(round1Selection)) return 'animalic_deep';

  return 'floral_deep'; // default
}

// 根據已選香水的調性決定第3輪子池
export function getRound3PoolKey(selectedFragrances, fragranceData) {
  const noteCount = { woody: 0, floral: 0, fruity: 0, animalic: 0 };
  
  selectedFragrances.forEach(id => {
    const frag = fragranceData.find(f => f.id === id);
    if (frag) noteCount[frag.baseNote]++;
  });

  const maxNote = Object.entries(noteCount).reduce((a, b) => 
    b[1] > a[1] ? b : a
  )[0];

  return `${maxNote}_confirm`;
}
