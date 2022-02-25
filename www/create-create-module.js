(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-create-module"],{

/***/ "4TXq":
/*!*****************************************!*\
  !*** ./src/app/create/create.module.ts ***!
  \*****************************************/
/*! exports provided: CreatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePageModule", function() { return CreatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _create_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-routing.module */ "mpgD");
/* harmony import */ var _create_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create.page */ "xrCV");







let CreatePageModule = class CreatePageModule {
};
CreatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _create_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreatePageRoutingModule"]
        ],
        declarations: [_create_page__WEBPACK_IMPORTED_MODULE_6__["CreatePage"]]
    })
], CreatePageModule);



/***/ }),

/***/ "4vh3":
/*!*****************************************!*\
  !*** ./src/app/create/create.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "Ccx/":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create/create.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Products</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- Create -->\n  <ion-item>\n    <ion-label position=\"floating\">material</ion-label>\n    <ion-input  [(ngModel)]=\"material\"></ion-input>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label position=\"floating\">Description</ion-label>\n    <ion-input [(ngModel)]=\"description\"></ion-input>\n  </ion-item>\n    \n  <ion-item>\n    <ion-label position=\"floating\">cagette</ion-label>\n    <ion-input [(ngModel)]=\"cagette\"></ion-input>\n  </ion-item>\n\n  <ion-button color=\"success\" expand=\"block\" (click)=\"createUser()\">\n    Add User\n  </ion-button>\n\n  \n  <!-- Read -->\n  <ion-item *ngFor=\"let user of crud.USERS\">\n    <ion-label>\n      <h2><strong>{{ user.material }}</strong></h2>\n      <p>{{ user.description }}</p>\n      <p>{{ user.cagette }}</p>\n    </ion-label>\n\n    <div class=\"item-note\" item-end>\n      <ion-icon color=\"primary\" name=\"create\" style=\"zoom:1.3\" [routerLink]=\"['/edit/', user.product_id]\"></ion-icon>\n      \n      <ion-icon color=\"danger\" name=\"trash\" style=\"zoom:1.3\" (click)=\"remove(user.product_id)\"></ion-icon>\n    </div>\n  </ion-item>\n  \n</ion-content>\n");

/***/ }),

/***/ "mpgD":
/*!*************************************************!*\
  !*** ./src/app/create/create-routing.module.ts ***!
  \*************************************************/
/*! exports provided: CreatePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePageRoutingModule", function() { return CreatePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _create_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create.page */ "xrCV");




const routes = [
    {
        path: '',
        component: _create_page__WEBPACK_IMPORTED_MODULE_3__["CreatePage"]
    }
];
let CreatePageRoutingModule = class CreatePageRoutingModule {
};
CreatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CreatePageRoutingModule);



/***/ }),

/***/ "xrCV":
/*!***************************************!*\
  !*** ./src/app/create/create.page.ts ***!
  \***************************************/
/*! exports provided: CreatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePage", function() { return CreatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_create_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./create.page.html */ "Ccx/");
/* harmony import */ var _create_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create.page.scss */ "4vh3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../crud.service */ "1vsn");





let CreatePage = class CreatePage {
    constructor(crud) {
        this.crud = crud;
        this.material = "";
        this.description = "";
        this.cagette = "";
        this.crud.databaseConn();
    }
    ngOnInit() { }
    ionViewDidEnter() {
        this.crud.getAllProducts();
    }
    createUser() {
        this.crud.addItem(this.material, this.description, this.cagette);
    }
    remove(product) {
        this.crud.deleteProduct(product);
    }
};
CreatePage.ctorParameters = () => [
    { type: _crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"] }
];
CreatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-create',
        template: _raw_loader_create_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_create_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CreatePage);



/***/ })

}]);
//# sourceMappingURL=create-create-module.js.map