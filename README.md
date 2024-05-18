# TeamSearch
## Ссылка на сайт
https://4th-king.github.io/TeamSearch/
## Цель проекта
Создание сервиса, который решает проблему поиска команды для различных спортивных соревнований, включая киберспорт. По оставленным анкетам люди смогут создавать и набирать людей в команду или присоединяться к уже существующим. Для активных пользователей Telegram сервис был занесен в Telegram Mini App https://t.me/TeamSearchProjectBot
# Задачи проекта
- [x] Генерация идеи проекта
- [x] Создание макета в Figma
- [x] Написание Fronted
- [x] Создание БД
- [x] Подключение БД к проекту 
- [ ] Итоговое представление проекта
# Стек технологий
React, CSS, Firebase

# Навигация по сайту
## HomePage
При входе на сайт вас встречает домашнаяя страница с карточками, на которых подробно расписаны цели и преимущества нашего сервиса, а так же панель навигации в шапке сайта и ссылки на информационные источники в подвале сайта.

![](https://github.com/4th-KiNG/TeamSearch/blob/master/src/assets/readme/Home.gif)

## Регистрация и авторизация
Для того, чтобы перейти к основной странице с анкетами необходимо зарегестрироваться. Авторицация выполнена с помощью Firebase Auth и содержит в себе обработку ошибок при некорректном заполнении полей авторизации.

![](https://github.com/4th-KiNG/TeamSearch/blob/master/src/assets/readme/Login.gif)

## Личный кабинет
После регистрации пользователь попадает в личный кабинет, где он может более подробно заполнить данные о себе и настроить свою аватарку. Также в личном кабинете представлены все заявки, созданные данным пользователем.

![](https://github.com/4th-KiNG/TeamSearch/blob/master/src/assets/readme/LK.gif)

## Страница с анкетами
При переходе на основную страницу с анкетами пользователь может открывать и просматривать все созданные заявки, фильтровать их или создать свою.

![](https://github.com/4th-KiNG/TeamSearch/blob/master/src/assets/readme/Filters.gif)

![](https://github.com/4th-KiNG/TeamSearch/blob/master/src/assets/readme/Create.gif)

## About us
В данном разделе пользователь может немного прочитать про наш сервис и оставить отзыв, указав свою почту и по желанию номер телефона.

![](https://github.com/4th-KiNG/TeamSearch/blob/master/src/assets/readme/About.gif)

После отправки, отзыв приходит на нашу почту, где мы можем ознакомиться с ним и улучшить наш сервис.

![](https://github.com/4th-KiNG/TeamSearch/blob/master/src/assets/readme/Callback.jpg)

# Реализация
## Frontend
Весь frontend был написан на react js + css. К сожалению так как о typescript и модульных scss стилях стало известно после нулевой версии, было принято решение не переписывать весть проект под данные технологии. 
## Backend
В связи с уходом основного backend разработчика было решено сделать авторизацию пользователей с помощью firebase auth, хранение информации о пользователях с помощью firebase firestore, а для хранения аватарок использовалось firebase storage. Обращение к БД было реализованно при помощи кастомного хука useStore. 
## Loader
На сайте так же присутсвует так называемый loader, который позволяет скрыть интерфейс до подгрузки всех данных.

# Дизайн Figma
https://www.figma.com/file/8EuyGfSJeu3lmER23CPo0k/Design?type=design&mode=design&t=LX5zRSH45DxIuqnb-1
