import { ReactNode } from "react"
import { Header } from "../Header/Header"

interface IDefaultTemplateProps {
  children: ReactNode
}

export const DefaultTemplate = ({ children }: IDefaultTemplateProps) => {
  return (
    <>
      <Header />
      { children }
    </>
  )
}