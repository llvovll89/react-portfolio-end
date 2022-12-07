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
    desc: `변화하는 트렌드 맞춘 기술을 배우는 것을 좋아하는 개발자 입니다.`,
  },
];

// section - about
export const about = [
  {
    desc: 'I like to debug, and I like to error out and maintain through code refactoring.I want to become a developer who develops well in terms of UI/UX by increasing my design sense.',
    aboutCober: '',
  },
];

// section - project
export const projects = [
  {
    id: 1,
    name: '나의 연애 유형',
    category: 'Couple',
    title: '연애Test',
  },
  {
    id: 2,
    name: 'Brand',
    category: 'design',
    title: 'Brex Logo',
  },
  {
    id: 3,
    name: 'Brand',
    category: 'development',
    title: 'Brex Logo',
  },
  {
    id: 4,
    name: 'Brand',
    category: 'marketing',
    title: 'Brex Logo',
  },
  {
    id: 5,
    name: 'Brand',
    category: 'design',
    title: 'Brex Logo',
  },
  {
    id: 6,
    name: 'Brand',
    category: 'development',
    title: 'Brex Logo',
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