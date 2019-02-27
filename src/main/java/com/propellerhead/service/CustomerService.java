package com.propellerhead.service;

import com.propellerhead.domain.CustomerDO;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * Created by gaoshan on 26/02/19.
 */
@Service
public interface CustomerService {

    CustomerDO get(Long customerId);

    List<CustomerDO> list(Map<String, Object> map);

    int count(Map<String, Object> map);

    int save(CustomerDO customer);

    int update(CustomerDO customer);

    int remove(Long customerId);
}
