// the two things we want to manipulate the dragganle and the container
const draggables = document.querySelectorAll(".draggable");
const containers = document.querySelectorAll(".container");

// now we need to add evenet to the draggable when you drag it.


draggables.forEach(draggable =>{
    
    draggable.addEventListener("dragstart",() =>{
            
          draggable.classList.add("dragging")//we dont got to put the dot here because its class list
    })

    // when we move it it gets the draggable class 
    draggable.addEventListener( "dragend", ()=>{
        draggable.classList.remove("dragging")
    })
})
//drag start dragend and drag over are three distinct events
containers.forEach(container =>{
    container.addEventListener("dragover",e =>{
        e.preventDefault()
    const afterElement = getDragAfterElement(container,e.clientY) // this returns a number that shows us where the element is after we go over a element 
    const draggable = document.querySelector(".dragging")//because we doing one thing we dont do all it matters when we do al and not
    if(afterElement==null){
        container.appendChild(draggable)
    }else{
        container.insertBefore(draggable,afterElement)
    }                   
    })
})

function getDragAfterElement(container,y){
    const draggableElements =  [...container.querySelectorAll(".draggable:not(.dragging)")] // got tp doo it for all the selectors
    
    return draggableElements.reduce((closest,child) =>{
        const box = child.getBoundingClientRect()
        const offset = y - box.top - box.height/2
        if(offset < 0 && offset > closest.offset){
            return{
                offset:offset,
                element:child
            }
        }else{
            return closest
        }

    })

}

