# testsForAPI

*Mocha* создает тестовое окружение. *Axios* выполняет вызовы к API. *Chai* — assertion библиотека. 

* Установить [Node.js](https://nodejs.org/en/)
* Установить зависимости `npm install`
* Запустить тест `npm test`

Тест `get_pkk_parcel.js` измеряет скорость запроса и сравнивает ее с заданным значением. Используемые в тесте параметры вынесены в отдельные файлы для 'облегчения' синтаксиса теста, а также для быстрой последующей поддержки автотеста. В .env указан хост, в data вынесены запросы и токен авторизации.

Успешное прохождение теста выглядит так

![image](https://user-images.githubusercontent.com/41630350/193226757-590409ce-0785-4c5c-9eb8-ce7ca22a3c7e.png)

Неуспешное прохождение теста выглядит так

![image](https://user-images.githubusercontent.com/41630350/193227025-0e589b23-7462-4aea-84c9-8914307152fb.png)

### Что можно улучшить: 
* Запуск автотеста в докере, чтобы не зависеть от окружения сервера.
* Использование mocha-allure для красивого отчета. 
