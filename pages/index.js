import 'isomorphic-fetch';
import withRedux from 'next-redux-wrapper';

import Fork from '../components/Fork';
import Todo from '../components/Todo';
import Home from 'pages/home';
import withLayout from 'hoc/withLayout';

import initStore from 'store/createStore';

class Index extends React.Component {
	static async getInitialProps({ store }) {
		// Adding a default/initialState can be done as follows:
		// store.dispatch({ type: 'ADD_TODO', text: 'It works!' });
		const res = await fetch(
			'https://api.github.com/repos/ooade/NextSimpleStarter'
		);
		const json = await res.json();
		return { stars: json.stargazers_count };
	}

	render() {
    const { stars } = this.props;
    console.log(this.props);
		return (
			<div>
				<Home />
			</div>
		);
	}
}

export default withRedux(initStore)(Index);
