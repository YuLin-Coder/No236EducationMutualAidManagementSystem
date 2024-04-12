package com.example.teach.serviceimpl;

import com.example.teach.bean.Admin;
import com.example.teach.bean.User;
import com.example.teach.mapper.LoginMapper;
import com.example.teach.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author Monster
 */
@Service
public class LoginServiceImpl implements LoginService {

    @Autowired
    LoginMapper loginMapper;

    @Override
    public User loginMessage(String name, String password) {
        return loginMapper.loginMessage(name,password);
    }

    @Override
    public User forget(String name, String phone) {
        return loginMapper.forget(name, phone);
    }

    @Override
    public void registered(User user) {
        loginMapper.registered(user);
    }

    @Override
    public User nameRepeatYesOrNo(String name) {
        return loginMapper.nameRepeatYesOrNo(name);
    }

    @Override
    public Admin loginAdmin(String name, String password) {
        return loginMapper.loginAdmin(name, password);
    }

}
