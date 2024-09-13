const express = require('express');
const app = express();

// Student information (Note: Student data is hardcoded, limiting its scalability. Normally, you would fetch this data from a database or API)

const students = {
  1: {
    name: 'Andres',
    lastName: 'Ricaurte',
    email: 'andres.ricaurte@universidad.edu',
    id: '12345'
  },
  2: {
    name: 'David',
    lastName: 'Medina',
    email: 'david.medina@universidad.edu',
    id: '67890'
  }
};

// Route to get student information by ID
app.get('/user-info/:id', (req, res) => {
  const studentId = req.params.id;

  // Check if the ID is a valid input by checking if it exists in the studentId object and if it is a number
  if (isNaN(studentId)) {
    return res.status(400).json({ error: 'Invalid ID format. ID must be a number.' });
  }

  const student = students[studentId];

  // ID validation
  if (!student) {
    return res.status(404).json({ error: 'Student not found' });
  }

  // Respond with student information
  res.json(student);
});

// Port 3000 was declared in this code because it is commonly used por application development with Node.js, allowing the code to work properly in any device or environment
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Note: If this API grows in the future, using a hardcoded object to store students may not be as efficient. In that case, using a database or API for scalability should be considered.
// This code was made by both of the students of the group, but mostly written in a single computer