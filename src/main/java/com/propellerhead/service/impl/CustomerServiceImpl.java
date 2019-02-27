package com.propellerhead.service.impl;

import com.propellerhead.dao.CustomerDao;
import com.propellerhead.domain.CustomerDO;
import com.propellerhead.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * Created by gaoshan on 26/02/19.
 */
@Service
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    CustomerDao customerDao;

    @Override
    public CustomerDO get(Long customerId) {
        CustomerDO customer = customerDao.get(customerId);
        return customer;
    }

    @Override
    public List<CustomerDO> list(Map<String, Object> map) {
        return customerDao.list(map);
    }

    @Override
    public int count(Map<String, Object> map) {
        return customerDao.count(map);
    }

    @Override
    public int save(CustomerDO customer) {
        return customerDao.save(customer);
    }

    @Override
    public int update(CustomerDO customer) {
        return customerDao.update(customer);
    }

    @Override
    public int remove(Long customerId) {
        return customerDao.remove(customerId);
    }
}
