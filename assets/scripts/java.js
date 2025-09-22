! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";

    function n(e, t, n) {
        var i, r = (t = t || se).createElement("script");
        if (r.text = e, n)
            for (i in _e) n[i] && (r[i] = n[i]);
        t.head.appendChild(r).parentNode.removeChild(r)
    }

    function i(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? de[fe.call(e)] || "object" : typeof e
    }

    function r(e) {
        var t = !!e && "length" in e && e.length,
            n = i(e);
        return !ye(e) && !be(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function o(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    function s(e, t, n) {
        return ye(t) ? we.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        }) : t.nodeType ? we.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? we.grep(e, function(e) {
            return he.call(t, e) > -1 !== n
        }) : we.filter(t, e, n)
    }

    function a(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function l(e) {
        var t = {};
        return we.each(e.match(Ne) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function c(e) {
        return e
    }

    function u(e) {
        throw e
    }

    function h(e, t, n, i) {
        var r;
        try {
            e && ye(r = e.promise) ? r.call(e).done(t).fail(n) : e && ye(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }

    function d() {
        se.removeEventListener("DOMContentLoaded", d), e.removeEventListener("load", d), we.ready()
    }

    function f(e, t) {
        return t.toUpperCase()
    }

    function p(e) {
        return e.replace(Pe, "ms-").replace(He, f)
    }

    function m() {
        this.expando = we.expando + m.uid++
    }

    function g(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : qe.test(e) ? JSON.parse(e) : e)
    }

    function v(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(Be, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                try {
                    n = g(n)
                } catch (e) {}
                Re.set(e, t, n)
            } else n = void 0;
        return n
    }

    function y(e, t, n, i) {
        var r, o, s = 20,
            a = i ? function() {
                return i.cur()
            } : function() {
                return we.css(e, t, "")
            },
            l = a(),
            c = n && n[3] || (we.cssNumber[t] ? "" : "px"),
            u = (we.cssNumber[t] || "px" !== c && +l) && We.exec(we.css(e, t));
        if (u && u[3] !== c) {
            for (l /= 2, c = c || u[3], u = +l || 1; s--;) we.style(e, t, u + c), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), u /= o;
            u *= 2, we.style(e, t, u + c), n = n || []
        }
        return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
    }

    function b(e) {
        var t, n = e.ownerDocument,
            i = e.nodeName,
            r = Ke[i];
        return r || (t = n.body.appendChild(n.createElement(i)), r = we.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), Ke[i] = r, r)
    }

    function _(e, t) {
        for (var n, i, r = [], o = 0, s = e.length; o < s; o++)(i = e[o]).style && (n = i.style.display, t ? ("none" === n && (r[o] = Fe.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && Ve(i) && (r[o] = b(i))) : "none" !== n && (r[o] = "none", Fe.set(i, "display", n)));
        for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
        return e
    }

    function w(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && o(e, t) ? we.merge([e], n) : n
    }

    function C(e, t) {
        for (var n = 0, i = e.length; n < i; n++) Fe.set(e[n], "globalEval", !t || Fe.get(t[n], "globalEval"))
    }

    function x(e, t, n, r, o) {
        for (var s, a, l, c, u, h, d = t.createDocumentFragment(), f = [], p = 0, m = e.length; p < m; p++)
            if ((s = e[p]) || 0 === s)
                if ("object" === i(s)) we.merge(f, s.nodeType ? [s] : s);
                else if (Ze.test(s)) {
            for (a = a || d.appendChild(t.createElement("div")), l = (Ye.exec(s) || ["", ""])[1].toLowerCase(), c = Ge[l] || Ge._default, a.innerHTML = c[1] + we.htmlPrefilter(s) + c[2], h = c[0]; h--;) a = a.lastChild;
            we.merge(f, a.childNodes), (a = d.firstChild).textContent = ""
        } else f.push(t.createTextNode(s));
        for (d.textContent = "", p = 0; s = f[p++];)
            if (r && we.inArray(s, r) > -1) o && o.push(s);
            else if (u = we.contains(s.ownerDocument, s), a = w(d.appendChild(s), "script"), u && C(a), n)
            for (h = 0; s = a[h++];) Xe.test(s.type || "") && n.push(s);
        return d
    }

    function T() {
        return !0
    }

    function D() {
        return !1
    }

    function E() {
        try {
            return se.activeElement
        } catch (e) {}
    }

    function k(e, t, n, i, r, o) {
        var s, a;
        if ("object" == typeof t) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (a in t) k(e, a, n, i, t[a], o);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = D;
        else if (!r) return e;
        return 1 === o && (s = r, (r = function(e) {
            return we().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = we.guid++)), e.each(function() {
            we.event.add(this, t, r, i, n)
        })
    }

    function S(e, t) {
        return o(e, "table") && o(11 !== t.nodeType ? t : t.firstChild, "tr") ? we(e).children("tbody")[0] || e : e
    }

    function I(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function A(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function N(e, t) {
        var n, i, r, o, s, a, l, c;
        if (1 === t.nodeType) {
            if (Fe.hasData(e) && (o = Fe.access(e), s = Fe.set(t, o), c = o.events)) {
                delete s.handle, s.events = {};
                for (r in c)
                    for (n = 0, i = c[r].length; n < i; n++) we.event.add(t, r, c[r][n])
            }
            Re.hasData(e) && (a = Re.access(e), l = we.extend({}, a), Re.set(t, l))
        }
    }

    function O(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Qe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function M(e, t, i, r) {
        t = ce.apply([], t);
        var o, s, a, l, c, u, h = 0,
            d = e.length,
            f = d - 1,
            p = t[0],
            m = ye(p);
        if (m || d > 1 && "string" == typeof p && !ve.checkClone && rt.test(p)) return e.each(function(n) {
            var o = e.eq(n);
            m && (t[0] = p.call(this, n, o.html())), M(o, t, i, r)
        });
        if (d && (o = x(t, e[0].ownerDocument, !1, e, r), s = o.firstChild, 1 === o.childNodes.length && (o = s), s || r)) {
            for (l = (a = we.map(w(o, "script"), I)).length; h < d; h++) c = o, h !== f && (c = we.clone(c, !0, !0), l && we.merge(a, w(c, "script"))), i.call(e[h], c, h);
            if (l)
                for (u = a[a.length - 1].ownerDocument, we.map(a, A), h = 0; h < l; h++) c = a[h], Xe.test(c.type || "") && !Fe.access(c, "globalEval") && we.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? we._evalUrl && we._evalUrl(c.src) : n(c.textContent.replace(ot, ""), u, c))
        }
        return e
    }

    function j(e, t, n) {
        for (var i, r = t ? we.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || we.cleanData(w(i)), i.parentNode && (n && we.contains(i.ownerDocument, i) && C(w(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    function P(e, t, n) {
        var i, r, o, s, a = e.style;
        return (n = n || at(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || we.contains(e.ownerDocument, e) || (s = we.style(e, t)), !ve.pixelBoxStyles() && st.test(s) && lt.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function H(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    function L(e) {
        if (e in pt) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = ft.length; n--;)
            if ((e = ft[n] + t) in pt) return e
    }

    function F(e) {
        var t = we.cssProps[e];
        return t || (t = we.cssProps[e] = L(e) || e), t
    }

    function R(e, t, n) {
        var i = We.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function q(e, t, n, i, r, o) {
        var s = "width" === t ? 1 : 0,
            a = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === n && (l += we.css(e, n + Ue[s], !0, r)), i ? ("content" === n && (l -= we.css(e, "padding" + Ue[s], !0, r)), "margin" !== n && (l -= we.css(e, "border" + Ue[s] + "Width", !0, r))) : (l += we.css(e, "padding" + Ue[s], !0, r), "padding" !== n ? l += we.css(e, "border" + Ue[s] + "Width", !0, r) : a += we.css(e, "border" + Ue[s] + "Width", !0, r));
        return !i && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5))), l
    }

    function B(e, t, n) {
        var i = at(e),
            r = P(e, t, i),
            o = "border-box" === we.css(e, "boxSizing", !1, i),
            s = o;
        if (st.test(r)) {
            if (!n) return r;
            r = "auto"
        }
        return s = s && (ve.boxSizingReliable() || r === e.style[t]), ("auto" === r || !parseFloat(r) && "inline" === we.css(e, "display", !1, i)) && (r = e["offset" + t[0].toUpperCase() + t.slice(1)], s = !0), (r = parseFloat(r) || 0) + q(e, t, n || (o ? "border" : "content"), s, i, r) + "px"
    }

    function $(e, t, n, i, r) {
        return new $.prototype.init(e, t, n, i, r)
    }

    function W() {
        gt && (!1 === se.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(W) : e.setTimeout(W, we.fx.interval), we.fx.tick())
    }

    function U() {
        return e.setTimeout(function() {
            mt = void 0
        }), mt = Date.now()
    }

    function V(e, t) {
        var n, i = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = Ue[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function z(e, t, n) {
        for (var i, r = (Y.tweeners[t] || []).concat(Y.tweeners["*"]), o = 0, s = r.length; o < s; o++)
            if (i = r[o].call(n, t, e)) return i
    }

    function K(e, t, n) {
        var i, r, o, s, a, l, c, u, h = "width" in t || "height" in t,
            d = this,
            f = {},
            p = e.style,
            m = e.nodeType && Ve(e),
            g = Fe.get(e, "fxshow");
        n.queue || (null == (s = we._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
            s.unqueued || a()
        }), s.unqueued++, d.always(function() {
            d.always(function() {
                s.unqueued--, we.queue(e, "fx").length || s.empty.fire()
            })
        }));
        for (i in t)
            if (r = t[i], vt.test(r)) {
                if (delete t[i], o = o || "toggle" === r, r === (m ? "hide" : "show")) {
                    if ("show" !== r || !g || void 0 === g[i]) continue;
                    m = !0
                }
                f[i] = g && g[i] || we.style(e, i)
            } if ((l = !we.isEmptyObject(t)) || !we.isEmptyObject(f)) {
            h && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = g && g.display) && (c = Fe.get(e, "display")), "none" === (u = we.css(e, "display")) && (c ? u = c : (_([e], !0), c = e.style.display || c, u = we.css(e, "display"), _([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === we.css(e, "float") && (l || (d.done(function() {
                p.display = c
            }), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always(function() {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            })), l = !1;
            for (i in f) l || (g ? "hidden" in g && (m = g.hidden) : g = Fe.access(e, "fxshow", {
                display: c
            }), o && (g.hidden = !m), m && _([e], !0), d.done(function() {
                m || _([e]), Fe.remove(e, "fxshow");
                for (i in f) we.style(e, i, f[i])
            })), l = z(m ? g[i] : 0, i, d), i in g || (g[i] = l.start, m && (l.end = l.start, l.start = 0))
        }
    }

    function Q(e, t) {
        var n, i, r, o, s;
        for (n in e)
            if (i = p(n), r = t[i], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = we.cssHooks[i]) && "expand" in s) {
                o = s.expand(o), delete e[i];
                for (n in o) n in e || (e[n] = o[n], t[n] = r)
            } else t[i] = r
    }

    function Y(e, t, n) {
        var i, r, o = 0,
            s = Y.prefilters.length,
            a = we.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var t = mt || U(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), o = 0, s = c.tweens.length; o < s; o++) c.tweens[o].run(i);
                return a.notifyWith(e, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
            },
            c = a.promise({
                elem: e,
                props: we.extend({}, t),
                opts: we.extend(!0, {
                    specialEasing: {},
                    easing: we.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: mt || U(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = we.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? c.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < i; n++) c.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (Q(u, c.opts.specialEasing); o < s; o++)
            if (i = Y.prefilters[o].call(c, e, u, c.opts)) return ye(i.stop) && (we._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
        return we.map(u, z, c), ye(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), we.fx.timer(we.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c
    }

    function X(e) {
        return (e.match(Ne) || []).join(" ")
    }

    function G(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function Z(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.match(Ne) || [] : []
    }

    function J(e, t, n, r) {
        var o;
        if (Array.isArray(t)) we.each(t, function(t, i) {
            n || St.test(e) ? r(e, i) : J(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== i(t)) r(e, t);
        else
            for (o in t) J(e + "[" + o + "]", t[o], n, r)
    }

    function ee(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0,
                o = t.toLowerCase().match(Ne) || [];
            if (ye(n))
                for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function te(e, t, n, i) {
        function r(a) {
            var l;
            return o[a] = !0, we.each(e[a] || [], function(e, a) {
                var c = a(t, n, i);
                return "string" != typeof c || s || o[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c), r(c), !1)
            }), l
        }
        var o = {},
            s = e === Pt;
        return r(t.dataTypes[0]) || !o["*"] && r("*")
    }

    function ne(e, t) {
        var n, i, r = we.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && we.extend(!0, e, i), e
    }

    function ie(e, t, n) {
        for (var i, r, o, s, a = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (r in a)
                if (a[r] && a[r].test(i)) {
                    l.unshift(r);
                    break
                } if (l[0] in n) o = l[0];
        else {
            for (r in n) {
                if (!l[0] || e.converters[r + " " + l[0]]) {
                    o = r;
                    break
                }
                s || (s = r)
            }
            o = o || s
        }
        if (o) return o !== l[0] && l.unshift(o), n[o]
    }

    function re(e, t, n, i) {
        var r, o, s, a, l, c = {},
            u = e.dataTypes.slice();
        if (u[1])
            for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
        for (o = u.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (!(s = c[l + " " + o] || c["* " + o]))
                for (r in c)
                    if ((a = r.split(" "))[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                        !0 === s ? s = c[r] : !0 !== c[r] && (o = a[0], u.unshift(a[1]));
                        break
                    } if (!0 !== s)
                if (s && e.throws) t = s(t);
                else try {
                    t = s(t)
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: s ? e : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }
    var oe = [],
        se = e.document,
        ae = Object.getPrototypeOf,
        le = oe.slice,
        ce = oe.concat,
        ue = oe.push,
        he = oe.indexOf,
        de = {},
        fe = de.toString,
        pe = de.hasOwnProperty,
        me = pe.toString,
        ge = me.call(Object),
        ve = {},
        ye = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        be = function(e) {
            return null != e && e === e.window
        },
        _e = {
            type: !0,
            src: !0,
            noModule: !0
        },
        we = function(e, t) {
            return new we.fn.init(e, t)
        };
    we.fn = we.prototype = {
        jquery: "3.3.1",
        constructor: we,
        length: 0,
        toArray: function() {
            return le.call(this)
        },
        get: function(e) {
            return null == e ? le.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = we.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return we.each(this, e)
        },
        map: function(e) {
            return this.pushStack(we.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(le.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: ue,
        sort: oe.sort,
        splice: oe.splice
    }, we.extend = we.fn.extend = function() {
        var e, t, n, i, r, o, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || ye(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], s !== (i = e[t]) && (c && i && (we.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1, o = n && Array.isArray(n) ? n : []) : o = n && we.isPlainObject(n) ? n : {}, s[t] = we.extend(c, o, i)) : void 0 !== i && (s[t] = i));
        return s
    }, we.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== fe.call(e) || (t = ae(e)) && ("function" != typeof(n = pe.call(t, "constructor") && t.constructor) || me.call(n) !== ge))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e) {
            n(e)
        },
        each: function(e, t) {
            var n, i = 0;
            if (r(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (r(Object(e)) ? we.merge(n, "string" == typeof e ? [e] : e) : ue.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : he.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
            return e.length = r, e
        },
        grep: function(e, t, n) {
            for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) !== s && i.push(e[r]);
            return i
        },
        map: function(e, t, n) {
            var i, o, s = 0,
                a = [];
            if (r(e))
                for (i = e.length; s < i; s++) null != (o = t(e[s], s, n)) && a.push(o);
            else
                for (s in e) null != (o = t(e[s], s, n)) && a.push(o);
            return ce.apply([], a)
        },
        guid: 1,
        support: ve
    }), "function" == typeof Symbol && (we.fn[Symbol.iterator] = oe[Symbol.iterator]), we.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        de["[object " + t + "]"] = t.toLowerCase()
    });
    var Ce = function(e) {
        function t(e, t, n, i) {
            var r, o, s, a, l, u, d, f = t && t.ownerDocument,
                p = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!i && ((t ? t.ownerDocument || t : R) !== N && A(t), t = t || N, M)) {
                if (11 !== p && (l = me.exec(e)))
                    if (r = l[1]) {
                        if (9 === p) {
                            if (!(s = t.getElementById(r))) return n;
                            if (s.id === r) return n.push(s), n
                        } else if (f && (s = f.getElementById(r)) && L(t, s) && s.id === r) return n.push(s), n
                    } else {
                        if (l[2]) return X.apply(n, t.getElementsByTagName(e)), n;
                        if ((r = l[3]) && _.getElementsByClassName && t.getElementsByClassName) return X.apply(n, t.getElementsByClassName(r)), n
                    } if (_.qsa && !U[e + " "] && (!j || !j.test(e))) {
                    if (1 !== p) f = t, d = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(be, _e) : t.setAttribute("id", a = F), o = (u = T(e)).length; o--;) u[o] = "#" + a + " " + h(u[o]);
                        d = u.join(","), f = ge.test(e) && c(t.parentNode) || t
                    }
                    if (d) try {
                        return X.apply(n, f.querySelectorAll(d)), n
                    } catch (e) {} finally {
                        a === F && t.removeAttribute("id")
                    }
                }
            }
            return E(e.replace(oe, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = i
            }
            var t = [];
            return e
        }

        function i(e) {
            return e[F] = !0, e
        }

        function r(e) {
            var t = N.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) w.attrHandle[n[i]] = t
        }

        function s(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Ce(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function l(e) {
            return i(function(t) {
                return t = +t, i(function(n, i) {
                    for (var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function c(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }

        function u() {}

        function h(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function d(e, t, n) {
            var i = t.dir,
                r = t.next,
                o = r || i,
                s = n && "parentNode" === o,
                a = B++;
            return t.first ? function(t, n, r) {
                for (; t = t[i];)
                    if (1 === t.nodeType || s) return e(t, n, r);
                return !1
            } : function(t, n, l) {
                var c, u, h, d = [q, a];
                if (l) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || s) && e(t, n, l)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || s)
                            if (h = t[F] || (t[F] = {}), u = h[t.uniqueID] || (h[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;
                            else {
                                if ((c = u[o]) && c[0] === q && c[1] === a) return d[2] = c[2];
                                if (u[o] = d, d[2] = e(t, n, l)) return !0
                            } return !1
            }
        }

        function f(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var r = e.length; r--;)
                    if (!e[r](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function p(e, n, i) {
            for (var r = 0, o = n.length; r < o; r++) t(e, n[r], i);
            return i
        }

        function m(e, t, n, i, r) {
            for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(o = e[a]) && (n && !n(o, i, r) || (s.push(o), c && t.push(a)));
            return s
        }

        function g(e, t, n, r, o, s) {
            return r && !r[F] && (r = g(r)), o && !o[F] && (o = g(o, s)), i(function(i, s, a, l) {
                var c, u, h, d = [],
                    f = [],
                    g = s.length,
                    v = i || p(t || "*", a.nodeType ? [a] : a, []),
                    y = !e || !i && t ? v : m(v, d, e, a, l),
                    b = n ? o || (i ? e : g || r) ? [] : s : y;
                if (n && n(y, b, a, l), r)
                    for (c = m(b, f), r(c, [], a, l), u = c.length; u--;)(h = c[u]) && (b[f[u]] = !(y[f[u]] = h));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (c = [], u = b.length; u--;)(h = b[u]) && c.push(y[u] = h);
                            o(null, b = [], c, l)
                        }
                        for (u = b.length; u--;)(h = b[u]) && (c = o ? Z(i, h) : d[u]) > -1 && (i[c] = !(s[c] = h))
                    }
                } else b = m(b === s ? b.splice(g, b.length) : b), o ? o(null, s, b, l) : X.apply(s, b)
            })
        }

        function v(e) {
            for (var t, n, i, r = e.length, o = w.relative[e[0].type], s = o || w.relative[" "], a = o ? 1 : 0, l = d(function(e) {
                    return e === t
                }, s, !0), c = d(function(e) {
                    return Z(t, e) > -1
                }, s, !0), u = [function(e, n, i) {
                    var r = !o && (i || n !== k) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                    return t = null, r
                }]; a < r; a++)
                if (n = w.relative[e[a].type]) u = [d(f(u), n)];
                else {
                    if ((n = w.filter[e[a].type].apply(null, e[a].matches))[F]) {
                        for (i = ++a; i < r && !w.relative[e[i].type]; i++);
                        return g(a > 1 && f(u), a > 1 && h(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(oe, "$1"), n, a < i && v(e.slice(a, i)), i < r && v(e = e.slice(i)), i < r && h(e))
                    }
                    u.push(n)
                } return f(u)
        }

        function y(e, n) {
            var r = n.length > 0,
                o = e.length > 0,
                s = function(i, s, a, l, c) {
                    var u, h, d, f = 0,
                        p = "0",
                        g = i && [],
                        v = [],
                        y = k,
                        b = i || o && w.find.TAG("*", c),
                        _ = q += null == y ? 1 : Math.random() || .1,
                        C = b.length;
                    for (c && (k = s === N || s || c); p !== C && null != (u = b[p]); p++) {
                        if (o && u) {
                            for (h = 0, s || u.ownerDocument === N || (A(u), a = !M); d = e[h++];)
                                if (d(u, s || N, a)) {
                                    l.push(u);
                                    break
                                } c && (q = _)
                        }
                        r && ((u = !d && u) && f--, i && g.push(u))
                    }
                    if (f += p, r && p !== f) {
                        for (h = 0; d = n[h++];) d(g, v, s, a);
                        if (i) {
                            if (f > 0)
                                for (; p--;) g[p] || v[p] || (v[p] = Q.call(l));
                            v = m(v)
                        }
                        X.apply(l, v), c && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                    }
                    return c && (q = _, k = y), g
                };
            return r ? i(s) : s
        }
        var b, _, w, C, x, T, D, E, k, S, I, A, N, O, M, j, P, H, L, F = "sizzle" + 1 * new Date,
            R = e.document,
            q = 0,
            B = 0,
            $ = n(),
            W = n(),
            U = n(),
            V = function(e, t) {
                return e === t && (I = !0), 0
            },
            z = {}.hasOwnProperty,
            K = [],
            Q = K.pop,
            Y = K.push,
            X = K.push,
            G = K.slice,
            Z = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ee = "[\\x20\\t\\r\\n\\f]",
            te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
            ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
            re = new RegExp(ee + "+", "g"),
            oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
            se = new RegExp("^" + ee + "*," + ee + "*"),
            ae = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
            le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
            ce = new RegExp(ie),
            ue = new RegExp("^" + te + "$"),
            he = {
                ID: new RegExp("^#(" + te + ")"),
                CLASS: new RegExp("^\\.(" + te + ")"),
                TAG: new RegExp("^(" + te + "|[*])"),
                ATTR: new RegExp("^" + ne),
                PSEUDO: new RegExp("^" + ie),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + J + ")$", "i"),
                needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
            },
            de = /^(?:input|select|textarea|button)$/i,
            fe = /^h\d$/i,
            pe = /^[^{]+\{\s*\[native \w/,
            me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ge = /[+~]/,
            ve = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
            ye = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            be = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            _e = function(e, t) {
                return t ? "\0" === e ? "ï¿½" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            we = function() {
                A()
            },
            Ce = d(function(e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            X.apply(K = G.call(R.childNodes), R.childNodes), K[R.childNodes.length].nodeType
        } catch (e) {
            X = {
                apply: K.length ? function(e, t) {
                    Y.apply(e, G.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        _ = t.support = {}, x = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, A = t.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : R;
            return i !== N && 9 === i.nodeType && i.documentElement ? (N = i, O = N.documentElement, M = !x(N), R !== N && (n = N.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)), _.attributes = r(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), _.getElementsByTagName = r(function(e) {
                return e.appendChild(N.createComment("")), !e.getElementsByTagName("*").length
            }), _.getElementsByClassName = pe.test(N.getElementsByClassName), _.getById = r(function(e) {
                return O.appendChild(e).id = F, !N.getElementsByName || !N.getElementsByName(F).length
            }), _.getById ? (w.filter.ID = function(e) {
                var t = e.replace(ve, ye);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }, w.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && M) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (w.filter.ID = function(e) {
                var t = e.replace(ve, ye);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, w.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && M) {
                    var n, i, r, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        for (r = t.getElementsByName(e), i = 0; o = r[i++];)
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                    }
                    return []
                }
            }), w.find.TAG = _.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : _.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, i = [],
                    r = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, w.find.CLASS = _.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && M) return t.getElementsByClassName(e)
            }, P = [], j = [], (_.qsa = pe.test(N.querySelectorAll)) && (r(function(e) {
                O.appendChild(e).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && j.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || j.push("\\[" + ee + "*(?:value|" + J + ")"), e.querySelectorAll("[id~=" + F + "-]").length || j.push("~="), e.querySelectorAll(":checked").length || j.push(":checked"), e.querySelectorAll("a#" + F + "+*").length || j.push(".#.+[+~]")
            }), r(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = N.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && j.push("name" + ee + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && j.push(":enabled", ":disabled"), O.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && j.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), j.push(",.*:")
            })), (_.matchesSelector = pe.test(H = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && r(function(e) {
                _.disconnectedMatch = H.call(e, "*"), H.call(e, "[s!='']:x"), P.push("!=", ie)
            }), j = j.length && new RegExp(j.join("|")), P = P.length && new RegExp(P.join("|")), t = pe.test(O.compareDocumentPosition), L = t || pe.test(O.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, V = t ? function(e, t) {
                if (e === t) return I = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !_.sortDetached && t.compareDocumentPosition(e) === n ? e === N || e.ownerDocument === R && L(R, e) ? -1 : t === N || t.ownerDocument === R && L(R, t) ? 1 : S ? Z(S, e) - Z(S, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return I = !0, 0;
                var n, i = 0,
                    r = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    l = [t];
                if (!r || !o) return e === N ? -1 : t === N ? 1 : r ? -1 : o ? 1 : S ? Z(S, e) - Z(S, t) : 0;
                if (r === o) return s(e, t);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; a[i] === l[i];) i++;
                return i ? s(a[i], l[i]) : a[i] === R ? -1 : l[i] === R ? 1 : 0
            }, N) : N
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== N && A(e), n = n.replace(le, "='$1']"), _.matchesSelector && M && !U[n + " "] && (!P || !P.test(n)) && (!j || !j.test(n))) try {
                var i = H.call(e, n);
                if (i || _.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (e) {}
            return t(n, N, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== N && A(e), L(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== N && A(e);
            var n = w.attrHandle[t.toLowerCase()],
                i = n && z.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !M) : void 0;
            return void 0 !== i ? i : _.attributes || !M ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.escape = function(e) {
            return (e + "").replace(be, _e)
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                i = 0,
                r = 0;
            if (I = !_.detectDuplicates, S = !_.sortStable && e.slice(0), e.sort(V), I) {
                for (; t = e[r++];) t === e[r] && (i = n.push(r));
                for (; i--;) e.splice(n[i], 1)
            }
            return S = null, e
        }, C = t.getText = function(e) {
            var t, n = "",
                i = 0,
                r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                } else if (3 === r || 4 === r) return e.nodeValue
            } else
                for (; t = e[i++];) n += C(t);
            return n
        }, (w = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: he,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(ve, ye), e[3] = (e[3] || e[4] || e[5] || "").replace(ve, ye), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ce.test(n) && (t = T(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(ve, ye).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = $[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && $(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, i) {
                    return function(r) {
                        var o = t.attr(r, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(re, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === i && 0 === r ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var c, u, h, d, f, p, m = o !== s ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = a && t.nodeName.toLowerCase(),
                            y = !l && !a,
                            b = !1;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (d = t; d = d[m];)
                                        if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    p = m = "only" === e && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [s ? g.firstChild : g.lastChild], s && y) {
                                for (b = (f = (c = (u = (h = (d = g)[F] || (d[F] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[e] || [])[0] === q && c[1]) && c[2], d = f && g.childNodes[f]; d = ++f && d && d[m] || (b = f = 0) || p.pop();)
                                    if (1 === d.nodeType && ++b && d === t) {
                                        u[e] = [q, f, b];
                                        break
                                    }
                            } else if (y && (b = f = (c = (u = (h = (d = t)[F] || (d[F] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[e] || [])[0] === q && c[1]), !1 === b)
                                for (;
                                    (d = ++f && d && d[m] || (b = f = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && ((u = (h = d[F] || (d[F] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[e] = [q, b]), d !== t)););
                            return (b -= r) === i || b % i == 0 && b / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var r, o = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[F] ? o(n) : o.length > 1 ? (r = [e, e, "", n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, r = o(e, n), s = r.length; s--;) e[i = Z(e, r[s])] = !(t[i] = r[s])
                    }) : function(e) {
                        return o(e, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [],
                        n = [],
                        r = D(e.replace(oe, "$1"));
                    return r[F] ? i(function(e, t, n, i) {
                        for (var o, s = r(e, null, i, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function(e, i, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function(e) {
                    return e = e.replace(ve, ye),
                        function(t) {
                            return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                        }
                }),
                lang: i(function(e) {
                    return ue.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ve, ye).toLowerCase(),
                        function(t) {
                            var n;
                            do {
                                if (n = M ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === O
                },
                focus: function(e) {
                    return e === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: a(!1),
                disabled: a(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !w.pseudos.empty(e)
                },
                header: function(e) {
                    return fe.test(e.nodeName)
                },
                input: function(e) {
                    return de.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(e, t) {
                    return [t - 1]
                }),
                eq: l(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: l(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: l(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: l(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: l(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }).pseudos.nth = w.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) w.pseudos[b] = function(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }(b);
        for (b in {
                submit: !0,
                reset: !0
            }) w.pseudos[b] = function(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }(b);
        return u.prototype = w.filters = w.pseudos, w.setFilters = new u, T = t.tokenize = function(e, n) {
            var i, r, o, s, a, l, c, u = W[e + " "];
            if (u) return n ? 0 : u.slice(0);
            for (a = e, l = [], c = w.preFilter; a;) {
                i && !(r = se.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = ae.exec(a)) && (i = r.shift(), o.push({
                    value: i,
                    type: r[0].replace(oe, " ")
                }), a = a.slice(i.length));
                for (s in w.filter) !(r = he[s].exec(a)) || c[s] && !(r = c[s](r)) || (i = r.shift(), o.push({
                    value: i,
                    type: s,
                    matches: r
                }), a = a.slice(i.length));
                if (!i) break
            }
            return n ? a.length : a ? t.error(e) : W(e, l).slice(0)
        }, D = t.compile = function(e, t) {
            var n, i = [],
                r = [],
                o = U[e + " "];
            if (!o) {
                for (t || (t = T(e)), n = t.length; n--;)(o = v(t[n]))[F] ? i.push(o) : r.push(o);
                (o = U(e, y(r, i))).selector = e
            }
            return o
        }, E = t.select = function(e, t, n, i) {
            var r, o, s, a, l, u = "function" == typeof e && e,
                d = !i && T(e = u.selector || e);
            if (n = n || [], 1 === d.length) {
                if ((o = d[0] = d[0].slice(0)).length > 2 && "ID" === (s = o[0]).type && 9 === t.nodeType && M && w.relative[o[1].type]) {
                    if (!(t = (w.find.ID(s.matches[0].replace(ve, ye), t) || [])[0])) return n;
                    u && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (r = he.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !w.relative[a = s.type]);)
                    if ((l = w.find[a]) && (i = l(s.matches[0].replace(ve, ye), ge.test(o[0].type) && c(t.parentNode) || t))) {
                        if (o.splice(r, 1), !(e = i.length && h(o))) return X.apply(n, i), n;
                        break
                    }
            }
            return (u || D(e, d))(i, t, !M, n, !t || ge.test(e) && c(t.parentNode) || t), n
        }, _.sortStable = F.split("").sort(V).join("") === F, _.detectDuplicates = !!I, A(), _.sortDetached = r(function(e) {
            return 1 & e.compareDocumentPosition(N.createElement("fieldset"))
        }), r(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), _.attributes && r(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), r(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(J, function(e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    we.find = Ce, we.expr = Ce.selectors, we.expr[":"] = we.expr.pseudos, we.uniqueSort = we.unique = Ce.uniqueSort, we.text = Ce.getText, we.isXMLDoc = Ce.isXML, we.contains = Ce.contains, we.escapeSelector = Ce.escape;
    var xe = function(e, t, n) {
            for (var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && we(e).is(n)) break;
                    i.push(e)
                } return i
        },
        Te = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        De = we.expr.match.needsContext,
        Ee = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    we.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? we.find.matchesSelector(i, e) ? [i] : [] : we.find.matches(e, we.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, we.fn.extend({
        find: function(e) {
            var t, n, i = this.length,
                r = this;
            if ("string" != typeof e) return this.pushStack(we(e).filter(function() {
                for (t = 0; t < i; t++)
                    if (we.contains(r[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) we.find(e, r[t], n);
            return i > 1 ? we.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(s(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(s(this, e || [], !0))
        },
        is: function(e) {
            return !!s(this, "string" == typeof e && De.test(e) ? we(e) : e || [], !1).length
        }
    });
    var ke, Se = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (we.fn.init = function(e, t, n) {
        var i, r;
        if (!e) return this;
        if (n = n || ke, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Se.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof we ? t[0] : t, we.merge(this, we.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : se, !0)), Ee.test(i[1]) && we.isPlainObject(t))
                    for (i in t) ye(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (r = se.getElementById(i[2])) && (this[0] = r, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : ye(e) ? void 0 !== n.ready ? n.ready(e) : e(we) : we.makeArray(e, this)
    }).prototype = we.fn, ke = we(se);
    var Ie = /^(?:parents|prev(?:Until|All))/,
        Ae = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    we.fn.extend({
        has: function(e) {
            var t = we(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (we.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0,
                r = this.length,
                o = [],
                s = "string" != typeof e && we(e);
            if (!De.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && we.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        } return this.pushStack(o.length > 1 ? we.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? he.call(we(e), this[0]) : he.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(we.uniqueSort(we.merge(this.get(), we(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), we.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return xe(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return xe(e, "parentNode", n)
        },
        next: function(e) {
            return a(e, "nextSibling")
        },
        prev: function(e) {
            return a(e, "previousSibling")
        },
        nextAll: function(e) {
            return xe(e, "nextSibling")
        },
        prevAll: function(e) {
            return xe(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return xe(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return xe(e, "previousSibling", n)
        },
        siblings: function(e) {
            return Te((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return Te(e.firstChild)
        },
        contents: function(e) {
            return o(e, "iframe") ? e.contentDocument : (o(e, "template") && (e = e.content || e), we.merge([], e.childNodes))
        }
    }, function(e, t) {
        we.fn[e] = function(n, i) {
            var r = we.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = we.filter(i, r)), this.length > 1 && (Ae[e] || we.uniqueSort(r), Ie.test(e) && r.reverse()), this.pushStack(r)
        }
    });
    var Ne = /[^\x20\t\r\n\f]+/g;
    we.Callbacks = function(e) {
        e = "string" == typeof e ? l(e) : we.extend({}, e);
        var t, n, r, o, s = [],
            a = [],
            c = -1,
            u = function() {
                for (o = o || e.once, r = t = !0; a.length; c = -1)
                    for (n = a.shift(); ++c < s.length;) !1 === s[c].apply(n[0], n[1]) && e.stopOnFalse && (c = s.length, n = !1);
                e.memory || (n = !1), t = !1, o && (s = n ? [] : "")
            },
            h = {
                add: function() {
                    return s && (n && !t && (c = s.length - 1, a.push(n)), function t(n) {
                        we.each(n, function(n, r) {
                            ye(r) ? e.unique && h.has(r) || s.push(r) : r && r.length && "string" !== i(r) && t(r)
                        })
                    }(arguments), n && !t && u()), this
                },
                remove: function() {
                    return we.each(arguments, function(e, t) {
                        for (var n;
                            (n = we.inArray(t, s, n)) > -1;) s.splice(n, 1), n <= c && c--
                    }), this
                },
                has: function(e) {
                    return e ? we.inArray(e, s) > -1 : s.length > 0
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return o = a = [], s = n = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return o = a = [], n || t || (s = n = ""), this
                },
                locked: function() {
                    return !!o
                },
                fireWith: function(e, n) {
                    return o || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this
                },
                fire: function() {
                    return h.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return h
    }, we.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", we.Callbacks("memory"), we.Callbacks("memory"), 2],
                    ["resolve", "done", we.Callbacks("once memory"), we.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", we.Callbacks("once memory"), we.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                r = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return r.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return we.Deferred(function(t) {
                            we.each(n, function(n, i) {
                                var r = ye(e[i[4]]) && e[i[4]];
                                o[i[1]](function() {
                                    var e = r && r.apply(this, arguments);
                                    e && ye(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, i, r) {
                        function o(t, n, i, r) {
                            return function() {
                                var a = this,
                                    l = arguments,
                                    h = function() {
                                        var e, h;
                                        if (!(t < s)) {
                                            if ((e = i.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            h = e && ("object" == typeof e || "function" == typeof e) && e.then, ye(h) ? r ? h.call(e, o(s, n, c, r), o(s, n, u, r)) : (s++, h.call(e, o(s, n, c, r), o(s, n, u, r), o(s, n, c, n.notifyWith))) : (i !== c && (a = void 0, l = [e]), (r || n.resolveWith)(a, l))
                                        }
                                    },
                                    d = r ? h : function() {
                                        try {
                                            h()
                                        } catch (e) {
                                            we.Deferred.exceptionHook && we.Deferred.exceptionHook(e, d.stackTrace), t + 1 >= s && (i !== u && (a = void 0, l = [e]), n.rejectWith(a, l))
                                        }
                                    };
                                t ? d() : (we.Deferred.getStackHook && (d.stackTrace = we.Deferred.getStackHook()), e.setTimeout(d))
                            }
                        }
                        var s = 0;
                        return we.Deferred(function(e) {
                            n[0][3].add(o(0, e, ye(r) ? r : c, e.notifyWith)), n[1][3].add(o(0, e, ye(t) ? t : c)), n[2][3].add(o(0, e, ye(i) ? i : u))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? we.extend(e, r) : r
                    }
                },
                o = {};
            return we.each(n, function(e, t) {
                var s = t[2],
                    a = t[5];
                r[t[1]] = s.add, a && s.add(function() {
                    i = a
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), s.add(t[3].fire), o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = s.fireWith
            }), r.promise(o), t && t.call(o, o), o
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                i = Array(n),
                r = le.call(arguments),
                o = we.Deferred(),
                s = function(e) {
                    return function(n) {
                        i[e] = this, r[e] = arguments.length > 1 ? le.call(arguments) : n, --t || o.resolveWith(i, r)
                    }
                };
            if (t <= 1 && (h(e, o.done(s(n)).resolve, o.reject, !t), "pending" === o.state() || ye(r[n] && r[n].then))) return o.then();
            for (; n--;) h(r[n], s(n), o.reject);
            return o.promise()
        }
    });
    var Oe = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    we.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && Oe.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, we.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    };
    var Me = we.Deferred();
    we.fn.ready = function(e) {
        return Me.then(e).catch(function(e) {
            we.readyException(e)
        }), this
    }, we.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --we.readyWait : we.isReady) || (we.isReady = !0, !0 !== e && --we.readyWait > 0 || Me.resolveWith(se, [we]))
        }
    }), we.ready.then = Me.then, "complete" === se.readyState || "loading" !== se.readyState && !se.documentElement.doScroll ? e.setTimeout(we.ready) : (se.addEventListener("DOMContentLoaded", d), e.addEventListener("load", d));
    var je = function(e, t, n, r, o, s, a) {
            var l = 0,
                c = e.length,
                u = null == n;
            if ("object" === i(n)) {
                o = !0;
                for (l in n) je(e, t, l, n[l], !0, s, a)
            } else if (void 0 !== r && (o = !0, ye(r) || (a = !0), u && (a ? (t.call(e, r), t = null) : (u = t, t = function(e, t, n) {
                    return u.call(we(e), n)
                })), t))
                for (; l < c; l++) t(e[l], n, a ? r : r.call(e[l], l, t(e[l], n)));
            return o ? e : u ? t.call(e) : c ? t(e[0], n) : s
        },
        Pe = /^-ms-/,
        He = /-([a-z])/g,
        Le = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    m.uid = 1, m.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, Le(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[p(t)] = n;
            else
                for (i in t) r[p(i)] = t[i];
            return r
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][p(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(p) : (t = p(t)) in i ? [t] : t.match(Ne) || []).length;
                    for (; n--;) delete i[t[n]]
                }(void 0 === t || we.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !we.isEmptyObject(t)
        }
    };
    var Fe = new m,
        Re = new m,
        qe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Be = /[A-Z]/g;
    we.extend({
        hasData: function(e) {
            return Re.hasData(e) || Fe.hasData(e)
        },
        data: function(e, t, n) {
            return Re.access(e, t, n)
        },
        removeData: function(e, t) {
            Re.remove(e, t)
        },
        _data: function(e, t, n) {
            return Fe.access(e, t, n)
        },
        _removeData: function(e, t) {
            Fe.remove(e, t)
        }
    }), we.fn.extend({
        data: function(e, t) {
            var n, i, r, o = this[0],
                s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = Re.get(o), 1 === o.nodeType && !Fe.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = p(i.slice(5)), v(o, i, r[i]));
                    Fe.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function() {
                Re.set(this, e)
            }) : je(this, function(t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = Re.get(o, e))) return n;
                    if (void 0 !== (n = v(o, e))) return n
                } else this.each(function() {
                    Re.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Re.remove(this, e)
            })
        }
    }), we.extend({
        queue: function(e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = Fe.get(e, t), n && (!i || Array.isArray(n) ? i = Fe.access(e, t, we.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = we.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = we._queueHooks(e, t),
                s = function() {
                    we.dequeue(e, t)
                };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, s, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Fe.get(e, n) || Fe.access(e, n, {
                empty: we.Callbacks("once memory").add(function() {
                    Fe.remove(e, [t + "queue", n])
                })
            })
        }
    }), we.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? we.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = we.queue(this, e, t);
                we._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && we.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                we.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                r = we.Deferred(),
                o = this,
                s = this.length,
                a = function() {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = Fe.get(o[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(t)
        }
    });
    var $e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        We = new RegExp("^(?:([+-])=|)(" + $e + ")([a-z%]*)$", "i"),
        Ue = ["Top", "Right", "Bottom", "Left"],
        Ve = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && we.contains(e.ownerDocument, e) && "none" === we.css(e, "display")
        },
        ze = function(e, t, n, i) {
            var r, o, s = {};
            for (o in t) s[o] = e.style[o], e.style[o] = t[o];
            r = n.apply(e, i || []);
            for (o in t) e.style[o] = s[o];
            return r
        },
        Ke = {};
    we.fn.extend({
        show: function() {
            return _(this, !0)
        },
        hide: function() {
            return _(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Ve(this) ? we(this).show() : we(this).hide()
            })
        }
    });
    var Qe = /^(?:checkbox|radio)$/i,
        Ye = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Xe = /^$|^module$|\/(?:java|ecma)script/i,
        Ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ge.optgroup = Ge.option, Ge.tbody = Ge.tfoot = Ge.colgroup = Ge.caption = Ge.thead, Ge.th = Ge.td;
    var Ze = /<|&#?\w+;/;
    ! function() {
        var e = se.createDocumentFragment().appendChild(se.createElement("div")),
            t = se.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), ve.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", ve.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var Je = se.documentElement,
        et = /^key/,
        tt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        nt = /^([^.]*)(?:\.(.+)|)/;
    we.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var o, s, a, l, c, u, h, d, f, p, m, g = Fe.get(e);
            if (g)
                for (n.handler && (n = (o = n).handler, r = o.selector), r && we.find.matchesSelector(Je, r), n.guid || (n.guid = we.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function(t) {
                        return void 0 !== we && we.event.triggered !== t.type ? we.event.dispatch.apply(e, arguments) : void 0
                    }), c = (t = (t || "").match(Ne) || [""]).length; c--;) f = m = (a = nt.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), f && (h = we.event.special[f] || {}, f = (r ? h.delegateType : h.bindType) || f, h = we.event.special[f] || {}, u = we.extend({
                    type: f,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && we.expr.match.needsContext.test(r),
                    namespace: p.join(".")
                }, o), (d = l[f]) || ((d = l[f] = []).delegateCount = 0, h.setup && !1 !== h.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(f, s)), h.add && (h.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, u) : d.push(u), we.event.global[f] = !0)
        },
        remove: function(e, t, n, i, r) {
            var o, s, a, l, c, u, h, d, f, p, m, g = Fe.hasData(e) && Fe.get(e);
            if (g && (l = g.events)) {
                for (c = (t = (t || "").match(Ne) || [""]).length; c--;)
                    if (a = nt.exec(t[c]) || [], f = m = a[1], p = (a[2] || "").split(".").sort(), f) {
                        for (h = we.event.special[f] || {}, d = l[f = (i ? h.delegateType : h.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) u = d[o], !r && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (d.splice(o, 1), u.selector && d.delegateCount--, h.remove && h.remove.call(e, u));
                        s && !d.length && (h.teardown && !1 !== h.teardown.call(e, p, g.handle) || we.removeEvent(e, f, g.handle), delete l[f])
                    } else
                        for (f in l) we.event.remove(e, f + t[c], n, i, !0);
                we.isEmptyObject(l) && Fe.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, r, o, s, a = we.event.fix(e),
                l = new Array(arguments.length),
                c = (Fe.get(this, "events") || {})[a.type] || [],
                u = we.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                for (s = we.event.handlers.call(this, a, c), t = 0;
                    (r = s[t++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (i = ((we.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, s, a = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[r = (i = t[n]).selector + " "] && (s[r] = i.needsContext ? we(r, this).index(c) > -1 : we.find(r, this, null, [c]).length), s[r] && o.push(i);
                        o.length && a.push({
                            elem: c,
                            handlers: o
                        })
                    } return c = this, l < t.length && a.push({
                elem: c,
                handlers: t.slice(l)
            }), a
        },
        addProp: function(e, t) {
            Object.defineProperty(we.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: ye(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[we.expando] ? e : new we.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== E() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === E() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && o(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return o(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, we.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, we.Event = function(e, t) {
        if (!(this instanceof we.Event)) return new we.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? T : D, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && we.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[we.expando] = !0
    }, we.Event.prototype = {
        constructor: we.Event,
        isDefaultPrevented: D,
        isPropagationStopped: D,
        isImmediatePropagationStopped: D,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = T, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = T, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = T, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, we.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && et.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && tt.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, we.event.addProp), we.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        we.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this,
                    r = e.relatedTarget,
                    o = e.handleObj;
                return r && (r === i || we.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), we.fn.extend({
        on: function(e, t, n, i) {
            return k(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return k(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, we(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = D), this.each(function() {
                we.event.remove(this, e, n, t)
            })
        }
    });
    var it = /<script|<style|<link/i,
        rt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    we.extend({
        htmlPrefilter: function(e) {
            return e.replace(/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, r, o, s, a = e.cloneNode(!0),
                l = we.contains(e.ownerDocument, e);
            if (!(ve.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || we.isXMLDoc(e)))
                for (s = w(a), i = 0, r = (o = w(e)).length; i < r; i++) O(o[i], s[i]);
            if (t)
                if (n)
                    for (o = o || w(e), s = s || w(a), i = 0, r = o.length; i < r; i++) N(o[i], s[i]);
                else N(e, a);
            return (s = w(a, "script")).length > 0 && C(s, !l && w(e, "script")), a
        },
        cleanData: function(e) {
            for (var t, n, i, r = we.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Le(n)) {
                    if (t = n[Fe.expando]) {
                        if (t.events)
                            for (i in t.events) r[i] ? we.event.remove(n, i) : we.removeEvent(n, i, t.handle);
                        n[Fe.expando] = void 0
                    }
                    n[Re.expando] && (n[Re.expando] = void 0)
                }
        }
    }), we.fn.extend({
        detach: function(e) {
            return j(this, e, !0)
        },
        remove: function(e) {
            return j(this, e)
        },
        text: function(e) {
            return je(this, function(e) {
                return void 0 === e ? we.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return M(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || S(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return M(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = S(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return M(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return M(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (we.cleanData(w(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return we.clone(this, e, t)
            })
        },
        html: function(e) {
            return je(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !it.test(e) && !Ge[(Ye.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = we.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (we.cleanData(w(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return M(this, arguments, function(t) {
                var n = this.parentNode;
                we.inArray(this, e) < 0 && (we.cleanData(w(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), we.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        we.fn[e] = function(e) {
            for (var n, i = [], r = we(e), o = r.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), we(r[s])[t](n), ue.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var st = new RegExp("^(" + $e + ")(?!px)[a-z%]+$", "i"),
        at = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        lt = new RegExp(Ue.join("|"), "i");
    ! function() {
        function t() {
            if (c) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Je.appendChild(l).appendChild(c);
                var t = e.getComputedStyle(c);
                i = "1%" !== t.top, a = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), r = 36 === n(t.width), c.style.position = "absolute", o = 36 === c.offsetWidth || "absolute", Je.removeChild(l), c = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }
        var i, r, o, s, a, l = se.createElement("div"),
            c = se.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", ve.clearCloneStyle = "content-box" === c.style.backgroundClip, we.extend(ve, {
            boxSizingReliable: function() {
                return t(), r
            },
            pixelBoxStyles: function() {
                return t(), s
            },
            pixelPosition: function() {
                return t(), i
            },
            reliableMarginLeft: function() {
                return t(), a
            },
            scrollboxSize: function() {
                return t(), o
            }
        }))
    }();
    var ct = /^(none|table(?!-c[ea]).+)/,
        ut = /^--/,
        ht = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        dt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        ft = ["Webkit", "Moz", "ms"],
        pt = se.createElement("div").style;
    we.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = P(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, s, a = p(t),
                    l = ut.test(t),
                    c = e.style;
                if (l || (t = F(a)), s = we.cssHooks[t] || we.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : c[t];
                "string" == (o = typeof n) && (r = We.exec(n)) && r[1] && (n = y(e, t, r), o = "number"), null != n && n === n && ("number" === o && (n += r && r[3] || (we.cssNumber[a] ? "" : "px")), ve.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
            }
        },
        css: function(e, t, n, i) {
            var r, o, s, a = p(t);
            return ut.test(t) || (t = F(a)), (s = we.cssHooks[t] || we.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = P(e, t, i)), "normal" === r && t in dt && (r = dt[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }), we.each(["height", "width"], function(e, t) {
        we.cssHooks[t] = {
            get: function(e, n, i) {
                if (n) return !ct.test(we.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? B(e, t, i) : ze(e, ht, function() {
                    return B(e, t, i)
                })
            },
            set: function(e, n, i) {
                var r, o = at(e),
                    s = "border-box" === we.css(e, "boxSizing", !1, o),
                    a = i && q(e, t, i, s, o);
                return s && ve.scrollboxSize() === o.position && (a -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - q(e, t, "border", !1, o) - .5)), a && (r = We.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = we.css(e, t)), R(e, n, a)
            }
        }
    }), we.cssHooks.marginLeft = H(ve.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(P(e, "marginLeft")) || e.getBoundingClientRect().left - ze(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), we.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        we.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + Ue[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, "margin" !== e && (we.cssHooks[e + t].set = R)
    }), we.fn.extend({
        css: function(e, t) {
            return je(this, function(e, t, n) {
                var i, r, o = {},
                    s = 0;
                if (Array.isArray(t)) {
                    for (i = at(e), r = t.length; s < r; s++) o[t[s]] = we.css(e, t[s], !1, i);
                    return o
                }
                return void 0 !== n ? we.style(e, t, n) : we.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), we.Tween = $, $.prototype = {
        constructor: $,
        init: function(e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || we.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (we.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = $.propHooks[this.prop];
            return e && e.get ? e.get(this) : $.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = $.propHooks[this.prop];
            return this.options.duration ? this.pos = t = we.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : $.propHooks._default.set(this), this
        }
    }, $.prototype.init.prototype = $.prototype, $.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = we.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                we.fx.step[e.prop] ? we.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[we.cssProps[e.prop]] && !we.cssHooks[e.prop] ? e.elem[e.prop] = e.now : we.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, $.propHooks.scrollTop = $.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, we.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, we.fx = $.prototype.init, we.fx.step = {};
    var mt, gt, vt = /^(?:toggle|show|hide)$/,
        yt = /queueHooks$/;
    we.Animation = we.extend(Y, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return y(n.elem, e, We.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                ye(e) ? (t = e, e = ["*"]) : e = e.match(Ne);
                for (var n, i = 0, r = e.length; i < r; i++) n = e[i], Y.tweeners[n] = Y.tweeners[n] || [], Y.tweeners[n].unshift(t)
            },
            prefilters: [K],
            prefilter: function(e, t) {
                t ? Y.prefilters.unshift(e) : Y.prefilters.push(e)
            }
        }), we.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? we.extend({}, e) : {
                complete: n || !n && t || ye(e) && e,
                duration: e,
                easing: n && t || t && !ye(t) && t
            };
            return we.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in we.fx.speeds ? i.duration = we.fx.speeds[i.duration] : i.duration = we.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                ye(i.old) && i.old.call(this), i.queue && we.dequeue(this, i.queue)
            }, i
        }, we.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(Ve).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var r = we.isEmptyObject(e),
                    o = we.speed(t, n, i),
                    s = function() {
                        var t = Y(this, we.extend({}, e), o);
                        (r || Fe.get(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        r = null != e && e + "queueHooks",
                        o = we.timers,
                        s = Fe.get(this);
                    if (r) s[r] && s[r].stop && i(s[r]);
                    else
                        for (r in s) s[r] && s[r].stop && yt.test(r) && i(s[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                    !t && n || we.dequeue(this, e)
                })
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each(function() {
                    var t, n = Fe.get(this),
                        i = n[e + "queue"],
                        r = n[e + "queueHooks"],
                        o = we.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, we.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), we.each(["toggle", "show", "hide"], function(e, t) {
            var n = we.fn[t];
            we.fn[t] = function(e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(V(t, !0), e, i, r)
            }
        }), we.each({
            slideDown: V("show"),
            slideUp: V("hide"),
            slideToggle: V("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            we.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), we.timers = [], we.fx.tick = function() {
            var e, t = 0,
                n = we.timers;
            for (mt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || we.fx.stop(), mt = void 0
        }, we.fx.timer = function(e) {
            we.timers.push(e), we.fx.start()
        }, we.fx.interval = 13, we.fx.start = function() {
            gt || (gt = !0, W())
        }, we.fx.stop = function() {
            gt = null
        }, we.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, we.fn.delay = function(t, n) {
            return t = we.fx ? we.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, i) {
                var r = e.setTimeout(n, t);
                i.stop = function() {
                    e.clearTimeout(r)
                }
            })
        },
        function() {
            var e = se.createElement("input"),
                t = se.createElement("select").appendChild(se.createElement("option"));
            e.type = "checkbox", ve.checkOn = "" !== e.value, ve.optSelected = t.selected, (e = se.createElement("input")).value = "t", e.type = "radio", ve.radioValue = "t" === e.value
        }();
    var bt, _t = we.expr.attrHandle;
    we.fn.extend({
        attr: function(e, t) {
            return je(this, we.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                we.removeAttr(this, e)
            })
        }
    }), we.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? we.prop(e, t, n) : (1 === o && we.isXMLDoc(e) || (r = we.attrHooks[t.toLowerCase()] || (we.expr.match.bool.test(t) ? bt : void 0)), void 0 !== n ? null === n ? void we.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = we.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ve.radioValue && "radio" === t && o(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0,
                r = t && t.match(Ne);
            if (r && 1 === e.nodeType)
                for (; n = r[i++];) e.removeAttribute(n)
        }
    }), bt = {
        set: function(e, t, n) {
            return !1 === t ? we.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, we.each(we.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = _t[t] || we.find.attr;
        _t[t] = function(e, t, i) {
            var r, o, s = t.toLowerCase();
            return i || (o = _t[s], _t[s] = r, r = null != n(e, t, i) ? s : null, _t[s] = o), r
        }
    });
    var wt = /^(?:input|select|textarea|button)$/i,
        Ct = /^(?:a|area)$/i;
    we.fn.extend({
        prop: function(e, t) {
            return je(this, we.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[we.propFix[e] || e]
            })
        }
    }), we.extend({
        prop: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && we.isXMLDoc(e) || (t = we.propFix[t] || t, r = we.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = we.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : wt.test(e.nodeName) || Ct.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), ve.optSelected || (we.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), we.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        we.propFix[this.toLowerCase()] = this
    }), we.fn.extend({
        addClass: function(e) {
            var t, n, i, r, o, s, a, l = 0;
            if (ye(e)) return this.each(function(t) {
                we(this).addClass(e.call(this, t, G(this)))
            });
            if ((t = Z(e)).length)
                for (; n = this[l++];)
                    if (r = G(n), i = 1 === n.nodeType && " " + X(r) + " ") {
                        for (s = 0; o = t[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r !== (a = X(i)) && n.setAttribute("class", a)
                    } return this
        },
        removeClass: function(e) {
            var t, n, i, r, o, s, a, l = 0;
            if (ye(e)) return this.each(function(t) {
                we(this).removeClass(e.call(this, t, G(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = Z(e)).length)
                for (; n = this[l++];)
                    if (r = G(n), i = 1 === n.nodeType && " " + X(r) + " ") {
                        for (s = 0; o = t[s++];)
                            for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                        r !== (a = X(i)) && n.setAttribute("class", a)
                    } return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                i = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : ye(e) ? this.each(function(n) {
                we(this).toggleClass(e.call(this, n, G(this), t), t)
            }) : this.each(function() {
                var t, r, o, s;
                if (i)
                    for (r = 0, o = we(this), s = Z(e); t = s[r++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else void 0 !== e && "boolean" !== n || ((t = G(this)) && Fe.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Fe.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + X(G(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    we.fn.extend({
        val: function(e) {
            var t, n, i, r = this[0];
            return arguments.length ? (i = ye(e), this.each(function(n) {
                var r;
                1 === this.nodeType && (null == (r = i ? e.call(this, n, we(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = we.map(r, function(e) {
                    return null == e ? "" : e + ""
                })), (t = we.valHooks[this.type] || we.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            })) : r ? (t = we.valHooks[r.type] || we.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof(n = r.value) ? n.replace(/\r/g, "") : null == n ? "" : n : void 0
        }
    }), we.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = we.find.attr(e, "value");
                    return null != t ? t : X(we.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, r = e.options,
                        s = e.selectedIndex,
                        a = "select-one" === e.type,
                        l = a ? null : [],
                        c = a ? s + 1 : r.length;
                    for (i = s < 0 ? c : a ? s : 0; i < c; i++)
                        if (((n = r[i]).selected || i === s) && !n.disabled && (!n.parentNode.disabled || !o(n.parentNode, "optgroup"))) {
                            if (t = we(n).val(), a) return t;
                            l.push(t)
                        } return l
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = we.makeArray(t), s = r.length; s--;)((i = r[s]).selected = we.inArray(we.valHooks.option.get(i), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), we.each(["radio", "checkbox"], function() {
        we.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = we.inArray(we(e).val(), t) > -1
            }
        }, ve.checkOn || (we.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), ve.focusin = "onfocusin" in e;
    var xt = /^(?:focusinfocus|focusoutblur)$/,
        Tt = function(e) {
            e.stopPropagation()
        };
    we.extend(we.event, {
        trigger: function(t, n, i, r) {
            var o, s, a, l, c, u, h, d, f = [i || se],
                p = pe.call(t, "type") ? t.type : t,
                m = pe.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = d = a = i = i || se, 3 !== i.nodeType && 8 !== i.nodeType && !xt.test(p + we.event.triggered) && (p.indexOf(".") > -1 && (p = (m = p.split(".")).shift(), m.sort()), c = p.indexOf(":") < 0 && "on" + p, t = t[we.expando] ? t : new we.Event(p, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = m.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : we.makeArray(n, [t]), h = we.event.special[p] || {}, r || !h.trigger || !1 !== h.trigger.apply(i, n))) {
                if (!r && !h.noBubble && !be(i)) {
                    for (l = h.delegateType || p, xt.test(l + p) || (s = s.parentNode); s; s = s.parentNode) f.push(s), a = s;
                    a === (i.ownerDocument || se) && f.push(a.defaultView || a.parentWindow || e)
                }
                for (o = 0;
                    (s = f[o++]) && !t.isPropagationStopped();) d = s, t.type = o > 1 ? l : h.bindType || p, (u = (Fe.get(s, "events") || {})[t.type] && Fe.get(s, "handle")) && u.apply(s, n), (u = c && s[c]) && u.apply && Le(s) && (t.result = u.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = p, r || t.isDefaultPrevented() || h._default && !1 !== h._default.apply(f.pop(), n) || !Le(i) || c && ye(i[p]) && !be(i) && ((a = i[c]) && (i[c] = null), we.event.triggered = p, t.isPropagationStopped() && d.addEventListener(p, Tt), i[p](), t.isPropagationStopped() && d.removeEventListener(p, Tt), we.event.triggered = void 0, a && (i[c] = a)), t.result
            }
        },
        simulate: function(e, t, n) {
            var i = we.extend(new we.Event, n, {
                type: e,
                isSimulated: !0
            });
            we.event.trigger(i, null, t)
        }
    }), we.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                we.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return we.event.trigger(e, t, n, !0)
        }
    }), ve.focusin || we.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            we.event.simulate(t, e.target, we.event.fix(e))
        };
        we.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    r = Fe.access(i, t);
                r || i.addEventListener(e, n, !0), Fe.access(i, t, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    r = Fe.access(i, t) - 1;
                r ? Fe.access(i, t, r) : (i.removeEventListener(e, n, !0), Fe.remove(i, t))
            }
        }
    });
    var Dt = e.location,
        Et = Date.now(),
        kt = /\?/;
    we.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || we.error("Invalid XML: " + t), n
    };
    var St = /\[\]$/,
        It = /^(?:submit|button|image|reset|file)$/i,
        At = /^(?:input|select|textarea|keygen)/i;
    we.param = function(e, t) {
        var n, i = [],
            r = function(e, t) {
                var n = ye(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(e) || e.jquery && !we.isPlainObject(e)) we.each(e, function() {
            r(this.name, this.value)
        });
        else
            for (n in e) J(n, e[n], t, r);
        return i.join("&")
    }, we.fn.extend({
        serialize: function() {
            return we.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = we.prop(this, "elements");
                return e ? we.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !we(this).is(":disabled") && At.test(this.nodeName) && !It.test(e) && (this.checked || !Qe.test(e))
            }).map(function(e, t) {
                var n = we(this).val();
                return null == n ? null : Array.isArray(n) ? we.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(/\r?\n/g, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(/\r?\n/g, "\r\n")
                }
            }).get()
        }
    });
    var Nt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ot = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Mt = /^(?:GET|HEAD)$/,
        jt = {},
        Pt = {},
        Ht = "*/".concat("*"),
        Lt = se.createElement("a");
    Lt.href = Dt.href, we.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Dt.href,
            type: "GET",
            isLocal: Ot.test(Dt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ht,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": we.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? ne(ne(e, we.ajaxSettings), t) : ne(we.ajaxSettings, e)
        },
        ajaxPrefilter: ee(jt),
        ajaxTransport: ee(Pt),
        ajax: function(t, n) {
            function i(t, n, i, a) {
                var c, d, f, _, w, C = n;
                u || (u = !0, l && e.clearTimeout(l), r = void 0, s = a || "", x.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, i && (_ = ie(p, x, i)), _ = re(p, _, x, c), c ? (p.ifModified && ((w = x.getResponseHeader("Last-Modified")) && (we.lastModified[o] = w), (w = x.getResponseHeader("etag")) && (we.etag[o] = w)), 204 === t || "HEAD" === p.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = _.state, d = _.data, c = !(f = _.error))) : (f = C, !t && C || (C = "error", t < 0 && (t = 0))), x.status = t, x.statusText = (n || C) + "", c ? v.resolveWith(m, [d, C, x]) : v.rejectWith(m, [x, C, f]), x.statusCode(b), b = void 0, h && g.trigger(c ? "ajaxSuccess" : "ajaxError", [x, p, c ? d : f]), y.fireWith(m, [x, C]), h && (g.trigger("ajaxComplete", [x, p]), --we.active || we.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var r, o, s, a, l, c, u, h, d, f, p = we.ajaxSetup({}, n),
                m = p.context || p,
                g = p.context && (m.nodeType || m.jquery) ? we(m) : we.event,
                v = we.Deferred(),
                y = we.Callbacks("once memory"),
                b = p.statusCode || {},
                _ = {},
                w = {},
                C = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (u) {
                            if (!a)
                                for (a = {}; t = Nt.exec(s);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return u ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == u && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, _[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == u && (p.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (u) x.always(e[x.status]);
                            else
                                for (t in e) b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || C;
                        return r && r.abort(t), i(0, t), this
                    }
                };
            if (v.promise(x), p.url = ((t || p.url || Dt.href) + "").replace(/^\/\//, Dt.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(Ne) || [""], null == p.crossDomain) {
                c = se.createElement("a");
                try {
                    c.href = p.url, c.href = c.href, p.crossDomain = Lt.protocol + "//" + Lt.host != c.protocol + "//" + c.host
                } catch (e) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = we.param(p.data, p.traditional)), te(jt, p, n, x), u) return x;
            (h = we.event && p.global) && 0 == we.active++ && we.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Mt.test(p.type), o = p.url.replace(/#.*$/, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(/%20/g, "+")) : (f = p.url.slice(o.length), p.data && (p.processData || "string" == typeof p.data) && (o += (kt.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (o = o.replace(/([?&])_=[^&]*/, "$1"), f = (kt.test(o) ? "&" : "?") + "_=" + Et++ + f), p.url = o + f), p.ifModified && (we.lastModified[o] && x.setRequestHeader("If-Modified-Since", we.lastModified[o]), we.etag[o] && x.setRequestHeader("If-None-Match", we.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && x.setRequestHeader("Content-Type", p.contentType), x.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Ht + "; q=0.01" : "") : p.accepts["*"]);
            for (d in p.headers) x.setRequestHeader(d, p.headers[d]);
            if (p.beforeSend && (!1 === p.beforeSend.call(m, x, p) || u)) return x.abort();
            if (C = "abort", y.add(p.complete), x.done(p.success), x.fail(p.error), r = te(Pt, p, n, x)) {
                if (x.readyState = 1, h && g.trigger("ajaxSend", [x, p]), u) return x;
                p.async && p.timeout > 0 && (l = e.setTimeout(function() {
                    x.abort("timeout")
                }, p.timeout));
                try {
                    u = !1, r.send(_, i)
                } catch (e) {
                    if (u) throw e;
                    i(-1, e)
                }
            } else i(-1, "No Transport");
            return x
        },
        getJSON: function(e, t, n) {
            return we.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return we.get(e, void 0, t, "script")
        }
    }), we.each(["get", "post"], function(e, t) {
        we[t] = function(e, n, i, r) {
            return ye(n) && (r = r || i, i = n, n = void 0), we.ajax(we.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, we.isPlainObject(e) && e))
        }
    }), we._evalUrl = function(e) {
        return we.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, we.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (ye(e) && (e = e.call(this[0])), t = we(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(e) {
            return ye(e) ? this.each(function(t) {
                we(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = we(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = ye(e);
            return this.each(function(n) {
                we(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                we(this).replaceWith(this.childNodes)
            }), this
        }
    }), we.expr.pseudos.hidden = function(e) {
        return !we.expr.pseudos.visible(e)
    }, we.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, we.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Ft = {
            0: 200,
            1223: 204
        },
        Rt = we.ajaxSettings.xhr();
    ve.cors = !!Rt && "withCredentials" in Rt, ve.ajax = Rt = !!Rt, we.ajaxTransport(function(t) {
        var n, i;
        if (ve.cors || Rt && !t.crossDomain) return {
            send: function(r, o) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (s in t.xhrFields) a[s] = t.xhrFields[s];
                t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                for (s in r) a.setRequestHeader(s, r[s]);
                n = function(e) {
                    return function() {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Ft[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = a.ontimeout = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                    4 === a.readyState && e.setTimeout(function() {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function() {
                n && n()
            }
        }
    }), we.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), we.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return we.globalEval(e), e
            }
        }
    }), we.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), we.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(i, r) {
                    t = we("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                    }), se.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var qt = [],
        Bt = /(=)\?(?=&|$)|\?\?/;
    we.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = qt.pop() || we.expando + "_" + Et++;
            return this[e] = !0, e
        }
    }), we.ajaxPrefilter("json jsonp", function(t, n, i) {
        var r, o, s, a = !1 !== t.jsonp && (Bt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Bt.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = ye(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Bt, "$1" + r) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
            return s || we.error(r + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
            s = arguments
        }, i.always(function() {
            void 0 === o ? we(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, qt.push(r)), s && ye(o) && o(s[0]), s = o = void 0
        }), "script"
    }), ve.createHTMLDocument = function() {
        var e = se.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), we.parseHTML = function(e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var i, r, o;
        return t || (ve.createHTMLDocument ? ((i = (t = se.implementation.createHTMLDocument("")).createElement("base")).href = se.location.href, t.head.appendChild(i)) : t = se), r = Ee.exec(e), o = !n && [], r ? [t.createElement(r[1])] : (r = x([e], t, o), o && o.length && we(o).remove(), we.merge([], r.childNodes))
    }, we.fn.load = function(e, t, n) {
        var i, r, o, s = this,
            a = e.indexOf(" ");
        return a > -1 && (i = X(e.slice(a)), e = e.slice(0, a)), ye(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && we.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, s.html(i ? we("<div>").append(we.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, we.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        we.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), we.expr.pseudos.animated = function(e) {
        return we.grep(we.timers, function(t) {
            return e === t.elem
        }).length
    }, we.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, s, a, l, c = we.css(e, "position"),
                u = we(e),
                h = {};
            "static" === c && (e.style.position = "relative"), a = u.offset(), o = we.css(e, "top"), l = we.css(e, "left"), ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (s = (i = u.position()).top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), ye(t) && (t = t.call(e, n, we.extend({}, a))), null != t.top && (h.top = t.top - a.top + s), null != t.left && (h.left = t.left - a.left + r), "using" in t ? t.using.call(e, h) : u.css(h)
        }
    }, we.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                we.offset.setOffset(this, e, t)
            });
            var t, n, i = this[0];
            return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, i = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === we.css(i, "position")) t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === we.css(e, "position");) e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((r = we(e).offset()).top += we.css(e, "borderTopWidth", !0), r.left += we.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - r.top - we.css(i, "marginTop", !0),
                    left: t.left - r.left - we.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === we.css(e, "position");) e = e.offsetParent;
                return e || Je
            })
        }
    }), we.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        we.fn[e] = function(i) {
            return je(this, function(e, i, r) {
                var o;
                if (be(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === r) return o ? o[t] : e[i];
                o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r
            }, e, i, arguments.length)
        }
    }), we.each(["top", "left"], function(e, t) {
        we.cssHooks[t] = H(ve.pixelPosition, function(e, n) {
            if (n) return n = P(e, t), st.test(n) ? we(e).position()[t] + "px" : n
        })
    }), we.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        we.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            we.fn[i] = function(r, o) {
                var s = arguments.length && (n || "boolean" != typeof r),
                    a = n || (!0 === r || !0 === o ? "margin" : "border");
                return je(this, function(t, n, r) {
                    var o;
                    return be(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? we.css(t, n, a) : we.style(t, n, r, a)
                }, t, s ? r : void 0, s)
            }
        })
    }), we.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        we.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), we.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), we.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), we.proxy = function(e, t) {
        var n, i, r;
        if ("string" == typeof t && (n = e[t], t = e, e = n), ye(e)) return i = le.call(arguments, 2), r = function() {
            return e.apply(t || this, i.concat(le.call(arguments)))
        }, r.guid = e.guid = e.guid || we.guid++, r
    }, we.holdReady = function(e) {
        e ? we.readyWait++ : we.ready(!0)
    }, we.isArray = Array.isArray, we.parseJSON = JSON.parse, we.nodeName = o, we.isFunction = ye, we.isWindow = be, we.camelCase = p, we.type = i, we.now = Date.now, we.isNumeric = function(e) {
        var t = we.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return we
    });
    var $t = e.jQuery,
        Wt = e.$;
    return we.noConflict = function(t) {
        return e.$ === we && (e.$ = Wt), t && e.jQuery === we && (e.jQuery = $t), we
    }, t || (e.jQuery = e.$ = we), we
}), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(e, t, n, i, r) {
            return jQuery.easing[jQuery.easing.def](e, t, n, i, r)
        },
        easeInQuad: function(e, t, n, i, r) {
            return i * (t /= r) * t + n
        },
        easeOutQuad: function(e, t, n, i, r) {
            return -i * (t /= r) * (t - 2) + n
        },
        easeInOutQuad: function(e, t, n, i, r) {
            return (t /= r / 2) < 1 ? i / 2 * t * t + n : -i / 2 * (--t * (t - 2) - 1) + n
        },
        easeInCubic: function(e, t, n, i, r) {
            return i * (t /= r) * t * t + n
        },
        easeOutCubic: function(e, t, n, i, r) {
            return i * ((t = t / r - 1) * t * t + 1) + n
        },
        easeInOutCubic: function(e, t, n, i, r) {
            return (t /= r / 2) < 1 ? i / 2 * t * t * t + n : i / 2 * ((t -= 2) * t * t + 2) + n
        },
        easeInQuart: function(e, t, n, i, r) {
            return i * (t /= r) * t * t * t + n
        },
        easeOutQuart: function(e, t, n, i, r) {
            return -i * ((t = t / r - 1) * t * t * t - 1) + n
        },
        easeInOutQuart: function(e, t, n, i, r) {
            return (t /= r / 2) < 1 ? i / 2 * t * t * t * t + n : -i / 2 * ((t -= 2) * t * t * t - 2) + n
        },
        easeInQuint: function(e, t, n, i, r) {
            return i * (t /= r) * t * t * t * t + n
        },
        easeOutQuint: function(e, t, n, i, r) {
            return i * ((t = t / r - 1) * t * t * t * t + 1) + n
        },
        easeInOutQuint: function(e, t, n, i, r) {
            return (t /= r / 2) < 1 ? i / 2 * t * t * t * t * t + n : i / 2 * ((t -= 2) * t * t * t * t + 2) + n
        },
        easeInSine: function(e, t, n, i, r) {
            return -i * Math.cos(t / r * (Math.PI / 2)) + i + n
        },
        easeOutSine: function(e, t, n, i, r) {
            return i * Math.sin(t / r * (Math.PI / 2)) + n
        },
        easeInOutSine: function(e, t, n, i, r) {
            return -i / 2 * (Math.cos(Math.PI * t / r) - 1) + n
        },
        easeInExpo: function(e, t, n, i, r) {
            return 0 == t ? n : i * Math.pow(2, 10 * (t / r - 1)) + n
        },
        easeOutExpo: function(e, t, n, i, r) {
            return t == r ? n + i : i * (1 - Math.pow(2, -10 * t / r)) + n
        },
        easeInOutExpo: function(e, t, n, i, r) {
            return 0 == t ? n : t == r ? n + i : (t /= r / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + n : i / 2 * (2 - Math.pow(2, -10 * --t)) + n
        },
        easeInCirc: function(e, t, n, i, r) {
            return -i * (Math.sqrt(1 - (t /= r) * t) - 1) + n
        },
        easeOutCirc: function(e, t, n, i, r) {
            return i * Math.sqrt(1 - (t = t / r - 1) * t) + n
        },
        easeInOutCirc: function(e, t, n, i, r) {
            return (t /= r / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + n : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
        },
        easeInElastic: function(e, t, n, i, r) {
            var o = 1.70158,
                s = 0,
                a = i;
            if (0 == t) return n;
            if (1 == (t /= r)) return n + i;
            if (s || (s = .3 * r), a < Math.abs(i)) {
                a = i;
                var o = s / 4
            } else var o = s / (2 * Math.PI) * Math.asin(i / a);
            return -a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - o) * (2 * Math.PI) / s) + n
        },
        easeOutElastic: function(e, t, n, i, r) {
            var o = 1.70158,
                s = 0,
                a = i;
            if (0 == t) return n;
            if (1 == (t /= r)) return n + i;
            if (s || (s = .3 * r), a < Math.abs(i)) {
                a = i;
                var o = s / 4
            } else var o = s / (2 * Math.PI) * Math.asin(i / a);
            return a * Math.pow(2, -10 * t) * Math.sin((t * r - o) * (2 * Math.PI) / s) + i + n
        },
        easeInOutElastic: function(e, t, n, i, r) {
            var o = 1.70158,
                s = 0,
                a = i;
            if (0 == t) return n;
            if (2 == (t /= r / 2)) return n + i;
            if (s || (s = r * (.3 * 1.5)), a < Math.abs(i)) {
                a = i;
                var o = s / 4
            } else var o = s / (2 * Math.PI) * Math.asin(i / a);
            return t < 1 ? a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - o) * (2 * Math.PI) / s) * -.5 + n : a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * r - o) * (2 * Math.PI) / s) * .5 + i + n
        },
        easeInBack: function(e, t, n, i, r, o) {
            return void 0 == o && (o = 1.70158), i * (t /= r) * t * ((o + 1) * t - o) + n
        },
        easeOutBack: function(e, t, n, i, r, o) {
            return void 0 == o && (o = 1.70158), i * ((t = t / r - 1) * t * ((o + 1) * t + o) + 1) + n
        },
        easeInOutBack: function(e, t, n, i, r, o) {
            return void 0 == o && (o = 1.70158), (t /= r / 2) < 1 ? i / 2 * (t * t * ((1 + (o *= 1.525)) * t - o)) + n : i / 2 * ((t -= 2) * t * ((1 + (o *= 1.525)) * t + o) + 2) + n
        },
        easeInBounce: function(e, t, n, i, r) {
            return i - jQuery.easing.easeOutBounce(e, r - t, 0, i, r) + n
        },
        easeOutBounce: function(e, t, n, i, r) {
            return (t /= r) < 1 / 2.75 ? i * (7.5625 * t * t) + n : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
        },
        easeInOutBounce: function(e, t, n, i, r) {
            return t < r / 2 ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, i, r) + n : .5 * jQuery.easing.easeOutBounce(e, 2 * t - r, 0, i, r) + .5 * i + n
        }
    }),
    function(e, t, n, i) {
        var r = function(i, r) {
            this.elem = i, this.$elem = e(i), this.options = r, this.metadata = this.$elem.data("plugin-options"), this.$win = e(t), this.sections = {}, this.didScroll = !1, this.$doc = e(n), this.docHeight = this.$doc.height()
        };
        r.prototype = {
            defaults: {
                navItems: "a",
                currentClass: "current",
                changeHash: !1,
                easing: "swing",
                filter: "",
                scrollSpeed: 750,
                scrollThreshold: .5,
                begin: !1,
                end: !1,
                scrollChange: !1
            },
            init: function() {
                return this.config = e.extend({}, this.defaults, this.options, this.metadata), this.$nav = this.$elem.find(this.config.navItems), "" !== this.config.filter && (this.$nav = this.$nav.filter(this.config.filter)), this.$nav.on("click.onePageNav", e.proxy(this.handleClick, this)), this.getPositions(), this.bindInterval(), this.$win.on("resize.onePageNav", e.proxy(this.getPositions, this)), this
            },
            adjustNav: function(e, t) {
                e.$elem.find("." + e.config.currentClass).removeClass(e.config.currentClass), t.addClass(e.config.currentClass)
            },
            bindInterval: function() {
                var e, t = this;
                t.$win.on("scroll.onePageNav", function() {
                    t.didScroll = !0
                }), t.t = setInterval(function() {
                    e = t.$doc.height(), t.didScroll && (t.didScroll = !1, t.scrollChange()), e !== t.docHeight && (t.docHeight = e, t.getPositions())
                }, 250)
            },
            getHash: function(e) {
                return e.attr("href").split("#")[1]
            },
            getPositions: function() {
                var t, n, i, r = this;
                r.$nav.each(function() {
                    t = r.getHash(e(this)), i = e("#" + t), i.length && (n = i.offset().top, r.sections[t] = Math.round(n))
                })
            },
            getSection: function(e) {
                var t = null,
                    n = Math.round(this.$win.height() * this.config.scrollThreshold);
                for (var i in this.sections) this.sections[i] - n < e && (t = i);
                return t
            },
            handleClick: function(n) {
                var i = this,
                    r = e(n.currentTarget),
                    o = r.parent(),
                    s = "#" + i.getHash(r);
                o.hasClass(i.config.currentClass) || (i.config.begin && i.config.begin(), i.adjustNav(i, o), i.unbindInterval(), i.scrollTo(s, function() {
                    i.config.changeHash && (t.location.hash = s), i.bindInterval(), i.config.end && i.config.end()
                })), n.preventDefault()
            },
            scrollChange: function() {
                var e, t = this.$win.scrollTop(),
                    n = this.getSection(t);
                null !== n && (e = this.$elem.find('a[href$="#' + n + '"]').parent(), e.hasClass(this.config.currentClass) || (this.adjustNav(this, e), this.config.scrollChange && this.config.scrollChange(e)))
            },
            scrollTo: function(t, n) {
                var i = e(t).offset().top;
                e("html, body").animate({
                    scrollTop: i
                }, this.config.scrollSpeed, this.config.easing, n)
            },
            unbindInterval: function() {
                clearInterval(this.t), this.$win.unbind("scroll.onePageNav")
            }
        }, r.defaults = r.prototype.defaults, e.fn.onePageNav = function(e) {
            return this.each(function() {
                new r(this, e).init()
            })
        }
    }(jQuery, window, document),
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t()
    }(this, function() {
        "use strict";

        function e(e) {
            return e && "[object Function]" === {}.toString.call(e)
        }

        function t(e, t) {
            if (1 !== e.nodeType) return [];
            var n = getComputedStyle(e, null);
            return t ? n[t] : n
        }

        function n(e) {
            return "HTML" === e.nodeName ? e : e.parentNode || e.host
        }

        function i(e) {
            if (!e) return document.body;
            switch (e.nodeName) {
                case "HTML":
                case "BODY":
                    return e.ownerDocument.body;
                case "#document":
                    return e.body
            }
            var r = t(e),
                o = r.overflow,
                s = r.overflowX;
            return /(auto|scroll|overlay)/.test(o + r.overflowY + s) ? e : i(n(e))
        }

        function r(e) {
            return 11 === e ? oe : 10 === e ? se : oe || se
        }

        function o(e) {
            if (!e) return document.documentElement;
            for (var n = r(10) ? document.body : null, i = e.offsetParent; i === n && e.nextElementSibling;) i = (e = e.nextElementSibling).offsetParent;
            var s = i && i.nodeName;
            return s && "BODY" !== s && "HTML" !== s ? -1 !== ["TD", "TABLE"].indexOf(i.nodeName) && "static" === t(i, "position") ? o(i) : i : e ? e.ownerDocument.documentElement : document.documentElement
        }

        function s(e) {
            var t = e.nodeName;
            return "BODY" !== t && ("HTML" === t || o(e.firstElementChild) === e)
        }

        function a(e) {
            return null === e.parentNode ? e : a(e.parentNode)
        }

        function l(e, t) {
            if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
            var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
                i = n ? e : t,
                r = n ? t : e,
                c = document.createRange();
            c.setStart(i, 0), c.setEnd(r, 0);
            var u = c.commonAncestorContainer;
            if (e !== u && t !== u || i.contains(r)) return s(u) ? u : o(u);
            var h = a(e);
            return h.host ? l(h.host, t) : l(e, a(t).host)
        }

        function c(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top",
                n = "top" === t ? "scrollTop" : "scrollLeft",
                i = e.nodeName;
            if ("BODY" === i || "HTML" === i) {
                var r = e.ownerDocument.documentElement;
                return (e.ownerDocument.scrollingElement || r)[n]
            }
            return e[n]
        }

        function u(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                i = c(t, "top"),
                r = c(t, "left"),
                o = n ? -1 : 1;
            return e.top += i * o, e.bottom += i * o, e.left += r * o, e.right += r * o, e
        }

        function h(e, t) {
            var n = "x" === t ? "Left" : "Top",
                i = "Left" == n ? "Right" : "Bottom";
            return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10)
        }

        function d(e, t, n, i) {
            return Z(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], r(10) ? n["offset" + e] + i["margin" + ("Height" === e ? "Top" : "Left")] + i["margin" + ("Height" === e ? "Bottom" : "Right")] : 0)
        }

        function f() {
            var e = document.body,
                t = document.documentElement,
                n = r(10) && getComputedStyle(t);
            return {
                height: d("Height", e, t, n),
                width: d("Width", e, t, n)
            }
        }

        function p(e) {
            return ue({}, e, {
                right: e.left + e.width,
                bottom: e.top + e.height
            })
        }

        function m(e) {
            var n = {};
            try {
                if (r(10)) {
                    n = e.getBoundingClientRect();
                    var i = c(e, "top"),
                        o = c(e, "left");
                    n.top += i, n.left += o, n.bottom += i, n.right += o
                } else n = e.getBoundingClientRect()
            } catch (e) {}
            var s = {
                    left: n.left,
                    top: n.top,
                    width: n.right - n.left,
                    height: n.bottom - n.top
                },
                a = "HTML" === e.nodeName ? f() : {},
                l = a.width || e.clientWidth || s.right - s.left,
                u = a.height || e.clientHeight || s.bottom - s.top,
                d = e.offsetWidth - l,
                m = e.offsetHeight - u;
            if (d || m) {
                var g = t(e);
                d -= h(g, "x"), m -= h(g, "y"), s.width -= d, s.height -= m
            }
            return p(s)
        }

        function g(e, n) {
            var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                s = r(10),
                a = "HTML" === n.nodeName,
                l = m(e),
                c = m(n),
                h = i(e),
                d = t(n),
                f = parseFloat(d.borderTopWidth, 10),
                g = parseFloat(d.borderLeftWidth, 10);
            o && "HTML" === n.nodeName && (c.top = Z(c.top, 0), c.left = Z(c.left, 0));
            var v = p({
                top: l.top - c.top - f,
                left: l.left - c.left - g,
                width: l.width,
                height: l.height
            });
            if (v.marginTop = 0, v.marginLeft = 0, !s && a) {
                var y = parseFloat(d.marginTop, 10),
                    b = parseFloat(d.marginLeft, 10);
                v.top -= f - y, v.bottom -= f - y, v.left -= g - b, v.right -= g - b, v.marginTop = y, v.marginLeft = b
            }
            return (s && !o ? n.contains(h) : n === h && "BODY" !== h.nodeName) && (v = u(v, n)), v
        }

        function v(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                n = e.ownerDocument.documentElement,
                i = g(e, n),
                r = Z(n.clientWidth, window.innerWidth || 0),
                o = Z(n.clientHeight, window.innerHeight || 0),
                s = t ? 0 : c(n),
                a = t ? 0 : c(n, "left");
            return p({
                top: s - i.top + i.marginTop,
                left: a - i.left + i.marginLeft,
                width: r,
                height: o
            })
        }

        function y(e) {
            var i = e.nodeName;
            return "BODY" !== i && "HTML" !== i && ("fixed" === t(e, "position") || y(n(e)))
        }

        function b(e) {
            if (!e || !e.parentElement || r()) return document.documentElement;
            for (var n = e.parentElement; n && "none" === t(n, "transform");) n = n.parentElement;
            return n || document.documentElement
        }

        function _(e, t, r, o) {
            var s = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
                a = {
                    top: 0,
                    left: 0
                },
                c = s ? b(e) : l(e, t);
            if ("viewport" === o) a = v(c, s);
            else {
                var u;
                "scrollParent" === o ? (u = i(n(t)), "BODY" === u.nodeName && (u = e.ownerDocument.documentElement)) : u = "window" === o ? e.ownerDocument.documentElement : o;
                var h = g(u, c, s);
                if ("HTML" !== u.nodeName || y(c)) a = h;
                else {
                    var d = f(),
                        p = d.height,
                        m = d.width;
                    a.top += h.top - h.marginTop, a.bottom = p + h.top, a.left += h.left - h.marginLeft, a.right = m + h.left
                }
            }
            return a.left += r, a.top += r, a.right -= r, a.bottom -= r, a
        }

        function w(e) {
            return e.width * e.height
        }

        function C(e, t, n, i, r) {
            var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
            if (-1 === e.indexOf("auto")) return e;
            var s = _(n, i, o, r),
                a = {
                    top: {
                        width: s.width,
                        height: t.top - s.top
                    },
                    right: {
                        width: s.right - t.right,
                        height: s.height
                    },
                    bottom: {
                        width: s.width,
                        height: s.bottom - t.bottom
                    },
                    left: {
                        width: t.left - s.left,
                        height: s.height
                    }
                },
                l = Object.keys(a).map(function(e) {
                    return ue({
                        key: e
                    }, a[e], {
                        area: w(a[e])
                    })
                }).sort(function(e, t) {
                    return t.area - e.area
                }),
                c = l.filter(function(e) {
                    var t = e.width,
                        i = e.height;
                    return t >= n.clientWidth && i >= n.clientHeight
                }),
                u = 0 < c.length ? c[0].key : l[0].key,
                h = e.split("-")[1];
            return u + (h ? "-" + h : "")
        }

        function x(e, t, n) {
            var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            return g(n, i ? b(t) : l(t, n), i)
        }

        function T(e) {
            var t = getComputedStyle(e),
                n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
                i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
            return {
                width: e.offsetWidth + i,
                height: e.offsetHeight + n
            }
        }

        function D(e) {
            var t = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            };
            return e.replace(/left|right|bottom|top/g, function(e) {
                return t[e]
            })
        }

        function E(e, t, n) {
            n = n.split("-")[0];
            var i = T(e),
                r = {
                    width: i.width,
                    height: i.height
                },
                o = -1 !== ["right", "left"].indexOf(n),
                s = o ? "top" : "left",
                a = o ? "left" : "top",
                l = o ? "height" : "width",
                c = o ? "width" : "height";
            return r[s] = t[s] + t[l] / 2 - i[l] / 2, r[a] = n === a ? t[a] - i[c] : t[D(a)], r
        }

        function k(e, t) {
            return Array.prototype.find ? e.find(t) : e.filter(t)[0]
        }

        function S(e, t, n) {
            if (Array.prototype.findIndex) return e.findIndex(function(e) {
                return e[t] === n
            });
            var i = k(e, function(e) {
                return e[t] === n
            });
            return e.indexOf(i)
        }

        function I(t, n, i) {
            return (void 0 === i ? t : t.slice(0, S(t, "name", i))).forEach(function(t) {
                t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                var i = t.function || t.fn;
                t.enabled && e(i) && (n.offsets.popper = p(n.offsets.popper), n.offsets.reference = p(n.offsets.reference), n = i(n, t))
            }), n
        }

        function A() {
            if (!this.state.isDestroyed) {
                var e = {
                    instance: this,
                    styles: {},
                    arrowStyles: {},
                    attributes: {},
                    flipped: !1,
                    offsets: {}
                };
                e.offsets.reference = x(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = C(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = E(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = I(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
            }
        }

        function N(e, t) {
            return e.some(function(e) {
                var n = e.name;
                return e.enabled && n === t
            })
        }

        function O(e) {
            for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
                var r = t[i],
                    o = r ? "" + r + n : e;
                if (void 0 !== document.body.style[o]) return o
            }
            return null
        }

        function M() {
            return this.state.isDestroyed = !0, N(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[O("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
        }

        function j(e) {
            var t = e.ownerDocument;
            return t ? t.defaultView : window
        }

        function P(e, t, n, r) {
            var o = "BODY" === e.nodeName,
                s = o ? e.ownerDocument.defaultView : e;
            s.addEventListener(t, n, {
                passive: !0
            }), o || P(i(s.parentNode), t, n, r), r.push(s)
        }

        function H(e, t, n, r) {
            n.updateBound = r, j(e).addEventListener("resize", n.updateBound, {
                passive: !0
            });
            var o = i(e);
            return P(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n
        }

        function L() {
            this.state.eventsEnabled || (this.state = H(this.reference, this.options, this.state, this.scheduleUpdate))
        }

        function F(e, t) {
            return j(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) {
                e.removeEventListener("scroll", t.updateBound)
            }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
        }

        function R() {
            this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = F(this.reference, this.state))
        }

        function q(e) {
            return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
        }

        function B(e, t) {
            Object.keys(t).forEach(function(n) {
                var i = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && q(t[n]) && (i = "px"), e.style[n] = t[n] + i
            })
        }

        function $(e, t) {
            Object.keys(t).forEach(function(n) {
                !1 === t[n] ? e.removeAttribute(n) : e.setAttribute(n, t[n])
            })
        }

        function W(e, t, n) {
            var i = k(e, function(e) {
                    return e.name === t
                }),
                r = !!i && e.some(function(e) {
                    return e.name === n && e.enabled && e.order < i.order
                });
            if (!r) {
                var o = "`" + t + "`";
                console.warn("`" + n + "` modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
            }
            return r
        }

        function U(e) {
            return "end" === e ? "start" : "start" === e ? "end" : e
        }

        function V(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                n = de.indexOf(e),
                i = de.slice(n + 1).concat(de.slice(0, n));
            return t ? i.reverse() : i
        }

        function z(e, t, n, i) {
            var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                o = +r[1],
                s = r[2];
            if (!o) return e;
            if (0 === s.indexOf("%")) {
                var a;
                switch (s) {
                    case "%p":
                        a = n;
                        break;
                    case "%":
                    case "%r":
                    default:
                        a = i
                }
                return p(a)[t] / 100 * o
            }
            if ("vh" === s || "vw" === s) {
                return ("vh" === s ? Z(document.documentElement.clientHeight, window.innerHeight || 0) : Z(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o
            }
            return o
        }

        function K(e, t, n, i) {
            var r = [0, 0],
                o = -1 !== ["right", "left"].indexOf(i),
                s = e.split(/(\+|\-)/).map(function(e) {
                    return e.trim()
                }),
                a = s.indexOf(k(s, function(e) {
                    return -1 !== e.search(/,|\s/)
                }));
            s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
            var l = /\s*,\s*|\s+/,
                c = -1 === a ? [s] : [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))];
            return c = c.map(function(e, i) {
                var r = (1 === i ? !o : o) ? "height" : "width",
                    s = !1;
                return e.reduce(function(e, t) {
                    return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, s = !0, e) : s ? (e[e.length - 1] += t, s = !1, e) : e.concat(t)
                }, []).map(function(e) {
                    return z(e, r, t, n)
                })
            }), c.forEach(function(e, t) {
                e.forEach(function(n, i) {
                    q(n) && (r[t] += n * ("-" === e[i - 1] ? -1 : 1))
                })
            }), r
        }

        function Q(e, t) {
            var n, i = t.offset,
                r = e.placement,
                o = e.offsets,
                s = o.popper,
                a = o.reference,
                l = r.split("-")[0];
            return n = q(+i) ? [+i, 0] : K(i, s, a, l), "left" === l ? (s.top += n[0], s.left -= n[1]) : "right" === l ? (s.top += n[0], s.left += n[1]) : "top" === l ? (s.left += n[0], s.top -= n[1]) : "bottom" === l && (s.left += n[0], s.top += n[1]), e.popper = s, e
        }
        for (var Y = Math.min, X = Math.round, G = Math.floor, Z = Math.max, J = "undefined" != typeof window && "undefined" != typeof document, ee = ["Edge", "Trident", "Firefox"], te = 0, ne = 0; ne < ee.length; ne += 1)
            if (J && 0 <= navigator.userAgent.indexOf(ee[ne])) {
                te = 1;
                break
            } var ie = J && window.Promise,
            re = ie ? function(e) {
                var t = !1;
                return function() {
                    t || (t = !0, window.Promise.resolve().then(function() {
                        t = !1, e()
                    }))
                }
            } : function(e) {
                var t = !1;
                return function() {
                    t || (t = !0, setTimeout(function() {
                        t = !1, e()
                    }, te))
                }
            },
            oe = J && !(!window.MSInputMethodContext || !document.documentMode),
            se = J && /MSIE 10/.test(navigator.userAgent),
            ae = function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            },
            le = function() {
                function e(e, t) {
                    for (var n, i = 0; i < t.length; i++) n = t[i], n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            ce = function(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            },
            ue = Object.assign || function(e) {
                for (var t, n = 1; n < arguments.length; n++)
                    for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e
            },
            he = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
            de = he.slice(3),
            fe = {
                FLIP: "flip",
                CLOCKWISE: "clockwise",
                COUNTERCLOCKWISE: "counterclockwise"
            },
            pe = function() {
                function t(n, i) {
                    var r = this,
                        o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                    ae(this, t), this.scheduleUpdate = function() {
                        return requestAnimationFrame(r.update)
                    }, this.update = re(this.update.bind(this)), this.options = ue({}, t.Defaults, o), this.state = {
                        isDestroyed: !1,
                        isCreated: !1,
                        scrollParents: []
                    }, this.reference = n && n.jquery ? n[0] : n, this.popper = i && i.jquery ? i[0] : i, this.options.modifiers = {}, Object.keys(ue({}, t.Defaults.modifiers, o.modifiers)).forEach(function(e) {
                        r.options.modifiers[e] = ue({}, t.Defaults.modifiers[e] || {}, o.modifiers ? o.modifiers[e] : {})
                    }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                        return ue({
                            name: e
                        }, r.options.modifiers[e])
                    }).sort(function(e, t) {
                        return e.order - t.order
                    }), this.modifiers.forEach(function(t) {
                        t.enabled && e(t.onLoad) && t.onLoad(r.reference, r.popper, r.options, t, r.state)
                    }), this.update();
                    var s = this.options.eventsEnabled;
                    s && this.enableEventListeners(), this.state.eventsEnabled = s
                }
                return le(t, [{
                    key: "update",
                    value: function() {
                        return A.call(this)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        return M.call(this)
                    }
                }, {
                    key: "enableEventListeners",
                    value: function() {
                        return L.call(this)
                    }
                }, {
                    key: "disableEventListeners",
                    value: function() {
                        return R.call(this)
                    }
                }]), t
            }();
        return pe.Utils = ("undefined" == typeof window ? global : window).PopperUtils, pe.placements = he, pe.Defaults = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function() {},
            onUpdate: function() {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function(e) {
                        var t = e.placement,
                            n = t.split("-")[0],
                            i = t.split("-")[1];
                        if (i) {
                            var r = e.offsets,
                                o = r.reference,
                                s = r.popper,
                                a = -1 !== ["bottom", "top"].indexOf(n),
                                l = a ? "left" : "top",
                                c = a ? "width" : "height",
                                u = {
                                    start: ce({}, l, o[l]),
                                    end: ce({}, l, o[l] + o[c] - s[c])
                                };
                            e.offsets.popper = ue({}, s, u[i])
                        }
                        return e
                    }
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: Q,
                    offset: 0
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function(e, t) {
                        var n = t.boundariesElement || o(e.instance.popper);
                        e.instance.reference === n && (n = o(n));
                        var i = O("transform"),
                            r = e.instance.popper.style,
                            s = r.top,
                            a = r.left,
                            l = r[i];
                        r.top = "", r.left = "", r[i] = "";
                        var c = _(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                        r.top = s, r.left = a, r[i] = l, t.boundaries = c;
                        var u = t.priority,
                            h = e.offsets.popper,
                            d = {
                                primary: function(e) {
                                    var n = h[e];
                                    return h[e] < c[e] && !t.escapeWithReference && (n = Z(h[e], c[e])), ce({}, e, n)
                                },
                                secondary: function(e) {
                                    var n = "right" === e ? "left" : "top",
                                        i = h[n];
                                    return h[e] > c[e] && !t.escapeWithReference && (i = Y(h[n], c[e] - ("right" === e ? h.width : h.height))), ce({}, n, i)
                                }
                            };
                        return u.forEach(function(e) {
                            var t = -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
                            h = ue({}, h, d[t](e))
                        }), e.offsets.popper = h, e
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent"
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function(e) {
                        var t = e.offsets,
                            n = t.popper,
                            i = t.reference,
                            r = e.placement.split("-")[0],
                            o = G,
                            s = -1 !== ["top", "bottom"].indexOf(r),
                            a = s ? "right" : "bottom",
                            l = s ? "left" : "top",
                            c = s ? "width" : "height";
                        return n[a] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[a]) && (e.offsets.popper[l] = o(i[a])), e
                    }
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function(e, n) {
                        var i;
                        if (!W(e.instance.modifiers, "arrow", "keepTogether")) return e;
                        var r = n.element;
                        if ("string" == typeof r) {
                            if (!(r = e.instance.popper.querySelector(r))) return e
                        } else if (!e.instance.popper.contains(r)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                        var o = e.placement.split("-")[0],
                            s = e.offsets,
                            a = s.popper,
                            l = s.reference,
                            c = -1 !== ["left", "right"].indexOf(o),
                            u = c ? "height" : "width",
                            h = c ? "Top" : "Left",
                            d = h.toLowerCase(),
                            f = c ? "left" : "top",
                            m = c ? "bottom" : "right",
                            g = T(r)[u];
                        l[m] - g < a[d] && (e.offsets.popper[d] -= a[d] - (l[m] - g)), l[d] + g > a[m] && (e.offsets.popper[d] += l[d] + g - a[m]), e.offsets.popper = p(e.offsets.popper);
                        var v = l[d] + l[u] / 2 - g / 2,
                            y = t(e.instance.popper),
                            b = parseFloat(y["margin" + h], 10),
                            _ = parseFloat(y["border" + h + "Width"], 10),
                            w = v - e.offsets.popper[d] - b - _;
                        return w = Z(Y(a[u] - g, w), 0), e.arrowElement = r, e.offsets.arrow = (i = {}, ce(i, d, X(w)), ce(i, f, ""), i), e
                    },
                    element: "[x-arrow]"
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function(e, t) {
                        if (N(e.instance.modifiers, "inner")) return e;
                        if (e.flipped && e.placement === e.originalPlacement) return e;
                        var n = _(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                            i = e.placement.split("-")[0],
                            r = D(i),
                            o = e.placement.split("-")[1] || "",
                            s = [];
                        switch (t.behavior) {
                            case fe.FLIP:
                                s = [i, r];
                                break;
                            case fe.CLOCKWISE:
                                s = V(i);
                                break;
                            case fe.COUNTERCLOCKWISE:
                                s = V(i, !0);
                                break;
                            default:
                                s = t.behavior
                        }
                        return s.forEach(function(a, l) {
                            if (i !== a || s.length === l + 1) return e;
                            i = e.placement.split("-")[0], r = D(i);
                            var c = e.offsets.popper,
                                u = e.offsets.reference,
                                h = G,
                                d = "left" === i && h(c.right) > h(u.left) || "right" === i && h(c.left) < h(u.right) || "top" === i && h(c.bottom) > h(u.top) || "bottom" === i && h(c.top) < h(u.bottom),
                                f = h(c.left) < h(n.left),
                                p = h(c.right) > h(n.right),
                                m = h(c.top) < h(n.top),
                                g = h(c.bottom) > h(n.bottom),
                                v = "left" === i && f || "right" === i && p || "top" === i && m || "bottom" === i && g,
                                y = -1 !== ["top", "bottom"].indexOf(i),
                                b = !!t.flipVariations && (y && "start" === o && f || y && "end" === o && p || !y && "start" === o && m || !y && "end" === o && g);
                            (d || v || b) && (e.flipped = !0, (d || v) && (i = s[l + 1]), b && (o = U(o)), e.placement = i + (o ? "-" + o : ""), e.offsets.popper = ue({}, e.offsets.popper, E(e.instance.popper, e.offsets.reference, e.placement)), e = I(e.instance.modifiers, e, "flip"))
                        }), e
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport"
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function(e) {
                        var t = e.placement,
                            n = t.split("-")[0],
                            i = e.offsets,
                            r = i.popper,
                            o = i.reference,
                            s = -1 !== ["left", "right"].indexOf(n),
                            a = -1 === ["top", "left"].indexOf(n);
                        return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0), e.placement = D(t), e.offsets.popper = p(r), e
                    }
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function(e) {
                        if (!W(e.instance.modifiers, "hide", "preventOverflow")) return e;
                        var t = e.offsets.reference,
                            n = k(e.instance.modifiers, function(e) {
                                return "preventOverflow" === e.name
                            }).boundaries;
                        if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                            if (!0 === e.hide) return e;
                            e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                        } else {
                            if (!1 === e.hide) return e;
                            e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                        }
                        return e
                    }
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function(e, t) {
                        var n = t.x,
                            i = t.y,
                            r = e.offsets.popper,
                            s = k(e.instance.modifiers, function(e) {
                                return "applyStyle" === e.name
                            }).gpuAcceleration;
                        void 0 !== s && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var a, l, c = void 0 === s ? t.gpuAcceleration : s,
                            u = o(e.instance.popper),
                            h = m(u),
                            d = {
                                position: r.position
                            },
                            f = {
                                left: G(r.left),
                                top: X(r.top),
                                bottom: X(r.bottom),
                                right: G(r.right)
                            },
                            p = "bottom" === n ? "top" : "bottom",
                            g = "right" === i ? "left" : "right",
                            v = O("transform");
                        if (l = "bottom" == p ? -h.height + f.bottom : f.top, a = "right" == g ? -h.width + f.right : f.left, c && v) d[v] = "translate3d(" + a + "px, " + l + "px, 0)", d[p] = 0, d[g] = 0, d.willChange = "transform";
                        else {
                            var y = "bottom" == p ? -1 : 1,
                                b = "right" == g ? -1 : 1;
                            d[p] = l * y, d[g] = a * b, d.willChange = p + ", " + g
                        }
                        var _ = {
                            "x-placement": e.placement
                        };
                        return e.attributes = ue({}, _, e.attributes), e.styles = ue({}, d, e.styles), e.arrowStyles = ue({}, e.offsets.arrow, e.arrowStyles), e
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right"
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function(e) {
                        return B(e.instance.popper, e.styles), $(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && B(e.arrowElement, e.arrowStyles), e
                    },
                    onLoad: function(e, t, n, i, r) {
                        var o = x(r, t, e, n.positionFixed),
                            s = C(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                        return t.setAttribute("x-placement", s), B(t, {
                            position: n.positionFixed ? "fixed" : "absolute"
                        }), n
                    },
                    gpuAcceleration: void 0
                }
            }
        }, pe
    }),
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t(e.bootstrap = {}, e.jQuery, e.Popper)
    }(this, function(e, t, n) {
        "use strict";

        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function r(e, t, n) {
            return t && i(e.prototype, t), n && i(e, n), e
        }

        function o(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), i.forEach(function(t) {
                    var i, r, o;
                    i = e, o = n[r = t], r in i ? Object.defineProperty(i, r, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : i[r] = o
                })
            }
            return e
        }
        t = t && t.hasOwnProperty("default") ? t.default : t, n = n && n.hasOwnProperty("default") ? n.default : n;
        var s, a, l, c, u, h, d, f, p, m, g, v, y, b, _, w, C, x, T, D, E, k, S, I, A, N, O, M, j, P, H, L, F, R, q, B, $, W, U, V, z, K, Q, Y, X, G, Z, J, ee, te, ne, ie, re, oe, se, ae, le, ce, ue, he, de, fe, pe, me, ge, ve, ye, be, _e, we, Ce, xe, Te, De, Ee, ke, Se, Ie, Ae, Ne, Oe, Me, je, Pe, He, Le, Fe, Re, qe, Be, $e, We, Ue, Ve, ze, Ke, Qe, Ye, Xe, Ge, Ze, Je, et, tt, nt, it, rt, ot, st, at, lt, ct, ut, ht, dt, ft, pt, mt, gt, vt, yt, bt, _t, wt, Ct, xt, Tt, Dt, Et, kt, St, It, At, Nt, Ot, Mt, jt, Pt, Ht, Lt, Ft, Rt, qt, Bt, $t, Wt, Ut, Vt, zt, Kt, Qt, Yt, Xt, Gt, Zt, Jt, en, tn, nn, rn, on, sn, an, ln, cn, un, hn, dn, fn, pn, mn, gn, vn, yn, bn, _n, wn, Cn, xn, Tn, Dn, En, kn, Sn, In, An, Nn, On, Mn, jn, Pn, Hn, Ln, Fn, Rn, qn, Bn = function(e) {
                function t(t) {
                    var n = this,
                        r = !1;
                    return e(this).one(i.TRANSITION_END, function() {
                        r = !0
                    }), setTimeout(function() {
                        r || i.triggerTransitionEnd(n)
                    }, t), this
                }
                var n = "transitionend",
                    i = {
                        TRANSITION_END: "bsTransitionEnd",
                        getUID: function(e) {
                            for (; e += ~~(1e6 * Math.random()), document.getElementById(e););
                            return e
                        },
                        getSelectorFromElement: function(e) {
                            var t = e.getAttribute("data-target");
                            t && "#" !== t || (t = e.getAttribute("href") || "");
                            try {
                                return document.querySelector(t) ? t : null
                            } catch (e) {
                                return null
                            }
                        },
                        getTransitionDurationFromElement: function(t) {
                            if (!t) return 0;
                            var n = e(t).css("transition-duration");
                            return parseFloat(n) ? (n = n.split(",")[0], 1e3 * parseFloat(n)) : 0
                        },
                        reflow: function(e) {
                            return e.offsetHeight
                        },
                        triggerTransitionEnd: function(t) {
                            e(t).trigger(n)
                        },
                        supportsTransitionEnd: function() {
                            return Boolean(n)
                        },
                        isElement: function(e) {
                            return (e[0] || e).nodeType
                        },
                        typeCheckConfig: function(e, t, n) {
                            for (var r in n)
                                if (Object.prototype.hasOwnProperty.call(n, r)) {
                                    var o = n[r],
                                        s = t[r],
                                        a = s && i.isElement(s) ? "element" : (l = s, {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase());
                                    if (!new RegExp(o).test(a)) throw new Error(e.toUpperCase() + ': Option "' + r + '" provided type "' + a + '" but expected type "' + o + '".')
                                } var l
                        }
                    };
                return e.fn.emulateTransitionEnd = t, e.event.special[i.TRANSITION_END] = {
                    bindType: n,
                    delegateType: n,
                    handle: function(t) {
                        if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
                    }
                }, i
            }(t),
            $n = (a = "alert", c = "." + (l = "bs.alert"), u = (s = t).fn[a], h = {
                CLOSE: "close" + c,
                CLOSED: "closed" + c,
                CLICK_DATA_API: "click" + c + ".data-api"
            }, d = "alert", f = "fade", p = "show", m = function() {
                function e(e) {
                    this._element = e
                }
                var t = e.prototype;
                return t.close = function(e) {
                    var t = this._element;
                    e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
                }, t.dispose = function() {
                    s.removeData(this._element, l), this._element = null
                }, t._getRootElement = function(e) {
                    var t = Bn.getSelectorFromElement(e),
                        n = !1;
                    return t && (n = document.querySelector(t)), n || (n = s(e).closest("." + d)[0]), n
                }, t._triggerCloseEvent = function(e) {
                    var t = s.Event(h.CLOSE);
                    return s(e).trigger(t), t
                }, t._removeElement = function(e) {
                    var t = this;
                    if (s(e).removeClass(p), s(e).hasClass(f)) {
                        var n = Bn.getTransitionDurationFromElement(e);
                        s(e).one(Bn.TRANSITION_END, function(n) {
                            return t._destroyElement(e, n)
                        }).emulateTransitionEnd(n)
                    } else this._destroyElement(e)
                }, t._destroyElement = function(e) {
                    s(e).detach().trigger(h.CLOSED).remove()
                }, e._jQueryInterface = function(t) {
                    return this.each(function() {
                        var n = s(this),
                            i = n.data(l);
                        i || (i = new e(this), n.data(l, i)), "close" === t && i[t](this)
                    })
                }, e._handleDismiss = function(e) {
                    return function(t) {
                        t && t.preventDefault(), e.close(this)
                    }
                }, r(e, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.1.3"
                    }
                }]), e
            }(), s(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', m._handleDismiss(new m)), s.fn[a] = m._jQueryInterface, s.fn[a].Constructor = m, s.fn[a].noConflict = function() {
                return s.fn[a] = u, m._jQueryInterface
            }, m),
            Wn = (v = "button", b = "." + (y = "bs.button"), _ = ".data-api", w = (g = t).fn[v], C = "active", x = "btn", D = '[data-toggle^="button"]', E = '[data-toggle="buttons"]', k = "input", S = ".active", I = ".btn", A = {
                CLICK_DATA_API: "click" + b + _,
                FOCUS_BLUR_DATA_API: (T = "focus") + b + _ + " blur" + b + _
            }, N = function() {
                function e(e) {
                    this._element = e
                }
                var t = e.prototype;
                return t.toggle = function() {
                    var e = !0,
                        t = !0,
                        n = g(this._element).closest(E)[0];
                    if (n) {
                        var i = this._element.querySelector(k);
                        if (i) {
                            if ("radio" === i.type)
                                if (i.checked && this._element.classList.contains(C)) e = !1;
                                else {
                                    var r = n.querySelector(S);
                                    r && g(r).removeClass(C)
                                } if (e) {
                                if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                                i.checked = !this._element.classList.contains(C), g(i).trigger("change")
                            }
                            i.focus(), t = !1
                        }
                    }
                    t && this._element.setAttribute("aria-pressed", !this._element.classList.contains(C)), e && g(this._element).toggleClass(C)
                }, t.dispose = function() {
                    g.removeData(this._element, y), this._element = null
                }, e._jQueryInterface = function(t) {
                    return this.each(function() {
                        var n = g(this).data(y);
                        n || (n = new e(this), g(this).data(y, n)), "toggle" === t && n[t]()
                    })
                }, r(e, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.1.3"
                    }
                }]), e
            }(), g(document).on(A.CLICK_DATA_API, D, function(e) {
                e.preventDefault();
                var t = e.target;
                g(t).hasClass(x) || (t = g(t).closest(I)), N._jQueryInterface.call(g(t), "toggle")
            }).on(A.FOCUS_BLUR_DATA_API, D, function(e) {
                var t = g(e.target).closest(I)[0];
                g(t).toggleClass(T, /^focus(in)?$/.test(e.type))
            }), g.fn[v] = N._jQueryInterface, g.fn[v].Constructor = N, g.fn[v].noConflict = function() {
                return g.fn[v] = w, N._jQueryInterface
            }, N),
            Un = (M = "carousel", P = "." + (j = "bs.carousel"), H = ".data-api", L = (O = t).fn[M], F = {
                interval: 5e3,
                keyboard: !0,
                slide: !1,
                pause: "hover",
                wrap: !0
            }, R = {
                interval: "(number|boolean)",
                keyboard: "boolean",
                slide: "(boolean|string)",
                pause: "(string|boolean)",
                wrap: "boolean"
            }, q = "next", B = "prev", $ = "left", W = "right", U = {
                SLIDE: "slide" + P,
                SLID: "slid" + P,
                KEYDOWN: "keydown" + P,
                MOUSEENTER: "mouseenter" + P,
                MOUSELEAVE: "mouseleave" + P,
                TOUCHEND: "touchend" + P,
                LOAD_DATA_API: "load" + P + H,
                CLICK_DATA_API: "click" + P + H
            }, V = "carousel", z = "active", K = "slide", Q = "carousel-item-right", Y = "carousel-item-left", X = "carousel-item-next", G = "carousel-item-prev", Z = ".active", J = ".active.carousel-item", ee = ".carousel-item", te = ".carousel-item-next, .carousel-item-prev", ne = ".carousel-indicators", ie = "[data-slide], [data-slide-to]", re = '[data-ride="carousel"]', oe = function() {
                function e(e, t) {
                    this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(t), this._element = O(e)[0], this._indicatorsElement = this._element.querySelector(ne), this._addEventListeners()
                }
                var t = e.prototype;
                return t.next = function() {
                    this._isSliding || this._slide(q)
                }, t.nextWhenVisible = function() {
                    !document.hidden && O(this._element).is(":visible") && "hidden" !== O(this._element).css("visibility") && this.next()
                }, t.prev = function() {
                    this._isSliding || this._slide(B)
                }, t.pause = function(e) {
                    e || (this._isPaused = !0), this._element.querySelector(te) && (Bn.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                }, t.cycle = function(e) {
                    e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                }, t.to = function(e) {
                    var t = this;
                    this._activeElement = this._element.querySelector(J);
                    var n = this._getItemIndex(this._activeElement);
                    if (!(e > this._items.length - 1 || e < 0))
                        if (this._isSliding) O(this._element).one(U.SLID, function() {
                            return t.to(e)
                        });
                        else {
                            if (n === e) return this.pause(), void this.cycle();
                            var i = n < e ? q : B;
                            this._slide(i, this._items[e])
                        }
                }, t.dispose = function() {
                    O(this._element).off(P), O.removeData(this._element, j), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                }, t._getConfig = function(e) {
                    return e = o({}, F, e), Bn.typeCheckConfig(M, e, R), e
                }, t._addEventListeners = function() {
                    var e = this;
                    this._config.keyboard && O(this._element).on(U.KEYDOWN, function(t) {
                        return e._keydown(t)
                    }), "hover" === this._config.pause && (O(this._element).on(U.MOUSEENTER, function(t) {
                        return e.pause(t)
                    }).on(U.MOUSELEAVE, function(t) {
                        return e.cycle(t)
                    }), "ontouchstart" in document.documentElement && O(this._element).on(U.TOUCHEND, function() {
                        e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function(t) {
                            return e.cycle(t)
                        }, 500 + e._config.interval)
                    }))
                }, t._keydown = function(e) {
                    if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                        case 37:
                            e.preventDefault(), this.prev();
                            break;
                        case 39:
                            e.preventDefault(), this.next()
                    }
                }, t._getItemIndex = function(e) {
                    return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(ee)) : [], this._items.indexOf(e)
                }, t._getItemByDirection = function(e, t) {
                    var n = e === q,
                        i = e === B,
                        r = this._getItemIndex(t),
                        o = this._items.length - 1;
                    if ((i && 0 === r || n && r === o) && !this._config.wrap) return t;
                    var s = (r + (e === B ? -1 : 1)) % this._items.length;
                    return -1 === s ? this._items[this._items.length - 1] : this._items[s]
                }, t._triggerSlideEvent = function(e, t) {
                    var n = this._getItemIndex(e),
                        i = this._getItemIndex(this._element.querySelector(J)),
                        r = O.Event(U.SLIDE, {
                            relatedTarget: e,
                            direction: t,
                            from: i,
                            to: n
                        });
                    return O(this._element).trigger(r), r
                }, t._setActiveIndicatorElement = function(e) {
                    if (this._indicatorsElement) {
                        var t = [].slice.call(this._indicatorsElement.querySelectorAll(Z));
                        O(t).removeClass(z);
                        var n = this._indicatorsElement.children[this._getItemIndex(e)];
                        n && O(n).addClass(z)
                    }
                }, t._slide = function(e, t) {
                    var n, i, r, o = this,
                        s = this._element.querySelector(J),
                        a = this._getItemIndex(s),
                        l = t || s && this._getItemByDirection(e, s),
                        c = this._getItemIndex(l),
                        u = Boolean(this._interval);
                    if (e === q ? (n = Y, i = X, r = $) : (n = Q, i = G, r = W), l && O(l).hasClass(z)) this._isSliding = !1;
                    else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && s && l) {
                        this._isSliding = !0, u && this.pause(), this._setActiveIndicatorElement(l);
                        var h = O.Event(U.SLID, {
                            relatedTarget: l,
                            direction: r,
                            from: a,
                            to: c
                        });
                        if (O(this._element).hasClass(K)) {
                            O(l).addClass(i), Bn.reflow(l), O(s).addClass(n), O(l).addClass(n);
                            var d = Bn.getTransitionDurationFromElement(s);
                            O(s).one(Bn.TRANSITION_END, function() {
                                O(l).removeClass(n + " " + i).addClass(z), O(s).removeClass(z + " " + i + " " + n), o._isSliding = !1, setTimeout(function() {
                                    return O(o._element).trigger(h)
                                }, 0)
                            }).emulateTransitionEnd(d)
                        } else O(s).removeClass(z), O(l).addClass(z), this._isSliding = !1, O(this._element).trigger(h);
                        u && this.cycle()
                    }
                }, e._jQueryInterface = function(t) {
                    return this.each(function() {
                        var n = O(this).data(j),
                            i = o({}, F, O(this).data());
                        "object" == typeof t && (i = o({}, i, t));
                        var r = "string" == typeof t ? t : i.slide;
                        if (n || (n = new e(this, i), O(this).data(j, n)), "number" == typeof t) n.to(t);
                        else if ("string" == typeof r) {
                            if (void 0 === n[r]) throw new TypeError('No method named "' + r + '"');
                            n[r]()
                        } else i.interval && (n.pause(), n.cycle())
                    })
                }, e._dataApiClickHandler = function(t) {
                    var n = Bn.getSelectorFromElement(this);
                    if (n) {
                        var i = O(n)[0];
                        if (i && O(i).hasClass(V)) {
                            var r = o({}, O(i).data(), O(this).data()),
                                s = this.getAttribute("data-slide-to");
                            s && (r.interval = !1), e._jQueryInterface.call(O(i), r), s && O(i).data(j).to(s), t.preventDefault()
                        }
                    }
                }, r(e, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.1.3"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return F
                    }
                }]), e
            }(), O(document).on(U.CLICK_DATA_API, ie, oe._dataApiClickHandler), O(window).on(U.LOAD_DATA_API, function() {
                for (var e = [].slice.call(document.querySelectorAll(re)), t = 0, n = e.length; t < n; t++) {
                    var i = O(e[t]);
                    oe._jQueryInterface.call(i, i.data())
                }
            }), O.fn[M] = oe._jQueryInterface, O.fn[M].Constructor = oe, O.fn[M].noConflict = function() {
                return O.fn[M] = L, oe._jQueryInterface
            }, oe),
            Vn = (ae = "collapse", ce = "." + (le = "bs.collapse"), ue = (se = t).fn[ae], he = {
                toggle: !0,
                parent: ""
            }, de = {
                toggle: "boolean",
                parent: "(string|element)"
            }, fe = {
                SHOW: "show" + ce,
                SHOWN: "shown" + ce,
                HIDE: "hide" + ce,
                HIDDEN: "hidden" + ce,
                CLICK_DATA_API: "click" + ce + ".data-api"
            }, pe = "show", me = "collapse", ge = "collapsing", ve = "collapsed", ye = "width", be = "height", _e = ".show, .collapsing", we = '[data-toggle="collapse"]', Ce = function() {
                function e(e, t) {
                    this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = se.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                    for (var n = [].slice.call(document.querySelectorAll(we)), i = 0, r = n.length; i < r; i++) {
                        var o = n[i],
                            s = Bn.getSelectorFromElement(o),
                            a = [].slice.call(document.querySelectorAll(s)).filter(function(t) {
                                return t === e
                            });
                        null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(o))
                    }
                    this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                }
                var t = e.prototype;
                return t.toggle = function() {
                    se(this._element).hasClass(pe) ? this.hide() : this.show()
                }, t.show = function() {
                    var t, n, i = this;
                    if (!(this._isTransitioning || se(this._element).hasClass(pe) || (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(_e)).filter(function(e) {
                            return e.getAttribute("data-parent") === i._config.parent
                        })).length && (t = null), t && (n = se(t).not(this._selector).data(le)) && n._isTransitioning))) {
                        var r = se.Event(fe.SHOW);
                        if (se(this._element).trigger(r), !r.isDefaultPrevented()) {
                            t && (e._jQueryInterface.call(se(t).not(this._selector), "hide"), n || se(t).data(le, null));
                            var o = this._getDimension();
                            se(this._element).removeClass(me).addClass(ge), this._element.style[o] = 0, this._triggerArray.length && se(this._triggerArray).removeClass(ve).attr("aria-expanded", !0), this.setTransitioning(!0);
                            var s = "scroll" + (o[0].toUpperCase() + o.slice(1)),
                                a = Bn.getTransitionDurationFromElement(this._element);
                            se(this._element).one(Bn.TRANSITION_END, function() {
                                se(i._element).removeClass(ge).addClass(me).addClass(pe), i._element.style[o] = "", i.setTransitioning(!1), se(i._element).trigger(fe.SHOWN)
                            }).emulateTransitionEnd(a), this._element.style[o] = this._element[s] + "px"
                        }
                    }
                }, t.hide = function() {
                    var e = this;
                    if (!this._isTransitioning && se(this._element).hasClass(pe)) {
                        var t = se.Event(fe.HIDE);
                        if (se(this._element).trigger(t), !t.isDefaultPrevented()) {
                            var n = this._getDimension();
                            this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", Bn.reflow(this._element), se(this._element).addClass(ge).removeClass(me).removeClass(pe);
                            var i = this._triggerArray.length;
                            if (0 < i)
                                for (var r = 0; r < i; r++) {
                                    var o = this._triggerArray[r],
                                        s = Bn.getSelectorFromElement(o);
                                    null !== s && (se([].slice.call(document.querySelectorAll(s))).hasClass(pe) || se(o).addClass(ve).attr("aria-expanded", !1))
                                }
                            this.setTransitioning(!0), this._element.style[n] = "";
                            var a = Bn.getTransitionDurationFromElement(this._element);
                            se(this._element).one(Bn.TRANSITION_END, function() {
                                e.setTransitioning(!1), se(e._element).removeClass(ge).addClass(me).trigger(fe.HIDDEN)
                            }).emulateTransitionEnd(a)
                        }
                    }
                }, t.setTransitioning = function(e) {
                    this._isTransitioning = e
                }, t.dispose = function() {
                    se.removeData(this._element, le), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                }, t._getConfig = function(e) {
                    return (e = o({}, he, e)).toggle = Boolean(e.toggle), Bn.typeCheckConfig(ae, e, de), e
                }, t._getDimension = function() {
                    return se(this._element).hasClass(ye) ? ye : be
                }, t._getParent = function() {
                    var t = this,
                        n = null;
                    Bn.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
                    var i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                        r = [].slice.call(n.querySelectorAll(i));
                    return se(r).each(function(n, i) {
                        t._addAriaAndCollapsedClass(e._getTargetFromElement(i), [i])
                    }), n
                }, t._addAriaAndCollapsedClass = function(e, t) {
                    if (e) {
                        var n = se(e).hasClass(pe);
                        t.length && se(t).toggleClass(ve, !n).attr("aria-expanded", n)
                    }
                }, e._getTargetFromElement = function(e) {
                    var t = Bn.getSelectorFromElement(e);
                    return t ? document.querySelector(t) : null
                }, e._jQueryInterface = function(t) {
                    return this.each(function() {
                        var n = se(this),
                            i = n.data(le),
                            r = o({}, he, n.data(), "object" == typeof t && t ? t : {});
                        if (!i && r.toggle && /show|hide/.test(t) && (r.toggle = !1), i || (i = new e(this, r), n.data(le, i)), "string" == typeof t) {
                            if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                            i[t]()
                        }
                    })
                }, r(e, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.1.3"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return he
                    }
                }]), e
            }(), se(document).on(fe.CLICK_DATA_API, we, function(e) {
                "A" === e.currentTarget.tagName && e.preventDefault();
                var t = se(this),
                    n = Bn.getSelectorFromElement(this),
                    i = [].slice.call(document.querySelectorAll(n));
                se(i).each(function() {
                    var e = se(this),
                        n = e.data(le) ? "toggle" : t.data();
                    Ce._jQueryInterface.call(e, n)
                })
            }), se.fn[ae] = Ce._jQueryInterface, se.fn[ae].Constructor = Ce, se.fn[ae].noConflict = function() {
                return se.fn[ae] = ue, Ce._jQueryInterface
            }, Ce),
            zn = (Te = "dropdown", Ee = "." + (De = "bs.dropdown"), ke = ".data-api", Se = (xe = t).fn[Te], Ie = new RegExp("38|40|27"), Ae = {
                HIDE: "hide" + Ee,
                HIDDEN: "hidden" + Ee,
                SHOW: "show" + Ee,
                SHOWN: "shown" + Ee,
                CLICK: "click" + Ee,
                CLICK_DATA_API: "click" + Ee + ke,
                KEYDOWN_DATA_API: "keydown" + Ee + ke,
                KEYUP_DATA_API: "keyup" + Ee + ke
            }, Ne = "disabled", Oe = "show", Me = "dropup", je = "dropright", Pe = "dropleft", He = "dropdown-menu-right", Le = "position-static", Fe = '[data-toggle="dropdown"]', Re = ".dropdown form", qe = ".dropdown-menu", Be = ".navbar-nav", $e = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", We = "top-start", Ue = "top-end", Ve = "bottom-start", ze = "bottom-end", Ke = "right-start", Qe = "left-start", Ye = {
                offset: 0,
                flip: !0,
                boundary: "scrollParent",
                reference: "toggle",
                display: "dynamic"
            }, Xe = {
                offset: "(number|string|function)",
                flip: "boolean",
                boundary: "(string|element)",
                reference: "(string|element)",
                display: "string"
            }, Ge = function() {
                function e(e, t) {
                    this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
                }
                var t = e.prototype;
                return t.toggle = function() {
                    if (!this._element.disabled && !xe(this._element).hasClass(Ne)) {
                        var t = e._getParentFromElement(this._element),
                            i = xe(this._menu).hasClass(Oe);
                        if (e._clearMenus(), !i) {
                            var r = {
                                    relatedTarget: this._element
                                },
                                o = xe.Event(Ae.SHOW, r);
                            if (xe(t).trigger(o), !o.isDefaultPrevented()) {
                                if (!this._inNavbar) {
                                    if (void 0 === n) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                    var s = this._element;
                                    "parent" === this._config.reference ? s = t : Bn.isElement(this._config.reference) && (s = this._config.reference, void 0 !== this._config.reference.jquery && (s = this._config.reference[0])), "scrollParent" !== this._config.boundary && xe(t).addClass(Le), this._popper = new n(s, this._menu, this._getPopperConfig())
                                }
                                "ontouchstart" in document.documentElement && 0 === xe(t).closest(Be).length && xe(document.body).children().on("mouseover", null, xe.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), xe(this._menu).toggleClass(Oe), xe(t).toggleClass(Oe).trigger(xe.Event(Ae.SHOWN, r))
                            }
                        }
                    }
                }, t.dispose = function() {
                    xe.removeData(this._element, De), xe(this._element).off(Ee), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
                }, t.update = function() {
                    this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
                }, t._addEventListeners = function() {
                    var e = this;
                    xe(this._element).on(Ae.CLICK, function(t) {
                        t.preventDefault(), t.stopPropagation(), e.toggle()
                    })
                }, t._getConfig = function(e) {
                    return e = o({}, this.constructor.Default, xe(this._element).data(), e), Bn.typeCheckConfig(Te, e, this.constructor.DefaultType), e
                }, t._getMenuElement = function() {
                    if (!this._menu) {
                        var t = e._getParentFromElement(this._element);
                        t && (this._menu = t.querySelector(qe))
                    }
                    return this._menu
                }, t._getPlacement = function() {
                    var e = xe(this._element.parentNode),
                        t = Ve;
                    return e.hasClass(Me) ? (t = We, xe(this._menu).hasClass(He) && (t = Ue)) : e.hasClass(je) ? t = Ke : e.hasClass(Pe) ? t = Qe : xe(this._menu).hasClass(He) && (t = ze), t
                }, t._detectNavbar = function() {
                    return 0 < xe(this._element).closest(".navbar").length
                }, t._getPopperConfig = function() {
                    var e = this,
                        t = {};
                    "function" == typeof this._config.offset ? t.fn = function(t) {
                        return t.offsets = o({}, t.offsets, e._config.offset(t.offsets) || {}), t
                    } : t.offset = this._config.offset;
                    var n = {
                        placement: this._getPlacement(),
                        modifiers: {
                            offset: t,
                            flip: {
                                enabled: this._config.flip
                            },
                            preventOverflow: {
                                boundariesElement: this._config.boundary
                            }
                        }
                    };
                    return "static" === this._config.display && (n.modifiers.applyStyle = {
                        enabled: !1
                    }), n
                }, e._jQueryInterface = function(t) {
                    return this.each(function() {
                        var n = xe(this).data(De);
                        if (n || (n = new e(this, "object" == typeof t ? t : null), xe(this).data(De, n)), "string" == typeof t) {
                            if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                            n[t]()
                        }
                    })
                }, e._clearMenus = function(t) {
                    if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                        for (var n = [].slice.call(document.querySelectorAll(Fe)), i = 0, r = n.length; i < r; i++) {
                            var o = e._getParentFromElement(n[i]),
                                s = xe(n[i]).data(De),
                                a = {
                                    relatedTarget: n[i]
                                };
                            if (t && "click" === t.type && (a.clickEvent = t), s) {
                                var l = s._menu;
                                if (xe(o).hasClass(Oe) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && xe.contains(o, t.target))) {
                                    var c = xe.Event(Ae.HIDE, a);
                                    xe(o).trigger(c), c.isDefaultPrevented() || ("ontouchstart" in document.documentElement && xe(document.body).children().off("mouseover", null, xe.noop), n[i].setAttribute("aria-expanded", "false"), xe(l).removeClass(Oe), xe(o).removeClass(Oe).trigger(xe.Event(Ae.HIDDEN, a)))
                                }
                            }
                        }
                }, e._getParentFromElement = function(e) {
                    var t, n = Bn.getSelectorFromElement(e);
                    return n && (t = document.querySelector(n)), t || e.parentNode
                }, e._dataApiKeydownHandler = function(t) {
                    if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || xe(t.target).closest(qe).length)) : Ie.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !xe(this).hasClass(Ne))) {
                        var n = e._getParentFromElement(this),
                            i = xe(n).hasClass(Oe);
                        if ((i || 27 === t.which && 32 === t.which) && (!i || 27 !== t.which && 32 !== t.which)) {
                            var r = [].slice.call(n.querySelectorAll($e));
                            if (0 !== r.length) {
                                var o = r.indexOf(t.target);
                                38 === t.which && 0 < o && o--, 40 === t.which && o < r.length - 1 && o++, o < 0 && (o = 0), r[o].focus()
                            }
                        } else {
                            if (27 === t.which) {
                                var s = n.querySelector(Fe);
                                xe(s).trigger("focus")
                            }
                            xe(this).trigger("click")
                        }
                    }
                }, r(e, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.1.3"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return Ye
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return Xe
                    }
                }]), e
            }(), xe(document).on(Ae.KEYDOWN_DATA_API, Fe, Ge._dataApiKeydownHandler).on(Ae.KEYDOWN_DATA_API, qe, Ge._dataApiKeydownHandler).on(Ae.CLICK_DATA_API + " " + Ae.KEYUP_DATA_API, Ge._clearMenus).on(Ae.CLICK_DATA_API, Fe, function(e) {
                e.preventDefault(), e.stopPropagation(), Ge._jQueryInterface.call(xe(this), "toggle")
            }).on(Ae.CLICK_DATA_API, Re, function(e) {
                e.stopPropagation()
            }), xe.fn[Te] = Ge._jQueryInterface, xe.fn[Te].Constructor = Ge, xe.fn[Te].noConflict = function() {
                return xe.fn[Te] = Se, Ge._jQueryInterface
            }, Ge),
            Kn = (Je = "modal", tt = "." + (et = "bs.modal"), nt = (Ze = t).fn[Je], it = {
                backdrop: !0,
                keyboard: !0,
                focus: !0,
                show: !0
            }, rt = {
                backdrop: "(boolean|string)",
                keyboard: "boolean",
                focus: "boolean",
                show: "boolean"
            }, ot = {
                HIDE: "hide" + tt,
                HIDDEN: "hidden" + tt,
                SHOW: "show" + tt,
                SHOWN: "shown" + tt,
                FOCUSIN: "focusin" + tt,
                RESIZE: "resize" + tt,
                CLICK_DISMISS: "click.dismiss" + tt,
                KEYDOWN_DISMISS: "keydown.dismiss" + tt,
                MOUSEUP_DISMISS: "mouseup.dismiss" + tt,
                MOUSEDOWN_DISMISS: "mousedown.dismiss" + tt,
                CLICK_DATA_API: "click" + tt + ".data-api"
            }, st = "modal-scrollbar-measure", at = "modal-backdrop", lt = "modal-open", ct = "fade", ut = "show", ht = ".modal-dialog", dt = '[data-toggle="modal"]', ft = '[data-dismiss="modal"]', pt = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", mt = ".sticky-top", gt = function() {
                function e(e, t) {
                    this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(ht), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0
                }
                var t = e.prototype;
                return t.toggle = function(e) {
                    return this._isShown ? this.hide() : this.show(e)
                }, t.show = function(e) {
                    var t = this;
                    if (!this._isTransitioning && !this._isShown) {
                        Ze(this._element).hasClass(ct) && (this._isTransitioning = !0);
                        var n = Ze.Event(ot.SHOW, {
                            relatedTarget: e
                        });
                        Ze(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), Ze(document.body).addClass(lt), this._setEscapeEvent(), this._setResizeEvent(), Ze(this._element).on(ot.CLICK_DISMISS, ft, function(e) {
                            return t.hide(e)
                        }), Ze(this._dialog).on(ot.MOUSEDOWN_DISMISS, function() {
                            Ze(t._element).one(ot.MOUSEUP_DISMISS, function(e) {
                                Ze(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
                            })
                        }), this._showBackdrop(function() {
                            return t._showElement(e)
                        }))
                    }
                }, t.hide = function(e) {
                    var t = this;
                    if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
                        var n = Ze.Event(ot.HIDE);
                        if (Ze(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                            this._isShown = !1;
                            var i = Ze(this._element).hasClass(ct);
                            if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), Ze(document).off(ot.FOCUSIN), Ze(this._element).removeClass(ut), Ze(this._element).off(ot.CLICK_DISMISS), Ze(this._dialog).off(ot.MOUSEDOWN_DISMISS), i) {
                                var r = Bn.getTransitionDurationFromElement(this._element);
                                Ze(this._element).one(Bn.TRANSITION_END, function(e) {
                                    return t._hideModal(e)
                                }).emulateTransitionEnd(r)
                            } else this._hideModal()
                        }
                    }
                }, t.dispose = function() {
                    Ze.removeData(this._element, et), Ze(window, document, this._element, this._backdrop).off(tt), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
                }, t.handleUpdate = function() {
                    this._adjustDialog()
                }, t._getConfig = function(e) {
                    return e = o({}, it, e), Bn.typeCheckConfig(Je, e, rt), e
                }, t._showElement = function(e) {
                    var t = this,
                        n = Ze(this._element).hasClass(ct);
                    this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && Bn.reflow(this._element), Ze(this._element).addClass(ut), this._config.focus && this._enforceFocus();
                    var i = Ze.Event(ot.SHOWN, {
                            relatedTarget: e
                        }),
                        r = function() {
                            t._config.focus && t._element.focus(), t._isTransitioning = !1, Ze(t._element).trigger(i)
                        };
                    if (n) {
                        var o = Bn.getTransitionDurationFromElement(this._element);
                        Ze(this._dialog).one(Bn.TRANSITION_END, r).emulateTransitionEnd(o)
                    } else r()
                }, t._enforceFocus = function() {
                    var e = this;
                    Ze(document).off(ot.FOCUSIN).on(ot.FOCUSIN, function(t) {
                        document !== t.target && e._element !== t.target && 0 === Ze(e._element).has(t.target).length && e._element.focus()
                    })
                }, t._setEscapeEvent = function() {
                    var e = this;
                    this._isShown && this._config.keyboard ? Ze(this._element).on(ot.KEYDOWN_DISMISS, function(t) {
                        27 === t.which && (t.preventDefault(), e.hide())
                    }) : this._isShown || Ze(this._element).off(ot.KEYDOWN_DISMISS)
                }, t._setResizeEvent = function() {
                    var e = this;
                    this._isShown ? Ze(window).on(ot.RESIZE, function(t) {
                        return e.handleUpdate(t)
                    }) : Ze(window).off(ot.RESIZE)
                }, t._hideModal = function() {
                    var e = this;
                    this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function() {
                        Ze(document.body).removeClass(lt), e._resetAdjustments(), e._resetScrollbar(), Ze(e._element).trigger(ot.HIDDEN)
                    })
                }, t._removeBackdrop = function() {
                    this._backdrop && (Ze(this._backdrop).remove(), this._backdrop = null)
                }, t._showBackdrop = function(e) {
                    var t = this,
                        n = Ze(this._element).hasClass(ct) ? ct : "";
                    if (this._isShown && this._config.backdrop) {
                        if (this._backdrop = document.createElement("div"), this._backdrop.className = at, n && this._backdrop.classList.add(n), Ze(this._backdrop).appendTo(document.body), Ze(this._element).on(ot.CLICK_DISMISS, function(e) {
                                t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._element.focus() : t.hide())
                            }), n && Bn.reflow(this._backdrop), Ze(this._backdrop).addClass(ut), !e) return;
                        if (!n) return void e();
                        var i = Bn.getTransitionDurationFromElement(this._backdrop);
                        Ze(this._backdrop).one(Bn.TRANSITION_END, e).emulateTransitionEnd(i)
                    } else if (!this._isShown && this._backdrop) {
                        Ze(this._backdrop).removeClass(ut);
                        var r = function() {
                            t._removeBackdrop(), e && e()
                        };
                        if (Ze(this._element).hasClass(ct)) {
                            var o = Bn.getTransitionDurationFromElement(this._backdrop);
                            Ze(this._backdrop).one(Bn.TRANSITION_END, r).emulateTransitionEnd(o)
                        } else r()
                    } else e && e()
                }, t._adjustDialog = function() {
                    var e = this._element.scrollHeight > document.documentElement.clientHeight;
                    !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                }, t._resetAdjustments = function() {
                    this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                }, t._checkScrollbar = function() {
                    var e = document.body.getBoundingClientRect();
                    this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                }, t._setScrollbar = function() {
                    var e = this;
                    if (this._isBodyOverflowing) {
                        var t = [].slice.call(document.querySelectorAll(pt)),
                            n = [].slice.call(document.querySelectorAll(mt));
                        Ze(t).each(function(t, n) {
                            var i = n.style.paddingRight,
                                r = Ze(n).css("padding-right");
                            Ze(n).data("padding-right", i).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px")
                        }), Ze(n).each(function(t, n) {
                            var i = n.style.marginRight,
                                r = Ze(n).css("margin-right");
                            Ze(n).data("margin-right", i).css("margin-right", parseFloat(r) - e._scrollbarWidth + "px")
                        });
                        var i = document.body.style.paddingRight,
                            r = Ze(document.body).css("padding-right");
                        Ze(document.body).data("padding-right", i).css("padding-right", parseFloat(r) + this._scrollbarWidth + "px")
                    }
                }, t._resetScrollbar = function() {
                    var e = [].slice.call(document.querySelectorAll(pt));
                    Ze(e).each(function(e, t) {
                        var n = Ze(t).data("padding-right");
                        Ze(t).removeData("padding-right"), t.style.paddingRight = n || ""
                    });
                    var t = [].slice.call(document.querySelectorAll("" + mt));
                    Ze(t).each(function(e, t) {
                        var n = Ze(t).data("margin-right");
                        void 0 !== n && Ze(t).css("margin-right", n).removeData("margin-right")
                    });
                    var n = Ze(document.body).data("padding-right");
                    Ze(document.body).removeData("padding-right"), document.body.style.paddingRight = n || ""
                }, t._getScrollbarWidth = function() {
                    var e = document.createElement("div");
                    e.className = st, document.body.appendChild(e);
                    var t = e.getBoundingClientRect().width - e.clientWidth;
                    return document.body.removeChild(e), t
                }, e._jQueryInterface = function(t, n) {
                    return this.each(function() {
                        var i = Ze(this).data(et),
                            r = o({}, it, Ze(this).data(), "object" == typeof t && t ? t : {});
                        if (i || (i = new e(this, r), Ze(this).data(et, i)), "string" == typeof t) {
                            if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                            i[t](n)
                        } else r.show && i.show(n)
                    })
                }, r(e, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.1.3"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return it
                    }
                }]), e
            }(), Ze(document).on(ot.CLICK_DATA_API, dt, function(e) {
                var t, n = this,
                    i = Bn.getSelectorFromElement(this);
                i && (t = document.querySelector(i));
                var r = Ze(t).data(et) ? "toggle" : o({}, Ze(t).data(), Ze(this).data());
                "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
                var s = Ze(t).one(ot.SHOW, function(e) {
                    e.isDefaultPrevented() || s.one(ot.HIDDEN, function() {
                        Ze(n).is(":visible") && n.focus()
                    })
                });
                gt._jQueryInterface.call(Ze(t), r, this)
            }), Ze.fn[Je] = gt._jQueryInterface, Ze.fn[Je].Constructor = gt, Ze.fn[Je].noConflict = function() {
                return Ze.fn[Je] = nt, gt._jQueryInterface
            }, gt),
            Qn = (yt = "tooltip", _t = "." + (bt = "bs.tooltip"), wt = (vt = t).fn[yt], Ct = "bs-tooltip", xt = new RegExp("(^|\\s)" + Ct + "\\S+", "g"), Et = {
                animation: !0,
                template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !(Dt = {
                    AUTO: "auto",
                    TOP: "top",
                    RIGHT: "right",
                    BOTTOM: "bottom",
                    LEFT: "left"
                }),
                selector: !(Tt = {
                    animation: "boolean",
                    template: "string",
                    title: "(string|element|function)",
                    trigger: "string",
                    delay: "(number|object)",
                    html: "boolean",
                    selector: "(string|boolean)",
                    placement: "(string|function)",
                    offset: "(number|string)",
                    container: "(string|element|boolean)",
                    fallbackPlacement: "(string|array)",
                    boundary: "(string|element)"
                }),
                placement: "top",
                offset: 0,
                container: !1,
                fallbackPlacement: "flip",
                boundary: "scrollParent"
            }, St = "out", It = {
                HIDE: "hide" + _t,
                HIDDEN: "hidden" + _t,
                SHOW: (kt = "show") + _t,
                SHOWN: "shown" + _t,
                INSERTED: "inserted" + _t,
                CLICK: "click" + _t,
                FOCUSIN: "focusin" + _t,
                FOCUSOUT: "focusout" + _t,
                MOUSEENTER: "mouseenter" + _t,
                MOUSELEAVE: "mouseleave" + _t
            }, At = "fade", Nt = "show", Ot = ".tooltip-inner", Mt = ".arrow", jt = "hover", Pt = "focus", Ht = "click", Lt = "manual", Ft = function() {
                function e(e, t) {
                    if (void 0 === n) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                    this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
                }
                var t = e.prototype;
                return t.enable = function() {
                    this._isEnabled = !0
                }, t.disable = function() {
                    this._isEnabled = !1
                }, t.toggleEnabled = function() {
                    this._isEnabled = !this._isEnabled
                }, t.toggle = function(e) {
                    if (this._isEnabled)
                        if (e) {
                            var t = this.constructor.DATA_KEY,
                                n = vt(e.currentTarget).data(t);
                            n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), vt(e.currentTarget).data(t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                        } else {
                            if (vt(this.getTipElement()).hasClass(Nt)) return void this._leave(null, this);
                            this._enter(null, this)
                        }
                }, t.dispose = function() {
                    clearTimeout(this._timeout), vt.removeData(this.element, this.constructor.DATA_KEY), vt(this.element).off(this.constructor.EVENT_KEY), vt(this.element).closest(".modal").off("hide.bs.modal"), this.tip && vt(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
                }, t.show = function() {
                    var e = this;
                    if ("none" === vt(this.element).css("display")) throw new Error("Please use show on visible elements");
                    var t = vt.Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                        vt(this.element).trigger(t);
                        var i = vt.contains(this.element.ownerDocument.documentElement, this.element);
                        if (t.isDefaultPrevented() || !i) return;
                        var r = this.getTipElement(),
                            o = Bn.getUID(this.constructor.NAME);
                        r.setAttribute("id", o), this.element.setAttribute("aria-describedby", o), this.setContent(), this.config.animation && vt(r).addClass(At);
                        var s = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
                            a = this._getAttachment(s);
                        this.addAttachmentClass(a);
                        var l = !1 === this.config.container ? document.body : vt(document).find(this.config.container);
                        vt(r).data(this.constructor.DATA_KEY, this), vt.contains(this.element.ownerDocument.documentElement, this.tip) || vt(r).appendTo(l), vt(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, r, {
                            placement: a,
                            modifiers: {
                                offset: {
                                    offset: this.config.offset
                                },
                                flip: {
                                    behavior: this.config.fallbackPlacement
                                },
                                arrow: {
                                    element: Mt
                                },
                                preventOverflow: {
                                    boundariesElement: this.config.boundary
                                }
                            },
                            onCreate: function(t) {
                                t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                            },
                            onUpdate: function(t) {
                                e._handlePopperPlacementChange(t)
                            }
                        }), vt(r).addClass(Nt), "ontouchstart" in document.documentElement && vt(document.body).children().on("mouseover", null, vt.noop);
                        var c = function() {
                            e.config.animation && e._fixTransition();
                            var t = e._hoverState;
                            e._hoverState = null, vt(e.element).trigger(e.constructor.Event.SHOWN), t === St && e._leave(null, e)
                        };
                        if (vt(this.tip).hasClass(At)) {
                            var u = Bn.getTransitionDurationFromElement(this.tip);
                            vt(this.tip).one(Bn.TRANSITION_END, c).emulateTransitionEnd(u)
                        } else c()
                    }
                }, t.hide = function(e) {
                    var t = this,
                        n = this.getTipElement(),
                        i = vt.Event(this.constructor.Event.HIDE),
                        r = function() {
                            t._hoverState !== kt && n.parentNode && n.parentNode.removeChild(n), t._cleanTipClass(), t.element.removeAttribute("aria-describedby"), vt(t.element).trigger(t.constructor.Event.HIDDEN), null !== t._popper && t._popper.destroy(), e && e()
                        };
                    if (vt(this.element).trigger(i), !i.isDefaultPrevented()) {
                        if (vt(n).removeClass(Nt), "ontouchstart" in document.documentElement && vt(document.body).children().off("mouseover", null, vt.noop), this._activeTrigger[Ht] = !1, this._activeTrigger[Pt] = !1, this._activeTrigger[jt] = !1, vt(this.tip).hasClass(At)) {
                            var o = Bn.getTransitionDurationFromElement(n);
                            vt(n).one(Bn.TRANSITION_END, r).emulateTransitionEnd(o)
                        } else r();
                        this._hoverState = ""
                    }
                }, t.update = function() {
                    null !== this._popper && this._popper.scheduleUpdate()
                }, t.isWithContent = function() {
                    return Boolean(this.getTitle())
                }, t.addAttachmentClass = function(e) {
                    vt(this.getTipElement()).addClass(Ct + "-" + e)
                }, t.getTipElement = function() {
                    return this.tip = this.tip || vt(this.config.template)[0], this.tip
                }, t.setContent = function() {
                    var e = this.getTipElement();
                    this.setElementContent(vt(e.querySelectorAll(Ot)), this.getTitle()), vt(e).removeClass(At + " " + Nt)
                }, t.setElementContent = function(e, t) {
                    var n = this.config.html;
                    "object" == typeof t && (t.nodeType || t.jquery) ? n ? vt(t).parent().is(e) || e.empty().append(t) : e.text(vt(t).text()) : e[n ? "html" : "text"](t)
                }, t.getTitle = function() {
                    var e = this.element.getAttribute("data-original-title");
                    return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
                }, t._getAttachment = function(e) {
                    return Dt[e.toUpperCase()]
                }, t._setListeners = function() {
                    var e = this;
                    this.config.trigger.split(" ").forEach(function(t) {
                        if ("click" === t) vt(e.element).on(e.constructor.Event.CLICK, e.config.selector, function(t) {
                            return e.toggle(t)
                        });
                        else if (t !== Lt) {
                            var n = t === jt ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                                i = t === jt ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                            vt(e.element).on(n, e.config.selector, function(t) {
                                return e._enter(t)
                            }).on(i, e.config.selector, function(t) {
                                return e._leave(t)
                            })
                        }
                        vt(e.element).closest(".modal").on("hide.bs.modal", function() {
                            return e.hide()
                        })
                    }), this.config.selector ? this.config = o({}, this.config, {
                        trigger: "manual",
                        selector: ""
                    }) : this._fixTitle()
                }, t._fixTitle = function() {
                    var e = typeof this.element.getAttribute("data-original-title");
                    (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                }, t._enter = function(e, t) {
                    var n = this.constructor.DATA_KEY;
                    (t = t || vt(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), vt(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusin" === e.type ? Pt : jt] = !0), vt(t.getTipElement()).hasClass(Nt) || t._hoverState === kt ? t._hoverState = kt : (clearTimeout(t._timeout), t._hoverState = kt, t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function() {
                        t._hoverState === kt && t.show()
                    }, t.config.delay.show) : t.show())
                }, t._leave = function(e, t) {
                    var n = this.constructor.DATA_KEY;
                    (t = t || vt(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), vt(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusout" === e.type ? Pt : jt] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = St, t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function() {
                        t._hoverState === St && t.hide()
                    }, t.config.delay.hide) : t.hide())
                }, t._isWithActiveTrigger = function() {
                    for (var e in this._activeTrigger)
                        if (this._activeTrigger[e]) return !0;
                    return !1
                }, t._getConfig = function(e) {
                    return "number" == typeof(e = o({}, this.constructor.Default, vt(this.element).data(), "object" == typeof e && e ? e : {})).delay && (e.delay = {
                        show: e.delay,
                        hide: e.delay
                    }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), Bn.typeCheckConfig(yt, e, this.constructor.DefaultType), e
                }, t._getDelegateConfig = function() {
                    var e = {};
                    if (this.config)
                        for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                    return e
                }, t._cleanTipClass = function() {
                    var e = vt(this.getTipElement()),
                        t = e.attr("class").match(xt);
                    null !== t && t.length && e.removeClass(t.join(""))
                }, t._handlePopperPlacementChange = function(e) {
                    var t = e.instance;
                    this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
                }, t._fixTransition = function() {
                    var e = this.getTipElement(),
                        t = this.config.animation;
                    null === e.getAttribute("x-placement") && (vt(e).removeClass(At), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t)
                }, e._jQueryInterface = function(t) {
                    return this.each(function() {
                        var n = vt(this).data(bt),
                            i = "object" == typeof t && t;
                        if ((n || !/dispose|hide/.test(t)) && (n || (n = new e(this, i), vt(this).data(bt, n)), "string" == typeof t)) {
                            if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                            n[t]()
                        }
                    })
                }, r(e, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.1.3"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return Et
                    }
                }, {
                    key: "NAME",
                    get: function() {
                        return yt
                    }
                }, {
                    key: "DATA_KEY",
                    get: function() {
                        return bt
                    }
                }, {
                    key: "Event",
                    get: function() {
                        return It
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function() {
                        return _t
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return Tt
                    }
                }]), e
            }(), vt.fn[yt] = Ft._jQueryInterface, vt.fn[yt].Constructor = Ft, vt.fn[yt].noConflict = function() {
                return vt.fn[yt] = wt, Ft._jQueryInterface
            }, Ft),
            Yn = (qt = "popover", $t = "." + (Bt = "bs.popover"), Wt = (Rt = t).fn[qt], Ut = "bs-popover", Vt = new RegExp("(^|\\s)" + Ut + "\\S+", "g"), zt = o({}, Qn.Default, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
            }), Kt = o({}, Qn.DefaultType, {
                content: "(string|element|function)"
            }), Qt = "fade", Xt = ".popover-header", Gt = ".popover-body", Zt = {
                HIDE: "hide" + $t,
                HIDDEN: "hidden" + $t,
                SHOW: (Yt = "show") + $t,
                SHOWN: "shown" + $t,
                INSERTED: "inserted" + $t,
                CLICK: "click" + $t,
                FOCUSIN: "focusin" + $t,
                FOCUSOUT: "focusout" + $t,
                MOUSEENTER: "mouseenter" + $t,
                MOUSELEAVE: "mouseleave" + $t
            }, Jt = function(e) {
                function t() {
                    return e.apply(this, arguments) || this
                }
                var n, i;
                i = e, (n = t).prototype = Object.create(i.prototype), (n.prototype.constructor = n).__proto__ = i;
                var o = t.prototype;
                return o.isWithContent = function() {
                    return this.getTitle() || this._getContent()
                }, o.addAttachmentClass = function(e) {
                    Rt(this.getTipElement()).addClass(Ut + "-" + e)
                }, o.getTipElement = function() {
                    return this.tip = this.tip || Rt(this.config.template)[0], this.tip
                }, o.setContent = function() {
                    var e = Rt(this.getTipElement());
                    this.setElementContent(e.find(Xt), this.getTitle());
                    var t = this._getContent();
                    "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find(Gt), t), e.removeClass(Qt + " " + Yt)
                }, o._getContent = function() {
                    return this.element.getAttribute("data-content") || this.config.content
                }, o._cleanTipClass = function() {
                    var e = Rt(this.getTipElement()),
                        t = e.attr("class").match(Vt);
                    null !== t && 0 < t.length && e.removeClass(t.join(""))
                }, t._jQueryInterface = function(e) {
                    return this.each(function() {
                        var n = Rt(this).data(Bt),
                            i = "object" == typeof e ? e : null;
                        if ((n || !/destroy|hide/.test(e)) && (n || (n = new t(this, i), Rt(this).data(Bt, n)), "string" == typeof e)) {
                            if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                            n[e]()
                        }
                    })
                }, r(t, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.1.3"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return zt
                    }
                }, {
                    key: "NAME",
                    get: function() {
                        return qt
                    }
                }, {
                    key: "DATA_KEY",
                    get: function() {
                        return Bt
                    }
                }, {
                    key: "Event",
                    get: function() {
                        return Zt
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function() {
                        return $t
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return Kt
                    }
                }]), t
            }(Qn), Rt.fn[qt] = Jt._jQueryInterface, Rt.fn[qt].Constructor = Jt, Rt.fn[qt].noConflict = function() {
                return Rt.fn[qt] = Wt, Jt._jQueryInterface
            }, Jt),
            Xn = (tn = "scrollspy", rn = "." + (nn = "bs.scrollspy"), on = (en = t).fn[tn], sn = {
                offset: 10,
                method: "auto",
                target: ""
            }, an = {
                offset: "number",
                method: "string",
                target: "(string|element)"
            }, ln = {
                ACTIVATE: "activate" + rn,
                SCROLL: "scroll" + rn,
                LOAD_DATA_API: "load" + rn + ".data-api"
            }, cn = "dropdown-item", un = "active", hn = '[data-spy="scroll"]', dn = ".active", fn = ".nav, .list-group", pn = ".nav-link", mn = ".nav-item", gn = ".list-group-item", vn = ".dropdown", yn = ".dropdown-item", bn = ".dropdown-toggle", _n = "offset", wn = "position", Cn = function() {
                function e(e, t) {
                    var n = this;
                    this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " " + pn + "," + this._config.target + " " + gn + "," + this._config.target + " " + yn, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, en(this._scrollElement).on(ln.SCROLL, function(e) {
                        return n._process(e)
                    }), this.refresh(), this._process()
                }
                var t = e.prototype;
                return t.refresh = function() {
                    var e = this,
                        t = this._scrollElement === this._scrollElement.window ? _n : wn,
                        n = "auto" === this._config.method ? t : this._config.method,
                        i = n === wn ? this._getScrollTop() : 0;
                    this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(e) {
                        var t, r = Bn.getSelectorFromElement(e);
                        if (r && (t = document.querySelector(r)), t) {
                            var o = t.getBoundingClientRect();
                            if (o.width || o.height) return [en(t)[n]().top + i, r]
                        }
                        return null
                    }).filter(function(e) {
                        return e
                    }).sort(function(e, t) {
                        return e[0] - t[0]
                    }).forEach(function(t) {
                        e._offsets.push(t[0]), e._targets.push(t[1])
                    })
                }, t.dispose = function() {
                    en.removeData(this._element, nn), en(this._scrollElement).off(rn), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                }, t._getConfig = function(e) {
                    if ("string" != typeof(e = o({}, sn, "object" == typeof e && e ? e : {})).target) {
                        var t = en(e.target).attr("id");
                        t || (t = Bn.getUID(tn), en(e.target).attr("id", t)), e.target = "#" + t
                    }
                    return Bn.typeCheckConfig(tn, e, an), e
                }, t._getScrollTop = function() {
                    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                }, t._getScrollHeight = function() {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                }, t._getOffsetHeight = function() {
                    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                }, t._process = function() {
                    var e = this._getScrollTop() + this._config.offset,
                        t = this._getScrollHeight(),
                        n = this._config.offset + t - this._getOffsetHeight();
                    if (this._scrollHeight !== t && this.refresh(), n <= e) {
                        var i = this._targets[this._targets.length - 1];
                        this._activeTarget !== i && this._activate(i)
                    } else {
                        if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                        for (var r = this._offsets.length; r--;) this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
                    }
                }, t._activate = function(e) {
                    this._activeTarget = e, this._clear();
                    var t = this._selector.split(",");
                    t = t.map(function(t) {
                        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                    });
                    var n = en([].slice.call(document.querySelectorAll(t.join(","))));
                    n.hasClass(cn) ? (n.closest(vn).find(bn).addClass(un), n.addClass(un)) : (n.addClass(un), n.parents(fn).prev(pn + ", " + gn).addClass(un), n.parents(fn).prev(mn).children(pn).addClass(un)), en(this._scrollElement).trigger(ln.ACTIVATE, {
                        relatedTarget: e
                    })
                }, t._clear = function() {
                    var e = [].slice.call(document.querySelectorAll(this._selector));
                    en(e).filter(dn).removeClass(un)
                }, e._jQueryInterface = function(t) {
                    return this.each(function() {
                        var n = en(this).data(nn);
                        if (n || (n = new e(this, "object" == typeof t && t), en(this).data(nn, n)),
                            "string" == typeof t) {
                            if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                            n[t]()
                        }
                    })
                }, r(e, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.1.3"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return sn
                    }
                }]), e
            }(), en(window).on(ln.LOAD_DATA_API, function() {
                for (var e = [].slice.call(document.querySelectorAll(hn)), t = e.length; t--;) {
                    var n = en(e[t]);
                    Cn._jQueryInterface.call(n, n.data())
                }
            }), en.fn[tn] = Cn._jQueryInterface, en.fn[tn].Constructor = Cn, en.fn[tn].noConflict = function() {
                return en.fn[tn] = on, Cn._jQueryInterface
            }, Cn),
            Gn = (Dn = "." + (Tn = "bs.tab"), En = (xn = t).fn.tab, kn = {
                HIDE: "hide" + Dn,
                HIDDEN: "hidden" + Dn,
                SHOW: "show" + Dn,
                SHOWN: "shown" + Dn,
                CLICK_DATA_API: "click" + Dn + ".data-api"
            }, Sn = "dropdown-menu", In = "active", An = "disabled", Nn = "fade", On = "show", Mn = ".dropdown", jn = ".nav, .list-group", Pn = ".active", Hn = "> li > .active", Ln = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', Fn = ".dropdown-toggle", Rn = "> .dropdown-menu .active", qn = function() {
                function e(e) {
                    this._element = e
                }
                var t = e.prototype;
                return t.show = function() {
                    var e = this;
                    if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && xn(this._element).hasClass(In) || xn(this._element).hasClass(An))) {
                        var t, n, i = xn(this._element).closest(jn)[0],
                            r = Bn.getSelectorFromElement(this._element);
                        if (i) {
                            var o = "UL" === i.nodeName ? Hn : Pn;
                            n = (n = xn.makeArray(xn(i).find(o)))[n.length - 1]
                        }
                        var s = xn.Event(kn.HIDE, {
                                relatedTarget: this._element
                            }),
                            a = xn.Event(kn.SHOW, {
                                relatedTarget: n
                            });
                        if (n && xn(n).trigger(s), xn(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                            r && (t = document.querySelector(r)), this._activate(this._element, i);
                            var l = function() {
                                var t = xn.Event(kn.HIDDEN, {
                                        relatedTarget: e._element
                                    }),
                                    i = xn.Event(kn.SHOWN, {
                                        relatedTarget: n
                                    });
                                xn(n).trigger(t), xn(e._element).trigger(i)
                            };
                            t ? this._activate(t, t.parentNode, l) : l()
                        }
                    }
                }, t.dispose = function() {
                    xn.removeData(this._element, Tn), this._element = null
                }, t._activate = function(e, t, n) {
                    var i = this,
                        r = ("UL" === t.nodeName ? xn(t).find(Hn) : xn(t).children(Pn))[0],
                        o = n && r && xn(r).hasClass(Nn),
                        s = function() {
                            return i._transitionComplete(e, r, n)
                        };
                    if (r && o) {
                        var a = Bn.getTransitionDurationFromElement(r);
                        xn(r).one(Bn.TRANSITION_END, s).emulateTransitionEnd(a)
                    } else s()
                }, t._transitionComplete = function(e, t, n) {
                    if (t) {
                        xn(t).removeClass(On + " " + In);
                        var i = xn(t.parentNode).find(Rn)[0];
                        i && xn(i).removeClass(In), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
                    }
                    if (xn(e).addClass(In), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), Bn.reflow(e), xn(e).addClass(On), e.parentNode && xn(e.parentNode).hasClass(Sn)) {
                        var r = xn(e).closest(Mn)[0];
                        if (r) {
                            var o = [].slice.call(r.querySelectorAll(Fn));
                            xn(o).addClass(In)
                        }
                        e.setAttribute("aria-expanded", !0)
                    }
                    n && n()
                }, e._jQueryInterface = function(t) {
                    return this.each(function() {
                        var n = xn(this),
                            i = n.data(Tn);
                        if (i || (i = new e(this), n.data(Tn, i)), "string" == typeof t) {
                            if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                            i[t]()
                        }
                    })
                }, r(e, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.1.3"
                    }
                }]), e
            }(), xn(document).on(kn.CLICK_DATA_API, Ln, function(e) {
                e.preventDefault(), qn._jQueryInterface.call(xn(this), "show")
            }), xn.fn.tab = qn._jQueryInterface, xn.fn.tab.Constructor = qn, xn.fn.tab.noConflict = function() {
                return xn.fn.tab = En, qn._jQueryInterface
            }, qn);
        ! function(e) {
            if (void 0 === e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var t = e.fn.jquery.split(" ")[0].split(".");
            if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }(t), e.Util = Bn, e.Alert = $n, e.Button = Wn, e.Carousel = Un, e.Collapse = Vn, e.Dropdown = zn, e.Modal = Kn, e.Popover = Yn, e.Scrollspy = Xn, e.Tab = Gn, e.Tooltip = Qn, Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
    }(function(e) {
        var t, n, i, r, o, s, a = "Close",
            l = "BeforeClose",
            c = "MarkupParse",
            u = "Open",
            h = "Change",
            d = "mfp",
            f = "." + d,
            p = "mfp-ready",
            m = "mfp-removing",
            g = "mfp-prevent-close",
            v = function() {},
            y = !!window.jQuery,
            b = e(window),
            _ = function(e, n) {
                t.ev.on(d + e + f, n)
            },
            w = function(t, n, i, r) {
                var o = document.createElement("div");
                return o.className = "mfp-" + t, i && (o.innerHTML = i), r ? n && n.appendChild(o) : (o = e(o), n && o.appendTo(n)), o
            },
            C = function(n, i) {
                t.ev.triggerHandler(d + n, i), t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i]))
            },
            x = function(n) {
                return n === s && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), s = n), t.currTemplate.closeBtn
            },
            T = function() {
                e.magnificPopup.instance || (t = new v, t.init(), e.magnificPopup.instance = t)
            },
            D = function() {
                var e = document.createElement("p").style,
                    t = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== e.transition) return !0;
                for (; t.length;)
                    if (t.pop() + "Transition" in e) return !0;
                return !1
            };
        v.prototype = {
            constructor: v,
            init: function() {
                var n = navigator.appVersion;
                t.isIE7 = -1 !== n.indexOf("MSIE 7."), t.isIE8 = -1 !== n.indexOf("MSIE 8."), t.isLowIE = t.isIE7 || t.isIE8, t.isAndroid = /android/gi.test(n), t.isIOS = /iphone|ipad|ipod/gi.test(n), t.supportsTransition = D(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), i = e(document), t.popupsCache = {}
            },
            open: function(n) {
                var r;
                if (!1 === n.isObj) {
                    t.items = n.items.toArray(), t.index = 0;
                    var s, a = n.items;
                    for (r = 0; r < a.length; r++)
                        if (s = a[r], s.parsed && (s = s.el[0]), s === n.el[0]) {
                            t.index = r;
                            break
                        }
                } else t.items = e.isArray(n.items) ? n.items : [n.items], t.index = n.index || 0;
                if (t.isOpen) return void t.updateItemHTML();
                t.types = [], o = "", t.ev = n.mainEl && n.mainEl.length ? n.mainEl.eq(0) : i, n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, n), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = w("bg").on("click" + f, function() {
                    t.close()
                }), t.wrap = w("wrap").attr("tabindex", -1).on("click" + f, function(e) {
                    t._checkIfClose(e.target) && t.close()
                }), t.container = w("container", t.wrap)), t.contentContainer = w("content"), t.st.preloader && (t.preloader = w("preloader", t.container, t.st.tLoading));
                var l = e.magnificPopup.modules;
                for (r = 0; r < l.length; r++) {
                    var h = l[r];
                    h = h.charAt(0).toUpperCase() + h.slice(1), t["init" + h].call(t)
                }
                C("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (_(c, function(e, t, n, i) {
                    n.close_replaceWith = x(i.type)
                }), o += " mfp-close-btn-in") : t.wrap.append(x())), t.st.alignTop && (o += " mfp-align-top"), t.wrap.css(t.fixedContentPos ? {
                    overflow: t.st.overflowY,
                    overflowX: "hidden",
                    overflowY: t.st.overflowY
                } : {
                    top: b.scrollTop(),
                    position: "absolute"
                }), (!1 === t.st.fixedBgPos || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
                    height: i.height(),
                    position: "absolute"
                }), t.st.enableEscapeKey && i.on("keyup" + f, function(e) {
                    27 === e.keyCode && t.close()
                }), b.on("resize" + f, function() {
                    t.updateSize()
                }), t.st.closeOnContentClick || (o += " mfp-auto-cursor"), o && t.wrap.addClass(o);
                var d = t.wH = b.height(),
                    m = {};
                if (t.fixedContentPos && t._hasScrollBar(d)) {
                    var g = t._getScrollbarSize();
                    g && (m.marginRight = g)
                }
                t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : m.overflow = "hidden");
                var v = t.st.mainClass;
                return t.isIE7 && (v += " mfp-ie7"), v && t._addClassToMFP(v), t.updateItemHTML(), C("BuildControls"), e("html").css(m), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)), t._lastFocusedEl = document.activeElement, setTimeout(function() {
                    t.content ? (t._addClassToMFP(p), t._setFocus()) : t.bgOverlay.addClass(p), i.on("focusin" + f, t._onFocusIn)
                }, 16), t.isOpen = !0, t.updateSize(d), C(u), n
            },
            close: function() {
                t.isOpen && (C(l), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(m), setTimeout(function() {
                    t._close()
                }, t.st.removalDelay)) : t._close())
            },
            _close: function() {
                C(a);
                var n = m + " " + p + " ";
                if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (n += t.st.mainClass + " "), t._removeClassFromMFP(n), t.fixedContentPos) {
                    var r = {
                        marginRight: ""
                    };
                    t.isIE7 ? e("body, html").css("overflow", "") : r.overflow = "", e("html").css(r)
                }
                i.off("keyup.mfp focusin" + f), t.ev.off(f), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && !0 !== t.currTemplate[t.currItem.type] || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, C("AfterClose")
            },
            updateSize: function(e) {
                if (t.isIOS) {
                    var n = document.documentElement.clientWidth / window.innerWidth,
                        i = window.innerHeight * n;
                    t.wrap.css("height", i), t.wH = i
                } else t.wH = e || b.height();
                t.fixedContentPos || t.wrap.css("height", t.wH), C("Resize")
            },
            updateItemHTML: function() {
                var n = t.items[t.index];
                t.contentContainer.detach(), t.content && t.content.detach(), n.parsed || (n = t.parseEl(t.index));
                var i = n.type;
                if (C("BeforeChange", [t.currItem ? t.currItem.type : "", i]), t.currItem = n, !t.currTemplate[i]) {
                    var o = !!t.st[i] && t.st[i].markup;
                    C("FirstMarkupParse", o), t.currTemplate[i] = !o || e(o)
                }
                r && r !== n.type && t.container.removeClass("mfp-" + r + "-holder");
                var s = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, t.currTemplate[i]);
                t.appendContent(s, i), n.preloaded = !0, C(h, n), r = n.type, t.container.prepend(t.contentContainer), C("AfterChange")
            },
            appendContent: function(e, n) {
                t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && !0 === t.currTemplate[n] ? t.content.find(".mfp-close").length || t.content.append(x()) : t.content = e : t.content = "", C("BeforeAppend"), t.container.addClass("mfp-" + n + "-holder"), t.contentContainer.append(t.content)
            },
            parseEl: function(n) {
                var i, r = t.items[n];
                if (r.tagName ? r = {
                        el: e(r)
                    } : (i = r.type, r = {
                        data: r,
                        src: r.src
                    }), r.el) {
                    for (var o = t.types, s = 0; s < o.length; s++)
                        if (r.el.hasClass("mfp-" + o[s])) {
                            i = o[s];
                            break
                        } r.src = r.el.attr("data-mfp-src"), r.src || (r.src = r.el.attr("href"))
                }
                return r.type = i || t.st.type || "inline", r.index = n, r.parsed = !0, t.items[n] = r, C("ElementParse", r), t.items[n]
            },
            addGroup: function(e, n) {
                var i = function(i) {
                    i.mfpEl = this, t._openClick(i, e, n)
                };
                n || (n = {});
                var r = "click.magnificPopup";
                n.mainEl = e, n.items ? (n.isObj = !0, e.off(r).on(r, i)) : (n.isObj = !1, n.delegate ? e.off(r).on(r, n.delegate, i) : (n.items = e, e.off(r).on(r, i)))
            },
            _openClick: function(n, i, r) {
                if ((void 0 !== r.midClick ? r.midClick : e.magnificPopup.defaults.midClick) || 2 !== n.which && !n.ctrlKey && !n.metaKey) {
                    var o = void 0 !== r.disableOn ? r.disableOn : e.magnificPopup.defaults.disableOn;
                    if (o)
                        if (e.isFunction(o)) {
                            if (!o.call(t)) return !0
                        } else if (b.width() < o) return !0;
                    n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()), r.el = e(n.mfpEl), r.delegate && (r.items = i.find(r.delegate)), t.open(r)
                }
            },
            updateStatus: function(e, i) {
                if (t.preloader) {
                    n !== e && t.container.removeClass("mfp-s-" + n), i || "loading" !== e || (i = t.st.tLoading);
                    var r = {
                        status: e,
                        text: i
                    };
                    C("UpdateStatus", r), e = r.status, i = r.text, t.preloader.html(i), t.preloader.find("a").on("click", function(e) {
                        e.stopImmediatePropagation()
                    }), t.container.addClass("mfp-s-" + e), n = e
                }
            },
            _checkIfClose: function(n) {
                if (!e(n).hasClass(g)) {
                    var i = t.st.closeOnContentClick,
                        r = t.st.closeOnBgClick;
                    if (i && r) return !0;
                    if (!t.content || e(n).hasClass("mfp-close") || t.preloader && n === t.preloader[0]) return !0;
                    if (n === t.content[0] || e.contains(t.content[0], n)) {
                        if (i) return !0
                    } else if (r && e.contains(document, n)) return !0;
                    return !1
                }
            },
            _addClassToMFP: function(e) {
                t.bgOverlay.addClass(e), t.wrap.addClass(e)
            },
            _removeClassFromMFP: function(e) {
                this.bgOverlay.removeClass(e), t.wrap.removeClass(e)
            },
            _hasScrollBar: function(e) {
                return (t.isIE7 ? i.height() : document.body.scrollHeight) > (e || b.height())
            },
            _setFocus: function() {
                (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
            },
            _onFocusIn: function(n) {
                return n.target === t.wrap[0] || e.contains(t.wrap[0], n.target) ? void 0 : (t._setFocus(), !1)
            },
            _parseMarkup: function(t, n, i) {
                var r;
                i.data && (n = e.extend(i.data, n)), C(c, [t, n, i]), e.each(n, function(e, n) {
                    if (void 0 === n || !1 === n) return !0;
                    if (r = e.split("_"), r.length > 1) {
                        var i = t.find(f + "-" + r[0]);
                        if (i.length > 0) {
                            var o = r[1];
                            "replaceWith" === o ? i[0] !== n[0] && i.replaceWith(n) : "img" === o ? i.is("img") ? i.attr("src", n) : i.replaceWith('<img src="' + n + '" class="' + i.attr("class") + '" />') : i.attr(r[1], n)
                        }
                    } else t.find(f + "-" + e).html(n)
                })
            },
            _getScrollbarSize: function() {
                if (void 0 === t.scrollbarSize) {
                    var e = document.createElement("div");
                    e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
                }
                return t.scrollbarSize
            }
        }, e.magnificPopup = {
            instance: null,
            proto: v.prototype,
            modules: [],
            open: function(t, n) {
                return T(), t = t ? e.extend(!0, {}, t) : {}, t.isObj = !0, t.index = n || 0, this.instance.open(t)
            },
            close: function() {
                return e.magnificPopup.instance && e.magnificPopup.instance.close()
            },
            registerModule: function(t, n) {
                n.options && (e.magnificPopup.defaults[t] = n.options), e.extend(this.proto, n.proto), this.modules.push(t)
            },
            defaults: {
                disableOn: 0,
                key: null,
                midClick: !1,
                mainClass: "",
                preloader: !0,
                focus: "",
                closeOnContentClick: !1,
                closeOnBgClick: !0,
                closeBtnInside: !0,
                showCloseBtn: !0,
                enableEscapeKey: !0,
                modal: !1,
                alignTop: !1,
                removalDelay: 0,
                prependTo: null,
                fixedContentPos: "auto",
                fixedBgPos: "auto",
                overflowY: "auto",
                closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
                tClose: "Close (Esc)",
                tLoading: "Loading..."
            }
        }, e.fn.magnificPopup = function(n) {
            T();
            var i = e(this);
            if ("string" == typeof n)
                if ("open" === n) {
                    var r, o = y ? i.data("magnificPopup") : i[0].magnificPopup,
                        s = parseInt(arguments[1], 10) || 0;
                    o.items ? r = o.items[s] : (r = i, o.delegate && (r = r.find(o.delegate)), r = r.eq(s)), t._openClick({
                        mfpEl: r
                    }, i, o)
                } else t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
            else n = e.extend(!0, {}, n), y ? i.data("magnificPopup", n) : i[0].magnificPopup = n, t.addGroup(i, n);
            return i
        };
        var E, k, S, I = "inline",
            A = function() {
                S && (k.after(S.addClass(E)).detach(), S = null)
            };
        e.magnificPopup.registerModule(I, {
            options: {
                hiddenClass: "hide",
                markup: "",
                tNotFound: "Content not found"
            },
            proto: {
                initInline: function() {
                    t.types.push(I), _(a + "." + I, function() {
                        A()
                    })
                },
                getInline: function(n, i) {
                    if (A(), n.src) {
                        var r = t.st.inline,
                            o = e(n.src);
                        if (o.length) {
                            var s = o[0].parentNode;
                            s && s.tagName && (k || (E = r.hiddenClass, k = w(E), E = "mfp-" + E), S = o.after(k).detach().removeClass(E)), t.updateStatus("ready")
                        } else t.updateStatus("error", r.tNotFound), o = e("<div>");
                        return n.inlineElement = o, o
                    }
                    return t.updateStatus("ready"), t._parseMarkup(i, {}, n), i
                }
            }
        });
        var N, O = "ajax",
            M = function() {
                N && e(document.body).removeClass(N)
            },
            j = function() {
                M(), t.req && t.req.abort()
            };
        e.magnificPopup.registerModule(O, {
            options: {
                settings: null,
                cursor: "mfp-ajax-cur",
                tError: '<a href="%url%">The content</a> could not be loaded.'
            },
            proto: {
                initAjax: function() {
                    t.types.push(O), N = t.st.ajax.cursor, _(a + "." + O, j), _("BeforeChange." + O, j)
                },
                getAjax: function(n) {
                    N && e(document.body).addClass(N), t.updateStatus("loading");
                    var i = e.extend({
                        url: n.src,
                        success: function(i, r, o) {
                            var s = {
                                data: i,
                                xhr: o
                            };
                            C("ParseAjax", s), t.appendContent(e(s.data), O), n.finished = !0, M(), t._setFocus(), setTimeout(function() {
                                t.wrap.addClass(p)
                            }, 16), t.updateStatus("ready"), C("AjaxContentAdded")
                        },
                        error: function() {
                            M(), n.finished = n.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src))
                        }
                    }, t.st.ajax.settings);
                    return t.req = e.ajax(i), ""
                }
            }
        });
        var P, H = function(n) {
            if (n.data && void 0 !== n.data.title) return n.data.title;
            var i = t.st.image.titleSrc;
            if (i) {
                if (e.isFunction(i)) return i.call(t, n);
                if (n.el) return n.el.attr(i) || ""
            }
            return ""
        };
        e.magnificPopup.registerModule("image", {
            options: {
                markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
                cursor: "mfp-zoom-out-cur",
                titleSrc: "title",
                verticalFit: !0,
                tError: '<a href="%url%">The image</a> could not be loaded.'
            },
            proto: {
                initImage: function() {
                    var n = t.st.image,
                        i = ".image";
                    t.types.push("image"), _(u + i, function() {
                        "image" === t.currItem.type && n.cursor && e(document.body).addClass(n.cursor)
                    }), _(a + i, function() {
                        n.cursor && e(document.body).removeClass(n.cursor), b.off("resize" + f)
                    }), _("Resize" + i, t.resizeImage), t.isLowIE && _("AfterChange", t.resizeImage)
                },
                resizeImage: function() {
                    var e = t.currItem;
                    if (e && e.img && t.st.image.verticalFit) {
                        var n = 0;
                        t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - n)
                    }
                },
                _onImageHasSize: function(e) {
                    e.img && (e.hasSize = !0, P && clearInterval(P), e.isCheckingImgSize = !1, C("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1))
                },
                findImageSize: function(e) {
                    var n = 0,
                        i = e.img[0],
                        r = function(o) {
                            P && clearInterval(P), P = setInterval(function() {
                                return i.naturalWidth > 0 ? void t._onImageHasSize(e) : (n > 200 && clearInterval(P), n++, void(3 === n ? r(10) : 40 === n ? r(50) : 100 === n && r(500)))
                            }, o)
                        };
                    r(1)
                },
                getImage: function(n, i) {
                    var r = 0,
                        o = function() {
                            n && (n.img[0].complete ? (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, C("ImageLoadComplete")) : (r++, 200 > r ? setTimeout(o, 100) : s()))
                        },
                        s = function() {
                            n && (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("error", a.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0)
                        },
                        a = t.st.image,
                        l = i.find(".mfp-img");
                    if (l.length) {
                        var c = document.createElement("img");
                        c.className = "mfp-img", n.el && n.el.find("img").length && (c.alt = n.el.find("img").attr("alt")), n.img = e(c).on("load.mfploader", o).on("error.mfploader", s), c.src = n.src, l.is("img") && (n.img = n.img.clone()), c = n.img[0], c.naturalWidth > 0 ? n.hasSize = !0 : c.width || (n.hasSize = !1)
                    }
                    return t._parseMarkup(i, {
                        title: H(n),
                        img_replaceWith: n.img
                    }, n), t.resizeImage(), n.hasSize ? (P && clearInterval(P), n.loadError ? (i.addClass("mfp-loading"), t.updateStatus("error", a.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"), t.updateStatus("ready")), i) : (t.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, i.addClass("mfp-loading"), t.findImageSize(n)), i)
                }
            }
        });
        var L, F = function() {
            return void 0 === L && (L = void 0 !== document.createElement("p").style.MozTransform), L
        };
        e.magnificPopup.registerModule("zoom", {
            options: {
                enabled: !1,
                easing: "ease-in-out",
                duration: 300,
                opener: function(e) {
                    return e.is("img") ? e : e.find("img")
                }
            },
            proto: {
                initZoom: function() {
                    var e, n = t.st.zoom,
                        i = ".zoom";
                    if (n.enabled && t.supportsTransition) {
                        var r, o, s = n.duration,
                            c = function(e) {
                                var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                    i = "all " + n.duration / 1e3 + "s " + n.easing,
                                    r = {
                                        position: "fixed",
                                        zIndex: 9999,
                                        left: 0,
                                        top: 0,
                                        "-webkit-backface-visibility": "hidden"
                                    },
                                    o = "transition";
                                return r["-webkit-" + o] = r["-moz-" + o] = r["-o-" + o] = r[o] = i, t.css(r), t
                            },
                            u = function() {
                                t.content.css("visibility", "visible")
                            };
                        _("BuildControls" + i, function() {
                            if (t._allowZoom()) {
                                if (clearTimeout(r), t.content.css("visibility", "hidden"), !(e = t._getItemToZoom())) return void u();
                                o = c(e), o.css(t._getOffset()), t.wrap.append(o), r = setTimeout(function() {
                                    o.css(t._getOffset(!0)), r = setTimeout(function() {
                                        u(), setTimeout(function() {
                                            o.remove(), e = o = null, C("ZoomAnimationEnded")
                                        }, 16)
                                    }, s)
                                }, 16)
                            }
                        }), _(l + i, function() {
                            if (t._allowZoom()) {
                                if (clearTimeout(r), t.st.removalDelay = s, !e) {
                                    if (!(e = t._getItemToZoom())) return;
                                    o = c(e)
                                }
                                o.css(t._getOffset(!0)), t.wrap.append(o), t.content.css("visibility", "hidden"), setTimeout(function() {
                                    o.css(t._getOffset())
                                }, 16)
                            }
                        }), _(a + i, function() {
                            t._allowZoom() && (u(), o && o.remove(), e = null)
                        })
                    }
                },
                _allowZoom: function() {
                    return "image" === t.currItem.type
                },
                _getItemToZoom: function() {
                    return !!t.currItem.hasSize && t.currItem.img
                },
                _getOffset: function(n) {
                    var i;
                    i = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
                    var r = i.offset(),
                        o = parseInt(i.css("padding-top"), 10),
                        s = parseInt(i.css("padding-bottom"), 10);
                    r.top -= e(window).scrollTop() - o;
                    var a = {
                        width: i.width(),
                        height: (y ? i.innerHeight() : i[0].offsetHeight) - s - o
                    };
                    return F() ? a["-moz-transform"] = a.transform = "translate(" + r.left + "px," + r.top + "px)" : (a.left = r.left, a.top = r.top), a
                }
            }
        });
        var R = "iframe",
            q = function(e) {
                if (t.currTemplate[R]) {
                    var n = t.currTemplate[R].find("iframe");
                    n.length && (e || (n[0].src = "//about:blank"), t.isIE8 && n.css("display", e ? "block" : "none"))
                }
            };
        e.magnificPopup.registerModule(R, {
            options: {
                markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
                srcAction: "iframe_src",
                patterns: {
                    youtube: {
                        index: "youtube.com",
                        id: "v=",
                        src: "//www.youtube.com/embed/%id%?autoplay=1"
                    },
                    vimeo: {
                        index: "vimeo.com/",
                        id: "/",
                        src: "//player.vimeo.com/video/%id%?autoplay=1"
                    },
                    gmaps: {
                        index: "//maps.google.",
                        src: "%id%&output=embed"
                    }
                }
            },
            proto: {
                initIframe: function() {
                    t.types.push(R), _("BeforeChange", function(e, t, n) {
                        t !== n && (t === R ? q() : n === R && q(!0))
                    }), _(a + "." + R, function() {
                        q()
                    })
                },
                getIframe: function(n, i) {
                    var r = n.src,
                        o = t.st.iframe;
                    e.each(o.patterns, function() {
                        return r.indexOf(this.index) > -1 ? (this.id && (r = "string" == typeof this.id ? r.substr(r.lastIndexOf(this.id) + this.id.length, r.length) : this.id.call(this, r)), r = this.src.replace("%id%", r), !1) : void 0
                    });
                    var s = {};
                    return o.srcAction && (s[o.srcAction] = r), t._parseMarkup(i, s, n), t.updateStatus("ready"), i
                }
            }
        });
        var B = function(e) {
                var n = t.items.length;
                return e > n - 1 ? e - n : 0 > e ? n + e : e
            },
            $ = function(e, t, n) {
                return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n)
            };
        e.magnificPopup.registerModule("gallery", {
            options: {
                enabled: !1,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                preload: [0, 2],
                navigateByImgClick: !0,
                arrows: !0,
                tPrev: "Previous (Left arrow key)",
                tNext: "Next (Right arrow key)",
                tCounter: "%curr% of %total%"
            },
            proto: {
                initGallery: function() {
                    var n = t.st.gallery,
                        r = ".mfp-gallery",
                        s = Boolean(e.fn.mfpFastClick);
                    return t.direction = !0, !(!n || !n.enabled) && (o += " mfp-gallery", _(u + r, function() {
                        n.navigateByImgClick && t.wrap.on("click" + r, ".mfp-img", function() {
                            return t.items.length > 1 ? (t.next(), !1) : void 0
                        }), i.on("keydown" + r, function(e) {
                            37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
                        })
                    }), _("UpdateStatus" + r, function(e, n) {
                        n.text && (n.text = $(n.text, t.currItem.index, t.items.length))
                    }), _(c + r, function(e, i, r, o) {
                        var s = t.items.length;
                        r.counter = s > 1 ? $(n.tCounter, o.index, s) : ""
                    }), _("BuildControls" + r, function() {
                        if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
                            var i = n.arrowMarkup,
                                r = t.arrowLeft = e(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(g),
                                o = t.arrowRight = e(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(g),
                                a = s ? "mfpFastClick" : "click";
                            r[a](function() {
                                t.prev()
                            }), o[a](function() {
                                t.next()
                            }), t.isIE7 && (w("b", r[0], !1, !0), w("a", r[0], !1, !0), w("b", o[0], !1, !0), w("a", o[0], !1, !0)), t.container.append(r.add(o))
                        }
                    }), _(h + r, function() {
                        t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function() {
                            t.preloadNearbyImages(), t._preloadTimeout = null
                        }, 16)
                    }), void _(a + r, function() {
                        i.off(r), t.wrap.off("click" + r), t.arrowLeft && s && t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(), t.arrowRight = t.arrowLeft = null
                    }))
                },
                next: function() {
                    t.direction = !0, t.index = B(t.index + 1), t.updateItemHTML()
                },
                prev: function() {
                    t.direction = !1, t.index = B(t.index - 1), t.updateItemHTML()
                },
                goTo: function(e) {
                    t.direction = e >= t.index, t.index = e, t.updateItemHTML()
                },
                preloadNearbyImages: function() {
                    var e, n = t.st.gallery.preload,
                        i = Math.min(n[0], t.items.length),
                        r = Math.min(n[1], t.items.length);
                    for (e = 1; e <= (t.direction ? r : i); e++) t._preloadItem(t.index + e);
                    for (e = 1; e <= (t.direction ? i : r); e++) t._preloadItem(t.index - e)
                },
                _preloadItem: function(n) {
                    if (n = B(n), !t.items[n].preloaded) {
                        var i = t.items[n];
                        i.parsed || (i = t.parseEl(n)), C("LazyLoad", i), "image" === i.type && (i.img = e('<img class="mfp-img" />').on("load.mfploader", function() {
                            i.hasSize = !0
                        }).on("error.mfploader", function() {
                            i.hasSize = !0, i.loadError = !0, C("LazyLoadError", i)
                        }).attr("src", i.src)), i.preloaded = !0
                    }
                }
            }
        });
        var W = "retina";
        e.magnificPopup.registerModule(W, {
                options: {
                    replaceSrc: function(e) {
                        return e.src.replace(/\.\w+$/, function(e) {
                            return "@2x" + e
                        })
                    },
                    ratio: 1
                },
                proto: {
                    initRetina: function() {
                        if (window.devicePixelRatio > 1) {
                            var e = t.st.retina,
                                n = e.ratio;
                            (n = isNaN(n) ? n() : n) > 1 && (_("ImageHasSize." + W, function(e, t) {
                                t.img.css({
                                    "max-width": t.img[0].naturalWidth / n,
                                    width: "100%"
                                })
                            }), _("ElementParse." + W, function(t, i) {
                                i.src = e.replaceSrc(i, n)
                            }))
                        }
                    }
                }
            }),
            function() {
                var t = "ontouchstart" in window,
                    n = function() {
                        b.off("touchmove" + i + " touchend" + i)
                    },
                    i = ".mfpFastClick";
                e.fn.mfpFastClick = function(r) {
                    return e(this).each(function() {
                        var o, s = e(this);
                        if (t) {
                            var a, l, c, u, h, d;
                            s.on("touchstart" + i, function(e) {
                                u = !1, d = 1, h = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0], l = h.clientX, c = h.clientY, b.on("touchmove" + i, function(e) {
                                    h = e.originalEvent ? e.originalEvent.touches : e.touches, d = h.length, h = h[0], (Math.abs(h.clientX - l) > 10 || Math.abs(h.clientY - c) > 10) && (u = !0, n())
                                }).on("touchend" + i, function(e) {
                                    n(), u || d > 1 || (o = !0, e.preventDefault(), clearTimeout(a), a = setTimeout(function() {
                                        o = !1
                                    }, 1e3), r())
                                })
                            })
                        }
                        s.on("click" + i, function() {
                            o || r()
                        })
                    })
                }, e.fn.destroyMfpFastClick = function() {
                    e(this).off("touchstart" + i + " click" + i), t && b.off("touchmove" + i + " touchend" + i)
                }
            }(), T()
    }),
    function() {
        var e, t;
        e = this.jQuery || window.jQuery, t = e(window), e.fn.stick_in_parent = function(n) {
            var i, r, o, s, a, l, c, u, h, d, f, p;
            for (null == n && (n = {}), p = n.sticky_class, l = n.inner_scrolling, f = n.recalc_every, d = n.parent, h = n.offset_top, u = n.spacer, o = n.bottoming, null == h && (h = 0), null == d && (d = void 0), null == l && (l = !0), null == p && (p = "is_stuck"), i = e(document), null == o && (o = !0), s = function(n, r, s, a, c, m, g, v) {
                    var y, b, _, w, C, x, T, D, E, k, S, I;
                    if (!n.data("sticky_kit")) {
                        if (n.data("sticky_kit", !0), C = i.height(), T = n.parent(), null != d && (T = T.closest(d)), !T.length) throw "failed to find stick parent";
                        if (_ = !1, y = !1, S = null != u ? u && n.closest(u) : e("<div />"), S && S.css("position", n.css("position")), D = function() {
                                var e, t, o;
                                if (!v) return C = i.height(), e = parseInt(T.css("border-top-width"), 10), t = parseInt(T.css("padding-top"), 10), r = parseInt(T.css("padding-bottom"), 10), s = T.offset().top + e + t, a = T.height(), _ && (_ = !1, y = !1, null == u && (n.insertAfter(S), S.detach()), n.css({
                                    position: "",
                                    top: "",
                                    width: "",
                                    bottom: ""
                                }).removeClass(p), o = !0), c = n.offset().top - (parseInt(n.css("margin-top"), 10) || 0) - h, m = n.outerHeight(!0), g = n.css("float"), S && S.css({
                                    width: n.outerWidth(!0),
                                    height: m,
                                    display: n.css("display"),
                                    "vertical-align": n.css("vertical-align"),
                                    float: g
                                }), o ? I() : void 0
                            }, D(), m !== a) return w = void 0, x = h, k = f, I = function() {
                            var e, d, b, E, I, A;
                            if (!v) return b = !1, null != k && (k -= 1) <= 0 && (k = f, D(), b = !0), b || i.height() === C || (D(), b = !0), E = t.scrollTop(), null != w && (d = E - w), w = E, _ ? (o && (I = E + m + x > a + s, y && !I && (y = !1, n.css({
                                position: "fixed",
                                bottom: "",
                                top: x
                            }).trigger("sticky_kit:unbottom"))), E < c && (_ = !1, x = h, null == u && ("left" !== g && "right" !== g || n.insertAfter(S), S.detach()), e = {
                                position: "",
                                width: "",
                                top: ""
                            }, n.css(e).removeClass(p).trigger("sticky_kit:unstick")), l && (A = t.height(), m + h > A && (y || (x -= d, x = Math.max(A - m, x), x = Math.min(h, x), _ && n.css({
                                top: x + "px"
                            }))))) : E > c && (_ = !0, e = {
                                position: "fixed",
                                top: x
                            }, e.width = "border-box" === n.css("box-sizing") ? n.outerWidth() + "px" : n.width() + "px", n.css(e).addClass(p), null == u && (n.after(S), "left" !== g && "right" !== g || S.append(n)), n.trigger("sticky_kit:stick")), _ && o && (null == I && (I = E + m + x > a + s), !y && I) ? (y = !0, "static" === T.css("position") && T.css({
                                position: "relative"
                            }), n.css({
                                position: "absolute",
                                bottom: r,
                                top: "auto"
                            }).trigger("sticky_kit:bottom")) : void 0
                        }, E = function() {
                            return D(), I()
                        }, b = function() {
                            if (v = !0, t.off("touchmove", I), t.off("scroll", I), t.off("resize", E), e(document.body).off("sticky_kit:recalc", E), n.off("sticky_kit:detach", b), n.removeData("sticky_kit"), n.css({
                                    position: "",
                                    bottom: "",
                                    top: "",
                                    width: ""
                                }), T.position("position", ""), _) return null == u && ("left" !== g && "right" !== g || n.insertAfter(S), S.remove()), n.removeClass(p)
                        }, t.on("touchmove", I), t.on("scroll", I), t.on("resize", E), e(document.body).on("sticky_kit:recalc", E), n.on("sticky_kit:detach", b), setTimeout(I, 0)
                    }
                }, a = 0, c = this.length; a < c; a++) r = this[a], s(e(r));
            return this
        }
    }.call(this),
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? t(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], t) : t(e.jQuery)
    }(this, function(e) {
        "use strict";

        function t(t) {
            var n = this;
            if (1 === arguments.length && "function" == typeof t && (t = [t]), !(t instanceof Array)) throw new SyntaxError("isInViewport: Argument(s) passed to .do/.run should be a function or an array of functions");
            return t.forEach(function(t) {
                "function" != typeof t ? (console.warn("isInViewport: Argument(s) passed to .do/.run should be a function or an array of functions"), console.warn("isInViewport: Ignoring non-function values in array and moving on")) : [].slice.call(n).forEach(function(n) {
                    return t.call(e(n))
                })
            }), this
        }

        function n(t) {
            var n = e("<div></div>").css({
                width: "100%"
            });
            t.append(n);
            var i = t.width() - n.width();
            return n.remove(), i
        }

        function i(t, r) {
            var o = t.getBoundingClientRect(),
                s = o.top,
                a = o.bottom,
                l = o.left,
                c = o.right,
                u = e.extend({
                    tolerance: 0,
                    viewport: window
                }, r),
                h = !1,
                d = u.viewport.jquery ? u.viewport : e(u.viewport);
            d.length || (console.warn("isInViewport: The viewport selector you have provided matches no element on page."), console.warn("isInViewport: Defaulting to viewport as window"), d = e(window));
            var f = d.height(),
                p = d.width(),
                m = d[0].toString();
            if (d[0] !== window && "[object Window]" !== m && "[object DOMWindow]" !== m) {
                var g = d[0].getBoundingClientRect();
                s -= g.top, a -= g.top, l -= g.left, c -= g.left, i.scrollBarWidth = i.scrollBarWidth || n(d), p -= i.scrollBarWidth
            }
            return u.tolerance = ~~Math.round(parseFloat(u.tolerance)), u.tolerance < 0 && (u.tolerance = f + u.tolerance), c <= 0 || l >= p ? h : h = u.tolerance ? s <= u.tolerance && a >= u.tolerance : a > 0 && s <= f
        }

        function r(t) {
            if (t) {
                var n = t.split(",");
                return 1 === n.length && isNaN(n[0]) && (n[1] = n[0], n[0] = void 0), {
                    tolerance: n[0] ? n[0].trim() : void 0,
                    viewport: n[1] ? e(n[1].trim()) : void 0
                }
            }
            return {}
        }
        e = e && e.hasOwnProperty("default") ? e.default : e, e.extend(e.expr.pseudos || e.expr[":"], {
            "in-viewport": e.expr.createPseudo ? e.expr.createPseudo(function(e) {
                return function(t) {
                    return i(t, r(e))
                }
            }) : function(e, t, n) {
                return i(e, r(n[3]))
            }
        }), e.fn.isInViewport = function(e) {
            return this.filter(function(t, n) {
                return i(n, e)
            })
        }, e.fn.run = t
    });
var defaults = {
        section: ".section",
        animationDuration: 700,
        animationTiming: "ease",
        animationTranform: "transform",
        pagination: !0,
        keyboard: !0,
        touch: !0,
        touchLimit: 100,
        loop: !1,
        onLeave: null,
        afterLoad: null
    },
    utils = {
        setVendor: function(e, t, n) {
            e && (e.style[t.charAt(0).toLowerCase() + t.slice(1)] = n, e.style["webkit" + t] = n, e.style["moz" + t] = n, e.style["ms" + t] = n, e.style["o" + t] = n)
        }
    },
    FullPage = function(e, t) {
        "use strict";
        return this.el = document.querySelector(e), this.settings = Object.assign({}, defaults, t), this.body = document.querySelector("body"), this.sections = this.el.querySelectorAll(this.settings.section), this.init(), this
    };
FullPage.prototype.init = function() {
        this.index = 0, this.lastAnimation = 0, this.build(), this.bindEvents(), this.makeActive(this.index)
    }, FullPage.prototype.build = function() {
        this.settings.pagination && this.paginationHTML()
    }, FullPage.prototype.bindEvents = function() {
        var e = this;
        if (this.settings.pagination)
            for (var t = document.querySelectorAll(".slide-navigation li a"), n = 0; n < t.length; n++) ! function(i) {
                t[n].addEventListener("click", function(t) {
                    e.index = i, e.move(e.index), t.preventDefault()
                })
            }(n);
        this.settings.keyboard && document.addEventListener("keydown", this.keyboard.bind(this)), this.settings.touch && this.enableTouch(document), document.addEventListener("mousewheel", this.mousewheel.bind(this)), document.addEventListener("DOMMouseScroll", this.mousewheel.bind(this))
    }, FullPage.prototype.makeActive = function(e) {
        for (var t = document.querySelectorAll(".slide-navigation li a"), n = 0; n < this.sections.length; n++) this.sections[n].classList.remove("is-active"), t[n].classList.remove("is-active");
        this.sections[e].classList.add("is-active"), t[e].classList.add("is-active")
    }, FullPage.prototype.move = function(e) {
        var t = this;
        "function" == typeof t.settings.onLeave && t.settings.onLeave(this.index), utils.setVendor(this.el, "Transform", "translate3d(0, " + -100 * e + "%, 0)"), utils.setVendor(this.el, "Transition", "transform " + this.settings.animationDuration + "ms");
        var n = function() {
            "function" == typeof t.settings.afterLoad && t.settings.afterLoad(t.index)
        };
        this.el.addEventListener("transitionend", n), this.index = e, this.makeActive(e)
    }, FullPage.prototype.moveUp = function() {
        this.index > 0 && this.move(this.index - 1)
    }, FullPage.prototype.moveDown = function() {
        this.index + 1 < this.sections.length && this.move(this.index + 1)
    }, FullPage.prototype.moveTo = function(e) {
        this.move(e)
    }, FullPage.prototype.enableTouch = function(e) {
        var t = this,
            n = 0,
            i = 0,
            r = 0;
        e.addEventListener("touchstart", function(e) {
                n = e.changedTouches[0].pageY
            }),
            e.addEventListener("touchmove", function(e) {
                e.preventDefault()
            }), e.addEventListener("touchend", function(e) {
                var o = (new Date).getTime();
                i = e.changedTouches[0].pageY, r = i - n, o - Math.abs(t.lastAnimation) < t.settings.animationDuration || (r < 0 && Math.abs(r) > t.settings.touchLimit ? t.moveDown() : r > 0 && Math.abs(r) > t.settings.touchLimit && t.moveUp(), t.lastAnimation = o)
            })
    }, FullPage.prototype.mousewheel = function(e) {
        var t = (new Date).getTime(),
            n = e.wheelDelta || -e.detail;
        t - Math.abs(this.lastAnimation) < this.settings.animationDuration || (n < 0 ? this.moveDown() : this.moveUp(), this.lastAnimation = t)
    }, FullPage.prototype.keyboard = function(e) {
        var t = (new Date).getTime();
        t - Math.abs(this.lastAnimation) < this.settings.animationDuration || (38 === e.keyCode && this.moveUp(), 40 === e.keyCode && this.moveDown(), this.lastAnimation = t)
    }, FullPage.prototype.paginationHTML = function() {
        for (var e = "", t = 0; t < this.sections.length; t++) e += '<li><a data-index="' + t + '" href="#' + t + '"></a></li>';
        var n = document.createElement("ul");
        n.setAttribute("class", "slide-navigation"), n.innerHTML = e, this.body.appendChild(n)
    },
    function(e, t, n) {
        ! function() {
            var i, r, o, s = "datepicker",
                a = !1,
                l = {
                    classes: "",
                    inline: !1,
                    language: "ru",
                    startDate: new Date,
                    firstDay: "",
                    weekends: [6, 0],
                    dateFormat: "",
                    altField: "",
                    altFieldDateFormat: "@",
                    toggleSelected: !0,
                    keyboardNav: !0,
                    position: "bottom left",
                    offset: 12,
                    view: "days",
                    minView: "days",
                    showOtherMonths: !0,
                    selectOtherMonths: !0,
                    moveToOtherMonthsOnSelect: !0,
                    showOtherYears: !0,
                    selectOtherYears: !0,
                    moveToOtherYearsOnSelect: !0,
                    minDate: "",
                    maxDate: "",
                    disableNavWhenOutOfRange: !0,
                    multipleDates: !1,
                    multipleDatesSeparator: ",",
                    range: !1,
                    todayButton: !1,
                    clearButton: !1,
                    showEvent: "focus",
                    autoClose: !1,
                    monthsField: "monthsShort",
                    prevHtml: '<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>',
                    nextHtml: '<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>',
                    navTitles: {
                        days: "MM, <i>yyyy</i>",
                        months: "yyyy",
                        years: "yyyy1 - yyyy2"
                    },
                    timepicker: !1,
                    onlyTimepicker: !1,
                    dateTimeSeparator: " ",
                    timeFormat: "",
                    minHours: 0,
                    maxHours: 24,
                    minMinutes: 0,
                    maxMinutes: 59,
                    hoursStep: 1,
                    minutesStep: 1,
                    onSelect: "",
                    onShow: "",
                    onHide: "",
                    onChangeMonth: "",
                    onChangeYear: "",
                    onChangeDecade: "",
                    onChangeView: "",
                    onRenderCell: ""
                },
                c = {
                    ctrlRight: [17, 39],
                    ctrlUp: [17, 38],
                    ctrlLeft: [17, 37],
                    ctrlDown: [17, 40],
                    shiftRight: [16, 39],
                    shiftUp: [16, 38],
                    shiftLeft: [16, 37],
                    shiftDown: [16, 40],
                    altUp: [18, 38],
                    altRight: [18, 39],
                    altLeft: [18, 37],
                    altDown: [18, 40],
                    ctrlShiftUp: [16, 17, 38]
                },
                u = function(e, r) {
                    this.el = e, this.$el = t(e), this.opts = t.extend(!0, {}, l, r, this.$el.data()), i == n && (i = t("body")), this.opts.startDate || (this.opts.startDate = new Date), "INPUT" == this.el.nodeName && (this.elIsInput = !0), this.opts.altField && (this.$altField = "string" == typeof this.opts.altField ? t(this.opts.altField) : this.opts.altField), this.inited = !1, this.visible = !1, this.silent = !1, this.currentDate = this.opts.startDate, this.currentView = this.opts.view, this._createShortCuts(), this.selectedDates = [], this.views = {}, this.keys = [], this.minRange = "", this.maxRange = "", this._prevOnSelectValue = "", this.init()
                };
            o = u, o.prototype = {
                VERSION: "2.2.3",
                viewIndexes: ["days", "months", "years"],
                init: function() {
                    a || this.opts.inline || !this.elIsInput || this._buildDatepickersContainer(), this._buildBaseHtml(), this._defineLocale(this.opts.language), this._syncWithMinMaxDates(), this.elIsInput && (this.opts.inline || (this._setPositionClasses(this.opts.position), this._bindEvents()), this.opts.keyboardNav && !this.opts.onlyTimepicker && this._bindKeyboardEvents(), this.$datepicker.on("mousedown", this._onMouseDownDatepicker.bind(this)), this.$datepicker.on("mouseup", this._onMouseUpDatepicker.bind(this))), this.opts.classes && this.$datepicker.addClass(this.opts.classes), this.opts.timepicker && (this.timepicker = new t.fn.datepicker.Timepicker(this, this.opts), this._bindTimepickerEvents()), this.opts.onlyTimepicker && this.$datepicker.addClass("-only-timepicker-"), this.views[this.currentView] = new t.fn.datepicker.Body(this, this.currentView, this.opts), this.views[this.currentView].show(), this.nav = new t.fn.datepicker.Navigation(this, this.opts), this.view = this.currentView, this.$el.on("clickCell.adp", this._onClickCell.bind(this)), this.$datepicker.on("mouseenter", ".datepicker--cell", this._onMouseEnterCell.bind(this)), this.$datepicker.on("mouseleave", ".datepicker--cell", this._onMouseLeaveCell.bind(this)), this.inited = !0
                },
                _createShortCuts: function() {
                    this.minDate = this.opts.minDate ? this.opts.minDate : new Date(-86399999136e5), this.maxDate = this.opts.maxDate ? this.opts.maxDate : new Date(86399999136e5)
                },
                _bindEvents: function() {
                    this.$el.on(this.opts.showEvent + ".adp", this._onShowEvent.bind(this)), this.$el.on("mouseup.adp", this._onMouseUpEl.bind(this)), this.$el.on("blur.adp", this._onBlur.bind(this)), this.$el.on("keyup.adp", this._onKeyUpGeneral.bind(this)), t(e).on("resize.adp", this._onResize.bind(this)), t("body").on("mouseup.adp", this._onMouseUpBody.bind(this))
                },
                _bindKeyboardEvents: function() {
                    this.$el.on("keydown.adp", this._onKeyDown.bind(this)), this.$el.on("keyup.adp", this._onKeyUp.bind(this)), this.$el.on("hotKey.adp", this._onHotKey.bind(this))
                },
                _bindTimepickerEvents: function() {
                    this.$el.on("timeChange.adp", this._onTimeChange.bind(this))
                },
                isWeekend: function(e) {
                    return -1 !== this.opts.weekends.indexOf(e)
                },
                _defineLocale: function(e) {
                    "string" == typeof e ? (this.loc = t.fn.datepicker.language[e], this.loc || (console.warn("Can't find language \"" + e + '" in Datepicker.language, will use "ru" instead'), this.loc = t.extend(!0, {}, t.fn.datepicker.language.ru)), this.loc = t.extend(!0, {}, t.fn.datepicker.language.ru, t.fn.datepicker.language[e])) : this.loc = t.extend(!0, {}, t.fn.datepicker.language.ru, e), this.opts.dateFormat && (this.loc.dateFormat = this.opts.dateFormat), this.opts.timeFormat && (this.loc.timeFormat = this.opts.timeFormat), "" !== this.opts.firstDay && (this.loc.firstDay = this.opts.firstDay), this.opts.timepicker && (this.loc.dateFormat = [this.loc.dateFormat, this.loc.timeFormat].join(this.opts.dateTimeSeparator)), this.opts.onlyTimepicker && (this.loc.dateFormat = this.loc.timeFormat);
                    var n = this._getWordBoundaryRegExp;
                    (this.loc.timeFormat.match(n("aa")) || this.loc.timeFormat.match(n("AA"))) && (this.ampm = !0)
                },
                _buildDatepickersContainer: function() {
                    a = !0, i.append('<div class="datepickers-container" id="datepickers-container"></div>'), r = t("#datepickers-container")
                },
                _buildBaseHtml: function() {
                    var e, n = t('<div class="datepicker-inline">');
                    e = "INPUT" == this.el.nodeName ? this.opts.inline ? n.insertAfter(this.$el) : r : n.appendTo(this.$el), this.$datepicker = t('<div class="datepicker"><i class="datepicker--pointer"></i><nav class="datepicker--nav"></nav><div class="datepicker--content"></div></div>').appendTo(e), this.$content = t(".datepicker--content", this.$datepicker), this.$nav = t(".datepicker--nav", this.$datepicker)
                },
                _triggerOnChange: function() {
                    if (!this.selectedDates.length) {
                        if ("" === this._prevOnSelectValue) return;
                        return this._prevOnSelectValue = "", this.opts.onSelect("", "", this)
                    }
                    var e, t = this.selectedDates,
                        n = o.getParsedDate(t[0]),
                        i = this,
                        r = new Date(n.year, n.month, n.date, n.hours, n.minutes);
                    e = t.map(function(e) {
                        return i.formatDate(i.loc.dateFormat, e)
                    }).join(this.opts.multipleDatesSeparator), (this.opts.multipleDates || this.opts.range) && (r = t.map(function(e) {
                        var t = o.getParsedDate(e);
                        return new Date(t.year, t.month, t.date, t.hours, t.minutes)
                    })), this._prevOnSelectValue = e, this.opts.onSelect(e, r, this)
                },
                next: function() {
                    var e = this.parsedDate,
                        t = this.opts;
                    switch (this.view) {
                        case "days":
                            this.date = new Date(e.year, e.month + 1, 1), t.onChangeMonth && t.onChangeMonth(this.parsedDate.month, this.parsedDate.year);
                            break;
                        case "months":
                            this.date = new Date(e.year + 1, e.month, 1), t.onChangeYear && t.onChangeYear(this.parsedDate.year);
                            break;
                        case "years":
                            this.date = new Date(e.year + 10, 0, 1), t.onChangeDecade && t.onChangeDecade(this.curDecade)
                    }
                },
                prev: function() {
                    var e = this.parsedDate,
                        t = this.opts;
                    switch (this.view) {
                        case "days":
                            this.date = new Date(e.year, e.month - 1, 1), t.onChangeMonth && t.onChangeMonth(this.parsedDate.month, this.parsedDate.year);
                            break;
                        case "months":
                            this.date = new Date(e.year - 1, e.month, 1), t.onChangeYear && t.onChangeYear(this.parsedDate.year);
                            break;
                        case "years":
                            this.date = new Date(e.year - 10, 0, 1), t.onChangeDecade && t.onChangeDecade(this.curDecade)
                    }
                },
                formatDate: function(e, t) {
                    t = t || this.date;
                    var n, i = e,
                        r = this._getWordBoundaryRegExp,
                        s = this.loc,
                        a = o.getLeadingZeroNum,
                        l = o.getDecade(t),
                        c = o.getParsedDate(t),
                        u = c.fullHours,
                        h = c.hours,
                        d = e.match(r("aa")) || e.match(r("AA")),
                        f = "am",
                        p = this._replacer;
                    switch (this.opts.timepicker && this.timepicker && d && (n = this.timepicker._getValidHoursFromDate(t, d), u = a(n.hours), h = n.hours, f = n.dayPeriod), !0) {
                        case /@/.test(i):
                            i = i.replace(/@/, t.getTime());
                        case /aa/.test(i):
                            i = p(i, r("aa"), f);
                        case /AA/.test(i):
                            i = p(i, r("AA"), f.toUpperCase());
                        case /dd/.test(i):
                            i = p(i, r("dd"), c.fullDate);
                        case /d/.test(i):
                            i = p(i, r("d"), c.date);
                        case /DD/.test(i):
                            i = p(i, r("DD"), s.days[c.day]);
                        case /D/.test(i):
                            i = p(i, r("D"), s.daysShort[c.day]);
                        case /mm/.test(i):
                            i = p(i, r("mm"), c.fullMonth);
                        case /m/.test(i):
                            i = p(i, r("m"), c.month + 1);
                        case /MM/.test(i):
                            i = p(i, r("MM"), this.loc.months[c.month]);
                        case /M/.test(i):
                            i = p(i, r("M"), s.monthsShort[c.month]);
                        case /ii/.test(i):
                            i = p(i, r("ii"), c.fullMinutes);
                        case /i/.test(i):
                            i = p(i, r("i"), c.minutes);
                        case /hh/.test(i):
                            i = p(i, r("hh"), u);
                        case /h/.test(i):
                            i = p(i, r("h"), h);
                        case /yyyy/.test(i):
                            i = p(i, r("yyyy"), c.year);
                        case /yyyy1/.test(i):
                            i = p(i, r("yyyy1"), l[0]);
                        case /yyyy2/.test(i):
                            i = p(i, r("yyyy2"), l[1]);
                        case /yy/.test(i):
                            i = p(i, r("yy"), c.year.toString().slice(-2))
                    }
                    return i
                },
                _replacer: function(e, t, n) {
                    return e.replace(t, function(e, t, i, r) {
                        return t + n + r
                    })
                },
                _getWordBoundaryRegExp: function(e) {
                    var t = "\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;";
                    return new RegExp("(^|>|" + t + ")(" + e + ")($|<|" + t + ")", "g")
                },
                selectDate: function(e) {
                    var t = this,
                        n = t.opts,
                        i = t.parsedDate,
                        r = t.selectedDates,
                        s = r.length,
                        a = "";
                    if (Array.isArray(e)) return void e.forEach(function(e) {
                        t.selectDate(e)
                    });
                    if (e instanceof Date) {
                        if (this.lastSelectedDate = e, this.timepicker && this.timepicker._setTime(e), t._trigger("selectDate", e), this.timepicker && (e.setHours(this.timepicker.hours), e.setMinutes(this.timepicker.minutes)), "days" == t.view && e.getMonth() != i.month && n.moveToOtherMonthsOnSelect && (a = new Date(e.getFullYear(), e.getMonth(), 1)), "years" == t.view && e.getFullYear() != i.year && n.moveToOtherYearsOnSelect && (a = new Date(e.getFullYear(), 0, 1)), a && (t.silent = !0, t.date = a, t.silent = !1, t.nav._render()), n.multipleDates && !n.range) {
                            if (s === n.multipleDates) return;
                            t._isSelected(e) || t.selectedDates.push(e)
                        } else n.range ? 2 == s ? (t.selectedDates = [e], t.minRange = e, t.maxRange = "") : 1 == s ? (t.selectedDates.push(e), t.maxRange ? t.minRange = e : t.maxRange = e, o.bigger(t.maxRange, t.minRange) && (t.maxRange = t.minRange, t.minRange = e), t.selectedDates = [t.minRange, t.maxRange]) : (t.selectedDates = [e], t.minRange = e) : t.selectedDates = [e];
                        t._setInputValue(), n.onSelect && t._triggerOnChange(), n.autoClose && !this.timepickerIsActive && (n.multipleDates || n.range ? n.range && 2 == t.selectedDates.length && t.hide() : t.hide()), t.views[this.currentView]._render()
                    }
                },
                removeDate: function(e) {
                    var t = this.selectedDates,
                        n = this;
                    if (e instanceof Date) return t.some(function(i, r) {
                        return o.isSame(i, e) ? (t.splice(r, 1), n.selectedDates.length ? n.lastSelectedDate = n.selectedDates[n.selectedDates.length - 1] : (n.minRange = "", n.maxRange = "", n.lastSelectedDate = ""), n.views[n.currentView]._render(), n._setInputValue(), n.opts.onSelect && n._triggerOnChange(), !0) : void 0
                    })
                },
                today: function() {
                    this.silent = !0, this.view = this.opts.minView, this.silent = !1, this.date = new Date, this.opts.todayButton instanceof Date && this.selectDate(this.opts.todayButton)
                },
                clear: function() {
                    this.selectedDates = [], this.minRange = "", this.maxRange = "", this.views[this.currentView]._render(), this._setInputValue(), this.opts.onSelect && this._triggerOnChange()
                },
                update: function(e, n) {
                    var i = arguments.length,
                        r = this.lastSelectedDate;
                    return 2 == i ? this.opts[e] = n : 1 == i && "object" == typeof e && (this.opts = t.extend(!0, this.opts, e)), this._createShortCuts(), this._syncWithMinMaxDates(), this._defineLocale(this.opts.language), this.nav._addButtonsIfNeed(), this.opts.onlyTimepicker || this.nav._render(), this.views[this.currentView]._render(), this.elIsInput && !this.opts.inline && (this._setPositionClasses(this.opts.position), this.visible && this.setPosition(this.opts.position)), this.opts.classes && this.$datepicker.addClass(this.opts.classes), this.opts.onlyTimepicker && this.$datepicker.addClass("-only-timepicker-"), this.opts.timepicker && (r && this.timepicker._handleDate(r), this.timepicker._updateRanges(), this.timepicker._updateCurrentTime(), r && (r.setHours(this.timepicker.hours), r.setMinutes(this.timepicker.minutes))), this._setInputValue(), this
                },
                _syncWithMinMaxDates: function() {
                    var e = this.date.getTime();
                    this.silent = !0, this.minTime > e && (this.date = this.minDate), this.maxTime < e && (this.date = this.maxDate), this.silent = !1
                },
                _isSelected: function(e, t) {
                    var n = !1;
                    return this.selectedDates.some(function(i) {
                        return o.isSame(i, e, t) ? (n = i, !0) : void 0
                    }), n
                },
                _setInputValue: function() {
                    var e, t = this,
                        n = t.opts,
                        i = t.loc.dateFormat,
                        r = n.altFieldDateFormat,
                        o = t.selectedDates.map(function(e) {
                            return t.formatDate(i, e)
                        });
                    n.altField && t.$altField.length && (e = this.selectedDates.map(function(e) {
                        return t.formatDate(r, e)
                    }), e = e.join(this.opts.multipleDatesSeparator), this.$altField.val(e)), o = o.join(this.opts.multipleDatesSeparator), this.$el.val(o)
                },
                _isInRange: function(e, t) {
                    var n = e.getTime(),
                        i = o.getParsedDate(e),
                        r = o.getParsedDate(this.minDate),
                        s = o.getParsedDate(this.maxDate),
                        a = new Date(i.year, i.month, r.date).getTime(),
                        l = new Date(i.year, i.month, s.date).getTime(),
                        c = {
                            day: n >= this.minTime && n <= this.maxTime,
                            month: a >= this.minTime && l <= this.maxTime,
                            year: i.year >= r.year && i.year <= s.year
                        };
                    return t ? c[t] : c.day
                },
                _getDimensions: function(e) {
                    var t = e.offset();
                    return {
                        width: e.outerWidth(),
                        height: e.outerHeight(),
                        left: t.left,
                        top: t.top
                    }
                },
                _getDateFromCell: function(e) {
                    var t = this.parsedDate,
                        i = e.data("year") || t.year,
                        r = e.data("month") == n ? t.month : e.data("month"),
                        o = e.data("date") || 1;
                    return new Date(i, r, o)
                },
                _setPositionClasses: function(e) {
                    e = e.split(" ");
                    var t = e[0],
                        n = e[1],
                        i = "datepicker -" + t + "-" + n + "- -from-" + t + "-";
                    this.visible && (i += " active"), this.$datepicker.removeAttr("class").addClass(i)
                },
                setPosition: function(e) {
                    e = e || this.opts.position;
                    var t, n, i = this._getDimensions(this.$el),
                        r = this._getDimensions(this.$datepicker),
                        o = e.split(" "),
                        s = this.opts.offset,
                        a = o[0],
                        l = o[1];
                    switch (a) {
                        case "top":
                            t = i.top - r.height - s;
                            break;
                        case "right":
                            n = i.left + i.width + s;
                            break;
                        case "bottom":
                            t = i.top + i.height + s;
                            break;
                        case "left":
                            n = i.left - r.width - s
                    }
                    switch (l) {
                        case "top":
                            t = i.top;
                            break;
                        case "right":
                            n = i.left + i.width - r.width;
                            break;
                        case "bottom":
                            t = i.top + i.height - r.height;
                            break;
                        case "left":
                            n = i.left;
                            break;
                        case "center":
                            /left|right/.test(a) ? t = i.top + i.height / 2 - r.height / 2 : n = i.left + i.width / 2 - r.width / 2
                    }
                    this.$datepicker.css({
                        left: n,
                        top: t
                    })
                },
                show: function() {
                    var e = this.opts.onShow;
                    this.setPosition(this.opts.position), this.$datepicker.addClass("active"), this.visible = !0, e && this._bindVisionEvents(e)
                },
                hide: function() {
                    var e = this.opts.onHide;
                    this.$datepicker.removeClass("active").css({
                        left: "-100000px"
                    }), this.focused = "", this.keys = [], this.inFocus = !1, this.visible = !1, this.$el.blur(), e && this._bindVisionEvents(e)
                },
                down: function(e) {
                    this._changeView(e, "down")
                },
                up: function(e) {
                    this._changeView(e, "up")
                },
                _bindVisionEvents: function(e) {
                    this.$datepicker.off("transitionend.dp"), e(this, !1), this.$datepicker.one("transitionend.dp", e.bind(this, this, !0))
                },
                _changeView: function(e, t) {
                    e = e || this.focused || this.date;
                    var n = "up" == t ? this.viewIndex + 1 : this.viewIndex - 1;
                    n > 2 && (n = 2), 0 > n && (n = 0), this.silent = !0, this.date = new Date(e.getFullYear(), e.getMonth(), 1), this.silent = !1, this.view = this.viewIndexes[n]
                },
                _handleHotKey: function(e) {
                    var t, n, i, r = o.getParsedDate(this._getFocusedDate()),
                        s = this.opts,
                        a = !1,
                        l = !1,
                        c = !1,
                        u = r.year,
                        h = r.month,
                        d = r.date;
                    switch (e) {
                        case "ctrlRight":
                        case "ctrlUp":
                            h += 1, a = !0;
                            break;
                        case "ctrlLeft":
                        case "ctrlDown":
                            h -= 1, a = !0;
                            break;
                        case "shiftRight":
                        case "shiftUp":
                            l = !0, u += 1;
                            break;
                        case "shiftLeft":
                        case "shiftDown":
                            l = !0, u -= 1;
                            break;
                        case "altRight":
                        case "altUp":
                            c = !0, u += 10;
                            break;
                        case "altLeft":
                        case "altDown":
                            c = !0, u -= 10;
                            break;
                        case "ctrlShiftUp":
                            this.up()
                    }
                    i = o.getDaysCount(new Date(u, h)), n = new Date(u, h, d), d > i && (d = i), n.getTime() < this.minTime ? n = this.minDate : n.getTime() > this.maxTime && (n = this.maxDate), this.focused = n, t = o.getParsedDate(n), a && s.onChangeMonth && s.onChangeMonth(t.month, t.year), l && s.onChangeYear && s.onChangeYear(t.year), c && s.onChangeDecade && s.onChangeDecade(this.curDecade)
                },
                _registerKey: function(e) {
                    this.keys.some(function(t) {
                        return t == e
                    }) || this.keys.push(e)
                },
                _unRegisterKey: function(e) {
                    var t = this.keys.indexOf(e);
                    this.keys.splice(t, 1)
                },
                _isHotKeyPressed: function() {
                    var e, t = !1,
                        n = this,
                        i = this.keys.sort();
                    for (var r in c) e = c[r], i.length == e.length && e.every(function(e, t) {
                        return e == i[t]
                    }) && (n._trigger("hotKey", r), t = !0);
                    return t
                },
                _trigger: function(e, t) {
                    this.$el.trigger(e, t)
                },
                _focusNextCell: function(e, t) {
                    t = t || this.cellType;
                    var n = o.getParsedDate(this._getFocusedDate()),
                        i = n.year,
                        r = n.month,
                        s = n.date;
                    if (!this._isHotKeyPressed()) {
                        switch (e) {
                            case 37:
                                "day" == t && (s -= 1), "month" == t && (r -= 1), "year" == t && (i -= 1);
                                break;
                            case 38:
                                "day" == t && (s -= 7), "month" == t && (r -= 3), "year" == t && (i -= 4);
                                break;
                            case 39:
                                "day" == t && (s += 1), "month" == t && (r += 1), "year" == t && (i += 1);
                                break;
                            case 40:
                                "day" == t && (s += 7), "month" == t && (r += 3), "year" == t && (i += 4)
                        }
                        var a = new Date(i, r, s);
                        a.getTime() < this.minTime ? a = this.minDate : a.getTime() > this.maxTime && (a = this.maxDate), this.focused = a
                    }
                },
                _getFocusedDate: function() {
                    var e = this.focused || this.selectedDates[this.selectedDates.length - 1],
                        t = this.parsedDate;
                    if (!e) switch (this.view) {
                        case "days":
                            e = new Date(t.year, t.month, (new Date).getDate());
                            break;
                        case "months":
                            e = new Date(t.year, t.month, 1);
                            break;
                        case "years":
                            e = new Date(t.year, 0, 1)
                    }
                    return e
                },
                _getCell: function(e, n) {
                    n = n || this.cellType;
                    var i, r = o.getParsedDate(e),
                        s = '.datepicker--cell[data-year="' + r.year + '"]';
                    switch (n) {
                        case "month":
                            s = '[data-month="' + r.month + '"]';
                            break;
                        case "day":
                            s += '[data-month="' + r.month + '"][data-date="' + r.date + '"]'
                    }
                    return i = this.views[this.currentView].$el.find(s), i.length ? i : t("")
                },
                destroy: function() {
                    var e = this;
                    e.$el.off(".adp").data("datepicker", ""), e.selectedDates = [], e.focused = "", e.views = {}, e.keys = [], e.minRange = "", e.maxRange = "", e.opts.inline || !e.elIsInput ? e.$datepicker.closest(".datepicker-inline").remove() : e.$datepicker.remove()
                },
                _handleAlreadySelectedDates: function(e, t) {
                    this.opts.range ? this.opts.toggleSelected ? this.removeDate(t) : 2 != this.selectedDates.length && this._trigger("clickCell", t) : this.opts.toggleSelected && this.removeDate(t), this.opts.toggleSelected || (this.lastSelectedDate = e, this.opts.timepicker && (this.timepicker._setTime(e), this.timepicker.update()))
                },
                _onShowEvent: function(e) {
                    this.visible || this.show()
                },
                _onBlur: function() {
                    !this.inFocus && this.visible && this.hide()
                },
                _onMouseDownDatepicker: function(e) {
                    this.inFocus = !0
                },
                _onMouseUpDatepicker: function(e) {
                    this.inFocus = !1, e.originalEvent.inFocus = !0, e.originalEvent.timepickerFocus || this.$el.focus()
                },
                _onKeyUpGeneral: function(e) {
                    this.$el.val() || this.clear()
                },
                _onResize: function() {
                    this.visible && this.setPosition()
                },
                _onMouseUpBody: function(e) {
                    e.originalEvent.inFocus || this.visible && !this.inFocus && this.hide()
                },
                _onMouseUpEl: function(e) {
                    e.originalEvent.inFocus = !0, setTimeout(this._onKeyUpGeneral.bind(this), 4)
                },
                _onKeyDown: function(e) {
                    var t = e.which;
                    if (this._registerKey(t), t >= 37 && 40 >= t && (e.preventDefault(), this._focusNextCell(t)), 13 == t && this.focused) {
                        if (this._getCell(this.focused).hasClass("-disabled-")) return;
                        if (this.view != this.opts.minView) this.down();
                        else {
                            var n = this._isSelected(this.focused, this.cellType);
                            if (!n) return this.timepicker && (this.focused.setHours(this.timepicker.hours), this.focused.setMinutes(this.timepicker.minutes)), void this.selectDate(this.focused);
                            this._handleAlreadySelectedDates(n, this.focused)
                        }
                    }
                    27 == t && this.hide()
                },
                _onKeyUp: function(e) {
                    var t = e.which;
                    this._unRegisterKey(t)
                },
                _onHotKey: function(e, t) {
                    this._handleHotKey(t)
                },
                _onMouseEnterCell: function(e) {
                    var n = t(e.target).closest(".datepicker--cell"),
                        i = this._getDateFromCell(n);
                    this.silent = !0, this.focused && (this.focused = ""), n.addClass("-focus-"), this.focused = i, this.silent = !1, this.opts.range && 1 == this.selectedDates.length && (this.minRange = this.selectedDates[0], this.maxRange = "", o.less(this.minRange, this.focused) && (this.maxRange = this.minRange, this.minRange = ""), this.views[this.currentView]._update())
                },
                _onMouseLeaveCell: function(e) {
                    t(e.target).closest(".datepicker--cell").removeClass("-focus-"), this.silent = !0, this.focused = "", this.silent = !1
                },
                _onTimeChange: function(e, t, n) {
                    var i = new Date,
                        r = this.selectedDates,
                        o = !1;
                    r.length && (o = !0, i = this.lastSelectedDate), i.setHours(t), i.setMinutes(n), o || this._getCell(i).hasClass("-disabled-") ? (this._setInputValue(), this.opts.onSelect && this._triggerOnChange()) : this.selectDate(i)
                },
                _onClickCell: function(e, t) {
                    this.timepicker && (t.setHours(this.timepicker.hours), t.setMinutes(this.timepicker.minutes)), this.selectDate(t)
                },
                set focused(e) {
                    if (!e && this.focused) {
                        var t = this._getCell(this.focused);
                        t.length && t.removeClass("-focus-")
                    }
                    this._focused = e, this.opts.range && 1 == this.selectedDates.length && (this.minRange = this.selectedDates[0], this.maxRange = "", o.less(this.minRange, this._focused) && (this.maxRange = this.minRange, this.minRange = "")), this.silent || (this.date = e)
                },
                get focused() {
                    return this._focused
                },
                get parsedDate() {
                    return o.getParsedDate(this.date)
                },
                set date(e) {
                    return e instanceof Date ? (this.currentDate = e, this.inited && !this.silent && (this.views[this.view]._render(), this.nav._render(), this.visible && this.elIsInput && this.setPosition()), e) : void 0
                },
                get date() {
                    return this.currentDate
                },
                set view(e) {
                    return this.viewIndex = this.viewIndexes.indexOf(e), this.viewIndex < 0 ? void 0 : (this.prevView = this.currentView, this.currentView = e, this.inited && (this.views[e] ? this.views[e]._render() : this.views[e] = new t.fn.datepicker.Body(this, e, this.opts), this.views[this.prevView].hide(), this.views[e].show(), this.nav._render(), this.opts.onChangeView && this.opts.onChangeView(e), this.elIsInput && this.visible && this.setPosition()), e)
                },
                get view() {
                    return this.currentView
                },
                get cellType() {
                    return this.view.substring(0, this.view.length - 1)
                },
                get minTime() {
                    var e = o.getParsedDate(this.minDate);
                    return new Date(e.year, e.month, e.date).getTime()
                },
                get maxTime() {
                    var e = o.getParsedDate(this.maxDate);
                    return new Date(e.year, e.month, e.date).getTime()
                },
                get curDecade() {
                    return o.getDecade(this.date)
                }
            }, o.getDaysCount = function(e) {
                return new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate()
            }, o.getParsedDate = function(e) {
                return {
                    year: e.getFullYear(),
                    month: e.getMonth(),
                    fullMonth: e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1,
                    date: e.getDate(),
                    fullDate: e.getDate() < 10 ? "0" + e.getDate() : e.getDate(),
                    day: e.getDay(),
                    hours: e.getHours(),
                    fullHours: e.getHours() < 10 ? "0" + e.getHours() : e.getHours(),
                    minutes: e.getMinutes(),
                    fullMinutes: e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes()
                }
            }, o.getDecade = function(e) {
                var t = 10 * Math.floor(e.getFullYear() / 10);
                return [t, t + 9]
            }, o.template = function(e, t) {
                return e.replace(/#\{([\w]+)\}/g, function(e, n) {
                    return t[n] || 0 === t[n] ? t[n] : void 0
                })
            }, o.isSame = function(e, t, n) {
                if (!e || !t) return !1;
                var i = o.getParsedDate(e),
                    r = o.getParsedDate(t),
                    s = n || "day";
                return {
                    day: i.date == r.date && i.month == r.month && i.year == r.year,
                    month: i.month == r.month && i.year == r.year,
                    year: i.year == r.year
                } [s]
            }, o.less = function(e, t, n) {
                return !(!e || !t) && t.getTime() < e.getTime()
            }, o.bigger = function(e, t, n) {
                return !(!e || !t) && t.getTime() > e.getTime()
            }, o.getLeadingZeroNum = function(e) {
                return parseInt(e) < 10 ? "0" + e : e
            }, o.resetTime = function(e) {
                return "object" == typeof e ? (e = o.getParsedDate(e), new Date(e.year, e.month, e.date)) : void 0
            }, t.fn.datepicker = function(e) {
                return this.each(function() {
                    if (t.data(this, s)) {
                        var n = t.data(this, s);
                        n.opts = t.extend(!0, n.opts, e), n.update()
                    } else t.data(this, s, new u(this, e))
                })
            }, t.fn.datepicker.Constructor = u, t.fn.datepicker.language = {
                ru: {
                    days: ["Ð’Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ", "ÐŸÐ¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº", "Ð’Ñ‚Ð¾Ñ€Ð½Ð¸Ðº", "Ð¡Ñ€ÐµÐ´Ð°", "Ð§ÐµÑ‚Ð²ÐµÑ€Ð³", "ÐŸÑÑ‚Ð½Ð¸Ñ†Ð°", "Ð¡ÑƒÐ±Ð±Ð¾Ñ‚Ð°"],
                    daysShort: ["Ð’Ð¾Ñ", "ÐŸÐ¾Ð½", "Ð’Ñ‚Ð¾", "Ð¡Ñ€Ðµ", "Ð§ÐµÑ‚", "ÐŸÑÑ‚", "Ð¡ÑƒÐ±"],
                    daysMin: ["Ð’Ñ", "ÐŸÐ½", "Ð’Ñ‚", "Ð¡Ñ€", "Ð§Ñ‚", "ÐŸÑ‚", "Ð¡Ð±"],
                    months: ["Ð¯Ð½Ð²Ð°Ñ€ÑŒ", "Ð¤ÐµÐ²Ñ€Ð°Ð»ÑŒ", "ÐœÐ°Ñ€Ñ‚", "ÐÐ¿Ñ€ÐµÐ»ÑŒ", "ÐœÐ°Ð¹", "Ð˜ÑŽÐ½ÑŒ", "Ð˜ÑŽÐ»ÑŒ", "ÐÐ²Ð³ÑƒÑÑ‚", "Ð¡ÐµÐ½Ñ‚ÑÐ±Ñ€ÑŒ", "ÐžÐºÑ‚ÑÐ±Ñ€ÑŒ", "ÐÐ¾ÑÐ±Ñ€ÑŒ", "Ð”ÐµÐºÐ°Ð±Ñ€ÑŒ"],
                    monthsShort: ["Ð¯Ð½Ð²", "Ð¤ÐµÐ²", "ÐœÐ°Ñ€", "ÐÐ¿Ñ€", "ÐœÐ°Ð¹", "Ð˜ÑŽÐ½", "Ð˜ÑŽÐ»", "ÐÐ²Ð³", "Ð¡ÐµÐ½", "ÐžÐºÑ‚", "ÐÐ¾Ñ", "Ð”ÐµÐº"],
                    today: "Ð¡ÐµÐ³Ð¾Ð´Ð½Ñ",
                    clear: "ÐžÑ‡Ð¸ÑÑ‚Ð¸Ñ‚ÑŒ",
                    dateFormat: "dd.mm.yyyy",
                    timeFormat: "hh:ii",
                    firstDay: 1
                }
            }, t(function() {
                t(".datepicker-here").datepicker()
            })
        }(),
        function() {
            var e = {
                    days: '<div class="datepicker--days datepicker--body"><div class="datepicker--days-names"></div><div class="datepicker--cells datepicker--cells-days"></div></div>',
                    months: '<div class="datepicker--months datepicker--body"><div class="datepicker--cells datepicker--cells-months"></div></div>',
                    years: '<div class="datepicker--years datepicker--body"><div class="datepicker--cells datepicker--cells-years"></div></div>'
                },
                i = t.fn.datepicker,
                r = i.Constructor;
            i.Body = function(e, n, i) {
                this.d = e, this.type = n, this.opts = i, this.$el = t(""), this.opts.onlyTimepicker || this.init()
            }, i.Body.prototype = {
                init: function() {
                    this._buildBaseHtml(), this._render(), this._bindEvents()
                },
                _bindEvents: function() {
                    this.$el.on("click", ".datepicker--cell", t.proxy(this._onClickCell, this))
                },
                _buildBaseHtml: function() {
                    this.$el = t(e[this.type]).appendTo(this.d.$content), this.$names = t(".datepicker--days-names", this.$el), this.$cells = t(".datepicker--cells", this.$el)
                },
                _getDayNamesHtml: function(e, t, i, r) {
                    return t = t != n ? t : e, i = i || "", r = r != n ? r : 0, r > 7 ? i : 7 == t ? this._getDayNamesHtml(e, 0, i, ++r) : (i += '<div class="datepicker--day-name' + (this.d.isWeekend(t) ? " -weekend-" : "") + '">' + this.d.loc.daysMin[t] + "</div>", this._getDayNamesHtml(e, ++t, i, ++r))
                },
                _getCellContents: function(e, t) {
                    var n = "datepicker--cell datepicker--cell-" + t,
                        i = new Date,
                        o = this.d,
                        s = r.resetTime(o.minRange),
                        a = r.resetTime(o.maxRange),
                        l = o.opts,
                        c = r.getParsedDate(e),
                        u = {},
                        h = c.date;
                    switch (t) {
                        case "day":
                            o.isWeekend(c.day) && (n += " -weekend-"), c.month != this.d.parsedDate.month && (n += " -other-month-", l.selectOtherMonths || (n += " -disabled-"), l.showOtherMonths || (h = ""));
                            break;
                        case "month":
                            h = o.loc[o.opts.monthsField][c.month];
                            break;
                        case "year":
                            var d = o.curDecade;
                            h = c.year, (c.year < d[0] || c.year > d[1]) && (n += " -other-decade-", l.selectOtherYears || (n += " -disabled-"), l.showOtherYears || (h = ""))
                    }
                    return l.onRenderCell && (u = l.onRenderCell(e, t) || {}, h = u.html ? u.html : h, n += u.classes ? " " + u.classes : ""), l.range && (r.isSame(s, e, t) && (n += " -range-from-"), r.isSame(a, e, t) && (n += " -range-to-"), 1 == o.selectedDates.length && o.focused ? ((r.bigger(s, e) && r.less(o.focused, e) || r.less(a, e) && r.bigger(o.focused, e)) && (n += " -in-range-"), r.less(a, e) && r.isSame(o.focused, e) && (n += " -range-from-"), r.bigger(s, e) && r.isSame(o.focused, e) && (n += " -range-to-")) : 2 == o.selectedDates.length && r.bigger(s, e) && r.less(a, e) && (n += " -in-range-")), r.isSame(i, e, t) && (n += " -current-"), o.focused && r.isSame(e, o.focused, t) && (n += " -focus-"), o._isSelected(e, t) && (n += " -selected-"), (!o._isInRange(e, t) || u.disabled) && (n += " -disabled-"), {
                        html: h,
                        classes: n
                    }
                },
                _getDaysHtml: function(e) {
                    var t = r.getDaysCount(e),
                        n = new Date(e.getFullYear(), e.getMonth(), 1).getDay(),
                        i = new Date(e.getFullYear(), e.getMonth(), t).getDay(),
                        o = n - this.d.loc.firstDay,
                        s = 6 - i + this.d.loc.firstDay;
                    o = 0 > o ? o + 7 : o, s = s > 6 ? s - 7 : s;
                    for (var a, l, c = 1 - o, u = "", h = c, d = t + s; d >= h; h++) l = e.getFullYear(), a = e.getMonth(), u += this._getDayHtml(new Date(l, a, h));
                    return u
                },
                _getDayHtml: function(e) {
                    var t = this._getCellContents(e, "day");
                    return '<div class="' + t.classes + '" data-date="' + e.getDate() + '" data-month="' + e.getMonth() + '" data-year="' + e.getFullYear() + '">' + t.html + "</div>"
                },
                _getMonthsHtml: function(e) {
                    for (var t = "", n = r.getParsedDate(e), i = 0; 12 > i;) t += this._getMonthHtml(new Date(n.year, i)), i++;
                    return t
                },
                _getMonthHtml: function(e) {
                    var t = this._getCellContents(e, "month");
                    return '<div class="' + t.classes + '" data-month="' + e.getMonth() + '">' + t.html + "</div>"
                },
                _getYearsHtml: function(e) {
                    var t = (r.getParsedDate(e), r.getDecade(e)),
                        n = t[0] - 1,
                        i = "",
                        o = n;
                    for (o; o <= t[1] + 1; o++) i += this._getYearHtml(new Date(o, 0));
                    return i
                },
                _getYearHtml: function(e) {
                    var t = this._getCellContents(e, "year");
                    return '<div class="' + t.classes + '" data-year="' + e.getFullYear() + '">' + t.html + "</div>"
                },
                _renderTypes: {
                    days: function() {
                        var e = this._getDayNamesHtml(this.d.loc.firstDay),
                            t = this._getDaysHtml(this.d.currentDate);
                        this.$cells.html(t), this.$names.html(e)
                    },
                    months: function() {
                        var e = this._getMonthsHtml(this.d.currentDate);
                        this.$cells.html(e)
                    },
                    years: function() {
                        var e = this._getYearsHtml(this.d.currentDate);
                        this.$cells.html(e)
                    }
                },
                _render: function() {
                    this.opts.onlyTimepicker || this._renderTypes[this.type].bind(this)()
                },
                _update: function() {
                    var e, n, i, r = t(".datepicker--cell", this.$cells),
                        o = this;
                    r.each(function(r, s) {
                        n = t(this), i = o.d._getDateFromCell(t(this)), e = o._getCellContents(i, o.d.cellType), n.attr("class", e.classes)
                    })
                },
                show: function() {
                    this.opts.onlyTimepicker || (this.$el.addClass("active"), this.acitve = !0)
                },
                hide: function() {
                    this.$el.removeClass("active"), this.active = !1
                },
                _handleClick: function(e) {
                    var t = e.data("date") || 1,
                        n = e.data("month") || 0,
                        i = e.data("year") || this.d.parsedDate.year,
                        r = this.d;
                    if (r.view != this.opts.minView) return void r.down(new Date(i, n, t));
                    var o = new Date(i, n, t),
                        s = this.d._isSelected(o, this.d.cellType);
                    return s ? void r._handleAlreadySelectedDates.bind(r, s, o)() : void r._trigger("clickCell", o)
                },
                _onClickCell: function(e) {
                    var n = t(e.target).closest(".datepicker--cell");
                    n.hasClass("-disabled-") || this._handleClick.bind(this)(n)
                }
            }
        }(),
        function() {
            var e = t.fn.datepicker,
                n = e.Constructor;
            e.Navigation = function(e, t) {
                this.d = e, this.opts = t, this.$buttonsContainer = "", this.init()
            }, e.Navigation.prototype = {
                init: function() {
                    this._buildBaseHtml(), this._bindEvents()
                },
                _bindEvents: function() {
                    this.d.$nav.on("click", ".datepicker--nav-action", t.proxy(this._onClickNavButton, this)), this.d.$nav.on("click", ".datepicker--nav-title", t.proxy(this._onClickNavTitle, this)), this.d.$datepicker.on("click", ".datepicker--button", t.proxy(this._onClickNavButton, this))
                },
                _buildBaseHtml: function() {
                    this.opts.onlyTimepicker || this._render(), this._addButtonsIfNeed()
                },
                _addButtonsIfNeed: function() {
                    this.opts.todayButton && this._addButton("today"), this.opts.clearButton && this._addButton("clear")
                },
                _render: function() {
                    var e = this._getTitle(this.d.currentDate),
                        i = n.template('<div class="datepicker--nav-action" data-action="prev">#{prevHtml}</div><div class="datepicker--nav-title">#{title}</div><div class="datepicker--nav-action" data-action="next">#{nextHtml}</div>', t.extend({
                            title: e
                        }, this.opts));
                    this.d.$nav.html(i), "years" == this.d.view && t(".datepicker--nav-title", this.d.$nav).addClass("-disabled-"), this.setNavStatus()
                },
                _getTitle: function(e) {
                    return this.d.formatDate(this.opts.navTitles[this.d.view], e)
                },
                _addButton: function(e) {
                    this.$buttonsContainer.length || this._addButtonsContainer();
                    var i = {
                            action: e,
                            label: this.d.loc[e]
                        },
                        r = n.template('<span class="datepicker--button" data-action="#{action}">#{label}</span>', i);
                    t("[data-action=" + e + "]", this.$buttonsContainer).length || this.$buttonsContainer.append(r)
                },
                _addButtonsContainer: function() {
                    this.d.$datepicker.append('<div class="datepicker--buttons"></div>'), this.$buttonsContainer = t(".datepicker--buttons", this.d.$datepicker)
                },
                setNavStatus: function() {
                    if ((this.opts.minDate || this.opts.maxDate) && this.opts.disableNavWhenOutOfRange) {
                        var e = this.d.parsedDate,
                            t = e.month,
                            i = e.year,
                            r = e.date;
                        switch (this.d.view) {
                            case "days":
                                this.d._isInRange(new Date(i, t - 1, 1), "month") || this._disableNav("prev"), this.d._isInRange(new Date(i, t + 1, 1), "month") || this._disableNav("next");
                                break;
                            case "months":
                                this.d._isInRange(new Date(i - 1, t, r), "year") || this._disableNav("prev"), this.d._isInRange(new Date(i + 1, t, r), "year") || this._disableNav("next");
                                break;
                            case "years":
                                var o = n.getDecade(this.d.date);
                                this.d._isInRange(new Date(o[0] - 1, 0, 1), "year") || this._disableNav("prev"), this.d._isInRange(new Date(o[1] + 1, 0, 1), "year") || this._disableNav("next")
                        }
                    }
                },
                _disableNav: function(e) {
                    t('[data-action="' + e + '"]', this.d.$nav).addClass("-disabled-")
                },
                _activateNav: function(e) {
                    t('[data-action="' + e + '"]', this.d.$nav).removeClass("-disabled-")
                },
                _onClickNavButton: function(e) {
                    var n = t(e.target).closest("[data-action]"),
                        i = n.data("action");
                    this.d[i]()
                },
                _onClickNavTitle: function(e) {
                    return t(e.target).hasClass("-disabled-") ? void 0 : "days" == this.d.view ? this.d.view = "months" : void(this.d.view = "years")
                }
            }
        }(),
        function() {
            var e = t.fn.datepicker,
                n = e.Constructor;
            e.Timepicker = function(e, t) {
                this.d = e, this.opts = t, this.init()
            }, e.Timepicker.prototype = {
                init: function() {
                    var e = "input";
                    this._setTime(this.d.date), this._buildHTML(), navigator.userAgent.match(/trident/gi) && (e = "change"), this.d.$el.on("selectDate", this._onSelectDate.bind(this)), this.$ranges.on(e, this._onChangeRange.bind(this)), this.$ranges.on("mouseup", this._onMouseUpRange.bind(this)), this.$ranges.on("mousemove focus ", this._onMouseEnterRange.bind(this)), this.$ranges.on("mouseout blur", this._onMouseOutRange.bind(this))
                },
                _setTime: function(e) {
                    var t = n.getParsedDate(e);
                    this._handleDate(e), this.hours = t.hours < this.minHours ? this.minHours : t.hours, this.minutes = t.minutes < this.minMinutes ? this.minMinutes : t.minutes
                },
                _setMinTimeFromDate: function(e) {
                    this.minHours = e.getHours(), this.minMinutes = e.getMinutes(), this.d.lastSelectedDate && this.d.lastSelectedDate.getHours() > e.getHours() && (this.minMinutes = this.opts.minMinutes)
                },
                _setMaxTimeFromDate: function(e) {
                    this.maxHours = e.getHours(), this.maxMinutes = e.getMinutes(), this.d.lastSelectedDate && this.d.lastSelectedDate.getHours() < e.getHours() && (this.maxMinutes = this.opts.maxMinutes)
                },
                _setDefaultMinMaxTime: function() {
                    var e = this.opts;
                    this.minHours = e.minHours < 0 || e.minHours > 23 ? 0 : e.minHours, this.minMinutes = e.minMinutes < 0 || e.minMinutes > 59 ? 0 : e.minMinutes, this.maxHours = e.maxHours < 0 || e.maxHours > 23 ? 23 : e.maxHours, this.maxMinutes = e.maxMinutes < 0 || e.maxMinutes > 59 ? 59 : e.maxMinutes
                },
                _validateHoursMinutes: function(e) {
                    this.hours < this.minHours ? this.hours = this.minHours : this.hours > this.maxHours && (this.hours = this.maxHours), this.minutes < this.minMinutes ? this.minutes = this.minMinutes : this.minutes > this.maxMinutes && (this.minutes = this.maxMinutes)
                },
                _buildHTML: function() {
                    var e = n.getLeadingZeroNum,
                        i = {
                            hourMin: this.minHours,
                            hourMax: e(this.maxHours),
                            hourStep: this.opts.hoursStep,
                            hourValue: this.hours,
                            hourVisible: e(this.displayHours),
                            minMin: this.minMinutes,
                            minMax: e(this.maxMinutes),
                            minStep: this.opts.minutesStep,
                            minValue: e(this.minutes)
                        },
                        r = n.template('<div class="datepicker--time"><div class="datepicker--time-current">   <span class="datepicker--time-current-hours">#{hourVisible}</span>   <span class="datepicker--time-current-colon">:</span>   <span class="datepicker--time-current-minutes">#{minValue}</span></div><div class="datepicker--time-sliders">   <div class="datepicker--time-row">      <input type="range" name="hours" value="#{hourValue}" min="#{hourMin}" max="#{hourMax}" step="#{hourStep}"/>   </div>   <div class="datepicker--time-row">      <input type="range" name="minutes" value="#{minValue}" min="#{minMin}" max="#{minMax}" step="#{minStep}"/>   </div></div></div>', i);
                    this.$timepicker = t(r).appendTo(this.d.$datepicker), this.$ranges = t('[type="range"]', this.$timepicker), this.$hours = t('[name="hours"]', this.$timepicker), this.$minutes = t('[name="minutes"]', this.$timepicker), this.$hoursText = t(".datepicker--time-current-hours", this.$timepicker), this.$minutesText = t(".datepicker--time-current-minutes", this.$timepicker), this.d.ampm && (this.$ampm = t('<span class="datepicker--time-current-ampm">').appendTo(t(".datepicker--time-current", this.$timepicker)).html(this.dayPeriod), this.$timepicker.addClass("-am-pm-"))
                },
                _updateCurrentTime: function() {
                    var e = n.getLeadingZeroNum(this.displayHours),
                        t = n.getLeadingZeroNum(this.minutes);
                    this.$hoursText.html(e), this.$minutesText.html(t), this.d.ampm && this.$ampm.html(this.dayPeriod)
                },
                _updateRanges: function() {
                    this.$hours.attr({
                        min: this.minHours,
                        max: this.maxHours
                    }).val(this.hours), this.$minutes.attr({
                        min: this.minMinutes,
                        max: this.maxMinutes
                    }).val(this.minutes)
                },
                _handleDate: function(e) {
                    this._setDefaultMinMaxTime(), e && (n.isSame(e, this.d.opts.minDate) ? this._setMinTimeFromDate(this.d.opts.minDate) : n.isSame(e, this.d.opts.maxDate) && this._setMaxTimeFromDate(this.d.opts.maxDate)), this._validateHoursMinutes(e)
                },
                update: function() {
                    this._updateRanges(), this._updateCurrentTime()
                },
                _getValidHoursFromDate: function(e, t) {
                    var i = e,
                        r = e;
                    e instanceof Date && (i = n.getParsedDate(e), r = i.hours);
                    var o = t || this.d.ampm,
                        s = "am";
                    if (o) switch (!0) {
                        case 0 == r:
                            r = 12;
                            break;
                        case 12 == r:
                            s = "pm";
                            break;
                        case r > 11:
                            r -= 12, s = "pm"
                    }
                    return {
                        hours: r,
                        dayPeriod: s
                    }
                },
                set hours(e) {
                    this._hours = e;
                    var t = this._getValidHoursFromDate(e);
                    this.displayHours = t.hours, this.dayPeriod = t.dayPeriod
                },
                get hours() {
                    return this._hours
                },
                _onChangeRange: function(e) {
                    var n = t(e.target),
                        i = n.attr("name");
                    this.d.timepickerIsActive = !0, this[i] = n.val(), this._updateCurrentTime(), this.d._trigger("timeChange", [this.hours, this.minutes]), this._handleDate(this.d.lastSelectedDate), this.update()
                },
                _onSelectDate: function(e, t) {
                    this._handleDate(t), this.update()
                },
                _onMouseEnterRange: function(e) {
                    var n = t(e.target).attr("name");
                    t(".datepicker--time-current-" + n, this.$timepicker).addClass("-focus-")
                },
                _onMouseOutRange: function(e) {
                    var n = t(e.target).attr("name");
                    this.d.inFocus || t(".datepicker--time-current-" + n, this.$timepicker).removeClass("-focus-")
                },
                _onMouseUpRange: function(e) {
                    this.d.timepickerIsActive = !1
                }
            }
        }()
    }(window, jQuery),
    function(e) {
        e.fn.datepicker.language.en = {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            today: "Today",
            clear: "Clear",
            dateFormat: "mm/dd/yyyy",
            timeFormat: "hh:ii aa",
            firstDay: 0
        }
    }(jQuery);


! function(t, e, i) {
    ! function() {
        var s, a, n, h = "2.2.3",
            o = "datepicker",
            r = ".datepicker-here",
            c = !1,
            d = '<div class="datepicker"><i class="datepicker--pointer"></i><nav class="datepicker--nav"></nav><div class="datepicker--content"></div></div>',
            l = {
                classes: "",
                inline: !1,
                language: "ru",
                startDate: new Date,
                firstDay: "",
                weekends: [6, 0],
                dateFormat: "",
                altField: "",
                altFieldDateFormat: "@",
                toggleSelected: !0,
                keyboardNav: !0,
                position: "bottom left",
                offset: 12,
                view: "days",
                minView: "days",
                showOtherMonths: !0,
                selectOtherMonths: !0,
                moveToOtherMonthsOnSelect: !0,
                showOtherYears: !0,
                selectOtherYears: !0,
                moveToOtherYearsOnSelect: !0,
                minDate: "",
                maxDate: "",
                disableNavWhenOutOfRange: !0,
                multipleDates: !1,
                multipleDatesSeparator: ",",
                range: !1,
                todayButton: !1,
                clearButton: !1,
                showEvent: "focus",
                autoClose: !1,
                monthsField: "monthsShort",
                prevHtml: '<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>',
                nextHtml: '<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>',
                navTitles: {
                    days: "MM, <i>yyyy</i>",
                    months: "yyyy",
                    years: "yyyy1 - yyyy2"
                },
                timepicker: !1,
                onlyTimepicker: !1,
                dateTimeSeparator: " ",
                timeFormat: "",
                minHours: 0,
                maxHours: 24,
                minMinutes: 0,
                maxMinutes: 59,
                hoursStep: 1,
                minutesStep: 1,
                onSelect: "",
                onShow: "",
                onHide: "",
                onChangeMonth: "",
                onChangeYear: "",
                onChangeDecade: "",
                onChangeView: "",
                onRenderCell: ""
            },
            u = {
                ctrlRight: [17, 39],
                ctrlUp: [17, 38],
                ctrlLeft: [17, 37],
                ctrlDown: [17, 40],
                shiftRight: [16, 39],
                shiftUp: [16, 38],
                shiftLeft: [16, 37],
                shiftDown: [16, 40],
                altUp: [18, 38],
                altRight: [18, 39],
                altLeft: [18, 37],
                altDown: [18, 40],
                ctrlShiftUp: [16, 17, 38]
            },
            m = function(t, a) {
                this.el = t, this.$el = e(t), this.opts = e.extend(!0, {}, l, a, this.$el.data()), s == i && (s = e("body")), this.opts.startDate || (this.opts.startDate = new Date), "INPUT" == this.el.nodeName && (this.elIsInput = !0), this.opts.altField && (this.$altField = "string" == typeof this.opts.altField ? e(this.opts.altField) : this.opts.altField), this.inited = !1, this.visible = !1, this.silent = !1, this.currentDate = this.opts.startDate, this.currentView = this.opts.view, this._createShortCuts(), this.selectedDates = [], this.views = {}, this.keys = [], this.minRange = "", this.maxRange = "", this._prevOnSelectValue = "", this.init()
            };
        n = m, n.prototype = {
            VERSION: h,
            viewIndexes: ["days", "months", "years"],
            init: function() {
                c || this.opts.inline || !this.elIsInput || this._buildDatepickersContainer(), this._buildBaseHtml(), this._defineLocale(this.opts.language), this._syncWithMinMaxDates(), this.elIsInput && (this.opts.inline || (this._setPositionClasses(this.opts.position), this._bindEvents()), this.opts.keyboardNav && !this.opts.onlyTimepicker && this._bindKeyboardEvents(), this.$datepicker.on("mousedown", this._onMouseDownDatepicker.bind(this)), this.$datepicker.on("mouseup", this._onMouseUpDatepicker.bind(this))), this.opts.classes && this.$datepicker.addClass(this.opts.classes), this.opts.timepicker && (this.timepicker = new e.fn.datepicker.Timepicker(this, this.opts), this._bindTimepickerEvents()), this.opts.onlyTimepicker && this.$datepicker.addClass("-only-timepicker-"), this.views[this.currentView] = new e.fn.datepicker.Body(this, this.currentView, this.opts), this.views[this.currentView].show(), this.nav = new e.fn.datepicker.Navigation(this, this.opts), this.view = this.currentView, this.$el.on("clickCell.adp", this._onClickCell.bind(this)), this.$datepicker.on("mouseenter", ".datepicker--cell", this._onMouseEnterCell.bind(this)), this.$datepicker.on("mouseleave", ".datepicker--cell", this._onMouseLeaveCell.bind(this)), this.inited = !0
            },
            _createShortCuts: function() {
                this.minDate = this.opts.minDate ? this.opts.minDate : new Date(-86399999136e5), this.maxDate = this.opts.maxDate ? this.opts.maxDate : new Date(86399999136e5)
            },
            _bindEvents: function() {
                this.$el.on(this.opts.showEvent + ".adp", this._onShowEvent.bind(this)), this.$el.on("mouseup.adp", this._onMouseUpEl.bind(this)), this.$el.on("blur.adp", this._onBlur.bind(this)), this.$el.on("keyup.adp", this._onKeyUpGeneral.bind(this)), e(t).on("resize.adp", this._onResize.bind(this)), e("body").on("mouseup.adp", this._onMouseUpBody.bind(this))
            },
            _bindKeyboardEvents: function() {
                this.$el.on("keydown.adp", this._onKeyDown.bind(this)), this.$el.on("keyup.adp", this._onKeyUp.bind(this)), this.$el.on("hotKey.adp", this._onHotKey.bind(this))
            },
            _bindTimepickerEvents: function() {
                this.$el.on("timeChange.adp", this._onTimeChange.bind(this))
            },
            isWeekend: function(t) {
                return -1 !== this.opts.weekends.indexOf(t)
            },
            _defineLocale: function(t) {
                "string" == typeof t ? (this.loc = e.fn.datepicker.language[t], this.loc || (console.warn("Can't find language \"" + t + '" in Datepicker.language, will use "ru" instead'), this.loc = e.extend(!0, {}, e.fn.datepicker.language.ru)), this.loc = e.extend(!0, {}, e.fn.datepicker.language.ru, e.fn.datepicker.language[t])) : this.loc = e.extend(!0, {}, e.fn.datepicker.language.ru, t), this.opts.dateFormat && (this.loc.dateFormat = this.opts.dateFormat), this.opts.timeFormat && (this.loc.timeFormat = this.opts.timeFormat), "" !== this.opts.firstDay && (this.loc.firstDay = this.opts.firstDay), this.opts.timepicker && (this.loc.dateFormat = [this.loc.dateFormat, this.loc.timeFormat].join(this.opts.dateTimeSeparator)), this.opts.onlyTimepicker && (this.loc.dateFormat = this.loc.timeFormat);
                var i = this._getWordBoundaryRegExp;
                (this.loc.timeFormat.match(i("aa")) || this.loc.timeFormat.match(i("AA"))) && (this.ampm = !0)
            },
            _buildDatepickersContainer: function() {
                c = !0, s.append('<div class="datepickers-container" id="datepickers-container"></div>'), a = e("#datepickers-container")
            },
            _buildBaseHtml: function() {
                var t, i = e('<div class="datepicker-inline">');
                t = "INPUT" == this.el.nodeName ? this.opts.inline ? i.insertAfter(this.$el) : a : i.appendTo(this.$el), this.$datepicker = e(d).appendTo(t), this.$content = e(".datepicker--content", this.$datepicker), this.$nav = e(".datepicker--nav", this.$datepicker)
            },
            _triggerOnChange: function() {
                if (!this.selectedDates.length) {
                    if ("" === this._prevOnSelectValue) return;
                    return this._prevOnSelectValue = "", this.opts.onSelect("", "", this)
                }
                var t, e = this.selectedDates,
                    i = n.getParsedDate(e[0]),
                    s = this,
                    a = new Date(i.year, i.month, i.date, i.hours, i.minutes);
                t = e.map(function(t) {
                    return s.formatDate(s.loc.dateFormat, t)
                }).join(this.opts.multipleDatesSeparator), (this.opts.multipleDates || this.opts.range) && (a = e.map(function(t) {
                    var e = n.getParsedDate(t);
                    return new Date(e.year, e.month, e.date, e.hours, e.minutes)
                })), this._prevOnSelectValue = t, this.opts.onSelect(t, a, this)
            },
            next: function() {
                var t = this.parsedDate,
                    e = this.opts;
                switch (this.view) {
                    case "days":
                        this.date = new Date(t.year, t.month + 1, 1), e.onChangeMonth && e.onChangeMonth(this.parsedDate.month, this.parsedDate.year);
                        break;
                    case "months":
                        this.date = new Date(t.year + 1, t.month, 1), e.onChangeYear && e.onChangeYear(this.parsedDate.year);
                        break;
                    case "years":
                        this.date = new Date(t.year + 10, 0, 1), e.onChangeDecade && e.onChangeDecade(this.curDecade)
                }
            },
            prev: function() {
                var t = this.parsedDate,
                    e = this.opts;
                switch (this.view) {
                    case "days":
                        this.date = new Date(t.year, t.month - 1, 1), e.onChangeMonth && e.onChangeMonth(this.parsedDate.month, this.parsedDate.year);
                        break;
                    case "months":
                        this.date = new Date(t.year - 1, t.month, 1), e.onChangeYear && e.onChangeYear(this.parsedDate.year);
                        break;
                    case "years":
                        this.date = new Date(t.year - 10, 0, 1), e.onChangeDecade && e.onChangeDecade(this.curDecade)
                }
            },
            formatDate: function(t, e) {
                e = e || this.date;
                var i, s = t,
                    a = this._getWordBoundaryRegExp,
                    h = this.loc,
                    o = n.getLeadingZeroNum,
                    r = n.getDecade(e),
                    c = n.getParsedDate(e),
                    d = c.fullHours,
                    l = c.hours,
                    u = t.match(a("aa")) || t.match(a("AA")),
                    m = "am",
                    p = this._replacer;
                switch (this.opts.timepicker && this.timepicker && u && (i = this.timepicker._getValidHoursFromDate(e, u), d = o(i.hours), l = i.hours, m = i.dayPeriod), !0) {
                    case /@/.test(s):
                        s = s.replace(/@/, e.getTime());
                    case /aa/.test(s):
                        s = p(s, a("aa"), m);
                    case /AA/.test(s):
                        s = p(s, a("AA"), m.toUpperCase());
                    case /dd/.test(s):
                        s = p(s, a("dd"), c.fullDate);
                    case /d/.test(s):
                        s = p(s, a("d"), c.date);
                    case /DD/.test(s):
                        s = p(s, a("DD"), h.days[c.day]);
                    case /D/.test(s):
                        s = p(s, a("D"), h.daysShort[c.day]);
                    case /mm/.test(s):
                        s = p(s, a("mm"), c.fullMonth);
                    case /m/.test(s):
                        s = p(s, a("m"), c.month + 1);
                    case /MM/.test(s):
                        s = p(s, a("MM"), this.loc.months[c.month]);
                    case /M/.test(s):
                        s = p(s, a("M"), h.monthsShort[c.month]);
                    case /ii/.test(s):
                        s = p(s, a("ii"), c.fullMinutes);
                    case /i/.test(s):
                        s = p(s, a("i"), c.minutes);
                    case /hh/.test(s):
                        s = p(s, a("hh"), d);
                    case /h/.test(s):
                        s = p(s, a("h"), l);
                    case /yyyy/.test(s):
                        s = p(s, a("yyyy"), c.year);
                    case /yyyy1/.test(s):
                        s = p(s, a("yyyy1"), r[0]);
                    case /yyyy2/.test(s):
                        s = p(s, a("yyyy2"), r[1]);
                    case /yy/.test(s):
                        s = p(s, a("yy"), c.year.toString().slice(-2))
                }
                return s
            },
            _replacer: function(t, e, i) {
                return t.replace(e, function(t, e, s, a) {
                    return e + i + a
                })
            },
            _getWordBoundaryRegExp: function(t) {
                var e = "\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;";
                return new RegExp("(^|>|" + e + ")(" + t + ")($|<|" + e + ")", "g")
            },
            selectDate: function(t) {
                var e = this,
                    i = e.opts,
                    s = e.parsedDate,
                    a = e.selectedDates,
                    h = a.length,
                    o = "";
                if (Array.isArray(t)) return void t.forEach(function(t) {
                    e.selectDate(t)
                });
                if (t instanceof Date) {
                    if (this.lastSelectedDate = t, this.timepicker && this.timepicker._setTime(t), e._trigger("selectDate", t), this.timepicker && (t.setHours(this.timepicker.hours), t.setMinutes(this.timepicker.minutes)), "days" == e.view && t.getMonth() != s.month && i.moveToOtherMonthsOnSelect && (o = new Date(t.getFullYear(), t.getMonth(), 1)), "years" == e.view && t.getFullYear() != s.year && i.moveToOtherYearsOnSelect && (o = new Date(t.getFullYear(), 0, 1)), o && (e.silent = !0, e.date = o, e.silent = !1, e.nav._render()), i.multipleDates && !i.range) {
                        if (h === i.multipleDates) return;
                        e._isSelected(t) || e.selectedDates.push(t)
                    } else i.range ? 2 == h ? (e.selectedDates = [t], e.minRange = t, e.maxRange = "") : 1 == h ? (e.selectedDates.push(t), e.maxRange ? e.minRange = t : e.maxRange = t, n.bigger(e.maxRange, e.minRange) && (e.maxRange = e.minRange, e.minRange = t), e.selectedDates = [e.minRange, e.maxRange]) : (e.selectedDates = [t], e.minRange = t) : e.selectedDates = [t];
                    e._setInputValue(), i.onSelect && e._triggerOnChange(), i.autoClose && !this.timepickerIsActive && (i.multipleDates || i.range ? i.range && 2 == e.selectedDates.length && e.hide() : e.hide()), e.views[this.currentView]._render()
                }
            },
            removeDate: function(t) {
                var e = this.selectedDates,
                    i = this;
                if (t instanceof Date) return e.some(function(s, a) {
                    return n.isSame(s, t) ? (e.splice(a, 1), i.selectedDates.length ? i.lastSelectedDate = i.selectedDates[i.selectedDates.length - 1] : (i.minRange = "", i.maxRange = "", i.lastSelectedDate = ""), i.views[i.currentView]._render(), i._setInputValue(), i.opts.onSelect && i._triggerOnChange(), !0) : void 0
                })
            },
            today: function() {
                this.silent = !0, this.view = this.opts.minView, this.silent = !1, this.date = new Date, this.opts.todayButton instanceof Date && this.selectDate(this.opts.todayButton)
            },
            clear: function() {
                this.selectedDates = [], this.minRange = "", this.maxRange = "", this.views[this.currentView]._render(), this._setInputValue(), this.opts.onSelect && this._triggerOnChange()
            },
            update: function(t, i) {
                var s = arguments.length,
                    a = this.lastSelectedDate;
                return 2 == s ? this.opts[t] = i : 1 == s && "object" == typeof t && (this.opts = e.extend(!0, this.opts, t)), this._createShortCuts(), this._syncWithMinMaxDates(), this._defineLocale(this.opts.language), this.nav._addButtonsIfNeed(), this.opts.onlyTimepicker || this.nav._render(), this.views[this.currentView]._render(), this.elIsInput && !this.opts.inline && (this._setPositionClasses(this.opts.position), this.visible && this.setPosition(this.opts.position)), this.opts.classes && this.$datepicker.addClass(this.opts.classes), this.opts.onlyTimepicker && this.$datepicker.addClass("-only-timepicker-"), this.opts.timepicker && (a && this.timepicker._handleDate(a), this.timepicker._updateRanges(), this.timepicker._updateCurrentTime(), a && (a.setHours(this.timepicker.hours), a.setMinutes(this.timepicker.minutes))), this._setInputValue(), this
            },
            _syncWithMinMaxDates: function() {
                var t = this.date.getTime();
                this.silent = !0, this.minTime > t && (this.date = this.minDate), this.maxTime < t && (this.date = this.maxDate), this.silent = !1
            },
            _isSelected: function(t, e) {
                var i = !1;
                return this.selectedDates.some(function(s) {
                    return n.isSame(s, t, e) ? (i = s, !0) : void 0
                }), i
            },
            _setInputValue: function() {
                var t, e = this,
                    i = e.opts,
                    s = e.loc.dateFormat,
                    a = i.altFieldDateFormat,
                    n = e.selectedDates.map(function(t) {
                        return e.formatDate(s, t)
                    });
                i.altField && e.$altField.length && (t = this.selectedDates.map(function(t) {
                    return e.formatDate(a, t)
                }), t = t.join(this.opts.multipleDatesSeparator), this.$altField.val(t)), n = n.join(this.opts.multipleDatesSeparator), this.$el.val(n)
            },
            _isInRange: function(t, e) {
                var i = t.getTime(),
                    s = n.getParsedDate(t),
                    a = n.getParsedDate(this.minDate),
                    h = n.getParsedDate(this.maxDate),
                    o = new Date(s.year, s.month, a.date).getTime(),
                    r = new Date(s.year, s.month, h.date).getTime(),
                    c = {
                        day: i >= this.minTime && i <= this.maxTime,
                        month: o >= this.minTime && r <= this.maxTime,
                        year: s.year >= a.year && s.year <= h.year
                    };
                return e ? c[e] : c.day
            },
            _getDimensions: function(t) {
                var e = t.offset();
                return {
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    left: e.left,
                    top: e.top
                }
            },
            _getDateFromCell: function(t) {
                var e = this.parsedDate,
                    s = t.data("year") || e.year,
                    a = t.data("month") == i ? e.month : t.data("month"),
                    n = t.data("date") || 1;
                return new Date(s, a, n)
            },
            _setPositionClasses: function(t) {
                t = t.split(" ");
                var e = t[0],
                    i = t[1],
                    s = "datepicker -" + e + "-" + i + "- -from-" + e + "-";
                this.visible && (s += " active"), this.$datepicker.removeAttr("class").addClass(s)
            },
            setPosition: function(t) {
                t = t || this.opts.position;
                var e, i, s = this._getDimensions(this.$el),
                    a = this._getDimensions(this.$datepicker),
                    n = t.split(" "),
                    h = this.opts.offset,
                    o = n[0],
                    r = n[1];
                switch (o) {
                    case "top":
                        e = s.top - a.height - h;
                        break;
                    case "right":
                        i = s.left + s.width + h;
                        break;
                    case "bottom":
                        e = s.top + s.height + h;
                        break;
                    case "left":
                        i = s.left - a.width - h
                }
                switch (r) {
                    case "top":
                        e = s.top;
                        break;
                    case "right":
                        i = s.left + s.width - a.width;
                        break;
                    case "bottom":
                        e = s.top + s.height - a.height;
                        break;
                    case "left":
                        i = s.left;
                        break;
                    case "center":
                        /left|right/.test(o) ? e = s.top + s.height / 2 - a.height / 2 : i = s.left + s.width / 2 - a.width / 2
                }
                this.$datepicker.css({
                    left: i,
                    top: e
                })
            },
            show: function() {
                var t = this.opts.onShow;
                this.setPosition(this.opts.position), this.$datepicker.addClass("active"), this.visible = !0, t && this._bindVisionEvents(t)
            },
            hide: function() {
                var t = this.opts.onHide;
                this.$datepicker.removeClass("active").css({
                    left: "-100000px"
                }), this.focused = "", this.keys = [], this.inFocus = !1, this.visible = !1, this.$el.blur(), t && this._bindVisionEvents(t)
            },
            down: function(t) {
                this._changeView(t, "down")
            },
            up: function(t) {
                this._changeView(t, "up")
            },
            _bindVisionEvents: function(t) {
                this.$datepicker.off("transitionend.dp"), t(this, !1), this.$datepicker.one("transitionend.dp", t.bind(this, this, !0))
            },
            _changeView: function(t, e) {
                t = t || this.focused || this.date;
                var i = "up" == e ? this.viewIndex + 1 : this.viewIndex - 1;
                i > 2 && (i = 2), 0 > i && (i = 0), this.silent = !0, this.date = new Date(t.getFullYear(), t.getMonth(), 1), this.silent = !1, this.view = this.viewIndexes[i]
            },
            _handleHotKey: function(t) {
                var e, i, s, a = n.getParsedDate(this._getFocusedDate()),
                    h = this.opts,
                    o = !1,
                    r = !1,
                    c = !1,
                    d = a.year,
                    l = a.month,
                    u = a.date;
                switch (t) {
                    case "ctrlRight":
                    case "ctrlUp":
                        l += 1, o = !0;
                        break;
                    case "ctrlLeft":
                    case "ctrlDown":
                        l -= 1, o = !0;
                        break;
                    case "shiftRight":
                    case "shiftUp":
                        r = !0, d += 1;
                        break;
                    case "shiftLeft":
                    case "shiftDown":
                        r = !0, d -= 1;
                        break;
                    case "altRight":
                    case "altUp":
                        c = !0, d += 10;
                        break;
                    case "altLeft":
                    case "altDown":
                        c = !0, d -= 10;
                        break;
                    case "ctrlShiftUp":
                        this.up()
                }
                s = n.getDaysCount(new Date(d, l)), i = new Date(d, l, u), u > s && (u = s), i.getTime() < this.minTime ? i = this.minDate : i.getTime() > this.maxTime && (i = this.maxDate), this.focused = i, e = n.getParsedDate(i), o && h.onChangeMonth && h.onChangeMonth(e.month, e.year), r && h.onChangeYear && h.onChangeYear(e.year), c && h.onChangeDecade && h.onChangeDecade(this.curDecade)
            },
            _registerKey: function(t) {
                var e = this.keys.some(function(e) {
                    return e == t
                });
                e || this.keys.push(t)
            },
            _unRegisterKey: function(t) {
                var e = this.keys.indexOf(t);
                this.keys.splice(e, 1)
            },
            _isHotKeyPressed: function() {
                var t, e = !1,
                    i = this,
                    s = this.keys.sort();
                for (var a in u) t = u[a], s.length == t.length && t.every(function(t, e) {
                    return t == s[e]
                }) && (i._trigger("hotKey", a), e = !0);
                return e
            },
            _trigger: function(t, e) {
                this.$el.trigger(t, e)
            },
            _focusNextCell: function(t, e) {
                e = e || this.cellType;
                var i = n.getParsedDate(this._getFocusedDate()),
                    s = i.year,
                    a = i.month,
                    h = i.date;
                if (!this._isHotKeyPressed()) {
                    switch (t) {
                        case 37:
                            "day" == e ? h -= 1 : "", "month" == e ? a -= 1 : "", "year" == e ? s -= 1 : "";
                            break;
                        case 38:
                            "day" == e ? h -= 7 : "", "month" == e ? a -= 3 : "", "year" == e ? s -= 4 : "";
                            break;
                        case 39:
                            "day" == e ? h += 1 : "", "month" == e ? a += 1 : "", "year" == e ? s += 1 : "";
                            break;
                        case 40:
                            "day" == e ? h += 7 : "", "month" == e ? a += 3 : "", "year" == e ? s += 4 : ""
                    }
                    var o = new Date(s, a, h);
                    o.getTime() < this.minTime ? o = this.minDate : o.getTime() > this.maxTime && (o = this.maxDate), this.focused = o
                }
            },
            _getFocusedDate: function() {
                var t = this.focused || this.selectedDates[this.selectedDates.length - 1],
                    e = this.parsedDate;
                if (!t) switch (this.view) {
                    case "days":
                        t = new Date(e.year, e.month, (new Date).getDate());
                        break;
                    case "months":
                        t = new Date(e.year, e.month, 1);
                        break;
                    case "years":
                        t = new Date(e.year, 0, 1)
                }
                return t
            },
            _getCell: function(t, i) {
                i = i || this.cellType;
                var s, a = n.getParsedDate(t),
                    h = '.datepicker--cell[data-year="' + a.year + '"]';
                switch (i) {
                    case "month":
                        h = '[data-month="' + a.month + '"]';
                        break;
                    case "day":
                        h += '[data-month="' + a.month + '"][data-date="' + a.date + '"]'
                }
                return s = this.views[this.currentView].$el.find(h), s.length ? s : e("")
            },
            destroy: function() {
                var t = this;
                t.$el.off(".adp").data("datepicker", ""), t.selectedDates = [], t.focused = "", t.views = {}, t.keys = [], t.minRange = "", t.maxRange = "", t.opts.inline || !t.elIsInput ? t.$datepicker.closest(".datepicker-inline").remove() : t.$datepicker.remove()
            },
            _handleAlreadySelectedDates: function(t, e) {
                this.opts.range ? this.opts.toggleSelected ? this.removeDate(e) : 2 != this.selectedDates.length && this._trigger("clickCell", e) : this.opts.toggleSelected && this.removeDate(e), this.opts.toggleSelected || (this.lastSelectedDate = t, this.opts.timepicker && (this.timepicker._setTime(t), this.timepicker.update()))
            },
            _onShowEvent: function(t) {
                this.visible || this.show()
            },
            _onBlur: function() {
                !this.inFocus && this.visible && this.hide()
            },
            _onMouseDownDatepicker: function(t) {
                this.inFocus = !0
            },
            _onMouseUpDatepicker: function(t) {
                this.inFocus = !1, t.originalEvent.inFocus = !0, t.originalEvent.timepickerFocus || this.$el.focus()
            },
            _onKeyUpGeneral: function(t) {
                var e = this.$el.val();
                e || this.clear()
            },
            _onResize: function() {
                this.visible && this.setPosition()
            },
            _onMouseUpBody: function(t) {
                t.originalEvent.inFocus || this.visible && !this.inFocus && this.hide()
            },
            _onMouseUpEl: function(t) {
                t.originalEvent.inFocus = !0, setTimeout(this._onKeyUpGeneral.bind(this), 4)
            },
            _onKeyDown: function(t) {
                var e = t.which;
                if (this._registerKey(e), e >= 37 && 40 >= e && (t.preventDefault(), this._focusNextCell(e)), 13 == e && this.focused) {
                    if (this._getCell(this.focused).hasClass("-disabled-")) return;
                    if (this.view != this.opts.minView) this.down();
                    else {
                        var i = this._isSelected(this.focused, this.cellType);
                        if (!i) return this.timepicker && (this.focused.setHours(this.timepicker.hours), this.focused.setMinutes(this.timepicker.minutes)), void this.selectDate(this.focused);
                        this._handleAlreadySelectedDates(i, this.focused)
                    }
                }
                27 == e && this.hide()
            },
            _onKeyUp: function(t) {
                var e = t.which;
                this._unRegisterKey(e)
            },
            _onHotKey: function(t, e) {
                this._handleHotKey(e)
            },
            _onMouseEnterCell: function(t) {
                var i = e(t.target).closest(".datepicker--cell"),
                    s = this._getDateFromCell(i);
                this.silent = !0, this.focused && (this.focused = ""), i.addClass("-focus-"), this.focused = s, this.silent = !1, this.opts.range && 1 == this.selectedDates.length && (this.minRange = this.selectedDates[0], this.maxRange = "", n.less(this.minRange, this.focused) && (this.maxRange = this.minRange, this.minRange = ""), this.views[this.currentView]._update())
            },
            _onMouseLeaveCell: function(t) {
                var i = e(t.target).closest(".datepicker--cell");
                i.removeClass("-focus-"), this.silent = !0, this.focused = "", this.silent = !1
            },
            _onTimeChange: function(t, e, i) {
                var s = new Date,
                    a = this.selectedDates,
                    n = !1;
                a.length && (n = !0, s = this.lastSelectedDate), s.setHours(e), s.setMinutes(i), n || this._getCell(s).hasClass("-disabled-") ? (this._setInputValue(), this.opts.onSelect && this._triggerOnChange()) : this.selectDate(s)
            },
            _onClickCell: function(t, e) {
                this.timepicker && (e.setHours(this.timepicker.hours), e.setMinutes(this.timepicker.minutes)), this.selectDate(e)
            },
            set focused(t) {
                if (!t && this.focused) {
                    var e = this._getCell(this.focused);
                    e.length && e.removeClass("-focus-")
                }
                this._focused = t, this.opts.range && 1 == this.selectedDates.length && (this.minRange = this.selectedDates[0], this.maxRange = "", n.less(this.minRange, this._focused) && (this.maxRange = this.minRange, this.minRange = "")), this.silent || (this.date = t)
            },
            get focused() {
                return this._focused
            },
            get parsedDate() {
                return n.getParsedDate(this.date)
            },
            set date(t) {
                return t instanceof Date ? (this.currentDate = t, this.inited && !this.silent && (this.views[this.view]._render(), this.nav._render(), this.visible && this.elIsInput && this.setPosition()), t) : void 0
            },
            get date() {
                return this.currentDate
            },
            set view(t) {
                return this.viewIndex = this.viewIndexes.indexOf(t), this.viewIndex < 0 ? void 0 : (this.prevView = this.currentView, this.currentView = t, this.inited && (this.views[t] ? this.views[t]._render() : this.views[t] = new e.fn.datepicker.Body(this, t, this.opts), this.views[this.prevView].hide(), this.views[t].show(), this.nav._render(), this.opts.onChangeView && this.opts.onChangeView(t), this.elIsInput && this.visible && this.setPosition()), t)
            },
            get view() {
                return this.currentView
            },
            get cellType() {
                return this.view.substring(0, this.view.length - 1)
            },
            get minTime() {
                var t = n.getParsedDate(this.minDate);
                return new Date(t.year, t.month, t.date).getTime()
            },
            get maxTime() {
                var t = n.getParsedDate(this.maxDate);
                return new Date(t.year, t.month, t.date).getTime()
            },
            get curDecade() {
                return n.getDecade(this.date)
            }
        }, n.getDaysCount = function(t) {
            return new Date(t.getFullYear(), t.getMonth() + 1, 0).getDate()
        }, n.getParsedDate = function(t) {
            return {
                year: t.getFullYear(),
                month: t.getMonth(),
                fullMonth: t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1,
                date: t.getDate(),
                fullDate: t.getDate() < 10 ? "0" + t.getDate() : t.getDate(),
                day: t.getDay(),
                hours: t.getHours(),
                fullHours: t.getHours() < 10 ? "0" + t.getHours() : t.getHours(),
                minutes: t.getMinutes(),
                fullMinutes: t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes()
            }
        }, n.getDecade = function(t) {
            var e = 10 * Math.floor(t.getFullYear() / 10);
            return [e, e + 9]
        }, n.template = function(t, e) {
            return t.replace(/#\{([\w]+)\}/g, function(t, i) {
                return e[i] || 0 === e[i] ? e[i] : void 0
            })
        }, n.isSame = function(t, e, i) {
            if (!t || !e) return !1;
            var s = n.getParsedDate(t),
                a = n.getParsedDate(e),
                h = i ? i : "day",
                o = {
                    day: s.date == a.date && s.month == a.month && s.year == a.year,
                    month: s.month == a.month && s.year == a.year,
                    year: s.year == a.year
                };
            return o[h]
        }, n.less = function(t, e, i) {
            return t && e ? e.getTime() < t.getTime() : !1
        }, n.bigger = function(t, e, i) {
            return t && e ? e.getTime() > t.getTime() : !1
        }, n.getLeadingZeroNum = function(t) {
            return parseInt(t) < 10 ? "0" + t : t
        }, n.resetTime = function(t) {
            return "object" == typeof t ? (t = n.getParsedDate(t), new Date(t.year, t.month, t.date)) : void 0
        }, e.fn.datepicker = function(t) {
            return this.each(function() {
                if (e.data(this, o)) {
                    var i = e.data(this, o);
                    i.opts = e.extend(!0, i.opts, t), i.update()
                } else e.data(this, o, new m(this, t))
            })
        }, e.fn.datepicker.Constructor = m, e.fn.datepicker.language = {
            ru: {
                days: ["Ð’Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ", "ÐŸÐ¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº", "Ð’Ñ‚Ð¾Ñ€Ð½Ð¸Ðº", "Ð¡Ñ€ÐµÐ´Ð°", "Ð§ÐµÑ‚Ð²ÐµÑ€Ð³", "ÐŸÑÑ‚Ð½Ð¸Ñ†Ð°", "Ð¡ÑƒÐ±Ð±Ð¾Ñ‚Ð°"],
                daysShort: ["Ð’Ð¾Ñ", "ÐŸÐ¾Ð½", "Ð’Ñ‚Ð¾", "Ð¡Ñ€Ðµ", "Ð§ÐµÑ‚", "ÐŸÑÑ‚", "Ð¡ÑƒÐ±"],
                daysMin: ["Ð’Ñ", "ÐŸÐ½", "Ð’Ñ‚", "Ð¡Ñ€", "Ð§Ñ‚", "ÐŸÑ‚", "Ð¡Ð±"],
                months: ["Ð¯Ð½Ð²Ð°Ñ€ÑŒ", "Ð¤ÐµÐ²Ñ€Ð°Ð»ÑŒ", "ÐœÐ°Ñ€Ñ‚", "ÐÐ¿Ñ€ÐµÐ»ÑŒ", "ÐœÐ°Ð¹", "Ð˜ÑŽÐ½ÑŒ", "Ð˜ÑŽÐ»ÑŒ", "ÐÐ²Ð³ÑƒÑÑ‚", "Ð¡ÐµÐ½Ñ‚ÑÐ±Ñ€ÑŒ", "ÐžÐºÑ‚ÑÐ±Ñ€ÑŒ", "ÐÐ¾ÑÐ±Ñ€ÑŒ", "Ð”ÐµÐºÐ°Ð±Ñ€ÑŒ"],
                monthsShort: ["Ð¯Ð½Ð²", "Ð¤ÐµÐ²", "ÐœÐ°Ñ€", "ÐÐ¿Ñ€", "ÐœÐ°Ð¹", "Ð˜ÑŽÐ½", "Ð˜ÑŽÐ»", "ÐÐ²Ð³", "Ð¡ÐµÐ½", "ÐžÐºÑ‚", "ÐÐ¾Ñ", "Ð”ÐµÐº"],
                today: "Ð¡ÐµÐ³Ð¾Ð´Ð½Ñ",
                clear: "ÐžÑ‡Ð¸ÑÑ‚Ð¸Ñ‚ÑŒ",
                dateFormat: "dd.mm.yyyy",
                timeFormat: "hh:ii",
                firstDay: 1
            }
        }, e(function() {
            e(r).datepicker()
        })
    }(),
    function() {
        var t = {
                days: '<div class="datepicker--days datepicker--body"><div class="datepicker--days-names"></div><div class="datepicker--cells datepicker--cells-days"></div></div>',
                months: '<div class="datepicker--months datepicker--body"><div class="datepicker--cells datepicker--cells-months"></div></div>',
                years: '<div class="datepicker--years datepicker--body"><div class="datepicker--cells datepicker--cells-years"></div></div>'
            },
            s = e.fn.datepicker,
            a = s.Constructor;
        s.Body = function(t, i, s) {
            this.d = t, this.type = i, this.opts = s, this.$el = e(""), this.opts.onlyTimepicker || this.init()
        }, s.Body.prototype = {
            init: function() {
                this._buildBaseHtml(), this._render(), this._bindEvents()
            },
            _bindEvents: function() {
                this.$el.on("click", ".datepicker--cell", e.proxy(this._onClickCell, this))
            },
            _buildBaseHtml: function() {
                this.$el = e(t[this.type]).appendTo(this.d.$content), this.$names = e(".datepicker--days-names", this.$el), this.$cells = e(".datepicker--cells", this.$el)
            },
            _getDayNamesHtml: function(t, e, s, a) {
                return e = e != i ? e : t, s = s ? s : "", a = a != i ? a : 0, a > 7 ? s : 7 == e ? this._getDayNamesHtml(t, 0, s, ++a) : (s += '<div class="datepicker--day-name' + (this.d.isWeekend(e) ? " -weekend-" : "") + '">' + this.d.loc.daysMin[e] + "</div>", this._getDayNamesHtml(t, ++e, s, ++a))
            },
            _getCellContents: function(t, e) {
                var i = "datepicker--cell datepicker--cell-" + e,
                    s = new Date,
                    n = this.d,
                    h = a.resetTime(n.minRange),
                    o = a.resetTime(n.maxRange),
                    r = n.opts,
                    c = a.getParsedDate(t),
                    d = {},
                    l = c.date;
                switch (e) {
                    case "day":
                        n.isWeekend(c.day) && (i += " -weekend-"), c.month != this.d.parsedDate.month && (i += " -other-month-", r.selectOtherMonths || (i += " -disabled-"), r.showOtherMonths || (l = ""));
                        break;
                    case "month":
                        l = n.loc[n.opts.monthsField][c.month];
                        break;
                    case "year":
                        var u = n.curDecade;
                        l = c.year, (c.year < u[0] || c.year > u[1]) && (i += " -other-decade-", r.selectOtherYears || (i += " -disabled-"), r.showOtherYears || (l = ""))
                }
                return r.onRenderCell && (d = r.onRenderCell(t, e) || {}, l = d.html ? d.html : l, i += d.classes ? " " + d.classes : ""), r.range && (a.isSame(h, t, e) && (i += " -range-from-"), a.isSame(o, t, e) && (i += " -range-to-"), 1 == n.selectedDates.length && n.focused ? ((a.bigger(h, t) && a.less(n.focused, t) || a.less(o, t) && a.bigger(n.focused, t)) && (i += " -in-range-"), a.less(o, t) && a.isSame(n.focused, t) && (i += " -range-from-"), a.bigger(h, t) && a.isSame(n.focused, t) && (i += " -range-to-")) : 2 == n.selectedDates.length && a.bigger(h, t) && a.less(o, t) && (i += " -in-range-")), a.isSame(s, t, e) && (i += " -current-"), n.focused && a.isSame(t, n.focused, e) && (i += " -focus-"), n._isSelected(t, e) && (i += " -selected-"), (!n._isInRange(t, e) || d.disabled) && (i += " -disabled-"), {
                    html: l,
                    classes: i
                }
            },
            _getDaysHtml: function(t) {
                var e = a.getDaysCount(t),
                    i = new Date(t.getFullYear(), t.getMonth(), 1).getDay(),
                    s = new Date(t.getFullYear(), t.getMonth(), e).getDay(),
                    n = i - this.d.loc.firstDay,
                    h = 6 - s + this.d.loc.firstDay;
                n = 0 > n ? n + 7 : n, h = h > 6 ? h - 7 : h;
                for (var o, r, c = -n + 1, d = "", l = c, u = e + h; u >= l; l++) r = t.getFullYear(), o = t.getMonth(), d += this._getDayHtml(new Date(r, o, l));
                return d
            },
            _getDayHtml: function(t) {
                var e = this._getCellContents(t, "day");
                return '<div class="' + e.classes + '" data-date="' + t.getDate() + '" data-month="' + t.getMonth() + '" data-year="' + t.getFullYear() + '">' + e.html + "</div>"
            },
            _getMonthsHtml: function(t) {
                for (var e = "", i = a.getParsedDate(t), s = 0; 12 > s;) e += this._getMonthHtml(new Date(i.year, s)), s++;
                return e
            },
            _getMonthHtml: function(t) {
                var e = this._getCellContents(t, "month");
                return '<div class="' + e.classes + '" data-month="' + t.getMonth() + '">' + e.html + "</div>"
            },
            _getYearsHtml: function(t) {
                var e = (a.getParsedDate(t), a.getDecade(t)),
                    i = e[0] - 1,
                    s = "",
                    n = i;
                for (n; n <= e[1] + 1; n++) s += this._getYearHtml(new Date(n, 0));
                return s
            },
            _getYearHtml: function(t) {
                var e = this._getCellContents(t, "year");
                return '<div class="' + e.classes + '" data-year="' + t.getFullYear() + '">' + e.html + "</div>"
            },
            _renderTypes: {
                days: function() {
                    var t = this._getDayNamesHtml(this.d.loc.firstDay),
                        e = this._getDaysHtml(this.d.currentDate);
                    this.$cells.html(e), this.$names.html(t)
                },
                months: function() {
                    var t = this._getMonthsHtml(this.d.currentDate);
                    this.$cells.html(t)
                },
                years: function() {
                    var t = this._getYearsHtml(this.d.currentDate);
                    this.$cells.html(t)
                }
            },
            _render: function() {
                this.opts.onlyTimepicker || this._renderTypes[this.type].bind(this)()
            },
            _update: function() {
                var t, i, s, a = e(".datepicker--cell", this.$cells),
                    n = this;
                a.each(function(a, h) {
                    i = e(this), s = n.d._getDateFromCell(e(this)), t = n._getCellContents(s, n.d.cellType), i.attr("class", t.classes)
                })
            },
            show: function() {
                this.opts.onlyTimepicker || (this.$el.addClass("active"), this.acitve = !0)
            },
            hide: function() {
                this.$el.removeClass("active"), this.active = !1
            },
            _handleClick: function(t) {
                var e = t.data("date") || 1,
                    i = t.data("month") || 0,
                    s = t.data("year") || this.d.parsedDate.year,
                    a = this.d;
                if (a.view != this.opts.minView) return void a.down(new Date(s, i, e));
                var n = new Date(s, i, e),
                    h = this.d._isSelected(n, this.d.cellType);
                return h ? void a._handleAlreadySelectedDates.bind(a, h, n)() : void a._trigger("clickCell", n)
            },
            _onClickCell: function(t) {
                var i = e(t.target).closest(".datepicker--cell");
                i.hasClass("-disabled-") || this._handleClick.bind(this)(i)
            }
        }
    }(),
    function() {
        var t = '<div class="datepicker--nav-action" data-action="prev">#{prevHtml}</div><div class="datepicker--nav-title">#{title}</div><div class="datepicker--nav-action" data-action="next">#{nextHtml}</div>',
            i = '<div class="datepicker--buttons"></div>',
            s = '<span class="datepicker--button" data-action="#{action}">#{label}</span>',
            a = e.fn.datepicker,
            n = a.Constructor;
        a.Navigation = function(t, e) {
            this.d = t, this.opts = e, this.$buttonsContainer = "", this.init()
        }, a.Navigation.prototype = {
            init: function() {
                this._buildBaseHtml(), this._bindEvents()
            },
            _bindEvents: function() {
                this.d.$nav.on("click", ".datepicker--nav-action", e.proxy(this._onClickNavButton, this)), this.d.$nav.on("click", ".datepicker--nav-title", e.proxy(this._onClickNavTitle, this)), this.d.$datepicker.on("click", ".datepicker--button", e.proxy(this._onClickNavButton, this))
            },
            _buildBaseHtml: function() {
                this.opts.onlyTimepicker || this._render(), this._addButtonsIfNeed()
            },
            _addButtonsIfNeed: function() {
                this.opts.todayButton && this._addButton("today"), this.opts.clearButton && this._addButton("clear")
            },
            _render: function() {
                var i = this._getTitle(this.d.currentDate),
                    s = n.template(t, e.extend({
                        title: i
                    }, this.opts));
                this.d.$nav.html(s), "years" == this.d.view && e(".datepicker--nav-title", this.d.$nav).addClass("-disabled-"), this.setNavStatus()
            },
            _getTitle: function(t) {
                return this.d.formatDate(this.opts.navTitles[this.d.view], t)
            },
            _addButton: function(t) {
                this.$buttonsContainer.length || this._addButtonsContainer();
                var i = {
                        action: t,
                        label: this.d.loc[t]
                    },
                    a = n.template(s, i);
                e("[data-action=" + t + "]", this.$buttonsContainer).length || this.$buttonsContainer.append(a)
            },
            _addButtonsContainer: function() {
                this.d.$datepicker.append(i), this.$buttonsContainer = e(".datepicker--buttons", this.d.$datepicker)
            },
            setNavStatus: function() {
                if ((this.opts.minDate || this.opts.maxDate) && this.opts.disableNavWhenOutOfRange) {
                    var t = this.d.parsedDate,
                        e = t.month,
                        i = t.year,
                        s = t.date;
                    switch (this.d.view) {
                        case "days":
                            this.d._isInRange(new Date(i, e - 1, 1), "month") || this._disableNav("prev"), this.d._isInRange(new Date(i, e + 1, 1), "month") || this._disableNav("next");
                            break;
                        case "months":
                            this.d._isInRange(new Date(i - 1, e, s), "year") || this._disableNav("prev"), this.d._isInRange(new Date(i + 1, e, s), "year") || this._disableNav("next");
                            break;
                        case "years":
                            var a = n.getDecade(this.d.date);
                            this.d._isInRange(new Date(a[0] - 1, 0, 1), "year") || this._disableNav("prev"), this.d._isInRange(new Date(a[1] + 1, 0, 1), "year") || this._disableNav("next")
                    }
                }
            },
            _disableNav: function(t) {
                e('[data-action="' + t + '"]', this.d.$nav).addClass("-disabled-")
            },
            _activateNav: function(t) {
                e('[data-action="' + t + '"]', this.d.$nav).removeClass("-disabled-")
            },
            _onClickNavButton: function(t) {
                var i = e(t.target).closest("[data-action]"),
                    s = i.data("action");
                this.d[s]()
            },
            _onClickNavTitle: function(t) {
                return e(t.target).hasClass("-disabled-") ? void 0 : "days" == this.d.view ? this.d.view = "months" : void(this.d.view = "years")
            }
        }
    }(),
    function() {
        var t = '<div class="datepicker--time"><div class="datepicker--time-current">   <span class="datepicker--time-current-hours">#{hourVisible}</span>   <span class="datepicker--time-current-colon">:</span>   <span class="datepicker--time-current-minutes">#{minValue}</span></div><div class="datepicker--time-sliders">   <div class="datepicker--time-row">      <input type="range" name="hours" value="#{hourValue}" min="#{hourMin}" max="#{hourMax}" step="#{hourStep}"/>   </div>   <div class="datepicker--time-row">      <input type="range" name="minutes" value="#{minValue}" min="#{minMin}" max="#{minMax}" step="#{minStep}"/>   </div></div></div>',
            i = e.fn.datepicker,
            s = i.Constructor;
        i.Timepicker = function(t, e) {
            this.d = t, this.opts = e, this.init()
        }, i.Timepicker.prototype = {
            init: function() {
                var t = "input";
                this._setTime(this.d.date), this._buildHTML(), navigator.userAgent.match(/trident/gi) && (t = "change"), this.d.$el.on("selectDate", this._onSelectDate.bind(this)), this.$ranges.on(t, this._onChangeRange.bind(this)), this.$ranges.on("mouseup", this._onMouseUpRange.bind(this)), this.$ranges.on("mousemove focus ", this._onMouseEnterRange.bind(this)), this.$ranges.on("mouseout blur", this._onMouseOutRange.bind(this))
            },
            _setTime: function(t) {
                var e = s.getParsedDate(t);
                this._handleDate(t), this.hours = e.hours < this.minHours ? this.minHours : e.hours, this.minutes = e.minutes < this.minMinutes ? this.minMinutes : e.minutes
            },
            _setMinTimeFromDate: function(t) {
                this.minHours = t.getHours(), this.minMinutes = t.getMinutes(), this.d.lastSelectedDate && this.d.lastSelectedDate.getHours() > t.getHours() && (this.minMinutes = this.opts.minMinutes)
            },
            _setMaxTimeFromDate: function(t) {
                this.maxHours = t.getHours(), this.maxMinutes = t.getMinutes(), this.d.lastSelectedDate && this.d.lastSelectedDate.getHours() < t.getHours() && (this.maxMinutes = this.opts.maxMinutes)
            },
            _setDefaultMinMaxTime: function() {
                var t = 23,
                    e = 59,
                    i = this.opts;
                this.minHours = i.minHours < 0 || i.minHours > t ? 0 : i.minHours, this.minMinutes = i.minMinutes < 0 || i.minMinutes > e ? 0 : i.minMinutes, this.maxHours = i.maxHours < 0 || i.maxHours > t ? t : i.maxHours, this.maxMinutes = i.maxMinutes < 0 || i.maxMinutes > e ? e : i.maxMinutes
            },
            _validateHoursMinutes: function(t) {
                this.hours < this.minHours ? this.hours = this.minHours : this.hours > this.maxHours && (this.hours = this.maxHours), this.minutes < this.minMinutes ? this.minutes = this.minMinutes : this.minutes > this.maxMinutes && (this.minutes = this.maxMinutes)
            },
            _buildHTML: function() {
                var i = s.getLeadingZeroNum,
                    a = {
                        hourMin: this.minHours,
                        hourMax: i(this.maxHours),
                        hourStep: this.opts.hoursStep,
                        hourValue: this.hours,
                        hourVisible: i(this.displayHours),
                        minMin: this.minMinutes,
                        minMax: i(this.maxMinutes),
                        minStep: this.opts.minutesStep,
                        minValue: i(this.minutes)
                    },
                    n = s.template(t, a);
                this.$timepicker = e(n).appendTo(this.d.$datepicker), this.$ranges = e('[type="range"]', this.$timepicker), this.$hours = e('[name="hours"]', this.$timepicker), this.$minutes = e('[name="minutes"]', this.$timepicker), this.$hoursText = e(".datepicker--time-current-hours", this.$timepicker), this.$minutesText = e(".datepicker--time-current-minutes", this.$timepicker), this.d.ampm && (this.$ampm = e('<span class="datepicker--time-current-ampm">').appendTo(e(".datepicker--time-current", this.$timepicker)).html(this.dayPeriod), this.$timepicker.addClass("-am-pm-"))
            },
            _updateCurrentTime: function() {
                var t = s.getLeadingZeroNum(this.displayHours),
                    e = s.getLeadingZeroNum(this.minutes);
                this.$hoursText.html(t), this.$minutesText.html(e), this.d.ampm && this.$ampm.html(this.dayPeriod)
            },
            _updateRanges: function() {
                this.$hours.attr({
                    min: this.minHours,
                    max: this.maxHours
                }).val(this.hours), this.$minutes.attr({
                    min: this.minMinutes,
                    max: this.maxMinutes
                }).val(this.minutes)
            },
            _handleDate: function(t) {
                this._setDefaultMinMaxTime(), t && (s.isSame(t, this.d.opts.minDate) ? this._setMinTimeFromDate(this.d.opts.minDate) : s.isSame(t, this.d.opts.maxDate) && this._setMaxTimeFromDate(this.d.opts.maxDate)), this._validateHoursMinutes(t)
            },
            update: function() {
                this._updateRanges(), this._updateCurrentTime()
            },
            _getValidHoursFromDate: function(t, e) {
                var i = t,
                    a = t;
                t instanceof Date && (i = s.getParsedDate(t), a = i.hours);
                var n = e || this.d.ampm,
                    h = "am";
                if (n) switch (!0) {
                    case 0 == a:
                        a = 12;
                        break;
                    case 12 == a:
                        h = "pm";
                        break;
                    case a > 11:
                        a -= 12, h = "pm"
                }
                return {
                    hours: a,
                    dayPeriod: h
                }
            },
            set hours(t) {
                this._hours = t;
                var e = this._getValidHoursFromDate(t);
                this.displayHours = e.hours, this.dayPeriod = e.dayPeriod
            },
            get hours() {
                return this._hours
            },
            _onChangeRange: function(t) {
                var i = e(t.target),
                    s = i.attr("name");
                this.d.timepickerIsActive = !0, this[s] = i.val(), this._updateCurrentTime(), this.d._trigger("timeChange", [this.hours, this.minutes]), this._handleDate(this.d.lastSelectedDate), this.update()
            },
            _onSelectDate: function(t, e) {
                this._handleDate(e), this.update()
            },
            _onMouseEnterRange: function(t) {
                var i = e(t.target).attr("name");
                e(".datepicker--time-current-" + i, this.$timepicker).addClass("-focus-")
            },
            _onMouseOutRange: function(t) {
                var i = e(t.target).attr("name");
                this.d.inFocus || e(".datepicker--time-current-" + i, this.$timepicker).removeClass("-focus-")
            },
            _onMouseUpRange: function(t) {
                this.d.timepickerIsActive = !1
            }
        }
    }()
}(window, jQuery);

;
(function($) {
    $.fn.datepicker.language['en'] = {
        days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        today: 'Today',
        clear: 'Clear',
        dateFormat: 'mm/dd/yyyy',
        timeFormat: 'hh:ii aa',
        firstDay: 0
    };
})(jQuery);


$('.airDate').datepicker()