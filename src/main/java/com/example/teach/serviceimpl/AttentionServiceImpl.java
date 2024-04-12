package com.example.teach.serviceimpl;

import com.example.teach.bean.Attention;
import com.example.teach.bean.Cart;
import com.example.teach.mapper.AttentionMapper;
import com.example.teach.service.AttentionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Monster
 */
@Service
public class AttentionServiceImpl implements AttentionService {

    @Autowired
    AttentionMapper attentionMapper;


    @Override
    public void payAttention(String attentionName, String attentionWhoName) {
        attentionMapper.payAttention(attentionName, attentionWhoName);
    }

    @Override
    public Attention beforePayAttention(String attentionName, String attentionWhoName) {
        return attentionMapper.beforePayAttention(attentionName, attentionWhoName);
    }

    @Override
    public int selectVBAttention(String attentionWhoName) {
        return attentionMapper.selectVBAttention(attentionWhoName);
    }

    @Override
    public int selectWhoAttentionMe(String attentionName) {
        return attentionMapper.selectWhoAttentionMe(attentionName);
    }

    @Override
    public List<Cart> selectMyArticle(int MyArticle,int userID) {
        return attentionMapper.selectMyArticle(MyArticle,userID);
    }

    @Override
    public void updateMyArticle(int cartID) {
        attentionMapper.updateMyArticle(cartID);
    }

    @Override
    public void sureMyArticle(int MyArticle, int cartID) {
        attentionMapper.sureMyArticle(MyArticle, cartID);
    }
}
