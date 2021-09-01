//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

// window.addEventListener('DOMContentLoaded', (event) => {

//   interact('.newsdiv')
//     .resizable({
//       edges: { top: true, left: true, bottom: true, right: true },
//       listeners: {
//         move: function (event) {
//           let { x, y } = event.target.dataset

//           x = (parseFloat(x) || 0) + event.deltaRect.left
//           y = (parseFloat(y) || 0) + event.deltaRect.top

//           Object.assign(event.target.style, {
//             width: `${event.rect.width}px`,
//             height: `${event.rect.height}px`,
//             transform: `translate(${x}px, ${y}px)`
//           })

//           Object.assign(event.target.dataset, { x, y })
//         }
//       }
//     })

// });
