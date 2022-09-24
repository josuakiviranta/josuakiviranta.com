interface SectionProps {
    children: React.ReactNode
}

export const Section = (props: SectionProps) => {
    return <section className="my-16 mx-4 sm:mx-20">
        {props.children}
    </section>
}