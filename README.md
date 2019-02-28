### Customer Management Application
***
This is a demo application for technical test.
#### Tech Stack
1. Backend
Spring Boot
Thymeleaf
Mybatis
Druid
Swagger2

2. Frontend 
JQuery
JQuery Validation
bootstrapTable
Layui

ReactJS
Ant Design + umi + dva

3. Development Environment
Java 7
Mysql
IntelliJ Idea
Maven
Git
***
#### Steps to Run the Application
1. Backend
Go to the root project folder and execute the following command
```
mvn spring-boot:run
```
The application runs on http://localhost:8099.

2. Frontend
***Prerequisite***
install node and npm

Go the the frontend directory and execute the following command
```
npm install
npm start
```
The application runs on http://localhost:8000.
***
#### Demo 
http://:8099
***Swagger API***
http://:8099/swagger-ui.html
***
#### TODO List
1. To check whether some fields (such as email, mobile) are valid
2. To add authentication
3. To add security configuration
4. To add cache (e.g. Redis) to speed up the application
5. To record the operation logs (consider AOP)
6. To use JWT to create token