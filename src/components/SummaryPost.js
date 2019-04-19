import React, {Component}          from "react";
import {connect}                   from "react-redux";
import {withRouter}                from "react-router";
import _                           from "lodash";
import findImage                   from "../utils/findImage";
import removeHtmlTagAndMakeSummary from "../utils/removeHtmlTagAndMakeSummary";
import Link                        from "react-router-dom/es/Link";

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
                      <Link to={`/post/${this.props.seq}`}>{title}</Link>
                    </h2>
                    <div className="entry-metabwrap">
                      <span>Posted on {date}</span>
                      <span>&nbsp;by&nbsp;
                        <Link to={`/post/${this.props.seq}`} rel="author" title="author profile">{author}</Link>&nbsp;with&nbsp;
                        <Link to={`/post/${this.props.seq}`}>{this.commentString(commentCount)}</Link></span>
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
                      <Link className="morer" to={`/post/${this.props.seq}`}>Read More</Link>
                    </div>
                    <div style={{clear: "both"}}></div>
                  </div>
                  <footer className="entry-metabwrap">
                    Posted in&nbsp;
                    {/*<Link to={`/post/${this.props.seq}`} rel="tag">Sports</Link>,*/}
                    {/*<Link to={`/post/${this.props.seq}`} rel="tag">Web Design</Link>*/}
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