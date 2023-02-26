import './Services.scss'
import { services } from '../constants'
import { Section } from '../Section/Section'

export const Services = () => {
  return (
    <Section
      classes="services"
      id="services"
      title="Services"
      subtitle="What I offer"
    >
      <div className="services__container container section__border">
        {services.map((service) => {
          return (
            <div className="services__card" key={service.key}>
              <div className="services__icon">{service.icon}</div>
              <h2 className="services__title">{service.title}</h2>
              <p className="services__description">{service.description}</p>
              <div className="services__border"></div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
