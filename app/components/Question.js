import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import QuizQuestions from '../questions'
import styles from './Question.css'


export default class Question extends Component {
  constructor() {
    super()

    this.state = {showAnswer: false}
  }

  componentDidMount() {
    this.props.markQuestionAsOpened(this.props.match.params.questionNumber)
  }

  toggleAnswer = () => {
    this.setState({ showAnswer: !this.state.showAnswer })
  }

  render() {
    const { questionNumber } = this.props.match.params
    const { question, options, answer } = QuizQuestions[questionNumber]
    const optionsMap = Object.keys(options).map(option => (
      <div className={styles.options}>
        <div className={styles.optionTag}>{option}.</div>
        <div>{options[option]}</div>
      </div>
    ))

    return (
      <div className={styles.container}>
        <Link to="/" className={styles.link}>
          <i className="fa fa-arrow-left fa-3x" />
        </Link>
        <div>
          <h2 className={styles.header}>Question {questionNumber}</h2>
          <div className={styles.questionContainer}>
            <div className={styles.question}>{question}</div>
            <div>{optionsMap}</div>
          </div>
          <div>
            <a className={styles.button} onClick={this.toggleAnswer} >{this.state.showAnswer ? 'Hide ' : 'Show '}Answer</a>
            {
              this.state.showAnswer &&
                <div className={styles.answerContainer}>
                  <h2 className={styles.header}>Answer</h2>
                  <div>Option <span className={styles.answerOption}>{answer}</span></div>
                  <div>{options[answer]}</div>
                </div>
            }
          </div>
        </div>
      </div>
    );
  }
}
