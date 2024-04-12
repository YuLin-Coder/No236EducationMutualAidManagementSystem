package com.example.teach.service;

import com.example.teach.bean.Admin;
import com.example.teach.bean.User;

/**
 * @author Monster
 */
public interface LoginService {
    /**
     * 根据账户密码登录
     * @param name
     * @param password
     * @return
     */
    User loginMessage(String name, String password);

    /**
     * 找回密码
     * @param name
     * @param phone
     * @return
     */
    User forget(String name,String phone);

    /**
     * 注册
     * @param user
     */
    void registered(User user);

    /**
     * 判断当前注册用户名是否重复
     * @param name
     * @return
     */
    User nameRepeatYesOrNo(String name);

    Admin loginAdmin(String name, String password);
}
