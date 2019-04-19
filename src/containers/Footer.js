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
        <Link to="http://base-business.blogspot.com/">Base Business</Link> | Powered by <Link to="http://www.blogger.com/">Blogger</Link>
        <br />Design by <Link to="http://www.iografica.it/" target="_blank">Iografica.it</Link> | Blogger Theme by <Link to="http://newbloggerthemes.com/" target="_blank" title="NewBloggerThemes.com">NewBloggerThemes.com</Link>
      </div>
    )
  }
}

export default Footer;