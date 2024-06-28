const blogHeader = document.querySelector('.blog-header');
function getBlogs() {
  const rawBlogs = localStorage.getItem('blogs');
  const blogs = JSON.parse(rawBlogs) || [];
  return blogs;
}



function outputBlogs() {
  const blogs = getBlogs();
  const container = document.querySelector('.container');
  const blogsHeader = document.querySelector('#blogs-header');
  if (blogs.length) {
    blogsHeader.innerText = 'Your Blogs:';
  }

  container.innerHTML = '';
  // Loop over each object in the array and output an article element into our main container for each object
  for (const blogObj of blogs) {
    //Target the main container element
    container.insertAdjacentHTML('beforeend', `
        <article class ="blog">
            <p class="author-input">${blogObj.author}</p>
            <p class="title-input">${blogObj.title}</p>
            <p class="blog-entry">${blogObj.text}</p>
            <p class="blog-date"></p>Added: ${blogObj.date}</p>
        </article>
        `);//articles for every entry stored.
  }
}


outputBlogs();

// Set up any necessary event listeners that should be listening when the page loads


