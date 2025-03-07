import QUESTIONS from '../questions.js'
import quizCompleteImg from '../assets/quiz-complete.png'

export default function Summary({userAnswers}) {
    const skippedAnswers = userAnswers.filter(answer => answer === null);
    const correctAnswers = userAnswers.filter((answer, index) => answer === QUESTIONS[index].answers[0]);

    const totalAnswers = userAnswers.length || 1;  // Avoid division by zero
    const skippedAnswersShare = Math.round((skippedAnswers.length / totalAnswers) * 100);
    const correctAnswersShare = Math.round((correctAnswers.length / totalAnswers) * 100);
    const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;
    

    return (
        <div id='summary'>
            <img src={quizCompleteImg} alt="Quiz Completed" />
            <h2>Quiz Completed!</h2>
            <div id="summary-stats">
                <p>
                    <span className='number'>{skippedAnswersShare}%</span>
                    <span className='text'>skipped</span>
                </p>
                <p>
                    <span className='number'>{correctAnswersShare}%</span>
                    <span className='text'>answered correctly</span>
                </p>
                <p>
                    <span className='number'>{wrongAnswersShare}%</span>
                    <span className='text'>answered incorrectly</span>
                </p>
                <ol>
                    {userAnswers.map((answer, index) => {
                        let cssClass = 'user-answer';

                        if (answer === null) {
                            cssClass += ' skipped';
                        } else if(answer === QUESTIONS[index].answers[0]) {
                            cssClass += ' correct';
                        } else {
                            cssClass += ' wrong';
                        }

                        return (
                            <li key={index}>
                                <h3>{index + 1}</h3>
                                <p className='question'>{QUESTIONS[index].text}</p>
                                <p className={cssClass}>{answer ?? 'Skipped'}</p>
                            </li>
                        );
                    })}

                </ol>
            </div>
        </div>
    )
}