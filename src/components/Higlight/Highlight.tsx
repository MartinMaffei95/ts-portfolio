import { Interweave } from 'interweave'
import { FC, PropsWithChildren, Children, ReactNode } from 'react'

interface Props extends PropsWithChildren {
  focus?: string
  colored?: string
}
const Highlight: FC<Props> = ({ children, focus, colored }) => {
  const highlightedContent = (): string => {
    const content = Children.map(children, (child) => {
      let text: string = ''

      if (typeof child === 'string') {
        if (focus) {
          text = child.replace(
            new RegExp(focus, 'g'),
            `<span class="text-neutral-100 font-semibold tracking-widest bg-yellow-600 px-1">${focus}</span>`
          )
        }

        if (colored) {
          text = child.replace(
            new RegExp(colored, 'g'),
            `<span class="text-yellow-600 font-semibold tracking-widest">${colored}</span>`
          )
        }
      }
      return text
    })

    return content?.toString() || ''
  }

  return (
    <p>
      <Interweave content={highlightedContent()} />
    </p>
  )
}

export default Highlight
