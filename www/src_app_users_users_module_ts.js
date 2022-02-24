"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_users_users_module_ts"],{

/***/ 7490:
/*!*************************************************!*\
  !*** ./src/app/database/dataservice.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataserviceService": () => (/* binding */ DataserviceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ 4297);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_native_sqlite_porter_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/sqlite-porter/ngx */ 4842);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1119);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 8099);








let DataserviceService = class DataserviceService {
    constructor(plt, sqlitePorter, sqlite, http, router) {
        this.plt = plt;
        this.sqlitePorter = sqlitePorter;
        this.sqlite = sqlite;
        this.http = http;
        this.router = router;
        this.dbReady = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
        this.users = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this.plt.ready().then(() => {
            this.sqlite.create({
                name: 'wms.db',
                location: 'default'
            })
                .then((db) => {
                this.database = db;
                this.seedDatabase();
            });
        });
    }
    seedDatabase() {
        this.http.get('assets/wms.sql', { responseType: 'text' })
            .subscribe(sql => {
            this.sqlitePorter.importSqlToDb(this.database, sql)
                .then(_ => {
                this.getUsers();
                this.dbReady.next(true);
            })
                .catch(e => console.error(e));
        });
    }
    getDatabaseState() {
        return this.dbReady.asObservable();
    }
    getUsers() {
        return this.users.asObservable();
    }
    loadUsers() {
        return this.database.executeSql('SELECT * FROM user', []).then(data => {
            let users = [];
            if (data.rows.length > 0) {
                for (let i = 0; i < data.rows.length; i++) {
                    users.push({
                        id: data.rows.item(i).studId,
                        name: data.rows.item(i).name,
                        prenom: data.rows.item(i).prenom,
                        username: data.rows.item(i).username,
                        email: data.rows.item(i).email,
                        password: data.rows.item(i).password,
                        tele: data.rows.item(i).tele,
                        role: data.rows.item(i).role,
                    });
                }
            }
            this.users.next(users);
        });
    }
    addUserData(name, prenom, username, email, password, tele, role) {
        let data = [name, prenom, username, email, password, tele, role];
        return this.database.executeSql('INSERT INTO user (name, prenom , username , email , password ,telephone , role) VALUES (?, ?, ? , ?,?,?)', data).then(data => {
            this.loadUsers();
        });
    }
    getUserById(id) {
        return this.database.executeSql('SELECT * FROM user WHERE id = ?', [id]).then(data => {
            return {
                id: data.rows.item(0).studId,
                name: data.rows.item(0).name,
                prenom: data.rows.item(0).prenom,
                username: data.rows.item(0).username,
                email: data.rows.item(0).email,
                password: data.rows.item(0).password,
                tele: data.rows.item(0).tele,
                role: data.rows.item(0).role,
            };
        });
    }
    updateUser(user) {
        let data = [user.name, user.prenom, user.username, user.email, user.password, user.tele, user.role];
        return this.database.executeSql(`UPDATE user SET name = ?, prenom = ?, username = ? , email = ? ,  password = ? , tele = ?, role = ?  WHERE studId = ${user.id}`, data).then(data => {
            this.loadUsers();
        });
    }
    deleteUsers(id) {
        console.log('Inside Deleting DB User Id ' + id);
        return this.database.executeSql('DELETE FROM user WHERE id = ?', [id]).then(_ => {
            this.loadUsers();
        });
    }
};
DataserviceService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform },
    { type: _ionic_native_sqlite_porter_ngx__WEBPACK_IMPORTED_MODULE_1__.SQLitePorter },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_0__.SQLite },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
DataserviceService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
    })
], DataserviceService);



/***/ }),

/***/ 7564:
/*!***********************************************!*\
  !*** ./src/app/users/users-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersPageRoutingModule": () => (/* binding */ UsersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _users_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.page */ 303);




const routes = [
    {
        path: '',
        component: _users_page__WEBPACK_IMPORTED_MODULE_0__.UsersPage
    }
];
let UsersPageRoutingModule = class UsersPageRoutingModule {
};
UsersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UsersPageRoutingModule);



/***/ }),

/***/ 6538:
/*!***************************************!*\
  !*** ./src/app/users/users.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersPageModule": () => (/* binding */ UsersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users-routing.module */ 7564);
/* harmony import */ var _users_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.page */ 303);







let UsersPageModule = class UsersPageModule {
};
UsersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _users_routing_module__WEBPACK_IMPORTED_MODULE_0__.UsersPageRoutingModule
        ],
        declarations: [_users_page__WEBPACK_IMPORTED_MODULE_1__.UsersPage]
    })
], UsersPageModule);



/***/ }),

/***/ 303:
/*!*************************************!*\
  !*** ./src/app/users/users.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersPage": () => (/* binding */ UsersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _Users_macbookpro_Desktop_wms_mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_users_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./users.page.html */ 7199);
/* harmony import */ var _users_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.page.scss */ 3243);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _database_dataservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../database/dataservice.service */ 7490);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8099);







let UsersPage = class UsersPage {
    constructor(router, route, db, toast) {
        this.router = router;
        this.route = route;
        this.db = db;
        this.toast = toast;
        this.hideMe = true;
        this.user = null;
        this.usersData = {};
        this.users = [];
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            let id = params.get('id');
            this.db.getUserById(id).then(data => {
                this.user = data;
            });
        });
        this.db.getDatabaseState().subscribe(rdy => {
            if (rdy) {
                this.db.getUsers().subscribe(users => {
                    this.users = users;
                    console.log(this.users);
                });
            }
        });
    }
    updateUserData() {
        this.db.updateUser(this.user).then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let toast = yield this.toast.create({
                message: 'users Details Updated Successfully..',
                duration: 3000
            });
            toast.present();
        })).then(() => { this.router.navigateByUrl('users'), this.hideMe = true; });
    }
    delete() {
        console.log('Deleting Student Id ' + this.user.id);
        this.db.deleteUsers(this.user.id).then(() => {
            this.router.navigateByUrl('users');
            this.hideMe = true;
        });
    }
    addUsersDetails() {
        this.db.addUserData(this.usersData['name'], this.usersData['prenom'], this.usersData['username'], this.usersData['email'], this.usersData['password'], this.usersData['tele'], this.usersData['role']).then(_ => {
            this.usersData = {};
        });
    }
    hide() {
        this.hideMe = false;
    }
    returnHome() {
        this.router.navigate(['/home']);
    }
    back() {
        this.router.navigate(['/users']);
        this.hideMe = true;
    }
};
UsersPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _database_dataservice_service__WEBPACK_IMPORTED_MODULE_2__.DataserviceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
UsersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-users',
        template: _Users_macbookpro_Desktop_wms_mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_users_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_users_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], UsersPage);



/***/ }),

/***/ 7199:
/*!******************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/users/users.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-content class=\"page\">\n    <ion-toolbar class=\"tool\">\n      <ion-grid>\n        <ion-row class=\"ion-align-items-center\">\n          <ion-col size=\"2\">\n            <ion-icon\n              (click)=\"returnHome()\"\n              src=\"../../assets/mdicons/md-home.svg\"\n            ></ion-icon>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-icon class=\"pers\" name=\"person\"> </ion-icon\n            ><ion-label> Tabari Arrafat</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-icon\n              src=\"../../assets/mdicons/Settings.svg\"\n              auto-hide=\"false\"\n            ></ion-icon>\n          </ion-col>\n          <ion-col>\n            <ion-icon\n              src=\"../../assets/mdicons/Logout.svg\"\n              auto-hide=\"false\"\n            ></ion-icon>\n          </ion-col>\n          <ion-col> </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-toolbar>\n\n    <div class=\"tab\">\n      <ion-content class=\"item ion-padding\">\n        <ion-segment\n          [(ngModel)]=\"selectedSegement\"\n          (ionChange)=\"segmentChanged($event)\"\n          value=\"users\" >\n          <ion-segment-button>\n            <ion-fab-button>\n              <ion-icon src=\"../../assets/mdicons/md-prod.svg \"></ion-icon>\n            </ion-fab-button>\n          </ion-segment-button>\n          <ion-segment-button value=\"prod\" class=\"segment-value\">\n            <ion-fab-button>\n              <ion-icon src=\"../../assets/mdicons/md-emp.svg\"></ion-icon>\n            </ion-fab-button>\n          </ion-segment-button>\n          <ion-segment-button value=\"users\">\n            <ion-fab-button>\n              <ion-icon src=\"../../assets/mdicons/md-us.svg\"></ion-icon>\n            </ion-fab-button>\n          </ion-segment-button>\n          <ion-segment-button>\n            <ion-fab-button>\n              <ion-icon\n                class=\"menu-icon\"\n                src=\"../../assets/mdicons/md-inv.svg\"\n              ></ion-icon>\n            </ion-fab-button>\n          </ion-segment-button>\n          <ion-segment-button>\n            <ion-fab-button>\n              <ion-icon\n                class=\"menu-icon\"\n                src=\"../../assets/mdicons/md-stock.svg\"\n              ></ion-icon>\n            </ion-fab-button>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-content>\n      <ion-content class=\"table users\" *ngIf=\"selectedSegement == 'users'\">\n        <ion-row *ngIf=\"hideMe\" class=\"top\">\n          <ion-col *ngIf=\"hideMe\" size=\"3\"> Nom </ion-col>\n          <ion-col *ngIf=\"hideMe\" size=\"3\"> Login </ion-col>\n          <ion-col *ngIf=\"hideMe\" size=\"4\"> Téléphone </ion-col>\n          <ion-col *ngIf=\"hideMe\" size=\"2\"> éditer </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"!hideMe\" class=\"top\">\n          <ion-col class=\"show\" size=\"6\"> Formulaire </ion-col>\n        </ion-row>\n        <ion-content class=\"scrol\">\n          <ion-scroll *ngIf=\"hideMe\" scrollY=\"true\" direction=\"xy\">\n\n        \n            <ion-row  *ngFor=\"let user of users\"  [routerLink]=\"['/', 'users', user.id]\" class=\"data-row\">\n              <ion-col size=\"3\"> {{user.name}}</ion-col>\n              <ion-col size=\"3\"> {{user.username}} </ion-col>\n              <ion-col size=\"4\"> {{user.tele}} </ion-col>\n              <ion-col class=\"edit\" size=\"2\">\n                <ion-icon src=\"../../assets/mdicons/edit.svg\"></ion-icon>\n              </ion-col>\n            </ion-row>\n          </ion-scroll>\n          <ion-scroll  *ngIf=\"!hideMe\" scrollY=\"true\" direction=\"xy\">\n            <ion-content>\n             \n            <ion-list class=\"form ion-padding\">\n              \n              <ion-item class=\"select\">\n                <ion-label>Role\n                <ion-input [(ngModel)]=\"usersData.role\"  type=\"text\"> </ion-input ></ion-label> \n              </ion-item>\n\n              <ion-item>\n                <ion-label position=\"floating\"\n                  >Nom<ion-input [(ngModel)]=\"usersData.name\"  type=\"text\"></ion-input\n                ></ion-label>\n              </ion-item>\n\n              <ion-item>\n                <ion-label position=\"floating\">Prénom</ion-label>\n                <ion-input [(ngModel)]=\"usersData.prenom\"  type=\"text\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"floating\">Username</ion-label>\n                <ion-input [(ngModel)]=\"usersData.username\"  type=\"email\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"floating\">Email</ion-label>\n                <ion-input [(ngModel)]=\"usersData.email\"  type=\"email\"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label position=\"floating\">Password</ion-label>\n                <ion-input [(ngModel)]=\"usersData.password\"  type=\"password\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"floating\">Télephone</ion-label>\n                <ion-input [(ngModel)]=\"usersData.tele\"  type=\"number\"></ion-input>\n              </ion-item>\n\n              \n            </ion-list>\n             \n          </ion-content>\n          </ion-scroll>\n          <ion-toolbar class=\"add\">\n            <div *ngIf=\"hideMe\" class=\"butt\">\n              <ion-fab-button (click)=\"hide()\"\n                ><ion-icon name=\"add\"></ion-icon>\n              </ion-fab-button>\n              <ion-label> Ajouter Utilisateur </ion-label>\n            </div>\n            <div *ngIf=\"!hideMe\" class=\"butt1\">\n              <ion-fab-button (click)=\"addUsersDetails()\"\n                ><ion-icon src=\"../../assets/mdicons/save.svg\"></ion-icon>\n              </ion-fab-button   >\n              <ion-label> Enregistrer</ion-label>\n\n              <ion-fab-button (click)=\"back()\"\n                ><ion-icon src=\"../../assets/mdicons/retour.svg\"></ion-icon>\n              </ion-fab-button>\n              <ion-label>Retour </ion-label>\n            </div>\n          </ion-toolbar>\n        </ion-content>\n      </ion-content>\n      <div class=\"prod\" *ngIf=\"selectedSegement == 'prod'\">\n        <h1>teext</h1>\n      </div>\n    </div>\n  </ion-content>\n  <ion-footer>\n    <ion-toolbar class=\"qr-scan\">\n      <ion-fab-button> <ion-icon name=\"scan\"></ion-icon></ion-fab-button>\n      <span class=\"qr\">Scanner Qr Code</span>\n    </ion-toolbar>\n  </ion-footer>\n</ion-app>\n");

/***/ }),

/***/ 3243:
/*!***************************************!*\
  !*** ./src/app/users/users.page.scss ***!
  \***************************************/
/***/ ((module) => {

module.exports = "@font-face {\n  font-family: \"acrom\";\n  src: url('Acrom-Medium.ttf');\n}\n.page {\n  overflow-y: hidden !important;\n  height: 100%;\n  --background: linear-gradient(#E6E6E8, #F6F5F8 ,#E7E7E9, #F5F5F7 ,#F7F7F9,#E8E9EB ) ;\n}\n.page ion-segment {\n  --background:#F7F7F7 ;\n}\n.page ion-segment ion-segment-button {\n  --border-radius: 50% ;\n  font-size: 3rem;\n  --border-width: 0 ;\n  --indicator-color: #3D5A68 !important;\n  --color-selected: blue;\n}\n.page .tool {\n  padding: 5px;\n  --background:#3D5A68;\n}\n.page .tool ion-button {\n  margin-right: 20px;\n  width: 25px !important;\n  height: 25px !important;\n}\n.page .tool ion-label {\n  font-family: acrom;\n  font-size: 15px;\n  color: white;\n}\n.page .tool .pers {\n  color: white;\n}\n.page ion-title {\n  font-size: 15px;\n  font-family: acrom;\n  color: #FFFFFF;\n}\n.page .icon {\n  border-left-width: 1px;\n  margin-left: 5px;\n}\n.page .home {\n  border: none;\n  width: 28px !important;\n  height: 28px !important;\n  margin-left: 15px;\n}\n.tab {\n  text-align: -webkit-center;\n  height: 84vh;\n  bottom: 61px;\n  width: 93%;\n  background-color: #F7F7F7;\n  right: 0;\n  left: 0;\n  position: fixed;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  margin: auto;\n}\n.tab .button {\n  font-size: 20px;\n  margin: 0;\n  position: fixed;\n}\n.tab .item {\n  --background: #F7F7F7 ;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  height: 90px;\n  --inner-border-width:0 0 0 0 !important ;\n  border: none;\n}\n.tab .item ion-icon {\n  font-size: 32px;\n}\n.tab .item ion-fab-button {\n  --background: #F7F7F7;\n  --box-shadow: none !important;\n}\n.tab .item .active {\n  border-radius: 50%;\n  --background: #3D5A68;\n}\n.tab .item .active ion-icon {\n  color: white;\n}\n.tab .item .label {\n  font-family: acrom;\n  color: #3D5A68;\n  font-size: 10px;\n}\n.tab .table {\n  border: 1px solid #E6E6E6;\n  width: 95%;\n  right: 0;\n  margin: auto !important;\n  left: 0;\n  border-radius: 10%;\n}\n.tab .table .box {\n  border-color: #3D5A68;\n  border-style: solid;\n  border-radius: 3px;\n}\n.tab .table .show {\n  font-size: 15px;\n}\n.tab .table .scrol {\n  height: 61vh;\n}\n.tab .table .form ion-item {\n  font-family: acrom;\n  --background: #ffff !important;\n  border-radius: 15px;\n  border: 1px solid #3D5A68;\n  margin: 13px;\n  height: 71px;\n}\n.tab .table .form .select {\n  height: 60px;\n}\n.tab .table .form ion-label {\n  font-family: acrom;\n  font-size: 12px;\n}\n.tab .table .add {\n  display: flex !important;\n  margin: auto;\n  --background: #B2C4CC;\n  left: 0;\n  position: fixed;\n  right: 0;\n  bottom: 85px;\n  width: 88%;\n}\n.tab .table .add ion-icon {\n  color: #ffff;\n}\n.tab .table .add .butt {\n  padding: 10px;\n  display: flex !important;\n  justify-content: center;\n}\n.tab .table .add .butt1 {\n  padding: 10px;\n  display: flex !important;\n  justify-content: center;\n}\n.tab .table .add .butt1 ion-icon {\n  font-size: 15px;\n}\n.tab .table .add ion-label {\n  font-family: acrom;\n  font-size: 10px;\n  margin: 10px;\n}\n.tab .table .add ion-fab-button {\n  --background: #3D5A68;\n  width: 35px;\n  height: 35px;\n}\n.tab .table .top {\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  height: 40px;\n  padding-bottom: 8px !important;\n  font-size: 5px !important;\n  color: #3D5A68;\n  background-color: #B2C4CC;\n}\n.tab .table .top ion-col {\n  border-bottom: 0px solid #E6E6E6 !important;\n}\n.tab .table ion-col {\n  border-bottom: 1px solid #E6E6E6;\n  color: #3D5A68;\n  font-family: acrom;\n  font-size: 12px;\n  padding-top: 10px;\n  padding-bottom: 15px;\n  margin-bottom: 8px;\n}\n.tab .table .edit {\n  text-align: center;\n}\n.tab .table .edit ion-icon {\n  font-size: 17px;\n}\n.tab .table .active {\n  border-left: 4px solid;\n  color: #3D5A68;\n  padding-left: 25px;\n}\n.tab .table .active ion-icon {\n  color: #3D5A68;\n}\nion-footer {\n  --background: #3D5A68;\n}\nion-footer ion-toolbar {\n  padding-top: 4px;\n  text-align: -webkit-center;\n  --background:#3D5A68;\n}\nion-footer .qr {\n  color: #FFFFFF;\n  width: 10px !important;\n  font-family: acrom;\n  font-size: 10px;\n}\nion-footer ion-fab-button {\n  border-radius: 50%;\n  border: 3px solid #344C57;\n  box-shadow: 0 0 0 3px #668391;\n  --background:linear-gradient(#FFB701,#FF9302);\n}\n/*# sourceMappingURL=data:application/json;base64,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QUNFLGNBQUE7QUFoRlI7QUF1RkU7RUFFRSxxQkFBQTtBQXJGSjtBQXNGSTtFQUNFLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtBQXBGTjtBQXVGSTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQXJGTjtBQXlGSTtFQUVDLGtCQUFBO0VBRUEseUJBQUE7RUFDQyw2QkFBQTtFQUNBLDZDQUFBO0FBekZOIiwiZmlsZSI6InVzZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdhY3JvbSc7XG4gICAgc3JjOiB1cmwoJy4uLy4uL2Fzc2V0cy9mb250cy9BY3JvbS1NZWRpdW0udHRmJyk7XG4gIH1cbiAgXG4gIFxuIC5wYWdle1xuICAgIFxuICAgIG92ZXJmbG93LXk6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAtLWJhY2tncm91bmQgOiBsaW5lYXItZ3JhZGllbnQoI0U2RTZFOCwgI0Y2RjVGOCAsI0U3RTdFOSwgI0Y1RjVGNyAsI0Y3RjdGOSwjRThFOUVCICkgIDtcbiAgXG4gICAgaW9uLXNlZ21lbnR7XG4gICAgICAtLWJhY2tncm91bmQgOiNGN0Y3RjcgO1xuICAgICAgaW9uLXNlZ21lbnQtYnV0dG9ue1xuICAgICAgICAtLWJvcmRlci1yYWRpdXMgOiA1MCUgO1xuICAgICAgICBcbiAgICAgICAgIGZvbnQtc2l6ZTogM3JlbSA7XG4gICAgICAgICAtLWJvcmRlci13aWR0aCA6IDAgO1xuICAgICAgIFxuICAgICAgICAgXG4gICAgICAgICAtLWluZGljYXRvci1jb2xvciA6ICMzRDVBNjggICFpbXBvcnRhbnQ7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgIC0tY29sb3Itc2VsZWN0ZWQ6IGJsdWU7XG5cbiAgICAgIH1cblxuICAgICAgXG5cbiAgICAgXG5cbiAgICB9XG4gICAgLnRvb2x7XG5cbiAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICBcbiAgICAgIC0tYmFja2dyb3VuZDojM0Q1QTY4O1xuICAgICAgaW9uLWJ1dHRvbntcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICB3aWR0aDoyNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xuXG4gICAgICAgXG4gICAgICB9XG4gICAgICBpb24tbGFiZWx7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IGFjcm9tO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgIH1cbiAgICAgIC5wZXJze1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaW9uLXRpdGxle1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgZm9udC1mYW1pbHk6IGFjcm9tO1xuICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICBcbiAgICB9XG4gICBcbiAgICAuaWNvbntcbiAgICBib3JkZXItbGVmdC13aWR0aDogMXB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgIFxuICAgIH1cbiAgICBcblxuICBcbiAgICAuaG9tZXtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHdpZHRoOjI4cHggIWltcG9ydGFudDtcbiAgICAgIGhlaWdodDogMjhweCAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICBcbiAgICAgIFxuICAgIH1cbiAgIFxuICAgXG4gIH1cbi50YWJ7XG4gICAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gICAgaGVpZ2h0IDo4NHZoIDtcbiAgICBib3R0b206IDYxcHg7XG4gICB3aWR0aDogOTMlO1xuICAgYmFja2dyb3VuZC1jb2xvciA6ICNGN0Y3RjcgO1xuICAgIHJpZ2h0IDowO1xuICAgICAgbGVmdDowO1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xuXG4gICAgICBtYXJnaW46IGF1dG87XG5cbiAgICAgIC5idXR0b257XG4gICAgICAgICAgXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgIFxuICAgICAgfVxuICAgICAgLml0ZW17XG4gICAgICAgXG4gICAgICAgIC0tYmFja2dyb3VuZCA6ICNGN0Y3RjcgO1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgICAgLS1pbm5lci1ib3JkZXItd2lkdGggOjAgMCAwIDAgICFpbXBvcnRhbnQgO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcblxuICAgICAgICAgIGlvbi1pY29ue1xuXG4gICAgICAgICAgICAgXG4gICAgICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW9uLWZhYi1idXR0b257XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6ICNGN0Y3Rjc7XG4gICAgICAgICAgICAtLWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcblxuICAgICAgICAgIH1cbiAgICAgICAgICAuYWN0aXZlIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogIzNENUE2ODtcbiAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgICAubGFiZWx7XG4gICAgICAgICAgICBmb250LWZhbWlseTogYWNyb207XG4gICAgICAgICAgICBjb2xvciA6IzNENUE2OCA7IFxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgICAgXG4gICAgLnRhYmxle1xuICAgICBcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0U2RTZFNjtcbiAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgcmlnaHQgOjA7XG4gICAgICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xuICAgICAgbGVmdDowO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTAlO1xuICAgXG4gICAgICAuYm94IHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjM0Q1QTY4O1xuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgfVxuICAgXG4gICBcbiAgICAgIC5zaG93e1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5zY3JvbHtcbiAgICAgICAgaGVpZ2h0OiA2MXZoO1xuXG4gICAgICAgXG4gICAgICB9XG5cbiAgICAgIC5mb3Jte1xuXG4gICAgICAgIGlvbi1pdGVte1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBhY3JvbTtcbiAgICAgICAgICAtLWJhY2tncm91bmQgOiAjZmZmZiAhaW1wb3J0YW50O1xuICAgICAgICAgIFxuICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjM0Q1QTY4IDtcbiAgICAgICAgICBtYXJnaW46IDEzcHg7XG4gICAgICAgICAgaGVpZ2h0OiA3MXB4O1xuXG4gICAgICAgIH1cblxuICAgICAgICAuc2VsZWN0e1xuICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgfVxuICAgICAgICBpb24tbGFiZWx7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IGFjcm9tO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgIFxuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmFkZHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgICAgXG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjQjJDNENDO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiA4NXB4O1xuICAgICAgICB3aWR0aDogODglO1xuICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZjtcbiAgICAgICAgfVxuICAgICAgIC5idXR0e1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5idXR0MXtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgO1xuICAgICAgICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICBcbiAgICAgICAgaW9uLWxhYmVse1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IGFjcm9tO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIGlvbi1mYWItYnV0dG9ue1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjM0Q1QTY4O1xuICAgICAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6ICAzNXB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC50b3B7XG4gICAgICAgIFxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzIDogMTVweCA7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzIDoxNXB4ICA7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHggIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1zaXplOiA1cHggIWltcG9ydGFudDtcbiAgICAgICAgICBjb2xvcjogIzNENUE2ODtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojQjJDNENDIDtcbiAgICAgICAgaW9uLWNvbHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCAjRTZFNkU2ICFpbXBvcnRhbnQ7XG4gICAgICAgICBcbiAgICAgICAgIFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICBcbiAgaW9uLWNvbHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U2RTZFNjtcbiAgICBcbiAgICAgIGNvbG9yOiAjM0Q1QTY4O1xuICAgICAgZm9udC1mYW1pbHk6IGFjcm9tO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiBcbiAgICAgIFxuICB9XG4gIC5lZGl0e1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgaW9uLWljb257XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgIH1cbiAgfVxuICAgXG4gIFxuICAgIFxuICAgIFxuICAgIC5hY3RpdmV7XG4gICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkO1xuICAgICAgY29sb3I6ICMzRDVBNjg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIFxuICAgICAgaW9uLWljb257XG4gICAgICAgIGNvbG9yOiAjM0Q1QTY4O1xuICBcbiAgICAgIH1cbiAgXG4gICAgfVxuICB9XG59XG4gIGlvbi1mb290ZXJ7XG4gIFxuICAgIC0tYmFja2dyb3VuZCA6ICMzRDVBNjg7XG4gICAgaW9uLXRvb2xiYXJ7XG4gICAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgICAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gICAgICAtLWJhY2tncm91bmQ6IzNENUE2ODtcbiAgICB9XG4gICAgXG4gICAgLnFye1xuICAgICAgY29sb3I6I0ZGRkZGRiA7XG4gICAgICB3aWR0aDogMTBweCAhaW1wb3J0YW50O1xuICAgICAgZm9udC1mYW1pbHk6IGFjcm9tO1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIH1cbiAgIFxuICBcbiAgICBpb24tZmFiLWJ1dHRvbntcbiAgXG4gICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgXG4gICAgIGJvcmRlcjogM3B4IHNvbGlkICMzNDRDNTc7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggICM2NjgzOTE7XG4gICAgICAtLWJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KCNGRkI3MDEsI0ZGOTMwMik7XG4gICAgfVxuICB9Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_users_users_module_ts.js.map