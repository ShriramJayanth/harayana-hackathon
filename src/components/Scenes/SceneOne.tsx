"use client"
import React from 'react';
import Character from '../Character';
import Scene from '../Scene'

export default function SceneOne() {
    //states
    const [heroDialogue, setHeroDialogue] = React.useState(0);
    const [heroFriendDialogue, setHeroFriendDialogue] = React.useState(0);
    const [isHero, setIsHero] = React.useState(true);
    const Hero = Character({ imageUrl: '/Assets/Hero.png' });
    const HeroFriend = Character({ imageUrl: '/Assets/Friend.png', styleNames: " w-[700px]", isRight: true });

    const heroDialogueArray: string[] = [
        "test",
        "test1",
        "test2",
        "test3",
        "test4",
        "test5",
        "test6",
    ]

    const heroFriendDialogueArray: string[] = [
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
            <Scene imageUrl='/Assets/SCHOOL.avif' onClick={() => {
                if (isHero) {
                    setHeroDialogue(prev => prev + 1);
                    setIsHero(prev => !prev);
                } else {
                    setHeroFriendDialogue(prev => prev + 1);
                    setIsHero(prev => !prev);
                }
            }} >
                <Hero dialogue={heroDialogueArray[heroDialogue]} hidden={!isHero} />
                <HeroFriend dialogue={heroFriendDialogueArray[heroFriendDialogue]} hidden={isHero} />
            </Scene>
        </div>
    )
}
