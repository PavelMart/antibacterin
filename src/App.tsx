import React, { FC } from "react";
import "./App.scss";
import { Screen } from "./AppWrapper";
import Home from "./Components/Home";
import Logo from "./Components/Logo";
import Anounce from "./pages/Anounce";
import Main from "./pages/Main";
import Offer from "./pages/Offer";

interface AppProps {
    mainRef: React.RefObject<HTMLDivElement>;
    anounceRef: React.RefObject<HTMLDivElement>;
    offerRef: React.RefObject<HTMLDivElement>;
    isFirstOpened: boolean;
    screenList: Screen[];
}

const App: FC<AppProps> = ({ mainRef, anounceRef, offerRef, isFirstOpened, screenList }) => {
    return (
        <>
            <Home />
            <div className="swipe">
                <Main screenRef={mainRef} screenList={screenList} />
                <Anounce screenRef={anounceRef} isFirstOpened={isFirstOpened} />
                <Offer screenRef={offerRef} />
            </div>
            <Logo />
        </>
    );
};

export default App;
