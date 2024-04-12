package com.example.teach.controller;

import com.example.teach.bean.Cart;
import com.example.teach.bean.Content;
import com.example.teach.bean.Dynamic;
import com.example.teach.bean.News;
import com.example.teach.service.DynamicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.*;

/**
 * @author Monster
 */
@Controller
@ResponseBody
public class UploadPicturesController {

    @Autowired
    DynamicService DynamicService;

    /**
     * 发送朋友圈
     * @param file
     * @param name
     * @param address
     * @param time
     * @param content
     * @param photo
     * @throws IOException
     */
    @RequestMapping("/uploadPicture")
    public void uploadPicture(@RequestParam("file") MultipartFile file,String name,String address,String time,String content,String photo) throws IOException {
        //图片名字
        String fileName = file.getOriginalFilename();
        //存储路径 获取当前resources静态文件下DynamicImg文件目录
        String path = "D:/Leader/Game/"+fileName;
        File Dynamic = new File(path);
        if (!Dynamic.exists()){
            Dynamic.mkdirs();
        }
        //将文件图片写入此文件夹
        file.transferTo(Dynamic);
        //成功之后将此图片给数据库
        Dynamic dynamic = new Dynamic();
        dynamic.setDynamicAddress(address);
        dynamic.setDynamicContent(content);
        dynamic.setDynamicPath(fileName);
        dynamic.setDynamicSendName(name);
        dynamic.setDynamicTime(time);
        dynamic.setDynamicPhoto(photo);
        DynamicService.saveDynamicContent(dynamic);
    }

    /**
     * 获取朋友圈图片路径
     * 本地服务器响应浏览器图片
     * @param fileName
     * @return
     */
    @RequestMapping("/getImgAddress")
    public void getImgAddress(String fileName, HttpServletResponse response) throws IOException {
        //拼接路径
        String DynamicPath = "D:/Leader/Game/"+fileName;
        //读取本地图片输入流
        FileInputStream inputStream = new FileInputStream(DynamicPath);
        int i = inputStream.available();
        //byte数组用于存放图片字节数据
        byte[] buff = new byte[i];
        inputStream.read(buff);
        //记得关闭输入流
        inputStream.close();
        //设置发送到客户端的响应内容类型
        response.setContentType("image/*");
        OutputStream out = response.getOutputStream();
        out.write(buff);
        //关闭响应输出流
        out.close();
    }


    /**
     * 更换头像
     * @param file
     * @param name
     * @throws IOException
     */
    @RequestMapping("/uploadSure")
    public void uploadSure(@RequestParam("file") MultipartFile file,String name,String personImg) throws IOException {
        //图片名字
        String fileName = file.getOriginalFilename();
        //存储路径
        String path = "D:/Leader/Game/"+fileName;
        File person = new File(path);
        if (!person.exists()){
            person.mkdirs();
        }
        //将文件图片写入此文件夹
        file.transferTo(person);
        //成功之后将此图片给数据库
        DynamicService.savePersonHead(fileName,name);
        //将动态社交属于自己所有的发表内容头像修改
        DynamicService.updateDynamicHead(name,fileName);
    }
    /**
     * 获取头像图片路径
     * @param personImg
     * @return
     */
    @RequestMapping("/getImgHead")
    public void getImgHead(String personImg,HttpServletResponse response) throws IOException {
        //拼接路径
        String personHead = "D:/Leader/Game/"+personImg;
        //读取本地图片输入流
        FileInputStream inputStream = new FileInputStream(personHead);
        int i = inputStream.available();
        //byte数组用于存放图片字节数据
        byte[] buff = new byte[i];
        inputStream.read(buff);
        //记得关闭输入流
        inputStream.close();
        //设置发送到客户端的响应内容类型
        response.setContentType("image/*");
        OutputStream out = response.getOutputStream();
        out.write(buff);
        //关闭响应输出流
        out.close();
    }

    @RequestMapping("/sellGame")
    public void sellGame(@RequestParam("file") MultipartFile file,String GameName,String GamePrice,String GameIntroduce,String admin) throws IOException {
        //图片名字
        String fileName = file.getOriginalFilename();
        //存储路径 获取当前resources静态文件下DynamicImg文件目录
        String path = "D:/Leader/Game/"+fileName;
        File Dynamic = new File(path);
        if (!Dynamic.exists()){
            Dynamic.mkdirs();
        }
        //将文件图片写入此文件夹
        file.transferTo(Dynamic);
        //成功之后将此图片给数据库
        Cart cart = new Cart();
        cart.setCartName(GameName);
        cart.setCartPath(fileName);
        cart.setCartPrice(Double.parseDouble(GamePrice));
        cart.setCartIntroduce(GameIntroduce);
        cart.setIsSell(0);
        cart.setSellName(admin);
        cart.setSellID(0);
        DynamicService.saveSaveContent(cart);
    }

    @RequestMapping("/sellContent")
    public void sellContent(@RequestParam("ConFile") MultipartFile ConFile,String ConContent,String ConName) throws IOException {
        //图片名字
        String fileName = ConFile.getOriginalFilename();
        //存储路径 获取当前resources静态文件下DynamicImg文件目录
        String path = "D:/Leader/Game/"+fileName;
        File Dynamic = new File(path);
        if (!Dynamic.exists()){
            Dynamic.mkdirs();
        }
        //将文件图片写入此文件夹
        ConFile.transferTo(Dynamic);
        //成功之后将此图片给数据库
        Content content = new Content();
        content.setConContent(ConContent);
        content.setConImage(fileName);
        content.setConName(ConName);
        DynamicService.saveContent(content);
    }

    @RequestMapping("/sureUpdate")
    public void sureUpdate(@RequestParam("ConFile") MultipartFile ConFile,String ConContent,String ConName,int id) throws IOException {
        //图片名字
        String fileName = ConFile.getOriginalFilename();
        //存储路径 获取当前resources静态文件下DynamicImg文件目录
        String path = "D:/Leader/Game/"+fileName;
        File Dynamic = new File(path);
        if (!Dynamic.exists()){
            Dynamic.mkdirs();
        }
        //将文件图片写入此文件夹
        ConFile.transferTo(Dynamic);
        //成功之后将此图片给数据库
        Content content = new Content();
        content.setConContent(ConContent);
        content.setConImage(fileName);
        content.setConName(ConName);
        content.setId(id);
        DynamicService.updateContent(content);
    }

    @RequestMapping("/sellNews")
    public void sellNews(@RequestParam("newsFile") MultipartFile newsFile,String newsContent,String newsName) throws IOException {
        //图片名字
        String fileName = newsFile.getOriginalFilename();
        //存储路径 获取当前resources静态文件下DynamicImg文件目录
        String path = "D:/Leader/Game/"+fileName;
        File Dynamic = new File(path);
        if (!Dynamic.exists()){
            Dynamic.mkdirs();
        }
        //将文件图片写入此文件夹
        newsFile.transferTo(Dynamic);
        //成功之后将此图片给数据库
        News news = new News();
        news.setNewsContent(newsContent);
        news.setNewsName(newsName);
        news.setNewsPath(fileName);
        DynamicService.saveNews(news);
    }

}
