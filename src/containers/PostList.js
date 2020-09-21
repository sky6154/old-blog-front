import React, {Component} from 'react';
import _ from "lodash";
import SummaryPost from "../components/SummaryPost";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {fetchPostListTrigger} from "../redux/actions/post";
import PropTypes from "prop-types";

import Paging from "../components/Paging";

class PostList extends Component {
    showPost = (postList) => {
        if(!_.isEmpty(postList)){
            let list = [];
            _.forEach(postList, function (value, key){
                let {seq, regDate, author, commentCount, title, content, boardId, boardName} = value;

                list.push(
                    <SummaryPost date={regDate} author={author}
                                 commentCount={commentCount} title={title}
                                 content={content}
                                 boardId={boardId}
                                 boardName={boardName}
                                 key={key} seq={seq} />
                );
            });

            return list;
        }
        else{
            return (<div>게시글이 없습니다.</div>);
        }
    };

    render(){
        const {postListInfo, boardId} = this.props;
        const postList = (_.isNil(postListInfo.content)) ? [] : postListInfo.content;

        return (
            <div className="widget Blog" data-version="1">
                <div className="blog-posts hfeed">
                    {this.showPost(postList)}
                </div>
                <Paging boardId={boardId} postListInfo={postListInfo} />
            </div>
        )
    }
}


PostList.defaultProps = {
    postList          : [],
    isPostListFetching: false
};

PostList.propTypes = {
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
})(PostList));