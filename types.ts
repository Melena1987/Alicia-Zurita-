
export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  name: string;
  description: string;
  image: string;
}

export interface Testimonial {
  author: string;
  company?: string;
  quote: string;
}

export interface PressLogo {
  name: string;
  url: string;
}
