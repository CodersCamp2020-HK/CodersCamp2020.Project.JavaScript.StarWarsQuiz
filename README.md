# Coders Camp 2020 | Projekt Zespołowy | JavaScript

## Zespół projektowy

Zespół pracował w ramach kursu [CodersCamp](https://coderscamp.pl/).
Aplikację wykonali uczestnicy kursu przy pomocy mentora.
Zachęcamy do odwiedzenia profili członków zespołu, w celu zapoznania się z ich portfolio.

**Mentor**: [Hubert Kawałek](https://github.com/htk4)

**Uczestnicy**:

-   [Anna Marszałek](https://github.com/Ania-Em)
-   [Mateusz Baciak](https://github.com/bat098)
-   [Mateusz Król](https://github.com/KrolMateusz)
-   [Mateusz Kmieć](https://github.com/Haivex)
-   [Tomasz Dudek](https://github.com/dudeek)
-   [Weronika Dziedzic](https://github.com/blackrabbit2)

## Star Wars Quiz

<!--- TODO: dodać gif działającej aplikacji -->

### Demo

Wersja demonstracyjna aplikacji jest dostępna [TUTAJ](https://coderscamp2020-hk.github.io/CodersCamp2020.Project.JavaScript.StarWarsQuiz/index.html).

Powodzenia, niech Moc będzie z Tobą!

### Cel projektu

Celem projektu było napisanie aplikacji wykorzystującej dotychczas nabytą wiedzę z następujących technologi: html, css, javascript.
Zespół projektowy zdecydował się na aplikacje - quiz związaną z tematyką uniwersum Gwiezdnych Wojen. Aplikacja w formie testu jednokrotnego wyboru sprawdza czy użytkownik  rozpoznaję, w zależności od wyboru kategorii, osoby, pojazdy lub statki kosmiczne.

Aplikacja została wykonana wg dostarczonych przez organizatorów CodersCamp wymagań.
Szablon projektu dostępny jest [TUTAJ](https://github.com/CodersCamp2020/CodersCamp2020.Project.JavaScript.StarWarsQuiz/).

### Działanie aplikacji

#### Menu Główne

W menu głównym należy wpisać imię gracza. Następnie wybrać kategorię rozgrywki (domyślnie jest to People). Możliwe Kategorie do wyboru:

-   People — rozpoznawanie jaka postać z uniwersum Star Wars została wyświetlona
-   Vehicles — rozpoznawanie jaki pojazd z uniwersum Star Wars został wyświetlony
-   Starships — rozpoznawanie jaki statek kosmiczny z uniwersum Star Wars został wyświetlony

Ostatni wybór dotyczy poziomu trudności przeciwnika. Możliwe kategorie do wyboru:

-   Padawan - poziom trudności określony jako łatwy
-   Jedi Knight - poziom trudności określony jako średni
-   Jedi Master - poziom trudności określony jaki trudny

W zależności od poziomu trudności przeciwnik będzie uzyskiwał odpowiednią ilość punktów.

##### Zasady gry

Zasady gry wyświetlane sa w formie modalu po naciśnięciu przycisku RULES w menu głównym gry.

##### Sala Chwały / Ranking

Rankin graczy wyświetlany jest po naciśnięciu przycisku RANKING w menu głównym gry.
Istnieją trzy osobne rankingi dla każdej z kategori gry.

#### Rozgrywka — Quiz

Rozgrywka polega na rozpoznawaniu przez użytkownika postaci, pojazdów lub statków kosmicznych (w zależności od wyboru opcji w menu głównym). Pytanie reprezentowane jest przez obrazek oraz zapytanie kto lub co znajduję się na obrazku. W środkowej części ekranu wyświetlane są 4 możliwe odpowiedzi z czego tylko jedna jest poprawna. Po zaznaczeniu (kliknięciu myszką) wybaranej odpowiedzi należy kliknąc przysisk NEXT w celu przejścia od kolejnego pytania. W momencie klikniącia przycisku NEXT aplikacja sprawdzi poprawność zaznaczonej odpowiedzi i poinformuję użytkownika poprzez podświetlenie wybranej odpowiedzi kolorem zielonym w przypadku gdy zaznaczono poprawną odpowiedź. W przypadku niepoprawnego wyboru odpowiedź zaznaczona przez użytkownika zostanie podświetlona na czerwono a prawidłowa odpowiedź na zielono. W każdym quizie losowanycj jest 10 pytań.

#### Ustawienia

Ustawienia aplikacji dostępne są w menu głównym. Uzytkownik może wybrać jedną z trzech kategori rozgrywki (postacie, pojazdy lub statki kosmiczne). Możliwy jest również wyboru poziomu trudności rozgrywki (Padawan - poziom łatwy, Jedi Knight - poziom średni, Jedi Master - poziom trudny). Ponadto w celu rozpoczęcia rozgrywki należy wypełnic pole z imieniem gracza.

### Zmiany wprowadzone w wymaganiach

Lekkim wizualnym zmianą uległ projekt dostarczony przez grafika.

### Zrealizowane dodatkowe zadania

Nasz zespół zrealizował także zadania dodatkowe, wykraczające poza zakres kursu

1. Utowrzony został szablon graficzny aplikacji w programie Figma.

## Development aplikacji

Jeśli chcesz pomóc, w dalszym rozwoju aplikacji, z chęcią przyjmiemy Twoje Pull Requesty.

### Wykorzystywane technologie

W trakcie developmentu wykorzystujemy:

-   JavaScript
-   Web APi dla JavaScript (nie stosujemy żadnych frameworków, czy jQuery)
-   CSS & SCSS, do stylowania aplikacji
-   HTML, do definiowania struktury aplikacji

Pozostałe narzędzia wspomagające pracę:

-   Lodash do pracy z tablicami/obiektami
-   Jest.js do pisania tekstów jednostkowych
-   LocalStorage, do zapisywania najlepszych wyników graczy

### Uruchomienie projektu

Aby uruchomić aplikację na lokalnej maszynie, wykonaj następujące kroki:

1. Zainstaluj zależności za pomocą komendy: `npm install`
2. Wystartuj serwer developerski `npm run start:dev`

Aplikacja będzie dostępna pod adresem [localhost:8765/index.html](http://localhost:8765/index.html)

Kod produkcyjny aplikacji umieszczamy w katalogu `src`.

### Uruchomienie testów

Dodając swoje 5 groszy do naszej aplikacji, pamiętaj o pokryciu kodu testami.
Aby uruchomić testy aplikacji, wykonaj następujące kroki:

1. Zainstaluj zależności za pomocą komendy: `npm install` (jeśli nie zrobiłeś już tego wcześniej).
1. Uruchom testy, wykonując komendę: `npm run test`. Testy z raportem pokrycia uruchomisz za pomocą: `npm run test:cov`.

Kod testów umieszczamy w katalogu `test`.

### Zmienne środowiskowe

Zmienne środowiskowe są określone w pliku `.env`.
Aby je nadpisać, utwórz lokalny plik `.env.local` i powtórz wpisy dla odpowiednich zmiennych.
Przykładowo, plik o zawartości:

```.env
SW_API_BASE_URL = http://localhost:3000/
```

zmieni adres, z jakiego aplikacja będzie korzystać, aby łączyć się z SWApi. Domyślnie jest to zdefiniowane w pliku `.env` na wartość: `https://swapi.dev/api`.

### Organizacja pracy

Praca zespołu była organizowana przy użyciu narzędzi dostarczanych przez GitHub.
Zadania opisywaliśmy za pomocą GitHub Issues i dzieliśmy czas ich wykonania na tygodnie za pomocą GitHub Projects.
Każde z zadań było estymowane przez mentora, dzięki czemu staraliśmy się, aby liczba punktów przypadająca w danym tygodniu na każdą osobę w zespole była podobna.
Jeśli chcesz zaproponować, jakąś zmianę w aplikacji, utwórz nowy Issue, wzorując się na poprzednich.
