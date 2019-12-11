import React from 'react';
import Cover from '../Cover';
import BodyComponent from '../BodyComponent';
import Header from '../Header';
import UploadImage from '../UploadImage';
class Home extends React.Component {
	render() {
		return (
			<div>
				<Header/>
			    <Cover/>
				<UploadImage/>
        		<BodyComponent/>
			</div>
		);
	}
}

export default Home;
