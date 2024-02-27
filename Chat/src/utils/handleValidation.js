import {ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

const handleValidation = (values) => {
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  }
  const {password, confirmPassword, username, email} = values;
    if (!password, !username) {
      toast.error("Complethe all the fields", toastOptions);
      return false
    } else if (username.length < 3) {
      toast.error("Username shloud be grater than 3 characters", toastOptions);
      return false
    } else if (password.length < 8) {
      toast.error("Username shloud be grater than 8 characters", toastOptions);
      return false
    } else if (confirmPassword && password !== confirmPassword) {
      toast.error("Password and confirm password do not match", toastOptions);
      return false
    } else {
      return true
    }
}

export default handleValidation;