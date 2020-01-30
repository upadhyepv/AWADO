(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title slot=\"start\">\r\n      Home\r\n    </ion-title>\r\n    <ion-item class=\"checkbox-wrapper\">\r\n        <!--ion-checkbox class=\"checkbox\" [(ngModel)]=\"is3DChecked\" (click)=\"toggle3DMaps()\"></ion-checkbox-->\r\n        <ion-label class=\"text\" (click)=\"enable3DMaps()\">3D</ion-label>\r\n      </ion-item>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div #mapElement2d style=\"width: 100%; height: 100%\" id=\"mapContainer\" *ngIf=\"!is3DChecked\"></div>\r\n  <div #mapElement3d style=\"width: 100%; height: 100%\" id=\"mapContainer\" *ngIf=\"is3DChecked\"></div>\r\n  <!--div #mapElement style=\"width: 100%; height: 100%\" id=\"mapContainer\"></div-->\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <div class=\"bike-list-container\">\r\n    <ion-icon class=\"bike-list-expander\" name=\"arrow-dropup-circle\" (click)=\"expandBikeList()\"></ion-icon>\r\n    <div class=\"bike-container\" *ngFor=\"let i of tempArr\">\r\n      <div class=\"bike-name\">\r\n        Bike 1\r\n      </div>\r\n      <div class=\"battery-info\">\r\n        <div><ion-icon class=\"battery-icon\" name=\"battery-charging\"></ion-icon></div>\r\n        <div>100%</div>\r\n      </div>\r\n      <div class=\"address-info\">\r\n        <div class=\"disance\">56m</div>\r\n        <div class=\"address\">Schllingstrasse 129</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\nion-footer {\n  overflow-y: auto;\n  padding-top: 30px;\n}\n\n.bike-list-container {\n  position: relative;\n}\n\n.bike-list-container .bike-list-expander {\n  position: absolute;\n  font-size: 32px;\n  color: gray;\n  z-index: 200;\n  left: 46%;\n  top: -32px;\n}\n\n.bike-container {\n  height: 60px;\n  width: 100%;\n  border: 1px solid #aaaaaa;\n  border-radius: 5px;\n  box-sizing: border-box;\n  float: left;\n  width: 100%;\n  clear: both;\n}\n\n.bike-container div {\n  height: inherit;\n  float: left;\n}\n\n.bike-name, .battery-info {\n  height: inherit;\n  line-height: 45px;\n}\n\n.battery-info {\n  width: 20%;\n}\n\n.bike-name {\n  width: 30% !important;\n  line-height: 60px;\n  padding-left: 10px;\n}\n\n.battery-info {\n  line-height: 60px;\n}\n\n.battery-info div {\n  float: left;\n}\n\n.battery-icon {\n  font-size: 20px;\n}\n\n.address-info {\n  float: right !important;\n  width: 50% !important;\n  font-size: 14px;\n  text-align: right;\n  padding-right: 10px;\n}\n\n.address-info div {\n  width: 100%;\n}\n\n.address-info .disance {\n  height: 20px;\n  line-height: 20px;\n}\n\n.address-info .address {\n  height: 40px;\n  padding-top: 10px;\n}\n\n.checkbox-wrapper {\n  text-align: right;\n  float: right;\n}\n\n.checkbox-wrapper ion-label {\n  margin-left: 5px;\n}\n\n.mapContainer {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXFByaXlhbmthXFxEb2N1bWVudHNcXGhmdF9hd2Fkb19hcHAvc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURDRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNDSjs7QURHQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FDQUo7O0FERUU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ0FKOztBRElBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDREY7O0FESUE7RUFDRSxVQUFBO0FDREY7O0FESUE7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURJQTtFQUNFLGlCQUFBO0FDREY7O0FER0U7RUFDRSxXQUFBO0FDREo7O0FESUE7RUFDRSxlQUFBO0FDREY7O0FESUE7RUFDRSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNERjs7QURHRTtFQUNFLFdBQUE7QUNESjs7QURJRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQ0ZKOztBREtFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FDSEo7O0FET0E7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUNKRjs7QURLRTtFQUNFLGdCQUFBO0FDSEo7O0FET0E7RUFDRSx1QkFBQTtBQ0pGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcclxuICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbmlvbi1mb290ZXJ7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxufVxyXG5cclxuLmJpa2UtbGlzdC1jb250YWluZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAuYmlrZS1saXN0LWV4cGFuZGVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICB6LWluZGV4OiAyMDA7XHJcbiAgICBsZWZ0OiA0NiU7XHJcbiAgICB0b3A6IC0zMnB4O1xyXG4gIH1cclxufVxyXG5cclxuLmJpa2UtY29udGFpbmVye1xyXG4gIGhlaWdodDogNjBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYWFhYWFhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjbGVhcjogYm90aDtcclxuXHJcbiAgZGl2IHtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxufVxyXG5cclxuLmJpa2UtbmFtZSwgLmJhdHRlcnktaW5mb3tcclxuICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbn1cclxuXHJcbi5iYXR0ZXJ5LWluZm97XHJcbiAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuLmJpa2UtbmFtZXtcclxuICB3aWR0aDogMzAlIWltcG9ydGFudDtcclxuICBsaW5lLWhlaWdodDogNjBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5iYXR0ZXJ5LWluZm97XHJcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcblxyXG4gIGRpdntcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxufVxyXG4uYmF0dGVyeS1pY29ue1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmFkZHJlc3MtaW5mb3tcclxuICBmbG9hdDogcmlnaHQhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiA1MCUhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG5cclxuICBkaXZ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5kaXNhbmNle1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuYWRkcmVzc3tcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmNoZWNrYm94LXdyYXBwZXJ7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGlvbi1sYWJlbHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubWFwQ29udGFpbmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbiIsIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuaW9uLWZvb3RlciB7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuXG4uYmlrZS1saXN0LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5iaWtlLWxpc3QtY29udGFpbmVyIC5iaWtlLWxpc3QtZXhwYW5kZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgY29sb3I6IGdyYXk7XG4gIHotaW5kZXg6IDIwMDtcbiAgbGVmdDogNDYlO1xuICB0b3A6IC0zMnB4O1xufVxuXG4uYmlrZS1jb250YWluZXIge1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYWFhYWFhO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgY2xlYXI6IGJvdGg7XG59XG4uYmlrZS1jb250YWluZXIgZGl2IHtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmJpa2UtbmFtZSwgLmJhdHRlcnktaW5mbyB7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XG59XG5cbi5iYXR0ZXJ5LWluZm8ge1xuICB3aWR0aDogMjAlO1xufVxuXG4uYmlrZS1uYW1lIHtcbiAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uYmF0dGVyeS1pbmZvIHtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG59XG4uYmF0dGVyeS1pbmZvIGRpdiB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uYmF0dGVyeS1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uYWRkcmVzcy1pbmZvIHtcbiAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbi5hZGRyZXNzLWluZm8gZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYWRkcmVzcy1pbmZvIC5kaXNhbmNlIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbi5hZGRyZXNzLWluZm8gLmFkZHJlc3Mge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4uY2hlY2tib3gtd3JhcHBlciB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmbG9hdDogcmlnaHQ7XG59XG4uY2hlY2tib3gtd3JhcHBlciBpb24tbGFiZWwge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4ubWFwQ29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");



var HomePage = /** @class */ (function () {
    //@ViewChild("mapElement", { static: false })
    //public mapElement: ElementRef;
    function HomePage(geolocation) {
        this.geolocation = geolocation;
        this.currentLocation = { lat: 0, lng: 0 };
        this.is3DChecked = false;
        this.tempArr = [1, 2];
        this.locationArr = [{ lat: 48.778409, lng: 9.179252 },
            { lat: 48.780926, lng: 9.173456 },
            { lat: 48.775174, lng: 9.175459 },
            { lat: 48.793704, lng: 9.191112 }];
        this.platform = new H.service.Platform({
            'apikey': 'tiVTgBnPbgV1spie5U2MSy-obhD9r2sGiOCbBzFY2_k'
        });
    }
    HomePage.prototype.ngOnInit = function () { };
    HomePage.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.loadmap("2D");
        }, 1000);
        window.addEventListener('resize', function () { return _this.map.getViewPort().resize(); });
    };
    HomePage.prototype.loadmap = function (style) {
        // Obtain the default map types from the platform object
        var mapStyle = "raster";
        var mapElement = "mapElement2d";
        if (style === "3D") {
            mapStyle = "vector";
            mapElement = "mapElement3d";
        }
        var defaultLayers = this.platform.createDefaultLayers();
        this.map = new H.Map(this[mapElement].nativeElement, defaultLayers[mapStyle].normal.map, {
            zoom: 17,
            pixelRatio: window.devicePixelRatio || 1
        });
        var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));
        var ui = H.ui.UI.createDefault(this.map, defaultLayers);
        ui.removeControl("mapsettings");
        // create custom one
        var ms = new H.ui.MapSettingsControl({
            baseLayers: [{
                    label: "3D", layer: defaultLayers.vector.normal.map
                }, {
                    label: "Normal", layer: defaultLayers.raster.normal.map
                }, {
                    label: "Satellite", layer: defaultLayers.raster.satellite.map
                }, {
                    label: "Terrain", layer: defaultLayers.raster.terrain.map
                }
            ],
            layers: [{
                    label: "layer.traffic", layer: defaultLayers.vector.normal.traffic
                },
                {
                    label: "layer.incidents", layer: defaultLayers.vector.normal.trafficincidents
                }
            ]
        });
        ui.addControl("customized", ms);
        var mapSettings = ui.getControl('customized');
        var zoom = ui.getControl('zoom');
        mapSettings.setAlignment('top-right');
        zoom.setAlignment('left-top');
        if (style === "3D") {
            this.map.getViewModel().setLookAtData({ tilt: 60 });
        }
        this.getLocation(this.map);
        var img = ['../../../assets/images/ic_high.png', '../../../assets/images/ic_medium.png', '../../../assets/images/ic_low.png'];
        for (var i = 0; i < this.locationArr.length; i++) {
            this.addMarker(this.locationArr[i].lat, this.locationArr[i].lng, img[i % 3]);
        }
    };
    HomePage.prototype.getLocation = function (map) {
        var _this = this;
        this.geolocation.getCurrentPosition({
            maximumAge: 1000, timeout: 5000,
            enableHighAccuracy: true
        }).then(function (resp) {
            var lat = resp.coords.latitude;
            var lng = resp.coords.longitude;
            _this.currentLocation.lat = resp.coords.latitude;
            _this.currentLocation.lng = resp.coords.longitude;
            _this.moveMapToGiven(map, lat, lng);
        }, function (er) {
            alert('Can not retrieve Location');
        }).catch(function (error) {
            alert('Error getting location - ' + JSON.stringify(error));
        });
    };
    HomePage.prototype.moveMapToGiven = function (map, lat, lng) {
        var icon = new H.map.Icon('../../../assets/images/icon_map_currentLocation.png');
        // Create a marker using the previously instantiated icon:
        var marker = new H.map.Marker({ lat: lat, lng: lng }, { icon: icon });
        // Add the marker to the map:
        map.addObject(marker);
        map.setCenter({ lat: lat, lng: lng });
    };
    HomePage.prototype.expandBikeList = function () {
        for (var i = 0; i < 20; i++) {
            this.tempArr.push(i + 3);
        }
    };
    HomePage.prototype.addMarker = function (lat, lng, img) {
        var icon = new H.map.Icon(img);
        // Create a marker using the previously instantiated icon:
        var marker = new H.map.Marker({ lat: lat, lng: lng }, { icon: icon });
        // Add the marker to the map:
        this.map.addObject(marker);
    };
    HomePage.prototype.toggle3DMaps = function () {
        var _this = this;
        console.log(this.is3DChecked);
        if (!this.is3DChecked) {
            setTimeout(function () {
                _this.loadmap("3D");
            }, 1000);
        }
    };
    HomePage.prototype.enable3DMaps = function () {
        var _this = this;
        this.is3DChecked = true;
        setTimeout(function () {
            _this.loadmap("3D");
        }, 100);
    };
    HomePage.ctorParameters = function () { return [
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("mapElement2d", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HomePage.prototype, "mapElement2d", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("mapElement3d", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HomePage.prototype, "mapElement3d", void 0);
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map