package com.example.teach.bean;

public class Cart extends Page{
    private int cartID;
    private String cartPath;
    private Double cartPrice;
    private String cartName;
    private int cartParameter;  //1 加入购物车 0 删除购物车
    private int cartNumber; // 购物车商品商品
    private int cartTotal;
    private int priceMin;
    private int priceMax;
    private String cartIntroduce;
    private int IsSell;  //审核通过1 未通过0
    private int MyArticle;  //我的物品分类 1 2 3 4
    private int isBuy;
    private int sellID;
    private String sellName;

    public String getSellName() {
        return sellName;
    }

    public void setSellName(String sellName) {
        this.sellName = sellName;
    }

    public int getSellID() {
        return sellID;
    }

    public void setSellID(int sellID) {
        this.sellID = sellID;
    }

    public int getIsBuy() {
        return isBuy;
    }

    public void setIsBuy(int isBuy) {
        this.isBuy = isBuy;
    }

    public int getMyArticle() {
        return MyArticle;
    }

    public void setMyArticle(int myArticle) {
        MyArticle = myArticle;
    }

    public int getIsSell() {
        return IsSell;
    }

    public void setIsSell(int isSell) {
        IsSell = isSell;
    }

    public String getCartIntroduce() {
        return cartIntroduce;
    }

    public void setCartIntroduce(String cartIntroduce) {
        this.cartIntroduce = cartIntroduce;
    }

    public int getCartID() {
        return cartID;
    }

    public void setCartID(int cartID) {
        this.cartID = cartID;
    }

    public String getCartPath() {
        return cartPath;
    }

    public void setCartPath(String cartPath) {
        this.cartPath = cartPath;
    }

    public Double getCartPrice() {
        return cartPrice;
    }

    public void setCartPrice(Double cartPrice) {
        this.cartPrice = cartPrice;
    }

    public String getCartName() {
        return cartName;
    }

    public void setCartName(String cartName) {
        this.cartName = cartName;
    }

    public int getCartParameter() {
        return cartParameter;
    }

    public void setCartParameter(int cartParameter) {
        this.cartParameter = cartParameter;
    }

    public int getCartNumber() {
        return cartNumber;
    }

    public void setCartNumber(int cartNumber) {
        this.cartNumber = cartNumber;
    }

    public int getCartTotal() {
        return cartTotal;
    }

    public void setCartTotal(int cartTotal) {
        this.cartTotal = cartTotal;
    }

    public int getPriceMin() {
        return priceMin;
    }

    public void setPriceMin(int priceMin) {
        this.priceMin = priceMin;
    }

    public int getPriceMax() {
        return priceMax;
    }

    public void setPriceMax(int priceMax) {
        this.priceMax = priceMax;
    }
}
