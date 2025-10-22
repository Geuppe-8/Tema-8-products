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
  const images = Array.isArray(p.images) && p.images.length ? p.images : [p.thumbnail];
  let index = 0;

  container.innerHTML = `
    <div class="product-container">
      <div class="product-images">
        <img src="${p.images[0]}" alt="${p.title}" class="main-img">
        <!-- arrows are injected by JS -->
      </div>

      <div class="product-info">
        <h1 class="product-name">${p.title}</h1>
        <p class="subtle">${p.brand} • ${p.category}</p>
        <P class="rating">⭐ ${p.rating} ${reviewCount ? `(${reviewCount} reviews)` : ""}</p>
        <p class="product-price"> ${p.price} USD</p>
        <p class="product-description">${p.description}</p>
        <div class="group">
        <p class="product-stock">${inStock ? "✅ In stock" : "❌ Out of stock"}</p>
        <div class="flex1-1">
        <p class="kurv">Add to cart</p>
        <p class="heart">♡</p>
        </div>
        </div>
        </div>

    </div>
    
    ${
      Array.isArray(p.reviews) && p.reviews.length > 0
        ? `
              <div class="product-reviews">
                <h2>Customer Reviews</h2>
                ${(() => {
                  let reviewsHTML = "";
                  for (let i = 0; i < p.reviews.length; i++) {
                    const r = p.reviews[i];
                    reviewsHTML += `
      <div class="review">
        <p class="review-rating">⭐ ${r.rating}/5</p>
        <p class="review-comment">"${r.comment}"</p>
        <p class="review-name">- ${r.reviewerName}</p>
      </div>
    `;
                  }
                  return reviewsHTML;
                })()}
              </div>
            `
        : "<p class='no-reviews'>No reviews yet.</p>"
    }
  `;

  const mainImg = container.querySelector(".main-img");
  const imageWrapper = container.querySelector(".product-images");
  const thumbs = [...container.querySelectorAll(".thumb")];
  const allImages = Array.isArray(p.images) && p.images.length ? p.images : [p.thumbnail];

  // klik på thumbnails (du laver dem via .slice(1), derfor +1)
  thumbs.forEach((thumb, i) => {
    thumb.addEventListener("click", () => {
      index = (i + 1) % allImages.length;
      mainImg.src = allImages[index];
    });
  });

  // --- gør billeder skiftbare med pile ---
  if (allImages.length > 1) {
    const prevBtn = document.createElement("button");
    prevBtn.className = "gallery-arrow prev";
    prevBtn.textContent = "‹";

    const nextBtn = document.createElement("button");
    nextBtn.className = "gallery-arrow next";
    nextBtn.textContent = "›";

    imageWrapper.appendChild(prevBtn);
    imageWrapper.appendChild(nextBtn);

    function show(i) {
      index = (i + allImages.length) % allImages.length; // wrap rundt
      mainImg.src = allImages[index];
    }

    prevBtn.addEventListener("click", () => show(index - 1));
    nextBtn.addEventListener("click", () => show(index + 1));
  }
}
