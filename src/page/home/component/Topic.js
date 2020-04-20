import React, { Component } from 'react'
import { TopicWrapper, TopicItem } from '../style'
import { connect } from 'react-redux'


class Topic extends Component {
  render () {
    return (
      <TopicWrapper>
        {
          this.props.list.map(item => {
            return <TopicItem key={item.get('id')}>
              <img src={item.get('imgUrl')}
                className="topic-pic"
                alt=""
              />
              {item.get('title')}
            </TopicItem>
          })
        }

      </TopicWrapper>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  list: state.getIn(['home', 'topicList'])
});
export default connect(mapStateToProps)(Topic);