import{S as oe,i as ae,s as re,c as J,e as E,a as G,b as N,d as A,f as g,g as L,h as n,j as S,k as F,n as P,l as M,m as b,u as Q,o as W,p as X,t as R,q as U,r as B,v as K,w as Y,x as ne,y as Z,z as p,A as x,B as fe,C as $,D as ce,E as me,F as ee,G as _e}from"./index.js";import ue from"./StoryMeta.js";/* empty css                                      */import{a as de}from"./colors.js";import{s as z}from"./state.js";import"./NameCircle.js";const he="/donor-wall/assets/article-default.jpg",ge="/donor-wall/assets/uwhorg-qr.png",ve=l=>({}),te=l=>({}),Ce=l=>({}),se=l=>({});function we(l){let t;return{c(){t=B("Use your phone's camera To scan the qr\xA0code")},l(e){t=K(e,"Use your phone's camera To scan the qr\xA0code")},m(e,s){M(e,t,s)},d(e){e&&g(t)}}}function ke(l){let t;return{c(){t=B("View legacy donors, read stories, donate, and more")},l(e){t=K(e,"View legacy donors, read stories, donate, and more")},m(e,s){M(e,t,s)},d(e){e&&g(t)}}}function be(l){let t,e,s,i,C,f,c,d,h,k,q,V,_;const T=l[5].left,a=J(T,l,l[4],se),v=a||we(),O=l[5].right,y=J(O,l,l[4],te),w=y||ke();return{c(){t=E("div"),e=G(),s=E("footer"),i=E("div"),v&&v.c(),C=G(),f=E("div"),c=E("div"),d=E("img"),k=G(),q=E("div"),w&&w.c(),this.h()},l(o){t=N(o,"DIV",{class:!0}),A(t).forEach(g),e=L(o),s=N(o,"FOOTER",{class:!0});var m=A(s);i=N(m,"DIV",{class:!0});var r=A(i);v&&v.l(r),r.forEach(g),C=L(m),f=N(m,"DIV",{class:!0});var u=A(f);c=N(u,"DIV",{class:!0});var I=A(c);d=N(I,"IMG",{class:!0,alt:!0,src:!0}),I.forEach(g),u.forEach(g),k=L(m),q=N(m,"DIV",{class:!0});var D=A(q);w&&w.l(D),D.forEach(g),m.forEach(g),this.h()},h(){n(t,"class","shadow svelte-hxrkwh"),S(t,"--color-1",l[3],!1),S(t,"--color-2",l[2],!1),n(i,"class","content content--left svelte-hxrkwh"),n(d,"class","qrcode__img svelte-hxrkwh"),n(d,"alt",""),F(d.src,h=l[1])||n(d,"src",h),n(c,"class","qrcode__container svelte-hxrkwh"),n(f,"class","qrcode svelte-hxrkwh"),n(q,"class","content content--right svelte-hxrkwh"),n(s,"class",V=P(l[0])+" svelte-hxrkwh"),S(s,"--color-1",l[3],!1),S(s,"--color-2",l[2],!1)},m(o,m){M(o,t,m),M(o,e,m),M(o,s,m),b(s,i),v&&v.m(i,null),b(s,C),b(s,f),b(f,c),b(c,d),b(s,k),b(s,q),w&&w.m(q,null),_=!0},p(o,[m]){m&8&&S(t,"--color-1",o[3],!1),m&4&&S(t,"--color-2",o[2],!1),a&&a.p&&(!_||m&16)&&Q(a,T,o,o[4],_?X(T,o[4],m,Ce):W(o[4]),se),(!_||m&2&&!F(d.src,h=o[1]))&&n(d,"src",h),y&&y.p&&(!_||m&16)&&Q(y,O,o,o[4],_?X(O,o[4],m,ve):W(o[4]),te),(!_||m&1&&V!==(V=P(o[0])+" svelte-hxrkwh"))&&n(s,"class",V),m&8&&S(s,"--color-1",o[3],!1),m&4&&S(s,"--color-2",o[2],!1)},i(o){_||(R(v,o),R(w,o),_=!0)},o(o){U(v,o),U(w,o),_=!1},d(o){o&&g(t),o&&g(e),o&&g(s),v&&v.d(o),w&&w.d(o)}}}function qe(l,t,e){let{$$slots:s={},$$scope:i}=t,{class:C=""}=t,{qrCode:f=ge}=t,{topColor:c="blue"}=t,{bottomColor:d="#5e36f7"}=t;return l.$$set=h=>{"class"in h&&e(0,C=h.class),"qrCode"in h&&e(1,f=h.qrCode),"topColor"in h&&e(2,c=h.topColor),"bottomColor"in h&&e(3,d=h.bottomColor),"$$scope"in h&&e(4,i=h.$$scope)},[C,f,c,d,i,s]}class Ie extends oe{constructor(t){super(),ae(this,t,qe,be,re,{class:0,qrCode:1,topColor:2,bottomColor:3})}}function le(l){let t;return{c(){t=B(l[0])},l(e){t=K(e,l[0])},m(e,s){M(e,t,s)},p(e,s){s&1&&_e(t,e[0])},d(e){e&&g(t)}}}function Ee(l){let t,e=l[0]&&le(l);return{c(){e&&e.c(),t=ee()},l(s){e&&e.l(s),t=ee()},m(s,i){e&&e.m(s,i),M(s,t,i)},p(s,i){s[0]?e?e.p(s,i):(e=le(s),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},d(s){e&&e.d(s),s&&g(t)}}}function Ne(l){let t,e,s,i,C,f,c,d,h,k,q,V,_,T,a,v,O,y,w,o,m;return document.title=t="Article view: "+l[1]+" "+l[2],T=new ue({props:{class:"meta",firstName:l[1],lastName:l[2],year:l[3],organ:l[4],date:l[7],topColor:"var(--top-color)",bottomColor:"var(--bottom-color)",$$slots:{default:[Ee]},$$scope:{ctx:l}}}),y=new Ie({props:{topColor:"var(--top-color)",bottomColor:"var(--bottom-color)",qrCode:l[8]}}),{c(){e=E("link"),s=G(),i=E("article"),C=E("div"),f=E("div"),c=E("img"),h=G(),k=E("img"),V=G(),_=E("div"),Y(T.$$.fragment),a=G(),v=E("section"),O=G(),Y(y.$$.fragment),this.h()},l(r){const u=ne('[data-svelte="svelte-11bxofq"]',document.head);e=N(u,"LINK",{rel:!0,href:!0}),u.forEach(g),s=L(r),i=N(r,"ARTICLE",{class:!0});var I=A(i);C=N(I,"DIV",{class:!0});var D=A(C);f=N(D,"DIV",{class:!0});var j=A(f);c=N(j,"IMG",{alt:!0,class:!0,src:!0}),h=L(j),k=N(j,"IMG",{alt:!0,class:!0,src:!0}),j.forEach(g),V=L(D),_=N(D,"DIV",{id:!0,class:!0});var H=A(_);Z(T.$$.fragment,H),a=L(H),v=N(H,"SECTION",{id:!0,class:!0});var ie=A(v);ie.forEach(g),H.forEach(g),D.forEach(g),O=L(I),Z(y.$$.fragment,I),I.forEach(g),this.h()},h(){n(e,"rel","prefetch"),n(e,"href",l[6]),n(c,"alt",""),n(c,"class","cover__bg svelte-dm90kh"),F(c.src,d=l[6])||n(c,"src",d),n(k,"alt",""),n(k,"class","cover__img svelte-dm90kh"),F(k.src,q=l[6])||n(k,"src",q),n(f,"class","cover svelte-dm90kh"),p(f,"tall-cover",l[9]),n(v,"id","Story"),n(v,"class","story__content svelte-dm90kh"),n(_,"id","Content"),n(_,"class","row svelte-dm90kh"),n(C,"class","story__container"),n(i,"class","story svelte-dm90kh")},m(r,u){b(document.head,e),M(r,s,u),M(r,i,u),b(i,C),b(C,f),b(f,c),b(f,h),b(f,k),b(C,V),b(C,_),x(T,_,null),b(_,a),b(_,v),v.innerHTML=l[5],b(i,O),x(y,i,null),w=!0,o||(m=fe(l[10].call(null,i)),o=!0)},p(r,[u]){(!w||u&6)&&t!==(t="Article view: "+r[1]+" "+r[2])&&(document.title=t),(!w||u&64)&&n(e,"href",r[6]),(!w||u&64&&!F(c.src,d=r[6]))&&n(c,"src",d),(!w||u&64&&!F(k.src,q=r[6]))&&n(k,"src",q),u&512&&p(f,"tall-cover",r[9]);const I={};u&2&&(I.firstName=r[1]),u&4&&(I.lastName=r[2]),u&8&&(I.year=r[3]),u&16&&(I.organ=r[4]),u&128&&(I.date=r[7]),u&4097&&(I.$$scope={dirty:u,ctx:r}),T.$set(I),(!w||u&32)&&(v.innerHTML=r[5]);const D={};u&256&&(D.qrCode=r[8]),y.$set(D)},i(r){w||(R(T.$$.fragment,r),R(y.$$.fragment,r),w=!0)},o(r){U(T.$$.fragment,r),U(y.$$.fragment,r),w=!1},d(r){g(e),r&&g(s),r&&g(i),$(T),$(y),o=!1,m()}}}function Te(l,t,e){let s;ce(l,z,a=>e(11,s=a));let{title:i=""}=t,{firstName:C=""}=t,{lastName:f=""}=t,{year:c=""}=t,{organ:d=""}=t,{date:h=""}=t,{story:k=""}=t,{image:q=he}=t,{qrCode:V=""}=t,{imageIsTall:_=!1}=t;function T(a){const v=de({el:a,offset:2});window.ANIMATION=v}return me(()=>{console.log("mounted",this),window.SET_STATE=z.set,window.GET_STATE=z.get}),l.$$set=a=>{"title"in a&&e(0,i=a.title),"firstName"in a&&e(1,C=a.firstName),"lastName"in a&&e(2,f=a.lastName),"year"in a&&e(3,c=a.year),"organ"in a&&e(4,d=a.organ),"date"in a&&e(7,h=a.date),"story"in a&&e(5,k=a.story),"image"in a&&e(6,q=a.image),"qrCode"in a&&e(8,V=a.qrCode),"imageIsTall"in a&&e(9,_=a.imageIsTall)},l.$$.update=()=>{l.$$.dirty&2175&&(e(0,i=s.title||i),e(1,C=s.firstName||C),e(2,f=s.lastName||f),e(3,c=s.year||c),e(5,k=s.story||k),e(4,d=s.organ||d),e(6,q=s.image||q),console.log(q))},[i,C,f,c,d,k,q,h,V,_,T,s]}class Ge extends oe{constructor(t){super(),ae(this,t,Te,Ne,re,{title:0,firstName:1,lastName:2,year:3,organ:4,date:7,story:5,image:6,qrCode:8,imageIsTall:9})}}export{Ge as default};