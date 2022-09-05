import ProgressLine from '../progress-line/progress-line';
import ProgressCircle from '../progress-circle/progress-circle';
import {ProgressType} from '../../const';

export default function ProgressSection({title, list, progressType}) {
    const isLine = progressType === ProgressType.Line;
    const isCircle = progressType === ProgressType.Circle;
    if (isLine) {
        return (
            <section className='section'>
                <h3 className='section__title'><span>{title}</span></h3>
                <ul className='section__list'>
                    {list.map((item) => <ProgressLine title={item[0]} percentage={item[1]}/>)}
                </ul>
            </section>
        )
    }

    if (isCircle) {
        return (
            <section className='section'>
                <h3 className='section__title'><span>{title}</span></h3>
                <ul className='section__list section__list--circle'>
                    {list.map((item) => <ProgressCircle title={item[0]} percentage={item[1]}/>)}
                </ul>
            </section>
        )
    }
}
