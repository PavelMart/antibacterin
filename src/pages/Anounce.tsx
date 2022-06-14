import React, { FC, useEffect, useRef, useState } from "react";
import { ScreenProps } from "../AppWrapper";
import { onScrollEnd, onScrollMove, onScrollStart } from "../utils/scroll";

const Anounce: FC<ScreenProps> = ({ screenRef, isFirstOpened }) => {
    const [isGrabbed, setIsGrabbed] = useState(false);

    const scrollBody: React.RefObject<HTMLDivElement> = useRef(null);
    const scrollText: React.RefObject<HTMLDivElement> = useRef(null);
    const scrollThumb: React.RefObject<HTMLDivElement> = useRef(null);

    useEffect(() => {
        if (scrollThumb?.current && scrollText?.current && scrollBody?.current)
            scrollThumb.current.style.height = `${(scrollBody.current.offsetHeight / scrollText.current.offsetHeight) * 100}%`;
    }, []);

    const onTouchStart = (e: any) => {
        onScrollStart(e);
    };

    const onTouchMove = (e: any) => {
        onScrollMove(e, scrollText);
    };

    const onTouchEnd = () => {
        onScrollEnd();
    };

    const onMouseDown = (e: any) => {
        setIsGrabbed(true);
        onScrollStart(e);
    };

    const onMouseMove = (e: any) => {
        if (isGrabbed) onScrollMove(e, scrollText);
    };

    const onMouseUp = () => {
        setIsGrabbed(false);

        onScrollEnd();
    };
    return (
        <div ref={screenRef} className={["screen", "anounce", isFirstOpened && "first_opened"].join(" ")}>
            <div className="bacteria bacteria_1_animate" />
            <div className="bacteria bacteria_2_animate" />
            <div className="bacteria bacteria_3_animate" />
            <div className="bacteria bacteria_4_animate" />
            <div className="bacteria bacteria_5_animate" />

            <div className="anounce__body">
                <h1 className="h1 anounce__h1">Текст сообщения</h1>
                <div className="scroll">
                    <div className="scroll__body" ref={scrollBody}>
                        <div className="scroll__wrapper">
                            <div className="scroll__text" ref={scrollText}>
                                <b>Lorem ipsum dolor sit amet,</b> consectetur adipisicing elit. Fugit praesentium culpa nostrum eius nobis
                                laboriosam commodi quasi delectus exercitationem quidem, tempora aut labore voluptatum sint ut cumque
                                repellendus ea ducimus at sapiente est? Iste, rerum! Nesciunt odio quae magnam debitis unde mollitia dicta
                                similique sunt possimus non ipsa, repudiandae vel voluptas at? Enim expedita reprehenderit minima suscipit,
                                repellendus nihil provident quae officiis esse commodi possimus corporis aut atque dicta tempore cupiditate
                                dolor necessitatibus deleniti cum velit voluptatem eaque. Ad laudantium iste iusto tempora, tenetur dolorem
                                accusamus aperiam perspiciatis nobis necessitatibus repudiandae nulla in commodi eaque minus quis
                                repellendus nisi laboriosam placeat quod aliquid vitae ea quaerat expedita? Aut quos laboriosam, tenetur
                                aspernatur repudiandae error magni pariatur eaque, a vitae exercitationem at repellendus, esse iste hic
                                corporis fugiat dignissimos eligendi iure. Aut ea, sapiente earum iure itaque dolores possimus! Saepe
                                numquam perspiciatis excepturi asperiores omnis, obcaecati voluptate ducimus. Sunt, dolores beatae.
                                Reprehenderit dolores pariatur odit totam quae amet, dicta provident, praesentium nulla nisi quod iure
                                officia, saepe est rerum doloremque dolor ducimus ea distinctio alias quos iste maiores eum! Accusamus
                                assumenda dolorum inventore consequuntur cumque ducimus ea eaque facilis! Quam, nam, expedita illum placeat
                                similique sapiente cumque quod dolore consequuntur obcaecati voluptatibus culpa atque corporis molestias.
                                Repellat doloremque veniam harum quo natus! Labore vel laboriosam earum dignissimos voluptatem et ea quaerat
                                recusandae ipsum blanditiis incidunt aliquam dolore distinctio porro amet nisi explicabo, odio laudantium,
                                accusantium autem eius magnam atque doloribus. Dolorem odit quod perspiciatis libero odio eligendi quia
                                quidem vel, culpa excepturi est officia quas non autem aperiam saepe corporis in repellendus officiis
                                accusamus cumque quaerat veritatis inventore. Sunt qui quae ullam reprehenderit doloremque in fugit
                                reiciendis dolores praesentium optio? Doloremque architecto voluptates culpa illo eos fuga dolore neque
                                laborum. Ad mollitia possimus ea ut. Quasi veniam aut sunt repellendus voluptas. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Fugit praesentium culpa nostrum eius nobis laboriosam commodi quasi delectus
                                exercitationem quidem, tempora aut labore voluptatum sint ut cumque repellendus ea ducimus at sapiente est?
                                Iste, rerum! Nesciunt odio quae magnam debitis unde mollitia dicta similique sunt possimus non ipsa,
                                repudiandae vel voluptas at? Enim expedita reprehenderit minima suscipit, repellendus nihil provident quae
                                officiis esse commodi possimus corporis aut atque dicta tempore cupiditate dolor necessitatibus deleniti cum
                                velit voluptatem eaque. Ad laudantium iste iusto tempora, tenetur dolorem accusamus aperiam perspiciatis
                                nobis necessitatibus repudiandae nulla in commodi eaque minus quis repellendus nisi laboriosam placeat quod
                                aliquid vitae ea quaerat expedita? Aut quos laboriosam, tenetur aspernatur repudiandae error magni pariatur
                                eaque, a vitae exercitationem at repellendus, esse iste hic corporis fugiat dignissimos eligendi iure. Aut
                                ea, sapiente earum iure itaque dolores possimus! Saepe numquam perspiciatis excepturi asperiores omnis,
                                obcaecati voluptate ducimus. Sunt, dolores beatae. Reprehenderit dolores pariatur odit totam quae amet,
                                dicta provident, praesentium nulla nisi quod iure officia, saepe est rerum doloremque dolor ducimus ea
                                distinctio alias quos iste maiores eum! Accusamus assumenda dolorum inventore consequuntur cumque ducimus ea
                                eaque facilis! Quam, nam, expedita illum placeat similique sapiente cumque quod dolore consequuntur
                                obcaecati voluptatibus culpa atque corporis molestias. Repellat doloremque veniam harum quo natus! Labore
                                vel laboriosam earum dignissimos voluptatem et ea quaerat recusandae ipsum blanditiis incidunt aliquam
                                dolore distinctio porro amet nisi explicabo, odio laudantium, accusantium autem eius magnam atque doloribus.
                                Dolorem odit quod perspiciatis libero odio eligendi quia quidem vel, culpa excepturi est officia quas non
                                autem aperiam saepe corporis in repellendus officiis accusamus cumque quaerat veritatis inventore. Sunt qui
                                quae ullam reprehenderit doloremque in fugit reiciendis dolores praesentium optio? Doloremque architecto
                                voluptates culpa illo eos fuga dolore neque laborum. Ad mollitia possimus ea ut. Quasi veniam aut sunt
                                repellendus voluptas.
                            </div>
                        </div>
                    </div>
                    <div className="scrollbar">
                        <div
                            className="scrollbar__thumb"
                            ref={scrollThumb}
                            onTouchStart={onTouchStart}
                            onTouchMove={onTouchMove}
                            onTouchEnd={onTouchEnd}
                            onMouseDown={onMouseDown}
                            onMouseMove={onMouseMove}
                            onMouseUp={onMouseUp}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Anounce;
