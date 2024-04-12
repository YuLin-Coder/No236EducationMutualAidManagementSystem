package com.example.teach.mapper;

import com.example.teach.bean.*;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author Monster
 */
@Repository
public interface UserMapper {
    /**
     * 查询用户信息
     * @param name
     * @return
     */
    List<userBankCard> selectPersonalInformation(@Param("name") String name);

    /**
     * 查询新用户信息 当前无银行卡
     * @param name
     * @return
     */
    List<userBankCard> selectUserInformation(@Param("name") String name);

    /**
     * 更新信息
     * @param user
     */
    void updateUserMessage(User user);

    /**
     * 判断添加银行卡前卡号是否重复
     * @param card
     * @return
     */
    Bank beforeInsertCardRepeat (@Param("card") String card);
    /**
     * 增加银行卡
     * @param bankUserID
     * @param bankName
     * @param bankCard
     */
    void addCardMessage(@Param("bankUserID") int bankUserID,@Param("bankName") String bankName,@Param("bankCard") String bankCard);
    /**
     * 修改密码
     * @param id
     * @param password
     */
    void updatePassword(@Param("id") int id,@Param("password") String password);

    /**
     * 根据ID删除银行卡
     * @param id
     */
    void deleteCard(@Param("id") int id);
    List<Opinion> selectOpinion();
    void deleteOpinion(int id);
    /**
     * 用户发表意见
     * @param sendName
     * @param phone
     * @param email
     * @param time
     * @param message
     * @param name
     */
    void sendMessage(@Param("sendName") String sendName,@Param("phone") String phone,@Param("email") String email,@Param("time") String time,@Param("message") String message,@Param("name") String name);

    /**
     * 根据卡号查询当前余额
     * @param bankCardNow
     * @return
     */
    int selectCardMoney(@Param("bankCardNow") String bankCardNow);

    /**
     * 充值更新银行卡余额
     * @param cardMoney
     * @param bankCardNow
     */
    void updateCardMoney(@Param("cardMoney") int cardMoney,@Param("bankCardNow") String bankCardNow);

    /**
     * 微信支付
     * @param name
     * @param vx
     */
    void vxPay(@Param("name") String name,@Param("vx") int vx);

    /**
     * 支付宝支付
     * @param name
     * @param zfb
     */
    void zfbPay(@Param("name") String name,@Param("zfb") int zfb);

    /**
     * 账户充值
     * @param name
     * @param account
     */
    void myAccountUpdate(@Param("name") String name,@Param("account") int account);

    /**
     * 查询当前参数为1的卡号
     * @param parameterBank
     * @param userID
     * @return
     */
    int selectBankParameter(@Param("parameterBank") int parameterBank,@Param("userID") int userID);

    /**
     * 根据之前ID修改参数
     * @param bankCardNow
     * @param parameter
     * @param userID
     */
    void updateBankCardNow(@Param("bankCardNow") String bankCardNow,@Param("parameter") int parameter,@Param("userID") int userID);

    /**
     * 根据之后ID修改参数
     * @param bankCardAfter
     * @param parameter
     * @param userID
     */
    void updateBankCardAfter(@Param("bankCardAfter") String bankCardAfter,@Param("parameter") int parameter,@Param("userID") int userID);

    /**
     * 支付购物车
     * @param account
     * @param userID
     */
    void payMoney(int account,int userID);

    /**
     * 购买完后删除此商品
     * @param cardID
     */
    void deleteCart(int cardID);

    List<User> selectAdminUser();

    void deleteUser(int id);

    void deleteNews(int id);

    List<Admin> selectAdmin();

    void deleteAdmin(int id);

    int selectSellMoney(String isSellPerson);

    void addSellMoney(String isSellPerson,int priceTotal);

    Cart selectCartById(int cartID);

    int selectAdminAccount(String isSellPerson);

    void addAdminAccount(String isSellPerson, int cartPrice);

    int selectSell(String name);
}
