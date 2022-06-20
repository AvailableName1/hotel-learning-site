
import React from 'react';
import './App.css';
import FurtherLearning from './components/FurtherLearning';
import LearningContainer from './components/LearningContainer';
import OrderMessageExplanation from './components/OrderMessageExplanation';

const ROOMS_PASSWORDS_DATA = ['1620 4114', <br />, '1614 3424', <br />, '1613 c638', <br />, '1603 3414', <br />, '1512 3434', <br />, '1402 2344', <br />, '1320 2133', <br />, '1302 4421', <br />, '1206 3143', <br />, '1112 4234', <br />, '1111 3232', <br />, '1110 3422', <br />, '1109 3411', <br />, '820 3111', <br />, '819 2131', <br />, '812 3412', <br />, '705 2122', <br />, '307 2111']
const ORDERS_DATA = [
  {
    orderMessage: ROOMS_PASSWORDS_DATA,
    answerMessage: 'got it',
    description: 'Это значит номера комнат в левом столбце и пин-коды для входа в них в правом столбце. Я ответил "got it" - это значит я понял.'
  },
  {
    orderMessage: '1402',
    answerMessage: 'ok',
    description: 'Это значит помой комнату 1402.'
  },
  {
    orderMessage: 'Li cp',
    answerMessage: 'Li cp done',
    description: 'Это значит возьми у Ли один чип.'
  },
  {
    orderMessage: ['0 1603', <br />, '150pls100'],
    answerMessage: ['0 1603', <br />, '150pls100 done'],
    description: 'Это значит спустись в ноль, т.е. в лобби, встреть людей и отведи их в комнату 1603. Забери у них 150 шекелей и 100 шекелей залог.'
  },
  {
    orderMessage: ['1402', <br />, '1320', <br />, '812 11', <br />, '1512 11', <br />, '819 12', <br />, '1614 12.30', <br />, '1603 13.10', <br />, '150pls100'],
    answerMessage: 'ok',
    description: 'Это лист комнат, которые надо помыть. Время рядом с комнатой значит во сколько она освободится для мойки.'
  },
  {
    orderMessage: '',
    answerMessage: '1402 done',
    description: 'Так мы пишем, когда закончили мойку комнаты.'
  },
  {
    orderMessage: '1603 patom conchili',
    answerMessage: 'ok',
    description: 'Это значит помой 1603, затем конец смены. Нужно отправить смс с твоим кодом из начала сменки.'
  },
  {
    orderMessage: 'Conchili',
    answerMessage: 'ok',
    description: 'Это значит конец смены. Нужно отправить смс с твоим кодом из начала сменки.'
  },
  {
    orderMessage: ['0 1603', <br />, '150pls100 cp'],
    answerMessage: ['0 1603', <br />, '150pls100 cp done'],
    description: 'Это значит спустись в лобби, встреть людей и отведи их в комнату 1603. Забери у них 150 шекелей и 100 шекелей залог и после этого отдай им чип.'
  },
  {
    orderMessage: ['0 1603', <br />, '150pls100 cp'],
    answerMessage: ['0 1603', <br />, '150pls100 no cp'],
    description: 'Это значит спустись в лобби, встреть людей и отведи их в комнату 1603. Забери у них 150 шекелей и 100 шекелей залог и после этого отдай им чип. Люди не захотели брать чип, либо у меня его не было. Поэтому в ответном сообщении я написал то же самое, НО! без слова чип. И дописал "no cp" - чип не взяли.'
  },
  {
    orderMessage: ['0 1603', <br />, '150pls100 cp'],
    answerMessage: ['0 1603', <br />, '150pls150 cp done', <br />, 'Fixed 150 pickadon'],
    description: 'Это значит спустись в лобби, встреть людей и отведи их в комнату 1603. Забери у них 150 шекелей и 100 шекелей залог и после этого отдай им чип. Люди дали мне больше денег, чем надо было. Вероятно, у нас не было размена. Поэтому в ответном сообщении я написал то же самое, НО! с измененной суммой залога. И дописал "fixed 150 pickadon" - изменил сумму залога.'
  },
  {
    orderMessage: ['1512 cp', <br />, 'Aday 200 cp'],
    answerMessage: ['1512 cp', <br />, 'Aday 200 cp done'],
    description: 'Это значит пойди в комнату 1512, забери у них чип и отдай им 200 шекелей залога.'
  },
  {
    orderMessage: '',
    answerMessage: 'Closet took 4 cps',
    description: 'Это мы пишем в начале смены, когда берем из кошелька чипы на сменку.'
  },
  {
    orderMessage: '',
    answerMessage: '1512 2 odeyala, 4 pillows',
    description: 'Это мы пишем, когда в ходе уборки нашли в номере больше белья, чем необходимый минимум. Лишнее нужно отнести в шкафчик.'
  },
  {
    orderMessage: '',
    answerMessage: ['Closet 5 cps', <br />, '1235 ILS'],
    description: 'Это мы пишем в конце сменки. Это значит я положил в кошелек в шкаф 5 чипов и 1235 шекелей.'
  },
  {
    orderMessage: '1603 tv',
    answerMessage: 'ok',
    description: 'Это значит отдыхай в комнате 1603.'
  },
  {
    orderMessage: '0 8',
    answerMessage: '0 8 done',
    description: 'Это значит пойди в лобби, встреть людей и отправь их на 8 этаж. С НИМИ НЕ ПОДНИМАЙСЯ.'
  },
  {
    orderMessage: '1614 aday 2 pltmsa',
    answerMessage: '1614 aday 2 pltmsa done',
    description: 'Это значит пойди в комнату 1614 и дай им два новых дополнительных полотенца.'
  },
  {
    orderMessage: '1614 paminay palatensa',
    answerMessage: '1614 paminay palatensa',
    description: 'Это значит пойди в комнату 1614 и поменяй им столько полотенец, сколько они тебе дадут грязных. Возьми с собой на всякий случай 4 полотенца.'
  },
  {
    orderMessage: '',
    answerMessage: 'Closet almost out of fruits and circle cakes',
    description: 'Это мы пишем, когда в шкафчике почти закончилось снаряжение. Пиши заранее и, когда в следующий раз ты придешь, новое снаряжение будет готово. Если все закончилось и тебе надо взять еще, смело звони Моше.'
  },
  {
    orderMessage: '',
    answerMessage: 'I\'m almost out of smell spray',
    description: 'Это мы пишем, когда у нас почти закончилось какое-либо средство для мытья. Тебе дадут новое. Если все совсем закончилось, смело звони Моше.'
  }
]

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      componentRendered: Number
    }
    this.handlePreNextClick = this.handlePreNextClick.bind(this);
    this.handleFinalClick = this.handleFinalClick.bind(this);
    this.handleBackToStartClick = this.handleBackToStartClick.bind(this);
  }
  componentDidMount() {
    this.setState({
      componentRendered: 1
    })
  }
  handlePreNextClick() {
    this.setState({
      componentRendered: 2
    })
  }
  handleFinalClick() {
    this.setState({
      componentRendered: 3
    })
  }
  handleBackToStartClick() {
    this.setState({
      componentRendered: 1
    })
  }
  render() {
    return (
      <div className='siteBody'>
        {this.state.componentRendered === 1 && <LearningContainer handler={this.handlePreNextClick} />}
        {this.state.componentRendered === 2 && <FurtherLearning handler={this.handleFinalClick} />}
        {this.state.componentRendered === 3 && <OrderMessageExplanation messageList={ORDERS_DATA} handler={this.handleBackToStartClick} />}
      </div>
    )
  }
}

export default App;
