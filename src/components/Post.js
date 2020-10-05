import React, {Component} from "react";
import {connect}          from "react-redux";
import {withRouter}       from "react-router";
import _                  from "lodash";
import moment             from "moment-timezone";

import {fetchPostTrigger, emptyPostTrigger} from "../redux/actions/post";
import PropTypes          from "prop-types";
import {Link}             from "react-router-dom";

class Post extends Component {
  constructor(props){
    super(props);

    this.state = {
      postNum :  this.props.match.params.id
    };

    if(!_.isNil(this.state.postNum)){
      let req = {
        postNum : this.state.postNum
      };

      this.props.fetchPostTrigger(req);
    }
  }

  static getDerivedStateFromProps(props, state){
    if(props.match.params.id !== state.postNum){
      return {
        postNum : props.match.params.id
      }
    }
    else{
      return null;
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.state.postNum !== prevState.postNum){
      let req = {
        postNum : this.state.postNum
      };

      this.props.fetchPostTrigger(req);
    }
  }

  componentWillUnmount(){
    this.props.emptyPostTrigger();
  }

  render(){
    const {boardId, content, hits, isDelete, modifyDate, regDate, seq, title, boardName} = this.props.post;

    let showDate = moment(regDate).tz("Asia/Seoul").format('LLLL');

    return (
      <div className="content-areabwrap twelve columns">
        <div className="site-mainbwrap" role="main">
          <div className="mainblogsec section">
            <div className="widget Blog" data-version="1">
              <div className="blog-posts hfeed">
                <div className="date-outer">
                  <h2 className="date-header">
                    <span>{showDate}</span></h2>
                  <div className="date-posts">
                    <div className="post-outer">
                      <article className="post hentry">
                        <header className="entry-header">
                          <h2 className="post-title entry-title">
                            {title}
                          </h2>
                          <div className="entry-metabwrap">
                            <span>Posted on {showDate}</span>
                            <span>&nbsp;by&nbsp;
                              <Link to="/introduce" rel="author"
                                 title="author profile">develobeer</Link>
                              {/*&nbsp;with&nbsp;*/}
                              {/*<Link to="#">0 comment</Link>*/}
                            </span>
                          </div>
                        </header>
                        <div className="post-header-line-1"></div>
                        <div className="post-body entry-content">
                          <div dangerouslySetInnerHTML={{__html : content}} />
                          <div style={{clear: "both"}}></div>
                        </div>
                        <footer className="entry-metabwrap">
                          Posted in&nbsp;<Link to={"/?boardId=" + boardId}
                                            rel="tag">{boardName}</Link>
                        </footer>
                      </article>
                      <div style={{clear: "both"}}></div>
                      {/*<div className="blog-pager" id="blog-pager">*/}
                      {/*  <span id="blog-pager-older-link">*/}
                      {/*    <Link className="blog-pager-older-link"*/}
                      {/*       to="http://base-business.blogspot.com/2014/04/this-is-just-going-to-be-another-test.html"*/}
                      {/*       id="Blog1_blog-pager-older-link" title="Older Post">Older Post</Link>*/}
                      {/*  </span>*/}
                      {/*  <Link className="home-link" to="/">Home</Link>*/}
                      {/*</div>*/}
                      <div className="clear"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{clear: "both"}}></div>
            </div></div>
        </div>
      </div>
    );
  }
}

Post.defaultProps = {
  post          : {},
  isPostFetching: false
};

Post.propTypes = {
  post          : PropTypes.object,
  isPostFetching: PropTypes.bool.isRequired
};

function mapStateToProps(state){
  return {
    post          : state.post.post,
    isPostFetching: state.post.isPostFetching
  };
}

export default withRouter(connect(mapStateToProps, {
  fetchPostTrigger, emptyPostTrigger
})(Post));