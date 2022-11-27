// first we need a way to access the containers and the draggable parts
 const draggables = document.querySelectorAll('.draggable');
 const containers = document.querySelectorAll('.container');

 // now for each draggable we need the event of dragging to chang the class of the current draggble if its being or not being dragged.
    draggables.forEach(draggable=>{
        // this is for if we start dragging
        draggable.addEventListener("dragstart",() =>{
            draggable.classList.add("dragging")
        })
        // this is for when we stop dragging we remove the dragging clss fromm the elemengt thag had the dragstart and lost it
        draggable.addEventListener("dragend",()=>{
            draggable.classList.remove("dragging")
        })
    })

    // now we have a way to change the clss when we start to drag or not now we need to go to the container and 

    containers.forEach( container =>{
        container.addEventListener("dragover",e =>{
            e.preventDefault()
            const afterElement = getDragAfterElement(container,e.clientY) // after element is a position
            
            console.log(afterElement)

            const draggable = document.querySelector(".dragging") // this would be the one element getting dragged

            if(afterElement == null){
                container.appendChild(draggable)
            }else{
                container.insertBefore(draggable,afterElement)
            }
            //now we make after element to determine in the insert berfore where we will pu tt the element 
        })
    } )// for each container make a for each and and event listern to listen for a dragover event and we got to use prevent default



    //function getdragafterelement
    function getDragAfterElement(container,y){

        const draggableElements = [...container.querySelectorAll(".draggable:not(dragging)")] // we are making a coopy of the array but with not with tghe elements we are dtraggging
return draggableElements.reduce((closest,child) =>{
    const box = child.getBoundingClientRect() //getboundingclientrec
    const offset = y - box.top -box.height/2
    console.log(box)

    if(offset < 0 && offset > closest.offset){
        return{
            offset:offset,
            element:child
        }}
        else
        {
            return closest
        }
    }
    ,
    {offest:Number.NEGATIVE_INFINITY}).element //something to do with the closest element and a child
    
        
    }