const params = new URLSearchParams(window.location.search);
const id = params.get("id");

//så der ikke konstant skrives document.querySelector
const $ = (sel) => document.querySelector(sel);

//Det er vores container med produktet
const container = $(".produkt");

if (!id) {
  document.querySelector(".produkt").textContent = "No product id in URL.";
} else {
  fetch(`https://dummyjson.com/products/${id}`)
    .then((r) => r.json())
    .then(renderProduct)
    .catch(() => {
      document.querySelector(".produkt").textContent = "Could not load product.";
    });
}

function renderProduct(p) {
  const inStock = (p.stock ?? 0) > 0;
  const reviewCount = Array.isArray(p.reviews) ? p.reviews.length : null;

  container.innerHTML = `
    <div class="product-container">
      <div class="product-images">
        <img src="${p.images[0]}" alt="${p.title}" class="main-img">
        <div class="images">
          ${p.images
            .slice(1)
            .map((img, i) => `<img src="${img}" alt="${p.title} image ${i + 2}" class="thumb">`)
            .join("")}
        </div>
      </div>

      <div class="product-info">
        <h1 class="product-name">${p.title}</h1>
        <p>${p.brand} • ${p.category}</p>
        <p class="product-rating">⭐ ${p.rating} ${reviewCount ? `(${reviewCount} reviews)` : ""}</p>
        <p class="product-price"> $${p.price}</p>
        <p class="product-description">${p.description}</p>
        <p class="product-stock">${inStock ? "✅ In stock" : "❌ Out of stock"}</p>
      </div>
    </div>
    
    ${
      Array.isArray(p.reviews) && p.reviews.length > 0
        ? `
              <div class="product-reviews">
                <h2>Customer Reviews</h2>
                ${p.reviews
                  .map(
                    (r) => `
                      <div class="review">
                        <p class="review-rating">⭐ ${r.rating}/5</p>
                        <p class="review-comment">"${r.comment}"</p>
                        <p class="review-name">- ${r.reviewerName}</p>
                      </div>
                    `
                  )
                  .join("")}
              </div>
            `
        : "<p class='no-reviews'>No reviews yet.</p>"
    }
  `;

  // Fra thumnail billede til main billede
  const mainImage = container.querySelector(".main-image");
  const thumbs = container.querySelectorAll(".thumb");
  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      mainImage.src = thumb.src;
    });
  });
}
