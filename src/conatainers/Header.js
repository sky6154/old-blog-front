import React, {Component} from "react";
import {connect}          from "react-redux";
import {withRouter}       from "react-router";

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
                      <a href="http://base-business.blogspot.com/">DEVELOBEER</a>
                    </h1>
                  </div>
                  <h2 className="site-description">전원버튼 부터 웹사이트까지</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="eleven columns navmenubwrap">
            <nav className="main-navigationbwrap" id="site-navigationbwrap" role="navigation">
              <div className="menu-testing-menu-container">
                <ul>
                  <li><a href="http://base-business.blogspot.com/">Home</a></li>
                  <li><a href="#">Business</a>
                    <ul className="sub-menu">
                      <li><a href="#">Internet</a></li>
                      <li><a href="#">Market</a></li>
                      <li><a href="#">Stock</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Downloads</a>
                    <ul className="sub-menu">
                      <li><a href="#">Dvd</a></li>
                      <li><a href="#">Games</a></li>
                      <li><a href="#">Software</a>
                        <ul className="sub-menu">
                          <li><a href="#">Office</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li><a href="#">Parent Category</a>
                    <ul className="sub-menu">
                      <li><a href="#">Child Category 1</a>
                        <ul className="sub-menu">
                          <li><a href="#">Sub Child Category 1</a></li>
                          <li><a href="#">Sub Child Category 2</a></li>
                          <li><a href="#">Sub Child Category 3</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Child Category 2</a></li>
                      <li><a href="#">Child Category 3</a></li>
                      <li><a href="#">Child Category 4</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Featured</a></li>
                  <li><a href="#">Health</a>
                    <ul className="sub-menu">
                      <li><a href="#">Childcare</a></li>
                      <li><a href="#">Doctors</a></li>
                    </ul>
                  </li>
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