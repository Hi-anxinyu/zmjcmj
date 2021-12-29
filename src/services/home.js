import request from "../utils/request";

let url = "https://xinyan.xinhuaxmt.com/zmjcmj";
// let url = "https://xhvote2.infhis.cn/zmjcmj_test";
export const getNumList = async () => {
  return await request.get(`${url}/leaderboard`);
};

export const setIdentity = async (openid) => {
  return await request.get(`${url}/vote_record?account=${openid}`);
};

//投票接口
export const addNum = async (params) => {
  return await request({
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    url: `${url}/vote`,
    data: { ...params },
  });
};
