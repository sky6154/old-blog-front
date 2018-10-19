import React, {Component} from 'react';

class RightWidget extends Component {
  render(){
    return (
      <div className="widget-area four columns" id="secondarybwrap" role="complementary">
        <div className="widget widget_search">
          <form action="/search" className="search-form" method="get" role="search">
            <label>
              <span className="screen-reader-textbwrap">Search for:</span>
              <input className="search-field" name="q" placeholder="Search" title="Search for:" type="search"
                     value="" />
            </label>
            <input className="search-submit" type="submit" value="Search" />
          </form>
        </div>
        <div className="sidebarright section" id="sidebarright"><div className="widget PopularPosts" data-version="1"
                                                                     id="PopularPosts1">
          <h2>Popular Posts</h2>
          <div className="widget-content popular-posts">
            <ul>
              <li>
                <div className="item-thumbnail-only">
                  <div className="item-thumbnail">
                    <a href="http://base-business.blogspot.com/2014/04/sample-post-with-links-paragraphs-and.html"
                       target="_blank">
                      <img alt="" border="0"
                           src="http://1.bp.blogspot.com/--Mabz83p5tg/U1h1u1S2pvI/AAAAAAAAIos/wRC4CfMIt7E/w72-h72-p-k-no-nu/postimg-2.jpg" />
                    </a>
                  </div>
                  <div className="item-title"><a
                    href="http://base-business.blogspot.com/2014/04/sample-post-with-links-paragraphs-and.html">Sample post with, links, paragraphs and comments</a></div>
                </div>
                <div style={{clear: "both"}}></div>
              </li>
              <li>
                <div className="item-thumbnail-only">
                  <div className="item-thumbnail">
                    <a href="http://base-business.blogspot.com/2014/04/this-is-just-going-to-be-another-test.html"
                       target="_blank">
                      <img alt="" border="0"
                           src="http://2.bp.blogspot.com/-zUsj8biczxE/U1h1x9RmIOI/AAAAAAAAIpE/IfmPv1JWGVw/w72-h72-p-k-no-nu/postimg-5.jpg" />
                    </a>
                  </div>
                  <div className="item-title"><a
                    href="http://base-business.blogspot.com/2014/04/this-is-just-going-to-be-another-test.html">This is Just Going To Be Another Test Post</a></div>
                </div>
                <div style={{clear: "both"}}></div>
              </li>
              <li>
                <div className="item-thumbnail-only">
                  <div className="item-thumbnail">
                    <a href="http://base-business.blogspot.com/2014/03/this-is-going-to-be-decent-length-title.html"
                       target="_blank">
                      <img alt="" border="0"
                           src="http://2.bp.blogspot.com/-vZQqwQIswnY/U1h1qDulejI/AAAAAAAAIn8/gXOqXI_6Nk8/w72-h72-p-k-no-nu/postimg-11.jpg" />
                    </a>
                  </div>
                  <div className="item-title"><a
                    href="http://base-business.blogspot.com/2014/03/this-is-going-to-be-decent-length-title.html">This Is Going To Be A Decent Length Title With Little Text</a></div>
                </div>
                <div style={{clear: "both"}}></div>
              </li>
            </ul>
            <div className="clear"></div>
            <span className="widget-item-control">
              <span className="item-control blog-admin">
                <a className="quickedit"
                   href="//www.blogger.com/rearrange?blogID=4983387981592302466&widgetType=PopularPosts&widgetId=PopularPosts1&action=editWidget&sectionId=sidebarright"
                   onClick='return _WidgetManager._PopupConfig(document.getElementById("PopularPosts1"));'
                   target="configPopularPosts1" title="Edit">
                  <img alt="" height="18" src="https://resources.blogblog.com/img/icon18_wrench_allbkg.png"
                       width="18" />
                </a>
              </span>
            </span>
            <div className="clear"></div>
          </div>
        </div><div className="widget HTML" data-version="1" id="HTML1">
          <h2 className="title">Recent Posts</h2>
          <div className="widget-content">
            <script>var numposts =5; var showpostdate = false; var showpostsummary = false; var numchars = 100; </script>
            <script
              src="http://base-business.blogspot.com/feeds/posts/default?orderby=published&alt=json-in-script&callback=rp">
            </script>
          </div>
          <div className="clear"></div>
          <span className="widget-item-control">
            <span className="item-control blog-admin">
              <a className="quickedit"
                 href="//www.blogger.com/rearrange?blogID=4983387981592302466&widgetType=HTML&widgetId=HTML1&action=editWidget&sectionId=sidebarright"
                 onClick='return _WidgetManager._PopupConfig(document.getElementById("HTML1"));' target="configHTML1"
                 title="Edit">
                <img alt="" height="18" src="https://resources.blogblog.com/img/icon18_wrench_allbkg.png" width="18" />
              </a>
            </span>
          </span>
          <div className="clear"></div>
        </div><div className="widget Label" data-version="1" id="Label1">
          <h2>Categories</h2>
          <div className="widget-content list-label-widget-content">
            <ul>
              <li>
                <a dir="ltr" href="http://base-business.blogspot.com/search/label/Entertainment">Entertainment</a>
                <span dir="ltr">(1)</span>
              </li>
              <li>
                <a dir="ltr" href="http://base-business.blogspot.com/search/label/Graphic%20Design">Graphic Design</a>
                <span dir="ltr">(3)</span>
              </li>
              <li>
                <a dir="ltr" href="http://base-business.blogspot.com/search/label/HTML%20Elements">HTML Elements</a>
                <span dir="ltr">(1)</span>
              </li>
              <li>
                <a dir="ltr" href="http://base-business.blogspot.com/search/label/Sports">Sports</a>
                <span dir="ltr">(4)</span>
              </li>
              <li>
                <a dir="ltr" href="http://base-business.blogspot.com/search/label/Web%20Design">Web Design</a>
                <span dir="ltr">(4)</span>
              </li>
            </ul>
            <div className="clear"></div>
            <span className="widget-item-control">
              <span className="item-control blog-admin">
                <a className="quickedit"
                   href="//www.blogger.com/rearrange?blogID=4983387981592302466&widgetType=Label&widgetId=Label1&action=editWidget&sectionId=sidebarright"
                   onClick='return _WidgetManager._PopupConfig(document.getElementById("Label1"));'
                   target="configLabel1" title="Edit">
                  <img alt="" height="18" src="https://resources.blogblog.com/img/icon18_wrench_allbkg.png"
                       width="18" />
                </a>
              </span>
            </span>
            <div className="clear"></div>
          </div>
        </div><div className="widget Text" data-version="1" id="Text2">
          <h2 className="title">Text Widget</h2>
          <div className="widget-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation test link ullamco laboris nisi ut aliquip ex ea commodo consequat.<br />
          </div>
          <div className="clear"></div>
          <span className="widget-item-control">
            <span className="item-control blog-admin">
              <a className="quickedit"
                 href="//www.blogger.com/rearrange?blogID=4983387981592302466&widgetType=Text&widgetId=Text2&action=editWidget&sectionId=sidebarright"
                 onClick='return _WidgetManager._PopupConfig(document.getElementById("Text2"));' target="configText2"
                 title="Edit">
                <img alt="" height="18" src="https://resources.blogblog.com/img/icon18_wrench_allbkg.png" width="18" />
              </a>
            </span>
          </span>
          <div className="clear"></div>
        </div><div className="widget BlogArchive" data-version="1" id="BlogArchive1">
          <h2>Blog Archive</h2>
          <div className="widget-content">
            <div id="ArchiveList">
              <div id="BlogArchive1_ArchiveList">
                <select id="BlogArchive1_ArchiveMenu">
                  <option value="">Blog Archive</option>
                  <option value="http://base-business.blogspot.com/2014/04/">April (2)</option>
                  <option value="http://base-business.blogspot.com/2014/03/">March (3)</option>
                  <option value="http://base-business.blogspot.com/2014/02/">February (2)</option>
                  <option value="http://base-business.blogspot.com/2014/01/">January (2)</option>
                  <option value="http://base-business.blogspot.com/2013/12/">December (2)</option>
                  <option value="http://base-business.blogspot.com/2013/11/">November (1)</option>
                  <option value="http://base-business.blogspot.com/2013/10/">October (1)</option>
                  <option value="http://base-business.blogspot.com/2013/04/">April (1)</option>
                </select>
              </div>
            </div>
            <div className="clear"></div>
            <span className="widget-item-control">
              <span className="item-control blog-admin">
                <a className="quickedit"
                   href="//www.blogger.com/rearrange?blogID=4983387981592302466&widgetType=BlogArchive&widgetId=BlogArchive1&action=editWidget&sectionId=sidebarright"
                   onClick='return _WidgetManager._PopupConfig(document.getElementById("BlogArchive1"));'
                   target="configBlogArchive1" title="Edit">
                  <img alt="" height="18" src="https://resources.blogblog.com/img/icon18_wrench_allbkg.png"
                       width="18" />
                </a>
              </span>
            </span>
            <div className="clear"></div>
          </div>
        </div></div>
      </div>
    );
  }
}


export default RightWidget;