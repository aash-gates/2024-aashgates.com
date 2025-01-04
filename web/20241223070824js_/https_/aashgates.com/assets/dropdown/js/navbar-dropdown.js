var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(b,c,a){b!=Array.prototype&&b!=Object.prototype&&(b[c]=a.value)};$jscomp.getGlobal=function(b){return"undefined"!=typeof window&&window===b?b:"undefined"!=typeof global&&null!=global?global:b};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.polyfill=function(b,c,a,d){if(c){a=$jscomp.global;b=b.split(".");for(d=0;d<b.length-1;d++){var f=b[d];f in a||(a[f]={});a=a[f]}b=b[b.length-1];d=a[b];c=c(d);c!=d&&null!=c&&$jscomp.defineProperty(a,b,{configurable:!0,writable:!0,value:c})}};
$jscomp.polyfill("Array.from",function(b){return b?b:function(b,a,d){a=null!=a?a:function(a){return a};var f=[],e="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof e){b=e.call(b);for(var c=0;!(e=b.next()).done;)f.push(a.call(d,e.value,c++))}else for(e=b.length,c=0;c<e;c++)f.push(a.call(d,b[c],c));return f}},"es6","es3");
(function(){function b(a){"resize"===a.type&&(document.body.classList.remove("navbar-dropdown-open"),document.querySelector(".navbar-dropdown").querySelector(".navbar-collapse").classList.remove("show"),document.querySelector(".navbar-dropdown").classList.remove("opened"),Array.from(document.querySelector(".navbar-dropdown").querySelectorAll('.navbar-toggler[aria-expanded="true"]')).forEach(function(a){var b=a.querySelector(a.getAttribute("data-target"));b&&(b.classList.remove("in"),b.setAttribute("aria-expanded",
"false"),a.setAttribute("aria-expanded","false"))}));var b=document.documentElement.scrollTop;Array.from(document.querySelectorAll(".navbar-dropdown")).forEach(function(a){a.matches(".navbar-fixed-top")&&(a.matches(".transparent")&&!a.classList.contains("opened")&&(0<b?a.classList.remove("bg-color"):a.classList.add("bg-color")),0<b?a.classList.add("navbar-short"):a.classList.remove("navbar-short"))})}var c;["scroll","resize"].forEach(function(a){document.addEventListener(a,function(a){clearTimeout(c);
c=setTimeout(function(){b(a)},10)})});["show.bs.collapse","hide.bs.collapse"].forEach(function(a){document.addEventListener(a,function(b){if(b=b.target.closest(".navbar-dropdown"))"show.bs.collapse"===a?(document.body.classList.add("navbar-dropdown-open"),b.classList.add("opened")):(document.body.classList.remove("navbar-dropdown-open"),b.classList.remove("opened"),window.dispatchEvent(new Event("scroll.bs.navbar-dropdown.data-api")),b.dispatchEvent(new Event("collapse.bs.navbar-dropdown")))})});
document.querySelector("html").classList.contains("is-builder")||document.addEventListener("click",function(a){a=a.target;if(!a.classList.contains("nav-link")&&!a.parentNode.classList.contains("nav-link")){var b=document.querySelector("#navbarSupportedContent"),c=document.querySelector(".navbar-dropdown"),e=b.classList.contains("show"),g=a.closest(".nav-item a:not(.dropdown-toggle)");c=c.classList.contains("collapsed");(window.matchMedia("(max-width: 991px)").matches||c)&&(e&&!a.closest(".navbar-collapse")||
g)&&new bootstrap.Collapse(b)}});document.addEventListener("collapse.bs.nav-dropdown",function(a){(a=a.relatedTarget.closest(".navbar-dropdown"))&&(a=a.querySelector('.navbar-toggler[aria-expanded="true"]'))&&a.dispatchEvent(new Event("click"))});document.querySelectorAll(".nav-link.dropdown-toggle").forEach(function(a){a.addEventListener("click",function(a){a.preventDefault();a.target.parentNode.classList.toggle("open")})})})();


}
/*
     FILE ARCHIVED ON 07:08:24 Dec 23, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:07:59 Jan 04, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.55
  exclusion.robots: 0.024
  exclusion.robots.policy: 0.015
  esindex: 0.01
  cdx.remote: 46.963
  LoadShardBlock: 178.475 (3)
  PetaboxLoader3.datanode: 121.196 (4)
  PetaboxLoader3.resolve: 69.585
  load_resource: 31.687
*/