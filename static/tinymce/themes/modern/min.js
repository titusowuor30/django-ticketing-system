/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.2.2 (2020-04-23)
 */
! function(l) { "use strict"; var x = function() { return (x = Object.assign || function(n) { for (var e, t = 1, r = arguments.length; t < r; t++)
                for (var o in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]); return n }).apply(this, arguments) };

    function u(n, e) { var t = {}; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && e.indexOf(r) < 0 && (t[r] = n[r]); if (null != n && "function" == typeof Object.getOwnPropertySymbols) { var o = 0; for (r = Object.getOwnPropertySymbols(n); o < r.length; o++) e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(n, r[o]) && (t[r[o]] = n[r[o]]) } return t }

    function w() {}

    function y(n) { return n } var i = function(t, r) { return function() { for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e]; return t(r.apply(null, n)) } },
        b = function(n) { return function() { return n } };

    function d(r) { for (var o = [], n = 1; n < arguments.length; n++) o[n - 1] = arguments[n]; return function() { for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e]; var t = o.concat(n); return r.apply(null, t) } }

    function m(t) { return function() { for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e]; return !t.apply(null, n) } }

    function o(n) { return function() { throw new Error(n) } }

    function t(n) { return n() }

    function n() { return f } var e, c = b(!1),
        a = b(!0),
        f = (e = { fold: function(n, e) { return n() }, is: c, isSome: c, isNone: a, getOr: g, getOrThunk: s, getOrDie: function(n) { throw new Error(n || "error: getOrDie called on none.") }, getOrNull: b(null), getOrUndefined: b(undefined), or: g, orThunk: s, map: n, each: w, bind: n, exists: c, forall: a, filter: n, equals: r, equals_: r, toArray: function() { return [] }, toString: b("none()") }, Object.freeze && Object.freeze(e), e);

    function r(n) { return n.isNone() }

    function s(n) { return n() }

    function g(n) { return n }

    function S(n, t) { return Dn(n, function(n, e) { return { k: e, v: t(n, e) } }) }

    function v(n, e) { return In(n, e) && n[e] !== undefined && null !== n[e] }

    function p(n, e) { var t = function(n, e) { for (var t = 0; t < n.length; t++) { var r = n[t]; if (r.test(e)) return r } return undefined }(n, e); if (!t) return { major: 0, minor: 0 };

        function r(n) { return Number(e.replace(t, "$" + n)) } return Rn(r(1), r(2)) }

    function h(n, e) { return function() { return e === n } }

    function T(n, e) { return function() { return e === n } }

    function O(e) { return function(n) { return function(n) { if (null === n) return "null"; var e = typeof n; return "object" == e && (Array.prototype.isPrototypeOf(n) || n.constructor && "Array" === n.constructor.name) ? "array" : "object" == e && (String.prototype.isPrototypeOf(n) || n.constructor && "String" === n.constructor.name) ? "string" : e }(n) === e } }

    function k(n, e) { return -1 < function(n, e) { return oe.call(n, e) }(n, e) }

    function E(n, e) { for (var t = 0, r = n.length; t < r; t++) { if (e(n[t], t)) return !0 } return !1 }

    function C(n, e) { for (var t = 0, r = n.length; t < r; t++) { e(n[t], t) } }

    function D(n, e) { for (var t = [], r = 0, o = n.length; r < o; r++) { var i = n[r];
            e(i, r) && t.push(i) } return t }

    function _(n, e, t) { return function(n, e) { for (var t = n.length - 1; 0 <= t; t--) { e(n[t], t) } }(n, function(n) { t = e(t, n) }), t }

    function M(n, e, t) { return C(n, function(n) { t = e(t, n) }), t }

    function I(n, e) { for (var t = 0, r = n.length; t < r; t++) { var o = n[t]; if (e(o, t)) return On.some(o) } return On.none() }

    function A(n, e) { for (var t = 0, r = n.length; t < r; t++) { if (e(n[t], t)) return On.some(t) } return On.none() }

    function F(n) { for (var e = [], t = 0, r = n.length; t < r; ++t) { if (!Zn(n[t])) throw new Error("Arr.flatten item " + t + " was not an array, input: " + n);
            ie.apply(e, n[t]) } return e }

    function R(n, e) { return F(ue(n, e)) }

    function B(n, e) { for (var t = 0, r = n.length; t < r; ++t) { if (!0 !== e(n[t], t)) return !1 } return !0 }

    function V(n) { var e = re.call(n, 0); return e.reverse(), e }

    function N(n, e) { return D(n, function(n) { return !k(e, n) }) }

    function j(n) { return [n] }

    function H(n, e) { for (var t = 0; t < n.length; t++) { var r = e(n[t], t); if (r.isSome()) return r } return On.none() }

    function P(n, e) { var t = String(e).toLowerCase(); return I(n, function(n) { return n.search(t) }) }

    function z(n, e) { return -1 !== n.indexOf(e) }

    function L(e) { return function(n) { return z(n, e) } }

    function G() { return me.get() }

    function U(n, e) { Ge(n, n.element(), e, {}) }

    function $(n, e, t) { Ge(n, n.element(), e, t) }

    function W(n) { U(n, Fe()) }

    function X(n, e, t) { Ge(n, e, t, {}) }

    function q(t) { var r, o = !1; return function() { for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e]; return o || (o = !0, r = t.apply(null, n)), r } }

    function Y(n) { return n.dom().nodeName.toLowerCase() }

    function K(e) { return function(n) { return function(n) { return n.dom().nodeType }(n) === e } }

    function J(n) { var e = Ke(n) ? n.dom().parentNode : n.dom(); return e !== undefined && null !== e && e.ownerDocument.body.contains(e) }

    function Q() { for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n]; return function() { for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n]; if (e.length !== t.length) throw new Error('Wrong number of arguments to struct. Expected "[' + e.length + ']", got ' + t.length + " arguments"); var r = {}; return C(e, function(n, e) { r[n] = b(t[e]) }), r } }

    function Z(n) { return n.slice(0).sort() }

    function nn(e, n) { if (!Zn(n)) throw new Error("The " + e + " fields must be an array. Was: " + n + ".");
        C(n, function(n) { if (!Jn(n)) throw new Error("The value " + n + " in the " + e + " fields was not a string.") }) }

    function en(o, i) { var u = o.concat(i); if (0 === u.length) throw new Error("You must specify at least one required or optional field."); return nn("required", o), nn("optional", i),
            function(n) { var t = Z(n);
                I(t, function(n, e) { return e < t.length - 1 && n === t[e + 1] }).each(function(n) { throw new Error("The field: " + n + " occurs more than once in the combined fields: [" + t.join(", ") + "].") }) }(u),
            function(e) { var t = kn(e);
                B(o, function(n) { return k(t, n) }) || function(n, e) { throw new Error("All required keys (" + Z(n).join(", ") + ") were not specified. Specified keys were: " + Z(e).join(", ") + ".") }(o, t); var n = D(t, function(n) { return !k(u, n) });
                0 < n.length && function(n) { throw new Error("Unsupported keys for object: " + Z(n).join(", ")) }(n); var r = {}; return C(o, function(n) { r[n] = b(e[n]) }), C(i, function(n) { r[n] = b(Object.prototype.hasOwnProperty.call(e, n) ? On.some(e[n]) : On.none()) }), r } }

    function tn(n, e, t) { return 0 != (n.compareDocumentPosition(e) & t) }

    function rn(n, e) { var t = n.dom(); if (t.nodeType !== nt) return !1; var r = t; if (r.matches !== undefined) return r.matches(e); if (r.msMatchesSelector !== undefined) return r.msMatchesSelector(e); if (r.webkitMatchesSelector !== undefined) return r.webkitMatchesSelector(e); if (r.mozMatchesSelector !== undefined) return r.mozMatchesSelector(e); throw new Error("Browser lacks native selectors") }

    function on(n) { return n.nodeType !== nt && n.nodeType !== et || 0 === n.childElementCount }

    function un(n, e) { var t = e === undefined ? l.document : e.dom(); return on(t) ? [] : ue(t.querySelectorAll(n), $e.fromDom) }

    function cn(n, e) { var t = e === undefined ? l.document : e.dom(); return on(t) ? On.none() : On.from(t.querySelector(n)).map($e.fromDom) }

    function an(n, e) { return n.dom() === e.dom() }

    function fn(n) { return $e.fromDom(n.dom().ownerDocument) }

    function sn(n) { return On.from(n.dom().parentNode).map($e.fromDom) }

    function ln(n, e) { var t = n.dom().childNodes; return On.from(t[e]).map($e.fromDom) }

    function dn(e, t) { sn(e).each(function(n) { n.dom().insertBefore(t.dom(), e.dom()) }) }

    function mn(n, e) {
        (function(n) { return On.from(n.dom().nextSibling).map($e.fromDom) })(n).fold(function() { sn(n).each(function(n) { rt(n, e) }) }, function(n) { dn(n, e) }) }

    function gn(e, t) {
        (function(n) { return ln(n, 0) })(e).fold(function() { rt(e, t) }, function(n) { e.dom().insertBefore(t.dom(), n.dom()) }) }

    function pn(e, n) { C(n, function(n) { rt(e, n) }) }

    function hn(n) { n.dom().textContent = "", C(tt(n), function(n) { ot(n) }) }

    function vn(n, e) { rt(n.element(), e.element()) }

    function yn(e, n) { var t = e.components();! function(n) { C(n.components(), function(n) { return ot(n.element()) }), hn(n.element()), n.syncComponents() }(e); var r = N(t, n);
        C(r, function(n) { it(n), e.getSystem().removeFromWorld(n) }), C(n, function(n) { n.getSystem().isConnected() ? vn(e, n) : (e.getSystem().addToWorld(n), vn(e, n), J(e.element()) && ut(n)), e.syncComponents() }) }

    function bn(e) { var n = sn(e.element()).bind(function(n) { return e.getSystem().getByDom(n).toOption() });! function(n) { it(n), ot(n.element()), n.getSystem().removeFromWorld(n) }(e), n.each(function(n) { n.syncComponents() }) }

    function xn(u) { return function() { for (var n = new Array(arguments.length), e = 0; e < n.length; e++) n[e] = arguments[e]; if (0 === n.length) throw new Error("Can't merge zero objects"); for (var t = {}, r = 0; r < n.length; r++) { var o = n[r]; for (var i in o) mt.call(o, i) && (t[i] = u(t[i], o[i])) } return t } } var wn, Sn, Tn = function(t) {
            function n() { return o }

            function e(n) { return n(t) } var r = b(t),
                o = { fold: function(n, e) { return e(t) }, is: function(n) { return t === n }, isSome: a, isNone: c, getOr: r, getOrThunk: r, getOrDie: r, getOrNull: r, getOrUndefined: r, or: n, orThunk: n, map: function(n) { return Tn(n(t)) }, each: function(n) { n(t) }, bind: e, exists: e, forall: e, filter: function(n) { return n(t) ? o : f }, toArray: function() { return [t] }, toString: function() { return "some(" + t + ")" }, equals: function(n) { return n.is(t) }, equals_: function(n, e) { return n.fold(c, function(n) { return e(t, n) }) } }; return o },
        On = { some: Tn, none: n, from: function(n) { return null === n || n === undefined ? f : Tn(n) } },
        kn = Object.keys,
        En = Object.hasOwnProperty,
        Cn = function(n, e) { for (var t = kn(n), r = 0, o = t.length; r < o; r++) { var i = t[r];
                e(n[i], i) } },
        Dn = function(n, r) { var o = {}; return Cn(n, function(n, e) { var t = r(n, e);
                o[t.k] = t.v }), o },
        _n = function(n, t) { var r = []; return Cn(n, function(n, e) { r.push(t(n, e)) }), r },
        Mn = function(n, e) { return In(n, e) ? On.from(n[e]) : On.none() },
        In = function(n, e) { return En.call(n, e) },
        An = function(n) {
            function e() { return t } var t = n; return { get: e, set: function(n) { t = n }, clone: function() { return An(e()) } } },
        Fn = function() { return Rn(0, 0) },
        Rn = function(n, e) { return { major: n, minor: e } },
        Bn = { nu: Rn, detect: function(n, e) { var t = String(e).toLowerCase(); return 0 === n.length ? Fn() : p(n, t) }, unknown: Fn },
        Vn = "Edge",
        Nn = "Chrome",
        jn = "Opera",
        Hn = "Firefox",
        Pn = "Safari",
        zn = function(n) { var e = n.current; return { current: e, version: n.version, isEdge: h(Vn, e), isChrome: h(Nn, e), isIE: h("IE", e), isOpera: h(jn, e), isFirefox: h(Hn, e), isSafari: h(Pn, e) } },
        Ln = { unknown: function() { return zn({ current: undefined, version: Bn.unknown() }) }, nu: zn, edge: b(Vn), chrome: b(Nn), ie: b("IE"), opera: b(jn), firefox: b(Hn), safari: b(Pn) },
        Gn = "Windows",
        Un = "Android",
        $n = "Linux",
        Wn = "Solaris",
        Xn = "FreeBSD",
        qn = "ChromeOS",
        Yn = function(n) { var e = n.current; return { current: e, version: n.version, isWindows: T(Gn, e), isiOS: T("iOS", e), isAndroid: T(Un, e), isOSX: T("OSX", e), isLinux: T($n, e), isSolaris: T(Wn, e), isFreeBSD: T(Xn, e), isChromeOS: T(qn, e) } },
        Kn = { unknown: function() { return Yn({ current: undefined, version: Bn.unknown() }) }, nu: Yn, windows: b(Gn), ios: b("iOS"), android: b(Un), linux: b($n), osx: b("OSX"), solaris: b(Wn), freebsd: b(Xn), chromeos: b(qn) },
        Jn = O("string"),
        Qn = O("object"),
        Zn = O("array"),
        ne = O("boolean"),
        ee = O("function"),
        te = O("number"),
        re = Array.prototype.slice,
        oe = Array.prototype.indexOf,
        ie = Array.prototype.push,
        ue = function(n, e) { for (var t = n.length, r = new Array(t), o = 0; o < t; o++) { var i = n[o];
                r[o] = e(i, o) } return r },
        ce = (ee(Array.from) && Array.from, function(n, t) { return P(n, t).map(function(n) { var e = Bn.detect(n.versionRegexes, t); return { current: n.name, version: e } }) }),
        ae = function(n, t) { return P(n, t).map(function(n) { var e = Bn.detect(n.versionRegexes, t); return { current: n.name, version: e } }) },
        fe = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
        se = [{ name: "Edge", versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/], search: function(n) { return z(n, "edge/") && z(n, "chrome") && z(n, "safari") && z(n, "applewebkit") } }, { name: "Chrome", versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/, fe], search: function(n) { return z(n, "chrome") && !z(n, "chromeframe") } }, { name: "IE", versionRegexes: [/.*?msie\ ?([0-9]+)\.([0-9]+).*/, /.*?rv:([0-9]+)\.([0-9]+).*/], search: function(n) { return z(n, "msie") || z(n, "trident") } }, { name: "Opera", versionRegexes: [fe, /.*?opera\/([0-9]+)\.([0-9]+).*/], search: L("opera") }, { name: "Firefox", versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/], search: L("firefox") }, { name: "Safari", versionRegexes: [fe, /.*?cpu os ([0-9]+)_([0-9]+).*/], search: function(n) { return (z(n, "safari") || z(n, "mobile/")) && z(n, "applewebkit") } }],
        le = [{ name: "Windows", search: L("win"), versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/] }, { name: "iOS", search: function(n) { return z(n, "iphone") || z(n, "ipad") }, versionRegexes: [/.*?version\/\ ?([0-9]+)\.([0-9]+).*/, /.*cpu os ([0-9]+)_([0-9]+).*/, /.*cpu iphone os ([0-9]+)_([0-9]+).*/] }, { name: "Android", search: L("android"), versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/] }, { name: "OSX", search: L("mac os x"), versionRegexes: [/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/] }, { name: "Linux", search: L("linux"), versionRegexes: [] }, { name: "Solaris", search: L("sunos"), versionRegexes: [] }, { name: "FreeBSD", search: L("freebsd"), versionRegexes: [] }, { name: "ChromeOS", search: L("cros"), versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/] }],
        de = { browsers: b(se), oses: b(le) },
        me = An(function(n, e) { var t = de.browsers(),
                r = de.oses(),
                o = ce(t, n).fold(Ln.unknown, Ln.nu),
                i = ae(r, n).fold(Kn.unknown, Kn.nu); return { browser: o, os: i, deviceType: function(n, e, t, r) { var o = n.isiOS() && !0 === /ipad/i.test(t),
                        i = n.isiOS() && !o,
                        u = n.isiOS() || n.isAndroid(),
                        c = u || r("(pointer:coarse)"),
                        a = o || !i && u && r("(min-device-width:768px)"),
                        f = i || u && !a,
                        s = e.isSafari() && n.isiOS() && !1 === /safari/i.test(t),
                        l = !f && !a && !s; return { isiPad: b(o), isiPhone: b(i), isTablet: b(a), isPhone: b(f), isTouch: b(c), isAndroid: n.isAndroid, isiOS: n.isiOS, isWebView: b(s), isDesktop: b(l) } }(i, o, n, e) } }(l.navigator.userAgent, function(n) { return l.window.matchMedia(n).matches })),
        ge = b("touchstart"),
        pe = b("touchmove"),
        he = b("touchend"),
        ve = b("mousedown"),
        ye = b("mousemove"),
        be = b("mouseup"),
        xe = b("mouseover"),
        we = b("keydown"),
        Se = b("keyup"),
        Te = b("input"),
        Oe = b("change"),
        ke = b("click"),
        Ee = b("transitionend"),
        Ce = b("selectstart"),
        De = { tap: b("alloy.tap") },
        _e = b("alloy.focus"),
        Me = b("alloy.blur.post"),
        Ie = b("alloy.paste.post"),
        Ae = b("alloy.receive"),
        Fe = b("alloy.execute"),
        Re = b("alloy.focus.item"),
        Be = De.tap,
        Ve = b("alloy.longpress"),
        Ne = b("alloy.system.init"),
        je = b("alloy.system.attached"),
        He = b("alloy.system.detached"),
        Pe = b("alloy.focusmanager.shifted"),
        ze = b("alloy.highlight"),
        Le = b("alloy.dehighlight"),
        Ge = function(n, e, t, r) { var o = x({ target: e }, r);
            n.getSystem().triggerEvent(t, e, S(o, b)) },
        Ue = function(n) { if (null === n || n === undefined) throw new Error("Node cannot be null or undefined"); return { dom: b(n) } },
        $e = { fromHtml: function(n, e) { var t = (e || l.document).createElement("div"); if (t.innerHTML = n, !t.hasChildNodes() || 1 < t.childNodes.length) throw l.console.error("HTML does not have a single root node", n), new Error("HTML must have a single root node"); return Ue(t.childNodes[0]) }, fromTag: function(n, e) { var t = (e || l.document).createElement(n); return Ue(t) }, fromText: function(n, e) { var t = (e || l.document).createTextNode(n); return Ue(t) }, fromDom: Ue, fromPoint: function(n, e, t) { var r = n.dom(); return On.from(r.elementFromPoint(e, t)).map(Ue) } },
        We = (l.Node.ATTRIBUTE_NODE, l.Node.CDATA_SECTION_NODE, l.Node.COMMENT_NODE, l.Node.DOCUMENT_NODE),
        Xe = (l.Node.DOCUMENT_TYPE_NODE, l.Node.DOCUMENT_FRAGMENT_NODE, l.Node.ELEMENT_NODE),
        qe = l.Node.TEXT_NODE,
        Ye = (l.Node.PROCESSING_INSTRUCTION_NODE, l.Node.ENTITY_REFERENCE_NODE, l.Node.ENTITY_NODE, l.Node.NOTATION_NODE, "undefined" != typeof l.window ? l.window : Function("return this;")(), K(Xe)),
        Ke = K(qe),
        Je = q(function() { return Qe($e.fromDom(l.document)) }),
        Qe = function(n) { var e = n.dom().body; if (null === e || e === undefined) throw new Error("Body is not available yet"); return $e.fromDom(e) },
        Ze = function(n, e) { return tn(n, e, l.Node.DOCUMENT_POSITION_CONTAINED_BY) },
        nt = Xe,
        et = We,
        tt = (G().browser.isIE(), function(n) { return ue(n.dom().childNodes, $e.fromDom) }),
        rt = (Q("element", "offset"), function(n, e) { n.dom().appendChild(e.dom()) }),
        ot = function(n) { var e = n.dom();
            null !== e.parentNode && e.parentNode.removeChild(e) },
        it = function(n) { U(n, He()); var e = n.components();
            C(e, it) },
        ut = function(n) { var e = n.components();
            C(e, ut), U(n, je()) },
        ct = function(n, e, t) { n.getSystem().addToWorld(e), t(n.element(), e.element()), J(n.element()) && ut(e), n.syncComponents() },
        at = function(n, e, t) { t(n, e.element()); var r = tt(e.element());
            C(r, function(n) { e.getByDom(n).each(ut) }) },
        ft = function(t) { return { is: function(n) { return t === n }, isValue: a, isError: c, getOr: b(t), getOrThunk: b(t), getOrDie: b(t), or: function(n) { return ft(t) }, orThunk: function(n) { return ft(t) }, fold: function(n, e) { return e(t) }, map: function(n) { return ft(n(t)) }, mapError: function(n) { return ft(t) }, each: function(n) { n(t) }, bind: function(n) { return n(t) }, exists: function(n) { return n(t) }, forall: function(n) { return n(t) }, toOption: function() { return On.some(t) } } },
        st = function(t) { return { is: c, isValue: c, isError: a, getOr: y, getOrThunk: function(n) { return n() }, getOrDie: function() { return o(String(t))() }, or: function(n) { return n }, orThunk: function(n) { return n() }, fold: function(n, e) { return n(t) }, map: function(n) { return st(t) }, mapError: function(n) { return st(n(t)) }, each: w, bind: function(n) { return st(t) }, exists: c, forall: a, toOption: On.none } },
        lt = { value: ft, error: st, fromOption: function(n, e) { return n.fold(function() { return st(e) }, ft) } },
        dt = function(u) { if (!Zn(u)) throw new Error("cases must be an array"); if (0 === u.length) throw new Error("there must be at least one case"); var c = [],
                t = {}; return C(u, function(n, r) { var e = kn(n); if (1 !== e.length) throw new Error("one and only one name per case"); var o = e[0],
                    i = n[o]; if (t[o] !== undefined) throw new Error("duplicate key detected:" + o); if ("cata" === o) throw new Error("cannot have a case named cata (sorry)"); if (!Zn(i)) throw new Error("case arguments must be an array");
                c.push(o), t[o] = function() { var n = arguments.length; if (n !== i.length) throw new Error("Wrong number of arguments to case " + o + ". Expected " + i.length + " (" + i + "), got " + n); for (var t = new Array(n), e = 0; e < t.length; e++) t[e] = arguments[e]; return { fold: function() { if (arguments.length !== u.length) throw new Error("Wrong number of arguments to fold. Expected " + u.length + ", got " + arguments.length); return arguments[r].apply(null, t) }, match: function(n) { var e = kn(n); if (c.length !== e.length) throw new Error("Wrong number of arguments to match. Expected: " + c.join(",") + "\nActual: " + e.join(",")); if (!B(c, function(n) { return k(e, n) })) throw new Error("Not all branches were specified when using match. Specified: " + e.join(", ") + "\nRequired: " + c.join(", ")); return n[o].apply(null, t) }, log: function(n) { l.console.log(n, { constructors: c, constructor: o, params: t }) } } } }), t },
        mt = Object.prototype.hasOwnProperty,
        gt = xn(function(n, e) { return Qn(n) && Qn(e) ? gt(n, e) : e }),
        pt = xn(function(n, e) { return e });
    (Sn = wn = wn || {})[Sn.Error = 0] = "Error", Sn[Sn.Value = 1] = "Value";

    function ht(n, e, t) { return n.stype === wn.Error ? e(n.serror) : t(n.svalue) }

    function vt(n) { return { stype: wn.Value, svalue: n } }

    function yt(n) { return { stype: wn.Error, serror: n } }

    function bt(n) { return zr.defaultedThunk(b(n)) }

    function xt(n, e) { var t; return (t = {})[n] = e, t }

    function wt(n, e) { return function(n, t) { var r = {}; return Cn(n, function(n, e) { k(t, e) || (r[e] = n) }), r }(n, e) }

    function St(n, e) { return xt(n, e) }

    function Tt(n) { return function(n) { var e = {}; return C(n, function(n) { e[n.key] = n.value }), e }(n) }

    function Ot(n, e) { var t = function(n) { var e = [],
                t = []; return C(n, function(n) { n.fold(function(n) { e.push(n) }, function(n) { t.push(n) }) }), { errors: e, values: t } }(n); return 0 < t.errors.length ? function(n) { return lt.error(F(n)) }(t.errors) : function(n, e) { return 0 === n.length ? lt.value(e) : lt.value(gt(e, pt.apply(undefined, n))) }(t.values, e) }

    function kt(n) { return i(Vr, F)(n) }

    function Et(n) { return Qn(n) && 100 < kn(n).length ? " removed due to size" : JSON.stringify(n, null, 2) }

    function Ct(n, e) { return Vr([{ path: n, getErrorInfo: e }]) }

    function Dt(n, e, t) { return Mn(e, t).fold(function() { return function(n, e, t) { return Ct(n, function() { return 'Could not find valid *strict* value for "' + e + '" in ' + Et(t) }) }(n, t, e) }, Rr) }

    function _t(n, e, t) { var r = Mn(n, e).fold(function() { return t(n) }, y); return Rr(r) }

    function Mt(u, c, n, a) { return n.fold(function(r, t, n, o) {
            function i(n) { var e = o.extract(u.concat([r]), a, n); return Hr(e, function(n) { return xt(t, a(n)) }) }

            function e(n) { return n.fold(function() { var n = xt(t, a(On.none())); return Rr(n) }, function(n) { var e = o.extract(u.concat([r]), a, n); return Hr(e, function(n) { return xt(t, a(On.some(n))) }) }) } return n.fold(function() { return Nr(Dt(u, c, r), i) }, function(n) { return Nr(_t(c, r, n), i) }, function() { return Nr(function(n, e) { return Rr(Mn(n, e)) }(c, r), e) }, function(n) { return Nr(function(e, n, t) { var r = Mn(e, n).map(function(n) { return !0 === n ? t(e) : n }); return Rr(r) }(c, r, n), e) }, function(n) { var e = n(c),
                    t = Hr(_t(c, r, b({})), function(n) { return gt(e, n) }); return Nr(t, i) }) }, function(n, e) { var t = e(c); return Rr(xt(n, a(t))) }) }

    function It(r) { return { extract: function(e, n, t) { return jr(r(t, n), function(n) { return function(n, e) { return Ct(n, function() { return e }) }(e, n) }) }, toString: function() { return "val" } } }

    function At(n) { var i = Yr(n),
            u = _(n, function(e, n) { return n.fold(function(n) { return gt(e, St(n, !0)) }, b(e)) }, {}); return { extract: function(n, e, t) { var r = ne(t) ? [] : function(e) { var n = kn(e); return D(n, function(n) { return v(e, n) }) }(t),
                    o = D(r, function(n) { return !v(u, n) }); return 0 === o.length ? i.extract(n, e, t) : function(n, e) { return Ct(n, function() { return "There are unsupported fields: [" + e.join(", ") + "] specified" }) }(n, o) }, toString: i.toString } }

    function Ft(t, i) {
        function u(n, e) { return function(o) { return { extract: function(t, r, n) { var e = ue(n, function(n, e) { return o.extract(t.concat(["[" + e + "]"]), r, n) }); return Xr(e) }, toString: function() { return "array(" + o.toString() + ")" } } }(It(t)).extract(n, y, e) } return { extract: function(t, r, o) { var n = kn(o),
                    e = u(t, n); return Nr(e, function(n) { var e = ue(n, function(n) { return qr.field(n, n, Lr(), i) }); return Yr(e).extract(t, r, o) }) }, toString: function() { return "setOf(" + i.toString() + ")" } } }

    function Rt(e, t, r, n, o) { return Mn(n, o).fold(function() { return function(n, e, t) { return Ct(n, function() { return 'The chosen schema: "' + t + '" did not exist in branches: ' + Et(e) }) }(e, n, o) }, function(n) { return n.extract(e.concat(["branch: " + o]), t, r) }) }

    function Bt(n, o) { return { extract: function(e, t, r) { return Mn(r, n).fold(function() { return function(n, e) { return Ct(n, function() { return 'Choice schema did not contain choice key: "' + e + '"' }) }(e, n) }, function(n) { return Rt(e, t, r, o, n) }) }, toString: function() { return "chooseOn(" + n + "). Possible values: " + kn(o) } } }

    function Vt(e) { return It(function(n) { return e(n).fold(Vr, Rr) }) }

    function Nt(e, n) { return Ft(function(n) { return Ar(e(n)) }, n) }

    function jt(n, e, t) { return Fr(function(n, e, t, r) { var o = e.extract([n], t, r); return Pr(o, function(n) { return { input: r, errors: n } }) }(n, e, y, t)) }

    function Ht(n) { return n.fold(function(n) { throw new Error(no(n)) }, y) }

    function Pt(n, e, t) { return Ht(jt(n, e, t)) }

    function zt(n, e) { return Bt(n, S(e, Yr)) }

    function Lt(n) { return Qr(n, n, Lr(), Kr()) }

    function Gt(n, e) { return Qr(n, n, Lr(), e) }

    function Ut(n, e) { return Qr(n, n, Lr(), Yr(e)) }

    function $t(n) { return Qr(n, n, Gr(), Kr()) }

    function Wt(n, e) { return Qr(n, n, Gr(), e) }

    function Xt(n, e) { return Wt(n, Yr(e)) }

    function qt(n, e) { return Wt(n, At(e)) }

    function Yt(n, e) { return Qr(n, n, bt(e), Kr()) }

    function Kt(n, e, t) { return Qr(n, n, bt(e), t) }

    function Jt(n, e) { return Jr(n, e) }

    function Qt(n, e) { return an(n.element(), e.event().target()) }

    function Zt(n) { if (!v(n, "can") && !v(n, "abort") && !v(n, "run")) throw new Error("EventHandler defined by: " + JSON.stringify(n, null, 2) + " does not have can, abort, or run!"); return Pt("Extracting event.handler", At([Yt("can", b(!0)), Yt("abort", b(!1)), Yt("run", w)]), n) }

    function nr(t) { var n = function(e, r) { return function() { for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n]; return M(e, function(n, e) { return n && r(e).apply(undefined, t) }, !0) } }(t, function(n) { return n.can }),
            e = function(e, r) { return function() { for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n]; return M(e, function(n, e) { return n || r(e).apply(undefined, t) }, !1) } }(t, function(n) { return n.abort }); return Zt({ can: n, abort: e, run: function() { for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                C(t, function(n) { n.run.apply(undefined, e) }) } }) }

    function er(n) { return Tt(n) }

    function tr(n, e) { return { key: n, value: Zt({ abort: e }) } }

    function rr(n, e) { return { key: n, value: Zt({ run: e }) } }

    function or(n, t, r) { return { key: n, value: Zt({ run: function(n, e) { t.apply(undefined, [n, e].concat(r)) } }) } }

    function ir(n) { return function(t) { return { key: n, value: Zt({ run: function(n, e) { Qt(n, e) && t(n, e) } }) } } }

    function ur(n, e, t) { return function(t, r) { return rr(t, function(n, e) { n.getSystem().getByUid(r).each(function(n) {! function(n, e, t, r) { n.getSystem().triggerEvent(t, e, r.event()) }(n, n.element(), t, e) }) }) }(n, e.partUids[t]) }

    function cr(n) { return rr(n, function(n, e) { e.cut() }) }

    function ar(n, e) { var t = n.toString(),
            r = t.indexOf(")") + 1,
            o = t.indexOf("("),
            i = t.substring(o + 1, r - 1).split(/,\s*/); return n.toFunctionAnnotation = function() { return { name: e, parameters: ao(i) } }, n }

    function fr(n) { return { classes: n.classes !== undefined ? n.classes : [], attributes: n.attributes !== undefined ? n.attributes : {}, styles: n.styles !== undefined ? n.styles : {} } }

    function sr(t, r, o) { return uo(function(n, e) { o(n, t, r) }) }

    function lr(o, i, u) { return function(n, e, t) { var r = t.toString(),
                o = r.indexOf(")") + 1,
                i = r.indexOf("("),
                u = r.substring(i + 1, o - 1).split(/,\s*/); return n.toFunctionAnnotation = function() { return { name: e, parameters: ao(u.slice(0, 1).concat(u.slice(3))) } }, n }(function(t) { for (var n = [], e = 1; e < arguments.length; e++) n[e - 1] = arguments[e]; var r = [t].concat(n); return t.config({ name: b(o) }).fold(function() { throw new Error("We could not find any behaviour configuration for: " + o + ". Using API: " + u) }, function(n) { var e = Array.prototype.slice.call(r, 1); return i.apply(undefined, [t, n.config, n.state].concat(e)) }) }, u, i) }

    function dr(n) { return { key: n, value: undefined } }

    function mr(n) { var e = Pt("Creating behaviour: " + n.name, go, n); return function(n, e, t, r, o, i) { var u = At(n),
                c = Xt(e, [qt("config", n)]); return fo(u, c, e, t, r, o, i) }(e.fields, e.name, e.active, e.apis, e.extra, e.state) }

    function gr(n, e, t) { if (!(Jn(t) || ne(t) || te(t))) throw l.console.error("Invalid call to Attr.set. Key ", e, ":: Value ", t, ":: Element ", n), new Error("Attribute value was not simple");
        n.setAttribute(e, t + "") }

    function pr(n, e, t) { gr(n.dom(), e, t) }

    function hr(n, e) { var t = n.dom();
        Cn(e, function(n, e) { gr(t, e, n) }) }

    function vr(n, e) { var t = n.dom().getAttribute(e); return null === t ? undefined : t }

    function yr(n, e) { var t = n.dom(); return !(!t || !t.hasAttribute) && t.hasAttribute(e) }

    function br(n, e) { n.dom().removeAttribute(e) }

    function xr(n, e) { var t = vr(n, e); return t === undefined || "" === t ? [] : t.split(" ") }

    function wr(n) { return n.dom().classList !== undefined }

    function Sr(n, e) { return function(n, e, t) { var r = xr(n, e).concat([t]); return pr(n, e, r.join(" ")), !0 }(n, "class", e) }

    function Tr(n, e) { return function(n, e, t) { var r = D(xr(n, e), function(n) { return n !== t }); return 0 < r.length ? pr(n, e, r.join(" ")) : br(n, e), !1 }(n, "class", e) }

    function Or(n, e) { wr(n) ? n.dom().classList.add(e) : Sr(n, e) }

    function kr(n) { 0 === (wr(n) ? n.dom().classList : function(n) { return xr(n, "class") }(n)).length && br(n, "class") }

    function Er(n, e) { wr(n) ? n.dom().classList.remove(e) : Tr(n, e), kr(n) }

    function Cr(n, e) { return wr(n) && n.dom().classList.contains(e) }

    function Dr(n, e, t) { Er(n, t), Or(n, e) } var _r, Mr, Ir, Ar = function(n) { return n.fold(yt, vt) },
        Fr = function(n) { return ht(n, lt.error, lt.value) },
        Rr = vt,
        Br = function(n) { var e = [],
                t = []; return C(n, function(n) { ht(n, function(n) { return t.push(n) }, function(n) { return e.push(n) }) }), { values: e, errors: t } },
        Vr = yt,
        Nr = function(n, e) { return n.stype === wn.Value ? e(n.svalue) : n },
        jr = function(n, e) { return n.stype === wn.Error ? e(n.serror) : n },
        Hr = function(n, e) { return n.stype === wn.Value ? { stype: wn.Value, svalue: e(n.svalue) } : n },
        Pr = function(n, e) { return n.stype === wn.Error ? { stype: wn.Error, serror: e(n.serror) } : n },
        zr = dt([{ strict: [] }, { defaultedThunk: ["fallbackThunk"] }, { asOption: [] }, { asDefaultedOptionThunk: ["fallbackThunk"] }, { mergeWithThunk: ["baseThunk"] }]),
        Lr = zr.strict,
        Gr = zr.asOption,
        Ur = zr.defaultedThunk,
        $r = (zr.asDefaultedOptionThunk, zr.mergeWithThunk),
        Wr = (dt([{ bothErrors: ["error1", "error2"] }, { firstError: ["error1", "value2"] }, { secondError: ["value1", "error2"] }, { bothValues: ["value1", "value2"] }]), function(n, e) { var t = Br(n); return 0 < t.errors.length ? kt(t.errors) : function(n, e) { return 0 < n.length ? Rr(gt(e, pt.apply(undefined, n))) : Rr(e) }(t.values, e) }),
        Xr = function(n) { var e = Br(n); return 0 < e.errors.length ? kt(e.errors) : Rr(e.values) },
        qr = dt([{ field: ["key", "okey", "presence", "prop"] }, { state: ["okey", "instantiator"] }]),
        Yr = function(r) { return { extract: function(n, e, t) { return function(e, t, n, r) { var o = ue(n, function(n) { return Mt(e, t, n, r) }); return Wr(o, {}) }(n, t, r, e) }, toString: function() { return "obj{\n" + ue(r, function(n) { return n.fold(function(n, e, t, r) { return n + " -> " + r.toString() }, function(n, e) { return "state(" + n + ")" }) }).join("\n") + "}" } } },
        Kr = b(It(Rr)),
        Jr = qr.state,
        Qr = qr.field,
        Zr = It(Rr),
        no = function(n) { return "Errors: \n" + function(n) { var e = 10 < n.length ? n.slice(0, 10).concat([{ path: [], getErrorInfo: function() { return "... (only showing first ten failures)" } }]) : n; return ue(e, function(n) { return "Failed path: (" + n.path.join(" > ") + ")\n" + n.getErrorInfo() }) }(n.errors).join("\n") + "\n\nInput object: " + Et(n.input) },
        eo = b(Zr),
        to = (_r = ee, Mr = "function", It(function(n) { var e = typeof n; return _r(n) ? Rr(n) : Vr("Expected type: " + Mr + " but got: " + e) })),
        ro = function(n, e, t) { return e(n).orThunk(function() { return t(n) ? On.none() : function(n, e, t) { for (var r = n.dom(), o = ee(t) ? t : b(!1); r.parentNode;) { r = r.parentNode; var i = $e.fromDom(r),
                            u = e(i); if (u.isSome()) return u; if (o(i)) break } return On.none() }(n, e, t) }) },
        oo = ir(je()),
        io = ir(He()),
        uo = ir(Ne()),
        co = (Ir = Fe(), function(n) { return rr(Ir, n) }),
        ao = function(n) { return ue(n, function(n) { return function(n, e) { return function(n, e, t) { return "" === e || !(n.length < e.length) && n.substr(t, t + e.length) === e }(n, e, n.length - e.length) }(n, "/*") ? n.substring(0, n.length - "/*".length) : n }) },
        fo = function(t, n, r, o, e, i, u) {
            function c(n) { return v(n, r) ? n[r]() : On.none() } var a = S(e, function(n, e) { return lr(r, n, e) }),
                f = S(i, function(n, e) { return ar(n, e) }),
                s = x(x(x({}, f), a), { revoke: d(dr, r), config: function(n) { var e = Pt(r + "-config", t, n); return { key: r, value: { config: e, me: s, configAsRaw: q(function() { return Pt(r + "-config", t, n) }), initialConfig: n, state: u } } }, schema: function() { return n }, exhibit: function(n, t) { return c(n).bind(function(e) { return Mn(o, "exhibit").map(function(n) { return n(t, e.config, e.state) }) }).getOr(fr({})) }, name: function() { return r }, handlers: function(n) { return c(n).map(function(n) { return Mn(o, "events").getOr(function() { return {} })(n.config, n.state) }).getOr({}) } }); return s },
        so = { init: function() { return lo({ readState: function() { return "No State required" } }) } },
        lo = function(n) { return n },
        mo = function(n) { return Tt(n) },
        go = At([Lt("fields"), Lt("name"), Yt("active", {}), Yt("apis", {}), Yt("state", so), Yt("extra", {})]),
        po = At([Lt("branchKey"), Lt("branches"), Lt("name"), Yt("active", {}), Yt("apis", {}), Yt("state", so), Yt("extra", {})]),
        ho = b(undefined),
        vo = /* */ Object.freeze({ __proto__: null, toAlpha: function(n, e, t) { Dr(n.element(), e.alpha, e.omega) }, toOmega: function(n, e, t) { Dr(n.element(), e.omega, e.alpha) }, isAlpha: function(n, e, t) { return Cr(n.element(), e.alpha) }, isOmega: function(n, e, t) { return Cr(n.element(), e.omega) }, clear: function(n, e, t) { Er(n.element(), e.alpha), Er(n.element(), e.omega) } }),
        yo = [Lt("alpha"), Lt("omega")],
        bo = mr({ fields: yo, name: "swapping", apis: vo });

    function xo(n, e, t, r, o) { return n(t, r) ? On.some(t) : ee(o) && o(t) ? On.none() : e(t, r, o) }

    function wo(n, e, t) { for (var r = n.dom(), o = ee(t) ? t : b(!1); r.parentNode;) { r = r.parentNode; var i = $e.fromDom(r); if (e(i)) return On.some(i); if (o(i)) break } return On.none() }

    function So(n) { n.dom().focus() }

    function To(n) { n.dom().blur() }

    function Oo(n) { var e = n !== undefined ? n.dom() : l.document; return On.from(e.activeElement).map($e.fromDom) }

    function ko(e) { return Oo(fn(e)).filter(function(n) { return e.dom().contains(n.dom()) }) }

    function Eo(n) { return n.dom().innerHTML }

    function Co(n, e) { var t = fn(n).dom(),
            r = $e.fromDom(t.createDocumentFragment()),
            o = function(n, e) { var t = (e || l.document).createElement("div"); return t.innerHTML = n, tt($e.fromDom(t)) }(e, t);
        pn(r, o), hn(n), rt(n, r) }

    function Do(n) { return function(n, e) { return $e.fromDom(n.dom().cloneNode(e)) }(n, !1) }

    function _o(n) { return function(n) { var e = $e.fromTag("div"),
                t = $e.fromDom(n.dom().cloneNode(!0)); return rt(e, t), Eo(e) }(Do(n)) }

    function Mo(n) { return _o(n) } var Io, Ao, Fo = tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),
        Ro = tinymce.util.Tools.resolve("tinymce.ThemeManager"),
        Bo = function(n) { var e = l.document.createElement("a");
            e.target = "_blank", e.href = n.href, e.rel = "noreferrer noopener"; var t = l.document.createEvent("MouseEvents");
            t.initMouseEvent("click", !0, !0, l.window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), l.document.body.appendChild(e), e.dispatchEvent(t), l.document.body.removeChild(e) },
        Vo = { formatChanged: b("formatChanged"), orientationChanged: b("orientationChanged"), dropupDismissed: b("dropupDismissed") },
        No = /* */ Object.freeze({ __proto__: null, events: function(r) { return er([rr(Ae(), function(o, n) { var i = r.channels,
                        e = kn(i),
                        u = n,
                        t = function(n, e) { return e.universal() ? n : D(n, function(n) { return k(e.channels(), n) }) }(e, u);
                    C(t, function(n) { var e = i[n],
                            t = e.schema,
                            r = Pt("channel[" + n + "] data\nReceiver: " + Mo(o.element()), t, u.data());
                        e.onReceive(o, r) }) })]) } }),
        jo = "unknown";
    (Ao = Io = Io || {})[Ao.STOP = 0] = "STOP", Ao[Ao.NORMAL = 1] = "NORMAL", Ao[Ao.LOGGING = 2] = "LOGGING";

    function Ho(e, n, t) { switch (Mn(si.get(), e).orThunk(function() { var n = kn(si.get()); return H(n, function(n) { return -1 < e.indexOf(n) ? On.some(si.get()[n]) : On.none() }) }).getOr(Io.NORMAL)) {
            case Io.NORMAL:
                return t(di());
            case Io.LOGGING:
                var r = function(e, t) { var r = [],
                            o = (new Date).getTime(); return { logEventCut: function(n, e, t) { r.push({ outcome: "cut", target: e, purpose: t }) }, logEventStopped: function(n, e, t) { r.push({ outcome: "stopped", target: e, purpose: t }) }, logNoParent: function(n, e, t) { r.push({ outcome: "no-parent", target: e, purpose: t }) }, logEventNoHandlers: function(n, e) { r.push({ outcome: "no-handlers-left", target: e }) }, logEventResponse: function(n, e, t) { r.push({ outcome: "response", purpose: t, target: e }) }, write: function() { var n = (new Date).getTime();
                                k(["mousemove", "mouseover", "mouseout", Ne()], e) || l.console.log(e, { event: e, time: n - o, target: t.dom(), sequence: ue(r, function(n) { return k(["cut", "stopped", "response"], n.outcome) ? "{" + n.purpose + "} " + n.outcome + " at (" + Mo(n.target) + ")" : n.outcome }) }) } } }(e, n),
                    o = t(r); return r.write(), o;
            case Io.STOP:
                return !0 } }

    function Po(n, e, t) { return Ho(n, e, t) }

    function zo(n, e, t) { return function() { var n = new Error; if (n.stack === undefined) return; var e = n.stack.split("\n");
            I(e, function(e) { return 0 < e.indexOf("alloy") && !E(li, function(n) { return -1 < e.indexOf(n) }) }).getOr(jo) }(), Qr(e, e, t, Vt(function(t) { return lt.value(function() { for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e]; return t.apply(undefined, n) }) })) }

    function Lo(n) { return zo(0, n, bt(w)) }

    function Go(n) { return zo(0, n, bt(On.none)) }

    function Uo(n) { return zo(0, n, Lr()) }

    function $o(n) { return zo(0, n, Lr()) }

    function Wo(n, e) { return Jt(n, b(e)) }

    function Xo(n) { return Jt(n, y) }

    function qo(n, e, t) { var r = e.aria;
        r.update(n, r, t.get()) }

    function Yo(e, n, t) { n.toggleClass.each(function(n) { t.get() ? Or(e.element(), n) : Er(e.element(), n) }) }

    function Ko(n, e, t) { xi(n, e, t, !t.get()) }

    function Jo(n, e, t) { t.set(!0), Yo(n, e, t), qo(n, e, t) }

    function Qo(n, e, t) { t.set(!1), Yo(n, e, t), qo(n, e, t) }

    function Zo(n, e, t) { xi(n, e, t, e.selected) }

    function ni() {
        function n(n, e) { e.stop(), W(n) } return [rr(ke(), n), rr(Be(), n), cr(ge()), cr(ve())] }

    function ei(n, e) { e.ignore || (So(n.element()), e.onFocus(n)) }

    function ti(n) { return n.style !== undefined && ee(n.style.getPropertyValue) }

    function ri(n, e, t) { if (!Jn(t)) throw l.console.error("Invalid call to CSS.set. Property ", e, ":: Value ", t, ":: Element ", n), new Error("CSS value must be a string: " + t);
        ti(n) && n.style.setProperty(e, t) }

    function oi(n, e) { var t = n.dom();
        Cn(e, function(n, e) { ri(t, e, n) }) }

    function ii(n, e) { var t = n.dom(),
            r = l.window.getComputedStyle(t).getPropertyValue(e),
            o = "" !== r || J(n) ? r : Vi(t, e); return null === o ? undefined : o }

    function ui(n, e) { var t = n.dom(),
            r = Vi(t, e); return On.from(r).filter(function(n) { return 0 < n.length }) }

    function ci(n, e) {! function(n, e) { ti(n) && n.style.removeProperty(e) }(n.dom(), e), yr(n, "style") && "" === function(n) { return n.replace(/^\s+|\s+$/g, "") }(vr(n, "style")) && br(n, "style") }

    function ai(n) { return n.dom().offsetWidth } var fi, si = An({}),
        li = ["alloy/data/Fields", "alloy/debugging/Debugging"],
        di = b({ logEventCut: w, logEventStopped: w, logNoParent: w, logEventNoHandlers: w, logEventResponse: w, write: w }),
        mi = b([Lt("menu"), Lt("selectedMenu")]),
        gi = b([Lt("item"), Lt("selectedItem")]),
        pi = (b(Yr(gi().concat(mi()))), b(Yr(gi()))),
        hi = Ut("initSize", [Lt("numColumns"), Lt("numRows")]),
        vi = b(hi),
        yi = [Gt("channels", Nt(lt.value, At([Uo("onReceive"), Yt("schema", eo())])))],
        bi = mr({ fields: yi, name: "receiving", active: No }),
        xi = function(n, e, t, r) {
            (r ? Jo : Qo)(n, e, t) },
        wi = /* */ Object.freeze({ __proto__: null, onLoad: Zo, toggle: Ko, isOn: function(n, e, t) { return t.get() }, on: Jo, off: Qo, set: xi }),
        Si = /* */ Object.freeze({ __proto__: null, exhibit: function() { return fr({}) }, events: function(n, e) { var t = function(e, t, r) { return co(function(n) { r(n, e, t) }) }(n, e, Ko),
                    r = sr(n, e, Zo); return er(F([n.toggleOnExecute ? [t] : [],
                    [r]
                ])) } }),
        Ti = function(n, e, t) { pr(n.element(), "aria-expanded", t) },
        Oi = [Yt("selected", !1), $t("toggleClass"), Yt("toggleOnExecute", !0), Kt("aria", { mode: "none" }, zt("mode", { pressed: [Yt("syncWithExpanded", !1), Wo("update", function(n, e, t) { pr(n.element(), "aria-pressed", t), e.syncWithExpanded && Ti(n, e, t) })], checked: [Wo("update", function(n, e, t) { pr(n.element(), "aria-checked", t) })], expanded: [Wo("update", Ti)], selected: [Wo("update", function(n, e, t) { pr(n.element(), "aria-selected", t) })], none: [Wo("update", w)] }))],
        ki = mr({ fields: Oi, name: "toggling", active: Si, apis: wi, state: (fi = !1, { init: function() { var e = An(fi); return { get: function() { return e.get() }, set: function(n) { return e.set(n) }, clear: function() { return e.set(fi) }, readState: function() { return e.get() } } } }) }),
        Ei = function(t, r) { return bi.config({ channels: St(Vo.formatChanged(), { onReceive: function(n, e) { e.command === t && r(n, e.state) } }) }) },
        Ci = function(n) { return bi.config({ channels: St(Vo.orientationChanged(), { onReceive: n }) }) },
        Di = function(n, e) { return { key: n, value: { onReceive: e } } },
        _i = "tinymce-mobile",
        Mi = { resolve: function(n) { return _i + "-" + n }, prefix: b(_i) },
        Ii = /* */ Object.freeze({ __proto__: null, focus: ei, blur: function(n, e) { e.ignore || To(n.element()) }, isFocused: function(n) { return function(n) { var e = fn(n).dom(); return n.dom() === e.activeElement }(n.element()) } }),
        Ai = /* */ Object.freeze({ __proto__: null, exhibit: function(n, e) { var t = e.ignore ? {} : { attributes: { tabindex: "-1" } }; return fr(t) }, events: function(t) { return er([rr(_e(), function(n, e) { ei(n, t), e.stop() })].concat(t.stopMousedown ? [rr(ve(), function(n, e) { e.event().prevent() })] : [])) } }),
        Fi = [Lo("onFocus"), Yt("stopMousedown", !1), Yt("ignore", !1)],
        Ri = mr({ fields: Fi, name: "focusing", active: Ai, apis: Ii }),
        Bi = function(n, e, t) { var r = n.dom();
            ri(r, e, t) },
        Vi = function(n, e) { return ti(n) ? n.style.getPropertyValue(e) : "" };

    function Ni(r, o) {
        function n(n) { var e = o(n); if (e <= 0 || null === e) { var t = ii(n, r); return parseFloat(t) || 0 } return e }

        function i(o, n) { return M(n, function(n, e) { var t = ii(o, e),
                    r = t === undefined ? 0 : parseInt(t, 10); return isNaN(r) ? n : n + r }, 0) } return { set: function(n, e) { if (!te(e) && !e.match(/^[0-9]+$/)) throw new Error(r + ".set accepts only positive integer values. Value was " + e); var t = n.dom();
                ti(t) && (t.style[r] = e + "px") }, get: n, getOuter: n, aggregate: i, max: function(n, e, t) { var r = i(n, t); return r < e ? e - r : 0 } } }

    function ji(n) { return lu.get(n) }

    function Hi(n, e, t) { return D(function(n, e) { for (var t = ee(e) ? e : c, r = n.dom(), o = []; null !== r.parentNode && r.parentNode !== undefined;) { var i = r.parentNode,
                    u = $e.fromDom(i); if (o.push(u), !0 === t(u)) break;
                r = i } return o }(n, t), e) }

    function Pi(n, e) { return D(function(e) { return sn(e).map(tt).map(function(n) { return D(n, function(n) { return !an(e, n) }) }).getOr([]) }(n), e) }

    function zi(n, e) { return un(e, n) }

    function Li(n) { return cn(n) }

    function Gi(n, e, t) { return wo(n, function(n) { return rn(n, e) }, t) }

    function Ui(n, e) { return cn(e, n) }

    function $i(n, e, t) { return xo(rn, Gi, n, e, t) }

    function Wi(n, e, t) { var r = V(n.slice(0, e)),
            o = V(n.slice(e + 1)); return I(r.concat(o), t) }

    function Xi(n, e, t) { var r = V(n.slice(0, e)); return I(r, t) }

    function qi(n, e, t) { var r = n.slice(0, e),
            o = n.slice(e + 1); return I(o.concat(r), t) }

    function Yi(n, e, t) { var r = n.slice(e + 1); return I(r, t) }

    function Ki(t) { return function(n) { var e = n.raw(); return k(t, e.which) } }

    function Ji(n) { return function(e) { return B(n, function(n) { return n(e) }) } }

    function Qi(n) { return !0 === n.raw().shiftKey }

    function Zi(n) { return !0 === n.raw().ctrlKey }

    function nu(n, e) { return { matches: n, classification: e } }

    function eu(n) { for (var e = [], t = function(n) { e.push(n) }, r = 0; r < n.length; r++) n[r].each(t); return e }

    function tu(n, e, t, r) { var o = n + e; return r < o ? t : o < t ? r : o }

    function ru(n, e, t) { return Math.min(Math.max(n, e), t) }

    function ou(t, r, n, o) { var e = zi(t.element(), "." + r.highlightClass);
        C(e, function(e) { E(o, function(n) { return n.element() === e }) || (Er(e, r.highlightClass), t.getSystem().getByDom(e).each(function(n) { r.onDehighlight(t, n), U(n, Le()) })) }) }

    function iu(n, e, t, r) { ou(n, e, 0, [r]), mu(n, e, t, r) || (Or(r.element(), e.highlightClass), e.onHighlight(n, r), U(r, ze())) }

    function uu(t, e, n, r) { var o = zi(t.element(), "." + e.itemClass); return A(o, function(n) { return Cr(n, e.highlightClass) }).bind(function(n) { var e = tu(n, r, 0, o.length - 1); return t.getSystem().getByDom(o[e]).toOption() }) }

    function cu(n, e, t) { e.exists(function(e) { return t.exists(function(n) { return an(n, e) }) }) || $(n, Pe(), { prevFocus: e, newFocus: t }) }

    function au() {
        function o(n) { return ko(n.element()) } return { get: o, set: function(n, e) { var t = o(n);
                n.getSystem().triggerFocus(e, n.element()); var r = o(n);
                cu(n, t, r) } } } var fu, su, lu = Ni("height", function(n) { var e = n.dom(); return J(n) ? e.getBoundingClientRect().height : e.offsetHeight }),
        du = m(Qi),
        mu = function(n, e, t, r) { return Cr(r.element(), e.highlightClass) },
        gu = function(n, e, t, r) { var o = zi(n.element(), "." + e.itemClass); return On.from(o[r]).fold(function() { return lt.error("No element found with index " + r) }, n.getSystem().getByDom) },
        pu = function(e, n, t) { return Ui(e.element(), "." + n.itemClass).bind(function(n) { return e.getSystem().getByDom(n).toOption() }) },
        hu = function(e, n, t) { var r = zi(e.element(), "." + n.itemClass); return (0 < r.length ? On.some(r[r.length - 1]) : On.none()).bind(function(n) { return e.getSystem().getByDom(n).toOption() }) },
        vu = function(e, n, t) { var r = zi(e.element(), "." + n.itemClass); return eu(ue(r, function(n) { return e.getSystem().getByDom(n).toOption() })) },
        yu = /* */ Object.freeze({ __proto__: null, dehighlightAll: function(n, e, t) { return ou(n, e, 0, []) }, dehighlight: function(n, e, t, r) { mu(n, e, t, r) && (Er(r.element(), e.highlightClass), e.onDehighlight(n, r), U(r, Le())) }, highlight: iu, highlightFirst: function(e, t, r) { pu(e, t).each(function(n) { iu(e, t, r, n) }) }, highlightLast: function(e, t, r) { hu(e, t).each(function(n) { iu(e, t, r, n) }) }, highlightAt: function(e, t, r, n) { gu(e, t, r, n).fold(function(n) { throw new Error(n) }, function(n) { iu(e, t, r, n) }) }, highlightBy: function(e, t, r, n) { var o = vu(e, t);
                I(o, n).each(function(n) { iu(e, t, r, n) }) }, isHighlighted: mu, getHighlighted: function(e, n, t) { return Ui(e.element(), "." + n.highlightClass).bind(function(n) { return e.getSystem().getByDom(n).toOption() }) }, getFirst: pu, getLast: hu, getPrevious: function(n, e, t) { return uu(n, e, 0, -1) }, getNext: function(n, e, t) { return uu(n, e, 0, 1) }, getCandidates: vu }),
        bu = [Lt("highlightClass"), Lt("itemClass"), Lo("onHighlight"), Lo("onDehighlight")],
        xu = mr({ fields: bu, name: "highlighting", apis: yu });
    (su = fu = fu || {}).OnFocusMode = "onFocus", su.OnEnterOrSpaceMode = "onEnterOrSpace", su.OnApiMode = "onApi";

    function wu(n, e, t, i, u) {
        function c(e, t, n, r, o) { return function(n, e) { return I(n, function(n) { return n.matches(e) }).map(function(n) { return n.classification }) }(n(e, t, r, o), t.event()).bind(function(n) { return n(e, t, r, o) }) } var r = { schema: function() { return n.concat([Yt("focusManager", au()), Kt("focusInside", "onFocus", Vt(function(n) { return k(["onFocus", "onEnterOrSpace", "onApi"], n) ? lt.value(n) : lt.error("Invalid value for focusInside") })), Wo("handler", r), Wo("state", e), Wo("sendFocusIn", u)]) }, processKey: c, toEvents: function(r, o) { var n = r.focusInside !== fu.OnFocusMode ? On.none() : u(r).map(function(t) { return rr(_e(), function(n, e) { t(n, r, o), e.stop() }) }); return er(n.toArray().concat([rr(we(), function(n, e) { c(n, e, t, r, o).fold(function() {! function(e, t) { var n = Ki([32].concat([13]))(t.event());
                            r.focusInside === fu.OnEnterOrSpaceMode && n && Qt(e, t) && u(r).each(function(n) { n(e, r, o), t.stop() }) }(n, e) }, function(n) { e.stop() }) }), rr(Se(), function(n, e) { c(n, e, i, r, o).each(function(n) { e.stop() }) })])) } }; return r }

    function Su(n) {
        function i(n, e) { var t = n.visibilitySelector.bind(function(n) { return $i(e, n) }).getOr(e); return 0 < ji(t) }

        function e(e, t, n) {
            (function(n, e) { var t = zi(n.element(), e.selector),
                    r = D(t, function(n) { return i(e, n) }); return On.from(r[e.firstTabstop]) })(e, t).each(function(n) { t.focusManager.set(e, n) }) }

        function u(e, n, t, r, o) { return o(n, t, function(n) { return function(n, e) { return i(n, e) && n.useTabstopAt(e) }(r, n) }).fold(function() { return r.cyclic ? On.some(!0) : On.none() }, function(n) { return r.focusManager.set(e, n), On.some(!0) }) }

        function o(e, n, t, r) { var o = zi(e.element(), t.selector); return function(n, e) { return e.focusManager.get(n).bind(function(n) { return $i(n, e.selector) }) }(e, t).bind(function(n) { return A(o, d(an, n)).bind(function(n) { return u(e, o, n, t, r) }) }) } var t = [$t("onEscape"), $t("onEnter"), Yt("selector", '[data-alloy-tabstop="true"]:not(:disabled)'), Yt("firstTabstop", 0), Yt("useTabstopAt", b(!0)), $t("visibilitySelector")].concat([n]),
            r = b([nu(Ji([Qi, Ki([9])]), function(n, e, t) { var r = t.cyclic ? Wi : Xi; return o(n, 0, t, r) }), nu(Ki([9]), function(n, e, t) { var r = t.cyclic ? qi : Yi; return o(n, 0, t, r) }), nu(Ki([27]), function(e, t, n) { return n.onEscape.bind(function(n) { return n(e, t) }) }), nu(Ji([du, Ki([13])]), function(e, t, n) { return n.onEnter.bind(function(n) { return n(e, t) }) })]),
            c = b([]); return wu(t, so.init, r, c, function() { return On.some(e) }) }

    function Tu(n) { return "input" === Y(n) && "radio" !== vr(n, "type") || "textarea" === Y(n) }

    function Ou(n, e, t) { return Tu(t) && Ki([32])(e.event()) ? On.none() : function(n, e, t) { return X(n, t, Fe()), On.some(!0) }(n, 0, t) }

    function ku(n, e) { return On.some(!0) }

    function Eu(n, e, t) { return t.execute(n, e, n.element()) }

    function Cu() { var t = An(On.none()); return lo({ readState: function() { return t.get().map(function(n) { return { numRows: String(n.numRows()), numColumns: String(n.numColumns()) } }).getOr({ numRows: "?", numColumns: "?" }) }, setGridSize: function(n, e) { t.set(On.some({ numRows: b(n), numColumns: b(e) })) }, getNumRows: function() { return t.get().map(function(n) { return n.numRows() }) }, getNumColumns: function() { return t.get().map(function(n) { return n.numColumns() }) } }) }

    function Du(e, t) { return function(n) { return "rtl" === Gc(n) ? t : e } }

    function _u(i) { return function(n, e, t, r) { var o = i(n.element()); return Uc(o, n, e, t, r) } }

    function Mu(n, e) { var t = Du(n, e); return _u(t) }

    function Iu(n, e) { var t = Du(e, n); return _u(t) }

    function Au(o) { return function(n, e, t, r) { return Uc(o, n, e, t, r) } }

    function Fu(n) { return ! function(n) { return n.offsetWidth <= 0 && n.offsetHeight <= 0 }(n.dom()) }

    function Ru(n, e, t) { var r = zi(n, t); return function(e, n) { return A(e, n).map(function(n) { return { index: b(n), candidates: b(e) } }) }(D(r, Fu), function(n) { return an(n, e) }) }

    function Bu(n, e) { return A(n, function(n) { return an(e, n) }) }

    function Vu(t, n, r, e) { return e(Math.floor(n / r), n % r).bind(function(n) { var e = n.row() * r + n.column(); return 0 <= e && e < t.length ? On.some(t[e]) : On.none() }) }

    function Nu(o, n, i, u, c) { return Vu(o, n, u, function(n, e) { var t = n === i - 1 ? o.length - n * u : u,
                r = tu(e, c, 0, t - 1); return On.some({ row: b(n), column: b(r) }) }) }

    function ju(i, n, u, c, a) { return Vu(i, n, c, function(n, e) { var t = tu(n, a, 0, u - 1),
                r = t === u - 1 ? i.length - t * c : c,
                o = ru(e, 0, r - 1); return On.some({ row: b(t), column: b(o) }) }) }

    function Hu(e, t, n) { Ui(e.element(), t.selector).each(function(n) { t.focusManager.set(e, n) }) }

    function Pu(o) { return function(n, e, t, r) { return Ru(n, e, t.selector).bind(function(n) { return o(n.candidates(), n.index(), r.getNumRows().getOr(t.initSize.numRows), r.getNumColumns().getOr(t.initSize.numColumns)) }) } }

    function zu(n, e, t) { return t.captureTab ? On.some(!0) : On.none() }

    function Lu(n, e, t, o) { var i = function(n, e, t) { var r = tu(e, o, 0, t.length - 1); return r === n ? On.none() : function(n) { return "button" === Y(n) && "disabled" === vr(n, "disabled") }(t[r]) ? i(n, r, t) : On.from(t[r]) }; return Ru(n, t, e).bind(function(n) { var e = n.index(),
                t = n.candidates(); return i(e, e, t) }) }

    function Gu(e, t, r) { return function(n, e) { return e.focusManager.get(n).bind(function(n) { return $i(n, e.selector) }) }(e, r).bind(function(n) { return r.execute(e, t, n) }) }

    function Uu(e, t, n) { t.getInitial(e).orThunk(function() { return Ui(e.element(), t.selector) }).each(function(n) { t.focusManager.set(e, n) }) }

    function $u(n, e, t) { return Lu(n, t.selector, e, -1) }

    function Wu(n, e, t) { return Lu(n, t.selector, e, 1) }

    function Xu(o) { return function(n, e, t, r) { return o(n, e, t, r).bind(function() { return t.executeOnMove ? Gu(n, e, t) : On.some(!0) }) } }

    function qu(n, e, t) { return t.onEscape(n, e) }

    function Yu(n, e, t) { return On.from(n[e]).bind(function(n) { return On.from(n[t]).map(function(n) { return ia({ rowIndex: e, columnIndex: t, cell: n }) }) }) }

    function Ku(n, e, t, r) { var o = n[e].length,
            i = tu(t, r, 0, o - 1); return Yu(n, e, i) }

    function Ju(n, e, t, r) { var o = tu(t, r, 0, n.length - 1),
            i = n[o].length,
            u = ru(e, 0, i - 1); return Yu(n, o, u) }

    function Qu(n, e, t, r) { var o = n[e].length,
            i = ru(t + r, 0, o - 1); return Yu(n, e, i) }

    function Zu(n, e, t, r) { var o = ru(t + r, 0, n.length - 1),
            i = n[o].length,
            u = ru(e, 0, i - 1); return Yu(n, o, u) }

    function nc(e, t, n) { t.previousSelector(e).orThunk(function() { var n = t.selectors; return Ui(e.element(), n.cell) }).each(function(n) { t.focusManager.set(e, n) }) }

    function ec(n, e) { return function(o, t, i) { var u = i.cycles ? n : e; return $i(t, i.selectors.row).bind(function(n) { var e = zi(n, i.selectors.cell); return Bu(e, t).bind(function(t) { var r = zi(o, i.selectors.row); return Bu(r, n).bind(function(n) { var e = function(n, e) { return ue(n, function(n) { return zi(n, e.selectors.cell) }) }(r, i); return u(e, n, t).map(function(n) { return n.cell() }) }) }) }) } }

    function tc(e, t, r) { return r.focusManager.get(e).bind(function(n) { return r.execute(e, t, n) }) }

    function rc(e, t, n) { Ui(e.element(), t.selector).each(function(n) { t.focusManager.set(e, n) }) }

    function oc(n, e, t) { return Lu(n, t.selector, e, -1) }

    function ic(n, e, t) { return Lu(n, t.selector, e, 1) }

    function uc(e, n) { return function(n, e, t) { return Kt(n, e, Yr(t)) }(e, {}, ue(n, function(n) { return function(e, t) { return Qr(e, e, Gr(), It(function(n) { return Vr("The field: " + e + " is forbidden. " + t) })) }(n.name(), "Cannot configure " + n.name() + " for " + e) }).concat([Jt("dump", y)])) }

    function cc(n) { return n.dump }

    function ac(n, e) { return x(x({}, n.dump), mo(e)) }

    function fc(n) { return In(n, "uiType") }

    function sc(n, e, t, r) { return fc(t) && t.uiType === Ia ? function(n, e, t, r) { return n.exists(function(n) { return n !== t.owner }) ? Aa.single(!0, b(t)) : Mn(r, t.name).fold(function() { throw new Error("Unknown placeholder component: " + t.name + "\nKnown: [" + kn(r) + "]\nNamespace: " + n.getOr("none") + "\nSpec: " + JSON.stringify(t, null, 2)) }, function(n) { return n.replace() }) }(n, 0, t, r) : Aa.single(!1, b(t)) }

    function lc(e, t, n, r) { var o = S(r, function(n, e) { return function(n, e) { var t = !1; return { name: b(n), required: function() { return e.fold(function(n, e) { return n }, function(n, e) { return n }) }, used: function() { return t }, replace: function() { if (t) throw new Error("Trying to use the same placeholder more than once: " + n); return t = !0, e } } }(e, n) }),
            i = function(e, t, n, r) { return R(n, function(n) { return Fa(e, t, n, r) }) }(e, t, n, o); return Cn(o, function(n) { if (!1 === n.used() && n.required()) throw new Error("Placeholder: " + n.name() + " was not found in components list\nNamespace: " + e.getOr("none") + "\nComponents: " + JSON.stringify(t.components, null, 2)) }), i }

    function dc(n) { var e = (new Date).getTime(); return n + "_" + Math.floor(1e9 * Math.random()) + ++Na + String(e) }

    function mc(n) {
        function e(n) { return n.name } return n.fold(e, e, e, e) }

    function gc(t, r) { return function(n) { var e = Pt("Converting part type", r, n); return t(e) } }

    function pc(n, e, t, r) { return gt(e.defaults(n, t, r), t, { uid: n.partUids[e.name] }, e.overrides(n, t, r)) }

    function hc(o, n) { var e = {}; return C(n, function(n) {
            (function(n) { return n.fold(On.some, On.none, On.some, On.some) })(n).each(function(t) { var r = nf(o, t.pname);
                e[t.name] = function(n) { var e = Pt("Part: " + t.name + " in " + o, Yr(t.schema), n); return x(x({}, r), { config: n, validated: e }) } }) }), e }

    function vc(n, e, t) { return function(n, t, e) { var i = {},
                r = {}; return C(e, function(n) { n.fold(function(r) { i[r.pname] = Ra(!0, function(n, e, t) { return r.factory.sketch(pc(n, r, e, t)) }) }, function(n) { var e = t.parts[n.name];
                    r[n.name] = b(n.factory.sketch(pc(t, n, e[Za()]), e)) }, function(r) { i[r.pname] = Ra(!1, function(n, e, t) { return r.factory.sketch(pc(n, r, e, t)) }) }, function(o) { i[o.pname] = Ba(!0, function(e, n, t) { var r = e[o.name]; return ue(r, function(n) { return o.factory.sketch(gt(o.defaults(e, n, t), n, o.overrides(e, n))) }) }) }) }), { internals: b(i), externals: b(r) } }(0, e, t) }

    function yc(n, e, t) { return lc(On.some(n), e, e.components, t) }

    function bc(n, e, t) { var r = e.partUids[t]; return n.getSystem().getByUid(r).toOption() }

    function xc(n, e, t) { return bc(n, e, t).getOrDie("Could not find part: " + t) }

    function wc(e, n) { var t = function(n) { return ue(n, mc) }(n); return Tt(ue(t, function(n) { return { key: n, value: e + "-" + n } })) }

    function Sc(e) { return Qr("partUids", "partUids", $r(function(n) { return wc(n.uid, e) }), eo()) }

    function Tc(n) { return St(ef, n) }

    function Oc(r) { return function(n, e) { var t = e.toString(),
                r = t.indexOf(")") + 1,
                o = t.indexOf("("),
                i = t.substring(o + 1, r - 1).split(/,\s*/); return n.toFunctionAnnotation = function() { return { name: "OVERRIDE", parameters: ao(i.slice(1)) } }, n }(function(n) { for (var e = [], t = 1; t < arguments.length; t++) e[t - 1] = arguments[t]; return r.apply(undefined, [n.getApis()].concat([n].concat(e))) }, r) }

    function kc(n) { return dc(n) }

    function Ec(n, e, t, r, o) { var i = function(n, e) { return (0 < n.length ? [Ut("parts", n)] : []).concat([Lt("uid"), Yt("dom", {}), Yt("components", []), Xo("originalSpec"), Yt("debug.sketcher", {})]).concat(e) }(r, o); return Pt(n + " [SpecSchema]", At(i.concat(e)), t) }

    function Cc(n, e, t, r, o) { var i = ff(o),
            u = function(n) { return R(n, function(n) { return n.fold(On.none, On.some, On.none, On.none).map(function(n) { return Ut(n.name, n.schema.concat([Xo(Za())])) }).toArray() }) }(t),
            c = Sc(t),
            a = Ec(n, e, i, u, [c]),
            f = vc(0, a, t); return r(a, yc(n, a, f.internals()), i, f.externals()) } var Dc, _c, Mc, Ic, Ac, Fc, Rc, Bc, Vc, Nc, jc = Su(Jt("cyclic", b(!1))),
        Hc = Su(Jt("cyclic", b(!0))),
        Pc = [Yt("execute", Ou), Yt("useSpace", !1), Yt("useEnter", !0), Yt("useControlEnter", !1), Yt("useDown", !1)],
        zc = wu(Pc, so.init, function(n, e, t, r) { var o = t.useSpace && !Tu(n.element()) ? [32] : [],
                i = t.useEnter ? [13] : [],
                u = t.useDown ? [40] : [],
                c = o.concat(i).concat(u); return [nu(Ki(c), Eu)].concat(t.useControlEnter ? [nu(Ji([Zi, Ki([13])]), Eu)] : []) }, function(n, e, t, r) { return t.useSpace && !Tu(n.element()) ? [nu(Ki([32]), ku)] : [] }, function() { return On.none() }),
        Lc = /* */ Object.freeze({ __proto__: null, flatgrid: Cu, init: function(n) { return n.state(n) } }),
        Gc = function(n) { return "rtl" === ii(n, "direction") ? "rtl" : "ltr" },
        Uc = function(e, t, n, r, o) { return r.focusManager.get(t).bind(function(n) { return e(t.element(), n, r, o) }).map(function(n) { return r.focusManager.set(t, n), !0 }) },
        $c = Au,
        Wc = Au,
        Xc = Au,
        qc = [Lt("selector"), Yt("execute", Ou), Go("onEscape"), Yt("captureTab", !1), vi()],
        Yc = Pu(function(n, e, t, r) { return Nu(n, e, t, r, -1) }),
        Kc = Pu(function(n, e, t, r) { return Nu(n, e, t, r, 1) }),
        Jc = Pu(function(n, e, t, r) { return ju(n, e, t, r, -1) }),
        Qc = Pu(function(n, e, t, r) { return ju(n, e, t, r, 1) }),
        Zc = b([nu(Ki([37]), Mu(Yc, Kc)), nu(Ki([39]), Iu(Yc, Kc)), nu(Ki([38]), $c(Jc)), nu(Ki([40]), Wc(Qc)), nu(Ji([Qi, Ki([9])]), zu), nu(Ji([du, Ki([9])]), zu), nu(Ki([27]), function(n, e, t) { return t.onEscape(n, e) }), nu(Ki([32].concat([13])), function(e, t, r, n) { return function(n, e) { return e.focusManager.get(n).bind(function(n) { return $i(n, e.selector) }) }(e, r).bind(function(n) { return r.execute(e, t, n) }) })]),
        na = b([nu(Ki([32]), ku)]),
        ea = wu(qc, Cu, Zc, na, function() { return On.some(Hu) }),
        ta = [Lt("selector"), Yt("getInitial", On.none), Yt("execute", Ou), Go("onEscape"), Yt("executeOnMove", !1), Yt("allowVertical", !0)],
        ra = b([nu(Ki([32]), ku)]),
        oa = wu(ta, so.init, function(n, e, t, r) { var o = [37].concat(t.allowVertical ? [38] : []),
                i = [39].concat(t.allowVertical ? [40] : []); return [nu(Ki(o), Xu(Mu($u, Wu))), nu(Ki(i), Xu(Iu($u, Wu))), nu(Ki([13]), Gu), nu(Ki([32]), Gu), nu(Ki([27]), qu)] }, ra, function() { return On.some(Uu) }),
        ia = en(["rowIndex", "columnIndex", "cell"], []),
        ua = [Ut("selectors", [Lt("row"), Lt("cell")]), Yt("cycles", !0), Yt("previousSelector", On.none), Yt("execute", Ou)],
        ca = ec(function(n, e, t) { return Ku(n, e, t, -1) }, function(n, e, t) { return Qu(n, e, t, -1) }),
        aa = ec(function(n, e, t) { return Ku(n, e, t, 1) }, function(n, e, t) { return Qu(n, e, t, 1) }),
        fa = ec(function(n, e, t) { return Ju(n, t, e, -1) }, function(n, e, t) { return Zu(n, t, e, -1) }),
        sa = ec(function(n, e, t) { return Ju(n, t, e, 1) }, function(n, e, t) { return Zu(n, t, e, 1) }),
        la = b([nu(Ki([37]), Mu(ca, aa)), nu(Ki([39]), Iu(ca, aa)), nu(Ki([38]), $c(fa)), nu(Ki([40]), Wc(sa)), nu(Ki([32].concat([13])), function(e, t, r) { return ko(e.element()).bind(function(n) { return r.execute(e, t, n) }) })]),
        da = b([nu(Ki([32]), ku)]),
        ma = wu(ua, so.init, la, da, function() { return On.some(nc) }),
        ga = [Lt("selector"), Yt("execute", Ou), Yt("moveOnTab", !1)],
        pa = b([nu(Ki([38]), Xc(oc)), nu(Ki([40]), Xc(ic)), nu(Ji([Qi, Ki([9])]), function(n, e, t, r) { return t.moveOnTab ? Xc(oc)(n, e, t, r) : On.none() }), nu(Ji([du, Ki([9])]), function(n, e, t, r) { return t.moveOnTab ? Xc(ic)(n, e, t, r) : On.none() }), nu(Ki([13]), tc), nu(Ki([32]), tc)]),
        ha = b([nu(Ki([32]), ku)]),
        va = wu(ga, so.init, pa, ha, function() { return On.some(rc) }),
        ya = [Go("onSpace"), Go("onEnter"), Go("onShiftEnter"), Go("onLeft"), Go("onRight"), Go("onTab"), Go("onShiftTab"), Go("onUp"), Go("onDown"), Go("onEscape"), Yt("stopSpaceKeyup", !1), $t("focusIn")],
        ba = wu(ya, so.init, function(n, e, t) { return [nu(Ki([32]), t.onSpace), nu(Ji([du, Ki([13])]), t.onEnter), nu(Ji([Qi, Ki([13])]), t.onShiftEnter), nu(Ji([Qi, Ki([9])]), t.onShiftTab), nu(Ji([du, Ki([9])]), t.onTab), nu(Ki([38]), t.onUp), nu(Ki([40]), t.onDown), nu(Ki([37]), t.onLeft), nu(Ki([39]), t.onRight), nu(Ki([32]), t.onSpace), nu(Ki([27]), t.onEscape)] }, function(n, e, t) { return t.stopSpaceKeyup ? [nu(Ki([32]), ku)] : [] }, function(n) { return n.focusIn }),
        xa = jc.schema(),
        wa = Hc.schema(),
        Sa = oa.schema(),
        Ta = ea.schema(),
        Oa = ma.schema(),
        ka = zc.schema(),
        Ea = va.schema(),
        Ca = ba.schema(),
        Da = (Nc = Pt("Creating behaviour: " + (Vc = { branchKey: "mode", branches: /* */ Object.freeze({ __proto__: null, acyclic: xa, cyclic: wa, flow: Sa, flatgrid: Ta, matrix: Oa, execution: ka, menu: Ea, special: Ca }), name: "keying", active: { events: function(n, e) { return n.handler.toEvents(n, e) } }, apis: { focusIn: function(e, t, r) { t.sendFocusIn(t).fold(function() { e.getSystem().triggerFocus(e.element(), e.element()) }, function(n) { n(e, t, r) }) }, setGridSize: function(n, e, t, r, o) {! function(n) { return v(n, "setGridSize") }(t) ? l.console.error("Layout does not support setGridSize"): t.setGridSize(r, o) } }, state: Lc }).name, po, Vc), Dc = zt(Nc.branchKey, Nc.branches), _c = Nc.name, Mc = Nc.active, Ic = Nc.apis, Ac = Nc.extra, Fc = Nc.state, Bc = Xt(_c, [Wt("config", Rc = Dc)]), fo(Rc, Bc, _c, Mc, Ic, Ac, Fc)),
        _a = uc,
        Ma = ac,
        Ia = "placeholder",
        Aa = dt([{ single: ["required", "valueThunk"] }, { multiple: ["required", "valueThunks"] }]),
        Fa = function(i, u, c, a) { return sc(i, 0, c, a).fold(function(n, e) { var t = fc(c) ? e(u, c.config, c.validated) : e(u),
                    r = Mn(t, "components").getOr([]),
                    o = R(r, function(n) { return Fa(i, u, n, a) }); return [x(x({}, t), { components: o })] }, function(n, e) { if (fc(c)) { var t = e(u, c.config, c.validated); return c.validated.preprocess.getOr(y)(t) } return e(u) }) },
        Ra = Aa.single,
        Ba = Aa.multiple,
        Va = b(Ia),
        Na = 0,
        ja = dt([{ required: ["data"] }, { external: ["data"] }, { optional: ["data"] }, { group: ["data"] }]),
        Ha = Yt("factory", { sketch: y }),
        Pa = Yt("schema", []),
        za = Lt("name"),
        La = Qr("pname", "pname", Ur(function(n) { return "<alloy." + dc(n.name) + ">" }), eo()),
        Ga = Jt("schema", function() { return [$t("preprocess")] }),
        Ua = Yt("defaults", b({})),
        $a = Yt("overrides", b({})),
        Wa = Yr([Ha, Pa, za, La, Ua, $a]),
        Xa = Yr([Ha, Pa, za, Ua, $a]),
        qa = Yr([Ha, Pa, za, La, Ua, $a]),
        Ya = Yr([Ha, Ga, za, Lt("unit"), La, Ua, $a]),
        Ka = gc(ja.required, Wa),
        Ja = (gc(ja.external, Xa), gc(ja.optional, qa)),
        Qa = gc(ja.group, Ya),
        Za = b("entirety"),
        nf = function(n, e) { return { uiType: Va(), owner: n, name: e } },
        ef = dc("alloy-premade"),
        tf = b("alloy-id-"),
        rf = b("data-alloy-id"),
        of = tf(),
        uf = rf(),
        cf = function(n, e) { Object.defineProperty(n.dom(), uf, { value: e, writable: !0 }) },
        af = function(n) { var e = Ye(n) ? n.dom()[uf] : null; return On.from(e) },
        ff = function(n) { return function(n) { return In(n, "uid") }(n) ? n : x(x({}, n), { uid: kc("uid") }) };

    function sf(n) { var e = Pt("Sketcher for " + n.name, Bs, n),
            t = S(e.apis, Oc),
            r = S(e.extraApis, function(n, e) { return ar(n, e) }); return x(x({ name: b(e.name), configFields: b(e.configFields), sketch: function(n) { return function(n, e, t, r) { var o = ff(r); return t(Ec(n, e, o, [], []), o) }(e.name, e.configFields, e.factory, n) } }, t), r) }

    function lf(n) { var e = Pt("Sketcher for " + n.name, Vs, n),
            t = hc(e.name, e.partFields),
            r = S(e.apis, Oc),
            o = S(e.extraApis, function(n, e) { return ar(n, e) }); return x(x({ name: b(e.name), partFields: b(e.partFields), configFields: b(e.configFields), sketch: function(n) { return Cc(e.name, e.configFields, e.partFields, e.factory, n) }, parts: b(t) }, r), o) }

    function df(n) { var e = $e.fromHtml(n),
            t = tt(e),
            r = function(n) { var e = n.dom().attributes !== undefined ? n.dom().attributes : []; return M(e, function(n, e) { var t; return "class" === e.name ? n : x(x({}, n), ((t = {})[e.name] = e.value, t)) }, {}) }(e),
            o = function(n) { return Array.prototype.slice.call(n.dom().classList, 0) }(e),
            i = 0 === t.length ? {} : { innerHtml: Eo(e) }; return x({ tag: Y(e), classes: o, attributes: r }, i) }

    function mf(n) { return { dom: Hs(n) } }

    function gf(n) { return mo([ki.config({ toggleClass: Mi.resolve("toolbar-button-selected"), toggleOnExecute: !1, aria: { mode: "pressed" } }), Ei(n, function(n, e) {
            (e ? ki.on : ki.off)(n) })]) }

    function pf(n, e) { var t = e.ui.registry.getAll().icons; return On.from(t[n]).fold(function() { return Hs('<span class="${prefix}-toolbar-button ${prefix}-toolbar-group-item ${prefix}-icon-' + n + ' ${prefix}-icon"></span>') }, function(n) { return Hs('<span class="${prefix}-toolbar-button ${prefix}-toolbar-group-item">' + n + "</span>") }) }

    function hf(e) { return Ja({ name: e + "-edge", overrides: function(n) { return n.model.manager.edgeActions[e].fold(function() { return {} }, function(r) { return { events: er([or(ge(), function(n, e, t) { return r(n, t) }, [n]), or(ve(), function(n, e, t) { return r(n, t) }, [n]), or(ye(), function(n, e, t) { t.mouseIsDown.get() && r(n, t) }, [n])]) } }) } }) }

    function vf(n, e, t) { e.store.manager.onLoad(n, e, t) }

    function yf(n, e, t) { e.store.manager.onUnload(n, e, t) }

    function bf() { var n = An(null); return lo({ set: n.set, get: n.get, isNotSet: function() { return null === n.get() }, clear: function() { n.set(null) }, readState: function() { return { mode: "memory", value: n.get() } } }) }

    function xf() { var i = An({}),
            u = An({}); return lo({ readState: function() { return { mode: "dataset", dataByValue: i.get(), dataByText: u.get() } }, lookup: function(n) { return Mn(i.get(), n).orThunk(function() { return Mn(u.get(), n) }) }, update: function(n) { var e = i.get(),
                    t = u.get(),
                    r = {},
                    o = {};
                C(n, function(e) { r[e.value] = e, Mn(e, "meta").each(function(n) { Mn(n, "text").each(function(n) { o[n] = e }) }) }), i.set(x(x({}, e), r)), u.set(x(x({}, t), o)) }, clear: function() { i.set({}), u.set({}) } }) }

    function wf(n, e, t, r) { var o = e.store;
        t.update([r]), o.setValue(n, r), e.onSetValue(n, r) }

    function Sf(n, e) { il.set(n, e) }

    function Tf(n) { return il.get(n) }

    function Of(n) { var e = n.event().raw(); if (function(n) { return -1 !== n.type.indexOf("touch") }(e)) { var t = e; return t.touches !== undefined && 1 === t.touches.length ? On.some(t.touches[0]).map(function(n) { return cl(n.clientX, n.clientY) }) : On.none() } var r = e; return r.clientX !== undefined ? On.some(r).map(function(n) { return cl(n.clientX, n.clientY) }) : On.none() }

    function kf(n) { return n.model.minX }

    function Ef(n) { return n.model.minY }

    function Cf(n) { return n.model.minX - 1 }

    function Df(n) { return n.model.minY - 1 }

    function _f(n) { return n.model.maxX }

    function Mf(n) { return n.model.maxY }

    function If(n) { return n.model.maxX + 1 }

    function Af(n) { return n.model.maxY + 1 }

    function Ff(n, e, t) { return e(n) - t(n) }

    function Rf(n) { return Ff(n, _f, kf) }

    function Bf(n) { return Ff(n, Mf, Ef) }

    function Vf(n) { return Rf(n) / 2 }

    function Nf(n) { return Bf(n) / 2 }

    function jf(n) { return n.stepSize }

    function Hf(n) { return n.snapToGrid }

    function Pf(n) { return n.snapStart }

    function zf(n) { return n.rounded }

    function Lf(n, e) { return n[e + "-edge"] !== undefined }

    function Gf(n) { return Lf(n, "left") }

    function Uf(n) { return Lf(n, "right") }

    function $f(n) { return Lf(n, "top") }

    function Wf(n) { return Lf(n, "bottom") }

    function Xf(n) { return n.model.value.get() }

    function qf(n) { return { x: b(n) } }

    function Yf(n) { return { y: b(n) } }

    function Kf(n, e) { return { x: b(n), y: b(e) } }

    function Jf(n, e) { $(n, al(), { value: e }) }

    function Qf(n, e, t, r) { return n < e ? n : t < n ? t : n === e ? e - 1 : Math.max(e, n - r) }

    function Zf(n, e, t, r) { return t < n ? n : n < e ? e : n === t ? t + 1 : Math.min(t, n + r) }

    function ns(n, e, t) { return Math.max(e, Math.min(t, n)) }

    function es(n) { var e = n.min,
            t = n.max,
            r = n.range,
            o = n.value,
            i = n.step,
            u = n.snap,
            c = n.snapStart,
            a = n.rounded,
            f = n.hasMinEdge,
            s = n.hasMaxEdge,
            l = n.minBound,
            d = n.maxBound,
            m = n.screenRange,
            g = f ? e - 1 : e,
            p = s ? t + 1 : t; if (o < l) return g; if (d < o) return p; var h = function(n, e, t) { return Math.min(t, Math.max(n, e)) - e }(o, l, d),
            v = ns(h / m * r + e, g, p); return u && e <= v && v <= t ? function(u, t, c, a, n) { return n.fold(function() { var n = u - t,
                    e = Math.round(n / a) * a; return ns(t + e, t - 1, c + 1) }, function(n) { var e = (u - n) % a,
                    t = Math.round(e / a),
                    r = Math.floor((u - n) / a),
                    o = Math.floor((c - n) / a),
                    i = n + Math.min(o, r + t) * a; return Math.max(n, i) }) }(v, e, t, i, c) : a ? Math.round(v) : v }

    function ts(n) { var e = n.min,
            t = n.max,
            r = n.range,
            o = n.value,
            i = n.hasMinEdge,
            u = n.hasMaxEdge,
            c = n.maxBound,
            a = n.maxOffset,
            f = n.centerMinEdge,
            s = n.centerMaxEdge; return o < e ? i ? 0 : f : t < o ? u ? c : s : (o - e) / r * a }

    function rs(n) { return n.element().dom().getBoundingClientRect() }

    function os(n, e) { return n[e] }

    function is(n) { var e = rs(n); return os(e, fl) }

    function us(n) { var e = rs(n); return os(e, "right") }

    function cs(n) { var e = rs(n); return os(e, "top") }

    function as(n) { var e = rs(n); return os(e, "bottom") }

    function fs(n) { var e = rs(n); return os(e, "width") }

    function ss(n) { var e = rs(n); return os(e, "height") }

    function ls(n, e, t) { return (n + e) / 2 - t }

    function ds(n, e) { var t = rs(n),
            r = rs(e),
            o = os(t, fl),
            i = os(t, "right"),
            u = os(r, fl); return ls(o, i, u) }

    function ms(n, e) { var t = rs(n),
            r = rs(e),
            o = os(t, "top"),
            i = os(t, "bottom"),
            u = os(r, "top"); return ls(o, i, u) }

    function gs(n, e) { $(n, al(), { value: e }) }

    function ps(n) { return { x: b(n) } }

    function hs(n, e, t) { var r = { min: kf(e), max: _f(e), range: Rf(e), value: t, step: jf(e), snap: Hf(e), snapStart: Pf(e), rounded: zf(e), hasMinEdge: Gf(e), hasMaxEdge: Uf(e), minBound: is(n), maxBound: us(n), screenRange: fs(n) }; return es(r) }

    function vs(t) { return function(n, e) { return function(n, e, t) { var r = (0 < n ? Zf : Qf)(Xf(t).x(), kf(t), _f(t), jf(t)); return gs(e, ps(r)), On.some(r) }(t, n, e).map(function() { return !0 }) } }

    function ys(n, e, t, r, o, i) { var u = function(e, n, t, r, o) { var i = fs(e),
                u = r.bind(function(n) { return On.some(ds(n, e)) }).getOr(0),
                c = o.bind(function(n) { return On.some(ds(n, e)) }).getOr(i),
                a = { min: kf(n), max: _f(n), range: Rf(n), value: t, hasMinEdge: Gf(n), hasMaxEdge: Uf(n), minBound: is(e), minOffset: 0, maxBound: us(e), maxOffset: i, centerMinEdge: u, centerMaxEdge: c }; return ts(a) }(e, i, t, r, o); return is(e) - is(n) + u }

    function bs(n, e) { $(n, al(), { value: e }) }

    function xs(n) { return { y: b(n) } }

    function ws(n, e, t) { var r = { min: Ef(e), max: Mf(e), range: Bf(e), value: t, step: jf(e), snap: Hf(e), snapStart: Pf(e), rounded: zf(e), hasMinEdge: $f(e), hasMaxEdge: Wf(e), minBound: cs(n), maxBound: as(n), screenRange: ss(n) }; return es(r) }

    function Ss(t) { return function(n, e) { return function(n, e, t) { var r = (0 < n ? Zf : Qf)(Xf(t).y(), Ef(t), Mf(t), jf(t)); return bs(e, xs(r)), On.some(r) }(t, n, e).map(function() { return !0 }) } }

    function Ts(n, e, t, r, o, i) { var u = function(e, n, t, r, o) { var i = ss(e),
                u = r.bind(function(n) { return On.some(ms(n, e)) }).getOr(0),
                c = o.bind(function(n) { return On.some(ms(n, e)) }).getOr(i),
                a = { min: Ef(n), max: Mf(n), range: Bf(n), value: t, hasMinEdge: $f(n), hasMaxEdge: Wf(n), minBound: cs(e), minOffset: 0, maxBound: as(e), maxOffset: i, centerMinEdge: u, centerMaxEdge: c }; return ts(a) }(e, i, t, r, o); return cs(e) - cs(n) + u }

    function Os(n, e) { $(n, al(), { value: e }) }

    function ks(n, e) { return { x: b(n), y: b(e) } }

    function Es(t, r) { return function(n, e) { return function(n, e, t, r) { var o = 0 < n ? Zf : Qf,
                    i = e ? Xf(r).x() : o(Xf(r).x(), kf(r), _f(r), jf(r)),
                    u = e ? o(Xf(r).y(), Ef(r), Mf(r), jf(r)) : Xf(r).y(); return Os(t, ks(i, u)), On.some(i) }(t, r, n, e).map(function() { return !0 }) } }

    function Cs(e, t, r, n) { return zs.forToolbar(t, function() { var n = r();
            e.setContextToolbar([{ label: t + " group", items: n }]) }, {}, n) }

    function Ds(n) { return [function(o) {
            function i(n) { return n < 0 ? "black" : 360 < n ? "white" : "hsl(" + n + ", 100%, 50%)" } return Ml.sketch({ dom: Hs('<div class="${prefix}-slider ${prefix}-hue-slider-container"></div>'), components: [Ml.parts()["left-edge"](mf('<div class="${prefix}-hue-slider-black"></div>')), Ml.parts().spectrum({ dom: Hs('<div class="${prefix}-slider-gradient-container"></div>'), components: [mf('<div class="${prefix}-slider-gradient"></div>')], behaviours: mo([ki.config({ toggleClass: Mi.resolve("thumb-active") })]) }), Ml.parts()["right-edge"](mf('<div class="${prefix}-hue-slider-white"></div>')), Ml.parts().thumb({ dom: Hs('<div class="${prefix}-slider-thumb"></div>'), behaviours: mo([ki.config({ toggleClass: Mi.resolve("thumb-active") })]) })], onChange: function(n, e, t) { var r = i(t.x());
                    Bi(e.element(), "background-color", r), o.onChange(n, e, r) }, onDragStart: function(n, e) { ki.on(e) }, onDragEnd: function(n, e) { ki.off(e) }, onInit: function(n, e, t, r) { var o = i(r.x());
                    Bi(e.element(), "background-color", o) }, stepSize: 10, model: { mode: "x", minX: 0, maxX: 360, getInitialValue: function() { return { x: function() { return o.getInitialValue() } } } }, sliderBehaviours: mo([Ci(Ml.refresh)]) }) }(n)] }

    function _s(e, n) { return (Ye(n) ? On.some(n) : sn(n).filter(Ye)).map(function(n) { return function(n, e, t) { return xo(function(n, e) { return e(n) }, wo, n, e, t) }(n, function(n) { return ui(n, "font-size").isSome() }, e).bind(function(n) { return ui(n, "font-size") }).getOrThunk(function() { return ii(n, "font-size") }) }).getOr("") }

    function Ms(n) { var e = n.selection.getStart(),
            t = $e.fromDom(e),
            r = $e.fromDom(n.getBody()),
            o = _s(function(n) { return an(r, n) }, t); return I(Rl, function(n) { return o === n }).getOr("medium") }

    function Is(n) { return [mf('<span class="${prefix}-toolbar-button ${prefix}-icon-small-font ${prefix}-icon"></span>'), function(n) { return Fl({ onChange: n.onChange, sizes: Vl, category: "font", getInitialValue: n.getInitialValue }) }(n), mf('<span class="${prefix}-toolbar-button ${prefix}-icon-large-font ${prefix}-icon"></span>')] }

    function As(n) { var e = function t(n) { return n.uid !== undefined }(n) && v(n, "uid") ? n.uid : kc("memento"); return { get: function(n) { return n.getSystem().getByUid(e).getOrDie() }, getOpt: function(n) { return n.getSystem().getByUid(e).toOption() }, asSpec: function() { return x(x({}, n), { uid: e }) } } } var Fs, Rs, Bs = At([Lt("name"), Lt("factory"), Lt("configFields"), Yt("apis", {}), Yt("extraApis", {})]),
        Vs = At([Lt("name"), Lt("factory"), Lt("configFields"), Lt("partFields"), Yt("apis", {}), Yt("extraApis", {})]),
        Ns = sf({ name: "Button", factory: function(n) {
                function t(e) { return Mn(n.dom, "attributes").bind(function(n) { return Mn(n, e) }) } var e = function(n) { return er(F([n.map(function(t) { return co(function(n, e) { t(n), e.stop() }) }).toArray(), ni()])) }(n.action),
                    r = n.dom.tag; return { uid: n.uid, dom: n.dom, components: n.components, events: e, behaviours: Ma(n.buttonBehaviours, [Ri.config({}), Da.config({ mode: "execution", useSpace: !0, useEnter: !0 })]), domModification: { attributes: function() { if ("button" !== r) return { role: t("role").getOr("button") }; var n = t("type").getOr("button"),
                                e = t("role").map(function(n) { return { role: n } }).getOr({}); return x({ type: n }, e) }() }, eventOrder: n.eventOrder } }, configFields: [Yt("uid", undefined), Lt("dom"), Yt("components", []), _a("buttonBehaviours", [Ri, Da]), $t("action"), $t("role"), Yt("eventOrder", {})] }),
        js = mr({ fields: [], name: "unselecting", active: /* */ Object.freeze({ __proto__: null, events: function() { return er([tr(Ce(), b(!0))]) }, exhibit: function() { return fr({ styles: { "-webkit-user-select": "none", "user-select": "none", "-ms-user-select": "none", "-moz-user-select": "-moz-none" }, attributes: { unselectable: "on" } }) } }) }),
        Hs = function(n) { var e = function(n, r) { return n.replace(/\$\{([^{}]*)\}/g, function(n, e) { var t = r[e]; return function(n) { var e = typeof n; return "string" == e || "number" == e }(t) ? t.toString() : n }) }(n, { prefix: Mi.prefix() }); return df(e) },
        Ps = function(n, e, t, r) { return Ns.sketch({ dom: pf(n, r), action: e, buttonBehaviours: gt(mo([js.config({})]), t) }) },
        zs = { forToolbar: Ps, forToolbarCommand: function(n, e) { return Ps(e, function() { n.execCommand(e) }, {}, n) }, forToolbarStateAction: function(n, e, t, r) { var o = gf(t); return Ps(e, r, o, n) }, forToolbarStateCommand: function(n, e) { var t = gf(e); return Ps(e, function() { n.execCommand(e) }, t, n) }, getToolbarIconButton: pf },
        Ls = Ja({ schema: [Lt("dom")], name: "label" }),
        Gs = hf("top-left"),
        Us = hf("top"),
        $s = hf("top-right"),
        Ws = hf("right"),
        Xs = hf("bottom-right"),
        qs = hf("bottom"),
        Ys = hf("bottom-left"),
        Ks = [Ls, hf("left"), Ws, Us, qs, Gs, $s, Ys, Xs, Ka({ name: "thumb", defaults: b({ dom: { styles: { position: "absolute" } } }), overrides: function(n) { return { events: er([ur(ge(), n, "spectrum"), ur(pe(), n, "spectrum"), ur(he(), n, "spectrum"), ur(ve(), n, "spectrum"), ur(ye(), n, "spectrum"), ur(be(), n, "spectrum")]) } } }), Ka({ schema: [Jt("mouseIsDown", function() { return An(!1) })], name: "spectrum", overrides: function(t) {
                function r(e, n) { return o.getValueFromEvent(n).map(function(n) { return o.setValueFrom(e, t, n) }) } var o = t.model.manager; return { behaviours: mo([Da.config({ mode: "special", onLeft: function(n) { return o.onLeft(n, t) }, onRight: function(n) { return o.onRight(n, t) }, onUp: function(n) { return o.onUp(n, t) }, onDown: function(n) { return o.onDown(n, t) } }), Ri.config({})]), events: er([rr(ge(), r), rr(pe(), r), rr(ve(), r), rr(ye(), function(n, e) { t.mouseIsDown.get() && r(n, e) })]) } } })],
        Js = /* */ Object.freeze({ __proto__: null, onLoad: vf, onUnload: yf, setValue: function(n, e, t, r) { e.store.manager.setValue(n, e, t, r) }, getValue: function(n, e, t) { return e.store.manager.getValue(n, e, t) }, getState: function(n, e, t) { return t } }),
        Qs = /* */ Object.freeze({ __proto__: null, events: function(t, r) { var n = t.resetOnDom ? [oo(function(n, e) { vf(n, t, r) }), io(function(n, e) { yf(n, t, r) })] : [sr(t, r, vf)]; return er(n) } }),
        Zs = /* */ Object.freeze({ __proto__: null, memory: bf, dataset: xf, manual: function() { return lo({ readState: function() {} }) }, init: function(n) { return n.store.manager.state(n) } }),
        nl = [$t("initialValue"), Lt("getFallbackEntry"), Lt("getDataKey"), Lt("setValue"), Wo("manager", { setValue: wf, getValue: function(n, e, t) { var r = e.store,
                    o = r.getDataKey(n); return t.lookup(o).fold(function() { return r.getFallbackEntry(o) }, function(n) { return n }) }, onLoad: function(e, t, r) { t.store.initialValue.each(function(n) { wf(e, t, r, n) }) }, onUnload: function(n, e, t) { t.clear() }, state: xf })],
        el = [Lt("getValue"), Yt("setValue", w), $t("initialValue"), Wo("manager", { setValue: function(n, e, t, r) { e.store.setValue(n, r), e.onSetValue(n, r) }, getValue: function(n, e, t) { return e.store.getValue(n) }, onLoad: function(e, t, n) { t.store.initialValue.each(function(n) { t.store.setValue(e, n) }) }, onUnload: w, state: so.init })],
        tl = [$t("initialValue"), Wo("manager", { setValue: function(n, e, t, r) { t.set(r), e.onSetValue(n, r) }, getValue: function(n, e, t) { return t.get() }, onLoad: function(n, e, t) { e.store.initialValue.each(function(n) { t.isNotSet() && t.set(n) }) }, onUnload: function(n, e, t) { t.clear() }, state: bf })],
        rl = [Kt("store", { mode: "memory" }, zt("mode", { memory: tl, manual: el, dataset: nl })), Lo("onSetValue"), Yt("resetOnDom", !1)],
        ol = mr({ fields: rl, name: "representing", active: Qs, apis: Js, extra: { setValueFrom: function(n, e) { var t = ol.getValue(e);
                    ol.setValue(n, t) } }, state: Zs }),
        il = Ni("width", function(n) { return n.dom().offsetWidth }),
        ul = function(t, r) { return { left: b(t), top: b(r), translate: function(n, e) { return ul(t + n, r + e) } } },
        cl = ul,
        al = b("slider.change.value"),
        fl = "left",
        sl = vs(-1),
        ll = vs(1),
        dl = On.none,
        ml = On.none,
        gl = { "top-left": On.none(), top: On.none(), "top-right": On.none(), right: On.some(function(n, e) { Jf(n, qf(If(e))) }), "bottom-right": On.none(), bottom: On.none(), "bottom-left": On.none(), left: On.some(function(n, e) { Jf(n, qf(Cf(e))) }) },
        pl = /* */ Object.freeze({ __proto__: null, setValueFrom: function(n, e, t) { var r = hs(n, e, t),
                    o = ps(r); return gs(n, o), r }, setToMin: function(n, e) { var t = kf(e);
                gs(n, ps(t)) }, setToMax: function(n, e) { var t = _f(e);
                gs(n, ps(t)) }, findValueOfOffset: hs, getValueFromEvent: function(n) { return Of(n).map(function(n) { return n.left() }) }, findPositionOfValue: ys, setPositionFromValue: function(n, e, t, r) { var o = Xf(t),
                    i = ys(n, r.getSpectrum(n), o.x(), r.getLeftEdge(n), r.getRightEdge(n), t),
                    u = Tf(e.element()) / 2;
                Bi(e.element(), "left", i - u + "px") }, onLeft: sl, onRight: ll, onUp: dl, onDown: ml, edgeActions: gl }),
        hl = On.none,
        vl = On.none,
        yl = Ss(-1),
        bl = Ss(1),
        xl = { "top-left": On.none(), top: On.some(function(n, e) { Jf(n, Yf(Df(e))) }), "top-right": On.none(), right: On.none(), "bottom-right": On.none(), bottom: On.some(function(n, e) { Jf(n, Yf(Af(e))) }), "bottom-left": On.none(), left: On.none() },
        wl = /* */ Object.freeze({ __proto__: null, setValueFrom: function(n, e, t) { var r = ws(n, e, t),
                    o = xs(r); return bs(n, o), r }, setToMin: function(n, e) { var t = Ef(e);
                bs(n, xs(t)) }, setToMax: function(n, e) { var t = Mf(e);
                bs(n, xs(t)) }, findValueOfOffset: ws, getValueFromEvent: function(n) { return Of(n).map(function(n) { return n.top() }) }, findPositionOfValue: Ts, setPositionFromValue: function(n, e, t, r) { var o = Xf(t),
                    i = Ts(n, r.getSpectrum(n), o.y(), r.getTopEdge(n), r.getBottomEdge(n), t),
                    u = ji(e.element()) / 2;
                Bi(e.element(), "top", i - u + "px") }, onLeft: hl, onRight: vl, onUp: yl, onDown: bl, edgeActions: xl }),
        Sl = Es(-1, !1),
        Tl = Es(1, !1),
        Ol = Es(-1, !0),
        kl = Es(1, !0),
        El = { "top-left": On.some(function(n, e) { Jf(n, Kf(Cf(e), Df(e))) }), top: On.some(function(n, e) { Jf(n, Kf(Vf(e), Df(e))) }), "top-right": On.some(function(n, e) { Jf(n, Kf(If(e), Df(e))) }), right: On.some(function(n, e) { Jf(n, Kf(If(e), Nf(e))) }), "bottom-right": On.some(function(n, e) { Jf(n, Kf(If(e), Af(e))) }), bottom: On.some(function(n, e) { Jf(n, Kf(Vf(e), Af(e))) }), "bottom-left": On.some(function(n, e) { Jf(n, Kf(Cf(e), Af(e))) }), left: On.some(function(n, e) { Jf(n, Kf(Cf(e), Nf(e))) }) },
        Cl = /* */ Object.freeze({ __proto__: null, setValueFrom: function(n, e, t) { var r = hs(n, e, t.left()),
                    o = ws(n, e, t.top()),
                    i = ks(r, o); return Os(n, i), i }, setToMin: function(n, e) { var t = kf(e),
                    r = Ef(e);
                Os(n, ks(t, r)) }, setToMax: function(n, e) { var t = _f(e),
                    r = Mf(e);
                Os(n, ks(t, r)) }, getValueFromEvent: function(n) { return Of(n) }, setPositionFromValue: function(n, e, t, r) { var o = Xf(t),
                    i = ys(n, r.getSpectrum(n), o.x(), r.getLeftEdge(n), r.getRightEdge(n), t),
                    u = Ts(n, r.getSpectrum(n), o.y(), r.getTopEdge(n), r.getBottomEdge(n), t),
                    c = Tf(e.element()) / 2,
                    a = ji(e.element()) / 2;
                Bi(e.element(), "left", i - c + "px"), Bi(e.element(), "top", u - a + "px") }, onLeft: Sl, onRight: Tl, onUp: Ol, onDown: kl, edgeActions: El }),
        Dl = [Yt("stepSize", 1), Yt("onChange", w), Yt("onChoose", w), Yt("onInit", w), Yt("onDragStart", w), Yt("onDragEnd", w), Yt("snapToGrid", !1), Yt("rounded", !0), $t("snapStart"), Gt("model", zt("mode", { x: [Yt("minX", 0), Yt("maxX", 100), Jt("value", function(n) { return An(n.mode.minX) }), Lt("getInitialValue"), Wo("manager", pl)], y: [Yt("minY", 0), Yt("maxY", 100), Jt("value", function(n) { return An(n.mode.minY) }), Lt("getInitialValue"), Wo("manager", wl)], xy: [Yt("minX", 0), Yt("maxX", 100), Yt("minY", 0), Yt("maxY", 100), Jt("value", function(n) { return An({ x: b(n.mode.minX), y: b(n.mode.minY) }) }), Lt("getInitialValue"), Wo("manager", Cl)] })), uc("sliderBehaviours", [Da, ol]), Jt("mouseIsDown", function() { return An(!1) })],
        _l = b("mouse.released"),
        Ml = lf({ name: "Slider", configFields: Dl, partFields: Ks, factory: function(i, n, e, t) {
                function u(n) { return xc(n, i, "thumb") }

                function c(n) { return xc(n, i, "spectrum") }

                function r(n) { return bc(n, i, "left-edge") }

                function o(n) { return bc(n, i, "right-edge") }

                function a(n) { return bc(n, i, "top-edge") }

                function f(n) { return bc(n, i, "bottom-edge") }

                function s(n, e) { v.setPositionFromValue(n, e, i, { getLeftEdge: r, getRightEdge: o, getTopEdge: a, getBottomEdge: f, getSpectrum: c }) }

                function l(n, e) { h.value.set(e); var t = u(n); return s(n, t), i.onChange(n, t, e), On.some(!0) }

                function d(t) { var n = i.mouseIsDown.get();
                    i.mouseIsDown.set(!1), n && bc(t, i, "thumb").each(function(n) { var e = h.value.get();
                        i.onChoose(t, n, e) }) }

                function m(n, e) { e.stop(), i.mouseIsDown.set(!0), i.onDragStart(n, u(n)) }

                function g(n, e) { e.stop(), i.onDragEnd(n, u(n)), d(n) } var p, h = i.model,
                    v = h.manager; return { uid: i.uid, dom: i.dom, components: n, behaviours: ac(i.sliderBehaviours, [Da.config({ mode: "special", focusIn: function(n) { return bc(n, i, "spectrum").map(Da.focusIn).map(b(!0)) } }), ol.config({ store: { mode: "manual", getValue: function(n) { return h.value.get() } } }), bi.config({ channels: (p = {}, p[_l()] = { onReceive: d }, p) })]), events: er([rr(al(), function(n, e) { l(n, e.event().value()) }), oo(function(n, e) { var t = h.getInitialValue();
                        h.value.set(t); var r = u(n);
                        s(n, r); var o = c(n);
                        i.onInit(n, r, o, h.value.get()) }), rr(ge(), m), rr(he(), g), rr(ve(), m), rr(be(), g)]), apis: { resetToMin: function(n) { v.setToMin(n, i) }, resetToMax: function(n) { v.setToMax(n, i) }, changeValue: l, refresh: s }, domModification: { styles: { position: "relative" } } } }, apis: { resetToMin: function(n, e) { n.resetToMin(e) }, resetToMax: function(n, e) { n.resetToMax(e) }, refresh: function(n, e) { n.refresh(e) } } }),
        Il = function(n, r) { var e = { onChange: function(n, e, t) { r.undoManager.transact(function() { r.formatter.apply("forecolor", { value: t }), r.nodeChanged() }) }, getInitialValue: function() { return -1 } }; return Cs(n, "color-levels", function() { return Ds(e) }, r) },
        Al = At([Lt("getInitialValue"), Lt("onChange"), Lt("category"), Lt("sizes")]),
        Fl = function(n) { var o = Pt("SizeSlider", Al, n); return Ml.sketch({ dom: { tag: "div", classes: [Mi.resolve("slider-" + o.category + "-size-container"), Mi.resolve("slider"), Mi.resolve("slider-size-container")] }, onChange: function(n, e, t) { var r = t.x();! function(n) { return 0 <= n && n < o.sizes.length }(r) || o.onChange(r) }, onDragStart: function(n, e) { ki.on(e) }, onDragEnd: function(n, e) { ki.off(e) }, model: { mode: "x", minX: 0, maxX: o.sizes.length - 1, getInitialValue: function() { return { x: function() { return o.getInitialValue() } } } }, stepSize: 1, snapToGrid: !0, sliderBehaviours: mo([Ci(Ml.refresh)]), components: [Ml.parts().spectrum({ dom: Hs('<div class="${prefix}-slider-size-container"></div>'), components: [mf('<div class="${prefix}-slider-size-line"></div>')] }), Ml.parts().thumb({ dom: Hs('<div class="${prefix}-slider-thumb"></div>'), behaviours: mo([ki.config({ toggleClass: Mi.resolve("thumb-active") })]) })] }) },
        Rl = ["9px", "10px", "11px", "12px", "14px", "16px", "18px", "20px", "24px", "32px", "36px"],
        Bl = { candidates: b(Rl), get: function(n) { return function(e) { return A(Rl, function(n) { return n === e }) }(Ms(n)).getOr(2) }, apply: function(e, n) {
                (function(n) { return On.from(Rl[n]) })(n).each(function(n) {! function(n, e) { Ms(n) !== e && n.execCommand("fontSize", !1, e) }(e, n) }) } },
        Vl = Bl.candidates(),
        Nl = window.Promise ? window.Promise : (Fs = jl.immediateFn || "function" == typeof window.setImmediate && window.setImmediate || function(n) { l.setTimeout(n, 1) }, Rs = Array.isArray || function(n) { return "[object Array]" === Object.prototype.toString.call(n) }, jl.prototype["catch"] = function(n) { return this.then(null, n) }, jl.prototype.then = function(t, r) { var o = this; return new jl(function(n, e) { Pl.call(o, new Ul(t, r, n, e)) }) }, jl.all = function() { for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e]; var a = Array.prototype.slice.call(1 === n.length && Rs(n[0]) ? n[0] : n); return new jl(function(o, i) { if (0 === a.length) return o([]); var u = a.length;

                function c(e, n) { try { if (n && ("object" == typeof n || "function" == typeof n)) { var t = n.then; if ("function" == typeof t) return void t.call(n, function(n) { c(e, n) }, i) }
                        a[e] = n, 0 == --u && o(a) } catch (r) { i(r) } } for (var n = 0; n < a.length; n++) c(n, a[n]) }) }, jl.resolve = function(e) { return e && "object" == typeof e && e.constructor === jl ? e : new jl(function(n) { n(e) }) }, jl.reject = function(t) { return new jl(function(n, e) { e(t) }) }, jl.race = function(o) { return new jl(function(n, e) { for (var t = 0, r = o; t < r.length; t++) r[t].then(n, e) }) }, jl);

    function jl(n) { if ("object" != typeof this) throw new TypeError("Promises must be constructed via new"); if ("function" != typeof n) throw new TypeError("not a function");
        this._state = null, this._value = null, this._deferreds = [], $l(n, Hl(zl, this), Hl(Ll, this)) }

    function Hl(n, e) { return function() { return n.apply(e, arguments) } }

    function Pl(r) { var o = this;
        null !== this._state ? Fs(function() { var n = o._state ? r.onFulfilled : r.onRejected; if (null !== n) { var e; try { e = n(o._value) } catch (t) { return void r.reject(t) }
                r.resolve(e) } else(o._state ? r.resolve : r.reject)(o._value) }) : this._deferreds.push(r) }

    function zl(n) { try { if (n === this) throw new TypeError("A promise cannot be resolved with itself."); if (n && ("object" == typeof n || "function" == typeof n)) { var e = n.then; if ("function" == typeof e) return void $l(Hl(e, n), Hl(zl, this), Hl(Ll, this)) }
            this._state = !0, this._value = n, Gl.call(this) } catch (t) { Ll.call(this, t) } }

    function Ll(n) { this._state = !1, this._value = n, Gl.call(this) }

    function Gl() { for (var n = 0, e = this._deferreds; n < e.length; n++) { var t = e[n];
            Pl.call(this, t) }
        this._deferreds = [] }

    function Ul(n, e, t, r) { this.onFulfilled = "function" == typeof n ? n : null, this.onRejected = "function" == typeof e ? e : null, this.resolve = t, this.reject = r }

    function $l(n, e, t) { var r = !1; try { n(function(n) { r || (r = !0, e(n)) }, function(n) { r || (r = !0, t(n)) }) } catch (o) { if (r) return;
            r = !0, t(o) } }

    function Wl(n) { return function e(t) { return new Nl(function(n) { var e = new l.FileReader;
                e.onloadend = function() { n(e.result) }, e.readAsDataURL(t) }) }(n).then(function(n) { return n.split(",")[1] }) }

    function Xl(o, i) {
        (function(n) { return Wl(n) })(i).then(function(r) { o.undoManager.transact(function() { var n = o.editorUpload.blobCache,
                    e = n.create(dc("mceu"), i, r);
                n.add(e); var t = o.dom.createHTML("img", { src: e.blobUri() });
                o.insertContent(t) }) }) }

    function ql(t) { var e = As({ dom: { tag: "input", attributes: { accept: "image/*", type: "file", title: "" }, styles: { visibility: "hidden", position: "absolute" } }, events: er([cr(ke()), rr(Oe(), function(n, e) {
                (function(n) { var e = n.event(),
                        t = e.raw().target.files || e.raw().dataTransfer.files; return On.from(t[0]) })(e).each(function(n) { Xl(t, n) }) })]) }); return Ns.sketch({ dom: zs.getToolbarIconButton("image", t), components: [e.asSpec()], action: function(n) { e.get(n).element().dom().click() } }) }

    function Yl(n) { return n.dom().textContent }

    function Kl(n) { return 0 < n.length }

    function Jl(n) { return n === undefined || null === n ? "" : n }

    function Ql(n, e, t) { return t.text.toOption().filter(Kl).fold(function() { return function(n) { return vr(n, "href") === Yl(n) }(n) ? On.some(e) : On.none() }, On.some) }

    function Zl(n, e) { var t = e.selection.getRng();
        n(), e.selection.setRng(t) }

    function nd(n) { return n.dom().value }

    function ed(n, e) { if (e === undefined) throw new Error("Value.set was undefined");
        n.dom().value = e }

    function td(n) { return x(x({}, function(n) { return mo([Ri.config({ onFocus: n.selectOnFocus ? function(n) { var e = n.element(),
                        t = nd(e);
                    e.dom().setSelectionRange(0, t.length) } : w })]) }(n)), ac(n.inputBehaviours, [ol.config({ store: x(x({ mode: "manual" }, n.data.map(function(n) { return { initialValue: n } }).getOr({})), { getValue: function(n) { return nd(n.element()) }, setValue: function(n, e) { nd(n.element()) !== e && ed(n.element(), e) } }), onSetValue: n.onSetValue })])) }

    function rd(n, e) { var t = As(dm.sketch({ inputAttributes: { placeholder: hm.translate(e) }, onSetValue: function(n, e) { U(n, Te()) }, inputBehaviours: mo([am.config({ find: On.some }), pm.config({}), Da.config({ mode: "execution" })]), selectOnFocus: !1 })),
            r = As(Ns.sketch({ dom: Hs('<button class="${prefix}-input-container-x ${prefix}-icon-cancel-circle ${prefix}-icon"></button>'), action: function(n) { var e = t.get(n);
                    ol.setValue(e, "") } })); return { name: n, spec: fm.sketch({ dom: Hs('<div class="${prefix}-input-container"></div>'), components: [t.asSpec(), r.asSpec()], containerBehaviours: mo([ki.config({ toggleClass: Mi.resolve("input-container-empty") }), am.config({ find: function(n) { return On.some(t.get(n)) } }), im("input-clearing", [rr(Te(), function(n) { var e = t.get(n);
                    (0 < ol.getValue(e).length ? ki.off : ki.on)(n) })])]) }) } }

    function od(n, e, t) { e.disabled && ym(n, e) }

    function id(n, e) { return !0 === e.useNative && k(vm, Y(n.element())) }

    function ud(n) { pr(n.element(), "disabled", "disabled") }

    function cd(n) { br(n.element(), "disabled") }

    function ad(n) { pr(n.element(), "aria-disabled", "true") }

    function fd(n) { pr(n.element(), "aria-disabled", "false") }

    function sd(e, n, t) { n.disableClass.each(function(n) { Er(e.element(), n) }), (id(e, n) ? cd : fd)(e), n.onEnabled(e) }

    function ld(n, e) { return id(n, e) ? function(n) { return yr(n.element(), "disabled") }(n) : function(n) { return "true" === vr(n.element(), "aria-disabled") }(n) }

    function dd(n) { return "<alloy.field." + n + ">" }

    function md() {
        function e() { t.get().each(function(n) { n.destroy() }) } var t = An(On.none()); return { clear: function() { e(), t.set(On.none()) }, isSet: function() { return t.get().isSome() }, set: function(n) { e(), t.set(On.some(n)) }, run: function(n) { t.get().each(n) } } }

    function gd() { var e = An(On.none()); return { clear: function() { e.set(On.none()) }, set: function(n) { e.set(On.some(n)) }, isSet: function() { return e.get().isSome() }, on: function(n) { e.get().each(n) } } }

    function pd(n) {
        function r(e, n, t) { return Ns.sketch({ dom: Hs('<span class="${prefix}-icon-' + n + ' ${prefix}-icon"></span>'), action: function(n) { $(n, u, { direction: e }) }, buttonBehaviours: mo([Sm.config({ disableClass: Mi.resolve("toolbar-navigation-disabled"), disabled: !t })]) }) }

        function o(n, o) { var i = zi(n.element(), "." + Mi.resolve("serialised-dialog-screen"));
            Ui(n.element(), "." + Mi.resolve("serialised-dialog-chain")).each(function(r) { 0 <= c.state.currentScreen.get() + o && c.state.currentScreen.get() + o < i.length && (ui(r, "left").each(function(n) { var e = parseInt(n, 10),
                        t = Tf(i[0]);
                    Bi(r, "left", e - o * t + "px") }), c.state.currentScreen.set(c.state.currentScreen.get() + o)) }) }

        function i(e) { var n = zi(e.element(), "input");
            On.from(n[c.state.currentScreen.get()]).each(function(n) { e.getSystem().getByDom(n).each(function(n) {! function(n, e) { n.getSystem().triggerFocus(e, n.element()) }(e, n.element()) }) }); var t = f.get(e);
            xu.highlightAt(t, c.state.currentScreen.get()) } var u = "navigateEvent",
            e = Yr([Lt("fields"), Yt("maxFieldIndex", n.fields.length - 1), Lt("onExecute"), Lt("getInitialValue"), Jt("state", function() { return { dialogSwipeState: gd(), currentScreen: An(0) } })]),
            c = Pt("SerialisedDialog", e, n),
            a = As(km(function(t) { return { dom: Hs('<div class="${prefix}-serialised-dialog"></div>'), components: [fm.sketch({ dom: Hs('<div class="${prefix}-serialised-dialog-chain" style="left: 0px; position: absolute;"></div>'), components: ue(c.fields, function(n, e) { return e <= c.maxFieldIndex ? fm.sketch({ dom: Hs('<div class="${prefix}-serialised-dialog-screen"></div>'), components: [r(-1, "previous", 0 < e), t.field(n.name, n.spec), r(1, "next", e < c.maxFieldIndex)] }) : t.field(n.name, n.spec) }) })], formBehaviours: mo([Ci(function(n, e) {! function(n, e) { Ui(n.element(), "." + Mi.resolve("serialised-dialog-chain")).each(function(n) { Bi(n, "left", -c.state.currentScreen.get() * e.width + "px") }) }(n, e) }), Da.config({ mode: "special", focusIn: function(n) { i(n) }, onTab: function(n) { return o(n, 1), On.some(!0) }, onShiftTab: function(n) { return o(n, -1), On.some(!0) } }), im("form-events", [oo(function(e, n) { c.state.currentScreen.set(0), c.state.dialogSwipeState.clear(); var t = f.get(e);
                        xu.highlightFirst(t), c.getInitialValue(e).each(function(n) { ol.setValue(e, n) }) }), co(c.onExecute), rr(Ee(), function(n, e) { "left" === e.event().raw().propertyName && i(n) }), rr(u, function(n, e) { var t = e.event().direction();
                        o(n, t) })])]) } })),
            f = As({ dom: Hs('<div class="${prefix}-dot-container"></div>'), behaviours: mo([xu.config({ highlightClass: Mi.resolve("dot-active"), itemClass: Mi.resolve("dot-item") })]), components: R(c.fields, function(n, e) { return e <= c.maxFieldIndex ? [mf('<div class="${prefix}-dot-item ${prefix}-icon-full-dot ${prefix}-icon"></div>')] : [] }) }); return { dom: Hs('<div class="${prefix}-serializer-wrapper"></div>'), components: [a.asSpec(), f.asSpec()], behaviours: mo([Da.config({ mode: "special", focusIn: function(n) { var e = a.get(n);
                    Da.focusIn(e) } }), im("serializer-wrapper-events", [rr(ge(), function(n, e) { var t = e.event();
                c.state.dialogSwipeState.set(Em(t.raw().touches[0].clientX)) }), rr(pe(), function(n, e) { var t = e.event();
                c.state.dialogSwipeState.on(function(n) { e.event().prevent(), c.state.dialogSwipeState.set(Cm(n, t.raw().touches[0].clientX)) }) }), rr(he(), function(r) { c.state.dialogSwipeState.on(function(n) { var e = a.get(r),
                        t = -1 * Dm(n);
                    o(e, t) }) })])]) } }

    function hd(e) {
        function n(n) { return function() { throw new Error("The component must be in a context to send: " + n + (e ? "\n" + Mo(e().element()) + " is not in context." : "")) } } return { debugInfo: b("fake"), triggerEvent: n("triggerEvent"), triggerFocus: n("triggerFocus"), triggerEscape: n("triggerEscape"), build: n("build"), addToWorld: n("addToWorld"), removeFromWorld: n("removeFromWorld"), addToGui: n("addToGui"), removeFromGui: n("removeFromGui"), getByUid: n("getByUid"), getByDom: n("getByDom"), broadcast: n("broadcast"), broadcastOn: n("broadcastOn"), broadcastEvent: n("broadcastEvent"), isConnected: b(!1) } }

    function vd(n, o) { var i = {}; return Cn(n, function(n, r) { Cn(n, function(n, e) { var t = Mn(i, e).getOr([]);
                i[e] = t.concat([o(r, n)]) }) }), i }

    function yd(u, c, n, a) { try { var e = function(n, e) { var t = re.call(n, 0); return t.sort(e), t }(n, function(n, e) { var t = n[c](),
                    r = e[c](),
                    o = a.indexOf(t),
                    i = a.indexOf(r); if (-1 === o) throw new Error("The ordering for " + u + " does not have an entry for " + t + ".\nOrder specified: " + JSON.stringify(a, null, 2)); if (-1 === i) throw new Error("The ordering for " + u + " does not have an entry for " + r + ".\nOrder specified: " + JSON.stringify(a, null, 2)); return o < i ? -1 : i < o ? 1 : 0 }); return lt.value(e) } catch (t) { return lt.error([t]) } }

    function bd(n) { return n.cHandler }

    function xd(n, e) { return { name: b(n), handler: b(e) } }

    function wd(n, e, t) { var r = x(x({}, t), function(n, e) { var t = {}; return C(n, function(n) { t[n.name()] = n.handlers(e) }), t }(e, n)); return vd(r, xd) }

    function Sd(n) { var i = function(n) { return ee(n) ? { can: b(!0), abort: b(!1), run: n } : n }(n); return function(n, e) { for (var t = [], r = 2; r < arguments.length; r++) t[r - 2] = arguments[r]; var o = [n, e].concat(t);
            i.abort.apply(undefined, o) ? e.stop() : i.can.apply(undefined, o) && i.run.apply(undefined, o) } }

    function Td(n, e, t) { var r = e[t]; return r ? yd("Event: " + t, "name", n, r).map(function(n) { var e = ue(n, function(n) { return n.handler() }); return nr(e) }) : function(n, e) { return lt.error(["The event (" + n + ') has more than one behaviour that listens to it.\nWhen this occurs, you must specify an event ordering for the behaviours in your spec (e.g. [ "listing", "toggling" ]).\nThe behaviours that can trigger it are: ' + JSON.stringify(ue(e, function(n) { return n.name() }), null, 2)]) }(t, n) }

    function Od(n) { return jt("custom.definition", Yr([Qr("dom", "dom", Lr(), Yr([Lt("tag"), Yt("styles", {}), Yt("classes", []), Yt("attributes", {}), $t("value"), $t("innerHtml")])), Lt("components"), Lt("uid"), Yt("events", {}), Yt("apis", {}), Qr("eventOrder", "eventOrder", function(n) { return zr.mergeWithThunk(b(n)) }({ "alloy.execute": ["disabling", "alloy.base.behaviour", "toggling", "typeaheadevents"], "alloy.focus": ["alloy.base.behaviour", "focusing", "keying"], "alloy.system.init": ["alloy.base.behaviour", "disabling", "toggling", "representing"], input: ["alloy.base.behaviour", "representing", "streaming", "invalidating"], "alloy.system.detached": ["alloy.base.behaviour", "representing", "item-events", "tooltipping"], mousedown: ["focusing", "alloy.base.behaviour", "item-type-events"], touchstart: ["focusing", "alloy.base.behaviour", "item-type-events"], mouseover: ["item-type-events", "tooltipping"] }), eo()), $t("domModification")]), n) }

    function kd(e, n) { C(n, function(n) { Or(e, n) }) }

    function Ed(e, n) { C(n, function(n) { Er(e, n) }) }

    function Cd(n, e) { return function(e, n) { var t = ue(n, function(n) { return Xt(n.name(), [Lt("config"), Yt("state", so)]) }),
                r = jt("component.behaviours", Yr(t), e.behaviours).fold(function(n) { throw new Error(no(n) + "\nComplete spec:\n" + JSON.stringify(e, null, 2)) }, function(n) { return n }); return { list: n, data: S(r, function(n) { var e = n.map(function(n) { return { config: n.config, state: n.state.init(n.config) } }); return function() { return e } }) } }(n, e) }

    function Dd(n) { var e = function(n) { var e = Mn(n, "behaviours").getOr({}),
                t = D(kn(e), function(n) { return e[n] !== undefined }); return ue(t, function(n) { return e[n].me }) }(n); return Cd(n, e) }

    function _d(n, e, t) { var r = function(n) { return x(x({}, n.dom), { uid: n.uid, domChildren: ue(n.components, function(n) { return n.element() }) }) }(n),
            o = function(n) { return n.domModification.fold(function() { return fr({}) }, fr) }(n),
            i = { "alloy.base.modification": o }; return function(n, e) { return x(x({}, n), { attributes: x(x({}, n.attributes), e.attributes), styles: x(x({}, n.styles), e.styles), classes: n.classes.concat(e.classes) }) }(r, 0 < e.length ? function(e, n, t, r) { var o = x({}, n);
            C(t, function(n) { o[n.name()] = n.exhibit(e, r) });

            function i(n) { return _(n, function(n, e) { return x(x({}, e.modification), n) }, {}) } var u = vd(o, function(n, e) { return { name: n, modification: e } }),
                c = _(u.classes, function(n, e) { return e.modification.concat(n) }, []),
                a = i(u.attributes),
                f = i(u.styles); return fr({ classes: c, attributes: a, styles: f }) }(t, i, e, r) : o) }

    function Md(n, e, t) { var r = { "alloy.base.behaviour": function(n) { return n.events }(n) }; return function(n, e, t, r) { var o = wd(n, t, r); return Vm(o, e) }(t, n.eventOrder, e, r).getOrDie() }

    function Id(t) {
        function n() { return s } var r = An(Rm),
            e = Ht(Od(t)),
            o = Dd(t),
            i = function(n) { return n.list }(o),
            u = function(n) { return n.data }(o),
            c = function(n) { var e = $e.fromTag(n.tag);
                hr(e, n.attributes), kd(e, n.classes), oi(e, n.styles), n.innerHtml.each(function(n) { return Co(e, n) }); var t = n.domChildren; return pn(e, t), n.value.each(function(n) { ed(e, n) }), n.uid, cf(e, n.uid), e }(_d(e, i, u)),
            a = Md(e, i, u),
            f = An(e.components),
            s = { getSystem: r.get, config: function(n) { var e = u; return (ee(e[n.name()]) ? e[n.name()] : function() { throw new Error("Could not find " + n.name() + " in " + JSON.stringify(t, null, 2)) })() }, hasConfigured: function(n) { return ee(u[n.name()]) }, spec: b(t), readState: function(n) { return u[n]().map(function(n) { return n.state.readState() }).getOr("not enabled") }, getApis: function() { return e.apis }, connect: function(n) { r.set(n) }, disconnect: function() { r.set(hd(n)) }, element: b(c), syncComponents: function() { var n = tt(c),
                        e = R(n, function(n) { return r.get().getByDom(n).fold(function() { return [] }, function(n) { return [n] }) });
                    f.set(e) }, components: f.get, events: b(a) }; return s }

    function Ad(n) { var e = Fm(n),
            t = e.events,
            r = u(e, ["events"]),
            o = function(n) { var e = Mn(n, "components").getOr([]); return ue(e, Hm) }(r),
            i = x(x({}, r), { events: x(x({}, Am), t), components: o }); return lt.value(Id(i)) }

    function Fd(n) { var e = $e.fromText(n); return Nm({ element: e }) }

    function Rd(n) {
        (ko(n.element()).isNone() || Ri.isFocused(n)) && (Ri.isFocused(n) || Ri.focus(n), $(n, zm, { item: n })) }

    function Bd(n) { $(n, Lm, { item: n }) }

    function Vd(n, t) { var r = fn(t),
            e = Oo(r).bind(function(e) {
                function n(n) { return an(e, n) } return n(t) ? On.some(t) : function(n, o) { var i = function(n) { for (var e = 0; e < n.childNodes.length; e++) { var t = $e.fromDom(n.childNodes[e]); if (o(t)) return On.some(t); var r = i(n.childNodes[e]); if (r.isSome()) return r } return On.none() }; return i(n.dom()) }(t, n) }),
            o = n(t); return e.each(function(e) { Oo(r).filter(function(n) { return an(n, e) }).fold(function() { So(e) }, w) }), o }

    function Nd(n, e, t, r) { var o = n.getSystem().build(r);
        ct(n, o, t) }

    function jd(n, e, t, r) { var o = ng(n);
        I(o, function(n) { return an(r.element(), n.element()) }).each(bn) }

    function Hd(e, n, t, r, o) { var i = ng(e); return On.from(i[r]).map(function(n) { return jd(e, 0, 0, n), o.each(function(n) { Nd(e, 0, function(n, e) {! function(n, e, t) { ln(n, t).fold(function() { rt(n, e) }, function(n) { dn(n, e) }) }(n, e, r) }, n) }), n }) }

    function Pd(n, e) { var t = {};
        Cn(n, function(n, e) { C(n, function(n) { t[n] = e }) }); var r = e,
            o = function(n) { return Dn(n, function(n, e) { return { k: n, v: e } }) }(e),
            i = S(o, function(n, e) { return [e].concat(tg(t, r, o, e)) }); return S(t, function(n) { return Mn(i, n).getOr([n]) }) }

    function zd(n, e, t, r) { return Mn(e.routes, r.start).bind(function(n) { return Mn(n, r.destination) }) }

    function Ld(t, r, n) {
        (function(e, t, r) { return ag(e, t).bind(function(n) { return cg(e, t, r, n) }) })(t, r, n).each(function(n) { var e = n.transition;
            Er(t.element(), e.transitionClass), br(t.element(), r.destinationAttr) }) }

    function Gd(n, e, t, r) { Ld(n, e, t), yr(n.element(), e.stateAttr) && vr(n.element(), e.stateAttr) !== r && e.onFinish(n, r), pr(n.element(), e.stateAttr, r) }

    function Ud(n) { return Mn(n, "format").getOr(n.title) }

    function $d(n) { return v(n, "items") ? function(n) { var e = gt(wt(n, ["items"]), { menu: !0 }),
                t = yg(n.items); return { item: e, menus: gt(t.menus, St(n.title, t.items)), expansions: gt(t.expansions, St(n.title, n.title)) } }(n) : { item: n, menus: {}, expansions: {} } }

    function Wd(n) { var e = n.replace(/\|/g, " ").trim(); return 0 < e.length ? e.split(/\s+/) : [] }

    function Xd(n) { var e = n.toolbar !== undefined ? n.toolbar : Sg; return Zn(e) ? Tg(e) : Wd(e) }

    function qd(n) {
        function e() { n.stopPropagation() }

        function t() { n.preventDefault() } var r = $e.fromDom(n.target),
            o = i(t, e); return function(n, e, t, r, o, i, u) { return { target: b(n), x: b(e), y: b(t), stop: r, prevent: o, kill: i, raw: b(u) } }(r, n.clientX, n.clientY, e, t, o, n) }

    function Yd(n, e, t, r, o) { var i = function(e, t) { return function(n) { e(n) && t(qd(n)) } }(t, r); return n.dom().addEventListener(e, i, o), { unbind: d(Eg, n, e, i, o) } }

    function Kd(n, e, t) { return function(n, e, t, r) { return Yd(n, e, t, r, !1) }(n, e, Cg, t) }

    function Jd(n, e, t) { return function(n, e, t, r) { return Yd(n, e, t, r, !0) }(n, e, Cg, t) }

    function Qd(n) { var e = n.matchMedia("(orientation: portrait)").matches; return { isPortrait: b(e) } } var Zd, nm, em = function(n) { var e = $e.fromDom(n.selection.getStart()); return $i(e, "a") },
        tm = { getInfo: function(n) { return em(n).fold(function() { return function(n) { return { url: "", text: n.selection.getContent({ format: "text" }), title: "", target: "", link: On.none() } }(n) }, function(n) { return function(n) { var e = Yl(n),
                            t = vr(n, "href"),
                            r = vr(n, "title"),
                            o = vr(n, "target"); return { url: Jl(t), text: e !== t ? Jl(e) : "", title: Jl(r), target: Jl(o), link: On.some(n) } }(n) }) }, applyInfo: function(e, o) { o.url.toOption().filter(Kl).fold(function() {! function(e, n) { n.link.bind(y).each(function(n) { e.execCommand("unlink") }) }(e, o) }, function(t) { var r = function(n, e) { var t = {}; return t.href = n, e.title.toOption().filter(Kl).each(function(n) { t.title = n }), e.target.toOption().filter(Kl).each(function(n) { t.target = n }), t }(t, o);
                    o.link.bind(y).fold(function() { var n = o.text.toOption().filter(Kl).getOr(t);
                        e.insertContent(e.dom.createHTML("a", r, e.dom.encode(n))) }, function(e) { var n = Ql(e, t, o);
                        hr(e, r), n.each(function(n) {! function(n, e) { n.dom().textContent = e }(e, n) }) }) }) }, query: em },
        rm = G(),
        om = function(n, e) {
            (rm.os.isAndroid() ? Zl : t)(e, n) },
        im = function(n, e) { return { key: n, value: { config: {}, me: function(n, e) { var t = er(e); return mr({ fields: [Lt("enabled")], name: n, active: { events: b(t) } }) }(n, e), configAsRaw: b({}), initialConfig: {}, state: so } } },
        um = /* */ Object.freeze({ __proto__: null, getCurrent: function(n, e, t) { return e.find(n) } }),
        cm = [Lt("find")],
        am = mr({ fields: cm, name: "composing", apis: um }),
        fm = sf({ name: "Container", factory: function(n) { var e = n.dom,
                    t = e.attributes,
                    r = u(e, ["attributes"]); return { uid: n.uid, dom: x({ tag: "div", attributes: x({ role: "presentation" }, t) }, r), components: n.components, behaviours: cc(n.containerBehaviours), events: n.events, domModification: n.domModification, eventOrder: n.eventOrder } }, configFields: [Yt("components", []), uc("containerBehaviours", []), Yt("events", {}), Yt("domModification", {}), Yt("eventOrder", {})] }),
        sm = sf({ name: "DataField", factory: function(t) { return { uid: t.uid, dom: t.dom, behaviours: Ma(t.dataBehaviours, [ol.config({ store: { mode: "memory", initialValue: t.getInitialValue() } }), am.config({ find: On.some })]), events: er([oo(function(n, e) { ol.setValue(n, t.getInitialValue()) })]) } }, configFields: [Lt("uid"), Lt("dom"), Lt("getInitialValue"), _a("dataBehaviours", [ol, am])] }),
        lm = b([$t("data"), Yt("inputAttributes", {}), Yt("inputStyles", {}), Yt("tag", "input"), Yt("inputClasses", []), Lo("onSetValue"), Yt("styles", {}), Yt("eventOrder", {}), uc("inputBehaviours", [ol, Ri]), Yt("selectOnFocus", !0)]),
        dm = sf({ name: "Input", configFields: lm(), factory: function(n, e) { return { uid: n.uid, dom: function(n) { return { tag: n.tag, attributes: x({ type: "text" }, n.inputAttributes), styles: n.inputStyles, classes: n.inputClasses } }(n), components: [], behaviours: td(n), eventOrder: n.eventOrder } } }),
        mm = /* */ Object.freeze({ __proto__: null, exhibit: function(n, e) { return fr({ attributes: Tt([{ key: e.tabAttr, value: "true" }]) }) } }),
        gm = [Yt("tabAttr", "data-alloy-tabstop")],
        pm = mr({ fields: gm, name: "tabstopping", active: mm }),
        hm = tinymce.util.Tools.resolve("tinymce.util.I18n"),
        vm = ["input", "button", "textarea", "select"],
        ym = function(e, n, t) { n.disableClass.each(function(n) { Or(e.element(), n) }), (id(e, n) ? ud : ad)(e), n.onDisabled(e) },
        bm = /* */ Object.freeze({ __proto__: null, enable: sd, disable: ym, isDisabled: ld, onLoad: od, set: function(n, e, t, r) {
                (r ? ym : sd)(n, e, t) } }),
        xm = /* */ Object.freeze({ __proto__: null, exhibit: function(n, e) { return fr({ classes: e.disabled ? e.disableClass.map(j).getOr([]) : [] }) }, events: function(t, n) { return er([tr(Fe(), function(n, e) { return ld(n, t) }), sr(t, n, od)]) } }),
        wm = [Yt("disabled", !1), Yt("useNative", !0), $t("disableClass"), Lo("onDisabled"), Lo("onEnabled")],
        Sm = mr({ fields: wm, name: "disabling", active: xm, apis: bm }),
        Tm = [uc("formBehaviours", [ol])],
        Om = function(r, n) { return { uid: r.uid, dom: r.dom, components: n, behaviours: ac(r.formBehaviours, [ol.config({ store: { mode: "manual", getValue: function(n) { var e = function(n, e) { var t = n.getSystem(); return S(e.partUids, function(n, e) { return b(t.getByUid(n)) }) }(n, r); return S(e, function(n, e) { return n().bind(function(n) { return function(n, e) { return n.fold(function() { return lt.error(e) }, lt.value) }(am.getCurrent(n), new Error("Cannot find a current component to extract the value from for form part '" + e + "': " + Mo(n.element()))) }).map(ol.getValue) }) }, setValue: function(t, n) { Cn(n, function(e, n) { bc(t, r, n).each(function(n) { am.getCurrent(n).each(function(n) { ol.setValue(n, e) }) }) }) } } })]), apis: { getField: function(n, e) { return bc(n, r, e).bind(am.getCurrent) } } } },
        km = (Oc(function(n, e, t) { return n.getField(e, t) }), function(n) { var t, e = (t = [], { field: function(n, e) { return t.push(n),
                            function(n, e, t) { return { uiType: Va(), owner: n, name: e, config: t, validated: {} } }("form", dd(n), e) }, record: function() { return t } }),
                r = n(e),
                o = e.record(),
                i = ue(o, function(n) { return Ka({ name: n, pname: dd(n) }) }); return Cc("form", Tm, i, Om, r) }),
        Em = function(n) { return { xValue: n, points: [] } },
        Cm = function(n, e) { if (e === n.xValue) return n; var t = 0 < e - n.xValue ? 1 : -1,
                r = { direction: t, xValue: e }; return { xValue: e, points: (0 === n.points.length ? [] : n.points[n.points.length - 1].direction === t ? n.points.slice(0, n.points.length - 1) : n.points).concat([r]) } },
        Dm = function(n) { if (0 === n.points.length) return 0; var e = n.points[0].direction,
                t = n.points[n.points.length - 1].direction; return -1 === e && -1 === t ? -1 : 1 === e && 1 === t ? 1 : 0 },
        _m = q(function(t, r) { return [{ label: "the link group", items: [pd({ fields: [rd("url", "Type or paste URL"), rd("text", "Link text"), rd("title", "Link title"), rd("target", "Link target"), function(n) { return { name: n, spec: sm.sketch({ dom: { tag: "span", styles: { display: "none" } }, getInitialValue: function() { return On.none() } }) } }("link")], maxFieldIndex: ["url", "text", "title", "target"].length - 1, getInitialValue: function() { return On.some(tm.getInfo(r)) }, onExecute: function(n) { var e = ol.getValue(n);
                        tm.applyInfo(r, e), t.restoreToolbar(), r.focus() } })] }] }),
        Mm = [{ title: "Headings", items: [{ title: "Heading 1", format: "h1" }, { title: "Heading 2", format: "h2" }, { title: "Heading 3", format: "h3" }, { title: "Heading 4", format: "h4" }, { title: "Heading 5", format: "h5" }, { title: "Heading 6", format: "h6" }] }, { title: "Inline", items: [{ title: "Bold", icon: "bold", format: "bold" }, { title: "Italic", icon: "italic", format: "italic" }, { title: "Underline", icon: "underline", format: "underline" }, { title: "Strikethrough", icon: "strikethrough", format: "strikethrough" }, { title: "Superscript", icon: "superscript", format: "superscript" }, { title: "Subscript", icon: "subscript", format: "subscript" }, { title: "Code", icon: "code", format: "code" }] }, { title: "Blocks", items: [{ title: "Paragraph", format: "p" }, { title: "Blockquote", format: "blockquote" }, { title: "Div", format: "div" }, { title: "Pre", format: "pre" }] }, { title: "Alignment", items: [{ title: "Left", icon: "alignleft", format: "alignleft" }, { title: "Center", icon: "aligncenter", format: "aligncenter" }, { title: "Right", icon: "alignright", format: "alignright" }, { title: "Justify", icon: "alignjustify", format: "alignjustify" }] }],
        Im = er([(Zd = _e(), nm = function(n, e) { var t = e.event().originator(),
                r = e.event().target(); return ! function(n, e, t) { return an(e, n.element()) && !an(e, t) }(n, t, r) || (l.console.warn(_e() + " did not get interpreted by the desired target. \nOriginator: " + Mo(t) + "\nTarget: " + Mo(r) + "\nCheck the " + _e() + " event handlers"), !1) }, { key: Zd, value: Zt({ can: nm }) })]),
        Am = /* */ Object.freeze({ __proto__: null, events: Im }),
        Fm = y,
        Rm = hd(),
        Bm = function(n, e) { return function(n, e) { return { cHandler: n, purpose: b(e) } }(d.apply(undefined, [n.handler].concat(e)), n.purpose()) },
        Vm = function(n, i) { var e = _n(n, function(r, o) { return (1 === r.length ? lt.value(r[0].handler()) : Td(r, i, o)).map(function(n) { var e = Sd(n),
                        t = 1 < r.length ? D(i[o], function(e) { return E(r, function(n) { return n.name() === e }) }).join(" > ") : r[0].name(); return St(o, function(n, e) { return { handler: n, purpose: b(e) } }(e, t)) }) }); return Ot(e, {}) },
        Nm = function(n) { var e = Pt("external.component", At([Lt("element"), $t("uid")]), n),
                t = An(hd());
            e.uid.each(function(n) { cf(e.element, n) }); var r = { getSystem: t.get, config: On.none, hasConfigured: b(!1), connect: function(n) { t.set(n) }, disconnect: function() { t.set(hd(function() { return r })) }, getApis: function() { return {} }, element: b(e.element), spec: b(n), readState: b("No state"), syncComponents: w, components: b([]), events: b({}) }; return Tc(r) },
        jm = kc,
        Hm = function(e) { return function(n) { return Mn(n, ef) }(e).fold(function() { var n = e.hasOwnProperty("uid") ? e : x({ uid: jm("") }, e); return Ad(n).getOrDie() }, function(n) { return n }) },
        Pm = Tc,
        zm = "alloy.item-hover",
        Lm = "alloy.item-focus",
        Gm = b(zm),
        Um = b(Lm),
        $m = [Lt("data"), Lt("components"), Lt("dom"), Yt("hasSubmenu", !1), $t("toggling"), _a("itemBehaviours", [ki, Ri, Da, ol]), Yt("ignoreFocus", !1), Yt("domModification", {}), Wo("builder", function(n) { return { dom: n.dom, domModification: x(x({}, n.domModification), { attributes: x(x(x({ role: n.toggling.isSome() ? "menuitemcheckbox" : "menuitem" }, n.domModification.attributes), { "aria-haspopup": n.hasSubmenu }), n.hasSubmenu ? { "aria-expanded": !1 } : {}) }), behaviours: Ma(n.itemBehaviours, [n.toggling.fold(ki.revoke, function(n) { return ki.config(x({ aria: { mode: "checked" } }, n)) }), Ri.config({ ignore: n.ignoreFocus, stopMousedown: n.ignoreFocus, onFocus: function(n) { Bd(n) } }), Da.config({ mode: "execution" }), ol.config({ store: { mode: "memory", initialValue: n.data } }), im("item-type-events", function a() { for (var n = 0, e = 0, t = arguments.length; e < t; e++) n += arguments[e].length; var r = Array(n),
                        o = 0; for (e = 0; e < t; e++)
                        for (var i = arguments[e], u = 0, c = i.length; u < c; u++, o++) r[o] = i[u]; return r }(ni(), [rr(xe(), Rd), rr(Re(), Ri.focus)]))]), components: n.components, eventOrder: n.eventOrder } }), Yt("eventOrder", {})],
        Wm = [Lt("dom"), Lt("components"), Wo("builder", function(n) { return { dom: n.dom, components: n.components, events: er([function(n) { return rr(n, function(n, e) { e.stop() }) }(Re())]) } })],
        Xm = b([Ka({ name: "widget", overrides: function(e) { return { behaviours: mo([ol.config({ store: { mode: "manual", getValue: function(n) { return e.data }, setValue: function() {} } })]) } } })]),
        qm = [Lt("uid"), Lt("data"), Lt("components"), Lt("dom"), Yt("autofocus", !1), Yt("ignoreFocus", !1), _a("widgetBehaviours", [ol, Ri, Da]), Yt("domModification", {}), Sc(Xm()), Wo("builder", function(t) {
            function r(n) { return bc(n, t, "widget").map(function(n) { return Da.focusIn(n), n }) }

            function n(n, e) { return Tu(e.event().target()) || t.autofocus && e.setSource(n.element()), On.none() } var e = vc(0, t, Xm()),
                o = yc("item-widget", t, e.internals()); return { dom: t.dom, components: o, domModification: t.domModification, events: er([co(function(n, e) { r(n).each(function(n) { e.stop() }) }), rr(xe(), Rd), rr(Re(), function(n, e) { t.autofocus ? r(n) : Ri.focus(n) })]), behaviours: Ma(t.widgetBehaviours, [ol.config({ store: { mode: "memory", initialValue: t.data } }), Ri.config({ ignore: t.ignoreFocus, onFocus: function(n) { Bd(n) } }), Da.config({ mode: "special", focusIn: t.autofocus ? function(n) { r(n) } : ho(), onLeft: n, onRight: n, onEscape: function(n, e) { return Ri.isFocused(n) || t.autofocus ? (t.autofocus && e.setSource(n.element()), On.none()) : (Ri.focus(n), On.some(!0)) } })]) } })],
        Ym = zt("type", { widget: qm, item: $m, separator: Wm }),
        Km = b([Qa({ factory: { sketch: function(n) { var e = Pt("menu.spec item", Ym, n); return e.builder(e) } }, name: "items", unit: "item", defaults: function(n, e) { return e.hasOwnProperty("uid") ? e : x(x({}, e), { uid: kc("item") }) }, overrides: function(n, e) { return { type: e.type, ignoreFocus: n.fakeFocus, domModification: { classes: [n.markers.item] } } } })]),
        Jm = b([Lt("value"), Lt("items"), Lt("dom"), Lt("components"), Yt("eventOrder", {}), uc("menuBehaviours", [xu, ol, am, Da]), Kt("movement", { mode: "menu", moveOnTab: !0 }, zt("mode", { grid: [vi(), Wo("config", function(n, e) { return { mode: "flatgrid", selector: "." + n.markers.item, initSize: { numColumns: e.initSize.numColumns, numRows: e.initSize.numRows }, focusManager: n.focusManager } })], matrix: [Wo("config", function(n, e) { return { mode: "matrix", selectors: { row: e.rowSelector, cell: "." + n.markers.item }, focusManager: n.focusManager } }), Lt("rowSelector")], menu: [Yt("moveOnTab", !0), Wo("config", function(n, e) { return { mode: "menu", selector: "." + n.markers.item, moveOnTab: e.moveOnTab, focusManager: n.focusManager } })] })), Gt("markers", pi()), Yt("fakeFocus", !1), Yt("focusManager", au()), Lo("onHighlight")]),
        Qm = b("alloy.menu-focus"),
        Zm = lf({ name: "Menu", configFields: Jm(), partFields: Km(), factory: function(n, e, t, r) { return { uid: n.uid, dom: n.dom, markers: n.markers, behaviours: ac(n.menuBehaviours, [xu.config({ highlightClass: n.markers.selectedItem, itemClass: n.markers.item, onHighlight: n.onHighlight }), ol.config({ store: { mode: "memory", initialValue: n.value } }), am.config({ find: On.some }), Da.config(n.movement.config(n, n.movement))]), events: er([rr(Um(), function(e, t) { var n = t.event();
                        e.getSystem().getByDom(n.target()).each(function(n) { xu.highlight(e, n), t.stop(), $(e, Qm(), { menu: e, item: n }) }) }), rr(Gm(), function(n, e) { var t = e.event().item();
                        xu.highlight(n, t) })]), components: e, eventOrder: n.eventOrder, domModification: { attributes: { role: "menu" } } } } }),
        ng = function(n, e) { return n.components() },
        eg = mr({ fields: [], name: "replacing", apis: /* */ Object.freeze({ __proto__: null, append: function(n, e, t, r) { Nd(n, 0, rt, r) }, prepend: function(n, e, t, r) { Nd(n, 0, gn, r) }, remove: jd, replaceAt: Hd, replaceBy: function(e, n, t, r, o) { var i = ng(e); return A(i, r).bind(function(n) { return Hd(e, 0, 0, n, o) }) }, set: function(e, n, t, r) { Vd(function() { var n = ue(r, e.getSystem().build);
                        yn(e, n) }, e.element()) }, contents: ng }) }),
        tg = function(t, r, o, n) { return Mn(o, n).bind(function(n) { return Mn(t, n).bind(function(n) { var e = tg(t, r, o, n); return On.some([n].concat(e)) }) }).getOr([]) },
        rg = function(n) { return "prepared" === n.type ? On.some(n.menu) : On.none() },
        og = { init: function() {
                function o(t) { return function(n, e) { for (var t = kn(n), r = 0, o = t.length; r < o; r++) { var i = t[r],
                                u = n[i]; if (e(u, i, n)) return On.some(u) } return On.none() }(i.get(), function(n, e) { return n === t }) } var i = An({}),
                    u = An({}),
                    c = An({}),
                    a = An(On.none()),
                    f = An({}),
                    s = function(n) { return e(n).bind(rg) },
                    e = function(n) { return Mn(u.get(), n) },
                    t = function(n) { return Mn(i.get(), n) }; return { setMenuBuilt: function(n, e) { var t;
                        u.set(x(x({}, u.get()), ((t = {})[n] = { type: "prepared", menu: e }, t))) }, setContents: function(n, e, t, r) { a.set(On.some(n)), i.set(t), u.set(e), f.set(r); var o = Pd(r, t);
                        c.set(o) }, expand: function(t) { return Mn(i.get(), t).map(function(n) { var e = Mn(c.get(), t).getOr([]); return [n].concat(e) }) }, refresh: function(n) { return Mn(c.get(), n) }, collapse: function(n) { return Mn(c.get(), n).bind(function(n) { return 1 < n.length ? On.some(n.slice(1)) : On.none() }) }, lookupMenu: e, lookupItem: t, otherMenus: function(n) { var e = f.get(); return N(kn(e), n) }, getPrimary: function() { return a.get().bind(s) }, getMenus: function() { return u.get() }, clear: function() { i.set({}), u.set({}), c.set({}), a.set(On.none()) }, isClear: function() { return a.get().isNone() }, getTriggeringPath: function(n, r) { var e = D(t(n).toArray(), function(n) { return s(n).isSome() }); return Mn(c.get(), n).bind(function(n) { var t = V(e.concat(n)); return function(n) { for (var e = [], t = 0; t < n.length; t++) { var r = n[t]; if (!r.isSome()) return On.none();
                                    e.push(r.getOrDie()) } return On.some(e) }(R(t, function(n, e) { return function(n, t, r) { return s(n).bind(function(e) { return o(n).bind(function(n) { return t(n).map(function(n) { return { triggeredMenu: e, triggeringItem: n, triggeringPath: r } }) }) }) }(n, r, t.slice(0, e + 1)).fold(function() { return a.get().is(n) ? [] : [On.none()] }, function(n) { return [On.some(n)] }) })) }) } } }, extractPreparedMenu: rg },
        ig = b("collapse-item"),
        ug = sf({ name: "TieredMenu", configFields: [$o("onExecute"), $o("onEscape"), Uo("onOpenMenu"), Uo("onOpenSubmenu"), Lo("onRepositionMenu"), Lo("onCollapseMenu"), Yt("highlightImmediately", !0), Ut("data", [Lt("primary"), Lt("menus"), Lt("expansions")]), Yt("fakeFocus", !1), Lo("onHighlight"), Lo("onHover"), Ut("markers", [Lt("backgroundMenu")].concat(mi()).concat(gi())), Lt("dom"), Yt("navigateOnHover", !0), Yt("stayInDom", !1), uc("tmenuBehaviours", [Da, xu, am, eg]), Yt("eventOrder", {})], apis: { collapseMenu: function(n, e) { n.collapseMenu(e) }, highlightPrimary: function(n, e) { n.highlightPrimary(e) }, repositionMenus: function(n, e) { n.repositionMenus(e) } }, factory: function(c, n) {
                function r(r, o, n) { return S(n, function(n, e) {
                        function t() { return Zm.sketch(x(x({ dom: n.dom }, n), { value: e, items: n.items, markers: c.markers, fakeFocus: c.fakeFocus, onHighlight: c.onHighlight, focusManager: c.fakeFocus ? function() {
                                    function o(n) { return xu.getHighlighted(n).map(function(n) { return n.element() }) } return { get: o, set: function(e, n) { var t = o(e);
                                            e.getSystem().getByDom(n).fold(w, function(n) { xu.highlight(e, n) }); var r = o(e);
                                            cu(e, t, r) } } }() : au() })) } return e === o ? { type: "prepared", menu: r.getSystem().build(t()) } : { type: "notbuilt", nbMenu: t } }) }

                function a(n) { return ol.getValue(n).value }

                function u(e, n) { xu.highlight(e, n), xu.getHighlighted(n).orThunk(function() { return xu.getFirst(n) }).each(function(n) { X(e, n.element(), Re()) }) }

                function f(e, n) { return eu(ue(n, function(n) { return e.lookupMenu(n).bind(function(n) { return "prepared" === n.type ? On.some(n.menu) : On.none() }) })) }

                function s(e, n, t) { var r = f(n, n.otherMenus(t));
                    C(r, function(n) { Ed(n.element(), [c.markers.backgroundMenu]), c.stayInDom || eg.remove(e, n) }) }

                function l(n, r) { var e = function(r) { return o.get().getOrThunk(function() { var t = {},
                                n = zi(r.element(), "." + c.markers.item),
                                e = D(n, function(n) { return "true" === vr(n, "aria-haspopup") }); return C(e, function(n) { r.getSystem().getByDom(n).each(function(n) { var e = a(n);
                                    t[e] = n }) }), o.set(On.some(t)), t }) }(n);
                    Cn(e, function(n, e) { var t = k(r, e);
                        pr(n.element(), "aria-expanded", t) }) }

                function d(r, o, i) { return On.from(i[0]).bind(function(n) { return o.lookupMenu(n).bind(function(n) { if ("notbuilt" === n.type) return On.none(); var e = n.menu,
                                t = f(o, i.slice(1)); return C(t, function(n) { Or(n.element(), c.markers.backgroundMenu) }), J(e.element()) || eg.append(r, Pm(e)), Ed(e.element(), [c.markers.backgroundMenu]), u(r, e), s(r, o, i), On.some(e) }) }) } var m, e, o = An(On.none()),
                    g = og.init(),
                    i = function(n) { return S(c.data.menus, function(n, e) { return R(n.items, function(n) { return "separator" === n.type ? [] : [n.data.value] }) }) };
                (e = m = m || {})[e.HighlightSubmenu = 0] = "HighlightSubmenu", e[e.HighlightParent = 1] = "HighlightParent";

                function p(o, i, u) { void 0 === u && (u = m.HighlightSubmenu); var n = a(i); return g.expand(n).bind(function(r) { return l(o, r), On.from(r[0]).bind(function(t) { return g.lookupMenu(t).bind(function(n) { var e = function(n, e, t) { if ("notbuilt" !== t.type) return t.menu; var r = n.getSystem().build(t.nbMenu()); return g.setMenuBuilt(e, r), r }(o, t, n); return J(e.element()) || eg.append(o, Pm(e)), c.onOpenSubmenu(o, i, e, V(r)), u === m.HighlightSubmenu ? (xu.highlightFirst(e), d(o, g, r)) : (xu.dehighlightAll(e), On.some(i)) }) }) }) }

                function h(e, t) { var n = a(t); return g.collapse(n).bind(function(n) { return l(e, n), d(e, g, n).map(function(n) { return c.onCollapseMenu(e, t, n), n }) }) }

                function t(t) { return function(e, n) { return $i(n.getSource(), "." + c.markers.item).bind(function(n) { return e.getSystem().getByDom(n).toOption().bind(function(n) { return t(e, n).map(function() { return !0 }) }) }) } }

                function v(n) { return xu.getHighlighted(n).bind(xu.getHighlighted) } var y = er([rr(Qm(), function(t, r) { var n = r.event().item();
                        g.lookupItem(a(n)).each(function() { var n = r.event().menu();
                            xu.highlight(t, n); var e = a(r.event().item());
                            g.refresh(e).each(function(n) { return s(t, g, n) }) }) }), co(function(e, n) { var t = n.event().target();
                        e.getSystem().getByDom(t).each(function(n) { 0 === a(n).indexOf("collapse-item") && h(e, n), p(e, n, m.HighlightSubmenu).fold(function() { c.onExecute(e, n) }, function() {}) }) }), oo(function(e, n) {
                        (function(n) { var e = r(n, c.data.primary, c.data.menus),
                                t = i(); return g.setContents(c.data.primary, e, c.data.expansions, t), g.getPrimary() })(e).each(function(n) { eg.append(e, Pm(n)), c.onOpenMenu(e, n), c.highlightImmediately && u(e, n) }) })].concat(c.navigateOnHover ? [rr(Gm(), function(n, e) { var t = e.event().item();! function(e, n) { var t = a(n);
                            g.refresh(t).bind(function(n) { return l(e, n), d(e, g, n) }) }(n, t), p(n, t, m.HighlightParent), c.onHover(n, t) })] : [])),
                    b = { collapseMenu: function(e) { v(e).each(function(n) { h(e, n) }) }, highlightPrimary: function(e) { g.getPrimary().each(function(n) { u(e, n) }) }, repositionMenus: function(r) { g.getPrimary().bind(function(e) { return v(r).bind(function(n) { var e = a(n),
                                        t = function(n) { return _n(n, function(n) { return n }) }(g.getMenus()),
                                        r = eu(ue(t, og.extractPreparedMenu)); return g.getTriggeringPath(e, function(n) { return function(n, e, t) { return H(e, function(n) { if (!n.getSystem().isConnected()) return On.none(); var e = xu.getCandidates(n); return I(e, function(n) { return a(n) === t }) }) }(0, r, n) }) }).map(function(n) { return { primary: e, triggeringPath: n } }) }).fold(function() {
                                (function(n) { return On.from(n.components()[0]).filter(function(n) { return "menu" === vr(n.element(), "role") }) })(r).each(function(n) { c.onRepositionMenu(r, n, []) }) }, function(n) { var e = n.primary,
                                    t = n.triggeringPath;
                                c.onRepositionMenu(r, e, t) }) } }; return { uid: c.uid, dom: c.dom, markers: c.markers, behaviours: ac(c.tmenuBehaviours, [Da.config({ mode: "special", onRight: t(function(n, e) { return Tu(e.element()) ? On.none() : p(n, e, m.HighlightSubmenu) }), onLeft: t(function(n, e) { return Tu(e.element()) ? On.none() : h(n, e) }), onEscape: t(function(n, e) { return h(n, e).orThunk(function() { return c.onEscape(n, e).map(function() { return n }) }) }), focusIn: function(e, n) { g.getPrimary().each(function(n) { X(e, n.element(), Re()) }) } }), xu.config({ highlightClass: c.markers.selectedMenu, itemClass: c.markers.menu }), am.config({ find: function(n) { return xu.getHighlighted(n) } }), eg.config({})]), eventOrder: c.eventOrder, apis: b, events: y } }, extraApis: { tieredData: function(n, e, t) { return { primary: n, menus: e, expansions: t } }, singleData: function(n, e) { return { primary: n, menus: St(n, e), expansions: {} } }, collapseItem: function(n) { return { value: dc(ig()), meta: { text: n } } } } }),
        cg = function(n, e, t, r) { return zd(0, e, 0, r).bind(function(e) { return e.transition.map(function(n) { return { transition: n, route: e } }) }) },
        ag = function(n, e, t) { var r = n.element(); return yr(r, e.destinationAttr) ? On.some({ start: vr(n.element(), e.stateAttr), destination: vr(n.element(), e.destinationAttr) }) : On.none() },
        fg = /* */ Object.freeze({ __proto__: null, findRoute: zd, disableTransition: Ld, getCurrentRoute: ag, jumpTo: Gd, progressTo: function(t, r, o, i) {! function(n, e) { yr(n.element(), e.destinationAttr) && (pr(n.element(), e.stateAttr, vr(n.element(), e.destinationAttr)), br(n.element(), e.destinationAttr)) }(t, r); var n = function(n, e, t, r) { return { start: vr(n.element(), e.stateAttr), destination: r } }(t, r, 0, i);
                cg(t, r, o, n).fold(function() { Gd(t, r, o, i) }, function(n) { Ld(t, r, o); var e = n.transition;
                    Or(t.element(), e.transitionClass), pr(t.element(), r.destinationAttr, i) }) }, getState: function(n, e, t) { var r = n.element(); return yr(r, e.stateAttr) ? On.some(vr(r, e.stateAttr)) : On.none() } }),
        sg = /* */ Object.freeze({ __proto__: null, events: function(o, i) { return er([rr(Ee(), function(t, n) { var r = n.event().raw();
                    ag(t, o).each(function(e) { zd(0, o, 0, e).each(function(n) { n.transition.each(function(n) { r.propertyName === n.property && (Gd(t, o, i, e.destination), o.onTransition(t, e)) }) }) }) }), oo(function(n, e) { Gd(n, o, i, o.initialState) })]) } }),
        lg = [Yt("destinationAttr", "data-transitioning-destination"), Yt("stateAttr", "data-transitioning-state"), Lt("initialState"), Lo("onTransition"), Lo("onFinish"), Gt("routes", Nt(lt.value, Nt(lt.value, At([qt("transition", [Lt("property"), Lt("transitionClass")])]))))],
        dg = mr({ fields: lg, name: "transitioning", active: sg, apis: fg, extra: { createRoutes: function(n) { var r = {}; return Cn(n, function(n, e) { var t = e.split("<->");
                        r[t[0]] = St(t[1], n), r[t[1]] = St(t[0], n) }), r }, createBistate: function(n, e, t) { return Tt([{ key: n, value: St(e, t) }, { key: e, value: St(n, t) }]) }, createTristate: function(n, e, t, r) { return Tt([{ key: n, value: Tt([{ key: e, value: r }, { key: t, value: r }]) }, { key: e, value: Tt([{ key: n, value: r }, { key: t, value: r }]) }, { key: t, value: Tt([{ key: n, value: r }, { key: e, value: r }]) }]) } } }),
        mg = Mi.resolve("scrollable"),
        gg = { register: function(n) { Or(n, mg) }, deregister: function(n) { Er(n, mg) }, scrollable: b(mg) },
        pg = function(n, e, t, r, o) { return { data: { value: n, text: e }, type: "item", dom: { tag: "div", classes: o ? [Mi.resolve("styles-item-is-menu")] : [] }, toggling: { toggleOnExecute: !1, toggleClass: Mi.resolve("format-matches"), selected: t }, itemBehaviours: mo(o ? [] : [Ei(n, function(n, e) {
                    (e ? ki.on : ki.off)(n) })]), components: [{ dom: { tag: "div", attributes: { style: r }, innerHtml: e } }] } },
        hg = function(n, e, t, r) { return { value: n, dom: { tag: "div" }, components: [Ns.sketch({ dom: { tag: "div", classes: [Mi.resolve("styles-collapser")] }, components: r ? [{ dom: { tag: "span", classes: [Mi.resolve("styles-collapse-icon")] } }, Fd(n)] : [Fd(n)], action: function(n) { if (r) { var e = t().get(n);
                            ug.collapseMenu(e) } } }), { dom: { tag: "div", classes: [Mi.resolve("styles-menu-items-container")] }, components: [Zm.parts().items({})], behaviours: mo([im("adhoc-scrollable-menu", [oo(function(n, e) { Bi(n.element(), "overflow-y", "auto"), Bi(n.element(), "-webkit-overflow-scrolling", "touch"), gg.register(n.element()) }), io(function(n) { ci(n.element(), "overflow-y"), ci(n.element(), "-webkit-overflow-scrolling"), gg.deregister(n.element()) })])]) }], items: e, menuBehaviours: mo([dg.config({ initialState: "after", routes: dg.createTristate("before", "current", "after", { transition: { property: "transform", transitionClass: "transitioning" } }) })]) } },
        vg = function(r) { var n = function(r, o) { var n = hg("Styles", [].concat(ue(r.items, function(n) { return pg(Ud(n), n.title, n.isSelected(), n.getPreview(), v(r.expansions, Ud(n))) })), o, !1),
                        e = S(r.menus, function(n, e) { var t = ue(n, function(n) { return pg(Ud(n), n.title, n.isSelected !== undefined && n.isSelected(), n.getPreview !== undefined ? n.getPreview() : "", v(r.expansions, Ud(n))) }); return hg(e, t, o, !0) }),
                        t = gt(e, St("styles", n)); return { tmenu: ug.tieredData("styles", t, r.expansions) } }(r.formats, function() { return e }),
                e = As(ug.sketch({ dom: { tag: "div", classes: [Mi.resolve("styles-menu")] }, components: [], fakeFocus: !0, stayInDom: !0, onExecute: function(n, e) { var t = ol.getValue(e); return r.handle(e, t.value), On.none() }, onEscape: function() { return On.none() }, onOpenMenu: function(n, e) { var t = Tf(n.element());
                        Sf(e.element(), t), dg.jumpTo(e, "current") }, onOpenSubmenu: function(n, e, t) { var r = Tf(n.element()),
                            o = Gi(e.element(), '[role="menu"]').getOrDie("hacky"),
                            i = n.getSystem().getByDom(o).getOrDie();
                        Sf(t.element(), r), dg.progressTo(i, "before"), dg.jumpTo(t, "after"), dg.progressTo(t, "current") }, onCollapseMenu: function(n, e, t) { var r = Gi(e.element(), '[role="menu"]').getOrDie("hacky"),
                            o = n.getSystem().getByDom(r).getOrDie();
                        dg.progressTo(o, "after"), dg.progressTo(t, "current") }, navigateOnHover: !1, highlightImmediately: !0, data: n.tmenu, markers: { backgroundMenu: Mi.resolve("styles-background-menu"), menu: Mi.resolve("styles-menu"), selectedMenu: Mi.resolve("styles-selected-menu"), item: Mi.resolve("styles-item"), selectedItem: Mi.resolve("styles-selected-item") } })); return e.asSpec() },
        yg = function(n) { return _(n, function(n, e) { var t = $d(e); return { menus: gt(n.menus, t.menus), items: [t.item].concat(n.items), expansions: gt(n.expansions, t.expansions) } }, { menus: {}, expansions: {}, items: [] }) },
        bg = { expand: yg },
        xg = function(r, n) {
            function o(n) { return function() { return r.formatter.match(n) } }

            function i(n) { return function() { return r.formatter.getCssText(n) } } var e = Mn(n, "style_formats").getOr(Mm),
                t = function(n) { return ue(n, function(n) { if (v(n, "items")) { var e = t(n.items); return gt(function(n) { return gt(n, { isSelected: b(!1), getPreview: b("") }) }(n), { items: e }) } return v(n, "format") ? function(n) { return gt(n, { isSelected: o(n.format), getPreview: i(n.format) }) }(n) : function(n) { var e = dc(n.title),
                                t = gt(n, { format: e, isSelected: o(e), getPreview: i(e) }); return r.formatter.register(e, t), t }(n) }) }; return t(e) },
        wg = function(t, n, r) { var e = function(e, n) { var t = function(n) { return R(n, function(n) { return n.items === undefined ? !v(n, "format") || e.formatter.canApply(n.format) ? [n] : [] : 0 < t(n.items).length ? [n] : [] }) },
                    r = t(n); return bg.expand(r) }(t, n); return vg({ formats: e, handle: function(n, e) { t.undoManager.transact(function() { ki.isOn(n) ? t.formatter.remove(e) : t.formatter.apply(e) }), r() } }) },
        Sg = ["undo", "bold", "italic", "link", "image", "bullist", "styleselect"],
        Tg = function(n) { return R(n, function(n) { return Zn(n) ? Tg(n) : Wd(n) }) },
        Og = function(e, r) {
            function n(n) { return function() { return zs.forToolbarCommand(r, n) } }

            function t(n) { return function() { return zs.forToolbarStateCommand(r, n) } }

            function o(n, e, t) { return function() { return zs.forToolbarStateAction(r, n, e, t) } }

            function i() { return wg(r, h, function() { r.fire("scrollIntoView") }) }

            function u(n, e) { return { isSupported: function() { var e = r.ui.registry.getAll().buttons; return n.forall(function(n) { return v(e, n) }) }, sketch: e } } var c = n("undo"),
                a = n("redo"),
                f = t("bold"),
                s = t("italic"),
                l = t("underline"),
                d = n("removeformat"),
                m = o("unlink", "link", function() { r.execCommand("unlink", null, !1) }),
                g = o("unordered-list", "ul", function() { r.execCommand("InsertUnorderedList", null, !1) }),
                p = o("ordered-list", "ol", function() { r.execCommand("InsertOrderedList", null, !1) }),
                h = xg(r, r.settings); return { undo: u(On.none(), c), redo: u(On.none(), a), bold: u(On.none(), f), italic: u(On.none(), s), underline: u(On.none(), l), removeformat: u(On.none(), d), link: u(On.none(), function() { return function(e, t) { return zs.forToolbarStateAction(t, "link", "link", function() { var n = _m(e, t);
                            e.setContextToolbar(n), om(t, function() { e.focusToolbar() }), tm.query(t).each(function(n) { t.selection.select(n.dom()) }) }) }(e, r) }), unlink: u(On.none(), m), image: u(On.none(), function() { return ql(r) }), bullist: u(On.some("bullist"), g), numlist: u(On.some("numlist"), p), fontsizeselect: u(On.none(), function() { return function(n, e) { var t = { onChange: function(n) { Bl.apply(e, n) }, getInitialValue: function() { return Bl.get(e) } }; return Cs(n, "font-size", function() { return Is(t) }, e) }(e, r) }), forecolor: u(On.none(), function() { return Il(e, r) }), styleselect: u(On.none(), function() { return zs.forToolbar("style-formats", function(n) { r.fire("toReading"), e.dropup().appear(i, ki.on, n) }, mo([ki.config({ toggleClass: Mi.resolve("toolbar-button-selected"), toggleOnExecute: !1, aria: { mode: "pressed" } }), bi.config({ channels: Tt([Di(Vo.orientationChanged(), ki.off), Di(Vo.dropupDismissed(), ki.off)]) })]), r) }) } },
        kg = function(n, t) { var e = Xd(n),
                r = {}; return R(e, function(n) { var e = !v(r, n) && v(t, n) && t[n].isSupported() ? [t[n].sketch()] : []; return r[n] = !0, e }) },
        Eg = function(n, e, t, r) { n.dom().removeEventListener(e, t, r) },
        Cg = b(!0),
        Dg = tinymce.util.Tools.resolve("tinymce.util.Delay"),
        _g = Qd,
        Mg = function(r, e) { var n = $e.fromDom(r),
                o = null,
                t = Kd(n, "orientationchange", function() { Dg.clearInterval(o); var n = Qd(r);
                    e.onChange(n), i(function() { e.onReady(n) }) }),
                i = function(n) { Dg.clearInterval(o); var e = r.innerHeight,
                        t = 0;
                    o = Dg.setInterval(function() { e !== r.innerHeight ? (Dg.clearInterval(o), n(On.some(r.innerHeight))) : 20 < t && (Dg.clearInterval(o), n(On.none())), t++ }, 50) }; return { onAdjustment: i, destroy: function() { t.unbind() } } },
        Ig = function(n) { var e = G().os.isiOS(),
                t = Qd(n).isPortrait(); return e && !t ? n.screen.height : n.screen.width };

    function Ag(n) { var e = n.raw(); return e.touches === undefined || 1 !== e.touches.length ? On.none() : On.some(e.touches[0]) }

    function Fg(t) { var r = An(On.none()),
            o = An(!1),
            i = function n(t, r) { var o = null; return { cancel: function() { null !== o && (l.clearTimeout(o), o = null) }, schedule: function() { for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
                        o = l.setTimeout(function() { t.apply(null, n), o = null }, r) } } }(function(n) { t.triggerEvent(Ve(), n), o.set(!0) }, 400),
            u = Tt([{ key: ge(), value: function(t) { return Ag(t).each(function(n) { i.cancel(); var e = { x: b(n.clientX), y: b(n.clientY), target: t.target };
                        i.schedule(t), o.set(!1), r.set(On.some(e)) }), On.none() } }, { key: pe(), value: function(n) { return i.cancel(), Ag(n).each(function(e) { r.get().each(function(n) {! function(n, e) { var t = Math.abs(n.clientX - e.x()),
                                    r = Math.abs(n.clientY - e.y()); return 5 < t || 5 < r }(e, n) || r.set(On.none()) }) }), On.none() } }, { key: he(), value: function(e) { i.cancel(); return r.get().filter(function(n) { return an(n.target(), e.target()) }).map(function(n) { return o.get() ? (e.prevent(), !1) : t.triggerEvent(Be(), e) }) } }]); return { fireIfReady: function(e, n) { return Mn(u, n).bind(function(n) { return n(e) }) } } } var Rg = function(t) { var e = Fg({ triggerEvent: function(n, e) { t.onTapContent(e) } }); return { fireTouchstart: function(n) { e.fireIfReady(n, "touchstart") }, onTouchend: function() { return Kd(t.body(), "touchend", function(n) { e.fireIfReady(n, "touchend") }) }, onTouchmove: function() { return Kd(t.body(), "touchmove", function(n) { e.fireIfReady(n, "touchmove") }) } } },
        Bg = 6 <= G().os.version.major,
        Vg = function(r, e, t) {
            function o(n) { return !an(n.start(), n.finish()) || n.soffset() !== n.foffset() }

            function n() { var n = r.doc().dom().hasFocus() && r.getSelection().exists(o);
                t.getByDom(e).each(!0 === (n || Oo(u).filter(function(n) { return "input" === Y(n) }).exists(function(n) { return n.dom().selectionStart !== n.dom().selectionEnd })) ? ki.on : ki.off) } var i = Rg(r),
                u = fn(e),
                c = [Kd(r.body(), "touchstart", function(n) { r.onTouchContent(), i.fireTouchstart(n) }), i.onTouchmove(), i.onTouchend(), Kd(e, "touchstart", function(n) { r.onTouchToolstrip() }), r.onToReading(function() { To(r.body()) }), r.onToEditing(w), r.onScrollToCursor(function(n) { n.preventDefault(), r.getCursorBox().each(function(n) { var e = r.win(),
                            t = n.top() > e.innerHeight || n.bottom() > e.innerHeight ? n.bottom() - e.innerHeight + 50 : 0;
                        0 != t && e.scrollTo(e.pageXOffset, e.pageYOffset + t) }) })].concat(!0 == Bg ? [] : [Kd($e.fromDom(r.win()), "blur", function() { t.getByDom(e).each(ki.off) }), Kd(u, "select", n), Kd(r.doc(), "selectionchange", n)]); return { destroy: function() { C(c, function(n) { n.unbind() }) } } },
        Ng = function(n, e) { var t = parseInt(vr(n, e), 10); return isNaN(t) ? 0 : t };

    function jg(n) { return "img" === Y(n) ? 1 : function(n) { return mp.getOption(n) }(n).fold(function() { return tt(n).length }, function(n) { return n.length }) }

    function Hg(n, e, t) { var r = n.document.createRange(); return function(t, n) { n.fold(function(n) { t.setStartBefore(n.dom()) }, function(n, e) { t.setStart(n.dom(), e) }, function(n) { t.setStartAfter(n.dom()) }) }(r, e),
            function(t, n) { n.fold(function(n) { t.setEndBefore(n.dom()) }, function(n, e) { t.setEnd(n.dom(), e) }, function(n) { t.setEndAfter(n.dom()) }) }(r, t), r }

    function Pg(n, e, t, r, o) { var i = n.document.createRange(); return i.setStart(e.dom(), t), i.setEnd(r.dom(), o), i }

    function zg(n) { return { left: b(n.left), top: b(n.top), right: b(n.right), bottom: b(n.bottom), width: b(n.width), height: b(n.height) } }

    function Lg(n, e, t) { return e($e.fromDom(t.startContainer), t.startOffset, $e.fromDom(t.endContainer), t.endOffset) }

    function Gg(n, e) { return function(n, e) { var t = e.ltr(); return t.collapsed ? e.rtl().filter(function(n) { return !1 === n.collapsed }).map(function(n) { return bp.rtl($e.fromDom(n.endContainer), n.endOffset, $e.fromDom(n.startContainer), n.startOffset) }).getOrThunk(function() { return Lg(0, bp.ltr, t) }) : Lg(0, bp.ltr, t) }(0, function(o, n) { return n.match({ domRange: function(n) { return { ltr: b(n), rtl: On.none } }, relative: function(n, e) { return { ltr: q(function() { return Hg(o, n, e) }), rtl: q(function() { return On.some(Hg(o, e, n)) }) } }, exact: function(n, e, t, r) { return { ltr: q(function() { return Pg(o, n, e, t, r) }), rtl: q(function() { return On.some(Pg(o, t, r, n, e)) }) } } }) }(n, e)) }

    function Ug(n, e) { var t = Y(n); return "input" === t ? hp.after(n) : k(["br", "img"], t) ? 0 === e ? hp.before(n) : hp.after(n) : hp.on(n, e) }

    function $g(n, e, t, r) { var o = function(n, e, t, r) { var o = fn(n).dom().createRange(); return o.setStart(n.dom(), e), o.setEnd(t.dom(), r), o }(n, e, t, r),
            i = an(n, t) && e === r; return o.collapsed && !i }

    function Wg(n, e, t, r, o) {! function(n, e) { On.from(n.getSelection()).each(function(n) { n.removeAllRanges(), n.addRange(e) }) }(n, Pg(n, e, t, r, o)) }

    function Xg(n, e, t, r, o) {! function(u, n) { Gg(u, n).match({ ltr: function(n, e, t, r) { Wg(u, n, e, t, r) }, rtl: function(n, e, t, r) { var o = u.getSelection(); if (o.setBaseAndExtent) o.setBaseAndExtent(n.dom(), e, t.dom(), r);
                    else if (o.extend) try {! function(n, e, t, r, o, i) { e.collapse(t.dom(), r), e.extend(o.dom(), i) }(0, o, n, e, t, r) } catch (i) { Wg(u, t, r, n, e) } else Wg(u, t, r, n, e) } }) }(n, function(n, e, t, r) { var o = Ug(n, e),
                i = Ug(t, r); return yp.relative(o, i) }(e, t, r, o)) }

    function qg(n) { var e = $e.fromDom(n.anchorNode),
            t = $e.fromDom(n.focusNode); return $g(e, n.anchorOffset, t, n.focusOffset) ? On.some(gp.create(e, n.anchorOffset, t, n.focusOffset)) : function(n) { if (0 < n.rangeCount) { var e = n.getRangeAt(0),
                    t = n.getRangeAt(n.rangeCount - 1); return On.some(gp.create($e.fromDom(e.startContainer), e.startOffset, $e.fromDom(t.endContainer), t.endOffset)) } return On.none() }(n) }

    function Yg(n) { return On.from(n.getSelection()).filter(function(n) { return 0 < n.rangeCount }).bind(qg) }

    function Kg(n, e) { return function(n) { var e = n.getClientRects(),
                t = 0 < e.length ? e[0] : n.getBoundingClientRect(); return 0 < t.width || 0 < t.height ? On.some(t).map(zg) : On.none() }(function(i, n) { return Gg(i, n).match({ ltr: function(n, e, t, r) { var o = i.document.createRange(); return o.setStart(n.dom(), e), o.setEnd(t.dom(), r), o }, rtl: function(n, e, t, r) { var o = i.document.createRange(); return o.setStart(t.dom(), r), o.setEnd(n.dom(), e), o } }) }(n, e)) }

    function Jg(n) { return { left: n.left, top: n.top, right: n.right, bottom: n.bottom, width: b(2), height: n.height } }

    function Qg(n) { return { left: b(n.left), top: b(n.top), right: b(n.right), bottom: b(n.bottom), width: b(n.width), height: b(n.height) } }

    function Zg(n, e) { pr(n, Sp, e) }

    function np(n) { return { top: b(n.top()), bottom: b(n.top() + n.height()) } }

    function ep(n, e) { var t = function(n) { return Ng(n, Sp) }(e),
            r = n.innerHeight; return r < t ? On.some(t - r) : On.none() }

    function tp(n) { return On.some($e.fromDom(n.dom().contentWindow.document.body)) }

    function rp(n) { return On.some($e.fromDom(n.dom().contentWindow.document)) }

    function op(n) { return On.from(n.dom().contentWindow) }

    function ip(n) { return op(n).bind(Yg) }

    function up(n) { return n.getFrame() }

    function cp(n, t) { return function(e) { return e[n].getOrThunk(function() { var n = up(e); return function() { return t(n) } })() } }

    function ap(n, e, t, r) { return n[t].getOrThunk(function() { return function(n) { return Kd(e, r, n) } }) }

    function fp(n) { return { left: b(n.left), top: b(n.top), right: b(n.right), bottom: b(n.bottom), width: b(n.width), height: b(n.height) } }

    function sp(t, r) { var o = null; return { cancel: function() { null !== o && (l.clearTimeout(o), o = null) }, throttle: function() { for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
                null !== o && l.clearTimeout(o), o = l.setTimeout(function() { t.apply(null, n), o = null }, r) } } }

    function lp(n) { return "true" === vr(n, Lp) ? function(n) { return 0 < n.dom().scrollLeft || function(n) { n.dom().scrollLeft = 1; var e = 0 !== n.dom().scrollLeft; return n.dom().scrollLeft = 0, e }(n) }(n) : function(n) { return 0 < n.dom().scrollTop || function(n) { n.dom().scrollTop = 1; var e = 0 !== n.dom().scrollTop; return n.dom().scrollTop = 0, e }(n) }(n) } var dp, mp = function zv(t, r) { var e = function(n) { return t(n) ? On.from(n.dom().nodeValue) : On.none() }; return { get: function(n) { if (!t(n)) throw new Error("Can only get " + r + " value of a " + r + " node"); return e(n).getOr("") }, getOption: e, set: function(n, e) { if (!t(n)) throw new Error("Can only set raw " + r + " value of a " + r + " node");
                    n.dom().nodeValue = e } } }(Ke, "text"),
        gp = { create: Q("start", "soffset", "finish", "foffset") },
        pp = dt([{ before: ["element"] }, { on: ["element", "offset"] }, { after: ["element"] }]),
        hp = { before: pp.before, on: pp.on, after: pp.after, cata: function(n, e, t, r) { return n.fold(e, t, r) }, getStart: function(n) { return n.fold(y, y, y) } },
        vp = dt([{ domRange: ["rng"] }, { relative: ["startSitu", "finishSitu"] }, { exact: ["start", "soffset", "finish", "foffset"] }]),
        yp = { domRange: vp.domRange, relative: vp.relative, exact: vp.exact, exactFromRange: function(n) { return vp.exact(n.start(), n.soffset(), n.finish(), n.foffset()) }, getWin: function(n) { return function(n) { return $e.fromDom(n.dom().ownerDocument.defaultView) }(function(n) { return n.match({ domRange: function(n) { return $e.fromDom(n.startContainer) }, relative: function(n, e) { return hp.getStart(n) }, exact: function(n, e, t, r) { return n } }) }(n)) }, range: gp.create },
        bp = dt([{ ltr: ["start", "soffset", "finish", "foffset"] }, { rtl: ["start", "soffset", "finish", "foffset"] }]),
        xp = (bp.ltr, bp.rtl, function(n) { var e = n.getSelection(); return e !== undefined && 0 < e.rangeCount ? function(t) { if (t.collapsed) { var r = $e.fromDom(t.startContainer); return sn(r).bind(function(n) { var e = yp.exact(r, t.startOffset, n, jg(n)); return Kg(t.startContainer.ownerDocument.defaultView, e).map(Jg).map(j) }).getOr([]) } return ue(t.getClientRects(), Qg) }(e.getRangeAt(0)) : [] }),
        wp = function(n) { n.focus(); var e = $e.fromDom(n.document.body);
            (Oo().exists(function(n) { return k(["input", "textarea"], Y(n)) }) ? function(n) { Dg.setTimeout(function() { n() }, 0) } : t)(function() { Oo().each(To), So(e) }) },
        Sp = "data-" + Mi.resolve("last-outer-height"),
        Tp = function(n, r) { var e = $e.fromDom(r.document.body),
                t = Kd($e.fromDom(n), "resize", function() { ep(n, e).each(function(t) {
                        (function(n) { var e = xp(n); return 0 < e.length ? On.some(e[0]).map(np) : On.none() })(r).each(function(n) { var e = function(n, e, t) { return e.top() > n.innerHeight || e.bottom() > n.innerHeight ? Math.min(t, e.bottom() - n.innerHeight + 50) : 0 }(r, n, t);
                            0 !== e && r.scrollTo(r.pageXOffset, r.pageYOffset + e) }) }), Zg(e, n.innerHeight) });
            Zg(e, n.innerHeight); return { toEditing: function() { wp(r) }, destroy: function() { t.unbind() } } },
        Op = { getBody: cp("getBody", tp), getDoc: cp("getDoc", rp), getWin: cp("getWin", op), getSelection: cp("getSelection", ip), getFrame: up, getActiveApi: function(c) { var a = up(c); return tp(a).bind(function(u) { return rp(a).bind(function(i) { return op(a).map(function(o) { var n = $e.fromDom(i.dom().documentElement),
                                e = c.getCursorBox.getOrThunk(function() { return function() { return function(n) { return Yg(n).map(function(n) { return yp.exact(n.start(), n.soffset(), n.finish(), n.foffset()) }) }(o).bind(function(n) { return Kg(o, n).orThunk(function() { return function(n) { return Yg(n).filter(function(n) { return an(n.start(), n.finish()) && n.soffset() === n.foffset() }).bind(function(n) { var e = n.start().dom().getBoundingClientRect(); return 0 < e.width || 0 < e.height ? On.some(e).map(fp) : On.none() }) }(o) }) }) } }),
                                t = c.setSelection.getOrThunk(function() { return function(n, e, t, r) { Xg(o, n, e, t, r) } }),
                                r = c.clearSelection.getOrThunk(function() { return function() {! function(n) { n.getSelection().removeAllRanges() }(o) } }); return { body: b(u), doc: b(i), win: b(o), html: b(n), getSelection: d(ip, a), setSelection: t, clearSelection: r, frame: b(a), onKeyup: ap(c, i, "onKeyup", "keyup"), onNodeChanged: ap(c, i, "onNodeChanged", "SelectionChange"), onDomChanged: c.onDomChanged, onScrollToCursor: c.onScrollToCursor, onScrollToElement: c.onScrollToElement, onToReading: c.onToReading, onToEditing: c.onToEditing, onToolbarScrollStart: c.onToolbarScrollStart, onTouchContent: c.onTouchContent, onTapContent: c.onTapContent, onTouchToolstrip: c.onTouchToolstrip, getCursorBox: e } }) }) }) } },
        kp = "data-ephox-mobile-fullscreen-style",
        Ep = "position:absolute!important;",
        Cp = "top:0!important;left:0!important;margin:0!important;padding:0!important;width:100%!important;height:100%!important;overflow:visible!important;",
        Dp = G().os.isAndroid(),
        _p = function(n, e) {
            function t(r) { return function(n) { var e = vr(n, "style"),
                        t = e === undefined ? "no-styles" : e.trim();
                    t !== r && (pr(n, kp, t), pr(n, "style", r)) } } var r = function(n, e, t) { return Hi(n, function(n) { return rn(n, e) }, t) }(n, "*"),
                o = R(r, function(n) { return function(n, e) { return Pi(n, function(n) { return rn(n, e) }) }(n, "*") }),
                i = function(n) { var e = ii(n, "background-color"); return e !== undefined && "" !== e ? "background-color:" + e + "!important" : "background-color:rgb(255,255,255)!important;" }(e);
            C(o, t("display:none!important;")), C(r, t(Ep + Cp + i)), t((!0 === Dp ? "" : Ep) + Cp + i)(n) },
        Mp = function() { var n = function(n) { return un(n) }("[" + kp + "]");
            C(n, function(n) { var e = vr(n, kp); "no-styles" !== e ? pr(n, "style", e) : br(n, "style"), br(n, kp) }) },
        Ip = function() { var e = Li("head").getOrDie(),
                n = Li('meta[name="viewport"]').getOrThunk(function() { var n = $e.fromTag("meta"); return pr(n, "name", "viewport"), rt(e, n), n }),
                t = vr(n, "content"); return { maximize: function() { pr(n, "content", "width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0") }, restore: function() { t !== undefined && null !== t && 0 < t.length ? pr(n, "content", t) : pr(n, "content", "user-scalable=yes") } } },
        Ap = function(e, n) { var t = Ip(),
                r = md(),
                o = md(); return { enter: function() { n.hide(), Or(e.container, Mi.resolve("fullscreen-maximized")), Or(e.container, Mi.resolve("android-maximized")), t.maximize(), Or(e.body, Mi.resolve("android-scroll-reload")), r.set(Tp(e.win, Op.getWin(e.editor).getOrDie("no"))), Op.getActiveApi(e.editor).each(function(n) { _p(e.container, n.body()), o.set(Vg(n, e.toolstrip, e.alloy)) }) }, exit: function() { t.restore(), n.show(), Er(e.container, Mi.resolve("fullscreen-maximized")), Er(e.container, Mi.resolve("android-maximized")), Mp(), Er(e.body, Mi.resolve("android-scroll-reload")), o.clear(), r.clear() } } },
        Fp = function(n, e) { var t = As(fm.sketch({ dom: Hs('<div aria-hidden="true" class="${prefix}-mask-tap-icon"></div>'), containerBehaviours: mo([ki.config({ toggleClass: Mi.resolve("mask-tap-icon-selected"), toggleOnExecute: !1 })]) })),
                r = function(t, r) { var o = null; return { cancel: function() { null !== o && (l.clearTimeout(o), o = null) }, throttle: function() { for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
                            null === o && (o = l.setTimeout(function() { t.apply(null, n), o = null }, r)) } } }(n, 200); return fm.sketch({ dom: Hs('<div class="${prefix}-disabled-mask"></div>'), components: [fm.sketch({ dom: Hs('<div class="${prefix}-content-container"></div>'), components: [Ns.sketch({ dom: Hs('<div class="${prefix}-content-tap-section"></div>'), components: [t.asSpec()], action: function(n) { r.throttle() }, buttonBehaviours: mo([ki.config({ toggleClass: Mi.resolve("mask-tap-icon-selected") })]) })] })] }) },
        Rp = Yr([Ut("editor", [Lt("getFrame"), $t("getBody"), $t("getDoc"), $t("getWin"), $t("getSelection"), $t("setSelection"), $t("clearSelection"), $t("cursorSaver"), $t("onKeyup"), $t("onNodeChanged"), $t("getCursorBox"), Lt("onDomChanged"), Yt("onTouchContent", w), Yt("onTapContent", w), Yt("onTouchToolstrip", w), Yt("onScrollToCursor", b({ unbind: w })), Yt("onScrollToElement", b({ unbind: w })), Yt("onToEditing", b({ unbind: w })), Yt("onToReading", b({ unbind: w })), Yt("onToolbarScrollStart", y)]), Lt("socket"), Lt("toolstrip"), Lt("dropup"), Lt("toolbar"), Lt("container"), Lt("alloy"), Jt("win", function(n) { return fn(n.socket).dom().defaultView }), Jt("body", function(n) { return $e.fromDom(n.socket.dom().ownerDocument.body) }), Yt("translate", y), Yt("setReadOnly", w), Yt("readOnlyOnInit", b(!0))]),
        Bp = function(n) { var e = Pt("Getting AndroidWebapp schema", Rp, n);
            Bi(e.toolstrip, "width", "100%"); var t = Hm(Fp(function() { e.setReadOnly(e.readOnlyOnInit()), o.enter() }, e.translate));
            e.alloy.add(t); var r = { show: function() { e.alloy.add(t) }, hide: function() { e.alloy.remove(t) } };
            rt(e.container, t.element()); var o = Ap(e, r); return { setReadOnly: e.setReadOnly, refreshStructure: w, enter: o.enter, exit: o.exit, destroy: w } },
        Vp = b([Lt("dom"), Yt("shell", !0), uc("toolbarBehaviours", [eg])]),
        Np = b([Ja({ name: "groups", overrides: function() { return { behaviours: mo([eg.config({})]) } } })]),
        jp = lf({ name: "Toolbar", configFields: Vp(), partFields: Np(), factory: function(e, n, t, r) { var o = function(n) { return e.shell ? On.some(n) : bc(n, e, "groups") },
                    i = e.shell ? { behaviours: [eg.config({})], components: [] } : { behaviours: [], components: n }; return { uid: e.uid, dom: e.dom, components: i.components, behaviours: ac(e.toolbarBehaviours, i.behaviours), apis: { setGroups: function(n, e) { o(n).fold(function() { throw l.console.error("Toolbar was defined to not be a shell, but no groups container was specified in components"), new Error("Toolbar was defined to not be a shell, but no groups container was specified in components") }, function(n) { eg.set(n, e) }) } }, domModification: { attributes: { role: "group" } } } }, apis: { setGroups: function(n, e, t) { n.setGroups(e, t) } } }),
        Hp = b([Lt("items"), (dp = ["itemSelector"], Ut("markers", ue(dp, Lt))), uc("tgroupBehaviours", [Da])]),
        Pp = b([Qa({ name: "items", unit: "item" })]),
        zp = lf({ name: "ToolbarGroup", configFields: Hp(), partFields: Pp(), factory: function(n, e, t, r) { return { uid: n.uid, dom: n.dom, components: e, behaviours: ac(n.tgroupBehaviours, [Da.config({ mode: "flow", selector: n.markers.itemSelector })]), domModification: { attributes: { role: "toolbar" } } } } }),
        Lp = "data-" + Mi.resolve("horizontal-scroll"),
        Gp = { exclusive: function(n, e) { return Kd(n, "touchmove", function(n) { $i(n.target(), e).filter(lp).fold(function() { n.raw().preventDefault() }, w) }) }, markAsHorizontal: function(n) { pr(n, Lp, "true") } };

    function Up() {
        function e(n) { var e = !0 === n.scrollable ? "${prefix}-toolbar-scrollable-group" : ""; return { dom: Hs('<div aria-label="' + n.label + '" class="${prefix}-toolbar-group ' + e + '"></div>'), tgroupBehaviours: mo([im("adhoc-scrollable-toolbar", !0 === n.scrollable ? [uo(function(n, e) { Bi(n.element(), "overflow-x", "auto"), Gp.markAsHorizontal(n.element()), gg.register(n.element()) })] : [])]), components: [fm.sketch({ components: [zp.parts().items({})] })], markers: { itemSelector: "." + Mi.resolve("toolbar-group-item") }, items: n.items } }

        function t() { jp.setGroups(r, o.get()), ki.off(r) } var r = Hm(jp.sketch({ dom: Hs('<div class="${prefix}-toolbar"></div>'), components: [jp.parts().groups({})], toolbarBehaviours: mo([ki.config({ toggleClass: Mi.resolve("context-toolbar"), toggleOnExecute: !1, aria: { mode: "none" } }), Da.config({ mode: "cyclic" })]), shell: !0 })),
            n = Hm(fm.sketch({ dom: { classes: [Mi.resolve("toolstrip")] }, components: [Pm(r)], containerBehaviours: mo([ki.config({ toggleClass: Mi.resolve("android-selection-context-toolbar"), toggleOnExecute: !1 })]) })),
            o = An([]); return { wrapper: b(n), toolbar: b(r), createGroups: function(n) { return ue(n, i(zp.sketch, e)) }, setGroups: function(n) { o.set(n), t() }, setContextToolbar: function(n) { ki.on(r), jp.setGroups(r, n) }, restoreToolbar: function() { ki.isOn(r) && t() }, refresh: function() {}, focus: function() { Da.focusIn(r) } } }

    function $p(n, e) { eg.append(n, Pm(e)) }

    function Wp(n, e) { eg.remove(n, e) }

    function Xp(e, n) { return n.getAnimationRoot.fold(function() { return e.element() }, function(n) { return n(e) }) }

    function qp(n) { return n.dimension.property }

    function Yp(n, e) { return n.dimension.getDimension(e) }

    function Kp(n, e) { var t = Xp(n, e);
        Ed(t, [e.shrinkingClass, e.growingClass]) }

    function Jp(n, e) { Er(n.element(), e.openClass), Or(n.element(), e.closedClass), Bi(n.element(), qp(e), "0px"), ai(n.element()) }

    function Qp(n, e) { Er(n.element(), e.closedClass), Or(n.element(), e.openClass), ci(n.element(), qp(e)) }

    function Zp(n, e, t, r) { t.setCollapsed(), Bi(n.element(), qp(e), Yp(e, n.element())), ai(n.element()), Kp(n, e), Jp(n, e), e.onStartShrink(n), e.onShrunk(n) }

    function nh(n, e, t, r) { var o = r.getOrThunk(function() { return Yp(e, n.element()) });
        t.setCollapsed(), Bi(n.element(), qp(e), o), ai(n.element()); var i = Xp(n, e);
        Er(i, e.growingClass), Or(i, e.shrinkingClass), Jp(n, e), e.onStartShrink(n) }

    function eh(n, e, t) { var r = Yp(e, n.element());
        ("0px" === r ? Zp : nh)(n, e, t, On.some(r)) }

    function th(n, e, t) { var r = Xp(n, e),
            o = Cr(r, e.shrinkingClass),
            i = Yp(e, n.element());
        Qp(n, e); var u = Yp(e, n.element());
        (o ? function() { Bi(n.element(), qp(e), i), ai(n.element()) } : function() { Jp(n, e) })(), Er(r, e.shrinkingClass), Or(r, e.growingClass), Qp(n, e), Bi(n.element(), qp(e), u), t.setExpanded(), e.onStartGrow(n) }

    function rh(n, e, t) { var r = Xp(n, e); return !0 === Cr(r, e.growingClass) }

    function oh(n, e, t) { var r = Xp(n, e); return !0 === Cr(r, e.shrinkingClass) }

    function ih(e, t) { var r = Hm(fm.sketch({ dom: { tag: "div", classes: [Mi.resolve("dropup")] }, components: [], containerBehaviours: mo([eg.config({}), yh.config({ closedClass: Mi.resolve("dropup-closed"), openClass: Mi.resolve("dropup-open"), shrinkingClass: Mi.resolve("dropup-shrinking"), growingClass: Mi.resolve("dropup-growing"), dimension: { property: "height" }, onShrunk: function(n) { e(), t(), eg.set(n, []) }, onGrown: function(n) { e(), t() } }), Ci(function(n, e) { o(w) })]) })),
            o = function(n) { l.window.requestAnimationFrame(function() { n(), yh.shrink(r) }) }; return { appear: function(n, e, t) {!0 === yh.hasShrunk(r) && !1 === yh.isTransitioning(r) && l.window.requestAnimationFrame(function() { e(t), eg.set(r, [n()]), yh.grow(r) }) }, disappear: o, component: b(r), element: r.element } }

    function uh(n) { return 8 === n.raw().which && !k(["input", "textarea"], Y(n.target())) && ! function(n, e, t) { return $i(n, e, t).isSome() }(n.target(), '[contenteditable="true"]') }

    function ch(e, n) { var t = Pt("Getting GUI events settings", xh, n),
            r = Fg(t),
            o = ue(["touchstart", "touchmove", "touchend", "touchcancel", "gesturestart", "mousedown", "mouseup", "mouseover", "mousemove", "mouseout", "click"].concat(["selectstart", "input", "contextmenu", "change", "transitionend", "drag", "dragstart", "dragend", "dragenter", "dragleave", "dragover", "drop", "keyup"]), function(n) { return Kd(e, n, function(e) { r.fireIfReady(e, n).each(function(n) { n && e.kill() }), t.triggerEvent(n, e) && e.kill() }) }),
            i = An(On.none()),
            u = Kd(e, "paste", function(e) { r.fireIfReady(e, "paste").each(function(n) { n && e.kill() }), t.triggerEvent("paste", e) && e.kill(), i.set(On.some(l.setTimeout(function() { t.triggerEvent(Ie(), e) }, 0))) }),
            c = Kd(e, "keydown", function(n) { t.triggerEvent("keydown", n) ? n.kill() : !0 === t.stopBackspace && uh(n) && n.prevent() }),
            a = function(n, e) { return bh ? Jd(n, "focus", e) : Kd(n, "focusin", e) }(e, function(n) { t.triggerEvent("focusin", n) && n.kill() }),
            f = An(On.none()),
            s = function(n, e) { return bh ? Jd(n, "blur", e) : Kd(n, "focusout", e) }(e, function(n) { t.triggerEvent("focusout", n) && n.kill(), f.set(On.some(l.setTimeout(function() { t.triggerEvent(Me(), n) }, 0))) }); return { unbind: function() { C(o, function(n) { n.unbind() }), c.unbind(), a.unbind(), s.unbind(), u.unbind(), i.get().each(l.clearTimeout), f.get().each(l.clearTimeout) } } }

    function ah(n, e) { var t = Mn(n, "target").map(function(n) { return n() }).getOr(e); return An(t) }

    function fh(n, r, e, t, o, i) { var u = n(r, t),
            c = function(n, e) { var t = An(!1),
                    r = An(!1); return { stop: function() { t.set(!0) }, cut: function() { r.set(!0) }, isStopped: t.get, isCut: r.get, event: b(n), setSource: e.set, getSource: e.get } }(e, o); return u.fold(function() { return i.logEventNoHandlers(r, t), wh.complete() }, function(e) { var t = e.descHandler(); return bd(t)(c), c.isStopped() ? (i.logEventStopped(r, e.element(), t.purpose()), wh.stopped()) : c.isCut() ? (i.logEventCut(r, e.element(), t.purpose()), wh.complete()) : sn(e.element()).fold(function() { return i.logNoParent(r, e.element(), t.purpose()), wh.complete() }, function(n) { return i.logEventResponse(r, e.element(), t.purpose()), wh.resume(n) }) }) }

    function sh(n, e, t) { var r = function(n) { var e = An(!1); return { stop: function() { e.set(!0) }, cut: w, isStopped: e.get, isCut: b(!1), event: b(n), setSource: o("Cannot set source of a broadcasted event"), getSource: o("Cannot get source of a broadcasted event") } }(e); return C(n, function(n) { var e = n.descHandler();
            bd(e)(r) }), r.isStopped() } var lh, dh = function(n) { return Hm(Ns.sketch({ dom: Hs('<div class="${prefix}-mask-edit-icon ${prefix}-icon"></div>'), action: function() { n.run(function(n) { n.setReadOnly(!1) }) } })) },
        mh = function() { return Hm(fm.sketch({ dom: Hs('<div class="${prefix}-editor-socket"></div>'), components: [], containerBehaviours: mo([eg.config({})]) })) },
        gh = function(n, e, t, r) {
            (!0 === t ? bo.toAlpha : bo.toOmega)(r), (t ? $p : Wp)(n, e) },
        ph = /* */ Object.freeze({ __proto__: null, refresh: function(n, e, t) { if (t.isExpanded()) { ci(n.element(), qp(e)); var r = Yp(e, n.element());
                    Bi(n.element(), qp(e), r) } }, grow: function(n, e, t) { t.isExpanded() || th(n, e, t) }, shrink: function(n, e, t) { t.isExpanded() && eh(n, e, t) }, immediateShrink: function(n, e, t) { t.isExpanded() && Zp(n, e, t, On.none()) }, hasGrown: function(n, e, t) { return t.isExpanded() }, hasShrunk: function(n, e, t) { return t.isCollapsed() }, isGrowing: rh, isShrinking: oh, isTransitioning: function(n, e, t) { return !0 === rh(n, e) || !0 === oh(n, e) }, toggleGrow: function(n, e, t) {
                (t.isExpanded() ? eh : th)(n, e, t) }, disableTransitions: Kp }),
        hh = /* */ Object.freeze({ __proto__: null, exhibit: function(n, e) { var t = e.expanded; return fr(t ? { classes: [e.openClass], styles: {} } : { classes: [e.closedClass], styles: St(e.dimension.property, "0px") }) }, events: function(t, r) { return er([function(n, e) { return ir(n)(e) }(Ee(), function(n, e) { e.event().raw().propertyName === t.dimension.property && (Kp(n, t), r.isExpanded() && ci(n.element(), t.dimension.property), (r.isExpanded() ? t.onGrown : t.onShrunk)(n)) })]) } }),
        vh = [Lt("closedClass"), Lt("openClass"), Lt("shrinkingClass"), Lt("growingClass"), $t("getAnimationRoot"), Lo("onShrunk"), Lo("onStartShrink"), Lo("onGrown"), Lo("onStartGrow"), Yt("expanded", !1), Gt("dimension", zt("property", { width: [Wo("property", "width"), Wo("getDimension", function(n) { return Tf(n) + "px" })], height: [Wo("property", "height"), Wo("getDimension", function(n) { return ji(n) + "px" })] }))],
        yh = mr({ fields: vh, name: "sliding", active: hh, apis: ph, state: /* */ Object.freeze({ __proto__: null, init: function(n) { var e = An(n.expanded); return lo({ isExpanded: function() { return !0 === e.get() }, isCollapsed: function() { return !1 === e.get() }, setCollapsed: d(e.set, !1), setExpanded: d(e.set, !0), readState: function() { return "expanded: " + e.get() } }) } }) }),
        bh = G().browser.isFirefox(),
        xh = At([(lh = "triggerEvent", Gt(lh, to)), Yt("stopBackspace", !0)]),
        wh = dt([{ stopped: [] }, { resume: ["element"] }, { complete: [] }]),
        Sh = function(e, t, r, n, o, i) { return fh(e, t, r, n, o, i).fold(function() { return !0 }, function(n) { return Sh(e, t, r, n, o, i) }, function() { return !1 }) },
        Th = function(n, e, t, r, o) { var i = ah(t, r); return Sh(n, e, t, r, i, o) },
        Oh = Q("element", "descHandler"),
        kh = function(n, e) { return { id: b(n), descHandler: b(e) } };

    function Eh() { var i = {}; return { registerId: function(r, o, n) { Cn(n, function(n, e) { var t = i[e] !== undefined ? i[e] : {};
                    t[o] = Bm(n, r), i[e] = t }) }, unregisterId: function(t) { Cn(i, function(n, e) { n.hasOwnProperty(t) && delete n[t] }) }, filterByType: function(n) { return Mn(i, n).map(function(n) { return _n(n, function(n, e) { return kh(e, n) }) }).getOr([]) }, find: function(n, e, t) { var r = Mn(i, e); return ro(t, function(n) { return function(n, t) { return af(t).fold(function() { return On.none() }, function(e) { return n.bind(function(n) { return Mn(n, e) }).map(function(n) { return Oh(t, n) }) }) }(r, n) }, n) } } }

    function Ch() {
        function r(n) { var e = n.element(); return af(e).fold(function() { return function(n, e) { var t = dc(of + n); return cf(e, t), t }("uid-", n.element()) }, function(n) { return n }) } var o = Eh(),
            i = {},
            u = function(n) { af(n.element()).each(function(n) { delete i[n], o.unregisterId(n) }) }; return { find: function(n, e, t) { return o.find(n, e, t) }, filter: function(n) { return o.filterByType(n) }, register: function(n) { var e = r(n);
                v(i, e) && function(n, e) { var t = i[e]; if (t !== n) throw new Error('The tagId "' + e + '" is already used by: ' + Mo(t.element()) + "\nCannot use it for: " + Mo(n.element()) + "\nThe conflicting element is" + (J(t.element()) ? " " : " not ") + "already in the DOM");
                    u(n) }(n, e); var t = [n];
                o.registerId(t, e, n.events()), i[e] = n }, unregister: u, getById: function(n) { return Mn(i, n) } } } var Dh = function(t) {
            function r(e) { return sn(t.element()).fold(function() { return !0 }, function(n) { return an(e, n) }) }

            function o(n, e) { return u.find(r, n, e) }

            function i(t) { var n = u.filter(Ae());
                C(n, function(n) { var e = n.descHandler();
                    bd(e)(t) }) } var u = Ch(),
                n = ch(t.element(), { triggerEvent: function(e, t) { return Po(e, t.target(), function(n) { return function(n, e, t, r) { var o = t.target(); return Th(n, e, t, o, r) }(o, e, t, n) }) } }),
                c = { debugInfo: b("real"), triggerEvent: function(e, t, r) { Po(e, t, function(n) { return Th(o, e, r, t, n) }) }, triggerFocus: function(e, t) { af(e).fold(function() { So(e) }, function(n) { Po(_e(), e, function(n) { return function(n, e, t, r, o) { var i = ah(t, r);
                                    fh(n, e, t, r, i, o) }(o, _e(), { originator: b(t), kill: w, prevent: w, target: b(e) }, e, n), !1 }) }) }, triggerEscape: function(n, e) { c.triggerEvent("keydown", n.element(), e.event()) }, getByUid: function(n) { return g(n) }, getByDom: function(n) { return p(n) }, build: Hm, addToGui: function(n) { f(n) }, removeFromGui: function(n) { s(n) }, addToWorld: function(n) { e(n) }, removeFromWorld: function(n) { a(n) }, broadcast: function(n) { l(n) }, broadcastOn: function(n, e) { d(n, e) }, broadcastEvent: function(n, e) { m(n, e) }, isConnected: b(!0) },
                e = function(n) { n.connect(c), Ke(n.element()) || (u.register(n), C(n.components(), e), c.triggerEvent(Ne(), n.element(), { target: b(n.element()) })) },
                a = function(n) { Ke(n.element()) || (C(n.components(), a), u.unregister(n)), n.disconnect() },
                f = function(n) {! function(n, e) { ct(n, e, rt) }(t, n) },
                s = function(n) { bn(n) },
                l = function(n) { i({ universal: b(!0), data: b(n) }) },
                d = function(n, e) { i({ universal: b(!1), channels: b(n), data: b(e) }) },
                m = function(n, e) { var t = u.filter(n); return sh(t, e) },
                g = function(n) { return u.getById(n).fold(function() { return lt.error(new Error('Could not find component with uid: "' + n + '" in system.')) }, lt.value) },
                p = function(n) { var e = af(n).getOr("not found"); return g(e) }; return e(t), { root: b(t), element: t.element, destroy: function() { n.unbind(), ot(t.element()) }, add: f, remove: s, getByUid: g, getByDom: p, addToWorld: e, removeFromWorld: a, broadcast: l, broadcastOn: d, broadcastEvent: m } },
        _h = b(Mi.resolve("readonly-mode")),
        Mh = b(Mi.resolve("edit-mode"));

    function Ih(n) { var e = Hm(fm.sketch({ dom: { classes: [Mi.resolve("outer-container")].concat(n.classes) }, containerBehaviours: mo([bo.config({ alpha: _h(), omega: Mh() })]) })); return Dh(e) } var Ah = function(n, e) { var t = $e.fromTag("input");
            oi(t, { opacity: "0", position: "absolute", top: "-1000px", left: "-1000px" }), rt(n, t), So(t), e(t), ot(t) },
        Fh = function(n) { var e = n.getSelection(); if (0 < e.rangeCount) { var t = e.getRangeAt(0),
                    r = n.document.createRange();
                r.setStart(t.startContainer, t.startOffset), r.setEnd(t.endContainer, t.endOffset), e.removeAllRanges(), e.addRange(r) } },
        Rh = function(n, e) { Oo().each(function(n) { an(n, e) || To(n) }), n.focus(), So($e.fromDom(n.document.body)), Fh(n) },
        Bh = { stubborn: function(n, e, t, r) {
                function o() { Rh(e, r) } var i = Kd(t, "keydown", function(n) { k(["input", "textarea"], Y(n.target())) || o() }); return { toReading: function() { Ah(n, To) }, toEditing: o, onToolbarTouch: function() {}, destroy: function() { i.unbind() } } }, timid: function(n, e, t, r) {
                function o() { To(r) } return { toReading: function() { o() }, toEditing: function() { Rh(e, r) }, onToolbarTouch: function() { o() }, destroy: w } } },
        Vh = function(e, r, t, o, n) {
            function i() { r.run(function(n) { n.refreshSelection() }) }

            function u(n, e) { var t = n - o.dom().scrollTop;
                r.run(function(n) { n.scrollIntoView(t, t + e) }) }

            function c() { r.run(function(n) { n.clearSelection() }) }

            function a() { e.getCursorBox().each(function(n) { u(n.top(), n.height()) }), r.run(function(n) { n.syncHeight() }) } var f = Rg(e),
                s = sp(a, 300),
                l = [e.onKeyup(function() { c(), s.throttle() }), e.onNodeChanged(i), e.onDomChanged(s.throttle), e.onDomChanged(i), e.onScrollToCursor(function(n) { n.preventDefault(), s.throttle() }), e.onScrollToElement(function(n) { n.element(), u(r, o) }), e.onToEditing(function() { r.run(function(n) { n.toEditing() }) }), e.onToReading(function() { r.run(function(n) { n.toReading() }) }), Kd(e.doc(), "touchend", function(n) { an(e.html(), n.target()) || an(e.body(), n.target()) }), Kd(t, "transitionend", function(n) { "height" === n.raw().propertyName && function() { var e = ji(t);
                        r.run(function(n) { n.setViewportOffset(e) }), i(), a() }() }), Jd(t, "touchstart", function(n) { r.run(function(n) { n.highlightSelection() }),
                        function(e) { r.run(function(n) { n.onToolbarTouch(e) }) }(n), e.onTouchToolstrip() }), Kd(e.body(), "touchstart", function(n) { c(), e.onTouchContent(), f.fireTouchstart(n) }), f.onTouchmove(), f.onTouchend(), Kd(e.body(), "click", function(n) { n.kill() }), Kd(t, "touchmove", function() { e.onToolbarScrollStart() })]; return { destroy: function() { C(l, function(n) { n.unbind() }) } } }; var Nh, jh, Hh, Ph, zh = {},
        Lh = { exports: zh };
    Nh = undefined, jh = zh, Hh = Lh, Ph = undefined,
        function(n) { "object" == typeof jh && void 0 !== Hh ? Hh.exports = n() : "function" == typeof Nh && Nh.amd ? Nh([], n) : ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).EphoxContactWrapper = n() }(function() { return function s(i, u, c) {
                function a(e, n) { if (!u[e]) { if (!i[e]) { var t = "function" == typeof Ph && Ph; if (!n && t) return t(e, !0); if (f) return f(e, !0); var r = new Error("Cannot find module '" + e + "'"); throw r.code = "MODULE_NOT_FOUND", r } var o = u[e] = { exports: {} };
                        i[e][0].call(o.exports, function(n) { return a(i[e][1][n] || n) }, o, o.exports, s, i, u, c) } return u[e].exports } for (var f = "function" == typeof Ph && Ph, n = 0; n < c.length; n++) a(c[n]); return a }({ 1: [function(n, e, t) { var r, o, i = e.exports = {};

                    function u() { throw new Error("setTimeout has not been defined") }

                    function c() { throw new Error("clearTimeout has not been defined") }

                    function a(n) { if (r === setTimeout) return setTimeout(n, 0); if ((r === u || !r) && setTimeout) return r = setTimeout, setTimeout(n, 0); try { return r(n, 0) } catch (e) { try { return r.call(null, n, 0) } catch (e) { return r.call(this, n, 0) } } }! function() { try { r = "function" == typeof setTimeout ? setTimeout : u } catch (n) { r = u } try { o = "function" == typeof clearTimeout ? clearTimeout : c } catch (n) { o = c } }(); var f, s = [],
                        l = !1,
                        d = -1;

                    function m() { l && f && (l = !1, f.length ? s = f.concat(s) : d = -1, s.length && g()) }

                    function g() { if (!l) { var n = a(m);
                            l = !0; for (var e = s.length; e;) { for (f = s, s = []; ++d < e;) f && f[d].run();
                                d = -1, e = s.length }
                            f = null, l = !1,
                                function t(n) { if (o === clearTimeout) return clearTimeout(n); if ((o === c || !o) && clearTimeout) return o = clearTimeout, clearTimeout(n); try { return o(n) } catch (e) { try { return o.call(null, n) } catch (e) { return o.call(this, n) } } }(n) } }

                    function p(n, e) { this.fun = n, this.array = e }

                    function h() {}
                    i.nextTick = function(n) { var e = new Array(arguments.length - 1); if (1 < arguments.length)
                            for (var t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
                        s.push(new p(n, e)), 1 !== s.length || l || a(g) }, p.prototype.run = function() { this.fun.apply(null, this.array) }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = h, i.addListener = h, i.once = h, i.off = h, i.removeListener = h, i.removeAllListeners = h, i.emit = h, i.prependListener = h, i.prependOnceListener = h, i.listeners = function(n) { return [] }, i.binding = function(n) { throw new Error("process.binding is not supported") }, i.cwd = function() { return "/" }, i.chdir = function(n) { throw new Error("process.chdir is not supported") }, i.umask = function() { return 0 } }, {}], 2: [function(n, l, e) {
                    (function(e) {
                        function r() {}

                        function i(n) { if ("object" != typeof this) throw new TypeError("Promises must be constructed via new"); if ("function" != typeof n) throw new TypeError("not a function");
                            this._state = 0, this._handled = !1, this._value = undefined, this._deferreds = [], s(n, this) }

                        function o(r, o) { for (; 3 === r._state;) r = r._value;
                            0 !== r._state ? (r._handled = !0, i._immediateFn(function() { var n = 1 === r._state ? o.onFulfilled : o.onRejected; if (null !== n) { var e; try { e = n(r._value) } catch (t) { return void c(o.promise, t) }
                                    u(o.promise, e) } else(1 === r._state ? u : c)(o.promise, r._value) })) : r._deferreds.push(o) }

                        function u(n, e) { try { if (e === n) throw new TypeError("A promise cannot be resolved with itself."); if (e && ("object" == typeof e || "function" == typeof e)) { var t = e.then; if (e instanceof i) return n._state = 3, n._value = e, void a(n); if ("function" == typeof t) return void s(function r(n, e) { return function() { n.apply(e, arguments) } }(t, e), n) }
                                n._state = 1, n._value = e, a(n) } catch (o) { c(n, o) } }

                        function c(n, e) { n._state = 2, n._value = e, a(n) }

                        function a(n) { 2 === n._state && 0 === n._deferreds.length && i._immediateFn(function() { n._handled || i._unhandledRejectionFn(n._value) }); for (var e = 0, t = n._deferreds.length; e < t; e++) o(n, n._deferreds[e]);
                            n._deferreds = null }

                        function f(n, e, t) { this.onFulfilled = "function" == typeof n ? n : null, this.onRejected = "function" == typeof e ? e : null, this.promise = t }

                        function s(n, e) { var t = !1; try { n(function(n) { t || (t = !0, u(e, n)) }, function(n) { t || (t = !0, c(e, n)) }) } catch (r) { if (t) return;
                                t = !0, c(e, r) } } var n, t;
                        n = this, t = setTimeout, i.prototype["catch"] = function(n) { return this.then(null, n) }, i.prototype.then = function(n, e) { var t = new this.constructor(r); return o(this, new f(n, e, t)), t }, i.all = function(n) { var a = Array.prototype.slice.call(n); return new i(function(o, i) { if (0 === a.length) return o([]); var u = a.length;

                                function c(e, n) { try { if (n && ("object" == typeof n || "function" == typeof n)) { var t = n.then; if ("function" == typeof t) return void t.call(n, function(n) { c(e, n) }, i) }
                                        a[e] = n, 0 == --u && o(a) } catch (r) { i(r) } } for (var n = 0; n < a.length; n++) c(n, a[n]) }) }, i.resolve = function(e) { return e && "object" == typeof e && e.constructor === i ? e : new i(function(n) { n(e) }) }, i.reject = function(t) { return new i(function(n, e) { e(t) }) }, i.race = function(o) { return new i(function(n, e) { for (var t = 0, r = o.length; t < r; t++) o[t].then(n, e) }) }, i._immediateFn = "function" == typeof e ? function(n) { e(n) } : function(n) { t(n, 0) }, i._unhandledRejectionFn = function(n) { "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", n) }, i._setImmediateFn = function(n) { i._immediateFn = n }, i._setUnhandledRejectionFn = function(n) { i._unhandledRejectionFn = n }, void 0 !== l && l.exports ? l.exports = i : n.Promise || (n.Promise = i) }).call(this, n("timers").setImmediate) }, { timers: 3 }], 3: [function(a, n, f) {
                    (function(n, e) { var r = a("process/browser.js").nextTick,
                            t = Function.prototype.apply,
                            o = Array.prototype.slice,
                            i = {},
                            u = 0;

                        function c(n, e) { this._id = n, this._clearFn = e }
                        f.setTimeout = function() { return new c(t.call(setTimeout, window, arguments), clearTimeout) }, f.setInterval = function() { return new c(t.call(setInterval, window, arguments), clearInterval) }, f.clearTimeout = f.clearInterval = function(n) { n.close() }, c.prototype.unref = c.prototype.ref = function() {}, c.prototype.close = function() { this._clearFn.call(window, this._id) }, f.enroll = function(n, e) { clearTimeout(n._idleTimeoutId), n._idleTimeout = e }, f.unenroll = function(n) { clearTimeout(n._idleTimeoutId), n._idleTimeout = -1 }, f._unrefActive = f.active = function(n) { clearTimeout(n._idleTimeoutId); var e = n._idleTimeout;
                            0 <= e && (n._idleTimeoutId = setTimeout(function() { n._onTimeout && n._onTimeout() }, e)) }, f.setImmediate = "function" == typeof n ? n : function(n) { var e = u++,
                                t = !(arguments.length < 2) && o.call(arguments, 1); return i[e] = !0, r(function() { i[e] && (t ? n.apply(null, t) : n.call(null), f.clearImmediate(e)) }), e }, f.clearImmediate = "function" == typeof e ? e : function(n) { delete i[n] } }).call(this, a("timers").setImmediate, a("timers").clearImmediate) }, { "process/browser.js": 1, timers: 3 }], 4: [function(n, e, t) { var r = n("promise-polyfill"),
                        o = "undefined" != typeof window ? window : Function("return this;")();
                    e.exports = { boltExport: o.Promise || r } }, { "promise-polyfill": 2 }] }, {}, [4])(4) });

    function Gh(n) { l.setTimeout(function() { throw n }, 0) }

    function Uh(n, e, t) { return Math.abs(n - e) <= t ? On.none() : n < e ? On.some(n + t) : On.some(n - t) }

    function $h(e, t) { return H([{ width: 320, height: 480, keyboard: { portrait: 300, landscape: 240 } }, { width: 320, height: 568, keyboard: { portrait: 300, landscape: 240 } }, { width: 375, height: 667, keyboard: { portrait: 305, landscape: 240 } }, { width: 414, height: 736, keyboard: { portrait: 320, landscape: 240 } }, { width: 768, height: 1024, keyboard: { portrait: 320, landscape: 400 } }, { width: 1024, height: 1366, keyboard: { portrait: 380, landscape: 460 } }], function(n) { return function(n, e) { return n ? On.some(e) : On.none() }(e <= n.width && t <= n.height, n.keyboard) }).getOr({ portrait: t / 5, landscape: e / 4 }) }

    function Wh(n) { var e = _g(n).isPortrait(),
            t = function(n) { return $h(n.screen.width, n.screen.height) }(n),
            r = e ? t.portrait : t.landscape; return (e ? n.screen.height : n.screen.width) - n.innerHeight > r ? 0 : r }

    function Xh(n, e) { var t = fn(n).dom().defaultView; return ji(n) + ji(e) - Wh(t) }

    function qh(n) { return Ng(n, dv) }

    function Yh(n, e) { var t = function(n) { return vr(n, mv) }(n); return lv.fixed(n, t, e) }

    function Kh(n, e) { return lv.scroller(n, e) }

    function Jh(n) { var e = qh(n); return ("true" === vr(n, gv) ? Kh : Yh)(n, e) }

    function Qh(n, e, t) { var r = fn(n).dom().defaultView.innerHeight; return pr(n, pv, r + "px"), r - e - t }

    function Zh(n) { var e = ui(n, "top").getOr("0"); return parseInt(e, 10) }

    function nv(n) { return parseInt(n.dom().scrollTop, 10) }

    function ev(n, e) { var t = e + yv(n) + "px";
        Bi(n, "top", t) } var tv = Lh.exports.boltExport,
        rv = function(n) { var t = On.none(),
                e = [],
                r = function(n) { o() ? u(n) : e.push(n) },
                o = function() { return t.isSome() },
                i = function(n) { C(n, u) },
                u = function(e) { t.each(function(n) { l.setTimeout(function() { e(n) }, 0) }) }; return n(function(n) { t = On.some(n), i(e), e = [] }), { get: r, map: function(t) { return rv(function(e) { r(function(n) { e(t(n)) }) }) }, isReady: o } },
        ov = { nu: rv, pure: function(e) { return rv(function(n) { n(e) }) } },
        iv = function(t) {
            function n(n) { t().then(n, Gh) } return { map: function(n) { return iv(function() { return t().then(n) }) }, bind: function(e) { return iv(function() { return t().then(function(n) { return e(n).toPromise() }) }) }, anonBind: function(n) { return iv(function() { return t().then(function() { return n.toPromise() }) }) }, toLazy: function() { return ov.nu(n) }, toCached: function() { var n = null; return iv(function() { return null === n && (n = t()), n }) }, toPromise: t, get: n } },
        uv = function(n) { return iv(function() { return new tv(n) }) },
        cv = function(n) { return iv(function() { return tv.resolve(n) }) },
        av = function() { var f = null; return { animate: function(r, o, n, i, e, t) {
                    function u(n) { c = !0, e(n) } var c = !1;
                    Dg.clearInterval(f);

                    function a(n) { Dg.clearInterval(f), u(n) }
                    f = Dg.setInterval(function() { var t = r();
                        Uh(t, o, n).fold(function() { Dg.clearInterval(f), u(o) }, function(n) { if (i(n, a), !c) { var e = r();
                                (e !== n || Math.abs(e - o) > Math.abs(t - o)) && (Dg.clearInterval(f), u(o)) } }) }, t) } } },
        fv = Xh,
        sv = function(n, e, t) { var r = Xh(e, t),
                o = ji(e) + ji(t) - r;
            Bi(n, "padding-bottom", o + "px") },
        lv = dt([{ fixed: ["element", "property", "offsetY"] }, { scroller: ["element", "offsetY"] }]),
        dv = "data-" + Mi.resolve("position-y-fixed"),
        mv = "data-" + Mi.resolve("y-property"),
        gv = "data-" + Mi.resolve("scrolling"),
        pv = "data-" + Mi.resolve("last-window-height"),
        hv = function(n) { var e = zi(n, "[" + dv + "]"); return ue(e, Jh) },
        vv = function(r, o, i, u) {
            function n() { var n = t.innerHeight; return function(n) { return Ng(n, pv) }(r) < n }

            function e() { if (d) { var n = ji(i),
                        e = ji(u),
                        t = Qh(r, n, e);
                    pr(r, dv, n + "px"), Bi(r, "height", t + "px"), sv(o, r, u) } } var t = fn(r).dom().defaultView,
                c = function(n) { var e = vr(n, "style");
                    oi(n, { position: "absolute", top: "0px" }), pr(n, dv, "0px"), pr(n, mv, "top"); return { restore: function() { pr(n, "style", e || ""), br(n, dv), br(n, mv) } } }(i),
                a = ji(i),
                f = ji(u),
                s = function(n, e, t) { var r = vr(t, "style");
                    gg.register(t), oi(t, { position: "absolute", height: e + "px", width: "100%", top: n + "px" }), pr(t, dv, n + "px"), pr(t, gv, "true"), pr(t, mv, "top"); return { restore: function() { gg.deregister(t), pr(t, "style", r || ""), br(t, dv), br(t, gv), br(t, mv) } } }(a, Qh(r, a, f), r),
                l = function(n) { var e = vr(n, "style");
                    oi(n, { position: "absolute", bottom: "0px" }), pr(n, dv, "0px"), pr(n, mv, "bottom"); return { restore: function() { pr(n, "style", e || ""), br(n, dv), br(n, mv) } } }(u),
                d = !0; return sv(o, r, u), { setViewportOffset: function(n) { pr(r, dv, n + "px"), e() }, isExpanding: n, isShrinking: m(n), refresh: e, restore: function() { d = !1, c.restore(), s.restore(), l.restore() } } },
        yv = qh,
        bv = av(),
        xv = "data-" + Mi.resolve("last-scroll-top"),
        wv = function(t, r, o) { return uv(function(n) { var e = d(nv, t);
                bv.animate(e, r, 15, function(n) { t.dom().scrollTop = n, Bi(t, "top", Zh(t) + 15 + "px") }, function() { t.dom().scrollTop = r, Bi(t, "top", o + "px"), n(r) }, 10) }) },
        Sv = function(o, i) { return uv(function(n) { var e = d(nv, o);
                pr(o, xv, e()); var t = Math.abs(i - e()),
                    r = Math.ceil(t / 10);
                bv.animate(e, i, r, function(n, e) { Ng(o, xv) !== o.dom().scrollTop ? e(o.dom().scrollTop) : (o.dom().scrollTop = n, pr(o, xv, n)) }, function() { o.dom().scrollTop = i, pr(o, xv, i), n(i) }, 10) }) },
        Tv = function(i, u) { return uv(function(n) {
                function e(n) { Bi(i, "top", n + "px") } var t = d(Zh, i),
                    r = Math.abs(u - t()),
                    o = Math.ceil(r / 10);
                bv.animate(t, u, o, e, function() { e(u), n(u) }, 10) }) },
        Ov = function(e, t, r) { var o = fn(e).dom().defaultView; return uv(function(n) { ev(e, r), ev(t, r), o.scrollTo(0, r), n(r) }) };

    function kv(i, n) { return n(function(t) { var r = [],
                o = 0;
            0 === i.length ? t([]) : C(i, function(n, e) { n.get(function(e) { return function(n) { r[e] = n, ++o >= i.length && t(r) } }(e)) }) }) }

    function Ev(n, r) { return n.fold(function(n, e, t) { return function(n, e, t, r) { return Bi(n, e, t + r + "px"), cv(r) }(n, e, r, t) }, function(n, e) { return function(n, e, t) { var r = e + t,
                    o = ui(n, "top").getOr(t),
                    i = r - parseInt(o, 10),
                    u = n.dom().scrollTop + i; return wv(n, u, r) }(n, r, e) }) }

    function Cv(e, t, n, r, o, i) { var u = function f(t) { var r = An(ov.pure({})); return { start: function(e) { var n = ov.nu(function(n) { return t(e).get(n) });
                        r.set(n) }, idle: function(n) { r.get().get(function() { n() }) } } }(function(n) { return Ov(e, t, n) }),
            c = sp(function() { u.idle(function() { _v(n, r.pageYOffset).get(function() {
                        (function() { var n = xp(i); return On.from(n[0]).bind(function(n) { var e = n.top() - t.dom().scrollTop; return e > r.innerHeight + 5 || e < -5 ? On.some({ top: b(e), bottom: b(e + n.height()) }) : On.none() }) })().each(function(n) { t.dom().scrollTop = t.dom().scrollTop + n.top() }), u.start(0), o.refresh() }) }) }, 1e3),
            a = Kd($e.fromDom(r), "scroll", function() { r.pageYOffset < 0 || c.throttle() }); return _v(n, r.pageYOffset).get(y), { unbind: a.unbind } } var Dv = function(n, e, t, r, o) { var i = fv(e, t),
                u = d(Fh, n);
            i < r || i < o ? Sv(e, e.dom().scrollTop - i + o).get(u) : r < 0 && Sv(e, e.dom().scrollTop + r).get(u) },
        _v = function(n, e) { var t = hv(n); return function(n) { return kv(n, uv) }(ue(t, function(n) { return Ev(n, e) })) },
        Mv = function(n) { var t = n.cWin(),
                e = n.ceBody(),
                r = n.socket(),
                o = n.toolstrip(),
                i = n.toolbar(),
                u = n.contentElement(),
                c = n.keyboardType(),
                a = n.outerWindow(),
                f = n.dropup(),
                s = vv(r, e, o, f),
                l = c(n.outerBody(), t, Je(), u, o, i),
                d = Mg(a, { onChange: w, onReady: s.refresh });
            d.onAdjustment(function() { s.refresh() }); var m = Kd($e.fromDom(a), "resize", function() { s.isExpanding() && s.refresh() }),
                g = Cv(o, r, n.outerBody(), a, s, t),
                p = function v(t, e) { var n = t.document,
                        r = $e.fromTag("div");

                    function o(n) { var e = $e.fromTag("span"); return kd(e, [Mi.resolve("layer-editor"), Mi.resolve("unfocused-selection")]), oi(e, { left: n.left() + "px", top: n.top() + "px", width: n.width() + "px", height: n.height() + "px" }), e }
                    Or(r, Mi.resolve("unfocused-selections")), rt($e.fromDom(n.documentElement), r); var i = Kd(r, "touchstart", function(n) { n.prevent(), Rh(t, e), u() }),
                        u = function() { hn(r) }; return { update: function() { u(); var n = xp(t),
                                e = ue(n, o);
                            pn(r, e) }, isActive: function() { return 0 < tt(r).length }, destroy: function() { i.unbind(), ot(r) }, clear: u } }(t, u),
                h = function() { p.clear() }; return { toEditing: function() { l.toEditing(), h() }, toReading: function() { l.toReading() }, onToolbarTouch: function(n) { l.onToolbarTouch(n) }, refreshSelection: function() { p.isActive() && p.update() }, clearSelection: h, highlightSelection: function() { p.update() }, scrollIntoView: function(n, e) { Dv(t, r, f, n, e) }, updateToolbarPadding: w, setViewportOffset: function(n) { s.setViewportOffset(n), Tv(r, n).get(y) }, syncHeight: function() { Bi(u, "height", u.dom().contentWindow.document.body.scrollHeight + "px") }, refreshStructure: s.refresh, destroy: function() { s.restore(), d.destroy(), g.unbind(), m.unbind(), l.destroy(), p.destroy(), Ah(Je(), To) } } },
        Iv = function(r, n) { var o = Ip(),
                i = gd(),
                u = gd(),
                c = md(),
                a = md(); return { enter: function() { n.hide(); var t = $e.fromDom(l.document);
                    Op.getActiveApi(r.editor).each(function(n) { i.set({ socketHeight: ui(r.socket, "height"), iframeHeight: ui(n.frame(), "height"), outerScroll: l.document.body.scrollTop }), u.set({ exclusives: Gp.exclusive(t, "." + gg.scrollable()) }), Or(r.container, Mi.resolve("fullscreen-maximized")), _p(r.container, n.body()), o.maximize(), Bi(r.socket, "overflow", "scroll"), Bi(r.socket, "-webkit-overflow-scrolling", "touch"), So(n.body()); var e = en(["cWin", "ceBody", "socket", "toolstrip", "toolbar", "dropup", "contentElement", "cursor", "keyboardType", "isScrolling", "outerWindow", "outerBody"], []);
                        c.set(Mv(e({ cWin: n.win(), ceBody: n.body(), socket: r.socket, toolstrip: r.toolstrip, toolbar: r.toolbar, dropup: r.dropup.element(), contentElement: n.frame(), cursor: w, outerBody: r.body, outerWindow: r.win, keyboardType: Bh.stubborn, isScrolling: function() { return u.get().exists(function(n) { return n.socket.isScrolling() }) } }))), c.run(function(n) { n.syncHeight() }), a.set(Vh(n, c, r.toolstrip, r.socket, r.dropup)) }) }, refreshStructure: function() { c.run(function(n) { n.refreshStructure() }) }, exit: function() { o.restore(), a.clear(), c.clear(), n.show(), i.on(function(n) { n.socketHeight.each(function(n) { Bi(r.socket, "height", n) }), n.iframeHeight.each(function(n) { Bi(r.editor.getFrame(), "height", n) }), l.document.body.scrollTop = n.scrollTop }), i.clear(), u.on(function(n) { n.exclusives.unbind() }), u.clear(), Er(r.container, Mi.resolve("fullscreen-maximized")), Mp(), gg.deregister(r.toolbar), ci(r.socket, "overflow"), ci(r.socket, "-webkit-overflow-scrolling"), To(r.editor.getFrame()), Op.getActiveApi(r.editor).each(function(n) { n.clearSelection() }) } } },
        Av = function(n) { var e = Pt("Getting IosWebapp schema", Rp, n);
            Bi(e.toolstrip, "width", "100%"), Bi(e.container, "position", "relative"); var t = Hm(Fp(function() { e.setReadOnly(e.readOnlyOnInit()), o.enter() }, e.translate));
            e.alloy.add(t); var r = { show: function() { e.alloy.add(t) }, hide: function() { e.alloy.remove(t) } },
                o = Iv(e, r); return { setReadOnly: e.setReadOnly, refreshStructure: o.refreshStructure, enter: o.enter, exit: o.exit, destroy: w } };

    function Fv(n, e, t) { n.system().broadcastOn([Vo.formatChanged()], { command: e, state: t }) }

    function Rv(m) { return { getNotificationManagerImpl: function() { return { open: b({ progressBar: { value: w }, close: w, text: w, getEl: b(null), moveTo: w, moveRel: w, settings: {} }), close: w, reposition: w, getArgs: b({}) } }, renderUI: function() { var n = m.getElement(),
                    e = Vv(m);!1 === function(n) { return !1 === n.settings.skin }(m) ? (m.contentCSS.push(e.content), Fo.DOM.styleSheetLoader.load(e.ui, jv(m))) : jv(m)();

                function t() { m.fire("ScrollIntoView") } var f = G().os.isAndroid() ? function c(n) { var e = Ih({ classes: [Mi.resolve("android-container")] }),
                        t = Up(),
                        r = md(),
                        o = dh(r),
                        i = mh(),
                        u = ih(w, n); return e.add(t.wrapper()), e.add(i), e.add(u.component()), { system: b(e), element: e.element, init: function(n) { r.set(Bp(n)) }, exit: function() { r.run(function(n) { n.exit(), eg.remove(i, o) }) }, setToolbarGroups: function(n) { var e = t.createGroups(n);
                            t.setGroups(e) }, setContextToolbar: function(n) { var e = t.createGroups(n);
                            t.setContextToolbar(e) }, focusToolbar: function() { t.focus() }, restoreToolbar: function() { t.restoreToolbar() }, updateMode: function(n) { gh(i, o, n, e.root()) }, socket: b(i), dropup: b(u) } }(t) : function a(n) { var e = Ih({ classes: [Mi.resolve("ios-container")] }),
                        t = Up(),
                        r = md(),
                        o = dh(r),
                        i = mh(),
                        u = ih(function() { r.run(function(n) { n.refreshStructure() }) }, n); return e.add(t.wrapper()), e.add(i), e.add(u.component()), { system: b(e), element: e.element, init: function(n) { r.set(Av(n)) }, exit: function() { r.run(function(n) { eg.remove(i, o), n.exit() }) }, setToolbarGroups: function(n) { var e = t.createGroups(n);
                            t.setGroups(e) }, setContextToolbar: function(n) { var e = t.createGroups(n);
                            t.setContextToolbar(e) }, focusToolbar: function() { t.focus() }, restoreToolbar: function() { t.restoreToolbar() }, updateMode: function(n) { gh(i, o, n, e.root()) }, socket: b(i), dropup: b(u) } }(t);! function(n, e) { at(n, e, mn) }($e.fromDom(n), f.system());

                function s(n, e, t, r) {!1 === r && m.selection.collapse(); var o = i(n, e, t);
                    f.setToolbarGroups(!0 === r ? o.readOnly : o.main), m.setMode(!0 === r ? "readonly" : "design"), m.fire(!0 === r ? Hv() : Pv()), f.updateMode(r) }

                function l(n, e) { return m.on(n, e), { unbind: function() { m.off(n) } } } var r = n.ownerDocument.defaultView,
                    d = Mg(r, { onChange: function() { f.system().broadcastOn([Vo.orientationChanged()], { width: Ig(r) }) }, onReady: w }),
                    i = function(n, e, t) { var r = n.get(); return { readOnly: r.backToMask.concat(e.get()), main: r.backToMask.concat(t.get()) } }; return m.on("init", function() { f.init({ editor: { getFrame: function() { return $e.fromDom(m.contentAreaContainer.querySelector("iframe")) }, onDomChanged: function() { return { unbind: w } }, onToReading: function(n) { return l(Hv(), n) }, onToEditing: function(n) { return l(Pv(), n) }, onScrollToCursor: function(e) { m.on("ScrollIntoView", function(n) { e(n) }); return { unbind: function() { m.off("ScrollIntoView"), d.destroy() } } }, onTouchToolstrip: function() { n() }, onTouchContent: function() {
                                (function(n) { return ko(n).bind(function(n) { return f.system().getByDom(n).toOption() }) })($e.fromDom(m.editorContainer.querySelector("." + Mi.resolve("toolbar")))).each(W), f.restoreToolbar(), n() }, onTapContent: function(n) { var e = n.target(); if ("img" === Y(e)) m.selection.select(e.dom()), n.kill();
                                else if ("a" === Y(e)) { f.system().getByDom($e.fromDom(m.editorContainer)).each(function(n) { bo.isAlpha(n) && Bo(e.dom()) }) } } }, container: $e.fromDom(m.editorContainer), socket: $e.fromDom(m.contentAreaContainer), toolstrip: $e.fromDom(m.editorContainer.querySelector("." + Mi.resolve("toolstrip"))), toolbar: $e.fromDom(m.editorContainer.querySelector("." + Mi.resolve("toolbar"))), dropup: f.dropup(), alloy: f.system(), translate: w, setReadOnly: function(n) { s(a, c, u, n) }, readOnlyOnInit: function() { return !1 } }); var n = function() { f.dropup().disappear(function() { f.system().broadcastOn([Vo.dropupDismissed()], {}) }) },
                        e = { label: "The first group", scrollable: !1, items: [zs.forToolbar("back", function() { m.selection.collapse(), f.exit() }, {}, m)] },
                        t = { label: "Back to read only", scrollable: !1, items: [zs.forToolbar("readonly-back", function() { s(a, c, u, !0) }, {}, m)] },
                        r = Og(f, m),
                        o = kg(m.settings, r),
                        i = { label: "The extra group", scrollable: !1, items: [] },
                        u = An([{ label: "the action group", scrollable: !0, items: o }, i]),
                        c = An([{ label: "The read only mode group", scrollable: !0, items: [] }, i]),
                        a = An({ backToMask: [e], backToReadOnly: [t] });
                    Nv(f, m) }), m.on("remove", function() { f.exit() }), m.on("detach", function() {! function(e) { var n = tt(e.element());
                        C(n, function(n) { e.getByDom(n).each(it) }), ot(e.element()) }(f.system()), f.system().destroy() }), { iframeContainer: f.socket().element().dom(), editorContainer: f.element().dom() } } } } var Bv = tinymce.util.Tools.resolve("tinymce.EditorManager"),
        Vv = function(n) { var e = Mn(n.settings, "skin_url").fold(function() { return Bv.baseURL + "/skins/ui/oxide" }, function(n) { return n }); return { content: e + "/content.mobile.min.css", ui: e + "/skin.mobile.min.css" } },
        Nv = function(r, n) { var e = kn(n.formatter.get());
            C(e, function(e) { n.formatter.formatChanged(e, function(n) { Fv(r, e, n) }) }), C(["ul", "ol"], function(t) { n.selection.selectorChanged(t, function(n, e) { Fv(r, t, n) }) }) },
        jv = (b(["x-small", "small", "medium", "large", "x-large"]), function(n) {
            function e() { n._skinLoaded = !0, n.fire("SkinLoaded") } return function() { n.initialized ? e() : n.on("init", e) } }),
        Hv = b("toReading"),
        Pv = b("toEditing");! function Lv() { Ro.add("mobile", Rv) }() }(window);