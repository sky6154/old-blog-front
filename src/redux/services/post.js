import axios from "axios";

import {getApiServer} from "../../config/index";
import createCommonRequest from "../utils/createCommonRequest";

export const fetchPostApi = req =>{
  const apiServer = getApiServer();
  const fullUrl = `${apiServer}/post/${req.postNum}`;

  return axios.get(fullUrl, createCommonRequest())
    .then((res) =>{
      return res.data;
    })
    .catch((err) =>{
      throw err;
    });
};


export const fetchPostListApi = req =>{
  const apiServer = getApiServer();
  let page = (req.page) ? req.page : 0;

  const fullUrl = `${apiServer}/board/get?boardId=${req.boardId}&page=${page}`;

  return axios.get(fullUrl, createCommonRequest())
    .then((res) =>{
      return res.data;
    })
    .catch((err) =>{
      throw err;
    });
};

export const fetchPopularPostListApi = req =>{
  const apiServer = getApiServer();
  const fullUrl = `${apiServer}/post/get/popular`;

  return axios.get(fullUrl, createCommonRequest())
    .then((res) =>{
      return res.data;
    })
    .catch((err) =>{
      throw err;
    });
};

export const fetchRecentPostListApi = req =>{
  const apiServer = getApiServer();
  const fullUrl = `${apiServer}/post/get/recent`;

  return axios.get(fullUrl, createCommonRequest())
    .then((res) =>{
      return res.data;
    })
    .catch((err) =>{
      throw err;
    });
};