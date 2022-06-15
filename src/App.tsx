import React, { FC } from "react";
import "./App.scss";
import Home from "./Components/Home";
import Logo from "./Components/Logo";
import Anounce from "./pages/Anounce";
import Main from "./pages/Main";
import Offer from "./pages/Offer";
import { AppProps } from "./types/types";

const App: FC<AppProps> = ({ mainRef, anounceRef, offerRef, isFirstOpened, onNextClick, onHomeClick }) => {
    return (
        <>
            <Home onClick={onHomeClick} />
            <div className="swipe">
                <Main screenRef={mainRef} onClick={onNextClick} />
                <Anounce screenRef={anounceRef} isFirstOpened={isFirstOpened} />
                <Offer screenRef={offerRef} />
            </div>
            <Logo />
        </>
    );
};

export default App;
