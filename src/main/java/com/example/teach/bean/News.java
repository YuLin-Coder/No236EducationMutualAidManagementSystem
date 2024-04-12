package com.example.teach.bean;

public class News extends Page{
    private int id;
    private String newsName;
    private String newsPath;
    private String newsContent;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNewsName() {
        return newsName;
    }

    public void setNewsName(String newsName) {
        this.newsName = newsName;
    }

    public String getNewsPath() {
        return newsPath;
    }

    public void setNewsPath(String newsPath) {
        this.newsPath = newsPath;
    }

    public String getNewsContent() {
        return newsContent;
    }

    public void setNewsContent(String newsContent) {
        this.newsContent = newsContent;
    }
}
