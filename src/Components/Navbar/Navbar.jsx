import React, { useState } from "react";
import { Link } from "react-router-dom";
import styleNav from "./Navbar.module.css";
import imgLogo from "../../img/logo.png";
import Offer from "../Offer/Offer";
import User from "../User/User";
import { useDispatch, useSelector } from "react-redux"; 
import { setSearchTerm } from "../Redux/searchSlice";


export default function NavbarObj() {
  const dispatch = useDispatch(); 
  const searchTerm = useSelector((state) => state.search.searchTerm);


  const  count =useSelector((cou)=>(cou))
  const dupCount =count.counterAy7aga.count
  //  console.log(dupCount)
  const [showModal, setShowModal] = useState(false); 

 
  return (
    <>

<nav className="navbar navbar-expand-lg navbar-light bg-light p-0 m-0">
  <div className="container  ">
  <div className=" col-lg-1 col-md-3 col-sm-4 col-5 ">
        <Link to=""  className="logo logo-dark">
          <img className={`${styleNav.imgLogo}`} src={imgLogo} alt="Site Logo" />
        </Link>   
        </div>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="menu-item-has-children">
              <Link className={`${styleNav.Links}`} to="">
                Home
              </Link>
            </li>
            <span className=" mx-3"></span>

            <li className="">
              <Link className={`${styleNav.Links}`} to="shop">
                Shop
              </Link>
            </li>
            <span className=" mx-3"></span>

            {/* <li className="">
              <Link className={`${styleNav.Links}`} to="about">
                Pages
              </Link>
            </li>
            <span className=" mx-3"></span> */}


            <li className="">
              <Link className={`${styleNav.Links}`} to="about">
                About
              </Link>
            </li>
            <span className=" mx-3"></span>

            <li className="">
              <Link className={`${styleNav.Links}`} to="contact">
                Contact
              </Link>
            </li>
      </ul>
      <ul className={`${styleNav.actionList} d-flex mb-lg-0`}>

      {/* <ul className="navbar-nav ms-auto mb-2 mb-lg-0"> */}
          <li className="">
            <div className={`${styleNav.search}`}>
              <input
                className={`${styleNav.inp}`}
                type="search"
                name="search2"
                id="search2"
                value={searchTerm}
                onChange={(e) => dispatch(setSearchTerm(e.target.value))} 
                maxLength="128"
                placeholder="What are you looking for?"
              />
              <i className={`${styleNav.iconSearch}  fa fa-search `}></i>
            </div>
          </li>
         
          <li className="wishlist mx-3">
            <Link onClick={() => setShowModal(true)}>
            <i  className="fa-solid fa-user text-dark"></i>
            </Link>
         
          </li>
          <li className="shopping-cart d-flex  align-items-center ms-2" >
            <Link  to="/cart"    className="" style={{ position: "relative" }}>
              <i className="fa-solid fa-cart-shopping text-dark "></i>
              <div
                className={`${styleNav.roun}  d-flex justify-content-center align-items-center`}
                style={{
                  color: "white",
                  width: "1.2rem",
                  height: "1.2rem",
                }}
              >
                {dupCount}
              </div>
            </Link>
          </li>
        </ul>
    </div>
  </div>
</nav>
  <User showModal={showModal} handleClose={() => setShowModal(false)} />

      <Offer/>
    </>
  );
}
