restart: down up

up:
		docker-compose up -d
down:
		docker-compose down
build:
		docker-compose build
ps:
		docker-compose ps
test:
		@docker-compose exec php-cli vendor/bin/phpunit --colors=always
bash:
		docker-compose exec php-cli bash
db:
		docker-compose exec pgsql bash
migrate:
		docker-compose exec php-cli php artisan migrate


# Asset commands
npm-install:
		docker-compose exec node npm install
npm-build:
		docker-compose exec node npm run build
npm-dev:
		docker-compose exec node npm run dev
npm-watch:
		docker-compose exec node npm run watch
