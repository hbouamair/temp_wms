"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_emplacement_emplacement_module_ts"],{

/***/ 9923:
/*!***********************************************************!*\
  !*** ./src/app/emplacement/emplacement-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmplacementPageRoutingModule": () => (/* binding */ EmplacementPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _emplacement_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emplacement.page */ 1097);




const routes = [
    {
        path: '',
        component: _emplacement_page__WEBPACK_IMPORTED_MODULE_0__.EmplacementPage
    }
];
let EmplacementPageRoutingModule = class EmplacementPageRoutingModule {
};
EmplacementPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EmplacementPageRoutingModule);



/***/ }),

/***/ 3418:
/*!***************************************************!*\
  !*** ./src/app/emplacement/emplacement.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmplacementPageModule": () => (/* binding */ EmplacementPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _emplacement_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emplacement-routing.module */ 9923);
/* harmony import */ var _emplacement_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emplacement.page */ 1097);







let EmplacementPageModule = class EmplacementPageModule {
};
EmplacementPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _emplacement_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmplacementPageRoutingModule
        ],
        declarations: [_emplacement_page__WEBPACK_IMPORTED_MODULE_1__.EmplacementPage]
    })
], EmplacementPageModule);



/***/ }),

/***/ 1097:
/*!*************************************************!*\
  !*** ./src/app/emplacement/emplacement.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmplacementPage": () => (/* binding */ EmplacementPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _Users_macbookpro_Desktop_wms_mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_emplacement_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./emplacement.page.html */ 7449);
/* harmony import */ var _emplacement_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emplacement.page.scss */ 5005);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let EmplacementPage = class EmplacementPage {
    constructor() { }
    ngOnInit() {
    }
};
EmplacementPage.ctorParameters = () => [];
EmplacementPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-emplacement',
        template: _Users_macbookpro_Desktop_wms_mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_emplacement_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_emplacement_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EmplacementPage);



/***/ }),

/***/ 7449:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/emplacement/emplacement.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>emplacement</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ 5005:
/*!***************************************************!*\
  !*** ./src/app/emplacement/emplacement.page.scss ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsYWNlbWVudC5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_emplacement_emplacement_module_ts.js.map