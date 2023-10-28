# Money Card Hero



# Описание трека
Необходимо создать продукт на основе опубликованных API-стандартов OpenBanking и API ВТБ c аутентификацией по стандарту Open ID Connect. Ожидаемый результат — технологический прототип решения с описанием технологического, бизнес-, пользовательского и др. сценариев.

Сейчас взаимодействие по открытым интерфейсам между игроками финансового рынка не унифицировано, что создает сложности и замедляет развитие API для самых разных отраслей. ВТБ — один из флагманов внедрения стандартов открытого банкинга на российском рынке. Банк работает в тесном взаимодействии с ЦБ РФ и на основе предоставляемых ЦБ спецификаций открытых программных интерфейсов.

В решении необходимо описать UI, в первую очередь интересует логика интерфейса, а него его стиль. В качестве решения мы хотим получить приложение (веб, мобайл, чат-бот), исходный код, демо-видео продукта, swagger, презентаций.


UPD: ссылка на шаблон питча для всех треков: https://docs.google.com/presentation/d/1Zjn0M6K5QLbqnZ7u3nUQMVU7m0DJLz5-/edit?usp=sharing&ouid=114220032833562343370&rtpof=true&sd=true
 

Бизнес требования:
Продукт должен использовать минимум один API из предложенного списка в своем жизненном цикле:
API заявки на кредитные карты
API для кредита наличными
API для дебитовых карт
API для заявок на ипотеку
API автокредитования 
API ВТБ id "Входа через ВТБ" 
API Платежей (Мобильные)
API Платежей (универсальные)
API Платежей (Штрафы)
API Платежей (Из каталога)
API Выпуск цифровой предоплаченной карты в мобильных приложениях/на сайтах партнеров Банка
API платежного метода для оплаты на кассах Партнеров с помощью QR – кода.
API Гарантийный конвейер: интеграция с партнерскими API (РЖД)
API Дорога Лида

Ссылки на API ВТБ:
- https://redoc.bankingapi.ru/client-account-info/ 
- https://redoc.bankingapi.ru/client-payments-by-third-party/ 
- https://redoc.bankingapi.ru/periodic-payments-with-variable-details/ 
- https://redoc.bankingapi.ru/management-of-credit-institution-products/ 
- https://redoc.bankingapi.ru/payment-of-fines/ 
- https://redoc.bankingapi.ru/service-provider-directory-search-services/ 
- https://redoc.bankingapi.ru/mobile-operator-payment-service/ 
- https://redoc.bankingapi.ru/payment-service-with-basic-payment-scenario/ 
- https://redoc.bankingapi.ru/fl-card-emission-requests/ 
- https://redoc.bankingapi.ru/fl-card-operational-requests/
- https://redoc.bankingapi.ru/fl-card-information-requests/
- https://redoc.bankingapi.ru/cash-loan-applications/ 
- https://redoc.bankingapi.ru/reviewing-applications-for-express-guarantees/
- https://redoc.bankingapi.ru/operations-with-leads/ 
- https://redoc.bankingapi.ru/paying-for-bonuses-with-points/


Ссылки на документацию OpenBanking:
Открытый банкинг — https://cbr.ru/fintech/acts/?la.Search=&la.TagId=3&la.VidId=26&la.Date.Time=Any&la.Date.DateFrom=&la.Date.DateTo=

 

Технические требования и ограничения:
Допустимо использовать только сервисы, владельцами которых являются компании зарегистрированные в РФ.
Также допустимо использовать opensource библиотеки. Запрещается использовать проприетарные библиотеки, в том числе те которыми владеете вы.

 

Критерии отборочного этапа:
1. Реализуемость сутевой части идеи на API Открытого банкинга (большая часть решения использует API из списка Открытого банкинга);
2. Как часто встречается проблема, которую решает данное приложение;
3. Уникальность/новизна;
4. Заявлена аутентификация через Open ID connect;
5. Наличие User flow (CJM);
6. Оценка презентации.
