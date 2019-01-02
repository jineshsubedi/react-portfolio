import React, { Component } from 'react';
import { Chip } from 'react-mdl';

class Skill extends Component {
	constructor(props) {
		super(props);
	}
	render(){
		const skills = this.props.skills;
		console.log(skills)
		const listSkills = skills.map((skill) =>
		  <li key={skill.toString()}>
		    <Chip>{skill}</Chip>
		  </li>
		);

		return(
				<div className="container text-center">
					<div className=""><h3>Skills</h3></div>
					<div className="row">
						<div className="col-md-10">
							<div className="list-skill">
								{listSkills}
							</div>
						</div>
					</div>
				</div>
			);
	}
}
export default Skill;