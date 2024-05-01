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