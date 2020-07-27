import * as actionTypes from '../actions/post';
import createReducer from '../utils/createReducer';
import CAlert from "../../utils/alert";

const initialState = {
    post: {},
    postListInfo: {},
    popularPostList: [],
    recentPostList: [],
    isPostFetching: false,
    isPostListFetching: false,
    isPopularPostListFetching: false,
    isRecentPostListFetching: false
};

const actionHandlers = {
    [actionTypes.FETCH_POST.REQUEST]: (state, action) => {
        return Object.assign({}, state, {isPostFetching: true});
    },
    [actionTypes.FETCH_POST.SUCCESS]: (state, action) => {
        const post = action.data;

        return Object.assign({}, state, {
            post: post,
            isPostFetching: false
        });
    },
    [actionTypes.FETCH_POST.FAILURE]: (state, action) => {
        CAlert.show("게시글을 가져오는데 실패하였습니다.", 'info');
        return Object.assign({}, state, {...action});
    },


    [actionTypes.EMPTY_POST.REQUEST]: (state, action) => {
        return Object.assign({}, state, {post: {}});
    },


    [actionTypes.FETCH_POST_LIST.REQUEST]: (state, action) => {
        return Object.assign({}, state, {isPostListFetching: true});
    },
    [actionTypes.FETCH_POST_LIST.SUCCESS]: (state, action) => {
        const postListInfo = action.data;

        return Object.assign({}, state, {
            postListInfo: postListInfo,
            isPostListFetching: false
        });
    },
    [actionTypes.FETCH_POST_LIST.FAILURE]: (state, action) => {
        CAlert.show("게시글 목록을 가져오는데 실패하였습니다.", 'info');
        return Object.assign({}, state, {...action});
    },


    [actionTypes.FETCH_POPULAR_POST_LIST.REQUEST]: (state, action) => {
        return Object.assign({}, state, {isPopularPostListFetching: true});
    },
    [actionTypes.FETCH_POPULAR_POST_LIST.SUCCESS]: (state, action) => {
        const popularPostList = action.data;

        return Object.assign({}, state, {
            popularPostList: popularPostList,
            isPopularPostListFetching: false
        });
    },
    [actionTypes.FETCH_POPULAR_POST_LIST.FAILURE]: (state, action) => {
        CAlert.show("인기있는 게시글 목록을 가져오는데 실패하였습니다.", 'info');
        return Object.assign({}, state, {...action});
    },


    [actionTypes.FETCH_RECENT_POST_LIST.REQUEST]: (state, action) => {
        return Object.assign({}, state, {isRecentPostListFetching: true});
    },
    [actionTypes.FETCH_RECENT_POST_LIST.SUCCESS]: (state, action) => {
        const recentPostList = action.data;

        return Object.assign({}, state, {
            recentPostList: recentPostList,
            isRecentPostListFetching: false
        });
    },
    [actionTypes.FETCH_RECENT_POST_LIST.FAILURE]: (state, action) => {
        CAlert.show("최근 게시글 목록을 가져오는데 실패하였습니다.", 'info');
        return Object.assign({}, state, {...action});
    }
};

export default createReducer(initialState, actionHandlers);