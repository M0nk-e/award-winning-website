import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">coming soon</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Features = () => (
  <section className="bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-blue-50">
          Our Marketing Services
        </p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          We provide a comprehensive range of marketing services to help your brand 
          stand out and achieve measurable results in today's competitive landscape.
        </p>
      </div>

      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="videos/feature-1.mp4"
          title={
            <>
              Dr<b>o</b>ne Footage
            </>
          }
          description="Capture stunning aerial perspectives with our professional drone videography services, perfect for real estate, events, and commercial projects."
          isComingSoon
        />
      </BentoTilt>

      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="videos/feature-2.mp4"
            title={
              <>
                Phot<b>o</b>shoots, Smile :)
              </>
            }
            description="Professional photography services for brands, products, and corporate events, capturing your story in every frame."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
            src="videos/feature-3.mp4"
            title={
              <>
                Profess<b>i</b>onal Editing
              </>
            }
            description="Transform your raw footage into polished masterpieces with our expert video and photo editing services."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="videos/feature-4.mp4"
            title={
              <>
                Everyth<b>i</b>ng and more
              </>
            }
            description="Comprehensive marketing solutions including social media management, content creation, and brand strategy."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <div className="flex size-full flex-col justify-between bg-blue-500 p-5">
            <h1 className="bento-title special-font max-w-64 text-white">
              Our Cl<b>i</b>ents
            </h1>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <img 
                  src="https://yt3.googleusercontent.com/J9N7Zu--_E6RpPh6QzpQyJQDrRuWcNrYNNrBiOV9xkT5IeshJtT-4AEmdix3xEvkiyEF4tmacLs=s900-c-k-c0x00ffffff-no-rj"
                  alt="MBC"
                  className="h-20 w-20 rounded-full object-cover"
                />
                <p className="mt-2 text-xs text-white">MBC</p>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D4E0BAQH1bIzXBvFAig/company-logo_200_200/company-logo_200_200/0/1664472539367/riyad_bank_logo?e=2147483647&v=beta&t=SG-iquxNEkEUVoZOJUATg8YLDnZvh4J88wlC3ClWa-U"
                  alt="Riyad Bank"
                  className="h-20 w-20 rounded-full object-cover"
                />
                <p className="mt-2 text-xs text-white">Riyad Bank</p>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D4D0BAQE1LeMd45ceqQ/company-logo_200_200/company-logo_200_200/0/1700727793807/__logo?e=2147483647&v=beta&t=eQqLES7WFP2wB8JNgKTSX8NMA_L5JAdCrxp5AWtZLt8"
                  alt="Insurance Authority"
                  className="h-20 w-20 rounded-full object-cover"
                />
                <p className="mt-2 text-xs text-white">Insurance Authority</p>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src="https://m.eyeofriyadh.com/directory/images/2021/07/1b9c527e42d05.jpg"
                  alt="Okaz"
                  className="h-20 w-20 rounded-full object-cover"
                />
                <p className="mt-2 text-xs text-white">Okaz</p>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D4E0BAQETvgsxinMCQw/company-logo_200_200/company-logo_200_200/0/1737553409760?e=2147483647&v=beta&t=vQlEsA6NNmWk-FuQYlR8zVOSXZrD9cwDG7wqI7UUxPk"
                  alt="HRC"
                  className="h-20 w-20 rounded-full object-cover"
                />
                <p className="mt-2 text-xs text-white">HRC</p>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src="https://media.licdn.com/dms/image/v2/C4D0BAQG5jZnY4CdaNA/company-logo_200_200/company-logo_200_200/0/1630492202877/alwatansa_logo?e=2147483647&v=beta&t=zgnqvBDsAwkZBGiUniD7X23s46l2Bkp8lFnp7Ih8u8U"
                  alt="Alwatan"
                  className="h-20 w-20 rounded-full object-cover"
                />
                <p className="mt-2 text-xs text-white">Alwatan</p>
              </div>
            </div>
          </div>
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <video
            src="videos/feature-5.mp4"
            loop
            muted
            autoPlay
            className="size-full object-cover object-center"
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;
