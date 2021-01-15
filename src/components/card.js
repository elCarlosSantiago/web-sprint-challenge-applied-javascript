import axios from "axios";

const Card = (article) => {
  //Instantiate the elements
  const cardDiv = document.createElement("div");
  const headlineDiv = document.createElement("div");
  const authorDiv = document.createElement("div");
  const imgContDiv = document.createElement("div");
  const imgAuthor = document.createElement("img");
  const authorSpan = document.createElement("span");

  //Set Class names, attributes, & text 
  cardDiv.classList.add("card");
  headlineDiv.classList.add("headline");
  headlineDiv.textContent = article.headline;
  authorDiv.classList.add("author");
  imgContDiv.classList.add("img-container");
  imgAuthor.src = article.authorPhoto;
  authorSpan.textContent = `By: ${article.authorName}`;

  // create hierarchy
  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(imgContDiv);
  imgContDiv.appendChild(imgAuthor);
  authorDiv.appendChild(authorSpan);

  cardDiv.addEventListener('click', ()=> {
    console.log(article.headline)
  })

  return cardDiv;
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
};

const cardAppender = (selector) => {
  axios
    .get("https://lambda-times-api.herokuapp.com/articles")
    .then((res) => {
      const artObj = res.data.articles;
      const bootArr = artObj.bootstrap;
      const jsArr = artObj.javascript;
      const jqueryArr = artObj.jquery;
      const nodeArr = artObj.node;
      const techArr = artObj.technology;
      jsArr.forEach((item) => {
        let cardyCard = Card(item);
        document.querySelector(selector).appendChild(cardyCard);
      });
      bootArr.forEach((item) => {
        let cardyCard = Card(item);
        document.querySelector(selector).appendChild(cardyCard);
      });
      techArr.forEach((item) => {
        let cardyCard = Card(item);
        document.querySelector(selector).appendChild(cardyCard);
      });
      jqueryArr.forEach((item) => {
        let cardyCard = Card(item);
        document.querySelector(selector).appendChild(cardyCard);
      });
      nodeArr.forEach((item) => {
        let cardyCard = Card(item);
        document.querySelector(selector).appendChild(cardyCard);
      });
    })
    .catch((err) => {
      debugger;
    });

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
};

export { Card, cardAppender };
