// first what are we tryna drag
const draggables = document.querySelectorAll(".draggable");
const containers= document.querySelectorAll(".container");

// add events for when you seleect

draggables.forEach(draggable =>{
    draggable.addEventListener("dragstart",()=>{
        draggable.classList.add("dragging")
    })

    draggable.addEventListener("dragend",()=>{
        draggable.classList.remove("dragging")
    })
})


containers.forEach(container =>{
    container.addEventListener("dragover",e =>{
        e.preventDefault()
        const afterElement = getDragAfterElement(container,e.clientY)
        const draggable = document.querySelector(".dragging")
        if(afterElement == null){
            container.appendChild(draggable)
        }else{
            container.insertBefore(draggable,afterElement)
        }

    })
})


// in the get drag elemenet we make the copy of all the draggable elements
// this is where we make the copy and and dp the bo for the 
function getDragAfterElement(container,y){
    const draggableElement = [...container.querySelectorAll(".draggable:not(.dragging)")]

    draggableElement.reduce((closest,child) =>{
            const box = child.getBoundingClientRect() // we got to make our box
            const offset = y - box.top - box.height/2

            if(offset < 0 && offset  > closest.offset){
                return{
                    offset:offset,
                    element:child
                }
            }else{
              return  closest
            } // the offset is how we see where ae are relativeley
    }) // this is the other part pg the reduce 
,{offset:Number.POSITIVE_INFINITY}}