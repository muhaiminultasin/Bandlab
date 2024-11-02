import React from 'react'
import Title from './common/title'
import Step from './common/Step'

function LandingUsp() {

    const steps = [
        {
            img:"PBImage/music-icon.svg",
            title:"Add your music",
            subtitle: "Access Distribution on any device with BandLab Membership. Select single or multi-tracks for release."
        },
        {
            img:"PBImage/details-icon.svg",
            title:"Enter your details",
            subtitle: "Enter your release details, add cover art and submit it for swift review by BandLab."
        },
        {
            img:"PBImage/earn-icon.svg",
            title:"Release your music",
            subtitle: "Once approved, your track will be sent out to DSPs. Distribution times will vary based on store."
        },
        {
            img:"PBImage/release-icon.svg",
            title:"Earn from your music",
            subtitle: "Keep 100% of the earnings received from your releases with BandLab Membership."
        },
    ]

  return (
    <section className='py-[120px] px-[20px] md:px-[140px]'>
      <Title titleClass={"text-[25px] md:text-[40px] font-[500] md:text-center md:leading-8"}
       subtitleClass={"md:text-center text-[16px]"} title={"Music distribution in 4 easy steps"} subtitle={"Sell your music online, fast - with BandLab Distribution. Available on both web and mobile."}/>

       <div className='py-10 grid grid-cols-1 md:grid-cols-4'>
            {
                steps.map( ({img,title,subtitle},i)=> {
                        return <Step key={i} img={img} title={title} subtitle={subtitle}/>
                })
            }
       </div>


    </section>
  )
}

export default LandingUsp
