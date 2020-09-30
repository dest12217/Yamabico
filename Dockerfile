FROM php:7.0-apache
RUN mv /etc/apache2/mods-available/headers.load /etc/apache2/mods-enabled/headers.load
