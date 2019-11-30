import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import QuizQuestions from '../questions'
import styles from './Home.css'


export default class Home extends Component {
  render() {
    const questions = Object.keys(QuizQuestions).map(questionNumber => {
      const isOpenedQuestion = this.props.openedQuestions.includes(questionNumber)
      const className = isOpenedQuestion ? styles.isDisabled : ''
      const questionLink = isOpenedQuestion ? '' : `/questions/${questionNumber}`

      return (
        <Link key={questionNumber} className={`${className} ${styles.button}`} to={questionLink}>
          Question {questionNumber}
        </Link>
      );
    });

    return (
      <div>
        <h2 className={styles.header}>Royalty 2019 (Kingdom Reality) Bible Quiz</h2>
        <div className={styles.smContainer}>{questions}</div>
      </div>
    );
  }
}
