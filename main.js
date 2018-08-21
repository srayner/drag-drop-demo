const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

// Loop through empties
for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}
// Drap functions
function dragStart() {
  console.log("start");
  this.className += " hold";
  setTimeout(() => (this.className = "invisible"), 0);
}

function dragEnd() {
  console.log("end");
  this.className = "fill";
}

function dragOver(e) {
  e.preventDefault();
  console.log("over");
}

function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
  console.log("enter");
}

function dragLeave(e) {
  this.className = "empty";
  console.log("leave");
}

function dragDrop(e) {
  this.className = "empty";
  this.append(fill);
  console.log("drop");
}
