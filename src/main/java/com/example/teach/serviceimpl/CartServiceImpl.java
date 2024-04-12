package com.example.teach.serviceimpl;

import com.example.teach.bean.Cart;
import com.example.teach.bean.Collect;
import com.example.teach.bean.Discuss;
import com.example.teach.bean.News;
import com.example.teach.mapper.CartMapper;
import com.example.teach.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartServiceImpl implements CartService {

    @Autowired
    CartMapper cartMapper;

    @Override
    public List<Cart> selectShop(Cart cart) {
        Double cartPrice = cart.getCartPrice();
        if (cartPrice == 1){
            cart.setPriceMin(50);
            cart.setPriceMax(200);
        }else if (cartPrice == 2){
            cart.setPriceMin(200);
            cart.setPriceMax(400);
        }else if (cartPrice == 3){
            cart.setPriceMin(400);
            cart.setPriceMax(1000);
        }else if (cartPrice == 4){
            cart.setPriceMin(1000);
            cart.setPriceMax(10000);
        }
        return cartMapper.selectShop(cart);
    }

    @Override
    public List<News> selectNews(News news) {
        return cartMapper.selectNews(news);
    }

    @Override
    public List<News> selectAdminNews() {
        return cartMapper.selectAdminNews();
    }

    @Override
    public void addToCart(int id,int param,int num,int userID) {
        cartMapper.addToCart(id,param,num,userID);
    }

    @Override
    public List<Cart> selectCart(int param,int userID) {
        return cartMapper.selectCart(param,userID);
    }

    @Override
    public void cartNumberChange(int cartNum, int cartID) {
        cartMapper.cartNumberChange(cartNum, cartID);
    }

    @Override
    public List<Integer> totalQuantity(int param,int userID) {
        return cartMapper.totalQuantity(param,userID);
    }

    @Override
    public void cartRemove(int cartParam,int cartID) {
        cartMapper.cartRemove(cartParam,cartID);
    }

    @Override
    public void addCart(int nowQty, String shoesImg, Double shoesPrice, String shoesName,int param,int userID) {
        cartMapper.addCart(nowQty, shoesImg, shoesPrice, shoesName,param,userID);
    }

    @Override
    public int selectShopNum() {
        return cartMapper.selectShopNum();
    }

    @Override
    public List<Collect> selectCollectShoes(int param,int userID) {
        return cartMapper.selectCollectShoes(param,userID);
    }
    @Override
    public void addToCollect(Collect collect) {
        cartMapper.addToCollect(collect);
    }

    @Override
    public void cancelCollect(int param,int collectID) {
        cartMapper.cancelCollect(param,collectID);
    }

    @Override
    public void payMoney(int userID, String account) {
        cartMapper.payMoney(userID, account);
    }

    @Override
    public void sureAdd(int cartID, int IsSell) {
        cartMapper.sureAdd(cartID, IsSell);
    }

    @Override
    public List<Cart> selectAdminShop() {
        return cartMapper.selectAdminShop();
    }

    @Override
    public void deleteShop(int cartID) {
        cartMapper.deleteShop(cartID);
    }

    @Override
    public List<Cart> selectMyThings(int userID) {
        return cartMapper.selectMyThings(userID);
    }

    @Override
    public Cart selectCartByID(int id) {
        return cartMapper.selectCartByID(id);
    }

    @Override
    public void updateCart(int id,int MyArticle,int userID,String sellName,String introduce,double price) {
        cartMapper.updateCart(id,MyArticle,userID,sellName,introduce,price);
    }

    @Override
    public void changeShopIsSell(int id) {
        cartMapper.changeShopIsSell(id);
    }

    @Override
    public List<Cart> selectMyIsSell(int userID, int isSell) {
        return cartMapper.selectMyIsSell(userID, isSell);
    }

    @Override
    public void cancelSJ(int id, int MyArticle) {
        cartMapper.cancelSJ(id,MyArticle);
    }

    @Override
    public News selectTanKuang(int id) {
        return cartMapper.selectTanKuang(id);
    }

    @Override
    public List<Discuss> clickNewsComment(int id) {
        return cartMapper.clickNewsComment(id);
    }

    @Override
    public void sendNewsComment(Discuss discuss) {
        cartMapper.sendNewsComment(discuss);
    }
}
