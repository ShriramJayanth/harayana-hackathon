"use client";
import React from 'react';
import SceneOne from "@/components/Scenes/SceneOne";
import ScentTwo from "@/components/Scenes/ScentTwo";

type SceneType = {
  component: React.ReactNode;
  title: string;
}

export default function Home() {
  //states
  const [scentNumber, setSceneNumber] = React.useState(0);

  const playSequence: SceneType[] = [
    {
      component: <SceneOne />,
      title: "Scene One"
    },
    {
      component: <ScentTwo />,
      title: "Scene Two"
    }
  ]

  return (
    <ScentTwo />
  );
}
