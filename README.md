### Customer Management Application  
***  
This is a demo application for the technical test.  There are two ways to develop a browser user interface. The first is to use a template engine named Thymeleaf which is the default configuration in  SpringBoot. The other one applies ReacJS, separating the backend and frontend. 

***

#### 1. Tech Stack  

***Backend***

SpringBoot  
Thymeleaf  
Mybatis  
Druid  
Swagger2  

***Frontend***

JQuery  
JQuery Validation  
bootstrapTable  
Layui    
ReactJS  (Ant Design + umi + dva )
  
***Development Environment***

JDK 1.8 

MySql 5.7.16

Maven  3.3.9

Node  v10.15.1

Git  2.11.0

***  
#### 2. Steps to Run the Application  
1. Backend  
Firstly, execute the sdk_customer.sql in Mysql. Secondly, modify the configuration of MySql connection in application-*.yml (depends on the profile you use) under resources directory. Then go to the root project folder and execute the following command  
```  
mvn spring-boot:run  
```  
The application runs on http://localhost:8099.  
  
2. Frontend  
***Prerequisite***  : install node and npm  
Go the the frontend directory and execute the following command  
```  
npm install  
npm start  
```  
The application runs on http://localhost:8000.  

*** 
#### 3. Deployment
Go to the root project folder and execute the following command  
```  
mvn install
```  
Then the .jar file named propellerhead-1.0-SNAPSHOT will be generated in target directory. Run the command 
```
nohup java -jar propellerhead-1.0-SNAPSHOT.jar $1 > /dev/null 2>&1 &
```
Then the service will start up.
***
#### 4. Demo 

***Backend***

http://52.62.10.220:8099/customer 

***ReactJS Demo***

http://52.62.10.220:8000

***Swagger API***  
http://52.62.10.220:8099/swagger-ui.html  
***  
#### 5. TODO List  
1. To check whether some fields (such as email, mobile) are valid  
2. To add authentication  
3. To add security configuration  
4. To add cache (e.g. Redis) to speed up the application  
5. To record the operation logs (consider AOP)  
6. To use JWT to create tokens
7. To add transaction