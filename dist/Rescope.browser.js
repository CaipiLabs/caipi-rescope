/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Context = __webpack_require__(1);
	
	var _Context2 = _interopRequireDefault(_Context);
	
	var _Store = __webpack_require__(16);
	
	var _Store2 = _interopRequireDefault(_Store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*
	 * Copyright (c)  2017 Caipi Labs .
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	 */
	
	_Context2.default.Store = _Store2.default;
	
	exports.default = { Store: _Store2.default, Context: _Context2.default };
	module.exports = exports["default"];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/*
	 * Copyright (c) 2017.  Caipi Labs.  All rights reserved.
	 *
	 * This File is part of Caipi. You can redistribute it and/or modify
	 * it under the terms of the GNU Affero General Public License as
	 * published by the Free Software Foundation, either version 3 of the
	 * License, or (at your option) any later version.
	 * This program is distributed in the hope that it will be useful,
	 * but WITHOUT ANY WARRANTY; without even the implied warranty of
	 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	 * GNU Affero General Public License for more details.
	 * You should have received a copy of the GNU Affero General Public License
	 * along with this program. If not, see <http://www.gnu.org/licenses/>.
	 *  This project is dual licensed under AGPL and Commercial Licence.
	 *
	 * @author : Nathanael Braun
	 * @contact : caipilabs@gmail.com
	 */
	
	/**
	 * @author Nathanael BRAUN
	 *
	 * Date: 13/08/2017
	 * Time: 17:15
	 */
	
	var isString = __webpack_require__(2),
	    isArray = __webpack_require__(3),
	    EventEmitter = __webpack_require__(4),
	    isFunction = __webpack_require__(5),
	    shortid = __webpack_require__(6),
	    __proto__push = function __proto__push(target, id, parent) {
	    var here = _defineProperty({}, id, function () {});
	    here[id].prototype = parent ? new parent["_" + id]() : target[id] || {};
	    target[id] = new here[id]();
	    target['_' + id] = here[id];
	};
	
	var openContexts = {};
	
	var Context = function (_EventEmitter) {
	    _inherits(Context, _EventEmitter);
	
	    function Context(ctx) {
	        var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	            id = _ref.id,
	            parent = _ref.parent,
	            state = _ref.state,
	            datas = _ref.datas,
	            name = _ref.name,
	            defaultMaxListeners = _ref.defaultMaxListeners,
	            persistenceTm = _ref.persistenceTm,
	            autoDestroy = _ref.autoDestroy;
	
	        _classCallCheck(this, Context);
	
	        var _this = _possibleConstructorReturn(this, (Context.__proto__ || Object.getPrototypeOf(Context)).call(this));
	
	        _this._maxListeners = defaultMaxListeners || _this.constructor.defaultMaxListeners;
	        _this._id = id = id || "_____" + shortid.generate();
	
	        if (openContexts[id]) {
	            var _ret;
	
	            // openContexts[id].register(ctx);
	            return _ret = openContexts[id], _possibleConstructorReturn(_this, _ret);
	        }
	
	        openContexts[id] = _this;
	        _this._isLocalId = true;
	        _this._persistenceTm = persistenceTm || _this.constructor.persistenceTm;
	
	        _this.stores = {};
	        _this.state = {};
	        _this.datas = {};
	        __proto__push(_this, 'stores', parent);
	        __proto__push(_this, 'state', parent);
	        __proto__push(_this, 'datas', parent);
	        _this.parent = parent;
	
	        if (parent) {
	            parent._addChild(_this);
	        }
	
	        _this.sources = [];
	        _this._childContexts = [];
	
	        _this.__retainLocks = { all: 0 };
	        _this.__w8Locks = { all: 1 };
	        _this.__listening = {};
	        _this.__context = {};
	        _this.__mixed = [];
	        _this.__mixedList = [];
	        _this._followers = [];
	        if (parent) {
	            parent.retain("isMyParent");
	            !parent._stable && _this.wait("isMyParent");
	            parent.on(_this.__parentList = {
	                'stable': function stable(s) {
	                    return _this.release("isMyParent");
	                },
	                'unstable': function unstable(s) {
	                    return _this.wait("isMyParent");
	                },
	                'update': function update(s) {
	                    return _this._propag();
	                }
	            });
	            // this.register(parent.__context, state, datas);
	        }
	
	        _this.register(ctx, state, datas);
	        _this.__w8Locks.all--;
	        _this._stable = !_this.__w8Locks.all;
	
	        if (autoDestroy) setTimeout(function (tm) {
	            _this.retain("autoDestroy");
	            _this.dispose("autoDestroy");
	        });
	        return _this;
	    }
	
	    _createClass(Context, [{
	        key: 'mount',
	        value: function mount(id, state, datas) {
	            var _this2 = this;
	
	            if (isArray(id)) {
	                id.forEach(function (k) {
	                    return _this2._mount(k, state && state[k], datas && datas[k]);
	                });
	            } else {
	                this._mount.apply(this, arguments);
	            }
	            return this;
	        }
	    }, {
	        key: '_mount',
	        value: function _mount(id, state, datas) {
	            if (!this.__context[id]) {
	                var _parent;
	
	                //ask mixed || parent
	                if (this.__mixed.reduce(function (mounted, ctx) {
	                    return mounted || ctx._mount(id, state, datas);
	                }, false) || !this.parent) return;
	                return (_parent = this.parent)._mount.apply(_parent, arguments);
	            }
	            this.constructor.Store.mountStore(id, this, null, state, datas);
	            this._watchStore(id);
	            return this.__context[id];
	        }
	    }, {
	        key: '_watchStore',
	        value: function _watchStore(id, state, datas) {
	            var _this3 = this;
	
	            if (!this.__context[id]) {
	                var _parent2;
	
	                //ask mixed || parent
	                if (this.__mixed.reduce(function (mounted, ctx) {
	                    return mounted || ctx._watchStore(id, state, datas);
	                }, false) || !this.parent) return;
	                return (_parent2 = this.parent)._watchStore.apply(_parent2, arguments);
	            }
	            if (!this.__listening[id] && !isFunction(this.__context[id])) {
	                !this.__context[id].isStable() && this.wait(id);
	
	                this.__context[id].on(this.__listening[id] = {
	                    'update': function update(s) {
	                        return _this3.propag();
	                    },
	                    'stable': function stable(s) {
	                        return _this3.release(id);
	                    },
	                    'unstable': function unstable(s) {
	                        return _this3.wait(id);
	                    }
	                });
	            }
	            return true;
	        }
	    }, {
	        key: 'mixin',
	        value: function mixin(targetCtx) {
	            var _this4 = this;
	
	            var parent = this.parent,
	                lists = void 0;
	            this.__mixed.push(targetCtx);
	            targetCtx.retain();
	            if (!targetCtx._stable) this.wait(targetCtx._id);
	
	            this.__mixedList.push(lists = {
	                'stable': function stable(s) {
	                    return _this4.release(targetCtx._id);
	                },
	                'unstable': function unstable(s) {
	                    return _this4.wait(targetCtx._id);
	                },
	                'update': function update(s) {
	                    return _this4._propag();
	                }
	            });
	            targetCtx.on(lists);
	            __proto__push(this, 'stores', parent);
	            __proto__push(this, 'state', parent);
	            __proto__push(this, 'datas', parent);
	            targetCtx.relink(targetCtx.__context, this, true);
	
	            __proto__push(this, 'stores', this);
	            __proto__push(this, 'state', this);
	            __proto__push(this, 'datas', this);
	            this.relink(this.__context, this);
	        }
	    }, {
	        key: 'register',
	        value: function register(rawCtx) {
	            var _this5 = this;
	
	            var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	            var datas = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	            this.relink(rawCtx, this, false, state, datas);
	            Object.keys(rawCtx).forEach(function (id) {
	                return isFunction(rawCtx[id]) && rawCtx[id].singleton && _this5._mount(id, state[id], datas[id]);
	            });
	        }
	
	        /**
	         * Map srcCtx store's on targetCtx headers proto's
	         * @param srcCtx
	         * @param targetCtx
	         * @param state
	         * @param datas
	         */
	
	    }, {
	        key: 'relink',
	        value: function relink(srcCtx) {
	            var targetCtx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
	            var external = arguments[2];
	
	            var _this6 = this;
	
	            var state = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	            var datas = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
	
	            var lctx = targetCtx._stores.prototype;
	            Object.keys(srcCtx).forEach(function (id) {
	                if (targetCtx.__context[id] === srcCtx[id] || targetCtx.__context[id] && targetCtx.__context[id].constructor === srcCtx[id]) return;
	
	                if (targetCtx.__context[id]) {
	                    console.warn("Rescope Context : ", id, " already exist in this context !");
	                    return;
	                }
	                if (!external) _this6.__context[id] = srcCtx[id];
	
	                Object.defineProperty(lctx, id, function (ctx, id) {
	                    return {
	                        get: function get() {
	                            return _this6.__context[id];
	                        }
	                    };
	                }(_this6.__context, id));
	                Object.defineProperty(targetCtx._state.prototype, id, function (ctx, id) {
	                    return {
	                        get: function get() {
	                            return ctx[id] && ctx[id].state;
	                        },
	                        set: function set(v) {
	                            return _this6._mount(id, v);
	                        }
	                    };
	                }(_this6.__context, id));
	                Object.defineProperty(targetCtx._datas.prototype, id, function (ctx, id) {
	                    return {
	                        get: function get() {
	                            return ctx[id] && ctx[id].datas;
	                        },
	                        set: function set(v) {
	                            return _this6._mount(id, undefined, v);
	                        }
	                    };
	                }(_this6.__context, id));
	            });
	        }
	
	        /**
	         * @param obj {React.Component|Store|function)
	         * @param key {string} optional key where to map the public state
	         */
	
	    }, {
	        key: 'bind',
	        value: function bind(obj, key, as) {
	            var setInitial = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
	
	            var lastRevs = void 0,
	                datas = void 0;
	            if (key && !isArray(key)) key = [key];
	
	            // key = key||
	
	            if (as === true) {
	                setInitial = true;
	                as = null;
	            }
	
	            this._followers.push([obj, key, as, lastRevs = key && key.reduce(function (revs, id) {
	                return revs[id] = 0, revs;
	            }, {})]);
	
	            this.mount(key);
	
	            if (setInitial && this._stable) {
	                datas = this.getUpdates(lastRevs);
	                if (!datas) return;
	                if (typeof obj != "function") {
	                    if (as) obj.setState(_defineProperty({}, as, datas));else obj.setState(datas);
	                } else {
	                    obj(datas);
	                }
	                // lastRevs &&
	                // key.forEach(id => (lastRevs[id] = this.stores[id] && this.stores[id]._rev || 0));
	            }
	        }
	
	        /**
	         * Un bind this context off the given component-keys
	         * @param obj
	         * @param key
	         * @returns {Array.<*>}
	         */
	
	    }, {
	        key: 'unBind',
	        value: function unBind(obj, key, as) {
	            var followers = this._followers,
	                i = followers && followers.length;
	            while (followers && i--) {
	                if (followers[i][0] === obj && '' + followers[i][1] == '' + key && '' + followers[i][2] == '' + as) return followers.splice(i, 1);
	            }
	        }
	    }, {
	        key: 'map',
	        value: function map(to, stores) {
	            var _this7 = this;
	
	            var bind = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	
	            this.mount(stores);
	            bind && this.bind(to, stores, null, false);
	
	            return stores.reduce(function (datas, id) {
	                return datas[id] = _this7.stores[id] && _this7.stores[id].datas, datas;
	            }, {});
	        }
	    }, {
	        key: 'getUpdates',
	        value: function getUpdates(revs, output, updated) {
	            var _this8 = this;
	
	            var ctx = this.__context;
	
	            output = output || {};
	            Object.keys(ctx).forEach(function (id) {
	                if (!output[id] && (!revs || revs.hasOwnProperty(id) && revs[id] === undefined || !(!revs.hasOwnProperty(id) || ctx[id]._rev <= revs[id]))) {
	
	                    updated = true;
	
	                    output[id] = _this8.datas[id];
	                    if (revs && revs[id] !== undefined) revs[id] = ctx[id]._rev;
	                }
	            });
	            updated = this.__mixed.reduce(function (updated, ctx) {
	                return ctx.getUpdates(revs, output, updated) || updated;
	            }, updated);
	            updated = this.parent && this.parent.getUpdates(revs, output, updated) || updated;
	            return updated && output;
	        }
	    }, {
	        key: 'serialize',
	        value: function serialize() {
	            var _this9 = this;
	
	            var flags_states = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /.*/;
	            var flags_datas = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : /.*/;
	
	            var ctx = this.__context,
	                output = { state: {}, datas: {} },
	                _flags_states = void 0,
	                _flags_datas = void 0;
	            if (isArray(flags_states)) flags_states.forEach(function (id) {
	                return output.state[id] = _this9.state[id];
	            });
	
	            if (isArray(flags_datas)) flags_datas.forEach(function (id) {
	                return output.datas[id] = _this9.datas[id];
	            });
	
	            if (!isArray(flags_datas) && !isArray(flags_states)) Object.keys(ctx).forEach(function (id) {
	                if (isFunction(ctx[id])) return;
	
	                var flags = ctx[id].constructor.flags;
	
	                flags = isArray(flags) ? flags : [flags || ""];
	
	                if (flags.reduce(function (r, flag) {
	                    return r || _flags_states.test(flag);
	                }, false)) output.state[id] = _this9.state[id];
	
	                if (flags.reduce(function (r, flag) {
	                    return r || _flags_datas.test(flag);
	                }, false)) output.datas[id] = _this9.datas[id];
	            });
	            return output;
	        }
	    }, {
	        key: 'on',
	        value: function on(lists) {
	            var _this10 = this;
	
	            if (!isString(lists) && lists) Object.keys(lists).forEach(function (k) {
	                return _get(Context.prototype.__proto__ || Object.getPrototypeOf(Context.prototype), 'on', _this10).call(_this10, k, lists[k]);
	            });else _get(Context.prototype.__proto__ || Object.getPrototypeOf(Context.prototype), 'on', this).apply(this, arguments);
	        }
	    }, {
	        key: 'removeListener',
	        value: function removeListener(lists) {
	            var _this11 = this;
	
	            if (!isString(lists) && lists) Object.keys(lists).forEach(function (k) {
	                return _get(Context.prototype.__proto__ || Object.getPrototypeOf(Context.prototype), 'removeListener', _this11).call(_this11, k, lists[k]);
	            });else _get(Context.prototype.__proto__ || Object.getPrototypeOf(Context.prototype), 'removeListener', this).apply(this, arguments);
	        }
	
	        /**
	         * once('stable', cb)
	         * @param obj {React.Component|Store|function)
	         * @param key {string} optional key where to map the public state
	         */
	
	    }, {
	        key: 'then',
	        value: function then(cb) {
	            var _this12 = this;
	
	            if (this._stable) return cb(null, this.datas);
	            this.once('stable', function (e) {
	                return cb(null, _this12.datas);
	            });
	        }
	    }, {
	        key: 'restore',
	        value: function restore(_ref2, quiet) {
	            var state = _ref2.state,
	                datas = _ref2.datas;
	
	            var ctx = this.__context;
	            Object.keys(datas).forEach(function (id) {
	                quiet ? ctx.datas = datas[id] : ctx.push(datas[id]);
	            });
	            Object.keys(state).forEach(function (id) {
	                quiet ? ctx.state = state[id] : ctx.setState(state[id]);
	            });
	        }
	    }, {
	        key: 'retainStores',
	        value: function retainStores() {
	            var _this13 = this;
	
	            var stores = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	            var reason = arguments[1];
	
	            stores.forEach(function (id) {
	                return _this13.stores[id] && _this13.stores[id].retain && _this13.stores[id].retain(reason);
	            });
	        }
	    }, {
	        key: 'disposeStores',
	        value: function disposeStores() {
	            var _this14 = this;
	
	            var stores = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	            var reason = arguments[1];
	
	            stores.forEach(function (id) {
	                return _this14.stores[id] && _this14.stores[id].dispose && _this14.stores[id].dispose(reason);
	            });
	        }
	    }, {
	        key: 'wait',
	        value: function wait(reason) {
	            //  console.log("wait", reason);
	            this._stable && !this.__w8Locks.all && this.emit("unstable", this);
	            this._stable = false;
	            this.__w8Locks.all++;
	            if (reason) {
	                this.__w8Locks[reason] = this.__w8Locks[reason] || 0;
	                this.__w8Locks[reason]++;
	            }
	        }
	    }, {
	        key: 'release',
	        value: function release(reason) {
	            var _this15 = this;
	
	            //console.log("release", reason);
	
	
	            if (reason) {
	                if (this.__w8Locks[reason] == 0) console.error("Release more than locking !", reason);
	                this.__w8Locks[reason] = this.__w8Locks[reason] || 0;
	                this.__w8Locks[reason]--;
	            }
	            if (this.__w8Locks.all == 0) console.error("Release more than locking !");
	            this.__w8Locks.all--;
	            if (!this.__w8Locks.all) {
	                this._stabilizerTM && clearTimeout(this._stabilizerTM);
	                this._propagTM && clearTimeout(this._propagTM);
	
	                this._stabilizerTM = setTimeout(function (e) {
	                    if (!_this15.__w8Locks.all) return _this15._stabilizerTM = null;
	
	                    _this15._stable = true;
	                    _this15.emit("stable", _this15);
	
	                    _this15._propag();
	                });
	            }
	        }
	    }, {
	        key: 'propag',
	        value: function propag() {
	            var _this16 = this;
	
	            this._propagTM && clearTimeout(this._propagTM);
	            this._propagTM = setTimeout(function (e) {
	                _this16._propag();
	            }, 50);
	        }
	    }, {
	        key: '_propag',
	        value: function _propag() {
	            var _this17 = this;
	
	            if (this._followers.length) this._followers.forEach(function (_ref3) {
	                var obj = _ref3[0],
	                    key = _ref3[1],
	                    as = _ref3[2],
	                    lastRevs = _ref3[3];
	
	                var datas = _this17.getUpdates(lastRevs);
	                if (!datas) return;
	                if (typeof obj != "function") {
	                    if (as) obj.setState(_defineProperty({}, as, datas));else obj.setState(datas);
	                } else {
	                    obj(datas, lastRevs && [].concat(_toConsumableArray(lastRevs)) || "no revs");
	                }
	                // lastRevs &&
	                // key.forEach(id => (lastRevs[id] = this.stores[id] && this.stores[id]._rev || 0));
	            });
	            this.emit("update", this.getUpdates());
	        }
	    }, {
	        key: '_getAllChilds',
	        value: function _getAllChilds() {
	            var childs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	
	            childs.push.apply(childs, _toConsumableArray(this._childContexts));
	            this._childContexts.forEach(function (ctx) {
	                ctx._getAllChilds(childs);
	            });
	            return childs;
	        }
	    }, {
	        key: '_addChild',
	        value: function _addChild(ctx) {
	            this._childContexts.push(ctx);
	        }
	    }, {
	        key: '_rmChild',
	        value: function _rmChild(ctx) {
	            var i = this._childContexts.indexOf(ctx);
	            if (i != -1) this._childContexts.splice(i, 1);
	        }
	    }, {
	        key: 'retain',
	        value: function retain(reason) {
	            this.__retainLocks.all++;
	            //console.log("retain", this._id, reason);
	
	            if (reason) {
	                this.__retainLocks[reason] = this.__retainLocks[reason] || 0;
	                this.__retainLocks[reason]++;
	            }
	        }
	    }, {
	        key: 'dispose',
	        value: function dispose(reason) {
	            var _this18 = this;
	
	            if (reason) {
	
	                if (this.__retainLocks[reason] == 0) throw new Error("Dispose more than retaining !");
	
	                this.__retainLocks[reason] = this.__retainLocks[reason] || 0;
	                this.__retainLocks[reason]--;
	            }
	
	            if (this.__retainLocks.all == 0) throw new Error("Dispose more than retaining !");
	
	            this.__retainLocks.all--;
	
	            if (!this.__retainLocks.all) {
	                if (this._persistenceTm) {
	                    this._destroyTM && clearTimeout(this._destroyTM);
	                    this._destroyTM = setTimeout(function (e) {
	                        // console.log("wtf ctx", this._id, reason, this.__w8Locks, this._stable);
	                        _this18.then(function (s) {
	                            //   console.log("wtf ctx then", this._id, reason, this.__w8Locks);
	                            !_this18.__retainLocks.all && _this18.destroy();
	                        });
	                    }, this._persistenceTm);
	                } else {
	                    this.then(function (s) {
	                        return !_this18.__retainLocks.all && _this18.destroy();
	                    });
	                }
	            }
	        }
	        /**
	         * order destroy of local stores
	         */
	
	    }, {
	        key: 'destroy',
	        value: function destroy() {
	            var _this19 = this;
	
	            var ctx = this.__context;
	
	            // console.log("destroy", this._id);
	            this.emit("destroy");
	            Object.keys(this.__listening).forEach(function (id) {
	                return _this19.__context[id].removeListener(_this19.__listening[id]);
	            });
	
	            this.__listening = {};
	
	            if (this._isLocalId) delete openContexts[this._id];
	            this._followers.length = 0;
	
	            for (var key in ctx) {
	                if (!isFunction(ctx[key])) {
	                    if (ctx[key].contextObj === this) ctx[key].destroy();
	
	                    ctx[key] = ctx[key].constructor;
	                }
	            }while (this.__mixedList.length) {
	                this.__mixed[0].removeListener(this.__mixedList.shift());
	                this.__mixed.shift().dispose();
	            }
	            if (this.parent) {
	                this.parent.removeListener(this.__parentList);
	                this.parent.dispose("isMyParent");
	                this.parent._rmChild(this);
	            }
	            // this.datas = this.state = this.context = this.stores = null;
	            // this._datas = this._state = this._stores = null;
	
	        }
	    }], [{
	        key: 'getContext',
	        value: function getContext(key) {
	            return openContexts[key] = openContexts[key] || new Context({});
	        }
	    }]);
	
	    return Context;
	}(EventEmitter);
	
	Context.contexts = openContexts;
	Context.Store = null;
	Context.defaultMaxListeners = 100;
	Context.persistenceTm = 0;
	exports.default = Context;
	module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;;(function (factory) {
	  if (true)
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  else if (typeof exports === 'object' && !!exports && !exports.nodeType)
	    if (typeof module === 'object' && !!module && module.exports)
	      module.exports = factory();
	    else
	      exports['default'] = factory();
	  else if (typeof YUI === 'function' && YUI.add)
	    YUI.add('is-string', function (Y) { Y['default'] = factory(); }, '1.0.7');
	  else
	    String.isString = factory();
	})(function () {
	  var strToString  = ('').toString,
	      hasBind      = Function.prototype && Function.prototype.bind,
	      strToStrCall = hasBind && strToString.call.bind(strToString),
	      isString     = function (str) {
	        /*@cc_on
	          @if (@_jscript_version >= 5) @*/
	            try {
	                hasBind ? strToStrCall(str) : strToString.call(str);
	                return true;
	            } catch (e) {
	                return false;
	            }
	          /*@end
	        @*/
	      };
	
	  return function (str) {
	    return  typeof str === 'string' ||
	            str && typeof str === 'object' &&
	            /*@cc_on
	              @if (@_jscript_version < 5.5)
	                /^\s*function\s*String\(\)\s*{\s*\[native code\]\s*}\s*$/.test(str.constructor)
	              @else @*/
	                isString(str)
	              /*@end
	            @*/
	            || false;
	  };
	});


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;
	
	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;
	
	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;
	
	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;
	
	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};
	
	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;
	
	  if (!this._events)
	    this._events = {};
	
	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }
	
	  handler = this._events[type];
	
	  if (isUndefined(handler))
	    return false;
	
	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }
	
	  return true;
	};
	
	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events)
	    this._events = {};
	
	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);
	
	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];
	
	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }
	
	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.on = EventEmitter.prototype.addListener;
	
	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  var fired = false;
	
	  function g() {
	    this.removeListener(type, g);
	
	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }
	
	  g.listener = listener;
	  this.on(type, g);
	
	  return this;
	};
	
	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events || !this._events[type])
	    return this;
	
	  list = this._events[type];
	  length = list.length;
	  position = -1;
	
	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	
	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }
	
	    if (position < 0)
	      return this;
	
	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }
	
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;
	
	  if (!this._events)
	    return this;
	
	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }
	
	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }
	
	  listeners = this._events[type];
	
	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];
	
	  return this;
	};
	
	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};
	
	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];
	
	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};
	
	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	
	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	// if (typeof require !== 'undefined') {}
	
	var isFunction = function (functionToCheck) {
		var getType = {};
		return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
	};
	
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = isFunction;
	}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	module.exports = __webpack_require__(7);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var alphabet = __webpack_require__(8);
	var encode = __webpack_require__(10);
	var decode = __webpack_require__(12);
	var build = __webpack_require__(13);
	var isValid = __webpack_require__(14);
	
	// if you are using cluster or multiple servers use this to make each instance
	// has a unique value for worker
	// Note: I don't know if this is automatically set when using third
	// party cluster solutions such as pm2.
	var clusterWorkerId = __webpack_require__(15) || 0;
	
	/**
	 * Set the seed.
	 * Highly recommended if you don't want people to try to figure out your id schema.
	 * exposed as shortid.seed(int)
	 * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
	 */
	function seed(seedValue) {
	    alphabet.seed(seedValue);
	    return module.exports;
	}
	
	/**
	 * Set the cluster worker or machine id
	 * exposed as shortid.worker(int)
	 * @param workerId worker must be positive integer.  Number less than 16 is recommended.
	 * returns shortid module so it can be chained.
	 */
	function worker(workerId) {
	    clusterWorkerId = workerId;
	    return module.exports;
	}
	
	/**
	 *
	 * sets new characters to use in the alphabet
	 * returns the shuffled alphabet
	 */
	function characters(newCharacters) {
	    if (newCharacters !== undefined) {
	        alphabet.characters(newCharacters);
	    }
	
	    return alphabet.shuffled();
	}
	
	/**
	 * Generate unique id
	 * Returns string id
	 */
	function generate() {
	  return build(clusterWorkerId);
	}
	
	// Export all other functions as properties of the generate function
	module.exports = generate;
	module.exports.generate = generate;
	module.exports.seed = seed;
	module.exports.worker = worker;
	module.exports.characters = characters;
	module.exports.decode = decode;
	module.exports.isValid = isValid;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var randomFromSeed = __webpack_require__(9);
	
	var ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
	var alphabet;
	var previousSeed;
	
	var shuffled;
	
	function reset() {
	    shuffled = false;
	}
	
	function setCharacters(_alphabet_) {
	    if (!_alphabet_) {
	        if (alphabet !== ORIGINAL) {
	            alphabet = ORIGINAL;
	            reset();
	        }
	        return;
	    }
	
	    if (_alphabet_ === alphabet) {
	        return;
	    }
	
	    if (_alphabet_.length !== ORIGINAL.length) {
	        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);
	    }
	
	    var unique = _alphabet_.split('').filter(function(item, ind, arr){
	       return ind !== arr.lastIndexOf(item);
	    });
	
	    if (unique.length) {
	        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));
	    }
	
	    alphabet = _alphabet_;
	    reset();
	}
	
	function characters(_alphabet_) {
	    setCharacters(_alphabet_);
	    return alphabet;
	}
	
	function setSeed(seed) {
	    randomFromSeed.seed(seed);
	    if (previousSeed !== seed) {
	        reset();
	        previousSeed = seed;
	    }
	}
	
	function shuffle() {
	    if (!alphabet) {
	        setCharacters(ORIGINAL);
	    }
	
	    var sourceArray = alphabet.split('');
	    var targetArray = [];
	    var r = randomFromSeed.nextValue();
	    var characterIndex;
	
	    while (sourceArray.length > 0) {
	        r = randomFromSeed.nextValue();
	        characterIndex = Math.floor(r * sourceArray.length);
	        targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
	    }
	    return targetArray.join('');
	}
	
	function getShuffled() {
	    if (shuffled) {
	        return shuffled;
	    }
	    shuffled = shuffle();
	    return shuffled;
	}
	
	/**
	 * lookup shuffled letter
	 * @param index
	 * @returns {string}
	 */
	function lookup(index) {
	    var alphabetShuffled = getShuffled();
	    return alphabetShuffled[index];
	}
	
	module.exports = {
	    characters: characters,
	    seed: setSeed,
	    lookup: lookup,
	    shuffled: getShuffled
	};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	'use strict';
	
	// Found this seed-based random generator somewhere
	// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)
	
	var seed = 1;
	
	/**
	 * return a random number based on a seed
	 * @param seed
	 * @returns {number}
	 */
	function getNextValue() {
	    seed = (seed * 9301 + 49297) % 233280;
	    return seed/(233280.0);
	}
	
	function setSeed(_seed_) {
	    seed = _seed_;
	}
	
	module.exports = {
	    nextValue: getNextValue,
	    seed: setSeed
	};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var randomByte = __webpack_require__(11);
	
	function encode(lookup, number) {
	    var loopCounter = 0;
	    var done;
	
	    var str = '';
	
	    while (!done) {
	        str = str + lookup( ( (number >> (4 * loopCounter)) & 0x0f ) | randomByte() );
	        done = number < (Math.pow(16, loopCounter + 1 ) );
	        loopCounter++;
	    }
	    return str;
	}
	
	module.exports = encode;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';
	
	var crypto = typeof window === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto
	
	function randomByte() {
	    if (!crypto || !crypto.getRandomValues) {
	        return Math.floor(Math.random() * 256) & 0x30;
	    }
	    var dest = new Uint8Array(1);
	    crypto.getRandomValues(dest);
	    return dest[0] & 0x30;
	}
	
	module.exports = randomByte;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var alphabet = __webpack_require__(8);
	
	/**
	 * Decode the id to get the version and worker
	 * Mainly for debugging and testing.
	 * @param id - the shortid-generated id.
	 */
	function decode(id) {
	    var characters = alphabet.shuffled();
	    return {
	        version: characters.indexOf(id.substr(0, 1)) & 0x0f,
	        worker: characters.indexOf(id.substr(1, 1)) & 0x0f
	    };
	}
	
	module.exports = decode;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var encode = __webpack_require__(10);
	var alphabet = __webpack_require__(8);
	
	// Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
	// This number should be updated every year or so to keep the generated id short.
	// To regenerate `new Date() - 0` and bump the version. Always bump the version!
	var REDUCE_TIME = 1459707606518;
	
	// don't change unless we change the algos or REDUCE_TIME
	// must be an integer and less than 16
	var version = 6;
	
	// Counter is used when shortid is called multiple times in one second.
	var counter;
	
	// Remember the last time shortid was called in case counter is needed.
	var previousSeconds;
	
	/**
	 * Generate unique id
	 * Returns string id
	 */
	function build(clusterWorkerId) {
	
	    var str = '';
	
	    var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);
	
	    if (seconds === previousSeconds) {
	        counter++;
	    } else {
	        counter = 0;
	        previousSeconds = seconds;
	    }
	
	    str = str + encode(alphabet.lookup, version);
	    str = str + encode(alphabet.lookup, clusterWorkerId);
	    if (counter > 0) {
	        str = str + encode(alphabet.lookup, counter);
	    }
	    str = str + encode(alphabet.lookup, seconds);
	
	    return str;
	}
	
	module.exports = build;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var alphabet = __webpack_require__(8);
	
	function isShortId(id) {
	    if (!id || typeof id !== 'string' || id.length < 6 ) {
	        return false;
	    }
	
	    var characters = alphabet.characters();
	    var len = id.length;
	    for(var i = 0; i < len;i++) {
	        if (characters.indexOf(id[i]) === -1) {
	            return false;
	        }
	    }
	    return true;
	}
	
	module.exports = isShortId;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = 0;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/*
	 * Copyright (c)  2017 Caipi Labs .
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	 */
	
	/**
	 * Ultra scalable state-aware store
	 *
	 * @todo : lot of optims...
	 */
	
	var isString = __webpack_require__(2),
	    isArray = __webpack_require__(3),
	    isFunction = __webpack_require__(5),
	    Context = __webpack_require__(1),
	    EventEmitter = __webpack_require__(4),
	    shortid = __webpack_require__(6),
	    objProto = Object.getPrototypeOf({}),
	    openContexts = {};
	
	var Store = function (_EventEmitter) {
	    _inherits(Store, _EventEmitter);
	
	    /**
	     * Constructor, will build a rescope store
	     *
	     * (context, {require,use,refine,state, datas})
	     * (context)
	     *
	     * @param context {object} context where to find the other stores (default : static staticContext )
	     * @param keys {Array} (passed to Store::map) Ex : ["session", "otherNamedStore:key", otherStore.as("otherKey")]
	     */
	    // default state
	    /**
	     *
	     * @type {number}
	     */
	    // overridable list of source stores
	    function Store() {
	        var _this$_require, _this$_require2;
	
	        _classCallCheck(this, Store);
	
	        var _this = _possibleConstructorReturn(this, (Store.__proto__ || Object.getPrototypeOf(Store)).call(this));
	
	        var argz = [].concat(Array.prototype.slice.call(arguments)),
	            _static = _this.constructor,
	            context = !isArray(argz[0]) && !isString(argz[0]) ? argz.shift() : _static.staticContext,
	            cfg = argz[0] && !isArray(argz[0]) && !isString(argz[0]) ? argz.shift() : {},
	            name = isString(argz[0]) ? argz[0] : cfg.name || _static.name,
	            watchs = isArray(argz[0]) ? argz.shift() : cfg.use || [],
	            // watchs need to be defined after all the store are registered : so we can't deal with any "static use" automaticly
	        refine = isFunction(argz[0]) ? argz.shift() : cfg.refine || null,
	            initialState = _static.initialState;
	
	        _this._uid = cfg._uid || shortid.generate();
	        _this._maxListeners = cfg.defaultMaxListeners || Store.defaultMaxListeners;
	        _this.locks = 0;
	        _this._onStabilize = [];
	
	        _this._persistenceTm = cfg.persistenceTm || _this.constructor.persistenceTm;
	        if (isString(argz[0])) {
	            if (context.__context[name]) console.warn("ReScope: Overwriting an existing static named store ( %s ) !!", name);
	            context.__context[name] = _this;
	        }
	
	        if (cfg && cfg.on) {
	            _this.on(cfg.on);
	        }
	        // this.state      = this.state || {};
	
	        _this._use = watchs;
	        _this.name = name;
	
	        if (context.stores) {
	            _this.contextObj = context;
	            _this.context = context.stores;
	        } else {
	            _this.contextObj = new Context(context);
	            _this.context = context.stores;
	        }
	
	        _this._stable = true;
	        _this._rev = 1;
	        _this._revs = {};
	        _this.stores = {};
	        _this.__retainLocks = { all: 0 };
	        _this._require = [];
	
	        if (_static.require) (_this$_require = _this._require).push.apply(_this$_require, _toConsumableArray(_static.require));
	        if (cfg.require) (_this$_require2 = _this._require).push.apply(_this$_require2, _toConsumableArray(cfg.require));
	
	        _this._followers = [];
	
	        if (cfg.hasOwnProperty("datas") && cfg.datas !== undefined) _this.datas = cfg.datas;
	        if (cfg.hasOwnProperty("state") && cfg.state !== undefined) initialState = cfg.state;
	
	        if (refine) _this.refine = refine;
	
	        if (!!_this._use && _this._use.length) {
	            // if there initial watchs anyway
	            _this.pull(_this._use);
	        }
	
	        if (initialState) {
	            // sync refine
	            _this.state = _extends({}, initialState);
	            if (_this.isComplete() && _this.datas === undefined) _this.datas = _this.refine(_this.datas, _this.state, _this.state);
	        }
	        _this._stable = _this.datas !== undefined; // stable if it have initial result datas
	        !_this._stable && _this.emit('unstable', _this.state);
	        return _this;
	    }
	
	    /**
	     * get a Builder-key pair for Store::map
	     * @param {string} name
	     * @returns {{store: Store, name: *}}
	     */
	
	    /**
	     * if retain goes to 0 :
	     * false to not destroy,
	     * 0 to sync auto destroy
	     * Ms to autodestroy after tm ms if no retain has been called
	     * @type {boolean|Int}
	     */
	    // overridable list of store that will allow push if updated
	
	
	    _createClass(Store, [{
	        key: 'shouldPropag',
	
	
	        /**
	         * Overridable method to know if a state change should be propag to the listening stores & components
	         * If static follow is defined, shouldPropag will return true if any of the "follow" keys was updated
	         * If not it will always return true
	         */
	        value: function shouldPropag(nDatas) {
	            var _static = this.constructor,
	                r,
	                cDatas = this.datas;
	
	            // if ( !cState )
	            //     return true;
	            if (!cDatas && (!_static.follow || !_static.follow.length || _static.follow && _static.follow.reduce(function (r, i) {
	                return r || nDatas && nDatas[i];
	            }, false))) return true;
	
	            if (isArray(_static.follow)) _static.follow.forEach(function (key) {
	                r = r || (nDatas ? cDatas[key] !== nDatas[key] : cDatas && cDatas[key]);
	            });else if (_static.follow === 'strict') r = nDatas === cDatas;else {
	                cDatas && Object.keys(cDatas).forEach(function (key) {
	                    r = r || (nDatas ? cDatas[key] !== nDatas[key] : cDatas && cDatas[key]);
	                });
	                nDatas && Object.keys(nDatas).forEach(function (key) {
	                    r = r || (nDatas ? cDatas[key] !== nDatas[key] : cDatas && cDatas[key]);
	                });
	            }
	
	            return !!r;
	        }
	
	        /**
	         * Overridable refiner / remapper
	         * If state or lastPublicState are simple hash maps refine will return {...datas, ...state}
	         * if not it will return the last private state
	         * @param datas
	         * @param state
	         * @returns {*}
	         */
	
	    }, {
	        key: 'refine',
	        value: function refine(datas, state, changes) {
	            state = state || this.state;
	
	            if (!datas || datas.__proto__ !== objProto || state.__proto__ !== objProto) return state;else return _extends({}, datas, state);
	        }
	
	        /**
	         * Debounce this store propagation ( & reducing )
	         * @param cb
	         */
	
	    }, {
	        key: 'stabilize',
	        value: function stabilize(cb) {
	            var _this2 = this;
	
	            var me = this;
	            cb && me.once('stable', cb);
	            this._stable && this.emit('unstable', this.state, this.datas);
	
	            me._stable = false;
	
	            if (this._stabilizer) clearTimeout(this._stabilizer);
	
	            this._stabilizer = setTimeout(this.push.bind(this, null, function () {
	                //@todo
	                // me._stable       = true;
	                _this2._stabilizer = null;
	                // this.release();
	            }));
	        }
	    }, {
	        key: 'dispatch',
	        value: function dispatch(event) {
	            return;
	        }
	
	        /**
	         * Pull stores in the private state
	         * @param stores  {Array} (passed to Store::map) Ex : ["session", "otherNamedStore:key", otherStore.as("otherKey")]
	         */
	
	    }, {
	        key: 'pull',
	        value: function pull(stores, doWait, origin) {
	            var _this3 = this;
	
	            var initialOutputs = Store.map(this, stores, this.contextObj, origin, true);
	            if (doWait) {
	                this.wait();
	                stores.forEach(function (s) {
	                    return _this3.context[s] && _this3.wait(_this3.context[s]);
	                });
	                this.release();
	            }
	            return initialOutputs;
	        }
	
	        /**
	         * Apply refine/remap on the private state & push the resulting "public" state to followers
	         * @param cb
	         */
	
	    }, {
	        key: 'push',
	        value: function push(datas, force, cb) {
	            cb = force === true ? cb : force;
	            force = force === true;
	            var i = 0,
	                me = this,
	                nextState = !datas && _extends({}, this.state, this._changesSW) || this.state,
	                nextDatas = datas || (this.isComplete(nextState) ? this.refine(this.datas, nextState, this._changesSW) : this.datas);
	
	            this.state = nextState;
	            if (!force && (!this.datas && this.datas === nextDatas || !this.shouldPropag(nextDatas))) {
	                cb && cb();
	                return false;
	            }
	
	            this.datas = nextDatas;
	            this.locks++;
	            this.release(cb);
	        }
	
	        /**
	         * Update the current private state & push it once the store is stable
	         * @param pState
	         * @param cb
	         */
	
	    }, {
	        key: 'setState',
	        value: function setState(pState, cb, sync) {
	            var i = 0,
	                change,
	                changes = this._changesSW = this._changesSW || {};
	            for (var k in pState) {
	                if (!this.state || pState.hasOwnProperty(k) && (pState[k] != this.state[k] || this.state[k] && pState[k] && pState[k]._rev != this._revs[k] // rev/hash update
	                )) {
	                    change = true;
	                    this._revs[k] = pState[k] && pState[k]._rev || true;
	                    changes[k] = pState[k];
	                }
	            }if (sync) {
	                this.push();
	                cb && cb();
	            } else {
	                if (change) {
	                    this.stabilize(cb);
	                } else cb && cb();
	            }
	            return this;
	        }
	
	        /**
	         * Update the current private state & push it once the store is stable
	         * @param pState
	         * @param cb
	         */
	
	    }, {
	        key: 'setStateSync',
	        value: function setStateSync(pState) {
	            var i = 0,
	                change,
	                changes = this._changesSW = this._changesSW || {};
	            for (var k in pState) {
	                if (!this.state || pState.hasOwnProperty(k) && (pState[k] != this.state[k] || this.state[k] && pState[k] && pState[k]._rev != this._revs[k] // rev/hash update
	                )) {
	                    change = true;
	                    this._revs[k] = pState[k] && pState[k]._rev || true;
	                    changes[k] = pState[k];
	                }
	            }this.push();
	            return this.datas;
	        }
	
	        /**
	         * Replace the current private state & push it once the store is stable
	         * @param pState
	         * @param cb
	         */
	
	    }, {
	        key: 'replaceState',
	        value: function replaceState(pState, cb) {
	            var i = 0,
	                me = this;
	            this.state = pState;
	
	            this.stabilize(cb);
	        }
	
	        /**
	         * get a store-key pair for Store::map
	         * @param {string} name
	         * @returns {{store: Store, name: *}}
	         */
	
	    }, {
	        key: 'as',
	        value: function as(name) {
	            return { store: this, name: name };
	        }
	    }, {
	        key: 'on',
	        value: function on(lists) {
	            var _this4 = this;
	
	            if (!isString(lists) && lists) Object.keys(lists).forEach(function (k) {
	                return _get(Store.prototype.__proto__ || Object.getPrototypeOf(Store.prototype), 'on', _this4).call(_this4, k, lists[k]);
	            });else _get(Store.prototype.__proto__ || Object.getPrototypeOf(Store.prototype), 'on', this).apply(this, arguments);
	        }
	    }, {
	        key: 'removeListener',
	        value: function removeListener(lists) {
	            var _this5 = this;
	
	            if (!isString(lists) && lists) Object.keys(lists).forEach(function (k) {
	                return _get(Store.prototype.__proto__ || Object.getPrototypeOf(Store.prototype), 'removeListener', _this5).call(_this5, k, lists[k]);
	            });else _get(Store.prototype.__proto__ || Object.getPrototypeOf(Store.prototype), 'removeListener', this).apply(this, arguments);
	        }
	
	        /**
	         * relink bindings & requires
	         * @param {string} name
	         * @returns {{store: Store, name: *}}
	         */
	
	    }, {
	        key: 'relink',
	        value: function relink(from) {
	            var _this6 = this;
	
	            var context = this.contextObj,
	                _static = this.constructor;
	            if (_static.use) {
	                //todo unlink
	                this.pull(_static.use, false, from);
	            }
	
	            if (this._require) {
	                this._require.forEach(function (store) {
	                    return _this6.wait(context.__context[store]);
	                });
	            }
	        }
	
	        /**
	         * is complete (all requiered keys are here)
	         * @returns bool
	         */
	
	    }, {
	        key: 'isComplete',
	        value: function isComplete() {
	            var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
	
	            var _static = this.constructor;
	            return !this._require || !this._require.length || state && this._require.reduce(function (r, key) {
	                return r && state[key];
	            }, true);
	        }
	
	        /**
	         * is stable
	         * @returns bool
	         */
	
	    }, {
	        key: 'isStable',
	        value: function isStable() {
	            return this._stable;
	        }
	
	        /**
	         * Un bind this store off the given component-key
	         * @param obj
	         * @param key
	         * @returns {Array.<*>}
	         */
	
	    }, {
	        key: 'unBind',
	        value: function unBind(obj, key) {
	            var followers = this._followers,
	                i = followers && followers.length;
	            while (followers && i--) {
	                if (followers[i][0] == obj && followers[i][1] == key) return followers.splice(i, 1);
	            }
	        }
	
	        /**
	         * Bind this store changes to the given component-key
	         * @param obj {React.Component|Store|function)
	         * @param key {string} optional key where to map the public state
	         */
	
	    }, {
	        key: 'bind',
	        value: function bind(obj, key) {
	            var setInitial = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	
	            this._followers.push([obj, key]);
	            if (setInitial && this.datas && this._stable) {
	                if (typeof obj != "function") {
	                    if (key) obj.setState(_defineProperty({}, key, this.datas));else obj.setState(this.datas);
	                } else {
	                    obj(this.datas);
	                }
	            }
	        }
	
	        /**
	         * once('stable', cb)
	         * @param obj {React.Component|Store|function)
	         * @param key {string} optional key where to map the public state
	         */
	
	    }, {
	        key: 'then',
	        value: function then(cb) {
	            var _this7 = this;
	
	            if (this._stable) return cb(null, this.datas);
	            this.once('stable', function (e) {
	                return cb(null, _this7.datas);
	            });
	        }
	
	        /**
	         * Add a lock so the store will not propag it state untill release() is call
	         * @param previous {Store|number|Array} @optional wf to wait, releases to wait or array of stuff to wait
	         * @returns {TaskFlow}
	         */
	
	    }, {
	        key: 'wait',
	        value: function wait(previous) {
	            if (typeof previous == "number") return this.locks += previous;
	            if (isArray(previous)) return previous.map(this.wait.bind(this));
	
	            this._stable && this.emit('unstable', this.state, this.datas);
	            this._stable = false;
	            this.locks++;
	            if (previous && isFunction(previous.then)) {
	                previous.then(this.release.bind(this, null));
	            }
	            return this;
	        }
	
	        /**
	         * Decrease locks for this store, if it reach 0 & it have a public state,
	         * it will be propagated to the followers,
	         * then, all stuff passed to "then" call back will be exec / released
	         * @param desync
	         * @returns {*}
	         */
	
	    }, {
	        key: 'release',
	        value: function release(cb) {
	            var _this8 = this;
	
	            var _static = this.constructor;
	            var i = 0;
	
	            if (this.locks == 0) console.error("Release more than locking !");
	
	            if (! --this.locks && this.datas && this.isComplete()) {
	                this._stable = true;
	
	                this._rev = 1 + (this._rev + 1) % 1000000; //
	                if (this._followers.length) this._followers.forEach(function (follower) {
	                    if (!_this8.datas) return;
	                    if (typeof follower[0] == "function") {
	                        follower[0](_this8.datas);
	                    } else {
	                        // cb && i++;
	                        follower[0].setState(follower[1] ? _defineProperty({}, follower[1], _this8.datas) : _this8.datas
	                        // ,
	                        // cb && (
	                        //     () => (!(--i) && cb())
	                        // )
	                        );
	                    }
	                });
	
	                this.emit('stable', this.datas);
	                this.emit('update', this.datas);
	                cb && cb();
	            } else cb && this.then(cb);
	            return this;
	        }
	    }, {
	        key: 'retain',
	        value: function retain(reason) {
	            //    console.log("retain", this._uid, reason);
	            this.__retainLocks.all++;
	            if (reason) {
	                this.__retainLocks[reason] = this.__retainLocks[reason] || 0;
	                this.__retainLocks[reason]++;
	            }
	        }
	    }, {
	        key: 'dispose',
	        value: function dispose(reason) {
	            var _this9 = this;
	
	            if (reason) {
	
	                if (this.__retainLocks[reason] == 0) throw new Error("Dispose more than retaining !");
	
	                this.__retainLocks[reason] = this.__retainLocks[reason] || 0;
	                this.__retainLocks[reason]--;
	            }
	
	            if (this.__retainLocks.all == 0) throw new Error("Dispose more than retaining !");
	
	            if (!this.__retainLocks.all) {
	                if (this._persistenceTm) {
	                    this._destroyTM && clearTimeout(this._destroyTM);
	                    this._destroyTM = setTimeout(function (e) {
	                        _this9.then(function (s) {
	                            //  console.log("wtf   ", reason, !this.__retainLocks.all);
	
	                            !_this9.__retainLocks.all && _this9.destroy();
	                        });
	                    }, this._persistenceTm);
	                } else {
	                    this.then(function (s) {
	                        return !_this9.__retainLocks.all && _this9.destroy();
	                    });
	                }
	            }
	        }
	    }, {
	        key: 'destroy',
	        value: function destroy() {
	            //  console.log("destroy", this._uid);
	
	            this.emit('destroy', this);
	            if (this._stabilizer) clearTimeout(this._stabilizer);
	            this._followers.length = 0;
	            this.dead = true;
	            this._revs = this.datas = this.state = this.context = null;
	            this.removeAllListeners();
	        }
	    }], [{
	        key: 'as',
	        value: function as(name) {
	            return { store: this, name: name };
	        }
	
	        /**
	         * Map all named stores in {keys} to the {object}'s state
	         * Hook componentWillUnmount (for react comp) or destroy to unBind them automatically
	         * @static
	         * @param object {React.Component|Store|...} target state aware object
	         * @param keys {Array} Ex : ["session", "otherStaticNamedStore:key", store.as('anotherKey')]
	         */
	
	    }, {
	        key: 'map',
	        value: function map(component, keys, context, origin) {
	            var _this10 = this;
	
	            var setInitial = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
	
	            var targetRevs = component._revs || {};
	            // var targetContext  = component.stores || (component.stores = new Context({}));
	            var initialOutputs = {};
	            keys = isArray(keys) ? [].concat(_toConsumableArray(keys)) : [keys];
	
	            context = context || Store.staticContext;
	
	            // if (!targetContext.__context)
	            //     debugger;
	
	            keys = keys.filter(
	            // @todo : use query refs
	            // (store)(\.store)*(\[(\*|(props)\w+)+)\])?(\:alias)
	            function (key) {
	                if (!key) {
	                    console.error("Not a mappable store item '" + key + "' in " + origin + ' !!');
	                    return false;
	                }
	                var name = void 0,
	                    alias = void 0,
	                    store = void 0;
	                if (key.store && key.name) {
	                    alias = name = key.name;
	                    store = key.store;
	                } else if (isFunction(key)) {
	                    name = alias = key.name || key.defaultName;
	                    store = key;
	                } else {
	                    key = key.match(/([\w_]+)(?:\:\[(\*)\])?(?:\:(\*))?/);
	                    name = key[0];
	                    store = context.__context[key[0]];
	                    alias = key[1] == '*' ? null : key[2] || key[0]; // allow binding props  ([*])
	                }
	
	                if (targetRevs[name]) return false; // ignore dbl uses for now
	                if (!store) {
	                    console.error("Not a mappable store item '" + name + "/" + alias + "' in " + origin + ' !!', store);
	                    return false;
	                } else if (isFunction(store)) {
	                    _this10.mountStore(name, context);
	
	                    context.__context[name].bind(component, alias, setInitial);
	                    // if ( context.__context[key[0]].state ) {// do sync push after constructor
	                    //     context.__context[key[0]].push();
	                    // }
	                } else {
	                    store.bind(component, alias, setInitial);
	                }
	                targetRevs[alias] = targetRevs[alias] || true;
	                // !targetContext.__context[alias] && targetContext.register({[alias] : context.__context[name]});
	                if (context.__context[name].hasOwnProperty('datas')) initialOutputs[alias] = context.datas[name];
	                return true;
	            });
	            var mixedCWUnmount,
	                unMountKey = component.isReactComponent ? "componentWillUnmount" : "destroy";
	
	            if (component.hasOwnProperty(unMountKey)) {
	                mixedCWUnmount = component[unMountKey];
	            }
	
	            component[unMountKey] = function () {
	                // todo hop
	                delete this[unMountKey];
	                if (mixedCWUnmount) this[unMountKey] = mixedCWUnmount;
	                keys.map(function (key) {
	                    var name = void 0,
	                        alias = void 0,
	                        store = void 0;
	                    if (key.store && key.name) {
	                        alias = name = key.name;
	                        store = key.store;
	                    } else if (isFunction(key)) {
	                        name = alias = key.name || key.defaultName;
	                        store = context.__context[name];
	                    } else {
	                        key = key.split(':');
	                        name = key[0];
	                        store = context.__context[key[0]];
	                        alias = key[1] || key[0];
	                    }
	
	                    store && !isFunction(store) && store.unBind(component, alias);
	                });
	                return this[unMountKey] && this[unMountKey].apply(this, arguments);
	            };
	
	            return initialOutputs;
	        }
	    }, {
	        key: 'getContext',
	        value: function getContext(contexts) {
	            var skey = isArray(contexts) ? contexts.sort(function (a, b) {
	                if (a.firstname < b.firstname) return -1;
	                if (a.firstname > b.firstname) return 1;
	                return 0;
	            }).join('::') : contexts;
	            return Context.contexts[skey] = Context.contexts[skey] || new Context({}, { id: skey });
	        }
	    }, {
	        key: 'mountStore',
	        value: function mountStore(name, context, store, state, datas) {
	            var ctx = void 0,
	                contextMap = context.__context;
	            contextMap[name] = store = store || contextMap[name];
	            if (!store) {
	                console.error("Not a mappable store item '" + name + ' !!', store);
	                return false;
	            } else if (isFunction(store)) {
	                //
	                if (store && (store.contexts || store.context)) {
	                    ctx = this.getContext(store.contexts || [store.context]);
	
	                    ctx.register(_defineProperty({}, name, ctx.__context[name] || store));
	
	                    contextMap[name] = ctx[name] = new store(context, { state: state, datas: datas });
	                    ctx._watchStore(name);
	                    return ctx[name];
	                } else store = contextMap[name] = new store(context, { state: state, datas: datas });
	                contextMap[name].relink(name);
	            } else {
	                if (state !== undefined && datas === undefined) store.setState(state);else if (state !== undefined) store.state = state;
	
	                if (datas !== undefined) store.push(datas);
	            }
	            return store;
	        }
	    }]);
	
	    return Store;
	}(EventEmitter);
	
	Store.use = [];
	Store.staticContext = new Context({}, { id: "static" });
	Store.initialState = undefined;
	Store.defaultMaxListeners = 100;
	Store.persistenceTm = false;
	exports.default = Store;
	module.exports = exports['default'];

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDRmYWFiYWUwOTM4OTA2NzJkODIiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc2NvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pc3N0cmluZy9pc1N0cmluZy51bWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pc2FycmF5L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2lzZnVuY3Rpb24vbGliL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9hbHBoYWJldC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL3JhbmRvbS9yYW5kb20tZnJvbS1zZWVkLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvZW5jb2RlLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvcmFuZG9tL3JhbmRvbS1ieXRlLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9kZWNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL2lzLXZhbGlkLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvdXRpbC9jbHVzdGVyLXdvcmtlci1pZC1icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9TdG9yZS5qcyJdLCJuYW1lcyI6WyJTdG9yZSIsIkNvbnRleHQiLCJpc1N0cmluZyIsInJlcXVpcmUiLCJpc0FycmF5IiwiRXZlbnRFbWl0dGVyIiwiaXNGdW5jdGlvbiIsInNob3J0aWQiLCJfX3Byb3RvX19wdXNoIiwidGFyZ2V0IiwiaWQiLCJwYXJlbnQiLCJoZXJlIiwicHJvdG90eXBlIiwib3BlbkNvbnRleHRzIiwiY3R4Iiwic3RhdGUiLCJkYXRhcyIsIm5hbWUiLCJkZWZhdWx0TWF4TGlzdGVuZXJzIiwicGVyc2lzdGVuY2VUbSIsImF1dG9EZXN0cm95IiwiX21heExpc3RlbmVycyIsImNvbnN0cnVjdG9yIiwiX2lkIiwiZ2VuZXJhdGUiLCJfaXNMb2NhbElkIiwiX3BlcnNpc3RlbmNlVG0iLCJzdG9yZXMiLCJfYWRkQ2hpbGQiLCJzb3VyY2VzIiwiX2NoaWxkQ29udGV4dHMiLCJfX3JldGFpbkxvY2tzIiwiYWxsIiwiX193OExvY2tzIiwiX19saXN0ZW5pbmciLCJfX2NvbnRleHQiLCJfX21peGVkIiwiX19taXhlZExpc3QiLCJfZm9sbG93ZXJzIiwicmV0YWluIiwiX3N0YWJsZSIsIndhaXQiLCJvbiIsIl9fcGFyZW50TGlzdCIsInJlbGVhc2UiLCJfcHJvcGFnIiwicmVnaXN0ZXIiLCJzZXRUaW1lb3V0IiwiZGlzcG9zZSIsImZvckVhY2giLCJfbW91bnQiLCJrIiwiYXJndW1lbnRzIiwicmVkdWNlIiwibW91bnRlZCIsIm1vdW50U3RvcmUiLCJfd2F0Y2hTdG9yZSIsImlzU3RhYmxlIiwicHJvcGFnIiwidGFyZ2V0Q3R4IiwibGlzdHMiLCJwdXNoIiwicmVsaW5rIiwicmF3Q3R4IiwiT2JqZWN0Iiwia2V5cyIsInNpbmdsZXRvbiIsInNyY0N0eCIsImV4dGVybmFsIiwibGN0eCIsIl9zdG9yZXMiLCJjb25zb2xlIiwid2FybiIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiX3N0YXRlIiwic2V0IiwidiIsIl9kYXRhcyIsInVuZGVmaW5lZCIsIm9iaiIsImtleSIsImFzIiwic2V0SW5pdGlhbCIsImxhc3RSZXZzIiwicmV2cyIsIm1vdW50IiwiZ2V0VXBkYXRlcyIsInNldFN0YXRlIiwiZm9sbG93ZXJzIiwiaSIsImxlbmd0aCIsInNwbGljZSIsInRvIiwiYmluZCIsIm91dHB1dCIsInVwZGF0ZWQiLCJoYXNPd25Qcm9wZXJ0eSIsIl9yZXYiLCJmbGFnc19zdGF0ZXMiLCJmbGFnc19kYXRhcyIsIl9mbGFnc19zdGF0ZXMiLCJfZmxhZ3NfZGF0YXMiLCJmbGFncyIsInIiLCJmbGFnIiwidGVzdCIsImNiIiwib25jZSIsInF1aWV0IiwicmVhc29uIiwiZW1pdCIsImVycm9yIiwiX3N0YWJpbGl6ZXJUTSIsImNsZWFyVGltZW91dCIsIl9wcm9wYWdUTSIsImNoaWxkcyIsIl9nZXRBbGxDaGlsZHMiLCJpbmRleE9mIiwiRXJyb3IiLCJfZGVzdHJveVRNIiwidGhlbiIsImRlc3Ryb3kiLCJyZW1vdmVMaXN0ZW5lciIsImNvbnRleHRPYmoiLCJzaGlmdCIsIl9ybUNoaWxkIiwiY29udGV4dHMiLCJvYmpQcm90byIsImdldFByb3RvdHlwZU9mIiwiYXJneiIsIl9zdGF0aWMiLCJjb250ZXh0Iiwic3RhdGljQ29udGV4dCIsImNmZyIsIndhdGNocyIsInVzZSIsInJlZmluZSIsImluaXRpYWxTdGF0ZSIsIl91aWQiLCJsb2NrcyIsIl9vblN0YWJpbGl6ZSIsIl91c2UiLCJfcmV2cyIsIl9yZXF1aXJlIiwicHVsbCIsImlzQ29tcGxldGUiLCJuRGF0YXMiLCJjRGF0YXMiLCJmb2xsb3ciLCJjaGFuZ2VzIiwiX19wcm90b19fIiwibWUiLCJfc3RhYmlsaXplciIsImV2ZW50IiwiZG9XYWl0Iiwib3JpZ2luIiwiaW5pdGlhbE91dHB1dHMiLCJtYXAiLCJzIiwiZm9yY2UiLCJuZXh0U3RhdGUiLCJfY2hhbmdlc1NXIiwibmV4dERhdGFzIiwic2hvdWxkUHJvcGFnIiwicFN0YXRlIiwic3luYyIsImNoYW5nZSIsInN0YWJpbGl6ZSIsInN0b3JlIiwiZnJvbSIsInByZXZpb3VzIiwiZm9sbG93ZXIiLCJkZWFkIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiY29tcG9uZW50IiwidGFyZ2V0UmV2cyIsImZpbHRlciIsImFsaWFzIiwiZGVmYXVsdE5hbWUiLCJtYXRjaCIsIm1peGVkQ1dVbm1vdW50IiwidW5Nb3VudEtleSIsImlzUmVhY3RDb21wb25lbnQiLCJzcGxpdCIsInVuQmluZCIsImFwcGx5Iiwic2tleSIsInNvcnQiLCJhIiwiYiIsImZpcnN0bmFtZSIsImpvaW4iLCJjb250ZXh0TWFwIiwiZ2V0Q29udGV4dCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM1QkE7Ozs7QUFDQTs7Ozs7O0FBWEE7Ozs7Ozs7Ozs7QUFhQSxtQkFBUUEsS0FBUjs7bUJBRWUsRUFBQ0Esc0JBQUQsRUFBUUMsMEJBQVIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZmY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkE7Ozs7Ozs7QUFRQSxLQUFJQyxXQUFXLG1CQUFBQyxDQUFRLENBQVIsQ0FBZjtBQUFBLEtBQ0lDLFVBQVUsbUJBQUFELENBQVEsQ0FBUixDQURkO0FBQUEsS0FFSUUsZUFBZSxtQkFBQUYsQ0FBUSxDQUFSLENBRm5CO0FBQUEsS0FHSUcsYUFBYSxtQkFBQUgsQ0FBUSxDQUFSLENBSGpCO0FBQUEsS0FJTUksVUFBVSxtQkFBQUosQ0FBUSxDQUFSLENBSmhCO0FBQUEsS0FLTUssZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFDQyxNQUFELEVBQVNDLEVBQVQsRUFBYUMsTUFBYixFQUF3QjtBQUN0QyxTQUFJQywyQkFDQ0YsRUFERCxFQUNNLFlBQVksQ0FDakIsQ0FGRCxDQUFKO0FBSUFFLFVBQUtGLEVBQUwsRUFBU0csU0FBVCxHQUFxQkYsU0FBUyxJQUFJQSxPQUFPLE1BQU1ELEVBQWIsQ0FBSixFQUFULEdBQWtDRCxPQUFPQyxFQUFQLEtBQWMsRUFBckU7QUFDQUQsWUFBT0MsRUFBUCxJQUFhLElBQUlFLEtBQUtGLEVBQUwsQ0FBSixFQUFiO0FBQ0FELFlBQU8sTUFBTUMsRUFBYixJQUFtQkUs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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGdCQUFlLFNBQVM7QUFDeEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUc7QUFDSCxxQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQzdTQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDVEE7QUFDQTs7Ozs7OztBQ0RBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDaEVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FB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LE1BQU01RyxJQUFOLENBQVc3QyxLQUFYO0FBQ1A7QUFDRCxvQkFBT3lKLEtBQVA7QUFDSDs7OztHQTlQOEJySyxZOztBQUFkTCxNLENBRVZ5SSxHLEdBQTZCLEU7QUFGbkJ6SSxNLENBS1ZzSSxhLEdBQTZCLElBQUlySSxPQUFKLENBQVksRUFBWixFQUFnQixFQUFDUyxJQUFLLFFBQU4sRUFBaEIsQztBQUxuQlYsTSxDQU1WMkksWSxHQUE2QjNELFM7QUFObkJoRixNLENBV0htQixtQixHQUFzQixHO0FBWG5CbkIsTSxDQW1CSG9CLGEsR0FBc0IsSzttQkFuQm5CcEIsSyIsImZpbGUiOiJkaXN0L1Jlc2NvcGUuYnJvd3Nlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwNGZhYWJhZTA5Mzg5MDY3MmQ4MiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgIDIwMTcgQ2FpcGkgTGFicyAuXHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi9Db250ZXh0XCI7XHJcbmltcG9ydCBTdG9yZSBmcm9tIFwiLi9TdG9yZVwiO1xyXG5cclxuQ29udGV4dC5TdG9yZSA9IFN0b3JlO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1N0b3JlLCBDb250ZXh0fTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SZXNjb3BlLmpzIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDE3LiAgQ2FpcGkgTGFicy4gIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFRoaXMgRmlsZSBpcyBwYXJ0IG9mIENhaXBpLiBZb3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XHJcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXHJcbiAqIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZVxyXG4gKiBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcclxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcclxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxyXG4gKiBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXHJcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXHJcbiAqICBUaGlzIHByb2plY3QgaXMgZHVhbCBsaWNlbnNlZCB1bmRlciBBR1BMIGFuZCBDb21tZXJjaWFsIExpY2VuY2UuXHJcbiAqXHJcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cclxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEBhdXRob3IgTmF0aGFuYWVsIEJSQVVOXHJcbiAqXHJcbiAqIERhdGU6IDEzLzA4LzIwMTdcclxuICogVGltZTogMTc6MTVcclxuICovXHJcblxyXG5cclxudmFyIGlzU3RyaW5nID0gcmVxdWlyZSgnaXNzdHJpbmcnKSxcclxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCdpc2FycmF5JyksXHJcbiAgICBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKSxcclxuICAgIGlzRnVuY3Rpb24gPSByZXF1aXJlKCdpc2Z1bmN0aW9uJylcclxuICAgICwgc2hvcnRpZCA9IHJlcXVpcmUoJ3Nob3J0aWQnKVxyXG4gICAgLCBfX3Byb3RvX19wdXNoID0gKHRhcmdldCwgaWQsIHBhcmVudCkgPT4ge1xyXG4gICAgICAgIGxldCBoZXJlID0ge1xyXG4gICAgICAgICAgICBbaWRdOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGhlcmVbaWRdLnByb3RvdHlwZSA9IHBhcmVudCA/IG5ldyBwYXJlbnRbXCJfXCIgKyBpZF0oKSA6IHRhcmdldFtpZF0gfHwge307XHJcbiAgICAgICAgdGFyZ2V0W2lkXSA9IG5ldyBoZXJlW2lkXSgpO1xyXG4gICAgICAgIHRhcmdldFsnXycgKyBpZF0gPSBoZXJlW2lkXTtcclxuICAgIH07XHJcblxyXG5sZXQgb3BlbkNvbnRleHRzID0ge307XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGV4dCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XHJcbiAgICBzdGF0aWMgY29udGV4dHMgPSBvcGVuQ29udGV4dHM7XHJcbiAgICBzdGF0aWMgU3RvcmUgPSBudWxsO1xyXG4gICAgc3RhdGljIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDA7XHJcbiAgICBzdGF0aWMgcGVyc2lzdGVuY2VUbSA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY3R4LCB7aWQsIHBhcmVudCwgc3RhdGUsIGRhdGFzLCBuYW1lLCBkZWZhdWx0TWF4TGlzdGVuZXJzLCBwZXJzaXN0ZW5jZVRtLCBhdXRvRGVzdHJveX0gPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX21heExpc3RlbmVycyA9IGRlZmF1bHRNYXhMaXN0ZW5lcnMgfHwgdGhpcy5jb25zdHJ1Y3Rvci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xyXG4gICAgICAgIHRoaXMuX2lkID0gaWQgPSBpZCB8fCAoXCJfX19fX1wiICsgc2hvcnRpZC5nZW5lcmF0ZSgpKTtcclxuXHJcbiAgICAgICAgaWYgKG9wZW5Db250ZXh0c1tpZF0pIHtcclxuICAgICAgICAgICAgLy8gb3BlbkNvbnRleHRzW2lkXS5yZWdpc3RlcihjdHgpO1xyXG4gICAgICAgICAgICByZXR1cm4gb3BlbkNvbnRleHRzW2lkXVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb3BlbkNvbnRleHRzW2lkXSA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5faXNMb2NhbElkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9wZXJzaXN0ZW5jZVRtID0gcGVyc2lzdGVuY2VUbSB8fCB0aGlzLmNvbnN0cnVjdG9yLnBlcnNpc3RlbmNlVG07XHJcblxyXG4gICAgICAgIHRoaXMuc3RvcmVzID0ge307XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xyXG4gICAgICAgIHRoaXMuZGF0YXMgPSB7fTtcclxuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnLCBwYXJlbnQpO1xyXG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJywgcGFyZW50KTtcclxuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdkYXRhcycsIHBhcmVudCk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcblxyXG4gICAgICAgIGlmIChwYXJlbnQpIHtcclxuICAgICAgICAgICAgcGFyZW50Ll9hZGRDaGlsZCh0aGlzKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNvdXJjZXMgPSBbXTtcclxuICAgICAgICB0aGlzLl9jaGlsZENvbnRleHRzID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuX19yZXRhaW5Mb2NrcyA9IHthbGw6IDB9O1xyXG4gICAgICAgIHRoaXMuX193OExvY2tzID0ge2FsbDogMX07XHJcbiAgICAgICAgdGhpcy5fX2xpc3RlbmluZyA9IHt9O1xyXG4gICAgICAgIHRoaXMuX19jb250ZXh0ID0ge307XHJcbiAgICAgICAgdGhpcy5fX21peGVkID0gW107XHJcbiAgICAgICAgdGhpcy5fX21peGVkTGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2ZvbGxvd2VycyA9IFtdO1xyXG4gICAgICAgIGlmIChwYXJlbnQpIHtcclxuICAgICAgICAgICAgcGFyZW50LnJldGFpbihcImlzTXlQYXJlbnRcIik7XHJcbiAgICAgICAgICAgICFwYXJlbnQuX3N0YWJsZSAmJiB0aGlzLndhaXQoXCJpc015UGFyZW50XCIpO1xyXG4gICAgICAgICAgICBwYXJlbnQub24odGhpcy5fX3BhcmVudExpc3QgPSB7XHJcbiAgICAgICAgICAgICAgICAnc3RhYmxlJzogcyA9PiB0aGlzLnJlbGVhc2UoXCJpc015UGFyZW50XCIpLFxyXG4gICAgICAgICAgICAgICAgJ3Vuc3RhYmxlJzogcyA9PiB0aGlzLndhaXQoXCJpc015UGFyZW50XCIpLFxyXG4gICAgICAgICAgICAgICAgJ3VwZGF0ZSc6IHMgPT4gdGhpcy5fcHJvcGFnKClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMucmVnaXN0ZXIocGFyZW50Ll9fY29udGV4dCwgc3RhdGUsIGRhdGFzKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB0aGlzLnJlZ2lzdGVyKGN0eCwgc3RhdGUsIGRhdGFzKTtcclxuICAgICAgICB0aGlzLl9fdzhMb2Nrcy5hbGwtLTtcclxuICAgICAgICB0aGlzLl9zdGFibGUgPSAhdGhpcy5fX3c4TG9ja3MuYWxsO1xyXG5cclxuICAgICAgICBpZiAoYXV0b0Rlc3Ryb3kpXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgICAgICB0bSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXRhaW4oXCJhdXRvRGVzdHJveVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3Bvc2UoXCJhdXRvRGVzdHJveVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRDb250ZXh0KGtleSkge1xyXG4gICAgICAgIHJldHVybiBvcGVuQ29udGV4dHNba2V5XSA9IG9wZW5Db250ZXh0c1trZXldIHx8IG5ldyBDb250ZXh0KHt9KTtcclxuICAgIH07XHJcblxyXG4gICAgbW91bnQoaWQsIHN0YXRlLCBkYXRhcykge1xyXG4gICAgICAgIGlmIChpc0FycmF5KGlkKSkge1xyXG4gICAgICAgICAgICBpZC5mb3JFYWNoKGsgPT4gdGhpcy5fbW91bnQoaywgc3RhdGUgJiYgc3RhdGVba10sIGRhdGFzICYmIGRhdGFzW2tdKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fbW91bnQoLi4uYXJndW1lbnRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgX21vdW50KGlkLCBzdGF0ZSwgZGF0YXMpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX19jb250ZXh0W2lkXSkgey8vYXNrIG1peGVkIHx8IHBhcmVudFxyXG4gICAgICAgICAgICBpZiAodGhpcy5fX21peGVkLnJlZHVjZSgobW91bnRlZCwgY3R4KSA9PiAobW91bnRlZCB8fCBjdHguX21vdW50KGlkLCBzdGF0ZSwgZGF0YXMpKSwgZmFsc2UpIHx8XHJcbiAgICAgICAgICAgICAgICAhdGhpcy5wYXJlbnQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5fbW91bnQoLi4uYXJndW1lbnRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5TdG9yZS5tb3VudFN0b3JlKGlkLCB0aGlzLCBudWxsLCBzdGF0ZSwgZGF0YXMpO1xyXG4gICAgICAgIHRoaXMuX3dhdGNoU3RvcmUoaWQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9fY29udGV4dFtpZF07XHJcbiAgICB9XHJcblxyXG4gICAgX3dhdGNoU3RvcmUoaWQsIHN0YXRlLCBkYXRhcykge1xyXG4gICAgICAgIGlmICghdGhpcy5fX2NvbnRleHRbaWRdKSB7Ly9hc2sgbWl4ZWQgfHwgcGFyZW50XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9fbWl4ZWQucmVkdWNlKChtb3VudGVkLCBjdHgpID0+IChtb3VudGVkIHx8IGN0eC5fd2F0Y2hTdG9yZShpZCwgc3RhdGUsIGRhdGFzKSksIGZhbHNlKSB8fFxyXG4gICAgICAgICAgICAgICAgIXRoaXMucGFyZW50KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQuX3dhdGNoU3RvcmUoLi4uYXJndW1lbnRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLl9fbGlzdGVuaW5nW2lkXSAmJiAhaXNGdW5jdGlvbih0aGlzLl9fY29udGV4dFtpZF0pKSB7XHJcbiAgICAgICAgICAgICF0aGlzLl9fY29udGV4dFtpZF0uaXNTdGFibGUoKSAmJiB0aGlzLndhaXQoaWQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fX2NvbnRleHRbaWRdLm9uKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2xpc3RlbmluZ1tpZF0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3VwZGF0ZSc6IHMgPT4gdGhpcy5wcm9wYWcoKSxcclxuICAgICAgICAgICAgICAgICAgICAnc3RhYmxlJzogcyA9PiB0aGlzLnJlbGVhc2UoaWQpLFxyXG4gICAgICAgICAgICAgICAgICAgICd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KGlkKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIG1peGluKHRhcmdldEN0eCkge1xyXG4gICAgICAgIGxldCBwYXJlbnQgPSB0aGlzLnBhcmVudCwgbGlzdHM7XHJcbiAgICAgICAgdGhpcy5fX21peGVkLnB1c2godGFyZ2V0Q3R4KVxyXG4gICAgICAgIHRhcmdldEN0eC5yZXRhaW4oKTtcclxuICAgICAgICBpZiAoIXRhcmdldEN0eC5fc3RhYmxlKVxyXG4gICAgICAgICAgICB0aGlzLndhaXQodGFyZ2V0Q3R4Ll9pZCk7XHJcblxyXG4gICAgICAgIHRoaXMuX19taXhlZExpc3QucHVzaChsaXN0cyA9IHtcclxuICAgICAgICAgICAgJ3N0YWJsZSc6IHMgPT4gdGhpcy5yZWxlYXNlKHRhcmdldEN0eC5faWQpLFxyXG4gICAgICAgICAgICAndW5zdGFibGUnOiBzID0+IHRoaXMud2FpdCh0YXJnZXRDdHguX2lkKSxcclxuICAgICAgICAgICAgJ3VwZGF0ZSc6IHMgPT4gdGhpcy5fcHJvcGFnKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRhcmdldEN0eC5vbihsaXN0cyk7XHJcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJywgcGFyZW50KTtcclxuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScsIHBhcmVudCk7XHJcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnZGF0YXMnLCBwYXJlbnQpO1xyXG4gICAgICAgIHRhcmdldEN0eC5yZWxpbmsodGFyZ2V0Q3R4Ll9fY29udGV4dCwgdGhpcywgdHJ1ZSk7XHJcblxyXG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycsIHRoaXMpO1xyXG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJywgdGhpcyk7XHJcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnZGF0YXMnLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnJlbGluayh0aGlzLl9fY29udGV4dCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXIocmF3Q3R4LCBzdGF0ZSA9IHt9LCBkYXRhcyA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy5yZWxpbmsocmF3Q3R4LCB0aGlzLCBmYWxzZSwgc3RhdGUsIGRhdGFzKTtcclxuICAgICAgICBPYmplY3Qua2V5cyhyYXdDdHgpLmZvckVhY2goXHJcbiAgICAgICAgICAgIGlkID0+IChpc0Z1bmN0aW9uKHJhd0N0eFtpZF0pICYmIHJhd0N0eFtpZF0uc2luZ2xldG9uICYmIHRoaXMuX21vdW50KGlkLCBzdGF0ZVtpZF0sIGRhdGFzW2lkXSkpKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1hcCBzcmNDdHggc3RvcmUncyBvbiB0YXJnZXRDdHggaGVhZGVycyBwcm90bydzXHJcbiAgICAgKiBAcGFyYW0gc3JjQ3R4XHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0Q3R4XHJcbiAgICAgKiBAcGFyYW0gc3RhdGVcclxuICAgICAqIEBwYXJhbSBkYXRhc1xyXG4gICAgICovXHJcbiAgICByZWxpbmsoc3JjQ3R4LCB0YXJnZXRDdHggPSB0aGlzLCBleHRlcm5hbCwgc3RhdGUgPSB7fSwgZGF0YXMgPSB7fSkge1xyXG4gICAgICAgIGxldCBsY3R4ID0gdGFyZ2V0Q3R4Ll9zdG9yZXMucHJvdG90eXBlO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHNyY0N0eClcclxuICAgICAgICAgICAgLmZvckVhY2goXHJcbiAgICAgICAgICAgICAgICBpZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldEN0eC5fX2NvbnRleHRbaWRdID09PSBzcmNDdHhbaWRdIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEN0eC5fX2NvbnRleHRbaWRdICYmICh0YXJnZXRDdHguX19jb250ZXh0W2lkXS5jb25zdHJ1Y3RvciA9PT0gc3JjQ3R4W2lkXSApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRDdHguX19jb250ZXh0W2lkXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJSZXNjb3BlIENvbnRleHQgOiBcIiwgaWQsIFwiIGFscmVhZHkgZXhpc3QgaW4gdGhpcyBjb250ZXh0ICFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFleHRlcm5hbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fX2NvbnRleHRbaWRdID0gc3JjQ3R4W2lkXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsY3R4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKChjdHgsIGlkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiAoKSA9PiB0aGlzLl9fY29udGV4dFtpZF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuX19jb250ZXh0LCBpZClcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll9zdGF0ZS5wcm90b3R5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKGN0eCwgaWQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQ6ICgpID0+IChjdHhbaWRdICYmIGN0eFtpZF0uc3RhdGUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldDogKHYpID0+ICh0aGlzLl9tb3VudChpZCwgdikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLl9fY29udGV4dCwgaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEN0eC5fZGF0YXMucHJvdG90eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKChjdHgsIGlkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiAoKSA9PiAoY3R4W2lkXSAmJiBjdHhbaWRdLmRhdGFzKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQ6ICh2KSA9PiAodGhpcy5fbW91bnQoaWQsIHVuZGVmaW5lZCwgdikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLl9fY29udGV4dCwgaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxyXG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcclxuICAgICAqL1xyXG4gICAgYmluZChvYmosIGtleSwgYXMsIHNldEluaXRpYWwgPSB0cnVlKSB7XHJcbiAgICAgICAgbGV0IGxhc3RSZXZzLCBkYXRhcztcclxuICAgICAgICBpZiAoa2V5ICYmICFpc0FycmF5KGtleSkpXHJcbiAgICAgICAgICAgIGtleSA9IFtrZXldO1xyXG5cclxuICAgICAgICAvLyBrZXkgPSBrZXl8fFxyXG5cclxuICAgICAgICBpZiAoYXMgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgc2V0SW5pdGlhbCA9IHRydWU7XHJcbiAgICAgICAgICAgIGFzID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5wdXNoKFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBvYmosXHJcbiAgICAgICAgICAgICAgICBrZXksXHJcbiAgICAgICAgICAgICAgICBhcyxcclxuICAgICAgICAgICAgICAgIGxhc3RSZXZzID0ga2V5ICYmIGtleS5yZWR1Y2UoKHJldnMsIGlkKSA9PiAocmV2c1tpZF0gPSAwLCByZXZzKSwge30pXHJcbiAgICAgICAgICAgIF0pO1xyXG5cclxuICAgICAgICB0aGlzLm1vdW50KGtleSk7XHJcblxyXG4gICAgICAgIGlmIChzZXRJbml0aWFsICYmIHRoaXMuX3N0YWJsZSkge1xyXG4gICAgICAgICAgICBkYXRhcyA9IHRoaXMuZ2V0VXBkYXRlcyhsYXN0UmV2cyk7XHJcbiAgICAgICAgICAgIGlmICghZGF0YXMpIHJldHVybjtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmogIT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXMpIG9iai5zZXRTdGF0ZSh7W2FzXTogZGF0YXN9KTtcclxuICAgICAgICAgICAgICAgIGVsc2Ugb2JqLnNldFN0YXRlKGRhdGFzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG9iaihkYXRhcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gbGFzdFJldnMgJiZcclxuICAgICAgICAgICAgLy8ga2V5LmZvckVhY2goaWQgPT4gKGxhc3RSZXZzW2lkXSA9IHRoaXMuc3RvcmVzW2lkXSAmJiB0aGlzLnN0b3Jlc1tpZF0uX3JldiB8fCAwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVW4gYmluZCB0aGlzIGNvbnRleHQgb2ZmIHRoZSBnaXZlbiBjb21wb25lbnQta2V5c1xyXG4gICAgICogQHBhcmFtIG9ialxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICogQHJldHVybnMge0FycmF5LjwqPn1cclxuICAgICAqL1xyXG4gICAgdW5CaW5kKG9iaiwga2V5LCBhcykge1xyXG4gICAgICAgIHZhciBmb2xsb3dlcnMgPSB0aGlzLl9mb2xsb3dlcnMsXHJcbiAgICAgICAgICAgIGkgPSBmb2xsb3dlcnMgJiYgZm9sbG93ZXJzLmxlbmd0aDtcclxuICAgICAgICB3aGlsZSAoZm9sbG93ZXJzICYmIGktLSlcclxuICAgICAgICAgICAgaWYgKGZvbGxvd2Vyc1tpXVswXSA9PT0gb2JqICYmICgnJyArIGZvbGxvd2Vyc1tpXVsxXSkgPT0gKCcnICsga2V5KSAmJlxyXG4gICAgICAgICAgICAgICAgKCcnICsgZm9sbG93ZXJzW2ldWzJdKSA9PSAoJycgKyBhcykpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9sbG93ZXJzLnNwbGljZShpLCAxKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbWFwKHRvLCBzdG9yZXMsIGJpbmQgPSB0cnVlKSB7XHJcbiAgICAgICAgdGhpcy5tb3VudChzdG9yZXMpO1xyXG4gICAgICAgIGJpbmQgJiYgdGhpcy5iaW5kKHRvLCBzdG9yZXMsIG51bGwsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN0b3Jlcy5yZWR1Y2UoKGRhdGFzLCBpZCkgPT4gKGRhdGFzW2lkXSA9IHRoaXMuc3RvcmVzW2lkXSAmJiB0aGlzLnN0b3Jlc1tpZF0uZGF0YXMsIGRhdGFzKSwge30pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFVwZGF0ZXMocmV2cywgb3V0cHV0LCB1cGRhdGVkKSB7XHJcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX19jb250ZXh0O1xyXG5cclxuICAgICAgICBvdXRwdXQgPSBvdXRwdXQgfHwge307XHJcbiAgICAgICAgT2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxyXG4gICAgICAgICAgICBpZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW91dHB1dFtpZF1cclxuICAgICAgICAgICAgICAgICAgICAmJiAoICFyZXZzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8IChyZXZzLmhhc093blByb3BlcnR5KGlkKSAmJiByZXZzW2lkXSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCAhKCAhcmV2cy5oYXNPd25Qcm9wZXJ0eShpZCkgfHwgY3R4W2lkXS5fcmV2IDw9IHJldnNbaWRdICkpXHJcbiAgICAgICAgICAgICAgICApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dFtpZF0gPSB0aGlzLmRhdGFzW2lkXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmV2cyAmJiByZXZzW2lkXSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXZzW2lkXSA9IGN0eFtpZF0uX3JldjtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHVwZGF0ZWQgPSB0aGlzLl9fbWl4ZWQucmVkdWNlKCh1cGRhdGVkLCBjdHgpID0+IChjdHguZ2V0VXBkYXRlcyhyZXZzLCBvdXRwdXQsIHVwZGF0ZWQpIHx8IHVwZGF0ZWQpLCB1cGRhdGVkKTtcclxuICAgICAgICB1cGRhdGVkID0gdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZ2V0VXBkYXRlcyhyZXZzLCBvdXRwdXQsIHVwZGF0ZWQpIHx8IHVwZGF0ZWQ7XHJcbiAgICAgICAgcmV0dXJuIHVwZGF0ZWQgJiYgb3V0cHV0O1xyXG4gICAgfVxyXG5cclxuICAgIHNlcmlhbGl6ZShmbGFnc19zdGF0ZXMgPSAvLiovLCBmbGFnc19kYXRhcyA9IC8uKi8pIHtcclxuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fX2NvbnRleHQsIG91dHB1dCA9IHtzdGF0ZToge30sIGRhdGFzOiB7fX0sXHJcbiAgICAgICAgICAgIF9mbGFnc19zdGF0ZXMsXHJcbiAgICAgICAgICAgIF9mbGFnc19kYXRhcztcclxuICAgICAgICBpZiAoaXNBcnJheShmbGFnc19zdGF0ZXMpKVxyXG4gICAgICAgICAgICBmbGFnc19zdGF0ZXMuZm9yRWFjaChpZCA9PiAob3V0cHV0LnN0YXRlW2lkXSA9IHRoaXMuc3RhdGVbaWRdKSlcclxuXHJcbiAgICAgICAgaWYgKGlzQXJyYXkoZmxhZ3NfZGF0YXMpKVxyXG4gICAgICAgICAgICBmbGFnc19kYXRhcy5mb3JFYWNoKGlkID0+IChvdXRwdXQuZGF0YXNbaWRdID0gdGhpcy5kYXRhc1tpZF0pKVxyXG5cclxuICAgICAgICBpZiAoIWlzQXJyYXkoZmxhZ3NfZGF0YXMpICYmICFpc0FycmF5KGZsYWdzX3N0YXRlcykpXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGN0eCkuZm9yRWFjaChcclxuICAgICAgICAgICAgICAgIGlkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNGdW5jdGlvbihjdHhbaWRdKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgZmxhZ3MgPSBjdHhbaWRdLmNvbnN0cnVjdG9yLmZsYWdzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmbGFncyA9IGlzQXJyYXkoZmxhZ3MpID8gZmxhZ3MgOiBbZmxhZ3MgfHwgXCJcIl07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmbGFncy5yZWR1Y2UoKHIsIGZsYWcpID0+IChyIHx8IF9mbGFnc19zdGF0ZXMudGVzdChmbGFnKSksIGZhbHNlKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnN0YXRlW2lkXSA9IHRoaXMuc3RhdGVbaWRdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmxhZ3MucmVkdWNlKChyLCBmbGFnKSA9PiAociB8fCBfZmxhZ3NfZGF0YXMudGVzdChmbGFnKSksIGZhbHNlKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LmRhdGFzW2lkXSA9IHRoaXMuZGF0YXNbaWRdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH1cclxuXHJcbiAgICBvbihsaXN0cykge1xyXG5cclxuICAgICAgICBpZiAoIWlzU3RyaW5nKGxpc3RzKSAmJiBsaXN0cylcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMobGlzdHMpLmZvckVhY2goayA9PiBzdXBlci5vbihrLCBsaXN0c1trXSkpO1xyXG4gICAgICAgIGVsc2Ugc3VwZXIub24oLi4uYXJndW1lbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVMaXN0ZW5lcihsaXN0cykge1xyXG4gICAgICAgIGlmICghaXNTdHJpbmcobGlzdHMpICYmIGxpc3RzKVxyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhsaXN0cykuZm9yRWFjaChrID0+IHN1cGVyLnJlbW92ZUxpc3RlbmVyKGssIGxpc3RzW2tdKSk7XHJcbiAgICAgICAgZWxzZSBzdXBlci5yZW1vdmVMaXN0ZW5lciguLi5hcmd1bWVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogb25jZSgnc3RhYmxlJywgY2IpXHJcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXHJcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxyXG4gICAgICovXHJcbiAgICB0aGVuKGNiKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N0YWJsZSlcclxuICAgICAgICAgICAgcmV0dXJuIGNiKG51bGwsIHRoaXMuZGF0YXMpO1xyXG4gICAgICAgIHRoaXMub25jZSgnc3RhYmxlJywgZSA9PiBjYihudWxsLCB0aGlzLmRhdGFzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdG9yZSh7c3RhdGUsIGRhdGFzfSwgcXVpZXQpIHtcclxuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fX2NvbnRleHQ7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoZGF0YXMpLmZvckVhY2goXHJcbiAgICAgICAgICAgIGlkID0+IHtcclxuICAgICAgICAgICAgICAgIHF1aWV0ID9cclxuICAgICAgICAgICAgICAgICAgICBjdHguZGF0YXMgPSBkYXRhc1tpZF1cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LnB1c2goZGF0YXNbaWRdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoc3RhdGUpLmZvckVhY2goXHJcbiAgICAgICAgICAgIGlkID0+IHtcclxuICAgICAgICAgICAgICAgIHF1aWV0ID9cclxuICAgICAgICAgICAgICAgICAgICBjdHguc3RhdGUgPSBzdGF0ZVtpZF1cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LnNldFN0YXRlKHN0YXRlW2lkXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmV0YWluU3RvcmVzKHN0b3JlcyA9IFtdLCByZWFzb24pIHtcclxuICAgICAgICBzdG9yZXMuZm9yRWFjaChcclxuICAgICAgICAgICAgaWQgPT4gKHRoaXMuc3RvcmVzW2lkXSAmJiB0aGlzLnN0b3Jlc1tpZF0ucmV0YWluICYmIHRoaXMuc3RvcmVzW2lkXS5yZXRhaW4ocmVhc29uKSlcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgZGlzcG9zZVN0b3JlcyhzdG9yZXMgPSBbXSwgcmVhc29uKSB7XHJcbiAgICAgICAgc3RvcmVzLmZvckVhY2goXHJcbiAgICAgICAgICAgIGlkID0+ICh0aGlzLnN0b3Jlc1tpZF0gJiYgdGhpcy5zdG9yZXNbaWRdLmRpc3Bvc2UgJiYgdGhpcy5zdG9yZXNbaWRdLmRpc3Bvc2UocmVhc29uKSlcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgd2FpdChyZWFzb24pIHtcclxuICAgICAgLy8gIGNvbnNvbGUubG9nKFwid2FpdFwiLCByZWFzb24pO1xyXG4gICAgICAgIHRoaXMuX3N0YWJsZSYmIXRoaXMuX193OExvY2tzLmFsbCAmJiB0aGlzLmVtaXQoXCJ1bnN0YWJsZVwiLCB0aGlzKTtcclxuICAgICAgICB0aGlzLl9zdGFibGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9fdzhMb2Nrcy5hbGwrKztcclxuICAgICAgICBpZiAocmVhc29uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX193OExvY2tzW3JlYXNvbl0gPSB0aGlzLl9fdzhMb2Nrc1tyZWFzb25dIHx8IDA7XHJcbiAgICAgICAgICAgIHRoaXMuX193OExvY2tzW3JlYXNvbl0rKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVsZWFzZShyZWFzb24pIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwicmVsZWFzZVwiLCByZWFzb24pO1xyXG4gICAgXHJcbiAgICBcclxuICAgICAgICBpZiAocmVhc29uKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9fdzhMb2Nrc1tyZWFzb25dID09IDApXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhXCIscmVhc29uKTtcclxuICAgICAgICAgICAgdGhpcy5fX3c4TG9ja3NbcmVhc29uXSA9IHRoaXMuX193OExvY2tzW3JlYXNvbl0gfHwgMDtcclxuICAgICAgICAgICAgdGhpcy5fX3c4TG9ja3NbcmVhc29uXS0tO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fX3c4TG9ja3MuYWxsID09IDApXHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIik7XHJcbiAgICAgICAgdGhpcy5fX3c4TG9ja3MuYWxsLS07XHJcbiAgICAgICAgaWYgKCF0aGlzLl9fdzhMb2Nrcy5hbGwpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RhYmlsaXplclRNICYmIGNsZWFyVGltZW91dCh0aGlzLl9zdGFiaWxpemVyVE0pO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9wYWdUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fcHJvcGFnVE0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fc3RhYmlsaXplclRNID0gc2V0VGltZW91dChcclxuICAgICAgICAgICAgICAgIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5fX3c4TG9ja3MuYWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RhYmlsaXplclRNID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJzdGFibGVcIiwgdGhpcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Byb3BhZygpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcm9wYWcoKSB7XHJcbiAgICAgICAgdGhpcy5fcHJvcGFnVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX3Byb3BhZ1RNKTtcclxuICAgICAgICB0aGlzLl9wcm9wYWdUTSA9IHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvcGFnKClcclxuICAgICAgICAgICAgfSwgNTBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIF9wcm9wYWcoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGgpXHJcbiAgICAgICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5mb3JFYWNoKCh7MDogb2JqLCAxOiBrZXksIDI6IGFzLCAzOiBsYXN0UmV2c30pID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhcyA9IHRoaXMuZ2V0VXBkYXRlcyhsYXN0UmV2cyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGFzKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXMpIG9iai5zZXRTdGF0ZSh7W2FzXTogZGF0YXN9KTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIG9iai5zZXRTdGF0ZShkYXRhcyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iaihkYXRhcywgbGFzdFJldnMgJiYgWy4uLmxhc3RSZXZzXSB8fCBcIm5vIHJldnNcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBsYXN0UmV2cyAmJlxyXG4gICAgICAgICAgICAgICAgLy8ga2V5LmZvckVhY2goaWQgPT4gKGxhc3RSZXZzW2lkXSA9IHRoaXMuc3RvcmVzW2lkXSAmJiB0aGlzLnN0b3Jlc1tpZF0uX3JldiB8fCAwKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZW1pdChcInVwZGF0ZVwiLCB0aGlzLmdldFVwZGF0ZXMoKSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIF9nZXRBbGxDaGlsZHMoY2hpbGRzPVtdKSB7XHJcbiAgICAgICAgY2hpbGRzLnB1c2goLi4udGhpcy5fY2hpbGRDb250ZXh0cylcclxuICAgICAgICB0aGlzLl9jaGlsZENvbnRleHRzLmZvckVhY2goXHJcbiAgICAgICAgICAgIGN0eD0+e1xyXG4gICAgICAgICAgICAgICAgY3R4Ll9nZXRBbGxDaGlsZHMoY2hpbGRzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIGNoaWxkcztcclxuICAgIH1cclxuXHJcbiAgICBfYWRkQ2hpbGQoY3R4KSB7XHJcbiAgICAgICAgdGhpcy5fY2hpbGRDb250ZXh0cy5wdXNoKGN0eCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3JtQ2hpbGQoY3R4KSB7XHJcbiAgICAgICAgbGV0IGkgPSB0aGlzLl9jaGlsZENvbnRleHRzLmluZGV4T2YoY3R4KTtcclxuICAgICAgICBpZiAoaSAhPSAtMSlcclxuICAgICAgICAgICAgdGhpcy5fY2hpbGRDb250ZXh0cy5zcGxpY2UoaSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0YWluKHJlYXNvbikge1xyXG4gICAgICAgIHRoaXMuX19yZXRhaW5Mb2Nrcy5hbGwrKztcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwicmV0YWluXCIsIHRoaXMuX2lkLCByZWFzb24pO1xyXG5cclxuICAgICAgICBpZiAocmVhc29uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5Mb2Nrc1tyZWFzb25dID0gdGhpcy5fX3JldGFpbkxvY2tzW3JlYXNvbl0gfHwgMDtcclxuICAgICAgICAgICAgdGhpcy5fX3JldGFpbkxvY2tzW3JlYXNvbl0rKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcG9zZShyZWFzb24pIHtcclxuICAgICAgICBpZiAocmVhc29uKSB7XHJcbiAgICBcclxuICAgICAgICAgICAgaWYgKHRoaXMuX19yZXRhaW5Mb2Nrc1tyZWFzb25dID09IDApXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgIVwiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5Mb2Nrc1tyZWFzb25dID0gdGhpcy5fX3JldGFpbkxvY2tzW3JlYXNvbl0gfHwgMDtcclxuICAgICAgICAgICAgdGhpcy5fX3JldGFpbkxvY2tzW3JlYXNvbl0tLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuX19yZXRhaW5Mb2Nrcy5hbGwgPT0gMClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nICFcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5fX3JldGFpbkxvY2tzLmFsbC0tO1xyXG4gICAgXHJcbiAgICBcclxuICAgICAgICBpZiAoIXRoaXMuX19yZXRhaW5Mb2Nrcy5hbGwpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3BlcnNpc3RlbmNlVG0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Rlc3Ryb3lUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fZGVzdHJveVRNKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Rlc3Ryb3lUTSA9IHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgICAgICAgICAgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ3dGYgY3R4XCIsIHRoaXMuX2lkLCByZWFzb24sIHRoaXMuX193OExvY2tzLCB0aGlzLl9zdGFibGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRoZW4ocyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKFwid3RmIGN0eCB0aGVuXCIsIHRoaXMuX2lkLCByZWFzb24sIHRoaXMuX193OExvY2tzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLl9fcmV0YWluTG9ja3MuYWxsICYmIHRoaXMuZGVzdHJveSgpfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wZXJzaXN0ZW5jZVRtXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aGVuKHMgPT4gKCF0aGlzLl9fcmV0YWluTG9ja3MuYWxsICYmIHRoaXMuZGVzdHJveSgpKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIG9yZGVyIGRlc3Ryb3kgb2YgbG9jYWwgc3RvcmVzXHJcbiAgICAgKi9cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX19jb250ZXh0O1xyXG5cclxuICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZGVzdHJveVwiLCB0aGlzLl9pZCk7XHJcbiAgICAgICAgdGhpcy5lbWl0KFwiZGVzdHJveVwiKTtcclxuICAgICAgICBPYmplY3Qua2V5cyhcclxuICAgICAgICAgICAgdGhpcy5fX2xpc3RlbmluZ1xyXG4gICAgICAgICkuZm9yRWFjaChcclxuICAgICAgICAgICAgaWQgPT4gdGhpcy5fX2NvbnRleHRbaWRdLnJlbW92ZUxpc3RlbmVyKHRoaXMuX19saXN0ZW5pbmdbaWRdKVxyXG4gICAgICAgICk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5fX2xpc3RlbmluZyA9IHt9O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5faXNMb2NhbElkKVxyXG4gICAgICAgICAgICBkZWxldGUgb3BlbkNvbnRleHRzW3RoaXMuX2lkXTtcclxuICAgICAgICB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoID0gMDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGN0eClcclxuICAgICAgICAgICAgaWYgKCFpc0Z1bmN0aW9uKGN0eFtrZXldKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGN0eFtrZXldLmNvbnRleHRPYmogPT09IHRoaXMpXHJcbiAgICAgICAgICAgICAgICAgICAgY3R4W2tleV0uZGVzdHJveSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGN0eFtrZXldID0gY3R4W2tleV0uY29uc3RydWN0b3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB3aGlsZSAodGhpcy5fX21peGVkTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5fX21peGVkWzBdLnJlbW92ZUxpc3RlbmVyKHRoaXMuX19taXhlZExpc3Quc2hpZnQoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuX19taXhlZC5zaGlmdCgpLmRpc3Bvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucGFyZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50LnJlbW92ZUxpc3RlbmVyKHRoaXMuX19wYXJlbnRMaXN0KTtcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnQuZGlzcG9zZShcImlzTXlQYXJlbnRcIik7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50Ll9ybUNoaWxkKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLmRhdGFzID0gdGhpcy5zdGF0ZSA9IHRoaXMuY29udGV4dCA9IHRoaXMuc3RvcmVzID0gbnVsbDtcclxuICAgICAgICAvLyB0aGlzLl9kYXRhcyA9IHRoaXMuX3N0YXRlID0gdGhpcy5fc3RvcmVzID0gbnVsbDtcclxuXHJcblxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbnRleHQuanMiLCI7KGZ1bmN0aW9uIChmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG4gICAgZGVmaW5lKFtdLCBmYWN0b3J5KTtcbiAgZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmICEhZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSlcbiAgICBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgISFtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMpXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgICBlbHNlXG4gICAgICBleHBvcnRzWydkZWZhdWx0J10gPSBmYWN0b3J5KCk7XG4gIGVsc2UgaWYgKHR5cGVvZiBZVUkgPT09ICdmdW5jdGlvbicgJiYgWVVJLmFkZClcbiAgICBZVUkuYWRkKCdpcy1zdHJpbmcnLCBmdW5jdGlvbiAoWSkgeyBZWydkZWZhdWx0J10gPSBmYWN0b3J5KCk7IH0sICcxLjAuNycpO1xuICBlbHNlXG4gICAgU3RyaW5nLmlzU3RyaW5nID0gZmFjdG9yeSgpO1xufSkoZnVuY3Rpb24gKCkge1xuICB2YXIgc3RyVG9TdHJpbmcgID0gKCcnKS50b1N0cmluZyxcbiAgICAgIGhhc0JpbmQgICAgICA9IEZ1bmN0aW9uLnByb3RvdHlwZSAmJiBGdW5jdGlvbi5wcm90b3R5cGUuYmluZCxcbiAgICAgIHN0clRvU3RyQ2FsbCA9IGhhc0JpbmQgJiYgc3RyVG9TdHJpbmcuY2FsbC5iaW5kKHN0clRvU3RyaW5nKSxcbiAgICAgIGlzU3RyaW5nICAgICA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgLypAY2Nfb25cbiAgICAgICAgICBAaWYgKEBfanNjcmlwdF92ZXJzaW9uID49IDUpIEAqL1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBoYXNCaW5kID8gc3RyVG9TdHJDYWxsKHN0cikgOiBzdHJUb1N0cmluZy5jYWxsKHN0cik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIC8qQGVuZFxuICAgICAgICBAKi9cbiAgICAgIH07XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHIpIHtcbiAgICByZXR1cm4gIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnIHx8XG4gICAgICAgICAgICBzdHIgJiYgdHlwZW9mIHN0ciA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgICAgIC8qQGNjX29uXG4gICAgICAgICAgICAgIEBpZiAoQF9qc2NyaXB0X3ZlcnNpb24gPCA1LjUpXG4gICAgICAgICAgICAgICAgL15cXHMqZnVuY3Rpb25cXHMqU3RyaW5nXFwoXFwpXFxzKntcXHMqXFxbbmF0aXZlIGNvZGVcXF1cXHMqfVxccyokLy50ZXN0KHN0ci5jb25zdHJ1Y3RvcilcbiAgICAgICAgICAgICAgQGVsc2UgQCovXG4gICAgICAgICAgICAgICAgaXNTdHJpbmcoc3RyKVxuICAgICAgICAgICAgICAvKkBlbmRcbiAgICAgICAgICAgIEAqL1xuICAgICAgICAgICAgfHwgZmFsc2U7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pc3N0cmluZy9pc1N0cmluZy51bWQuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcnIpID09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2lzYXJyYXkvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgdGhpcy5fZXZlbnRzID0gdGhpcy5fZXZlbnRzIHx8IHt9O1xuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5cbi8vIEJhY2t3YXJkcy1jb21wYXQgd2l0aCBub2RlIDAuMTAueFxuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuXG4vLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuIDEwIGxpc3RlbmVycyBhcmVcbi8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG5FdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG4vLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3Ncbi8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbihuKSB7XG4gIGlmICghaXNOdW1iZXIobikgfHwgbiA8IDAgfHwgaXNOYU4obikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCduIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXInKTtcbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciBlciwgaGFuZGxlciwgbGVuLCBhcmdzLCBpLCBsaXN0ZW5lcnM7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgdGhpcy5fZXZlbnRzID0ge307XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAodHlwZSA9PT0gJ2Vycm9yJykge1xuICAgIGlmICghdGhpcy5fZXZlbnRzLmVycm9yIHx8XG4gICAgICAgIChpc09iamVjdCh0aGlzLl9ldmVudHMuZXJyb3IpICYmICF0aGlzLl9ldmVudHMuZXJyb3IubGVuZ3RoKSkge1xuICAgICAgZXIgPSBhcmd1bWVudHNbMV07XG4gICAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcignVW5jYXVnaHQsIHVuc3BlY2lmaWVkIFwiZXJyb3JcIiBldmVudC4gKCcgKyBlciArICcpJyk7XG4gICAgICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVyID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChpc1VuZGVmaW5lZChoYW5kbGVyKSlcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKGlzRnVuY3Rpb24oaGFuZGxlcikpIHtcbiAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIC8vIGZhc3QgY2FzZXNcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50c1sxXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0pO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vIHNsb3dlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgIGhhbmRsZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGhhbmRsZXIpKSB7XG4gICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgbGlzdGVuZXJzID0gaGFuZGxlci5zbGljZSgpO1xuICAgIGxlbiA9IGxpc3RlbmVycy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKVxuICAgICAgbGlzdGVuZXJzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIG07XG5cbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuXG4gIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgaWYgKHRoaXMuX2V2ZW50cy5uZXdMaXN0ZW5lcilcbiAgICB0aGlzLmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgaXNGdW5jdGlvbihsaXN0ZW5lci5saXN0ZW5lcikgP1xuICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA6IGxpc3RlbmVyKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgZWxzZSBpZiAoaXNPYmplY3QodGhpcy5fZXZlbnRzW3R5cGVdKSlcbiAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdLnB1c2gobGlzdGVuZXIpO1xuICBlbHNlXG4gICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdID0gW3RoaXMuX2V2ZW50c1t0eXBlXSwgbGlzdGVuZXJdO1xuXG4gIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gIGlmIChpc09iamVjdCh0aGlzLl9ldmVudHNbdHlwZV0pICYmICF0aGlzLl9ldmVudHNbdHlwZV0ud2FybmVkKSB7XG4gICAgaWYgKCFpc1VuZGVmaW5lZCh0aGlzLl9tYXhMaXN0ZW5lcnMpKSB7XG4gICAgICBtID0gdGhpcy5fbWF4TGlzdGVuZXJzO1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgaWYgKG0gJiYgbSA+IDAgJiYgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCA+IG0pIHtcbiAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQgPSB0cnVlO1xuICAgICAgY29uc29sZS5lcnJvcignKG5vZGUpIHdhcm5pbmc6IHBvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgJyArXG4gICAgICAgICAgICAgICAgICAgICdsZWFrIGRldGVjdGVkLiAlZCBsaXN0ZW5lcnMgYWRkZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAnVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gaW5jcmVhc2UgbGltaXQuJyxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCk7XG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUudHJhY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gbm90IHN1cHBvcnRlZCBpbiBJRSAxMFxuICAgICAgICBjb25zb2xlLnRyYWNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIHZhciBmaXJlZCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGcoKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBnKTtcblxuICAgIGlmICghZmlyZWQpIHtcbiAgICAgIGZpcmVkID0gdHJ1ZTtcbiAgICAgIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgZy5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICB0aGlzLm9uKHR5cGUsIGcpO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLy8gZW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWRcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgbGlzdCwgcG9zaXRpb24sIGxlbmd0aCwgaTtcblxuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXR1cm4gdGhpcztcblxuICBsaXN0ID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuICBsZW5ndGggPSBsaXN0Lmxlbmd0aDtcbiAgcG9zaXRpb24gPSAtMTtcblxuICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHxcbiAgICAgIChpc0Z1bmN0aW9uKGxpc3QubGlzdGVuZXIpICYmIGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgaWYgKHRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG5cbiAgfSBlbHNlIGlmIChpc09iamVjdChsaXN0KSkge1xuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tID4gMDspIHtcbiAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fFxuICAgICAgICAgIChsaXN0W2ldLmxpc3RlbmVyICYmIGxpc3RbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICByZXR1cm4gdGhpcztcblxuICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgbGlzdC5sZW5ndGggPSAwO1xuICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdC5zcGxpY2UocG9zaXRpb24sIDEpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdGVuZXIpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIGtleSwgbGlzdGVuZXJzO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHJldHVybiB0aGlzO1xuXG4gIC8vIG5vdCBsaXN0ZW5pbmcgZm9yIHJlbW92ZUxpc3RlbmVyLCBubyBuZWVkIHRvIGVtaXRcbiAgaWYgKCF0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMClcbiAgICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICBmb3IgKGtleSBpbiB0aGlzLl9ldmVudHMpIHtcbiAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoa2V5KTtcbiAgICB9XG4gICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgaWYgKGlzRnVuY3Rpb24obGlzdGVuZXJzKSkge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgfSBlbHNlIGlmIChsaXN0ZW5lcnMpIHtcbiAgICAvLyBMSUZPIG9yZGVyXG4gICAgd2hpbGUgKGxpc3RlbmVycy5sZW5ndGgpXG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tsaXN0ZW5lcnMubGVuZ3RoIC0gMV0pO1xuICB9XG4gIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIHJldDtcbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXQgPSBbXTtcbiAgZWxzZSBpZiAoaXNGdW5jdGlvbih0aGlzLl9ldmVudHNbdHlwZV0pKVxuICAgIHJldCA9IFt0aGlzLl9ldmVudHNbdHlwZV1dO1xuICBlbHNlXG4gICAgcmV0ID0gdGhpcy5fZXZlbnRzW3R5cGVdLnNsaWNlKCk7XG4gIHJldHVybiByZXQ7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbih0eXBlKSB7XG4gIGlmICh0aGlzLl9ldmVudHMpIHtcbiAgICB2YXIgZXZsaXN0ZW5lciA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICAgIGlmIChpc0Z1bmN0aW9uKGV2bGlzdGVuZXIpKVxuICAgICAgcmV0dXJuIDE7XG4gICAgZWxzZSBpZiAoZXZsaXN0ZW5lcilcbiAgICAgIHJldHVybiBldmxpc3RlbmVyLmxlbmd0aDtcbiAgfVxuICByZXR1cm4gMDtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICByZXR1cm4gZW1pdHRlci5saXN0ZW5lckNvdW50KHR5cGUpO1xufTtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ251bWJlcic7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gdm9pZCAwO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2V2ZW50cy9ldmVudHMuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gaWYgKHR5cGVvZiByZXF1aXJlICE9PSAndW5kZWZpbmVkJykge31cblxudmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbiAoZnVuY3Rpb25Ub0NoZWNrKSB7XG5cdHZhciBnZXRUeXBlID0ge307XG5cdHJldHVybiBmdW5jdGlvblRvQ2hlY2sgJiYgZ2V0VHlwZS50b1N0cmluZy5jYWxsKGZ1bmN0aW9uVG9DaGVjaykgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59O1xuXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0bW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pc2Z1bmN0aW9uL2xpYi9tYWluLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvaW5kZXgnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFscGhhYmV0ID0gcmVxdWlyZSgnLi9hbHBoYWJldCcpO1xudmFyIGVuY29kZSA9IHJlcXVpcmUoJy4vZW5jb2RlJyk7XG52YXIgZGVjb2RlID0gcmVxdWlyZSgnLi9kZWNvZGUnKTtcbnZhciBidWlsZCA9IHJlcXVpcmUoJy4vYnVpbGQnKTtcbnZhciBpc1ZhbGlkID0gcmVxdWlyZSgnLi9pcy12YWxpZCcpO1xuXG4vLyBpZiB5b3UgYXJlIHVzaW5nIGNsdXN0ZXIgb3IgbXVsdGlwbGUgc2VydmVycyB1c2UgdGhpcyB0byBtYWtlIGVhY2ggaW5zdGFuY2Vcbi8vIGhhcyBhIHVuaXF1ZSB2YWx1ZSBmb3Igd29ya2VyXG4vLyBOb3RlOiBJIGRvbid0IGtub3cgaWYgdGhpcyBpcyBhdXRvbWF0aWNhbGx5IHNldCB3aGVuIHVzaW5nIHRoaXJkXG4vLyBwYXJ0eSBjbHVzdGVyIHNvbHV0aW9ucyBzdWNoIGFzIHBtMi5cbnZhciBjbHVzdGVyV29ya2VySWQgPSByZXF1aXJlKCcuL3V0aWwvY2x1c3Rlci13b3JrZXItaWQnKSB8fCAwO1xuXG4vKipcbiAqIFNldCB0aGUgc2VlZC5cbiAqIEhpZ2hseSByZWNvbW1lbmRlZCBpZiB5b3UgZG9uJ3Qgd2FudCBwZW9wbGUgdG8gdHJ5IHRvIGZpZ3VyZSBvdXQgeW91ciBpZCBzY2hlbWEuXG4gKiBleHBvc2VkIGFzIHNob3J0aWQuc2VlZChpbnQpXG4gKiBAcGFyYW0gc2VlZCBJbnRlZ2VyIHZhbHVlIHRvIHNlZWQgdGhlIHJhbmRvbSBhbHBoYWJldC4gIEFMV0FZUyBVU0UgVEhFIFNBTUUgU0VFRCBvciB5b3UgbWlnaHQgZ2V0IG92ZXJsYXBzLlxuICovXG5mdW5jdGlvbiBzZWVkKHNlZWRWYWx1ZSkge1xuICAgIGFscGhhYmV0LnNlZWQoc2VlZFZhbHVlKTtcbiAgICByZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8qKlxuICogU2V0IHRoZSBjbHVzdGVyIHdvcmtlciBvciBtYWNoaW5lIGlkXG4gKiBleHBvc2VkIGFzIHNob3J0aWQud29ya2VyKGludClcbiAqIEBwYXJhbSB3b3JrZXJJZCB3b3JrZXIgbXVzdCBiZSBwb3NpdGl2ZSBpbnRlZ2VyLiAgTnVtYmVyIGxlc3MgdGhhbiAxNiBpcyByZWNvbW1lbmRlZC5cbiAqIHJldHVybnMgc2hvcnRpZCBtb2R1bGUgc28gaXQgY2FuIGJlIGNoYWluZWQuXG4gKi9cbmZ1bmN0aW9uIHdvcmtlcih3b3JrZXJJZCkge1xuICAgIGNsdXN0ZXJXb3JrZXJJZCA9IHdvcmtlcklkO1xuICAgIHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLyoqXG4gKlxuICogc2V0cyBuZXcgY2hhcmFjdGVycyB0byB1c2UgaW4gdGhlIGFscGhhYmV0XG4gKiByZXR1cm5zIHRoZSBzaHVmZmxlZCBhbHBoYWJldFxuICovXG5mdW5jdGlvbiBjaGFyYWN0ZXJzKG5ld0NoYXJhY3RlcnMpIHtcbiAgICBpZiAobmV3Q2hhcmFjdGVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGFscGhhYmV0LmNoYXJhY3RlcnMobmV3Q2hhcmFjdGVycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFscGhhYmV0LnNodWZmbGVkKCk7XG59XG5cbi8qKlxuICogR2VuZXJhdGUgdW5pcXVlIGlkXG4gKiBSZXR1cm5zIHN0cmluZyBpZFxuICovXG5mdW5jdGlvbiBnZW5lcmF0ZSgpIHtcbiAgcmV0dXJuIGJ1aWxkKGNsdXN0ZXJXb3JrZXJJZCk7XG59XG5cbi8vIEV4cG9ydCBhbGwgb3RoZXIgZnVuY3Rpb25zIGFzIHByb3BlcnRpZXMgb2YgdGhlIGdlbmVyYXRlIGZ1bmN0aW9uXG5tb2R1bGUuZXhwb3J0cyA9IGdlbmVyYXRlO1xubW9kdWxlLmV4cG9ydHMuZ2VuZXJhdGUgPSBnZW5lcmF0ZTtcbm1vZHVsZS5leHBvcnRzLnNlZWQgPSBzZWVkO1xubW9kdWxlLmV4cG9ydHMud29ya2VyID0gd29ya2VyO1xubW9kdWxlLmV4cG9ydHMuY2hhcmFjdGVycyA9IGNoYXJhY3RlcnM7XG5tb2R1bGUuZXhwb3J0cy5kZWNvZGUgPSBkZWNvZGU7XG5tb2R1bGUuZXhwb3J0cy5pc1ZhbGlkID0gaXNWYWxpZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciByYW5kb21Gcm9tU2VlZCA9IHJlcXVpcmUoJy4vcmFuZG9tL3JhbmRvbS1mcm9tLXNlZWQnKTtcblxudmFyIE9SSUdJTkFMID0gJzAxMjM0NTY3ODlhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ekFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaXy0nO1xudmFyIGFscGhhYmV0O1xudmFyIHByZXZpb3VzU2VlZDtcblxudmFyIHNodWZmbGVkO1xuXG5mdW5jdGlvbiByZXNldCgpIHtcbiAgICBzaHVmZmxlZCA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBzZXRDaGFyYWN0ZXJzKF9hbHBoYWJldF8pIHtcbiAgICBpZiAoIV9hbHBoYWJldF8pIHtcbiAgICAgICAgaWYgKGFscGhhYmV0ICE9PSBPUklHSU5BTCkge1xuICAgICAgICAgICAgYWxwaGFiZXQgPSBPUklHSU5BTDtcbiAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChfYWxwaGFiZXRfID09PSBhbHBoYWJldCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKF9hbHBoYWJldF8ubGVuZ3RoICE9PSBPUklHSU5BTC5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDdXN0b20gYWxwaGFiZXQgZm9yIHNob3J0aWQgbXVzdCBiZSAnICsgT1JJR0lOQUwubGVuZ3RoICsgJyB1bmlxdWUgY2hhcmFjdGVycy4gWW91IHN1Ym1pdHRlZCAnICsgX2FscGhhYmV0Xy5sZW5ndGggKyAnIGNoYXJhY3RlcnM6ICcgKyBfYWxwaGFiZXRfKTtcbiAgICB9XG5cbiAgICB2YXIgdW5pcXVlID0gX2FscGhhYmV0Xy5zcGxpdCgnJykuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0sIGluZCwgYXJyKXtcbiAgICAgICByZXR1cm4gaW5kICE9PSBhcnIubGFzdEluZGV4T2YoaXRlbSk7XG4gICAgfSk7XG5cbiAgICBpZiAodW5pcXVlLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0N1c3RvbSBhbHBoYWJldCBmb3Igc2hvcnRpZCBtdXN0IGJlICcgKyBPUklHSU5BTC5sZW5ndGggKyAnIHVuaXF1ZSBjaGFyYWN0ZXJzLiBUaGVzZSBjaGFyYWN0ZXJzIHdlcmUgbm90IHVuaXF1ZTogJyArIHVuaXF1ZS5qb2luKCcsICcpKTtcbiAgICB9XG5cbiAgICBhbHBoYWJldCA9IF9hbHBoYWJldF87XG4gICAgcmVzZXQoKTtcbn1cblxuZnVuY3Rpb24gY2hhcmFjdGVycyhfYWxwaGFiZXRfKSB7XG4gICAgc2V0Q2hhcmFjdGVycyhfYWxwaGFiZXRfKTtcbiAgICByZXR1cm4gYWxwaGFiZXQ7XG59XG5cbmZ1bmN0aW9uIHNldFNlZWQoc2VlZCkge1xuICAgIHJhbmRvbUZyb21TZWVkLnNlZWQoc2VlZCk7XG4gICAgaWYgKHByZXZpb3VzU2VlZCAhPT0gc2VlZCkge1xuICAgICAgICByZXNldCgpO1xuICAgICAgICBwcmV2aW91c1NlZWQgPSBzZWVkO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2h1ZmZsZSgpIHtcbiAgICBpZiAoIWFscGhhYmV0KSB7XG4gICAgICAgIHNldENoYXJhY3RlcnMoT1JJR0lOQUwpO1xuICAgIH1cblxuICAgIHZhciBzb3VyY2VBcnJheSA9IGFscGhhYmV0LnNwbGl0KCcnKTtcbiAgICB2YXIgdGFyZ2V0QXJyYXkgPSBbXTtcbiAgICB2YXIgciA9IHJhbmRvbUZyb21TZWVkLm5leHRWYWx1ZSgpO1xuICAgIHZhciBjaGFyYWN0ZXJJbmRleDtcblxuICAgIHdoaWxlIChzb3VyY2VBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHIgPSByYW5kb21Gcm9tU2VlZC5uZXh0VmFsdWUoKTtcbiAgICAgICAgY2hhcmFjdGVySW5kZXggPSBNYXRoLmZsb29yKHIgKiBzb3VyY2VBcnJheS5sZW5ndGgpO1xuICAgICAgICB0YXJnZXRBcnJheS5wdXNoKHNvdXJjZUFycmF5LnNwbGljZShjaGFyYWN0ZXJJbmRleCwgMSlbMF0pO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0QXJyYXkuam9pbignJyk7XG59XG5cbmZ1bmN0aW9uIGdldFNodWZmbGVkKCkge1xuICAgIGlmIChzaHVmZmxlZCkge1xuICAgICAgICByZXR1cm4gc2h1ZmZsZWQ7XG4gICAgfVxuICAgIHNodWZmbGVkID0gc2h1ZmZsZSgpO1xuICAgIHJldHVybiBzaHVmZmxlZDtcbn1cblxuLyoqXG4gKiBsb29rdXAgc2h1ZmZsZWQgbGV0dGVyXG4gKiBAcGFyYW0gaW5kZXhcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGxvb2t1cChpbmRleCkge1xuICAgIHZhciBhbHBoYWJldFNodWZmbGVkID0gZ2V0U2h1ZmZsZWQoKTtcbiAgICByZXR1cm4gYWxwaGFiZXRTaHVmZmxlZFtpbmRleF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGNoYXJhY3RlcnM6IGNoYXJhY3RlcnMsXG4gICAgc2VlZDogc2V0U2VlZCxcbiAgICBsb29rdXA6IGxvb2t1cCxcbiAgICBzaHVmZmxlZDogZ2V0U2h1ZmZsZWRcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvYWxwaGFiZXQuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBGb3VuZCB0aGlzIHNlZWQtYmFzZWQgcmFuZG9tIGdlbmVyYXRvciBzb21ld2hlcmVcbi8vIEJhc2VkIG9uIFRoZSBDZW50cmFsIFJhbmRvbWl6ZXIgMS4zIChDKSAxOTk3IGJ5IFBhdWwgSG91bGUgKGhvdWxlQG1zYy5jb3JuZWxsLmVkdSlcblxudmFyIHNlZWQgPSAxO1xuXG4vKipcbiAqIHJldHVybiBhIHJhbmRvbSBudW1iZXIgYmFzZWQgb24gYSBzZWVkXG4gKiBAcGFyYW0gc2VlZFxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gZ2V0TmV4dFZhbHVlKCkge1xuICAgIHNlZWQgPSAoc2VlZCAqIDkzMDEgKyA0OTI5NykgJSAyMzMyODA7XG4gICAgcmV0dXJuIHNlZWQvKDIzMzI4MC4wKTtcbn1cblxuZnVuY3Rpb24gc2V0U2VlZChfc2VlZF8pIHtcbiAgICBzZWVkID0gX3NlZWRfO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBuZXh0VmFsdWU6IGdldE5leHRWYWx1ZSxcbiAgICBzZWVkOiBzZXRTZWVkXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Nob3J0aWQvbGliL3JhbmRvbS9yYW5kb20tZnJvbS1zZWVkLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJhbmRvbUJ5dGUgPSByZXF1aXJlKCcuL3JhbmRvbS9yYW5kb20tYnl0ZScpO1xuXG5mdW5jdGlvbiBlbmNvZGUobG9va3VwLCBudW1iZXIpIHtcbiAgICB2YXIgbG9vcENvdW50ZXIgPSAwO1xuICAgIHZhciBkb25lO1xuXG4gICAgdmFyIHN0ciA9ICcnO1xuXG4gICAgd2hpbGUgKCFkb25lKSB7XG4gICAgICAgIHN0ciA9IHN0ciArIGxvb2t1cCggKCAobnVtYmVyID4+ICg0ICogbG9vcENvdW50ZXIpKSAmIDB4MGYgKSB8IHJhbmRvbUJ5dGUoKSApO1xuICAgICAgICBkb25lID0gbnVtYmVyIDwgKE1hdGgucG93KDE2LCBsb29wQ291bnRlciArIDEgKSApO1xuICAgICAgICBsb29wQ291bnRlcisrO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVuY29kZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2xpYi9lbmNvZGUuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyeXB0byA9IHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmICh3aW5kb3cuY3J5cHRvIHx8IHdpbmRvdy5tc0NyeXB0byk7IC8vIElFIDExIHVzZXMgd2luZG93Lm1zQ3J5cHRvXG5cbmZ1bmN0aW9uIHJhbmRvbUJ5dGUoKSB7XG4gICAgaWYgKCFjcnlwdG8gfHwgIWNyeXB0by5nZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NikgJiAweDMwO1xuICAgIH1cbiAgICB2YXIgZGVzdCA9IG5ldyBVaW50OEFycmF5KDEpO1xuICAgIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMoZGVzdCk7XG4gICAgcmV0dXJuIGRlc3RbMF0gJiAweDMwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJhbmRvbUJ5dGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvcmFuZG9tL3JhbmRvbS1ieXRlLWJyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBhbHBoYWJldCA9IHJlcXVpcmUoJy4vYWxwaGFiZXQnKTtcblxuLyoqXG4gKiBEZWNvZGUgdGhlIGlkIHRvIGdldCB0aGUgdmVyc2lvbiBhbmQgd29ya2VyXG4gKiBNYWlubHkgZm9yIGRlYnVnZ2luZyBhbmQgdGVzdGluZy5cbiAqIEBwYXJhbSBpZCAtIHRoZSBzaG9ydGlkLWdlbmVyYXRlZCBpZC5cbiAqL1xuZnVuY3Rpb24gZGVjb2RlKGlkKSB7XG4gICAgdmFyIGNoYXJhY3RlcnMgPSBhbHBoYWJldC5zaHVmZmxlZCgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHZlcnNpb246IGNoYXJhY3RlcnMuaW5kZXhPZihpZC5zdWJzdHIoMCwgMSkpICYgMHgwZixcbiAgICAgICAgd29ya2VyOiBjaGFyYWN0ZXJzLmluZGV4T2YoaWQuc3Vic3RyKDEsIDEpKSAmIDB4MGZcbiAgICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlY29kZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2xpYi9kZWNvZGUuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVuY29kZSA9IHJlcXVpcmUoJy4vZW5jb2RlJyk7XG52YXIgYWxwaGFiZXQgPSByZXF1aXJlKCcuL2FscGhhYmV0Jyk7XG5cbi8vIElnbm9yZSBhbGwgbWlsbGlzZWNvbmRzIGJlZm9yZSBhIGNlcnRhaW4gdGltZSB0byByZWR1Y2UgdGhlIHNpemUgb2YgdGhlIGRhdGUgZW50cm9weSB3aXRob3V0IHNhY3JpZmljaW5nIHVuaXF1ZW5lc3MuXG4vLyBUaGlzIG51bWJlciBzaG91bGQgYmUgdXBkYXRlZCBldmVyeSB5ZWFyIG9yIHNvIHRvIGtlZXAgdGhlIGdlbmVyYXRlZCBpZCBzaG9ydC5cbi8vIFRvIHJlZ2VuZXJhdGUgYG5ldyBEYXRlKCkgLSAwYCBhbmQgYnVtcCB0aGUgdmVyc2lvbi4gQWx3YXlzIGJ1bXAgdGhlIHZlcnNpb24hXG52YXIgUkVEVUNFX1RJTUUgPSAxNDU5NzA3NjA2NTE4O1xuXG4vLyBkb24ndCBjaGFuZ2UgdW5sZXNzIHdlIGNoYW5nZSB0aGUgYWxnb3Mgb3IgUkVEVUNFX1RJTUVcbi8vIG11c3QgYmUgYW4gaW50ZWdlciBhbmQgbGVzcyB0aGFuIDE2XG52YXIgdmVyc2lvbiA9IDY7XG5cbi8vIENvdW50ZXIgaXMgdXNlZCB3aGVuIHNob3J0aWQgaXMgY2FsbGVkIG11bHRpcGxlIHRpbWVzIGluIG9uZSBzZWNvbmQuXG52YXIgY291bnRlcjtcblxuLy8gUmVtZW1iZXIgdGhlIGxhc3QgdGltZSBzaG9ydGlkIHdhcyBjYWxsZWQgaW4gY2FzZSBjb3VudGVyIGlzIG5lZWRlZC5cbnZhciBwcmV2aW91c1NlY29uZHM7XG5cbi8qKlxuICogR2VuZXJhdGUgdW5pcXVlIGlkXG4gKiBSZXR1cm5zIHN0cmluZyBpZFxuICovXG5mdW5jdGlvbiBidWlsZChjbHVzdGVyV29ya2VySWQpIHtcblxuICAgIHZhciBzdHIgPSAnJztcblxuICAgIHZhciBzZWNvbmRzID0gTWF0aC5mbG9vcigoRGF0ZS5ub3coKSAtIFJFRFVDRV9USU1FKSAqIDAuMDAxKTtcblxuICAgIGlmIChzZWNvbmRzID09PSBwcmV2aW91c1NlY29uZHMpIHtcbiAgICAgICAgY291bnRlcisrO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvdW50ZXIgPSAwO1xuICAgICAgICBwcmV2aW91c1NlY29uZHMgPSBzZWNvbmRzO1xuICAgIH1cblxuICAgIHN0ciA9IHN0ciArIGVuY29kZShhbHBoYWJldC5sb29rdXAsIHZlcnNpb24pO1xuICAgIHN0ciA9IHN0ciArIGVuY29kZShhbHBoYWJldC5sb29rdXAsIGNsdXN0ZXJXb3JrZXJJZCk7XG4gICAgaWYgKGNvdW50ZXIgPiAwKSB7XG4gICAgICAgIHN0ciA9IHN0ciArIGVuY29kZShhbHBoYWJldC5sb29rdXAsIGNvdW50ZXIpO1xuICAgIH1cbiAgICBzdHIgPSBzdHIgKyBlbmNvZGUoYWxwaGFiZXQubG9va3VwLCBzZWNvbmRzKTtcblxuICAgIHJldHVybiBzdHI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnVpbGQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvYnVpbGQuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBhbHBoYWJldCA9IHJlcXVpcmUoJy4vYWxwaGFiZXQnKTtcblxuZnVuY3Rpb24gaXNTaG9ydElkKGlkKSB7XG4gICAgaWYgKCFpZCB8fCB0eXBlb2YgaWQgIT09ICdzdHJpbmcnIHx8IGlkLmxlbmd0aCA8IDYgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgY2hhcmFjdGVycyA9IGFscGhhYmV0LmNoYXJhY3RlcnMoKTtcbiAgICB2YXIgbGVuID0gaWQubGVuZ3RoO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47aSsrKSB7XG4gICAgICAgIGlmIChjaGFyYWN0ZXJzLmluZGV4T2YoaWRbaV0pID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU2hvcnRJZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaG9ydGlkL2xpYi9pcy12YWxpZC5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IDA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hvcnRpZC9saWIvdXRpbC9jbHVzdGVyLXdvcmtlci1pZC1icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE3IENhaXBpIExhYnMgLlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIFVsdHJhIHNjYWxhYmxlIHN0YXRlLWF3YXJlIHN0b3JlXHJcbiAqXHJcbiAqIEB0b2RvIDogbG90IG9mIG9wdGltcy4uLlxyXG4gKi9cclxuXHJcbnZhciBpc1N0cmluZyAgICAgPSByZXF1aXJlKCdpc3N0cmluZycpXHJcbiAgICAsIGlzQXJyYXkgICAgPSByZXF1aXJlKCdpc2FycmF5JylcclxuICAgICwgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJ2lzZnVuY3Rpb24nKVxyXG4gICAgLFxyXG4gICAgQ29udGV4dCAgICAgID0gcmVxdWlyZSgnLi9Db250ZXh0JyksXHJcbiAgICBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKSxcclxuICAgIHNob3J0aWQgICAgICA9IHJlcXVpcmUoJ3Nob3J0aWQnKSxcclxuICAgIG9ialByb3RvICAgICA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih7fSksXHJcbiAgICBvcGVuQ29udGV4dHMgPSB7fTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XHJcblxyXG4gICAgc3RhdGljIHVzZSAgICAgICAgICAgICAgICAgICAgICAgID0gW107Ly8gb3ZlcnJpZGFibGUgbGlzdCBvZiBzb3VyY2Ugc3RvcmVzXHJcbiAgICBzdGF0aWMgZm9sbG93Oy8vIG92ZXJyaWRhYmxlIGxpc3Qgb2Ygc3RvcmUgdGhhdCB3aWxsIGFsbG93IHB1c2ggaWYgdXBkYXRlZFxyXG4gICAgc3RhdGljIHJlcXVpcmU7XHJcbiAgICBzdGF0aWMgc3RhdGljQ29udGV4dCAgICAgICAgICAgICAgPSBuZXcgQ29udGV4dCh7fSwge2lkIDogXCJzdGF0aWNcIn0pO1xyXG4gICAgc3RhdGljIGluaXRpYWxTdGF0ZSAgICAgICAgICAgICAgID0gdW5kZWZpbmVkOy8vIGRlZmF1bHQgc3RhdGVcclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgICAgICAgICBzdGF0aWMgZGVmYXVsdE1heExpc3RlbmVycyA9IDEwMDtcclxuICAgIC8qKlxyXG4gICAgICogaWYgcmV0YWluIGdvZXMgdG8gMCA6XHJcbiAgICAgKiBmYWxzZSB0byBub3QgZGVzdHJveSxcclxuICAgICAqIDAgdG8gc3luYyBhdXRvIGRlc3Ryb3lcclxuICAgICAqIE1zIHRvIGF1dG9kZXN0cm95IGFmdGVyIHRtIG1zIGlmIG5vIHJldGFpbiBoYXMgYmVlbiBjYWxsZWRcclxuICAgICAqIEB0eXBlIHtib29sZWFufEludH1cclxuICAgICAqL1xyXG4gICAgICAgICAgIHN0YXRpYyBwZXJzaXN0ZW5jZVRtICAgICAgID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3Rvciwgd2lsbCBidWlsZCBhIHJlc2NvcGUgc3RvcmVcclxuICAgICAqXHJcbiAgICAgKiAoY29udGV4dCwge3JlcXVpcmUsdXNlLHJlZmluZSxzdGF0ZSwgZGF0YXN9KVxyXG4gICAgICogKGNvbnRleHQpXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGNvbnRleHQge29iamVjdH0gY29udGV4dCB3aGVyZSB0byBmaW5kIHRoZSBvdGhlciBzdG9yZXMgKGRlZmF1bHQgOiBzdGF0aWMgc3RhdGljQ29udGV4dCApXHJcbiAgICAgKiBAcGFyYW0ga2V5cyB7QXJyYXl9IChwYXNzZWQgdG8gU3RvcmU6Om1hcCkgRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJOYW1lZFN0b3JlOmtleVwiLCBvdGhlclN0b3JlLmFzKFwib3RoZXJLZXlcIildXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdmFyIGFyZ3ogICAgICAgICA9IFsuLi5hcmd1bWVudHNdLFxyXG4gICAgICAgICAgICBfc3RhdGljICAgICAgPSB0aGlzLmNvbnN0cnVjdG9yLFxyXG4gICAgICAgICAgICBjb250ZXh0ICAgICAgPSAhaXNBcnJheShhcmd6WzBdKSAmJiAhaXNTdHJpbmcoYXJnelswXSkgPyBhcmd6LnNoaWZ0KCkgOiBfc3RhdGljLnN0YXRpY0NvbnRleHQsXHJcbiAgICAgICAgICAgIGNmZyAgICAgICAgICA9IGFyZ3pbMF0gJiYgIWlzQXJyYXkoYXJnelswXSkgJiYgIWlzU3RyaW5nKGFyZ3pbMF0pID8gYXJnei5zaGlmdCgpIDoge30sXHJcbiAgICAgICAgICAgIG5hbWUgICAgICAgICA9IGlzU3RyaW5nKGFyZ3pbMF0pID8gYXJnelswXSA6IGNmZy5uYW1lIHx8IF9zdGF0aWMubmFtZSxcclxuICAgICAgICAgICAgd2F0Y2hzICAgICAgID0gaXNBcnJheShhcmd6WzBdKSA/IGFyZ3ouc2hpZnQoKSA6IGNmZy51c2UgfHwgW10sLy8gd2F0Y2hzIG5lZWQgdG8gYmUgZGVmaW5lZCBhZnRlciBhbGwgdGhlIHN0b3JlIGFyZSByZWdpc3RlcmVkIDogc28gd2UgY2FuJ3QgZGVhbCB3aXRoIGFueSBcInN0YXRpYyB1c2VcIiBhdXRvbWF0aWNseVxyXG4gICAgICAgICAgICByZWZpbmUgICAgICAgPSBpc0Z1bmN0aW9uKGFyZ3pbMF0pID8gYXJnei5zaGlmdCgpIDogY2ZnLnJlZmluZSB8fCBudWxsLFxyXG4gICAgICAgICAgICBpbml0aWFsU3RhdGUgPSBfc3RhdGljLmluaXRpYWxTdGF0ZTtcclxuXHJcbiAgICAgICAgdGhpcy5fdWlkICAgICAgICAgID0gY2ZnLl91aWQgfHwgc2hvcnRpZC5nZW5lcmF0ZSgpO1xyXG4gICAgICAgIHRoaXMuX21heExpc3RlbmVycyA9IGNmZy5kZWZhdWx0TWF4TGlzdGVuZXJzIHx8IFN0b3JlLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XHJcbiAgICAgICAgdGhpcy5sb2NrcyAgICAgICAgID0gMDtcclxuICAgICAgICB0aGlzLl9vblN0YWJpbGl6ZSAgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5fcGVyc2lzdGVuY2VUbSA9IGNmZy5wZXJzaXN0ZW5jZVRtIHx8IHRoaXMuY29uc3RydWN0b3IucGVyc2lzdGVuY2VUbTtcclxuICAgICAgICBpZiAoIGlzU3RyaW5nKGFyZ3pbMF0pICkge1xyXG4gICAgICAgICAgICBpZiAoIGNvbnRleHQuX19jb250ZXh0W25hbWVdIClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlJlU2NvcGU6IE92ZXJ3cml0aW5nIGFuIGV4aXN0aW5nIHN0YXRpYyBuYW1lZCBzdG9yZSAoICVzICkgISFcIiwgbmFtZSk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuX19jb250ZXh0W25hbWVdID0gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggY2ZnICYmIGNmZy5vbiApIHtcclxuICAgICAgICAgICAgdGhpcy5vbihjZmcub24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLnN0YXRlICAgICAgPSB0aGlzLnN0YXRlIHx8IHt9O1xyXG5cclxuICAgICAgICB0aGlzLl91c2UgPSB3YXRjaHM7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuXHJcbiAgICAgICAgaWYgKCBjb250ZXh0LnN0b3JlcyApIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0T2JqID0gY29udGV4dDtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0ICAgID0gY29udGV4dC5zdG9yZXM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0T2JqID0gbmV3IENvbnRleHQoY29udGV4dCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dCAgICA9IGNvbnRleHQuc3RvcmVzO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHRoaXMuX3N0YWJsZSAgICAgICA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fcmV2ICAgICAgICAgID0gMTtcclxuICAgICAgICB0aGlzLl9yZXZzICAgICAgICAgPSB7fTtcclxuICAgICAgICB0aGlzLnN0b3JlcyAgICAgICAgPSB7fTtcclxuICAgICAgICB0aGlzLl9fcmV0YWluTG9ja3MgPSB7YWxsIDogMH07XHJcbiAgICAgICAgdGhpcy5fcmVxdWlyZSAgICAgID0gW107XHJcblxyXG4gICAgICAgIGlmICggX3N0YXRpYy5yZXF1aXJlIClcclxuICAgICAgICAgICAgdGhpcy5fcmVxdWlyZS5wdXNoKC4uLl9zdGF0aWMucmVxdWlyZSk7XHJcbiAgICAgICAgaWYgKCBjZmcucmVxdWlyZSApXHJcbiAgICAgICAgICAgIHRoaXMuX3JlcXVpcmUucHVzaCguLi5jZmcucmVxdWlyZSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2ZvbGxvd2VycyA9IFtdO1xyXG5cclxuICAgICAgICBpZiAoIGNmZy5oYXNPd25Qcm9wZXJ0eShcImRhdGFzXCIpICYmIGNmZy5kYXRhcyAhPT0gdW5kZWZpbmVkIClcclxuICAgICAgICAgICAgdGhpcy5kYXRhcyA9IGNmZy5kYXRhcztcclxuICAgICAgICBpZiAoIGNmZy5oYXNPd25Qcm9wZXJ0eShcInN0YXRlXCIpICYmIGNmZy5zdGF0ZSAhPT0gdW5kZWZpbmVkIClcclxuICAgICAgICAgICAgaW5pdGlhbFN0YXRlID0gY2ZnLnN0YXRlO1xyXG5cclxuICAgICAgICBpZiAoIHJlZmluZSApXHJcbiAgICAgICAgICAgIHRoaXMucmVmaW5lID0gcmVmaW5lO1xyXG5cclxuICAgICAgICBpZiAoICEhdGhpcy5fdXNlICYmIHRoaXMuX3VzZS5sZW5ndGggKSB7Ly8gaWYgdGhlcmUgaW5pdGlhbCB3YXRjaHMgYW55d2F5XHJcbiAgICAgICAgICAgIHRoaXMucHVsbCh0aGlzLl91c2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBpbml0aWFsU3RhdGUgKSB7Ly8gc3luYyByZWZpbmVcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHsuLi5pbml0aWFsU3RhdGV9O1xyXG4gICAgICAgICAgICBpZiAoIHRoaXMuaXNDb21wbGV0ZSgpICYmIHRoaXMuZGF0YXMgPT09IHVuZGVmaW5lZCApXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFzID0gdGhpcy5yZWZpbmUodGhpcy5kYXRhcywgdGhpcy5zdGF0ZSwgdGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IHRoaXMuZGF0YXMgIT09IHVuZGVmaW5lZDsvLyBzdGFibGUgaWYgaXQgaGF2ZSBpbml0aWFsIHJlc3VsdCBkYXRhc1xyXG4gICAgICAgICF0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2V0IGEgQnVpbGRlci1rZXkgcGFpciBmb3IgU3RvcmU6Om1hcFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcclxuICAgICAqIEByZXR1cm5zIHt7c3RvcmU6IFN0b3JlLCBuYW1lOiAqfX1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGFzKCBuYW1lICkge1xyXG4gICAgICAgIHJldHVybiB7c3RvcmUgOiB0aGlzLCBuYW1lfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1hcCBhbGwgbmFtZWQgc3RvcmVzIGluIHtrZXlzfSB0byB0aGUge29iamVjdH0ncyBzdGF0ZVxyXG4gICAgICogSG9vayBjb21wb25lbnRXaWxsVW5tb3VudCAoZm9yIHJlYWN0IGNvbXApIG9yIGRlc3Ryb3kgdG8gdW5CaW5kIHRoZW0gYXV0b21hdGljYWxseVxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHBhcmFtIG9iamVjdCB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfC4uLn0gdGFyZ2V0IHN0YXRlIGF3YXJlIG9iamVjdFxyXG4gICAgICogQHBhcmFtIGtleXMge0FycmF5fSBFeCA6IFtcInNlc3Npb25cIiwgXCJvdGhlclN0YXRpY05hbWVkU3RvcmU6a2V5XCIsIHN0b3JlLmFzKCdhbm90aGVyS2V5JyldXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBtYXAoIGNvbXBvbmVudCwga2V5cywgY29udGV4dCwgb3JpZ2luLCBzZXRJbml0aWFsID0gZmFsc2UgKSB7XHJcbiAgICAgICAgdmFyIHRhcmdldFJldnMgICAgID0gY29tcG9uZW50Ll9yZXZzIHx8IHt9O1xyXG4gICAgICAgIC8vIHZhciB0YXJnZXRDb250ZXh0ICA9IGNvbXBvbmVudC5zdG9yZXMgfHwgKGNvbXBvbmVudC5zdG9yZXMgPSBuZXcgQ29udGV4dCh7fSkpO1xyXG4gICAgICAgIHZhciBpbml0aWFsT3V0cHV0cyA9IHt9O1xyXG4gICAgICAgIGtleXMgICAgICAgICAgICAgICA9IGlzQXJyYXkoa2V5cykgPyBbLi4ua2V5c10gOiBba2V5c107XHJcblxyXG5cclxuICAgICAgICBjb250ZXh0ID0gY29udGV4dCB8fCBTdG9yZS5zdGF0aWNDb250ZXh0O1xyXG5cclxuICAgICAgICAvLyBpZiAoIXRhcmdldENvbnRleHQuX19jb250ZXh0KVxyXG4gICAgICAgIC8vICAgICBkZWJ1Z2dlcjtcclxuXHJcbiAgICAgICAga2V5cyAgICAgICAgICAgPSBrZXlzLmZpbHRlcihcclxuICAgICAgICAgICAgLy8gQHRvZG8gOiB1c2UgcXVlcnkgcmVmc1xyXG4gICAgICAgICAgICAvLyAoc3RvcmUpKFxcLnN0b3JlKSooXFxbKFxcKnwocHJvcHMpXFx3KykrKVxcXSk/KFxcOmFsaWFzKVxyXG4gICAgICAgICAgICAoIGtleSApID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICggIWtleSApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm90IGEgbWFwcGFibGUgc3RvcmUgaXRlbSAnXCIgKyBrZXkgKyBcIicgaW4gXCIgKyBvcmlnaW4gKyAnICEhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpYXMsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmU7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGtleS5zdG9yZSAmJiBrZXkubmFtZSApIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IG5hbWUgPSBrZXkubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGtleS5zdG9yZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIGlzRnVuY3Rpb24oa2V5KSApIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lID0gYWxpYXMgPSBrZXkubmFtZSB8fCBrZXkuZGVmYXVsdE5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBrZXk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleSAgID0ga2V5Lm1hdGNoKC8oW1xcd19dKykoPzpcXDpcXFsoXFwqKVxcXSk/KD86XFw6KFxcKikpPy8pO1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUgID0ga2V5WzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlID0gY29udGV4dC5fX2NvbnRleHRba2V5WzBdXTtcclxuICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IGtleVsxXSA9PSAnKicgPyBudWxsIDoga2V5WzJdIHx8IGtleVswXTsvLyBhbGxvdyBiaW5kaW5nIHByb3BzICAoWypdKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICggdGFyZ2V0UmV2c1tuYW1lXSApIHJldHVybiBmYWxzZTsvLyBpZ25vcmUgZGJsIHVzZXMgZm9yIG5vd1xyXG4gICAgICAgICAgICAgICAgaWYgKCAhc3RvcmUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vdCBhIG1hcHBhYmxlIHN0b3JlIGl0ZW0gJ1wiICsgbmFtZSArIFwiL1wiICsgYWxpYXMgKyBcIicgaW4gXCIgKyBvcmlnaW4gKyAnICEhJywgc3RvcmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIGlzRnVuY3Rpb24oc3RvcmUpICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW91bnRTdG9yZShuYW1lLCBjb250ZXh0KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0Ll9fY29udGV4dFtuYW1lXS5iaW5kKGNvbXBvbmVudCwgYWxpYXMsIHNldEluaXRpYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmICggY29udGV4dC5fX2NvbnRleHRba2V5WzBdXS5zdGF0ZSApIHsvLyBkbyBzeW5jIHB1c2ggYWZ0ZXIgY29uc3RydWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29udGV4dC5fX2NvbnRleHRba2V5WzBdXS5wdXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5iaW5kKGNvbXBvbmVudCwgYWxpYXMsIHNldEluaXRpYWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0UmV2c1thbGlhc10gPSB0YXJnZXRSZXZzW2FsaWFzXSB8fCB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gIXRhcmdldENvbnRleHQuX19jb250ZXh0W2FsaWFzXSAmJiB0YXJnZXRDb250ZXh0LnJlZ2lzdGVyKHtbYWxpYXNdIDogY29udGV4dC5fX2NvbnRleHRbbmFtZV19KTtcclxuICAgICAgICAgICAgICAgIGlmICggY29udGV4dC5fX2NvbnRleHRbbmFtZV0uaGFzT3duUHJvcGVydHkoJ2RhdGFzJykgKVxyXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxPdXRwdXRzW2FsaWFzXSA9IGNvbnRleHQuZGF0YXNbbmFtZV07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdmFyIG1peGVkQ1dVbm1vdW50LFxyXG4gICAgICAgICAgICB1bk1vdW50S2V5ID0gY29tcG9uZW50LmlzUmVhY3RDb21wb25lbnQgPyBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIgOiBcImRlc3Ryb3lcIjtcclxuXHJcbiAgICAgICAgaWYgKCBjb21wb25lbnQuaGFzT3duUHJvcGVydHkodW5Nb3VudEtleSkgKSB7XHJcbiAgICAgICAgICAgIG1peGVkQ1dVbm1vdW50ID0gY29tcG9uZW50W3VuTW91bnRLZXldO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29tcG9uZW50W3VuTW91bnRLZXldID0gZnVuY3Rpb24gKCkgey8vIHRvZG8gaG9wXHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzW3VuTW91bnRLZXldO1xyXG4gICAgICAgICAgICBpZiAoIG1peGVkQ1dVbm1vdW50IClcclxuICAgICAgICAgICAgICAgIHRoaXNbdW5Nb3VudEtleV0gPSBtaXhlZENXVW5tb3VudDtcclxuICAgICAgICAgICAga2V5cy5tYXAoXHJcbiAgICAgICAgICAgICAgICAoIGtleSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgga2V5LnN0b3JlICYmIGtleS5uYW1lICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IG5hbWUgPSBrZXkubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBrZXkuc3RvcmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICggaXNGdW5jdGlvbihrZXkpICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gYWxpYXMgPSBrZXkubmFtZSB8fCBrZXkuZGVmYXVsdE5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlID0gY29udGV4dC5fX2NvbnRleHRbbmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5ICAgPSBrZXkuc3BsaXQoJzonKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSAgPSBrZXlbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlID0gY29udGV4dC5fX2NvbnRleHRba2V5WzBdXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBrZXlbMV0gfHwga2V5WzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUgJiYgIWlzRnVuY3Rpb24oc3RvcmUpICYmIHN0b3JlLnVuQmluZChjb21wb25lbnQsIGFsaWFzKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpc1t1bk1vdW50S2V5XSAmJiB0aGlzW3VuTW91bnRLZXldLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaW5pdGlhbE91dHB1dHM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldENvbnRleHQoIGNvbnRleHRzICkge1xyXG4gICAgICAgIGxldCBza2V5ID0gaXNBcnJheShjb250ZXh0cykgPyBjb250ZXh0cy5zb3J0KCggYSwgYiApID0+IHtcclxuICAgICAgICAgICAgaWYgKCBhLmZpcnN0bmFtZSA8IGIuZmlyc3RuYW1lICkgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICBpZiAoIGEuZmlyc3RuYW1lID4gYi5maXJzdG5hbWUgKSByZXR1cm4gMTtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfSkuam9pbignOjonKSA6IGNvbnRleHRzO1xyXG4gICAgICAgIHJldHVybiBDb250ZXh0LmNvbnRleHRzW3NrZXldID0gQ29udGV4dC5jb250ZXh0c1tza2V5XSB8fCBuZXcgQ29udGV4dCh7fSwge2lkIDogc2tleX0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBtb3VudFN0b3JlKCBuYW1lLCBjb250ZXh0LCBzdG9yZSwgc3RhdGUsIGRhdGFzICkge1xyXG4gICAgICAgIGxldCBjdHgsIGNvbnRleHRNYXAgPSBjb250ZXh0Ll9fY29udGV4dDtcclxuICAgICAgICBjb250ZXh0TWFwW25hbWVdICAgID0gc3RvcmUgPSBzdG9yZSB8fCBjb250ZXh0TWFwW25hbWVdO1xyXG4gICAgICAgIGlmICggIXN0b3JlICkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm90IGEgbWFwcGFibGUgc3RvcmUgaXRlbSAnXCIgKyBuYW1lICsgJyAhIScsIHN0b3JlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIGlzRnVuY3Rpb24oc3RvcmUpICkge1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBpZiAoIHN0b3JlICYmIChzdG9yZS5jb250ZXh0cyB8fCBzdG9yZS5jb250ZXh0KSApIHtcclxuICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuZ2V0Q29udGV4dChzdG9yZS5jb250ZXh0cyB8fCBbc3RvcmUuY29udGV4dF0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGN0eC5yZWdpc3Rlcih7W25hbWVdIDogY3R4Ll9fY29udGV4dFtuYW1lXSB8fCBzdG9yZX0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnRleHRNYXBbbmFtZV0gPSBjdHhbbmFtZV0gPSBuZXcgc3RvcmUoY29udGV4dCwge3N0YXRlLCBkYXRhc30pO1xyXG4gICAgICAgICAgICAgICAgY3R4Ll93YXRjaFN0b3JlKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGN0eFtuYW1lXTtcclxuICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgICAgICBzdG9yZSA9IGNvbnRleHRNYXBbbmFtZV0gPSBuZXcgc3RvcmUoY29udGV4dCwge3N0YXRlLCBkYXRhc30pO1xyXG4gICAgICAgICAgICBjb250ZXh0TWFwW25hbWVdLnJlbGluayhuYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIHN0YXRlICE9PSB1bmRlZmluZWQgJiYgZGF0YXMgPT09IHVuZGVmaW5lZCApXHJcbiAgICAgICAgICAgICAgICBzdG9yZS5zZXRTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCBzdGF0ZSAhPT0gdW5kZWZpbmVkIClcclxuICAgICAgICAgICAgICAgIHN0b3JlLnN0YXRlID0gc3RhdGU7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGRhdGFzICE9PSB1bmRlZmluZWQgKVxyXG4gICAgICAgICAgICAgICAgc3RvcmUucHVzaChkYXRhcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdG9yZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE92ZXJyaWRhYmxlIG1ldGhvZCB0byBrbm93IGlmIGEgc3RhdGUgY2hhbmdlIHNob3VsZCBiZSBwcm9wYWcgdG8gdGhlIGxpc3RlbmluZyBzdG9yZXMgJiBjb21wb25lbnRzXHJcbiAgICAgKiBJZiBzdGF0aWMgZm9sbG93IGlzIGRlZmluZWQsIHNob3VsZFByb3BhZyB3aWxsIHJldHVybiB0cnVlIGlmIGFueSBvZiB0aGUgXCJmb2xsb3dcIiBrZXlzIHdhcyB1cGRhdGVkXHJcbiAgICAgKiBJZiBub3QgaXQgd2lsbCBhbHdheXMgcmV0dXJuIHRydWVcclxuICAgICAqL1xyXG4gICAgc2hvdWxkUHJvcGFnKCBuRGF0YXMgKSB7XHJcbiAgICAgICAgdmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yLCByLFxyXG4gICAgICAgICAgICBjRGF0YXMgID0gdGhpcy5kYXRhcztcclxuXHJcbiAgICAgICAgLy8gaWYgKCAhY1N0YXRlIClcclxuICAgICAgICAvLyAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgaWYgKCAhY0RhdGFzICYmICghX3N0YXRpYy5mb2xsb3cgfHwgIV9zdGF0aWMuZm9sbG93Lmxlbmd0aCB8fFxyXG4gICAgICAgICAgICAgICAgX3N0YXRpYy5mb2xsb3cgJiYgX3N0YXRpYy5mb2xsb3cucmVkdWNlKCggciwgaSApID0+IChyIHx8IG5EYXRhcyAmJiBuRGF0YXNbaV0pLCBmYWxzZSkpIClcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIGlmICggaXNBcnJheShfc3RhdGljLmZvbGxvdykgKVxyXG4gICAgICAgICAgICBfc3RhdGljLmZvbGxvdy5mb3JFYWNoKFxyXG4gICAgICAgICAgICAgICAgKCBrZXkgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgciA9IHIgfHwgKG5EYXRhcyA/IGNEYXRhc1trZXldICE9PSBuRGF0YXNba2V5XSA6IGNEYXRhcyAmJiBjRGF0YXNba2V5XSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBlbHNlIGlmICggX3N0YXRpYy5mb2xsb3cgPT09ICdzdHJpY3QnIClcclxuICAgICAgICAgICAgciA9IG5EYXRhcyA9PT0gY0RhdGFzO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjRGF0YXMgJiYgT2JqZWN0LmtleXMoY0RhdGFzKS5mb3JFYWNoKFxyXG4gICAgICAgICAgICAgICAgKCBrZXkgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgciA9IHIgfHwgKG5EYXRhcyA/IGNEYXRhc1trZXldICE9PSBuRGF0YXNba2V5XSA6IGNEYXRhcyAmJiBjRGF0YXNba2V5XSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbkRhdGFzICYmIE9iamVjdC5rZXlzKG5EYXRhcykuZm9yRWFjaChcclxuICAgICAgICAgICAgICAgICgga2V5ICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHIgPSByIHx8IChuRGF0YXMgPyBjRGF0YXNba2V5XSAhPT0gbkRhdGFzW2tleV0gOiBjRGF0YXMgJiYgY0RhdGFzW2tleV0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gISFyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3ZlcnJpZGFibGUgcmVmaW5lciAvIHJlbWFwcGVyXHJcbiAgICAgKiBJZiBzdGF0ZSBvciBsYXN0UHVibGljU3RhdGUgYXJlIHNpbXBsZSBoYXNoIG1hcHMgcmVmaW5lIHdpbGwgcmV0dXJuIHsuLi5kYXRhcywgLi4uc3RhdGV9XHJcbiAgICAgKiBpZiBub3QgaXQgd2lsbCByZXR1cm4gdGhlIGxhc3QgcHJpdmF0ZSBzdGF0ZVxyXG4gICAgICogQHBhcmFtIGRhdGFzXHJcbiAgICAgKiBAcGFyYW0gc3RhdGVcclxuICAgICAqIEByZXR1cm5zIHsqfVxyXG4gICAgICovXHJcbiAgICByZWZpbmUoIGRhdGFzLCBzdGF0ZSwgY2hhbmdlcyApIHtcclxuICAgICAgICBzdGF0ZSA9IHN0YXRlIHx8IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGlmICggIWRhdGFzIHx8IGRhdGFzLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gfHwgc3RhdGUuX19wcm90b19fICE9PSBvYmpQcm90byApXHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uZGF0YXMsIC4uLnN0YXRlfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVib3VuY2UgdGhpcyBzdG9yZSBwcm9wYWdhdGlvbiAoICYgcmVkdWNpbmcgKVxyXG4gICAgICogQHBhcmFtIGNiXHJcbiAgICAgKi9cclxuICAgIHN0YWJpbGl6ZSggY2IgKSB7XHJcbiAgICAgICAgdmFyIG1lID0gdGhpcztcclxuICAgICAgICBjYiAmJiBtZS5vbmNlKCdzdGFibGUnLCBjYik7XHJcbiAgICAgICAgdGhpcy5fc3RhYmxlICYmIHRoaXMuZW1pdCgndW5zdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGFzKTtcclxuXHJcbiAgICAgICAgbWUuX3N0YWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoIHRoaXMuX3N0YWJpbGl6ZXIgKVxyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fc3RhYmlsaXplcik7XHJcblxyXG4gICAgICAgIHRoaXMuX3N0YWJpbGl6ZXIgPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICB0aGlzLnB1c2guYmluZChcclxuICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gey8vQHRvZG9cclxuICAgICAgICAgICAgICAgICAgICAvLyBtZS5fc3RhYmxlICAgICAgID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGFiaWxpemVyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnJlbGVhc2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGF0Y2goIGV2ZW50ICkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFB1bGwgc3RvcmVzIGluIHRoZSBwcml2YXRlIHN0YXRlXHJcbiAgICAgKiBAcGFyYW0gc3RvcmVzICB7QXJyYXl9IChwYXNzZWQgdG8gU3RvcmU6Om1hcCkgRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJOYW1lZFN0b3JlOmtleVwiLCBvdGhlclN0b3JlLmFzKFwib3RoZXJLZXlcIildXHJcbiAgICAgKi9cclxuICAgIHB1bGwoIHN0b3JlcywgZG9XYWl0LCBvcmlnaW4gKSB7XHJcbiAgICAgICAgbGV0IGluaXRpYWxPdXRwdXRzID0gU3RvcmUubWFwKHRoaXMsIHN0b3JlcywgdGhpcy5jb250ZXh0T2JqLCBvcmlnaW4sIHRydWUpO1xyXG4gICAgICAgIGlmICggZG9XYWl0ICkge1xyXG4gICAgICAgICAgICB0aGlzLndhaXQoKTtcclxuICAgICAgICAgICAgc3RvcmVzLmZvckVhY2goKCBzICkgPT4gdGhpcy5jb250ZXh0W3NdICYmIHRoaXMud2FpdCh0aGlzLmNvbnRleHRbc10pKTtcclxuICAgICAgICAgICAgdGhpcy5yZWxlYXNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpbml0aWFsT3V0cHV0cztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFwcGx5IHJlZmluZS9yZW1hcCBvbiB0aGUgcHJpdmF0ZSBzdGF0ZSAmIHB1c2ggdGhlIHJlc3VsdGluZyBcInB1YmxpY1wiIHN0YXRlIHRvIGZvbGxvd2Vyc1xyXG4gICAgICogQHBhcmFtIGNiXHJcbiAgICAgKi9cclxuICAgIHB1c2goIGRhdGFzLCBmb3JjZSwgY2IgKSB7XHJcbiAgICAgICAgY2IgICAgICAgICAgICA9IGZvcmNlID09PSB0cnVlID8gY2IgOiBmb3JjZTtcclxuICAgICAgICBmb3JjZSAgICAgICAgID0gZm9yY2UgPT09IHRydWU7XHJcbiAgICAgICAgdmFyIGkgICAgICAgICA9IDAsXHJcbiAgICAgICAgICAgIG1lICAgICAgICA9IHRoaXMsXHJcbiAgICAgICAgICAgIG5leHRTdGF0ZSA9ICFkYXRhcyAmJiB7Li4udGhpcy5zdGF0ZSwgLi4udGhpcy5fY2hhbmdlc1NXfSB8fCB0aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICBuZXh0RGF0YXMgPSBkYXRhcyB8fFxyXG4gICAgICAgICAgICAgICAgKHRoaXMuaXNDb21wbGV0ZShuZXh0U3RhdGUpID8gdGhpcy5yZWZpbmUodGhpcy5kYXRhcywgbmV4dFN0YXRlLCB0aGlzLl9jaGFuZ2VzU1cpIDogdGhpcy5kYXRhcyk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0gbmV4dFN0YXRlO1xyXG4gICAgICAgIGlmICggIWZvcmNlICYmXHJcbiAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICghdGhpcy5kYXRhcyAmJiB0aGlzLmRhdGFzID09PSBuZXh0RGF0YXMpIHx8ICF0aGlzLnNob3VsZFByb3BhZyhuZXh0RGF0YXMpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgY2IgJiYgY2IoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kYXRhcyA9IG5leHREYXRhcztcclxuICAgICAgICB0aGlzLmxvY2tzKys7XHJcbiAgICAgICAgdGhpcy5yZWxlYXNlKGNiKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgdGhlIGN1cnJlbnQgcHJpdmF0ZSBzdGF0ZSAmIHB1c2ggaXQgb25jZSB0aGUgc3RvcmUgaXMgc3RhYmxlXHJcbiAgICAgKiBAcGFyYW0gcFN0YXRlXHJcbiAgICAgKiBAcGFyYW0gY2JcclxuICAgICAqL1xyXG4gICAgc2V0U3RhdGUoIHBTdGF0ZSwgY2IsIHN5bmMgKSB7XHJcbiAgICAgICAgdmFyIGkgICAgICAgPSAwLCBjaGFuZ2UsXHJcbiAgICAgICAgICAgIGNoYW5nZXMgPSB0aGlzLl9jaGFuZ2VzU1cgPSB0aGlzLl9jaGFuZ2VzU1cgfHwge307XHJcbiAgICAgICAgZm9yICggdmFyIGsgaW4gcFN0YXRlIClcclxuICAgICAgICAgICAgaWYgKCAhdGhpcy5zdGF0ZSB8fCBwU3RhdGUuaGFzT3duUHJvcGVydHkoaylcclxuICAgICAgICAgICAgICAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICBwU3RhdGVba10gIT0gdGhpcy5zdGF0ZVtrXVxyXG4gICAgICAgICAgICAgICAgICAgIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGVba10gJiYgcFN0YXRlW2tdICYmIChwU3RhdGVba10uX3JldiAhPSB0aGlzLl9yZXZzW2tdKSkvLyByZXYvaGFzaCB1cGRhdGVcclxuICAgICAgICAgICAgICAgICkgKSB7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2UgICAgICAgID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JldnNba10gPSBwU3RhdGVba10gJiYgcFN0YXRlW2tdLl9yZXYgfHwgdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNoYW5nZXNba10gICAgPSBwU3RhdGVba107XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBzeW5jICkge1xyXG4gICAgICAgICAgICB0aGlzLnB1c2goKTtcclxuICAgICAgICAgICAgY2IgJiYgY2IoKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCBjaGFuZ2UgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YWJpbGl6ZShjYik7XHJcbiAgICAgICAgICAgIH0gZWxzZSBjYiAmJiBjYigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSB0aGUgY3VycmVudCBwcml2YXRlIHN0YXRlICYgcHVzaCBpdCBvbmNlIHRoZSBzdG9yZSBpcyBzdGFibGVcclxuICAgICAqIEBwYXJhbSBwU3RhdGVcclxuICAgICAqIEBwYXJhbSBjYlxyXG4gICAgICovXHJcbiAgICBzZXRTdGF0ZVN5bmMoIHBTdGF0ZSApIHtcclxuICAgICAgICB2YXIgaSAgICAgICA9IDAsIGNoYW5nZSxcclxuICAgICAgICAgICAgY2hhbmdlcyA9IHRoaXMuX2NoYW5nZXNTVyA9IHRoaXMuX2NoYW5nZXNTVyB8fCB7fTtcclxuICAgICAgICBmb3IgKCB2YXIgayBpbiBwU3RhdGUgKVxyXG4gICAgICAgICAgICBpZiAoICF0aGlzLnN0YXRlIHx8IHBTdGF0ZS5oYXNPd25Qcm9wZXJ0eShrKVxyXG4gICAgICAgICAgICAgICAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHBTdGF0ZVtrXSAhPSB0aGlzLnN0YXRlW2tdXHJcbiAgICAgICAgICAgICAgICAgICAgfHxcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZVtrXSAmJiBwU3RhdGVba10gJiYgKHBTdGF0ZVtrXS5fcmV2ICE9IHRoaXMuX3JldnNba10pKS8vIHJldi9oYXNoIHVwZGF0ZVxyXG4gICAgICAgICAgICAgICAgKSApIHtcclxuICAgICAgICAgICAgICAgIGNoYW5nZSAgICAgICAgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmV2c1trXSA9IHBTdGF0ZVtrXSAmJiBwU3RhdGVba10uX3JldiB8fCB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlc1trXSAgICA9IHBTdGF0ZVtrXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHVzaCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVwbGFjZSB0aGUgY3VycmVudCBwcml2YXRlIHN0YXRlICYgcHVzaCBpdCBvbmNlIHRoZSBzdG9yZSBpcyBzdGFibGVcclxuICAgICAqIEBwYXJhbSBwU3RhdGVcclxuICAgICAqIEBwYXJhbSBjYlxyXG4gICAgICovXHJcbiAgICByZXBsYWNlU3RhdGUoIHBTdGF0ZSwgY2IgKSB7XHJcbiAgICAgICAgdmFyIGkgICAgICA9IDAsIG1lID0gdGhpcztcclxuICAgICAgICB0aGlzLnN0YXRlID0gcFN0YXRlO1xyXG5cclxuICAgICAgICB0aGlzLnN0YWJpbGl6ZShjYik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXQgYSBzdG9yZS1rZXkgcGFpciBmb3IgU3RvcmU6Om1hcFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcclxuICAgICAqIEByZXR1cm5zIHt7c3RvcmU6IFN0b3JlLCBuYW1lOiAqfX1cclxuICAgICAqL1xyXG4gICAgYXMoIG5hbWUgKSB7XHJcbiAgICAgICAgcmV0dXJuIHtzdG9yZSA6IHRoaXMsIG5hbWV9O1xyXG4gICAgfVxyXG5cclxuICAgIG9uKCBsaXN0cyApIHtcclxuICAgICAgICBpZiAoICFpc1N0cmluZyhsaXN0cykgJiYgbGlzdHMgKVxyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhsaXN0cykuZm9yRWFjaChrID0+IHN1cGVyLm9uKGssIGxpc3RzW2tdKSk7XHJcbiAgICAgICAgZWxzZSBzdXBlci5vbiguLi5hcmd1bWVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUxpc3RlbmVyKCBsaXN0cyApIHtcclxuICAgICAgICBpZiAoICFpc1N0cmluZyhsaXN0cykgJiYgbGlzdHMgKVxyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhsaXN0cykuZm9yRWFjaChrID0+IHN1cGVyLnJlbW92ZUxpc3RlbmVyKGssIGxpc3RzW2tdKSk7XHJcbiAgICAgICAgZWxzZSBzdXBlci5yZW1vdmVMaXN0ZW5lciguLi5hcmd1bWVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmVsaW5rIGJpbmRpbmdzICYgcmVxdWlyZXNcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXHJcbiAgICAgKiBAcmV0dXJucyB7e3N0b3JlOiBTdG9yZSwgbmFtZTogKn19XHJcbiAgICAgKi9cclxuICAgIHJlbGluayggZnJvbSApIHtcclxuICAgICAgICBsZXQgY29udGV4dCA9IHRoaXMuY29udGV4dE9iaixcclxuICAgICAgICAgICAgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3I7XHJcbiAgICAgICAgaWYgKCBfc3RhdGljLnVzZSApIHtcclxuICAgICAgICAgICAgLy90b2RvIHVubGlua1xyXG4gICAgICAgICAgICB0aGlzLnB1bGwoX3N0YXRpYy51c2UsIGZhbHNlLCBmcm9tKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggdGhpcy5fcmVxdWlyZSApIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVxdWlyZS5mb3JFYWNoKFxyXG4gICAgICAgICAgICAgICAgc3RvcmUgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2FpdChjb250ZXh0Ll9fY29udGV4dFtzdG9yZV0pXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogaXMgY29tcGxldGUgKGFsbCByZXF1aWVyZWQga2V5cyBhcmUgaGVyZSlcclxuICAgICAqIEByZXR1cm5zIGJvb2xcclxuICAgICAqL1xyXG4gICAgaXNDb21wbGV0ZSggc3RhdGUgPSB0aGlzLnN0YXRlICkge1xyXG4gICAgICAgIHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvcjtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAhdGhpcy5fcmVxdWlyZVxyXG4gICAgICAgICAgICB8fCAhdGhpcy5fcmVxdWlyZS5sZW5ndGhcclxuICAgICAgICAgICAgfHwgc3RhdGUgJiYgdGhpcy5fcmVxdWlyZS5yZWR1Y2UoXHJcbiAgICAgICAgICAgICAgICAoIHIsIGtleSApID0+IChyICYmIHN0YXRlW2tleV0pLFxyXG4gICAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGlzIHN0YWJsZVxyXG4gICAgICogQHJldHVybnMgYm9vbFxyXG4gICAgICovXHJcbiAgICBpc1N0YWJsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhYmxlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVW4gYmluZCB0aGlzIHN0b3JlIG9mZiB0aGUgZ2l2ZW4gY29tcG9uZW50LWtleVxyXG4gICAgICogQHBhcmFtIG9ialxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICogQHJldHVybnMge0FycmF5LjwqPn1cclxuICAgICAqL1xyXG4gICAgdW5CaW5kKCBvYmosIGtleSApIHtcclxuICAgICAgICB2YXIgZm9sbG93ZXJzID0gdGhpcy5fZm9sbG93ZXJzLFxyXG4gICAgICAgICAgICBpICAgICAgICAgPSBmb2xsb3dlcnMgJiYgZm9sbG93ZXJzLmxlbmd0aDtcclxuICAgICAgICB3aGlsZSAoZm9sbG93ZXJzICYmIGktLSlcclxuICAgICAgICAgICAgaWYgKCBmb2xsb3dlcnNbaV1bMF0gPT0gb2JqICYmIGZvbGxvd2Vyc1tpXVsxXSA9PSBrZXkgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvbGxvd2Vycy5zcGxpY2UoaSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCaW5kIHRoaXMgc3RvcmUgY2hhbmdlcyB0byB0aGUgZ2l2ZW4gY29tcG9uZW50LWtleVxyXG4gICAgICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxyXG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcclxuICAgICAqL1xyXG4gICAgYmluZCggb2JqLCBrZXksIHNldEluaXRpYWwgPSB0cnVlICkge1xyXG4gICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5wdXNoKFtvYmosIGtleV0pO1xyXG4gICAgICAgIGlmICggc2V0SW5pdGlhbCAmJiB0aGlzLmRhdGFzICYmIHRoaXMuX3N0YWJsZSApIHtcclxuICAgICAgICAgICAgaWYgKCB0eXBlb2Ygb2JqICE9IFwiZnVuY3Rpb25cIiApIHtcclxuICAgICAgICAgICAgICAgIGlmICgga2V5ICkgb2JqLnNldFN0YXRlKHtba2V5XSA6IHRoaXMuZGF0YXN9KTtcclxuICAgICAgICAgICAgICAgIGVsc2Ugb2JqLnNldFN0YXRlKHRoaXMuZGF0YXMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb2JqKHRoaXMuZGF0YXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogb25jZSgnc3RhYmxlJywgY2IpXHJcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXHJcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxyXG4gICAgICovXHJcbiAgICB0aGVuKCBjYiApIHtcclxuICAgICAgICBpZiAoIHRoaXMuX3N0YWJsZSApXHJcbiAgICAgICAgICAgIHJldHVybiBjYihudWxsLCB0aGlzLmRhdGFzKTtcclxuICAgICAgICB0aGlzLm9uY2UoJ3N0YWJsZScsIGUgPT4gY2IobnVsbCwgdGhpcy5kYXRhcykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGEgbG9jayBzbyB0aGUgc3RvcmUgd2lsbCBub3QgcHJvcGFnIGl0IHN0YXRlIHVudGlsbCByZWxlYXNlKCkgaXMgY2FsbFxyXG4gICAgICogQHBhcmFtIHByZXZpb3VzIHtTdG9yZXxudW1iZXJ8QXJyYXl9IEBvcHRpb25hbCB3ZiB0byB3YWl0LCByZWxlYXNlcyB0byB3YWl0IG9yIGFycmF5IG9mIHN0dWZmIHRvIHdhaXRcclxuICAgICAqIEByZXR1cm5zIHtUYXNrRmxvd31cclxuICAgICAqL1xyXG4gICAgd2FpdCggcHJldmlvdXMgKSB7XHJcbiAgICAgICAgaWYgKCB0eXBlb2YgcHJldmlvdXMgPT0gXCJudW1iZXJcIiApXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2tzICs9IHByZXZpb3VzO1xyXG4gICAgICAgIGlmICggaXNBcnJheShwcmV2aW91cykgKVxyXG4gICAgICAgICAgICByZXR1cm4gcHJldmlvdXMubWFwKHRoaXMud2FpdC5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgdGhpcy5fc3RhYmxlICYmIHRoaXMuZW1pdCgndW5zdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGFzKTtcclxuICAgICAgICB0aGlzLl9zdGFibGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxvY2tzKys7XHJcbiAgICAgICAgaWYgKCBwcmV2aW91cyAmJiBpc0Z1bmN0aW9uKHByZXZpb3VzLnRoZW4pICkge1xyXG4gICAgICAgICAgICBwcmV2aW91cy50aGVuKHRoaXMucmVsZWFzZS5iaW5kKHRoaXMsIG51bGwpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWNyZWFzZSBsb2NrcyBmb3IgdGhpcyBzdG9yZSwgaWYgaXQgcmVhY2ggMCAmIGl0IGhhdmUgYSBwdWJsaWMgc3RhdGUsXHJcbiAgICAgKiBpdCB3aWxsIGJlIHByb3BhZ2F0ZWQgdG8gdGhlIGZvbGxvd2VycyxcclxuICAgICAqIHRoZW4sIGFsbCBzdHVmZiBwYXNzZWQgdG8gXCJ0aGVuXCIgY2FsbCBiYWNrIHdpbGwgYmUgZXhlYyAvIHJlbGVhc2VkXHJcbiAgICAgKiBAcGFyYW0gZGVzeW5jXHJcbiAgICAgKiBAcmV0dXJucyB7Kn1cclxuICAgICAqL1xyXG4gICAgcmVsZWFzZSggY2IgKSB7XHJcbiAgICAgICAgdmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yO1xyXG4gICAgICAgIGxldCBpICAgICAgID0gMDtcclxuXHJcbiAgICAgICBpZiAodGhpcy5sb2NrcyA9PSAwKVxyXG4gICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIik7XHJcblxyXG5cclxuXHJcbiAgICAgICAgaWYgKCAhLS10aGlzLmxvY2tzICYmIHRoaXMuZGF0YXMgJiYgdGhpcy5pc0NvbXBsZXRlKCkgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IHRydWU7XHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5fcmV2ID0gMSArICh0aGlzLl9yZXYgKyAxKSAlIDEwMDAwMDA7Ly9cclxuICAgICAgICAgICAgaWYgKCB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoIClcclxuICAgICAgICAgICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5mb3JFYWNoKCggZm9sbG93ZXIgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhdGhpcy5kYXRhcyApIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiBmb2xsb3dlclswXSA9PSBcImZ1bmN0aW9uXCIgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbGxvd2VyWzBdKHRoaXMuZGF0YXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNiICYmIGkrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9sbG93ZXJbMF0uc2V0U3RhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZm9sbG93ZXJbMV0pID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtbZm9sbG93ZXJbMV1dIDogdGhpcy5kYXRhc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjYiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgKCkgPT4gKCEoLS1pKSAmJiBjYigpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5lbWl0KCdzdGFibGUnLCB0aGlzLmRhdGFzKTtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnLCB0aGlzLmRhdGFzKTtcclxuICAgICAgICAgICAgY2IgJiYgY2IoKVxyXG4gICAgICAgIH0gZWxzZSBjYiAmJiB0aGlzLnRoZW4oY2IpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHJldGFpbiggcmVhc29uICkge1xyXG4gICAgLy8gICAgY29uc29sZS5sb2coXCJyZXRhaW5cIiwgdGhpcy5fdWlkLCByZWFzb24pO1xyXG4gICAgICAgIHRoaXMuX19yZXRhaW5Mb2Nrcy5hbGwrKztcclxuICAgICAgICBpZiAoIHJlYXNvbiApIHtcclxuICAgICAgICAgICAgdGhpcy5fX3JldGFpbkxvY2tzW3JlYXNvbl0gPSB0aGlzLl9fcmV0YWluTG9ja3NbcmVhc29uXSB8fCAwO1xyXG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluTG9ja3NbcmVhc29uXSsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkaXNwb3NlKCByZWFzb24gKSB7XHJcbiAgICAgICAgaWYgKHJlYXNvbikge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBpZiAodGhpcy5fX3JldGFpbkxvY2tzW3JlYXNvbl0gPT0gMClcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyAhXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluTG9ja3NbcmVhc29uXSA9IHRoaXMuX19yZXRhaW5Mb2Nrc1tyZWFzb25dIHx8IDA7XHJcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5Mb2Nrc1tyZWFzb25dLS07XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgaWYgKHRoaXMuX19yZXRhaW5Mb2Nrcy5hbGwgPT0gMClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nICFcIik7XHJcbiAgICBcclxuICAgICAgICBpZiAoICF0aGlzLl9fcmV0YWluTG9ja3MuYWxsICkge1xyXG4gICAgICAgICAgICBpZiAoIHRoaXMuX3BlcnNpc3RlbmNlVG0gKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX2Rlc3Ryb3lUTSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICAgICAgICAgIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRoZW4ocyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nKFwid3RmICAgXCIsIHJlYXNvbiwgIXRoaXMuX19yZXRhaW5Mb2Nrcy5hbGwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLl9fcmV0YWluTG9ja3MuYWxsICYmIHRoaXMuZGVzdHJveSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGVyc2lzdGVuY2VUbVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGhlbihzID0+ICghdGhpcy5fX3JldGFpbkxvY2tzLmFsbCAmJiB0aGlzLmRlc3Ryb3koKSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgIC8vICBjb25zb2xlLmxvZyhcImRlc3Ryb3lcIiwgdGhpcy5fdWlkKTtcclxuXHJcbiAgICAgICAgdGhpcy5lbWl0KCdkZXN0cm95JywgdGhpcyk7XHJcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFiaWxpemVyIClcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3N0YWJpbGl6ZXIpO1xyXG4gICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMuZGVhZCAgICAgICAgICAgICAgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX3JldnMgICAgICAgICAgICAgPSB0aGlzLmRhdGFzID0gdGhpcy5zdGF0ZSA9IHRoaXMuY29udGV4dCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TdG9yZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=