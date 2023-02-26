import { Section } from '../Section/Section'
import { projects } from '../constants'

import { ReactComponent as ArrowRightLine } from '../../assets/svgs/arrow-right-line.svg'

export const Projects = () => {
  return (
    <Section
      classes="projects"
      id="projects"
      title="Projects"
      subtitle="Most recent works"
    >
      <div className="container section__border">
        <div className="projects__container">
          <div>
            {projects.map((project) => {
              return (
                <div className="projects__content" key={project.key}>
                  {project.image}
                  <div>
                    <span className="projects__subtitle">
                      {project.subtitle}
                    </span>
                    <h1 className="projects__title">{project.title}</h1>
                    <a
                      className="projects__button"
                      href={project.projectUrl}
                      target="_blank"
                    >
                      View demo <ArrowRightLine />
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Section>
  )
}
