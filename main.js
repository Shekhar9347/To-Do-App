var inputField = document.getElementById("input-field");
var listContainer = document.getElementById("list-items");
function addTask(){
  if (inputField.value === "") {
    alert("Please Enter A Task");
  }
  else{
    var li = document.createElement("li");
    li.innerHTML = inputField.value;
    listContainer.appendChild(li);
    var span = document.createElement("span");
    span.innerHTML ="&#9747";
    li.appendChild(span);
  }
  inputField.value = "";
  saveData();
}
listContainer.addEventListener("click",function (e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
  }
  else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
},false);
 
 function saveData(){
   localStorage.setItem("list",listContainer.innerHTML);
 }

function showData() {
  listContainer.innerHTML = localStorage.getItem("list");
}
showData();