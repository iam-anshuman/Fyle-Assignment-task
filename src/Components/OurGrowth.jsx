
function OurGrowth() {

    const GrowthData = [
        {
            id: 1,
            icon: "heart (2).svg",
            number: "199+",
            text: "Satisfied Customer"
        },
        {
            id: 2,
            icon: "clock (3).svg",
            number: "1592+",
            text: "Days of Operation"
        },
        {
            id: 3,
            icon: "Path 4402.svg",
            number: "283+",
            text: "Completed Project"
        },
        {
            id: 4,
            icon: "Path 4406.svg",
            number: "75+",
            text: "Win Awards"
        }
    ]

  return (
    <section className="bg-[#FAFAFA] py-20">
        <div className="block w-[75vw] mx-auto">
            <div className="text-center my-4 text-[#FF3147] text-2xl font-CormorantSC font-semibold">EXPERT GROWTH</div>
            <div className="text-center my-4 text-5xl font-CormorantSC font-bold ">OUR COMPANY GROWTH</div>
            <div className="flex justify-between">
                {
                    GrowthData.map((item) => (
                        <div key={item.id} className="bg-[#FFFFFF] text-center p-5 rounded-md hover:shadow-[#672C2C1F] hover:shadow-2xl">
                            <div><img className="w-10 block mx-auto my-4"  src={item.icon} alt="ICON" /></div>
                            <div className="text-4xl font-semibold my-4">{item.number}</div>
                            <div className="tect-[1.2rem] text-center font-Poppins">{item.text}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default OurGrowth;