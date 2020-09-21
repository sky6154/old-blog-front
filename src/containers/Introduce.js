import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import moment from "moment";

class Introduce extends Component {

    render() {
      const fromNow = moment().diff(moment("20160509", "YYYYMMDD"), 'year');

        return (
            <div className="content-areabwrap twelve columns">
                <p>
                    고겸재<br/>
                    sky6154@gmail.com<br/>
                    만 {fromNow}년차 웹개발자
                </p>

                <p>
                    컴퓨터공학을 전공했고, 언어 가리지 않고 새로운걸 알아가는데 관심이 많은 개발자 입니다.
                    <br/>
                    맥주를 종아하며, 캠핑가서 먹는 맥주는 더 좋아합니다.
                </p>

                <p>
                    개발하다가 혹은 궁금해서, 문득 날씨가 좋아서 알아본 정보들을 적는 공간이며,
                    <br/>
                    주로 웹개발 관련 지식을 적습니다.
                </p>

              <p>
                블로그는 직접 서버부터 배포 및 개발까지 모두 혼자 구축하였으며,
                <br/>
                전원버튼 눌러서 웹 사이트를 켜기까지, 그 과정에 블로그 개발 과정을 같이 녹여보는게
                <br/>
                이 블로그의 목표입니다.
              </p>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        post: state.post.post,
        isPostFetching: state.post.isPostFetching
    };
}

export default withRouter(connect(mapStateToProps, {})(Introduce));