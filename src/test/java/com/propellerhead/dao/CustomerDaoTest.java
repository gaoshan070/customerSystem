package com.propellerhead.dao;

import com.propellerhead.domain.CustomerDO;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mybatis.spring.boot.test.autoconfigure.MybatisTest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.junit4.SpringRunner;

import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * Created by gaoshan on 13/03/19.
 */
@RunWith(SpringRunner.class)
@MybatisTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class CustomerDaoTest {

    @Autowired
    private CustomerDao customerDao;

    @Test
    public void testGet(){
        CustomerDO customer = customerDao.get(1l);
        assertThat(customer.getCustomerId()).isEqualTo(1);
    }


}
