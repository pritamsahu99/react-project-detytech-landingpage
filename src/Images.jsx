import React from 'react'

function Images() {
  return (
    <div className='h-[85vh] absolute w-full flex justify-center items-center'>
      <div className='h-72 w-60 rounded-xl overflow-hidden flex items-center flex-col absolute z-[11]'>
      <img className="object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D" alt="" />
      <div className='z-[12] h-12 w-56 absolute bottom-9 flex justify-center  items-center'>
          <i class="ri-settings-4-line bg-slate-100 px-1 text-2xl font-thin rounded-full"></i>
          <div className='py-1 px-3  rounded-full bg-slate-100'>
            <h4>Advanced Technology</h4>
          </div>
        </div>
      </div>
      <div className='h-72 -rotate-6  w-60 rounded-xl overflow-hidden flex items-center flex-col absolute z-[10]'>
      <img className="object-cover " src="https://plus.unsplash.com/premium_photo-1673757121102-0ca51260861f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWx8ZW58MHx8MHx8fDA%3D" alt="" />
      <div className='z-[12] h-12 w-56 absolute bottom-9 flex justify-center  items-center'>
          <img src="./src/assets/hand1.png" className="bg-slate-100 px-1 py-1 text-2xl font-thin rounded-full"/>
          <div className='py-1 px-3  rounded-full bg-slate-100'>
            <h4>Convenience</h4>
          </div>
        </div>
      </div>
      <img className="absolute z-[9] rounded-xl h-72 w-60 object-cover -rotate-12 " src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsfGVufDB8fDB8fHww" alt="" />
      <img className="absolute z-[8] rounded-xl h-72 w-60 object-cover -rotate-[17deg] " src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWx8ZW58MHx8MHx8fDA%3D" alt="" />
      <div className='h-16 w-16 flex justify-center items-start absolute -bottom-10 border-l-[1px] rounded-full border-r-[1px] border-t-[1px] border-black border-solid'>
        <i class="ri-arrow-down-line mt-3 font-thin text-3xl animate-bounce"></i>
      </div>
    </div>
  )
}

export default Images
