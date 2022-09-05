import './sections.css';

type ListSectionProps = {
    title: string,
    list: string[]
}

export default function ListSection({title, list}: ListSectionProps) {
    return (
        <section className='section'>
            <h3 className='section__title'><span>{title}</span></h3>
            <ul className='section__list'>
                {list.map((item) => <li>{item}</li>)}
            </ul>
        </section>
    )
}
