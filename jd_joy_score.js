/*
京享值PK
cron 15 2,7,18 * * * jd_joyscore.js
更新时间：2021-7-04
活动入口：京东APP-我的-京享值
已支持IOS双京东账号,Node.js支持N个京东账号
建议：12点过后运行一次，半小时后再运行一次。没有提交自己分享码将无法获取其他人的分享码。
脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
============Quantumultx===============
[task_local]
#京享值PK
5,30 0，2,7,18 * * * https://raw.githubusercontent.com/hyzaw/scripts/main/ddo_pk.js, tag=京享值PK
================Loon==============
[Script]
cron "5,30 0,2,7,18 * * *" script-path=https://raw.githubusercontent.com/hyzaw/scripts/main/ddo_pk.js,tag=京享值PK
===============Surge=================
*/

const $ = new Env('京享值PK');
!function (n) { "use strict"; function r(n, r) { var t = (65535 & n) + (65535 & r); return (n >> 16) + (r >> 16) + (t >> 16) << 16 | 65535 & t } function t(n, r) { return n << r | n >>> 32 - r } function u(n, u, e, o, c, f) { return r(t(r(r(u, n), r(o, f)), c), e) } function e(n, r, t, e, o, c, f) { return u(r & t | ~r & e, n, r, o, c, f) } function o(n, r, t, e, o, c, f) { return u(r & e | t & ~e, n, r, o, c, f) } function c(n, r, t, e, o, c, f) { return u(r ^ t ^ e, n, r, o, c, f) } function f(n, r, t, e, o, c, f) { return u(t ^ (r | ~e), n, r, o, c, f) } function i(n, t) { n[t >> 5] |= 128 << t % 32, n[14 + (t + 64 >>> 9 << 4)] = t; var u, i, a, h, g, l = 1732584193, d = -271733879, v = -1732584194, C = 271733878; for (u = 0; u < n.length; u += 16)i = l, a = d, h = v, g = C, d = f(d = f(d = f(d = f(d = c(d = c(d = c(d = c(d = o(d = o(d = o(d = o(d = e(d = e(d = e(d = e(d, v = e(v, C = e(C, l = e(l, d, v, C, n[u], 7, -680876936), d, v, n[u + 1], 12, -389564586), l, d, n[u + 2], 17, 606105819), C, l, n[u + 3], 22, -1044525330), v = e(v, C = e(C, l = e(l, d, v, C, n[u + 4], 7, -176418897), d, v, n[u + 5], 12, 1200080426), l, d, n[u + 6], 17, -1473231341), C, l, n[u + 7], 22, -45705983), v = e(v, C = e(C, l = e(l, d, v, C, n[u + 8], 7, 1770035416), d, v, n[u + 9], 12, -1958414417), l, d, n[u + 10], 17, -42063), C, l, n[u + 11], 22, -1990404162), v = e(v, C = e(C, l = e(l, d, v, C, n[u + 12], 7, 1804603682), d, v, n[u + 13], 12, -40341101), l, d, n[u + 14], 17, -1502002290), C, l, n[u + 15], 22, 1236535329), v = o(v, C = o(C, l = o(l, d, v, C, n[u + 1], 5, -165796510), d, v, n[u + 6], 9, -1069501632), l, d, n[u + 11], 14, 643717713), C, l, n[u], 20, -373897302), v = o(v, C = o(C, l = o(l, d, v, C, n[u + 5], 5, -701558691), d, v, n[u + 10], 9, 38016083), l, d, n[u + 15], 14, -660478335), C, l, n[u + 4], 20, -405537848), v = o(v, C = o(C, l = o(l, d, v, C, n[u + 9], 5, 568446438), d, v, n[u + 14], 9, -1019803690), l, d, n[u + 3], 14, -187363961), C, l, n[u + 8], 20, 1163531501), v = o(v, C = o(C, l = o(l, d, v, C, n[u + 13], 5, -1444681467), d, v, n[u + 2], 9, -51403784), l, d, n[u + 7], 14, 1735328473), C, l, n[u + 12], 20, -1926607734), v = c(v, C = c(C, l = c(l, d, v, C, n[u + 5], 4, -378558), d, v, n[u + 8], 11, -2022574463), l, d, n[u + 11], 16, 1839030562), C, l, n[u + 14], 23, -35309556), v = c(v, C = c(C, l = c(l, d, v, C, n[u + 1], 4, -1530992060), d, v, n[u + 4], 11, 1272893353), l, d, n[u + 7], 16, -155497632), C, l, n[u + 10], 23, -1094730640), v = c(v, C = c(C, l = c(l, d, v, C, n[u + 13], 4, 681279174), d, v, n[u], 11, -358537222), l, d, n[u + 3], 16, -722521979), C, l, n[u + 6], 23, 76029189), v = c(v, C = c(C, l = c(l, d, v, C, n[u + 9], 4, -640364487), d, v, n[u + 12], 11, -421815835), l, d, n[u + 15], 16, 530742520), C, l, n[u + 2], 23, -995338651), v = f(v, C = f(C, l = f(l, d, v, C, n[u], 6, -198630844), d, v, n[u + 7], 10, 1126891415), l, d, n[u + 14], 15, -1416354905), C, l, n[u + 5], 21, -57434055), v = f(v, C = f(C, l = f(l, d, v, C, n[u + 12], 6, 1700485571), d, v, n[u + 3], 10, -1894986606), l, d, n[u + 10], 15, -1051523), C, l, n[u + 1], 21, -2054922799), v = f(v, C = f(C, l = f(l, d, v, C, n[u + 8], 6, 1873313359), d, v, n[u + 15], 10, -30611744), l, d, n[u + 6], 15, -1560198380), C, l, n[u + 13], 21, 1309151649), v = f(v, C = f(C, l = f(l, d, v, C, n[u + 4], 6, -145523070), d, v, n[u + 11], 10, -1120210379), l, d, n[u + 2], 15, 718787259), C, l, n[u + 9], 21, -343485551), l = r(l, i), d = r(d, a), v = r(v, h), C = r(C, g); return [l, d, v, C] } function a(n) { var r, t = "", u = 32 * n.length; for (r = 0; r < u; r += 8)t += String.fromCharCode(n[r >> 5] >>> r % 32 & 255); return t } function h(n) { var r, t = []; for (t[(n.length >> 2) - 1] = void 0, r = 0; r < t.length; r += 1)t[r] = 0; var u = 8 * n.length; for (r = 0; r < u; r += 8)t[r >> 5] |= (255 & n.charCodeAt(r / 8)) << r % 32; return t } function g(n) { return a(i(h(n), 8 * n.length)) } function l(n, r) { var t, u, e = h(n), o = [], c = []; for (o[15] = c[15] = void 0, e.length > 16 && (e = i(e, 8 * n.length)), t = 0; t < 16; t += 1)o[t] = 909522486 ^ e[t], c[t] = 1549556828 ^ e[t]; return u = i(o.concat(h(r)), 512 + 8 * r.length), a(i(c.concat(u), 640)) } function d(n) { var r, t, u = ""; for (t = 0; t < n.length; t += 1)r = n.charCodeAt(t), u += "0123456789abcdef".charAt(r >>> 4 & 15) + "0123456789abcdef".charAt(15 & r); return u } function v(n) { return unescape(encodeURIComponent(n)) } function C(n) { return g(v(n)) } function A(n) { return d(C(n)) } function m(n, r) { return l(v(n), v(r)) } function s(n, r) { return d(m(n, r)) } function b(n, r, t) { return r ? t ? m(r, n) : s(r, n) : t ? C(n) : A(n) } $.md5 = b }();
$.toObj = (t, e = null) => {
    try {
        return JSON.parse(t)
    } catch {
        return e
    }
}
$.toStr = (t, e = null) => {
    try {
        return JSON.stringify(t)
    } catch {
        return e
    }
}

const notify = $.isNode() ? require("./sendNotify") : "";
const jdCookieNode = $.isNode() ? require("./jdCookie.js") : "";
const sck = $.isNode() ? "set-cookie" : "Set-Cookie";
const APPID = "dafbe42d5bff9d82298e5230eb8c3f79";
const md5Key = "34e1e81ae8122ca039ec5738d33b4eee";
let cookiesArr = [],
    cookie = "",
    message;
let minPrize = 1;

let countlaunch = 0;
let countreceive = 0;
let bcomplate = false;

if ($.isNode()) {
    Object.keys(jdCookieNode).forEach((item) => {
        cookiesArr.push(jdCookieNode[item]);
    });
    if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") console.log = () => { };
} else {
    cookiesArr = [
        $.getdata("CookieJD"),
        $.getdata("CookieJD2"),
        ...jsonParse($.getdata("CookiesJD") || "[]").map((item) => item.cookie),
    ].filter((item) => !!item);
}
//采用闭包方式调用
var _0xodd='jsjiami.com.v6',_0x1020=[_0xodd,'RcK4OC7Chg==','K8K/w7RUX17Dtyk=','w6HDvU/Crk4=','AUnDvsOHwqE=','IXTCscK7w6U=','dh/CkWNb','wpFQLkPDpg==','MVXDosOTwo8=','W8OBw6w7wpI=','wq7CuA9HZRIvBcOgIg==','JsOWwq0BRQ==','R8KcEyDCmg==','KsKYwpkSw50=','w5nCnywSaA==','KXfCh8Kqw4c=','wojCoVY=','w78Yw5XCi1s=','wpTCpWMyJRDDlH0=','wrrCskh8SQ==','QwXDjEQ=','w6bCo0jClsON','w6duHsK7w5Y=','DRBZcsKX','CMKaw5h+Hg==','w4bDrsKu','wrTCtkZtcw==','wo5v57if5p+U5Yae5Lm85L6G5oOG','bibCg3BA','OcKlw6dbXg==','w7bDhF3CuXQ=','VjLDiU7Cjw==','XcOwBcOQw4HCni/Ckg==','wp1IfxrDkA==','wonCocOTw4bDvcOawowbwpEb','e8Kew4wowok=','wpxZw5bDuio=','w7Zfw7VtCmIGDQ==','w5R/HsOlQA==','WhHCg0pj','HGDDnA==','PHXDkMOqwrE=','w4g+w5TCsFI=','w5DDscKkIUk=','wqtgNG7Dlg==','FMKMwpnDocOm','XG/Dk1bDkw==','Sn3DtGbDt2dl','wrl4AsOGUyoW','ARDChQ==','ZRLCg2N5','I0nDusOawqZHwqFFwpUuCsO/wqM=','w5BSw4ZtMg==','D8KKw41oDA==','6I2n5YyO5Yqp5LuWacKz56G177y8','QVTDlXPDkg==','w4bDosKLWTE=','QcO0MA==','JULDjg==','5Lun5L6A57qk5py+776V','cVEWworDjA==','w6PDssKxFHs=','w685w6zCj2cBeBw8ccO8Cx89','wqlHOMK6w6wiBE4=','ZSXDskfCpg==','woNZRgjDrMOCDirDhQYx','aMOLX0bCtg==','WMOeHMOtw7c=','Z8OyWA==','RcKzFArDpg==','CRjCnMKvw6Q=','woDCr0U2','w57ColPDosOO','bzvCvV9k','RMOXW2rCrg==','w7LCscOdUiA=','wq9aw5HDlRQ=','w7bCvsOjdio=','QCrDt2rCrw==','wogMMH8=','wqFbP1zDsw==','wpXCm0cTNw==','UwvDt0fCqg==','wosOfXg=','6I+G5Y+S5Yuv5LmEw4HCpueitO++hQ==','eGdvecKn','FRBx','H0nDnsO8wrI=','c8OUFsKcwp8=','e8OJMMOWEw==','bWVLbcKB','wqJ2TTnDqw==','NCbChMO7wqk=','w6Yuw6zCtnAGbhU8ccOlbAhjMBrDigfCu8OfQDfCpmjCt8KALBPDpcK0BwDDrcK0w5LDtcKlSlfCoG/CtMKUwo4=','fVfDk2Y=','SV/DrEPDtA==','wqvCvH4tEg==','XlnDiWjDkQ==','wrzCrMK+w5I=','RcO2OsOQHA==','wqp9ZcKswpE=','wrrCslRqUQ==','XcO0JMOB','wq7CsDhEfw==','w7XDlcKcF2A=','W8OHGsO1NA==','w41SNcKHw4k=','wq0Wb2HDjw==','5LuU5LyE57if5p+U77+y','fcO2EcKfwpw=','N8K7w4E=','WEByZ8K1','fcKnISnDpA==','w5PCu8OfcSg=','wrbCoX0kNQ==','RMOrJsO9w7g=','cDfDmWDCiw==','w4fCnxc=','w7VfO8O+Tg==','RsO0CsO5AA==','wp1vw6vDnhxi','wpwuQEPDtQ==','w4xHazQ=','w4bCjiAdRw==','YcKRNTzDpg==','Rw7CgQ==','woXCqksDIg==','6KCn5Ym26YOl6K6O5aST6LSJ776n','G8KbwovDq8OD','bsKuw4IcwqU=','IcKlw65VQA==','w5nDtcKoXxE=','PTVvWcKH','wq7CmA1lSw==','MsKkw5d5Zg==','wpFlQzTDvw==','w6fCiEDCm8Og','wrw3PU7Duw==','RsKqJRzCqQ==','wp7DjAXDrMOA','5b2g5Yq+6IKc5Z2uw5I=','worCt1QtBg==','bMOeHsOiw7g=','wr8OI3fDmA==','wr5iw6PDmRg=','wofCp8OIw5vDmcKJw416woUGwrU4JFvDmgrDnsO/fcK5w50cw5DCqsOUwrXDpsKFwrJMNcKfRGc+FsO6LkHDlUYDclbClwjDl0kmLMKl','wp3CgcOoXwvChMOU','wq/CrW4wUH0Jw7XDtMKKccOVwrnDt1wI','w7Fxw6teKw==','VMKyLhXDog==','KsKPw5BeEQ==','wqJ6JsK/wpQ=','w53CvkY=','VEg+wqLDkQ==','Hg/Cr8OUwoI=','BWvCpsKNw7s=','w5/DlcOWwqs4','eld3RMKE','XcOJBcO0w6E=','wqTCt8O8CUs=','w7Jiw7BFNw==','aVwKwpbDjg==','AW/Cu8KKw6LCmMOZw6s=','b8OUIsKxwqQ=','dsKaIwDDoA==','FAxx','5rKB5p2i6I2C5Y+w5Yi66KCY5YqB6YKd6Kyt56GG','5LiR5Yir6YCh6K6B5ae76Ler77+2','w6bDm8KbJUs=','5b+P5YuLw73Ckzgfa2Ms77+R','5oqp6KKR5Lqr5LiC5qOj5rWV6au36K2d','5oi755iH5LiN5LudwprCheWLquWDgsOQ','55aC5oq2wpliOsKNBA==','5b2T5Yua5Yiq5pS477yl','wrcaRGPDgA==','w7/DssKGGUU=','5rKB5p2i6I2C5Y+w5Yi65aeO5Y+i','5Lu15Ym1V1XmrILmla7ltonlrJA=','w6HDssKxN3k=','w5nCqsOiexI=','wpQeNm3Dmw==','I8K2w4xpw6HmirDnmpflib3mlLFa','6LeD5oi95YmB5pW75pm36aqh77yP6L+s6KGh6KGI5Yi7dFw=','5Luq5aWC5LuO6KKN5Yqiw6Ni5Z2a5bSo55Wv5aye','5Ya75aWw5qCT5raG5pqh5ZC95YyU5LiD5byc5a+e56y44oOx4oGy','wozCuhdtRQ==','wrrCq2N2WQ==','Om/CmsKKw4Q=','wqBWw5rDnTk=','5Y+y5byt5ay056yDw70=','wrJpwrgtwo8=','RsOEbSV6','ScOGw7ciwoM=','wo/CtHo7EA==','w6zCk1LCoMO+','wpZ4BMKDwrw=','MsKdwovDu8OPT2YQccKRE8K9woRVw53CrcK8wr/CoA==','w5DDosOYwpAV','CcO8wrIObQ==','wodcwrgYwpk=','wpdvJG7Dqg9mdUzCl8OnSHI=','5o+m5Y2y6KGj5YuQXGbmj4Xmi7w=','woxJwqoYwrg=','wr/CiHFaQg==','cMKWPi/DpsOjFMOLOw==','S8OJFcO3w7E=','wozDkB7CjMO8W2gxwpMnB8OwwrBsfMK7','w68qw6jCqmpfIE40bsOibRFzLR0=','wqLCvMOGw4LDhsOfwoN6w5FYw6w2f2/DgQ3DisOkecKgwpl8w6fDrMOKw6TCuMOcwqYmDcKPeTJlX8K/eTDChBtzWkjDmAfDnWstOsOTw5TDv3gSw5jCo17Cj8OZeF8gw7rCrDnCp0/DjsORCcOVGFbCkC3DukABw7BQwrFrwoTDn8K1w7A0woDDn2E6wpTDuMODTXZxwrrCv2PDvFkUZMOoEz8ow54Iw5zCrA==','6YKt6K2s5omH5Yiq6L2m5Zi157qQ5p267720','woQuHHDDqA==','QMO1wroQ','woHCoS5wfw==','ERjCtA==','fMOHA8KawoM=','5b205Yipw4xKwqt7wojvvL0=','w5hIAMKTw48=','YMOLdn7Crg==','w5PDv8OrwpQ4','QMKlOQTCpw==','5bya5YqDwqgYw7vvv4www6rno6PvvLXvvIA=','CMKQwrY=','w57CnG3Cl8Og','NMKWwr8=','w7rCkkw=','X8OPEQ==','wpzCl8OPw7/DvA==','U8KPw6k=','c8OtJMKfwpzDsMKH','WcOONMO0w7k=','w5zCtws=','w5pYNsKNw7IqBxY=','w7jCiwY4aQ==','DsKnw4NDYkrDtjg=','SC7ChEpH','6I+G5Y+SwrnChOWKhuiihQ==','woPCtsOSw4zDnsOb','5p2D5pWF5o2t5aST55eH','bMO4Sw==','QsOYZwZe','ScKYw4IFw5QHWjbCt8KYHsKwSXQ=','w65Vw4RwJU8QBcKBP3HDu8OlWcOR','VsOSPMK9wo4=','woMAbg==','SwHDjHXChA==','w7DDo8O3wowgBW5lKsKbw6HCrFh0','wrNwKsKWwos=','wqLCuGl5V3Y=','w7N8HMORbiY=','wpzDrgPDj8OE','PGXDocO1wo4=','wqLDu0XDrSbmiJPnm4Pli6/ml7B1','w4rCvMO/XTI=','w57DosKwSBY=','woopYFHDrw==','w5deHsKFw4Y=','w6phKsOwTw==','w7JqFQ==','Gw/Chg==','w6vCm8Ol','Sw/DrErCq3vCiA==','w51oFcK9w5g=','DjrCt8Kgw7k=','w47DiMO8wpwC','fsKaKAPDpQ==','w4bClEU=','wrw4CH3Dkw==','wqLCsmA=','aGYI','wq9jw57Dmwc=','BMKCwpEQw6M=','XMOVI8OYw7k=','Qw7Cl39+','wolyw63DsxQ=','N8Kxw4BFbUjDuDjDqcKfw6RJw5Q8Ew==','wpvCsMOFw4jDiA==','X8KWLjPCnEA=','wo3CmXAHHQ==','Y8OJGA==','Vw/DqkDCs2vCilM=','TMOxw44bwp3Cp8KCwrDCn8KR','MMK0w4VTGg==','w5FTw412AQ==','AUfDqMOWwpE=','VsOFJcO9FA==','EsK7wrvDgsOH','EgfCm8KIw7c=','w7DDqcO2','d8KFw60kwps=','wrHCkMOtK1g=','LcKvwqwQ','w63DiMOlwpUn','w7d4w6pDLQ==','PMKwwrXDqsO4','VFpUY8KV','5b6+5Yut5Ymx5peS776V','w5dDGcK7w7c=','w5dmFMK8w64=','fsKPOCTDuA==','w7N8FMOCWy1IwrPCkEnClMOTSj9L','TUUEwpzDow==','diHCt1xM','GUTDhw==','QcOwA8Oaw5nCji0=','OGPDncOfwow=','fXHDrg==','NMKSwozDvMOFWG0=','w65fw4U=','wpdowqcGwrE=','ScKSw4M=','5rKM5pyR6Iy35Y+k5Yqu6KKh5Yqo6YCm6K+V56OO','w5fCocOBeis=','wqTCpQc=','SMKzw7clw7I=','woB8Jg==','wq/CqmZsR20=','JMKZwpkhw7g=','wpnDkjHDhsOE','w73DscOwwooIAw==','ScKYw4oWw6wa','BQXCgsOLwrjCsgPDoQ==','acKYw6glw4o=','M8Kdw75MBQ==','w4jCsQ4PZw==','woF9Uy3Dtw==','wpgCMH/DkWvDtEfDmw==','ZlJXZcKb','w7/Dm8KFRxU=','TsKrw7c4w50=','IsKAwrU/w6U=','KMKgw4dFSQ==','X8KcJw==','w5FTw4VtAQ==','w5PDrUDChXc=','esOkVw==','woJ0cxPDsQ==','WcOJI8Ohw7U=','w6bCvREJSw==','w6zDjUHCiVU=','ccOYQgBr','w505w7/Cr2Y=','GVnDrcOAwr8=','w6vDg3zCmVA=','XMOiblzCpw==','TMOPw7Iiwr0=','wpU+EmfDmg==','woTCu118YA==','w6TDucKiIVc=','KMK0wpzDtsOY','w5wgw7/CpXM=','w5jCq0jCnMOu','E8Ou57ib5p+k5Ye26ZS0','wqIpKkvDqA==','bMOzw7URwq0=','Z8OUXUbCpw==','wrzCt8OI','w5zCl8O/ZBDCjMKM','w4ccFgnDvcO4CizDhQ8mQ8Kb','wqLDjBXDtsOL','fcK4w410fELDtWA=','w4tow7LDkBxi','URTDnA==','wqdtFnzDpw==','wp8Aem0=','aknDk1zDrQ==','cMKwCi7CjA==','w6jCvxEY','T0Zk','LifCtMK0w4Q=','wr3CmmR3SA==','w67DhGk=','QsOfbQp7','JMK9wr8=','w4EDw7rCi1E=','LnXDg8Ozwr4=','cMO8fi1Mw6/DnG8=','woLCvF46AQzDlkfDuRs=','JcKhwr8=','w65DEcOCTA==','5b+P5YuL6IGN5Z+CVg==','wqB+GsKqwozDhhBX','a8OpJ8KZwpnDm8KcRw==','asOoPMOGw6E=','w7DCjVvCvMOt','wqDCixJDWQ==','w6NENA==','bsODE8O9Nw==','f8KRPA==','woRpw7DDvSI=','6YO56K6I5oiG5YqP6Lyp5ZuO57qv5pyW77ye','VlpQYMKd','SG9EcMK8','wpVbZh7Dq8OhByw=','YnsAwr/DrcOgYcKYY2Q=','wrTCj3MvHA==','ZsOHw5IvwpA=','VlpMdsKF','J8OEwrwZ','aVt3XMKt','VATCplJ4','b2FCZMKe','wolfUw==','GcKPwpoJw58=','wqvCpcO9w7zDkA==','WhPCgGlc','Aw/CssOawqM=','OEbDpMOowrQ=','X33DjkDDiw==','wpbClsOew73Duw==','csOQJsKnwrE=','OQTCjsO7wpk=','RMOKOcOyw6g=','DMKww7I=','WRdid8KbdX8lcUh/aSfCs14PHQzChhDDhGzCrT8=','B8ORwoYDw70eVSHCtsKnG8OcBg==','woRARDLDvMKp','fsKVwrPDlsO+VG1v','w7Z5I8KbwpDDmBlNeQ==','wqTDnzM=','ZQ3ChHN/','wonDshzDsMOK','WsORNsOcLg==','ecOfaR1q','dcKew74fw4o=','w60vw6HCkFI=','QsKIw4EFw4o=','w6zDqcOiwow=','BwjCm8Omwrw=','UsOCemHCsA==','w5tGw4FTKA==','w5jDgsKReSc=','woJdw5DDtDA=','wolpwroOwro=','w6LCklTCssOZ','w47CtH3DrMO1','woFRQBo=','JF7Djg==','DgPCssK5w6s=','6KOw5Ym86YCm6K+G5aSd6LSO776B','V8O2EsO5Gw==','w5rDlMO9wrI/','QMKkw70Nwo8=','d1xMfMKq','f8OWJsOQw4A=','wpFlFH/DsQ==','OUbDu8OXwrRAwqhj','XR3Dq33Ctw==','C33CusK3w6Y=','w77DucKS','WsOPMMOcPA==','woxpwr0twpo=','w6bDucKmIl8=','c8OpFw==','woACIw==','6YKE6K++5om/5YmN6Z666KSI562G5b2T5o6z5pS/cMKN77yf','wpDCoWIjJA==','Q8OZw5cVwpw=','w6DCsQI=','wqNuC33Dkg==','MsKFw4h2dg==','w47DoMKnTwY=','6YCC6K2c5oie5YmS6ZyG6KaD56yO5b2s5oyl5pW5ZDbvv48=','wrrClcOdw4PDrQ==','CsKBw6FmQQ==','wp8HF13Dug==','DsKKw7RjHg==','wpUnfknDvA==','aMOqaFzCuQ==','T8OgT2nCkw==','MMKLwronw4Q=','wq1DwocLwqQ=','w6zDkkbCvXY=','wrbCrXBJZg==','wp1Rwq8Awoo=','OmfDoMO9woQ=','wp/Cv8OXDn0=','w7F7w65JIw==','w40Xw7nCslM=','w5TCq8OScyM=','X8OiLsOWEQ==','U8OIw5QMwoU=','C8Kf57m15p6t5YeW6ZSy','DsKjwrsbw5Y=','TWMHwpfDsg==','TMK8w68Yw6o=','wqnCuHNKSnMe','EMKZw7x9RA==','wo4feVDDnsOz','w7hIwqcNwrjDgwnClA==','JcKKw6wdwq7DinYVfA==','wpzCrw8=','IsKMw6tdeA==','woPCq0l2ZA==','wqjCoMOkHHE=','6KKr5Yi/6YKs6K6/5oiv5YiF6L2k5ZuF57q55p+K7768','w53Di8KRUjw=','KnvDqMORwo8=','AsKawpMCw6A=','w55LPcOhbA==','TsOiw5UX','wpFlCGnDqQ==','Lk7DrcOLwqA=','AnDCiMKbw7Q=','w7/DjsKbIkk=','w7DDq8KZbRU=','jMVxsLbjiPRamZUifD.fDbcom.v6=='];(function(_0x21178a,_0x192b64,_0xb3bc99){var _0x161936=function(_0x35f2ec,_0x1e4b3b,_0x55180a,_0x4a6cd4,_0x3cdbf3){_0x1e4b3b=_0x1e4b3b>>0x8,_0x3cdbf3='po';var _0x403db4='shift',_0x11b6ea='push';if(_0x1e4b3b<_0x35f2ec){while(--_0x35f2ec){_0x4a6cd4=_0x21178a[_0x403db4]();if(_0x1e4b3b===_0x35f2ec){_0x1e4b3b=_0x4a6cd4;_0x55180a=_0x21178a[_0x3cdbf3+'p']();}else if(_0x1e4b3b&&_0x55180a['replace'](/[MVxLbPRZUfDfDb=]/g,'')===_0x1e4b3b){_0x21178a[_0x11b6ea](_0x4a6cd4);}}_0x21178a[_0x11b6ea](_0x21178a[_0x403db4]());}return 0x95a7d;};return _0x161936(++_0x192b64,_0xb3bc99)>>_0x192b64^_0xb3bc99;}(_0x1020,0xa5,0xa500));var _0x1240=function(_0xb51e3e,_0x210b3f){_0xb51e3e=~~'0x'['concat'](_0xb51e3e);var _0x7fb824=_0x1020[_0xb51e3e];if(_0x1240['PafQVc']===undefined){(function(){var _0x3b59d2=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x2132c5='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x3b59d2['atob']||(_0x3b59d2['atob']=function(_0xff8eb8){var _0x1367f4=String(_0xff8eb8)['replace'](/=+$/,'');for(var _0xcb9c2e=0x0,_0x3e5087,_0x1399e1,_0x2527a4=0x0,_0x79265a='';_0x1399e1=_0x1367f4['charAt'](_0x2527a4++);~_0x1399e1&&(_0x3e5087=_0xcb9c2e%0x4?_0x3e5087*0x40+_0x1399e1:_0x1399e1,_0xcb9c2e++%0x4)?_0x79265a+=String['fromCharCode'](0xff&_0x3e5087>>(-0x2*_0xcb9c2e&0x6)):0x0){_0x1399e1=_0x2132c5['indexOf'](_0x1399e1);}return _0x79265a;});}());var _0x3c2b21=function(_0xfee061,_0x210b3f){var _0x2f708f=[],_0x19f29a=0x0,_0x483c86,_0xd14808='',_0x4e518b='';_0xfee061=atob(_0xfee061);for(var _0x2eba36=0x0,_0x168bf8=_0xfee061['length'];_0x2eba36<_0x168bf8;_0x2eba36++){_0x4e518b+='%'+('00'+_0xfee061['charCodeAt'](_0x2eba36)['toString'](0x10))['slice'](-0x2);}_0xfee061=decodeURIComponent(_0x4e518b);for(var _0x4240ba=0x0;_0x4240ba<0x100;_0x4240ba++){_0x2f708f[_0x4240ba]=_0x4240ba;}for(_0x4240ba=0x0;_0x4240ba<0x100;_0x4240ba++){_0x19f29a=(_0x19f29a+_0x2f708f[_0x4240ba]+_0x210b3f['charCodeAt'](_0x4240ba%_0x210b3f['length']))%0x100;_0x483c86=_0x2f708f[_0x4240ba];_0x2f708f[_0x4240ba]=_0x2f708f[_0x19f29a];_0x2f708f[_0x19f29a]=_0x483c86;}_0x4240ba=0x0;_0x19f29a=0x0;for(var _0x6b228f=0x0;_0x6b228f<_0xfee061['length'];_0x6b228f++){_0x4240ba=(_0x4240ba+0x1)%0x100;_0x19f29a=(_0x19f29a+_0x2f708f[_0x4240ba])%0x100;_0x483c86=_0x2f708f[_0x4240ba];_0x2f708f[_0x4240ba]=_0x2f708f[_0x19f29a];_0x2f708f[_0x19f29a]=_0x483c86;_0xd14808+=String['fromCharCode'](_0xfee061['charCodeAt'](_0x6b228f)^_0x2f708f[(_0x2f708f[_0x4240ba]+_0x2f708f[_0x19f29a])%0x100]);}return _0xd14808;};_0x1240['UMoxVM']=_0x3c2b21;_0x1240['SMSsZp']={};_0x1240['PafQVc']=!![];}var _0x101471=_0x1240['SMSsZp'][_0xb51e3e];if(_0x101471===undefined){if(_0x1240['WTslXK']===undefined){_0x1240['WTslXK']=!![];}_0x7fb824=_0x1240['UMoxVM'](_0x7fb824,_0x210b3f);_0x1240['SMSsZp'][_0xb51e3e]=_0x7fb824;}else{_0x7fb824=_0x101471;}return _0x7fb824;};!function(_0x4d930b){var _0x44faa3={'sjaxL':_0x1240('0','ggyE'),'uxXFU':'被动邀请失败：','kNmNp':function(_0x30371e,_0x31ddae){return _0x30371e>_0x31ddae;},'Scgie':_0x1240('1','t#i&'),'gDGhi':function(_0xe5e99c,_0x3717f){return _0xe5e99c(_0x3717f);},'IkNZM':function(_0xf694be){return _0xf694be();},'cAsjt':function(_0x590465,_0x452f04){return _0x590465+_0x452f04;},'WcSls':function(_0x121ba2){return _0x121ba2();},'JFOUs':_0x1240('2','3ia)'),'OyzlT':function(_0x2993d,_0x463325){return _0x2993d+_0x463325;},'sVyPO':function(_0x515f41,_0x4ca60f){return _0x515f41+_0x4ca60f;},'tgOdo':_0x1240('3','vP4i'),'rgUix':_0x1240('4','m)F!'),'VJMXJ':function(_0x1cf46b,_0x35a408,_0x56e784){return _0x1cf46b(_0x35a408,_0x56e784);},'sDsTV':function(_0x4c5647,_0x1fc37a){return _0x4c5647(_0x1fc37a);},'tUcAK':function(_0x6db917,_0x480ea8){return _0x6db917(_0x480ea8);},'hEqlM':function(_0x37a34a,_0x10d484){return _0x37a34a>_0x10d484;},'lxgYR':_0x1240('5','t#i&'),'BOKNa':function(_0x7c4f1f,_0xf95f9f){return _0x7c4f1f<=_0xf95f9f;},'iwAsv':function(_0x5de65f,_0x445012){return _0x5de65f<=_0x445012;},'ITLMy':'所有PK次数已完','letPD':'进行主动邀请PK','cebYt':function(_0x349059,_0x3c7a79){return _0x349059>_0x3c7a79;},'qNtmK':function(_0x428462,_0x4cb64b){return _0x428462(_0x4cb64b);},'uHHGI':function(_0x3d630a,_0x590366){return _0x3d630a+_0x590366;},'PpvuE':_0x1240('6','ylbF'),'vLNwI':_0x1240('7','rHni'),'tcycb':function(_0x3bfc53,_0x54a5ad){return _0x3bfc53<_0x54a5ad;},'JOxSt':function(_0x23919f,_0x45a633){return _0x23919f!==_0x45a633;},'eFiHU':_0x1240('8','[Usn'),'BgQwd':function(_0xbf4378,_0x565d17,_0x23daec,_0x5269a0){return _0xbf4378(_0x565d17,_0x23daec,_0x5269a0);},'RCFBd':function(_0x59a0b8,_0x271cbc){return _0x59a0b8!==_0x271cbc;},'MghUB':'yvMwW','sMdmw':'rAfqd','RNmdn':_0x1240('9','3ia)'),'PULcn':_0x1240('a','ggyE'),'BxElu':_0x1240('b','m)F!'),'MLIav':'进行被动邀请PK','divDf':function(_0x129c13,_0xe5be53){return _0x129c13-_0xe5be53;},'YcZIm':function(_0x75e46a,_0x14eed6){return _0x75e46a===_0x14eed6;},'iWAPK':_0x1240('c','3ia)'),'yMlbK':_0x1240('d','DvHw'),'HjAdV':function(_0xa7bfe6,_0x3e7af8){return _0xa7bfe6>_0x3e7af8;},'opHEy':_0x1240('e','adp['),'DMjbm':function(_0x1549f3,_0x10c540){return _0x1549f3==_0x10c540;},'tcjmZ':function(_0x1ae1f0,_0x34e06c){return _0x1ae1f0===_0x34e06c;},'aHBVa':'QDRGs','dImyV':function(_0x1b99ee,_0x4eeb7a){return _0x1b99ee+_0x4eeb7a;},'voWwz':function(_0x57f1e7,_0x5c8d3b){return _0x57f1e7+_0x5c8d3b;},'XhJDK':_0x1240('f','5Ks!'),'XMGCR':function(_0x2727fb,_0x22fdbd){return _0x2727fb!==_0x22fdbd;},'mqchu':'OZkMb','ILkNY':_0x1240('10','m3VI'),'VJBzF':function(_0x405418,_0x32f01c,_0x18ca58,_0x1b58d6,_0x2f7598){return _0x405418(_0x32f01c,_0x18ca58,_0x1b58d6,_0x2f7598);},'lSJJR':_0x1240('11','ggyE'),'BQDKj':_0x1240('12','9N*Y'),'mNSTj':function(_0x1f74b9,_0x20b937){return _0x1f74b9(_0x20b937);},'jxGBo':function(_0x31d207,_0x31e9e2){return _0x31d207!==_0x31e9e2;},'mWAPm':_0x1240('13','K3M!'),'trFdK':function(_0x5be2a0,_0xa1cd5c){return _0x5be2a0<_0xa1cd5c;},'LeLTR':function(_0x4a562e,_0x260bb6){return _0x4a562e!==_0x260bb6;},'SBkvq':_0x1240('14','m)F!'),'DokvE':_0x1240('15','#jQm'),'dMgVo':function(_0x4bdee1,_0xd4fe02){return _0x4bdee1>=_0xd4fe02;},'DgTqt':function(_0xbaa305,_0x25f244){return _0xbaa305===_0x25f244;},'UZLla':'emvGC','kVSIE':_0x1240('16','AaSe'),'QFNHq':_0x1240('17','PAiZ'),'GVdPi':function(_0x5c79e4,_0x50c322,_0x1fc6ef){return _0x5c79e4(_0x50c322,_0x1fc6ef);},'tRtTG':'宝箱检测结束……','jctpi':function(_0x99a011,_0x162095){return _0x99a011==_0x162095;},'dandr':'当前胜场:','nfODS':function(_0x1dc64f,_0x539eb7){return _0x1dc64f===_0x539eb7;},'qOnHT':'pwnRH','PtDrx':_0x1240('18','%!9D'),'ihrTV':'inhiN','fLSTw':'ilMIE','ySVyg':_0x1240('19','rHni'),'JfZbC':'邀请成功需要等待接收PK：','pMDev':'发起邀请请求失败:','Rzgcp':_0x1240('1a','t#i&'),'rPjoa':function(_0x3f52ab,_0x4cb7a4){return _0x3f52ab(_0x4cb7a4);},'NDnUU':function(_0x3ca7c6,_0x57d7be){return _0x3ca7c6!==_0x57d7be;},'FpTgg':_0x1240('1b','J19['),'MYdmz':_0x1240('1c','J693'),'taUEU':'发起挑战','OlbTD':function(_0x30e8a1,_0x506eca,_0x96e3b7,_0x20d274,_0x570611){return _0x30e8a1(_0x506eca,_0x96e3b7,_0x20d274,_0x570611);},'fezoj':function(_0x2df23c,_0x5e7f10){return _0x2df23c+_0x5e7f10;},'qkMZs':'被动邀请成功返回结果：','reNrU':'xOCJm','yEbVQ':function(_0x5a7290,_0x30429f){return _0x5a7290!==_0x30429f;},'mVVWF':'CBzDN','NdoUH':_0x1240('1d','4#jk'),'iQnGZ':function(_0x2ccca0,_0x323ff2){return _0x2ccca0+_0x323ff2;},'EfqUu':_0x1240('1e','1*@H'),'uXyXv':function(_0x252b2d,_0x5e7212){return _0x252b2d(_0x5e7212);},'FdLvQ':'获取分享PK码：','UFahG':_0x1240('1f','vP4i'),'HCjnS':_0x1240('20','6%Ff'),'QUGWm':function(_0x1231b7,_0x53afec){return _0x1231b7==_0x53afec;},'sjSCG':'UAIkJ','zHwPF':_0x1240('21','%!9D'),'emvBN':_0x1240('22','m3VI'),'sgKCL':'GCfBl','nyHpp':_0x1240('23','6%Ff'),'zzvli':function(_0x2cbb88,_0x3f1e25){return _0x2cbb88==_0x3f1e25;},'Qlran':_0x1240('24','%!9D'),'NjseU':function(_0x2626ff,_0x5a11c3){return _0x2626ff===_0x5a11c3;},'LuArH':'YzciY','tnozo':function(_0x3845ee,_0xbb626e){return _0x3845ee!==_0xbb626e;},'qdDBV':'VanHI','BAJbf':function(_0x35ef2c,_0x293840,_0x566a14){return _0x35ef2c(_0x293840,_0x566a14);},'OPHyn':function(_0x215f8f,_0x1cec25){return _0x215f8f!==_0x1cec25;},'nZbAs':_0x1240('25','m)F!'),'ICVbY':function(_0x198c8a,_0x225606){return _0x198c8a===_0x225606;},'MLhFS':_0x1240('26','n2(5'),'jFIHT':function(_0x510872,_0x5c3100){return _0x510872+_0x5c3100;},'EtLdq':'JnQfp','GFyBs':_0x1240('27','@h5Z'),'CFeUx':function(_0x245c90,_0x524366){return _0x245c90(_0x524366);},'dGlqj':_0x1240('28',')j]G'),'OrOzD':_0x1240('29','oJb%'),'sAIZO':'keep-alive','JPEde':_0x1240('2a','8IXE'),'WSaEK':function(_0x37d78f,_0x15447f){return _0x37d78f(_0x15447f);},'LxaCz':'icgKx','IRuMy':'https://api.scriptsjd.cf/api/JoyScore/CheckPin?','ronpk':'zh-cn','HWMsL':function(_0x1c15f6,_0x3d6366){return _0x1c15f6===_0x3d6366;},'hITAQ':'MHwsX','RoLsc':function(_0x901f98,_0x574edc){return _0x901f98!==_0x574edc;},'PZyPF':function(_0x2dabd2,_0x3ee657){return _0x2dabd2(_0x3ee657);},'uYeHA':function(_0x26318f,_0x4f4636){return _0x26318f+_0x4f4636;},'slrNO':_0x1240('2b','@h5Z'),'AEIWJ':_0x1240('2c','adp['),'Syxnj':function(_0x46e367,_0x4dd2ca){return _0x46e367!==_0x4dd2ca;},'GLuYo':_0x1240('2d','DZnm')};async function _0xbf03f1(){var _0x4510bb={'nKDIM':function(_0x544ab8,_0x4db5d2){return _0x544ab8+_0x4db5d2;}};let _0x51d26b=await _0x44faa3[_0x1240('2e','K3M!')](getToken);let _0x22dbee=[];let _0x1aaa98=[];console[_0x1240('2f','9N*Y')](_0x44faa3[_0x1240('30','rVGT')](_0x1240('31','mQRv'),_0x51d26b));if(_0x51d26b){let _0x2056d4;let _0x3d014a=await _0x44faa3[_0x1240('32','9Osy')](getPin);if(_0x3d014a['Pin']){if(_0x44faa3[_0x1240('33','h3x5')]===_0x44faa3['JFOUs']){console['log'](_0x44faa3[_0x1240('34','vP4i')](_0x44faa3[_0x1240('35','^j)i')](_0x1240('36','8DUA')+_0x3d014a[_0x1240('37','1*@H')],_0x44faa3[_0x1240('38','J693')]),_0x3d014a['lkToken']));}else{console[_0x1240('39','1*@H')](_0x44faa3['sjaxL']);}}console['log'](_0x44faa3['rgUix']);await _0x4a3001(APPID,_0x3d014a[_0x1240('3a','J693')]);await _0x44faa3['VJMXJ'](_0x24f5c4,APPID,_0x3d014a[_0x1240('3b','#)fb')]);let _0x3cdc5c=await _0x44faa3[_0x1240('3c','8IXE')](getUserPkInfo,_0x3d014a[_0x1240('3d','5Ks!')]);let _0xc23d10=await _0x47faee(_0x3d014a['Pin'],_0x3d014a[_0x1240('3e','rVGT')]);let _0x50c346=await _0x44faa3[_0x1240('3f','@h5Z')](getScore,_0x3d014a['Pin']);let _0x38a6bd={'PkPin':_0x3d014a[_0x1240('40','eFWX')],'PtPin':$[_0x1240('41','9Osy')],'RandomStr':_0xc23d10,'Score':_0x50c346};await _0x32f557(_0x38a6bd);countlaunch=0x0;countreceive=0x0;let _0x3b4317=await _0x44faa3[_0x1240('42','eFWX')](_0x163633,$[_0x1240('43','85EI')]);if(_0x44faa3[_0x1240('44','ggyE')](_0x3b4317,0x0)){countreceive=_0x3b4317;}let _0x1da7f1=await _0x5a451a(0x28,_0x50c346);console['log'](_0x1240('45','#jQm')+_0x1da7f1[_0x1240('46','8IXE')]+_0x1240('47','yrn4'));console[_0x1240('48','rHni')](_0x44faa3['lxgYR']+_0x50c346);if(_0x44faa3[_0x1240('49','rHni')](_0x3cdc5c[_0x1240('4a','$On#')],0x0)&&_0x44faa3['iwAsv'](_0x3cdc5c[_0x1240('4b','4hNb')],0x0)){console['log'](_0x44faa3[_0x1240('4c','rVGT')]);return;}console[_0x1240('4d','[Usn')](_0x44faa3[_0x1240('4e','mQRv')]);if(_0x44faa3['hEqlM'](_0x3cdc5c[_0x1240('4f','vP4i')],0x0)){_0x2056d4=await _0x44faa3['tUcAK'](getFriendPinList,_0x3d014a['Pin']);if(_0x44faa3[_0x1240('50','4#jk')](_0x2056d4[_0x1240('51','m)F!')],0x0)){let _0x3af677,_0x4ed9b7;for(let _0x2d76e0=0x0;_0x2d76e0<_0x2056d4[_0x1240('52','GKMx')];_0x2d76e0++){_0x3af677=_0x2056d4[_0x2d76e0];_0x4ed9b7=await _0x44faa3[_0x1240('53',')j]G')](getScore,_0x3af677);console['log'](_0x44faa3['sVyPO'](_0x44faa3[_0x1240('54','PAiZ')](_0x44faa3['PpvuE']+_0x3af677,_0x44faa3['vLNwI'])+_0x4ed9b7+_0x1240('55','bVm5'),_0x50c346));_0x44faa3[_0x1240('56','DvHw')](sleep,0x1f4);if(_0x44faa3[_0x1240('57','ylbF')](_0x4ed9b7,_0x50c346)){if(_0x44faa3['JOxSt'](_0x44faa3[_0x1240('58','[Usn')],_0x1240('59','9Osy'))){console[_0x1240('2f','9N*Y')](_0x44faa3[_0x1240('5a','GKMx')]+data[_0x1240('5b','GKMx')]);bcomplate=![];}else{if(_0x44faa3['tcycb'](countlaunch,_0x3cdc5c['leftLunchPkNum'])){_0x22dbee['push'](_0x3af677);console[_0x1240('5c','vDQv')]('账户分数更高，进行主动PK');await _0x44faa3['BgQwd'](_0x4b4a64,_0x3af677,_0x3d014a[_0x1240('5d','DvHw')],_0x3d014a[_0x1240('5e','mQRv')]);}}}else{if(_0x44faa3[_0x1240('5f','9Osy')](_0x44faa3['MghUB'],_0x44faa3[_0x1240('60','9N*Y')])){continue;}else{resolve(res);}}}}else{if(_0x44faa3[_0x1240('61','vP4i')]===_0x1240('62','n2(5')){console[_0x1240('63','J693')](_0x44faa3[_0x1240('64','adp[')]);}else{console[_0x1240('65','m)F!')](e);}}}else{console[_0x1240('66','IjC0')](_0x44faa3[_0x1240('67','AaSe')]);}console['log'](_0x44faa3[_0x1240('68','8DUA')]);_0x3cdc5c=await _0x44faa3[_0x1240('69','@h5Z')](getUserPkInfo,_0x3d014a['Pin']);if(_0x44faa3[_0x1240('6a','ggyE')](_0x44faa3[_0x1240('6b','AaSe')](_0x3cdc5c[_0x1240('6c','85EI')],countreceive),0x0)){if(_0x1da7f1){for(let _0x5c5ce7=0x0;_0x44faa3[_0x1240('6d','8IXE')](_0x5c5ce7,_0x1da7f1[_0x1240('6e','^j)i')]);_0x5c5ce7++){if(_0x44faa3['YcZIm'](_0x44faa3[_0x1240('6f','J19[')],_0x44faa3['yMlbK'])){console[_0x1240('70','#)fb')](_0x4510bb['nKDIM']('当前胜场:',data[_0x1240('71','mQRv')][_0x1240('72','t#i&')]));}else{let _0x3af677=_0x1da7f1[_0x5c5ce7][_0x1240('73','DZnm')];let _0xb3d54=_0x1da7f1[_0x5c5ce7]['RandomStr'];let _0x4ed9b7=_0x1da7f1[_0x5c5ce7][_0x1240('74','4hNb')];let _0x526524=0x1;if(_0x44faa3[_0x1240('75','PAiZ')](_0x22dbee['indexOf'](_0x3af677),-0x1)){if(_0x44faa3[_0x1240('76','#)fb')](_0x1240('77','1*@H'),_0x44faa3[_0x1240('78','9N*Y')])){console[_0x1240('79','vP4i')](resp);}else{continue;}}if(_0x2056d4!=null&&_0x44faa3['DMjbm'](_0x2056d4['indexOf'](_0x3af677),-0x1)){if(_0x44faa3[_0x1240('7a','5Ks!')](_0x44faa3[_0x1240('7b','BqXK')],_0x44faa3['aHBVa'])){_0x526524=0x1;}else{if(res){let _0x5e44e6=$['toObj'](res);if(_0x5e44e6){score=_0x5e44e6[_0x1240('7c','8DUA')];}}}}else{_0x526524=0x2;}_0x44faa3[_0x1240('7d','vP4i')](sleep,0x3e8);console['log'](_0x44faa3[_0x1240('7e','4hNb')](_0x44faa3[_0x1240('7f','1*@H')](_0x44faa3['voWwz'](_0x44faa3[_0x1240('80','yrn4')]('用户PIN:\x20',_0x3af677),_0x1240('81',')j]G')),_0x4ed9b7)+_0x44faa3[_0x1240('82','9Osy')],_0x50c346));if(_0x44faa3['tcycb'](_0x4ed9b7,_0x50c346)){if(_0x44faa3[_0x1240('83','9Osy')]('DuRru',_0x44faa3[_0x1240('84','n2(5')])){if(countreceive<_0x3cdc5c[_0x1240('85','GKMx')]){console['log'](_0x44faa3[_0x1240('86','IjC0')]);await _0x44faa3[_0x1240('87','ggyE')](_0x167873,_0xb3d54,_0x3d014a[_0x1240('88','PAiZ')],_0x3d014a[_0x1240('89','@h5Z')],_0x526524);if(bcomplate){_0x44faa3[_0x1240('8a','PAiZ')](sleep,0x3e8);await _0x44faa3['VJBzF'](_0x2fae01,_0xb3d54,_0x3d014a[_0x1240('8b','rd61')],_0x3d014a[_0x1240('8c','1*@H')],0x1);}}}else{console['log'](resp);}}else{continue;}}}console[_0x1240('8d','4hNb')](_0x44faa3[_0x1240('8e','%!9D')]);}else{console[_0x1240('8f','$On#')](_0x1240('90','rd61'));}}else{console['log'](_0x44faa3[_0x1240('91','DvHw')]);}console[_0x1240('92','K3M!')](_0x44faa3['BQDKj']);let _0x567c26=await _0x44faa3[_0x1240('93','$On#')](getBoxRewardInfo,_0x3d014a[_0x1240('94','4#jk')]);if(_0x567c26[_0x1240('95','m)F!')]){if(_0x44faa3['jxGBo'](_0x44faa3['mWAPm'],_0x44faa3[_0x1240('96','8DUA')])){frelation=0x2;}else{for(let _0x130dfc=0x0;_0x44faa3[_0x1240('97',')j]G')](_0x130dfc,_0x567c26[_0x1240('98','vP4i')][_0x1240('99','$On#')]);_0x130dfc++){let _0x2fb7dc=_0x567c26['awards'][_0x130dfc];if(_0x2fb7dc[_0x1240('9a','vDQv')]==0x0){if(_0x44faa3[_0x1240('9b','$On#')](_0x44faa3[_0x1240('9c','DZnm')],_0x44faa3[_0x1240('9d','eFWX')])){if(_0x44faa3[_0x1240('9e','bS[p')](_0x567c26[_0x1240('9f','adp[')],_0x2fb7dc['wins'])){if(_0x44faa3[_0x1240('a0','yrn4')](_0x44faa3[_0x1240('a1','ylbF')],_0x44faa3[_0x1240('a2','$On#')])){if(_0x44faa3[_0x1240('a3','8DUA')](data[_0x1240('a4','85EI')],0x2)){console[_0x1240('a5','^j)i')](_0x44faa3[_0x1240('a6','4hNb')]+data['msg']);}}else{console[_0x1240('2f','9N*Y')](_0x44faa3[_0x1240('a7','bVm5')]+_0x2fb7dc['rewards'][0x0]['beanPoolName']);await _0x44faa3['GVdPi'](sendBoxReward,_0x2fb7dc['id'],_0x3d014a[_0x1240('a8','h3x5')]);}}}else{_0x44faa3[_0x1240('a9','bS[p')](resolve,res);}}}}}console['log'](_0x44faa3[_0x1240('aa','@h5Z')]);}};function _0x4b4a64(_0x50ade5,_0x2ec667,_0x4f1143,_0x3657b9=0x2){var _0x4253ba={'GQSns':function(_0x2cfd3d,_0x33c571){return _0x44faa3[_0x1240('ab','eFWX')](_0x2cfd3d,_0x33c571);},'jZGdS':_0x44faa3['dandr'],'CCJzd':_0x44faa3[_0x1240('91','DvHw')],'SPgyJ':function(_0x5bcd99,_0x5e1445){return _0x44faa3[_0x1240('ac','bVm5')](_0x5bcd99,_0x5e1445);},'sGcik':_0x44faa3[_0x1240('ad','rHni')],'wXbNb':function(_0x221858,_0x19febc){return _0x221858+_0x19febc;},'BHABD':_0x44faa3[_0x1240('ae','oJb%')],'GsksS':function(_0x39d80a,_0x1bd002){return _0x39d80a===_0x1bd002;},'ZvyOb':_0x44faa3[_0x1240('af','PAiZ')],'hArik':_0x44faa3[_0x1240('b0','bVm5')],'irkJP':function(_0x3de81f,_0x1d9ffb){return _0x44faa3[_0x1240('b1','h3x5')](_0x3de81f,_0x1d9ffb);},'PABxJ':function(_0x4c3ae9,_0x369dd6){return _0x44faa3['nfODS'](_0x4c3ae9,_0x369dd6);},'LDsYZ':_0x44faa3[_0x1240('b2','t#i&')],'OHfoO':_0x44faa3[_0x1240('b3','adp[')],'KntHB':_0x44faa3[_0x1240('b4','m)F!')],'JpFlz':function(_0x36ccbe,_0x52c045){return _0x44faa3[_0x1240('b5','3ia)')](_0x36ccbe,_0x52c045);},'MTApq':_0x44faa3[_0x1240('b6','1*@H')],'DvAWz':_0x44faa3[_0x1240('b7','oJb%')],'oZmkI':function(_0x3d44e4,_0x4abe85){return _0x44faa3[_0x1240('b8','J693')](_0x3d44e4,_0x4abe85);},'zxuOV':_0x1240('b9','6%Ff')};if(_0x44faa3[_0x1240('ba','adp[')](_0x44faa3[_0x1240('bb','t#i&')],_0x44faa3[_0x1240('bc','h3x5')])){console[_0x1240('bd','BqXK')](_0x44faa3['taUEU']);var _0x31ed96=new Date()[_0x1240('be','DvHw')]();let _0x1da377='{\x22actId\x22:9,\x22recipient\x22:\x22'+_0x50ade5+_0x1240('bf','bS[p')+_0x3657b9+'}';const _0x4b20b6=_0x44faa3[_0x1240('c0',')j]G')](_0x3284fc,APPID,md5Key,_0x1da377,_0x31ed96);const _0x36e815='appId='+APPID+_0x1240('c1','85EI')+_0x2ec667+'&lkToken='+_0x4f1143+_0x1240('c2','AaSe')+_0x4b20b6+_0x1240('c3','vDQv')+_0x31ed96;const _0x2e09d0=_0x44faa3[_0x1240('c4','m3VI')](getPostRequest,'launchBattle',_0x36e815,_0x1da377);return new Promise(_0x5ba707=>{$[_0x1240('c5','[Usn')](_0x2e09d0,(_0xf4b1d8,_0x287134,_0x434899)=>{var _0x3b2d76={'OYbMR':function(_0x5539ac,_0x30ad4e){return _0x4253ba[_0x1240('c6','rd61')](_0x5539ac,_0x30ad4e);},'gXjAy':_0x4253ba['jZGdS'],'qZctV':function(_0x554f06,_0x1a5770){return _0x554f06+_0x1a5770;},'aelIN':_0x4253ba[_0x1240('c7','^j)i')]};try{if(_0x434899){let _0x4dd3ec=$['toObj'](_0x434899);if(_0x4dd3ec){_0x4dd3ec=_0x4dd3ec[_0x1240('c8','eFWX')];if(_0x4dd3ec[_0x1240('c9','yrn4')]){if(_0x4253ba[_0x1240('ca','9N*Y')](_0x4253ba[_0x1240('cb','m)F!')],_0x4253ba['sGcik'])){if(_0x4dd3ec['state']>0x2){console[_0x1240('cc','bVm5')](_0x4253ba['wXbNb'](_0x4253ba[_0x1240('cd','rHni')],_0x4dd3ec[_0x1240('ce','8DUA')]));}}else{if(_0x3b2d76[_0x1240('cf','oJb%')](intype,0x0)){console[_0x1240('8f','$On#')](_0x3b2d76[_0x1240('d0','PAiZ')]+_0x4dd3ec[_0x1240('d1','rHni')][_0x1240('d2','J19[')]);}else{console[_0x1240('d3','8DUA')](_0x3b2d76[_0x1240('d4','GKMx')](_0x1240('d5','vP4i'),_0x4dd3ec[_0x1240('d6','4#jk')][_0x1240('d7','rVGT')]));}}}else{if(_0x4dd3ec['pkResult']){if(_0x4253ba[_0x1240('d8','@h5Z')](_0x4253ba[_0x1240('d9','J693')],_0x4253ba[_0x1240('da','K3M!')])){console[_0x1240('db','9Osy')](_0x3b2d76[_0x1240('dc','#)fb')]);}else{countlaunch++;console[_0x1240('dd','n2(5')](_0x4253ba[_0x1240('de','AaSe')](_0x1240('df','TFEY'),$[_0x1240('e0','yrn4')](_0x4dd3ec)));console[_0x1240('d3','8DUA')](_0x4253ba[_0x1240('e1','yrn4')]+_0x4dd3ec[_0x1240('e2','bS[p')][_0x1240('e3','IjC0')]);}}else{if(_0x4253ba[_0x1240('e4','J19[')](_0x4253ba[_0x1240('e5','t#i&')],_0x4253ba['OHfoO'])){let _0x50ac15=$[_0x1240('e6','yrn4')](_0x434899);if(_0x50ac15){score=_0x50ac15[_0x1240('e7','6%Ff')];}}else{console[_0x1240('bd','BqXK')](_0x4253ba[_0x1240('e8','yrn4')]+$[_0x1240('e9','ggyE')](_0x4dd3ec));}}sleep(0x3e8);}}}else{console[_0x1240('63','J693')](_0x4253ba['JpFlz'](_0x4253ba[_0x1240('ea','yrn4')],_0x434899));}}catch(_0x34312f){console[_0x1240('eb','bS[p')](_0x287134);}finally{if(_0x4253ba[_0x1240('ec','8DUA')]('yAOMR',_0x4253ba[_0x1240('ed','8IXE')])){console[_0x1240('8f','$On#')](_0x287134);}else{_0x4253ba['oZmkI'](_0x5ba707,_0x434899);}}});});}else{console[_0x1240('cc','bVm5')](_0x4253ba[_0x1240('ee','ggyE')]+$[_0x1240('ef','vDQv')](resp));}};function _0x167873(_0x49d3ff,_0x33595a,_0x1b214a,_0x187f74=0x2){var _0x556bf3={'Rvtlg':function(_0x34925b,_0x26959f){return _0x44faa3['fezoj'](_0x34925b,_0x26959f);},'dRkRE':_0x44faa3[_0x1240('f0','PAiZ')],'UwIhW':_0x44faa3[_0x1240('f1','rd61')],'yHEUU':function(_0x3ea848,_0x13457d){return _0x3ea848===_0x13457d;},'tUlVG':function(_0x149074,_0x4e05ec){return _0x44faa3['HjAdV'](_0x149074,_0x4e05ec);},'PcZnR':function(_0x1b3fbb,_0x57a928){return _0x44faa3[_0x1240('f2','8IXE')](_0x1b3fbb,_0x57a928);},'cuyVQ':_0x44faa3[_0x1240('f3','rVGT')],'TfRIc':_0x44faa3[_0x1240('f4','vDQv')],'nALgS':function(_0x1e27f0,_0x489ca5){return _0x44faa3[_0x1240('f5','@h5Z')](_0x1e27f0,_0x489ca5);},'guetR':_0x44faa3['pMDev']};console[_0x1240('f6','DZnm')]('发起被动PK邀请挑战');var _0x1d8443=new Date()['getTime']();let _0x56edbe=_0x1240('f7','yrn4')+_0x49d3ff+_0x1240('f8','$On#')+_0x187f74+'}';const _0x282778=_0x3284fc(APPID,md5Key,_0x56edbe,_0x1d8443);const _0x127320=_0x1240('f9','bS[p')+APPID+_0x1240('fa','1*@H')+_0x33595a+_0x1240('fb','4#jk')+_0x1b214a+'&sign='+_0x282778+_0x1240('fc','bVm5')+_0x1d8443;const _0xa81b52=getPostRequest(_0x44faa3[_0x1240('fd','ggyE')],_0x127320,_0x56edbe);return new Promise(_0x3307c0=>{var _0x56bdff={'UiOhE':function(_0x3da28c,_0x315f32){return _0x556bf3['Rvtlg'](_0x3da28c,_0x315f32);},'RMqer':_0x556bf3[_0x1240('fe',')j]G')],'phzHm':function(_0x589758,_0x4bb09c){return _0x589758(_0x4bb09c);},'YvcWL':_0x556bf3[_0x1240('ff','#)fb')],'oFKCB':function(_0x270e8d,_0x1b2dd8){return _0x556bf3[_0x1240('100','rHni')](_0x270e8d,_0x1b2dd8);},'DAEUS':function(_0x148473,_0x508023){return _0x556bf3['tUlVG'](_0x148473,_0x508023);},'XPmMb':function(_0x409ace,_0xb22bde){return _0x556bf3[_0x1240('101','$On#')](_0x409ace,_0xb22bde);},'FRlJS':_0x556bf3[_0x1240('102','oJb%')],'edDnk':function(_0x417f05,_0x51f98b){return _0x417f05===_0x51f98b;},'zySXw':_0x556bf3['TfRIc'],'ipFBw':function(_0x3b663d,_0x2497ba){return _0x556bf3['nALgS'](_0x3b663d,_0x2497ba);},'iZvcV':_0x556bf3[_0x1240('103','$On#')]};$[_0x1240('104','vP4i')](_0xa81b52,(_0x5c0737,_0x566e38,_0x2f136e)=>{var _0x51ee10={'rCXRS':function(_0x3ec696,_0x313568){return _0x56bdff[_0x1240('105','vDQv')](_0x3ec696,_0x313568);}};if(_0x1240('106','h3x5')!==_0x56bdff[_0x1240('107','4hNb')]){_0x51ee10[_0x1240('108','ylbF')](_0x3307c0,score);}else{try{if(_0x2f136e){if(_0x56bdff[_0x1240('109','AaSe')](_0x1240('10a','%!9D'),_0x1240('10b','J693'))){if(_0x2f136e){let _0x1eee78=$['toObj'](_0x2f136e);if(_0x1eee78){score=_0x1eee78[_0x1240('7c','8DUA')];}}}else{let _0x463f5d=$[_0x1240('10c','^RRs')](_0x2f136e);if(_0x463f5d){_0x463f5d=_0x463f5d[_0x1240('10d','bS[p')];if(_0x463f5d[_0x1240('10e','PAiZ')]){if(_0x56bdff['DAEUS'](_0x463f5d[_0x1240('10f','9N*Y')],0x2)){console[_0x1240('66','IjC0')](_0x1240('110','85EI')+_0x463f5d['msg']);bcomplate=![];}}else{if(_0x56bdff[_0x1240('111','#)fb')](_0x56bdff[_0x1240('112','vP4i')],_0x1240('113','5Ks!'))){countreceive++;console[_0x1240('4d','[Usn')](_0x56bdff[_0x1240('114','yrn4')](_0x56bdff[_0x1240('115','@h5Z')],$[_0x1240('116','m3VI')](_0x463f5d)));}else{if(_0x463f5d[_0x1240('117','PAiZ')]){if(_0x56bdff['edDnk'](_0x56bdff[_0x1240('118','mQRv')],_0x56bdff[_0x1240('119','#jQm')])){countreceive++;console[_0x1240('11a','3ia)')](_0x56bdff[_0x1240('11b','#)fb')](_0x56bdff[_0x1240('11c','%!9D')],$[_0x1240('11d','3ia)')](_0x463f5d)));}else{if(_0x2f136e){console[_0x1240('11e','rVGT')]('上传结果：'+_0x2f136e);}}}else{bcomplate=!![];console[_0x1240('11f','adp[')](_0x56bdff['ipFBw'](_0x1240('120','IjC0'),$[_0x1240('121','J19[')](_0x463f5d)));}}}}}}else{bcomplate=![];console[_0x1240('8d','4hNb')](_0x56bdff['ipFBw'](_0x56bdff[_0x1240('122','t#i&')],_0x2f136e));}}catch(_0x3f6206){console[_0x1240('123','eFWX')](_0x566e38);}finally{_0x3307c0(_0x2f136e);}}});});};function _0x2fae01(_0x40d6f4,_0x5c081c,_0x5cec5b,_0x42fec3){var _0x53bd1d={'iAKir':function(_0x559d3f,_0x1c6b0b){return _0x44faa3['uXyXv'](_0x559d3f,_0x1c6b0b);},'xpwWE':_0x44faa3[_0x1240('124','m3VI')],'CucHb':function(_0x360e24,_0x4f1ed4){return _0x44faa3[_0x1240('125','85EI')](_0x360e24,_0x4f1ed4);},'sJIOC':_0x44faa3[_0x1240('126','ylbF')],'plVxy':_0x1240('127','bVm5'),'OgxsD':_0x44faa3[_0x1240('128','8IXE')],'ChSdX':_0x44faa3['HCjnS'],'rJyms':function(_0x3d1070,_0x3b85eb){return _0x44faa3[_0x1240('129','85EI')](_0x3d1070,_0x3b85eb);},'sKLMG':function(_0x2df713,_0x5d52d4){return _0x44faa3['yEbVQ'](_0x2df713,_0x5d52d4);},'PDQbh':function(_0x5819c6,_0x3ee2f8){return _0x44faa3['yEbVQ'](_0x5819c6,_0x3ee2f8);},'mbohV':_0x44faa3[_0x1240('12a','adp[')],'yKuzO':_0x1240('12b','DZnm'),'XKVeG':'UuFAV','GmcjC':function(_0x2584f2,_0x16cf99){return _0x44faa3['yEbVQ'](_0x2584f2,_0x16cf99);},'IjhEH':_0x44faa3[_0x1240('12c','[Usn')],'KMZLh':function(_0x286e89,_0x25fd23,_0x2cd44a,_0x4b926f,_0x3f8649){return _0x286e89(_0x25fd23,_0x2cd44a,_0x4b926f,_0x3f8649);},'yXMlT':function(_0x282262,_0x53dd4b,_0x393594,_0x3a5fce){return _0x44faa3[_0x1240('12d','h3x5')](_0x282262,_0x53dd4b,_0x393594,_0x3a5fce);},'MvNhG':_0x44faa3[_0x1240('12e','h3x5')]};if(_0x44faa3[_0x1240('12f','8DUA')](_0x44faa3['sgKCL'],_0x44faa3[_0x1240('130','%!9D')])){resolve(data);}else{console['log'](_0x44faa3[_0x1240('131','bVm5')]);return new Promise(_0x2cbfb6=>{var _0x2b582f={'LXjeB':_0x53bd1d[_0x1240('132','m)F!')],'hEMDj':function(_0x30dfd6,_0x2e1619){return _0x53bd1d['iAKir'](_0x30dfd6,_0x2e1619);},'xxKaH':function(_0x32ed86,_0x19b1b7){return _0x53bd1d[_0x1240('133','%!9D')](_0x32ed86,_0x19b1b7);},'qBMMX':_0x53bd1d[_0x1240('134','PAiZ')],'wJXyH':_0x53bd1d['plVxy'],'cVAcH':function(_0x2905e2,_0x14a79a){return _0x2905e2===_0x14a79a;},'KTKsu':_0x53bd1d[_0x1240('135','BqXK')],'AROWv':_0x53bd1d['ChSdX'],'gcDyg':function(_0x3deaff,_0x45fddc){return _0x53bd1d['rJyms'](_0x3deaff,_0x45fddc);},'mXntd':function(_0x50687e,_0x40b7fe){return _0x53bd1d[_0x1240('136','4hNb')](_0x50687e,_0x40b7fe);},'vKxzn':_0x1240('137','oJb%'),'HdWuf':'UuRdk','PpXTt':function(_0x15a698,_0x184528){return _0x15a698==_0x184528;},'VtdEQ':function(_0x2095d6,_0x5979b4){return _0x53bd1d['PDQbh'](_0x2095d6,_0x5979b4);},'tZiHe':_0x1240('138','DvHw'),'XsnEV':_0x53bd1d['mbohV'],'zkAsP':function(_0x2e24f1,_0x4fa582){return _0x2e24f1+_0x4fa582;},'HEjfR':function(_0x1e9571,_0x34f423){return _0x53bd1d[_0x1240('139','#)fb')](_0x1e9571,_0x34f423);},'NMvVJ':_0x53bd1d[_0x1240('13a','t#i&')],'bqAjr':function(_0x34edc1,_0x5be40e){return _0x34edc1+_0x5be40e;},'GccdY':_0x1240('13b','85EI'),'qVqkO':_0x53bd1d['XKVeG'],'KflSZ':function(_0x4fc3ce,_0x5e76c4){return _0x4fc3ce(_0x5e76c4);}};if(_0x53bd1d[_0x1240('13c','8DUA')](_0x53bd1d[_0x1240('13d','IjC0')],_0x53bd1d['IjhEH'])){_0x53bd1d[_0x1240('13e','$On#')](_0x2cbfb6,res);}else{var _0x2e9660=new Date()[_0x1240('13f','m)F!')]();let _0x35064b='{\x22actId\x22:9,\x22randomStr\x22:\x22'+_0x40d6f4+'\x22}';const _0xebc1e4=_0x53bd1d[_0x1240('140','85EI')](_0x3284fc,APPID,md5Key,_0x35064b,_0x2e9660);const _0x1e9df9=_0x1240('141','[Usn')+APPID+_0x1240('142','%!9D')+_0x5c081c+_0x1240('143','5Ks!')+_0x5cec5b+'&sign='+_0xebc1e4+_0x1240('144','^RRs')+_0x2e9660;const _0x397814=_0x53bd1d[_0x1240('145','85EI')](getPostRequest,_0x53bd1d[_0x1240('146','m)F!')],_0x1e9df9,_0x35064b);$['post'](_0x397814,(_0xbe2aca,_0xc1c2e0,_0x1fa35d)=>{var _0x1e4aa0={'yXqDt':function(_0x43a48c,_0x26651f){return _0x2b582f[_0x1240('147','BqXK')](_0x43a48c,_0x26651f);},'tZYTU':_0x1240('148','rHni'),'eseyI':_0x2b582f[_0x1240('149','ylbF')]};try{if(_0x1fa35d){if(_0x2b582f[_0x1240('14a','PAiZ')](_0x2b582f[_0x1240('14b','8DUA')],_0x2b582f[_0x1240('14c','GKMx')])){score=data[_0x1240('14d','t#i&')];}else{let _0x21a7fa=$[_0x1240('14e','m3VI')](_0x1fa35d);if(_0x21a7fa){_0x21a7fa=_0x21a7fa['data'];if(_0x2b582f[_0x1240('14f','PAiZ')](_0x21a7fa[_0x1240('150','#jQm')],0x1)){if(_0x2b582f[_0x1240('151','3ia)')](_0x1240('152','ylbF'),_0x2b582f[_0x1240('153','^j)i')])){if(_0x21a7fa[_0x1240('154','85EI')]){if(_0x2b582f[_0x1240('155','bVm5')]('UuRdk',_0x2b582f[_0x1240('156','PAiZ')])){if(_0x2b582f[_0x1240('157','#jQm')](_0x42fec3,0x0)){if(_0x2b582f[_0x1240('158','ggyE')]('uuzVT',_0x2b582f[_0x1240('159','m3VI')])){console['log'](_0x2b582f[_0x1240('15a','PAiZ')](_0x2b582f[_0x1240('15b','t#i&')],_0x21a7fa['pkResult'][_0x1240('15c','K3M!')]));}else{if(_0x21a7fa['pkResult']){countreceive++;console[_0x1240('5c','vDQv')](_0x1e4aa0['yXqDt'](_0x1e4aa0['tZYTU'],$['toStr'](_0x21a7fa)));}else{bcomplate=!![];console['log'](_0x1e4aa0['yXqDt'](_0x1e4aa0[_0x1240('15d','6%Ff')],$[_0x1240('15e','^j)i')](_0x21a7fa)));}}}else{if(_0x2b582f[_0x1240('15f','8DUA')](_0x1240('160','eFWX'),_0x2b582f[_0x1240('161','#jQm')])){console[_0x1240('162','J19[')](_0x2b582f[_0x1240('163','oJb%')]+_0x21a7fa[_0x1240('164','J19[')]['toWinNum']);}else{_0x21a7fa=$[_0x1240('165','m)F!')](_0x1fa35d);_0x21a7fa=_0x21a7fa[_0x1240('166','mQRv')];if(_0x21a7fa){console['log'](_0x2b582f[_0x1240('167','J693')]+_0x21a7fa);_0x2b582f[_0x1240('168','9Osy')](_0x2cbfb6,_0x21a7fa);}}}}else{_0x2cbfb6(score);}}countreceive++;}else{let _0x3a28f0=$[_0x1240('169','TFEY')](_0x1fa35d);_0x2b582f[_0x1240('16a','DZnm')](_0x2cbfb6,_0x3a28f0);}}else{console[_0x1240('16b','ylbF')](_0x2b582f[_0x1240('16c','m)F!')](_0x1240('16d','%!9D'),$[_0x1240('15e','^j)i')](_0x21a7fa)));}}}}}catch(_0x4350c8){if(_0x2b582f['HEjfR'](_0x2b582f[_0x1240('16e','ggyE')],_0x2b582f['NMvVJ'])){frelation=0x1;}else{console['log'](_0x2b582f[_0x1240('16f','85EI')](_0x2b582f['GccdY'],$[_0x1240('170','bVm5')](_0xc1c2e0)));}}finally{if(_0x2b582f[_0x1240('171','mQRv')]!==_0x2b582f['qVqkO']){if(data[_0x1240('172','@h5Z')]){if(_0x42fec3==0x0){console[_0x1240('123','eFWX')](_0x2b582f[_0x1240('173','bS[p')]('当前胜场:',data['pkResult'][_0x1240('174','8IXE')]));}else{console['log'](_0x2b582f[_0x1240('175','5Ks!')](_0x2b582f[_0x1240('176','AaSe')],data['pkResult'][_0x1240('177','4hNb')]));}}countreceive++;}else{_0x2b582f[_0x1240('178','GKMx')](_0x2cbfb6,_0x1fa35d);}}});}});}}function _0x3284fc(_0x2a12fb,_0xb577cb,_0x2bbd97,_0xe34411,_0x41efd8=0x0){let _0xb24174;if(_0x44faa3[_0x1240('179','ggyE')](_0x41efd8,0x0)){_0xb24174=_0x2a12fb+'_'+_0xb577cb+'_'+_0x2bbd97+'_'+_0xe34411;}else{_0xb24174=_0x2a12fb+'_'+_0xb577cb+'__'+_0xe34411;}return $[_0x1240('17a','#jQm')](_0xb24174);}function _0x47faee(_0x59fbb2,_0x52a3df){var _0x29a7ab={'RbdiV':_0x44faa3['Qlran'],'oUXRx':function(_0x3c0490,_0x3aedb1){return _0x3c0490+_0x3aedb1;},'FmSeV':function(_0x47375b,_0x14eaf6){return _0x44faa3[_0x1240('17b','PAiZ')](_0x47375b,_0x14eaf6);},'qwSdM':_0x44faa3[_0x1240('17c','oJb%')],'EyvEs':function(_0x541e13,_0x4acd23,_0xe3ecc0,_0x107626){return _0x44faa3[_0x1240('17d','3ia)')](_0x541e13,_0x4acd23,_0xe3ecc0,_0x107626);}};if(_0x44faa3[_0x1240('17e','m3VI')]('YzciY',_0x44faa3[_0x1240('17f','1*@H')])){return new Promise(_0x5df374=>{var _0x40aef4={'lLUAL':_0x29a7ab[_0x1240('180','rd61')],'lcBrE':function(_0x48dd3a,_0x4e9cde){return _0x48dd3a(_0x4e9cde);}};var _0xa7200a=new Date()[_0x1240('181','rd61')]();const _0xe13faa=_0x3284fc(APPID,md5Key,'',_0xa7200a,0x1);const _0x11da64='actId=9&lkToken='+_0x52a3df+_0x1240('182','GKMx')+APPID+'&lkEPin='+_0x59fbb2+'&sign='+_0xe13faa+_0x1240('183','mQRv')+_0xa7200a;const _0x5ef5e1=_0x29a7ab[_0x1240('184','ggyE')](getGetRequest,_0x1240('185','PAiZ'),_0x11da64,0x0);$['get'](_0x5ef5e1,(_0x268a07,_0x237cea,_0x5f442e)=>{let _0xd2c47d;try{if(_0x5f442e){if(_0x29a7ab['RbdiV']===_0x29a7ab[_0x1240('186','4hNb')]){_0xd2c47d=$['toObj'](_0x5f442e);_0xd2c47d=_0xd2c47d['data'];if(_0xd2c47d){console['log'](_0x29a7ab[_0x1240('187','DZnm')](_0x1240('188','BqXK'),_0xd2c47d));_0x5df374(_0xd2c47d);}}else{console[_0x1240('11a','3ia)')](_0x40aef4[_0x1240('189','rd61')]+_0xd2c47d);_0x40aef4[_0x1240('18a','ylbF')](_0x5df374,_0xd2c47d);}}}catch(_0x49baa4){console[_0x1240('18b','@h5Z')](_0x237cea);}finally{_0x29a7ab['FmSeV'](_0x5df374,_0xd2c47d);}});});}else{console[_0x1240('18c','PAiZ')](_0x1240('18d',')j]G')+res);}}function _0x4a3001(_0x349cbf,_0x6a0752){var _0x26f58f={'uEKXE':function(_0x26fe0d,_0x4ec0c9){return _0x44faa3[_0x1240('18e','IjC0')](_0x26fe0d,_0x4ec0c9);}};if(_0x44faa3['tnozo']('rSyhA',_0x44faa3[_0x1240('18f','3ia)')])){const _0x195df8=_0x1240('190','oJb%')+_0x349cbf+_0x1240('191','9Osy')+_0x6a0752;const _0x390c80=_0x44faa3[_0x1240('192','mQRv')](getGetRequest,_0x1240('193','bS[p'),_0x195df8);return new Promise(_0x1f2ec6=>{var _0x1aef88={'VMOFk':_0x1240('194','h3x5'),'XmuWe':function(_0x5ea3e9,_0x4b7a77){return _0x26f58f[_0x1240('195','@h5Z')](_0x5ea3e9,_0x4b7a77);}};$[_0x1240('196','rHni')](_0x390c80,(_0x2e0b96,_0x33856f,_0x4ad4a9)=>{let _0x182e09=0x0;try{if(_0x1aef88[_0x1240('197','n2(5')]===_0x1aef88['VMOFk']){if(_0x4ad4a9){let _0x226f2f=$[_0x1240('198','9N*Y')](_0x4ad4a9);if(_0x226f2f){_0x182e09=_0x226f2f[_0x1240('199','J19[')];}}}else{_0x1f2ec6(_0x4ad4a9);}}catch(_0x11969f){console['log'](_0x33856f);}finally{_0x1aef88['XmuWe'](_0x1f2ec6,_0x182e09);}});});}else{console[_0x1240('70','#)fb')](resp);}}function _0x24f5c4(_0x5db2ff,_0x28fc0a){var _0x5cb7a8={'wFRns':function(_0x212e16,_0x44ccc9){return _0x44faa3['NjseU'](_0x212e16,_0x44ccc9);},'gNOOo':_0x1240('19a','^RRs'),'DQxWp':function(_0x50464c,_0x570948){return _0x44faa3[_0x1240('19b','ggyE')](_0x50464c,_0x570948);},'lkvIc':_0x44faa3[_0x1240('19c','h3x5')],'VdwNu':function(_0x921427,_0x39a220){return _0x44faa3[_0x1240('19d','DvHw')](_0x921427,_0x39a220);},'lRflh':'HYuTb'};const _0x18fcbf='actId=9&appId='+_0x5db2ff+'&lkEPin='+_0x28fc0a;const _0x47c6dd=_0x44faa3[_0x1240('19e','AaSe')](getGetRequest,_0x44faa3[_0x1240('19f','DvHw')],_0x18fcbf);return new Promise(_0x20a396=>{$['get'](_0x47c6dd,(_0x5a61d3,_0x215dcd,_0x3b7f5a)=>{var _0x35e25f={'ZRlmH':function(_0x2b777c,_0x644492){return _0x2b777c(_0x644492);}};let _0x15d5f1=0x0;try{if(_0x3b7f5a){if(_0x5cb7a8['wFRns'](_0x5cb7a8[_0x1240('1a0','mQRv')],'dyalQ')){let _0xeb9a36=$['toObj'](_0x3b7f5a);if(_0xeb9a36){_0x15d5f1=_0xeb9a36[_0x1240('1a1','adp[')];}}else{console[_0x1240('d3','8DUA')](e);}}}catch(_0x367ed2){if(_0x5cb7a8[_0x1240('1a2','m3VI')](_0x1240('1a3','J19['),_0x5cb7a8['lkvIc'])){if(_0x3b7f5a){data=$[_0x1240('1a4','mQRv')](_0x3b7f5a);data=data[_0x1240('1a5','[Usn')];if(data){console['log'](_0x1240('1a6','#jQm')+data);_0x35e25f[_0x1240('1a7','yrn4')](_0x20a396,data);}}}else{console[_0x1240('1a8','TFEY')](_0x215dcd);}}finally{if(_0x5cb7a8[_0x1240('1a9','PAiZ')]('rtQds',_0x5cb7a8[_0x1240('1aa','rVGT')])){let _0x1c9b64=$[_0x1240('1ab','#)fb')](_0x3b7f5a);if(_0x1c9b64){_0x15d5f1=_0x1c9b64['data'];}}else{_0x20a396(_0x15d5f1);}}});});}function _0x32f557(_0x1fab05){var _0x2d3be4={'fzXnM':function(_0x4a6d77,_0x153b84){return _0x44faa3[_0x1240('1ac','yrn4')](_0x4a6d77,_0x153b84);},'gCiAM':_0x44faa3['EtLdq'],'TaeAM':function(_0x2a5b31,_0x279d97){return _0x2a5b31===_0x279d97;},'Byfxu':_0x44faa3[_0x1240('1ad','bS[p')],'zuqsZ':function(_0x2e0678,_0x19c37f){return _0x44faa3[_0x1240('1ae','vDQv')](_0x2e0678,_0x19c37f);}};const _0x507d28=_0x1240('1af','oJb%');const _0x4b467e=_0x1240('1b0','rd61');const _0x2df705={'Host':_0x44faa3[_0x1240('1b1','rd61')],'Content-Type':_0x44faa3[_0x1240('1b2','J19[')],'Connection':_0x44faa3[_0x1240('1b3','rd61')],'Accept':_0x1240('1b4','vP4i'),'User-Agent':_0x44faa3[_0x1240('1b5','#)fb')],'Accept-Language':_0x1240('1b6','4#jk')};let _0x3c6d3d={'url':_0x507d28,'method':_0x4b467e,'headers':_0x2df705,'body':$[_0x1240('1b7','m)F!')](_0x1fab05)};return new Promise(_0x3e598a=>{var _0x4a68fa={'bpaok':function(_0x9c775e,_0x316ea7){return _0x44faa3['jFIHT'](_0x9c775e,_0x316ea7);}};$[_0x1240('1b8','@h5Z')](_0x3c6d3d,(_0x473f48,_0x148331,_0x2cb73d)=>{if(_0x2d3be4[_0x1240('1b9','K3M!')](_0x2d3be4['gCiAM'],_0x2d3be4[_0x1240('1ba','3ia)')])){str=appId+'_'+appMD5Key+'__'+timestamp;}else{try{if(_0x2cb73d){if(_0x2d3be4[_0x1240('1bb','#)fb')](_0x2d3be4[_0x1240('1bc','9Osy')],_0x2d3be4[_0x1240('1bd','[Usn')])){console['log'](_0x1240('1be','%!9D')+_0x2cb73d);}else{bcomplate=!![];console[_0x1240('1a8','TFEY')](_0x4a68fa[_0x1240('1bf','rVGT')]('邀请成功需要等待接收PK：',$['toStr'](data)));}}}catch(_0xa6d2e5){console[_0x1240('1c0','85EI')](_0xa6d2e5);}finally{_0x2d3be4[_0x1240('1c1','yrn4')](_0x3e598a,_0x2cb73d);}}});});};function _0x163633(_0x55c881){var _0x516f86={'adzTt':function(_0x541abb,_0x2a16dc){return _0x541abb>_0x2a16dc;},'CbSxm':function(_0x3cf1ce,_0x56b5fa){return _0x44faa3['HWMsL'](_0x3cf1ce,_0x56b5fa);},'mHEUd':_0x1240('1c2','n2(5'),'OWfwc':function(_0x40ccde,_0x13a784){return _0x40ccde(_0x13a784);},'vjMib':_0x44faa3[_0x1240('1c3','DvHw')],'LwvwL':function(_0x21772a,_0x3d9ef1){return _0x44faa3[_0x1240('1c4','J19[')](_0x21772a,_0x3d9ef1);},'tUwOg':_0x1240('1c5','@h5Z')};return new Promise(_0x3ce447=>{var _0x350605={'Msbho':function(_0x236293,_0x55a990){return _0x44faa3[_0x1240('1c6','mQRv')](_0x236293,_0x55a990);}};if('icgKx'!==_0x44faa3['LxaCz']){let _0x1ac705;if(isGet==0x0){_0x1ac705=appId+'_'+appMD5Key+'_'+body+'_'+timestamp;}else{_0x1ac705=appId+'_'+appMD5Key+'__'+timestamp;}return $[_0x1240('1c7','J693')](_0x1ac705);}else{let _0x20e73e=_0x44faa3[_0x1240('1c8','GKMx')](_0x44faa3[_0x1240('1c9','#)fb')]+_0x1240('1ca','AaSe'),_0x55c881);let _0x2c6562={'url':_0x20e73e,'headers':{'Host':'api.scriptsjd.cf','Connection':_0x44faa3[_0x1240('1cb','[Usn')],'Accept':_0x1240('1cc','adp['),'User-Agent':_0x44faa3[_0x1240('1cd','eFWX')],'Accept-Language':_0x44faa3[_0x1240('1ce','n2(5')]}};$[_0x1240('1cf','ggyE')](_0x2c6562,(_0x300854,_0x4bb88c,_0x3e3d92)=>{var _0x2e0681={'zqHdl':function(_0x5c8a87,_0x5b66b0){return _0x516f86[_0x1240('1d0','J19[')](_0x5c8a87,_0x5b66b0);},'DJyIz':function(_0x451074,_0x52a347){return _0x451074+_0x52a347;},'RYxia':_0x1240('1d1','eFWX')};try{if(_0x516f86[_0x1240('1d2','1*@H')](_0x516f86[_0x1240('1d3','5Ks!')],_0x1240('1c2','n2(5'))){if(_0x3e3d92){_0x516f86['OWfwc'](_0x3ce447,_0x3e3d92);}}else{if(_0x2e0681[_0x1240('1d4','85EI')](data[_0x1240('1d5','ylbF')],0x2)){console['log'](_0x2e0681[_0x1240('1d6','TFEY')](_0x2e0681['RYxia'],data['msg']));bcomplate=![];}}}catch(_0x4e8b82){if(_0x1240('1d7','K3M!')===_0x516f86['vjMib']){countreceive=userCount;}else{console[_0x1240('8d','4hNb')](_0x4e8b82);}}finally{if(_0x516f86['LwvwL'](_0x1240('1d8','85EI'),_0x516f86[_0x1240('1d9','bS[p')])){_0x350605[_0x1240('1da','J693')](_0x3ce447,_0x3e3d92);}else{_0x3ce447(_0x3e3d92);}}});}});}function _0x5a451a(_0x368dfc,_0x745567){return new Promise(_0x1ade97=>{var _0x28436f={'CSGST':function(_0x3e7b41,_0x342650){return _0x44faa3[_0x1240('1db','adp[')](_0x3e7b41,_0x342650);},'pRRAS':function(_0xc70eb0,_0x449ee6){return _0x44faa3[_0x1240('1dc','^j)i')](_0xc70eb0,_0x449ee6);},'xWQur':_0x44faa3[_0x1240('1dd',')j]G')],'mUeDt':_0x1240('1de','^j)i'),'PAQpk':_0x1240('1df','J19['),'ioNzS':_0x44faa3[_0x1240('1e0','@h5Z')],'SjOJQ':function(_0x1d85ef,_0x2ceae8){return _0x1d85ef(_0x2ceae8);},'edxLm':_0x44faa3[_0x1240('1e1','adp[')]};if(_0x44faa3[_0x1240('1e2','AaSe')]('CkKdY','jtMQT')){let _0x1bbf23=_0x1240('1e3','8IXE')+_0x368dfc+_0x1240('1e4','DvHw')+_0x745567;let _0x200570={'url':_0x1bbf23,'headers':{'Host':_0x1240('1e5','m)F!'),'Connection':_0x44faa3[_0x1240('1e6','4hNb')],'Accept':_0x44faa3[_0x1240('1e7','n2(5')],'User-Agent':_0x44faa3[_0x1240('1e8','DZnm')],'Accept-Language':_0x44faa3[_0x1240('1e9','4#jk')]}};$[_0x1240('1ea','^RRs')](_0x200570,(_0x144b39,_0xa6af4d,_0x6b2546)=>{try{if(_0x6b2546){if(_0x28436f[_0x1240('1eb','IjC0')]!==_0x28436f[_0x1240('1ec','vDQv')]){let _0x1bcc81=$[_0x1240('1ed','#jQm')](_0x6b2546);_0x1ade97(_0x1bcc81);}else{if(_0x6b2546){_0x28436f[_0x1240('1ee','vP4i')](_0x1ade97,_0x6b2546);}}}}catch(_0x33ca2e){console[_0x1240('11f','adp[')](_0x33ca2e);}finally{if(_0x1240('1ef','yrn4')==='NMnTk'){countlaunch++;console['log'](_0x28436f[_0x1240('1f0','@h5Z')](_0x28436f['xWQur'],$[_0x1240('1f1','BqXK')](data)));console['log'](_0x28436f[_0x1240('1f2','4hNb')](_0x28436f[_0x1240('1f3','IjC0')],data[_0x1240('1f4','#jQm')][_0x1240('15c','K3M!')]));}else{_0x28436f['SjOJQ'](_0x1ade97,_0x6b2546);}}});}else{console['log'](_0x28436f[_0x1240('1f5','rVGT')](_0x28436f[_0x1240('1f6','n2(5')],data[_0x1240('1f7','TFEY')]));}});}_0x4d930b['main']=_0xbf03f1;}($);;_0xodd='jsjiami.com.v6';

!(async () => {

    if (!cookiesArr[0]) {
        $.msg(
            $.name,
            "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取",
            "https://bean.m.jd.com/", {
            "open-url": "https://bean.m.jd.com/"
        }
        );
        return;
    }
    for (let i = 0; i < cookiesArr.length; i++) {
        if (cookiesArr[i]) {
            cookie = cookiesArr[i];
            $.UserName = decodeURIComponent(
                cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]
            );
            $.index = i + 1;
            message = "";
            console.log(`\n******开始【京东账号${$.index}】${$.UserName}*********\n`);
            //await $.updatefriend();
            await $.main();
        }
    }
})()
    .catch((e) => {
        $.log("", `❌ ${$.name}, 失败! 原因: ${e}!`, "");
    })
    .finally(() => {
        $.done();
    })


//已改


//获取京享值分数
function getScore(fpin) {
    const mquery = `actId=9&appId=${APPID}&lkEPin=${fpin}`;
    const myRequest = getGetRequest('getScore', mquery);
    return new Promise((resolve) => {
        $.get(myRequest, (err, resp, res) => {
            let score = 0;
            try {
                if (res) {
                    let data = $.toObj(res);
                    if (data) {
                        score = data.data;
                    }
                }
            } catch (e) {
                console.log(resp);
            } finally {
                //  console.log("查询"+fpin+"分数  " + score );
                resolve(score);
            }
        });
    });
}



//获取用户PK余量信息
function getUserPkInfo(pin) {
    const mquery = `actId=9&appId=${APPID}&lkEPin=${pin}`;
    const myRequest = getGetRequest('getUserPkInfo', mquery);
    return new Promise((resolve) => {
        $.get(myRequest, (err, resp, res) => {

            try {
                if (res) {
                    let data = $.toObj(res);
                    data = data.data;
                    if (data) {
                        console.log(`${data.nickName}今天剩余主动邀请PK次数：${data.leftLunchPkNum} 被动邀请PK次数：${data.leftAcceptPkNum}`);
                        resolve(data);
                    }
                }
            } catch (e) {
                console.log("getUserPkInfo出错：" + resp);
            } finally {
                resolve();
            }
        });
    });
}
async function getFriendPinList(pin) {
    console.log("开始获取所有好友可以使用Pk列表中……");
    let allFriends = [];
    for (let i = 0; i < 100; i++) {
        let friends = await getUserFriendsPage(pin, i + 1);
        if (friends.length === 0) {
            console.log("好友列表到底了，共获取" + i + "页好友！！")
            break;
        }
        //console.log(`第${i+1}页`);
        for (let j = 0; j < friends.length; j++) {
            let item = friends[j];

            if (item.pkStatus == 2) {
                if (item.leftAcceptPkNum > 0 && item.leftLunchPkNum > 0) {
                    allFriends.push(item.friendPin);
                }
            }
        }
    }
    return allFriends;
}

//获取好友PK列表
function getUserFriendsPage(pin, pageNo) {
    //?actId=9&pageNo=2&pageSize=10&appId=dafbe42d5bff9d82298e5230eb8c3f79&lkEPin=13f5ef448152243c1e8c7a33f3b76dd20f296a206a12473f57d63d95f3be0534
    const mquery = `actId=9&pageNo=${pageNo}&pageSize=10&appId=${APPID}&lkEPin=${pin}`
    const myRequest = getGetRequest('getUserFriendsPage', mquery);
    return new Promise((resolve) => {
        $.get(myRequest, (err, resp, res) => {
            let data;
            try {
                if (res) {
                    data = $.toObj(res);
                    data = data.datas;
                    if (data) {
                        resolve(data);
                        //console.log("获取好友PK列表第" + pageNo + "页");
                    }
                }
            } catch (e) {
                console.log(resp);
            } finally {

                resolve(data);
            }
        });
    });
}


//已改
function getBoxRewardInfo(mypin) {
    return new Promise((resolve) => {
        const mquery = `actId=9&appId=${APPID}&lkEPin=${mypin}`;
        const myRequest = getGetRequest('getBoxRewardInfo', mquery);
        $.get(myRequest, (err, resp, res) => {
            try {

                if (res) {
                    let data = $.toObj(res);
                    if (data.success) {
                        // $.awards = data.data.awards;
                        //console.log($.toStr($.awards));
                        // $.totalWins=data.data.totalWins;
                        console.log("总胜场:" + data.data.totalWins);
                        resolve(data.data);
                    }

                }
            } catch (e) {
                console.log(resp);
            } finally {
                resolve(res);
            }
        });
    });
}

//已修复
function sendBoxReward(rewardConfigId, mypin) {
    return new Promise((resolve) => {
        console.log("进行开宝箱")
        const mquery = `rewardConfigId=${rewardConfigId}&actId=9&appId=${APPID}&lkEPin=${mypin}`
        const myRequest = getGetRequest('sendBoxReward', mquery);
        $.get(myRequest, (err, resp, res) => {
            try {
                console.log(res);
                if (res) {
                    let data = $.toObj(res);
                    if (data.success) {
                        for (let j = 0; j < data.datas.length; j++) {
                            console.log('获得奖励类型:' + data.datas[j].type + "京豆数量：" + data.datas[j].beanNum);
                        }

                    }

                }
            } catch (e) {
                console.log(resp);
            } finally {
                resolve(res);
            }
        });
    });
}

async function getPin() {
    return new Promise((resolve) => {
        let options = {
            "url": `https://jdjoy.jd.com/saas/framework/encrypt/pin?appId=${APPID}`,
            "headers": {
                "Host": "jdjoy.jd.com",
                "Origin": "https://prodev.m.jd.com",
                "Cookie": cookie,
                "Connection": "keep-alive",
                "Accept": "application/json, text/plain, */*",
                "User-Agent": "jdapp;iPhone;9.5.4;13.6;db48e750b34fe9cd5254d970a409af316d8b5cf3;network/wifi;ADID/38EE562E-B8B2-7B58-DFF3-D5A3CED0683A;model/iPhone10,3;addressid/0;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
                "Accept-Language": "zh-cn",
                "Referer": "https://prodev.m.jd.com/"
            }
        };

        $.post(options, (err, resp, res) => {
            try {

                // console.log(res);
                if (res) {
                    let data = $.toObj(res);
                    if (data) {
                        let minfo = { Pin: data.data.lkEPin, lkToken: data.data.lkToken };
                        resolve(minfo);
                        // $.pin = data.data.lkEPin
                        // $.lkToken=data.data.lkToken
                    }
                }
            } catch (e) {
                console.log(e);
            } finally {
                resolve();
            }
        });
    });
};

function getToken() {
    return new Promise((resolve) => {
        let options = {
            "url": `https://jdjoy.jd.com/saas/framework/user/token?appId=${APPID}&client=m&url=pengyougou.m.jd.com`,
            "headers": {
                "Host": "jdjoy.jd.com",
                "Origin": "https://prodev.m.jd.com",
                "Cookie": cookie,
                "Connection": "keep-alive",
                "Accept": "application/json, text/plain, */*",
                "User-Agent": "jdapp;iPhone;9.5.4;13.6;db48e750b34fe9cd5254d970a409af316d8b5cf3;network/wifi;ADID/38EE562E-B8B2-7B58-DFF3-D5A3CED0683A;model/iPhone10,3;addressid/0;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
                "Accept-Language": "zh-cn",
                "Referer": "https://prodev.m.jd.com/"
            }
        };
        $.post(options, (err, resp, res) => {
            let token;
            //console.log(JSON.stringify(res))
            try {
                if (res) {
                    let data = $.toObj(res);
                    if (data) {
                        token = data.data;
                    }

                }
            } catch (e) {
                console.log(e);
            } finally {
                resolve(token);
            }
        });
    });
};
function getGetRequest(type, query, checktype = 1) {
    let url;
    if (checktype == 0) {
        url = `https://pengyougou.m.jd.com/open/api/like/jxz/${type}?${query}`;
    } else {
        url = `https://pengyougou.m.jd.com/like/jxz/${type}?${query}`;
    }

    const method = `GET`;
    const headers = {
        'Accept': `*/*`,
        "Origin": `https://game-cdn.moxigame.cn`,
        'Sec-Fetch-Site': `cross-site`,
        'Sec-Fetch-Mode': `cors`,
        'Sec-Fetch-Dest': `empty`,
        'Connection': `keep-alive`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Referer': `https://game-cdn.moxigame.cn/`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Host': `pengyougou.m.jd.com`,
        "User-Agent": "jdapp;iPhone;9.5.4;13.6;db48e750b34fe9cd5254d970a409af316d8b5cf3;network/wifi;ADID/38EE562E-B8B2-7B58-DFF3-D5A3CED0683A;model/iPhone10,3;addressid/0;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
        'Accept-Language': `zh-cn`
    };
    //console.log(url)
    return { url: url, method: method, headers: headers };
};

function getPostRequest(type, query, body) {
    const url = `https://pengyougou.m.jd.com/open/api/like/jxz/${type}?${query}`;
    const method = `POST`;
    const headers = {
        'Accept': `*/*`,
        'Origin': `https://game-cdn.moxigame.cn`,
        'Sec-Fetch-Site': `cross-site`,
        'Sec-Fetch-Mode': `cors`,
        'Sec-Fetch-Dest': `empty`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Content-Type': `application/json;charset=UTF-8`,
        'Host': `pengyougou.m.jd.com`,
        'Connection': `keep-alive`,
        "User-Agent": "jdapp;iPhone;9.5.4;13.6;db48e750b34fe9cd5254d970a409af316d8b5cf3;network/wifi;ADID/38EE562E-B8B2-7B58-DFF3-D5A3CED0683A;model/iPhone10,3;addressid/0;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
        'Referer': `https://game-cdn.moxigame.cn/`,
        'Accept-Language': `zh-cn`
    };
    //console.log(url)
    return myRequest = { url: url, method: method, headers: headers, body: body };
};


function jsonParse(str) {
    if (typeof str == "string") {
        try {
            return JSON.parse(str);
        } catch (e) {
            console.log(e);
            $.msg($.name, "", "不要在BoxJS手动复制粘贴修改cookie");
            return [];
        }
    }
};

function sleep(timeout) {
    return new Promise((resolve) => setTimeout(resolve, timeout));
};



// prettier-ignore
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
