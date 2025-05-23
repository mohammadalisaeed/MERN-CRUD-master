import React from 'react';

export default function Header() {
  return (
    <header>
      <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
          <a className="navbar-brand brand-logo" href="index.html">
            <img src="assets/images/logo.svg" alt="logo" />
          </a>
          <a className="navbar-brand brand-logo-mini" href="index.html">
            <img src="assets/images/logo-mini.svg" alt="logo" />
          </a>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-stretch">
          <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
            <span className="mdi mdi-menu"></span>
          </button>
          <div className="search-field d-none d-xl-block">
            <form className="d-flex align-items-center h-100" action="#">
              <div className="input-group">
                <div className="input-group-prepend bg-transparent">
                  <i className="input-group-text border-0 mdi mdi-magnify"></i>
                </div>
                <input type="text" className="form-control bg-transparent border-0" placeholder="Search products" />
              </div>
            </form>
          </div>
          <ul className="navbar-nav navbar-nav-right">
            {/* Reports Dropdown */}
            <li className="nav-item dropdown d-none d-md-block">
              <a className="nav-link dropdown-toggle" id="reportDropdown" href="#" data-toggle="dropdown">Reports</a>
              <div className="dropdown-menu navbar-dropdown" aria-labelledby="reportDropdown">
                <a className="dropdown-item" href="#"><i className="mdi mdi-file-pdf mr-2"></i>PDF</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#"><i className="mdi mdi-file-excel mr-2"></i>Excel</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#"><i className="mdi mdi-file-word mr-2"></i>Doc</a>
              </div>
            </li>

            {/* Projects Dropdown */}
            <li className="nav-item dropdown d-none d-md-block">
              <a className="nav-link dropdown-toggle" id="projectDropdown" href="#" data-toggle="dropdown">Projects</a>
              <div className="dropdown-menu navbar-dropdown" aria-labelledby="projectDropdown">
                <a className="dropdown-item" href="#"><i className="mdi mdi-eye-outline mr-2"></i>View Project</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#"><i className="mdi mdi-pencil-outline mr-2"></i>Edit Project</a>
              </div>
            </li>

            {/* Language Dropdown */}
            <li className="nav-item nav-language dropdown d-none d-md-block">
              <a className="nav-link dropdown-toggle" id="languageDropdown" href="#" data-toggle="dropdown">
                <div className="nav-language-icon"><i className="flag-icon flag-icon-us" title="us"></i></div>
                <div className="nav-language-text"><p className="mb-1 text-black">English</p></div>
              </a>
              <div className="dropdown-menu navbar-dropdown" aria-labelledby="languageDropdown">
                <a className="dropdown-item" href="#"><i className="flag-icon flag-icon-ae mr-2"></i>Arabic</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#"><i className="flag-icon flag-icon-gb mr-2"></i>English</a>
              </div>
            </li>

            {/* Profile Dropdown */}
            <li className="nav-item nav-profile dropdown">
              <a className="nav-link dropdown-toggle" id="profileDropdown" href="#" data-toggle="dropdown">
                <div className="nav-profile-img">
                  <img src="assets/images/faces/face28.png" alt="profile" />
                </div>
                <div className="nav-profile-text"><p className="mb-1 text-black">Henry Klein</p></div>
              </a>
              <div className="dropdown-menu navbar-dropdown dropdown-menu-right p-0 border-0 font-size-sm">
                <div className="p-3 text-center bg-primary">
                  <img className="img-avatar img-avatar48 img-avatar-thumb" src="assets/images/faces/face28.png" alt="" />
                </div>
                <div className="p-2">
                  <h5 className="dropdown-header text-uppercase pl-2 text-dark">User Options</h5>
                  <a className="dropdown-item py-1 d-flex justify-content-between" href="#">
                    <span>Inbox</span>
                    <span><span className="badge badge-primary">3</span><i className="mdi mdi-email-open-outline ml-1"></i></span>
                  </a>
                  <a className="dropdown-item py-1 d-flex justify-content-between" href="#">
                    <span>Profile</span>
                    <span><span className="badge badge-success">1</span><i className="mdi mdi-account-outline ml-1"></i></span>
                  </a>
                  <a className="dropdown-item py-1 d-flex justify-content-between" href="#"><span>Settings</span><i className="mdi mdi-settings"></i></a>
                  <div className="dropdown-divider"></div>
                  <h5 className="dropdown-header text-uppercase pl-2 text-dark mt-2">Actions</h5>
                  <a className="dropdown-item py-1 d-flex justify-content-between" href="#"><span>Lock Account</span><i className="mdi mdi-lock ml-1"></i></a>
                  <a className="dropdown-item py-1 d-flex justify-content-between" href="#"><span>Log Out</span><i className="mdi mdi-logout ml-1"></i></a>
                </div>
              </div>
            </li>

            {/* Messages Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link count-indicator dropdown-toggle" id="messageDropdown" href="#" data-toggle="dropdown">
                <i className="mdi mdi-email-outline"></i>
                <span className="count-symbol bg-success"></span>
              </a>
              <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
                <h6 className="p-3 mb-0 bg-primary text-white py-4">Messages</h6>
                {/* Message items go here */}
              </div>
            </li>

            {/* Notifications Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-toggle="dropdown">
                <i className="mdi mdi-bell-outline"></i>
                <span className="count-symbol bg-danger"></span>
              </a>
              <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                <h6 className="p-3 mb-0 bg-primary text-white py-4">Notifications</h6>
                {/* Notification items go here */}
              </div>
            </li>
          </ul>
          <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
            <span className="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
