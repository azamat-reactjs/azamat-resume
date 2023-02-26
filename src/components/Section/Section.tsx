import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  classes: string
  id: string
  title: string
  subtitle: string
}

export const Section = (props: SectionProps) => {
  const { children, classes, id, title, subtitle } = props

  return (
    <section className={`${classes} section`} id={id}>
      <>
        <h2 className="section__title">{title}</h2>
        <span className="section__subtitle">{subtitle}</span>

        {children}
      </>
    </section>
  )
}
