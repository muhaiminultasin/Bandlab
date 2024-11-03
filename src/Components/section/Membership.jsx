import React from 'react'
import Title from '../common/title'
import Button from '../common/Button'

function Membership() {

    const tags = [
        {
            title:"Distribution"
        },
        {
            title:"Fan reach"
        },
        {
            title:"Profile boost"
        },
        {
            title:"Unlimited opportunities"
        }
    ]

  return (
    <section className='px-[20px] bg-[#E3E9ED] md:px-[100px] py-[100px] frid-cols-1 md:grid grid-cols-2 items-center gap-10 md:gap-5'>
      <div>
        <Title title={"Comes with your Membership"} titleClass={"text-[25px] md:text-[40px] font-[500]"}/>

        <div className='tags flex flex-wrap gap-5'>
            {
                tags.map( ({title},i) => {
                    return <Button key={i} Name={title} className={"bg-white text-[14px]"}/>
                })
            }
        </div>

        <Title subtitleClass={"text-[#7E8999]"} subtitle={"Enjoy BandLab Distribution, along with a full suite of artist-centric features under BandLab Membership."}/>
      </div>

      <div>
            <img src="./PBImage/distro-landing-membership_2x.png" alt="" />
      </div>
    </section>
  )
}

export default Membership
