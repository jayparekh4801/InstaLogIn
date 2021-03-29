(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jayparekh/Documents/jay/instagramLogIn/frontend/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'instagramLogIn';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _insta_log_in_insta_log_in_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./insta-log-in/insta-log-in.component */ "x0+Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _insta_log_in_insta_log_in_component__WEBPACK_IMPORTED_MODULE_5__["InstaLogInComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();


/***/ }),

/***/ "hcZj":
/*!***********************************!*\
  !*** ./src/app/log-in.service.ts ***!
  \***********************************/
/*! exports provided: LogInService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInService", function() { return LogInService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class LogInService {
    constructor(http) {
        this.http = http;
    }
    logInData(data) {
        return this.http.post("signIn", data);
    }
}
LogInService.ɵfac = function LogInService_Factory(t) { return new (t || LogInService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
LogInService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LogInService, factory: LogInService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _insta_log_in_insta_log_in_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insta-log-in/insta-log-in.component */ "x0+Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: "", component: _insta_log_in_insta_log_in_component__WEBPACK_IMPORTED_MODULE_1__["InstaLogInComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "x0+Q":
/*!********************************************************!*\
  !*** ./src/app/insta-log-in/insta-log-in.component.ts ***!
  \********************************************************/
/*! exports provided: InstaLogInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstaLogInComponent", function() { return InstaLogInComponent; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _log_in_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../log-in.service */ "hcZj");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class InstaLogInComponent {
    constructor(logInService) {
        this.logInService = logInService;
        this.logInData = {
            userName: "",
            password: ""
        };
    }
    ngOnInit() {
    }
    onSubmit() {
        this.logInService.logInData(this.logInData).subscribe((data) => {
            if (data.success) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire("Procreate", data.message, 'success');
            }
        });
    }
}
InstaLogInComponent.ɵfac = function InstaLogInComponent_Factory(t) { return new (t || InstaLogInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_log_in_service__WEBPACK_IMPORTED_MODULE_2__["LogInService"])); };
InstaLogInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: InstaLogInComponent, selectors: [["app-insta-log-in"]], decls: 58, vars: 2, consts: [["id", "wrapper"], [1, "container"], [1, "phone-app-demo"], [1, "form-data"], [1, "logo"], ["type", "text", "placeholder", "Phone number, username, or email", "name", "userName", 3, "ngModel", "ngModelChange"], ["type", "password", "placeholder", "Password", "name", "password", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "form-btn", 3, "click"], [1, "has-separator"], ["href", "#", 1, "facebook-login"], [1, "fab", "fa-facebook"], ["href", "#", 1, "password-reset"], [1, "sign-up"], ["href", "#"], [1, "get-the-app"], ["src", "../../assets/procreate-icon-search-display.png", "alt", "", 2, "height", "40px", "width", "40px"], [1, "badge"], ["src", "../../assets/procreate-icon-search-display.png", "alt", "android App", 2, "height", "70px", "width", "70px"], ["src", "https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png", "alt", "ios app"], [1, "footer-nav"], [1, "copyright-notice"]], template: function InstaLogInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Instagram.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function InstaLogInComponent_Template_input_ngModelChange_9_listener($event) { return ctx.logInData.userName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function InstaLogInComponent_Template_input_ngModelChange_10_listener($event) { return ctx.logInData.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InstaLogInComponent_Template_button_click_11_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Or");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Log in with Facebook ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Forgot password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Don't an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " By Procreate And Company ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "nav", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Jobs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Privacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Terms");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Profiles");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Languages");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, " \u00A9 2021 Complaints ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.logInData.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.logInData.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["@import url('https://fonts.googleapis.com/css?family=Pacifico&display=swap');\n\n\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after{\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\nhtml[_ngcontent-%COMP%]\n{\n  font-size: 10px;\n  box-sizing: border-box;\n}\n\nimg[_ngcontent-%COMP%]\n{\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n}\n\na[_ngcontent-%COMP%]\n{\n  text-decoration: none;\n}\n\nh1[_ngcontent-%COMP%]\n{\n  font-family: 'Pacifico', cursive;\n  font-size: 40px;\n}\n\nbody[_ngcontent-%COMP%]\n{\n  background-color: #fafafa;\n}\n\n#wrapper[_ngcontent-%COMP%]\n{\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding-top: 2rem;\n}\n.container[_ngcontent-%COMP%]\n{\n  width: 100%;\n  max-width: 93.5rem;\n  margin: 3rem auto 0;\n}\n#wrapper[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%]\n{\n  display: flex;\n  padding: 0 8rem;\n}\n\n.phone-app-demo[_ngcontent-%COMP%]\n{\n  height: 61.8rem;\n  background: url('https://uditsolutions.in/babamachine/wp-content/uploads/2019/08/phone.png') center no-repeat;\n  flex: 1;\n}\n\n.form-data[_ngcontent-%COMP%]\n{\n  width: 100%;\n  max-width: 35rem;\n  margin-top: 3rem;\n}\n.form-data[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]\n{\n  background-color: #fff;\n  border: 2px solid #eee;\n  display: flex;\n  flex-direction: column;\n  padding: 2rem 4rem;\n  text-align: center;\n}\n\n.logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]\n{\n  \n  margin-bottom: 2.5rem;\n}\n\n.form-data[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]\n{\n  padding: .8rem;\n  margin-bottom: .5rem;\n  border: 2px solid #eee;\n  border-radius: .4rem;\n}\n.form-btn[_ngcontent-%COMP%]\n{\n  margin: 1rem 0 1.5rem;\n  height: 3rem;\n  background-color: #3897f0;\n  font-size: 1.4rem;\n  color: #fff;\n  font-weight: bold;\n  border: none;\n  border-radius: .4rem;\n  cursor: pointer;\n}\n\n.has-separator[_ngcontent-%COMP%]\n{\n  font-size: 1.3rem;\n  color: #999999;\n  text-transform: uppercase;\n  position: relative;\n  margin-bottom: 2.5rem;\n}\n.has-separator[_ngcontent-%COMP%]::before, .has-separator[_ngcontent-%COMP%]::after{\n  content: '';\n  position: absolute;\n  background-color: #eee;\n  width: 40%;\n  height: 1.5px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.has-separator[_ngcontent-%COMP%]::before\n{\n  left: 0;\n}\n.has-separator[_ngcontent-%COMP%]::after\n{\n  right: 0;\n}\n\n.facebook-login[_ngcontent-%COMP%]\n{\n  font-size: 1.4rem;\n  font-weight: bold;\n  color: #385185;\n  margin-bottom: 2.5rem;\n}\n.facebook-login[_ngcontent-%COMP%]\n{\n  font-size: 1.4rem;\n  font-weight: bold;\n  color: #385185;\n  margin-bottom: 2.5rem;\n}\n.facebook-login[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]\n{\n  font-size: 2rem;\n  margin-right: .7rem;\n}\n\n.password-reset[_ngcontent-%COMP%]\n{\n  font-size: 1.2rem;\n  color: #003569;\n}\n\n.sign-up[_ngcontent-%COMP%]\n{\n  text-align: center;\n  font-size: 1.4rem;\n  color: #262626;\n  padding: 2rem 0;\n  background-color: #fff;\n  border: 2px solid #eee;\n  margin: 1rem 0;\n}\n.sign-up[_ngcontent-%COMP%]\n{\n  text-align: center;\n  font-size: 1.4rem;\n  color: #262626;\n  padding: 2rem 0;\n  background-color: #fff;\n  border: 2px solid #eee;\n  margin: 1rem 0;\n}\n.sign-up[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]\n{\n  color: #3897f0;\n  font-weight: bold;\n}\n\n.get-the-app[_ngcontent-%COMP%]\n{\n  font-size: 1.4rem;\n  text-align: center;\n}\n.get-the-app[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]\n{\n  display: block;\n  margin: 2rem 0;\n  color: #262626;\n}\n.badge[_ngcontent-%COMP%]\n{\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n.badge[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]\n{\n  max-width: 14rem;\n  cursor: pointer;\n}\n.badge[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child\n{\n  margin-right: 1rem;\n}\n\nfooter[_ngcontent-%COMP%]\n{\n  padding: 5rem 0;\n}\nfooter[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]\n{\n  display: flex;\n  justify-content: space-between;\n  font-weight: bold;\n  text-transform: uppercase;\n  font-size: 1.3rem;\n  flex-wrap: wrap;\n  margin-top: 0;\n}\n.footer-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]\n{\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n}\n.footer-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]\n{\n  margin-right: 1.6rem;\n}\n.footer-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]\n{\n  color: #003569;\n}\n.copyright-notice[_ngcontent-%COMP%]\n{\n  color: #999999;\n}\n\n@media (max-width: 900px)\n{\n  .phone-app-demo[_ngcontent-%COMP%]{\n    display: none;\n  }\n\n  .form-data[_ngcontent-%COMP%]\n  {\n    margin: 0 auto;\n  }\n\n  #wrapper[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%]\n  {\n    padding: 0;\n  }\n\n  footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]\n  {\n    padding: 0 2rem;\n    justify-content: center;\n  }\n\n  .footer-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]\n  {\n    justify-content: center;\n  }\n\n  .footer-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]\n  {\n    margin-bottom: 1rem;\n  }\n}\n@media (max-width: 450px)\n{\n  #wrapper[_ngcontent-%COMP%]\n  {\n    padding-top: 0;\n  }\n  .form-data[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]\n  {\n    background-color: transparent;\n    border: none;\n    padding: 0 2rem;\n  }\n  .sign-up[_ngcontent-%COMP%]\n  {\n    background-color: transparent;\n    border: none;\n    margin: 4rem 0;\n  }\n  footer[_ngcontent-%COMP%]\n  {\n    padding-bottom: 2rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RhLWxvZy1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSw0RUFBNEU7QUFENUUsd0JBQXdCO0FBR3hCLHFCQUFxQjtBQUNyQjs7O0VBR0UsU0FBUztFQUNULFVBQVU7RUFDVixtQkFBbUI7QUFDckI7QUFFQTs7RUFFRSxlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCO0FBRUEsbUJBQW1CO0FBQ25COztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUVBLGVBQWU7QUFDZjs7RUFFRSxxQkFBcUI7QUFDdkI7QUFFQSxlQUFlO0FBQ2Y7O0VBRUUsZ0NBQWdDO0VBQ2hDLGVBQWU7QUFDakI7QUFFQSx3QkFBd0I7QUFDeEI7O0VBRUUseUJBQXlCO0FBQzNCO0FBRUEsc0NBQXNDO0FBQ3RDOztFQUVFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsaUJBQWlCO0FBQ25CO0FBRUE7O0VBRUUsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjtBQUVBLG1CQUFtQjtBQUNuQjs7RUFFRSxlQUFlO0VBQ2YsNkdBQTZHO0VBQzdHLE9BQU87QUFDVDtBQUVBLGVBQWU7QUFDZjs7RUFFRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUVBOztFQUVFLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCO0FBRUEscUJBQXFCO0FBQ3JCOztFQUVFLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7QUFFQSxxQkFBcUI7QUFDckI7O0VBRUUsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsb0JBQW9CO0FBQ3RCO0FBRUE7O0VBRUUscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCO0FBRUEsa0JBQWtCO0FBQ2xCOztFQUVFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsYUFBYTtFQUNiLFFBQVE7RUFDUiwyQkFBMkI7QUFDN0I7QUFFQTs7RUFFRSxPQUFPO0FBQ1Q7QUFFQTs7RUFFRSxRQUFRO0FBQ1Y7QUFFQSw4QkFBOEI7QUFDOUI7O0VBRUUsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCO0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCO0FBRUE7O0VBRUUsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjtBQUVBLHlCQUF5QjtBQUN6Qjs7RUFFRSxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjtBQUVBLHNCQUFzQjtBQUN0Qjs7RUFFRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCO0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjtBQUVBOztFQUVFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7QUFFQSx3Q0FBd0M7QUFDeEM7O0VBRUUsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUVBOztFQUVFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsY0FBYztBQUNoQjtBQUVBOztFQUVFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCO0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7QUFFQTs7RUFFRSxrQkFBa0I7QUFDcEI7QUFFQSxzQkFBc0I7QUFDdEI7O0VBRUUsZUFBZTtBQUNqQjtBQUVBOztFQUVFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGFBQWE7QUFDZjtBQUVBOztFQUVFLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBRUE7O0VBRUUsb0JBQW9CO0FBQ3RCO0FBRUE7O0VBRUUsY0FBYztBQUNoQjtBQUVBOztFQUVFLGNBQWM7QUFDaEI7QUFFQSxxQkFBcUI7QUFDckI7O0VBRUU7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7O0lBRUUsY0FBYztFQUNoQjs7RUFFQTs7SUFFRSxVQUFVO0VBQ1o7O0VBRUE7O0lBRUUsZUFBZTtJQUNmLHVCQUF1QjtFQUN6Qjs7RUFFQTs7SUFFRSx1QkFBdUI7RUFDekI7O0VBRUE7O0lBRUUsbUJBQW1CO0VBQ3JCO0FBQ0Y7QUFFQTs7RUFFRTs7SUFFRSxjQUFjO0VBQ2hCO0VBQ0E7O0lBRUUsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixlQUFlO0VBQ2pCO0VBQ0E7O0lBRUUsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixjQUFjO0VBQ2hCO0VBQ0E7O0lBRUUsb0JBQW9CO0VBQ3RCO0FBQ0YiLCJmaWxlIjoiaW5zdGEtbG9nLWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKmltcG9ydGluZyBHb29nbGUgZm9udCovXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBhY2lmaWNvJmRpc3BsYXk9c3dhcCcpO1xuXG4vKkh0bWwgcmFrdXAgc3R5bGluZyovXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXJ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogaW5oZXJpdDtcbn1cblxuaHRtbFxue1xuICBmb250LXNpemU6IDEwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qU21hcnRwaG9uZSBpbWFnZSovXG5pbWdcbntcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4vKmxpbmsgc3R5bGluZyovXG5hXG57XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLypMb2dvIHN0eWxpbmcqL1xuaDFcbntcbiAgZm9udC1mYW1pbHk6ICdQYWNpZmljbycsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuLypib2R5IGJhY2tncm91bmQgY29sb3IqL1xuYm9keVxue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xufVxuXG4vKldyYXBwZXIgaXMgbGlrZSBhIGNvbnRhaW5lciBvZiBib2R5Ki9cbiN3cmFwcGVyXG57XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctdG9wOiAycmVtO1xufVxuXG4uY29udGFpbmVyXG57XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDkzLjVyZW07XG4gIG1hcmdpbjogM3JlbSBhdXRvIDA7XG59XG5cbiN3cmFwcGVyID4gLmNvbnRhaW5lclxue1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwIDhyZW07XG59XG5cbi8qc21hcnRwaG9uZSBpbWFnZSovXG4ucGhvbmUtYXBwLWRlbW9cbntcbiAgaGVpZ2h0OiA2MS44cmVtO1xuICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vdWRpdHNvbHV0aW9ucy5pbi9iYWJhbWFjaGluZS93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9waG9uZS5wbmcnKSBjZW50ZXIgbm8tcmVwZWF0O1xuICBmbGV4OiAxO1xufVxuXG4vKmZvcm0gc3R5bGluZyovXG4uZm9ybS1kYXRhXG57XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDM1cmVtO1xuICBtYXJnaW4tdG9wOiAzcmVtO1xufVxuXG4uZm9ybS1kYXRhIGZvcm1cbntcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAycHggc29saWQgI2VlZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMnJlbSA0cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qbG9nbyBhZ2FpbiBzdHlsaW5nKi9cbi5sb2dvIGgxXG57XG4gIC8qd2lkdGg6IDE3LjVyZW07Ki9cbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xufVxuXG4vKmZvcm0gaW5wdXQgc3R5bGluZyovXG4uZm9ybS1kYXRhIGZvcm0gaW5wdXRcbntcbiAgcGFkZGluZzogLjhyZW07XG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZWVlO1xuICBib3JkZXItcmFkaXVzOiAuNHJlbTtcbn1cblxuLmZvcm0tYnRuXG57XG4gIG1hcmdpbjogMXJlbSAwIDEuNXJlbTtcbiAgaGVpZ2h0OiAzcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg5N2YwO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IC40cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qT1IgZm9udCBzdHlsaW5nKi9cbi5oYXMtc2VwYXJhdG9yXG57XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBjb2xvcjogIzk5OTk5OTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG59XG5cbi5oYXMtc2VwYXJhdG9yOjpiZWZvcmUsXG4uaGFzLXNlcGFyYXRvcjo6YWZ0ZXJ7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIHdpZHRoOiA0MCU7XG4gIGhlaWdodDogMS41cHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi5oYXMtc2VwYXJhdG9yOjpiZWZvcmVcbntcbiAgbGVmdDogMDtcbn1cblxuLmhhcy1zZXBhcmF0b3I6OmFmdGVyXG57XG4gIHJpZ2h0OiAwO1xufVxuXG4vKkZBQ0VCT09LIGxpZ2luIHRleHQgc3R5bGluZyovXG4uZmFjZWJvb2stbG9naW5cbntcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzM4NTE4NTtcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xufVxuXG4uZmFjZWJvb2stbG9naW5cbntcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzM4NTE4NTtcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xufVxuXG4uZmFjZWJvb2stbG9naW4gaVxue1xuICBmb250LXNpemU6IDJyZW07XG4gIG1hcmdpbi1yaWdodDogLjdyZW07XG59XG5cbi8qcGFzc3dvcmQgcmVzZXQgc3R5bGluZyovXG4ucGFzc3dvcmQtcmVzZXRcbntcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiAjMDAzNTY5O1xufVxuXG4vKnNpZ251cCB0ZXh0IHN0eWxpbmcqL1xuLnNpZ24tdXBcbntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgY29sb3I6ICMyNjI2MjY7XG4gIHBhZGRpbmc6IDJyZW0gMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAycHggc29saWQgI2VlZTtcbiAgbWFyZ2luOiAxcmVtIDA7XG59XG5cbi5zaWduLXVwXG57XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGNvbG9yOiAjMjYyNjI2O1xuICBwYWRkaW5nOiAycmVtIDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlZWU7XG4gIG1hcmdpbjogMXJlbSAwO1xufVxuXG4uc2lnbi11cCBhXG57XG4gIGNvbG9yOiAjMzg5N2YwO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLypQbGF5IHN0b3IgYW5kIEFwcCBzdG9yZSBpbWFnZSBzdHlsaW5nKi9cbi5nZXQtdGhlLWFwcFxue1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZ2V0LXRoZS1hcHAgc3Bhblxue1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAycmVtIDA7XG4gIGNvbG9yOiAjMjYyNjI2O1xufVxuXG4uYmFkZ2VcbntcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYmFkZ2UgaW1nXG57XG4gIG1heC13aWR0aDogMTRyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJhZGdlIGltZzpmaXJzdC1jaGlsZFxue1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG5cbi8qRm9vdGVyIGxpbmsgc3R5bGluZyovXG5mb290ZXJcbntcbiAgcGFkZGluZzogNXJlbSAwO1xufVxuXG5mb290ZXIgLmNvbnRhaW5lclxue1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uZm9vdGVyLW5hdiB1bFxue1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5mb290ZXItbmF2IHVsIGxpXG57XG4gIG1hcmdpbi1yaWdodDogMS42cmVtO1xufVxuXG4uZm9vdGVyLW5hdiB1bCBsaSBhXG57XG4gIGNvbG9yOiAjMDAzNTY5O1xufVxuXG4uY29weXJpZ2h0LW5vdGljZVxue1xuICBjb2xvcjogIzk5OTk5OTtcbn1cblxuLypyZXNwb25zaXZlIHN0eWxpbmcqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KVxue1xuICAucGhvbmUtYXBwLWRlbW97XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5mb3JtLWRhdGFcbiAge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG5cbiAgI3dyYXBwZXIgPiAuY29udGFpbmVyXG4gIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgZm9vdGVyIC5jb250YWluZXJcbiAge1xuICAgIHBhZGRpbmc6IDAgMnJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5mb290ZXItbmF2IHVsXG4gIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5mb290ZXItbmF2IHVsIGxpXG4gIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweClcbntcbiAgI3dyYXBwZXJcbiAge1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICB9XG4gIC5mb3JtLWRhdGEgZm9ybVxuICB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDAgMnJlbTtcbiAgfVxuICAuc2lnbi11cFxuICB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbjogNHJlbSAwO1xuICB9XG4gIGZvb3RlclxuICB7XG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gIH1cbn0iXX0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map