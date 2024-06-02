import Container from "./Container";

function ClientFeedback() {
  return (
    <Container>
        <div className="text-center text-[#FF3147] text-[1.5rem] font-CormorantSC font-semibold my-10">CLIENT FEEDBACK</div>
        <div className="text-center text-4xl font-bold font-CormorantSC my-5">PEOPLE SAY&apos;S ABOUT US !</div>
        <div className="relative my-10">
            <img className="absolute -top-4 -left-5 -z-10" src="Quotemarks-left.svg" alt="QuoteMark" />
            <p className="text-[1.2rem] text-left font-Poppins">Jannat Tumpa The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
            <div className="flex my-10">
                <div className="font-Poppins text-[#FF3147] font-semibold text-[1.5rem]">JANNAT TUMPA </div>
                <div className="font-Poppins text-[#808080] font-semibold text-[1.5rem]"> - COO, AMERIMAR ENTERPRISES, INC.</div>
            </div>
        </div>
    </Container>
  )
}

export default ClientFeedback;