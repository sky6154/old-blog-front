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
                  <li><Link to="#" style={{pointerEvents: "none"}} onClick={(e) => e.preventDefault()}>개발</Link>
                    <ul className="sub-menu">
                      <li><Link to="#" style={{pointerEvents: "none"}} onClick={(e) => e.preventDefault()}>언어</Link>
                        <ul className="sub-menu">
                          <li><Link to="/?boardId=1">JAVA</Link></li>
                          <li><Link to="/?boardId=2">PHP</Link></li>
                          <li><Link to="/?boardId=3">Javascript</Link></li>
                          <li><Link to="/?boardId=4">React</Link></li>
                          <li><Link to="/?boardId=5">Spring boot</Link></li>
                        </ul>
                      </li>
                      <li><Link to="#" style={{pointerEvents: "none"}} onClick={(e) => e.preventDefault()}>Storage</Link>
                        <ul className="sub-menu">
                          <li><Link to="/?boardId=6">Oracle</Link></li>
                          <li><Link to="/?boardId=7">Mysql</Link></li>
                          <li><Link to="/?boardId=8">Mssql</Link></li>
                          <li><Link to="/?boardId=9">Redis</Link></li>
                        </ul>
                      </li>
                      <li><Link to="/?boardId=10">Network</Link></li>
                      <li><Link to="/?boardId=11">OS</Link></li>
                      <li><Link to="/?boardId=12">알고리즘</Link></li>
                      <li><Link to="/?boardId=13">자료구조</Link></li>
                      <li><Link to="/?boardId=14">Docker</Link></li>
                      <li><Link to="/?boardId=15">Jenkins</Link></li>
                      <li><Link to="/?boardId=16">Nginx</Link></li>
                      {/*<li><Link to="#">ELK</Link></li>*/}
                    </ul>
                  </li>
                  <li><Link to="#" style={{pointerEvents: "none"}} onClick={(e) => e.preventDefault()}>일상</Link>
                    <ul className="sub-menu">
                      <li><Link to="/?boardId=17">맥주</Link></li>
                      <li><Link to="/?boardId=18">캠핑</Link></li>
                      <li><Link to="/?boardId=19">커피</Link></li>
                      <li><Link to="/?boardId=20">잡담</Link></li>
                    </ul>
                  </li>
                  <li><Link to="#" style={{pointerEvents: "none"}} onClick={(e) => e.preventDefault()}>부제</Link>
                    <ul className="sub-menu">
                      <li><Link to="/?boardId=21">전원버튼부터 웹사이트까지</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/introduce">소개</Link></li>
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