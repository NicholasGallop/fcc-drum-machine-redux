import { POWER, VOLUME, DISPLAY } from './types';

export const switchPower = (power) => dispatch => {
    dispatch({
      type: POWER,
      payload: !power
    })
  };

  export const changeVolume = (volume) => dispatch => {
    dispatch({
      type: VOLUME,
      payload: volume
    })
  };

  export const changeDisplay = (displayName) => dispatch => {
    dispatch({
      type: DISPLAY,
      payload: displayName
    })
  };