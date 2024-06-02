import { useState } from "react"
import Container from "./Container"

function WhyChooseUs() {

  const [active, setActive] = useState(1);
  const [activeImg, setActiveImg] = useState("/image1.jpeg");

  const cardData = [
    {
      title:"Genderless Kei – Japan’s Hot",
      description: "Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of",
      imgSrc: "/image.png"
    },
    {
      title:"Better Strategy & Quality",
      description: "Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of",
      imgSrc: "/image1.jpeg"
    },
    {
      title:"Genderless Kei – Japan’s Hot",
      description: "Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of",
      imgSrc: "/image2.jpeg"
    }
  ]


  const handleToggleCard = ({index,imgSrc}) => {
    setActive(index);
    setActiveImg(imgSrc);
  }

  return (
    <Container>

    <section className="my-10">
      <div className="text-[1.5rem] text-[#FF3147] text-center font-semibold">WHY CHOOSE US</div>
      <div className="text-center font-bold text-4xl font-CormorantSC my-5">WHY WE ARE BEST</div>
      <div className='flex my-8'>
        <div>
          <div className="my-4"><img src="/1.svg" alt="Icon" /></div>
          <div className="font-Poppins text-[1.2rem] font-medium">Clarified Vision & Target</div>
          <div className="my-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</div>
        </div>
        <div>
          <div className="my-4"><img src="/2.svg" alt="ICON" /></div>
          <div className="font-Poppins text-[1.2rem] font-medium">High Performance</div>
          <div className="my-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</div>
        </div>
        <div>
          <div className="my-4"><img src="/3.svg" alt="ICON" /></div>
          <div className="font-Poppins text-[1.2rem] font-medium">Maintain Security</div>
          <div className="my-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</div>
        </div>
        <div>
          <div className="my-4"><img src="/4.svg" alt="ICON" /></div>
          <div className="font-Poppins text-[1.2rem] font-medium">Better Strategy & Quality</div>
          <div className="my-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</div>
        </div>
      </div>
      <div className="text-[1.5rem] text-[#FF3147] text-center font-semibold">OUR PROJECT</div>
      <div className="text-center font-bold text-4xl font-CormorantSC my-5">WHY WE ARE BEST</div>
      <div>
        <div className="flex">
          <div className="basis-3/5"><img className="w-[87%] ml-auto rounded-md" src={activeImg} alt="Image" /></div>
          <div className="basis-1/3 h-full ml-4">
            {
              cardData.map((item, index) => (
                <div key={`${item.title}-${index}`}>
                {active === index ? <div className="bg-[#FF3147] text-white p-4 cursor-pointer" onClick={() => handleToggleCard({index,imgSrc:item.imgSrc})}>
                  <div className="text-[1.2rem] font-Poppins my-4">{item.title}</div>
                  <div className="font-Poppins my-4">{item.description}</div>
                </div> :
                <div className="bg-[#F6F6F6] p-5 cursor-pointer" onClick={() => handleToggleCard({index,imgSrc:item.imgSrc})}>
                  <div className={"text-[1.2rem] font-Poppins my-4"}>{item.title}</div>
                  <div className="font-Poppins my-4">{item.description}</div>
                </div>
                }
                </div>
              ))
            }
          </div>
        </div>
      </div>

    </section>
    </Container>
  )
}

export default WhyChooseUs