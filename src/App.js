import React, { Component } from 'react';
import SkillList from './Components/SkillList';
import EducationHistory from './Components/EducationHistory';
import WorkHistory from './Components/WorkHistory';

class App extends Component {
  render() {
    return (
      <div id="app-container">
        <SkillList />
        <EducationHistory />
        <WorkHistory />
      </div>
   );
  }
}

export default App;
