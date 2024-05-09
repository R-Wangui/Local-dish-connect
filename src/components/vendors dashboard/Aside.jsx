import React from 'react'
import { FaAward, FaBookOpen, FaComment, FaQuestion, FaSignOutAlt, FaStar, FaTools } from 'react-icons/fa'
import { FaBusinessTime, FaHouse } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function Aside() {
  return (
    <>
        <div id='vendorAside'>
            <div className='analytics'>
                <span className='aside-icon'><FaHouse /></span>
                <span style={{marginLeft: '12px'}}> <Link to="/vendorsdashboard" style={{color:"black", textDecoration: "none"}}>Dashboard</Link></span>   
            </div>
            <div>
                <span className='asideIcon'><FaBusinessTime /></span>
                <span style={{marginLeft: '12px'}}><Link to="/businessprofile" style={{color:"white", textDecoration: "none"}}>Business Profile</Link></span>   
            </div>
            <div>
                <span className='asideIcon'><FaBookOpen /></span>
                <span style={{marginLeft: '12px'}}> Menu Management</span>
            </div>
            <div>
                <span className='asideIcon'><FaAward /></span>
                <span style={{marginLeft: '12px'}}> Promotions</span>
            </div>
            <div>
                <span className='asideIcon'><FaStar /></span>
                <span style={{marginLeft: '12px'}}> Reviews & Ratings</span>
            </div>
            <div>
                <span className='asideIcon'><FaTools /></span>
                <span style={{marginLeft: '12px'}}> Settings</span>
            </div>
            <hr />
            <br />
            <h5>Help & Support</h5>
            <div>
                <span className='asideIcon'><FaQuestion /></span>
                <span style={{marginLeft: '12px'}}> FAQ</span>
            </div>
            <div>
                <span className='asideIcon'><FaComment /></span>
                <span style={{marginLeft: '12px'}}> Contact Us</span>
            </div>
            <br />
            <div>
                <span className='asideIcon'><FaSignOutAlt /></span>
                <span style={{marginLeft: '12px'}}> Log out</span>
            </div>
        </div>
    </>
  )
}

export default Aside