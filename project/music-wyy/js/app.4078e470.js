(function(t){function e(e){for(var s,o,r=e[0],c=e[1],l=e[2],d=0,f=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},a={app:0},i=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0c15":function(t,e,n){"use strict";var s=n("99d9"),a=n.n(s);a.a},"0e01":function(t,e,n){"use strict";var s=n("b80d"),a=n.n(s);a.a},2395:function(t,e,n){},"2c0d":function(t,e,n){"use strict";var s=n("7e7a"),a=n.n(s);a.a},"2ce5":function(t,e,n){},4045:function(t,e,n){t.exports=n.p+"img/loading.b4c7c196.svg"},4419:function(t,e,n){"use strict";var s=n("2ce5"),a=n.n(s);a.a},"46af":function(t,e,n){"use strict";var s=n("d11d"),a=n.n(s);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=(n("d3b7"),n("bc3a")),i=n.n(a),o={baseURL:"https://music.kele8.cn"},r=i.a.create(o);r.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),r.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t,e){t.axios=r,window.axios=r,Object.defineProperties(t.prototype,{axios:{get:function(){return r}},$axios:{get:function(){return r}}})},s["a"].use(Plugin);Plugin;var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"},on:{touchstart:t.touchstart,touchend:t.touchend}},[n("keep-alive",[n("router-view",{attrs:{currentSong:t.currentSong},on:{"tanslate-song":function(e){t.currentSong=e}}})],1),t.currentSong?n("PlayBar",{attrs:{currentSong:t.currentSong},on:{"tanslate-song":function(e){t.currentSong=e}}}):t._e()],1)},l=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"playbar"},[n("div",{staticClass:"playbarbottom",on:{click:function(e){t.showFullscreen=!0}}},[n("img",{staticClass:"thumb",class:{active:t.playing},attrs:{src:t.imgHandle,alt:""}}),n("div",{staticClass:"info"},[n("h5",[t._v(t._s(t.currentSong.name))]),t.parsedLyric?n("span",{staticClass:"word"},[t._v(t._s(t.parsedLyric[t.currentLyricIndex].text))]):t._e()]),n("div",{staticClass:"progress",on:{click:function(e){e.stopPropagation(),t.playing=!t.playing}}},[n("canvas",{attrs:{width:"36",height:"36",id:"canvas"}}),t.playing?n("i",{staticClass:"fa fa-pause"}):n("i",{staticClass:"fa fa-play"})]),n("div",{staticClass:"playlist",on:{click:function(e){e.stopPropagation(),t.showPlayList=!t.showPlayList}}},[n("i",{staticClass:"fa fa-bars",attrs:{"aria-hidden":"true"}})])]),n("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated slideInUp","leave-active-class":"animated slideOutDown"}},[t.showPlayList?n("ul",{staticClass:"defaultPlayList"},t._l(t.defaultPlayList,(function(e,s){return n("SongItem",{key:s,attrs:{songItem:e,options:{order:s,info:!1},currentSong:t.currentSong},on:{"tanslate-song":function(e){return t.$emit("tanslate-song",e)}}})})),1):t._e()]),n("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showFullscreen,expression:"showFullscreen"}],staticClass:"fullscreenplay"},[n("div",{staticClass:"mask",style:{backgroundImage:"url("+t.currentSong.picUrl+")"}}),n("header",{staticClass:"hea-top"},[n("i",{staticClass:"fa fa-arrow-left",on:{click:function(e){t.showFullscreen=!1}}}),n("span",[t._v(t._s(t.currentSong.name))])]),n("div",{staticClass:"volume"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.volume,expression:"volume"}],attrs:{type:"range",max:"100",min:"0"},domProps:{value:t.volume},on:{__r:function(e){t.volume=e.target.value}}}),n("div",{staticClass:"tis"},[t._v("音量:")]),n("div",{staticClass:"voSeen"},[n("div",{style:{width:t.volume+"%"}}),n("span")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showCircle,expression:"showCircle"}],staticClass:"circle",class:{active:t.playing},on:{click:function(e){t.showCircle=!1}}},[n("div",{staticClass:"needle"}),n("div",{staticClass:"glue"},[n("img",{attrs:{src:t.currentSong.picUrl,alt:""}})])]),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.showCircle,expression:"!showCircle"}],staticClass:"lyric-box",on:{click:function(e){t.showCircle=!0}}},[n("ul",{staticClass:"scroll",style:{transform:"translateY("+28*-t.currentLyricIndex+"px)"}},t._l(t.parsedLyric,(function(e,s){return n("li",{key:s,class:{active:s===t.currentLyricIndex}},[t._v(t._s(e.text))])})),0)]),n("footer",[n("div",{staticClass:"foo-top"},[n("span",[t._v(t._s(t.itemsnow))]),n("div",{staticClass:"ip"},[n("div",{staticClass:"jind"},[n("div",{style:{width:t.sofp+"%"}}),n("span")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.sofp,expression:"sofp"}],attrs:{type:"range",max:"100",min:"0"},domProps:{value:t.sofp},on:{input:t.Speedofprogress,__r:function(e){t.sofp=e.target.value}}})]),n("span",[t._v(t._s(t.timeToMinute(t.currentSong.song.duration/1e3)))])]),n("div",{staticClass:"botton"},[n("div",{staticClass:"l",on:{click:function(e){return t.goToMusic(!1)}}},[n("i",{staticClass:"fa fa-arrow-left"})]),n("div",{staticClass:"open",on:{click:function(e){t.playing=!t.playing}}},[t.playing?n("i",{staticClass:"fa fa-pause"}):n("i",{staticClass:"fa fa-play"})]),n("div",{staticClass:"r",on:{click:t.goToMusic}},[n("i",{staticClass:"fa fa-arrow-right"})])])])])]),n("audio",{attrs:{src:t.currentSongUrl,autoplay:"",controls:"",height:"30"}})],1)},d=[],f=(n("a15b"),n("d81d"),n("fb6a"),n("45fc"),n("b0c0"),n("a9e3"),n("b680"),n("ac1f"),n("466d"),n("841c"),n("1276"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"songitem",on:{click:function(e){return t.$emit("tanslate-song",t.songItem)}}},[void 0!==t.options.order?s("span",{staticClass:"order"},[t._v(t._s(t.options.order+1))]):t._e(),s("div",{staticClass:"main",style:{marginLeft:void 0!==t.options.order?"0px":"10px"}},[s("h3",[t._v(t._s(t.songItem.name))]),!1!==t.options.info?s("div",{staticClass:"info"},[s("i",{staticClass:"icon icon-quality"}),s("span",{staticClass:"artists"},[t._v(t._s(t.joinArtists(t.songItem.song.artists)))]),s("span",{staticClass:"album"},[t._v("-"+t._s(t.songItem.song.album.name))])]):t._e()]),t.currentSong&&t.songItem.id===t.currentSong.id?s("img",{staticClass:"icon icon-play",staticStyle:{background:"none"},attrs:{src:n("803f"),alt:""}}):s("i",{staticClass:"icon icon-play"})])}),h=[],g={props:{options:Object,songItem:Object,currentSong:Object},methods:{joinArtists:function(t){return t.map((function(t){return t.name})).join(" / ")}}},p=g,m=(n("0e01"),n("2877")),v=Object(m["a"])(p,f,h,!1,null,"5efecc41",null),y=v.exports,w={props:{currentSong:Object},components:{SongItem:y},data:function(){return{sofp:0,volume:100,itemsnow:"00:00",playing:!1,showFullscreen:!1,showCircle:!1,currentLyric:null,currentLyricIndex:0,showPlayList:!1,defaultPlayList:[this.currentSong]}},methods:{goToMusic:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t?this.$emit("tanslate-song",this.defaultPlayList[this.musicIndex+1>=this.defaultPlayList.length-1?0:this.musicIndex+1]):this.$emit("tanslate-song",this.defaultPlayList[this.musicIndex-1<=0?this.defaultPlayList.length-1:this.musicIndex-1])},joinArtists:function(t){return t.map((function(t){return t.name})).join(" / ")},drawProgress:function(){var t=this,e=this.$el.querySelector("#canvas"),n=this.$el.querySelector("audio"),s=this.currentSong.song.duration;console.log(s),n.ontimeupdate=function(){var a,i=e.getContext("2d");i.clearRect(0,0,36,36),i.beginPath(),i.arc(18,18,17,0,2*Math.PI),i.closePath(),i.strokeStyle="gray",i.lineWidth="1",i.stroke(),i.beginPath(),i.arc(18,18,17,-.5*Math.PI,-.5*Math.PI+2*Math.PI*(1e3*n.currentTime/s)),i.strokeStyle="rgba(255,0,0,0.7)",i.lineWidth="1",i.stroke();for(var o=0;o<t.parsedLyric.length;o++)if(n.currentTime+.15<t.parsedLyric[o].time){a=o-1;break}void 0===a&&(a=t.parsedLyric.length-1),t.currentLyricIndex=a,t.sofp=Math.floor(1e3*n.currentTime/s*100)}},getLyric:function(){var t=this,e=window.localStorage.getItem("lyric"+this.currentSong.id);e?this.currentLyric=e:window.axios.get("lyric",{params:{id:this.currentSong.id}}).then((function(e){t.currentLyric=e.data.lrc.lyric,window.localStorage.setItem("lyric"+t.currentSong.id,e.data.lrc.lyric)}))},timeToMinute:function(t){if(!t)return null;var e;if(t>-1){var n=Math.floor(t/3600),s=Math.floor(t/60)%60,a=t%60;e=n<10?"0"+n+":":n+":",s<10&&(e+="0"),e+=s+":",a<10&&(e+="0"),e+=a.toFixed(2)}return e=e.substring(0,e.length-3),e=e.slice(3),e},Speedofprogress:function(){var t=this.currentSong.song.duration,e=this.$el.querySelector("audio"),n=t*(this.sofp/100)/1e3;e.currentTime=n,this.itemsnow=this.timeToMinute(e.currentTime)}},computed:{musicIndex:function(){for(var t=this.defaultPlayList,e=this.currentSong,n=0;n<t.length;n++)if(t[n].id==e.id)return n;return 0},currentSongUrl:function(){return this.currentSong?"https://music.163.com/song/media/outer/url?id=".concat(this.currentSong.id,".mp3"):""},parsedLyric:function(){return this.currentLyric?this.currentLyric.split("\n").map((function(t){var e=/\d{2}:\d{2}\.\d+/i;if(-1!==t.search(e)){var n=t.match(e)[0],s=n.substr(0,2),a=n.substr(3,2),i=n.substr(5);return{time:60*Number(s)+Number(a)+Number(i),text:t.substr(11)||"---------"}}return{}})):null},imgHandle:function(){return this.currentSong.picUrl?this.currentSong.picUrl:"../assets/default.jpg"}},mounted:function(){var t=this,e=this.$el.querySelector("audio");this.drawProgress(),e.onplay=function(){console.log("开始播放"),t.playing=!0},e.onpause=function(){console.log("暂停播放"),t.playing=!1},e.onended=function(){t.goToMusic()}},watch:{volume:function(){var t=this.$el.querySelector("audio");t.volume=this.volume/100},sofp:function(){var t=this.$el.querySelector("audio");this.itemsnow=this.timeToMinute(t.currentTime)},playing:function(t){var e=this.$el.querySelector("audio");t?e.play():e.pause()},currentSong:function(t){this.getLyric();var e=this.defaultPlayList.some((function(e){return e.id==t.id}));console.log(e),e||this.defaultPlayList.push(t)}},created:function(){this.getLyric()}},_=w,S=(n("ad28"),Object(m["a"])(_,u,d,!1,null,"ff1e89d8",null)),C=S.exports,b={components:{PlayBar:C},data:function(){return{searson:null,currentSong:null,touchstartX:0}},methods:{touchstart:function(t){this.touchstartX=t.changedTouches[0].clientX,this.touchstartY=t.changedTouches[0].clientY},touchend:function(t){t.changedTouches[0].clientX-this.touchstartX>50&&(this.touchstartX=0,this.touchstartY=0,this.routerBack()),t.changedTouches[0].clientX-this.touchstartX<-50&&this.routerForward()},routerBack:function(){this.$router.back()},routerForward:function(){this.$router.forward()}}},L=b,k=(n("7c55"),Object(m["a"])(L,c,l,!1,null,null,null)),x=k.exports,D=n("8c4f"),P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[t.showLoading?s("div",{staticClass:"loading"},[s("img",{attrs:{src:n("4045"),alt:""}})]):t._e(),s("HomeLink"),s("div",{staticClass:"personalized"},[s("CardTitle",[t._v("推荐歌单")]),s("ul",{staticClass:"songlist"},t._l(t.randomPersonalizeds(),(function(e,n){return s("SongListCard",{key:n,attrs:{currentSong:t.currentSong,songList:e}})})),1)],1),s("div",{staticClass:"newsong"},[s("CardTitle",[t._v("推荐音乐")]),s("ul",t._l(t.newsongs,(function(e,n){return s("SongItem",{key:n,attrs:{songItem:e,options:{info:!0},currentSong:t.currentSong},on:{"tanslate-song":function(e){return t.$emit("tanslate-song",e)}}})})),1)],1)],1)},j=[],I=n("2909"),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[n("h3",[t._t("default")],2)])},$=[],H=(n("d9e9"),{}),T=Object(m["a"])(H,O,$,!1,null,"18beec85",null),M=T.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"card",on:{click:function(e){return t.routerToPlayListPage(t.songList.id)}}},[n("div",{staticClass:"thumb"},[n("img",{attrs:{src:t.songList.picUrl}}),n("span",[n("i",{staticClass:"fa fa-headphones"}),t._v(" "+t._s(t.playCountParse(t.songList.playCount))+" ")])]),n("h5",[t._v(t._s(t.songList.name))])])},U=[],q={props:{songList:{type:Object,default:function(){return{id:4969079749,type:0,name:"欧美 | 欢快小调拯救你的不开心",copywriter:"编辑推荐：音乐是治愈人心的良药",picUrl:"https://p2.music.126.net/nflx5ZxSSPivvGnyS5WRGw==/109951164906376339.jpg",canDislike:!1,trackNumberUpdateTime:1586934907095,playCount:1209355,trackCount:100,highQuality:!1,alg:"featured"}}}},methods:{playCountParse:function(t){return t>1e8?(t/1e8).toFixed(1)+"亿":t>1e4?(t/1e4).toFixed(1)+"万":void 0},routerToPlayListPage:function(t){this.$router.push({path:"playlist",query:{id:t}})}}},E=q,z=(n("46af"),Object(m["a"])(E,N,U,!1,null,"5bc0e794",null)),F=z.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{attrs:{id:"nav"}},[n("li",[n("router-link",{attrs:{to:"/"}},[t._v("推荐音乐")])],1),n("li",[n("router-link",{attrs:{to:"/hot"}},[t._v("热歌榜")])],1),n("li",[n("router-link",{attrs:{to:"/search"}},[t._v("搜索")])],1)])},X=[],A={},G=A,R=(n("2c0d"),Object(m["a"])(G,J,X,!1,null,"73a144f5",null)),W=R.exports,B={name:"Home",props:{currentSong:Object},data:function(){return{personalizeds:[],newsongs:[],showLoading:!1}},components:{CardTitle:M,SongListCard:F,HomeLink:W,SongItem:y},methods:{getPersonalized:function(){var t=this;this.axios.get("/personalized").then((function(e){t.personalizeds=e.data.result,window.localStorage.setItem("personalizeds",JSON.stringify({expire:Date.now()+36e5,result:e.data.result}))})).catch((function(t){console.log(t)}))},getNewSong:function(){var t=this;this.axios.get("/personalized/newsong").then((function(e){t.newsongs=e.data.result,window.localStorage.setItem("newsongs",JSON.stringify({expire:Date.now()+36e5,result:e.data.result}))})).catch((function(t){console.log(t)}))},randomPersonalizeds:function(){return Object(I["a"])(this.personalizeds).slice(0,6)}},created:function(){var t=JSON.parse(window.localStorage.getItem("personalizeds"));t&&t.expire>Date.now()?this.personalizeds=t.result:this.getPersonalized();var e=JSON.parse(window.localStorage.getItem("newsongs"));e&&e.expire>Date.now()?this.newsongs=e.result:this.getNewSong()},beforeRouteEnter:function(t,e,n){n((function(t){t.showLoading=!1}))},beforeRouteLeave:function(t,e,n){this.showLoading=!0,n()}},Y=B,Q=(n("de16"),Object(m["a"])(Y,P,j,!1,null,null,null)),Z=Q.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Hot"},[n("HomeLink"),t._m(0),n("div",{staticClass:"list"},t._l(t.HotData,(function(e,s){return n("searchList",{key:s,attrs:{order:s+1,muData:e,currentSong:t.currentSong},on:{"tanslate-song":function(e){return t.$emit("tanslate-song",e)}}})})),1)],1)},V=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inf"},[n("div",{staticClass:"img"},[n("div",{staticClass:"hoticon"}),n("p",[t._v("更新日期")])])])}],tt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"searchList",on:{click:function(e){return t.$emit("tanslate-song",t.fanData)}}},[void 0!==t.order?s("div",{staticClass:"Sumb"},[t._v(t._s(t.order))]):t._e(),s("div",{staticClass:"inf"},[s("h3",[t._v(" "+t._s(t.muData.name)+" ")]),s("h5",[s("span",{staticClass:"sq"},[t._v("1")]),t._v(" "+t._s(t.joinArtists(t.muData.artists))+" ")])]),t.currentSong&&t.muData.id===t.currentSong.id?s("div",{staticClass:"ico-svg"},[s("img",{staticStyle:{background:"none"},attrs:{src:n("803f"),alt:""}})]):s("div",{staticClass:"ico"})])},et=[],nt={name:"searchList",props:{order:Number,songItem:Object,muData:Object,currentSong:Object},data:function(){return{fanData:null}},methods:{joinArtists:function(t){return t.map((function(t){return t.name})).join(" / ")}},created:function(){var t=this;this.axios.get("/song/detail?ids="+this.muData.id).then((function(e){var n=e.data;t.fanData={name:n.songs[0].name,picUrl:n.songs[0].al.picUrl,id:t.muData.id,song:{alias:n.songs[0].ar,album:n.songs[0].al,duration:t.muData.duration}}})).catch((function(t){console.log(t)}))}},st=nt,at=(n("0c15"),Object(m["a"])(st,tt,et,!1,null,null,null)),it=at.exports,ot={name:"Hot",props:{currentSong:Object},data:function(){return{HotData:[],inLonk:null}},methods:{getHotData:function(){var t=this;this.axios.get("/top/list?idx=1").then((function(e){t.HotData=e.data.privileges;for(var n="",s=0;s<20;s++)n+=19!=s?t.HotData[s].id+",":t.HotData[s].id;t.axios.get("/song/detail?ids="+n).then((function(e){t.HotData=e.data.songs,t.inLonk=e;for(var n=0;n<t.HotData.length;n++)t.HotData[n]={name:t.HotData[n].name,picUrl:t.HotData[n].al.picUrl,id:t.HotData[n].id,artists:t.HotData[n].ar}}))})).catch((function(t){console.log(t)}))}},created:function(){this.getHotData()},components:{HomeLink:W,searchList:it}},rt=ot,ct=(n("4419"),Object(m["a"])(rt,K,V,!1,null,null,null)),lt=ct.exports,ut=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Search"},[s("HomeLink"),s("div",{staticClass:"ipkeyword"},[s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],attrs:{type:"text",placeholder:"搜索歌曲、歌手、专辑"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),""!=t.keyword?s("span",{on:{click:function(e){t.keyword=""}}}):t._e()]),""==t.keyword?s("div",{staticClass:"hotSear"},[s("h5",[t._v("热门搜索词")]),s("div",t._l(t.hotSear,(function(e,n){return s("span",{key:n,on:{click:function(n){t.keyword=e.searchWord}}},[t._v(t._s(e.searchWord))])})),0)]):t._e(),""!=t.keyword&&t.recoseen?s("div",{staticClass:"recommend"},[null==t.recommend?s("div",{staticClass:"loing"},[s("img",{attrs:{src:n("4045")}})]):t._e(),s("div",{staticClass:"olone",on:{click:function(e){return t.musicGo(t.keyword)}}},[t._v('搜索:"'+t._s(t.keyword)+'"')]),s("div",{staticClass:"bottom"},t._l(t.recommend,(function(e,n){return s("div",{key:n,on:{click:function(n){return t.musicGo(e.keyword)}}},[t._v(t._s(e.keyword))])})),0)]):t._e(),s("div",{staticClass:"SonList"},[t.longseen?s("div",{staticClass:"loing"},[s("img",{attrs:{src:n("4045")}})]):t._e(),t._l(t.searchList,(function(e,n){return s("thesearchList",{key:n,attrs:{muData:e,currentSong:t.currentSong},on:{"tanslate-song":function(e){return t.$emit("tanslate-song",e)}}})}))],2)],1)},dt=[],ft={name:"Search",props:{currentSong:Object},components:{HomeLink:W,thesearchList:it},data:function(){return{keyword:"",hotSear:null,recommend:null,searchList:null,longseen:!1,recoseen:!0}},watch:{keyword:function(){var t=this;this.recommend=null,this.searchList=null,this.recoseen=!0,""!==this.keyword&&this.axios.get("/search/suggest?keywords="+this.keyword+"&type=mobile").then((function(e){t.recommend=e.data.result.allMatch})).catch((function(t){console.log(t)}))}},methods:{musicGo:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.keyword;this.longseen=!0,this.recoseen=!1,this.searchList=null,this.axios.get("/search?keywords="+e).then((function(e){t.searchList=e.data.result.songs,console.log(e),t.longseen=!1,window.localStorage.setItem("searchList",JSON.stringify({expire:Date.now()+36e5,result:e.data.result.songs}))})).catch((function(t){this.longseen=!1,console.log(t)}))}},created:function(){var t=this;this.axios.get("/search/hot/detail").then((function(e){t.hotSear=e.data.data,window.localStorage.setItem("hotSear",JSON.stringify({expire:Date.now()+36e5,result:e.data.data}))})).catch((function(t){console.log(t)}))}},ht=ft,gt=(n("9ed0"),Object(m["a"])(ht,ut,dt,!1,null,null,null)),pt=gt.exports,mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"palylist"},[t.songListDetail?[n("div",{staticClass:"header"},[n("div",{staticClass:"mask",style:{backgroundImage:"url("+t.songListDetail.coverImgUrl+")"}}),n("div",{staticClass:"fl"},[n("img",{attrs:{src:t.songListDetail.coverImgUrl,alt:""}}),n("span",{staticClass:"playcount"},[n("i",{staticClass:"fa fa-headphones"}),t._v(" "+t._s(t.playCountParse(t.songListDetail.playCount))+" ")]),n("span",{staticClass:"icon"},[t._v("歌单")])]),n("div",{staticClass:"fr"},[n("h3",[t._v(t._s(t.songListDetail.name))]),n("img",{attrs:{src:t.songListDetail.creator.avatarUrl,alt:""}}),n("span",[t._v(t._s(t.songListDetail.creator.nickname))])])]),n("div",{staticClass:"info"},[n("div",{staticClass:"tags"},[n("span",[t._v("标签：")]),t._l(t.songListDetail.tags,(function(e,s){return n("i",{key:s},[t._v(t._s(e))])}))],2),n("div",{staticClass:"desc",class:{show:t.showMoreDesc}},[n("span",[t._v("简介：")]),n("span",[t._v(t._s(t.songListDetail.description))])]),n("div",{staticClass:"more",on:{click:function(e){t.showMoreDesc=!t.showMoreDesc}}},[t.showMoreDesc?n("i",{staticClass:"fa fa-angle-up"}):n("i",{staticClass:"fa fa-angle-down"})])]),n("div",{staticClass:"muList"},[n("div",{staticClass:"top"},[t._v("歌曲列表")]),n("sontSList",{attrs:{tracks:t.songListDetail.tracks},on:{"tanslate-song":function(e){return t.$emit("tanslate-song",e)}}})],1)]:t._e()],2)},vt=[],yt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sibtSList"},t._l(t.tonData,(function(e,s){return n("searchList",{key:s,attrs:{order:s+1,muData:e},on:{"tanslate-song":function(e){return t.$emit("tanslate-song",e)}}})})),1)},wt=[],_t={props:{tracks:Array},components:{searchList:it},data:function(){return{currentSong:null,tonData:[]}},methods:{GetData:function(){this.tonData=[];for(var t=0;t<this.tracks.length;t++)this.tonData.push({name:this.tracks[t].name,picUrl:this.tracks[t].al.picUrl,id:this.tracks[t].id,artists:this.tracks[t].ar})}},watch:{tracks:function(){this.GetData()}}},St=_t,Ct=Object(m["a"])(St,yt,wt,!1,null,null,null),bt=Ct.exports,Lt={data:function(){return{songListId:this.$route.query.id,songListDetail:null,showMoreDesc:!1}},components:{sontSList:bt},methods:{getSongListDetail:function(t){var e=this;this.axios.get("/playlist/detail",{params:{id:t}}).then((function(t){e.songListDetail=t.data.playlist,window.localStorage.setItem("sl-"+e.$route.query.id,JSON.stringify({expire:Date.now()+108e5,result:t.data.playlist}))})).catch((function(t){console.log(t)}))},playCountParse:function(t){return t>1e8?(t/1e8).toFixed(1)+"亿":t>1e4?(t/1e4).toFixed(1)+"万":void 0}},beforeRouteEnter:function(t,e,n){var s=JSON.parse(window.localStorage.getItem("sl-"+t.query.id));s&&s.expire>Date.now()?n((function(e){e.songListId=Number(t.query.id),e.songListDetail=s.playlist})):window.axios.get("/playlist/detail",{params:{id:t.query.id}}).then((function(e){var s=e.data.playlist;window.localStorage.setItem("sl-"+t.query.id,JSON.stringify({expire:Date.now()+108e5,playlist:e.data.playlist})),n((function(e){e.songListId=Number(t.query.id),e.songListDetail=s}))})).catch((function(t){console.log(t)}))}},kt=Lt,xt=(n("93ce"),Object(m["a"])(kt,mt,vt,!1,null,"6d63c693",null)),Dt=xt.exports;s["a"].use(D["a"]);var Pt=[{path:"/",name:"Home",component:Z},{path:"/hot",name:"Hot",component:lt},{path:"/search",name:"Search",component:pt},{path:"/playlist",name:"Playlist",component:Dt,meta:{requiresAuth:!0}}],jt=new D["a"]({routes:Pt}),It=jt;s["a"].config.productionTip=!1,new s["a"]({router:It,render:function(t){return t(x)}}).$mount("#app")},"7c55":function(t,e,n){"use strict";var s=n("2395"),a=n.n(s);a.a},"7e7a":function(t,e,n){},"803f":function(t,e,n){t.exports=n.p+"img/playing.ab1993a5.svg"},"8d91":function(t,e,n){},"93ce":function(t,e,n){"use strict";var s=n("adff"),a=n.n(s);a.a},"99d9":function(t,e,n){},"9e3c":function(t,e,n){},"9ed0":function(t,e,n){"use strict";var s=n("c6f7"),a=n.n(s);a.a},a868:function(t,e,n){},ad28:function(t,e,n){"use strict";var s=n("a868"),a=n.n(s);a.a},adff:function(t,e,n){},b80d:function(t,e,n){},c6f7:function(t,e,n){},d11d:function(t,e,n){},d9e9:function(t,e,n){"use strict";var s=n("9e3c"),a=n.n(s);a.a},de16:function(t,e,n){"use strict";var s=n("8d91"),a=n.n(s);a.a}});
//# sourceMappingURL=app.4078e470.js.map