import {
  Channel, MessageInput, MessageList, Thread, Window, useChatContext,
} from 'stream-chat-react';
import { IoIosVideocam, IoIosCall } from 'react-icons/io';
import { EmojiPicker } from 'stream-chat-react/emojis';
import { init, SearchIndex } from 'emoji-mart';
import data from '@emoji-mart/data';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import useSocket from '../../hooks/useSocket';
import useAuth from '../../hooks/useAuth';

init({ data });

const ChannelHeader = ({ channelData, members, memberIds, handleStartCall }) => {

  const { client } = useChatContext();

  const isGroup = channelData?.isGroup;

  const finalMemberIds = memberIds?.length ? memberIds : channelData?.members;

  const index = finalMemberIds.findIndex(id => id !== client.userID);

  const otherUser = members[Object.keys(members)[index]];

  return (
    <div className='str-chat__header-livestream'>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className="str-chat__avatar str-chat__avatar--rounded str-chat__message-sender-avatar">
          <img
            alt="K"
            className="str-chat__avatar-image str-chat__avatar-image--loaded"
            data-testid="avatar-img"
            src={isGroup ? channelData?.image :
              (otherUser?.user?.image || `https://getstream.io/random_svg/?id=oliver&name=${finalMemberIds[index]}`)}
          />
        </div>
        <div className="str-chat__header-livestream-left str-chat__channel-header-end">
          <p className="str-chat__header-livestream-left--title str-chat__channel-header-title">{isGroup ? channelData?.name : finalMemberIds[index]}</p>
        </div>
      </div>
      <div className='flex flex-row space-x-3'>
        <button className="call-button" onClick={() => handleStartCall('audio')}>
          <IoIosCall size={30} color='#007bff' />
        </button>
        <button className="call-button" onClick={() => handleStartCall('video')}>
          <IoIosVideocam size={30} color='#007bff' />
        </button>
      </div>
    </div>
  );
};

const MessageContainer = () => {
  const { channel } = useChatContext();
  const { auth } = useAuth();
  const { socket } = useSocket();
  const members = channel?.state?.members;
  const memberIds = Object.keys(members || []);
  const axiosPrivate = useAxiosPrivate();

  const handleStartCall = async (callType) => {
    const callId = await axiosPrivate.get(`/api/call?cid=${channel?.data?.cid}`);
    if (callId?.data?.cid) {
      socket.emit('calling', {
        image: auth.image,
        callType: callType,
        isGroup: channel?.data?.isGroup,
        name: channel?.data?.name,
        memberIds: JSON.stringify(memberIds),
        callId: callId?.data?.cid
      });
      window.open(`/call/${callType}/${callId?.data?.cid}`, '_blank', 'width=1280,height=720');
    }
    else {
      alert('Error');
    }
  };

  return (
    <Channel EmojiPicker={EmojiPicker} emojiSearchIndex={SearchIndex} >
      <Window>
        <ChannelHeader channelData={channel?.data} members={members} memberIds={memberIds} handleStartCall={handleStartCall} />
        <MessageList closeReactionSelectorOnClick
          disableDateSeparator onlySenderCanEdit showUnreadNotificationAlways={false} />
        <MessageInput focus audioRecordingEnabled />
      </Window>
      <Thread />
    </Channel>
  );
};

export default MessageContainer;
