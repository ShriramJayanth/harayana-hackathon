"use client"
import React from 'react';
import Character from '../Character';
import Scene from '../Scene'

export default function ScentTwo() {
    //states
    const [momDialogue, setMomDialogue] = React.useState(0);
    const [heroDialogue, setHeroDialogue] = React.useState(0);
    const [isMain, setIsMain] = React.useState(true);
    const Mom = Character({ imageUrl: '/Assets/MOM.png', styleNames: " w-[600px]" });
    const Hero = Character({ imageUrl: '/Assets/Hero.png', isRight: true });

    const momDialogueArray: string[] = [
        "test test test test test test test test test test test test ",
        "test1",
        "test2",
        "test3",
        "test4",
        "test5",
        "test6",
    ]

    const heroDialogueArray: string[] = [
        "test",
        "test1",
        "test2",
        "test3",
        "test4",
        "test5",
        "test6",
    ]
    return (
        <div>
            <Scene imageUrl='/Assets/Home.jpeg' onClick={() => {
                if (isMain) {
                    setMomDialogue(prev => prev + 1);
                } else {
                    setHeroDialogue(prev => prev + 1);
                }
                setIsMain(prev => !prev);
            }} >
                <Mom dialogue={momDialogueArray[momDialogue]} hidden={!isMain} />
                <Hero dialogue={heroDialogueArray[heroDialogue]} hidden={isMain} />
            </Scene>
        </div>
    )
}
