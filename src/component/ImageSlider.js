import React, { Component } from 'react';
import Image from '../image/banner.jpg';


class About extends Component {
	render(){
		return(

<div className="container-fluid">
	<div className="row">
		<div className="col-md-12">
			<div className="banner">
				<img src={Image} alt="banner image"/>
				<div className="banner-text">
					<h3>Welcome to my site</h3>
					<p>This site has all you need to get start on React Project!</p>
				</div>
			</div>
		</div>
	</div>
</div>

		);
	}
}

export default About;