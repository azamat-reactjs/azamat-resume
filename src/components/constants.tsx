import { ReactComponent as Home5Line } from '../assets/svgs/home-5-line.svg'
import { ReactComponent as TrophyLine } from '../assets/svgs/trophy-line.svg'
import { ReactComponent as BookOpenLine } from '../assets/svgs/book-open-line.svg'
import { ReactComponent as BriefcaseLine } from '../assets/svgs/briefcase-line.svg'
import { ReactComponent as ImageLine } from '../assets/svgs/image-line.svg'
import { ReactComponent as Chat3Line } from '../assets/svgs/chat-3-line.svg'
import { ReactComponent as LinkedinBoxLine } from '../assets/svgs/linkedin-box-line.svg'
import { ReactComponent as GitHubLine } from '../assets/svgs/github-line.svg'
import { ReactComponent as TelegramLine } from '../assets/svgs/telegram-line.svg'
import { ReactComponent as InstagramLine } from '../assets/svgs/instagram-line.svg'
import { ReactComponent as CodeLine } from '../assets/svgs/code-line.svg'
import NodeJsIcon from '../assets/svgs/nodejs-icon.svg'
import NpmIcon from '../assets/svgs/npm.svg'
import Project1 from '../assets/images/project1.jpg'
import Project2 from '../assets/images/project2.jpg'
import Project3 from '../assets/images/project3.jpg'
import Project4 from '../assets/images/project4.jpg'

export const links = [
  {
    id: 'home',
    key: 'home',
    label: 'Home',
    icon: <Home5Line />
  },
  {
    id: 'skills',
    key: 'skills',
    label: 'Skills',
    icon: <TrophyLine />
  },
  {
    id: 'qualification',
    key: 'qualification',
    label: 'Qualification',
    icon: <BookOpenLine />
  },
  {
    id: 'services',
    key: 'services',
    label: 'Services',
    icon: <BriefcaseLine />
  },
  {
    id: 'projects',
    key: 'projects',
    label: 'Projects',
    icon: <ImageLine />
  },
  {
    id: 'contact',
    key: 'contact',
    label: 'Contact',
    icon: <Chat3Line />
  }
]

export const socials = [
  {
    id: 'linkedin',
    key: 'linkedin',
    url: 'https://www.linkedin.com/in/azamatreactjs/',
    icon: <LinkedinBoxLine className="home__socials-icon" />
  },
  {
    id: 'github',
    key: 'github',
    url: 'https://github.com/azamat-reactjs',
    icon: <GitHubLine className="home__socials-icon" />
  },
  {
    id: 'telegram',
    key: 'telegram',
    url: 'https://t.me/azamatreactjs',
    icon: <TelegramLine className="home__socials-icon" />
  },
  {
    id: 'instagram',
    key: 'instagram',
    url: 'https://www.instagram.com/azamat_reactjs/',
    icon: <InstagramLine className="home__socials-icon" />
  }
]

export const infos = [
  {
    id: 'biography',
    key: 'biography',
    title: 'Biography',
    description:
      "Hi, I'm Azamat, Frontend Developer. Passionate about designing beautiful web interfaces. Based in Tashkent."
  },
  {
    id: 'contacts',
    key: 'contacts',
    title: 'Contacts',
    description: (
      <>
        <a href="https://goo.gl/maps/GHR3EqwSebhxwZmL7" target="_blank">
          Uzbekistan, Tashkent
        </a>{' '}
        <br />
        <a href="mailto:azamatreactjs@gmail.com">
          azamatreactjs@gmail.com
        </a>{' '}
        <br />
        <a href="tel:998950044048">+998 (95) 004-40-48</a> <br />
      </>
    )
  },
  {
    id: 'services',
    key: 'services',
    title: 'Services',
    description: (
      <>
        Website Design <br />
        UI/UX Design <br />
        Animation <br />
      </>
    )
  }
]

export const infos2 = [
  {
    id: 'years',
    key: 'years',
    title: 'Years of experience',
    number: '01+'
  },
  {
    id: 'projects',
    key: 'projects',
    title: 'Completed projects',
    number: '01+'
  },
  {
    id: 'companies',
    key: 'companies',
    title: 'Companies worked',
    number: '01+'
  }
]

export const skills2 = [
  {
    id: 'nodejs',
    key: 'nodejs',
    image: <img src={NodeJsIcon} alt="Node.js" />,
    name: 'Node.js',
    level: 'Basic'
  },
  {
    id: 'npm',
    key: 'npm',
    image: <img src={NpmIcon} alt="NPM" />,
    name: 'NPM',
    level: 'Basic'
  }
]

export const qualificationInfos = [
  {
    id: 'collage',
    key: 'collage',
    name: 'Tashkent Professional College of Communication',
    country: 'Tashkent - Collage',
    year: '2011 - 2014'
  }
]

export const qualificationInfos2 = [
  {
    id: 'frontend',
    key: 'frontend',
    name: 'Frontend Developer',
    country: 'Davr Bank - Tashkent',
    year: '2022 - Present'
  }
]

export const services = [
  {
    id: 'web-design',
    key: 'web-design',
    icon: <CodeLine />,
    title: (
      <>
        Website <br /> Design
      </>
    ),
    description:
      'Service that provides the best quality and at the request of the client, with professional work and customer support.'
  }
]

export const projects = [
  {
    id: 'project1',
    key: 'project1',
    image: <img className="projects__img" src={Project1} alt="Project 1" />,
    subtitle: 'Web',
    title: 'Modern Website',
    projectUrl: ''
  },
  {
    id: 'project2',
    key: 'project2',
    image: <img className="projects__img" src={Project2} alt="Project 2" />,
    subtitle: 'Web',
    title: 'E-commerce Store',
    projectUrl: ''
  },
  {
    id: 'project3',
    key: 'project3',
    image: <img className="projects__img" src={Project3} alt="Project 3" />,
    subtitle: 'Web',
    title: 'Blog Website',
    projectUrl: ''
  },
  {
    id: 'project4',
    key: 'project4',
    image: <img className="projects__img" src={Project4} alt="Project 4" />,
    subtitle: 'Web',
    title: 'Payment System',
    projectUrl: 'https://newmobile.uz'
  }
]
