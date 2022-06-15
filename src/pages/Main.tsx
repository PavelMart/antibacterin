import React, { FC } from "react";
import MainBacteries from "../Components/Main/MainBacteries";
import MainBody from "../Components/Main/MainBody";
import { MainProps } from "../types/types";

const Main: FC<MainProps> = ({ screenRef, onClick }) => {
    return (
        <div ref={screenRef} className={["screen", "main"].join(" ")}>
            <MainBacteries />
            <MainBody onClick={onClick} />
        </div>
    );
};

export default Main;
