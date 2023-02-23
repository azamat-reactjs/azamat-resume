import { ReactComponent as Home5Line } from '../assets/svgs/home-5-line.svg'
import { ReactComponent as TrophyLine } from '../assets/svgs/trophy-line.svg'
import { ReactComponent as BookOpenLine } from '../assets/svgs/book-open-line.svg'
import { ReactComponent as BriefcaseLine } from '../assets/svgs/briefcase-line.svg'
import { ReactComponent as ImageLine } from '../assets/svgs/image-line.svg'
import { ReactComponent as Chat3Line } from '../assets/svgs/chat-3-line.svg'

export const links = [
  {
    id: '1',
    key: 'home',
    label: 'Home',
    icon: <Home5Line />
  },
  {
    id: '2',
    key: 'skills',
    label: 'Skills',
    icon: <TrophyLine />
  },
  {
    id: '3',
    key: 'qualification',
    label: 'Qualification',
    icon: <BookOpenLine />
  },
  {
    id: '4',
    key: 'services',
    label: 'Services',
    icon: <BriefcaseLine />
  },
  {
    id: '5',
    key: 'projects',
    label: 'Projects',
    icon: <ImageLine />
  },
  {
    id: '6',
    key: 'contact',
    label: 'Contact',
    icon: <Chat3Line />
  }
]
