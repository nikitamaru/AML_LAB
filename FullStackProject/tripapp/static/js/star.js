webpackJsonp([0], [function(t, e, i) {
    (function() {
        var e, r, a = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var r in e) s.call(e, r) && (t[r] = e[r]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            },
            s = {}.hasOwnProperty,
            n = [].slice;
        e = i(22), r = function(t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }
            return a(e, t), e.prototype.on = function(t, e) {
                var i;
                return null == this.events && (this.events = {}), null == (i = this.events)[t] && (i[t] = []), this.events[t].push(e)
            }, e.prototype.off = function(t, e) {
                var i, r;
                if (null != this.events)
                    if (null != (r = this.events) ? r[t] : void 0) {
                        if (null == e) return this.events[t];
                        if (~(i = this.events[t].indexOf(e))) return this.events[t].splice(i, 1)
                    } else if (null == t) return {}
            }, e.prototype.once = function(t, e) {
                var i;
                return this.on(t, i = function() {
                    return this.off(t, i), e.apply(this, arguments)
                })
            }, e.prototype.emit = function() {
                var t, e, i, r, a, s, o;
                if (e = arguments[0], t = 2 <= arguments.length ? n.call(arguments, 1) : [], null != (s = this.events) ? s[e] : void 0)
                    for (o = this.events[e].slice(), r = 0, a = o.length; r < a; r++) i = o[r], i.apply(this, t)
            }, e
        }(e), t.exports = r
    }).call(this)
}, , function(t, e) {
    t.exports = function(t, e, i, r) {
        var a, s = t = t || {},
            n = typeof t.default;
        "object" !== n && "function" !== n || (a = t, s = t.default);
        var o = "function" == typeof s ? s.options : s;
        if (e && (o.render = e.render, o.staticRenderFns = e.staticRenderFns), i && (o._scopeId = i), r) {
            var l = Object.create(o.computed || null);
            Object.keys(r).forEach(function(t) {
                var e = r[t];
                l[t] = function() {
                    return e
                }
            }), o.computed = l
        }
        return {
            esModule: a,
            exports: s,
            options: o
        }
    }
}, function(t, e, i) {
    (function() {
        var e, r, a, s, n = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var r in e) o.call(e, r) && (t[r] = e[r]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            },
            o = {}.hasOwnProperty;
        a = i(0), e = i(8), s = i(16), r = function(t) {
            function i(t, i) {
                var r, a;
                r = new e, r.append(i), this.stream = new s(r), a = !1, t.on("data", function(t) {
                    return function(e) {
                        var i;
                        a = !0, r.append(e);
                        try {
                            return t.readChunk(e)
                        } catch (e) {
                            return i = e, t.emit("error", i)
                        }
                    }
                }(this)), t.on("error", function(t) {
                    return function(e) {
                        return t.emit("error", e)
                    }
                }(this)), t.on("end", function(t) {
                    return function() {
                        return a || t.readChunk(i), t.emit("end")
                    }
                }(this)), this.seekPoints = [], this.init()
            }
            var r;
            return n(i, t), i.probe = function(t) {
                return !1
            }, i.prototype.init = function() {}, i.prototype.readChunk = function(t) {}, i.prototype.addSeekPoint = function(t, e) {
                var i;
                return i = this.searchTimestamp(e), this.seekPoints.splice(i, 0, {
                    offset: t,
                    timestamp: e
                })
            }, i.prototype.searchTimestamp = function(t, e) {
                var i, r, a, s;
                if (r = 0, (i = this.seekPoints.length) > 0 && this.seekPoints[i - 1].timestamp < t) return i;
                for (; r < i;) a = r + i >> 1, s = this.seekPoints[a].timestamp, s < t ? r = a + 1 : s >= t && (i = a);
                return i > this.seekPoints.length && (i = this.seekPoints.length), i
            }, i.prototype.seek = function(t) {
                var e;
                return this.format && this.format.framesPerPacket > 0 && this.format.bytesPerPacket > 0 ? {
                    timestamp: t,
                    offset: this.format.bytesPerPacket * t / this.format.framesPerPacket
                } : (e = this.searchTimestamp(t), this.seekPoints[e])
            }, r = [], i.register = function(t) {
                return r.push(t)
            }, i.find = function(t) {
                var e, i, a, n, o;
                for (o = s.fromBuffer(t), i = 0, a = r.length; i < a; i++) {
                    e = r[i], n = o.offset;
                    try {
                        if (e.probe(o)) return e
                    } catch (t) {
                        t
                    }
                    o.seek(n)
                }
                return null
            }, i
        }(a), t.exports = r
    }).call(this)
}, function(t, e, i) {
    var r, a, s;
    s = i(43);
    for (r in s) a = s[r], e[r] = a;
    i(53), i(51)
}, function(t, e, i) {
    function r() {
        this.layer = 0, this.mode = 0, this.mode_extension = 0, this.emphasis = 0, this.bitrate = 0, this.samplerate = 0, this.crc_check = 0, this.crc_target = 0, this.flags = 0, this.private_bits = 0
    }
    var a = i(4);
    const s = [
            [0, 32e3, 64e3, 96e3, 128e3, 16e4, 192e3, 224e3, 256e3, 288e3, 32e4, 352e3, 384e3, 416e3, 448e3],
            [0, 32e3, 48e3, 56e3, 64e3, 8e4, 96e3, 112e3, 128e3, 16e4, 192e3, 224e3, 256e3, 32e4, 384e3],
            [0, 32e3, 4e4, 48e3, 56e3, 64e3, 8e4, 96e3, 112e3, 128e3, 16e4, 192e3, 224e3, 256e3, 32e4],
            [0, 32e3, 48e3, 56e3, 64e3, 8e4, 96e3, 112e3, 128e3, 144e3, 16e4, 176e3, 192e3, 224e3, 256e3],
            [0, 8e3, 16e3, 24e3, 32e3, 4e4, 48e3, 56e3, 64e3, 8e4, 96e3, 112e3, 128e3, 144e3, 16e4]
        ],
        n = [44100, 48e3, 32e3];
    r.FLAGS = {
        NPRIVATE_III: 7,
        INCOMPLETE: 8,
        PROTECTION: 16,
        COPYRIGHT: 32,
        ORIGINAL: 64,
        PADDING: 128,
        I_STEREO: 256,
        MS_STEREO: 512,
        FREEFORMAT: 1024,
        LSF_EXT: 4096,
        MC_EXT: 8192,
        MPEG_2_5_EXT: 16384
    };
    const o = {
        HEADER: 256,
        III: 31
    };
    r.MODE = {
        SINGLE_CHANNEL: 0,
        DUAL_CHANNEL: 1,
        JOINT_STEREO: 2,
        STEREO: 3
    };
    r.BUFFER_GUARD = 8, r.BUFFER_MDLEN = 2559 + r.BUFFER_GUARD, r.prototype.copy = function() {
        var t = new r,
            e = Object.keys(this);
        for (var i in e) t[i] = this[i];
        return t
    }, r.prototype.nchannels = function() {
        return 0 === this.mode ? 1 : 2
    }, r.prototype.nbsamples = function() {
        return 1 === this.layer ? 12 : 3 === this.layer && this.flags & r.FLAGS.LSF_EXT ? 18 : 36
    }, r.prototype.framesize = function() {
        if (0 === this.bitrate) return null;
        var t = this.flags & r.FLAGS.PADDING ? 1 : 0;
        switch (this.layer) {
            case 1:
                var e = 12 * this.bitrate / this.samplerate | 0;
                return 4 * (e + t);
            case 2:
                var e = 144 * this.bitrate / this.samplerate | 0;
                return e + t;
            case 3:
            default:
                var i = this.flags & r.FLAGS.LSF_EXT ? 1 : 0,
                    e = 144 * this.bitrate / (this.samplerate << i) | 0;
                return e + t
        }
    }, r.prototype.decode = function(t) {
        if (this.flags = 0, this.private_bits = 0, t.advance(11), 0 === t.read(1) && (this.flags |= r.FLAGS.MPEG_2_5_EXT), 0 === t.read(1)) this.flags |= r.FLAGS.LSF_EXT;
        else if (this.flags & r.FLAGS.MPEG_2_5_EXT) throw new a.UnderflowError;
        if (this.layer = 4 - t.read(2), 4 === this.layer) throw new Error("Invalid layer");
        0 === t.read(1) && (this.flags |= r.FLAGS.PROTECTION);
        var e = t.read(4);
        if (15 === e) throw new Error("Invalid bitrate");
        if (this.flags & r.FLAGS.LSF_EXT ? this.bitrate = s[3 + (this.layer >> 1)][e] : this.bitrate = s[this.layer - 1][e], 3 === (e = t.read(2))) throw new Error("Invalid sampling frequency");
        this.samplerate = n[e], this.flags & r.FLAGS.LSF_EXT && (this.samplerate /= 2, this.flags & r.FLAGS.MPEG_2_5_EXT && (this.samplerate /= 2)), t.read(1) && (this.flags |= r.FLAGS.PADDING), t.read(1) && (this.private_bits |= o.HEADER), this.mode = 3 - t.read(2), this.mode_extension = t.read(2), t.read(1) && (this.flags |= r.FLAGS.COPYRIGHT), t.read(1) && (this.flags |= r.FLAGS.ORIGINAL), this.emphasis = t.read(2), this.flags & r.FLAGS.PROTECTION && (this.crc_target = t.read(16))
    }, r.decode = function(t) {
        for (var e = t.next_frame, i = !0, s = null; i;) {
            if (i = !1, t.sync) {
                if (!t.available(r.BUFFER_GUARD)) throw t.next_frame = e, new a.UnderflowError;
                if (255 !== t.getU8(e) || 224 != (224 & t.getU8(e + 1))) throw t.this_frame = e, t.next_frame = e + 1, new a.UnderflowError
            } else {
                if (t.seek(8 * e), !t.doSync()) throw new a.UnderflowError;
                e = t.nextByte()
            }
            t.this_frame = e, t.next_frame = e + 1, t.seek(8 * t.this_frame), s = new r, s.decode(t), 0 === s.bitrate && ((0 === t.freerate || !t.sync || 3 === s.layer && t.freerate > 64e4) && r.free_bitrate(t, s), s.bitrate = t.freerate, s.flags |= r.FLAGS.FREEFORMAT);
            var n = s.flags & r.FLAGS.PADDING ? 1 : 0;
            if (1 === s.layer) var o = 4 * ((12 * s.bitrate / s.samplerate << 0) + n);
            else var l = 3 === s.layer && s.flags & r.FLAGS.LSF_EXT ? 72 : 144,
                o = (l * s.bitrate / s.samplerate << 0) + n;
            if (!t.available(o + r.BUFFER_GUARD)) throw t.next_frame = t.this_frame, new a.UnderflowError;
            if (t.next_frame = t.this_frame + o, !t.sync) {
                if (e = t.next_frame, 255 !== t.getU8(e) || 224 != (224 & t.getU8(e + 1))) {
                    e = t.next_frame = t.this_frame + 1, i = !0;
                    continue
                }
                t.sync = !0
            }
        }
        return s.flags |= r.FLAGS.INCOMPLETE, s
    }, r.free_bitrate = function(t, e) {
        for (var i = e.flags & r.FLAGS.PADDING ? 1 : 0, s = 3 === e.layer && e.flags & r.FLAGS.LSF_EXT ? 72 : 144, n = t.offset(), o = 0; t.doSync();) {
            var l = e.copy(),
                u = t.copy();
            if (l.decode(u) && l.layer === e.layer && l.samplerate === e.samplerate) {
                var h = t.nextByte() - t.this_frame;
                if ((o = 1 === e.layer ? e.samplerate * (h - 4 * i + 4) / 48 / 1e3 | 0 : e.samplerate * (h - i + 1) / s / 1e3 | 0) >= 8) break
            }
            t.advance(8)
        }
        if (t.seek(n), o < 8 || 3 === e.layer && o > 640) throw new a.UnderflowError;
        t.freerate = 1e3 * o
    }, t.exports = r
}, function(t, e, i) {
    (function(e) {
        (function() {
            var i;
            i = function() {
                function t(i) {
                    var r;
                    if (i instanceof Uint8Array) this.data = i;
                    else if (i instanceof ArrayBuffer || Array.isArray(i) || "number" == typeof i || (null != (r = e.Buffer) ? r.isBuffer(i) : void 0)) this.data = new Uint8Array(i);
                    else if (i.buffer instanceof ArrayBuffer) this.data = new Uint8Array(i.buffer, i.byteOffset, i.length * i.BYTES_PER_ELEMENT);
                    else {
                        if (!(i instanceof t)) throw new Error("Constructing buffer with unknown type.");
                        this.data = i.data
                    }
                    this.length = this.data.length, this.next = null, this.prev = null
                }
                var i, r;
                return t.allocate = function(e) {
                    return new t(e)
                }, t.prototype.copy = function() {
                    return new t(new Uint8Array(this.data))
                }, t.prototype.slice = function(e, i) {
                    return null == i && (i = this.length), new t(0 === e && i >= this.length ? this.data : this.data.subarray(e, e + i))
                }, i = e.BlobBuilder || e.MozBlobBuilder || e.WebKitBlobBuilder, r = e.URL || e.webkitURL || e.mozURL, t.makeBlob = function(t, e) {
                    var r;
                    null == e && (e = "application/octet-stream");
                    try {
                        return new Blob([t], {
                            type: e
                        })
                    } catch (t) {}
                    return null != i ? (r = new i, r.append(t), r.getBlob(e)) : null
                }, t.makeBlobURL = function(t, e) {
                    return null != r ? r.createObjectURL(this.makeBlob(t, e)) : void 0
                }, t.revokeBlobURL = function(t) {
                    return null != r ? r.revokeObjectURL(t) : void 0
                }, t.prototype.toBlob = function() {
                    return t.makeBlob(this.data.buffer)
                }, t.prototype.toBlobURL = function() {
                    return t.makeBlobURL(this.data.buffer)
                }, t
            }(), t.exports = i
        }).call(this)
    }).call(e, i(13))
}, , function(t, e) {
    (function() {
        var e;
        e = function() {
            function t() {
                this.first = null, this.last = null, this.numBuffers = 0, this.availableBytes = 0, this.availableBuffers = 0
            }
            return t.prototype.copy = function() {
                var e;
                return e = new t, e.first = this.first, e.last = this.last, e.numBuffers = this.numBuffers, e.availableBytes = this.availableBytes, e.availableBuffers = this.availableBuffers, e
            }, t.prototype.append = function(t) {
                var e;
                return t.prev = this.last, null != (e = this.last) && (e.next = t), this.last = t, null == this.first && (this.first = t), this.availableBytes += t.length, this.availableBuffers++, this.numBuffers++
            }, t.prototype.advance = function() {
                return !!this.first && (this.availableBytes -= this.first.length, this.availableBuffers--, this.first = this.first.next, null != this.first)
            }, t.prototype.rewind = function() {
                var t;
                return !(this.first && !this.first.prev) && (this.first = (null != (t = this.first) ? t.prev : void 0) || this.last, this.first && (this.availableBytes += this.first.length, this.availableBuffers++), null != this.first)
            }, t.prototype.reset = function() {
                var t;
                for (t = []; this.rewind(););
                return t
            }, t
        }(), t.exports = e
    }).call(this)
}, function(t, e) {
    e.makeArray = function(t, i) {
        if (i || (i = Float64Array), 1 === t.length) return new i(t[0]);
        for (var r = [], a = t[0], s = 0; s < a; s++) r[s] = e.makeArray(t.slice(1), i);
        return r
    }
}, function(t, e, i) {
    (function() {
        var e, r, a, s, n, o, l = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var r in e) u.call(e, r) && (t[r] = e[r]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            },
            u = {}.hasOwnProperty;
        s = i(0), r = i(8), n = i(16), e = i(23), o = i(17), a = function(t) {
            function i(t, i) {
                var a;
                this.demuxer = t, this.format = i, a = new r, this.stream = new n(a), this.bitstream = new e(this.stream), this.receivedFinalBuffer = !1, this.waiting = !1, this.demuxer.on("cookie", function(t) {
                    return function(e) {
                        var i;
                        try {
                            return t.setCookie(e)
                        } catch (e) {
                            return i = e, t.emit("error", i)
                        }
                    }
                }(this)), this.demuxer.on("data", function(t) {
                    return function(e) {
                        if (a.append(e), t.waiting) return t.decode()
                    }
                }(this)), this.demuxer.on("end", function(t) {
                    return function() {
                        if (t.receivedFinalBuffer = !0, t.waiting) return t.decode()
                    }
                }(this)), this.init()
            }
            var a;
            return l(i, t), i.prototype.init = function() {}, i.prototype.setCookie = function(t) {}, i.prototype.readChunk = function() {}, i.prototype.decode = function() {
                var t, e, i;
                this.waiting = !this.receivedFinalBuffer, e = this.bitstream.offset();
                try {
                    i = this.readChunk()
                } catch (e) {
                    if (!((t = e) instanceof o)) return this.emit("error", t), !1
                }
                return i ? (this.emit("data", i), this.receivedFinalBuffer && this.emit("end"), !0) : (this.receivedFinalBuffer ? this.emit("end") : (this.bitstream.seek(e), this.waiting = !0), !1)
            }, i.prototype.seek = function(t) {
                var e;
                return e = this.demuxer.seek(t), this.stream.seek(e.offset), e.timestamp
            }, a = {}, i.register = function(t, e) {
                return a[t] = e
            }, i.find = function(t) {
                return a[t] || null
            }, i
        }(s), t.exports = a
    }).call(this)
}, function(t, e, i) {
    (function() {
        var e, r, a = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            s = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var r in e) n.call(e, r) && (t[r] = e[r]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            },
            n = {}.hasOwnProperty;
        r = i(0), e = function(t) {
            function e(t, e) {
                this.sampleRate = t, this.channels = e, this.updateTime = a(this.updateTime, this), this.playing = !1, this.currentTime = 0, this._lastTime = 0
            }
            var i;
            return s(e, t), e.prototype.start = function() {
                if (!this.playing) {
                    if (this.playing = !0, null == this.device && (this.device = e.create(this.sampleRate, this.channels)), !this.device) throw new Error("No supported audio device found.");
                    return this._lastTime = this.device.getDeviceTime(), this._timer = setInterval(this.updateTime, 200), this.device.on("refill", this.refill = function(t) {
                        return function(e) {
                            return t.emit("refill", e)
                        }
                    }(this))
                }
            }, e.prototype.stop = function() {
                if (this.playing) return this.playing = !1, this.device.off("refill", this.refill), clearInterval(this._timer)
            }, e.prototype.destroy = function() {
                var t;
                return this.stop(), null != (t = this.device) ? t.destroy() : void 0
            }, e.prototype.seek = function(t) {
                return this.currentTime = t, this.playing && (this._lastTime = this.device.getDeviceTime()), this.emit("timeUpdate", this.currentTime)
            }, e.prototype.updateTime = function() {
                var t;
                return t = this.device.getDeviceTime(), this.currentTime += (t - this._lastTime) / this.device.sampleRate * 1e3 | 0, this._lastTime = t, this.emit("timeUpdate", this.currentTime)
            }, i = [], e.register = function(t) {
                return i.push(t)
            }, e.create = function(t, e) {
                var r, a, s;
                for (a = 0, s = i.length; a < s; a++)
                    if (r = i[a], r.supported) return new r(t, e);
                return null
            }, e
        }(r), t.exports = e
    }).call(this)
}, function(t, e, i) {
    function r() {
        this.header = null, this.options = 0, this.sbsample = s.makeArray([2, 36, 32]), this.overlap = s.makeArray([2, 32, 18]), this.decoders = []
    }
    var a = i(5),
        s = i(9);
    r.layers = [], r.prototype.decode = function(t) {
        this.header && this.header.flags & a.FLAGS.INCOMPLETE || (this.header = a.decode(t)), this.header.flags &= ~a.FLAGS.INCOMPLETE;
        var e = this.decoders[this.header.layer - 1];
        if (!e) {
            var i = r.layers[this.header.layer];
            if (!i) throw new Error("Layer " + this.header.layer + " is not supported.");
            e = this.decoders[this.header.layer - 1] = new i
        }
        e.decode(t, this)
    }, t.exports = r
}, , , , function(t, e, i) {
    (function() {
        var e, r, a, s;
        r = i(8), e = i(6), s = i(17), a = function() {
            function t(t) {
                this.list = t, this.localOffset = 0, this.offset = 0
            }
            var i, a, n, o, l, u, h, c, f, d, p, m, v;
            return i = new ArrayBuffer(16), v = new Uint8Array(i), f = new Int8Array(i), p = new Uint16Array(i), h = new Int16Array(i), m = new Uint32Array(i), c = new Int32Array(i), n = new Float32Array(i), "undefined" != typeof Float64Array && null !== Float64Array && (o = new Float64Array(i)), d = 13330 === new Uint16Array(new Uint8Array([18, 52]).buffer)[0], t.fromBuffer = function(e) {
                var i;
                return i = new r, i.append(e), new t(i)
            }, t.prototype.copy = function() {
                var e;
                return e = new t(this.list.copy()), e.localOffset = this.localOffset, e.offset = this.offset, e
            }, t.prototype.available = function(t) {
                return t <= this.list.availableBytes - this.localOffset
            }, t.prototype.remainingBytes = function() {
                return this.list.availableBytes - this.localOffset
            }, t.prototype.advance = function(t) {
                if (!this.available(t)) throw new s;
                for (this.localOffset += t, this.offset += t; this.list.first && this.localOffset >= this.list.first.length;) this.localOffset -= this.list.first.length, this.list.advance();
                return this
            }, t.prototype.rewind = function(t) {
                if (t > this.offset) throw new s;
                for (this.list.first || (this.list.rewind(), this.localOffset = this.list.first.length), this.localOffset -= t, this.offset -= t; this.list.first.prev && this.localOffset < 0;) this.list.rewind(), this.localOffset += this.list.first.length;
                return this
            }, t.prototype.seek = function(t) {
                return t > this.offset ? this.advance(t - this.offset) : t < this.offset ? this.rewind(this.offset - t) : void 0
            }, t.prototype.readUInt8 = function() {
                var t;
                if (!this.available(1)) throw new s;
                return t = this.list.first.data[this.localOffset], this.localOffset += 1, this.offset += 1, this.localOffset === this.list.first.length && (this.localOffset = 0, this.list.advance()), t
            }, t.prototype.peekUInt8 = function(t) {
                var e;
                if (null == t && (t = 0), !this.available(t + 1)) throw new s;
                for (t = this.localOffset + t, e = this.list.first; e;) {
                    if (e.length > t) return e.data[t];
                    t -= e.length, e = e.next
                }
                return 0
            }, t.prototype.read = function(t, e) {
                var i, r, a, s;
                if (null == e && (e = !1), e === d)
                    for (i = r = 0, s = t; r < s; i = r += 1) v[i] = this.readUInt8();
                else
                    for (i = a = t - 1; a >= 0; i = a += -1) v[i] = this.readUInt8()
            }, t.prototype.peek = function(t, e, i) {
                var r, a, s, n, o;
                if (null == i && (i = !1), i === d)
                    for (r = a = 0, n = t; a < n; r = a += 1) v[r] = this.peekUInt8(e + r);
                else
                    for (r = s = 0, o = t; s < o; r = s += 1) v[t - r - 1] = this.peekUInt8(e + r)
            }, t.prototype.readInt8 = function() {
                return this.read(1), f[0]
            }, t.prototype.peekInt8 = function(t) {
                return null == t && (t = 0), this.peek(1, t), f[0]
            }, t.prototype.readUInt16 = function(t) {
                return this.read(2, t), p[0]
            }, t.prototype.peekUInt16 = function(t, e) {
                return null == t && (t = 0), this.peek(2, t, e), p[0]
            }, t.prototype.readInt16 = function(t) {
                return this.read(2, t), h[0]
            }, t.prototype.peekInt16 = function(t, e) {
                return null == t && (t = 0), this.peek(2, t, e), h[0]
            }, t.prototype.readUInt24 = function(t) {
                return t ? this.readUInt16(!0) + (this.readUInt8() << 16) : (this.readUInt16() << 8) + this.readUInt8()
            }, t.prototype.peekUInt24 = function(t, e) {
                return null == t && (t = 0), e ? this.peekUInt16(t, !0) + (this.peekUInt8(t + 2) << 16) : (this.peekUInt16(t) << 8) + this.peekUInt8(t + 2)
            }, t.prototype.readInt24 = function(t) {
                return t ? this.readUInt16(!0) + (this.readInt8() << 16) : (this.readInt16() << 8) + this.readUInt8()
            }, t.prototype.peekInt24 = function(t, e) {
                return null == t && (t = 0), e ? this.peekUInt16(t, !0) + (this.peekInt8(t + 2) << 16) : (this.peekInt16(t) << 8) + this.peekUInt8(t + 2)
            }, t.prototype.readUInt32 = function(t) {
                return this.read(4, t), m[0]
            }, t.prototype.peekUInt32 = function(t, e) {
                return null == t && (t = 0), this.peek(4, t, e), m[0]
            }, t.prototype.readInt32 = function(t) {
                return this.read(4, t), c[0]
            }, t.prototype.peekInt32 = function(t, e) {
                return null == t && (t = 0), this.peek(4, t, e), c[0]
            }, t.prototype.readFloat32 = function(t) {
                return this.read(4, t), n[0]
            }, t.prototype.peekFloat32 = function(t, e) {
                return null == t && (t = 0), this.peek(4, t, e), n[0]
            }, t.prototype.readFloat64 = function(t) {
                return this.read(8, t), o ? o[0] : l()
            }, l = function() {
                var t, e, i, r, a, s;
                return r = m[0], (i = m[1]) && 2147483648 !== i ? (s = 1 - 2 * (i >>> 31), t = i >>> 20 & 2047, e = 1048575 & i, 2047 === t ? e ? NaN : s * (1 / 0) : (t -= 1023, a = (1048576 | e) * Math.pow(2, t - 20), a += r * Math.pow(2, t - 52), s * a)) : 0
            }, t.prototype.peekFloat64 = function(t, e) {
                return null == t && (t = 0), this.peek(8, t, e), o ? o[0] : l()
            }, t.prototype.readFloat80 = function(t) {
                return this.read(10, t), u()
            }, u = function() {
                var t, e, i, r, a, s, n;
                return r = m[0], a = m[1], t = v[9], e = v[8], n = 1 - 2 * (t >>> 7), 0 === (i = (127 & t) << 8 | e) && 0 === a && 0 === r ? 0 : 32767 === i ? 0 === a && 0 === r ? n * (1 / 0) : NaN : (i -= 16383, s = a * Math.pow(2, i - 31), s += r * Math.pow(2, i - 63), n * s)
            }, t.prototype.peekFloat80 = function(t, e) {
                return null == t && (t = 0), this.peek(10, t, e), u()
            }, t.prototype.readBuffer = function(t) {
                var i, r, a, s, n;
                for (s = e.allocate(t), n = s.data, i = r = 0, a = t; r < a; i = r += 1) n[i] = this.readUInt8();
                return s
            }, t.prototype.peekBuffer = function(t, i) {
                var r, a, s, n, o;
                for (null == t && (t = 0), n = e.allocate(i), o = n.data, r = a = 0, s = i; a < s; r = a += 1) o[r] = this.peekUInt8(t + r);
                return n
            }, t.prototype.readSingleBuffer = function(t) {
                var e;
                return e = this.list.first.slice(this.localOffset, t), this.advance(e.length), e
            }, t.prototype.peekSingleBuffer = function(t, e) {
                return this.list.first.slice(this.localOffset + t, e)
            }, t.prototype.readString = function(t, e) {
                return null == e && (e = "ascii"), a.call(this, 0, t, e, !0)
            }, t.prototype.peekString = function(t, e, i) {
                return null == t && (t = 0), null == i && (i = "ascii"), a.call(this, t, e, i, !1)
            }, a = function(t, e, i, r) {
                var a, s, n, o, l, u, h, c, f, d, p, m, v;
                switch (i = i.toLowerCase(), f = null === e ? 0 : -1, null == e && (e = 1 / 0), h = t + e, p = "", i) {
                    case "ascii":
                    case "latin1":
                        for (; t < h && (u = this.peekUInt8(t++)) !== f;) p += String.fromCharCode(u);
                        break;
                    case "utf8":
                    case "utf-8":
                        for (; t < h && (a = this.peekUInt8(t++)) !== f;) 0 == (128 & a) ? p += String.fromCharCode(a) : 192 == (224 & a) ? (s = 63 & this.peekUInt8(t++), p += String.fromCharCode((31 & a) << 6 | s)) : 224 == (240 & a) ? (s = 63 & this.peekUInt8(t++), n = 63 & this.peekUInt8(t++), p += String.fromCharCode((15 & a) << 12 | s << 6 | n)) : 240 == (248 & a) && (s = 63 & this.peekUInt8(t++), n = 63 & this.peekUInt8(t++), o = 63 & this.peekUInt8(t++), d = ((15 & a) << 18 | s << 12 | n << 6 | o) - 65536, p += String.fromCharCode(55296 + (d >> 10), 56320 + (1023 & d)));
                        break;
                    case "utf16-be":
                    case "utf16be":
                    case "utf16le":
                    case "utf16-le":
                    case "utf16bom":
                    case "utf16-bom":
                        switch (i) {
                            case "utf16be":
                            case "utf16-be":
                                c = !1;
                                break;
                            case "utf16le":
                            case "utf16-le":
                                c = !0;
                                break;
                            case "utf16bom":
                            case "utf16-bom":
                                if (e < 2 || (l = this.peekUInt16(t)) === f) return r && this.advance(t += 2), p;
                                c = 65534 === l, t += 2
                        }
                        for (; t < h && (m = this.peekUInt16(t, c)) !== f;)
                            if (t += 2, m < 55296 || m > 57343) p += String.fromCharCode(m);
                            else {
                                if (m > 56319) throw new Error("Invalid utf16 sequence.");
                                if ((v = this.peekUInt16(t, c)) < 56320 || v > 57343) throw new Error("Invalid utf16 sequence.");
                                p += String.fromCharCode(m, v), t += 2
                            } m === f && (t += 2);
                        break;
                    default:
                        throw new Error("Unknown encoding: " + i)
                }
                return r && this.advance(t), p
            }, t
        }(), t.exports = a
    }).call(this)
}, function(t, e) {
    (function() {
        var e, i = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var a in e) r.call(e, a) && (t[a] = e[a]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            },
            r = {}.hasOwnProperty;
        e = function(t) {
            function e() {
                e.__super__.constructor.apply(this, arguments), this.name = "UnderflowError", this.stack = (new Error).stack
            }
            return i(e, t), e
        }(Error), t.exports = e
    }).call(this)
}, function(t, e) {
    (function() {
        var e;
        e = function() {
            function t(t, e) {
                t && e && Object.defineProperty(this, "value", {
                    get: function() {
                        return t[e]
                    }
                })
            }
            return t.prototype.process = function(t) {}, t
        }(), t.exports = e
    }).call(this)
}, , function(t, e) {
    e.SF_TABLE = new Float32Array([2, 1.587401051968, 1.259921049895, 1, .793700525984, .629960524947, .5, .396850262992, .314980262474, .25, .198425131496, .157490131237, .125, .099212565748, .078745065618, .0625, .049606282874, .039372532809, .03125, .024803141437, .019686266405, .015625, .012401570719, .009843133202, .0078125, .006200785359, .004921566601, .00390625, .00310039268, .002460783301, .001953125, .00155019634, .00123039165, .0009765625, .00077509817, .000615195825, .00048828125, .000387549085, .000307597913, .000244140625, .000193774542, .000153798956, .000122070313, 96887271e-12, 76899478e-12, 61035156e-12, 48443636e-12, 38449739e-12, 30517578e-12, 24221818e-12, 1922487e-11, 15258789e-12, 12110909e-12, 9612435e-12, 7629395e-12, 6055454e-12, 4806217e-12, 3814697e-12, 3027727e-12, 2403109e-12, 1907349e-12, 1513864e-12, 1201554e-12, 0]);
    const i = new Uint8Array([4, 4, 4, 4, 4, 4, 6, 6, 6, 8, 10, 12, 16, 18, 22, 28, 34, 40, 46, 54, 54, 192]),
        r = new Uint8Array([4, 4, 4, 4, 4, 4, 6, 6, 8, 8, 10, 12, 16, 20, 24, 28, 34, 42, 50, 54, 76, 158]),
        a = new Uint8Array([4, 4, 4, 4, 4, 4, 6, 6, 8, 10, 12, 16, 20, 24, 30, 38, 46, 56, 68, 84, 102, 26]),
        s = new Uint8Array([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 6, 6, 6, 6, 6, 6, 10, 10, 10, 12, 12, 12, 14, 14, 14, 16, 16, 16, 20, 20, 20, 26, 26, 26, 66, 66, 66]),
        n = new Uint8Array([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 6, 6, 6, 8, 8, 8, 10, 10, 10, 12, 12, 12, 14, 14, 14, 18, 18, 18, 22, 22, 22, 30, 30, 30, 56, 56, 56]),
        o = new Uint8Array([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 6, 6, 6, 8, 8, 8, 12, 12, 12, 16, 16, 16, 20, 20, 20, 26, 26, 26, 34, 34, 34, 42, 42, 42, 12, 12, 12]),
        l = new Uint8Array([4, 4, 4, 4, 4, 4, 6, 6, 4, 4, 4, 6, 6, 6, 6, 6, 6, 10, 10, 10, 12, 12, 12, 14, 14, 14, 16, 16, 16, 20, 20, 20, 26, 26, 26, 66, 66, 66]),
        u = new Uint8Array([4, 4, 4, 4, 4, 4, 6, 6, 4, 4, 4, 6, 6, 6, 8, 8, 8, 10, 10, 10, 12, 12, 12, 14, 14, 14, 18, 18, 18, 22, 22, 22, 30, 30, 30, 56, 56, 56]),
        h = new Uint8Array([4, 4, 4, 4, 4, 4, 6, 6, 4, 4, 4, 6, 6, 6, 8, 8, 8, 12, 12, 12, 16, 16, 16, 20, 20, 20, 26, 26, 26, 34, 34, 34, 42, 42, 42, 12, 12, 12]),
        c = new Uint8Array([6, 6, 6, 6, 6, 6, 8, 10, 12, 14, 16, 18, 22, 26, 32, 38, 46, 54, 62, 70, 76, 36]),
        f = new Uint8Array([6, 6, 6, 6, 6, 6, 8, 10, 12, 14, 16, 20, 24, 28, 32, 38, 46, 52, 60, 68, 58, 54]),
        d = f,
        p = new Uint8Array([4, 4, 4, 4, 4, 4, 4, 4, 4, 6, 6, 6, 8, 8, 8, 10, 10, 10, 12, 12, 12, 14, 14, 14, 18, 18, 18, 24, 24, 24, 32, 32, 32, 44, 44, 44, 12, 12, 12]),
        m = new Uint8Array([4, 4, 4, 4, 4, 4, 4, 4, 4, 6, 6, 6, 6, 6, 6, 8, 8, 8, 10, 10, 10, 14, 14, 14, 18, 18, 18, 26, 26, 26, 32, 32, 32, 42, 42, 42, 18, 18, 18]),
        v = new Uint8Array([4, 4, 4, 4, 4, 4, 4, 4, 4, 6, 6, 6, 8, 8, 8, 10, 10, 10, 12, 12, 12, 14, 14, 14, 18, 18, 18, 24, 24, 24, 30, 30, 30, 40, 40, 40, 18, 18, 18]),
        g = new Uint8Array([6, 6, 6, 6, 6, 6, 6, 6, 6, 8, 8, 8, 10, 10, 10, 12, 12, 12, 14, 14, 14, 18, 18, 18, 24, 24, 24, 32, 32, 32, 44, 44, 44, 12, 12, 12]),
        y = new Uint8Array([6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 8, 8, 8, 10, 10, 10, 14, 14, 14, 18, 18, 18, 26, 26, 26, 32, 32, 32, 42, 42, 42, 18, 18, 18]),
        _ = new Uint8Array([6, 6, 6, 6, 6, 6, 6, 6, 6, 8, 8, 8, 10, 10, 10, 12, 12, 12, 14, 14, 14, 18, 18, 18, 24, 24, 24, 30, 30, 30, 40, 40, 40, 18, 18, 18]),
        b = d,
        k = b,
        w = new Uint8Array([12, 12, 12, 12, 12, 12, 16, 20, 24, 28, 32, 40, 48, 56, 64, 76, 90, 2, 2, 2, 2, 2]),
        T = v,
        S = T,
        I = new Uint8Array([8, 8, 8, 8, 8, 8, 8, 8, 8, 12, 12, 12, 16, 16, 16, 20, 20, 20, 24, 24, 24, 28, 28, 28, 36, 36, 36, 2, 2, 2, 2, 2, 2, 2, 2, 2, 26, 26, 26]),
        C = _,
        P = C,
        x = new Uint8Array([12, 12, 12, 4, 4, 4, 8, 8, 8, 12, 12, 12, 16, 16, 16, 20, 20, 20, 24, 24, 24, 28, 28, 28, 36, 36, 36, 2, 2, 2, 2, 2, 2, 2, 2, 2, 26, 26, 26]);
    e.SFBWIDTH_TABLE = [{
        l: i,
        s: s,
        m: l
    }, {
        l: r,
        s: n,
        m: u
    }, {
        l: a,
        s: o,
        m: h
    }, {
        l: c,
        s: p,
        m: g
    }, {
        l: f,
        s: m,
        m: y
    }, {
        l: d,
        s: v,
        m: _
    }, {
        l: b,
        s: T,
        m: C
    }, {
        l: k,
        s: S,
        m: P
    }, {
        l: w,
        s: I,
        m: x
    }], e.PRETAB = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 3, 3, 3, 2, 0]), e.ROOT_TABLE = new Float32Array([.59460355750136, .70710678118655, .84089641525371, 1, 1.18920711500272, 1.4142135623731, 1.68179283050743]), e.CS = new Float32Array([.857492926, .881741997, .949628649, .983314592, .995517816, .999160558, .999899195, .999993155]), e.CA = new Float32Array([-.514495755, -.471731969, -.313377454, -.1819132, -.094574193, -.040965583, -.014198569, -.003699975]), e.COUNT1TABLE_SELECT = 1, e.SCALEFAC_SCALE = 2, e.PREFLAG = 4, e.MIXED_BLOCK_FLAG = 8, e.I_STEREO = 1, e.MS_STEREO = 2, e.WINDOW_L = new Float32Array([.043619387, .130526192, .216439614, .3007058, .382683432, .461748613, .537299608, .608761429, .675590208, .737277337, .79335334, .843391446, .887010833, .923879533, .953716951, .976296007, .991444861, .999048222, .999048222, .991444861, .976296007, .953716951, .923879533, .887010833, .843391446, .79335334, .737277337, .675590208, .608761429, .537299608, .461748613, .382683432, .3007058, .216439614, .130526192, .043619387]), e.WINDOW_S = new Float32Array([.130526192, .382683432, .608761429, .79335334, .923879533, .991444861, .991444861, .923879533, .79335334, .608761429, .382683432, .130526192]), e.IS_TABLE = new Float32Array([0, .211324865, .366025404, .5, .633974596, .788675135, 1]), e.IS_LSF_TABLE = [new Float32Array([.840896415, .707106781, .594603558, .5, .420448208, .353553391, .297301779, .25, .210224104, .176776695, .148650889, .125, .105112052, .088388348, .074325445]), new Float32Array([.707106781, .5, .353553391, .25, .176776695, .125, .088388348, .0625, .044194174, .03125, .022097087, .015625, .011048543, .0078125, .005524272])], e.SFLEN_TABLE = [{
        slen1: 0,
        slen2: 0
    }, {
        slen1: 0,
        slen2: 1
    }, {
        slen1: 0,
        slen2: 2
    }, {
        slen1: 0,
        slen2: 3
    }, {
        slen1: 3,
        slen2: 0
    }, {
        slen1: 1,
        slen2: 1
    }, {
        slen1: 1,
        slen2: 2
    }, {
        slen1: 1,
        slen2: 3
    }, {
        slen1: 2,
        slen2: 1
    }, {
        slen1: 2,
        slen2: 2
    }, {
        slen1: 2,
        slen2: 3
    }, {
        slen1: 3,
        slen2: 1
    }, {
        slen1: 3,
        slen2: 2
    }, {
        slen1: 3,
        slen2: 3
    }, {
        slen1: 4,
        slen2: 2
    }, {
        slen1: 4,
        slen2: 3
    }], e.NSFB_TABLE = [
        [
            [6, 5, 5, 5],
            [9, 9, 9, 9],
            [6, 9, 9, 9]
        ],
        [
            [6, 5, 7, 3],
            [9, 9, 12, 6],
            [6, 9, 12, 6]
        ],
        [
            [11, 10, 0, 0],
            [18, 18, 0, 0],
            [15, 18, 0, 0]
        ],
        [
            [7, 7, 7, 0],
            [12, 12, 12, 0],
            [6, 15, 12, 0]
        ],
        [
            [6, 6, 6, 3],
            [12, 9, 9, 6],
            [6, 12, 9, 6]
        ],
        [
            [8, 8, 5, 0],
            [15, 12, 9, 0],
            [6, 18, 9, 0]
        ]
    ]
}, function(t, e, i) {
    (function() {
        var e, r, a, s, n, o, l, u = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            h = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var r in e) c.call(e, r) && (t[r] = e[r]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            },
            c = {}.hasOwnProperty;
        n = i(0), l = i(34), o = i(33), r = i(27), s = i(3), a = i(10), e = function(t) {
            function e(t) {
                this.source = t, this._decode = u(this._decode, this), this.findDecoder = u(this.findDecoder, this), this.probe = u(this.probe, this), this.buffered = 0, this.duration = null, this.format = null, this.metadata = null, this.active = !1, this.demuxer = null, this.decoder = null, this.source.once("data", this.probe), this.source.on("error", function(t) {
                    return function(e) {
                        return t.emit("error", e), t.stop()
                    }
                }(this)), this.source.on("progress", function(t) {
                    return function(e) {
                        return t.buffered = e, t.emit("buffer", t.buffered)
                    }
                }(this))
            }
            return h(e, t), e.fromURL = function(t, i) {
                return new e(new l(t, i))
            }, e.fromFile = function(t) {
                return new e(new o(t))
            }, e.fromBuffer = function(t) {
                return new e(new r(t))
            }, e.prototype.start = function(t) {
                if (!this.active) return null != t && (this.shouldDecode = t), null == this.shouldDecode && (this.shouldDecode = !0), this.active = !0, this.source.start(), this.decoder && this.shouldDecode ? this._decode() : void 0
            }, e.prototype.stop = function() {
                if (this.active) return this.active = !1, this.source.pause()
            }, e.prototype.get = function(t, e) {
                if ("format" === t || "duration" === t || "metadata" === t) return null != this[t] ? e(this[t]) : (this.once(t, function(t) {
                    return function(i) {
                        return t.stop(), e(i)
                    }
                }(this)), this.start())
            }, e.prototype.decodePacket = function() {
                return this.decoder.decode()
            }, e.prototype.decodeToBuffer = function(t) {
                var e, i, r;
                return r = 0, e = [], this.on("data", i = function(t) {
                    return r += t.length, e.push(t)
                }), this.once("end", function() {
                    var a, s, n, o, l;
                    for (a = new Float32Array(r), l = 0, n = 0, o = e.length; n < o; n++) s = e[n], a.set(s, l), l += s.length;
                    return this.off("data", i), t(a)
                }), this.start()
            }, e.prototype.probe = function(t) {
                var e;
                if (this.active) return (e = s.find(t)) ? (this.demuxer = new e(this.source, t), this.demuxer.on("format", this.findDecoder), this.demuxer.on("duration", function(t) {
                    return function(e) {
                        return t.duration = e, t.emit("duration", t.duration)
                    }
                }(this)), this.demuxer.on("metadata", function(t) {
                    return function(e) {
                        return t.metadata = e, t.emit("metadata", t.metadata)
                    }
                }(this)), this.demuxer.on("error", function(t) {
                    return function(e) {
                        return t.emit("error", e), t.stop()
                    }
                }(this))) : this.emit("error", "A demuxer for this container was not found.")
            }, e.prototype.findDecoder = function(t) {
                var e, i;
                if (this.format = t, this.active) return this.emit("format", this.format), (e = a.find(this.format.formatID)) ? (this.decoder = new e(this.demuxer, this.format), this.format.floatingPoint ? this.decoder.on("data", function(t) {
                    return function(e) {
                        return t.emit("data", e)
                    }
                }(this)) : (i = Math.pow(2, this.format.bitsPerChannel - 1), this.decoder.on("data", function(t) {
                    return function(e) {
                        var r, a, s, n, o;
                        for (r = new Float32Array(e.length), a = s = 0, n = e.length; s < n; a = ++s) o = e[a], r[a] = o / i;
                        return t.emit("data", r)
                    }
                }(this))), this.decoder.on("error", function(t) {
                    return function(e) {
                        return t.emit("error", e), t.stop()
                    }
                }(this)), this.decoder.on("end", function(t) {
                    return function() {
                        return t.emit("end")
                    }
                }(this)), this.emit("decodeStart"), this.shouldDecode ? this._decode() : void 0) : this.emit("error", "A decoder for " + this.format.formatID + " was not found.")
            }, e.prototype._decode = function() {
                for (; this.decoder.decode() && this.active;);
                if (this.active) return this.decoder.once("data", this._decode)
            }, e.prototype.destroy = function() {
                var t, e, i;
                return this.stop(), null != (t = this.demuxer) && t.off(), null != (e = this.decoder) && e.off(), null != (i = this.source) && i.off(), this.off()
            }, e
        }(n), t.exports = e
    }).call(this)
}, function(t, e) {
    (function() {
        var e, i = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var a in e) r.call(e, a) && (t[a] = e[a]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            },
            r = {}.hasOwnProperty,
            a = [].indexOf || function(t) {
                for (var e = 0, i = this.length; e < i; e++)
                    if (e in this && this[e] === t) return e;
                return -1
            };
        e = function() {
            function t() {}
            var e;
            return e = /\b_super\b/, t.extend = function(t) {
                var r, s, n, o, l, u;
                if (r = function(t) {
                        function e() {
                            return e.__super__.constructor.apply(this, arguments)
                        }
                        return i(e, t), e
                    }(this), "function" == typeof t) {
                    l = Object.keys(r.prototype), t.call(r, r), t = {}, u = r.prototype;
                    for (o in u) n = u[o], a.call(l, o) < 0 && (t[o] = n)
                }
                s = r.__super__;
                for (o in t) n = t[o], "function" == typeof n && e.test(n) ? function(t, e) {
                    r.prototype[t] = function() {
                        var i, r;
                        return r = this._super, this._super = s[t], i = e.apply(this, arguments), this._super = r, i
                    }
                }(o, n) : r.prototype[o] = n;
                return r
            }, t
        }(), t.exports = e
    }).call(this)
}, function(t, e) {
    (function() {
        var e;
        e = function() {
            function t(t) {
                this.stream = t, this.bitPosition = 0
            }
            return t.prototype.copy = function() {
                var e;
                return e = new t(this.stream.copy()), e.bitPosition = this.bitPosition, e
            }, t.prototype.offset = function() {
                return 8 * this.stream.offset + this.bitPosition
            }, t.prototype.available = function(t) {
                return this.stream.available((t + 8 - this.bitPosition) / 8)
            }, t.prototype.advance = function(t) {
                var e;
                return e = this.bitPosition + t, this.stream.advance(e >> 3), this.bitPosition = 7 & e
            }, t.prototype.rewind = function(t) {
                var e;
                return e = this.bitPosition - t, this.stream.rewind(Math.abs(e >> 3)), this.bitPosition = 7 & e
            }, t.prototype.seek = function(t) {
                var e;
                return e = this.offset(), t > e ? this.advance(t - e) : t < e ? this.rewind(e - t) : void 0
            }, t.prototype.align = function() {
                if (0 !== this.bitPosition) return this.bitPosition = 0, this.stream.advance(1)
            }, t.prototype.read = function(t, e) {
                var i, r, a, s, n, o, l;
                if (0 === t) return 0;
                if ((l = t + this.bitPosition) <= 8) i = (this.stream.peekUInt8() << this.bitPosition & 255) >>> 8 - t;
                else if (l <= 16) i = (this.stream.peekUInt16() << this.bitPosition & 65535) >>> 16 - t;
                else if (l <= 24) i = (this.stream.peekUInt24() << this.bitPosition & 16777215) >>> 24 - t;
                else if (l <= 32) i = this.stream.peekUInt32() << this.bitPosition >>> 32 - t;
                else {
                    if (!(l <= 40)) throw new Error("Too many bits!");
                    r = 4294967296 * this.stream.peekUInt8(0), a = this.stream.peekUInt8(1) << 24 >>> 0, s = this.stream.peekUInt8(2) << 16, n = this.stream.peekUInt8(3) << 8, o = this.stream.peekUInt8(4), i = r + a + s + n + o, i %= Math.pow(2, 40 - this.bitPosition), i = Math.floor(i / Math.pow(2, 40 - this.bitPosition - t))
                }
                return e && (l < 32 ? i >>> t - 1 && (i = -1 * ((1 << t >>> 0) - i)) : i / Math.pow(2, t - 1) | 0 && (i = -1 * (Math.pow(2, t) - i))), this.advance(t), i
            }, t.prototype.peek = function(t, e) {
                var i, r, a, s, n, o, l;
                if (0 === t) return 0;
                if ((l = t + this.bitPosition) <= 8) i = (this.stream.peekUInt8() << this.bitPosition & 255) >>> 8 - t;
                else if (l <= 16) i = (this.stream.peekUInt16() << this.bitPosition & 65535) >>> 16 - t;
                else if (l <= 24) i = (this.stream.peekUInt24() << this.bitPosition & 16777215) >>> 24 - t;
                else if (l <= 32) i = this.stream.peekUInt32() << this.bitPosition >>> 32 - t;
                else {
                    if (!(l <= 40)) throw new Error("Too many bits!");
                    r = 4294967296 * this.stream.peekUInt8(0), a = this.stream.peekUInt8(1) << 24 >>> 0, s = this.stream.peekUInt8(2) << 16, n = this.stream.peekUInt8(3) << 8, o = this.stream.peekUInt8(4), i = r + a + s + n + o, i %= Math.pow(2, 40 - this.bitPosition), i = Math.floor(i / Math.pow(2, 40 - this.bitPosition - t))
                }
                return e && (l < 32 ? i >>> t - 1 && (i = -1 * ((1 << t >>> 0) - i)) : i / Math.pow(2, t - 1) | 0 && (i = -1 * (Math.pow(2, t) - i))), i
            }, t.prototype.readLSB = function(t, e) {
                var i, r;
                if (0 === t) return 0;
                if (t > 40) throw new Error("Too many bits!");
                return r = t + this.bitPosition, i = this.stream.peekUInt8(0) >>> this.bitPosition, r > 8 && (i |= this.stream.peekUInt8(1) << 8 - this.bitPosition), r > 16 && (i |= this.stream.peekUInt8(2) << 16 - this.bitPosition), r > 24 && (i += this.stream.peekUInt8(3) << 24 - this.bitPosition >>> 0), r > 32 && (i += this.stream.peekUInt8(4) * Math.pow(2, 32 - this.bitPosition)), r >= 32 ? i %= Math.pow(2, t) : i &= (1 << t) - 1, e && (r < 32 ? i >>> t - 1 && (i = -1 * ((1 << t >>> 0) - i)) : i / Math.pow(2, t - 1) | 0 && (i = -1 * (Math.pow(2, t) - i))), this.advance(t), i
            }, t.prototype.peekLSB = function(t, e) {
                var i, r;
                if (0 === t) return 0;
                if (t > 40) throw new Error("Too many bits!");
                return r = t + this.bitPosition, i = this.stream.peekUInt8(0) >>> this.bitPosition, r > 8 && (i |= this.stream.peekUInt8(1) << 8 - this.bitPosition), r > 16 && (i |= this.stream.peekUInt8(2) << 16 - this.bitPosition), r > 24 && (i += this.stream.peekUInt8(3) << 24 - this.bitPosition >>> 0), r > 32 && (i += this.stream.peekUInt8(4) * Math.pow(2, 32 - this.bitPosition)), r >= 32 ? i %= Math.pow(2, t) : i &= (1 << t) - 1, e && (r < 32 ? i >>> t - 1 && (i = -1 * ((1 << t >>> 0) - i)) : i / Math.pow(2, t - 1) | 0 && (i = -1 * (Math.pow(2, t) - i))), i
            }, t
        }(), t.exports = e
    }).call(this)
}, function(t, e, i) {
    (function() {
        var e, r, a = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var r in e) s.call(e, r) && (t[r] = e[r]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            },
            s = {}.hasOwnProperty,
            n = [].indexOf || function(t) {
                for (var e = 0, i = this.length; e < i; e++)
                    if (e in this && this[e] === t) return e;
                return -1
            };
        e = i(3), r = function(t) {
            function i() {
                return i.__super__.constructor.apply(this, arguments)
            }
            var r, s, o, l, u, h, c, f, d, p, m;
            return a(i, t), e.register(i), s = ["M4A ", "M4P ", "M4B ", "M4V ", "isom", "mp42", "qt  "], i.probe = function(t) {
                var e;
                return "ftyp" === t.peekString(4, 4) && (e = t.peekString(8, 4), n.call(s, e) >= 0)
            }, i.prototype.init = function() {
                return this.atoms = [], this.offsets = [], this.track = null, this.tracks = []
            }, u = {}, c = {}, l = function(t, e) {
                var i, r, a, s, n;
                for (i = [], n = t.split(".").slice(0, -1), a = 0, s = n.length; a < s; a++) r = n[a], i.push(r), c[i.join(".")] = !0;
                return null == u[t] && (u[t] = {}), u[t].fn = e
            }, o = function(t, e) {
                return null == u[t] && (u[t] = {}), u[t].after = e
            }, i.prototype.readChunk = function() {
                var t, e;
                for (this.break = !1; this.stream.available(1) && !this.break;) {
                    if (!this.readHeaders) {
                        if (!this.stream.available(8)) return;
                        if (this.len = this.stream.readUInt32() - 8, this.type = this.stream.readString(4), 0 === this.len) continue;
                        this.atoms.push(this.type), this.offsets.push(this.stream.offset + this.len), this.readHeaders = !0
                    }
                    if (e = this.atoms.join("."), t = u[e], null != t ? t.fn : void 0) {
                        if (!this.stream.available(this.len) && "mdat" !== e) return;
                        t.fn.call(this), e in c && (this.readHeaders = !1)
                    } else if (e in c) this.readHeaders = !1;
                    else {
                        if (!this.stream.available(this.len)) return;
                        this.stream.advance(this.len)
                    }
                    for (; this.stream.offset >= this.offsets[this.offsets.length - 1];) t = u[this.atoms.join(".")], (null != t ? t.after : void 0) && t.after.call(this), this.atoms.pop(), this.offsets.pop(), this.readHeaders = !1
                }
            }, l("ftyp", function() {
                var t;
                return t = this.stream.readString(4), n.call(s, t) < 0 ? this.emit("error", "Not a valid M4A file.") : this.stream.advance(this.len - 4)
            }), l("moov.trak", function() {
                return this.track = {}, this.tracks.push(this.track)
            }), l("moov.trak.tkhd", function() {
                return this.stream.advance(4), this.stream.advance(8), this.track.id = this.stream.readUInt32(), this.stream.advance(this.len - 16)
            }), l("moov.trak.mdia.hdlr", function() {
                return this.stream.advance(4), this.stream.advance(4), this.track.type = this.stream.readString(4), this.stream.advance(12), this.stream.advance(this.len - 24)
            }), l("moov.trak.mdia.mdhd", function() {
                return this.stream.advance(4), this.stream.advance(8), this.track.timeScale = this.stream.readUInt32(), this.track.duration = this.stream.readUInt32(), this.stream.advance(4)
            }), r = {
                ulaw: 8,
                alaw: 8,
                in24: 24,
                in32: 32,
                fl32: 32,
                fl64: 64
            }, l("moov.trak.mdia.minf.stbl.stsd", function() {
                var t, e, i, a, s;
                return this.stream.advance(4), e = this.stream.readUInt32(), "soun" !== this.track.type ? this.stream.advance(this.len - 8) : 1 !== e ? this.emit("error", "Only expecting one entry in sample description atom!") : (this.stream.advance(4), t = this.track.format = {}, t.formatID = this.stream.readString(4), this.stream.advance(6), this.stream.advance(2), s = this.stream.readUInt16(), this.stream.advance(6), t.channelsPerFrame = this.stream.readUInt16(), t.bitsPerChannel = this.stream.readUInt16(), this.stream.advance(4), t.sampleRate = this.stream.readUInt16(), this.stream.advance(2), 1 === s ? (t.framesPerPacket = this.stream.readUInt32(), this.stream.advance(4), t.bytesPerFrame = this.stream.readUInt32(), this.stream.advance(4)) : 0 !== s && this.emit("error", "Unknown version in stsd atom"), null != r[t.formatID] && (t.bitsPerChannel = r[t.formatID]), t.floatingPoint = "fl32" === (i = t.formatID) || "fl64" === i, t.littleEndian = "sowt" === t.formatID && t.bitsPerChannel > 8, "twos" === (a = t.formatID) || "sowt" === a || "in24" === a || "in32" === a || "fl32" === a || "fl64" === a || "raw " === a || "NONE" === a ? t.formatID = "lpcm" : void 0)
            }), l("moov.trak.mdia.minf.stbl.stsd.alac", function() {
                return this.stream.advance(4), this.track.cookie = this.stream.readBuffer(this.len - 4)
            }), l("moov.trak.mdia.minf.stbl.stsd.esds", function() {
                var t;
                return t = this.stream.offset + this.len, this.track.cookie = i.readEsds(this.stream), this.stream.seek(t)
            }), l("moov.trak.mdia.minf.stbl.stsd.wave.enda", function() {
                return this.track.format.littleEndian = !!this.stream.readUInt16()
            }), i.readDescrLen = function(t) {
                var e, i, r;
                for (r = 0, i = 4; i-- && (e = t.readUInt8(), r = r << 7 | 127 & e, 128 & e););
                return r
            }, i.readEsds = function(t) {
                var e, r, a;
                return t.advance(4), a = t.readUInt8(), r = i.readDescrLen(t), 3 === a ? (t.advance(2), e = t.readUInt8(), 128 & e && t.advance(2), 64 & e && t.advance(t.readUInt8()), 32 & e && t.advance(2)) : t.advance(2), a = t.readUInt8(), r = i.readDescrLen(t), 4 === a && (t.readUInt8(), t.advance(1), t.advance(3), t.advance(4), t.advance(4), a = t.readUInt8(), r = i.readDescrLen(t), 5 === a) ? t.readBuffer(r) : null
            }, l("moov.trak.mdia.minf.stbl.stts", function() {
                var t, e, i, r;
                for (this.stream.advance(4), t = this.stream.readUInt32(), this.track.stts = [], e = i = 0, r = t; i < r; e = i += 1) this.track.stts[e] = {
                    count: this.stream.readUInt32(),
                    duration: this.stream.readUInt32()
                };
                return this.setupSeekPoints()
            }), l("moov.trak.mdia.minf.stbl.stsc", function() {
                var t, e, i, r;
                for (this.stream.advance(4), t = this.stream.readUInt32(), this.track.stsc = [], e = i = 0, r = t; i < r; e = i += 1) this.track.stsc[e] = {
                    first: this.stream.readUInt32(),
                    count: this.stream.readUInt32(),
                    id: this.stream.readUInt32()
                };
                return this.setupSeekPoints()
            }), l("moov.trak.mdia.minf.stbl.stsz", function() {
                var t, e, i, r;
                if (this.stream.advance(4), this.track.sampleSize = this.stream.readUInt32(), t = this.stream.readUInt32(), 0 === this.track.sampleSize && t > 0)
                    for (this.track.sampleSizes = [], e = i = 0, r = t; i < r; e = i += 1) this.track.sampleSizes[e] = this.stream.readUInt32();
                return this.setupSeekPoints()
            }), l("moov.trak.mdia.minf.stbl.stco", function() {
                var t, e, i, r;
                for (this.stream.advance(4), t = this.stream.readUInt32(), this.track.chunkOffsets = [], e = i = 0, r = t; i < r; e = i += 1) this.track.chunkOffsets[e] = this.stream.readUInt32();
                return this.setupSeekPoints()
            }), l("moov.trak.tref.chap", function() {
                var t, e, i, r;
                for (t = this.len >> 2, this.track.chapterTracks = [], e = i = 0, r = t; i < r; e = i += 1) this.track.chapterTracks[e] = this.stream.readUInt32()
            }), i.prototype.setupSeekPoints = function() {
                var t, e, i, r, a, s, n, o, l, u, h, c, f, d, p;
                if (null != this.track.chunkOffsets && null != this.track.stsc && null != this.track.sampleSize && null != this.track.stts) {
                    for (c = 0, f = 0, f = 0, d = 0, u = 0, a = 0, p = 0, this.track.seekPoints = [], n = this.track.chunkOffsets, l = [], t = e = 0, r = n.length; e < r; t = ++e) {
                        for (s = n[t], i = 0, o = this.track.stsc[c].count; i < o; i += 1) this.track.seekPoints.push({
                            offset: a,
                            position: s,
                            timestamp: p
                        }), h = this.track.sampleSize || this.track.sampleSizes[u++], a += h, s += h, p += this.track.stts[f].duration, f + 1 < this.track.stts.length && ++d === this.track.stts[f].count && (d = 0, f++);
                        c + 1 < this.track.stsc.length && t + 1 === this.track.stsc[c + 1].first ? l.push(c++) : l.push(void 0)
                    }
                    return l
                }
            }, o("moov", function() {
                var t, e, i, r;
                for (null != this.mdatOffset && this.stream.seek(this.mdatOffset - 8), i = this.tracks, t = 0, e = i.length; t < e; t++)
                    if (r = i[t], "soun" === r.type) {
                        this.track = r;
                        break
                    } return "soun" !== this.track.type ? (this.track = null, this.emit("error", "No audio tracks in m4a file.")) : (this.emit("format", this.track.format), this.emit("duration", this.track.duration / this.track.timeScale * 1e3 | 0), this.track.cookie && this.emit("cookie", this.track.cookie), this.seekPoints = this.track.seekPoints)
            }), l("mdat", function() {
                var t, e, i, r, a, s, n, o, l;
                if (!this.startedData) {
                    if (null == this.mdatOffset && (this.mdatOffset = this.stream.offset), 0 === this.tracks.length) return t = Math.min(this.stream.remainingBytes(), this.len), this.stream.advance(t), void(this.len -= t);
                    this.chunkIndex = 0, this.stscIndex = 0, this.sampleIndex = 0, this.tailOffset = 0, this.tailSamples = 0, this.startedData = !0
                }
                if (!this.readChapters) {
                    if (this.readChapters = this.parseChapters(), this.break = !this.readChapters) return;
                    this.stream.seek(this.mdatOffset)
                }
                if (s = this.track.chunkOffsets[this.chunkIndex] + this.tailOffset, r = 0, !this.stream.available(s - this.stream.offset)) return void(this.break = !0);
                for (this.stream.seek(s); this.chunkIndex < this.track.chunkOffsets.length;) {
                    for (a = this.track.stsc[this.stscIndex].count - this.tailSamples, e = 0, o = i = 0, n = a; i < n && (l = this.track.sampleSize || this.track.sampleSizes[this.sampleIndex], this.stream.available(r + l)); o = i += 1) r += l, e += l, this.sampleIndex++;
                    if (o < a) {
                        this.tailOffset += e, this.tailSamples += o;
                        break
                    }
                    if (this.chunkIndex++, this.tailOffset = 0, this.tailSamples = 0, this.stscIndex + 1 < this.track.stsc.length && this.chunkIndex + 1 === this.track.stsc[this.stscIndex + 1].first && this.stscIndex++, s + r !== this.track.chunkOffsets[this.chunkIndex]) break
                }
                return r > 0 ? (this.emit("data", this.stream.readBuffer(r)), this.break = this.chunkIndex === this.track.chunkOffsets.length) : this.break = !0
            }), i.prototype.parseChapters = function() {
                var t, e, i, r, a, s, n, o, l, u, h, c, f;
                if (!((null != (o = this.track.chapterTracks) ? o.length : void 0) > 0)) return !0;
                for (e = this.track.chapterTracks[0], l = this.tracks, i = 0, a = l.length; i < a && (f = l[i], f.id !== e); i++);
                for (f.id !== e && this.emit("error", "Chapter track does not exist."), null == this.chapters && (this.chapters = []); this.chapters.length < f.seekPoints.length;) {
                    if (n = f.seekPoints[this.chapters.length], !this.stream.available(n.position - this.stream.offset + 32)) return !1;
                    if (this.stream.seek(n.position), r = this.stream.readUInt16(), c = null, !this.stream.available(r)) return !1;
                    r > 2 && (65279 !== (t = this.stream.peekUInt16()) && 65534 !== t || (c = this.stream.readString(r, "utf16-bom"))), null == c && (c = this.stream.readString(r, "utf8")), s = null != (u = null != (h = f.seekPoints[this.chapters.length + 1]) ? h.timestamp : void 0) ? u : f.duration, this.chapters.push({
                        title: c,
                        timestamp: n.timestamp / f.timeScale * 1e3 | 0,
                        duration: (s - n.timestamp) / f.timeScale * 1e3 | 0
                    })
                }
                return this.emit("chapters", this.chapters), !0
            }, l("moov.udta.meta", function() {
                return this.metadata = {}, this.stream.advance(4)
            }), o("moov.udta.meta", function() {
                return this.emit("metadata", this.metadata)
            }), p = function(t, e, i) {
                return l("moov.udta.meta.ilst." + t + ".data", function() {
                    return this.stream.advance(8), this.len -= 8, i.call(this, e)
                })
            }, m = function(t) {
                return this.metadata[t] = this.stream.readString(this.len, "utf8")
            }, p("©alb", "album", m), p("©arg", "arranger", m), p("©art", "artist", m), p("©ART", "artist", m), p("aART", "albumArtist", m), p("catg", "category", m), p("©com", "composer", m), p("©cpy", "copyright", m), p("cprt", "copyright", m), p("©cmt", "comments", m), p("©day", "releaseDate", m), p("desc", "description", m), p("©gen", "genre", m), p("©grp", "grouping", m), p("©isr", "ISRC", m), p("keyw", "keywords", m), p("©lab", "recordLabel", m), p("ldes", "longDescription", m), p("©lyr", "lyrics", m), p("©name", "title", m), p("©phg", "recordingCopyright", m), p("©prd", "producer", m), p("©prf", "performers", m), p("purd", "purchaseDate", m), p("purl", "podcastURL", m), p("©swf", "songwriter", m), p("©too", "encoder", m), p("©wrt", "composer", m), p("covr", "coverArt", function(t) {
                return this.metadata[t] = this.stream.readBuffer(this.len)
            }), d = ["Blues", "Classic Rock", "Country", "Dance", "Disco", "Funk", "Grunge", "Hip-Hop", "Jazz", "Metal", "New Age", "Oldies", "Other", "Pop", "R&B", "Rap", "Reggae", "Rock", "Techno", "Industrial", "Alternative", "Ska", "Death Metal", "Pranks", "Soundtrack", "Euro-Techno", "Ambient", "Trip-Hop", "Vocal", "Jazz+Funk", "Fusion", "Trance", "Classical", "Instrumental", "Acid", "House", "Game", "Sound Clip", "Gospel", "Noise", "AlternRock", "Bass", "Soul", "Punk", "Space", "Meditative", "Instrumental Pop", "Instrumental Rock", "Ethnic", "Gothic", "Darkwave", "Techno-Industrial", "Electronic", "Pop-Folk", "Eurodance", "Dream", "Southern Rock", "Comedy", "Cult", "Gangsta", "Top 40", "Christian Rap", "Pop/Funk", "Jungle", "Native American", "Cabaret", "New Wave", "Psychedelic", "Rave", "Showtunes", "Trailer", "Lo-Fi", "Tribal", "Acid Punk", "Acid Jazz", "Polka", "Retro", "Musical", "Rock & Roll", "Hard Rock", "Folk", "Folk/Rock", "National Folk", "Swing", "Fast Fusion", "Bebob", "Latin", "Revival", "Celtic", "Bluegrass", "Avantgarde", "Gothic Rock", "Progressive Rock", "Psychedelic Rock", "Symphonic Rock", "Slow Rock", "Big Band", "Chorus", "Easy Listening", "Acoustic", "Humour", "Speech", "Chanson", "Opera", "Chamber Music", "Sonata", "Symphony", "Booty Bass", "Primus", "Porn Groove", "Satire", "Slow Jam", "Club", "Tango", "Samba", "Folklore", "Ballad", "Power Ballad", "Rhythmic Soul", "Freestyle", "Duet", "Punk Rock", "Drum Solo", "A Capella", "Euro-House", "Dance Hall"], p("gnre", "genre", function(t) {
                return this.metadata[t] = d[this.stream.readUInt16() - 1]
            }), p("tmpo", "tempo", function(t) {
                return this.metadata[t] = this.stream.readUInt16()
            }), p("rtng", "rating", function(t) {
                var e;
                return e = this.stream.readUInt8(), this.metadata[t] = 2 === e ? "Clean" : 0 !== e ? "Explicit" : "None"
            }), f = function(t) {
                return this.stream.advance(2), this.metadata[t] = this.stream.readUInt16() + " of " + this.stream.readUInt16(), this.stream.advance(this.len - 6)
            }, p("disk", "diskNumber", f), p("trkn", "trackNumber", f), h = function(t) {
                return this.metadata[t] = 1 === this.stream.readUInt8()
            }, p("cpil", "compilation", h), p("pcst", "podcast", h), p("pgap", "gapless", h), i
        }(e), t.exports = r
    }).call(this)
}, function(t, e, i) {
    (function() {
        var e, r, a = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var r in e) s.call(e, r) && (t[r] = e[r]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            },
            s = {}.hasOwnProperty;
        r = i(18), e = function(t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }
            return a(e, t), e.prototype.process = function(t) {
                var e, i, r, a;
                if (0 !== this.value)
                    for (r = Math.max(-50, Math.min(50, this.value)), e = i = 0, a = t.length; i < a; e = i += 2) t[e] *= Math.min(1, (50 - r) / 50), t[e + 1] *= Math.min(1, (50 + r) / 50)
            }, e
        }(r), t.exports = e
    }).call(this)
}, function(t, e, i) {
    (function() {
        var e, r, a = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var r in e) s.call(e, r) && (t[r] = e[r]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            },
            s = {}.hasOwnProperty;
        e = i(18), r = function(t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }
            return a(e, t), e.prototype.process = function(t) {
                var e, i, r, a;
                if (!(this.value >= 100))
                    for (a = Math.max(0, Math.min(100, this.value)) / 100, e = i = 0, r = t.length; i < r; e = i += 1) t[e] *= a
            }, e
        }(e), t.exports = r
    }).call(this)
}, function(t, e, i) {
    (function(e) {
        (function() {
            var r, a, s, n, o = function(t, e) {
                    return function() {
                        return t.apply(e, arguments)
                    }
                },
                l = function(t, e) {
                    function i() {
                        this.constructor = t
                    }
                    for (var r in e) u.call(e, r) && (t[r] = e[r]);
                    return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
                },
                u = {}.hasOwnProperty;
            n = i(0), a = i(8), r = i(6), s = function(t) {
                function i(t) {
                    this.loop = o(this.loop, this), t instanceof a ? this.list = t : (this.list = new a, this.list.append(new r(t))), this.paused = !0
                }
                var s, n;
                return l(i, t), n = e.setImmediate || function(t) {
                    return e.setTimeout(t, 0)
                }, s = e.clearImmediate || function(t) {
                    return e.clearTimeout(t)
                }, i.prototype.start = function() {
                    return this.paused = !1, this._timer = n(this.loop)
                }, i.prototype.loop = function() {
                    return this.emit("progress", (this.list.numBuffers - this.list.availableBuffers + 1) / this.list.numBuffers * 100 | 0), this.emit("data", this.list.first), this.list.advance() ? n(this.loop) : this.emit("end")
                }, i.prototype.pause = function() {
                    return s(this._timer), this.paused = !0
                }, i.prototype.reset = function() {
                    return this.pause(), this.list.rewind()
                }, i
            }(n), t.exports = s
        }).call(this)
    }).call(e, i(13))
}, , , , , , function(t, e, i) {
    var r, a, s, n = {}.hasOwnProperty,
        o = function(t, e) {
            function i() {
                this.constructor = t
            }
            for (var r in e) n.call(e, r) && (t[r] = e[r]);
            return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
        };
    a = i(0), r = i(6), s = function(t) {
        function e(t) {
            if (this.file = t, "undefined" == typeof FileReader || null === FileReader) return this.emit("error", "This browser does not have FileReader support.");
            this.offset = 0, this.length = this.file.size, this.chunkSize = 1 << 20, this.file[this.slice = "slice"] || this.file[this.slice = "webkitSlice"] || this.file[this.slice = "mozSlice"]
        }
        return o(e, t), e.prototype.start = function() {
            return this.reader && !this.active ? this.loop() : (this.reader = new FileReader, this.active = !0, this.reader.onload = function(t) {
                return function(e) {
                    var i;
                    if (i = new r(new Uint8Array(e.target.result)), t.offset += i.length, t.emit("data", i), t.active = !1, t.offset < t.length) return t.loop()
                }
            }(this), this.reader.onloadend = function(t) {
                return function() {
                    if (t.offset === t.length) return t.emit("end"), t.reader = null
                }
            }(this), this.reader.onerror = function(t) {
                return function(e) {
                    return t.emit("error", e)
                }
            }(this), this.reader.onprogress = function(t) {
                return function(e) {
                    return t.emit("progress", (t.offset + e.loaded) / t.length * 100)
                }
            }(this), this.loop())
        }, e.prototype.loop = function() {
            var t, e;
            return this.active = !0, e = Math.min(this.offset + this.chunkSize, this.length), t = this.file[this.slice](this.offset, e), this.reader.readAsArrayBuffer(t)
        }, e.prototype.pause = function() {
            var t;
            this.active = !1;
            try {
                return null != (t = this.reader) ? t.abort() : void 0
            } catch (t) {}
        }, e.prototype.reset = function() {
            return this.pause(), this.offset = 0
        }, e
    }(a), t.exports = s
}, function(t, e, i) {
    var r, a, s, n = {}.hasOwnProperty,
        o = function(t, e) {
            function i() {
                this.constructor = t
            }
            for (var r in e) n.call(e, r) && (t[r] = e[r]);
            return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
        };
    a = i(0), r = i(6), s = function(t) {
        function e(t, e) {
            this.url = t, this.opts = null != e ? e : {}, this.chunkSize = 1 << 20, this.inflight = !1, this.opts.length && (this.length = this.opts.length), this.reset()
        }
        return o(e, t), e.prototype.start = function() {
            return this.length && !this.inflight ? this.loop() : (this.inflight = !0, this.xhr = new XMLHttpRequest, this.xhr.onload = function(t) {
                return function(e) {
                    return t.length = parseInt(t.xhr.getResponseHeader("Content-Length")), t.inflight = !1, t.loop()
                }
            }(this), this.xhr.onerror = function(t) {
                return function(e) {
                    return t.pause(), t.emit("error", e)
                }
            }(this), this.xhr.onabort = function(t) {
                return function(e) {
                    return t.inflight = !1
                }
            }(this), this.xhr.open("HEAD", this.url, !0), this.xhr.send(null))
        }, e.prototype.loop = function() {
            var t;
            return this.inflight || !this.length ? this.emit("error", "Something is wrong in HTTPSource.loop") : (this.inflight = !0, this.xhr = new XMLHttpRequest, this.xhr.onload = function(t) {
                return function(e) {
                    var i, a, s, n, o, l;
                    if (t.xhr.response) i = new Uint8Array(t.xhr.response);
                    else
                        for (n = t.xhr.responseText, i = new Uint8Array(n.length), s = o = 0, l = n.length; 0 <= l ? o < l : o > l; s = 0 <= l ? ++o : --o) i[s] = 255 & n.charCodeAt(s);
                    if (a = new r(i), t.offset += a.length, t.emit("data", a), t.offset >= t.length && t.emit("end"), t.inflight = !1, !(t.offset >= t.length)) return t.loop()
                }
            }(this), this.xhr.onprogress = function(t) {
                return function(e) {
                    return t.emit("progress", (t.offset + e.loaded) / t.length * 100)
                }
            }(this), this.xhr.onerror = function(t) {
                return function(e) {
                    return t.emit("error", e), t.pause()
                }
            }(this), this.xhr.onabort = function(t) {
                return function(e) {
                    return t.inflight = !1
                }
            }(this), this.xhr.open("GET", this.url, !0), this.xhr.responseType = "arraybuffer", t = Math.min(this.offset + this.chunkSize, this.length - 1), this.xhr.setRequestHeader("If-None-Match", "webkit-no-cache"), this.xhr.setRequestHeader("Range", "bytes=" + this.offset + "-" + t), this.xhr.overrideMimeType("text/plain; charset=x-user-defined"), this.xhr.send(null))
        }, e.prototype.pause = function() {
            var t;
            return this.inflight = !1, null != (t = this.xhr) ? t.abort() : void 0
        }, e.prototype.reset = function() {
            return this.pause(), this.offset = 0
        }, e
    }(a), t.exports = s
}, function(t, e, i) {
    var r = i(4);
    const a = ["latin1", "utf16-bom", "utf16-be", "utf8"];
    var s = r.Base.extend({
        constructor: function(t, e) {
            this.header = t, this.stream = e, this.offset = 0
        },
        read: function() {
            if (!this.data) {
                this.data = {};
                for (var t; t = this.readFrame();) t.key in this.data ? (Array.isArray(this.data[t.key]) || (this.data[t.key] = [this.data[t.key]]), this.data[t.key].push(t.value)) : this.data[t.key] = t.value
            }
            return this.data
        },
        readFrame: function() {
            if (this.offset >= this.header.length) return null;
            var t = this.readHeader(),
                e = t.identifier;
            if (0 === t.identifier.charCodeAt(0)) return this.offset += this.header.length + 1, null;
            if (!this.frameTypes[e])
                for (var i in this.map)
                    if (-1 !== this.map[i].indexOf(e)) {
                        e = i;
                        break
                    } if (this.frameTypes[e]) {
                var r = this.decodeFrame(t, this.frameTypes[e]),
                    a = Object.keys(r);
                1 === a.length && (r = r[a[0]]);
                var s = {
                    value: r
                }
            } else var s = {
                value: this.stream.readBuffer(Math.min(t.length, this.header.length - this.offset))
            };
            return s.key = this.names[t.identifier] ? this.names[t.identifier] : t.identifier, "coverArt" === s.key && (s.value = s.value.data), this.offset += 10 + t.length, s
        },
        decodeFrame: function(t, e) {
            var i = this.stream,
                r = i.offset,
                s = 0,
                n = {},
                o = Object.keys(e).length,
                l = 0;
            for (var u in e) {
                var h = e[u],
                    c = t.length - (i.offset - r);
                switch (l++, u) {
                    case "encoding":
                        s = i.readUInt8();
                        continue;
                    case "language":
                        n.language = i.readString(3);
                        continue
                }
                switch (h) {
                    case "latin1":
                        n[u] = i.readString(l === o ? c : null, "latin1");
                        break;
                    case "string":
                        n[u] = i.readString(l === o ? c : null, a[s]);
                        break;
                    case "binary":
                        n[u] = i.readBuffer(c);
                        break;
                    case "int16":
                        n[u] = i.readInt16();
                        break;
                    case "int8":
                        n[u] = i.readInt8();
                        break;
                    case "int24":
                        n[u] = i.readInt24();
                        break;
                    case "int32":
                        n[u] = i.readInt32();
                        break;
                    case "int32+":
                        if (n[u] = i.readInt32(), c > 4) throw new Error("Seriously dude? Stop playing this song and get a life!");
                        break;
                    case "date":
                        var f = i.readString(8);
                        n[u] = new Date(f.slice(0, 4), f.slice(4, 6) - 1, f.slice(6, 8));
                        break;
                    case "frame_id":
                        n[u] = i.readString(4);
                        break;
                    default:
                        throw new Error("Unknown key type " + h)
                }
            }
            var c = t.length - (i.offset - r);
            return c > 0 && i.advance(c), n
        }
    });
    e.ID3v23Stream = s.extend({
        readHeader: function() {
            var t = this.stream.readString(4),
                e = 0;
            if (4 === this.header.major)
                for (var i = 0; i < 4; i++) e = (e << 7) + (127 & this.stream.readUInt8());
            else e = this.stream.readUInt32();
            return {
                identifier: t,
                length: e,
                flags: this.stream.readUInt16()
            }
        },
        map: {
            text: ["TIT1", "TIT2", "TIT3", "TALB", "TOAL", "TRCK", "TPOS", "TSST", "TSRC", "TPE1", "TPE2", "TPE3", "TPE4", "TOPE", "TEXT", "TOLY", "TCOM", "TMCL", "TIPL", "TENC", "TBPM", "TLEN", "TKEY", "TLAN", "TCON", "TFLT", "TMED", "TMOO", "TCOP", "TPRO", "TPUB", "TOWN", "TRSN", "TRSO", "TOFN", "TDLY", "TDEN", "TDOR", "TDRC", "TDRL", "TDTG", "TSSE", "TSOA", "TSOP", "TSOT", "TDAT", "TIME", "TORY", "TRDA", "TSIZ", "TYER", "TCMP", "TSO2", "TSOC"],
            url: ["WCOM", "WCOP", "WOAF", "WOAR", "WOAS", "WORS", "WPAY", "WPUB"]
        },
        frameTypes: {
            text: {
                encoding: 1,
                value: "string"
            },
            url: {
                value: "latin1"
            },
            TXXX: {
                encoding: 1,
                description: "string",
                value: "string"
            },
            WXXX: {
                encoding: 1,
                description: "string",
                value: "latin1"
            },
            USLT: {
                encoding: 1,
                language: 1,
                description: "string",
                value: "string"
            },
            COMM: {
                encoding: 1,
                language: 1,
                description: "string",
                value: "string"
            },
            APIC: {
                encoding: 1,
                mime: "latin1",
                type: "int8",
                description: "string",
                data: "binary"
            },
            UFID: {
                owner: "latin1",
                identifier: "binary"
            },
            MCDI: {
                value: "binary"
            },
            PRIV: {
                owner: "latin1",
                value: "binary"
            },
            GEOB: {
                encoding: 1,
                mime: "latin1",
                filename: "string",
                description: "string",
                data: "binary"
            },
            PCNT: {
                value: "int32+"
            },
            POPM: {
                email: "latin1",
                rating: "int8",
                counter: "int32+"
            },
            AENC: {
                owner: "latin1",
                previewStart: "int16",
                previewLength: "int16",
                encryptionInfo: "binary"
            },
            ETCO: {
                format: "int8",
                data: "binary"
            },
            MLLT: {
                framesBetweenReference: "int16",
                bytesBetweenReference: "int24",
                millisecondsBetweenReference: "int24",
                bitsForBytesDeviation: "int8",
                bitsForMillisecondsDev: "int8",
                data: "binary"
            },
            SYTC: {
                format: "int8",
                tempoData: "binary"
            },
            SYLT: {
                encoding: 1,
                language: 1,
                format: "int8",
                contentType: "int8",
                description: "string",
                data: "binary"
            },
            RVA2: {
                identification: "latin1",
                data: "binary"
            },
            EQU2: {
                interpolationMethod: "int8",
                identification: "latin1",
                data: "binary"
            },
            RVRB: {
                left: "int16",
                right: "int16",
                bouncesLeft: "int8",
                bouncesRight: "int8",
                feedbackLL: "int8",
                feedbackLR: "int8",
                feedbackRR: "int8",
                feedbackRL: "int8",
                premixLR: "int8",
                premixRL: "int8"
            },
            RBUF: {
                size: "int24",
                flag: "int8",
                offset: "int32"
            },
            LINK: {
                identifier: "frame_id",
                url: "latin1",
                data: "binary"
            },
            POSS: {
                format: "int8",
                position: "binary"
            },
            USER: {
                encoding: 1,
                language: 1,
                value: "string"
            },
            OWNE: {
                encoding: 1,
                price: "latin1",
                purchaseDate: "date",
                seller: "string"
            },
            COMR: {
                encoding: 1,
                price: "latin1",
                validUntil: "date",
                contactURL: "latin1",
                receivedAs: "int8",
                seller: "string",
                description: "string",
                logoMime: "latin1",
                logo: "binary"
            },
            ENCR: {
                owner: "latin1",
                methodSymbol: "int8",
                data: "binary"
            },
            GRID: {
                owner: "latin1",
                groupSymbol: "int8",
                data: "binary"
            },
            SIGN: {
                groupSymbol: "int8",
                signature: "binary"
            },
            SEEK: {
                value: "int32"
            },
            ASPI: {
                dataStart: "int32",
                dataLength: "int32",
                numPoints: "int16",
                bitsPerPoint: "int8",
                data: "binary"
            },
            IPLS: {
                encoding: 1,
                value: "string"
            },
            RVAD: {
                adjustment: "int8",
                bits: "int8",
                data: "binary"
            },
            EQUA: {
                adjustmentBits: "int8",
                data: "binary"
            }
        },
        names: {
            TIT1: "grouping",
            TIT2: "title",
            TIT3: "subtitle",
            TALB: "album",
            TOAL: "originalAlbumTitle",
            TRCK: "trackNumber",
            TPOS: "diskNumber",
            TSST: "setSubtitle",
            TSRC: "ISRC",
            TPE1: "artist",
            TPE2: "albumArtist",
            TPE3: "conductor",
            TPE4: "modifiedBy",
            TOPE: "originalArtist",
            TEXT: "lyricist",
            TOLY: "originalLyricist",
            TCOM: "composer",
            TMCL: "musicianCreditsList",
            TIPL: "involvedPeopleList",
            TENC: "encodedBy",
            TBPM: "tempo",
            TLEN: "length",
            TKEY: "initialKey",
            TLAN: "language",
            TCON: "genre",
            TFLT: "fileType",
            TMED: "mediaType",
            TMOO: "mood",
            TCOP: "copyright",
            TPRO: "producedNotice",
            TPUB: "publisher",
            TOWN: "fileOwner",
            TRSN: "internetRadioStationName",
            TRSO: "internetRadioStationOwner",
            TOFN: "originalFilename",
            TDLY: "playlistDelay",
            TDEN: "encodingTime",
            TDOR: "originalReleaseTime",
            TDRC: "recordingTime",
            TDRL: "releaseTime",
            TDTG: "taggingTime",
            TSSE: "encodedWith",
            TSOA: "albumSortOrder",
            TSOP: "performerSortOrder",
            TSOT: "titleSortOrder",
            TXXX: "userText",
            USLT: "lyrics",
            APIC: "coverArt",
            UFID: "uniqueIdentifier",
            MCDI: "CDIdentifier",
            COMM: "comments",
            WCOM: "commercialInformation",
            WCOP: "copyrightInformation",
            WOAF: "officialAudioFileWebpage",
            WOAR: "officialArtistWebpage",
            WOAS: "officialAudioSourceWebpage",
            WORS: "officialInternetRadioStationHomepage",
            WPAY: "payment",
            WPUB: "officialPublisherWebpage",
            WXXX: "url",
            PRIV: "private",
            GEOB: "generalEncapsulatedObject",
            PCNT: "playCount",
            POPM: "rating",
            AENC: "audioEncryption",
            ETCO: "eventTimingCodes",
            MLLT: "MPEGLocationLookupTable",
            SYTC: "synchronisedTempoCodes",
            SYLT: "synchronisedLyrics",
            RVA2: "volumeAdjustment",
            EQU2: "equalization",
            RVRB: "reverb",
            RBUF: "recommendedBufferSize",
            LINK: "link",
            POSS: "positionSynchronisation",
            USER: "termsOfUse",
            OWNE: "ownership",
            COMR: "commercial",
            ENCR: "encryption",
            GRID: "groupIdentifier",
            SIGN: "signature",
            SEEK: "seek",
            ASPI: "audioSeekPointIndex",
            TDAT: "date",
            TIME: "time",
            TORY: "originalReleaseYear",
            TRDA: "recordingDates",
            TSIZ: "size",
            TYER: "year",
            IPLS: "involvedPeopleList",
            RVAD: "volumeAdjustment",
            EQUA: "equalization",
            TCMP: "compilation",
            TSO2: "albumArtistSortOrder",
            TSOC: "composerSortOrder"
        }
    }), e.ID3v22Stream = e.ID3v23Stream.extend({
        readHeader: function() {
            var t = this.stream.readString(3);
            return this.frameReplacements[t] && !this.frameTypes[t] && (this.frameTypes[t] = this.frameReplacements[t]), {
                identifier: this.replacements[t] || t,
                length: this.stream.readUInt24()
            }
        },
        replacements: {
            UFI: "UFID",
            TT1: "TIT1",
            TT2: "TIT2",
            TT3: "TIT3",
            TP1: "TPE1",
            TP2: "TPE2",
            TP3: "TPE3",
            TP4: "TPE4",
            TCM: "TCOM",
            TXT: "TEXT",
            TLA: "TLAN",
            TCO: "TCON",
            TAL: "TALB",
            TPA: "TPOS",
            TRK: "TRCK",
            TRC: "TSRC",
            TYE: "TYER",
            TDA: "TDAT",
            TIM: "TIME",
            TRD: "TRDA",
            TMT: "TMED",
            TFT: "TFLT",
            TBP: "TBPM",
            TCR: "TCOP",
            TPB: "TPUB",
            TEN: "TENC",
            TSS: "TSSE",
            TOF: "TOFN",
            TLE: "TLEN",
            TSI: "TSIZ",
            TDY: "TDLY",
            TKE: "TKEY",
            TOT: "TOAL",
            TOA: "TOPE",
            TOL: "TOLY",
            TOR: "TORY",
            TXX: "TXXX",
            WAF: "WOAF",
            WAR: "WOAR",
            WAS: "WOAS",
            WCM: "WCOM",
            WCP: "WCOP",
            WPB: "WPUB",
            WXX: "WXXX",
            IPL: "IPLS",
            MCI: "MCDI",
            ETC: "ETCO",
            MLL: "MLLT",
            STC: "SYTC",
            ULT: "USLT",
            SLT: "SYLT",
            COM: "COMM",
            RVA: "RVAD",
            EQU: "EQUA",
            REV: "RVRB",
            GEO: "GEOB",
            CNT: "PCNT",
            POP: "POPM",
            BUF: "RBUF",
            CRA: "AENC",
            LNK: "LINK",
            TST: "TSOT",
            TSP: "TSOP",
            TSA: "TSOA",
            TCP: "TCMP",
            TS2: "TSO2",
            TSC: "TSOC"
        },
        frameReplacements: {
            PIC: {
                encoding: 1,
                format: "int24",
                type: "int8",
                description: "string",
                data: "binary"
            },
            CRM: {
                owner: "latin1",
                description: "latin1",
                data: "binary"
            }
        }
    })
}, function(t, e, i) {
    function r(t) {
        this.stream = t, this.sync = !1, this.freerate = 0, this.this_frame = t.stream.offset, this.next_frame = t.stream.offset, this.main_data = new Uint8Array(a.BUFFER_MDLEN), this.md_len = 0;
        for (var e in t) "function" == typeof t[e] && (this[e] = t[e].bind(t))
    }
    var a = (i(4), i(5));
    r.prototype.getU8 = function(t) {
        var e = this.stream.stream;
        return e.peekUInt8(t - e.offset)
    }, r.prototype.nextByte = function() {
        var t = this.stream;
        return 0 === t.bitPosition ? t.stream.offset : t.stream.offset + 1
    }, r.prototype.doSync = function() {
        var t = this.stream.stream;
        for (this.align(); this.available(16) && (255 !== t.peekUInt8(0) || 224 != (224 & t.peekUInt8(1)));) this.advance(8);
        return !!this.available(a.BUFFER_GUARD)
    }, r.prototype.reset = function(t) {
        this.seek(8 * t), this.next_frame = t, this.sync = !0
    }, t.exports = r
}, function(t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADABAMAAACg8nE0AAAAIVBMVEXk5Oz////39/np6e/8/P3y8vb5+fvs7PLv7/P09Pfv7/QcGsYbAAACYUlEQVR42uzXy07CQBQG4CMDgq48tFzcUUJi4qomCluK8bKk0RiXNupexAeoie71DYxP6qYhdjiF6ZxDYuJ8S0I6zMw//xRwHMdxHMdxHMdxHOefGr33HyL/vH87h004GeDC5AqkNQaYM0lB1DMuOQBB10g4E33+Rkf4xAL7IOINC12CgCGucA9sNVxpCkwqwZXaIfC84BoXggtEmwomVD6rFTTQA3sBGmgKToDWE5qA/BR20NAH2InRUAus1NHYE9g4RmOnYCNBY22BlpDviyMswWOvkPwaNbCUFMqqYiljblHLlzaWJBhS2lRkCx7noRrdIGVPoOiaaRawQKDwIuL5IWQUMYLPalL9DUgl3EatrNnFGvfi3EJdB3JmzF1+RY0fQo6KUNPlXffe2rJtMkJEbWGdFSNlkPIYNSGnKO5gyTanLCoGv05xclot2sDvyD8sCsKYcR97v9e9VfglczN69sPsnx+9jh3GOUtzh8sPyVu7yyjrLDdaphiFHZAvJbH2qMT+KAfkb9NnFNsPkFDbt4sLX1QU2vZV5Omp6VE59RkD6KdvzB2AvEu2iA9y/tIAP+2ayRGAQAzDWqP/qmiAIzY8lBmpBI7dxFb3iEgvuftMST9ad1SQDrvuuCZdON2VSbr0u7GFNHh1oyNp+K3Gd9YC0qxQrCWwWWNZi/jnKOH/MOSgxTlxIMWL1NJQkBdrhsEsMVrOwnFivB8VFMyKJSiJqDXXuKjjVo3DspRc944Ka3blPpAG6NrDq7jBV0+e5Zkd+s+9wLRHwbqWyHZpcDci3y4VUURERERERET4nB1VQ2hjZTqmAAAAAElFTkSuQmCC"
}, function(t, e, i) {
    "use strict";
    var r = {};
    r.title = function(t) {
        t = t ? t + " - Home" : "songs", window.document.title = t
    }
}, function(t, e) {}, function(t, e) {}, function(t, e, i) {
    i(91);
    var r = i(2)(i(73), i(123), "data-v-5b639314", null);
    r.options.__file = "/Users/guozongwei/project/starmaker-backend/h5/projects/upload/src/app.vue", r.esModule && Object.keys(r.esModule).some(function(t) {
        return "default" !== t && "__esModule" !== t
    }) && console.error("named exports are not supported in *.vue files."), r.options.functional && console.error("[vue-loader] app.vue: functional components are not supported with templates, they should use render functions."), t.exports = r.exports
}, , function(t, e, i) {
    (function() {
        var t, r, a;
        r = i(44);
        for (t in r) a = r[t], e[t] = a;
        i(49), i(24), i(47), i(50), i(48), i(45), i(46)
    }).call(this)
}, function(t, e, i) {
    (function() {
        e.Base = i(22), e.Buffer = i(6), e.BufferList = i(8), e.Stream = i(16), e.Bitstream = i(23), e.EventEmitter = i(0), e.UnderflowError = i(17), e.HTTPSource = i(34), e.FileSource = i(33), e.BufferSource = i(27), e.Demuxer = i(3), e.Decoder = i(10), e.AudioDevice = i(11), e.Asset = i(21), e.Player = i(54), e.Filter = i(18), e.VolumeFilter = i(26), e.BalanceFilter = i(25)
    }).call(this)
}, function(t, e, i) {
    (function() {
        var t, e = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            r = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var r in e) a.call(e, r) && (t[r] = e[r]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            },
            a = {}.hasOwnProperty;
        t = i(10),
            function(i) {
                function a() {
                    return this.readChunk = e(this.readChunk, this), a.__super__.constructor.apply(this, arguments)
                }
                r(a, i), t.register("lpcm", a), a.prototype.readChunk = function() {
                    var t, e, i, r, a, s, n, o, l, u, h, c, f, d, p, m, v, g;
                    if (g = this.stream, s = this.format.littleEndian, t = Math.min(4096, g.remainingBytes()), v = t / (this.format.bitsPerChannel / 8) | 0, t < this.format.bitsPerChannel / 8) return null;
                    if (this.format.floatingPoint) switch (this.format.bitsPerChannel) {
                        case 32:
                            for (u = new Float32Array(v), e = i = 0, h = v; i < h; e = i += 1) u[e] = g.readFloat32(s);
                            break;
                        case 64:
                            for (u = new Float64Array(v), e = r = 0, c = v; r < c; e = r += 1) u[e] = g.readFloat64(s);
                            break;
                        default:
                            throw new Error("Unsupported bit depth.")
                    } else switch (this.format.bitsPerChannel) {
                        case 8:
                            for (u = new Int8Array(v), e = a = 0, f = v; a < f; e = a += 1) u[e] = g.readInt8();
                            break;
                        case 16:
                            for (u = new Int16Array(v), e = n = 0, d = v; n < d; e = n += 1) u[e] = g.readInt16(s);
                            break;
                        case 24:
                            for (u = new Int32Array(v), e = o = 0, p = v; o < p; e = o += 1) u[e] = g.readInt24(s);
                            break;
                        case 32:
                            for (u = new Int32Array(v), e = l = 0, m = v; l < m; e = l += 1) u[e] = g.readInt32(s);
                            break;
                        default:
                            throw new Error("Unsupported bit depth.")
                    }
                    return u
                }
            }(t)
    }).call(this)
}, function(t, e, i) {
    (function() {
        var t, e = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            r = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var r in e) a.call(e, r) && (t[r] = e[r]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            },
            a = {}.hasOwnProperty;
        t = i(10),
            function(i) {
                function a() {
                    return this.readChunk = e(this.readChunk, this), a.__super__.constructor.apply(this, arguments)
                }
                var s, n, o, l, u;
                r(a, i), t.register("ulaw", a), t.register("alaw", a), u = 128, n = 15, l = 4, o = 112, s = 132, a.prototype.init = function() {
                    var t, e, i, r, a, h, c;
                    if (this.format.bitsPerChannel = 16, this.table = h = new Int16Array(256), "ulaw" === this.format.formatID)
                        for (t = e = 0; e < 256; t = ++e) c = ~t, a = ((c & n) << 3) + s, a <<= (c & o) >>> l, h[t] = c & u ? s - a : a - s;
                    else
                        for (t = i = 0; i < 256; t = ++i) c = 85 ^ t, a = c & n, r = (c & o) >>> l, a = r ? a + a + 1 + 32 << r + 2 : a + a + 1 << 3, h[t] = c & u ? a : -a
                }, a.prototype.readChunk = function() {
                    var t, e, i, r, a, s, n;
                    if (s = this.stream, n = this.table, 0 !== (a = Math.min(4096, this.stream.remainingBytes()))) {
                        for (i = new Int16Array(a), t = e = 0, r = a; e < r; t = e += 1) i[t] = n[s.readUInt8()];
                        return i
                    }
                }
            }(t)
    }).call(this)
}, function(t, e, i) {
    (function() {
        var t, e = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var a in e) r.call(e, a) && (t[a] = e[a]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            },
            r = {}.hasOwnProperty;
        t = i(3),
            function(i) {
                function r() {
                    return r.__super__.constructor.apply(this, arguments)
                }
                e(r, i), t.register(r), r.probe = function(t) {
                    var e;
                    return "FORM" === t.peekString(0, 4) && ("AIFF" === (e = t.peekString(8, 4)) || "AIFC" === e)
                }, r.prototype.readChunk = function() {
                    var t, e, i, r;
                    if (!this.readStart && this.stream.available(12)) {
                        if ("FORM" !== this.stream.readString(4)) return this.emit("error", "Invalid AIFF.");
                        if (this.fileSize = this.stream.readUInt32(), this.fileType = this.stream.readString(4), this.readStart = !0, "AIFF" !== (r = this.fileType) && "AIFC" !== r) return this.emit("error", "Invalid AIFF.")
                    }
                    for (; this.stream.available(1);) {
                        switch (!this.readHeaders && this.stream.available(8) && (this.type = this.stream.readString(4), this.len = this.stream.readUInt32()), this.type) {
                            case "COMM":
                                if (!this.stream.available(this.len)) return;
                                this.format = {
                                    formatID: "lpcm",
                                    channelsPerFrame: this.stream.readUInt16(),
                                    sampleCount: this.stream.readUInt32(),
                                    bitsPerChannel: this.stream.readUInt16(),
                                    sampleRate: this.stream.readFloat80(),
                                    framesPerPacket: 1,
                                    littleEndian: !1,
                                    floatingPoint: !1
                                }, this.format.bytesPerPacket = this.format.bitsPerChannel / 8 * this.format.channelsPerFrame, "AIFC" === this.fileType && (e = this.stream.readString(4), this.format.littleEndian = "sowt" === e && this.format.bitsPerChannel > 8, this.format.floatingPoint = "fl32" === e || "fl64" === e, "twos" !== e && "sowt" !== e && "fl32" !== e && "fl64" !== e && "NONE" !== e || (e = "lpcm"), this.format.formatID = e, this.len -= 4), this.stream.advance(this.len - 18), this.emit("format", this.format), this.emit("duration", this.format.sampleCount / this.format.sampleRate * 1e3 | 0);
                                break;
                            case "SSND":
                                this.readSSNDHeader && this.stream.available(4) || (i = this.stream.readUInt32(), this.stream.advance(4), this.stream.advance(i), this.readSSNDHeader = !0), t = this.stream.readSingleBuffer(this.len), this.len -= t.length, this.readHeaders = this.len > 0, this.emit("data", t);
                                break;
                            default:
                                if (!this.stream.available(this.len)) return;
                                this.stream.advance(this.len)
                        }
                        "SSND" !== this.type && (this.readHeaders = !1)
                    }
                }
            }(t)
    }).call(this)
}, function(t, e, i) {
    (function() {
        var t, e = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var a in e) r.call(e, a) && (t[a] = e[a]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            },
            r = {}.hasOwnProperty;
        t = i(3),
            function(i) {
                function r() {
                    return r.__super__.constructor.apply(this, arguments)
                }
                var a, s;
                e(r, i), t.register(r), r.probe = function(t) {
                    return ".snd" === t.peekString(0, 4)
                }, a = [8, 8, 16, 24, 32, 32, 64], a[26] = 8, s = {
                    1: "ulaw",
                    27: "alaw"
                }, r.prototype.readChunk = function() {
                    var t, e, i;
                    if (!this.readHeader && this.stream.available(24)) {
                        if (".snd" !== this.stream.readString(4)) return this.emit("error", "Invalid AU file.");
                        if (this.stream.readUInt32(), e = this.stream.readUInt32(), i = this.stream.readUInt32(), this.format = {
                                formatID: s[i] || "lpcm",
                                littleEndian: !1,
                                floatingPoint: 6 === i || 7 === i,
                                bitsPerChannel: a[i - 1],
                                sampleRate: this.stream.readUInt32(),
                                channelsPerFrame: this.stream.readUInt32(),
                                framesPerPacket: 1
                            }, null == this.format.bitsPerChannel) return this.emit("error", "Unsupported encoding in AU file.");
                        this.format.bytesPerPacket = this.format.bitsPerChannel / 8 * this.format.channelsPerFrame, 4294967295 !== e && (t = this.format.bitsPerChannel / 8, this.emit("duration", e / t / this.format.channelsPerFrame / this.format.sampleRate * 1e3 | 0)), this.emit("format", this.format), this.readHeader = !0
                    }
                    if (this.readHeader)
                        for (; this.stream.available(1);) this.emit("data", this.stream.readSingleBuffer(this.stream.remainingBytes()))
                }
            }(t)
    }).call(this)
}, function(t, e, i) {
    (function() {
        var t, e, r = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var r in e) a.call(e, r) && (t[r] = e[r]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            },
            a = {}.hasOwnProperty;
        t = i(3), e = i(24),
            function(i) {
                function a() {
                    return a.__super__.constructor.apply(this, arguments)
                }
                r(a, i), t.register(a), a.probe = function(t) {
                    return "caff" === t.peekString(0, 4)
                }, a.prototype.readChunk = function() {
                    var t, i, r, a, s, n, o, l, u, h, c, f, d, p;
                    if (!this.format && this.stream.available(64)) {
                        if ("caff" !== this.stream.readString(4)) return this.emit("error", "Invalid CAF, does not begin with 'caff'");
                        if (this.stream.advance(4), "desc" !== this.stream.readString(4)) return this.emit("error", "Invalid CAF, 'caff' is not followed by 'desc'");
                        if (0 !== this.stream.readUInt32() || 32 !== this.stream.readUInt32()) return this.emit("error", "Invalid 'desc' size, should be 32");
                        this.format = {}, this.format.sampleRate = this.stream.readFloat64(), this.format.formatID = this.stream.readString(4), s = this.stream.readUInt32(), "lpcm" === this.format.formatID && (this.format.floatingPoint = Boolean(1 & s), this.format.littleEndian = Boolean(2 & s)), this.format.bytesPerPacket = this.stream.readUInt32(), this.format.framesPerPacket = this.stream.readUInt32(), this.format.channelsPerFrame = this.stream.readUInt32(), this.format.bitsPerChannel = this.stream.readUInt32(), this.emit("format", this.format)
                    }
                    for (; this.stream.available(1);) {
                        if (!this.headerCache && (this.headerCache = {
                                type: this.stream.readString(4),
                                oversize: 0 !== this.stream.readUInt32(),
                                size: this.stream.readUInt32()
                            }, this.headerCache.oversize)) return this.emit("error", "Holy Shit, an oversized file, not supported in JS");
                        switch (this.headerCache.type) {
                            case "kuki":
                                this.stream.available(this.headerCache.size) && ("aac " === this.format.formatID ? (h = this.stream.offset + this.headerCache.size, (r = e.readEsds(this.stream)) && this.emit("cookie", r), this.stream.seek(h)) : (t = this.stream.readBuffer(this.headerCache.size), this.emit("cookie", t)), this.headerCache = null);
                                break;
                            case "pakt":
                                if (this.stream.available(this.headerCache.size)) {
                                    if (0 !== this.stream.readUInt32()) return this.emit("error", "Sizes greater than 32 bits are not supported.");
                                    if (this.numPackets = this.stream.readUInt32(), 0 !== this.stream.readUInt32()) return this.emit("error", "Sizes greater than 32 bits are not supported.");
                                    for (this.numFrames = this.stream.readUInt32(), this.primingFrames = this.stream.readUInt32(), this.remainderFrames = this.stream.readUInt32(), this.emit("duration", this.numFrames / this.format.sampleRate * 1e3 | 0), this.sentDuration = !0, i = 0, d = 0, n = 0, c = this.numPackets; n < c; n += 1) this.addSeekPoint(i, d), i += this.format.bytesPerPacket || e.readDescrLen(this.stream), d += this.format.framesPerPacket || e.readDescrLen(this.stream);
                                    this.headerCache = null
                                }
                                break;
                            case "info":
                                for (a = this.stream.readUInt32(), u = {}, o = 0, f = a; 0 <= f ? o < f : o > f; 0 <= f ? ++o : --o) l = this.stream.readString(null), p = this.stream.readString(null), u[l] = p;
                                this.emit("metadata", u), this.headerCache = null;
                                break;
                            case "data":
                                this.sentFirstDataChunk || (this.stream.advance(4), this.headerCache.size -= 4, 0 === this.format.bytesPerPacket || this.sentDuration || (this.numFrames = this.headerCache.size / this.format.bytesPerPacket, this.emit("duration", this.numFrames / this.format.sampleRate * 1e3 | 0)), this.sentFirstDataChunk = !0), t = this.stream.readSingleBuffer(this.headerCache.size), this.headerCache.size -= t.length, this.emit("data", t), this.headerCache.size <= 0 && (this.headerCache = null);
                                break;
                            default:
                                this.stream.available(this.headerCache.size) && (this.stream.advance(this.headerCache.size), this.headerCache = null)
                        }
                    }
                }
            }(t)
    }).call(this)
}, function(t, e, i) {
    (function() {
        var t, e = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var a in e) r.call(e, a) && (t[a] = e[a]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            },
            r = {}.hasOwnProperty;
        t = i(3),
            function(i) {
                function r() {
                    return r.__super__.constructor.apply(this, arguments)
                }
                var a;
                e(r, i), t.register(r), r.probe = function(t) {
                    return "RIFF" === t.peekString(0, 4) && "WAVE" === t.peekString(8, 4)
                }, a = {
                    1: "lpcm",
                    3: "lpcm",
                    6: "alaw",
                    7: "ulaw"
                }, r.prototype.readChunk = function() {
                    var t, e, i;
                    if (!this.readStart && this.stream.available(12)) {
                        if ("RIFF" !== this.stream.readString(4)) return this.emit("error", "Invalid WAV file.");
                        if (this.fileSize = this.stream.readUInt32(!0), this.readStart = !0, "WAVE" !== this.stream.readString(4)) return this.emit("error", "Invalid WAV file.")
                    }
                    for (; this.stream.available(1);) {
                        switch (!this.readHeaders && this.stream.available(8) && (this.type = this.stream.readString(4), this.len = this.stream.readUInt32(!0)), this.type) {
                            case "fmt ":
                                if (!((i = this.stream.readUInt16(!0)) in a)) return this.emit("error", "Unsupported format in WAV file.");
                                this.format = {
                                    formatID: a[i],
                                    floatingPoint: 3 === i,
                                    littleEndian: "lpcm" === a[i],
                                    channelsPerFrame: this.stream.readUInt16(!0),
                                    sampleRate: this.stream.readUInt32(!0),
                                    framesPerPacket: 1
                                }, this.stream.advance(4), this.stream.advance(2), this.format.bitsPerChannel = this.stream.readUInt16(!0), this.format.bytesPerPacket = this.format.bitsPerChannel / 8 * this.format.channelsPerFrame, this.emit("format", this.format), this.stream.advance(this.len - 16);
                                break;
                            case "data":
                                this.sentDuration || (e = this.format.bitsPerChannel / 8, this.emit("duration", this.len / e / this.format.channelsPerFrame / this.format.sampleRate * 1e3 | 0), this.sentDuration = !0), t = this.stream.readSingleBuffer(this.len), this.len -= t.length, this.readHeaders = this.len > 0, this.emit("data", t);
                                break;
                            default:
                                if (!this.stream.available(this.len)) return;
                                this.stream.advance(this.len)
                        }
                        "data" !== this.type && (this.readHeaders = !1)
                    }
                }
            }(t)
    }).call(this)
}, function(t, e, i) {
    (function() {
        var t, e, r, a = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            s = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var r in e) n.call(e, r) && (t[r] = e[r]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            },
            n = {}.hasOwnProperty;
        r = i(0), e = i(11), t = i(6),
            function(i) {
                function r(t, e) {
                    this.sampleRate = t, this.channels = e, this.refill = a(this.refill, this), this.audio = new Audio, this.audio.mozSetup(this.channels, this.sampleRate), this.writePosition = 0, this.prebufferSize = this.sampleRate / 2, this.tail = null, this.timer = n(this.refill, 100)
                }
                var n, o;
                s(r, i), e.register(r), r.supported = "undefined" != typeof Audio && null !== Audio && "mozWriteAudio" in new Audio, r.prototype.refill = function() {
                    var t, e, i, r;
                    this.tail && (r = this.audio.mozWriteAudio(this.tail), this.writePosition += r, this.writePosition < this.tail.length ? this.tail = this.tail.subarray(r) : this.tail = null), i = this.audio.mozCurrentSampleOffset(), (t = i + this.prebufferSize - this.writePosition) > 0 && (e = new Float32Array(t), this.emit("refill", e), r = this.audio.mozWriteAudio(e), r < e.length && (this.tail = e.subarray(r)), this.writePosition += r)
                }, r.prototype.destroy = function() {
                    return o(this.timer)
                }, r.prototype.getDeviceTime = function() {
                    return this.audio.mozCurrentSampleOffset() / this.channels
                }, n = function(e, i) {
                    var r, a;
                    return null == (r = t.makeBlobURL("setInterval(function() { postMessage('ping'); }, " + i + ");")) ? setInterval(e, i) : (a = new Worker(r), a.onmessage = e, a.url = r, a)
                }, o = function(t) {
                    return t.terminate ? (t.terminate(), URL.revokeObjectURL(t.url)) : clearInterval(t)
                }
            }(r)
    }).call(this)
}, function(t, e) {
    function i(t, e, i, r) {
        this.fromSampleRate = +t, this.toSampleRate = +e, this.channels = 0 | i, this.inputBufferLength = r, this.initialize()
    }
    i.prototype.initialize = function() {
        if (!(this.fromSampleRate > 0 && this.toSampleRate > 0 && this.channels > 0)) throw new Error("Invalid settings specified for the resampler.");
        if (this.fromSampleRate == this.toSampleRate) this.resampler = this.bypassResampler, this.ratioWeight = 1;
        else {
            this.ratioWeight = this.fromSampleRate / this.toSampleRate, this.fromSampleRate < this.toSampleRate ? (this.compileLinearInterpolationFunction(), this.lastWeight = 1) : (this.compileMultiTapFunction(), this.tailExists = !1, this.lastWeight = 0);
            var t = Math.ceil(this.inputBufferLength * this.toSampleRate / this.fromSampleRate / this.channels * 1.01) * this.channels + this.channels;
            this.outputBuffer = new Float32Array(t), this.lastOutput = new Float32Array(this.channels)
        }
    }, i.prototype.compileLinearInterpolationFunction = function() {
        for (var t = "var outputOffset = 0;    var bufferLength = buffer.length;    if (bufferLength > 0) {      var weight = this.lastWeight;      var firstWeight = 0;      var secondWeight = 0;      var sourceOffset = 0;      var outputOffset = 0;      var outputBuffer = this.outputBuffer;      for (; weight < 1; weight += " + this.ratioWeight + ") {        secondWeight = weight % 1;        firstWeight = 1 - secondWeight;", e = 0; e < this.channels; ++e) t += "outputBuffer[outputOffset++] = (this.lastOutput[" + e + "] * firstWeight) + (buffer[" + e + "] * secondWeight);";
        t += "}      weight -= 1;      for (bufferLength -= " + this.channels + ", sourceOffset = Math.floor(weight) * " + this.channels + "; sourceOffset < bufferLength;) {        secondWeight = weight % 1;        firstWeight = 1 - secondWeight;";
        for (var e = 0; e < this.channels; ++e) t += "outputBuffer[outputOffset++] = (buffer[sourceOffset" + (e > 0 ? " + " + e : "") + "] * firstWeight) + (buffer[sourceOffset + " + (this.channels + e) + "] * secondWeight);";
        t += "weight += " + this.ratioWeight + ";        sourceOffset = Math.floor(weight) * " + this.channels + ";      }";
        for (var e = 0; e < this.channels; ++e) t += "this.lastOutput[" + e + "] = buffer[sourceOffset++];";
        t += "this.lastWeight = weight % 1;    }    return this.outputBuffer;", this.resampler = Function("buffer", t)
    }, i.prototype.compileMultiTapFunction = function() {
        for (var t = "var outputOffset = 0;    var bufferLength = buffer.length;    if (bufferLength > 0) {      var weight = 0;", e = 0; e < this.channels; ++e) t += "var output" + e + " = 0;";
        for (t += "var actualPosition = 0;      var amountToNext = 0;      var alreadyProcessedTail = !this.tailExists;      this.tailExists = false;      var outputBuffer = this.outputBuffer;      var currentPosition = 0;      do {        if (alreadyProcessedTail) {          weight = " + this.ratioWeight + ";", e = 0; e < this.channels; ++e) t += "output" + e + " = 0;";
        for (t += "}        else {          weight = this.lastWeight;", e = 0; e < this.channels; ++e) t += "output" + e + " = this.lastOutput[" + e + "];";
        for (t += "alreadyProcessedTail = true;        }        while (weight > 0 && actualPosition < bufferLength) {          amountToNext = 1 + actualPosition - currentPosition;          if (weight >= amountToNext) {", e = 0; e < this.channels; ++e) t += "output" + e + " += buffer[actualPosition++] * amountToNext;";
        for (t += "currentPosition = actualPosition;            weight -= amountToNext;          }          else {", e = 0; e < this.channels; ++e) t += "output" + e + " += buffer[actualPosition" + (e > 0 ? " + " + e : "") + "] * weight;";
        for (t += "currentPosition += weight;            weight = 0;            break;          }        }        if (weight <= 0) {", e = 0; e < this.channels; ++e) t += "outputBuffer[outputOffset++] = output" + e + " / " + this.ratioWeight + ";";
        for (t += "}        else {          this.lastWeight = weight;", e = 0; e < this.channels; ++e) t += "this.lastOutput[" + e + "] = output" + e + ";";
        t += "this.tailExists = true;          break;        }      } while (actualPosition < bufferLength);    }    return this.outputBuffer;", this.resampler = Function("buffer", t)
    }, i.prototype.bypassResampler = function(t) {
        return t
    }, t.exports = i
}, function(t, e, i) {
    (function(t) {
        (function() {
            var e, r, a, s = function(t, e) {
                    return function() {
                        return t.apply(e, arguments)
                    }
                },
                n = function(t, e) {
                    function i() {
                        this.constructor = t
                    }
                    for (var r in e) o.call(e, r) && (t[r] = e[r]);
                    return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
                },
                o = {}.hasOwnProperty;
            r = i(0), e = i(11), a = i(52),
                function(i) {
                    function r(t, e) {
                        this.sampleRate = t, this.channels = e, this.refill = s(this.refill, this), this.context = null != u ? u : u = new o, this.deviceSampleRate = this.context.sampleRate, this.bufferSize = Math.ceil(4096 / (this.deviceSampleRate / this.sampleRate) * this.channels), this.bufferSize += this.bufferSize % this.channels, this.deviceSampleRate !== this.sampleRate && (this.resampler = new a(this.sampleRate, this.deviceSampleRate, this.channels, this.bufferSize)), this.node = this.context[l](4096, this.channels, this.channels), this.node.onaudioprocess = this.refill, this.node.connect(this.context.destination)
                    }
                    var o, l, u;
                    n(r, i), e.register(r), o = t.AudioContext || t.webkitAudioContext, r.supported = o && ("function" == typeof o.prototype[l = "createScriptProcessor"] || "function" == typeof o.prototype[l = "createJavaScriptNode"]), u = null, r.prototype.refill = function(t) {
                        var e, i, r, a, s, n, o, l, u, h, c, f;
                        for (u = t.outputBuffer, e = u.numberOfChannels, i = new Array(e), a = s = 0, h = e; s < h; a = s += 1) i[a] = u.getChannelData(a);
                        for (r = new Float32Array(this.bufferSize), this.emit("refill", r), this.resampler && (r = this.resampler.resampler(r)), a = n = 0, c = u.length; n < c; a = n += 1)
                            for (l = o = 0, f = e; o < f; l = o += 1) i[l][a] = r[a * e + l]
                    }, r.prototype.destroy = function() {
                        return this.node.disconnect(0)
                    }, r.prototype.getDeviceTime = function() {
                        return this.context.currentTime * this.sampleRate
                    }
                }(r)
        }).call(this)
    }).call(e, i(13))
}, function(t, e, i) {
    (function() {
        var e, r, a, s, n, o, l, u = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            h = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var r in e) c.call(e, r) && (t[r] = e[r]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            },
            c = {}.hasOwnProperty;
        s = i(0), e = i(21), l = i(26), a = i(25), o = i(55), r = i(11), n = function(t) {
            function i(t) {
                this.asset = t, this.startPlaying = u(this.startPlaying, this), this.playing = !1, this.buffered = 0, this.currentTime = 0, this.duration = 0, this.volume = 100, this.pan = 0, this.metadata = {}, this.filters = [new l(this, "volume"), new a(this, "pan")], this.asset.on("buffer", function(t) {
                    return function(e) {
                        return t.buffered = e, t.emit("buffer", t.buffered)
                    }
                }(this)), this.asset.on("decodeStart", function(t) {
                    return function() {
                        return t.queue = new o(t.asset), t.queue.once("ready", t.startPlaying)
                    }
                }(this)), this.asset.on("format", function(t) {
                    return function(e) {
                        return t.format = e, t.emit("format", t.format)
                    }
                }(this)), this.asset.on("metadata", function(t) {
                    return function(e) {
                        return t.metadata = e, t.emit("metadata", t.metadata)
                    }
                }(this)), this.asset.on("duration", function(t) {
                    return function(e) {
                        return t.duration = e, t.emit("duration", t.duration)
                    }
                }(this)), this.asset.on("error", function(t) {
                    return function(e) {
                        return t.emit("error", e)
                    }
                }(this))
            }
            return h(i, t), i.fromURL = function(t, r) {
                return new i(e.fromURL(t, r))
            }, i.fromFile = function(t) {
                return new i(e.fromFile(t))
            }, i.fromBuffer = function(t) {
                return new i(e.fromBuffer(t))
            }, i.prototype.preload = function() {
                if (this.asset) return this.startedPreloading = !0, this.asset.start(!1)
            }, i.prototype.play = function() {
                var t;
                if (!this.playing) return this.startedPreloading || this.preload(), this.playing = !0, null != (t = this.device) ? t.start() : void 0
            }, i.prototype.pause = function() {
                var t;
                if (this.playing) return this.playing = !1, null != (t = this.device) ? t.stop() : void 0
            }, i.prototype.togglePlayback = function() {
                return this.playing ? this.pause() : this.play()
            }, i.prototype.stop = function() {
                var t;
                return this.pause(), this.asset.stop(), null != (t = this.device) ? t.destroy() : void 0
            }, i.prototype.seek = function(t) {
                var e;
                return null != (e = this.device) && e.stop(), this.queue.once("ready", function(t) {
                    return function() {
                        var e, i;
                        if (null != (e = t.device) && e.seek(t.currentTime), t.playing) return null != (i = t.device) ? i.start() : void 0
                    }
                }(this)), t = t / 1e3 * this.format.sampleRate, t = this.asset.decoder.seek(t), this.currentTime = t / this.format.sampleRate * 1e3 | 0, this.queue.reset(), this.currentTime
            }, i.prototype.startPlaying = function() {
                var t, e;
                return t = this.queue.read(), e = 0, this.device = new r(this.format.sampleRate, this.format.channelsPerFrame), this.device.on("timeUpdate", function(t) {
                    return function(e) {
                        return t.currentTime = e, t.emit("progress", t.currentTime)
                    }
                }(this)), this.refill = function(i) {
                    return function(r) {
                        var a, s, n, o, l, u, h, c;
                        if (i.playing) {
                            for (t || (t = i.queue.read(), e = 0), a = 0; t && a < r.length;) {
                                for (u = Math.min(t.length - e, r.length - a), n = 0, h = u; n < h; n += 1) r[a++] = t[e++];
                                e === t.length && (t = i.queue.read(), e = 0)
                            }
                            for (c = i.filters, o = 0, l = c.length; o < l; o++) s = c[o], s.process(r);
                            t || (i.queue.ended ? (i.currentTime = i.duration, i.emit("progress", i.currentTime), i.emit("end"), i.stop()) : i.device.stop())
                        }
                    }
                }(this), this.device.on("refill", this.refill), this.playing && this.device.start(), this.emit("ready")
            }, i.prototype.destroy = function() {
                var t, e;
                return this.stop(), null != (t = this.device) && t.off(), null != (e = this.asset) && e.destroy(), this.off()
            }, i
        }(s), t.exports = n
    }).call(this)
}, function(t, e, i) {
    (function() {
        var e, r, a = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            s = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var r in e) n.call(e, r) && (t[r] = e[r]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            },
            n = {}.hasOwnProperty;
        e = i(0), r = function(t) {
            function e(t) {
                this.asset = t, this.write = a(this.write, this), this.readyMark = 64, this.finished = !1, this.buffering = !0, this.ended = !1, this.buffers = [], this.asset.on("data", this.write), this.asset.on("end", function(t) {
                    return function() {
                        return t.ended = !0
                    }
                }(this)), this.asset.decodePacket()
            }
            return s(e, t), e.prototype.write = function(t) {
                if (t && this.buffers.push(t), this.buffering) return this.buffers.length >= this.readyMark || this.ended ? (this.buffering = !1, this.emit("ready")) : this.asset.decodePacket()
            }, e.prototype.read = function() {
                return 0 === this.buffers.length ? null : (this.asset.decodePacket(), this.buffers.shift())
            }, e.prototype.reset = function() {
                return this.buffers.length = 0, this.buffering = !0, this.asset.decodePacket()
            }, e
        }(e), t.exports = r
    }).call(this)
}, , , , , , , , , , , , , , , , , , function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(111),
        a = i.n(r),
        s = i(110),
        n = i.n(s);
    e.default = {
        data: function() {
            return {}
        },
        mounted: function() {},
        beforeDestroy: function() {},
        methods: {},
        components: {
            navs: a.a,
            index: n.a
        }
    }
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = {
        props: ["audio", "currentStep"],
        data: function() {
            return {
                nextOK: this.currentStep.nextOK,
                on: this.audio.active,
                voiceType: "volume-low",
                editIndex: -1,
                hoverIndex: -1,
                lyrics: this.audio.lyrics,
                all: this.audio.all
            }
        },
        computed: {
            now: function() {
                return this.audio.now
            }
        },
        mounted: function() {
            document.body.scrollTop = 0;
            var t = this;
            document.onkeydown = function(e) {
                switch (e.keyCode) {
                    case 32:
                        e.preventDefault(), t.clickSpace();
                        break;
                    case 37:
                        e.preventDefault(), t.toLeft();
                        break;
                    case 39:
                        e.preventDefault(), t.toRight()
                }
            }
        },
        methods: {
            contentClass: function(t) {
                return t === this.on ? "lyrics-on" : t === this.hoverIndex ? "lyrics-hover" : "lyrics"
            },
            mouseover: function(t, e) {
                "editor" === (e.fromElement || e.relatedTarget).className && (this.hoverIndex = t)
            },
            mouseout: function(t, e) {
                "editor" === (e.toElement || e.relatedTarget).className && (this.hoverIndex = -1)
            },
            handlePlay: function(t) {
                this.$emit("handlePlay", t)
            },
            edit: function(t) {
                this.editIndex = t, this.handlePlay(!1)
            },
            sure: function(t) {
                this.editIndex = -1, this.handlePlay(!0)
            },
            toLeft: function() {
                var t = this.now - 3;
                t < 0 || this.$emit("changeTime", t)
            },
            toRight: function() {
                var t = this.now + 3;
                t > this.all || this.$emit("changeTime", t)
            },
            clickSpace: function() {
                if (this.on !== this.lyrics.length + 1) {
                    if (-1 !== this.editIndex) return void this.$Notice.warning({
                        title: "Editing lyrics"
                    });
                    if (this.on > 0 && !this.all) return void this.$Notice.warning({
                        title: "Music has not yet played"
                    });
                    if (0 === this.on && this.handlePlay(!0), this.on++, this.$emit("handleData", "active", this.on), this.$refs.editor.scrollTop = 80 * (this.on - 1), 1 !== this.on && (this.lyrics[this.on - 2].startTime = this.now, 2 !== this.on)) return this.on < this.lyrics.length + 1 ? void(this.lyrics[this.on - 3].duration = this.lyrics[this.on - 2].startTime - this.lyrics[this.on - 3].startTime) : void(this.on === this.lyrics.length + 1 && (this.lyrics[this.on - 3].duration = this.lyrics[this.on - 2].startTime - this.lyrics[this.on - 3].startTime, this.lyrics[this.on - 2].duration = this.all - this.lyrics[this.on - 2].startTime, console.log(this.lyrics), this.$emit("handleData", "lyrics", this.lyrics), this.nextOK = !0, this.$emit("handleNextOK", !0), this.$emit("handleProcess", 2)))
                }
            },
            clickItem: function(t) {
                var e = this;
                if (-1 !== this.editIndex) return void this.$Notice.warning({
                    title: "Editing lyrics"
                });
                this.$Modal.confirm({
                    okText: "OK",
                    cancelText: "Cancel",
                    title: "Please confirm",
                    content: "<p>The timing for this line & below will be deleted.</p>",
                    onOk: function() {
                        e.on = t;
                        var i = e.lyrics[t - 1].startTime;
                        e.$emit("changeTime", i), e.$emit("handleData", "lyrics", e.lyrics), e.$emit("handleData", "active", e.on), e.nextOK = !1, e.$emit("handleNextOK", !1), e.$emit("handleProcess", 2)
                    },
                    onCancel: function() {}
                })
            },
            ftime: function(t, e) {
                e === this.on && (t = this.now);
                var i = void 0,
                    r = void 0;
                return i = Math.floor(t / 60), i = 1 == i.toString().length ? "0" + i : i, r = Math.floor(t - 60 * i), r = 1 == r.toString().length ? "0" + r : r, i + ":" + r
            },
            songItem: function(t) {
                return t === this.on && t !== this.editIndex ? "item-on" : t === this.on && t === this.editIndex ? "item-on-edit" : t === this.on - 1 ? "item-before" : "item"
            }
        },
        watch: {
            now: function(t) {
                return "volume-low" === this.voiceType ? void(this.voiceType = "volume-medium") : "volume-medium" === this.voiceType ? void(this.voiceType = "volume-high") : "volume-high" === this.voiceType ? void(this.voiceType = "volume-low") : void 0
            }
        },
        created: function() {
            this.$Message.config({
                top: 100,
                duration: 5
            }), this.$on("handleSubmit", function() {
                if (!this.nextOK) return void this.$Message.error("Not finished!");
                this.$emit("validateOK", !0), this.$Message.success("All validated!")
            })
        }
    }
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = {
        props: ["audio", "currentStep"],
        data: function() {
            return {
                nextOK: this.currentStep.nextOK,
                lyrics: this.audio.lyrics,
                lyric: "",
                lang: "",
                langSure: this.audio.lang,
                langList: [{
                    value: "unknow",
                    label: "Others"
                }, {
                    value: "zh",
                    label: "Chinese"
                }, {
                    value: "en",
                    label: "English"
                }, {
                    value: "fr",
                    label: "French"
                }, {
                    value: "de",
                    label: "German"
                }, {
                    value: "ja",
                    label: "Japanese"
                }, {
                    value: "ru",
                    label: "Russian"
                }, {
                    value: "da",
                    label: "Danish"
                }, {
                    value: "nl",
                    label: "Dutch"
                }, {
                    value: "fi",
                    label: "Finnish"
                }, {
                    value: "gr",
                    label: "Greek"
                }, {
                    value: "in",
                    label: "Hindi"
                }, {
                    value: "cf",
                    label: "Latin"
                }, {
                    value: "ko",
                    label: "Korean"
                }, {
                    value: "ms",
                    label: "Malay"
                }, {
                    value: "no",
                    label: "Norwegian"
                }, {
                    value: "pl",
                    label: "Polish"
                }, {
                    value: "sv",
                    label: "Swedish"
                }, {
                    value: "tr",
                    label: "Turkish"
                }, {
                    value: "ar",
                    label: "Arabic"
                }, {
                    value: "ie",
                    label: "Irish"
                }, {
                    value: "it",
                    label: "Italian"
                }, {
                    value: "vi",
                    label: "Vietnamese"
                }, {
                    value: "id",
                    label: "Bahasa Indonesia"
                }, {
                    value: "by",
                    label: "Belarusian"
                }, {
                    value: "es",
                    label: "Spanish"
                }, {
                    value: "fi",
                    label: "Persian"
                }, {
                    value: "pt",
                    label: "Portuguese"
                }, {
                    value: "th",
                    label: "Thai"
                }, {
                    value: "swa",
                    label: "Swahili"
                }, {
                    value: "sr",
                    label: "Serbian"
                }, {
                    value: "bd",
                    label: "Bengali"
                }, {
                    value: "wed",
                    label: "Urdu"
                }, {
                    value: "kz",
                    label: "Kazakh"
                }, {
                    value: "uz",
                    label: "Uzbek"
                }, {
                    value: "mn",
                    label: "Mongolian"
                }, {
                    value: "hr",
                    label: "Croatian"
                }, {
                    value: "cs",
                    label: "Czech"
                }, {
                    value: "he",
                    label: "Hebrew"
                }, {
                    value: "hu",
                    label: "Hungarian"
                }, {
                    value: "ro",
                    label: "Romanian"
                }, {
                    value: "zu",
                    label: "Zulu"
                }, {
                    value: "af",
                    label: "Afrikaans"
                }, {
                    value: "bg",
                    label: "Bulgarian"
                }, {
                    value: "ca",
                    label: "Catalan"
                }, {
                    value: "cy",
                    label: "Welsh"
                }, {
                    value: "et",
                    label: "Estonian"
                }, {
                    value: "gu",
                    label: "Gujarati"
                }, {
                    value: "kn",
                    label: "Kannada"
                }, {
                    value: "lt",
                    label: "Lithuanian"
                }, {
                    value: "lv",
                    label: "Latvian"
                }, {
                    value: "mk",
                    label: "Macedonian"
                }, {
                    value: "ml",
                    label: "Malayalam"
                }, {
                    value: "mr",
                    label: "Marathi"
                }, {
                    value: "ne",
                    label: "Nepali"
                }, {
                    value: "pa",
                    label: "Panjabi"
                }, {
                    value: "sk",
                    label: "Slovak"
                }, {
                    value: "sl",
                    label: "Slovenian"
                }, {
                    value: "so",
                    label: "Somali"
                }, {
                    value: "sq",
                    label: "Albanian"
                }, {
                    value: "ta",
                    label: "Tamil"
                }, {
                    value: "te",
                    label: "Telugu"
                }, {
                    value: "tl",
                    label: "Tagalog"
                }, {
                    value: "uk",
                    label: "Ukrainian"
                }, {
                    value: "zh-cn",
                    label: "中文"
                }, {
                    value: "zh-tw",
                    label: "Zulu"
                }, {
                    value: "ab",
                    label: "Abkhaz"
                }, {
                    value: "iu",
                    label: "Inuktitut"
                }, {
                    value: "am",
                    label: "Amharic"
                }, {
                    value: "jv",
                    label: "Javanese"
                }, {
                    value: "ay",
                    label: "Aymara"
                }, {
                    value: "ka",
                    label: "Georgian"
                }, {
                    value: "az",
                    label: "Azerbaijani"
                }, {
                    value: "km",
                    label: "Khmer"
                }, {
                    value: "be",
                    label: "Belarusan"
                }, {
                    value: "kr",
                    label: "Kanuri"
                }, {
                    value: "ku",
                    label: "Kurdish"
                }, {
                    value: "bi",
                    label: "Bislama"
                }, {
                    value: "lg",
                    label: "Ganda"
                }, {
                    value: "ln",
                    label: "Lingala"
                }, {
                    value: "bo",
                    label: "Tibetan"
                }, {
                    value: "lo",
                    label: "Lao"
                }, {
                    value: "br",
                    label: "Breton"
                }, {
                    value: "bs",
                    label: "Bosnian"
                }, {
                    value: "mh",
                    label: "Marshallese"
                }, {
                    value: "ch",
                    label: "Chamorro"
                }, {
                    value: "co",
                    label: "Corsican"
                }, {
                    value: "cr",
                    label: "Cree"
                }, {
                    value: "mt",
                    label: "Maltese"
                }, {
                    value: "dz",
                    label: "Dzongkha"
                }, {
                    value: "nv",
                    label: "Navajo"
                }, {
                    value: "eo",
                    label: "Esperanto"
                }, {
                    value: "sa",
                    label: "Sanskrit"
                }, {
                    value: "eu",
                    label: "Basque"
                }, {
                    value: "is",
                    label: "Icelandic"
                }, {
                    value: "fj",
                    label: "Fijian"
                }, {
                    value: "ss",
                    label: "Swati"
                }, {
                    value: "fo",
                    label: "Faroese"
                }, {
                    value: "fy",
                    label: "Frisian"
                }, {
                    value: "to",
                    label: "Tonga"
                }, {
                    value: "gd",
                    label: "Scottish"
                }, {
                    value: "gl",
                    label: "Galician"
                }, {
                    value: "tt",
                    label: "Tatar"
                }, {
                    value: "gn",
                    label: "Guarani"
                }, {
                    value: "ty",
                    label: "Tahitian"
                }, {
                    value: "ug",
                    label: "Uyghur"
                }, {
                    value: "ha",
                    label: "Hausa"
                }, {
                    value: "ve",
                    label: "Venda"
                }, {
                    value: "hy",
                    label: "Armenian"
                }, {
                    value: "wa",
                    label: "Walloon"
                }, {
                    value: "ia",
                    label: "Interlingua"
                }, {
                    value: "wo",
                    label: "Wolof"
                }, {
                    value: "xh",
                    label: "Xhosa"
                }, {
                    value: "ig",
                    label: "Igbo"
                }, {
                    value: "yo",
                    label: "Yoruba"
                }, {
                    value: "ng",
                    label: "Ndonga"
                }, {
                    value: "io",
                    label: "Ido"
                }],
                langChoose: !1
            }
        },
        computed: {
            lyricss: function() {
                var t = [];
                return this.lyric.split("\n").forEach(function(e) {
                    e && t.push({
                        startTime: 0,
                        duration: 0,
                        text: e.trim()
                    })
                }, this), t
            }
        },
        watch: {
            lyric: function(t, e) {
                if ("" !== this.lyric) {
                    /^[\w\s]+$/.test(this.lyric) && (this.lang = "en");
                    /[\u4E00-\u9FA5]+/.test(this.lyric) && (this.lang = "zh");
                    var i = this.audio.lyrics;
                    0 === this.audio.lyrics.length && (i = []), 0 !== this.audio.lyrics.length && "Intro" === this.audio.lyrics[0].text && i.shift();
                    return this.lyricss.map(function(t) {
                        return t.text
                    }).join() !== i.map(function(t) {
                        return t.text
                    }).join() && this.$emit("handleData", "lyrics", this.lyricss), void(this.langSure && (this.nextOK = !0, this.$emit("handleNextOK", !0), this.$emit("handleProcess", 2)))
                }
                this.nextOK = !1, this.$emit("handleNextOK", !1), this.$emit("handleProcess", 2)
            }
        },
        methods: {
            langLaber: function(t) {
                var e = "";
                return this.langList.forEach(function(i) {
                    i.value === t && (e = i.label)
                }, this), e
            },
            sureLang: function(t) {
                switch (t) {
                    case "no":
                        this.langChoose = !0;
                        break;
                    case "yes":
                        this.langChoose = !1, this.langSure = this.lang, this.$emit("handleData", "lang", this.langSure), this.lyricss.length > 0 && (this.nextOK = !0, this.$emit("handleNextOK", !0), this.$emit("handleProcess", 2));
                        break;
                    case "ok":
                        this.langChoose = !0
                }
            }
        },
        created: function() {
            this.$Message.config({
                top: 100,
                duration: 5
            }), this.$on("handleSubmit", function() {
                return this.lyric ? this.lyricss.length < 3 ? void this.$Message.error("The number of lyrics must be greater than three!") : this.langSure ? (this.$emit("validateOK", !0), void this.$Message.success("All validated!")) : void this.$Message.error("Please select a language!") : void this.$Message.error("Please add your lyrics!")
            })
        },
        mounted: function() {
            document.body.scrollTop = 0, this.lyric = this.audio.lyrics.map(function(t) {
                return t.text
            }).join("\n")
        }
    }
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(112),
        a = i.n(r),
        s = i(117),
        n = i.n(s),
        o = i(116),
        l = i.n(o),
        u = i(109),
        h = i.n(u),
        c = i(108),
        f = i.n(c),
        d = i(115),
        p = i.n(d),
        m = i(114),
        v = i.n(m),
        g = i(113),
        y = i.n(g),
        _ = i(14),
        b = i.n(_);
    e.default = {
        data: function() {
            return {
                current: 0,
                audio: {
                    songFile: !1,
                    src: [],
                    imageFile: !1,
                    image: [],
                    tags: [],
                    title: "",
                    artist: "",
                    agreement: !1,
                    lang: "",
                    lyrics: [],
                    all: 0,
                    isPlaying: !1,
                    email: "",
                    playbackRate: 1,
                    active: 0,
                    msg: "UPLOADING",
                    volume: 100,
                    numberOfChannels: 0,
                    sampleRate: 0,
                    now: 0
                },
                step: [{
                    name: "one",
                    title: "Upload Audio Track",
                    process: ["process-ok", "process-ok"],
                    nextOK: !1
                }, {
                    name: "two",
                    title: "Enter Title and Creator",
                    process: ["process-ok", "process-ok"],
                    nextOK: !1
                }, {
                    name: "three",
                    title: "More information",
                    process: ["process-ok", "process-ok"],
                    nextOK: !1
                }, {
                    name: "four",
                    title: "Lyrics Editing",
                    process: ["process-ok", "process-ok"],
                    nextOK: !1
                }, {
                    name: "five",
                    title: "Lyrics Timing",
                    process: ["process-ok", "process-ok"],
                    nextOK: !1
                }, {
                    name: "six",
                    title: "Preview",
                    process: ["process-ok", "process-ok"],
                    nextOK: !0
                }, {
                    name: "seven",
                    title: "Save",
                    process: ["process-ok", "process-ok"],
                    nextOK: !1
                }],
                question: ""
            }
        },
        computed: {
            isPlaying: function() {
                return this.audio.isPlaying
            },
            prev: function() {
                return 6 === this.current ? 0 : this.current
            },
            songUrl: function() {
                return this.audio.songFile ? URL.createObjectURL(this.audio.songFile) : ""
            },
            currentStep: function() {
                return this.step[this.current]
            },
            nextOK: function() {
                return this.step[this.current].nextOK
            },
            processSpan: function() {
                return 24 / this.step[this.current].process.length
            },
            process: function() {
                return this.step[this.current].process
            },
            name: function() {
                return this.step[this.current].name
            },
            title: function() {
                return this.step[this.current].title
            }
        },
        methods: {
            handleClickAsk: function() {
                var t = this;
                this.question = "", this.$Modal.confirm({
                    okText: "OK",
                    cancelText: "CANCEL",
                    title: "Feedback:",
                    render: function(e, i) {
                        return e("div", [e("Input", {
                            props: {
                                type: "textarea",
                                value: "",
                                autofocus: !0,
                                placeholder: "Please write down your suggestions to improve our uploading system. \nMaximum 255 characters",
                                maxlength: 255
                            },
                            on: {
                                input: function(e) {
                                    t.question = e.trim()
                                }
                            },
                            style: {
                                marginTop: "30px"
                            }
                        })])
                    },
                    onOk: function() {
                        if (t.question) {
                            var e = t,
                                i = new FormData;
                            i.append("content", t.question), b.a.post("/songbook/feedback", i).then(function(t) {
                                0 === t.data.code ? e.$Message.success("Thanks for your feedback.") : e.$Message.error("Failed!")
                            }).catch(function(t) {
                                e.$Message.error("Failed!!")
                            })
                        }
                    }
                })
            },
            handleSubmit: function() {
                this.$refs[this.step[this.current].name].$emit("handleSubmit")
            },
            validateOK: function(t) {
                if (t) {
                    if (4 !== this.current && 5 !== this.current || this.handlePlay(!1), 5 === this.current) {
                        var e = new FormData;
                        e.append("cover_img", this.audio.image[0] ? this.audio.image[0].url : ""), e.append("instrumental_path", this.audio.src[0] ? this.audio.src[0].url : ""), e.append("artist_name", this.audio.artist), e.append("song_name", this.audio.title);
                        var i = {};
                        i.song_name = this.audio.title, i.artist_name = this.audio.artist, i.total = parseInt(1e3 * this.audio.all), i.offset = 0, i.lyric = [], this.audio.lyrics.forEach(function(t) {
                            i.lyric.push({
                                line: {
                                    start_time: parseInt(1e3 * t.startTime),
                                    duration: parseInt(1e3 * t.duration)
                                },
                                words: [{
                                    start_time: 0,
                                    duration: parseInt(1e3 * t.duration),
                                    text: t.text
                                }]
                            })
                        }, this), e.append("lyric_json", JSON.stringify(i)), e.append("album_name", ""), e.append("tags", this.audio.tags.join(",")), e.append("language", this.audio.lang), e.append("email", this.audio.email);
                        var r = this;
                        b.a.post("/songbook/datas", e).then(function(t) {
                            0 === t.data.code ? r.audio.msg = "UPLOAD SUCCESSFUL" : r.audio.msg = "UPLOAD FAILED"
                        }).catch(function(t) {
                            r.audio.msg = "UPLOAD FAILED"
                        })
                    }
                    this.current++
                }
            },
            handleNextOK: function(t) {
                if (t) return void(this.step[this.current].nextOK = !0);
                this.step[this.current].nextOK = !1
            },
            handleProcess: function(t) {
                for (var e = [], i = 0; i < t; i++) e.push("process-ok");
                for (var r = 0; r < this.step[this.current].process.length - t; r++) e.push("process");
                this.step[this.current].process = e
            },
            handleSpeed: function(t) {
                this.$refs.audio.playbackRate = t, this.audio.playbackRate = t
            },
            handlePlay: function(t) {
                if (t) return this.$refs.audio.play(), void(this.audio.isPlaying = !0);
                this.$refs.audio.pause(), this.audio.isPlaying = !1
            },
            handleVolume: function(t) {
                this.$refs.audio.volume = t / 100
            },
            changeTime: function(t) {
                this.$refs.audio.currentTime = t, this.$refs.audio.play(), this.audio.now = t
            },
            handleData: function(t, e) {
                t && (this.audio[t] = e)
            },
            handlePrev: function() {
                this.current--
            }
        },
        mounted: function() {
            var t = this;
            this.$refs.audio.addEventListener("play", function() {
                t.audio.all = t.$refs.audio.duration, t.audio.now = t.$refs.audio.currentTime, setInterval(function() {
                    t.audio.now = t.$refs.audio.currentTime
                }, 1e3)
            })
        },
        components: {
            one: a.a,
            two: n.a,
            three: l.a,
            four: h.a,
            five: f.a,
            six: p.a,
            seven: v.a,
            player: y.a
        }
    }
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(14),
        a = i.n(r);
    e.default = {
        data: function() {
            return {
                isInDrop: !1,
                isShowDrop: !1,
                isShowMore: !1,
                isShowLogout: !1,
                siteName: "starMaker",
                userName: ""
            }
        },
        // created: function() {
        //     var t = this;
        //     a.a.get("/instrumental/get-stage-name").then(function(e) {
        //         var i = e.data.stage_name;
        //         i && (t.userName = i)
        //     }).catch(function(t) {})
        // },
        mounted: function() {
            document.body.addEventListener("click", function(t) {
                this.isShowMore && !this.isShowLogout && (this.isShowMore = !1)
            }.bind(this), !1)
        },
        methods: {
            setCookie: function(t, e, i) {
                var r = new Date;
                r.setDate(r.getDate() + i), document.cookie = t + "=" + e + ";expires=" + r.toGMTString() + ";path=/"
            },
            showNav: function() {
                this.isShowMore = !this.isShowMore
            },
            showLogoutPop: function() {
                this.isShowLogout = !0
            },
            cancelLogout: function() {
                this.isShowLogout = !1
            },
            logout: function() {
                this.setCookie("id", "", -1), this.setCookie("user_id", "", -1), this.setCookie("oauth_token", "", -1), setTimeout(function() {
                    window.location.href = "/"
                }, 100)
            }
        }
    }
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(4),
        a = i.n(r),
        s = i(98);
    i.n(s);
    e.default = {
        props: ["audio", "currentStep"],
        data: function() {
            
            return {
                nextOK: this.currentStep.nextOK,
                uploadData: {
                    type: "track"
                },
                src: this.audio.src,
                uploadList: []
            }
           
            
        },
        methods: {
            handleSuccess: function(t, e, i) {
                this.$emit("handleData", "songFile", this.file), this.$emit("handleData", "src", [{
                    name: e.name,
                    url: t.data
                }]);
                var r = this;
                window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext;
                try {
                    new window.AudioContext
                } catch (t) {
                    console.log("!Your browser does not support AudioContext")
                }
                var s = a.a.Asset.fromFile(this.file);
                s.on("format", function(t) {
                    r.$emit("sampleRate", "songFile", t.sampleRate), r.$emit("numberOfChannels", "songFile", t.channelsPerFrame)
                }), s.on("duration", function(i) {
                    r.$emit("handleData", "all", i);
                    var a = s.format.bitrate / 1024 ? s.format.bitrate / 1024 : e.size / 1024 / i * 1e3 * 8;
                    return s.format.channelsPerFrame < 2 ? (r.$Message.error("Must have two channels!"), void r.handleBeforeUpload()) : s.format.sampleRate < 44100 ? (r.$Message.error("The sample rate must be higher than or equal to 44100!"), void r.handleBeforeUpload()) : a < 64 ? (r.$Message.error("The bit rate must be higher than or equal to 64k!"), void r.handleBeforeUpload()) : t && 0 === t.code ? (r.nextOK = !0, r.$emit("handleNextOK", !0), r.$emit("handleProcess", 2), void r.$Message.success("Upload success!")) : (r.$Message.error("Upload false!"), void r.handleBeforeUpload())
                }), s.start()
            },
            handleError: function(t, e) {
                this.$Message.error("Upload false!")
            },
            handleFormatError: function(t) {
                this.$Notice.warning({
                    title: "The file format is incorrect",
                    desc: "Support .m4a .mp3"
                })
            },
            handleMaxSize: function(t) {
                this.$Notice.warning({
                    title: "Exceeded file size limit",
                    desc: "Max size 20MB"
                })
            },
            handleBeforeUpload: function(t) {
                this.$refs.upload.clearFiles(), this.file = t
            },
            handleRemove: function(t) {
                this.$emit("handleData", "src", []), 0 === this.uploadList.length && (this.nextOK = !1, this.$emit("handleNextOK", !1), this.$emit("handleProcess", 2))
            }
        },
        created: function() {
            this.$Message.config({
                top: 100,
                duration: 5
            }), this.$Message.config({
                top: 50,
                duration: 5
            }), this.$on("handleSubmit", function() {
                if (!this.nextOK) return void this.$Message.error("Please upload an audio track!");
                this.$emit("validateOK", !0), this.$Message.success("All validated!")
            })
        },
        mounted: function() {
            document.body.scrollTop = 0, this.uploadList = this.$refs.upload.fileList
        }
    }
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(37),
        a = i.n(r);
    e.default = {
        props: ["audio", "isPlaying"],
        mounted: function() {
            var t = this;
            this.nativeAudio = document.querySelector("audio"), this.nativeAudio.addEventListener("play", function() {
                t.totalTime = t.transformTime(t.nativeAudio.duration), t.now = t.nativeAudio.currentTime, setInterval(function() {
                    t.now = t.nativeAudio.currentTime
                }, 1e3)
            })
        },
        data: function() {
            return {
                playIcon: "play-icon",
                pauseIcon: "pause-icon",
                now: 0,
                nativeAudio: {},
                totalTime: "0:00",
                speed: 1,
                speedList: [{
                    value: .5,
                    laber: "Low(1/2x)"
                }, {
                    value: 1,
                    laber: "Normal(1x)"
                }, {
                    value: 2,
                    laber: "High(2x)"
                }],
                volume: 100
            }
        },
        computed: {
            imageUrl: function() {
                return this.audio.imageFile ? URL.createObjectURL(this.audio.imageFile) : a.a
            }
        },
        methods: {
            handleVolume: function() {
                this.$emit("handleVolume", this.volume)
            },
            defaultPlaybackRate: function() {
                this.$emit("handleSpeed", this.speed)
            },
            handlePlay: function() {
                this.$emit("handlePlay", !this.isPlaying)
            },
            changeTime: function(t) {
                var e = this.$refs.progressBar,
                    i = e.getBoundingClientRect().left,
                    r = t.pageX;
                this.nativeAudio.currentTime = (r - i) / e.offsetWidth * this.nativeAudio.duration, this.now = this.nativeAudio.currentTime, this.nativeAudio.play()
            },
            touchMove: function(t) {
                var e = this.$refs.progressBar,
                    i = e.getBoundingClientRect().left,
                    r = t.touches[0].pageX;
                this.$refs.now.style.width = 100 * ((r - i) / e.offsetWidth).toFixed(3) + "%"
            },
            touchEnd: function(t) {
                this.nativeAudio.currentTime = this.$refs.now.style.width.replace("%", "") / 100 * this.nativeAudio.duration, this.now = this.nativeAudio.currentTime, this.nativeAudio.play()
            },
            transformTime: function(t) {
                var e = void 0,
                    i = void 0;
                return e = Math.floor(t / 60), e = 1 == e.toString().length ? "0" + e : e, i = Math.floor(t - 60 * e), i = 1 == i.toString().length ? "0" + i : i, e + ":" + i
            }
        }
    }
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = {
        props: ["audio", "currentStep"],
        computed: {
            msg: function() {
                return this.audio.msg
            }
        },
        mounted: function() {
            document.body.scrollTop = 0
        }
    }
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = {
        props: ["audio", "currentStep"],
        data: function() {
            return {
                nextOK: this.currentStep.nextOK,
                on: 1,
                voiceType: "volume-low",
                hoverIndex: -1,
                all: this.audio.all
            }
        },
        computed: {
            now: function() {
                return this.audio.now
            }
        },
        mounted: function() {
            document.body.scrollTop = 0;
            var t = this;
            document.onkeydown = function(e) {
                switch (e.keyCode) {
                    case 37:
                        e.preventDefault(), t.toLeft();
                        break;
                    case 39:
                        e.preventDefault(), t.toRight()
                }
            }
        },
        methods: {
            ctime: function(t) {
                if (0 === t) return void this.$emit("changeTime", 0);
                this.$emit("changeTime", this.audio.lyrics[t - 1].startTime)
            },
            contentClass: function(t) {
                return t === this.hoverIndex ? "lyrics-hover" : "lyrics"
            },
            mouseover: function(t, e) {
                "editor" === (e.fromElement || e.relatedTarget).className && (this.hoverIndex = t)
            },
            mouseout: function(t, e) {
                "editor" === (e.toElement || e.relatedTarget).className && (this.hoverIndex = -1)
            },
            handlePlay: function(t) {
                this.$emit("handlePlay", t)
            },
            toLeft: function() {
                var t = this.now - 3;
                t < 0 || this.$emit("changeTime", t)
            },
            toRight: function() {
                var t = this.now + 3;
                t > this.all || this.$emit("changeTime", t)
            },
            ftime: function(t) {
                var e = void 0,
                    i = void 0;
                return e = Math.floor(t / 60), e = 1 == e.toString().length ? "0" + e : e, i = Math.floor(t - 60 * e), i = 1 == i.toString().length ? "0" + i : i, e + ":" + i
            },
            songItem: function(t) {
                return t === this.on - 1 ? "item-before" : "item"
            }
        },
        watch: {
            now: function(t) {
                return this.audio.lyrics.forEach(function(e, i) {
                    t >= e.startTime && t < e.startTime + e.duration && (this.on = i + 2)
                }, this), "volume-low" === this.voiceType ? void(this.voiceType = "volume-medium") : "volume-medium" === this.voiceType ? void(this.voiceType = "volume-high") : "volume-high" === this.voiceType ? void(this.voiceType = "volume-low") : void 0
            },
            on: function(t) {
                this.$refs.editor.scrollTop = 80 * (this.on - 1)
            }
        },
        created: function() {
            this.$Message.config({
                top: 100,
                duration: 5
            }), this.$emit("changeTime", 0), this.$emit("handlePlay", !0), this.$on("handleSubmit", function() {
                this.$emit("validateOK", !0), this.$Message.success("All validated!")
            })
        }
    }
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(37),
        a = i.n(r);
    e.default = {
        props: ["audio", "currentStep"],
        data: function() {
            return {
                nextOK: this.currentStep.nextOK,
                uploadData: {
                    type: "cover_img"
                },
                image: this.audio.image,
                uploadList: [],
                title: this.audio.title,
                artist: this.audio.artist,
                tags: this.audio.tags,
                tag: ""
            }
        },
        computed: {
            imageUrl: function() {
                return this.audio.imageFile ? URL.createObjectURL(this.audio.imageFile) : a.a
            }
        },
        mounted: function() {
            document.body.scrollTop = 0, this.uploadList = this.$refs.upload.fileList
        },
        methods: {
            handleSuccess: function(t, e, i) {
                if (this.$emit("handleData", "imageFile", this.file), this.$emit("handleData", "image", [{
                        name: e.name,
                        url: t.data
                    }]), !t || 0 !== t.code) return void this.$Message.error("Upload false!");
                this.nextOK = !0, this.$emit("handleNextOK", !0), this.$emit("handleProcess", 2), this.$Message.success("Upload success!")
            },
            handleError: function(t, e) {
                this.$Message.error("Upload false!")
            },
            handleFormatError: function(t) {
                this.$Notice.warning({
                    title: "The file format is incorrect",
                    desc: "Support .png .jpg .jpeg .gif .bmp"
                })
            },
            handleMaxSize: function(t) {
                this.$Notice.warning({
                    title: "Exceeded file size limit",
                    desc: "Max size 20MB"
                })
            },
            handleBeforeUpload: function(t) {
                this.$refs.upload.clearFiles(), this.file = t
            },
            handleRemove: function(t) {
                this.$emit("handleData", "image", []), 0 === this.uploadList.length && (this.$emit("handleData", "imageFile", !1), this.nextOK = !1, this.$emit("handleNextOK", !1), this.$emit("handleProcess", 2))
            },
            handleClose: function(t, e) {
                var i = this.tags.indexOf(e);
                this.tags.splice(i, 1), this.$emit("handleData", "tags", this.tags)
            },
            render: function() {
                var t = this;
                this.$Modal.confirm({
                    okText: "OK",
                    cancelText: "Cancel",
                    render: function(e) {
                        return e("Input", {
                            props: {
                                value: "",
                                autofocus: !0,
                                placeholder: "Please enter tag...",
                                maxlength: 64
                            },
                            on: {
                                input: function(e) {
                                    t.tag = e.trim()
                                }
                            }
                        })
                    },
                    onOk: function() {
                        if (t.tags.length > 3) return void t.$Notice.warning({
                            title: "Up to 4 tag can be add"
                        });
                        t.tag && (t.tags.push(t.tag), t.$emit("handleData", "tags", t.tags), t.tag = "")
                    }
                })
            }
        },
        created: function() {
            this.$Message.config({
                top: 100,
                duration: 5
            }), this.$on("handleSubmit", function() {
                if (!this.nextOK) return void this.$Message.error("Please check the required fields!");
                this.$emit("validateOK", !0), this.$Message.success("All validated!")
            })
        }
    }
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = {
        props: ["audio", "currentStep"],
        data: function() {
            return {
                nextOK: this.currentStep.nextOK,
                copyright: this.audio.agreement,
                copyrightE: !1,
                formValidate: {
                    title: this.audio.title,
                    artist: this.audio.artist
                },
                ruleValidate: {
                    title: [{
                        required: !0,
                        message: "Title can't be empty",
                        trigger: "blur"
                    }],
                    artist: [{
                        required: !0,
                        message: "Artist can't be empty",
                        trigger: "blur"
                    }]
                },
                modal4: !1
            }
        },
        methods: {
            change: function(t) {
                switch (t) {
                    case "title":
                        this.$emit("handleData", "title", this.formValidate.title);
                        break;
                    case "artist":
                        this.$emit("handleData", "artist", this.formValidate.artist);
                        break;
                    case "copyright":
                        this.$emit("handleData", "agreement", this.copyright)
                }
                if (this.copyrightE = !this.copyright, this.copyright && "" !== this.formValidate.title && "" !== this.formValidate.artist) return this.nextOK = !0, this.$emit("handleNextOK", !0), void this.$emit("handleProcess", 2);
                this.nextOK = !1, this.$emit("handleNextOK", !1), this.$emit("handleProcess", 2)
            }
        },
        created: function() {
            this.$Message.config({
                top: 100,
                duration: 5
            }), this.$on("handleSubmit", function() {
                var t = this;
                if (!this.nextOK) return void this.$Message.error("Please fill in complete!");
                this.$refs.formValidate.validate(function(e) {
                    if (e && t.copyright) return t.$emit("validateOK", !0), void t.$Message.success("All validated!");
                    t.$emit("validateOK", !1), t.$Message.error("Please check the required fields!")
                })
            })
        },
        mounted: function() {
            document.body.scrollTop = 0
        }
    }
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(7),
        a = i(15),
        s = i.n(a),
        n = (i(38), i(41)),
        o = i.n(n),
        l = i(39),
        u = (i.n(l), i(40));
    i.n(u);
    r.default.use(s.a), new r.default({
        el: "#app",
        render: function(t) {
            return t(o.a)
        }
    })
}, , function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, , function(t, e, i) {
    e.MP3Demuxer = i(100), e.MP3Decoder = i(99)
}, function(t, e, i) {
    var r = i(4),
        a = i(5),
        s = i(36),
        n = i(12),
        o = i(106),
        l = (i(103), i(104), i(105), r.Decoder.extend(function() {
            r.Decoder.register("mp3", this), this.prototype.init = function() {
                this.mp3_stream = new s(this.bitstream), this.frame = new n, this.synth = new o, this.seeking = !1
            }, this.prototype.readChunk = function() {
                var t = this.mp3_stream,
                    e = this.frame,
                    i = this.synth;
                if (this.seeking) {
                    for (;;) try {
                        e.decode(t);
                        break
                    } catch (t) {
                        if (t instanceof r.UnderflowError) throw t
                    }
                    this.seeking = !1
                } else e.decode(t);
                i.frame(e);
                for (var a = i.pcm.samples, s = i.pcm.channels, n = i.pcm.length, o = new Float32Array(n * s), l = 0, u = 0; u < n; u++)
                    for (var h = 0; h < s; h++) o[l++] = a[h][u];
                return o
            }, this.prototype.seek = function(t) {
                var e;
                this.demuxer.seekPoints.length > 0 ? (t = this._super(t), e = this.stream.offset) : e = t * this.format.bitrate / 8 / this.format.sampleRate, this.mp3_stream.reset(e);
                for (var i = 0; i < 4096; i++) {
                    for (var r = e + i, s = 0; s < 3; s++) {
                        this.mp3_stream.reset(r);
                        try {
                            var n = a.decode(this.mp3_stream)
                        } catch (t) {
                            break
                        }
                        var o = n.framesize();
                        if (null == o) break;
                        r += o
                    }
                    if (3 === s) break
                }
                return 3 !== s && (i = 0), this.mp3_stream.reset(e + i), 0 === this.demuxer.seekPoints.length && (t = this.stream.offset / (this.format.bitrate / 8) * this.format.sampleRate), this.seeking = !0, t
            }
        }));
    t.exports = l
}, function(t, e, i) {
    var r = i(4),
        a = i(35).ID3v23Stream,
        s = i(35).ID3v22Stream,
        n = i(5),
        o = i(36),
        l = r.Demuxer.extend(function() {
            r.Demuxer.register(this), this.probe = function(t) {
                var e = t.offset,
                    i = l.getID3v2Header(t);
                i && t.advance(10 + i.length);
                var a = new o(new r.Bitstream(t)),
                    s = null;
                try {
                    s = n.decode(a)
                } catch (t) {}
                return t.seek(e), !!s
            }, this.getID3v2Header = function(t) {
                if ("ID3" == t.peekString(0, 3)) {
                    t = r.Stream.fromBuffer(t.peekBuffer(0, 10)), t.advance(3);
                    var e = t.readUInt8(),
                        i = t.readUInt8(),
                        a = t.readUInt8(),
                        s = t.readBuffer(4).data;
                    return {
                        version: "2." + e + "." + i,
                        major: e,
                        minor: i,
                        flags: a,
                        length: s[0] << 21 | s[1] << 14 | s[2] << 7 | s[3]
                    }
                }
                return null
            };
            const t = [
                [32, 17],
                [17, 9]
            ];
            this.prototype.parseDuration = function(e) {
                var i, r = this.stream,
                    a = r.offset;
                if (!e || 3 !== e.layer) return !1;
                r.advance(t[e.flags & n.FLAGS.LSF_EXT ? 1 : 0][1 === e.nchannels() ? 1 : 0]);
                var s = r.readString(4);
                if ("Xing" === s || "Info" === s) {
                    var o = r.readUInt32();
                    if (1 & o && (i = r.readUInt32()), 2 & o) var l = r.readUInt32();
                    if (4 & o && i && l)
                        for (var u = 0; u < 100; u++) {
                            var h = r.readUInt8(),
                                c = h / 256 * l | 0,
                                f = u / 100 * (i * e.nbsamples() * 32) | 0;
                            this.addSeekPoint(c, f)
                        }
                    8 & o && r.advance(4)
                } else if (r.seek(a + 4 + 32), "VBRI" == (s = r.readString(4)) && 1 === r.readUInt16()) {
                    r.advance(4), r.advance(4), i = r.readUInt32();
                    for (var d = r.readUInt16(), p = (r.readUInt16(), r.readUInt16()), m = r.readUInt16(), v = "readUInt" + 8 * p, c = 0, u = 0; u < d; u++) this.addSeekPoint(c, m * u), c += r[v]()
                }
                return !!i && (this.emit("duration", i * e.nbsamples() * 32 / e.samplerate * 1e3 | 0), !0)
            }, this.prototype.readChunk = function() {
                var t = this.stream;
                if (!this.sentInfo) {
                    var e = l.getID3v2Header(t);
                    if (e) {
                        if (t.advance(10), e.major > 2) var i = new a(e, t);
                        else var i = new s(e, t);
                        this.emit("metadata", i.read())
                    }
                    var u = t.offset,
                        h = new o(new r.Bitstream(t)),
                        c = n.decode(h);
                    if (!c) return this.emit("error", "Could not find first frame.");
                    this.emit("format", {
                        formatID: "mp3",
                        sampleRate: c.samplerate,
                        channelsPerFrame: c.nchannels(),
                        bitrate: c.bitrate,
                        floatingPoint: !0
                    });
                    var f = this.parseDuration(c);
                    t.advance(u - t.offset), this.dataSize = 0, f || this.on("end", function() {
                        this.emit("duration", 8 * this.dataSize / c.bitrate * 1e3 | 0)
                    }), this.sentInfo = !0
                }
                for (; t.available(1);) {
                    var d = t.readSingleBuffer(t.remainingBytes());
                    this.dataSize += d.length, this.emit("data", d)
                }
            }
        });
    t.exports = l
}, function(t, e) {
    function i(t, e, i) {
        this.table = t, this.linbits = e, this.startbits = i
    }
    var r = function(t, e) {
            return {
                final: 0,
                ptr: {
                    bits: e,
                    offset: t
                }
            }
        },
        a = function(t, e, i, r, a) {
            return {
                final: 1,
                value: {
                    v: t,
                    w: e,
                    x: i,
                    y: r,
                    hlen: a
                }
            }
        };
    const s = [r(16, 2), r(20, 2), r(24, 1), r(26, 1), a(0, 0, 1, 0, 4), a(0, 0, 0, 1, 4), a(0, 1, 0, 0, 4), a(1, 0, 0, 0, 4), a(0, 0, 0, 0, 1), a(0, 0, 0, 0, 1), a(0, 0, 0, 0, 1), a(0, 0, 0, 0, 1), a(0, 0, 0, 0, 1), a(0, 0, 0, 0, 1), a(0, 0, 0, 0, 1), a(0, 0, 0, 0, 1), a(1, 0, 1, 1, 2), a(1, 1, 1, 1, 2), a(1, 1, 0, 1, 2), a(1, 1, 1, 0, 2), a(0, 1, 1, 1, 2), a(0, 1, 0, 1, 2), a(1, 0, 0, 1, 1), a(1, 0, 0, 1, 1), a(0, 1, 1, 0, 1), a(0, 0, 1, 1, 1), a(1, 0, 1, 0, 1), a(1, 1, 0, 0, 1)],
        n = [a(1, 1, 1, 1, 4), a(1, 1, 1, 0, 4), a(1, 1, 0, 1, 4), a(1, 1, 0, 0, 4), a(1, 0, 1, 1, 4), a(1, 0, 1, 0, 4), a(1, 0, 0, 1, 4), a(1, 0, 0, 0, 4), a(0, 1, 1, 1, 4), a(0, 1, 1, 0, 4), a(0, 1, 0, 1, 4), a(0, 1, 0, 0, 4), a(0, 0, 1, 1, 4), a(0, 0, 1, 0, 4), a(0, 0, 0, 1, 4), a(0, 0, 0, 0, 4)];
    var o = function(t, e, i) {
        return {
            final: 1,
            value: {
                x: t,
                y: e,
                hlen: i
            }
        }
    };
    const l = [o(0, 0, 0)],
        u = [o(1, 1, 3), o(0, 1, 3), o(1, 0, 2), o(1, 0, 2), o(0, 0, 1), o(0, 0, 1), o(0, 0, 1), o(0, 0, 1)],
        h = [r(8, 3), o(1, 1, 3), o(0, 1, 3), o(1, 0, 3), o(0, 0, 1), o(0, 0, 1), o(0, 0, 1), o(0, 0, 1), o(2, 2, 3), o(0, 2, 3), o(1, 2, 2), o(1, 2, 2), o(2, 1, 2), o(2, 1, 2), o(2, 0, 2), o(2, 0, 2)],
        c = [r(8, 3), o(1, 0, 3), o(1, 1, 2), o(1, 1, 2), o(0, 1, 2), o(0, 1, 2), o(0, 0, 2), o(0, 0, 2), o(2, 2, 3), o(0, 2, 3), o(1, 2, 2), o(1, 2, 2), o(2, 1, 2), o(2, 1, 2), o(2, 0, 2), o(2, 0, 2)],
        f = [r(8, 4), o(1, 1, 3), o(0, 1, 3), o(1, 0, 3), o(0, 0, 1), o(0, 0, 1), o(0, 0, 1), o(0, 0, 1), r(24, 1), o(3, 2, 4), o(3, 1, 3), o(3, 1, 3), o(1, 3, 4), o(0, 3, 4), o(3, 0, 4), o(2, 2, 4), o(1, 2, 3), o(1, 2, 3), o(2, 1, 3), o(2, 1, 3), o(0, 2, 3), o(0, 2, 3), o(2, 0, 3), o(2, 0, 3), o(3, 3, 1), o(2, 3, 1)],
        d = [r(16, 3), r(24, 1), r(26, 1), o(1, 2, 4), o(2, 1, 4), o(2, 0, 4), o(0, 1, 3), o(0, 1, 3), o(1, 1, 2), o(1, 1, 2), o(1, 1, 2), o(1, 1, 2), o(1, 0, 3), o(1, 0, 3), o(0, 0, 3), o(0, 0, 3), o(3, 3, 3), o(0, 3, 3), o(2, 3, 2), o(2, 3, 2), o(3, 2, 2), o(3, 2, 2), o(3, 0, 2), o(3, 0, 2), o(1, 3, 1), o(3, 1, 1), o(2, 2, 1), o(0, 2, 1)],
        p = [r(16, 4), r(32, 4), r(48, 2), o(1, 1, 4), o(0, 1, 3), o(0, 1, 3), o(1, 0, 3), o(1, 0, 3), o(0, 0, 1), o(0, 0, 1), o(0, 0, 1), o(0, 0, 1), o(0, 0, 1), o(0, 0, 1), o(0, 0, 1), o(0, 0, 1), r(52, 2), r(56, 1), r(58, 1), o(1, 5, 4), o(5, 1, 4), r(60, 1), o(5, 0, 4), r(62, 1), o(2, 4, 4), o(4, 2, 4), o(1, 4, 3), o(1, 4, 3), o(4, 1, 3), o(4, 1, 3), o(4, 0, 3), o(4, 0, 3), o(0, 4, 4), o(2, 3, 4), o(3, 2, 4), o(0, 3, 4), o(1, 3, 3), o(1, 3, 3), o(3, 1, 3), o(3, 1, 3), o(3, 0, 3), o(3, 0, 3), o(2, 2, 3), o(2, 2, 3), o(1, 2, 2), o(1, 2, 2), o(1, 2, 2), o(1, 2, 2), o(2, 1, 1), o(2, 1, 1), o(0, 2, 2), o(2, 0, 2), o(5, 5, 2), o(4, 5, 2), o(5, 4, 2), o(5, 3, 2), o(3, 5, 1), o(4, 4, 1), o(2, 5, 1), o(5, 2, 1), o(0, 5, 1), o(3, 4, 1), o(4, 3, 1), o(3, 3, 1)],
        m = [r(16, 4), r(32, 4), o(1, 2, 4), o(2, 1, 4), o(1, 1, 2), o(1, 1, 2), o(1, 1, 2), o(1, 1, 2), o(0, 1, 3), o(0, 1, 3), o(1, 0, 3), o(1, 0, 3), o(0, 0, 2), o(0, 0, 2), o(0, 0, 2), o(0, 0, 2), r(48, 3), r(56, 2), r(60, 1), o(1, 5, 4), o(5, 1, 4), r(62, 1), r(64, 1), o(2, 4, 4), o(4, 2, 4), o(1, 4, 4), o(4, 1, 3), o(4, 1, 3), o(0, 4, 4), o(4, 0, 4), o(2, 3, 4), o(3, 2, 4), o(1, 3, 4), o(3, 1, 4), o(0, 3, 4), o(3, 0, 4), o(2, 2, 2), o(2, 2, 2), o(2, 2, 2), o(2, 2, 2), o(0, 2, 2), o(0, 2, 2), o(0, 2, 2), o(0, 2, 2), o(2, 0, 2), o(2, 0, 2), o(2, 0, 2), o(2, 0, 2), o(5, 5, 3), o(5, 4, 3), o(4, 5, 2), o(4, 5, 2), o(5, 3, 1), o(5, 3, 1), o(5, 3, 1), o(5, 3, 1), o(3, 5, 2), o(4, 4, 2), o(2, 5, 1), o(2, 5, 1), o(5, 2, 1), o(0, 5, 1), o(3, 4, 1), o(4, 3, 1), o(5, 0, 1), o(3, 3, 1)],
        v = [r(16, 4), r(32, 3), r(40, 2), r(44, 2), r(48, 1), o(1, 2, 4), o(2, 1, 4), o(2, 0, 4), o(1, 1, 3), o(1, 1, 3), o(0, 1, 3), o(0, 1, 3), o(1, 0, 3), o(1, 0, 3), o(0, 0, 3), o(0, 0, 3), r(50, 1), o(3, 5, 4), o(5, 3, 4), r(52, 1), o(4, 4, 4), o(2, 5, 4), o(5, 2, 4), o(1, 5, 4), o(5, 1, 3), o(5, 1, 3), o(3, 4, 3), o(3, 4, 3), o(4, 3, 3), o(4, 3, 3), o(5, 0, 4), o(0, 4, 4), o(2, 4, 3), o(4, 2, 3), o(3, 3, 3), o(4, 0, 3), o(1, 4, 2), o(1, 4, 2), o(4, 1, 2), o(4, 1, 2), o(2, 3, 2), o(3, 2, 2), o(1, 3, 1), o(1, 3, 1), o(3, 1, 1), o(3, 1, 1), o(0, 3, 2), o(3, 0, 2), o(2, 2, 1), o(0, 2, 1), o(5, 5, 1), o(4, 5, 1), o(5, 4, 1), o(0, 5, 1)],
        g = [r(16, 4), r(32, 4), r(48, 2), o(1, 1, 4), o(0, 1, 3), o(0, 1, 3), o(1, 0, 3), o(1, 0, 3), o(0, 0, 1), o(0, 0, 1), o(0, 0, 1), o(0, 0, 1), o(0, 0, 1), o(0, 0, 1), o(0, 0, 1), o(0, 0, 1), r(52, 3), r(60, 2), r(64, 3), r(72, 1), r(74, 2), r(78, 2), r(82, 2), o(1, 7, 4), o(7, 1, 4), r(86, 1), r(88, 2), r(92, 2), o(1, 6, 4), o(6, 1, 4), o(6, 0, 4), r(96, 1), r(98, 1), r(100, 1), o(1, 4, 4), o(4, 1, 4), o(4, 0, 4), o(2, 3, 4), o(3, 2, 4), o(0, 3, 4), o(1, 3, 3), o(1, 3, 3), o(3, 1, 3), o(3, 1, 3), o(3, 0, 3), o(3, 0, 3), o(2, 2, 3), o(2, 2, 3), o(1, 2, 2), o(2, 1, 2), o(0, 2, 2), o(2, 0, 2), o(7, 7, 3), o(6, 7, 3), o(7, 6, 3), o(5, 7, 3), o(7, 5, 3), o(6, 6, 3), o(4, 7, 2), o(4, 7, 2), o(7, 4, 2), o(5, 6, 2), o(6, 5, 2), o(3, 7, 2), o(7, 3, 2), o(7, 3, 2), o(4, 6, 2), o(4, 6, 2), o(5, 5, 3), o(5, 4, 3), o(6, 3, 2), o(6, 3, 2), o(2, 7, 1), o(7, 2, 1), o(6, 4, 2), o(0, 7, 2), o(7, 0, 1), o(7, 0, 1), o(6, 2, 1), o(6, 2, 1), o(4, 5, 2), o(3, 5, 2), o(0, 6, 1), o(0, 6, 1), o(5, 3, 2), o(4, 4, 2), o(3, 6, 1), o(2, 6, 1), o(2, 5, 2), o(5, 2, 2), o(1, 5, 1), o(1, 5, 1), o(5, 1, 1), o(5, 1, 1), o(3, 4, 2), o(4, 3, 2), o(0, 5, 1), o(5, 0, 1), o(2, 4, 1), o(4, 2, 1), o(3, 3, 1), o(0, 4, 1)],
        y = [r(16, 4), r(32, 4), r(48, 4), r(64, 3), o(1, 2, 4), r(72, 1), o(1, 1, 3), o(1, 1, 3), o(0, 1, 3), o(0, 1, 3), o(1, 0, 3), o(1, 0, 3), o(0, 0, 2), o(0, 0, 2), o(0, 0, 2), o(0, 0, 2), r(74, 2), r(78, 3), r(86, 2), r(90, 1), r(92, 2), o(2, 7, 4), o(7, 2, 4), r(96, 1), o(7, 1, 3), o(7, 1, 3), o(1, 7, 4), o(7, 0, 4), o(3, 6, 4), o(6, 3, 4), o(6, 0, 4), r(98, 1), r(100, 1), o(1, 5, 4), o(6, 2, 3), o(6, 2, 3), o(2, 6, 4), o(0, 6, 4), o(1, 6, 3), o(1, 6, 3), o(6, 1, 3), o(6, 1, 3), o(5, 1, 4), o(3, 4, 4), o(5, 0, 4), r(102, 1), o(2, 4, 4), o(4, 2, 4), o(1, 4, 4), o(4, 1, 4), o(0, 4, 4), o(4, 0, 4), o(2, 3, 3), o(2, 3, 3), o(3, 2, 3), o(3, 2, 3), o(1, 3, 2), o(1, 3, 2), o(1, 3, 2), o(1, 3, 2), o(3, 1, 2), o(3, 1, 2), o(3, 1, 2), o(3, 1, 2), o(0, 3, 3), o(3, 0, 3), o(2, 2, 2), o(2, 2, 2), o(2, 1, 1), o(2, 1, 1), o(2, 1, 1), o(2, 1, 1), o(0, 2, 1), o(2, 0, 1), o(7, 7, 2), o(6, 7, 2), o(7, 6, 2), o(7, 5, 2), o(6, 6, 2), o(6, 6, 2), o(4, 7, 2), o(4, 7, 2), o(7, 4, 2), o(7, 4, 2), o(5, 7, 3), o(5, 5, 3), o(5, 6, 2), o(6, 5, 2), o(3, 7, 1), o(3, 7, 1), o(7, 3, 1), o(4, 6, 1), o(4, 5, 2), o(5, 4, 2), o(3, 5, 2), o(5, 3, 2), o(6, 4, 1), o(0, 7, 1), o(4, 4, 1), o(2, 5, 1), o(5, 2, 1), o(0, 5, 1), o(4, 3, 1), o(3, 3, 1)],
        _ = [r(16, 4), r(32, 4), r(48, 4), r(64, 2), r(68, 3), r(76, 1), o(1, 2, 4), o(2, 1, 4), r(78, 1), o(0, 0, 4), o(1, 1, 3), o(1, 1, 3), o(0, 1, 3), o(0, 1, 3), o(1, 0, 3), o(1, 0, 3), r(80, 2), r(84, 1), r(86, 1), r(88, 1), o(5, 6, 4), o(3, 7, 4), r(90, 1), o(2, 7, 4), o(7, 2, 4), o(4, 6, 4), o(6, 4, 4), o(1, 7, 4), o(7, 1, 4), r(92, 1), o(3, 6, 4), o(6, 3, 4), o(4, 5, 4), o(5, 4, 4), o(4, 4, 4), r(94, 1), o(2, 6, 3), o(2, 6, 3), o(6, 2, 3), o(6, 2, 3), o(6, 1, 3), o(6, 1, 3), o(1, 6, 4), o(6, 0, 4), o(3, 5, 4), o(5, 3, 4), o(2, 5, 4), o(5, 2, 4), o(1, 5, 3), o(1, 5, 3), o(5, 1, 3), o(5, 1, 3), o(3, 4, 3), o(3, 4, 3), o(4, 3, 3), o(4, 3, 3), o(5, 0, 4), o(0, 4, 4), o(2, 4, 3), o(2, 4, 3), o(4, 2, 3), o(4, 2, 3), o(1, 4, 3), o(1, 4, 3), o(3, 3, 2), o(4, 1, 2), o(2, 3, 2), o(3, 2, 2), o(4, 0, 3), o(0, 3, 3), o(3, 0, 2), o(3, 0, 2), o(1, 3, 1), o(1, 3, 1), o(1, 3, 1), o(1, 3, 1), o(3, 1, 1), o(2, 2, 1), o(0, 2, 1), o(2, 0, 1), o(7, 7, 2), o(6, 7, 2), o(7, 6, 1), o(7, 6, 1), o(5, 7, 1), o(7, 5, 1), o(6, 6, 1), o(4, 7, 1), o(7, 4, 1), o(6, 5, 1), o(7, 3, 1), o(5, 5, 1), o(0, 7, 1), o(7, 0, 1), o(0, 6, 1), o(0, 5, 1)],
        b = [r(16, 4), r(32, 4), r(48, 4), r(64, 2), o(1, 1, 4), o(0, 1, 4), o(1, 0, 3), o(1, 0, 3), o(0, 0, 1), o(0, 0, 1), o(0, 0, 1), o(0, 0, 1), o(0, 0, 1), o(0, 0, 1), o(0, 0, 1), o(0, 0, 1), r(68, 4), r(84, 4), r(100, 4), r(116, 4), r(132, 4), r(148, 4), r(164, 3), r(172, 3), r(180, 3), r(188, 3), r(196, 3), r(204, 3), r(212, 1), r(214, 2), r(218, 3), r(226, 1), r(228, 2), r(232, 2), r(236, 2), r(240, 2), o(8, 1, 4), r(244, 1), r(246, 1), r(248, 1), r(250, 2), r(254, 1), o(1, 5, 4), o(5, 1, 4), r(256, 1), r(258, 1), r(260, 1), o(1, 4, 4), o(4, 1, 3), o(4, 1, 3), o(0, 4, 4), o(4, 0, 4), o(2, 3, 4), o(3, 2, 4), o(1, 3, 3), o(1, 3, 3), o(3, 1, 3), o(3, 1, 3), o(0, 3, 3), o(0, 3, 3), o(3, 0, 3), o(3, 0, 3), o(2, 2, 3), o(2, 2, 3), o(1, 2, 2), o(2, 1, 2), o(0, 2, 2), o(2, 0, 2), r(262, 4), r(278, 4), r(294, 4), r(310, 3), r(318, 2), r(322, 2), r(326, 3), r(334, 2), r(338, 1), r(340, 2), r(344, 2), r(348, 2), r(352, 2), r(356, 2), o(1, 15, 4), o(15, 1, 4), o(15, 0, 4), r(360, 1), r(362, 1), r(364, 1), o(14, 2, 4), r(366, 1), o(1, 14, 4), o(14, 1, 4), r(368, 1), r(370, 1), r(372, 1), r(374, 1), r(376, 1), r(378, 1), o(12, 6, 4), o(3, 13, 4), r(380, 1), o(2, 13, 4), o(13, 2, 4), o(1, 13, 4), o(11, 7, 4), r(382, 1), r(384, 1), o(12, 3, 4), r(386, 1), o(4, 11, 4), o(13, 1, 3), o(13, 1, 3), o(0, 13, 4), o(13, 0, 4), o(8, 10, 4), o(10, 8, 4), o(4, 12, 4), o(12, 4, 4), o(6, 11, 4), o(11, 6, 4), o(3, 12, 3), o(3, 12, 3), o(2, 12, 3), o(2, 12, 3), o(12, 2, 3), o(12, 2, 3), o(5, 11, 3), o(5, 11, 3), o(11, 5, 4), o(8, 9, 4), o(1, 12, 3), o(1, 12, 3), o(12, 1, 3), o(12, 1, 3), o(9, 8, 4), o(0, 12, 4), o(12, 0, 3), o(12, 0, 3), o(11, 4, 4), o(6, 10, 4), o(10, 6, 4), o(7, 9, 4), o(3, 11, 3), o(3, 11, 3), o(11, 3, 3), o(11, 3, 3), o(8, 8, 4), o(5, 10, 4), o(2, 11, 3), o(2, 11, 3), o(10, 5, 4), o(6, 9, 4), o(10, 4, 3), o(10, 4, 3), o(7, 8, 4), o(8, 7, 4), o(9, 4, 3), o(9, 4, 3), o(7, 7, 4), o(7, 6, 4), o(11, 2, 2), o(11, 2, 2), o(11, 2, 2), o(11, 2, 2), o(1, 11, 2), o(1, 11, 2), o(11, 1, 2), o(11, 1, 2), o(0, 11, 3), o(11, 0, 3), o(9, 6, 3), o(4, 10, 3), o(3, 10, 3), o(10, 3, 3), o(5, 9, 3), o(9, 5, 3), o(2, 10, 2), o(2, 10, 2), o(10, 2, 2), o(10, 2, 2), o(1, 10, 2), o(1, 10, 2), o(10, 1, 2), o(10, 1, 2), o(0, 10, 3), o(6, 8, 3), o(10, 0, 2), o(10, 0, 2), o(8, 6, 3), o(4, 9, 3), o(9, 3, 2), o(9, 3, 2), o(3, 9, 3), o(5, 8, 3), o(8, 5, 3), o(6, 7, 3), o(2, 9, 2), o(2, 9, 2), o(9, 2, 2), o(9, 2, 2), o(5, 7, 3), o(7, 5, 3), o(3, 8, 2), o(3, 8, 2), o(8, 3, 2), o(8, 3, 2), o(6, 6, 3), o(4, 7, 3), o(7, 4, 3), o(5, 6, 3), o(6, 5, 3), o(7, 3, 3), o(1, 9, 1), o(9, 1, 1), o(0, 9, 2), o(9, 0, 2), o(4, 8, 2), o(8, 4, 2), o(7, 2, 2), o(7, 2, 2), o(4, 6, 3), o(6, 4, 3), o(2, 8, 1), o(2, 8, 1), o(2, 8, 1), o(2, 8, 1), o(8, 2, 1), o(1, 8, 1), o(3, 7, 2), o(2, 7, 2), o(1, 7, 1), o(1, 7, 1), o(7, 1, 1), o(7, 1, 1), o(5, 5, 2), o(0, 7, 2), o(7, 0, 2), o(3, 6, 2), o(6, 3, 2), o(4, 5, 2), o(5, 4, 2), o(2, 6, 2), o(6, 2, 2), o(3, 5, 2), o(0, 8, 1), o(8, 0, 1), o(1, 6, 1), o(6, 1, 1), o(0, 6, 1), o(6, 0, 1), o(5, 3, 2), o(4, 4, 2), o(2, 5, 1), o(2, 5, 1), o(5, 2, 1), o(0, 5, 1), o(3, 4, 1), o(4, 3, 1), o(5, 0, 1), o(2, 4, 1), o(4, 2, 1), o(3, 3, 1), r(388, 3), o(15, 15, 4), o(14, 15, 4), o(13, 15, 4), o(14, 14, 4), o(12, 15, 4), o(13, 14, 4), o(11, 15, 4), o(15, 11, 4), o(12, 14, 4), o(13, 12, 4), r(396, 1), o(14, 12, 3), o(14, 12, 3), o(13, 13, 3), o(13, 13, 3), o(15, 10, 4), o(12, 13, 4), o(11, 14, 3), o(11, 14, 3), o(14, 11, 3), o(14, 11, 3), o(9, 15, 3), o(9, 15, 3), o(15, 9, 3), o(15, 9, 3), o(14, 10, 3), o(14, 10, 3), o(11, 13, 3), o(11, 13, 3), o(13, 11, 3), o(13, 11, 3), o(8, 15, 3), o(8, 15, 3), o(15, 8, 3), o(15, 8, 3), o(12, 12, 3), o(12, 12, 3), o(10, 14, 4), o(9, 14, 4), o(8, 14, 3), o(8, 14, 3), o(7, 15, 4), o(7, 14, 4), o(15, 7, 2), o(15, 7, 2), o(15, 7, 2), o(15, 7, 2), o(13, 10, 2), o(13, 10, 2), o(10, 13, 3), o(11, 12, 3), o(12, 11, 3), o(15, 6, 3), o(6, 15, 2), o(6, 15, 2), o(14, 8, 2), o(5, 15, 2), o(9, 13, 2), o(13, 9, 2), o(15, 5, 2), o(14, 7, 2), o(10, 12, 2), o(11, 11, 2), o(4, 15, 2), o(4, 15, 2), o(15, 4, 2), o(15, 4, 2), o(12, 10, 3), o(14, 6, 3), o(15, 3, 2), o(15, 3, 2), o(3, 15, 1), o(3, 15, 1), o(8, 13, 2), o(13, 8, 2), o(2, 15, 1), o(15, 2, 1), o(6, 14, 2), o(9, 12, 2), o(0, 15, 1), o(0, 15, 1), o(12, 9, 2), o(5, 14, 2), o(10, 11, 1), o(10, 11, 1), o(7, 13, 2), o(13, 7, 2), o(4, 14, 1), o(4, 14, 1), o(12, 8, 2), o(13, 6, 2), o(3, 14, 1), o(3, 14, 1), o(11, 9, 1), o(11, 9, 1), o(9, 11, 2), o(10, 10, 2), o(11, 10, 1), o(14, 5, 1), o(14, 4, 1), o(8, 12, 1), o(6, 13, 1), o(14, 3, 1), o(2, 14, 1), o(0, 14, 1), o(14, 0, 1), o(5, 13, 1), o(13, 5, 1), o(7, 12, 1), o(12, 7, 1), o(4, 13, 1), o(8, 11, 1), o(11, 8, 1), o(13, 4, 1), o(9, 10, 1), o(10, 9, 1), o(6, 12, 1), o(13, 3, 1), o(7, 11, 1), o(5, 12, 1), o(12, 5, 1), o(9, 9, 1), o(7, 10, 1), o(10, 7, 1), o(9, 7, 1), o(15, 14, 3), o(15, 12, 3), o(15, 13, 2), o(15, 13, 2), o(14, 13, 1), o(14, 13, 1), o(14, 13, 1), o(14, 13, 1), o(10, 15, 1), o(14, 9, 1)],
        k = [r(16, 4), r(32, 4), r(48, 4), r(64, 4), r(80, 4), r(96, 3), r(104, 3), r(112, 2), r(116, 1), r(118, 1), o(1, 1, 3), o(1, 1, 3), o(0, 1, 4), o(1, 0, 4), o(0, 0, 3), o(0, 0, 3), r(120, 4), r(136, 4), r(152, 4), r(168, 4), r(184, 4), r(200, 3), r(208, 3), r(216, 4), r(232, 3), r(240, 3), r(248, 3), r(256, 3), r(264, 2), r(268, 3), r(276, 3), r(284, 2), r(288, 2), r(292, 2), r(296, 2), r(300, 2), r(304, 2), r(308, 2), r(312, 2), r(316, 2), r(320, 1), r(322, 1), r(324, 1), r(326, 2), r(330, 1), r(332, 1), r(334, 2), r(338, 1), r(340, 1), r(342, 1), o(9, 1, 4), r(344, 1), r(346, 1), r(348, 1), r(350, 1), r(352, 1), o(2, 8, 4), o(8, 2, 4), o(1, 8, 4), o(8, 1, 4), r(354, 1), r(356, 1), r(358, 1), r(360, 1), o(2, 7, 4), o(7, 2, 4), o(6, 4, 4), o(1, 7, 4), o(5, 5, 4), o(7, 1, 4), r(362, 1), o(3, 6, 4), o(6, 3, 4), o(4, 5, 4), o(5, 4, 4), o(2, 6, 4), o(6, 2, 4), o(1, 6, 4), r(364, 1), o(3, 5, 4), o(6, 1, 3), o(6, 1, 3), o(5, 3, 4), o(4, 4, 4), o(2, 5, 3), o(2, 5, 3), o(5, 2, 3), o(5, 2, 3), o(1, 5, 3), o(1, 5, 3), o(5, 1, 3), o(5, 1, 3), o(0, 5, 4), o(5, 0, 4), o(3, 4, 3), o(3, 4, 3), o(4, 3, 3), o(2, 4, 3), o(4, 2, 3), o(3, 3, 3), o(4, 1, 2), o(4, 1, 2), o(1, 4, 3), o(0, 4, 3), o(2, 3, 2), o(2, 3, 2), o(3, 2, 2), o(3, 2, 2), o(4, 0, 3), o(0, 3, 3), o(1, 3, 2), o(1, 3, 2), o(3, 1, 2), o(3, 0, 2), o(2, 2, 1), o(2, 2, 1), o(1, 2, 1), o(2, 1, 1), o(0, 2, 1), o(2, 0, 1), r(366, 1), r(368, 1), o(14, 14, 4), r(370, 1), r(372, 1), r(374, 1), o(15, 11, 4), r(376, 1), o(13, 13, 4), o(10, 15, 4), o(15, 10, 4), o(11, 14, 4), o(14, 11, 4), o(12, 13, 4), o(13, 12, 4), o(9, 15, 4), o(15, 9, 4), o(14, 10, 4), o(11, 13, 4), o(13, 11, 4), o(8, 15, 4), o(15, 8, 4), o(12, 12, 4), o(9, 14, 4), o(14, 9, 4), o(7, 15, 4), o(15, 7, 4), o(10, 13, 4), o(13, 10, 4), o(11, 12, 4), o(6, 15, 4), r(378, 1), o(12, 11, 3), o(12, 11, 3), o(15, 6, 3), o(15, 6, 3), o(8, 14, 4), o(14, 8, 4), o(5, 15, 4), o(9, 13, 4), o(15, 5, 3), o(15, 5, 3), o(7, 14, 3), o(7, 14, 3), o(14, 7, 3), o(14, 7, 3), o(10, 12, 3), o(10, 12, 3), o(12, 10, 3), o(12, 10, 3), o(11, 11, 3), o(11, 11, 3), o(13, 9, 4), o(8, 13, 4), o(4, 15, 3), o(4, 15, 3), o(15, 4, 3), o(15, 4, 3), o(3, 15, 3), o(3, 15, 3), o(15, 3, 3), o(15, 3, 3), o(13, 8, 3), o(13, 8, 3), o(14, 6, 3), o(14, 6, 3), o(2, 15, 3), o(2, 15, 3), o(15, 2, 3), o(15, 2, 3), o(6, 14, 4), o(15, 0, 4), o(1, 15, 3), o(1, 15, 3), o(15, 1, 3), o(15, 1, 3), o(9, 12, 3), o(9, 12, 3), o(12, 9, 3), o(12, 9, 3), o(5, 14, 3), o(10, 11, 3), o(11, 10, 3), o(14, 5, 3), o(7, 13, 3), o(13, 7, 3), o(4, 14, 3), o(14, 4, 3), o(8, 12, 3), o(12, 8, 3), o(3, 14, 3), o(6, 13, 3), o(13, 6, 3), o(14, 3, 3), o(9, 11, 3), o(11, 9, 3), o(2, 14, 3), o(2, 14, 3), o(10, 10, 3), o(10, 10, 3), o(14, 2, 3), o(14, 2, 3), o(1, 14, 3), o(1, 14, 3), o(14, 1, 3), o(14, 1, 3), o(0, 14, 4), o(14, 0, 4), o(5, 13, 3), o(5, 13, 3), o(13, 5, 3), o(13, 5, 3), o(7, 12, 3), o(12, 7, 3), o(4, 13, 3), o(8, 11, 3), o(13, 4, 2), o(13, 4, 2), o(11, 8, 3), o(9, 10, 3), o(10, 9, 3), o(6, 12, 3), o(12, 6, 3), o(3, 13, 3), o(13, 3, 2), o(13, 3, 2), o(13, 2, 2), o(13, 2, 2), o(2, 13, 3), o(0, 13, 3), o(1, 13, 2), o(1, 13, 2), o(7, 11, 2), o(7, 11, 2), o(11, 7, 2), o(11, 7, 2), o(13, 1, 2), o(13, 1, 2), o(5, 12, 3), o(13, 0, 3), o(12, 5, 2), o(12, 5, 2), o(8, 10, 2), o(8, 10, 2), o(10, 8, 2), o(4, 12, 2), o(12, 4, 2), o(6, 11, 2), o(11, 6, 2), o(11, 6, 2), o(9, 9, 3), o(0, 12, 3), o(3, 12, 2), o(3, 12, 2), o(12, 3, 2), o(12, 3, 2), o(7, 10, 2), o(7, 10, 2), o(10, 7, 2), o(10, 7, 2), o(10, 6, 2), o(10, 6, 2), o(12, 0, 3), o(0, 11, 3), o(12, 2, 1), o(12, 2, 1), o(2, 12, 2), o(5, 11, 2), o(11, 5, 2), o(1, 12, 2), o(8, 9, 2), o(9, 8, 2), o(12, 1, 2), o(4, 11, 2), o(11, 4, 2), o(6, 10, 2), o(3, 11, 2), o(7, 9, 2), o(11, 3, 1), o(11, 3, 1), o(9, 7, 2), o(8, 8, 2), o(2, 11, 2), o(5, 10, 2), o(11, 2, 1), o(11, 2, 1), o(10, 5, 2), o(1, 11, 2), o(11, 1, 1), o(11, 1, 1), o(11, 0, 2), o(6, 9, 2), o(9, 6, 2), o(4, 10, 2), o(10, 4, 2), o(7, 8, 2), o(8, 7, 2), o(3, 10, 2), o(10, 3, 1), o(10, 3, 1), o(5, 9, 1), o(9, 5, 1), o(2, 10, 1), o(10, 2, 1), o(1, 10, 1), o(10, 1, 1), o(0, 10, 2), o(10, 0, 2), o(6, 8, 1), o(6, 8, 1), o(8, 6, 1), o(4, 9, 1), o(9, 4, 1), o(3, 9, 1), o(9, 3, 1), o(9, 3, 1), o(7, 7, 2), o(0, 9, 2), o(5, 8, 1), o(8, 5, 1), o(2, 9, 1), o(6, 7, 1), o(7, 6, 1), o(9, 2, 1), o(1, 9, 1), o(9, 0, 1), o(4, 8, 1), o(8, 4, 1), o(5, 7, 1), o(7, 5, 1), o(3, 8, 1), o(8, 3, 1), o(6, 6, 1), o(4, 7, 1), o(7, 4, 1), o(0, 8, 1), o(8, 0, 1), o(5, 6, 1), o(6, 5, 1), o(3, 7, 1), o(7, 3, 1), o(4, 6, 1), o(0, 7, 1), o(7, 0, 1), o(0, 6, 1), o(6, 0, 1), o(15, 15, 1), o(14, 15, 1), o(15, 14, 1), o(13, 15, 1), o(15, 13, 1), o(12, 15, 1), o(15, 12, 1), o(13, 14, 1), o(14, 13, 1), o(11, 15, 1), o(12, 14, 1), o(14, 12, 1), o(10, 14, 1), o(0, 15, 1)],
        w = [r(16, 4), r(32, 4), r(48, 4), r(64, 2), o(1, 1, 4), o(0, 1, 4), o(1, 0, 3), o(1, 0, 3), o(0, 0, 1), o(0, 0, 1), o(0, 0, 1), o(0, 0, 1), o(0, 0, 1), o(0, 0, 1), o(0, 0, 1), o(0, 0, 1), r(68, 3), r(76, 3), r(84, 2), o(15, 15, 4), r(88, 2), r(92, 1), r(94, 4), o(15, 2, 4), r(110, 1), o(1, 15, 4), o(15, 1, 4), r(112, 4), r(128, 4), r(144, 4), r(160, 4), r(176, 4), r(192, 4), r(208, 3), r(216, 3), r(224, 3), r(232, 3), r(240, 3), r(248, 3), r(256, 3), r(264, 2), r(268, 2), r(272, 1), r(274, 2), r(278, 2), r(282, 1), o(5, 1, 4), r(284, 1), r(286, 1), r(288, 1), r(290, 1), o(1, 4, 4), o(4, 1, 4), r(292, 1), o(2, 3, 4), o(3, 2, 4), o(1, 3, 3), o(1, 3, 3), o(3, 1, 3), o(3, 1, 3), o(0, 3, 4), o(3, 0, 4), o(2, 2, 3), o(2, 2, 3), o(1, 2, 2), o(2, 1, 2), o(0, 2, 2), o(2, 0, 2), o(14, 15, 3), o(15, 14, 3), o(13, 15, 3), o(15, 13, 3), o(12, 15, 3), o(15, 12, 3), o(11, 15, 3), o(15, 11, 3), o(10, 15, 2), o(10, 15, 2), o(15, 10, 3), o(9, 15, 3), o(15, 9, 3), o(15, 8, 3), o(8, 15, 2), o(8, 15, 2), o(7, 15, 2), o(15, 7, 2), o(6, 15, 2), o(15, 6, 2), o(5, 15, 2), o(15, 5, 2), o(4, 15, 1), o(4, 15, 1), o(15, 4, 1), o(15, 3, 1), o(15, 0, 1), o(15, 0, 1), o(15, 0, 1), o(15, 0, 1), o(15, 0, 1), o(15, 0, 1), o(15, 0, 1), o(15, 0, 1), o(3, 15, 2), o(3, 15, 2), o(3, 15, 2), o(3, 15, 2), r(294, 4), r(310, 3), r(318, 3), r(326, 3), o(2, 15, 1), o(0, 15, 1), r(334, 2), r(338, 2), r(342, 2), r(346, 1), r(348, 2), r(352, 2), r(356, 1), r(358, 2), r(362, 2), r(366, 2), r(370, 2), o(14, 3, 4), r(374, 1), r(376, 1), r(378, 1), r(380, 1), r(382, 1), r(384, 1), r(386, 1), o(0, 13, 4), r(388, 1), r(390, 1), r(392, 1), o(3, 12, 4), r(394, 1), o(1, 12, 4), o(12, 0, 4), r(396, 1), o(14, 2, 3), o(14, 2, 3), o(2, 14, 4), o(1, 14, 4), o(13, 3, 4), o(2, 13, 4), o(13, 2, 4), o(13, 1, 4), o(3, 11, 4), r(398, 1), o(1, 13, 3), o(1, 13, 3), o(12, 4, 4), o(6, 11, 4), o(12, 3, 4), o(10, 7, 4), o(2, 12, 3), o(2, 12, 3), o(12, 2, 4), o(11, 5, 4), o(12, 1, 4), o(0, 12, 4), o(4, 11, 4), o(11, 4, 4), o(6, 10, 4), o(10, 6, 4), o(11, 3, 3), o(11, 3, 3), o(5, 10, 4), o(10, 5, 4), o(2, 11, 3), o(2, 11, 3), o(11, 2, 3), o(11, 2, 3), o(1, 11, 3), o(1, 11, 3), o(11, 1, 3), o(11, 1, 3), o(0, 11, 4), o(11, 0, 4), o(6, 9, 4), o(9, 6, 4), o(4, 10, 4), o(10, 4, 4), o(7, 8, 4), o(8, 7, 4), o(10, 3, 3), o(10, 3, 3), o(3, 10, 4), o(5, 9, 4), o(2, 10, 3), o(2, 10, 3), o(9, 5, 4), o(6, 8, 4), o(10, 1, 3), o(10, 1, 3), o(8, 6, 4), o(7, 7, 4), o(9, 4, 3), o(9, 4, 3), o(4, 9, 4), o(5, 7, 4), o(6, 7, 3), o(6, 7, 3), o(10, 2, 2), o(10, 2, 2), o(10, 2, 2), o(10, 2, 2), o(1, 10, 2), o(1, 10, 2), o(0, 10, 3), o(10, 0, 3), o(3, 9, 3), o(9, 3, 3), o(5, 8, 3), o(8, 5, 3), o(2, 9, 2), o(2, 9, 2), o(9, 2, 2), o(9, 2, 2), o(7, 6, 3), o(0, 9, 3), o(1, 9, 2), o(1, 9, 2), o(9, 1, 2), o(9, 1, 2), o(9, 0, 3), o(4, 8, 3), o(8, 4, 3), o(7, 5, 3), o(3, 8, 3), o(8, 3, 3), o(6, 6, 3), o(2, 8, 3), o(8, 2, 2), o(8, 2, 2), o(4, 7, 3), o(7, 4, 3), o(1, 8, 2), o(1, 8, 2), o(8, 1, 2), o(8, 1, 2), o(8, 0, 2), o(8, 0, 2), o(0, 8, 3), o(5, 6, 3), o(3, 7, 2), o(3, 7, 2), o(7, 3, 2), o(7, 3, 2), o(6, 5, 3), o(4, 6, 3), o(2, 7, 2), o(2, 7, 2), o(7, 2, 2), o(7, 2, 2), o(6, 4, 3), o(5, 5, 3), o(0, 7, 2), o(0, 7, 2), o(1, 7, 1), o(1, 7, 1), o(1, 7, 1), o(1, 7, 1), o(7, 1, 1), o(7, 1, 1), o(7, 0, 2), o(3, 6, 2), o(6, 3, 2), o(4, 5, 2), o(5, 4, 2), o(2, 6, 2), o(6, 2, 1), o(1, 6, 1), o(6, 1, 1), o(6, 1, 1), o(0, 6, 2), o(6, 0, 2), o(5, 3, 1), o(5, 3, 1), o(3, 5, 2), o(4, 4, 2), o(2, 5, 1), o(5, 2, 1), o(1, 5, 1), o(0, 5, 1), o(3, 4, 1), o(4, 3, 1), o(5, 0, 1), o(2, 4, 1), o(4, 2, 1), o(3, 3, 1), o(0, 4, 1), o(4, 0, 1), o(12, 14, 4), r(400, 1), o(13, 14, 3), o(13, 14, 3), o(14, 9, 3), o(14, 9, 3), o(14, 10, 4), o(13, 9, 4), o(14, 14, 2), o(14, 14, 2), o(14, 14, 2), o(14, 14, 2), o(14, 13, 3), o(14, 13, 3), o(14, 11, 3), o(14, 11, 3), o(11, 14, 2), o(11, 14, 2), o(12, 13, 2), o(12, 13, 2), o(13, 12, 3), o(13, 11, 3), o(10, 14, 2), o(10, 14, 2), o(12, 12, 2), o(12, 12, 2), o(10, 13, 3), o(13, 10, 3), o(7, 14, 3), o(10, 12, 3), o(12, 10, 2), o(12, 10, 2), o(12, 9, 3), o(7, 13, 3), o(5, 14, 2), o(5, 14, 2), o(11, 13, 1), o(11, 13, 1), o(11, 13, 1), o(11, 13, 1), o(9, 14, 1), o(9, 14, 1), o(11, 12, 2), o(12, 11, 2), o(8, 14, 2), o(14, 8, 2), o(9, 13, 2), o(14, 7, 2), o(11, 11, 2), o(8, 13, 2), o(13, 8, 2), o(6, 14, 2), o(14, 6, 1), o(9, 12, 1), o(10, 11, 2), o(11, 10, 2), o(14, 5, 2), o(13, 7, 2), o(4, 14, 1), o(4, 14, 1), o(14, 4, 2), o(8, 12, 2), o(12, 8, 1), o(3, 14, 1), o(6, 13, 1), o(6, 13, 1), o(13, 6, 2), o(9, 11, 2), o(11, 9, 2), o(10, 10, 2), o(14, 1, 1), o(14, 1, 1), o(13, 4, 1), o(13, 4, 1), o(11, 8, 2), o(10, 9, 2), o(7, 11, 1), o(7, 11, 1), o(11, 7, 2), o(13, 0, 2), o(0, 14, 1), o(14, 0, 1), o(5, 13, 1), o(13, 5, 1), o(7, 12, 1), o(12, 7, 1), o(4, 13, 1), o(8, 11, 1), o(9, 10, 1), o(6, 12, 1), o(12, 6, 1), o(3, 13, 1), o(5, 12, 1), o(12, 5, 1), o(8, 10, 1), o(10, 8, 1), o(9, 9, 1), o(4, 12, 1), o(11, 6, 1), o(7, 10, 1), o(5, 11, 1), o(8, 9, 1), o(9, 8, 1), o(7, 9, 1), o(9, 7, 1), o(8, 8, 1), o(14, 12, 1), o(13, 13, 1)],
        T = [r(16, 4), r(32, 4), r(48, 4), o(15, 15, 4), r(64, 4), r(80, 4), r(96, 4), r(112, 4), r(128, 4), r(144, 4), r(160, 3), r(168, 2), o(1, 1, 4), o(0, 1, 4), o(1, 0, 4), o(0, 0, 4), o(14, 15, 4), o(15, 14, 4), o(13, 15, 4), o(15, 13, 4), o(12, 15, 4), o(15, 12, 4), o(11, 15, 4), o(15, 11, 4), o(15, 10, 3), o(15, 10, 3), o(10, 15, 4), o(9, 15, 4), o(15, 9, 3), o(15, 9, 3), o(15, 8, 3), o(15, 8, 3), o(8, 15, 4), o(7, 15, 4), o(15, 7, 3), o(15, 7, 3), o(6, 15, 3), o(6, 15, 3), o(15, 6, 3), o(15, 6, 3), o(5, 15, 3), o(5, 15, 3), o(15, 5, 3), o(15, 5, 3), o(4, 15, 3), o(4, 15, 3), o(15, 4, 3), o(15, 4, 3), o(3, 15, 3), o(3, 15, 3), o(15, 3, 3), o(15, 3, 3), o(2, 15, 3), o(2, 15, 3), o(15, 2, 3), o(15, 2, 3), o(15, 1, 3), o(15, 1, 3), o(1, 15, 4), o(15, 0, 4), r(172, 3), r(180, 3), r(188, 3), r(196, 3), r(204, 4), r(220, 3), r(228, 3), r(236, 3), r(244, 2), r(248, 2), r(252, 2), r(256, 2), r(260, 2), r(264, 2), r(268, 2), r(272, 2), r(276, 2), r(280, 3), r(288, 2), r(292, 2), r(296, 2), r(300, 3), r(308, 2), r(312, 3), r(320, 1), r(322, 2), r(326, 2), r(330, 1), r(332, 2), r(336, 1), r(338, 1), r(340, 1), r(342, 1), r(344, 1), r(346, 1), r(348, 1), r(350, 1), r(352, 1), r(354, 1), r(356, 1), r(358, 1), r(360, 1), r(362, 1), r(364, 1), r(366, 1), r(368, 1), r(370, 2), r(374, 1), r(376, 2), o(7, 3, 4), r(380, 1), o(7, 2, 4), o(4, 6, 4), o(6, 4, 4), o(5, 5, 4), o(7, 1, 4), o(3, 6, 4), o(6, 3, 4), o(4, 5, 4), o(5, 4, 4), o(2, 6, 4), o(6, 2, 4), o(1, 6, 4), o(6, 1, 4), r(382, 1), o(3, 5, 4), o(5, 3, 4), o(4, 4, 4), o(2, 5, 4), o(5, 2, 4), o(1, 5, 4), r(384, 1), o(5, 1, 3), o(5, 1, 3), o(3, 4, 4), o(4, 3, 4), o(2, 4, 3), o(2, 4, 3), o(4, 2, 3), o(4, 2, 3), o(3, 3, 3), o(3, 3, 3), o(1, 4, 3), o(1, 4, 3), o(4, 1, 3), o(4, 1, 3), o(0, 4, 4), o(4, 0, 4), o(2, 3, 3), o(2, 3, 3), o(3, 2, 3), o(3, 2, 3), o(1, 3, 2), o(1, 3, 2), o(1, 3, 2), o(1, 3, 2), o(3, 1, 2), o(3, 1, 2), o(3, 1, 2), o(3, 1, 2), o(0, 3, 3), o(3, 0, 3), o(2, 2, 2), o(2, 2, 2), o(1, 2, 1), o(1, 2, 1), o(1, 2, 1), o(1, 2, 1), o(2, 1, 1), o(2, 1, 1), o(0, 2, 2), o(2, 0, 2), o(0, 15, 1), o(0, 15, 1), o(0, 15, 1), o(0, 15, 1), o(14, 14, 3), o(13, 14, 3), o(14, 13, 3), o(12, 14, 3), o(14, 12, 3), o(13, 13, 3), o(11, 14, 3), o(14, 11, 3), o(12, 13, 3), o(13, 12, 3), o(10, 14, 3), o(14, 10, 3), o(11, 13, 3), o(13, 11, 3), o(12, 12, 3), o(9, 14, 3), o(14, 9, 3), o(10, 13, 3), o(13, 10, 3), o(11, 12, 3), o(12, 11, 3), o(8, 14, 3), o(14, 8, 3), o(9, 13, 3), o(13, 9, 3), o(7, 14, 3), o(14, 7, 3), o(10, 12, 3), o(12, 10, 3), o(12, 10, 3), o(11, 11, 3), o(11, 11, 3), o(8, 13, 3), o(8, 13, 3), o(13, 8, 3), o(13, 8, 3), o(0, 14, 4), o(14, 0, 4), o(0, 13, 3), o(0, 13, 3), o(14, 6, 2), o(14, 6, 2), o(14, 6, 2), o(14, 6, 2), o(6, 14, 3), o(9, 12, 3), o(12, 9, 2), o(12, 9, 2), o(5, 14, 2), o(5, 14, 2), o(11, 10, 2), o(11, 10, 2), o(14, 5, 2), o(14, 5, 2), o(10, 11, 3), o(7, 13, 3), o(13, 7, 2), o(13, 7, 2), o(14, 4, 2), o(14, 4, 2), o(8, 12, 2), o(8, 12, 2), o(12, 8, 2), o(12, 8, 2), o(4, 14, 3), o(2, 14, 3), o(3, 14, 2), o(3, 14, 2), o(6, 13, 2), o(13, 6, 2), o(14, 3, 2), o(9, 11, 2), o(11, 9, 2), o(10, 10, 2), o(14, 2, 2), o(1, 14, 2), o(14, 1, 2), o(5, 13, 2), o(13, 5, 2), o(7, 12, 2), o(12, 7, 2), o(4, 13, 2), o(8, 11, 2), o(11, 8, 2), o(13, 4, 2), o(9, 10, 2), o(10, 9, 2), o(6, 12, 2), o(12, 6, 2), o(3, 13, 2), o(13, 3, 2), o(2, 13, 2), o(13, 2, 2), o(1, 13, 2), o(7, 11, 2), o(11, 7, 2), o(13, 1, 2), o(5, 12, 2), o(12, 5, 2), o(8, 10, 2), o(10, 8, 2), o(9, 9, 2), o(4, 12, 2), o(12, 4, 2), o(6, 11, 2), o(6, 11, 2), o(11, 6, 2), o(11, 6, 2), o(13, 0, 3), o(0, 12, 3), o(3, 12, 2), o(3, 12, 2), o(12, 3, 2), o(7, 10, 2), o(10, 7, 2), o(2, 12, 2), o(12, 2, 2), o(5, 11, 2), o(11, 5, 2), o(1, 12, 2), o(8, 9, 2), o(9, 8, 2), o(12, 1, 2), o(4, 11, 2), o(12, 0, 3), o(0, 11, 3), o(3, 11, 2), o(3, 11, 2), o(11, 0, 3), o(0, 10, 3), o(1, 10, 2), o(1, 10, 2), o(11, 4, 1), o(11, 4, 1), o(6, 10, 2), o(10, 6, 2), o(7, 9, 2), o(7, 9, 2), o(9, 7, 2), o(9, 7, 2), o(10, 0, 3), o(0, 9, 3), o(9, 0, 2), o(9, 0, 2), o(11, 3, 1), o(8, 8, 1), o(2, 11, 2), o(5, 10, 2), o(11, 2, 1), o(11, 2, 1), o(10, 5, 2), o(1, 11, 2), o(11, 1, 2), o(6, 9, 2), o(9, 6, 1), o(10, 4, 1), o(4, 10, 2), o(7, 8, 2), o(8, 7, 1), o(8, 7, 1), o(3, 10, 1), o(10, 3, 1), o(5, 9, 1), o(9, 5, 1), o(2, 10, 1), o(10, 2, 1), o(10, 1, 1), o(6, 8, 1), o(8, 6, 1), o(7, 7, 1), o(4, 9, 1), o(9, 4, 1), o(3, 9, 1), o(9, 3, 1), o(5, 8, 1), o(8, 5, 1), o(2, 9, 1), o(6, 7, 1), o(7, 6, 1), o(9, 2, 1), o(1, 9, 1), o(9, 1, 1), o(4, 8, 1), o(8, 4, 1), o(5, 7, 1), o(7, 5, 1), o(3, 8, 1), o(8, 3, 1), o(6, 6, 1), o(2, 8, 1), o(8, 2, 1), o(1, 8, 1), o(4, 7, 1), o(7, 4, 1), o(8, 1, 1), o(8, 1, 1), o(0, 8, 2), o(8, 0, 2), o(5, 6, 1), o(6, 5, 1), o(1, 7, 1), o(1, 7, 1), o(0, 7, 2), o(7, 0, 2), o(3, 7, 1), o(2, 7, 1), o(0, 6, 1), o(6, 0, 1), o(0, 5, 1), o(5, 0, 1)];
    e.huff_quad_table = [s, n], e.huff_pair_table = [new i(l, 0, 0), new i(u, 0, 3), new i(h, 0, 3), new i(c, 0, 3), null, new i(f, 0, 3), new i(d, 0, 4), new i(p, 0, 4), new i(m, 0, 4), new i(v, 0, 4), new i(g, 0, 4), new i(y, 0, 4), new i(_, 0, 4), new i(b, 0, 4), null, new i(k, 0, 4), new i(w, 1, 4), new i(w, 2, 4), new i(w, 3, 4), new i(w, 4, 4), new i(w, 6, 4), new i(w, 8, 4), new i(w, 10, 4), new i(w, 13, 4), new i(T, 4, 4), new i(T, 5, 4), new i(T, 6, 4), new i(T, 7, 4), new i(T, 8, 4), new i(T, 9, 4), new i(T, 11, 4), new i(T, 13, 4)]
}, function(t, e) {
    function i() {
        this.tmp_imdct36 = new Float64Array(18), this.tmp_dctIV = new Float64Array(18), this.tmp_sdctII = new Float64Array(9)
    }

    function r(t, e, i) {
        var r, a, s, n, p, m, v, g, y, _, b, k, w, T, S, I, C, P, x, A, O, E, U, F, L, R, M, D, B, N, $, K, z, G;
        r = t[3] + t[5], a = t[3] - t[5], s = t[6] + t[2], n = t[6] - t[2], p = t[1] + t[7], m = t[1] - t[7], v = t[8] + t[0], g = t[8] - t[0], y = r + s, _ = r - s, b = r - v, k = s - v, w = y + v, T = a - n, S = T + g, I = n + g, C = a - g, P = a + n, M = P * -h, D = C * -o, B = I * -c, N = S * -l, $ = m * -l, K = k * -d, z = b * -f, G = _ * -u, x = t[4] + p, A = 2 * t[4] - p, O = A + K, E = A - K, U = A + z, F = $ + B, L = $ - B, R = $ + D, e[i + 0] = x + w, e[i + 2] = M - R, e[i + 4] = G - O, e[i + 6] = N, e[i + 8] = E - z, e[i + 10] = L - D, e[i + 12] = w - 2 * x, e[i + 14] = F + M, e[i + 16] = U + G
    }
    i.prototype.imdct36 = function(t, e) {
        var i = this.tmp_imdct36;
        this.dctIV(t, i);
        for (var r = 0; r < 9; ++r) e[r] = i[9 + r];
        for (var r = 9; r < 27; ++r) e[r] = -i[36 - (9 + r) - 1];
        for (var r = 27; r < 36; ++r) e[r] = -i[r - 27]
    };
    var a = [];
    for (n = 0; n < 18; n++) a[n] = 2 * Math.cos(Math.PI * (2 * n + 1) / 72);
    i.prototype.dctIV = function(t, e) {
        for (var i = this.tmp_dctIV, r = 0; r < 18; ++r) i[r] = t[r] * a[r];
        this.sdctII(i, e), e[0] /= 2;
        for (var r = 1; r < 18; ++r) e[r] = e[r] / 2 - e[r - 1]
    };
    for (var s = [], n = 0; n < 9; ++n) s[n] = 2 * Math.cos(Math.PI * (2 * n + 1) / 36);
    i.prototype.sdctII = function(t, e) {
        for (var i = this.tmp_sdctII, a = 0; a < 9; ++a) i[a] = t[a] + t[18 - a - 1];
        r(i, e, 0);
        for (var a = 0; a < 9; ++a) i[a] = (t[a] - t[18 - a - 1]) * s[a];
        r(i, e, 1);
        for (var a = 3; a < 18; a += 2) e[a] -= e[a - 2]
    };
    var o = 2 * Math.cos(1 * Math.PI / 18),
        l = 2 * Math.cos(3 * Math.PI / 18),
        u = 2 * Math.cos(4 * Math.PI / 18),
        h = 2 * Math.cos(5 * Math.PI / 18),
        c = 2 * Math.cos(7 * Math.PI / 18),
        f = 2 * Math.cos(8 * Math.PI / 18),
        d = 2 * Math.cos(16 * Math.PI / 18);
    i.S = [
        [.608761429, -.923879533, -.130526192, .991444861, -.382683432, -.79335334],
        [-.79335334, .382683432, .991444861, .130526192, -.923879533, -.608761429],
        [.382683432, -.923879533, .923879533, -.382683432, -.382683432, .923879533],
        [-.923879533, -.382683432, .382683432, .923879533, .923879533, .382683432],
        [.130526192, -.382683432, .608761429, -.79335334, .923879533, -.991444861],
        [-.991444861, -.923879533, -.79335334, -.608761429, -.382683432, -.130526192]
    ], t.exports = i
}, function(t, e, i) {
    function r() {
        this.allocation = o.makeArray([2, 32], Uint8Array), this.scalefactor = o.makeArray([2, 32], Uint8Array)
    }
    var a = i(20),
        s = i(5),
        n = i(12),
        o = i(9);
    n.layers[1] = r;
    const l = new Float32Array([1.33333333333333, 1.14285714285714, 1.06666666666667, 1.03225806451613, 1.01587301587302, 1.00787401574803, 1.00392156862745, 1.00195694716243, 1.00097751710655, 1.00048851978505, 1.0002442002442, 1.00012208521548, 1.00006103888177, 1.00003051850948]);
    r.prototype.decode = function(t, e) {
        var i = e.header,
            r = i.nchannels(),
            n = 32;
        i.mode === s.MODE.JOINT_STEREO && (i.flags |= s.FLAGS.I_STEREO, n = 4 + 4 * i.mode_extension), i.flags, s.FLAGS.PROTECTION;
        for (var o = this.allocation, l = 0; l < n; l++)
            for (var u = 0; u < r; u++) {
                var h = t.read(4);
                if (15 === h) throw new Error("forbidden bit allocation value");
                o[u][l] = h ? h + 1 : 0
            }
        for (var l = n; l < 32; l++) {
            var h = t.read(4);
            if (15 === h) throw new Error("forbidden bit allocation value");
            o[0][l] = o[1][l] = h ? h + 1 : 0
        }
        for (var c = this.scalefactor, l = 0; l < 32; l++)
            for (var u = 0; u < r; u++) o[u][l] && (c[u][l] = t.read(6));
        for (var f = 0; f < 12; f++) {
            for (var l = 0; l < n; l++)
                for (var u = 0; u < r; u++) {
                    var h = o[u][l];
                    e.sbsample[u][f][l] = h ? this.sample(t, h) * a.SF_TABLE[c[u][l]] : 0
                }
            for (var l = n; l < 32; l++) {
                var h = o[0][l];
                if (h)
                    for (var d = this.sample(t, h), u = 0; u < r; u++) e.sbsample[u][f][l] = d * a.SF_TABLE[c[u][l]];
                else
                    for (var u = 0; u < r; u++) e.sbsample[u][f][l] = 0
            }
        }
    }, r.prototype.sample = function(t, e) {
        var i = t.read(e);
        return i ^= 1 << e - 1, i |= -(i & 1 << e - 1), i /= 1 << e - 1, (i += 1 >> e - 1) * l[e - 2]
    }, t.exports = r
}, function(t, e, i) {
    function r() {
        this.samples = new Float64Array(3), this.allocation = o.makeArray([2, 32], Uint8Array), this.scfsi = o.makeArray([2, 32], Uint8Array), this.scalefactor = o.makeArray([2, 32, 3], Uint8Array)
    }
    var a = i(20),
        s = i(5),
        n = i(12),
        o = i(9);
    n.layers[2] = r;
    const l = [{
            sblimit: 27,
            offsets: [7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0]
        }, {
            sblimit: 30,
            offsets: [7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0]
        }, {
            sblimit: 8,
            offsets: [5, 5, 2, 2, 2, 2, 2, 2]
        }, {
            sblimit: 12,
            offsets: [5, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
        }, {
            sblimit: 30,
            offsets: [4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        }],
        u = [{
            nbal: 2,
            offset: 0
        }, {
            nbal: 2,
            offset: 3
        }, {
            nbal: 3,
            offset: 3
        }, {
            nbal: 3,
            offset: 1
        }, {
            nbal: 4,
            offset: 2
        }, {
            nbal: 4,
            offset: 3
        }, {
            nbal: 4,
            offset: 4
        }, {
            nbal: 4,
            offset: 5
        }],
        h = [
            [0, 1, 16],
            [0, 1, 2, 3, 4, 5, 16],
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
            [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16],
            [0, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
        ],
        c = [{
            nlevels: 3,
            group: 2,
            bits: 5,
            C: 1.33333333333,
            D: .5
        }, {
            nlevels: 5,
            group: 3,
            bits: 7,
            C: 1.6,
            D: .5
        }, {
            nlevels: 7,
            group: 0,
            bits: 3,
            C: 1.14285714286,
            D: .25
        }, {
            nlevels: 9,
            group: 4,
            bits: 10,
            C: 1.77777777777,
            D: .5
        }, {
            nlevels: 15,
            group: 0,
            bits: 4,
            C: 1.06666666666,
            D: .125
        }, {
            nlevels: 31,
            group: 0,
            bits: 5,
            C: 1.03225806452,
            D: .0625
        }, {
            nlevels: 63,
            group: 0,
            bits: 6,
            C: 1.01587301587,
            D: .03125
        }, {
            nlevels: 127,
            group: 0,
            bits: 7,
            C: 1.00787401575,
            D: .015625
        }, {
            nlevels: 255,
            group: 0,
            bits: 8,
            C: 1.00392156863,
            D: .0078125
        }, {
            nlevels: 511,
            group: 0,
            bits: 9,
            C: 1.00195694716,
            D: .00390625
        }, {
            nlevels: 1023,
            group: 0,
            bits: 10,
            C: 1.00097751711,
            D: .001953125
        }, {
            nlevels: 2047,
            group: 0,
            bits: 11,
            C: 1.00048851979,
            D: .0009765625
        }, {
            nlevels: 4095,
            group: 0,
            bits: 12,
            C: 1.00024420024,
            D: .00048828125
        }, {
            nlevels: 8191,
            group: 0,
            bits: 13,
            C: 1.00012208522,
            D: .00024414063
        }, {
            nlevels: 16383,
            group: 0,
            bits: 14,
            C: 1.00006103888,
            D: .00012207031
        }, {
            nlevels: 32767,
            group: 0,
            bits: 15,
            C: 1.00003051851,
            D: 6103516e-11
        }, {
            nlevels: 65535,
            group: 0,
            bits: 16,
            C: 1.00001525902,
            D: 3051758e-11
        }];
    r.prototype.decode = function(t, e) {
        var i, r = e.header,
            n = r.nchannels();
        if (r.flags & s.FLAGS.LSF_EXT) i = 4;
        else if (r.flags & s.FLAGS.FREEFORMAT) i = 48e3 === r.samplerate ? 0 : 1;
        else {
            var o = r.bitrate;
            if (2 === n) o /= 2;
            else if (o > 192e3) throw new Error("bad bitrate/mode combination");
            i = o <= 48e3 ? 32e3 === r.samplerate ? 3 : 2 : o <= 8e4 ? 0 : 48e3 === r.samplerate ? 0 : 1
        }
        var f = l[i].sblimit,
            d = l[i].offsets,
            p = 32;
        r.mode === s.MODE.JOINT_STEREO && (r.flags |= s.FLAGS.I_STEREO, p = 4 + 4 * r.mode_extension), p > f && (p = f);
        for (var m = this.allocation, v = 0; v < p; v++)
            for (var g = u[d[v]].nbal, y = 0; y < n; y++) m[y][v] = t.read(g);
        for (var v = p; v < f; v++) {
            var g = u[d[v]].nbal;
            m[0][v] = m[1][v] = t.read(g)
        }
        for (var _ = this.scfsi, v = 0; v < f; v++)
            for (var y = 0; y < n; y++) m[y][v] && (_[y][v] = t.read(2));
        r.flags, s.FLAGS.PROTECTION;
        for (var b = this.scalefactor, v = 0; v < f; v++)
            for (var y = 0; y < n; y++)
                if (m[y][v]) {
                    switch (b[y][v][0] = t.read(6), _[y][v]) {
                        case 2:
                            b[y][v][2] = b[y][v][1] = b[y][v][0];
                            break;
                        case 0:
                            b[y][v][1] = t.read(6);
                        case 1:
                        case 3:
                            b[y][v][2] = t.read(6)
                    }
                    1 & _[y][v] && (b[y][v][1] = b[y][v][_[y][v] - 1])
                } for (var k = 0; k < 12; k++) {
            for (var v = 0; v < p; v++)
                for (var y = 0; y < n; y++)
                    if (i = m[y][v]) {
                        i = h[u[d[v]].offset][i - 1], this.decodeSamples(t, c[i]);
                        for (var w = a.SF_TABLE[b[y][v][k >> 2]], T = 0; T < 3; T++) e.sbsample[y][3 * k + T][v] = this.samples[T] * w
                    } else
                        for (var T = 0; T < 3; T++) e.sbsample[y][3 * k + T][v] = 0;
            for (var v = p; v < f; v++)
                if (i = m[0][v]) {
                    i = h[u[d[v]].offset][i - 1], this.decodeSamples(t, c[i]);
                    for (var y = 0; y < n; y++)
                        for (var w = a.SF_TABLE[b[y][v][k >> 2]], T = 0; T < 3; T++) e.sbsample[y][3 * k + T][v] = this.samples[T] * w
                } else
                    for (var y = 0; y < n; y++)
                        for (var T = 0; T < 3; T++) e.sbsample[y][3 * k + T][v] = 0;
            for (var y = 0; y < n; y++)
                for (var T = 0; T < 3; T++)
                    for (var v = f; v < 32; v++) e.sbsample[y][3 * k + T][v] = 0
        }
    }, r.prototype.decodeSamples = function(t, e) {
        var i = this.samples,
            r = e.group;
        if (r)
            for (var a = t.read(e.bits), s = e.nlevels, n = 0; n < 3; n++) i[n] = a % s, a = a / s | 0;
        else {
            r = e.bits;
            for (var n = 0; n < 3; n++) i[n] = t.read(r)
        }
        for (var n = 0; n < 3; n++) {
            var o = i[n] ^ 1 << r - 1;
            o |= -(o & 1 << r - 1), o /= 1 << r - 1, i[n] = (o + e.D) * e.C
        }
    }, t.exports = r
}, function(t, e, i) {
    function r() {
        this.main_data_begin = null, this.private_bits = null, this.gr = [new a, new a], this.scfsi = new Uint8Array(2)
    }

    function a() {
        this.ch = [new s, new s]
    }

    function s() {
        this.part2_3_length = null, this.big_values = null, this.global_gain = null, this.scalefac_compress = null, this.flags = null, this.block_type = null, this.table_select = new Uint8Array(3), this.subblock_gain = new Uint8Array(3), this.region0_count = null, this.region1_count = null, this.scalefac = new Uint8Array(39)
    }

    function n() {
        this.imdct = new d, this.si = new r, this.xr = [new Float64Array(576), new Float64Array(576)], this._exponents = new Int32Array(39), this.reqcache = new Float64Array(16), this.modes = new Int16Array(39), this.output = new Float64Array(36), this.tmp = p.makeArray([32, 3, 6]), this.tmp2 = new Float64Array(576)
    }
    var o = i(4),
        l = i(20),
        u = i(5),
        h = i(12),
        c = i(101),
        d = i(102),
        p = i(9);
    h.layers[3] = n, n.prototype.decode = function(t, e) {
        var i = e.header,
            r = 0,
            a = 0,
            s = i.nchannels(),
            n = i.flags & u.FLAGS.LSF_EXT ? 1 === s ? 9 : 17 : 1 === s ? 17 : 32;
        if (t.next_frame - t.nextByte() < n) throw t.md_len = 0, new Error("Bad frame length");
        i.flags, u.FLAGS.PROTECTION;
        var l = this.sideInfo(t, s, i.flags & u.FLAGS.LSF_EXT),
            h = l.si,
            c = (l.data_bitlen, l.priv_bitlen);
        i.flags |= c, i.private_bits |= h.private_bits;
        var f = t.copy();
        f.seek(8 * t.next_frame);
        var d = f.read(16);
        65506 == (65510 & d) && (0 == (1 & d) && f.advance(16), f.advance(16), r = f.read(8 & d ? 9 : 8));
        var p = t.next_frame - t.nextByte();
        r > h.main_data_begin + p && (r = 0);
        var m, a = h.main_data_begin + p - r,
            v = 0;
        if (0 === h.main_data_begin) m = t.stream, t.md_len = 0, v = a;
        else {
            if (h.main_data_begin > t.md_len) throw new Error("bad main_data_begin pointer");
            var g = t.md_len;
            if (a > h.main_data_begin) {
                if (t.md_len + a - h.main_data_begin > u.BUFFER_MDLEN) throw new Error("Assertion failed: (stream.md_len + md_len - si.main_data_begin <= MAD_MP3FrameHeader.BUFFER_MDLEN)");
                v = a - h.main_data_begin, this.memcpy(t.main_data, t.md_len, t.stream.stream, t.nextByte(), v), t.md_len += v
            }
            m = new o.Bitstream(o.Stream.fromBuffer(new o.Buffer(t.main_data))), m.advance(8 * (g - h.main_data_begin))
        }
        var y = p - v;
        if (this.decodeMainData(m, e, h, s), y >= r) this.memcpy(t.main_data, 0, t.stream.stream, t.next_frame - r, r), t.md_len = r;
        else {
            if (a < h.main_data_begin) {
                var _ = h.main_data_begin - a;
                _ + y > r && (_ = r - y), _ < t.md_len && (this.memcpy(t.main_data, 0, t.main_data, t.md_len - _, _), t.md_len = _)
            } else t.md_len = 0;
            this.memcpy(t.main_data, t.md_len, t.stream.stream, t.next_frame - y, y), t.md_len += y
        }
    }, n.prototype.memcpy = function(t, e, i, r, a) {
        var s;
        return s = i.subarray ? i.subarray(r, r + a) : i.peekBuffer(r - i.offset, a).data, t.set(s, e), t
    }, n.prototype.sideInfo = function(t, e, i) {
        var r = this.si,
            a = 0,
            s = i ? 1 === e ? 1 : 2 : 1 === e ? 5 : 3;
        r.main_data_begin = t.read(i ? 8 : 9), r.private_bits = t.read(s);
        var n = 1;
        if (!i) {
            n = 2;
            for (var o = 0; o < e; ++o) r.scfsi[o] = t.read(4)
        }
        for (var u = 0; u < n; u++)
            for (var h = r.gr[u], o = 0; o < e; o++) {
                var c = h.ch[o];
                if (c.part2_3_length = t.read(12), c.big_values = t.read(9), c.global_gain = t.read(8), c.scalefac_compress = t.read(i ? 9 : 4), a += c.part2_3_length, c.big_values > 288) throw new Error("bad big_values count");
                if (c.flags = 0, t.read(1)) {
                    if (c.block_type = t.read(2), 0 === c.block_type) throw new Error("reserved block_type");
                    if (!i && 2 === c.block_type && r.scfsi[o]) throw new Error("bad scalefactor selection info");
                    c.region0_count = 7, c.region1_count = 36, t.read(1) ? c.flags |= l.MIXED_BLOCK_FLAG : 2 === c.block_type && (c.region0_count = 8);
                    for (var f = 0; f < 2; f++) c.table_select[f] = t.read(5);
                    for (var f = 0; f < 3; f++) c.subblock_gain[f] = t.read(3)
                } else {
                    c.block_type = 0;
                    for (var f = 0; f < 3; f++) c.table_select[f] = t.read(5);
                    c.region0_count = t.read(4), c.region1_count = t.read(3)
                }
                c.flags |= t.read(i ? 2 : 3)
            }
        return {
            si: r,
            data_bitlen: a,
            priv_bitlen: s
        }
    }, n.prototype.decodeMainData = function(t, e, i, r) {
        var a = e.header,
            s = a.samplerate;
        a.flags & u.FLAGS.MPEG_2_5_EXT && (s *= 2);
        var n = (s >> 7 & 15) + (s >> 15 & 1) - 8;
        a.flags & u.FLAGS.MPEG_2_5_EXT && (n += 3);
        for (var o = a.flags & u.FLAGS.LSF_EXT ? 1 : 2, h = this.xr, c = 0; c < o; ++c) {
            for (var f = i.gr[c], d = [], p = 0, m = 0; m < r; ++m) {
                var v, g = f.ch[m];
                d[m] = l.SFBWIDTH_TABLE[n].l, 2 === g.block_type && (d[m] = g.flags & l.MIXED_BLOCK_FLAG ? l.SFBWIDTH_TABLE[n].m : l.SFBWIDTH_TABLE[n].s), v = a.flags & u.FLAGS.LSF_EXT ? this.scalefactors_lsf(t, g, 0 === m ? 0 : i.gr[1].ch[1], a.mode_extension) : this.scalefactors(t, g, i.gr[0].ch[m], 0 === c ? 0 : i.scfsi[m]), this.huffmanDecode(t, h[m], g, d[m], v)
            }
            a.mode === u.MODE.JOINT_STEREO && 0 !== a.mode_extension && this.stereo(h, i.gr, c, a, d[0]);
            for (var m = 0; m < r; m++) {
                var y, _, b, g = f.ch[m],
                    k = e.sbsample[m].slice(18 * c),
                    p = 0,
                    w = this.output;
                if (2 === g.block_type ? (this.reorder(h[m], g, d[m]), g.flags & l.MIXED_BLOCK_FLAG && this.aliasreduce(h[m], 36)) : this.aliasreduce(h[m], 576), 2 !== g.block_type || g.flags & l.MIXED_BLOCK_FLAG) {
                    var T = g.block_type;
                    g.flags & l.MIXED_BLOCK_FLAG && (T = 0);
                    for (var y = 0; y < 2; ++y, p += 18) this.imdct_l(h[m].subarray(p, p + 18), w, T), this.overlap(w, e.overlap[m][y], k, y)
                } else
                    for (var y = 0; y < 2; ++y, p += 18) this.imdct_s(h[m].subarray(p, p + 18), w), this.overlap(w, e.overlap[m][y], k, y);
                this.freqinver(k, 1);
                for (var _ = 576; _ > 36 && 0 === h[m][_ - 1];) --_;
                if (b = 32 - ((576 - _) / 18 << 0), 2 !== g.block_type)
                    for (var y = 2; y < b; ++y, p += 18) this.imdct_l(h[m].subarray(p, p + 18), w, g.block_type), this.overlap(w, e.overlap[m][y], k, y), 1 & y && this.freqinver(k, y);
                else
                    for (var y = 2; y < b; ++y, p += 18) this.imdct_s(h[m].subarray(p, p + 18), w), this.overlap(w, e.overlap[m][y], k, y), 1 & y && this.freqinver(k, y);
                for (var y = b; y < 32; ++y) this.overlap_z(e.overlap[m][y], k, y), 1 & y && this.freqinver(k, y)
            }
        }
    }, n.prototype.scalefactors = function(t, e, i, r) {
        var a, s = t.offset(),
            n = l.SFLEN_TABLE[e.scalefac_compress].slen1,
            o = l.SFLEN_TABLE[e.scalefac_compress].slen2;
        if (2 === e.block_type) {
            a = 0;
            for (var u = e.flags & l.MIXED_BLOCK_FLAG ? 17 : 18; u--;) e.scalefac[a++] = t.read(n);
            for (u = 18; u--;) e.scalefac[a++] = t.read(o);
            for (u = 3; u--;) e.scalefac[a++] = 0
        } else {
            if (8 & r)
                for (var a = 0; a < 6; ++a) e.scalefac[a] = i.scalefac[a];
            else
                for (var a = 0; a < 6; ++a) e.scalefac[a] = t.read(n);
            if (4 & r)
                for (var a = 6; a < 11; ++a) e.scalefac[a] = i.scalefac[a];
            else
                for (var a = 6; a < 11; ++a) e.scalefac[a] = t.read(n);
            if (2 & r)
                for (var a = 11; a < 16; ++a) e.scalefac[a] = i.scalefac[a];
            else
                for (var a = 11; a < 16; ++a) e.scalefac[a] = t.read(o);
            if (1 & r)
                for (var a = 16; a < 21; ++a) e.scalefac[a] = i.scalefac[a];
            else
                for (var a = 16; a < 21; ++a) e.scalefac[a] = t.read(o);
            e.scalefac[21] = 0
        }
        return t.offset() - s
    }, n.prototype.scalefactors_lsf = function(t, e, i, r) {
        var a, s = t.offset(),
            n = e.scalefac_compress,
            o = 2 === e.block_type ? e.flags & l.MIXED_BLOCK_FLAG ? 2 : 1 : 0,
            u = new Int32Array(4);
        if (r & l.I_STEREO && i) {
            n >>>= 1, n < 180 ? (u[0] = n / 36, u[1] = n % 36 / 6, u[2] = n % 36 % 6, u[3] = 0, a = l.NSFB_TABLE[3][o]) : n < 244 ? (n -= 180, u[0] = n % 64 >>> 4, u[1] = n % 16 >>> 2, u[2] = n % 4, u[3] = 0, a = l.NSFB_TABLE[4][o]) : (n -= 244, u[0] = n / 3, u[1] = n % 3, u[2] = 0, u[3] = 0, a = l.NSFB_TABLE[5][o]);
            for (var h = 0, c = 0; c < 4; ++c)
                for (var f = (1 << u[c]) - 1, d = 0; d < a[c]; ++d) {
                    var p = t.read(u[c]);
                    e.scalefac[h] = p, i.scalefac[h++] = p === f ? 1 : 0
                }
            for (; h < 39;) e.scalefac[h] = 0, i.scalefac[h++] = 0
        } else {
            n < 400 ? (u[0] = (n >>> 4) / 5, u[1] = (n >>> 4) % 5, u[2] = n % 16 >>> 2, u[3] = n % 4, a = l.NSFB_TABLE[0][o]) : n < 500 ? (n -= 400, u[0] = (n >>> 2) / 5, u[1] = (n >>> 2) % 5, u[2] = n % 4, u[3] = 0, a = l.NSFB_TABLE[1][o]) : (n -= 500, u[0] = n / 3, u[1] = n % 3, u[2] = 0, u[3] = 0, e.flags |= l.PREFLAG, a = l.NSFB_TABLE[2][o]);
            for (var h = 0, c = 0; c < 4; c++)
                for (var d = 0; d < a[c]; d++) e.scalefac[h++] = t.read(u[c]);
            for (; h < 39;) e.scalefac[h++] = 0
        }
        return t.offset() - s
    }, n.prototype.huffmanDecode = function(t, e, i, r, a) {
        var s = this._exponents,
            n = 0,
            o = i.part2_3_length - a;
        if (o < 0) throw new Error("bad audio data length");
        this.exponents(i, r, s);
        var h = t.copy();
        t.advance(o);
        var f = 8 - h.bitPosition;
        f += 24 - f + 7 & -8;
        var d = h.read(f);
        o -= f;
        var p = 0,
            m = 0,
            v = this.reqcache,
            g = p + r[n++],
            y = i.region0_count + 1,
            _ = c.huff_pair_table[i.table_select[m]],
            b = _.table,
            k = _.linbits,
            w = _.startbits;
        if (void 0 === b) throw new Error("bad Huffman table select");
        for (var T = 0, S = s[T++], I = 0, C = i.big_values; C-- && f + o > 0;) {
            if (p === g) {
                if (g += r[n++], 0 == --y && (y = 0 === m ? i.region1_count + 1 : 0, _ = c.huff_pair_table[i.table_select[++m]], b = _.table, k = _.linbits, w = _.startbits, void 0 === b)) throw new Error("bad Huffman table select");
                S !== s[T] && (S = s[T], I = 0), ++T
            }
            if (f < 21) {
                var P = 21 - f + 10 & -8;
                d = d << P | h.read(P), f += P, o -= P
            }
            for (var x = w, A = b[d >> f - x & (1 << x) - 1]; !A.final;) f -= x, x = A.ptr.bits, A = b[A.ptr.offset + (d >> f - x & (1 << x) - 1)];
            if (f -= A.value.hlen, k) {
                var O = A.value.x,
                    E = !1;
                switch (O) {
                    case 0:
                        e[p] = 0;
                        break;
                    case 15:
                        f < k + 2 && (d = d << 16 | h.read(16), f += 16, o -= 16), O += d >> f - k & (1 << k) - 1, f -= k, F = this.requantize(O, S), E = !0;
                        break;
                    default:
                        I & 1 << O ? F = v[O] : (I |= 1 << O, F = v[O] = this.requantize(O, S)), E = !0
                }
                E && (e[p] = d & 1 << f-- - 1 ? -F : F), O = A.value.y;
                var U = !1;
                switch (O) {
                    case 0:
                        e[p + 1] = 0;
                        break;
                    case 15:
                        f < k + 1 && (d = d << 16 | h.read(16), f += 16, o -= 16), O += d >> f - k & (1 << k) - 1, f -= k, F = this.requantize(O, S), U = !0;
                        break;
                    default:
                        I & 1 << O ? F = v[O] : (I |= 1 << O, v[O] = this.requantize(O, S), F = v[O]), U = !0
                }
                U && (e[p + 1] = d & 1 << f-- - 1 ? -F : F)
            } else {
                var O = A.value.x;
                0 === O ? e[p] = 0 : (I & 1 << O ? F = v[O] : (I |= 1 << O, F = v[O] = this.requantize(O, S)), e[p] = d & 1 << f-- - 1 ? -F : F), O = A.value.y, 0 === O ? e[p + 1] = 0 : (I & 1 << O ? F = v[O] : (I |= 1 << O, F = v[O] = this.requantize(O, S)), e[p + 1] = d & 1 << f-- - 1 ? -F : F)
            }
            p += 2
        }
        if (f + o < 0) throw new Error("Huffman data overrun");
        for (var b = c.huff_quad_table[i.flags & l.COUNT1TABLE_SELECT], F = this.requantize(1, S); f + o > 0 && p <= 572;) {
            f < 10 && (d = d << 16 | h.read(16), f += 16, o -= 16);
            var L = b[d >> f - 4 & 15];
            L.final || (f -= 4, L = b[L.ptr.offset + (d >> f - L.ptr.bits & (1 << L.ptr.bits) - 1)]), f -= L.value.hlen, p === g && (g += r[n++], S !== s[T] && (S = s[T], F = this.requantize(1, S)), ++T), e[p] = L.value.v ? d & 1 << f-- - 1 ? -F : F : 0, e[p + 1] = L.value.w ? d & 1 << f-- - 1 ? -F : F : 0, p += 2, p === g && (g += r[n++], S !== s[T] && (S = s[T], F = this.requantize(1, S)), ++T), e[p] = L.value.x ? d & 1 << f-- - 1 ? -F : F : 0, e[p + 1] = L.value.y ? d & 1 << f-- - 1 ? -F : F : 0, p += 2, f + o < 0 && (p -= 4)
        }
        if (-o > 8 * u.BUFFER_GUARD) throw new Error("assertion failed: (-bits_left <= MP3FrameHeader.BUFFER_GUARD * CHAR_BIT)");
        for (; p < 576;) e[p] = 0, e[p + 1] = 0, p += 2
    }, n.prototype.requantize = function(t, e) {
        var i = e % 4 >> 0;
        e = e / 4 >> 0;
        var r = Math.pow(t, 4 / 3);
        return r *= Math.pow(2, e / 4), i && (r *= Math.pow(2, i / 4)), e < 0 && (r /= Math.pow(2, .75 * -e)), r
    }, n.prototype.exponents = function(t, e, i) {
        var r = t.global_gain - 210,
            a = t.flags & l.SCALEFAC_SCALE ? 2 : 1;
        if (2 === t.block_type) {
            var s = 0,
                n = 0;
            if (t.flags & l.MIXED_BLOCK_FLAG)
                for (var o = t.flags & l.PREFLAG ? -1 : 0; n < 36;) i[s] = r - (t.scalefac[s] + (l.PRETAB[s] & o) << a), n += e[s++];
            for (var u = r - 8 * t.subblock_gain[0], h = r - 8 * t.subblock_gain[1], c = r - 8 * t.subblock_gain[2]; n < 576;) i[s + 0] = u - (t.scalefac[s + 0] << a), i[s + 1] = h - (t.scalefac[s + 1] << a), i[s + 2] = c - (t.scalefac[s + 2] << a), n += 3 * e[s], s += 3
        } else if (t.flags & l.PREFLAG)
            for (var s = 0; s < 22; s++) i[s] = r - (t.scalefac[s] + l.PRETAB[s] << a);
        else
            for (var s = 0; s < 22; s++) i[s] = r - (t.scalefac[s] << a)
    }, n.prototype.stereo = function(t, e, i, r, a) {
        var s, n, o, h, c = e[i],
            f = this.modes;
        if (c.ch[0].block_type !== c.ch[1].block_type || (c.ch[0].flags & l.MIXED_BLOCK_FLAG) != (c.ch[1].flags & l.MIXED_BLOCK_FLAG)) throw new Error("incompatible stereo block_type");
        for (var h = 0; h < 39; h++) f[h] = r.mode_extension;
        if (r.mode_extension & l.I_STEREO) {
            var d = c.ch[1],
                p = t[1];
            if (r.flags |= u.FLAGS.tables.I_STEREO, 2 === d.block_type) {
                var m, v, g, y, _ = new Uint32Array(3);
                if (m = v = g = _[0] = _[1] = _[2] = 0, s = n = 0, d.flags & l.MIXED_BLOCK_FLAG) {
                    for (; n < 36;) {
                        o = a[s++];
                        for (var h = 0; h < o; ++h)
                            if (p[h]) {
                                m = s;
                                break
                            } p += o, n += o
                    }
                    v = s
                }
                for (var y = 0; n < 576;) {
                    for (o = a[s++], h = 0; h < o; ++h)
                        if (p[h]) {
                            g = _[y] = s;
                            break
                        } p += o, n += o, y = (y + 1) % 3
                }
                for (g && (m = v), h = 0; h < m; ++h) f[h] = r.mode_extension & ~l.I_STEREO;
                for (y = 0, h = v; h < g; ++h) h < _[y] && (f[h] = r.mode_extension & ~l.I_STEREO), y = (y + 1) % 3
            } else {
                var _ = 0;
                for (s = n = 0; n < 576; n += o) {
                    for (o = a[s++], h = 0; h < o; ++h)
                        if (p[h]) {
                            _ = s;
                            break
                        } p += o
                }
                for (h = 0; h < _; ++h) f[h] = r.mode_extension & ~l.I_STEREO
            }
            if (r.flags & u.FLAGS.LSF_EXT) {
                var b = e[i + 1].ch[1].scalefac,
                    k = IS_Ltables.SF_TABLE[1 & d.scalefac_compress];
                for (s = n = 0; n < 576; ++s, n += o)
                    if (o = a[s], f[s] & l.I_STEREO)
                        if (b[s]) f[s] &= ~l.I_STEREO;
                        else
                            for (is_pos = d.scalefac[s], h = 0; h < o; ++h) {
                                var w = t[0][n + h];
                                if (0 === is_pos) t[1][n + h] = w;
                                else {
                                    var T = w * k[(is_pos - 1) / 2];
                                    1 & is_pos ? (t[0][n + h] = T, t[1][n + h] = w) : t[1][n + h] = T
                                }
                            }
            } else
                for (s = n = 0; n < 576; ++s, n += o)
                    if (o = a[s], f[s] & l.I_STEREO)
                        if (is_pos = d.scalefac[s], is_pos >= 7) f[s] &= ~l.I_STEREO;
                        else
                            for (h = 0; h < o; ++h) {
                                var w = t[0][n + h];
                                t[0][n + h] = w * l.IS_TABLE[is_pos], t[1][n + h] = w * l.IS_TABLE[6 - is_pos]
                            }
        }
        if (r.mode_extension & l.MS_STEREO) {
            r.flags |= l.MS_STEREO;
            var S = l.ROOT_TABLE[1];
            for (s = n = 0; n < 576; ++s, n += o)
                if (o = a[s], f[s] === l.MS_STEREO)
                    for (h = 0; h < o; ++h) {
                        var I = t[0][n + h],
                            C = t[1][n + h];
                        t[0][n + h] = (I + C) * S, t[1][n + h] = (I - C) * S
                    }
        }
    }, n.prototype.aliasreduce = function(t, e) {
        for (var i = 18; i < e; i += 18)
            for (var r = 0; r < 8; ++r) {
                var a = t[i - r - 1],
                    s = t[i + r];
                t[i - r - 1] = a * l.CS[r] - s * l.CA[r], t[i + r] = s * l.CS[r] + a * l.CA[r]
            }
    }, n.prototype.imdct_l = function(t, e, i) {
        switch (this.imdct.imdct36(t, e), i) {
            case 0:
                for (var r = 0; r < 36; ++r) e[r] = e[r] * l.WINDOW_L[r];
                break;
            case 1:
                for (var r = 0; r < 18; ++r) e[r] = e[r] * l.WINDOW_L[r];
                for (var r = 24; r < 30; ++r) e[r] = e[r] * l.WINDOW_S[r - 18];
                for (var r = 30; r < 36; ++r) e[r] = 0;
                break;
            case 3:
                for (var r = 0; r < 6; ++r) e[r] = 0;
                for (var r = 6; r < 12; ++r) e[r] = e[r] * l.WINDOW_S[r - 6];
                for (var r = 18; r < 36; ++r) e[r] = e[r] * l.WINDOW_L[r]
        }
    }, n.prototype.imdct_s = function(t, e) {
        for (var i, r, a = 0, s = 0, n = new Float64Array(36), o = 0; o < 3; ++o) {
            for (var u = 0, h = 0; h < 3; ++h) r = t[s + 0] * d.S[u][0] + t[s + 1] * d.S[u][1] + t[s + 2] * d.S[u][2] + t[s + 3] * d.S[u][3] + t[s + 4] * d.S[u][4] + t[s + 5] * d.S[u][5], n[a + h + 0] = r, n[a + 5 - h] = -n[a + h + 0], ++u, r = t[s + 0] * d.S[u][0] + t[s + 1] * d.S[u][1] + t[s + 2] * d.S[u][2] + t[s + 3] * d.S[u][3] + t[s + 4] * d.S[u][4] + t[s + 5] * d.S[u][5], n[a + h + 6] = r, n[a + 11 - h] = n[a + h + 6], ++u;
            a += 12, s += 6
        }
        a = 0;
        for (var i = 0, h = 0; h < 6; ++h) e[h + 0] = 0, e[h + 6] = n[a + 0 + 0] * l.WINDOW_S[i + 0], r = n[a + 0 + 6] * l.WINDOW_S[i + 6] + n[a + 12 + 0] * l.WINDOW_S[i + 0], e[h + 12] = r, r = n[a + 12 + 6] * l.WINDOW_S[i + 6] + n[a + 24 + 0] * l.WINDOW_S[i + 0], e[h + 18] = r, e[h + 24] = n[a + 24 + 6] * l.WINDOW_S[i + 6], e[h + 30] = 0, ++a, ++i
    }, n.prototype.overlap = function(t, e, i, r) {
        for (var a = 0; a < 18; ++a) i[a][r] = t[a] + e[a], e[a] = t[a + 18]
    }, n.prototype.freqinver = function(t, e) {
        for (var i = 1; i < 18; i += 2) t[i][e] = -t[i][e]
    }, n.prototype.overlap_z = function(t, e, i) {
        for (var r = 0; r < 18; ++r) e[r][i] = t[r], t[r] = 0
    }, n.prototype.reorder = function(t, e, i) {
        var r = 0,
            a = this.tmp,
            s = new Uint32Array(3),
            n = new Uint32Array(3),
            o = 0;
        if (e.flags & l.MIXED_BLOCK_FLAG)
            for (var o = 2, u = 0; u < 36;) u += i[r++];
        for (var h = 0; h < 3; ++h) s[h] = o, n[h] = 0;
        f = i[r++], h = 0;
        for (var u = 18 * o; u < 576; ++u) 0 == f-- && (f = i[r++] - 1, h = (h + 1) % 3), a[s[h]][h][n[h]++] = t[u], 6 === n[h] && (n[h] = 0, ++s[h]);
        for (var c = this.tmp2, d = 0, p = 0; p < 32; p++)
            for (var m = 0; m < 3; m++)
                for (var v = 0; v < 6; v++) c[d++] = a[p][m][v];
        for (var g = 576 - 18 * o, p = 0; p < g; p++) t[18 * o + p] = c[o + p]
    }, t.exports = n
}, function(t, e, i) {
    function r() {
        this.filter = a.makeArray([2, 2, 2, 16, 8]), this.phase = 0, this.pcm = {
            samplerate: 0,
            channels: 0,
            length: 0,
            samples: [new Float64Array(1152), new Float64Array(1152)]
        }
    }
    var a = i(9);
    const s = .923879533,
        n = .707106781;
    r.dct32 = function(t, e, i, r) {
        var a, o, l, u, h, c, f, d, p, m, v, g, y, _, b, k, w, T, S, I, C, P, x, A, O, E, U, F, L, R, M, D, B, N, $, K, z, G, W, j, H, X, q, V, Y, J, Q, Z, tt, et, it, rt, at, st, nt, ot, lt, ut, ht, ct, ft, dt, pt, mt, vt, gt, yt, _t, bt, kt, wt, Tt, St, It, Ct, Pt, xt, At, Ot, Et, Ut, Ft, Lt, Rt, Mt, Dt, Bt, Nt, $t, Kt, zt, Gt, Wt, jt, Ht, Xt, qt, Vt, Yt, Jt, Qt, Zt, te, ee, ie, re, ae, se, ne, oe, le, ue, he, ce, fe, de, pe, me, ve, ge, ye, _e, be, ke, we, Te, Se, Ie, Ce, Pe, xe, Ae, Oe, Ee, Ue, Fe, Le, Re, Me, De, Be, Ne, $e, Ke, ze, Ge, We, je, He, Xe, qe, Ve, Ye, Je, Qe, Ze, ti, ei, ii, ri, ai, si, ni, oi, li, ui, hi, ci, fi, di, pi, mi, vi, gi, yi, _i, bi;
        a = t[0] + t[31], w = .998795456 * (t[0] - t[31]), o = t[15] + t[16], T = .049067674 * (t[15] - t[16]), X = w + T, ct = .995184727 * (w - T), N = a + o, it = .995184727 * (a - o), l = t[7] + t[24], S = .740951125 * (t[7] - t[24]), u = t[8] + t[23], I = .671558955 * (t[8] - t[23]), q = S + I, ft = .09801714 * (S - I), $ = l + u, rt = .09801714 * (l - u), h = t[3] + t[28], C = .941544065 * (t[3] - t[28]), c = t[12] + t[19], P = .336889853 * (t[12] - t[19]), V = C + P, dt = .773010453 * (C - P), K = h + c, at = .773010453 * (h - c), f = t[4] + t[27], x = .903989293 * (t[4] - t[27]), d = t[11] + t[20], A = .427555093 * (t[11] - t[20]), Y = x + A, pt = .634393284 * (x - A), z = f + d, st = .634393284 * (f - d), p = t[1] + t[30], O = .98917651 * (t[1] - t[30]), m = t[14] + t[17], E = .146730474 * (t[14] - t[17]), J = O + E, mt = .956940336 * (O - E), G = p + m, nt = .956940336 * (p - m), v = t[6] + t[25], U = .803207531 * (t[6] - t[25]), g = t[9] + t[22], F = .595699304 * (t[9] - t[22]), Q = U + F, vt = .290284677 * (U - F), W = v + g, ot = .290284677 * (v - g), y = t[2] + t[29], L = .970031253 * (t[2] - t[29]), _ = t[13] + t[18], R = .24298018 * (t[13] - t[18]), Z = L + R, gt = .881921264 * (L - R), j = y + _, lt = .881921264 * (y - _), b = t[5] + t[26], M = .85772861 * (t[5] - t[26]), k = t[10] + t[21], D = .514102744 * (t[10] - t[21]), tt = M + D, yt = .471396737 * (M - D), H = b + k, ut = .471396737 * (b - k), kt = N + $, Kt = .98078528 * (N - $), wt = K + z, zt = .195090322 * (K - z), Tt = G + W, Gt = .831469612 * (G - W), St = j + H, Wt = .555570233 * (j - H), It = X + q, Ht = .98078528 * (X - q), Ct = V + Y, Xt = .195090322 * (V - Y), Pt = J + Q, qt = .831469612 * (J - Q), xt = Z + tt, Vt = .555570233 * (Z - tt), Ot = it + rt, Qt = .98078528 * (it - rt), Et = at + st, Zt = .195090322 * (at - st), Ut = nt + ot, te = .831469612 * (nt - ot), Ft = lt + ut, ee = .555570233 * (lt - ut), Rt = ct + ft, ae = .98078528 * (ct - ft), Mt = dt + pt, se = .195090322 * (dt - pt), Dt = mt + vt, ne = .831469612 * (mt - vt), Bt = gt + yt, oe = .555570233 * (gt - yt), ce = kt + wt, fe = Tt + St, r[15][e] = ce + fe, i[0][e] = (ce - fe) * n, de = It + Ct, pe = Pt + xt, B = de + pe, r[14][e] = B, ve = Ot + Et, ge = Ut + Ft, ht = ve + ge, r[13][e] = ht, _e = Rt + Mt, be = Dt + Bt, _t = _e + be, et = 2 * _t - B, r[12][e] = et, Te = Kt + zt, Se = Gt + Wt, jt = Te + Se, r[11][e] = jt, Ce = Ht + Xt, Pe = qt + Vt, Yt = Ce + Pe, bt = 2 * Yt - et, r[10][e] = bt, Oe = Qt + Zt, Ee = te + ee, ie = Oe + Ee, Lt = 2 * ie - ht, r[9][e] = Lt, Le = ae + se, Re = ne + oe, le = Le + Re, Nt = 2 * le - _t, At = 2 * Nt - bt, r[8][e] = At, Ne = (kt - wt) * s, $e = .382683432 * (Tt - St), Ke = Ne + $e, r[7][e] = Ke, i[8][e] = (Ne - $e) * n * 2 - Ke, ze = (It - Ct) * s, Ge = .382683432 * (Pt - xt), We = ze + Ge, $t = 2 * We - At, r[6][e] = $t, He = (Ot - Et) * s, Xe = .382683432 * (Ut - Ft), qe = He + Xe, re = 2 * qe - Lt, r[5][e] = re, Ye = (Rt - Mt) * s, Je = .382683432 * (Dt - Bt), Qe = Ye + Je, ue = 2 * Qe - Nt, Jt = 2 * ue - $t, r[4][e] = Jt, ei = (Kt - zt) * s, ii = .382683432 * (Gt - Wt), ri = ei + ii, Ie = 2 * ri - jt, r[3][e] = Ie, ai = (Te - Se) * n * 2 - Ie, i[4][e] = ai, i[12][e] = 2 * ((ei - ii) * n * 2 - ri) - ai, si = (Ht - Xt) * s, ni = .382683432 * (qt - Vt), oi = si + ni, xe = 2 * oi - Yt, he = 2 * xe - Jt, r[2][e] = he, li = (Ce - Pe) * n * 2 - xe, hi = (Qt - Zt) * s, ci = .382683432 * (te - ee), fi = hi + ci, Ue = 2 * fi - ie, ye = 2 * Ue - re, r[1][e] = ye, Fe = (ve - ge) * n * 2 - ye, i[2][e] = Fe, di = (Oe - Ee) * n * 2 - Ue, Ve = 2 * di - Fe, i[6][e] = Ve, pi = 2 * ((He - Xe) * n * 2 - qe) - Ve, i[10][e] = pi, i[14][e] = 2 * (2 * ((hi - ci) * n * 2 - fi) - di) - pi, mi = (ae - se) * s, vi = .382683432 * (ne - oe), gi = mi + vi, Me = 2 * gi - le, ke = 2 * Me - ue, De = (_e - be) * n * 2 - ke, me = 2 * ke - he, r[0][e] = me, we = (de - pe) * n * 2 - me, i[1][e] = we, Ae = 2 * De - we, i[3][e] = Ae, Be = 2 * li - Ae, i[5][e] = Be, yi = (Le - Re) * n * 2 - Me, Ze = 2 * yi - De, je = 2 * Ze - Be;
        i[7][e] = je, ti = 2 * ((ze - Ge) * n * 2 - We) - je, i[9][e] = ti, _i = 2 * ((Ye - Je) * n * 2 - Qe) - Ze, ui = 2 * _i - ti, i[11][e] = ui, bi = 2 * (2 * ((si - ni) * n * 2 - oi) - li) - ui, i[13][e] = bi, i[15][e] = 2 * (2 * (2 * ((mi - vi) * n * 2 - gi) - yi) - _i) - bi
    };
    const o = [
        [0, -442505e-9, .003250122, -.007003784, .031082153, -.07862854, .100311279, -.572036743, 1.144989014, .572036743, .100311279, .07862854, .031082153, .007003784, .003250122, 442505e-9, 0, -442505e-9, .003250122, -.007003784, .031082153, -.07862854, .100311279, -.572036743, 1.144989014, .572036743, .100311279, .07862854, .031082153, .007003784, .003250122, 442505e-9],
        [-15259e-9, -473022e-9, .003326416, -.007919312, .030517578, -.084182739, .090927124, -.600219727, 1.144287109, .543823242, .108856201, .073059082, .031478882, .006118774, .003173828, 396729e-9, -15259e-9, -473022e-9, .003326416, -.007919312, .030517578, -.084182739, .090927124, -.600219727, 1.144287109, .543823242, .108856201, .073059082, .031478882, .006118774, .003173828, 396729e-9],
        [-15259e-9, -534058e-9, .003387451, -.008865356, .029785156, -.089706421, .080688477, -.628295898, 1.142211914, .515609741, .116577148, .067520142, .031738281, .0052948, .003082275, 366211e-9, -15259e-9, -534058e-9, .003387451, -.008865356, .029785156, -.089706421, .080688477, -.628295898, 1.142211914, .515609741, .116577148, .067520142, .031738281, .0052948, .003082275, 366211e-9],
        [-15259e-9, -579834e-9, .003433228, -.009841919, .028884888, -.095169067, .069595337, -.656219482, 1.138763428, .487472534, .123474121, .06199646, .031845093, .004486084, .002990723, 320435e-9, -15259e-9, -579834e-9, .003433228, -.009841919, .028884888, -.095169067, .069595337, -.656219482, 1.138763428, .487472534, .123474121, .06199646, .031845093, .004486084, .002990723, 320435e-9],
        [-15259e-9, -62561e-8, .003463745, -.010848999, .027801514, -.100540161, .057617187, -.683914185, 1.133926392, .459472656, .129577637, .056533813, .031814575, .003723145, .00289917, 289917e-9, -15259e-9, -62561e-8, .003463745, -.010848999, .027801514, -.100540161, .057617187, -.683914185, 1.133926392, .459472656, .129577637, .056533813, .031814575, .003723145, .00289917, 289917e-9],
        [-15259e-9, -686646e-9, .003479004, -.011886597, .026535034, -.105819702, .044784546, -.71131897, 1.127746582, .431655884, .134887695, .051132202, .031661987, .003005981, .002792358, 259399e-9, -15259e-9, -686646e-9, .003479004, -.011886597, .026535034, -.105819702, .044784546, -.71131897, 1.127746582, .431655884, .134887695, .051132202, .031661987, .003005981, .002792358, 259399e-9],
        [-15259e-9, -747681e-9, .003479004, -.012939453, .025085449, -.110946655, .031082153, -.738372803, 1.120223999, .404083252, .139450073, .045837402, .031387329, .002334595, .002685547, 244141e-9, -15259e-9, -747681e-9, .003479004, -.012939453, .025085449, -.110946655, .031082153, -.738372803, 1.120223999, .404083252, .139450073, .045837402, .031387329, .002334595, .002685547, 244141e-9],
        [-30518e-9, -808716e-9, .003463745, -.014022827, .023422241, -.115921021, .01651001, -.765029907, 1.111373901, .376800537, .143264771, .040634155, .031005859, .001693726, .002578735, 213623e-9, -30518e-9, -808716e-9, .003463745, -.014022827, .023422241, -.115921021, .01651001, -.765029907, 1.111373901, .376800537, .143264771, .040634155, .031005859, .001693726, .002578735, 213623e-9],
        [-30518e-9, -88501e-8, .003417969, -.01512146, .021575928, -.120697021, .001068115, -.791213989, 1.101211548, .349868774, .146362305, .035552979, .030532837, .001098633, .002456665, 198364e-9, -30518e-9, -88501e-8, .003417969, -.01512146, .021575928, -.120697021, .001068115, -.791213989, 1.101211548, .349868774, .146362305, .035552979, .030532837, .001098633, .002456665, 198364e-9],
        [-30518e-9, -961304e-9, .003372192, -.016235352, .01953125, -.125259399, -.015228271, -.816864014, 1.089782715, .323318481, .148773193, .030609131, .029937744, 549316e-9, .002349854, 167847e-9, -30518e-9, -961304e-9, .003372192, -.016235352, .01953125, -.125259399, -.015228271, -.816864014, 1.089782715, .323318481, .148773193, .030609131, .029937744, 549316e-9, .002349854, 167847e-9],
        [-30518e-9, -.001037598, .00328064, -.017349243, .01725769, -.129562378, -.03237915, -.841949463, 1.07711792, .297210693, .150497437, .025817871, .029281616, 30518e-9, .002243042, 152588e-9, -30518e-9, -.001037598, .00328064, -.017349243, .01725769, -.129562378, -.03237915, -.841949463, 1.07711792, .297210693, .150497437, .025817871, .029281616, 30518e-9, .002243042, 152588e-9],
        [-45776e-9, -.001113892, .003173828, -.018463135, .014801025, -.133590698, -.050354004, -.866363525, 1.063217163, .271591187, .151596069, .021179199, .028533936, -442505e-9, .002120972, 137329e-9, -45776e-9, -.001113892, .003173828, -.018463135, .014801025, -.133590698, -.050354004, -.866363525, 1.063217163, .271591187, .151596069, .021179199, .028533936, -442505e-9, .002120972, 137329e-9],
        [-45776e-9, -.001205444, .003051758, -.019577026, .012115479, -.137298584, -.069168091, -.890090942, 1.048156738, .246505737, .152069092, .016708374, .02772522, -869751e-9, .00201416, 12207e-8, -45776e-9, -.001205444, .003051758, -.019577026, .012115479, -.137298584, -.069168091, -.890090942, 1.048156738, .246505737, .152069092, .016708374, .02772522, -869751e-9, .00201416, 12207e-8],
        [-61035e-9, -.001296997, .002883911, -.020690918, .009231567, -.140670776, -.088775635, -.91305542, 1.031936646, .221984863, .15196228, .012420654, .02684021, -.001266479, .001907349, 106812e-9, -61035e-9, -.001296997, .002883911, -.020690918, .009231567, -.140670776, -.088775635, -.91305542, 1.031936646, .221984863, .15196228, .012420654, .02684021, -.001266479, .001907349, 106812e-9],
        [-61035e-9, -.00138855, .002700806, -.021789551, .006134033, -.143676758, -.109161377, -.935195923, 1.01461792, .198059082, .151306152, .00831604, .025909424, -.001617432, .001785278, 106812e-9, -61035e-9, -.00138855, .002700806, -.021789551, .006134033, -.143676758, -.109161377, -.935195923, 1.01461792, .198059082, .151306152, .00831604, .025909424, -.001617432, .001785278, 106812e-9],
        [-76294e-9, -.001480103, .002487183, -.022857666, .002822876, -.146255493, -.130310059, -.956481934, .996246338, .174789429, .150115967, .004394531, .024932861, -.001937866, .001693726, 91553e-9, -76294e-9, -.001480103, .002487183, -.022857666, .002822876, -.146255493, -.130310059, -.956481934, .996246338, .174789429, .150115967, .004394531, .024932861, -.001937866, .001693726, 91553e-9],
        [-76294e-9, -.001586914, .002227783, -.023910522, -686646e-9, -.148422241, -.152206421, -.976852417, .976852417, .152206421, .148422241, 686646e-9, .023910522, -.002227783, .001586914, 76294e-9, -76294e-9, -.001586914, .002227783, -.023910522, -686646e-9, -.148422241, -.152206421, -.976852417, .976852417, .152206421, .148422241, 686646e-9, .023910522, -.002227783, .001586914, 76294e-9]
    ];
    r.prototype.full = function(t, e, i) {
        for (var a, s, n, l = 0; l < e; ++l)
            for (var u = t.sbsample[l], h = this.filter[l], c = this.phase, f = this.pcm.samples[l], d = 0, p = 0, m = 0; m < i; ++m) {
                r.dct32(u[m], c >> 1, h[0][1 & c], h[1][1 & c]);
                var v = -2 & c,
                    g = c - 1 & 15 | 1,
                    y = h[0][1 & c],
                    _ = h[0][1 & ~c],
                    b = h[1][1 & ~c],
                    k = 0,
                    w = 0;
                a = 0, n = o[a], _fx = _[0], _fe = y[k], s = _fx[0] * n[g + 0], s += _fx[1] * n[g + 14], s += _fx[2] * n[g + 12], s += _fx[3] * n[g + 10], s += _fx[4] * n[g + 8], s += _fx[5] * n[g + 6], s += _fx[6] * n[g + 4], s += _fx[7] * n[g + 2], s = -s, s += _fe[0] * n[v + 0], s += _fe[1] * n[v + 14], s += _fe[2] * n[v + 12], s += _fe[3] * n[v + 10], s += _fe[4] * n[v + 8], s += _fe[5] * n[v + 6], s += _fe[6] * n[v + 4], s += _fe[7] * n[v + 2], f[d++] = s, p = d + 30;
                for (var T = 1; T < 16; ++T) ++k, ++a, n = o[a], _fo = b[w], _fe = y[k], s = _fo[0] * n[g + 0], s += _fo[1] * n[g + 14], s += _fo[2] * n[g + 12], s += _fo[3] * n[g + 10], s += _fo[4] * n[g + 8], s += _fo[5] * n[g + 6], s += _fo[6] * n[g + 4], s += _fo[7] * n[g + 2], s = -s, s += _fe[7] * n[v + 2], s += _fe[6] * n[v + 4], s += _fe[5] * n[v + 6], s += _fe[4] * n[v + 8], s += _fe[3] * n[v + 10], s += _fe[2] * n[v + 12], s += _fe[1] * n[v + 14], s += _fe[0] * n[v + 0], f[d++] = s, s = _fe[0] * n[31 - v - 16], s += _fe[1] * n[31 - v - 14], s += _fe[2] * n[31 - v - 12], s += _fe[3] * n[31 - v - 10], s += _fe[4] * n[31 - v - 8], s += _fe[5] * n[31 - v - 6], s += _fe[6] * n[31 - v - 4], s += _fe[7] * n[31 - v - 2], s += _fo[7] * n[31 - g - 2], s += _fo[6] * n[31 - g - 4], s += _fo[5] * n[31 - g - 6], s += _fo[4] * n[31 - g - 8], s += _fo[3] * n[31 - g - 10], s += _fo[2] * n[31 - g - 12], s += _fo[1] * n[31 - g - 14], s += _fo[0] * n[31 - g - 16], f[p--] = s, ++w;
                ++a, n = o[a], _fo = b[w], s = _fo[0] * n[g + 0], s += _fo[1] * n[g + 14], s += _fo[2] * n[g + 12], s += _fo[3] * n[g + 10], s += _fo[4] * n[g + 8], s += _fo[5] * n[g + 6], s += _fo[6] * n[g + 4], s += _fo[7] * n[g + 2], f[d] = -s, d += 16, c = (c + 1) % 16
            }
    }, r.prototype.frame = function(t) {
        var e = t.header.nchannels(),
            i = t.header.nbsamples();
        this.pcm.samplerate = t.header.samplerate, this.pcm.channels = e, this.pcm.length = 32 * i, this.full(t, e, i), this.phase = (this.phase + i) % 16
    }, t.exports = r
}, , function(t, e, i) {
    i(95);
    var r = i(2)(i(74), i(127), "data-v-c1b8dc24", null);
    r.options.__file = "/Users/guozongwei/project/starmaker-backend/h5/projects/upload/src/views/five.vue", r.esModule && Object.keys(r.esModule).some(function(t) {
        return "default" !== t && "__esModule" !== t
    }) && console.error("named exports are not supported in *.vue files."), r.options.functional && console.error("[vue-loader] five.vue: functional components are not supported with templates, they should use render functions."), t.exports = r.exports
}, function(t, e, i) {
    i(89);
    var r = i(2)(i(75), i(121), "data-v-48e9633c", null);
    r.options.__file = "/Users/guozongwei/project/starmaker-backend/h5/projects/upload/src/views/four.vue", r.esModule && Object.keys(r.esModule).some(function(t) {
        return "default" !== t && "__esModule" !== t
    }) && console.error("named exports are not supported in *.vue files."), r.options.functional && console.error("[vue-loader] four.vue: functional components are not supported with templates, they should use render functions."), t.exports = r.exports
}, function(t, e, i) {
    i(90);
    var r = i(2)(i(76), i(122), "data-v-5543c546", null);
    r.options.__file = "/Users/guozongwei/project/starmaker-backend/h5/projects/upload/src/views/index.vue", r.esModule && Object.keys(r.esModule).some(function(t) {
        return "default" !== t && "__esModule" !== t
    }) && console.error("named exports are not supported in *.vue files."), r.options.functional && console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."), t.exports = r.exports
}, function(t, e, i) {
    i(88);
    var r = i(2)(i(77), i(120), "data-v-37c067ec", null);
    r.options.__file = "/Users/guozongwei/project/starmaker-backend/h5/projects/upload/src/views/navs.vue", r.esModule && Object.keys(r.esModule).some(function(t) {
        return "default" !== t && "__esModule" !== t
    }) && console.error("named exports are not supported in *.vue files."), r.options.functional && console.error("[vue-loader] navs.vue: functional components are not supported with templates, they should use render functions."), t.exports = r.exports
}, function(t, e, i) {
    i(96);
    var r = i(2)(i(78), i(128), "data-v-c32f304c", null);
    r.options.__file = "/Users/guozongwei/project/starmaker-backend/h5/projects/upload/src/views/one.vue", r.esModule && Object.keys(r.esModule).some(function(t) {
        return "default" !== t && "__esModule" !== t
    }) && console.error("named exports are not supported in *.vue files."), r.options.functional && console.error("[vue-loader] one.vue: functional components are not supported with templates, they should use render functions."), t.exports = r.exports
}, function(t, e, i) {
    i(94);
    var r = i(2)(i(79), i(126), "data-v-b38ea4c6", null);
    r.options.__file = "/Users/guozongwei/project/starmaker-backend/h5/projects/upload/src/views/player.vue", r.esModule && Object.keys(r.esModule).some(function(t) {
        return "default" !== t && "__esModule" !== t
    }) && console.error("named exports are not supported in *.vue files."), r.options.functional && console.error("[vue-loader] player.vue: functional components are not supported with templates, they should use render functions."), t.exports = r.exports
}, function(t, e, i) {
    i(87);
    var r = i(2)(i(80), i(119), "data-v-30a8c701", null);
    r.options.__file = "/Users/guozongwei/project/starmaker-backend/h5/projects/upload/src/views/seven.vue", r.esModule && Object.keys(r.esModule).some(function(t) {
        return "default" !== t && "__esModule" !== t
    }) && console.error("named exports are not supported in *.vue files."), r.options.functional && console.error("[vue-loader] seven.vue: functional components are not supported with templates, they should use render functions."), t.exports = r.exports
}, function(t, e, i) {
    i(92);
    var r = i(2)(i(81), i(124), "data-v-6a84d856", null);
    r.options.__file = "/Users/guozongwei/project/starmaker-backend/h5/projects/upload/src/views/six.vue", r.esModule && Object.keys(r.esModule).some(function(t) {
        return "default" !== t && "__esModule" !== t
    }) && console.error("named exports are not supported in *.vue files."), r.options.functional && console.error("[vue-loader] six.vue: functional components are not supported with templates, they should use render functions."), t.exports = r.exports
}, function(t, e, i) {
    i(86);
    var r = i(2)(i(82), i(118), "data-v-2878fc12", null);
    r.options.__file = "/Users/guozongwei/project/starmaker-backend/h5/projects/upload/src/views/three.vue", r.esModule && Object.keys(r.esModule).some(function(t) {
        return "default" !== t && "__esModule" !== t
    }) && console.error("named exports are not supported in *.vue files."), r.options.functional && console.error("[vue-loader] three.vue: functional components are not supported with templates, they should use render functions."), t.exports = r.exports
}, function(t, e, i) {
    i(93);
    var r = i(2)(i(83), i(125), "data-v-925fce80", null);
    r.options.__file = "/Users/guozongwei/project/starmaker-backend/h5/projects/upload/src/views/two.vue", r.esModule && Object.keys(r.esModule).some(function(t) {
        return "default" !== t && "__esModule" !== t
    }) && console.error("named exports are not supported in *.vue files."), r.options.functional && console.error("[vue-loader] two.vue: functional components are not supported with templates, they should use render functions."), t.exports = r.exports
}, function(t, e, i) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                i = t._self._c || e;
            return i("div", {
                staticClass: "three"
            }, [i("p", {
                staticClass: "song_info_title"
            }, [t._v("Make your song stand out in the 'Sing!' section.")]), t._v(" "), i("div", {
                staticClass: "preview"
            }, [i("div", {
                staticClass: "image-out"
            }, [i("img", {
                staticClass: "image-in",
                attrs: {
                    src: t.imageUrl
                }
            })]), t._v(" "), i("div", {
                staticClass: "right"
            }, [i("p", {
                staticClass: "title-song"
            }, [t._v(t._s(t.title))]), t._v(" "), i("p", {
                staticClass: "title-artist"
            }, [t._v(t._s(t.artist))])])]), t._v(" "), i("i-form", [i("Form-item", [i("div", {
                staticClass: "tags"
            }, [i("Row", [i("Col", {
                attrs: {
                    sm: 4,
                    xs: 10,
                    align: "left"
                }
            }, [i("span", {
                staticClass: "required-no"
            }, [t._v("  ")]), t._v("Add tags\n                    ")]), t._v(" "), i("Col", {
                attrs: {
                    sm: 18,
                    xs: 10,
                    align: "left"
                }
            }, [0 === t.tags.length ? i("p", [t._v(" ")]) : t._e(), t._v(" "), t._l(t.tags, function(e) {
                return i("Tag", {
                    key: e,
                    attrs: {
                        name: e,
                        closable: ""
                    },
                    on: {
                        "on-close": t.handleClose
                    }
                }, [t._v(t._s(e))])
            })], 2), t._v(" "), i("Col", {
                attrs: {
                    sm: 2,
                    xs: 4,
                    align: "right"
                }
            }, [i("Button", {
                staticClass: "tags-add",
                attrs: {
                    icon: "plus-circled",
                    type: "text",
                    shape: "circle"
                },
                on: {
                    click: t.render
                }
            })], 1)], 1)], 1)]), t._v(" "), i("Form-item", [i("Row", [i("Col", {
                attrs: {
                    align: "left",
                    sm: 4,
                    xs: 10
                }
            }, [i("span", {
                staticClass: "required"
            }, [t._v("*")]), t._v("Add Alum Art\n                ")]), t._v(" "), i("Col", {
                attrs: {
                    align: "right",
                    sm: 20,
                    xs: 14
                }
            },[i("Upload", {
                
                ref: "upload",
                attrs: {
                    action: "/songbook/upload",
                    name: "cover_img",
                    accept: "image/*",
                    format: ["png", "jpg", "jpeg", "gif", "bmp"],
                    "on-format-error": t.handleFormatError,
                    "max-size": 2048,
                    data: t.uploadData,
                    "on-success": t.handleSuccess,
                    "on-error": t.handleError,
                    "on-exceeded-size": t.handleMaxSize,
                    "before-upload": t.handleBeforeUpload,
                    "on-remove": t.handleRemove,
                    "default-file-list": t.image
                }
            }, [i("Button", {
                attrs: {
                    type: "primary",
                    shape: "circle",
                    icon: "ios-cloud-upload-outline"
                }
            }, [i("span", {
                staticClass: "choose-image"
            }, [t._v("Choose Image")])])], 1)], 1)], 1)], 1)], 1)], 1)
        },
        staticRenderFns: []
    }, t.exports.render._withStripped = !0
}, function(t, e, i) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                i = t._self._c || e;
            return i("div", {
                staticClass: "seven"
            }, [i("p", {
                staticClass: "song_info_title"
            }, [t._v("Thank you for uploading!")]), t._v(" "), "UPLOAD SUCCESSFUL" === t.msg ? i("div", {
                staticClass: "success"
            }, [i("p", [t._v("Your uploaded audio track will be visible on Starmaker after 5mins.")]), t._v(" "), i("Icon", {
                attrs: {
                    type: "checkmark-circled"
                }
            })], 1) : t._e(), t._v(" "), "UPLOAD FAILED" === t.msg ? i("div", {
                staticClass: "error"
            }, [i("Icon", {
                attrs: {
                    type: "close-circled"
                }
            })], 1) : t._e(), t._v(" "), "UPLOADING" === t.msg ? i("div", {
                staticClass: "warning"
            }, [i("Icon", {
                attrs: {
                    type: "information-circled"
                }
            })], 1) : t._e(), t._v(" "), i("div", {
                staticClass: "info"
            }, [t._v(t._s(t.msg))])])
        },
        staticRenderFns: []
    }, t.exports.render._withStripped = !0
}, function(t, e, i) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                i = t._self._c || e;
            return i("div", {
                staticClass: "nav"
            }, [i("h1", {
                staticClass: "nav_logo"
            }, [t._v(t._s(t.siteName))]), t._v(" "), i("ul", {
                staticClass: "nav_list clearfix",
                class: t.isShowMore ? t.userName ? "user" : "no_user" : ""
            }, [t._m(0), t._v(" "), t._m(1), t._v(" "), t._m(2), t._v(" "), t._m(3), t._v(" "), t._m(4), t._v(" "), t._m(5), t._v(" "), t.userName ? i("li", {
                staticClass: "nav_user_parent"
            }, [i("a", {
                staticClass: "nav_user",
                attrs: {
                    href: "javascript:void(0)"
                },
                on: {
                    click: function(e) {
                        e.stopPropagation(), t.showLogoutPop(e)
                    }
                }
            }, [i("i"), t._v(" "), i("em", [t._v(t._s(t.userName))])])]) : t._e()]), t._v(" "), i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isShowLogout,
                    expression: "isShowLogout"
                }],
                staticClass: "LogOut"
            }, [i("div", {
                staticClass: "LogOut-con"
            }, [i("div", {
                staticClass: "logout-title"
            }, [t._v("\n                LOG OUT\n            ")]), t._v(" "), i("div", {
                staticClass: "logout-text"
            }, [t._v("\n                Are you sure you want to log out?\n            ")]), t._v(" "), i("div", {
                staticClass: "logout-select clearfix"
            }, [i("a", {
                staticClass: "Qout fl",
                attrs: {
                    href: "javascript:void(0)"
                },
                on: {
                    click: function(e) {
                        if (e.target !== e.currentTarget) return null;
                        t.logout(e)
                    }
                }
            }, [t._v("LOG OUT")]), t._v(" "), i("a", {
                staticClass: "Qcanel fr",
                attrs: {
                    href: "javascript:void(0)"
                },
                on: {
                    click: function(e) {
                        if (e.target !== e.currentTarget) return null;
                        t.cancelLogout(e)
                    }
                }
            }, [t._v("CANCEL")])])])]), t._v(" "), i("div", {
                staticClass: "nav_more_btn",
                on: {
                    click: function(e) {
                        e.stopPropagation(), t.showNav(e)
                    }
                }
            }, [i("span"), t._v(" "), i("span"), t._v(" "), i("span")])])
        },
        staticRenderFns: [function() {
            var t = this,
                e = t.$createElement,
                i = t._self._c || e;
            return i("li", [i("a", {
                attrs: {
                    href: "/#home"
                }
            }, [t._v("HOME")]), t._v(" "), i("i", {
                staticClass: "nav_line"
            })])
        }, function() {
            var t = this,
                e = t.$createElement,
                i = t._self._c || e;
            return i("li", [i("a", {
                attrs: {
                    href: "/#songs"
                }
            }, [t._v("SONGS")]), t._v(" "), i("i", {
                staticClass: "nav_line"
            })])
        }, function() {
            var t = this,
                e = t.$createElement,
                i = t._self._c || e;
            return i("li", [i("a", {
                attrs: {
                    href: "/#AmericanIdol"
                }
            }, [t._v("AMERICAN IDOL")]), t._v(" "), i("i", {
                staticClass: "nav_line"
            })])
        }, function() {
            var t = this,
                e = t.$createElement,
                i = t._self._c || e;
            return i("li", [i("a", {
                attrs: {
                    href: "/#home/about"
                }
            }, [t._v("ABOUT")]), t._v(" "), i("i", {
                staticClass: "nav_line"
            })])
        }, function() {
            var t = this,
                e = t.$createElement,
                i = t._self._c || e;
            return i("li", [i("a", {
                attrs: {
                    href: "/#home/apps"
                }
            }, [t._v("APP")]), t._v(" "), i("i", {
                staticClass: "nav_line"
            })])
        }, function() {
            var t = this,
                e = t.$createElement,
                i = t._self._c || e;
            return i("li", {
                staticClass: "nav_upload"
            }, [i("a", {
                attrs: {
                    href: "/instrumental/upload"
                }
            }, [i("i"), t._v(" "), i("em", [t._v("UPLOAD")])])])
        }]
    }, t.exports.render._withStripped = !0
}, function(t, e, i) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                i = t._self._c || e;
            return i("div", {
                staticClass: "four"
            }, [i("p", {
                staticClass: "song_info_title"
            }, [t._v("Add your lyrics here")]), t._v(" "), i("div", {
                staticClass: "notice"
            }, [t.lyric && t.lang && !t.langChoose && !t.langSure ? i("p", [t._v("Is your song in " + t._s(t.langLaber(t.lang)) + "?\n            "), i("span", {
                staticClass: "no",
                on: {
                    click: function(e) {
                        t.sureLang("no")
                    }
                }
            }, [i("Poptip", {
                attrs: {
                    trigger: "hover",
                    content: "Do not confirm language"
                }
            }, [i("Icon", {
                attrs: {
                    type: "close-circled"
                }
            })], 1)], 1), t._v(" "), i("span", {
                staticClass: "yes",
                on: {
                    click: function(e) {
                        t.sureLang("yes")
                    }
                }
            }, [i("Poptip", {
                attrs: {
                    trigger: "hover",
                    content: "Confirm the language"
                }
            }, [i("Icon", {
                attrs: {
                    type: "checkmark-circled"
                }
            })], 1)], 1)]) : t._e(), t._v(" "), !t.lyric || t.lang || t.langSure || t.langChoose ? t._e() : i("p", [t._v("Sorry, we can't detect your song's language.\n            "), i("span", {
                staticClass: "ok",
                on: {
                    click: function(e) {
                        t.sureLang("ok")
                    }
                }
            }, [i("Poptip", {
                attrs: {
                    trigger: "hover",
                    content: "Choose a language"
                }
            }, [i("Icon", {
                attrs: {
                    type: "checkmark-circled"
                }
            })], 1)], 1)]), t._v(" "), t.langSure && !t.langChoose ? i("p", [t._v("You have chosen " + t._s(t.langLaber(t.langSure)) + ". Re-select?\n            "), i("span", {
                staticClass: "ok",
                on: {
                    click: function(e) {
                        t.sureLang("ok")
                    }
                }
            }, [i("Poptip", {
                attrs: {
                    trigger: "hover",
                    content: "Choose a language"
                }
            }, [i("Icon", {
                attrs: {
                    type: "checkmark-circled"
                }
            })], 1)], 1)]) : t._e(), t._v(" "), t.langChoose ? i("div", [i("Select", {
                staticStyle: {
                    width: "200px"
                },
                attrs: {
                    filterable: ""
                },
                on: {
                    "on-change": function(e) {
                        t.sureLang("yes")
                    }
                },
                model: {
                    value: t.lang,
                    callback: function(e) {
                        t.lang = e
                    },
                    expression: "lang"
                }
            }, t._l(t.langList, function(e) {
                return i("Option", {
                    key: "{{item}}",
                    attrs: {
                        value: e.value
                    }
                }, [t._v(t._s(e.label))])
            }))], 1) : t._e()]), t._v(" "), i("i-form", [i("Form-item", [i("div", {
                staticClass: "editor"
            }, [i("div", [i("textarea", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.lyric,
                    expression: "lyric"
                }],
                staticClass: "item",
                attrs: {
                    rows: "10",
                    placeholder: "Enter your lyrics here"
                },
                domProps: {
                    value: t.lyric
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.lyric = e.target.value)
                    }
                }
            })])])])], 1)], 1)
        },
        staticRenderFns: []
    }, t.exports.render._withStripped = !0
}, function(t, e, i) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                i = t._self._c || e;
            return i("div", {
                staticClass: "index"
            }, [i("Row", {
                attrs: {
                    type: "flex",
                    justify: "center",
                    align: "middle"
                }
            }, [i("Col", {
                attrs: {
                    sm: 24,
                    md: 12
                }
            }, [i("div", {
                staticClass: "step"
            }, [i("div", {
                attrs: {
                    align: "left"
                }
            }, [i("Steps", {
                attrs: {
                    current: t.current
                }
            }, [i("Step"), t._v(" "), i("Step"), t._v(" "), i("Step"), t._v(" "), i("Step"), t._v(" "), i("Step"), t._v(" "), i("Step")], 1)], 1)])])], 1), t._v(" "), i("Row", {
                attrs: {
                    type: "flex",
                    justify: "center",
                    align: "middle"
                }
            }, t._l(t.process, function(e) {
                return i("Col", {
                    key: "{{i}}",
                    attrs: {
                        span: t.processSpan
                    }
                }, [i("div", {
                    class: e
                })])
            })), t._v(" "), i("Row", {
                attrs: {
                    type: "flex",
                    justify: "center",
                    align: "middle"
                }
            }, [i("Col", {
                attrs: {
                    span: "24"
                }
            }, [i("h1", {
                staticClass: "song_choose_list_title"
            }, [t._v(t._s(t.title))])])], 1), t._v(" "), i("Row", {
                attrs: {
                    type: "flex",
                    justify: "center",
                    align: "middle"
                }
            }, [i("Col", {
                attrs: {
                    span: "1"
                }
            }, [i("div", {
                staticClass: "line"
            })])], 1), t._v(" "), i("Row", {
                attrs: {
                    type: "flex",
                    justify: "center",
                    align: "top"
                }
            }, [i("Col", {
                attrs: {
                    sm: 24,
                    md: 6,
                    align: "right"
                }
            }), t._v(" "), i("Col", {
                attrs: {
                    sm: 24,
                    md: 12
                }
            }, [i("div", {
                staticClass: "song_info"
            }, [i("audio", {
                ref: "audio",
                attrs: {
                    src: t.songUrl,
                    autoplay: t.isPlaying
                }
            }), t._v(" "), t.prev ? i("div", {
                staticClass: "prev",
                on: {
                    click: t.handlePrev
                }
            }, [i("Poptip", {
                attrs: {
                    trigger: "hover",
                    content: "Return to the previous step"
                }
            }, [i("Icon", {
                attrs: {
                    type: "ios-arrow-back"
                }
            })], 1)], 1) : t._e(), t._v(" "), 0 === t.current ? i("one", {
                ref: "one",
                staticClass: "step-content",
                attrs: {
                    audio: t.audio,
                    currentStep: t.currentStep
                },
                on: {
                    validateOK: t.validateOK,
                    handleNextOK: t.handleNextOK,
                    handleData: t.handleData,
                    handleProcess: t.handleProcess
                }
            }) : t._e(), t._v(" "), 1 === t.current ? i("two", {
                ref: "two",
                staticClass: "step-content",
                attrs: {
                    audio: t.audio,
                    currentStep: t.currentStep
                },
                on: {
                    validateOK: t.validateOK,
                    handleNextOK: t.handleNextOK,
                    handleData: t.handleData,
                    handleProcess: t.handleProcess
                }
            }) : t._e(), t._v(" "), 2 === t.current ? i("three", {
                ref: "three",
                staticClass: "step-content",
                attrs: {
                    audio: t.audio,
                    currentStep: t.currentStep
                },
                on: {
                    validateOK: t.validateOK,
                    handleNextOK: t.handleNextOK,
                    handleData: t.handleData,
                    handleProcess: t.handleProcess
                }
            }) : t._e(), t._v(" "), 3 === t.current ? i("four", {
                ref: "four",
                staticClass: "step-content",
                attrs: {
                    audio: t.audio,
                    currentStep: t.currentStep
                },
                on: {
                    validateOK: t.validateOK,
                    handleNextOK: t.handleNextOK,
                    handleData: t.handleData,
                    handleProcess: t.handleProcess
                }
            }) : t._e(), t._v(" "), 4 === t.current ? i("five", {
                ref: "five",
                staticClass: "step-content",
                attrs: {
                    audio: t.audio,
                    currentStep: t.currentStep
                },
                on: {
                    validateOK: t.validateOK,
                    handleNextOK: t.handleNextOK,
                    handleData: t.handleData,
                    handleProcess: t.handleProcess,
                    handlePlay: t.handlePlay,
                    changeTime: t.changeTime
                }
            }) : t._e(), t._v(" "), 5 === t.current ? i("six", {
                ref: "six",
                staticClass: "step-content",
                attrs: {
                    audio: t.audio,
                    currentStep: t.currentStep
                },
                on: {
                    validateOK: t.validateOK,
                    handleNextOK: t.handleNextOK,
                    handleData: t.handleData,
                    handleProcess: t.handleProcess,
                    handlePlay: t.handlePlay,
                    changeTime: t.changeTime
                }
            }) : t._e(), t._v(" "), 6 === t.current ? i("seven", {
                staticClass: "step-content",
                attrs: {
                    audio: t.audio,
                    currentStep: t.currentStep
                }
            }) : t._e(), t._v(" "), i("div", {
                staticClass: "next"
            }, [t.current < 5 ? i("Button", {
                attrs: {
                    type: t.nextOK ? "primary" : "ghost",
                    shape: "circle",
                    size: "large",
                    long: ""
                },
                on: {
                    click: t.handleSubmit
                }
            }, [t._v("NEXT")]) : t._e(), t._v(" "), 5 === t.current ? i("Button", {
                attrs: {
                    type: t.nextOK ? "primary" : "ghost",
                    shape: "circle",
                    size: "large",
                    long: ""
                },
                on: {
                    click: t.handleSubmit
                }
            }, [t._v("SAVE")]) : t._e()], 1), t._v(" "), i("div", {
                staticClass: "footer-info"
            }, [i("div", {
                staticClass: "bottom"
            }, [i("p", [t._v("If you have any questions, please refer to our\n                          "), i("a", {
                attrs: {
                    href: "/instrumental/help/upload",
                    target: "_blank"
                }
            }, [t._v("FAQ")]), t._v(" or email\n                          "), i("a", {
                attrs: {
                    href: "mailto:appsupport@starmakerinteractive.com"
                }
            }, [t._v("appsupport@starmakerinteractive.com")]), t._v(" for more assistance.")])])])], 1)]), t._v(" "), i("Col", {
                attrs: {
                    span: "6"
                }
            })], 1), t._v(" "), 4 === t.current || 5 === t.current ? i("Row", {
                attrs: {
                    type: "flex",
                    justify: "center",
                    align: "middle",
                    "class-name": "footer"
                }
            }, [i("Col", {
                attrs: {
                    span: "24"
                }
            }, [i("div", {
                staticClass: "player"
            }, [i("player", {
                attrs: {
                    audio: t.audio,
                    isPlaying: t.isPlaying
                },
                on: {
                    handlePlay: t.handlePlay,
                    handleSpeed: t.handleSpeed,
                    handleVolume: t.handleVolume
                }
            })], 1)])], 1) : t._e(), t._v(" "), i("div", {
                staticClass: "feedback",
                on: {
                    click: t.handleClickAsk
                }
            })], 1)
        },
        staticRenderFns: []
    }, t.exports.render._withStripped = !0
}, function(t, e, i) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                i = t._self._c || e;
            return i("div", [i("navs"), t._v(" "), i("index")], 1)
        },
        staticRenderFns: []
    }, t.exports.render._withStripped = !0
}, function(t, e, i) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                i = t._self._c || e;
            return i("div", {
                staticClass: "six"
            }, [i("p", {
                staticClass: "song_info_title"
            }, [t._v("Preview Lyrics")]), t._v(" "), i("p", {
                staticClass: "artist"
            }, [t._v("Artist: " + t._s(t.audio.artist))]), t._v(" "), i("p", {
                staticClass: "notice"
            }, [t._v("To change, please go back to the previous step. Cannot be modified after saving.")]), t._v(" "), i("i-form", [i("Form-item", [i("div", {
                ref: "editor",
                staticClass: "editor"
            }, [i("div", {
                class: t.contentClass(0),
                on: {
                    mouseover: function(e) {
                        t.mouseover(0, e)
                    },
                    mouseout: function(e) {
                        t.mouseout(0, e)
                    },
                    click: function(e) {
                        t.ctime(0)
                    }
                }
            }, [i("Row", [i("Col", {
                attrs: {
                    span: "4"
                }
            }, [i("div", {
                staticClass: "time",
                attrs: {
                    align: "center"
                }
            }, [1 !== t.on ? i("span", [t._v("00:00")]) : t._e(), t._v(" "), 1 === t.on ? i("Icon", {
                staticClass: "voice",
                attrs: {
                    type: t.voiceType
                }
            }) : t._e()], 1)]), t._v(" "), i("Col", {
                attrs: {
                    span: "16"
                }
            }, [i("div", {
                staticClass: "song-text"
            }, [i("input", {
                class: t.songItem(0),
                attrs: {
                    value: "Intro",
                    maxlength: "36",
                    readonly: ""
                }
            })])]), t._v(" "), i("Col", {
                attrs: {
                    span: "4"
                }
            })], 1)], 1), t._v(" "), t._l(t.audio.lyrics, function(e, r) {
                return i("div", {
                    class: t.contentClass(r + 1),
                    on: {
                        mouseover: function(e) {
                            t.mouseover(r + 1, e)
                        },
                        mouseout: function(e) {
                            t.mouseout(r + 1, e)
                        },
                        click: function(e) {
                            t.ctime(r + 1)
                        }
                    }
                }, [i("Row", [i("Col", {
                    attrs: {
                        span: "4"
                    }
                }, [i("div", {
                    staticClass: "time",
                    attrs: {
                        align: "center"
                    }
                }, [r + 2 !== t.on ? i("span", [t._v(t._s(t.ftime(e.startTime)))]) : t._e(), t._v(" "), r + 2 === t.on ? i("Icon", {
                    staticClass: "voice",
                    attrs: {
                        type: t.voiceType
                    }
                }) : t._e()], 1)]), t._v(" "), i("Col", {
                    attrs: {
                        span: "16"
                    }
                }, [i("div", {
                    staticClass: "song-text"
                }, [i("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model.trim",
                        value: e.text,
                        expression: "item.text",
                        modifiers: {
                            trim: !0
                        }
                    }],
                    class: t.songItem(r + 1),
                    attrs: {
                        maxlength: "36",
                        readonly: ""
                    },
                    domProps: {
                        value: e.text
                    },
                    on: {
                        input: function(t) {
                            t.target.composing || (e.text = t.target.value.trim())
                        },
                        blur: function(e) {
                            t.$forceUpdate()
                        }
                    }
                })])]), t._v(" "), i("Col", {
                    attrs: {
                        span: "4"
                    }
                })], 1)], 1)
            })], 2)])], 1)], 1)
        },
        staticRenderFns: []
    }, t.exports.render._withStripped = !0
}, function(t, e, i) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                i = t._self._c || e;
            return i("div", {
                staticClass: "two"
            }, [i("p", {
                staticClass: "song_info_title"
            }, [t._v("Enter the title and creator of your audio track")]), t._v(" "), i("div", {
                staticClass: "form-item"
            }, [i("i-form", {
                ref: "formValidate",
                attrs: {
                    model: t.formValidate,
                    rules: t.ruleValidate
                }
            }, [i("Form-item", {
                attrs: {
                    prop: "title"
                }
            }, [i("div", {
                staticClass: "song_info_box"
            }, [i("Input", {
                attrs: {
                    maxlength: 64,
                    placeholder: "Title"
                },
                on: {
                    "on-change": function(e) {
                        t.change("title")
                    }
                },
                model: {
                    value: t.formValidate.title,
                    callback: function(e) {
                        t.formValidate.title = e
                    },
                    expression: "formValidate.title"
                }
            })], 1)]), t._v(" "), i("Form-item", {
                attrs: {
                    prop: "artist"
                }
            }, [i("Input", {
                attrs: {
                    maxlength: 64,
                    placeholder: "Creator"
                },
                on: {
                    "on-change": function(e) {
                        t.change("artist")
                    }
                },
                model: {
                    value: t.formValidate.artist,
                    callback: function(e) {
                        t.formValidate.artist = e
                    },
                    expression: "formValidate.artist"
                }
            })], 1), t._v(" "), i("Form-item", [i("Row", [i("Col", {
                attrs: {
                    xs: 2,
                    sm: 1
                }
            }, [i("Checkbox", {
                on: {
                    "on-change": function(e) {
                        t.change("copyright")
                    }
                },
                model: {
                    value: t.copyright,
                    callback: function(e) {
                        t.copyright = e
                    },
                    expression: "copyright"
                }
            })], 1), t._v(" "), i("Col", {
                attrs: {
                    xs: 22,
                    sm: 23
                }
            }, [i("div", {
                staticClass: "choose_tip"
            }, [i("p", [t._v("I agree that song complies with starmaker's\n                              "), i("a", {
                attrs: {
                    href: "/#terms",
                    target: "_blank"
                }
            }, [t._v("terms and service")]), t._v(" and does not infringe else's right")])]), t._v(" "), i("Modal", {
                attrs: {
                    title: "terms and service",
                    width: "951"
                },
                model: {
                    value: t.modal4,
                    callback: function(e) {
                        t.modal4 = e
                    },
                    expression: "modal4"
                }
            }, [i("p", [t._v("terms and service")]), t._v(" "), i("div", {
                slot: "footer"
            })])], 1)], 1), t._v(" "), i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.copyrightE,
                    expression: "copyrightE"
                }],
                staticClass: "ivu-form-item-error-tip"
            }, [t._v("Please make a selection")])], 1)], 1)], 1)])
        },
        staticRenderFns: []
    }, t.exports.render._withStripped = !0
}, function(t, e, i) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                i = t._self._c || e;
            return i("transition", {
                attrs: {
                    name: "fade"
                }
            }, [i("div", {
                staticClass: "footer"
            }, [i("div", {
                ref: "progressBar",
                staticClass: "progress-bar",
                on: {
                    click: function(e) {
                        t.changeTime(e)
                    },
                    touchmove: function(e) {
                        t.touchMove(e)
                    },
                    touchend: function(e) {
                        t.touchEnd(e)
                    }
                }
            }, [i("div", {
                ref: "now",
                staticClass: "now",
                style: {
                    width: 100 * (t.now / t.nativeAudio.duration).toFixed(3) + "%"
                }
            })]), t._v(" "), i("div", {
                staticClass: "mini-music"
            }, [i("Row", [i("Col", {
                staticClass: "xs-hidden",
                attrs: {
                    span: "1"
                }
            }, [i("div", {
                staticClass: "speed-laber"
            }, [t._v("\n                    speed\n                ")])]), t._v(" "), i("Col", {
                staticClass: "xs-hidden",
                attrs: {
                    span: "2"
                }
            }, [i("div", {
                staticClass: "speed-select"
            }, [i("Select", {
                attrs: {
                    placeholder: "Normal(1x)",
                    placement: "top"
                },
                on: {
                    "on-change": function(e) {
                        t.defaultPlaybackRate()
                    }
                },
                model: {
                    value: t.speed,
                    callback: function(e) {
                        t.speed = e
                    },
                    expression: "speed"
                }
            }, t._l(t.speedList, function(e) {
                return i("Option", {
                    key: "{{item}}",
                    attrs: {
                        value: e.value
                    }
                }, [t._v(t._s(e.laber))])
            }))], 1)]), t._v(" "), i("Col", {
                attrs: {
                    xs: 4,
                    md: 1
                }
            }, [i("div", {
                staticClass: "music-control"
            }, [i("i", {
                class: [t.isPlaying ? t.pauseIcon : t.playIcon],
                on: {
                    click: function(e) {
                        t.handlePlay()
                    }
                }
            })])]), t._v(" "), i("Col", {
                attrs: {
                    xs: 4,
                    md: 2,
                    align: "right"
                }
            }, [i("div", {
                staticClass: "music-img"
            }, [i("img", {
                ref: "img",
                attrs: {
                    src: t.imageUrl,
                    alt: "starmaker"
                }
            })])]), t._v(" "), i("Col", {
                staticClass: "xs-hidden",
                attrs: {
                    span: "13"
                }
            }, [i("div", {
                staticClass: "music-name",
                attrs: {
                    align: "left"
                }
            }, [i("p", {
                staticClass: "music-name"
            }, [t._v(t._s(t.audio.title))]), t._v(" "), i("p", {
                staticClass: "music-artist"
            }, [t._v(t._s(t.audio.artist))])])]), t._v(" "), i("Col", {
                staticClass: "xs-hidden",
                attrs: {
                    span: "1"
                }
            }, [i("div", {
                staticClass: "volume-icon",
                attrs: {
                    align: "right"
                }
            }, [i("Icon", {
                attrs: {
                    type: "volume-high"
                }
            })], 1)]), t._v(" "), i("Col", {
                staticClass: "xs-hidden",
                attrs: {
                    xs: 16,
                    md: 1
                }
            }, [i("div", {
                staticClass: "volume"
            }, [i("Slider", {
                on: {
                    "on-input": t.handleVolume
                },
                model: {
                    value: t.volume,
                    callback: function(e) {
                        t.volume = e
                    },
                    expression: "volume"
                }
            })], 1)]), t._v(" "), i("Col", {
                attrs: {
                    span: "3"
                }
            }, [i("div", {
                staticClass: "progress"
            }, [i("span", {
                staticClass: "start"
            }, [t._v(t._s(t.transformTime(t.now)))]), t._v(" "), i("span", {
                staticClass: "end",
                domProps: {
                    textContent: t._s(t.totalTime)
                }
            })])])], 1)], 1)])])
        },
        staticRenderFns: []
    }, t.exports.render._withStripped = !0
}, function(t, e, i) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                i = t._self._c || e;
            return i("div", {
                staticClass: "five"
            }, [i("p", {
                staticClass: "song_info_title"
            }, [t._v("Depacito Lyrics")]), t._v(" "), i("p", {
                staticClass: "artist"
            }, [t._v("Creator: " + t._s(t.audio.artist))]), t._v(" "), i("p", {
                staticClass: "notice"
            }, [t._v("Click the spacebar to start, click again when the next line begins.")]), t._v(" "), i("i-form", [i("Form-item", [i("div", {
                ref: "editor",
                staticClass: "editor"
            }, [i("div", {
                class: t.contentClass(0),
                on: {
                    mouseover: function(e) {
                        t.mouseover(0, e)
                    },
                    mouseout: function(e) {
                        t.mouseout(0, e)
                    }
                }
            }, [i("Row", [i("Col", {
                attrs: {
                    span: "4"
                }
            }, [i("div", {
                staticClass: "time",
                attrs: {
                    align: "center"
                }
            }, [0 === t.on ? i("span", [t._v(" ")]) : t._e(), t._v(" "), 1 === t.on ? i("Icon", {
                staticClass: "voice",
                attrs: {
                    type: t.voiceType
                }
            }) : t._e(), t._v(" "), 1 < t.on ? i("span", [t._v("00:00")]) : t._e()], 1)]), t._v(" "), i("Col", {
                attrs: {
                    span: "16"
                }
            }, [i("div", {
                class: 0 === t.on ? "song-text-on" : "song-text"
            }, [i("input", {
                class: t.songItem(0),
                attrs: {
                    value: "Intro",
                    maxlength: "64",
                    readonly: 0 !== t.editIndex
                }
            })])]), t._v(" "), i("Col", {
                attrs: {
                    span: "4"
                }
            }, [0 === t.hoverIndex && 0 === t.on ? i("span", {
                staticClass: "do-item",
                on: {
                    click: function(e) {
                        t.clickSpace()
                    }
                }
            }, [i("Poptip", {
                attrs: {
                    trigger: "hover",
                    content: "Click here to start",
                    placement: "left"
                }
            }, [i("Icon", {
                attrs: {
                    type: "arrow-down-c"
                }
            })], 1)], 1) : t._e()])], 1)], 1), t._v(" "), t._l(t.lyrics, function(e, r) {
                return i("div", {
                    class: t.contentClass(r + 1),
                    on: {
                        mouseover: function(e) {
                            t.mouseover(r + 1, e)
                        },
                        mouseout: function(e) {
                            t.mouseout(r + 1, e)
                        }
                    }
                }, [i("Row", [i("Col", {
                    attrs: {
                        span: "4"
                    }
                }, [i("div", {
                    staticClass: "time",
                    attrs: {
                        align: "center"
                    }
                }, [r + 1 === t.on ? i("span", [i("span", {
                    staticClass: "arrow",
                    on: {
                        click: t.toLeft
                    }
                }, [i("Poptip", {
                    attrs: {
                        trigger: "hover",
                        content: "Lyrics two three ahead of time",
                        placement: "right"
                    }
                }, [i("Icon", {
                    attrs: {
                        type: "arrow-left-b"
                    }
                })], 1)], 1), t._v("\n                                " + t._s(t.ftime(e.startTime, r + 1)) + "\n                                "), i("span", {
                    staticClass: "arrow",
                    on: {
                        click: t.toRight
                    }
                }, [i("Poptip", {
                    attrs: {
                        trigger: "hover",
                        content: "Lyrics delayed three seconds",
                        placement: "right"
                    }
                }, [i("Icon", {
                    attrs: {
                        type: "arrow-right-b"
                    }
                })], 1)], 1)]) : t._e(), t._v(" "), r + 1 > t.on ? i("span", [t._v("——")]) : t._e(), t._v(" "), r + 2 === t.on ? i("Icon", {
                    staticClass: "voice",
                    attrs: {
                        type: t.voiceType
                    }
                }) : t._e(), t._v(" "), r + 2 < t.on ? i("span", [t._v(t._s(t.ftime(e.startTime, r + 1)))]) : t._e()], 1)]), t._v(" "), i("Col", {
                    attrs: {
                        span: "16"
                    }
                }, [i("div", {
                    class: r + 1 === t.on ? "song-text-on" : "song-text"
                }, [i("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.text,
                        expression: "item.text"
                    }],
                    class: t.songItem(r + 1),
                    attrs: {
                        maxlength: "64",
                        readonly: r + 1 !== t.editIndex
                    },
                    domProps: {
                        value: e.text
                    },
                    on: {
                        input: function(t) {
                            t.target.composing || (e.text = t.target.value)
                        }
                    }
                })])]), t._v(" "), i("Col", {
                    attrs: {
                        span: "4"
                    }
                }, [r + 1 === t.hoverIndex && r + 1 !== t.editIndex ? i("span", {
                    staticClass: "do-item",
                    on: {
                        click: function(e) {
                            t.edit(r + 1)
                        }
                    }
                }, [i("Poptip", {
                    attrs: {
                        trigger: "hover",
                        content: "Edit the lyrics",
                        placement: "left"
                    }
                }, [i("Icon", {
                    attrs: {
                        type: "edit"
                    }
                })], 1)], 1) : t._e(), t._v(" "), r + 1 === t.hoverIndex && r + 1 === t.editIndex ? i("span", {
                    staticClass: "do-item",
                    on: {
                        click: function(e) {
                            t.sure(r + 1)
                        }
                    }
                }, [i("Poptip", {
                    attrs: {
                        trigger: "hover",
                        content: "Confirm the lyrics",
                        placement: "left"
                    }
                }, [i("Icon", {
                    attrs: {
                        type: "checkmark-circled"
                    }
                })], 1)], 1) : t._e(), t._v(" "), r + 1 === t.hoverIndex && r + 1 < t.on ? i("span", {
                    staticClass: "do-item",
                    on: {
                        click: function(e) {
                            t.clickItem(r + 1)
                        }
                    }
                }, [i("Poptip", {
                    attrs: {
                        trigger: "hover",
                        content: "From the current lyrics began production",
                        placement: "left"
                    }
                }, [i("Icon", {
                    attrs: {
                        type: "refresh"
                    }
                })], 1)], 1) : t._e(), t._v(" "), r + 1 === t.hoverIndex && r + 1 === t.on ? i("span", {
                    staticClass: "do-item",
                    on: {
                        click: function(e) {
                            t.clickSpace()
                        }
                    }
                }, [i("Poptip", {
                    attrs: {
                        trigger: "hover",
                        content: "Click here to start",
                        placement: "left"
                    }
                }, [i("Icon", {
                    attrs: {
                        type: "arrow-down-c"
                    }
                })], 1)], 1) : t._e()])], 1)], 1)
            })], 2)])], 1)], 1)
        },
        staticRenderFns: []
    }, t.exports.render._withStripped = !0
}, function(t, e, i) {
    
    
    t.exports = {
        
        render: function() {
            var t = this,
                e = t.$createElement,
                i = t._self._c || e;
            return i("div", {
                staticClass: "one"
            }, [i("p", {
                staticClass: "song_info_title"
            }, [t._v("Upload an Vocal track. Make sure your file doesn't include vocals")]), t._v(" "), i("i-form", [i("Form-item", [i("Upload", {
                ref: "upload",
                
                
                attrs: {
                    action: "/api/tracks/",
                    name: "instrumental",
                    accept: "audio/*",
                    format: ["m4a", "mp3"],
                    "max-size": 20480,
                    data: t.uploadData,
                    "on-success": t.handleSuccess,
                    "on-format-error": t.handleFormatError,
                    "on-error": t.handleError,
                    "on-exceeded-size": t.handleMaxSize,
                    "before-upload": t.handleBeforeUpload,
                    "on-remove": t.handleRemove,
                    "default-file-list": t.src
                }
            }, [i("div", {
                staticClass: "song-upload",
                attrs: {
                    align: "middle"
                }
            }, [i("Poptip", {
                attrs: {
                    trigger: "hover",
                    content: "Click or drag the file here to upload"
                }
            }, [i("Icon", {
                attrs: {
                    type: "music-note",
                    size: "52"
                }
            })], 1)], 1)])], 1), t._v(" "), i("Form-item", [i("div", {
                staticClass: "choose_tip"
            }, [i("p", [i("Icon", {
                attrs: {
                    type: "information-circled"
                }
            }), t._v(" "), i("span", [t._v("We support: m4a, mp3. Max file size: 20 MB. Max length: 10 mins.")])], 1)])])], 1)], 1)
        },
        staticRenderFns: []
    }, 
    
    t.exports.render._withStripped = !0
}], [84]);