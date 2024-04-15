/*
 Your solution here
 */
document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.getElementById("searchForm");
  const searchTermInput = document.getElementById("searchTerm");

  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const searchTerm = searchTermInput.value.trim().toLowerCase()
    if (searchTerm === "") {
      displayError("Please enter a search term");
    } else {
      removeError();
      performSearch(searchTerm.toLowerCase());
    }
  })

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


  function performSearch(searchTerm) {
    const articles = document.querySelectorAll(".article");
    articles.forEach(function (article) {
      const articleTitle = article.querySelector("h2").textContent.toLowerCase();
      const isVisible = article.classList.contains("hidden");

      if (articleTitle.includes(searchTerm)) {
        article.classList.remove("hidden");
      } else {
        article.classList.add("hidden")
      }
    })
  }
})
  