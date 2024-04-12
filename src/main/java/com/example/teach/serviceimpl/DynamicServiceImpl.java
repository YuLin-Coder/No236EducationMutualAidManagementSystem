package com.example.teach.serviceimpl;

import com.example.teach.bean.*;
import com.example.teach.mapper.DynamicMapper;
import com.example.teach.service.DynamicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Monster
 */
@Service
public class DynamicServiceImpl implements DynamicService {

    @Autowired
    DynamicMapper DynamicMapper;

    @Override
    public List<Dynamic> selectDynamic() {
        return DynamicMapper.selectDynamic();
    }

    @Override
    public List<Dynamic> selectDynamicMe(String setName) {
        return DynamicMapper.selectDynamicMe(setName);
    }


    @Override
    public void saveDynamicContent(Dynamic dynamic) {
        DynamicMapper.saveDynamicContent(dynamic);
    }

    @Override
    public void savePersonHead(String personHead, String name) {
        DynamicMapper.savePersonHead(personHead, name);
    }

    @Override
    public int selectVBNum(String name) {
        return DynamicMapper.selectVBNum(name);
    }

    @Override
    public void deleteDynamic(int ID) {
        DynamicMapper.deleteDynamic(ID);
    }

    @Override
    public void sendDynamicContent(Dynamic dynamic) {
        DynamicMapper.sendDynamicContent(dynamic);
    }

    @Override
    public void updateDynamicHead(String personImg,String fileName) {
        DynamicMapper.updateDynamicHead(personImg,fileName);
    }

    @Override
    public void clickPraise(int praise, int id) {
        DynamicMapper.clickPraise(praise, id);
    }

    @Override
    public void sendComment(Comment comment) {
        DynamicMapper.sendComment(comment);
    }

    @Override
    public List<Comment> clickComment(String commentName, String commentPath, String commentContent) {
        return DynamicMapper.clickComment(commentName, commentPath, commentContent);
    }

    @Override
    public void zanJIANJIAN(int id, int zan) {
        DynamicMapper.zanJIANJIAN(id, zan);
    }

    @Override
    public void saveSaveContent(Cart cart) {
        DynamicMapper.saveSaveContent(cart);
    }

    @Override
    public void saveContent(Content content) {
        DynamicMapper.saveContent(content);
    }

    @Override
    public List<Content> selectContent() {
        return DynamicMapper.selectContent();
    }

    @Override
    public List<Content> selectContent2(int id) {
        return DynamicMapper.selectContent2(id);
    }

    @Override
    public void deleteContent(int id) {
        DynamicMapper.deleteContent(id);
    }

    @Override
    public void updateContent(Content content) {
        DynamicMapper.updateContent(content);
    }

    @Override
    public void saveNews(News news) {
        DynamicMapper.saveNews(news);
    }

    @Override
    public List<Comment> selectDiscuss() {
        return DynamicMapper.selectDiscuss();
    }

    @Override
    public void deleteDynamicDis(int id) {
        DynamicMapper.deleteDynamicDis(id);
    }

    @Override
    public List<Discuss> selectDiscussNews() {
        return DynamicMapper.selectDiscussNews();
    }

    @Override
    public void deleteNewsDis(int id) {
        DynamicMapper.deleteNewsDis(id);
    }
}
