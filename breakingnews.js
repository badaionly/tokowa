!function(x){x.breakingNews=function(t,e){var i={effect:"scroll",direction:"ltr",fontSize:"default",themeColor:"default",background:"default",source:"html",rss2jsonApiKey:"",play:!0,delayTimer:4E3,scrollSpeed:2,stopOnHover:!0,position:"auto",zIndex:99999},o=this;function l(){var t,e;0<n.length&&("rtl"==o.settings.direction?f.css({right:n.outerWidth()}):f.css({left:n.outerWidth()})),0<r.length&&(t=r.outerWidth(),"rtl"==o.settings.direction?f.css({left:t}):f.css({right:t})),"scroll"===o.settings.effect&&
(e=0,g.each(function(){e+=x(this).outerWidth()}),e+=10,h.css({width:e}))}function c(){switch(y=!0,o.settings.effect){case "typography":h.find("li").hide(),h.find("li").eq(a).width(30).show(),h.find("li").eq(a).animate({width:"100%",opacity:1},1500);break;case "fade":h.find("li").hide(),h.find("li").eq(a).fadeIn();break;case "slide-down":k<=1?h.find("li").animate({top:30,opacity:0},300,function(){x(this).css({top:-30,opacity:0,display:"block"}),x(this).animate({top:0,opacity:1},300)}):(h.find("li:visible").animate({top:30,
opacity:0},300,function(){x(this).hide()}),h.find("li").eq(a).css({top:-30,opacity:0}).show(),h.find("li").eq(a).animate({top:0,opacity:1},300));break;case "slide-up":k<=1?h.find("li").animate({top:-30,opacity:0},300,function(){x(this).css({top:30,opacity:0,display:"block"}),x(this).animate({top:0,opacity:1},300)}):(h.find("li:visible").animate({top:-30,opacity:0},300,function(){x(this).hide()}),h.find("li").eq(a).css({top:30,opacity:0}).show(),h.find("li").eq(a).animate({top:0,opacity:1},300));break;
case "slide-left":k<=1?h.find("li").animate({left:"50%",opacity:0},300,function(){x(this).css({left:-50,opacity:0,display:"block"}),x(this).animate({left:0,opacity:1},300)}):(h.find("li:visible").animate({left:"50%",opacity:0},300,function(){x(this).hide()}),h.find("li").eq(a).css({left:-50,opacity:0}).show(),h.find("li").eq(a).animate({left:0,opacity:1},300));break;case "slide-right":k<=1?h.find("li").animate({left:"-50%",opacity:0},300,function(){x(this).css({left:"50%",opacity:0,display:"block"}),
x(this).animate({left:0,opacity:1},300)}):(h.find("li:visible").animate({left:"-50%",opacity:0},300,function(){x(this).hide()}),h.find("li").eq(a).css({left:"50%",opacity:0}).show(),h.find("li").eq(a).animate({left:0,opacity:1},300));break;default:h.find("li").hide(),h.find("li").eq(a).show()}}function d(){if(b=!1,o.settings.play)switch(o.settings.effect){case "scroll":"rtl"===o.settings.direction?h.width()>f.width()&&q():h.width()>f.width()&&v();break;default:o.pause(),w=setInterval(function(){o.next()},
o.settings.delayTimer)}}o.settings={};var s=x(t),n=s.children(".bn-label"),f=s.children(".bn-news"),h=f.children("ul"),g=h.children("li"),r=s.children(".bn-controls"),u=r.find(".bn-prev").parent(),p=r.find(".bn-action").parent(),m=r.find(".bn-next").parent(),b=!1,y=!0,k=h.children("li").length,a=0,w=!1,v=function(){var t=parseFloat(h.css("marginLeft"));t-=o.settings.scrollSpeed/2,h.css({marginLeft:t}),t<=-h.find("li:first-child").outerWidth()&&(h.find("li:first-child").insertAfter(h.find("li:last-child")),
h.css({marginLeft:0})),!1===b&&(window.requestAnimationFrame&&requestAnimationFrame(v)||setTimeout(v,16))},q=function(){var t=parseFloat(h.css("marginRight"));t-=o.settings.scrollSpeed/2,h.css({marginRight:t}),t<=-h.find("li:first-child").outerWidth()&&(h.find("li:first-child").insertAfter(h.find("li:last-child")),h.css({marginRight:0})),!1===b&&(window.requestAnimationFrame&&requestAnimationFrame(q)||setTimeout(q,16))};o.init=function(){if(o.settings=x.extend({},i,e),"fixed-top"===o.settings.position?
s.addClass("bn-fixed-top").css({"z-index":o.settings.zIndex}):"fixed-bottom"===o.settings.position&&s.addClass("bn-fixed-bottom").css({"z-index":o.settings.zIndex}),"default"!=o.settings.fontSize&&s.css({"font-size":o.settings.fontSize}),"default"!=o.settings.themeColor&&(s.css({"border-color":o.settings.themeColor,color:o.settings.themeColor}),n.css({background:o.settings.themeColor})),"default"!=o.settings.background&&s.css({background:o.settings.background}),s.css({height:o.settings.height,"line-height":o.settings.height-
2*o.settings.borderWidth+"px","border-radius":o.settings.radius,"border-width":o.settings.borderWidth}),g.find(".bn-seperator").css({height:o.settings.height-2*o.settings.borderWidth}),s.addClass("bn-effect-"+o.settings.effect+" bn-direction-"+o.settings.direction),l(),"object"==typeof o.settings.source)switch(o.settings.source.type){case "rss":"rss2json"===o.settings.source.usingApi?((a=new XMLHttpRequest).onreadystatechange=function(){if(4==a.readyState&&200==a.status){var t=JSON.parse(a.responseText),
e="",i="";switch(o.settings.source.showingField){case "title":i="title";break;case "description":i="description";break;case "link":i="link";break;default:i="title"}var s="";void 0!==o.settings.source.seperator&&(o.settings.source.seperator,1)&&(s=o.settings.source.seperator);for(var n=0;n<t.items.length;n++)o.settings.source.linkEnabled?e+='<li><a target="'+o.settings.source.target+'" href="'+t.items[n].link+'">'+s+t.items[n][i]+"</a></li>":e+="<li><a>"+s+t.items[n][i]+"</a></li>";h.empty().append(e),
g=h.children("li"),k=h.children("li").length,l(),"scroll"!=o.settings.effect&&c(),g.find(".bn-seperator").css({height:o.settings.height-2*o.settings.borderWidth}),d()}},a.open("GET","https://api.rss2json.com/v1/api.json?rss_url="+o.settings.source.url+"&count="+o.settings.source.limit+"&api_key="+o.settings.source.rss2jsonApiKey,!0),a.send()):((r=new XMLHttpRequest).open("GET","https://query.yahooapis.com/v1/public/yql?q="+encodeURIComponent('select * from rss where url="'+o.settings.source.url+'" limit '+
o.settings.source.limit)+"&format=json",!0),r.onreadystatechange=function(){if(4==r.readyState)if(200==r.status){var t=JSON.parse(r.responseText),e="",i="";switch(o.settings.source.showingField){case "title":i="title";break;case "description":i="description";break;case "link":i="link";break;default:i="title"}var s="";"undefined"!=o.settings.source.seperator&&void 0!==o.settings.source.seperator&&(s=o.settings.source.seperator);for(var n=0;n<t.query.results.item.length;n++)o.settings.source.linkEnabled?
e+='<li><a target="'+o.settings.source.target+'" href="'+t.query.results.item[n].link+'">'+s+t.query.results.item[n][i]+"</a></li>":e+="<li><a>"+s+t.query.results.item[n][i]+"</a></li>";h.empty().append(e),g=h.children("li"),k=h.children("li").length,l(),"scroll"!=o.settings.effect&&c(),g.find(".bn-seperator").css({height:o.settings.height-2*o.settings.borderWidth}),d()}else h.empty().append('<li><span class="bn-loader-text">'+o.settings.source.errorMsg+"</span></li>")},r.send(null));break;case "json":x.getJSON(o.settings.source.url,
function(t){var e="",i="undefined"===o.settings.source.showingField?"title":o.settings.source.showingField,s="";void 0!==o.settings.source.seperator&&(o.settings.source.seperator,1)&&(s=o.settings.source.seperator);for(var n=0;n<t.length&&!(n>=o.settings.source.limit);n++)o.settings.source.linkEnabled?e+='<li><a target="'+o.settings.source.target+'" href="'+t[n].link+'">'+s+t[n][i]+"</a></li>":e+="<li><a>"+s+t[n][i]+"</a></li>","undefined"===t[n][i]&&console.log('"'+i+'" does not exist in this json.');
h.empty().append(e),g=h.children("li"),k=h.children("li").length,l(),"scroll"!=o.settings.effect&&c(),g.find(".bn-seperator").css({height:o.settings.height-2*o.settings.borderWidth}),d()});break;default:console.log('Please check your "source" object parameter. Incorrect Value')}else"html"===o.settings.source?("scroll"!=o.settings.effect&&c(),d()):console.log('Please check your "source" parameter. Incorrect Value');var r,a;o.settings.play?p.find("span").removeClass("bn-play").addClass("bn-pause"):
p.find("span").removeClass("bn-pause").addClass("bn-play"),s.on("mouseleave",function(t){var e=x(document.elementFromPoint(t.clientX,t.clientY)).parents(".bn-breaking-news")[0];x(this)[0]!==e&&(!0===o.settings.stopOnHover?!0===o.settings.play&&o.play():!0===o.settings.play&&!0===b&&o.play())}),s.on("mouseenter",function(){!0===o.settings.stopOnHover&&o.pause()}),m.on("click",function(){y&&(y=!1,o.pause(),o.next())}),u.on("click",function(){y&&(y=!1,o.pause(),o.prev())}),p.on("click",function(){y&&
(p.find("span").hasClass("bn-pause")?(p.find("span").removeClass("bn-pause").addClass("bn-play"),o.stop()):(o.settings.play=!0,p.find("span").removeClass("bn-play").addClass("bn-pause")))}),x(window).on("resize",function(){s.width()<480?(n.hide(),"rtl"==o.settings.direction?f.css({right:0}):f.css({left:0})):(n.show(),"rtl"==o.settings.direction?f.css({right:n.outerWidth()}):f.css({left:n.outerWidth()}))})},o.pause=function(){b=!0,clearInterval(w)},o.stop=function(){b=!0,o.settings.play=!1},o.play=
function(){d()},o.next=function(){!function(){switch(o.settings.effect){case "scroll":"rtl"===o.settings.direction?h.stop().animate({marginRight:-h.find("li:first-child").outerWidth()},300,function(){h.find("li:first-child").insertAfter(h.find("li:last-child")),h.css({marginRight:0}),y=!0}):h.stop().animate({marginLeft:-h.find("li:first-child").outerWidth()},300,function(){h.find("li:first-child").insertAfter(h.find("li:last-child")),h.css({marginLeft:0}),y=!0});break;default:k<=++a&&(a=0),c()}}()},
o.prev=function(){!function(){switch(o.settings.effect){case "scroll":"rtl"===o.settings.direction?(0<=parseInt(h.css("marginRight"),10)&&(h.css({"margin-right":-h.find("li:last-child").outerWidth()}),h.find("li:last-child").insertBefore(h.find("li:first-child"))),h.stop().animate({marginRight:0},300,function(){y=!0})):(0<=parseInt(h.css("marginLeft"),10)&&(h.css({"margin-left":-h.find("li:last-child").outerWidth()}),h.find("li:last-child").insertBefore(h.find("li:first-child"))),h.stop().animate({marginLeft:0},
300,function(){y=!0}));break;default:--a<0&&(a=k-1),c()}}()},o.init()},x.fn.breakingNews=function(e){return this.each(function(){var t;null==x(this).data("breakingNews")&&(t=new x.breakingNews(this,e),x(this).data("breakingNews",t))})}}(jQuery);
