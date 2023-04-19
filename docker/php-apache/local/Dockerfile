FROM php:8.2-apache-bullseye
SHELL ["/bin/bash", "-oeux", "pipefail", "-c"]

# timezone
ENV TZ=Asia/Tokyo

# language
ENV LANG=ja_JP.UTF-8 \
  LANGUAGE=ja_JP:ja \
  LC_ALL=ja_JP.UTF-8

RUN apt-get update && \
  apt-get install -y locales && \
  apt-get clean && \
  locale-gen ja_JP.UTF-8 && \
  localedef -f UTF-8 -i ja_JP ja_JP.UTF-8

# composer
ENV COMPOSER_ALLOW_SUPERUSER=1 \
  COMPOSER_HOME=/composer

COPY --from=composer:2.1 /usr/bin/composer /usr/bin/composer

# package
RUN apt-get update && \
  apt-get -y install git libicu-dev libonig-dev libzip-dev unzip nodejs npm vim

# nodeのバージョン指定
RUN npm install -g n && \
  n 16.14.2

# 元々入っていたnodeを削除する
#RUN apt purge nodejs npm && \
#  apt autoremove

# php
RUN docker-php-ext-install intl pdo_mysql zip bcmath

# apache2
ENV APACHE_LOG_DIR=/var/log/apache2

# copy
COPY ./docker/php-apache/local/php/php.ini /usr/local/etc/php/php.ini
COPY ./docker/php-apache/local/apache2/000-default.conf /etc/apache2/sites-available/000-default.conf
COPY ./docker/php-apache/local/apache2/security.conf /etc/apache2/conf-available/security.conf
COPY ./docker/php-apache/local/bin/docker-php-entrypoint.sh /usr/local/bin/docker-php-entrypoint

# workdir
WORKDIR /var/www/html

#RUN composer install --optimize-autoloader --no-dev

RUN chmod 755 /usr/local/bin/docker-php-entrypoint

# mod_rewrite
RUN a2enmod rewrite && \
  a2enmod info && \
  a2enmod expires && \
  a2enmod headers

