import React from 'react';

const Profile = () => {
    return (
      <div className="profile_skills">
            <div className="container">
                <div className="profile">
                    <h2 className="profile-title"><span>My </span>Profile</h2>
                    <ul className="profile-list">
                        <li className="profile-item">
                            <span>Name</span>
                            Mahmoud Ali
                        </li>
                        <li className="profile-item">
                            <span>Birthday</span>
                            26/8/1989
                        </li>
                        <li className="profile-item">
                            <span>Address</span>
                            Madint Nasr
                        </li>
                        <li className="profile-item">
                            <span>Phone</span>
                           01282402165
                        </li>
                        <li className="profile-item">
                            <span>Email</span>
                          Mahmoud.Ali3@gmail.com
                        </li>
                        <li className="profile-item">
                            <span>Website</span>
                            <span className="web">www.google.com</span>
                        </li>
                    </ul>
                </div>
                
                <div className="skills">
                    <h2 className="skills-title">Some <span>skills</span></h2>
                    <p className="skills-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </p>
                    <div className="bar">
                        <span className="title">Front End</span>
                        <span className="perc">80%</span>
                        <div className="parent">
                            <span className="sp1"></span>
                        </div>
                    </div>
                    
                    <div className="bar">
                        <span className="title">React Developer</span>
                        <span className="perc">70%</span>
                        <div className="parent">
                            <span className="sp2"></span>
                        </div>
                    </div>
                    
                    <div className="bar">
                        <span className="title">Flutter Developer</span>
                        <span className="perc">80%</span>
                        <div className="parent">
                            <span className="sp3"></span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
   
  }
 
export default Profile;
