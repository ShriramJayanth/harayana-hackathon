"use client"
import React from 'react';
import Character from '../Character';
import Scene from '../Scene'
import { type } from 'os';


export type ScenePropType = {
    changeScene: React.Dispatch<React.SetStateAction<number>>;
}

export default function SceneOne(props: ScenePropType) {
    //states
    const [heroDialogue, setHeroDialogue] = React.useState(0);
    const [heroFriendDialogue, setHeroFriendDialogue] = React.useState(0);
    const [isHero, setIsHero] = React.useState(true);
    const Hero = Character({ imageUrl: '/Assets/Hero.png' });
    const HeroFriend = Character({ imageUrl: '/Assets/Friend.png', styleNames: " w-[700px]", isRight: true });

    const heroDialogueArray: string[] = [
        "New day, New School Hope I'll get some company",
        "Yes, I am Prem",
        "Sure... What is that in your hand[drugs]",
    ]

    const heroFriendDialogueArray: string[] = [
        "Hey you look new. Are you the new kid?",
        "I am vikas and we both are from the same class, come let me show you around.",
        "Those are some fun stuffs, no worries you'll become familiar with it very soon",
    ]
    return (
        <div>
            <Scene imageUrl='/Assets/SCHOOL.avif' onClick={() => {
                if (isHero) {
                    setHeroDialogue(prev => prev + 1);
                    setIsHero(prev => !prev);
                } else {
                    if (heroFriendDialogue === heroFriendDialogueArray.length - 1) {
                        props.changeScene(sceneNumber => sceneNumber + 1);
                    }
                    setHeroFriendDialogue(prev => prev + 1);
                    setIsHero(prev => !prev);
                }
            }
            } >
                <Hero dialogue={heroDialogueArray[heroDialogue]} hidden={!isHero} />
                <HeroFriend dialogue={heroFriendDialogueArray[heroFriendDialogue]} hidden={isHero} />
            </Scene>
        </div>
    )
}
