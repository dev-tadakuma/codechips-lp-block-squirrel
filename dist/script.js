'use strict';
const missions = {
  basics: [
    ['01', 'はじめの一歩', '命令を順番につなぐ。', '順番'],
    ['02', '曲がり道のどんぐり', '向きと進む順番を考える。', '向き'],
    ['03', '丘の上のどんぐり', '前に進む動きと、段差を上がる動きを使い分ける。', '高さ']
  ],
  repeat: [
    ['04', '長い森の道', '同じ命令を繰り返して、長い道を進む。', '繰り返し'],
    ['05', 'リズムの階段', '複数の命令をひとまとまりにして、繰り返す。', 'まとまり'],
    ['06', '森の探検家', '向き・上り下り・繰り返しを組み合わせる。', '組み合わせ']
  ],
  adventure: [
    ['07', '谷へおりる道', '下りから始まる道で、高さを読み取る。', '高さ'],
    ['08', 'ジグザグの小道', '回転と前進をまとめて繰り返す。', '繰り返し'],
    ['09', '分かれ道のどんぐり', '戻る経路と、どんぐりを集める順番を考える。', '経路'],
    ['10', 'どんぐりの大冒険', '高低差と分かれ道のある森で、自由に経路を計画する。', '計画']
  ]
};
const tabs = Array.from(document.querySelectorAll('[role="tab"]'));
const panel = document.querySelector('#mission-panel');
function selectTab(tab) {
  tabs.forEach(item => {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
  });
  panel.setAttribute('aria-labelledby', tab.id);
  const list = document.createElement('ol');
  list.className = 'mission-list';
  missions[tab.dataset.group].forEach(([number, title, description, theme]) => {
    const item = document.createElement('li');
    const no = document.createElement('span');
    no.className = 'mission-no';
    no.textContent = number;
    const content = document.createElement('div');
    const heading = document.createElement('h3');
    heading.textContent = title;
    const text = document.createElement('p');
    text.textContent = description;
    const tag = document.createElement('span');
    tag.className = 'mission-theme';
    tag.textContent = theme;
    content.append(heading, text);
    item.append(no, content, tag);
    list.append(item);
  });
  panel.replaceChildren(list);
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    tabs[next].focus();
    selectTab(tabs[next]);
  });
});
