package com.example.teach.controller;

import com.alibaba.fastjson.JSONObject;
import com.example.teach.bean.Chat;
import com.example.teach.bean.User;
import com.example.teach.service.ChatPersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.thymeleaf.util.StringUtils;

import java.util.ArrayList;
import java.util.List;


/**
 * @author Monster
 */
@Controller
@ResponseBody
public class ChatPersonController {

    @Autowired
    ChatPersonService personService;

    /**
     * 添加好友前查询好友
     * @return
     */
    @RequestMapping("/selectChatPerson")
    public User selectChatPerson(int id){
        User user = personService.selectChatPerson(id);
        return user;
    }

    /**
     * 添加好友前查询好友02
     * @return
     */
    @RequestMapping("/selectChatPerson02")
    public void selectChatPerson02(String userName,String name){
        User user = personService.selectChatPerson02(userName);
        String person = user.getPerson();
        if (StringUtils.isEmpty(person)){
            person = name;
        }else {
            person = person+","+name;
        }
        personService.updateUserPerson(userName,person);
    }

    /**
     * 添加好友
     */
    @RequestMapping("/addChatPerson")
    public void addChatPerson(int id,String chatName){
        personService.updateChatPerson(id,chatName);
    }

    /**
     * 查询好友基本信息
     * @return
     */
    @RequestMapping("/selectChatContent")
    public User selectChatContent(String name){
        User user = personService.selectChatContent(name);
        return user;
    }

    /**
     * 聊天记录
     * @return
     */
    @RequestMapping("/chatList")
    public List<Chat> chatList(String sendName, String receiveName) {
        return personService.chatList(sendName,receiveName);
    }

    /**
     * 发送
     * @return
     */
    @RequestMapping("/sendChat")
    public void sendChat(String info) {
        Chat chat = JSONObject.parseObject(info, Chat.class);
        personService.sendChat(chat);
    }

    /**
     * 删除当前好友 并把我从当前好友中删除
     * @param person 当前删除好友
     * @param id 当前用户ID
     * @param name 当前用户名称
     */
    @RequestMapping("/deleteUserChat")
    public void deleteUserChat(String person,int id,String name){
        //我删除好友
        User user = personService.selectChatPerson(id);
        String personCon = user.getPerson();
        String s = listToString(personCon,person);
        personService.updateOtherUser(id,s);
        //好友删除我
        User user1 = personService.selectChatContent(person);
        String person1 = user1.getPerson();
        String s1 = listToString(person1, name);
        personService.updateNowUser(person,s1);
    }

    /**
     * @param personCon 以前的
     * @param person 需要删掉的
     * @return
     */
    public String listToString(String personCon,String person){
        ArrayList<Object> list = new ArrayList<>();
        String[] split = personCon.split(",");
        for (String s : split) {
            if (!s.equals(person)){
                list.add(s);
            }
        }
        StringBuilder builder = new StringBuilder();
        for (int i = 0; i < list.size(); i++) {
            if (i != list.size()-1){
                builder.append(list.get(i)+",");
            }else {
                builder.append(list.get(i));
            }
        }
        return builder.toString();
    }
}
