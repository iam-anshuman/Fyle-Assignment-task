import Slider from "react-slick";

const carousalData = [
    {
        title: "Web Development",
        description: "Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed lacus nec risus finibus feugiat et fermentum",
        imgSrc: '/1-1.png'
    },
    {
        title:"SEO Optimization",
        description: "Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed lacus nec risus finibus feugiat et fermentum",
        imgSrc: '/2-1.png'
    },
    {
        title:"Social Media Marketing",
        description: "Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed lacus nec risus finibus feugiat et fermentum",
        imgSrc: '/3-1.png'
    },
    {
        title:"Content Marketing",
        description: "Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed lacus nec risus finibus feugiat et fermentum",
        imgSrc: '/1-1.png'
    },
    {
        title:"Web Development",
        description: "Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed lacus nec risus finibus feugiat et fermentum",
        imgSrc: '/2-1.png'
    }
]

function WhatWeDo() {


    const settings ={
        className: "slider variable-width",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
    }

    return (
      <section className="bg-[#FAFAFA] py-20">
        <div className="block w-[75vw] mx-auto">

          <div className="text-[#FF3147] text-[1.5rem] font-semibold">WHAT WE DO</div>
          <div className="flex">
              <div className="basis-1/4 text-4xl font-CormorantSC font-bold  mr-4 my-4">SERVICES PROVIDE FOR YOU</div>
              <div className="basis-2/4 font-Poppins mx-4 my-4 px-10 py-2 text-sm">Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed lacus nec risus finibus feugiat et fermentum</div>
          </div>
          <Slider {...settings}>
                {carousalData.map((item, index) => (
                    <div key={`${item.title}-${index}`} className="group/item">
                        <div className="relative">
                            <div className="absolute text-white w-64 invisible h-full bg-[#FF3147] text-center group-hover/item:visible">
                                <div className="mt-14">
                                    <img className="w-8 block mx-auto  my-2" src="/icon.svg" alt="Code" />
                                    <div className="text-lg font-semibold font-CormorantSC my-4">WEB DEVELOPMENT</div>
                                    <div className="font-Poppins my-4">Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque</div>
                                    <div className="bg-white text-[#FF3147] p-4 w-2/3 block mx-auto my-6 cursor-pointer font-bold">Read More →</div>
                                </div>
                            </div>
                            <img className="w-64" src={item.imgSrc} alt={item.title} />
                        </div>
                    </div>
                ))}
          </Slider>

        </div>
      </section>
    )
}

export default WhatWeDo;