import React, {useEffect} from 'react'
import './footer.css'
import video2 from '../../Assets/video2.mp4'
import { FiSend } from "react-icons/fi";
import {MdOutlineTravelExplore} from 'react-icons/md'
import { AiOutlineTwitter } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

import Aos from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div data-aos="fade-up" className="secContent container">
        <div className="contacDiv flex">
            <div className="text">
              <small>KEEP IN TOUCH</small>
              <h2>Travel with us</h2>
            </div>

            <div className="inputDiv flex">
              <input type="text" placeholder='Enter Email Address' />
              <button className="btn flex" type='submit'>
                
                  SEND<FiSend className="icon"/>
              </button>
            </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdOutlineTravelExplore className="icon"/>Travel.
              </a>
            </div>
            <div className="footerParagraph">
              Lorem ipsum dolor sit amet, aconsertetur adipisicing elit. Ullam inventore eos fuga hic cum voluptatem minima
            </div>
            <div className="footerSocials flex">
              <AiOutlineTwitter  className="icon"/>
              <FaYoutube  className="icon"/>
              <AiFillInstagram  className="icon"/>
              <FaTripadvisor  className="icon"/>
            </div>
          </div>
          <div className="footerLinks grid">
              <div className="linkGroup">
                <span className="groupTitle"> 
                  OUR AGENCY
                </span>
              </div>

              <li className="groupList flex">
                <FaAngleRight className="icon" />
                Services
              </li>
              <li className="groupList flex">
                <FaAngleRight className="icon" />
                Insurance
              </li>
              <li className="groupList flex">
                <FaAngleRight className="icon" />
                Agency
              </li>
              <li className="groupList flex">
                <FaAngleRight className="icon" />
                Tourism
              </li>
              <li className="groupList flex">
                <FaAngleRight className="icon" />
                Payment
              </li>


              <div className="linkGroup">
                <span className="groupTitle"> 
                  PARTNERS
                </span>
              </div>

              <li className="groupList flex">
                <FaAngleRight className="icon" />
                Bookings
              </li>
              <li className="groupList flex">
                <FaAngleRight className="icon" />
                Rentcars
              </li>
              <li className="groupList flex">
                <FaAngleRight className="icon" />
                HostelWord
              </li>
              <li className="groupList flex">
                <FaAngleRight className="icon" />
                Tourism
              </li>
              <li className="groupList flex">
                <FaAngleRight className="icon" />
                Payment
              </li>
          </div>
        <div className="footerDiv flex">
          <small>BEST TRAVEL WEBSITE THEME</small>
          <small>2024</small>
        </div>

        </div>
      </div>
    </section>
  )
}

export default Footer