import { Section } from '../Section/Section'
import { ReactComponent as Chat3Line } from '../../assets/svgs/chat-3-line.svg'
import { ReactComponent as ArrowRightLine } from '../../assets/svgs/arrow-right-line.svg'
import { ReactComponent as SendPlaneLine } from '../../assets/svgs/send-plane-line.svg'
import { ReactComponent as ArrowRightUpLine } from '../../assets/svgs/arrow-right-up-line.svg'

export const Contact = () => {
  return (
    <Section
      classes="contact"
      id="contact"
      title="Contact Me"
      subtitle="Get in touch"
    >
      <div className="contact__container section__border">
        <div className="contact__content">
          <h3 className="contact__title">
            <Chat3Line /> Talk to me
          </h3>

          <div className="contact__info">
            <div className="contact__data">
              <span className="contact__data-title">Email</span>
              <span className="contact__data-infp">
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
              <span className="contact__data-infp">+998 (95) 004-40-48</span>

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
              <span className="contact__data-infp">@azamat_reactjs</span>

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

          <form className="contact__form" id="contact-form">
            <div className="contact-form-div">
              <label className="contact__form-tag" htmlFor="full-name">
                Full Name
              </label>
              <input
                className="contact__form-input"
                id="full-name"
                placeholder="Write your full name"
                type="text"
                name="full-name"
              />
            </div>
            <div className="contact-form-div">
              <label className="contact__form-tag" htmlFor="email">
                Email
              </label>
              <input
                className="contact__form-input"
                id="email"
                placeholder="Write your email"
                type="email"
                name="email"
              />
            </div>
            <div className="contact-form-div contact__form-area">
              <label className="contact__form-tag" htmlFor="project">
                Project
              </label>
              <textarea
                className="contact__form-input"
                id="project"
                placeholder="Write your project"
                name="project"
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
