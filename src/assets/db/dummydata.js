// material-icons
import {
  PhoneIphone,
  EmailOutlined,
  Facebook,
  Twitter,
  Instagram,
  Settings,
  Javascript,
  Home,
  AccountCircle,
  ContactEmergency,
} from '@mui/icons-material';

// nav export
export const navlinks = [
  {
    url: '/',
    navItem: 'Home',
    icons: <Home />,
  },
  {
    url: '/about',
    navItem: 'About',
    icons: <AccountCircle />,
  },
  {
    url: '/vanilajs',
    navItem: 'VanilaJs',
    icons: <Javascript />,
  },
  {
    url: '/project',
    navItem: 'Project',
    icons: <Settings />,
  },
  {
    url: '/contact',
    navItem: 'Contact',
    icons: <ContactEmergency />,
  },
];

// section - home
export const main = [
  {
    topText: 'Nice To Meet You',
    post: 'New Front-End Developer',
    design: 'Kim Geon Ho 입니다.',
  },
];

// section - about
export const about = [
  {
    id: 1,
    desc: `              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    Voluptates id accusantium nisi in eum quas facilis facere hic,
    soluta perspiciatis odio dolore officia omnis esse cupiditate
    perferendis quae. Debitis, officiis?`,
    imgurl: '../images/about/about.png',
    subtext: '열정과 호기심이 가득한 김건호 출동!',
  },
  {
    id: 2,
    desc: `              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    Voluptates id accusantium nisi in eum quas facilis facere hic,
    soluta perspiciatis odio dolore officia omnis esse cupiditate
    perferendis quae. Debitis, officiis?`,
    imgurl: '../images/about/about.png',
    subtext: '열심히 하는 사람에게는 복이 옵니다.',
  },
];

// section - project
export const projects = [
  {
    id: 1,
    name: '나의 연애 유형',
    category: 'Couple',
    title: '연애Test',
    cover: '',
  },
  {
    id: 2,
    name: 'Brand',
    category: 'design',
    title: 'Brex Logo',
    cover: '',
  },
  {
    id: 3,
    name: 'Brand',
    category: 'development',
    title: 'Brex Logo',
    cover: '',
  },
  {
    id: 4,
    name: 'Brand',
    category: 'marketing',
    title: 'Brex Logo',
    cover: '',
  },
  {
    id: 5,
    name: 'Brand',
    category: 'design',
    title: 'Brex Logo',
    cover: '',
  },
  {
    id: 6,
    name: 'Brand',
    category: 'development',
    title: 'Brex Logo',
    cover: '',
  },
];

// footer

export const social = [
  {
    id: 1,
    icon: <Facebook />,
  },
  {
    id: 2,
    icon: <Twitter />,
  },
  {
    id: 3,
    icon: <Instagram />,
  },
];