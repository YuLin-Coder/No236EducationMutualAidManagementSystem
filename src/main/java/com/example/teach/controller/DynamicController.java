package com.example.teach.controller;

import com.alibaba.fastjson.JSONObject;
import com.example.teach.bean.Comment;
import com.example.teach.bean.Content;
import com.example.teach.bean.Discuss;
import com.example.teach.bean.Dynamic;
import com.example.teach.service.DynamicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * @author Monster
 */
@Controller
@ResponseBody
public class DynamicController {

    @Autowired
    DynamicService DynamicService;

    /**
     * 查询动态内容
     * @return
     */
    @RequestMapping("/selectDynamic")
    public List<Dynamic> selectDynamic(){
        List<Dynamic> dynamic = DynamicService.selectDynamic();
        return dynamic;
    }

    /**
     * 查询我的动态内容
     * @return
     */
    @RequestMapping("/selectDynamicMe")
    public List<Dynamic> selectDynamicMe(String setName){
        List<Dynamic> dynamic = DynamicService.selectDynamicMe(setName);
        return dynamic;
    }

    /**
     * 查询当前发表微博数量(自己)
     * @param name
     * @return
     */
    @RequestMapping("/selectVBNum")
    public int selectVBNum(String name){
        int num = DynamicService.selectVBNum(name);
        return num;
    }

    /**
     * 删除当前个人已发表内容
     * @param ID
     */
    @RequestMapping("/deleteDynamic")
    public void deleteDynamic(int ID){
        DynamicService.deleteDynamic(ID);
    }

    /**
     * 发送朋友圈(无图片)
     * @param info
     */
    @RequestMapping("/sendDynamicContent")
    public void sendDynamicContent(String info){
        Dynamic dynamic = new Dynamic();
        dynamic = JSONObject.parseObject(info, dynamic.getClass());
        DynamicService.sendDynamicContent(dynamic);
    }

    /**
     * 点赞
     */
    @RequestMapping("/clickPraise")
    public void clickPraise(int praise,int id){
        DynamicService.clickPraise(praise,id);
    }

    /**
     * 发送评论
     */
    @RequestMapping("/sendComment")
    public void sendComment(String info){
        Comment comment = new Comment();
        comment = JSONObject.parseObject(info, comment.getClass());
        DynamicService.sendComment(comment);
    }

    /**
     * 点击查询评论
     * @return
     */
    @RequestMapping("/clickComment")
    public List<Comment> clickComment(String commentName,String commentPath,String commentContent){
        List<Comment> comments = DynamicService.clickComment(commentName, commentPath, commentContent);
        return comments;
    }

    /**
     * 取消点赞
     */
    @RequestMapping("/clickCanCel")
    public void clickCanCel(int id,int zan){
        zan -- ;
        DynamicService.clickPraise(zan,id);
    }

    @RequestMapping("/selectContent2")
    public List<Content> selectContent2(int id){
        return DynamicService.selectContent2(id);
    }
    @RequestMapping("/selectContent")
    public List<Content> selectContent(){
        return DynamicService.selectContent();
    }

    @RequestMapping("/deleteContent")
    public void deleteContent(int id){
        DynamicService.deleteContent(id);
    }

    @RequestMapping("/selectDiscuss")
    public List<Comment> selectDiscuss(){
        List<Comment> list = DynamicService.selectDiscuss();
        return list;
    }

    @RequestMapping("/deleteDynamicDis")
    public void deleteDynamicDis(int id){
        DynamicService.deleteDynamicDis(id);
    }

    @RequestMapping("/selectDiscussNews")
    public List<Discuss> selectDiscussNews(){
        List<Discuss> list = DynamicService.selectDiscussNews();
        return list;
    }

    @RequestMapping("/deleteNewsDis")
    public void deleteNewsDis(int id){
        DynamicService.deleteNewsDis(id);
    }

}
