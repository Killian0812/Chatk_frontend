//Group.js
import React from 'react'
import CreateBox from '../../components/group/CreateBox';
import GroupList from '../../components/group/GroupList';

const Groups = () => {
  return (
    <div className="h-auto min-w-[350px] bg-[#F5F8FD]" >
      {/* Header */}
      <div>
        <h1 className='font-medium text-blue-500 text-2xl p-3'> Groups </h1>
      </div>

      {/* Create Button */}
      <div className='p-3'>
        <CreateBox />

        <div className='pt-6'>
          <GroupList />
        </div>

      </div>

    </div>
  )
}

export default Groups;
