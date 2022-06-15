import React, { FC } from "react";
import { ButtonProps } from "../types/types";

const Button: FC<ButtonProps> = ({ text, icon, onClick }) => {
    return (
        <button className="button" onClick={onClick}>
            <div className="circle__border">
                <div className="circle">{icon}</div>
            </div>
            <span>{text}</span>
        </button>
    );
};

export default Button;
