import {
  Channel, MessageInput, MessageList, Thread, Window, useChatContext,
} from 'stream-chat-react';
import { IoIosVideocam } from 'react-icons/io';
import { EmojiPicker } from 'stream-chat-react/emojis';
import { init, SearchIndex } from 'emoji-mart';
import data from '@emoji-mart/data';
import { useEffect, useState } from 'react';
import Loading from '../Loading';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import useSocket from '../../hooks/useSocket';
import useAuth from '../../hooks/useAuth';

init({ data });

const ChannelHeader = ({ channelData, other, handleStartCall }) => {

  const isGroup = channelData?.isGroup;

  return (
    <div className='str-chat__header-livestream'>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className="str-chat__avatar str-chat__avatar--rounded str-chat__message-sender-avatar">
          <img
            alt="K"
            className="str-chat__avatar-image str-chat__avatar-image--loaded"
            data-testid="avatar-img"
            src={isGroup ? channelData?.image : other?.user?.image}
          />
        </div>
        <div className="str-chat__header-livestream-left str-chat__channel-header-end">
          <p className="str-chat__header-livestream-left--title str-chat__channel-header-title">{isGroup ? channelData?.name : other.user_id}</p>
        </div>
      </div>
      <button className="call-button" onClick={handleStartCall}>
        <IoIosVideocam size={30} color='#007bff' />
      </button>
    </div>
  );
};

const MessageContainer = () => {
  const { channel, client } = useChatContext();
  const { auth } = useAuth();
  const { socket } = useSocket();
  const members = channel?.state?.members;
  const memberIds = Object.keys(members || []);
  const [loading, setLoading] = useState(true);
  const [other, setOther] = useState(null);
  const axiosPrivate = useAxiosPrivate();

  const handleStartCall = async () => {
    const callId = await axiosPrivate.get(`/api/call?cid=${channel?.data?.cid}`);
    if (callId?.data?.cid) {
      socket.emit('calling', {
        image: auth.image,
        isGroup: channel?.data?.isGroup,
        name: channel?.data?.name,
        memberIds: JSON.stringify(memberIds),
        callId: callId?.data?.cid
      });
      window.open(`/call/${callId?.data?.cid}`, '_blank', 'width=1280,height=720');
    }
    else {
      alert('Error');
    }
  };

  useEffect(() => {
    if (members) {
      const otherMember = Object.values(members).find(member => member.user_id !== client.userID);
      setOther(otherMember);
      setLoading(false);
    }
  }, [members, client.userID]);

  return (
    <>
      <Channel EmojiPicker={EmojiPicker} emojiSearchIndex={SearchIndex} >
        {loading ?
          <div className='w-full'>
            <Loading />
          </div> :
          <>
            <Window>
              <ChannelHeader channelData={channel?.data} other={other} handleStartCall={handleStartCall} />
              <MessageList closeReactionSelectorOnClick
                disableDateSeparator onlySenderCanEdit showUnreadNotificationAlways={false} />
              <MessageInput focus audioRecordingEnabled />
            </Window>
            <Thread />
          </>
        }
      </Channel>
    </>
  );
};

export default MessageContainer;
