package com.example.teach.service;

import com.example.teach.bean.*;

import java.util.List;

/**
 * @author Monster
 */
public interface DynamicService{
    /**
     * 查询动态内容
     * @return
     */
    List<Dynamic> selectDynamic();

    /**
     * 查询我的动态内容
     * @return
     */
    List<Dynamic> selectDynamicMe(String setName);

    /**
     * 上传内容入库
     * @param dynamic
     */
    void saveDynamicContent(Dynamic dynamic);

    /**
     * 保存头像
     * @param personHead
     * @param name
     */
    void savePersonHead(String personHead,String name);

    /**
     * 查询当前个人发表微博数量
     * @param name
     * @return
     */
    int selectVBNum(String name);

    /**
     * 删除当前个人已发表内容
     * @param ID
     */
    void deleteDynamic(int ID);

    /**
     * 发送朋友圈(无图片)
     * @param dynamic
     */
    void sendDynamicContent(Dynamic dynamic);

    /**
     * 将动态社交属于自己所有的发表内容头像修改
     * @param personImg
     * @param fileName
     */
    void updateDynamicHead(String personImg,String fileName);

    /**
     * 点赞
     * @param praise
     * @param id
     */
    void clickPraise(int praise,int id);

    /**
     * 发表评论
     * @param comment
     */
    void sendComment(Comment comment);

    /**
     * 点击查询评论
     * @param commentName
     * @param commentPath
     * @param commentContent
     * @return
     */
    List<Comment> clickComment(String commentName,String commentPath,String commentContent);

    void zanJIANJIAN(int id,int zan);

    void saveSaveContent(Cart cart);

    void saveContent(Content content);

    List<Content> selectContent();
    List<Content> selectContent2(int id);

    void deleteContent(int id);

    void updateContent(Content content);

    void saveNews(News news);

    List<Comment> selectDiscuss();

    void deleteDynamicDis(int id);

    List<Discuss> selectDiscussNews();

    void deleteNewsDis(int id);
}
