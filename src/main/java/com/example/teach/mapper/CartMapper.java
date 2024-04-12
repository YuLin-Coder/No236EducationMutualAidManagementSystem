package com.example.teach.mapper;

import com.example.teach.bean.Cart;
import com.example.teach.bean.Collect;
import com.example.teach.bean.Discuss;
import com.example.teach.bean.News;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author Monster
 */
@Repository
public interface CartMapper {
    /**
     * 查询当前商品列表
     * @param cart
     * @return
     */
    List<Cart> selectShop(Cart cart);
    List<News> selectNews(News news);
    List<News> selectAdminNews();
    /**
     * 加入购物车(通过修改参数)
     * @param id
     * @param param
     * @param num
     * @param userID
     */
    void addToCart(@Param("id") int id,@Param("param") int param, @Param("num")int num,@Param("userID") int userID);

    /**
     * 查询当前购物车内容(参数为1)
     * @param param
     * @param userID
     * @return
     */
    List<Cart> selectCart(@Param("param")int param,@Param("userID")int userID);

    /**
     * 对商品数量进行入库更新
     * @param cartNum
     * @param cartID
     */
    void cartNumberChange(@Param("cartNum")int cartNum,@Param("cartID")int cartID);

    /**
     * 查询购物车中数量总和
     * @param param
     * @param userID
     * @return
     */
    List<Integer> totalQuantity(@Param("param")int param,@Param("userID")int userID);

    /**
     * 删除购物车商品
     * @param cartParam
     * @param cartID
     */
    void cartRemove(@Param("cartParam")int cartParam,@Param("cartID")int cartID);

    /**
     * 添加购物车(插入)
     * @param nowQty
     * @param shoesImg
     * @param shoesPrice
     * @param shoesName
     * @param param
     * @param userID
     */
    void addCart(@Param("nowQty")int nowQty,@Param("shoesImg")String shoesImg,@Param("shoesPrice")Double shoesPrice,@Param("shoesName")String shoesName,@Param("param")int param,@Param("userID")int userID);

    /**
     * 查询商品总数
     * @return
     */
    int selectShopNum();

    /**
     * 查询收藏内容
     * @param param
     * @param userID
     * @return
     */
    List<Collect> selectCollectShoes(@Param("param")int param,@Param("userID")int userID);

    /**
     * 加入收藏
     * @param collect
     */
    void addToCollect(Collect collect);

    /**
     * 取消收藏
     * @param param
     * @param collectID
     */
    void cancelCollect(@Param("param")int param,@Param("collectID")int collectID);

    /**
     * 支付购物车
     * @param userID
     * @param account
     */
    void payMoney(@Param("userID")int userID,@Param("account")String account);

    List<Cart> selectAdminShop();

    void sureAdd(int cartID,int IsSell);

    void deleteShop(int cartID);

    List<Cart> selectMyThings(int userID);

    Cart selectCartByID(int id);

    void updateCart(int id,int MyArticle,int userID,String sellName,String introduce,double price);

    void  changeShopIsSell(int id);

    List<Cart> selectMyIsSell(int userID,int isSell);

    void cancelSJ(int id,int MyArticle);

    News selectTanKuang(int id);

    List<Discuss> clickNewsComment(int id);

    void sendNewsComment(Discuss discuss);
}
