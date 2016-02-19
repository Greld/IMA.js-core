import ns from 'imajs/client/core/namespace';
import ControllerInterface from 'imajs/client/core/interface/controller';

ns.namespace('Core.Decorator');

/**
 * Decorator for page controllers. The decorator manages references to the meta
 * attributes manager and other utilities to provide them to the decorated page
 * controller.
 *
 * @class Controller
 * @implements Core.Interface.Controller
 * @namespace Core.Decorator
 * @module Core
 * @submodule Core.Decorator
 */
export default class Controller extends ControllerInterface {

	/**
	 * Initializes the controller decorator.
	 *
	 * @method constructor
	 * @constructor
	 * @param {Core.Interface.Controller} controller The actual controller
	 *        being decorated.
	 * @param {Core.Interface.MetaManager} metaManager meta attributes manager.
	 * @param {Core.Interface.Router} router The application router.
	 * @param {Core.Interface.Dictionary} dictionary Localization phrases
	 *        dictionary.
	 * @param {Object<string, *>} settings  Application settings for the
	 *        current application environment.
	 */
	constructor(controller, metaManager, router, dictionary, settings) {
		super();

		/**
		 * The actual controller being decorated.
		 *
		 * @property _controller
		 * @private
		 * @type {Core.Interface.Controller}
		 */
		this._controller = controller;

		/**
		 * Meta attributes manager.
		 *
		 * @property _metaManager
		 * @private
		 * @type {Core.Interface.MetaManager}
		 */
		this._metaManager = metaManager;

		/**
		 * The application router.
		 *
		 * @property _router
		 * @private
		 * @type {Core.Interface.Router}
		 */
		this._router = router;

		/**
		 * Localization phrases dictionary.
		 *
		 * @property _dictionary
		 * @private
		 * @type {Core.Interface.Dictionary}
		 */
		this._dictionary = dictionary;

		/**
		 * Application settings for the current application environment.
		 *
		 * @property _setting
		 * @private
		 * @type {Object<string, *>}
		 */
		this._settings = settings;
	}

	/**
	 * Callback for initializing the controller with the route parameters.
	 *
	 * @inheritdoc
	 * @method init
	 */
	init() {
		this._controller.init();
	}

	/**
	 * @inheritdoc
	 * @method destroy
	 */
	destroy() {
		this._controller.destroy();
	}

	/**
	 * @inheritdoc
	 * @method activate
	 */
	activate() {
		this._controller.activate();
	}

	/**
	 * @inheritdoc
	 * @method deactivate
	 */
	deactivate() {
		this._controller.deactivate();
	}

	/**
	 * @inheritdoc
	 * @method load
	 */
	load() {
		return this._controller.load();
	}

	/**
	 * @inheritdoc
	 * @method update
	 */
	update(params = {}) {
		return this._controller.update(params);
	}

	/**
	 * @inheritdoc
	 * @method setReactiveView
	 */
	setReactiveView(reactiveView) {
		this._controller.setReactiveView(reactiveView);
	}

	/**
	 * @inheritdoc
	 * @method setState
	 */
	setState(statePatch) {
		this._controller.setState(statePatch);
	}

	/**
	 * @inheritdoc
	 * @method getState
	 */
	getState() {
		return this._controller.getState();
	}

	/**
	 * @inheritdoc
	 * @method addExtension
	 */
	addExtension(extension) {
		this._controller.addExtension(extension);

		return this;
	}

	/**
	 * @inheritdoc
	 * @method getExtensions
	 */
	getExtensions() {
		return this._controller.getExtensions();
	}

	/**
	 * @inheritdoc
	 * @method setMetaParams
	 */
	setMetaParams(loadedResources, metaManager, router, dictionary, settings) {
		this._controller.setMetaParams(
			loadedResources,
			this._metaManager,
			this._router,
			this._dictionary,
			this._settings
		);
	}

	/**
	 * @inheritdoc
	 * @method setRouteParams
	 */
	setRouteParams(params = {}) {
		this._controller.setRouteParams(params);
	}

	/**
	 * @inheritdoc
	 * @method getRouteParams
	 */
	getRouteParams() {
		return this._controller.getRouteParams();
	}

	/**
	 * @inheritdoc
	 * @method setPageStateManager
	 */
	setPageStateManager(pageStateManager) {
		this._controller.setPageStateManager(pageStateManager);
	}

	/**
	 * @inheritdoc
	 * @method getHttpStatus
	 */
	getHttpStatus() {
		return this._controller.getHttpStatus();
	}

	/**
	 * Returns the meta attributes manager to configured by this controller.
	 *
	 * @method getMetaManager
	 * @return {Core.Interface.MetaManager} meta attributes manager to
	 *         configured by this controller.
	 */
	getMetaManager() {
		return this._metaManager;
	}
}

ns.Core.Decorator.Controller = Controller;