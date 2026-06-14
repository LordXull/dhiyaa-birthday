/* ==========================================
   ROMANTIC BIRTHDAY MICROSITE - SCRIPT.JS
   Soft Pink Princess — Dzul ❤ Dhiyaa
   ========================================== */

const CONFIG = {
  passcode: "1506",

  sender: "Dzul Jasni",
  recipient: "Dhiyaa Shofiyyah",
  recipientFirst: "Dhiyaa",
  age: 23,

  song: {
    title: "Everything U Are",
    artist: "Hindia",
    caption: "This song always reminds me of us.",
    // Place actual audio file at assets/audio/song.mp3 if available
    src: ""
  },

  letter: `
    <p>
      It's been six months. Six months of learning each other, choosing each other, and somehow — through every storm — still finding our way back to each other. I've been sitting here trying to find the right words, and I think I finally have them.
    </p>
    <p>
      I won't lie and say it was always easy. We had our misunderstandings. Our moments of silence that felt heavier than they should. Moments where I know you didn't know what I was thinking, and I didn't know how to tell you. But every single time, we found a way through it — together. And that's what matters to me most.
    </p>
    <p>
      You know what I love most about you? How unafraid you are to just be yourself with me. That clingy side of you that messages me when you miss me, that baby voice that comes out when you're sleepy, the way you turn into the smallest, softest person when you're with me — I love every single bit of it. Please never change that. Please never hide that from me.
    </p>
    <p>
      You told me once that you were scared of being too much. Dhiyaa, you could never be too much for me. If anything, you are exactly enough — exactly what I didn't know I was looking for until you were standing right in front of me.
    </p>
    <p>
      I've seen you cry. I've seen your face when something hurts you, and it breaks something inside me every single time. So I'm making you a quiet promise today: I want to be the reason you smile more than you cry. I want to be the person who shows up — not perfectly, but genuinely — every single time.
    </p>
    <p>
      This birthday feels different to me. Not just because you're turning 23, but because this is the first birthday I get to celebrate knowing you as mine. And I want you to know that whatever this next chapter holds, I want to walk through it with you.
    </p>
    <p>
      Today, this little digital corner of the world is yours. Just for you. Because you deserve to be celebrated — not just on the big moments, but in the quiet everyday ones too.
    </p>
    <p>
      Happy birthday, Dhiyaa. I'm so glad you exist.
    </p>
  `,

  wishes: `
    <p>
      On this, your 23rd birthday, I want you to know something simple and true: you deserve everything good that life can give you.
    </p>
    <p>
      I wish you a year filled with the kind of happiness that settles deep — not the fleeting kind, but the kind that stays with you even on the quiet Tuesday evenings. I wish you dreams that feel close enough to touch, and the courage to reach for them anyway.
    </p>
    <p>
      I wish you the freedom to just be — unapologetically, fully, beautifully you. The way you are when you're with me and you forget to be anything other than yourself. That version of you is my favorite.
    </p>
    <p>
      These past six months have shown me just a glimpse of who you are, and I already know — you are someone worth standing next to for a very long time. So here's to you, Dhiyaa. To your 23rd year. May it be as bright and as warm as you've made mine.
    </p>
    <p>
      I'm so proud of you. And I'm so lucky to be here cheering you on.
    </p>
  `,

  finalMessage: `
    <p>
      If you've made it to the end of this little love letter — hi. It's me.
    </p>
    <p>
      I want you to know that you are one of the best things that ever happened to me. Not because of any grand gesture or perfect moment, but because of all the small, ordinary ones we've shared. The late nights. The silly conversations. The moments where nothing needed to be said.
    </p>
    <p>
      You walked into my life and quietly made it a little warmer, a little brighter, and a whole lot more worth looking forward to.
    </p>
    <p>
      Thank you for being you. Thank you for letting me in. I'll take good care of what you've trusted me with.
    </p>
    <p>
      Happy Birthday, sayang. 🌸
    </p>
  `,

  memories: [
    {
      file: "first_flowers.jpeg",
      title: "The First Flowers 🌸",
      date: "December 2024",
      caption: "The beginning of everything beautiful"
    },
    {
      file: "first_date.jpeg",
      title: "Our First Date ✨",
      date: "December 2024",
      caption: "Nervous hearts & the best kind of butterflies"
    },
    {
      file: "iftar-date.jpeg",
      title: "Iftar Together 🌙",
      date: "March 2025",
      caption: "Sharing our first Ramadan moments"
    },
    {
      file: "kl-date.jpeg",
      title: "KL Adventures 🏙️",
      date: "2025",
      caption: "Getting lost in the city together"
    },
    {
      file: "hiking-date.jpeg",
      title: "The Hiking Date 🏔️",
      date: "2025",
      caption: "Reaching new heights, with you by my side"
    },
    {
      file: "mirror_pic.jpeg",
      title: "Just Us 💕",
      date: "2025",
      caption: "My favorite reflection — us"
    },
    {
      file: "birthday_celeb.jpeg",
      title: "Birthday Celebration 🎂",
      date: "June 2026",
      caption: "Celebrating you, forever my favorite person"
    }
  ],

  timeline: [
    {
      emoji: "🌟",
      milestone: "The Beginning",
      date: "December 2024",
      desc: "Two people, one unexpected connection, and a feeling that changed everything."
    },
    {
      emoji: "🌸",
      milestone: "First Flowers",
      date: "December 2024",
      desc: "The first gesture. The first sign that this was going to be something real."
    },
    {
      emoji: "☕",
      milestone: "First Date",
      date: "December 2024",
      desc: "Nervous smiles, soft conversation, and the quiet hope that it wouldn't be the last."
    },
    {
      emoji: "🌙",
      milestone: "Late Night Calls",
      date: "Early 2025",
      desc: "Staying up too late just because neither of us wanted to say goodnight."
    },
    {
      emoji: "✈️",
      milestone: "Adventures Together",
      date: "2025",
      desc: "From city streets to mountain trails — every place felt better beside you."
    },
    {
      emoji: "💬",
      milestone: "Learning Each Other",
      date: "2025",
      desc: "The misunderstandings. The making up. The choosing each other, again and again."
    },
    {
      emoji: "💞",
      milestone: "Six Months Together",
      date: "June 2025",
      desc: "Half a year of growing together. The best kind of chapter I've ever written."
    },
    {
      emoji: "🎂",
      milestone: "Dhiyaa Turns 23",
      date: "14 June 2026",
      desc: "Today. This moment. I'm so glad I get to celebrate you."
    }
  ]
};

// ==================== UTILITY ====================
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function showScreen(id) {
  $$('.screen').forEach(s => { s.style.display = 'none'; s.classList.remove('active'); });
  const el = document.getElementById(id);
  if (el) { el.style.display = 'flex'; el.classList.add('active'); }
}

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

// ==================== LOADING SCREEN ====================
function initLoading() {
  showScreen('screen-loading');
  spawnLoadingPetals();
  setTimeout(() => {
    $('#screen-loading').style.opacity = '0';
    $('#screen-loading').style.transition = 'opacity 0.6s ease';
    setTimeout(() => showScreen('screen-lock'), 600);
  }, 2500);
}

function spawnLoadingPetals() {
  const container = $('.floating-petals-loading');
  if (!container) return;
  const colors = ['#f7d7df', '#e8a3b9', '#f5d8c6', '#f7f2e8', '#c8a46b'];
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'petal';
    const size = Math.random() * 10 + 6;
    const delay = Math.random() * 3;
    const dur = Math.random() * 4 + 4;
    p.style.cssText = `
      width:${size}px; height:${size * 0.7}px;
      background:${colors[Math.floor(Math.random() * colors.length)]};
      left:${Math.random() * 100}%;
      animation-duration:${dur}s;
      animation-delay:${delay}s;
      border-radius:${Math.random() > 0.5 ? '50% 0 50% 0' : '0 50% 0 50%'};
      opacity:0.7;
    `;
    container.appendChild(p);
  }
}

// ==================== LOCK SCREEN ====================
let passcodeInput = '';

function initLock() {
  $('#lock-sender').textContent = CONFIG.sender;
  $('#lock-recipient').textContent = CONFIG.recipient;

  document.getElementById('keypad').addEventListener('click', (e) => {
    const key = e.target.closest('.key');
    if (!key) return;
    const val = key.dataset.key;
    if (val !== undefined) {
      if (passcodeInput.length < 4) {
        passcodeInput += val;
        updateDots();
        if (passcodeInput.length === 4) checkPasscode();
      }
    }
  });

  document.getElementById('key-back').addEventListener('click', () => {
    passcodeInput = passcodeInput.slice(0, -1);
    updateDots();
  });
}

function updateDots() {
  for (let i = 0; i < 4; i++) {
    const dot = document.getElementById(`dot-${i}`);
    dot.classList.toggle('filled', i < passcodeInput.length);
    dot.classList.remove('error');
  }
}

function checkPasscode() {
  if (passcodeInput === CONFIG.passcode) {
    for (let i = 0; i < 4; i++) {
      const dot = document.getElementById(`dot-${i}`);
      dot.style.background = 'var(--sage)';
      dot.style.borderColor = 'var(--sage)';
    }
    setTimeout(() => startFloralTransition(), 400);
  } else {
    for (let i = 0; i < 4; i++) {
      document.getElementById(`dot-${i}`).classList.add('error');
    }
    const frame = $('.lock-floral-frame');
    frame.classList.add('shake');
    setTimeout(() => {
      frame.classList.remove('shake');
      passcodeInput = '';
      updateDots();
      document.getElementById('passcode-hint').textContent = 'Try again — think of us ✨';
    }, 500);
  }
}

// ==================== FLORAL TRANSITION ====================
function startFloralTransition() {
  const curtain = document.getElementById('floral-curtain');
  curtain.classList.add('active');
  curtain.style.display = 'block';
  curtain.style.zIndex = '200';

  // Make curtain cover screen
  const left = curtain.querySelector('.curtain-left');
  const right = curtain.querySelector('.curtain-right');
  left.style.transform = 'translateX(0)';
  right.style.transform = 'translateX(0)';

  // Hide lock screen
  setTimeout(() => {
    showScreen('screen-transition');
    $('#screen-lock').style.display = 'none';

    // Reveal main content behind curtain
    const main = document.getElementById('main-content');
    main.classList.remove('hidden');
    main.style.opacity = '0';

    // Open curtain
    setTimeout(() => {
      left.style.transition = 'transform 1.3s cubic-bezier(0.77,0,0.18,1)';
      right.style.transition = 'transform 1.3s cubic-bezier(0.77,0,0.18,1)';
      left.classList.add('open');
      right.classList.add('open');

      main.style.transition = 'opacity 0.6s ease';
      main.style.opacity = '1';

      setTimeout(() => {
        curtain.classList.remove('active');
        curtain.style.display = 'none';
        $('#screen-transition').style.display = 'none';
        initMainContent();
        spawnPetals();
      }, 1400);
    }, 300);
  }, 300);
}

// ==================== MAIN CONTENT ====================
function initMainContent() {
  initSong();
  initLetter();
  initMemories();
  initTimeline();
  initWishes();
  initModal();
  initScrollAnimations();
}

// ==================== PETALS ====================
function spawnPetals() {
  const container = document.getElementById('petals-container');
  const colors = ['#f7d7df', '#e8a3b9', '#f5d8c6', '#ffffff', '#c8a46b'];
  for (let i = 0; i < 24; i++) {
    const p = document.createElement('div');
    p.className = 'petal';
    const size = Math.random() * 14 + 6;
    const delay = Math.random() * 8;
    const dur = Math.random() * 8 + 7;
    p.style.cssText = `
      width:${size}px; height:${size * 0.65}px;
      background:${colors[Math.floor(Math.random() * colors.length)]};
      left:${Math.random() * 100}%;
      animation-duration:${dur}s;
      animation-delay:${delay}s;
      border-radius:${Math.random() > 0.5 ? '50% 0 50% 0' : '0 50% 0 50%'};
    `;
    container.appendChild(p);
  }
}

// ==================== SONG ====================
function initSong() {
  const audio = document.getElementById('audio-player');
  const playBtn = document.getElementById('ctrl-play');
  const art = document.getElementById('album-art');
  const fill = document.getElementById('progress-fill');
  const thumb = document.getElementById('progress-thumb');
  const currentTime = document.getElementById('time-current');
  const totalTime = document.getElementById('time-total');
  const progressBar = document.getElementById('progress-bar');
  const playIcon = playBtn.querySelector('.play-icon');

  document.getElementById('song-name').textContent = CONFIG.song.title;
  document.getElementById('song-artist').textContent = CONFIG.song.artist;
  document.getElementById('song-caption').textContent = `"${CONFIG.song.caption}"`;

  if (CONFIG.song.src) {
    audio.src = CONFIG.song.src;
  }

  let isPlaying = false;

  playBtn.addEventListener('click', () => {
    if (!CONFIG.song.src) {
      // Simulate playback for demo
      isPlaying = !isPlaying;
      if (isPlaying) {
        playIcon.textContent = '⏸';
        art.classList.add('playing');
        simulateProgress();
      } else {
        playIcon.textContent = '▶';
        art.classList.remove('playing');
        clearInterval(window._simInterval);
      }
      return;
    }
    if (isPlaying) {
      audio.pause();
      playIcon.textContent = '▶';
      art.classList.remove('playing');
    } else {
      audio.play();
      playIcon.textContent = '⏸';
      art.classList.add('playing');
    }
    isPlaying = !isPlaying;
  });

  audio.addEventListener('timeupdate', () => {
    if (!audio.duration) return;
    const pct = (audio.currentTime / audio.duration) * 100;
    fill.style.width = pct + '%';
    thumb.style.left = pct + '%';
    currentTime.textContent = formatTime(audio.currentTime);
  });

  audio.addEventListener('loadedmetadata', () => {
    totalTime.textContent = formatTime(audio.duration);
  });

  audio.addEventListener('ended', () => {
    playIcon.textContent = '▶';
    art.classList.remove('playing');
    isPlaying = false;
    fill.style.width = '0%';
    thumb.style.left = '0%';
    currentTime.textContent = '0:00';
  });

  progressBar.addEventListener('click', (e) => {
    const rect = progressBar.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    if (audio.duration) {
      audio.currentTime = pct * audio.duration;
    }
  });

  let simTime = 0;
  window._simInterval = null;
  function simulateProgress() {
    const total = 214; // 3:34 simulated
    totalTime.textContent = '3:34';
    clearInterval(window._simInterval);
    window._simInterval = setInterval(() => {
      simTime++;
      if (!isPlaying) { clearInterval(window._simInterval); return; }
      const pct = (simTime / total) * 100;
      fill.style.width = pct + '%';
      thumb.style.left = pct + '%';
      currentTime.textContent = formatTime(simTime);
      if (simTime >= total) {
        clearInterval(window._simInterval);
        playIcon.textContent = '▶';
        art.classList.remove('playing');
        isPlaying = false;
        simTime = 0;
        fill.style.width = '0%';
        thumb.style.left = '0%';
        currentTime.textContent = '0:00';
      }
    }, 1000);
  }
}

// ==================== LETTER ====================
function initLetter() {
  const envelope = document.getElementById('envelope');
  const letterPaper = document.getElementById('letter-paper');
  const flap = document.getElementById('env-flap');
  const letterBody = document.getElementById('letter-body');

  letterBody.innerHTML = CONFIG.letter;

  let opened = false;
  envelope.addEventListener('click', () => {
    if (opened) return;
    opened = true;

    // Flap opens
    flap.classList.add('open');

    setTimeout(() => {
      envelope.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      envelope.style.opacity = '0';
      envelope.style.transform = 'translateY(-20px) scale(0.95)';
      setTimeout(() => {
        envelope.style.display = 'none';
        letterPaper.style.display = 'block';
      }, 500);
    }, 600);
  });
}

// ==================== MEMORIES CAROUSEL ====================
function initMemories() {
  const track = document.getElementById('carousel-track');
  const dotsContainer = document.getElementById('carousel-dots');
  const arrowLeft = document.getElementById('arrow-left');
  const arrowRight = document.getElementById('arrow-right');
  const surprise = document.getElementById('memory-surprise');
  const surpriseFront = document.getElementById('surprise-front');
  const surpriseReveal = document.getElementById('surprise-reveal');

  const rotations = [-2, 1.5, -1, 2, -1.5, 1, -2.5];
  let inner;

  // Build inner container
  inner = document.createElement('div');
  inner.className = 'polaroids-inner';
  track.appendChild(inner);

  CONFIG.memories.forEach((mem, i) => {
    const slide = document.createElement('div');
    slide.className = 'polaroid';

    const card = document.createElement('div');
    card.className = 'polaroid-card';
    card.style.setProperty('--rot', `${rotations[i % rotations.length]}deg`);

    const img = document.createElement('img');
    img.className = 'polaroid-img';
    img.src = `assets/photos/${mem.file}`;
    img.alt = mem.title;
    img.loading = 'lazy';

    const title = document.createElement('p');
    title.className = 'polaroid-title';
    title.textContent = mem.title;

    const date = document.createElement('p');
    date.className = 'polaroid-date';
    date.textContent = mem.date;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(date);
    slide.appendChild(card);
    inner.appendChild(slide);

    // Dot
    const dot = document.createElement('div');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  let current = 0;
  const total = CONFIG.memories.length;

  function goTo(idx) {
    current = (idx + total) % total;
    inner.style.transform = `translateX(-${current * 100}%)`;
    $$('.carousel-dot').forEach((d, i) => d.classList.toggle('active', i === current));
  }

  arrowLeft.addEventListener('click', () => goTo(current - 1));
  arrowRight.addEventListener('click', () => goTo(current + 1));

  // Touch swipe
  let startX = 0;
  inner.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
  inner.addEventListener('touchend', (e) => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
  });

  // Surprise
  let revealed = false;
  surprise.addEventListener('click', () => {
    if (!revealed) {
      revealed = true;
      surpriseFront.classList.add('hidden');
      surpriseReveal.classList.remove('hidden');
    }
  });
}

// ==================== TIMELINE ====================
function initTimeline() {
  const container = document.getElementById('timeline-items');

  CONFIG.timeline.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'timeline-item';
    div.innerHTML = `
      <div class="timeline-dot">${item.emoji}</div>
      <div class="timeline-card">
        <div class="timeline-milestone">${item.milestone}</div>
        <div class="timeline-date">${item.date}</div>
        <div class="timeline-desc">${item.desc}</div>
      </div>
    `;
    container.appendChild(div);
  });

  // Animate line fill as user scrolls
  const lineFill = document.getElementById('timeline-line-fill');
  const timelineWrapper = $('.timeline-wrapper');

  function updateLineOnScroll() {
    if (!timelineWrapper) return;
    const rect = timelineWrapper.getBoundingClientRect();
    const wh = window.innerHeight;
    const totalH = timelineWrapper.offsetHeight;
    const scrolled = wh - rect.top;
    const pct = Math.min(Math.max((scrolled / (totalH + wh)) * 180, 0), 100);
    lineFill.style.height = pct + '%';
  }

  window.addEventListener('scroll', updateLineOnScroll, { passive: true });
  updateLineOnScroll();
}

// ==================== WISHES ====================
function initWishes() {
  document.getElementById('wishes-body').innerHTML = CONFIG.wishes;
}

// ==================== MODAL ====================
function initModal() {
  const btn = document.getElementById('floating-btn');
  const overlay = document.getElementById('modal-overlay');
  const closeBtn = document.getElementById('modal-close');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = CONFIG.finalMessage;

  btn.addEventListener('click', () => {
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  });

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  function closeModal() {
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

// ==================== SCROLL ANIMATIONS ====================
function initScrollAnimations() {
  // Add fade-up to sections
  const sections = document.querySelectorAll('.section:not(.section-hero)');
  sections.forEach(sec => {
    sec.querySelectorAll('.song-player, .letter-wrapper, .carousel-wrapper, .carousel-dots, .memory-surprise, .wishes-card').forEach(el => {
      el.classList.add('fade-up');
    });
  });

  // Also wrap section-label
  document.querySelectorAll('.section-label').forEach(el => el.classList.add('fade-up'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // Timeline items
  const tlObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.timeline-item').forEach(el => tlObserver.observe(el));
}

// ==================== BOOT ====================
window.addEventListener('DOMContentLoaded', () => {
  initLock();
  initLoading();
});
