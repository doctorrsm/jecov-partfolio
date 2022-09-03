import Home from '../pages/home';
import {useAppSelector} from '../../store/hooks';
import About from '../pages/about';
import Contact from '../pages/contact';
import Skills from '../pages/skills';

import { bounceInRight } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';




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

    if (currentPage === 'about') {
        return (


                <About />


        )
    }

    if (currentPage === 'skills') {
        return (
            <Skills />
        )
    }

    if (currentPage === 'contact') {
        return (
            <Contact />
        )
    }
    return (
        <article className={css(styles.bounce)}>
            <Home />
        </article>
    )
}
