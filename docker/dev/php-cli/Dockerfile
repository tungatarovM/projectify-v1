FROM php:7.2-cli

RUN apt-get update && apt-get install -y autoconf g++ make zip \
    && pecl install xdebug \
    && docker-php-ext-enable xdebug

RUN apt-get update && apt-get install -y libmcrypt-dev libpq-dev \
    && pecl install mcrypt-1.0.3 \
    && docker-php-ext-install pdo_pgsql \
    && docker-php-ext-enable mcrypt

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/bin --filename=composer --quiet \
    && mkdir /.composer \
    && chown 1000 -R /.composer

USER 1000

COPY ./docker/dev/php/local /usr/local/etc/php/conf.d
COPY ./docker/dev/php/conf.d /usr/local/etc/php/conf.d

WORKDIR /var/www
