(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{4613:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n(4228)}])},8418:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(l){o=!0,a=l}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},i=n(6273),u=n(387),l=n(7190);var c={};function s(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;c[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=u.useRouter(),f=a.default.useMemo((function(){var t=r(i.resolveHref(o,e.href,!0),2),n=t[0],a=t[1];return{href:n,as:e.as?i.resolveHref(o,e.as):a||n}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,m=e.shallow,y=e.scroll,b=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var x=(t=a.default.Children.only(v))&&"object"===typeof t&&t.ref,g=r(l.useIntersection({rootMargin:"200px"}),2),w=g[0],E=g[1],_=a.default.useCallback((function(e){w(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,w]);a.default.useEffect((function(){var e=E&&n&&i.isLocalURL(d),t="undefined"!==typeof b?b:o&&o.locale,r=c[d+"%"+p+(t?"%"+t:"")];e&&!r&&s(o,d,p,{locale:t})}),[p,d,E,b,n,o]);var k={ref:_,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,u,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==u&&r.indexOf("#")>=0&&(u=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:l,scroll:u}))}(e,o,d,p,h,m,y,b)},onMouseEnter:function(e){i.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),s(o,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var L="undefined"!==typeof b?b:o&&o.locale,N=o&&o.isLocaleDomain&&i.getDomainLocale(p,L,o&&o.locales,o&&o.domainLocales);k.href=N||i.addBasePath(i.addLocale(p,L,o&&o.defaultLocale))}return a.default.cloneElement(t,k)};t.default=f},7190:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(l){o=!0,a=l}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,l=o.useRef(),c=r(o.useState(!1),2),s=c[0],f=c[1],d=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),n||s||e&&e.tagName&&(l.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=u.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return u.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),u.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,s]);return o.useEffect((function(){if(!i&&!s){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[s]),[d,s]};var o=n(7294),a=n(9311),i="undefined"!==typeof IntersectionObserver;var u=new Map},4228:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(5893),o=n(1664);function a(){return(0,r.jsxs)("div",{className:"flex flex-col items-start justify-start md:justify-center md:items-center md:flex-row md:space-x-6 md:mt-24",children:[(0,r.jsx)("div",{className:"pt-6 pb-8 space-x-2 md:space-y-5",children:(0,r.jsx)("h1",{className:"text-2xl leading-none font-extrabold tracking-tight text-gray-900 dark:text-gray-100 md:text-4xl md:border-r-2 md:px-6",children:"This is About Us Page!"})}),(0,r.jsxs)("div",{className:"max-w-md",children:[(0,r.jsx)("p",{className:"mb-4 text-xl font-bold leading-normal md:text-2xl",children:"The About page with copious content."}),(0,r.jsx)(o.default,{href:"/",children:(0,r.jsx)("button",{className:"inline px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg shadow focus:outline-none focus:shadow-outline-blue hover:bg-blue-700 dark:hover:bg-blue-500",children:"To homepage"})})]})]})}},1664:function(e,t,n){e.exports=n(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=4613,e(e.s=t);var t}));var t=e.O();_N_E=t}]);