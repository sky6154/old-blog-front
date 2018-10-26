/* eslint-disable no-constant-condition */
import { fetchPostApi, fetchPostListApi } from '../services/post';
import * as actions from '../actions/post';
import {createIterator, createWatcher} from '../utils/createSaga';

/***************************** Subroutines ************************************/
const fetchPost = createIterator(actions.fetchPost, fetchPostApi);
const fetchPostList = createIterator(actions.fetchPostList, fetchPostListApi);

/******************************* WATCHERS *************************************/

const watchFetchPost = createWatcher(actions.FETCH_POST_TRIGGER, fetchPost);
const watchFetchListPost = createWatcher(actions.FETCH_POST_LIST_TRIGGER, fetchPostList);

export default [
  watchFetchPost, watchFetchListPost
];