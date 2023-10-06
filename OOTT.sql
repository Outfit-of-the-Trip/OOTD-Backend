-- OOTT.sql

CREATE TABLE `USER` (
    `usrId` VARCHAR(20) NOT NULL PRIMARY KEY,
    `usrGender` VARCHAR(10) NOT NULL,
    `usrAge` INT NOT NULL,
    `usrProfileURL` VARCHAR(500) NULL,
    `usrCreateAt` TIMESTAMP NULL,
    `usrUpdateAt` TIMESTAMP NULL,
    `usrStyle1` VARCHAR(20) NULL,
    `usrStyle2` VARCHAR(20) NULL,
    `usrStyle3` VARCHAR(20) NULL,
    `usrRole` INT NOT NULL DEFAULT 0 COMMENT '0(일반), 1(admin), 2(superadmin)'
);

CREATE TABLE `CLOSET` (
		`closetSeq` INT AUTO_INCREMENT PRIMARY KEY,
    `usrId` VARCHAR(20) NOT NULL,
    `clothesId` VARCHAR(50) NOT NULL,
    `clothesImg` LONGTEXT NOT NULL COMMENT '서버 이미지 저장',
    `clothesTag` VARCHAR(100) NOT NULL,
    `clothesColor` VARCHAR(50) NOT NULL,
    FOREIGN KEY (`usrId`) REFERENCES `USER` (`usrId`)
);

CREATE TABLE `TRAVEL` (
    `travlSeq` INT AUTO_INCREMENT PRIMARY KEY,
    `usrId` VARCHAR(20) NOT NULL,
    `travlDate` VARCHAR(50) NOT NULL COMMENT 'YYYY/MM/DD',
    `travlFriends` VARCHAR(100) NULL COMMENT '@친구1@친구2',
    `travlPlace` VARCHAR(50) NOT NULL,
    `travlCategory` VARCHAR(50) NOT NULL,
    `travlReason` VARCHAR(50) NOT NULL,
		`outerSeq` INT NULL,
    `topSeq` INT NULL,
    `bottomSeq` INT NULL,
    `shoesSeq` INT NULL,
    FOREIGN KEY (`usrId`) REFERENCES `USER` (`usrId`)
);

CREATE TABLE `FRIEND` (
    `fromUsrId` VARCHAR(20) NOT NULL,
    `toUsrId` VARCHAR(20) NOT NULL,
    `areWeFriend` BOOLEAN NOT NULL
);

CREATE TABLE `EXAMPLE` (
    `exampleSeq` INT AUTO_INCREMENT PRIMARY KEY,
    `exampleClothes` VARCHAR(20) NOT NULL,
    `exampleCategory` VARCHAR(20) NOT NULL,
    `exampleColor` VARCHAR(20) NOT NULL,
    `exampleImage` VARCHAR(500) NOT NULL
);

CREATE TABLE `RECOMMEND_CLOSET` (
    `travlSeq` INT NOT NULL,
    `usrId` VARCHAR(20) NOT NULL,
    `outer1` VARCHAR(500) NULL,
    `outer2` VARCHAR(500) NULL,
    `outer3` VARCHAR(500) NULL,
    `top1` VARCHAR(500) NULL,
    `top2` VARCHAR(500) NULL,
    `top3` VARCHAR(500) NULL,
    `bottom1` VARCHAR(500) NULL,
    `bottom2` VARCHAR(500) NULL,
    `bottom3` VARCHAR(500) NULL,
    `shoes1` VARCHAR(500) NULL,
    `shoes2` VARCHAR(500) NULL,
    `shoes3` VARCHAR(500) NULL,
    FOREIGN KEY (`travlSeq`) REFERENCES `TRAVEL` (`travlSeq`)
);

CREATE TABLE `RECOMMEND_COMM` (
    `travlSeq` INT NOT NULL,
    `usrId` VARCHAR(20) NOT NULL,
    `outer1` VARCHAR(500) NULL,
    `outer1_comm` VARCHAR(500) NULL,
    `outer2` VARCHAR(500) NULL,
    `outer2_comm` VARCHAR(500) NULL,
    `outer3` VARCHAR(500) NULL,
    `outer3_comm` VARCHAR(500) NULL,
    `top1` VARCHAR(500) NULL,
    `top1_comm` VARCHAR(500) NULL,
    `top2` VARCHAR(500) NULL,
    `top2_comm` VARCHAR(500) NULL,
    `top3` VARCHAR(500) NULL,
    `top3_comm` VARCHAR(500) NULL,
    `bottom1` VARCHAR(500) NULL,
    `bottom1_comm` VARCHAR(500) NULL,
    `bottom2` VARCHAR(500) NULL,
    `bottom_comm` VARCHAR(500) NULL,
    `bottom3` VARCHAR(500) NULL,
    `bottom3_comm` VARCHAR(500) NULL,
    `shoes1` VARCHAR(500) NULL,
    `shoes1_comm` VARCHAR(500) NULL,
    `shoes2` VARCHAR(500) NULL,
    `shoes2_comm` VARCHAR(500) NULL,
    `shoes3` VARCHAR(500) NULL,
    `shoes3_comm` VARCHAR(500) NULL,
    FOREIGN KEY (`travlSeq`) REFERENCES `TRAVEL` (`travlSeq`)
);

CREATE TABLE `CRAWL_DATA` (
    `crawlSeq` INT AUTO_INCREMENT PRIMARY KEY,
    `crawlCategory` VARCHAR(20) NOT NULL,
    `crawlClothes` VARCHAR(30) NOT NULL,
    `crawlColor` VARCHAR(20) NOT NULL,
    `crawlCount` INT NOT NULL,
    `crawlDate` DATE NULL
);

CREATE TABLE `CRAWL_COORDI` (
    `coordiSeq` INT AUTO_INCREMENT PRIMARY KEY,
    `coordiCategory` VARCHAR(20) NOT NULL,
    `coordiClothes` VARCHAR(100) NOT NULL,
    `coordiColor` VARCHAR(100) NOT NULL,
    `coordiCount` INT NOT NULL,
    `coordiDate` DATE NULL
);