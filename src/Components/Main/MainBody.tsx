import React, { FC } from "react";
import { MainBodyProps } from "../../types/types";
import Button from "../Button";

const MainBody: FC<MainBodyProps> = ({ onClick }) => {
    return (
        <div className="main__body">
            <h1 className="h1 main__h1">Привет,</h1>
            <div className="big_text main__text">
                <span>
                    Это <b>не</b> коммерческое задание
                </span>
                <Button text="Что дальше?" icon={<div className="icon main__icon"></div>} onClick={onClick} />
            </div>
        </div>
    );
};

export default MainBody;
