# beer-catalog-test
Тестовое задание. Проект представляет из себя мобильное приложение на стеке Ionic + Angular.

## Развертывание в веб-среде
* Клонировать репозиторий
* Установить зависимости (npm i)
* Выполнить команду "ionic serve"

Веб-приложение будет доступно по пути `http://localhost:8100/`.

## Сборка apk под Android
* Необходимо установить и настроить Android Studio
* Сгенерировать android-проект с помощью capacitor - "ionic capacitor add android"
* Открыть приложение в android-studio - "ionic capacitor open android"
* В строке меню выбрать Build -> Generate Signed Bundle/APK
* Выполнить настройку приложения и закончить сборку

Подробнее: 
https://ionicframework.com/docs/developing/android
https://ionic.io/blog/building-and-releasing-your-capacitor-android-app
