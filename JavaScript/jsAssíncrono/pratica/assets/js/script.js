// armazenamento da API, com uma const

const BASE_URL = "https://thatcopy.pw/catapi/rest/";

//selecionar o id do button

const catBtn = document.getElementById("change-cat");

//função assincrona para carregar as imagens do gatos na tela
// Com try e catch
/*
const getCats = async () => {
  try {
      const data = await fetch(BASE_URL)
      const json = await data.json()

      return json.webpurl
  }catch(e){
      console.log(e.message)
  }
}
*/
// como Uma Promise
const getCats = async () => {
  const data = await fetch(BASE_URL)
    .then((res) => res.json())
    .catch((e) => console.log(e));
   return data.webpurl;
};

const loadImg = async () => {
  const catImg = document.getElementById("cat");
  catImg.src = await getCats();
};

catBtn.addEventListener("click", loadImg);

loadImg();
