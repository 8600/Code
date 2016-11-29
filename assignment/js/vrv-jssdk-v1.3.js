var vrv = vrv || {};
vrv.android = {};
vrv.jssdk = {};
vrv.util = {};
vrv._init = {};
vrv._ready = {};
vrv.android = {
	callback : function (f, c, a) {
		try {
			if (vrv._init.debug) {
				alert(f + ":" + a)
			}
			var b = vrv.util.getSuccess(c);
			if (typeof b == "function") {
				b.call(this, JSON.parse(a))
			}
		} catch (d) {
			alert(d.message)
		}
	},
	takePhoto : function (a) {
		android.takePhoto(vrv.util.pre(a))
	},
	getUnreadMessage : function (a) {
		android.getUnreadMessage(vrv.util.pre(a))
	},
	getAccountInfo : function (a) {
		android.getUserInfo(vrv.util.pre(a))
	},
	sendMessage : function (a) {
		android.sendMessage(vrv.util.pre(a))
	},
	portraitUrl : function (a) {
		android.portraitUrl(vrv.util.pre(a))
	},
	getUserName : function (a) {
		android.getUserName(vrv.util.pre(a))
	},
	getContactList : function (a) {
		android.getContacts(vrv.util.pre(a))
	},
	getLocalFiles : function (a) {
		a = vrv.util.addSize(a);
		android.getLocalFiles(vrv.util.pre(a))
	},
	getGroupList : function (a) {
		android.getGroupsInfo(vrv.util.pre(a))
	},
	getLocalPhotos : function (a) {
		a = vrv.util.addSize(a);
		android.getLocalPhotos(vrv.util.pre(a))
	},
	getPosition : function (a) {
		android.getPosition(vrv.util.pre(a))
	},
	showNavigationBar : function (a) {
		android.showNavigationBar(vrv.util.pre(a))
	},
	getInfoWithSweep : function (a) {
		android.getInfoWithSweep(vrv.util.pre(a))
	},
	getOrganization : function (a) {
		android.getOrganization(vrv.util.pre(a))
	},
	closeView : function (a) {
		android.closeView(vrv.util.pre(a))
	},
	overheadTask : function (a) {
		android.overheadTask(vrv.util.pre(a))
	},
	cancelTask : function (a) {
		android.cancelTask(vrv.util.pre(a))
	},
	readTaskMsg : function (a) {
		android.readTaskMsg(vrv.util.pre(a))
	},
	getLanguage : function (a) {
		android.getLanguage(vrv.util.pre(a))
	},
	getVersionMark : function (a) {
		android.getVersionMark(vrv.util.pre(a))
	},
	getReceiveTask : function (a) {
		android.getReceiveTask(vrv.util.pre(a))
	},
	getAppointedTask : function (a) {
		android.getAppointedTask(vrv.util.pre(a))
	},
	getHistoryTasks : function (a) {
		android.getHistoryTasks(vrv.util.pre(a))
	},
	updateTask : function (a) {
		android.updateTask(vrv.util.pre(a))
	},
	getCompletedTask : function (a) {
		android.getCompletedTask(vrv.util.pre(a))
	},
	getUserProfile: function (a) {
		android.getUserProfile(vrv.util.pre(a));
	}

};
vrv.ios = {
	callback : function (d, c, a) {
		if (vrv._init.debug) {
			alert(d + ":" + a)
		}
		var b = vrv.util.getSuccess(c);
		if (typeof b == "function") {
			b.call(this, JSON.parse(a))
		}
	},
	takePhoto : function (a) {
		vrv.util.callIOS("takePhoto", a)
	},
	getUnreadMessage : function (a) {
		vrv.util.callIOS("getUnreadMessage", a)
	},
	getAccountInfo : function (a) {
		vrv.util.callIOS("getUserInfo", a)
	},
	sendMessage : function (a) {
		vrv.util.callIOS("sendMessage", a)
	},
	portraitUrl : function (a) {
		vrv.util.callIOS("portraitUrl", a)
	},
	getUserName : function (a) {
		vrv.util.callIOS("getUserName", a)
	},
	getContactList : function (a) {
		vrv.util.callIOS("getContacts", a)
	},
	getLocalFiles : function (a) {
		a = vrv.util.addSize(a);
		vrv.util.callIOS("getLocalFiles", a)
	},
	getGroupList : function (a) {
		vrv.util.callIOS("getGroupsInfo", a)
	},
	getLocalPhotos : function (a) {
		a = vrv.util.addSize(a);
		vrv.util.callIOS("getLocalPhotos", a)
	},
	getPosition : function (a) {
		vrv.util.callIOS("getPosition", a)
	},
	showNavigationBar : function (a) {
		vrv.util.callIOS("showNavigationBar", a)
	},
	getInfoWithSweep : function (a) {
		vrv.util.callIOS("getInfoWithSweep", a)
	},
	getOrganization : function (a) {
		vrv.util.callIOS("getOrganization", a)
	},
	closeView : function (a) {
		vrv.util.callIOS("closeView", a)
	},
	overheadTask : function (a) {
		vrv.util.callIOS("overheadTask", a)
	},
	cancelTask : function (a) {
		vrv.util.callIOS("cancelTask", a)
	},
	readTaskMsg : function (a) {
		vrv.util.callIOS("readTaskMsg", a)
	},
	getLanguage : function (a) {
		vrv.util.callIOS("getLanguage", a)
	},
	getVersionMark : function (a) {
		vrv.util.callIOS("getVersionMark", a)
	},
	getReceiveTask : function (a) {
		vrv.util.callIOS("getReceiveTask", a)
	},
	getAppointedTask : function (a) {
		vrv.util.callIOS("getAppointedTask", a)
	},
	getHistoryTasks : function (a) {
		vrv.util.callIOS("getHistoryTasks", a)
	},
	updateTask : function (a) {
		vrv.util.callIOS("updateTask", a)
	},
	getCompletedTask : function (a) {
		vrv.util.callIOS("getCompletedTask", a)
	},
	getUserProfile : function (a) {
		vrv.util.callIOS("getUserProfile", a)
	}
};
vrv.util.addSize = function (a) {
	return vrv.util.setDefault(a, [{
				type : "number",
				key : "size",
				val : 10,
				min : 1,
				max : 15
			}
		])
};
vrv.util._success = {};
vrv.util.putSuccess = function (b, a) {
	if (a && typeof a == "function") {
		vrv.util._success[b] = a
	}
};
vrv.util.getSuccess = function (b) {
	var a = vrv.util._success[b];
	delete vrv.util._success[b];
	return a
};
vrv.util.formatParams = function (b) {
	if (!b) {
		b = {}
	}
	if (b.constructor !== Object) {
		b = {}
	}
	b.uuid = vrv.util.uuid();
	var a = {
		p : JSON.stringify(b),
		uuid : b.uuid
	};
	return a
};
vrv.util.setDefault = function (c, b) {
	if (!c) {
		c = {}
	}
	if (c.constructor !== Object) {
		c = {}
	}
	for (var a in b) {
		var e = b[a];
		if (typeof c[e.key] != e.type) {
			c[e.key] = e.val
		}
		if (c[e.key] > e.max || c[e.key] < e.min) {
			c[e.key] = e.val
		}
	}
	return c
};
vrv.util.pre = function (a) {
	var b = vrv.util.formatParams(a);
	if (a) {
		vrv.util.putSuccess(b.uuid, a.success)
	}
	return b.p
};
vrv.util.callIOS = function (e, c) {
	var d = vrv.util.formatParams(c);
	var b = c.success;
	var a = function (f) {
		if (vrv._init.debug) {
			alert(e + ":" + JSON.stringify(f))
		}
		b(f)
	};
	delete c.success;
	if(navigator.userAgent.toLowerCase().indexOf("imlinkdood") != -1){

		 window.WebViewJavascriptBridge.callHandler(e, c, a);
	}else{
		vrv.ios.bridge.callHandler(e, c, a)
	}


};
vrv.util.uuid = function () {
	var d = [];
	var a = "0123456789abcdef";
	for (var b = 0; b < 36; b++) {
		d[b] = a.substr(Math.floor(Math.random() * 16), 1)
	}
	d[14] = "4";
	d[19] = a.substr((d[19] & 3) | 8, 1);
	d[8] = d[13] = d[18] = d[23] = "-";
	var c = d.join("");
	return c
};
vrv.init = function (a) {
	var c = navigator.userAgent.toLowerCase();
	if (c.indexOf("android") != -1) {
		vrv.jssdk = vrv.android;
		if (typeof vrv._ready.fn == "function") {
			vrv._ready.fn.call(this)
		} else {
			vrv._ready.r = true
		}
	} else {
		if (c.indexOf("iphone") != -1) {
			function b(d) {
				if (window.WebViewJavascriptBridge) {
					d(WebViewJavascriptBridge)
				} else {
					document.addEventListener("WebViewJavascriptBridgeReady", function () {
						d(WebViewJavascriptBridge)
					}, false)
				}
			}
			b(function (d) {
				d.init(function (f, e) {
					var g = {
						"Javascript Responds" : "Wee!"
					};
					e(g)
				});
				vrv.ios.bridge = d;
				if (typeof vrv._ready.fn == "function") {
					vrv._ready.fn.call(this)
				} else {
					vrv._ready.r = true
				}
			});
		} else if (c.indexOf("imlinkdood") != -1) {
			function connectWebViewJavascriptBridge(callback) {
				if (window.WebViewJavascriptBridge) {
					return callback(WebViewJavascriptBridge);
				}
				if (window.WVJBCallbacks) {
					return window.WVJBCallbacks.push(callback);
				}
				window.WVJBCallbacks = [callback];
				var WVJBIframe = document.createElement('iframe');
				WVJBIframe.style.display = 'none';
				WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
				document.documentElement.appendChild(WVJBIframe);
				setTimeout(function () {
					document.documentElement.removeChild(WVJBIframe)
				}, 0)
			}

			connectWebViewJavascriptBridge(function (bridge) { //
				bridge.init(function (message, responseCallback) {
					var data = {
						'Javascript Responds' : 'Wee!'
					}
					responseCallback(data)
				});
				vrv.ios.bridge = bridge;
				if (typeof vrv._ready.fn == 'function') {
					vrv._ready.fn.call(this);
				} else {
					vrv._ready.r = true;
				}
			});

		}

		vrv.jssdk = vrv.ios

	}
	if (a && a.constructor == Object) {
		vrv._init = a
	}
};
vrv.ready = function (a) {
	if (typeof a == "function") {
		if (vrv._ready.r) {
			a.call(this)
		} else {
			vrv._ready.fn = a
		}
	}
};