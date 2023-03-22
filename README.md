This README.md file contains information on the projects for week 1 code challenge lab
=======================================================================
## **Table Of Contents.**
1. Student Grade Calculator.
2. Speed Detector.
3. Net Salary Calculator.
4. Author
5. License


### 1. Student Grade Calculator
This program that the user to input student marks. The input should be between 0 and 100.It then returns output to the HTML page on the grade the student has gotten. I've added a button and input element to the HTML file to assist in user interactivity.

### Setup
This program is a simple program consist if a HTML,CSS and JavaScript file for interactivity. I've included some simple styling in the CSS file.

In the JavaScript file I've included a function ***calculateGrade()*** into which I've added an click event from my button tag in the HTML file. The function includes if else statements for different grades and outputs to the page through to .InnerHTML property.


### 2. Speed Detector
This program takes as input the speed of a car e.g80. If the speed is less than 70, it prints *“Ok”*. Otherwise, for every 5 km/s above the speed limit (70), it gives the driver one demerit point and prints the total number of demerit points.

### Setup
In this program I've also included standard HTML,CSS and JavaScript files and linked them to my HTML file.

In my script.js file is as simple function ***(checkSpeed)*** that I've linked to the button and input elements using an event that triggers on click and then outputs to the innerHTML through a div element if id result.

### 3. Net Salary Calculator
This program accepts basic salary and benefits of an employee,calculates and outputs the Payee Tax, NHIF, NSSF Deductions and net salary and outputs to the page.

### Setup
This program has similar setup to the one above in that I've included a HTML,CSS and JavaScript files. The HTML file has label elements that contains input text boxes for basic salary and benefits and a button element that triggers a function ***calculateSalary*** which calculates basic salary and appropriate deductions using if else statements and finally calculates the net salary after making appropriate deductions from the basic salary and outputs to the DOM through the innerHTML property.

### 4. Author
**[CYNTHIA BARASA](https://github.com/CynthiaB990)**

### 5. License
The source code for the lab is licensed under the MIT license, which you can find in the LICENSE.txt file.