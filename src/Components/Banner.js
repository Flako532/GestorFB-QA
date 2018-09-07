import React, { Component } from 'react';
import './Banner.css';
import { Button, Radio, Icon } from 'antd';

class Banner extends Component {

  render() {
    return (
      <div className="banner">
      <Button type="primary">Primary<Icon type="right" /></Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="danger">Danger</Button>
      </div>
    );
  }
}

export default Banner;
