import React, { FC } from "react";

interface ButtonProps {
    text: string;
    icon: React.ReactNode;
    onClick?: () => void;
}

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
