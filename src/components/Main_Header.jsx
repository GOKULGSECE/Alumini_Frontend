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
    <Layout>
      <Header className="header">
        <div className="logo">
          <img src="https://imgs.search.brave.com/VFpsyFP1di87rODs53NPYYUWpdY1rqyI1cJb2ZiVvk0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9keW5h/bWljLmJyYW5kY3Jv/d2QuY29tL2Fzc2V0/L2xvZ28vZjA5Y2I1/NWYtNjcxMC00Y2Iw/LTkzN2MtZTQwZjA2/ZjgxNDhkL2xvZ28t/c2VhcmNoLWdyaWQt/MXg_bG9nb1RlbXBs/YXRlVmVyc2lvbj0x/JnY9NjM4NDUzMzc3/NTY1ODcwMDAw.jpeg" alt="Logo" /> 
        </div>
        <Menu theme="light" mode="horizontal" className="nav" defaultSelectedKeys={['1']}>
          <Menu.Item key="home"><Link to="/">Home</Link></Menu.Item>
          <Menu.Item key="joblist"><Link to="/joblist">Job-Portal</Link></Menu.Item>
          <Dropdown overlay={dropdownMenu} trigger={['click']}>
            <Button className="ant-dropdown-link" onClick={handleChannelsClick}>
              Channels <DownOutlined />
            </Button>
          </Dropdown>
          <Menu.Item key="donations"><Link to="/donations">Donations</Link></Menu.Item>
          <Menu.Item key="feedback"><Link to="/feedback">Feedback</Link></Menu.Item>
          <Menu.Item key="login"><Link to="/" className="box-link">Login</Link></Menu.Item>
          <Menu.Item key="signup"><Link to="/signup" className="box-link">Sign Up</Link></Menu.Item>
        </Menu>
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
