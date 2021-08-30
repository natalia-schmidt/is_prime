const putMessage = (message) => {
    const getDivResult = document.querySelector(".div-result")
    const newElement = document.createElement ("p");
    const newContent = document.createTextNode(message);

    newElement.appendChild(newContent);
    getDivResult.appendChild(newElement);
};

const isPrime = () => {
    const n = parseFloat(document.getElementById("number").value);
    
    if (isNaN(n)){
        putMessage("Invalid caracter, please try again");
        return;
    }
    
    if (n < 2) {
            putMessage("It is not a prime number");
            return;
        }

    for (let i = 2; i < n; i++)
        if ( n % i === 0) {
            putMessage("It is not a prime number")
            return
        }
        putMessage("It is a prime number")
        return 
}