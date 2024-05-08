import {
  Channel, MessageInput, MessageList, Thread, Window, useChatContext,
} from 'stream-chat-react';
import { IoIosVideocam } from 'react-icons/io';
import { EmojiPicker } from 'stream-chat-react/emojis';
import { init, SearchIndex } from 'emoji-mart';
import data from '@emoji-mart/data';
import { useEffect, useMemo, useState } from 'react';

import Loading from '../Loading';

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
  const members = channel?.state?.members;
  const [loading, setLoading] = useState(true);
  const [other, setOther] = useState(null);

  const mixedUserIds = useMemo(() => {
    const id1 = client.userID;
    const id2 = other?.user_id;
    return id1 < id2 ? (id1 + id2) : (id2 + id1);
  }, [client, other]);

  const handleStartCall = () => {
    // LATER: fetch the callId from server using mixedUserIds as identifier
    window.open(`/call/${mixedUserIds}`, '_blank', 'width=1280,height=720');
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
              <MessageList closeReactionSelectorOnClick disableQuotedMessages
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
