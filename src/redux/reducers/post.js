import * as actionTypes from '../actions/post';
import createReducer    from '../utils/createReducer';
import update           from 'immutability-helper';
import CAlert           from "../../utils/alert";

const initialState = {
  post              : [],
  postList          : [],
  isPostFetching    : false,
  isPostListFetching: false
};

const actionHandlers = {
  [actionTypes.FETCH_POST.REQUEST]: (state, action) =>{
    return Object.assign({}, state, {isPostFetching: true});
  },
  [actionTypes.FETCH_POST.SUCCESS]: (state, action) =>{
    const post = action.data;

    return Object.assign({}, state, {
      post              : post,
      isPostFetching: false
    });
  },
  [actionTypes.FETCH_POST.FAILURE]: (state, action) =>{
    CAlert.show("게시글을 가져오는데 실패하였습니다.", 'info');
    return Object.assign({}, state, {...action});
  },



  [actionTypes.FETCH_POST_LIST.REQUEST]: (state, action) =>{
    return Object.assign({}, state, {isPostListFetching: true});
  },
  [actionTypes.FETCH_POST_LIST.SUCCESS]: (state, action) =>{
    const postList = action.data;

    return Object.assign({}, state, {
      postList              : postList,
      isPostListFetching: false
    });
  },
  [actionTypes.FETCH_POST_LIST.FAILURE]: (state, action) =>{
    CAlert.show("게시글 목록을 가져오는데 실패하였습니다.", 'info');
    return Object.assign({}, state, {...action});
  }
};

export default createReducer(initialState, actionHandlers);