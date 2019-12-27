url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=5c636a468a90465aa7cab199265d7299';
newscontent = document.querySelector("#newscontent");
let news = [];

function getLatestNews(){
    fetch(url).then(resp=>resp.json())
              .then(data=>{
                    news = data["articles"];
                    showAllnews();
    }).catch(error=>{
        console.log("While getting news :",error);
    })
}

function showAllnews(){
  str =  `<ul class="list-group list-group-flush">`
  
  for(let n of news){
      str += ` <li class="list-group-item">
                <h3>${n.title}</h3>
                <p class="lead"> ${n.content}</p>
                <img src=${n.urlToImage} class="img-fluid">
               </li>`
  }
  str += `</ul>`
  newscontent.innerHTML = str;    
}

getLatestNews();