import './Contact.scss'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Section } from '../Section/Section'
import { ReactComponent as Chat3Line } from '../../assets/svgs/chat-3-line.svg'
import { ReactComponent as ArrowRightLine } from '../../assets/svgs/arrow-right-line.svg'
import { ReactComponent as SendPlaneLine } from '../../assets/svgs/send-plane-line.svg'
import { ReactComponent as ArrowRightUpLine } from '../../assets/svgs/arrow-right-up-line.svg'

export const Contact = () => {
  const [values, setValues] = useState({
    user_name: '',
    user_email: '',
    message: ''
  })

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value
    }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(values)
  }

  return (
    <Section
      classes="contact"
      id="contact"
      title="Contact Me"
      subtitle="Get in touch"
    >
      <div className="contact__container container section__border">
        <div className="contact__content">
          <h3 className="contact__title">
            <Chat3Line /> Talk to me
          </h3>

          <div className="contact__info">
            <div className="contact__data">
              <span className="contact__data-title">Email</span>
              <span className="contact__data-info">
                azamatreactjs@gmail.com
              </span>

              <a
                className="contact__button"
                href="mailto:azamatreactjs@gmail.com"
              >
                Write me <ArrowRightLine />
              </a>
            </div>

            <div className="contact__data">
              <span className="contact__data-title">Telegram</span>
              <span className="contact__data-info">+998 (95) 004-40-48</span>

              <a
                className="contact__button"
                href="https://t.me/azamatreactjs"
                target="_blank"
              >
                Write me <ArrowRightLine />
              </a>
            </div>

            <div className="contact__data">
              <span className="contact__data-title">Instagram</span>
              <span className="contact__data-info">@azamat_reactjs</span>

              <a
                className="contact__button"
                href="https://instagram.com/azamat_reactjs"
                target="_blank"
              >
                Write me <ArrowRightLine />
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">
            <SendPlaneLine /> Write me your project
          </h3>

          <form
            className="contact__form"
            id="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="contact__form-div">
              <label className="contact__form-tag" htmlFor="user_name">
                Full Name
              </label>
              <input
                className="contact__form-input"
                id="user_name"
                placeholder="Write your full name"
                type="text"
                name="user_name"
                value={values.user_name}
                onChange={handleChange}
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag" htmlFor="user_email">
                Email
              </label>
              <input
                className="contact__form-input"
                id="user_email"
                placeholder="Write your email"
                type="email"
                name="user_email"
                value={values.user_email}
                onChange={handleChange}
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag" htmlFor="message">
                Project
              </label>
              <textarea
                className="contact__form-input"
                id="message"
                placeholder="Write your project"
                name="message"
                value={values.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button className="contact__button" type="submit">
              Send <ArrowRightUpLine />
            </button>
          </form>
        </div>
      </div>
    </Section>
  )
}
