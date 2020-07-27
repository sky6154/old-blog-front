import React, {Component} from "react";
import moment             from "moment";
import Link               from "react-router-dom/es/Link";

class Footer extends Component {
  render(){
    let year = moment().year();

    return (
      <div className="site-infobwrap">
        {/* <!-- Do not edit or remove credits without our permission: newbloggerthemes.com -->*/}
        Copyright &#169;&nbsp;
        {year}&nbsp;
        <a href="http://base-business.blogspot.com/">Base Business</a> | Powered by <a href="http://www.blogger.com/">Blogger</a>
        <br />Design by <a href="http://www.iografica.it/" target="_blank">Iografica.it</a> | Blogger Theme by <a href="http://newbloggerthemes.com/" target="_blank" title="NewBloggerThemes.com">NewBloggerThemes.com</a>
      </div>
    )
  }
}

export default Footer;