function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return c.Date.now()};function g(e,t,n){var o,i,r,a,u,f,l=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,r=i;return o=i=void 0,l=t,a=e.apply(r,n)}function j(e){return l=e,u=setTimeout(w,t),c?y(e):a}function h(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=r}function w(){var e=v();if(h(e))return O(e);u=setTimeout(w,function(e){var n=t-(e-f);return s?m(n,r-(e-l)):n}(e))}function O(e){return u=void 0,g&&o?y(e):(o=i=void 0,a)}function S(){var e=v(),n=h(e);if(o=arguments,i=this,f=e,n){if(void 0===u)return j(f);if(s)return u=setTimeout(w,t),y(f)}return void 0===u&&(u=setTimeout(w,t)),a}return t=p(t)||0,b(n)&&(c=!!n.leading,r=(s="maxWait"in n)?d(p(n.maxWait)||0,t):r,g="trailing"in n?!!n.trailing:g),S.cancel=function(){void 0!==u&&clearTimeout(u),l=0,o=f=i=u=void 0},S.flush=function(){return void 0===u?a:O(v())},S}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:o,maxWait:t,trailing:i})};const y=document.querySelector(".feedback-form"),j=document.querySelector(".feedback-form button"),h={email:"",message:""};function w(){""!==y.email.value&&""!==y.message.value?j.disabled=!1:j.disabled=!0}!function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(console.log(e),y.email.value=e.email,y.message.value=e.message,h.email=e.email,h.message=e.email);w()}(),y.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem("feedback-form-state"),y.email.value="",y.message.value="",w()})),y.addEventListener("input",e(t)((function(e){w(),h[e.target.name]=e.target.value,console.log(e.target.value),console.log(h),localStorage.setItem("feedback-form-state",JSON.stringify(h))}),500));
//# sourceMappingURL=03-feedback.44a68cf6.js.map
