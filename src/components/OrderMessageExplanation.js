import React from 'react';
import './components-styles/OrderMessageExplanation.css'

class OrderMessageExplanation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messageListPosition: 0
        }
        this.handleNextMessage = this.handleNextMessage.bind(this);
        this.handlePreviousMessage = this.handlePreviousMessage.bind(this);
    }
    handleNextMessage() {
        this.setState({
            messageListPosition: this.state.messageListPosition + 1
        })
    }
    handlePreviousMessage() {
        this.setState({
            messageListPosition: this.state.messageListPosition - 1
        })
    }
    render() {
        return (
            <div className='LearningContainer'>
                <h4>Описание заданий</h4>
                {this.state.messageListPosition < this.props.messageList.length &&
                    <div>
                        <div className='messages-screen'>
                            <p className='order'>{this.props.messageList[this.state.messageListPosition].orderMessage}</p>
                            <p className='answer'>{this.props.messageList[this.state.messageListPosition].answerMessage}</p>
                        </div>
                        <div className='order-description'>
                            <p>{this.props.messageList[this.state.messageListPosition].description}</p>
                        </div>
                    </div>
                }
                {this.state.messageListPosition < this.props.messageList.length &&
                    <button onClick={this.handleNextMessage} style={{ padding: 8 + 'px' }} type='button'>Далее</button>}
                {this.state.messageListPosition >= this.props.messageList.length &&
                    <button onClick={this.props.handler} style={{ padding: 8 + 'px' }} type='button'>В начало</button>}
                {this.state.messageListPosition < this.props.messageList.length && this.state.messageListPosition >= 1 &&
                    <button onClick={this.handlePreviousMessage} type='button' style={{ padding: 8 + 'px', marginLeft: `${2.5}em` }}>Назад</button>
                }
                {this.state.messageListPosition >= this.props.messageList.length &&
                    <div className='LearningContainer' style={{ marginTop: `${1}em` }}>
                        <h4>На этом все</h4>
                        <p>Удачи тебе и отличных сменок :)</p>
                    </div>
                }
            </div>
        )
    }
}

export default OrderMessageExplanation;