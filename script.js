/* Given */
// const numbers = [1, 2, 3, 4, 5, 6];

// 1. Use an array method to create a new array that only contains even numbers from an original array.

// const filteredNumbers  = numbers.filter(number => {
//     return number % 2 === 0;
// });

// console.log(filteredNumbers);

// 2. Use an array method to create a new array that contains the square of each number in the original array.

// const numbersToBeSquared = numbers.map(number => {
//    return number ** 2;
// });

// console.log(numbersToBeSquared);


// 3. Use an array method to find the sum of all numbers in an array.

// const sumOfNumberInsideTheArray = numbers.reduce((initialValue, currentValue) => {
//     return initialValue + currentValue;
// });

// console.log(sumOfNumberInsideTheArray);


// 4. Use an array method to find the first number in an array that is greater than 3.

// const numberGreaterThanThree = numbers.find(number => {
//     return number > 3;
// });

// console.log(numberGreaterThanThree);


// 5. Use an array method to print each element in an array to the console.

// numbers.forEach(number => console.log(number));



// 6. Use an array method to remove the second and third elements from an array and replace them with the values 10 and 11.

// numbers.splice(1, 2, 10, 11);

// console.log(numbers);


// 7. Use an array method to create a new array that contains the first 3 elements of an original array.

// const getThree = numbers.slice(0, 3);

// console.log(getThree);


/* Given */
// const numbers = [1, 2, 3, 4, 5, 11, 12, 13];

// 1. Use the some method to determine if an array contains a number that is greater than 10. (show some test scenarios showing that it can still check whether the array elements does not have greater than 10 via console)
// const hasGreaterThanTen = numbers.some(number => number > 10);

// if (hasGreaterThanTen) {
//     console.log('The array has a number greater than 10');
// } else {
//     console.log('The array does not have a number greater than 10');
// }



// 2. Use the every method to determine if all numbers in an array are even. (show some test scenarios showing  that the method is working when you change the array elements into even or odd via console)
// const isAllEven = numbers.every(number => number % 2 === 0);

// if (isAllEven) {
//     console.log('The array elements are all even');
// } else {
//     console.log('The array elements are not all even');
// }


// checkEnrolled expected to contain true or false
// !checkEnrolled === (undefined, null, 0, false)

// enrollees.length === 0 if you want to check your arrays length if empty


// Technical assessment 2




/* 
    Instructions:
        
    1. Ensure that your script is connected to your HTML document.
    2. Create a function to input the student’s name and inform that the name is added to the list.
    3. Once student names are added, create a function to display the total number of students added to the list.
*/


// const studentList = ['Kimbo', 'Graham', 'Sanz']; // global variable


// function addStudent() { // from here
//     const studentsToBeAdded = ['Ferdie', 'Mark', 'Angelito']; // the variable is inside a blocked scope

//     studentsToBeAdded.forEach(student => {
//         studentList.push(student);
//         console.log(`${student} has been added to the list`);
//     });

//     displayTotalNumberOfStudents(studentList.length);
// } // until here

// function displayTotalNumberOfStudents(numberOfStudents) {
//     console.log(`Total number of students: ${numberOfStudents}`);
// }

// addStudent();




/* Create a function that will print student names that were input previously. */
// const students = ['Gregory', 'Philip', 'Markus', 'Alice'];

// printStudentNames = (names) => {
//     names.forEach(name => console.log(name)); 
// }

// printStudentNames(students);



/* 
    Instructions:

    1. Create a function that will check if Joe is an enrollee.
    2. When searched, it will accept the upper and lower case letters and display the result.

    Note: You can use .toLowerCase() or .toUppercase() if needed. 

    3. If Joe is not on the list, the result must display that Joe is not found on the list.
*/

// const enrollees = ['Alice', 'Bob', 'Charlie', 'Joe'];

// checkEnrollee = (name, enrollees) => {
//     const lowerCaseString = name.toLowerCase();

//     const checkEnrolled = enrollees.map(enrollee => enrollee.toLowerCase() === lowerCaseString ? true : false); // ternary operator

//     return checkEnrolled;
// }

// searchStudent = (enrolledStudents) => {
//     const studentName = 'Joe';
//     const isStudentEnrollee = checkEnrollee(studentName, enrolledStudents);

//     if (isStudentEnrollee) {
//         console.log(`${studentName} is found on the list`);
//     } else {
//         console.log(`${studentName} is not found on the list`);
//     }
// }

// searchStudent(enrollees);

/*
    Instructions
    1. Create an empty array to store the student section.
    2. Create a function that will add the student section.
    3. Display the student with their added section.
*/

// const studentSection = []; // { name, section }

// addStudentSection = (name, section) => {
//     studentSection.push({name , section}); // destructure
// }

// addStudentSection('Kimbo', '- Section A');
// addStudentSection('Graham', '- Section B');
// addStudentSection('Sanz', '- Section C');

// const studentWithSection = studentSection.map(student => `${student.name} ${student.section}`);

// console.log(studentWithSection);


/*
    Instructions:

    1. Create a function for removing students from the list.
    2. Once removed, display the student name that was removed from the list.
    3. Display the names of the remaining students.
*/

// const studentsList = ['Kimbo', 'Joe', 'Graham', 'Ferdie']

// removeStudents = (studentName) => {
//     const index = studentsList.indexOf(studentName);

//     if (index !== -1) {
//         const removedStudent = studentsList.splice(index, 1);
//         console.log(`${removedStudent} was removed from the student list`);
//     } else {
//         console.log('Student not found');
//     }
// }

// removeStudents('Ferdie');

// console.log(studentsList); // output of the final list in the array


