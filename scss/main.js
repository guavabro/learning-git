let number = prompt("enter number")


    let divisibleBy5 = number % 5 ==0;
    let divisibleBy3 = number % 3 ==0;
    
    let output = divisibleBy3 ? "Fizz" : "";
    output = output + (divisibleBy5 ? "Buzz" : "")

    output = output === "" ? number : output;
    
    alert(outcome)

