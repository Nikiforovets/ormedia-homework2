var inputData = document.querySelector("input[type='text']");
var ulList = document.querySelector("ul");
var spans = document.getElementsByClassName("delete");
var saveBtn = document.getElementById("save");
var clearBtn = document.getElementById("clear");
var infoBtn = document.getElementById("info");
var liElements = document.getElementsByTagName("li");

function loadTodo(){
    if(localStorage.getItem("TodoApplication")){
        ulList.innerHTML = localStorage.getItem("TodoApplication");
    }
    addDeleteEventTodo();
}

function addDeleteEventTodo(){
    for(let span of spans){
        span.addEventListener("click", function(){
            span.parentElement.remove();
            event.stopPropagation();
        })
    }
}

function addCompleteEvent(){
    ulList.addEventListener("click", function(){
        if(event.target.classList.contains("todo"))
        event.target.classList.toggle("completed");
    });
}

inputData.addEventListener("keypress", function(keyPressed){
    if(keyPressed.which === 13 && this.value!=""){//13-enter
        var newLi = document.createElement("li");
        var newSpan = document.createElement("span");
        var newTodo = document.createElement("span");
        var newTime = document.createElement("div");

        newTime.className = "time";

        newSpan.className = "delete";
        newSpan.innerHTML = "Удалить ";

        newTodo.className = "todo";
        newTodo.innerHTML = this.value;
        this.value = "";

        var date = new Date;
        date = date.getUTCDate() + ":" + Number(date.getUTCMonth() + 1) + ":" + date.getFullYear();
        newTime.innerHTML = date;

        ulList.appendChild(newLi).append(newSpan, newTodo, newTime);

        addDeleteEventTodo();  
        //addCompleteEvent();
    }
});

saveBtn.addEventListener("click", function(){
    localStorage.setItem("TodoApplication", ulList.innerHTML);
});

clearBtn.addEventListener("click", function(){
    ulList.innerHTML = "";
    localStorage.setItem("TodoApplication", ulList.innerHTML);
});

infoBtn.addEventListener("click",function(){
    alert("Разработчик: Никифоровец Максим Андреевич");
})

addDeleteEventTodo();
addCompleteEvent();
loadTodo();