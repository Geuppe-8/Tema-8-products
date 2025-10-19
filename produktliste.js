console.log("page loaded...");

const allowedCategories = ["beauty", "accessories", "home-decoration", "skin-care", "sunglasses", "tops", "womens-bags", "womens-dresses", "womens-jewellery", "womens-shoes", "womens-watches", "fragrances"];
let allData = [];
const productcontainer = document.querySelector(".product-container");

// Her henter vi produkterne fra de kategorier vi har valgt

function getData() {
  for (let i = 0; i < allowedCategories.length; i++) {
    const category = allowedCategories[i];
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        allData = allData.concat(data.products);
        showProducts(allData);
      });
  }
}

// her laver vi knapper til vores filter

document.querySelectorAll(".buttons button").forEach((btn) => {
  btn.addEventListener("click", clickButton);
});

function clickButton(evt) {
  const chosenCategory = evt.currentTarget.dataset.category;
  showFilter(chosenCategory);
}

// Her Filtrére produkterne ud fra vores valgte kategori

function showFilter(filter) {
  if (filter === "All") {
    showProducts(allData);
    console.log("Viser alle produkter");
  } else {
    const filteredData = allData.filter(function (product) {
      return product.category === filter;
    });
    showProducts(filteredData);
    console.log("Viser kun:", filter);
  }
}

// Her viser vi så produkterne produkterne

function showProducts(products) {
  productcontainer.innerHTML = "";

  products.forEach(function (product) {
    productcontainer.innerHTML += `
      <article class="card">
        <a href="produkt.html?id=${product.id}">
          <div class="imageContainer">
            <img src="${product.thumbnail}" alt="${product.title}" />
          </div>
          <h2>${product.title}</h2>
          <h3>${product.price} USD</h3>
          <p>${product.brand}</p>
          <p>${product.category}</p>
          <p>Read more</p>
        </a>
      </article>`;
  });
}

getData();
