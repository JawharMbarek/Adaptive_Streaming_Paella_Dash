!function a(b, c, d) {
    function e(g, h) {
        if (!c[g]) {
            if (!b[g]) {
                var i = "function" == typeof require && require;
                if (!h && i) return i(g, !0);
                if (f) return f(g, !0);
                var j = new Error("Cannot find module '" + g + "'");
                throw j.code = "MODULE_NOT_FOUND", j
            }
            var k = c[g] = {exports: {}};
            b[g][0].call(k.exports, function (a) {
                var c = b[g][1][a];
                return e(c ? c : a)
            }, k, k.exports, a, b, c, d)
        }
        return c[g].exports
    }

    for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
    return e
}({
    1: [function (b, c, d) {
        "use strict";
        var e = {};
        e.encode = function (a) {
            for (var b = [], c = 0; c < a.length; ++c) {
                var d = a.charCodeAt(c);
                d < 128 ? b.push(d) : d < 2048 ? (b.push(192 | d >> 6), b.push(128 | 63 & d)) : d < 65536 ? (b.push(224 | d >> 12), b.push(128 | 63 & d >> 6), b.push(128 | 63 & d)) : (b.push(240 | d >> 18), b.push(128 | 63 & d >> 12), b.push(128 | 63 & d >> 6), b.push(128 | 63 & d))
            }
            return b
        }, e.decode = function (a) {
            for (var b = [], c = 0; c < a.length;) {
                var d = a[c++];
                d < 128 || (d < 224 ? (d = (31 & d) << 6, d |= 63 & a[c++]) : d < 240 ? (d = (15 & d) << 12, d |= (63 & a[c++]) << 6, d |= 63 & a[c++]) : (d = (7 & d) << 18, d |= (63 & a[c++]) << 12, d |= (63 & a[c++]) << 6, d |= 63 & a[c++])), b.push(String.fromCharCode(d))
            }
            return b.join("")
        };
        var f = {};
        !function (b) {
            var c = function (a) {
                for (var c = 0, d = [], e = 0 | a.length / 3; 0 < e--;) {
                    var f = (a[c] << 16) + (a[c + 1] << 8) + a[c + 2];
                    c += 3, d.push(b.charAt(63 & f >> 18)), d.push(b.charAt(63 & f >> 12)), d.push(b.charAt(63 & f >> 6)), d.push(b.charAt(63 & f))
                }
                if (2 == a.length - c) {
                    var f = (a[c] << 16) + (a[c + 1] << 8);
                    d.push(b.charAt(63 & f >> 18)), d.push(b.charAt(63 & f >> 12)), d.push(b.charAt(63 & f >> 6)), d.push("=")
                } else if (1 == a.length - c) {
                    var f = a[c] << 16;
                    d.push(b.charAt(63 & f >> 18)), d.push(b.charAt(63 & f >> 12)), d.push("==")
                }
                return d.join("")
            }, d = function () {
                for (var a = [], c = 0; c < b.length; ++c) a[b.charCodeAt(c)] = c;
                return a["=".charCodeAt(0)] = 0, a
            }(), g = function (a) {
                for (var b = 0, c = [], e = 0 | a.length / 4; 0 < e--;) {
                    var f = (d[a.charCodeAt(b)] << 18) + (d[a.charCodeAt(b + 1)] << 12) + (d[a.charCodeAt(b + 2)] << 6) + d[a.charCodeAt(b + 3)];
                    c.push(255 & f >> 16), c.push(255 & f >> 8), c.push(255 & f), b += 4
                }
                return c && ("=" == a.charAt(b - 2) ? (c.pop(), c.pop()) : "=" == a.charAt(b - 1) && c.pop()), c
            }, h = {};
            h.encode = function (a) {
                for (var b = [], c = 0; c < a.length; ++c) b.push(a.charCodeAt(c));
                return b
            }, h.decode = function (b) {
                for (var c = 0; c < s.length; ++c) a[c] = String.fromCharCode(a[c]);
                return a.join("")
            }, f.decodeArray = function (a) {
                var b = g(a);
                return new Uint8Array(b)
            }, f.encodeASCII = function (a) {
                var b = h.encode(a);
                return c(b)
            }, f.decodeASCII = function (a) {
                var b = g(a);
                return h.decode(b)
            }, f.encode = function (a) {
                var b = e.encode(a);
                return c(b)
            }, f.decode = function (a) {
                var b = g(a);
                return e.decode(b)
            }
        }("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), "undefined" != typeof d && (d.decode = f.decode, d.decodeArray = f.decodeArray)
    }, {}],
    2: [function (a, b, c) {
        "use strict";
        !function (a) {
            var b = {
                    42: 225,
                    92: 233,
                    94: 237,
                    95: 243,
                    96: 250,
                    123: 231,
                    124: 247,
                    125: 209,
                    126: 241,
                    127: 9608,
                    128: 174,
                    129: 176,
                    130: 189,
                    131: 191,
                    132: 8482,
                    133: 162,
                    134: 163,
                    135: 9834,
                    136: 224,
                    137: 32,
                    138: 232,
                    139: 226,
                    140: 234,
                    141: 238,
                    142: 244,
                    143: 251,
                    144: 193,
                    145: 201,
                    146: 211,
                    147: 218,
                    148: 220,
                    149: 252,
                    150: 8216,
                    151: 161,
                    152: 42,
                    153: 8217,
                    154: 9473,
                    155: 169,
                    156: 8480,
                    157: 8226,
                    158: 8220,
                    159: 8221,
                    160: 192,
                    161: 194,
                    162: 199,
                    163: 200,
                    164: 202,
                    165: 203,
                    166: 235,
                    167: 206,
                    168: 207,
                    169: 239,
                    170: 212,
                    171: 217,
                    172: 249,
                    173: 219,
                    174: 171,
                    175: 187,
                    176: 195,
                    177: 227,
                    178: 205,
                    179: 204,
                    180: 236,
                    181: 210,
                    182: 242,
                    183: 213,
                    184: 245,
                    185: 123,
                    186: 125,
                    187: 92,
                    188: 94,
                    189: 95,
                    190: 124,
                    191: 8764,
                    192: 196,
                    193: 228,
                    194: 214,
                    195: 246,
                    196: 223,
                    197: 165,
                    198: 164,
                    199: 9475,
                    200: 197,
                    201: 229,
                    202: 216,
                    203: 248,
                    204: 9487,
                    205: 9491,
                    206: 9495,
                    207: 9499
                }, c = function (a) {
                    var c = a;
                    return b.hasOwnProperty(a) && (c = b[a]), String.fromCharCode(c)
                }, d = 15, e = 32, f = {17: 1, 18: 3, 21: 5, 22: 7, 23: 9, 16: 11, 19: 12, 20: 14},
                g = {17: 2, 18: 4, 21: 6, 22: 8, 23: 10, 19: 13, 20: 15},
                h = {25: 1, 26: 3, 29: 5, 30: 7, 31: 9, 24: 11, 27: 12, 28: 14},
                i = {25: 2, 26: 4, 29: 6, 30: 8, 31: 10, 27: 13, 28: 15},
                j = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"], k = {
                    verboseFilter: {DATA: 3, DEBUG: 3, INFO: 2, WARNING: 2, TEXT: 1, ERROR: 0},
                    time: null,
                    verboseLevel: 0,
                    setTime: function (a) {
                        this.time = a
                    },
                    log: function (a, b) {
                        var c = this.verboseFilter[a];
                        this.verboseLevel >= c && console.log(this.time + " [" + a + "] " + b)
                    }
                }, l = function (a) {
                    for (var b = [], c = 0; c < a.length; c++) b.push(a[c].toString(16));
                    return b
                }, m = function (a, b, c, d, e) {
                    this.foreground = a || "white", this.underline = b || !1, this.italics = c || !1, this.background = d || "black", this.flash = e || !1
                };
            m.prototype = {
                reset: function () {
                    this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1
                }, setStyles: function (a) {
                    for (var b = ["foreground", "underline", "italics", "background", "flash"], c = 0; c < b.length; c++) {
                        var d = b[c];
                        a.hasOwnProperty(d) && (this[d] = a[d])
                    }
                }, isDefault: function () {
                    return "white" === this.foreground && !this.underline && !this.italics && "black" === this.background && !this.flash
                }, equals: function (a) {
                    return this.foreground === a.foreground && this.underline === a.underline && this.italics === a.italics && this.background === a.background && this.flash === a.flash
                }, copy: function (a) {
                    this.foreground = a.foreground, this.underline = a.underline, this.italics = a.italics, this.background = a.background, this.flash = a.flash
                }, toString: function () {
                    return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash
                }
            };
            var n = function (a, b, c, d, e, f) {
                this.uchar = a || " ", this.penState = new m(b, c, d, e, f)
            };
            n.prototype = {
                reset: function () {
                    this.uchar = " ", this.penState.reset()
                }, setChar: function (a, b) {
                    this.uchar = a, this.penState.copy(b)
                }, setPenState: function (a) {
                    this.penState.copy(a)
                }, equals: function (a) {
                    return this.uchar === a.uchar && this.penState.equals(a.penState)
                }, copy: function (a) {
                    this.uchar = a.uchar, this.penState.copy(a.penState)
                }, isEmpty: function () {
                    return " " === this.uchar && this.penState.isDefault()
                }
            };
            var o = function () {
                this.chars = [];
                for (var a = 0; a < e; a++) this.chars.push(new n);
                this.pos = 0, this.currPenState = new m
            };
            o.prototype = {
                equals: function (a) {
                    for (var b = !0, c = 0; c < e; c++) if (!this.chars[c].equals(a.chars[c])) {
                        b = !1;
                        break
                    }
                    return b
                }, copy: function (a) {
                    for (var b = 0; b < e; b++) this.chars[b].copy(a.chars[b])
                }, isEmpty: function () {
                    for (var a = !0, b = 0; b < e; b++) if (!this.chars[b].isEmpty()) {
                        a = !1;
                        break
                    }
                    return a
                }, setCursor: function (a) {
                    this.pos !== a && (this.pos = a), this.pos < 0 ? (k.log("ERROR", "Negative cursor position " + this.pos), this.pos = 0) : this.pos > e && (k.log("ERROR", "Too large cursor position " + this.pos), this.pos = e)
                }, moveCursor: function (a) {
                    var b = this.pos + a;
                    if (a > 1) for (var c = this.pos + 1; c < b + 1; c++) this.chars[c].setPenState(this.currPenState);
                    this.setCursor(b)
                }, backSpace: function () {
                    this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState)
                }, insertChar: function (a) {
                    a >= 144 && this.backSpace();
                    var b = c(a);
                    return this.pos >= e ? void k.log("ERROR", "Cannot insert " + a.toString(16) + " (" + b + ") at position " + this.pos + ". Skipping it!") : (this.chars[this.pos].setChar(b, this.currPenState), void this.moveCursor(1))
                }, clearFromPos: function (a) {
                    var b;
                    for (b = a; b < e; b++) this.chars[b].reset()
                }, clear: function () {
                    this.clearFromPos(0), this.pos = 0, this.currPenState.reset()
                }, clearToEndOfRow: function () {
                    this.clearFromPos(this.pos)
                }, getTextString: function () {
                    for (var a = [], b = !0, c = 0; c < e; c++) {
                        var d = this.chars[c].uchar;
                        " " !== d && (b = !1), a.push(d)
                    }
                    return b ? "" : a.join("")
                }, setPenStyles: function (a) {
                    this.currPenState.setStyles(a);
                    var b = this.chars[this.pos];
                    b.setPenState(this.currPenState)
                }
            };
            var p = function () {
                this.rows = [];
                for (var a = 0; a < d; a++) this.rows.push(new o);
                this.currRow = d - 1, this.nrRollUpRows = null, this.reset()
            };
            p.prototype = {
                reset: function () {
                    for (var a = 0; a < d; a++) this.rows[a].clear();
                    this.currRow = d - 1
                }, equals: function (a) {
                    for (var b = !0, c = 0; c < d; c++) if (!this.rows[c].equals(a.rows[c])) {
                        b = !1;
                        break
                    }
                    return b
                }, copy: function (a) {
                    for (var b = 0; b < d; b++) this.rows[b].copy(a.rows[b])
                }, isEmpty: function () {
                    for (var a = !0, b = 0; b < d; b++) if (!this.rows[b].isEmpty()) {
                        a = !1;
                        break
                    }
                    return a
                }, backSpace: function () {
                    var a = this.rows[this.currRow];
                    a.backSpace()
                }, clearToEndOfRow: function () {
                    var a = this.rows[this.currRow];
                    a.clearToEndOfRow()
                }, insertChar: function (a) {
                    var b = this.rows[this.currRow];
                    b.insertChar(a)
                }, setPen: function (a) {
                    var b = this.rows[this.currRow];
                    b.setPenStyles(a)
                }, moveCursor: function (a) {
                    var b = this.rows[this.currRow];
                    b.moveCursor(a)
                }, setCursor: function (a) {
                    k.log("INFO", "setCursor: " + a);
                    var b = this.rows[this.currRow];
                    b.setCursor(a)
                }, setPAC: function (a) {
                    k.log("INFO", "pacData = " + JSON.stringify(a));
                    var b = a.row - 1;
                    this.nrRollUpRows && b < this.nrRollUpRows - 1 && (b = this.nrRollUpRows - 1), this.currRow = b;
                    var c = this.rows[this.currRow];
                    if (null !== a.indent) {
                        var d = a.indent, e = Math.max(d - 1, 0);
                        c.setCursor(a.indent), a.color = c.chars[e].penState.foreground
                    }
                    var f = {
                        foreground: a.color,
                        underline: a.underline,
                        italics: a.italics,
                        background: "black",
                        flash: !1
                    };
                    this.setPen(f)
                }, setBkgData: function (a) {
                    k.log("INFO", "bkgData = " + JSON.stringify(a)), this.backSpace(), this.setPen(a), this.insertChar(32)
                }, setRollUpRows: function (a) {
                    this.nrRollUpRows = a
                }, rollUp: function () {
                    if (null === this.nrRollUpRows) return void k.log("DEBUG", "roll_up but nrRollUpRows not set yet");
                    k.log("TEXT", this.getDisplayText());
                    var a = this.currRow + 1 - this.nrRollUpRows, b = this.rows.splice(a, 1)[0];
                    b.clear(), this.rows.splice(this.currRow, 0, b), k.log("INFO", "Rolling up")
                }, getDisplayText: function (a) {
                    a = a || !1;
                    for (var b = [], c = "", e = -1, f = 0; f < d; f++) {
                        var g = this.rows[f].getTextString();
                        g && (e = f + 1, a ? b.push("Row " + e + ': "' + g + '"') : b.push(g.trim()))
                    }
                    return b.length > 0 && (c = a ? "[" + b.join(" | ") + "]" : b.join("\n")), c
                }, getTextAndFormat: function () {
                    return this.rows
                }
            };
            var q = function (a, b) {
                this.chNr = a, this.outputFilter = b, this.mode = null, this.verbose = 0, this.displayedMemory = new p, this.nonDisplayedMemory = new p, this.lastOutputScreen = new p, this.currRollUpRow = this.displayedMemory.rows[d - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null
            };
            q.prototype = {
                modes: ["MODE_ROLL-UP", "MODE_POP-ON", "MODE_PAINT-ON", "MODE_TEXT"], reset: function () {
                    this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.currRollUpRow = this.displayedMemory.rows[d - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.lastCueEndTime = null
                }, getHandler: function () {
                    return this.outputFilter
                }, setHandler: function (a) {
                    this.outputFilter = a
                }, setPAC: function (a) {
                    this.writeScreen.setPAC(a)
                }, setBkgData: function (a) {
                    this.writeScreen.setBkgData(a)
                }, setMode: function (a) {
                    a !== this.mode && (this.mode = a, k.log("INFO", "MODE=" + a), "MODE_POP-ON" == this.mode ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), "MODE_ROLL-UP" !== this.mode && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = a)
                }, insertChars: function (a) {
                    for (var b = 0; b < a.length; b++) this.writeScreen.insertChar(a[b]);
                    var c = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
                    k.log("INFO", c + ": " + this.writeScreen.getDisplayText(!0)), "MODE_PAINT-ON" !== this.mode && "MODE_ROLL-UP" !== this.mode || (k.log("TEXT", "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)), this.outputDataUpdate())
                }, cc_RCL: function () {
                    k.log("INFO", "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON")
                }, cc_BS: function () {
                    k.log("INFO", "BS - BackSpace"), "MODE_TEXT" !== this.mode && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate())
                }, cc_AOF: function () {
                }, cc_AON: function () {
                }, cc_DER: function () {
                    k.log("INFO", "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate()
                }, cc_RU: function (a) {
                    k.log("INFO", "RU(" + a + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(a)
                }, cc_FON: function () {
                    k.log("INFO", "FON - Flash On"), this.writeScreen.setPen({flash: !0})
                }, cc_RDC: function () {
                    k.log("INFO", "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON")
                }, cc_TR: function () {
                    k.log("INFO", "TR"), this.setMode("MODE_TEXT")
                }, cc_RTD: function () {
                    k.log("INFO", "RTD"), this.setMode("MODE_TEXT")
                }, cc_EDM: function () {
                    k.log("INFO", "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate()
                }, cc_CR: function () {
                    k.log("CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate()
                }, cc_ENM: function () {
                    k.log("INFO", "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset()
                }, cc_EOC: function () {
                    if (k.log("INFO", "EOC - End Of Caption"), "MODE_POP-ON" === this.mode) {
                        var a = this.displayedMemory;
                        this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = a, this.writeScreen = this.nonDisplayedMemory, k.log("TEXT", "DISP: " + this.displayedMemory.getDisplayText())
                    }
                    this.outputDataUpdate()
                }, cc_TO: function (a) {
                    k.log("INFO", "TO(" + a + ") - Tab Offset"), this.writeScreen.moveCursor(a)
                }, cc_MIDROW: function (a) {
                    var b = {flash: !1};
                    if (b.underline = a % 2 === 1, b.italics = a >= 46, b.italics) b.foreground = "white"; else {
                        var c = Math.floor(a / 2) - 16,
                            d = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"];
                        b.foreground = d[c]
                    }
                    k.log("INFO", "MIDROW: " + JSON.stringify(b)), this.writeScreen.setPen(b)
                }, outputDataUpdate: function () {
                    var a = k.time;
                    null !== a && this.outputFilter && (this.outputFilter.updateData && this.outputFilter.updateData(a, this.displayedMemory), null !== this.cueStartTime || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, a, this.lastOutputScreen), this.cueStartTime = this.displayedMemory.isEmpty() ? null : a) : this.cueStartTime = a, this.lastOutputScreen.copy(this.displayedMemory))
                }, cueSplitAtTime: function (a) {
                    this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, a, this.displayedMemory), this.cueStartTime = a))
                }
            };
            var r = function (a, b, c) {
                this.field = a || 1, this.outputs = [b, c], this.channels = [new q(1, b), new q(2, c)], this.currChNr = -1, this.lastCmdA = null, this.lastCmdB = null, this.bufferedData = [], this.startTime = null, this.lastTime = null, this.dataCounters = {
                    padding: 0,
                    char: 0,
                    cmd: 0,
                    other: 0
                }
            };
            r.prototype = {
                getHandler: function (a) {
                    return this.channels[a].getHandler()
                }, setHandler: function (a, b) {
                    this.channels[a].setHandler(b)
                }, addData: function (a, b) {
                    var c, d, e, f = !1;
                    this.lastTime = a, k.setTime(a);
                    for (var g = 0; g < b.length; g += 2) if (d = 127 & b[g], e = 127 & b[g + 1], 0 !== d || 0 !== e) {
                        if (k.log("DATA", "[" + l([b[g], b[g + 1]]) + "] -> (" + l([d, e]) + ")"), c = this.parseCmd(d, e), c || (c = this.parseMidrow(d, e)), c || (c = this.parsePAC(d, e)), c || (c = this.parseBackgroundAttributes(d, e)), !c && (f = this.parseChars(d, e))) if (this.currChNr && this.currChNr >= 0) {
                            var h = this.channels[this.currChNr - 1];
                            h.insertChars(f)
                        } else k.log("WARNING", "No channel found yet. TEXT-MODE?");
                        c ? this.dataCounters.cmd += 2 : f ? this.dataCounters.char += 2 : (this.dataCounters.other += 2, k.log("WARNING", "Couldn't parse cleaned data " + l([d, e]) + " orig: " + l([b[g], b[g + 1]])))
                    } else this.dataCounters.padding += 2
                }, parseCmd: function (a, b) {
                    var c = null, d = (20 === a || 28 === a) && 32 <= b && b <= 47,
                        e = (23 === a || 31 === a) && 33 <= b && b <= 35;
                    if (!d && !e) return !1;
                    if (a === this.lastCmdA && b === this.lastCmdB) return this.lastCmdA = null, this.lastCmdB = null, k.log("DEBUG", "Repeated command (" + l([a, b]) + ") is dropped"), !0;
                    c = 20 === a || 23 === a ? 1 : 2;
                    var f = this.channels[c - 1];
                    return 20 === a || 28 === a ? 32 === b ? f.cc_RCL() : 33 === b ? f.cc_BS() : 34 === b ? f.cc_AOF() : 35 === b ? f.cc_AON() : 36 === b ? f.cc_DER() : 37 === b ? f.cc_RU(2) : 38 === b ? f.cc_RU(3) : 39 === b ? f.cc_RU(4) : 40 === b ? f.cc_FON() : 41 === b ? f.cc_RDC() : 42 === b ? f.cc_TR() : 43 === b ? f.cc_RTD() : 44 === b ? f.cc_EDM() : 45 === b ? f.cc_CR() : 46 === b ? f.cc_ENM() : 47 === b && f.cc_EOC() : f.cc_TO(b - 32), this.lastCmdA = a, this.lastCmdB = b, this.currChNr = c, !0
                }, parseMidrow: function (a, b) {
                    var c = null;
                    if ((17 === a || 25 === a) && 32 <= b && b <= 47) {
                        if (c = 17 === a ? 1 : 2, c !== this.currChNr) return k.log("ERROR", "Mismatch channel in midrow parsing"), !1;
                        var d = this.channels[c - 1];
                        return d.cc_MIDROW(b), k.log("DEBUG", "MIDROW (" + l([a, b]) + ")"), !0
                    }
                    return !1
                }, parsePAC: function (a, b) {
                    var c = null, d = null, e = (17 <= a && a <= 23 || 25 <= a && a <= 31) && 64 <= b && b <= 127,
                        j = (16 === a || 24 === a) && 64 <= b && b <= 95;
                    if (!e && !j) return !1;
                    if (a === this.lastCmdA && b === this.lastCmdB) return this.lastCmdA = null, this.lastCmdB = null, !0;
                    c = a <= 23 ? 1 : 2, d = 64 <= b && b <= 95 ? 1 === c ? f[a] : h[a] : 1 === c ? g[a] : i[a];
                    var k = this.interpretPAC(d, b), l = this.channels[c - 1];
                    return l.setPAC(k), this.lastCmdA = a, this.lastCmdB = b, this.currChNr = c, !0
                }, interpretPAC: function (a, b) {
                    var c = b, d = {color: null, italics: !1, indent: null, underline: !1, row: a};
                    return c = b > 95 ? b - 96 : b - 64, d.underline = 1 === (1 & c), c <= 13 ? d.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(c / 2)] : c <= 15 ? (d.italics = !0, d.color = "white") : d.indent = 4 * Math.floor((c - 16) / 2), d
                }, parseChars: function (a, b) {
                    var d = null, e = null, f = null;
                    if (a >= 25 ? (d = 2, f = a - 8) : (d = 1, f = a), 17 <= f && f <= 19) {
                        var g = b;
                        g = 17 === f ? b + 80 : 18 === f ? b + 112 : b + 144, k.log("INFO", "Special char '" + c(g) + "' in channel " + d), e = [g]
                    } else 32 <= a && a <= 127 && (e = 0 === b ? [a] : [a, b]);
                    if (e) {
                        var h = l(e);
                        k.log("DEBUG", "Char codes =  " + h.join(",")), this.lastCmdA = null, this.lastCmdB = null
                    }
                    return e
                }, parseBackgroundAttributes: function (a, b) {
                    var c, d, e, f, g = (16 === a || 24 === a) && 32 <= b && b <= 47,
                        h = (23 === a || 31 === a) && 45 <= b && b <= 47;
                    return !(!g && !h) && (c = {}, 16 === a || 24 === a ? (d = Math.floor((b - 32) / 2), c.background = j[d], b % 2 === 1 && (c.background = c.background + "_semi")) : 45 === b ? c.background = "transparent" : (c.foreground = "black", 47 === b && (c.underline = !0)), e = a < 24 ? 1 : 2, f = this.channels[e - 1], f.setBkgData(c), this.lastCmdA = null, this.lastCmdB = null, !0)
                }, reset: function () {
                    for (var a = 0; a < this.channels.length; a++) this.channels[a] && this.channels[a].reset();
                    this.lastCmdA = null, this.lastCmdB = null
                }, cueSplitAtTime: function (a) {
                    for (var b = 0; b < this.channels.length; b++) this.channels[b] && this.channels[b].cueSplitAtTime(a)
                }
            };
            var s = function (a, b, c) {
                for (var d = 0, e = b, f = 0, g = [], h = function (a, b, c, d) {
                    if (4 !== a || b < 8) return null;
                    var e = c.getUint8(d), f = c.getUint16(d + 1), g = c.getUint32(d + 3), h = c.getUint8(d + 7);
                    return 181 == e && 49 == f && 1195456820 == g && 3 == h
                }; e < b + c;) {
                    if (d = a.getUint32(e), f = 31 & a.getUint8(e + 4), 6 === f) for (var i = e + 5, j = -1; i < e + 4 + d - 1;) {
                        j = 0;
                        for (var k = 255; 255 === k;) k = a.getUint8(i), j += k, i++;
                        var l = 0;
                        for (k = 255; 255 === k;) k = a.getUint8(i), l += k, i++;
                        h(j, l, a, i) && g.push([i, l]), i += l
                    }
                    e += d + 4
                }
                return g
            }, t = function (a, b) {
                var c = b[0], d = [[], []];
                c += 8;
                var e = 31 & a.getUint8(c);
                c += 2;
                for (var f = 0; f < e; f++) {
                    var g = a.getUint8(c), h = 4 & g, i = 3 & g;
                    c++;
                    var j = a.getUint8(c);
                    c++;
                    var k = a.getUint8(c);
                    c++, h && (127 & j) + (127 & k) !== 0 && (0 === i ? (d[0].push(j), d[0].push(k)) : 1 === i && (d[1].push(j), d[1].push(k)))
                }
                return d
            };
            a.logger = k, a.PenState = m, a.CaptionScreen = p, a.Cea608Parser = r, a.findCea608Nalus = s, a.extractCea608DataFromRange = t
        }("undefined" == typeof c ? (void 0).cea608parser = {} : c)
    }, {}],
    3: [function (a, b, c) {
        "use strict";

        function d(a) {
            var b, c, d;
            for (b = [], d = 0, c = a.length; d < c; d += 1) a[d].isRoot ? b.push("root") : b.push(a[d].name);
            var e = function (a, b) {
                var c;
                if (null !== a && null !== b) for (c in a) a.hasOwnProperty(c) && (b.hasOwnProperty(c) || (b[c] = a[c]))
            }, f = function (a, b, c) {
                var d, f, g, h, i;
                if (null !== a && 0 !== a.length) for (d = 0, f = a.length; d < f; d += 1) g = a[d], b.hasOwnProperty(g.name) && (c.hasOwnProperty(g.name) ? g.merge && (h = b[g.name], i = c[g.name], "object" == typeof h && "object" == typeof i ? e(h, i) : null != g.mergeFunction ? c[g.name] = g.mergeFunction(h, i) : c[g.name] = h + i) : c[g.name] = b[g.name])
            }, g = function a(b, c) {
                var d, e, g, h, i, j, k, l = b;
                if (null !== l.children && 0 !== l.children.length) for (d = 0, e = l.children.length; d < e; d += 1) if (j = l.children[d], c.hasOwnProperty(j.name)) if (j.isArray) for (i = c[j.name + "_asArray"], g = 0, h = i.length; g < h; g += 1) k = i[g], f(l.properties, c, k), a(j, k); else k = c[j.name], f(l.properties, c, k), a(j, k)
            }, h = function c(d) {
                var e, f, h, i, j, k, l;
                if (null === d) return d;
                if ("object" != typeof d) return d;
                for (e = 0, f = b.length; e < f; e += 1) "root" === b[e] && (j = a[e], k = d, g(j, k));
                for (i in d) if (d.hasOwnProperty(i) && "__children" != i) {
                    if (h = b.indexOf(i), h !== -1) if (j = a[h], j.isArray) for (l = d[i + "_asArray"], e = 0, f = l.length; e < f; e += 1) k = l[e], g(j, k); else k = d[i], g(j, k);
                    c(d[i])
                }
                return d
            };
            return {run: h}
        }

        Object.defineProperty(c, "__esModule", {value: !0}), c.default = d, b.exports = c.default
    }, {}],
    4: [function (a, b, c) {
        "use strict";

        function d(a, b, c) {
            function d(a) {
                var b = a.localName;
                return null == b && (b = a.baseName), null != b && "" != b || (b = a.nodeName), b
            }

            function e(a) {
                return a.prefix
            }

            function f(a) {
                return "string" == typeof a ? a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;") : a
            }

            function g(a) {
                return a.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&#x2F;/g, "/")
            }

            function h(f) {
                if (f.nodeType == u.DOCUMENT_NODE) {
                    var i, j, k, l = f.firstChild;
                    for (j = 0, k = f.childNodes.length; j < k; j += 1) if (f.childNodes[j].nodeType !== u.COMMENT_NODE) {
                        l = f.childNodes[j];
                        break
                    }
                    if (c) i = h(l); else {
                        i = {};
                        var m = d(l);
                        i[m] = h(l)
                    }
                    return i
                }
                if (f.nodeType == u.ELEMENT_NODE) {
                    var i = new Object;
                    i.__cnt = 0;
                    for (var n = [], o = f.childNodes, p = 0; p < o.length; p++) {
                        var l = o.item(p), m = d(l);
                        if (i.__cnt++, null == i[m]) {
                            var q = h(l);
                            if ("#text" != m || /[^\s]/.test(q)) {
                                var r = {};
                                r[m] = q, n.push(r)
                            }
                            i[m] = q, i[m + "_asArray"] = new Array(1), i[m + "_asArray"][0] = i[m]
                        } else {
                            if (null != i[m] && !(i[m] instanceof Array)) {
                                var s = i[m];
                                i[m] = new Array, i[m][0] = s, i[m + "_asArray"] = i[m]
                            }
                            for (var v = 0; null != i[m][v];) v++;
                            var q = h(l);
                            if ("#text" != m || /[^\s]/.test(q)) {
                                var r = {};
                                r[m] = q, n.push(r)
                            }
                            i[m][v] = q
                        }
                    }
                    i.__children = n;
                    for (var w = 0; w < f.attributes.length; w++) {
                        var x = f.attributes.item(w);
                        i.__cnt++;
                        for (var y = x.value, z = 0, A = a.length; z < A; z++) {
                            var B = a[z];
                            B.test(x) && (y = B.converter(x.value))
                        }
                        i[b + x.name] = y
                    }
                    var C = e(f);
                    return null != C && "" != C && (i.__cnt++, i.__prefix = C), 1 == i.__cnt && null != i["#text"] && (i = i["#text"]), null != i["#text"] && (i.__text = i["#text"], t && (i.__text = g(i.__text)), delete i["#text"], delete i["#text_asArray"]), null != i["#cdata-section"] && (i.__cdata = i["#cdata-section"], delete i["#cdata-section"], delete i["#cdata-section_asArray"]), null == i.__text && null == i.__cdata || (i.toString = function () {
                        return (null != this.__text ? this.__text : "") + (null != this.__cdata ? this.__cdata : "")
                    }), i
                }
                return f.nodeType == u.TEXT_NODE || f.nodeType == u.CDATA_SECTION_NODE ? f.nodeValue : f.nodeType == u.COMMENT_NODE ? null : void 0
            }

            function i(a, b, c, d) {
                var e = "<" + (null != a && null != a.__prefix ? a.__prefix + ":" : "") + b;
                if (null != c) for (var f = 0; f < c.length; f++) {
                    var g = c[f], h = a[g];
                    e += " " + g.substr(1) + "='" + h + "'"
                }
                return e += d ? "/>" : ">"
            }

            function j(a, b) {
                return "</" + (null != a.__prefix ? a.__prefix + ":" : "") + b + ">"
            }

            function k(a, b) {
                return a.indexOf(b, a.length - b.length) !== -1
            }

            function l(a, b) {
                return !!(k(b.toString(), "_asArray") || 0 == b.toString().indexOf("_") || a[b] instanceof Function)
            }

            function m(a) {
                var b = 0;
                if (a instanceof Object) for (var c in a) l(a, c) || b++;
                return b
            }

            function n(a) {
                var b = [];
                if (a instanceof Object) for (var c in a) c.toString().indexOf("__") == -1 && 0 == c.toString().indexOf("_") && b.push(c);
                return b
            }

            function o(a) {
                var b = "";
                return null != a.__cdata && (b += "<![CDATA[" + a.__cdata + "]]>"), null != a.__text && (b += t ? f(a.__text) : a.__text), b
            }

            function p(a) {
                var b = "";
                return a instanceof Object ? b += o(a) : null != a && (b += t ? f(a) : a), b
            }

            function q(a, b, c) {
                var d = "";
                if (0 == a.length) d += i(a, b, c, !0); else for (var e = 0; e < a.length; e++) d += i(a[e], b, n(a[e]), !1), d += r(a[e]), d += j(a[e], b);
                return d
            }

            function r(a) {
                var b = "", c = m(a);
                if (c > 0) for (var d in a) if (!l(a, d)) {
                    var e = a[d], f = n(e);
                    if (null == e || void 0 == e) b += i(e, d, f, !0); else if (e instanceof Object) if (e instanceof Array) b += q(e, d, f); else {
                        var g = m(e);
                        g > 0 || null != e.__text || null != e.__cdata ? (b += i(e, d, f, !1), b += r(e), b += j(e, d)) : b += i(e, d, f, !0)
                    } else b += i(e, d, f, !1), b += p(e), b += j(e, d)
                }
                return b += p(a)
            }

            null !== b && void 0 !== b || (b = "_"), null !== c && void 0 !== c || (c = !1);
            var s = "1.0.11", t = !1,
                u = {ELEMENT_NODE: 1, TEXT_NODE: 3, CDATA_SECTION_NODE: 4, COMMENT_NODE: 8, DOCUMENT_NODE: 9};
            this.parseXmlString = function (a) {
                var b, c, d;
                if (window.DOMParser) {
                    c = new window.DOMParser;
                    try {
                        d = c.parseFromString("<", "text/xml").getElementsByTagName("parsererror")[0].namespaceURI
                    } catch (e) {
                    }
                    try {
                        b = c.parseFromString(a, "text/xml"), d && b.getElementsByTagNameNS(d, "parsererror").length && (b = void 0)
                    } catch (e) {
                    }
                } else 0 == a.indexOf("<?") && (a = a.substr(a.indexOf("?>") + 2)), b = new ActiveXObject("Microsoft.XMLDOM"), b.async = "false", b.loadXML(a);
                return b
            }, this.xml2json = function (a) {
                return h(a)
            }, this.xml_str2json = function (a) {
                var b = this.parseXmlString(a);
                return b ? this.xml2json(b) : void 0
            }, this.json2xml_str = function (a) {
                return r(a)
            }, this.json2xml = function (a) {
                var b = this.json2xml_str(a);
                return this.parseXmlString(b)
            }, this.getVersion = function () {
                return s
            }, this.escapeMode = function (a) {
                t = a
            }
        }

        Object.defineProperty(c, "__esModule", {value: !0}), c.default = d, b.exports = c.default
    }, {}],
    5: [function (a, b, c) {
        (function (b) {
            "use strict";

            function d(a) {
                return a && a.__esModule ? a : {default: a}
            }

            Object.defineProperty(c, "__esModule", {value: !0});
            var e = a(51), f = d(e), g = a(106), h = d(g), i = a(75), j = d(i), k = a(53), l = d(k), m = a(11),
                n = window || b, o = n.dashjs;
            o || (o = n.dashjs = {}), o.MediaPlayer = f.default, o.Protection = h.default, o.MetricsReporting = j.default, o.MediaPlayerFactory = l.default, o.Version = (0, m.getVersionString)(), c.default = o, c.MediaPlayer = f.default, c.Protection = h.default, c.MetricsReporting = j.default, c.MediaPlayerFactory = l.default
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {106: 106, 11: 11, 51: 51, 53: 53, 75: 75}],
    6: [function (a, b, c) {/*! codem-isoboxer v0.2.2 https://github.com/madebyhiro/codem-isoboxer/blob/master/LICENSE.txt */
        var d = {};
        d.parseBuffer = function (a) {
            return new e(a).parse()
        }, d.Utils = {}, d.Utils.dataViewToString = function (a, b) {
            var c = b || "utf-8";
            if ("undefined" != typeof TextDecoder) return new TextDecoder(c).decode(a);
            var d = [], e = 0;
            if ("utf-8" === c) for (; e < a.byteLength;) {
                var f = a.getUint8(e++);
                f < 128 || (f < 224 ? (f = (31 & f) << 6, f |= 63 & a.getUint8(e++)) : f < 240 ? (f = (15 & f) << 12, f |= (63 & a.getUint8(e++)) << 6, f |= 63 & a.getUint8(e++)) : (f = (7 & f) << 18, f |= (63 & a.getUint8(e++)) << 12, f |= (63 & a.getUint8(e++)) << 6, f |= 63 & a.getUint8(e++))), d.push(String.fromCharCode(f))
            } else for (; e < a.byteLength;) d.push(String.fromCharCode(a.getUint8(e++)));
            return d.join("")
        }, "undefined" != typeof c && (c.parseBuffer = d.parseBuffer, c.Utils = d.Utils), d.Cursor = function (a) {
            this.offset = "undefined" == typeof a ? 0 : a
        };
        var e = function (a) {
            this._raw = new DataView(a), this._cursor = new d.Cursor, this.boxes = []
        };
        e.prototype.fetch = function (a) {
            var b = this.fetchAll(a, !0);
            return b.length ? b[0] : null
        }, e.prototype.fetchAll = function (a, b) {
            var c = [];
            return e._sweep.call(this, a, c, b), c
        }, e.prototype.parse = function () {
            for (this._cursor.offset = 0, this.boxes = []; this._cursor.offset < this._raw.byteLength;) {
                var a = f.parse(this);
                if ("undefined" == typeof a.type) break;
                this.boxes.push(a)
            }
            return this
        }, e._sweep = function (a, b, c) {
            this.type && this.type == a && b.push(this);
            for (var d in this.boxes) {
                if (b.length && c) return;
                e._sweep.call(this.boxes[d], a, b, c)
            }
        };
        var f = function () {
            this._cursor = new d.Cursor
        };
        f.parse = function (a) {
            var b = new f;
            return b._offset = a._cursor.offset, b._root = a._root ? a._root : a, b._raw = a._raw, b._parent = a, b._parseBox(), a._cursor.offset = b._raw.byteOffset + b._raw.byteLength, b
        }, f.prototype._readInt = function (a) {
            var b = null;
            switch (a) {
                case 8:
                    b = this._raw.getInt8(this._cursor.offset - this._raw.byteOffset);
                    break;
                case 16:
                    b = this._raw.getInt16(this._cursor.offset - this._raw.byteOffset);
                    break;
                case 32:
                    b = this._raw.getInt32(this._cursor.offset - this._raw.byteOffset);
                    break;
                case 64:
                    var c = this._raw.getInt32(this._cursor.offset - this._raw.byteOffset),
                        d = this._raw.getInt32(this._cursor.offset - this._raw.byteOffset + 4);
                    b = c * Math.pow(2, 32) + d
            }
            return this._cursor.offset += a >> 3, b
        }, f.prototype._readUint = function (a) {
            var b = null;
            switch (a) {
                case 8:
                    b = this._raw.getUint8(this._cursor.offset - this._raw.byteOffset);
                    break;
                case 16:
                    b = this._raw.getUint16(this._cursor.offset - this._raw.byteOffset);
                    break;
                case 24:
                    var c = this._raw.getUint16(this._cursor.offset - this._raw.byteOffset),
                        d = this._raw.getUint8(this._cursor.offset - this._raw.byteOffset + 2);
                    b = (c << 8) + d;
                    break;
                case 32:
                    b = this._raw.getUint32(this._cursor.offset - this._raw.byteOffset);
                    break;
                case 64:
                    var c = this._raw.getUint32(this._cursor.offset - this._raw.byteOffset),
                        d = this._raw.getUint32(this._cursor.offset - this._raw.byteOffset + 4);
                    b = c * Math.pow(2, 32) + d
            }
            return this._cursor.offset += a >> 3, b
        }, f.prototype._readString = function (a) {
            for (var b = "", c = 0; c < a; c++) {
                var d = this._readUint(8);
                b += String.fromCharCode(d)
            }
            return b
        }, f.prototype._readTerminatedString = function () {
            for (var a = ""; ;) {
                var b = this._readUint(8);
                if (0 == b) break;
                a += String.fromCharCode(b)
            }
            return a
        }, f.prototype._readTemplate = function (a) {
            var b = this._readUint(a / 2), c = this._readUint(a / 2);
            return b + c / Math.pow(2, a / 2)
        }, f.prototype._parseBox = function () {
            if (this._cursor.offset = this._offset, this._offset + 8 > this._raw.buffer.byteLength) return void(this._root._incomplete = !0);
            switch (this.size = this._readUint(32), this.type = this._readString(4), 1 == this.size && (this.largesize = this._readUint(64)), "uuid" == this.type && (this.usertype = this._readString(16)), this.size) {
                case 0:
                    this._raw = new DataView(this._raw.buffer, this._offset, this._raw.byteLength - this._cursor.offset);
                    break;
                case 1:
                    this._offset + this.size > this._raw.buffer.byteLength ? (this._incomplete = !0, this._root._incomplete = !0) : this._raw = new DataView(this._raw.buffer, this._offset, this.largesize);
                    break;
                default:
                    this._offset + this.size > this._raw.buffer.byteLength ? (this._incomplete = !0, this._root._incomplete = !0) : this._raw = new DataView(this._raw.buffer, this._offset, this.size)
            }
            !this._incomplete && this._boxParsers[this.type] && this._boxParsers[this.type].call(this)
        }, f.prototype._parseFullBox = function () {
            this.version = this._readUint(8), this.flags = this._readUint(24)
        }, f.prototype._boxParsers = {}, ["moov", "trak", "tref", "mdia", "minf", "stbl", "edts", "dinf", "mvex", "moof", "traf", "mfra", "udta", "meco", "strk", "vttc"].forEach(function (a) {
            f.prototype._boxParsers[a] = function () {
                for (this.boxes = []; this._cursor.offset - this._raw.byteOffset < this._raw.byteLength;) this.boxes.push(f.parse(this))
            }
        }), f.prototype._boxParsers.elst = function () {
            this._parseFullBox(), this.entry_count = this._readUint(32), this.entries = [];
            for (var a = 1; a <= this.entry_count; a++) {
                var b = {};
                1 == this.version ? (b.segment_duration = this._readUint(64), b.media_time = this._readInt(64)) : (b.segment_duration = this._readUint(32), b.media_time = this._readInt(32)), b.media_rate_integer = this._readInt(16), b.media_rate_fraction = this._readInt(16), this.entries.push(b)
            }
        }, f.prototype._boxParsers.emsg = function () {
            this._parseFullBox(), this.scheme_id_uri = this._readTerminatedString(), this.value = this._readTerminatedString(), this.timescale = this._readUint(32), this.presentation_time_delta = this._readUint(32), this.event_duration = this._readUint(32), this.id = this._readUint(32), this.message_data = new DataView(this._raw.buffer, this._cursor.offset, this._raw.byteLength - (this._cursor.offset - this._offset))
        }, f.prototype._boxParsers.free = f.prototype._boxParsers.skip = function () {
            this.data = new DataView(this._raw.buffer, this._cursor.offset, this._raw.byteLength - (this._cursor.offset - this._offset))
        }, f.prototype._boxParsers.ftyp = f.prototype._boxParsers.styp = function () {
            for (this.major_brand = this._readString(4), this.minor_versions = this._readUint(32), this.compatible_brands = []; this._cursor.offset - this._raw.byteOffset < this._raw.byteLength;) this.compatible_brands.push(this._readString(4))
        }, f.prototype._boxParsers.hdlr = function () {
            this._parseFullBox(), this.pre_defined = this._readUint(32), this.handler_type = this._readString(4), this.reserved = [this._readUint(32), this._readUint(32), this._readUint(32)], this.name = this._readTerminatedString()
        }, f.prototype._boxParsers.mdat = function () {
            this.data = new DataView(this._raw.buffer, this._cursor.offset, this._raw.byteLength - (this._cursor.offset - this._offset))
        }, f.prototype._boxParsers.mdhd = function () {
            this._parseFullBox(), 1 == this.version ? (this.creation_time = this._readUint(64), this.modification_time = this._readUint(64), this.timescale = this._readUint(32), this.duration = this._readUint(64)) : (this.creation_time = this._readUint(32), this.modification_time = this._readUint(32), this.timescale = this._readUint(32), this.duration = this._readUint(32));
            var a = this._readUint(16);
            this.pad = a >> 15, this.language = String.fromCharCode((a >> 10 & 31) + 96, (a >> 5 & 31) + 96, (31 & a) + 96), this.pre_defined = this._readUint(16)
        }, f.prototype._boxParsers.mfhd = function () {
            this._parseFullBox(), this.sequence_number = this._readUint(32)
        }, f.prototype._boxParsers.mvhd = function () {
            this._parseFullBox(), 1 == this.version ? (this.creation_time = this._readUint(64), this.modification_time = this._readUint(64), this.timescale = this._readUint(32), this.duration = this._readUint(64)) : (this.creation_time = this._readUint(32), this.modification_time = this._readUint(32), this.timescale = this._readUint(32), this.duration = this._readUint(32)), this.rate = this._readTemplate(32), this.volume = this._readTemplate(16), this.reserved1 = this._readUint(16), this.reserved2 = [this._readUint(32), this._readUint(32)], this.matrix = [];
            for (var a = 0; a < 9; a++) this.matrix.push(this._readTemplate(32));
            this.pre_defined = [];
            for (var a = 0; a < 6; a++) this.pre_defined.push(this._readUint(32));
            this.next_track_ID = this._readUint(32)
        }, f.prototype._boxParsers.payl = function () {
            var a = new DataView(this._raw.buffer, this._cursor.offset, this._raw.byteLength - (this._cursor.offset - this._offset));
            this.cue_text = d.Utils.dataViewToString(a)
        }, f.prototype._boxParsers.sidx = function () {
            this._parseFullBox(), this.reference_ID = this._readUint(32), this.timescale = this._readUint(32), 0 == this.version ? (this.earliest_presentation_time = this._readUint(32), this.first_offset = this._readUint(32)) : (this.earliest_presentation_time = this._readUint(64), this.first_offset = this._readUint(64)), this.reserved = this._readUint(16), this.reference_count = this._readUint(16), this.references = [];
            for (var a = 0; a < this.reference_count; a++) {
                var b = {}, c = this._readUint(32);
                b.reference_type = c >> 31 & 1, b.referenced_size = 2147483647 & c, b.subsegment_duration = this._readUint(32);
                var d = this._readUint(32);
                b.starts_with_SAP = d >> 31 & 1, b.SAP_type = d >> 28 & 7, b.SAP_delta_time = 268435455 & d, this.references.push(b)
            }
        }, f.prototype._boxParsers.ssix = function () {
            this._parseFullBox(), this.subsegment_count = this._readUint(32), this.subsegments = [];
            for (var a = 0; a < this.subsegment_count; a++) {
                var b = {};
                b.ranges_count = this._readUint(32), b.ranges = [];
                for (var c = 0; c < b.ranges_count; c++) {
                    var d = {};
                    d.level = this._readUint(8), d.range_size = this._readUint(24), b.ranges.push(d)
                }
                this.subsegments.push(b)
            }
        }, f.prototype._boxParsers.tfdt = function () {
            this._parseFullBox(), 1 == this.version ? this.baseMediaDecodeTime = this._readUint(64) : this.baseMediaDecodeTime = this._readUint(32)
        }, f.prototype._boxParsers.tfhd = function () {
            this._parseFullBox(), this.track_ID = this._readUint(32), 1 & this.flags && (this.base_data_offset = this._readUint(64)), 2 & this.flags && (this.sample_description_offset = this._readUint(32)), 8 & this.flags && (this.default_sample_duration = this._readUint(32)), 16 & this.flags && (this.default_sample_size = this._readUint(32)), 32 & this.flags && (this.default_sample_flags = this._readUint(32))
        }, f.prototype._boxParsers.tkhd = function () {
            this._parseFullBox(), 1 == this.version ? (this.creation_time = this._readUint(64), this.modification_time = this._readUint(64), this.track_ID = this._readUint(32), this.reserved1 = this._readUint(32), this.duration = this._readUint(64)) : (this.creation_time = this._readUint(32), this.modification_time = this._readUint(32), this.track_ID = this._readUint(32), this.reserved1 = this._readUint(32), this.duration = this._readUint(32)), this.reserved2 = [this._readUint(32), this._readUint(32)], this.layer = this._readUint(16), this.alternate_group = this._readUint(16), this.volume = this._readTemplate(16), this.reserved3 = this._readUint(16), this.matrix = [];
            for (var a = 0; a < 9; a++) this.matrix.push(this._readTemplate(32));
            this.width = this._readUint(32), this.height = this._readUint(32)
        }, f.prototype._boxParsers.trun = function () {
            this._parseFullBox(), this.sample_count = this._readUint(32), 1 & this.flags && (this.data_offset = this._readInt(32)), 4 & this.flags && (this.first_sample_flags = this._readUint(32)), this.samples = [];
            for (var a = 0; a < this.sample_count; a++) {
                var b = {};
                256 & this.flags && (b.sample_duration = this._readUint(32)), 512 & this.flags && (b.sample_size = this._readUint(32)), 1024 & this.flags && (b.sample_flags = this._readUint(32)), 2048 & this.flags && (0 == this.version ? b.sample_composition_time_offset = this._readUint(32) : b.sample_composition_time_offset = this._readInt(32)), this.samples.push(b)
            }
        }, f.prototype._boxParsers.vlab = function () {
            var a = new DataView(this._raw.buffer, this._cursor.offset, this._raw.byteLength - (this._cursor.offset - this._offset));
            this.source_label = d.Utils.dataViewToString(a)
        }, f.prototype._boxParsers.vttC = function () {
            var a = new DataView(this._raw.buffer, this._cursor.offset, this._raw.byteLength - (this._cursor.offset - this._offset));
            this.config = d.Utils.dataViewToString(a)
        }, f.prototype._boxParsers.vtte = function () {
        }
    }, {}],
    7: [function (a, b, c) {
        var d = c.decimalAdjust = function (a, b, c) {
            return "undefined" == typeof c || 0 === +c ? Math[a](b) : (b = +b, c = +c, isNaN(b) || "number" != typeof c || c % 1 !== 0 ? NaN : (b = b.toString().split("e"), b = Math[a](+(b[0] + "e" + (b[1] ? +b[1] - c : -c))), b = b.toString().split("e"), +(b[0] + "e" + (b[1] ? +b[1] + c : c))))
        };
        b.exports = {
            round10: function (a, b) {
                return d("round", a, b)
            }, floor10: function (a, b) {
                return d("floor", a, b)
            }, ceil10: function (a, b) {
                return d("ceil", a, b)
            }
        }, b.exports.polyfill = function () {
            Math.round10 || (Math.round10 = b.exports.round10), Math.floor10 || (Math.floor10 = b.exports.floor10), Math.ceil10 || (Math.ceil10 = b.exports.ceil10)
        }
    }, {}],
    8: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a() {
                k = !0, l = !0, m = (new Date).getTime()
            }

            function b(a) {
                l = a
            }

            function c(a) {
                k = a
            }

            function d() {
                return k
            }

            function e() {
                var a = "", b = null;
                l && (b = (new Date).getTime(), a += "[" + (b - m) + "]"), a.length > 0 && (a += " "), Array.apply(null, arguments).forEach(function (b) {
                    a += b + " "
                }), k && console.log(a), h.trigger(i.default.LOG, {message: a})
            }

            var f = this.context, h = (0, g.default)(f).getInstance(), j = void 0, k = void 0, l = void 0, m = void 0;
            return j = {log: e, setLogTimestampVisible: b, setLogToBrowserConsole: c, getLogToBrowserConsole: d}, a(), j
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(9), g = d(f), h = a(13), i = d(h), j = a(10), k = d(j);
        e.__dashjs_factory_name = "Debug", c.default = k.default.getSingletonFactory(e), b.exports = c.default
    }, {10: 10, 13: 13, 9: 9}],
    9: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a(a, b, c) {
                var e = arguments.length <= 3 || void 0 === arguments[3] ? h : arguments[3];
                if (!a) throw new Error("event type cannot be null or undefined");
                if (!b || "function" != typeof b) throw new Error("listener must be a function: " + b);
                if (!(d(a, b, c) >= 0)) {
                    f[a] = f[a] || [];
                    var g = {callback: b, scope: c, priority: e}, i = f[a].some(function (b, c) {
                        if (e > b.priority) return f[a].splice(c, 0, g), !0
                    });
                    i || f[a].push(g)
                }
            }

            function b(a, b, c) {
                if (a && b && f[a]) {
                    var e = d(a, b, c);
                    e < 0 || f[a].splice(e, 1)
                }
            }

            function c(a, b) {
                if (a && f[a]) {
                    if (b = b || {}, b.hasOwnProperty("type")) throw new Error("'type' is a reserved word for event dispatching");
                    b.type = a, f[a].forEach(function (a) {
                        return a.callback.call(a.scope, b)
                    })
                }
            }

            function d(a, b, c) {
                var d = -1;
                return f[a] ? (f[a].some(function (a, e) {
                    if (a.callback === b && (!c || c === a.scope)) return d = e, !0
                }), d) : d
            }

            function e() {
                f = {}
            }

            var f = {}, g = {on: a, off: b, trigger: c, reset: e};
            return g
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(10), g = d(f), h = 0, i = 5e3;
        e.__dashjs_factory_name = "EventBus";
        var j = g.default.getSingletonFactory(e);
        j.EVENT_PRIORITY_LOW = h, j.EVENT_PRIORITY_HIGH = i, c.default = j, b.exports = c.default
    }, {10: 10}],
    10: [function (a, b, c) {
        "use strict";
        Object.defineProperty(c, "__esModule", {value: !0});
        var d = function () {
            function a(a, b, c, d) {
                var e = g(d);
                !e[a] && b && (e[a] = {instance: b, override: c})
            }

            function b(a, b) {
                for (var c in j) {
                    var d = j[c];
                    if (d.context === a && d.name === b) return d.instance
                }
                return null
            }

            function c(a, b, c) {
                for (var d in j) {
                    var e = j[d];
                    if (e.context === a && e.name === b) return void(j[d].instance = c)
                }
                j.push({name: b, context: a, instance: c})
            }

            function d(a) {
                return function (b) {
                    return void 0 === b && (b = {}), {
                        create: function () {
                            return f(a.__dashjs_factory_name, a.apply({context: b}, arguments), b, arguments)
                        }
                    }
                }
            }

            function e(a) {
                return function (c) {
                    var d = void 0;
                    return void 0 === c && (c = {}), {
                        getInstance: function () {
                            return d || (d = b(c, a.__dashjs_factory_name)), d || (d = f(a.__dashjs_factory_name, a.apply({context: c}, arguments), c, arguments), j.push({
                                name: a.__dashjs_factory_name,
                                context: c,
                                instance: d
                            })), d
                        }
                    }
                }
            }

            function f(a, b, c, d) {
                var e = g(c), f = e[a];
                if (f) {
                    var i = f.instance;
                    if (!f.override) return i.apply({context: c, factory: h}, d);
                    i = i.apply({context: c, factory: h, parent: b}, d);
                    for (var j in i) b.hasOwnProperty(j) && (b[j] = i[j])
                }
                return b
            }

            function g(a) {
                var b = void 0;
                return i.forEach(function (c) {
                    c === a && (b = c)
                }), b || (b = i.push(a)), b
            }

            var h = void 0, i = [], j = [];
            return h = {
                extend: a,
                getSingletonInstance: b,
                setSingletonInstance: c,
                getSingletonFactory: e,
                getClassFactory: d
            }
        }();
        c.default = d, b.exports = c.default
    }, {}],
    11: [function (a, b, c) {
        "use strict";

        function d() {
            return e
        }

        Object.defineProperty(c, "__esModule", {value: !0}), c.getVersionString = d;
        var e = "2.3.0"
    }, {}],
    12: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        function f(a, b) {
            if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var g = function (a, b, c) {
            for (var d = !0; d;) {
                var e = a, f = b, g = c;
                d = !1, null === e && (e = Function.prototype);
                var h = Object.getOwnPropertyDescriptor(e, f);
                if (void 0 !== h) {
                    if ("value" in h) return h.value;
                    var i = h.get;
                    if (void 0 === i) return;
                    return i.call(g)
                }
                var j = Object.getPrototypeOf(e);
                if (null === j) return;
                a = j, b = f, c = g, d = !0, h = j = void 0
            }
        }, h = a(14), i = d(h), j = function (a) {
            function b() {
                e(this, b), g(Object.getPrototypeOf(b.prototype), "constructor", this).call(this), this.AST_IN_FUTURE = "astinfuture", this.BUFFERING_COMPLETED = "bufferingCompleted", this.BUFFER_CLEARED = "bufferCleared", this.BUFFER_LEVEL_UPDATED = "bufferLevelUpdated", this.BYTES_APPENDED = "bytesAppended", this.CHECK_FOR_EXISTENCE_COMPLETED = "checkForExistenceCompleted", this.CHUNK_APPENDED = "chunkAppended", this.CURRENT_TRACK_CHANGED = "currenttrackchanged", this.DATA_UPDATE_COMPLETED = "dataUpdateCompleted", this.DATA_UPDATE_STARTED = "dataUpdateStarted", this.FRAGMENT_LOADING_COMPLETED = "fragmentLoadingCompleted", this.FRAGMENT_LOADING_STARTED = "fragmentLoadingStarted", this.FRAGMENT_LOADING_ABANDONED = "fragmentLoadingAbandoned", this.INITIALIZATION_LOADED = "initializationLoaded", this.INIT_FRAGMENT_LOADED = "initFragmentLoaded", this.INIT_REQUESTED = "initRequested", this.INTERNAL_MANIFEST_LOADED = "internalManifestLoaded", this.LIVE_EDGE_SEARCH_COMPLETED = "liveEdgeSearchCompleted", this.LOADING_COMPLETED = "loadingCompleted", this.LOADING_PROGRESS = "loadingProgress", this.MANIFEST_UPDATED = "manifestUpdated", this.MEDIA_FRAGMENT_LOADED = "mediaFragmentLoaded", this.QUOTA_EXCEEDED = "quotaExceeded", this.REPRESENTATION_UPDATED = "representationUpdated", this.SEGMENTS_LOADED = "segmentsLoaded", this.SERVICE_LOCATION_BLACKLIST_CHANGED = "serviceLocationBlacklistChanged", this.SOURCEBUFFER_APPEND_COMPLETED = "sourceBufferAppendCompleted", this.SOURCEBUFFER_REMOVE_COMPLETED = "sourceBufferRemoveCompleted", this.STREAMS_COMPOSED = "streamsComposed", this.STREAM_BUFFERING_COMPLETED = "streamBufferingCompleted", this.STREAM_COMPLETED = "streamCompleted", this.STREAM_INITIALIZED = "streaminitialized", this.STREAM_TEARDOWN_COMPLETE = "streamTeardownComplete", this.TIMED_TEXT_REQUESTED = "timedTextRequested", this.TIME_SYNCHRONIZATION_COMPLETED = "timeSynchronizationComplete", this.URL_RESOLUTION_FAILED = "urlResolutionFailed", this.WALLCLOCK_TIME_UPDATED = "wallclockTimeUpdated", this.XLINK_ALL_ELEMENTS_LOADED = "xlinkAllElementsLoaded", this.XLINK_ELEMENT_LOADED = "xlinkElementLoaded", this.XLINK_READY = "xlinkReady"
            }

            return f(b, a), b
        }(i.default);
        c.default = j, b.exports = c.default
    }, {14: 14}],
    13: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        function f(a, b) {
            if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var g = function (a, b, c) {
            for (var d = !0; d;) {
                var e = a, f = b, g = c;
                d = !1, null === e && (e = Function.prototype);
                var h = Object.getOwnPropertyDescriptor(e, f);
                if (void 0 !== h) {
                    if ("value" in h) return h.value;
                    var i = h.get;
                    if (void 0 === i) return;
                    return i.call(g)
                }
                var j = Object.getPrototypeOf(e);
                if (null === j) return;
                a = j, b = f, c = g, d = !0, h = j = void 0
            }
        }, h = a(12), i = d(h), j = function (a) {
            function b() {
                e(this, b), g(Object.getPrototypeOf(b.prototype), "constructor", this).apply(this, arguments)
            }

            return f(b, a), b
        }(i.default), k = new j;
        c.default = k, b.exports = c.default
    }, {12: 12}],
    14: [function (a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function () {
            function a(a, b) {
                for (var c = 0; c < b.length; c++) {
                    var d = b[c];
                    d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                }
            }

            return function (b, c, d) {
                return c && a(b.prototype, c), d && a(b, d), b
            }
        }(), f = function () {
            function a() {
                d(this, a)
            }

            return e(a, [{
                key: "extend", value: function (a, b) {
                    if (a) {
                        var c = !!b && b.override, d = !!b && b.publicOnly;
                        for (var e in a) !a.hasOwnProperty(e) || this[e] && !c || d && a[e].indexOf("public_") === -1 || (this[e] = a[e])
                    }
                }
            }]), a
        }();
        c.default = f, b.exports = c.default
    }, {}],
    15: [function (a, b, c) {
        "use strict";

        function d(a) {
            if (a && a.__esModule) return a;
            var b = {};
            if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
            return b.default = a, b
        }

        function e(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function f() {
            function a(a) {
                a && a.dashManifestModel && (I = a.dashManifestModel)
            }

            function b() {
                J = [], K = {}
            }

            function c(a, b) {
                return b.getRepresentationForQuality(a.quality)
            }

            function d(a) {
                return K[a.streamInfo.id][a.index]
            }

            function e(a) {
                for (var b = J.length, c = 0; c < b; c++) {
                    var d = J[c];
                    if (a.id === d.id) return d
                }
                return null
            }

            function f(a, b) {
                var c = new h.default,
                    d = b.adaptation.period.mpd.manifest.Period_asArray[b.adaptation.period.index].AdaptationSet_asArray[b.adaptation.index],
                    e = I.getRepresentationFor(b.index, d);
                return c.id = b.id, c.quality = b.index, c.bandwidth = I.getBandwidth(e), c.DVRWindow = b.segmentAvailabilityRange, c.fragmentDuration = b.segmentDuration || (b.segments && b.segments.length > 0 ? b.segments[0].duration : NaN), c.MSETimeOffset = b.MSETimeOffset, c.useCalculatedLiveEdgeTime = b.useCalculatedLiveEdgeTime, c.mediaInfo = g(a, b.adaptation), c
            }

            function g(a, b) {
                var c, d = new j.default,
                    e = b.period.mpd.manifest.Period_asArray[b.period.index].AdaptationSet_asArray[b.index];
                return d.id = b.id, d.index = b.index, d.type = b.type, d.streamInfo = k(a, b.period), d.representationCount = I.getRepresentationCount(e), d.lang = I.getLanguageForAdaptation(e), c = I.getViewpointForAdaptation(e), d.viewpoint = c ? c.value : void 0, d.accessibility = I.getAccessibilityForAdaptation(e).map(function (a) {
                    var b = a.value, c = b;
                    return a.schemeIdUri && a.schemeIdUri.search("cea-608") >= 0 && "undefined" != typeof t.default && (c = b ? "cea-608:" + b : "cea-608", d.embeddedCaptions = !0), c
                }), d.audioChannelConfiguration = I.getAudioChannelConfigurationForAdaptation(e).map(function (a) {
                    return a.value
                }), d.roles = I.getRolesForAdaptation(e).map(function (a) {
                    return a.value
                }), d.codec = I.getCodec(e), d.mimeType = I.getMimeType(e), d.contentProtection = I.getContentProtectionData(e), d.bitrateList = I.getBitrateListForAdaptation(e), d.contentProtection && d.contentProtection.forEach(function (a) {
                    a.KID = I.getKID(a)
                }), d.isText = I.getIsTextTrack(d.mimeType), d
            }

            function i(a, b, c) {
                a.id = b, a.index = 100 + parseInt(b.substring(2, 3)), a.type = "embeddedText", a.codec = "cea-608-in-SEI", a.isText = !0, a.isEmbedded = !0, a.lang = b + " " + c, a.roles = ["caption"]
            }

            function k(a, b) {
                var c = new l.default, d = 1;
                return c.id = b.id, c.index = b.index, c.start = b.start, c.duration = b.duration, c.manifestInfo = m(a, b.mpd), c.isLast = 1 === a.Period_asArray.length || Math.abs(c.start + c.duration - c.manifestInfo.duration) < d, c.isFirst = 1 === a.Period_asArray.length || I.getRegularPeriods(a, I.getMpd(a))[0].id === b.id, c
            }

            function m(a, b) {
                var c = new n.default;
                return c.DVRWindowSize = b.timeShiftBufferDepth, c.loadedTime = b.manifest.loadedTime, c.availableFrom = b.availabilityStartTime, c.minBufferTime = b.manifest.minBufferTime, c.maxFragmentDuration = b.maxSegmentDuration, c.duration = I.getDuration(a), c.isDynamic = I.getIsDynamic(a), c
            }

            function o(a, b, c) {
                var d = I.getAdaptationForType(a, b.index, c, b);
                if (!d) return null;
                var f = e(b), h = f.id, i = I.getIndexForAdaptation(d, a, b.index);
                return K[h] = K[h] || I.getAdaptationsForPeriod(a, f), g(a, K[h][i])
            }

            function q(a, b, c) {
                var d, f, h, j, k, l, m = e(b), n = m.id,
                    o = I.getAdaptationsForType(a, b.index, "embeddedText" !== c ? c : "video"), p = [];
                if (!o) return p;
                for (K[n] = K[n] || I.getAdaptationsForPeriod(a, m), j = 0, l = o.length; j < l; j++) {
                    if (d = o[j], h = I.getIndexForAdaptation(d, a, b.index), f = g(a, K[n][h]), "embeddedText" === c) {
                        var q = f.accessibility.length;
                        for (k = 0; k < q; k++) if (f) {
                            var r = f.accessibility[k];
                            if (0 === r.indexOf("cea-608:")) {
                                var s = r.substring(8), t = s.split(";");
                                if ("CC" === t[0].substring(0, 2)) for (k = 0; k < t.length; k++) f || (f = g.call(this, a, K[n][h])), i(f, t[k].substring(0, 3), t[k].substring(4)), p.push(f), f = null; else for (k = 0; k < t.length; k++) f || (f = g.call(this, a, K[n][h])), i(f, "CC" + (k + 1), t[k]), p.push(f), f = null
                            } else 0 === r.indexOf("cea-608") && (i(f, "CC1", "eng"), p.push(f), f = null)
                        }
                    }
                    f && "embeddedText" !== c && p.push(f)
                }
                return p
            }

            function r(a) {
                var b, c, d, e = [];
                if (!a) return null;
                for (b = I.getMpd(a), J = I.getRegularPeriods(a, b), b.checkTime = I.getCheckTime(a, J[0]), K = {}, c = J.length, d = 0; d < c; d++) e.push(k(a, J[d]));
                return e
            }

            function s(a) {
                var b = I.getMpd(a);
                return m(a, b)
            }

            function u(a, b) {
                var c = a.getRepresentationController().getRepresentationForQuality(b);
                return a.getIndexHandler().getInitRequest(c)
            }

            function w(a, b) {
                var d = c(b, a.getRepresentationController());
                return a.getIndexHandler().getNextSegmentRequest(d)
            }

            function x(a, b, d, e) {
                var f = c(b, a.getRepresentationController());
                return a.getIndexHandler().getSegmentRequestForTime(f, d, e)
            }

            function y(a, b, d) {
                var e = c(b, a.getRepresentationController());
                return a.getIndexHandler().generateSegmentRequestForTime(e, d)
            }

            function z(a) {
                return a.getIndexHandler().getCurrentTime()
            }

            function A(a, b) {
                return a.getIndexHandler().setCurrentTime(b)
            }

            function B(a, b) {
                var c, f, g = e(b.getStreamInfo()), h = b.getMediaInfo(), i = d(h), j = b.getType();
                c = h.id, f = c ? I.getAdaptationForId(c, a, g.index) : I.getAdaptationForIndex(h.index, a, g.index), b.getRepresentationController().updateData(f, i, j)
            }

            function C(a, b, c) {
                var d = b.getRepresentationForQuality(c);
                return d ? f(a, d) : null
            }

            function D(a, b) {
                var c = b.getCurrentRepresentation();
                return c ? f(a, c) : null
            }

            function E(a, b, c) {
                var d = new p.default, e = a.scheme_id_uri, f = a.value, g = a.timescale, h = a.presentation_time_delta,
                    i = a.event_duration, j = a.id, k = a.message_data, l = c * g + h;
                return b[e] ? (d.eventStream = b[e], d.eventStream.value = f, d.eventStream.timescale = g, d.duration = i, d.id = j, d.presentationTime = l, d.messageData = k, d.presentationTimeDelta = h, d) : null
            }

            function F(a, b, f) {
                var g = [];
                return b instanceof l.default ? g = I.getEventsForPeriod(a, e(b)) : b instanceof j.default ? g = I.getEventStreamForAdaptationSet(a, d(b)) : b instanceof h.default && (g = I.getEventStreamForRepresentation(a, c(b, f.getRepresentationController()))), g
            }

            function G() {
                J = [], K = {}
            }

            var H = void 0, I = void 0, J = void 0, K = void 0;
            return H = {
                initialize: b,
                convertDataToTrack: f,
                convertDataToMedia: g,
                convertDataToStream: k,
                getDataForTrack: c,
                getDataForMedia: d,
                getDataForStream: e,
                getStreamsInfo: r,
                getManifestInfo: s,
                getMediaInfoForType: o,
                getAllMediaInfoForType: q,
                getCurrentRepresentationInfo: D,
                getRepresentationInfoForQuality: C,
                updateData: B,
                getInitRequest: u,
                getNextFragmentRequest: w,
                getFragmentRequestForTime: x,
                generateFragmentRequestForTime: y,
                getIndexHandlerTime: z,
                setIndexHandlerTime: A,
                getEventsFor: F,
                getEvent: E,
                setConfig: a,
                reset: G,
                metricsList: v
            }
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var g = a(172), h = e(g), i = a(167), j = e(i), k = a(169), l = e(k), m = a(166), n = e(m), o = a(41), p = e(o),
            q = a(10), r = e(q), s = a(2), t = e(s), u = a(20), v = d(u);
        f.__dashjs_factory_name = "DashAdapter", c.default = r.default.getSingletonFactory(f), b.exports = c.default
    }, {10: 10, 166: 166, 167: 167, 169: 169, 172: 172, 2: 2, 20: 20, 41: 41}],
    16: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a) {
            function b() {
                U = -1, Y = 0, Z = NaN, M.on(l.default.INITIALIZATION_LOADED, I, T), M.on(l.default.SEGMENTS_LOADED, J, T)
            }

            function c(b) {
                $ = b, X = $.getType(), W = $.isDynamic(), _ = (0, w.default)(K).create(a, W)
            }

            function d() {
                return $
            }

            function e(a) {
                Y = a
            }

            function f() {
                return Y
            }

            function h() {
                return U
            }

            function k() {
                return Z
            }

            function m() {
                _ = null, Y = 0, Z = NaN, V = NaN, U = -1, W = null, X = null, $ = null, M.off(l.default.INITIALIZATION_LOADED, I, T), M.off(l.default.SEGMENTS_LOADED, J, T)
            }

            function o(a) {
                return a.split("$$").join("$")
            }

            function p(a, b) {
                if (null === b || a.indexOf("$RepresentationID$") === -1) return a;
                var c = b.toString();
                return a.split("$RepresentationID$").join(c)
            }

            function q(a, b, c) {
                var d, e, f = S.resolve(c.path);
                return f && b !== f.url && N.isRelative(b) ? (d = f.url, e = f.serviceLocation, b && (d += b)) : d = b, !N.isRelative(d) && (a.url = d, a.serviceLocation = e, !0)
            }

            function s(a, b) {
                var c, d, e = new g.default;
                if (c = a.adaptation.period, e.mediaType = b, e.type = j.HTTPRequest.INIT_SEGMENT_TYPE, e.range = a.range, d = c.start, e.availabilityStartTime = P.calcAvailabilityStartTimeFromPresentationTime(d, a.adaptation.period.mpd, W), e.availabilityEndTime = P.calcAvailabilityEndTimeFromPresentationTime(d + c.duration, c.mpd, W), e.quality = a.index, e.mediaInfo = $.getMediaInfo(), q(e, a.initialization, a)) return e
            }

            function v(a) {
                var b;
                return a ? b = s(a, X) : null
            }

            function y(a) {
                var b, c, d, e = a.adaptation.period, f = a.segmentInfoType, g = !1;
                return U < 0 ? g = !1 : W || U < a.availableSegmentsNumber ? (c = (0, u.getSegmentByIndex)(U, a), c && (d = c.presentationStartTime - e.start, b = a.adaptation.period.duration, L(a.segmentInfoType + ": " + d + " / " + b), g = ("SegmentTimeline" !== f || !W) && d >= b)) : g = !0, g
            }

            function z(a) {
                return _.getSegments(a, V, U, A)
            }

            function A(a, b) {
                if (a.segments = b, b && b.length > 0 && (Z = isNaN(Z) ? b[0].presentationStartTime : Math.min(b[0].presentationStartTime, Z)), W && isNaN(P.getExpectedLiveEdge())) {
                    var c = b.length - 1, d = b[c], e = d.presentationStartTime, f = R.getMetricsFor("stream");
                    P.setExpectedLiveEdge(e), R.updateManifestUpdateInfo(Q.getCurrentManifestUpdate(f), {presentationStartTime: e})
                }
            }

            function B(a) {
                if (!a) throw new i.default("no representation");
                return a.segments = null, z(a), a
            }

            function C(a, b) {
                var c, d = a.initialization,
                    e = "BaseURL" !== a.segmentInfoType && "SegmentBase" !== a.segmentInfoType && !a.indexRange;
                return a.segmentDuration || a.segments || B(a), a.segmentAvailabilityRange = null, a.segmentAvailabilityRange = P.calcSegmentAvailabilityRange(a, W), a.segmentAvailabilityRange.end < a.segmentAvailabilityRange.start && !a.useCalculatedLiveEdgeTime ? (c = new i.default(x, "no segments are available yet", {availabilityDelay: a.segmentAvailabilityRange.start - a.segmentAvailabilityRange.end}), void M.trigger(l.default.REPRESENTATION_UPDATED, {
                    sender: this,
                    representation: a,
                    error: c
                })) : (b || (U = -1), a.segmentDuration && B(a), d || O.loadInitialization(a), e || O.loadSegments(a, X, a.indexRange), void(d && e && M.trigger(l.default.REPRESENTATION_UPDATED, {
                    sender: this,
                    representation: a
                })))
            }

            function D(a, b, c) {
                var d, e, f, g, h, i = b.segments, j = i ? i.length : null, k = -1;
                if (i && j > 0) for (h = 0; h < j; h++) if (e = i[h], f = e.presentationStartTime, g = e.duration, d = void 0 === c || null === c ? g / 2 : c, a + d >= f && a - d < f + g) {
                    k = e.availabilityIdx;
                    break
                }
                return k
            }

            function E(a) {
                if (null === a || void 0 === a) return null;
                var b = new g.default, c = a.representation,
                    d = c.adaptation.period.mpd.manifest.Period_asArray[c.adaptation.period.index].AdaptationSet_asArray[c.adaptation.index].Representation_asArray[c.index].bandwidth,
                    e = a.media;
                return e = (0, u.replaceTokenForTemplate)(e, "Number", a.replacementNumber), e = (0, u.replaceTokenForTemplate)(e, "Time", a.replacementTime), e = (0, u.replaceTokenForTemplate)(e, "Bandwidth", d), e = p(e, c.id), e = o(e), b.mediaType = X, b.type = j.HTTPRequest.MEDIA_SEGMENT_TYPE, b.range = a.mediaRange, b.startTime = a.presentationStartTime, b.duration = a.duration, b.timescale = c.timescale, b.availabilityStartTime = a.availabilityStartTime, b.availabilityEndTime = a.availabilityEndTime, b.wallStartTime = a.wallStartTime, b.quality = c.index, b.index = a.availabilityIdx, b.mediaInfo = $.getMediaInfo(), b.adaptationIndex = c.adaptation.index, q(b, e, c) ? b : void 0
            }

            function F(a, b, c) {
                var d, e, f, h = U, i = !!c && c.keepIdx, j = c ? c.timeThreshold : null,
                    k = !(!c || !c.ignoreIsFinished);
                return a ? (V !== b && (V = b, L("Getting the request for " + X + " time : " + b)), U = D(b, a, j), z(a), U < 0 && (U = D(b, a, j)), U > 0 && L("Index for " + X + " time " + b + " is " + U), f = !k && y(a), f ? (d = new g.default, d.action = g.default.ACTION_COMPLETE, d.index = U, d.mediaType = X, d.mediaInfo = $.getMediaInfo(), L("Signal complete.", d)) : (e = (0, u.getSegmentByIndex)(U, a), d = E(e)), i && h >= 0 && (U = "SegmentTimeline" === a.segmentInfoType && W ? U : h), d) : null
            }

            function G(a, b) {
                var c = (a.segmentAvailabilityRange.end - a.segmentAvailabilityRange.start) / 2;
                return a.segments = null, a.segmentAvailabilityRange = {start: b - c, end: b + c}, F(a, b, {
                    keepIdx: !1,
                    ignoreIsFinished: !0
                })
            }

            function H(a) {
                var b, c, d;
                return a && U !== -1 ? (V = null, U++, L("Getting the next request at index: " + U), d = y(a), d ? (b = new g.default, b.action = g.default.ACTION_COMPLETE, b.index = U, b.mediaType = X, b.mediaInfo = $.getMediaInfo(), L("Signal complete.")) : (z(a), c = (0, u.getSegmentByIndex)(U, a), b = E(c), !c && W && U--), b) : null
            }

            function I(a) {
                var b = a.representation;
                b.segments && M.trigger(l.default.REPRESENTATION_UPDATED, {sender: this, representation: b})
            }

            function J(a) {
                if (!a.error && X === a.mediaType) {
                    var b, c, d, e, f = a.segments, g = a.representation, h = [], i = 0;
                    for (b = 0, c = f.length; b < c; b++) d = f[b], e = (0, u.getTimeBasedSegment)(P, W, g, d.startTime, d.duration, d.timescale, d.media, d.mediaRange, i), h.push(e), e = null, i++;
                    g.segmentAvailabilityRange = {
                        start: h[0].presentationStartTime,
                        end: h[c - 1].presentationStartTime
                    }, g.availableSegmentsNumber = c, A(g, h), g.initialization && M.trigger(l.default.REPRESENTATION_UPDATED, {
                        sender: this,
                        representation: g
                    })
                }
            }

            var K = this.context, L = (0, r.default)(K).getInstance().log, M = (0, n.default)(K).getInstance(),
                N = (0, t.default)(K).getInstance(), O = a.segmentBaseLoader, P = a.timelineConverter,
                Q = a.dashMetrics, R = a.metricsModel, S = a.baseURLController, T = void 0, U = void 0, V = void 0,
                W = void 0, X = void 0, Y = void 0, Z = void 0, $ = void 0, _ = void 0;
            return T = {
                initialize: c,
                getStreamProcessor: d,
                getInitRequest: v,
                getSegmentRequestForTime: F,
                getNextSegmentRequest: H,
                generateSegmentRequestForTime: G,
                updateRepresentation: C,
                setCurrentTime: e,
                getCurrentTime: f,
                getCurrentIndex: h,
                getEarliestTime: k,
                reset: m
            }, b(), T
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(163), g = d(f), h = a(162), i = d(h), j = a(179), k = a(13), l = d(k), m = a(9), n = d(m), o = a(10),
            p = d(o), q = a(8), r = d(q), s = a(158), t = d(s), u = a(35), v = a(34), w = d(v), x = 1;
        e.__dashjs_factory_name = "DashHandler";
        var y = p.default.getClassFactory(e);
        y.SEGMENTS_UNAVAILABLE_ERROR_CODE = x, c.default = y, b.exports = c.default
    }, {10: 10, 13: 13, 158: 158, 162: 162, 163: 163, 179: 179, 34: 34, 35: 35, 8: 8, 9: 9}],
    17: [function (a, b, c) {
        "use strict";

        function d(a) {
            if (a && a.__esModule) return a;
            var b = {};
            if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
            return b.default = a, b
        }

        function e(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function f() {
            function a(a, b) {
                var c, d = C.getValue(), e = d.Period_asArray[b];
                return c = x(e, a), null === c ? null : c.bandwidth
            }

            function b(a, b) {
                var c, d = C.getValue(), e = d.Period_asArray[b];
                return c = w(e, a)
            }

            function c(a, b) {
                var c, d = C.getValue(), e = d.Period_asArray[b];
                return c = z(e, a)
            }

            function d(a) {
                return m(a, o.TRACK_SWITCH)
            }

            function e(a) {
                return m(a, o.BUFFER_LEVEL)
            }

            function f(a) {
                var b = e(a);
                return b ? (0, p.round10)(b.level / 1e3, -3) : 0
            }

            function h(a) {
                return a.RequestsQueue
            }

            function j(a) {
                if (null === a) return null;
                var b, c, d = a.HttpList, e = null;
                if (null === d || d.length <= 0) return null;
                for (b = d.length, c = b - 1; c >= 0;) {
                    if (d[c].responsecode) {
                        e = d[c];
                        break
                    }
                    c--
                }
                return e
            }

            function l(a) {
                return null === a ? [] : a.HttpList ? a.HttpList : []
            }

            function m(a, b) {
                if (null === a) return null;
                var c = a[b];
                if (null === c) return null;
                var d = c.length;
                return d <= 0 ? null : c[d - 1]
            }

            function n(a) {
                return m(a, o.DROPPED_FRAMES)
            }

            function q(a) {
                return m(a, o.SCHEDULING_INFO)
            }

            function r(a) {
                return m(a, o.MANIFEST_UPDATE)
            }

            function s(a) {
                return m(a, o.DVR_INFO)
            }

            function t(a, b) {
                var c, d, e, f = {};
                if (null === a) return null;
                for (c = l(a), e = c.length - 1; e >= 0; e--) if (d = c[e], d.type === g.HTTPRequest.MPD_TYPE) {
                    f = v(d._responseHeaders);
                    break
                }
                return void 0 === f[b] ? null : f[b]
            }

            function u(a, b) {
                if (null === a) return null;
                var c, d = j(a);
                return null === d || null === d._responseHeaders ? null : (c = v(d._responseHeaders), void 0 === c[b] ? null : c[b])
            }

            function v(a) {
                var b = {};
                if (!a) return b;
                for (var c = a.split("\r\n"), d = 0, e = c.length; d < e; d++) {
                    var f = c[d], g = f.indexOf(": ");
                    g > 0 && (b[f.substring(0, g)] = f.substring(g + 2))
                }
                return b
            }

            function w(a, b) {
                var c = x(a, b, !0);
                return null !== c ? c : -1
            }

            function x(a, b, c) {
                var d, e, f, g, h, i;
                for (e = a.AdaptationSet_asArray, h = 0; h < e.length; h += 1) for (d = e[h], g = d.Representation_asArray, i = 0; i < g.length; i += 1) if (f = g[i], b === f.id) return c ? i : f;
                return null
            }

            function y(a, b) {
                return (0, k.default)(B).getInstance().getIsTypeOf(a, b)
            }

            function z(a, b) {
                var c, d, e, f;
                if (!a || !b) return -1;
                for (d = a.AdaptationSet_asArray, f = 0; f < d.length; f += 1) if (c = d[f], e = c.Representation_asArray, y(c, b)) return e.length;
                return -1
            }

            var A = void 0, B = this.context, C = (0, i.default)(B).getInstance();
            return A = {
                getBandwidthForRepresentation: a,
                getIndexForRepresentation: b,
                getMaxIndexForBufferType: c,
                getCurrentRepresentationSwitch: d,
                getLatestBufferLevelVO: e,
                getCurrentBufferLevel: f,
                getCurrentHttpRequest: j,
                getHttpRequests: l,
                getCurrentDroppedFrames: n,
                getCurrentSchedulingInfo: q,
                getCurrentDVRInfo: s,
                getCurrentManifestUpdate: r,
                getLatestFragmentRequestHeaderValueByID: u,
                getLatestMPDRequestHeaderValueByID: t,
                getRequestsQueue: h
            }
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var g = a(179), h = a(100), i = e(h), j = a(22), k = e(j), l = a(10), m = e(l), n = a(20), o = d(n), p = a(7);
        f.__dashjs_factory_name = "DashMetrics", c.default = m.default.getSingletonFactory(f), b.exports = c.default
    }, {10: 10, 100: 100, 179: 179, 20: 20, 22: 22, 7: 7}],
    18: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a() {
                u = (0, m.default)(n).getInstance(), v = (0, s.default)(n).getInstance(), x = (0, g.default)(n).getInstance()
            }

            function b(a) {
                a.baseURLController && (y = a.baseURLController)
            }

            function c(a, b) {
                var d = !0, e = null, f = null, g = new XMLHttpRequest, i = y.resolve(a.path), k = b || {
                    url: i ? i.url : void 0,
                    range: {start: 0, end: 1500},
                    searching: !1,
                    bytesLoaded: 0,
                    bytesToLoad: 1500,
                    request: g
                };
                p("Start searching for initialization."), g.onload = function () {
                    g.status < 200 || g.status > 299 || (d = !1, k.bytesLoaded = k.range.end, f = v.parse(g.response), e = h(f), e ? (a.range = e, a.initialization = k.url, r.trigger(o.default.INITIALIZATION_LOADED, {representation: a})) : (k.range.end = k.bytesLoaded + k.bytesToLoad, c(a, k)))
                }, g.onloadend = g.onerror = function () {
                    d && (d = !1, u.downloadError("initialization", k.url, g), r.trigger(o.default.INITIALIZATION_LOADED, {representation: a}))
                }, j(g, k), p("Perform init search: " + k.url)
            }

            function d(a, b, c, e, g) {
                if (c && (void 0 === c.start || void 0 === c.end)) {
                    var h = c ? c.toString().split("-") : null;
                    c = h ? {start: parseFloat(h[0]), end: parseFloat(h[1])} : null
                }
                g = g ? g : l;
                var i = !0, k = null, m = null, n = !!c, o = new XMLHttpRequest, q = y.resolve(a.path), r = {
                    url: q ? q.url : void 0,
                    range: n ? c : {start: 0, end: 1500},
                    searching: !n,
                    bytesLoaded: e ? e.bytesLoaded : 0,
                    bytesToLoad: 1500,
                    request: o
                };
                o.onload = function () {
                    if (!(o.status < 200 || o.status > 299)) {
                        var c = r.bytesToLoad, e = o.response.byteLength;
                        if (i = !1, r.bytesLoaded = r.range.end - r.range.start, k = v.parse(o.response), m = k.getBox("sidx"), m && m.isComplete) {
                            var h, j, l = m.references;
                            if (null !== l && void 0 !== l && l.length > 0 && (h = 1 === l[0].reference_type), h) {
                                p("Initiate multiple SIDX load."), r.range.end = r.range.start + m.size;
                                var n, q, s, t, u, w = [], x = 0, y = (m.offset || r.range.start) + m.size,
                                    z = function (c) {
                                        c ? (w = w.concat(c), x++, x >= q && g(w, a, b)) : g(null, a, b)
                                    };
                                for (n = 0, q = l.length; n < q; n++) s = y, t = y + l[n].referenced_size - 1, y += l[n].referenced_size, u = {
                                    start: s,
                                    end: t
                                }, d(a, null, u, r, z)
                            } else p("Parsing segments from SIDX."), j = f(m, r), g(j, a, b)
                        } else {
                            if (m) r.range.start = m.offset || r.range.start, r.range.end = r.range.start + (m.size || c); else {
                                if (e < r.bytesLoaded) return void g(null, a, b);
                                var A = k.getLastBox();
                                A && A.size ? (r.range.start = A.offset + A.size, r.range.end = r.range.start + c) : r.range.end += c
                            }
                            d(a, b, r.range, r, g)
                        }
                    }
                }, o.onloadend = o.onerror = function () {
                    i && (i = !1, u.downloadError("SIDX", r.url, o), g(null, a, b))
                }, j(o, r), p("Perform SIDX load: " + r.url)
            }

            function e() {
                u = null, v = null, x = null, p = null
            }

            function f(a, b) {
                for (var c, d, e, f, g = a.references, h = g.length, j = a.timescale, k = a.earliest_presentation_time, l = b.range.start + a.offset + a.first_offset + a.size, m = [], n = 0; n < h; n++) e = g[n].subsegment_duration, f = g[n].referenced_size, c = new i.default, c.duration = e, c.media = b.url, c.startTime = k, c.timescale = j, d = l + f - 1, c.mediaRange = l + "-" + d, m.push(c), k += e, l += f;
                return m
            }

            function h(a) {
                var b, c, d = a.getBox("ftyp"), e = a.getBox("moov"), f = null;
                return p("Searching for initialization."), e && e.isComplete && (b = d ? d.offset : e.offset, c = e.offset + e.size - 1, f = b + "-" + c, p("Found the initialization.  Range: " + f)), f
            }

            function j(a, b) {
                b.url && (a.open("GET", x.modifyRequestURL(b.url)), a.responseType = "arraybuffer", a.setRequestHeader("Range", "bytes=" + b.range.start + "-" + b.range.end), a = x.modifyRequestHeader(a), a.send(null))
            }

            function l(a, b, c) {
                a ? r.trigger(o.default.SEGMENTS_LOADED, {
                    segments: a,
                    representation: b,
                    mediaType: c
                }) : r.trigger(o.default.SEGMENTS_LOADED, {
                    segments: null,
                    representation: b,
                    mediaType: c,
                    error: new k.default(null, "error loading segments", null)
                })
            }

            var n = this.context, p = (0, w.default)(n).getInstance().log, r = (0, q.default)(n).getInstance(),
                t = void 0, u = void 0, v = void 0, x = void 0, y = void 0;
            return t = {setConfig: b, initialize: a, loadInitialization: c, loadSegments: d, reset: e}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(156), g = d(f), h = a(46), i = d(h), j = a(162), k = d(j), l = a(151), m = d(l), n = a(13), o = d(n),
            p = a(9), q = d(p), r = a(146), s = d(r), t = a(10), u = d(t), v = a(8), w = d(v);
        e.__dashjs_factory_name = "SegmentBaseLoader", c.default = u.default.getSingletonFactory(e), b.exports = c.default
    }, {10: 10, 13: 13, 146: 146, 151: 151, 156: 156, 162: 162, 46: 46, 8: 8, 9: 9}],
    19: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a() {
                y = {
                    EBML: {tag: 440786851, required: !0},
                    Segment: {
                        tag: 408125543,
                        required: !0,
                        SeekHead: {tag: 290298740, required: !0},
                        Info: {
                            tag: 357149030,
                            required: !0,
                            TimecodeScale: {tag: 2807729, required: !0, parse: "getMatroskaUint"},
                            Duration: {tag: 17545, required: !0, parse: "getMatroskaFloat"}
                        },
                        Tracks: {tag: 374648427, required: !0},
                        Cues: {
                            tag: 475249515,
                            required: !0,
                            CuePoint: {
                                tag: 187,
                                required: !0,
                                CueTime: {tag: 179, required: !0, parse: "getMatroskaUint"},
                                CueTrackPositions: {
                                    tag: 183,
                                    required: !0,
                                    CueTrack: {tag: 247, required: !0, parse: "getMatroskaUint"},
                                    CueClusterPosition: {tag: 241, required: !0, parse: "getMatroskaUint"},
                                    CueBlockNumber: {tag: 21368}
                                }
                            }
                        }
                    },
                    Void: {tag: 236, required: !0}
                }
            }

            function b() {
                A = (0, q.default)(p).getInstance(), B = (0, s.default)(p).getInstance(), D = (0, z.default)(p).create({
                    errHandler: A,
                    metricsModel: C,
                    requestModifier: B
                })
            }

            function c(a) {
                if (!a.baseURLController || !a.metricsModel) throw new Error("Missing config parameter(s)");
                E = a.baseURLController, C = a.metricsModel
            }

            function d(a) {
                var b = [], c = void 0, d = void 0, e = void 0, f = (0, k.default)(p).create({data: a}), g = void 0;
                for (f.consumeTag(y.Segment.Cues), d = f.getMatroskaCodedNum(); f.moreData() && f.consumeTagAndSize(y.Segment.Cues.CuePoint, !0);) {
                    for (c = {}, c.CueTime = f.parseTag(y.Segment.Cues.CuePoint.CueTime), c.CueTracks = []; f.moreData() && f.consumeTagAndSize(y.Segment.Cues.CuePoint.CueTrackPositions, !0);) {
                        if (e = {}, e.Track = f.parseTag(y.Segment.Cues.CuePoint.CueTrackPositions.CueTrack), 0 === e.Track) throw new Error("Cue track cannot be 0");
                        e.ClusterPosition = f.parseTag(y.Segment.Cues.CuePoint.CueTrackPositions.CueClusterPosition), f.getPos() + 4 > d || !f.consumeTag(y.Segment.Cues.CuePoint.CueTrackPositions.CueBlockNumber, !0) ? c.CueTracks.push(e) : (g = f.getMatroskaCodedNum(), e.BlockNumber = f.getMatroskaUint(g), c.CueTracks.push(e))
                    }
                    if (0 === c.CueTracks.length) throw new Error("Mandatory cuetrack not found");
                    b.push(c)
                }
                if (0 === b.length) throw new Error("mandatory cuepoint not found");
                return b
            }

            function e(a, b, c, e, f) {
                var g = void 0, h = void 0, i = void 0, j = void 0, k = void 0, l = void 0, m = void 0, n = void 0;
                for (h = d(a), i = [], k = 0, l = h.length; k < l; k += 1) j = new u.default, g = 0, g = k < h.length - 1 ? h[k + 1].CueTime - h[k].CueTime : f - h[k].CueTime, j.duration = g, j.media = b, j.startTime = h[k].CueTime, j.timescale = 1e3, m = h[k].CueTracks[0].ClusterPosition + c, n = k < h.length - 1 ? h[k + 1].CueTracks[0].ClusterPosition + c - 1 : e - 1, j.mediaRange = m + "-" + n, i.push(j);
                return r("Parsed cues: " + i.length + " cues."), i
            }

            function f(a, b, c, d) {
                var f = (0, k.default)(p).create({data: a}), g = void 0, h = void 0, i = c.split("-"), j = null,
                    l = {url: b, range: {start: parseFloat(i[0]), end: parseFloat(i[1])}, request: j}, n = void 0,
                    o = void 0;
                for (r("Parse EBML header: " + l.url), f.skipOverElement(y.EBML), f.consumeTag(y.Segment), n = f.getMatroskaCodedNum(), n += f.getPos(), o = f.getPos(); f.moreData() && !f.consumeTagAndSize(y.Segment.Info, !0);) if (!(f.skipOverElement(y.Segment.SeekHead, !0) || f.skipOverElement(y.Segment.Tracks, !0) || f.skipOverElement(y.Segment.Cues, !0) || f.skipOverElement(y.Void, !0))) throw new Error("no valid top level element found");
                for (; void 0 === g;) {
                    var q = f.getMatroskaCodedNum(!0), s = f.getMatroskaCodedNum();
                    switch (q) {
                        case y.Segment.Info.Duration.tag:
                            g = f[y.Segment.Info.Duration.parse](s);
                            break;
                        default:
                            f.setPos(f.getPos() + s)
                    }
                }
                j = m(l);
                var t = function (a) {
                    h = e(a, l.url, o, n, g), d(h)
                }, u = function () {
                    r("Download Error: Cues " + l.url), d(null)
                };
                D.load({
                    request: j,
                    success: t,
                    error: u
                }), r("Perform cues load: " + l.url + " bytes=" + l.range.start + "-" + l.range.end)
            }

            function h(a, b) {
                var c = null, d = E.resolve(a.path), e = d ? d.url : void 0, f = a.range.split("-"),
                    h = b || {range: {start: parseFloat(f[0]), end: parseFloat(f[1])}, request: c, url: e, init: !0};
                r("Start loading initialization."), c = m(h);
                var i = function () {
                    a.initialization = h.url, t.trigger(g.default.INITIALIZATION_LOADED, {representation: a})
                }, j = function () {
                    t.trigger(g.default.INITIALIZATION_LOADED, {representation: a})
                };
                D.load({request: c, success: i, error: j}), r("Perform init load: " + h.url)
            }

            function j(a, b, c, d) {
                var e = null, g = E.resolve(a.path), h = g ? g.url : void 0, i = 8192,
                    j = {bytesLoaded: 0, bytesToLoad: i, range: {start: 0, end: i}, request: e, url: h, init: !1};
                d = d ? d : l, e = m(j), r("Parsing ebml header");
                var k = function (e) {
                    f(e, h, c, function (c) {
                        d(c, a, b)
                    })
                }, n = function () {
                    d(null, a, b)
                };
                D.load({request: e, success: k, error: n})
            }

            function l(a, b, c) {
                a ? t.trigger(g.default.SEGMENTS_LOADED, {
                    segments: a,
                    representation: b,
                    mediaType: c
                }) : t.trigger(g.default.SEGMENTS_LOADED, {
                    segments: null,
                    representation: b,
                    mediaType: c,
                    error: new Error(null, "error loading segments", null)
                })
            }

            function m(a) {
                var b = new x.default;
                return b.type = a.init ? v.HTTPRequest.INIT_SEGMENT_TYPE : v.HTTPRequest.MEDIA_SEGMENT_TYPE, b.url = a.url, b.range = a.range.start + "-" + a.range.end, b
            }

            function n() {
                A = null, B = null, r = null
            }

            var p = this.context, r = (0, o.default)(p).getInstance().log, t = (0, i.default)(p).getInstance(),
                w = void 0, y = void 0, A = void 0, B = void 0, C = void 0, D = void 0, E = void 0;
            return w = {setConfig: c, initialize: b, loadInitialization: h, loadSegments: j, reset: n}, a(), w
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(13), g = d(f), h = a(9), i = d(h), j = a(150), k = d(j), l = a(10), m = d(l), n = a(8), o = d(n),
            p = a(151), q = d(p), r = a(156), s = d(r), t = a(46), u = d(t), v = a(179), w = a(163), x = d(w),
            y = a(58), z = d(y);
        e.__dashjs_factory_name = "WebmSegmentBaseLoader", c.default = m.default.getSingletonFactory(e), b.exports = c.default
    }, {10: 10, 13: 13, 150: 150, 151: 151, 156: 156, 163: 163, 179: 179, 46: 46, 58: 58, 8: 8, 9: 9}],
    20: [function (a, b, c) {
        "use strict";
        Object.defineProperty(c, "__esModule", {value: !0});
        var d = "TcpList";
        c.TCP_CONNECTION = d;
        var e = "HttpList";
        c.HTTP_REQUEST = e;
        var f = "RepSwitchList";
        c.TRACK_SWITCH = f;
        var g = "BufferLevel";
        c.BUFFER_LEVEL = g;
        var h = "BufferState";
        c.BUFFER_STATE = h;
        var i = "DVRInfo";
        c.DVR_INFO = i;
        var j = "DroppedFrames";
        c.DROPPED_FRAMES = j;
        var k = "SchedulingInfo";
        c.SCHEDULING_INFO = k;
        var l = "RequestsQueue";
        c.REQUESTS_QUEUE = l;
        var m = "ManifestUpdate";
        c.MANIFEST_UPDATE = m;
        var n = "ManifestUpdatePeriodInfo";
        c.MANIFEST_UPDATE_STREAM_INFO = n;
        var o = "ManifestUpdateRepresentationInfo";
        c.MANIFEST_UPDATE_TRACK_INFO = o;
        var p = "PlayList";
        c.PLAY_LIST = p;
        var q = "DVBErrors";
        c.DVB_ERRORS = q
    }, {}],
    21: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a() {
                P = null, Q = -1, R = !0, S = [], V = (0, m.default)(M).getInstance(), X = (0, q.default)(M).getInstance(), Y = (0, o.default)(M).getInstance(), Z = (0, s.default)(M).getInstance(), $ = (0, u.default)(M).getInstance(), _ = (0, y.default)(M).getInstance(), aa = (0, k.default)(M).getInstance(), ba = (0, g.default)(M).getInstance(), ca = (0, i.default)(M).getInstance(), da = (0, w.default)(M).getInstance(), N.on(E.default.QUALITY_CHANGE_REQUESTED, K, O), N.on(E.default.REPRESENTATION_UPDATED, G, O), N.on(E.default.WALLCLOCK_TIME_UPDATED, H, O), N.on(E.default.BUFFER_LEVEL_UPDATED, J, O), N.on(E.default.LIVE_EDGE_SEARCH_COMPLETED, I, O)
            }

            function b(a) {
                a.abrController && (V = a.abrController)
            }

            function c(a) {
                U = a, W = U.getIndexHandler()
            }

            function d() {
                return U
            }

            function e() {
                return P
            }

            function f() {
                return Q
            }

            function h() {
                return R
            }

            function j() {
                return T
            }

            function l() {
                N.off(E.default.QUALITY_CHANGE_REQUESTED, K, O), N.off(E.default.REPRESENTATION_UPDATED, G, O), N.off(E.default.WALLCLOCK_TIME_UPDATED, H, O), N.off(E.default.BUFFER_LEVEL_UPDATED, J, O), N.off(E.default.LIVE_EDGE_SEARCH_COMPLETED, I, O), P = null, Q = -1, R = !0, S = [], V = null, X = null, Y = null, Z = null, $ = null, _ = null, aa = null, ba = null, ca = null, da = null
            }

            function n(a, b, c) {
                var d, e, f = null, g = U.getStreamInfo(), h = V.getTopQualityIndexFor(c, g.id);
                if (R = !0, N.trigger(E.default.DATA_UPDATE_STARTED, {sender: this}), S = z(b), null === P && "fragmentedText" !== c ? (e = V.getAverageThroughput(c), f = e || V.getInitialBitrateFor(c, g), d = V.getQualityForBitrate(U.getMediaInfo(), f)) : d = V.getQualityFor(c, g), d > h && (d = h), T = t(d), P = a, "video" !== c && "audio" !== c && "fragmentedText" !== c) return R = !1, void N.trigger(E.default.DATA_UPDATE_COMPLETED, {
                    sender: this,
                    data: P,
                    currentRepresentation: T
                });
                for (var i = 0; i < S.length; i++) W.updateRepresentation(S[i], !0)
            }

            function p() {
                var a = new Date, b = j(), c = 1e3 * Y.getTime();
                $.addRepresentationSwitch(b.adaptation.type, a, c, b.id)
            }

            function r() {
                var a = aa.calcSegmentAvailabilityRange(T, U.isDynamic());
                $.addDVRInfo(U.getType(), Y.getTime(), U.getStreamInfo().manifestInfo, a)
            }

            function t(a) {
                return S[a]
            }

            function v(a) {
                return S.indexOf(a)
            }

            function x() {
                for (var a = 0, b = S.length; a < b; a++) {
                    var c = S[a].segmentInfoType;
                    if (null === S[a].segmentAvailabilityRange || null === S[a].initialization || ("SegmentBase" === c || "BaseURL" === c) && !S[a].segments) return !1
                }
                return !0
            }

            function z(a) {
                var b, c = Z.getValue();
                return Q = ba.getIndexForAdaptation(P, c, a.period.index), b = ba.getRepresentationsForAdaptation(c, a)
            }

            function B(a) {
                for (var b, c = 0, d = S.length; c < d; c++) b = S[c], b.segmentAvailabilityRange = aa.calcSegmentAvailabilityRange(b, a)
            }

            function D() {
                S.forEach(function (a) {
                    a.segmentAvailabilityRange = null
                })
            }

            function F(a) {
                var b = a, c = function () {
                    if (!h()) {
                        R = !0, N.trigger(E.default.DATA_UPDATE_STARTED, {sender: O}), D();
                        for (var a = 0; a < S.length; a++) W.updateRepresentation(S[a], !0)
                    }
                };
                R = !1, N.trigger(E.default.AST_IN_FUTURE, {delay: b}), setTimeout(c, b)
            }

            function G(a) {
                if (a.sender.getStreamProcessor() === U && h()) {
                    var b, c, d, e = a.representation, f = $.getMetricsFor("stream"),
                        g = $.getMetricsFor(j().adaptation.type), i = ca.getCurrentManifestUpdate(f), k = !1, l = 0;
                    if ("dynamic" === e.adaptation.period.mpd.manifest.type) {
                        var m = e.segmentAvailabilityRange.end - e.segmentAvailabilityRange.start,
                            n = Y.computeLiveDelay(T.segmentDuration, U.getStreamInfo().manifestInfo.DVRWindowSize);
                        l = 1e3 * (n - m)
                    }
                    if (l > 0) return r(), F(l), c = new A.default(L, "Segments update failed", null), void N.trigger(E.default.DATA_UPDATE_COMPLETED, {
                        sender: this,
                        data: P,
                        currentRepresentation: T,
                        error: c
                    });
                    if (i) {
                        for (var o = 0; o < i.trackInfo.length; o++) if (b = i.trackInfo[o], b.index === e.index && b.mediaType === U.getType()) {
                            k = !0;
                            break
                        }
                        k || $.addManifestUpdateRepresentationInfo(i, e.id, e.index, e.adaptation.period.index, U.getType(), e.presentationTimeOffset, e.startNumber, e.segmentInfoType)
                    }
                    x() && (R = !1, V.setPlaybackQuality(U.getType(), U.getStreamInfo(), v(T)), $.updateManifestUpdateInfo(i, {latency: T.segmentAvailabilityRange.end - Y.getTime()}), d = ca.getCurrentRepresentationSwitch(g), d || p(), N.trigger(E.default.DATA_UPDATE_COMPLETED, {
                        sender: this,
                        data: P,
                        currentRepresentation: T
                    }))
                }
            }

            function H(a) {
                a.isDynamic && B(a.isDynamic)
            }

            function I(a) {
                if (!a.error) {
                    B(!0), W.updateRepresentation(T, !1);
                    var b = Z.getValue(), c = T.adaptation.period, d = X.getActiveStreamInfo();
                    d.isLast && (c.mpd.checkTime = ba.getCheckTime(b, c), c.duration = ba.getEndTimeForLastPeriod(Z.getValue(), c) - c.start, d.duration = c.duration)
                }
            }

            function J(a) {
                a.sender.getStreamProcessor() === U && r()
            }

            function K(a) {
                a.mediaType === U.getType() && U.getStreamInfo().id === a.streamInfo.id && a.oldQuality !== a.newQuality && (T = t(a.newQuality), _.setSavedBitrateSettings(a.mediaType, T.bandwidth), p())
            }

            var L = 1, M = this.context, N = (0, C.default)(M).getInstance(), O = void 0, P = void 0, Q = void 0,
                R = void 0, S = void 0, T = void 0, U = void 0, V = void 0, W = void 0, X = void 0, Y = void 0,
                Z = void 0, $ = void 0, _ = void 0, aa = void 0, ba = void 0, ca = void 0, da = void 0;
            return O = {
                initialize: c,
                setConfig: b,
                getData: e,
                getDataIndex: f,
                isUpdating: h,
                updateData: n,
                getStreamProcessor: d,
                getCurrentRepresentation: j,
                getRepresentationForQuality: t,
                reset: l
            }, a(), O
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(22), g = d(f), h = a(17), i = d(h), j = a(37), k = d(j), l = a(60), m = d(l), n = a(68), o = d(n),
            p = a(71), q = d(p), r = a(100), s = d(r), t = a(102), u = d(t), v = a(101), w = d(v), x = a(149), y = d(x),
            z = a(162), A = d(z), B = a(9), C = d(B), D = a(13), E = d(D), F = a(10), G = d(F);
        e.__dashjs_factory_name = "RepresentationController", c.default = G.default.getClassFactory(e), b.exports = c.default
    }, {
        10: 10,
        100: 100,
        101: 101,
        102: 102,
        13: 13,
        149: 149,
        162: 162,
        17: 17,
        22: 22,
        37: 37,
        60: 60,
        68: 68,
        71: 71,
        9: 9
    }],
    22: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a(a, b) {
                var c, d, e, f = !1, g = !1, h = a.ContentComponent_asArray,
                    i = "text" !== b ? new RegExp(b) : new RegExp("(vtt|ttml)");
                if (a.Representation_asArray.length > 0 && a.Representation_asArray[0].hasOwnProperty("codecs")) {
                    var j = a.Representation_asArray[0].codecs;
                    if ("stpp" === j || "wvtt" === j) return "fragmentedText" === b
                }
                if (h) {
                    if (h.length > 1) return "muxed" === b;
                    h[0] && h[0].contentType === b && (f = !0, g = !0)
                }
                if (a.hasOwnProperty("mimeType") && (f = i.test(a.mimeType), g = !0), !g) for (c = 0, d = a.Representation_asArray.length; !g && c < d;) e = a.Representation_asArray[c], e.hasOwnProperty("mimeType") && (f = i.test(e.mimeType), g = !0), c++;
                return f
            }

            function b(b) {
                return a(b, "audio")
            }

            function c(b) {
                return a(b, "video")
            }

            function d(b) {
                return a(b, "fragmentedText")
            }

            function e(b) {
                return a(b, "text")
            }

            function f(b) {
                return a(b, "muxed")
            }

            function h(a) {
                return "text/vtt" === a || "application/ttml+xml" === a
            }

            function j(a) {
                var b = "";
                return a.hasOwnProperty("lang") && (b = a.lang.replace(/[^A-Za-z0-9-]/g, "")), b
            }

            function l(a) {
                return a.hasOwnProperty("Viewpoint") ? a.Viewpoint : null
            }

            function n(a) {
                return a.hasOwnProperty("Role_asArray") ? a.Role_asArray : []
            }

            function p(a) {
                return a.hasOwnProperty("Accessibility_asArray") ? a.Accessibility_asArray : []
            }

            function r(a) {
                return a.hasOwnProperty("AudioChannelConfiguration_asArray") ? a.AudioChannelConfiguration_asArray : []
            }

            function t(a) {
                return n(a).filter(function (a) {
                    return "main" === a.value
                })[0]
            }

            function v() {
                return function (a, b) {
                    return a.bandwidth - b.bandwidth
                }
            }

            function x(a) {
                return void 0 !== a.Representation_asArray && null !== a.Representation_asArray && a.Representation_asArray.sort(v()), a
            }

            function z(a, b, c) {
                var d, e, f = b.Period_asArray[c].AdaptationSet_asArray;
                for (d = 0, e = f.length; d < e; d++) if (f[d].hasOwnProperty("id") && f[d].id === a) return f[d];
                return null
            }

            function B(a, b, c) {
                var d = b.Period_asArray[c].AdaptationSet_asArray;
                return d[a]
            }

            function D(a, b, c) {
                var d, e, f = b.Period_asArray[c].AdaptationSet_asArray;
                for (d = 0, e = f.length; d < e; d++) if (f[d] === a) return d;
                return -1
            }

            function E(b, c, d) {
                var e, f, g = b.Period_asArray[c].AdaptationSet_asArray, h = [];
                for (e = 0, f = g.length; e < f; e++) a(g[e], d) && h.push(x(g[e]));
                return h
            }

            function F(a, b, c, d) {
                var e = E(a, b, c);
                if (!e || 0 === e.length) return null;
                if (e.length > 1 && d) for (var f = la.getCurrentTrackFor(c, d), g = ma.getAllMediaInfoForType(a, d, c), h = 0, i = e.length; h < i; h++) {
                    if (f && la.isTracksEqual(f, g[h])) return e[h];
                    if (t(e[h])) return e[h]
                }
                return e[0]
            }

            function G(a) {
                var b = a.Representation_asArray[0];
                return b.mimeType + ';codecs="' + b.codecs + '"'
            }

            function H(a) {
                return a.Representation_asArray[0].mimeType
            }

            function I(a) {
                return a && a.hasOwnProperty("cenc:default_KID") ? a["cenc:default_KID"] : null
            }

            function J(a) {
                return a && a.hasOwnProperty("ContentProtection_asArray") && 0 !== a.ContentProtection_asArray.length ? a.ContentProtection_asArray : null
            }

            function K(a) {
                var b = !1;
                return a.hasOwnProperty("type") && (b = "dynamic" === a.type), b
            }

            function L(a) {
                var b, c, d = K(a);
                return b = !isNaN(a.timeShiftBufferDepth), c = d && b
            }

            function M(a, b) {
                var c = !1;
                return a.profiles && a.profiles.length > 0 && (c = a.profiles.indexOf(b) !== -1), c
            }

            function N(a) {
                return M(a, "urn:mpeg:dash:profile:isoff-on-demand:2011")
            }

            function O(a) {
                return M(a, "urn:dvb:dash:profile:dvb-dash:2014")
            }

            function P(a) {
                var b;
                return b = a.hasOwnProperty("mediaPresentationDuration") ? a.mediaPresentationDuration : Number.MAX_VALUE
            }

            function Q(a) {
                return a.bandwidth
            }

            function R(a) {
                var b = NaN, c = 2;
                return a.hasOwnProperty("minimumUpdatePeriod") && (b = Math.max(parseFloat(a.minimumUpdatePeriod), c)), b
            }

            function S(a) {
                return a.Representation_asArray.length
            }

            function T(a) {
                if (!a || !a.Representation_asArray || !a.Representation_asArray.length) return null;
                for (var b = x(a), c = b.Representation_asArray, d = c.length, e = [], f = 0; f < d; f++) e.push({
                    bandwidth: c[f].bandwidth,
                    width: c[f].width || 0,
                    height: c[f].height || 0
                });
                return e
            }

            function U(a, b) {
                return b.Representation_asArray[a]
            }

            function V(a, b) {
                for (var c, d, e, f, i, j = x(a.Period_asArray[b.period.index].AdaptationSet_asArray[b.index]), k = [], l = 0; l < j.Representation_asArray.length; l++) f = j.Representation_asArray[l], c = new g.default, c.index = l, c.adaptation = b, f.hasOwnProperty("id") && (c.id = f.id), f.hasOwnProperty("bandwidth") && (c.bandwidth = f.bandwidth), f.hasOwnProperty("maxPlayoutRate") && (c.maxPlayoutRate = f.maxPlayoutRate), f.hasOwnProperty("SegmentBase") ? (e = f.SegmentBase, c.segmentInfoType = "SegmentBase") : f.hasOwnProperty("SegmentList") ? (e = f.SegmentList, e.hasOwnProperty("SegmentTimeline") ? (c.segmentInfoType = "SegmentTimeline", i = e.SegmentTimeline.S_asArray[e.SegmentTimeline.S_asArray.length - 1], (!i.hasOwnProperty("r") || i.r >= 0) && (c.useCalculatedLiveEdgeTime = !0)) : (c.segmentInfoType = "SegmentList", c.useCalculatedLiveEdgeTime = !0)) : f.hasOwnProperty("SegmentTemplate") ? (e = f.SegmentTemplate, e.hasOwnProperty("SegmentTimeline") ? (c.segmentInfoType = "SegmentTimeline", i = e.SegmentTimeline.S_asArray[e.SegmentTimeline.S_asArray.length - 1], (!i.hasOwnProperty("r") || i.r >= 0) && (c.useCalculatedLiveEdgeTime = !0)) : c.segmentInfoType = "SegmentTemplate", e.hasOwnProperty("initialization") && (c.initialization = e.initialization.split("$Bandwidth$").join(f.bandwidth).split("$RepresentationID$").join(f.id))) : (e = f.BaseURL, c.segmentInfoType = "BaseURL"), e.hasOwnProperty("Initialization") ? (d = e.Initialization, d.hasOwnProperty("sourceURL") ? c.initialization = d.sourceURL : d.hasOwnProperty("range") && (c.range = d.range)) : f.hasOwnProperty("mimeType") && h(f.mimeType) && (c.range = 0), e.hasOwnProperty("timescale") && (c.timescale = e.timescale), e.hasOwnProperty("duration") && (c.segmentDuration = e.duration / c.timescale), e.hasOwnProperty("startNumber") && (c.startNumber = e.startNumber), e.hasOwnProperty("indexRange") && (c.indexRange = e.indexRange), e.hasOwnProperty("presentationTimeOffset") && (c.presentationTimeOffset = e.presentationTimeOffset / c.timescale), c.MSETimeOffset = ka.calcMSETimeOffset(c), c.path = [b.period.index, b.index, l], k.push(c);
                return k
            }

            function W(a, e) {
                for (var g, h, j = a.Period_asArray[e.index], k = [], l = 0; l < j.AdaptationSet_asArray.length; l++) h = j.AdaptationSet_asArray[l], g = new i.default, h.hasOwnProperty("id") && (g.id = h.id), g.index = l, g.period = e, f(h) ? g.type = "muxed" : b(h) ? g.type = "audio" : c(h) ? g.type = "video" : d(h) ? g.type = "fragmentedText" : g.type = "text", k.push(g);
                return k
            }

            function X(a, b) {
                var c, d, e = K(a), f = [], g = null, h = null, i = null, j = null;
                for (d = 0, c = a.Period_asArray.length; d < c; d++) h = a.Period_asArray[d], h.hasOwnProperty("start") ? (j = new k.default, j.start = h.start) : null !== g && h.hasOwnProperty("duration") && null !== i ? (j = new k.default, j.start = i.start + i.duration, j.duration = h.duration) : 0 !== d || e || (j = new k.default, j.start = 0), null !== i && isNaN(i.duration) && (i.duration = j.start - i.start), null !== j && (j.id = Y(h)), null !== j && h.hasOwnProperty("duration") && (j.duration = h.duration), null !== j && (j.index = d, j.mpd = b, f.push(j), g = h, i = j), h = null, j = null;
                return 0 === f.length ? f : (null !== i && isNaN(i.duration) && (i.duration = aa(a, i) - i.start), f)
            }

            function Y(a) {
                if (!a) throw new Error("Period cannot be null or undefined");
                var b = k.default.DEFAULT_ID;
                return a.hasOwnProperty("id") && "__proto__" !== a.id && (b = a.id), b
            }

            function Z(a) {
                var b = new m.default;
                return b.manifest = a, a.hasOwnProperty("availabilityStartTime") ? b.availabilityStartTime = new Date(a.availabilityStartTime.getTime()) : b.availabilityStartTime = new Date(a.loadedTime.getTime()), a.hasOwnProperty("availabilityEndTime") && (b.availabilityEndTime = new Date(a.availabilityEndTime.getTime())), a.hasOwnProperty("suggestedPresentationDelay") && (b.suggestedPresentationDelay = a.suggestedPresentationDelay), a.hasOwnProperty("timeShiftBufferDepth") && (b.timeShiftBufferDepth = a.timeShiftBufferDepth), a.hasOwnProperty("maxSegmentDuration") && (b.maxSegmentDuration = a.maxSegmentDuration), b
            }

            function $(a, b) {
                return ka.calcPresentationTimeFromWallTime(a.loadedTime, b)
            }

            function _(a, b) {
                var c, d = NaN;
                return a.hasOwnProperty("minimumUpdatePeriod") && (c = $(a, b), d = c + a.minimumUpdatePeriod), d
            }

            function aa(a, b) {
                var c, d = _(a, b);
                if (a.mediaPresentationDuration) c = a.mediaPresentationDuration; else {
                    if (isNaN(d)) throw new Error("Must have @mediaPresentationDuration or @minimumUpdatePeriod on MPD or an explicit @duration on the last period.");
                    c = d
                }
                return c
            }

            function ba(a, b) {
                var c = a.Period_asArray, d = c[b.index].EventStream_asArray, e = [];
                if (d) for (var f = 0; f < d.length; f++) {
                    var g = new A.default;
                    if (g.period = b, g.timescale = 1, !d[f].hasOwnProperty("schemeIdUri")) throw new Error("Invalid EventStream. SchemeIdUri has to be set");
                    g.schemeIdUri = d[f].schemeIdUri, d[f].hasOwnProperty("timescale") && (g.timescale = d[f].timescale), d[f].hasOwnProperty("value") && (g.value = d[f].value);
                    for (var h = 0; h < d[f].Event_asArray.length; h++) {
                        var i = new w.default;
                        i.presentationTime = 0, i.eventStream = g, d[f].Event_asArray[h].hasOwnProperty("presentationTime") && (i.presentationTime = d[f].Event_asArray[h].presentationTime), d[f].Event_asArray[h].hasOwnProperty("duration") && (i.duration = d[f].Event_asArray[h].duration), d[f].Event_asArray[h].hasOwnProperty("id") && (i.id = d[f].Event_asArray[h].id), e.push(i)
                    }
                }
                return e
            }

            function ca(a, b) {
                var c = [];
                if (!a) return c;
                for (var d = 0; d < a.length; d++) {
                    var e = new A.default;
                    if (e.timescale = 1, e.representation = b, !a[d].hasOwnProperty("schemeIdUri")) throw new Error("Invalid EventStream. SchemeIdUri has to be set");
                    e.schemeIdUri = a[d].schemeIdUri, a[d].hasOwnProperty("timescale") && (e.timescale = a[d].timescale), a[d].hasOwnProperty("value") && (e.value = a[d].value), c.push(e)
                }
                return c
            }

            function da(a, b) {
                var c = a.Period_asArray[b.period.index].AdaptationSet_asArray[b.index].InbandEventStream_asArray;
                return ca(c, null)
            }

            function ea(a, b) {
                var c = a.Period_asArray[b.adaptation.period.index].AdaptationSet_asArray[b.adaptation.index].Representation_asArray[b.index].InbandEventStream_asArray;
                return ca(c, b)
            }

            function fa(a) {
                var b = K(a), c = a.hasOwnProperty("availabilityStartTime"), d = a.UTCTiming_asArray, e = [];
                return (b || c) && d && d.forEach(function (a) {
                    var b = new o.default;
                    a.hasOwnProperty("schemeIdUri") && (b.schemeIdUri = a.schemeIdUri, a.hasOwnProperty("value") && (b.value = a.value.toString(), e.push(b)))
                }), e
            }

            function ga(a) {
                var b = [], c = a.BaseURL_asArray || [a.baseUri], d = !1;
                return c.some(function (c) {
                    if (c) {
                        var e = new y.default, f = c.__text || c;
                        return na.isRelative(f) && (d = !0, a.baseUri && (f = a.baseUri + f)), e.url = f, c.hasOwnProperty("serviceLocation") && c.serviceLocation.length ? e.serviceLocation = c.serviceLocation : e.serviceLocation = f, c.hasOwnProperty("dvb:priority") && (e.dvb_priority = c["dvb:priority"]), c.hasOwnProperty("dvb:weight") && (e.dvb_weight = c["dvb:weight"]), b.push(e), d
                    }
                }), b
            }

            function ha(a) {
                return a.hasOwnProperty("Location") && (a.Location = a.Location_asArray[0]), a.Location
            }

            var ia = void 0, ja = this.context, ka = (0, q.default)(ja).getInstance(),
                la = (0, s.default)(ja).getInstance(), ma = (0, u.default)(ja).getInstance(),
                na = (0, C.default)(ja).getInstance();
            return ia = {
                getIsTypeOf: a,
                getIsAudio: b,
                getIsVideo: c,
                getIsText: e,
                getIsMuxed: f,
                getIsTextTrack: h,
                getIsFragmentedText: d,
                getIsMain: t,
                getLanguageForAdaptation: j,
                getViewpointForAdaptation: l,
                getRolesForAdaptation: n,
                getAccessibilityForAdaptation: p,
                getAudioChannelConfigurationForAdaptation: r,
                processAdaptation: x,
                getAdaptationForIndex: B,
                getIndexForAdaptation: D,
                getAdaptationForId: z,
                getAdaptationsForType: E,
                getAdaptationForType: F,
                getCodec: G,
                getMimeType: H,
                getKID: I,
                getContentProtectionData: J,
                getIsDynamic: K,
                getIsDVR: L,
                getIsOnDemand: N,
                getIsDVB: O,
                getDuration: P,
                getBandwidth: Q,
                getRefreshDelay: R,
                getRepresentationCount: S,
                getBitrateListForAdaptation: T,
                getRepresentationFor: U,
                getRepresentationsForAdaptation: V,
                getAdaptationsForPeriod: W,
                getRegularPeriods: X,
                getPeriodId: Y,
                getMpd: Z,
                getFetchTime: $,
                getCheckTime: _,
                getEndTimeForLastPeriod: aa,
                getEventsForPeriod: ba,
                getEventStreams: ca,
                getEventStreamForAdaptationSet: da,
                getEventStreamForRepresentation: ea,
                getUTCTimingSources: fa,
                getBaseURLsFromElement: ga,
                getRepresentationSortFunction: v,
                getLocation: ha
            }
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(45), g = d(f), h = a(39), i = d(h), j = a(44), k = d(j), l = a(43), m = d(l), n = a(47), o = d(n),
            p = a(37), q = d(p), r = a(66), s = d(r), t = a(15), u = d(t), v = a(41), w = d(v), x = a(40), y = d(x),
            z = a(42), A = d(z), B = a(158), C = d(B), D = a(10), E = d(D);
        e.__dashjs_factory_name = "DashManifestModel", c.default = E.default.getSingletonFactory(e), b.exports = c.default
    }, {10: 10, 15: 15, 158: 158, 37: 37, 39: 39, 40: 40, 41: 41, 42: 42, 43: 43, 44: 44, 45: 45, 47: 47, 66: 66}],
    23: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a() {
                h = [new q.default, new s.default, new u.default], i = new o.default(h, "", (!0)), j = new m.default([new w.default, new y.default])
            }

            function b(a, b) {
                var c;
                try {
                    var f = window.performance.now();
                    if (c = i.xml_str2json(a), !c) throw new Error("parser error");
                    var g = window.performance.now();
                    j.run(c);
                    var k = window.performance.now();
                    b.setMatchers(h), b.setIron(j), d("Parsing complete: ( xml2json: " + (g - f).toPrecision(3) + "ms, objectiron: " + (k - g).toPrecision(3) + "ms, total: " + ((k - f) / 1e3).toPrecision(3) + "s)")
                } catch (l) {
                    return e.manifestError("parsing the manifest failed", "parse", a, l), null
                }
                return c
            }

            var c = this.context, d = (0, k.default)(c).getInstance().log, e = (0, g.default)(c).getInstance(),
                f = void 0, h = void 0, i = void 0, j = void 0;
            return f = {
                parse: b
            }, a(), f
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(151), g = d(f), h = a(10), i = d(h), j = a(8), k = d(j), l = a(3), m = d(l), n = a(4), o = d(n),
            p = a(30), q = d(p), r = a(29), s = d(r), t = a(31), u = d(t), v = a(26), w = d(v), x = a(27), y = d(x);
        e.__dashjs_factory_name = "DashParser", c.default = i.default.getClassFactory(e), b.exports = c.default
    }, {10: 10, 151: 151, 26: 26, 27: 27, 29: 29, 3: 3, 30: 30, 31: 31, 4: 4, 8: 8}],
    24: [function (a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function () {
            function a(a, b) {
                for (var c = 0; c < b.length; c++) {
                    var d = b[c];
                    d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                }
            }

            return function (b, c, d) {
                return c && a(b.prototype, c), d && a(b, d), b
            }
        }(), f = function () {
            function a(b, c) {
                d(this, a);
                var e = function (a) {
                    return a && a.length && a.charAt(0) === a.charAt(0).toUpperCase()
                };
                this._name = b, this._merge = void 0 !== c ? c : e(b)
            }

            return e(a, [{
                key: "name", get: function () {
                    return this._name
                }
            }, {
                key: "merge", get: function () {
                    return this._merge
                }
            }]), a
        }();
        c.default = f, b.exports = c.default
    }, {}],
    25: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = function () {
            function a(a, b) {
                for (var c = 0; c < b.length; c++) {
                    var d = b[c];
                    d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                }
            }

            return function (b, c, d) {
                return c && a(b.prototype, c), d && a(b, d), b
            }
        }(), g = a(24), h = d(g), i = function () {
            function a(b, c, d, f, g) {
                var i = this;
                e(this, a), this._name = b || "", this._properties = [], this._children = d || [], this._isRoot = f || !1, this._isArray = g || !0, Array.isArray(c) && c.forEach(function (a) {
                    i._properties.push(new h.default(a))
                })
            }

            return f(a, [{
                key: "name", get: function () {
                    return this._name
                }
            }, {
                key: "isRoot", get: function () {
                    return this._isRoot
                }
            }, {
                key: "isArray", get: function () {
                    return this._isArray
                }
            }, {
                key: "children", get: function () {
                    return this._children
                }
            }, {
                key: "properties", get: function () {
                    return this._properties
                }
            }]), a
        }();
        c.default = i, b.exports = c.default
    }, {24: 24}],
    26: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        function f(a, b) {
            if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var g = function (a, b, c) {
            for (var d = !0; d;) {
                var e = a, f = b, g = c;
                d = !1, null === e && (e = Function.prototype);
                var h = Object.getOwnPropertyDescriptor(e, f);
                if (void 0 !== h) {
                    if ("value" in h) return h.value;
                    var i = h.get;
                    if (void 0 === i) return;
                    return i.call(g)
                }
                var j = Object.getPrototypeOf(e);
                if (null === j) return;
                a = j, b = f, c = g, d = !0, h = j = void 0
            }
        }, h = a(25), i = d(h), j = function (a) {
            function b() {
                e(this, b);
                var a = ["profiles", "width", "height", "sar", "frameRate", "audioSamplingRate", "mimeType", "segmentProfiles", "codecs", "maximumSAPPeriod", "startWithSAP", "maxPlayoutRate", "codingDependency", "scanType", "FramePacking", "AudioChannelConfiguration", "ContentProtection", "EssentialProperty", "SupplementalProperty", "InbandEventStream"];
                return g(Object.getPrototypeOf(b.prototype), "constructor", this).call(this, "AdaptationSet", a, [new i.default("Representation", a, [new i.default("SubRepresentation", a)])])
            }

            return f(b, a), b
        }(i.default);
        c.default = j, b.exports = c.default
    }, {25: 25}],
    27: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        function f(a, b) {
            if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var g = function (a, b, c) {
            for (var d = !0; d;) {
                var e = a, f = b, g = c;
                d = !1, null === e && (e = Function.prototype);
                var h = Object.getOwnPropertyDescriptor(e, f);
                if (void 0 !== h) {
                    if ("value" in h) return h.value;
                    var i = h.get;
                    if (void 0 === i) return;
                    return i.call(g)
                }
                var j = Object.getPrototypeOf(e);
                if (null === j) return;
                a = j, b = f, c = g, d = !0, h = j = void 0
            }
        }, h = a(25), i = d(h), j = function (a) {
            function b() {
                e(this, b);
                var a = ["SegmentBase", "SegmentTemplate", "SegmentList"];
                return g(Object.getPrototypeOf(b.prototype), "constructor", this).call(this, "Period", a, [new i.default("AdaptationSet", a, [new i.default("Representation", a)])])
            }

            return f(b, a), b
        }(i.default);
        c.default = j, b.exports = c.default
    }, {25: 25}],
    28: [function (a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function () {
            function a(a, b) {
                for (var c = 0; c < b.length; c++) {
                    var d = b[c];
                    d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                }
            }

            return function (b, c, d) {
                return c && a(b.prototype, c), d && a(b, d), b
            }
        }(), f = function () {
            function a(b, c) {
                d(this, a), this._test = b, this._converter = c
            }

            return e(a, [{
                key: "test", get: function () {
                    return this._test
                }
            }, {
                key: "converter", get: function () {
                    return this._converter
                }
            }]), a
        }();
        c.default = f, b.exports = c.default
    }, {}],
    29: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        function f(a, b) {
            if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var g = function (a, b, c) {
                for (var d = !0; d;) {
                    var e = a, f = b, g = c;
                    d = !1, null === e && (e = Function.prototype);
                    var h = Object.getOwnPropertyDescriptor(e, f);
                    if (void 0 !== h) {
                        if ("value" in h) return h.value;
                        var i = h.get;
                        if (void 0 === i) return;
                        return i.call(g)
                    }
                    var j = Object.getPrototypeOf(e);
                    if (null === j) return;
                    a = j, b = f, c = g, d = !0, h = j = void 0
                }
            }, h = a(28), i = d(h), j = 60, k = 60, l = 1e3,
            m = /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2})(?::([0-9]*)(\.[0-9]*)?)?(?:([+-])([0-9]{2})(?::?)([0-9]{2}))?/,
            n = function (a) {
                function b() {
                    e(this, b), g(Object.getPrototypeOf(b.prototype), "constructor", this).call(this, function (a) {
                        return m.test(a.value)
                    }, function (a) {
                        var b = m.exec(a), c = void 0;
                        if (c = Date.UTC(parseInt(b[1], 10), parseInt(b[2], 10) - 1, parseInt(b[3], 10), parseInt(b[4], 10), parseInt(b[5], 10), b[6] && parseInt(b[6], 10) || 0, b[7] && parseFloat(b[7]) * l || 0), b[9] && b[10]) {
                            var d = parseInt(b[9], 10) * k + parseInt(b[10], 10);
                            c += ("+" === b[8] ? -1 : 1) * d * j * l
                        }
                        return new Date(c)
                    })
                }

                return f(b, a), b
            }(i.default);
        c.default = n, b.exports = c.default
    }, {28: 28}],
    30: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        function f(a, b) {
            if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var g = function (a, b, c) {
                for (var d = !0; d;) {
                    var e = a, f = b, g = c;
                    d = !1, null === e && (e = Function.prototype);
                    var h = Object.getOwnPropertyDescriptor(e, f);
                    if (void 0 !== h) {
                        if ("value" in h) return h.value;
                        var i = h.get;
                        if (void 0 === i) return;
                        return i.call(g)
                    }
                    var j = Object.getPrototypeOf(e);
                    if (null === j) return;
                    a = j, b = f, c = g, d = !0, h = j = void 0
                }
            }, h = a(28), i = d(h),
            j = /^([-])?P(([\d.]*)Y)?(([\d.]*)M)?(([\d.]*)D)?T?(([\d.]*)H)?(([\d.]*)M)?(([\d.]*)S)?/, k = 31536e3,
            l = 2592e3, m = 86400, n = 3600, o = 60, p = function (a) {
                function b() {
                    e(this, b), g(Object.getPrototypeOf(b.prototype), "constructor", this).call(this, function (a) {
                        for (var b = ["minBufferTime", "mediaPresentationDuration", "minimumUpdatePeriod", "timeShiftBufferDepth", "maxSegmentDuration", "maxSubsegmentDuration", "suggestedPresentationDelay", "start", "starttime", "duration"], c = b.length, d = 0; d < c; d++) if (a.nodeName === b[d]) return j.test(a.value);
                        return !1
                    }, function (a) {
                        var b = j.exec(a),
                            c = parseFloat(b[2] || 0) * k + parseFloat(b[4] || 0) * l + parseFloat(b[6] || 0) * m + parseFloat(b[8] || 0) * n + parseFloat(b[10] || 0) * o + parseFloat(b[12] || 0);
                        return void 0 !== b[1] && (c = -c), c
                    })
                }

                return f(b, a), b
            }(i.default);
        c.default = p, b.exports = c.default
    }, {28: 28}],
    31: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        function f(a, b) {
            if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var g = function (a, b, c) {
            for (var d = !0; d;) {
                var e = a, f = b, g = c;
                d = !1, null === e && (e = Function.prototype);
                var h = Object.getOwnPropertyDescriptor(e, f);
                if (void 0 !== h) {
                    if ("value" in h) return h.value;
                    var i = h.get;
                    if (void 0 === i) return;
                    return i.call(g)
                }
                var j = Object.getPrototypeOf(e);
                if (null === j) return;
                a = j, b = f, c = g, d = !0, h = j = void 0
            }
        }, h = a(28), i = d(h), j = /^[-+]?[0-9]+[.]?[0-9]*([eE][-+]?[0-9]+)?$/, k = function (a) {
            function b() {
                e(this, b), g(Object.getPrototypeOf(b.prototype), "constructor", this).call(this, function (a) {
                    return j.test(a.value)
                }, function (a) {
                    return parseFloat(a)
                })
            }

            return f(b, a), b
        }(i.default);
        c.default = k, b.exports = c.default
    }, {28: 28}],
    32: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a(a) {
                a && a.boxParser && (e = a.boxParser)
            }

            function b(a) {
                var b, c, d, f, g, h, i, j, k, l, m, n = e.parse(a), o = n.getBox("tfhd"), p = n.getBox("tfdt"),
                    q = n.getBox("trun"), r = n.getBox("moof"), s = n.getBox("mfhd");
                for (l = s.sequence_number, d = q.sample_count, g = p.baseMediaDecodeTime, k = (o.base_data_offset || 0) + (q.data_offset || 0), h = [], j = 0; j < d; j++) i = q.samples[j], b = void 0 !== i.sample_duration ? i.sample_duration : o.default_sample_duration, f = void 0 !== i.sample_size ? i.sample_size : o.default_sample_size, c = void 0 !== i.sample_composition_time_offset ? i.sample_composition_time_offset : 0, h.push({
                    dts: g,
                    cts: g + c,
                    duration: b,
                    offset: r.offset + k,
                    size: f
                }), k += f, g += b;
                return m = g - p.baseMediaDecodeTime, {sampleList: h, sequenceNumber: l, totalDuration: m}
            }

            function c(a) {
                var b = e.parse(a), c = b.getBox("mdhd");
                return c ? c.timescale : NaN
            }

            var d = void 0, e = void 0;
            return d = {getSamplesInfo: b, getMediaTimescaleFromMoov: c, setConfig: a}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(10), g = d(f);
        e.__dashjs_factory_name = "FragmentedTextBoxParser", c.default = g.default.getSingletonFactory(e), b.exports = c.default
    }, {10: 10}],
    33: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a, b) {
            function c(a, c, e, f) {
                var g, i, j, k, l, m, n,
                    o = a.adaptation.period.mpd.manifest.Period_asArray[a.adaptation.period.index].AdaptationSet_asArray[a.adaptation.index].Representation_asArray[a.index].SegmentList,
                    p = o.SegmentURL_asArray.length, q = [];
                for (n = a.startNumber, k = (0, h.decideSegmentListRangeForTemplate)(d, b, a, c, e, f), l = Math.max(k.start, 0), m = Math.min(k.end, o.SegmentURL_asArray.length - 1), g = l; g <= m; g++) j = o.SegmentURL_asArray[g], i = (0, h.getIndexBasedSegment)(d, b, a, g), i.replacementTime = (n + g - 1) * a.segmentDuration, i.media = j.media ? j.media : "", i.mediaRange = j.mediaRange, i.index = j.index, i.indexRange = j.indexRange, q.push(i), i = null;
                return a.availableSegmentsNumber = p, q
            }

            var d = a.timelineConverter, e = void 0;
            return e = {getSegments: c}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(10), g = d(f), h = a(35);
        e.__dashjs_factory_name = "ListSegmentsGetter";
        var i = g.default.getClassFactory(e);
        c.default = i, b.exports = c.default
    }, {10: 10, 35: 35}],
    34: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a, b) {
            function c() {
                h = (0, i.default)(f).create(a, b), j = (0, k.default)(f).create(a, b), l = (0, m.default)(f).create(a, b)
            }

            function d(a, b, c, d, f) {
                var g, i = a.segmentInfoType;
                return "SegmentBase" !== i && "BaseURL" !== i && e(a, c) ? ("SegmentTimeline" === i ? g = h.getSegments(a, b, c, f) : "SegmentTemplate" === i ? g = j.getSegments(a, b, c, f) : "SegmentList" === i && (g = l.getSegments(a, b, c, f)), d && d(a, g)) : g = a.segments, g
            }

            function e(a, b) {
                var c, d, e = a.segments, f = !1;
                return e && 0 !== e.length ? (d = e[0].availabilityIdx, c = e[e.length - 1].availabilityIdx, f = b < d || b > c) : f = !0, f
            }

            var f = this.context, g = void 0, h = void 0, j = void 0, l = void 0;
            return g = {getSegments: d}, c(), g
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(10), g = d(f), h = a(38), i = d(h), j = a(36), k = d(j), l = a(33), m = d(l);
        e.__dashjs_factory_name = "SegmentsGetter";
        var n = g.default.getClassFactory(e);
        c.default = n, b.exports = c.default
    }, {10: 10, 33: 33, 36: 36, 38: 38}],
    35: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a, b) {
            for (; a.length < b;) a = "0" + a;
            return a
        }

        function f(a, b) {
            return a.representation.startNumber + b
        }

        function g(a, b, c) {
            for (var d, f, g, h, i, j, k = "%0", l = b.length, m = k.length; ;) {
                if (d = a.indexOf("$" + b), d < 0) return a;
                if (f = a.indexOf("$", d + l), f < 0) return a;
                if (g = a.indexOf(k, d + l), g > d && g < f) switch (h = a.charAt(f - 1), i = parseInt(a.substring(g + m, f - 1), 10), h) {
                    case"d":
                    case"i":
                    case"u":
                        j = e(c.toString(), i);
                        break;
                    case"x":
                        j = e(c.toString(16), i);
                        break;
                    case"X":
                        j = e(c.toString(16), i).toUpperCase();
                        break;
                    case"o":
                        j = e(c.toString(8), i);
                        break;
                    default:
                        return a
                } else j = c;
                a = a.substring(0, d) + j + a.substring(f + 1)
            }
        }

        function h(a, b, c, d) {
            var e, g, h, i;
            return g = c.segmentDuration, isNaN(g) && (g = c.adaptation.period.duration), h = c.adaptation.period.start + d * g, i = h + g, e = new n.default, e.representation = c, e.duration = g, e.presentationStartTime = h, e.mediaStartTime = a.calcMediaTimeFromPresentationTime(e.presentationStartTime, c), e.availabilityStartTime = a.calcAvailabilityStartTimeFromPresentationTime(e.presentationStartTime, c.adaptation.period.mpd, b), e.availabilityEndTime = a.calcAvailabilityEndTimeFromPresentationTime(i, c.adaptation.period.mpd, b), e.wallStartTime = a.calcWallTimeForSegment(e, b), e.replacementNumber = f(e, d), e.availabilityIdx = d, e
        }

        function i(a, b, c, d, e, h, i, j, k) {
            var l, m, o, p = d / h, q = Math.min(e / h, c.adaptation.period.mpd.maxSegmentDuration);
            return l = a.calcPresentationTimeFromMediaTime(p, c), m = l + q, o = new n.default, o.representation = c, o.duration = q, o.mediaStartTime = p, o.presentationStartTime = l, o.availabilityStartTime = c.adaptation.period.mpd.manifest.loadedTime, o.availabilityEndTime = a.calcAvailabilityEndTimeFromPresentationTime(m, c.adaptation.period.mpd, b), o.wallStartTime = a.calcWallTimeForSegment(o, b), o.replacementTime = d, o.replacementNumber = f(o, k), i = g(i, "Number", o.replacementNumber), i = g(i, "Time", o.replacementTime), o.media = i, o.mediaRange = j, o.availabilityIdx = k, o
        }

        function j(a, b) {
            if (!b || !b.segments) return null;
            var c, d, e = b.segments.length;
            if (a < e && (c = b.segments[a], c && c.availabilityIdx === a)) return c;
            for (d = 0; d < e; d++) if (c = b.segments[d], c && c.availabilityIdx === a) return c;
            return null
        }

        function k(a, b, c, d, e) {
            var f, g, h, i = 2, j = e || 10, k = 0, l = Number.POSITIVE_INFINITY;
            return b && !a.isTimeSyncCompleted() ? h = {
                start: k,
                end: l
            } : !b && c || d < 0 ? null : (f = Math.max(d - i, k), g = Math.min(d + j, l), h = {start: f, end: g})
        }

        function l(a, b, c, d, e, f) {
            var g, h, i, k = c.segmentDuration, l = c.adaptation.period.mpd.manifest.minBufferTime,
                m = c.segmentAvailabilityRange, n = {
                    start: a.calcPeriodRelativeTimeFromMpdRelativeTime(c, m.start),
                    end: a.calcPeriodRelativeTimeFromMpdRelativeTime(c, m.end)
                }, o = c.segments, p = 2 * k, q = f || Math.max(2 * l, 10 * k), r = NaN, s = null;
            return n.start = Math.max(n.start, 0), b && !a.isTimeSyncCompleted() ? (g = Math.floor(n.start / k), h = Math.floor(n.end / k), i = {
                start: g,
                end: h
            }) : (o && o.length > 0 ? (s = j(e, c), r = s ? a.calcPeriodRelativeTimeFromMpdRelativeTime(c, s.presentationStartTime) : e > 0 ? e * k : a.calcPeriodRelativeTimeFromMpdRelativeTime(c, d)) : r = e > 0 ? e * k : b ? n.end : n.start, g = Math.floor(Math.max(r - p, n.start) / k), h = Math.floor(Math.min(g + q / k, n.end / k)), i = {
                start: g,
                end: h
            })
        }

        Object.defineProperty(c, "__esModule", {value: !0}), c.replaceTokenForTemplate = g, c.getIndexBasedSegment = h, c.getTimeBasedSegment = i, c.getSegmentByIndex = j, c.decideSegmentListRangeForTimeline = k, c.decideSegmentListRangeForTemplate = l;
        var m = a(46), n = d(m)
    }, {46: 46}],
    36: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a, b) {
            function c(a, c, e, f) {
                var g, i, j, k, l,
                    m = a.adaptation.period.mpd.manifest.Period_asArray[a.adaptation.period.index].AdaptationSet_asArray[a.adaptation.index].Representation_asArray[a.index].SegmentTemplate,
                    n = a.segmentDuration, o = a.segmentAvailabilityRange, p = [], q = null, r = null;
                for (l = a.startNumber, g = isNaN(n) && !b ? {
                    start: l,
                    end: l
                } : (0, h.decideSegmentListRangeForTemplate)(d, b, a, c, e, f), j = g.start, k = g.end, i = j; i <= k; i++) r = (0, h.getIndexBasedSegment)(d, b, a, i), r.replacementTime = (l + i - 1) * a.segmentDuration, q = m.media, q = (0, h.replaceTokenForTemplate)(q, "Number", r.replacementNumber), q = (0, h.replaceTokenForTemplate)(q, "Time", r.replacementTime), r.media = q, p.push(r), r = null;
                return isNaN(n) ? a.availableSegmentsNumber = 1 : a.availableSegmentsNumber = Math.ceil((o.end - o.start) / n), p
            }

            var d = a.timelineConverter, e = void 0;
            return e = {getSegments: c}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(10), g = d(f), h = a(35);
        e.__dashjs_factory_name = "TemplateSegmentsGetter";
        var i = g.default.getClassFactory(e);
        c.default = i, b.exports = c.default
    }, {10: 10, 35: 35}],
    37: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a() {
                z = 0, A = !1, B = NaN, x.on(i.default.LIVE_EDGE_SEARCH_COMPLETED, s, this), x.on(i.default.TIME_SYNCHRONIZATION_COMPLETED, t, this)
            }

            function b() {
                return A
            }

            function c(a) {
                A = a
            }

            function d() {
                return z
            }

            function e() {
                return B
            }

            function f(a) {
                B = a
            }

            function h(a, b, c, d) {
                var e = NaN;
                return e = d ? c && b.timeShiftBufferDepth != Number.POSITIVE_INFINITY ? new Date(b.availabilityStartTime.getTime() + 1e3 * (a + b.timeShiftBufferDepth)) : b.availabilityEndTime : c ? new Date(b.availabilityStartTime.getTime() + 1e3 * (a - z)) : b.availabilityStartTime
            }

            function j(a, b, c) {
                return h.call(this, a, b, c)
            }

            function k(a, b, c) {
                return h.call(this, a, b, c, !0)
            }

            function l(a, b) {
                return (a.getTime() - b.mpd.availabilityStartTime.getTime() + 1e3 * z) / 1e3
            }

            function m(a, b) {
                var c = b.adaptation.period.start, d = b.presentationTimeOffset;
                return a + (c - d)
            }

            function n(a, b) {
                var c = b.adaptation.period.start, d = b.presentationTimeOffset;
                return a - c + d
            }

            function o(a, b) {
                var c, d, e;
                return b && (c = a.representation.adaptation.period.mpd.suggestedPresentationDelay, d = a.presentationStartTime + c, e = new Date(a.availabilityStartTime.getTime() + 1e3 * d)), e
            }

            function p(a, b) {
                var c, d, e = a.adaptation.period.start, f = e + a.adaptation.period.duration, g = {start: e, end: f},
                    h = a.segmentDuration || (a.segments && a.segments.length ? a.segments[a.segments.length - 1].duration : 0);
                if (!b) return g;
                if (!A && a.segmentAvailabilityRange) return a.segmentAvailabilityRange;
                c = a.adaptation.period.mpd.checkTime, d = l(new Date, a.adaptation.period), e = Math.max(d - a.adaptation.period.mpd.timeShiftBufferDepth, a.adaptation.period.start);
                var i = isNaN(c) ? d : Math.min(c, d), j = a.adaptation.period.start + a.adaptation.period.duration;
                return f = (i >= j && i - h < j ? j : i) - h, g = {start: e, end: f}
            }

            function q(a, b) {
                var c = a.adaptation.period.start;
                return b - c
            }

            function r(a, b) {
                var c = a.adaptation.period.start;
                return b + c
            }

            function s(a) {
                A || a.error || (z += a.liveEdge - (B + a.searchTime), A = !0)
            }

            function t(a) {
                A || a.error || (z = a.offset / 1e3, A = !0)
            }

            function u(a) {
                var b = a.presentationTimeOffset, c = a.adaptation.period.start;
                return c - b
            }

            function v() {
                x.off(i.default.LIVE_EDGE_SEARCH_COMPLETED, s, this), x.off(i.default.TIME_SYNCHRONIZATION_COMPLETED, t, this), z = 0, A = !1, B = NaN
            }

            var w = this.context, x = (0, g.default)(w).getInstance(), y = void 0, z = void 0, A = void 0, B = void 0;
            return y = {
                initialize: a,
                isTimeSyncCompleted: b,
                setTimeSyncCompleted: c,
                getClientTimeOffset: d,
                getExpectedLiveEdge: e,
                setExpectedLiveEdge: f,
                calcAvailabilityStartTimeFromPresentationTime: j,
                calcAvailabilityEndTimeFromPresentationTime: k,
                calcPresentationTimeFromWallTime: l,
                calcPresentationTimeFromMediaTime: m,
                calcPeriodRelativeTimeFromMpdRelativeTime: q,
                calcMpdRelativeTimeFromPeriodRelativeTime: r,
                calcMediaTimeFromPresentationTime: n,
                calcSegmentAvailabilityRange: p,
                calcWallTimeForSegment: o,
                calcMSETimeOffset: u,
                reset: v
            }
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(9), g = d(f), h = a(13), i = d(h), j = a(10), k = d(j);
        e.__dashjs_factory_name = "TimelineConverter", c.default = k.default.getSingletonFactory(e), b.exports = c.default
    }, {10: 10, 13: 13, 9: 9}],
    38: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a, b) {
            function c(a, c, e, f) {
                var g, i, j, k, l, m, n, o, p, q, r, s, t, u,
                    v = a.adaptation.period.mpd.manifest.Period_asArray[a.adaptation.period.index].AdaptationSet_asArray[a.adaptation.index].Representation_asArray[a.index].SegmentTemplate || a.adaptation.period.mpd.manifest.Period_asArray[a.adaptation.period.index].AdaptationSet_asArray[a.adaptation.index].Representation_asArray[a.index].SegmentList,
                    w = v.SegmentTimeline, x = v.SegmentURL_asArray, y = a.availableSegmentsNumber > 0, z = 10, A = 0,
                    B = 0, C = -1, D = [], E = !1, F = function (c, e) {
                        var f = v.media, g = c.mediaRange;
                        return x && (f = x[e].media || "", g = x[e].mediaRange), (0, h.getTimeBasedSegment)(d, b, a, A, c.d, u, f, g, C)
                    };
                for (u = a.timescale, g = w.S_asArray, p = (0, h.decideSegmentListRangeForTimeline)(d, b, c, e, f), p ? (s = p.start, t = p.end) : r = d.calcMediaTimeFromPresentationTime(c || 0, a), j = 0, k = g.length; j < k; j++) {
                    if (i = g[j], m = 0, i.hasOwnProperty("r") && (m = i.r), i.hasOwnProperty("t") && (A = i.t, B = A / u), m < 0) {
                        if (o = g[j + 1], o && o.hasOwnProperty("t")) n = o.t / u; else {
                            var G = a.segmentAvailabilityRange ? a.segmentAvailabilityRange.end : d.calcSegmentAvailabilityRange(a, b).end;
                            n = d.calcMediaTimeFromPresentationTime(G, a), a.segmentDuration = i.d / u
                        }
                        m = Math.ceil((n - B) / (i.d / u)) - 1
                    }
                    if (q) {
                        if (y) break;
                        C += m + 1
                    } else for (l = 0; l <= m; l++) {
                        if (C++, p) {
                            if (C > t) {
                                if (q = !0, y) break;
                                continue
                            }
                            C >= s && D.push(F(i, C))
                        } else {
                            if (D.length > z) {
                                if (q = !0, y) break;
                                continue
                            }
                            E ? D.push(F(i, C)) : B >= r - i.d / u * 1.5 && (E = !0, D.push(F(i, C)))
                        }
                        A += i.d, B = A / u
                    }
                }
                return y || (a.availableSegmentsNumber = C + 1), D
            }

            var d = a.timelineConverter, e = void 0;
            return e = {getSegments: c}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(10), g = d(f), h = a(35);
        e.__dashjs_factory_name = "TimelineSegmentsGetter";
        var i = g.default.getClassFactory(e);
        c.default = i, b.exports = c.default
    }, {10: 10, 35: 35}],
    39: [function (a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function a() {
            d(this, a), this.period = null, this.index = -1, this.type = null
        };
        c.default = e, b.exports = c.default
    }, {}],
    40: [function (a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = 1, f = 1, g = function a(b, c, g, h) {
            d(this, a), this.url = b || "", this.serviceLocation = c || b || "", this.dvb_priority = g || e, this.dvb_weight = h || f
        };
        g.DEFAULT_DVB_PRIORITY = e, g.DEFAULT_DVB_WEIGHT = f, c.default = g, b.exports = c.default
    }, {}],
    41: [function (a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function a() {
            d(this, a), this.duration = NaN, this.presentationTime = NaN, this.id = NaN, this.messageData = "", this.eventStream = null, this.presentationTimeDelta = NaN
        };
        c.default = e, b.exports = c.default
    }, {}],
    42: [function (a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function a() {
            d(this, a), this.adaptionSet = null, this.representation = null, this.period = null, this.timescale = 1, this.value = "", this.schemeIdUri = ""
        };
        c.default = e, b.exports = c.default
    }, {}],
    43: [function (a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function a() {
            d(this, a), this.manifest = null, this.suggestedPresentationDelay = 0, this.availabilityStartTime = null, this.availabilityEndTime = Number.POSITIVE_INFINITY, this.timeShiftBufferDepth = Number.POSITIVE_INFINITY, this.maxSegmentDuration = Number.POSITIVE_INFINITY, this.checkTime = NaN, this.clientServerTimeShift = 0, this.isClientServerTimeSyncCompleted = !1
        };
        c.default = e, b.exports = c.default
    }, {}],
    44: [function (a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function a() {
            d(this, a), this.id = null, this.index = -1, this.duration = NaN, this.start = NaN, this.mpd = null
        };
        e.DEFAULT_ID = "defaultId", c.default = e, b.exports = c.default
    }, {}],
    45: [function (a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function a() {
            d(this, a), this.id = null, this.index = -1, this.adaptation = null, this.segmentInfoType = null, this.initialization = null, this.segmentDuration = NaN, this.timescale = 1, this.startNumber = 1, this.indexRange = null, this.range = null, this.presentationTimeOffset = 0, this.MSETimeOffset = NaN, this.segmentAvailabilityRange = null, this.availableSegmentsNumber = 0, this.bandwidth = NaN, this.maxPlayoutRate = NaN
        };
        c.default = e, b.exports = c.default
    }, {}],
    46: [function (a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function a() {
            d(this, a), this.indexRange = null, this.index = null, this.mediaRange = null, this.media = null, this.duration = NaN, this.replacementTime = null, this.replacementNumber = NaN, this.mediaStartTime = NaN, this.presentationStartTime = NaN, this.availabilityStartTime = NaN, this.availabilityEndTime = NaN, this.availabilityIdx = NaN, this.wallStartTime = NaN, this.representation = null
        };
        c.default = e, b.exports = c.default
    }, {}],
    47: [function (a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function a() {
            d(this, a), this.schemeIdUri = "", this.value = ""
        };
        c.default = e, b.exports = c.default
    }, {}],
    48: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a) {
            function b() {
                n = (0, g.default)(h).create({
                    errHandler: a.errHandler,
                    metricsModel: a.metricsModel,
                    requestModifier: a.requestModifier
                })
            }

            function c(a) {
                var b = function (b) {
                    j.trigger(o.default.CHECK_FOR_EXISTENCE_COMPLETED, {request: a, exists: b})
                };
                if (a) {
                    var c = new i.default(a.url);
                    n.load({
                        request: c, success: function () {
                            b(!0)
                        }, error: function () {
                            b(!1)
                        }
                    })
                } else b(!1)
            }

            function d(a) {
                var b = function (b, c) {
                    j.trigger(o.default.LOADING_COMPLETED, {
                        request: a,
                        response: b || null,
                        error: c || null,
                        sender: l
                    })
                };
                a ? n.load({
                    request: a, progress: function () {
                        j.trigger(o.default.LOADING_PROGRESS, {request: a})
                    }, success: function (a) {
                        b(a)
                    }, error: function (a, c, d) {
                        b(void 0, new k.default(r, d, c))
                    }
                }) : b(void 0, new k.default(s, t))
            }

            function e() {
                n && n.abort()
            }

            function f() {
                n && (n.abort(), n = null)
            }

            var h = this.context, j = (0, m.default)(h).getInstance(), l = void 0, n = void 0;
            return l = {checkForExistence: c, load: d, abort: e, reset: f}, b(), l
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(58), g = d(f), h = a(164), i = d(h), j = a(162), k = d(j), l = a(9), m = d(l), n = a(13), o = d(n),
            p = a(10), q = d(p), r = 1, s = 2, t = "request is null";
        e.__dashjs_factory_name = "FragmentLoader";
        var u = q.default.getClassFactory(e);
        u.FRAGMENT_LOADER_ERROR_LOADING_FAILURE = r, u.FRAGMENT_LOADER_ERROR_NULL_REQUEST = s, c.default = u, b.exports = c.default
    }, {10: 10, 13: 13, 162: 162, 164: 164, 58: 58, 9: 9}],
    49: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a) {
            function b() {
                h.on(t.default.XLINK_READY, c, n), q = (0, i.default)(f).create({
                    errHandler: a.errHandler,
                    metricsModel: a.metricsModel,
                    requestModifier: a.requestModifier
                }), s = (0, g.default)(f).create({
                    errHandler: a.errHandler,
                    metricsModel: a.metricsModel,
                    requestModifier: a.requestModifier
                })
            }

            function c(a) {
                h.trigger(t.default.INTERNAL_MANIFEST_LOADED, {manifest: a.manifest})
            }

            function d(a) {
                var b = new m.default(a, p.HTTPRequest.MPD_TYPE);
                q.load({
                    request: b, success: function (b, c, d) {
                        var e, f;
                        d.responseURL && d.responseURL !== a ? (f = j.parseBaseUrl(d.responseURL), e = d.responseURL) : (j.isRelative(a) && (a = j.parseBaseUrl(window.location.href) + a), f = j.parseBaseUrl(a));
                        var g = l.parse(b, s);
                        g ? (g.url = e || a, g.originalUrl || (g.originalUrl = g.url), g.baseUri = f, g.loadedTime = new Date, s.resolveManifestOnLoad(g)) : h.trigger(t.default.INTERNAL_MANIFEST_LOADED, {
                            manifest: null,
                            error: new o.default(w, y)
                        })
                    }, error: function (b, c, d) {
                        h.trigger(t.default.INTERNAL_MANIFEST_LOADED, {
                            manifest: null,
                            error: new o.default(x, "Failed loading manifest: " + a + ", " + d)
                        })
                    }
                })
            }

            function e() {
                h.off(t.default.XLINK_READY, c, n), s && (s.reset(), s = null), q && (q.abort(), q = null)
            }

            var f = this.context, h = (0, r.default)(f).getInstance(), j = (0, k.default)(f).getInstance(),
                l = a.parser, n = void 0, q = void 0, s = void 0;
            return n = {load: d, reset: e}, b(), n
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(74), g = d(f), h = a(58), i = d(h), j = a(158), k = d(j), l = a(170), m = d(l), n = a(162), o = d(n),
            p = a(179), q = a(9), r = d(q), s = a(13), t = d(s), u = a(10), v = d(u), w = 1, x = 2,
            y = "parsing failed";
        e.__dashjs_factory_name = "ManifestLoader";
        var z = v.default.getClassFactory(e);
        z.MANIFEST_LOADER_ERROR_PARSING_FAILURE = w, z.MANIFEST_LOADER_ERROR_LOADING_FAILURE = x, c.default = z, b.exports = c.default
    }, {10: 10, 13: 13, 158: 158, 162: 162, 170: 170, 179: 179, 58: 58, 74: 74, 9: 9}],
    50: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a(a) {
                a && (a.manifestModel && (z = a.manifestModel), a.dashManifestModel && (A = a.dashManifestModel))
            }

            function b(a) {
                y = a, u = NaN, v = null, x = !1, w = !0, s.on(i.default.STREAMS_COMPOSED, p, this), s.on(i.default.PLAYBACK_STARTED, n, this), s.on(i.default.PLAYBACK_PAUSED, o, this), s.on(i.default.INTERNAL_MANIFEST_LOADED, l, this)
            }

            function c(a) {
                j(a)
            }

            function d() {
                return y
            }

            function e() {
                s.off(i.default.PLAYBACK_STARTED, n, this), s.off(i.default.PLAYBACK_PAUSED, o, this), s.off(i.default.STREAMS_COMPOSED, p, this), s.off(i.default.INTERNAL_MANIFEST_LOADED, l, this), w = !0, x = !1, f(), u = NaN
            }

            function f() {
                null !== v && (clearInterval(v), v = null)
            }

            function h() {
                f(), isNaN(u) || (r("Refresh manifest in " + u + " seconds."), v = setTimeout(k, Math.min(1e3 * u, Math.pow(2, 31) - 1), this))
            }

            function j(a) {
                var b, c, d = new Date;
                z.setValue(a), r("Manifest has been refreshed at " + d + "[" + d.getTime() / 1e3 + "] "), b = A.getRefreshDelay(a), c = ((new Date).getTime() - a.loadedTime.getTime()) / 1e3, u = Math.max(b - c, 0), s.trigger(i.default.MANIFEST_UPDATED, {manifest: a}), w || h()
            }

            function k() {
                var a, b;
                if (!w && !x) {
                    x = !0, a = z.getValue(), b = a.url;
                    var c = A.getLocation(a);
                    c && (b = c), y.load(b)
                }
            }

            function l(a) {
                a.error || j(a.manifest)
            }

            function n() {
                w = !1, h()
            }

            function o() {
                w = !0, f()
            }

            function p() {
                x = !1
            }

            var q = this.context, r = (0, m.default)(q).getInstance().log, s = (0, g.default)(q).getInstance(),
                t = void 0, u = void 0, v = void 0, w = void 0, x = void 0, y = void 0, z = void 0, A = void 0;
            return t = {initialize: b, setManifest: c, getManifestLoader: d, setConfig: a, reset: e}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(9), g = d(f), h = a(13), i = d(h), j = a(10), k = d(j), l = a(8), m = d(l);
        e.__dashjs_factory_name = "ManifestUpdater", c.default = k.default.getSingletonFactory(e), b.exports = c.default
    }, {10: 10, 13: 13, 8: 8, 9: 9}],
    51: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a() {
                _b = !1, ac = !1, bc = !0, ec = null, $b = null, gc = null, ea.default.extend(ga.default), ic = (0, I.default)(Ub).getInstance()
            }

            function b(a, b, c) {
                return kc = (0, u.default)(Ub).getInstance(), jc = (0, s.default)(Ub).getInstance(), kc.supportsMediaSource() ? void(_b || (_b = !0, cc = (0, M.default)(Ub).getInstance(), nc = (0, i.default)(Ub).getInstance(), dc = (0, m.default)(Ub).getInstance(), dc.initialize(), pc = (0, pa.default)(Ub).getInstance(), oc = (0, ra.default)(Ub).getInstance(), hc = (0, K.default)(Ub).getInstance(), hc.setConfig({adapter: Jb()}), db(), oa(void 0 === c || c), a && zb(a), b && Db(b), Xb("[dash.js " + R() + "] MediaPlayer has been initialized"))) : void jc.capabilityError("mediasource")
            }

            function c() {
                return !!qc && !!Zb
            }

            function d() {
                if (!ac) throw Qb;
                (!bc || f() && ac) && nc.play()
            }

            function e() {
                if (!ac) throw Qb;
                nc.pause()
            }

            function f() {
                if (!ac) throw Qb;
                return nc.isPaused()
            }

            function h() {
                if (!ac) throw Qb;
                return nc.isSeeking()
            }

            function j(a) {
                if (!qc) throw Rb;
                yb().muted = a
            }

            function l() {
                if (!qc) throw Rb;
                return yb().muted
            }

            function n(a) {
                if (!qc) throw Rb;
                yb().volume = a
            }

            function p() {
                if (!qc) throw Rb;
                return yb().volume
            }

            function r(a) {
                var b = ["video", "audio", "fragmentedText"];
                if (a) {
                    if (b.indexOf(a) !== -1) {
                        var c = va().getCurrentBufferLevel(wa(a));
                        return c ? c : NaN
                    }
                    return Xb("Warning  - getBufferLength requested for invalid type"), NaN
                }
                return b.map(function (a) {
                    return Ka(a).length > 0 ? va().getCurrentBufferLevel(wa(a)) : Number.MAX_VALUE
                }).reduce(function (a, b) {
                    return Math.min(a, b)
                })
            }

            function t() {
                var a = Mb();
                return a ? a.manifestInfo.DVRWindowSize : 0
            }

            function v(a) {
                var b = Mb();
                if (!b) return 0;
                var c = b.range.start + a;
                return c > b.range.end && (c = b.range.end), c
            }

            function x(a) {
                if (!ac) throw Qb;
                var b = nc.getIsDynamic() ? v(a) : a;
                nc.seek(b)
            }

            function z(a) {
                if (!ac) throw Qb;
                var b = yb().currentTime;
                if (void 0 !== a) b = lc.getTimeRelativeToStreamId(b, a); else if (nc.getIsDynamic()) {
                    var c = Mb();
                    b = null === c ? 0 : B() - (c.range.end - c.time)
                }
                return b
            }

            function B() {
                if (!ac) throw Qb;
                var a = yb().duration;
                if (nc.getIsDynamic()) {
                    var b, c = Mb();
                    if (!c) return 0;
                    b = c.range.end - c.range.start, a = b < c.manifestInfo.DVRWindowSize ? b : c.manifestInfo.DVRWindowSize
                }
                return a
            }

            function D() {
                if (!ac) throw Qb;
                return z() < 0 ? NaN : Nb(z())
            }

            function F() {
                if (!ac) throw Qb;
                return Nb(B())
            }

            function H(a, b, c) {
                var d = new Date(1e3 * a), e = d.toLocaleDateString(b), f = d.toLocaleTimeString(b, {hour12: c});
                return f + " " + e
            }

            function J(a) {
                a = Math.max(a, 0);
                var b = Math.floor(a / 3600), c = Math.floor(a % 3600 / 60), d = Math.floor(a % 3600 % 60);
                return (0 === b ? "" : b < 10 ? "0" + b.toString() + ":" : b.toString() + ":") + (c < 10 ? "0" + c.toString() : c.toString()) + ":" + (d < 10 ? "0" + d.toString() : d.toString())
            }

            function L(a, b, c) {
                ia.default.extend(a, b, c, Ub)
            }

            function N(a, b, c) {
                Vb.on(a, b, c)
            }

            function P(a, b, c) {
                Vb.off(a, b, c)
            }

            function R() {
                return (0, ja.getVersionString)()
            }

            function T() {
                return Wb
            }

            function V() {
                if (!qc) throw Rb;
                return qc
            }

            function X(a) {
                ic.setLiveDelayFragmentCount(a)
            }

            function Z(a) {
                ic.setLiveDelay(a)
            }

            function _(a) {
                ic.setUseSuggestedPresentationDelay(a)
            }

            function ba(a, b) {
                ic.setLastBitrateCachingInfo(a, b)
            }

            function da(a, b) {
                ic.setLastMediaSettingsCachingInfo(a, b)
            }

            function fa(a, b) {
                cc.setMaxAllowedBitrateFor(a, b)
            }

            function ha(a) {
                return cc.getMaxAllowedBitrateFor(a)
            }

            function ka(a, b) {
                cc.setMaxAllowedRepresentationRatioFor(a, b)
            }

            function ma(a) {
                return cc.getMaxAllowedRepresentationRatioFor(a)
            }

            function oa(a) {
                bc = a
            }

            function qa() {
                return bc
            }

            function sa(a) {
                ic.setScheduleWhilePaused(a)
            }

            function ua() {
                return ic.getScheduleWhilePaused()
            }

            function va() {
                return oc
            }

            function wa(a) {
                return hc.getReadOnlyMetricsFor(a)
            }

            function xa(a) {
                if (!ac) throw Qb;
                return cc.getQualityFor(a, lc.getActiveStreamInfo())
            }

            function ya(a, b) {
                if (!ac) throw Qb;
                cc.setPlaybackQuality(a, lc.getActiveStreamInfo(), b)
            }

            function za() {
                return cc.getLimitBitrateByPortal()
            }

            function Aa(a) {
                cc.setLimitBitrateByPortal(a)
            }

            function Ba() {
                return cc.getUsePixelRatioInLimitBitrateByPortal()
            }

            function Ca(a) {
                cc.setUsePixelRatioInLimitBitrateByPortal(a)
            }

            function Da(a) {
                if (!ac) throw Qb;
                void 0 === rc && (rc = (0, C.default)(Ub).getInstance());
                for (var b = yb().textTracks, c = b.length, d = 0; d < c; d++) {
                    var e = b[d], f = a === d ? "showing" : "hidden";
                    e.mode !== f && (e.mode = f)
                }
                rc.setTextTrack()
            }

            function Ea(a) {
                if (!ac) throw Qb;
                var b = Ob();
                return b ? b.getBitrateListFor(a) : []
            }

            function Fa(a, b) {
                cc.setInitialBitrateFor(a, b)
            }

            function Ga(a) {
                if (!ac) throw Qb;
                return cc.getInitialBitrateFor(a)
            }

            function Ha(a, b) {
                cc.setInitialRepresentationRatioFor(a, b)
            }

            function Ia(a) {
                return cc.getInitialRepresentationRatioFor(a)
            }

            function Ja(a) {
                if (!ac) throw Qb;
                return gc.getStreamsInfo(a)
            }

            function Ka(a) {
                if (!ac) throw Qb;
                var b = lc.getActiveStreamInfo();
                return b ? dc.getTracksFor(a, b) : []
            }

            function La(a, b, c) {
                if (!ac) throw Qb;
                return c = c || gc.getStreamsInfo(b)[0], c ? gc.getAllMediaInfoForType(b, c, a) : []
            }

            function Ma(a) {
                if (!ac) throw Qb;
                var b = lc.getActiveStreamInfo();
                return b ? dc.getCurrentTrackFor(a, b) : null
            }

            function Na(a, b) {
                dc.setInitialSettings(a, b)
            }

            function Oa(a) {
                return dc.getInitialSettings(a)
            }

            function Pa(a) {
                if (!ac) throw Qb;
                dc.setTrack(a)
            }

            function Qa(a) {
                return dc.getSwitchMode(a)
            }

            function Ra(a, b) {
                dc.setSwitchMode(a, b)
            }

            function Sa(a) {
                dc.setSelectionModeForInitialTrack(a)
            }

            function Ta() {
                return dc.getSelectionModeForInitialTrack()
            }

            function Ua() {
                return cc.getAutoSwitchBitrateFor("video") || cc.getAutoSwitchBitrateFor("audio")
            }

            function Va(a) {
                cc.setAutoSwitchBitrateFor("video", a), cc.setAutoSwitchBitrateFor("audio", a)
            }

            function Wa(a) {
                return cc.getAutoSwitchBitrateFor(a)
            }

            function Xa(a, b) {
                cc.setAutoSwitchBitrateFor(a, b)
            }

            function Ya(a) {
                ic.setFastSwitchEnabled(a)
            }

            function Za() {
                return ic.getFastSwitchEnabled()
            }

            function $a(a) {
                ic.setBufferOccupancyABREnabled(a)
            }

            function _a(a, b) {
                var c = Hb(), d = this, e = function a(e) {
                    e.error ? b(null, e.error) : b(e.manifest), Vb.off(ea.default.INTERNAL_MANIFEST_LOADED, a, d), c.reset()
                };
                Vb.on(ea.default.INTERNAL_MANIFEST_LOADED, e, d);
                var f = (0, E.default)(Ub).getInstance();
                f.initialize(), c.load(f.parseURI(a))
            }

            function ab(a, b) {
                bb(a, b);
                var c = new g.default;
                c.schemeIdUri = a, c.value = b, ic.getUTCTimingSources().push(c)
            }

            function bb(a, b) {
                var c = ic.getUTCTimingSources();
                c.forEach(function (d, e) {
                    d.schemeIdUri === a && d.value === b && c.splice(e, 1)
                })
            }

            function cb() {
                ic.setUTCTimingSources([])
            }

            function db() {
                ab(I.default.DEFAULT_UTC_TIMING_SOURCE.scheme, I.default.DEFAULT_UTC_TIMING_SOURCE.value)
            }

            function eb(a) {
                ic.setUseManifestDateHeaderTimeSource(a)
            }

            function fb(a) {
                ic.setBufferToKeep(a)
            }

            function gb(a) {
                ic.setBufferPruningInterval(a)
            }

            function hb(a) {
                ic.setStableBufferTime(a)
            }

            function ib(a) {
                ic.setBufferTimeAtTopQuality(a)
            }

            function jb(a) {
                ic.setBufferTimeAtTopQualityLongForm(a)
            }

            function kb(a) {
                ic.setLongFormContentDurationThreshold(a)
            }

            function lb(a) {
                ic.setRichBufferThreshold(a)
            }

            function mb(a) {
                ic.setBandwidthSafetyFactor(a)
            }

            function nb() {
                return ic.getBandwidthSafetyFactor()
            }

            function ob(a) {
                ic.setAbandonLoadTimeout(a)
            }

            function pb(a) {
                ic.setFragmentRetryAttempts(a)
            }

            function qb(a) {
                ic.setFragmentRetryInterval(a)
            }

            function rb(a) {
                ic.setXHRWithCredentials(a)
            }

            function sb() {
                return Kb()
            }

            function tb(a) {
                ec = a
            }

            function ub(a) {
                $b = a
            }

            function vb(a) {
                var b = (0, w.default)(Ub).getInstance();
                b.setConfig({videoModel: qc}), b.initialize(), b.displayCConTop(a)
            }

            function wb() {
                return qc ? qc.getVideoContainer() : null
            }

            function xb(a) {
                if (!qc) throw Rb;
                qc.setVideoContainer(a)
            }

            function yb() {
                if (!qc) throw Rb;
                return qc.getElement()
            }

            function zb(a) {
                if (!_b) throw Tb;
                qc = null, a && (qc = (0, S.default)(Ub).getInstance(), qc.initialize(), qc.setElement(a), Kb(), Lb()), Fb()
            }

            function Ab() {
                return qc ? qc.getTTMLRenderingDiv() : null
            }

            function Bb(a) {
                if (!qc) throw Rb;
                qc.setTTMLRenderingDiv(a)
            }

            function Cb() {
                if (!Zb) throw Sb;
                return Zb
            }

            function Db(a) {
                if (!_b) throw Tb;
                if ("string" == typeof a) {
                    var b = (0, E.default)(Ub).getInstance();
                    b.initialize(), Zb = b.parseURI(a)
                } else Zb = a;
                Fb()
            }

            function Eb() {
                Db(null), zb(null), $b = null, ec = null
            }

            function Fb() {
                ac ? (ac = !1, gc.reset(), lc.reset(), nc.reset(), cc.reset(), mc.reset(), dc.reset(), lc = null, fc = null, c() && Pb()) : c() && Pb()
            }

            function Gb() {
                var a = (0, W.default)(Ub).getInstance();
                a.initialize();
                var b = (0, Q.default)(Ub).getInstance();
                b.initialize();
                var c = (0, y.default)(Ub).getInstance();
                c.setConfig({dashManifestModel: pc}), dc.initialize(), dc.setConfig({errHandler: jc}), mc = (0, U.default)(Ub).getInstance(), mc.initialize(), mc.setConfig({
                    abrRulesCollection: b,
                    synchronizationRulesCollection: a
                }), lc = (0, k.default)(Ub).getInstance(), lc.setConfig({
                    capabilities: kc,
                    manifestLoader: Hb(),
                    manifestModel: (0, G.default)(Ub).getInstance(),
                    dashManifestModel: pc,
                    protectionController: ec,
                    adapter: gc,
                    metricsModel: hc,
                    dashMetrics: oc,
                    liveEdgeFinder: (0, q.default)(Ub).getInstance(),
                    mediaSourceController: (0, Y.default)(Ub).getInstance(),
                    timeSyncController: (0, O.default)(Ub).getInstance(),
                    baseURLController: (0, $.default)(Ub).getInstance(),
                    errHandler: jc,
                    timelineConverter: (0, ta.default)(Ub).getInstance()
                }), lc.initialize(bc, $b), cc.setConfig({
                    abrRulesCollection: b,
                    rulesController: mc,
                    streamController: lc
                })
            }

            function Hb() {
                return (0, o.default)(Ub).create({
                    errHandler: jc,
                    parser: Ib(),
                    metricsModel: hc,
                    requestModifier: (0, A.default)(Ub).getInstance()
                })
            }

            function Ib() {
                return (0, na.default)(Ub).create()
            }

            function Jb() {
                return gc = (0, la.default)(Ub).getInstance(), gc.initialize(), gc.setConfig({dashManifestModel: pc}), gc
            }

            function Kb() {
                if (ec) return ec;
                var a = dashjs.Protection;
                if ("function" == typeof a) {
                    var b = a(Ub).create();
                    return ea.default.extend(a.events), ga.default.extend(a.events, {publicOnly: !0}), ec = b.createProtectionSystem({
                        log: Xb,
                        videoModel: qc,
                        capabilities: kc,
                        eventBus: Vb,
                        adapter: gc
                    })
                }
                return null
            }

            function Lb() {
                if (fc) return fc;
                var a = dashjs.MetricsReporting;
                if ("function" == typeof a) {
                    var b = a(Ub).create();
                    return fc = b.createMetricsReporting({
                        log: Xb,
                        eventBus: Vb,
                        mediaElement: yb(),
                        dashManifestModel: pc,
                        metricsModel: hc
                    })
                }
                return null
            }

            function Mb() {
                var a = hc.getReadOnlyMetricsFor("video") || hc.getReadOnlyMetricsFor("audio");
                return oc.getCurrentDVRInfo(a)
            }

            function Nb(a) {
                var b, c, d = Mb();
                return d ? (b = d.manifestInfo.availableFrom.getTime() / 1e3, c = a + (b + d.range.start)) : 0
            }

            function Ob() {
                if (!ac) throw Qb;
                var a = lc.getActiveStreamInfo();
                return a ? lc.getStreamById(a.id) : null
            }

            function Pb() {
                ac || (ac = !0, Xb("Playback Initialized"), Gb(), "string" == typeof Zb ? lc.load(Zb) : lc.loadWithManifest(Zb))
            }

            var Qb = "You must first call play() to init playback before calling this method",
                Rb = "You must first call attachView() to set the video element before calling this method",
                Sb = "You must first call attachSource() with a valid source before calling this method",
                Tb = "MediaPlayer not initialized!", Ub = this.context, Vb = (0, ca.default)(Ub).getInstance(),
                Wb = (0, aa.default)(Ub).getInstance(), Xb = Wb.log, Yb = void 0, Zb = void 0, $b = void 0, _b = void 0,
                ac = void 0, bc = void 0, cc = void 0, dc = void 0, ec = void 0, fc = void 0, gc = void 0, hc = void 0,
                ic = void 0, jc = void 0, kc = void 0, lc = void 0, mc = void 0, nc = void 0, oc = void 0, pc = void 0,
                qc = void 0, rc = void 0;
            return Yb = {
                initialize: b,
                on: N,
                off: P,
                extend: L,
                attachView: zb,
                attachSource: Db,
                isReady: c,
                play: d,
                isPaused: f,
                pause: e,
                isSeeking: h,
                seek: x,
                setMute: j,
                isMuted: l,
                setVolume: n,
                getVolume: p,
                time: z,
                duration: B,
                timeAsUTC: D,
                durationAsUTC: F,
                getActiveStream: Ob,
                getDVRWindowSize: t,
                getDVRSeekOffset: v,
                convertToTimeCode: J,
                formatUTC: H,
                getVersion: R,
                getDebug: T,
                getBufferLength: r,
                getVideoModel: V,
                getVideoContainer: wb,
                getTTMLRenderingDiv: Ab,
                getVideoElement: yb,
                getSource: Cb,
                setLiveDelayFragmentCount: X,
                setLiveDelay: Z,
                useSuggestedPresentationDelay: _,
                enableLastBitrateCaching: ba,
                enableLastMediaSettingsCaching: da,
                setMaxAllowedBitrateFor: fa,
                getMaxAllowedBitrateFor: ha,
                setMaxAllowedRepresentationRatioFor: ka,
                getMaxAllowedRepresentationRatioFor: ma,
                setAutoPlay: oa,
                getAutoPlay: qa,
                setScheduleWhilePaused: sa,
                getScheduleWhilePaused: ua,
                getDashMetrics: va,
                getMetricsFor: wa,
                getQualityFor: xa,
                setQualityFor: ya,
                getLimitBitrateByPortal: za,
                setLimitBitrateByPortal: Aa,
                getUsePixelRatioInLimitBitrateByPortal: Ba,
                setUsePixelRatioInLimitBitrateByPortal: Ca,
                setTextTrack: Da,
                getBitrateInfoListFor: Ea,
                setInitialBitrateFor: Fa,
                getInitialBitrateFor: Ga,
                setInitialRepresentationRatioFor: Ha,
                getInitialRepresentationRatioFor: Ia,
                getStreamsFromManifest: Ja,
                getTracksFor: Ka,
                getTracksForTypeFromManifest: La,
                getCurrentTrackFor: Ma,
                setInitialMediaSettingsFor: Na,
                getInitialMediaSettingsFor: Oa,
                setCurrentTrack: Pa,
                getTrackSwitchModeFor: Qa,
                setTrackSwitchModeFor: Ra,
                setSelectionModeForInitialTrack: Sa,
                getSelectionModeForInitialTrack: Ta,
                getAutoSwitchQuality: Ua,
                setAutoSwitchQuality: Va,
                setFastSwitchEnabled: Ya,
                getFastSwitchEnabled: Za,
                getAutoSwitchQualityFor: Wa,
                setAutoSwitchQualityFor: Xa,
                enableBufferOccupancyABR: $a,
                setBandwidthSafetyFactor: mb,
                getBandwidthSafetyFactor: nb,
                setAbandonLoadTimeout: ob,
                retrieveManifest: _a,
                addUTCTimingSource: ab,
                removeUTCTimingSource: bb,
                clearDefaultUTCTimingSources: cb,
                restoreDefaultUTCTimingSources: db,
                setBufferToKeep: fb,
                setBufferPruningInterval: gb,
                setStableBufferTime: hb,
                setBufferTimeAtTopQuality: ib,
                setFragmentLoaderRetryAttempts: pb,
                setFragmentLoaderRetryInterval: qb,
                setXHRWithCredentials: rb,
                setBufferTimeAtTopQualityLongForm: jb,
                setLongFormContentDurationThreshold: kb,
                setRichBufferThreshold: lb,
                getProtectionController: sb,
                attachProtectionController: tb,
                setProtectionData: ub,
                enableManifestDateHeaderTimeSource: eb,
                displayCaptionsOnTop: vb,
                attachVideoContainer: xb,
                attachTTMLRenderingDiv: Bb,
                reset: Eb
            }, a(), Yb
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(47), g = d(f), h = a(68), i = d(h), j = a(71), k = d(j), l = a(66), m = d(l), n = a(49), o = d(n),
            p = a(154), q = d(p), r = a(151), s = d(r), t = a(147), u = d(t), v = a(57), w = d(v), x = a(70), y = d(x),
            z = a(156), A = d(z), B = a(56), C = d(B), D = a(103), E = d(D), F = a(100), G = d(F), H = a(101), I = d(H),
            J = a(102), K = d(J), L = a(60), M = d(L), N = a(73), O = d(N), P = a(131), Q = d(P), R = a(104), S = d(R),
            T = a(129), U = d(T), V = a(144), W = d(V), X = a(67), Y = d(X), Z = a(61), $ = d(Z), _ = a(8), aa = d(_),
            ba = a(9), ca = d(ba), da = a(13), ea = d(da), fa = a(52), ga = d(fa), ha = a(10), ia = d(ha), ja = a(11),
            ka = a(15), la = d(ka), ma = a(23), na = d(ma), oa = a(22), pa = d(oa), qa = a(17), ra = d(qa), sa = a(37),
            ta = d(sa);
        e.__dashjs_factory_name = "MediaPlayer";
        var ua = ia.default.getClassFactory(e);
        ua.events = ga.default, c.default = ua, b.exports = c.default
    }, {
        10: 10,
        100: 100,
        101: 101,
        102: 102,
        103: 103,
        104: 104,
        11: 11,
        129: 129,
        13: 13,
        131: 131,
        144: 144,
        147: 147,
        15: 15,
        151: 151,
        154: 154,
        156: 156,
        17: 17,
        22: 22,
        23: 23,
        37: 37,
        47: 47,
        49: 49,
        52: 52,
        56: 56,
        57: 57,
        60: 60,
        61: 61,
        66: 66,
        67: 67,
        68: 68,
        70: 70,
        71: 71,
        73: 73,
        8: 8,
        9: 9
    }],
    52: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        function f(a, b) {
            if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var g = function (a, b, c) {
            for (var d = !0; d;) {
                var e = a, f = b, g = c;
                d = !1, null === e && (e = Function.prototype);
                var h = Object.getOwnPropertyDescriptor(e, f);
                if (void 0 !== h) {
                    if ("value" in h) return h.value;
                    var i = h.get;
                    if (void 0 === i) return;
                    return i.call(g)
                }
                var j = Object.getPrototypeOf(e);
                if (null === j) return;
                a = j, b = f, c = g, d = !0, h = j = void 0
            }
        }, h = a(14), i = d(h), j = function (a) {
            function b() {
                e(this, b), g(Object.getPrototypeOf(b.prototype), "constructor", this).call(this), this.BUFFER_EMPTY = "bufferstalled", this.BUFFER_LOADED = "bufferloaded", this.BUFFER_LEVEL_STATE_CHANGED = "bufferStateChanged", this.ERROR = "error", this.LOG = "log", this.MANIFEST_LOADED = "manifestloaded", this.METRICS_CHANGED = "metricschanged", this.METRIC_CHANGED = "metricchanged", this.METRIC_ADDED = "metricadded", this.METRIC_UPDATED = "metricupdated", this.PERIOD_SWITCH_COMPLETED = "streamswitchcompleted", this.PERIOD_SWITCH_STARTED = "streamswitchstarted", this.QUALITY_CHANGE_REQUESTED = "qualityChangeRequested", this.QUALITY_CHANGE_RENDERED = "qualityChangeRendered", this.STREAM_INITIALIZED = "streaminitialized", this.TEXT_TRACKS_ADDED = "alltexttracksadded", this.TEXT_TRACK_ADDED = "texttrackadded", this.CAN_PLAY = "canPlay", this.PLAYBACK_ENDED = "playbackEnded", this.PLAYBACK_ERROR = "playbackError", this.PLAYBACK_NOT_ALLOWED = "playbackNotAllowed", this.PLAYBACK_METADATA_LOADED = "playbackMetaDataLoaded", this.PLAYBACK_PAUSED = "playbackPaused", this.PLAYBACK_PLAYING = "playbackPlaying", this.PLAYBACK_PROGRESS = "playbackProgress", this.PLAYBACK_RATE_CHANGED = "playbackRateChanged", this.PLAYBACK_SEEKED = "playbackSeeked", this.PLAYBACK_SEEKING = "playbackSeeking", this.PLAYBACK_STARTED = "playbackStarted", this.PLAYBACK_TIME_UPDATED = "playbackTimeUpdated"
            }

            return f(b, a), b
        }(i.default), k = new j;
        c.default = k, b.exports = c.default
    }, {14: 14}],
    53: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a(a, b, c) {
                if (!a || "VIDEO" !== a.nodeName) return null;
                if (a._dashjs_player) return a._dashjs_player;
                var e, f = a.id || a.name || "video element";
                if (b = b || [].slice.call(a.querySelectorAll("source")).filter(function (a) {
                        return a.type == d
                    })[0], !b && a.src) b = document.createElement("source"), b.src = a.src; else if (!b && !a.src) return null;
                return c = c || {}, e = (0, h.default)(c).create(), e.initialize(a, b.src, a.autoplay), e.getDebug().log("Converted " + f + " to dash.js player and added content: " + b.src), a._dashjs_player = e, e
            }

            function b(b, e) {
                var f = [];
                b = b || "[data-dashjs-player]", e = e || document;
                for (var g = e.querySelectorAll(b), h = 0; h < g.length; h++) {
                    var i = a(g[h], null);
                    f.push(i)
                }
                for (var j = e.querySelectorAll('source[type="' + d + '"]'), h = 0; h < j.length; h++) {
                    var k = c(j[h]), i = a(k, null);
                    f.push(i)
                }
                return f
            }

            function c(a) {
                for (var b = !0; b;) {
                    var c = a;
                    if (b = !1, "video" === c.nodeName.toLowerCase()) return c;
                    a = c.parentNode, b = !0
                }
            }

            var d = "application/dash+xml";
            return {create: a, createAll: b}
        }

        function f() {
            window.removeEventListener("load", f), i.createAll()
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var g = a(51), h = d(g), i = e(), j = window && window.dashjs && window.dashjs.skipAutoCreate;
        !j && window && window.addEventListener && ("complete" === window.document.readyState ? i.createAll() : window.addEventListener("load", f)), c.default = i, b.exports = c.default
    }, {51: 51}],
    54: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a) {
            function b() {
                ja = [], ka = !1, la = !1, ma = null, na = {}, oa = !1, pa = !1, ra = (0, g.default)($).getInstance(), sa = (0, w.default)($).getInstance(), wa = (0, q.default)($).getInstance(), ta = (0, k.default)($).getInstance(), ua = (0, o.default)($).create(), xa = (0, O.default)($).getInstance(), aa.on(I.default.BUFFERING_COMPLETED, U, ia), aa.on(I.default.DATA_UPDATE_COMPLETED, V, ia)
            }

            function c(a, b) {
                ma = a, qa = b, qa && (aa.on(I.default.KEY_ERROR, D, ia), aa.on(I.default.SERVER_CERTIFICATE_UPDATED, D, ia), aa.on(I.default.LICENSE_REQUEST_COMPLETE, D, ia), aa.on(I.default.KEY_SYSTEM_SELECTED, D, ia), aa.on(I.default.KEY_SESSION_CREATED, D, ia))
            }

            function d(a) {
                ka ? T() : (aa.on(I.default.CURRENT_TRACK_CHANGED, J, ia), Q(a))
            }

            function e() {
                for (var a = ja.length, b = 0; b < a; b++) ja[b].reset();
                ja = [], ka = !1, la = !1, x(), aa.off(I.default.CURRENT_TRACK_CHANGED, J, ia)
            }

            function f() {
                sa && (sa.pause(), sa = null), ua && (ua.reset(), ua = null), ra.abortSearch(), e(), ta = null, wa = null, ca = null, ba = null, da = null, ea = null, _ = null, fa = null, oa = !1, pa = !1, na = {}, aa.off(I.default.DATA_UPDATE_COMPLETED, V, ia), aa.off(I.default.BUFFERING_COMPLETED, U, ia), aa.off(I.default.KEY_ERROR, D, ia), aa.off(I.default.SERVER_CERTIFICATE_UPDATED, D, ia), aa.off(I.default.LICENSE_REQUEST_COMPLETE, D, ia), aa.off(I.default.KEY_SYSTEM_SELECTED, D, ia), aa.off(I.default.KEY_SESSION_CREATED, D, ia)
            }

            function h() {
                return ma.duration
            }

            function j() {
                return ma.start
            }

            function l() {
                return ma.index
            }

            function n() {
                return ma.id
            }

            function p() {
                return ma
            }

            function r(a) {
                return null !== S(a)
            }

            function t(a) {
                var b = S(a);
                return wa.getBitrateList(b)
            }

            function v() {
                va && va.start()
            }

            function x() {
                va && va.clear()
            }

            function z() {
                return ka
            }

            function B() {
                return pa
            }

            function D(a) {
                a.error && (fa.mediaKeySessionError(a.error), _(a.error), f())
            }

            function F(a) {
                return "text" === a.type ? a.mimeType : a.type
            }

            function H(a, b, c) {
                var d, e, f = a.type;
                if ("muxed" === f && a) return e = "Multiplexed representations are intentionally not supported, as they are not compliant with the DASH-AVC/264 guidelines", _(e), fa.manifestError(e, "multiplexedrep", ba.getValue()), !1;
                if ("text" === f || "fragmentedText" === f || "embeddedText" === f) return !0;
                if (d = a.codec, _(f + " codec: " + d), a.contentProtection && !ea.supportsEncryptedMedia()) fa.capabilityError("encryptedmedia"); else if (!ea.supportsCodec((0, s.default)($).getInstance().getElement(), d)) return e = f + "Codec (" + d + ") is not supported.", fa.manifestError(e, "codec", c), _(e), !1;
                return !0
            }

            function J(a) {
                if (a.newMediaInfo.streamInfo.id === ma.id) {
                    var b = W(a.oldMediaInfo);
                    if (b) {
                        var c = sa.getTime(), d = b.getBuffer(), e = a.newMediaInfo, f = ba.getValue(),
                            g = ja.indexOf(b), h = b.getMediaSource();
                        "fragmentedText" !== e.type ? (b.reset(!0), N(e, f, h, {
                            buffer: d,
                            replaceIdx: g,
                            currentTime: c
                        }), sa.seek(sa.getTime())) : b.updateMediaInfo(f, e)
                    }
                }
            }

            function L(a) {
                var b = a.split("/")[1];
                return "webm" === b.toLowerCase()
            }

            function M(a) {
                var b = L(a.mimeType) ? (0, C.default)($).getInstance() : (0, A.default)($).getInstance();
                b.setConfig({baseURLController: ha, metricsModel: (0, u.default)($).getInstance()}), b.initialize();
                var c = (0, y.default)($).create({
                    segmentBaseLoader: b,
                    timelineConverter: ga,
                    dashMetrics: (0, E.default)($).getInstance(),
                    metricsModel: (0, u.default)($).getInstance(),
                    baseURLController: ha
                });
                return c
            }

            function N(a, b, c, d) {
                var e = (0, i.default)($).create({
                    indexHandler: M(a),
                    timelineConverter: ga,
                    adapter: da,
                    manifestModel: ba
                }), f = da.getAllMediaInfoForType(b, ma, a.type);
                if (e.initialize(F(a), ua, c, ia, va), wa.updateTopQualityIndex(a), d ? (e.setBuffer(d.buffer), e.getIndexHandler().setCurrentTime(d.currentTime), ja[d.replaceIdx] = e) : ja.push(e), "text" === a.type || "fragmentedText" === a.type) {
                    for (var g, h = 0; h < f.length; h++) f[h].index === a.index && (g = h), e.updateMediaInfo(b, f[h]);
                    "fragmentedText" === a.type && e.updateMediaInfo(b, f[g])
                } else e.updateMediaInfo(b, a);
                return e
            }

            function P(a, b) {
                var c, d = ba.getValue(), e = da.getAllMediaInfoForType(d, ma, a), f = null;
                if (!e || 0 === e.length) return void _("No " + a + " data.");
                for (var g = 0, h = e.length; g < h; g++) if (f = e[g], "embeddedText" === a) xa.addEmbeddedTrack(f); else {
                    if (!H(f, b, d)) continue;
                    ta.isMultiTrackSupportedByType(f.type) && ta.addTrack(f, ma)
                }
                "embeddedText" !== a && 0 !== ta.getTracksFor(a, ma).length && (ta.checkInitialMediaSettingsForType(a, ma), c = ta.getCurrentTrackFor(a, ma), N(c, d, b))
            }

            function Q(a) {
                var b, c = ba.getValue();
                if (va = (0, m.default)($).getInstance(), va.initialize(), va.setConfig({
                        manifestModel: ba,
                        manifestUpdater: ca
                    }), b = da.getEventsFor(c, ma), va.addInlineEvents(b), oa = !0, P("video", a), P("audio", a), P("text", a), P("fragmentedText", a), P("embeddedText", a), P("muxed", a), T(), la = !0, oa = !1, 0 === ja.length) {
                    var d = "No streams to play.";
                    fa.manifestError(d, "nostreams", c), _(d)
                } else ra.initialize(ga, ja[0]), R()
            }

            function R() {
                var a = ja.length, b = !!na.audio || !!na.video,
                    c = b ? new Error(Z, "Data update failed", null) : null, d = 0;
                for (d; d < a; d++) if (ja[d].isUpdating() || oa) return;
                pa = !0, ka = !0, la && (qa && qa.initialize(ba.getValue(), S("audio"), S("video")), aa.trigger(I.default.STREAM_INITIALIZED, {
                    streamInfo: ma,
                    error: c
                }))
            }

            function S(a) {
                for (var b = ja.length, c = null, d = 0; d < b; d++) if (c = ja[d], c.getType() === a) return c.getMediaInfo();
                return null
            }

            function T() {
                for (var a = 0, b = ja.length; a < b; a++) ja[a].createBuffer()
            }

            function U(a) {
                if (a.streamInfo === ma) {
                    var b = X(), c = b.length, d = 0;
                    for (d; d < c; d++) if (!b[d].isBufferingCompleted()) return;
                    aa.trigger(I.default.STREAM_BUFFERING_COMPLETED, {streamInfo: ma})
                }
            }

            function V(a) {
                var b = a.sender.getStreamProcessor();
                b.getStreamInfo() === ma && (na[b.getType()] = a.error, R())
            }

            function W(a) {
                if (!a) return !1;
                var b = X();
                return b.filter(function (b) {
                    return b.getType() === a.type
                })[0]
            }

            function X() {
                var a, b, c = ja.length, d = [], e = 0;
                for (e; e < c; e++) b = ja[e], a = b.getType(), "audio" !== a && "video" !== a && "fragmentedText" !== a || d.push(b);
                return d
            }

            function Y(a) {
                _("Manifest updated... updating data system wide.");
                var b = ba.getValue();
                if (ka = !1, oa = !0, pa = !1, ma = a, va) {
                    var c = da.getEventsFor(b, ma);
                    va.addInlineEvents(c)
                }
                for (var d = 0, e = ja.length; d < e; d++) {
                    var f = ja[d], g = da.getMediaInfoForType(b, ma, f.getType());
                    wa.updateTopQualityIndex(g), f.updateMediaInfo(b, g)
                }
                oa = !1, R()
            }

            var Z = 1, $ = this.context, _ = (0, K.default)($).getInstance().log, aa = (0, G.default)($).getInstance(),
                ba = a.manifestModel, ca = a.manifestUpdater, da = a.adapter, ea = a.capabilities, fa = a.errHandler,
                ga = a.timelineConverter, ha = a.baseURLController, ia = void 0, ja = void 0, ka = void 0, la = void 0,
                ma = void 0, na = void 0, oa = void 0, pa = void 0, qa = void 0, ra = void 0, sa = void 0, ta = void 0,
                ua = void 0, va = void 0, wa = void 0, xa = void 0;
            return ia = {
                initialize: c,
                activate: d,
                deactivate: e,
                getDuration: h,
                getStartTime: j,
                getStreamIndex: l,
                getId: n,
                getStreamInfo: p,
                hasMedia: r,
                getBitrateListFor: t,
                startEventController: v,
                isActivated: z,
                isInitialized: B,
                updateData: Y,
                reset: f,
                getProcessors: X
            }, b(), ia
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(154), g = d(f), h = a(55), i = d(h), j = a(66), k = d(j), l = a(64), m = d(l), n = a(65), o = d(n),
            p = a(60), q = d(p), r = a(104), s = d(r), t = a(102), u = d(t), v = a(68), w = d(v), x = a(16), y = d(x),
            z = a(18), A = d(z), B = a(19), C = d(B), D = a(17), E = d(D), F = a(9), G = d(F), H = a(13), I = d(H),
            J = a(8), K = d(J), L = a(10), M = d(L), N = a(56), O = d(N);
        e.__dashjs_factory_name = "Stream", c.default = M.default.getClassFactory(e), b.exports = c.default
    }, {
        10: 10,
        102: 102,
        104: 104,
        13: 13,
        154: 154,
        16: 16,
        17: 17,
        18: 18,
        19: 19,
        55: 55,
        56: 56,
        60: 60,
        64: 64,
        65: 65,
        66: 66,
        68: 68,
        8: 8,
        9: 9
    }],
    55: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a) {
            function b() {
                ca = []
            }

            function c(a, b, c, d, e) {
                ba = a, da = d, ea = e, ja = b, _ = da.getStreamInfo().manifestInfo.isDynamic, W.initialize(this), fa = (0, g.default)(V).getInstance(), fa.initialize(ba, this), ga = U(a), ha = (0, q.default)(V).create({
                    metricsModel: (0, w.default)(V).getInstance(),
                    manifestModel: Z,
                    adapter: Y,
                    dashMetrics: (0, I.default)(V).getInstance(),
                    dashManifestModel: (0, G.default)(V).getInstance(),
                    timelineConverter: X,
                    rulesController: (0, s.default)(V).getInstance(),
                    mediaPlayerModel: (0, u.default)(V).getInstance()
                }), ga.initialize(ba, c, this), ha.initialize(ba, this), ka = (0, y.default)(V).create({
                    metricsModel: (0, w.default)(V).getInstance(),
                    errHandler: (0, M.default)(V).getInstance(),
                    requestModifier: (0, A.default)(V).getInstance()
                }), la = ha.getFragmentModel(), la.setLoader(ka), ia = (0, K.default)(V).create(), ia.initialize(this)
            }

            function d(a) {
                W.reset(), ga && (ga.reset(a), ga = null), ha && (ha.reset(), ha = null), ia && (ia.reset(), ia = null), ja = null, ka = null, ea = null, da = null, _ = null, aa = null, ca = [], ba = null
            }

            function e() {
                return ia.isUpdating()
            }

            function f() {
                return ba
            }

            function h() {
                return fa
            }

            function j() {
                return ia
            }

            function l() {
                return ka
            }

            function n() {
                return W
            }

            function p() {
                return ja
            }

            function r() {
                return ga.getBuffer()
            }

            function t(a) {
                ga.setBuffer(a)
            }

            function v() {
                return ga
            }

            function x() {
                return la
            }

            function z() {
                return da.getStreamInfo()
            }

            function B(a, b) {
                b === aa || b && aa && b.type !== aa.type || (aa = b), ca.indexOf(b) === -1 && ca.push(b), Y.updateData(a, this)
            }

            function D() {
                return ca
            }

            function F() {
                return aa
            }

            function H() {
                return ga.getMediaSource()
            }

            function J() {
                return ha
            }

            function L() {
                return ea
            }

            function N() {
                ha.start()
            }

            function O() {
                ha.stop()
            }

            function P() {
                return Y.getCurrentRepresentationInfo(Z.getValue(), ia)
            }

            function Q(a) {
                return Y.getRepresentationInfoForQuality(Z.getValue(), ia, a)
            }

            function R() {
                return ga.getIsBufferingCompleted()
            }

            function S() {
                return ga.getBuffer() || ga.createBuffer(aa)
            }

            function T() {
                return _
            }

            function U(a) {
                var b = null;
                return b = "video" === a || "audio" === a || "fragmentedText" === a ? (0, i.default)(V).create({
                    metricsModel: (0, w.default)(V).getInstance(),
                    manifestModel: Z,
                    sourceBufferController: (0, C.default)(V).getInstance(),
                    errHandler: (0, M.default)(V).getInstance(),
                    streamController: (0, k.default)(V).getInstance(),
                    mediaController: (0, m.default)(V).getInstance(),
                    adapter: Y,
                    textSourceBuffer: (0, E.default)(V).getInstance()
                }) : (0, o.default)(V).create({
                    errHandler: (0, M.default)(V).getInstance(),
                    sourceBufferController: (0, C.default)(V).getInstance()
                })
            }

            var V = this.context, W = a.indexHandler, X = a.timelineConverter, Y = a.adapter, Z = a.manifestModel,
                $ = void 0, _ = void 0, aa = void 0, ba = void 0, ca = void 0, da = void 0, ea = void 0, fa = void 0,
                ga = void 0, ha = void 0, ia = void 0, ja = void 0, ka = void 0, la = void 0;
            return $ = {
                initialize: c,
                isUpdating: e,
                getType: f,
                getBufferController: v,
                getABRController: h,
                getFragmentLoader: l,
                getFragmentModel: x,
                getScheduleController: J,
                getEventController: L,
                getFragmentController: p,
                getRepresentationController: j,
                getIndexHandler: n,
                getCurrentRepresentationInfo: P,
                getRepresentationInfoForQuality: Q,
                isBufferingCompleted: R,
                createBuffer: S,
                getStreamInfo: z,
                updateMediaInfo: B,
                getMediaInfoArr: D,
                getMediaInfo: F,
                getMediaSource: H,
                getBuffer: r,
                setBuffer: t,
                start: N,
                stop: O,
                isDynamic: T,
                reset: d
            }, b(), $
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(60), g = d(f), h = a(63), i = d(h), j = a(71), k = d(j), l = a(66), m = d(l), n = a(72), o = d(n),
            p = a(69), q = d(p), r = a(129), s = d(r), t = a(101), u = d(t), v = a(102), w = d(v), x = a(48), y = d(x),
            z = a(156), A = d(z), B = a(70), C = d(B), D = a(56), E = d(D), F = a(22), G = d(F), H = a(17), I = d(H),
            J = a(21), K = d(J), L = a(151), M = d(L), N = a(10), O = d(N);
        e.__dashjs_factory_name = "StreamProcessor", c.default = O.default.getClassFactory(e), b.exports = c.default
    }, {
        10: 10,
        101: 101,
        102: 102,
        129: 129,
        151: 151,
        156: 156,
        17: 17,
        21: 21,
        22: 22,
        48: 48,
        56: 56,
        60: 60,
        63: 63,
        66: 66,
        69: 69,
        70: 70,
        71: 71,
        72: 72
    }],
    56: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a(a, c) {
                M = !1, N = null, U = null, V = !1, W = NaN, X = [], $ = null, E || b();
                var d = c.getStreamProcessor();
                if (R = d.getMediaInfoArr(), S.setConfig({videoModel: Y}), S.initialize(), T = !K.getIsTextTrack(a), H = (0, k.default)(C).getInstance(), Q = (0, i.default)(C).getInstance(), Q.setConfig({boxParser: H}), T) {
                    U = d.getFragmentModel(), this.buffered = (0, m.default)(C).create(), X = L.getTracksFor("fragmentedText", Z.getActiveStreamInfo());
                    for (var e = L.getCurrentTrackFor("fragmentedText", Z.getActiveStreamInfo()), f = 0; f < X.length; f++) if (X[f] === e) {
                        _ = f;
                        break
                    }
                }
            }

            function b() {
                aa = [], R = [], Y = (0, s.default)(C).getInstance(), S = (0, u.default)(C).getInstance(), S.setConfig({videoModel: Y}), S.initialize(), H = (0, k.default)(C).getInstance(), Q = (0, i.default)(C).getInstance(), Q.setConfig({boxParser: H}), T = !1, _ = null, ba = !1, ca = 0, fa = [], ea = [], da = null, E = !0
            }

            function c(a, b) {
                function c(a, b) {
                    var c = new g.default, d = {subtitle: "subtitles", caption: "captions"}, e = function () {
                        var a = b.roles.length > 0 ? d[b.roles[0]] : d.caption;
                        return a = a === d.caption || a === d.subtitle ? a : d.caption
                    }, f = function () {
                        var a = !1;
                        return b.codec && b.codec.search("stpp") >= 0 && (a = !0), b.mimeType && b.mimeType.search("ttml") >= 0 && (a = !0), a
                    };
                    c.captionData = a, c.lang = b.lang, c.label = b.id, c.index = b.index, c.isTTML = f(), c.video = Y.getElement(), c.defaultTrack = A(b), c.isFragmented = T, c.isEmbedded = !!b.isEmbedded, c.kind = e();
                    var h = (R ? R.length : 0) + aa.length;
                    S.addTextTrack(c, h)
                }

                var e, f, h, i, j, k = b.mediaInfo, l = k.type, m = k.mimeType, n = k.codec || m;
                if (!n) return void D("No text type defined");
                if ("fragmentedText" === l) if (V) if (i = Q.getSamplesInfo(a), f = i.sampleList, !$ && f.length > 0 && ($ = f[0].cts - b.start * W), n.search("stpp") >= 0) for (N = null !== N ? N : B(n), h = 0; h < f.length; h++) {
                    var p = f[h], q = p.cts, r = q - $;
                    this.buffered.add(r / W, (r + p.duration) / W);
                    var s = new DataView(a, p.offset, p.size);
                    j = w.default.Utils.dataViewToString(s, "utf-8");
                    try {
                        e = N.parse(j, q / W, (q + p.duration) / W), S.addCaptions(_, $ / W, e)
                    } catch (t) {
                        D("TTML parser error: " + t.message)
                    }
                } else {
                    var u = [];
                    for (h = 0; h < f.length; h++) {
                        var v = f[h];
                        v.cts -= $, this.buffered.add(v.cts / W, (v.cts + v.duration) / W);
                        for (var x = a.slice(v.offset, v.offset + v.size), z = w.default.parseBuffer(x), C = 0; C < z.boxes.length; C++) {
                            var E = z.boxes[C];
                            if (D("VTT box1: " + E.type), "vtte" !== E.type && "vttc" === E.type) {
                                D("VTT vttc boxes.length = " + E.boxes.length);
                                for (var F = 0; F < E.boxes.length; F++) {
                                    var G = E.boxes[F];
                                    if (D("VTT box2: " + G.type), "payl" === G.type) {
                                        var H = G.cue_text;
                                        D("VTT cue_text = " + H);
                                        var J = v.cts / W, K = (v.cts + v.duration) / W;
                                        u.push({
                                            start: J,
                                            end: K,
                                            data: H,
                                            styles: {}
                                        }), D("VTT " + J + "-" + K + " : " + H)
                                    }
                                }
                            }
                        }
                    }
                    u.length > 0 && S.addCaptions(_, 0, u)
                } else {
                    for (V = !0, h = 0; h < R.length; h++) c(null, R[h]);
                    W = Q.getMediaTimescaleFromMoov(a)
                } else if ("text" === l) {
                    var s = new DataView(a, 0, a.byteLength);
                    j = w.default.Utils.dataViewToString(s, "utf-8");
                    try {
                        e = B(n).parse(j), c(e, k)
                    } catch (t) {
                        I.timedTextError(t, "parse", j)
                    }
                } else if ("video" === l) if ("InitializationSegment" === b.segmentType) {
                    if (0 === ca) for (ca = Q.getMediaTimescaleFromMoov(a), h = 0; h < aa.length; h++) c(null, aa[h])
                } else {
                    if (0 === ca) return void D("CEA-608: No timescale for embeddedTextTrack yet");
                    var L = function (a, b) {
                        function c(a, c, d) {
                            var e = null;
                            if (Y.getTTMLRenderingDiv()) e = o(Y.getElement(), a, c, d); else {
                                var f = d.getDisplayText();
                                e = [{start: a, end: c, data: f, styles: {}}]
                            }
                            e && S.addCaptions(b, 0, e)
                        }

                        return c
                    };
                    i = Q.getSamplesInfo(a);
                    var M = i.sequenceNumber;
                    if (!fa[0] && !fa[1]) {
                        var O = void 0, P = void 0, U = void 0;
                        for (h = 0; h < aa.length; h++) {
                            if ("CC1" === aa[h].id ? (O = 0, U = S.getTrackIdxForId("CC1")) : "CC3" === aa[h].id && (O = 1, U = S.getTrackIdxForId("CC3")), U === -1) return void D("CEA-608: data before track is ready.");
                            P = L(this, U), fa[h] = new y.default.Cea608Parser(h, {newCue: P}, null)
                        }
                    }
                    if (ca && ea.indexOf(M) == -1) {
                        if (null !== da && M !== da + 1) for (h = 0; h < fa.length; h++) fa[h] && fa[h].reset();
                        for (var X = d(a), Z = 0; Z < fa.length; Z++) {
                            var ba = X.fields[Z], ga = fa[Z];
                            if (ga) {
                                for (h = 0; h < ba.length; h++) ga.addData(ba[h][0] / ca, ba[h][1]);
                                X.endTime && ga.cueSplitAtTime(X.endTime / ca)
                            }
                        }
                        da = M, ea.push(M)
                    }
                }
            }

            function d(a) {
                var b = function (a, b, c) {
                    var d = a.length;
                    if (d > 0) {
                        if (b >= a[d - 1][0]) a.push([b, c]); else for (var e = d - 1; e >= 0; e--) if (b < a[e][0]) {
                            a.splice(e, 0, [b, c]);
                            break
                        }
                    } else a.push([b, c])
                }, c = H.parse(a), d = c.getBox("moof"), e = c.getBox("tfdt"), f = c.getBoxes("trun"), g = null;
                if (0 === f.length) return null;
                g = f[0], f.length > 1 && D("Warning: Too many truns");
                for (var h = d.offset + g.data_offset, i = g.sample_count, j = h, k = e.baseMediaDecodeTime, l = new DataView(a), m = {
                    startTime: null,
                    endTime: null,
                    fields: [[], []]
                }, n = 0, o = 0; o < i; o++) {
                    for (var p = g.samples[o], q = k + n + p.sample_composition_time_offset, r = y.default.findCea608Nalus(l, j, p.sample_size), s = 0; s < r.length; s++) for (var t = y.default.extractCea608DataFromRange(l, r[s]), u = 0; u < 2; u++) t[u].length > 0 && b(m.fields[u], q, t[u]);
                    n += p.sample_duration, j += p.sample_size
                }
                var v = k + n;
                return m.startTime = k, m.endTime = v, m
            }

            function e(a) {
                for (var b = "", c = 0; c < a.length; ++c) {
                    var d = a[c];
                    b += d.uchar
                }
                var e = b.length, f = b.replace(/^\s+/, "").length;
                return e - f
            }

            function f(a) {
                return "left: " + 3.125 * a.x + "%; top: " + 6.66 * a.y1 + "%; width: " + (100 - 3.125 * a.x) + "%; height: " + 6.66 * Math.max(a.y2 - 1 - a.y1, 1) + "%; align-items: flex-start; overflow: visible; -webkit-writing-mode: horizontal-tb;";
            }

            function h(a) {
                return "red" == a ? "rgb(255, 0, 0)" : "green" == a ? "rgb(0, 255, 0)" : "blue" == a ? "rgb(0, 0, 255)" : "cyan" == a ? "rgb(0, 255, 255)" : "magenta" == a ? "rgb(255, 0, 255)" : "yellow" == a ? "rgb(255, 255, 0)" : "white" == a ? "rgb(255, 255, 255)" : "black" == a ? "rgb(0, 0, 0)" : a
            }

            function j(a, b) {
                var c = a.videoHeight / 15;
                return b ? "font-size: " + c + "px; font-family: Menlo, Consolas, 'Cutive Mono', monospace; color: " + (b.foreground ? h(b.foreground) : "rgb(255, 255, 255)") + "; font-style: " + (b.italics ? "italic" : "normal") + "; text-decoration: " + (b.underline ? "underline" : "none") + "; white-space: pre; background-color: " + (b.background ? h(b.background) : "transparent") + ";" : "font-size: " + c + "px; font-family: Menlo, Consolas, 'Cutive Mono', monospace; justify-content: flex-start; text-align: left; color: rgb(255, 255, 255); font-style: normal; white-space: pre; line-height: normal; font-weight: normal; text-decoration: none; width: 100%; display: flex;"
            }

            function l(a) {
                var b = a.replace(/^\s+/g, "");
                return b
            }

            function n(a) {
                var b = a.replace(/\s+$/g, "");
                return b
            }

            function o(a, b, c, d) {
                var g = null, h = null, i = !1, k = -1, m = {start: b, end: c, spans: []},
                    o = "style_cea608_white_black", p = {}, q = {}, r = [], s = void 0, t = void 0;
                for (s = 0; s < 15; ++s) {
                    var u = d.rows[s], v = "", w = null;
                    if (!1 === u.isEmpty()) {
                        var x = e(u.chars);
                        null === g && (g = {
                            x: x,
                            y1: s,
                            y2: s + 1,
                            p: []
                        }), x !== k && i && (g.p.push(m), m = {
                            start: b,
                            end: c,
                            spans: []
                        }, g.y2 = s, g.name = "region_" + g.x + "_" + g.y1 + "_" + g.y2, !1 === p.hasOwnProperty(g.name) ? (r.push(g), p[g.name] = g) : (h = p[g.name], h.p.contat(g.p)), g = {
                            x: x,
                            y1: s,
                            y2: s + 1,
                            p: []
                        });
                        for (var y = 0; y < u.chars.length; ++y) {
                            var z = u.chars[y], A = z.penState;
                            if (null === w || !A.equals(w)) {
                                v.trim().length > 0 && (m.spans.push({name: o, line: v, row: s}), v = "");
                                var B = "style_cea608_" + A.foreground + "_" + A.background;
                                A.underline && (B += "_underline"), A.italics && (B += "_italics"), q.hasOwnProperty(B) || (q[B] = JSON.parse(JSON.stringify(A))), w = A, o = B
                            }
                            v += z.uchar
                        }
                        v.trim().length > 0 && m.spans.push({name: o, line: v, row: s}), i = !0, k = x
                    } else i = !1, k = -1, g && (g.p.push(m), m = {
                        start: b,
                        end: c,
                        spans: []
                    }, g.y2 = s, g.name = "region_" + g.x + "_" + g.y1 + "_" + g.y2, !1 === p.hasOwnProperty(g.name) ? (r.push(g), p[g.name] = g) : (h = p[g.name], h.p.contat(g.p)), g = null)
                }
                g && (g.p.push(m), g.y2 = s + 1, g.name = "region_" + g.x + "_" + g.y1 + "_" + g.y2, !1 === p.hasOwnProperty(g.name) ? (r.push(g), p[g.name] = g) : (h = p[g.name], h.p.contat(g.p)), g = null);
                var C = [];
                for (s = 0; s < r.length; ++s) {
                    var D = r[s], E = "sub_cea608_" + F++, G = document.createElement("div");
                    G.id = E;
                    var H = f(D);
                    G.style.cssText = "position: absolute; margin: 0; display: flex; box-sizing: border-box; pointer-events: none;" + H;
                    var I = document.createElement("div");
                    I.className = "paragraph bodyStyle", I.style.cssText = j(a);
                    var J = document.createElement("div");
                    J.className = "cueUniWrapper", J.style.cssText = "unicode-bidi: normal; direction: ltr;";
                    for (var K = 0; K < D.p.length; ++K) {
                        var L = D.p[K], M = 0;
                        for (t = 0; t < L.spans.length; ++t) {
                            var N = L.spans[t];
                            if (N.line.length > 0) {
                                if (0 !== t && M != N.row) {
                                    var O = document.createElement("br");
                                    O.className = "lineBreak", J.appendChild(O)
                                }
                                var P = !1;
                                M === N.row && (P = !0), M = N.row;
                                var Q = q[N.name], R = document.createElement("span");
                                R.className = "spanPadding " + N.name + " customSpanColor", R.style.cssText = j(a, Q), 0 !== t && P ? t === L.spans.length - 1 ? R.textContent = n(N.line) : R.textContent = N.line : 0 === t && L.spans.length > 1 && N.row === L.spans[1].row ? R.textContent = l(N.line) : R.textContent = N.line.trim(), J.appendChild(R)
                            }
                        }
                    }
                    I.appendChild(J), G.appendChild(I);
                    var S = {bodyStyle: 90};
                    for (t in q) q.hasOwnProperty(t) && (S[t] = 90);
                    C.push({
                        type: "html",
                        start: b,
                        end: c,
                        cueHTMLElement: G,
                        cueID: E,
                        cellResolution: [32, 15],
                        isFromCEA608: !0,
                        regions: r,
                        regionID: D.name,
                        videoHeight: a.videoHeight,
                        videoWidth: a.videoWidth,
                        fontSize: S || {defaultFontSize: "100"},
                        lineHeight: {},
                        linePadding: {}
                    })
                }
                return C
            }

            function p() {
                S.deleteAllTextTracks(), M = !1, N = null, Q = null, R = null, S = null, T = !1, U = null, V = !1, W = NaN, X = [], Y = null, Z = null, E = !1, aa = null
            }

            function r(a) {
                E || b(), "CC1" === a.id || "CC3" === a.id ? aa.push(a) : D("Warning: Embedded track " + a.id + " not supported!")
            }

            function t() {
                E = !1, aa = [], fa = [null, null], ea = [], da = null
            }

            function v() {
                return M
            }

            function x(a) {
                a && (a.errHandler && (I = a.errHandler), a.adapter && (J = a.adapter), a.dashManifestModel && (K = a.dashManifestModel), a.mediaController && (L = a.mediaController), a.videoModel && (Y = a.videoModel), a.streamController && (Z = a.streamController), a.textTracks && (S = a.textTracks), a.VTTParser && (O = a.VTTParser), a.TTMLParser && (P = a.TTMLParser))
            }

            function z() {
                for (var a = Y.getElement(), b = a.textTracks, c = b.length, d = c - aa.length, e = S.getCurrentTrackIdx(), f = 0; f < c; f++) {
                    var g = b[f];
                    if (M = "showing" !== g.mode, "showing" === g.mode) {
                        if (e !== f && (S.setCurrentTrackIdx(f), S.addCaptions(f, 0, null), T && f < d)) {
                            var h = L.getCurrentTrackFor("fragmentedText", Z.getActiveStreamInfo()), i = X[f];
                            i !== h && (U.abortRequests(), S.deleteTrackCues(h), L.setTrack(i), _ = f)
                        }
                        break
                    }
                }
                M && S.setCurrentTrackIdx(-1)
            }

            function A(a) {
                var b = !1;
                return aa.length > 1 ? b = a.id && "CC1" === a.id : 1 === aa.length ? a.id && "CC" === a.id.substring(0, 2) && (b = !0) : b = a.index === R[0].index, b
            }

            function B(a) {
                var b;
                return a.search("vtt") >= 0 ? b = O : (a.search("ttml") >= 0 || a.search("stpp") >= 0) && (b = P, b.setConfig({videoModel: Y})), b
            }

            var C = this.context, D = (0, q.default)(C).getInstance().log, E = !1, F = 0, G = void 0, H = void 0,
                I = void 0, J = void 0, K = void 0, L = void 0, M = void 0, N = void 0, O = void 0, P = void 0,
                Q = void 0, R = void 0, S = void 0, T = void 0, U = void 0, V = void 0, W = void 0, X = void 0,
                Y = void 0, Z = void 0, $ = void 0, _ = void 0, aa = void 0, ba = void 0, ca = void 0, da = void 0,
                ea = void 0, fa = void 0;
            return G = {
                initialize: a,
                append: c,
                abort: p,
                getAllTracksAreDisabled: v,
                setTextTrack: z,
                setConfig: x,
                addEmbeddedTrack: r,
                resetEmbedded: t
            }
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(171), g = d(f), h = a(32), i = d(h), j = a(146), k = d(j), l = a(148), m = d(l), n = a(10), o = d(n),
            p = a(8), q = d(p), r = a(104), s = d(r), t = a(57), u = d(t), v = a(6), w = d(v), x = a(2), y = d(x);
        e.__dashjs_factory_name = "TextSourceBuffer", c.default = o.default.getSingletonFactory(e), b.exports = c.default
    }, {10: 10, 104: 104, 146: 146, 148: 148, 171: 171, 2: 2, 32: 32, 57: 57, 6: 6, 8: 8}],
    57: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a() {
                D = window.VTTCue || window.TextTrackCue, G = [], H = [], I = -1, J = 0, K = 0, L = 0, M = 0, N = null, O = null, R = !1, S = 2147483647, P = !!navigator.userAgent.match(/Chrome/) && !navigator.userAgent.match(/Edge/), void 0 !== document.fullscreenElement ? Q = "fullscreenElement" : void 0 !== document.webkitIsFullScreen ? Q = "webkitIsFullScreen" : document.msFullscreenElement ? Q = "msFullscreenElement" : document.mozFullScreen && (Q = "mozFullScreen")
            }

            function b(a) {
                var b = G[a].kind, c = void 0 !== G[a].label ? G[a].label : G[a].lang, d = G[a].lang,
                    e = P ? document.createElement("track") : F.addTextTrack(b, c, d);
                return P && (e.kind = b, e.label = c, e.srclang = d), e
            }

            function c(a) {
                R = a, N && !document[Q] && (N.style.zIndex = a ? S : null)
            }

            function d(a, c) {
                if (G.length === c) return void B("Trying to add too many tracks.");
                if (G.push(a), void 0 === F && (F = a.video), G.length === c) {
                    G.sort(function (a, b) {
                        return a.index - b.index
                    }), N = E.getTTMLRenderingDiv();
                    for (var d = -1, e = 0; e < G.length; e++) {
                        var f = b.call(this, e);
                        H.push(f), G[e].defaultTrack && (f.default = !0, d = e), P && F.appendChild(f);
                        var g = F.textTracks[e];
                        g.nonAddedCues = [], N && (G[e].isTTML || G[e].isEmbedded) ? g.renderingType = "html" : g.renderingType = "default", this.addCaptions(e, 0, G[e].captionData), A.trigger(i.default.TEXT_TRACK_ADDED)
                    }
                    q.call(this, d), d >= 0 && (F.textTracks[d].mode = "showing", this.addCaptions(d, 0, null)), A.trigger(i.default.TEXT_TRACKS_ADDED, {
                        index: I,
                        tracks: G
                    })
                }
            }

            function e(a, b, c, d, e, f) {
                var g = a / b, h = c / d, i = 0, j = 0;
                g > h ? (j = b, i = j / d * c) : (i = a, j = i / c * d);
                var k = 0, l = 0, m = 0, n = 0, o = i / j;
                return o > e ? (n = j, m = j / (1 / e), k = (a - m) / 2, l = 0) : (m = i, n = i / e, k = 0, l = (b - n) / 2), f ? {
                    x: k + .1 * m,
                    y: l + .1 * n,
                    w: .8 * m,
                    h: .8 * n
                } : {x: k, y: l, w: m, h: n}
            }

            function f() {
                var a = this.getCurrentTextTrack();
                if (a && "html" === a.renderingType) {
                    var b = F.clientWidth / F.clientHeight, c = !1;
                    a.isFromCEA608 && (b = 3.5 / 3, c = !0);
                    var d = e.call(this, F.clientWidth, F.clientHeight, F.videoWidth, F.videoHeight, b, c), f = d.w,
                        g = d.h;
                    if (f != L || g != M) {
                        J = d.x, K = d.y, L = f, M = g, N.style.left = J + "px", N.style.top = K + "px", N.style.width = L + "px", N.style.height = M + "px";
                        for (var h = 0; a.activeCues && h < a.activeCues.length; ++h) {
                            var i = a.activeCues[h];
                            i.scaleCue(i)
                        }
                        Q && document[Q] || R ? N.style.zIndex = S : N.style.zIndex = null
                    }
                }
            }

            function h(a, b) {
                var c = Math.round(.01 * a * b).toString() + "px";
                return c
            }

            function j(a) {
                var b = L, c = M;
                if (b * c !== 0 && a.layout) {
                    var d = a.layout, e = h(d.left, b), f = h(d.top, c), g = h(d.width, b), i = h(d.height, c);
                    N.style.left = e, N.style.top = f, N.style.width = g, N.style.height = i;
                    var j = N.firstChild;
                    j && j.style && (j.style.left = "0px", j.style.top = "0px", j.style.width = g, j.style.height = i)
                }
            }

            function k(a) {
                var b, c, d, e = L, f = M, g = [e / a.cellResolution[0], f / a.cellResolution[1]];
                if (a.linePadding) for (b in a.linePadding) if (a.linePadding.hasOwnProperty(b)) {
                    var h = a.linePadding[b];
                    c = (h * g[0]).toString();
                    for (var i = document.getElementsByClassName("spanPadding"), j = 0; j < i.length; j++) i[j].style.cssText = i[j].style.cssText.replace(/(padding-left\s*:\s*)[\d.,]+(?=\s*px)/gi, "$1" + c), i[j].style.cssText = i[j].style.cssText.replace(/(padding-right\s*:\s*)[\d.,]+(?=\s*px)/gi, "$1" + c)
                }
                if (a.fontSize) for (b in a.fontSize) if (a.fontSize.hasOwnProperty(b)) {
                    var k = a.fontSize[b] / 100;
                    c = (k * g[1]).toString(), d = "defaultFontSize" !== b ? document.getElementsByClassName(b) : document.getElementsByClassName("paragraph");
                    for (var l = 0; l < d.length; l++) d[l].style.cssText = d[l].style.cssText.replace(/(font-size\s*:\s*)[\d.,]+(?=\s*px)/gi, "$1" + c)
                }
                if (a.lineHeight) for (b in a.lineHeight) if (a.lineHeight.hasOwnProperty(b)) {
                    var m = a.lineHeight[b] / 100;
                    c = (m * g[1]).toString(), d = document.getElementsByClassName(b);
                    for (var n = 0; n < d.length; n++) d[n].style.cssText = d[n].style.cssText.replace(/(line-height\s*:\s*)[\d.,]+(?=\s*px)/gi, "$1" + c)
                }
            }

            function l(a, b, c) {
                var d = a >= 0 ? F.textTracks[a] : null, e = this;
                if (d) {
                    if ("showing" !== d.mode) return void(c && c.length > 0 && (d.nonAddedCues = d.nonAddedCues.concat(c)));
                    if (c || (c = d.nonAddedCues, d.nonAddedCues = []), c && 0 !== c.length) for (var g in c) {
                        var h, i = c[g];
                        d.cellResolution = i.cellResolution, d.isFromCEA608 = i.isFromCEA608, O || "html" !== i.type && "image" !== i.type || (O = setInterval(f.bind(this), 500)), "image" === i.type ? (h = new D(i.start - b, i.end - b, ""), h.image = i.data, h.id = i.id, h.size = 0, h.type = "image", h.layout = i.layout, h.scaleCue = j.bind(e), h.onenter = function () {
                            if (N && "showing" === d.mode) {
                                var a = new Image;
                                a.id = "ttmlImage_" + this.id, a.src = this.image, a.style.cssText = "z-index: 2147483648; pointer-events: none; display: block; visibility: visible !important; position: relative !important;", N.appendChild(a), j.call(e, this)
                            }
                        }, h.onexit = function () {
                            if (N) for (var a = N.childNodes, b = 0; b < a.length; b++) a[b].id === "ttmlImage_" + this.id && N.removeChild(a[b])
                        }) : "html" === i.type ? (h = new D(i.start - b, i.end - b, ""), h.cueHTMLElement = i.cueHTMLElement, h.regions = i.regions, h.regionID = i.regionID, h.cueID = i.cueID, h.videoWidth = i.videoWidth, h.videoHeight = i.videoHeight, h.cellResolution = i.cellResolution, h.fontSize = i.fontSize, h.lineHeight = i.lineHeight, h.linePadding = i.linePadding, h.scaleCue = k.bind(e), N.style.left = J + "px", N.style.top = K + "px", N.style.width = L + "px", N.style.height = M + "px", h.onenter = function () {
                            "showing" === d.mode && (B("Cue " + this.startTime + "-" + this.endTime + " : " + this.cueHTMLElement.id + " : " + this.cueHTMLElement.innerText), N.appendChild(this.cueHTMLElement), k.call(e, this))
                        }, h.onexit = function () {
                            for (var a = N.childNodes, b = 0; b < a.length; ++b) a[b].id === this.cueID && N.removeChild(a[b])
                        }) : (h = new D(i.start - b, i.end - b, i.data), i.styles && (void 0 !== i.styles.align && h.hasOwnProperty("align") && (h.align = i.styles.align), void 0 !== i.styles.line && h.hasOwnProperty("line") && (h.line = i.styles.line), void 0 !== i.styles.position && h.hasOwnProperty("position") && (h.position = i.styles.position), void 0 !== i.styles.size && h.hasOwnProperty("size") && (h.size = i.styles.size))), d.addCue(h)
                    }
                }
            }

            function n() {
                return I >= 0 ? F.textTracks[I] : null
            }

            function o() {
                return I
            }

            function p(a) {
                for (var b = -1, c = 0; c < F.textTracks.length; c++) if (F.textTracks[c].label === a) {
                    b = c;
                    break
                }
                return b
            }

            function q(a) {
                if (I = a, x.call(this), a >= 0) {
                    var b = F.textTracks[a];
                    "html" === b.renderingType ? v.call(this) : w.call(this)
                } else w.call(this)
            }

            function r(a) {
                return F.textTracks[a]
            }

            function s(a) {
                if (a.cues) {
                    for (var b = a.cues, c = b.length - 1, d = c; d >= 0; d--) a.removeCue(b[d]);
                    a.mode = "disabled"
                }
            }

            function t() {
                for (var a = H.length, b = 0; b < a; b++) if (P) F.removeChild(H[b]); else {
                    var c = r.call(this, b);
                    c.nonAddedCues = [], s.call(this, c)
                }
                H = [], G = [], O && (clearInterval(O), O = null), x.call(this)
            }

            function u(a) {
                F.removeChild(H[a]), H.splice(a, 1)
            }

            function v() {
                if (P) {
                    var a = document.getElementById("native-cue-style");
                    if (!a) {
                        a = document.createElement("style"), a.id = "native-cue-style", document.head.appendChild(a);
                        var b = a.sheet;
                        F.id ? b.insertRule("#" + F.id + "::cue {background: transparent}", 0) : 0 !== F.classList.length ? b.insertRule("." + F.className + "::cue {background: transparent}", 0) : b.insertRule("video::cue {background: transparent}", 0)
                    }
                }
            }

            function w() {
                if (P) {
                    var a = document.getElementById("native-cue-style");
                    a && document.head.removeChild(a)
                }
            }

            function x() {
                if (N) for (; N.firstChild;) N.removeChild(N.firstChild)
            }

            function y(a) {
                a && a.videoModel && (E = a.videoModel)
            }

            var z = this.context, A = (0, g.default)(z).getInstance(), B = (0, m.default)(z).getInstance().log,
                C = void 0, D = void 0, E = void 0, F = void 0, G = void 0, H = void 0, I = void 0, J = void 0,
                K = void 0, L = void 0, M = void 0, N = void 0, O = void 0, P = void 0, Q = void 0, R = void 0,
                S = void 0;
            return C = {
                initialize: a,
                displayCConTop: c,
                addTextTrack: d,
                addCaptions: l,
                getTextTrack: r,
                getCurrentTextTrack: n,
                getCurrentTrackIdx: o,
                setCurrentTrackIdx: q,
                getTrackIdxForId: p,
                deleteTrackCues: s,
                deleteAllTextTracks: t,
                deleteTextTrack: u,
                setConfig: y
            }
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(9), g = d(f), h = a(13), i = d(h), j = a(10), k = d(j), l = a(8), m = d(l);
        e.__dashjs_factory_name = "TextTracks", c.default = k.default.getSingletonFactory(e), b.exports = c.default
    }, {10: 10, 13: 13, 8: 8, 9: 9}],
    58: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a, b, c) {
            return b in a ? Object.defineProperty(a, b, {
                value: c,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : a[b] = c, a
        }

        function f(a) {
            function b() {
                var a;
                p = [], q = [], r = [], a = {}, e(a, g.HTTPRequest.MPD_TYPE, m.default.DOWNLOAD_ERROR_ID_MANIFEST), e(a, g.HTTPRequest.XLINK_EXPANSION_TYPE, m.default.DOWNLOAD_ERROR_ID_XLINK), e(a, g.HTTPRequest.INIT_SEGMENT_TYPE, m.default.DOWNLOAD_ERROR_ID_INITIALIZATION), e(a, g.HTTPRequest.MEDIA_SEGMENT_TYPE, m.default.DOWNLOAD_ERROR_ID_CONTENT), e(a, g.HTTPRequest.INDEX_SEGMENT_TYPE, m.default.DOWNLOAD_ERROR_ID_CONTENT), e(a, g.HTTPRequest.BITSTREAM_SWITCHING_SEGMENT_TYPE, m.default.DOWNLOAD_ERROR_ID_CONTENT), e(a, g.HTTPRequest.OTHER_TYPE, m.default.DOWNLOAD_ERROR_ID_CONTENT), s = a
            }

            function c(a, b) {
                var d = a.request, e = new XMLHttpRequest, f = [], g = !0, h = !0, k = new Date, m = k, o = 0,
                    t = function (a) {
                        h = !1, d.requestStartDate = k, d.requestEndDate = new Date, d.firstByteDate = d.firstByteDate || k, d.checkExistenceOnly || l.addHttpRequest(d.mediaType, null, d.type, d.url, e.responseURL || null, d.serviceLocation || null, d.range || null, d.requestStartDate, d.firstByteDate, d.requestEndDate, e.status, d.duration, e.getAllResponseHeaders(), a ? f : null)
                    }, u = function () {
                        p.indexOf(e) !== -1 && (p.splice(p.indexOf(e), 1), h && (t(!1), b > 0 ? (b--, r.push(setTimeout(function () {
                            c(a, b)
                        }, i.getRetryIntervalForType(d.type)))) : (j.downloadError(s[d.type], d.url, d), a.error && a.error(d, "error", e.statusText), a.complete && a.complete(d, e.statusText))))
                    }, v = function (b) {
                        var c = new Date;
                        g && (g = !1, (!b.lengthComputable || b.lengthComputable && b.total !== b.loaded) && (d.firstByteDate = c)), b.lengthComputable && (d.bytesLoaded = b.loaded, d.bytesTotal = b.total), f.push({
                            s: m,
                            d: c.getTime() - m.getTime(),
                            b: [b.loaded ? b.loaded - o : 0]
                        }), m = c, o = b.loaded, a.progress && a.progress()
                    }, w = function () {
                        e.status >= 200 && e.status <= 299 && (t(!0), a.success && a.success(e.response, e.statusText, e), a.complete && a.complete(d, e.statusText))
                    };
                try {
                    var x = n.modifyRequestURL(d.url), y = d.checkExistenceOnly ? "HEAD" : "GET";
                    e.open(y, x, !0), d.responseType && (e.responseType = d.responseType), d.range && e.setRequestHeader("Range", "bytes=" + d.range), d.requestStartDate || (d.requestStartDate = k), e = n.modifyRequestHeader(e), e.withCredentials = i.getXHRWithCredentials(), e.onload = w, e.onloadend = u, e.onerror = u, e.onprogress = v;
                    var z = (new Date).getTime();
                    isNaN(d.delayLoadingTime) || z >= d.delayLoadingTime ? (p.push(e), e.send()) : !function () {
                        var a = {xhr: e};
                        q.push(a), a.delayTimeout = setTimeout(function () {
                            if (q.indexOf(a) !== -1) {
                                q.splice(q.indexOf(a), 1);
                                try {
                                    p.push(a.xhr), a.xhr.send()
                                } catch (b) {
                                    a.xhr.onerror()
                                }
                            }
                        }, d.delayLoadingTime - z)
                    }()
                } catch (A) {
                    e.onerror()
                }
            }

            function d(a) {
                a.request && c(a, i.getRetryAttemptsForType(a.request.type))
            }

            function f() {
                r.forEach(function (a) {
                    return clearTimeout(a)
                }), r = [], q.forEach(function (a) {
                    return clearTimeout(a.delayTimeout)
                }), q = [], p.forEach(function (a) {
                    a.onloadend = a.onerror = a.onprogress = void 0, a.abort()
                }), p = []
            }

            var h = this.context, i = (0, k.default)(h).getInstance(), j = a.errHandler, l = a.metricsModel,
                n = a.requestModifier, o = void 0, p = void 0, q = void 0, r = void 0, s = void 0;
            return o = {load: d, abort: f}, b(), o
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var g = a(179), h = a(10), i = d(h), j = a(101), k = d(j), l = a(151), m = d(l);
        f.__dashjs_factory_name = "XHRLoader";
        var n = i.default.getClassFactory(f);
        c.default = n, b.exports = c.default
    }, {10: 10, 101: 101, 151: 151, 179: 179}],
    59: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a) {
            function b(a, b, c) {
                var e = function (d, e) {
                    b.resolved = !0, b.resolvedContent = d ? d : null, f.trigger(p.default.XLINK_ELEMENT_LOADED, {
                        element: b,
                        resolveObject: c,
                        error: d || e ? null : new g.default(s, "Failed loading Xlink element: " + a)
                    })
                };
                if (a === d) e(null, !0); else {
                    var i = new l.default(a, j.HTTPRequest.XLINK_TYPE);
                    h.load({
                        request: i, success: function (a) {
                            e(a)
                        }, error: function () {
                            e(null)
                        }
                    })
                }
            }

            function c() {
                h && (h.abort(), h = null)
            }

            var d = "urn:mpeg:dash:resolve-to-zero:2013", e = this.context, f = (0, n.default)(e).getInstance(),
                h = (0, i.default)(e).create({
                    errHandler: a.errHandler,
                    metricsModel: a.metricsModel,
                    requestModifier: a.requestModifier
                }), k = void 0;
            return k = {load: b, reset: c}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(162), g = d(f), h = a(58), i = d(h), j = a(179), k = a(170), l = d(k), m = a(9), n = d(m), o = a(13),
            p = d(o), q = a(10), r = d(q), s = 1;
        e.__dashjs_factory_name = "XlinkLoader";
        var t = r.default.getClassFactory(e);
        t.XLINK_LOADER_ERROR_LOADING_FAILURE = s, c.default = t, b.exports = c.default
    }, {10: 10, 13: 13, 162: 162, 170: 170, 179: 179, 58: 58, 9: 9}],
    60: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a() {
                ha = {
                    video: !0,
                    audio: !0
                }, ia = {}, ja = {}, ka = {}, la = {}, ma = {}, na = {}, pa = {}, oa = {}, ra = !1, sa = !1, xa = (0, k.default)(ba).getInstance(), wa = (0, o.default)(ba).getInstance(), ta = (0, y.default)(ba).getInstance(), ua = (0, A.default)(ba).getInstance(), va = (0, C.default)(ba).getInstance()
            }

            function b(a, b) {
                oa[a] = b, pa[a] = pa[a] || {}, pa[a].state = E, ca.on(u.default.LOADING_PROGRESS, aa, this)
            }

            function c(a) {
                a && (a.abrRulesCollection && (ea = a.abrRulesCollection), a.rulesController && (fa = a.rulesController), a.streamController && (ga = a.streamController))
            }

            function d(a, b) {
                var c;
                return ia[b] = ia[b] || {}, ia[b].hasOwnProperty(a) || (ia[b][a] = 0), c = Z(ia[b][a], a), c = $(c, a, ia[b][a]), c = _(c, a)
            }

            function e(a) {
                var b = xa.getSavedBitrateSettings(a);
                if (!la.hasOwnProperty(a)) if (ma.hasOwnProperty(a)) {
                    var c = ta.getValue(), d = ua.getAdaptationForType(c, 0, a).Representation;
                    if (Array.isArray(d)) {
                        var e = Math.max(Math.round(d.length * ma[a]) - 1, 0);
                        la[a] = d[e].bandwidth
                    } else la[a] = 0
                } else isNaN(b) ? la[a] = "video" === a ? F : G : la[a] = b;
                return la[a]
            }

            function f(a, b) {
                la[a] = b
            }

            function h(a) {
                return ma.hasOwnProperty(a) ? ma[a] : null
            }

            function j(a, b) {
                ma[a] = b
            }

            function l(a) {
                return la.hasOwnProperty("max") && la.max.hasOwnProperty(a) ? la.max[a] : NaN
            }

            function n(a, b) {
                la.max = la.max || {}, la.max[a] = b
            }

            function p(a) {
                return ma.hasOwnProperty("max") && ma.max.hasOwnProperty(a) ? ma.max[a] : 1
            }

            function r(a, b) {
                ma.max = ma.max || {}, ma.max[a] = b
            }

            function t(a) {
                return ha[a]
            }

            function v(a, b) {
                ha[a] = b
            }

            function w() {
                return ra
            }

            function x(a) {
                ra = a
            }

            function z() {
                return sa
            }

            function B(a) {
                sa = a
            }

            function I(a, b) {
                var c = a.getType(), e = a.getStreamInfo(), f = e.id, h = function (a) {
                    var g = d(c, f), h = a.value;
                    h < 0 && (h = 0), h > g && (h = g);
                    var i = U(c, e);
                    h !== i && (pa[c].state === E || h > i) && (X(c, f, a.confidence), K(c, e, i, h, a.reason)), b && b()
                };
                if (t(c)) {
                    var i = ea.getRules(m.default.QUALITY_SWITCH_RULES);
                    fa.applyRules(i, a, h, U(c, e), function (a, b) {
                        return a = a === g.default.NO_CHANGE ? 0 : a, Math.max(a, b)
                    })
                } else b && b()
            }

            function J(a, b, c, e) {
                var f = b.id, g = U(a, b), h = null !== c && !isNaN(c) && c % 1 === 0;
                if (!h) throw new Error("argument is not an integer");
                c !== g && c >= 0 && c <= d(a, f) && K(a, b, g, c, e)
            }

            function K(a, b, c, d, e) {
                V(a, b.id, d), ca.trigger(u.default.QUALITY_CHANGE_REQUESTED, {
                    mediaType: a,
                    streamInfo: b,
                    oldQuality: c,
                    newQuality: d,
                    reason: e
                })
            }

            function L(a, b) {
                pa[a].state = b
            }

            function M(a) {
                return pa[a].state
            }

            function N(a, b) {
                var c = O(a);
                if (!c || 0 === c.length) return H;
                for (var d = c.length - 1; d >= 0; d--) {
                    var e = c[d];
                    if (1e3 * b >= e.bitrate) return d
                }
                return 0
            }

            function O(a) {
                if (!a || !a.bitrateList) return null;
                for (var b, c = a.bitrateList, d = a.type, e = [], f = 0, g = c.length; f < g; f++) b = new i.default, b.mediaType = d, b.qualityIndex = f, b.bitrate = c[f].bandwidth, b.width = c[f].width, b.height = c[f].height, e.push(b);
                return e
            }

            function P(a, b) {
                na[a] = b
            }

            function Q(a) {
                return na[a]
            }

            function R(a) {
                var b = a.type, c = a.streamInfo.id, d = a.representationCount - 1;
                return Y(b, c, d), d
            }

            function S(a) {
                var b, c = a.id, e = U("audio", a), f = U("video", a);
                return b = e === d("audio", c) && f === d("video", c)
            }

            function T() {
                ca.off(u.default.LOADING_PROGRESS, aa, this), clearTimeout(qa), qa = null, a()
            }

            function U(a, b) {
                var c, d = b.id;
                return ja[d] = ja[d] || {}, ja[d].hasOwnProperty(a) || (ja[d][a] = H), c = ja[d][a]
            }

            function V(a, b, c) {
                ja[b] = ja[b] || {}, ja[b][a] = c
            }

            function W(a, b) {
                var c;
                return ka[b] = ka[b] || {}, ka[b].hasOwnProperty(a) || (ka[b][a] = 0), c = ka[b][a]
            }

            function X(a, b, c) {
                ka[b] = ka[b] || {}, ka[b][a] = c
            }

            function Y(a, b, c) {
                ia[b] = ia[b] || {}, ia[b][a] = c
            }

            function Z(a, b) {
                var c = l(b);
                if (isNaN(c) || !oa[b]) return a;
                var d = N(oa[b].getMediaInfo(), c);
                return Math.min(a, d)
            }

            function $(a, b, c) {
                var d = p(b);
                return isNaN(d) || d >= 1 || d < 0 ? a : Math.min(a, Math.round(c * d))
            }

            function _(a, b) {
                if ("video" !== b || !ra || !oa[b]) return a;
                var c = sa && window.hasOwnProperty("devicePixelRatio"), d = c ? window.devicePixelRatio : 1,
                    e = va.getElement(), f = e.clientWidth * d, g = e.clientHeight * d, h = ta.getValue(),
                    i = ua.getAdaptationForType(h, 0, b).Representation, j = a;
                if (f > 0 && g > 0) {
                    for (; j > 0 && i[j] && f < i[j].width && f - i[j - 1].width < i[j].width - f;) j -= 1;
                    i.length - 2 >= j && i[j].width === i[j + 1].width && (j = Math.min(a, j + 1))
                }
                return j
            }

            function aa(a) {
                var b = a.request.mediaType;
                if (t(b)) {
                    var c = function () {
                        var c = ea.getRules(m.default.ABANDON_FRAGMENT_RULES), d = oa[b].getScheduleController();
                        if (!d) return {v: void 0};
                        var e = function (c) {
                            if (c.confidence === g.default.STRONG && c.value < U(b, ga.getActiveStreamInfo())) {
                                var e = d.getFragmentModel(), f = e.getRequests({
                                    state: q.default.FRAGMENT_MODEL_LOADING,
                                    index: a.request.index
                                })[0];
                                f && (e.abortRequests(), L(b, D), J(b, ga.getActiveStreamInfo(), c.value, c.reason), ca.trigger(u.default.FRAGMENT_LOADING_ABANDONED, {
                                    streamProcessor: oa[b],
                                    request: f,
                                    mediaType: b
                                }), clearTimeout(qa), qa = setTimeout(function () {
                                    L(b, E), qa = null
                                }, wa.getAbandonLoadTimeout()))
                            }
                        };
                        fa.applyRules(c, oa[b], e, a, function (a, b) {
                            return b
                        })
                    }();
                    if ("object" == typeof c) return c.v
                }
            }

            var ba = this.context, ca = (0, s.default)(ba).getInstance(), da = void 0, ea = void 0, fa = void 0,
                ga = void 0, ha = void 0, ia = void 0, ja = void 0, ka = void 0, la = void 0, ma = void 0, na = void 0,
                oa = void 0, pa = void 0, qa = void 0, ra = void 0, sa = void 0, ta = void 0, ua = void 0, va = void 0,
                wa = void 0, xa = void 0;
            return da = {
                isPlayingAtTopQuality: S,
                updateTopQualityIndex: R,
                getAverageThroughput: Q,
                getBitrateList: O,
                getQualityForBitrate: N,
                getMaxAllowedBitrateFor: l,
                setMaxAllowedBitrateFor: n,
                getMaxAllowedRepresentationRatioFor: p,
                setMaxAllowedRepresentationRatioFor: r,
                getInitialBitrateFor: e,
                setInitialBitrateFor: f,
                getInitialRepresentationRatioFor: h,
                setInitialRepresentationRatioFor: j,
                setAutoSwitchBitrateFor: v,
                getAutoSwitchBitrateFor: t,
                setLimitBitrateByPortal: x,
                getLimitBitrateByPortal: w,
                getUsePixelRatioInLimitBitrateByPortal: z,
                setUsePixelRatioInLimitBitrateByPortal: B,
                getConfidenceFor: W,
                getQualityFor: U,
                getAbandonmentStateFor: M,
                setAbandonmentStateFor: L,
                setPlaybackQuality: J,
                getPlaybackQuality: I,
                setAverageThroughput: P,
                getTopQualityIndexFor: d,
                initialize: b,
                setConfig: c,
                reset: T
            }, a(), da
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(130), g = d(f), h = a(160), i = d(h), j = a(149), k = d(j), l = a(131), m = d(l), n = a(101),
            o = d(n), p = a(99), q = d(p), r = a(9), s = d(r), t = a(13), u = d(t), v = a(10), w = d(v), x = a(100),
            y = d(x), z = a(22), A = d(z), B = a(104), C = d(B), D = "abandonload", E = "allowload", F = 1e3, G = 100,
            H = 0;
        e.__dashjs_factory_name = "AbrController";
        var I = w.default.getSingletonFactory(e);
        I.ABANDON_LOAD = D, I.QUALITY_DEFAULT = H, c.default = I, b.exports = c.default
    }, {10: 10, 100: 100, 101: 101, 104: 104, 13: 13, 130: 130, 131: 131, 149: 149, 160: 160, 22: 22, 9: 9, 99: 99}],
    61: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a(a) {
                o.invalidateSelectedIndexes(a.entry)
            }

            function b() {
                o = (0, g.default)(j).create(), p = (0, i.default)(j).create(), l.on(s.default.SERVICE_LOCATION_BLACKLIST_CHANGED, a, h)
            }

            function c(a) {
                o.update(a), p.chooseSelectorFromManifest(a)
            }

            function d(a) {
                var b = o.getForPath(a), c = b.reduce(function (a, b) {
                    var c = p.select(b);
                    return c && (n.isRelative(c.url) ? a.url += c.url : n.isPathAbsolute(c.url) ? a.url = n.parseOrigin(a.url) + c.url : (a.url = c.url, a.serviceLocation = c.serviceLocation)), a
                }, new m.default);
                if (!n.isRelative(c.url)) return c
            }

            function e() {
                o.reset(), p.reset()
            }

            function f(a) {
                c(a)
            }

            var h = void 0, j = this.context, l = (0, q.default)(j).getInstance(), n = (0, k.default)(j).getInstance(),
                o = void 0, p = void 0;
            return h = {reset: e, initialize: f, resolve: d}, b(), h
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(98), g = d(f), h = a(145), i = d(h), j = a(158), k = d(j), l = a(40), m = d(l), n = a(10), o = d(n),
            p = a(9), q = d(p), r = a(13), s = d(r);
        e.__dashjs_factory_name = "BaseURLController", c.default = o.default.getSingletonFactory(e), b.exports = c.default
    }, {10: 10, 13: 13, 145: 145, 158: 158, 40: 40, 9: 9, 98: 98}],
    62: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a) {
            function b(a) {
                return !!(g.length && a && a.length) && g.indexOf(a) !== -1
            }

            function c(a) {
                g.indexOf(a) === -1 && (g.push(a), h.trigger(j, {entry: a}))
            }

            function d(a) {
                a.error && c(a.request.serviceLocation)
            }

            function e() {
                k && h.on(k, d, this)
            }

            function f() {
                g = []
            }

            var g = [], h = (0, i.default)(this.context).getInstance(), j = a.updateEventName,
                k = a.loadFailedEventName;
            return e(), {add: c, contains: b, reset: f}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(10), g = d(f), h = a(9), i = d(h);
        e.__dashjs_factory_name = "BlackListController", c.default = g.default.getClassFactory(e), b.exports = c.default
    }, {10: 10, 9: 9}],
    63: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a) {
            function b() {
                oa = m.default.QUALITY_DEFAULT, pa = !1, qa = 0, ra = Number.POSITIVE_INFINITY, ta = 0, ua = 0, wa = null, xa = E, za = 0, Aa = !1, Ba = !1, Ca = !1, Da = !1
            }

            function c(a, b, c) {
                va = a, $(b), Fa = c, Ia = (0, i.default)(ca).getInstance(), Ea = (0, o.default)(ca).getInstance(), Ga = (0, m.default)(ca).getInstance(), Ja = (0, C.default)(ca).getInstance(), Ha = Fa.getScheduleController(), oa = Ga.getQualityFor(va, Fa.getStreamInfo()), ea.on(u.default.DATA_UPDATE_COMPLETED, O, this), ea.on(u.default.INIT_FRAGMENT_LOADED, f, this), ea.on(u.default.MEDIA_FRAGMENT_LOADED, j, this), ea.on(u.default.QUALITY_CHANGE_REQUESTED, p, this), ea.on(u.default.STREAM_COMPLETED, P, this), ea.on(u.default.PLAYBACK_PROGRESS, t, this), ea.on(u.default.PLAYBACK_TIME_UPDATED, t, this), ea.on(u.default.PLAYBACK_RATE_CHANGED, S, this), ea.on(u.default.PLAYBACK_SEEKING, r, this), ea.on(u.default.WALLCLOCK_TIME_UPDATED, R, this), ea.on(u.default.CURRENT_TRACK_CHANGED, Q, this, s.default.EVENT_PRIORITY_HIGH), ea.on(u.default.SOURCEBUFFER_APPEND_COMPLETED, n, this), ea.on(u.default.SOURCEBUFFER_REMOVE_COMPLETED, M, this)
            }

            function d(a) {
                if (!a || !sa || !Fa) return null;
                var b = null;
                try {
                    b = ha.createSourceBuffer(sa, a), b && b.hasOwnProperty("initialize") && b.initialize(va, this)
                } catch (c) {
                    ia.mediaSourceError("Error creating " + va + " source buffer.")
                }
                return X(b), N(Fa.getRepresentationInfoForQuality(oa).MSETimeOffset), b
            }

            function e() {
                return Fa.getStreamInfo().id === ja.getActiveStreamInfo().id
            }

            function f(a) {
                a.fragmentModel === Fa.getFragmentModel() && (da("Init fragment finished loading saving to", va + "'s init cache"), Ja.save(a.chunk), l(a.chunk))
            }

            function h(a, b) {
                var c = Ja.extract(a, va, b);
                c ? l(c) : ea.trigger(u.default.INIT_REQUESTED, {sender: na})
            }

            function j(a) {
                if (a.fragmentModel === Fa.getFragmentModel()) {
                    var b = a.chunk, c = b.bytes, d = b.quality, e = Fa.getRepresentationInfoForQuality(d),
                        f = ga.getValue(), h = la.getEventsFor(f, e.mediaInfo, Fa), i = la.getEventsFor(f, e, Fa);
                    if (h.length > 0 || i.length > 0) {
                        var j = Fa.getFragmentModel().getRequests({
                            state: g.default.FRAGMENT_MODEL_EXECUTED,
                            quality: d,
                            index: b.index
                        })[0], k = G(c, j, h, i);
                        Fa.getEventController().addInbandEvents(k)
                    }
                    b.bytes = H(c), l(b)
                }
            }

            function l(a) {
                Ba = !0, ya = a, ha.append(wa, a), "video" === a.mediaInfo.type && a.mediaInfo.embeddedCaptions && ma.append(a.bytes, a)
            }

            function n(a) {
                if (wa === a.buffer) {
                    if (a.error || !I()) return a.error.code === k.default.QUOTA_EXCEEDED_ERROR_CODE && (ra = .8 * ha.getTotalBufferedTime(wa)), void(a.error.code !== k.default.QUOTA_EXCEEDED_ERROR_CODE && I() || (ea.trigger(u.default.QUOTA_EXCEEDED, {
                        sender: na,
                        criticalBufferLevel: ra
                    }), L(K())));
                    isNaN(ya.index) || (ta = Math.max(ya.index, ta), y());
                    var b = ha.getAllRanges(wa);
                    if (b && b.length > 0) for (var c = 0, d = b.length; c < d; c++) da("Buffered Range for type:", va, ":", b.start(c), " - ", b.end(c));
                    t(), Ba = !1, ea.trigger(u.default.BYTES_APPENDED, {
                        sender: na,
                        quality: ya.quality,
                        startTime: ya.start,
                        index: ya.index,
                        bufferedRanges: b
                    })
                }
            }

            function p(a) {
                oa !== a.newQuality && va === a.mediaType && Fa.getStreamInfo().id === a.streamInfo.id && (N(Fa.getRepresentationInfoForQuality(a.newQuality).MSETimeOffset), oa = a.newQuality)
            }

            function r() {
                ua = 0, pa = !1, t()
            }

            function t() {
                v(), x()
            }

            function v() {
                qa = ha.getBufferLength(wa, Ea.getTime()), ea.trigger(u.default.BUFFER_LEVEL_UPDATED, {
                    sender: na,
                    bufferLevel: qa
                }), z()
            }

            function x() {
                e() && (fa.addBufferState(va, xa, Ha.getBufferTarget()), fa.addBufferLevel(va, new Date, 1e3 * qa))
            }

            function y() {
                var a = ta === ua - 1;
                a && !pa && (pa = !0, ea.trigger(u.default.BUFFERING_COMPLETED, {
                    sender: na,
                    streamInfo: Fa.getStreamInfo()
                }))
            }

            function z() {
                B(qa < F && !pa ? E : D)
            }

            function B(a) {
                xa === a || "fragmentedText" === va && ma.getAllTracksAreDisabled() || (xa = a, x(), ea.trigger(u.default.BUFFER_LEVEL_STATE_CHANGED, {
                    sender: na,
                    state: a,
                    mediaType: va,
                    streamInfo: Fa.getStreamInfo()
                }), ea.trigger(a === D ? u.default.BUFFER_LOADED : u.default.BUFFER_EMPTY, {mediaType: va}), da(a === D ? "Got enough buffer to start." : "Waiting for more buffer before starting playback."))
            }

            function G(a, b, c, d) {
                var e = Math.max(isNaN(b.startTime) ? 0 : b.startTime, 0), f = [], g = [];
                Da = !1;
                for (var h = c.concat(d), i = 0, j = h.length; i < j; i++) f[h[i].schemeIdUri] = h[i];
                for (var k = (0, w.default)(ca).getInstance().parse(a), l = k.getBoxes("emsg"), i = 0, j = l.length; i < j; i++) {
                    var m = la.getEvent(l[i], f, e);
                    m && g.push(m)
                }
                return g
            }

            function H(a) {
                if (!Da) return a;
                for (var b = a.length, c = Math.pow(256, 2), d = Math.pow(256, 3), e = new Uint8Array(a.length), f = 0, g = 0; f < b;) {
                    var h = String.fromCharCode(a[f + 4], a[f + 5], a[f + 6], a[f + 7]),
                        i = a[f] * d + a[f + 1] * c + 256 * a[f + 2] + 1 * a[f + 3];
                    if ("emsg" != h) for (var j = f; j < f + i; j++) e[g] = a[j], g++;
                    f += i
                }
                return e.subarray(0, g)
            }

            function I() {
                var a = ha.getTotalBufferedTime(wa);
                return a < ra
            }

            function J() {
                if ("fragmentedText" !== va) {
                    var a = wa.buffered.length ? wa.buffered.start(0) : 0, b = Ea.getTime() - a - Ia.getBufferToKeep();
                    b > 0 && (da("pruning buffer: " + b + " seconds."), Ca = !0, ha.remove(wa, 0, Math.round(a + b), sa))
                }
            }

            function K() {
                if (!wa) return null;
                var a = Ea.getTime(),
                    b = Fa.getFragmentModel().getRequests({state: g.default.FRAGMENT_MODEL_EXECUTED, time: a})[0],
                    c = ha.getBufferRange(wa, a), d = b && !isNaN(b.startTime) ? b.startTime : Math.floor(a);
                return null === c && wa.buffered.length > 0 && (d = wa.buffered.end(wa.buffered.length - 1)), {
                    start: wa.buffered.start(0),
                    end: d
                }
            }

            function L(a) {
                a && wa && ha.remove(wa, a.start, a.end, sa)
            }

            function M(a) {
                wa === a.buffer && (Ca && (Ca = !1), v(), ea.trigger(u.default.BUFFER_CLEARED, {
                    sender: na,
                    from: a.from,
                    to: a.to,
                    hasEnoughSpaceToAppend: I()
                }))
            }

            function N(a) {
                wa && wa.timestampOffset !== a && !isNaN(a) && (wa.timestampOffset = a)
            }

            function O(a) {
                a.sender.getStreamProcessor() !== Fa || a.error || N(a.currentRepresentation.MSETimeOffset)
            }

            function P(a) {
                a.fragmentModel === Fa.getFragmentModel() && (ua = a.request.index, y())
            }

            function Q(a) {
                wa && a.newMediaInfo.type === va && a.newMediaInfo.streamInfo.id === Fa.getStreamInfo().id && ka.getSwitchMode(va) === q.default.TRACK_SWITCH_MODE_ALWAYS_REPLACE && L(K())
            }

            function R() {
                za++;
                var a = za * (Ia.getWallclockTimeUpdateInterval() / 1e3);
                a >= Ia.getBufferPruningInterval() && !Ba && (za = 0, J())
            }

            function S() {
                z()
            }

            function T() {
                return va
            }

            function U() {
                return Fa
            }

            function V(a) {
                Fa = a
            }

            function W() {
                return wa
            }

            function X(a) {
                wa = a
            }

            function Y() {
                return qa
            }

            function Z() {
                return ra
            }

            function $(a) {
                sa = a
            }

            function _() {
                return sa
            }

            function aa() {
                return pa
            }

            function ba(a) {
                ea.off(u.default.DATA_UPDATE_COMPLETED, O, this), ea.off(u.default.QUALITY_CHANGE_REQUESTED, p, this), ea.off(u.default.INIT_FRAGMENT_LOADED, f, this), ea.off(u.default.MEDIA_FRAGMENT_LOADED, j, this), ea.off(u.default.STREAM_COMPLETED, P, this),
                    ea.off(u.default.CURRENT_TRACK_CHANGED, Q, this), ea.off(u.default.PLAYBACK_PROGRESS, t, this), ea.off(u.default.PLAYBACK_TIME_UPDATED, t, this), ea.off(u.default.PLAYBACK_RATE_CHANGED, S, this), ea.off(u.default.PLAYBACK_SEEKING, r, this), ea.off(u.default.WALLCLOCK_TIME_UPDATED, R, this), ea.off(u.default.SOURCEBUFFER_APPEND_COMPLETED, n, this), ea.off(u.default.SOURCEBUFFER_REMOVE_COMPLETED, M, this), ra = Number.POSITIVE_INFINITY, xa = E, oa = m.default.QUALITY_DEFAULT, ua = 0, ta = 0, ya = null, Aa = !1, pa = !1, Ba = !1, Ca = !1, Ea = null, Fa = null, Ga = null, Ha = null, a || (ha.abort(sa, wa), ha.removeSourceBuffer(sa, wa)), wa = null
            }

            var ca = this.context, da = (0, A.default)(ca).getInstance().log, ea = (0, s.default)(ca).getInstance(),
                fa = a.metricsModel, ga = a.manifestModel, ha = a.sourceBufferController, ia = a.errHandler,
                ja = a.streamController, ka = a.mediaController, la = a.adapter, ma = a.textSourceBuffer, na = void 0,
                oa = void 0, pa = void 0, qa = void 0, ra = void 0, sa = void 0, ta = void 0, ua = void 0, va = void 0,
                wa = void 0, xa = void 0, ya = void 0, za = void 0, Aa = void 0, Ba = void 0, Ca = void 0, Da = void 0,
                Ea = void 0, Fa = void 0, Ga = void 0, Ha = void 0, Ia = void 0, Ja = void 0;
            return na = {
                initialize: c,
                createBuffer: d,
                getType: T,
                getStreamProcessor: U,
                setStreamProcessor: V,
                getBuffer: W,
                setBuffer: X,
                getBufferLevel: Y,
                getCriticalBufferLevel: Z,
                setMediaSource: $,
                getMediaSource: _,
                getIsBufferingCompleted: aa,
                switchInitData: h,
                reset: ba
            }, b(), na
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(99), g = d(f), h = a(101), i = d(h), j = a(70), k = d(j), l = a(60), m = d(l), n = a(68), o = d(n),
            p = a(66), q = d(p), r = a(9), s = d(r), t = a(13), u = d(t), v = a(146), w = d(v), x = a(10), y = d(x),
            z = a(8), A = d(z), B = a(152), C = d(B), D = "bufferLoaded", E = "bufferStalled", F = .5;
        e.__dashjs_factory_name = "BufferController";
        var G = y.default.getClassFactory(e);
        G.BUFFER_LOADED = D, G.BUFFER_EMPTY = E, c.default = G, b.exports = c.default
    }, {10: 10, 101: 101, 13: 13, 146: 146, 152: 152, 60: 60, 66: 66, 68: 68, 70: 70, 8: 8, 9: 9, 99: 99}],
    64: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a() {
                D = !1, u = {}, v = {}, w = {}, x = null, y = 100, z = y / 1e3, C = (0, g.default)(q).getInstance()
            }

            function b() {
                null !== x && D && (clearInterval(x), x = null, D = !1)
            }

            function c() {
                r("Start Event Controller"), D || isNaN(y) || (D = !0, x = setInterval(h, y))
            }

            function d(a) {
                if (u = {}, a) for (var b = 0; b < a.length; b++) {
                    var c = a[b];
                    u[c.id] = c, r("Add inline event with id " + c.id)
                }
                r("Added " + a.length + " inline events")
            }

            function e(a) {
                for (var b = 0; b < a.length; b++) {
                    var c = a[b];
                    c.id in v ? r("Repeated event with id " + c.id) : (v[c.id] = c, r("Add inband event with id " + c.id))
                }
            }

            function f() {
                if (w) for (var a = C.getTime(), b = Object.keys(w), c = 0; c < b.length; c++) {
                    var d = b[c], e = w[d];
                    null !== e && (e.duration + e.presentationTime) / e.eventStream.timescale < a && (r("Remove Event " + d + " at time " + a), e = null, delete w[d])
                }
            }

            function h() {
                j(v), j(u), f()
            }

            function i() {
                var a = A.getValue(), b = a.url;
                a.hasOwnProperty("Location") && (b = a.Location), r("Refresh manifest @ " + b), B.getManifestLoader().load(b)
            }

            function j(a) {
                var b, c = C.getTime();
                if (a) for (var d = Object.keys(a), e = 0; e < d.length; e++) {
                    var f = d[e], g = a[f];
                    void 0 !== g && (b = g.presentationTime / g.eventStream.timescale, (0 === b || b <= c && b + z > c) && (r("Start Event " + f + " at " + c), g.duration > 0 && (w[f] = g), g.eventStream.schemeIdUri == o && g.eventStream.value == p ? i() : s.trigger(g.eventStream.schemeIdUri, {event: g}), delete a[f]))
                }
            }

            function l(a) {
                a && (a.manifestModel && (A = a.manifestModel), a.manifestUpdater && (B = a.manifestUpdater))
            }

            function n() {
                b(), u = null, v = null, w = null, C = null
            }

            var o = "urn:mpeg:dash:event:2012", p = 1, q = this.context, r = (0, k.default)(q).getInstance().log,
                s = (0, m.default)(q).getInstance(), t = void 0, u = void 0, v = void 0, w = void 0, x = void 0,
                y = void 0, z = void 0, A = void 0, B = void 0, C = void 0, D = void 0;
            return t = {
                initialize: a,
                addInlineEvents: d,
                addInbandEvents: e,
                clear: b,
                start: c,
                setConfig: l,
                reset: n
            }
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(68), g = d(f), h = a(10), i = d(h), j = a(8), k = d(j), l = a(9), m = d(l);
        e.__dashjs_factory_name = "EventController", c.default = i.default.getSingletonFactory(e), b.exports = c.default
    }, {10: 10, 68: 68, 8: 8, 9: 9}],
    65: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a() {
                r = {}, o.on(p.default.FRAGMENT_LOADING_COMPLETED, i, q)
            }

            function b(a) {
                var b = null;
                return null !== a && void 0 !== a && a.byteLength > 0 && (b = new Uint8Array(a)), b
            }

            function c(a) {
                var b = r[a];
                return b || (b = (0, j.default)(k).create({metricsModel: (0, l.default)(k).getInstance()}), r[a] = b), b
            }

            function d(a) {
                return a && a.type && a.type === f.HTTPRequest.INIT_SEGMENT_TYPE
            }

            function e() {
                o.off(p.default.FRAGMENT_LOADING_COMPLETED, i, this);
                for (var a in r) r[a].reset();
                r = {}
            }

            function g(a, b, c) {
                var d = new h.default;
                return d.streamId = c, d.mediaInfo = b.mediaInfo, d.segmentType = b.type, d.start = b.startTime, d.duration = b.duration, d.end = d.start + d.duration, d.bytes = a, d.index = b.index, d.quality = b.quality, d
            }

            function i(a) {
                if (r[a.request.mediaType] === a.sender) {
                    var b = a.sender.getScheduleController(), c = a.request, e = a.response, f = d(c),
                        h = b.getStreamProcessor().getStreamInfo().id;
                    if (!e) return void m("No " + c.mediaType + " bytes to push.");
                    var i = g(e, c, h);
                    o.trigger(f ? p.default.INIT_FRAGMENT_LOADED : p.default.MEDIA_FRAGMENT_LOADED, {
                        chunk: i,
                        fragmentModel: a.sender
                    })
                }
            }

            var k = this.context, m = (0, t.default)(k).getInstance().log, o = (0, n.default)(k).getInstance(),
                q = void 0, r = void 0;
            return q = {process: b, getModel: c, isInitializationRequest: d, reset: e}, a(), q
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(179), g = a(161), h = d(g), i = a(99), j = d(i), k = a(102), l = d(k), m = a(9), n = d(m), o = a(13),
            p = d(o), q = a(10), r = d(q), s = a(8), t = d(s);
        e.__dashjs_factory_name = "FragmentController", c.default = r.default.getClassFactory(e), b.exports = c.default
    }, {10: 10, 102: 102, 13: 13, 161: 161, 179: 179, 8: 8, 9: 9, 99: 99}],
    66: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a() {
                N = {}, E(), D()
            }

            function b(a, b) {
                var c = k(a), e = d(a, b), f = [];
                return "fragmentedText" === a ? void h(e[0]) : (c || (c = L.getSavedMediaSettings(a), j(a, c)), void(e && 0 !== e.length && (c && e.forEach(function (a) {
                    C(c, a) && f.push(a)
                }), h(0 === f.length ? F(e) : f.length > 1 ? F(f) : f[0]))))
            }

            function c(a) {
                var b = a ? a.type : null, c = a ? a.streamInfo.id : null, d = k(b);
                return !(!a || !x(b)) && (N[c] = N[c] || G(), !(N[c][b].list.indexOf(a) >= 0) && (N[c][b].list.push(a), d && C(d, a) && !e(b, a.streamInfo) && h(a), !0))
            }

            function d(a, b) {
                if (!a || !b) return [];
                var c = b.id;
                return N[c] && N[c][a] ? N[c][a].list : []
            }

            function e(a, b) {
                return !a || !b || b && !N[b.id] ? null : N[b.id][a].current
            }

            function f(a) {
                var b = a.type, c = a.streamInfo.id;
                return N[c] && N[c][b] && y(N[c][b].current, a)
            }

            function h(a) {
                if (a) {
                    var b = a.type, c = a.streamInfo, d = c.id, f = e(b, c);
                    if (N[d] && N[d][b] && (!f || !y(a, f))) {
                        N[d][b].current = a, f && J.trigger(g.default.CURRENT_TRACK_CHANGED, {
                            oldMediaInfo: f,
                            newMediaInfo: a,
                            switchMode: Q[b]
                        });
                        var h = B(a);
                        h && N[d][b].storeLastSettings && (h.roles && (h.role = h.roles[0], delete h.roles), h.accessibility && (h.accessibility = h.accessibility[0]), h.audioChannelConfiguration && (h.audioChannelConfiguration = h.audioChannelConfiguration[0]), L.setSavedMediaSettings(b, h))
                    }
                }
            }

            function j(a, b) {
                a && b && (O[a] = b)
            }

            function k(a) {
                return a ? O[a] : null
            }

            function l(a, b) {
                var c = S.indexOf(b) !== -1;
                return c ? void(Q[a] = b) : void I("track switch mode is not supported: " + b)
            }

            function n(a) {
                return Q[a]
            }

            function p(a) {
                var b = T.indexOf(a) !== -1;
                return b ? void(P = a) : void I("track selection mode is not supported: " + a)
            }

            function w() {
                return P || v
            }

            function x(a) {
                return "audio" === a || "video" === a || "text" === a || "fragmentedText" === a
            }

            function y(a, b) {
                var c = a.id === b.id, d = a.viewpoint === b.viewpoint, e = a.lang === b.lang,
                    f = a.roles.toString() === b.roles.toString(),
                    g = a.accessibility.toString() === b.accessibility.toString(),
                    h = a.audioChannelConfiguration.toString() === b.audioChannelConfiguration.toString();
                return c && d && e && f && g && h
            }

            function z(a) {
                a && a.errHandler && (R = a.errHandler)
            }

            function A() {
                a(), K.resetEmbedded()
            }

            function B(a) {
                var b = {
                        lang: a.lang,
                        viewpoint: a.viewpoint,
                        roles: a.roles,
                        accessibility: a.accessibility,
                        audioChannelConfiguration: a.audioChannelConfiguration
                    },
                    c = b.lang || b.viewpoint || b.role && b.role.length > 0 || b.accessibility && b.accessibility.length > 0 || b.audioChannelConfiguration && b.audioChannelConfiguration.length > 0;
                return c ? b : null
            }

            function C(a, b) {
                var c = !a.lang || a.lang === b.lang, d = !a.viewpoint || a.viewpoint === b.viewpoint,
                    e = !a.role || !!b.roles.filter(function (b) {
                        return b === a.role
                    })[0], f = !a.accessibility || !!b.accessibility.filter(function (b) {
                        return b === a.accessibility
                    })[0], g = !a.audioChannelConfiguration || !!b.audioChannelConfiguration.filter(function (b) {
                        return b === a.audioChannelConfiguration
                    })[0];
                return c && d && e && f && g
            }

            function D() {
                Q = {audio: s, video: r}
            }

            function E() {
                O = {audio: null, video: null}
            }

            function F(a) {
                var b = w(), c = [], d = function (a) {
                    var b, c = 0, d = [];
                    return a.forEach(function (a) {
                        b = Math.max.apply(Math, a.bitrateList.map(function (a) {
                            return a.bandwidth
                        })), b > c ? (c = b, d = [a]) : b === c && d.push(a)
                    }), d
                }, e = function (a) {
                    var b, c = 0, d = [];
                    return a.forEach(function (a) {
                        b = a.representationCount, b > c ? (c = b, d = [a]) : b === c && d.push(a)
                    }), d
                };
                switch (b) {
                    case t:
                        c = d(a), c.length > 1 && (c = e(c));
                        break;
                    case u:
                        c = e(a), c.length > 1 && (c = d(a));
                        break;
                    default:
                        I("track selection mode is not supported: " + b)
                }
                return c[0]
            }

            function G() {
                return {
                    audio: {list: [], storeLastSettings: !0, current: null},
                    video: {list: [], storeLastSettings: !0, current: null},
                    text: {list: [], storeLastSettings: !0, current: null},
                    fragmentedText: {list: [], storeLastSettings: !0, current: null}
                }
            }

            var H = this.context, I = (0, m.default)(H).getInstance().log, J = (0, i.default)(H).getInstance(),
                K = (0, o.default)(H).getInstance(), L = (0, q.default)(H).getInstance(), M = void 0, N = void 0,
                O = void 0, P = void 0, Q = void 0, R = void 0, S = [s, r], T = [t, u];
            return M = {
                initialize: a,
                checkInitialMediaSettingsForType: b,
                addTrack: c,
                getTracksFor: d,
                getCurrentTrackFor: e,
                isCurrentTrack: f,
                setTrack: h,
                setInitialSettings: j,
                getInitialSettings: k,
                setSwitchMode: l,
                getSwitchMode: n,
                setSelectionModeForInitialTrack: p,
                getSelectionModeForInitialTrack: w,
                isMultiTrackSupportedByType: x,
                isTracksEqual: y,
                setConfig: z,
                reset: A
            }
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(13), g = d(f), h = a(9), i = d(h), j = a(10), k = d(j), l = a(8), m = d(l), n = a(56), o = d(n),
            p = a(149), q = d(p), r = "neverReplace", s = "alwaysReplace", t = "highestBitrate", u = "widestRange",
            v = t;
        e.__dashjs_factory_name = "MediaController";
        var w = k.default.getSingletonFactory(e);
        w.TRACK_SWITCH_MODE_NEVER_REPLACE = r, w.TRACK_SWITCH_MODE_ALWAYS_REPLACE = s, w.TRACK_SELECTION_MODE_HIGHEST_BITRATE = t, w.TRACK_SELECTION_MODE_WIDEST_RANGE = u, w.DEFAULT_INIT_TRACK_SELECTION_MODE = v, c.default = w, b.exports = c.default
    }, {10: 10, 13: 13, 149: 149, 56: 56, 8: 8, 9: 9}],
    67: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a() {
                var a = "WebKitMediaSource" in window, b = "MediaSource" in window;
                return b ? new MediaSource : a ? new WebKitMediaSource : null
            }

            function b(a, b) {
                var c = window.URL.createObjectURL(a);
                return b.setSource(c), c
            }

            function c(a) {
                a.setSource(null)
            }

            function d(a, b) {
                return a.duration != b && (a.duration = b), a.duration
            }

            function e(a) {
                var b = a.sourceBuffers, c = b.length, d = 0;
                if ("open" === a.readyState) {
                    for (d; d < c; d++) {
                        if (b[d].updating) return;
                        if (0 === b[d].buffered.length) return
                    }
                    a.endOfStream()
                }
            }

            var f = void 0;
            return f = {
                createMediaSource: a,
                attachMediaSource: b,
                detachMediaSource: c,
                setDuration: d,
                signalEndOfStream: e
            }
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(10), g = d(f);
        e.__dashjs_factory_name = "MediaSourceController", c.default = g.default.getSingletonFactory(e), b.exports = c.default
    }, {10: 10}],
    68: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a() {
                ma = 0, na = NaN, oa = null, ra = null, ta = !1, pa = {}, sa = (0, k.default)(_).getInstance()
            }

            function b(a) {
                qa = a, da = la.getElement(), Z(), ra = qa.manifestInfo.isDynamic, na = qa.start, ba.on(o.default.DATA_UPDATE_COMPLETED, I, this), ba.on(o.default.LIVE_EDGE_SEARCH_COMPLETED, J, this), ba.on(o.default.BYTES_APPENDED, X, this), ba.on(o.default.BUFFER_LEVEL_STATE_CHANGED, Y, this), ba.on(o.default.PERIOD_SWITCH_STARTED, c, this), ta && (ta = !1, j())
            }

            function c(a) {
                a.fromStreamInfo && pa[a.fromStreamInfo.id] && delete pa[a.fromStreamInfo.id]
            }

            function d() {
                return C(!0) + qa.duration - r()
            }

            function e() {
                return r() > 0
            }

            function f() {
                return qa.id
            }

            function h() {
                return qa.duration
            }

            function j() {
                if (da) {
                    da.autoplay = !0;
                    var a = da.play();
                    a && "undefined" != typeof Promise && a instanceof Promise && a.catch(function (a) {
                        "NotAllowedError" === a.name && ba.trigger(o.default.PLAYBACK_NOT_ALLOWED), aa("Caught pending play exception - continuing (" + a + ")")
                    })
                } else ta = !0
            }

            function l() {
                if (da) return da.paused
            }

            function n() {
                da && (da.pause(), da.autoplay = !1)
            }

            function p() {
                if (da) return da.seeking
            }

            function q(a) {
                la && (aa("Requesting seek to time: " + a), la.setCurrentTime(a))
            }

            function r() {
                if (da) return da.currentTime
            }

            function t() {
                if (da) return da.playbackRate
            }

            function u() {
                if (da) return da.played
            }

            function v() {
                if (da) return da.ended
            }

            function w() {
                return ra
            }

            function x(a) {
                na = a
            }

            function y() {
                return na
            }

            function z(a, b) {
                var c = ja.getMpd(ia.getValue()), d = void 0, e = 10;
                d = sa.getUseSuggestedPresentationDelay() && c.hasOwnProperty("suggestedPresentationDelay") ? c.suggestedPresentationDelay : sa.getLiveDelay() ? sa.getLiveDelay() : isNaN(a) ? 2 * qa.manifestInfo.minBufferTime : a * sa.getLiveDelayFragmentCount();
                var f = Math.max(b - e, b / 2);
                return Math.min(d, f)
            }

            function A() {
                la && da && (ba.off(o.default.DATA_UPDATE_COMPLETED, I, this), ba.off(o.default.BUFFER_LEVEL_STATE_CHANGED, Y, this), ba.off(o.default.LIVE_EDGE_SEARCH_COMPLETED, J, this), ba.off(o.default.BYTES_APPENDED, X, this), F(), $()), la = null, qa = null, da = null, ra = null, a()
            }

            function B(a) {
                a && (a.streamController && (ea = a.streamController), a.timelineConverter && (fa = a.timelineConverter), a.metricsModel && (ga = a.metricsModel), a.dashMetrics && (ha = a.dashMetrics), a.manifestModel && (ia = a.manifestModel), a.dashManifestModel && (ja = a.dashManifestModel), a.adapter && (ka = a.adapter), a.videoModel && (la = a.videoModel))
            }

            function C(a) {
                var b = void 0, c = (0, i.default)(_).getInstance().getURIFragmentData(), d = parseInt(c.s, 10),
                    e = parseInt(c.t, 10), f = NaN;
                if (a || (f = isNaN(d) ? e : d), ra) !isNaN(f) && f > 1262304e3 && (b = f - qa.manifestInfo.availableFrom.getTime() / 1e3, (b > na || b < na - qa.manifestInfo.DVRWindowSize) && (b = null)), b = b || na; else if (!isNaN(f) && f < Math.max(qa.manifestInfo.duration, qa.duration) && f >= 0) b = f; else {
                    var g = pa[qa.id];
                    void 0 === g && (g = ea.getActiveStreamCommonEarliestTime()), b = Math.max(g, qa.start)
                }
                return b
            }

            function D(a) {
                var b, c = ga.getReadOnlyMetricsFor("video") || ga.getReadOnlyMetricsFor("audio"),
                    d = ha.getCurrentDVRInfo(c), e = d ? d.range : null;
                return e ? a >= e.start && a <= e.end ? a : b = Math.max(e.end - 2 * qa.manifestInfo.minBufferTime, e.start) : NaN
            }

            function E() {
                if (null === oa) {
                    var a = function () {
                        W()
                    };
                    oa = setInterval(a, sa.getWallclockTimeUpdateInterval())
                }
            }

            function F() {
                clearInterval(oa), oa = null
            }

            function G() {
                var a = C(!1);
                a > 0 && (q(a), aa("Starting playback at offset: " + a))
            }

            function H() {
                if (!l() && ra && 0 !== da.readyState) {
                    var a = r(), b = D(a), c = !isNaN(b) && b !== a;
                    c && q(b)
                }
            }

            function I(a) {
                if (!a.error) {
                    var b = ka.convertDataToTrack(ia.getValue(), a.currentRepresentation), c = b.mediaInfo.streamInfo;
                    qa.id === c.id && (qa = c, H())
                }
            }

            function J(a) {
                a.error || 0 === da.readyState || G()
            }

            function K() {
                ba.trigger(o.default.CAN_PLAY)
            }

            function L() {
                aa("Native video element event: play"), H(), E(), ba.trigger(o.default.PLAYBACK_STARTED, {startTime: r()})
            }

            function M() {
                aa("Native video element event: playing"), ba.trigger(o.default.PLAYBACK_PLAYING, {playingTime: r()})
            }

            function N() {
                aa("Native video element event: pause"), ba.trigger(o.default.PLAYBACK_PAUSED, {ended: v()})
            }

            function O() {
                var a = r();
                aa("Seeking to: " + a), E(), ba.trigger(o.default.PLAYBACK_SEEKING, {seekTime: a})
            }

            function P() {
                aa("Native video element event: seeked"), ba.trigger(o.default.PLAYBACK_SEEKED)
            }

            function Q() {
                var a = r();
                a !== ma && (ma = a, ba.trigger(o.default.PLAYBACK_TIME_UPDATED, {timeToEnd: d(), time: a}))
            }

            function R() {
                ba.trigger(o.default.PLAYBACK_PROGRESS)
            }

            function S() {
                var a = t();
                aa("Native video element event: ratechange: ", a), ba.trigger(o.default.PLAYBACK_RATE_CHANGED, {playbackRate: a})
            }

            function T() {
                aa("Native video element event: loadedmetadata"), (!ra && qa.isFirst || fa.isTimeSyncCompleted()) && G(), ba.trigger(o.default.PLAYBACK_METADATA_LOADED), E()
            }

            function U() {
                aa("Native video element event: ended"), n(), F(), ba.trigger(o.default.PLAYBACK_ENDED)
            }

            function V(a) {
                var b = a.target || a.srcElement;
                ba.trigger(o.default.PLAYBACK_ERROR, {error: b.error})
            }

            function W() {
                ba.trigger(o.default.WALLCLOCK_TIME_UPDATED, {isDynamic: ra, time: new Date})
            }

            function X(a) {
                var b = a.bufferedRanges;
                if (b && b.length) {
                    var c = Math.max(b.start(0), qa.start), d = void 0 === pa[qa.id] ? c : Math.max(pa[qa.id], c);
                    d !== pa[qa.id] && (!ra && C(!0) < d && r() < d && q(d), pa[qa.id] = d)
                }
            }

            function Y(a) {
                a.streamInfo.id === qa.id && la.setStallState(a.mediaType, a.state === g.default.BUFFER_EMPTY)
            }

            function Z() {
                da.addEventListener("canplay", K), da.addEventListener("play", L), da.addEventListener("playing", M), da.addEventListener("pause", N), da.addEventListener("error", V), da.addEventListener("seeking", O), da.addEventListener("seeked", P), da.addEventListener("timeupdate", Q), da.addEventListener("progress", R), da.addEventListener("ratechange", S), da.addEventListener("loadedmetadata", T), da.addEventListener("ended", U)
            }

            function $() {
                da.removeEventListener("canplay", K), da.removeEventListener("play", L), da.removeEventListener("playing", M), da.removeEventListener("pause", N), da.removeEventListener("error", V), da.removeEventListener("seeking", O), da.removeEventListener("seeked", P), da.removeEventListener("timeupdate", Q), da.removeEventListener("progress", R), da.removeEventListener("ratechange", S), da.removeEventListener("loadedmetadata", T), da.removeEventListener("ended", U)
            }

            var _ = this.context, aa = (0, s.default)(_).getInstance().log, ba = (0, m.default)(_).getInstance(),
                ca = void 0, da = void 0, ea = void 0, fa = void 0, ga = void 0, ha = void 0, ia = void 0, ja = void 0,
                ka = void 0, la = void 0, ma = void 0, na = void 0, oa = void 0, pa = void 0, qa = void 0, ra = void 0,
                sa = void 0, ta = void 0;
            return ca = {
                initialize: b,
                setConfig: B,
                getStreamStartTime: C,
                getTimeToStreamEnd: d,
                isPlaybackStarted: e,
                getStreamId: f,
                getStreamDuration: h,
                getTime: r,
                getPlaybackRate: t,
                getPlayedRanges: u,
                getEnded: v,
                getIsDynamic: w,
                setLiveStartTime: x,
                getLiveStartTime: y,
                computeLiveDelay: z,
                play: j,
                isPaused: l,
                pause: n,
                isSeeking: p,
                seek: q,
                reset: A
            }, a(), ca
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(63), g = d(f), h = a(103), i = d(h), j = a(101), k = d(j), l = a(9), m = d(l), n = a(13), o = d(n),
            p = a(10), q = d(p), r = a(8), s = d(r);
        e.__dashjs_factory_name = "PlaybackController", c.default = q.default.getSingletonFactory(e), b.exports = c.default
    }, {10: 10, 101: 101, 103: 103, 13: 13, 63: 63, 8: 8, 9: 9}],
    69: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a) {
            function b() {
                wa = !0, Ra = NaN, Qa = NaN, Sa = [], xa = !1, ya = null, za = null, Aa = !0, Ba = !1, Ca = 0, Ea = NaN
            }

            function c(a, b) {
                ra = a, Ia = b, La = (0, F.default)(ga).getInstance(), Fa = (0, h.default)(ga).getInstance(), Ga = (0, n.default)(ga).getInstance(), Ha = (0, j.default)(ga).getInstance(), Ja = (0, N.default)(ga).getInstance(), Ka = Ia.getFragmentController(), Ma = Ia.getBufferController(), ta = Ka.getModel(ra), ta.setScheduleController(this), ua = Ia.isDynamic(), Pa = pa.getScheduleWhilePaused(), Na = (0, p.default)(ga).create({
                    dashMetrics: (0, z.default)(ga).getInstance(),
                    metricsModel: (0, v.default)(ga).getInstance(),
                    textSourceBuffer: (0, t.default)(ga).getInstance()
                }), Oa = (0, r.default)(ga).create({
                    adapter: (0, B.default)(ga).getInstance(),
                    sourceBufferController: (0, D.default)(ga).getInstance(),
                    textSourceBuffer: (0, t.default)(ga).getInstance()
                }), na.getIsTextTrack(ra) && ia.on(J.default.TIMED_TEXT_REQUESTED, R, this), ia.on(J.default.LIVE_EDGE_SEARCH_COMPLETED, V, this), ia.on(J.default.QUALITY_CHANGE_REQUESTED, s, this), ia.on(J.default.DATA_UPDATE_STARTED, K, this), ia.on(J.default.DATA_UPDATE_COMPLETED, w, this), ia.on(J.default.FRAGMENT_LOADING_COMPLETED, C, this), ia.on(J.default.STREAM_COMPLETED, A, this), ia.on(J.default.STREAM_INITIALIZED, y, this), ia.on(J.default.BUFFER_LEVEL_STATE_CHANGED, M, this), ia.on(J.default.BUFFER_CLEARED, L, this), ia.on(J.default.BYTES_APPENDED, G, this), ia.on(J.default.INIT_REQUESTED, m, this), ia.on(J.default.QUOTA_EXCEEDED, O, this), ia.on(J.default.BUFFER_LEVEL_STATE_CHANGED, M, this), ia.on(J.default.PLAYBACK_STARTED, S, this), ia.on(J.default.PLAYBACK_SEEKING, T, this), ia.on(J.default.PLAYBACK_RATE_CHANGED, U, this), ia.on(J.default.PLAYBACK_TIME_UPDATED, E, this), ia.on(J.default.URL_RESOLUTION_FAILED, Q, this), ia.on(J.default.FRAGMENT_LOADING_ABANDONED, I, this)
            }

            function d() {
                sa && (ea(), xa = !1, wa ? o(va.quality) : k(0), wa && (wa = !1), ha("Schedule controller starting for " + ra))
            }

            function e() {
                xa || (xa = !0, clearTimeout(Da), ha("Schedule controller stopping for " + ra))
            }

            function g() {
                if (!(xa || Ba || !Ma || Fa.isPaused() && !Pa)) {
                    i();
                    var a = Sa.length > 0, b = Na.execute(Ia, ra, Ja.isVideoTrackPresent());
                    if (b || a) {
                        var c = function () {
                            if (va.quality !== Ra) Ra = va.quality, Ma.switchInitData(Ia.getStreamInfo().id, va.quality); else {
                                var a = Oa.execute(Ia, Sa.shift());
                                a ? ta.executeRequest(a) : (Ba = !1, k(250))
                            }
                        };
                        Ba = !0, a ? c() : Ha.getPlaybackQuality(Ia, c)
                    } else k(500)
                }
            }

            function i() {
                var a = 1.5 * va.fragmentDuration, b = ta.getRequests({
                    state: x.default.FRAGMENT_MODEL_EXECUTED,
                    time: Fa.getTime() + a,
                    threshold: 0
                })[0];
                b && Sa.indexOf(b) === -1 && !na.getIsTextTrack(ra) && (!Ga.isCurrentTrack(b.mediaInfo) || pa.getFastSwitchEnabled() && b.quality < va.quality && Ma.getBufferLevel() >= a && Ha.getAbandonmentStateFor(ra) !== j.default.ABANDON_LOAD ? (q(b), ha("Reloading outdated fragment at index: ", b.index)) : b.quality > va.quality && X(Fa.getTime() + Ma.getBufferLevel()))
            }

            function k(a) {
                clearTimeout(Da), Da = setTimeout(g, a)
            }

            function m(a) {
                a.sender.getStreamProcessor() === Ia && o(va.quality)
            }

            function o(a) {
                Ra = a;
                var b = la.getInitRequest(Ia, a);
                b && (Ba = !0, ta.executeRequest(b))
            }

            function q(a) {
                Sa.push(a)
            }

            function s(a) {
                if (ra === a.mediaType && Ia.getStreamInfo().id === a.streamInfo.id) {
                    if (va = Ia.getRepresentationInfoForQuality(a.newQuality), null === va || void 0 === va) throw new Error("Unexpected error! - currentRepresentationInfo is null or undefined");
                    da(new Date, f.PlayListTrace.REPRESENTATION_SWITCH_STOP_REASON), ea()
                }
            }

            function u(a) {
                var b = ta.getRequests({state: x.default.FRAGMENT_MODEL_EXECUTED, time: Fa.getTime(), threshold: 0})[0];
                b && Fa.getTime() >= b.startTime && (b.quality !== Qa && a && ia.trigger(J.default.QUALITY_CHANGE_RENDERED, {
                    mediaType: ra,
                    oldQuality: Qa,
                    newQuality: b.quality
                }), Qa = b.quality)
            }

            function w(a) {
                a.error || a.sender.getStreamProcessor() !== Ia || (va = la.convertDataToTrack(ka.getValue(), a.currentRepresentation))
            }

            function y(a) {
                a.error || Ia.getStreamInfo().id !== a.streamInfo.id || (va = Ia.getCurrentRepresentationInfo(), ua && null === La.getLiveEdge() || (sa = !0), xa && d())
            }

            function A(a) {
                a.fragmentModel === ta && (e(), Ba = !1, ha("Stream is complete"))
            }

            function C(a) {
                a.sender === ta && (na.getIsTextTrack(ra) && (Ba = !1), a.error && a.serviceLocation && !xa && q(a.request))
            }

            function E() {
                u(!0)
            }

            function G(a) {
                a.sender.getStreamProcessor() === Ia && (Ba = !1, k(0))
            }

            function I(a) {
                a.streamProcessor === Ia && (q(a.request), Ba = !1, k(0))
            }

            function K(a) {
                a.sender.getStreamProcessor() === Ia && e()
            }

            function L(a) {
                a.sender.getStreamProcessor() === Ia && (ta.removeExecutedRequestsBeforeTime(a.to), a.hasEnoughSpaceToAppend && !Ma.getIsBufferingCompleted() && xa && d())
            }

            function M(a) {
                a.sender.getStreamProcessor() !== Ia || a.state !== l.default.BUFFER_EMPTY || Fa.isSeeking() || (ha("Buffer is empty! Stalling!"), da(new Date, f.PlayListTrace.REBUFFERING_REASON))
            }

            function O(a) {
                a.sender.getStreamProcessor() === Ia && e()
            }

            function Q() {
                ta.abortRequests(), e()
            }

            function R(a) {
                a.sender.getStreamProcessor() === Ia && o(a.index)
            }

            function S() {
                xa && d()
            }

            function T(a) {
                Ea = a.seekTime, Z(0), xa && d();
                var b = ma.getCurrentManifestUpdate(ja.getMetricsFor("stream")),
                    c = va.DVRWindow ? va.DVRWindow.end - Fa.getTime() : NaN;
                ja.updateManifestUpdateInfo(b, {latency: c})
            }

            function U(a) {
                za && (za.playbackspeed = a.playbackRate.toString())
            }

            function V(a) {
                if (!a.error) {
                    var b = va.mediaInfo.streamInfo.manifestInfo.DVRWindowSize / 2,
                        c = a.liveEdge - Fa.computeLiveDelay(va.fragmentDuration, b),
                        e = ma.getCurrentManifestUpdate(ja.getMetricsFor("stream")), f = Fa.getLiveStartTime(),
                        g = la.getFragmentRequestForTime(Ia, va, c, {ignoreIsFinished: !0});
                    Ea = f, (isNaN(f) || g.startTime > f) && (Fa.setLiveStartTime(g.startTime), Ea = g.startTime), ja.updateManifestUpdateInfo(e, {
                        currentTime: Ea,
                        presentationStartTime: a.liveEdge,
                        latency: a.liveEdge - Ea,
                        clientTimeOffset: oa.getClientTimeOffset()
                    }), sa = !0, xa && d()
                }
            }

            function W() {
                return Ea
            }

            function X(a) {
                Ea = a
            }

            function Y() {
                return ta
            }

            function Z(a) {
                Ca = a
            }

            function $() {
                return Ca
            }

            function _() {
                return Ia
            }

            function aa() {
                return Na.getBufferTarget(Ia, ra, Ja.isVideoTrackPresent())
            }

            function ba(a) {
                ya = a
            }

            function ca(a, b) {
                da(a, b), ya = null
            }

            function da(a, b) {
                if (ya && Aa === !1) {
                    var c = za.start, d = a.getTime() - c.getTime();
                    za.duration = d, za.stopreason = b, ya.trace.push(za), Aa = !0
                }
            }

            function ea() {
                ya && Aa === !0 && va && (Aa = !1, za = new f.PlayListTrace, za.representationid = va.id, za.start = new Date, za.mstart = 1e3 * Fa.getTime(), za.playbackspeed = Fa.getPlaybackRate().toString())
            }

            function fa() {
                ia.off(J.default.LIVE_EDGE_SEARCH_COMPLETED, V, this), ia.off(J.default.DATA_UPDATE_STARTED, K, this), ia.off(J.default.DATA_UPDATE_COMPLETED, w, this), ia.off(J.default.BUFFER_LEVEL_STATE_CHANGED, M, this), ia.off(J.default.QUALITY_CHANGE_REQUESTED, s, this), ia.off(J.default.FRAGMENT_LOADING_COMPLETED, C, this), ia.off(J.default.STREAM_COMPLETED, A, this), ia.off(J.default.STREAM_INITIALIZED, y, this), ia.off(J.default.QUOTA_EXCEEDED, O, this), ia.off(J.default.BYTES_APPENDED, G, this), ia.off(J.default.BUFFER_CLEARED, L, this), ia.off(J.default.INIT_REQUESTED, m, this), ia.off(J.default.PLAYBACK_RATE_CHANGED, U, this), ia.off(J.default.PLAYBACK_SEEKING, T, this), ia.off(J.default.PLAYBACK_STARTED, S, this), ia.off(J.default.PLAYBACK_TIME_UPDATED, E, this), ia.off(J.default.URL_RESOLUTION_FAILED, Q, this), ia.off(J.default.FRAGMENT_LOADING_ABANDONED, I, this), na.getIsTextTrack(ra) && ia.off(J.default.TIMED_TEXT_REQUESTED, R, this), e(), u(!1), Ba = !1, Ca = 0, Ea = NaN, Fa = null, ya = null
            }

            var ga = this.context, ha = (0, P.default)(ga).getInstance().log, ia = (0, H.default)(ga).getInstance(),
                ja = a.metricsModel, ka = a.manifestModel, la = a.adapter, ma = a.dashMetrics, na = a.dashManifestModel,
                oa = a.timelineConverter, pa = a.mediaPlayerModel, qa = void 0, ra = void 0, sa = void 0, ta = void 0,
                ua = void 0, va = void 0, wa = void 0, xa = void 0, ya = void 0, za = void 0, Aa = void 0, Ba = void 0,
                Ca = void 0, Da = void 0, Ea = void 0, Fa = void 0, Ga = void 0, Ha = void 0, Ia = void 0, Ja = void 0,
                Ka = void 0, La = void 0, Ma = void 0, Na = void 0, Oa = void 0, Pa = void 0, Qa = void 0, Ra = void 0,
                Sa = void 0;
            return qa = {
                initialize: c,
                getStreamProcessor: _,
                getSeekTarget: W,
                setSeekTarget: X,
                getFragmentModel: Y,
                setTimeToLoadDelay: Z,
                getTimeToLoadDelay: $,
                replaceRequest: q,
                start: d,
                stop: e,
                reset: fa,
                setPlayList: ba,
                getBufferTarget: aa,
                finalisePlayList: ca
            }, b(), qa
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(181), g = a(68), h = d(g), i = a(60), j = d(i), k = a(63), l = d(k), m = a(66), n = d(m), o = a(140),
            p = d(o), q = a(141), r = d(q), s = a(56), t = d(s), u = a(102), v = d(u), w = a(99), x = d(w), y = a(17),
            z = d(y), A = a(15), B = d(A), C = a(70), D = d(C), E = a(154), F = d(E), G = a(9), H = d(G), I = a(13),
            J = d(I), K = a(10), L = d(K), M = a(71), N = d(M), O = a(8), P = d(O);
        e.__dashjs_factory_name = "ScheduleController", c.default = L.default.getClassFactory(e), b.exports = c.default
    }, {
        10: 10,
        102: 102,
        13: 13,
        140: 140,
        141: 141,
        15: 15,
        154: 154,
        17: 17,
        181: 181,
        56: 56,
        60: 60,
        63: 63,
        66: 66,
        68: 68,
        70: 70,
        71: 71,
        8: 8,
        9: 9,
        99: 99
    }],
    70: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a(a, b) {
                var c = b.codec, d = null;
                try {
                    if (c.match(/application\/mp4;\s*codecs="(stpp|wvtt)"/i)) throw new y.default("not really supported");
                    d = a.addSourceBuffer(c)
                } catch (e) {
                    if (!b.isText && c.indexOf('codecs="stpp"') === -1 && c.indexOf('codecs="wvtt"') === -1) throw e;
                    d = (0, g.default)(t).getInstance(), d.setConfig({
                        errHandler: (0, m.default)(t).getInstance(),
                        adapter: (0, k.default)(t).getInstance(),
                        dashManifestModel: z,
                        mediaController: (0, i.default)(t).getInstance(),
                        videoModel: (0, w.default)(t).getInstance(),
                        streamController: (0, o.default)(t).getInstance(),
                        textTracks: (0, q.default)(t).getInstance(),
                        VTTParser: (0, s.default)(t).getInstance(),
                        TTMLParser: (0, u.default)(t).getInstance()
                    })
                }
                return d
            }

            function b(a, b) {
                try {
                    a.removeSourceBuffer(b)
                } catch (c) {
                }
            }

            function c(a, b, c) {
                var d, e, f = null, g = 0, h = 0, i = null, j = null, k = 0, l = c || .15;
                try {
                    f = a.buffered
                } catch (m) {
                    return null
                }
                if (null !== f && void 0 !== f) {
                    for (e = 0, d = f.length; e < d; e++) if (g = f.start(e), h = f.end(e), null === i) k = Math.abs(g - b), b >= g && b < h ? (i = g, j = h) : k <= l && (i = g, j = h); else {
                        if (k = g - j, !(k <= l)) break;
                        j = h
                    }
                    if (null !== i) return {start: i, end: j}
                }
                return null
            }

            function d(a) {
                var b = null;
                try {
                    return b = a.buffered
                } catch (c) {
                    return null
                }
            }

            function e(a) {
                var b, c, e = d(a), f = 0;
                if (!e) return f;
                for (c = 0, b = e.length; c < b; c++) f += e.end(c) - e.start(c);
                return f
            }

            function f(a, b, d) {
                var e, f;
                return e = c(a, b, d), f = null === e ? 0 : e.end - b
            }

            function h(a, b) {
                if (!b) return null;
                var c, e, f, g, h, i, j, k, l, m = d(b);
                if (!m) return null;
                for (var n = 0, o = m.length; n < o; n++) {
                    if (k = a.length > n, h = k ? {
                            start: a.start(n),
                            end: a.end(n)
                        } : null, c = m.start(n), e = m.end(n), !h) return l = {start: c, end: e};
                    if (f = h.start === c, g = h.end === e, !f || !g) {
                        if (f) l = {start: h.end, end: e}; else {
                            if (!g) return l = {start: c, end: e};
                            l = {start: c, end: h.start}
                        }
                        return i = a.length > n + 1 ? {
                            start: a.start(n + 1),
                            end: a.end(n + 1)
                        } : null, j = n + 1 < o ? {
                            start: m.start(n + 1),
                            end: m.end(n + 1)
                        } : null, !i || j && j.start === i.start && j.end === i.end || (l.end = i.start), l
                    }
                }
                return null
            }

            function j(a, b) {
                var c = b.bytes, d = "append" in a ? "append" : "appendBuffer" in a ? "appendBuffer" : null,
                    e = "Object" === Object.prototype.toString.call(a).slice(8, -1);
                if (d) try {
                    r(a, function () {
                        e ? a[d](c, b) : a[d](c), r(a, function () {
                            v.trigger(C.default.SOURCEBUFFER_APPEND_COMPLETED, {buffer: a, bytes: c})
                        })
                    })
                } catch (f) {
                    v.trigger(C.default.SOURCEBUFFER_APPEND_COMPLETED, {
                        buffer: a,
                        bytes: c,
                        error: new y.default(f.code, f.message, null)
                    })
                }
            }

            function l(a, b, c, d) {
                try {
                    r(a, function () {
                        b >= 0 && c > b && "ended" !== d.readyState && a.remove(b, c), r(a, function () {
                            v.trigger(C.default.SOURCEBUFFER_REMOVE_COMPLETED, {buffer: a, from: b, to: c})
                        })
                    })
                } catch (e) {
                    v.trigger(C.default.SOURCEBUFFER_REMOVE_COMPLETED, {
                        buffer: a,
                        from: b,
                        to: c,
                        error: new y.default(e.code, e.message, null)
                    })
                }
            }

            function n(a, b) {
                try {
                    "open" === a.readyState ? b.abort() : b.setTextTrack && "ended" === a.readyState && b.abort()
                } catch (c) {
                }
            }

            function p(a) {
                a && a.dashManifestModel && (z = a.dashManifestModel)
            }

            function r(a, b) {
                var c, d = 50, e = function () {
                    a.updating || (clearInterval(c), b())
                }, f = function c() {
                    a.updating || (a.removeEventListener("updateend", c, !1), b())
                };
                if (!a.updating) return void b();
                if ("function" == typeof a.addEventListener) try {
                    a.addEventListener("updateend", f, !1)
                } catch (g) {
                    c = setInterval(e, d)
                } else c = setInterval(e, d)
            }

            var t = this.context, v = (0, A.default)(t).getInstance(), x = void 0, z = void 0;
            return x = {
                append: j,
                remove: l,
                abort: n,
                createSourceBuffer: a,
                removeSourceBuffer: b,
                getBufferRange: c,
                getAllRanges: d,
                getTotalBufferedTime: e,
                getBufferLength: f,
                getRangeDifference: h,
                setConfig: p
            }
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(56), g = d(f), h = a(66), i = d(h), j = a(15), k = d(j), l = a(151), m = d(l), n = a(71), o = d(n),
            p = a(57), q = d(p), r = a(159), s = d(r), t = a(157), u = d(t), v = a(104), w = d(v), x = a(162), y = d(x),
            z = a(9), A = d(z), B = a(13), C = d(B), D = a(10), E = d(D), F = 22;
        e.__dashjs_factory_name = "SourceBufferController";
        var G = E.default.getSingletonFactory(e);
        G.QUOTA_EXCEEDED_ERROR_CODE = F, c.default = G, b.exports = c.default
    }, {
        10: 10,
        104: 104,
        13: 13,
        15: 15,
        151: 151,
        157: 157,
        159: 159,
        162: 162,
        56: 56,
        57: 57,
        66: 66,
        71: 71,
        9: 9
    }],
    71: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a() {
                oa = null, ma = [], ya = (0, u.default)(V).getInstance(), qa = !0, ra = !1, sa = !1, za = !1, Aa = !0, Ba = null, ta = !1, ua = !1
            }

            function b(a, b) {
                qa = a, pa = b, la.initialize(), ja = (0, B.default)(V).getInstance(), $ = (0, k.default)(V).getInstance(), $.setConfig({
                    log: W,
                    manifestModel: aa,
                    dashManifestModel: ba
                }), $.initialize(_), wa = (0, s.default)(V).getInstance(), xa = (0, g.default)(V).getInstance(), xa.setConfig({
                    streamController: Y,
                    timelineConverter: la,
                    metricsModel: da,
                    dashMetrics: ea,
                    manifestModel: aa,
                    dashManifestModel: ba,
                    adapter: ca,
                    videoModel: wa
                }), X.on(o.default.TIME_SYNCHRONIZATION_COMPLETED, I, this), X.on(o.default.PLAYBACK_SEEKING, n, this), X.on(o.default.PLAYBACK_TIME_UPDATED, j, this), X.on(o.default.PLAYBACK_ENDED, l, this), X.on(o.default.PLAYBACK_ERROR, h, this), X.on(o.default.PLAYBACK_STARTED, p, this), X.on(o.default.PLAYBACK_PAUSED, r, this), X.on(o.default.MANIFEST_UPDATED, J, this), X.on(o.default.STREAM_BUFFERING_COMPLETED, t, this)
            }

            function c(a, b) {
                b = b || new Date, Ba && (na && na.getProcessors().forEach(function (c) {
                    var d = c.getScheduleController();
                    d && d.finalisePlayList(b, a)
                }), da.addPlayList(Ba), Ba = null)
            }

            function d(a) {
                Ba = new x.PlayList, Ba.start = new Date, Ba.mstart = 1e3 * xa.getTime(), Ba.starttype = a, na && na.getProcessors().forEach(function (a) {
                    var b = a.getScheduleController();
                    b && b.setPlayList(Ba)
                })
            }

            function e(a, b, c) {
                X.trigger(a, {fromStreamInfo: b ? b.getStreamInfo() : null, toStreamInfo: c.getStreamInfo()})
            }

            function f() {
                na.isActivated() && Aa && 0 === na.getStreamInfo().index && (na.startEventController(), qa && xa.play())
            }

            function h(a) {
                if (a.error) {
                    var b = "";
                    switch (a.error.code) {
                        case 1:
                            b = "MEDIA_ERR_ABORTED";
                            break;
                        case 2:
                            b = "MEDIA_ERR_NETWORK";
                            break;
                        case 3:
                            b = "MEDIA_ERR_DECODE";
                            break;
                        case 4:
                            b = "MEDIA_ERR_SRC_NOT_SUPPORTED";
                            break;
                        case 5:
                            b = "MEDIA_ERR_ENCRYPTED";
                            break;
                        default:
                            b = "UNKNOWN"
                    }
                    ta = !0, a.error.msExtendedCode && (b += " (0x" + (a.error.msExtendedCode >>> 0).toString(16).toUpperCase() + ")"), W("Video Element Error: " + b), a.error && W(a.error), ka.mediaSourceError(b), T()
                }
            }

            function j(a) {
                if (K()) {
                    var b = wa.getPlaybackQuality();
                    b && da.addDroppedFrames("video", b)
                }
                xa.isSeeking() || a.timeToEnd < U && ga.signalEndOfStream(va)
            }

            function l() {
                var a = v();
                a && C(na, a, NaN), c(a ? x.PlayListTrace.END_OF_PERIOD_STOP_REASON : x.PlayListTrace.END_OF_CONTENT_STOP_REASON)
            }

            function n(a) {
                var b = w(a.seekTime);
                b && b !== na ? (c(x.PlayListTrace.END_OF_PERIOD_STOP_REASON), C(na, b, a.seekTime)) : c(x.PlayListTrace.USER_REQUEST_STOP_REASON), d(x.PlayList.SEEK_START_REASON)
            }

            function p() {
                Aa ? (Aa = !1, d(x.PlayList.INITIAL_PLAYOUT_START_REASON)) : za && (za = !1, d(x.PlayList.RESUME_FROM_PAUSE_START_REASON))
            }

            function r(a) {
                a.ended || (za = !0, c(x.PlayListTrace.USER_REQUEST_STOP_REASON))
            }

            function t(a) {
                va && a.streamInfo.isLast && ga.signalEndOfStream(va)
            }

            function v() {
                var a = na.getStreamInfo().start, b = na.getStreamInfo().duration;
                return ma.filter(function (c) {
                    return c.getStreamInfo().start === a + b
                })[0]
            }

            function w(a) {
                var b = 0, c = null, d = ma.length;
                d > 0 && (b += ma[0].getStartTime());
                for (var e = 0; e < d; e++) if (c = ma[e], b += c.getDuration(), a < b) return c;
                return null
            }

            function y(a, b) {
                for (var c = null, d = 0, e = 0, f = null, g = ma.length, h = 0; h < g; h++) {
                    if (c = ma[h], e = c.getStartTime(), f = c.getDuration(), Number.isFinite(e) && (d = e), c.getId() === b) return a - d;
                    Number.isFinite(f) && (d += f)
                }
                return null
            }

            function A() {
                var a = [];
                return na.getProcessors().forEach(function (b) {
                    a.push(b.getIndexHandler().getEarliestTime())
                }), Math.min.apply(Math, a)
            }

            function C(a, b, c) {
                function d() {
                    isNaN(c) ? !function () {
                        var a = xa.getStreamStartTime(!0);
                        na.getProcessors().forEach(function (b) {
                            ca.setIndexHandlerTime(b, a)
                        }), xa.seek(a)
                    }() : xa.seek(c), xa.play(), na.startEventController(), ra = !1, e(o.default.PERIOD_SWITCH_COMPLETED, a, b)
                }

                !ra && a && b && a !== b && (ra = !0, e(o.default.PERIOD_SWITCH_STARTED, a, b), a.deactivate(), na = b, xa.initialize(na.getStreamInfo()), Ca = L(), D(d))
            }

            function D(a) {
                function b() {
                    W("MediaSource is open!"), window.URL.revokeObjectURL(c), va.removeEventListener("sourceopen", b), va.removeEventListener("webkitsourceopen", b), E(), na.activate(va), a && a()
                }

                var c = void 0;
                va ? ga.detachMediaSource(wa) : va = ga.createMediaSource(), va.addEventListener("sourceopen", b, !1), va.addEventListener("webkitsourceopen", b, !1), c = ga.attachMediaSource(va, wa), W("MediaSource attached to element.  Waiting on open...")
            }

            function E() {
                var a, b;
                a = na.getStreamInfo().manifestInfo.duration, b = ga.setDuration(va, a), W("Duration successfully set to: " + b)
            }

            function F() {
                var a, b, c, d, f, g, h, j = aa.getValue(), k = da.getMetricsFor("stream"),
                    l = ea.getCurrentManifestUpdate(k), m = [];
                if (j) {
                    g = ca.getStreamsInfo(j), oa && (X.trigger(o.default.PROTECTION_CREATED, {
                        controller: oa,
                        manifest: j
                    }), oa.setMediaElement(wa.getElement()), pa && oa.setProtectionData(pa));
                    try {
                        if (0 === g.length) throw new Error("There are no streams");
                        for (da.updateManifestUpdateInfo(l, {
                            currentTime: xa.getTime(),
                            buffered: wa.getElement().buffered,
                            presentationStartTime: g[0].start,
                            clientTimeOffset: la.getClientTimeOffset()
                        }), sa = !0, d = 0, b = g.length; d < b; d++) {
                            for (a = g[d], f = 0, c = ma.length; f < c; f++) ma[f].getId() === a.id && (h = ma[f], m.push(h), h.updateData(a));
                            h || (h = (0, i.default)(V).create({
                                manifestModel: aa,
                                manifestUpdater: $,
                                adapter: ca,
                                timelineConverter: la,
                                capabilities: Z,
                                errHandler: ka,
                                baseURLController: ia
                            }), h.initialize(a, oa), X.on(o.default.STREAM_INITIALIZED, H, this), m.push(h), na && h.updateData(a)), da.addManifestUpdateStreamInfo(l, a.id, a.index, a.start, a.duration), h = null
                        }
                        ma = m, na || (na = ma[0], e(o.default.PERIOD_SWITCH_STARTED, null, na), xa.initialize(na.getStreamInfo()), e(o.default.PERIOD_SWITCH_COMPLETED, null, na)), va || D(), sa = !1, G()
                    } catch (n) {
                        ka.manifestError(n.message, "nostreamscomposed", j), ua = !0, T()
                    }
                }
            }

            function G() {
                if (!sa) {
                    var a = ma.length, b = 0;
                    for (f(), b; b < a; b++) if (!ma[b].isInitialized()) return;
                    X.trigger(o.default.STREAMS_COMPOSED)
                }
            }

            function H() {
                G()
            }

            function I() {
                F()
            }

            function J(a) {
                if (a.error) ua = !0, T(); else {
                    var b, c, d = a.manifest, e = ca.getStreamsInfo(d)[0],
                        f = ca.getMediaInfoForType(d, e, "video") || ca.getMediaInfoForType(d, e, "audio");
                    f && (b = ca.getDataForMedia(f), c = ba.getRepresentationsForAdaptation(d, b)[0].useCalculatedLiveEdgeTime, c && (W("SegmentTimeline detected using calculated Live Edge Time"), ya.setUseManifestDateHeaderTimeSource(!1)));
                    var g = ba.getUTCTimingSources(a.manifest),
                        h = !ba.getIsDynamic(d) || c ? g : g.concat(ya.getUTCTimingSources()),
                        i = (0, q.default)(V).getInstance().isManifestHTTPS();
                    h.forEach(function (a) {
                        a.value.replace(/.*?:\/\//g, "") === u.default.DEFAULT_UTC_TIMING_SOURCE.value.replace(/.*?:\/\//g, "") && (a.value = a.value.replace(i ? new RegExp(/^(http:)?\/\//i) : new RegExp(/^(https:)?\/\//i), i ? "https://" : "http://"), W("Matching default timing source protocol to manifest protocol: ", a.value))
                    }), ia.initialize(d), ha.setConfig({
                        metricsModel: da,
                        dashMetrics: ea
                    }), ha.initialize(h, ya.getUseManifestDateHeaderTimeSource())
                }
            }

            function K() {
                return void 0 === Ca && (Ca = L()), Ca
            }

            function L() {
                var a = !1;
                return na.getProcessors().forEach(function (b) {
                    "video" === b.getMediaInfo().type && (a = !0)
                }), a
            }

            function M() {
                return qa
            }

            function N() {
                return na ? na.getStreamInfo() : null
            }

            function O(a) {
                return na.getId() === a.id
            }

            function P(a) {
                return ma.filter(function (b) {
                    return b.getId() === a
                })[0]
            }

            function Q(a) {
                _.load(a)
            }

            function R(a) {
                $.setManifest(a)
            }

            function S(a) {
                a && (a.capabilities && (Z = a.capabilities), a.manifestLoader && (_ = a.manifestLoader), a.manifestModel && (aa = a.manifestModel), a.dashManifestModel && (ba = a.dashManifestModel), a.protectionController && (oa = a.protectionController), a.adapter && (ca = a.adapter), a.metricsModel && (da = a.metricsModel), a.dashMetrics && (ea = a.dashMetrics), a.liveEdgeFinder && (fa = a.liveEdgeFinder), a.mediaSourceController && (ga = a.mediaSourceController), a.timeSyncController && (ha = a.timeSyncController), a.baseURLController && (ia = a.baseURLController), a.errHandler && (ka = a.errHandler), a.timelineConverter && (la = a.timelineConverter))
            }

            function T() {
                ha.reset(), c(ta || ua ? x.PlayListTrace.FAILURE_STOP_REASON : x.PlayListTrace.USER_REQUEST_STOP_REASON);
                for (var a = 0, b = ma.length; a < b; a++) {
                    var d = ma[a];
                    X.off(o.default.STREAM_INITIALIZED, H, this), d.reset(ta)
                }
                ma = [], X.off(o.default.PLAYBACK_TIME_UPDATED, j, this), X.off(o.default.PLAYBACK_SEEKING, n, this), X.off(o.default.PLAYBACK_ERROR, h, this), X.off(o.default.PLAYBACK_STARTED, p, this), X.off(o.default.PLAYBACK_PAUSED, r, this), X.off(o.default.PLAYBACK_ENDED, l, this), X.off(o.default.MANIFEST_UPDATED, J, this), X.off(o.default.STREAM_BUFFERING_COMPLETED, t, this), ia.reset(), $.reset(), da.clearAllCurrentMetrics(), aa.setValue(null), _.reset(), la.reset(), fa.reset(), ca.reset(), ja.reset(), ra = !1, sa = !1, na = null, ta = !1, ua = !1, Ca = void 0, Aa = !0, za = !1, va && (ga.detachMediaSource(wa), va = null), wa = null, oa && (oa.setMediaElement(null), oa = null, pa = null, aa.getValue() && X.trigger(o.default.PROTECTION_DESTROYED, {data: aa.getValue().url})), X.trigger(o.default.STREAM_TEARDOWN_COMPLETE)
            }

            var U = 1, V = this.context, W = (0, z.default)(V).getInstance().log, X = (0, m.default)(V).getInstance(),
                Y = void 0, Z = void 0, $ = void 0, _ = void 0, aa = void 0, ba = void 0, ca = void 0, da = void 0,
                ea = void 0, fa = void 0, ga = void 0, ha = void 0, ia = void 0, ja = void 0, ka = void 0, la = void 0,
                ma = void 0, na = void 0, oa = void 0, pa = void 0, qa = void 0, ra = void 0, sa = void 0, ta = void 0,
                ua = void 0, va = void 0, wa = void 0, xa = void 0, ya = void 0, za = void 0, Aa = void 0, Ba = void 0,
                Ca = void 0;
            return Y = {
                initialize: b,
                getAutoPlay: M,
                getActiveStreamInfo: N,
                isStreamActive: O,
                isVideoTrackPresent: K,
                getStreamById: P,
                getTimeRelativeToStreamId: y,
                load: Q,
                loadWithManifest: R,
                getActiveStreamCommonEarliestTime: A,
                setConfig: S,
                reset: T
            }, a(), Y
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(68), g = d(f), h = a(54), i = d(h), j = a(50), k = d(j), l = a(9), m = d(l), n = a(13), o = d(n),
            p = a(103), q = d(p), r = a(104), s = d(r), t = a(101), u = d(t), v = a(10), w = d(v), x = a(181), y = a(8),
            z = d(y), A = a(152), B = d(A);
        e.__dashjs_factory_name = "StreamController", c.default = w.default.getSingletonFactory(e), b.exports = c.default
    }, {10: 10, 101: 101, 103: 103, 104: 104, 13: 13, 152: 152, 181: 181, 50: 50, 54: 54, 68: 68, 8: 8, 9: 9}],
    72: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a) {
            function b() {
                s = !1, t = null, u = null, v = null, w = null, x = null, o.on(i.default.DATA_UPDATE_COMPLETED, l, this), o.on(i.default.INIT_FRAGMENT_LOADED, m, this)
            }

            function c(a, b, c) {
                v = a, h(b), w = c, x = w.getRepresentationController()
            }

            function d(a) {
                try {
                    u = p.createSourceBuffer(t, a), s || (u.hasOwnProperty("initialize") && u.initialize(v, this), s = !0)
                } catch (b) {
                    q.mediaSourceError("Error creating " + v + " source buffer.")
                }
                return u
            }

            function e() {
                return u
            }

            function f(a) {
                u = a
            }

            function h(a) {
                t = a
            }

            function j() {
                return w
            }

            function k(a) {
                o.off(i.default.DATA_UPDATE_COMPLETED, l, this), o.off(i.default.INIT_FRAGMENT_LOADED, m, this), a || (p.abort(t, u), p.removeSourceBuffer(t, u))
            }

            function l(a) {
                a.sender.getStreamProcessor() === w && o.trigger(i.default.TIMED_TEXT_REQUESTED, {
                    index: 0,
                    sender: a.sender
                })
            }

            function m(a) {
                a.fragmentModel === w.getFragmentModel() && a.chunk.bytes && p.append(u, a.chunk)
            }

            var n = this.context, o = (0, g.default)(n).getInstance(), p = a.sourceBufferController, q = a.errHandler,
                r = void 0, s = void 0, t = void 0, u = void 0, v = void 0, w = void 0, x = void 0;
            return r = {
                initialize: c,
                createBuffer: d,
                getBuffer: e,
                setBuffer: f,
                getStreamProcessor: j,
                setMediaSource: h,
                reset: k
            }, b(), r
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(9), g = d(f), h = a(13), i = d(h), j = a(10), k = d(j);
        e.__dashjs_factory_name = "TextController", c.default = k.default.getClassFactory(e), b.exports = c.default
    }, {10: 10, 13: 13, 9: 9}],
    73: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a(a, b) {
                H = b, E = 0, F = !1, G = !1, I = {
                    "urn:mpeg:dash:utc:http-head:2014": v,
                    "urn:mpeg:dash:utc:http-xsdate:2014": u.bind(null, m),
                    "urn:mpeg:dash:utc:http-iso:2014": u.bind(null, n),
                    "urn:mpeg:dash:utc:direct:2014": t,
                    "urn:mpeg:dash:utc:http-head:2012": v,
                    "urn:mpeg:dash:utc:http-xsdate:2012": u.bind(null, m),
                    "urn:mpeg:dash:utc:http-iso:2012": u.bind(null, n),
                    "urn:mpeg:dash:utc:direct:2012": t,
                    "urn:mpeg:dash:utc:http-ntp:2014": s,
                    "urn:mpeg:dash:utc:ntp:2014": s,
                    "urn:mpeg:dash:utc:sntp:2014": s
                }, e() || (y(a), f(!0))
            }

            function b(a) {
                a && (a.metricsModel && (J = a.metricsModel), a.dashMetrics && (K = a.dashMetrics))
            }

            function c() {
                return j()
            }

            function d(a) {
                F = a
            }

            function e() {
                return F
            }

            function f(a) {
                G = a
            }

            function h(a) {
                E = a
            }

            function j() {
                return E
            }

            function l(a) {
                var b, c, d = 60, e = 60, f = 1e3,
                    g = /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2})(?::([0-9]*)(\.[0-9]*)?)?(?:([+\-])([0-9]{2})([0-9]{2}))?/,
                    h = g.exec(a);
                return b = Date.UTC(parseInt(h[1], 10), parseInt(h[2], 10) - 1, parseInt(h[3], 10), parseInt(h[4], 10), parseInt(h[5], 10), h[6] && (parseInt(h[6], 10) || 0), h[7] && parseFloat(h[7]) * f || 0), h[9] && h[10] && (c = parseInt(h[9], 10) * e + parseInt(h[10], 10), b += ("+" === h[8] ? -1 : 1) * c * d * f), new Date(b).getTime()
            }

            function m(a) {
                var b = Date.parse(a);
                return isNaN(b) && (b = l(a)), b
            }

            function n(a) {
                return Date.parse(a)
            }

            function r(a) {
                return Date.parse(a)
            }

            function s(a, b, c) {
                c()
            }

            function t(a, b, c) {
                var d = m(a);
                return isNaN(d) ? void c() : void b(d)
            }

            function u(a, b, c, d, e) {
                var f, g, h = !1, i = new XMLHttpRequest, j = e ? "HEAD" : "GET", k = b.match(/\S+/g);
                b = k.shift(), f = function () {
                    h || (h = !0, k.length ? u(a, k.join(" "), c, d, e) : d())
                }, g = function () {
                    var b, d;
                    200 === i.status && (b = e ? i.getResponseHeader("Date") : i.response, d = a(b), isNaN(d) || (c(d), h = !0))
                }, i.open(j, b), i.timeout = q || 0, i.onload = g, i.onloadend = f, i.send()
            }

            function v(a, b, c) {
                u(r, a, b, c, !0)
            }

            function w() {
                var a = J.getReadOnlyMetricsFor("stream"), b = K.getLatestMPDRequestHeaderValueByID(a, "Date"),
                    c = null !== b ? new Date(b).getTime() : Number.NaN;
                isNaN(c) ? x(!0) : (h(c - (new Date).getTime()), x(!1, c / 1e3, E))
            }

            function x(a, b, c) {
                d(!1), C.trigger(k.default.TIME_SYNCHRONIZATION_COMPLETED, {
                    time: b,
                    offset: c,
                    error: a ? new g.default(p) : null
                })
            }

            function y(a, b) {
                var c = b || 0, e = a[c], f = function (a, b) {
                    var c = !a || !b;
                    c && H ? w() : x(c, a, b)
                };
                d(!0), e ? I.hasOwnProperty(e.schemeIdUri) ? I[e.schemeIdUri](e.value, function (a) {
                    var b = (new Date).getTime(), c = a - b;
                    h(c), B("Local time:      " + new Date(b)), B("Server time:     " + new Date(a)), B("Difference (ms): " + c), f(a, c)
                }, function () {
                    y(a, c + 1)
                }) : y(a, c + 1) : (h(0), f())
            }

            function z() {
                f(!1), d(!1)
            }

            var A = this.context, B = (0, o.default)(A).getInstance().log, C = (0, i.default)(A).getInstance(),
                D = void 0, E = void 0, F = void 0, G = void 0, H = void 0, I = void 0, J = void 0, K = void 0;
            return D = {initialize: a, getOffsetToDeviceTimeMs: c, setConfig: b, reset: z}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(162), g = d(f), h = a(9), i = d(h), j = a(13), k = d(j), l = a(10), m = d(l), n = a(8), o = d(n),
            p = 1, q = 5e3;
        e.__dashjs_factory_name = "TimeSyncController";
        var r = m.default.getSingletonFactory(e);
        r.TIME_SYNC_FAILED_ERROR_CODE = p, r.HTTP_TIMEOUT_MS = q, c.default = r, b.exports = c.default
    }, {10: 10, 13: 13, 162: 162, 8: 8, 9: 9}],
    74: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a) {
            function b() {
                A.on(k.default.XLINK_ELEMENT_LOADED, j, C), H = (0, g.default)(z).create({
                    errHandler: a.errHandler,
                    metricsModel: a.metricsModel,
                    requestModifier: a.requestModifier
                })
            }

            function c(a) {
                D = a
            }

            function d(a) {
                E = a
            }

            function e(a) {
                var b;
                G = new o.default(D, "", (!0)), F = a, b = m(F.Period_asArray, F, t, r), h(b, t, r)
            }

            function f() {
                A.off(k.default.XLINK_ELEMENT_LOADED, j, C), H && (H.reset(), H = null)
            }

            function h(a, b, c) {
                var d, e, f, g = {};
                for (g.elements = a, g.type = b, g.resolveType = c, 0 === g.elements.length && l(g), f = 0; f < g.elements.length; f++) d = g.elements[f], e = B.isHTTPURL(d.url) ? d.url : d.originalContent.BaseURL + d.url, H.load(e, d, g)
            }

            function j(a) {
                var b, c, d, e = "<response>", f = "</response>", g = "";
                b = a.element, c = a.resolveObject, b.resolvedContent && (d = b.resolvedContent.indexOf(">") + 1, g = b.resolvedContent.substr(0, d) + e + b.resolvedContent.substr(d) + f, b.resolvedContent = G.xml_str2json(g)), x(c) && l(c)
            }

            function l(a) {
                var b, c, d = [];
                if (n(a), a.resolveType === s && A.trigger(k.default.XLINK_READY, {manifest: F}), a.resolveType === r) switch (a.type) {
                    case t:
                        for (b = 0; b < F[t + "_asArray"].length; b++) c = F[t + "_asArray"][b], c.hasOwnProperty(u + "_asArray") && (d = d.concat(m(c[u + "_asArray"], c, u, r))), c.hasOwnProperty(v + "_asArray") && (d = d.concat(m(c[v + "_asArray"], c, v, r)));
                        h(d, u, r);
                        break;
                    case u:
                        A.trigger(k.default.XLINK_READY, {manifest: F})
                }
            }

            function m(a, b, c, d) {
                var e, f, g, h = [];
                for (f = a.length - 1; f >= 0; f--) e = a[f], e.hasOwnProperty("xlink:href") && e["xlink:href"] === w && a.splice(f, 1);
                for (f = 0; f < a.length; f++) e = a[f], e.hasOwnProperty("xlink:href") && e.hasOwnProperty("xlink:actuate") && e["xlink:actuate"] === d && (g = p(e["xlink:href"], b, c, f, d, e), h.push(g));
                return h
            }

            function n(a) {
                var b, c, d, e, f, g, h = [];
                for (e = a.elements.length - 1; e >= 0; e--) {
                    if (b = a.elements[e], c = b.type + "_asArray", !b.resolvedContent || y()) delete b.originalContent["xlink:actuate"], delete b.originalContent["xlink:href"], h.push(b.originalContent); else if (b.resolvedContent) for (f = 0; f < b.resolvedContent[c].length; f++) d = b.resolvedContent[c][f], h.push(d);
                    for (b.parentElement[c].splice(b.index, 1), g = 0; g < h.length; g++) b.parentElement[c].splice(b.index + g, 0, h[g]);
                    h = []
                }
                a.elements.length > 0 && E.run(F)
            }

            function p(a, b, c, d, e, f) {
                return {
                    url: a,
                    parentElement: b,
                    type: c,
                    index: d,
                    resolveType: e,
                    originalContent: f,
                    resolvedContent: null,
                    resolved: !1
                }
            }

            function x(a) {
                var b, c;
                for (b = 0; b < a.elements.length; b++) if (c = a.elements[b], c.resolved === !1) return !1;
                return !0
            }

            function y() {
                return !1
            }

            var z = this.context, A = (0, i.default)(z).getInstance(), B = (0, q.default)(z).getInstance(), C = void 0,
                D = void 0, E = void 0, F = void 0, G = void 0, H = void 0;
            return C = {resolveManifestOnLoad: e, setMatchers: c, setIron: d, reset: f}, b(), C
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(59), g = d(f), h = a(9), i = d(h), j = a(13), k = d(j), l = a(10), m = d(l), n = a(4), o = d(n),
            p = a(158), q = d(p), r = "onLoad", s = "onActuate", t = "Period", u = "AdaptationSet", v = "EventStream",
            w = "urn:mpeg:dash:resolve-to-zero:2013";
        e.__dashjs_factory_name = "XlinkController", c.default = m.default.getClassFactory(e), b.exports = c.default
    }, {10: 10, 13: 13, 158: 158, 4: 4, 59: 59, 9: 9}],
    75: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a(a) {
                return f = (0, g.default)(d).getInstance({
                    eventBus: a.eventBus,
                    metricsModel: a.metricsModel
                }), (0, k.default)(d).create(a)
            }

            function b() {
                return (0, o.default)(d).getInstance()
            }

            function c() {
                return (0, m.default)(d).getInstance()
            }

            var d = this.context, e = void 0, f = void 0;
            return e = {createMetricsReporting: a, getReportingFactory: b, getMetricsHandlerFactory: c}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(89), g = d(f), h = a(76), i = d(h), j = a(77), k = d(j), l = a(82), m = d(l), n = a(87), o = d(n),
            p = a(10), q = d(p);
        e.__dashjs_factory_name = "MetricsReporting";
        var r = q.default.getClassFactory(e);
        r.events = i.default, c.default = r, b.exports = c.default
    }, {10: 10, 76: 76, 77: 77, 82: 82, 87: 87, 89: 89}],
    76: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        function f(a, b) {
            if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var g = function (a, b, c) {
            for (var d = !0; d;) {
                var e = a, f = b, g = c;
                d = !1, null === e && (e = Function.prototype);
                var h = Object.getOwnPropertyDescriptor(e, f);
                if (void 0 !== h) {
                    if ("value" in h) return h.value;
                    var i = h.get;
                    if (void 0 === i) return;
                    return i.call(g)
                }
                var j = Object.getPrototypeOf(e);
                if (null === j) return;
                a = j, b = f, c = g, d = !0, h = j = void 0
            }
        }, h = a(14), i = d(h), j = function (a) {
            function b() {
                e(this, b), g(Object.getPrototypeOf(b.prototype), "constructor", this).call(this), this.METRICS_INITIALISATION_COMPLETE = "internal_metricsReportingInitialized", this.BECAME_REPORTING_PLAYER = "internal_becameReportingPlayer"
            }

            return f(b, a), b
        }(i.default), k = new j;
        c.default = k, b.exports = c.default
    }, {14: 14}],
    77: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a) {
            function b(b) {
                if (!b.error) {
                    var c = Object.keys(e),
                        d = (0, i.default)(f).getInstance({dashManifestModel: a.dashManifestModel}).getMetrics(b.manifest);
                    d.forEach(function (b) {
                        var d = JSON.stringify(b);
                        if (e.hasOwnProperty(d)) c.splice(d, 1); else try {
                            var h = (0, g.default)(f).create(a);
                            h.initialize(b), e[d] = h
                        } catch (i) {
                        }
                    }), c.forEach(function (a) {
                        e[a].reset(), delete e[a]
                    }), h.trigger(m.default.METRICS_INITIALISATION_COMPLETE)
                }
            }

            function c() {
                Object.keys(e).forEach(function (a) {
                    e[a].reset()
                }), e = {}
            }

            function d() {
                h.on(o.default.MANIFEST_UPDATED, b), h.on(o.default.STREAM_TEARDOWN_COMPLETE, c)
            }

            var e = {}, f = this.context, h = a.eventBus;
            return d(), {}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(78), g = d(f), h = a(91), i = d(h), j = a(10), k = d(j), l = a(76), m = d(l), n = a(13), o = d(n);
        e.__dashjs_factory_name = "MetricsCollectionController", c.default = k.default.getClassFactory(e), b.exports = c.default
    }, {10: 10, 13: 13, 76: 76, 78: 78, 91: 91}],
    78: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a) {
            function b(b) {
                try {
                    f = (0, i.default)(h).create({mediaElement: a.mediaElement}), f.initialize(b.Range), e = (0, k.default)(h).create({log: a.log}), e.initialize(b.Reporting, f), d = (0, m.default)(h).create({
                        log: a.log,
                        eventBus: a.eventBus
                    }), d.initialize(b.metrics, e)
                } catch (g) {
                    throw c(), g
                }
            }

            function c() {
                d && d.reset(), e && e.reset(), f && f.reset()
            }

            var d = void 0, e = void 0, f = void 0, g = void 0, h = this.context;
            return g = {initialize: b, reset: c}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(10), g = d(f), h = a(80), i = d(h), j = a(81), k = d(j), l = a(79), m = d(l);
        e.__dashjs_factory_name = "MetricsController", c.default = g.default.getClassFactory(e), b.exports = c.default
    }, {10: 10, 79: 79, 80: 80, 81: 81}],
    79: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a) {
            function b(a) {
                e.forEach(function (b) {
                    b.handleNewMetric(a.metric, a.value, a.mediaType)
                })
            }

            function c(a, c) {
                a.split(",").forEach(function (a, b, d) {
                    var f;
                    if (a.indexOf("(") !== -1 && a.indexOf(")") === -1) {
                        var g = d[b + 1];
                        g && g.indexOf("(") === -1 && g.indexOf(")") !== -1 && (a += "," + g, delete d[b + 1])
                    }
                    f = j.create(a, c), f && e.push(f)
                }), i.on(k.default.METRIC_ADDED, b, f), i.on(k.default.METRIC_UPDATED, b, f)
            }

            function d() {
                i.off(k.default.METRIC_ADDED, b, f), i.off(k.default.METRIC_UPDATED, b, f), e.forEach(function (a) {
                    return a.reset()
                }), e = []
            }

            var e = [], f = void 0, h = this.context, i = a.eventBus,
                j = (0, g.default)(h).getInstance({log: a.log, eventBus: a.eventBus});
            return f = {initialize: c, reset: d}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(82), g = d(f), h = a(10), i = d(h), j = a(52), k = d(j);
        e.__dashjs_factory_name = "MetricsHandlersController", c.default = i.default.getClassFactory(e), b.exports = c.default
    }, {10: 10, 52: 52, 82: 82}],
    80: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a) {
            function b(a) {
                a && a.length && (a.forEach(function (a) {
                    var b = a.starttime, c = b + a.duration;
                    j.add(b, c)
                }), f = !!a[0]._useWallClockTime)
            }

            function c() {
                j.clear()
            }

            function d() {
                j = (0, i.default)(g).create()
            }

            function e() {
                var a, b = j.length;
                if (!b) return !0;
                a = f ? (new Date).getTime() / 1e3 : k.currentTime;
                for (var c = 0; c < b; c += 1) {
                    var d = j.start(c), e = j.end(c);
                    if (d <= a && a < e) return !0
                }
                return !1
            }

            var f = !1, g = this.context, h = void 0, j = void 0, k = a.mediaElement;
            return h = {initialize: b, reset: c, isEnabled: e}, d(), h
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(10), g = d(f), h = a(148), i = d(h);
        e.__dashjs_factory_name = "RangeController", c.default = g.default.getClassFactory(e), b.exports = c.default
    }, {10: 10, 148: 148}],
    81: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a) {
            function b(a, b) {
                a.some(function (a) {
                    var c = g.create(a, b);
                    if (c) return e.push(c), !0
                })
            }

            function c() {
                e.forEach(function (a) {
                    return a.reset()
                }), e = []
            }

            function d(a, b) {
                e.forEach(function (c) {
                    return c.report(a, b)
                })
            }

            var e = [], f = void 0, g = (0, i.default)(this.context).getInstance({log: a.log});
            return f = {initialize: b, reset: c, report: d}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(10), g = d(f), h = a(87), i = d(h);
        e.__dashjs_factory_name = "ReportingController", c.default = g.default.getClassFactory(e), b.exports = c.default
    }, {10: 10, 87: 87}],
    82: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a) {
            function b(b, c) {
                var d, e = b.match(g);
                if (e) {
                    try {
                        d = j[e[1]](h).create({eventBus: a.eventBus}), d.initialize(e[1], c, e[3], e[5])
                    } catch (i) {
                        d = null, f("MetricsHandlerFactory: Could not create handler for type " + e[1] + " with args " + e[3] + ", " + e[5] + " (" + i.message + ")")
                    }
                    return d
                }
            }

            function c(a, b) {
                j[a] = b
            }

            function d(a) {
                delete j[a]
            }

            var e = void 0, f = a.log, g = /([a-zA-Z]*)(\(([0-9]*)(\,\s*([a-zA-Z]*))?\))?/, h = this.context, j = {
                BufferLevel: i.default,
                DVBErrors: k.default,
                HttpList: m.default,
                PlayList: o.default,
                RepSwitchList: o.default,
                TcpList: o.default
            };
            return e = {create: b, register: c, unregister: d}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(10), g = d(f), h = a(83), i = d(h), j = a(84), k = d(j), l = a(86), m = d(l), n = a(85), o = d(n);
        e.__dashjs_factory_name = "MetricsHandlerFactory", c.default = g.default.getSingletonFactory(e), b.exports = c.default
    }, {10: 10, 83: 83, 84: 84, 85: 85, 86: 86}],
    83: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a() {
                try {
                    return Object.keys(o).map(function (a) {
                        return o[a]
                    }).reduce(function (a, b) {
                        return a.level < b.level ? a : b
                    })
                } catch (a) {
                    return
                }
            }

            function b() {
                var b = a();
                b && l !== b.t && (l = b.t, g.report(j, b))
            }

            function c(a, c, d) {
                c && (h = n.validateN(d), g = c, j = n.reconstructFullMetricName(a, d), k = setInterval(b, h))
            }

            function d() {
                clearInterval(k), k = null, h = 0, g = null, l = null
            }

            function e(a, b, c) {
                "BufferLevel" === a && (o[c] = b)
            }

            var f = void 0, g = void 0, h = void 0, j = void 0, k = void 0, l = void 0, m = this.context,
                n = (0, i.default)(m).getInstance(), o = [];
            return f = {initialize: c, reset: d, handleNewMetric: e}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(10), g = d(f), h = a(90), i = d(h);
        e.__dashjs_factory_name = "BufferLevelHandler", c.default = g.default.getClassFactory(e), b.exports = c.default
    }, {10: 10, 90: 90}],
    84: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a) {
            function b() {
                h.off(i.default.METRICS_INITIALISATION_COMPLETE, b, this), h.trigger(i.default.BECAME_REPORTING_PLAYER)
            }

            function c(a, c) {
                c && (g = c, h.on(i.default.METRICS_INITIALISATION_COMPLETE, b, this))
            }

            function d() {
                g = null
            }

            function e(a, b) {
                "DVBErrors" === a && g && g.report(a, b)
            }

            var f = void 0, g = void 0, h = a.eventBus;
            return f = {initialize: c, reset: d, handleNewMetric: e}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(10), g = d(f), h = a(76), i = d(h);
        c.default = g.default.getClassFactory(e), b.exports = c.default
    }, {10: 10, 76: 76}],
    85: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a(a, b) {
                e = a, f = b
            }

            function b() {
                f = null, e = void 0
            }

            function c(a, b) {
                a === e && f && f.report(e, b)
            }

            var d = void 0, e = void 0, f = void 0;
            return d = {initialize: a, reset: b, handleNewMetric: c}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(10), g = d(f);
        e.__dashjs_factory_name = "GenericMetricHandler", c.default = g.default.getClassFactory(e), b.exports = c.default
    }, {10: 10}],
    86: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a() {
                var a = l;
                a.length && f && f.report(j, a), l = []
            }

            function b(b, c, d, e) {
                c && (g = m.validateN(d), f = c, e && e.length && (h = e), j = m.reconstructFullMetricName(b, d, e), k = setInterval(a, g))
            }

            function c() {
                clearInterval(k), k = null, g = null, h = null, l = [], f = null
            }

            function d(a, b) {
                "HttpList" === a && (h && h !== b.type || l.push(b))
            }

            var e = void 0, f = void 0, g = void 0, h = void 0, j = void 0, k = void 0, l = [],
                m = (0, i.default)(this.context).getInstance();
            return e = {initialize: b, reset: c, handleNewMetric: d}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(10), g = d(f), h = a(90), i = d(h);
        e.__dashjs_factory_name = "HttpListHandler", c.default = g.default.getClassFactory(e), b.exports = c.default
    }, {10: 10, 90: 90}],
    87: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a) {
            function b(a, b) {
                var c;
                try {
                    c = e[a.schemeIdUri](f).create(), c.initialize(a, b)
                } catch (d) {
                    c = null, g("ReportingFactory: could not create Reporting with schemeIdUri " + a.schemeIdUri + " (" + d.message + ")")
                }
                return c
            }

            function c(a, b) {
                e[a] = b
            }

            function d(a) {
                delete e[a]
            }

            var e = {"urn:dvb:dash:reporting:2014": i.default}, f = this.context, g = a.log, h = void 0;
            return h = {create: b, register: c, unregister: d}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(10), g = d(f), h = a(88), i = d(h);
        e.__dashjs_factory_name = "ReportingFactory", c.default = g.default.getSingletonFactory(e), b.exports = c.default
    }, {10: 10, 88: 88}],
    88: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a(a, b, c) {
                var d = new XMLHttpRequest, e = function () {
                    var a = q.indexOf(d);
                    a !== -1 && (q.splice(a, 1), d.status >= 200 && d.status < 300 ? b && b() : c && c())
                };
                q.push(d);
                try {
                    d.open("GET", a), d.onloadend = e, d.onerror = e, d.send()
                } catch (f) {
                    d.onerror()
                }
            }

            function b(b, c) {
                Array.isArray(c) || (c = [c]), l && o.isEnabled() && c.forEach(function (c) {
                    var d = g.serialise(c);
                    j && "DVBErrors" !== b && (d = "metricname=" + b + "&" + d), d = n + "?" + d, a(d, null, function () {
                        l = !1
                    })
                })
            }

            function c(a, b) {
                var c;
                if (o = b, n = a["dvb:reportingUrl"], !n) throw new Error("required parameter missing (dvb:reportingUrl)");
                m || (c = a["dvb:probability"] || a["dvb:priority"] || 0, c && (1e3 === c || c / 1e3 >= h.random()) && (l = !0), m = !0)
            }

            function d() {
                p || (q.forEach(function (a) {
                    return a.abort()
                }), q = []), m = !1, l = !1, n = null, o = null
            }

            var e = void 0, f = this.context, g = (0, i.default)(f).getInstance(), h = (0, k.default)(f).getInstance(),
                j = !0, l = !1, m = !1, n = null, o = null, p = !0, q = [];
            return e = {report: b, initialize: c, reset: d}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(10), g = d(f), h = a(92), i = d(h), j = a(93), k = d(j);
        e.__dashjs_factory_name = "DVBReporting", c.default = g.default.getClassFactory(e), b.exports = c.default
    }, {10: 10, 92: 92, 93: 93}],
    89: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a) {
            function b(a) {
                var b = new g.default;
                if (r) {
                    for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c]);
                    b.mpdurl || (b.mpdurl = r.originalUrl || r.url), b.terror || (b.terror = new Date), q.addDVBErrors(b)
                }
            }

            function c(a) {
                a.error || (r = a.manifest)
            }

            function d(a) {
                b({errorcode: g.default.BASE_URL_CHANGED, servicelocation: a.entry})
            }

            function e() {
                b({errorcode: g.default.BECAME_REPORTER})
            }

            function f(a) {
                (0 === a.responsecode || a.responsecode >= 400 || a.responsecode < 100 || a.responsecode >= 600) && b({
                    errorcode: a.responsecode || g.default.CONNECTION_ERROR,
                    url: a.url,
                    terror: a.tresponse,
                    servicelocation: a._serviceLocation
                })
            }

            function h(a) {
                switch (a.metric) {
                    case"HttpList":
                        f(a.value)
                }
            }

            function j(a) {
                var c, d = a.error ? a.error.code : 0;
                switch (d) {
                    case MediaError.MEDIA_ERR_NETWORK:
                        c = g.default.CONNECTION_ERROR;
                        break;
                    case MediaError.MEDIA_ERR_DECODE:
                        c = g.default.CORRUPT_MEDIA_OTHER;
                        break;
                    default:
                        return
                }
                b({errorcode: c})
            }

            function l() {
                p.on(i.default.MANIFEST_UPDATED, c, o), p.on(i.default.SERVICE_LOCATION_BLACKLIST_CHANGED, d, o), p.on(k.default.METRIC_ADDED, h, o), p.on(k.default.METRIC_UPDATED, h, o), p.on(k.default.PLAYBACK_ERROR, j, o), p.on(m.default.BECAME_REPORTING_PLAYER, e, o)
            }

            function n() {
                p.off(i.default.MANIFEST_UPDATED, c, o), p.off(i.default.SERVICE_LOCATION_BLACKLIST_CHANGED, d, o), p.off(k.default.METRIC_ADDED, h, o), p.off(k.default.METRIC_UPDATED, h, o), p.off(k.default.PLAYBACK_ERROR, j, o), p.off(m.default.BECAME_REPORTING_PLAYER, e, o)
            }

            var o = void 0, p = a.eventBus, q = a.metricsModel, r = void 0;
            return o = {initialise: l, reset: n}, l(), o
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(94), g = d(f), h = a(13), i = d(h), j = a(52), k = d(j), l = a(76), m = d(l), n = a(10), o = d(n);
        e.__dashjs_factory_name = "DVBErrorsTranslator", c.default = o.default.getSingletonFactory(e), b.exports = c.default
    }, {10: 10, 13: 13, 52: 52, 76: 76, 94: 94}],
    90: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            return {
                reconstructFullMetricName: function (a, b, c) {
                    var d = a;
                    return b && (d += "(" + b, c && c.length && (d += "," + c), d += ")"), d
                }, validateN: function (a) {
                    if (!a) throw new Error("missing n");
                    if (isNaN(a)) throw new Error("n is NaN");
                    if (a < 0) throw new Error("n must be positive");
                    return a
                }
            }
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(10), g = d(f);
        e.__dashjs_factory_name = "HandlerHelpers", c.default = g.default.getSingletonFactory(e), b.exports = c.default
    }, {10: 10}],
    91: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a) {
            function b(a, b, c) {
                var d, f, g = e.getMpd(a), h = 0;
                return b ? h = g.availabilityStartTime.getTime() / 1e3 : (d = this.getRegularPeriods(a, g), d.length && (h = d[0].start)), f = h, c && c.hasOwnProperty("starttime") && (f += c.starttime), f
            }

            function c(a) {
                var c = [];
                return a.Metrics_asArray && a.Metrics_asArray.forEach(function (d) {
                    var f = new g.default, h = e.getIsDynamic(a);
                    d.hasOwnProperty("metrics") && (f.metrics = d.metrics, d.Range_asArray && d.Range_asArray.forEach(function (c) {
                        var d = new i.default;
                        d.starttime = b(a, h, c), c.hasOwnProperty("duration") ? d.duration = c.duration : d.duration = e.getDuration(a), d._useWallClockTime = h, f.Range.push(d)
                    }), d.Reporting_asArray && (d.Reporting_asArray.forEach(function (a) {
                        var b = new k.default;
                        if (a.hasOwnProperty("schemeIdUri")) {
                            b.schemeIdUri = a.schemeIdUri;
                            for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c]);
                            f.Reporting.push(b)
                        }
                    }), c.push(f)))
                }), c
            }

            var d = void 0, e = a.dashManifestModel;
            return d = {getMetrics: c}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(95), g = d(f), h = a(96), i = d(h), j = a(97), k = d(j), l = a(10), m = d(l);
        e.__dashjs_factory_name = "ManifestParsing", c.default = m.default.getSingletonFactory(e), b.exports = c.default
    }, {10: 10, 95: 95, 96: 96, 97: 97}],
    92: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a(b) {
                var c, d, e = [], f = [];
                for (c in b) if (b.hasOwnProperty(c) && 0 !== c.indexOf("_")) {
                    if (d = b[c], void 0 !== d && null !== d || (d = ""), Array.isArray(d)) {
                        if (!d.length) continue;
                        f = [], d.forEach(function (b) {
                            var c = "Object" !== Object.prototype.toString.call(b).slice(8, -1);
                            f.push(c ? b : a(b))
                        }), d = encodeURIComponent(f.join(","))
                    } else "string" == typeof d ? d = encodeURIComponent(d) : d instanceof Date ? d = d.toISOString() : "number" == typeof d && (d = Math.round(d));
                    e.push(c + "=" + d)
                }
                return e.join("&")
            }

            return {serialise: a}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(10), g = d(f);
        e.__dashjs_factory_name = "MetricSerialiser", c.default = g.default.getSingletonFactory(e), b.exports = c.default
    }, {10: 10}],
    93: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a() {
                c && (g || (g = new d(f)), c.getRandomValues(g), h = 0)
            }

            function b(b, d) {
                var f;
                return b || (b = 0), d || (d = 1), c ? (h === g.length && a(), f = g[h] / e, h += 1) : f = Math.random(), f * (d - b) + b
            }

            var c = window.crypto || window.msCrypto, d = Uint32Array, e = Math.pow(2, 8 * d.BYTES_PER_ELEMENT) - 1,
                f = 10, g = void 0, h = void 0, i = void 0;
            return i = {random: b}, a(), i
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(10), g = d(f);
        e.__dashjs_factory_name = "RNG", c.default = g.default.getSingletonFactory(e), b.exports = c.default
    }, {10: 10}],
    94: [function (a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function a() {
            d(this, a), this.mpdurl = null, this.errorcode = null, this.terror = null, this.url = null, this.ipaddress = null, this.servicelocation = null
        };
        e.SSL_CONNECTION_FAILED_PREFIX = "SSL", e.DNS_RESOLUTION_FAILED = "C00", e.HOST_UNREACHABLE = "C01", e.CONNECTION_REFUSED = "C02", e.CONNECTION_ERROR = "C03", e.CORRUPT_MEDIA_ISOBMFF = "M00", e.CORRUPT_MEDIA_OTHER = "M01", e.BASE_URL_CHANGED = "F00", e.BECAME_REPORTER = "S00", c.default = e, b.exports = c.default
    }, {}],
    95: [function (a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function a() {
            d(this, a), this.metrics = "", this.Range = [], this.Reporting = []
        };
        c.default = e, b.exports = c.default
    }, {}],
    96: [function (a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function a() {
            d(this, a), this.starttime = 0, this.duration = 1 / 0, this._useWallClockTime = !1
        };
        c.default = e, b.exports = c.default
    }, {}],
    97: [function (a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function a() {
            d(this, a), this.schemeIdUri = "", this.value = ""
        };
        c.default = e, b.exports = c.default
    }, {}],
    98: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        function f() {
            function a() {
                l = new n
            }

            function b(a, b, c) {
                var d = p.getBaseURLsFromElement(c);
                a[b] ? q.areSimpleEquivalent(d, a[b].data.baseUrls) || (a[b].data.baseUrls = d, a[b].data.selectedIdx = m) : a[b] = new n(d)
            }

            function c(a) {
                var c = p.getBaseURLsFromElement(a);
                q.areSimpleEquivalent(c, l.data.baseUrls) || (l.data.baseUrls = c, l.data.selectedIdx = m), a.Period_asArray && a.Period_asArray.forEach(function (a, c) {
                    b(l.children, c, a), a.AdaptationSet_asArray && a.AdaptationSet_asArray.forEach(function (a, d) {
                        b(l.children[c].children, d, a), a.Representation_asArray && a.Representation_asArray.sort(p.getRepresentationSortFunction()).forEach(function (a, e) {
                            b(l.children[c].children[d].children, e, a)
                        })
                    })
                })
            }

            function d(a, b) {
                var c = b || l;
                a(c.data), c.children && c.children.forEach(function (b) {
                    return d(a, b)
                })
            }

            function e(a) {
                d(function (b) {
                    isNaN(b.selectedIdx) || a === b.baseUrls[b.selectedIdx].serviceLocation && (b.selectedIdx = m)
                })
            }

            function f(a) {
                c(a)
            }

            function g() {
                l = new n
            }

            function i(a) {
                var b = l, c = [b.data];
                return a.forEach(function (a) {
                    b = b.children[a], b && c.push(b.data)
                }), c.filter(function (a) {
                    return a.baseUrls.length
                })
            }

            var k = void 0, l = void 0, o = this.context, p = (0, h.default)(o).getInstance(),
                q = (0, j.default)(o).getInstance();
            return k = {reset: g, update: f, getForPath: i, invalidateSelectedIndexes: e}, a(), k
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var g = a(22), h = d(g), i = a(155), j = d(i), k = a(10), l = d(k), m = NaN, n = function a(b, c) {
            e(this, a), this.data = {baseUrls: b || null, selectedIdx: c || m}, this.children = []
        };
        f.__dashjs_factory_name = "BaseURLTreeModel", c.default = l.default.getClassFactory(f), b.exports = c.default
    }, {10: 10, 155: 155, 22: 22}],
    99: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a) {
            function b() {
                D = null, G = null, E = [], F = [], A.on(i.default.LOADING_COMPLETED, w, C)
            }

            function c(a) {
                G = a
            }

            function d(a) {
                D = a
            }

            function e() {
                return D
            }

            function f(a) {
                var b = function (a, b) {
                    return a.action === m.default.ACTION_COMPLETE && a.action === b.action
                }, c = function (a, b) {
                    return !isNaN(a.index) && a.startTime === b.startTime && a.adaptationIndex === b.adaptationIndex
                }, d = function (a, b) {
                    return isNaN(a.index) && isNaN(b.index) && a.quality === b.quality
                }, e = function (e) {
                    var f = !1;
                    return e.some(function (e) {
                        if (c(a, e) || d(a, e) || b(a, e)) return f = !0
                    }), f
                };
                return e(E)
            }

            function h(a) {
                var b = a.state instanceof Array ? a.state : [a.state], c = [];
                return b.forEach(function (b) {
                    var d = u(b);
                    c = c.concat(t(d, a))
                }), c
            }

            function j(a) {
                E = E.filter(function (b) {
                    return isNaN(b.startTime) || b.startTime >= a
                })
            }

            function k() {
                G.abort(), F = []
            }

            function l(a) {
                switch (a.action) {
                    case m.default.ACTION_COMPLETE:
                        E.push(a), v(a, q), A.trigger(i.default.STREAM_COMPLETED, {request: a, fragmentModel: this});
                        break;
                    case m.default.ACTION_DOWNLOAD:
                        v(a, p), F.push(a), n(a);
                        break;
                    default:
                        z("Unknown request action.")
                }
            }

            function n(a) {
                A.trigger(i.default.FRAGMENT_LOADING_STARTED, {sender: C, request: a}), G.load(a)
            }

            function r(a, b, c) {
                for (var d = a.length - 1, e = d; e >= 0; e--) {
                    var f = a[e], g = f.startTime, h = g + f.duration;
                    if (c = void 0 !== c ? c : f.duration / 2, !isNaN(g) && !isNaN(h) && b + c >= g && b - c < h || isNaN(g) && isNaN(b)) return f
                }
                return null
            }

            function t(a, b) {
                return b.hasOwnProperty("time") ? [r(a, b.time, b.threshold)] : a.filter(function (a) {
                    for (var c in b) if ("state" !== c && b.hasOwnProperty(c) && a[c] != b[c]) return !1;
                    return !0
                })
            }

            function u(a) {
                var b = void 0;
                switch (a) {
                    case p:
                        b = F;
                        break;
                    case q:
                        b = E;
                        break;
                    default:
                        b = []
                }
                return b
            }

            function v(a, b) {
                B.addSchedulingInfo(a.mediaType, new Date, a.type, a.startTime, a.availabilityStartTime, a.duration, a.quality, a.range, b), B.addRequestsQueue(a.mediaType, F, E)
            }

            function w(a) {
                a.sender === G && (F.splice(F.indexOf(a.request), 1), a.response && !a.error && E.push(a.request), v(a.request, a.error ? s : q), A.trigger(i.default.FRAGMENT_LOADING_COMPLETED, {
                    request: a.request,
                    response: a.response,
                    error: a.error,
                    sender: this
                }))
            }

            function x() {
                A.off(i.default.LOADING_COMPLETED, w, this), G && (G.reset(), G = null), E = [], F = []
            }

            var y = this.context, z = (0, o.default)(y).getInstance().log, A = (0, g.default)(y).getInstance(),
                B = a.metricsModel, C = void 0, D = void 0, E = void 0, F = void 0, G = void 0;
            return C = {
                setLoader: c,
                setScheduleController: d,
                getScheduleController: e,
                getRequests: h,
                isFragmentLoaded: f,
                removeExecutedRequestsBeforeTime: j,
                abortRequests: k,
                executeRequest: l,
                reset: x
            }, b(), C
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(9), g = d(f), h = a(13), i = d(h), j = a(10), k = d(j), l = a(163), m = d(l), n = a(8), o = d(n),
            p = "loading", q = "executed", r = "canceled", s = "failed";
        e.__dashjs_factory_name = "FragmentModel";
        var t = k.default.getClassFactory(e);
        t.FRAGMENT_MODEL_LOADING = p, t.FRAGMENT_MODEL_EXECUTED = q, t.FRAGMENT_MODEL_CANCELED = r, t.FRAGMENT_MODEL_FAILED = s, c.default = t, b.exports = c.default
    }, {10: 10, 13: 13, 163: 163, 8: 8, 9: 9}],
    100: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a() {
                return f
            }

            function b(a) {
                f = a, a && d.trigger(i.default.MANIFEST_LOADED, {data: a})
            }

            var c = this.context, d = (0, g.default)(c).getInstance(), e = void 0, f = void 0;
            return e = {getValue: a, setValue: b}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(9), g = d(f), h = a(13), i = d(h), j = a(10), k = d(j);
        e.__dashjs_factory_name = "ManifestModel", c.default = k.default.getSingletonFactory(e), b.exports = c.default
    }, {10: 10, 13: 13, 9: 9}],
    101: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a, b, c) {
            return b in a ? Object.defineProperty(a, b, {
                value: c,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : a[b] = c, a
        }

        function f() {
            function a() {
                var a, b;
                ya = [], xa = !1, wa = !0, Ba = !0, Qa = !1, Sa = !1, Ea = {enabled: !0, ttl: l}, Fa = {
                    enabled: !0,
                    ttl: m
                }, za = k, Aa = void 0, Ca = p, Da = q, Ga = NaN, Ha = t, Ia = u, Ja = v, Ka = w, La = n, Ma = o, Pa = D, Ra = E, a = {}, e(a, i.HTTPRequest.MPD_TYPE, z), e(a, i.HTTPRequest.XLINK_EXPANSION_TYPE, B), e(a, i.HTTPRequest.MEDIA_SEGMENT_TYPE, x), e(a, i.HTTPRequest.INIT_SEGMENT_TYPE, x), e(a, i.HTTPRequest.BITSTREAM_SWITCHING_SEGMENT_TYPE, x), e(a, i.HTTPRequest.INDEX_SEGMENT_TYPE, x), e(a, i.HTTPRequest.OTHER_TYPE, x), Na = a, b = {}, e(b, i.HTTPRequest.MPD_TYPE, A), e(b, i.HTTPRequest.XLINK_EXPANSION_TYPE, C), e(b, i.HTTPRequest.MEDIA_SEGMENT_TYPE, y), e(b, i.HTTPRequest.INIT_SEGMENT_TYPE, y), e(b, i.HTTPRequest.BITSTREAM_SWITCHING_SEGMENT_TYPE, y), e(b, i.HTTPRequest.INDEX_SEGMENT_TYPE, y), e(b, i.HTTPRequest.OTHER_TYPE, y), Oa = b
            }

            function b(a) {
                Qa = a
            }

            function c() {
                return Qa
            }

            function d(a) {
                La = a
            }

            function f() {
                return La
            }

            function g(a) {
                Ma = a
            }

            function h() {
                return Ma
            }

            function j(a) {
                Ga = a
            }

            function F() {
                return isNaN(Ga) ? Sa ? s : r : Ga
            }

            function G(a) {
                Ha = a
            }

            function H() {
                return Ha
            }

            function I(a) {
                Ia = a
            }

            function J() {
                return Ia
            }

            function K(a) {
                Ja = a
            }

            function L() {
                return Ja
            }

            function M(a) {
                Ka = a
            }

            function N() {
                return Ka
            }

            function O(a) {
                Ca = a
            }

            function P() {
                return Ca
            }

            function Q(a, b) {
                Ea.enabled = a, void 0 === b || isNaN(b) || "number" != typeof b || (Ea.ttl = b)
            }

            function R() {
                return Ea
            }

            function S(a, b) {
                Fa.enabled = a, void 0 === b || isNaN(b) || "number" != typeof b || (Fa.ttl = b)
            }

            function T() {
                return Fa
            }

            function U(a) {
                Da = a
            }

            function V() {
                return Da
            }

            function W(a) {
                Na[i.HTTPRequest.MEDIA_SEGMENT_TYPE] = a
            }

            function X(a, b) {
                Na[a] = b
            }

            function Y() {
                return Na[i.HTTPRequest.MEDIA_SEGMENT_TYPE]
            }

            function Z(a) {
                return Na[a]
            }

            function $(a) {
                Oa[i.HTTPRequest.MEDIA_SEGMENT_TYPE] = a
            }

            function _(a, b) {
                Oa[a] = b
            }

            function aa() {
                return Oa[i.HTTPRequest.MEDIA_SEGMENT_TYPE]
            }

            function ba(a) {
                return Oa[a]
            }

            function ca(a) {
                Pa = a
            }

            function da() {
                return Pa
            }

            function ea(a) {
                Ba = a
            }

            function fa() {
                return Ba
            }

            function ga(a) {
                za = a
            }

            function ha(a) {
                Aa = a
            }

            function ia() {
                return za
            }

            function ja() {
                return Aa
            }

            function ka(a) {
                wa = a
            }

            function la() {
                return wa
            }

            function ma(a) {
                xa = a
            }

            function na() {
                return xa
            }

            function oa(a) {
                ya = a
            }

            function pa() {
                return ya
            }

            function qa(a) {
                Ra = !!a
            }

            function ra() {
                return Ra
            }

            function sa() {
                return Sa
            }

            function ta(a) {
                Sa = a
            }

            function ua() {
            }

            var va = void 0, wa = void 0, xa = void 0, ya = void 0, za = void 0, Aa = void 0, Ba = void 0, Ca = void 0,
                Da = void 0, Ea = void 0, Fa = void 0, Ga = void 0, Ha = void 0, Ia = void 0, Ja = void 0, Ka = void 0,
                La = void 0, Ma = void 0, Na = void 0, Oa = void 0, Pa = void 0, Qa = void 0, Ra = void 0, Sa = void 0;
            return va = {
                setBufferOccupancyABREnabled: b,
                getBufferOccupancyABREnabled: c,
                setBandwidthSafetyFactor: d,
                getBandwidthSafetyFactor: f,
                setAbandonLoadTimeout: g,
                getAbandonLoadTimeout: h,
                setLastBitrateCachingInfo: Q,
                getLastBitrateCachingInfo: R,
                setLastMediaSettingsCachingInfo: S,
                getLastMediaSettingsCachingInfo: T,
                setStableBufferTime: j,
                getStableBufferTime: F,
                setBufferTimeAtTopQuality: G,
                getBufferTimeAtTopQuality: H,
                setBufferTimeAtTopQualityLongForm: I,
                getBufferTimeAtTopQualityLongForm: J,
                setLongFormContentDurationThreshold: K,
                getLongFormContentDurationThreshold: L,
                setRichBufferThreshold: M,
                getRichBufferThreshold: N,
                setBufferToKeep: O,
                getBufferToKeep: P,
                setBufferPruningInterval: U,
                getBufferPruningInterval: V,
                setFragmentRetryAttempts: W,
                getFragmentRetryAttempts: Y,
                setRetryAttemptsForType: X,
                getRetryAttemptsForType: Z,
                setFragmentRetryInterval: $,
                getFragmentRetryInterval: aa,
                setRetryIntervalForType: _,
                getRetryIntervalForType: ba,
                setWallclockTimeUpdateInterval: ca,
                getWallclockTimeUpdateInterval: da,
                setScheduleWhilePaused: ea,
                getScheduleWhilePaused: fa,
                getUseSuggestedPresentationDelay: na,
                setUseSuggestedPresentationDelay: ma,
                setLiveDelayFragmentCount: ga,
                getLiveDelayFragmentCount: ia,
                getLiveDelay: ja,
                setLiveDelay: ha,
                setUseManifestDateHeaderTimeSource: ka,
                getUseManifestDateHeaderTimeSource: la,
                setUTCTimingSources: oa,
                getUTCTimingSources: pa,
                setXHRWithCredentials: qa,
                getXHRWithCredentials: ra,
                setFastSwitchEnabled: ta,
                getFastSwitchEnabled: sa,
                reset: ua
            }, a(), va
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var g = a(10), h = d(g), i = a(179),
            j = {scheme: "urn:mpeg:dash:utc:http-xsdate:2014", value: "http://time.akamai.com/?iso"}, k = 4, l = 36e4,
            m = 36e4, n = .9, o = 1e4, p = 30, q = 30, r = 12, s = 20, t = 30, u = 60, v = 600, w = 20, x = 3, y = 1e3,
            z = 3, A = 500, B = 1, C = 500, D = 50, E = !1;
        f.__dashjs_factory_name = "MediaPlayerModel";
        var F = h.default.getSingletonFactory(f);
        F.DEFAULT_UTC_TIMING_SOURCE = j, c.default = F, b.exports = c.default
    }, {10: 10, 179: 179}],
    102: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a() {
                T = {}
            }

            function b(a) {
                a && a.adapter && (S = a.adapter)
            }

            function c() {
                Q.trigger(C.default.METRICS_CHANGED)
            }

            function d(a) {
                Q.trigger(C.default.METRIC_CHANGED, {mediaType: a}), c()
            }

            function e(a, b, c) {
                Q.trigger(C.default.METRIC_UPDATED, {mediaType: a, metric: b, value: c}), d(a)
            }

            function f(a, b, c) {
                Q.trigger(C.default.METRIC_ADDED, {mediaType: a, metric: b, value: c}), d(a)
            }

            function h(a) {
                delete T[a], d(a)
            }

            function k() {
                T = {}, c()
            }

            function m(a) {
                return T.hasOwnProperty(a) ? T[a] : null
            }

            function o(a) {
                var b;
                return T.hasOwnProperty(a) ? b = T[a] : (b = new g.default, T[a] = b), b
            }

            function q(a, b, c, d, e, g) {
                var h = new i.default;
                return h.tcpid = b, h.dest = c, h.topen = d, h.tclose = e, h.tconnect = g, o(a).TcpList.push(h), f(a, S.metricsList.TCP_CONNECTION, h), h
            }

            function s(a, b, c, d) {
                var e = new j.HTTPRequestTrace;
                return e.s = b, e.d = c, e.b = d, a.trace.push(e), a.interval || (a.interval = 0), a.interval += c, e
            }

            function v(a, b, c, d, e, g, h, i, k, l, m, n, p, q) {
                var r = new j.HTTPRequest;
                return e && e !== d && (v(a, null, c, d, null, null, h, i, null, null, null, n, null, null), r.actualurl = e), r.tcpid = b, r.type = c, r.url = d, r.range = h, r.trequest = i, r.tresponse = k, r.responsecode = m, r._tfinish = l, r._stream = a, r._mediaduration = n, r._responseHeaders = p, r._serviceLocation = g, q ? q.forEach(function (a) {
                    s(r, a.s, a.d, a.b)
                }) : (delete r.interval, delete r.trace), o(a).HttpList.push(r), f(a, S.metricsList.HTTP_REQUEST, r), r
            }

            function x(a, b, c, d, e) {
                var g = new l.default;
                return g.t = b, g.mt = c, g.to = d, e ? g.lto = e : delete g.lto, o(a).RepSwitchList.push(g), f(a, S.metricsList.TRACK_SWITCH, g), g
            }

            function z(a, b, c) {
                var d = new n.default;
                return d.t = b, d.level = c, o(a).BufferLevel.push(d), f(a, S.metricsList.BUFFER_LEVEL, d), d
            }

            function B(a, b, c) {
                var d = new p.default;
                return d.target = c, d.state = b, o(a).BufferState.push(d), f(a, S.metricsList.BUFFER_STATE, d), d
            }

            function D(a, b, c, d) {
                var e = new r.default;
                return e.time = b, e.range = d, e.manifestInfo = c, o(a).DVRInfo.push(e), f(a, S.metricsList.DVR_INFO, e), e
            }

            function E(a, b) {
                var c = new t.default, d = o(a).DroppedFrames;
                return c.time = b.creationTime, c.droppedFrames = b.droppedVideoFrames, d.length > 0 && d[d.length - 1] == c ? d[d.length - 1] : (d.push(c), f(a, S.metricsList.DROPPED_FRAMES, c), c)
            }

            function F(a, b, c, d, e, g, h, i, j) {
                var k = new w.default;
                return k.mediaType = a, k.t = b, k.type = c, k.startTime = d, k.availabilityStartTime = e, k.duration = g, k.quality = h, k.range = i, k.state = j, o(a).SchedulingInfo.push(k), f(a, S.metricsList.SCHEDULING_INFO, k), k
            }

            function H(a, b, c) {
                var d = new A.default;
                d.loadingRequests = b, d.executedRequests = c, o(a).RequestsQueue = d, f(a, S.metricsList.REQUESTS_QUEUE, d)
            }

            function I(a, b, c, d, e, g, h, i, j, k) {
                var l = new u.ManifestUpdate, m = o("stream");
                return l.mediaType = a, l.type = b, l.requestTime = c, l.fetchTime = d, l.availabilityStartTime = e, l.presentationStartTime = g, l.clientTimeOffset = h, l.currentTime = i, l.buffered = j, l.latency = k, m.ManifestUpdate.push(l), f(a, S.metricsList.MANIFEST_UPDATE, l), l
            }

            function J(a, b) {
                if (a) {
                    for (var c in b) a[c] = b[c];
                    e(a.mediaType, S.metricsList.MANIFEST_UPDATE, a)
                }
            }

            function K(a, b, c, d, f) {
                if (a) {
                    var g = new u.ManifestUpdateStreamInfo;
                    return g.id = b, g.index = c, g.start = d, g.duration = f, a.streamInfo.push(g), e(a.mediaType, S.metricsList.MANIFEST_UPDATE_STREAM_INFO, a), g
                }
                return null
            }

            function L(a, b, c, d, f, g, h, i) {
                if (a) {
                    var j = new u.ManifestUpdateTrackInfo;
                    return j.id = b, j.index = c, j.streamIndex = d, j.mediaType = f, j.startNumber = h, j.fragmentInfoType = i, j.presentationTimeOffset = g, a.trackInfo.push(j), e(a.mediaType, S.metricsList.MANIFEST_UPDATE_TRACK_INFO, a), j
                }
                return null
            }

            function M(a) {
                var b = "stream";
                return a.trace && Array.isArray(a.trace) ? a.trace.forEach(function (a) {
                    a.hasOwnProperty("subreplevel") && !a.subreplevel && delete a.subreplevel
                }) : delete a.trace, o(b).PlayList.push(a), f(b, S.metricsList.PLAY_LIST, a), a
            }

            function N(a) {
                var b = "stream";
                return o(b).DVBErrors.push(a), f(b, S.metricsList.DVB_ERRORS, a), a
            }

            function O(a, b) {
                var c = new G.default;
                return c._s = b, o(a).BolaState = [c], f(a, "BolaState", c), c
            }

            var P = this.context, Q = (0, y.default)(P).getInstance(), R = void 0, S = void 0, T = void 0;
            return R = {
                metricsChanged: c,
                metricChanged: d,
                metricUpdated: e,
                metricAdded: f,
                clearCurrentMetricsForType: h,
                clearAllCurrentMetrics: k,
                getReadOnlyMetricsFor: m,
                getMetricsFor: o,
                addTcpConnection: q,
                addHttpRequest: v,
                addRepresentationSwitch: x,
                addBufferLevel: z,
                addBufferState: B,
                addDVRInfo: D,
                addDroppedFrames: E,
                addSchedulingInfo: F,
                addRequestsQueue: H,
                addManifestUpdate: I,
                updateManifestUpdateInfo: J,
                addManifestUpdateStreamInfo: K,
                addManifestUpdateRepresentationInfo: L,
                addPlayList: M,
                addDVBErrors: N,
                updateBolaState: O,
                setConfig: b
            }, a(), R
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(168), g = d(f), h = a(185), i = d(h), j = a(179), k = a(182), l = d(k), m = a(175), n = d(m),
            o = a(176), p = d(o), q = a(177), r = d(q), s = a(178), t = d(s), u = a(180), v = a(184), w = d(v),
            x = a(9), y = d(x), z = a(183), A = d(z), B = a(13), C = d(B), D = a(10), E = d(D), F = a(174), G = d(F);
        e.__dashjs_factory_name = "MetricsModel", c.default = E.default.getSingletonFactory(e), b.exports = c.default
    }, {
        10: 10,
        13: 13,
        168: 168,
        174: 174,
        175: 175,
        176: 176,
        177: 177,
        178: 178,
        179: 179,
        180: 180,
        182: 182,
        183: 183,
        184: 184,
        185: 185,
        9: 9
    }],
    103: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a() {
                h = new g.default, i = [], j = !1
            }

            function b() {
                return h
            }

            function c() {
                return i
            }

            function d() {
                return j
            }

            function e(a) {
                function b(a, b, c, d) {
                    var e = d[0].split(/[=]/);
                    return d.push({key: e[0], value: e[1]}), d.shift(), d
                }

                function c(a, b, c) {
                    return b > 0 && (l && 0 === i.length ? i = c[b].split(/[&]/) : m && (e = c[b].split(/[&]/))), c
                }

                if (!a) return null;
                var d, e = [], f = new RegExp(/[?]/), g = new RegExp(/[#]/), k = new RegExp(/^(https:)?\/\//i),
                    l = f.test(a), m = g.test(a);
                return j = k.test(a), d = a.split(/[?#]/).map(c), i.length > 0 && (i = i.reduce(b, null)), e.length > 0 && (e = e.reduce(b, null), e.forEach(function (a) {
                    h[a.key] = a.value
                })), a
            }

            var f = void 0, h = void 0, i = void 0, j = void 0;
            return f = {initialize: a, parseURI: e, getURIFragmentData: b, getURIQueryData: c, isManifestHTTPS: d}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(173), g = d(f), h = a(10), i = d(h);
        e.__dashjs_factory_name = "URIQueryAndFragmentModel", c.default = i.default.getSingletonFactory(e), b.exports = c.default
    }, {10: 10, 173: 173}],
    104: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a() {
                v = []
            }

            function b(a) {
                !s || s.readyState < 2 || (s.playbackRate = a)
            }

            function c(a) {
                if (s.currentTime != a) try {
                    s.currentTime = a
                } catch (b) {
                    0 === s.readyState && b.code === b.INVALID_STATE_ERR && setTimeout(function () {
                        s.currentTime = a
                    }, 400)
                }
            }

            function d() {
                return s
            }

            function e(a) {
                s = a, s.preload = "auto"
            }

            function f(a) {
                a ? s.src = a : (s.removeAttribute("src"), s.load())
            }

            function g() {
                return s.src
            }

            function h() {
                return u
            }

            function i(a) {
                u = a
            }

            function j() {
                return t
            }

            function k(a) {
                t = a, t.style.position = "absolute", t.style.display = "flex", t.style.overflow = "hidden", t.style.pointerEvents = "none", t.style.top = 0, t.style.left = 0
            }

            function l(a, b) {
                p(a, b)
            }

            function m() {
                return v.length > 0
            }

            function n(a) {
                var c = void 0;
                null === a || s.seeking || v.indexOf(a) !== -1 || (v.push(a), 1 === v.length && (c = document.createEvent("Event"), c.initEvent("waiting", !0, !1), w = s.playbackRate, b(0), s.dispatchEvent(c)))
            }

            function o(a) {
                var c = v.indexOf(a), d = void 0;
                null !== a && (c !== -1 && v.splice(c, 1), m() === !1 && 0 === s.playbackRate && (d = document.createEvent("Event"), d.initEvent("playing", !0, !1), b(w || 1), s.dispatchEvent(d)))
            }

            function p(a, b) {
                b ? n(a) : o(a)
            }

            function q() {
                var a = "webkitDroppedFrameCount" in s, b = "getVideoPlaybackQuality" in s, c = null;
                return b ? c = s.getVideoPlaybackQuality() : a && (c = {
                    droppedVideoFrames: s.webkitDroppedFrameCount,
                    creationTime: new Date
                }), c
            }

            var r = void 0, s = void 0, t = void 0, u = void 0, v = void 0, w = void 0;
            return r = {
                initialize: a,
                setCurrentTime: c,
                setStallState: l,
                getElement: d,
                setElement: e,
                setSource: f,
                getSource: g,
                getVideoContainer: h,
                setVideoContainer: i,
                getTTMLRenderingDiv: j,
                setTTMLRenderingDiv: k,
                getPlaybackQuality: q
            }
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(10), g = d(f);
        e.__dashjs_factory_name = "VideoModel", c.default = g.default.getSingletonFactory(e), b.exports = c.default
    }, {10: 10}],
    105: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = function () {
            function a(a, b) {
                for (var c = 0; c < b.length; c++) {
                    var d = b[c];
                    d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                }
            }

            return function (b, c, d) {
                return c && a(b.prototype, c), d && a(b, d), b
            }
        }(), g = a(1), h = d(g), i = function () {
            function a() {
                e(this, a)
            }

            return f(a, null, [{
                key: "findCencContentProtection", value: function (a) {
                    for (var b = null, c = 0; c < a.length; ++c) {
                        var d = a[c];
                        "urn:mpeg:dash:mp4protection:2011" === d.schemeIdUri.toLowerCase() && "cenc" === d.value.toLowerCase() && (b = d)
                    }
                    return b
                }
            }, {
                key: "getPSSHData", value: function (a) {
                    var b = 8, c = new DataView(a), d = c.getUint8(b);
                    return b += 20, d > 0 && (b += 4 + 16 * c.getUint32(b)), b += 4, a.slice(b)
                }
            }, {
                key: "getPSSHForKeySystem", value: function (b, c) {
                    var d = a.parsePSSHList(c);
                    return d.hasOwnProperty(b.uuid.toLowerCase()) ? d[b.uuid.toLowerCase()] : null
                }
            }, {
                key: "parseInitDataFromContentProtection", value: function (a) {
                    return "pssh" in a ? h.default.decodeArray(a.pssh.__text).buffer : null
                }
            }, {
                key: "parsePSSHList", value: function (a) {
                    if (null === a) return [];
                    for (var b = new DataView(a), c = !1, d = {}, e = 0; !c;) {
                        var f, g, h, i, j, k = e;
                        if (e >= b.buffer.byteLength) break;
                        if (f = b.getUint32(e), g = e + f, e += 4, 1886614376 === b.getUint32(e)) if (e += 4, h = b.getUint8(e), 0 === h || 1 === h) {
                            e++, e += 3, i = "";
                            var l, m;
                            for (l = 0; l < 4; l++) m = b.getUint8(e + l).toString(16), i += 1 === m.length ? "0" + m : m;
                            for (e += 4, i += "-", l = 0; l < 2; l++) m = b.getUint8(e + l).toString(16), i += 1 === m.length ? "0" + m : m;
                            for (e += 2, i += "-", l = 0; l < 2; l++) m = b.getUint8(e + l).toString(16), i += 1 === m.length ? "0" + m : m;
                            for (e += 2, i += "-", l = 0; l < 2; l++) m = b.getUint8(e + l).toString(16), i += 1 === m.length ? "0" + m : m;
                            for (e += 2, i += "-", l = 0; l < 6; l++) m = b.getUint8(e + l).toString(16), i += 1 === m.length ? "0" + m : m;
                            e += 6, i = i.toLowerCase(), j = b.getUint32(e), e += 4, d[i] = b.buffer.slice(k, g), e = g
                        } else e = g; else e = g
                    }
                    return d
                }
            }]), a
        }();
        c.default = i, b.exports = c.default
    }, {1: 1}],
    106: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a(a) {
                var c = null, d = (0, i.default)(e).getInstance();
                d.setConfig({log: a.log}), d.initialize();
                var f = b(a);
                return !c && f && (c = (0, g.default)(e).create({
                    protectionModel: f,
                    protectionKeyController: d,
                    adapter: a.adapter,
                    eventBus: a.eventBus,
                    log: a.log
                }), a.capabilities.setEncryptedMediaSupported(!0)), c
            }

            function b(a) {
                var b = a.log, d = a.eventBus, f = a.videoModel.getElement();
                return void 0 !== f.onencrypted && void 0 !== f.mediaKeys && void 0 !== navigator.requestMediaKeySystemAccess && "function" == typeof navigator.requestMediaKeySystemAccess ? (b("EME detected on this user agent! (ProtectionModel_21Jan2015)"), (0, m.default)(e).create({
                    log: b,
                    eventBus: d
                })) : c(f, u) ? (b("EME detected on this user agent! (ProtectionModel_3Feb2014)"), (0, o.default)(e).create({
                    log: b,
                    eventBus: d,
                    api: c(f, u)
                })) : c(f, t) ? (b("EME detected on this user agent! (ProtectionModel_01b)"), (0, q.default)(e).create({
                    log: b,
                    eventBus: d,
                    api: c(f, t)
                })) : (b("No supported version of EME detected on this user agent! - Attempts to play encrypted content will fail!"), null)
            }

            function c(a, b) {
                for (var c = 0; c < b.length; c++) {
                    var d = b[c];
                    if ("function" == typeof a[d[Object.keys(d)[0]]]) return d
                }
                return null
            }

            var d = void 0, e = this.context;
            return d = {createProtectionSystem: a}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(108), g = d(f), h = a(109), i = d(h), j = a(107), k = d(j), l = a(114), m = d(l), n = a(115),
            o = d(n), p = a(113), q = d(p), r = a(10), s = d(r), t = [{
                generateKeyRequest: "generateKeyRequest",
                addKey: "addKey",
                cancelKeyRequest: "cancelKeyRequest",
                needkey: "needkey",
                keyerror: "keyerror",
                keyadded: "keyadded",
                keymessage: "keymessage"
            }, {
                generateKeyRequest: "webkitGenerateKeyRequest",
                addKey: "webkitAddKey",
                cancelKeyRequest: "webkitCancelKeyRequest",
                needkey: "webkitneedkey",
                keyerror: "webkitkeyerror",
                keyadded: "webkitkeyadded",
                keymessage: "webkitkeymessage"
            }], u = [{
                setMediaKeys: "setMediaKeys",
                MediaKeys: "MediaKeys",
                release: "close",
                needkey: "needkey",
                error: "keyerror",
                message: "keymessage",
                ready: "keyadded",
                close: "keyclose"
            }, {
                setMediaKeys: "msSetMediaKeys",
                MediaKeys: "MSMediaKeys",
                release: "close",
                needkey: "msneedkey",
                error: "mskeyerror",
                message: "mskeymessage",
                ready: "mskeyadded",
                close: "mskeyclose"
            }];
        e.__dashjs_factory_name = "Protection";
        var v = s.default.getClassFactory(e);
        v.events = k.default, c.default = v, b.exports = c.default
    }, {10: 10, 107: 107, 108: 108, 109: 109, 113: 113, 114: 114, 115: 115}],
    107: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        function f(a, b) {
            if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var g = function (a, b, c) {
            for (var d = !0; d;) {
                var e = a, f = b, g = c;
                d = !1, null === e && (e = Function.prototype);
                var h = Object.getOwnPropertyDescriptor(e, f);
                if (void 0 !== h) {
                    if ("value" in h) return h.value;
                    var i = h.get;
                    if (void 0 === i) return;
                    return i.call(g)
                }
                var j = Object.getPrototypeOf(e);
                if (null === j) return;
                a = j, b = f, c = g, d = !0, h = j = void 0
            }
        }, h = a(14), i = d(h), j = function (a) {
            function b() {
                e(this, b), g(Object.getPrototypeOf(b.prototype), "constructor", this).call(this), this.INTERNAL_KEY_MESSAGE = "internalKeyMessage", this.INTERNAL_KEY_SYSTEM_SELECTED = "internalKeySystemSelected", this.KEY_ADDED = "public_keyAdded", this.KEY_ERROR = "public_keyError", this.KEY_MESSAGE = "public_keyMessage", this.KEY_SESSION_CLOSED = "public_keySessionClosed", this.KEY_SESSION_CREATED = "public_keySessionCreated", this.KEY_SESSION_REMOVED = "public_keySessionRemoved", this.KEY_STATUSES_CHANGED = "public_keyStatusesChanged", this.KEY_SYSTEM_ACCESS_COMPLETE = "keySystemAccessComplete", this.KEY_SYSTEM_SELECTED = "public_keySystemSelected", this.LICENSE_REQUEST_COMPLETE = "public_licenseRequestComplete", this.NEED_KEY = "needkey", this.PROTECTION_CREATED = "public_protectioncreated", this.PROTECTION_DESTROYED = "public_protectiondestroyed", this.SERVER_CERTIFICATE_UPDATED = "serverCertificateUpdated", this.TEARDOWN_COMPLETE = "protectionTeardownComplete", this.VIDEO_ELEMENT_SELECTED = "videoElementSelected"
            }

            return f(b, a), b
        }(i.default), k = new j;
        c.default = k, b.exports = c.default
    }, {14: 14}],
    108: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a) {
            function b() {
                D = x.getKeySystems(), E = [], I = !1, J = "temporary", K = "", i.default.extend(q.default.events)
            }

            function c(a, b, c) {
                if (!I) {
                    var d;
                    b || c || (d = z.getStreamsInfo(a)[0]), F = b || (d ? z.getMediaInfoForType(a, d, "audio") : null), G = c || (d ? z.getMediaInfoForType(a, d, "video") : null);
                    var e = G ? G : F, f = x.getSupportedKeySystemsFromContentProtection(e.contentProtection);
                    f && f.length > 0 && t(f, !0), I = !0
                }
            }

            function d(a) {
                var b = g.default.getPSSHForKeySystem(L, a);
                if (b) {
                    for (var c = y.getAllInitData(), d = 0; d < c.length; d++) if (x.initDataEquals(b, c[d])) return void B("DRM: Ignoring initData because we have already seen it!");
                    try {
                        y.createKeySession(b, J)
                    } catch (e) {
                        A.trigger(i.default.KEY_SESSION_CREATED, {
                            data: null,
                            error: "Error creating key session! " + e.message
                        })
                    }
                } else A.trigger(i.default.KEY_SESSION_CREATED, {
                    data: null,
                    error: "Selected key system is " + L.systemString + ".  needkey/encrypted event contains no initData corresponding to that key system!"
                })
            }

            function e(a) {
                y.loadKeySession(a)
            }

            function f(a) {
                y.removeKeySession(a)
            }

            function h(a) {
                y.closeKeySession(a)
            }

            function j(a) {
                y.setServerCertificate(a)
            }

            function l(a) {
                a ? (y.setMediaElement(a), A.on(i.default.NEED_KEY, w, this), A.on(i.default.INTERNAL_KEY_MESSAGE, v, this)) : null === a && (y.setMediaElement(a), A.off(i.default.NEED_KEY, w, this), A.off(i.default.INTERNAL_KEY_MESSAGE, v, this))
            }

            function n(a) {
                J = a
            }

            function o(a) {
                K = a
            }

            function p(a) {
                H = a
            }

            function r() {
                l(null), L = void 0, y && (y.reset(), y = null)
            }

            function s(a) {
                var b = null, c = a.systemString;
                return H && (b = c in H ? H[c] : null), b
            }

            function t(a, b) {
                var c = this, e = [], f = [];
                G && f.push(new k.default(G.codec, K)), F && e.push(new k.default(F.codec, K));
                var g, h = new m.default(e, f, "optional", "temporary" === J ? "optional" : "required", [J]), j = [];
                if (L) {
                    for (g = 0; g < a.length; g++) if (L === a[g].ks) {
                        var l = function () {
                            j.push({ks: a[g].ks, configs: [h]});
                            var e = function e(f) {
                                A.off(i.default.KEY_SYSTEM_ACCESS_COMPLETE, e, c), f.error ? b || A.trigger(i.default.KEY_SYSTEM_SELECTED, {error: "DRM: KeySystem Access Denied! -- " + f.error}) : (B("DRM: KeySystem Access Granted"), A.trigger(i.default.KEY_SYSTEM_SELECTED, {data: f.data}), d(a[g].initData))
                            };
                            return A.on(i.default.KEY_SYSTEM_ACCESS_COMPLETE, e, c), y.requestKeySystemAccess(j), "break"
                        }();
                        if ("break" === l) break
                    }
                } else if (void 0 === L) {
                    L = null, E.push(a);
                    for (var n = 0; n < a.length; n++) j.push({ks: a[n].ks, configs: [h]});
                    var o, p = function a(d) {
                        A.off(i.default.KEY_SYSTEM_ACCESS_COMPLETE, a, c), d.error ? (L = void 0, A.off(i.default.INTERNAL_KEY_SYSTEM_SELECTED, q, c), b || A.trigger(i.default.KEY_SYSTEM_SELECTED, {
                            data: null,
                            error: "DRM: KeySystem Access Denied! -- " + d.error
                        })) : (o = d.data, B("DRM: KeySystem Access Granted (" + o.keySystem.systemString + ")!  Selecting key system..."), y.selectKeySystem(o))
                    }, q = function a(e) {
                        if (A.off(i.default.INTERNAL_KEY_SYSTEM_SELECTED, a, c), A.off(i.default.KEY_SYSTEM_ACCESS_COMPLETE, p, c), e.error) L = void 0, b || A.trigger(i.default.KEY_SYSTEM_SELECTED, {
                            data: null,
                            error: "DRM: Error selecting key system! -- " + e.error
                        }); else {
                            L = y.getKeySystem(), A.trigger(i.default.KEY_SYSTEM_SELECTED, {data: o});
                            for (var f = 0; f < E.length; f++) for (g = 0; g < E[f].length; g++) if (L === E[f][g].ks) {
                                d(E[f][g].initData);
                                break
                            }
                        }
                    };
                    A.on(i.default.INTERNAL_KEY_SYSTEM_SELECTED, q, c), A.on(i.default.KEY_SYSTEM_ACCESS_COMPLETE, p, c), y.requestKeySystemAccess(j)
                } else E.push(a)
            }

            function u(a, b) {
                A.trigger(i.default.LICENSE_REQUEST_COMPLETE, {data: a, error: b})
            }

            function v(a) {
                if (B("DRM: onKeyMessage"), a.error) return void B(a.error);
                var b = a.data;
                A.trigger(i.default.KEY_MESSAGE, {data: b});
                var c = b.messageType ? b.messageType : "license-request", d = b.message, e = b.sessionToken, f = s(L),
                    h = L.systemString, j = x.getLicenseServer(L, f, c), k = {sessionToken: e, messageType: c};
                if (!j) return B("DRM: License server request not required for this message (type = " + a.data.messageType + ").  Session ID = " + e.getSessionID()), void u(k);
                if (x.isClearKey(L)) {
                    var l = x.processClearKeyLicenseRequest(f, d);
                    if (l) return B("DRM: ClearKey license request handled by application!"), u(k), void y.updateKeySession(e, l)
                }
                var m = new XMLHttpRequest, n = null;
                if (f) if (f.serverURL) {
                    var o = f.serverURL;
                    "string" == typeof o && "" !== o ? n = o : "object" == typeof o && o.hasOwnProperty(c) && (n = o[c])
                } else f.laURL && "" !== f.laURL && (n = f.laURL); else n = L.getLicenseServerURLFromInitData(g.default.getPSSHData(e.initData)), n || (n = a.data.laURL);
                if (n = j.getServerURLFromMessage(n, d, c), !n) return void u(k, "DRM: No license server URL specified!");
                m.open(j.getHTTPMethod(c), n, !0), m.responseType = j.getResponseType(h, c), m.onload = function () {
                    200 == this.status ? (u(k), y.updateKeySession(e, j.getLicenseMessage(this.response, h, c))) : u(k, "DRM: " + h + ' update, XHR status is "' + this.statusText + '" (' + this.status + "), expected to be 200. readyState is " + this.readyState + ".  Response is " + (this.response ? j.getErrorResponse(this.response, h, c) : "NONE"))
                }, m.onabort = function () {
                    u(k, "DRM: " + h + ' update, XHR aborted. status is "' + this.statusText + '" (' + this.status + "), readyState is " + this.readyState)
                }, m.onerror = function () {
                    u(k, "DRM: " + h + ' update, XHR error. status is "' + this.statusText + '" (' + this.status + "), readyState is " + this.readyState)
                };
                var p = function (a) {
                    var b;
                    if (a) for (b in a) "authorization" === b.toLowerCase() && (m.withCredentials = !0), m.setRequestHeader(b, a[b])
                };
                f && p(f.httpRequestHeaders), p(L.getRequestHeadersFromMessage(d)), f && f.withCredentials && (m.withCredentials = !0), m.send(L.getLicenseRequestFromMessage(d))
            }

            function w(a) {
                if (B("DRM: onNeedKey"), "cenc" !== a.key.initDataType) return void B("DRM:  Only 'cenc' initData is supported!  Ignoring initData of type: " + a.key.initDataType);
                var b = a.key.initData;
                ArrayBuffer.isView(b) && (b = b.buffer), B("DRM: initData:", String.fromCharCode.apply(null, new Uint8Array(b)));
                var c = x.getSupportedKeySystems(b, H);
                return 0 === c.length ? void B("DRM: Received needkey event with initData, but we don't support any of the key systems!") : void t(c, !1)
            }

            var x = a.protectionKeyController, y = a.protectionModel, z = a.adapter, A = a.eventBus, B = a.log,
                C = void 0, D = void 0, E = void 0, F = void 0, G = void 0, H = void 0, I = void 0, J = void 0,
                K = void 0, L = void 0;
            return C = {
                initialize: c,
                createKeySession: d,
                loadKeySession: e,
                removeKeySession: f,
                closeKeySession: h,
                setServerCertificate: j,
                setMediaElement: l,
                setSessionType: n,
                setRobustnessLevel: o,
                setProtectionData: p,
                reset: r
            }, b(), C
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(105), g = d(f), h = a(13), i = d(h), j = a(126), k = d(j), l = a(125), m = d(l), n = a(10), o = d(n),
            p = a(106), q = d(p);
        e.__dashjs_factory_name = "ProtectionController", c.default = o.default.getClassFactory(e), b.exports = c.default
    }, {10: 10, 105: 105, 106: 106, 125: 125, 126: 126, 13: 13}],
    109: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a(a) {
                a && a.log && (t = a.log)
            }

            function b() {
                v = [];
                var a;
                a = (0, m.default)(p).getInstance(), v.push(a), a = (0, k.default)(p).getInstance(), v.push(a), a = (0, i.default)(p).getInstance(), v.push(a), w = a
            }

            function c() {
                return v
            }

            function d(a) {
                for (var b = 0; b < v.length; b++) if (v[b].systemString === a) return v[b];
                return null
            }

            function e(a) {
                return a === w
            }

            function f(a, b) {
                if (a.byteLength === b.byteLength) {
                    for (var c = new Uint8Array(a), d = new Uint8Array(b), e = 0; e < c.length; e++) if (c[e] !== d[e]) return !1;
                    return !0
                }
                return !1
            }

            function h(a) {
                var b, c, d, e, f = [];
                if (a) for (d = 0; d < v.length; ++d) for (c = v[d], e = 0; e < a.length; ++e) if (b = a[e], b.schemeIdUri.toLowerCase() === c.schemeIdURI) {
                    var g = c.getInitData(b);
                    g && f.push({ks: v[d], initData: g})
                }
                return f
            }

            function j(a, b) {
                var c, d = [], e = g.default.parsePSSHList(a);
                for (c = 0; c < v.length; ++c) {
                    var f = v[c].systemString, h = !b || f in b;
                    v[c].uuid in e && h && d.push({ks: v[c], initData: e[v[c].uuid]})
                }
                return d
            }

            function l(a, b, c) {
                if ("license-release" === c || "individualization-request" === c) return null;
                var d = null;
                return b && b.hasOwnProperty("drmtoday") ? d = (0, o.default)(p).getInstance() : "com.widevine.alpha" === a.systemString ? d = (0, s.default)(p).getInstance() : "com.microsoft.playready" === a.systemString ? d = (0, q.default)(p).getInstance() : "org.w3.clearkey" === a.systemString && (d = (0, u.default)(p).getInstance()), d
            }

            function n(a, b) {
                try {
                    return w.getClearKeysFromProtectionData(a, b)
                } catch (c) {
                    return t("Failed to retrieve clearkeys from ProtectionData"), null
                }
            }

            var p = this.context, r = void 0, t = void 0, v = void 0, w = void 0;
            return r = {
                initialize: b,
                isClearKey: e,
                initDataEquals: f,
                getKeySystems: c,
                getKeySystemBySystemString: d,
                getSupportedKeySystemsFromContentProtection: h,
                getSupportedKeySystems: j,
                getLicenseServer: l,
                processClearKeyLicenseRequest: n,
                setConfig: a
            }
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(105), g = d(f), h = a(110), i = d(h), j = a(112), k = d(j), l = a(111), m = d(l), n = a(117),
            o = d(n), p = a(118), q = d(p), r = a(119), s = d(r), t = a(116), u = d(t), v = a(10), w = d(v);
        e.__dashjs_factory_name = "ProtectionKeyController", c.default = w.default.getSingletonFactory(e), b.exports = c.default
    }, {10: 10, 105: 105, 110: 110, 111: 111, 112: 112, 116: 116, 117: 117, 118: 118, 119: 119}],
    110: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a(a, b) {
                var c = null;
                if (a) {
                    for (var d = JSON.parse(String.fromCharCode.apply(null, new Uint8Array(b))), e = [], f = 0; f < d.kids.length; f++) {
                        var h = d.kids[f], j = a.clearkeys.hasOwnProperty(h) ? a.clearkeys[h] : null;
                        if (!j) throw new Error("DRM: ClearKey keyID (" + h + ") is not known!");
                        e.push(new g.default(h, j))
                    }
                    c = new i.default(e)
                }
                return c
            }

            function b(a) {
                return k.default.parseInitDataFromContentProtection(a)
            }

            function c() {
                return null
            }

            function d(a) {
                return new Uint8Array(a)
            }

            function e() {
                return null
            }

            var f = void 0;
            return f = {
                uuid: n,
                schemeIdURI: p,
                systemString: o,
                getInitData: b,
                getRequestHeadersFromMessage: c,
                getLicenseRequestFromMessage: d,
                getLicenseServerURLFromInitData: e,
                getClearKeysFromProtectionData: a
            }
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(123), g = d(f), h = a(120), i = d(h), j = a(105), k = d(j), l = a(10), m = d(l),
            n = "1077efec-c0b2-4d02-ace3-3c1e52e2fb4b", o = "org.w3.clearkey", p = "urn:uuid:" + n;
        e.__dashjs_factory_name = "KeySystemClearKey", c.default = m.default.getSingletonFactory(e), b.exports = c.default
    }, {10: 10, 105: 105, 120: 120, 123: 123}],
    111: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a(a) {
                var b, c, d = {}, e = new DOMParser, f = "utf16" === h ? new Uint16Array(a) : new Uint8Array(a);
                b = String.fromCharCode.apply(null, f), c = e.parseFromString(b, "application/xml");
                for (var g = c.getElementsByTagName("name"), i = c.getElementsByTagName("value"), j = 0; j < g.length; j++) d[g[j].childNodes[0].nodeValue] = i[j].childNodes[0].nodeValue;
                return d.hasOwnProperty("Content") && (d["Content-Type"] = d.Content, delete d.Content), d
            }

            function b(a) {
                var b, c, d = null, e = new DOMParser, f = "utf16" === h ? new Uint16Array(a) : new Uint8Array(a);
                if (b = String.fromCharCode.apply(null, f), c = e.parseFromString(b, "application/xml"), c.getElementsByTagName("Challenge")[0]) {
                    var g = c.getElementsByTagName("Challenge")[0].childNodes[0].nodeValue;
                    g && (d = m.default.decode(g))
                }
                return d
            }

            function c(a) {
                if (a) for (var b = new DataView(a), c = b.getUint16(4, !0), d = 6, e = new DOMParser, f = 0; f < c; f++) {
                    var g = b.getUint16(d, !0);
                    d += 2;
                    var h = b.getUint16(d, !0);
                    if (d += 2, 1 === g) {
                        var i = a.slice(d, d + h), j = String.fromCharCode.apply(null, new Uint16Array(i)),
                            k = e.parseFromString(j, "application/xml");
                        if (k.getElementsByTagName("LA_URL")[0]) {
                            var l = k.getElementsByTagName("LA_URL")[0].childNodes[0].nodeValue;
                            if (l) return l
                        }
                        if (k.getElementsByTagName("LUI_URL")[0]) {
                            var m = k.getElementsByTagName("LUI_URL")[0].childNodes[0].nodeValue;
                            if (m) return m
                        }
                    } else d += h
                }
                return null
            }

            function d(a) {
                var b, c, d, e, f, h = new Uint8Array([112, 115, 115, 104, 0, 0, 0, 0]),
                    i = new Uint8Array([154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95, 149]),
                    j = 0, k = null;
                if ("pssh" in a) return g.default.parseInitDataFromContentProtection(a);
                if ("pro" in a) k = m.default.decodeArray(a.pro.__text); else {
                    if (!("prheader" in a)) return null;
                    k = m.default.decodeArray(a.prheader.__text)
                }
                return b = k.length, c = 4 + h.length + i.length + 4 + b, d = new ArrayBuffer(c), e = new Uint8Array(d), f = new DataView(d), f.setUint32(j, c), j += 4, e.set(h, j), j += h.length, e.set(i, j), j += i.length, f.setUint32(j, b), j += 4, e.set(k, j), j += b, e.buffer
            }

            function e(a) {
                if ("utf8" !== a && "utf16" !== a) throw new i.default("Illegal PlayReady message format! -- " + a);
                h = a
            }

            var f = void 0, h = "utf16";
            return f = {
                uuid: n,
                schemeIdURI: p,
                systemString: o,
                getInitData: d,
                getRequestHeadersFromMessage: a,
                getLicenseRequestFromMessage: b,
                getLicenseServerURLFromInitData: c,
                setPlayReadyMessageFormat: e
            }
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(105), g = d(f), h = a(162), i = d(h), j = a(10), k = d(j), l = a(1), m = d(l),
            n = "9a04f079-9840-4286-ab92-e65be0885f95", o = "com.microsoft.playready", p = "urn:uuid:" + n;
        e.__dashjs_factory_name = "KeySystemPlayReady", c.default = k.default.getSingletonFactory(e), b.exports = c.default
    }, {1: 1, 10: 10, 105: 105, 162: 162}],
    112: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a(a) {
                return g.default.parseInitDataFromContentProtection(a)
            }

            function b() {
                return null
            }

            function c(a) {
                return new Uint8Array(a)
            }

            function d() {
                return null
            }

            var e = void 0;
            return e = {
                uuid: j,
                schemeIdURI: l,
                systemString: k,
                getInitData: a,
                getRequestHeadersFromMessage: b,
                getLicenseRequestFromMessage: c,
                getLicenseServerURLFromInitData: d
            }
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(105), g = d(f), h = a(10), i = d(h), j = "edef8ba9-79d6-4ace-a3c8-27dcd51d21ed",
            k = "com.widevine.alpha", l = "urn:uuid:" + j;
        e.__dashjs_factory_name = "KeySystemWidevine", c.default = i.default.getSingletonFactory(e), b.exports = c.default
    }, {10: 10, 105: 105}],
    113: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a) {
            function b() {
                E = null, F = null, I = [], J = [], G = (0, g.default)(z).getInstance(), H = (0, u.default)(z).getInstance(), L = w()
            }

            function c() {
                E && y();
                for (var a = 0; a < J.length; a++) p(J[a]);
                A.trigger(s.default.TEARDOWN_COMPLETE)
            }

            function d() {
                return F
            }

            function e() {
                for (var a = [], b = 0; b < I.length; b++) a.push(I[b].initData);
                for (var b = 0; b < J.length; b++) a.push(J[b].initData);
                return a
            }

            function f(a) {
                var b = E;
                b || (b = document.createElement("video"));
                for (var c = !1, d = 0; d < a.length; d++) for (var e = a[d].ks.systemString, f = a[d].configs, g = null, h = null, i = 0; i < f.length; i++) {
                    var j = f[i].videoCapabilities;
                    if (j && 0 !== j.length) {
                        h = [];
                        for (var k = 0; k < j.length; k++) "" !== b.canPlayType(j[k].contentType, e) && h.push(j[k])
                    }
                    if (!(!g && !h || g && 0 === g.length || h && 0 === h.length)) {
                        c = !0;
                        var l = new o.default(g, h), m = G.getKeySystemBySystemString(e);
                        A.trigger(s.default.KEY_SYSTEM_ACCESS_COMPLETE, {data: new q.default(m, l)});
                        break
                    }
                }
                c || A.trigger(s.default.KEY_SYSTEM_ACCESS_COMPLETE, {error: "Key system access denied! -- No valid audio/video content configurations detected!"})
            }

            function h(a) {
                F = a.keySystem, A.trigger(s.default.INTERNAL_KEY_SYSTEM_SELECTED)
            }

            function j(a) {
                E !== a && (E && y(), E = a, E && (E.addEventListener(C.keyerror, L), E.addEventListener(C.needkey, L), E.addEventListener(C.keymessage, L), E.addEventListener(C.keyadded, L), A.trigger(s.default.VIDEO_ELEMENT_SELECTED)))
            }

            function l(a) {
                if (!F) throw new Error("Can not create sessions until you have selected a key system");
                if (K || 0 === J.length) {
                    var b = {
                        sessionID: null, initData: a, getSessionID: function () {
                            return this.sessionID
                        }, getExpirationTime: function () {
                            return NaN
                        }, getSessionType: function () {
                            return "temporary"
                        }
                    };
                    return I.push(b), E[C.generateKeyRequest](F.systemString, new Uint8Array(a)), b
                }
                throw new Error("Multiple sessions not allowed!")
            }

            function n(a, b) {
                var c = a.sessionID;
                if (G.isClearKey(F)) for (var d = 0; d < b.keyPairs.length; d++) E[C.addKey](F.systemString, b.keyPairs[d].key, b.keyPairs[d].keyID, c); else E[C.addKey](F.systemString, new Uint8Array(b), a.initData, c)
            }

            function p(a) {
                E[C.cancelKeyRequest](F.systemString, a.sessionID)
            }

            function r() {
            }

            function t() {
            }

            function v() {
            }

            function w() {
                return {
                    handleEvent: function (a) {
                        var b = null;
                        switch (a.type) {
                            case C.needkey:
                                var c = ArrayBuffer.isView(a.initData) ? a.initData.buffer : a.initData;
                                A.trigger(s.default.NEED_KEY, {key: new i.default(c, "cenc")});
                                break;
                            case C.keyerror:
                                if (b = x(J, a.sessionId), b || (b = x(I, a.sessionId)), b) {
                                    var d = "";
                                    switch (a.errorCode.code) {
                                        case 1:
                                            d += "MEDIA_KEYERR_UNKNOWN - An unspecified error occurred. This value is used for errors that don't match any of the other codes.";
                                            break;
                                        case 2:
                                            d += "MEDIA_KEYERR_CLIENT - The Key System could not be installed or updated.";
                                            break;
                                        case 3:
                                            d += "MEDIA_KEYERR_SERVICE - The message passed into update indicated an error from the license service.";
                                            break;
                                        case 4:
                                            d += "MEDIA_KEYERR_OUTPUT - There is no available output device with the required characteristics for the content protection system.";
                                            break;
                                        case 5:
                                            d += "MEDIA_KEYERR_HARDWARECHANGE - A hardware configuration change caused a content protection error.";
                                            break;
                                        case 6:
                                            d += "MEDIA_KEYERR_DOMAIN - An error occurred in a multi-device domain licensing configuration. The most common error is a failure to join the domain."
                                    }
                                    d += "  System Code = " + a.systemCode, A.trigger(s.default.KEY_ERROR, {data: new k.default(b, d)})
                                } else B("No session token found for key error");
                                break;
                            case C.keyadded:
                                b = x(J, a.sessionId), b || (b = x(I, a.sessionId)), b ? (B("DRM: Key added."), A.trigger(s.default.KEY_ADDED, {data: b})) : B("No session token found for key added");
                                break;
                            case C.keymessage:
                                if (K = null !== a.sessionId && void 0 !== a.sessionId, K ? (b = x(J, a.sessionId), !b && I.length > 0 && (b = I.shift(), J.push(b), b.sessionID = a.sessionId)) : I.length > 0 && (b = I.shift(), J.push(b), 0 !== I.length && H.mediaKeyMessageError("Multiple key sessions were creates with a user-agent that does not support sessionIDs!! Unpredictable behavior ahead!")), b) {
                                    var e = ArrayBuffer.isView(a.message) ? a.message.buffer : a.message;
                                    b.keyMessage = e, A.trigger(s.default.INTERNAL_KEY_MESSAGE, {data: new m.default(b, e, a.defaultURL)})
                                } else B("No session token found for key message")
                        }
                    }
                }
            }

            function x(a, b) {
                if (b && a) {
                    for (var c = a.length, d = 0; d < c; d++) if (a[d].sessionID == b) return a[d];
                    return null
                }
                return null
            }

            function y() {
                E.removeEventListener(C.keyerror, L), E.removeEventListener(C.needkey, L), E.removeEventListener(C.keymessage, L), E.removeEventListener(C.keyadded, L)
            }

            var z = this.context, A = a.eventBus, B = a.log, C = a.api, D = void 0, E = void 0, F = void 0, G = void 0,
                H = void 0, I = void 0, J = void 0, K = void 0, L = void 0;
            return D = {
                getAllInitData: e,
                requestKeySystemAccess: f,
                getKeySystem: d,
                selectKeySystem: h,
                setMediaElement: j,
                createKeySession: l,
                updateKeySession: n,
                closeKeySession: p,
                setServerCertificate: r,
                loadKeySession: t,
                removeKeySession: v,
                reset: c
            }, b(), D
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(109), g = d(f), h = a(127), i = d(h), j = a(121), k = d(j), l = a(122), m = d(l), n = a(125),
            o = d(n), p = a(124), q = d(p), r = a(13), s = d(r), t = a(151), u = d(t), v = a(10), w = d(v);
        e.__dashjs_factory_name = "ProtectionModel_01b", c.default = w.default.getClassFactory(e), b.exports = c.default
    }, {10: 10, 109: 109, 121: 121, 122: 122, 124: 124, 125: 125, 127: 127, 13: 13, 151: 151}],
    114: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a) {
            function b() {
                A = null, B = null, C = null, D = [], F = (0, g.default)(G).getInstance(), E = w()
            }

            function c() {
                var a, b = D.length;
                if (0 !== b) for (var c = function (a) {
                    x(a), 0 === D.length && (B ? (B.removeEventListener("encrypted", E), B.setMediaKeys(null).then(function () {
                        H.trigger(q.default.TEARDOWN_COMPLETE)
                    })) : H.trigger(q.default.TEARDOWN_COMPLETE))
                }, d = 0; d < b; d++) a = D[d], function (b) {
                    a.session.closed.then(function () {
                        c(b)
                    }), v(a).catch(function () {
                        c(b)
                    })
                }(a); else H.trigger(q.default.TEARDOWN_COMPLETE)
            }

            function d() {
                return A
            }

            function e() {
                for (var a = [], b = 0; b < D.length; b++) a.push(D[b].initData);
                return a
            }

            function f(a) {
                u(a, 0)
            }

            function h(a) {
                a.mksa.createMediaKeys().then(function (b) {
                    A = a.keySystem, C = b, B && B.setMediaKeys(C), H.trigger(q.default.INTERNAL_KEY_SYSTEM_SELECTED)
                }).catch(function () {
                    H.trigger(q.default.INTERNAL_KEY_SYSTEM_SELECTED, {error: "Error selecting keys system (" + a.keySystem.systemString + ")! Could not create MediaKeys -- TODO"})
                })
            }

            function j(a) {
                B !== a && (B && (B.removeEventListener("encrypted", E), B.setMediaKeys(null)), B = a, B && (B.addEventListener("encrypted", E), C && B.setMediaKeys(C)))
            }

            function l(a) {
                if (!A || !C) throw new Error("Can not set server certificate until you have selected a key system");
                C.setServerCertificate(a).then(function () {
                    I("DRM: License server certificate successfully updated."), H.trigger(q.default.SERVER_CERTIFICATE_UPDATED)
                }).catch(function (a) {
                    H.trigger(q.default.SERVER_CERTIFICATE_UPDATED, {error: "Error updating server certificate -- " + a.name})
                })
            }

            function n(a, b) {
                if (!A || !C) throw new Error("Can not create sessions until you have selected a key system");
                var c = C.createSession(b), d = y(c, a, b);
                c.generateRequest("cenc", a).then(function () {
                    I("DRM: Session created.  SessionID = " + d.getSessionID()), H.trigger(q.default.KEY_SESSION_CREATED, {data: d})
                }).catch(function (a) {
                    x(d), H.trigger(q.default.KEY_SESSION_CREATED, {
                        data: null,
                        error: "Error generating key request -- " + a.name
                    })
                })
            }

            function p(a, b) {
                var c = a.session;
                F.isClearKey(A) && (b = b.toJWK()), c.update(b).catch(function (b) {
                    H.trigger(q.default.KEY_ERROR, {data: new k.default(a, "Error sending update() message! " + b.name)})
                })
            }

            function r(a) {
                if (!A || !C) throw new Error("Can not load sessions until you have selected a key system");
                var b = C.createSession();
                b.load(a).then(function (c) {
                    if (c) {
                        var d = y(b);
                        I("DRM: Session created.  SessionID = " + d.getSessionID()), H.trigger(q.default.KEY_SESSION_CREATED, {data: d})
                    } else H.trigger(q.default.KEY_SESSION_CREATED, {
                        data: null,
                        error: "Could not load session! Invalid Session ID (" + a + ")"
                    })
                }).catch(function (b) {
                    H.trigger(q.default.KEY_SESSION_CREATED, {
                        data: null,
                        error: "Could not load session (" + a + ")! " + b.name
                    })
                })
            }

            function s(a) {
                var b = a.session;
                b.remove().then(function () {
                    I("DRM: Session removed.  SessionID = " + a.getSessionID()), H.trigger(q.default.KEY_SESSION_REMOVED, {data: a.getSessionID()})
                }, function (b) {
                    H.trigger(q.default.KEY_SESSION_REMOVED, {
                        data: null,
                        error: "Error removing session (" + a.getSessionID() + "). " + b.name
                    })
                })
            }

            function t(a) {
                v(a).catch(function (b) {
                    x(a), H.trigger(q.default.KEY_SESSION_CLOSED, {
                        data: null,
                        error: "Error closing session (" + a.getSessionID() + ") " + b.name
                    })
                })
            }

            function u(a, b) {
                !function (b) {
                    var c = a[b].ks, d = a[b].configs;
                    navigator.requestMediaKeySystemAccess(c.systemString, d).then(function (a) {
                        var b = "function" == typeof a.getConfiguration ? a.getConfiguration() : null,
                            d = new o.default(c, b);
                        d.mksa = a, H.trigger(q.default.KEY_SYSTEM_ACCESS_COMPLETE, {data: d})
                    }).catch(function () {
                        ++b < a.length ? u(a, b) : H.trigger(q.default.KEY_SYSTEM_ACCESS_COMPLETE, {error: "Key system access denied!"})
                    })
                }(b)
            }

            function v(a) {
                var b = a.session;
                return b.removeEventListener("keystatuseschange", a), b.removeEventListener("message", a), b.close()
            }

            function w() {
                return {
                    handleEvent: function (a) {
                        switch (a.type) {
                            case"encrypted":
                                if (a.initData) {
                                    var b = ArrayBuffer.isView(a.initData) ? a.initData.buffer : a.initData;
                                    H.trigger(q.default.NEED_KEY, {key: new i.default(b, a.initDataType)})
                                }
                        }
                    }
                }
            }

            function x(a) {
                for (var b = 0; b < D.length; b++) if (D[b] === a) {
                    D.splice(b, 1);
                    break
                }
            }

            function y(a, b, c) {
                var d = {
                    session: a, initData: b, handleEvent: function (a) {
                        switch (a.type) {
                            case"keystatuseschange":
                                H.trigger(q.default.KEY_STATUSES_CHANGED, {data: this});
                                break;
                            case"message":
                                var b = ArrayBuffer.isView(a.message) ? a.message.buffer : a.message;
                                H.trigger(q.default.INTERNAL_KEY_MESSAGE, {data: new m.default(this, b, (void 0), a.messageType)})
                        }
                    }, getSessionID: function () {
                        return a.sessionId
                    }, getExpirationTime: function () {
                        return a.expiration
                    }, getKeyStatuses: function () {
                        return a.keyStatuses
                    }, getSessionType: function () {
                        return c
                    }
                };
                return a.addEventListener("keystatuseschange", d), a.addEventListener("message", d), a.closed.then(function () {
                    x(d), I("DRM: Session closed.  SessionID = " + d.getSessionID()), H.trigger(q.default.KEY_SESSION_CLOSED, {data: d.getSessionID()})
                }), D.push(d), d
            }

            var z, A, B, C, D, E, F, G = this.context, H = a.eventBus, I = a.log;
            return z = {
                getAllInitData: e,
                requestKeySystemAccess: f,
                getKeySystem: d,
                selectKeySystem: h,
                setMediaElement: j,
                setServerCertificate: l,
                createKeySession: n,
                updateKeySession: p,
                loadKeySession: r,
                removeKeySession: s,
                closeKeySession: t,
                reset: c
            }, b(), z
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(109), g = d(f), h = a(127), i = d(h), j = a(121), k = d(j), l = a(122), m = d(l), n = a(124),
            o = d(n), p = a(13), q = d(p), r = a(10), s = d(r);
        e.__dashjs_factory_name = "ProtectionModel_21Jan2015", c.default = s.default.getClassFactory(e), b.exports = c.default
    }, {10: 10, 109: 109, 121: 121, 122: 122, 124: 124, 127: 127, 13: 13}],
    115: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a) {
            function b() {
                D = null, E = null, F = null, G = null, H = [], J = (0, g.default)(y).getInstance(), I = v()
            }

            function c() {
                try {
                    for (var a = 0; a < H.length; a++) p(H[a]);
                    D && D.removeEventListener(B.needkey, I), z.trigger(s.default.TEARDOWN_COMPLETE)
                } catch (b) {
                    z.trigger(s.default.TEARDOWN_COMPLETE, {error: "Error tearing down key sessions and MediaKeys! -- " + b.message})
                }
            }

            function d() {
                return E
            }

            function e() {
                for (var a = [], b = 0; b < H.length; b++) a.push(H[b].initData);
                return a
            }

            function f(a) {
                for (var b = !1, c = 0; c < a.length; c++) for (var d = a[c].ks.systemString, e = a[c].configs, f = null, g = null, h = 0; h < e.length; h++) {
                    var i = e[h].audioCapabilities, j = e[h].videoCapabilities;
                    if (i && 0 !== i.length) {
                        f = [];
                        for (var k = 0; k < i.length; k++) window[B.MediaKeys].isTypeSupported(d, i[k].contentType) && f.push(i[k])
                    }
                    if (j && 0 !== j.length) {
                        g = [];
                        for (var l = 0; l < j.length; l++) window[B.MediaKeys].isTypeSupported(d, j[l].contentType) && g.push(j[l])
                    }
                    if (!(!f && !g || f && 0 === f.length || g && 0 === g.length)) {
                        b = !0;
                        var m = new o.default(f, g), n = J.getKeySystemBySystemString(d);
                        z.trigger(s.default.KEY_SYSTEM_ACCESS_COMPLETE, {data: new q.default(n, m)});
                        break
                    }
                }
                b || z.trigger(s.default.KEY_SYSTEM_ACCESS_COMPLETE, {error: "Key system access denied! -- No valid audio/video content configurations detected!"})
            }

            function h(a) {
                try {
                    F = a.mediaKeys = new window[B.MediaKeys](a.keySystem.systemString), E = a.keySystem, G = a, D && w(), z.trigger(s.default.INTERNAL_KEY_SYSTEM_SELECTED)
                } catch (b) {
                    z.trigger(s.default.INTERNAL_KEY_SYSTEM_SELECTED, {error: "Error selecting keys system (" + E.systemString + ")! Could not create MediaKeys -- TODO"})
                }
            }

            function j(a) {
                D !== a && (D && D.removeEventListener(B.needkey, I), D = a, D && (D.addEventListener(B.needkey, I), F && w()))
            }

            function l(a) {
                if (!E || !F || !G) throw new Error("Can not create sessions until you have selected a key system");
                var b = null;
                if (null !== G.ksConfiguration.videoCapabilities && G.ksConfiguration.videoCapabilities.length > 0 && (b = G.ksConfiguration.videoCapabilities[0]), null === b && null !== G.ksConfiguration.audioCapabilities && G.ksConfiguration.audioCapabilities.length > 0 && (b = G.ksConfiguration.audioCapabilities[0]), null === b) throw new Error("Can not create sessions for unknown content types.");
                var c = b.contentType, d = F.createSession(c, new Uint8Array(a)), e = x(d, a);
                d.addEventListener(B.error, e), d.addEventListener(B.message, e), d.addEventListener(B.ready, e), d.addEventListener(B.close, e), H.push(e), A("DRM: Session created.  SessionID = " + e.getSessionID()), z.trigger(s.default.KEY_SESSION_CREATED, {data: e})
            }

            function n(a, b) {
                var c = a.session;
                J.isClearKey(E) ? c.update(new Uint8Array(b.toJWK())) : c.update(new Uint8Array(b))
            }

            function p(a) {
                var b = a.session;
                b.removeEventListener(B.error, a), b.removeEventListener(B.message, a), b.removeEventListener(B.ready, a), b.removeEventListener(B.close, a);
                for (var c = 0; c < H.length; c++) if (H[c] === a) {
                    H.splice(c, 1);
                    break
                }
                b[B.release]()
            }

            function r() {
            }

            function t() {
            }

            function u() {
            }

            function v() {
                return {
                    handleEvent: function (a) {
                        switch (a.type) {
                            case B.needkey:
                                if (a.initData) {
                                    var b = ArrayBuffer.isView(a.initData) ? a.initData.buffer : a.initData;
                                    z.trigger(s.default.NEED_KEY, {key: new i.default(b, "cenc")})
                                }
                        }
                    }
                }
            }

            function w() {
                var a = null, b = function () {
                    D.removeEventListener("loadedmetadata", a), D[B.setMediaKeys](F), z.trigger(s.default.VIDEO_ELEMENT_SELECTED)
                };
                D.readyState >= 1 ? b() : (a = b.bind(this), D.addEventListener("loadedmetadata", a))
            }

            function x(a, b) {
                return {
                    session: a, initData: b, getSessionID: function () {
                        return this.session.sessionId
                    }, getExpirationTime: function () {
                        return NaN
                    }, getSessionType: function () {
                        return "temporary"
                    }, handleEvent: function (a) {
                        switch (a.type) {
                            case B.error:
                                var b = "KeyError";
                                z.trigger(s.default.KEY_ERROR, {data: new k.default(this, b)});
                                break;
                            case B.message:
                                var c = ArrayBuffer.isView(a.message) ? a.message.buffer : a.message;
                                z.trigger(s.default.INTERNAL_KEY_MESSAGE, {data: new m.default(this, c, a.destinationURL)});
                                break;
                            case B.ready:
                                A("DRM: Key added."), z.trigger(s.default.KEY_ADDED);
                                break;
                            case B.close:
                                A("DRM: Session closed.  SessionID = " + this.getSessionID()), z.trigger(s.default.KEY_SESSION_CLOSED, {data: this.getSessionID()})
                        }
                    }
                }
            }

            var y = this.context, z = a.eventBus, A = a.log, B = a.api, C = void 0, D = void 0, E = void 0, F = void 0,
                G = void 0, H = void 0, I = void 0, J = void 0;
            return C = {
                getAllInitData: e,
                requestKeySystemAccess: f,
                getKeySystem: d,
                selectKeySystem: h,
                setMediaElement: j,
                createKeySession: l,
                updateKeySession: n,
                closeKeySession: p,
                setServerCertificate: r,
                loadKeySession: t,
                removeKeySession: u,
                reset: c
            }, b(), C
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(109), g = d(f), h = a(127), i = d(h), j = a(121), k = d(j), l = a(122), m = d(l), n = a(125),
            o = d(n), p = a(124), q = d(p), r = a(13), s = d(r), t = a(10), u = d(t);
        e.__dashjs_factory_name = "ProtectionModel_3Feb2014", c.default = u.default.getClassFactory(e), b.exports = c.default
    }, {10: 10, 109: 109, 121: 121, 122: 122, 124: 124, 125: 125, 127: 127, 13: 13}],
    116: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a(a, b) {
                var c = JSON.parse(String.fromCharCode.apply(null, new Uint8Array(b)));
                a += "/?";
                for (var d = 0; d < c.kids.length; d++) a += c.kids[d] + "&";
                return a = a.substring(0, a.length - 1)
            }

            function b() {
                return "GET"
            }

            function c() {
                return "json"
            }

            function d(a) {
                if (!a.hasOwnProperty("keys")) return null;
                for (var b = [], c = 0; c < a.keys.length; c++) {
                    var d = a.keys[c], e = d.kid.replace(/=/g, ""), f = d.k.replace(/=/g, "");
                    b.push(new g.default(e, f))
                }
                return new i.default(b)
            }

            function e(a) {
                return String.fromCharCode.apply(null, new Uint8Array(a))
            }

            var f = void 0;
            return f = {
                getServerURLFromMessage: a,
                getHTTPMethod: b,
                getResponseType: c,
                getLicenseMessage: d,
                getErrorResponse: e
            }
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(123), g = d(f), h = a(120), i = d(h), j = a(10), k = d(j);
        e.__dashjs_factory_name = "ClearKey", c.default = k.default.getSingletonFactory(e), b.exports = c.default
    }, {10: 10, 120: 120, 123: 123}],
    117: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a(a) {
                return a
            }

            function b() {
                return "POST"
            }

            function c(a) {
                return f[a].responseType
            }

            function d(a, b) {
                return f[b].getLicenseMessage(a)
            }

            function e(a, b) {
                return f[b].getErrorResponse(a)
            }

            var f = {
                "com.widevine.alpha": {
                    responseType: "json", getLicenseMessage: function (a) {
                        return i.default.decodeArray(a.license)
                    }, getErrorResponse: function (a) {
                        return a
                    }
                }, "com.microsoft.playready": {
                    responseType: "arraybuffer", getLicenseMessage: function (a) {
                        return a
                    }, getErrorResponse: function (a) {
                        return String.fromCharCode.apply(null, new Uint8Array(a))
                    }
                }
            }, g = void 0;
            return g = {
                getServerURLFromMessage: a,
                getHTTPMethod: b,
                getResponseType: c,
                getLicenseMessage: d,
                getErrorResponse: e
            }
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(10), g = d(f), h = a(1), i = d(h);
        e.__dashjs_factory_name = "DRMToday", c.default = g.default.getSingletonFactory(e), b.exports = c.default
    }, {1: 1, 10: 10}],
    118: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a(a) {
                return a
            }

            function b() {
                return "POST"
            }

            function c() {
                return "arraybuffer"
            }

            function d(a) {
                return a
            }

            function e(a) {
                return String.fromCharCode.apply(null, new Uint8Array(a))
            }

            var f = void 0;
            return f = {
                getServerURLFromMessage: a,
                getHTTPMethod: b,
                getResponseType: c,
                getLicenseMessage: d,
                getErrorResponse: e
            }
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(10), g = d(f);
        e.__dashjs_factory_name = "PlayReady", c.default = g.default.getSingletonFactory(e), b.exports = c.default
    }, {10: 10}],
    119: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a(a) {
                return a
            }

            function b() {
                return "POST"
            }

            function c() {
                return "arraybuffer"
            }

            function d(a) {
                return a
            }

            function e(a) {
                return String.fromCharCode.apply(null, new Uint8Array(a))
            }

            var f = void 0;
            return f = {
                getServerURLFromMessage: a,
                getHTTPMethod: b,
                getResponseType: c,
                getLicenseMessage: d,
                getErrorResponse: e
            }
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(10), g = d(f);
        e.__dashjs_factory_name = "Widevine", c.default = g.default.getSingletonFactory(e), b.exports = c.default
    }, {10: 10}],
    120: [function (a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function () {
            function a(a, b) {
                for (var c = 0; c < b.length; c++) {
                    var d = b[c];
                    d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                }
            }

            return function (b, c, d) {
                return c && a(b.prototype, c), d && a(b, d), b
            }
        }(), f = function () {
            function a(b, c) {
                if (d(this, a), c && "persistent" !== c && "temporary" !== c) throw new Error("Invalid ClearKey key set type!  Must be one of 'persistent' or 'temporary'");
                this.keyPairs = b, this.type = c
            }

            return e(a, [{
                key: "toJWK", value: function () {
                    var a, b = this.keyPairs.length, c = {keys: []};
                    for (a = 0; a < b; a++) {
                        var d = {kty: "oct", alg: "A128KW", kid: this.keyPairs[a].keyID, k: this.keyPairs[a].key};
                        c.keys.push(d)
                    }
                    this.type && (c.type = this.type);
                    var e = JSON.stringify(c), f = e.length, g = new ArrayBuffer(f), h = new Uint8Array(g);
                    for (a = 0; a < f; a++) h[a] = e.charCodeAt(a);
                    return g
                }
            }]), a
        }();
        c.default = f, b.exports = c.default
    }, {}],
    121: [function (a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function a(b, c) {
            d(this, a), this.sessionToken = b, this.error = c
        };
        c.default = e, b.exports = c.default
    }, {}],
    122: [function (a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function a(b, c, e, f) {
            d(this, a), this.sessionToken = b, this.message = c, this.defaultURL = e, this.messageType = f ? f : "license-request"
        };
        c.default = e, b.exports = c.default
    }, {}],
    123: [function (a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function a(b, c) {
            d(this, a), this.keyID = b, this.key = c
        };
        c.default = e, b.exports = c.default
    }, {}],
    124: [function (a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function a(b, c) {
            d(this, a), this.keySystem = b, this.ksConfiguration = c
        };
        c.default = e, b.exports = c.default
    }, {}],
    125: [function (a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function a(b, c, e, f, g) {
            d(this, a), this.initDataTypes = ["cenc"], this.audioCapabilities = b, this.videoCapabilities = c, this.distinctiveIdentifier = e, this.persistentState = f, this.sessionTypes = g
        };
        c.default = e, b.exports = c.default
    }, {}],
    126: [function (a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function a(b, c) {
            d(this, a), this.contentType = b, this.robustness = c
        };
        c.default = e, b.exports = c.default
    }, {}],
    127: [function (a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function a(b, c) {
            d(this, a), this.initData = b, this.initDataType = c
        };
        c.default = e, b.exports = c.default
    }, {}],
    128: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a) {
            function b() {
                return i.mediaInfo.streamInfo
            }

            function c() {
                return i.mediaInfo
            }

            function d() {
                return i
            }

            function e() {
                return k
            }

            function f() {
                return i.mediaInfo.streamInfo.manifestInfo
            }

            function g() {
                return j
            }

            var h = void 0, i = a.streamProcessor.getCurrentRepresentationInfo(), j = a.streamProcessor,
                k = a.currentValue;
            return h = {
                getStreamInfo: b,
                getMediaInfo: c,
                getTrackInfo: d,
                getCurrentValue: e,
                getManifestInfo: f,
                getStreamProcessor: g
            }
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(10), g = d(f);
        e.__dashjs_factory_name = "RulesContext", c.default = g.default.getClassFactory(e), b.exports = c.default
    }, {10: 10}],
    129: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a() {
                j = {}
            }

            function b(a) {
                a && (a.abrRulesCollection && (j[p] = a.abrRulesCollection), a.synchronizationRulesCollection && (j[q] = a.synchronizationRulesCollection))
            }

            function c(a, b, c, d, f) {
                var g, h, j = {}, k = {}, l = a.length, m = l, n = e(b, d), o = function (a) {
                    var b, e, g;
                    if (a.value !== i.default.NO_CHANGE) {
                        var h = f(j[a.priority], a.value);
                        h !== j[a.priority] && (j[a.priority] = h, k[a.priority] = a.reason)
                    }
                    --l || (j[i.default.WEAK] !== i.default.NO_CHANGE && (g = i.default.WEAK, b = j[i.default.WEAK], e = k[i.default.WEAK]), j[i.default.DEFAULT] !== i.default.NO_CHANGE && (g = i.default.DEFAULT, b = j[i.default.DEFAULT], e = k[i.default.DEFAULT]), j[i.default.STRONG] !== i.default.NO_CHANGE && (g = i.default.STRONG, b = j[i.default.STRONG], e = k[i.default.STRONG]), g != i.default.STRONG && g != i.default.WEAK && (g = i.default.DEFAULT), c(void 0 !== b ? {
                        value: b,
                        confidence: g,
                        reason: e
                    } : {value: d, confidence: g, reason: {name: "NO_CHANGE"}}))
                };
                for (j[i.default.STRONG] = i.default.NO_CHANGE, j[i.default.WEAK] = i.default.NO_CHANGE, j[i.default.DEFAULT] = i.default.NO_CHANGE, h = 0; h < m; h++) g = a[h], g.execute(n, o)
            }

            function d() {
                var a, b, c = j[p], d = j[q],
                    e = (c.getRules(k.default.QUALITY_SWITCH_RULES) || []).concat(c.getRules(k.default.ABANDON_FRAGMENT_RULES) || []).concat(d.getRules(m.default.TIME_SYNCHRONIZED_RULES) || []).concat(d.getRules(m.default.BEST_GUESS_RULES) || []),
                    f = e.length;
                for (b = 0; b < f; b++) a = e[b], "function" == typeof a.reset && a.reset();
                j = {}
            }

            function e(a, b) {
                return (0, g.default)(f).create({streamProcessor: a, currentValue: b})
            }

            var f = this.context, h = void 0, j = void 0;
            return h = {initialize: a, setConfig: b, applyRules: c, reset: d}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(128), g = d(f), h = a(130), i = d(h), j = a(131), k = d(j), l = a(144), m = d(l), n = a(10), o = d(n),
            p = 0, q = 1;
        e.__dashjs_factory_name = "RulesController";
        var r = o.default.getSingletonFactory(e);
        r.ABR_RULE = p, r.SYNC_RULE = q, c.default = r, b.exports = c.default
    }, {10: 10, 128: 128, 130: 130, 131: 131, 144: 144}],
    130: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a, b, c) {
            var d = void 0 === a ? h : a, e = void 0 === b ? i : b, f = void 0 === c ? null : c,
                g = {value: d, priority: e, reason: f};
            return g
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(10), g = d(f), h = 999, i = .5, j = 1, k = 0;
        e.__dashjs_factory_name = "SwitchRequest";
        var l = g.default.getClassFactory(e);
        l.NO_CHANGE = h, l.DEFAULT = i, l.STRONG = j, l.WEAK = k, c.default = l, b.exports = c.default
    }, {10: 10}],
    131: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a() {
                e = [], f = [];
                var a = (0, u.default)(c).getInstance(), b = (0, w.default)(c).getInstance(),
                    d = (0, s.default)(c).getInstance();
                d.getBufferOccupancyABREnabled() ? (e.push((0, o.default)(c).create({
                    metricsModel: a,
                    dashMetrics: (0, w.default)(c).getInstance()
                })), f.push((0, q.default)(c).create({
                    metricsModel: a,
                    dashMetrics: (0, w.default)(c).getInstance()
                }))) : (e.push((0, g.default)(c).create({
                    metricsModel: a,
                    dashMetrics: b
                })), e.push((0, i.default)(c).create({
                    metricsModel: a,
                    dashMetrics: b
                })), e.push((0, k.default)(c).create({metricsModel: a})), f.push((0, m.default)(c).create()))
            }

            function b(a) {
                switch (a) {
                    case z:
                        return e;
                    case A:
                        return f;
                    default:
                        return null
                }
            }

            var c = this.context, d = void 0, e = void 0, f = void 0;
            return d = {initialize: a, getRules: b}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(137), g = d(f), h = a(135), i = d(h), j = a(136), k = d(j), l = a(132), m = d(l), n = a(134),
            o = d(n), p = a(133), q = d(p), r = a(101), s = d(r), t = a(102), u = d(t), v = a(17), w = d(v), x = a(10),
            y = d(x), z = "qualitySwitchRules", A = "abandonFragmentRules";
        e.__dashjs_factory_name = "ABRRulesCollection";
        var B = y.default.getSingletonFactory(e);
        B.QUALITY_SWITCH_RULES = z, B.ABANDON_FRAGMENT_RULES = A, c.default = B, b.exports = c.default
    }, {10: 10, 101: 101, 102: 102, 132: 132, 133: 133, 134: 134, 135: 135, 136: 136, 137: 137, 17: 17}],
    132: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a() {
                o = {}, p = {}, q = [], r = (0, i.default)(l).getInstance();
            }

            function b(a, b) {
                o[a] = o[a] || {}, o[a][b] = o[a][b] || {}
            }

            function c(a, b) {
                q[a] = q[a] || [], q[a].push(b)
            }

            function d(a, d) {
                var f = a.getMediaInfo(), i = f.type, m = a.getCurrentValue().request,
                    s = (0, g.default)(l).create(g.default.NO_CHANGE, g.default.WEAK, {name: e.__dashjs_factory_name});
                if (!isNaN(m.index)) {
                    b(i, m.index);
                    var t = o[i][m.index];
                    if (null === t || null === m.firstByteDate || p.hasOwnProperty(t.id)) return void d(s);
                    if (void 0 === t.firstByteTime && (q[i] = [], t.firstByteTime = m.firstByteDate.getTime(), t.segmentDuration = m.duration, t.bytesTotal = m.bytesTotal, t.id = m.index), t.bytesLoaded = m.bytesLoaded, t.elapsedTime = (new Date).getTime() - t.firstByteTime, t.bytesLoaded > 0 && t.elapsedTime > 0 && c(i, Math.round(8 * t.bytesLoaded / t.elapsedTime)), q[i].length >= k && t.elapsedTime > j && t.bytesLoaded < t.bytesTotal) {
                        var u = q[i].reduce(function (a, b) {
                            return a + b
                        }, 0);
                        if (t.measuredBandwidthInKbps = Math.round(u / q[i].length), t.estimatedTimeOfDownload = (8 * t.bytesTotal / t.measuredBandwidthInKbps / 1e3).toFixed(2), t.estimatedTimeOfDownload < t.segmentDuration * h || 0 === a.getTrackInfo().quality) return void d(s);
                        if (!p.hasOwnProperty(t.id)) {
                            var v = a.getStreamProcessor().getABRController(), w = t.bytesTotal - t.bytesLoaded,
                                x = v.getBitrateList(f),
                                y = v.getQualityForBitrate(f, t.measuredBandwidthInKbps * r.getBandwidthSafetyFactor()),
                                z = t.bytesTotal * x[y].bitrate / x[v.getQualityFor(i, f.streamInfo)].bitrate;
                            w > z && (s.value = y, s.priority = g.default.STRONG, s.reason.throughput = t.measuredBandwidthInKbps, p[t.id] = t, n("AbandonRequestsRule ( ", i, "frag id", t.id, ") is asking to abandon and switch to quality to ", y, " measured bandwidth was", t.measuredBandwidthInKbps), delete o[i][t.id])
                        }
                    } else t.bytesLoaded === t.bytesTotal && delete o[i][t.id]
                }
                d(s)
            }

            function f() {
                a()
            }

            var h = 1.8, j = 500, k = 5, l = this.context, n = (0, m.default)(l).getInstance().log, o = void 0,
                p = void 0, q = void 0, r = void 0, s = {execute: d, reset: f};
            return a(), s
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(130), g = d(f), h = a(101), i = d(h), j = a(10), k = d(j), l = a(8), m = d(l);
        e.__dashjs_factory_name = "AbandonRequestsRule", c.default = k.default.getClassFactory(e), b.exports = c.default
    }, {10: 10, 101: 101, 130: 130, 8: 8}],
    133: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a) {
            function b() {
                s = {}, t = (0, i.default)(l).getInstance()
            }

            function c(a, b, c) {
                s[a] = {index: b, quality: c}
            }

            function d(a, b, c) {
                var d = s[a];
                return !d || (b !== d.index || c < d.quality)
            }

            function f(a, b) {
                var f = a.getMediaInfo(), h = f.type, i = q.getReadOnlyMetricsFor(h), m = a.getCurrentValue(),
                    r = m.request,
                    t = (0, g.default)(l).create(g.default.NO_CHANGE, g.default.WEAK, {name: e.__dashjs_factory_name});
                if (0 === i.BolaState.length) return n("WARNING: executing BolaAbandonRule before initializing BolaRule"), s[h] = null, void b(t);
                var u = i.BolaState[0]._s, v = r.index, w = r.quality;
                if (isNaN(v) || 0 === w || !d(h, v, w) || !r.firstByteDate) return void b(t);
                var x = Date.now(), y = x - r.firstByteDate.getTime(), z = r.bytesLoaded, A = r.bytesTotal, B = A - z,
                    C = r.duration, D = p.getCurrentBufferLevel(i) ? p.getCurrentBufferLevel(i) : 0,
                    E = D + u.virtualBuffer, F = 8 * z / (.001 * y), G = u.bandwidthSafetyFactor * F,
                    H = .001 * (r.firstByteDate.getTime() - r.requestStartDate.getTime());
                H < .001 * k && (H = .001 * k);
                var I = H + 8 * A / G, J = "";
                o.default.BOLA_DEBUG && (J = "index=" + v + " quality=" + w + " bytesLoaded/bytesTotal=" + z + "/" + A + " bufferLevel=" + D + " timeSince1stByte=" + (y / 1e3).toFixed(3) + " estThroughput=" + (G / 1e6).toFixed(3) + " latency=" + H.toFixed(3));
                var K = A * u.bitrates[0] / u.bitrates[w], L = B - H * G / 8;
                if (L < 1 && (L = 1), y < j || B <= K || D > u.bufferTarget || L <= K || I <= C) return void b(t);
                var M = E - H;
                M < 0 && (M = 0);
                for (var N = 0; N + 1 < w && A * u.bitrates[N + 1] / u.bitrates[w] < L;) ++N;
                var O = w;
                if (u.state === o.default.BOLA_STATE_STARTUP) {
                    O = 0;
                    for (var P = 0; P <= N && (K = A * u.bitrates[P] / u.bitrates[w], !(8 * K / C > G)); ++P) O = P
                } else for (var Q = (u.Vp * (u.utilities[w] + u.gp) - M) / L, P = 0; P <= N; ++P) {
                    K = A * u.bitrates[P] / u.bitrates[w];
                    var R = (u.Vp * (u.utilities[P] + u.gp) - M) / K;
                    R > Q && (O = P, Q = R)
                }
                var S = u.rebufferSafetyFactor * F * (D - H) / 8;
                if (O === w && L > S && (O = N), O === w) return void b(t);
                for (; O > 0 && (K = A * u.bitrates[O] / u.bitrates[w], !(K <= S));) --O;
                u.lastQuality = O, q.updateBolaState(h, u), o.default.BOLA_DEBUG && n("BolaDebug " + h + " BolaAbandonRule abandon to " + O + " - " + J), c(h, v, w), t.value = O, t.priority = g.default.STRONG, t.reason.state = u.state, t.reason.throughput = F, t.reason.bufferLevel = D, t.reason.bytesLoaded = r.bytesLoaded, t.reason.bytesTotal = r.bytesTotal, t.reason.elapsedTimeMs = y, b(t)
            }

            function h() {
                s = {}
            }

            var j = 500, k = 200, l = this.context, n = (0, m.default)(l).getInstance().log, p = a.dashMetrics,
                q = a.metricsModel, r = void 0, s = void 0, t = void 0;
            return r = {execute: f, reset: h}, b(), r
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(130), g = d(f), h = a(101), i = d(h), j = a(10), k = d(j), l = a(8), m = d(l), n = a(134), o = d(n);
        e.__dashjs_factory_name = "BolaAbandonRule", c.default = k.default.getClassFactory(e), b.exports = c.default
    }, {10: 10, 101: 101, 130: 130, 134: 134, 8: 8}],
    134: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a) {
            function b() {
                N = {}, O = [], P = (0, k.default)(H).getInstance(), Q = (0, m.default)(H).getInstance(), R = (0, p.default)(H).getInstance(), L.on(t.default.BUFFER_EMPTY, q, M), L.on(t.default.PLAYBACK_SEEKING, s, M), L.on(t.default.PERIOD_SWITCH_STARTED, u, M)
            }

            function c(a) {
                return a.map(function (a) {
                    return Math.log(a)
                })
            }

            function d(a, b, d, e) {
                var f = NaN;
                if (e ? (f = 0, e.forEach(function (a, b) {
                        a > e[f] && (f = b)
                    })) : (e = c(d), f = e.length - 1), 0 === f) return null;
                var g = 1 - e[0] + (e[f] - e[0]) / (b / a - 1), h = a / (e[0] + g - 1);
                return {utilities: e, gp: g, Vp: h}
            }

            function f(a) {
                var b = {}, c = a.getMediaInfo(), e = a.getStreamProcessor(), f = a.getStreamInfo(),
                    g = a.getTrackInfo(), h = e.isDynamic(), i = f.manifestInfo.duration, j = g.fragmentDuration,
                    k = c.bitrateList.map(function (a) {
                        return a.bandwidth
                    }), l = d(A, B, k, null);
                if (null === l) return b.state = w, b;
                if (b.state = x, b.bitrates = k, b.utilities = l.utilities, b.Vp = l.Vp, b.gp = l.gp, b.isDynamic = h, b.movieDuration = i, b.fragmentDuration = j, b.bandwidthSafetyFactor = P.getBandwidthSafetyFactor(), b.rebufferSafetyFactor = C, b.bufferTarget = P.getStableBufferTime(), b.lastQuality = 0, b.virtualBuffer = 0, b.throughputCount = h ? F : G, z) {
                    for (var m = "", n = 0; n < k.length; ++n) {
                        var o = l.utilities[n], p = k[n], q = 0;
                        if (n > 0) {
                            var r = l.utilities[n - 1], s = k[n - 1];
                            q = l.Vp * ((r * p - o * s) / (p - s) + l.gp)
                        }
                        var t = l.Vp * (o + l.gp);
                        m += "\n" + n + ":" + (1e-6 * k[n]).toFixed(3) + "Mbps " + q.toFixed(3) + "/" + t.toFixed(3)
                    }
                    I("BolaDebug " + c.type + " bitrates" + m)
                }
                return b
            }

            function h(a, b) {
                for (var c = a.bitrates.length, d = NaN, e = NaN, f = 0; f < c; ++f) {
                    var g = (a.Vp * (a.utilities[f] + a.gp) - b) / a.bitrates[f];
                    (isNaN(e) || g >= e) && (e = g, d = f)
                }
                return d
            }

            function i(a, b) {
                for (var c = J.getHttpRequests(a), d = [], e = c.length - 1; e >= 0 && d.length < b; --e) {
                    var f = c[e];
                    f.type === n.HTTPRequest.MEDIA_SEGMENT_TYPE && f._tfinish && f.tresponse && f.trace && d.push(f)
                }
                return d
            }

            function j(a, b, c) {
                var d = i(a, b);
                if (0 === d.length) return 0;
                for (var e = 0, f = "", g = 0; g < d.length; ++g) {
                    var h = .001 * (d[g]._tfinish.getTime() - d[g].trequest.getTime()),
                        j = 8 * d[g].trace.reduce(function (a, b) {
                            return a + b.b[0]
                        }, 0);
                    z && (f += " " + (1e-6 * j).toFixed(3) + "/" + h.toFixed(3) + "=" + (1e-6 * j / h).toFixed(3) + "Mbps"), e += h / j
                }
                return z && I("BolaDebug " + c + " BolaRule recent throughput = " + (d.length / (1e6 * e)).toFixed(3) + "Mbps:" + f), d.length / e
            }

            function l(a, b) {
                var c = 0;
                return a.bitrates.some(function (a, d) {
                    return a > b || (c = d, !1)
                }), c
            }

            function o(a, b) {
                var c = i(a, 1);
                if (0 === c.length) return 0;
                var d = c[0], e = Date.now(), f = d._tfinish.getTime();
                f > e && (f = e);
                var g = N[b];
                N[b] = e;
                var h = 0;
                return h = g && g > f ? e - g : e - f, h <= 0 ? 0 : .001 * h
            }

            function q() {
                z && I("BolaDebug BUFFER_EMPTY"), O.forEach(function (a) {
                    var b = K.getReadOnlyMetricsFor(a);
                    if (0 !== b.BolaState.length) {
                        var c = b.BolaState[0]._s;
                        c.state === y && (c.virtualBuffer = 0, K.updateBolaState(a, c))
                    }
                })
            }

            function s(a) {
                z && I("BolaDebug PLAYBACK_SEEKING " + a.seekTime.toFixed(3)), O.forEach(function (a) {
                    var b = K.getReadOnlyMetricsFor(a);
                    if (0 !== b.BolaState.length) {
                        var c = b.BolaState[0]._s;
                        c.state !== w && (c.state = x), K.updateBolaState(a, c)
                    }
                })
            }

            function u() {
            }

            function D(a, b) {
                var c = a.getStreamProcessor();
                c.getScheduleController().setTimeToLoadDelay(0);
                var d = (0, g.default)(H).create(g.default.NO_CHANGE, g.default.WEAK, {name: e.__dashjs_factory_name}),
                    i = a.getMediaInfo(), k = i.type, m = K.getReadOnlyMetricsFor(k);
                if (0 === m.BolaState.length) {
                    z && I("BolaDebug " + k + "\nBolaDebug " + k + " BolaRule for state=- fragmentStart=" + R.getIndexHandlerTime(a.getStreamProcessor()).toFixed(3));
                    var n = f(a);
                    K.updateBolaState(k, n);
                    var p = 0;
                    if (n.state !== w) {
                        O.push(k);
                        var q = j(m, n.throughputCount, k);
                        if (0 === q) return z && I("BolaDebug " + k + " BolaRule quality unchanged for INITIALIZE"), void b(d);
                        p = l(n, q * n.bandwidthSafetyFactor), n.lastQuality = p, d.value = p, d.priority = g.default.DEFAULT, d.reason.state = n.state, d.reason.throughput = q
                    }
                    return z && I("BolaDebug " + k + " BolaRule quality " + p + " for INITIALIZE"), void b(d)
                }
                var r = m.BolaState[0]._s;
                if (r.state === w) return z && I("BolaDebug " + k + " BolaRule quality 0 for ONE_BITRATE"), void b(d);
                var s = r.bitrates, t = r.utilities;
                z && I("BolaDebug " + k + "\nBolaDebug " + k + " EXECUTE BolaRule for state=" + r.state + " fragmentStart=" + R.getIndexHandlerTime(a.getStreamProcessor()).toFixed(3));
                var u = J.getCurrentBufferLevel(m) ? J.getCurrentBufferLevel(m) : 0, v = j(m, r.throughputCount, k);
                u <= .1 && (r.virtualBuffer = 0);
                var A = o(m, k);
                A > 0 && (r.virtualBuffer += A), r.virtualBuffer < 0 && (r.virtualBuffer = 0);
                var B = u + r.virtualBuffer, D = h(r, B);
                if (z && I("BolaDebug " + k + " BolaRule bufferLevel=" + u.toFixed(3) + "(+" + r.virtualBuffer.toFixed(3) + "=" + B.toFixed(3) + ") recentThroughput=" + (1e-6 * v).toFixed(3) + " tentativeQuality=" + D), r.state === x) {
                    var p = l(r, v * r.bandwidthSafetyFactor);
                    if (u > r.fragmentDuration / C) {
                        r.state = y;
                        for (var E = 0, F = 0; F < p; ++F) {
                            var G = r.Vp * (r.gp + (s[p] * t[F] - s[F] * t[p]) / (s[p] - s[F]));
                            G > E && (E = G)
                        }
                        E > u && (r.virtualBuffer = E - u)
                    }
                    return z && I("BolaDebug " + k + " BolaRule quality " + p + " for STARTUP"), r.lastQuality = p, K.updateBolaState(k, r), d.value = p, d.priority = g.default.DEFAULT, d.reason.state = x, d.reason.throughput = v, void b(d)
                }
                if (D > r.lastQuality) {
                    var p = l(r, v);
                    D > p && (p < r.lastQuality && (p = r.lastQuality), D = p)
                }
                if (v > 0) for (var L = C * v * u / r.fragmentDuration; D > 0 && s[D] > L;) --D;
                var M = 0, N = r.Vp * (t[D] + r.gp);
                M = B - N, M > 0 && (M > r.virtualBuffer ? (M -= r.virtualBuffer, r.virtualBuffer = 0) : (r.virtualBuffer -= M, M = 0)), M > 0 ? D === s.length - 1 ? M = 0 : c.getScheduleController().setTimeToLoadDelay(1e3 * M) : M = 0, r.lastQuality = D, K.updateBolaState(k, r), d.value = D, d.priority = g.default.DEFAULT, d.reason.state = r.state, d.reason.throughput = v, d.reason.bufferLevel = u, z && I("BolaDebug " + k + " BolaRule quality " + D + " delay=" + M.toFixed(3) + " for STEADY"), b(d)
            }

            function E() {
                L.off(t.default.BUFFER_EMPTY, q, M), L.off(t.default.PLAYBACK_SEEKING, s, M), L.off(t.default.PERIOD_SWITCH_STARTED, u, M), b()
            }

            var F = 2, G = 3, H = this.context, I = (0, v.default)(H).getInstance().log, J = a.dashMetrics,
                K = a.metricsModel, L = (0, r.default)(H).getInstance(), M = void 0, N = void 0, O = void 0, P = void 0,
                Q = void 0, R = void 0;
            return M = {execute: D, reset: E}, b(), M
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(130), g = d(f), h = a(10), i = d(h), j = a(101), k = d(j), l = a(68), m = d(l), n = a(179), o = a(15),
            p = d(o), q = a(9), r = d(q), s = a(13), t = d(s), u = a(8), v = d(u), w = 0, x = 1, y = 2, z = !1, A = 10,
            B = 30, C = .5;
        e.__dashjs_factory_name = "BolaRule";
        var D = i.default.getClassFactory(e);
        D.BOLA_STATE_ONE_BITRATE = w, D.BOLA_STATE_STARTUP = x, D.BOLA_STATE_STEADY = y, D.BOLA_DEBUG = z, c.default = D, b.exports = c.default
    }, {10: 10, 101: 101, 13: 13, 130: 130, 15: 15, 179: 179, 68: 68, 8: 8, 9: 9}],
    135: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a) {
            function b() {
                n = 0, p = (0, i.default)(h).getInstance()
            }

            function c(a, b) {
                var c = (new Date).getTime() / 1e3, d = a.getMediaInfo(), f = a.getTrackInfo(), i = d.type,
                    o = isNaN(f.fragmentDuration) ? 2 : f.fragmentDuration / 2, q = a.getCurrentValue(),
                    r = a.getStreamProcessor(), s = r.getABRController(), t = l.getReadOnlyMetricsFor(i),
                    u = m.getCurrentBufferLevel(t),
                    v = t.BufferState.length > 0 ? t.BufferState[t.BufferState.length - 1] : null, w = !1,
                    x = d.representationCount - 1,
                    y = (0, g.default)(h).create(g.default.NO_CHANGE, g.default.WEAK, {name: e.__dashjs_factory_name});
                return c - n < o || s.getAbandonmentStateFor(i) === k.default.ABANDON_LOAD ? void b(y) : (null !== v && u > v.target && (w = u - v.target > p.getRichBufferThreshold(), w && d.representationCount > 1 && (y.value = x, y.priority = g.default.STRONG, y.reason.bufferLevel = u, y.reason.bufferTarget = v.target)), y.value !== g.default.NO_CHANGE && y.value !== q && j("BufferOccupancyRule requesting switch to index: ", y.value, "type: ", i, " Priority: ", y.priority === g.default.DEFAULT ? "Default" : y.priority === g.default.STRONG ? "Strong" : "Weak"), void b(y))
            }

            function d() {
                n = 0
            }

            var f = void 0, h = this.context, j = (0, o.default)(h).getInstance().log, l = a.metricsModel,
                m = a.dashMetrics, n = void 0, p = void 0;
            return f = {execute: c, reset: d}, b(), f
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(130), g = d(f), h = a(101), i = d(h), j = a(60), k = d(j), l = a(10), m = d(l), n = a(8), o = d(n);
        e.__dashjs_factory_name = "BufferOccupancyRule", c.default = m.default.getClassFactory(e), b.exports = c.default
    }, {10: 10, 101: 101, 130: 130, 60: 60, 8: 8}],
    136: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a) {
            function b() {
                r = {}, s = 0, t = 1e3, n.on(m.default.PLAYBACK_SEEKING, f, p)
            }

            function c(a, b) {
                var c = (new Date).getTime(), f = a.getMediaInfo().type, h = a.getCurrentValue(),
                    k = o.getReadOnlyMetricsFor(f),
                    m = k.BufferState.length > 0 ? k.BufferState[k.BufferState.length - 1] : null,
                    n = (0, g.default)(j).create(g.default.NO_CHANGE, g.default.WEAK, {name: e.__dashjs_factory_name});
                return c - s < t || null === m ? void b(n) : (d(f, m.state), m.state === i.default.BUFFER_EMPTY && void 0 !== r[f].firstBufferLoadedEvent && (n.value = 0, n.priority = g.default.STRONG, n.reason.bufferState = m.state, n = (0, g.default)(j).create(0, g.default.STRONG)), n.value !== g.default.NO_CHANGE && n.value !== h && l("InsufficientBufferRule requesting switch to index: ", n.value, "type: ", f, " Priority: ", n.priority === g.default.DEFAULT ? "Default" : n.priority === g.default.STRONG ? "Strong" : "Weak"), s = c, void b(n))
            }

            function d(a, b) {
                r[a] = r[a] || {}, r[a].state = b, b !== i.default.BUFFER_LOADED || r[a].firstBufferLoadedEvent || (r[a].firstBufferLoadedEvent = !0)
            }

            function f() {
                r = {}
            }

            function h() {
                n.off(m.default.PLAYBACK_SEEKING, f, p), r = {}, s = 0
            }

            var j = this.context, l = (0, q.default)(j).getInstance().log, n = (0, k.default)(j).getInstance(),
                o = a.metricsModel, p = void 0, r = void 0, s = void 0, t = void 0;
            return p = {execute: c, reset: h}, b(), p
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(130), g = d(f), h = a(63), i = d(h), j = a(9), k = d(j), l = a(13), m = d(l), n = a(10), o = d(n),
            p = a(8), q = d(p);
        e.__dashjs_factory_name = "InsufficientBufferRule", c.default = o.default.getClassFactory(e), b.exports = c.default
    }, {10: 10, 13: 13, 130: 130, 63: 63, 8: 8, 9: 9}],
    137: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a) {
            function b() {
                z = [], A = {
                    audio: {threshold: s, value: NaN},
                    video: {threshold: q, value: NaN}
                }, B = (0, m.default)(v).getInstance()
            }

            function c(a, b) {
                z[a] = z[a] || [], z[a].push(b)
            }

            function d(a, b) {
                var c = Math.min(z[a].length, b ? o : p), d = z[a].slice(c * -1, z[a].length);
                return d.length > 1 && d.reduce(function (a, b) {
                    return (a * u <= b || a >= b * t) && c++, b
                }), c = Math.min(z[a].length, c), z[a].slice(c * -1, z[a].length)
            }

            function f(a, b) {
                var c = d(a, b), e = 0;
                if (c.length > 0) {
                    var f = c.reduce(function (a, b) {
                        return a + b
                    }, 0);
                    e = f / c.length
                }
                return z[a].length >= l && z[a].shift(), e / 1e3 * B.getBandwidthSafetyFactor()
            }

            function h(a, b) {
                var d = a.getMediaInfo(), h = d.type, j = a.getCurrentValue(), l = y.getReadOnlyMetricsFor(h),
                    m = a.getStreamProcessor(), o = m.getABRController(), p = m.isDynamic(),
                    q = x.getCurrentHttpRequest(l),
                    r = l.BufferState.length > 0 ? l.BufferState[l.BufferState.length - 1] : null,
                    s = (0, g.default)(v).create(g.default.NO_CHANGE, g.default.WEAK, {name: e.__dashjs_factory_name});
                if (!l || !q || q.type !== n.HTTPRequest.MEDIA_SEGMENT_TYPE || !r) return void b(s);
                var t = void 0;
                if (q.trace && q.trace.length) {
                    t = q._tfinish.getTime() - q.tresponse.getTime() + 1;
                    var u = q.trace.reduce(function (a, b) {
                        return a + b.b[0]
                    }, 0), z = Math.round(8 * u / (t / 1e3));
                    t <= A[h].threshold ? A[h].value = z / 1e3 : (A[h].value = NaN, c(h, z))
                }
                var B = Math.round(isNaN(A[h].value) ? f(h, p) : A[h].value);
                if (o.setAverageThroughput(h, B), o.getAbandonmentStateFor(h) !== k.default.ABANDON_LOAD) {
                    if (r.state === i.default.BUFFER_LOADED || p) {
                        var C = o.getQualityForBitrate(d, B);
                        m.getScheduleController().setTimeToLoadDelay(0), s.value = C, s.priority = g.default.DEFAULT, s.reason.throughput = B
                    }
                    s.value !== g.default.NO_CHANGE && s.value !== j && w("ThroughputRule requesting switch to index: ", s.value, "type: ", h, " Priority: ", s.priority === g.default.DEFAULT ? "Default" : s.priority === g.default.STRONG ? "Strong" : "Weak", "Average throughput", Math.round(B), "kbps")
                }
                b(s)
            }

            function j() {
                b()
            }

            var l = 20, o = 3, p = 4, q = 50, s = 5, t = 1.3, u = 1.3, v = this.context,
                w = (0, r.default)(v).getInstance().log, x = a.dashMetrics, y = a.metricsModel, z = void 0, A = void 0,
                B = void 0, C = {execute: h, reset: j};
            return b(), C
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(130), g = d(f), h = a(63), i = d(h), j = a(60), k = d(j), l = a(101), m = d(l), n = a(179), o = a(10),
            p = d(o), q = a(8), r = d(q);
        e.__dashjs_factory_name = "ThroughputRule", c.default = p.default.getClassFactory(e), b.exports = c.default
    }, {10: 10, 101: 101, 130: 130, 179: 179, 60: 60, 63: 63, 8: 8}],
    138: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a) {
            function b(a) {
                var b, c = 0;
                return a && a.some(function (a, b) {
                    return c = b, !d.contains(a.serviceLocation)
                }) && (b = a[c]), b
            }

            var c = void 0, d = a.blacklistController;
            return c = {select: b}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(10), g = d(f);
        e.__dashjs_factory_name = "BasicSelector", c.default = g.default.getClassFactory(e), b.exports = c.default
    }, {10: 10}],
    139: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a) {
            function b(a) {
                var b = [], c = function (a) {
                    return !b.length || !a.dvb_priority || b.indexOf(a.dvb_priority) === -1
                }, d = function (a) {
                    return !f.contains(a.serviceLocation) || (a.dvb_priority && b.push(a.dvb_priority), !1)
                };
                return a.filter(d).filter(c)
            }

            function c(a) {
                var b, c, d = function (a, b) {
                    var c = a.dvb_priority - b.dvb_priority;
                    return isNaN(c) ? 0 : c
                }, e = function (a, b, c) {
                    return !b || c[0].dvb_priority && a.dvb_priority && c[0].dvb_priority === a.dvb_priority
                }, f = 0, g = [], h = 0;
                if (c = a.sort(d).filter(e), c.length) return c.length > 1 && (c.forEach(function (a) {
                    f += a.dvb_weight, g.push(f)
                }), b = Math.floor(Math.random() * (f - 1)), g.every(function (a, c) {
                    return h = c, !(b < a)
                })), c[h]
            }

            function d(a) {
                return a && c(b(a))
            }

            var e = void 0, f = a.blacklistController;
            return e = {select: d}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(10), g = d(f);
        e.__dashjs_factory_name = "DVBSelector", c.default = g.default.getClassFactory(e), b.exports = c.default
    }, {10: 10}],
    140: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a) {
            function b() {
                k = (0, g.default)(e).getInstance(), l = (0, i.default)(e).getInstance()
            }

            function c(a, b, c) {
                var e = f.getCurrentBufferLevel(h.getReadOnlyMetricsFor(b));
                return e < d(a, b, c)
            }

            function d(a, b, c) {
                var d = NaN, e = a.getCurrentRepresentationInfo();
                if ("fragmentedText" === b) d = j.getAllTracksAreDisabled() ? 0 : e.fragmentDuration; else if ("audio" === b && c) {
                    var g = f.getCurrentBufferLevel(h.getReadOnlyMetricsFor("video"));
                    d = Math.floor(Math.max(g, e.fragmentDuration))
                } else {
                    var i = e.mediaInfo.streamInfo, l = a.getABRController();
                    if (l.isPlayingAtTopQuality(i)) {
                        var m = i.manifestInfo.duration >= k.getLongFormContentDurationThreshold();
                        d = m ? k.getBufferTimeAtTopQualityLongForm() : k.getBufferTimeAtTopQuality()
                    } else d = k.getStableBufferTime()
                }
                return d
            }

            var e = this.context, f = a.dashMetrics, h = a.metricsModel, j = a.textSourceBuffer, k = void 0, l = void 0,
                m = {execute: c, getBufferTarget: d};
            return b(), m
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(101), g = d(f), h = a(68), i = d(h), j = a(10), k = d(j);
        e.__dashjs_factory_name = "BufferLevelRule", c.default = k.default.getClassFactory(e), b.exports = c.default
    }, {10: 10, 101: 101, 68: 68}],
    141: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a) {
            function b(a, b) {
                var c = a.getCurrentRepresentationInfo(), g = c.mediaInfo, i = g.type, j = a.getScheduleController(),
                    k = j.getSeekTarget(), l = !isNaN(k), m = a.getBuffer(), n = l ? k : e.getIndexHandlerTime(a);
                if (isNaN(n) || "fragmentedText" === i && h.getAllTracksAreDisabled()) return null;
                if (l && j.setSeekTarget(NaN), m) {
                    var o = f.getBufferRange(a.getBuffer(), n);
                    null !== o && (d("Prior to making a request for time, NextFragmentRequestRule is aligning index handler's currentTime with bufferedRange.end.", n, " was changed to ", o.end), n = o.end)
                }
                var p = void 0;
                return b ? (n = b.startTime + b.duration / 2, p = e.getFragmentRequestForTime(a, c, n, {
                    timeThreshold: 0,
                    ignoreIsFinished: !0
                })) : (p = e.getFragmentRequestForTime(a, c, n, {keepIdx: !l}), p && a.getFragmentModel().isFragmentLoaded(p) && (p = e.getNextFragmentRequest(a, c)), p && (e.setIndexHandlerTime(a, p.startTime + p.duration), p.delayLoadingTime = (new Date).getTime() + j.getTimeToLoadDelay(), j.setTimeToLoadDelay(0))), p
            }

            var c = this.context, d = (0, g.default)(c).getInstance().log, e = a.adapter, f = a.sourceBufferController,
                h = a.textSourceBuffer, i = {execute: b};
            return i
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(8), g = d(f), h = a(10), i = d(h);
        e.__dashjs_factory_name = "NextFragmentRequestRule", c.default = i.default.getClassFactory(e), b.exports = c.default
    }, {10: 10, 8: 8}],
    142: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a) {
            function b() {
                r = NaN, s = null, t = NaN, u = null, v = !1, w = NaN, x = g.default.DEFAULT
            }

            function c(a, b) {
                var c, d;
                if (y = b, A = a.getStreamProcessor(), z = A.getFragmentLoader(), u = a.getTrackInfo(), w = u.fragmentDuration, d = u.DVRWindow, r = d.end, u.useCalculatedLiveEdgeTime) {
                    var i = p.getExpectedLiveEdge();
                    return p.setExpectedLiveEdge(r), void y((0, g.default)(l).create(i, x))
                }
                s = {
                    start: Math.max(0, r - n),
                    end: r + n
                }, t = Math.floor((d.end - d.start) / 2), c = o.getFragmentRequestForTime(A, u, r, {ignoreIsFinished: !0}), e(r, h, f, c)
            }

            function d() {
                r = NaN, s = null, t = NaN, u = null, v = !1, w = NaN, A = null, z = null
            }

            function e(a, b, c, d) {
                var f;
                if (null === d) f = o.generateFragmentRequestForTime(A, u, a), e(a, b, c, f); else {
                    var g = function d(e) {
                        m.off(k.default.CHECK_FOR_EXISTENCE_COMPLETED, d, this), e.exists ? b(e.request, a) : c(e.request, a)
                    };
                    m.on(k.default.CHECK_FOR_EXISTENCE_COMPLETED, g, this), z.checkForExistence(d)
                }
            }

            function f(a, b) {
                var c, d, i;
                return v ? void j(!1, b) : (i = b - r, c = i > 0 ? r - i : r + Math.abs(i) + t, void(c < s.start && c > s.end ? y((0, g.default)(l).create(null, x)) : (d = o.getFragmentRequestForTime(A, u, c, {ignoreIsFinished: !0}), e(c, h, f, d))))
            }

            function h(a, b) {
                var c, d, f = a.startTime;
                if (!v) {
                    if (!u.fragmentDuration) return void y((0, g.default)(l).create(f, x));
                    if (v = !0, s.end = f + 2 * t, b === r) return d = b + w, c = o.getFragmentRequestForTime(A, u, d, {ignoreIsFinished: !0}), void e(d, function () {
                        j(!0, d)
                    }, function () {
                        y((0, g.default)(l).create(d, x))
                    }, c)
                }
                j(!0, b)
            }

            function j(a, b) {
                var c, d, i;
                a ? s.start = b : s.end = b, c = Math.floor(s.end - s.start) <= w, c ? y((0, g.default)(l).create(a ? b : b - w, x)) : (i = (s.start + s.end) / 2, d = o.getFragmentRequestForTime(A, u, i, {ignoreIsFinished: !0}), e(i, h, f, d))
            }

            var l = this.context, m = (0, i.default)(l).getInstance(), o = a.adapter, p = a.timelineConverter,
                q = void 0, r = void 0, s = void 0, t = void 0, u = void 0, v = void 0, w = void 0, x = void 0,
                y = void 0, z = void 0, A = void 0;
            return q = {execute: c, reset: d}, b(), q
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(130), g = d(f), h = a(9), i = d(h), j = a(13), k = d(j), l = a(10), m = d(l), n = 43200;
        e.__dashjs_factory_name = "LiveEdgeBinarySearchRule", c.default = m.default.getClassFactory(e), b.exports = c.default
    }, {10: 10, 13: 13, 130: 130, 9: 9}],
    143: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a) {
            function b(a, b) {
                var c = a.getTrackInfo(), f = c.DVRWindow.end, h = g.default.DEFAULT;
                if (c.useCalculatedLiveEdgeTime) {
                    var i = e.getExpectedLiveEdge();
                    e.setExpectedLiveEdge(f), b((0, g.default)(d).create(i, h))
                } else b((0, g.default)(d).create(f, h))
            }

            var c = void 0, d = this.context, e = a.timelineConverter;
            return c = {execute: b}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(130), g = d(f), h = a(10), i = d(h);
        e.__dashjs_factory_name = "LiveEdgeWithTimeSynchronizationRule", c.default = i.default.getClassFactory(e), b.exports = c.default
    }, {10: 10, 130: 130}],
    144: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a() {
                e = [], f = [], e.push((0, m.default)(c).create({timelineConverter: (0, i.default)(c).getInstance()})), f.push((0, k.default)(c).create({
                    timelineConverter: (0, i.default)(c).getInstance(),
                    adapter: (0, o.default)(c).getInstance()
                }))
            }

            function b(a) {
                switch (a) {
                    case p:
                        return e;
                    case q:
                        return f;
                    default:
                        return null
                }
            }

            var c = this.context, d = void 0, e = void 0, f = void 0;
            return d = {initialize: a, getRules: b}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(10), g = d(f), h = a(37), i = d(h), j = a(142), k = d(j), l = a(143), m = d(l), n = a(15), o = d(n),
            p = "withAccurateTimeSourceRules", q = "bestGuestRules";
        e.__dashjs_factory_name = "SynchronizationRulesCollection";
        var r = g.default.getSingletonFactory(e);
        r.TIME_SYNCHRONIZED_RULES = p, r.BEST_GUESS_RULES = q, c.default = r, b.exports = c.default
    }, {10: 10, 142: 142, 143: 143, 15: 15, 37: 37}],
    145: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a() {
                l = (0, m.default)(e).create({
                    updateEventName: i.default.SERVICE_LOCATION_BLACKLIST_CHANGED,
                    loadFailedEventName: i.default.FRAGMENT_LOADING_COMPLETED
                }), n = (0, q.default)(e).create({blacklistController: l}), p = (0, o.default)(e).create({blacklistController: l}), r = n
            }

            function b(a) {
                r = h.getIsDVB(a) ? p : n
            }

            function c(a) {
                var b = a.baseUrls, c = a.selectedIdx;
                if (!isNaN(c)) return b[c];
                var d = r.select(b);
                return d ? (a.selectedIdx = b.indexOf(d), d) : void f.trigger(i.default.URL_RESOLUTION_FAILED, {error: new Error(t, u)})
            }

            function d() {
                l.reset()
            }

            var e = this.context, f = (0, g.default)(e).getInstance(), h = (0, k.default)(e).getInstance(), j = void 0,
                l = void 0, n = void 0, p = void 0, r = void 0;
            return j = {chooseSelectorFromManifest: b, select: c, reset: d}, a(), j
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(9), g = d(f), h = a(13), i = d(h), j = a(22), k = d(j), l = a(62), m = d(l), n = a(139), o = d(n),
            p = a(138), q = d(p), r = a(10), s = d(r), t = 1, u = "Failed to resolve a valid URL";
        e.__dashjs_factory_name = "BaseURLSelector";
        var v = s.default.getClassFactory(e);
        v.URL_RESOLUTION_FAILED_GENERIC_ERROR_CODE = t, v.URL_RESOLUTION_FAILED_GENERIC_ERROR_MESSAGE = u, c.default = v, b.exports = c.default
    }, {10: 10, 13: 13, 138: 138, 139: 139, 22: 22, 62: 62, 9: 9}],
    146: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a(a) {
                if (!a) return null;
                void 0 === a.fileStart && (a.fileStart = 0);
                var b = k.default.parseBuffer(a), d = (0, g.default)(c).create();
                return d.setData(b), d
            }

            var b = void 0, c = this.context;
            return b = {parse: a}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(153), g = d(f), h = a(10), i = d(h), j = a(6), k = d(j);
        e.__dashjs_factory_name = "BoxParser", c.default = i.default.getSingletonFactory(e), b.exports = c.default
    }, {10: 10, 153: 153, 6: 6}],
    147: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a() {
                g = !1
            }

            function b() {
                var a = "WebKitMediaSource" in window, b = "MediaSource" in window;
                return a || b
            }

            function c() {
                return g
            }

            function d(a) {
                g = a
            }

            function e(a, b) {
                var c = a.canPlayType(b);
                return "probably" === c || "maybe" === c
            }

            var f = void 0, g = void 0;
            return f = {
                supportsMediaSource: b,
                supportsEncryptedMedia: c,
                supportsCodec: e,
                setEncryptedMediaSupported: d
            }, a(), f
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(10), g = d(f);
        e.__dashjs_factory_name = "Capabilities", c.default = g.default.getSingletonFactory(e), b.exports = c.default
    }, {10: 10}],
    148: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a(a, b) {
                var c = 0;
                for (c = 0; c < this.customTimeRangeArray.length && a > this.customTimeRangeArray[c].start; c++) ;
                for (this.customTimeRangeArray.splice(c, 0, {
                    start: a,
                    end: b
                }), c = 0; c < this.customTimeRangeArray.length - 1; c++) this.mergeRanges(c, c + 1) && c--;
                this.length = this.customTimeRangeArray.length
            }

            function b() {
                this.customTimeRangeArray = [], this.length = 0
            }

            function c(a, b) {
                for (var c = 0; c < this.customTimeRangeArray.length; c++) if (a <= this.customTimeRangeArray[c].start && b >= this.customTimeRangeArray[c].end) this.customTimeRangeArray.splice(c, 1), c--; else {
                    if (a > this.customTimeRangeArray[c].start && b < this.customTimeRangeArray[c].end) {
                        this.customTimeRangeArray.splice(c + 1, 0, {
                            start: b,
                            end: this.customTimeRangeArray[c].end
                        }), this.customTimeRangeArray[c].end = a;
                        break
                    }
                    a > this.customTimeRangeArray[c].start && a < this.customTimeRangeArray[c].end ? this.customTimeRangeArray[c].end = a : b > this.customTimeRangeArray[c].start && b < this.customTimeRangeArray[c].end && (this.customTimeRangeArray[c].start = b)
                }
                this.length = this.customTimeRangeArray.length
            }

            function d(a, b) {
                var c = this.customTimeRangeArray[a], d = this.customTimeRangeArray[b];
                return c.start <= d.start && d.start <= c.end && c.end <= d.end ? (c.end = d.end, this.customTimeRangeArray.splice(b, 1), !0) : d.start <= c.start && c.start <= d.end && d.end <= c.end ? (c.start = d.start, this.customTimeRangeArray.splice(b, 1), !0) : d.start <= c.start && c.start <= d.end && c.end <= d.end ? (this.customTimeRangeArray.splice(a, 1), !0) : c.start <= d.start && d.start <= c.end && d.end <= c.end && (this.customTimeRangeArray.splice(b, 1), !0)
            }

            function e(a) {
                return this.customTimeRangeArray[a].start
            }

            function f(a) {
                return this.customTimeRangeArray[a].end
            }

            var g = [], h = 0;
            return {customTimeRangeArray: g, length: h, add: a, clear: b, remove: c, mergeRanges: d, start: e, end: f}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(10), g = d(f);
        e.__dashjs_factory_name = "CustomTimeRanges", c.default = g.default.getClassFactory(e), b.exports = c.default
    }, {10: 10}],
    149: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a(a) {
                if (void 0 !== t) return t;
                t = !1;
                var b, c = "1", d = "1";
                try {
                    "undefined" != typeof window && (b = window[a])
                } catch (e) {
                    return r("Warning: DOMStorage access denied: " + e.message), t
                }
                if (!b || a !== o && a !== p) return t;
                try {
                    b.setItem(c, d), b.removeItem(c), t = !0
                } catch (e) {
                    r("Warning: DOMStorage is supported, but cannot be used: " + e.message)
                }
                return t
            }

            function b() {
                a(o) && l.forEach(function (a) {
                    var b = localStorage.getItem(a.oldKey);
                    if (b) {
                        localStorage.removeItem(a.oldKey);
                        try {
                            localStorage.setItem(a.newKey, b)
                        } catch (c) {
                            r(c.message)
                        }
                    }
                })
            }

            function c() {
                u = (0, i.default)(q).getInstance(), b()
            }

            function d() {
                var a = 6e5;
                return Math.round((new Date).getTime() / a) * a
            }

            function e(b, c) {
                return a(b) && u["get" + c + "CachingInfo"]().enabled
            }

            function f(a) {
                if (!e(o, "LastMediaSettings")) return null;
                var b = n.replace(/\?/, a), c = JSON.parse(localStorage.getItem(b)) || {},
                    d = (new Date).getTime() - parseInt(c.timestamp, 10) >= u.getLastMediaSettingsCachingInfo().ttl || !1,
                    f = c.settings;
                return d && (localStorage.removeItem(b), f = null), f
            }

            function g(a) {
                var b = NaN;
                if (e(o, "LastBitrate")) {
                    var c = m.replace(/\?/, a), d = JSON.parse(localStorage.getItem(c)) || {},
                        f = (new Date).getTime() - parseInt(d.timestamp, 10) >= u.getLastBitrateCachingInfo().ttl || !1,
                        g = parseInt(d.bitrate, 10);
                    isNaN(g) || f ? f && localStorage.removeItem(c) : (b = g, r("Last saved bitrate for " + a + " was " + g))
                }
                return b
            }

            function h(a, b) {
                if (e(o, "LastMediaSettings")) {
                    var c = n.replace(/\?/, a);
                    try {
                        localStorage.setItem(c, JSON.stringify({settings: b, timestamp: d()}))
                    } catch (f) {
                        r(f.message)
                    }
                }
            }

            function j(a, b) {
                if (e(o, "LastBitrate") && b) {
                    var c = m.replace(/\?/, a);
                    try {
                        localStorage.setItem(c, JSON.stringify({bitrate: b / 1e3, timestamp: d()}))
                    } catch (f) {
                        r(f.message)
                    }
                }
            }

            var q = this.context, r = (0, k.default)(q).getInstance().log, s = void 0, t = void 0, u = void 0;
            return s = {
                getSavedBitrateSettings: g,
                setSavedBitrateSettings: j,
                getSavedMediaSettings: f,
                setSavedMediaSettings: h,
                isSupported: a
            }, c(), s
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(10), g = d(f), h = a(101), i = d(h), j = a(8), k = d(j),
            l = [{oldKey: "dashjs_vbitrate", newKey: "dashjs_video_bitrate"}, {
                oldKey: "dashjs_abitrate",
                newKey: "dashjs_audio_bitrate"
            }, {oldKey: "dashjs_vsettings", newKey: "dashjs_video_settings"}, {
                oldKey: "dashjs_asettings",
                newKey: "dashjs_audio_settings"
            }], m = "dashjs_?_bitrate", n = "dashjs_?_settings", o = "localStorage", p = "sessionStorage";
        e.__dashjs_factory_name = "DOMStorage";
        var q = g.default.getSingletonFactory(e);
        c.default = q, b.exports = c.default
    }, {10: 10, 101: 101, 8: 8}],
    150: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a) {
            function b() {
                return o
            }

            function c(a) {
                o = a
            }

            function d(a, b) {
                var c = !0, d = 0, e = void 0, f = void 0;
                if (void 0 === b && (b = !1), a.tag > 16777215 ? (n.getUint32(o) !== a.tag && (c = !1), d = 4) : a.tag > 65535 ? (e = n.getUint16(o), f = n.getUint8(o + 2), 256 * e + f !== a.tag && (c = !1), d = 3) : a.tag > 255 ? (n.getUint16(o) !== a.tag && (c = !1), d = 2) : (n.getUint8(o) !== a.tag && (c = !1), d = 1), !c && a.required && !b) throw new i.default("required tag not found");
                return c && (o += d), c
            }

            function e(a, b) {
                var c = d(a, b);
                return c && h(), c
            }

            function f(a) {
                var b = void 0;
                return d(a), b = h(), m[a.parse](b)
            }

            function g(a, b) {
                var c = d(a, b), e = void 0;
                return c && (e = h(), o += e), c
            }

            function h(a) {
                var b = 1, c = 128, d = 8, e = -1, f = 0, g = n.getUint8(o), h = void 0;
                for (h = 0; h < d; h += 1) {
                    if ((g & c) === c) {
                        f = void 0 === a ? g & ~c : g, e = h;
                        break
                    }
                    c >>= 1
                }
                for (h = 0; h < e; h += 1, b += 1) f = f << 8 | 255 & n.getUint8(o + b);
                return o += b, f
            }

            function j(a) {
                var b = void 0;
                switch (a) {
                    case 4:
                        b = n.getFloat32(o), o += 4;
                        break;
                    case 8:
                        b = n.getFloat64(o), o += 8
                }
                return b
            }

            function k(a) {
                var b = 0, c = void 0;
                for (c = 0; c < a; c += 1) b <<= 8, b |= 255 & n.getUint8(o + c);
                return o += a, b
            }

            function l() {
                return o < n.byteLength
            }

            var m = void 0, n = new DataView(a.data), o = 0;
            return m = {
                getPos: b,
                setPos: c,
                consumeTag: d,
                consumeTagAndSize: e,
                parseTag: f,
                skipOverElement: g,
                getMatroskaCodedNum: h,
                getMatroskaFloat: j,
                getMatroskaUint: k,
                moreData: l
            }
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(10), g = d(f), h = a(162), i = d(h);
        e.__dashjs_factory_name = "EBMLParser", c.default = g.default.getClassFactory(e), b.exports = c.default
    }, {10: 10, 162: 162}],
    151: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a(a) {
                l.trigger(i.default.ERROR, {error: "capability", event: a})
            }

            function b(a, b, c) {
                l.trigger(i.default.ERROR, {error: "download", event: {id: a, url: b, request: c}})
            }

            function c(a, b, c, d) {
                l.trigger(i.default.ERROR, {error: "manifestError", event: {message: a, id: b, manifest: c, event: d}})
            }

            function d(a, b, c) {
                l.trigger(i.default.ERROR, {error: "cc", event: {message: a, id: b, cc: c}})
            }

            function e(a) {
                l.trigger(i.default.ERROR, {error: "mediasource", event: a})
            }

            function f(a) {
                l.trigger(i.default.ERROR, {error: "key_session", event: a})
            }

            function h(a) {
                l.trigger(i.default.ERROR, {error: "key_message", event: a})
            }

            var j = void 0, k = this.context, l = (0, g.default)(k).getInstance();
            return j = {
                capabilityError: a,
                downloadError: b,
                manifestError: c,
                timedTextError: d,
                mediaSourceError: e,
                mediaKeySessionError: f,
                mediaKeyMessageError: h
            }
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(9), g = d(f), h = a(13), i = d(h), j = a(10), k = d(j), l = "mediasource", m = "mediakeys",
            n = "manifest", o = "SIDX", p = "content", q = "initialization", r = "xlink", s = "codec", t = "parse",
            u = "nostreams", v = "parse";
        e.__dashjs_factory_name = "ErrorHandler";
        var w = k.default.getSingletonFactory(e);
        w.CAPABILITY_ERROR_MEDIASOURCE = l, w.CAPABILITY_ERROR_MEDIAKEYS = m, w.DOWNLOAD_ERROR_ID_MANIFEST = n, w.DOWNLOAD_ERROR_ID_SIDX = o, w.DOWNLOAD_ERROR_ID_CONTENT = p, w.DOWNLOAD_ERROR_ID_INITIALIZATION = q, w.DOWNLOAD_ERROR_ID_XLINK = r, w.MANIFEST_ERROR_ID_CODEC = s, w.MANIFEST_ERROR_ID_PARSE = t, w.MANIFEST_ERROR_ID_NOSTREAMS = u, w.TIMED_TEXT_ERROR_ID_PARSE = v, c.default = w, b.exports = c.default
    }, {10: 10, 13: 13, 9: 9}],
    152: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a(a) {
                var b = a.streamId, c = a.mediaInfo.type, e = a.quality;
                d[b] = d[b] || {}, d[b][c] = d[b][c] || {}, d[b][c][e] = a
            }

            function b(a, b, c) {
                return d[a][b][c]
            }

            function c() {
                d = {}
            }

            var d = {}, e = {save: a, extract: b, reset: c};
            return e
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(10), g = d(f);
        e.__dashjs_factory_name = "InitCache", c.default = g.default.getSingletonFactory(e), b.exports = c.default
    }, {10: 10}],
    153: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a(a) {
                return a && k && k.boxes && 0 !== k.boxes.length ? i(k.fetch(a)) : null
            }

            function b(a) {
                for (var b, c = k.fetchAll(a), d = [], e = 0, f = c.length; e < f; e++) b = i(c[e]), b && d.push(b);
                return d
            }

            function c(a) {
                k = a
            }

            function d() {
                if (!k || !k.boxes || !k.boxes.length) return null;
                var a = k.boxes[k.boxes.length - 1].type, c = b(a);
                return c[c.length - 1]
            }

            function e() {
                return k._cursor.offset
            }

            function f() {
                l = {offset: "_offset", size: "size", type: "type"}, m = {
                    references: "references",
                    timescale: "timescale",
                    earliest_presentation_time: "earliest_presentation_time",
                    first_offset: "first_offset"
                }, n = {
                    reference_type: "reference_type",
                    referenced_size: "referenced_size",
                    subsegment_duration: "subsegment_duration"
                }, o = {
                    id: "id",
                    value: "value",
                    timescale: "timescale",
                    scheme_id_uri: "scheme_id_uri",
                    presentation_time_delta: "presentation_time_delta",
                    event_duration: "event_duration",
                    message_data: "message_data"
                }, p = {timescale: "timescale"}, q = {sequence_number: "sequence_number"}, r = {
                    base_data_offset: "base_data_offset",
                    sample_description_index: "sample_description_index",
                    default_sample_duration: "default_sample_duration",
                    default_sample_size: "default_sample_size",
                    default_sample_flags: "default_sample_flags",
                    flags: "flags"
                }, s = {
                    version: "version",
                    baseMediaDecodeTime: "baseMediaDecodeTime",
                    flags: "flags"
                }, t = {
                    sample_count: "sample_count",
                    first_sample_flags: "first_sample_flags",
                    data_offset: "data_offset",
                    flags: "flags",
                    samples: "samples"
                }, u = {
                    sample_size: "sample_size",
                    sample_duration: "sample_duration",
                    sample_composition_time_offset: "sample_composition_time_offset"
                }
            }

            function h(a, b, c) {
                for (var d in c) b[d] = a[c[d]]
            }

            function i(a) {
                if (!a) return null;
                var b, c, d = new g.default;
                switch (h(a, d, l), a.hasOwnProperty("_incomplete") && (d.isComplete = !a._incomplete), d.type) {
                    case"sidx":
                        if (h(a, d, m), d.references) for (b = 0, c = d.references.length; b < c; b++) h(a.references[b], d.references[b], n);
                        break;
                    case"emsg":
                        h(a, d, o);
                        break;
                    case"mdhd":
                        h(a, d, p);
                        break;
                    case"mfhd":
                        h(a, d, q);
                        break;
                    case"tfhd":
                        h(a, d, r);
                        break;
                    case"tfdt":
                        h(a, d, s);
                        break;
                    case"trun":
                        if (h(a, d, t), d.samples) for (b = 0, c = d.samples.length; b < c; b++) h(a.samples[b], d.samples[b], u)
                }
                return d
            }

            var j = void 0, k = void 0, l = void 0, m = void 0, n = void 0, o = void 0, p = void 0, q = void 0,
                r = void 0, s = void 0, t = void 0, u = void 0;
            return j = {getBox: a, getBoxes: b, setData: c, getLastBox: d, getOffset: e}, f(), j
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(165), g = d(f), h = a(10), i = d(h);
        e.__dashjs_factory_name = "IsoFile", c.default = i.default.getClassFactory(e), b.exports = c.default
    }, {10: 10, 165: 165}],
    154: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a(a, b) {
                n = a, p = b, s = !1, t = NaN, v = null, q = (0, o.default)(h).getInstance(), w = g.default.BEST_GUESS_RULES, j.on(m.default.STREAM_INITIALIZED, f, this)
            }

            function b() {
                s = !1, t = NaN
            }

            function c() {
                return v
            }

            function d() {
                j.off(m.default.STREAM_INITIALIZED, f, this), b(), v = null, n = null, p = null, s = !1, t = NaN, w = null, q = null
            }

            function e(a) {
                var b = ((new Date).getTime() - t) / 1e3;
                v = a.value, j.trigger(m.default.LIVE_EDGE_SEARCH_COMPLETED, {
                    liveEdge: v,
                    searchTime: b,
                    error: null === v ? new i.default(r, "live edge has not been found", null) : null
                })
            }

            function f(a) {
                !p.isDynamic() || s || a.error || (w = n.isTimeSyncCompleted() ? g.default.TIME_SYNCHRONIZED_RULES : g.default.BEST_GUESS_RULES, u = (0, g.default)(h).getInstance().getRules(w), s = !0, t = (new Date).getTime(), q.applyRules(u, p, e, null, function (a, b) {
                    return b
                }))
            }

            var h = this.context, j = (0, k.default)(h).getInstance(), l = void 0, n = void 0, p = void 0, q = void 0,
                s = void 0, t = void 0, u = void 0, v = void 0, w = void 0;
            return l = {initialize: a, abortSearch: b, getLiveEdge: c, reset: d}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(144), g = d(f), h = a(162), i = d(h), j = a(9), k = d(j), l = a(13), m = d(l), n = a(129), o = d(n),
            p = a(10), q = d(p), r = 1;
        e.__dashjs_factory_name = "LiveEdgeFinder";
        var s = q.default.getSingletonFactory(e);
        s.LIVE_EDGE_NOT_FOUND_ERROR_CODE = r, c.default = s, b.exports = c.default
    }, {10: 10, 129: 129, 13: 13, 144: 144, 162: 162, 9: 9}],
    155: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a(a, b) {
                return JSON.stringify(a) === JSON.stringify(b)
            }

            var b = void 0;
            return b = {areSimpleEquivalent: a}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(10), g = d(f);
        e.__dashjs_factory_name = "ObjectUtils", c.default = g.default.getSingletonFactory(e), b.exports = c.default
    }, {10: 10}],
    156: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a(a) {
                return a
            }

            function b(a) {
                return a
            }

            var c = void 0;
            return c = {modifyRequestURL: a, modifyRequestHeader: b}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(10), g = d(f);
        e.__dashjs_factory_name = "RequestModifier", c.default = g.default.getSingletonFactory(e), b.exports = c.default
    }, {10: 10}],
    157: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a(a) {
                a && a.videoModel && (ba = a.videoModel)
            }

            function b(a) {
                if (a.hasOwnProperty("begin") && a.hasOwnProperty("end")) {
                    var b = o(a.begin), c = o(a.end);
                    return [b, c]
                }
                return null
            }

            function c() {
                var a = "cue_TTML_" + ca;
                return ca++, a
            }

            function d(a, b, c) {
                function d(a, b) {
                    if (a.hasOwnProperty(b)) {
                        var c = a[b];
                        f.indexOf(c) < 0 && f.push(c)
                    }
                }

                for (var e = [], f = [], g = [], h = 0; h < a.length; h++) {
                    var i = a[h];
                    d(i, "begin"), d(i, "end")
                }
                if (0 === f.length) return g;
                if ("undefined" != typeof b && "undefined" != typeof c) {
                    for (var h = 0; h < f.length; h++) {
                        var j = o(f[h]);
                        b < j && j < c && e.push(j)
                    }
                    e.push(b), e.push(c)
                } else for (var h = 0; h < f.length; h++) e.push(o(f[h]));
                e.sort(function (a, b) {
                    return a - b
                });
                for (var h = 0; h < e.length - 1; h++) g.push([e[h], e[h + 1]]);
                return g
            }

            function e(a, b) {
                return "undefined" != typeof startInterval && a < b && (a = b), a
            }

            function f(a, b) {
                return "undefined" != typeof b && a > b && (a = b), a
            }

            function g(a, b, c) {
                var d = o(a.begin), g = o(a.end);
                return d = e(d, b), g = f(g, c), "undefined" != typeof b && "undefined" != typeof c && (g < b || d > c) ? (L("TTML: Cue " + d + "-" + g + " outside interval " + b + "-" + c), null) : [d, g]
            }

            function h(a, c) {
                var d = !0;
                if (a.hasOwnProperty("span")) {
                    var e = b(a.span);
                    null !== e && (d = e[0] < c[1] && e[1] > c[0])
                }
                return d
            }

            function j(a, e, f) {
                var j = void 0, k = void 0, l = void 0, m = void 0, n = void 0, o = "", r = new i.default([], "", (!1));
                if (O = r.xml_str2json(a), !O) throw new Error("TTML document could not be parsed");
                if (ba.getTTMLRenderingDiv() && (n = "html"), j = O.tt, !j) throw new Error("TTML document lacks tt element");
                var s = p(j, "http://www.w3.org/ns/ttml");
                if (s && q(j, s), m = j["tts:extent"], k = j.head, !k) throw new Error("TTML document lacks head element");
                if (k.layout && (Q = k.layout.region_asArray), k.styling && (P = k.styling.style_asArray), l = j.body, !l) throw new Error("TTML document lacks body element");
                var w = E(), x = ba.getElement().clientWidth, y = ba.getElement().clientHeight,
                    z = [x / w[0], y / w[1]];
                V["font-size"] = z[1] + "px;";
                var D = [];
                if (Q) for (var J = 0; J < Q.length; J++) D.push(B(JSON.parse(JSON.stringify(Q[J])), z));
                var K = p(O.tt, "http://www.w3.org/ns/ttml#parameter");
                j.hasOwnProperty(K + ":frameRate") && (j.frameRate = parseInt(j[K + ":frameRate"], 10));
                for (var M = [], N = j.body_asArray[0].__children, U = 0; U < N.length; U++) {
                    var W = N[U].div, X = null;
                    if (null === (X = b(W))) {
                        var Y = W.p_asArray;
                        if (null === X && (!Y || 0 === Y.length)) return o = "TTML has div that contains no timing and no paragraphs.", L(o), M;
                        for (var Z = 0; Z < Y.length; Z++) {
                            var $ = Y[Z], _ = $.span_asArray, aa = [];
                            if ($.hasOwnProperty("begin") && $.hasOwnProperty("end")) {
                                var ca = g($, e, f);
                                null !== ca && aa.push(ca)
                            } else aa = d(_, e, f);
                            if (0 !== aa.length) for (var da = $.__children, ea = 0; ea < aa.length; ea++) {
                                for (var fa = aa[ea], ga = [], ha = 0; ha < da.length; ha++) {
                                    var ia = da[ha];
                                    h(ia, fa) && ga.push(ia)
                                }
                                if (0 !== ga.length) if ("html" === n) {
                                    S = {}, T = {}, R = {};
                                    var ja = H($, W, z), ka = I($, z), la = ka[1];
                                    ka = ka[0];
                                    var ma = document.createElement("div");
                                    ma.className = la;
                                    var na = G(ga, z);
                                    na.className = "cueDirUniWrapper", t("unicode-bidi", ka) && (na.style.cssText += u("unicode-bidi", ka), v("unicode-bidi", ka)), t("direction", ka) && (na.style.cssText += u("direction", ka), v("direction", ka)), t("padding-left", ka) && t("padding-right", ka) && (na.innerHTML = F(na, ka)), t("padding-left", ka) && t("padding-right", ka) && (v("padding-left", ka), v("padding-right", ka));
                                    var oa = "";
                                    if (t("regionID", ja)) {
                                        var pa = u("regionID", ja);
                                        oa = pa.slice(pa.indexOf(":") + 1, pa.length - 1)
                                    }
                                    ka && (ma.style.cssText = ka.join(" ") + "display:flex;"), ja && (ja = ja.join(" ")), ma.appendChild(na);
                                    var qa = document.createElement("div");
                                    qa.appendChild(ma), qa.id = c(), qa.style.cssText = "position: absolute; margin: 0; display: flex; box-sizing: border-box; pointer-events: none;" + ja, 0 === Object.keys(R).length && (R.defaultFontSize = "100"), M.push({
                                        start: fa[0],
                                        end: fa[1],
                                        type: "html",
                                        cueHTMLElement: qa,
                                        regions: D,
                                        regionID: oa,
                                        cueID: qa.id,
                                        videoHeight: y,
                                        videoWidth: x,
                                        cellResolution: w,
                                        fontSize: R || {defaultFontSize: "100"},
                                        lineHeight: S,
                                        linePadding: T
                                    })
                                } else {
                                    var ra = "", sa = ga;
                                    sa.length && sa.forEach(function (a) {
                                        if (a.hasOwnProperty("span")) {
                                            var b = a.span.__children;
                                            b.forEach(function (a) {
                                                b.hasOwnProperty("metadata") || (a.hasOwnProperty("#text") ? ra += a["#text"].replace(/[\r\n]+/gm, " ").trim() : "br" in a && (ra += "\n"))
                                            })
                                        } else ra += a.hasOwnProperty("br") ? "\n" : a["#text"].replace(/[\r\n]+/gm, " ").trim()
                                    }), M.push({start: fa[0], end: fa[1], data: ra, type: "text"})
                                }
                            } else o = "TTML: Empty paragraph"
                        }
                    } else {
                        var ta = void 0;
                        if (W.region) {
                            var ua = C(Q, W.region);
                            ta = A(ua, m)
                        }
                        ta || (ta = A(W, m));
                        var va = j.head.metadata.image_asArray;
                        if (void 0 !== W["smpte:backgroundImage"]) for (var wa = 0; wa < va.length; wa++) "#" + va[wa]["xml:id"] === W["smpte:backgroundImage"] && M.push({
                            start: X[0],
                            end: X[1],
                            id: c(),
                            data: "data:image/" + va[wa].imagetype.toLowerCase() + ";base64, " + va[wa].__text,
                            type: "image",
                            layout: ta
                        })
                    }
                }
                if ("" !== o && L(o), M.length > 0) return M;
                throw new Error(o)
            }

            function n() {
                N = /^([0-9][0-9]+):([0-5][0-9]):([0-5][0-9])|(60)(\.([0-9])+)?$/, R = {}, S = {}, T = {}, U = {
                    top: "auto;",
                    left: "auto;",
                    width: "90%;",
                    height: "10%;",
                    "align-items": "flex-start;",
                    overflow: "visible;",
                    "-ms-writing-mode": "lr-tb, horizontal-tb;",
                    "-webkit-writing-mode": "horizontal-tb;",
                    "-moz-writing-mode": "horizontal-tb;",
                    "writing-mode": "horizontal-tb;"
                }, V = {
                    color: "rgb(255,255,255);",
                    direction: "ltr;",
                    "font-family": "monospace, sans-serif;",
                    "font-style": "normal;",
                    "line-height": "normal;",
                    "font-weight": "normal;",
                    "text-align": "start;",
                    "justify-content": "flex-start;",
                    "text-decoration": "none;",
                    "unicode-bidi": "normal;",
                    "white-space": "normal;",
                    width: "100%;"
                }, W = {
                    monospace: "font-family: monospace;",
                    sansSerif: "font-family: sans-serif;",
                    serif: "font-family: serif;",
                    monospaceSansSerif: "font-family: monospace, sans-serif;",
                    monospaceSerif: "font-family: monospace, serif;",
                    proportionalSansSerif: "font-family: Arial;",
                    proportionalSerif: "font-family: Times New Roman;",
                    default: "font-family: monospace, sans-serif;"
                }, X = {
                    right: ["justify-content: flex-end;", "text-align: right;"],
                    start: ["justify-content: flex-start;", "text-align: start;"],
                    center: ["justify-content: center;", "text-align: center;"],
                    end: ["justify-content: flex-end;", "text-align: end;"],
                    left: ["justify-content: flex-start;", "text-align: left;"]
                }, Y = {
                    start: "text-align: start;",
                    center: "text-align: center;",
                    end: "text-align: end;",
                    auto: ""
                }, Z = {
                    wrap: "white-space: normal;",
                    noWrap: "white-space: nowrap;"
                }, $ = {
                    normal: "unicode-bidi: normal;",
                    embed: "unicode-bidi: embed;",
                    bidiOverride: "unicode-bidi: bidi-override;"
                }, _ = {
                    before: "align-items: flex-start;",
                    center: "align-items: center;",
                    after: "align-items: flex-end;"
                }, aa = {
                    lrtb: "-webkit-writing-mode: horizontal-tb;writing-mode: horizontal-tb;",
                    rltb: "-webkit-writing-mode: horizontal-tb;writing-mode: horizontal-tb;direction: rtl;unicode-bidi: bidi-override;",
                    tbrl: "-webkit-writing-mode: vertical-rl;writing-mode: vertical-rl;-webkit-text-orientation: upright;text-orientation: upright;",
                    tblr: "-webkit-writing-mode: vertical-lr;writing-mode: vertical-lr;-webkit-text-orientation: upright;text-orientation: upright;",
                    lr: "-webkit-writing-mode: horizontal-tb;writing-mode: horizontal-tb;",
                    rl: "-webkit-writing-mode: horizontal-tb;writing-mode: horizontal-tb;direction: rtl;",
                    tb: "-webkit-writing-mode: vertical-rl;writing-mode: vertical-rl;-webkit-text-orientation: upright;text-orientation: upright;"
                }
            }

            function o(a) {
                var b, c, d, e = N.test(a);
                if (!e) return NaN;
                if (b = a.split(":"), c = parseFloat(b[0]) * l + parseFloat(b[1]) * m + parseFloat(b[2]), b[3]) {
                    if (d = O.tt.frameRate, !d || isNaN(d)) return NaN;
                    c += parseFloat(b[3]) / d
                }
                return c
            }

            function p(a, b) {
                var c = Object.keys(a).filter(function (c) {
                    return ("xmlns" === c.split(":")[0] || "xmlns" === c.split(":")[1]) && a[c] === b
                }).map(function (a) {
                    return a.split(":")[2] || a.split(":")[1]
                });
                return 1 != c.length ? null : c[0]
            }

            function q(a, b) {
                for (var c in a) if (a.hasOwnProperty(c)) {
                    if (("object" == typeof a[c] || a[c] instanceof Object) && !Array.isArray(a[c])) q(a[c], b); else if (Array.isArray(a[c])) for (var d = 0; d < a[c].length; d++) q(a[c][d], b);
                    var e = c.slice(c.indexOf(b) + b.length + 1);
                    a[e] = a[c], delete a[c]
                }
            }

            function r(a) {
                return a.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
            }

            function s(a) {
                var b = a.slice(1), c = b.match(/.{2}/g),
                    d = parseFloat(parseInt(parseInt(c[3], 16) / 255 * 1e3, 10) / 1e3),
                    e = c.slice(0, 3).map(function (a) {
                        return parseInt(a, 16)
                    });
                return "rgba(" + e.join(",") + "," + d + ");"
            }

            function t(a, b) {
                for (var c = 0; c < b.length; c++) if (b[c].indexOf(a) > -1) return !0;
                return !1
            }

            function u(a, b) {
                for (var c = 0; c < b.length; c++) if (b[c].indexOf(a) > -1) return b[c];
                return null
            }

            function v(a, b) {
                b.splice(b.indexOf(u(a, b)), 1)
            }

            function w(a, b) {
                for (var c = 0; c < a.length; c++) for (var d = 0; d < b.length; d++) a[c] && a[c].split(":")[0].indexOf(b[d].split(":")[0]) > -1 && a.splice(c, 1);
                return a.concat(b)
            }

            function x(a, b, c) {
                var d = [];
                for (var e in a) if (a.hasOwnProperty(e)) {
                    var f = e.replace("ebutts:", "");
                    f = f.replace("xml:", ""), f = f.replace("tts:", ""), f = r(f), a[f] = a[e], delete a[e]
                }
                if ("line-padding" in a) {
                    var g = parseFloat(a["line-padding"].slice(a["line-padding"].indexOf(":") + 1, a["line-padding"].indexOf("c")));
                    "id" in a && (T[a.id] = g);
                    var h = g * b[0] + "px;";
                    d.push("padding-left:" + h), d.push("padding-right:" + h)
                }
                if ("font-size" in a) {
                    var i = parseFloat(a["font-size"].slice(a["font-size"].indexOf(":") + 1, a["font-size"].indexOf("%")));
                    "id" in a && (R[a.id] = i);
                    var j = i / 100 * b[1] + "px;";
                    d.push("font-size:" + j)
                }
                if ("line-height" in a) if ("normal" === a["line-height"]) d.push("line-height: normal;"); else {
                    var k = parseFloat(a["line-height"].slice(a["line-height"].indexOf(":") + 1, a["line-height"].indexOf("%")));
                    "id" in a && (S[a.id] = k);
                    var l = k / 100 * b[1] + "px;";
                    d.push("line-height:" + l)
                }
                "font-family" in a && (a["font-family"] in W ? d.push(W[a["font-family"]]) : d.push("font-family:" + a["font-family"] + ";")), "text-align" in a && a["text-align"] in X && (d.push(X[a["text-align"]][0]), d.push(X[a["text-align"]][1])), "multi-row-align" in a && (t("text-align", d) && "auto" != a["multi-row-align"] && v("text-align", d), a["multi-row-align"] in Y && d.push(Y[a["multi-row-align"]]));
                var m;
                return "background-color" in a && (a["background-color"].indexOf("#") > -1 && a["background-color"].length - 1 === 8 ? (m = s(a["background-color"]), d.push("background-color: " + m)) : d.push("background-color:" + a["background-color"] + ";")), "color" in a && (a.color.indexOf("#") > -1 && a.color.length - 1 === 8 ? (m = s(a.color), d.push("color: " + m)) : d.push("color:" + a.color + ";")), "wrap-option" in a && (a["wrap-option"] in Z ? d.push(Z[a["wrap-option"]]) : d.push("white-space:" + a["wrap-option"])), "unicode-bidi" in a && (a["unicode-bidi"] in $ ? d.push($[a["unicode-bidi"]]) : d.push("unicode-bidi:" + a["unicode-bidi"])), "font-style" in a && d.push("font-style:" + a["font-style"] + ";"), "font-weight" in a && d.push("font-weight:" + a["font-weight"] + ";"), "direction" in a && d.push("direction:" + a.direction + ";"), "text-decoration" in a && d.push("text-decoration:" + a["text-decoration"] + ";"), c && (d = d.concat(B(a, b))), O.tt.hasOwnProperty("xml:space") && "preserve" === O.tt["xml:space"] && d.push("white-space: pre;"), d
            }

            function y(a, b) {
                for (var c = 0; c < a.length; c++) {
                    var d = a[c];
                    if (d["xml:id"] === b || d.id === b) return d
                }
                return null
            }

            function z(a, b, c) {
                var d = [], e = a.match(/\S+/g);
                return e.forEach(function (a) {
                    var e = y(P, a);
                    if (e) {
                        var f = x(JSON.parse(JSON.stringify(e)), b, c);
                        d = d.concat(f)
                    }
                }), d
            }

            function A(a, b) {
                var c = /([\d\.]+)(%|px)\s+([\d\.]+)(%|px)/;
                if ("tts:extent" in a && "tts:origin" in a) {
                    var d = c.exec(a["tts:extent"]), e = c.exec(a["tts:origin"]);
                    if (null === d || null === e) return L("Bad extent or origin: " + a["tts:extent"] + " " + a["tts:origin"]), null;
                    var f = parseFloat(d[1]), g = parseFloat(d[3]), h = parseFloat(e[1]), i = parseFloat(e[3]);
                    if (b) {
                        var j = c.exec(b);
                        if (null === j || "px" !== j[2] || "px" !== j[4]) return L("Bad tt.extent: " + b), null;
                        var k = parseFloat(j[1]), l = parseFloat(j[3]);
                        "px" === d[2] && (f = f / k * 100), "px" === d[4] && (g = g / l * 100), "px" === e[2] && (h = h / k * 100), "px" === e[4] && (i = i / l * 100)
                    }
                    return {left: h, top: i, width: f, height: g}
                }
                return null
            }

            function B(a, b) {
                var c = [];
                for (var d in a) {
                    var e = d.replace("tts:", "");
                    e = e.replace("xml:", ""), e = r(e), a[e] = a[d], e !== d && delete a[d]
                }
                if ("extent" in a) {
                    var f = a.extent.split(/\s/);
                    c.push("width: " + f[0] + ";"), c.push("height: " + f[1] + ";")
                }
                if ("origin" in a) {
                    var g = a.origin.split(/\s/);
                    c.push("left: " + g[0] + ";"), c.push("top: " + g[1] + ";")
                }
                if ("display-align" in a && c.push(_[a["display-align"]]), "writing-mode" in a && c.push(aa[a["writing-mode"]]), "style" in a) {
                    var h = z(a.style, b, !0);
                    c = c.concat(h)
                }
                return "padding" in a && c.push("padding:" + a.padding + ";"), "overflow" in a && c.push("overflow:" + a.overflow + ";"), "show-background" in a && c.push("show-background:" + a["show-background"] + ";"), "id" in a && c.push("regionID:" + a.id + ";"), c
            }

            function C(a, b) {
                for (var c = 0; c < a.length; c++) {
                    var d = a[c];
                    if (d["xml:id"] === b || d.id === b) return d
                }
                return null
            }

            function D(a, b) {
                var c = [], d = a.match(/\S+/g);
                return d.forEach(function (a) {
                    var d = C(Q, a);
                    if (d) {
                        var e = B(JSON.parse(JSON.stringify(d)), b);
                        c = c.concat(e)
                    }
                }), c
            }

            function E() {
                var a = [32, 15];
                return O.tt.hasOwnProperty("ttp:cellResolution") ? O.tt["ttp:cellResolution"].split(" ").map(parseFloat) : a
            }

            function F(a, b) {
                for (var c = u("padding-left", b), d = u("padding-right", b), e = c.concat(" " + d + " "), f = "", g = "", h = "", i = Array.prototype.slice.call(a.children), j = a.getElementsByClassName("lineBreak")[0], k = i.indexOf(j), l = []; k != -1;) l.push(k), k = i.indexOf(j, k + 1);
                var m = "</span>", n = "<br>",
                    o = '<span class="spanPadding" style="-webkit-box-decoration-break: clone; box-decoration-break: clone; ';
                if (l.length) l.forEach(function (a, b) {
                    if (0 === b) {
                        for (var c = "", d = 0; d < a; d++) f += i[d].outerHTML, 0 === d && (c = e.concat(i[d].style.cssText));
                        f = o + c + '">' + f
                    }
                    for (var j = "", k = a + 1; k < i.length; k++) g += i[k].outerHTML, k === i.length - 1 && (j += e.concat(i[k].style.cssText));
                    g = o + j + '">' + g, f && g && b === l.length - 1 ? h += f + m + n + g + m : f && g && b !== l.length - 1 ? h += f + m + n + g + m + n : f && !g ? h += f + m : !f && g && b === l.length - 1 ? h += g + m : !f && g && b !== l.length - 1 && (h += g + m + n)
                }); else {
                    for (var p = "", q = 0; q < i.length; q++) p += i[q].style.cssText;
                    h = o + e + p + '">' + a.innerHTML + m
                }
                return h
            }

            function G(a, b) {
                var c = document.createElement("div");
                return a.forEach(function (a) {
                    if (!a.hasOwnProperty("metadata")) if (a.hasOwnProperty("span")) {
                        var d = a.span.__children, e = document.createElement("span");
                        if (a.span.hasOwnProperty("style")) {
                            var f = z(a.span.style, b);
                            e.className = "spanPadding " + a.span.style, e.style.cssText = f.join(" ")
                        }
                        d.forEach(function (a) {
                            if (!d.hasOwnProperty("metadata")) if (a.hasOwnProperty("#text")) {
                                var b = document.createTextNode(a["#text"]);
                                e.appendChild(b)
                            } else if ("br" in a) {
                                e.hasChildNodes() && c.appendChild(e);
                                var f = document.createElement("br");
                                f.className = "lineBreak", c.appendChild(f);
                                var g = document.createElement("span");
                                g.className = e.className, g.style.cssText = e.style.cssText, e = g
                            }
                        }), c.appendChild(e)
                    } else if (a.hasOwnProperty("br")) {
                        var g = document.createElement("br");
                        g.className = "lineBreak", c.appendChild(g)
                    } else if (a.hasOwnProperty("#text")) {
                        var h = document.createElement("span");
                        h.textContent = a["#text"], c.appendChild(h)
                    }
                }), c
            }

            function H(a, b, c) {
                var d, e, f = [], g = a.region, h = b.region;
                return h && (d = D(h, c)), g ? (e = f.concat(D(g, c)), f = d ? w(d, e) : e) : d && (f = d), J(f, U), f
            }

            function I(a, b) {
                var c, d, e, f = [], g = a.style, h = O.tt.body.style, i = O.tt.body.div.style, j = "";
                return h && (c = z(h, b), j = "paragraph " + h), i && (d = z(i, b), c ? (d = w(c, d), j += " " + i) : j = "paragraph " + i), g ? (e = z(g, b), c && d ? (f = w(d, e), j += " " + g) : c ? (f = w(c, e), j += " " + g) : d ? (f = w(d, e), j += " " + g) : (f = e, j = "paragraph " + g)) : c && !d ? f = c : !c && d && (f = d), J(f, V), [f, j]
            }

            function J(a, b) {
                for (var c in b) b.hasOwnProperty(c) && (t(c, a) || a.push(c + ":" + b[c]))
            }

            var K = this.context, L = (0, k.default)(K).getInstance().log, M = void 0, N = void 0, O = void 0,
                P = void 0, Q = void 0, R = void 0, S = void 0, T = void 0, U = void 0, V = void 0, W = void 0,
                X = void 0, Y = void 0, Z = void 0, $ = void 0, _ = void 0, aa = void 0, ba = void 0, ca = 0;
            return M = {parse: j, setConfig: a}, n(), M
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(10), g = d(f), h = a(4), i = d(h), j = a(8), k = d(j), l = 3600, m = 60;
        e.__dashjs_factory_name = "TTMLParser", c.default = g.default.getSingletonFactory(e), b.exports = c.default
    }, {10: 10, 4: 4, 8: 8}],
    158: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a(a) {
                var b = "";
                return a.indexOf("/") !== -1 && (a.indexOf("?") !== -1 && (a = a.substring(0, a.indexOf("?"))), b = a.substring(0, a.lastIndexOf("/") + 1)), b
            }

            function b(a) {
                var b = a.match(i);
                return b ? b[1] : ""
            }

            function c(a) {
                return !g.test(a)
            }

            function d(a) {
                return g.test(a) && "/" === a.charAt(0)
            }

            function e(a) {
                return h.test(a)
            }

            var f = void 0, g = /^(?:(?:[a-z]+:)?\/)?\//i, h = /^https?:\/\//i, i = /^(https?:\/\/[^\/]+)\/?/i;
            return f = {parseBaseUrl: a, parseOrigin: b, isRelative: c, isPathAbsolute: d, isHTTPURL: e}
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(10), g = d(f);
        e.__dashjs_factory_name = "URLUtils", c.default = g.default.getSingletonFactory(e), b.exports = c.default
    }, {10: 10}],
    159: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e() {
            function a() {
                k = /(?:\r\n|\r|\n)/gm, l = /-->/, m = /(^[\s]+|[\s]+$)/g, n = /\s\b/g
            }

            function b(a) {
                var b, e, g = [];
                a = a.split(k), b = a.length, e = -1;
                for (var i = 0; i < b; i++) {
                    var j = a[i];
                    if (j.length > 0 && "WEBVTT" !== j && j.match(l)) {
                        var n = d(j), o = n.cuePoints, p = n.styles, q = f(a, i + 1), r = c(o[0].replace(m, "")),
                            s = c(o[1].replace(m, ""));
                        !isNaN(r) && !isNaN(s) && r >= e && s > r ? "" !== q ? (e = r, g.push({
                            start: r,
                            end: s,
                            data: q,
                            styles: p
                        })) : h("Skipping cue due to empty/malformed cue text") : h("Skipping cue due to incorrect cue timing")
                    }
                }
                return g
            }

            function c(a) {
                var b = a.split(":"), c = b.length - 1;
                return a = 60 * parseInt(b[c - 1], 10) + parseFloat(b[c]), 2 === c && (a += 3600 * parseInt(b[0], 10)), a
            }

            function d(a) {
                var b = a.split(l), c = b[1].split(n);
                return c.shift(), b[1] = c[0], c.shift(), {cuePoints: b, styles: e(c)}
            }

            function e(a) {
                var b = {};
                return a.forEach(function (a) {
                    if (a.split(/:/).length > 1) {
                        var c = a.split(/:/)[1];
                        c && c.search(/%/) != -1 && (c = parseInt(c.replace(/%/, ""), 10)), (a.match(/align/) || a.match(/A/)) && (b.align = c), (a.match(/line/) || a.match(/L/)) && (b.line = c), (a.match(/position/) || a.match(/P/)) && (b.position = c), (a.match(/size/) || a.match(/S/)) && (b.size = c)
                    }
                }), b
            }

            function f(a, b) {
                for (var c, d = b, e = "", f = ""; "" !== a[d] && d < a.length;) d++;
                if (c = d - b, c > 1) for (var g = 0; g < c; g++) {
                    if (f = a[b + g], f.match(l)) {
                        e = "";
                        break
                    }
                    e += f, g !== c - 1 && (e += "\n")
                } else f = a[b], f.match(l) || (e = f);
                return decodeURI(e)
            }

            var g = this.context, h = (0, i.default)(g).getInstance().log, j = void 0, k = void 0, l = void 0,
                m = void 0, n = void 0;
            return j = {parse: b}, a(), j
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(10), g = d(f), h = a(8), i = d(h);
        e.__dashjs_factory_name = "VTTParser", c.default = g.default.getSingletonFactory(e), b.exports = c.default
    }, {10: 10, 8: 8}],
    160: [function (a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function a() {
            d(this, a), this.mediaType = null, this.bitrate = null, this.width = null, this.height = null, this.qualityIndex = NaN
        };
        c.default = e, b.exports = c.default
    }, {}],
    161: [function (a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function a() {
            d(this, a), this.streamId = null, this.mediaInfo = null, this.segmentType = null, this.quality = NaN, this.index = NaN, this.bytes = null, this.start = NaN, this.end = NaN, this.duration = NaN
        };
        c.default = e, b.exports = c.default
    }, {}],
    162: [function (a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function a(b, c, e) {
            d(this, a), this.code = b || null, this.message = c || null, this.data = e || null
        };
        c.default = e, b.exports = c.default
    }, {}],
    163: [function (a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function a() {
            d(this, a), this.action = a.ACTION_DOWNLOAD, this.startTime = NaN, this.mediaType = null, this.mediaInfo = null, this.type = null, this.duration = NaN, this.timescale = NaN, this.range = null, this.url = null, this.serviceLocation = null, this.requestStartDate = null, this.firstByteDate = null, this.requestEndDate = null, this.quality = NaN, this.index = NaN, this.availabilityStartTime = null, this.availabilityEndTime = null, this.wallStartTime = null, this.bytesLoaded = NaN, this.bytesTotal = NaN, this.delayLoadingTime = NaN, this.responseType = "arraybuffer"
        };
        e.ACTION_DOWNLOAD = "download", e.ACTION_COMPLETE = "complete", c.default = e, b.exports = c.default
    }, {}],
    164: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        function f(a, b) {
            if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var g = function (a, b, c) {
            for (var d = !0; d;) {
                var e = a, f = b, g = c;
                d = !1, null === e && (e = Function.prototype);
                var h = Object.getOwnPropertyDescriptor(e, f);
                if (void 0 !== h) {
                    if ("value" in h) return h.value;
                    var i = h.get;
                    if (void 0 === i) return;
                    return i.call(g)
                }
                var j = Object.getPrototypeOf(e);
                if (null === j) return;
                a = j, b = f, c = g, d = !0, h = j = void 0
            }
        }, h = a(163), i = d(h), j = function (a) {
            function b(a) {
                e(this, b), g(Object.getPrototypeOf(b.prototype), "constructor", this).call(this), this.url = a || null, this.checkForExistenceOnly = !0
            }

            return f(b, a), b
        }(i.default);
        c.default = j, b.exports = c.default
    }, {163: 163}],
    165: [function (a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function a() {
            d(this, a), this.offset = NaN, this.type = null, this.size = NaN, this.isComplete = !0
        };
        c.default = e, b.exports = c.default
    }, {}],
    166: [function (a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function a() {
            d(this, a), this.DVRWindowSize = NaN, this.loadedTime = null, this.availableFrom = null, this.minBufferTime = NaN, this.duration = NaN, this.isDynamic = !1, this.maxFragmentDuration = null
        };
        c.default = e, b.exports = c.default
    }, {}],
    167: [function (a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function a() {
            d(this, a), this.id = null, this.index = null, this.type = null, this.streamInfo = null, this.representationCount = 0, this.lang = null, this.viewpoint = null, this.accessibility = null, this.audioChannelConfiguration = null, this.roles = null, this.codec = null, this.mimeType = null, this.contentProtection = null, this.isText = !1, this.KID = null, this.bitrateList = null
        };
        c.default = e, b.exports = c.default
    }, {}],
    168: [function (a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function a() {
            d(this, a), this.TcpList = [], this.HttpList = [], this.RepSwitchList = [], this.BufferLevel = [], this.BufferState = [], this.PlayList = [], this.DroppedFrames = [], this.SchedulingInfo = [], this.DVRInfo = [], this.ManifestUpdate = [], this.RequestsQueue = null, this.DVBErrors = [], this.BolaState = []
        };
        c.default = e, b.exports = c.default
    }, {}],
    169: [function (a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function a() {
            d(this, a), this.id = null, this.index = null, this.start = NaN, this.duration = NaN, this.manifestInfo = null, this.isLast = !0, this.isFirst = !0
        };
        c.default = e, b.exports = c.default
    }, {}],
    170: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        function f(a, b) {
            if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var g = function (a, b, c) {
            for (var d = !0; d;) {
                var e = a, f = b, g = c;
                d = !1, null === e && (e = Function.prototype);
                var h = Object.getOwnPropertyDescriptor(e, f);
                if (void 0 !== h) {
                    if ("value" in h) return h.value;
                    var i = h.get;
                    if (void 0 === i) return;
                    return i.call(g)
                }
                var j = Object.getPrototypeOf(e);
                if (null === j) return;
                a = j, b = f, c = g, d = !0, h = j = void 0
            }
        }, h = a(163), i = d(h), j = function (a) {
            function b(a, c) {
                e(this, b), g(Object.getPrototypeOf(b.prototype), "constructor", this).call(this), this.url = a || null, this.type = c || null, this.mediaType = "stream", this.responseType = "text"
            }

            return f(b, a), b
        }(i.default);
        c.default = j, b.exports = c.default
    }, {163: 163}],
    171: [function (a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function a() {
            d(this, a), this.video = null, this.captionData = null, this.label = null, this.lang = null, this.defaultTrack = !1, this.kind = null, this.isFragmented = !1, this.isEmbedded = !1
        };
        c.default = e, b.exports = c.default
    }, {}],
    172: [function (a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function a() {
            d(this, a), this.id = null, this.quality = null, this.DVRWindow = null, this.fragmentDuration = null, this.mediaInfo = null, this.MSETimeOffset = null
        };
        c.default = e, b.exports = c.default
    }, {}],
    173: [function (a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function a() {
            d(this, a), this.t = null, this.xywh = null, this.track = null, this.id = null, this.s = null
        };
        c.default = e, b.exports = c.default
    }, {}],
    174: [function (a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function a() {
            d(this, a), this._s = void 0
        };
        c.default = e, b.exports = c.default
    }, {}],
    175: [function (a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function a() {
            d(this, a), this.t = null, this.level = null
        };
        c.default = e, b.exports = c.default
    }, {}],
    176: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var f = a(63), g = d(f), h = function a() {
            e(this, a), this.target = null, this.state = g.default.BUFFER_EMPTY
        };
        c.default = h, b.exports = c.default
    }, {63: 63}],
    177: [function (a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function a() {
            d(this, a), this.time = null, this.range = null, this.manifestInfo = null
        };
        c.default = e, b.exports = c.default
    }, {}],
    178: [function (a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function a() {
            d(this, a), this.time = null, this.droppedFrames = null
        };
        c.default = e, b.exports = c.default
    }, {}],
    179: [function (a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function a() {
            d(this, a), this.tcpid = null, this.type = null, this.url = null, this.actualurl = null, this.range = null, this.trequest = null, this.tresponse = null, this.responsecode = null, this.interval = null, this.trace = [], this._stream = null, this._tfinish = null, this._mediaduration = null, this._responseHeaders = null, this._serviceLocation = null
        }, f = function a() {
            d(this, a), this.s = null, this.d = null, this.b = []
        };
        e.MPD_TYPE = "MPD", e.XLINK_EXPANSION_TYPE = "XLinkExpansion", e.INIT_SEGMENT_TYPE = "InitializationSegment", e.INDEX_SEGMENT_TYPE = "IndexSegment", e.MEDIA_SEGMENT_TYPE = "MediaSegment", e.BITSTREAM_SWITCHING_SEGMENT_TYPE = "BitstreamSwitchingSegment", e.OTHER_TYPE = "other", c.HTTPRequest = e, c.HTTPRequestTrace = f
    }, {}],
    180: [function (a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function a() {
            d(this, a), this.mediaType = null, this.type = null, this.requestTime = null, this.fetchTime = null, this.availabilityStartTime = null, this.presentationStartTime = 0, this.clientTimeOffset = 0, this.currentTime = null, this.buffered = null, this.latency = 0, this.streamInfo = [], this.trackInfo = []
        }, f = function a() {
            d(this, a), this.id = null, this.index = null, this.start = null, this.duration = null
        }, g = function a() {
            d(this, a), this.id = null, this.index = null, this.mediaType = null, this.streamIndex = null, this.presentationTimeOffset = null, this.startNumber = null, this.fragmentInfoType = null
        };
        c.ManifestUpdate = e, c.ManifestUpdateStreamInfo = f, c.ManifestUpdateTrackInfo = g
    }, {}],
    181: [function (a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function a() {
            d(this, a), this.start = null, this.mstart = null, this.starttype = null, this.trace = []
        };
        e.INITIAL_PLAYOUT_START_REASON = "initial_playout", e.SEEK_START_REASON = "seek", e.RESUME_FROM_PAUSE_START_REASON = "resume", e.METRICS_COLLECTION_START_REASON = "metrics_collection_start";
        var f = function a() {
            d(this, a), this.representationid = null, this.subreplevel = null, this.start = null, this.mstart = null, this.duration = null, this.playbackspeed = null, this.stopreason = null
        };
        f.REPRESENTATION_SWITCH_STOP_REASON = "representation_switch", f.REBUFFERING_REASON = "rebuffering", f.USER_REQUEST_STOP_REASON = "user_request", f.END_OF_PERIOD_STOP_REASON = "end_of_period", f.END_OF_CONTENT_STOP_REASON = "end_of_content", f.METRICS_COLLECTION_STOP_REASON = "metrics_collection_end", f.FAILURE_STOP_REASON = "failure", c.PlayList = e, c.PlayListTrace = f
    }, {}],
    182: [function (a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function a() {
            d(this, a), this.t = null, this.mt = null, this.to = null, this.lto = null
        };
        c.default = e, b.exports = c.default
    }, {}],
    183: [function (a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function a() {
            d(this, a), this.loadingRequests = [], this.executedRequests = []
        };
        c.default = e, b.exports = c.default
    }, {}],
    184: [function (a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function a() {
            d(this, a), this.mediaType = null, this.t = null, this.type = null, this.startTime = null, this.availabilityStartTime = null, this.duration = null, this.quality = null, this.range = null, this.state = null
        };
        c.default = e, b.exports = c.default
    }, {}],
    185: [function (a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(c, "__esModule", {value: !0});
        var e = function a() {
            d(this, a), this.tcpid = null, this.dest = null, this.topen = null, this.tclose = null, this.tconnect = null
        };
        c.default = e, b.exports = c.default
    }, {}]
}, {}, [5]);
//# sourceMappingURL=dash.all.min.js.map