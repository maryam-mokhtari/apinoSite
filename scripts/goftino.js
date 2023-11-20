if (document.getElementById("goftino_w") === null) {
  var Goftino = {
    t: function () {
      return document.getElementById("goftino_w")
    },
    open: function () {
      var a = this.t()
      a && a.contentWindow.openbigwin()
    },
    close: function () {
      var a = this.t()
      a && a.contentWindow.closebigwin()
    },
    sendMessage: function (d) {
      var a = this.t()
      a && a.contentWindow.sendpm_manual(d)
    },
    setWidget: function (d) {
      window.goftino_widgetdata = d
    },
    setUser: function (d) {
      window.goftino_userdata = d
    },
    setUserId: function (d, cb) {
      var a = this.t()
      a && a.contentWindow.set_userid(d, cb)
    },
    setUserData: function (d, cb) {
      var a = this.t()
      a && a.contentWindow.set_userdata(d, cb)
    },
    unsetUserId: function () {
      localStorage.removeItem("goftino")
      localStorage.removeItem("goftino_9Yiuyr")
      window.location.reload()
    },
    getUserId: function () {
      var a = this.t()
      return (a && a.contentWindow.get_userid()) || ""
    },
    getUser: function (d) {
      var a = this.t()
      a && a.contentWindow.getUserData(d)
    },
    toggle: function () {
      var a = this.t()
      a && a.contentWindow.togglewin()
    },
  }
  ;(function () {
    var d = document,
      i = d.createElement("iframe"),
      h =
        '<!DOCTYPE html><html><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport"><link href="https://cdn.goftino.com/static/assets/css/client.css?v=66" rel="stylesheet"><style>#box-chat .left .dc-text,#box-chat .box-header,.cssload-loader div,.avatar span,.dc-text:before,.pressmic,.right .amazingaudioplayer-progress-played,.qa_btn{background:rgb(41,83,248)}.load-older,.emojz div{color:rgb(41,83,248)}#box-chat .avatar img,.reply-op{border-color:rgb(41,83,248)}.reply-op{background:rgba(41,83,248,0.15)}.box-title,.clclose,.left > .dc-text,.qa_btn{color:white}.left .dc-text svg{fill:white}#replybox div svg{fill:rgb(41,83,248)}' +
        ".widget-icon{background: #e9f1ff;padding: 6px;box-shadow: 0 1px 2px rgba(0,0,0,.2);width:50px!important;height:50px!important;}" +
        '#box-widget-icon{float:right}#box-new-message-content .dc-text{float:right;margin-right:50px}.unread-num{right:50px}#box-new-message-content .dc-img{right:0}.sendFormButton{background:rgb(41,83,248);color:white !important}.focus_field{background-image:linear-gradient(rgb(41,83,248),rgb(41,83,248)), linear-gradient(#D2D2D2, #D2D2D2)}</style></head><body><div class="box-new-message"><div id="box-new-message-content"></div></div><div id="box-widget-icon" class="fadeInUp"><div class="widget-icon"><img src="https://cdn.goftino.com/profile/653429ca4fbd6111f96ab539dbgs.png" width="60" height="60" alt="Apino Gap"></div><div class="unread-num"></div></div><div id="box-chat"><div class="box-chat-content"><div id="btn-close-chat"><div><svg fill="#ffffff" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg></div></div><div class="box-header"><div style="width:55px" class="pull-right avatar"><span title="مریم مختاری" data-container="body" rel="tooltip" data-placement="auto left"></span></div><div class="pull-right box-title"><div class="title-name">اپینو پاسخگوی شماست!</div><div class="title-text">سلام وقت به‌خیر</div></div></div><div class="box-body dragandrophandler"><div class="dragandrophandlerbg"><svg fill="#444444" height="100" viewBox="0 0 24 24" width="100" xmlns="http://www.w3.org/2000/svg"><path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"></path></svg><br>برای ارسال فایل ، آنها را بکشید و اینجا رها کنید</div><div id="chatbox"></div></div><div class="box-footer"><div id="replybox"><span><svg fill="#F39814" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg></span></div><div id="emoji" class="collapse"></div><form id="box-send" class="hasmic"><a id="mic" class="mic_perm" rel="tooltip" data-placement="top" data-container="body" title="برای ضبط صدا، فشار داده و نگه دارید"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#bababa"><path d="M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.42 2.72 6.23 6 6.72V22h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/><path d="M0 0h24v24H0z" fill="none"/></svg></a><div id="mictimer"><span></span><div id="recordtime"></div></div><textarea maxlength="2000" id="m" type="text" name="message" placeholder="پیامی بنویسید..." class="form-control"></textarea><div class="fix-content"><a data-toggle="collapse" href="#emoji" class="btn btn-simple btn-emoji"><svg fill="#bababa" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10c5.5,0,10-4.5,10-10S17.5,2,12,2z M12,21c-4.9,0-9-4.1-9-9c0-5,4.1-9,9-9s9,4.3,9,9 C21,16.7,16.8,21,12,21z M15.5,11c0.8,0,1.5-0.7,1.5-1.5S16.3,8,15.5,8S14,8.7,14,9.5S14.7,11,15.5,11z M8.5,11 c0.8,0,1.5-0.7,1.5-1.5S9.3,8,8.5,8S7,8.7,7,9.5S7.7,11,8.5,11z M12,17.5c2.3,0,4.3-1.5,5.1-3.5H6.9C7.7,16,9.7,17.5,12,17.5z"></path></svg></a><a class="btn btn-simple btn-send"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="23" height="23" fill="rgb(41,83,248)"><path d="M22,3,1,12l21,9V14L7,12l15-2Z"></path></svg></a><span class="btn btn-simple btn-file"><span class="fileinput-new"><svg fill="#999999" height="23" viewBox="0 0 24 24" width="23" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"></path></svg></span><input id="upload-input" type="file" name="uploads[]" multiple></span></div></form></div></div></div></body></html>',
      y =
        "#goftino_w{position:fixed;z-index:2000000002;bottom:-300px;right:20px;width:80px;height:80px; border:0;color-scheme:none;}.goftino-wakeup{position:relative;animation:goftinoWakeup 0.4s ease 0s 1 normal both}@keyframes goftinoWakeup{0%{transform:translateY(300px)} 100%{transform:translateY(0)}}#goftino_image_fullscreen{background:rgba(0,0,0,0.8);width:100%;height:100%;z-index:2000000004;position:fixed;top:0;right:0;text-align:center}#goftino_loading_img{background:white;width:40px;height:40px;z-index:10;border-radius:30px;position:absolute;top:calc(50% - 20px);right:calc(50% - 20px);padding:5px}#goftino_image_fullscreen img{margin:auto 0;max-width:90%;max-height:90%;display:inline-block;vertical-align:middle;animation-name:zoomInGoftino;animation-duration:0.4s;animation-fill-mode:both}#goftino_image_fullscreen:before{content:'';display:inline-block;height:100%;vertical-align:middle}#goftino_close_screen,#goftino_dl_image{cursor:pointer;background:rgba(0,0,0,0.8);color:white;width:45px;height:45px;text-align:center;position:absolute;z-index:10;top:30px;border-radius:30px}@-webkit-keyframes zoomInGoftino{0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)} 50%{opacity:1}}@keyframes zoomInGoftino{0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)} 50%{opacity:1}}#goftino_loading_img div{border:5px solid #f3f3f3;border-top:5px solid #00bcd4;border-radius:50%;width:30px;height:30px;animation:spinGoftino 1s linear infinite}@keyframes spinGoftino{0%{transform:rotate(0deg)} 100%{transform:rotate(360deg)}}@-webkit-keyframes spinGoftino{0%{transform:rotate(0deg)} 100%{transform:rotate(360deg)}}",
      t = d.createElement("style")
    t.type = "text/css"
    t.styleSheet
      ? (t.styleSheet.cssText = y)
      : t.appendChild(d.createTextNode(y)),
      d.getElementsByTagName("head")[0].appendChild(t)
    d.getElementsByTagName("body")[0].appendChild(i),
      (i.id = "goftino_w"),
      (i.title = "goftino_widget"),
      (i.allow = "microphone"),
      i.setAttribute("allowFullScreen", "true"),
      i.setAttribute("allowtransparency", "true"),
      i.setAttribute("scrolling", "no")
    if (typeof i.srcdoc !== "undefined") {
      i.srcdoc = "<!DOCTYPE html><html></html>"
    } else {
      i.contentDocument.open()
      i.contentDocument.write(h)
      i.contentDocument.close()
    }
    i.onload = function () {
      i.contentDocument.documentElement.innerHTML = h
      var s1 = d.createElement("script"),
        s2 = d.createElement("script")
      s1.src = "https://cdn.goftino.com/static/socket.io.js"
      s2.src = "https://cdn.goftino.com/static/client.js?v=66"
      s2.setAttribute("id", "gftscript")
      s2.setAttribute(
        "widget",
        '{"sid":"653429ca4fbd6111f96ab53a","hoid":"653e9e7b7b27fd58bce141f70dbcf26ac937dd4590e60f07f9711a2c13666600","ban":false,"onoff":true,"offaction":"show","sc":"e2c5b460538a1b0ddc7768365a59045cbde6b8f1","ops_av":["https://cdn.goftino.com/static/assets/img/profile.png"],"bsurl":"https://www.goftino.com","up_url":"https://s3.goftino.com/","cdn_url":"https://cdn.goftino.com","ws_url":"https://ws.goftino.com","rl":"right","lm":30,"gid":"9Yiuyr","gData":{"gm":[],"onstartForm":[{"text":"نام و نام خانوادگی","req":"1","set":"نام"},{"text":"تلفن","req":"1","set":"تلفن"},{"text":"ایمیل","set":"ایمیل"}],"onstartTop":"قبل از آغاز گفتگو با هم آشنا شیم!","ondelay":{"form":[]},"margin":{"rl":"12","bottom":"12"},"marginmob":{"rl":"12","bottom":"12"},"typingText":1}}'
      )
      i.contentDocument.getElementsByTagName("body")[0].appendChild(s1)
      i.contentDocument.getElementsByTagName("body")[0].appendChild(s2)
      localStorage.setItem(
        "goftino_9Yiuyr",
        "653e9e7b7b27fd58bce141f70dbcf26ac937dd4590e60f07f9711a2c13666600"
      )
      localStorage.setItem(
        "goftino",
        "653e9e7b7b27fd58bce141f70dbcf26ac937dd4590e60f07f9711a2c13666600"
      )
    }
  })()
  function goftinoRemoveLoad() {
    if (document.getElementById("goftino_image_fullscreen")) {
      document.getElementById("goftino_loading_img").style.display = "none"
    }
  }
}
