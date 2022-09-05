import Home from '../pages/home';
import {useAppSelector} from '../../store/hooks';
import About from '../pages/about';
import Contact from '../pages/contact';
import Skills from '../pages/skills';

import {bounceInRight} from 'react-animations';
import {css, StyleSheet} from 'aphrodite';
import {PageNames} from '../../const';


export default function Layout() {
    const currentPage = useAppSelector((state) => state.data.currentPage)

    const styles = StyleSheet.create({
        bounce: {
            animationName: bounceInRight,
            animationDuration: '1s'
        }
    })

    const stylesAbout = StyleSheet.create({
        bounce: {
            animationName: bounceInRight,
            animationDuration: '1s'
        }
    })

    if (currentPage === PageNames.About) {
        return (
            <About/>
        )
    }

    if (currentPage === PageNames.Skills) {
        return (
            <Skills/>
        )
    }

    if (currentPage === PageNames.Contact) {
        return (
            <Contact/>
        )
    }
    return (
        <article className={css(styles.bounce)}>
            <Home/>
        </article>
    )
}
