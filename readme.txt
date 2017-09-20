please follow below instructions to start node server

REQUIREMENTS:
1.Mysql server
2.Node JS
3.Angular server

Step1: install mysql server and create database as mydb

      create database mydb;

      create tables "playerlist" for mydb

         CREATE TABLE `playerlist` (
            `id` int(11) NOT NULL AUTO_INCREMENT,
            `firstName` varchar(100) DEFAULT NULL,
            `lastName` varchar(100) DEFAULT NULL,
            `favShot` varchar(100) DEFAULT NULL,
            `playerType` varchar(100) DEFAULT NULL,
            `yearlyIncome` varchar(255) DEFAULT NULL,
            `dob` date DEFAULT NULL,
            PRIMARY KEY (`id`)
            );
        
        CREATE TABLE `playertype` (
          `id` int(11) DEFAULT NULL,
          `type` varchar(100) DEFAULT NULL
        );

        INSERT INTO playertype (id,type) values (1,'Bowler');
        INSERT INTO playertype (id,type) values (2,'Bats Man');
        INSERT INTO playertype (id,type) values (3,'Wicket Keeper');
        INSERT INTO playertype (id,type) values (4,'All Rounder');

Step2:open the db_connect.js file and set the values as per your mysql server

Step3:
 go to the node server folder and open cmd there and run  "npm install express --save" then "npm install"
 then type "node app.js"
the node server will start(for checking,call the url http://localhost:3030/ in browser)

Step4:
Then open the angular folder and run cmd there,
run "npm install" first
run the command "npm start" or "ng serve --host 0.0.0.0 --disable-host-check --proxy-config=proxy.config.json"

