setInterval(loadingDots, 500);

function loadingDots() {
  const title = document.querySelector("#title");
  if (title.textContent === "Testing") {
    title.textContent = "Testing.";
  } else if (title.textContent === "Testing.") {
    title.textContent = "Testing..";
  } else if (title.textContent === "Testing..") {
    title.textContent = "Testing...";
  } else if (title.textContent === "Testing...") {
    title.textContent = "Testing";
  }
}