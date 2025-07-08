// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";

// function FadeIn() {
//   const boxRef = useRef(null); // 👈 Reference to DOM element

//   useEffect(() => {
//     gsap.to(boxRef.current, {
//       opacity: 0,
//       y: 50,
//       duration: 1,
//       delay: 2,
//       ease: "power2.out",
//     });
//   }, []);

//   return (
//     <div ref={boxRef} style={{ fontSize: "2rem", fontWeight: "bold", paddingTop: "100px", color: "black" }}>
//       Hello Ladakh!
//     </div>
//   );
// }

// export default FadeIn;
