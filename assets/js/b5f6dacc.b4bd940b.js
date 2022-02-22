"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[778],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7615:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return l},assets:function(){return c},toc:function(){return p},default:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],u={sidebar_position:3},s="How to get started building your own game",l={unversionedId:"getting-started/build-your-first-game",id:"getting-started/build-your-first-game",title:"How to get started building your own game",description:"You should now be familiar with the Game System. If you aren't please go watch some of the videos in that page to better understand what is going on.",source:"@site/docs/getting-started/build-your-first-game.md",sourceDirName:"getting-started",slug:"/getting-started/build-your-first-game",permalink:"/docs/getting-started/build-your-first-game",editUrl:"https://github.com/quadcopter-ar/QuadcopterAR-Documentation/tree/master/docs/getting-started/build-your-first-game.md",tags:[],version:"current",lastUpdatedBy:"Vybhav Achar Bhargav",lastUpdatedAt:1645520736,formattedLastUpdatedAt:"2/22/2022",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Drone \u21cc  Game",permalink:"/docs/getting-started/system-overview/drone-to-game"},next:{title:"Quadcopter Pong",permalink:"/docs/game-specific-documentation/quadcopter-pong"}},c={},p=[],d={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-get-started-building-your-own-game"},"How to get started building your own game"),(0,o.kt)("p",null,"You should now be familiar with the ",(0,o.kt)("a",{parentName:"p",href:"system-overview/game-system"},"Game System"),". If you aren't please go watch some of the videos in that page to better understand what is going on."),(0,o.kt)("p",null,"Alright, welcome back! Let's get our hands dirty."),(0,o.kt)("p",null,"Each game is extended based on the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/quadcopter-ar/Quadcopter-Template"},"Quadcopter  Template")," repository."),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"IMPORTANT")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"When generating your own game, make sure you change the owner to be ",(0,o.kt)("inlineCode",{parentName:"p"},"quadcopter-ar"),". This is to maintain all records on the organization."))),(0,o.kt)("p",null,"To begin creating a game make sure you use that repository as a template. To do this"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Go to the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/quadcopter-ar/Quadcopter-Template/generate"},"this")," link to generate your own repo"),(0,o.kt)("li",{parentName:"ul"},"Set the name of your repository to follow the ",(0,o.kt)("inlineCode",{parentName:"li"},"Quadcopter-<GameName>")," template",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Once the repo is created make sure you follow the directions in the README of the repo."))),(0,o.kt)("li",{parentName:"ul"},"You can now add the project into your Unity Hub install.")))}m.isMDXComponent=!0}}]);