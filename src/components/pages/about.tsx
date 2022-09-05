import {bounceInRight} from 'react-animations';
import {css, StyleSheet} from 'aphrodite';
import {useAppSelector} from '../../store/hooks';
import ListSection from '../sections/list-section';
import {Circle, Line} from 'rc-progress';
import ProgressLine from '../progress-line/progress-line';
import ProgressSection from '../sections/progress-section';
import {ProgressType} from '../../const';

export default function About() {
    const data = useAppSelector(state => state.data);

    const page = data.data.pages[1];

    const styles = StyleSheet.create({
        bounce: {
            animationName: bounceInRight, animationDuration: '1s'
        }
    })
    const {name, address, study, degree, mail, phone} = page.sections.aboutMe.brief
    return (<article className={css(styles.bounce)}>
            <section className='section'>
                <h3 className='section__title'><span>{page.sections.aboutMe.sectionTitle}</span></h3>
                <div className='section__grid'>
                    <p>{page.sections.aboutMe.introText}</p>
                    <address>
                        <ul className="section__list section__list--undotted">
                            <li><b>Имя:</b> {name}</li>
                            <li><b>Адрес:</b> {address}</li>
                            <li><b>Учёба:</b> {study}</li>
                            <li><b>Ступень:</b> {degree}</li>
                            <li><b>Mail:</b> {mail}</li>
                            <li><b>Телефон:</b> {phone}</li>
                        </ul>
                    </address>
                </div>
            </section>
                <div className="section__grid">
                    <ListSection title={'Навыки'} list={page.sections.skills}/>
                    <ListSection title={'Интересы'} list={page.sections.interests}/>
                </div>
                <div className="section__grid">
                    <ProgressSection title='Инструменты' list={page.sections.tools} progressType={ProgressType.Line} />
                    <ProgressSection title='Языки' list={page.sections.languages} progressType={ProgressType.Circle} />

                </div>



        </article>)
}
