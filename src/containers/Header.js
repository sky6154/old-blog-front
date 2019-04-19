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
                      <img src="https://resources.develobeer.blog/images/develobeer_w.png" style={{width:"25px"}} alt="develobeer"/>
                      <Link to="/">&nbsp;DEVELOBEER</Link>
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
                  <li><Link to="#">IT</Link>
                    <ul className="sub-menu">
                      <li><Link to="#">Language</Link>
                        <ul className="sub-menu">
                          <li><Link to="#">JAVA</Link></li>
                          <li><Link to="#">PHP</Link></li>
                          <li><Link to="#">Javascript</Link></li>
                          <li><Link to="#">React</Link></li>
                          <li><Link to="#">Spring boot</Link></li>
                        </ul>
                      </li>
                      <li><Link to="#">Database</Link></li>
                      <li><Link to="#">Network</Link></li>
                      <li><Link to="#">OS</Link></li>
                      <li><Link to="#">알고리즘</Link></li>
                      <li><Link to="#">자료구조</Link></li>
                    </ul>
                  </li>
                  <li><Link to="#">IT2</Link>
                    <ul className="sub-menu">
                      <li><Link to="#">Docker</Link></li>
                      <li><Link to="#">Jenkins</Link></li>
                      <li><Link to="#">ELK</Link></li>
                    </ul>
                  </li>
                  <li><Link to="#">일상</Link>
                    <ul className="sub-menu">
                      <li><Link to="#">맥주</Link></li>
                      <li><Link to="#">NAS</Link></li>
                      <li><Link to="#">끄적끄적</Link></li>
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