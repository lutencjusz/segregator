import {toast} from 'react-toastify';

const Message = (message, status = "success") => {
    const properties = {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    };
  
    if (status === "success") {
      toast.success(message, { ...properties });
    } else if (status === "error") {
      toast.error(message, { ...properties });
    } else {
      toast.info(message, { ...properties });
    }
  };

  export default Message;