
//components
fetch("../components/hamburger.html")
  .then((response) => response.text())
  .then((data) => document.querySelector("#hamburger").innerHTML = data)
  .then(()=>{
    const menu_list = [
      {name:"home", path:"../"},
      {name:"content list", path:"../pages/content.html"},
      {name:"text", path:"../pages/text.html"},
      {name:"minted", path:"../pages/minted.html"},
      {name:"understand NFT", path:"../pages/understand.html"},
    ]
    const menu_elm = document.getElementById("menu_elm");
    const currentPath = location.pathname.slice(location.pathname.lastIndexOf("/"));
    menu_list.forEach((menu)=>{
      const li = document.createElement("li");
      const button = document.createElement("button");
      button.innerText = menu.name;
      button.setAttribute("onclick", "location.href='"+menu.path+"'");
      const thisPath = menu.path.slice(menu.path.lastIndexOf("/"));
      if(thisPath === currentPath) button.classList.add("now");
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
if(document.getElementById("content")){
  //検索欄
  const contentsList = document.getElementById("contents-list");
  contents.forEach((content) => {
    const item = document.createElement("p");
    item.innerText = content.name+":"+content.title;
    item.classList.add("content-item");
    item.addEventListener("mousedown", () => contentClicked(content));
    contentsList.appendChild(item);
  });
  function search(){
    const contentsList = document.getElementById("contents-list");
    const items = contentsList.children;
    const phrase = document.getElementById("search-box").value;
    Array.from(items).forEach((item) => {
      console.log(item.innerText);
      if(item.innerText.indexOf(phrase)>=0) item.style.display = "block";
      else item.style.display = "none";
    })
    console.log(result);
  }

  //ブラックスクエアの設置
  const squareArea = document.getElementById("square-area");
  for(let i=1; i<=3; i++){
    const floorBox = document.createElement("div");
    floorBox.classList.add("floor-box");
    const floorTitle = document.createElement("h2");
    floorTitle.innerText = (i===1 && "1st floor") || (i===2 && "2nd floor") || (i===3 && "3rd floor");
    floorTitle.setAttribute("id", "floor"+i);
    floorBox.appendChild(floorTitle);
    const squareBox = document.createElement("div");
    squareBox.classList.add("square-box");
    const floorContents = contents.filter((content)=> content.floor===i);
    floorContents.forEach((content)=>{
      const squareCard = document.createElement("div");
      squareCard.classList.add("square-card");
      const squareName = document.createElement("p");
      squareName.innerText = content.name;
      squareName.classList.add("square-name");
      const squareIndex = document.createElement("span");
      squareIndex.innerText = " ("+(contents.indexOf(content)+1)+")";
      const squareImg = document.createElement("img");
      squareImg.src = "../assets/blacksquare.jpg" ;
      squareImg.width = 150;
      squareImg.height = 150;
      squareImg.addEventListener("click", () => contentClicked(content));
      squareName.appendChild(squareIndex);
      squareCard.appendChild(squareName);
      squareCard.appendChild(squareImg);
      squareBox.appendChild(squareCard);
    })
    floorBox.appendChild(squareBox);
    squareArea.appendChild(floorBox);
  }
}
//コンテンツ選択時の関数
function contentClicked(content){
  console.log("clicked: "+content.name);
}
