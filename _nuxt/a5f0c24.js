(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{221:function(n,e,t){"use strict";t.r(e);t(11),t(19),t(22),t(159);var o={props:{json:{}},methods:{save:function(){var n=JSON.stringify(this.json),e=new Blob([n],{type:"text/plain"}),link=document.createElement("a");link.href=window.URL.createObjectURL(e),link.download="isbn.json",link.click()}}},c=t(36),component=Object(c.a)(o,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("b-button",{on:{click:n.save}},[n._v("\n    Save json\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports}}]);