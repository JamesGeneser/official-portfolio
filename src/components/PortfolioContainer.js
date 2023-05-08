// import React, { useState } from "react";
// import Navigation from "./Navigation";
// import Home from "./pages/Home";
// import Project from "./pages/Project";

// export default function PortfolioContainer() {
//   const [currentPage, setCurrentPage] = useState("Home");

//   const renderPage = () => {
//     if (currentPage === "home") {
//       return <Home />;
//     }
//     if (currentPage === "portfolio") {
//       return <Project />;
//     }
//   };

//   const handlePageChange = (page) => setCurrentPage(page);

//   return (
//     <div>
//       {/* We are passing the currentPage from state and the function to update it */}
//       <Navigation
//         currentPage={currentPage}
//         handlePageChange={handlePageChange}
//       />
//       {/* Here we are calling the renderPage method which will return a component  */}
//       {renderPage()}
//     </div>
//   );
// }
