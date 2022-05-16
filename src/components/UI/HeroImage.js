import { Link } from 'react-router-dom';
import Button from './Button';
import classes from './HeroImage.module.css';

const HeroImage =()=>{
    return <div className={classes.heroimage}>
      <Link to='./ItemsList'><Button className={classes.buttonHome}>GO</Button></Link>
    </div>
}

export default HeroImage;