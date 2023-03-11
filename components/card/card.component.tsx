// external imports
import { FC } from "react"

// types
type CardProps = {
  title: string;
}

const Card: FC<CardProps> = ({ title }) => {
  return (
    <div className="card">{ title }</div>
  )
}

export default Card