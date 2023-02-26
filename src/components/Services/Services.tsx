import './Services.scss'
import { services } from '../constants'

export const Services = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

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
    </section>
  )
}
