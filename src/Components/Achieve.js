import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component/dist-modules'
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from '@mui/icons-material/School'
import ComputerIcon from '@mui/icons-material/Computer';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import Bangladesh from './Bangladesh.jpg'
import Kashmir from './kashmirwar.webp'
import WW2 from './worldwar.webp'
import IndoPak from './IndoPak.jpg'
import Chinese from './Chinese.jpg'
import Kargil from './Kargil.jpg'
import URI from './URI.jpg'



function Achieve() {
  return (
    <div className='achivemain'>
      <Container sx={{paddingTop:"30px"}}>
            <Typography variant='h4' sx={{textAlign: "center"}}>April 1st, 1895 - The Inception of the Army</Typography>
      <VerticalTimeline lineColor='#171c15'>
        <VerticalTimelineElement className='vertical-timeline-element--education'
        date='1939 - 1945'
        iconStyle={{ background: '#4b5320', color: '#fff' }}
        icon={<MilitaryTechIcon />}>
            <h3 className='vertical-timeline-element-title'>
            World War II
            </h3>
            <img src={WW2} style={{width: "410px", height: "200px"}} alt='no img here'/>
            <p>
            The professionalism of the alumni of the Academy was put to test in 1939, just a few years after the founding of the Academy, when Britain declared war against Nazi Germany and other Axis Powers. The success of the Indian forces mostly led by the Indian Officers was in the best traditions of bravery and courage. British Forces of Indian origin fought the War in Europe, Africa and the Far East.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education'
        date='1947 - 1948'
        iconStyle={{ background: '#4b5320', color: '#fff' }}
        icon={<MilitaryTechIcon />}>
            <h3 className='vertical-timeline-element-title'>
                Kashmir War
            </h3>
            <img src={Kashmir} style={{width: "410px", height: "200px"}} alt='no img here'/>
            <p>
            On the eve of Independence, with the intention of wresting Kashmir forcibly from India, raiders & razakars supported actively by the Pakistani regular Army invaded Kashmir. At the request of Maharaja Hari Singh, the then ruler of J & K, the Indian Army moved into the valley to protect the people of Kashmir from the vandals.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education'
        date='1962'
        iconStyle={{ background: '#4b5320', color: '#fff' }}
        icon={<MilitaryTechIcon />}>
            <h3 className='vertical-timeline-element-title'>
                Chinese Aggression
            </h3>
            <img src={Chinese} style={{width: "410px", height: "200px"}} alt='no img here'/>
            <p>
            China attacked the Himalayan frontiers of the country in 1962. The Indian Army was caught unaware and being ill-prepared to counter the Chinese offensive suffered heavy losses. In the face of the most challenging circumstances, Indian Army was overwhelmed by the Chinese Forces many times over; but the Indian soldiers protected the frontiers with sheer grit and courage that has become part of a legend.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element'
        date='1965'
        iconStyle={{ background: '#4b5320', color: '#fff' }}
        icon={<MilitaryTechIcon />}>
            <h3 className='vertical-timeline-element-title'>
                Indo-Pak War
            </h3>
            <img src={IndoPak} style={{width: "410px", height: "200px"}} alt='no img here'/>
            <p>
            In 1965, equipped with weapons supplied by USA and factorising the 1962 episode, Pakistan launched a surprise attack first in Kutch in April and later in the Chhamb-Jaurian sector with a view to wrest Kashmir by force. In response, the Indian forces led by Lt Gen Harbaksh Singh (an alumnus of IMA), the Army Commander of Indian Ground Forces in the Western Sector, successfully thwarted the ingress and moved swiftly into the Pakistan territory inflicting heavy losses and were about to capture Lahore and Sialkot when the cease fire was ordered.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element'
        date='Sept 2021 - present'
        iconStyle={{ background: '#4b5320', color: '#fff' }}
        icon={<MilitaryTechIcon />}>
            <h3 className='vertical-timeline-element-title'>
            Bangladesh War
            </h3>
            <img src={Bangladesh} style={{width: "410px", height: "300px"}} alt='no img here'/>
            <p>
            In 1971, the large scale reprisal and atrocities perpetrated by the Pakistani Army in Bangladesh (erstwhile East Pakistan) forced a large number of Bangladeshis to take refuge in India. It was a calculated strategy by the Pakistan Government to create a situation for carrying out military intervention and avenge the defeat of 1965. The refugee crisis in India blew out of proportion with millions of them crossing over everyday.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element'
        date='1999'
        iconStyle={{ background: '#4b5320', color: '#fff' }}
        icon={<MilitaryTechIcon />}>
            <h3 className='vertical-timeline-element-title' sx={{textAlign:"center"}}>
               Kargil War
            </h3>
            <img src={Kargil} style={{width: "410px", height: "200px"}} alt='no img here'/>
            <p>
            In the history of independent India, the battle of (1999) will be remembered as the fiercest and the most valiant of operations conducted by the Indian Army. Operation Vijay which was launched on 26 May 1999 concluded on the morning of 18 July 1999 with the restoration of the sanctity of the Line of Control. This was undoubtedly a watershed from any strategic perspective. 
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element'
        date='2016'
        iconStyle={{ background: '#4b5320', color: '#fff' }}
        icon={<MilitaryTechIcon />}>
            <h3 className='vertical-timeline-element-title' sx={{textAlign:"center"}}>
               The Surgical Strike
            </h3>
            <img src={URI} style={{width: "410px", height: "200px"}} alt='no img here'/>
            <p>
            The strike on September 28, 2016, was in retaliation for a terrorist attack on a military camp in Kashmir's Uri on September 18, in which 19 troops were killed by Pakistan-based militants. Since then, September 29 has been designated as “Surgical Strike Day” by the government.
            </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      </Container>
    </div>
  )
}

export default Achieve
