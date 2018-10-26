import createActionTypes from '../utils/createActionTypes';
import createActionCreator, {createSagaAction} from '../utils/createActionCreator';

export const FETCH_POST = createActionTypes('FETCH_POST');

export const fetchPost = createSagaAction(FETCH_POST);

export const FETCH_POST_TRIGGER = 'FETCH_POST_TRIGGER';

export const fetchPostTrigger = (req, requiredFields = []) => createActionCreator(FETCH_POST_TRIGGER, {req, requiredFields});



export const FETCH_POST_LIST = createActionTypes('FETCH_POST_LIST');

export const fetchPostList = createSagaAction(FETCH_POST_LIST);

export const FETCH_POST_LIST_TRIGGER = 'FETCH_POST_LIST_TRIGGER';

export const fetchPostListTrigger = (req, requiredFields = []) => createActionCreator(FETCH_POST_LIST_TRIGGER, {req, requiredFields});