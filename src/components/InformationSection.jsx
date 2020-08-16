import React, { useEffect } from 'react';
import { useSpring, animated, config as springsConfig } from 'react-spring';
import NumberFormat from 'react-number-format';
import { Avatar } from '@material-ui/core';

function InformationSection({ config, index, data }) {
  const element = data[index];

  useEffect(() => {
    // Effect to preload every image
    data.forEach((element) => {
      const img = new Image();
      img.src = element.avatar;
    });
  },[data]);

  const { value } = useSpring({
    value: element.number,
    config: springsConfig.slow,
  });

  const AnimatedNumberFormat = animated(NumberFormat);
  const getPrefix = () => {
    return config.isCurrency ? '$' : null;
  }

  const getSuffix = () => {
    const suffix = config.units;
    return suffix ? ' ' + suffix : null;
  }

  return (
    <div className='information-section'>
      <div className='elements'>
        <div className='element-number'>
          <AnimatedNumberFormat value={value.to(x => x.toFixed(0))} displayType='text' thousandSeparator={true} prefix={getPrefix()} suffix={getSuffix()}></AnimatedNumberFormat>
        </div>
        <div className='element-info'>
          {element.avatar && <div className='element-avatar'><Avatar alt={element.subtitle} src={element.avatar}></Avatar></div>}
          <div className={`element-text ${element.avatar? 'half-width' : ''}`}>
            <h1>
              {element.title && <span className={`element-title ${element.avatar ? 'align-left' : ''}`}>{element.title}</span>}
              {element.subtitle && <span className={`element-subtitle ${element.avatar ? 'align-left' : ''}`}>{element.subtitle}</span>}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InformationSection;