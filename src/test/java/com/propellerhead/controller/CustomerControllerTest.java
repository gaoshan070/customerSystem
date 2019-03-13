package com.propellerhead.controller;

import com.propellerhead.BootstrapApplication;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/**
 * Created by gaoshan on 13/03/19.
 */
@RunWith(SpringRunner.class)
@ContextConfiguration(classes = BootstrapApplication.class)
@SpringBootTest
public class CustomerControllerTest {

    private MockMvc mvc;

    @Autowired
    private WebApplicationContext ctx;

    @Before
    public void setup() {
        this.mvc = MockMvcBuilders.webAppContextSetup(ctx).build();
    }


    @Test
    public void index() throws Exception {

    }

    @Test
    public void list() throws Exception {
        mvc.perform(MockMvcRequestBuilders
                .get("/customer/list?offset=0&limit=10")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    @Test
    public void edit() throws Exception {

    }

    @Test
    public void update() throws Exception {

    }

    @Test
    public void detail() throws Exception {

    }

}