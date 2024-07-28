import { motion } from 'framer-motion';
import React from 'react'
import { FaRegFileArchive } from "react-icons/fa";
import { IoMdCloudDownload } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Card = ({data, reference}) => {
  return (
    <motion.div drag 
                dragConstraints={reference} 
                whileDrag={{scale: 1.1}} 
                dragElastic={0.1}
                dragTransition={{ bounceStiffness: 100, bounceDamping: 5 }} 
                className=' relative flex-shrink-0 w-60 h-64 rounded-[30px] p-10 px-9 bg-sage-700/50 text-white overflow-hidden'>
        <FaRegFileArchive/>
        <p className='text-xs mt-8 leading-tight text-sage-300  font-semibold'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full h-20 left-0 '>
        <div className='flex items-center justify-between m-3 px-5'>
          <h5>{data.filesize}</h5>
          <span className='w-6 h-6 bg-sage-500 rounded-full flex items-center justify-center'>
          {data.close ? <IoClose/> : <IoMdCloudDownload size=".9em" color='white'/> }
          </span>
        </div>
        {data.tag.isOpen && (
            <div className={`tag w-full h-8 ${data.tag.tagColor === "blue" ? "bg-sage-900" : "bg-sage-700"} flex justify-center items-center`}>
            <h3 className='text-sm font-semibold '>{data.tag.tagTitle}</h3>
            </div>
        )}
        </div>
    </motion.div>

  )
}

export default Card