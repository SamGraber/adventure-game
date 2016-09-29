/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
	var map = {
		// our app is within the source folder
		app: 'source',
		// other libraries
		'lodash': 'npm:lodash',
		'rxjs': 'npm:rxjs',
	};

	var angularPackageNames = [
		'core',
		'common',
		'compiler',
		'platform-browser',
		'platform-browser-dynamic',
		'http',
	];

	function setAngularPackage(packageName) {
		map[`@angular/${packageName}`] = `npm:@angular/${packageName}/bundles/${packageName}.umd.js`;
	}

	function setAngularTestingPackage(packageName) {
		map[`@angular/${packageName}/testing`] = `npm:@angular/${packageName}/bundles/${packageName}-testing.umd.js`;
	}

	angularPackageNames.forEach(setAngularPackage);
	angularPackageNames.forEach(setAngularTestingPackage);

	System.config({
		paths: {
			// paths serve as alias
			'npm:': 'node_modules/'
		},
		// map tells the System loader where to look for things
		map: map,
		// packages tells the System loader how to load when no filename and/or no extension
		packages: {
			app: {
				main: './main.js',
				defaultExtension: 'js'
			},
			lodash: { main: 'index.js' },
			rxjs: {
				defaultExtension: 'js'
			},
		}
	});

	shim('chai', window.chai);
	shim('sinon', window.sinon);

	function shim(library, global) {
		System.register(library, [], true, function() {
			return global;
		});
	}
})(this);
