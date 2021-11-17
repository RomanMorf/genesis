При разработки данного приложения я воспользовался следубщими модулями и библиотеками:
- "axios": "^0.24.0",
- "vue": "^2.6.11",
- "vue-router": "^3.2.0",
- "vuex": "^3.4.0"

Приложение работает через хранилище "vuex".
При загрузки страницы - отправляеться зарпос на сервер, во время которого проигрываеться анимация загрузки.
После завершиния загрузки - анимация пропадает, и отрисовываеться контент.
Файлы в хранилище разбиты по названиям, для простоты обслуживания.

Создан фильтр для сокращения длинных цифр, котороый добавляет в конце букву-множитель. Пример: (" 30 К ")

Создано несоклько компонентов, для удобства поддержания кода.
Все стили, кроме специфических - прописаны в каждом компоненте или странице.

Вся логика плеера выненсена в отдельный файл и поключена, где неоходима через "mixins".
Это позволило не дублировать много идентичного кода.

Автопроигрывание видео - работает по наведению мышы на карточку контента.

Создана страница, для отсутствующих путей по сайту. ("page no found")

PS. На странице пользователя я вывел список видео - Get Trending Feed),
так как - Get User Feed не работал. Чтобы так было хоть что-то. 
Заменить его на новый список не составит труда, как только API заработает.