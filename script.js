(function(){
'use strict';
var rm=matchMedia('(prefers-reduced-motion:reduce)').matches,fine=matchMedia('(pointer:fine)').matches;
var $=function(s){return document.querySelector(s)},$$=function(s){return Array.prototype.slice.call(document.querySelectorAll(s))};
var root=document.documentElement,lang='id';
try{lang=localStorage.getItem('lang')||(/^id/.test(navigator.language)?'id':'en');root.dataset.theme=localStorage.getItem('theme')||(matchMedia('(prefers-color-scheme:light)').matches?'light':'dark')}catch(e){}

/* ====== ISI: edit di sini ====== */
var GH='https://github.com/Syifaa4';
/* TODO: ganti gh dengan link repo tiap proyek, dan isi img dengan path screenshot asli, mis. 'assets/sems.png' */
var P=[
{
 gh:'https://github.com/Syifaa4/Project-UAS---SIREN-Smart-Emergency-System---Syifa-Nurul-Afifah.git',img:'',tech:['Node.js','Express.js','REST API','JWT','Postman'],
 t:{id:'Smart Emergency Management System',en:'Smart Emergency Management System'},
 d:{id:'Backend REST API dengan 20+ endpoint untuk laporan kejadian darurat. Terintegrasi dengan API BMKG dan OpenWeather, memakai JWT dan database relasional, seluruh endpoint diuji di Postman.',en:'REST API backend with 20+ endpoints for emergency incident reports. Integrates BMKG and OpenWeather APIs, uses JWT auth and a relational database, with every endpoint tested in Postman.'}
},
{
 gh:'https://github.com/Syifaa4/Omni-Channel-Medical-Persona-Translator-.git',img:'',tech:['Langflow','AI','Streamlit','Healthcare'],
 t:{id:'Omni-Channel Medical Persona Translator',en:'Omni-Channel Medical Persona Translator'},
 d:{id:'Prototipe AI yang menyampaikan informasi kesehatan sesuai kebutuhan dan karakter pengguna. Alur pemrosesannya dirancang dengan Langflow.',en:'An AI prototype that delivers health information tailored to each user’s needs and personality. The processing flow is designed in Langflow.'}
},
{
 gh:'https://github.com/Syifaa4/Analisis-Sentimen-dan-Tren-Topik-Berita-Online-Indonesia.git',img:'',tag:{id:'Proyek tim',en:'Team project'},tech:['Python','Pandas','Web Scraping','K-Means','Colab'],
 t:{id:'Analisis Sentimen dan Big Data Portal Berita',en:'Sentiment Analysis and Big Data of Indonesian News'},
 d:{id:'Mengumpulkan, menggabungkan, dan membersihkan data portal berita nasional dan Kaggle, lalu menerapkan analisis sentimen dan K-Means Clustering dengan visualisasi hasil.',en:'Collected, merged, and cleaned data from national news portals and Kaggle, then applied sentiment analysis and K-Means clustering with result visualizations.'}
},
{
 gh:'https://www.figma.com/design/UTZrjY3UBx0IrZ1WXVLuig/User-Interface--High-Fidelity--Kelompok-8?node-id=226-2368&t=Y6cqWzcwj6gVe7wN-1',img:'',tag:{id:'Proyek tim · Desain',en:'Team project · Design'},tech:['Figma','Whimsical','Wireframing','Prototyping'],
 t:{id:'Smart Waste Manager',en:'Smart Waste Manager'},
 d:{id:'Prototipe UI/UX aplikasi pengelolaan sampah: wireframe, alur navigasi, dan antarmuka yang mudah dipakai.',en:'A UI/UX prototype for a waste-management app: wireframes, navigation flow, and an easy-to-use interface.'}
},
{
 gh:'https://www.figma.com/design/4CJRG9N3YeNNsOykzSmKIu/wts?node-id=109-1033&t=6a12f8lwqD6N4YI4-1',img:'',tag:{id:'Proyek tim · Desain',en:'Team project · Design'},tech:['Figma','Material 3','Wireframing','Prototyping'],
 t:{id:'WTS: Want to Share, Want to Sell',en:'WTS: Want to Share, Want to Sell'},
 d:{id:'Prototipe UI/UX aplikasi mobile komunitas mikro dan marketplace COD mahasiswa Universitas Nusa Putra: wireframe, alur navigasi, dan antarmuka yang mudah digunakan.',en:'A UI/UX prototype for a micro-community and COD marketplace mobile app exclusively for Nusa Putra University students: wireframes, navigation flow, and an easy-to-use interface.'}
}
];
var V=['3,88','20+','5','LIDM'];
var T={
id:{n:['beranda','tentang','proyek','pengalaman','keahlian','kontak'],hi:'halo, aku',sub:'Software Developer | AI Engineer | Data Analyst · Sukabumi',
lead:'Mahasiswi Teknik Informatika yang suka membangun <b>REST API</b>, mengolah <b>data</b>, dan merancang <b>prototipe AI</b> yang bermanfaat. Terbuka untuk magang dan kolaborasi.',
c1:'→ hubungi aku',c2:'$ ls proyek/',cv:'CV',sys:'online · tanya apa saja',snd:'kirim ↵',pl:'tanya tentang Syifa…',
wel:'Halo! Aku Syifa-bot 🤖 Tanya soal proyek, skill, atau pengalaman Syifa.',
sug:['Proyek apa yang paling keren?','Skill utamanya apa?','Kenapa harus rekrut Syifa?','Cara menghubungi?'],
ah:'Sedikit tentang aku',ap:'Aku mahasiswi semester 5 yang senang mengubah masalah rumit jadi solusi sederhana. Fokusku di backend, data, AI, dan UI/UX. Teliti, adaptif, dan nyaman bekerja dalam tim.',
edu:[['Universitas Nusa Putra','Teknik Informatika · Sep 2024 – sekarang · IPK 3,88/4,00'],['SMA Negeri 1 Cibadak','MIPA · 2021 – 2024']],
st:['IPK dari 4,00','endpoint API','proyek unggulan','peserta nasional 2025'],
ph:'Proyek pilihan',gh:'Lihat di GitHub',soon:'Repo menyusul',pv:'Ilustrasi tampilan. Gerakkan kursor untuk memiringkan.',
xh:'Pengalaman dan prestasi',kh:'Keahlian',
xp:[['Agu – Sep 2026','PKL, PT Jasa Raharja Sukabumi','Praktik Kerja Lapangan',['Input dan pembaruan data administrasi pelayanan korban.','Verifikasi data transaksi: kuitansi, bukti, dan surat tagihan.','Mengelola dokumen dan lembar kerja Excel.']],
['Sep 2025','Divisi Medis, Panitia MABIM','Universitas Nusa Putra',['Mendukung layanan kesehatan untuk sekitar 2.000 mahasiswa baru.']],
['Agu 2025','ONMIPA-PT Biologi 🏅','Tingkat LLDIKTI Wilayah IV',['Mewakili Universitas Nusa Putra.']],
['Sep 2025','Lomba Inovasi Digital Mahasiswa (LIDM) 🏆','Divisi ITDP · tingkat nasional',['Peserta dalam tim beranggotakan 4 orang.']]],
sk:[['Bahasa pemrograman',['Python','JavaScript','Java','HTML','CSS']],['Backend dan database',['Node.js','Express.js','REST API','JWT','MySQL']],['Data dan AI',['Pandas','Web Scraping','Sentiment Analysis','K-Means','Data Visualization','Langflow']],['Desain dan tools',['Figma','Whimsical','Git','GitHub','Vercel','Streamlit','VS Code','Colab','XAMPP']]],
ch:'Yuk berkolaborasi!',cl:'Terbuka untuk magang, proyek, dan ngobrol soal teknologi. Sertifikat dan detail lengkap ada di CV.',ft:'© 2026 Syifa Nurul Afifah · Sukabumi, Jawa Barat'},
en:{n:['home','about','projects','experience','skills','contact'],hi:'hi, I’m',sub:'Software Developer | AI Engineer | Data Analyst · Sukabumi, ID',
lead:'A Computer Science student who loves building <b>REST APIs</b>, working with <b>data</b>, and designing useful <b>AI prototypes</b>. Open to internships and collaboration.',
c1:'→ get in touch',c2:'$ ls projects/',cv:'↓ download CV',sys:'online · ask anything',snd:'send ↵',pl:'ask about Syifa…',
wel:'Hi! I’m Syifa-bot 🤖 Ask about Syifa’s projects, skills, or experience.',
sug:['What is the coolest project?','What is the main stack?','Why hire Syifa?','How do I contact her?'],
ah:'A little about me',ap:'I’m a 5th-semester student who enjoys turning complicated problems into simple solutions. I focus on backend, data, AI, and UI/UX. Careful, adaptable, and happy working in a team.',
edu:[['Universitas Nusa Putra','Informatics Engineering · Sep 2024 – present · GPA 3.88/4.00'],['SMA Negeri 1 Cibadak','Natural Sciences · 2021 – 2024']],
st:['GPA out of 4.00','API endpoints','featured projects','national finalist 2025'],
ph:'Selected projects',gh:'View on GitHub',soon:'Repo coming soon',pv:'Illustrative preview. Move the cursor to tilt it.',
xh:'Experience and achievements',kh:'Skills',
xp:[['Aug – Sep 2026','Intern, PT Jasa Raharja Sukabumi','Field work placement',['Entered and updated administrative data for victim services.','Verified transaction data against receipts, proofs, and billing letters.','Managed documents and Excel worksheets.']],
['Sep 2025','Medical Division, MABIM Committee','Universitas Nusa Putra',['Supported health services for around 2,000 new students.']],
['Aug 2025','ONMIPA-PT Biology 🏅','LLDIKTI Region IV level',['Represented Universitas Nusa Putra.']],
['Sep 2025','Digital Innovation Competition (LIDM) 🏆','ITDP division · national level',['Participant in a team of 4.']]],
sk:[['Programming languages',['Python','JavaScript','Flutter','HTML','CSS']],['Backend and databases',['Node.js','Express.js','REST API','JWT','MySQL']],['Data and AI',['Pandas','Web Scraping','Sentiment Analysis','K-Means','Data Visualization','Langflow']],['Design and tools',['Figma','Whimsical','Git','GitHub','Vercel','Streamlit','VS Code','Colab','XAMPP', 'Postman']]],
ch:'Let’s collaborate!',cl:'Open to internships, projects, and tech chats. Certificates and full details are in my CV.',ft:'© 2026 Syifa Nurul Afifah · Sukabumi, West Java'}};

/* ====== preview tampilan proyek (ilustrasi) ====== */
var MK=[
'<div class="mb"><i></i><i></i><i></i><span>sems / dashboard</span></div><div class="mi"><div class="map"><b style="left:24%;top:30%"></b><b style="left:62%;top:22%;animation-delay:.6s"></b><b style="left:46%;top:64%;animation-delay:1.2s"></b></div><div class="side"><span class="cp h">BMKG</span><span class="cp">☁ 28°C</span><div class="ln"></div><div class="ln" style="width:70%"></div><div class="ln" style="width:85%"></div></div></div>',
'<div class="mb"><i></i><i></i><i></i><span>persona-translator</span></div><div class="mi"><span class="cp h">Anak</span><span class="cp">Lansia</span><span class="cp">Dokter</span><div class="bb">Apa itu hipertensi?</div><div class="bb r">Tekanan darah tinggi. Cukup rutin cek dan kurangi garam ya 💙</div></div>',
'<div class="mb"><i></i><i></i><i></i><span>news-clusters.ipynb</span></div><div class="mi"><div class="dt" style="left:14%;top:22%;background:var(--g)"></div><div class="dt" style="left:22%;top:38%;background:var(--g)"></div><div class="dt" style="left:18%;top:52%;background:var(--g)"></div><div class="dt" style="left:48%;top:20%;background:var(--a)"></div><div class="dt" style="left:56%;top:36%;background:var(--a)"></div><div class="dt" style="left:44%;top:48%;background:var(--a)"></div><div class="dt" style="left:74%;top:58%;background:#7C8CFF"></div><div class="dt" style="left:82%;top:40%;background:#7C8CFF"></div><div class="ln" style="position:absolute;bottom:6px;left:14px;width:60%"></div></div>',
'<div class="mb"><i></i><i></i><i></i><span>java Main</span></div><div class="mi term"><span>$</span> java Main<br>=== PERPUSTAKAAN ===<br>1. Tambah buku<br>2. Pinjam buku<br>3. Kembalikan<br>4. Cek stok<br><span>pilih ></span> 2█</div>',
'<div class="mb"><i></i><i></i><i></i><span>figma / smart-waste</span></div><div class="mi ph"><div><u style="--h:70%"></u></div><div><u style="--h:45%"></u></div><div><u style="--h:85%"></u></div></div>'];

/* ====== render ====== */
function t(k){return T[lang][k]}
function applyLang(){
var D=T[lang];root.lang=lang;$('#lg').textContent=lang==='id'?'EN':'ID';
$$('[data-t]').forEach(function(e){e.innerHTML=D[e.dataset.t]});
$('#in').placeholder=D.pl;
$('#links').innerHTML=['home','about','projects','experience','skills','contact'].map(function(h,i){return'<a href="#'+h+'"><span style="color:var(--a)">~/</span>'+D.n[i]+'</a>'}).join('');
$('#edu').innerHTML=D.edu.map(function(e){return'<div class="card"><b>'+e[0]+'</b><span>'+e[1]+'</span></div>'}).join('');
$('#stats').innerHTML=V.map(function(v,i){return'<div class="stat"><b>'+v+'</b><span>'+D.st[i]+'</span></div>'}).join('');
$('#tl').innerHTML=D.xp.map(function(x){return'<div class="ti"><small>'+x[0]+'</small><h3>'+x[1]+'</h3><em>'+x[2]+'</em><ul>'+x[3].map(function(p){return'<li>'+p+'</li>'}).join('')+'</ul></div>'}).join('');
$('#sk').innerHTML=D.sk.map(function(g){return'<div><h3>// '+g[0]+'</h3>'+g[1].map(function(s){return'<span>'+s+'</span>'}).join('')+'</div>'}).join('');
$('#plist').innerHTML=P.map(function(p,i){return'<button class="pi'+(i===cur?' on':'')+'" data-i="'+i+'" role="tab">'+p.t[lang]+'</button>'}).join('');
$$('.pi').forEach(function(b){b.onclick=function(){cur=+b.dataset.i;applyLang()}});
var p=P[cur];
$('#pd').innerHTML='<div class="pv">'+(p.img?'<img src="'+p.img+'" alt="'+p.t[lang]+'">':'<div class="mk" id="mk">'+MK[cur]+'</div>')+'</div><div class="hint">'+(p.img?'':D.pv)+'</div><div class="pt">'+(p.tag?'<span class="tag">'+p.tag[lang]+'</span>':'')+'<h3>'+p.t[lang]+'</h3><p>'+p.d[lang]+'</p><div class="tg">'+p.tech.map(function(x){return'<span>'+x+'</span>'}).join('')+'</div>'+(p.gh?'<a class="btn p" href="'+p.gh+'" target="_blank" rel="noopener">'+D.gh+' ↗</a>':'<span class="btn">'+D.soon+'</span>')+'</div>';
tilt();if(window.__msgs)window.__rebuildSug()}
var cur=0;
function tilt(){var m=$('#mk');if(!m||rm)return;var pv=m.parentNode;pv.onpointermove=function(e){var r=pv.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;m.style.transform='rotateY('+x*14+'deg) rotateX('+-y*12+'deg)'};pv.onpointerleave=function(){m.style.transform=''}}
$('#lg').onclick=function(){lang=lang==='id'?'en':'id';try{localStorage.setItem('lang',lang)}catch(e){}applyLang()};
$('#th').onclick=function(){var d=root.dataset.theme==='dark'?'light':'dark';root.dataset.theme=d;try{localStorage.setItem('theme',d)}catch(e){}};

/* ====== ketik nama ====== */
var nm=$('#nm'),w='Syifa',ni=0;(function ty(){nm.textContent=w.slice(0,ni++);if(ni<=w.length)setTimeout(ty,rm?0:160)})();

/* ====== kursor ====== */
if(fine&&!rm){document.body.classList.add('fc');
var c=$('#cur'),dt=$('#dot'),x=-50,y=-50,wd=34,ht=34,mx=-50,my=-50,hv=null;
addEventListener('pointermove',function(e){mx=e.clientX;my=e.clientY;root.style.setProperty('--mx',mx+'px');root.style.setProperty('--my',my+'px');dt.style.transform='translate('+mx+'px,'+my+'px)'});
document.addEventListener('pointerover',function(e){hv=e.target.closest('a,button,input,.ti,.card,.stat')});
addEventListener('pointerdown',function(){c.classList.add('dn')});addEventListener('pointerup',function(){c.classList.remove('dn')});
(function lp(){var tx,ty,tw,th;if(hv&&document.body.contains(hv)){var r=hv.getBoundingClientRect();tx=r.left-7;ty=r.top-7;tw=r.width+14;th=r.height+14;c.classList.add('on')}else{tx=mx-17;ty=my-17;tw=34;th=34;c.classList.remove('on')}
x+=(tx-x)*.22;y+=(ty-y)*.22;wd+=(tw-wd)*.22;ht+=(th-ht)*.22;c.style.transform='translate('+x+'px,'+y+'px)';c.style.width=wd+'px';c.style.height=ht+'px';requestAnimationFrame(lp)})()}

/* ====== reveal + menu aktif ====== */
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}})},{threshold:.12});
$$('.rv').forEach(function(e){io.observe(e)});
var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){$$('.links a').forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id)})}})},{rootMargin:'-45% 0px -50% 0px'});
$$('main section').forEach(function(s){so.observe(s)});

/* ====== chatbot lokal: lebih pintar, ada maskot, tanpa API ====== */
var msgs=$('#msgs'),inp=$('#in'),sug=$('#sug'),av=$('#av'),busy=false,last=null,lastR='',lr=null;window.__msgs=1;
var SB={tech:['pake','pakai','pakek','make','menggunakan','gunakan','teknologi','tech','stack','tools','use','used','using','built','framework'],link:['github','repo','link','kode','code','tautan','url'],src:['darimana','dari mana','sumber','sumbernya','asalnya','where from'],more:['lanjut','detail','jelasin','jelaskan','lebih','elaborate','more','lengkap','cerita','terus']};
var TM={python:[2],javascript:[0],'node.js':[0],nodejs:[0],node:[0],express:[0],jwt:[0],postman:[0],'rest api':[0],api:[0],mysql:[0,3],sql:[0,3],java:[3],jdbc:[3],figma:[4],whimsical:[4],langflow:[1],streamlit:[1],pandas:[2],colab:[2],'k-means':[2],kmeans:[2],scraping:[2],git:[],github:[],html:[],css:[]};
var UT=['react','php','laravel','flutter','kotlin','swift','c++','golang','rust','docker','kubernetes','tensorflow','pytorch','typescript','vue','angular','django','flask','mongodb','postgresql','aws','azure','next.js','nextjs','tailwind','android','linux','unity'];
var ENW='the what who how why is are does do can tell about her she your you project projects skills skill hire where which when has did please contact experience'.split(' '),IDW='apa siapa yang dia kenapa gimana bagaimana bisa ini itu dari untuk ke di kah nya aku kamu dong ya gak ga tidak pernah buat bikin pake pakai sama dengan'.split(' ');
var CH={gen:{id:['Siapa Syifa?','Proyek apa yang paling keren?','Skill utamanya apa?','Kenapa harus rekrut Syifa?'],en:['Who is Syifa?','What is the coolest project?','What are her main skills?','Why hire Syifa?']},
proj:{id:['Pakai teknologi apa?','Ada link GitHub-nya?','Ceritakan lebih lengkap','Proyek lainnya?'],en:['What tech did it use?','Is there a GitHub link?','Tell me more','Other projects?']},
skill:{id:['Pernah pakai Python?','Pernah bikin UI/UX?','Pengalaman kerjanya?'],en:['Has she used Python?','Any UI/UX work?','Work experience?']},
exp:{id:['Prestasinya apa?','Pendidikannya?','Cara menghubungi?'],en:['Any achievements?','Education?','How to contact?']},
hire:{id:['Proyek apa yang paling keren?','Unduh CV','Cara menghubungi?'],en:['What is the coolest project?','Download CV','How to contact?']}};
function A(i,e){return{id:i,en:e}}
var TP=[
{n:'hi',k:['!halo','!hai','!hello','!hey','!hi','!hola','pagi','siang','malam'],e:'👋',a:A(['Halo juga! 👋 Aku Syifa-bot. Mau kenalan sama Syifa, lihat proyeknya, atau tanya skill?','Hai hai! ✨ Tanya apa saja soal Syifa: proyek, skill, pengalaman.'],['Hey there! 👋 I’m Syifa-bot. Want to meet Syifa, see her projects, or ask about skills?','Hi hi! ✨ Ask me anything about Syifa: projects, skills, experience.'])},
{n:'who',k:['!siapa syifa','!who is','!tentang syifa','!about syifa','!kenalin','!perkenalan','siapa dia','!syifa itu'],g:'gen',a:A(['Syifa Nurul Afifah, mahasiswi Teknik Informatika semester 5 di Universitas Nusa Putra (Sukabumi), IPK 3,88. Dia membangun REST API, menganalisis data, dan merancang prototipe AI serta UI/UX. Dia juga pernah ikut olimpiade Biologi dan lomba inovasi digital tingkat nasional 🌟'],['Syifa Nurul Afifah is a 5th-semester Informatics Engineering student at Universitas Nusa Putra (Sukabumi), GPA 3.88. She builds REST APIs, analyzes data, and designs AI and UI/UX prototypes. She has also joined a Biology olympiad and a national digital innovation competition 🌟'])},
{n:'bot',k:['!siapa kamu','!kamu siapa','!who are you','!kamu robot','!kamu ai','!are you ai','!are you real','!chatgpt','!kamu manusia','kamu bot'],a:A(['Aku Syifa-bot 🤖 maskot kecil di portofolio ini. Aku bukan AI canggih: aku menjawab dari catatan yang ditulis Syifa, jadi jawabanku jujur tapi terbatas.'],['I’m Syifa-bot 🤖 the little mascot of this portfolio. I’m not a fancy AI: I answer from notes Syifa wrote, so I’m honest but limited.'])},
{n:'how',k:['!apa kabar','!how are you','!kabarmu','!gimana kabar'],e:'💜',a:A(['Baik banget! Lagi semangat nunggu pertanyaanmu ✨'],['Doing great! Excited and waiting for your questions ✨'])},
{n:'thx',k:['!makasih','!terima kasih','!thanks','!thank you','!thx','!tengkyu'],e:'💜',a:A(['Sama-sama! 💜 Kalau mau ngobrol langsung dengan Syifa, bagian Kontak menunggu.','Senang bisa bantu! ✨'],['You’re welcome! 💜 To chat with Syifa directly, the Contact section awaits.','Happy to help! ✨'])},
{n:'bye',k:['!dadah','!bye','!sampai jumpa','!see you','!daa'],e:'👋',a:A(['Dadah! 👋 Makasih sudah mampir ke portofolio Syifa.'],['Bye! 👋 Thanks for visiting Syifa’s portfolio.'])},
{n:'joke',k:['!lelucon','!joke','!bercanda','!humor','!hibur'],e:'😆',a:A(['Kenapa programmer suka mode gelap? Karena cahaya menarik bug 🐛','Ada 10 jenis orang: yang paham biner dan yang tidak 😄','Kenapa Java developer pakai kacamata? Karena tidak bisa C# 😎'],['Why do programmers prefer dark mode? Because light attracts bugs 🐛','There are 10 kinds of people: those who understand binary and those who don’t 😄','Why do Java developers wear glasses? Because they can’t C# 😎'])},
{n:'pb',k:['!ipk tidak','!ipk bukan','!ipk ga','!ipk gak','!ipk nggak','!ipk belum','!gpa doesn','!gpa is not','!gpa isn','!tidak menentukan','!bukan segalanya','!not everything'],g:'hire',h:'#projects',a:A(['Setuju banget 💯 IPK bukan ukuran segalanya. Makanya portofolio ini berisi 5 proyek nyata, dari REST API 20+ endpoint sampai prototipe AI. Silakan nilai dari karyanya, bukan dari angkanya 😄'],['Totally agree 💯 GPA isn’t everything. That’s why this portfolio is full of real projects, from a 20+ endpoint REST API to an AI prototype. Judge her by the work, not the number 😄'])},
{n:'hire',k:['!rekrut','!hire','!kenapa harus','!why should','!kelebihan','!strength','!alasan','!pilih syifa','!recruit'],g:'hire',a:A(['Syifa teliti, adaptif, dan terbiasa kerja tim. Dia sudah membuktikannya lewat proyek nyata (backend, data, AI, UI/UX), pengalaman PKL, dan lomba tingkat nasional. Dan dia terus belajar mandiri 🌱'],['Syifa is careful, adaptable, and a team player. She has proven it through real projects (backend, data, AI, UI/UX), an internship, and a national competition. And she keeps learning on her own 🌱'])},
{n:'open',k:['!terbuka','!available','!open to','!lowongan','!freelance','!kolaborasi','!collaborate','!magang','!internship'],g:'hire',h:'#contact',a:A(['Ya, Syifa terbuka untuk magang dan kolaborasi proyek 🙌 Hubungi lewat bagian Kontak.'],['Yes, Syifa is open to internships and project collaboration 🙌 Reach her via the Contact section.'])},
{n:'skills',k:['!skill','!skills','!keahlian','!kemampuan','!stack','!tools','!bahasa pemrograman','!programming','bisa apa','teknologi'],g:'skill',a:A(['Bahasa: Python, JavaScript, Java, HTML, CSS. Backend: Node.js, Express, REST API, JWT, MySQL. Data: Pandas, scraping, sentiment analysis, K-Means. AI: Langflow. Desain: Figma, Whimsical. Tools: Git, GitHub, Vercel, Streamlit 🛠️'],['Languages: Python, JavaScript, Java, HTML, CSS. Backend: Node.js, Express, REST API, JWT, MySQL. Data: Pandas, scraping, sentiment analysis, K-Means. AI: Langflow. Design: Figma, Whimsical. Tools: Git, GitHub, Vercel, Streamlit 🛠️'])},
{n:'sems',pi:0,k:['!sems','!bmkg','!openweather','!darurat','!emergency','!jwt','!postman','!endpoint','!bencana','cuaca','backend'],g:'proj',a:A(['SEMS (Smart Emergency Management System) adalah backend REST API dengan 20+ endpoint untuk pengelolaan laporan kejadian darurat. Terintegrasi dengan API BMKG dan OpenWeather, diamankan dengan JWT, dan semua endpoint diuji di Postman 🚨'],['SEMS (Smart Emergency Management System) is a REST API backend with 20+ endpoints for emergency incident reports. It integrates the BMKG and OpenWeather APIs, is secured with JWT, and every endpoint is tested in Postman 🚨']),
 s:A('Data bencana dan cuaca diambil lewat API BMKG dan OpenWeather, lalu diintegrasikan ke sistem laporan. Untuk detail teknis pengambilannya, repo GitHub adalah sumber terbaik 🔎','Disaster and weather data come through the BMKG and OpenWeather APIs and are integrated into the reporting system. For technical details, the GitHub repo is the best source 🔎'),
 m:A('Syifa membangun backend-nya: 20+ endpoint untuk laporan kejadian, integrasi dua API eksternal, autentikasi JWT dengan database relasional, dan pengujian endpoint satu per satu di Postman.','Syifa built the backend: 20+ incident-report endpoints, two external API integrations, JWT auth with a relational database, and endpoint-by-endpoint testing in Postman.')},
{n:'med',pi:1,k:['!medical','!persona','!langflow','!streamlit','!omni','!kesehatan','!health','!healthcare','!ai'],g:'proj',a:A(['Omni-Channel Medical Persona Translator: prototipe AI yang menyampaikan informasi kesehatan sesuai kebutuhan dan karakter pengguna. Alur pemrosesannya dirancang dengan Langflow 🩺'],['Omni-Channel Medical Persona Translator: an AI prototype that delivers health information to fit each user’s needs and personality. Its processing flow is designed in Langflow 🩺']),
 m:A('Idenya menjembatani informasi kesehatan dengan cara bicara yang cocok untuk tiap pengguna. Syifa merancang alur interaksinya di Langflow, dengan antarmuka Streamlit.','The idea is to match health information to the way each user prefers to be spoken to. Syifa designed the interaction flow in Langflow, with a Streamlit interface.')},
{n:'news',pi:2,k:['!sentimen','!sentiment','!berita','!news','!kmeans','!k-means','!kaggle','!clustering','!scraping','big data','portal'],g:'proj',a:A(['Proyek tim analisis sentimen dan big data portal berita Indonesia: data dikumpulkan dari beberapa portal berita dan Kaggle, dibersihkan dengan Pandas, lalu dianalisis dengan sentiment analysis dan K-Means Clustering 📰'],['A team project on sentiment and big data of Indonesian news: data gathered from several portals and Kaggle, cleaned with Pandas, then analyzed with sentiment analysis and K-Means clustering 📰']),
 m:A('Tahapannya: scraping dan penggabungan data, pembersihan di Pandas, analisis sentimen, K-Means Clustering, lalu visualisasi hasil untuk eksplorasi berita. Semua dikerjakan di Google Colab.','The steps: scraping and merging data, cleaning in Pandas, sentiment analysis, K-Means clustering, then visualizing results for news exploration. All done in Google Colab.')},
{n:'lib',pi:3,k:['!perpustakaan','!library','!jdbc','!cli','!trigger','stored procedure','crud','oop'],g:'proj',a:A(['Sistem Manajemen Perpustakaan: aplikasi CLI Java + MySQL untuk data buku dan peminjaman, dengan OOP, CRUD, JDBC, Stored Procedure, Function, Trigger, dan View untuk mengatur stok 📚'],['Library Management System: a Java + MySQL CLI app for books and loans, using OOP, CRUD, JDBC, stored procedures, functions, triggers, and views to manage stock 📚']),
 m:A('Di sini Syifa belajar sisi database yang dalam: logika stok diurus lewat Trigger dan Stored Procedure, sementara Java mengurus alur lewat JDBC.','This one went deep into databases: stock logic is handled with triggers and stored procedures, while Java drives the flow through JDBC.')},
{n:'waste',pi:4,k:['!waste','!sampah','!figma','!whimsical','!ui','!ux','!uiux','desain','design','wireframe','prototype','prototipe'],g:'proj',a:A(['Smart Waste Manager: prototipe UI/UX aplikasi pengelolaan sampah (proyek tim) di Figma dan Whimsical, lengkap dengan wireframe dan alur navigasi ♻️'],['Smart Waste Manager: a UI/UX prototype of a waste-management app (team project) in Figma and Whimsical, with wireframes and navigation flow ♻️']),
 m:A('Fokusnya kebutuhan pengguna dan kemudahan pemakaian: wireframe dulu, lalu antarmuka dan alur navigasi yang saling terhubung.','The focus is user needs and ease of use: wireframes first, then an interface and navigation flow that connect together.')},
{n:'projs',k:['!proyek','!project','!projects','!karya','!portfolio','!portofolio','keren','coolest','best','favorit','terbaik'],g:'proj',h:'#projects',a:A(['Ada 5 proyek: SEMS, Medical Persona Translator, Analisis Sentimen Berita, Sistem Perpustakaan, dan Smart Waste Manager. Kalau disuruh pilih yang paling teknis, aku pilih SEMS (20+ endpoint, 2 API eksternal, JWT) ✨ Tapi tiap proyek punya rasa sendiri!'],['There are 5 projects: SEMS, Medical Persona Translator, News Sentiment Analysis, Library System, and Smart Waste Manager. For the most technical one I’d pick SEMS (20+ endpoints, 2 external APIs, JWT) ✨ But each has its own flavor!'])},
{n:'exp',k:['!pengalaman','!pkl','!jasa raharja','!mabim','!experience','kerja','work','job'],g:'exp',a:A(['PKL di PT Jasa Raharja Sukabumi (Agu–Sep 2026): mengelola data administrasi pelayanan korban, memverifikasi kuitansi dan tagihan, dan merapikan Excel. Lalu Divisi Medis panitia MABIM untuk sekitar 2.000 mahasiswa baru 💼'],['Internship at PT Jasa Raharja Sukabumi (Aug–Sep 2026): managing victim-service admin data, verifying receipts and bills, and tidying Excel sheets. Plus the Medical Division of the MABIM committee for about 2,000 new students 💼'])},
{n:'ach',k:['!prestasi','!lomba','!onmipa','!lidm','!olimpiade','!achievement','!award','!competition','!juara'],g:'exp',a:A(['ONMIPA-PT Biologi tingkat LLDIKTI Wilayah IV (Agu 2025) dan peserta nasional LIDM divisi ITDP bersama tim 4 orang (Sep 2025) 🏆'],['ONMIPA-PT Biology at LLDIKTI Region IV level (Aug 2025) and a national participant in LIDM, ITDP division, in a team of 4 (Sep 2025) 🏆'])},
{n:'edu',k:['!kuliah','!kampus','!ipk','!gpa','!universitas','!sekolah','!sma','!pendidikan','!education','!semester','!jurusan','nusa putra'],g:'exp',a:A(['Teknik Informatika di Universitas Nusa Putra sejak Sep 2024, sekarang semester 5, IPK 3,88/4,00. Sebelumnya SMAN 1 Cibadak jurusan MIPA (2021–2024) 🎓'],['Informatics Engineering at Universitas Nusa Putra since Sep 2024, now 5th semester, GPA 3.88/4.00. Before that, SMAN 1 Cibadak, natural sciences (2021–2024) 🎓'])},
{n:'contact',k:['!kontak','!hubungi','!contact','!reach','!linkedin','!email','!menghubungi','github','wa','telepon','nomor'],g:'exp',h:'#contact',a:A(['Hubungi Syifa lewat LinkedIn (linkedin.com/in/syifanurulafifah), GitHub (github.com/Syifaa4), atau email di bagian Kontak. Nomor HP tidak dipajang di sini 📬'],['Reach Syifa via LinkedIn (linkedin.com/in/syifanurulafifah), GitHub (github.com/Syifaa4), or the email in the Contact section. Her phone number isn’t listed here 📬'])},
{n:'cv',k:['!cv','!resume','!sertifikat','!certificate','!sertifikasi'],g:'hire',h:'#contact',a:A(['CV lengkap (termasuk sertifikat) bisa diunduh lewat tombol "unduh CV" di halaman ini 📄'],['The full CV (including certificates) can be downloaded with the “download CV” button on this page 📄'])},
{n:'loc',k:['!sukabumi','!lokasi','!location','!asal','!tinggal','domisili','dimana'],a:A(['Syifa berasal dari Sukabumi, Jawa Barat 📍'],['Syifa is based in Sukabumi, West Java 📍'])},
{n:'lang',k:['!bahasa inggris','!english','!bilingual'],a:A(['Syifa berbahasa Indonesia (native) dan Inggris tingkat dasar. Portofolio ini dua bahasa: coba tombol EN/ID di navigasi 🌐'],['Syifa speaks Indonesian (native) and basic English. This portfolio is bilingual: try the EN/ID button in the nav 🌐'])},
{n:'sal',k:['!gaji','!salary','!tarif','!rate','!bayaran'],h:'#contact',a:A(['Soal gaji atau tarif belum dibahas di portofolio. Silakan diskusi langsung dengan Syifa lewat LinkedIn atau email 🤝'],['Salary and rates aren’t covered in the portfolio. Please discuss directly with Syifa via LinkedIn or email 🤝'])},
{n:'priv',k:['!pacar','!umur','!usia','!age','!single','!menikah','!alamat','!boyfriend','!address'],a:A(['Hehe, itu di luar yang boleh kubocorkan 🙈 Yang bisa kuceritakan: proyek, skill, dan pengalaman Syifa.'],['Hehe, that’s beyond what I’m allowed to spill 🙈 I can tell you about Syifa’s projects, skills, and experience.'])}];
var TECH={n:'tech',g:'skill'},UNK={n:'unk',g:'skill'};
function wt(k){var c=k.replace('!','');return(k[0]==='!'?5:1)+(c.length>6?1:0)+(c.indexOf(' ')>-1?2:0)}
function lev(a,b){var m=[],i,j;for(i=0;i<=a.length;i++)m[i]=[i];for(j=1;j<=b.length;j++)m[0][j]=j;for(i=1;i<=a.length;i++)for(j=1;j<=b.length;j++)m[i][j]=Math.min(m[i-1][j]+1,m[i][j-1]+1,m[i-1][j-1]+(a[i-1]===b[j-1]?0:1));return m[a.length][b.length]}
function hit(n,tk,kw){kw=kw.replace('!','');if(kw.indexOf(' ')>-1)return n.indexOf(kw)>-1;return tk.some(function(t){return t===kw||(kw.length>5&&t.length>3&&lev(t,kw)<=(kw.length>7?2:1))})}
function dl(tk){var e=0,i=0;tk.forEach(function(t){if(ENW.indexOf(t)>-1)e++;if(IDW.indexOf(t)>-1)i++});return e>i?'en':i>e?'id':lang}
function pick(a){var r;do{r=a[Math.floor(Math.random()*a.length)]}while(a.length>1&&r===lastR);lastR=r;return r}
function cap(s){return s.charAt(0).toUpperCase()+s.slice(1)}
function reply(q){
var n=q.toLowerCase().replace(/[^a-z0-9+#.\- ]/g,' ').replace(/\s+/g,' ').trim(),tk=n.split(' '),L=dl(tk),best=null,bs=0,s=null,key,ut,t,o={L:L};
TP.forEach(function(p){var c=0;p.k.forEach(function(kw){if(hit(n,tk,kw))c+=wt(kw)});if(c>bs){bs=c;best=p}});
for(key in SB){if(SB[key].some(function(w){return hit(n,tk,w)})){s=key;break}}
for(key in TM){if(TM.hasOwnProperty(key)&&!(s==='link'&&key==='github')&&hit(n,tk,key)){if(bs<5){best=TECH;bs=4;o.tk=key}break}}
ut=UT.filter(function(u){return hit(n,tk,u)})[0];if(ut&&bs<5){best=UNK;bs=4;o.tk=ut}
if(s&&last&&best!==TECH&&best!==UNK&&!(best&&best.pi!=null&&bs>=5)){best=last;bs=5}
if(!best){t=pick(L==='id'?['Hmm, aku belum punya jawaban untuk itu 🤔 Aku paling tahu soal proyek, skill, pengalaman, dan kontak Syifa. Untuk hal lain, tanya langsung ke Syifa lewat LinkedIn ya!','Waduh, itu di luar catatanku 🙈 Coba tanya soal proyek, skill, atau pengalaman Syifa.']:['Hmm, I don’t have an answer for that 🤔 I know Syifa’s projects, skills, experience, and contact best. For anything else, ask her directly on LinkedIn!','Oops, that’s outside my notes 🙈 Try asking about Syifa’s projects, skills, or experience.']);o.t=t;o.g='gen';return o}
o.g=best.g||'gen';o.e=best.e;
if(best===TECH){var ix=TM[o.tk],nm=cap(o.tk);t=ix.length?(L==='id'?'Ya! '+nm+' dipakai Syifa di '+ix.map(function(i){return P[i].t[L]}).join(' dan ')+' 💻':'Yes! Syifa used '+nm+' in '+ix.map(function(i){return P[i].t[L]}).join(' and ')+' 💻'):(L==='id'?'Ya, '+nm+' ada di daftar skill Syifa ✅':'Yes, '+nm+' is on Syifa’s skill list ✅')}
else if(best===UNK){t=(L==='id'?cap(o.tk)+' belum tercantum di daftar skill Syifa saat ini, tapi dia terbiasa belajar mandiri lewat proyek dan pelatihan. Yang sudah dikuasai: Python, JavaScript, Java, Node.js, MySQL, Pandas, Langflow, Figma 🌱':cap(o.tk)+' isn’t on Syifa’s skill list right now, but she’s used to learning on her own through projects and training. What she knows: Python, JavaScript, Java, Node.js, MySQL, Pandas, Langflow, Figma 🌱')}
else if(best.pi!=null&&s){var p=P[best.pi];last=best;
if(s==='tech')t=(L==='id'?'Teknologi di ':'Tech in ')+p.t[L]+': '+p.tech.join(', ')+' 🧰';
else if(s==='link'){t=p.gh?(L==='id'?'Link GitHub ada di tombol pada kartu proyeknya. Kubukakan ya 👇':'The GitHub link is the button on its project card. Let me open it 👇'):(L==='id'?'Prototipe ini dikerjakan di Figma dan Whimsical, link-nya menyusul 🎨':'This prototype lives in Figma and Whimsical, link coming soon 🎨')}
else if(s==='src'&&best.s)t=best.s[L];
else t=best.m?best.m[L]:pick(best.a[L])}
else t=pick(best.a[L]);
if(best.pi!=null){last=best;o.i=best.pi;o.lbl=L==='id'?'Buka proyeknya ↗':'Open the project ↗'}else if(best.n!=='thx')last=null;
if(best.h){o.h=best.h;o.hl=L==='id'?(best.h==='#projects'?'Lihat proyek ↗':'Ke bagian Kontak ↗'):(best.h==='#projects'?'See projects ↗':'Go to Contact ↗')}
if(best.pi!=null&&/^(pernah|bisa|apakah|dia pernah|can|does|did|has|is she)\b/.test(n))t=(L==='id'?'Iya! ':'Yes! ')+t;
o.t=t;return o}
function row(u){var r=document.createElement('div');r.className='row'+(u?' u':'');if(!u){var a=document.createElement('i');a.className='mav';r.appendChild(a)}var m=document.createElement('div');m.className='m';r.appendChild(m);msgs.appendChild(r);msgs.scrollTop=msgs.scrollHeight;return m}
var MO={'':'M27 44q5 4 10 0',happy:'M24 42q8 9 16 0',think:'M28 46h8'};
function mood(s){av.setAttribute('class','av '+s);$('#mo').setAttribute('d',MO[s])}
function burst(em){if(rm)return;var r=av.getBoundingClientRect();for(var i=0;i<7;i++){(function(){var s=document.createElement('span'),a=Math.random()*Math.PI*2,d=50+Math.random()*70;s.textContent=em;s.style.cssText='position:fixed;z-index:998;pointer-events:none;font-size:18px;left:'+(r.left+r.width/2)+'px;top:'+(r.top+r.height/2)+'px';document.body.appendChild(s);s.animate([{transform:'translate(0,0) scale(.6)',opacity:1},{transform:'translate('+Math.cos(a)*d+'px,'+(Math.sin(a)*d-30)+'px) scale(1.3)',opacity:0}],{duration:900,easing:'ease-out'}).onfinish=function(){s.remove()}})()}}
function goProject(i){cur=i;applyLang();$('#projects').scrollIntoView({behavior:'smooth'})}
function chips(r){sug.innerHTML='';var a=[],L=(r&&r.L)||lang;if(r&&r.i!=null)a.push({l:r.lbl,p:r.i});if(r&&r.h)a.push({l:r.hl,h:r.h});(CH[(r&&r.g)||'gen'][L]).forEach(function(x){a.push({l:x})});
a.slice(0,5).forEach(function(c){var b=document.createElement('button');b.textContent=c.l;if(c.p!=null||c.h)b.className='go';b.onclick=function(){if(c.p!=null)goProject(c.p);else if(c.h)$(c.h).scrollIntoView({behavior:'smooth'});else send(c.l)};sug.appendChild(b)})}
function send(q){q=(q||inp.value).trim();if(!q||busy)return;inp.value='';busy=true;sug.innerHTML='';row(1).textContent=q;var r=reply(q),tm=row(0);tm.innerHTML='<span class="dots"><i></i><i></i><i></i></span>';mood('think');
setTimeout(function(){tm.textContent=r.t;msgs.scrollTop=msgs.scrollHeight;mood('happy');if(r.e)burst(r.e);lr=r;chips(r);busy=false;setTimeout(function(){mood('')},1500)},rm?0:Math.min(1300,450+r.t.length*5))}
var POKE={id:['Hehe geli! 🙈','Aduh, jangan dicolek terus 😆','Ada yang bisa kubantu? 💜'],en:['Hehe, that tickles! 🙈','Ouch, stop poking me 😆','Can I help with something? 💜']};
av.onclick=function(){burst('💜');mood('happy');row(0).textContent=pick(POKE[lang]);setTimeout(function(){mood('')},1200)};
addEventListener('pointermove',function(e){if(rm||!fine)return;var r=av.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,a=Math.atan2(e.clientY-cy,e.clientX-cx),d=Math.min(2.6,Math.hypot(e.clientX-cx,e.clientY-cy)/60);[['q1',24],['q2',40]].forEach(function(p){var el=$('#'+p[0]);el.setAttribute('cx',p[1]+Math.cos(a)*d);el.setAttribute('cy',33+Math.sin(a)*d)})});
window.__rebuildSug=function(){var f=msgs.children;if(f.length===1)f[0].querySelector('.m').textContent=t('wel');chips(lr?{i:lr.i,lbl:lr.lbl,h:lr.h,hl:lr.hl,g:lr.g,L:lang}:{L:lang})};
row(0).textContent=t('wel');
$('#send').onclick=function(){send()};inp.onkeydown=function(e){if(e.key==='Enter')send()};
applyLang();
})();
