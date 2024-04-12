package com.example.teach.service;

import com.example.teach.bean.Chat;
import com.example.teach.bean.User;

import java.util.List;

/**
 * @author Monster
 */
public interface ChatPersonService {

    User selectChatPerson(int id);

    User selectChatPerson02(String userName);

    void updateChatPerson(int id,String chatName);

    User selectChatContent(String name);

    void updateNowUser(String person,String name);

    List<Chat> chatList(String sendName, String receiveName);

    void sendChat(Chat chat);

    void updateUserPerson(String userName, String name);

    void updateOtherUser(int id,String person);
}
