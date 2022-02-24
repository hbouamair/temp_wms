"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 3949:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 7464);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 8245:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 7464);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 3949);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 7464:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _Users_macbookpro_Desktop_wms_mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.page.html */ 2056);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 968);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);





let HomePage = class HomePage {
    constructor(route) {
        this.route = route;
    }
    goUsers() {
        this.route.navigate(['/users']);
        console.log("cliquer");
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-home',
        template: _Users_macbookpro_Desktop_wms_mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 2056:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/home/home.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-content>\n    <ion-toolbar class=\"tool\">\n      <ion-buttons slot=\"start\">\n        <ion-button  (click)=\"returnHome()\" class=\"home\">\n          <ion-icon  src=\"../../assets/mdicons/md-home.svg\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-buttons slot=\"end\">\n        <div class=\"icon\">\n        <ion-button><ion-icon src=\"../../assets/mdicons/Settings.svg\"  auto-hide=\"false\"></ion-icon></ion-button>\n      </div>\n      <div class=\"icon\">\n        <ion-button>\n          \n          <ion-icon src=\"../../assets/mdicons/Logout.svg\"  auto-hide=\"false\"></ion-icon></ion-button>\n      </div >\n      </ion-buttons>\n      \n      <ion-title> <ion-icon class=\"pers\" name=\"person\"> </ion-icon>  Tabari Arrafat</ion-title>\n    </ion-toolbar>\n\n    \n\n    <div class=\"menu-header-logo\">\n      \n        <img src=\"../../assets/Logo.png\"/>\n\n    </div>\n    <ion-list class=\"menu-item\" > \n\n      <ion-item  (click)='goUsers()'   class=\"click one\">\n        \n        <ion-icon   src =\"../../assets/mdicons/md-us.svg\"></ion-icon><ion-label class=\"active\"> Gestion des utilisateurs</ion-label>\n      </ion-item>\n      <ion-item  class=\"click\">\n        <ion-icon  src=\"../../assets/mdicons/md-prod.svg\"></ion-icon><ion-label class=\"active\"> Produits</ion-label>\n      </ion-item>\n      <ion-item class=\"click\" >\n        <ion-icon src=\"../../assets/mdicons/md-emp.svg\"></ion-icon> <ion-label class=\"active\"> Emplacement</ion-label> \n      </ion-item>\n      <ion-item class=\"click\">\n        <ion-icon src=\"../../assets/mdicons/md-inv.svg\"> </ion-icon><ion-label class=\"active\">Inventaire</ion-label> \n      </ion-item>\n      <ion-item class=\"click\">\n        <ion-icon src=\"../../assets/mdicons/md-stock.svg\"></ion-icon><ion-label class=\"active\">Etat de stock</ion-label> \n      </ion-item>\n    </ion-list>\n\n  </ion-content>\n  <ion-footer>\n    <ion-toolbar class=\"qr-scan\" >\n     <ion-fab-button> <ion-icon name=\"scan\"></ion-icon></ion-fab-button>\n    <span class=\"qr\">Scanner  Qr Code</span> \n    </ion-toolbar>\n  </ion-footer>\n\n\n\n\n</ion-app>");

/***/ }),

/***/ 968:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = "@font-face {\n  font-family: \"acrom\";\n  src: url('Acrom-Medium.ttf');\n}\nion-content {\n  --background: linear-gradient(#E6E6E8, #F6F5F8 ,#E7E7E9, #F5F5F7 ,#F7F7F9,#E8E9EB ) ;\n}\nion-content .menu-header-logo {\n  width: 40%;\n  padding: 20px;\n}\nion-content .tool {\n  height: 33px;\n  --background:#3D5A68;\n}\nion-content ion-title {\n  font-family: acrom;\n  color: #FFFFFF;\n}\nion-content .icon {\n  border-left-width: 1px;\n  margin-left: 5px;\n  border-left-style: solid;\n  border-left-color: #FFFFFF;\n}\nion-content ion-button {\n  margin-right: 20px;\n  width: 25px !important;\n  height: 25px !important;\n}\nion-content ion-button:after {\n  border-left-width: 7px;\n  border-left-style: solid;\n  border-left-color: orange;\n}\nion-content .home {\n  border: none;\n  width: 28px !important;\n  height: 28px !important;\n  margin-left: 15px;\n}\n.menu-item {\n  position: fixed;\n  height: 83vh;\n  width: 89%;\n  right: 0;\n  left: 0;\n  margin: auto;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n}\n.menu-item ion-icon {\n  margin-right: 20px;\n  color: #3D5A68;\n  width: 44px !important;\n  height: 44px !important;\n}\n.menu-item .one {\n  padding-top: 20px;\n}\n.menu-item ion-item {\n  padding: 10px;\n  cursor: pointer;\n  margin-bottom: 20px;\n}\n.menu-item .active {\n  border-left: 4px solid;\n  color: #3D5A68;\n  padding-left: 25px;\n}\n.menu-item .active ion-icon {\n  color: #3D5A68;\n}\nion-footer {\n  --background: #3D5A68;\n}\nion-footer ion-toolbar {\n  padding-top: 4px;\n  text-align: -webkit-center;\n  --background:#3D5A68;\n}\nion-footer .qr {\n  color: #FFFFFF;\n  width: 10px !important;\n  font-family: acrom;\n  font-size: 10px;\n}\nion-footer ion-fab-button {\n  border-radius: 50%;\n  border: 3px solid #344C57;\n  box-shadow: 0 0 0 3px #668391;\n  --background:linear-gradient(#FFB701,#FF9302);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usb0JBQUE7RUFDQSw0QkFBQTtBQUFGO0FBSUE7RUFDRSxvRkFBQTtBQUZGO0FBSUU7RUFDRSxVQUFBO0VBQ0EsYUFBQTtBQUZKO0FBSUU7RUFFRSxZQUFBO0VBQ0Esb0JBQUE7QUFISjtBQUtFO0VBR0Usa0JBQUE7RUFDQSxjQUFBO0FBTEo7QUFTRTtFQUNFLHNCQUFBO0VBQ0YsZ0JBQUE7RUFDRSx3QkFBQTtFQUNBLDBCQUFBO0FBUEo7QUFVRTtFQUVFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQVRKO0FBWUU7RUFFQyxzQkFBQTtFQUVELHdCQUFBO0VBQ0EseUJBQUE7QUFaRjtBQWVFO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQWJKO0FBc0JBO0VBQ0MsZUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBR0MsUUFBQTtFQUNFLE9BQUE7RUFFRixZQUFBO0VBQ0EsNEJBQUE7RUFDRSw2QkFBQTtBQXRCSjtBQTBCRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUF4Qko7QUEyQkU7RUFDRSxpQkFBQTtBQXpCSjtBQTJCRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBR0EsbUJBQUE7QUEzQko7QUFpQ0U7RUFDRSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQS9CSjtBQWlDSTtFQUNFLGNBQUE7QUEvQk47QUFxQ0E7RUFFRSxxQkFBQTtBQW5DRjtBQW9DRTtFQUNFLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtBQWxDSjtBQXFDRTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQW5DSjtBQXVDRTtFQUVDLGtCQUFBO0VBRUEseUJBQUE7RUFDQyw2QkFBQTtFQUNBLDZDQUFBO0FBdkNKIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdhY3JvbSc7XG4gIHNyYzogdXJsKCcuLi8uLi9hc3NldHMvZm9udHMvQWNyb20tTWVkaXVtLnR0ZicpO1xufVxuXG5cbmlvbi1jb250ZW50e1xuICAtLWJhY2tncm91bmQgOiBsaW5lYXItZ3JhZGllbnQoI0U2RTZFOCwgI0Y2RjVGOCAsI0U3RTdFOSwgI0Y1RjVGNyAsI0Y3RjdGOSwjRThFOUVCICkgIDtcblxuICAubWVudS1oZWFkZXItbG9nb3tcbiAgICB3aWR0aDogNDAlO1xuICAgIHBhZGRpbmc6MjBweDtcbiAgfVxuICAudG9vbHtcbiAgIFxuICAgIGhlaWdodDogMzNweDtcbiAgICAtLWJhY2tncm91bmQ6IzNENUE2ODtcbiAgfVxuICBpb24tdGl0bGV7XG5cbiAgICBcbiAgICBmb250LWZhbWlseTogYWNyb207XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgXG4gIH1cbiBcbiAgLmljb257XG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDFweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICNGRkZGRkY7XG4gIH1cbiAgXG4gIGlvbi1idXR0b257XG4gICBcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6MjVweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xuICAgXG4gIH1cbiAgaW9uLWJ1dHRvbjphZnRlciB7XG4gIFxuICAgYm9yZGVyLWxlZnQtd2lkdGg6IDdweDtcbiAgXG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWxlZnQtY29sb3I6IG9yYW5nZTtcbiAgICBcbiAgfVxuICAuaG9tZXtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgd2lkdGg6MjhweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMjhweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIFxuICAgIFxuICB9XG4gXG4gXG59XG5cblxuLm1lbnUtaXRlbXtcbiBwb3NpdGlvbjogZml4ZWQ7XG4gaGVpZ2h0IDo4M3ZoIDtcbiB3aWR0aDogODklO1xuXG5cbiAgcmlnaHQgOjA7XG4gICAgbGVmdDowO1xuIFxuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG4gIFxuXG5cbiAgaW9uLWljb257XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIGNvbG9yOiAjM0Q1QTY4O1xuICAgIHdpZHRoOiA0NHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG4gICBcbiAgfVxuICAub25lIHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgfVxuICBpb24taXRlbXtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBcblxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgXG4gIH1cblxuICBcbiAgXG4gIC5hY3RpdmV7XG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZDtcbiAgICBjb2xvcjogIzNENUE2ODtcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG5cbiAgICBpb24taWNvbntcbiAgICAgIGNvbG9yOiAjM0Q1QTY4O1xuXG4gICAgfVxuXG4gIH1cbn1cbmlvbi1mb290ZXJ7XG5cbiAgLS1iYWNrZ3JvdW5kIDogIzNENUE2ODtcbiAgaW9uLXRvb2xiYXJ7XG4gICAgcGFkZGluZy10b3A6IDRweDtcbiAgICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgICAtLWJhY2tncm91bmQ6IzNENUE2ODtcbiAgfVxuICBcbiAgLnFye1xuICAgIGNvbG9yOiNGRkZGRkYgO1xuICAgIHdpZHRoOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1mYW1pbHk6IGFjcm9tO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuIFxuXG4gIGlvbi1mYWItYnV0dG9ue1xuXG4gICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgIGJvcmRlcjogM3B4IHNvbGlkICMzNDRDNTc7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgM3B4ICAjNjY4MzkxO1xuICAgIC0tYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoI0ZGQjcwMSwjRkY5MzAyKTtcbiAgfVxufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map