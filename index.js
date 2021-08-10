const title = document.querySelector("#title");
const noOfPages = document.querySelector(".noOfPages");
const img = document.querySelector(".img");

const fetchData = () => {
  fetch(
    "https://openlibrary.org/api/books?bibkeys=ISBN:9780980200447&jscmd=data&format=json"
  )
    .then((response) => response.json())
    .then((data) => {
      title.innerHTML = data["ISBN:9780980200447"].title;
      noOfPages.innerHTML = data["ISBN:9780980200447"].number_of_pages;
      img.src = data["ISBN:9780980200447"].cover.small;
    })
    .catch((error) => {});
};

fetchData();
