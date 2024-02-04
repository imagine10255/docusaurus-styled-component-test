import styled from 'styled-components';
import React from 'react';
import {Grid, fr} from 'bear-react-grid';
import GoodsCard from './GoodsCard';

const DemoPreview = () => {
    const items = [
        {name: 'SCT', desc: 'TUNED', imageUrl: '/img/grid/01.webp'},
        {name: 'Ferrari', desc: 'F50', imageUrl: '/img/grid/02.webp'},
        {name: 'Bentley', desc: '007', imageUrl: '/img/grid/03.webp'},
        {name: 'McLaren', desc: 'P1GTR', imageUrl: '/img/grid/04.webp'},
        {name: 'Porsche', desc: 'GT3RSR', imageUrl: '/img/grid/05.webp'},
        {name: 'BMW', desc: 'M2GT4', imageUrl: '/img/grid/06.webp'},
    ];

    return <DemoPreviewRoot col={1} sm={fr(2)} className="g-2">
        {items.map(data => {
            return <GoodsCard key={data.name} data={data}/>
        })}
    </DemoPreviewRoot>;
};

export default DemoPreview;

const DemoPreviewRoot = styled(Grid)`
  border-radius: 8px;
  width: 100%;
`;
