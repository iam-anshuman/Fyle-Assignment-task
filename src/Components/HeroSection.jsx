import { useState } from "react";
import Container from "./Container";


function HeroSection() {
  const [openModal, setOpenModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.floating_email.value;
    const first_name = e.target.floating_first_name.value;
    const last_name = e.target.floating_last_name.value;
    const checked = e.target.floating_check.checked;
    if(!email && !first_name && !last_name && !checked){
      alert("Please fill all the fields");
    }
    else{
      fetch('https://getform.io/f/paqglpea',{
        method:"POST",
        body:JSON.stringify({
          email,
          first_name,
          last_name,
          checked
        }),
        headers:{
          "Content-type": "application/json; charset=UTF-8",
          "Accept": "application/json"
        }
      }).then((response)=>{
        if(response.status === 200){
          alert("Form submitted successfully");
          setOpenModal(false);
          e.target.reset();
        }
        else{
          alert("Form submission failed");
          setOpenModal(false);
          e.target.reset();
        }
      }).catch((error)=>{
        alert(error);
        setOpenModal(false);
        e.target.reset();
      })
    }
  }
  return (
    <Container>
    <section className="my-10 relative">
            <div className='flex justify-center align-middle'>
                <div className='basis-1/2 self-center px-6 py-2'>
                    <div className="text-[#FF3147] text-2xl font-semibold my-6">Award Winning</div>
                    <div className="text-6xl font-CormorantSC font-bold my-6">Digital Marketing Agency</div>
                    <div className="font-Poppins  my-6">Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed lacus nec risus finibus feugiat et fermentum</div>
                    <button className="bg-[#FF3147] text-white px-4 py-2 w-28 my-10 cursor-pointer" onClick={()=>setOpenModal(true)}>Contact Us</button>
                </div>
                <div className='basis-1/2'>
                    <img className="w-80 block mx-auto" src="/hero.png" alt="Hero Image" />
                </div>
                <div className={`${openModal?'visible':'hidden'} fixed min-w-[30vw] z-50 mx-auto border-2 p-5 bg-[#FAFAFA] rounded-md top-1/4`}>
                  <form className="min-w-lg" onSubmit={(e)=>handleSubmit(e)}>
                    <div className="flex justify-between">
                    <div className=" my-5 font-Poppins text-left font-semibold text-3xl">Talk to us</div>
                    <svg onClick={()=>setOpenModal(false)} className="my-5 cursor-pointer" fill="#000000" height="30px" width="30px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490 490" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 "></polygon> </g></svg>
                    </div>
                    <div className="relative z-0 w-full my-5 group">
                        <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-lg font-semibold text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-900 dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder=" " required />
                        <label htmlFor="floating_email" className="w-full peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-110 peer-focus:-translate-y-8">Work Email</label>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6 my-5">
                      <div className="relative z-0 w-full my-5 group">
                          <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-lg font-semibold text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-900 dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder=" " required />
                          <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-110 peer-focus:-translate-y-8">First name</label>
                      </div>
                      <div className="relative z-0 w-full my-5 group">
                          <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-lg font-semibold text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-900 dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder=" " required />
                          <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-110 peer-focus:-translate-y-8">Last name</label>
                      </div>
                    </div>
                    <div className="relative z-0 w-full my-5 group">
                        <input type="checkbox" name="floating_check" id="floating_check" className="py-2.5 px-0  accent-[#FF3147] scale-125" placeholder=" " required />
                        <label htmlFor="floating_check" className="w-full absolute text-md text-gray-500 dark:text-gray-400 duration-300 scale-100 mx-2">I agree to Fyle&apos;s terms and conditions, and provide consent to send me communication</label>
                    </div>
                    <div className="relative z-0 w-full my-5 group">
                      <button type="submit" className="w-full text-white font-semibold rounded-lg px-6 py-3 bg-[#FF3147] text-center my-4">Contact Us</button>
                    </div>
                  </form>
                </div>
            </div>
    </section>
    </Container>
  )
}

export default HeroSection;