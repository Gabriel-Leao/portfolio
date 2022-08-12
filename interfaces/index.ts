import { StaticImageData } from "next/image";

export interface list {
  ImgSrc: StaticImageData,
  tecnology: string
}

export interface projectItem {
  imgSrc: StaticImageData,
  link: string,
  title: string,
  subTitle: string
}