import { FC, ReactNode } from 'react'

type Props = { children: ReactNode; extraCss?: string }
const Section: FC<Props> = ({ children, extraCss = 'bg-neutral-300' }) => {
  return (
    <div className={`text-4xl font-bold tracking-wider p-4 ${extraCss}`}>
      {children}
    </div>
  )
}

export default Section
