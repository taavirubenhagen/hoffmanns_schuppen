import{S as V,i as y,s as N,p as F,e as h,c as _,k as $,d,a as m,b as p,u as U,q as j,r as A,t as b,h as v,f as w,g as S,m as k,j as I,w as D,y as P,A as E,U as C,F as L,L as B,n as M,v as Q,Q as z,x as R,l as G,o as H}from"../chunks/index.ad1ab6c3.js";import{s as J}from"../chunks/singletons.826ed10d.js";import"../chunks/ua-parser.be5362ee.js";import{S as K}from"../chunks/Section.23a52fd9.js";import{R as O,I as W}from"../chunks/RawButton.3047dd11.js";const X=()=>{const a=J;return{page:{subscribe:a.page.subscribe},navigating:{subscribe:a.navigating.subscribe},updated:a.updated}},Y={subscribe(a){return X().page.subscribe(a)}};function Z(a){let e,s;const t=a[1].default,r=F(t,a,a[0],null);return{c(){e=h("t"),r&&r.c(),this.h()},l(n){e=_(n,"T",{class:!0});var i=$(e);r&&r.l(i),i.forEach(d),this.h()},h(){m(e,"class","text-xl")},m(n,i){p(n,e,i),r&&r.m(e,null),s=!0},p(n,[i]){r&&r.p&&(!s||i&1)&&U(r,t,n,n[0],s?A(t,n[0],i,null):j(n[0]),null)},i(n){s||(b(r,n),s=!0)},o(n){v(r,n),s=!1},d(n){n&&d(e),r&&r.d(n)}}}function x(a,e,s){let{$$slots:t={},$$scope:r}=e;return a.$$set=n=>{"$$scope"in n&&s(0,r=n.$$scope)},[r,t]}class ee extends V{constructor(e){super(),y(this,e,x,Z,N,{})}}function te(a){let e,s,t;return s=new W({props:{inverted:!0,name:"arrow-forward"}}),{c(){e=h("div"),w(s.$$.fragment),this.h()},l(r){e=_(r,"DIV",{class:!0});var n=$(e);S(s.$$.fragment,n),n.forEach(d),this.h()},h(){m(e,"class","rounded-r-lg bg-green-900 w-12 h-12 pr-1 center_row")},m(r,n){p(r,e,n),k(s,e,null),t=!0},p:M,i(r){t||(b(s.$$.fragment,r),t=!0)},o(r){v(s.$$.fragment,r),t=!1},d(r){r&&d(e),I(s)}}}function se(a){let e,s,t,r,n,i,c,f,u;return i=new O({props:{onClick:a[7],$$slots:{default:[te]},$$scope:{ctx:a}}}),{c(){e=h("div"),s=h("div"),t=h("input"),n=D(),w(i.$$.fragment),this.h()},l(l){e=_(l,"DIV",{class:!0});var o=$(e);s=_(o,"DIV",{class:!0});var g=$(s);t=_(g,"INPUT",{type:!0,class:!0,placeholder:!0}),g.forEach(d),n=P(o),S(i.$$.fragment,o),o.forEach(d),this.h()},h(){m(t,"type","text"),t.autofocus=a[1],m(t,"class","rounded-l-lg outline-none h-full px-1 text-xl"),m(t,"placeholder",a[3]),m(s,"class",r=(a[0]?"invert":"")+" rounded-l-lg border-2 border-green-900"),m(e,"class","flex")},m(l,o){p(l,e,o),E(e,s),E(s,t),C(t,a[4]),E(e,n),k(i,e,null),c=!0,a[1]&&t.focus(),f||(u=[L(t,"input",a[5]),L(t,"keypress",a[6])],f=!0)},p(l,o){(!c||o&2)&&(t.autofocus=l[1]),(!c||o&8)&&m(t,"placeholder",l[3]),o&16&&t.value!==l[4]&&C(t,l[4]),(!c||o&1&&r!==(r=(l[0]?"invert":"")+" rounded-l-lg border-2 border-green-900"))&&m(s,"class",r);const g={};o&20&&(g.onClick=l[7]),o&256&&(g.$$scope={dirty:o,ctx:l}),i.$set(g)},i(l){c||(b(i.$$.fragment,l),c=!0)},o(l){v(i.$$.fragment,l),c=!1},d(l){l&&d(e),I(i),f=!1,B(u)}}}function re(a){let e,s;return e=new ee({props:{$$slots:{default:[se]},$$scope:{ctx:a}}}),{c(){w(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){k(e,t,r),s=!0},p(t,[r]){const n={};r&287&&(n.$$scope={dirty:r,ctx:t}),e.$set(n)},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){I(e,t)}}}function ne(a,e,s){let{inverted:t=!1}=e,{autofocus:r=!1}=e,{onSubmit:n}=e,{placeholder:i=""}=e,c="";function f(){c=this.value,s(4,c)}const u=o=>o.key==="Enter"?n(c):null,l=()=>n(c);return a.$$set=o=>{"inverted"in o&&s(0,t=o.inverted),"autofocus"in o&&s(1,r=o.autofocus),"onSubmit"in o&&s(2,n=o.onSubmit),"placeholder"in o&&s(3,i=o.placeholder)},[t,r,n,i,c,f,u,l]}class le extends V{constructor(e){super(),y(this,e,ne,re,N,{inverted:0,autofocus:1,onSubmit:2,placeholder:3})}}function T(a){let e;return{c(){e=h("div"),this.h()},l(s){e=_(s,"DIV",{class:!0}),$(e).forEach(d),this.h()},h(){m(e,"class","h-12")},m(s,t){p(s,e,t)},d(s){s&&d(e)}}}function q(a){let e,s;return{c(){e=h("div"),s=G("Login fehlgeschlagen."),this.h()},l(t){e=_(t,"DIV",{class:!0});var r=$(e);s=H(r,"Login fehlgeschlagen."),r.forEach(d),this.h()},h(){m(e,"class","mt-4 h-8 flex items-start text-error")},m(t,r){p(t,e,r),E(e,s)},d(t){t&&d(e)}}}function ae(a){let e=a[0].url.href.split("/").pop()=="failed",s,t,r,n=a[0].url.href.split("/").pop()=="failed",i,c,f=e&&T();t=new le({props:{autofocus:!0,onSubmit:a[1],placeholder:"Passwort"}});let u=n&&q();return{c(){f&&f.c(),s=D(),w(t.$$.fragment),r=D(),u&&u.c(),i=R()},l(l){f&&f.l(l),s=P(l),S(t.$$.fragment,l),r=P(l),u&&u.l(l),i=R()},m(l,o){f&&f.m(l,o),p(l,s,o),k(t,l,o),p(l,r,o),u&&u.m(l,o),p(l,i,o),c=!0},p(l,o){o&1&&(e=l[0].url.href.split("/").pop()=="failed"),e?f||(f=T(),f.c(),f.m(s.parentNode,s)):f&&(f.d(1),f=null),o&1&&(n=l[0].url.href.split("/").pop()=="failed"),n?u||(u=q(),u.c(),u.m(i.parentNode,i)):u&&(u.d(1),u=null)},i(l){c||(b(t.$$.fragment,l),c=!0)},o(l){v(t.$$.fragment,l),c=!1},d(l){f&&f.d(l),l&&d(s),I(t,l),l&&d(r),u&&u.d(l),l&&d(i)}}}function oe(a){let e,s,t;return s=new K({props:{className:"center_col",$$slots:{default:[ae]},$$scope:{ctx:a}}}),{c(){e=h("div"),w(s.$$.fragment),this.h()},l(r){e=_(r,"DIV",{style:!0});var n=$(e);S(s.$$.fragment,n),n.forEach(d),this.h()},h(){Q(e,"font-family",'"Roboto Slab"')},m(r,n){p(r,e,n),k(s,e,null),t=!0},p(r,[n]){const i={};n&5&&(i.$$scope={dirty:n,ctx:r}),s.$set(i)},i(r){t||(b(s.$$.fragment,r),t=!0)},o(r){v(s.$$.fragment,r),t=!1},d(r){r&&d(e),I(s)}}}function ie(a,e,s){let t;return z(a,Y,n=>s(0,t=n)),[t,n=>{console.log(n),window.location.href="/drafts/hoffmanns-schuppen/admin/access/"+n}]}class pe extends V{constructor(e){super(),y(this,e,ie,oe,N,{})}}export{pe as component};