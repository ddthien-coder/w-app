import { ReactNode } from "react"

const paddingContainer = ({children}: {children: ReactNode}) => {
  return (
    <div className="px-8 w-full max-w-7xl mx-auto">{children}</div>
  )
}
export default paddingContainer