/*
 Your solution here
 */
document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.getElementById("searchForm");
  const searchTermInput = document.getElementById("searchTerm");

  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const searchTerm = searchTermInput.value.trim();
    if (searchTerm === "") {
      displayError("Please enter a search term");
    } else {
      removeError();
      performSearch(searchTerm.toLowerCase());
    }
  });

  // function for displaying any error messages

  function displayError(message) {
    let errorElement = document.getElementById("searchError");

    if (!errorElement) {
      errorElement = document.createElement("div");
      errorElement.className = "error";
      errorElement.id = "searchError";
      searchForm.appendChild(errorElement);
    }
    errorElement.textContent = message;
  }

  // function to remove error messages
  function removeError() {
    const errorElement = document.getElementById("searchError");
    if (errorElement) {
      errorElement.remove();
    }
  }

  // search function begins by hiding all and removing hidden tag if matching
  function performSearch(searchTerm) {
    const articles = document.querySelectorAll(".article");

    articles.forEach(function (article) {
      article.classList.add("hidden");
    });
    articles.forEach(function (article) {
      const articleTitle = article
        .querySelector("h2")
        .textContent.toLowerCase();

      if (articleTitle.includes(searchTerm)) {
        article.classList.remove("hidden");
      }
    });
  }
});
