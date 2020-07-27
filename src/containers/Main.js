import React, {Component} from 'react';
import {withRouter} from "react-router";
import {connect} from "react-redux";

import PropTypes from "prop-types";
import _ from "lodash";

import {fetchPostListTrigger} from "../redux/actions/post";
import PostList from "./PostList";

class Main extends Component {
  static PAGE_SIZE = 5;

  constructor(props){
    super(props);

    this.state = {
      boardId: (!_.isNil(this.props.match.params.boardId)) ? this.props.match.params.boardId : 0
    }

  }

  componentWillMount(){
    const req = {
      boardId : this.state.boardId,
      page : 1
    };

    this.props.fetchPostListTrigger(req);
  }

  render(){
    const {postListInfo} = this.props;


    return (
      <div className="content-areabwrap twelve columns">
        <div className="site-mainbwrap" role="main">
          <div className="mainblogsec section">
            <PostList pageable={postListInfo} boardId={this.state.boardId} />

            {/* paging */}
            {/*<div style={{clear: "both"}} />*/}
            {/*<div className="blog-pager" id="blog-pager">*/}
            {/*  <span id="blog-pager-newer-link">*/}
            {/*    <Link className="blog-pager-newer-link"*/}
            {/*          to="http://base-business.blogspot.com/search?updated-max=2014-03-04T17:59:00-08:00&amp;max-results=5"*/}
            {/*          id="Blog1_blog-pager-newer-link" title="Newer Posts">{"<<<"}</Link>*/}
            {/*  </span>*/}
            {/*  <Link to="#">&nbsp;1&nbsp;</Link>*/}
            {/*  <Link to="#">&nbsp;1&nbsp;</Link>*/}
            {/*  <Link to="#">&nbsp;1&nbsp;</Link>*/}
            {/*  <Link to="#">&nbsp;1&nbsp;</Link>*/}
            {/*  <Link to="#">&nbsp;1&nbsp;</Link>*/}
            {/*  <Link to="#">&nbsp;1&nbsp;</Link>*/}
            {/*  <span id="blog-pager-older-link">*/}
            {/*    <Link className="blog-pager-older-link"*/}
            {/*          to="http://base-business.blogspot.com/search?updated-max=2014-03-04T17:59:00-08:00&amp;max-results=5"*/}
            {/*          id="Blog1_blog-pager-older-link" title="Older Posts">{">>>"}</Link>*/}
            {/*  </span>*/}
            {/*</div>*/}

            <br />
            {/*<div className="clear"></div>*/}
            {/*<div className="blog-feeds">*/}
            {/*  <div className="feed-links">*/}
            {/*    Subscribe to:*/}
            {/*    <Link className="feed-link" to="http://base-business.blogspot.com/feeds/posts/default" target="_blank"*/}
            {/*          type="application/atom+xml">Posts (Atom)</Link>*/}
            {/*  </div>*/}
            {/*</div>*/}

          </div>
        </div>
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
    postListInfo          : state.post.postListInfo,
    isPostListFetching: state.post.isPostListFetching
  };
};

export default withRouter(connect(mapStateToProps, {
  fetchPostListTrigger
})(Main));
