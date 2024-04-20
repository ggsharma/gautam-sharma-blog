interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
  techstack: string
  date: string
}

const projectsData: Project[] = [
  {
    title: 'tensorlite',
    description: `Built a C++ tensor library from scratch capable to instantiate tensors and fully connected neural networks. Improved the time taken to perform dot product by 8600% as compared to NumPy arrays using modern C++ semantics`,
    imgSrc: '/static/images/projects/tensorlite.png',
    href: 'https://github.com/gautam-sharma1/tensorlite',
    techstack: `Linux · Full-Stack Development · Object-Oriented Programming (OOP) · Data Structures · Standard Template Library (STL) · Shell Scripting · Git · C++`,
    date: `2022-09-23`,
  },
  {
    title: 'Machine Learning to detect counterfeit bills',
    description: `Read in a database and applied machine learning algorithms to detect counterfeit bills.`,
    imgSrc: '/static/images/projects/money.png',
    href: 'https://github.com/gautam-sharma1/money-analysis',
    techstack: `Python · SciKit · pandas · Git`,
    date: `2020-11-08`,
  },

  {
    title: 'Retirement Savings Calculator',
    description: `A Tkinter based GUI that calculates your accumulated wealth at retirement over a period of years.`,
    imgSrc: '/static/images/projects/wealth.png',
    href: 'https://github.com/gautam-sharma1/retirement-savings',
    techstack: `Python · GUI · Object Oriented Programming · Git`,
    date: `2020-09-08`,
  },
  {
    title: 'iOS Dating app based on Horoscope',
    description: `Built a full stack iOS dating app that matches profiles based on horoscope score. This code is currently private as I decide to post it to the app store.`,
    imgSrc: '/static/images/projects/astrogif.gif',
    href: '',
    techstack: `React Native · Swift · Firebase · Authorization · Authentication · Git`,
    date: `2023-03-22`,
  },
]

export default projectsData
