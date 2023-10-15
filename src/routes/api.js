const express = require('express');
const router = express.Router();
const studentcontrollers = require('../controllers/Studentcontroller');
const Workscontroller = require('../controllers/Workscontroller');
const AuthVerifyMiddleware = require('../middleware/AuthVerifyMiddleware');

router.use(AuthVerifyMiddleware);
router.post('/students/create',studentcontrollers.create)
router.get('/students/read',studentcontrollers.read)
router.post('/students/update/:id',studentcontrollers.update)
router.get('/students/delete/:id',studentcontrollers.delete)
router.get('/students/login',studentcontrollers.login)


router.post('/works/create',Workscontroller.create);
router.get('/works/read', Workscontroller.read);
router.post('/works/update/:id', Workscontroller.update);
router.get('/works/delete/:id', Workscontroller.delete);



// router.post('/students/reset-password', studentcontrollers.resetPassword);
module.exports=router;