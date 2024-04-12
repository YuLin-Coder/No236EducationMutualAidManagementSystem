package com.example.teach.mapper;

import com.example.teach.bean.Attention;
import com.example.teach.bean.Cart;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author Monster
 */
@Repository
public interface AttentionMapper {

    /**
     * 关注
     * @param attentionName
     * @param attentionWhoName
     */
    void payAttention(@Param("attentionName") String attentionName,@Param("attentionWhoName") String attentionWhoName);

    /**
     * 关注之间检查当前用户是否已被关注
     * @param attentionName
     * @param attentionWhoName
     * @return
     */
    Attention beforePayAttention(@Param("attentionName")String attentionName, @Param("attentionWhoName") String attentionWhoName);

    /**
     * 查询当前用户关注数量
     * @param attentionWhoName
     * @return
     */
    int selectVBAttention(@Param("attentionWhoName")String attentionWhoName);

    /**
     * 查询当前粉丝量
     * @param attentionName
     * @return
     */
    int selectWhoAttentionMe(@Param("attentionName")String attentionName);

    List<Cart> selectMyArticle(int MyArticle,int userID);

    void updateMyArticle(int cartID);

    void sureMyArticle(int MyArticle,int cartID);
}
