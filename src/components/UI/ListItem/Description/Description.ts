import React, { FC } from 'react';

type DescriptionProps = {
    description: string;
};

    const Description: FC<DescriptionProps> = ({ description }) => {
return (
    React.createElement('div',{
        style: {
            position: 'absolute',
            left: 0,
            right: '9.67%',
            top: '52.44%',
            bottom: '24.39%',
            fontFamily: 'Pretendard',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: 13,
            lineHeight: '16px',
            color: '#76808B'
          }
    }, description)
);
};

export default Description;