import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';


class Service extends Component {
	constructor() {
		super();
		this.state = {
			service1_title: 'Web Developer',
			service1_text: 'A key player in web development and responsible for all logical operations.',
			service2_title: 'Web Hosting',
			service2_text: 'A key player in web development and responsible for all logical operations.',
			service3_title: 'Page Boost',
			service3_text: 'A key player in web development and responsible for all logical operations.',
			button_text: 'Get Started'
		};
	}
	render(){
		return(
<div className="container">
	<div className="text-center"><h3>Service</h3></div>
	<div className="row">
		<div className="col-md-4">
			<Card shadow={0}>
			    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>{this.state.service1_title}</CardTitle>
			    <CardText>
			        {this.state.service1_text}
			    </CardText>
			    <CardActions border>
			        <Button colored>{this.state.button_text}</Button>
			    </CardActions>
			</Card>
		</div>
		<div className="col-md-4">
			<Card shadow={0}>
			    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>{this.state.service2_title}</CardTitle>
			    <CardText>
			        {this.state.service2_text}
			    </CardText>
			    <CardActions border>
			        <Button colored>{this.state.button_text}</Button>
			    </CardActions>
			</Card>
		</div>
		<div className="col-md-4">
			<Card shadow={0}>
			    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>{this.state.service3_title}</CardTitle>
			    <CardText>
			        {this.state.service3_text}
			    </CardText>
			    <CardActions border>
			        <Button colored>{this.state.button_text}</Button>
			    </CardActions>
			</Card>
		</div>
	</div>
</div>
		);
	}
}
export default Service;