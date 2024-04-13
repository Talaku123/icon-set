



function show_list() {

  let courses = document.getElementById("courses_id");

  if (courses.style.display == "block") {

      courses.style.display = "none";

      courses.style.toggle ='3'
      
  } else {
      courses.style.display = "block";
  }
}

window.onclick = function (event) {
  
  if (!event.target.matches('.dropdown_button')) {

      document.getElementById('courses_id')

          .style.display = "none";
  }
  
}    

