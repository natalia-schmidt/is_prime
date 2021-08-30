# Is prime?

I made this project to practice:

* Modulus operator
* For loop

This program determines whether the number given by the user is prime or not.

I created a form with an input and a button for the user to enter number.  When the button is on clicked, the function isPrime() is activated with the onclick() event. 

**isPrime() function**

First, this function gets the number given for the user with the document.getElementById().value method, and gives it the value of n. So that n is written by the program as a number and not as a string, I use the parseFloat() method.

Then, with the if clause I discard 2 scenes where I know that there isn't a prime number:

- If clause line 13: determines whether n is a number.
- If clause line 18: determines whether n is smaller than 2 (2 is the first prime number).

Prime number are those who can be divided by 1 and themselves. To know if n meets these conditions, I created a for loop where:

- i starts being = to 2.
- if i is smaller than n, then sum up 1 to it.
- the value of i goes to an if... else.
- there, n is divided for i using the modulus operator to know if there is or isn't any remainder. If there isn't any, it means that the program founded a number that can divide n, thus, n is not prime and the loop ends.
- if i can't divide n without giving any remainder, i is sum up 1 and it tries again.
- if it was never found a value that didn't give any remainder, then n is prime.

**putMessage()**

This functios allows the interaction with the user. With the message parameter, it notifies the user whether n is prime or not. This information is put on the document using the appendChild() method.
