/*
 Your solution here
 */
 document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
  
    if (!searchForm) {
      console.error('Search form not found!');
      return;
    }
  
    let searchError = document.getElementById('searchError');
  
    if (!searchError) {
      console.error('Search error element not found!');
      return;
    }
  
    searchForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const searchTerm = document.getElementById('searchTerm').value.trim();
      const articles = document.querySelectorAll('.articles article');
  
      // Clear previous error messages
      if (!searchError) {
        searchError = document.createElement('div');
        searchError.id = 'searchError';
        searchError.classList.add('error');
        searchForm.appendChild(searchError);
      } else {
        searchError.textContent = '';
      }
  
      if (searchTerm === '' || /^\s*$/.test(searchTerm)) {
        const errorDiv = document.createElement('div');
        errorDiv.textContent = 'Please enter a search term';
        searchError.appendChild(errorDiv);
        return;
      }
  
      // Remove any existing error messages
      searchError.innerHTML = '';
  
      // Rest of the search functionality remains the same
    });
  });
  