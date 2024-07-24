function _0x2f0a($,x){let e=_0x1858();return(_0x2f0a=function($,x){return e[$-=329]})($,x)}let _0x45efc5=_0x2f0a;function _0x1858(){let $=["length","sendFile","https://api.botcahx.live/api/dowloader/fbdown?url=","tags","*Ingrese un enlace de facebook*\n\nEjemplo, #fb https://fb.watch/kAOXy3wf2L/?mibextid=Nif5oz","https://api.lolhuman.xyz/api/facebook?apikey=${lolkeysapi}&url=","933rKFXbW","posts","urls","4916kvzCQO","result","includes","log","test","reply","match","chat","/reel/","325250GOcKOb","groups","442322wzwsmy","*Ocurri\xf3 un Error*","default","help","49sfpBHd","reel","1116904TIZzuk","2598512afTIKv","4759545ygmkJx","> Aqui esta su video\n✠≫\uD83D\uDCA5ᴮᴼᵀ\uD835\uDC0B\uD835\uDC08\uD835\uDC13\uD835\uDC0E\uD83D\uDCA5","json","fb <link>","711198xqJHSr","stories","&apikey=QaepQXxR","group","243QnekGq","downloader"];return(_0x1858=function(){return $})()}!function($,x){let e=_0x2f0a,a=$();for(;;)try{let t=parseInt(e(365))/1+parseInt(e(354))/2*(-parseInt(e(351))/3)+-parseInt(e(333))/4+-parseInt(e(335))/5+-parseInt(e(339))/6*(-parseInt(e(331))/7)+parseInt(e(334))/8+-parseInt(e(343))/9*(-parseInt(e(363))/10);if(479469===t)break;a.push(a.shift())}catch(r){a.push(a.shift())}}(_0x1858,479469);import $ from"node-fetch";import{facebook as x}from"@xct007/frieren-scraper";var handler=async(e,{conn:a,args:t,command:r,usedPrefix:_,text:o})=>{let c=_0x2f0a,f,i=/^(facebook|fb|facebookdl|fbdl)$/i[c(358)](r);async function n($){let x=c;await a[x(359)](e.chat,x(366),e),console[x(357)]("ERROR EN: "+(_+r)+" ⚠️\n"),console[x(357)]($)}if(!0===i){if(!o)return a[c(359)](e[c(361)],c(349),e);if(!t[0][c(360)](/www.facebook.com|fb.watch|web.facebook.com|business.facebook.com|video.fb.com/g))return a[c(359)](e[c(361)],"*No es un enlace v\xe1lido*",e);await a[c(359)](e[c(361)],"Enviando su video",e);let s=checkMessageType(t[0]),l="";switch(s){case c(364):case c(332):l=c(336);break;case"stories":l="> Aqui esta su video\n✠≫\uD83D\uDCA5ᴮᴼᵀ\uD835\uDC0B\uD835\uDC08\uD835\uDC13\uD835\uDC0E\uD83D\uDCA5";break;case c(352):default:l=c(336)}try{let u=await (await $(c(350)+t[0]))[c(337)]();f=u[c(355)][0],""!=f&&f&&null!=f||(f=u[c(355)][1]),await a[c(346)](e[c(361)],f,"error.mp4",""+l,e)}catch(d){try{let b=await x.v1(t[0]),h="";b[c(353)]&&b[c(353)][c(345)]>0&&(h=""+(b[c(353)][0]?.hd||b.urls[1]?.sd||"")),await a[c(346)](e[c(361)],h,"error.mp4",""+l,e)}catch(p){try{var w,k;await a[c(346)](e[c(361)],(await (await $(c(347)+t[0]+c(341)))[c(337)]())[c(355)].HD,"error.mp4",""+l,e)}catch(m){n(m)}}}}};handler[_0x45efc5(330)]=[_0x45efc5(338)],handler[_0x45efc5(348)]=[_0x45efc5(344)],handler.command=/^(facebook|fb|facebookdl|fbdl)$/i,handler[_0x45efc5(342)]=!0;export default handler;function checkMessageType($){let x=_0x45efc5;if($.includes("www.facebook.com")){if($[x(356)]("/groups/"))return"groups";if($[x(356)](x(362)))return"reel";if($[x(356)]("/stories/"))return x(340);if($[x(356)]("/posts/"))return x(352)}return x(329)}

/*import fg from 'api-dylux';
import fetch from 'node-fetch';
import {savefrom, facebookdl, facebookdlv2} from '@bochilteam/scraper-sosmed';
import fbDownloader from 'fb-downloader-scrapper';
import {facebook} from '@xct007/frieren-scraper';
import axios from 'axios';
const handler = async (m, {conn, args, command, usedPrefix}) => {
if (!args[0]) return conn.reply(m.chat, `Ejemplo de uso2\n${usedPrefix + command} https://www.facebook.com/watch?v=636541475139`, m)
if (!args[0].match(/www.facebook.com|fb.watch/g)) return conn.reply(m.chat, `Ejemplo de uso\n${usedPrefix + command} https://www.facebook.com/watch?v=636541475139*`, m)
try { 
await conn.reply(m.chat, `\`Enviando su video\` `, m)
const Litodroid = await facebook.v1(args[0]);
let r2es = '';
if (Litodroid.urls && Litodroid.urls.length > 0) {
r2es = `${Litodroid.urls[0]?.hd || Litodroid.urls[1]?.sd || ''}` 
}
conn.sendFile(m.chat, r2es, 'error.mp4', `✅ Realizado con Existo 2\n${wm}`, m);
} catch (err1) {
try {
const {result} = await facebookdl(args[0]).catch(async (_) => await facebookdlv2(args[0])).catch(async (_) => await savefrom(args[0]));
for (const {url, isVideo} of result.reverse()) await conn.sendFile(m.chat, url, `facebook.${!isVideo ? 'bin' : 'mp4'}`, `✅ Realizado con Existo 1\n${wm}`, m);
} catch (err6) {
await conn.reply(m.chat, `Error reporte el comando para ser solucionado con :\n #report ${lenguajeGB['smsMensError2']()} ${usedPrefix + command}\n\n${wm}`, m)
console.log(`Error`)
console.log(err6)
handler.limit = false
}}}
handler.command = /^(facebook|fb|facebookdl|fbdl|facebook2|fb2|facebookdl2|fbdl2|facebook3|fb3|facebookdl3|fbdl3|facebook4|fb4|facebookdl4|fbdl4|facebook5|fb5|facebookdl5|fbdl5)$/i
export default handler

async function igeh(url_media) {
return new Promise(async (resolve, reject)=>{
const BASE_URL = 'https://instasupersave.com/';
try {
const resp = await axios(BASE_URL);
const cookie = resp.headers['set-cookie']; // get cookie from request
const session = cookie[0].split(';')[0].replace('XSRF-TOKEN=', '').replace('%3D', '');
const config = {method: 'post', url: `${BASE_URL}api/convert`, headers: {'origin': 'https://instasupersave.com', 'referer': 'https://instasupersave.com/pt/', 'sec-fetch-dest': 'empty', 'sec-fetch-mode': 'cors', 'sec-fetch-site': 'same-origin', 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 Edg/107.0.1418.52', 'x-xsrf-token': session, 'Content-Type': 'application/json', 'Cookie': `XSRF-TOKEN=${session}; instasupersave_session=${session}`}, data: {url: url_media}};
axios(config).then(function(response) {
const ig = [];
if (Array.isArray(response.data)) {
response.data.forEach((post) => {
ig.push(post.sd === undefined ? post.thumb : post.sd.url);
 });
} else {
ig.push(response.data.url[0].url);
}
resolve({results_number: ig.length, url_list: ig});
}).catch(function(error) {
reject(error.message);
});
} catch (e) {
reject(e.message);
}})}*/

				

/*function _0x52ca(){let $=["208338eoyDZd","428589sZohrU","Ingrese un enlace de un video de  facebook valido \nEjemplo:\n*","309598HBnpBX","command","2161431WFMbyG","fb.mp4","tags","text","quoted","1572220HiMfym","chat","8200241YLYzMy","\n┗─━─━≪✠≫━─━─","32TbNxJa","reply","8kvMfRN","title","2226030eXMHNQ","\n┏≪\uD835\uDC05\uD835\uDC01-\uD835\uDC0B\uD835\uDC08\uD835\uDC13\uD835\uDC0E\uD835\uDC01\uD835\uDC0E\uD835\uDC13*\n✠≫\uD83D\uDCA5 *Titulo:* ","5vklbzx","fbdl","sendFile","group","downloader","videoUrl"];return(_0x52ca=function(){return $})()}let _0x50612f=_0x1f74;function _0x1f74($,x){let e=_0x52ca();return(_0x1f74=function($,x){return e[$-=246]})($,x)}!function($,x){let e=_0x1f74,f=$();for(;;)try{let a=-parseInt(e(247))/1+parseInt(e(260))/2*(parseInt(e(271))/3)+parseInt(e(254))/4+-parseInt(e(264))/5*(-parseInt(e(270))/6)+-parseInt(e(256))/7+parseInt(e(258))/8*(parseInt(e(249))/9)+parseInt(e(262))/10;if(701408===a)break;f.push(f.shift())}catch(t){f.push(f.shift())}}(_0x52ca,701408);import $ from"api-dylux";let handler=async(x,{conn:e,args:f,usedPrefix:a,command:t})=>{let o=_0x1f74;if(!f[0]&&x[o(253)]&&x.quoted[o(252)]&&(f[0]=x.quoted.text),!f[0]&&!x[o(253)])throw o(246)+(a+t)+"* https://www.facebook.com/...";try{let n=await $[o(265)](f[0]),d=o(263)+n[o(261)]+o(257);e[o(266)](x[o(255)],n[o(269)],o(250),d,x)}catch(r){x[o(259)]("Escriba un enalce de un video de faebook")}};handler.help=["fb"].map($=>$+" <url>"),handler[_0x50612f(251)]=[_0x50612f(268)],handler[_0x50612f(248)]=/^((facebook|fb)(downloder|dl)?)$/i,handler[_0x50612f(267)]=!0;export default handler;*/