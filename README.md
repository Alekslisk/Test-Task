# Rick and Morty Character Viewer

Это приложение позволяет просматривать персонажей из вселенной "Rick and Morty" с помощью [Rick and Morty API](https://rickandmortyapi.com/). Приложение построено с использованием React и Bootstrap, включает анимацию загрузки и имеет стили в стиле Sci-Fi.

## Оглавление
- [Установка](#установка)
- [Использование](#использование)
- [Структура проекта](#структура-проекта)
- [Компоненты](#компоненты)
- [Стили](#стили)
- [Зависимости](#зависимости)

## Установка

1. Клонируйте репозиторий:

    git clone https://github.com/yourusername/rick-and-morty-character-viewer.git
    cd rick-and-morty-character-viewer


2. Установите зависимости:

    npm install


3. Запустите приложение:

    npm start


Приложение будет доступно по адресу [http://localhost:3000](http://localhost:3000).

## Использование

После запуска приложения вы можете:
- Просматривать список персонажей
- Кликать на персонажа для просмотра его деталей
- Видеть рекомендации по похожим персонажам
- Наслаждаться анимацией загрузки

## Структура проекта

public/
├── images/
│   ├── rick-and-morty-logo.png
│   └── starry-sky.jpg
src/
├── components/
│   ├── CharacterCard.js
│   ├── CharacterDetails.js
│   ├── CharacterList.js
│   ├── Header.js
│   ├── Footer.js
│   ├── Spinner.js
├── services/
│   └── api.js
├── styles/
│   ├── App.css
│   ├── CharacterCard.css
│   ├── CharacterDetails.css
│   ├── CharacterList.css
│   ├── Header.css
│   ├── Footer.css
│   ├── Spinner.css
├── App.js
├── index.js
