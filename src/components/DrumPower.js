import { FaPowerOff } from 'react-icons/fa'
import {connect} from 'react-redux'
import {switchPower} from '../actions/settingActions'
import propTypes from 'prop-types'
import './DrumPower.css'


const DrumPower = (props) => {

  const handlePower = () => {
    props.switchPower(props.power);
  }

  return (
        <FaPowerOff 
          onClick={handlePower}
          id="power-button"
          className="fas fa-power-off control"
        />
  )
}


const mapStateToProps = ({power}) => ({
  power,
})

const mapDispatchToProps = (dispatch) => {
  return {
    switchPower: (power) => {
      dispatch(switchPower(power));
    }
  }
};

DrumPower.propTypes = {
  power: propTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(DrumPower)