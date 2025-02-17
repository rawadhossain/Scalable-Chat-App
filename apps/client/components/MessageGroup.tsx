import { Message } from '@/app/page';

type MessageProps = {
    messages: Message[];
    userId: string;
};

const MessageGroup = ({ messages, userId }: MessageProps) => {
    return (
        <>
            {messages.map((msg, index) => {
                const isFirstInGroup =
                    index === 0 || messages[index - 1]?.senderId !== msg.senderId;

                return (
                    <div
                        key={msg.id}
                        className={`flex flex-col ${msg.senderId === userId ? 'items-end' : 'items-start'}`}
                    >
                        {isFirstInGroup && (
                            <div className="text-xs text-muted-foreground mb-0.5">{msg.sender}</div>
                        )}
                        <div
                            className={`inline-block rounded-lg px-3 py-1.5 break-words ${
                                msg.senderId === userId
                                    ? 'bg-primary text-primary-foreground bg-gradient-to-r from-blue-400 to-purple-600 text-white shadow-lg shadow-blue-500/20'
                                    : 'bg-muted'
                            } ${!isFirstInGroup ? 'mt-0.5' : 'mt-1.5'}`}
                        >
                            {msg.content}
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default MessageGroup;
