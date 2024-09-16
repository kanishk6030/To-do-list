const input = document.querySelector("#additem");
const button = document.querySelector("#add");
const listContainer = document.querySelector(".list-container");

function addTask(){
    if(input.value === ''){
        alert("You must write something ");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        
        let span = document.createElement('span');
        span.innerHTML = "&#10006";
        li.appendChild(span);

        span.addEventListener("click",removeTask);
    }
    input.value = "";
    save();
}
function removeTask(event) {
    const li = event.target.parentElement; // Get the parent <li> of the clicked <span>
    li.remove(); // Remove the <li>
    save(); 
}

button.addEventListener('click',()=>{
    addTask();
})

//Saving the data 
function save(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function show(){
    listContainer.innerHTML = localStorage.getItem("data");
}
show();
