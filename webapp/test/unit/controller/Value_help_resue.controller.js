/*global QUnit*/

sap.ui.define([
	"value_help_resue/value_help_resue/controller/Value_help_resue.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Value_help_resue Controller");

	QUnit.test("I should test the Value_help_resue controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
