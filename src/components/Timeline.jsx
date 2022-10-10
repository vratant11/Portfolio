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
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="02/01/22 - 05/01/22"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">To-do List</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="08/01/22 - 20/01/22"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Weather-App</h3>
    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="22/01/22 - 10/02/22"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Authentication-App</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="07/04/22-01/05/22"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Render-Form</h3>
    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
    <p>
      Strategy, Social Media
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="01/06/22-18/09/22"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Csi-Test-Portal</h3>
    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
    <p>
      Creative Direction, User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="01/09/22 - 15/09/22"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Cine-Registration Form</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <p>
      Creative Direction, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="17/08/22 - 30/08/22"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">E-Commerce-website-using-REDUX</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <p>
      Creative Direction, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="01/09/22 - 10/09/22"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">CRUD-Using-Redux-Toolkit</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <p>
      Creative Direction, Visual Design
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