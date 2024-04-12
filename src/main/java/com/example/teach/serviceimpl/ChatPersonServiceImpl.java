package com.example.teach.serviceimpl;

import com.example.teach.bean.Chat;
import com.example.teach.bean.User;
import com.example.teach.mapper.ChatPersonMapper;
import com.example.teach.service.ChatPersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Monster
 */
@Service
public class ChatPersonServiceImpl implements ChatPersonService {

    @Autowired
    ChatPersonMapper chatPersonMapper;

    @Override
    public User selectChatPerson(int id) {
        return chatPersonMapper.selectChatPerson(id);
    }

    @Override
    public User selectChatPerson02(String userName) {
        return chatPersonMapper.selectChatPerson02(userName);
    }

    @Override
    public void updateChatPerson(int id, String chatName) {
        chatPersonMapper.updateChatPerson(id, chatName);
    }

    @Override
    public User selectChatContent(String name) {
        return chatPersonMapper.selectChatContent(name);
    }

    @Override
    public void updateNowUser(String person, String name) {
        chatPersonMapper.updateNowUser(person, name);
    }

    @Override
    public List<Chat> chatList(String sendName, String receiveName) {
        return chatPersonMapper.chatList(sendName, receiveName);
    }

    @Override
    public void sendChat(Chat chat) {
        chatPersonMapper.sendChat(chat);
    }

    @Override
    public void updateUserPerson(String userName, String name) {
        chatPersonMapper.updateUserPerson(userName, name);
    }

    @Override
    public void updateOtherUser(int id, String person) {
        chatPersonMapper.updateOtherUser(id, person);
    }

}
