(() => {
  'use strict';
  const lessons = window.LESSONS;
  const $ = selector => document.querySelector(selector);
  const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  let state;
  try { state = JSON.parse(localStorage.getItem('pynote-v1')) || {}; } catch { state = {}; }
  if (!state || typeof state !== 'object' || Array.isArray(state)) state = {};
  for (const key of ['bookmarks', 'completed']) state[key] = Array.isArray(state[key]) ? state[key].filter(id => lessons.some(l => l.id === id)) : [];
  let filter = 'all';
  let toastTimer;
  function toast(message) { $('#toast').textContent = message; $('#toast').classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => $('#toast').classList.remove('show'), 2600); }
  function save() { try { localStorage.setItem('pynote-v1', JSON.stringify(state)); } catch { toast('저장 공간을 사용할 수 없어 이번 방문 동안만 기록됩니다.'); } }
  function route() { return location.hash.slice(1) || 'home'; }
  function highlight(code) {
    const tokens = /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|#[^\n]*|\b(?:from|import|for|in|if|else|elif|while|return|def|not|and|or|True|False|None|continue|break)\b|\b\d+\b|\b(?:print|range|len|sum|min|sorted|set|list|reversed|float|enumerate)\b)/g;
    let result = '', last = 0;
    for (const match of code.matchAll(tokens)) {
      result += esc(code.slice(last, match.index));
      const token = match[0];
      const cls = token[0] === '#' ? 'comment' : /^["']/.test(token) ? 'string' : /^\d/.test(token) ? 'number' : /^(print|range|len|sum|min|sorted|set|list|reversed|float|enumerate)$/.test(token) ? 'function' : 'keyword';
      result += `<span class="${cls}">${esc(token)}</span>`;
      last = match.index + token.length;
    }
    return result + esc(code.slice(last));
  }
  function codeBlock(code, output, key) {
    return `<div class="code-block"><div class="code-toolbar"><span><i></i> Python 3</span><button class="copy" data-copy="${key}">▢ <span>코드 복사</span></button></div><pre><code>${code.split('\n').map((line, i) => `<span class="code-line"><span class="line-number" aria-hidden="true">${i+1}</span><span>${highlight(line) || ' '}</span></span>`).join('')}</code></pre><div class="output"><span>출력 결과</span><pre>${esc(output)}</pre></div></div>`;
  }
  function card(l, index) {
    const done = state.completed.includes(l.id), bookmarked = state.bookmarks.includes(l.id);
    return `<article class="topic-card ${l.color}"><div class="card-top"><a class="topic-icon" href="#${l.id}" aria-label="${l.title} 학습">${l.icon}</a><span class="level">${l.level}</span><button class="bookmark ${bookmarked ? 'selected' : ''}" data-bookmark="${l.id}" aria-label="${l.title} 북마크" aria-pressed="${bookmarked}">${bookmarked ? '★' : '☆'}</button></div><a class="card-link" href="#${l.id}"><span class="card-index">NOTE ${String(index + 1).padStart(2, '0')} <span>· ${l.en}</span></span><h3>${l.title}</h3><p>${l.summary}</p><div class="tags">${l.tags.slice(0,2).map(tag=>`<span># ${tag}</span>`).join('')}</div><div class="card-bottom"><span>${done ? '<span class="done-text">✓ 학습 완료</span>' : `◷ ${l.minutes}분 · 코드 패턴 2개`}</span><span class="card-arrow">↗</span></div></a></article>`;
  }
  function dashboard(bookmarks = false) {
    const count = state.completed.length, percent = Math.round(count / lessons.length * 100);
    const next = lessons.find(l => !state.completed.includes(l.id)) || lessons[0];
    const query = $('#search').value.trim().toLocaleLowerCase();
    const visible = lessons.filter(l => (!bookmarks || state.bookmarks.includes(l.id)) && (filter === 'all' || l.level === filter) && `${l.id} ${l.title} ${l.en} ${l.summary} ${l.tags.join(' ')}`.toLocaleLowerCase().includes(query));
    $('#main').innerHTML = `${!bookmarks && !query ? `<section class="welcome"><div class="eyebrow"><span></span> YOUR DAILY DOSE OF PYTHON</div><h1>생각을 코드로,<br>한 줄씩 쌓아가는 실력<span>.</span></h1><p>외우기보다 이해하고, 읽기보다 직접 써보세요.<br>나만의 속도로 완성하는 파이썬 코딩테스트 노트.</p><a href="#${next.id}" class="primary-button">${count ? '이어서 학습하기' : '첫 번째 노트 펼치기'} <span>↗</span></a><div class="hero-art" aria-hidden="true"><div class="art-grid"></div><span class="float-label label-top">THINK. CODE. REPEAT.</span><div class="art-editor"><div class="art-dots"><i></i><i></i><i></i><span>my_journey.py</span></div><pre><span class="comment"># 어제보다 한 걸음 더</span>\n<span class="keyword">def</span> <span class="function">grow</span>(today):\n    practice = <span class="string">"꾸준히"</span>\n    <span class="keyword">return</span> today + <span class="number">1</span>\n\n<span class="function">grow</span>(me) <span class="comment"># 시작해 볼까요?</span></pre></div><span class="art-badge">&lt;/&gt;</span><span class="float-label label-bottom"><span>✦</span> Small steps, big changes.</span></div></section><section class="progress-strip" aria-label="학습 진도"><span class="progress-icon">◒</span><div class="progress-copy"><strong>${count === lessons.length ? '모든 노트를 완주했어요. 멋진 여정이었어요!' : count ? '차곡차곡, 실력이 쌓이고 있어요.' : '오늘의 작은 시작을 응원해요.'}</strong><span>${count === lessons.length ? '코드를 다시 작성하며 배운 내용을 복습해 보세요.' : '노트 하나를 끝낼 때마다, 한 걸음 더 성장해요.'}</span></div><div class="progress-meter"><span><strong>나의 학습 진도</strong><b>${count} <small>/ ${lessons.length} 노트</small></b></span><div class="progress-track" role="progressbar" aria-label="완료한 학습 노트" aria-valuenow="${count}" aria-valuemin="0" aria-valuemax="${lessons.length}"><i style="width:${percent}%"></i></div></div><span class="progress-percent">${percent}%</span></section>` : ''}
      <section class="notes-section"><div class="section-heading"><div><div class="eyebrow muted">${bookmarks ? 'SAVED FOR LATER' : 'BUILD YOUR FOUNDATION'}</div><h2>${bookmarks ? '내 북마크' : query ? '검색 결과' : '기초부터, 단단하게'} <span>${visible.length}</span></h2><p>${bookmarks ? '다시 꺼내 보고 싶은 개념을 모아두세요.' : query ? `“${esc($('#search').value.trim())}”에 해당하는 노트예요.` : '코딩테스트의 핵심 개념, 필요한 순간 바로 꺼내보세요.'}</p></div><span class="section-note">Python 3 기준 <span>●</span></span></div><div class="filters" role="group" aria-label="난이도 필터">${[['all','전체 노트'],['입문','입문'],['기초','기초'],['중급','중급']].map(([value,label])=>`<button data-filter="${value}" class="${filter === value ? 'active' : ''}" aria-pressed="${filter === value}">${label}</button>`).join('')}<span>개념 이해 → 코드 패턴 → 직접 연습</span></div><div class="cards">${visible.map(l=>card(l, lessons.indexOf(l))).join('') || `<div class="empty"><span>⌕</span><h3>${query ? '일치하는 노트가 없어요' : bookmarks ? '아직 저장한 노트가 없어요' : '이 난이도에 해당하는 노트가 없어요'}</h3><p>${query ? '다른 검색어나 난이도로 찾아보세요.' : '노트 카드의 별을 눌러 북마크해 보세요.'}</p><button class="secondary-button" data-reset>전체 노트 보기 →</button></div>`}</div></section>${!query && !bookmarks ? '<aside class="study-tip"><span>✧</span><div><strong>잠깐, 이렇게 공부해 보세요</strong><p>코드를 읽은 뒤 화면을 가리고 직접 작성해 보세요. 작은 실수가 가장 오래 기억되는 배움이 돼요.</p></div><span class="tip-label">LEARNING TIP</span></aside>' : ''}`;
  }
  function detail(l) {
    const done = state.completed.includes(l.id), bookmarked = state.bookmarks.includes(l.id), index = lessons.indexOf(l);
    $('#main').innerHTML = `<div class="lesson-page"><a class="back-link" href="#home">← 전체 노트</a><div class="lesson-header"><div><div class="eyebrow muted">NOTE ${String(index+1).padStart(2,'0')} / ${l.en.toUpperCase()}</div><h1>${l.title}</h1><p>${l.summary}</p><div class="lesson-meta"><span class="level">${l.level}</span><span>◷ 약 ${l.minutes}분</span><span>Python 3</span></div></div><button class="secondary-button" data-bookmark="${l.id}" aria-pressed="${bookmarked}">${bookmarked ? '★ 북마크 저장됨' : '☆ 북마크'}</button></div><div class="lesson-layout"><div class="lesson-body"><section id="concept" class="concept-panel"><div class="eyebrow muted">THE BIG PICTURE</div><h2>먼저, 개념부터</h2><p>${l.concept}</p><div class="when"><strong>언제 사용하나요?</strong><p>${l.when}</p></div><div class="complexity"><span>시간 복잡도</span>${l.complexity}</div></section><section id="patterns"><div class="section-heading"><div><h2>바로 써보는 코드 패턴</h2><p>흐름을 따라 읽고, 직접 바꿔보세요.</p></div><span class="pattern-count">02 PATTERNS</span></div>${l.patterns.map((p,i)=>`<article class="pattern"><h3>${p.title}</h3><p>${p.description}</p>${codeBlock(p.code,p.output,`${l.id}:${i}`)}</article>`).join('')}</section><aside class="caution"><span>!</span><div><strong>이 부분은 기억하세요</strong><p>${l.caution}</p></div></aside><section class="exercise" id="exercise"><div class="eyebrow muted">MAKE IT YOURS</div><h2>내 코드로 만들어 보기 <span>✎</span></h2><p>${l.exercise}</p><p class="exercise-hint">로컬 Python 또는 온라인 Python 환경에서 작성해 보세요. 이 사이트에서는 코드를 실행하지 않습니다.</p><details><summary>예시 답안 확인하기 <span>＋</span></summary>${codeBlock(l.answer,l.answerOutput,`${l.id}:answer`)}</details></section><div class="complete-panel"><div><h3>${done ? '이 노트를 학습했어요. 잘하셨어요!' : '오늘도 한 걸음, 해냈나요?'}</h3><p>개념을 이해하고 코드를 작성했다면 완료를 눌러주세요.</p></div><button class="${done ? 'secondary-button' : 'primary-button'}" data-complete="${l.id}" aria-pressed="${done}">${done ? '✓ 학습 완료 취소' : '학습 완료하기 ✓'}</button></div><div class="lesson-pagination">${index > 0 ? `<a href="#${lessons[index-1].id}"><small>← 이전 노트</small>${lessons[index-1].title}</a>` : '<span></span>'}${index < lessons.length-1 ? `<a href="#${lessons[index+1].id}"><small>다음 노트 →</small>${lessons[index+1].title}</a>` : '<a href="#home"><small>모두 둘러봤어요 →</small>대시보드로</a>'}</div></div><aside class="lesson-toc"><span>이 노트에서 배울 내용</span><a href="#concept" data-anchor="concept">01 <b>핵심 개념</b></a><a href="#patterns" data-anchor="patterns">02 <b>코드 패턴</b></a><a href="#exercise" data-anchor="exercise">03 <b>직접 연습하기</b></a><div>한 번에 완벽하지 않아도 괜찮아요.<br>다시 돌아와 복습해요. 🌱</div></aside></div></div>`;
  }
  function render() {
    const id = route(), l = lessons.find(l => l.id === id);
    $('#topic-nav').innerHTML = lessons.map(l=>`<a href="#${l.id}" class="nav-item ${id === l.id ? 'active' : ''}"><span class="nav-topic-icon">${l.icon}</span>${l.title}${state.completed.includes(l.id) ? '<em>✓</em>' : ''}</a>`).join('');
    document.querySelectorAll('[data-nav]').forEach(el=>el.classList.toggle('active',el.dataset.nav === id));
    $('#bookmark-count').textContent = state.bookmarks.length;
    $('#lesson-count').textContent = lessons.length;
    $('#breadcrumb').textContent = l ? l.title : id === 'bookmarks' ? '내 북마크' : '대시보드';
    document.title = `${l ? l.title : id === 'bookmarks' ? '내 북마크' : '나의 코딩테스트 노트'} — 파이노트`;
    if (l) detail(l); else dashboard(id === 'bookmarks');
  }
  document.addEventListener('click', async event => {
    const button = event.target.closest('button, [data-anchor]');
    if (!button) return;
    if (button.dataset.bookmark) {
      const id = button.dataset.bookmark, exists = state.bookmarks.includes(id);
      state.bookmarks = exists ? state.bookmarks.filter(x=>x!==id) : [...state.bookmarks,id];
      save(); render(); toast(exists ? '북마크에서 삭제했어요.' : '북마크에 저장했어요.');
    }
    if (button.dataset.complete) {
      const id = button.dataset.complete, exists = state.completed.includes(id);
      state.completed = exists ? state.completed.filter(x=>x!==id) : [...state.completed,id];
      save(); render(); toast(exists ? '학습 완료를 취소했어요.' : '한 걸음 더 성장했어요. 학습 완료!');
    }
    if (button.dataset.filter) { filter = button.dataset.filter; render(); }
    if (button.hasAttribute('data-reset')) { filter='all'; $('#search').value=''; if (route() !== 'home') location.hash='home'; else render(); }
    if (button.dataset.copy) {
      const [id,key] = button.dataset.copy.split(':'); const l = lessons.find(l=>l.id===id); const code = key === 'answer' ? l.answer : l.patterns[Number(key)].code;
      try { await navigator.clipboard.writeText(code); toast('코드를 복사했어요. Python에서 실행해 보세요!'); } catch { toast('복사 권한이 없어요. 코드를 선택해서 직접 복사해 주세요.'); }
    }
    if (button.dataset.anchor) { event.preventDefault(); document.getElementById(button.dataset.anchor)?.scrollIntoView({behavior:'smooth'}); }
    if (button.classList.contains('menu-button')) { const open=document.body.classList.toggle('menu-open'); button.setAttribute('aria-expanded',String(open)); button.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기'); }
  });
  document.addEventListener('click', event => { if (document.body.classList.contains('menu-open') && !event.target.closest('.sidebar, .menu-button')) { document.body.classList.remove('menu-open'); $('.menu-button').setAttribute('aria-expanded','false'); $('.menu-button').setAttribute('aria-label','메뉴 열기'); } });
  $('#search').addEventListener('input',()=>{ if (lessons.some(l=>l.id===route())) location.hash='home'; else render(); });
  document.addEventListener('keydown',event=>{ if (event.key === '/' && !event.target.matches('input,textarea') && !event.ctrlKey && !event.metaKey) { event.preventDefault(); $('#search').focus(); } if(event.key==='Escape') { $('#search').blur(); document.body.classList.remove('menu-open'); $('.menu-button').setAttribute('aria-expanded','false'); $('.menu-button').setAttribute('aria-label','메뉴 열기'); } });
  window.addEventListener('hashchange',()=>{document.body.classList.remove('menu-open'); $('.menu-button').setAttribute('aria-expanded','false'); $('.menu-button').setAttribute('aria-label','메뉴 열기'); render(); window.scrollTo(0,0);});
  render();
})();
