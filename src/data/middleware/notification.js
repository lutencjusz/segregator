import {toast} from 'react-toastify';

const notificationsMiddleware = () => next => action => {
    if (action.message && /(.*)_(SELECTED)/.test(action.type)){ //szuka wyrażenia COUNTER
        toast.success(action.message
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
            const {promise, type, ...rest} = action;
            next({
                type: 'SET_CANDIDATES',
                ...rest
            });
        
    }
    next(action);
}

export default notificationsMiddleware;
