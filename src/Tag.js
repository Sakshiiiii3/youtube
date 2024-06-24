import React from 'react'
// import  {tagBarList} from "../tagBarLink"


const Tags = () => {
 const tagBarList = ['All', 'Music', 'LiveMusic', 'Computer Programing', 'Computer KeyBoard','Games', 'Comedy']
  return (
   <ul className='flex'>
    {/* {tagBarList.map((item)=>{
       return (<li className='bg-grey-200 px-2 py-1 rounded-md'>{item}</li>) })} */}
       {tagBarList.map((item)=>{
            return (
                <li className='bg-gray-200 px-2 py-1 rounded-md mx-2'>{item}</li>
            )
         })}
   </ul>
  )
}

export default Tags