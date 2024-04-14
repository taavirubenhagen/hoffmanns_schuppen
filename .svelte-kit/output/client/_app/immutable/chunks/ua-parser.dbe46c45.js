import{S as _i,i as yi,s as Ei,M as Si,j as Oi,k as Ti,l as Ai,n as Ni,h as pi,o as fi,v as hi,g as Mi,I as Ri,u as zi,p as qi,q as Ci,t as Ui,b as Pi}from"./index.9387a7f5.js";const Bi=p=>Object.fromEntries(Object.entries(p).map(f=>f.reverse())),Ii={"text-base":16,"text-xl":20,"text-2xl":24,"text-3xl":30};Bi(Ii);const Gi="2024-03-A";function ji(p){let f,v,w,T,y;Si(p[4]);const O=p[3].default,h=Oi(O,p,p[2],null);return{c(){f=Ti("div"),h&&h.c(),this.h()},l(u){f=Ai(u,"DIV",{class:!0,style:!0});var g=Ni(f);h&&h.l(g),g.forEach(pi),this.h()},h(){fi(f,"class",v=p[0]+" mt-16"),hi(f,"min-height","calc("+p[1]+"px - 4rem)")},m(u,g){Mi(u,f,g),h&&h.m(f,null),w=!0,T||(y=Ri(window,"resize",p[4]),T=!0)},p(u,[g]){h&&h.p&&(!w||g&4)&&zi(h,O,u,u[2],w?Ci(O,u[2],g,null):qi(u[2]),null),(!w||g&1&&v!==(v=u[0]+" mt-16"))&&fi(f,"class",v),(!w||g&2)&&hi(f,"min-height","calc("+u[1]+"px - 4rem)")},i(u){w||(Ui(h,u),w=!0)},o(u){Pi(h,u),w=!1},d(u){u&&pi(f),h&&h.d(u),T=!1,y()}}}function Li(p,f,v){let{$$slots:w={},$$scope:T}=f,{className:y=""}=f,O;function h(){v(1,O=window.innerHeight)}return p.$$set=u=>{"className"in u&&v(0,y=u.className),"$$scope"in u&&v(2,T=u.$$scope)},[y,O,T,w,h]}class Yi extends _i{constructor(f){super(),yi(this,f,Li,ji,Ei,{className:0})}}var Di=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Vi(p){return p&&p.__esModule&&Object.prototype.hasOwnProperty.call(p,"default")?p.default:p}var ei={exports:{}};(function(p,f){(function(v,w){var T="0.7.37",y="",O="?",h="function",u="undefined",g="object",P="string",oi="major",e="model",a="name",i="type",o="vendor",r="version",x="architecture",z="console",n="mobile",l="tablet",k="smarttv",M="wearable",Y="embedded",W=500,B="Amazon",q="Apple",ai="ASUS",ri="BlackBerry",N="Browser",I="Chrome",vi="Edge",j="Firefox",L="Google",ti="Huawei",Z="LG",X="Microsoft",si="Motorola",D="Opera",V="Samsung",ni="Sharp",H="Sony",K="Xiaomi",J="Zebra",li="Facebook",bi="Chromium OS",wi="Mac OS",gi=function(b,d){var s={};for(var m in b)d[m]&&d[m].length%2===0?s[m]=d[m].concat(b[m]):s[m]=b[m];return s},F=function(b){for(var d={},s=0;s<b.length;s++)d[b[s].toUpperCase()]=b[s];return d},ci=function(b,d){return typeof b===P?C(d).indexOf(C(b))!==-1:!1},C=function(b){return b.toLowerCase()},ki=function(b){return typeof b===P?b.replace(/[^\d\.]/g,y).split(".")[0]:w},Q=function(b,d){if(typeof b===P)return b=b.replace(/^\s\s*/,y),typeof d===u?b:b.substring(0,W)},U=function(b,d){for(var s=0,m,A,E,c,t,S;s<d.length&&!t;){var ii=d[s],mi=d[s+1];for(m=A=0;m<ii.length&&!t&&ii[m];)if(t=ii[m++].exec(b),t)for(E=0;E<mi.length;E++)S=t[++A],c=mi[E],typeof c===g&&c.length>0?c.length===2?typeof c[1]==h?this[c[0]]=c[1].call(this,S):this[c[0]]=c[1]:c.length===3?typeof c[1]===h&&!(c[1].exec&&c[1].test)?this[c[0]]=S?c[1].call(this,S,c[2]):w:this[c[0]]=S?S.replace(c[1],c[2]):w:c.length===4&&(this[c[0]]=S?c[3].call(this,S.replace(c[1],c[2])):w):this[c]=S||w;s+=2}},$=function(b,d){for(var s in d)if(typeof d[s]===g&&d[s].length>0){for(var m=0;m<d[s].length;m++)if(ci(d[s][m],b))return s===O?w:s}else if(ci(d[s],b))return s===O?w:s;return b},xi={"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"},di={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},ui={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[r,[a,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[r,[a,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[a,r],[/opios[\/ ]+([\w\.]+)/i],[r,[a,D+" Mini"]],[/\bopr\/([\w\.]+)/i],[r,[a,D]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[r,[a,"Baidu"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[a,r],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[r,[a,"UC"+N]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[r,[a,"WeChat"]],[/konqueror\/([\w\.]+)/i],[r,[a,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[r,[a,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[r,[a,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[r,[a,"Smart Lenovo "+N]],[/(avast|avg)\/([\w\.]+)/i],[[a,/(.+)/,"$1 Secure "+N],r],[/\bfocus\/([\w\.]+)/i],[r,[a,j+" Focus"]],[/\bopt\/([\w\.]+)/i],[r,[a,D+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[r,[a,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[r,[a,"Dolphin"]],[/coast\/([\w\.]+)/i],[r,[a,D+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[r,[a,"MIUI "+N]],[/fxios\/([-\w\.]+)/i],[r,[a,j]],[/\bqihu|(qi?ho?o?|360)browser/i],[[a,"360 "+N]],[/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],[[a,/(.+)/,"$1 "+N],r],[/samsungbrowser\/([\w\.]+)/i],[r,[a,V+" Internet"]],[/(comodo_dragon)\/([\w\.]+)/i],[[a,/_/g," "],r],[/metasr[\/ ]?([\d\.]+)/i],[r,[a,"Sogou Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[a,"Sogou Mobile"],r],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],[a,r],[/(lbbrowser)/i,/\[(linkedin)app\]/i],[a],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[a,li],r],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],[a,r],[/\bgsa\/([\w\.]+) .*safari\//i],[r,[a,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[r,[a,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[r,[a,I+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[a,I+" WebView"],r],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[r,[a,"Android "+N]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[a,r],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[r,[a,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[r,a],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[a,[r,$,xi]],[/(webkit|khtml)\/([\w\.]+)/i],[a,r],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[a,"Netscape"],r],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[r,[a,j+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[a,r],[/(cobalt)\/([\w\.]+)/i],[a,[r,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[x,"amd64"]],[/(ia32(?=;))/i],[[x,C]],[/((?:i[346]|x)86)[;\)]/i],[[x,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[x,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[x,"armhf"]],[/windows (ce|mobile); ppc;/i],[[x,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[x,/ower/,y,C]],[/(sun4\w)[;\)]/i],[[x,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[x,C]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[e,[o,V],[i,l]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[e,[o,V],[i,n]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[e,[o,q],[i,n]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[e,[o,q],[i,l]],[/(macintosh);/i],[e,[o,q]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[e,[o,ni],[i,n]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[e,[o,ti],[i,l]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[e,[o,ti],[i,n]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[e,/_/g," "],[o,K],[i,n]],[/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[e,/_/g," "],[o,K],[i,l]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[e,[o,"OPPO"],[i,n]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[e,[o,"Vivo"],[i,n]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[e,[o,"Realme"],[i,n]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[e,[o,si],[i,n]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[e,[o,si],[i,l]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[e,[o,Z],[i,l]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[e,[o,Z],[i,n]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[e,[o,"Lenovo"],[i,l]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[e,/_/g," "],[o,"Nokia"],[i,n]],[/(pixel c)\b/i],[e,[o,L],[i,l]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[e,[o,L],[i,n]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[e,[o,H],[i,n]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[e,"Xperia Tablet"],[o,H],[i,l]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[e,[o,"OnePlus"],[i,n]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[e,[o,B],[i,l]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[e,/(.+)/g,"Fire Phone $1"],[o,B],[i,n]],[/(playbook);[-\w\),; ]+(rim)/i],[e,o,[i,l]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[e,[o,ri],[i,n]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[e,[o,ai],[i,l]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[e,[o,ai],[i,n]],[/(nexus 9)/i],[e,[o,"HTC"],[i,l]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[o,[e,/_/g," "],[i,n]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[e,[o,"Acer"],[i,l]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[e,[o,"Meizu"],[i,n]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[e,[o,"Ulefone"],[i,n]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[o,e,[i,n]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[o,e,[i,l]],[/(surface duo)/i],[e,[o,X],[i,l]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[e,[o,"Fairphone"],[i,n]],[/(u304aa)/i],[e,[o,"AT&T"],[i,n]],[/\bsie-(\w*)/i],[e,[o,"Siemens"],[i,n]],[/\b(rct\w+) b/i],[e,[o,"RCA"],[i,l]],[/\b(venue[\d ]{2,7}) b/i],[e,[o,"Dell"],[i,l]],[/\b(q(?:mv|ta)\w+) b/i],[e,[o,"Verizon"],[i,l]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[e,[o,"Barnes & Noble"],[i,l]],[/\b(tm\d{3}\w+) b/i],[e,[o,"NuVision"],[i,l]],[/\b(k88) b/i],[e,[o,"ZTE"],[i,l]],[/\b(nx\d{3}j) b/i],[e,[o,"ZTE"],[i,n]],[/\b(gen\d{3}) b.+49h/i],[e,[o,"Swiss"],[i,n]],[/\b(zur\d{3}) b/i],[e,[o,"Swiss"],[i,l]],[/\b((zeki)?tb.*\b) b/i],[e,[o,"Zeki"],[i,l]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[o,"Dragon Touch"],e,[i,l]],[/\b(ns-?\w{0,9}) b/i],[e,[o,"Insignia"],[i,l]],[/\b((nxa|next)-?\w{0,9}) b/i],[e,[o,"NextBook"],[i,l]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[o,"Voice"],e,[i,n]],[/\b(lvtel\-)?(v1[12]) b/i],[[o,"LvTel"],e,[i,n]],[/\b(ph-1) /i],[e,[o,"Essential"],[i,n]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[e,[o,"Envizen"],[i,l]],[/\b(trio[-\w\. ]+) b/i],[e,[o,"MachSpeed"],[i,l]],[/\btu_(1491) b/i],[e,[o,"Rotor"],[i,l]],[/(shield[\w ]+) b/i],[e,[o,"Nvidia"],[i,l]],[/(sprint) (\w+)/i],[o,e,[i,n]],[/(kin\.[onetw]{3})/i],[[e,/\./g," "],[o,X],[i,n]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[e,[o,J],[i,l]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[e,[o,J],[i,n]],[/smart-tv.+(samsung)/i],[o,[i,k]],[/hbbtv.+maple;(\d+)/i],[[e,/^/,"SmartTV"],[o,V],[i,k]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[o,Z],[i,k]],[/(apple) ?tv/i],[o,[e,q+" TV"],[i,k]],[/crkey/i],[[e,I+"cast"],[o,L],[i,k]],[/droid.+aft(\w+)( bui|\))/i],[e,[o,B],[i,k]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[e,[o,ni],[i,k]],[/(bravia[\w ]+)( bui|\))/i],[e,[o,H],[i,k]],[/(mitv-\w{5}) bui/i],[e,[o,K],[i,k]],[/Hbbtv.*(technisat) (.*);/i],[o,e,[i,k]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[o,Q],[e,Q],[i,k]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[i,k]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[o,e,[i,z]],[/droid.+; (shield) bui/i],[e,[o,"Nvidia"],[i,z]],[/(playstation [345portablevi]+)/i],[e,[o,H],[i,z]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[e,[o,X],[i,z]],[/((pebble))app/i],[o,e,[i,M]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[e,[o,q],[i,M]],[/droid.+; (glass) \d/i],[e,[o,L],[i,M]],[/droid.+; (wt63?0{2,3})\)/i],[e,[o,J],[i,M]],[/(quest( 2| pro)?)/i],[e,[o,li],[i,M]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[o,[i,Y]],[/(aeobc)\b/i],[e,[o,B],[i,Y]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],[e,[i,n]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[e,[i,l]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[i,l]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[i,n]],[/(android[-\w\. ]{0,9});.+buil/i],[e,[o,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[r,[a,vi+"HTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[r,[a,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[a,r],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[r,a]],os:[[/microsoft (windows) (vista|xp)/i],[a,r],[/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],[a,[r,$,di]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[r,$,di],[a,"Windows"]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[r,/_/g,"."],[a,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[a,wi],[r,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[r,a],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[a,r],[/\(bb(10);/i],[r,[a,ri]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[r,[a,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[r,[a,j+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[r,[a,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[r,[a,"watchOS"]],[/crkey\/([\d\.]+)/i],[r,[a,I+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[a,bi],r],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[a,r],[/(sunos) ?([\w\.\d]*)/i],[[a,"Solaris"],r],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[a,r]]},_=function(b,d){if(typeof b===g&&(d=b,b=w),!(this instanceof _))return new _(b,d).getResult();var s=typeof v!==u&&v.navigator?v.navigator:w,m=b||(s&&s.userAgent?s.userAgent:y),A=s&&s.userAgentData?s.userAgentData:w,E=d?gi(ui,d):ui,c=s&&s.userAgent==m;return this.getBrowser=function(){var t={};return t[a]=w,t[r]=w,U.call(t,m,E.browser),t[oi]=ki(t[r]),c&&s&&s.brave&&typeof s.brave.isBrave==h&&(t[a]="Brave"),t},this.getCPU=function(){var t={};return t[x]=w,U.call(t,m,E.cpu),t},this.getDevice=function(){var t={};return t[o]=w,t[e]=w,t[i]=w,U.call(t,m,E.device),c&&!t[i]&&A&&A.mobile&&(t[i]=n),c&&t[e]=="Macintosh"&&s&&typeof s.standalone!==u&&s.maxTouchPoints&&s.maxTouchPoints>2&&(t[e]="iPad",t[i]=l),t},this.getEngine=function(){var t={};return t[a]=w,t[r]=w,U.call(t,m,E.engine),t},this.getOS=function(){var t={};return t[a]=w,t[r]=w,U.call(t,m,E.os),c&&!t[a]&&A&&A.platform!="Unknown"&&(t[a]=A.platform.replace(/chrome os/i,bi).replace(/macos/i,wi)),t},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return m},this.setUA=function(t){return m=typeof t===P&&t.length>W?Q(t,W):t,this},this.setUA(m),this};_.VERSION=T,_.BROWSER=F([a,r,oi]),_.CPU=F([x]),_.DEVICE=F([e,o,i,z,n,k,l,M,Y]),_.ENGINE=_.OS=F([a,r]),p.exports&&(f=p.exports=_),f.UAParser=_;var R=typeof v!==u&&(v.jQuery||v.Zepto);if(R&&!R.ua){var G=new _;R.ua=G.getResult(),R.ua.get=function(){return G.getUA()},R.ua.set=function(b){G.setUA(b);var d=G.getResult();for(var s in d)R.ua[s]=d[s]}}})(typeof window=="object"?window:Di)})(ei,ei.exports);var Hi=ei.exports;const Wi=Vi(Hi);export{Yi as S,Wi as U,Gi as t};