import React, { FC } from "react";
import { MainPopupProps } from "../../types/types";
const panel_1 = require("./../../assets/img/panel_1.png");

const MainPopup: FC<MainPopupProps> = ({ isOpen }) => {
    return (
        <div className={["main-popup", isOpen && "open"].join(" ")}>
            <div className="main-popup__body">
                <h1>Данное приложение разработано для планшетов с соотношением сторон 4:3.</h1>
                <h1>Чтобы посмотреть работу приложения, необходимо:</h1>
                <div className="steps">
                    <div>1. Открыть инструменты разработчика (клавиша F12)</div>
                    <div>
                        2. Открыть панель инструментов устройства
                        <img src={panel_1} alt="Ctrl+Shift+M / Ctrl+Shift+C" />
                    </div>
                    <div>
                        <span>3. Установить размеры экрана в соотношении 4:3 (например, 1024х768)</span>
                        <span>Или выбрать IPad Mini в горизонтальном положении</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPopup;
