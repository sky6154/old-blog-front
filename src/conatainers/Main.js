import React, {Component} from 'react';
import SummaryPost        from "../components/SummaryPost";

class Main extends Component {
  render(){
    return (
      <div className="content-areabwrap twelve columns" id="primarybwrap">
        <div className="site-mainbwrap" id="mainbwrap" role="main">
          <div className="mainblogsec section" id="mainblogsec">
            <div className="widget Blog" data-version="1">
              <div className="blog-posts hfeed">
                <SummaryPost date={"Wednesday, April 23, 2014"} author={"W.A.M. Lasantha Bandara Karunarathna"}
                             commentCount={1} title={"Sample post with, links, paragraphs and comments"}
                             summary={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ..."}
                             imageOrigin={"http://1.bp.blogspot.com/--Mabz83p5tg/U1h1u1S2pvI/AAAAAAAAIos/wRC4CfMIt7E/s1600/postimg-2.jpg"} />


                <SummaryPost date={"Wednesday, April 23, 2014"} author={"W.A.M. Lasantha Bandara Karunarathna"}
                             commentCount={0} title={"This is Just Going To Be Another Test Post"}
                             summary={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ..."}
                             imageOrigin={"http://2.bp.blogspot.com/-zUsj8biczxE/U1h1x9RmIOI/AAAAAAAAIpE/IfmPv1JWGVw/s1600/postimg-5.jpg"} />

                <SummaryPost date={"Wednesday, April 23, 2014"} author={"W.A.M. Lasantha Bandara Karunarathna"}
                             commentCount={2} title={"한글도 테스트 해보자"}
                             summary={"두비두밤 비밤바.."}
                             imageOrigin={"http://3.bp.blogspot.com/-V5atjKU8f4U/U1h1o1906GI/AAAAAAAAIns/tVmysrWUSZE/s1600/postimg-1.jpg"} />

                <SummaryPost date={"Wednesday, April 23, 2014"} author={"W.A.M. Lasantha Bandara Karunarathna"}
                             commentCount={3} title={"제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목"}
                             summary={"우ㅏ이ㅓㅁ;ㅣㅏㄴㅇ러ㅣㅏㅁㄴ어리ㅏ;ㅁㄴㅇ뤼ㅏㅁㄴㅇ러ㅣㅏㅁㄴㅇ러ㅣㅏ;ㅁㄴ어라ㅣㅁㄴ어리ㅏㅁㄴ얾ㄴ아ㅣ러;ㅁㅇ낢ㄴㄻㅇㄴㄻㄴㅇㄹㄴㅇㄹ"}
                             imageOrigin={"http://2.bp.blogspot.com/-WtnH0gxhniY/U1h10c1BMZI/AAAAAAAAIpc/Te9_0Fnk0Mc/s1600/postimg-8.jpg"} />

                <SummaryPost date={"Wednesday, April 23, 2014"} author={"W.A.M. Lasantha Bandara Karunarathna"}
                             commentCount={4} title={"Sample post with, links, paragraphs and comments"}
                             summary={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ..."}
                             imageOrigin={"http://2.bp.blogspot.com/-vZQqwQIswnY/U1h1qDulejI/AAAAAAAAIn8/gXOqXI_6Nk8/s1600/postimg-11.jpg"} />

              </div>
            </div>





            <div style={{clear: "both"}} />
            <div className="blog-pager" id="blog-pager">
              <span id="blog-pager-newer-link">
                <a className="blog-pager-older-link"
                   href="http://base-business.blogspot.com/search?updated-max=2014-03-04T17:59:00-08:00&amp;max-results=5"
                   id="Blog1_blog-pager-older-link" title="Older Posts">Newer Posts</a>
              </span>
              <a className="home-link" href="http://base-business.blogspot.com/">Home</a>
              <span id="blog-pager-older-link">
                <a className="blog-pager-older-link"
                   href="http://base-business.blogspot.com/search?updated-max=2014-03-04T17:59:00-08:00&amp;max-results=5"
                   id="Blog1_blog-pager-older-link" title="Older Posts">Older Posts</a>
              </span>
            </div>

            <br />
            <div className="clear"></div>
            <div className="blog-feeds">
              <div className="feed-links">
                Subscribe to:
                <a className="feed-link" href="http://base-business.blogspot.com/feeds/posts/default" target="_blank"
                   type="application/atom+xml">Posts (Atom)</a>
              </div>
            </div>

          </div></div>
      </div>
    )
  }
}


export default Main;