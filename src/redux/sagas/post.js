/* eslint-disable no-constant-condition */
import { fetchPostApi, fetchPostListApi, fetchPopularPostListApi, fetchRecentPostListApi } from '../services/post';
import * as actions from '../actions/post';
import {createIterator, createWatcher} from '../utils/createSaga';

/***************************** Subroutines ************************************/
const fetchPost = createIterator(actions.fetchPost, fetchPostApi);
const emptyPost = createIterator(actions.emptyPost, function(){});
const fetchPostList = createIterator(actions.fetchPostList, fetchPostListApi);
const fetchPopularPostList = createIterator(actions.fetchPopularPostList, fetchPopularPostListApi);
const fetchRecentPostList = createIterator(actions.fetchRecentPostList, fetchRecentPostListApi);

/******************************* WATCHERS *************************************/

const watchFetchPost = createWatcher(actions.FETCH_POST_TRIGGER, fetchPost);
const watchEmptyPost = createWatcher(actions.EMPTY_POST_TRIGGER, emptyPost);
const watchFetchListPost = createWatcher(actions.FETCH_POST_LIST_TRIGGER, fetchPostList);
const watchFetchPopularPost = createWatcher(actions.FETCH_POPULAR_POST_LIST_TRIGGER, fetchPopularPostList);
const watchRecentPostList = createWatcher(actions.FETCH_RECENT_POST_LIST_TRIGGER, fetchRecentPostList);

export default [
  watchFetchPost, watchEmptyPost, watchFetchListPost, watchFetchPopularPost, watchRecentPostList
];