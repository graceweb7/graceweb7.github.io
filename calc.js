//Basic Calculator program
const output = document.querySelector('.output')
const result = document.querySelector('#result')

//Chain user input on the display screen 
const appendToOutput = (input) =>{
    output.value += input;
}


//Test user input to ensure they enter valid data
//If data is correct perform simple calcutaions based on user input and return the result 
//if data is invalid, throw an 'error' message
const calculate = () =>{   
    try{
    result.value = eval(output.value);    
    }
    catch{
        output.value = "Error";
    }    
}

/*Remove the current content of the output and result screen */
const clearDisplay = (input) =>{
    output.value = "";
    result.value="";    
}
