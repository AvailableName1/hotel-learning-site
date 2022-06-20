import React from 'react';
import './components-styles/LearningContainer.css'
import FurtherLearning from './FurtherLearning'

const ACTIVE = 'ACTIVE'
const NOTACTIVE = 'NOTACTIVE'

class LearningContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialState: Boolean,
      learningStarted: Boolean
    }
    this.initialButtonClick = this.initialButtonClick.bind(this);
  }
  componentDidMount() {
    this.setState({
      initialState: true,
      learningStarted: false,
    })
  }
  initialButtonClick() {
    this.setState({
      initialState: false,
      learningStarted: false,
    })
  }
  render() {
    return (
      <div className='LearningContainer'>
        {this.state.initialState &&
          <div className='greeting'>
            <h2 className='greeting-heading'>Привет!</h2>
            <p className='greeting-text'>Этот сайт научит тебя основам рабочих заданий в отеле Моше!</p>
            <button onClick={this.initialButtonClick} style={{ padding: 8 + 'px' }} type='button'>Начать</button>
          </div>
        }
        {!this.state.initialState &&
          <div className='learning-proccess'>
            <h4>Отлично :)</h4>
            <p>Во-первых, <br />существует 3 главных правила, которые расположены в порядке важности:</p>
            <ol>
              <li><span className='alert-red'>Нельзя</span>, чтобы люди долго стояли внизу</li>
              <li><span className='alert-green'>Нужно</span>, чтобы комната была максимально чистой</li>
              <li><span className='alert-green'>Нужно</span> навести чистоту в комнате за 30-45 мин</li>
            </ol>
            <button onClick={this.props.handler} style={{ padding: 8 + 'px' }} type='button'>Далее</button>
          </div>
        }
      </div>
    )
  }
}

export default LearningContainer;
