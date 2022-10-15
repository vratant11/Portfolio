import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
  import SchoolIcon from "@mui/icons-material/School";
  import StarIcon from "@mui/icons-material/Star";
  import WorkIcon from "@mui/icons-material/Work";
import "./Timeline.css";
const Timeline = () => {
  return (
    <div className='Projects' >
    <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="28/12/21 - 30/12/21"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">College Website</h3>
    <br></br>
    <a href='https://timely-gecko-759900.netlify.app/'><h4 className="vertical-timeline-element-subtitle">View</h4></a>
    <br></br>
    <h4 className="vertical-timeline-element-subtitle">Skills:</h4>
    <p>
      HTML,CSS.
    </p>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="02/01/22 - 05/01/22"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">To-do List</h3>
    <br></br>
    <a href='https://team-csi-probation.github.io/Vratant_CSI_To-do_List/'><h4 className="vertical-timeline-element-subtitle">View</h4></a>
    <br></br>
    <h4 className="vertical-timeline-element-subtitle">Skills:</h4>
    <p>
      HTML,CSS,JAVASCRIPT.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="08/01/22 - 20/01/22"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Weather-App</h3>
    <br></br>
    <a href='https://csiakgecportal.netlify.app/'><h4 className="vertical-timeline-element-subtitle">View</h4></a>
    <br></br>
    <h4 className="vertical-timeline-element-subtitle">Skills:</h4>
    <p>
      HTML,CSS,REACT.JS.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="22/01/22 - 10/02/22"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Authentication-App</h3>
    <br></br>
    <a href='https://csiakgecportal.netlify.app/'><h4 className="vertical-timeline-element-subtitle">View</h4></a>
    <br></br>
    <h4 className="vertical-timeline-element-subtitle">Skills:</h4>
    <p>
      HTML,CSS,REACT.JS.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="07/04/22-01/05/22"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Render-Form</h3>
    <h4 className="vertical-timeline-element-subtitle">Team Project</h4>
    <br></br>
    <a href='https://csi-register.netlify.app/'><h4 className="vertical-timeline-element-subtitle">View</h4></a>

    <br></br>
    <h4 className="vertical-timeline-element-subtitle">Skills:</h4>
    <p>
      HTML,CSS,BOOTSTRAP,REACT.JS,MUI.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="01/06/22-18/09/22"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Csi-Test-Portal</h3>
    <h4 className="vertical-timeline-element-subtitle">Team Project</h4>
    <br></br>
    <a href='https://csiakgecportal.netlify.app/'><h4 className="vertical-timeline-element-subtitle">View</h4></a>

    <br></br>
    <h4 className="vertical-timeline-element-subtitle">Skills:</h4>

    <p>
      HTML,CSS,BOOTSTRAP,MUI,REACT.JS.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="01/09/22 - 15/09/22"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Cine-Registration Form</h3>
    <h4 className="vertical-timeline-element-subtitle">Team Project</h4>
    <br></br>
    <a href='http://recruitmentform.netlify.app/'><h4 className="vertical-timeline-element-subtitle">View</h4></a>
    <br></br>
    <h4 className="vertical-timeline-element-subtitle">Skills:</h4>

    <p>
      HTML,CSS,MUI,REACT.JS.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="17/08/22 - 30/08/22"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">E-Commerce-website-using-REDUX</h3>
    <br></br>
    <a href='https://myshope.netlify.app/'><h4 className="vertical-timeline-element-subtitle">View</h4></a>
    <br></br>
    <h4 className="vertical-timeline-element-subtitle">Skills:</h4>
    <p>
      HTML,CSS,REACT.JS,REDUX CORE,Semantic Ui.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="01/09/22 - 10/09/22"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">CRUD-Using-Redux-Toolkit</h3>
    <br></br>
    <a href='https://crudapplications.netlify.app/'><h4 className="vertical-timeline-element-subtitle">View</h4></a>
    <br></br>
    <h4 className="vertical-timeline-element-subtitle">Skills:</h4>
    <p>
      HTML,CSS,REACT.JS,REDUX ToolKit.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<StarIcon />}
  />
</VerticalTimeline>
</div>
  )
}

export default Timeline