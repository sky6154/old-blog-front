import React, {Component} from "react";
import {connect}          from "react-redux";
import {withRouter}       from "react-router";
import {Link}             from "react-router-dom";

class Header extends Component {
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
                  <li><Link to="#">개발</Link>
                    <ul className="sub-menu">
                      <li><Link to="#">언어</Link>
                        <ul className="sub-menu">
                          <li><Link to="#">JAVA</Link></li>
                          <li><Link to="#">PHP</Link></li>
                          <li><Link to="#">Javascript</Link></li>
                          <li><Link to="#">React</Link></li>
                          <li><Link to="#">Spring boot</Link></li>
                        </ul>
                      </li>
                      <li><Link to="#">Storage</Link>
                        <ul className="sub-menu">
                          <li><Link to="#">Oracle</Link></li>
                          <li><Link to="#">Mysql</Link></li>
                          <li><Link to="#">Mssql</Link></li>
                          <li><Link to="#">Redis</Link></li>
                        </ul>
                      </li>
                      <li><Link to="#">Network</Link></li>
                      <li><Link to="#">OS</Link></li>
                      <li><Link to="#">알고리즘</Link></li>
                      <li><Link to="#">자료구조</Link></li>
                      <li><Link to="#">Docker</Link></li>
                      <li><Link to="#">Jenkins</Link></li>
                      <li><Link to="#">Nginx</Link></li>
                      {/*<li><Link to="#">ELK</Link></li>*/}
                    </ul>
                  </li>
                  <li><Link to="#">일상</Link>
                    <ul className="sub-menu">
                      <li><Link to="#">맥주</Link></li>
                      <li><Link to="#">캠핑</Link></li>
                      <li><Link to="#">커피</Link></li>
                    </ul>
                  </li>
                  <li><Link to="#">부제</Link>
                    <ul className="sub-menu">
                      <li><Link to="#">전원버튼부터 웹사이트까지</Link></li>
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