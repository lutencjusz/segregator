import React from 'react';

export const Drag = ({data, image, children}) => {

    function onDragStart(e) {

        if(image){
            const scale = 0.5;
            let obrazek = new Image();
            obrazek.src = image;
            obrazek.width = obrazek.width * scale;
            obrazek.height = obrazek.width * scale;
            obrazek.scale = scale;
            console.log({obrazek})
            e.dataTransfer.setDragImage(obrazek, 0, 0);
        }

        console.log(`${data}`);
        e.dataTransfer.setData('application/x-kurs-id', `${data}`); // w Edge musi byc string
        //korzysta z interfejsu transfer do podniesienia

    }

    return <span draggable={true} onDragStart={onDragStart}>{children}</span>;
}

export const Drop = (props) => {

    function onDragOver(e) {
        e.preventDefault(); // odblokowuje upuszczanie
    }

    function onDrop(e) {
        let dane = e.dataTransfer.getData('application/x-kurs-id') //korzysta z interfejsu transfer do opuszczenia
        props.onDrop(dane, e)
    }

    return <span onDragOver={onDragOver} onDrop={onDrop}>{props.children}</span>
}