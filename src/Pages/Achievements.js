import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component/dist-modules'
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from '@mui/icons-material/School'
import ComputerIcon from '@mui/icons-material/Computer';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { Container } from '@mui/system';

function Achievements() {
  return (
    <div className='experience'>
        <Container sx={{paddingTop:"30px"}}>
            <h3>April 1st, 1895 - The Inception of the Army</h3>
      <VerticalTimeline lineColor='#171c15'>
        <VerticalTimelineElement className='vertical-timeline-element--education'
        date='1939 - 1945'
        iconStyle={{ background: '#4b5320', color: '#fff' }}
        icon={<SchoolIcon />}>
            <h3 className='vertical-timeline-element-title'>
            World War II
            </h3>
            <p></p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education'
        date='2019 - 2021'
        iconStyle={{ background: '#4b5320', color: '#fff' }}
        icon={<SchoolIcon />}>
            <h3 className='vertical-timeline-element-title'>
                Nirmala Memorial Foundation
            </h3>
            <p>Science - HSC</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education'
        date='2021 - present'
        iconStyle={{ background: '#3e497a', color: '#fff' }}
        icon={<SchoolIcon />}>
            <h3 className='vertical-timeline-element-title'>
                Dwarkadas J. Sanghvi College of Engineering
            </h3>
            <p>B.E. Computer Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element'
        date='May 2021 - present'
        iconStyle={{ background: '#3e497a', color: '#fff' }}
        icon={<RocketLaunchIcon />}>
            <h3 className='vertical-timeline-element-title'>
                DJS Antariksh Member
            </h3>
            <p>Science Team</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element'
        date='Sept 2021 - present'
        iconStyle={{ background: '#3e497a', color: '#fff' }}
        icon={<ComputerIcon />}>
            <h3 className='vertical-timeline-element-title'>
                DJS Synapse Member
            </h3>
            <p>ML Department</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element'
        date='Sept 2021 - present'
        iconStyle={{ background: '#3e497a', color: '#fff' }}
        icon={<ComputerIcon />}>
            <h3 className='vertical-timeline-element-title'>
                DJS Unicode Member
            </h3>
            <p>FullStack Member</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      </Container>
    </div>
  )
}

export default Achievements