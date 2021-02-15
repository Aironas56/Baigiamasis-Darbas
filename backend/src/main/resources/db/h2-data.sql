

INSERT INTO USER (id, password, username) VALUES
(1, '{bcrypt}$2y$12$6C5T4j7HlR8CaokuYbtvMuKU5GAHJxVmq7v9oQonieq5jTAtEiRuG', 'user'),
(2, '{bcrypt}$2y$12$zH4qzdafJK21jGLYco5AI.8SVcS8.Z.nVkqOOyYS/aNLQMvATv8Qq', 'admin');


INSERT INTO ROLE (id, role_name) VALUES
(1, 'ADMIN'),
(2, 'WORKER'),
(3,'COMPANY');

INSERT INTO USER_ROLES (user_id, role_id) VALUES
(1, 2),
(2, 2),
(2, 1);

INSERT INTO COMPANY (id, name, user_id) VALUES (1,'UAB VIKINGAI',1);


INSERT INTO JOB_AD (id,name,description,company_id) VALUES ( 2,'UAB VIKINGAI','Ieskomas zmogus kuris gali dirbti su vikingais',1 );
INSERT INTO JOB_AD (id,name,description,company_id) VALUES ( 1,'UAB VIKINGAI','Ieskomas zmogus kuris gali dirbti vikingu',1 );