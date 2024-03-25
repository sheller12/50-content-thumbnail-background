
const currentPath = location.pathname.slice(location.pathname.lastIndexOf("/")+1); //現在のpath

//components
fetch("./components/hamburger.html")
  .then((response) => response.text())
  .then((data) => document.querySelector("#hamburger").innerHTML = data)
  .then(()=>{
    const menu_list = [
      {name:"text",         path:"./text.html",       include:["text.html"]},
      {name:"content list", path:"./",                include:["", "index.html", "content_selected.html"]},
      {name:"minted",       path:"./minted.html",     include:["minted.html"]},
      {name:"exhibition",   path:"./exhibition.html", include:["exhibition.html"]},
      {name:"home",         path:"./home.html",       include:["home.html"]},
    ]
    const menu_elm = document.getElementById("menu_elm");
    menu_list.forEach((menu)=>{
      const li = document.createElement("li");
      const button = document.createElement("button");
      button.innerText = menu.name;
      button.setAttribute("onclick", `location.href="${menu.path}"`);
      const match = (path)=>path===currentPath;
      if(menu.include.some(match)) button.classList.add("now");
      li.appendChild(button);
      menu_elm.appendChild(li);
    });
  });


//contents page
const contents =[
  { "name":"1A",
    "title":"神隠し",
    "floor":1,
  },
  { "name":"1B",
    "title":"羅生門 〜老婆の逆襲〜",
    "floor":1,
  },
  { "name":"1C",
    "title":"Cテレビジョンネットワーク",
    "floor":1,
  },
  { "name":"1E",
    "title":"姫と豚とジュリエット",
    "floor":1,
  },
  { "name":"1F",
    "title":"The Gambler",
    "floor":1,
  },
  { "name":"1G",
    "title":"君ノ名ハ",
    "floor":1,
  },
  { "name":"1H",
    "title":"Grand Escape",
    "floor":1,
  },
  { "name":"管弦楽部",
    "title":"majiでokeする5秒前",
    "floor":1,
  },
  { "name":"吹奏楽部",
    "title":"FESTIVAL BRASS 2021",
    "floor":1,
  },
  { "name":"園芸部",
    "title":"Nishi Garden",
    "floor":1,
  },

  { "name":"2A",
    "title":"四輪羅部",
    "floor":2,
  },
  { "name":"2B",
    "title":"B術作品 展覧会",
    "floor":2,
  },
  { "name":"2C",
    "title":"OWARI NO SEKAI",
    "floor":2,
  },
  { "name":"2D",
    "title":"Return:帰ろう",
    "floor":2,
  },
  { "name":"2E",
    "title":"真剣ゼミ",
    "floor":2,
  },
  { "name":"2F",
    "title":"シン・エファンゲリオン",
    "floor":2,
  },
  { "name":"2G",
    "title":"koujiの部屋",
    "floor":2,
  },
  { "name":"2H",
    "title":"籠の中の鳥よ",
    "floor":2,
  },
  { "name":"軽音楽同好会",
    "title":"けいおんらいぶ",
    "floor":2,
  },
  { "name":"BTM Ⅱ",
    "title":"Magic Shop @NHS",
    "floor":2,
  },
  { "name":"ケルト音楽サークル",
    "title":"ケルトの音楽会 2021",
    "floor":2,
  },
  { "name":"ゴスペルフリークス部",
    "title":"ゴスフリ〜共鳴外縁天体〜",
    "floor":2,
  },
  { "name":"鼓絆",
    "title":"この一打に真を込めて",
    "floor":2,
  },
  { "name":"美術部",
    "title":"誘い絵",
    "floor":2,
  },
  { "name":"イラスト研究部",
    "title":"いらすとけんきゅーぶ",
    "floor":2,
  },
  { "name":"工作サークル",
    "title":"万国博覧会",
    "floor":2,
  },
  { "name":"華道部",
    "title":"和音",
    "floor":2,
  },
  { "name":"74期サークル志記",
    "title":"蒲田行進曲",
    "floor":2,
  },
  { "name":"75×76剣道部",
    "title":"人生劇場2021 涼馬伝",
    "floor":2,
  },
  { "name":"ヲタ芸サークル",
    "title":"Sparkle",
    "floor":2,
  },
  { "name":"Pas de Huit",
    "title":"Etoile",
    "floor":2,
  },
  { "name":"NIN",
    "title":"NIN",
    "floor":2,
  },
  { "name":"ポケモン研究サークル",
    "title":"ポケットモンスター,縮めてケンタ",
    "floor":2,
  },
  { "name":"秘密結社ベトリナ",
    "title":"Useless For Our daily life",
    "floor":2,
  },
  { "name":"放送部",
    "title":"The☆声劇 ほぅ、そうかい",
    "floor":2,
  },

  { "name":"かるた部",
    "title":"あまつかぜ",
    "floor":3,
  },
  { "name":"NISHI FLYER",
    "title":"西空配布会",
    "floor":3,
  },
  { "name":"NERV 西高支部",
    "title":"IT WILL(NOT)BE CONTINUED",
    "floor":3,
  },
  { "name":"origami サークル",
    "title":"折",
    "floor":3,
  },
  { "name":"数学研究同好会",
    "title":"数研",
    "floor":3,
  },
  { "name":"文芸部",
    "title":"たまゆら",
    "floor":3,
  },
  { "name":"SDGsの会",
    "title":"見る・知る・わかる SDGs",
    "floor":3,
  },
  { "name":"75期HR委員会",
    "title":"この穴から顔出すのひよってるやついるー？いねーよなぁ！",
    "floor":3,
  },
  { "name":"架空同好会",
    "title":"「これらの作品はフィクションであり、実在の人物・団体とは一切関係ありません」",
    "floor":3,
  },
  { "name":"シュベルト",
    "title":"狼煙の上がった夜",
    "floor":3,
  },
  { "name":"新体操有志",
    "title":"WE♡R.G.",
    "floor":3,
  },
  { "name":"化学部",
    "title":"化学部",
    "floor":3,
  },
  { "name":"パスタが少し余っていたので・・・",
    "title":"ざんねんな西高生事典",
    "floor":3,
  },
  { "name":"練馬区民の会",
    "title":"練馬区民の会2021",
    "floor":3,
  },
  { "name":"物理部",
    "title":"物理の部屋",
    "floor":3,
  }
];
if(currentPath===""){
  //ブラックスクエアの設置
  const squareArea = document.getElementById("square-area");
  for(let i=1; i<=3; i++){
    const floorBox = document.createElement("div");
    floorBox.classList.add("floor-box");
    const floorContents = contents.filter((content)=> content.floor===i);
    floorContents.forEach((content)=>{
      const squareImg = document.createElement("div");
      squareImg.classList.add("black-square");
      const contentIndex = (contents.indexOf(content)+1).toString().padStart(3, "0");
      squareImg.addEventListener("click", () => window.location.href = `./content_selected.html?index=${contentIndex}`);
      floorBox.appendChild(squareImg);
    })
    squareArea.appendChild(floorBox);
  }
}


//content_selected page
if(currentPath==="content_selected.html"){
  const content_params = new URLSearchParams(window.location.search);
  const title = document.getElementById("selected-content-title");
  title.innerText = `50CTB #${content_params.get("index")}`;

  function toMintPage(){
    window.location.href = `./mint.html${window.location.search}`;
  }
}



//text page
if(currentPath==="text.html"){
  function pxToRatioX(px){
    return px * 100 / document.documentElement.clientWidth;
  }
  function pxToRatioY(px){
    return px * 100 / document.documentElement.clientHeight;
  }
  var discPos=[];
  function locateDiscs(){
    var discs = document.getElementsByClassName("disc");
    if(!discPos[0]){
      for(let i=0; i<discs.length; i++){
        var discPosX = 50 + Math.random();
        var discPosY = 25 + 18*i + Math.random();
        discPos[i] = {"x":discPosX,"y":discPosY};
      }
    }
    for(let i=0; i<discs.length; i++){
      discs[i].id = i;
      discs[i].onclick = ()=>{return false};
      discs[i].style.left = discPos[i].x + "vw";
      discs[i].style.top  = discPos[i].y + "dvh";
    }
  }
  function enableDragging(){
    var elements = document.getElementsByClassName("disc");
    for(let i=0; i<elements.length; i++){
      elements[i].style.zIndex = i + 10;
    }
    for(var i = 0; i < elements.length; i++) {
      elements[i].addEventListener("mousedown", mdown, false);
      elements[i].addEventListener("touchstart", mdown, false);
    }
    var relativeX;
    var relativeY;
    function mdown(e) {
      this.classList.add("drag");
      this.classList.add("click");
      e.preventDefault();
      for(let i=0; i<elements.length; i++){
        if(elements[i].style.zIndex > this.style.zIndex) elements[i].style.zIndex -= 1;
      }
      this.style.zIndex = elements.length + 9;
      document.body.addEventListener("mousemove", mmove, false);
      document.body.addEventListener("touchmove", mmove, false);
      document.body.addEventListener("mouseleave", mup, false);
      document.body.addEventListener("touchleave", mup, false);
      this.addEventListener("mouseup", mup, false);
      this.addEventListener("touchend", mup, false);
      relativeX = window.scrollX + this.getBoundingClientRect().left + this.clientWidth/2 - e.pageX;
      relativeY = window.scrollY + this.getBoundingClientRect().top + this.clientHeight/2 - e.pageY;
    }
    function mmove(e) {
      var drag = document.getElementsByClassName("drag")[0];
      setTimeout(()=>{
        drag.classList.remove("click");
      },100);
      if(!drag) return;
      if(e.type === "mousemove") {
          var event = e;
      } else {
          var event = e.changedTouches[0];
      }
      var limitedX = Math.min(Math.max(event.pageX + relativeX,  drag.clientWidth/2),  document.body.clientWidth-drag.clientWidth/2);
      var limitedY = Math.min(Math.max(event.pageY + relativeY, drag.clientHeight/2), document.body.clientHeight-drag.clientHeight/2);
      var ratioX = pxToRatioX(limitedX);
      var ratioY = pxToRatioY(limitedY);
      drag.style.left = ratioX + "vw";
      drag.style.top = ratioY + "dvh";
      discPos[parseInt(drag.id)].x = ratioX;
      discPos[parseInt(drag.id)].y = ratioY;
    }
    function mup(e) {
      var drag = document.getElementsByClassName("drag")[0];
      if(!drag) return;
      if(drag.classList.contains("click"))
      {
        drag.classList.remove("click");
        const textCard = document.getElementById("text-"+(parseInt(drag.id)+1));
        textCard.style.display = "block";
      }
      document.body.removeEventListener("mousemove", mmove, false);
      document.body.removeEventListener("touchmove", mmove, false);
      document.body.removeEventListener("mouseleave", mup, false);
      document.body.removeEventListener("touchleave", mup, false);
      drag.removeEventListener("mouseup", mup, false);
      drag.removeEventListener("touchend", mup, false);
      drag.classList.remove("drag");
    }
  };
  function setUpTextCards(){
    const textCards = document.getElementById("text-cards").children;
    Array.from(textCards).forEach((card)=>{
      document.addEventListener("mousedown", (e)=>{
        if(!e.target.closest(`#${card.id}`)){
          card.style.display="none";
        }
      });
      const closeButton = document.createElement("p");
      closeButton.innerText = "閉じる";
      closeButton.classList.add("close-button");
      closeButton.addEventListener("click", ()=>{
        card.style.display="none";
      })
      card.appendChild(closeButton);
    })
  }
  locateDiscs();
  enableDragging();
  setUpTextCards();
}