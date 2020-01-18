var inputData = document.querySelector("input[type='text']");
var ulList = document.querySelector("ul");
var spans = document.getElementsByTagName("span");
var saveBtn = document.getElementById("save");
var clearBtn = document.getElementById("clear");
var infoBtn = document.getElementById("info");
var liElements = document.getElementsByTagName("li");

function loadTodo(){
    if(localStorage.getItem("TodoApplication")){
        ulList.innerHTML = localStorage.getItem("TodoApplication");
    }
    addDeleteEventTodo();
    addCompleteEvent();
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
    for(let li of liElements){
        li.addEventListener("click", function(){
            if(li.className == "completed"){
                li.className = "";
            }
            else{
                li.className = "completed";
            }
            event.stopPropagation();   
        })
    }
}

inputData.addEventListener("keypress", function(keyPressed){
    if(keyPressed.which === 13 && this.value!=""){//13-enter
        var newLi = document.createElement("li");
        var newSpan = document.createElement("span");
        var newTime = document.createElement("div");
        newTime.className = "time";

        newSpan.innerHTML = "Удалить ";

        var newTodo = this.value;
        this.value = "";

        var date = new Date;
        date = date.getUTCDate() + ":" + Number(date.getUTCMonth() + 1) + ":" + date.getFullYear();
        newTime.innerHTML = date;

        ulList.appendChild(newLi).append(newSpan, newTodo, newTime);

        addDeleteEventTodo();  
        addCompleteEvent();
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