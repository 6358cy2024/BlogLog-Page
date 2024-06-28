const blogForm = document.querySelector('#blog-form');

// A function that is is called when the form is submitted
function createBlog(eventObj) {
  eventObj.preventDefault();
  // Grab the input element
  const blogAuthorName = document.querySelector('#author-input');
  const blogTitleName = document.querySelector('#title-input');
  const blogInput = document.querySelector('#blog-entry');
  // Get the value(what they typed into the box)
  const blogAuthor = blogAuthorName.value;
  const blogTitle = blogTitleName.value;
  const blogText = blogInput.value;
  // Create a date value object
  const dateObj = new Date(); // {}

  const month = dateObj.getMonth() + 1;

  const date = dateObj.getDate();

  const year = dateObj.getFullYear();

  const objHours = dateObj.getHours();

  const hour = objHours > 12 ? objHours - 12 : objHours;
  // If the dateObj minutes is < 10, then add a 0
  const objMin = dateObj.getMinutes();
  const minutes = objMin < 10 ? '0' + objMin : objMin;
  //without this line, it would just be 2:7. for example
  // const dateStr = month + '/' + date + '/' + year Time;

  const dateStr = `${month}/${date}/${year} ${hour}:${minutes}`;
  const blogObj = {
    author: blogAuthor,
    title: blogTitle,
    text: blogText,
    date: dateStr
  };

  const blogs = JSON.parse(localStorage.getItem('blogs')) || [];

  blogs.push(blogObj);
  const jsonArray = JSON.stringify(blogs);
  localStorage.setItem('blogs', jsonArray);
  window.location = "./blog.html";
}


blogForm.addEventListener('submit', createBlog);
