const blogHeader = document.querySelector('.blog-header');
function getBlogs() {
  // Pull the old data from the database(localStorage) or an empty array if no previous data has been stored
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
            <p class="author-input>${blogObj.author}</p>
            <p class="title-input>${blogObj.blogTitle}</p>
            <p class="blog-entry">${blogObj.text}</p>
            <p class="blog-date"></p>Added: ${blogObj.dateStr}</p>
        </article>
        `);//articles for every entry stored.
  }
}
function homePage() {
  window.location = "./index.html";
}

document.getElementById('back').addEventListener('click', homePage)
// Set up any necessary event listeners that should be listening when the page loads


