const express = require('express');
const router = express.Router();
const studentcontrollers = require('../controllers/Studentcontroller');
const Workscontroller = require('../controllers/Workscontroller');


router.post('/students/create',studentcontrollers.create)
router.get('/students/read',studentcontrollers.read)
router.post('/students/update/:id',studentcontrollers.update)
router.get('/students/delete/:id',studentcontrollers.delete)
router.get('/students/login',studentcontrollers.login)


router.post('/works/create',Workscontroller.create);


module.exports=router;