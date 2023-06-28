var heading=document.createElement("h1");
heading.innerHTML="calculator"
heading.style.textAlign="center"
heading.style.fontSize="50px"
heading.style.color='white'
heading.style.width='100%'
heading.style.height='70px'
heading.style.background='black'
heading.style.fontWeight='bolder'
heading.style.display='flex';
heading.style.justifyContent='center'
heading.style.alignItems='center'


var container=document.createElement("div")
container.className = "container";

var calculator=document.createElement("div")
calculator.className = "calculator";

var input=document.createElement("input")
input.setAttribute("id", "calculate");
input.setAttribute("type","text")
input.setAttribute("placeholder",'0')
input.classList.add('form-control')

// --------------------

var buttondel=document.createElement('button')
buttondel.innerHTML = "DELETE";
buttondel.addEventListener('click',del);
buttondel.classList.add("btn","btn-danger","del")


var buttonm=document.createElement('button')
buttonm.innerHTML = "%";
buttonm.addEventListener('click',()=>random("%"));
buttonm.classList.add("btn","btn-warning","rounded-circle")


var buttondot=document.createElement('button')
buttondot.innerHTML = ".";
buttondot.style.fontSize='20px'
buttondot.style.padding='5px'
buttondot.addEventListener('click',()=>random("."));
buttondot.classList.add("btn","btn-primary","rounded-circle")



// ------------------------

var button1=document.createElement('button')
button1.innerHTML = "7";
button1.addEventListener('click',()=>random("7"));
button1.classList.add("btn","btn-dark","rounded-circle")

var button2=document.createElement('button')
button2.innerHTML = "8";
button2.addEventListener('click',()=>random("8"));
button2.classList.add("btn","btn-dark","rounded-circle")

var button3=document.createElement('button')
button3.innerHTML = "9";
button3.addEventListener('click',()=>random("9"));
button3.classList.add("btn","btn-dark","rounded-circle")

var button4=document.createElement('button')
button4.innerHTML = "+";
button4.addEventListener('click',()=>random("+"));
button4.classList.add("btn","btn-warning","rounded-circle")

// -----------------------------

var button5=document.createElement('button')
button5.innerHTML = "4";
button5.addEventListener('click',()=>random("4"));
button5.classList.add("btn","btn-dark","rounded-circle")

var button6=document.createElement('button')
button6.innerHTML = "5";
button6.addEventListener('click',()=>random("5"));
button6.classList.add("btn","btn-dark","rounded-circle")


var button7 =document.createElement('button')
button7.innerHTML = "6";
button7.addEventListener('click',()=>random("6"));
button7.classList.add("btn","btn-dark","rounded-circle")

var button8 =document.createElement('button')
button8.innerHTML = "-";
button8.addEventListener('click',()=>random("-"));
button8.classList.add("btn","btn-warning","rounded-circle")

// ---------------

var button9=document.createElement('button')
button9.innerHTML = "1";
button9.addEventListener('click',()=>random("1"));
button9.classList.add("btn","btn-dark","rounded-circle")

var button10=document.createElement('button')
button10.innerHTML = "2";
button10.addEventListener('click',()=>random("2"));
button10.classList.add("btn","btn-dark","rounded-circle")

var button11=document.createElement('button')
button11.innerHTML = "3";
button11.addEventListener('click',()=>random("3"));
button11.classList.add("btn","btn-dark","rounded-circle")


var button12=document.createElement('button')
button12.innerHTML = "*";
button12.addEventListener('click',()=>random("*"));
button12.classList.add("btn","btn-warning","rounded-circle")

// ------

var button13=document.createElement('button')
button13.innerHTML = "CLR";
button13.style.padding="5px"
button13.addEventListener("click",clear);
button13.classList.add("btn","btn-danger","rounded-circle")



var button14=document.createElement('button') 
button14.innerHTML = "0";
button14.addEventListener('click',()=>random("0"));
button14.classList.add("btn","btn-dark","rounded-circle")

var button15=document.createElement('button')
button15.innerHTML = "=";
button15.addEventListener('click',answer);
button15.classList.add("btn","btn-success","rounded-circle",'equal')

var button16=document.createElement('button')
button16.innerHTML = "/";
button16.addEventListener('click',()=>random("/"));
button16.classList.add("btn","btn-warning","rounded-circle")


calculator.append(input,buttondel,buttondot,buttonm,button1,button2,button3,
    button4,button5,button6,button7,button8, button9,button10,button11,
    button12,button13,button14,button15,button16)
container.append(calculator)

document.body.append(heading,container);


let res=document.getElementById("calculate")

function clear(){
   res.value=""
}

function Delete(){
    console.log("dinesh")
}



function random(data){
    res.value+=data
}

function answer(){
    try{
        res.value=eval(res.value)
    }
    catch(error){
    alert("Invalid Charcter")
}
}

function del(){
    res.value=res.value.slice(0,-1)
}



