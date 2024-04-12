package com.example.teach;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
//@SpringBootTest(classes = ShoesApplication.class) 上下都可
public class ShoesApplicationTests {

    //注入 StringRedisTemplate
    @Autowired
    private StringRedisTemplate redisTemplate;

    @Test
    public void testString(){
        redisTemplate.opsForValue().set("name","嘿嘿");
        String name = redisTemplate.opsForValue().get("name");
        System.out.println(name);
    }
}
