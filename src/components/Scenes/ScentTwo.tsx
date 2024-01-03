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
        "Hi beta how was school today",
    ]

    const heroDialogueArray: string[] = [
        "Fine ma",
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
