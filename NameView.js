import{S,i as T,s as V,c as B,e as h,b as F,d as p,f as g,h as d,j as H,k as f,B as L,n as I,A as b,l as A,m as N,E as O,u as R,p as z,q as J,t as w,r as E,a as D,g as G,o as M,v as j,F as K,G as P,N as Q,H as y}from"./state.js";/* empty css                                      */import{a as U}from"./colors.js";const W="/donor-wall/assets/streaks-bg-bw.mp4";function X(l){let e,t,s,n,a,r,c,o,_,k;const C=l[4].default,u=B(C,l,l[3],null);return{c(){e=h("section"),t=h("div"),s=h("div"),u&&u.c(),n=F(),a=h("video"),this.h()},l(i){e=p(i,"SECTION",{class:!0});var m=g(e);t=p(m,"DIV",{class:!0});var v=g(t);s=p(v,"DIV",{class:!0});var q=g(s);u&&u.l(q),q.forEach(d),n=H(v),a=p(v,"VIDEO",{class:!0,src:!0,preload:!0,disablepictureinpicture:!0,disableremoteplayback:!0,playbackrate:!0,width:!0,height:!0}),g(a).forEach(d),v.forEach(d),m.forEach(d),this.h()},h(){f(s,"class","content svelte-xe460q"),f(a,"class","video svelte-xe460q"),L(a.src,r=W)||f(a,"src",r),f(a,"preload","auto"),f(a,"disablepictureinpicture",""),f(a,"disableremoteplayback",""),a.playsInline=!0,f(a,"playbackrate",1),a.loop=!0,a.autoplay=!0,a.muted=!0,f(a,"width","1440"),f(a,"height","2560"),f(t,"class","bg svelte-xe460q"),f(e,"class",c=I(`container ${l[2]}`)+" svelte-xe460q"),b(e,"--color-2",l[1],!1),b(e,"--color-1",l[0],!1)},m(i,m){A(i,e,m),N(e,t),N(t,s),u&&u.m(s,null),N(t,n),N(t,a),o=!0,_||(k=O(Y.call(null,a)),_=!0)},p(i,[m]){u&&u.p&&(!o||m&8)&&R(u,C,i,i[3],o?J(C,i[3],m,null):z(i[3]),null),(!o||m&4&&c!==(c=I(`container ${i[2]}`)+" svelte-xe460q"))&&f(e,"class",c),m&2&&b(e,"--color-2",i[1],!1),m&1&&b(e,"--color-1",i[0],!1)},i(i){o||(w(u,i),o=!0)},o(i){E(u,i),o=!1},d(i){i&&d(e),u&&u.d(i),_=!1,k()}}}function Y(l){if(l.paused)try{l.play()}catch{}}function Z(l,e,t){let{$$slots:s={},$$scope:n}=e,{topColor:a="blue"}=e,{bottomColor:r="green"}=e,{class:c=""}=e;return l.$$set=o=>{"topColor"in o&&t(0,a=o.topColor),"bottomColor"in o&&t(1,r=o.bottomColor),"class"in o&&t(2,c=o.class),"$$scope"in o&&t(3,n=o.$$scope)},[a,r,c,n,s]}class x extends S{constructor(e){super(),T(this,e,Z,X,V,{topColor:0,bottomColor:1,class:2})}}function $(l){let e,t;return e=new Q({props:{class:"graphic--animation",lightColor:"var(--top-color)",fillColor:"var(--bottom-color)",firstName:l[0],lastName:l[1],year:l[2]}}),{c(){D(e.$$.fragment)},l(s){G(e.$$.fragment,s)},m(s,n){M(e,s,n),t=!0},p(s,n){const a={};n&1&&(a.firstName=s[0]),n&2&&(a.lastName=s[1]),n&4&&(a.year=s[2]),e.$set(a)},i(s){t||(w(e.$$.fragment,s),t=!0)},o(s){E(e.$$.fragment,s),t=!1},d(s){j(e,s)}}}function ee(l){let e,t,s,n,a;return t=new x({props:{class:"streak-container",topColor:"var(--top-color)",bottomColor:"var(--bottom-color)",$$slots:{default:[$]},$$scope:{ctx:l}}}),{c(){e=h("div"),D(t.$$.fragment),this.h()},l(r){e=p(r,"DIV",{class:!0});var c=g(e);G(t.$$.fragment,c),c.forEach(d),this.h()},h(){f(e,"class","root svelte-3a4nec")},m(r,c){A(r,e,c),M(t,e,null),s=!0,n||(a=O(l[3].call(null,e)),n=!0)},p(r,[c]){const o={};c&39&&(o.$$scope={dirty:c,ctx:r}),t.$set(o)},i(r){s||(w(t.$$.fragment,r),s=!0)},o(r){E(t.$$.fragment,r),s=!1},d(r){r&&d(e),j(t),n=!1,a()}}}function te(l,e,t){let s;K(l,y,o=>t(4,s=o));let{firstName:n}=e,{lastName:a}=e,{year:r}=e;function c(o){const _=U({el:o,offset:1});window.ANIMATION=_}return P(()=>(y.set({firstName:n,lastName:a,year:r}),window.SET_STATE=y.set,window.GET_STATE=y.get,window.COLORS=colors.get,()=>{})),l.$$set=o=>{"firstName"in o&&t(0,n=o.firstName),"lastName"in o&&t(1,a=o.lastName),"year"in o&&t(2,r=o.year)},l.$$.update=()=>{l.$$.dirty&23&&(t(0,n=s.firstName||n),t(1,a=s.lastName||a),t(2,r=s.year||r))},[n,a,r,c,s]}class le extends S{constructor(e){super(),T(this,e,te,ee,V,{firstName:0,lastName:1,year:2})}}export{le as default};
