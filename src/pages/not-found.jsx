import React, {Component} from 'react';
import { Result, Button } from 'antd';

class NotFound extends Component {
  render() {
    return (
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button href={'/'} type="primary">Back Home</Button>}
      />
    );
  }
}

export default NotFound;