(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>x});var i=t(81),o=t.n(i),a=t(645),r=t.n(a),c=t(667),d=t.n(c),l=new URL(t(876),t.b),s=new URL(t(761),t.b),p=new URL(t(72),t.b),m=r()(o()),u=d()(l),h=d()(s),g=d()(p);m.push([e.id,":root{\n    --main-color:#fdf8ee;\n    --secondary-color:#375542;\n}\n*{\n    font-family: Arial, Helvetica, sans-serif;\n    box-sizing: border-box;\n    margin:0 auto;\n}\nbody{\n    min-height: 100vh;\n    min-width:100vw;\n    background-color:#fdf8ee;\n    overflow-x: hidden;\n}\nnavbar > li{\n    cursor: pointer;\n}\nnavbar > li:hover{\n    text-decoration: underline;\n}\n/*Styling for the landing page. */\n\n.hero-section{\n    background-image: url("+u+");\n    background-repeat:  no-repeat;\n    background-size: cover;\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 0 auto;\n}\n.hero-section > img{\n    min-width:200px;\n}\n.about-section{\n    background-color: var(--secondary-color);\n    color:var(--main-color);\n    margin: 0 auto;\n    padding: 80px 100px;\n    margin: 0 auto;\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    width:100%;\n}\n.about-section > h2{\n    margin-top:10px;\n    font-size:2em;\n    text-align: center;\n    margin-bottom:10px;\n}\n.about-section > p{\n    margin-top:10px;\n    width:40%;\n    font-size:1.45em;\n    text-align: center;\n    min-width:300px;\n    margin: 0 auto;\n}\n.menu-section{\n    width:100%;\n    display:flex;\n    flex-wrap: wrap;\n    color:var(--secondary-color);\n    padding: 120px 24px;\n    justify-content: space-between;\n    align-items: center;\n    flex-direction: row;\n    background-image: url("+h+");\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n.menu-wrapper{\n    width:75%;\n    display:flex;\n    flex-wrap: wrap;\n}\n.menu-section > .menu-wrapper >.image-container{\n    max-width:480px;\n}\n.menu-section > .menu-wrapper > .image-container > img{\n    width:75%;\n    min-width:285px;\n}\n.menu-section > .menu-wrapper > .text-container{\n    width:40%;\n    max-width:500px;\n    min-width:300px;\n    margin: 0 auto;\n    padding:16px;\n    font-size:1.2em;\n}\n.menu-wrapper > .text-container{\n    display:flex;\n    flex-direction: column;\n    justify-content: center;\n}\n.menu-wrapper > .text-container > h3{\n    width:100%;\n    display:flex;\n    justify-content: flex-start;\n}\n.text-container > p{\n    margin-top: 10px;\n}\n.menu-wrapper > .text-container > .btn-container{\n    width:125px;\n    justify-content: center;\n    display:flex;\n    font-size:0.80em;\n    margin-top:25px;\n    font-weight: bold;\n}\n.menu-wrapper > .text-container > .btn-container:hover{\n    cursor: pointer;\n    text-decoration: underline;\n}\n\n.reservation-section{\n    display:flex;\n    flex-wrap: wrap-reverse;\n    justify-content: center;\n    flex-direction: row;\n    padding:24px;\n    padding-bottom:100px;\n    color:var(--secondary-color);\n    width:85%;\n}\n.reservation-section > .text-container{\n    width:75%;\n    max-width:500px;\n    min-width:300px;\n    margin: 0 auto;\n    padding:16px;\n    font-size:1.2em;\n    display:flex;\n    flex-direction: column;\n    justify-content: center;\n}\n.reservation-section > .text-container > h3{\n    width:100%;\n    display:flex;\n    justify-content: flex-start;\n}\n.reservation-section >.text-container > .btn-container{\n    width:140px;\n    justify-content: center;\n    display:flex;\n    font-size:0.80em;\n    margin-top:25px;\n    font-weight: bold;\n}\n.reservation-section >.text-container > .btn-container:hover{\n    cursor: pointer;\n    text-decoration: underline;\n}\n.reservation-section > .image-container{\n    width:40%;\n    padding-left:25px;\n    display:flex;\n    justify-content: center;\n}\n.reservation-section > .image-container > img{\n    width:100%;\n    max-width:675px;\n    min-width:480px;\n}\n.information-section{\n    padding:20px 0px;\n    color:var(--secondary-color);\n    background-image: url("+g+");\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n.location-container{\n    margin-top:20px;\n    padding-bottom:20px;\n}\n.location-container > h5{\n    margin: 0 auto;\n    text-align: center;\n    font-size:1.25em;\n    margin-bottom:15px;\n}\n.location-container > h5:last-of-type{\n    margin-top:20px;\n}\n.location-container > p{\n    font-size:1.2em;\n    text-align: center;\n}\n.number{\n    text-align: center;\n    font-weight: bold;\n    color:#efd166;\n}\n .hours-container{\n    margin-bottom:20px;\n}\n.hours-container > h5{\n    font-size:1.25em;\n    text-align: center;\n}\n.hours-container > li{\n    font-size:1.2em;\n    list-style-type: none;\n    text-align:center;\n    margin: 10px 0px;\n}\n/*Styling for the menu page.*/\n.menu-container{\n    width:40%;\n    min-width:420px;\n    margin: 0 auto;\n    color:var(--secondary-color);\n    border: 10px solid var(--secondary-color);\n    box-shadow: 6px 6px 6px rgb(148, 122, 119);\n    margin: 20px 0px;\n}\nheader{\n    display:flex;\n    justify-content: center;\n    flex-direction:column;\n    padding-bottom:20px;\n}\nheader > p{\n    font-size:0.95em;\n}\n.logo-container > img{\n    max-width:200px;\n}\n.section-title{\n    width:95%;\n    padding-bottom:5px;\n    border-bottom:1px solid var(--secondary-color);\n}\n.section-container{\n    width:80%;\n    padding:24px;\n    display:flex;\n    flex-wrap: wrap;\n    margin:0 auto;\n}\n.item{\n    max-width:200px;\n    margin: 15px auto;\n}\n.item-header{\n    width:100%;\n    display:flex;\n}\n.item-title{\n    width:60%;\n    font-size:0.85em;\n}\n.item-price{\n    width:40%;\n    display:flex;\n    justify-content: center;\n    font-weight:bold;\n    font-size:0.90em;\n}\n.item-description{\n    margin-top:5px;\n    font-size:0.90em;\n    font-style:italic;\n}\n/*Styling for the contact page. */\n.contact-header, .contact-subheader{\n    text-align:center;\n    color:var(--secondary-color);\n}\n.contact-header{\n    margin-top:30px;\n    margin-bottom:10px;\n    font-size:1.35em;\n}\n.contact-subheader{\n    margin-top:10px;\n    margin-bottom:20px;\n    font-size:1.0em;\n    max-width:450px;\n}\n.contact-container{\n    width:25%;\n    min-width:400px;\n    margin: 0 auto;\n    padding:20px;\n    border-radius: 5px;\n}\nlabel{\n    color:var(--secondary-color);\n}\n#name, #email, #subject, textarea{\n    width:100%;\n    padding:12px;\n    border:1px solid var(--secondary-color);\n    border-radius:4px;\n    box-sizing: border-box;\n    margin-top:6px;\n    margin-bottom:16px;\n    resize:vertical;\n}\ninput[type=submit]{\n    width:40%;\n    margin: 0 auto;\n    background-color: var(--secondary-color);\n    color:var(--main-color);\n    padding:6px;\n    font-size:1.1em;\n    border:none;\n    border-radius:4px;\n    cursor:pointer;\n};\ninput[type=submit]:hover{\n    cursor:pointer;\n    background-color: #2f4738;\n}\n#message{\n    height:200px;\n};\n#submit{\n    width:100%;\n}\n#submit:hover{\n    background-color: #2f4738;\n}\n.button-container{\n    width:100%;\n    display:flex;\n    justify-content: center;\n    align-items: center;\n}\n@media screen and (max-width:500px) {\n    .hero-section{\n        background-position-x:-1200px;\n    }\n}\n\n@media screen and (max-width:420px){\n    .hero-section{\n        background-image:none;\n    }\n    .hero-section > img{\n        width:400px;\n    }\n    .about-section {\n        padding-left:100px;\n    }\n    .about-section > p{\n        text-align: center;\n        margin-left:-40px;\n    }\n    .menu-wrapper > .text-container {\n        margin-top:10px;\n    }\n    .reservation-section{\n        margin-top:-20px;\n        padding-bottom:60px;\n    }\n    .reservation-section > .image-container {\n        width:200px;\n        margin-left:-1px;\n    }\n    .reservation-section > .image-container > img{\n        min-width:480px;\n    }\n    .location-container{\n        margin-top:10px;\n    }\n}",""]);const x=m},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",i=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),i&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),i&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,i,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(i)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(r[d]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);i&&r[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),n.push(s))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,i=0;i<n.length;i++)if(n[i].identifier===e){t=i;break}return t}function i(e,i){for(var a={},r=[],c=0;c<e.length;c++){var d=e[c],l=i.base?d[0]+i.base:d[0],s=a[l]||0,p="".concat(l," ").concat(s);a[l]=s+1;var m=t(p),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)n[m].references++,n[m].updater(u);else{var h=o(u,i);i.byIndex=c,n.splice(c,0,{identifier:p,updater:h,references:1})}r.push(p)}return r}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=i(e=e||[],o=o||{});return function(e){e=e||[];for(var r=0;r<a.length;r++){var c=t(a[r]);n[c].references--}for(var d=i(e,o),l=0;l<a.length;l++){var s=t(a[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}a=d}}},569:e=>{var n={};e.exports=function(e,t){var i=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,o&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(i,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},876:(e,n,t)=>{e.exports=t.p+"3656e92a5bfca84b3e1f.png"},72:(e,n,t)=>{e.exports=t.p+"cfa0ad8b1f6a895ad263.png"},761:(e,n,t)=>{e.exports=t.p+"53da0ca15972b4d5e38b.png"}},n={};function t(i){var o=n[i];if(void 0!==o)return o.exports;var a=n[i]={id:i,exports:{}};return e[i](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var i=n.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),i=t(795),o=t.n(i),a=t(569),r=t.n(a),c=t(565),d=t.n(c),l=t(216),s=t.n(l),p=t(589),m=t.n(p),u=t(426),h={};function g(){const e=document.getElementById("content");x();let n=document.createElement("main"),t=document.createElement("div"),i=document.createElement("header"),o=document.createElement("div"),a=document.createElement("img"),r=document.createElement("h3"),c=document.createElement("p");t.className="menu-container",o.className="logo-container",a.src="images/logo.png",r.textContent='"Buon cibo. Buon vino. Buon amici."',c.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque est sed nulla placerat volutpat. Proin non lorem quis arcu rutrum volutpat ut id orci.",t.appendChild(i),i.appendChild(o),o.appendChild(a),i.appendChild(r),i.appendChild(c);let d=document.createElement("article"),l=document.createElement("div"),s=document.createElement("div");l.className="section-title",l.textContent="PASTA",s.className="section-container";let p=[];function m(e,n,t){this.title=e,this.price=n,this.description=t}const u=new m("FETTUCCINE","15","Lorem ipsum dolor sit amet, consectetur adipiscing elit."),h=new m("BOLOGNESE","13","Lorem ipsum dolor sit amet, consectetur adipiscing elit."),g=new m("CACIO E PEPE","13","Lorem ipsum dolor sit amet, consectetur adipiscing elit."),f=new m("RAVIOLI","12","Lorem ipsum dolor sit amet, consectetur adipiscing elit."),C=new m("LASAGNA","15","Lorem ipsum dolor sit amet, consectetur adipiscing elit.");p.push(u,h,g,f,C),console.log(p),function(){let e;for(e=0;e<p.length;e++){let n=document.createElement("div"),t=document.createElement("div"),i=document.createElement("p"),o=document.createElement("h5"),a=document.createElement("div");n.className="item",t.className="item-header",i.className="item-description",o.className="item-title",a.className="item-price",o.textContent=p[e].title,a.textContent=p[e].price,i.textContent=p[e].description,n.appendChild(t),t.appendChild(o),t.appendChild(a),n.appendChild(i),s.appendChild(n)}}(),d.appendChild(l),d.appendChild(s);let v=document.createElement("article"),E=document.createElement("div"),b=document.createElement("div");b.className="section-container",E.className="section-title",E.textContent="PIZZA",b.className="section-container";let w=[];function m(e,n,t){this.title=e,this.price=n,this.description=t}const y=new m("FETTUCCINE","15","Lorem ipsum dolor sit amet, consectetur adipiscing elit."),N=new m("BOLOGNESE","13","Lorem ipsum dolor sit amet, consectetur adipiscing elit."),L=new m("CACIO E PEPE","13","Lorem ipsum dolor sit amet, consectetur adipiscing elit."),A=new m("RAVIOLI","12","Lorem ipsum dolor sit amet, consectetur adipiscing elit."),I=new m("LASAGNA","15","Lorem ipsum dolor sit amet, consectetur adipiscing elit.");w.push(y,N,L,A,I),console.log(w),function(){let e;for(e=0;e<w.length;e++){let n=document.createElement("div"),t=document.createElement("div"),i=document.createElement("p"),o=document.createElement("h5"),a=document.createElement("div");n.className="item",t.className="item-header",i.className="item-description",o.className="item-title",a.className="item-price",o.textContent=w[e].title,a.textContent=w[e].price,i.textContent=w[e].description,n.appendChild(t),t.appendChild(o),t.appendChild(a),n.appendChild(i),b.appendChild(n)}}(),v.appendChild(E),v.appendChild(b);let S=document.createElement("article"),T=document.createElement("div"),k=document.createElement("div");T.className="section-title",T.textContent="DESSERT",k.className="section-container",k.classList="section-container dessert";let B=[];function m(e,n,t){this.title=e,this.price=n,this.description=t}const M=new m("FETTUCCINE","15","Lorem ipsum dolor sit amet, consectetur adipiscing elit."),O=new m("BOLOGNESE","13","Lorem ipsum dolor sit amet, consectetur adipiscing elit."),z=new m("CACIO E PEPE","13","Lorem ipsum dolor sit amet, consectetur adipiscing elit.");B.push(M,O,z),console.log(B),function(){let e;for(e=0;e<B.length;e++){let n=document.createElement("div"),t=document.createElement("div"),i=document.createElement("p"),o=document.createElement("h5"),a=document.createElement("div");n.className="item",t.className="item-header",i.className="item-description",o.className="item-title",a.className="item-price",o.textContent=B[e].title,a.textContent=B[e].price,i.textContent=B[e].description,n.appendChild(t),t.appendChild(o),t.appendChild(a),n.appendChild(i),k.appendChild(n)}}(),S.appendChild(T),S.appendChild(k),e.appendChild(n),n.appendChild(t),t.appendChild(d),t.appendChild(v),t.appendChild(S)}function x(){const e=document.getElementById("content");function n(e){const n=document.createElement("li");return n.textContent=e,n.id=e,n.className="navigation-tabs",n}let t=document.createElement("nav"),i=document.createElement("navbar");t.appendChild(i),i.appendChild(n("Home")),i.appendChild(n("Menu")),i.appendChild(n("Contact")),e.appendChild(t);let o=document.getElementById("Menu"),a=document.getElementById("Home"),r=document.getElementById("Contact");o.addEventListener("click",(function(n){"Menu"===n.target.id&&(e.textContent="",g())})),a.addEventListener("click",(function(n){"Home"===n.target.id&&(e.textContent="",w())})),r.addEventListener("click",(function(n){"Contact"===n.target.id&&(e.textContent="",f())}))}function f(){const e=document.getElementById("content");x();let n=document.createElement("h2");n.className="contact-header",n.textContent="CONTACT US";let t=document.createElement("p");t.className="contact-subheader",t.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque est sed nulla placerat volutpat. Proin non lorem quis arcu rutrum volutpat ut id orci. Duis condimentum rhoncus elementum.";let i=document.createElement("div");i.className="contact-container";let o=document.createElement("form"),a=document.createElement("label"),r=document.createElement("input"),c=document.createElement("label"),d=document.createElement("input"),l=document.createElement("label"),s=document.createElement("input"),p=document.createElement("label"),m=document.createElement("textarea"),u=document.createElement("div"),h=document.createElement("input");a.setAttribute("for","name"),a.textContent="Full name:",r.setAttribute("type","text"),r.id="name",c.setAttribute("for","email"),c.textContent="Email:",d.setAttribute("type","email"),d.id="email",l.setAttribute("for","subject"),l.textContent="Subject:",s.setAttribute("type","text"),s.id="subject",p.setAttribute("for","message"),p.textContent="Message:",m.id="message",h.setAttribute("type","submit"),h.id="submit",u.className="button-container",u.appendChild(h),o.appendChild(a),o.appendChild(r),o.appendChild(c),o.appendChild(d),o.appendChild(l),o.appendChild(s),o.appendChild(p),o.appendChild(m),o.appendChild(u),i.appendChild(o),e.appendChild(n),e.appendChild(t),e.appendChild(i)}function C(e){const n=document.createElement("p");return n.textContent=e,n}function v(e){const n=document.createElement("h3");return n.textContent=e,n}function E(e){const n=document.createElement("h5");return n.textContent=e,n}function b(e){const n=document.createElement("li");return n.textContent=e,n}function w(){const e=document.getElementById("content");let n=document.createElement("section"),t=document.createElement("img");n.className="hero-section",n.id="hero-section",t.src="images/logo.png",e.appendChild(n),function(){const e=document.getElementById("content"),n=document.getElementById("hero-section");function t(e){const n=document.createElement("li");return n.textContent=e,n.id=e,n.className="navigation-tabs",n}let i=document.createElement("nav"),o=document.createElement("navbar");i.appendChild(o),o.appendChild(t("Home")),o.appendChild(t("Menu")),o.appendChild(t("Contact")),n.appendChild(i);let a=document.getElementById("Menu"),r=document.getElementById("Home"),c=document.getElementById("Contact");a.addEventListener("click",(function(n){"Menu"===n.target.id&&(e.textContent="",g())})),r.addEventListener("click",(function(n){"Home"===n.target.id&&(e.textContent="",w())})),c.addEventListener("click",(function(n){"Contact"===n.target.id&&(e.textContent="",f())}))}(),n.appendChild(t);let i=document.createElement("section");i.className="about-section",i.id="about-section",i.appendChild(function(e){const n=document.createElement("h2");return n.textContent='"Buon cibo. Buon vino. Buon amici."',n}()),i.appendChild(C("Good food. Good wine. Good friends. The atmosphere of Italy dictates the mood at Brocelle. We offer you not only the best italian dishes, but also the ambiance, interior, and music that will transform an average night to one under the stars of Italy.")),e.appendChild(i),function(){const e=document.getElementById("content");let n=document.createElement("section"),t=document.createElement("div");t.className="menu-wrapper",n.className="menu-section",n.id="menu-section";let i=document.createElement("div");i.className="image-container";let o=document.createElement("img");o.src="images/pasta.png",i.appendChild(o);let a=document.createElement("div");a.className="text-container",a.id="menu-text-container",a.appendChild(v("MENU")),a.appendChild(C("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque est sed nulla placerat volutpat. Proin non lorem quis arcu rutrum volutpat ut id orci. Mauris sodales hendrerit purus vel iaculis. Proin volutpat ullamcorper sapien, et tempor augue luctus et. Duis condimentum rhoncus elementum.")),a.appendChild(C("Aliquam sit amet ultricies diam. Nullam in mi neque. Nam quis nibh viverra, malesuada massa non, facilisis augue."));let r=document.createElement("div");r.className="btn-container",r.id="menu-arrow",r.innerHTML="FULL MENU &#10230;",a.appendChild(r),t.appendChild(i),t.appendChild(a),n.appendChild(t),e.appendChild(n),r.addEventListener("click",(function(n){"menu-arrow"===n.target.id&&(e.textContent="",window.scroll(0,0),g())}))}(),function(){const e=document.getElementById("content");let n=document.createElement("section");n.className="reservation-section",n.id="reservation-section";let t=document.createElement("div");t.className="image-container";let i=document.createElement("img");i.src="images/collage.png",t.appendChild(i);let o=document.createElement("div");o.className="text-container",o.appendChild(v("MAKE A RESERVATION")),o.appendChild(C("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque est sed nulla placerat volutpat. Proin non lorem quis arcu rutrum volutpat ut id orci. Mauris sodales hendrerit purus vel iaculis. Proin volutpat ullamcorper sapien, et tempor augue luctus et. Duis condimentum rhoncus elementum.")),o.appendChild(C("Aliquam sit amet ultricies diam. Nullam in mi neque. Nam quis nibh viverra, malesuada massa non, facilisis augue."));let a=document.createElement("div");a.className="btn-container",a.id="reservation-arrow",a.innerHTML="LEARN MORE &#10230;",o.appendChild(a),n.appendChild(o),n.appendChild(t),e.appendChild(n),a.addEventListener("click",(function(n){"reservation-arrow"===n.target.id&&(e.textContent="",f())}))}();let o=document.createElement("div");o.className="information-section",o.id="information-section";let a=document.createElement("div");a.className="location-container";let r=document.createElement("p");r.className="number",r.textContent="202-555-0170";let c=document.createElement("div");c.className="hours-container",a.appendChild(E("WHERE TO FIND US")),a.appendChild(C("125 Timber Ridge Road, Alexandria, CA 12345, USA")),a.appendChild(E("RESERVATIONS")),a.appendChild(r),c.appendChild(E("HOURS OF OPERATION")),c.appendChild(b("Monday: 11am - 9pm")),c.appendChild(b("Tuesday: 11am - 9pm")),c.appendChild(b("Wednesday: 11am - 9pm")),c.appendChild(b("Thursday: 11am - 9pm")),c.appendChild(b("Friday: 11am - 10pm")),c.appendChild(b("Saturday: 5pm - 11pm")),c.appendChild(b("Sunday: Closed")),o.appendChild(a),o.appendChild(c),e.appendChild(o)}h.styleTagTransform=m(),h.setAttributes=d(),h.insert=r().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=s(),n()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals,w()})()})();
