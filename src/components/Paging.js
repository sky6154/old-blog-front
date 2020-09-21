import React, {Component} from 'react';
import {Link} from "react-router-dom";
import _ from "lodash";

class Paging extends Component {
    static FIRST_OF_PAGES = 1;

    constructor(props) {
        super(props);

        this.state = {
            currentPage: Paging.FIRST_OF_PAGES
        }
    }


    makeNum = (postListInfo) => {
        const {empty, first, last, number, numberOfElements, pageable, size, sort, totalElements, totalPages} = postListInfo;
        let showNumber = number + 1;

        if (_.isNil(postListInfo) || empty) {
            return <Link to={`#`} style={{pointerEvents: "none"}} onClick={(e) => e.preventDefault()}>&nbsp;<span style={{fontWeight: "bold"}}>1</span>&nbsp;</Link>;
        } else {
            let pageIndex = (Math.floor((showNumber - 1) / size)) + 1;
            let firstOfPages = ((pageIndex - 1) * size) + 1;
            let endOfPages = firstOfPages + (size - 1);
            endOfPages = Math.min(endOfPages, totalPages);

            let lastPageIndex = (Math.floor((totalPages - 1) / size)) + 1;
            let pages = [];

            if(pageIndex > 1 ){
                let prevPageIndex = pageIndex - 1;
                let prevFirstOfPages = ((prevPageIndex - 1) * size) + 1;
                let prevEndOfPages = prevFirstOfPages + (size - 1);
                pages.push(<Link to={`/?boardId=${this.props.boardId}&page=${prevEndOfPages}`}
                                 key={"prev"}>&nbsp;<span>{"<"}</span>&nbsp;&nbsp;&nbsp;</Link>);
            }

            for (let i = firstOfPages; i <= endOfPages; i++) {
                if (i === showNumber) {
                    pages.push(<Link to={`#`} style={{pointerEvents: "none"}} onClick={(e) => e.preventDefault()}
                                     key={i}>&nbsp;<span style={{fontWeight: "bold"}}>{i}</span>&nbsp;</Link>);
                } else {
                    pages.push(<Link to={`/?boardId=${this.props.boardId}&page=${i}`} key={i}>&nbsp;{i}&nbsp;</Link>);
                }
            }

            if(pageIndex < lastPageIndex){
                let postPageIndex = pageIndex + 1;
                let postFirstOfPages = ((postPageIndex - 1) * size) + 1;
                pages.push(<Link to={`/?boardId=${this.props.boardId}&page=${postFirstOfPages}`}
                                 key={"post"}>&nbsp;&nbsp;&nbsp;<span>{">"}</span>&nbsp;</Link>);
            }

            return pages;
        }
    };

    render() {
        // Pageable
        let {empty, first, last, number, numberOfElements, pageable, size, sort, totalElements, totalPages} = this.props.postListInfo;
        let {boardId} = this.props;

        return (
            <div>
                <div style={{clear: "both"}}/>
                <div className="blog-pager" id="blog-pager">
                    {!_.isNil(first) && !first &&
                    <span id="blog-pager-newer-link">
                                <Link className="blog-pager-newer-link"
                                      to={`/?boardId=${boardId}&page=${Paging.FIRST_OF_PAGES}`}
                                      title="Newer Posts">{"<<<"}
                                </Link>
                            </span>
                    }
                    {this.makeNum(this.props.postListInfo)}
                    {!_.isNil(last) && !last &&
                    <span id="blog-pager-older-link">
                                <Link className="blog-pager-older-link"
                                      to={`/?boardId=${boardId}&page=${totalPages}`}
                                      title="Older Posts">{">>>"}
                                </Link>
                            </span>
                    }
                </div>
            </div>
        )
    }
}


export default Paging;
