import React from 'react';
import { useSpring, animated, config as springsConfig } from 'react-spring';
import NumberFormat from 'react-number-format';
import { Avatar } from '@material-ui/core';
import { byNumbers } from '../utils/constants';

function Data({ config, index }) {
  const sortedData = [...config.data].sort(byNumbers);
  const element = sortedData[index];
  const { value } = useSpring({
    value: element.number,
    config: springsConfig.slow,
  });

  const AnimatedNumberFormat = animated(NumberFormat);
  const getClassName = () => {
    return element.avatar ? 'element-title align-left' : 'element-title';
  }
  const shouldSeparateThousands = () => {
    return true;
  }
  const getPrefix = () => {
    return config.isCurrency ? '$' : null;
  }

  const getSuffix = () => {
    const suffix = config.units;
    return suffix ? ' ' + suffix : null;
  }

  return (
    <div className='data'>
      <div className='elements'>
        <div className='element-number'>
          <AnimatedNumberFormat value={value.interpolate(x => x.toFixed(0))} displayType='text' thousandSeparator={shouldSeparateThousands()} prefix={getPrefix()} suffix={getSuffix()}></AnimatedNumberFormat>
        </div>
        <div className='element-info'>
          {element.avatar && <div className='element-avatar'><Avatar alt={element.subtitle} src={element.avatar}></Avatar></div>}
          <div className='element-text'>
            <h1>
              {element.title && <span className={getClassName()}>{element.title}</span>}
              {element.subtitle && <span className={getClassName()}>{element.subtitle}</span>}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Data;