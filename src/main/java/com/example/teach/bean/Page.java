package com.example.teach.bean;

public class Page {
    private int shopMinNum;
    private int curPage;
    private int showPage;
    private int shopMaxNum;

    public int getShopMinNum() {
        shopMinNum = (curPage-1)*showPage;
        return shopMinNum;
    }

    public void setShopMinNum(int shopMinNum) {
        this.shopMinNum = shopMinNum;
    }

    public int getCurPage() {
        return curPage;
    }

    public void setCurPage(int curPage) {
        this.curPage = curPage;
    }

    public int getShowPage() {
        return showPage;
    }

    public void setShowPage(int showPage) {
        this.showPage = showPage;
    }

    public int getShopMaxNum() {
        return shopMaxNum;
    }

    public void setShopMaxNum(int shopMaxNum) {
        this.shopMaxNum = shopMaxNum;
    }
}
