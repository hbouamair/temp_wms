(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-users-module"],{

/***/ "Cj6H":
/*!***********************************************!*\
  !*** ./src/app/users/users-routing.module.ts ***!
  \***********************************************/
/*! exports provided: UsersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPageRoutingModule", function() { return UsersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _users_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users.page */ "x3UY");




const routes = [
    {
        path: '',
        component: _users_page__WEBPACK_IMPORTED_MODULE_3__["UsersPage"]
    }
];
let UsersPageRoutingModule = class UsersPageRoutingModule {
};
UsersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UsersPageRoutingModule);



/***/ }),

/***/ "OYNF":
/*!***************************************!*\
  !*** ./src/app/users/users.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2Vycy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "i9Bv":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Products</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- Create -->\n  <ion-item>\n    <ion-label position=\"floating\">nom</ion-label>\n    <ion-input  [(ngModel)]=\"nom\"></ion-input>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label position=\"floating\">prenom</ion-label>\n    <ion-input [(ngModel)]=\"prenom\"></ion-input>\n  </ion-item>\n    \n  <ion-item>\n    <ion-label position=\"floating\">username</ion-label>\n    <ion-input [(ngModel)]=\"username\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">email</ion-label>\n    <ion-input type=\"email\" [(ngModel)]=\"email\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">password</ion-label>\n    <ion-input  type=\"password\" [(ngModel)]=\"password\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">telephone</ion-label>\n    <ion-input type=\"number\" [(ngModel)]=\"telephone\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">role</ion-label>\n    <ion-input type=\"number\" [(ngModel)]=\"role\"></ion-input>\n  </ion-item>\n\n  <ion-button color=\"success\" expand=\"block\" (click)=\"createUser()\">\n    Add User\n  </ion-button>\n\n\n\n  <ion-button color=\"success\" expand=\"block\" (click)=\"loginPage()\">\n    login\n  </ion-button>\n\n\n  \n  <!-- Read -->\n  <ion-item *ngFor=\"let user of crud.Emplo\">\n    <ion-label>\n      <h2><strong>{{ user.nom }}</strong></h2>\n      <p>{{ user.username }}</p>\n      <p>{{ user.telephone }}</p>\n    </ion-label>\n\n    <div class=\"item-note\" item-end>\n      <ion-icon color=\"primary\" name=\"create\" style=\"zoom:1.3\" [routerLink]=\"['/edit/', user.user_id]\"></ion-icon>\n      \n      <ion-icon color=\"danger\" name=\"trash\" style=\"zoom:1.3\" (click)=\"remove(user.user_id)\"></ion-icon>\n    </div>\n  </ion-item>\n  \n</ion-content>\n");

/***/ }),

/***/ "x3UY":
/*!*************************************!*\
  !*** ./src/app/users/users.page.ts ***!
  \*************************************/
/*! exports provided: UsersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPage", function() { return UsersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_users_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./users.page.html */ "i9Bv");
/* harmony import */ var _users_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.page.scss */ "OYNF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../crud.service */ "1vsn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let UsersPage = class UsersPage {
    constructor(router, crud) {
        this.router = router;
        this.crud = crud;
        this.nom = "";
        this.prenom = "";
        this.username = "";
        this.email = "";
        this.password = "";
        this.telephone = null;
        this.role = null;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.crud.getAllEmp();
    }
    createUser() {
        this.crud.addUser(this.nom, this.prenom, this.username, this.email, this.password, this.telephone, this.role);
    }
    remove(user) {
        this.crud.deleteProduct(user);
    }
    loginPage() {
        this.router.navigate(['/login']);
    }
};
UsersPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"] }
];
UsersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-users',
        template: _raw_loader_users_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_users_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UsersPage);



/***/ }),

/***/ "zrcO":
/*!***************************************!*\
  !*** ./src/app/users/users.module.ts ***!
  \***************************************/
/*! exports provided: UsersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPageModule", function() { return UsersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users-routing.module */ "Cj6H");
/* harmony import */ var _users_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users.page */ "x3UY");







let UsersPageModule = class UsersPageModule {
};
UsersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _users_routing_module__WEBPACK_IMPORTED_MODULE_5__["UsersPageRoutingModule"]
        ],
        declarations: [_users_page__WEBPACK_IMPORTED_MODULE_6__["UsersPage"]]
    })
], UsersPageModule);



/***/ })

}]);
//# sourceMappingURL=users-users-module.js.map