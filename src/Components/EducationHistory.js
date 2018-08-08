
import React from 'react';
import {eduList} from '../data/datasource.js';
import EduTitle from './EduTitle';


class EducationHistory extends React.Component{
  render(){
    return(
      <section>
        <h4>Education</h4>

        <div className="degree-list">
        { eduList.map(function( dl ) {
                  return <EduTitle data={ dl } />
                }) }
          </div>

      </section>
    );
  }
}

export default EducationHistory;
