const Header = (title, date, temp) => {
   //Instantiate the elements
   const headerDiv = document.createElement('div');
   const dateSpan = document.createElement('span');
   const titleH1 = document.createElement('h1');
   const tempSpan = document.createElement('h1');

   //Set class names, attributes, & text
   headerDiv.classList.add('header');
   dateSpan.classList.add('date');
   dateSpan.textContent = date;
   titleH1.textContent = title;
   tempSpan.classList.add('temp');
   tempSpan.textContent = temp;

   //Create hierarchy
   headerDiv.appendChild(dateSpan);
   headerDiv.appendChild(titleH1);
   headerDiv.appendChild(tempSpan);

   return headerDiv;
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

const headerAppender = (selector) => {
  const newHeader = Header ('Lambda Times', 'January 15th, 2021', '26°');
  document.querySelector(selector).appendChild(newHeader);

  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
