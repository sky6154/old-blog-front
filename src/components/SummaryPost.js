import React, {Component} from "react";
import {connect}          from "react-redux";
import {withRouter}       from "react-router";
import _                  from "lodash";
import findImage          from "../utils/findImage";
import removeHtmlTagAndMakeSummary from "../utils/removeHtmlTagAndMakeSummary";

class SummaryPost extends Component {
  goTo(url){
    this.props.history.push(url);
  }

  commentString = (commentCount) =>{
    if(commentCount > 1){
      return commentCount + " comments";
    }
    else if(commentCount <= 0){
      return "No comments";
    }
    else{
      return commentCount + " comment";
    }
  };

  render(){
    let {date, author, commentCount, title, content} = this.props;

    let thumbnail = findImage(content);

    let summary = removeHtmlTagAndMakeSummary(content, 350);

    if(!_.isEmpty(thumbnail)){
      thumbnail = thumbnail[1];
    }

    return (
      <div className="date-outer">
        <div className="date-posts">
          <div className="date-outer">
            <div className="date-posts">
              <div className="post-outer">
                <article className="post hentry">
                  <header className="entry-header">
                    <h2 className="post-title entry-title">
                      <a
                        href="http://base-business.blogspot.com/2014/03/keeping-title-length-equal-for-home.html">{title}</a>
                    </h2>
                    <div className="entry-metabwrap">
                      <span>Posted on {date}</span>
                      <span>&nbsp;by&nbsp;
                        <a href="https://plus.google.com/102090464826236196083" rel="author"
                           title="author profile">{author}</a>&nbsp;with&nbsp;
                        <a href="http://base-business.blogspot.com/2014/03/keeping-title-length-equal-for-home.html#comment-form">{this.commentString(commentCount)}</a></span>
                    </div>
                  </header>
                  <div style={{clear: "both"}}></div>
                  <div className="post-body entry-content">
                    <div>
                      <div className="separator" style={{clear: "both", textAlign: "center"}}>
                        <img src={thumbnail} className="pbtthumbimg" />
                      </div>
                      {summary}
                    </div>
                    <div style={{float: "right", paddingRight: "10px", marginTop: "10px", fontSize: "1.4rem"}}>
                      <a className="morer"
                         href="http://base-business.blogspot.com/2014/03/keeping-title-length-equal-for-home.html">Read More</a>
                    </div>
                    <div style={{clear: "both"}}></div>
                  </div>
                  <footer className="entry-metabwrap">
                    Posted in&nbsp;<a href="http://base-business.blogspot.com/search/label/Sports"
                                      rel="tag">Sports</a>, <a
                    href="http://base-business.blogspot.com/search/label/Web%20Design" rel="tag">Web Design</a>
                  </footer>
                </article>
                <div style={{clear: "both"}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {};
}

export default withRouter(connect(mapStateToProps, {})(SummaryPost));