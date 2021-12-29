<template>
  <div class="home_wrapper">
    <section>
      <div class="block"></div>
      <div class="bc">
        <div class="rule">
          <h4 class="title">点赞说明</h4>
          <p class="time">点赞时间：12月25日9:00-12月26日20:00</p>
          <p>点赞规则：</p>
          <p>1. 点赞期间，每名用户仅有一次点赞机会，不可重复点赞；</p>
          <p>
            2. 为防止违规操作，点赞用户需下载新华社客户端，成功注册后进行点赞。
          </p>
        </div>
        <div v-for="item in dataSource" :key="item.pcName" class="police">
          <div class="top">
            <p class="pname">{{ item.pcName }}</p>
            <div class="center">
              <span
                :style="[
                  {
                    position: 'relative',
                    left: `${(item.num / allNum) * 100}%`,
                  },
                ]"
              >
                {{ item.num }}票
              </span>
              <div class="progress">
                <div
                  class="schedule"
                  :style="[
                    allNum > 0
                      ? { width: `${(item.num / allNum) * 100}%` }
                      : { width: `0%` },
                  ]"
                ></div>
              </div>
            </div>
            <van-icon
              name="good-job"
              :size="24"
              :color="flag ? '#ccc' : '#9c1010'"
              @click="onClickHand(item.pcId)"
              class="icon"
            />
          </div>
          <dl>
            <dt>{{ item.post }}</dt>
            <dd>{{ item.company }}</dd>
          </dl>
        </div>
      </div>
    </section>
    <footer>技术支持：芯言科技</footer>
  </div>
</template>

<script>
import result from "@/mock/list";
import { getNumList, setIdentity, addNum } from "@/services";
import { getNum, updateNumTracking, ifApp } from "@/utils/buriedpoint";
import { Toast } from "vant";
export default {
  data() {
    return {
      dataSource: [],
      flag: localStorage.getItem("isVote") ? true : false,
    };
  },
  async created() {
    if(!localStorage.getItem('openid')){
       localStorage.setItem('openid',(Math.random() + 1).toString(36).substring(2));
    }
    //这是正式地址 = "https://activity.xhsxmt.com/";
    //测试的地址是https://testactivity.xhsxmt.com/
    getNum("https://activity.xhsxmt.com/", "2021最美基层民警投票-浏览量");
    updateNumTracking(
      "2021最美基层民警投票-浏览量",
      "",
      "https://activity.xhsxmt.com/"
    );
    this.changeStructure();
  },
  async mounted() {
     let locationURL = encodeURIComponent(location.href.split("#")[0]);
      let get_weixinConfig = "https://open.xhsxmt.com/wx/getWXConfig?url=" + locationURL;
      if (!!navigator.userAgent.match(/micromessenger/i)) {
        function setWXShareConfig(data) {
          wx.config({
            debug: false,
            appId: data.appId,
            timestamp: data.timestamp,
            nonceStr: data.nonceStr,
            signature: data.signature,
            jsApiList: ["updateAppMessageShareData", "updateTimelineShareData"],
          });

          wx.ready(function () {
            let config = {
              title: window.title || "为“最美基层民警”点赞",
              desc: window.desc || "2021年全国“最美基层民警”候选人事迹“云”推介展示",
              link: "https://h5.xinhuaxmt.com/h5/m5/zmjcmj/index.html",
              imgUrl: "https://h5.xinhuaxmt.com/h5/m5/zmjcmj/img/image.jpg",
              error: function () {},
              success() {},
            };
            wx.updateAppMessageShareData(config);
            wx.updateTimelineShareData(config);
          });
        }

        fetch( get_weixinConfig,{}, {
            method: "GET",
          }
        ).then((response) => response.json()).then((res) => {
              let result = JSON.parse(res);
              let data = result.data;
              console.log("config: ", result.data);
              if (result.rc === 0) {
                setWXShareConfig(data);
              }
            },
            (error) => {
              throw new Error(error);
            }
          );
      }
  },
  computed: {
    allNum: function () {
      return this.dataSource.reduce((a, b) => {
        return (a += b.num);
      }, 0);
    },
  },
  methods: {
    async onClickHand(id) {
      //  Toast.fail('系统繁忙中，请稍候');
     // 执行操作前应判断是否在端内
      if (!localStorage.getItem("userInfo")) {
        ifApp(
          "https://h5.xinhuaxmt.com/h5/m5/zmjcmj/index.html",
          "2021年“最美基层民警”云推介",
          "E0F1076E057E893286AFC6E56A4421CB",
          "https://activity.xhsxmt.com/"
        );
      }
      //每个用户第一次投票之前必须调用一次 /vote_record 所以要先判断有没有投过票
      let openid = JSON.parse(localStorage.getItem("userInfo")).data
        ? JSON.parse(localStorage.getItem("userInfo")).data.openId
        : JSON.parse(localStorage.getItem("userInfo")).openId;
      if (!localStorage.getItem("isVote")) {
          
        let res = await setIdentity(localStorage.getItem('openid'));
      }
      try {
        let res = await addNum({
          account: localStorage.getItem('openid'),
          project: "zmjcmj",
          items: [id],
        });
        Toast.success("投票成功");
        localStorage.setItem("isVote", JSON.stringify(res));
        this.changeStructure();
      } catch (error) {
        console.log("error..............", error);
        const {
          response: {
            data: { message },
          },
        } = error;
        Toast.fail(message);
      }
    },
    async changeStructure() {
      //获取票数
      let res = await getNumList();
      console.log(res);
      let {
        data: {
          leaderboard: { zmjcmj },
        },
      } = res;
      this.dataSource = result
        .map((item, index) => {
          for (let key in zmjcmj) {
            if (item.pcId && item.pcId === key) {
              return (item = { ...item, num: zmjcmj[key] });
            }
          }
        })
        .sort((a, b) => {
          return b.num - a.num;
        });
    },
  },
};
</script>
<style scoped lang='scss'>
.home_wrapper {
  width: 100%;
  height: 100%;
  border-bottom: 30px solid #9c1010;
  box-sizing: border-box;
  overflow-y: scroll;
  position: relative;
}
.bc {
  width: 100%;
  background-color: #9c1010;
  padding: 0 10px;
  box-sizing: border-box;
}
.rule {
  width: 100%;
  height: 160px;
  background-color: #fff;
  margin-bottom: 10px;
  padding: 8px;
  box-sizing: border-box; 
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.rule .title {
  width: 64px;
  height: 22px;
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #d92108;
  line-height: 22px;
}
.rule p {
  width: 100%;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #666666;
  line-height: 22px;
}
.block {
  width: 100%;
  height: 225px;
  background: url("../assets/img/shareImg.png") no-repeat;
  background-size: 100% 100%;
}
footer {
  width: 100%;
  height: 30px;
  position: fixed;
  bottom: 0;
  left: 0;
  font-size: 12px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
  line-height: 30px;
}
section {
  width: 100%;
}
.police {
  width: 100%;
  height: 130px;
  border-bottom: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 10px;
  box-sizing: border-box;
  background-color: #fff;
}
.top {
  width: 100%;
  display: flex;
  align-items: center;
  .pname {
    width: 95px;
    height: 20px;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333333;
    line-height: 20px;
    position: relative;
    top: 9px;
  }
}
.center {
  flex: 1;
  padding: 0 8px;
  box-sizing: border-box;
}
.center span {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #333333;
}
.progress {
  width: 100%;
  height: 20px;
  background-color: #ffd0c9;
  border-radius: 5px;
  position: relative;
  top: 3px;
}
.schedule {
  width: 20px;
  height: 100%;
  border-radius: 5px;
  position: relative;
  background-color: #9c1010;
  border-radius: 3px;
}
.icon {
  width: 20px;
  height: 20px;
  position: relative;
  top: 7px;
}
dl {
  width: 100%;
  dt {
    height: 16px;
    font-size: 11px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
    line-height: 16px;
    margin-bottom: 5px;
  }
  dd {
    height: 28px;
    font-size: 10px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #666666;
    line-height: 18px;
  }
}
</style>