import Image from "next/image"

const GsapLogo = () => {
  return (
    <Image
      src="/assets/gsapLogo.svg"
      alt="gsap logo"
      height={20}
      width={50}
      className="max-lg:h-4"
    />
  );
}

export default GsapLogo