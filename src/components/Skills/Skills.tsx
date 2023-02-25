import './Skills.scss'
import { ReactComponent as BracesLine } from '../../assets/svgs/braces-line.svg'
import { ReactComponent as PantoneLine } from '../../assets/svgs/pantone-line.svg'
import { skills, skills2 } from '../constants'

export const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My favourite skills</span>

      <div className="skills__container container grid section__border">
        <div className="skills__content">
          <h3 className="skills__title">
            <BracesLine /> Frontend Developer
          </h3>

          <div className="skills__info">
            {skills.map((skill) => {
              return (
                <div className="skills__data" key={skill.key}>
                  <div className="skills__blob">{skill.icon}</div>

                  <h3 className="skills__name">{skill.name}</h3>
                  <span className="skills__subtitle">{skill.level}</span>
                </div>
              )
            })}
          </div>
        </div>

        <div className="skills__content">
          <h3 className="skills__title">
            <PantoneLine /> Web Design
          </h3>

          <div className="skills__info">
            {skills2.map((skill) => {
              return (
                <div className="skills__data" key={skill.key}>
                  <div className="skills__blob">{skill.icon}</div>

                  <h3 className="skills__name">{skill.name}</h3>
                  <span className="skills__subtitle">{skill.level}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
