webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Signup = __webpack_require__(5);

	var _Signup2 = _interopRequireDefault(_Signup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var signup = {
	  template: _Signup2.default.template,
	  data: function data() {
	    return {
	      username: ''
	    };
	  },
	  methods: {
	    signup: function signup($http) {
	      var _this = this;

	      var body = {
	        username: this.userName
	      };
	      console.log(body);
	      this.$http.post('/api/user', body).then(function (response) {
	        console.log('here?');
	        console.log(_this.router);
	        _this.$route.router.go('/login');
	      }, function (response) {
	        console.log('Error');
	      });
	    }
	  }
	};

	exports.default = signup;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(6)
	__vue_template__ = __webpack_require__(7)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/ericlau/Desktop/Do-We/online-speed-dating/App/Client/Views/Signup.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<div class='sign-up'>
	// 		<form >
	// 		<label>Sign Up</label>
	// 			<input v-model='userName' placeholder='Usename'/>
	// 			<button v-on:click.prevent='signup'>Submit</button>
	// 		</form>
	// 	</div>
	// </template>
	//
	// <script>
	exports.default = {
		data: function data() {
			return {
				userName: ""
			};
		},

		methods: {
			signup: function signup() {
				var _this = this;

				var body = {
					username: this.userName
				};
				console.log(body);
				this.$http.post('/api/users', body).then(function (response) {
					_this.$route.router.go('/signin');
				}, function (response) {
					console.log('Error');
					router.push('signup');
				});
			}
		}
	};
	// </script>

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "\n\t<div class='sign-up'>\n\t\t<form >\n\t\t<label>Sign Up</label>\n\t\t\t<input v-model='userName' placeholder='Usename'/>\n\t\t\t<button v-on:click.prevent='signup'>Submit</button>\n\t\t</form>\n\t</div>\n";

/***/ }
]);