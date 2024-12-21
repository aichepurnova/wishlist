function randomPosition() {
  return {
    left: Math.random() * 100 + "vw",
    top: Math.random() * 100 + "vh",
  };
}

// Function to create and animate a blinking PNG
function createBlinkingPNG() {
  const png = document.createElement("div");
  png.classList.add("png");

  // Set random position
  const { left, top } = randomPosition();
  png.style.left = left;
  png.style.top = top;

  // Append to the body
  document.body.appendChild(png);

  // Randomly blink
  setInterval(() => {
    png.style.opacity = Math.random() > 0.5 ? "0" : "1";
  }, Math.random() * 2000 + 500); // Random blink interval

  // Remove PNG after 10 seconds
  setTimeout(() => png.remove(), 10000);
}

const buttons = document.querySelectorAll(".cell");
const container = document.querySelector(".box");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("yes")) {
      window.open(
        "https://am.ozon.com/product/davinci-ukulele-vins-10-siniy-4-strunnaya-korpus-lipa-233028391/?asb=THzjmagzkgOwwYvGP23099g%252BhGLMwf4VIHyMjvte%252Bu4%253D&asb2=uS7Rb3QBOYkoL0It0OssS-InC4lb6HhTlWhYKojgdySznscZhtt7Z0LL2Uhl40A0AVHsrwWKAF5V-Ar9c25mjg&avtc=1&avte=4&avts=1734807952&keywords=%D1%83%D0%BA%D1%83%D0%BB%D0%B5%D0%BB%D0%B5",
        "_blank"
      );
    } else {
      popup.style.display = "block";
      setInterval(() => {
        popup.style.display = "none";
      }, 3000);
    }
  });
});

const closePopupButton = document.getElementById("close-popup");
closePopupButton.addEventListener("click", () => {
  popup.style.display = "none";
});

buttons.forEach((button) => {
  button.addEventListener("mouseover", () => {
    if (button.classList.contains("no")) {
      const offsetX = (Math.random() * 50 - 1.5).toFixed(2); // Random value between -1.5 and 1.5
      const offsetY = (Math.random() * 50 - 1.5).toFixed(2); // Random value between -1.5 and 1.5

      // Apply the subtle movement using CSS transform
      button.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    }

    button.addEventListener("mouseleave", () => {
      if (button.classList.contains("no")) {
        // Reset the position when the mouse leaves
        button.style.transform = "translate(0, 0)";
      }
    });
  });
});

// Generate PNGs at intervals
setInterval(createBlinkingPNG, 500);
