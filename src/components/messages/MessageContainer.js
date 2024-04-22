import {
  Channel, ChannelHeader,
  MessageInput, MessageList, Thread, Window,
  useChatContext
} from 'stream-chat-react';
import { EmojiPicker } from 'stream-chat-react/emojis';
import { init, SearchIndex } from 'emoji-mart';
import data from '@emoji-mart/data';
import { useEffect, useState } from 'react';
import Loading from '../Loading';
init({ data });

const MessageContainer = () => {
  const { channel, client } = useChatContext();
  const members = channel?.state?.members;
  const [loading, setLoading] = useState(true);
  const [other, setOther] = useState('');

  useEffect(() => {
    if (members) {
      const otherMember = Object.keys(members).filter(member => member !== client.userID)[0];
      setOther(otherMember);
      setLoading(false);
    }
  }, [members, client.userID]);

  return (
    <Channel EmojiPicker={EmojiPicker} emojiSearchIndex={SearchIndex} >
      {
        loading ?
          <div className='w-full'>
            <Loading />
          </div> :
          <>
            <Window>
              <ChannelHeader title={other} />
              <MessageList />
              <MessageInput focus audioRecordingEnabled />
            </Window>
            <Thread />
          </>
      }
    </Channel>
  );
};

export default MessageContainer;