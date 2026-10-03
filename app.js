const works=[
["阿咧搞雜貨｜賣場 Banner", "are-shop-banner.png", "graphic", "GRAPHIC DESIGN", "賣場主視覺"],
["購物網站版面", "shopping-page.png", "web", "WEB DESIGN", "網站頁面展示"],
["卡布可｜首頁活動視覺", "capucu-home.png", "web graphic", "WEB / GRAPHIC", "網站活動 Banner"],
["開學一把罩", "back-to-school.png", "graphic", "GRAPHIC DESIGN", "開學季活動 Banner"],
["寵愛媽咪・感恩慶", "mothers-day.png", "graphic", "GRAPHIC DESIGN", "母親節促銷視覺"],
["Ulanzi｜春遊時光", "ulanzi-spring.jpg", "graphic", "GRAPHIC DESIGN", "商品活動 Banner"],
["歡慶兒童節・驚喜樂翻天", "childrens-day.png", "graphic", "GRAPHIC DESIGN", "兒童節促銷視覺"],
["Ulanzi｜攝影補光燈", "ulanzi-light.jpg", "graphic", "GRAPHIC DESIGN", "商品社群視覺"],
["阿咧角色｜生活周邊", "character-merchandise.png", "graphic personal", "ILLUSTRATION", "角色圖像應用"],
["阿咧角色｜餐盤設計", "character-plates.png", "graphic personal", "ILLUSTRATION", "角色圖像應用"],
["呂如中｜徒步環島提袋", "ruzhong-tote.png", "graphic personal", "ILLUSTRATION", "提袋圖像設計"],
["呂如中｜生日插畫", "ruzhong-birthday.jpg", "personal", "ILLUSTRATION", "人物主題創作"],
["2026｜新年主題圖像", "new-year-2026.jpg", "personal", "PERSONAL WORK", "新年祝福視覺"],
['蛋糕店設計','webdesign003.jpg','web','WEB DESIGN','Photoshop · Illustrator · Sublime Text'],
['基金會網頁設計稿','webdesign004.jpg','web','WEB DESIGN','Photoshop · Illustrator · Sublime Text'],
['汽車百貨 EDM 設計','webdesign.jpg','web graphic','WEB / GRAPHIC','Photoshop · Illustrator'],
['汽車百貨促銷活動設計','webdesign002.jpg','web graphic','WEB / GRAPHIC','Photoshop · Illustrator · Dreamweaver'],
['2017 畢業專題海報設計','graphicdesign.jpg','graphic','GRAPHIC DESIGN','Photoshop · Illustrator'],
['日語插畫書｜生活文創商城','illustration04.jpg','graphic personal','ILLUSTRATION','Illustrator · 繪圖筆'],
['日語插畫書｜系列創作','illustration03.jpg','personal','ILLUSTRATION','Illustrator · 繪圖筆'],
['LINE 貼圖｜角色創作','illustration02.jpg','personal','ILLUSTRATION','Illustrator · 繪圖筆'],
['LINE 貼圖｜表情創作','illustration01.jpg','personal','ILLUSTRATION','Illustrator · 繪圖筆'],
['自為浮世','illustration05.jpg','personal','ILLUSTRATION','Illustrator · 繪圖筆'],
['蜜蜂吐舌瞬間','graphicdesign002.jpg','personal','PHOTOGRAPHY','Nikon D3200'],
['拍出太陽星芒','graphicdesign003.jpg','personal','PHOTOGRAPHY','Nikon D3200']
];
document.querySelector('[data-filter="all"] small').textContent=works.length;
const gallery=document.querySelector('#gallery'),viewer=document.querySelector('#viewer');
works.forEach((w,i)=>{const card=document.createElement('article');card.className='work';card.dataset.category=w[2];card.innerHTML=`<button aria-label="查看${w[0]}完整作品"><div class="work-image"><img src="assets/${w[1]}" alt="${w[0]}" loading="lazy" width="800" height="600"><span class="work-open">放大作品 ＋</span></div><div class="work-meta"><h3>${w[0]}</h3><span class="work-type">${w[3]}</span></div><p class="work-tools">${w[4]}</p></button>`;card.querySelector('button').addEventListener('click',()=>{document.querySelector('#viewer-title').textContent=w[0];const img=document.querySelector('#viewer-image');img.src='assets/'+w[1];img.alt=w[0];document.querySelector('#viewer-tools').textContent=w[4];viewer.showModal();viewer.scrollTop=0;document.body.style.overflow='hidden'});gallery.append(card)});
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',b===button?'true':'false')});let index=0;document.querySelectorAll('.work').forEach(card=>{card.hidden=button.dataset.filter!=='all'&&!card.dataset.category.split(' ').includes(button.dataset.filter);if(!card.hidden){card.style.transform=window.innerWidth>650&&index%2?'translateY(65px)':'none';index++}})}));
document.querySelectorAll('[data-record-image]').forEach(button=>button.addEventListener('click',()=>{document.querySelector('#viewer-title').textContent=button.dataset.recordTitle;const image=document.querySelector('#viewer-image');image.src=button.dataset.recordImage;image.alt=button.dataset.recordTitle;document.querySelector('#viewer-tools').textContent='';viewer.showModal();viewer.scrollTop=0;document.body.style.overflow='hidden'}));
viewer.querySelector('.close').addEventListener('click',()=>viewer.close());viewer.addEventListener('close',()=>{document.body.style.overflow=''});viewer.addEventListener('click',e=>{if(e.target===viewer){const r=viewer.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)viewer.close()}});window.addEventListener('resize',()=>{document.querySelectorAll('.work').forEach(c=>c.style.transform='');document.querySelector('[data-filter].active').click()});document.querySelector('#year').textContent=new Date().getFullYear();
