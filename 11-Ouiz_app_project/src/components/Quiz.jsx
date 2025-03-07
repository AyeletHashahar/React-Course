import { useState, useCallback, useRef } from "react";
import QUESTIONS from '../questions.js'
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;


    const handleSelectAnswer = useCallback(function handleSelectAnswer(id) {
        setUserAnswers(prevUserAnswers =>{
            return [...prevUserAnswers, id];
        });
    }, []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    if (quizIsComplete) {
        return <Summary userAnswers={userAnswers}/> 
    }
    
    
    return (
        <div id="quiz">
            <Question 
                key={activeQuestionIndex} 
                index={activeQuestionIndex}
                onSelect={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>
    )
}