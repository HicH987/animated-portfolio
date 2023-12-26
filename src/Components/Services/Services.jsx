export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "I specialize in creating responsive and user-friendly websites tailored to your specific needs. From simple static websites to complex web applications, I've got you covered.",
    },
    {
      title: "Mobile App Development",
      description:
        "Need a mobile app for your business? I can develop native or cross-platform mobile applications that run smoothly on iOS and Android devices, providing a seamless user experience.",
    },
    {
      title: "UI/UX Design",
      description:
        "A visually appealing and intuitive user interface is crucial for engaging users. I can design modern and eye-catching UIs that enhance user experience and drive conversions.",
    },
    {
      title: "E-commerce Solutions",
      description:
        "Want to sell your products or services online? I can build robust e-commerce platforms with secure payment gateways, inventory management, and personalized shopping experiences.",
    },
  ];

  return (
    <div className="flex flex-col gap-1 p-5">
      <div className="flex flex-row items-center justify-end">
        <p className="w-1/3 pr-3 text-3xl text-right font-extralight">
          I focus on helping your brand grow and move forward
        </p>
        <hr className="w-1/4 border-gray-500" />
      </div>

      <div className="flex gap-5">
        <img
          className="object-cover h-32 rounded-full w-72 outline outline-[#ffa500]"
          src="/people.webp"
          alt=""
        />
        <p className="text-8xl font-extralight">
          <b className="font-bold">Unique</b> Ideas
        </p>
      </div>

      <div className="flex flex-row-reverse gap-5">
        <button className="h-32 rounded-full w-72 outline outline-[#ffa500]">
          What I Do ?
        </button>
        <p className="text-8xl font-extralight">
          <b className="font-bold">For Your</b> Business
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <h2 className="text-4xl font-extralight">
          <b className="font-bold">Services</b> Offered
        </h2>
        <ul className="flex">
          {services.map((service, index) => (
            <li
              key={index}
              className="flex flex-col gap-5 border border-[#ffa500] px-5 py-3"
            >
              <h1 className="text-3xl font-bold h-[20%]">{service.title} </h1>
              <p className="text-justify font-extralight">
                {service.description}
              </p>
              <button className="bg-[#ffa500] text-black px-5 py-3 rounded-sm w-full self-end mb-5">
                Learn More
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
