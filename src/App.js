import React from "react";

import NavBar from "./navBar";
import Card from "./cardLogic";
import Update from "./useState";

function App() {
  return (
    // <React.Fragment>

    // <div className="App">
    //   <header className="App-header">

    //     <h1>react</h1>
    //   </header>
    // </div>
    // </React.Fragment>

    <>
      <div className="App">
        <header className="App-header">
          {/* <NavBar />
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card> */}
        </header>
        <Update />
      </div>
    </>
  );
}

// const NavBar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">
//           Navbar
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" href="#">
//                 Home
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Link
//               </a>
//             </li>
//             <li className="nav-item dropdown">
//               <a
//                 className="nav-link dropdown-toggle"
//                 href="#"
//                 id="navbarDropdown"
//                 role="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 Dropdown
//               </a>
//               <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     Action
//                   </a>
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     Another action
//                   </a>
//                 </li>
//                 <li>
//                   <hr className="dropdown-divider" />
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     Something else here
//                   </a>
//                 </li>
//               </ul>
//             </li>
//             <li className="nav-item">
//               <a
//                 className="nav-link disabled"
//                 href="#"
//                 tabIndex="-1"
//                 aria-disabled="true"
//               >
//                 Disabled
//               </a>
//             </li>
//           </ul>
//           <form className="d-flex">
//             <input
//               className="form-control me-2"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
//             <button className="btn btn-outline-success" type="submit">
//               Search
//             </button>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// };

// const bankDBs = [
//   {
//     id: 1,
//     image: heroImage,
//     bankName: "kuda",
//     branch: "ikeja",
//     streetNum: 30,
//   },
//   {
//     id: 2,
//     image: quoteImg,
//     bankName: "barter",
//     branch: "mile 12",
//     streetNum: 28,
//   },
//   {
//     id: 3,
//     image: cardImage,
//     bankName: "carbon",
//     branch: "mile 12",
//     streetNum: 28,
//   },
// ];

// const Card = () => {
//   return (
//     <div>
//       <h2>Our Cards</h2>
//       <div className="row">
//         {bankDBs.map((bank) => {
//           return (
//             <div className="col-md-4 col-sm-12" key={bank.id}>
//               <SingleCard {...bank}></SingleCard>;
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
// const Card = () => {
//   return (
//     <div>
//       <h2>Our Cards</h2>
//       <div className="row">
//         <div className="col-4">
//           <SingleCard
//             image={heroImage}
//             number={42}
//             street="ketu"
//             state="lagos"
//             // country="nigeria"
//           />
//         </div>
//         <div className="col-4">
//           <SingleCard
//             image={quoteImg}
//             number={35}
//             street="ikeja"
//             state="abuja"
//             country="nigeria"
//           />
//         </div>
//         <div className="col-4">
//           <SingleCard
//             image={cardImage}
//             number={40}
//             street="Mile 12"
//             state="kwara"
//             country="ghana"
//           >
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, vel.
//           </SingleCard>
//         </div>
//       </div>
//     </div>
//   );
// };
// const Card = () => {
//   return (
//     <div>
//       <h2>Our Cards</h2>
//       <div className="row">
//         <div className="col-4">
//           <div className="card">
//             <img src={design} className="card-img-top" alt="..." />
//             <div className="card-body">
//               <h5 className="card-title">Card title</h5>
//               <p className="card-text">
//                 Some quick example text to build on the card title and make up
//                 the bulk of the card's content.
//               </p>
//               <a href="#" className="btn btn-primary">
//                 Go somewhere
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="col-4">
//           <div className="card">
//             <img src={design} className="card-img-top" alt="..." />
//             <div className="card-body">
//               <h5 className="card-title">Card title</h5>
//               <p className="card-text">
//                 Some quick example text to build on the card title and make up
//                 the bulk of the card's content.
//               </p>
//               <a href="#" className="btn btn-primary">
//                 Go somewhere
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="col-4">
//           <div className="card">
//             <img src={design} className="card-img-top" alt="..." />
//             <div className="card-body">
//               <h5 className="card-title">Card title</h5>
//               <p className="card-text">
//                 Some quick example text to build on the card title and make up
//                 the bulk of the card's content.
//               </p>
//               <a href="#" className="btn btn-primary">
//                 Go somewhere
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const SingleCard = ({ image, number, street, state, country }) => {
// const SingleCard = (props) => {
//   const { image, bankName, streetNum, branch } = props;
//   // console.log(props);
//   let name = "Oluwaseun";
//   return (
//     <section>
//       <div className="card">
//         <img src={image} className="card-img-top" alt="..." />
//         <div className="card-body cardBody">
//           <h5 className="card-title" style={{ textDecoration: "underline" }}>
//             {bankName}
//           </h5>
//           <p>{streetNum}</p>
//           {/* <p
//             className="card-text"
//             style={{ backgroundColor: "aqua", fontWeight: 900 }}
//           > */}
//           <p className="card-text" style={cardStyle}>
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </p>

//           <a href="#" className="btn btn-primary">
//             {branch}
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };
// // const SingleCard = ({ image, number, street, state, country }) => {
// const SingleCard = (props) => {
//   const { image, number, street, state, country, children } = props;
//   // console.log(props);
//   let name = "Oluwaseun";
//   return (
//     <section>
//       <div className="card">
//         <img src={image} className="card-img-top" alt="..." />
//         <div className="card-body cardBody">
//           <h5 className="card-title" style={{ textDecoration: "underline" }}>
//             {state}
//           </h5>
//           <p>
//             {number} <span>{street}</span>
//           </p>
//           {/* <p
//             className="card-text"
//             style={{ backgroundColor: "aqua", fontWeight: 900 }}
//           > */}
//           <p className="card-text" style={cardStyle}>
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </p>
//           <p>{children}</p>
//           <a href="#" className="btn btn-primary">
//             {country}
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// let cardStyle = {
//   backgroundColor: "yellow",
//   fontWeight: 900,
// };
export default App;
