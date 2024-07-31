const readline = require('readline');

// Create an interface for input and output
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to get student details
const studentDetails = () => {
    return new Promise((resolve) => {
        const student = {}; // Create a student object

        r1.question('ENTER STUDENT NAME: ', (studName) => {
            student.name = studName; // Assign name to student object

            r1.question('ENTER YOUR DEPARTMENT: ', (studDepartment) => {
                student.department = studDepartment; // Assign department to student object

                r1.question('ENTER YOUR CGPA: ', (stdCgpa) => {
                    student.cgpa = stdCgpa; // Assign CGPA to student object

                    r1.close(); // Close the readline interface
                    resolve(student); // Resolve the promise with the student object
                });
            });
        });
    });
};

// Call the function and log the student details
studentDetails().then((student) => {
    console.log('Student Details:', student);
});