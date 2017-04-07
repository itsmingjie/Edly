var onloadScript = '(' + function () {
    var mingjie_wrap = document.createElement("div");
    mingjie_wrap.innerHTML = "Edly by <a href='https://www.mingjie.info'>Mingjie Jiang</a>";
    mingjie_wrap.style.textAlign = "center";
    mingjie_wrap.style.marginBottom = "10px";
    mingjie_wrap.style.fontSize = '12px';
    mingjie_wrap.style.color = '#666';
    if (document.getElementById("edlGroupHomeBody")) {
        document.getElementById("edlGroupHomeBody").appendChild(mingjie_wrap);
    } else if (document.body) {
        document.getElementsByTagName('body')[0].appendChild(mingjie_wrap);
    }

    function stringEndsWith(string, suffix) {
        return string.indexOf(suffix, string.length - suffix.length) !== -1
    }
    console.log("Edline Beautifier By Mingjie Jiang");
    console.log("THE DEVELOPER OF THIS PROJECT IS NOT, IN ANYWAYS RELATED TO BLACKBOARD OR EDLINE. THIS PROJECT IS CURRENTLY IN AN UNSTABLE PROTOTYPE STAGE AND MAY DAMAGE YOUR DATA (INCLUDING COOKIES, LOCAL STORAGE, ETC) ON YOUR COMPUTER AND BROWSER. THIS PROJECT WILL NOT, IN ANYWAYS, PHYSICALLY DAMAGE YOUR COMPUTER. HOWEVER, IF YOU DO NOT KNOW HOW TO PROPERLY FIX A BROKEN BROWSER, I DO NOT RECOMMEND INSTALLING THE PLUGIN AT THIS STAGE.");
    if (document.getElementById("ed-indexHeader")) {
        document.getElementById("ed-indexHeader").src = "//cdn.rawgit.com/mj66/edbu-data/a7d450b8/img/login-logo.png";
        document.getElementById("ed-indexHeader").style.visibility = 'visible';
    }
    if (document.body) {
        var isInstalledNode = document.createElement('div');
        isInstalledNode.id = 'edline-ext-is-installed';
        document.getElementsByTagName('body')[0].appendChild(isInstalledNode);
    }
    if (document.getElementById("edlHeaderImage")) {
        document.getElementById("edlHeaderImage").src = "//cdn.rawgit.com/mj66/edbu-data/a7d450b8/img/login-logo.png";
        document.getElementById("edlHeaderImage").style.visibility = 'visible';
    }

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    document.addEventListener('DOMContentLoaded', function () {
        if (!Notification) {
            alert('Desktop notifications not available in your browser. Try Chromium.');
            return;
        }
        if (Notification.permission !== "granted")
            Notification.requestPermission();
    });
    function notifyRate() {
        if (Notification.permission !== "granted")
            Notification.requestPermission();
        else {
            var notification = new Notification('Rate Edly!', {
                icon: 'https://cdn.rawgit.com/mj66/edbu-data/2907b163/img/logo.png',
                body: "Like Edly? Give us a 5 star on Chrome Web Store!",
            });
            setCookie("edly-rate", Date.now(), 365);
            notification.onclick = function () {
                notification.close();
                window.open("https://chrome.google.com/webstore/detail/edly-edline-beautifier/pgcpglikbkpjnhmgdhigdidenhoaameh/reviews");
            };
        }
    }
    function notifySupport() {
        if (Notification.permission !== "granted")
            Notification.requestPermission();
        else {
            var notification = new Notification('How\'s everything lookin\'?', {
                icon: 'https://cdn.rawgit.com/mj66/edbu-data/2907b163/img/logo.png',
                body: "Any suggestions? Feedback? Feel free! Click this notification to submit a feedback. Mingjie will reply!",
            });
            setCookie("edly-rate", Date.now(), 365);
            notification.onclick = function () {
                notification.close();
                setCookie("edly-rate", -2, 365);
                window.open("https://chrome.google.com/webstore/detail/edly-edline-beautifier/pgcpglikbkpjnhmgdhigdidenhoaameh/support");
            };
        }
    }
    if (getCookie("edly-rate") == "") { //First Time
        setCookie("edly-rate", -1, 365);
    } else if (getCookie("edly-rate") == -1) { //Second Time
        notifyRate();
    } else if (getCookie("edly-rate") == -2) { //Submitted Feedback
    } else if ((Date.now() - getCookie("edly-rate")) / 1000 / 60 / 60 / 24 >= 7) { //Weekly Question
        notifySupport();
    }
    $('body').fadeIn(1200);
} + ')();';
var script = document.createElement('script');
script.textContent = onloadScript;
(document.head || document.documentElement).appendChild(script);
script.remove();