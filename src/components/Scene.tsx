import React from 'react'

type Props = {
    imageUrl: string;
    children: React.ReactNode;
    onClick: () => void;
}

const Scene = (props: Props) => {
    return (
        <div
            style={{
                backgroundImage: `url("${props.imageUrl}")`,
                backgroundSize: 'cover',
            }}
            className='h-screen w-screen flex justify-between'
            onClick={props.onClick}
        >
            {
                props.children
            }
        </div>
    )
}

export default Scene