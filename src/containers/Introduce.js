import React, {Component} from "react";
import {connect}          from "react-redux";
import {withRouter}       from "react-router";

class Introduce extends Component {
  render(){
    return (
      <div className="content-areabwrap twelve columns">
        접니다.
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    post          : state.post.post,
    isPostFetching: state.post.isPostFetching
  };
}

export default withRouter(connect(mapStateToProps, {})(Introduce));