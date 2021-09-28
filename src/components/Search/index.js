import { Component } from 'react'
import './index.scss'
import { Button } from 'antd'
import { AlignCenterOutlined, RightCircleFilled } from '@ant-design/icons'

class Search extends Component {

  render () {
    return (
      <div className="search">
        <p className="title">Find More Here</p>
        <div className="input">
          <div className="icon"><AlignCenterOutlined style={{fontSize: '20px', color: '#B7B7B7' }} /></div>
          <input placeholder="输入关键字" />
          <Button type="primary">
            <RightCircleFilled style={{color: '#FFFFFF', fontSize: '16px'}} />
            找到你的梦想
          </Button>
        </div>
      </div>
    )
  }
}

export default Search