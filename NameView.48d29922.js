import{S as J,a as U,s as W,c as x,e as v,d as w,f as C,g as V,j as b,k as E,l as n,B as I,n as H,C as M,m as O,o as g,u as ee,q as te,r as se,t as R,v as A,E as ae,b as X,F as le,h as Y,p as Z,G as re,H as oe,w as $,K,P as ie,Q as P,R as Q,L as ne,M as T,N as ce}from"./chunks/state.c888dd78.js";/* empty css                        */const S="/donor-wall/assets/streaks.db22440e.avif";function me(r){let s,t,a,o,l,m,u,e,i,h,N,B,q,k,L,j,p,z,G,y;const D=r[4].default,f=x(D,r,r[3],null);return{c(){s=v("section"),t=v("div"),a=v("div"),f&&f.c(),o=w(),l=v("img"),u=w(),e=v("img"),h=w(),N=v("img"),q=w(),k=v("img"),j=w(),p=v("img"),this.h()},l(c){s=C(c,"SECTION",{class:!0});var d=V(s);t=C(d,"DIV",{class:!0});var _=V(t);a=C(_,"DIV",{class:!0});var F=V(a);f&&f.l(F),F.forEach(b),o=E(_),l=C(_,"IMG",{alt:!0,class:!0,src:!0}),u=E(_),e=C(_,"IMG",{alt:!0,class:!0,src:!0}),h=E(_),N=C(_,"IMG",{alt:!0,class:!0,src:!0}),q=E(_),k=C(_,"IMG",{alt:!0,class:!0,src:!0}),j=E(_),p=C(_,"IMG",{alt:!0,class:!0,src:!0}),_.forEach(b),d.forEach(b),this.h()},h(){n(a,"class","content svelte-sr9mye"),n(l,"alt",""),n(l,"class","streak-img streak-img--underlay svelte-sr9mye"),I(l.src,m=S)||n(l,"src",m),n(e,"alt",""),n(e,"class","streak-img svelte-sr9mye"),I(e.src,i=S)||n(e,"src",i),n(N,"alt",""),n(N,"class","streak-img streak-img--duplicate svelte-sr9mye"),I(N.src,B=S)||n(N,"src",B),n(k,"alt",""),n(k,"class","streak-img streak-img--faint svelte-sr9mye"),I(k.src,L=S)||n(k,"src",L),n(p,"alt",""),n(p,"class","streak-img streak-img--faint svelte-sr9mye"),I(p.src,z=S)||n(p,"src",z),n(t,"class","bg svelte-sr9mye"),n(s,"class",G=H(`container ${r[2]}`)+" svelte-sr9mye"),M(s,"--bottom-color",r[1],!1),M(s,"--top-color",r[0],!1)},m(c,d){O(c,s,d),g(s,t),g(t,a),f&&f.m(a,null),g(t,o),g(t,l),g(t,u),g(t,e),g(t,h),g(t,N),g(t,q),g(t,k),g(t,j),g(t,p),y=!0},p(c,[d]){f&&f.p&&(!y||d&8)&&ee(f,D,c,c[3],y?se(D,c[3],d,null):te(c[3]),null),(!y||d&4&&G!==(G=H(`container ${c[2]}`)+" svelte-sr9mye"))&&n(s,"class",G),d&2&&M(s,"--bottom-color",c[1],!1),d&1&&M(s,"--top-color",c[0],!1)},i(c){y||(R(f,c),y=!0)},o(c){A(f,c),y=!1},d(c){c&&b(s),f&&f.d(c)}}}function ue(r,s,t){let{$$slots:a={},$$scope:o}=s,{topColor:l="blue"}=s,{bottomColor:m="green"}=s,{class:u=""}=s;return r.$$set=e=>{"topColor"in e&&t(0,l=e.topColor),"bottomColor"in e&&t(1,m=e.bottomColor),"class"in e&&t(2,u=e.class),"$$scope"in e&&t(3,o=e.$$scope)},[l,m,u,o,a]}class fe extends J{constructor(s){super(),U(this,s,ue,me,W,{topColor:0,bottomColor:1,class:2})}}function _e(r){let s,t;return s=new ce({props:{class:"graphic--animation",lightColor:r[3].topColor,fillColor:r[3].bottomColor,firstName:r[0],lastName:r[1],year:r[2]}}),{c(){X(s.$$.fragment)},l(a){Y(s.$$.fragment,a)},m(a,o){Z(s,a,o),t=!0},p(a,o){const l={};o&8&&(l.lightColor=a[3].topColor),o&8&&(l.fillColor=a[3].bottomColor),o&1&&(l.firstName=a[0]),o&2&&(l.lastName=a[1]),o&4&&(l.year=a[2]),s.$set(l)},i(a){t||(R(s.$$.fragment,a),t=!0)},o(a){A(s.$$.fragment,a),t=!1},d(a){$(s,a)}}}function ge(r){let s,t,a,o,l;document.title=s="Name View: "+r[0]+" "+r[1];const m=[r[3],{class:"streak-container"}];let u={$$slots:{default:[_e]},$$scope:{ctx:r}};for(let e=0;e<m.length;e+=1)u=ae(u,m[e]);return o=new fe({props:u}),{c(){t=w(),a=v("div"),X(o.$$.fragment),this.h()},l(e){le('[data-svelte="svelte-ofljz1"]',document.head).forEach(b),t=E(e),a=C(e,"DIV",{class:!0});var h=V(a);Y(o.$$.fragment,h),h.forEach(b),this.h()},h(){n(a,"class","root svelte-diyp2o")},m(e,i){O(e,t,i),O(e,a,i),Z(o,a,null),l=!0},p(e,[i]){(!l||i&3)&&s!==(s="Name View: "+e[0]+" "+e[1])&&(document.title=s);const h=i&8?re(m,[oe(e[3]),m[1]]):{};i&79&&(h.$$scope={dirty:i,ctx:e}),o.$set(h)},i(e){l||(R(o.$$.fragment,e),l=!0)},o(e){A(o.$$.fragment,e),l=!1},d(e){e&&b(t),e&&b(a),$(o)}}}function de(r,s,t){let a,o;K(r,T,i=>t(5,a=i));let{firstName:l}=s,{lastName:m}=s,{year:u}=s,e=ie({duration:9e4,topColors:P([...Q],-1),bottomColors:P([...Q],0)});return K(r,e,i=>t(3,o=i)),ne(()=>{T.set({firstName:l,lastName:m,year:u}),window.SET_STATE=T.set,window.GET_STATE=T.get,window.COLORS=e.get}),r.$$set=i=>{"firstName"in i&&t(0,l=i.firstName),"lastName"in i&&t(1,m=i.lastName),"year"in i&&t(2,u=i.year)},r.$$.update=()=>{r.$$.dirty&39&&(t(0,l=a.firstName||l),t(1,m=a.lastName||m),t(2,u=a.year||u))},[l,m,u,o,e,a]}class Ce extends J{constructor(s){super(),U(this,s,de,ge,W,{firstName:0,lastName:1,year:2})}}export{Ce as default};
