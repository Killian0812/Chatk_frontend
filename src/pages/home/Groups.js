import CreateBox from '../../components/grouppanel/CreateBox';
import GroupList from '../../components/grouppanel/GroupList';
import useUserData from '../../hooks/useUserData';

const Groups = () => {

  const { listGroup, setListGroup } = useUserData();

  const handleCreateGroup = async (newGroup) => {
    setListGroup((prev) => {
      return [...prev, newGroup];
    });
  }

  return (
    <div className="h-auto min-w-[350px] bg-[#F5F8FD]" >
      {/* Header */}
      <div>
        <h1 className='font-bold text-blue-500 text-2xl p-3'> Groups </h1>
      </div>

      {/* Create Button */}
      <div className='p-3'>
        <CreateBox onCreateGroup={handleCreateGroup} />

        <div className='pt-6'>
          <GroupList listGroup={listGroup} setListGroup={setListGroup} />
        </div>

      </div>

    </div>
  )
}

export default Groups;
