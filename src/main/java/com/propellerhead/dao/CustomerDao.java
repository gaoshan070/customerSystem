package com.propellerhead.dao;

import com.propellerhead.domain.CustomerDO;
import org.apache.ibatis.annotations.Mapper;

import java.io.ObjectInputStream;
import java.util.List;
import java.util.Map;

/**
 * Created by gaoshan on 26/02/19.
 */
@Mapper
public interface CustomerDao {

    CustomerDO get(Long customerId);

    List<CustomerDO> list(Map<String, Object> map);

    int count(Map<String,Object> map);

    int save(CustomerDO customer);

    int update(CustomerDO customer);

    int remove(Long customerId);
}
