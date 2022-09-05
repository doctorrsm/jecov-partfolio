import {Circle} from 'rc-progress';
import './progress-circle.css';

export default function ProgressCircle({title, percentage}) {
    return (
        <div>
            <div className='progress-wrapper'>
                <span className='progress-wrapper__percentage'>{percentage}%</span>
                <Circle percent={percentage} strokeColor="rgb(125, 119, 137)" trailColor='#d6d6d6'/>
            </div>
            <p>{title} <span>{percentage}%</span></p>
        </div>

    );
}
