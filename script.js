 document.addEventListener('DOMContentLoaded', () => {
      const searchInput = document.querySelector('input[type="text"]');
      searchInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
          const query = searchInput.value.trim();
          if (query) {
            alert(`Searching for restaurants near: "${query}"`);
          } else {
            alert('Please enter a location or restaurant name to search.');
          }
        }
      });
    });