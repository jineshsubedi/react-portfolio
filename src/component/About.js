import React, { Component } from 'react';
import Image from '../image/about.jpg';

function formatGender(value) {
	if(value===true){
		return 'Male';
	}
		return 'Female';
}

class About extends Component {
	constructor(props){
			super(props);
		}

		componentDidMount(){
			console.log(this.props)
		}
	render(){
		// console.log(this.props)
		// var user = {
		// 	name: 'jinesh subedi',
		// 	email: 'jinesh1094@gmail.com',
		// 	address: 'kathmandu',
		// 	gender: true,
		// 	nationality: 'nepali',
		// 	occupation: 'student' 
		// };
		return(
			<div className="about-section">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<img src={Image} alt="user"/>
						</div>
						<div className="col-md-8">
							<p>
								Name:{this.props.name} <br/>
								Email: {this.props.email} <br/>
								Address: {this.props.address} <br/>
								gender: {formatGender(this.props.address)} <br/>
								Nationality: {this.props.nationality} <br/>
								Occupation: {this.props.occupation} <br/>
							</p>
						</div>
					</div>	
				</div>
			</div>
		);
	}
}

export default About;