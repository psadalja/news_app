function getData() {
  fetch(
    "https://newsapi.org/v2/everything?q=Apple&from=2021-08-10&sortBy=popularity&apiKey=f5c42128d0eb4110a85fac07e72da4b2"
  )
    .then((res) => res.json())
    .then((data) => displayNewsData(data.articles));
}

function displayNewsData(articles) {
  console.log(articles[0]);
  articles.forEach((element) => {
    const cardDivElement = document.createElement("div");
    cardDivElement.className = "news-card";

    const imageDivElement = document.createElement("img");
    imageDivElement.className = "news-image";

    const publicationDivElement = document.createElement("div");
    publicationDivElement.className = "publication-info";

    const publicationPElement = document.createElement("p");
    publicationPElement.id = "publication-name";

    const publishedPElement = document.createElement("p");
    publishedPElement.id = "published-date";

    const discriptionDivElement = document.createElement("div");
    discriptionDivElement.className = "news-discription";

    const titleH1Element = document.createElement("h1");
    titleH1Element.className = "news-headline";

    const fullNewsDivElement = document.createElement("div");
    fullNewsDivElement.className = "full-news";

    const fullNewsButtonElement = document.createElement("button");
    fullNewsButtonElement.className = "btn-full-news";

    imageDivElement.src = articles[0].urtToImg;
  });
}

// displayNewsData(data.articles);

// description: "If you’re an Apple devotee, there’s a good chance the company’s Messages and FaceTime services are two of the key features that keep you locked into the Cupertino ecosystem. But now, Apple has opened the floodgates just a crack, allowing us to invite anyone t…"
// publishedAt: "2021-08-10T14:00:00Z"
// source: {id: null, name: "Lifehacker.com"}
// title: "How to Finally FaceTime Your Non-Apple Friends"
// url: "https://lifehacker.com/how-to-finally-facetime-your-non-apple-friends-1847450728"
// urlToImage: "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/5f2d7125efb016fd60ef9f83d36f3c83.jpg"
