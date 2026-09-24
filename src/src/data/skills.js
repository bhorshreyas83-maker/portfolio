import { 
  FaHtml5, 
  FaCss3Alt, 
  FaReact, 
  FaNodeJs, 
  FaGithub,
  FaGitlab
} from 'react-icons/fa';
import { 
  SiJavascript, 
  SiMysql,
  SiBootstrap,
  SiFlutter,
  SiDart
} from 'react-icons/si';

export const skills = [
  // Frontend Development
  {
    name: 'HTML5',
    category: 'Frontend Development',
    percentage: 95,
    icon: FaHtml5,
    color: '#e34f26'
  },
  {
    name: 'CSS3',
    category: 'Frontend Development',
    percentage: 90,
    icon: FaCss3Alt,
    color: '#1572b6'
  },
  {
    name: 'Bootstrap',
    category: 'Frontend Development',
    percentage: 85,
    icon: SiBootstrap,
    color: '#7952b3'
  },
  {
    name: 'JavaScript',
    category: 'Frontend Development',
    percentage: 92,
    icon: SiJavascript,
    color: '#f7df1e'
  },
  {
    name: 'React.js',
    category: 'Frontend Development',
    percentage: 88,
    icon: FaReact,
    color: '#61dafb'
  },
  {
    name: 'Flutter',
    category: 'Frontend Development',
    percentage: 85,
    icon: SiFlutter,
    color: '#02569B'
  },
  {
    name: 'Dart',
    category: 'Frontend Development',
    percentage: 80,
    icon: SiDart,
    color: '#0175C2'
  },

  // Backend Development
  {
    name: 'Node.js',
    category: 'Backend Development',
    percentage: 80,
    icon: FaNodeJs,
    color: '#339933'
  },

  // Database
  {
    name: 'MySQL',
    category: 'Database',
    percentage: 78,
    icon: SiMysql,
    color: '#4479a1'
  },

  // Version Control
  {
    name: 'GitHub',
    category: 'Version Control',
    percentage: 87,
    icon: FaGithub,
    color: '#ffffff'
  },
  {
    name: 'GitLab',
    category: 'Version Control',
    percentage: 85,
    icon: FaGitlab,
    color: '#fc6d26'
  }
];

export const skillCategories = ['All', 'Frontend Development', 'Backend Development', 'Database', 'Version Control'];

