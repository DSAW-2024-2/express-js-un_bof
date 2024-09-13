const express = require('express');
const app = express();

// Student information
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

  // Check if the ID is a valid number
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

const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
