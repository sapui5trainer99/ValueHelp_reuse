/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"value_help_resue/value_help_resue/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
