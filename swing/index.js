//now we need to attack the draggables and the container parts

// so lets make an array with all the elememnents using teh dom
const draggables = document.querySelectorAll(".draggable")
const containers = document.querySelectorAll(".container")// this will give us an array of all the containers

//now we need a way for the draggable stp get in to the next conyainner
//but before that we neeed a way to impolement the dragging class into the draggavles
draggables.forEach(draggable =>{
    draggable.addEventListener("dragstart",()=>{
        draggable.classList.add("dragging")
    }) //we making an event for when you start to drag and when you release it

    draggable.addEventListener("dragend",()=>{
        draggable.classList.remove("dragging")
    }) // so if you stop dragging the class dragging will remove itself

})
containers.forEach(container =>{
    container.addEventListener("dragover",e =>{
        e.preventDefault()
        const afterElement = dragAfterElement(container,e.clientY)//this is where we are gpoing to put it 
        const draggable = document.querySelector(".dragging")
        if(afterElement == null){
            container.appendChild(draggable)
        }else{
            container.insertBefore(draggable,afterElement)
        }
        //
    })
})
// now we need an event for the container if the class dragging is over we want to append it but only if its after the element which comes from a dfucntion we will make that will be based of the offset and gthe bounding client 
function dragAfterElement(container,y){
    const draggableElements = [...container.querySelectorAll(".draggable:not(.dragging)")] 
    return draggableElements.reduce((closest,child)=>{
        const box = child.getBoundingClientRect()
        const offset = y - box.top - box.height/2
        if(offset < 0 && closest.offset){
            return{
                offset:offset,
                element:child
            }
        }else{
            return closest
        }
    },{offset: Number.negative_infinity}).element

}

// we need that last part to get it to work properly the oofset number.negatibe_infiiny. with the elemenetall has to be a part of the function