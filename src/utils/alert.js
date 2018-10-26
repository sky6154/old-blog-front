import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import './alert.css'; // overwrite

import _ from 'lodash';

const CAlert = {
  show(message, type='error') {
    Alert[type](`<h4>${message}</h4>`, {
      position: 'top-right',
      offset: 50,
      effect: 'slide',
      timeout: 10000,
      html: true
    });
  },
  
  error(error) {
    if (!_.isEmpty(error)) {
      let message = '' + (error.error_msg || error.message || error.responseText);
      this.show(message);
    }
  }
};

export default CAlert;