import createActionTypes from '../utils/createActionTypes';
import createActionCreator, {createSagaAction} from '../utils/createActionCreator';

export const FETCH_POST = createActionTypes('FETCH_POST');

export const fetchPost = createSagaAction(FETCH_POST);

export const FETCH_POST_TRIGGER = 'FETCH_POST_TRIGGER';

export const fetchPostTrigger = (req, requiredFields = []) => createActionCreator(FETCH_POST_TRIGGER, {req, requiredFields});



export const EMPTY_POST = createActionTypes('EMPTY_POST');

export const emptyPost = createSagaAction(EMPTY_POST);

export const EMPTY_POST_TRIGGER = 'EMPTY_POST_TRIGGER';

export const emptyPostTrigger = (req, requiredFields = []) => createActionCreator(EMPTY_POST_TRIGGER, {req, requiredFields});



export const FETCH_POST_LIST = createActionTypes('FETCH_POST_LIST');

export const fetchPostList = createSagaAction(FETCH_POST_LIST);

export const FETCH_POST_LIST_TRIGGER = 'FETCH_POST_LIST_TRIGGER';

export const fetchPostListTrigger = (req, requiredFields = []) => createActionCreator(FETCH_POST_LIST_TRIGGER, {req, requiredFields});


export const FETCH_POPULAR_POST_LIST = createActionTypes('FETCH_POPULAR_POST_LIST');

export const fetchPopularPostList = createSagaAction(FETCH_POPULAR_POST_LIST);

export const FETCH_POPULAR_POST_LIST_TRIGGER = 'FETCH_POPULAR_POST_LIST_TRIGGER';

export const fetchPopularPostListTrigger = (req, requiredFields = []) => createActionCreator(FETCH_POPULAR_POST_LIST_TRIGGER, {req, requiredFields});


export const FETCH_RECENT_POST_LIST = createActionTypes('FETCH_RECENT_POST_LIST');

export const fetchRecentPostList = createSagaAction(FETCH_RECENT_POST_LIST);

export const FETCH_RECENT_POST_LIST_TRIGGER = 'FETCH_RECENT_POST_LIST_TRIGGER';

export const fetchRecentPostListTrigger = (req, requiredFields = []) => createActionCreator(FETCH_RECENT_POST_LIST_TRIGGER, {req, requiredFields});