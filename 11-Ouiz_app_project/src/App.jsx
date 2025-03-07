import Header from "./components/Header";
import { useRef, useState } from "react";
import Quiz from "./components/Quiz";

function App() {

    return (
        <>
            <Header />
            <main>
                <Quiz />
            </main>
        </>
    );
}

export default App;
