const express = require('express');
const { addSchool, listSchools } = require('../Controllers/SchoolCont');

const router = express.Router();

router.post('/addSchool', addSchool);
router.get('/listSchool', listSchools);

module.exports = router;
