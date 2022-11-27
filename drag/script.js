const draggables = document.querySelectorAll('.draggable') // here is where we get the p  
const containers = document.querySelectorAll('.container') // here is where we get the container
// here we affeft the class if we drag or dropping
draggables.forEach(draggable =>{
    draggable.addEventListener('dragstart',()=>{
        draggable.classList.add("dragging")
    }) // this part we are going through the draggables and adding an event listen that on the dragstart event we do a function draggable is from the foreach we add a class list with the class name 

    draggable.addEventListener("dragend",()=>{
        draggable.classList.remove("dragging")
    }) // this part we add the event listener dragend is the event and when the draggable is not being dragged it will remove the class list 
})
//
containers.forEach(container =>{
    container.addEventListener("dragover", e =>{
        e.preventDefault()
        const afterElement = getDragAfterElement(container,e.clientY)
        console.log(afterElement)
        const draggable = document.querySelector('.dragging')
        if(afterElement == null){
            container.appendChild(draggable)
        }else{
            container.insertBefore(draggable,afterElement)
        }
    }) // i think the insert before is sayin insewt the draggable in the container adter the element
}) 
    // here we are going through each container an add an event listener 
    // the event we are going to add is dragover e is a parameter we are passisng in the function for our evenet listener
    // we prevents the default to stop the pointer cursor 
    //the after element is where we make our function that takes in container and a y coordiante
    //we need   

function getDragAfterElement(container,y){
      // this is a varibale yjay takes the curremy container content inside of that we getting all tyhe p 
      //with the class draggable that does not have the class of dragging only te cuurent one would have that.
      // 

    const draggableElements = [...container.querySelectorAll(".draggable:not(.draging)")]
  
// we are returning the draggable elements thats not neing dragged reduced to 
   return draggableElements.reduce((closest,child) =>{
            // this is how we make  a variable called box by getting the bound cloient rec of the client thay we will pass into the raggable elements
            //when we get that box  we got to find the offset and depending on that offset we will determine if where the container will go

            const box = child.getBoundingClientRect()

            console.log(box)
        const offset = y - box.top - box.height/2 // this offset is the diffremce between the rectangels when you move it we divide the heigh by two because we need half the box t
        console.log(offset)

        // if the offset which is the diif bettwwen the positopn the top of the box minus half the height of the second box
        // if its less than zero and more than the closes offset
        if (offset < 0  && offset > closest.offset){
            return {
                offset:offset,
                element:child
            }}
            else {
                return console.log(closest)
            }
        
            //the reduce function took two arguments here and is doing the firest function on all the elements of the arry draggale elements the second is determing the offset i guess we need it to be a number going to negative infinity but what is the elemnt at the end
    },{offset:Number.NEGATIVE_INFINITY}).element
}