package com.example.teach.bean;

public class Chat {
    private int id;
    private String sendName;
    private String receiveName;
    private String content;
    private String sendByName;

    public String getSendByName() {
        return sendByName;
    }

    public void setSendByName(String sendByName) {
        this.sendByName = sendByName;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSendName() {
        return sendName;
    }

    public void setSendName(String sendName) {
        this.sendName = sendName;
    }

    public String getReceiveName() {
        return receiveName;
    }

    public void setReceiveName(String receiveName) {
        this.receiveName = receiveName;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
