import React from 'react';
import Cover from '../Cover';
import BodyComponent from '../BodyComponent';

class Home extends React.Component {
	render() {
		return (
			<div>
				<Cover/>
        <BodyComponent/>
			</div>
		);
	}
}

export default Home;
