const blogForm = document.querySelector('#blog-form');
const blogHeader = document.querySelector('.blog-header');

// A function that is is called when the form is submitted
function createBlog(eventObj) {
    eventObj.preventDefault();
    // Grab the input element
    const blogInput = document.querySelector('#blog-input');
    // Get the value(what they typed into the box)
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
      text: blogText,
      date: dateStr
    };

    const blogs = getBlogs();
  
    blogs.push(blogObj);
    const jsonArray = JSON.stringify(blogs);
    localStorage.setItem('blogs', jsonArray);
    blogInput.value = '';
    outputBlogs();
    window.location = "./blog.html"

}


blogForm.addEventListener('submit', createBlog);