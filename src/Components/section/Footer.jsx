import React from 'react'
import FooterList from '../common/FooterList';
import StoreButton from "../common/StoreButton";

function Footer() {


  //Footer list icons
  const Features = [
    {
      Name:"Membership",
      Link:""
    },
    {
      Name:"Studio",
      Link:""
    },
    {
      Name:"Effects",
      Link:""
    },
    {
      Name:"Mastering",
      Link:""
    },
    {
      Name:"SongStarter",
      Link:""
    },
    {
      Name:"Splitter",
      Link:""
    },
    {
      Name:"Sounds",
      Link:""
    },
  ]
  const Services = [
    {
      Name:"Promote",
      Link:""
    },
    {
      Name:"Distribution",
      Link:""
    },
    {
      Name:"Oppotunities",
      Link:""
    },
    {
      Name:"Crowd Review",
      Link:""
    },
    {
      Name:"Fan Reach",
      Link:""
    }
  ]
  const Company = [
    {
      Name:"About Us",
      Link:""
    },
    {
      Name:"Careers",
      Link:""
    },
    {
      Name:"Press",
      Link:""
    },
    {
      Name:"Contact Us",
      Link:""
    }
  ]
  const Community = [
    {
      Name:"Blog",
      Link:""
    },
    {
      Name:"Help",
      Link:""
    },
    {
      Name:"Music Rights",
      Link:""
    }
  ]

  // Footer social icons

  const FooterIcons = [
    {
      img:"./PBImage/instagram-icon.png",
      Link:""
    },
    {
      img:"./PBImage/facebook-icon.png",
      Link:""
    },
    {
      img:"./PBImage/x-icon.png",
      Link:""
    },
    {
      img:"./PBImage/tiktok-icon.jpeg",
      Link:""
    },
    {
      img:"./PBImage/discord-icon.png",
      Link:""
    },
    {
      img:"./PBImage/reddit-icon.png",
      Link:""
    },
    {
      img:"./PBImage/youtube-icon.jpeg",
      Link:""
    },
  ]

  return (
    <footer className='py-10 px-[20px]  md:px-[70px] lg:px-[140px]'>
      <div className="main">
        <img src="./PBImage/bandlab-logotype.svg" alt="" className='my-3'/>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
          <FooterList title={"Features"} catagory={Features}  />
          <FooterList title={"Services"} catagory={Services}  />
          <FooterList title={"Company"} catagory={Company}  />
          <FooterList title={"Community"} catagory={Community}  />
        </div>
      </div>

      <div className='spcial-icons py-5 grid gap-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-2'>
          <div className='icons'>
            <ul className='flex justify-center md:justify-start items-center gap-5'>
              {
                FooterIcons.map( ({img, Link}) => {
                  return <li className='bg-[#E8ECF0] w-fit p-1 sm:p-2  rounded-full'><a href={Link}><img src={img} className='w-[20px]' alt="" /></a></li>
                })
              }
            </ul>
          </div>

          <div className='buttons flex justify-center md:justify-end gap-10 md:ms-auto'>
          <StoreButton className={"bg-black mt-0"} img={"./PBImage/apple-logo-02.png"} title={"App Store"} subtitle={"Download on"} />
          <StoreButton className={"bg-black mt-0"} img={"./PBImage/pl-logo.webp"} title={"Play Store"} subtitle={"Get it on"} />
          </div>
      </div>

      <div className='grid grid-cols-2 gap-auto mt-5 text-[14px] text-[#111C2EA3]'>
        <p>© 2024 BandLab Technologies</p>
        <div className='flex gap-5 justify-end'>
          <a href="">Terms of Use</a>
          <a href="">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;



        