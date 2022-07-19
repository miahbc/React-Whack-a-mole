import App from '../../App'
import './Mole.css'
import MoleIcon from './Mole.svg'
// import onMoleWhacked from '../../App'


function Mole(props) {
  
  if (props.visibility == true) {
    return (
      <div className="den ">
        <img src={MoleIcon} className="Mole" alt="Mole" onClick={props.function} />
      </div>
    )
  } else {
    return (
      <div className="den" style={{visibility: 'hidden'}}>
        <img src={MoleIcon} className="Mole" alt="Mole" />
      </div>
    )
  }
}

export default Mole

// style={{marginRight: spacing + 'em'}} 