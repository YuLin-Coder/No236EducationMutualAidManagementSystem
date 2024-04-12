package com.example.teach;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

/**
 * @author Monster
 */
@SpringBootApplication
@MapperScan("com.example.teach.mapper")
@ComponentScan(basePackages = {"com.example"})
public class TeachingApplication {

    public static void main(String[] args) {
        SpringApplication.run(TeachingApplication.class, args);
    }

}
