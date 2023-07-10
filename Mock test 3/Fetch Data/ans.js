const dataContainer = document.getElementById('data-container');

// Fetch data from JSONPlaceholder API
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    // Remove skeleton loader
    while (dataContainer.firstChild) {
      dataContainer.removeChild(dataContainer.firstChild);
    }

    // Display fetched data
    data.forEach(item => {
      const newPost = document.createElement('div');
      newPost.textContent = item.title;
      dataContainer.appendChild(newPost);
    });
  })
  .catch(error => console.log(error));
