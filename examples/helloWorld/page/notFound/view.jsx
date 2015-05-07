import ns from 'imajs/client/core/namespace.js';
import bootstrap from 'imajs/client/core/bootstrap.js';

bootstrap.addComponent((utils) => {

	ns.namespace('App.Page.NotFound');

	/**
	 * Master Layout.
	 * @class View
	 * @namespace App.Component.Layout.Master
	 * @module App
	 * @submodule Component
	 */
	class View extends React.Component {

		constructor(props) {
			super(props);

			this.state = props;
		}

		render() {
			return (
				<div className='l-not-found'>
					<h1>404 - Not Found</h1>
				</div>
			);
		}
	}

	ns.App.Page.NotFound.View = View;
});
