import './Home.scss'
import ProfileImage from '../../assets/images/perfil.png'
import { ReactComponent as ShapeWaves } from '../../assets/svgs/shape-waves.svg'
import { ReactComponent as ShapeCircle } from '../../assets/svgs/shape-circle.svg'
import { infos, infos2, socials } from '../constants'

export const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid section__border">
        <div className="home__data grid">
          <h1 className="home__title">
            Hi, I'm Azamat <br />
            Frontend Developer <br />
            Based In Tashkent <br />
          </h1>

          <div className="home__blob grid">
            <div className="home__profile">
              <img src={ProfileImage} alt="Profile Image" />
            </div>
            <ShapeWaves className="home__shape-waves" />
            <ShapeCircle className="home__shape-circle" />
          </div>

          <ul className="home__socials">
            {socials.map((social) => {
              return (
                <li className="home__socials-item" key={social.key}>
                  <a
                    className="home__socials-link"
                    href={social.url}
                    target="_blank"
                  >
                    {social.icon}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="home__info">
          {infos.map((info) => {
            return (
              <div key={info.id}>
                <h3 className="home__info-title">{info.title}</h3>
                <p className="home__info-description">{info.description}</p>
              </div>
            )
          })}
        </div>

        <div className="home__info">
          {infos2.map((info) => {
            return (
              <div key={info.id}>
                <h3 className="home__info-title">{info.title}</h3>
                <p className="home__info-number">{info.number}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
