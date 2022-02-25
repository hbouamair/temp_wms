(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inventaire-inventaire-module"],{

/***/ "CJwu":
/*!*********************************************************!*\
  !*** ./src/app/inventaire/inventaire-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: InventairePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventairePageRoutingModule", function() { return InventairePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _inventaire_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inventaire.page */ "Zx7E");




const routes = [
    {
        path: '',
        component: _inventaire_page__WEBPACK_IMPORTED_MODULE_3__["InventairePage"]
    }
];
let InventairePageRoutingModule = class InventairePageRoutingModule {
};
InventairePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InventairePageRoutingModule);



/***/ }),

/***/ "VS4q":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inventaire/inventaire.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar >\n\n    <ion-row>\n\n      <ion-col ><ion-item lines=\"none\">\n    <ion-icon  src=\"../../assets/mdicons/md-home.svg\"> </ion-icon>  </ion-item>\n  </ion-col>\n\n  <ion-col>\n    \n    <ion-item class=\"bord\" lines=\"none\">\n      <ion-icon src=\"../../assets//mdicons/lines.svg\" ></ion-icon>\n    <ion-icon class=\"pers\" name=\"person\"> </ion-icon>\n    <ion-title>Talberani</ion-title></ion-item>\n  </ion-col>\n\n\n  <ion-col>\n    <ion-item class=\"bord\"  lines=\"none\">\n      \n    <ion-icon  src=\"../../assets/mdicons/Settings.svg\"> </ion-icon></ion-item>\n  </ion-col>\n\n  <ion-col>\n    <ion-item class=\"bord\" lines=\"none\">\n      \n    <ion-icon src=\"../../assets/mdicons/Logout.svg\"> </ion-icon></ion-item>\n  </ion-col>\n\n\n\n\n\n  </ion-row>\n\n  </ion-toolbar>\n</ion-header>\n\n\n\n\n\n<ion-content class=\"page-upload\">\n  <ion-segment\n          [(ngModel)]=\"selectedSegement\"\n          (ionChange)=\"segmentChanged($event)\"\n          value=\"CreateInv\"\n           >\n          <ion-segment-button  value=\"CreateInv\">\n       \n              <ion-icon src=\"../../assets/createInv.svg \"></ion-icon>\n              <ion-label>Create Inventaire</ion-label>\n          \n          </ion-segment-button>\n          <ion-segment-button>\n            \n              <ion-icon src=\"../../assets/listeInve.svg \"></ion-icon>\n              <ion-label>Liste des inventaire</ion-label>\n           \n          </ion-segment-button>\n         \n        </ion-segment>\n\n\n\n\n<ion-content *ngIf=\"selectedSegement == 'CreateInv'\">\n\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>reference\n       \n      </ion-card-subtitle>\n      <ion-label>Inventaire 01 </ion-label>\n     \n      <ion-label slot=\"end\">Inventaire 01 </ion-label>\n    </ion-card-header>\n  \n    <ion-card-content>\n      \n      \n        <ion-button  class=\"upload\" (click)=\"inputFile.click()\">\n          <ion-label>Choisir un fichier &nbsp;</ion-label>   <ion-icon  src=\"../../assets/ms-excel.svg\"></ion-icon> \n        \n        <input #inputFile id=\"input-file\"  style=\"opacity:0\" type=\"file\" (change)=\"excelRead($event)\"\n        multiple/>\n      </ion-button>\n    </ion-card-content>\n  </ion-card>\n  \n\n\n\n\n \n\n\n  </ion-content>\n    \n</ion-content>\n<ion-footer>\n  <ion-toolbar class=\"qr-scan\" >\n   <ion-fab-button  (click)=\"goToBarcodeScan()\" > <ion-icon name=\"scan\"></ion-icon></ion-fab-button>\n  <span class=\"qr\">Scanner  Qr Code</span> \n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "Zx7E":
/*!***********************************************!*\
  !*** ./src/app/inventaire/inventaire.page.ts ***!
  \***********************************************/
/*! exports provided: InventairePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventairePage", function() { return InventairePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_inventaire_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./inventaire.page.html */ "VS4q");
/* harmony import */ var _inventaire_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inventaire.page.scss */ "rBqo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let InventairePage = class InventairePage {
    constructor() { }
    ngOnInit() {
    }
};
InventairePage.ctorParameters = () => [];
InventairePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-inventaire',
        template: _raw_loader_inventaire_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inventaire_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InventairePage);



/***/ }),

/***/ "qVXu":
/*!*************************************************!*\
  !*** ./src/app/inventaire/inventaire.module.ts ***!
  \*************************************************/
/*! exports provided: InventairePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventairePageModule", function() { return InventairePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _inventaire_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inventaire-routing.module */ "CJwu");
/* harmony import */ var _inventaire_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inventaire.page */ "Zx7E");







let InventairePageModule = class InventairePageModule {
};
InventairePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _inventaire_routing_module__WEBPACK_IMPORTED_MODULE_5__["InventairePageRoutingModule"]
        ],
        declarations: [_inventaire_page__WEBPACK_IMPORTED_MODULE_6__["InventairePage"]]
    })
], InventairePageModule);



/***/ }),

/***/ "rBqo":
/*!*************************************************!*\
  !*** ./src/app/inventaire/inventaire.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n  font-family: \"acrom\";\n  src: url('Acrom-Medium.ttf');\n}\nion-header ion-toolbar {\n  --background: #3D5A68;\n}\nion-header ion-item {\n  --background: #3D5A68;\n}\nion-header ion-item ion-title {\n  color: #FFFFFF;\n  font-family: acrom;\n}\nion-header ion-icon {\n  font-size: 16px;\n  color: #FFFFFF;\n}\n.page-upload ion-label {\n  font-family: acrom;\n}\n.page-upload ion-card-header ion-card-subtitle {\n  color: #B2C4CC;\n  font-size: 12px;\n}\n.page-upload ion-card-header ion-label {\n  color: #3D5A68;\n  font-size: 16px;\n}\n.page-upload .upload {\n  --background: #3D5A68;\n  width: 220px;\n  height: 50px;\n  font-size: 16px;\n  border-radius: 7px;\n}\n.page-upload .upload ion-label {\n  font-family: acrom;\n}\n.page-upload .upload ion-icon {\n  font-size: 300px;\n}\nion-footer {\n  --background: #3D5A68;\n}\nion-footer ion-toolbar {\n  padding-top: 4px;\n  text-align: -webkit-center;\n  --background:#3D5A68;\n}\nion-footer .qr {\n  color: #FFFFFF;\n  width: 10px !important;\n  font-family: acrom;\n  font-size: 10px;\n}\nion-footer ion-fab-button {\n  border-radius: 50%;\n  border: 3px solid #344C57;\n  box-shadow: 0 0 0 3px #668391;\n  --background:linear-gradient(#FFB701,#FF9302);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2ludmVudGFpcmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFDQSw0QkFBQTtBQUNKO0FBSUk7RUFDSSxxQkFBQTtBQUZSO0FBTUk7RUFHSSxxQkFBQTtBQU5SO0FBT1E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUFMWjtBQVFJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFOUjtBQWFJO0VBQ0ksa0JBQUE7QUFWUjtBQWdCUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBZFo7QUFnQlE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQWRaO0FBcUJBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQW5CSjtBQW9CSTtFQUNJLGtCQUFBO0FBbEJSO0FBb0JJO0VBQ0ksZ0JBQUE7QUFsQlI7QUFzQ0E7RUFFRSxxQkFBQTtBQXBDRjtBQXFDRTtFQUNFLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtBQW5DSjtBQXNDRTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQXBDSjtBQXdDRTtFQUVDLGtCQUFBO0VBRUEseUJBQUE7RUFDQyw2QkFBQTtFQUNBLDZDQUFBO0FBeENKIiwiZmlsZSI6ImludmVudGFpcmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdhY3JvbSc7XG4gICAgc3JjOiB1cmwoJy4uLy4uL2Fzc2V0cy9mb250cy9BY3JvbS1NZWRpdW0udHRmJyk7XG4gIH1cbiAgXG5cbmlvbi1oZWFkZXJ7XG4gICAgaW9uLXRvb2xiYXJ7XG4gICAgICAgIC0tYmFja2dyb3VuZCA6ICMzRDVBNjg7XG4gICAgfVxuXG4gIFxuICAgIGlvbi1pdGVte1xuICAgICAgICBcbiAgICAgICBcbiAgICAgICAgLS1iYWNrZ3JvdW5kIDogIzNENUE2ODtcbiAgICAgICAgaW9uLXRpdGxle1xuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgICAgICBmb250LWZhbWlseTogYWNyb207XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW9uLWljb257IFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGNvbG9yOiNGRkZGRkYgO1xuICAgIH1cbiAgIFxuXG59XG5cbi5wYWdlLXVwbG9hZHtcbiAgICBpb24tbGFiZWx7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBhY3JvbTtcbiAgICB9XG5cbiAgICBpb24tY2FyZC1oZWFkZXJ7XG5cblxuICAgICAgICBpb24tY2FyZC1zdWJ0aXRsZXtcbiAgICAgICAgICAgIGNvbG9yOiAjQjJDNENDO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG4gICAgICAgIGlvbi1sYWJlbHtcbiAgICAgICAgICAgIGNvbG9yOiAjM0Q1QTY4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4IDtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cblxuLnVwbG9hZHtcbiAgICAtLWJhY2tncm91bmQ6ICMzRDVBNjg7XG4gICAgd2lkdGg6IDIyMHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIGlvbi1sYWJlbHtcbiAgICAgICAgZm9udC1mYW1pbHk6IGFjcm9tO1xuICAgIH1cbiAgICBpb24taWNvbnsgXG4gICAgICAgIGZvbnQtc2l6ZTogMzAwcHg7XG4gICAgfVxuICAgXG5cbn1cblxuXG5cbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5pb24tZm9vdGVye1xuXG4gIC0tYmFja2dyb3VuZCA6ICMzRDVBNjg7XG4gIGlvbi10b29sYmFye1xuICAgIHBhZGRpbmctdG9wOiA0cHg7XG4gICAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gICAgLS1iYWNrZ3JvdW5kOiMzRDVBNjg7XG4gIH1cbiAgXG4gIC5xcntcbiAgICBjb2xvcjojRkZGRkZGIDtcbiAgICB3aWR0aDogMTBweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtZmFtaWx5OiBhY3JvbTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbiBcblxuICBpb24tZmFiLWJ1dHRvbntcblxuICAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gICBib3JkZXI6IDNweCBzb2xpZCAjMzQ0QzU3O1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCAgIzY2ODM5MTtcbiAgICAtLWJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KCNGRkI3MDEsI0ZGOTMwMik7XG4gIH1cbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=inventaire-inventaire-module.js.map