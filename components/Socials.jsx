import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoDribbble } from 'react-icons/bi'


const socials = [
  {
    icon: <BiLogoFacebook />,
    path: "https://www.facebook.com/",
  },
  {
    icon: <BiLogoInstagram />,
    path: "https://www.instagram.com/",
  },
  {
    icon: <BiLogoLinkedin />,
    path: "https://www.linkedin.com/",
  },
  {
    icon: <BiLogoDribbble />,
    path: "https://dribbble.com/"
  },
]

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <div key={index} className={iconStyles}>
            {item.icon}
          </div>
        )
      })}
    </div>
  )
}

export default Socials