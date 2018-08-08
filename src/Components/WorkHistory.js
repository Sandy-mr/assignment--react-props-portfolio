import React from 'react';
import Job from './Job';
import {jobsList} from '../data/datasource';

class WorkHistory extends React.Component{
    render(){
        return(
            <section>
                <h4>Work Experience</h4>
                <div className="job-timeline">
                {jobsList.map(function(Jobl){
                        return <Job data={Jobl} />

                      }) }
                      </div>
                        </section>
        );
    }
}

export default WorkHistory;
