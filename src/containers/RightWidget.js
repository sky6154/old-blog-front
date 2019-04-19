import React, {Component} from 'react';

import {fetchPopularPostListTrigger, fetchRecentPostListTrigger} from "../redux/actions/post";
import {connect}                                                 from "react-redux";
import PropTypes                                                 from "prop-types";
import {withRouter}                                              from "react-router";
import _                                                         from "lodash";
import findImage                                                 from "../utils/findImage";
import {Link}                                                    from "react-router-dom";

class RightWidget extends Component {
  componentWillMount(){
    this.props.fetchPopularPostListTrigger();
    this.props.fetchRecentPostListTrigger();
  }

  goTo(url){
    this.props.history.push(url);
  }

  render(){
    let {popularPostList, recentPostList} = this.props;

    return (
      <div className="widget-area four columns" id="secondarybwrap" role="complementary">
        <div className="widget widget_search">
          <form action="/search" className="search-form" method="get" role="search">
            <label>
              <span className="screen-reader-textbwrap">Search for:</span>
              <input className="search-field" name="q" placeholder="Search" title="Search for:" type="search" value="" />
            </label>
            <input className="search-submit" type="submit" value="Search" />
          </form>
        </div>
        <div className="sidebarright section">
          <div className="widget PopularPosts" data-version="1" id="PopularPosts1">
            <h2>Popular Posts</h2>
            <div className="widget-content popular-posts">
              <ul>
                {(() =>{
                  if(!_.isEmpty(popularPostList)){

                    let list = [];
                    _.forEach(popularPostList, function (value, key){
                      let {seq, title, content} = value;

                      let thumbnail = findImage(content);

                      if(!_.isEmpty(thumbnail)){
                        thumbnail = thumbnail[1];
                      }
                      list.push(
                        <li key={key}>
                          <div className="item-thumbnail-only">
                            <div className="item-thumbnail">
                              <Link to={`/post/${seq}`}>
                                <img alt="" border="0" src={thumbnail} style={{width: "72px"}} />
                              </Link>
                            </div>
                            <div className="item-title">
                              <Link to={`/post/${seq}`}>{title}</Link>
                            </div>
                          </div>
                          <div style={{clear: "both"}}></div>
                        </li>
                      );
                    });

                    return list;
                  }
                })()}
              </ul>
              <div className="clear"></div>
              <div className="clear"></div>
            </div>

          </div>
          <div className="widget HTML" data-version="1" id="HTML1">
            <h2 className="title">Recent Posts</h2>
            <div className="widget-content">
              <ul>
            {(() =>{
              if(!_.isEmpty(recentPostList)){

                let list = [];
                _.forEach(recentPostList, function (value, key){
                  let {seq, title, content} = value;

                  let thumbnail = findImage(content);

                  if(!_.isEmpty(thumbnail)){
                    thumbnail = thumbnail[1];
                  }
                  list.push(
                    <li key={key}>
                      <div className="item-title">
                            <Link to={`/post/${seq}`}>{title}</Link>
                      </div>
                    </li>
                  );
                });

                return list;
              }
            })()}
              </ul>
            </div>
            <div className="clear"></div>
          </div>
          <div className="widget Text" data-version="1" id="Text2">
            <h2 className="title">Text Widget</h2>
            <div className="widget-content">
              개발, PHP, JAVA, Mysql, DB, Network, OS, Docker, Nginx, Spring boot, Jenkins, React
            </div>
            <div className="clear"></div>
            <div className="clear"></div>
          </div>
        </div>
      </div>
    );
  }
}


RightWidget.defaultProps = {
  popularPostList          : [],
  recentPostList           : [],
  isPopularPostListFetching: false,
  isRecentPostListFetching : false
};

RightWidget.propTypes = {
  popularPostList          : PropTypes.array,
  recentPostList           : PropTypes.array,
  isPopularPostListFetching: PropTypes.bool.isRequired,
  isRecentPostListFetching : PropTypes.bool.isRequired
};

function mapStateToProps(state){
  return {
    popularPostList          : state.post.popularPostList,
    recentPostList           : state.post.recentPostList,
    isPopularPostListFetching: state.post.isPopularPostListFetching,
    isRecentPostListFetching : state.post.isRecentPostListFetching
  };
};

export default withRouter(connect(mapStateToProps, {
  fetchPopularPostListTrigger, fetchRecentPostListTrigger
})(RightWidget));