import React from 'react';
import {Grid, Flex} from 'bear-react-grid';
import styled from 'styled-components';
import Link from '@docusaurus/Link';

interface IData {
    title: string
    desc: string
    features: Array<{ text: string, href: string }>
}

interface IProps extends FCProps {
    className?: string
    data: IData
}

const TutorialCard = ({
    className,
    data
}: IProps) => {


    return <TutorialCardRoot className={className}>
        <Card col="column">
            <PlatformLogo src="/img/tutorial/swiftui-logo.svg" className="justify-self-end"/>
            <Title>{data.title}</Title>
            <Desc className="text-area-overflow mb-3">{data.desc}</Desc>

            <Flex col="column" className="gap-2">
                {data.features?.map((feature, index) => {
                    return <Link to={feature.href} key={`tutorialCar_${index}`}>
                        <Flex className="align-items-center justify-content-start gap-2">
                            <ImageRound>
                                <Image src="/img/tutorial/file.svg" alt="file icon" />
                            </ImageRound>
                            <span>{feature.text}</span>
                        </Flex>
                    </Link>;
                })}
            </Flex>
        </Card>

        <CardB color="linear-gradient(180deg, #408DD5 0%, #630B8C 100%)"/>
    </TutorialCardRoot>;
};

export default TutorialCard;


const Image = styled.img`
    margin: auto;
    width: 20px;
    height: 20px;
`;

const ImageRound = styled.div`
    display: flex;
    justify-content: center;
    width: 32px;
    height: 32px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 50px;
`;


const PlatformLogo = styled.img`
  width: 44px;
  height: 44px;
  opacity: 1;
    position: absolute;
    top: 20px;
    right: 20px;
`;


const Item = styled.div`

`;


const Desc = styled.p`
    font-size: 13px;
`;

const Title = styled.h3`
    font-size: 24px;
    width: 150px;
`;



const Card = styled(Flex)`
    width: 240px;

    position: relative;
    height: 280px;
    backdrop-filter: blur(40px);
    border-radius: 0 30px 40px 40px;
    padding: 20px;
    padding-top: 50px;
    z-index: 1;

    background: rgba(31, 31, 71, 0.6);
    box-shadow: rgba(0, 0, 0, 0.25) 0 40px 80px, rgba(255, 255, 255, 0.15) 0 0 0 0.5px inset;
    transition: all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;

`;


const CardB = styled.div`
    position: absolute;
    width: 220px;
    height: 100%;
    background: linear-gradient(rgb(64, 141, 213) 0%, rgb(99, 11, 140) 100%);
    border-radius: 0 40px 40px;
    transform: skewY(8deg);
    transform-origin: left top;
    top: 0;

    transition: all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
`;

const TutorialCardRoot = styled.div`
    position: relative;

    :hover{
        ${CardB}{
            transform: skewY(15deg);
            width: 200px;
        }

        ${Card}{
            box-shadow: rgba(0, 0, 0, 0.25) 0px 100px 100px, rgba(255, 255, 255, 0.15) 0px 0px 0px 0.5px inset;
            transform: translateY(-3px);
        }
    }
`;
