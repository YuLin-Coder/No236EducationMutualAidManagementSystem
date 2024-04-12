package com.example.teach.mapper;

import com.example.teach.bean.Admin;
import com.example.teach.bean.User;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

/**
 * @author Monster
 */
@Repository
public interface LoginMapper {
    /**
     * 根据账户密码登录
     * @param name
     * @param password
     * @return
     */
    User loginMessage(@Param("name") String name, @Param("password")String password);

    /**
     * 找回密码
     * @param name
     * @param phone
     * @return
     */
    User forget(@Param("name")String name,@Param("phone")String phone);

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
    User nameRepeatYesOrNo(@Param("name")String name);

    Admin loginAdmin(String name, String password);
}
