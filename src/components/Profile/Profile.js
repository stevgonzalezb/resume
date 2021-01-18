import React from 'react'
import { Typography } from '@material-ui/core'
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import GetApp from '@material-ui/icons/GetApp';

import profilePhoto from '../../assets/images/profile_photo.jpg';
import profileData from '../../utils/resumeData.js'
import resumeData from '../../utils/resumeData.js';
import CustomTimeline, { CustomTimelineSeparator } from '../Timeline/Timeline'
import CustomButton from '../Button/Button'

import './Profile.css'

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
            <CustomButton text={'Download CV'} icon={<GetApp />} />
        </div>
    </div>
  );
}

export default Profile;