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