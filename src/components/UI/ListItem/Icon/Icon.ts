import React, { FC } from 'react';

type IconProps = {
    icon?: string;
};

const Icon: FC<IconProps> = ({ icon }) => {
return (
    React.createElement('div',{
        style: {
            position: 'absolute',
            left: 0,
            right: '70.69%',
            top: '24.39%',
            bottom: '52.44%',
            fontFamily: 'Pretendard',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: 15,
            lineHeight: '18px',
            color: '#4E5966'
          }
    }, icon)
    );
};

export default Icon;