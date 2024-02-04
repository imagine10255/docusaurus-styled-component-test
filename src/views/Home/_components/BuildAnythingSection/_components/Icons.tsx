import React from 'react';

interface IProps extends FCProps {

}

const Icons = ({
   className,
}: IProps) => {
    return <svg width="20" height="20" color="#d1d5db">
        <path
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            fill="currentColor"/>
    </svg>;
};

export default {
    Heart: Icons
};

