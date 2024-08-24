import React from 'react'
import { FaGlobe } from "react-icons/fa";
import { BsFileBarGraph } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import blob from "../assets/blobs.png"
import blobR from "../assets/blobR.png"
import video from "../assets/videoo.mp4"

function About_us() {
  return (
    <div className='w-screen p-4 mt-80'>
      {/* 1st div */}
      <div className='h-112 w-full bg-transparent mt-80 flex justify-center items-center absolute -bottom-96 about_us1'>
        {/* 2nd div with doubled height */}
        <div className='h-112 w-2/3 bg-white shadow-2xl p-7 mt-80  rounded-xl flex about-morphic about_us2'>
          {/* 3rd div */}
          <div className='w-full h-full'>
            <video
              className="w-full h-full object-cover rounded-lg"
              controls
              autoPlay
              loop
              muted
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About_us;
