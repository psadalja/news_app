let queryString = window.location.search.substring(1);

function getData() {
  fetch(
    `https://newsapi.org/v2/everything?q=${
      queryString ? queryString : "all"
    }&apiKey=f5c42128d0eb4110a85fac07e72da4b2`
  )
    .then((res) => res.json())
    .then((data) => displayNewsData(data.articles));
}

function displayNewsData(articles) {
  articles.forEach((element) => {
    const cardDivElement = document.createElement("div");
    cardDivElement.className = "news-card";

    const imageElement = document.createElement("img");
    imageElement.className = "news-image";

    const publicationDivElement = document.createElement("div");
    publicationDivElement.className = "publication-info";

    const publicationNameElement = document.createElement("p");
    publicationNameElement.id = "publication-name";

    const publicationDateElement = document.createElement("p");
    publicationDateElement.id = "published-date";

    const descriptionDivElement = document.createElement("div");
    descriptionDivElement.className = "news-discription";

    const titleH1Element = document.createElement("h1");
    titleH1Element.className = "news-headline";

    const descriptionElement = document.createElement("p");
    descriptionElement.className = "description";

    cardDivElement.addEventListener("click", function () {
      window.open(element.url, "_blank");
    });

    imageElement.src = element.urlToImage;
    publicationDateElement.textContent = element.publishedAt;
    publicationNameElement.textContent = element.source.name;
    titleH1Element.textContent = element.title;
    descriptionElement.textContent = element.description;

    publicationDivElement.append(
      publicationDateElement,
      publicationNameElement
    );
    descriptionDivElement.append(
      publicationDivElement,
      titleH1Element,
      descriptionElement
    );
    cardDivElement.append(imageElement, descriptionDivElement);
    document.querySelector(".news-container").append(cardDivElement);
  });
}
