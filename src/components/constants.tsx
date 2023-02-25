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
import NodeJsIcon from '../assets/svgs/nodejs-icon.svg'
import NpmIcon from '../assets/svgs/npm.svg'

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
    id: 'contact',
    key: 'contact',
    title: 'Contact',
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
    number: '00+'
  },
  {
    id: 'projects',
    key: 'projects',
    title: 'Completed projects',
    number: '00+'
  },
  {
    id: 'companies',
    key: 'companies',
    title: 'Companies worked',
    number: '00+'
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
