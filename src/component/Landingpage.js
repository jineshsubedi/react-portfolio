import React, { Component } from 'react';
import ImageSlider from './ImageSlider';
import Service from './Service';
import Skill from './Skill';


const mySkills = ['Laravel','React' ,'Swagger', 'GitHub', 'HTML5', 'CSS3'];
class Landingpage extends Component {
	render(){
		return(
			<div>
				<ImageSlider/>
				<Service/>
				<Skill skills={mySkills}/>
			</div>
		);
	}
}
export default Landingpage;