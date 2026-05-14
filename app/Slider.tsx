// import Marquee from "react-fast-marquee";

// const MyComponent = () => (
//   <Marquee 
//     speed={50} 
//     pauseOnHover={true} 
//     gradient={true}
//     gradientColor={[255, 255, 255]}
//   >
//     <img src="logo1.png" alt="Brand 1" />
//     <img src="logo2.png" alt="Brand 2" />
//     <span>Special Announcement!</span>
//   </Marquee>
// );

// export default MyComponent;
export default function Slider(){
    return (
  <>
    <div className="w-full overflow-hidden bg-black text-white py-2 border-y border-white/10">
  <div className="flex whitespace-nowrap animate-marquee gap-10">
    {[
      "AI Chatbot Development",
      "Web Development",
      "Branding Design",
      "Python Automation",
      "API Integration",
      "UI/UX Design",
      "AI Automation",
      "Clothing Branding",
    ]
      .concat([
        "AI Chatbot Development",
        "Web Development",
        "Branding Design",
        "Python Automation",
        "API Integration",
        "UI/UX Design",
        "AI Automation",
        "Clothing Branding",
      ])
      .map((item, index) => (
        <span
          key={index}
          className="text-sm md:text-base font-medium tracking-wide"
        >
          ✦ {item}
        </span>
      ))}
  </div>
</div>
    </>
    )  
}