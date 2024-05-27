var myMap1;
var myMap2;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap1 = new ymaps.Map('map1', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [55.76, 37.64], // Москва
        zoom: 10
    }, {
        searchControlProvider: 'yandex#search'
    }),
    myMap2 = new ymaps.Map('map2', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [50, 40], // Москва
        zoom: 8
    }, {
        searchControlProvider: 'yandex#search'
    });

    document.getElementById('destroyButton').onclick = function () {
        // Для уничтожения используется метод destroy.
        myMap1.destroy();
    };

}