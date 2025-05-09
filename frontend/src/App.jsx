// import React from "react";
// import Navbar from "./components/Navbar";
// import bg from "../src/assets/bg.jpg";
// import bg2 from "../src/assets/bg-2.png";

// function App() {
//   return (
//     <div
//       className="w-full h-screen flex justify-center items-center"
//       style={{
//         backgroundImage: `
//           linear-gradient(rgba(16, 20, 24, 0.6), rgba(16, 20, 24, 0.6)),
//           url(${bg2}),
//           url(${bg})
//         `,
//         backgroundSize: "100% 100%, 100% 100%, 100% 100%",
//         backgroundPosition: "top left, top left, top left",
//         backgroundRepeat: "no-repeat, no-repeat, no-repeat",
//         backgroundAttachment: "scroll, scroll, scroll",
//       }}
//     >
//       <div className="w-full max-w-[1440px] h-[810px]">
//         <Navbar />
//         {/* Add page content here */}
//       </div>
//     </div>
//   );
// }

// export default App;

import React from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import bg from "./assets/bg.jpg";
import bg2 from "./assets/bg-2.png";

function App() {
  return (
    <div
      className="w-full h-screen flex justify-center items-center"
      style={{
        backgroundImage: `
          linear-gradient(rgba(16,20,24,.6), rgba(16,20,24,.6)),
          url(${bg2}),
          url(${bg})
        `,
        backgroundSize: "100% 100%, 100% 100%, 100% 100%",
        backgroundPosition: "top left, top left, top left",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
      }}
    >
      <div className="w-full max-w-[1440px] h-[810px]">
        <Navbar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
