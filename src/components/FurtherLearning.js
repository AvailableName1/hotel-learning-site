import React from 'react';
import './components-styles/FurtherLearning.css'

class FurtherLearning extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slideNumber: 1
        }
        this.handleSlideSwitch = this.handleSlideSwitch.bind(this);
    }
    handleSlideSwitch() {
        this.setState(() => {
            if (this.state.slideNumber === 1) {
                return {
                    slideNumber: 2
                }
            } else {
                return {
                    slideNumber: 1
                }
            }
        })
    }
    render() {
        return (
            <div className='LearningContainer'>
                {this.state.slideNumber === 1 &&
                    <div>
                        <h4>Второй важный момент</h4>
                        <p>Если ты не понимаешь, что надо делать или сомневаешься.<br />
                            Лучше всего позвонить Моше!<br />
                            Это будет наиболее правильное решение.</p>
                        <h4>Кроме этого</h4>
                        <p>Мы всегда делаем именно то, что написано в задании.<br />
                            Если ты не можешь это сделать по какой-то причине,<br />
                            то нужно звонить Моше!</p>
                        <h4>Умей говорить <span className='alert-red'>нет</span></h4>
                        <p>Можно мы не будем платить залог? НЕТ.<br />
                            Можно мы останемся подольше? НЕТ.<br />
                            Заходи в номер, обсудим этот вопрос. НЕТ.<br /><br />
                            В любой такой ситуации звоним Моше.<br />
                            Помни, что ты не можешь выполнить просьбу клиента напрямую.<br /><br />
                            Например, он хочет еще полотенца: скажи ему, чтобы он звонил менеджеру.<br />
                            После того, как менеджер напишет тебе, ты принесешь.</p>
                        <h4>Следи за происходящим в номерах</h4>
                        <p>Если ты увидел в руках гостей красное вино,<br />
                            то сообщи об этом Моше.<br /><br />
                            Если при уборке ты увидел, что постельное белье испачкано в красном вине,<br />
                            то обязательно сообщи об этом Моше.<br /><br />
                            Если в комнате что-то сломано,<br />
                            cделай фотографию, отправь Моше с номером комнаты в которой ты это обнаружил.<br /><br />
                            Если в комнате что-то оставили,<br />
                            cделай фотографию, отправь Моше с номером комнаты в которой ты это обнаружил.<br /><br />
                            Если в комнате ты увидел таракана,<br />
                            cделай фотографию, отправь Моше с номером комнаты в которой ты это обнаружил.<br /><br />
                            Если ты видишь или слышишь, что в комнате живут больше 2 человек,<br />
                            cообщи об этом Моше.<br /><br />
                            Обрати внимание, если на заселение пришли двое мужчин,<br />
                            сообщи об этом Моше, а то они могут привести еще больше людей и устроить вечеринку.<br />
                        </p>
                        <button onClick={this.handleSlideSwitch} style={{ padding: 8 + 'px' }} type='button'>Далее</button>
                        <button onClick={this.props.handlerBack} style={{ padding: 8 + 'px', marginLeft: 24 + 'px' }} type='button'>Назад</button>
                    </div>}
                {this.state.slideNumber === 2 &&
                    <div>
                        <h4>ВАЖНО</h4>
                        <p>После выполнения любого задания,<br />
                            Сразу же написать об этом!<br />
                            Сейчас ты увидишь пример.</p>
                        <button onClick={this.props.handler} style={{ padding: 8 + 'px' }} type='button'>Увидеть пример</button>
                        <button onClick={this.handleSlideSwitch} style={{ padding: 8 + 'px', marginLeft: 24 + 'px' }} type='button'>Назад</button>
                        <hr></hr>
                        <div className='additionalPhrases'>
                            <p>Полезные фразы на иврите:</p>
                            <ul>
                                <li>Hetkasher le menachel<br />
                                    Позвоните менеджеру.</li>
                                <li>Ata/at mhake le Andrey/Nikita?<br />
                                    Вы ждете Андрея/Никиту?</li>
                                <li>Mehakim leka sham<br />
                                    Вас там встретят.</li>
                                <li>Toda, bevaqasha, sliha<br />
                                    Спасибо, пожалуйста, извините.</li>
                            </ul>
                        </div>
                    </div>}
            </div>
        )
    }
}

export default FurtherLearning;