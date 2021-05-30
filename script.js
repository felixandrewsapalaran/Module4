/*
 DONE: Update the text in the "Formatted Text" section as a user types in the textarea

 DONE TOGETHER: Add a .bold, .italic classes to "Formatted text" when the approriate button is clicked

 DONE: Add an .underline class to "Formatted Text" when Underline button is clicked

 DONE: Toggle the align style for "Formmated Text" when the appropriate button is clicked

 */

/*
Update the output text as a user types in the textarea
HINT: Use the onkeydown function inside HTML
*/
updateText = () => {
    // CODE GOES HERE
    //console.log("Working");

    //get the value from the html element
    let text = document.getElementById('text-input').value;

    // change the value from the formmated text
    document.getElementById('text-output').innerText = text;
}


/*
* Toggle the  bold class for the output text
* HINT: Use the onclick function inside HTML
* HINT: Look into using this keyword
* HINT: Toggle .active class for the button
*/
makeBold = (elem) => {
    //CODE GOES HERE
    //console.log(elem);

    // if you inspect the click button and click the bold it will turn on the class 'active'
    elem.classList.toggle('active'); // Makes the button active when click

    // if you click the bold button this will turn the output text to bold
    document.getElementById('text-output').classList.toggle('bold');
}


/*
 Toggle the italic class for the ouput text
*/
makeItalic = (elem) => {

    elem.classList.toggle('active');
    
    document.getElementById('text-output').classList.toggle('italic');
}

/*
 * Toggle the underline class for the output text
 * HINT: Toggle the .active class for the button
 * HINT: Use the classList property
 * HINT: Use contains, remove, and add functions
*/
makeUnderline = (elem) => {
    //CODE GOES HERE

    // making the button class active when click
    elem.classList.toggle('active');
    
    // get the specific element 
    let formattedText = document.getElementById('text-output');

    // check the element if it contains a certain class
    // if containers a underline class
    if (formattedText.classList.contains('underline')){ 
        // then remove it
        formattedText.classList.remove('underline');
    }else{
        // if it doesn't contain the underline we want to addded it
        formattedText.classList.add('underline');
    }
}


/*
 * Toggle the style textAlign attribute
 * Toggle the active state for the align buttons
 * HINT: Use the style property of the element
 * HINT: Make sure to untoggle the active state for all other align buttons
*/

alignText = (elem, alignType) => {
    // CODE GOES HERE

    // Get the element
    //elem.classList.toggle('active');

    // it will log which type button you've pressed
    //console.log(alignType);

    // adding style to to element depending on the text align type
    document.getElementById('text-output').style.textAlign = alignType;

    // select all the actiuve buttons element by class
    let buttonsList = document.getElementsByClassName('align');

    // // loop through all the buttons
    // for(let i = 0; i < buttonsList.length; i++) {
    //     // remove all the class 'active' to all of them
    //     buttonsList[i].classList.remove('active');

    // }

    console.log(buttonsList);

    // This causes an error because we looping through an html element which is not the same as an array type.
    // buttonsList.map((button) => {
    //     button.classList.remove('active');
    // })


    // so we use this forEach loop instead
    for (let button of buttonsList) {
        button.classList.remove('active');
        console.log(button); // just to shows which button was clicked
    }

    // Once we remove all the active from all the buttons
    // we want to add active to the one to you click
    elem.classList.add('active'); // the one we click is the only one to be active everything else is inactive

}