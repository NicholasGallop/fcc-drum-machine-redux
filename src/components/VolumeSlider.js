import React from 'react'
import {connect} from 'react-redux'
import propTypes from 'prop-types'
import { changeVolume } from '../actions/settingActions'
import './VolumeSlider.css'
function VolumeSlider(props) {

  const handleVolume=(e)=>{
    props.changeVolume(parseFloat(e.target.value));
  };

  return (
    <div>
    <div className="control" id="volume-slider">Volume:</div>
        <div>
        <input 
            className="slider" type="range" min="0" max="1" step="0.1" 
            value={props.volume}
            onChange={handleVolume} 
        />
        </div>
    </div>
  )
}

VolumeSlider.propTypes = {
  volume: propTypes.number.isRequired,
};

function mapStateToProps(state) {
  const volume = state.volume
  return { volume: volume }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeVolume: (volume) => {
      dispatch(changeVolume(volume));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(VolumeSlider)
