import React from 'react'
import { Typography } from '@material-ui/core'
import CustomTimeline, { CustomTimelineSeparator } from '../Timeline/Timeline'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

import profilePhoto from '../../assets/images/0.jpg';
import profileData from '../../utils/resumeData.js'

import './Profile.css'
import { PersonOutlineOutlined } from '@material-ui/icons';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import resumeData from '../../utils/resumeData.js';

const CustomTimelineItem = ({title, text, link}) => (
  <TimelineItem className='custom-item'>
    <CustomTimelineSeparator />
    <TimelineContent className='timeline-content'>
      { link ? (
        <Typography className='timeline-item-text'>
          <span>{title}:</span>{" "}
          <a href={link} target='_blank' >
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className='timeline-item-text'>
          <span>{title}:</span> {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

function Profile() {
  return (
    <div className='profile containter-shadow'>
        <div className='profile-name'>
            <Typography className='name'>{profileData.Name}</Typography>
            <Typography className='title'>{profileData.Title}</Typography>
        </div>

        <figure className='profile-image'>
            <img src={profilePhoto} alt=""></img>
        </figure>

        <div className='profile-information'>
            <CustomTimeline icon={<PersonOutlineIcon />}>
              <CustomTimelineItem title='Name' text={profileData.name} />
              <CustomTimelineItem title='Title' text={profileData.title} />
              <CustomTimelineItem title='Email' text={profileData.email} />

              {Object.keys(resumeData.socials).map((key) => (
                <CustomTimelineItem title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].url} />
              ))}
            </CustomTimeline>
            <br/>
            <button>my button</button>
        </div>
    </div>
  );
}

export default Profile;