import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Paging extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPage: 1
        }
    }


    makeNum = (isEmpty, number, size, totalPages) => {
        let showNumber = number + 1;

        if (isEmpty) {
            return <Link to={`#`}>&nbsp;1&nbsp;</Link>;
        } else {

            let min = 1;
            let max = size;
            let pages = [];

            if (size >= totalPages || number <= size) {
                min = 1;
                max = size;
            } else {
                min = number - 2;
                max = number + 2;
            }

            for (let i = min; i <= max; i++) {
                if(i === showNumber){
                    pages.push(<Link to={`#`} style={{pointerEvents: "none"}} onClick={(e)=>e.preventDefault()} key={i}>&nbsp;<span style={{fontWeight: "bold"}}>{i}</span>&nbsp;</Link>);
                }
                else{
                    pages.push(<Link to={{pathname: `/${this.props.boardId}`, query: {i}}} key={i} /*onClick={this.handlePagingClick}*/>&nbsp;{i}&nbsp;</Link>);
                }
            }

            return pages;
        }
    };

    // TODO
    handlePagingClick = (e) => {
        console.log(e.target);
    };

    render() {

        // Pageable
        let {empty, first, last, number, numberOfElements, pageable, size, sort, totalElements, totalPages} = this.props.pageable;
        let {boardId} = this.props;

        return (
            <div>
                <div style={{clear: "both"}}/>
                <div className="blog-pager" id="blog-pager">
                    {!first &&
                    <span id="blog-pager-newer-link">
                                <Link className="blog-pager-newer-link"
                                      to="http://base-business.blogspot.com/search?updated-max=2014-03-04T17:59:00-08:00&amp;max-results=5"
                                      id="Blog1_blog-pager-newer-link" title="Newer Posts">{"<<<"}
                                </Link>
                            </span>
                    }
                    {this.makeNum(empty, number, size, totalPages)}
                    {!last &&
                    <span id="blog-pager-older-link">
                                <Link className="blog-pager-older-link"
                                      to="http://base-business.blogspot.com/search?updated-max=2014-03-04T17:59:00-08:00&amp;max-results=5"
                                      id="Blog1_blog-pager-older-link" title="Older Posts">{">>>"}
                                </Link>
                            </span>
                    }
                </div>
            </div>
        )
    }
}


export default Paging;
