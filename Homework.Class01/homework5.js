var database = [];

function addStudent() {
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let age = document.getElementById("age");
    let email = document.getElementById("email");

    var student = {
        "firstName": firstName.value,
        "lastName": lastName.value,
        "age": age.value,
        "email": email.value
    }

    database.push(student);
}

function submitForm() {

    for (let i = 0; i < database.length; i++) {
        console.log("First name of student " + (i + 1) + ": " + database[i].firstName + "/n");
        console.log("Last name of student " + (i + 1) + ": " + database[i].lastName);
        console.log("Age of student " + (i + 1) + ": " + database[i].age);
        console.log("Email: " + database[i].email);
    }
}

