# ftyft
 Create a gift list and let them choose one.


## Getting Started
To execute this project with docker you must following steps.

1. In the root directiory execute
   `docker compose up`

## Edit database permissions
To edit database permissions you must following steps.

1. In the root directory execute
   `docker compose exec mysql bash`
2. In the bash to docker mysql, execute
   `mysql -uroot -pftyft`
3. In the terminal to mysql, add root permissions
   `GRANT CREATE, ALTER, DROP, REFERENCES ON *.* TO 'ftyft'@'%';`
4. Refresh permissions with
   `FLUSH PRIVILEGES;`
5. Exit mysql docker and rerun all dockers
   `docker compose up`
