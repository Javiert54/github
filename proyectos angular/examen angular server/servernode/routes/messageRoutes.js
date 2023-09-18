const express = require('express');
const MessageController = require('../controllers/messageControllers');
const router = express.Router()


router.get('/homeMessage', MessageController.home);
router.post('/testMessage', MessageController.test);
router.post('/save-message', MessageController.saveMessage);
router.get('/message/:id?', MessageController.getMessage);
router.get('/messages', MessageController.getMessage);
router.put('/message/:id', MessageController.updateMessage);
router.delete('/message/:id', MessageController.deleteMessage);

module.exports = router;
