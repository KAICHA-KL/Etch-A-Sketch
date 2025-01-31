const container = document.querySelector('.container') // get container 


let gridSize = 10;
const resize = document.querySelector('.Resize');
resize.addEventListener('click',(event)=>{
    cleargrid();                                       //First clears existing gird from DOM
    gridSize = document.getElementById('mynumber').value;
    creategrid();                                      //Creates the new grid
    
});

const resetGridcolor = document.querySelector('.clear');
resetGridcolor.addEventListener('click',(event)=>{
     const removeColor = document.querySelectorAll('.gridChild');
      removeColor.forEach(div => {div.style.backgroundColor = 'aliceblue'});
});

function cleargrid() {

    for(let k=0;k<gridSize;k++)
        {
            const removerow = document.querySelectorAll('.gridRow'); 
            removerow.forEach(div => {div.remove()});
        } 

}


function creategrid() {
for(let i=0;i<gridSize;i++)
    {
        const divrow = document.createElement('div');
        divrow.className ='gridRow';
        container.appendChild(divrow);
    for(let j=0;j<gridSize;j++)
        {
    const div = document.createElement('div');
    div.className ='gridChild';
    divrow.appendChild(div);
        }
    } 


    let hoverItem = document.querySelectorAll('.gridChild');
hoverItem.forEach(div=>{
    div.addEventListener("mouseover",(event)=>{
        div.style.backgroundColor = '#e2ee41';
    });
});

}


creategrid();

