package com.example.teach.bean;

public class Discuss {
    private int id;
    private String beCommentedID;
    private String person;
    private String time;
    private String content;
    private String photo;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getBeCommentedID() {
        return beCommentedID;
    }

    public void setBeCommentedID(String beCommentedID) {
        this.beCommentedID = beCommentedID;
    }

    public String getPerson() {
        return person;
    }

    public void setPerson(String person) {
        this.person = person;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }
}
