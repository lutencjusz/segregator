import React from 'react';

export const Drag = ({data, image, children}) => {

    function onDragStart(e) {

        if(image){
            let obrazek = new Image();
            obrazek.src = image;
            e.dataTransfer.setDragImage(obrazek, 20, 20);
        }

        e.dataTransfer.setData('application/x-kurs-id', `${data.id}`); // w Edge musi byc string
        //korzysta z interfejsu transfer do podniesienia

    }

    return <div draggable={true} onDragStart={onDragStart}>{children}</div>;
}

export const Drop = (props) => {

    function onDragOver(e) {
        e.preventDefault(); // odblokowuje upuszczanie
    }

    function onDrop(e) {
        let dane = e.dataTransfer.getData('application/x-kurs-id') //korzysta z interfejsu transfer do opuszczenia
        props.onDrop(dane, e)
    }

    return <div onDragOver={onDragOver} onDrop={onDrop}>{props.children}</div>
}