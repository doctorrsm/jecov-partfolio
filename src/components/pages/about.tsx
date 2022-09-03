import { bounceInRight } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import {useAppSelector} from '../../store/hooks';

export default function About() {
    const data = useAppSelector(state => state.data);
    const page = data.data.pages[1];

    const styles = StyleSheet.create({
        bounce: {
            animationName: bounceInRight,
            animationDuration: '1s'
        }
    })
    const {name, address, study, degree, mail, phone} = page.sections.aboutMe.brief
    return (
        <article className={css(styles.bounce)}>
            <section>
                <h2>{page.sections.aboutMe.sectionTitle}</h2>
                <p>{page.sections.aboutMe.introText}</p>
                <address>
                    Имя {name}
                    Адрес {address}
                    Учёба {study}
                    Ступень {degree}
                    Mail {mail}
                    Телефон {phone}
                </address>
            </section>

        </article>
    )
}
