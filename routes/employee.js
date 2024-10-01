const express = require('express');
const router = express.Router();

/* GET employee page. */
router.get('/', function(req, res, next) {
    const employees = [
        {
          employee_id: 'E001',
          first_name: 'John',
          last_name: 'Doe',
          date_of_birth: '1990-05-15',
          gender: 'Male',
          contact_number: '1234567890',
          email: 'john.doe@example.com',
          address: '123 Main St, City, Country'
        },
        {
          employee_id: 'E002',
          first_name: 'Jane',
          last_name: 'Smith',
          date_of_birth: '1992-08-22',
          gender: 'Female',
          contact_number: '0987654321',
          email: 'jane.smith@example.com',
          address: '456 Oak St, City, Country'
        },
        {
          employee_id: 'E003',
          first_name: 'Alice',
          last_name: 'Johnson',
          date_of_birth: '1985-01-12',
          gender: 'Female',
          contact_number: '1122334455',
          email: 'alice.johnson@example.com',
          address: '789 Pine St, City, Country'
        }
      ];
    res.render('employee', {employees});
  });

  module.exports = router;