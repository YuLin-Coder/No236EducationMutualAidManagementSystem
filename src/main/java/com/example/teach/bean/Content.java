package com.example.teach.bean;

public class Content {
    private int id;
    private String ConName;
    private String ConImage;
    private String ConContent;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getConName() {
        return ConName;
    }

    public void setConName(String conName) {
        ConName = conName;
    }

    public String getConImage() {
        return ConImage;
    }

    public void setConImage(String conImage) {
        ConImage = conImage;
    }

    public String getConContent() {
        return ConContent;
    }

    public void setConContent(String conContent) {
        ConContent = conContent;
    }
}
