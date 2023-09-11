const express = require('express');
const UserController = require('../controllers/userControllers');
const router = express.Router()


router.get('/homeUser', UserController.home);
router.post('/testUser', UserController.test);
router.post('/save-user', UserController.saveUser);
router.get('/user/:id?', UserController.getUser);
router.get('/users', UserController.getUsers);
router.put('/user/:id', UserController.updateUser);
router.delete('/user/:id', UserController.deleteUser);

module.exports = router;




// const router = express.Router();

// const path = 'user';

// router.get(
// 	`/${path}`,
// 	controller.getData
// 	)

// module.exports = router;
