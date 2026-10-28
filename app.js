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
    const tokens = /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|#[^\n]*|\b(?:from|import|for|in|if|else|elif|while|return|def|not|and|or|True|False|None|continue|break)\b|\b\d+\b|\b(?:print|range|len|sum|min|sorted|set|list|reversed|float|enumerate|abs|int)\b)/g;
    let result = '', last = 0;
    for (const match of code.matchAll(tokens)) {
      result += esc(code.slice(last, match.index));
      const token = match[0];
      const cls = token[0] === '#' ? 'comment' : /^["']/.test(token) ? 'string' : /^\d/.test(token) ? 'number' : /^(print|range|len|sum|min|sorted|set|list|reversed|float|enumerate|abs|int)$/.test(token) ? 'function' : 'keyword';
      result += `<span class="${cls}">${esc(token)}</span>`;
      last = match.index + token.length;
    }
    return result + esc(code.slice(last));
  }
  function codeBlock(code, output, key) {
    return `<div class="code-block"><div class="code-toolbar"><span><i></i> Python 3</span><button class="copy" data-copy="${key}">▢ <span>코드 복사</span></button></div><pre><code>${code.split('\n').map((line, i) => `<span class="code-line"><span class="line-number" aria-hidden="true">${i+1}</span><span>${highlight(line) || ' '}</span></span>`).join('')}</code></pre>${output == null ? '' : `<div class="output"><span>출력 결과</span><pre>${esc(output)}</pre></div>`}</div>`;
  }
  function card(l, index) {
    const done = state.completed.includes(l.id), bookmarked = state.bookmarks.includes(l.id);
    return `<article class="topic-card ${l.color}"><div class="card-top"><a class="topic-icon" href="#${l.id}" aria-label="${l.title} 학습">${l.icon}</a><span class="level">${l.category}</span><button class="bookmark ${bookmarked ? 'selected' : ''}" data-bookmark="${l.id}" aria-label="${l.title} 북마크" aria-pressed="${bookmarked}">${bookmarked ? '★' : '☆'}</button></div><a class="card-link" href="#${l.id}"><span class="card-index">NOTE ${String(index + 1).padStart(2, '0')} <span>· ${l.en}</span></span><h3>${l.title}</h3><p>${l.summary}</p><div class="tags">${l.tags.slice(0,2).map(tag=>`<span># ${tag}</span>`).join('')}</div><div class="card-bottom"><span>${done ? '<span class="done-text">✓ 학습 완료</span>' : `${l.category} · 코드 ${l.patterns.length}개`}</span><span class="card-arrow">↗</span></div></a></article>`;
  }
  function dashboard(bookmarks = false) {
    const count = state.completed.length, percent = Math.round(count / lessons.length * 100);
    const next = lessons.find(l => !state.completed.includes(l.id)) || lessons[0];
    const query = $('#search').value.trim().toLocaleLowerCase();
    const visible = lessons.filter(l => (!bookmarks || state.bookmarks.includes(l.id)) && (filter === 'all' || l.category === filter) && `${l.category} ${l.id} ${l.title} ${l.en} ${l.summary} ${l.tags.join(' ')}`.toLocaleLowerCase().includes(query));
    $('#main').innerHTML = `${!bookmarks && !query ? `<section class="welcome"><div class="eyebrow"><span></span> YOUR DAILY DOSE OF PYTHON</div><h1>내가 기록한 코드,<br>필요할 때 꺼내보는 노트<span>.</span></h1><p>남겨두고 싶은 공식과 코드를 한곳에.<br>나만의 파이썬 코딩테스트 노트.</p><a href="#${next.id}" class="primary-button">${count ? '이어서 학습하기' : '첫 번째 노트 펼치기'} <span>↗</span></a><div class="hero-art" aria-hidden="true"><div class="art-grid"></div><span class="float-label label-top">THINK. CODE. REPEAT.</span><div class="art-editor"><div class="art-dots"><i></i><i></i><i></i><span>my_journey.py</span></div><pre><span class="comment"># 두 정수 사이의 합</span>\n(a + b) * (\n    <span class="function">abs</span>(a - b) + <span class="number">1</span>\n) // <span class="number">2</span></pre></div><span class="art-badge">&lt;/&gt;</span><span class="float-label label-bottom"><span>✦</span> Small steps, big changes.</span></div></section><section class="progress-strip" aria-label="학습 진도"><span class="progress-icon">◒</span><div class="progress-copy"><strong>${count === lessons.length ? '모든 노트를 완주했어요. 멋진 여정이었어요!' : count ? '차곡차곡, 실력이 쌓이고 있어요.' : '오늘의 작은 시작을 응원해요.'}</strong><span>${count === lessons.length ? '코드를 다시 작성하며 배운 내용을 복습해 보세요.' : '노트 하나를 끝낼 때마다, 한 걸음 더 성장해요.'}</span></div><div class="progress-meter"><span><strong>나의 학습 진도</strong><b>${count} <small>/ ${lessons.length} 노트</small></b></span><div class="progress-track" role="progressbar" aria-label="완료한 학습 노트" aria-valuenow="${count}" aria-valuemin="0" aria-valuemax="${lessons.length}"><i style="width:${percent}%"></i></div></div><span class="progress-percent">${percent}%</span></section>` : ''}
      <section class="notes-section"><div class="section-heading"><div><div class="eyebrow muted">${bookmarks ? 'SAVED FOR LATER' : 'BUILD YOUR FOUNDATION'}</div><h2>${bookmarks ? '내 북마크' : query ? '검색 결과' : '내 학습 노트'} <span>${visible.length}</span></h2><p>${bookmarks ? '다시 꺼내 보고 싶은 개념을 모아두세요.' : query ? `“${esc($('#search').value.trim())}”에 해당하는 노트예요.` : '직접 기록한 내용을 주제별로 모아두었어요.'}</p></div><span class="section-note">Python 3 기준 <span>●</span></span></div><div class="filters" role="group" aria-label="분류 필터">${[['all','전체 노트'], ...[...new Set(lessons.map(l => l.category))].map(category => [category, category])].map(([value,label])=>`<button data-filter="${value}" class="${filter === value ? 'active' : ''}" aria-pressed="${filter === value}">${label}</button>`).join('')}<span>주제별로 정리하는 나의 코드</span></div><div class="cards">${visible.map(l=>card(l, lessons.indexOf(l))).join('') || `<div class="empty"><span>⌕</span><h3>${query ? '일치하는 노트가 없어요' : bookmarks ? '아직 저장한 노트가 없어요' : '이 분류에 해당하는 노트가 없어요'}</h3><p>${query ? '다른 검색어나 분류로 찾아보세요.' : '노트 카드의 별을 눌러 북마크해 보세요.'}</p><button class="secondary-button" data-reset>전체 노트 보기 →</button></div>`}</div></section>`;
  }
  function detail(l) {
    const done = state.completed.includes(l.id), bookmarked = state.bookmarks.includes(l.id);
    $('#main').innerHTML = `<div class="lesson-page"><a class="back-link" href="#home">← 전체 노트</a><div class="lesson-header"><div><div class="eyebrow muted">${esc(l.category)} / ${esc(l.en.toUpperCase())}</div><h1>${esc(l.title)}</h1><p>${esc(l.summary)}</p><div class="lesson-meta"><span class="level">${esc(l.category)}</span><span>Python 3</span></div></div><button class="secondary-button" data-bookmark="${l.id}" aria-pressed="${bookmarked}">${bookmarked ? '★ 북마크 저장됨' : '☆ 북마크'}</button></div><section class="concept-panel"><h2>${esc(l.conceptTitle || '공식 정리')}</h2><p>${esc(l.concept)}</p></section><section>${l.patterns.map((p,i)=>`<article class="pattern"><h3>${esc(p.title)}</h3><p>${esc(p.description)}</p>${codeBlock(p.code,p.output,`${l.id}:${i}`)}</article>`).join('')}</section><section class="exercise"><h2>${esc(l.termsTitle || '공식의 각 부분')}</h2><dl class="formula-terms">${l.terms.map(term=>`<dt><code>${esc(term.code)}</code></dt><dd>${esc(term.description)}</dd>`).join('')}</dl></section><div class="complete-panel"><div><h3>${done ? '확인한 노트예요.' : '내용을 이해했나요?'}</h3><p>확인한 내용은 학습 완료로 표시해 둘 수 있어요.</p></div><button class="${done ? 'secondary-button' : 'primary-button'}" data-complete="${l.id}" aria-pressed="${done}">${done ? '✓ 학습 완료 취소' : '학습 완료하기 ✓'}</button></div></div>`;
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
      const [id,key] = button.dataset.copy.split(':'); const l = lessons.find(l=>l.id===id); const code = l.patterns[Number(key)].code;
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
