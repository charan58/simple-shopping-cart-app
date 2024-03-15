import React from 'react';
import './userprofile.css';
import { IoMdSettings } from "react-icons/io";
import { GiPostStamp } from "react-icons/gi";
import { CiSaveDown2 } from "react-icons/ci";
import { FaTag } from "react-icons/fa";
function UserProfile() {
  return (
    <div className='user-profile-container row'>
      <div className='left-column col-md-3'>
        <p className='hello-text'>Hello</p>
      </div>
      <div className='right-column col-md-9'>
        {/* profile pic */}
        <div className='profile-pic-container'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmC7lfwUFp6EzbmHG2AaLWVTZnGrjl_VwzPZHldq1_rw&s'
            alt='profile-pic'
            className='profile-pic'
          />
        </div>
        <div className='profile-info'>
          {/* profile link */}
          <a href='www.google.com' className='profile-link'>
            uniqueid
          </a>
          {/* buttons */}
          <div className='button-group'>
            <button className='btn btn-outline-dark btn-md'>Edit profile</button>
            <button className='btn btn-outline-secondary btn-md'>View archives</button>
            <IoMdSettings className='settings-icon' />
          </div>
          {/* stats count */}
          <div className='stats'>
            <span className='stat'>0 posts</span>
            <span className='stat'>0 followers</span>
            <span className='stat'>0 following</span>
          </div>
          {/* fullname and bio */}
          <div className='fullname-bio'>
            <span>Fullname</span><br />
            <span>User bio</span>
          </div>
          {/* Saved, Posts, and Tagged links */}
          <hr />
          <ul className='d-flex justify-content-md-around'>
            <li className='link'><span><CiSaveDown2 /></span><a href="www.google.com">Saved</a></li>
            <li className='link'><span><GiPostStamp /></span><a href="www.google.com">Posts</a></li>
            <li className='link'><span><FaTag /></span><a href="www.google.com">Tagged</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
