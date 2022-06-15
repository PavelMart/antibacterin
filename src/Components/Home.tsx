import React, { FC } from "react";

interface Props {
    onClick: () => void;
}

const Home: FC<Props> = ({ onClick }) => {
    return (
        <div className="home" onClick={onClick}>
            <div className="home__text">Project</div>
        </div>
    );
};

export default Home;
