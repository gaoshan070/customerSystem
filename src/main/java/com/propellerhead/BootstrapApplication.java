package com.propellerhead;


import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;

/**
 * Bootstrap application
 *
 */
@MapperScan("com.propellerhead.dao")
@ServletComponentScan
@SpringBootApplication
public class BootstrapApplication
{
    public static void main( String[] args )
    {
        SpringApplication.run(BootstrapApplication.class, args);
        System.out.println( "Demo project starts up!" );
    }
}
