
    // Array to store student data
    let studentData = [];

    // Function to submit the form and store data
    function submitForm() {
      // Get form values
      let name = document.getElementById('name').value;
      let phone = document.getElementById('phone').value;
      let email = document.getElementById('email').value;

      // Create an object with the student's data
      let student = {
        name: name,
        phone: phone,
        email: email
      };

      // Add the student object to the array
      studentData.push(student);

      // Optionally, you can display a message or perform other actions here
      console.log("Form submitted successfully!");
      console.log("Student data:", studentData);

      // Clear the form after submission
      document.getElementById('studentForm').reset();
    }

