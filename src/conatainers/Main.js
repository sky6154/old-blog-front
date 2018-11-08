import React, {Component} from 'react';
import {withRouter}           from "react-router";
import {connect}              from "react-redux";

import PropTypes from "prop-types";
import _ from "lodash";

import {fetchPostListTrigger} from "../redux/actions/post";
import SummaryPost            from "../components/SummaryPost";
import {Link}                 from "react-router-dom";

class Main extends Component {

  componentWillMount(){
    this.props.fetchPostListTrigger();
  }

  render(){
    const {postList} = this.props;

    return (
      <div className="content-areabwrap twelve columns" id="primarybwrap">
        <div className="site-mainbwrap" id="mainbwrap" role="main">
          <div className="mainblogsec section" id="mainblogsec">
            <div className="widget Blog" data-version="1">
              <div className="blog-posts hfeed">
                {(() =>{
                  if(!_.isEmpty(postList)){

                    let list = [];
                    _.forEach(postList, function (value, key){
                      let req = {
                        postNum  : value.seq
                      };

                      let {seq, regDate, author, commentCount, title,content} = value;

                      list.push(
                        <Link to={`/post/${seq}`} key={key}>
                            <SummaryPost date={regDate} author={author}
                                             commentCount={commentCount} title={title}
                                             content={content}
                                         key={key} />
                        </Link>
                      );
                    });

                    return list;
                  }
                })()}
              </div>
            </div>

            <div style={{clear: "both"}} />
            <div className="blog-pager" id="blog-pager">
              <span id="blog-pager-newer-link">
                <a className="blog-pager-older-link"
                   href="http://base-business.blogspot.com/search?updated-max=2014-03-04T17:59:00-08:00&amp;max-results=5"
                   id="Blog1_blog-pager-older-link" title="Older Posts">Newer Posts</a>
              </span>
              <a className="home-link" href="http://base-business.blogspot.com/">Home</a>
              <span id="blog-pager-older-link">
                <a className="blog-pager-older-link"
                   href="http://base-business.blogspot.com/search?updated-max=2014-03-04T17:59:00-08:00&amp;max-results=5"
                   id="Blog1_blog-pager-older-link" title="Older Posts">Older Posts</a>
              </span>
            </div>

            <br />
            <div className="clear"></div>
            <div className="blog-feeds">
              <div className="feed-links">
                Subscribe to:
                <a className="feed-link" href="http://base-business.blogspot.com/feeds/posts/default" target="_blank"
                   type="application/atom+xml">Posts (Atom)</a>
              </div>
            </div>

          </div></div>
      </div>
    )
  }
}


Main.defaultProps = {
  postList          : [],
  isPostListFetching: false
};

Main.propTypes = {
  postList          : PropTypes.array,
  isPostListFetching: PropTypes.bool.isRequired
};

function mapStateToProps(state){
  return {
    postList          : state.post.postList,
    isPostListFetching: state.post.isPostListFetching
  };
};

export default withRouter(connect(mapStateToProps, {
  fetchPostListTrigger
})(Main));
