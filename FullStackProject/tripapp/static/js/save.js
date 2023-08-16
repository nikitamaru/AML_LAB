function idealPopupPosition(e, t, a, n) {
    var i, r, s = window.innerWidth, o = window.innerHeight, l = t.offset();
    l && (r = l.top - $(window).scrollTop(),
    i = l.left - $(window).scrollLeft());
    var c, d, u = t.width(), g = t.height(), m = 0;
    d = i <= 1 * s / 3 ? 1 : i <= 2 * s / 3 ? 2 : 3,
    c = r <= o / 2 ? 1 : 2,
    1 == c ? m = 1 == d ? 1 : 2 == d ? 2 : 3 : 2 == c && (m = 1 == d ? 4 : 2 == d ? 5 : 6);
    var f, p, y = [];
    return 1 == m ? f = i : 2 == m ? f = s / 2 - a / 2 : 3 == m ? f = i + u - a : 4 == m ? f = i : 5 == m ? f = s / 2 - a / 2 : 6 == m && (f = i + u - a),
    1 == m || 2 == m || 3 == m ? (p = r + g,
    y["y-side"] = "top",
    y["y-elem"] = r + g) : (p = r - n,
    y["y-side"] = "bottom",
    y["y-elem"] = r),
    y.x = f,
    y.y = p,
    y["x-half-elem"] = i + u / 2,
    y
}
function urlFromFile(e) {
    var t;
    return window.createObjectURL ? t = window.createObjectURL(e) : window.createBlobURL ? t = window.createBlobURL(e) : window.URL && window.URL.createObjectURL ? t = window.URL.createObjectURL(e) : window.webkitURL && window.webkitURL.createObjectURL && (t = window.webkitURL.createObjectURL(e)),
    t
}
function SelectText(e) {
    var t, a, n = document, i = n.getElementById(e);
    n.body.createTextRange ? (t = document.body.createTextRange(),
    t.moveToElementText(i),
    t.select()) : window.getSelection && (a = window.getSelection(),
    t = document.createRange(),
    t.selectNodeContents(i),
    a.removeAllRanges(),
    a.addRange(t))
}
function toggleMainMenu() {
    var e = $("#main_menu_details")
      , t = 500
      , a = -400;
    e.is(":visible") ? (e.animate({
        left: a
    }, t, function() {
        e.fadeOut(0),
        $("#mobile_wrapper").fadeIn(200)
    }),
    $("#app-section").animate({
        marginLeft: 0
    }, t)) : ($("#mobile_wrapper").fadeOut(200),
    e.css({
        left: a
    }),
    e.fadeIn(0),
    e.animate({
        left: 0
    }, t))
}
function openTopSearch() {
    $("#logo_container, #top_user_part").fadeOut(300, function() {
        $("#top_search_icon .icon_show").hide(),
        $("#top_search_icon .icon_hide").show(),
        $("#top_search_part").css("width", "82%"),
        $("#top_search_elements").fadeIn(300)
    })
}
function closeTopSearch() {
    $("#top_search_elements").fadeOut(300, function() {
        $("#top_search_icon .icon_hide").hide(),
        $("#top_search_icon .icon_show").show(),
        $("#top_search_part").css("width", "auto"),
        $("#logo_container, #top_user_part").fadeIn(300)
    })
}
function loadImageRain(e) {
    var t = $(e)
      , a = t.attr("data-img-id")
      , n = t.attr("data-hidden-elem-id")
      , i = t.attr("data-picture-id")
      , r = t.attr("data-pictureable-id")
      , s = t.attr("data-pictureable-type")
      , o = t.attr("data-pic-type")
      , l = t.attr("data-width")
      , c = t.attr("data-height")
      , d = t.attr("data-resizing");
    if (!l && !c) {
        var u = t.attr("data-device-width-percent")
          , g = (t.attr("data-device-type"),
        window.screen.width);
        if (u)
            l = g * u / 100;
        else {
            var l = $(e).width();
            l < 10 && (l = 360)
        }
    }
    l = Math.min(l, 1200),
    $.ajax({
        type: "POST",
        url: "/picture/image/rain",
        data: {
            pictureId: i,
            pictureableId: r,
            pictureableType: s,
            picType: o,
            width: l,
            height: c,
            resizing: d
        },
        cache: "false",
        success: function(e) {
            if (e.success) {
                var i = $("#" + a)
                  , r = $("<img />")
                  , s = $("#" + n)
                  , o = i.prop("attributes");
                $.each(o, function() {
                    r.attr(this.name, this.value)
                }),
                i.replaceWith(r);
                var l = $(e.img)
                  , c = l.prop("attributes");
                $.each(c, function() {
                    r.attr(this.name, this.value)
                }),
                s && (r.is(":visible") || r.show(),
                s.fadeIn(700)),
                t.remove()
            }
        },
        error: function(e, t) {
            processError(e, t, !1)
        }
    })
}
function initiateSliding(e) {
    nextSlide(e),
    setInterval(function() {
        nextSlide(e)
    }, 5e3)
}
function slideEntity(e) {
    clearPreviewFormat(e);
    var t = document.getElementById("selected_sliding_" + e)
      , a = parseInt(t.getAttribute("data-seq-id"))
      , n = document.getElementById("top_" + e + "_" + a)
      , i = document.getElementById("preview_top_" + e + "_" + a)
      , r = document.getElementById("preview_link_" + e + "_" + a)
      , s = document.getElementById("sliding_" + e + "_container");
    i.style.backgroundColor = "#158EC6",
    r.style.color = "#FFF";
    var o = t.firstChild;
    s.appendChild(o),
    t.appendChild(n),
    t.style.opacity = "0.6",
    fadeInSlide(t, 300)
}
function clearPreviewFormat(e) {
    for (var t = 1; t <= 5; t++) {
        var a = document.getElementById("preview_top_" + e + "_" + t)
          , n = document.getElementById("preview_link_" + e + "_" + t);
        a.style.background = "transparent",
        n.style.color = "#158EC6"
    }
}
function nextSlide(e) {
    var t = document.getElementById("selected_sliding_" + e)
      , a = parseInt(t.getAttribute("data-seq-id"));
    a < 5 ? a += 1 : a = 1,
    t.setAttribute("data-seq-id", a),
    slideEntity(e)
}
function previousSlide(e) {
    var t = document.getElementById("selected_sliding_" + e)
      , a = parseInt(t.getAttribute("data-seq-id"));
    a > 1 ? a -= 1 : a = 5,
    t.setAttribute("data-seq-id", a),
    slideEntity(e)
}
function fadeInSlide(e, t, a) {
    var n = 15
      , i = .4
      , r = .4 * n / t
      , s = setInterval(function() {
        i >= 1 ? clearInterval(s) : (i += r,
        e.style.opacity = i)
    }, n)
}
function adaptObjectsToBodySize() {
    resizeImageContainers()
}
function resizeImageContainers() {
    var e = $(".sliding_wrapper");
    e.height(.51 * e.width()),
    $(".square_img_cont").each(function() {
        var e = $(this);
        e.height(e.width())
    })
}
function closeBox(e) {
    e.style.display = "none"
}
function toggleBox(e) {
    var t = document.getElementById(e.id + "_box");
    "none" == t.style.display ? t.style.display = "block" : t.style.display = "none"
}
function scrollTo(e, t) {
    return t ? $("html, body").animate({
        scrollTop: $("#" + e).offset().top + t
    }, "slow") : $("html, body").animate({
        scrollTop: $("#" + e).offset().top
    }, "slow"),
    !1
}
function scrollToElem(e, t, a) {
    return a ? $("html, body").animate({
        scrollTop: $(e).offset().top + a
    }, t) : $("html, body").animate({
        scrollTop: $(e).offset().top
    }, t),
    !1
}
function removeScript(e) {
    var t = document.getElementById(e);
    t.innerHTML = ""
}
function getDocHeight() {
    var e = document;
    return Math.max(e.body.scrollHeight, e.documentElement.scrollHeight, e.body.offsetHeight, e.documentElement.offsetHeight, e.body.clientHeight, e.documentElement.clientHeight)
}
function expandShortenWall(e) {
    var t = document.getElementById("entity_wall_image")
      , a = t.height;
    t.width;
    "false" == e.getAttribute("data-expanded") ? (e.style.height = a + "px",
    e.setAttribute("data-expanded", "true")) : (e.style.height = "20vw",
    e.setAttribute("data-expanded", "false"))
}
function filterGenre(e) {
    var t = e.options[e.selectedIndex].text
      , a = e.getAttribute("data-uri");
    t && "(None)" != t && (a += "/genre/" + t),
    window.location.href = a
}
function loadMoreEntity(e) {
    var t = e.getAttribute("data-key")
      , a = e.getAttribute("data-sort")
      , n = e.getAttribute("data-url")
      , i = e.getAttribute("data-load-for")
      , r = e.getAttribute("data-parent")
      , s = e.getAttribute("data-parent-id")
      , o = e.getAttribute("data-direct");
    $("#load_more_" + i).attr("data-autoload", 0);
    var l = document.getElementById("load_more_" + i + "_animation");
    l && (l.style.display = "block"),
    $.ajax({
        type: "GET",
        url: n,
        data: {
            key: t,
            sort: a,
            Parent: r,
            ParentId: s,
            direct: o
        },
        cache: "false",
        success: function(t) {
            if (l && (l.style.display = "none"),
            t.success) {
                var a = e.getAttribute("data-container")
                  , n = document.getElementById(a)
                  , r = document.getElementById("load_more_" + i + "_box");
                r && r.parentNode.removeChild(r);
                var s = document.createElement("div");
                s.innerHTML = t.view,
                n.appendChild(s),
                "notification" != i && scrollToElem(s, "slow", -200),
                window.setTimeout(function() {
                    $("#load_more_" + i).attr("data-autoload", 1)
                }, 1e3),
                evaluateLRCMemberScripts(),
                evaluateReadMoreScripts()
            } else
                alert("Server side error - " + t.message),
                t.staff_message && addStaffError(t.staff_message)
        },
        failure: function() {
            l && (l.style.display = "none"),
            alert("Error! Please try again.")
        }
    })
}
function searchLRC(e, t, a) {
    $.ajax({
        type: "GET",
        url: t,
        data: {
            qry: e
        },
        cache: "false",
        success: function(e) {
            e.success && (a.innerHTML = e.view,
            evaluateLRCMemberScripts(),
            evaluateReadMoreScripts())
        },
        error: function(e, t) {
            processError(e, t, !1)
        }
    })
}
function togglePlaylist() {
    var e = document.getElementById("playlist_body")
      , t = document.getElementById("playlist_container");
    "none" == e.style.display ? (e.style.display = "inline-block",
    e.style.height = "400px",
    t.style.width = "450px",
    t.style.boxShadow = "1px 2px 2px 4px #444444") : (e.style.display = "none",
    e.style.height = "0px",
    t.style.width = "173px",
    t.style.boxShadow = "")
}
function loadMusicianMembers(e) {
    var t = e.getAttribute("data-parent")
      , a = e.getAttribute("data-parent-id")
      , n = e.getAttribute("data-relation")
      , i = e.getAttribute("data-reltype");
    e.innerHTML = '<img src="/images/loading_song_interaction.gif"style="margin:5px;width:30px;" />',
    $.ajax({
        type: "GET",
        url: "/musician/members/retrieve",
        data: {
            parent: t,
            parent_id: a,
            relation: n,
            reltype: i
        },
        cache: "false",
        success: function(t, a, n) {
            t.success ? e.innerHTML = t.view : (alert(t.message),
            e.innerHTML = "Error while loading!")
        },
        failure: function() {
            e.innerHTML = "Error! Please try again."
        }
    })
}
function getEntityRespects(e) {
    var t = e.getAttribute("data-entity-id")
      , a = e.getAttribute("data-entity")
      , n = document.getElementById(a.toLowerCase() + "_" + t + "_respect_wrapper");
    $.ajax({
        type: "GET",
        url: "/user/ajax/entity-respects",
        data: {
            EntityId: t,
            Entity: a
        },
        cache: "false",
        success: function(e) {
            e.success ? n.innerHTML = e.view : alert(e.message)
        },
        failure: function() {
            alert("Error! Please try again.")
        }
    })
}
function respectEntity(elem) {
    var entityId = elem.getAttribute("data-entity-id")
      , entity = elem.getAttribute("data-entity")
      , counter = document.getElementById(entity.toLowerCase() + "_" + entityId + "_respect_count")
      , unrespectSrc = elem.src
      , respectSrc = unrespectSrc.replace("unrespect", "respect");
    elem.src = respectSrc,
    counter.innerText = eval(counter.innerText) + 1,
    elem.parentNode.children[1] && (elem.parentNode.children[1].innerText = "Unrespect"),
    $.ajax({
        type: "POST",
        url: "/user/respect-entity",
        data: {
            EntityId: entityId,
            Entity: entity
        },
        cache: "false",
        success: function(data) {
            data.success ? (elem.setAttribute("alt", elem.getAttribute("alt").replace("Respect", "Unrespect")),
            elem.onclick = function() {
                unrespectEntity(elem)
            }
            ) : (elem.src = unrespectSrc,
            eval(counter.innerText) > 0 && (counter.innerText = eval(counter.innerText) - 1),
            elem.parentNode.children[1] && (elem.parentNode.children[1].innerText = "Respect"),
            alert(data.message),
            data.staff_message && addStaffError(data.staff_message))
        },
        error: function(jqXHR, exception) {
            elem.src = unrespectSrc,
            eval(counter.innerText) > 0 && (counter.innerText = eval(counter.innerText) - 1),
            elem.parentNode.children[1] && (elem.parentNode.children[1].innerText = "Respect"),
            processError(jqXHR, exception, !1)
        }
    })
}
function unrespectEntity(elem) {
    var entityId = elem.getAttribute("data-entity-id")
      , entity = elem.getAttribute("data-entity")
      , counter = document.getElementById(entity.toLowerCase() + "_" + entityId + "_respect_count")
      , respectSrc = elem.src
      , unrespectSrc = respectSrc.replace("respect", "unrespect");
    elem.src = unrespectSrc,
    eval(counter.innerText) > 0 && (counter.innerText = eval(counter.innerText) - 1),
    elem.parentNode.children[1] && (elem.parentNode.children[1].innerText = "Respect"),
    $.ajax({
        type: "POST",
        url: "/user/unrespect-entity",
        data: {
            EntityId: entityId,
            Entity: entity
        },
        cache: "false",
        success: function(data) {
            data.success ? (elem.setAttribute("alt", elem.getAttribute("alt").replace("Unrespect", "Respect")),
            elem.onclick = function() {
                respectEntity(elem)
            }
            ) : (elem.src = respectSrc,
            counter.innerText = eval(counter.innerText) + 1,
            elem.parentNode.children[1] && (elem.parentNode.children[1].innerText = "Unrespect"),
            alert(data.message),
            data.staff_message && addStaffError(data.staff_message))
        },
        error: function(jqXHR, exception) {
            elem.src = respectSrc,
            counter.innerText = eval(counter.innerText) + 1,
            elem.parentNode.children[1] && (elem.parentNode.children[1].innerText = "Unrespect"),
            processError(jqXHR, exception, !1)
        }
    })
}
function getEntityRating(e) {
    var t = e.parentNode
      , a = t.getAttribute("data-entity-id")
      , n = t.getAttribute("data-entity")
      , i = t.getAttribute("data-ratecode")
      , r = document.getElementById(i + "_rating_wrapper");
    $.ajax({
        type: "GET",
        url: "/user/entity/rating",
        data: {
            EntityId: a,
            Entity: n,
            entityRateCode: i
        },
        cache: "false",
        success: function(e) {
            e.success ? r.innerHTML = e.view : alert(e.message)
        },
        failure: function() {
            alert("Error! Please try again.")
        }
    })
}
function rateEntityOnKey(e) {
    13 === e.keyCode && rateEntity(e.target)
}
function rateEntity(e) {
    var t = e.parentNode
      , a = t.getAttribute("data-entity-id")
      , n = t.getAttribute("data-entity")
      , i = e.getAttribute("data-level");
    $.ajax({
        type: "POST",
        url: "/user/rate-entity",
        data: {
            EntityId: a,
            Entity: n,
            rating: i
        },
        cache: "false",
        success: function(t) {
            t.success ? getEntityRating(e) : alert(t.message)
        },
        failure: function() {
            alert("Error! Please try again.")
        }
    })
}
function loadPreview(e, t, a) {
    var n = e.offset();
    n && (elemY = n.top - $(window).scrollTop(),
    elemX = n.left - $(window).scrollLeft());
    var i = e.attr("data-entity-id")
      , r = e.attr("data-entity").toLowerCase()
      , s = "/widget/" + r + "/" + i;
    r && (s += "?player=false");
    var o = $("#entity_widget_preview")
      , l = $("#entity_preview_loading")
      , c = elemX + e.width() + 5
      , d = elemY + (e.height() - 20) / 2;
    l.css({
        position: "fixed",
        top: d + "px",
        left: c + "px",
        height: "20px",
        zIndex: "500"
    }),
    l.fadeIn(200),
    $.ajax({
        type: "GET",
        url: s,
        data: {},
        cache: "true",
        success: function(e) {
            if (e.success) {
                o.html(e.view);
                var n = o.height();
                (n < a.y || n > a.y) && (t.y = t.y + a.y - n),
                o.css({
                    position: "fixed",
                    top: t.y + "px",
                    left: t.x + "px",
                    width: a.width,
                    zIndex: "1002"
                });
                var i, r, s = $("#entity_preview_arrow");
                "top" == t["y-side"] ? (i = t["y-elem"] - 4,
                s.addClass("upside_down_image")) : (i = t["y-elem"] - 8,
                s.removeClass("upside_down_image")),
                r = t["x-half-elem"] - 12,
                s.css({
                    position: "fixed",
                    top: i + "px",
                    left: r + "px"
                }),
                l.fadeOut(1e3),
                o.fadeIn(300),
                s.fadeIn(300)
            }
        },
        error: function(e, t) {
            l.fadeOut(1e3),
            processError(e, t, !1)
        }
    })
}
function hidePreview() {
    $("#entity_widget_preview").fadeOut(200),
    $("#entity_preview_arrow").fadeOut(200)
}
function highlightRatingLevel(e) {
    var t = e.getAttribute("data-level")
      , a = e.parentNode.parentNode.firstElementChild
      , n = 100 * t / 5;
    a.style.backgroundColor = "#158EC6",
    a.style.width = n + "%"
}
function resetRatingLevel(e) {
    var t = (e.getAttribute("data-level"),
    e.parentNode.parentNode.firstElementChild)
      , a = t.getAttribute("data-percent");
    t.style.backgroundColor = "#EBD65E",
    t.style.width = a + "%"
}
function fadeIn(e, t) {
    var a = 5
      , n = .6;
    opUnit = .4 * a / t;
    var i = setInterval(function() {
        n >= 1 ? clearInterval(i) : (n += opUnit,
        e.style.opacity = n)
    }, a)
}
function evaluateJPlayerScripts() {
    for (var jplayerIds = document.getElementsByClassName("jp-jplayer-ajax"), i = 0; i < jplayerIds.length; i++)
        if (1 != jplayerIds[i].getAttribute("data-evaluated")) {
            var script = document.getElementById(jplayerIds[i].id + "_script");
            eval(script.innerHTML),
            jplayerIds[i].setAttribute("data-evaluated", 1)
        }
}
function evaluateYoutubeScripts() {
    for (var scripts = document.getElementsByClassName("youtube_player_script"), i = 0; i < scripts.length; i++)
        scripts[i] && 1 != scripts[i].getAttribute("data-evaluated") && (eval(scripts[i].innerHTML),
        scripts[i].setAttribute("data-evaluated", 1))
}
function evaluateReadMoreScripts() {
    var script = document.getElementById("read_more_script");
    eval(script.innerHTML)
}
function evaluateLRCMemberScripts() {
    $(".lrc_member_script").each(function() {
        1 != $(this).attr("data-evaluated") && eval($(this).html())
    })
}
function evaluateAllOtherScripts() {
    for (var scripts = document.getElementsByClassName("news_feed_adsense"), i = 0; i < scripts.length; i++)
        1 != scripts[i].getAttribute("data-evaluated") && (eval(scripts[i].innerHTML),
        scripts[i].setAttribute("data-evaluated", 1))
}
function addStaffError(e) {
    var t = document.getElementById("staff_errors_message");
    t.innerHTML += "<br/>--New Error:<br/>" + e
}
function processError(e, t, a) {
    a && (0 === e.status ? alert("Not connect.\n Verify Network.") : 404 == e.status ? alert("Requested page not found. [404]") : 500 == e.status ? alert("Internal Server Error [500].") : "parsererror" === t ? alert("Requested JSON parse failed.") : "timeout" === t ? alert("Time out error.") : "abort" === t ? alert("Ajax request aborted.") : alert("Uncaught Error!")),
    addStaffError(e.responseText)
}
function clearSelected(e) {
    for (var t = e.options, a = 0; a < t.length; a++)
        t[a].selected = !1
}
function facebookShare(e) {
    var t = e.getAttribute("data-url");
    openSharingWindow(t)
}
function twitterShare(e) {
    var t = e.getAttribute("data-url");
    openSharingWindow(t)
}
function googleplusShare(e) {
    var t = e.getAttribute("data-url");
    openSharingWindow(t)
}
function openSharingWindow(e) {
    var t = window.screen.width;
    t > 600 && (t = 600);
    var a = window.screen.height;
    a > 600 && (a = 600);
    var n = window.screen.width / 2 - (a / 2 + 10)
      , i = window.screen.height / 2 - (t / 2 + 50);
    window.open(e, "", "status=no,height=" + t + ",width=" + a + ",resizable=yes,left=" + n + ",top=" + i + ",screenX=" + n + ",screenY=" + i + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no")
}
function fireEvent(e, t) {
    var a;
    if (e.ownerDocument)
        a = e.ownerDocument;
    else {
        if (9 != e.nodeType)
            throw new Error("Invalid node passed to fireEvent: " + e.id);
        a = e
    }
    if (e.dispatchEvent) {
        var n = "";
        switch (t) {
        case "click":
        case "mousedown":
        case "mouseup":
            n = "MouseEvents";
            break;
        case "focus":
        case "change":
        case "blur":
        case "select":
            n = "HTMLEvents";
            break;
        default:
            throw "fireEvent: Couldn't find an event class for event '" + t + "'."
        }
        var i = a.createEvent(n);
        i.initEvent(t, !0, !0),
        i.synthetic = !0,
        e.dispatchEvent(i, !0)
    } else if (e.fireEvent) {
        var i = a.createEventObject();
        i.synthetic = !0,
        e.fireEvent("on" + t, i)
    }
}
function setMenuEvents() {
    for (var e = document.querySelectorAll(".a_level_1"), t = 0; t < e.length; t++)
        e[t].onmouseover = function() {
            showMenuLevel2(this)
        }
        ,
        e[t].onmouseout = function() {
            autoCloseMenuLevel2(this)
        }
        ;
    for (var a = document.querySelectorAll(".ul_level_2"), t = 0; t < a.length; t++)
        a[t].onmouseover = function() {
            cancelMenuCloseTimer()
        }
        ,
        a[t].parentNode.children[0] && (a[t].onmouseout = function() {
            autoCloseMenuLevel2(this.parentNode.children[0])
        }
        )
}
function showMenuLevel2(e) {
    cancelMenuCloseTimer(),
    lastLink && hideMenuLevel2(lastLink),
    lastLink = e;
    var t = e.parentNode.getElementsByTagName("ul")[0];
    t && (t.style.opacity = .6,
    t.style.display = "block",
    fadeIn(t, 200))
}
function autoCloseMenuLevel2(e) {
    var t = e.parentNode.getElementsByTagName("ul")[0];
    t && (menuCloseTimer = window.setTimeout(function() {
        t.style.display = "none"
    }, 500))
}
function cancelMenuCloseTimer() {
    null != menuCloseTimer && (window.clearTimeout(menuCloseTimer),
    menuCloseTimer = null)
}
function hideMenuLevel2(e) {
    var t = e.parentNode.getElementsByTagName("ul")[0];
    t && (t.style.display = "none")
}
function hideSubMenuLevel2() {
    var e = link.parentNode.getElementsByTagName("ul")[0];
    e.style.display = "none"
}
function submitContactAnswer(e) {
    var t = e.getAttribute("data-contact-id")
      , a = document.getElementById("contact_answer_" + t + "_details")
      , n = a.value;
    return n.length < 3 ? void alert("You must type at least 3 characters!") : void $.ajax({
        type: "POST",
        url: "/about/contact/store-answer",
        data: {
            contactId: t,
            details: n
        },
        cache: "false",
        success: function(e) {
            if (e.success) {
                var a = document.getElementById("staff_contact_" + t + "_container");
                a.innerHTML = e.view
            } else
                alert("Server side error - " + e.message),
                e.staff_message && addStaffError(e.staff_message)
        },
        error: function(e, t) {
            processError(e, t, !1)
        }
    })
}
function setDatePicker(e) {
    var t = e.id
      , a = t.split("_")[0]
      , n = document.getElementById(a + "_day")
      , i = document.getElementById(a + "_month")
      , r = document.getElementById(a + "_year")
      , s = document.getElementById(a);
    "" == r.value | "" == i.value | "" == n.value ? s.value = null : s.value = r.value + "-" + i.value + "-" + n.value
}
function setAnniversary() {
    var e = document.getElementById("anniversary_day")
      , t = document.getElementById("anniversary_month")
      , a = document.getElementById("anniversary_year")
      , n = document.getElementById("anniversary");
    n.value = a.value + "-" + t.value + "-" + e.value
}
function setBirthdate() {
    var e = document.getElementById("birthdate_day")
      , t = document.getElementById("birthdate_month")
      , a = document.getElementById("birthdate_year")
      , n = document.getElementById("birthdate");
    n.value = a.value + "-" + t.value + "-" + e.value
}
function fbLogin(e) {
    FB.login(function(t) {
        t.authResponse && checkLoginState(e)
    }, {
        scope: "email,public_profile,user_friends"
    })
}
function statusChangeCallback(e, t) {
    if ("connected" === e.status) {
        var a = $("#facebook_connect_" + t).first().attr("data-command");
        window[a]()
    } else
        "not_authorized" === e.status ? document.getElementById("status").innerHTML = "Please log into this app." : document.getElementById("status").innerHTML = "Please log into Facebook."
}
function checkLoginState(e) {
    FB.getLoginStatus(function(t) {
        t.authResponse ? statusChangeCallback(t, e) : fbLogin(e)
    })
}
function megalobizFBSignup() {
    FB.api("/me", {
        fields: "id,first_name,last_name,gender,email,birthday,picture,friends"
    }, function(e) {
        e.error ? alert("Error, try again!") : fillRegistrationWithFacebook(e)
    }),
    FB.api("/me/picture?width=1500&redirect=false", function(e) {
        $("#facebook_profile_preview").prop("src", e.data.url),
        $("#registration_form input[name='facebookPicture']").get(0).value = e.data.url
    })
}
function fillRegistrationWithFacebook(e) {
    var t = $("#registration_form input[name='first_name']").get(0);
    if (t) {
        t.parentNode.style.display = "inline-block";
        var a = $("#registration_form input[name='last_name']").get(0);
        a.parentNode.style.display = "inline-block";
        var n = $("#registration_form input[name='email_register']").get(0);
        n.parentNode.style.display = "inline-block",
        $("#gender_M").get(0).checked = !0,
        $("#gender_M").get(0).parentNode.parentNode.parentNode.style.display = "inline-block";
        var i = $("#registration_form input[name='birthdate']").get(0);
        i.parentNode.style.display = "inline-block",
        null != e.first_name && "" != e.first_name && (t.value = e.first_name,
        t.parentNode.style.display = "none",
        $("#social_first_name").get(0).innerText = e.first_name,
        $("#social_first_name").get(0).parentNode.style.display = "block"),
        null != e.last_name && "" != e.last_name && (a.value = e.last_name,
        a.parentNode.style.display = "none",
        $("#social_last_name").get(0).innerText = e.last_name,
        $("#social_last_name").get(0).parentNode.style.display = "block"),
        null != e.email && "" != e.email && (n.value = e.email,
        n.parentNode.style.display = "none",
        $("#social_email").get(0).innerText = e.email,
        $("#social_email").get(0).parentNode.style.display = "block"),
        null != e.gender && "" != e.gender && ("male" == e.gender ? ($("#gender_M").get(0).checked = !0,
        $("#gender_M").get(0).parentNode.parentNode.parentNode.style.display = "none") : "female" == e.gender && ($("#gender_F").get(0).checked = !0,
        $("#gender_F").get(0).parentNode.parentNode.parentNode.style.display = "none"),
        $("#social_gender").get(0).innerText = e.gender,
        $("#social_gender").get(0).parentNode.style.display = "block"),
        null != e.birthday && "" != e.birthday && (i.value = e.birthday,
        i.parentNode.style.display = "none",
        $("#social_birthdate").get(0).innerText = e.birthday,
        $("#social_birthdate").get(0).parentNode.style.display = "block"),
        $("#social_user_info").get(0).style.display = "inline-block",
        $("#registration_form input[name=agree]").get(0).checked = !0
    }
    $("#registration_form input[name='social']").get(0).value = "facebook",
    $("#registration_form input[name='facebookId']").get(0).value = e.id;
    var r = $("#facebook_connect_signup").get(0);
    r.onclick = function() {}
    ,
    r.firstElementChild.style.backgroundColor = "#CCC",
    null != e.first_name && "" != e.first_name && null != e.last_name && "" != e.last_name && null != e.email && "" != e.email && null != e.gender && "" != e.gender && $("#registration_form").submit()
}
function megalobizFBLogin() {
    FB.api("/me", {
        fields: "id,email"
    }, function(e) {
        if (e.error)
            alert("Error, try again!");
        else {
            $("#login_form input[name='social']").get(0).value = "facebook";
            var t = $("#facebook_connect_login").get(0);
            t.onclick = function() {}
            ,
            t.firstElementChild.style.backgroundColor = "#CCC",
            $("#login_form").get(0).submit()
        }
    })
}
function setUserLikePage(e) {
    FB.getLoginStatus(function(e) {
        e.authResponse && FB.api("/me", function(e) {
            if (!e.error) {
                var t = e.id;
                $.ajax({
                    type: "POST",
                    url: "/user/facebook-fan-page/like",
                    data: {
                        facebookId: t
                    },
                    cache: "false",
                    success: function(e) {
                        e.success
                    },
                    error: function(e, t) {}
                })
            }
        })
    })
}
function checkGuestRegistrationProposal(e) {
    $.ajax({
        type: "GET",
        url: "/account/guest/check-registration-proposal",
        cache: "false",
        success: function(e) {
            if (e.success && e.propose_registration) {
                proposeRegistration(e.view);
                var t = $("#facebook_connect_signup_proposal").get(0);
                t && (t.onclick = function() {
                    alert("Facebook is loading. Please try again in a few seconds or reload Page!")
                }
                ,
                t.firstElementChild.style.backgroundColor = "#CCC"),
                FB && FB.getLoginStatus(function(e) {
                    e.authResponse && FB.api("/me", function(e) {
                        if (!e.error) {
                            var t = $("#facebook_connect_signup_proposal").get(0);
                            t && (t.onclick = function() {
                                fbLogin("signup")
                            }
                            ,
                            t.firstElementChild.style.backgroundColor = null)
                        }
                    })
                })
            }
        },
        error: function(e, t) {}
    })
}
function proposeRegistration(e) {
    var t = $("#megalobiz_proposition");
    t.empty(),
    t.append(e),
    t.fadeIn(1e3)
}
function dismissRegistrationProposal() {
    $.ajax({
        type: "POST",
        url: "/account/guest/dimiss-registration-proposal",
        cache: "false"
    })
}
function closeRegistrationProposal() {
    var e = $("#registration_proposition");
    e.fadeOut(1e3),
    dismissRegistrationProposal()
}
function checkPageLikeProposal(e) {
    $.ajax({
        type: "GET",
        url: "/account/meloman/check-page-like-proposal",
        cache: "false",
        success: function(e) {
            e.success && e.propose_page_like && proposePageLike(e.view)
        },
        error: function(e, t) {}
    })
}
function proposePageLike(e) {
    var t = $("#megalobiz_proposition");
    t.empty(),
    t.append(e),
    t.fadeIn(1e3)
}
function closePageLikeProposal() {
    var e = $("#page_like_proposition");
    e.fadeOut(1e3),
    dismissPageLikeProposal()
}
function pointToPageLike(e) {
    closePageLikeProposal(),
    scrollTo(e, -100);
    var t = $("#" + e)
      , a = $("#page_like_pointer");
    t.append(a),
    window.setTimeout(function() {
        a.fadeIn(1e3)
    }, 1e3),
    window.setTimeout(function() {
        a.fadeOut(1e3)
    }, 1e4),
    dismissPageLikeProposal()
}
function dismissPageLikeProposal() {
    $.ajax({
        type: "POST",
        url: "/account/meloman/dimiss-page-like-proposal",
        cache: "false"
    })
}
function squareLoadingImg() {
    return $("<img />").attr({
        "class": "image_square_loading",
        src: "/images/20px/squares_loading.gif",
        alt: "Squares Loading",
        style: "display: block;margin: 5px auto;"
    })
}
function toggleHeaderBoxOnKey(e) {
    13 === e.keyCode && toggleHeaderBox(e.target)
}
function toggleHeaderBox(e) {
    var t = document.getElementById(e.id + "_up_arrow")
      , a = document.getElementById(e.id + "_body")
      , n = document.getElementById(e.id + "_details")
      , i = e.firstElementChild;
    if (a) {
        var r = $("#" + e.id + "_body");
        if (!r.is(":visible"))
            for (var s = document.getElementsByClassName("header_toggle"), o = 0; o < s.length; o++)
                if (s[o].id != e.id) {
                    var l = $("#" + s[o].id + "_body");
                    l && l.hide(700),
                    s[o].firstElementChild.className = "";
                    var c = document.getElementById(s[o].id + "_up_arrow");
                    c.style.display = "none"
                }
        r.toggle(700, function() {
            if ($(this).is(":visible")) {
                if (i.className = "header_toggle_active_image",
                n.style.opacity = .6,
                t.style.display = "block",
                a.style.display = "block",
                fadeIn(n, 200),
                "header_notification" == e.id) {
                    var r = document.getElementById("notification_counter");
                    refreshNotifications(),
                    updateNoticed(r)
                } else if ("header_friend" == e.id) {
                    var s = document.getElementById("friend_suggestion_hint");
                    s && (s.style.display = "none");
                    var o = document.getElementById("friend_counter");
                    refreshFriendRequests(),
                    updateFriendRequestChecked(o),
                    refreshFriendSuggestions()
                }
            } else
                t.style.display = "none",
                a.style.display = "none",
                i.className = ""
        })
    }
}
function toggleHeaderBoxMenu() {
    var e = document.getElementById("header_menu");
    toggleHeaderBox(e)
}
function updateNoticed(e) {
    $.ajax({
        type: "POST",
        url: "/user/ajax/update-noticed",
        data: {},
        cache: "false",
        success: function(t) {
            t.success ? (e.innerHTML = 0,
            e.style.display = "none") : t.staff_message && addStaffError(t.staff_message)
        },
        failure: function() {
            alert("Error! Try closing and reopening the Notification box again.")
        },
        error: function(e, t) {
            processError(e, t, !1)
        }
    })
}
function checkUnnoticedNotifications() {
    $.ajax({
        type: "GET",
        url: "/user/ajax/unnoticed-notifications",
        data: {},
        cache: "false",
        success: function(e) {
            if (e.success) {
                var t = document.getElementById("notification_counter");
                e.notifCount > 0 ? (e.notifCount > t.innerHTML && playNotificationAudio("/sounds/notification.wav"),
                t.innerHTML = e.notifCount,
                t.style.display = "block") : (t.innerHTML = 0,
                t.style.display = "none")
            }
        },
        failure: function() {
            alert("Error! Please try again.")
        }
    })
}
function refreshNotifications() {
    var e = squareLoadingImg();
    container = document.getElementById("list_notification_container"),
    $(container).append(e),
    $.ajax({
        type: "GET",
        url: "/user/ajax/notifications",
        data: {
            key: 0
        },
        cache: "false",
        success: function(t) {
            e.remove(),
            t.success && (container.innerHTML = t.view)
        },
        error: function(t, a) {
            e.remove(),
            processError(t, a, !1)
        }
    })
}
function playNotificationAudio(e) {
    var t = document.getElementById("notificationAudio");
    t.innerHTML = '<source src="' + e + '" />',
    t.play()
}
function setNotificationAsRead(e) {
    var t = e.getAttribute("data-notif-id")
      , a = e.getAttribute("data-read-val");
    "unread" == a && $.ajax({
        type: "POST",
        url: "/user/ajax/notification/set-as-read",
        data: {
            notifId: t
        },
        cache: "false",
        success: function(t) {
            if (t.success) {
                var a = e.className;
                a = a.replace("unread", "read"),
                e.className = a,
                e.setAttribute("data-read-val", "read")
            }
        },
        failure: function() {
            alert("Error! Please try again.")
        }
    })
}
function confirmFriendRequest(e) {
    var t = e.getAttribute("data-user-id");
    $.ajax({
        type: "POST",
        url: "/user/friend-request/confirm",
        data: {
            userId: t
        },
        cache: "false",
        success: function(e) {
            if (e.success) {
                var a = document.getElementById("friend_request_menu_" + t)
                  , n = document.getElementById("friend_request_message_" + t);
                a.innerHTML = "",
                n.innerHTML = e.message,
                n.style.display = "block"
            } else
                alert(e.message)
        },
        failure: function() {
            alert("Error! Please try again.")
        }
    })
}
function ignoreFriendRequest(e) {
    var t = e.getAttribute("data-user-id");
    $.ajax({
        type: "POST",
        url: "/user/friend-request/ignore",
        data: {
            userId: t
        },
        cache: "false",
        success: function(e) {
            if (e.success) {
                var a = document.getElementById("friend_request_menu_" + t)
                  , n = document.getElementById("friend_request_message_" + t);
                a.innerHTML = "",
                n.innerHTML = e.message,
                n.style.display = "block"
            } else
                alert(e.message)
        },
        failure: function() {
            alert("Error! Please try again.")
        }
    })
}
function updateFriendRequestChecked(e) {
    $.ajax({
        type: "POST",
        url: "/user/ajax/update-friend-request-checked",
        data: {},
        cache: "false",
        success: function(e) {
            var t = document.getElementById("friend_counter");
            e.success && (t.innerHTML = 0,
            t.style.display = "none")
        },
        failure: function() {
            alert("Error! Try closing and reopening the Friend Request box again.")
        }
    })
}
function checkUncheckedFriendRequests() {
    $.ajax({
        type: "GET",
        url: "/user/ajax/unchecked-friend-requests",
        data: {},
        cache: "false",
        success: function(e) {
            if (e.success) {
                var t = document.getElementById("friend_counter");
                e.frCount > 0 ? (e.frCount > t.innerHTML && playNotificationAudio("/sounds/notification.wav"),
                t.innerHTML = e.frCount,
                t.style.display = "block") : (t.innerHTML = 0,
                t.style.display = "none")
            }
        },
        failure: function() {
            alert("Error! Please try again.")
        }
    })
}
function refreshFriendRequests() {
    var e = squareLoadingImg()
      , t = document.getElementById("list_friend_request_container");
    $(t).append(e),
    $.ajax({
        type: "GET",
        url: "/user/ajax/friend-requests",
        data: {
            key: 0
        },
        cache: "false",
        success: function(a) {
            e.remove(),
            a.success && t && (t.innerHTML = a.view)
        },
        error: function(t, a) {
            e.remove(),
            processError(t, a, !1)
        }
    })
}
function sendFriendRequest(e) {
    var t = e.getAttribute("data-user-id");
    $.ajax({
        type: "POST",
        url: "/user/friend-request/store",
        data: {
            userId: t
        },
        cache: "false",
        success: function(e) {
            if (e.success) {
                var a = document.getElementById("friend_suggestion_menu_" + t)
                  , n = document.getElementById("friend_suggestion_message_" + t);
                a.innerHTML = "",
                n.innerHTML = e.message,
                n.style.display = "block"
            } else
                alert(e.message)
        },
        failure: function() {
            alert("Error! Please try again.")
        }
    })
}
function refreshFriendSuggestions() {
    var e = squareLoadingImg()
      , t = document.getElementById("list_friend_suggestion_container");
    $(t).append(e),
    $.ajax({
        type: "GET",
        url: "/user/ajax/friend-suggestions",
        data: {
            key: 0
        },
        cache: "false",
        success: function(a) {
            e.remove(),
            a.success && t && (t.innerHTML = a.view)
        },
        error: function(t, a) {
            e.remove(),
            processError(t, a, !1)
        }
    })
}
function removeFriendSuggestion(e) {
    var t = e.getAttribute("data-user-id");
    $.ajax({
        type: "POST",
        url: "/user/friend-suggestion/remove",
        data: {
            userId: t
        },
        cache: "false",
        success: function(e) {
            if (e.success) {
                var a = document.getElementById("friend_suggestion_" + t);
                a.innerHTML = "",
                a.style.display = "none"
            } else
                alert(e.message)
        },
        failure: function() {
            alert("Error! Please try again.")
        }
    })
}
function toggleSortBy(e) {
    var t = e.parentNode.children[1];
    "none" == t.style.display ? t.style.display = "inline-block" : t.style.display = "none"
}
function respectSocial(elem) {
    var entityId = elem.getAttribute("data-entity-id")
      , entity = elem.getAttribute("data-entity")
      , cont = elem.getAttribute("data-container")
      , counterCont = elem.getAttribute("data-counter-container")
      , counter = document.getElementById(counterCont + "_respect_count");
    elem.src = "/images/respected_tiny_emoticon.png",
    counter.innerText = eval(counter.innerText) + 1,
    $.ajax({
        type: "POST",
        url: "/user/respect-entity",
        data: {
            EntityId: entityId,
            Entity: entity
        },
        cache: "false",
        success: function(data) {
            data.success ? "Comment" == entity ? (elem.setAttribute("title", elem.getAttribute("data-unrespect-title")),
            elem.setAttribute("alt", elem.getAttribute("data-unrespect-title")),
            elem.onclick = function() {
                unrespectSocial(elem)
            }
            ) : loadAmplifyableInfo(elem) : (elem.src = "/images/unrespected_tiny_emoticon_bright.png",
            eval(counter.innerText) > 0 && (counter.innerText = eval(counter.innerText) - 1),
            alert(data.message))
        },
        error: function(jqXHR, exception) {
            elem.src = "/images/unrespected_tiny_emoticon_bright.png",
            eval(counter.innerText) > 0 && (counter.innerText = eval(counter.innerText) - 1),
            processError(jqXHR, exception, !1)
        }
    })
}
function unrespectSocial(elem) {
    var entityId = elem.getAttribute("data-entity-id")
      , entity = elem.getAttribute("data-entity")
      , cont = elem.getAttribute("data-container")
      , counterCont = elem.getAttribute("data-counter-container")
      , counter = document.getElementById(counterCont + "_respect_count");
    elem.src = "/images/unrespected_tiny_emoticon_bright.png",
    eval(counter.innerText) > 0 && (counter.innerText = eval(counter.innerText) - 1),
    $.ajax({
        type: "POST",
        url: "/user/unrespect-entity",
        data: {
            EntityId: entityId,
            Entity: entity
        },
        cache: "false",
        success: function(data) {
            data.success ? "Comment" == entity ? (elem.setAttribute("title", elem.getAttribute("data-respect-title")),
            elem.setAttribute("alt", elem.getAttribute("data-respect-title")),
            elem.onclick = function() {
                respectSocial(elem)
            }
            ) : loadAmplifyableInfo(elem) : (elem.src = "/images/respected_tiny_emoticon.png",
            counter.innerText = eval(counter.innerText) + 1,
            alert(data.message))
        },
        error: function(jqXHR, exception) {
            elem.src = "/images/respected_tiny_emoticon.png",
            counter.innerText = eval(counter.innerText) + 1,
            processError(jqXHR, exception, !1)
        }
    })
}
function submitAmplification(e) {
    var t = e.getAttribute("data-entity-id")
      , a = e.getAttribute("data-entity")
      , n = e.getAttribute("data-amplify-level")
      , i = e.getAttribute("data-from-post-id")
      , r = e.getAttribute("data-code-type")
      , s = e.getAttribute("data-parent-container")
      , o = document.getElementById(s + "_amplify_details")
      , l = o.value;
    url = "/post/amplification/store";
    var c = 0
      , d = $("#" + s + "_promote_media").get(0);
    d && d.checked && (url = "/post/entity/store",
    c = 1);
    var u = $("#" + s + "_amplify");
    u.hide();
    var g = $("#" + s + "_amplify_loading");
    g.hide(),
    g.html('<img src="/images/equalizer_loading.gif" style="height:18px;" />'),
    g.fadeIn(700),
    $.ajax({
        type: "POST",
        url: url,
        data: {
            postable_type: a,
            postable_id: t,
            amplify_level: n,
            from_post_id: i,
            codeType: r,
            details: l,
            promote_media: c,
            parent_container: s
        },
        cache: "false",
        success: function(t) {
            if (g.html(""),
            u.fadeIn(700),
            t.success) {
                var a = document.getElementById(s + "_amplify_box");
                a.style.display = "none",
                loadAmplifyableInfo(e, !0)
            } else
                alert("Server side error - " + t.message),
                t.staff_message && addStaffError(t.staff_message)
        },
        failure: function() {
            g.html(""),
            u.fadeIn(700),
            alert("Failure! Please try again.")
        },
        error: function(e, t) {
            g.html(""),
            u.fadeIn(700),
            processError(e, t, !0)
        }
    })
}
function loadAmplifyableInfo(e, t) {
    var a = e.getAttribute("data-entity-id")
      , n = e.getAttribute("data-entity");
    if (e.getAttribute("data-parent-container"))
        var i = e.getAttribute("data-parent-container");
    else if (e.getAttribute("data-container"))
        var i = e.getAttribute("data-container");
    var r = document.getElementById(i + "_info_container");
    $.ajax({
        type: "GET",
        url: "/" + n.toLowerCase() + "/ajax/info",
        data: {
            EntityId: a,
            force_subjects: !0,
            parent_container: i
        },
        cache: "false",
        success: function(e) {
            if (e.success) {
                if (r.innerHTML = e.view,
                t) {
                    var a = $("#" + i + "_amplify_box_message");
                    a.fadeIn(1e3),
                    window.setTimeout(function() {
                        a.fadeOut(1e3)
                    }, 5e3)
                }
            } else
                alert(e.message),
                e.staff_message && addStaffError(e.staff_message)
        },
        error: function(e, t) {
            processError(e, t, !1)
        }
    })
}
function toggleAmplifyBox(e) {
    var t = (e.getAttribute("data-entity-id"),
    e.getAttribute("data-entity"),
    e.getAttribute("data-parent-container"))
      , a = document.getElementById(t + "_amplify_details")
      , n = $("#" + t + "_amplify_box");
    n.is(":visible") ? (a.setAttribute("contenteditable", !1),
    n.fadeOut(700)) : n.fadeIn(700, function() {
        a.setAttribute("contenteditable", !0)
    })
}
function reverseImage(e) {
    var t = e.getAttribute("data-post-id")
      , a = $("#post_" + t + "_link_image")
      , n = a.attr("data-status");
    if ("collapsed" == n) {
        var i = e.firstElementChild;
        i.className = "upside_down_image",
        a.animate({
            "max-height": "1000px"
        }, 1e3, "easeInQuint", function() {
            a.attr("data-status", "expanded")
        })
    } else {
        var i = e.firstElementChild;
        i.className = "",
        a.animate({
            height: "400px"
        }, 1e3, "easeInQuint", function() {
            a.css("max-height", "400px"),
            a.css("height", "auto"),
            a.attr("data-status", "collapsed")
        })
    }
}
function loadPosts(e) {
    $("#load_more_post").attr("data-autoload", 0);
    var t = e.getAttribute("data-parent-id")
      , a = e.getAttribute("data-parent")
      , n = 0;
    e.getAttribute("data-key") && (n = e.getAttribute("data-key"));
    var i = "recent";
    if (e.getAttribute("data-sort"))
        var i = e.getAttribute("data-sort");
    var r = e.getAttribute("data-url")
      , s = e.getAttribute("data-feed")
      , o = e.getAttribute("data-load-for")
      , l = document.getElementById("load_more_" + o + "_animation");
    l && (l.style.display = "block"),
    $.ajax({
        type: "GET",
        url: r,
        data: {
            EntityId: t,
            Entity: a,
            key_post: n,
            sort_post: i,
            force_section: !0,
            feed: s
        },
        cache: "false",
        success: function(e) {
            if (l && (l.style.display = "none"),
            e.success) {
                var t = document.getElementById("list_entity_container")
                  , a = document.getElementById("load_more_" + o + "_box");
                a && a.parentNode.removeChild(a);
                var n = document.createElement("div");
                n.innerHTML = e.view,
                t.appendChild(n),
                scrollToElem(n, "slow", -300),
                window.setTimeout(function() {
                    $("#load_more_post").attr("data-autoload", 1)
                }, 1e3),
                evaluateJPlayerScripts(),
                evaluateReadMoreScripts(),
                evaluateAllOtherScripts(),
                runImageRequesterScripts(),
                evaluateYoutubeScripts()
            } else
                alert("Server side error - " + e.message),
                e.staff_message && addStaffError(e.staff_message)
        },
        failure: function() {
            l.style.display = "none",
            alert("Error! Please try again.")
        }
    })
}
function loadPost(e) {
    var t = e.getAttribute("data-entity-id")
      , a = $("#post_" + t);
    a.html('<img src="/images/equalizer_loading.gif" style="height:15px;" />'),
    $.ajax({
        type: "GET",
        url: "/post/" + t,
        cache: "false",
        success: function(e) {
            if (a.html(""),
            e.success) {
                a = a.get(0);
                var t = document.createElement("div");
                t.innerHTML = e.view,
                a.parentNode.replaceChild(t.firstElementChild, a),
                evaluateJPlayerScripts(),
                evaluateReadMoreScripts(),
                runImageRequesterScripts(),
                evaluateYoutubeScripts()
            } else
                alert("Server side error - " + e.message),
                e.staff_message && addStaffError(e.staff_message)
        },
        error: function(e, a) {
            loading.html('<center><a data-entity-id="' + t + '" onclick="loadPost(this)" >Reload Post</a></center>'),
            processError(e, a)
        }
    })
}
function editPost(e) {
    var t = document.getElementById("details_post_" + e.getAttribute("data-entity-id"))
      , a = document.getElementById("update_post_" + e.getAttribute("data-entity-id"))
      , n = $("#text_post_" + e.getAttribute("data-entity-id"))
      , t = $("#details_post_" + e.getAttribute("data-entity-id"));
    n.is(":visible") ? (n.hide(300),
    t.show(300),
    a.style.display = "block") : (a.style.display = "none",
    t.hide(300),
    n.show(300))
}
function updatePost(e) {
    var t = e.getAttribute("data-entity-id")
      , a = document.getElementById("details_post_" + e.getAttribute("data-entity-id"))
      , n = a.value
      , i = $("#update_post_" + e.getAttribute("data-entity-id"))
      , r = $("#update_post_" + e.getAttribute("data-entity-id") + "_loading");
    i.hide(200),
    r.html('<img src="/images/equalizer_loading.gif" style="height:18px;" />'),
    n.length > 0 && $.ajax({
        type: "POST",
        url: "/post/" + t + "/update",
        data: {
            details: n,
            force_section: !0
        },
        cache: "false",
        success: function(e) {
            if (r.html(""),
            e.success) {
                i.show(200);
                var a = document.getElementById("post_" + t)
                  , n = document.createElement("div");
                n.innerHTML = e.view,
                a.parentNode.replaceChild(n.firstElementChild, a),
                evaluateJPlayerScripts(),
                evaluateReadMoreScripts(),
                runImageRequesterScripts()
            } else
                alert("Server side error - " + e.message),
                e.staff_message && addStaffError(e.staff_message)
        },
        failure: function() {
            r.html(""),
            i.show(200),
            alert("Failure! Please try again.")
        },
        error: function(e, t) {
            r.html(""),
            i.show(200),
            processError(e, t, !0)
        }
    })
}
function deletePost(e) {
    var t = e.getAttribute("data-entity-id");
    $.ajax({
        type: "POST",
        url: "/post/" + t + "/destroy",
        data: {},
        cache: "false",
        success: function(e) {
            e.success ? $("#post_" + t).fadeOut(500, function() {
                $(this).remove()
            }) : (alert("Server side error - " + e.message),
            e.staff_message && addStaffError(e.staff_message))
        },
        error: function(e, t) {
            loading.html(""),
            updateLink.show(200),
            processError(e, t, !0)
        }
    })
}
function toggleCommentBox(e) {
    var t = (e.getAttribute("data-parent-id"),
    e.getAttribute("data-parent"),
    e.getAttribute("data-parent-container"))
      , a = $("#" + t + "_comments_space");
    a.is(":visible") ? a.fadeOut(700) : (a.fadeIn(700),
    1 == e.getAttribute("data-ingroup") && loadComments(e))
}
function toggleOptions(e) {
    var t = document.getElementById(e.id + "_options");
    "none" == t.style.display ? t.style.display = "block" : t.style.display = "none"
}
function toggleReply(e, t) {
    var a = e.getAttribute("data-children-container")
      , n = document.getElementById(a + "_info_holder")
      , i = $("#" + a + "_replies");
    i.toggle(700, function() {
        $(this).is(":visible") && (t ? loadComments(n, "children", t) : loadComments(n))
    })
}
function autoToggleReply(e, t) {
    var a = document.getElementById(e + "_info_holder");
    toggleReply(a, t)
}
function autoFindComment(e, t) {
    var a = e + "_comment_" + t
      , n = document.getElementById(a);
    n.style.backgroundColor = "#EEF",
    scrollTo(n.id, -150)
}
function submitComment(e) {
    var t = e.getAttribute("data-parent-id")
      , a = e.getAttribute("data-parent")
      , n = e.getAttribute("data-parent-container")
      , i = document.getElementById(n + "_comment_details")
      , r = i.value
      , s = $("#" + n + "_submit_comment_loading");
    if (s.hide(),
    0 == r.length)
        s.html('<span style="margin-right:20px;color:#D22;" >Write something...</span>'),
        s.fadeIn(1e3),
        window.setTimeout(function() {
            s.fadeOut(1e3)
        }, 3e3);
    else {
        var o = $(e);
        o.hide(),
        s.html('<img src="/images/equalizer_loading.gif" style="margin-top:3px;height:18px;" />'),
        s.fadeIn(700),
        $.ajax({
            type: "POST",
            url: "/comment/store",
            data: {
                Entity: a,
                EntityId: t,
                details: r
            },
            cache: "false",
            success: function(t) {
                s.html(""),
                t.success ? (o.show(200),
                i.value = "",
                loadComments(e, "parent")) : alert(t.message)
            },
            failure: function() {
                s.html(""),
                o.show(200),
                alert("Failure! Please try again.")
            },
            error: function(e, t) {
                s.html(""),
                o.show(200),
                processError(e, t, !0)
            }
        })
    }
}
function loadComments(elem, containerLevel, raiseableId) {
    if ("parent" == containerLevel) {
        if (elem.getAttribute("data-parent-container"))
            var cont = elem.getAttribute("data-parent-container");
        else if (elem.getAttribute("data-container"))
            var cont = elem.getAttribute("data-container");
        var parentId = elem.getAttribute("data-parent-id")
          , parent = elem.getAttribute("data-parent")
    } else {
        if (elem.getAttribute("data-children-container"))
            var cont = elem.getAttribute("data-children-container");
        else if (elem.getAttribute("data-container"))
            var cont = elem.getAttribute("data-container");
        var parentId = elem.getAttribute("data-entity-id")
          , parent = elem.getAttribute("data-entity")
    }
    var key = 0;
    elem.getAttribute("data-key") && (key = elem.getAttribute("data-key"));
    var sort = "top";
    if (elem.getAttribute("data-sort"))
        var sort = elem.getAttribute("data-sort");
    var container = document.getElementById(cont + "_comments_container")
      , loading = document.getElementById(cont + "_load_more_animation");
    loading && (loading.style.display = "block"),
    $.ajax({
        type: "GET",
        url: "/comment/ajax/entity-comments",
        data: {
            EntityId: parentId,
            Entity: parent,
            key_comment: key,
            sort_comment: sort,
            raiseableId: raiseableId,
            parent_container: cont
        },
        cache: "false",
        success: function(data) {
            if (loading && (loading.style.display = "none"),
            data.success) {
                var commentsCount = document.getElementById(cont + "_comments_count");
                commentsCount && (commentsCount.innerHTML = data.commentsCount);
                var loadMore = document.getElementById(cont + "_load_more_comments");
                loadMore && loadMore.parentNode.removeChild(loadMore),
                0 == key && (container.innerHTML = "");
                var comments = document.createElement("div");
                if (comments.innerHTML = data.view,
                container.appendChild(comments),
                null != raiseableId) {
                    var script = document.getElementById(cont + "_auto_find_comment_" + raiseableId);
                    eval(script.innerHTML)
                }
                evaluateReadMoreScripts()
            } else
                alert(data.message)
        },
        failure: function() {
            loading && (loading.style.display = "none"),
            alert("Error! Please try again.")
        }
    })
}
function editComment(e) {
    var t = e.getAttribute("data-children-container")
      , a = $("#" + t + "_details")
      , n = $("#" + t + "_update");
    "false" == a.attr("contenteditable") ? (a.attr("contenteditable", "true"),
    a.css("border", "1px solid #51BDED"),
    a.css("padding", "5px"),
    n.show(500)) : (a.attr("contenteditable", "false"),
    a.css("border", "none"),
    a.css("padding", "0"),
    n.hide(500))
}
function updateComment(e) {
    var t = e.getAttribute("data-children-container")
      , a = e.getAttribute("data-entity-id")
      , n = document.getElementById(t + "_details")
      , i = n.innerHTML
      , r = $("#" + t + "_update_loading")
      , s = $(e);
    s.hide(200),
    r.html('<img src="/images/equalizer_loading.gif" style="margin-top:3px;height:18px;" />'),
    i.length > 0 && $.ajax({
        type: "POST",
        url: "/comment/" + a + "/update",
        data: {
            details: i
        },
        cache: "false",
        success: function(a) {
            if (r.html(""),
            a.success) {
                s.show(200),
                editComment(e);
                var n = $("#" + t + "_edited");
                n.toggle(500)
            } else
                alert(a.message)
        },
        failure: function() {
            r.html(""),
            s.show(200),
            alert("Failure! Please try again.")
        },
        error: function(e, t) {
            r.html(""),
            s.show(200),
            processError(e, t, !0)
        }
    })
}
function deleteComment(e) {
    var t = e.getAttribute("data-children-container")
      , a = e.getAttribute("data-entity-id");
    $.ajax({
        type: "POST",
        url: "/comment/" + a + "/destroy",
        data: {},
        cache: "false",
        success: function(e) {
            if (e.success) {
                $("#" + t).fadeOut(500, function() {
                    $(this).remove()
                });
                var a = document.getElementById(t + "_comments_count");
                a && (a.innerHTML -= 1)
            } else
                alert(e.message)
        },
        failure: function() {
            alert("Error! Please try again.")
        }
    })
}
function showCommentDateTime(e) {
    var t = e.getAttribute("data-parent-container")
      , a = (e.getAttribute("data-entity-id"),
    $("#" + t + "_full_time"));
    a.toggle(500)
}
function loadJPlayerSongMedia(e, t) {
    $.ajax({
        type: "POST",
        url: "/song/ajax/jplayer-medias",
        data: {
            songIds: e
        },
        cache: "false",
        success: function(e) {
            if (e.success) {
                var a = e.medias;
                a = JSON && JSON.parse(a) || $.parseJSON(a),
                "function" == typeof t && t(a)
            }
        },
        error: function(e, t) {
            processError(e, t, !1)
        }
    })
}
function clearPlayerInteractions(e) {
    var t = e.attr("id")
      , a = document.getElementById(t + "_song_interaction");
    a.innerHTML = "";
    var n = document.getElementById(t + "_played_users");
    n.innerHTML = "";
    var i = document.getElementById(t + "_playing_users");
    i.innerHTML = ""
}
function checkPlaying(e) {
    var t = e.attr("id");
    window[t + "_checking"] && window.clearInterval(window[t + "_checking"]),
    window[t + "_checking"] = window.setInterval(function() {
        e.data().jPlayer.status.currentTime > 0 ? sendPlayingRequest(e) : (clearPlayerInteractions(e),
        window[t + "_checking"] && window.clearInterval(window[t + "_checking"]))
    }, 6e4)
}
function sendPlayRequest(e) {
    var t = e.data().jPlayer.status.media.id
      , a = e.attr("id")
      , n = document.getElementById("info_" + a).getAttribute("data-page");
    document.getElementById("info_" + a).setAttribute("data-last-played-id", t);
    var i = document.getElementById(a + "_song_interaction");
    $.ajax({
        type: "POST",
        url: "/song/" + t + "/played",
        data: {
            player: a,
            page: n
        },
        cache: "false",
        success: function(t) {
            t.success ? i.innerHTML = t.view : t.message && (e.jPlayer("stop"),
            alert(t.message))
        },
        failure: function() {
            alert("Error! Please try again.")
        }
    })
}
function getPlayedUsers(e) {
    var t = e.data().jPlayer.status.media.id
      , a = e.attr("id")
      , n = document.getElementById("info_" + a).getAttribute("data-page");
    document.getElementById("info_" + a).setAttribute("data-last-played-id", t);
    var i = document.getElementById(a + "_song_interaction")
      , r = document.getElementById(a + "_played_users");
    $.ajax({
        type: "GET",
        url: "/song/" + t + "/played-users",
        data: {
            player: a,
            page: n
        },
        cache: "false",
        success: function(e) {
            e.success ? (i.innerHTML = e.interaction_view,
            r.innerHTML = e.users_view) : e.message && $('<div title="Song not Found">' + e.message + "</div>").dialog(),
            e.staff_message && addStaffError(e.staff_message)
        },
        failure: function() {
            alert("Error! Please try again.")
        }
    })
}
function sendPlayingRequest(e) {
    var t = e.data().jPlayer.status.media.id
      , a = e.attr("id")
      , n = document.getElementById("info_" + a).getAttribute("data-page")
      , i = document.getElementById(a + "_playing_users");
    $.ajax({
        type: "POST",
        url: "/song/" + t + "/playing",
        data: {
            player: a,
            page: n
        },
        cache: "false",
        success: function(e) {
            e.success ? i.innerHTML = e.view : e.message
        },
        failure: function() {
            alert("Error! Please try again.")
        }
    })
}
function sendEndedRequest(e) {
    var t = e.attr("id")
      , a = document.getElementById("info_" + t).getAttribute("data-page")
      , n = document.getElementById("info_" + t).getAttribute("data-last-played-id");
    $.ajax({
        type: "POST",
        url: "/song/" + n + "/ended",
        data: {
            player: t,
            page: a
        },
        cache: "false",
        success: function(e) {
            e.message && alert(e.message)
        },
        failure: function() {
            alert("Error! Please try again.")
        }
    })
}
function showPlayingSongPicture(e) {
    var t = e.getAttribute("data-medium-src")
      , a = e.getAttribute("data-song-id")
      , n = e.getAttribute("data-picpath")
      , i = document.createElement("a");
    i.target = "_blank",
    i.href = n;
    var r = document.createElement("img");
    r.src = t,
    r.style = "width:100%;max-height:450px;";
    var s = $("#song_" + a + "_picture_thumb");
    i.appendChild(r);
    var o = $(window).width()
      , l = $(window).height()
      , c = 450;
    o < 450 && (c = o - 10);
    var d = c
      , u = $("#song_dialog");
    u.empty(),
    u.append(i),
    u.dialog({
        autoOpen: !0,
        modal: !0,
        draggable: !0,
        maxWidth: o,
        maxHeight: l,
        width: c,
        height: d,
        position: {
            my: "left top",
            at: "left-10 top",
            of: s
        },
        show: {
            effect: "fade",
            duration: 500
        },
        hide: {
            effect: "fade",
            duration: 500
        }
    })
}
function prepareDownload(e) {
    var t = e.getAttribute("data-entity-id")
      , a = e.getAttribute("data-download")
      , n = e.getAttribute("data-entity");
    url = "/" + n + "/download/" + t + "/prepare/?download=" + a;
    var i = $("#media_download_box");
    i.empty(),
    i.html('<center><img src="/images/squares_loading.gif" style="height:50px;" /></center>'),
    i.dialog({
        autoOpen: !0,
        modal: !0,
        draggable: !0,
        maxWidth: 300,
        maxHeight: 300,
        width: 300,
        height: 300,
        position: {
            my: "left top",
            at: "left-10 top",
            of: e
        },
        show: {
            effect: "fade",
            duration: 500
        },
        hide: {
            effect: "fade",
            duration: 500
        }
    }),
    $.ajax({
        type: "GET",
        url: url,
        cache: "false",
        success: function(e) {
            i.empty(),
            e.success ? i.append(e.view) : (i.html("Server side error - " + e.message),
            window.setTimeout(function() {
                i.dialog("widget").fadeTo("slow", 1e3, function() {
                    i.dialog("close")
                })
            }, 3e3),
            e.staff_message && addStaffError(e.staff_message))
        },
        error: function(e, t) {
            i.empty(),
            window.setTimeout(function() {
                i.dialog("widget").fadeTo("slow", 1e3, function() {
                    i.dialog("close")
                })
            }, 3e3),
            processError(e, t)
        }
    })
}
function closeDownload() {
    var e = $("#media_download_box");
    e.html("Media is downloading...");
    var t = $("#song_download_button");
    window.setTimeout(function() {
        e.dialog("widget").fadeTo("slow", 1e3, function() {
            e.dialog("close")
        }),
        t.hide(500)
    }, 1e4)
}
function proposeTodayPlayed() {
    $.ajax({
        type: "GET",
        url: "/media/proposition/today-played",
        data: {},
        cache: "false",
        success: function(e) {
            if (e.success) {
                var t = $("#media_activities_content");
                t.html(e.view)
            } else
                e.staff_message && addStaffError(e.staff_message)
        }
    })
}
function addSongToPlaylist(e, t, a) {
    $.ajax({
        type: "POST",
        url: "/playlist/" + t + "/song/add",
        data: {
            song: e
        },
        cache: "false",
        success: function(e) {
            "function" == typeof a && a(e.success)
        },
        error: function(e, t) {
            "function" == typeof a && a(!1),
            processError(e, t)
        }
    })
}
function saveLrcText(e, t) {
    var a = e.getAttribute("data-song-uri")
      , n = e.getAttribute("data-lyric-id")
      , i = e.getAttribute("data-song-id")
      , r = a + "/lyric/" + n + "/update";
    $(e).hide();
    var s = $("#song_" + i + "_saving");
    s.show(),
    $.ajax({
        type: "POST",
        url: r,
        data: {
            lyrics: t,
            lrc_format: !0
        },
        cache: "false",
        success: function(t) {
            s.hide(),
            $(e).fadeIn(200),
            t.success ? window.location.reload(!0) : $('<div title="Error Saving">' + t.message + "</div>").dialog()
        },
        error: function(t, a) {
            s.hide(),
            $(e).fadeOut(200),
            processError(t, a, !1)
        }
    })
}
function saveLrcMakerText(e, t, a) {
    $.ajax({
        type: "POST",
        url: "/api/tracks",
        data: {
            details: e,
            title: t,
            artist: a
        },
        cache: "false",
        success: function(e) {},
        error: function(e, t) {
            processError(e, t, !1)
        }
    })
}
function incrementLRCDownloads(e) {
    $.ajax({
        type: "POST",
        url: "/lrc/increment-downloads",
        data: {
            lrc_id: e
        },
        cache: "false",
        success: function(e) {},
        error: function(e, t) {
            processError(e, t, !1)
        }
    })
}
function deleteLRCText(e) {
    $.ajax({
        type: "POST",
        url: "/lrc/" + e + "/destroy",
        data: {},
        cache: "false",
        success: function(t) {
            var a = $("#lrc_" + e + "_member_box");
            a.fadeOut(1e3, function() {
                a.remove()
            })
        },
        error: function(e, t) {
            processError(e, t, !1)
        }
    })
}
function toggleLRCAdsDisplay(e) {
    $.ajax({
        type: "POST",
        url: "/lrc/" + e + "/toggle-ads-display",
        data: {},
        cache: "false",
        success: function(t) {
            if (t = JSON.parse(t),
            t.success) {
                var a = $("#lrc_" + e + "_ads span.reading_text");
                a.text(t.display_text)
            }
        },
        error: function(e, t) {
            processError(e, t, !1)
        }
    })
}
function toggleIndexPage(e) {
    $.ajax({
        type: "POST",
        url: "/lrc/" + e + "/toggle-index-page",
        data: {},
        cache: "false",
        success: function(t) {
            if (t = JSON.parse(t),
            t.success) {
                var a = $("#lrc_" + e + "_index_page span.reading_text");
                a.text(t.display_text)
            }
        },
        error: function(e, t) {
            processError(e, t, !1)
        }
    })
}
function incrementSongLRCDownloads(e) {
    $.ajax({
        type: "POST",
        url: "/song/" + e + "/increment-downloads",
        data: {},
        cache: "false",
        success: function(e) {},
        error: function(e, t) {
            processError(e, t, !1)
        }
    })
}
function clearYTVideoPlayerInteractions(e) {
    $("#video_player_" + e + "_playing_users").hide(500).empty()
}
function checkYTVideoPlaying(e) {
    var t = ($("#youtube_player_" + e),
    youtubePlayers[e]);
    window[e + "_checking"] && window.clearInterval(window[e + "_checking"]),
    window[e + "_checking"] = window.setInterval(function() {
        t.j.playerState == YT.PlayerState.PLAYING ? sendYTVideoPlayingRequest(e) : (clearYTVideoPlayerInteractions(e),
        window[e + "_checking"] && window.clearInterval(window[e + "_checking"]))
    }, 15e3)
}
function sendYTVideoPlayRequest(e) {
    var t = $("#youtube_player_" + e)
      , a = (youtubePlayers[e],
    t.attr("data-video-id"))
      , n = t.attr("data-player-name")
      , i = t.attr("data-page");
    $.ajax({
        type: "POST",
        url: "/video/" + a + "/played",
        data: {
            player: n,
            page: i
        },
        cache: "false",
        success: function(e) {
            e.staff_message && addStaffError(e.staff_message)
        },
        error: function(e, t) {
            processError(e, t, !1)
        }
    })
}
function getYTVideoPlayedUsers(e) {
    var t = $("#youtube_player_" + e)
      , a = (youtubePlayers[e],
    t.attr("data-video-id"))
      , n = document.getElementById("video_player_" + e + "_played_users");
    $.ajax({
        type: "GET",
        url: "/video/" + a + "/played-users",
        data: {},
        cache: "false",
        success: function(e) {
            e.success ? n.innerHTML = e.view : e.staff_message && addStaffError(e.staff_message)
        }
    })
}
function sendYTVideoPlayingRequest(e) {
    var t = $("#youtube_player_" + e)
      , a = (youtubePlayers[e],
    t.attr("data-video-id"))
      , n = t.attr("data-player-name")
      , i = t.attr("data-page")
      , r = document.getElementById("video_player_" + e + "_playing_users");
    $.ajax({
        type: "POST",
        url: "/video/" + a + "/playing",
        data: {
            player: n,
            page: i
        },
        cache: "false",
        success: function(e) {
            e.success ? r.innerHTML = e.view : e.staff_message && addStaffError(e.staff_message)
        }
    })
}
function sendYTVideoEndedRequest(e) {
    var t = $("#youtube_player_" + e)
      , a = (youtubePlayers[e],
    t.attr("data-video-id"))
      , n = t.attr("data-player-name")
      , i = t.attr("data-page");
    $.ajax({
        type: "POST",
        url: "/video/" + a + "/ended",
        data: {
            player: n,
            page: i
        },
        cache: "false",
        success: function(e) {
            e.staff_message && addStaffError(e.staff_message)
        }
    })
}
function clearVideoPlayerInteractions(e) {
    var t = e.attr("id");
    $("#" + t + "_playing_users").hide(500).empty()
}
function checkVideoPlaying(e) {
    var t = e.attr("id");
    window[t + "_checking"] && window.clearInterval(window[t + "_checking"]),
    window[t + "_checking"] = window.setInterval(function() {
        e.data().jPlayer.status.currentTime > 0 ? sendVideoPlayingRequest(e) : (clearVideoPlayerInteractions(e),
        window[t + "_checking"] && window.clearInterval(window[t + "_checking"]))
    }, 15e3)
}
function sendVideoPlayRequest(e) {
    var t = e.attr("id")
      , a = e.data().jPlayer.status.media.id
      , n = document.getElementById("info_" + t).getAttribute("data-page");
    $.ajax({
        type: "POST",
        url: "/video/" + a + "/played",
        data: {
            player: t,
            page: n
        },
        cache: "false",
        success: function(e) {
            e.staff_message && addStaffError(e.staff_message)
        }
    })
}
function getVideoPlayedUsers(e) {
    var t = e.data().jPlayer.status.media.id
      , a = e.attr("id")
      , n = document.getElementById(a + "_played_users");
    $.ajax({
        type: "GET",
        url: "/video/" + t + "/played-users",
        data: {},
        cache: "false",
        success: function(e) {
            e.success ? n.innerHTML = e.view : e.staff_message && addStaffError(e.staff_message)
        }
    })
}
function sendVideoPlayingRequest(e) {
    var t = e.data().jPlayer.status.media.id
      , a = e.attr("id")
      , n = document.getElementById("info_" + a).getAttribute("data-page")
      , i = document.getElementById(a + "_playing_users");
    $.ajax({
        type: "POST",
        url: "/video/" + t + "/playing",
        data: {
            player: a,
            page: n
        },
        cache: "false",
        success: function(e) {
            e.success ? i.innerHTML = e.view : e.staff_message && addStaffError(e.staff_message)
        }
    })
}
function sendVideoEndedRequest(e) {
    var t = e.data().jPlayer.status.media.id
      , a = e.attr("id")
      , n = document.getElementById("info_" + a).getAttribute("data-page");
    $.ajax({
        type: "POST",
        url: "/video/" + t + "/ended",
        data: {
            player: a,
            page: n
        },
        cache: "false",
        success: function(e) {
            e.staff_message && addStaffError(e.staff_message)
        }
    })
}
function changeLocationInputStyle() {
    var e = document.getElementById("location_input_tag")
      , t = document.getElementById("location_input_cascade");
    "none" == e.style.display ? (e.style.display = "block",
    t.style.display = "none") : (e.style.display = "none",
    t.style.display = "block")
}
function setDatePicker(e) {
    var t = e.id
      , a = t.split("_")[0]
      , n = document.getElementById(a + "_day")
      , i = document.getElementById(a + "_month")
      , r = document.getElementById(a + "_year")
      , s = document.getElementById(a);
    "" == r.value | "" == i.value | "" == n.value ? s.value = null : s.value = r.value + "-" + i.value + "-" + n.value
}
function refreshZone(e) {
    $.ajax({
        type: "GET",
        url: "/location/country/" + e.value + "/zones",
        data: {},
        cache: "false",
        success: function(e, t, a) {
            zone = document.getElementById("zone"),
            zone.innerHTML = e,
            city = document.getElementById("city"),
            city.innerHTML = null
        },
        failure: function() {
            alert("Error Loading Zone")
        }
    })
}
function refreshCity(e) {
    $.ajax({
        type: "GET",
        url: "/location/zone/" + e.value + "/cities",
        data: {},
        cache: "false",
        success: function(e, t, a) {
            city = document.getElementById("city"),
            city.innerHTML = e
        },
        failure: function() {
            alert("Error Loading Zone")
        }
    })
}
function refreshBand(e) {
    if (0 == e.textContent.length) {
        var t = document.getElementById("entity_list_choice");
        t.innerHTML = "no search keys"
    } else
        $.ajax({
            type: "GET",
            url: "/band/list-choice/" + e.textContent,
            data: {},
            cache: "false",
            success: function(e, t, a) {
                var n = document.getElementById("entity_list_choice");
                n.innerHTML = e,
                n.style.display = "block"
            },
            failure: function() {
                alert("Error Loading Band")
            }
        })
}
function tagBandForCareer(e) {
    var t = document.getElementById("band_career_tagged");
    document.getElementById("editable_text").textContent,
    t.innerHTML;
    t.innerHTML = e.getAttribute("name");
    var a = document.getElementById("entity_list_choice");
    a.style.display = "none"
}
function displayChoice() {
    var e = document.getElementById("entity_list_choice");
    e.style.display = "block"
}
function insertTag() {
    var e = document.getElementById("editable_text")
      , t = e.textContent
      , a = t.substring(0, 15) + "My Band" + t.substring(15, t.length);
    e.textContent = a
}
function proceedCareerTag() {
    alert("ready to submit")
}
function refreshMusician(e) {
    if (0 == e.textContent.length) {
        var t = document.getElementById("musician_list_choice");
        t.innerHTML = "no search keys"
    } else
        $.ajax({
            type: "GET",
            url: "/musician/list-choice/" + e.textContent,
            data: {},
            cache: "false",
            success: function(e, t, a) {
                var n = document.getElementById("musician_list_choice");
                n.innerHTML = e,
                n.style.display = "block"
            },
            failure: function() {
                alert("Error Loading Musicians")
            }
        })
}
function tag_musician(e) {
    var t = document.getElementById("musician_career_tagged");
    document.getElementById("editable_musician_text").textContent,
    t.innerHTML;
    t.innerHTML = e.getAttribute("name");
    var a = document.getElementById("musician_tagged_input");
    a.value = e.id;
    var n = document.getElementById("musician_list_choice");
    n.style.display = "none"
}
function displayMusicianChoice() {
    var e = document.getElementById("musician_list_choice");
    e.style.display = "block"
}
function updateSongOccasions(e) {
    clearSongOccasions(e)
}
function clearSongOccasions(e) {
    var t = $("select[name='occasion_category_id']").get(0)
      , a = $("select[name='occasion_title_id']").get(0)
      , n = $("select[name='occasion_id']").get(0);
    t.setAttribute("data-activated", 0),
    a.setAttribute("data-activated", 0),
    n.setAttribute("data-activated", 0),
    e.setAttribute("data-activated", 1),
    t.style.display = "display:inline-block",
    a.style.display = "display:inline-block",
    n.style.display = "display:inline-block",
    hideSongOccasions()
}
function hideSongOccasions() {
    var e = $("select[name='occasion_category_id']").get(0)
      , t = $("select[name='occasion_title_id']").get(0)
      , a = $("select[name='occasion_id']").get(0);
    1 != e.getAttribute("data-activated") && clearSelected(e),
    1 != t.getAttribute("data-activated") && clearSelected(t),
    1 != a.getAttribute("data-activated") && clearSelected(a)
}
function processForm(e) {
    e.getAttribute("data-code");
    e.parentNode.parentNode.submit()
}
function refreshEntity(e) {
    null != searchTimeout && window.clearTimeout(searchTimeout),
    searchTimeout = window.setTimeout(function() {
        var t = e.getAttribute("data-for-input").toLowerCase()
          , a = e.getAttribute("data-entity").toLowerCase()
          , n = e.getAttribute("data-where-key")
          , i = e.getAttribute("data-where-val");
        null == n ? arrayData = {
            "for": t
        } : arrayData = {
            "for": t,
            whereKey: n,
            whereVal: i
        };
        var r = e.getAttribute("data-url");
        if (r = r ? r + "/" + e.textContent : "/" + a + "/list-choice/" + e.textContent,
        0 == e.textContent.length | " " == e.textContent) {
            var s = document.getElementById(t + "_list_results");
            s.innerHTML = "no search keys"
        } else
            $.ajax({
                type: "GET",
                url: r,
                data: arrayData,
                cache: "false",
                success: function(e, a, n) {
                    if (1 == e.success) {
                        var i = document.getElementById(t + "_list_results");
                        i.innerHTML = e.view,
                        i.style.display = "block"
                    } else
                        alert(e.message)
                },
                failure: function() {
                    alert("Error Loading " + a)
                }
            })
    }, 1e3)
}
function tagEntity(e) {
    var t = e.getAttribute("data-for")
      , a = document.getElementById(t + "_tagged");
    a.innerHTML = e.getAttribute("name");
    var n = document.getElementById(t + "_tagged_input_entity_id");
    n.value = e.id;
    var i = document.getElementById(t + "_tagged_input_entity_name");
    i.value = e.getAttribute("data-entity");
    var r = document.getElementById(t + "_list_choice");
    r.style.display = "none"
}
function displayEntityChoice(e) {
    var t = e.id.split("_")[0]
      , a = document.getElementById(t + "_list_choice");
    a.style.display = "block"
}
var albumPlayerPlaylist, linksAdded = !1, mySongList, geocoder, map, menuTimeout = 500, menuCloseTimer, lastLink;
$(document).ready(function() {
    var e = $("#facebook_connect_signup").get(0);
    e && (e.onclick = function() {
        alert("Facebook is loading. Please try again in a few seconds or reload Page!")
    }
    ,
    e.firstElementChild.style.backgroundColor = "#CCC");
    var t = $("#facebook_connect_login").get(0);
    t && (t.onclick = function() {
        alert("Facebook is loading. Please try again in a few seconds or reload Page!")
    }
    ,
    t.firstElementChild.style.backgroundColor = "#CCC")
}),
window.fbAsyncInit = function() {
    $.ajaxSetup({
        cache: !0
    }),
    FB.init({
        appId: $("#facebook_id").val(),
        cookie: !0,
        xfbml: !0,
        version: "v2.8"
    });
    var e = $("#facebook_connect_signup").get(0);
    e && (e.onclick = function() {
        fbLogin("signup")
    }
    ,
    e.firstElementChild.style.backgroundColor = null);
    var t = $("#facebook_connect_login").get(0);
    t && (t.onclick = function() {
        fbLogin("login")
    }
    ,
    t.firstElementChild.style.backgroundColor = null),
    FB.Event.subscribe("edge.create", function(e) {})
}
,
function(e, t, a) {
    var n, i = e.getElementsByTagName(t)[0];
    e.getElementById(a) || (n = e.createElement(t),
    n.id = a,
    n.src = "https://connect.facebook.net/en_US/sdk.js",
    i.parentNode.insertBefore(n, i))
}(document, "script", "facebook-jssdk"),
searchTimeout = null,
function() {
    var e = function(e) {
        if (this.divID = "lyricer",
        this.currentcss = "lyricer-current-line",
        this.lineidPrefix = "lyricer-line",
        this.showLines = 8,
        this.enableDummyLines = !0,
        this.useTags = !0,
        this.clickable = !0,
        this.clickEventName = "lyricerclick",
        this.clickTimeEventName = "lyricertimeclick",
        this.currentLine = 0,
        e)
            for (var t in e)
                "undefined" != typeof this[t] && e.hasOwnProperty(t) && (this[t] = e[t]);
        this.useTags || (this.clickable = !1),
        this.lineidPrefix = this.divID + "-line",
        this.tags = {},
        this.lrc = [],
        this.rangeLrc = []
    };
    e.prototype.setLrc = function(e) {
        this.rawLrc = e;
        for (var a = /\[([a-z]+):(.*)\].*/, n = /(\[[0-9.:\[\]]*\])+(.*)/, i = /\[([0-9]+):([0-9.]+)\]/, r = e.split(/[\r\n]/), s = /^\[(.+)\]$/, o = 0; o < r.length; o++)
            if (this.useTags) {
                var l = a.exec(r[o]);
                if (l && l[0]) {
                    this.tags[l[1]] = l[2];
                    continue
                }
                var c = n.exec(r[o]);
                if (c && c[0]) {
                    var d = c[1].replace(/\]\[/g, "],[").split(",");
                    if (d)
                        for (var u = 0; u < d.length; u++) {
                            var g = i.exec(d[u]);
                            g && g[0] && this.lrc.push({
                                starttime: 60 * parseInt(g[1], 10) + parseFloat(g[2]),
                                line: c[2]
                            })
                        }
                    else
                        this.lrc.push({
                            starttime: .01,
                            line: c[1]
                        })
                } else {
                    var m = s.exec(r[o]);
                    m && m[0] || "" == r[o] ? this.lrc.push({
                        starttime: -1,
                        line: r[o]
                    }) : this.lrc.push({
                        starttime: 0,
                        line: r[o]
                    })
                }
            } else
                this.lrc.push({
                    starttime: -1,
                    line: r[o]
                });
        if (this.enableDummyLines)
            for (var o = 0; o < this.showLines; o++)
                this.rangeLrc.push({
                    starttime: -1,
                    endtime: 0,
                    line: "&nbsp;"
                });
        for (var f = 0, p = "", o = 0; o < this.lrc.length; o++) {
            if (this.useTags)
                if (f = this.lrc[o].starttime,
                p = this.lrc[o].line,
                this.lrc[o + 1])
                    if (this.lrc[o + 1].starttime > -1)
                        endtime = this.lrc[o + 1].starttime;
                    else {
                        for (var y = 0; this.lrc[o + 1 + y] && this.lrc[o + 1 + y].starttime == -1 && (y += 1,
                        !(y > 5)); )
                            ;
                        this.lrc[o + 1 + y] ? endtime = this.lrc[o + 1 + y].starttime : endtime = 0
                    }
                else
                    endtime = 999.9;
            else
                f = this.lrc[o].starttime,
                p = this.lrc[o].line,
                endtime = 0;
            this.rangeLrc.push({
                starttime: f,
                endtime: endtime,
                line: p
            })
        }
        if (this.enableDummyLines)
            for (var o = 0; o < this.showLines; o++)
                this.rangeLrc.push({
                    starttime: -1,
                    endtime: 0,
                    line: "&nbsp;"
                });
        this.totalLines = this.rangeLrc.length,
        t(this),
        this.move(0)
    }
    ;
    var t = function(e) {
        e.currentLine = 0;
        var t = document.getElementById(e.divID);
        t.innerHTML = "";
        var n = document.createElement("ul");
        t.appendChild(n);
        for (var i = 0; i < e.totalLines; i++) {
            var r = document.createElement("li");
            r.innerHTML = e.rangeLrc[i].line,
            r.innerHTML || (r.innerHTML = "&nbsp"),
            r.setAttribute("id", e.lineidPrefix + i),
            e.clickable && (r.onclick = a(e, i),
            r.style.cursor = "pointer"),
            n.appendChild(r)
        }
        for (var i = 2 * e.showLines + 1; i < e.totalLines; i++)
            document.getElementById(e.lineidPrefix + i).style.display = "none"
    }
      , a = function(e, t) {
        return function() {
            var a = {
                time: e.rangeLrc[t].starttime
            }
              , n = new CustomEvent(e.clickEventName,{
                detail: a,
                bubbles: !0
            })
              , i = document.getElementById(e.lineidPrefix + t);
            i.dispatchEvent(n)
        }
    };
    e.prototype.move = function(e) {
        if (this.clickable) {
            for (var t = !1, a = 0; a < this.totalLines; a++)
                this.rangeLrc[a].starttime > 0 && e >= this.rangeLrc[a].starttime && (t = !0,
                this.currentLine = a);
            t && this.rangeLrc[this.currentLine].starttime > -1 && n(this, this.currentLine, !0)
        }
    }
    ;
    var n = function(e, t, a) {
        var n = t - e.showLines
          , i = t + e.showLines;
        i = Math.max(i, 2 * e.showLines);
        for (var r = 0; r < e.totalLines; r++) {
            var s = document.getElementById(e.lineidPrefix + r);
            r >= n && r <= i ? s.style.display = "block" : s.style.display = "none",
            r == t && a ? s.className = e.currentcss : s.className = ""
        }
    };
    e.prototype.setupFormatter = function() {
        i(this)
    }
    ;
    var i = function(e) {
        var t = document.getElementById(e.divID + "_times");
        t.innerHTML = "";
        var a = document.createElement("ul");
        a.className = "ul_formatter",
        t.appendChild(a);
        for (var n = 0; n < e.totalLines; n++) {
            var i = document.createElement("li");
            i.className = "li_formatter",
            i.innerHTML = e.rangeLrc[n].starttime > -1 ? e.rangeLrc[n].starttime.toFixed(2) : "-",
            i.innerHTML || (i.innerHTML = "&nbsp"),
            i.setAttribute("id", e.lineidPrefix + "_formatter_" + n),
            i.onclick = r(e, n),
            i.style.cursor = "pointer";
            var s = document.getElementById(e.lineidPrefix + n);
            i.style.height = s.clientHeight + "px",
            a.appendChild(i)
        }
    }
      , r = function(e, t) {
        return function() {
            var a = {
                time: e.rangeLrc[t].starttime,
                line_id: t
            }
              , n = new CustomEvent(e.clickTimeEventName,{
                detail: a,
                bubbles: !0
            })
              , i = document.getElementById(e.lineidPrefix + "_formatter_" + t);
            i.dispatchEvent(n)
        }
    };
    e.prototype.setFormatterTime = function(e, t) {
        if (this.rangeLrc[e] && !(this.rangeLrc[e].starttime < 0)) {
            var a = s(this, e);
            if (!(e > 0 && a >= 0 && (this.rangeLrc[a].starttime <= 0 || this.rangeLrc[a].starttime > t))) {
                var n = document.getElementById(this.lineidPrefix + "_formatter_" + e);
                this.rangeLrc[e].starttime = t;
                for (var i = !1, r = e - 1; !(i || r <= 0); ) {
                    if (this.rangeLrc[r] && this.rangeLrc[r].starttime != -1) {
                        this.rangeLrc[r].endtime = t;
                        break
                    }
                    r--
                }
                n.innerHTML = this.rangeLrc[e].starttime.toFixed(2),
                this.move(t)
            }
        }
    }
    ;
    var s = function(e, t) {
        return e.rangeLrc[t - 1] ? e.rangeLrc[t - 1].starttime >= 0 ? t - 1 : s(e, t - 1) : -1
    };
    e.prototype.formatNextLine = function(e) {
        return 0 == this.currentLine && 0 == this.rangeLrc[this.currentLine].starttime ? void this.setFormatterTime(this.currentLine, e) : void (this.rangeLrc[this.currentLine + 1] && (this.rangeLrc[this.currentLine + 1].starttime > 0 || (0 == this.rangeLrc[this.currentLine + 1].starttime ? this.setFormatterTime(this.currentLine + 1, e) : (this.currentLine += 1,
        this.formatNextLine(e)))))
    }
    ,
    e.prototype.isLRCTextFormatted = function() {
        for (var e = 0; e < this.totalLines; e++) {
            var t = this.rangeLrc[e].starttime;
            if (t > 0)
                return !0
        }
        return !1
    }
    ,
    e.prototype.generateLRCText = function(e) {
        for (var t in e)
            e[t] && ("length" == t && (e[t] = o(e[t])),
            this.tags[t] = e[t]);
        var a = "";
        for (var t in this.tags)
            a += "[" + t + ":" + this.tags[t] + "]\n";
        for (var n = 0; n < this.totalLines; n++) {
            var i = this.rangeLrc[n].starttime
              , r = "";
            this.rangeLrc[n].starttime >= 0 && (r = "[" + o(i) + "]"),
            a += r + this.rangeLrc[n].line,
            n < this.totalLines - 1 && (a += "\n")
        }
        return a
    }
    ;
    var o = function(e) {
        var t = Math.floor(e / 60)
          , a = (e % 60).toFixed(2)
          , n = l(t);
        return n += 0 == a ? ":0.00" : ":" + l(a)
    }
      , l = function(e) {
        return e < 10 && e >= 0 ? "0" + e : e
    };
    e.prototype.removeAllTags = function(e) {
        var t = this.rawLrc;
        if (e) {
            var a = /\[([a-z]+):(.*)\].*/gm;
            t = t.replace(a, "")
        }
        for (var i = 0; i < this.totalLines; i++)
            if (this.rangeLrc[i] && this.rangeLrc[i].starttime > 0) {
                this.rangeLrc[i].starttime = 0,
                this.rangeLrc[i].endtime = 0;
                var r = document.getElementById(this.lineidPrefix + "_formatter_" + i);
                r.innerHTML = this.rangeLrc[i].starttime.toFixed(2)
            }
        this.currentLine = 0,
        n(this, this.currentLine)
    }
    ,
    e.prototype.applyOffset = function(e) {
        for (var t = 0; t < this.totalLines; t++)
            if (this.rangeLrc[t] && this.rangeLrc[t].starttime > 0) {
                if (this.rangeLrc[t].starttime + e < 0)
                    return;
                this.rangeLrc[t].starttime = this.rangeLrc[t].starttime + e,
                this.rangeLrc[t].endtime = this.rangeLrc[t].endtime + e;
                var a = document.getElementById(this.lineidPrefix + "_formatter_" + t);
                this.rangeLrc[t].starttime > 0 && (a.innerHTML = this.rangeLrc[t].starttime.toFixed(2))
            }
    }
    ,
    window.Lyricer = e
}();
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {}
  , Prism = function() {
    var e = /\blang(?:uage)?-(\w+)\b/i
      , t = 0
      , a = _self.Prism = {
        manual: _self.Prism && _self.Prism.manual,
        util: {
            encode: function(e) {
                return e instanceof n ? new n(e.type,a.util.encode(e.content),e.alias) : "Array" === a.util.type(e) ? e.map(a.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
            },
            type: function(e) {
                return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]
            },
            objId: function(e) {
                return e.__id || Object.defineProperty(e, "__id", {
                    value: ++t
                }),
                e.__id
            },
            clone: function(e) {
                var t = a.util.type(e);
                switch (t) {
                case "Object":
                    var n = {};
                    for (var i in e)
                        e.hasOwnProperty(i) && (n[i] = a.util.clone(e[i]));
                    return n;
                case "Array":
                    return e.map(function(e) {
                        return a.util.clone(e)
                    })
                }
                return e
            }
        },
        languages: {
            extend: function(e, t) {
                var n = a.util.clone(a.languages[e]);
                for (var i in t)
                    n[i] = t[i];
                return n
            },
            insertBefore: function(e, t, n, i) {
                i = i || a.languages;
                var r = i[e];
                if (2 == arguments.length) {
                    n = arguments[1];
                    for (var s in n)
                        n.hasOwnProperty(s) && (r[s] = n[s]);
                    return r
                }
                var o = {};
                for (var l in r)
                    if (r.hasOwnProperty(l)) {
                        if (l == t)
                            for (var s in n)
                                n.hasOwnProperty(s) && (o[s] = n[s]);
                        o[l] = r[l]
                    }
                return a.languages.DFS(a.languages, function(t, a) {
                    a === i[e] && t != e && (this[t] = o)
                }),
                i[e] = o
            },
            DFS: function(e, t, n, i) {
                i = i || {};
                for (var r in e)
                    e.hasOwnProperty(r) && (t.call(e, r, e[r], n || r),
                    "Object" !== a.util.type(e[r]) || i[a.util.objId(e[r])] ? "Array" !== a.util.type(e[r]) || i[a.util.objId(e[r])] || (i[a.util.objId(e[r])] = !0,
                    a.languages.DFS(e[r], t, r, i)) : (i[a.util.objId(e[r])] = !0,
                    a.languages.DFS(e[r], t, null, i)))
            }
        },
        plugins: {},
        highlightAll: function(e, t) {
            var n = {
                callback: t,
                selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
            };
            a.hooks.run("before-highlightall", n);
            for (var i, r = n.elements || document.querySelectorAll(n.selector), s = 0; i = r[s++]; )
                a.highlightElement(i, e === !0, n.callback)
        },
        highlightElement: function(t, n, i) {
            for (var r, s, o = t; o && !e.test(o.className); )
                o = o.parentNode;
            o && (r = (o.className.match(e) || [, ""])[1].toLowerCase(),
            s = a.languages[r]),
            t.className = t.className.replace(e, "").replace(/\s+/g, " ") + " language-" + r,
            o = t.parentNode,
            /pre/i.test(o.nodeName) && (o.className = o.className.replace(e, "").replace(/\s+/g, " ") + " language-" + r);
            var l = t.textContent
              , c = {
                element: t,
                language: r,
                grammar: s,
                code: l
            };
            if (a.hooks.run("before-sanity-check", c),
            !c.code || !c.grammar)
                return c.code && (a.hooks.run("before-highlight", c),
                c.element.textContent = c.code,
                a.hooks.run("after-highlight", c)),
                void a.hooks.run("complete", c);
            if (a.hooks.run("before-highlight", c),
            n && _self.Worker) {
                var d = new Worker(a.filename);
                d.onmessage = function(e) {
                    c.highlightedCode = e.data,
                    a.hooks.run("before-insert", c),
                    c.element.innerHTML = c.highlightedCode,
                    i && i.call(c.element),
                    a.hooks.run("after-highlight", c),
                    a.hooks.run("complete", c)
                }
                ,
                d.postMessage(JSON.stringify({
                    language: c.language,
                    code: c.code,
                    immediateClose: !0
                }))
            } else
                c.highlightedCode = a.highlight(c.code, c.grammar, c.language),
                a.hooks.run("before-insert", c),
                c.element.innerHTML = c.highlightedCode,
                i && i.call(t),
                a.hooks.run("after-highlight", c),
                a.hooks.run("complete", c)
        },
        highlight: function(e, t, i) {
            var r = a.tokenize(e, t);
            return n.stringify(a.util.encode(r), i)
        },
        matchGrammar: function(e, t, n, i, r, s, o) {
            var l = a.Token;
            for (var c in n)
                if (n.hasOwnProperty(c) && n[c]) {
                    if (c == o)
                        return;
                    var d = n[c];
                    d = "Array" === a.util.type(d) ? d : [d];
                    for (var u = 0; u < d.length; ++u) {
                        var g = d[u]
                          , m = g.inside
                          , f = !!g.lookbehind
                          , p = !!g.greedy
                          , y = 0
                          , h = g.alias;
                        if (p && !g.pattern.global) {
                            var v = g.pattern.toString().match(/[imuy]*$/)[0];
                            g.pattern = RegExp(g.pattern.source, v + "g")
                        }
                        g = g.pattern || g;
                        for (var _ = i, b = r; _ < t.length; b += t[_].length,
                        ++_) {
                            var E = t[_];
                            if (t.length > e.length)
                                return;
                            if (!(E instanceof l)) {
                                g.lastIndex = 0;
                                var w = g.exec(E)
                                  , x = 1;
                                if (!w && p && _ != t.length - 1) {
                                    if (g.lastIndex = b,
                                    w = g.exec(e),
                                    !w)
                                        break;
                                    for (var T = w.index + (f ? w[1].length : 0), I = w.index + w[0].length, k = _, L = b, $ = t.length; $ > k && (I > L || !t[k].type && !t[k - 1].greedy); ++k)
                                        L += t[k].length,
                                        T >= L && (++_,
                                        b = L);
                                    if (t[_]instanceof l || t[k - 1].greedy)
                                        continue;
                                    x = k - _,
                                    E = e.slice(b, L),
                                    w.index -= b
                                }
                                if (w) {
                                    f && (y = w[1].length);
                                    var T = w.index + y
                                      , w = w[0].slice(y)
                                      , I = T + w.length
                                      , A = E.slice(0, T)
                                      , P = E.slice(I)
                                      , S = [_, x];
                                    A && (++_,
                                    b += A.length,
                                    S.push(A));
                                    var B = new l(c,m ? a.tokenize(w, m) : w,h,w,p);
                                    if (S.push(B),
                                    P && S.push(P),
                                    Array.prototype.splice.apply(t, S),
                                    1 != x && a.matchGrammar(e, t, n, _, b, !0, c),
                                    s)
                                        break
                                } else if (s)
                                    break
                            }
                        }
                    }
                }
        },
        tokenize: function(e, t) {
            var n = [e]
              , i = t.rest;
            if (i) {
                for (var r in i)
                    t[r] = i[r];
                delete t.rest
            }
            return a.matchGrammar(e, n, t, 0, 0, !1),
            n
        },
        hooks: {
            all: {},
            add: function(e, t) {
                var n = a.hooks.all;
                n[e] = n[e] || [],
                n[e].push(t)
            },
            run: function(e, t) {
                var n = a.hooks.all[e];
                if (n && n.length)
                    for (var i, r = 0; i = n[r++]; )
                        i(t)
            }
        }
    }
      , n = a.Token = function(e, t, a, n, i) {
        this.type = e,
        this.content = t,
        this.alias = a,
        this.length = 0 | (n || "").length,
        this.greedy = !!i
    }
    ;
    if (n.stringify = function(e, t, i) {
        if ("string" == typeof e)
            return e;
        if ("Array" === a.util.type(e))
            return e.map(function(a) {
                return n.stringify(a, t, e)
            }).join("");
        var r = {
            type: e.type,
            content: n.stringify(e.content, t, i),
            tag: "span",
            classes: ["token", e.type],
            attributes: {},
            language: t,
            parent: i
        };
        if (e.alias) {
            var s = "Array" === a.util.type(e.alias) ? e.alias : [e.alias];
            Array.prototype.push.apply(r.classes, s)
        }
        a.hooks.run("wrap", r);
        var o = Object.keys(r.attributes).map(function(e) {
            return e + '="' + (r.attributes[e] || "").replace(/"/g, "&quot;") + '"'
        }).join(" ");
        return "<" + r.tag + ' class="' + r.classes.join(" ") + '"' + (o ? " " + o : "") + ">" + r.content + "</" + r.tag + ">"
    }
    ,
    !_self.document)
        return _self.addEventListener ? (_self.addEventListener("message", function(e) {
            var t = JSON.parse(e.data)
              , n = t.language
              , i = t.code
              , r = t.immediateClose;
            _self.postMessage(a.highlight(i, a.languages[n], n)),
            r && _self.close()
        }, !1),
        _self.Prism) : _self.Prism;
    var i = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
    return i && (a.filename = i.src,
    a.manual || i.hasAttribute("data-manual") || ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(a.highlightAll) : window.setTimeout(a.highlightAll, 16) : document.addEventListener("DOMContentLoaded", a.highlightAll))),
    _self.Prism
}();
"undefined" != typeof module && module.exports && (module.exports = Prism),
"undefined" != typeof global && (global.Prism = Prism),
Prism.languages.markup = {
    comment: /<!--[\s\S]*?-->/,
    prolog: /<\?[\s\S]+?\?>/,
    doctype: /<!DOCTYPE[\s\S]+?>/i,
    cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
    tag: {
        pattern: /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,
        inside: {
            tag: {
                pattern: /^<\/?[^\s>\/]+/i,
                inside: {
                    punctuation: /^<\/?/,
                    namespace: /^[^\s>\/:]+:/
                }
            },
            "attr-value": {
                pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,
                inside: {
                    punctuation: [/^=/, {
                        pattern: /(^|[^\\])["']/,
                        lookbehind: !0
                    }]
                }
            },
            punctuation: /\/?>/,
            "attr-name": {
                pattern: /[^\s>\/]+/,
                inside: {
                    namespace: /^[^\s>\/:]+:/
                }
            }
        }
    },
    entity: /&#?[\da-z]{1,8};/i
},
Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity,
Prism.hooks.add("wrap", function(e) {
    "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
}),
Prism.languages.xml = Prism.languages.markup,
Prism.languages.html = Prism.languages.markup,
Prism.languages.mathml = Prism.languages.markup,
Prism.languages.svg = Prism.languages.markup,
Prism.languages.css = {
    comment: /\/\*[\s\S]*?\*\//,
    atrule: {
        pattern: /@[\w-]+?.*?(?:;|(?=\s*\{))/i,
        inside: {
            rule: /@[\w-]+/
        }
    },
    url: /url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
    selector: /[^{}\s][^{};]*?(?=\s*\{)/,
    string: {
        pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
    },
    property: /[\w-]+(?=\s*:)/i,
    important: /\B!important\b/i,
    "function": /[-a-z0-9]+(?=\()/i,
    punctuation: /[(){};:]/
},
Prism.languages.css.atrule.inside.rest = Prism.util.clone(Prism.languages.css),
Prism.languages.markup && (Prism.languages.insertBefore("markup", "tag", {
    style: {
        pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
        lookbehind: !0,
        inside: Prism.languages.css,
        alias: "language-css"
    }
}),
Prism.languages.insertBefore("inside", "attr-value", {
    "style-attr": {
        pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
        inside: {
            "attr-name": {
                pattern: /^\s*style/i,
                inside: Prism.languages.markup.tag.inside
            },
            punctuation: /^\s*=\s*['"]|['"]\s*$/,
            "attr-value": {
                pattern: /.+/i,
                inside: Prism.languages.css
            }
        },
        alias: "language-css"
    }
}, Prism.languages.markup.tag)),
Prism.languages.clike = {
    comment: [{
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0
    }, {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0
    }],
    string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
    },
    "class-name": {
        pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
        lookbehind: !0,
        inside: {
            punctuation: /[.\\]/
        }
    },
    keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    "boolean": /\b(?:true|false)\b/,
    "function": /[a-z0-9_]+(?=\()/i,
    number: /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
    operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
    punctuation: /[{}[\];(),.:]/
},
Prism.languages.javascript = Prism.languages.extend("clike", {
    keyword: /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
    number: /\b-?(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|\d*\.?\d+(?:[Ee][+-]?\d+)?|NaN|Infinity)\b/,
    "function": /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\s*\()/i,
    operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
}),
Prism.languages.insertBefore("javascript", "keyword", {
    regex: {
        pattern: /(^|[^\/])\/(?!\/)(\[[^\]\r\n]+]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
        lookbehind: !0,
        greedy: !0
    },
    "function-variable": {
        pattern: /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)\s*=>))/i,
        alias: "function"
    }
}),
Prism.languages.insertBefore("javascript", "string", {
    "template-string": {
        pattern: /`(?:\\[\s\S]|[^\\`])*`/,
        greedy: !0,
        inside: {
            interpolation: {
                pattern: /\$\{[^}]+\}/,
                inside: {
                    "interpolation-punctuation": {
                        pattern: /^\$\{|\}$/,
                        alias: "punctuation"
                    },
                    rest: Prism.languages.javascript
                }
            },
            string: /[\s\S]+/
        }
    }
}),
Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", {
    script: {
        pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
        lookbehind: !0,
        inside: Prism.languages.javascript,
        alias: "language-javascript"
    }
}),
Prism.languages.js = Prism.languages.javascript;
