import React, { Component } from 'react'
import {dataSounds} from '../db'
import {connect} from 'react-redux'
import propTypes from 'prop-types'
import {changeDisplay} from '../actions/settingActions'
import './DrumSound.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col, Container} from 'react-bootstrap'

class DrumSound extends Component {
  constructor(props){
    super(props);
    this.playSound = this.playSound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.state = {
      animate: ''
    }
  }
  // IGNORE CODE IN BUTTONS AND ANYTHING PERTAINING TO ANIMATE, AND THIS IS EXAMPLE OF REACT-REDUX IN CLASS FUNC
  
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  playSound( id, keyTrig, animate){
    this.setState({ animate: 'shake' });
    setTimeout(() => this.setState({animate: ''}), 30);
    const displayName = id
    this.props.changeDisplay(displayName);
    const sound = document.getElementById(keyTrig)
    sound.currentTime = 0;
    sound.volume = this.props.volume;
    if(this.props.power){
      sound.play();
      return animate
    }else{ return }
  }
  handleKeyPress(e){
    const sound = dataSounds.filter(element => element.keyCode===e.keyCode)
    if(sound.length > 0) {
      const keyTrig = sound[0].keyTrigger
      const id = sound[0].id
      this.playSound( id, keyTrig);
    }
  }
  render() {
    const onStyle = { color: 'black' };
    const offStyle = { color: '#7132a8' };
    const styleOnOff = this.props.power ? onStyle : offStyle;
    return (
      <Container className='container'>
        <Row className="justify-content-md-center">
        <Col className='col-md-4'>
          {dataSounds.slice(0, 3).map((i, index) => (
            <button 
              className={`${this.state.animate} col-md-2 drum-pad btn btn-block btn-primary`}
              id={i.id}
              key={index} 
              url={i.url}
              style={styleOnOff}
              onClick={ (e) => { this.playSound(i.id, i.keyTrigger, this.state.animate)} }>
              <audio src={i.url} className='clip' id={i.keyTrigger} />
              <strong>{i.keyTrigger}</strong>
            </button>
          ))}
        </Col>
        </Row>
        <Row className="justify-content-md-center">
        <div className='col-md-4'>
          {dataSounds.slice(3,6).map((i, index) => (
            <button 
            className={`${this.state.animate} col-md-2 drum-pad btn btn-block btn-primary`}
            id={i.id}
            key={index} 
            url={i.url}
            style={styleOnOff}
            onClick={ () => { this.playSound(i.id, i.keyTrigger, this.state.animate)} }>
            <audio src={i.url} className='clip' id={i.keyTrigger} />
            <strong>{i.keyTrigger}</strong>
          </button>
          ))}
        </div>
        </Row>
        <Row className="justify-content-md-center">
        <div className='col-md-4'>
          {dataSounds.slice(6,9).map((i, index) => (
            <button 
            className={`${this.state.animate} col-md-2 drum-pad btn btn-block btn-primary`}
            id={i.id}
            key={index} 
            url={i.url}
            style={styleOnOff}
            onClick={ (e) => { this.playSound(i.id, i.keyTrigger, this.state.animate)} }>
            <audio src={i.url} className='clip' id={i.keyTrigger} />
            <strong>{i.keyTrigger}</strong>
          </button>
          ))}
        </div>
        </Row>
      </Container>
    )
  }
}
DrumSound.propTypes = {
  power: propTypes.bool.isRequired,
  volume: propTypes.number.isRequired,
  display: propTypes.string
};

function mapStateToProps(state) {
  const power = state.power
  const volume = state.volume
  const display = state.display

  return { 
    power: power,
    volume: volume,
    display: display
  }
}
/*    // suggested:
const mapStateToProps = ({ power, volume }) => ({ 
  power,
  volume,
})
*/
const mapDispatchToProps = (dispatch) => {
  return {
    changeDisplay: (displayName) => {
      dispatch(changeDisplay(displayName));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DrumSound)