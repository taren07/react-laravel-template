# php + apache
## stg
build-php-apache-stg:
	docker compose --file docker-compose.php-apache.stg-build.yml build

up-stg:
	docker compose --file docker-compose.php-apache.stg.yml down
	docker image rm 841930785297.dkr.ecr.us-west-2.amazonaws.com/jobope-web-app
	aws ecr get-login-password --region us-west-2 | docker login --username AWS --password-stdin 841930785297.dkr.ecr.us-west-2.amazonaws.com
	docker compose --file docker-compose.php-apache.stg.yml up -d

down-stg:
	docker compose --file docker-compose.php-apache.stg.yml down

sh-app-stg:
	docker compose --file docker-compose.php-apache.stg.yml exec web-app bash

sh-db-stg:
	docker compose --file docker-compose.php-apache.stg.yml exec db bash

## dev
up-php-apache-dev:
	docker compose --file docker-compose.php-apache.dev.yml up -d

build-php-apache-dev:
	docker compose --file docker-compose.php-apache.dev.yml build

rebuild-up-php-apache-dev:
	docker compose --file docker-compose.php-apache.dev.yml down
	docker compose --file docker-compose.php-apache.dev.yml down --rmi all --volumes --remove-orphans
	docker compose --file docker-compose.php-apache.dev.yml build
	docker compose --file docker-compose.php-apache.dev.yml up -d

down-php-apache-dev:
	docker compose --file docker-compose.php-apache.dev.yml down
logs-php-apache-dev:
	docker compose --file docker-compose.php-apache.dev.yml logs
tinker-php-apache-dev:
	docker compose --file docker-compose.php-apache.dev.yml exec web-app php artisan tinker
destroy-php-apache-dev:
	docker compose --file docker-compose.php-apache.dev.yml down --rmi all --volumes --remove-orphans
destroy-volumes-php-apache-dev:
	docker compose --file docker-compose.php-apache.dev.yml down --volumes --remove-orphans
sh-web-app-php-apache-dev:
	docker compose --file docker-compose.php-apache.dev.yml exec web-app bash
sh-db-php-apache-dev:
	docker compose --file docker-compose.php-apache.dev.yml exec db bash
migrate-php-apache-dev:
	docker compose --file docker-compose.php-apache.dev.yml exec web-app php artisan migrate
key-generate-php-apache-dev:
	docker compose --file docker-compose.php-apache.dev.yml exec web-app php artisan key:generate
sql-php-apache-dev:
	docker compose --file docker-compose.php-apache.dev.yml exec db bash -c 'mysql -u $$MYSQL_USER -p$$MYSQL_PASSWORD $$MYSQL_DATABASE'


## ローカル
up-php-apache-local:
	docker compose -f docker-compose.php-apache.yml up -d
build-php-apache-local:
	docker compose -f docker-compose.php-apache.yml build
down-php-apache-local:
	docker compose -f docker-compose.php-apache.yml down
logs-php-apache-local:
	docker compose -f docker-compose.php-apache.yml logs -f
tinker-php-apache-local:
	docker compose -f docker-compose.php-apache.yml exec web-app php artisan tinker
destroy-php-apache-local:
	docker compose -f docker-compose.php-apache.yml down --rmi all --volumes --remove-orphans
destroy-volumes-php-apache-local:
	docker compose -f docker-compose.php-apache.yml down --volumes --remove-orphans
sh-web-app-php-apache-local:
	docker compose -f docker-compose.php-apache.yml exec web-app bash
sh-db-php-apache-local:
	docker compose -f docker-compose.php-apache.yml exec db bash
migrate-php-apache-local:
	docker compose -f docker-compose.php-apache.yml exec web-app php artisan migrate
key-generate-php-apache-local:
	docker compose -f docker-compose.php-apache.yml exec web-app php artisan key:generate
sql-php-apache-local:
	docker compose -f docker-compose.php-apache.yml exec db bash -c 'mysql -u $$MYSQL_USER -p$$MYSQL_PASSWORD $$MYSQL_DATABASE'