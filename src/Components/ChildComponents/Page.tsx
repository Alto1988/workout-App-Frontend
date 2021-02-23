import React from 'react'
import { PageTitle } from './PageTitle'

interface Props {
  title?: string;
}


export const Page:React.FC<Props> = ({title, children}) => {
  return (
    <div style={{
      margin: "50px auto 20px auto",
      padding: "30px 20px",
      maxWidth: "600px"
    }}>
      {title ?? <PageTitle>{title}</PageTitle>}
      {children}
    </div>
  )
}
