"use client";
import React from 'react';
import SceneOne, { ScenePropType } from "@/components/Scenes/SceneOne";
import ScentTwo from "@/components/Scenes/ScentTwo";

type SceneType = {
  component: (props: ScenePropType) => React.JSX.Element;
  title: string;
}

export default function Home() {
  //states
  const [sceneNumber, setSceneNumber] = React.useState(0);

  const playSequence: SceneType[] = [
    {
      component: SceneOne,
      title: "Scene One"
    },
    {
      component: ScentTwo,
      title: "Scene Two"
    }
  ]

  const CurrentComponent = playSequence[sceneNumber].component;

  return (
    <div>
      <CurrentComponent changeScene={setSceneNumber} />
    </div>
  );
}
