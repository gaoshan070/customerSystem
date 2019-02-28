/*
 Navicat MySQL Data Transfer

 Source Server         : localhost
 Source Server Version : 50716
 Source Host           : 127.0.0.1
 Source Database       : sdk_customer

 Target Server Version : 50716
 File Encoding         : utf-8

 Date: 02/28/2019 22:54:15 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `t_customer`
-- ----------------------------
DROP TABLE IF EXISTS `t_customer`;
CREATE TABLE `t_customer` (
  `customer_id` bigint(21) NOT NULL AUTO_INCREMENT,
  `customer_name` varchar(50) NOT NULL,
  `birth` datetime DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '0: non-active, 1: current, 2: prospective',
  `gender` tinyint(1) DEFAULT '0' COMMENT '0: Female, 1: Male',
  `email` varchar(50) DEFAULT NULL,
  `mobile` varchar(50) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `create_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`customer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
--  Records of `t_customer`
-- ----------------------------
BEGIN;
INSERT INTO `t_customer` VALUES ('1', 'John', '1984-02-03 00:00:00', '2', '1', 'john@gmail.com', '099999', 'Auckland', '2019-02-26 13:16:18', '2019-02-28 16:41:02'), ('2', 'Tom', '1983-02-26 00:00:00', '1', '1', 'tom@gmail.com', '099999', 'Auckland', '2019-02-26 13:26:24', '2019-02-28 16:41:02'), ('3', 'Jim', '1984-02-03 00:00:00', '0', '1', 'tom@gmail.com', '099999', 'Auckland', '2019-02-26 13:26:24', '2019-02-28 16:41:02'), ('4', 'Kim', '1984-02-03 00:00:00', '0', '1', 'tom@gmail.com', '099999', 'Auckland', '2019-02-26 13:26:24', '2019-02-28 16:41:02'), ('5', 'Harry', '1984-02-03 00:00:00', '0', '1', 'tom@gmail.com', '099999', 'Auckland', '2019-02-26 13:26:24', '2019-02-28 16:41:02'), ('6', 'Kate', '1984-02-03 00:00:00', '0', '0', 'tom@gmail.com', '099999', 'Auckland', '2019-02-26 13:26:24', '2019-02-28 16:41:02'), ('7', 'Barry', '1984-02-03 00:00:00', '0', '1', 'tom@gmail.com', '099999', 'Auckland', '2019-02-26 13:26:24', '2019-02-28 16:41:02'), ('8', 'Allen', '1984-02-03 00:00:00', '0', '1', 'tom@gmail.com', '099999', 'Auckland', '2019-02-26 13:26:24', '2019-02-28 16:41:02'), ('9', 'Hurley', '1984-02-03 00:00:00', '0', '1', 'tom@gmail.com', '099999', 'Auckland', '2019-02-26 13:26:24', '2019-02-28 16:41:02'), ('10', 'Tim', '1984-02-03 00:00:00', '0', '1', 'tom@gmail.com', '099999', 'Auckland', '2019-02-26 13:26:24', '2019-02-28 16:41:02'), ('11', 'Sean', '1984-02-03 00:00:00', '0', '1', 'tom@gmail.com', '099999', 'Auckland', '2019-02-26 13:26:24', '2019-02-28 16:41:02'), ('12', 'Kerry', '1984-02-03 00:00:00', '0', '1', 'tom@gmail.com', '099999', 'Auckland', '2019-02-26 13:26:24', '2019-02-28 16:41:02'), ('13', 'Oliver', '1984-02-03 00:00:00', '0', '1', 'tom@gmail.com', '099999', 'Auckland', '2019-02-26 13:26:24', '2019-02-28 16:41:02'), ('14', 'Lily', '1984-02-03 00:00:00', '1', '0', 'tom@gmail.com', '099999', 'Auckland', '2019-02-26 13:26:24', '2019-02-28 16:41:02');
COMMIT;

-- ----------------------------
--  Table structure for `t_note`
-- ----------------------------
DROP TABLE IF EXISTS `t_note`;
CREATE TABLE `t_note` (
  `note_id` bigint(21) NOT NULL AUTO_INCREMENT,
  `customer_id` bigint(21) NOT NULL,
  `note_content` text,
  `create_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`note_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
--  Records of `t_note`
-- ----------------------------
BEGIN;
INSERT INTO `t_note` VALUES ('1', '2', 'Hi, welcome to use note functio1232&#x3f;asda', '2019-02-27 18:25:00', '2019-02-28 16:40:40'), ('2', '2', 'asdfafd', '2019-02-27 18:25:20', '2019-02-28 16:40:40'), ('3', '2', 'asdfafd', '2019-02-27 18:25:35', '2019-02-28 20:03:12'), ('4', '2', 'asdfafd', '2019-02-27 18:26:38', '2019-02-28 20:03:12'), ('5', '2', 'demo', '2019-02-27 18:26:38', '2019-02-28 20:03:12'), ('6', '2', 'Welcome to use this demo', '2019-02-27 18:26:38', '2019-02-28 20:01:02'), ('7', '2', 'asdfafd', '2019-02-27 18:26:38', '2019-02-28 20:03:12'), ('8', '2', 'asdfafd', '2019-02-27 18:26:38', '2019-02-28 20:03:12'), ('9', '2', 'asdfafd', '2019-02-27 18:26:38', '2019-02-28 20:03:12'), ('10', '2', 'dddd', '2019-02-27 18:26:38', '2019-02-28 16:40:40'), ('11', '2', 'asdfafd', '2019-02-27 18:26:38', '2019-02-28 20:03:12'), ('12', '2', 'asdfafd', '2019-02-27 18:26:38', '2019-02-28 16:40:40'), ('13', '2', 'asdfafd', '2019-02-27 18:26:38', '2019-02-28 16:40:40'), ('14', '2', 'asdfafd', '2019-02-27 18:26:38', '2019-02-28 16:40:40'), ('15', '2', 'asdfafd', '2019-02-27 18:26:38', '2019-02-28 16:40:40'), ('16', '2', 'This is an important thing.', '2019-02-27 18:26:38', '2019-02-28 20:48:16'), ('17', '2', 'Test note', '2019-02-27 18:26:38', '2019-02-28 19:57:46'), ('18', '2', 'Test note 111', '2019-02-27 18:26:38', '2019-02-28 19:59:58'), ('19', '2', 'This is a new note', '2019-02-28 20:19:33', '2019-02-28 20:19:33'), ('20', '8', 'A new note', '2019-02-28 20:49:17', '2019-02-28 20:49:17');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
