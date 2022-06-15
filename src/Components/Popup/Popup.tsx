import React, { FC } from "react";
import { MainPopupProps } from "../../types/types";
const panel_1 = require("./../../assets/img/panel_1.png");
const panel_2 = require("./../../assets/img/panel_2.png");

const MainPopup: FC<MainPopupProps> = ({ isOpen }) => {
    return (
        <div className={["main-popup", isOpen && "open"].join(" ")}>
            <div className="main-popup__body">
                <h1>Данное приложение разработано для экранов с разрешением 1024х768, поэтому:</h1>
                <div className="steps">
                    <div>1. Откройте инструменты разработчика (клавиша F12)</div>
                    <div>
                        2. Откройте панель инструментов устройства
                        <img src={panel_1} alt="Ctrl+Shift+M / Ctrl+Shift+C" />
                    </div>
                    <div>
                        3. Установите разрешение экрана 1024 х 768
                        <img src={panel_2} alt="1024x768" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPopup;
