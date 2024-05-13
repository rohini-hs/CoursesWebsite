window.onload = function(){

    populateCourseDetails();
}

function populateCourseDetails()
{
    // location.search returns the query string part of the URL
    const urlParams = new URLSearchParams(location.search);

    //Once you have the query string, you need to get the value of a specific query string parameter. To do this, use get() to look inside urlParams.   Make sure the query string parameter is there first!
    let cid = -1;
    if (urlParams.has("cid") === true)
    {
       cid = urlParams.get("cid")
       // call a method that fetches this course
       getCourse(cid);
    }
    
}
function getCourse(cid) {
    fetch('http://localhost:8081/api/courses/' + cid)
     .then(response => response.json())
     .then(course => {
        // this returns a single course!
        const container = 
           document.getElementById('courseDetailsID');
  
        // display one course property in a <p>
        const deptP = document.createElement('p');
        deptP.textContent = `Name: ${course.dept}`;
        container.appendChild(deptP);
    
        // repeat for each field you want to display
        const courseNum = document.createElement('p');
        courseNum.textContent = `Couse Number: ${course.courseNum}`;
        container.appendChild(courseNum);

          // repeat for each field you want to display
          const instructor = document.createElement('p');
          instructor.textContent = `instructor: ${course.instructor}`;
          container.appendChild(instructor);
  

      })
      .catch(error => {
        // handle errors that occurred during the fetch request
        console.log(error)
      });
  
  
    }