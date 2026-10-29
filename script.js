const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreElement = document.getElementById('score');
const highScoreElement = document.getElementById('highScore');
const levelDisplay = document.getElementById('levelDisplay');
const topCenterTimer = document.getElementById('topCenterTimer');
const timerLabel = document.getElementById('timerLabel');
const shieldSeconds = document.getElementById('shieldSeconds');
const levelBanner = document.getElementById('levelBanner');
const levelBannerText = document.getElementById('levelBannerText');

const homeScreen = document.getElementById('homeScreen');
const topGamePanel = document.getElementById('topGamePanel');
const resumeBtn = document.getElementById('resumeBtn');
const newGameBtn = document.getElementById('newGameBtn');
const skinsBtn = document.getElementById('skinsBtn');
const achievementsBtn = document.getElementById('achievementsBtn');
const homeSettingsBtn = document.getElementById('homeSettingsBtn');
const pauseBtn = document.getElementById('pauseBtn');

const settingsModal = document.getElementById('settingsModal');
const skinsModal = document.getElementById('skinsModal');
const achievementsModal = document.getElementById('achievementsModal');
const pauseModal = document.getElementById('pauseModal');

const closeSettings = document.getElementById('closeSettings');
const closeSkins = document.getElementById('closeSkins');
const closeAchievements = document.getElementById('closeAchievements');

const homeBtn = document.getElementById('homeBtn');
const restartBtn = document.getElementById('restartBtn');
const soundToggleBtn = document.getElementById('soundToggleBtn');
const diffBtns = document.querySelectorAll('.diff-btn');
const langBtns = document.querySelectorAll('.lang-btn');
const skinBtns = document.querySelectorAll('.skin-btn');

const pauseResumeBtn = document.getElementById('pauseResumeBtn');
const pauseRestartBtn = document.getElementById('pauseRestartBtn');
const pauseHomeBtn = document.getElementById('pauseHomeBtn');

let soundEnabled = true;
let currentLang = 'uz';
let currentSkin = 'neon';

const translations = {
  uz: {
    title: "ILON O'YINI",
    resume: "▶ Davom ettirish",
    newGame: "🎮 Yangi o'yin",
    skinsMenu: "🎨 Skinlar",
    achievementsMenu: "🏆 Yutuqlar",
    settingsMenu: "⚙️ Sozlamalar",
    level: "DAROJA",
    settings: "⚙️ Sozlamalar",
    highScore: "Rekord",
    score: "Achko",
    home: "🏠 Bosh ekran",
    restart: "🔄 Qayta boshlash",
    soundOn: "🔊 Ovoz: Yoqilgan",
    soundOff: "🔇 Ovoz: O'chirilgan",
    languageTitle: "Tilni Tanlash",
    difficultyTitle: "Qiyinlik Darajasi",
    diffEasy: "Oson",
    diffMedium: "O'rtacha",
    diffHard: "Qiyin",
    diffSuper: "☠️ Super Qiyin",
    close: "Yopish",
    skinsTitle: "🎨 Ilon Skinlari",
    achievementsTitle: "🏆 Yutuqlar",
    skinNeon: "🟢 Neon Ko'k",
    skinFire: "🔥 Olovli Qizil",
    skinRainbow: "🌈 Kamalak",
    skinGold: "⭐ Oltin",
    ach1_text: "Yangi boshlovchi (10 ochko)",
    ach2_text: "Ilon ustasi (50 ochko)",
    ach3_text: "Chaqqon ovchi (100 ochko)",
    shield: "🛡️ ZASHITA",
    speed: "⚡ TEZLIK",
    slow: "❄️ SEKIN",
    pauseBtn: "⏸️",
    pauseTitle: "⏸️ PAUZA"
  },
  ru: {
    title: "ИГРА ЗМЕЙКА",
    resume: "▶ Продолжить",
    newGame: "🎮 Новая игра",
    skinsMenu: "🎨 Скины",
    achievementsMenu: "🏆 Достижения",
    settingsMenu: "⚙️ Настройки",
    level: "УРОВЕНЬ",
    settings: "⚙️ Настройки",
    highScore: "Рекорд",
    score: "Очки",
    home: "🏠 Главная",
    restart: "🔄 Перезапуск",
    soundOn: "🔊 Звук: Вкл",
    soundOff: "🔇 Звук: Выкл",
    languageTitle: "Выберите Язык",
    difficultyTitle: "Уровень Сложности",
    diffEasy: "Легко",
    diffMedium: "Средне",
    diffHard: "Сложно",
    diffSuper: "☠️ Кошмар",
    close: "Закрыть",
    skinsTitle: "🎨 Скины Змейки",
    achievementsTitle: "🏆 Достижения",
    skinNeon: "🟢 Неон Синий",
    skinFire: "🔥 Огненно-Красный",
    skinRainbow: "🌈 Радужный",
    skinGold: "⭐ Золотой",
    ach1_text: "Новичок (10 очков)",
    ach2_text: "Мастер змейки (50 очков)",
    ach3_text: "Быстрый охотник (100 очков)",
    shield: "🛡️ ЩИТ",
    speed: "⚡ СКОРОСТЬ",
    slow: "❄️ ЗАМЕДЛЕНИЕ",
    pauseBtn: "⏸️",
    pauseTitle: "⏸️ ПАУЗА"
  },
  en: {
    title: "SNAKE GAME",
    resume: "▶ Resume",
    newGame: "🎮 New Game",
    skinsMenu: "🎨 Skins",
    achievementsMenu: "🏆 Achievements",
    settingsMenu: "⚙️ Settings",
    level: "LEVEL",
    settings: "⚙️ Settings",
    highScore: "High Score",
    score: "Score",
    home: "🏠 Home",
    restart: "🔄 Restart",
    soundOn: "🔊 Sound: On",
    soundOff: "🔇 Sound: Off",
    languageTitle: "Select Language",
    difficultyTitle: "Difficulty Level",
    diffEasy: "Easy",
    diffMedium: "Medium",
    diffHard: "Hard",
    diffSuper: "☠️ Nightmare",
    close: "Close",
    skinsTitle: "🎨 Snake Skins",
    achievementsTitle: "🏆 Achievements",
    skinNeon: "🟢 Neon Blue",
    skinFire: "🔥 Fire Red",
    skinRainbow: "🌈 Rainbow",
    skinGold: "⭐ Gold",
    ach1_text: "Beginner (10 points)",
    ach2_text: "Snake Master (50 points)",
    ach3_text: "Fast Hunter (100 points)",
    shield: "🛡️ SHIELD",
    speed: "⚡ SPEED",
    slow: "❄️ SLOW",
    pauseBtn: "⏸️",
    pauseTitle: "⏸️ PAUSE"
  }
};

function updateLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      if (key === 'soundOn' || key === 'soundOff') {
        el.innerText = soundEnabled ? t.soundOn : t.soundOff;
      } else {
        el.innerText = t[key];
      }
    }
  });

  const titleEl = document.querySelector('.game-title');
  if (titleEl) titleEl.innerText = t.title;

  checkAchievements();
}

langBtns.forEach(btn => {
  btn.onclick = () => {
    langBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    updateLanguage(btn.dataset.lang);
  };
});

skinBtns.forEach(btn => {
  btn.onclick = () => {
    skinBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentSkin = btn.dataset.skin;
  };
});

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSound(freq1, freq2, type = 'sine', duration = 0.1) {
  if (!soundEnabled) return;
  if (audioCtx.state === 'suspended') audioCtx.resume();
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq1, audioCtx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(freq2, audioCtx.currentTime + duration);
  gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
  gain.gain.linearRampToValueAtTime(0.01, audioCtx.currentTime + duration);
  osc.connect(gain); gain.connect(audioCtx.destination);
  osc.start(); osc.stop(audioCtx.currentTime + duration);
}

let isPlaying = false;
let isGameOver = false;

const mouse = { x: canvas.width / 2, y: canvas.height / 2 };
window.addEventListener('mousemove', (e) => {
  mouse.x = Math.max(20, Math.min(canvas.width - 20, e.clientX));
  mouse.y = Math.max(20, Math.min(canvas.height - 20, e.clientY));
});

let difficulty = 'easy'; 
const diffSpeeds = { easy: 0.5, medium: 0.85, hard: 1.4, super: 3.8 };

pauseBtn.onclick = () => {
  if (isPlaying) {
    isPlaying = false;
    pauseModal.classList.remove('hidden');
  }
};

pauseResumeBtn.onclick = () => {
  pauseModal.classList.add('hidden');
  isPlaying = true;
};

pauseRestartBtn.onclick = () => {
  pauseModal.classList.add('hidden');
  resetGame();
  isGameOver = false;
  isPlaying = true;
};

pauseHomeBtn.onclick = () => {
  isPlaying = false;
  pauseModal.classList.add('hidden');
  homeScreen.classList.remove('hidden');
  topGamePanel.classList.add('hidden');
};

homeSettingsBtn.onclick = () => settingsModal.classList.remove('hidden');
closeSettings.onclick = () => settingsModal.classList.add('hidden');
skinsBtn.onclick = () => skinsModal.classList.remove('hidden');
closeSkins.onclick = () => skinsModal.classList.add('hidden');
achievementsBtn.onclick = () => achievementsModal.classList.remove('hidden');
closeAchievements.onclick = () => achievementsModal.classList.add('hidden');

soundToggleBtn.onclick = () => {
  soundEnabled = !soundEnabled;
  updateLanguage(currentLang);
};

homeBtn.onclick = () => {
  isPlaying = false;
  homeScreen.classList.remove('hidden');
  topGamePanel.classList.add('hidden');
  settingsModal.classList.add('hidden');
};

restartBtn.onclick = () => {
  settingsModal.classList.add('hidden');
  homeScreen.classList.add('hidden');
  topGamePanel.classList.remove('hidden');
  resetGame();
  isGameOver = false;
  isPlaying = true;
};

resumeBtn.onclick = () => {
  if (isGameOver) { resetGame(); isGameOver = false; }
  homeScreen.classList.add('hidden');
  topGamePanel.classList.remove('hidden');
  isPlaying = true;
};

newGameBtn.onclick = () => {
  resetGame();
  isGameOver = false;
  homeScreen.classList.add('hidden');
  topGamePanel.classList.remove('hidden');
  isPlaying = true;
};

diffBtns.forEach(btn => {
  btn.onclick = () => {
    diffBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    difficulty = btn.dataset.diff;
    settingsModal.classList.add('hidden');
  };
});

// Dinamik Joystik
const dynamicJoystick = document.getElementById('dynamicJoystick');
const joystickStick = document.getElementById('joystickStick');
let activeTouchId = null;
let joystickCenterX = 0;
let joystickCenterY = 0;

window.addEventListener('touchstart', (e) => {
  if (!isPlaying) return;
  if (e.target.closest('button') || e.target.closest('.modal')) return;

  const touch = e.changedTouches[0];
  activeTouchId = touch.identifier;
  joystickCenterX = touch.clientX;
  joystickCenterY = touch.clientY;

  dynamicJoystick.style.left = `${joystickCenterX}px`;
  dynamicJoystick.style.top = `${joystickCenterY}px`;
  dynamicJoystick.classList.remove('hidden');
  joystickStick.style.transform = `translate(0px, 0px)`;
}, { passive: false });

window.addEventListener('touchmove', (e) => {
  if (activeTouchId === null || !isPlaying) return;

  for (let i = 0; i < e.touches.length; i++) {
    const touch = e.touches[i];
    if (touch.identifier === activeTouchId) {
      e.preventDefault();
      let deltaX = touch.clientX - joystickCenterX;
      let deltaY = touch.clientY - joystickCenterY;
      const maxDistance = 35;
      const distance = Math.hypot(deltaX, deltaY);

      if (distance > maxDistance) {
        deltaX = (deltaX / distance) * maxDistance;
        deltaY = (deltaY / distance) * maxDistance;
      }

      joystickStick.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      mouse.x = Math.max(30, Math.min(canvas.width - 30, snake.body[0].x + deltaX * 2.2));
      mouse.y = Math.max(30, Math.min(canvas.height - 30, snake.body[0].y + deltaY * 2.2));
      break;
    }
  }
}, { passive: false });

window.addEventListener('touchend', (e) => {
  if (activeTouchId === null) return;
  for (let i = 0; i < e.changedTouches.length; i++) {
    if (e.changedTouches[i].identifier === activeTouchId) {
      activeTouchId = null;
      dynamicJoystick.classList.add('hidden');
      break;
    }
  }
});

const colors = ['#00FFCC', '#FF007F', '#9D00FF', '#00E5FF', '#76FF03', '#FFEA00', '#FF3D00'];

let currentScore = 0;
let highScore = localStorage.getItem('snake_high_score') || 0;
highScoreElement.innerText = highScore;

let shieldExpiryTime = 0;
let speedExpiryTime = 0;
let slowExpiryTime = 0;
let lastBonusSpawnTime = Date.now();
let activeBonuses = [];
let particles = [];

let snake = createSnake();
let previousLevel = 1;

function createSnake() {
  return { body: [], length: 12, segmentRadius: 13, color: '#00FFCC', speed: 0.045 };
}

for (let i = 0; i < 12; i++) {
  snake.body.push({ x: canvas.width / 2, y: canvas.height / 2 });
}

let foods = [];
for (let i = 0; i < 5; i++) foods.push(createFood());

function createFood() {
  const margin = 80;
  const x = margin + Math.random() * (canvas.width - margin * 2);
  const y = margin + Math.random() * (canvas.height - margin * 2);
  const color = colors[Math.floor(Math.random() * colors.length)];
  let body = [];
  for (let i = 0; i < 6; i++) body.push({ x: x, y: y });
  return { x: x, y: y, vx: (Math.random() - 0.5) * 2, vy: (Math.random() - 0.5) * 2, radius: 13, color: color, body: body, blinkTimer: Math.floor(Math.random() * 100) };
}

let blackSnakes = [];
function createBlackSnake() {
  const margin = 100;
  const startX = Math.random() < 0.5 ? margin : canvas.width - margin;
  const startY = Math.random() < 0.5 ? margin : canvas.height - margin;
  let body = [];
  for (let i = 0; i < 25; i++) body.push({ x: startX, y: startY });
  return { body: body, segmentRadius: 20, eatenCount: 0 };
}

function spawnBonus() {
  const generalTypes = ['yulduz', 'zashita', 'bomba', 'tezlik', 'sekin'];
  const sizeTypes = ['kichrayish', 'kattalashish'];
  const margin = 100;
  
  const type1 = generalTypes[Math.floor(Math.random() * generalTypes.length)];
  activeBonuses.push({
    x: margin + Math.random() * (canvas.width - margin * 2),
    y: margin + Math.random() * (canvas.height - margin * 2),
    type: type1, radius: 16, expiryTime: Date.now() + 6000
  });

  const type2 = sizeTypes[Math.floor(Math.random() * sizeTypes.length)];
  activeBonuses.push({
    x: margin + Math.random() * (canvas.width - margin * 2),
    y: margin + Math.random() * (canvas.height - margin * 2),
    type: type2, radius: 16, expiryTime: Date.now() + 6000
  });
}

function createExplosion(x, y, color) {
  for (let i = 0; i < 12; i++) {
    particles.push({ x: x, y: y, vx: (Math.random() - 0.5) * 6, vy: (Math.random() - 0.5) * 6, radius: Math.random() * 3 + 2, color: color, alpha: 1 });
  }
}

function resetGame() {
  currentScore = 0;
  previousLevel = 1;
  scoreElement.innerText = currentScore;
  shieldExpiryTime = 0; speedExpiryTime = 0; slowExpiryTime = 0;
  activeBonuses = []; particles = [];
  lastBonusSpawnTime = Date.now();
  snake = createSnake();
  for (let i = 0; i < 12; i++) snake.body.push({ x: canvas.width/2, y: canvas.height/2 });
  blackSnakes = []; foods = [];
  for (let i = 0; i < 5; i++) foods.push(createFood());
}

function triggerLevelBanner(level) {
  levelBannerText.innerText = `LEVEL ${level}! 🚀`;
  levelBanner.classList.remove('hidden');
  setTimeout(() => { levelBanner.classList.add('hidden'); }, 1500);
}

function checkAchievements() {
  const t = translations[currentLang];
  const a1 = document.getElementById('ach1');
  const a2 = document.getElementById('ach2');
  const a3 = document.getElementById('ach3');

  if (a1) a1.innerText = (currentScore >= 10 ? "✅ " : "🔒 ") + t.ach1_text;
  if (a2) a2.innerText = (currentScore >= 50 ? "✅ " : "🔒 ") + t.ach2_text;
  if (a3) a3.innerText = (currentScore >= 100 ? "✅ " : "🔒 ") + t.ach3_text;
}

function animate() {
  const now = Date.now();
  const t = translations[currentLang];

  if (pauseModal.classList.contains('hidden') === false) {
    requestAnimationFrame(animate);
    return;
  }

  let speedMultiplier = 1;
  if (now < speedExpiryTime && isPlaying) speedMultiplier = 1.6;
  if (now < slowExpiryTime && isPlaying) speedMultiplier = 0.6;

  let scoreForSpeed = isPlaying ? currentScore : 0;
  let currentSpeed = (snake.speed + (scoreForSpeed * 0.0004)) * speedMultiplier;
  if (currentSpeed > 0.1) currentSpeed = 0.1;
  if (currentSpeed < 0.02) currentSpeed = 0.02;

  let currentLevel = 1;
  let bgGradientColor = '#0b0b14';
  if (scoreForSpeed >= 20 && scoreForSpeed < 50) { currentLevel = 2; bgGradientColor = '#120b1c'; }
  else if (scoreForSpeed >= 50 && scoreForSpeed < 100) { currentLevel = 3; bgGradientColor = '#1a0b0b'; }
  else if (scoreForSpeed >= 100) { currentLevel = 4; bgGradientColor = '#05181a'; }

  if (difficulty === 'super') bgGradientColor = '#05020a';

  if (isPlaying && currentLevel !== previousLevel) {
    triggerLevelBanner(currentLevel);
    previousLevel = currentLevel;
  }

  levelDisplay.innerHTML = `<span>${t.level}</span>: ${currentLevel}`;

  ctx.fillStyle = bgGradientColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if (currentLevel >= 3) {
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 2;
    ctx.strokeRect(canvas.width * 0.2, canvas.height * 0.2, canvas.width * 0.6, canvas.height * 0.6);
  }

  ctx.strokeStyle = difficulty === 'super' ? 'rgba(255, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.03)';
  ctx.lineWidth = 1;
  const gridSize = 50;
  for (let x = 0; x < canvas.width; x += gridSize) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke(); }
  for (let y = 0; y < canvas.height; y += gridSize) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke(); }

  for (let i = particles.length - 1; i >= 0; i--) {
    let p = particles[i];
    p.x += p.vx; p.y += p.vy; p.alpha -= 0.03;
    if (p.alpha <= 0) { particles.splice(i, 1); continue; }
    ctx.save(); ctx.globalAlpha = p.alpha; ctx.fillStyle = p.color;
    ctx.beginPath(); ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2); ctx.fill(); ctx.restore();
  }

  let activeTimerText = ""; let remainingTime = 0;
  if (isPlaying && now < shieldExpiryTime) { activeTimerText = t.shield; remainingTime = Math.ceil((shieldExpiryTime - now) / 1000); }
  else if (isPlaying && now < speedExpiryTime) { activeTimerText = t.speed; remainingTime = Math.ceil((speedExpiryTime - now) / 1000); }
  else if (isPlaying && now < slowExpiryTime) { activeTimerText = t.slow; remainingTime = Math.ceil((slowExpiryTime - now) / 1000); }

  if (remainingTime > 0) {
    topCenterTimer.classList.remove('hidden');
    timerLabel.innerText = activeTimerText;
    shieldSeconds.innerText = remainingTime;
  } else {
    topCenterTimer.classList.add('hidden');
  }

  if (isPlaying && now - lastBonusSpawnTime > 4000) {
    spawnBonus();
    lastBonusSpawnTime = now;
  }

  const head = snake.body[0];
  head.x += (mouse.x - head.x) * currentSpeed;
  head.y += (mouse.y - head.y) * currentSpeed;
  head.x = Math.max(15, Math.min(canvas.width - 15, head.x));
  head.y = Math.max(15, Math.min(canvas.height - 15, head.y));

  for (let i = 1; i < snake.body.length; i++) {
    const prev = snake.body[i - 1]; const curr = snake.body[i];
    curr.x += (prev.x - curr.x) * 0.55; curr.y += (prev.y - curr.y) * 0.55;
  }

  if (isPlaying) {
    for (let i = activeBonuses.length - 1; i >= 0; i--) {
      let b = activeBonuses[i];
      if (now > b.expiryTime) { activeBonuses.splice(i, 1); continue; }
      ctx.save(); ctx.beginPath(); ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
      let bColor = '#FFD700';
      if (b.type === 'zashita') bColor = '#00FFFF';
      else if (b.type === 'tezlik') bColor = '#FF9900';
      else if (b.type === 'sekin') bColor = '#3399FF';
      else if (b.type === 'bomba') bColor = '#FF0000';
      else if (b.type === 'kichrayish') bColor = '#FF0055';
      else if (b.type === 'kattalashish') bColor = '#00FF55';
      ctx.fillStyle = bColor; ctx.shadowColor = bColor; ctx.shadowBlur = 15; ctx.fill(); ctx.closePath();

      ctx.fillStyle = '#000'; ctx.font = 'bold 12px Segoe UI'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      let symbol = '⭐';
      if (b.type === 'zashita') symbol = '🛡️'; else if (b.type === 'tezlik') symbol = '⚡';
      else if (b.type === 'sekin') symbol = '❄️'; else if (b.type === 'bomba') symbol = '💣';
      else if (b.type === 'kichrayish') symbol = '📉'; else if (b.type === 'kattalashish') symbol = '📈';
      ctx.fillText(symbol, b.x, b.y); ctx.restore();

      const distToBonus = Math.hypot(head.x - b.x, head.y - b.y);
      if (distToBonus < snake.segmentRadius + b.radius) {
        createExplosion(b.x, b.y, bColor);
        playSound(800, 1400, 'triangle', 0.2);
        if (b.type === 'yulduz') currentScore += 10;
        else if (b.type === 'zashita') shieldExpiryTime = now + 8000;
        else if (b.type === 'tezlik') speedExpiryTime = now + 7000;
        else if (b.type === 'sekin') slowExpiryTime = now + 7000;
        else if (b.type === 'bomba') { currentScore -= 15; if (currentScore < 0) currentScore = 0; playSound(200, 50, 'sawtooth', 0.3); }
        else if (b.type === 'kichrayish') snake.segmentRadius = 4.5;
        else if (b.type === 'kattalashish') snake.segmentRadius = 36;
        
        scoreElement.innerText = currentScore;
        checkAchievements();
        if (currentScore > highScore) { highScore = currentScore; highScoreElement.innerText = highScore; localStorage.setItem('snake_high_score', highScore); }
        activeBonuses.splice(i, 1);
      }
    }
  }

  foods.forEach((food, index) => {
    const distToHead = Math.hypot(head.x - food.x, head.y - food.y);
    let escapeRadius = difficulty === 'super' ? 320 : 160;
    let escapeSpeed = difficulty === 'super' ? 8.5 : 3.5;

    if (distToHead < escapeRadius) {
      const angle = Math.atan2(food.y - head.y, food.x - head.x);
      food.vx = Math.cos(angle) * escapeSpeed; food.vy = Math.sin(angle) * escapeSpeed;
    } else {
      food.vx += (Math.random() - 0.5) * 0.2; food.vy += (Math.random() - 0.5) * 0.2;
      food.vx = Math.max(-2, Math.min(2, food.vx)); food.vy = Math.max(-2, Math.min(2, food.vy));
    }

    food.x += food.vx; food.y += food.vy;
    const padding = 20;
    if (food.x < padding) { food.x = padding; food.vx = Math.abs(food.vx); }
    if (food.x > canvas.width - padding) { food.x = canvas.width - padding; food.vx = -Math.abs(food.vx); }
    if (food.y < padding) { food.y = padding; food.vy = Math.abs(food.vy); }
    if (food.y > canvas.height - padding) { food.y = canvas.height - padding; food.vy = -Math.abs(food.vy); }

    food.body[0].x = food.x; food.body[0].y = food.y;
    for (let j = 1; j < food.body.length; j++) {
      const p = food.body[j - 1]; const c = food.body[j];
      c.x += (p.x - c.x) * 0.4; c.y += (p.y - c.y) * 0.4;
    }

    if (distToHead < snake.segmentRadius + food.radius) {
      if (isPlaying) {
        playSound(600, 900, 'sine', 0.1);
        currentScore += 1;
        scoreElement.innerText = currentScore;
        checkAchievements();

        if (currentScore > highScore) { highScore = currentScore; highScoreElement.innerText = highScore; localStorage.setItem('snake_high_score', highScore); }
        
        let requiredBlackSnakes = Math.floor(currentScore / 10);
        while (blackSnakes.length < requiredBlackSnakes) {
          blackSnakes.push(createBlackSnake());
        }

        snake.length += 2;
        for (let k = 0; k < 2; k++) {
          const last = snake.body[snake.body.length - 1];
          snake.body.push({ x: last.x, y: last.y });
        }
      }
      createExplosion(food.x, food.y, food.color);
      foods[index] = createFood();
    }
  });

  const baseDiffSpeed = diffSpeeds[difficulty];
  const isSuperDark = difficulty === 'super';

  blackSnakes.forEach((bs) => {
    const bHead = bs.body[0];
    const moveAngle = Math.atan2(head.y - bHead.y, head.x - bHead.x);
    let speedMult = 1;
    if (currentLevel === 2) speedMult = 1.3;
    if (currentLevel === 3) speedMult = 1.6; 
    if (currentLevel >= 4) speedMult = 2.0;

    const targetX = head.x + Math.cos(moveAngle + (bs.eatenCount * 0.5)) * 140;
    const targetY = head.y + Math.sin(moveAngle + (bs.eatenCount * 0.5)) * 140;
    const angleToTarget = Math.atan2(targetY - bHead.y, targetX - bHead.x);

    bHead.x += Math.cos(angleToTarget) * (baseDiffSpeed * speedMult);
    bHead.y += Math.sin(angleToTarget) * (baseDiffSpeed * speedMult);

    for (let i = 1; i < bs.body.length; i++) {
      const p = bs.body[i - 1]; const c = bs.body[i];
      c.x += (p.x - c.x) * 0.4; c.y += (p.y - c.y) * 0.4;
    }

    if (isPlaying) {
      for (let i = 0; i < bs.body.length; i++) {
        const dist = Math.hypot(head.x - bs.body[i].x, head.y - bs.body[i].y);
        if (dist < snake.segmentRadius + bs.segmentRadius) {
          if (now > shieldExpiryTime) {
            playSound(300, 100, 'sawtooth', 0.3);
            createExplosion(head.x, head.y, '#FF0000');
            isGameOver = true; isPlaying = false;
            homeScreen.classList.remove('hidden');
            topGamePanel.classList.add('hidden');
            return;
          }
        }
      }
    }
  });

  foods.forEach((food) => {
    food.blinkTimer++;
    const isEyesOpen = food.blinkTimer % 100 > 15;
    for (let j = food.body.length - 1; j >= 0; j--) {
      const seg = food.body[j];
      const r = Math.max(3, food.radius * (1 - j / food.body.length));
      ctx.beginPath(); ctx.arc(seg.x, seg.y, r, 0, Math.PI * 2);
      ctx.fillStyle = food.color; ctx.shadowBlur = 10; ctx.shadowColor = food.color;
      ctx.fill(); ctx.shadowBlur = 0;
    }
    if (isEyesOpen) {
      ctx.fillStyle = '#ffffff';
      ctx.beginPath(); ctx.arc(food.x - 4, food.y - 3, 3.5, 0, Math.PI * 2); ctx.arc(food.x + 4, food.y - 3, 3.5, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#000000';
      ctx.beginPath(); ctx.arc(food.x - 4, food.y - 3, 1.5, 0, Math.PI * 2); ctx.arc(food.x + 4, food.y - 3, 1.5, 0, Math.PI * 2); ctx.fill();
    }
  });

  blackSnakes.forEach((bs) => {
    for (let j = bs.body.length - 1; j >= 0; j--) {
      const seg = bs.body[j];
      const r = Math.max(5, bs.segmentRadius * (1 - j / (bs.body.length * 1.2)));
      ctx.beginPath(); ctx.arc(seg.x, seg.y, r, 0, Math.PI * 2);
      ctx.fillStyle = isSuperDark ? '#150000' : '#222233';
      ctx.shadowBlur = 10; ctx.shadowColor = isSuperDark ? '#FF0000' : 'rgba(255,255,255,0.15)';
      ctx.fill(); ctx.shadowBlur = 0;
    }
    const bHead = bs.body[0];
    const bAngle = Math.atan2(head.y - bHead.y, head.x - bHead.x);
    ctx.fillStyle = '#ff0000'; 
    ctx.shadowBlur = isSuperDark ? 15 : 10; 
    ctx.shadowColor = '#ff0000';
    ctx.beginPath();
    ctx.arc(bHead.x + Math.cos(bAngle - 0.5) * (bs.segmentRadius * 0.5), bHead.y + Math.sin(bAngle - 0.5) * (bs.segmentRadius * 0.5), 3.5, 0, Math.PI * 2);
    ctx.arc(bHead.x + Math.cos(bAngle + 0.5) * (bs.segmentRadius * 0.5), bHead.y + Math.sin(bAngle + 0.5) * (bs.segmentRadius * 0.5), 3.5, 0, Math.PI * 2);
    ctx.fill(); 
    ctx.shadowBlur = 0;
  });

  let snakeFillColor = '#00FFCC';
  if (currentSkin === 'fire') snakeFillColor = '#FF3D00';
  else if (currentSkin === 'gold') snakeFillColor = '#FFD700';
  else if (currentSkin === 'rainbow') snakeFillColor = colors[Math.floor(Date.now() / 200) % colors.length];

  let isShieldActive = isPlaying && now < shieldExpiryTime;
  for (let i = snake.body.length - 1; i > 0; i--) {
    const seg = snake.body[i];
    const r = Math.max(2, snake.segmentRadius * (1 - i / (snake.body.length * 1.3)));
    ctx.beginPath(); ctx.arc(seg.x, seg.y, r, 0, Math.PI * 2);
    ctx.fillStyle = snakeFillColor; ctx.shadowBlur = isShieldActive ? 20 : 10;
    ctx.shadowColor = isShieldActive ? '#00FFFF' : snakeFillColor;
    ctx.fill(); ctx.shadowBlur = 0;
  }

  ctx.beginPath();
  ctx.arc(head.x, head.y, snake.segmentRadius + 2, 0, Math.PI * 2);
  ctx.fillStyle = snakeFillColor; 
  ctx.shadowBlur = isShieldActive ? 30 : 20;
  ctx.shadowColor = isShieldActive ? '#00FFFF' : snakeFillColor;
  ctx.fill(); 
  ctx.shadowBlur = 0;

  const angle = Math.atan2(mouse.y - head.y, mouse.x - head.x);
  const eyeOffset = snake.segmentRadius * 0.45;
  const eyeRadius = Math.max(2, snake.segmentRadius * 0.28);
  const pupilRadius = Math.max(1, snake.segmentRadius * 0.14);

  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.arc(head.x + Math.cos(angle - 0.5) * eyeOffset, head.y + Math.sin(angle - 0.5) * eyeOffset, eyeRadius, 0, Math.PI * 2);
  ctx.arc(head.x + Math.cos(angle + 0.5) * eyeOffset, head.y + Math.sin(angle + 0.5) * eyeOffset, eyeRadius, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#000000';
  ctx.beginPath();
  ctx.arc(head.x + Math.cos(angle - 0.5) * eyeOffset + Math.cos(angle) * 1.5, head.y + Math.sin(angle - 0.5) * eyeOffset + Math.sin(angle) * 1.5, pupilRadius, 0, Math.PI * 2);
  ctx.arc(head.x + Math.cos(angle + 0.5) * eyeOffset + Math.cos(angle) * 1.5, head.y + Math.sin(angle + 0.5) * eyeOffset + Math.sin(angle) * 1.5, pupilRadius, 0, Math.PI * 2);
  ctx.fill();

  requestAnimationFrame(animate);
}

animate();