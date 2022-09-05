import {Line} from 'rc-progress';

export default function ProgressLine({title, percentage}) {
    return(
        <div>
            <p>{title} <span>{percentage}%</span></p>

            <Line percent={percentage} strokeColor="rgb(125, 119, 137)" trailColor='#d6d6d6'/>
        </div>

    );
}
