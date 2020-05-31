import {toast} from 'react-toastify';

const notificationsMiddleware = () => next => action => {
    if (action.message && /(.*)_(SELECTED)/.test(action.type)){ //szuka wyrażenia COUNTER
        toast(action.message
            , {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                }
            );
        
    }
    next(action); //coś niegra z tym next
}

export default notificationsMiddleware;
