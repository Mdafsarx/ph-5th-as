const getId=(id)=>{

const element=document.getElementById(id);
return element;

};

function getClass(Class){
  const element=document.getElementsByClassName(Class);
  return element;
}

// parsInt value giver
function getInnerText(id){

const value=getId(id).innerText;
return parseInt(value);

};


function setInnerText(id,value){

getId(id).innerText=value

}


function setBackgroundColor(element){
    element.classList.add('bg-[#1DD100]')
}

