import React from 'react';

const CreateBar = () => {
  return (
    <div className='items-center flex flex-row justify-center'>
      <button className='bg-blue-300 text-white w-[200px] h-[100px] rounded-xl mt-12 hover:scale-110 transition-all duration-300 cursor-pointer'>
        Create Post
      </button>
    </div>
  );
};

export default CreateBar;
