$(function() {
    function e(e) {
        if (v = e.offsetLeft > o.offsetLeft ? 1 : e.offsetLeft < o.offsetLeft ? 2 : 0) {
            var n = .8 * Math.abs(e.offsetLeft - o.offsetLeft);
            e.index != y && (o.style.filter = "blur(2px)",
            o.style.WebkitFilter = "blur(2px)"),
            move(o, {
                left: e.offsetLeft,
                width: e.offsetWidth
            }, n, "easeOut", function() {
                switch (v) {
                case 1:
                    t();
                    break;
                case 2:
                    i();
                    break;
                default:
                    move(l, {
                        width: 0,
                        right: 0
                    }, 30),
                    move(f, {
                        width: 0,
                        left: 0
                    }, 30)
                }
                o.style.filter = "blur(0)",
                o.style.WebkitFilter = "blur(0)"
            }
            ),
            e.offsetLeft > o.offsetLeft ? (l.style.background = "#e15671",
            f.style.background = "yellow",
            move(l, {
                width: 40,
                right: -20
            }, 150),
            move(f, {
                width: 40,
                left: -20
            }, 150)) : e.offsetLeft < o.offsetLeft && (l.style.background = "yellow",
            f.style.background = "#e15671",
            move(l, {
                width: 40,
                right: -20
            }, 150),
            move(f, {
                width: 40,
                left: -20
            }, 150)),
            y = e.index
        }
    }
    function t() {
        move(l, {
            width: 0,
            right: 0
        }, 80, "linear", function() {
            l.style.background = "yellow",
            move(l, {
                width: 20,
                right: -10
            }, 80, "linear", function() {
                move(l, {
                    width: 0,
                    right: 0
                }, 50, "linear")
            }
            )
        }
        ),
        move(f, {
            width: 0,
            left: 0
        }, 80, "linear", function() {
            f.style.background = "#e15671",
            move(f, {
                width: 20,
                left: -10
            }, 80, "linear", function() {
                move(f, {
                    width: 0,
                    left: 0
                }, 50, "linear")
            }
            )
        }
        )
    }
    function i() {
        move(l, {
            width: 0,
            right: 0
        }, 80, "linear", function() {
            l.style.background = "yellow",
            move(l, {
                width: 20,
                right: -10
            }, 80, "linear", function() {
                move(l, {
                    width: 0,
                    right: 0
                }, 50, "linear")
            }
            )
        }
        ),
        move(f, {
            width: 0,
            left: 0
        }, 80, "linear", function() {
            f.style.background = "#e15671",
            move(f, {
                width: 20,
                left: -10
            }, 80, "linear", function() {
                move(f, {
                    width: 0,
                    left: 0
                }, 50, "linear")
            }
            )
        }
        )
    }
    var n = document.getElementsByTagName("nav")[0]
      , o = n.getElementsByClassName("box")[0]
      , l = n.getElementsByClassName("right")[0]
      , f = n.getElementsByClassName("left")[0]
      , a = n.getElementsByTagName("ul")[0]
      , s = a.getElementsByTagName("li")
      , c = s[initNum].offsetLeft
      , h = s[0].offsetTop
      , d = initNum
      , y = 0
      , v = 0
      , b = !0
      , p = 0;
    o.style.left = c + "px",
    o.style.top = h + "px",
    o.style.width = s[initNum].offsetWidth + "px";
    for (var w = 0; w < s.length; w++)
        s[w].index = w,
        s[w].onmouseenter = function() {
            clearTimeout(p),
            e(this)
        }
        ;
    a.onmouseleave = function() {
        p = setTimeout(function() {
            e(s[d])
        }
        , 100)
    }
}
);
