(function () {
  "use strict";

  var STORE = "hebrew-beginners-v1";

  var letters = [
    { g: "א", n: "Alef", zh: "阿列夫", s: "無聲 / 喉塞音", tr: "ʾ", ex: "אַבָּא", exZh: "爸爸（aba）", a: "alef" },
    { g: "ב", n: "Bet", zh: "貝特", s: "b / v", tr: "b / v", ex: "בַּיִת", exZh: "房子（bayit）", a: "bet" },
    { g: "ג", n: "Gimel", zh: "吉梅爾", s: "g", tr: "g", ex: "גָּדוֹל", exZh: "大（gadol）", a: "gimel" },
    { g: "ד", n: "Dalet", zh: "達雷特", s: "d", tr: "d", ex: "דֶּלֶת", exZh: "門（delet）", a: "dalet" },
    { g: "ה", n: "He", zh: "赫", s: "h", tr: "h", ex: "הוּא", exZh: "他（hu）", a: "he" },
    { g: "ו", n: "Vav", zh: "瓦夫", s: "v / o / u", tr: "v", ex: "וֶרֶד", exZh: "玫瑰（vered）", a: "vav" },
    { g: "ז", n: "Zayin", zh: "扎因", s: "z", tr: "z", ex: "זֶה", exZh: "這個（ze）", a: "zayin" },
    { g: "ח", n: "Het", zh: "赫特", s: "kh（喉音）", tr: "ḥ", ex: "חָתוּל", exZh: "貓（khatul）", a: "het" },
    { g: "ט", n: "Tet", zh: "泰特", s: "t", tr: "ṭ", ex: "טוֹב", exZh: "好（tov）", a: "tet" },
    { g: "י", n: "Yod", zh: "尤德", s: "y / i", tr: "y", ex: "יָד", exZh: "手（yad）", a: "yod" },
    { g: "כ", n: "Kaf", zh: "卡夫", s: "k / kh", tr: "k", ex: "כֶּלֶב", exZh: "狗（kelev）", a: "kaf", final: "ך" },
    { g: "ל", n: "Lamed", zh: "拉梅德", s: "l", tr: "l", ex: "לֶחֶם", exZh: "麵包（lechem）", a: "lamed" },
    { g: "מ", n: "Mem", zh: "梅姆", s: "m", tr: "m", ex: "מַיִם", exZh: "水（mayim）", a: "mem", final: "ם" },
    { g: "נ", n: "Nun", zh: "農", s: "n", tr: "n", ex: "נֶפֶשׁ", exZh: "靈魂（nefesh）", a: "nun", final: "ן" },
    { g: "ס", n: "Samekh", zh: "薩梅赫", s: "s", tr: "s", ex: "סֵפֶר", exZh: "書（sefer）", a: "samekh" },
    { g: "ע", n: "Ayin", zh: "阿因", s: "無聲 / 喉塞音", tr: "ʿ", ex: "עַיִן", exZh: "眼睛（ayin）", a: "ayin" },
    { g: "פ", n: "Pe", zh: "佩", s: "p / f", tr: "p", ex: "פֶּה", exZh: "嘴（pe）", a: "pe", final: "ף" },
    { g: "צ", n: "Tsadi", zh: "察迪", s: "ts", tr: "ṣ", ex: "צֶדֶק", exZh: "正義（tsedek）", a: "tsadi", final: "ץ" },
    { g: "ק", n: "Qof", zh: "庫夫", s: "k", tr: "q", ex: "קָטָן", exZh: "小（katan）", a: "qof" },
    { g: "ר", n: "Resh", zh: "雷什", s: "r（喉音）", tr: "r", ex: "רֹאשׁ", exZh: "頭（rosh）", a: "resh" },
    { g: "ש", n: "Shin", zh: "辛", s: "sh / s", tr: "sh", ex: "שָׁלוֹם", exZh: "和平、你好（shalom）", a: "shin" },
    { g: "ת", n: "Tav", zh: "塔夫", s: "t", tr: "t", ex: "תּוֹדָה", exZh: "謝謝（toda）", a: "tav" }
  ];

  var vowels = [
    { mark: "ַ", name: "Patah", sound: "a", ex: "בַּ", tr: "ba", a: "ba" },
    { mark: "ֶ", name: "Segol", sound: "e", ex: "בֶּ", tr: "be", a: "be" },
    { mark: "ִ", name: "Hiriq", sound: "i", ex: "בִּ", tr: "bi", a: "bi" },
    { mark: "ֹ", name: "Holam", sound: "o", ex: "בֹּ", tr: "bo", a: "bo" },
    { mark: "ֻ", name: "Qubuts", sound: "u", ex: "בֻּ", tr: "bu", a: "bu" }
  ];

  var vocab = [
    { he: "שָׁלוֹם", tr: "shalom", zh: "你好 / 和平", a: "shalom" },
    { he: "תּוֹדָה", tr: "toda", zh: "謝謝", a: "toda" },
    { he: "כֵּן", tr: "ken", zh: "是", a: "ken" },
    { he: "לֹא", tr: "lo", zh: "不", a: "lo" },
    { he: "אֲנִי", tr: "ani", zh: "我", a: "ani" },
    { he: "אַתָּה", tr: "ata", zh: "你（陽性）", a: "ata" },
    { he: "אַתְּ", tr: "at", zh: "你（陰性）", a: "at" },
    { he: "מַיִם", tr: "mayim", zh: "水", a: "mayim" },
    { he: "לֶחֶם", tr: "lechem", zh: "麵包", a: "lechem" },
    { he: "בַּיִת", tr: "bayit", zh: "房子", a: "bayit" },
    { he: "סֵפֶר", tr: "sefer", zh: "書", a: "sefer" },
    { he: "טוֹב", tr: "tov", zh: "好", a: "tov" }
  ];

  var phrases = [
    { he: "שָׁלוֹם", tr: "shalom", zh: "你好／再見", a: "shalom" },
    { he: "בֹּקֶר טוֹב", tr: "boker tov", zh: "早安", a: "boker-tov" },
    { he: "עֶרֶב טוֹב", tr: "erev tov", zh: "晚上好", a: "erev-tov" },
    { he: "לַיְלָה טוֹב", tr: "layla tov", zh: "晚安", a: "layla-tov" },
    { he: "מָה שְׁלוֹמְךָ?", tr: "ma shlomkha?", zh: "你好嗎？（對男性）", a: "ma-shlomkha" },
    { he: "מָה שְׁלוֹמֵךְ?", tr: "ma shlomekh?", zh: "你好嗎？（對女性）", a: "ma-shlomekh" },
    { he: "תּוֹדָה רַבָּה", tr: "toda raba", zh: "非常謝謝", a: "toda-raba" },
    { he: "בְּבַקָּשָׁה", tr: "bevakasha", zh: "請／不客氣", a: "bevakasha" },
    { he: "סְלִיחָה", tr: "slikha", zh: "抱歉", a: "slikha" },
    { he: "לְהִתְרָאוֹת", tr: "lehitraot", zh: "再見", a: "lehitraot" },
    { he: "הָבָה נָגִילָה", tr: "hava nagila", zh: "來吧，讓我們歡喜（著名希伯來歌曲）", a: "hava-nagila" }
  ];

  var dialogue = [
    { who: "Noa", he: "שָׁלוֹם! מָה שְׁלוֹמְךָ?", tr: "shalom! ma shlomkha?", zh: "你好！你好嗎？", a: "dialog-1" },
    { who: "Dan", he: "שָׁלוֹם, טוֹב. תּוֹדָה.", tr: "shalom, tov. toda.", zh: "你好，我很好。謝謝。", a: "dialog-2" },
    { who: "Noa", he: "אֲנִי נוֹעָה. מָה שִׁמְךָ?", tr: "ani Noa. ma shimkha?", zh: "我是 Noa。你叫什麼名字？", a: "dialog-3" },
    { who: "Dan", he: "אֲנִי דָּן. לְהִתְרָאוֹת!", tr: "ani Dan. lehitraot!", zh: "我是 Dan。再見！", a: "dialog-4" }
  ];

  var numbers = [
    { n: "1", m: "אֶחָד", mt: "echad", f: "אַחַת", ft: "achat" },
    { n: "2", m: "שְׁנַיִם", mt: "shnayim", f: "שְׁתַּיִם", ft: "shtayim" },
    { n: "3", m: "שְׁלוֹשָׁה", mt: "shlosha", f: "שָׁלוֹשׁ", ft: "shalosh" },
    { n: "4", m: "אַרְבָּעָה", mt: "arba'a", f: "אַרְבַּע", ft: "arba" },
    { n: "5", m: "חֲמִשָּׁה", mt: "chamisha", f: "חָמֵשׁ", ft: "chamesh" },
    { n: "6", m: "שִׁשָּׁה", mt: "shisha", f: "שֵׁשׁ", ft: "shesh" },
    { n: "7", m: "שִׁבְעָה", mt: "shiv'a", f: "שֶׁבַע", ft: "sheva" },
    { n: "8", m: "שְׁמוֹנָה", mt: "shmona", f: "שְׁמוֹנֶה", ft: "shmone" },
    { n: "9", m: "תִּשְׁעָה", mt: "tish'a", f: "תֵּשַׁע", ft: "tesha" },
    { n: "10", m: "עֲשָׂרָה", mt: "asara", f: "עֶשֶׂר", ft: "eser" }
  ];

  var quiz = [
    { q: "哪一個字母是 shin（שׁ）？", opts: ["ש", "ס", "ת", "מ"], answer: 0 },
    { q: "哪一個是 mem 的字尾形？", opts: ["מ", "ם", "ן", "ך"], answer: 1 },
    { q: "שָׁלוֹם 是什麼意思？", opts: ["謝謝", "你好／和平", "再見", "請"], answer: 1 },
    { q: "哪一個字是「水」？", opts: ["לֶחֶם", "סֵפֶר", "מַיִם", "בַּיִת"], answer: 2 },
    { q: "אַתְּ 是什麼意思？", opts: ["我", "你（陽性）", "你（陰性）", "他"], answer: 2 },
    { q: "希伯來文的定冠詞是？", opts: ["ה", "ו", "ב", "ל"], answer: 0 },
    { q: "טוֹב 的意思是？", opts: ["大", "小", "好", "書"], answer: 2 },
    { q: "哪一個是「3」（陰性）？", opts: ["שָׁלוֹשׁ", "שְׁלוֹשָׁה", "שֵׁשׁ", "שֶׁבַע"], answer: 0 },
    { q: "希伯來文閱讀方向是？", opts: ["左到右", "右到左", "上到下", "沒有固定"], answer: 1 },
    { q: "תּוֹדָה 的意思是？", opts: ["你好", "謝謝", "再見", "抱歉"], answer: 1 }
  ];

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function he(text, cls) {
    return '<span class="he ' + (cls || "") + '" lang="he" dir="rtl">' + esc(text) + "</span>";
  }

  function audioBtn(name, label) {
    return '<button class="audio-btn" data-audio="assets/audio/' + name + '.mp3" aria-label="播放發音">' + (label || "聽") + "</button>";
  }

  /* letters */
  var grid = $("#letterGrid");
  letters.forEach(function (l) {
    var b = document.createElement("button");
    b.className = "letter-card";
    b.type = "button";
    b.innerHTML = '<span class="letter-glyph" lang="he" dir="rtl">' + l.g + '</span><span class="letter-name">' + l.n + " · " + l.zh + "</span>";
    b.addEventListener("click", function () { openLetter(l); });
    grid.appendChild(b);
  });

  var finals = $("#finalGrid");
  letters.filter(function (l) { return l.final; }).forEach(function (l) {
    var d = document.createElement("div");
    d.className = "final-chip";
    d.innerHTML = "<b lang='he' dir='rtl'>" + l.final + "</b>" + l.n + " 的字尾形";
    finals.appendChild(d);
  });

  var modal = $("#letterModal");
  var modalAudio = $("#modalAudio");
  function openLetter(l) {
    $("#modalLetter").textContent = l.g + (l.final ? " / " + l.final : "");
    $("#modalTitle").textContent = l.n + " · " + l.zh;
    $("#modalSound").textContent = "發音：" + l.s + "　轉寫：" + l.tr;
    $("#modalExample").textContent = l.ex;
    $("#modalExampleZh").textContent = l.exZh;
    modalAudio.setAttribute("data-audio", "assets/audio/letters/" + l.a + ".mp3");
    modal.hidden = false;
    $("#modalClose").focus();
  }
  function closeModal() { modal.hidden = true; }
  $("#modalClose").addEventListener("click", closeModal);
  modal.addEventListener("click", function (e) { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeModal(); });

  /* vowels */
  var vg = $("#vowelGrid");
  vowels.forEach(function (v) {
    var d = document.createElement("div");
    d.className = "vowel-card";
    d.innerHTML = '<span class="vowel-mark" lang="he" dir="rtl">' + v.ex + '</span><span class="vowel-name">' + v.name + '</span><span class="vowel-sound">' + v.sound + " · " + v.tr + "</span>";
    vg.appendChild(d);
  });
  var drill = $("#drillRow");
  ["בָּ", "בֵּ", "בִּ", "בּוֹ", "בּוּ"].forEach(function (t, i) {
    var b = document.createElement("button");
    b.className = "drill-btn";
    b.type = "button";
    b.innerHTML = "<span class='he' lang='he' dir='rtl'>" + t + "</span><span class='tr'>" + ["ba", "be", "bi", "bo", "bu"][i] + "</span>";
    b.setAttribute("data-audio", "assets/audio/vowels/" + ["ba", "be", "bi", "bo", "bu"][i] + ".mp3");
    drill.appendChild(b);
  });

  /* flashcards */
  var fg = $("#flashGrid");
  vocab.forEach(function (v) {
    var d = document.createElement("div");
    d.className = "flash-card";
    d.setAttribute("role", "button");
    d.setAttribute("tabindex", "0");
    d.setAttribute("aria-label", "單字卡：" + v.zh);
    d.innerHTML = '<div class="flash-inner"><div class="flash-face flash-front"><span class="flash-he" lang="he" dir="rtl">' + v.he + '</span><span class="flash-hint">點一下看意思</span></div><div class="flash-face flash-back"><span class="flash-zh">' + v.zh + '</span><span class="flash-tr">' + v.tr + '</span>' + audioBtn("words/" + v.a) + "</div></div>";
    d.addEventListener("click", function (e) {
      if (e.target.closest(".audio-btn")) return;
      d.classList.toggle("flipped");
    });
    d.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        d.classList.toggle("flipped");
      }
    });
    fg.appendChild(d);
  });

  /* dialogue */
  var dg = $("#dialogue");
  dialogue.forEach(function (l) {
    var d = document.createElement("div");
    d.className = "line";
    d.innerHTML = '<div><span class="who">' + l.who + '</span><div class="speech" lang="he" dir="rtl">' + l.he + '</div><div class="tr">' + l.tr + '</div><div class="zh">' + l.zh + "</div></div>" + audioBtn("phrases/" + l.a);
    dg.appendChild(d);
  });

  var pl = $("#phraseList");
  phrases.forEach(function (p) {
    var d = document.createElement("div");
    d.className = "phrase";
    d.innerHTML = he(p.he) + '<span class="tr">' + p.tr + '</span><span class="zh">' + p.zh + "</span>" + audioBtn("phrases/" + p.a);
    pl.appendChild(d);
  });

  /* numbers */
  var nt = $("#numberTable");
  nt.innerHTML = '<div class="num-row head"><span>#</span><span>陽性</span><span>陰性</span></div>';
  numbers.forEach(function (n) {
    var d = document.createElement("div");
    d.className = "num-row";
    d.innerHTML = '<span class="num-digit">' + n.n + '</span><span><span class="num-he" lang="he" dir="rtl">' + n.m + '</span><span class="num-tr">' + n.mt + '</span></span><span><span class="num-he" lang="he" dir="rtl">' + n.f + '</span><span class="num-tr">' + n.ft + "</span></span>";
    nt.appendChild(d);
  });

  /* quiz */
  var qb = $("#quizBox");
  quiz.forEach(function (q, qi) {
    var d = document.createElement("div");
    d.className = "q";
    d.setAttribute("data-q", qi);
    d.innerHTML = "<h3>" + (qi + 1) + ". " + q.q + "</h3>";
    var opts = document.createElement("div");
    opts.className = "q-opts";
    q.opts.forEach(function (o, oi) {
      var lab = document.createElement("label");
      lab.className = "q-opt";
      lab.innerHTML = '<input type="radio" name="q' + qi + '" value="' + oi + '"><span' + (/[\u0590-\u05FF]/.test(o) ? ' class="he" lang="he" dir="rtl"' : "") + ">" + o + "</span>";
      opts.appendChild(lab);
    });
    d.appendChild(opts);
    qb.appendChild(d);
  });

  $("#quizCheck").addEventListener("click", function () {
    var score = 0;
    quiz.forEach(function (q, qi) {
      var box = $('.q[data-q="' + qi + '"]');
      var picked = box.querySelector("input:checked");
      var opts = $$(".q-opt", box);
      box.classList.add("feedback");
      opts.forEach(function (o, oi) {
        o.classList.remove("correct", "wrong");
        if (oi === q.answer) o.classList.add("correct");
        if (picked && Number(picked.value) === oi && oi !== q.answer) o.classList.add("wrong");
      });
      if (picked && Number(picked.value) === q.answer) score++;
    });
    $("#quizScore").textContent = "答對 " + score + " / " + quiz.length;
    $("#quizRetry").hidden = false;
  });
  $("#quizRetry").addEventListener("click", function () {
    $$(".q").forEach(function (q) {
      q.classList.remove("feedback");
      $$("input", q).forEach(function (i) { i.checked = false; });
      $$(".q-opt", q).forEach(function (o) { o.classList.remove("correct", "wrong"); });
    });
    $("#quizScore").textContent = "";
    $("#quizRetry").hidden = true;
  });

  /* audio */
  var current = null;
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-audio]");
    if (!b) return;
    e.preventDefault();
    var src = b.getAttribute("data-audio");
    if (!src) return;
    if (current) { current.pause(); current = null; }
    current = new Audio(src);
    current.play().catch(function () {
      b.textContent = "無法播放";
      setTimeout(function () { b.textContent = "聽"; }, 1400);
    });
    b.classList.add("playing");
    setTimeout(function () { b.classList.remove("playing"); }, 600);
  });

  /* progress */
  var lessons = ["start", "alphabet", "vowels", "words", "greetings", "grammar", "numbers", "quiz"];
  var state = { done: {} };
  try { state = JSON.parse(localStorage.getItem(STORE)) || state; } catch (e) {}
  if (!state.done) state.done = {};

  function save() { try { localStorage.setItem(STORE, JSON.stringify(state)); } catch (e) {} }
  function updateProgress() {
    var n = lessons.filter(function (id) { return state.done[id]; }).length;
    $("#progressText").textContent = n + " / " + lessons.length;
    var pct = Math.round((n / lessons.length) * 100);
    $("#sideBar").style.width = pct + "%";
    $("#progressBar").style.width = pct + "%";
    $$(".complete-btn").forEach(function (b) {
      var id = b.getAttribute("data-complete");
      var done = !!state.done[id];
      b.classList.toggle("done", done);
      b.textContent = done ? "✓ 已完成" : "標記完成";
    });
    $$(".side-link").forEach(function (a) {
      var id = a.getAttribute("href").slice(1);
      a.classList.toggle("done", !!state.done[id]);
    });
  }
  $$(".complete-btn").forEach(function (b) {
    b.addEventListener("click", function () {
      var id = b.getAttribute("data-complete");
      state.done[id] = !state.done[id];
      save();
      updateProgress();
    });
  });
  $("#resetProgress").addEventListener("click", function () {
    state.done = {};
    save();
    updateProgress();
  });
  updateProgress();

  /* nav active + mobile menu */
  var side = $("#sidebar");
  $("#menuBtn").addEventListener("click", function () {
    var open = side.classList.toggle("open");
    $("#menuBtn").setAttribute("aria-expanded", open ? "true" : "false");
  });
  $$(".side-link").forEach(function (a) {
    a.addEventListener("click", function () { side.classList.remove("open"); });
  });

  if ("IntersectionObserver" in window) {
    var links = {};
    $$(".side-link").forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        Object.keys(links).forEach(function (k) {
          links[k].classList.toggle("active", k === en.target.id);
        });
      });
    }, { rootMargin: "-20% 0px -70% 0px" });
    $$(".lesson").forEach(function (s) { io.observe(s); });
  }
})();
