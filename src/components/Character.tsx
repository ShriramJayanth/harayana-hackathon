import React from 'react'

type Props = {
    imageUrl: string;
    dialogue?: string;
    styleNames?: string;
    isRight?: boolean;
}

type CharacterProps = {
    dialogue: string;
    hidden: boolean;
}

const Character = (props: Props) => {
    return ({ dialogue, hidden }: CharacterProps) => {
        return (
            <div className={`flex items-center ${props.isRight && " flex-row-reverse"} ${hidden && " opacity-0"}`}>
                <img src={props.imageUrl} className={`${props.styleNames} self-end`} />
                <div className={`p-5 rounded-md bg-white  text-2xl text-black text-center`}>{dialogue}</div>
            </div>
        )
    }
}

export default Character