const container = document.querySelector('.container') // get container 



// RESET GRID SIZE 

let gridSize = 10;
const resize = document.querySelector('.Resize');
resize.addEventListener('click',(event)=>{
    cleargrid();                                       //First clears existing gird from DOM
    gridSize = document.getElementById('mynumber').value;
    creategrid();                                      //Creates the new grid
    
});

// RESET GRID COLOR

const resetGridcolor = document.querySelector('.clear');
resetGridcolor.addEventListener('click',(event)=>{
     const removeColor = document.querySelectorAll('.gridChild');
      removeColor.forEach(div => {div.style.backgroundColor = 'aliceblue',div.style.opacity ='1'});
});


// FUNCTION TO CLEAR THE GRID 

function cleargrid() { 

    for(let k=0;k<gridSize;k++)
        {
            const removerow = document.querySelectorAll('.gridRow'); 
            removerow.forEach(div => {div.remove()});
        } 

}

// FUNCTION TO CREATE THE GRID 

function creategrid() {
    if ( gridSize > 100 ) {
        gridSize = 100;
    }  

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

// HOVERFEATURE
    let hoverItem = document.querySelectorAll('.gridChild');
hoverItem.forEach(div=>{
    let currentOpacity = 0.2;
    div.addEventListener("mouseover",(event)=>{
        currentOpacity += 0.2;
        div.style.backgroundColor = '#e2ee41';
        div.style.opacity = currentOpacity;
    });
});

}

//TO RUN BY DEFAULT TO HAVE GRID ON SCREEN BEFORE USER INPUT

creategrid();

