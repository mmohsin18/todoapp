const inputBox = document.getElementById("input-box")
const listcont = document.getElementById("list")

function addTask(){
    if(inputBox.value === ''){
        // Add your CSS styles for the popup
        var popup = document.createElement("div");
        popup.className = "popup";
        popup.textContent = "You must write something!!";
        document.body.appendChild(popup);

        // Remove the popup after a certain time (e.g., 3 seconds)
        setTimeout(function () {
          document.body.removeChild(popup);
        }, 2000);
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcont.appendChild(li);
        let span = document.createElement('span')
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = ''
    saveData();
}

listcont.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData(){
    localStorage.setItem("data", listcont.innerHTML);
}

function showTask(){
    listcont.innerHTML = localStorage.getItem("data");
}

showTask();