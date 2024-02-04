import React, {useState, useEffect, useRef, useCallback} from 'react';



export interface Position {
    x: number,
    y: number,
}
export interface Size {
    width: number,
    height: number,
}


export interface ITouchStart {
    original: Position & Size     // 物件位置 (element.getBoundingClientRect().left)
    originalMouse: Position // 滑鼠位置 (e.pageX;)
}



export function useDragResize() {
    const controlRef = useRef<HTMLDivElement>(null);
    const dragRef = useRef<HTMLDivElement>(null);

    let startPositionRef = useRef<ITouchStart>({
        original: {x: 0, y: 0, width: 0, height: 0},
        originalMouse: {x: 0, y: 0},
    });


    useEffect(() => {
        if(controlRef.current){
            controlRef.current.addEventListener('mousedown', _onWebMouseStart, {passive: false});
        }
    }, [controlRef]);



    const getOriginal = useCallback((): Position & Size => {
        if(dragRef.current && dragRef.current){
            const {left, top} = dragRef.current?.getBoundingClientRect();

            const formatComputedStyle = (attr: 'width'|'height') => {
                if(dragRef.current){
                    const computedStyle = getComputedStyle(dragRef.current, null);
                    return parseFloat(computedStyle.getPropertyValue(attr).replace('px', ''));
                }
                return 0;
            };

            return {
                x: left,
                y: top,
                width: formatComputedStyle('width'),
                height: formatComputedStyle('height'),
            };
        }
        return {x: 0, y: 0, width: 0, height: 0}

    }, []);

    const _onWebMouseStart = useCallback((event: MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();

        if (dragRef.current) {
            window.addEventListener('mousemove', _onWebMouseMove, false);
            window.addEventListener('mouseup', _onWebMouseEnd, false);


            // 初始滑鼠座標
            startPositionRef.current.originalMouse = {x: event.pageX, y: event.pageY};

            // 初始物件座標
            startPositionRef.current.original = getOriginal();

        }
    }, []);


    const _onWebMouseMove = useCallback((event: MouseEvent) => {
        if(dragRef.current){
            const diffOriginalMouse = event.pageX - startPositionRef.current.originalMouse.x;

            const width = startPositionRef.current.original.width + (diffOriginalMouse);
            dragRef.current.style.width = `${width}px`;
            dragRef.current.style.pointerEvents = 'none';
            document.body.style.cursor = 'ew-resize'
        }
    }, []);

    const _onWebMouseEnd = useCallback((event: MouseEvent) => {
        window.removeEventListener('mousemove', _onWebMouseMove, false);
        window.removeEventListener('mouseup', _onWebMouseEnd, false);

        if(dragRef.current){
            dragRef.current.style.pointerEvents = 'auto';
            document.body.style.cursor = 'auto'
        }
    }, []);

    return {
        controlRef,
        dragRef,
    };
}
