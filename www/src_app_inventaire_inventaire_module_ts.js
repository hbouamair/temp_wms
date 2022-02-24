"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_inventaire_inventaire_module_ts"],{

/***/ 5590:
/*!*********************************************************!*\
  !*** ./src/app/inventaire/inventaire-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventairePageRoutingModule": () => (/* binding */ InventairePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _inventaire_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inventaire.page */ 1907);




const routes = [
    {
        path: '',
        component: _inventaire_page__WEBPACK_IMPORTED_MODULE_0__.InventairePage
    }
];
let InventairePageRoutingModule = class InventairePageRoutingModule {
};
InventairePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InventairePageRoutingModule);



/***/ }),

/***/ 7703:
/*!*************************************************!*\
  !*** ./src/app/inventaire/inventaire.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventairePageModule": () => (/* binding */ InventairePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _inventaire_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inventaire-routing.module */ 5590);
/* harmony import */ var _inventaire_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inventaire.page */ 1907);







let InventairePageModule = class InventairePageModule {
};
InventairePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _inventaire_routing_module__WEBPACK_IMPORTED_MODULE_0__.InventairePageRoutingModule
        ],
        declarations: [_inventaire_page__WEBPACK_IMPORTED_MODULE_1__.InventairePage]
    })
], InventairePageModule);



/***/ }),

/***/ 1907:
/*!***********************************************!*\
  !*** ./src/app/inventaire/inventaire.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventairePage": () => (/* binding */ InventairePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _Users_macbookpro_Desktop_wms_mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_inventaire_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./inventaire.page.html */ 7672);
/* harmony import */ var _inventaire_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inventaire.page.scss */ 2692);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let InventairePage = class InventairePage {
    constructor() { }
    ngOnInit() {
    }
};
InventairePage.ctorParameters = () => [];
InventairePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-inventaire',
        template: _Users_macbookpro_Desktop_wms_mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_inventaire_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_inventaire_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], InventairePage);



/***/ }),

/***/ 7672:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/inventaire/inventaire.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>inventaire</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ 2692:
/*!*************************************************!*\
  !*** ./src/app/inventaire/inventaire.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZlbnRhaXJlLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_inventaire_inventaire_module_ts.js.map