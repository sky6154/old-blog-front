import React, {Component} from "react";
import {connect}          from "react-redux";
import {withRouter}       from "react-router";
import {Link}             from "react-router-dom";

class Header extends Component {
  goTo(url){
    this.props.history.push(url);
  }

  render(){
    return (
      <header className="site-headerbwrap" id="mastheadbwrap" role="banner">
        <div className="container site-brandingbwrap">
          <div className="five columns brandingbwrap">
            <div className="headersec section" id="headersec">
              <div className="widget Header" data-version="1" id="Header1">
                <div id="header-inner">
                  <div className="titlewrapper">
                    <h1 className="site-title">
                      <Link to="/">DEVELOBEER</Link>
                    </h1>
                  </div>
                  <h2 className="site-description">전원버튼부터 웹사이트까지</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="eleven columns navmenubwrap">
            <nav className="main-navigationbwrap" id="site-navigationbwrap" role="navigation">
              <div className="menu-testing-menu-container">
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><a href="#">IT</a>
                    <ul className="sub-menu">
                      <li><a href="#">Language</a>
                        <ul className="sub-menu">
                          <li><a href="#">JAVA</a></li>
                          <li><a href="#">PHP</a></li>
                          <li><a href="#">Javascript</a></li>
                          <li><a href="#">React</a></li>
                          <li><a href="#">Spring boot</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Database</a></li>
                      <li><a href="#">Network</a></li>
                      <li><a href="#">OS</a></li>
                      <li><a href="#">알고리즘</a></li>
                      <li><a href="#">자료구조</a></li>
                    </ul>
                  </li>
                  <li><a href="#">IT2</a>
                    <ul className="sub-menu">
                      <li><a href="#">Docker</a></li>
                      <li><a href="#">Jenkins</a></li>
                      <li><a href="#">ELK</a></li>
                    </ul>
                  </li>
                  <li><a href="#">일상</a>
                    <ul className="sub-menu">
                      <li><a href="#">맥주</a></li>
                      <li><a href="#">NAS</a></li>
                      <li><a href="#">끄적끄적</a></li>
                    </ul>
                  </li>
                  <li><Link to="#">소개</Link></li>
                </ul>
              </div>
            </nav>
          </div>

        </div>

      </header>
    );
  }
}

function mapStateToProps(state){
  return {};
}

export default withRouter(connect(mapStateToProps, {})(Header));