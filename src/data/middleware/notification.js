import {Message} from 'components'

const notificationsMiddleware = () => next => action => {
    if (action.message && /(.*)_(SELECTED)/.test(action.type)) { //szuka wyrażenia COUNTER
        Message(action.message);
        const { promise, type, ...rest } = action;
        next({
            type: 'SET_CANDIDATES',
            ...rest
        });

    }
    next(action);
}

export default notificationsMiddleware;
