const {Router} = require("express")
const {register, login, setAvatar, getAllUsers} = require("../controllers/userController")
const { addMessage, getAllMessages } = require("../controllers/messagesController")
const router = Router()

router.post("/addmsg", addMessage)
router.post("/getmsg", getAllMessages)

module.exports = router 