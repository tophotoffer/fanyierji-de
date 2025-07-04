astraToggleSetupPro = function(e, t, a) {
    var n, l, o, s = !1;
    if (0 < (n = "off-canvas" === e || "full-width" === e ? (l = document.querySelectorAll("#ast-mobile-popup, #ast-mobile-header"), (o = t.classList.contains("ast-header-break-point") ? document.querySelectorAll("#ast-mobile-header .main-header-menu-toggle") : document.querySelectorAll("#ast-desktop-header .main-header-menu-toggle")).length) : t.classList.contains("ast-header-break-point") ? (l = document.querySelectorAll("#ast-mobile-header"), (s = !(0 < (n = (o = document.querySelectorAll("#ast-mobile-header .main-header-menu-toggle")).length))) ? 1 : n) : (l = document.querySelectorAll("#ast-desktop-header"), (o = document.querySelectorAll("#ast-desktop-header .main-header-menu-toggle")).length)) || s)
        for (var r = 0; r < n; r++)
            if (s || (o[r].setAttribute("data-index", r), a[r]) || (a[r] = o[r], o[r].removeEventListener("click", astraNavMenuToggle), o[r].addEventListener("click", astraNavMenuToggle, !1)), void 0 !== l[r])
                for (var d, i = 0; i < l.length; i++)
                    if (0 < (d = document.querySelector("header.site-header").classList.contains("ast-builder-menu-toggle-link") ? l[i].querySelectorAll("ul.main-header-menu .menu-item-has-children > .menu-link, ul.main-header-menu .ast-menu-toggle") : l[i].querySelectorAll("ul.main-header-menu .ast-menu-toggle")).length)
                        for (var c = 0; c < d.length; c++) d[c].removeEventListener("click", AstraToggleSubMenu), d[c].addEventListener("click", AstraToggleSubMenu, !1)
}, astraNavMenuTogglePro = function(e, t, a, n) {
    e.preventDefault();
    var l = e.target.closest("#ast-desktop-header"),
        o = document.querySelector("#masthead > #ast-desktop-header .ast-desktop-header-content"),
        s = (l = null != l && "" !== l ? l.querySelector(".main-header-menu-toggle") : document.querySelector("#masthead > #ast-desktop-header .main-header-menu-toggle"), document.querySelector("#masthead > #ast-desktop-header .ast-desktop-header-content .main-header-bar-navigation"));
    if ("desktop" === e.currentTarget.trigger_type) null !== s && "" !== s && void 0 !== s && (astraToggleClass(s, "toggle-on"), s.classList.contains("toggle-on") ? s.style.display = "block" : s.style.display = ""), astraToggleClass(l, "toggled"), l.classList.contains("toggled") ? (t.classList.add("ast-main-header-nav-open"), "dropdown" === a && (o.style.display = "block")) : (t.classList.remove("ast-main-header-nav-open"), o.style.display = "none");
    else {
        e = document.querySelectorAll("#masthead > #ast-mobile-header .main-header-bar-navigation"), s = (menu_toggle_all = document.querySelectorAll("#masthead > #ast-mobile-header .main-header-menu-toggle"), "0"), l = !1;
        if (null !== n.closest("#ast-fixed-header") && (e = document.querySelectorAll("#ast-fixed-header > #ast-mobile-header .main-header-bar-navigation"), menu_toggle_all = document.querySelectorAll("#ast-fixed-header .main-header-menu-toggle"), s = "0", l = !0), void 0 === e[s]) return !1;
        for (var r = e[s].querySelectorAll(".menu-item-has-children"), d = 0; d < r.length; d++) {
            r[d].classList.remove("ast-submenu-expanded");
            for (var i = r[d].querySelectorAll(".sub-menu"), c = 0; c < i.length; c++) i[c].style.display = "none"
        } - 1 !== (n.getAttribute("class") || "").indexOf("main-header-menu-toggle") && (astraToggleClass(e[s], "toggle-on"), astraToggleClass(menu_toggle_all[s], "toggled"), l && 1 < menu_toggle_all.length && astraToggleClass(menu_toggle_all[1], "toggled"), e[s].classList.contains("toggle-on") ? (e[s].style.display = "block", t.classList.add("ast-main-header-nav-open")) : (e[s].style.display = "", t.classList.remove("ast-main-header-nav-open")))
    }
};
let accountMenuToggle = function() {
    let n = astraAddon.hf_account_action_type && "menu" === astraAddon.hf_account_action_type,
        l = n && astraAddon.hf_account_show_menu_on && "click" === astraAddon.hf_account_show_menu_on;
    var e = document.querySelectorAll(".ast-header-account-wrap");
    e && e.forEach(t => {
        let a = t.querySelector(".ast-account-nav-menu");
        document.addEventListener("pointerup", function(e) {
            (l || n && document.querySelector("body").classList.contains("ast-header-break-point")) && a && !t.contains(e.target) && (a.style.right = "", a.style.left = "")
        });
        var e = t.querySelector(".ast-header-account-link");
        e && e.addEventListener("click", function(e) {
            (l || n && document.querySelector("body").classList.contains("ast-header-break-point")) && (headerSelectionPosition = e.target.closest(".site-header-section")) && (headerSelectionPosition.classList.contains("site-header-section-left") ? (a.style.left = "" === a.style.left ? "-100%" : "", a.style.right = "" === a.style.right ? "auto" : "") : (a.style.right = "" === a.style.right ? "-100%" : "", a.style.left = "" === a.style.left ? "auto" : ""))
        })
    })
};
document.addEventListener("astPartialContentRendered", function() {
    accountMenuToggle()
}), window.addEventListener("load", function() {
    accountMenuToggle()
}), document.addEventListener("astLayoutWidthChanged", function() {
    accountMenuToggle()
});
((o, r) => {
    var s = "astHookExtSticky",
        i = r.document,
        a = (jQuery(r).outerWidth(), jQuery(r).width()),
        n = {
            dependent: [],
            max_width: "",
            site_layout: "",
            break_point: 920,
            admin_bar_height_lg: 32,
            admin_bar_height_sm: 46,
            admin_bar_height_xs: 0,
            stick_upto_scroll: 0,
            gutter: 0,
            wrap: "<div></div>",
            body_padding_support: !0,
            html_padding_support: !0,
            active_shrink: !1,
            shrink: {
                padding_top: "",
                padding_bottom: ""
            },
            sticky_on_device: "desktop",
            header_style: "none",
            hide_on_scroll: "no"
        };

    function e(t, e) {
        this.element = t, this.options = o.extend({}, n, e), this._defaults = n, this._name = s, "1" == this.options.hide_on_scroll && (this.navbarHeight = o(t).outerHeight()), this.lastScrollTop = 0, this.delta = 5, this.should_stick = !0, this.hideScrollInterval = "", this.init()
    }
    e.prototype.stick_me = function(t, e) {
        var o = jQuery(t.element),
            s = jQuery(r).outerWidth(),
            i = parseInt(t.options.stick_upto_scroll),
            a = parseInt(o.parent().attr("data-stick-maxwidth")),
            n = parseInt(o.parent().attr("data-stick-gutter"));
        "enabled" == (astraAddon.hook_sticky_header || "") && (!("desktop" == t.options.sticky_on_device && astraAddon.hook_custom_header_break_point > s || "mobile" == t.options.sticky_on_device && astraAddon.hook_custom_header_break_point <= s) && jQuery(r).scrollTop() > i ? "none" == t.options.header_style && ("enabled" == t.options.active_shrink ? (t.hasShrink(t, "stick"), i = "none", o.hasClass("ast-custom-header") || (i = n), o.parent().css("min-height", o.outerHeight()), o.addClass("ast-header-sticky-active").stop().css({
            "max-width": a,
            top: i,
            "padding-top": t.options.shrink.padding_top,
            "padding-bottom": t.options.shrink.padding_bottom
        })) : (t.hasShrink(t, "stick"), o.parent().css("min-height", o.outerHeight()), o.addClass("ast-header-sticky-active").stop().css({
            "max-width": a,
            top: n,
            "padding-top": t.options.shrink.padding_top,
            "padding-bottom": t.options.shrink.padding_bottom
        })), o.addClass("ast-sticky-shrunk").stop()) : t.stickRelease(t)), "enabled" == (astraAddon.hook_sticky_footer || "") && ("desktop" == t.options.sticky_on_device && astraAddon.hook_custom_footer_break_point > s || "mobile" == t.options.sticky_on_device && astraAddon.hook_custom_footer_break_point <= s ? t.stickRelease(t) : (jQuery("body").addClass("ast-footer-sticky-active"), o.parent().css("min-height", o.outerHeight()), o.stop().css({
            "max-width": a
        })))
    }, e.prototype.update_attrs = function() {
        var o, t = this,
            e = jQuery(t.element),
            s = parseInt(t.options.gutter),
            i = t.options.max_width;
        "none" == t.options.header_style && (o = e.offset().top || 0), "ast-box-layout" != t.options.site_layout && (i = jQuery("body").width()), t.options.dependent && jQuery.each(t.options.dependent, function(t, e) {
            jQuery(e).length && "on" == jQuery(e).parent().attr("data-stick-support") && (dependent_height = jQuery(e).outerHeight(), s += parseInt(dependent_height), o -= parseInt(dependent_height))
        }), t.options.admin_bar_height_lg && jQuery("#wpadminbar").length && 782 < a && (s += parseInt(t.options.admin_bar_height_lg), o -= parseInt(t.options.admin_bar_height_lg)), t.options.admin_bar_height_sm && jQuery("#wpadminbar").length && 600 <= a && a <= 782 && (s += parseInt(t.options.admin_bar_height_sm), o -= parseInt(t.options.admin_bar_height_sm)), t.options.admin_bar_height_xs && jQuery("#wpadminbar").length && (s += parseInt(t.options.admin_bar_height_xs), o -= parseInt(t.options.admin_bar_height_xs)), t.options.body_padding_support && (s += parseInt(jQuery("body").css("padding-top"), 10), o -= parseInt(jQuery("body").css("padding-top"), 10)), t.options.html_padding_support && (s += parseInt(jQuery("html").css("padding-top"), 10), o -= parseInt(jQuery("html").css("padding-top"), 10)), t.options.stick_upto_scroll = o, "none" == t.options.header_style && e.parent().css("min-height", e.outerHeight()).attr("data-stick-gutter", parseInt(s)).attr("data-stick-maxwidth", parseInt(i))
    }, e.prototype.hasShrink = function(t, e) {
        o(r).scrollTop() > jQuery(t.element).outerHeight() ? jQuery("body").addClass("ast-shrink-custom-header") : jQuery("body").removeClass("ast-shrink-custom-header")
    }, e.prototype.stickRelease = function(t) {
        var e = jQuery(t.element);
        "enabled" == (astraAddon.hook_sticky_header || "") && "none" == t.options.header_style && (e.removeClass("ast-header-sticky-active").stop().css({
            "max-width": "",
            top: "",
            padding: ""
        }), e.parent().css("min-height", ""), e.removeClass("ast-sticky-shrunk").stop()), "enabled" == (astraAddon.hook_sticky_footer || "") && jQuery("body").removeClass("ast-footer-sticky-active")
    }, e.prototype.init = function() {
        var e, t;
        jQuery(this.element) && (e = this, t = jQuery(e.element), parseInt(e.options.gutter), t.position().top, "none" == e.options.header_style && t.wrap(e.options.wrap).parent().css("min-height", t.outerHeight()).attr("data-stick-support", "on").attr("data-stick-maxwidth", parseInt(e.options.max_width)), e.update_attrs(), jQuery(r).on("resize", function() {
            e.stickRelease(e), e.update_attrs(), e.stick_me(e)
        }), jQuery(r).on("scroll", function() {
            e.stick_me(e, "scroll")
        }), jQuery(i).ready(function(t) {
            e.stick_me(e)
        }))
    }, o.fn[s] = function(t) {
        return this.each(function() {
            o.data(this, "plugin_" + s) || o.data(this, "plugin_" + s, new e(this, t))
        })
    };
    var d = jQuery("body").width(),
        _ = astraAddon.site_layout || "",
        h = astraAddon.hook_sticky_header || "",
        p = astraAddon.hook_shrink_header || "";
    sticky_header_on_devices = astraAddon.hook_sticky_header_on_devices || "desktop", site_layout_box_width = astraAddon.site_layout_box_width || 1200, hook_sticky_footer = astraAddon.hook_sticky_footer || "", sticky_footer_on_devices = astraAddon.hook_sticky_footer_on_devices || "desktop", "ast-box-layout" === _ && (d = parseInt(site_layout_box_width)), jQuery(i).ready(function(t) {
        "enabled" == h && jQuery(".ast-custom-header").astHookExtSticky({
            sticky_on_device: sticky_header_on_devices,
            header_style: "none",
            site_layout: _,
            max_width: d,
            active_shrink: p
        }), "enabled" == hook_sticky_footer && jQuery(".ast-custom-footer").astHookExtSticky({
            sticky_on_device: sticky_footer_on_devices,
            max_width: d,
            site_layout: _,
            header_style: "none"
        })
    })
})(jQuery, window);
(() => {
    var e;

    function o(e) {
        var t = (t = document.body.className).replace(e, "");
        document.body.className = t
    }

    function d(e) {
        e.style.display = "block", setTimeout(function() {
            e.style.opacity = 1
        }, 1)
    }

    function n(e) {
        e.style.opacity = "", setTimeout(function() {
            e.style.display = ""
        }, 200)
    }
    r = "iPhone" == navigator.userAgent.match(/iPhone/i) ? "iphone" : "", e = "iPod" == navigator.userAgent.match(/iPod/i) ? "ipod" : "", document.body.className += " " + r, document.body.className += " " + e;
    for (var t = document.querySelectorAll("a.astra-search-icon:not(.slide-search)"), a = 0; t.length > a; a++) t[a].onclick = function(e) {
        var t, a, o, n;
        if (e.preventDefault(), e = e || window.event, this.classList.contains("header-cover"))
            for (var s = document.querySelectorAll(".ast-search-box.header-cover"), c = astraAddon.is_header_builder_active || !1, r = 0; r < s.length; r++)
                for (var l = s[r].parentNode.querySelectorAll("a.astra-search-icon"), i = 0; i < l.length; i++) l[i] == this && (d(s[r]), s[r].querySelector("input.search-field").focus(), c ? (t = s[r], n = o = a = void 0, document.body.classList.contains("ast-header-break-point") && (n = document.querySelector(".main-navigation"), a = document.querySelector(".main-header-bar"), o = document.querySelector(".ast-mobile-header-wrap"), null !== a) && null !== n && (n = n.offsetHeight, a = a.offsetHeight, o = o.offsetHeight, n = n && !document.body.classList.contains("ast-no-toggle-menu-enable") ? parseFloat(n) - parseFloat(a) : parseFloat(a), t.parentNode.classList.contains("ast-mobile-header-wrap") && (n = parseFloat(o)), t.style.maxHeight = Math.abs(n) + "px")) : (a = s[r], t = o = void 0, document.body.classList.contains("ast-header-break-point") && (t = document.querySelector(".main-navigation"), null !== (o = document.querySelector(".main-header-bar"))) && null !== t && (t = t.offsetHeight, o = o.offsetHeight, t = t && !document.body.classList.contains("ast-no-toggle-menu-enable") ? parseFloat(t) - parseFloat(o) : parseFloat(o), a.style.maxHeight = Math.abs(t) + "px")));
        else this.classList.contains("full-screen") && (e = document.getElementById("ast-seach-full-screen-form")).classList.contains("full-screen") && (d(e), document.body.className += " full-screen", e.querySelector("input.search-field").focus())
    };
    for (var s = document.querySelectorAll(".ast-search-box .close"), a = 0, c = s.length; a < c; ++a) s[a].onclick = function(e) {
        e = e || window.event;
        for (var t = this;;) {
            if (t.parentNode.classList.contains("ast-search-box")) {
                n(t.parentNode), o("full-screen");
                break
            }
            if (t.parentNode.classList.contains("site-header")) break;
            t = t.parentNode
        }
    };
    document.onkeydown = function(e) {
        if (27 == e.keyCode)
            for (var e = document.getElementById("ast-seach-full-screen-form"), t = (null != e && (n(e), o("full-screen")), document.querySelectorAll(".ast-search-box.header-cover")), a = 0; a < t.length; a++) n(t[a])
    }, window.addEventListener("resize", function() {
        if ("BODY" === document.activeElement.tagName && "INPUT" != document.activeElement.tagName) {
            var e = document.querySelectorAll(".ast-search-box.header-cover");
            if (!document.body.classList.contains("ast-header-break-point"))
                for (var t = 0; t < e.length; t++) e[t].style.maxHeight = "", e[t].style.opacity = "", e[t].style.display = ""
        }
    });
    var r = document.getElementById("close");
    r && r.addEventListener("keydown", function(e) {
        "Enter" === e.key ? (e.preventDefault(), this.click()) : "Tab" === e.key && e.preventDefault()
    })
})();