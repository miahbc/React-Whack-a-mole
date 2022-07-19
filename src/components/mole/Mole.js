import './Mole.css'
import MoleIcon from './Mole.svg'

function Mole(props) {
  if (props.visibility == true) {
    return (
      <div className="den ">
        <img src={MoleIcon} className="Mole" alt="Mole" />
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