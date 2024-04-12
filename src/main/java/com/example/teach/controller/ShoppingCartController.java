package com.example.teach.controller;

import com.alibaba.fastjson.JSONObject;
import com.example.teach.bean.Cart;
import com.example.teach.bean.Collect;
import com.example.teach.bean.Discuss;
import com.example.teach.bean.News;
import com.example.teach.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

/**
 * @author Monster
 */
@Controller
@ResponseBody
public class ShoppingCartController {

    @Autowired
    CartService cartService;

    /**
     * 查询商品列表
     * @return
     */
    @RequestMapping(value = "/selectShop",produces = "application/json;charset=UTF-8")
    public List<Cart> selectShop(String info){
        Cart cart = new Cart();
        cart = JSONObject.parseObject(info, cart.getClass());
        List<Cart> list = cartService.selectShop(cart);
        return list;
    }

    /**
     * 查询商品列表
     * @return
     */
    @RequestMapping("/selectNews")
    public List<News> selectNews(String info){
        News news = new News();
        news = JSONObject.parseObject(info, news.getClass());
        List<News> list = cartService.selectNews(news);
        return list;
    }

    /**
     * 新闻详情
     * @return
     */
    @RequestMapping("/selectTanKuang")
    public News selectTanKuang(int id){
        News news = cartService.selectTanKuang(id);
        return news;
    }
    /**
     * 查询商品列表
     * @return
     */
    @RequestMapping("/selectAdminNews")
    public List<News> selectAdminNews(){
        List<News> list = cartService.selectAdminNews();
        return list;
    }

    /**
     * 查询当前新闻评论内容
     * @return
     */
    @RequestMapping("/clickNewsComment")
    public List<Discuss> clickNewsComment(int id){
        List<Discuss> discuss =cartService.clickNewsComment(id);
        return discuss;
    }

    /**
     * 发表评论
     */
    @RequestMapping("/sendNewsComment")
    public void sendNewsComment(String info){
        Discuss discuss = new Discuss();
        discuss = JSONObject.parseObject(info, discuss.getClass());
        cartService.sendNewsComment(discuss);
    }
    /**
     * 加入购物车(通过修改参数)
     * @param id
     * @return
     */
    @RequestMapping("/addToCart")
    public String addToCart(int id,int param,int num,int userID){
        cartService.addToCart(id,param,num,userID);
        return "成功加入购物车！";
    }

    /**
     * 查询购物车(参数为1)
     * @param param
     * @return
     */
    @RequestMapping("/selectCart")
    public List<Cart> selectCart(int param,int userID){
        List<Cart> list = cartService.selectCart(param,userID);
        return list;
    }

    /**
     * 对商品数量进行入库更新
     * @return
     */
    @RequestMapping("/cartNumberChange")
    public String cartNumberChange(int cartNum,int cartID){
        cartService.cartNumberChange(cartNum, cartID);
        return "yeah";
    }

    /**
     * 查询购物车中数量总和
     * @param param
     * @return
     */
    @RequestMapping("/totalQuantity")
    public List<Integer> totalQuantity(int param,int userID){
        List<Integer> quantity = cartService.totalQuantity(param,userID);
        return quantity;
    }

    /**
     * 表面删除购物车商品(实则改参数)
     * @param cartParam
     */
    @RequestMapping("/cartRemove")
    public String cartRemove(int cartParam,int cartID){
        cartService.cartRemove(cartParam,cartID);
        return "yeah";
    }

    /**
     * 加入购物车
     * @param nowQty
     * @param shoesImg
     * @param shoesPrice
     * @param shoesName
     * @param param
     * @return
     */
    @RequestMapping("/addCart")
    public String addCart(int nowQty,String shoesImg,Double shoesPrice,String shoesName,int param,int userID){
        cartService.addCart(nowQty, shoesImg, shoesPrice, shoesName, param,userID);
        return "加入购物车成功！";
    }

    /**
     * 查询商品总页数
     * @return
     */
    @RequestMapping("/selectShopNum")
    public int selectShopNum(int showPage) {
        int shopNum = cartService.selectShopNum();
        int shopTotalPage = shopNum/showPage ==0?shopNum/showPage:shopNum/showPage+1;
        return shopTotalPage;
    }

    /**
     * 查询收藏内容
     * @return
     */
    @RequestMapping("/selectCollectShoes")
    public List<Collect> selectCollectShoes(int param,int userID){
        List<Collect> collect = cartService.selectCollectShoes(param,userID);
        return collect;
    }
    /**
     * 加入收藏
     * @param info
     * @return
     */
    @RequestMapping("/addToCollect")
    public String addToCollect(String info){
        Collect collect = new Collect();
        collect = JSONObject.parseObject(info, collect.getClass());
        cartService.addToCollect(collect);
        return "加入收藏成功！";
    }

    /**
     * 取消收藏
     * @param param
     * @return
     */
    @RequestMapping("/cancelCollect")
    public String cancelCollect(int param,int collectID){
        cartService.cancelCollect(param,collectID);
        return "yeah";
    }

    @RequestMapping("/selectAdminShop")
    public List<Cart> selectAdminShop(){
        List<Cart> carts = cartService.selectAdminShop();
        return carts;
    }

    @RequestMapping("/sureAdd")
    public void sureAdd(int cartID,int IsSell){
        cartService.sureAdd(cartID,IsSell);
    }

    @RequestMapping("/deleteShop")
    public void deleteShop(int cartID){
        cartService.deleteShop(cartID);
    }

    @RequestMapping("/selectMyThings")
    public List<Cart> selectMyThings(int userID){
        return cartService.selectMyThings(userID);
    }
    @Autowired
    com.example.teach.service.DynamicService DynamicService;

    @RequestMapping("/sellMyGame")
    public HashMap<Object, Object> sellMyGame(int arrId [], String arrIntroduce [], double arrPrice [],int userID,String sellName){
        HashMap<Object, Object> map = new HashMap<>();
        try{
            if (arrIntroduce == null || arrIntroduce.length == 0){
                throw new RuntimeException("商品介绍信息不可为空！");
            }
            if (arrPrice == null || arrPrice.length == 0){
                throw new RuntimeException("商品价钱不可为空！");
            }
            ArrayList<Cart> list = new ArrayList<>();
            int i = 0;
            for (int id : arrId) {
                Cart cart = cartService.selectCartByID(id);
                list.add(cart);
            }
            for (Cart cart : list) {
                Cart cart1 = new Cart();
                cart1.setCartPrice(arrPrice[i]);
                cart1.setCartIntroduce(arrIntroduce[i]);
                cart1.setCartPath(cart.getCartPath());
                cart1.setCartName(cart.getCartName());
                cart1.setIsSell(0);
                cart1.setMyArticle(-cart.getMyArticle());
//                DynamicService.saveSaveContent(cart1);
                cartService.updateCart(cart.getCartID(),-cart.getMyArticle(),userID,sellName,arrIntroduce[i],arrPrice[i]);
                i++;
            }
        }catch (Exception e){
            map.put("error",e.getMessage());
        }finally {
            return map;
        }
    }

    @RequestMapping("/changeShopIsSell")
    public void changeShopIsSell(int [] cartIDArr ){
        for (int id : cartIDArr) {
            cartService.changeShopIsSell(id);
        }

    }

    /**
     * 查询正在上架的商品
     * @return
     */
    @RequestMapping("/selectMyIsSell")
    public List<Cart> selectMyIsSell(int userID,int isSell){
        return cartService.selectMyIsSell(userID,isSell);
    }

    /**
     * 商品下架
     * 将isSell 修改为0  MyArticle恢复为原来位置
     */
    @RequestMapping("/cancelSJ")
    public void cancelSJ(int id,int MyArticle){
        //将MyArticle 绝对值  更新
        MyArticle = MyArticle * (-1);
        cartService.cancelSJ(id,MyArticle);
    }
}
