const Header = () => {
    return (
        <header className="header-container">
            <div className="logo-section">
                <span className="logo">AluminiJob</span>
            </div>
            <nav className="navigation">
                <span>Find job</span>
               
                <span>Post Jobs</span>
            </nav>
           
            <div className="profile-section">
                
               
                <span className="icon-notifications">🔔</span>
                <span className="icon-setting">Profile</span>
            </div>
        </header>
    );
};

export default Header;
