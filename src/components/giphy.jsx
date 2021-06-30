import React, {Component} from 'react';
import {Spin} from 'antd';
import { Typography, Alert } from 'antd';
const { Text } = Typography;

class Giphy extends Component {
  render() {
    return (
      <React.Fragment>
        <Text mark style={{margin: '25px'}} type="success">{this.props.title}</Text>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '300px',
          margin: 'auto',
          overflowX: 'scroll',
          flexWrap: 'wrap'
        }}>

          {this.props.data.list.length === 0 && !this.props.data?.loading && <Alert message="No data available" type="error" />}

          {this.props.data?.loading && <div>
            <Spin size="large" tip={this.props.loadingLabel}/>
          </div>}

          {!this.props.data?.loading && this.props.data?.list?.map((giphy, i) => (
            <img key={i} src={giphy.images.fixed_height_small.url} alt={giphy.images.title}/>
          ))}

        </div>
      </React.Fragment>
    );
  }
}

export default Giphy