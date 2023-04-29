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