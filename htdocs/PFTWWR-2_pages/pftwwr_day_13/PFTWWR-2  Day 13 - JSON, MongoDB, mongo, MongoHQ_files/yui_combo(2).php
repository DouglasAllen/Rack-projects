/*
YUI 3.7.3 (build 5687)
Copyright 2012 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/
YUI.add("attribute-core",function(e,t){function E(e,t,n){this._initAttrHost(e,t,n)}e.State=function(){this.data={}},e.State.prototype={add:function(e,t,n){var r=this.data[e];r||(r=this.data[e]={}),r[t]=n},addAll:function(e,t){var n=this.data[e],r;n||(n=this.data[e]={});for(r in t)t.hasOwnProperty(r)&&(n[r]=t[r])},remove:function(e,t){var n=this.data[e];n&&delete n[t]},removeAll:function(t,n){var r;n?e.each(n,function(e,n){this.remove(t,typeof n=="string"?n:e)},this):(r=this.data,t in r&&delete r[t])},get:function(e,t){var n=this.data[e];if(n)return n[t]},getAll:function(e,t){var n=this.data[e],r,i;if(t)i=n;else if(n){i={};for(r in n)n.hasOwnProperty(r)&&(i[r]=n[r])}return i}};var n=e.Object,r=e.Lang,i=".",s="getter",o="setter",u="readOnly",a="writeOnce",f="initOnly",l="validator",c="value",h="valueFn",p="lazyAdd",d="added",v="_bypassProxy",m="initializing",g="initValue",y="lazy",b="isLazyAdd",w;E.INVALID_VALUE={},w=E.INVALID_VALUE,E._ATTR_CFG=[o,s,l,c,h,a,u,p,v],E.prototype={_initAttrHost:function(t,n,r){this._state=new e.State,this._initAttrs(t,n,r)},addAttr:function(e,t,n){var r=this,i=r._state,s,o;t=t||{},n=p in t?t[p]:n;if(n&&!r.attrAdded(e))i.addAll(e,{lazy:t,added:!0});else if(!r.attrAdded(e)||i.get(e,b))o=c in t,o&&(s=t.value,delete t.value),t.added=!0,t.initializing=!0,i.addAll(e,t),o&&r.set(e,s),i.remove(e,m);return r},attrAdded:function(e){return!!this._state.get(e,d)},get:function(e){return this._getAttr(e)},_isLazyAttr:function(e){return this._state.get(e,y)},_addLazyAttr:function(e,t){var n=this._state,r=n.get(e,y);n.add(e,b,!0),n.remove(e,y),this.addAttr(e,r)},set:function(e,t){return this._setAttr(e,t)},_set:function(e,t){return this._setAttr(e,t,null,!0)},_setAttr:function(t,r,s,o){var u=!0,a=this._state,l=this._stateProxy,h,p,d,v,m,g,y;return t.indexOf(i)!==-1&&(d=t,v=t.split(i),t=v.shift()),this._isLazyAttr(t)&&this._addLazyAttr(t),h=a.getAll(t,!0)||{},p=!(c in h),l&&t in l&&!h._bypassProxy&&(p=!1),g=h.writeOnce,y=h.initializing,!p&&!o&&(g&&(u=!1),h.readOnly&&(u=!1)),!y&&!o&&g===f&&(u=!1),u&&(p||(m=this.get(t)),v&&(r=n.setValue(e.clone(m),v,r),r===undefined&&(u=!1)),u&&(!this._fireAttrChange||y?this._setAttrVal(t,d,m,r):this._fireAttrChange(t,d,m,r,s))),this},_getAttr:function(e){var t=this,r=e,o=t._state,u,a,f,l;return e.indexOf(i)!==-1&&(u=e.split(i),e=u.shift()),t._tCfgs&&t._tCfgs[e]&&(l={},l[e]=t._tCfgs[e],delete t._tCfgs[e],t._addAttrs(l,t._tVals)),t._isLazyAttr(e)&&t._addLazyAttr(e),f=t._getStateVal(e),a=o.get(e,s),a&&!a.call&&(a=this[a]),f=a?a.call(t,f,r):f,f=u?n.getValue(f,u):f,f},_getStateVal:function(e){var t=this._stateProxy;return t&&e in t&&!this._state.get(e,v)?t[e]:this._state.get(e,c)},_setStateVal:function(e,t){var n=this._stateProxy;n&&e in n&&!this._state.get(e,v)?n[e]=t:this._state.add(e,c,t)},_setAttrVal:function(e,t,n,i){var s=this,o=!0,u=this._state.getAll(e,!0)||{},a=u.validator,f=u.setter,l=u.initializing,c=this._getStateVal(e),h=t||e,p,d;return a&&(a.call||(a=this[a]),a&&(d=a.call(s,i,h),!d&&l&&(i=u.defaultValue,d=!0))),!a||d?(f&&(f.call||(f=this[f]),f&&(p=f.call(s,i,h),p===w?o=!1:p!==undefined&&(i=p))),o&&(!t&&i===c&&!r.isObject(i)?o=!1:(g in u||(u.initValue=i),s._setStateVal(e,i)))):o=!1,o},setAttrs:function(e){return this._setAttrs(e)},_setAttrs:function(e){var t;for(t in e)e.hasOwnProperty(t)&&this.set(t,e[t]);return this},getAttrs:function(e){return this._getAttrs(e)},_getAttrs:function(e){var t={},r,i,s,o=e===!0;if(!e||o)e=n.keys(this._state.data);for(i=0,s=e.length;i<s;i++){r=e[i];if(!o||this._getStateVal(r)!=this._state.get(r,g))t[r]=this.get(r)}return t},addAttrs:function(e,t,n){var r=this;return e&&(r._tCfgs=e,r._tVals=r._normAttrVals(t),r._addAttrs(e,r._tVals,n),r._tCfgs=r._tVals=null),r},_addAttrs:function(e,t,n){var r=this,i,s,o;for(i in e)e.hasOwnProperty(i)&&(s=e[i],s.defaultValue=s.value,o=r._getAttrInitVal(i,s,r._tVals),o!==undefined&&(s.value=o),r._tCfgs[i]&&delete r._tCfgs[i],r.addAttr(i,s,n))},_protectAttrs:function(t){if(t){t=e.merge(t);for(var n in t)t.hasOwnProperty(n)&&(t[n]=e.merge(t[n]))}return t},_normAttrVals:function(t){return t?e.merge(t):null},_getAttrInitVal:function(e,t,n){var r,i;return!t.readOnly&&n&&n.hasOwnProperty(e)?r=n[e]:(r=t.value,i=t.valueFn,i&&(i.call||(i=this[i]),i&&(r=i.call(this,e)))),r},_initAttrs:function(t,n,r){t=t||this.constructor.ATTRS;var i=e.Base,s=e.BaseCore,o=i&&e.instanceOf(this,i),u=!o&&s&&e.instanceOf(this,s);t&&!o&&!u&&this.addAttrs(this._protectAttrs(t),n,r)}},e.AttributeCore=E},"3.7.3",{requires:["oop"]});
/*
YUI 3.7.3 (build 5687)
Copyright 2012 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/
YUI.add("base-core",function(e,t){function v(e){this._BaseInvoked||(this._BaseInvoked=!0,this._initBase(e))}var n=e.Object,r=e.Lang,i=".",s="initialized",o="destroyed",u="initializer",a="value",f=Object.prototype.constructor,l="deep",c="shallow",h="destructor",p=e.AttributeCore,d=function(e,t,n){var r;for(r in t)n[r]&&(e[r]=t[r]);return e};v._ATTR_CFG=p._ATTR_CFG.concat("cloneDefaultValue"),v._ATTR_CFG_HASH=e.Array.hash(v._ATTR_CFG),v._NON_ATTRS_CFG=["plugins"],v.NAME="baseCore",v.ATTRS={initialized:{readOnly:!0,value:!1},destroyed:{readOnly:!0,value:!1}},v.prototype={_initBase:function(t){e.stamp(this),this._initAttribute(t);var n=e.Plugin&&e.Plugin.Host;this._initPlugins&&n&&n.call(this),this._lazyAddAttrs!==!1&&(this._lazyAddAttrs=!0),this.name=this.constructor.NAME,this.init.apply(this,arguments)},_initAttribute:function(){p.apply(this)},init:function(e){return this._baseInit(e),this},_baseInit:function(e){this._initHierarchy(e),this._initPlugins&&this._initPlugins(e),this._set(s,!0)},destroy:function(){return this._baseDestroy(),this},_baseDestroy:function(){this._destroyPlugins&&this._destroyPlugins(),this._destroyHierarchy(),this._set(o,!0)},_getClasses:function(){return this._classes||this._initHierarchyData(),this._classes},_getAttrCfgs:function(){return this._attrs||this._initHierarchyData(),this._attrs},_filterAttrCfgs:function(e,t){var n=null,r,i=e.ATTRS;if(i)for(r in i)t[r]&&(n=n||{},n[r]=t[r],t[r]=null);return n},_filterAdHocAttrs:function(e,t){var n,r=this._nonAttrs,i;if(t){n={};for(i in t)!e[i]&&!r[i]&&t.hasOwnProperty(i)&&(n[i]={value:t[i]})}return n},_initHierarchyData:function(){var e=this.constructor,t,n,r,i=this._allowAdHocAttrs?{}:null,s=[],o=[];while(e){s[s.length]=e,e.ATTRS&&(o[o.length]=e.ATTRS);if(this._allowAdHocAttrs){r=e._NON_ATTRS_CFG;if(r)for(t=0,n=r.length;t<n;t++)i[r[t]]=!0}e=e.superclass?e.superclass.constructor:null}this._classes=s,this._nonAttrs=i,this._attrs=this._aggregateAttrs(o)},_attrCfgHash:function(){return v._ATTR_CFG_HASH},_aggregateAttrs:function(t){var s,o,u,h,p,v,m,g=this._attrCfgHash(),y,b={};if(t)for(v=t.length-1;v>=0;--v){o=t[v];for(s in o)o.hasOwnProperty(s)&&(u=d({},o[s],g),h=u.value,m=u.cloneDefaultValue,h&&(m===undefined&&(f===h.constructor||r.isArray(h))||m===l||m===!0?u.value=e.clone(h):m===c&&(u.value=e.merge(h))),p=null,s.indexOf(i)!==-1&&(p=s.split(i),s=p.shift()),y=b[s],p&&y&&y.value?n.setValue(y.value,p,h):p||(y?(y.valueFn&&a in u&&(y.valueFn=null),d(y,u,g)):b[s]=u))}return b},_initHierarchy:function(e){var t=this._lazyAddAttrs,n,r,i,s,o,a,f,l=this._getClasses(),c=this._getAttrCfgs(),h=l.length-1;for(i=h;i>=0;i--){n=l[i],r=n.prototype,f=n._yuibuild&&n._yuibuild.exts;if(f)for(s=0,o=f.length;s<o;s++)f[s].apply(this,arguments);this.addAttrs(this._filterAttrCfgs(n,c),e,t),this._allowAdHocAttrs&&i===h&&this.addAttrs(this._filterAdHocAttrs(c,e),e,t),r.hasOwnProperty(u)&&r.initializer.apply(this,arguments);if(f)for(s=0;s<o;s++)a=f[s].prototype,a.hasOwnProperty(u)&&a.initializer.apply(this,arguments)}},_destroyHierarchy:function(){var e,t,n,r,i,s,o,u,a=this._getClasses();for(n=0,r=a.length;n<r;n++){e=a[n],t=e.prototype,o=e._yuibuild&&e._yuibuild.exts;if(o)for(i=0,s=o.length;i<s;i++)u=o[i].prototype,u.hasOwnProperty(h)&&u.destructor.apply(this,arguments);t.hasOwnProperty(h)&&t.destructor.apply(this,arguments)}},toString:function(){return this.name+"["+e.stamp(this,!0)+"]"}},e.mix(v,p,!1,null,1),v.prototype.constructor=v,e.BaseCore=v},"3.7.3",{requires:["attribute-core"]});
/*
YUI 3.7.3 (build 5687)
Copyright 2012 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/
YUI.add("attribute-events",function(e,t){function o(){this._ATTR_E_FACADE={},n.call(this,{emitFacade:!0})}var n=e.EventTarget,r="Change",i="broadcast",s="published";o._ATTR_CFG=[i],o.prototype={set:function(e,t,n){return this._setAttr(e,t,n)},_set:function(e,t,n){return this._setAttr(e,t,n,!0)},setAttrs:function(e,t){return this._setAttrs(e,t)},_setAttrs:function(e,t){var n;for(n in e)e.hasOwnProperty(n)&&this.set(n,e[n],t);return this},_fireAttrChange:function(t,n,o,u,a){var f=this,l=t+r,c=f._state,h,p,d;c.get(t,s)||(d={queuable:!1,defaultTargetOnly:!0,defaultFn:f._defAttrChangeFn,silent:!0},p=c.get(t,i),p!==undefined&&(d.broadcast=p),f.publish(l,d),c.add(t,s,!0)),h=a?e.merge(a):f._ATTR_E_FACADE,h.attrName=t,h.subAttrName=n,h.prevVal=o,h.newVal=u,f.fire(l,h)},_defAttrChangeFn:function(e){this._setAttrVal(e.attrName,e.subAttrName,e.prevVal,e.newVal)?e.newVal=this.get(e.attrName):e.stopImmediatePropagation()}},e.mix(o,n,!1,null,1),e.AttributeEvents=o},"3.7.3",{requires:["event-custom"]});
/*
YUI 3.7.3 (build 5687)
Copyright 2012 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/
YUI.add("attribute-extras",function(e,t){function o(){}var n="broadcast",r="published",i="initValue",s={readOnly:1,writeOnce:1,getter:1,broadcast:1};o.prototype={modifyAttr:function(e,t){var i=this,o,u;if(i.attrAdded(e)){i._isLazyAttr(e)&&i._addLazyAttr(e),u=i._state;for(o in t)s[o]&&t.hasOwnProperty(o)&&(u.add(e,o,t[o]),o===n&&u.remove(e,r))}},removeAttr:function(e){this._state.removeAll(e)},reset:function(t){var n=this;return t?(n._isLazyAttr(t)&&n._addLazyAttr(t),n.set(t,n._state.get(t,i))):e.each(n._state.data,function(e,t){n.reset(t)}),n},_getAttrCfg:function(t){var n,r=this._state;return t?n=r.getAll(t)||{}:(n={},e.each(r.data,function(e,t){n[t]=r.getAll(t)})),n}},e.AttributeExtras=o},"3.7.3",{requires:["oop"]});
/*
YUI 3.7.3 (build 5687)
Copyright 2012 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/
YUI.add("attribute-base",function(e,t){var n=function(){this._ATTR_E_FACADE=null,this._yuievt=null,e.AttributeCore.apply(this,arguments),e.AttributeEvents.apply(this,arguments),e.AttributeExtras.apply(this,arguments)};e.mix(n,e.AttributeCore,!1,null,1),e.mix(n,e.AttributeExtras,!1,null,1),e.mix(n,e.AttributeEvents,!0,null,1),n.INVALID_VALUE=e.AttributeCore.INVALID_VALUE,n._ATTR_CFG=e.AttributeCore._ATTR_CFG.concat(e.AttributeEvents._ATTR_CFG),e.Attribute=n},"3.7.3",{requires:["attribute-core","attribute-events","attribute-extras"]});
/*
YUI 3.7.3 (build 5687)
Copyright 2012 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/
YUI.add("base-base",function(e,t){function l(){u.apply(this,arguments)}var n=e.Lang,r="destroy",i="init",s="bubbleTargets",o="_bubbleTargets",u=e.BaseCore,a=e.AttributeCore,f=e.Attribute;l._ATTR_CFG=f._ATTR_CFG.concat("cloneDefaultValue"),l._ATTR_CFG_HASH=e.Array.hash(l._ATTR_CFG),l._NON_ATTRS_CFG=u._NON_ATTRS_CFG.concat(["on","after","bubbleTargets"]),l.NAME="base",l.ATTRS=a.prototype._protectAttrs(u.ATTRS),l.prototype={_initBase:function(t){this._eventPrefix=this.constructor.EVENT_PREFIX||this.constructor.NAME,e.BaseCore.prototype._initBase.call(this,t)},_initAttribute:function(e){f.call(this),this._yuievt.config.prefix=this._eventPrefix},_attrCfgHash:function(){return l._ATTR_CFG_HASH},init:function(e){return this.publish(i,{queuable:!1,fireOnce:!0,defaultTargetOnly:!0,defaultFn:this._defInitFn}),this._preInitEventCfg(e),this.fire(i,{cfg:e}),this},_preInitEventCfg:function(e){e&&(e.on&&this.on(e.on),e.after&&this.after(e.after));var t,r,i,u=e&&s in e;if(u||o in this){i=u?e&&e.bubbleTargets:this._bubbleTargets;if(n.isArray(i))for(t=0,r=i.length;t<r;t++)this.addTarget(i[t]);else i&&this.addTarget(i)}},destroy:function(){return this.publish(r,{queuable:!1,fireOnce:!0,defaultTargetOnly:!0,defaultFn:this._defDestroyFn}),this.fire(r),this.detachAll(),this},_defInitFn:function(e){this._baseInit(e.cfg)},_defDestroyFn:function(e){this._baseDestroy(e.cfg)}},e.mix(l,f,!1,null,1),e.mix(l,u,!1,null,1),l.prototype.constructor=l,e.Base=l},"3.7.3",{requires:["base-core","attribute-base"]});
/*
YUI 3.7.3 (build 5687)
Copyright 2012 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/
YUI.add("base-pluginhost",function(e,t){var n=e.Base,r=e.Plugin.Host;e.mix(n,r,!1,null,1),n.plug=r.plug,n.unplug=r.unplug},"3.7.3",{requires:["base-base","pluginhost"]});
/*
YUI 3.7.3 (build 5687)
Copyright 2012 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/
YUI.add("base-build",function(e,t){var n=e.Base,r=e.Lang,i="initializer",s="destructor",o,u=function(e,t,n){n[e]&&(t[e]=(t[e]||[]).concat(n[e]))};n._build=function(t,r,o,u,a,f){var l=n._build,c=l._ctor(r,f),h=l._cfg(r,f,o),p=l._mixCust,d=c._yuibuild.dynamic,v,m,g,y,b,w;for(v=0,m=o.length;v<m;v++)g=o[v],y=g.prototype,b=y[i],w=y[s],delete y[i],delete y[s],e.mix(c,g,!0,null,1),p(c,g,h),b&&(y[i]=b),w&&(y[s]=w),c._yuibuild.exts.push(g);return u&&e.mix(c.prototype,u,!0),a&&(e.mix(c,l._clean(a,h),!0),p(c,a,h)),c.prototype.hasImpl=l._impl,d&&(c.NAME=t,c.prototype.constructor=c),c},o=n._build,e.mix(o,{_mixCust:function(t,n,i){var s,o,u,a,f,l;i&&(s=i.aggregates,o=i.custom,u=i.statics),u&&e.mix(t,n,!0,u);if(s)for(l=0,f=s.length;l<f;l++)a=s[l],!t.hasOwnProperty(a)&&n.hasOwnProperty(a)&&(t[a]=r.isArray(n[a])?[]:{}),e.aggregate(t,n,!0,[a]);if(o)for(l in o)o.hasOwnProperty(l)&&o[l](l,t,n)},_tmpl:function(t){function n(){n.superclass.constructor.apply(this,arguments)}return e.extend(n,t),n},_impl:function(e){var t=this._getClasses(),n,r,i,s,o,u;for(n=0,r=t.length;n<r;n++){i=t[n];if(i._yuibuild){s=i._yuibuild.exts,o=s.length;for(u=0;u<o;u++)if(s[u]===e)return!0}}return!1},_ctor:function(e,t){var n=t&&!1===t.dynamic?!1:!0,r=n?o._tmpl(e):e,i=r._yuibuild;return i||(i=r._yuibuild={}),i.id=i.id||null,i.exts=i.exts||[],i.dynamic=n,r},_cfg:function(t,n,r){var i=[],s={},o=[],u,a=n&&n.aggregates,f=n&&n.custom,l=n&&n.statics,c=t,h,p;while(c&&c.prototype)u=c._buildCfg,u&&(u.aggregates&&(i=i.concat(u.aggregates)),u.custom&&e.mix(s,u.custom,!0),u.statics&&(o=o.concat(u.statics))),c=c.superclass?c.superclass.constructor:null;if(r)for(h=0,p=r.length;h<p;h++)c=r[h],u=c._buildCfg,u&&(u.aggregates&&(i=i.concat(u.aggregates)),u.custom&&e.mix(s,u.custom,!0),u.statics&&(o=o.concat(u.statics)));return a&&(i=i.concat(a)),f&&e.mix(s,n.cfgBuild,!0),l&&(o=o.concat(l)),{aggregates:i,custom:s,statics:o}},_clean:function(t,n){var r,i,s,o=e.merge(t),u=n.aggregates,a=n.custom;for(r in a)o.hasOwnProperty(r)&&delete o[r];for(i=0,s=u.length;i<s;i++)r=u[i],o.hasOwnProperty(r)&&delete o[r];return o}}),n.build=function(e,t,n,r){return o(e,t,n,null,null,r)},n.create=function(e,t,n,r,i){return o(e,t,n,r,i)},n.mix=function(e,t){return o(null,e,t,null,null,{dynamic:!1})},n._buildCfg={custom:{ATTRS:function(t,n,r){n.ATTRS=n.ATTRS||{};if(r.ATTRS){var i=r.ATTRS,s=n.ATTRS,o;for(o in i)i.hasOwnProperty(o)&&(s[o]=s[o]||{},e.mix(s[o],i[o],!0))}},_NON_ATTRS_CFG:u},aggregates:["_PLUG","_UNPLUG"]}},"3.7.3",{requires:["base-base"]});
/*
YUI 3.7.3 (build 5687)
Copyright 2012 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/
YUI.add("event-synthetic",function(e,t){function c(e,t){this.handle=e,this.emitFacade=t}function h(e,t,n){this.handles=[],this.el=e,this.key=n,this.domkey=t}function p(){this._init.apply(this,arguments)}var n=e.CustomEvent,r=e.Env.evt.dom_map,i=e.Array,s=e.Lang,o=s.isObject,u=s.isString,a=s.isArray,f=e.Selector.query,l=function(){};c.prototype.fire=function(t){var n=i(arguments,0,!0),r=this.handle,s=r.evt,u=r.sub,a=u.context,f=u.filter,l=t||{},c;if(this.emitFacade){if(!t||!t.preventDefault)l=s._getFacade(),o(t)&&!t.preventDefault?(e.mix(l,t,!0),n[0]=l):n.unshift(l);l.type=s.type,l.details=n.slice(),f&&(l.container=s.host)}else f&&o(t)&&t.currentTarget&&n.shift();return u.context=a||l.currentTarget||s.host,c=s.fire.apply(s,n),u.context=a,c},h.prototype={constructor:h,type:"_synth",fn:l,capture:!1,register:function(e){e.evt.registry=this,this.handles.push(e)},unregister:function(t){var n=this.handles,i=r[this.domkey],s;for(s=n.length-1;s>=0;--s)if(n[s].sub===t){n.splice(s,1);break}n.length||(delete i[this.key],e.Object.size(i)||delete r[this.domkey])},detachAll:function(){var e=this.handles,t=e.length;while(--t>=0)e[t].detach()}},e.mix(p,{Notifier:c,SynthRegistry:h,getRegistry:function(t,n,i){var s=t._node,o=e.stamp(s),u="event:"+o+n+"_synth",a=r[o];return i&&(a||(a=r[o]={}),a[u]||(a[u]=new h(s,o,u))),a&&a[u]||null},_deleteSub:function(e){if(e&&e.fn){var t=this.eventDef,r=e.filter?"detachDelegate":"detach";this._subscribers=[],n.keepDeprecatedSubs&&(this.subscribers={}),t[r](e.node,e,this.notifier,e.filter),this.registry.unregister(e),delete e.fn,delete e.node,delete e.context}},prototype:{constructor:p,_init:function(){var e=this.publishConfig||(this.publishConfig={});this.emitFacade="emitFacade"in e?e.emitFacade:!0,e.emitFacade=!1},processArgs:l,on:l,detach:l,delegate:l,detachDelegate:l,_on:function(t,n){var r=[],s=t.slice(),o=this.processArgs(t,n),a=t[2],l=n?"delegate":"on",c,h;return c=u(a)?f(a):i(a||e.one(e.config.win)),!c.length&&u(a)?(h=e.on("available",function(){e.mix(h,e[l].apply(e,s),!0)},a),h):(e.Array.each(c,function(i){var s=t.slice(),u;i=e.one(i),i&&(n&&(u=s.splice(3,1)[0]),s.splice(0,4,s[1],s[3]),(!this.preventDups||!this.getSubs(i,t,null,!0))&&r.push(this._subscribe(i,l,s,o,u)))},this),r.length===1?r[0]:new e.EventHandle(r))},_subscribe:function(t,n,r,i,s){var o=new e.CustomEvent(this.type,this.publishConfig),u=o.on.apply(o,r),a=new c(u,this.emitFacade),f=p.getRegistry(t,this.type,!0),l=u.sub;return l.node=t,l.filter=s,i&&this.applyArgExtras(i,l),e.mix(o,{eventDef:this,notifier:a,host:t,currentTarget:t,target:t,el:t._node,_delete:p._deleteSub},!0),u.notifier=a,f.register(u),this[n](t,l,a,s),u},applyArgExtras:function(e,t){t._extra=e},_detach:function(t){var n=t[2],r=u(n)?f(n):i(n),s,o,a,l,c;t.splice(2,1);for(o=0,a=r.length;o<a;++o){s=e.one(r[o]);if(s){l=this.getSubs(s,t);if(l)for(c=l.length-1;c>=0;--c)l[c].detach()}}},getSubs:function(e,t,n,r){var i=p.getRegistry(e,this.type),s=[],o,u,a,f;if(i){o=i.handles,n||(n=this.subMatch);for(u=0,a=o.length;u<a;++u){f=o[u];if(n.call(this,f.sub,t)){if(r)return f;s.push(o[u])}}}return s.length&&s},subMatch:function(e,t){return!t[1]||e.fn===t[1]}}},!0),e.SyntheticEvent=p,e.Event.define=function(t,n,r){var s,o,f;t&&t.type?(s=t,r=n):n&&(s=e.merge({type:t},n));if(s){if(r||!e.Node.DOM_EVENTS[s.type])o=function(){p.apply(this,arguments)},e.extend(o,p,s),f=new o,t=f.type,e.Node.DOM_EVENTS[t]=e.Env.evt.plugins[t]={eventDef:f,on:function(){return f._on(i(arguments))},delegate:function(){return f._on(i(arguments),!0)},detach:function(){return f._detach(i(arguments))}}}else(u(t)||a(t))&&e.Array.each(i(t),function(t){e.Node.DOM_EVENTS[t]=1});return f}},"3.7.3",{requires:["node-base","event-custom-complex"]});
/*
YUI 3.7.3 (build 5687)
Copyright 2012 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/
YUI.add("event-mouseenter",function(e,t){var n=e.Env.evt.dom_wrappers,r=e.DOM.contains,i=e.Array,s=function(){},o={proxyType:"mouseover",relProperty:"fromElement",_notify:function(t,i,s){var o=this._node,u=t.relatedTarget||t[i];o!==u&&!r(o,u)&&s.fire(new e.DOMEventFacade(t,o,n["event:"+e.stamp(o)+t.type]))},on:function(t,n,r){var i=e.Node.getDOMNode(t),s=[this.proxyType,this._notify,i,null,this.relProperty,r];n.handle=e.Event._attach(s,{facade:!1})},detach:function(e,t){t.handle.detach()},delegate:function(t,n,r,i){var o=e.Node.getDOMNode(t),u=[this.proxyType,s,o,null,r];n.handle=e.Event._attach(u,{facade:!1}),n.handle.sub.filter=i,n.handle.sub.relProperty=this.relProperty,n.handle.sub._notify=this._filterNotify},_filterNotify:function(t,n,s){n=n.slice(),this.args&&n.push.apply(n,this.args);var o=e.delegate._applyFilter(this.filter,n,s),u=n[0].relatedTarget||n[0][this.relProperty],a,f,l,c,h;if(o){o=i(o);for(f=0,l=o.length&&(!a||!a.stopped);f<l;++f){h=o[0];if(!r(h,u)){a||(a=new e.DOMEventFacade(n[0],h,s),a.container=e.one(s.el)),a.currentTarget=e.one(h),c=n[1].fire(a);if(c===!1)break}}}return c},detachDelegate:function(e,t){t.handle.detach()}};e.Event.define("mouseenter",o,!0),e.Event.define("mouseleave",e.merge(o,{proxyType:"mouseout",relProperty:"toElement"}),!0)},"3.7.3",{requires:["event-synthetic"]});
/*
YUI 3.7.3 (build 5687)
Copyright 2012 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/
YUI.add("event-resize",function(e,t){e.Event.define("windowresize",{on:e.UA.gecko&&e.UA.gecko<1.91?function(t,n,r){n._handle=e.Event.attach("resize",function(e){r.fire(e)})}:function(t,n,r){var i=e.config.windowResizeDelay||100;n._handle=e.Event.attach("resize",function(t){n._timer&&n._timer.cancel(),n._timer=e.later(i,e,function(){r.fire(t)})})},detach:function(e,t){t._timer&&t._timer.cancel(),t._handle.detach()}})},"3.7.3",{requires:["node-base","event-synthetic"]});
YUI.add('moodle-block_navigation-navigation', function(Y){

/**
 * A 'actionkey' Event to help with Y.delegate().
 * The event consists of the left arrow, right arrow, enter and space keys.
 * More keys can be mapped to action meanings.
 * actions: collapse , expand, toggle, enter.
 *
 * This event is delegated to branches in the navigation tree.
 * The on() method to subscribe allows specifying the desired trigger actions as JSON.
 *
 * Todo: This could be centralised, a similar Event is defined in blocks/dock.js
 */
Y.Event.define("actionkey", {
   // Webkit and IE repeat keydown when you hold down arrow keys.
    // Opera links keypress to page scroll; others keydown.
    // Firefox prevents page scroll via preventDefault() on either
    // keydown or keypress.
    _event: (Y.UA.webkit || Y.UA.ie) ? 'keydown' : 'keypress',

    _keys: {
        //arrows
        '37': 'collapse',
        '39': 'expand',
        //(@todo: lrt/rtl/M.core_dock.cfg.orientation decision to assign arrow to meanings)
        '32': 'toggle',
        '13': 'enter'
    },

    _keyHandler: function (e, notifier, args) {
        if (!args.actions) {
            var actObj = {collapse:true, expand:true, toggle:true, enter:true};
        } else {
            var actObj = args.actions;
        }
        if (this._keys[e.keyCode] && actObj[this._keys[e.keyCode]]) {
            e.action = this._keys[e.keyCode];
            notifier.fire(e);
        }
    },

    on: function (node, sub, notifier) {
        // subscribe to _event and ask keyHandler to handle with given args[0] (the desired actions).
        if (sub.args == null) {
            //no actions given
            sub._detacher = node.on(this._event, this._keyHandler,this, notifier, {actions:false});
        } else {
            sub._detacher = node.on(this._event, this._keyHandler,this, notifier, sub.args[0]);
        }
    },

    detach: function (node, sub, notifier) {
        //detach our _detacher handle of the subscription made in on()
        sub._detacher.detach();
    },

    delegate: function (node, sub, notifier, filter) {
        // subscribe to _event and ask keyHandler to handle with given args[0] (the desired actions).
        if (sub.args == null) {
            //no actions given
            sub._delegateDetacher = node.delegate(this._event, this._keyHandler,filter, this, notifier, {actions:false});
        } else {
            sub._delegateDetacher = node.delegate(this._event, this._keyHandler,filter, this, notifier, sub.args[0]);
        }
    },

    detachDelegate: function (node, sub, notifier) {
        sub._delegateDetacher.detach();
    }
});

var EXPANSIONLIMIT_EVERYTHING = 0,
    EXPANSIONLIMIT_COURSE     = 20,
    EXPANSIONLIMIT_SECTION    = 30,
    EXPANSIONLIMIT_ACTIVITY   = 40;

/**
 * Mappings for the different types of nodes coming from the navigation.
 * Copied from lib/navigationlib.php navigation_node constants.
 * @type object
 */
var NODETYPE = {
    /** @type int Root node = 0 */
    ROOTNODE : 0,
    /** @type int System context = 1 */
    SYSTEM : 1,
    /** @type int Course category = 10 */
    CATEGORY : 10,
    /** @type int Course = 20 */
    COURSE : 20,
    /** @type int Course section = 30 */
    SECTION : 30,
    /** @type int Activity (course module) = 40 */
    ACTIVITY : 40,
    /** @type int Resource (course module = 50 */
    RESOURCE : 50,
    /** @type int Custom node (could be anything) = 60 */
    CUSTOM : 60,
    /** @type int Setting = 70 */
    SETTING : 70,
    /** @type int User context = 80 */
    USER : 80,
    /** @type int Container = 90 */
    CONTAINER : 90
}

/**
 * Navigation tree class.
 *
 * This class establishes the tree initially, creating expandable branches as
 * required, and delegating the expand/collapse event.
 */
var TREE = function(config) {
    TREE.superclass.constructor.apply(this, arguments);
}
TREE.prototype = {
    /**
     * The tree's ID, normally its block instance id.
     */
    id : null,
    /**
     * Initialise the tree object when its first created.
     */
    initializer : function(config) {
        this.id = config.id;

        var node = Y.one('#inst'+config.id);

        // Can't find the block instance within the page
        if (node === null) {
            return;
        }

        // Delegate event to toggle expansion
        var self = this;
        Y.delegate('click', function(e){self.toggleExpansion(e);}, node.one('.block_tree'), '.tree_item.branch');
        Y.delegate('actionkey', function(e){self.toggleExpansion(e);}, node.one('.block_tree'), '.tree_item.branch');

        // Gather the expandable branches ready for initialisation.
        var expansions = [];
        if (config.expansions) {
            expansions = config.expansions;
        } else if (window['navtreeexpansions'+config.id]) {
            expansions = window['navtreeexpansions'+config.id];
        }
        // Establish each expandable branch as a tree branch.
        for (var i in expansions) {
            new BRANCH({
                tree:this,
                branchobj:expansions[i],
                overrides : {
                    expandable : true,
                    children : [],
                    haschildren : true
                }
            }).wire();
            M.block_navigation.expandablebranchcount++;
        }

        // Call the generic blocks init method to add all the generic stuff
        if (this.get('candock')) {
            this.initialise_block(Y, node);
        }
    },
    /**
     * This is a callback function responsible for expanding and collapsing the
     * branches of the tree. It is delegated to rather than multiple event handles.
     */
    toggleExpansion : function(e) {
        // First check if they managed to click on the li iteslf, then find the closest
        // LI ancestor and use that

        if (e.target.test('a') && (e.keyCode == 0 || e.keyCode == 13)) {
            // A link has been clicked (or keypress is 'enter') don't fire any more events just do the default.
            e.stopPropagation();
            return;
        }

        // Makes sure we can get to the LI containing the branch.
        var target = e.target;
        if (!target.test('li')) {
            target = target.ancestor('li')
        }
        if (!target) {
            return;
        }

        // Toggle expand/collapse providing its not a root level branch.
        if (!target.hasClass('depth_1')) {
            if (e.type == 'actionkey') {
                switch (e.action) {
                    case 'expand' :
                        target.removeClass('collapsed');
                        target.set('aria-expanded', true);
                        break;
                    case 'collapse' :
                        target.addClass('collapsed');
                        target.set('aria-expanded', false);
                        break;
                    default :
                        target.toggleClass('collapsed');
                        target.set('aria-expanded', !target.hasClass('collapsed'));
                }
                e.halt();
            } else {
                target.toggleClass('collapsed');
                target.set('aria-expanded', !target.hasClass('collapsed'));
            }
        }

        // If the accordian feature has been enabled collapse all siblings.
        if (this.get('accordian')) {
            target.siblings('li').each(function(){
                if (this.get('id') !== target.get('id') && !this.hasClass('collapsed')) {
                    this.addClass('collapsed');
                    this.set('aria-expanded', false);
                }
            });
        }

        // If this block can dock tell the dock to resize if required and check
        // the width on the dock panel in case it is presently in use.
        if (this.get('candock')) {
            M.core_dock.resize();
            var panel = M.core_dock.getPanel();
            if (panel.visible) {
                panel.correctWidth();
            }
        }
    }
}
// The tree extends the YUI base foundation.
Y.extend(TREE, Y.Base, TREE.prototype, {
    NAME : 'navigation-tree',
    ATTRS : {
        instance : {
            value : null
        },
        candock : {
            validator : Y.Lang.isBool,
            value : false
        },
        accordian : {
            validator : Y.Lang.isBool,
            value : false
        },
        expansionlimit : {
            value : 0,
            setter : function(val) {
                return parseInt(val);
            }
        }
    }
});
if (M.core_dock && M.core_dock.genericblock) {
    Y.augment(TREE, M.core_dock.genericblock);
}

/**
 * The tree branch class.
 * This class is used to manage a tree branch, in particular its ability to load
 * its contents by AJAX.
 */
var BRANCH = function(config) {
    BRANCH.superclass.constructor.apply(this, arguments);
}
BRANCH.prototype = {
    /**
     * The node for this branch (p)
     */
    node : null,
    /**
     * A reference to the ajax load event handlers when created.
     */
    event_ajaxload : null,
    event_ajaxload_actionkey : null,
    /**
     * Initialises the branch when it is first created.
     */
    initializer : function(config) {
        if (config.branchobj !== null) {
            // Construct from the provided xml
            for (var i in config.branchobj) {
                this.set(i, config.branchobj[i]);
            }
            var children = this.get('children');
            this.set('haschildren', (children.length > 0));
        }
        if (config.overrides !== null) {
            // Construct from the provided xml
            for (var i in config.overrides) {
                this.set(i, config.overrides[i]);
            }
        }
        // Get the node for this branch
        this.node = Y.one('#', this.get('id'));
        // Now check whether the branch is not expandable because of the expansionlimit
        var expansionlimit = this.get('tree').get('expansionlimit');
        var type = this.get('type');
        if (expansionlimit != EXPANSIONLIMIT_EVERYTHING &&  type >= expansionlimit && type <= EXPANSIONLIMIT_ACTIVITY) {
            this.set('expandable', false);
            this.set('haschildren', false);
        }
    },
    /**
     * Draws the branch within the tree.
     *
     * This function creates a DOM structure for the branch and then injects
     * it into the navigation tree at the correct point.
     */
    draw : function(element) {

        var isbranch = (this.get('expandable') || this.get('haschildren'));
        var branchli = Y.Node.create('<li></li>');
        var link = this.get('link');
        var branchp = Y.Node.create('<p class="tree_item"></p>').setAttribute('id', this.get('id'));
        if (!link) {
            //add tab focus if not link (so still one focus per menu node).
            // it was suggested to have 2 foci. one for the node and one for the link in MDL-27428.
            branchp.setAttribute('tabindex', '0');
        }
        if (isbranch) {
            branchli.addClass('collapsed').addClass('contains_branch');
            branchli.set('aria-expanded', false);
            branchp.addClass('branch');
        }

        // Prepare the icon, should be an object representing a pix_icon
        var branchicon = false;
        var icon = this.get('icon');
        if (icon && (!isbranch || this.get('type') == NODETYPE.ACTIVITY)) {
            branchicon = Y.Node.create('<img alt="" />');
            branchicon.setAttribute('src', M.util.image_url(icon.pix, icon.component));
            branchli.addClass('item_with_icon');
            if (icon.alt) {
                branchicon.setAttribute('alt', icon.alt);
            }
            if (icon.title) {
                branchicon.setAttribute('title', icon.title);
            }
            if (icon.classes) {
                for (var i in icon.classes) {
                    branchicon.addClass(icon.classes[i]);
                }
            }
        }

        if (!link) {
            if (branchicon) {
                branchp.appendChild(branchicon);
            }
            branchp.append(this.get('name'));
        } else {
            var branchlink = Y.Node.create('<a title="'+this.get('title')+'" href="'+link+'"></a>');
            if (branchicon) {
                branchlink.appendChild(branchicon);
            }
            branchlink.append(this.get('name'));
            if (this.get('hidden')) {
                branchlink.addClass('dimmed');
            }
            branchp.appendChild(branchlink);
        }

        branchli.appendChild(branchp);
        element.appendChild(branchli);
        this.node = branchp;
        return this;
    },
    /**
     * Attaches required events to the branch structure.
     */
    wire : function() {
        this.node = this.node || Y.one('#'+this.get('id'));
        if (!this.node) {
            return false;
        }
        if (this.get('expandable')) {
            this.event_ajaxload = this.node.on('ajaxload|click', this.ajaxLoad, this);
            this.event_ajaxload_actionkey = this.node.on('actionkey', this.ajaxLoad, this);
        }
        return this;
    },
    /**
     * Gets the UL element that children for this branch should be inserted into.
     */
    getChildrenUL : function() {
        var ul = this.node.next('ul');
        if (!ul) {
            ul = Y.Node.create('<ul></ul>');
            this.node.ancestor().append(ul);
        }
        return ul;
    },
    /**
     * Load the content of the branch via AJAX.
     *
     * This function calls ajaxProcessResponse with the result of the AJAX
     * request made here.
     */
    ajaxLoad : function(e) {
        if (e.type == 'actionkey' && e.action != 'enter') {
            e.halt();
        } else {
            e.stopPropagation();
        }
        if (e.type = 'actionkey' && e.action == 'enter' && e.target.test('A')) {
            this.event_ajaxload_actionkey.detach();
            this.event_ajaxload.detach();
            return true; // no ajaxLoad for enter
        }

        if (this.node.hasClass('loadingbranch')) {
            return true;
        }

        this.node.addClass('loadingbranch');

        var params = {
            elementid : this.get('id'),
            id : this.get('key'),
            type : this.get('type'),
            sesskey : M.cfg.sesskey,
            instance : this.get('tree').get('instance')
        };

        Y.io(M.cfg.wwwroot+'/lib/ajax/getnavbranch.php', {
            method:'POST',
            data:  build_querystring(params),
            on: {
                complete: this.ajaxProcessResponse
            },
            context:this
        });
        return true;
    },
    /**
     * Processes an AJAX request to load the content of this branch through
     * AJAX.
     */
    ajaxProcessResponse : function(tid, outcome) {
        this.node.removeClass('loadingbranch');
        this.event_ajaxload.detach();
        this.event_ajaxload_actionkey.detach();
        try {
            var object = Y.JSON.parse(outcome.responseText);
            if (object.children && object.children.length > 0) {
                var coursecount = 0;
                for (var i in object.children) {
                    if (typeof(object.children[i])=='object') {
                        if (object.children[i].type == NODETYPE.COURSE) {
                            coursecount++;
                        }
                        this.addChild(object.children[i]);
                    }
                }
                if ((this.get('type') == NODETYPE.CATEGORY || this.get('type') == NODETYPE.ROOTNODE) && coursecount >= M.block_navigation.courselimit) {
                    this.addViewAllCoursesChild(this);
                }
                this.get('tree').toggleExpansion({target:this.node});
                return true;
            }
        } catch (ex) {
            // If we got here then there was an error parsing the result
        }
        // The branch is empty so class it accordingly
        this.node.replaceClass('branch', 'emptybranch');
        return true;
    },
    /**
     * Turns the branch object passed to the method into a proper branch object
     * and then adds it as a child of this branch.
     */
    addChild : function(branchobj) {
        // Make the new branch into an object
        var branch = new BRANCH({tree:this.get('tree'), branchobj:branchobj});
        if (branch.draw(this.getChildrenUL())) {
            branch.wire();
            var count = 0, i, children = branch.get('children');
            for (i in children) {
                // Add each branch to the tree
                if (children[i].type == NODETYPE.COURSE) {
                    count++;
                }
                if (typeof(children[i])=='object') {
                    branch.addChild(children[i]);
                }
            }
            if (branch.get('type') == NODETYPE.CATEGORY && count >= M.block_navigation.courselimit) {
                this.addViewAllCoursesChild(branch);
            }
        }
        return true;
    },

    /**
     * Add a link to view all courses in a category
     */
    addViewAllCoursesChild: function(branch) {
        var url = null;
        if (branch.get('type') == NODETYPE.ROOTNODE) {
            if (branch.get('key') === 'mycourses') {
                url = M.cfg.wwwroot + '/my';
            } else {
                url = M.cfg.wwwroot + '/course/index.php';
            }
        } else {
            url = M.cfg.wwwroot+'/course/category.php?id=' + branch.get('key');
        }
        branch.addChild({
            name : M.str.moodle.viewallcourses,
            title : M.str.moodle.viewallcourses,
            link : url,
            haschildren : false,
            icon : {'pix':"i/navigationitem",'component':'moodle'}
        });
    }
}
Y.extend(BRANCH, Y.Base, BRANCH.prototype, {
    NAME : 'navigation-branch',
    ATTRS : {
        tree : {
            validator : Y.Lang.isObject
        },
        name : {
            value : '',
            validator : Y.Lang.isString,
            setter : function(val) {
                return val.replace(/\n/g, '<br />');
            }
        },
        title : {
            value : '',
            validator : Y.Lang.isString
        },
        id : {
            value : '',
            validator : Y.Lang.isString,
            getter : function(val) {
                if (val == '') {
                    val = 'expandable_branch_'+M.block_navigation.expandablebranchcount;
                    M.block_navigation.expandablebranchcount++;
                }
                return val;
            }
        },
        key : {
            value : null
        },
        type : {
            value : null
        },
        link : {
            value : false
        },
        icon : {
            value : false,
            validator : Y.Lang.isObject
        },
        expandable : {
            value : false,
            validator : Y.Lang.isBool
        },
        hidden : {
            value : false,
            validator : Y.Lang.isBool
        },
        haschildren : {
            value : false,
            validator : Y.Lang.isBool
        },
        children : {
            value : [],
            validator : Y.Lang.isArray
        }
    }
});

/**
 * This namespace will contain all of the contents of the navigation blocks
 * global navigation and settings.
 * @namespace
 */
M.block_navigation = M.block_navigation || {
    /** The number of expandable branches in existence */
    expandablebranchcount:1,
    courselimit : 20,
    instance : null,
    /**
     * Add new instance of navigation tree to tree collection
     */
    init_add_tree:function(properties) {
        if (properties.courselimit) {
            this.courselimit = properties.courselimit;
        }
        if (M.core_dock) {
            M.core_dock.init(Y);
        }
        new TREE(properties);
    }
};

}, '@VERSION@', {requires:['base', 'core_dock', 'io-base', 'node', 'dom', 'event-custom', 'event-delegate', 'json-parse']});
