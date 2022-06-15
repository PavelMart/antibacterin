import React, { FC } from "react";
import Button from "../Components/Button";

interface Props {
    screenRef: React.RefObject<HTMLDivElement>;
    onClick: () => void;
}

const Main: FC<Props> = ({ screenRef, onClick }) => {
    return (
        <div ref={screenRef} className={["screen", "main"].join(" ")}>
            <div className="bacteria bacteria_1_static" />
            <div className="bacteria bacteria_2_static" />
            <div className="bacteria bacteria_3_static" />
            <div className="bacteria bacteria_4_static" />
            <div className="bacteria bacteria_5_static" />
            <div className="bacteria bacteria_6_animate" />
            <div className="bacteria bacteria_7_animate" />
            <div className="bacteria bacteria_8_animate" />
            <div className="bacteria bacteria_9_animate" />
            <div className="main__body">
                <h1 className="h1 main__h1">Привет,</h1>
                <div className="big_text main__text">
                    <span>
                        Это <b>не</b> коммерческое задание
                    </span>
                    <Button text="Что дальше?" icon={<div className="icon main__icon"></div>} onClick={onClick} />
                </div>
            </div>
        </div>
    );
};

export default Main;
