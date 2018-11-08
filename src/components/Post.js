import React, {Component} from "react";
import {connect}          from "react-redux";
import {withRouter}       from "react-router";
import _                  from "lodash";
import moment             from "moment";

import {fetchPostTrigger, emptyPostTrigger} from "../redux/actions/post";
import PropTypes          from "prop-types";
import {Link}             from "react-router-dom";
import findImage          from "../utils/findImage";


class Post extends Component {
  constructor(props){
    super(props);

    let postNum = this.props.match.params.id;

    if(!_.isNil(postNum)){
      let req = {
        postNum : postNum
      };

      this.props.fetchPostTrigger(req);
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if(prevProps.match.params.id !== this.props.match.params.id){
      let req = {
        postNum : this.props.match.params.id
      };

      this.props.fetchPostTrigger(req);
    }

    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot){

  }

  componentWillUnmount(){
    this.props.emptyPostTrigger();
  }

  render(){
    let {boardID, content, hits, isDelete, modifyDate, regDate, seq, title} = this.props.post;

    modifyDate = moment(modifyDate).format('LLLL');
    regDate = moment(regDate).format('LLLL');

    return (
      <div className="content-areabwrap twelve columns" id="primarybwrap">
        <div className="site-mainbwrap" id="mainbwrap" role="main">
          <div className="mainblogsec section" id="mainblogsec">
            <div className="widget Blog" data-version="1" id="Blog1">
              <div className="blog-posts hfeed">
                <div className="date-outer">
                  <h2 className="date-header">
                    <span>{regDate}</span></h2>
                  <div className="date-posts">
                    <div className="post-outer">
                      <article className="post hentry">
                        <header className="entry-header">
                          <h2 className="post-title entry-title">
                            <Link to="/">{title}</Link>
                          </h2>
                          <div className="entry-metabwrap">
                            <span>Posted on {regDate}</span>
                            <span>&nbsp;by&nbsp;
                              <Link to="/introduce" rel="author"
                                 title="author profile">W.A.M. Lasantha Bandara Karunarathna</Link>&nbsp;with&nbsp;
                              <a href="http://base-business.blogspot.com/2014/04/sample-post-with-links-paragraphs-and.html#comment-form">1 comment</a>
                            </span>
                          </div>
                        </header>
                        <div className="post-header-line-1"></div>
                        <div className="post-body entry-content">
                          <div dangerouslySetInnerHTML={{__html : content}} />
                          <div style={{clear: "both"}}></div>
                        </div>
                        <footer className="entry-metabwrap">
                          Posted in&nbsp;<a href="http://base-business.blogspot.com/search/label/Sports"
                                            rel="tag">Sports</a>,
                          <a href="http://base-business.blogspot.com/search/label/Web%20Design" rel="tag">Web Design</a>
                        </footer>
                      </article>
                      <div style={{clear: "both"}}></div>
                      <div className="blog-pager" id="blog-pager">
                        <span id="blog-pager-older-link">
                          <a className="blog-pager-older-link"
                             href="http://base-business.blogspot.com/2014/04/this-is-just-going-to-be-another-test.html"
                             id="Blog1_blog-pager-older-link" title="Older Post">Older Post</a>
                        </span>
                        <Link className="home-link" to="/">Home</Link>
                      </div>
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