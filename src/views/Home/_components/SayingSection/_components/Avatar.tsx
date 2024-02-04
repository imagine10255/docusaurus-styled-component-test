import styled from 'styled-components';
import {Grid, auto} from 'bear-react-grid';
import React from 'react';


const Avatar = () => {
    return <AvatarRoot col={auto(2)} className="justify-content-start justify-items-start  gx-2 gy-1">
        <img src="/img/saying/bruce_lee.webp" className="g-row-2 rounded-circle h-inherit" alt="Bruce Lee"/>
        <Name className="align-self-end">Bruce Lee</Name>
        <Title>The King of Kung Fu</Title>
    </AvatarRoot>;
};

export default Avatar;


const Title = styled.div`
    color: rgb(148, 163, 184);
`;

const Name = styled.div`
    color: #fff;
`;

const AvatarRoot = styled(Grid)`
  height: 56px;
`;
