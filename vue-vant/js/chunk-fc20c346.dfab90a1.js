(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fc20c346"],{"365c":function(e,t,n){"use strict";n.d(t,"d",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p})),n.d(t,"g",(function(){return h})),n.d(t,"h",(function(){return m})),n.d(t,"c",(function(){return b})),n.d(t,"f",(function(){return g})),n.d(t,"k",(function(){return v})),n.d(t,"j",(function(){return O})),n.d(t,"i",(function(){return k})),n.d(t,"l",(function(){return N})),n.d(t,"e",(function(){return j}));n("e7e5");var r=n("d399"),i=(n("57e7"),n("9865"),n("456d"),n("ac6a"),n("f3e2"),n("bc3a")),c=n.n(i);function o(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new Promise((function(u,f){if("GET"===i.toUpperCase()){var s="";Object.keys(n).forEach((function(e){s+=e+"="+n[e]+"&"})),s?(s=s.substr(0,s.lastIndexOf("&")),-1===t.indexOf("127.0.0.1")?t+="?"+s+"&randomCode="+a(20):t+="?"+s):-1===t.indexOf("127.0.0.1")&&(t+="?randomCode="+a(20)),e=c.a.get(t)}else"POST"===i.toUpperCase()&&(e=c.a.post(t,n));o&&r["a"].loading({message:"加载中..."}),e.then((function(e){r["a"].clear(),u(e.data)})).catch((function(e){r["a"].clear(),f(e)}))}))}function a(e){for(var t=["0","1","2","3","4","5","6","7","8","9"],n="",r=0;r<e;r++){var i=Math.ceil(9*Math.random());n+=t[i]}return n}var u=n("f121"),f="http://api.7-orange.cn:7300/mock/5def6a2d448e330a1116366e/api/",s=u["baseApi"],l=function(){return o(f+"homeApi")},d=function(){return o(f+"homeApi/categories")},p=function(e){return o(f+"homeApi/categoriesdetail"+e)},h=function(){return o(f+"recipe/allScene")},m=function(e){return o(f+"recipe/menulist"+e)},b=function(){return o(f+"cart/youlike")},g=function(e){return o(f+"send_code",{phoneNumber:e})},v=function(e,t){return o(f+"login_code",{phone:e,captcha:t},"POST")},O=function(){return o(f+"vip")},k=function(){return o(s+"userInfo")},N=function(e,t){return o(s+"login_code",{phone:e,captcha:t},"POST")},j=function(){return o("/mock/login_code.json")}},9865:function(e,t,n){"use strict";var r=n("5ca1"),i=n("6821"),c=n("4588"),o=n("9def"),a=[].lastIndexOf,u=!!a&&1/[1].lastIndexOf(1,-0)<0;r(r.P+r.F*(u||!n("2f21")(a)),"Array",{lastIndexOf:function(e){if(u)return a.apply(this,arguments)||0;var t=i(this),n=o(t.length),r=n-1;for(arguments.length>1&&(r=Math.min(r,c(arguments[1]))),r<0&&(r=n+r);r>=0;r--)if(r in t&&t[r]===e)return r||0;return-1}})},bab7:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"changeNickName"}},[n("van-nav-bar",{staticStyle:{height:"2.5rem"},attrs:{title:e.$t("mine.changeNickName"),fixed:!0,border:!1,"left-arrow":"","right-text":e.$t("mine.confirm")},on:{"click-left":e.onClickLeft,"click-right":e.onClickSave}}),n("div",{staticStyle:{"margin-top":"3rem"}},[n("van-cell-group",{attrs:{title:e.$t("mine.nickName")}},[n("van-field",{ref:"field",attrs:{clearable:"",placeholder:e.nickName},model:{value:e.nickName,callback:function(t){e.nickName=t},expression:"nickName"}})],1)],1)],1)},i=[],c=(n("1c01"),n("58b2"),n("8e6e"),n("f3e2"),n("d25f"),n("ac6a"),n("456d"),n("e7e5"),n("d399")),o=n("bd86"),a=(n("365c"),n("2f62"));function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(o["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s={data:function(){return{nickName:this.$route.params.nickName}},mounted:function(){this.$refs.field.focus()},components:{},methods:f(f({},Object(a["d"])(["CHANGE_USER_NICK_NAME"])),{},{onClickLeft:function(){this.$router.back()},onClickSave:function(){if(this.nickName.length>0){var e=this.nickName;this.CHANGE_USER_NICK_NAME({nickName:e}),this.$router.back(),Object(c["a"])({message:this.$t("mine.personal"),duration:800})}else Object(c["a"])({message:this.$t("mine.message"),duration:800})}})},l=s,d=(n("f51d"),n("2877")),p=Object(d["a"])(l,r,i,!1,null,"046d9ac4",null);t["default"]=p.exports},e8e5:function(e,t,n){},f121:function(e,t,n){var r=n("f1e0");e.exports=r},f1e0:function(e,t){e.exports={title:"yg-base-mobile",baseUrl:"https://www.xxx.com/",baseApi:"http://172.20.112.101:3000/mock/36/api/",APPID:"1"}},f51d:function(e,t,n){"use strict";var r=n("e8e5"),i=n.n(r);i.a}}]);