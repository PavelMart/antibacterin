import React, { FC } from "react";
import { HomeProps } from "../types/types";

const Home: FC<HomeProps> = ({ onClick }) => {
    return (
        <div className="home" onClick={onClick}>
            <div className="home__text">Project</div>
        </div>
    );
};

export default Home;
