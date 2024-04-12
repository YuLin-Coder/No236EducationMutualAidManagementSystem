package com.example.teach.controller;

import com.alibaba.fastjson.JSONObject;
import com.example.teach.bean.Admin;
import com.example.teach.bean.User;
import com.example.teach.service.LoginService;
import com.example.teach.service.UserSerivce;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

/**
 * @author Monster
 */
@Controller
@ResponseBody
public class LoginMessageController {

    @Autowired
    LoginService loginService;

    @Autowired
    UserSerivce userSerivce;

    //拦截器测试
    @RequestMapping("/Interceptor")
    public void test(){
        System.out.println("wolaila");
    }

    /**
     * 登录信息
     * @param loginName
     * @param loginPassword
     * @param request
     * @param code
     * @return
     */
    @RequestMapping("/loginMessage")
    public int loginMessage(String loginName, String loginPassword, HttpServletRequest request,String code){
        User user = loginService.loginMessage(loginName, loginPassword);
        request.getSession().setAttribute("name",loginName);
        String verifyCode = (String)request.getSession().getAttribute("verifyCode");
        verifyCode= verifyCode.toLowerCase();
        if (!verifyCode.equals(code)){
            return 111111;
        }
        if (user != null){
            request.getSession().setAttribute("loginPassword",loginPassword);
            return user.getId();
        }
        return 0;
    }

    /**
     * 忘记密码
     * @param name
     * @param phone
     * @return
     */
    @RequestMapping("/forget")
    public String forget(String name,String phone){
        User user = loginService.forget(name, phone);
        if (user != null){
            String password = user.getPassword();
            return password;
        }else {
            return "当前填写信息不对！";
        }

    }

    /**
     * 注册(注册时加一默认银行卡)
     * @param info
     * @return
     */
    @RequestMapping("/registered")
    public String registered(String info){
        User user = new User();
        user = JSONObject.parseObject(info,user.getClass());
        loginService.registered(user);
        return "注册成功！";
    }

    /**
     * 判断当前注册用户名是否重复
     * @param name
     * @return
     */
    @RequestMapping("/nameRepeatYesOrNo")
    public String nameRepeatYesOrNo(String name){
        User user = loginService.nameRepeatYesOrNo(name);
        if (user != null){
            return "y";
        }
        return "n";
    }
    @RequestMapping("/loginAdmin")
    public Admin loginAdmin(String name, String password){
        Admin admin = loginService.loginAdmin(name, password);
        if (admin != null){
            return admin;
        }
        return null;
    }
}
