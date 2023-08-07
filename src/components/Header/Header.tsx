import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useResize } from '../../Hooks/useResize'
import {
  Button,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import Icon from '../Icon/Icon'
import { useTranslation } from 'react-i18next'
import { flags } from '../../config/flags.config'
import { MdArrowDropDown } from 'react-icons/md'

export const Header = () => {
  const { state } = useLocation()
  const { targetId } = state || {}
  const [open, setOpen] = useState(false)
  const toggleMenu = () => {
    setOpen(!open)
  }
  const [translate, i18n] = useTranslation('global')

  const goTo = (url: string, section: string) => {
    navigate(`${url}`, { state: { targetId: `${section}` } })
    toggleMenu()
  }
  const pdfLink = useRef<HTMLAnchorElement>(null!)
  const { actualWidth } = useResize()
  const navigate = useNavigate()
  useEffect(() => {
    const el = document.getElementById(targetId)
    if (el) {
      el.scrollIntoView()
    }
  }, [targetId])
  return (
    <>
      <header className=" flex flex-col z-50   p-2  bg-yellow-400 w-screen">
        <div className="text-center  font-poiret text-lg tracking-wider md:text-2xl ">
          Martin Maffei
        </div>
        <div
          className="flex justify-center items-center gap-2 w-full text-2xl 
         [&>div]:w-full [&>div]:py-2  [&>div]:border-black 
         [&>div]:border-t [&>div]:border-b 
         [&>div]:flex [&>div]:justify-center [&>div]:items-center [&>div]:md:justify-around "
        >
          <div>
            <a
              href="#contact"
              className="capitalize text-sm md:text-xl hover:text-neutral-500 hover:underline  duration-200"
            >
              {translate('header.contact')}
            </a>
            <Menu>
              {({ isOpen }) => (
                <>
                  <MenuButton
                    isActive={isOpen}
                    as={Button}
                    rightIcon={
                      <MdArrowDropDown
                        className={`text-xl duration-150 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    }
                  >
                    <span
                      className={` ${
                        flags.find((f) => f.code === i18n.language)?.flag
                      }`}
                    ></span>
                    {flags.find((f) => f.code === i18n.language)?.label}
                  </MenuButton>
                  <MenuList zIndex={500}>
                    {flags.map((flag) => (
                      <MenuItem
                        onClick={() => {
                          i18n.changeLanguage(flag.code)
                        }}
                      >
                        <span className={` ${flag.flag}`} />
                        {flag.label}
                      </MenuItem>
                    ))}
                  </MenuList>
                </>
              )}
            </Menu>
          </div>
          <Image
            boxSize={{ base: '80px', md: '200px' }}
            objectFit="cover"
            objectPosition="top"
            className="z-20 self-end rounded-full aspect-square"
            src="/profile.png"
          />
          <div className=" flex gap-2">
            <Icon
              As={'a'}
              target="_blank"
              referrerPolicy="no-referrer"
              href="https://www.linkedin.com/in/martinmaffei95/"
            >
              <FaLinkedinIn />
            </Icon>
            <Icon
              As="a"
              target="_blank"
              referrerPolicy="no-referrer"
              href="https://github.com/MartinMaffei95"
            >
              <FaGithub />
            </Icon>
          </div>
        </div>
      </header>
    </>
  )
}
