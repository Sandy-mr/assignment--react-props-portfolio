
import React from 'react';
import Skill from './Skills.js';
import {skills} from '../data/datasource.js';

class SkillList extends React.Component {
	render(){
		return (
	        <section>
	          <h4>Skills</h4>
	          <div className="skills-list">
	             {skills.map(function(skill){
	                return <Skill data={ skill } />
	             })}
	          </div>
	        </section>
		);
	}
}

export default SkillList;
