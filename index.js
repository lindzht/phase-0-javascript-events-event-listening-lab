

function addingEventListener() {
    const input = document.getElementById("button")
    function clickAlert(){
        alert(`I was clicked!`);
    }
    input.addEventListener("click", clickAlert);

}

addingEventListener();





// const body = document.querySelector("body");
// const fifthChild = body.children[4];
// const four = fifthChild.getElementsByTagName("div")[2];

// four.addEventListener("click", clickAlert);

// const deepestDivChild = document.querySelector("div div div div div")



// const deepestDivChild = document.getElementsByTagName("div")[5];
// deepestDivChild.addEventListener("click", clickAlert);

// main.addEventListener("click", clickAlert);
