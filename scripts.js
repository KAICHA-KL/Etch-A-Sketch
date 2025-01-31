const container = document.querySelector('.container') // get container 


let gridSize = 10;
const resize = document.querySelector('.Resize');
resize.addEventListener('click',(event)=>{
    cleargrid();
    gridSize = document.getElementById('mynumber').value;
    creategrid();
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

}

creategrid();