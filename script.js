const words = [
  {
    term: "chorus",
    zh: "副歌",
    role: "歌曲里最重复、最抓耳、最容易跟唱的部分。",
    explanation: "一首歌里最容易记住、最重复、最抓耳的段落。Suno 里常用 catchy chorus 表示副歌要洗脑。",
    example: "Create a catchy chorus with emotional vocals.",
  },
  {
    term: "verse",
    zh: "主歌",
    role: "负责讲故事、铺垫情绪，通常比副歌更平稳。",
    explanation: "负责讲故事、铺垫情绪的段落。主歌通常比副歌更平稳。",
    example: "Start with a soft verse and build into a powerful chorus.",
  },
  {
    term: "tempo",
    zh: "速度",
    role: "描述音乐快慢。slow tempo 是慢速，fast tempo 是快速。",
    explanation: "音乐快慢的感觉，常和 BPM 一起出现。slow tempo 是慢速，upbeat 通常表示更轻快。",
    example: "A slow tempo piano ballad with warm vocals.",
  },
  {
    term: "melody",
    zh: "旋律",
    role: "你能哼出来的那条音乐线。",
    explanation: "你能哼出来的那条线。好记的旋律可以写成 memorable melody。",
    example: "Use a memorable melody and a gentle acoustic guitar.",
  },
  {
    term: "rhythm",
    zh: "节奏",
    role: "声音在时间里的排列方式，决定摇摆、跳舞、平稳或紧张。",
    explanation: "声音在时间里的排列方式。节奏决定一首歌是摇摆、跳舞、平稳还是紧张。",
    example: "Add a dance rhythm with tight drums and bass.",
  },
  {
    term: "bridge",
    zh: "桥段",
    role: "让歌曲中途换一下感觉，制造转折和新鲜感。",
    explanation: "连接主歌和副歌之外的变化段落，常用来制造新鲜感或情绪转折。",
    example: "Add a dreamy bridge before the final chorus.",
  },
  {
    term: "hook",
    zh: "记忆点",
    role: "让人一下记住的旋律、歌词或节奏。",
    explanation: "让人一下记住的旋律、歌词或节奏。Suno 里 hook 很适合表达“要抓耳”。",
    example: "Make the vocal hook simple, catchy, and emotional.",
  },
  {
    term: "instrumental",
    zh: "纯音乐",
    role: "没有歌词或主唱人声，适合做背景音乐或器乐曲。",
    explanation: "没有歌词或人声主唱的音乐。想让 Suno 不唱歌时常用这个词。",
    example: "Create an instrumental cinematic track with epic drums.",
  },
  {
    term: "vocal",
    zh: "人声",
    role: "歌里唱出来的声音。female vocals 是女声，male vocals 是男声。",
    explanation: "vocal 指人声，Suno 里经常用 female vocals、male vocals、soft vocals 来控制演唱感觉。",
    example: "Use warm female vocals with a gentle melody.",
  },
  {
    term: "BPM",
    zh: "每分钟拍数",
    role: "用数字描述速度。70 BPM 偏慢，120 BPM 更适合跳舞。",
    explanation: "BPM 是 beats per minute，每分钟有多少拍。它能更精确地控制歌曲速度。",
    example: "A dance pop track at 120 BPM with a strong rhythm.",
  },
  {
    term: "chord",
    zh: "和弦",
    role: "几个音一起响，形成歌曲的情绪底色。",
    explanation: "chord 是和弦。Suno 里可以用 emotional chord progression 表达有情绪的和弦进行。",
    example: "Use emotional chords and a memorable melody.",
  },
  {
    term: "arrangement",
    zh: "编曲",
    role: "安排乐器、人声、段落和能量变化。",
    explanation: "arrangement 是编曲，决定钢琴、鼓、贝斯、弦乐等元素怎么进入歌曲。",
    example: "A rich arrangement with piano, strings, drums, and bass.",
  },
  {
    term: "prompt",
    zh: "提示词",
    role: "告诉 Suno 你想要什么歌：风格、情绪、人声、乐器和结构。",
    explanation: "prompt 是提示词。写得越清楚，Suno 越容易生成接近你想象的歌曲。",
    example: "A melancholic pop ballad with soft piano and emotional female vocals.",
  },
  {
    term: "lyrics",
    zh: "歌词",
    role: "歌曲里唱出来的文字，可以包含 verse、chorus、bridge 等段落标记。",
    explanation: "lyrics 是歌词。Suno 里你可以自己写歌词，也可以让它自动生成。",
    example: "[Verse] I walk through the rain. [Chorus] I still remember your name.",
  },
  {
    term: "style",
    zh: "风格",
    role: "控制歌曲听起来像什么类型，比如 pop、folk、R&B、cinematic。",
    explanation: "style 是风格。它通常和情绪、人声、乐器一起写，形成更准确的声音方向。",
    example: "Style: cinematic pop, emotional vocals, piano, strings.",
  },
  {
    term: "create",
    zh: "创建/生成",
    role: "开始让 Suno 生成歌曲的动作。",
    explanation: "create 是创建。填好 prompt、lyrics、style 之后，通常就会点击 create 生成歌曲。",
    example: "Click Create after writing a clear style prompt.",
  },
  {
    term: "upload",
    zh: "上传",
    role: "把音频素材传进去，让 Suno 参考或继续创作。",
    explanation: "upload 是上传。它适合把自己的旋律、哼唱或音频片段作为起点。",
    example: "Upload audio to guide the melody and rhythm.",
  },
  {
    term: "cover",
    zh: "翻唱/改编",
    role: "用新的声音或风格重新演绎已有歌曲或片段。",
    explanation: "cover 在音乐里常指翻唱或改编。Suno 功能语境里可理解为改变演唱或风格方向。",
    example: "Create a soft acoustic cover with warm male vocals.",
  },
  {
    term: "extend",
    zh: "延长",
    role: "把已有片段继续往后生成，做成更完整的歌曲。",
    explanation: "extend 是延长。适合你已经有一段满意的旋律或副歌，想让它继续发展。",
    example: "Extend the chorus into a full final section.",
  },
  {
    term: "remix",
    zh: "混音/重制",
    role: "保留一部分想法，用新的节奏、音色或风格重新制作。",
    explanation: "remix 是混音或重制。常用于把歌曲变成舞曲版、Lo-fi 版、电影感版本。",
    example: "Remix this into an upbeat electronic version.",
  },
  {
    term: "persona",
    zh: "声音角色",
    role: "可以理解为某种声音身份或演唱角色，用来保持声音风格一致。",
    explanation: "persona 是角色或人格。在 AI 音乐工具里，它常用于让声音或演唱风格更稳定。",
    example: "Use a warm vocal persona for this song.",
  },
  {
    term: "library",
    zh: "作品库",
    role: "保存你生成过的歌曲、草稿和版本。",
    explanation: "library 是作品库。你可以在这里回看、继续编辑或整理生成结果。",
    example: "Open the library to find previous generations.",
  },
  {
    term: "visibility",
    zh: "可见性",
    role: "控制作品是公开、私密，还是仅自己可见。",
    explanation: "visibility 是可见性。发布或分享歌曲前，需要注意作品是否公开。",
    example: "Set visibility to private while testing ideas.",
  },
  {
    term: "variation",
    zh: "变体",
    role: "同一个想法生成不同版本，方便挑选最满意的结果。",
    explanation: "variation 是变体。Suno 这类工具常会让你比较多个版本。",
    example: "Generate variations with a stronger chorus.",
  },
];

const quizzes = [
  {
    question: "歌曲里最抓耳、最重复、最容易跟唱的部分通常叫？",
    options: ["chorus", "tempo", "bass", "outro"],
    answer: "chorus",
    note: "chorus 是副歌，Suno prompt 里可以写 catchy chorus。",
  },
  {
    question: "想表达“慢速钢琴情歌”，哪个词最关键？",
    options: ["slow tempo", "glitch", "drop", "spoken word"],
    answer: "slow tempo",
    note: "tempo 是速度，slow tempo 就是慢速。",
  },
  {
    question: "melody 指的是？",
    options: ["旋律", "歌词", "音量", "封面"],
    answer: "旋律",
    note: "melody 是你能哼出来的旋律线。",
  },
  {
    question: "想让歌曲没有人声，应该使用？",
    options: ["instrumental", "vocal", "duet", "rap verse"],
    answer: "instrumental",
    note: "instrumental 表示纯音乐或器乐版本。",
  },
];

const builderGroups = [
  {
    label: "风格",
    key: "genre",
    choices: [
      ["流行", "pop"],
      ["民谣", "folk"],
      ["电影感", "cinematic"],
      ["Lo-fi", "lo-fi"],
    ],
  },
  {
    label: "情绪",
    key: "mood",
    choices: [
      ["伤感", "sad"],
      ["温暖", "warm"],
      ["史诗", "epic"],
      ["轻快", "upbeat"],
    ],
  },
  {
    label: "人声",
    key: "vocal",
    choices: [
      ["女声", "female vocals"],
      ["男声", "male vocals"],
      ["柔和人声", "soft vocals"],
      ["无", "instrumental"],
    ],
  },
  {
    label: "乐器",
    key: "instrument",
    choices: [
      ["钢琴", "piano"],
      ["木吉他", "acoustic guitar"],
      ["合成器", "synth"],
      ["弦乐", "strings"],
    ],
  },
  {
    label: "重点",
    key: "focus",
    choices: [
      ["抓耳副歌", "a catchy chorus"],
      ["好记旋律", "a memorable melody"],
      ["强节奏", "a strong rhythm"],
      ["情绪递进", "an emotional build-up"],
    ],
  },
];

const workshopGroups = [
  {
    label: "创作目标",
    key: "goal",
    formula: "song goal",
    choices: [
      ["完整歌曲", "a complete song"],
      ["副歌灵感", "a catchy chorus idea"],
      ["纯音乐", "an instrumental track"],
      ["短视频配乐", "a short-form background track"],
    ],
  },
  {
    label: "风格",
    key: "genre",
    formula: "genre",
    choices: [
      ["流行", "pop"],
      ["民谣", "folk"],
      ["R&B", "R&B"],
      ["电影感", "cinematic"],
      ["电子", "electronic"],
      ["Lo-fi", "lo-fi"],
    ],
  },
  {
    label: "情绪",
    key: "mood",
    formula: "mood",
    choices: [
      ["伤感", "melancholic"],
      ["温暖", "warm and hopeful"],
      ["孤独", "lonely and intimate"],
      ["史诗", "epic and uplifting"],
      ["梦幻", "dreamy"],
      ["轻快", "upbeat"],
    ],
  },
  {
    label: "节奏/速度",
    key: "rhythm",
    formula: "tempo + rhythm",
    choices: [
      ["慢速 70 BPM", "slow tempo around 70 BPM"],
      ["中速 95 BPM", "mid-tempo around 95 BPM"],
      ["舞曲 120 BPM", "dance rhythm around 120 BPM"],
      ["强律动", "strong groove with tight drums"],
      ["半拍感", "half-time rhythm"],
    ],
  },
  {
    label: "旋律",
    key: "melody",
    formula: "melody",
    choices: [
      ["好记", "a memorable melody"],
      ["抓耳 Hook", "a simple catchy vocal hook"],
      ["流动感", "a flowing melodic line"],
      ["情绪递进", "a melody that gradually builds emotion"],
      ["留白", "minimal melody with space"],
    ],
  },
  {
    label: "和声/和弦",
    key: "harmony",
    formula: "harmony",
    choices: [
      ["温柔和弦", "soft warm chords"],
      ["伤感和弦", "emotional minor chord progression"],
      ["明亮和弦", "bright major chords"],
      ["电影和声", "cinematic harmonic movement"],
      ["简单循环", "simple four-chord progression"],
    ],
  },
  {
    label: "人声",
    key: "vocal",
    formula: "vocal",
    choices: [
      ["女声", "emotional female vocals"],
      ["男声", "warm male vocals"],
      ["轻柔人声", "soft intimate vocals"],
      ["说唱段落", "a rhythmic rap verse"],
      ["无主唱", "no lead vocals"],
    ],
  },
  {
    label: "音色/乐器",
    key: "timbre",
    formula: "timbre",
    choices: [
      ["钢琴", "soft piano"],
      ["木吉他", "acoustic guitar"],
      ["合成器", "warm analog synths"],
      ["弦乐", "cinematic strings"],
      ["鼓和贝斯", "punchy drums and deep bass"],
    ],
  },
  {
    label: "歌曲结构",
    key: "structure",
    formula: "structure",
    choices: [
      ["完整流行结构", "intro, verse, pre-chorus, chorus, bridge, final chorus, outro"],
      ["副歌更强", "a chorus that feels bigger than the verse"],
      ["前奏铺垫", "a short intro that builds anticipation"],
      ["桥段转折", "a bridge with a clear emotional shift"],
      ["尾奏收束", "a gentle outro"],
    ],
  },
  {
    label: "制作感",
    key: "production",
    formula: "production",
    choices: [
      ["干净现代", "clean modern production"],
      ["现场感", "live band feeling"],
      ["空间感", "wide atmospheric reverb"],
      ["电台质感", "radio-ready mix"],
      ["复古", "slightly vintage texture"],
    ],
  },
  {
    label: "避免项",
    key: "avoid",
    formula: "negative prompt",
    choices: [
      ["不要太吵", "avoid harsh noisy sounds"],
      ["不要说唱", "avoid rap vocals"],
      ["不要太快", "avoid fast tempo"],
      ["不要失真", "avoid heavy distortion"],
      ["不要复杂", "avoid overly complex arrangement"],
    ],
  },
];

const lessonPromptPresets = [
  { structure: "intro, verse, pre-chorus, chorus, bridge, final chorus, outro" },
  { rhythm: "mid-tempo around 95 BPM" },
  { melody: "a memorable melody", harmony: "emotional minor chord progression" },
  { timbre: "soft piano", production: "clean modern production" },
  { goal: "a complete song", structure: "a chorus that feels bigger than the verse" },
];

const promptQuests = [
  {
    level: 3,
    title: "伤感钢琴女声情歌",
    text: "做一首慢速、伤感、钢琴为主、女声演唱、副歌要抓耳的歌。",
    required: ["melancholic", "slow tempo around 70 BPM", "emotional female vocals", "soft piano", "a simple catchy vocal hook"],
    preset: {
      goal: "a complete song",
      genre: "pop",
      mood: "melancholic",
      rhythm: "slow tempo around 70 BPM",
      melody: "a simple catchy vocal hook",
      harmony: "emotional minor chord progression",
      vocal: "emotional female vocals",
      timbre: "soft piano",
      structure: "a chorus that feels bigger than the verse",
      production: "clean modern production",
      avoid: "avoid fast tempo",
    },
  },
  {
    level: 6,
    title: "电影感史诗配乐",
    text: "做一首电影感、史诗、弦乐明显、空间感强、没有主唱的纯音乐。",
    required: ["cinematic", "epic and uplifting", "cinematic strings", "wide atmospheric reverb", "no lead vocals"],
    preset: {
      goal: "an instrumental track",
      genre: "cinematic",
      mood: "epic and uplifting",
      rhythm: "mid-tempo around 95 BPM",
      melody: "a melody that gradually builds emotion",
      harmony: "cinematic harmonic movement",
      vocal: "no lead vocals",
      timbre: "cinematic strings",
      structure: "a short intro that builds anticipation",
      production: "wide atmospheric reverb",
      avoid: "avoid rap vocals",
    },
  },
  {
    level: 9,
    title: "Lo-fi 学习背景音乐",
    text: "做一首温暖、松弛、Lo-fi、没有主唱、适合学习时循环播放的背景音乐。",
    required: ["lo-fi", "warm and hopeful", "an instrumental track", "minimal melody with space", "slightly vintage texture"],
    preset: {
      goal: "an instrumental track",
      genre: "lo-fi",
      mood: "warm and hopeful",
      rhythm: "mid-tempo around 95 BPM",
      melody: "minimal melody with space",
      harmony: "soft warm chords",
      vocal: "no lead vocals",
      timbre: "warm analog synths",
      structure: "a gentle outro",
      production: "slightly vintage texture",
      avoid: "avoid harsh noisy sounds",
    },
  },
];

const chapters = [
  { name: "结构森林", icon: "1", range: "1-2", start: 1, end: 2 },
  { name: "节奏山谷", icon: "2", range: "3-4", start: 3, end: 4 },
  { name: "旋律湖", icon: "3", range: "5-6", start: 5, end: 6 },
  { name: "和弦塔", icon: "4", range: "7-8", start: 7, end: 8 },
  { name: "Suno 城堡", icon: "5", range: "9+", start: 9, end: 99 },
];

const sunoNavItems = [
  ["C", "Create", "生成歌曲的入口"],
  ["L", "Library", "查看生成过的作品"],
  ["V", "Voices", "管理声音或演唱角色"],
  ["U", "Upload", "上传音频作为参考"],
  ["R", "Remix", "把已有想法重制成新版本"],
  ["E", "Extend", "继续延长一段满意的音乐"],
];

const sunoTrainingSteps = [
  {
    term: "Create",
    meaning: "创建歌曲。进入这里后，你通常会填写 prompt、lyrics、style，然后生成音乐。",
    example: "Create a complete song with emotional female vocals.",
    prompt: "A warm pop song about finding courage, with a catchy chorus.",
    page: "Create",
    mode: "Simple Mode",
  },
  {
    term: "Prompt",
    meaning: "提示词。用英文告诉 Suno：你要什么风格、情绪、人声、乐器、节奏和结构。",
    example: "A melancholic piano ballad with emotional female vocals and a catchy chorus.",
    prompt: "A melancholic piano ballad with emotional female vocals and a catchy chorus.",
    page: "Create",
    mode: "Prompt",
  },
  {
    term: "Lyrics",
    meaning: "歌词。可以写完整歌词，也可以用 [Verse]、[Chorus]、[Bridge] 标记段落。",
    example: "[Verse] The city lights are fading. [Chorus] I still hear your song.",
    prompt: "[Verse] The city lights are fading. [Chorus] I still hear your song.",
    page: "Lyrics",
    mode: "Custom Lyrics",
  },
  {
    term: "Style",
    meaning: "风格。这里适合写 pop、R&B、cinematic、lo-fi，也能补充 vocals、piano、BPM。",
    example: "Style: cinematic pop, soft piano, strings, warm female vocals, 95 BPM.",
    prompt: "cinematic pop, soft piano, strings, warm female vocals, 95 BPM",
    page: "Style",
    mode: "Style Prompt",
  },
  {
    term: "Instrumental",
    meaning: "纯音乐开关。打开后，重点生成器乐，不以歌词和主唱为中心。",
    example: "An instrumental cinematic track with epic drums and strings.",
    prompt: "An instrumental cinematic track with epic drums and strings.",
    page: "Create",
    mode: "Instrumental",
  },
  {
    term: "Upload Audio",
    meaning: "上传音频。你可以用自己的哼唱、旋律或片段作为创作参考。",
    example: "Upload a melody idea, then extend it into a full song.",
    prompt: "Use uploaded audio as melodic inspiration, then build a full pop arrangement.",
    page: "Upload",
    mode: "Audio Reference",
  },
  {
    term: "Extend",
    meaning: "延长。对已经满意的片段继续生成，让它发展成完整结构。",
    example: "Extend this chorus into a bridge and final chorus.",
    prompt: "Extend this chorus into a bridge and final chorus with bigger drums.",
    page: "Extend",
    mode: "Continue Song",
  },
  {
    term: "Library",
    meaning: "作品库。这里用来找回你生成过的歌曲、版本和草稿。",
    example: "Open Library and compare different variations.",
    prompt: "Compare variations and keep the version with the strongest hook.",
    page: "Library",
    mode: "Saved Songs",
  },
];

const flowTasks = [
  {
    title: "做一首伤感钢琴女声情歌",
    text: "目标是从中文想法出发，写出提示词、歌词结构，再生成并挑选最好的版本。",
    steps: ["写需求", "选风格", "写歌词", "生成歌曲", "挑选版本", "延长高潮"],
  },
  {
    title: "做一首电影感纯音乐",
    text: "目标是避开主唱，重点控制氛围、乐器、结构和画面感。",
    steps: ["写需求", "选择纯音乐", "选风格", "上传参考", "生成歌曲", "延长结尾"],
  },
  {
    title: "做一首 Lo-fi 学习背景音乐",
    text: "目标是让音乐循环耐听，不要太吵，也不要抢注意力。",
    steps: ["写需求", "选择纯音乐", "选风格", "生成歌曲", "挑选版本", "保存作品"],
  },
];

const flowStepInfo = {
  写需求: "先用中文想清楚：情绪、用途、风格、人声、乐器。",
  选风格: "把中文需求变成 style prompt，比如 pop、cinematic、lo-fi。",
  写歌词: "用 [Verse] [Chorus] [Bridge] 组织歌词。",
  生成歌曲: "确认 prompt、lyrics、style 后生成。",
  挑选版本: "比较 variation，保留 hook 最强的一版。",
  延长高潮: "用 Extend 把满意片段继续发展。",
  选择纯音乐: "打开 instrumental，让歌曲不要主唱。",
  上传参考: "上传哼唱、旋律或节奏作为参考。",
  延长结尾: "用 Extend 做更完整的尾奏。",
  保存作品: "放入 Library，方便之后继续改。",
};

const lyricSections = ["[Verse]", "[Chorus]", "[Bridge]", "[Outro]"];
const lyricTemplate = `[Verse]
City lights are fading slow
I hear your voice in every note

[Chorus]
Hold me through the midnight rain
Turn this silence into flame

[Bridge]
If the melody breaks apart
I will follow the beat of my heart

[Outro]
Let the final chorus glow`;

const lessons = [
  {
    title: "Level 1 歌曲结构",
    text: "先听懂歌曲分段：intro 是前奏，verse 是主歌，chorus 是副歌，bridge 是桥段，outro 是尾奏。",
    words: ["intro 前奏", "verse 主歌", "chorus 副歌", "bridge 桥段", "outro 尾奏"],
  },
  {
    title: "Level 2 节奏与速度",
    text: "tempo 决定快慢，rhythm 决定节奏形状，beat 是拍点，BPM 是每分钟拍数。",
    words: ["tempo 速度", "rhythm 节奏", "beat 拍点", "BPM 每分钟拍数", "groove 律动"],
  },
  {
    title: "Level 3 旋律与和声",
    text: "melody 是你能哼出来的旋律，chord 是和弦，harmony 是多个音一起形成的色彩。",
    words: ["melody 旋律", "chord 和弦", "harmony 和声", "key 调性", "progression 进行"],
  },
  {
    title: "Level 4 音色与编曲",
    text: "编曲就是安排谁来演奏。drums、bass、piano、synth、strings 会决定歌曲听起来像什么。",
    words: ["drums 鼓", "bass 低音", "synth 合成器", "strings 弦乐", "arrangement 编曲"],
  },
  {
    title: "Level 5 Suno 完整表达",
    text: "把风格、情绪、人声、乐器、结构组合起来，就能写出更清楚的 Suno 英文提示词。",
    words: ["genre 风格", "mood 情绪", "vocal 人声", "catchy 抓耳", "build-up 递进"],
  },
];

const $ = (selector) => document.querySelector(selector);

let wordIndex = 0;
let quizIndex = 0;
let lessonIndex = 0;
let score = 0;
let learned = new Set();
let selections = {};
let workshopSelections = {
  goal: "a complete song",
  genre: "pop",
  mood: "warm and hopeful",
  rhythm: "mid-tempo around 95 BPM",
  melody: "a memorable melody",
  harmony: "soft warm chords",
  vocal: "emotional female vocals",
  timbre: "soft piano",
  structure: "intro, verse, pre-chorus, chorus, bridge, final chorus, outro",
  production: "clean modern production",
  avoid: "avoid harsh noisy sounds",
};
let lives = 5;
let combo = 0;
let battleLevel = 1;
let monsterIndex = 0;
let monsterHp = 1;
let maxMonsterHp = 1;
let mistakes = [];
let reviewMode = false;
let revealedMonsterTerm = "";
let activePromptQuest = null;
let completedQuestLevels = new Set();
let listeningMode = false;
let sunoStepIndex = 0;
let flowTaskIndex = 0;
let flowProgress = 0;

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function speak(text, lang = "en-US") {
  if (!("speechSynthesis" in window)) {
    $("#battleLog").textContent = "当前浏览器不支持语音朗读，可以继续用文字模式练习。";
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = lang === "en-US" ? 0.82 : 0.95;
  window.speechSynthesis.speak(utterance);
}

function speakWordData(word) {
  speak(`${word.term}. ${word.zh}. ${word.role}`, "en-US");
}

function updatePromptQuest() {
  activePromptQuest = promptQuests.find((quest) =>
    quest.level === battleLevel && !completedQuestLevels.has(quest.level)
  ) || null;

  $("#promptQuest").className = activePromptQuest ? "prompt-quest active" : "prompt-quest";
  if (!activePromptQuest) {
    $("#questTitle").textContent = "";
    $("#questText").textContent = "";
    return;
  }
  $("#questTitle").textContent = `第 ${activePromptQuest.level} 关：${activePromptQuest.title}`;
  $("#questText").textContent = `当前目标：${activePromptQuest.text} 这关不是背单词，而是练“怎么把中文需求变成 Suno 英文提示词”。`;
}

function renderChapterMap() {
  $("#chapterMap").innerHTML = "";
  chapters.forEach((chapter) => {
    const node = document.createElement("div");
    const isActive = battleLevel >= chapter.start && battleLevel <= chapter.end;
    const isDone = battleLevel > chapter.end;
    node.className = `chapter-node${isActive ? " active" : ""}${isDone ? " done" : ""}`;
    node.innerHTML = `
      <span class="chapter-icon">${chapter.icon}</span>
      <strong>${chapter.name}</strong>
      <span>第 ${chapter.range} 关</span>
    `;
    $("#chapterMap").appendChild(node);
  });
}

function renderSunoSimulator() {
  const step = sunoTrainingSteps[sunoStepIndex];
  $("#simSidebar").innerHTML = "";
  sunoNavItems.forEach(([icon, label, note]) => {
    const item = document.createElement("div");
    item.className = step.page === label ? "sim-nav-item active" : "sim-nav-item";
    item.innerHTML = `<span class="sim-icon">${icon}</span><span><strong>${label}</strong><small>${note}</small></span>`;
    $("#simSidebar").appendChild(item);
  });
  $("#simPageTitle").textContent = step.page;
  $("#simModeLabel").textContent = step.mode;
  $("#simPrompt").textContent = step.prompt;
  $("#simTerm").textContent = step.term;
  $("#simMeaning").textContent = step.meaning;
  $("#simExample").textContent = step.example;
}

function renderFlowTrainer() {
  const task = flowTasks[flowTaskIndex];
  $("#flowTaskTitle").textContent = task.title;
  $("#flowTaskText").textContent = task.text;
  $("#flowBoard").innerHTML = "";
  task.steps.forEach((step, index) => {
    const card = document.createElement("div");
    card.className = `flow-step${index === flowProgress ? " active" : ""}`;
    card.innerHTML = `
      <strong>${index + 1}. ${step}</strong>
      <small>${flowStepInfo[step]}</small>
      <button type="button">${index < flowProgress ? "已完成" : index === flowProgress ? "完成这步" : "未到达"}</button>
    `;
    const button = card.querySelector("button");
    button.disabled = index !== flowProgress;
    button.addEventListener("click", () => {
      flowProgress = Math.min(flowProgress + 1, task.steps.length);
      score += 4;
      $("#flowFeedback").textContent = flowProgress >= task.steps.length
        ? `流程完成：${task.title}。你已经走完一次 Suno 制作歌曲的完整路径。`
        : `完成一步：${step}。下一步是 ${task.steps[flowProgress]}。`;
      renderScore();
      renderFlowTrainer();
    });
    $("#flowBoard").appendChild(card);
  });
  if (!$("#flowFeedback").textContent) {
    $("#flowFeedback").textContent = "按顺序完成流程，训练自己进入 Suno 后该先做什么、后做什么。";
  }
}

function renderLyricsTrainer() {
  $("#lyricsChecklist").innerHTML = "";
  const text = $("#lyricsInput").value;
  lyricSections.forEach((section) => {
    const item = document.createElement("div");
    const done = text.includes(section);
    item.className = `lyric-check${done ? " done" : ""}`;
    item.innerHTML = `<span>${section}</span><strong>${done ? "已出现" : "缺少"}</strong>`;
    $("#lyricsChecklist").appendChild(item);
  });
}

function checkLyricsStructure() {
  renderLyricsTrainer();
  const text = $("#lyricsInput").value;
  const missing = lyricSections.filter((section) => !text.includes(section));
  if (missing.length === 0) {
    score += 12;
    $("#lyricsFeedback").textContent = "歌词结构完整：主歌、副歌、桥段和尾奏都有了，可以放进 Suno 的 lyrics 区域。";
  } else {
    $("#lyricsFeedback").textContent = `还缺少 ${missing.join(" / ")}。Suno 更容易理解带段落标记的歌词。`;
  }
  renderScore();
}

function getCurrentMonster() {
  if (reviewMode && mistakes.length > 0) {
    return mistakes[0];
  }
  return words[monsterIndex % words.length];
}

function buildBattleOptions(answerWord) {
  const wrongOptions = shuffle(words.filter((word) => word.term !== answerWord.term))
    .slice(0, 3)
    .map((word) => word.zh);
  return shuffle([answerWord.zh, ...wrongOptions]);
}

function renderAdventure() {
  const monster = getCurrentMonster();
  updatePromptQuest();
  renderChapterMap();
  maxMonsterHp = 1;
  monsterHp = Math.min(monsterHp, maxMonsterHp);

  const shouldHideTerm = listeningMode && revealedMonsterTerm !== monster.term;
  $("#monsterTerm").textContent = shouldHideTerm ? "听声音" : monster.term;
  $("#monsterHint").textContent = reviewMode
    ? "错题怪出现了。先别看答案，重新选一次中文意思。"
    : listeningMode
      ? "听力模式已开启。先听读音，不看英文，直接选择中文意思。"
      : "英文单词已出现。先听读音，再选择它的中文意思。";
  $("#answerReveal").textContent = revealedMonsterTerm === monster.term
    ? `答案：${monster.zh}。${monster.role}`
    : "";
  $("#monsterHpBar").style.setProperty("--monster-hp", `${(monsterHp / maxMonsterHp) * 100}%`);
  $("#heroStatus").textContent = `第 ${battleLevel} 关`;
  $("#battleStage").textContent = `第 ${battleLevel} 关`;
  $("#princessStatus").textContent = battleLevel >= 8 ? "城门已经看见了" : "还在城堡里等待";
  $("#roadStep").style.setProperty("--road-progress", `${Math.min(8 + battleLevel * 10, 92)}%`);

  $("#battleOptions").innerHTML = "";
  buildBattleOptions(monster).forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = option;
    button.disabled = Boolean(activePromptQuest);
    button.addEventListener("click", () => answerMonster(option));
    $("#battleOptions").appendChild(button);
  });

  $("#battleLog").className = activePromptQuest ? "battle-log locked" : "battle-log";
  if (activePromptQuest) {
    const currentLog = $("#battleLog").textContent;
    $("#battleLog").textContent = currentLog.startsWith("答对！")
      ? `${currentLog} 关卡门锁住了：这是 Suno 创作任务。先点“1 自动填入工坊”，看系统怎么拼英文提示词；再点“2 检查并解锁”。`
      : `关卡门锁住了：这是 Suno 创作任务。先点“1 自动填入工坊”，看系统怎么拼英文提示词；再点“2 检查并解锁”。`;
  }
}

function answerMonster(option) {
  if (activePromptQuest) {
    $("#battleLog").textContent = `先完成提示词任务：${activePromptQuest.title}。第一步点“1 自动填入工坊”，第二步点“2 检查并解锁”。`;
    return;
  }
  const monster = getCurrentMonster();
  if (option === monster.zh) {
    monsterHp -= 1;
    combo += 1;
    score += 12 + combo;
    learned.add(monster.term);
    const explanation = `答对！${monster.term} = ${monster.zh}。${monster.role}`;
    $("#battleLog").textContent = explanation;
    speakWordData(monster);

    if (reviewMode && mistakes.length > 0) {
      mistakes.shift();
      reviewMode = mistakes.length > 0;
    }

    if (monsterHp <= 0) {
      battleLevel += 1;
      monsterIndex += 1;
      monsterHp = 1;
      revealedMonsterTerm = "";
      const nextMessage = battleLevel >= 9
        ? "你救出了公主！可以重新开始，也可以继续刷单词怪。"
        : `过关！下一只单词怪出现了。`;
      $("#battleLog").textContent = `${explanation} ${nextMessage}`;
    }
  } else {
    lives -= 1;
    combo = 0;
    if (!mistakes.some((word) => word.term === monster.term)) {
      mistakes.push(monster);
    }
    revealedMonsterTerm = monster.term;
    $("#battleLog").textContent = `受伤了。正确答案是 ${monster.zh}。这个词已经进入错题练习。`;
    speakWordData(monster);
    if (lives <= 0) {
      $("#battleLog").textContent = "生命值归零，王子回到起点。错题还保留着，适合马上复习。";
      lives = 5;
      combo = 0;
      battleLevel = 1;
      monsterIndex = 0;
      monsterHp = 1;
    }
  }
  renderScore();
  renderAdventure();
  if (listeningMode && !activePromptQuest) {
    setTimeout(() => speak(getCurrentMonster().term, "en-US"), 350);
  }
}

function renderWord() {
  const word = words[wordIndex];
  $("#term").textContent = word.term;
  $("#translation").textContent = word.zh;
  $("#explanation").textContent = word.explanation;
  $("#example").textContent = word.example;
}

function renderQuiz() {
  const quiz = quizzes[quizIndex];
  $("#quizQuestion").textContent = quiz.question;
  $("#feedback").textContent = "";
  $("#answers").innerHTML = "";
  quiz.options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => answerQuiz(option));
    $("#answers").appendChild(button);
  });
}

function answerQuiz(option) {
  const quiz = quizzes[quizIndex];
  const correct = option === quiz.answer;
  if (correct) {
    score += 10;
    combo += 1;
    $("#feedback").textContent = `答对了：${quiz.note}`;
  } else {
    lives = Math.max(1, lives - 1);
    combo = 0;
    $("#feedback").textContent = `再想一下：正确答案是 ${quiz.answer}。${quiz.note}`;
  }
  renderScore();
}

function renderBuilder() {
  $("#builderGrid").innerHTML = "";
  builderGroups.forEach((group) => {
    const wrapper = document.createElement("div");
    wrapper.className = "builder-group";
    const title = document.createElement("strong");
    title.textContent = group.label;
    const row = document.createElement("div");
    row.className = "choice-row";

    group.choices.forEach(([zh, en]) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = zh;
      button.className = selections[group.key] === en ? "active" : "";
      button.addEventListener("click", () => {
        selections[group.key] = en;
        renderBuilder();
        renderPrompt();
      });
      row.appendChild(button);
    });

    wrapper.append(title, row);
    $("#builderGrid").appendChild(wrapper);
  });
  renderPrompt();
}

function renderPrompt() {
  const genre = selections.genre || "pop";
  const mood = selections.mood || "warm";
  const vocal = selections.vocal || "soft vocals";
  const instrument = selections.instrument || "piano";
  const focus = selections.focus || "a catchy chorus";
  const vocalPart = vocal === "instrumental" ? "instrumental" : `with ${vocal}`;
  $("#promptText").textContent = `A ${mood} ${genre} song ${vocalPart}, featuring ${instrument} and ${focus}.`;
}

function renderWorkshop() {
  $("#promptFormula").innerHTML = "";
  workshopGroups.forEach((group) => {
    const chip = document.createElement("span");
    chip.className = "formula-chip";
    chip.textContent = group.formula;
    $("#promptFormula").appendChild(chip);
  });

  $("#workshopGrid").innerHTML = "";
  workshopGroups.forEach((group) => {
    const wrapper = document.createElement("div");
    wrapper.className = "workshop-group";
    const title = document.createElement("strong");
    title.textContent = group.label;
    const row = document.createElement("div");
    row.className = "workshop-row";

    group.choices.forEach(([zh, en]) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = zh;
      button.className = workshopSelections[group.key] === en ? "active" : "";
      button.addEventListener("click", () => {
        workshopSelections[group.key] = en;
        renderWorkshop();
      });
      row.appendChild(button);
    });

    wrapper.append(title, row);
    $("#workshopGrid").appendChild(wrapper);
  });
  renderFinalPrompt();
}

function renderFinalPrompt() {
  const s = workshopSelections;
  const vocalLine = s.vocal === "no lead vocals" ? "with no lead vocals" : `with ${s.vocal}`;
  const prompt = [
    `Create ${s.goal}: ${s.mood} ${s.genre}`,
    `${s.rhythm}`,
    `${vocalLine}`,
    `featuring ${s.timbre}`,
    `${s.melody}`,
    `${s.harmony}`,
    `song structure: ${s.structure}`,
    `${s.production}`,
    `${s.avoid}`,
  ].join(", ") + ".";

  $("#finalPrompt").textContent = prompt;
  $("#promptChinese").textContent =
    `目标：${s.goal}。风格/情绪：${s.mood} ${s.genre}。节奏：${s.rhythm}。人声：${s.vocal}。音色：${s.timbre}。旋律：${s.melody}。和声：${s.harmony}。结构：${s.structure}。制作：${s.production}。避免：${s.avoid}。`;
  $("#promptFocus").textContent =
    "先确定风格和情绪，再补节奏、旋律、音色。最后用 structure 控制段落，用 avoid 告诉 Suno 不要往哪个方向跑。";
}

function applyQuestToWorkshop() {
  if (!activePromptQuest) {
    $("#promptFocus").textContent = "当前还没有提示词任务关。继续打到第 3、6、9 关会出现任务。";
    return;
  }
  workshopSelections = {
    ...workshopSelections,
    ...activePromptQuest.preset,
  };
  renderWorkshop();
  $("#battleLog").textContent = `已把“${activePromptQuest.title}”自动填入下面的 Suno 提示词工坊。你可以往下看英文 prompt，再点“2 检查并解锁”。`;
  $("#promptFocus").textContent = `已自动填入任务：${activePromptQuest.title}。这些选项组合起来，就是一段可以直接放进 Suno 的英文提示词。`;
}

function checkPromptQuest() {
  if (!activePromptQuest) {
    $("#battleLog").textContent = "当前还没有提示词任务。继续闯关会遇到 Suno 创作任务。";
    return;
  }
  const prompt = $("#finalPrompt").textContent.toLowerCase();
  const missing = activePromptQuest.required.filter((part) => !prompt.includes(part.toLowerCase()));
  if (missing.length === 0) {
    completedQuestLevels.add(activePromptQuest.level);
    score += 30;
    combo += 1;
    $("#battleLog").textContent = `提示词任务完成！奖励 30 今日能量。${activePromptQuest.title} 已经能在 Suno 里清楚表达了。`;
    $("#promptFocus").textContent = "任务通过：这个 prompt 已经包含目标、风格、节奏、音色和关键避免项。";
  } else {
    $("#battleLog").textContent = `提示词还差一点：需要补上 ${missing.join(" / ")}。可以点“1 自动填入工坊”先看标准拼法。`;
    $("#promptFocus").textContent = "任务未通过：检查英文提示词里是否包含任务要求的关键词。";
  }
  renderScore();
  renderAdventure();
}

function applyLessonToPrompt() {
  workshopSelections = {
    ...workshopSelections,
    ...lessonPromptPresets[lessonIndex],
  };
  renderWorkshop();
  $("#promptFocus").textContent = `已把 ${lessons[lessonIndex].title} 的重点套用到提示词。`;
}

function renderLesson() {
  const lesson = lessons[lessonIndex];
  $("#lessonTitle").textContent = lesson.title;
  $("#lessonText").textContent = lesson.text;
  $("#lessonWords").innerHTML = "";
  lesson.words.forEach((word) => {
    const item = document.createElement("li");
    item.textContent = word;
    $("#lessonWords").appendChild(item);
  });
  $("#lessonTrack").innerHTML = "";
  lessons.forEach((_, index) => {
    const node = document.createElement("span");
    node.className = `lesson-node${index <= lessonIndex ? " active" : ""}`;
    $("#lessonTrack").appendChild(node);
  });
  $("#levelName").textContent = lesson.title.replace("Level ", "Lv.");
}

function renderScore() {
  $("#score").textContent = score;
  $("#lives").textContent = "♥".repeat(lives);
  $("#combo").textContent = combo;
  $("#learnedCount").textContent = learned.size;
}

$("#speakMonster").addEventListener("click", () => {
  speakWordData(getCurrentMonster());
});

$("#toggleListening").addEventListener("click", () => {
  listeningMode = !listeningMode;
  $("#toggleListening").className = listeningMode ? "active" : "";
  $("#battleLog").textContent = listeningMode
    ? "听力模式开启：怪物名字会隐藏，先听英文读音，再选中文意思。"
    : "听力模式关闭：你可以同时看英文和听读音。";
  renderAdventure();
  if (listeningMode) {
    speak(getCurrentMonster().term, "en-US");
  }
});

$("#restartAdventure").addEventListener("click", () => {
  lives = 5;
  combo = 0;
  battleLevel = 1;
  monsterIndex = 0;
  monsterHp = 1;
  reviewMode = false;
  revealedMonsterTerm = "";
  activePromptQuest = null;
  completedQuestLevels = new Set();
  $("#battleLog").textContent = "王子重新出发。先听单词怪喊话，再选中文意思。";
  renderScore();
  renderAdventure();
});

$("#nextWord").addEventListener("click", () => {
  wordIndex = (wordIndex + 1) % words.length;
  renderWord();
});

$("#nextSunoStep").addEventListener("click", () => {
  sunoStepIndex = (sunoStepIndex + 1) % sunoTrainingSteps.length;
  renderSunoSimulator();
});

$("#nextFlowTask").addEventListener("click", () => {
  flowTaskIndex = (flowTaskIndex + 1) % flowTasks.length;
  flowProgress = 0;
  $("#flowFeedback").textContent = "";
  renderFlowTrainer();
});

$("#checkFlowTask").addEventListener("click", () => {
  const task = flowTasks[flowTaskIndex];
  $("#flowFeedback").textContent = flowProgress >= task.steps.length
    ? "这一轮流程已经完成。可以换一个任务继续练。"
    : `还没完成：下一步是 ${task.steps[flowProgress]}。`;
});

$("#lyricsTemplate").addEventListener("click", () => {
  $("#lyricsInput").value = lyricTemplate;
  $("#lyricsFeedback").textContent = "已套用一个 Suno 友好的歌词结构，你可以把英文歌词替换成自己的内容。";
  renderLyricsTrainer();
});

$("#checkLyrics").addEventListener("click", () => {
  checkLyricsStructure();
});

$("#lyricsInput").addEventListener("input", () => {
  renderLyricsTrainer();
});

$("#speakWord").addEventListener("click", () => {
  speakWordData(words[wordIndex]);
});

$("#markLearned").addEventListener("click", () => {
  learned.add(words[wordIndex].term);
  score += 5;
  renderScore();
});

$("#nextQuiz").addEventListener("click", () => {
  quizIndex = (quizIndex + 1) % quizzes.length;
  renderQuiz();
});

$("#reviewMistakes").addEventListener("click", () => {
  if (mistakes.length === 0) {
    $("#feedback").textContent = "现在还没有错题。去单词怪闯关里故意挑战几关也行。";
    return;
  }
  reviewMode = true;
  monsterHp = 1;
  revealedMonsterTerm = "";
  $("#feedback").textContent = `已进入错题练习：还有 ${mistakes.length} 个词。`;
  $("#battleLog").textContent = "错题怪出现了，答对就把它从错题本里移除。";
  renderAdventure();
});

$("#resetPrompt").addEventListener("click", () => {
  selections = {};
  renderBuilder();
});

$("#applyLessonPrompt").addEventListener("click", () => {
  applyLessonToPrompt();
});

$("#copyPrompt").addEventListener("click", async () => {
  const text = $("#finalPrompt").textContent;
  try {
    await navigator.clipboard.writeText(text);
    $("#promptFocus").textContent = "英文提示词已复制，可以直接粘贴到 Suno。";
  } catch {
    $("#promptFocus").textContent = "浏览器没有开放剪贴板权限，可以手动选中英文提示词复制。";
  }
});

$("#applyQuest").addEventListener("click", () => {
  applyQuestToWorkshop();
});

$("#checkQuest").addEventListener("click", () => {
  checkPromptQuest();
});

$("#resetWorkshop").addEventListener("click", () => {
  workshopSelections = {
    goal: "a complete song",
    genre: "pop",
    mood: "warm and hopeful",
    rhythm: "mid-tempo around 95 BPM",
    melody: "a memorable melody",
    harmony: "soft warm chords",
    vocal: "emotional female vocals",
    timbre: "soft piano",
    structure: "intro, verse, pre-chorus, chorus, bridge, final chorus, outro",
    production: "clean modern production",
    avoid: "avoid harsh noisy sounds",
  };
  renderWorkshop();
});

$("#nextLesson").addEventListener("click", () => {
  lessonIndex = (lessonIndex + 1) % lessons.length;
  renderLesson();
});

renderWord();
renderQuiz();
renderBuilder();
renderLesson();
renderWorkshop();
renderSunoSimulator();
renderFlowTrainer();
$("#lyricsInput").value = lyricTemplate;
renderLyricsTrainer();
renderScore();
renderAdventure();
$("#battleLog").textContent = "先点“朗读怪物”听读音，再选择中文意思。第 3、6、9 关会出现 Suno 提示词任务。";
