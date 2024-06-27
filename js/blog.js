
function getBlogs() {
  // Pull the old data from the database(localStorage) or an empty array if no previous data has been stored
  const rawBlogs = localStorage.getItem('blogs');
  const blogs = JSON.parse(rawBlogs) || [];

  return blogs;
}



function outputBlogs() {
  const blogs = getBlogs();
  const container = document.querySelector('.container');
  const blogsHeader = document.querySelector('.blogs-header');
  if (blogs.length) {
    blogHeader.innerText = 'Your Blogs:';
  }

  container.innerHTML = '';
  // Loop over each object in the array and output an article element into our main container for each object
  for (const blogObj of blogs) {
    //Target the main container element
    container.insertAdjacentHTML('beforeend', `
        <article class ="blog">
            <p class="blog-text">${blogObj.text}</p>
            <p class="blog-date"></p>Added: ${blogObj.date}</p>
        </article>
        `);//articles for every entry stored.
  }
}

outputBlogs();


// Set up any necessary event listeners that should be listening when the page loads


