import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import { Layout, Menu, Avatar, Dropdown, Button } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import '../styles/Header.css';

const { Header } = Layout;

function CustomHeader() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleChannelsClick = () => {
    setShowDropdown(!showDropdown);
  };

  const dropdownMenu = (
    <Menu>
      <Menu.Item key="networking">
        <Link to="/networking">Networking</Link>
      </Menu.Item>
      <Menu.Item key="events">
        <Link to="/events">Events</Link>
      </Menu.Item>
      <Menu.Item key="reunions">
        <Link to="/reunions">Reunions</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <header className="header">
      <div className="logo">
        <img src="/path-to-your-logo.png" alt="Logo" />
      </div>
      <nav className="nav">
        <ul>
        <li><Link to="/home">Home</Link></li>
          <li><Link to="/joblist">Job-Portal</Link></li>
          <li><Link to="/donations">Donations</Link></li>
          <li><Link to="/feedback">Feedback</Link></li>
          <li>
            <div className="dropdown-container" onMouseLeave={() => setShowDropdown(false)}>
              <button className="dropdown-button" onClick={handleChannelsClick}>
                Channels <span className="arrow">{showDropdown ? '▲' : '▼'}</span>
              </button>
              {showDropdown && (
                <ul className="dropdown-menu">
                  <li><Link to="/networking">Networking</Link></li>
                  <li><Link to="/events">Events</Link></li>
                  <li><Link to="/reunions">Reunions</Link></li>
                </ul>
              )}
            </div>
          </li>
          <li><Link to="/" className="box-link">Login</Link></li>
          <li><Link to="/signup" className="box-link">Sign Up</Link></li>
        </ul>
        <div className="profile-icon">
          <Link to="/profile">
            <img src="\profile1.png" alt="Profile" />
          </Link>
        </div>
        </nav>
      </header>
  );
}

export default CustomHeader;
