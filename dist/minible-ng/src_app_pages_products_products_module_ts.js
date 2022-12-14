"use strict";
(self["webpackChunkminible_ng"] = self["webpackChunkminible_ng"] || []).push([["src_app_pages_products_products_module_ts"],{

/***/ 27969:
/*!*********************************************************************!*\
  !*** ./src/app/pages/products/add-product/add-product.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddProductComponent": () => (/* binding */ AddProductComponent)
/* harmony export */ });
/* harmony import */ var src_models_accesorio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/models/accesorio */ 77044);
/* harmony import */ var src_models_lunas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/lunas */ 34976);
/* harmony import */ var src_models_monturas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/monturas */ 43514);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/productos.service */ 91917);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 28267);









function AddProductComponent_ng_template_12_ng_template_0_Template(rf, ctx) { }
function AddProductComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](0, AddProductComponent_ng_template_12_ng_template_0_Template, 0, 0, "ng-template", 18);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????reference"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngTemplateOutlet", _r4);
} }
function AddProductComponent_ng_template_18_ng_template_0_Template(rf, ctx) { }
function AddProductComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](0, AddProductComponent_ng_template_18_ng_template_0_Template, 0, 0, "ng-template", 18);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????reference"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngTemplateOutlet", _r6);
} }
function AddProductComponent_ng_template_24_ng_template_0_Template(rf, ctx) { }
function AddProductComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](0, AddProductComponent_ng_template_24_ng_template_0_Template, 0, 0, "ng-template", 18);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????reference"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngTemplateOutlet", _r8);
} }
function AddProductComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "form", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("ngSubmit", function AddProductComponent_ng_template_26_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r13.saveEvent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](7, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](8, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](9, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](11, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](12, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](13, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](14, "Material");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](15, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](16, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](17, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](18, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](19, "Marca");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](20, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](21, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](22, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](23, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](24, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](25, "C\u00F3digo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](26, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](27, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](28, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](29, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](30, "C\u00F3digo Interno");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](31, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](32, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](33, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](34, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](35, "Talla");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](36, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](37, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](38, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](39, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](40, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](41, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](42, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](43, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](44, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](45, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](46, "Precio de Compra");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](47, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](48, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](49, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](50, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](51, "Precio de Venta");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](52, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](53, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](54, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AddProductComponent_ng_template_26_Template_button_click_54_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r15.guardarMonturas(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](55, " Registrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("formGroup", ctx_r5.formMonturas);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????propertyInterpolate"]("formControlName", ctx_r5.fecha_registro_montura);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????propertyInterpolate"]("formControlName", ctx_r5.material_montura);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????propertyInterpolate"]("formControlName", ctx_r5.marca_montura);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????propertyInterpolate"]("formControlName", ctx_r5.codigo_montura);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????propertyInterpolate"]("formControlName", ctx_r5.codigo_interno_montura);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????propertyInterpolate"]("formControlName", ctx_r5.talla_montura);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????propertyInterpolate"]("formControlName", ctx_r5.cantidad_montura);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????propertyInterpolate"]("formControlName", ctx_r5.precio_compra_montura);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????propertyInterpolate"]("formControlName", ctx_r5.precio_venta_montura);
} }
function AddProductComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "form", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("ngSubmit", function AddProductComponent_ng_template_28_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r16.saveEvent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](7, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](8, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](9, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](11, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](12, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](13, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](14, "Material");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](15, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](16, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](17, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](18, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](19, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](20, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](21, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](22, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](23, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](24, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](25, "Precio de Compra");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](26, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](27, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](28, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](29, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](30, "Precio de Venta");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](31, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](32, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](33, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AddProductComponent_ng_template_28_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r18.guardarLunas(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](34, " Registrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("formGroup", ctx_r7.formLunas);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????propertyInterpolate"]("formControlName", ctx_r7.fecha_registro_luna);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????propertyInterpolate"]("formControlName", ctx_r7.material_luna);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????propertyInterpolate"]("formControlName", ctx_r7.cantidad_luna);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????propertyInterpolate"]("formControlName", ctx_r7.precio_compra_luna);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????propertyInterpolate"]("formControlName", ctx_r7.precio_venta_luna);
} }
function AddProductComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "form", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("ngSubmit", function AddProductComponent_ng_template_30_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r19.saveEvent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](7, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](8, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](9, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](11, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](12, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](13, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](14, "Nombre del Accesorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](15, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](16, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](17, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](18, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](19, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](20, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](21, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](22, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](23, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](24, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](25, "Precio de Compra");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](26, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](27, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](28, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](29, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](30, "Precio de Venta");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](31, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](32, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](33, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AddProductComponent_ng_template_30_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r21.guardarAccesorios(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](34, " Registrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("formGroup", ctx_r9.formAccesorios);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????propertyInterpolate"]("formControlName", ctx_r9.fecha_registro_accesorio);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????propertyInterpolate"]("formControlName", ctx_r9.nombre_accesorio);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????propertyInterpolate"]("formControlName", ctx_r9.cantidad_accesorio);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????propertyInterpolate"]("formControlName", ctx_r9.precio_compra_accesorio);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????propertyInterpolate"]("formControlName", ctx_r9.precio_venta_accesorio);
} }
class AddProductComponent {
    constructor(fb, productosService) {
        this.fb = fb;
        this.productosService = productosService;
        this.submitted = false;
        this.material_montura = "campoMaterialMontura";
        this.marca_montura = "campoMarcaMontura";
        this.talla_montura = "campoTallaMontura";
        this.codigo_montura = "campoCodigoMontura";
        this.codigo_interno_montura = "campoInternoMontura";
        this.cantidad_montura = "campoCantidadMontura";
        this.precio_compra_montura = "campoCompraMontura";
        this.precio_venta_montura = "campoVentaMontura";
        this.fecha_registro_montura = "campoFechaRegistroMontura";
        this.fecha_modificacion_montura = "campoFechaModificacionMontura";
        this.material_luna = "campoMaterialLuna";
        this.cantidad_luna = "campoCantidadLuna";
        this.precio_compra_luna = "campoCompraLuna";
        this.precio_venta_luna = "campoVentaLuna";
        this.fecha_registro_luna = "campoFechaRegistroLuna";
        this.fecha_modificacion_luna = "campoFechaModificacionLuna";
        this.nombre_accesorio = "campoNombreAccesorio";
        this.cantidad_accesorio = "campoCantidadAccesorio";
        this.precio_compra_accesorio = "campoCompraAccesorio";
        this.precio_venta_accesorio = "campoVentaAccesorio";
        this.fecha_registro_accesorio = "campoFechaRegistroAccesorio";
        this.fecha_modificacion_accesorio = "campoFechaModificacionAccesorio";
        this.lunas = new src_models_lunas__WEBPACK_IMPORTED_MODULE_1__.LunasModel;
        this.monturas = new src_models_monturas__WEBPACK_IMPORTED_MODULE_2__.MonturasModel;
        this.accesorios = new src_models_accesorio__WEBPACK_IMPORTED_MODULE_0__.AccesorioModel;
    }
    ngOnInit() {
        this.crearFormulario();
    }
    crearFormulario() {
        this.formMonturas = this.fb.group({
            [this.material_montura]: [],
            [this.marca_montura]: [],
            [this.talla_montura]: [],
            [this.codigo_montura]: [],
            [this.codigo_interno_montura]: [],
            [this.cantidad_montura]: [],
            [this.precio_compra_montura]: [],
            [this.precio_venta_montura]: [],
            [this.fecha_registro_montura]: [],
            [this.fecha_modificacion_montura]: [],
        });
        this.formLunas = this.fb.group({
            [this.material_luna]: [],
            [this.cantidad_luna]: [],
            [this.precio_compra_luna]: [],
            [this.precio_venta_luna]: [],
            [this.fecha_registro_luna]: [],
            [this.fecha_modificacion_luna]: [],
        });
        this.formAccesorios = this.fb.group({
            [this.nombre_accesorio]: [],
            [this.cantidad_accesorio]: [],
            [this.precio_compra_accesorio]: [],
            [this.precio_venta_accesorio]: [],
            [this.fecha_registro_accesorio]: [],
            [this.fecha_modificacion_accesorio]: [],
        });
    }
    /**
     * Save the event
     */
    saveEvent() {
        if (this.formMonturas.valid) {
        }
        this.submitted = true;
    }
    fA(campo) {
        return this.formAccesorios.get(campo);
    }
    fL(campo) {
        return this.formLunas.get(campo);
    }
    fM(campo) {
        return this.formMonturas.get(campo);
    }
    guardarAccesorios() {
        if (this.formAccesorios.valid) {
            this.accesorios.nombre_accesorio = this.fA(this.nombre_accesorio).value;
            this.accesorios.cantidad = Number(this.fA(this.cantidad_accesorio).value);
            this.accesorios.fecha_creacion_accesorio = new Date();
            this.accesorios.precio_accesorio_v = Number(this.fA(this.precio_venta_accesorio).value);
            this.accesorios.precio_accesorio_c = Number(this.fA(this.precio_compra_accesorio).value);
            this.accesorios.fecha_modificacion_accesorio = new Date();
            this.accesorios.id_sede = "por confirmar";
            this.accesorios.habilitado = true;
            this.accesorios.tipo = "accesorio";
            console.log(this.accesorios);
            this.productosService.createAccesorios(this.accesorios).subscribe(res => {
                console.log("accesorio guardado");
            });
        }
        else {
        }
    }
    guardarLunas() {
        if (this.formLunas.valid) {
            this.lunas.material = this.fL(this.material_luna).value;
            this.lunas.precio_luna_c = Number(this.fL(this.precio_compra_luna).value);
            this.lunas.precio_luna_v = Number(this.fL(this.precio_venta_luna).value);
            this.lunas.fecha_creacion_luna = new Date();
            this.lunas.fecha_modificacion_luna = new Date();
            this.lunas.cantidad = Number(this.fL(this.cantidad_luna).value);
            this.lunas.id_sede = "por confirmar";
            this.lunas.habilitado = true;
            this.lunas.tipo = "luna";
            console.log(this.lunas);
            this.productosService.createLunas(this.lunas).subscribe(res => {
                console.log("lunas guardado");
            });
        }
        else {
        }
    }
    guardarMonturas() {
        if (this.formMonturas.valid) {
            this.monturas.material = this.fM(this.material_montura).value;
            this.monturas.marca = this.fM(this.marca_montura).value;
            this.monturas.talla = this.fM(this.talla_montura).value;
            this.monturas.codigo_interno = this.fM(this.codigo_interno_montura).value;
            this.monturas.codigo = this.fM(this.codigo_montura).value;
            this.monturas.precio_montura_c = Number(this.fM(this.precio_compra_montura).value);
            this.monturas.precio_montura_v = Number(this.fM(this.precio_venta_montura).value);
            this.monturas.fecha_creacion_monturas = new Date();
            this.monturas.fecha_modificacion_monturas = new Date();
            this.monturas.cantidad = Number(this.fM(this.cantidad_montura).value);
            this.monturas.id_sede = "por confirmar";
            this.monturas.habilitado = true;
            this.monturas.tipo = "montura";
            console.log(this.monturas);
            this.productosService.createMonturas(this.monturas).subscribe(res => {
                console.log("monturas guardado");
            });
        }
        else {
        }
    }
}
AddProductComponent.??fac = function AddProductComponent_Factory(t) { return new (t || AddProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_3__.ProductosService)); };
AddProductComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineComponent"]({ type: AddProductComponent, selectors: [["app-add-product"]], decls: 32, vars: 6, consts: [[1, "container-fluid"], ["title", "Registrar un Producto", 3, "breadcrumbItems"], [1, "row", "mb-4"], [1, "col-xl-12"], [1, "card", "mb-0"], ["ngbNav", "", 1, "nav", "nav-tabs", "nav-justified", "nav-tabs-custom", 3, "activeId"], ["justifiednav", "ngbNav"], [1, "nav-item", 3, "ngbNavItem"], ["ngbNavLink", "", 1, "nav-link"], [1, "uil", "uil-nerd", "font-size-20"], [1, "d-none", "d-sm-block"], ["ngbNavContent", ""], [1, "uil", "uil-panorama-h-alt", "font-size-20"], [1, "uil", "uil-box", "font-size-20"], [3, "ngbNavOutlet"], ["TabContentAbout", ""], ["TabContentTasks", ""], ["TabContentMessages", ""], [3, "ngTemplateOutlet"], [1, "tab-content", "p-4"], [1, "tab-pane", "active"], [3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-6"], [1, "mb-3"], [1, "control-label"], ["placeholder", "Seleccione la fecha", "type", "text", "name", "title", 1, "form-control", 3, "formControlName"], ["placeholder", "Material de la montura", "type", "text", "name", "title", 1, "form-control", 3, "formControlName"], ["placeholder", "Marca de la montura", "type", "text", "name", "title", 1, "form-control", 3, "formControlName"], [1, "col-4"], ["placeholder", "C\u00F3digo", "type", "text", "name", "title", 1, "form-control", 3, "formControlName"], ["placeholder", "Talla de la montura", "type", "text", "name", "title", 1, "form-control", 3, "formControlName"], ["placeholder", "Cantidad", "type", "text", "name", "title", 1, "form-control", 3, "formControlName"], ["placeholder", "Precio", "type", "text", "name", "title", 1, "form-control", 3, "formControlName"], [1, "text-end", "mt-2"], ["type", "submit", "id", "btn-save-event", 1, "btn", "btn-success", "ms-1", 3, "click"], [1, "col-12"], ["placeholder", "Material de la luna", "type", "text", "name", "title", 1, "form-control", 3, "formControlName"], ["placeholder", "Accesorio", "type", "text", "name", "accesorio", 1, "form-control", 3, "formControlName"], ["placeholder", "Cantidad", "type", "text", "name", "cantidad", 1, "form-control", 3, "formControlName"], ["placeholder", "Precio", "type", "text", "name", "accesorio_compra", 1, "form-control", 3, "formControlName"], ["placeholder", "Precio", "type", "text", "name", "accesorio_venta", 1, "form-control", 3, "formControlName"]], template: function AddProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "ul", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](7, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](9, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](10, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](11, "Montura");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](12, AddProductComponent_ng_template_12_Template, 1, 1, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](13, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](16, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](17, "Luna");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](18, AddProductComponent_ng_template_18_Template, 1, 1, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](19, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](20, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](21, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](22, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](23, "Accesorio");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](24, AddProductComponent_ng_template_24_Template, 1, 1, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](26, AddProductComponent_ng_template_26_Template, 56, 10, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_5__["????templateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](28, AddProductComponent_ng_template_28_Template, 35, 6, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_5__["????templateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](30, AddProductComponent_ng_template_30_Template, 35, 6, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_5__["????templateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????reference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("activeId", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngbNavItem", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngbNavItem", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngbNavItem", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngbNavOutlet", _r0);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_4__.PagetitleComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbNavOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtcHJvZHVjdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 82020:
/*!***********************************************************!*\
  !*** ./src/app/pages/products/products-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsRoutingModule": () => (/* binding */ ProductsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _accesorios_accesorios_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accesorios/accesorios.component */ 2101);
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-product/add-product.component */ 27969);
/* harmony import */ var _lunas_lunas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lunas/lunas.component */ 77153);
/* harmony import */ var _monturas_monturas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./monturas/monturas.component */ 86506);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);







const routes = [
    {
        path: 'addproducts',
        component: _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_1__.AddProductComponent
    },
    {
        path: 'accesorios',
        component: _accesorios_accesorios_component__WEBPACK_IMPORTED_MODULE_0__.AccesoriosComponent
    },
    {
        path: 'lunas',
        component: _lunas_lunas_component__WEBPACK_IMPORTED_MODULE_2__.LunasComponent
    },
    {
        path: 'monturas',
        component: _monturas_monturas_component__WEBPACK_IMPORTED_MODULE_3__.MonturasComponent
    }
];
class ProductsRoutingModule {
}
ProductsRoutingModule.??fac = function ProductsRoutingModule_Factory(t) { return new (t || ProductsRoutingModule)(); };
ProductsRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({ type: ProductsRoutingModule });
ProductsRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](ProductsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 47827:
/*!***************************************************!*\
  !*** ./src/app/pages/products/products.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsModule": () => (/* binding */ ProductsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-search-filter */ 24352);
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng5-slider */ 38391);
/* harmony import */ var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-dropzone-wrapper */ 68346);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 85362);
/* harmony import */ var src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/ui/ui.module */ 63091);
/* harmony import */ var _accesorios_accesorios_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accesorios/accesorios.component */ 2101);
/* harmony import */ var _accesorios_sortable_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accesorios/sortable.directive */ 42935);
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-product/add-product.component */ 27969);
/* harmony import */ var _lunas_lunas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lunas/lunas.component */ 77153);
/* harmony import */ var _monturas_monturas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./monturas/monturas.component */ 86506);
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./products-routing.module */ 82020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
















class ProductsModule {
}
ProductsModule.??fac = function ProductsModule_Factory(t) { return new (t || ProductsModule)(); };
ProductsModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["????defineNgModule"]({ type: ProductsModule });
ProductsModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["????defineInjector"]({ providers: [
        {
            provide: ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_10__.DROPZONE_CONFIG,
            useValue: rxjs__WEBPACK_IMPORTED_MODULE_11__.config
        }
    ], imports: [[
            _products_routing_module__WEBPACK_IMPORTED_MODULE_8__.ProductsRoutingModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__.Ng2SearchPipeModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbDropdownModule,
            ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_10__.DropzoneModule,
            src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_2__.UIModule,
            ng5_slider__WEBPACK_IMPORTED_MODULE_1__.Ng5SliderModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__.NgSelectModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbPaginationModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbTooltipModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbAccordionModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbTypeaheadModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbCollapseModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbNavModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["????setNgModuleScope"](ProductsModule, { declarations: [_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_5__.AddProductComponent, _lunas_lunas_component__WEBPACK_IMPORTED_MODULE_6__.LunasComponent, _monturas_monturas_component__WEBPACK_IMPORTED_MODULE_7__.MonturasComponent, _accesorios_accesorios_component__WEBPACK_IMPORTED_MODULE_3__.AccesoriosComponent, _accesorios_sortable_directive__WEBPACK_IMPORTED_MODULE_4__.NgbdSortableHeader], imports: [_products_routing_module__WEBPACK_IMPORTED_MODULE_8__.ProductsRoutingModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__.Ng2SearchPipeModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbDropdownModule,
        ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_10__.DropzoneModule,
        src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_2__.UIModule,
        ng5_slider__WEBPACK_IMPORTED_MODULE_1__.Ng5SliderModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__.NgSelectModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbPaginationModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbTooltipModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbAccordionModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbTypeaheadModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbCollapseModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbNavModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModule] }); })();


/***/ }),

/***/ 77044:
/*!*********************************!*\
  !*** ./src/models/accesorio.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccesorioModel": () => (/* binding */ AccesorioModel)
/* harmony export */ });
class AccesorioModel {
}


/***/ }),

/***/ 34976:
/*!*****************************!*\
  !*** ./src/models/lunas.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LunasModel": () => (/* binding */ LunasModel)
/* harmony export */ });
class LunasModel {
}


/***/ }),

/***/ 43514:
/*!********************************!*\
  !*** ./src/models/monturas.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonturasModel": () => (/* binding */ MonturasModel)
/* harmony export */ });
class MonturasModel {
}


/***/ })

}]);
//# sourceMappingURL=src_app_pages_products_products_module_ts.js.map