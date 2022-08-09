const deleteBtn = document.querySelectorAll('.fa-trash')//creates a variable and assigns it to a selection of all elements with a class of trash can
const item = document.querySelectorAll('.item span')// creates a variable and assigns it to a selection of span tags inside of a prant that has a class of "item"
const itemCompleted = document.querySelectorAll('.item span.completed')//creates a variable and assigns it to a selection of spans with a class of completed inside of a parent with and class of "item" 

Array.from(deleteBtn).forEach((element)=>{ //creates an an array from the selection staring a loop
    element.addEventListener('click', deleteItem)// adds and event listener to the current item that waits for a click and then calls a function called deleteItem
}) //closes the loop// 

Array.from(item).forEach((element)=>{ // creates an arry from the selection and starts a loop
    element.addEventListener('click', markComplete)//adds an event listener to the current item that waits for a click then calls a function called markComplete
}) //closes the loop

Array.from(itemCompleted).forEach((element)=>{ //creates an array from the selection and starts a loop
    element.addEventListener('click', markUnComplete) //adds an event listener to completed items only
}) // closes the loop

async function deleteItem(){ //declares an asychronous function and allows the execution to continue while it runs
    const itemText = this.parentNode.childNodes[1].innerText // looks inside of the list item to extract the text value of only the specified list item
    try{ //starts a try block to do something
        const response = await fetch('deleteItem',{ // creates a response variable that writes on a fetch to get data from the results of the deleteItem route
           method:'delete', // sets the CRUD method for the route
           headers:('Content-Type': 'application/json'),//specifies the type of content expected which is JSON
            body: JSON.stringify({ //declares the message content being passed and stringify that content
              'itemFromJS': itemText // setting the content of the body to the inner text of the list item and naming it "itemsfromJS"
            })// closes the body
          })//closes the object
        const data = await response.json()//waiting on the JSON form of the response to be converted
        console.log(data)// logs the result to the console
        location.reload()// reloads the page to update what is displayed

    }catch(err){ // if an error occurs it passes the errors into the catch block
        console.log(err) // logs error to the console
     } // closes the catch block
} //ends the function

async function markComplete(){ //declares an asychronous fuction called markComplete
    const itemText = this.parentNode.childNodes[1].innerText // looks inside of the list and grabs only the inner text within the list span
    try{ //starts a try block to do something
        const response = await fetch('markComplete', { // creates a response variable that waits on a fetch to get data from the result of the markComplete route
            method: 'put', // setting the CRUD method to "update" for the route
            headers: {'Content-Type': 'application/json'}, // specifiying the type of content expected which is JSON
            body: JSON.stringify({ // declars the message content being passed and then stringify that content
                'itemFromJS': itemText // setting the content of the body to the inner text of item and naming  itemFromJS
             }) //closes the body
            }) //closes the object
        const data = await response.json() // waiting on JSON from the response to be converted
        console.log(data) // logs the result to the console
        location.reload() //reloads the page to update was is displayed

    }catch(err){ // if an error ouccurs, it passes the error to the catch block
        console.log(err) // logs the error to the console
    } // closes the catch block
} // ends the function

async function markUnComplete(){ //declares ansynchronous function 
    const itemText = this.parentNode.childNodes[1].innerText // looks inside of the list item and grabs only the inner text within the list span 
    try{ //starts a try block to do something 
        const response = await fetch('markUnComplete', { // creates a response variable that waits on a fetch to get data from theresult of the markCompleted route
            method: 'put', // setting the CRUD method to update for the route
            headers: {'Content-Type': 'application/json'}, //specifiying the type of content expected which is JSON
            body: JSON.stringify({ //declares the message content being passes and strigify the content
                'itemFromJS': itemText // setting the content of the body to the inner text of the list and naming it itemfromJS 
            }) //closes the body
          }) //closes the object
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}