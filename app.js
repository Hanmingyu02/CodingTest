(() => {
  'use strict';
  const { categories, notes } = window.NOTEBOOK;
  const $ = selector => document.querySelector(selector);
  const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const count = category => notes.filter(note => note.category === category).length;
  let toastTimer;

  // The previous notebook was explicitly reset. Remove only its known record.
  try { localStorage.removeItem('pynote-v1'); } catch { /* Storage can be unavailable. */ }

  function setMenu(open) {
    document.body.classList.toggle('menu-open', open);
    $('.menu-button').setAttribute('aria-expanded', String(open));
    $('.backdrop').hidden = !open;
  }
  function toast(message) {
    $('#toast').textContent = message;
    $('#toast').classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => $('#toast').classList.remove('visible'), 2500);
  }
  function categoryCards() {
    return categories.map((category, index) => `<a class="category-card ${category.color}" href="#${category.id}"><div class="category-card-top"><span class="category-icon" aria-hidden="true">${category.icon}</span><span class="category-order">0${index + 1}</span></div><div class="category-card-title"><h3>${category.title}</h3><span class="category-arrow" aria-hidden="true">↗</span></div><p>${category.english}</p><div class="category-card-bottom"><span>${count(category.id)}개의 노트</span><span class="empty-dot" aria-hidden="true"></span></div></a>`).join('');
  }
  function emptyState(category, query) {
    return `<section class="empty-state"><div class="empty-icon" aria-hidden="true"><svg width="35" height="35" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 7h18l7 7v27H12z"/><path d="M30 7v9h7M19 24h11M19 30h8"/></svg><span>+</span></div><h2>${query ? '검색 결과가 없어요' : '아직 작성한 노트가 없어요'}</h2><p>${query ? '검색어를 바꾸거나 다른 카테고리를 확인해 보세요.' : category ? `${category.title} 내용을 기록할 준비가 되었어요.` : '새로운 내용을 이곳에 차곡차곡 모아보세요.'}</p>${query || category ? '<button class="text-button" data-reset>전체 카테고리 보기 <span>→</span></button>' : '<span class="empty-caption">수학 · 문자열 · 배열 · 정렬 · 알고리즘</span>'}</section>`;
  }
  function noteList(items) {
    return categories.map(category => {
      const grouped = items.filter(note => note.category === category.id);
      if (!grouped.length) return '';
      return `<section class="note-group"><h2>${category.title}<span>${grouped.length}</span></h2><div class="note-grid">${grouped.map(note => `<a class="note-card" href="#note/${encodeURIComponent(note.id)}"><span class="note-category">${category.title}</span><h3>${escape(note.title)}</h3><p>${escape(note.description)}</p><span class="note-open">노트 열기 ↗</span></a>`).join('')}</div></section>`;
    }).join('');
  }
  function noteDetail(note) {
    const category = categories.find(item => item.id === note.category);
    return `<div class="detail-page"><a class="back-link" href="#${category.id}">← ${category.title}</a><div class="page-heading"><div class="eyebrow">${category.english.toUpperCase()}</div><h1>${escape(note.title)}</h1><p>${escape(note.description)}</p></div>${note.code ? `<section class="code-panel"><header><span>Python</span><button data-copy="${escape(note.id)}">코드 복사</button></header><pre><code>${escape(note.code)}</code></pre></section>` : ''}${note.text ? `<p class="note-text">${escape(note.text)}</p>` : ''}</div>`;
  }
  function render() {
    const route = location.hash.slice(1) || 'home';
    const category = categories.find(item => item.id === route);
    const note = route.startsWith('note/') ? notes.find(item => `note/${encodeURIComponent(item.id)}` === route) : null;
    const activeCategory = category || (note && categories.find(item => item.id === note.category));
    const query = $('#search').value.trim();
    const label = note ? note.title : category ? category.title : '전체 노트';
    $('#current-page').textContent = label;
    $('#total-count').textContent = notes.length;
    document.title = `${label} — 파이노트`;
    $('.overview-link').classList.toggle('active', !activeCategory);
    if (!activeCategory) $('.overview-link').setAttribute('aria-current', 'page');
    else $('.overview-link').removeAttribute('aria-current');
    $('#category-nav').innerHTML = categories.map(item => `<a class="category-link ${item.color} ${activeCategory?.id === item.id ? 'active' : ''}" href="#${item.id}" ${activeCategory?.id === item.id ? 'aria-current="page"' : ''}><span class="nav-icon" aria-hidden="true">${item.icon}</span>${item.title}<span class="nav-count">${count(item.id)}</span></a>`).join('');
    if (note) { $('#main').innerHTML = noteDetail(note); return; }
    const visible = notes.filter(item => (!category || item.category === category.id) && `${item.title} ${item.description || ''} ${item.text || ''} ${item.code || ''}`.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
    const title = query ? '검색 결과' : category ? category.title : '나의 코딩테스트 노트';
    $('#main').innerHTML = `<section class="page-heading"><div class="eyebrow">${query ? 'SEARCH YOUR NOTES' : category ? category.english.toUpperCase() : 'MY PYTHON NOTEBOOK'}</div><div class="heading-line"><div><h1>${title}${category ? '<span class="heading-dot">.</span>' : ''}</h1><p>${query ? `“${escape(query)}” 검색 결과 ${visible.length}개` : category ? '기억해 두고 싶은 개념과 코드를 모아두는 공간.' : '필요한 순간, 바로 꺼내보는 나만의 코드 기록.'}</p></div><div class="notebook-summary"><div><strong>${notes.length}</strong><span>저장된 노트</span></div><i></i><div><strong>5</strong><span>카테고리</span></div></div></div></section>${!category && !query ? `<section class="categories-section" aria-labelledby="categories-title"><div class="section-heading"><h2 id="categories-title">카테고리</h2><span>나에게 필요한 주제부터</span></div><div class="category-grid">${categoryCards()}</div></section>` : ''}<section class="notes-section"><div class="section-heading"><h2>${query ? '찾은 노트' : category ? `${category.title} 노트` : '모든 노트'}<span class="count-pill">${visible.length}</span></h2><span>${query ? '검색' : '기록'} ${visible.length}개</span></div>${visible.length ? noteList(visible) : emptyState(category, query)}</section>`;
  }
  document.addEventListener('click', async event => {
    if (event.target.closest('.menu-button')) setMenu(true);
    if (event.target.closest('.sidebar a')) setMenu(false);
    if (event.target.closest('.close-menu, .backdrop')) { setMenu(false); $('.menu-button').focus(); }
    if (event.target.closest('[data-reset]')) {
      $('#search').value = '';
      if (location.hash !== '#home') location.hash = 'home'; else render();
    }
    const button = event.target.closest('[data-copy]');
    if (button) {
      const note = notes.find(item => item.id === button.dataset.copy);
      if (!note?.code) return;
      try { await navigator.clipboard.writeText(note.code); toast('코드를 복사했어요.'); }
      catch { toast('코드를 선택해 직접 복사해 주세요.'); }
    }
  });
  $('#search').addEventListener('input', () => {
    if (location.hash.startsWith('#note/')) location.hash = 'home'; else render();
  });
  window.addEventListener('hashchange', () => { setMenu(false); render(); window.scrollTo(0, 0); });
  document.addEventListener('keydown', event => {
    if (event.key === '/' && !event.target.matches('input, textarea') && !event.ctrlKey && !event.metaKey) { event.preventDefault(); $('#search').focus(); }
    if (event.key === 'Escape') { setMenu(false); $('#search').blur(); }
  });
  window.matchMedia('(min-width: 801px)').addEventListener('change', event => { if (event.matches) setMenu(false); });
  render();
})();
