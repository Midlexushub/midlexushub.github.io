const WA="60143783301";

const services=[
["MIDMAN","Urusan transaksi dengan lebih tersusun dan selamat.","Manage transactions in an organised and secure way."],
["TOPUP GAMES","Perkhidmatan topup untuk pelbagai game.","Top-up service for various games."],
["SELL & BUY ACCOUNT GAMES","Jual beli akaun game dengan urusan yang jelas.","Buy and sell game accounts with clear dealings."],
["PAID PROMOTE ACCOUNT GAMES","Promosi akaun game untuk bantu tingkatkan pendedahan.","Promote game accounts to increase exposure."],
["SELL SET ANDRO/IP","Urusan jual dan beli set Android serta IP.","Buy and sell Android sets and IP services."],
["BOOST TIKTOK","Servis boost TikTok untuk bantu tingkatkan akaun.","TikTok boosting service to help grow your account."]
];

const steps=[
["Pilih servis","Choose a service"],
["Tekan HUBUNGI","Press CONTACT"],
["Berikan maklumat diperlukan","Give the required information"],
["Dapatkan harga / quotation","Get the price / quotation"],
["Sahkan tempahan","Confirm the order"],
["Buat pembayaran","Make payment"],
["Proses sehingga selesai","Processing until completion"]
];

const reasons=[
["Proses Tersusun","Organised Process"],
["Mudah Berurusan","Easy to Deal With"],
["Pelbagai Servis","Various Services"],
["Maklumat Jelas","Clear Information"],
["Sokongan Pelanggan","Customer Support"],
["XNZHUB","XNZHUB"]
];

const midmans=[
["MIDMAN XNZ","60143783301"],
["MIDMAN BUNGSTORE","60179988219"],
["MIDMAN AASHOP","60179981705"],
["MIDMAN AMIRA","601173807270"],
["MIDMAN ANOS 1","601161324347"],
["MIDMAN ANOS 2","601151228900"],
["MIDMAN EPOL 1","60137314591"],
["MIDMAN EPOL 2","60105491599"],
["MIDMAN FAHIMPRIME","601161228684"],
["MIDMAN KAITO","601139740407"],
["MIDMAN KUSA","601170130314"],
["MIDMAN LEX","60166105139"],
["MIDMAN MANZ","60173482079"],
["MIDMAN MILO (Malam)","60187905510"],
["MIDMAN MILO (Pagi)","60184035510"],
["MIDMAN PILO 1","601158432271"],
["MIDMAN PILO 2","601114942271"],
["MIDMAN RICH","60149631129"],
["MIDMAN ZIXX","60108215834"]
];

let lang=localStorage.getItem("xnz_lang")||"my";

const $=id=>document.getElementById(id);

function renderServices(){
  $("services").innerHTML=services.map((s,i)=>`
    <div class="service-card">
      <h3>${s[lang==="my"?0:0]}</h3>
      <p>${s[lang==="my"?1:2]}</p>
      <button class="service-contact" data-service="${s[0]}">
        ${lang==="my"?"HUBUNGI":"CONTACT"}
      </button>
    </div>
  `).join("");
}

function renderHow(){
  $("how").innerHTML=steps.map(s=>`
    <div class="order-step">
      <span>${lang==="my"?s[0]:s[1]}</span>
    </div>
  `).join("");
}

function renderWhy(){
  $("why").innerHTML=reasons.map(s=>`
    <div class="why-card">
      <h3>${lang==="my"?s[0]:s[1]}</h3>
      <p>${lang==="my"?"XNZHUB":"XNZHUB"}</p>
    </div>
  `).join("");
}

function renderMidman(){
  $("midmanList").innerHTML=midmans.map(m=>`
    <div class="midman-card">
      <span class="midman-name">${m[0]}</span>
      <a class="midman-wa"
         href="https://wa.me/${m[1]}"
         target="_blank">
         WhatsApp
      </a>
    </div>
  `).join("");
}

function translateStatic(){
  const en=lang==="en";

  document.documentElement.lang=en?"en":"ms";

  document.querySelector("header small").textContent=
    "DIGITAL SERVICES";

  document.querySelector("#home .hero i").textContent=
    "XNZHUB • OFFICIAL";

  document.querySelector("#home .hero p").textContent=
    en
    ?"Digital services for gaming, accounts, promotion and social media."
    :"Pusat perkhidmatan digital untuk gaming, akaun, promosi dan social media.";

  const headings=document.querySelectorAll("#home .section h2");

  headings[0].textContent="OUR SERVICE XNZ";
  headings[1].textContent="HOW TO ORDER";
  headings[2].textContent="WHY XNZ";

  document.querySelector("#midman label").textContent=
    en?"XNZHUB • REGISTERED":"XNZHUB • REGISTERED";

  document.querySelector("#midman h2").textContent=
    en?"REGISTERED MIDMAN":"MIDMAN YANG BERDAFTAR";

  document.querySelector("#midman p").textContent=
    en
    ?"List of Midman registered with XNZHUB."
    :"Senarai Midman yang berdaftar dengan XNZHUB.";

  document.querySelector("#contact label").textContent=
    en?"XNZHUB • CONTACT":"XNZHUB • CONTACT";

  document.querySelector("#contact h2").textContent=
    en?"GET IN TOUCH":"GET IN TOUCH";

  document.querySelector("#contact > p").textContent=
    en?"CONTACT CENTRE":"PUSAT PERHUBUNGAN";

  $("name").placeholder=en?"FULL NAME":"NAMA PENUH";
  $("phone").placeholder=en?"WHATSAPP NO":"NO WS";
  $("message").placeholder=en?"QUESTION DETAILS":"BUTIRAN PERTANYAAN";
  $("contactForm button").textContent=
    en?"SUBMIT REQUEST":"HANTAR PERMOHONAN";

  $("contactInfo").querySelector("h3").textContent=
    en?"HELP LINE INFORMATION":"INFORMASI TALIAN BANTUAN";

  document.querySelector("#checker label").textContent=
    en?"XNZHUB • TOOL":"XNZHUB • TOOL";

  document.querySelector("#checker h2").textContent=
    "MLBB CHECKER ID";

  document.querySelector("#checker > p").textContent=
    en?"Check your Mobile Legends ID."
    :"Semak ID Mobile Legends anda.";

  $("mlId").placeholder=en?"MLBB ID":"ID MLBB";
  $("zoneId").placeholder=en?"ZONE ID":"ZONE ID";
  $("checkerForm button").textContent=
    en?"CHECK ID":"CHECK ID";

  document.querySelector("footer").textContent=
    "XNZHUB • DIGITAL SERVICES";

  document.querySelector("#menu strong").textContent=
    en?"CONFIGURATION":"KONFIGURASI";

  document.querySelector("#menu div:nth-of-type(1) span").textContent=
    en?"🌐 LANGUAGE":"🌐 BAHASA";

  document.querySelector("#menu div:nth-of-type(2) span").textContent=
    en?"🌓 THEME":"🌓 TEMA";

  document.querySelector('[data-page="home"]').textContent=
    en?"🏠 HOME":"🏠 LAMAN UTAMA";

  document.querySelector('[data-page="midman"]').textContent=
    en?"🛡️ MIDMAN":"🛡️ MIDMAN";

  document.querySelector('[data-page="contact"]').textContent=
    en?"📞 CONTACT US":"📞 HUBUNGI KAMI";

  document.querySelector('[data-page="checker"]').textContent=
    en?"🎮 MLBB CHECKER ID":"🎮 MLBB CHECKER ID";
}

function render(){
  renderServices();
  renderHow();
  renderWhy();
  renderMidman();
  translateStatic();

  document.querySelectorAll("[data-lang]").forEach(b=>{
    b.classList.toggle("active",b.dataset.lang===lang);
  });
}

function openPage(page){
  document.querySelectorAll(".page").forEach(p=>{
    p.classList.toggle("active",p.id===page);
  });

  $("menu").classList.add("hidden");

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
}

$("plus").addEventListener("click",()=>{
  $("menu").classList.toggle("hidden");
});

document.querySelectorAll("[data-page]").forEach(btn=>{
  btn.addEventListener("click",()=>{
    openPage(btn.dataset.page);
  });
});

document.addEventListener("click",e=>{
  const btn=e.target.closest(".service-contact");

  if(!btn)return;

  const text=encodeURIComponent(
    "Assalamualaikum XNZHUB, saya ingin bertanya tentang servis: "+
    btn.dataset.service
  );

  window.open(
    "https://wa.me/"+WA+"?text="+text,
    "_blank"
  );
});

document.querySelectorAll("[data-lang]").forEach(btn=>{
  btn.addEventListener("click",()=>{
    lang=btn.dataset.lang;
    localStorage.setItem("xnz_lang",lang);
    render();
  });
});

document.querySelectorAll("[data-theme]").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const white=btn.dataset.theme==="white";

    document.body.classList.toggle("white",white);

    localStorage.setItem(
      "xnz_theme",
      white?"white":"dark"
    );

    document.querySelectorAll("[data-theme]").forEach(b=>{
      b.classList.toggle(
        "active",
        b.dataset.theme===btn.dataset.theme
      );
    });
  });
});

$("contactForm").addEventListener("submit",e=>{
  e.preventDefault();

  const name=$("name").value.trim();
  const phone=$("phone").value.trim();
  const message=$("message").value.trim();

  if(!name||!phone||!message)return;

  const text=encodeURIComponent(
    "XNZHUB - BORANG MAKLUM BALAS\n\n"+
    "Nama: "+name+"\n"+
    "No WS: "+phone+"\n"+
    "Pertanyaan: "+message
  );

  window.open(
    "https://wa.me/"+WA+"?text="+text,
    "_blank"
  );
});

$("checkerForm").addEventListener("submit",async e=>{
  e.preventDefault();

  const id=$("mlId").value.trim();
  const zone=$("zoneId").value.trim();
  const result=$("checkerResult");

  if(!id||!zone)return;

  result.innerHTML=`
    <div class="checker-box">
      <h3>${lang==="my"?"SEDANG SEMAK...":"CHECKING..."}</h3>
      <p>${lang==="my"?"Sila tunggu sebentar.":"Please wait."}</p>
    </div>
  `;

  try{
    const response=await fetch(
      "https://xnzcheckid.vercel.app/api/checker",
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          game:"mlbb",
          id:id,
          zone:zone
        })
      }
    );

    const data=await response.json();

    if(!response.ok){
      throw new Error(
        data.message||"Checker error"
      );
    }

    const nickname=
      data.nickname||
      data.name||
      data.username||
      data.data?.nickname||
      data.data?.name;

    if(nickname){
      result.innerHTML=`
        <div class="checker-box">
          <h3>${lang==="my"?"BERJAYA":"SUCCESS"}</h3>
          <p>ID: ${id}</p>
          <p>ZONE: ${zone}</p>
          <p>NICKNAME: <b>${nickname}</b></p>
        </div>
      `;
    }else{
      result.innerHTML=`
        <div class="checker-error">
          ${lang==="my"
          ?"ID / Zone tidak dijumpai."
          :"ID / Zone was not found."}
        </div>
      `;
    }

  }catch(error){

    result.innerHTML=`
      <div class="checker-error">
        ${lang==="my"
        ?"Checker gagal disambungkan. Sila cuba lagi."
        :"Checker connection failed. Please try again."}
      </div>
    `;
  }
});

const savedTheme=localStorage.getItem("xnz_theme")||"dark";

document.body.classList.toggle(
  "white",
  savedTheme==="white"
);

document.querySelectorAll("[data-theme]").forEach(b=>{
  b.classList.toggle(
    "active",
    b.dataset.theme===savedTheme
  );
});

$("menu").classList.add("hidden");

render();
