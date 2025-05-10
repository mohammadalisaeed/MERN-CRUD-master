import React from 'react';
import { Link } from 'react-router-dom'; // Use this if you're using React Router

const Sidebar = () => {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item nav-category">Main</li>

        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            <span className="icon-bg"><i className="mdi mdi-cube menu-icon"></i></span>
            <span className="menu-title">Dashboard</span>
          </Link>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="collapse"
            href="#ui-basic"
            aria-expanded="false"
            aria-controls="ui-basic"
          >
            <span className="icon-bg"><i className="mdi mdi-crosshairs-gps menu-icon"></i></span>
            <span className="menu-title">UI Elements</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="ui-basic">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <Link className="nav-link" to="/ui/buttons">Buttons</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ui/dropdowns">Dropdowns</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ui/typography">Typography</Link>
              </li>
            </ul>
          </div>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/icons">
            <span className="icon-bg"><i className="mdi mdi-contacts menu-icon"></i></span>
            <span className="menu-title">Icons</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/forms">
            <span className="icon-bg"><i className="mdi mdi-format-list-bulleted menu-icon"></i></span>
            <span className="menu-title">Forms</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/charts">
            <span className="icon-bg"><i className="mdi mdi-chart-bar menu-icon"></i></span>
            <span className="menu-title">Charts</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/tables">
            <span className="icon-bg"><i className="mdi mdi-table-large menu-icon"></i></span>
            <span className="menu-title">Tables</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
