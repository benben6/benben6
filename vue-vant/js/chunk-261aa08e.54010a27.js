(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-261aa08e"],{26210:function(n,e,t){"use strict";t.r(e);var i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("van-pull-refresh",{attrs:{"success-text":n.$t("common.refreshSuccess")},on:{refresh:n.onRefresh},model:{value:n.refreshing,callback:function(e){n.refreshing=e},expression:"refreshing"}},[t("van-list",{staticClass:"card-box",attrs:{finished:n.finished},on:{load:n.onLoad},model:{value:n.loading,callback:function(e){n.loading=e},expression:"loading"}},[t("div",{staticClass:"card-item-box"},n._l(n.list,(function(e,i){return t("card-item",{key:i,attrs:{data:e},on:{click:function(t){return n.clickHandle(e)}}})})),1)]),t("transition",{attrs:{name:"router-slider",mode:"out-in"}},[t("router-view")],1)],1)},r=[],s=t("2af9"),a={props:{},components:{CardItem:s["a"]},watch:{},data:function(){return{list:[],loading:!1,finished:!1,refreshing:!1}},methods:{clickHandle:function(n){this.$router.push({name:"affairsDetails",query:{title:n.title}})},onLoad:function(){var n=this;setTimeout((function(){n.refreshing&&(n.list=[],n.refreshing=!1);for(var e=0;e<10;e++){var t={index:n.list.length+1,title:n.list.length+1+"工程复工申请"};n.list.push(t)}n.loading=!1,n.list.length>=40&&(n.finished=!0)}),1e3)},onRefresh:function(){this.finished=!1,this.loading=!0,this.onLoad()}}},o=a,c=(t("facc"),t("2877")),u=Object(c["a"])(o,i,r,!1,null,"02f3c326",null);e["default"]=u.exports},"2af9":function(n,e,t){"use strict";t.d(e,"a",(function(){return i})),t.d(e,"b",(function(){return r})),t.d(e,"c",(function(){return s}));var i=function(){return t.e("chunk-8b09234c").then(t.bind(null,"f8ee"))},r=function(){return t.e("chunk-0e8976d4").then(t.bind(null,"a687"))},s=function(){return t.e("chunk-451c239a").then(t.bind(null,"019f"))}},aed4:function(n,e,t){},facc:function(n,e,t){"use strict";var i=t("aed4"),r=t.n(i);r.a}}]);