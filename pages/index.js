import React, { Component } from 'react';
import withRedux from 'next-redux-wrapper';
import Home from 'pages/home';
import withLayout from 'hoc/withLayout';
import { compose } from 'recompose';
import initStore from 'store/createStore';

class Index extends Component {
	static async getInitialProps() {
		return {};
	}
	render() {
		return (
			<div>
				<Home />
			</div>
		);
	}
}

export default compose(
  withRedux(initStore),
  withLayout
)(Index);
