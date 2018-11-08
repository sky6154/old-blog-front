import axios from "axios";
import _ from "lodash";

import {getApiServer} from "../../config/index";
import createCommonRequest from "../utils/createCommonRequest";

export const fetchPostApi = req =>{
  const apiServer = getApiServer();

  console.log("FETCH POST API CALL");
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

  console.log("FETCH POST LIST API CALL");
  const fullUrl = `${apiServer}/post/getAll`;

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

  console.log("FETCH POPULAR POST LIST API CALL");
  const fullUrl = `${apiServer}/post/getPopularPost`;

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

  console.log("FETCH RECENT POST LIST API CALL");
  const fullUrl = `${apiServer}/post/getRecentPost`;

  return axios.get(fullUrl, createCommonRequest())
    .then((res) =>{
      return res.data;
    })
    .catch((err) =>{
      throw err;
    });
};