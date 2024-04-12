package com.example.teach.controller;

import com.example.teach.bean.Attention;
import com.example.teach.bean.Cart;
import com.example.teach.service.AttentionService;
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
public class AttentionController {


    @Autowired
    AttentionService attentionService;

    /**
     * 关注
     * @param attentionName
     * @param attentionWhoName
     */
    @RequestMapping("/payAttention")
    public String payAttention(String attentionName,String attentionWhoName){
        //查看当前用户是否已被关注
        Attention attention = beforePayAttention(attentionName, attentionWhoName);
        if (attention!=null){
            return "当前用户您已关注！";
        }
        attentionService.payAttention(attentionName,attentionWhoName);
        return "成功关注当前发表者！";
    }

    /**
     * 关注之间检查当前用户是否已被关注
     * @param attentionName
     * @param attentionWhoName
     * @return
     */
    public Attention beforePayAttention(String attentionName,String attentionWhoName){
        Attention attention = attentionService.beforePayAttention(attentionName, attentionWhoName);
        return attention;
    }

    /**
     * 查询当前用户关注数量
     * @return
     */
    @RequestMapping("/selectVBAttention")
    public int selectVBAttention(String attentionWhoName){
        int VBAttentionNum = attentionService.selectVBAttention(attentionWhoName);
        return VBAttentionNum;
    }

    /**
     * 查询当前粉丝量
     * @return
     */
    @RequestMapping("/selectWhoAttentionMe")
    public int selectWhoAttentionMe(String attentionName){
        int VBAWhoAttentionMeNum = attentionService.selectWhoAttentionMe(attentionName);
        return VBAWhoAttentionMeNum;
    }

    @RequestMapping("/selectMyArticle")
    public List<Cart> selectMyArticle(int MyArticle,int userID){
        return attentionService.selectMyArticle(MyArticle,userID);
    }

    @RequestMapping("/updateMyArticle")
    public void updateMyArticle(int cartID){
        attentionService.updateMyArticle(cartID);
    }

    @RequestMapping("/sureMyArticle")
    public void sureMyArticle(int MyArticle,String cartIDArr){
        String[] split = cartIDArr.split(",");
        for (String s : split) {
            attentionService.sureMyArticle(MyArticle,Integer.parseInt(s));
        }
    }
}
