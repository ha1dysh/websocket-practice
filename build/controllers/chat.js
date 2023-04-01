import Message from '../models/chat.js';
export const getMessages = async (req, res) => {
    const result = await Message.find().sort({ _id: 1 }).limit(50);
    res.json(result);
};
//# sourceMappingURL=chat.js.map