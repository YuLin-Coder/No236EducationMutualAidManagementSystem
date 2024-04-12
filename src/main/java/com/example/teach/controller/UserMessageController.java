package com.example.teach.controller;

import com.alibaba.fastjson.JSONObject;
import com.example.teach.bean.*;
import com.example.teach.service.UserSerivce;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import java.util.List;

/**
 * @author Monster
 */
@ResponseBody
@Controller
public class UserMessageController {

    @Autowired
    private UserSerivce userSerivce;

    /**
     * 查询个人信息
     * @param name
     * @return
     */
    @RequestMapping("/selectPersonalInformation")
    public List<userBankCard> selectPersonalInformation(String name){
        List<userBankCard> userBankCard = null;
        userBankCard = userSerivce.selectPersonalInformation(name);
        if (userBankCard.size() == 0){
            userBankCard = userSerivce.selectUserInformation(name);
            return userBankCard;
        }
        return userBankCard;
    }

    /**
     * 更新信息
     * @param info
     * @return
     */
    @RequestMapping("/updateUserMessage")
    public String updateUserMessage(String info){
        User user = new User();
        user = JSONObject.parseObject(info, user.getClass());
        userSerivce.updateUserMessage(user);
        return "信息修改成功！";
    }

    /**
     * 判断添加银行卡前卡号是否重复
     * @param card
     * @return
     */
    @RequestMapping("/beforeInsertCardRepeat")
    public String beforeInsertCardRepeat (String card){
        Bank bank = userSerivce.beforeInsertCardRepeat(card);
        if (bank != null){
            return "y";
        }
        return "n";
    }

    /**
     * 添加银行卡
     * @param name
     * @param card
     * @return
     */
    @RequestMapping("/addCardMessage")
    public String addCardMessage (int id,String name,String card){
        userSerivce.addCardMessage(id,name,card);
        return "添加成功！";
    }

    /**
     * 修改密码
     * @param id
     * @param newPassWord
     * @return
     */
    @RequestMapping("/updatePassword")
    public String updatePassword(int id,String newPassWord){
        userSerivce.updatePassword(newPassWord,id);
        return "密码修改成功！";
    }

    /**
     * 删除银行卡
     * @param id
     * @return
     */
    @RequestMapping("/deleteCard")
    public String deleteCard(int id){
        userSerivce.deleteCard(id);
        return "删除成功！";
    }

    /**
     * 用户发表意见
     * @return
     */
    @RequestMapping("/sendMessage")
    public String sendMessage(String sendName,String phone,String email,String time,String message,String name){
        userSerivce.sendMessage(sendName,phone,email,time,message,name);
        return "意见发表成功！";
    }

    /**
     * 账户充值(通过银行卡)
     * @param bankCardNow
     * @param saveMoneyQuantity
     * @return
     */
    @RequestMapping("/selectCardMoney")
    public String selectCardMoney(String name,String bankCardNow,int saveMoneyQuantity,int myAccount){
        int cardMoney = userSerivce.selectCardMoney(bankCardNow);
        if (cardMoney < saveMoneyQuantity){
            return "当前银行卡余额不足！";
        }else {
            cardMoney -= saveMoneyQuantity;
            userSerivce.updateCardMoney(cardMoney,bankCardNow);
            myAccount += saveMoneyQuantity;
            userSerivce.myAccountUpdate(name,myAccount);
            return "充值成功！";
        }
    }

    /**
     * 账户提现
     * @param takeMoneyNum
     * @param bankCardNow
     * @return
     */
    @RequestMapping("/takeMoney")
    public String takeMoney(int takeMoneyNum,String bankCardNow,int myAccount,String name){
        int cardMoney = userSerivce.selectCardMoney(bankCardNow);
        cardMoney += takeMoneyNum;
        userSerivce.updateCardMoney(cardMoney,bankCardNow);
        myAccount -= takeMoneyNum;
        userSerivce.myAccountUpdate(name,myAccount);
        return "yeah";
    }

    /**
     * vx支付
     * @param name
     * @param vx
     * @return
     */
    @RequestMapping("/vxPay")
    public String vxPay(String name,int vx,int saveMoneyQuantity,int myAccount){
        if (vx < saveMoneyQuantity){
            return "微信余额不足或充值失败！";
        }else if (vx >= saveMoneyQuantity){
            vx -= saveMoneyQuantity;
            userSerivce.vxPay(name, vx);
            myAccount += saveMoneyQuantity;
            userSerivce.myAccountUpdate(name,myAccount);
            return "微信充值成功！";
        }
        return "系统繁忙！";
    }

    /**
     * zfb支付
     * @param name
     * @param zfb
     * @return
     */
    @RequestMapping("/zfbPay")
    public String zfbPay(String name,int zfb,int saveMoneyQuantity,int myAccount){
        if (zfb < saveMoneyQuantity){
            return "支付宝余额不足或充值失败！";
        }else if (zfb >= saveMoneyQuantity){
            zfb -= saveMoneyQuantity;
            userSerivce.zfbPay(name, zfb);
            myAccount += saveMoneyQuantity;
            userSerivce.myAccountUpdate(name,myAccount);
            return "支付宝充值成功！";
        }
       return "系统繁忙！";
    }

    /**
     * 查询参数为1的卡号
     * @return
     */
    @RequestMapping("/selectBankParameter")
    public int selectBankParameter(int parameterBank,int userID){
        int bankCard = userSerivce.selectBankParameter(parameterBank,userID);
        if (bankCard == 0){
            return 0;
        }
        return bankCard;
    }

    /**
     * 根据之前 之后的ID 进行修改参数
     * @param bankCardNow
     * @param bankCardAfter
     * @return
     */
    @RequestMapping("/updateBankParameter")
    public String updateBankParameter(String bankCardNow,String bankCardAfter,int userID){
        int parameter0 = 0;
        int parameter1 = 1;
        userSerivce.updateBankCardNow(bankCardNow,parameter0,userID);
        userSerivce.updateBankCardAfter(bankCardAfter,parameter1,userID);
        return "支付方式修改成功！";
    }

    /**
     * 支付购物车
     */
    @RequestMapping("/payMoney")
    public String payMoney(int account,int userID,int money,int [] cartIDArr){
        if(money > account){
            return "n";
        }else {
            account -= money;
            userSerivce.payMoney(account,userID);
            for (int i = 0; i < cartIDArr.length; i++) {
                //购买完后删除此商品
                userSerivce.deleteCart(cartIDArr[i]);
                //根据当前CartID 拿到卖家名称、当前商品价格
                Cart cart = userSerivce.selectCartById(cartIDArr[i]);
                int cartPrice = (int)(cart.getCartPrice() * 1);
                String isSellPerson = cart.getSellName();
                //资金去想分三种 1.普通用户 2.管理员 3.超级管理员
                //区分：普通用户有sellID 管理员无
                if (cart.getSellID() == 0){
                    //当前为管理员
                    int adminAcc = userSerivce.selectAdminAccount(isSellPerson);
                    cartPrice = adminAcc + cartPrice;
                    userSerivce.addAdminAccount(isSellPerson,cartPrice);
                }else {
                    //拿到当前卖家原有资金
                    int userAcc = userSerivce.selectSellMoney(isSellPerson);
                    cartPrice = userAcc + cartPrice;
                    //将资金增加 并更新
                    userSerivce.addSellMoney(isSellPerson,cartPrice);
                }
            }
            return "y";
        }
    }

    @RequestMapping("/selectSell")
    public int selectSell(String name){
        return userSerivce.selectSell(name);
    }

    @RequestMapping("/selectAdminUser")
    public List<User> selectAdminUser(){
        List<User> users = userSerivce.selectAdminUser();
        return users;
    }
    @RequestMapping("/deleteUser")
    public void deleteUser(int id){
        userSerivce.deleteUser(id);
    }
    @RequestMapping("/deleteNews")
    public void deleteNews(int id){
        userSerivce.deleteNews(id);
    }

    @RequestMapping("/selectOpinion")
    public List<Opinion> selectOpinion(){
        List<Opinion> opinions = userSerivce.selectOpinion();
        return opinions;
    }
    @RequestMapping("/deleteOpinion")
    public void deleteOpinion(int id){
        userSerivce.deleteOpinion(id);
    }

    @RequestMapping("/selectAdmin")
    public List<Admin> selectAdmin(){
        List<Admin> admin = userSerivce.selectAdmin();
        return admin;
    }
    @RequestMapping("/deleteAdmin")
    public void deleteAdmin(int id){
        userSerivce.deleteAdmin(id);
    }
}
