package com.propellerhead.service.impl;

import com.google.common.collect.Maps;
import com.propellerhead.dao.CustomerDao;
import com.propellerhead.domain.CustomerDO;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import static org.junit.Assert.*;
import static org.mockito.Mockito.when;

/**
 * Created by gaoshan on 13/03/19.
 */
@RunWith(SpringJUnit4ClassRunner.class)
public class CustomerServiceImplTest {

    @Mock
    private CustomerDao customerDao;

    @InjectMocks
    private CustomerServiceImpl customerService;

    @Before
    public void setUp() throws Exception {
        MockitoAnnotations.initMocks(this);
    }

    @After
    public void tearDown() throws Exception {

    }

    @Test
    public void get() throws Exception {

    }

    @Test
    public void list() throws Exception {
        Map<String, Object> query = Maps.newHashMap();
        List<CustomerDO> customerList = new ArrayList<CustomerDO>();
        customerList.add(new CustomerDO(1l, "Tom"));
        customerList.add(new CustomerDO(2l, "Jerry"));
        customerList.add(new CustomerDO(3l, "Sean"));
        when(customerDao.list(query)).thenReturn(customerList);
        List<CustomerDO> result = customerService.list(query);
        assertEquals(3, result.size());
    }

    @Test
    public void count() throws Exception {

    }

    @Test
    public void save() throws Exception {

    }

    @Test
    public void update() throws Exception {

    }

    @Test
    public void remove() throws Exception {

    }

}