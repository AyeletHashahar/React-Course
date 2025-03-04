import { useRef,useImperativeHandle } from "react";
import { createPortal } from 'react-dom';

export default function ResultModel( {ref, remainingTime, targetTime, onReset}) {
    const dialog = useRef();

    const userLost = remainingTime <= 0;
    const formattedRemainigTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    useImperativeHandle(ref, () => {
    return {
        open() {
            dialog.current.showModal();
        }
    };
 });

    return createPortal(
        <dialog ref={dialog} className="result-modal">
            {userLost ? <h2> Your lost</h2> : <h2>Your score: {score}</h2>}
            <p>The target time was <strong>{targetTime} second.</strong></p>
            <p>Tou stopped the timer with <strong>{formattedRemainigTime} seconds left.</strong></p>
            <form method="dialog">
                <button onClick={onReset}>Close</button>
            </form>
        </dialog>,
        document.getElementById('modal')
    );
}