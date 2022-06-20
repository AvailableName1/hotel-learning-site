import React from 'react';
import './components-styles/FurtherLearning.css'

class FurtherLearning extends React.Component {
    render() {
        return (
            <div className='LearningContainer'>
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
                    Можно мы останемся подольше? НЕТ<br />
                    Заходи в номер, обсудим этот вопрос. НЕТ<br />
                    В любой такой ситуации звоним Моше.<br />
                    Помни, что ты не можешь выполнить просьбу клиента напрямую.<br />
                    Например, он хочет еще полотенца: скажи ему, чтобы он звонил менеджеру.<br />
                    После того, как менеджер напишет тебе, ты принесешь.</p>
                <h4>ВАЖНО</h4>
                <p>После выполнения задания,<br />
                    Сразу же написать об этом!<br />
                    Сейчас ты увидишь пример.</p>
                <button onClick={this.props.handler} style={{ padding: 8 + 'px' }} type='button'>Увидеть пример</button>
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
            </div>
        )
    }
}

export default FurtherLearning;