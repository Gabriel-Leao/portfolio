import { StaticImageData } from "next/image"

export interface list {
  ImgSrc: StaticImageData,
  technology: string
}

export interface projectItem {
  imgSrc: StaticImageData,
  link: string,
  title: string,
  subTitle: string
}

export interface projectPageProps {
  coverImg: StaticImageData,
  desc: string,
  title: string,
  technologies: string[],
  linkDemo: string,
  linkCode: string
}

export interface ResumeItemProps {
  type: 'experience' | 'education'
  company?: string
  position?: string
  institution?: string
  degree?: string
  location: string
  startDate: string
  endDate: string
  description: string
}
