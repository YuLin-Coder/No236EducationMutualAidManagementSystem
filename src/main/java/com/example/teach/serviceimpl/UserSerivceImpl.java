package com.example.teach.serviceimpl;

import com.example.teach.bean.*;
import com.example.teach.mapper.UserMapper;
import com.example.teach.service.UserSerivce;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Monster
 */
@Service
public class UserSerivceImpl implements UserSerivce {

    @Autowired
    private UserMapper userMapper;


    @Override
    public List<userBankCard> selectPersonalInformation(String name) {
        return userMapper.selectPersonalInformation(name);
    }

    @Override
    public List<userBankCard> selectUserInformation(String name) {
        return userMapper.selectUserInformation(name);
    }

    @Override
    public void updateUserMessage(User user) {
        userMapper.updateUserMessage(user);
    }

    @Override
    public Bank beforeInsertCardRepeat(String card) {
        return userMapper.beforeInsertCardRepeat(card);
    }

    @Override
    public void addCardMessage(int id,String name, String card) {
        userMapper.addCardMessage(id,name,card);
    }

    @Override
    public void updatePassword(String newPassWord,int id) {
        userMapper.updatePassword(id,newPassWord);
    }

    @Override
    public void deleteCard(int id) {
        userMapper.deleteCard(id);
    }

    @Override
    public void sendMessage(String sendName, String phone, String email, String time, String message, String name) {
        userMapper.sendMessage(sendName,phone,email,time,message,name);
    }

    @Override
    public int selectCardMoney(String bankCardNow) {
        return userMapper.selectCardMoney(bankCardNow);
    }

    @Override
    public void updateCardMoney(int cardMoney, String bankCardNow) {
        userMapper.updateCardMoney(cardMoney,bankCardNow);
    }

    @Override
    public void vxPay(String name, int vx) {
        userMapper.vxPay(name, vx);
    }

    @Override
    public void zfbPay(String name, int zfb) {
        userMapper.zfbPay(name, zfb);
    }

    @Override
    public void myAccountUpdate(String name, int myAccount) {
        userMapper.myAccountUpdate(name, myAccount);
    }

    @Override
    public int selectBankParameter(int parameterBank,int userID) {
        return userMapper.selectBankParameter(parameterBank,userID);
    }

    @Override
    public void updateBankCardNow(String bankCardNow,int parameter,int userID) {
        userMapper.updateBankCardNow(bankCardNow,parameter,userID);
    }

    @Override
    public void updateBankCardAfter(String bankCardAfter,int parameter,int userID) {
        userMapper.updateBankCardAfter(bankCardAfter,parameter,userID);
    }

    @Override
    public void payMoney(int account, int userID) {
        userMapper.payMoney(account, userID);
    }

    @Override
    public void deleteCart(int cardID) {
        userMapper.deleteCart(cardID);
    }

    @Override
    public List<User> selectAdminUser() {
        return userMapper.selectAdminUser();
    }

    @Override
    public void deleteUser(int id) {
        userMapper.deleteUser(id);
    }

    @Override
    public void deleteNews(int id) {
        userMapper.deleteNews(id);
    }

    @Override
    public List<Opinion> selectOpinion() {
        return userMapper.selectOpinion();
    }

    @Override
    public void deleteOpinion(int id) {
        userMapper.deleteOpinion(id);
    }

    @Override
    public List<Admin> selectAdmin() {
        return userMapper.selectAdmin();
    }

    @Override
    public void deleteAdmin(int id) {
        userMapper.deleteAdmin(id);
    }

    @Override
    public int selectSellMoney(String isSellPerson) {
        return userMapper.selectSellMoney(isSellPerson);
    }

    @Override
    public void addSellMoney(String isSellPerson, int priceTotal) {
        userMapper.addSellMoney(isSellPerson, priceTotal);
    }

    @Override
    public Cart selectCartById(int cartID) {
        return userMapper.selectCartById(cartID);
    }

    @Override
    public int selectAdminAccount(String isSellPerson) {
        return userMapper.selectAdminAccount(isSellPerson);
    }

    @Override
    public void addAdminAccount(String isSellPerson, int cartPrice) {
        userMapper.addAdminAccount(isSellPerson, cartPrice);
    }

    @Override
    public int selectSell(String name) {
        return userMapper.selectSell(name);
    }


}
