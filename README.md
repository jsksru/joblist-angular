# Тестовый проект Angular
Проект для тестового задания на должность junior angular developer.
В качестве GraphQL API выбрано [Spacex Land](https://api.spacex.land/graphql/)

По большему счету в данном проекте GraphQL используется только 2 раза для получения
данных (весь список кораблей и данные по одному кораблю) что в корне неправильно.
Выбрал данное API так как в нем был большой функционал по запросам, но не хватило
поиска по неполной строке и отбора кораблей по массиву портов. А делать много лишних
запросов я не захотел, а может просто не разобрался как надо.
В дальнейшем попробую дополнить проект своим API чтобы иметь функционал поиска
по строке текста и отбору по массиву значений.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
