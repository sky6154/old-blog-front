import React, {Component} from "react";
import {connect}          from "react-redux";
import {withRouter}       from "react-router";
import _                  from "lodash";

class Post extends Component {
  render(){
    let {title, content, date, author, mainImage} = this.props;

    return (
      <div className="content-areabwrap twelve columns" id="primarybwrap">
      <div className="site-mainbwrap" id="mainbwrap" role="main">
        <div className="mainblogsec section" id="mainblogsec"><div className="widget Blog" data-version="1" id="Blog1">
          <div className="blog-posts hfeed">
            <div className="date-outer">
              <h2 className="date-header">
                <span>Wednesday, April 23, 2014</span></h2>
                <div className="date-posts">

                  <div className="post-outer">
                    <article className="post hentry">
                      <header className="entry-header">
                        <h2 className="post-title entry-title">
                          <a href="http://base-business.blogspot.com/2014/04/sample-post-with-links-paragraphs-and.html">Sample post with, links, paragraphs and comments</a>
                        </h2>
                        <div className="entry-metabwrap">
                          <span>Posted on Wednesday, April 23, 2014</span>
                          <span>&nbsp;by&nbsp;
                            <a href="https://plus.google.com/102090464826236196083" rel="author" title="author profile">W.A.M. Lasantha Bandara Karunarathna</a>&nbsp;with&nbsp;
                            <a href="http://base-business.blogspot.com/2014/04/sample-post-with-links-paragraphs-and.html#comment-form" onClick="">1 comment</a>
                          </span>
                        </div>
                      </header>
                      <div className="post-header-line-1"></div>
                      <div className="post-body entry-content">
                        <div className="separator" style={{clear: "both", textAlign: "center"}}>
                          <a
                            href="http://1.bp.blogspot.com/--Mabz83p5tg/U1h1u1S2pvI/AAAAAAAAIos/wRC4CfMIt7E/s1600/postimg-2.jpg"
                            imageanchor="1"
                            style={{
                              clear       : "left",
                              float       : "left",
                              marginBottom: "1em",
                              marginRight : "1em"
                            }}>
                            <img border="0" height="240"
                                 src="http://1.bp.blogspot.com/--Mabz83p5tg/U1h1u1S2pvI/AAAAAAAAIos/wRC4CfMIt7E/s1600/postimg-2.jpg"
                                 width="320" /></a>
                        </div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        <a href="http://www.premiumbloggertemplates.com/" rel="nofollow" target="_blank">test link</a>
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        <a href="http://www.premiumbloggertemplates.com/" rel="nofollow" target="_blank">another link</a>
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        <br />
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry&#8217;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                        <a href="https://www.blogger.com/home" rel="nofollow" target="_blank">link again with longer anchor text</a>
                        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with
                        <a href="http://newbloggerthemes.com/" rel="nofollow" target="_blank">test link</a>
                        the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        <br /><br />
                        <blockquote>
                          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                          The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &#8216;Content here, content here&#8217;, making it look like readable English.
                        </blockquote>
                        <br />Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &#8216;lorem ipsum&#8217; will uncover many web sites still in their infancy.
                        Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        <br /><br />
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical
                        <a href="http://www.blogger.com/" rel="nofollow" target="_blank">test link here too</a>
                        Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                        consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classNameical literature, discovered the undoubtable source.
                        Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &#8220;de Finibus Bonorum et Malorum&#8221; (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                        This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, &#8220;Lorem ipsum dolor sit amet..&#8221;, comes from a line in section 1.10.32.
                        <div style={{clear: "both"}}></div>
                      </div>
                      <footer className="entry-metabwrap">
                        Posted in&nbsp;<a href="http://base-business.blogspot.com/search/label/Sports" rel="tag">Sports</a>,
                        <a href="http://base-business.blogspot.com/search/label/Web%20Design" rel="tag">Web Design</a>
                      </footer>
                    </article>
                    <div style={{clear: "both"}}></div>
                    <div className="blog-pager" id="blog-pager">
                      <span id="blog-pager-older-link">
                        <a className="blog-pager-older-link"
                           href="http://base-business.blogspot.com/2014/04/this-is-just-going-to-be-another-test.html"
                           id="Blog1_blog-pager-older-link" title="Older Post">Older Post</a>
                      </span>
                      <a className="home-link" href="http://base-business.blogspot.com/">Home</a>
                    </div>
                    <div className="clear"></div>
                  </div>
                </div>
            </div>
          </div>
          <div style={{clear: "both"}}></div>
        </div></div>
      </div>
    </div>
    );
  }
}

function mapStateToProps(state){
  return {};
}

export default withRouter(connect(mapStateToProps, {})(Post));