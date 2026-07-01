import React from 'react'

function ChaiBox() {
    return (
        <div className="absolute top-1 left-1 z-10 m-1 overflow-hidden rounded-lg border-[0.25px] border-white/1 bg-white/70 p-1 shadow-lg backdrop-blur-sm">
            <img
                src="https://images.pexels.com/photos/29279566/pexels-photo-29279566.jpeg"
                alt="chai-code"
                className="h-16 w-16 rounded-md object-cover"
            />
        </div>
    );
}

export default ChaiBox;