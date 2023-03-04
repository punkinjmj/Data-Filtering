// SHOW PAGE FUNCTION
function showPage(list, page) {
   // Page Perameters
   const startIndex = (page * 10) - 10;
   const endIndex = page * 10;
   // Other Varibles
   const studentList = document.querySelector(".student-list");
   
   studentList.innerHTML = '';


   for (let i = 1; i < list.length; i++) {

      if (i > startIndex && i < endIndex) {
         const studentItem = `<li class="student-item cf">
         <div class="student-details">
           <img class="avatar" src=${data[i].picture.thumbnail} alt="Profile Picture">
           <h3>${list[i].name.first} ${list[i].name.last}</h3>
           <span class="email">${list[i].email}</span>
         </div>
         <div class="joined-details">
           <span class="date">Joined ${list[i].registered.date}</span>
         </div> 
       </li>`;

       studentList.insertAdjacentHTML("beforeend", studentItem);
       
      }

      
   }

   
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
  const numOfPages = Math.ceil(list.length / 9);

  const linkList = document.querySelector(".link-list");

  linkList.innerHTML = '';

  for (let i = 1; i <= numOfPages; i++) {
    const button = `<li>
    <button type="button">${i}</button>
    </li>`;

    linkList.insertAdjacentHTML("beforeend", button);

  
  }
  
  const activeButton = document.querySelector("button")
  activeButton.className = "active";

  linkList.addEventListener("click", function(e) {
    if(e.target.tagName === "BUTTON") {
      document.querySelector(".active").className = "";
      e.target.className = "active";

      showPage(list, e.target.textContent)
    }
  });
}


// Call functions
showPage(data, 1);
addPagination(data)