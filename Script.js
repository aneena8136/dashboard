// function toggleMenu() {
//     const dropdownItems = document.querySelectorAll('.has-dropdown');

//     dropdownItems.forEach(item => {
//       item.addEventListener('click', function() {
//         // Toggle the 'active' class on the clicked item
//         this.classList.toggle('active');
        
//         // If you want only one dropdown open at a time, close others:
//         dropdownItems.forEach(otherItem => {
//           if (otherItem !== this) {
//             otherItem.classList.remove('active');
//           }
//         });
//       });
//     });
//   }
  



// Select all items with the "has-dropdown" class

function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    // Toggle individual dropdowns within the menu
    // const dropdownItems = document.querySelectorAll('.has-dropdown');
    
    // dropdownItems.forEach(item => {
    //   item.addEventListener('click', function() {
    //     this.classList.toggle('active');
        
    //     // Optionally close other dropdowns if needed
    //     dropdownItems.forEach(otherItem => {
    //       if (otherItem !== this) {
    //         otherItem.classList.remove('active');
    //       }
    //     });
    //   });
    // });
  }
  function arrowClick(event) {
    if (event==0)
    {
      const description = document.getElementById('description-0');
      description.style.display = description.style.display === 'block' ? 'none' : 'block';
     }
   if(event==1)
          {
            const description = document.getElementById('description-1');
            description.style.display = description.style.display === 'block' ? 'none' : 'block';
       
          }
   if(event==2)
          {
            const description = document.getElementById('description-2');
            description.style.display = description.style.display === 'block' ? 'none' : 'block';
       
          }

  if(event==3)
          {
            const description = document.getElementById('description-3');
            description.style.display = description.style.display === 'block' ? 'none' : 'block';
       
          }

    if(event==4)
          {
            const description = document.getElementById('description-4');
            description.style.display = description.style.display === 'block' ? 'none' : 'block';
       
          }
 if(event==5)
          {
            const description = document.getElementById('description-5');
            description.style.display = description.style.display === 'block' ? 'none' : 'block';
       
          }

        

  }
     