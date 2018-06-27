/**
 * Created by Administrator on 2018/4/25.
 */

// 轮播图中文字动画
$(".banner .carousel-caption").animate({
    "opacity":1,
    "filter:alpha(opacity)":100,
    "margin-bottom":0
},500);


//视频文字动画
$(".video .des-h2").animate({
    "opacity":1,
    "filter:alpha(opacity)":100,
    "padding-top":0
},500);
//视频动画
$(".video p").animate({
    "opacity":1,
    "filter:alpha(opacity)":100,
    "padding-top":0
},1000);
//当屏幕宽度大于 768px 视频自动播放
var bg_video = document.getElementById("bg_video");
//第一进来播放
videoPlay();
window.onresize = videoPlay;
/**
 * 视频播放条件
 */
function videoPlay() {
    var screenWidth = document.documentElement.clientWidth || document.body.clientWidth;
    var video = document.getElementsByClassName("video")[0];
    if(screenWidth>768){
        bg_video.play();
        bg_video.setAttribute("loop","loop");
    }else{
        bg_video.pause();
      /*  var video_img = document.createElement("img");
        video_img.src = "images/video.png";
        video.appendChild(video_img);
        video_img.style.position = "absolute";
        video_img.style.left = "50%";
        video_img.style.transform = "translateX(-50%)";*/
    }
}

//作品图片蒙版事件
var imgMask = document.getElementsByClassName("img-mask");
for(var i=0;i<imgMask.length;i++){
    (function (i) {
        // 鼠标进入  图片透明度改变
        var img = imgMask[i].getElementsByTagName("img"); // 数组
        imgMask[i].onmouseover = function () {
            for(var j=0;j<imgMask.length;j++){  // 由于是一个个的遍历imgMask 所以当前imgMask的长度为1
                var imgI = imgMask[j].getElementsByTagName("img"); // 数组集合
                imgI[0].style.opacity = "0.2";
            }
            img[0].style.opacity = "1";
        };
        //鼠标离开 透明度为1
        imgMask[i].onmouseout = function () {
            for(var j=0;j<imgMask.length;j++){
                var imgI = imgMask[j].getElementsByTagName("img");
                imgI[0].style.opacity = "1";
            }
        }
    })(i);
}

// 客户需求
$(".to-left").animate({
    "opacity" : 1,
    "padding-left" :0
},2000);
$(".to-right").animate({
    "opacity" : 1,
    "padding-right" :0
},2000);


//返回顶部
var toTop = document.getElementById("to-top");
var begin = 0,end = 0,timer = null;
toTop.onclick = function () {

    scrollTop = scroll().top;
    begin = scrollTop;

    // 清除定时器
    clearInterval(timer);
    // 开启定时器
    timer = setInterval(function () {
        begin = begin + (end - begin)*0.2;

        window.scrollTo(0,begin);
        if(parseInt(begin) === end){
            clearInterval(timer);
        }
    },20);
};

/**
 * 获取屏幕高度
 * @returns {*}
 */
function scroll(){
    if(window.pageXOffset !== null){
        return{
            top: window.pageYOffset
        }

    }else if(document.compatMode === "CSS1Compat"){
        return {
            top : document.documentElement.scrollTop
        }
    }
    return {
        top: document.body.scrollTop
    }
}


// 侧边栏返回顶部
var sideToTop = document.getElementsByClassName("side-top")[0];
sideToTop.onclick = function () {

    scrollTop = scroll().top;
    begin = scrollTop;

    // 清除定时器
    clearInterval(timer);
    // 开启定时器
    timer = setInterval(function () {
        begin = begin + (end - begin)*0.2;

        window.scrollTo(0,begin);
        if(parseInt(begin) === end){
            clearInterval(timer);
        }
    },20);
};

// 分享渠道 透明度改变
var shareImg = document.getElementsByClassName("share-img");

for (var k=0;k<shareImg.length;k++){
    var sImg = shareImg[k];
    sImg.index = k;
    sImg.onmouseover = function () {
        for (var i=0;i<shareImg.length;i++){
            shareImg[i].style.opacity = "0.5";
        }
        shareImg[this.index].style.opacity = "1";
    };
    sImg.onmouseout = function () {
       for(var j=0;j<shareImg.length;j++) {
           shareImg[j].style.opacity = "1";
       }
    };
}