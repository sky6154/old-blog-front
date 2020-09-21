import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import _ from "lodash";
import findImage from "../utils/findImage";
import removeHtmlTagAndMakeSummary from "../utils/removeHtmlTagAndMakeSummary";
import Link from "react-router-dom/es/Link";
import moment from "moment-timezone";

class SummaryPost extends Component {
    commentString = (commentCount) => {
        if (commentCount > 1) {
            return commentCount + " comments";
        } else {
            return "0 comments";
        }
    };

    render() {
        let {date, author, commentCount, title, content, boardId, boardName} = this.props;
        let postDate = moment(date).tz("Asia/Seoul").format('YYYY-MM-DD HH:mm');

        let thumbnail = findImage(content);

        let summary = removeHtmlTagAndMakeSummary(content, 350);

        if (!_.isEmpty(thumbnail)) {
            thumbnail = thumbnail[1];
        }

        if(!author){
          author = "develobeer";
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
                                            <span>Posted on {postDate}</span>
                                            <span>&nbsp;by&nbsp;
                                                <Link to={`/introduce`} rel="author"
                                                      title="author profile">{author}</Link>
                                                {/*&nbsp;with&nbsp;*/}
                                                {/*<Link*/}
                                                {/*    to={`/post/${this.props.seq}`}>{this.commentString(commentCount)}</Link>*/}
                                            </span>
                                        </div>
                                    </header>
                                    <div style={{clear: "both"}}></div>
                                    <div className="post-body entry-content">
                                        <div>
                                            { thumbnail &&
                                                <div className="separator" style={{clear: "both", textAlign: "center"}}>
                                                    <img src={thumbnail} className="pbtthumbimg" alt={""}/>
                                                </div>
                                            }
                                            {summary}
                                        </div>
                                        <div style={{
                                            float: "right",
                                            paddingRight: "10px",
                                            marginTop: "10px",
                                            fontSize: "1.4rem"
                                        }}>
                                            <Link className="morer" to={`/post/${this.props.seq}`}>Read More</Link>
                                        </div>
                                        <div style={{clear: "both"}}></div>
                                    </div>
                                    <footer className="entry-metabwrap">
                                        Posted in&nbsp;
                                        <Link to={`/?boardId=${boardId}`} rel="tag">{boardName}</Link>
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

function mapStateToProps(state) {
    return {};
}

export default withRouter(connect(mapStateToProps, {})(SummaryPost));