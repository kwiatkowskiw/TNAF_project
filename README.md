
# TNAF_PROJECT

Aplikacja do przeglądania produktów z możliwością filtrowania produktów pod względem kategorii oraz minimalnej i maksymalnej ceny produktu. Przy przeglądaniu produktów została zastosowana paginacja. Aplikacja została udostępniona jako GitHubPages.
## 
Strona internetowa: https://kwiatkowskiw.github.io/TNAF_project/ , jednakże do jego działania wymaga uruchomienia JSON-SERVER




## Legenda

- [Instalacja](#Instalacja)
- [Technologie](#Technologie)
- [Referencje](#Referencje)


## Instalacja

Po sklonowaniu projektu na naszym systemie instalacja i uruchomienie projektu opiera się na uruchomieniu poleceń z poziomu pliku Makefile lub NPM

### Makefile

```bash
  make install
  make start_developing
  make start_api
```

### NPM

```bash
  npm ci
  npm run dev
  npm run start_api
```

## Technologie

- Vue (aplikacja interaktywna do frontu)
- Typescript (typowany język programowania)
- JSON-SERVER (nasz fejkowy back-end do zarządzania produktami)
- SASS (arkusz stylów do zaprojektowania naszego UI)
- Vee-Validate (plugin do walidacji ceny minimalnej i maksymalnej)
- Vue-Router (plugin do zarządzania routem na stronie)
- Eslint (analizator kodu Typescript [ts, js])
- Prettier (formatowanie kodu)
- Stylelint (analizator kodu SASS)
- Chrome DevTools (narzędzie dla developera w przeglądarce)
- Makefile (uruchamianie skryptów)


## Referencje

#### Przydatne komendy na bazie pliku Makefile


| Komenda       | Opis          |
| :-------      | :-------    |
| `make install`| `czysta instalacja zależności z package.lock.json`|
| `make start_developing`| `uruchomienie projektu w trybie developerskim`|
| `make start_api`| `uruchomienie fake API`|
| `make build`| `budowanie projektu w trybie produktywnym`|
| `make preview`| `podgląd projektu w trybie produktywnym`|
| `make prettier_fix`| `uruchomienie formatowania kodu`|
| `make lint`| `uruchomienie analizatora kodu JS i TS`|
| `make lint_fix`| `poprawienie ewentualnych błędów w plikach JS i TS`|
| `make style_lint`| `uruchomienie analizatora kodu SCSS`|
| `make style_lint_fix`| `poprawienie ewentualnych błędów w plikach SCSS`|
| `make dev_tools`| `uruchomienie analizatora kodu JS, TS i SCSS`|
| `make fix`| `poprawienie ewentualnych błędów przy formatowaniu kodu, plikach JS, TS oraz SCSS`|




