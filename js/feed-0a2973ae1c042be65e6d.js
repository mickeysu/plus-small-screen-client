(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{Ld7l:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"p-feed"},[n("nav",{staticClass:"m-box m-head-top m-lim-width m-pos-f m-main m-bb1"},[n("ul",{staticClass:"m-box m-flex-grow1 m-aln-center m-justify-center m-flex-base0 m-head-nav"},[n("router-link",{attrs:{to:{name:"feeds",query:{type:"new"}},tag:"li","active-class":"active",exact:"",replace:""}},[n("a",[e._v("最新")])]),n("router-link",{attrs:{to:{name:"feeds",query:{type:"hot"}},tag:"li","active-class":"active",exact:"",replace:""}},[n("a",[e._v("热门")])]),n("router-link",{attrs:{to:{name:"feeds",query:{type:"follow"}},tag:"li","active-class":"active",exact:"",replace:""}},[n("a",[e._v("关注")])])],1)]),n("jo-load-more",{ref:"loadmore",staticClass:"p-feed-main",on:{onRefresh:e.onRefresh,onLoadMore:e.onLoadMore}},[n("ul",{staticClass:"p-feed-list"},[e._l(e.pinned,function(t,a){return t.id?n("li",{key:"pinned-feed-"+e.feedType+"-"+t.id+"-"+a},[n("feed-card",{attrs:{feed:t,pinned:!0}})],1):e._e()}),e._l(e.feeds,function(t,a){return t.id?n("li",{key:"feed-"+e.feedType+"-"+t.id+"-"+a},[n("feed-card",{attrs:{feed:t}})],1):e._e()})],2)]),n("foot-guide")],1)},d=[],i=n("iv4g"),s=(n("Z2Ku"),n("ANOK")),o=n("ldg+"),f=["new","hot","follow"],r={name:"FeedList",components:{FeedCard:s["a"]},data:function(){return{ad:[],pinned:[],newFeeds:[],hotFeeds:[],followFeeds:[]}},computed:{feedType:function(){return this.$route.query.type},feeds:{get:function(){return this.feedType?this.$data["".concat(this.feedType,"Feeds")]:[]},set:function(e){this.$data["".concat(this.feedType,"Feeds")]=e}},maxId:function(){var e=this.feeds.length;return e?this.feeds[e-1].id:0}},watch:{feedType:function(e,t){f.includes(e)&&t&&this.$refs.loadmore.beforeRefresh()}},created:function(){this.onRefresh(function(){})},methods:{onRefresh:function(e){var t=this;o["i"](this.feedType,15).then(function(n){var a=n.data,d=a.ad,i=void 0===d?[]:d,s=a.pinned,o=void 0===s?[]:s,f=a.feeds,r=void 0===f?[]:f;t.ad=i,t.feeds=r,t.pinned=o,e(r.length<15)})},onLoadMore:function(e){var t=this,n="hot"===this.feedType?this.hotFeeds.length:this.maxId;o["i"](this.feedType,15,n).then(function(n){var a=n.data,d=a.ad,s=void 0===d?[]:d,o=a.pinned,f=void 0===o?[]:o,r=a.feeds,c=void 0===r?[]:r;t.ad=s,t.pinned=f,t.feeds=Object(i["a"])(t.feeds).concat(Object(i["a"])(c)),e(c.length<15)})}}},c=r,l=(n("ndjW"),n("KHd+")),u=Object(l["a"])(c,a,d,!1,null,null,null);t["default"]=u.exports},ndjW:function(e,t,n){"use strict";var a=n("qQhT"),d=n.n(a);d.a},qQhT:function(e,t,n){}}]);
//# sourceMappingURL=feed-0a2973ae1c042be65e6d.js.map