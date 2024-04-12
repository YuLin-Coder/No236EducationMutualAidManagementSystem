package com.example.teach.service;

import com.example.teach.bean.Attention;
import com.example.teach.bean.Cart;

import java.util.List;

/**
 * @author Monster
 */
public interface AttentionService {

    /**
     * 关注
     * @param attentionName
     * @param attentionWhoName
     */
    void payAttention(String attentionName,String attentionWhoName);

    /**
     * 关注之间检查当前用户是否已被关注
     * @param attentionName
     * @param attentionWhoName
     * @return
     */
    Attention beforePayAttention(String attentionName, String attentionWhoName);

    /**
     * 查询当前用户关注数量
     * @param attentionWhoName
     * @return
     */
    int selectVBAttention(String attentionWhoName);

    /**
     * 查询当前粉丝量
     * @param attentionName
     * @return
     */
    int selectWhoAttentionMe(String attentionName);

    List<Cart> selectMyArticle(int MyArticle,int userID);

    void updateMyArticle(int cartID);

    void sureMyArticle(int MyArticle,int cartID);
}
