import './Skills.scss'
import { ReactComponent as BracesLine } from '../../assets/svgs/braces-line.svg'
import { ReactComponent as ServerLine } from '../../assets/svgs/server-line.svg'
import HTML5Icon from '../../assets/svgs/html-5.svg'
import CSS3Icon from '../../assets/svgs/css-3.svg'
import JavaScriptIcon from '../../assets/svgs/javascript.svg'
import GitIcon from '../../assets/svgs/git.svg'
import ReactIcon from '../../assets/svgs/react.svg'
import NextJsLightIcon from '../../assets/svgs/next-js-light.svg'
import NextJsDarkIcon from '../../assets/svgs/next-js-dark.svg'
import TypescriptIcon from '../../assets/svgs/typescript.svg'
import ReduxToolkitIcon from '../../assets/svgs/reduxtoolkit.svg'
import AntDesignIcon from '../../assets/svgs/antdesign.svg'
import ChakraUIIcon from '../../assets/svgs/chakraui.svg'
import RoutertIcon from '../../assets/svgs/react-router.svg'
import { skills2 } from '../constants'
import { useColorMode } from '@chakra-ui/react'
import { Section } from '../Section/Section'

export const Skills = () => {
  const { colorMode } = useColorMode()
  const skills = [
    {
      id: 'html',
      key: 'html',
      image: <img src={HTML5Icon} alt="HTML" />,
      name: 'HTML',
      level: 'Intermediate'
    },
    {
      id: 'css',
      key: 'css',
      image: <img src={CSS3Icon} alt="CSS" />,
      name: 'CSS',
      level: 'Intermediate'
    },
    {
      id: 'js',
      key: 'js',
      image: <img src={JavaScriptIcon} alt="JavaScript" />,
      name: 'JavaScript',
      level: 'Intermediate'
    },
    {
      id: 'git',
      key: 'git',
      image: <img src={GitIcon} alt="Git" />,
      name: 'Git',
      level: 'Intermediate'
    },
    {
      id: 'react',
      key: 'react',
      image: <img src={ReactIcon} alt="React.js" />,
      name: 'React',
      level: 'Intermediate'
    },
    {
      id: 'router',
      key: 'router',
      image: <img src={RoutertIcon} alt="React Router" />,
      name: 'React Router',
      level: 'Intermediate'
    },
    {
      id: 'nextjs',
      key: 'nextjs',
      image: (
        <img
          src={colorMode === 'light' ? NextJsLightIcon : NextJsDarkIcon}
          alt="Next.js"
        />
      ),
      name: 'Next.js',
      level: 'Intermediate'
    },
    {
      id: 'typescript',
      key: 'typescript',
      image: <img src={TypescriptIcon} alt="Typescript" />,
      name: 'Typescript',
      level: 'Intermediate'
    },
    {
      id: 'reduxtoolkit',
      key: 'reduxtoolkit',
      image: <img src={ReduxToolkitIcon} alt="Redux Toolkit" />,
      name: 'Redux Toolkit',
      level: 'Intermediate'
    },
    {
      id: 'chakra',
      key: 'chakra',
      image: <img src={ChakraUIIcon} alt="Chakra UI" />,
      name: 'Chakra UI',
      level: 'Intermediate'
    },
    {
      id: 'antdesign',
      key: 'antdesign',
      image: <img src={AntDesignIcon} alt="Ant Design" />,
      name: 'Ant Design',
      level: 'Intermediate'
    }
  ]

  return (
    <Section
      classes="skills"
      id="skills"
      title="Skills"
      subtitle="My favourite skills"
    >
      <div className="skills__container container section__border">
        <div className="skills__content">
          <h3 className="skills__title">
            <BracesLine /> Frontend Development
          </h3>

          <div className="skills__info">
            {skills.map((skill) => {
              return (
                <div className="skills__data" key={skill.key}>
                  <div className="skills__blob">{skill.image}</div>

                  <h3 className="skills__name">{skill.name}</h3>
                  <span className="skills__subtitle">{skill.level}</span>
                </div>
              )
            })}
          </div>
        </div>

        <div className="skills__content">
          <h3 className="skills__title">
            <ServerLine /> Backend Development
          </h3>

          <div className="skills__info">
            {skills2.map((skill) => {
              return (
                <div className="skills__data" key={skill.key}>
                  <div className="skills__blob">{skill.image}</div>

                  <h3 className="skills__name">{skill.name}</h3>
                  <span className="skills__subtitle">{skill.level}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Section>
  )
}
