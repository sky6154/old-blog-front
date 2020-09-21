import React, {Component} from 'react';
import {withRouter} from "react-router";
import {connect} from "react-redux";

import PropTypes from "prop-types";
import queryString from "query-string";

import {fetchPostListTrigger} from "../redux/actions/post";
import PostList from "./PostList";

class Main extends Component {
    static DEFAULT_BOARD_ID = 0;
    static DEFAULT_PAGE = 1;

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const parsed = queryString.parse(this.props.location.search);

        const req = {
            boardId: (parsed.boardId) ? parsed.boardId : Main.DEFAULT_BOARD_ID,
            page: (parsed.page) ? parsed.page : 1,
        };

        this.props.fetchPostListTrigger(req);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const parsed = queryString.parse(this.props.location.search);
        const prevParsed = queryString.parse(prevProps.location.search);

        const req = {
            boardId: (parsed.boardId) ? parsed.boardId : Main.DEFAULT_BOARD_ID,
            page: (parsed.page) ? parsed.page : Main.DEFAULT_PAGE,
        };

        const prevReq = {
            boardId: (prevParsed.boardId) ? prevParsed.boardId : Main.DEFAULT_BOARD_ID,
            page: (prevParsed.page) ? prevParsed.page : Main.DEFAULT_PAGE,
        };

        if (prevReq.boardId !== req.boardId || prevReq.page !== req.page) {
            this.props.fetchPostListTrigger(req);
        }
    }

    render() {
        const {postListInfo} = this.props;

        const parsed = queryString.parse(this.props.location.search);
        const boardId = (parsed.boardId) ? parsed.boardId : Main.DEFAULT_BOARD_ID;

        return (
            <div className="content-areabwrap twelve columns">
                <div className="site-mainbwrap" role="main">
                    <div className="mainblogsec section">
                        <PostList postListInfo={postListInfo} boardId={boardId}/>
                    </div>
                </div>
            </div>
        )
    }
}


Main.defaultProps = {
    postList: [],
    isPostListFetching: false
};

Main.propTypes = {
    postList: PropTypes.array,
    isPostListFetching: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    return {
        postListInfo: state.post.postListInfo,
        isPostListFetching: state.post.isPostListFetching
    };
};

export default withRouter(connect(mapStateToProps, {
    fetchPostListTrigger
})(Main));
