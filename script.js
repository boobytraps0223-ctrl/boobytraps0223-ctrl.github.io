const members = [
  {slug:'fuma',no:'01',name:'ふまふま。',roman:'FUMAFUMA',birthday:'5月13日',color:'#7baa17',image:'assets/fuma.png',smile:'assets/fuma-smile.png',x:'https://x.com/Fumafuma_kero',youtube:'https://www.youtube.com/channel/UC87OYu-XQcVXQuw3gD_huEw',twitch:'https://www.twitch.tv/fumafuma_kero',bio:'句点までが名前、ふまふま。です。<br>主に動画編集や企画制作をしています。<br>オタマジャクシの尻尾がチャームポイントで、都市伝説や怪談話が大好き。<br>最近、英語でThreeが書けるようになりました。',tags:['EDIT','PLANNING','BOOBY TRAPS']},
  {slug:'kuroyan',no:'02',name:'黒ヤン',roman:'KUROYAN',birthday:'11月13日',color:'#F79428',image:'assets/kuroyan.png',smile:'assets/kuroyan-smile.png',x:'https://x.com/KuroYan_1113',twitch:'https://www.twitch.tv/kuronosukey',bio:'ジャンルを問わず、節操なくゲーム配信をしている黒ヤン。<br>FPS、MOBA、サバイバルなどを中心にプレイ中！<br>相棒のフクロウ「お凛ちゃん」のお世話係。効率重視のゲーム脳で、たまに倫理観がバグります。',tags:['FPS','MOBA','SURVIVAL']},
  {slug:'poke',no:'03',name:'ぽけぷりん',roman:'POKEPURIN',birthday:'7月1日',color:'#FFE500',image:'assets/poke.png',smile:'assets/poke-smile.png',x:'https://x.com/pokepurin0701',youtube:'https://www.youtube.com/@pokepurin0701',twitch:'https://www.twitch.tv/pokepurin0701',tiktok:'https://www.tiktok.com/@pokepurin0701',goods:'https://pokepurin.booth.pm/',bio:'ぷりんの帽子を被ったVTuber、ぽけぷりん。<br>ブビトラのマスコットの生みの親で、Live2Dやイラスト、公式サイト制作など、クリエイティブ全般を担当。<br>破天荒なボケを武器に、今年のYouTube収益化を目指して日々奮闘中！',tags:['SHORTS','VALORANT','SING']},
  {slug:'oranjina',no:'04',name:'0RaNge117',roman:'0RaNge117',birthday:'1月17日',color:'#CC4F33',image:'assets/oranjina.png',smile:'assets/oranjina-smile.webp',x:'https://x.com/0RaNge117',youtube:'https://www.youtube.com/@0RaNge117',twitch:'https://www.twitch.tv/0RaNge117',tiktok:'https://www.tiktok.com/@senpanorange?is_from_webapp=1&sender_device=pc',instagram:'https://www.instagram.com/senpanorange',bio:'FPSやロールプレイ<br>歌ってみたをやっています<br><br>声がとても大きいです',tags:['GAME','STREAM','BOOBY TRAPS']},
  {slug:'shoyu',no:'05',name:'しょ～ゆ',roman:'SHOYU',birthday:'12月24日',color:'#3864a2',image:'assets/shoyu.png',smile:'assets/shoyu-smile.png',x:'https://x.com/syoyu3desu',youtube:'https://www.youtube.com/channel/UCrJhSQqMsD_KpOAbDSrEY7Q',twitch:'https://www.twitch.tv/syoyu3',bio:'ブビトラの賑やかし兼青担当、しょ～ゆ。<br>個人での配信活動や、ブビトラの動画素材作成なども行っています。',tags:['GAME','MATERIAL','TWITCH']},
  {slug:'ruka',no:'06',name:'るかぴのぴ',roman:'RUKAPINOPI',birthday:'10月29日',color:'#e23d28',image:'assets/ruka.png',smile:'assets/ruka-smile.png',x:'https://x.com/rukasan_dayo',youtube:'https://www.youtube.com/@Rukasan_dayo',twitch:'https://www.twitch.tv/rukasan_dayo',tiktok:'https://www.tiktok.com/@noname_chan29',instagram:'https://www.instagram.com/rukaaaa_a/?hl=ja',bio:'FPSとRPGが好きな、るかぴのぴです。<br>るかぴって呼んでください！「のぴ」は添えてあるようなものです（？）<br>配信活動だけでなく、歌ってみたや写真、旅、バイク、生け花などなど。<br>そのとき「やりたい！」と思ったことを自由に楽しんでいます。<br>この「るかぴのぴ」ってやつ、噛めば噛むほど味が出るやつです。',tags:['FPS','RPG','SING']}
];

const character = (m, profile = false) => `<div class="${profile ? 'profile-visual' : 'member-image'} member-${m.slug}" ${profile ? 'tabindex="0"' : ''}><img class="normal" src="${m.image}" alt="${m.name}の通常表情"><img class="smile" src="${m.smile}" alt="${m.name}の笑顔" aria-hidden="true"><span class="${profile ? 'profile-number' : ''}">${m.no}</span></div>`;

const movieData = {
  fuma: {
    video: {id:'GH0wCVlb2H0', title:'全てはカメラが見ていた!? トロールしていただけなのに…【Among Us】'}
  },
  poke: {
    video: {id:'zpRfa8Y61iQ', title:'スモークなのに先頭行ったら…【VALORANT】'},
    cover: {id:'1XjUpJCjVNw', title:'いますぐ輪廻 / covered by ぽけぷりん'},
    short: {id:'2pJVnZGAQRc', title:'絶望の1vs5からAce【音ハメ？】'}
  },
  oranjina: {
    video: {id:'3FNI3V54PNc', title:'【SURGECity】しろまんたヘリと大攻防戦からの本署ゴールイン直前でドパ救出!?'},
    short: {id:'TmTVGVbc6Cg', title:'ぐちつぼを許さない【Project Zomboid】'}
  },
  shoyu: {
    video: {id:'Wp_IbP240yc', title:'クトゥルフ神話TRPG「壊胎」しょ～ゆ視点'},
    short: {id:'CbNkRj_UqsI', title:'ランクで死んだのにやかましいやつ【切り抜き】'}
  },
  ruka: {
    video: {id:'JnnMPX17CI4', title:'シャンティ 歌ってみた / るかぴのぴ'},
    short: {id:'U0MjE9CV_1M', title:'自由に捕らわれる。#歌ってみた'}
  }
};

const birthdayMessages = {
  fuma: 'ふまふま。に、怪談よりも驚きに満ちた楽しい一年が訪れますように！',
  kuroyan: '黒ヤンに、お凛ちゃんと最高効率で楽しめる一年が訪れますように！',
  poke: 'ぽけぷりんに、やりたいことが全部形になる、甘くて楽しい一年が訪れますように！',
  oranjina: '0RaNge117に、声量MAXの笑いと最高の思い出があふれる一年が訪れますように！',
  shoyu: 'しょ～ゆに、にぎやかで青く輝く最高の一年が訪れますように！',
  ruka: 'るかぴのぴに、歌も旅も「やりたい！」が全部叶う、自由で楽しい一年が訪れますように！'
};

const birthdayParts = birthday => {
  const matched = birthday.match(/(\d+)月(\d+)日/);
  return matched ? {month: Number(matched[1]), day: Number(matched[2])} : null;
};

const japanToday = () => {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Tokyo',
    month: 'numeric',
    day: 'numeric'
  }).formatToParts(new Date());
  return {
    month: Number(parts.find(part => part.type === 'month').value),
    day: Number(parts.find(part => part.type === 'day').value)
  };
};

const isBirthdayEventDay = member => {
  const preview = new URLSearchParams(location.search).get('birthday');
  if (preview === member.slug) return true;
  const birthday = birthdayParts(member.birthday);
  const today = japanToday();
  return birthday && birthday.month === today.month && birthday.day === today.day;
};

const birthdaySection = member => {
  if (!isBirthdayEventDay(member)) return '';
  return `<section class="birthday-event" aria-labelledby="birthday-title">
    <div class="birthday-confetti" aria-hidden="true"></div>
    <div class="birthday-heading">
      <div>
        <p class="section-label">${member.roman} — BIRTHDAY EVENT</p>
        <h2 id="birthday-title">MAKE A WISH!</h2>
      </div>
      <button class="birthday-sound" type="button" aria-pressed="false" aria-label="誕生日イベントの音をオンにする"><span aria-hidden="true">🔇</span> SOUND OFF</button>
    </div>
    <div class="birthday-stage">
      <div class="birthday-copy">
        <p class="birthday-date">${member.birthday} · JAPAN TIME</p>
        <h3 class="birthday-prompt">ろうそくをタップしてね！</h3>
        <p>3本のろうそくを、ひとつずつ消してお祝いしよう。</p>
      </div>
      <div class="cake-wrap" aria-label="${member.name}の誕生日ケーキ">
        <div class="cake-candles">
          ${[1,2,3].map(number => `<button class="birthday-candle" type="button" aria-label="${number}本目のろうそくを消す">
            <span class="candle-smoke" aria-hidden="true"></span>
            <span class="candle-flame" aria-hidden="true"></span>
            <span class="candle-stick" aria-hidden="true"></span>
          </button>`).join('')}
        </div>
        <div class="cake-top"><span></span><span></span><span></span><span></span><span></span></div>
        <div class="cake-layer cake-layer-top"><i></i><i></i><i></i><i></i></div>
        <div class="cake-layer cake-layer-bottom"><i></i><i></i><i></i><i></i><i></i></div>
        <div class="cake-plate"></div>
      </div>
    </div>
    <div class="birthday-finale" hidden>
      <p>HAPPY BIRTHDAY!</p>
      <h3>${member.name}</h3>
      <span>${birthdayMessages[member.slug]}</span>
    </div>
    <p class="birthday-note">日本時間の誕生日限定イベント</p>
  </section>`;
};

const initBirthdayEvent = member => {
  const event = document.querySelector('.birthday-event');
  if (!event) return;

  const soundButton = event.querySelector('.birthday-sound');
  const candles = [...event.querySelectorAll('.birthday-candle')];
  const finale = event.querySelector('.birthday-finale');
  const prompt = event.querySelector('.birthday-prompt');
  let soundOn = false;
  let audioContext;

  const tone = (frequency, duration = 0.12, delay = 0) => {
    if (!soundOn) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    audioContext ||= new AudioContext();
    if (audioContext.state === 'suspended') audioContext.resume();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const start = audioContext.currentTime + delay;
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(frequency, start);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(0.12, start + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    oscillator.connect(gain).connect(audioContext.destination);
    oscillator.start(start);
    oscillator.stop(start + duration + 0.02);
  };

  soundButton.addEventListener('click', () => {
    soundOn = !soundOn;
    soundButton.setAttribute('aria-pressed', String(soundOn));
    soundButton.setAttribute('aria-label', `誕生日イベントの音を${soundOn ? 'オフ' : 'オン'}にする`);
    soundButton.innerHTML = `<span aria-hidden="true">${soundOn ? '🔊' : '🔇'}</span> SOUND ${soundOn ? 'ON' : 'OFF'}`;
    if (soundOn) tone(659, 0.13);
  });

  const celebrate = () => {
    event.classList.add('is-complete');
    prompt.textContent = '願いごと、届いたよ！';
    finale.hidden = false;
    const confetti = event.querySelector('.birthday-confetti');
    const colors = [member.color, '#FFE500', '#7baa17', '#3864a2', '#e23d28', '#F79428', '#ffffff'];
    confetti.innerHTML = Array.from({length: 48}, (_, index) => {
      const left = Math.random() * 100;
      const delay = Math.random() * 0.7;
      const duration = 2.2 + Math.random() * 1.5;
      const rotate = 180 + Math.random() * 720;
      const color = colors[index % colors.length];
      return `<i style="--x:${left}%;--delay:${delay}s;--duration:${duration}s;--spin:${rotate}deg;--confetti:${color}"></i>`;
    }).join('');
    [523, 659, 784, 1047].forEach((frequency, index) => tone(frequency, 0.28, index * 0.11));
  };

  candles.forEach(candle => candle.addEventListener('click', () => {
    if (candle.classList.contains('is-out')) return;
    candle.classList.add('is-out');
    candle.setAttribute('aria-label', '消えたろうそく');
    tone(392, 0.1);
    if (candles.every(item => item.classList.contains('is-out'))) celebrate();
  }));
};

const movieCard = (item, type, memberName) => {
  const isShort = type === 'short';
  const label = type === 'cover' ? 'COVER / 歌ってみた' : isShort ? 'NEW SHORT / 最新Shorts' : 'NEW VIDEO / 最新横動画';
  return `<article class="${isShort ? 'short-card' : ''}"><p>${label}</p><div class="${isShort ? 'short-frame' : 'video-frame'}"><iframe src="https://www.youtube.com/embed/${item.id}" title="${memberName} ${label}" loading="lazy" allowfullscreen></iframe></div><h3>${item.title}</h3></article>`;
};

const moviesSection = m => {
  const data = movieData[m.slug];
  const cards = data ? [
    data.video && movieCard(data.video, 'video', m.name),
    data.cover && movieCard(data.cover, 'cover', m.name),
    data.short && movieCard(data.short, 'short', m.name)
  ].filter(Boolean) : [];
  const content = cards.length
    ? cards.join('')
    : '<article class="video-empty"><p>YOUTUBE</p><h3>YouTubeチャンネルのリンクを準備中です。</h3><span>リンクが決まり次第、最新動画とShortsを表示します。</span></article>';
  return `<section class="profile-movies"><div class="title-row"><div><p class="section-label">${m.roman} — MOVIES</p><h2>WATCH<br>THE LATEST.</h2></div>${m.youtube ? `<a href="${m.youtube}" target="_blank" rel="noreferrer">YouTubeですべて見る ↗</a>` : ''}</div><div class="video-grid movie-count-${cards.length}">${content}</div></section>`;
};

document.querySelector('#memberGrid').innerHTML = members.map(m => `<a class="member-card" href="#member/${m.slug}" style="--member:${m.color}">${character(m)}<div class="member-name"><b>${m.name}</b><small>${m.roman}</small><i>↗</i></div></a>`).join('');

function route() {
  const slug = location.hash.startsWith('#member/') ? location.hash.slice(8) : '';
  const m = members.find(x => x.slug === slug);
  const home = document.querySelector('#homePage');
  const profile = document.querySelector('#profilePage');
  if (!m) {
    home.hidden = false;
    profile.hidden = true;
    return;
  }
  const i = members.indexOf(m);
  const next = members[(i + 1) % members.length];
  const links = [['X / TWITTER',m.x],['YOUTUBE',m.youtube],['TWITCH',m.twitch],['TIKTOK',m.tiktok],['INSTAGRAM',m.instagram],['SHOP',m.goods]].filter(x => x[1]);
  profile.style.setProperty('--member', m.color);
  profile.innerHTML = `<header class="profile-nav"><a href="#members">← BOOBY TRAPS</a><span>${m.no} / 06</span></header><section class="profile-hero">${character(m,true)}<div class="profile-copy"><p class="kicker">BOOBY TRAPS MEMBER</p><h1>${m.roman}</h1><h2>${m.name}</h2><div class="color-line"></div><p class="profile-birthday"><span>BIRTHDAY</span><strong>${m.birthday}</strong></p><p>${m.bio}</p><div class="tag-list">${m.tags.map(t => `<span>#${t}</span>`).join('')}</div><div class="profile-links">${links.map(([label,href]) => `<a href="${href}" target="_blank" rel="noreferrer">${label}<b>↗</b></a>`).join('')}</div></div></section>${birthdaySection(m)}${moviesSection(m)}<section class="profile-bottom"><a href="#members">← 6人のメンバー一覧</a><a href="#member/${next.slug}">NEXT：${next.name} →</a></section>`;
  home.hidden = true;
  profile.hidden = false;
  initBirthdayEvent(m);
  scrollTo(0,0);
}

addEventListener('hashchange', route);
route();
