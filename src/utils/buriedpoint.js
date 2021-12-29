const apiurl = {
  android: "https://a.app.qq.com/o/simple.jsp?pkgname=net.xinhuamm.mainclient",
  ios: "https://a.app.qq.com/o/simple.jsp?pkgname=net.xinhuamm.mainclient",
};
const $ = require("jquery");
export function getNum(url, nm) {
  //获取指定活动浏览量等数据接口
  $.ajax({
    url: url + "activity/num/getNum", //url: "https://activity.xhsxmt.com/activity/num/getNumList" -注释链接是批量获取指定活动浏览量数据接口
    type: "POST",
    data: JSON.stringify({
      secretKey: "e9469538b0623783f38c585821459454",
      nm: nm,
    }),
    dataType: "json",
    contentType: "application/json",
    success: function (res) {
      res = JSON.parse(res);
      if (res && res.data && res.data.num > 0) {
        var num = res.data.num;
      } else {
        console.log(res && res.msg);
      }
    },
  });
}
///获取到之后 要通过updateNum接口手动更新

/**
 * @method
 * @desc 更新浏览量埋点数据接口
 * @param {string}tag 活动标识，字符串类型，必填
 * @param {string}goto 跳转url地址 ,若没有则传 ''
 */
export function updateNumTracking(tag, goto, url) {
  //正式地址：https://activity.xhsxmt.com/
  $.ajax({
    url: url + "activity/num/updateNum",
    type: "POST",
    data: JSON.stringify({
      secretKey: "e9469538b0623783f38c585821459454",
      nm: tag, //"2021守护360-首页浏览量" //记得修改
      ip: "",
    }),
    xhrFields: { withCredentials: true },
    dataType: "json",
    contentType: "application/json",
    success: (data) => {
      data = JSON.parse(data);
      if (data && data.data) {
        if (goto != "") {
          if (navigator.userAgent.indexOf("XinhuasheBrower") > -1) {
            //如果是在新华社客户端内打开，则跳转goto
            location.href = goto;
          } else {
            //如果不在端内，看情况是否跳转
            //goApp(no);
            //location.href = goto;
          }
        }
      }
    },
  });
}
// 复制文字到剪贴板，兼容
let copyTextToClipboard = (e) => {
  var t = document.createElement("textarea");
  (t.value = e),
    t.setAttribute("readonly", ""),
    (t.style.contain = "strict"),
    (t.style.position = "absolute"),
    (t.style.left = "-9999px"),
    (t.style.fontSize = "12pt");
  var n = document.getSelection(),
    r = !1;
  n.rangeCount > 0 && (r = n.getRangeAt(0)),
    document.body.appendChild(t),
    t.select(),
    (t.selectionStart = 0),
    (t.selectionEnd = e.length);
  var o = !1;
  try {
    o = document.execCommand("copy");
  } catch (e) {}
  return (
    document.body.removeChild(t), r && (n.removeAllRanges(), n.addRange(r)), o
  );
};

function getAppVersion(ua) {
  var versionMatch = ua.match(/appVersion:\d+\.\d+\.\d+/);
  var versionStr = versionMatch && versionMatch[0];
  if (!!versionStr) {
    return versionStr.split(":")[1];
  } else {
    return "";
  }
}

//判断设备系统
let versions = (function () {
  let u = navigator.userAgent;
  let appV = getAppVersion(u);
  return {
    trident: u.indexOf("Trident") > -1,
    presto: u.indexOf("Presto") > -1,
    webKit: u.indexOf("AppleWebKit") > -1,
    gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") === -1,
    mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/),
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
    android: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1,
    iPhone: u.indexOf("iPhone") > -1 || u.indexOf("Mac") > -1,
    iPad: u.indexOf("iPad") > -1,
    webApp: u.indexOf("Safari") === -1,
    weixin: u.match(/micromessenger/i),
    appVersion: appV,
    xyapp: u.indexOf("XinhuasheBrower") > -1,
    qq: u.indexOf("QQ/") > -1,
    qqBrowser: u.indexOf("MQQBrowser") > -1,
    wechat: u.indexOf("MicroMessenger/") > -1,
  };
})();

//拼接url query参数
let spliceQuery = (querys) => {
  if ($.type(querys) == "object") {
    let urlquery = "";
    for (let key in querys) {
      urlquery += key + "=" + querys[key] + "&";
    }
    return urlquery.slice(0, urlquery.length - 1);
  }
};

export let combineAppLink = (name, obj) => {
  let url = "xhpfm://" + name + (!!obj ? "/?" + spliceQuery(obj) : "");
  let linkUrl = "https://d.xinhuaxmt.com";
  let userAgent = window.navigator.userAgent.toLocaleLowerCase();
  let isWx = !!userAgent.indexOf("micromessenger") > -1;
  copyTextToClipboard(url);

  if (versions.ios || versions.iphone || versions.iPad) {
    let start = userAgent.indexOf("os ");
    let versions = +userAgent.substr(start + 3, 3).replace("_", ".");
    if (versions >= 9) {
      return (
        linkUrl +
        "?url=" +
        "xhpfm://" +
        name +
        (!!obj ? "/?" + spliceQuery(obj) : "")
      );
    } else if (isWx) {
      return (
        apiurl.ios +
        "&ios_schema=" +
        encodeURIComponent(
          "xhpfm://" + name + (!!obj ? "/?" + spliceQuery(obj) : "")
        )
      );
    } else {
      return (
        linkUrl +
        "?url=" +
        "xhpfm://" +
        name +
        (!!obj ? "/?" + spliceQuery(obj) : "")
      );
    }
  } else if (versions.android) {
    return (
      apiurl.android +
      "&android_schema=" +
      encodeURIComponent(
        "xhpfm://" + name + (!!obj ? "/?" + spliceQuery(obj) : "")
      )
    );
  } else {
    return (
      apiurl.android +
      "&android_schema=" +
      encodeURIComponent(
        "xhpfm://" + name + (!!obj ? "/?" + spliceQuery(obj) : "")
      )
    );
  }
};

export function ifApp(url, nm, appKey, dataUrl) {
  //先判断是否端内,记得修改正式地址
  if (navigator.userAgent.indexOf("XinhuasheBrower") > -1) {
    return getUserInfo(nm, appKey, dataUrl);
  } else {
    //执行函数，唤起客户端或者跳转下载页
    location.href = combineAppLink("light", {
      id: "",
      newstype: 1004, //轻应用稿件1004
      link: url, // h5地址
      title: nm, // h5title
    });
  }
}

function getUserInfo(nm, appKey, dataUrl) {
  var openid;
  var str = "";
  let data = null;
  window.xyJSBridgeIn = {};
  window.xyJSBridgeIn.postUserInfo = function (res) {
    console.log("用户信息:" + res);
    console.log(JSON.stringify(res));
    localStorage.setItem("userInfo", JSON.stringify(res));
    //在ios端与安卓端 返回的结构有区分-兼容方式
    var { openId, isRegister } = res.data || res;
    openid = openId;
    console.log("当前openid是:" + openid);
    var id = "";
    if (res.isRegister) {
      str = "nickName=" + res.nickName + "&avatar=" + res.uiHeadImage;
    } else if (res.data && res.data.isRegister) {
      str = "nickName=" + res.data.nickName + "&avatar=" + res.data.uiHeadImage;
    }
    var flag = false;
    if (res.isRegister == 1) {
      flag = true;
      id = res.openId;
      //str = "nickName="+res.nickName+"&avatar="+res.uiHeadImage;
    } else if (res.data && res.data.isRegister == 1) {
      flag = true;
      id = res.data.openId;
      //str = "nickName="+res.data.nickName+"&avatar="+res.data.uiHeadImage;
    }
    if (flag) {
      $.ajax({
        url: dataUrl + "activity/num/updateNum", //activity.xhsxmt.com
        type: "POST",
        data: JSON.stringify({
          secretKey: "e9469538b0623783f38c585821459454",
          nm:'2021最美基层民警投票-新增注册用户',
          ip: (returnCitySN && returnCitySN["cip"]) || "",
        }),
        dataType: "json",
        contentType: "application/json",
        success: function (data) {
          data = JSON.parse(data);
        },
      });
    }
    if (nm != "") {
      clickNum(nm, "" + "?" + str);
    } else {
      location.href = "" + "?" + str;
    }
    console.log("str" + str);
  };

  window.xyJSBridge &&
    window.xyJSBridge.getUserInfo(
      JSON.stringify({
        appKey: appKey,
      })
    );
}
/**
 *
 * @param {string}tag 活动名字，字符串类型，必填
 * @param {string}goto 跳转url地址 ,若没有则传 ' '
 * @param {string}dataUrl  埋点url的地址
 * @param {string}dataSecretkey  secretKey的值
 */
let clickNum = (tag, goto, dataUrl, dataSecretkey) => {
  //测试地址
  var url = dataUrl;
  $.ajax({
    url: "https://activity.xhsxmt.com/activity/num/updateNum",
    type: "POST",
    data: JSON.stringify({
      secretKey: dataSecretkey,
      nm: tag,
      // ip:  returnCitySN && returnCitySN["cip"] || '',
      ip: "",
    }),
    xhrFields: { withCredentials: true },
    dataType: "json",
    contentType: "application/json",
    success: (data) => {
      data = JSON.parse(data);
      if (data && data.data) {
        if (goto != "") {
          if (navigator.userAgent.indexOf("XinhuasheBrower") > -1) {
            //如果是在新华社客户端内打开，则跳转goto
            location.href = goto;
          } else {
            //如果不在端内，看情况是否跳转
            //goApp(no);
            //location.href = goto;
          }
        }
      }
    },
  });
};
