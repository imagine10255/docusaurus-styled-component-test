import {Container, Grid, Flex} from 'bear-react-grid';
import styled from 'styled-components';
import React from 'react';
import Avatar from './_components/Avatar';

interface IProps extends FCProps {

}

const SayingSection = ({
    className,
}: IProps) => {

    return <SayingRoot className={className}>
        <Container>
            <Flex as="figure" className="flex-column align-items-center text-center">
                <Title>Cut the vines, establish the main trunk</Title>

                <blockquote>
                    <Desc>Absorb what is useful, discard what is not, add what is uniquely your own.</Desc>
                </blockquote>

                <Avatar/>
            </Flex>
        </Container>
    </SayingRoot>;
};

export default SayingSection;



const Desc = styled.p`
    font-size: 17px;
    color: rgb(148, 163, 184);
    line-height: 130%;
`;

const Title = styled.div`
    font-weight: bold;
    font-size: 40px;
`;



const SayingRoot = styled.section`
    margin: 0 auto;
    margin-bottom: 150px;
    max-width: 800px;

  blockquote{
    border: none;
  }
`;
