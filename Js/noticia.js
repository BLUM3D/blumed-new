var API_KEY = '37dd07f463004ae39bb7f05d28a400f4';

async function exibeNoticia(){
  const URL = `https://newsapi.org/v2/everything?q=seguranca&apiKey=${API_KEY}`;
  let display = document.getElementById('box-noticia');
  let txt = "";
  const d  = await fetch(`${URL}`);
  const f = await d.json();
  console.log(f);

  for(let i = 0; i < f.articles.length; i++) {
    let noticia  =  f.articles[i];
    if(noticia.urlToImage){
      txt += `
    <article class="noticia">
    <div class="img-noticia">
      <img src="${noticia.urlToImage}">
    </div>
    <div class="txt-noticia">
      <h3 class="titulo">${noticia.title}</h3>
      <p class="texto">${noticia.content} </p>
      <a href="${noticia.url}" class="leia-mais">leia mais...</a>
    </div>
  </article>
    `;
    }
  }

  display.innerHTML = txt;


}

exibeNoticia();