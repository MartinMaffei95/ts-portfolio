import { Image, Heading } from '@chakra-ui/react'
import { useResize } from '../../Hooks/useResize'
import { TypedText } from '../Header/TypedText'
const HeroComponent = () => {
  const { actualWidth } = useResize()
  return (
    <div
      id="hero"
      className="bg-neutral-400 text-black min-h-screen relative flex flex-col justify-between overflow-hidden p-4"
    >
      <span className="bg-yellow-400 flex h-28 w-[100vh] absolute top-0 -right-10 z-10 rotate-12 -translate-y-[50%]  " />
      <span className="bg-yellow-400 flex h-28  w-[100vh] absolute bottom-0 -left-10 z-10 rotate-12 translate-y-[50%] " />

      <Heading className="font-shoulders text-7xl uppercase font-bold relative text-neutral-900 z-20">
        Front-end developer
      </Heading>

      <Image
        boxSize="250px"
        objectFit="cover"
        className="z-20 self-end rounded"
        src="/profile.png"
      />
    </div>
  )
}

export default HeroComponent
