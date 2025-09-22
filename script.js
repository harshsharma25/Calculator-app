let container = document.querySelector(".container");
let blankScreen = document.createElement("div");
let equal = document.querySelector(".equal")
blankScreen.className = "blank"
document.body.prepend(blankScreen)
for(let i = 0;i<=9;i++){
   let btn = document.createElement("button");
   btn.className="number";
   btn.textContent = i;
   container.prepend(btn)
}

let operator = ["+","-","*","/"];
operator.forEach((ele)=>{
    // console.log();
    let oper = document.createElement("button");
    oper.className ="operator";
    oper.textContent = ele;
    container.prepend(oper)
})

container.addEventListener("click",(e)=>{
    console.log(e.target.textContent);
    let target = e.target;
    targetChecker(target);

})
function targetChecker(target) {
    let total = blankScreen.textContent += target.textContent;
    if(target.classList.contains("equal")){
        console.log(`equal click`);
        getData(total); 
  }
  else if(target.classList.contains("clear")){
    clear();
  }
  else{
      console.log(`blankscreen = ${blankScreen.textContent}`);
    }

}
function getData(total) {
    console.log(total);
    console.log(typeof total);
blankScreen.textContent = eval(total.slice(0,-1));
}
function clear(params) {
    
    blankScreen.textContent = ""
}

