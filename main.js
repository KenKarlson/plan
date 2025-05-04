// === Переменные ===
const plans = {
  js: [
    {
      day: "1",
      theme: "Введение в JS. Установка среды разработки",
      task: "Установить VSCode и открыть DevTools в браузере. Написать первый скрипт",
      resources:
        "<a href='https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Introduction' target='_blank'>MDN Introduction</a>",
      example: 'console.log("Hello World");',
    },
    {
      day: "2",
      theme: "Переменные и типы данных",
      task: "Объявить переменные с let, const, var. Определить их типы",
      resources:
        "<a href='https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/let' target='_blank'>Variables MDN</a>",
      example: 'let age = 25; const name = "John";',
    },
    {
      day: "3",
      theme: "Операторы и выражения",
      task: "Выполнить математические операции, сравнения и логические проверки",
      resources:
        "<a href='https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Expressions_and_operators' target='_blank'>Expressions and Operators</a>",
      example: "let result = 5 + 3; console.log(result > 7);",
    },
    {
      day: "4",
      theme: "Условные конструкции",
      task: "Написать условия if, else if, else, тернарный оператор",
      resources:
        "<a href='https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/if...else' target='_blank'>Conditional Statements</a>",
      example: 'let age = 18; let access = age >= 18 ? "allowed" : "denied";',
    },
    {
      day: "5",
      theme: "Циклы",
      task: "Использовать for, while, do...while для вывода чисел",
      resources:
        "<a href='https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Loops_and_iteration' target='_blank'>Loops and iteration</a>",
      example: "for (let i = 1; i <= 10; i++) { console.log(i); }",
    },
    {
      day: "6",
      theme: "Массивы",
      task: "Создать массивы, изменять элементы, использовать методы push, pop, shift, unshift",
      resources:
        "<a href='https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array' target='_blank'>Array MDN</a>",
      example: 'let fruits = ["apple", "banana"]; fruits.push("orange");',
    },
    {
      day: "7",
      theme: "Методы массивов",
      task: "Использовать map, filter, forEach, find",
      resources:
        "<a href='https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods' target='_blank'>Array methods</a>",
      example: "let nums = [1,2,3]; let doubled = nums.map(n => n * 2);",
    },
    {
      day: "8",
      theme: "Строки",
      task: "Работать с методами строк: toUpperCase, slice, split, indexOf",
      resources:
        "<a href='https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String' target='_blank'>String MDN</a>",
      example: 'let text = "hello"; let upper = text.toUpperCase();',
    },
    {
      day: "9",
      theme: "Функции",
      task: "Создать функции через function, function expression, arrow function",
      resources:
        "<a href='https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Functions' target='_blank'>Functions</a>",
      example: "const sum = (a, b) => a + b;",
    },
    {
      day: "10",
      theme: "Параметры и аргументы функций",
      task: "Передавать параметры, работать с arguments",
      resources:
        "<a href='https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/arguments' target='_blank'>Function parameters</a>",
      example: "function sum(...nums) { return nums.reduce((a,b)=>a+b); }",
    },
    {
      day: "11",
      theme: "Объекты",
      task: "Создать объект, добавлять/удалять свойства, использовать методы",
      resources:
        "<a href='https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Working_with_objects' target='_blank'>Working with objects</a>",
      example: 'let user = { name: "Alice", greet() { console.log("Hi") } };',
    },
    {
      day: "12",
      theme: "Работа с объектами",
      task: "Использовать Object.keys, values, entries, деструктуризацию",
      resources:
        "<a href='https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object' target='_blank'>Object static methods</a>",
      example: "let keys = Object.keys(user);",
    },
    {
      day: "13",
      theme: "this и контекст выполнения",
      task: "Изучить работу this внутри функций и методов",
      resources:
        "<a href='https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this' target='_blank'>this MDN</a>",
      example: "obj.method = function() { console.log(this); }",
    },
    {
      day: "14",
      theme: "ООП в JS",
      task: "Создать конструкторы, работать с прототипами",
      resources:
        "<a href='https://developer.mozilla.org/ru/docs/Web/JavaScript/Inheritance_and_the_prototype_chain' target='_blank'>Inheritance and the prototype chain</a>",
      example: "function Person(name) { this.name = name; }",
    },
    {
      day: "15",
      theme: "Классы и наследование",
      task: "Создать классы через class, использовать extends, super",
      resources:
        "<a href='https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes' target='_blank'>Classes MDN</a>",
      example:
        "class Student extends Person { constructor(name, grade) { super(name); this.grade = grade; } }",
    },
    {
      day: "16",
      theme: "DOM и события",
      task: "Получить элементы DOM, повесить слушатель событий",
      resources:
        "<a href='https://developer.mozilla.org/ru/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents' target='_blank'>DOM Manipulation</a>",
      example:
        'document.getElementById("btn").addEventListener("click", () => alert("Clicked"));',
    },
    {
      day: "17",
      theme: "Работа с атрибутами и стилями",
      task: "Изменять классы, стили, атрибуты элементов",
      resources:
        "<a href='https://developer.mozilla.org/ru/docs/Web/API/Element/classList' target='_blank'>Element.classList</a>",
      example: 'element.style.color = "red"; element.classList.add("active");',
    },
    {
      day: "18",
      theme: "События мыши и клавиатуры",
      task: "Реагировать на клик, нажатие клавиш, наведение",
      resources:
        "<a href='https://developer.mozilla.org/ru/docs/Web/Events' target='_blank'>Event reference</a>",
      example: 'document.addEventListener("keydown", e => console.log(e.key));',
    },
    {
      day: "19",
      theme: "Формы и валидация",
      task: "Получить данные формы, проверить заполненность полей",
      resources:
        "<a href='https://developer.mozilla.org/ru/docs/Learn/Forms/Form_validation' target='_blank'>Form handling</a>",
      example:
        'const form = document.querySelector("form"); form.addEventListener("submit", (e) => { e.preventDefault(); });',
    },
    {
      day: "20",
      theme: "JSON и работа с данными",
      task: "Преобразовать объект в JSON и обратно",
      resources:
        "<a href='https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON' target='_blank'>JSON MDN</a>",
      example: "let json = JSON.stringify(obj); let obj = JSON.parse(json);",
    },
    {
      day: "21",
      theme: "Промисы",
      task: "Понять, что такое промис, как он работает",
      resources:
        "<a href='https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise' target='_blank'>Promise MDN</a>",
      example: 'let p = new Promise((resolve, reject) => resolve("done"));',
    },
    {
      day: "22",
      theme: "then/catch/finally",
      task: "Обрабатывать результат промиса, ошибки",
      resources:
        "<a href='https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/then' target='_blank'>Promise.prototype.then()</a>",
      example:
        "p.then(res => console.log(res)).catch(err => console.error(err));",
    },
    {
      day: "23",
      theme: "async/await",
      task: "Переписать цепочки промисов через async/await",
      resources:
        "<a href='https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/async_function' target='_blank'>async function</a>",
      example:
        "async function getData() { try { let res = await fetch(url); } catch (err) { } }",
    },
    {
      day: "24",
      theme: "Fetch API",
      task: "Отправить GET-запрос к публичному API",
      resources:
        "<a href='https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch' target='_blank'>Using Fetch</a>",
      example:
        "fetch('https://jsonplaceholder.typicode.com/posts') .then(res => res.json())",
    },
    {
      day: "25",
      theme: "POST-запросы",
      task: "Отправить данные на сервер с помощью fetch",
      resources:
        "<a href='https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch#body' target='_blank'>POST request with fetch</a>",
      example: "fetch('/api', { method: 'POST', body: JSON.stringify(data) })",
    },
    {
      day: "26",
      theme: "localStorage и sessionStorage",
      task: "Сохранять и читать данные из localStorage",
      resources:
        "<a href='https://developer.mozilla.org/ru/docs/Web/API/Web_Storage_API' target='_blank'>Web Storage API</a>",
      example:
        'localStorage.setItem("name", "John"); let name = localStorage.getItem("name");',
    },
    {
      day: "27",
      theme: "Работа с датой и временем",
      task: "Получить текущую дату, форматировать её",
      resources:
        "<a href='https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date' target='_blank'>Date MDN</a>",
      example: "let now = new Date(); console.log(now.toLocaleDateString());",
    },
    {
      day: "28",
      theme: "Регулярные выражения",
      task: "Проверить email, номер телефона с помощью регулярных выражений",
      resources:
        "<a href='https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Regular_expressions' target='_blank'>Regular Expressions</a>",
      example: "/^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$/.test(email)",
    },
    {
      day: "29",
      theme: "Error Handling",
      task: "Использовать try/catch, генерировать собственные ошибки",
      resources:
        "<a href='https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Control_flow_and_error_handling' target='_blank'>Error handling</a>",
      example:
        'try { throw new Error("Something went wrong"); } catch (err) { console.error(err); }',
    },
    {
      day: "30",
      theme: "Мини-проект: Калькулятор",
      task: "Реализовать простой калькулятор с интерфейсом",
      resources: "-",
      example: "function calculate(op) { ... }",
    },
    {
      day: "31",
      theme: "Введение в Vue. CDN-подключение",
      task: "Подключить Vue через CDN, вывести Hello World с помощью интерполяции",
      resources:
        "<a href='https://vuejs.org/guide/quick-start.html#using-vue-from-cdn' target='_blank'>Vue CDN Guide</a>",
      example:
        "{{ message }} в шаблоне, new Vue({ data: { message: 'Hello' } })",
    },
    {
      day: "32",
      theme: "Основы синтаксиса",
      task: "Использовать директивы v-text, v-html, v-show",
      resources:
        "<a href='https://vuejs.org/guide/essentials/template-syntax.html' target='_blank'>Vue Template Syntax</a>",
      example: '<p v-text="text"></p>, <p v-html="htmlContent"></p>',
    },
    {
      day: "33",
      theme: "Реактивные данные",
      task: "Создать реактивное состояние с помощью data, изменять его",
      resources:
        "<a href='https://vuejs.org/guide/essentials/reactivity-fundamentals.html' target='_blank'>Reactivity Fundamentals</a>",
      example: "data() { return { count: 0 } }, count++ при клике",
    },
    {
      day: "34",
      theme: "Условия и циклы",
      task: "Отображать элементы по условию, выводить список с v-for",
      resources:
        "<a href='https://vuejs.org/guide/essentials/conditional.html' target='_blank'>Conditional Rendering</a>, <a href='https://vuejs.org/guide/essentials/list.html' target='_blank'>List Rendering</a>",
      example:
        '<div v-if="isVisible">Visible</div>, <li v-for="item in items">{{ item }}</li>',
    },
    {
      day: "35",
      theme: "События и методы",
      task: "Обрабатывать события кнопок, вызывать методы",
      resources:
        "<a href='https://vuejs.org/guide/essentials/event-handling.html' target='_blank'>Event Handling</a>",
      example: '@click="increment", methods: { increment() { this.count++ } }',
    },
    {
      day: "36",
      theme: "Двустороннее связывание",
      task: "Использовать v-model для формы",
      resources:
        "<a href='https://vuejs.org/guide/essentials/forms.html' target='_blank'>Form Input Bindings</a>",
      example: "<input v-model=\"username\">, data: { username: '' }",
    },
    {
      day: "37",
      theme: "Вычисляемые свойства",
      task: "Использовать computed для фильтрации или преобразования данных",
      resources:
        "<a href='https://vuejs.org/guide/essentials/computed.html' target='_blank'>Computed Properties</a>",
      example: "computed: { filteredList() { return list.filter(...) } }",
    },
    {
      day: "38",
      theme: "Наблюдатели",
      task: "Использовать watch для отслеживания изменений",
      resources:
        "<a href='https://vuejs.org/guide/essentials/watchers.html' target='_blank'>Watchers</a>",
      example: "watch: { searchQuery(newVal, oldVal) { ... } }",
    },
    {
      day: "39",
      theme: "Компоненты",
      task: "Создать первый компонент, зарегистрировать и использовать",
      resources:
        "<a href='https://vuejs.org/guide/components/registration.html' target='_blank'>Components Basics</a>",
      example:
        "const MyComponent = { template: '<p>Hello</p>' }; components: { MyComponent }",
    },
    {
      day: "40",
      theme: "Передача данных в компоненты (props)",
      task: "Передавать данные из родителя в дочерний компонент",
      resources:
        "<a href='https://vuejs.org/guide/components/props.html' target='_blank'>Props</a>",
      example: "props: ['title'], <MyComponent title=\"Home\" />",
    },
    {
      day: "41",
      theme: "Передача событий из компонента ($emit)",
      task: "Отправлять события из дочернего компонента",
      resources:
        "<a href='https://vuejs.org/guide/components/events.html' target='_blank'>Component Events</a>",
      example: "this.$emit('update', value), @update=\"handleUpdate\"",
    },
    {
      day: "42",
      theme: "Жизненный цикл компонента",
      task: "Изучить хуки created, mounted, updated, destroyed",
      resources:
        "<a href='https://vuejs.org/guide/essentials/lifecycle.html' target='_blank'>Instance Lifecycle Hooks</a>",
      example: "mounted() { console.log('Component mounted'); }",
    },
    {
      day: "43",
      theme: "Директивы",
      task: "Создать собственную директиву, например, автофокус",
      resources:
        "<a href='https://vuejs.org/guide/reusability/custom-directives.html' target='_blank'>Custom Directives</a>",
      example:
        "v-focus, directives: { focus: { mounted(el) { el.focus(); } } }",
    },
    {
      day: "44",
      theme: "Классы и стили",
      task: "Управлять классами и стилями через объекты и массивы",
      resources:
        "<a href='https://vuejs.org/guide/essentials/class-and-style.html' target='_blank'>Class and Style Bindings</a>",
      example: ':class="{ active: isActive }", :style="{ color: textColor }"',
    },
    {
      day: "45",
      theme: "Axios и работа с API",
      task: "Получать данные с внешнего API и отображать их",
      resources:
        "<a href='https://axios-http.com/docs/intro' target='_blank'>HTTP Requests with Axios</a>",
      example: "axios.get('/api/users').then(res => this.users = res.data)",
    },
    {
      day: "46",
      theme: "Vuex – основы",
      task: "Настроить хранилище Vuex, работать с state и getters",
      resources:
        "<a href='https://vuex.vuejs.org/guide/' target='_blank'>Vuex Core Concepts</a>",
      example: "store.state.count, getters.totalPrice",
    },
    {
      day: "47",
      theme: "Actions и Mutations",
      task: "Менять состояние через mutations, асинхронные действия через actions",
      resources:
        "<a href='https://vuex.vuejs.org/guide/state.html' target='_blank'>Vuex State Updates</a>",
      example: "commit('increment'), dispatch('fetchData')",
    },
    {
      day: "48",
      theme: "Modules в Vuex",
      task: "Разделить store на модули для масштабирования",
      resources:
        "<a href='https://vuex.vuejs.org/guide/modules.html' target='_blank'>Vuex Modules</a>",
      example: "modules: { cart, user }",
    },
    {
      day: "49",
      theme: "Vue Router – маршруты",
      task: "Настроить маршрутизацию, создать несколько страниц",
      resources:
        "<a href='https://router.vuejs.org/' target='_blank'>Vue Router Guide</a>",
      example: "path: '/about', component: AboutView",
    },
    {
      day: "50",
      theme: "Динамические маршруты",
      task: "Использовать параметры в URL (/user/:id)",
      resources:
        "<a href='https://router.vuejs.org/guide/advanced/lazy-loading.html' target='_blank'>Dynamic Routes</a>",
      example: "$route.params.id, path: '/user/:id'",
    },
    {
      day: "51",
      theme: "Lazy loading",
      task: "Подгружать страницы только при необходимости",
      resources:
        "<a href='https://router.vuejs.org/guide/advanced/lazy-loading.html' target='_blank'>Lazy Loading Routes</a>",
      example: "component: () => import('../views/About.vue')",
    },
    {
      day: "52",
      theme: "Mixins",
      task: "Создать миксины для повторяющейся логики",
      resources:
        "<a href='https://vuejs.org/guide/scaling-up/project-structure.html#mixins' target='_blank'>Mixins</a>",
      example: "mixins: [formMixin]",
    },
    {
      day: "53",
      theme: "Composition API – базовые понятия",
      task: "Переписать компонент с Options API на Composition API",
      resources:
        "<a href='https://vuejs.org/guide/scaling-up/project-structure.html' target='_blank'>Composition API</a>",
      example: "setup() { const count = ref(0); return { count } }",
    },
    {
      day: "54",
      theme: "Composition API – хуки и кастомные функции",
      task: "Использовать onMounted, watch, ref, reactive",
      resources:
        "<a href='https://vuejs.org/api/composition-api-lifecycle.html' target='_blank'>Composition API Lifecycle</a>",
      example: "onMounted(() => { ... })",
    },
    {
      day: "55",
      theme: "Пагинация и фильтрация",
      task: "Реализовать клиентскую пагинацию и фильтрацию",
      resources: "-",
      example: "computed: { paginatedItems() { ... } }",
    },
    {
      day: "56",
      theme: "Мини-проект: интернет-магазин",
      task: "Создать магазин с каталогом товаров и корзиной",
      resources: "-",
      example: "-",
    },
    {
      day: "57",
      theme: "Vue CLI – создание проекта",
      task: "Установить Vue CLI, создать новый проект",
      resources:
        "<a href='https://cli.vuejs.org/' target='_blank'>Vue CLI Docs</a>",
      example: "vue create my-app",
    },
    {
      day: "58",
      theme: "Структура проекта Vue CLI",
      task: "Разобраться с файловой структурой проекта",
      resources: "-",
      example: "src/main.js, App.vue, components/, views/",
    },
    {
      day: "59",
      theme: "Стилизация компонентов",
      task: "Использовать scoped, CSS modules, глобальные стили",
      resources:
        "<a href='https://vuejs.org/guide/scaling-up/project-structure.html#single-file-component-specific-rules' target='_blank'>Scoped Styles</a>",
      example: "<style scoped>.btn { color: red }</style>",
    },
    {
      day: "60",
      theme: "UI-библиотеки",
      task: "Подключить Vuetify или Element Plus",
      resources:
        "<a href='https://vuetifyjs.com/en/getting-started/quick-start/' target='_blank'>Vuetify Getting Started</a>, <a href='https://element-plus.org/#/en-US' target='_blank'>Element Plus</a>",
      example: "import { Button } from 'element-plus'; app.use(Button)",
    },
    {
      day: "61",
      theme: "Тестирование Vue-компонентов",
      task: "Написать тесты с использованием Jest и Vue Test Utils",
      resources:
        "<a href='https://vuejs.org/guide/scaling-up/project-structure.html#testing' target='_blank'>Vue Testing</a>",
      example:
        "test('renders correctly', () => { expect(wrapper.text()).toContain('Hello') })",
    },
    {
      day: "62",
      theme: "Деплой проекта",
      task: "Залить проект на Netlify, Vercel или GitHub Pages",
      resources:
        "<a href='https://vuejs.org/guide/best-practices/deployment.html' target='_blank'>Deploying Vue App</a>",
      example: "npm run build, загрузить dist-папку на хостинг",
    },
    {
      day: "63",
      theme: "Анимации и переходы",
      task: "Добавить анимации между маршрутами и элементами",
      resources:
        "<a href='https://vuejs.org/guide/built-ins/transition.html' target='_blank'>Transitions</a>",
      example:
        '<Transition name="fade"><div v-if="show">Text</div></Transition>',
    },
    {
      day: "64",
      theme: "SEO и метатеги",
      task: "Добавить тайтлы и описания страниц",
      resources:
        "<a href='https://vue-meta.vercel.app/guide/' target='_blank'>Vue Meta</a>",
      example: "metaInfo: { title: 'Home' }",
    },
    {
      day: "65",
      theme: "Internationalization (i18n)",
      task: "Добавить поддержку нескольких языков",
      resources:
        "<a href='https://vue-i18n.intlify.dev/' target='_blank'>Vue I18n</a>",
      example: "$t('welcome.message')",
    },
    {
      day: "66",
      theme: "PWA и Service Workers",
      task: "Преобразовать проект в Progressive Web App",
      resources:
        "<a href='https://cli.vuejs.org/core-plugins/pwa.html' target='_blank'>Vue PWA</a>",
      example: "vue add pwa",
    },
    {
      day: "67",
      theme: "Vuex Persist",
      task: "Сохранять состояние в localStorage",
      resources:
        "<a href='https://www.npmjs.com/package/vuex-persist' target='_blank'>Vuex-Persist</a>",
      example: "plugins: [new VuexPersist().plugin]",
    },
    {
      day: "68",
      theme: "Роутинг с авторизацией",
      task: "Защищать маршруты, проверять наличие токена",
      resources: "-",
      example:
        "beforeEach((to, from, next) => { if (auth) next(); else next('/login') })",
    },
    {
      day: "69",
      theme: "WebSocket",
      task: "Подключиться к чату или обновлениям в реальном времени",
      resources: "<a href='https://socket.io/' target='_blank'>Socket.io</a>",
      example: "socket.on('message', msg => this.messages.push(msg))",
    },
    {
      day: "70",
      theme: "SVG и графика",
      task: "Добавить диаграммы с D3.js или Chart.js",
      resources:
        "<a href='https://d3js.org/' target='_blank'>D3.js</a>, <a href='https://www.chartjs.org/' target='_blank'>Chart.js</a>",
      example: "new Chart(ctx, config)",
    },
    {
      day: "71",
      theme: "Аутентификация",
      task: "Реализовать вход/выход с JWT",
      resources: "-",
      example: "localStorage.setItem('token', token)",
    },
    {
      day: "72",
      theme: "Пагинация с API",
      task: "Запрашивать данные с сервера постранично",
      resources: "-",
      example: "axios.get(`/api/data?page=${currentPage}`)",
    },
    {
      day: "73",
      theme: "Фильтрация и сортировка",
      task: "Реализовать фильтрацию по полям и сортировку",
      resources: "-",
      example:
        "computed: { sortedProducts() { return _.orderBy(this.products, 'price') } }",
    },
    {
      day: "74",
      theme: "Уведомления и модальные окна",
      task: "Добавить систему уведомлений и модальных окон",
      resources:
        "<a href='https://github.com/Maronato/vue-toastification' target='_blank'>Vue Toastification</a>",
      example: 'toast.success("Item added")',
    },
    {
      day: "75",
      theme: "Корзина товаров",
      task: "Реализовать добавление, удаление и подсчёт суммы",
      resources: "-",
      example: "cart: [{ id, qty, price }, ...], total = cart.reduce(...)",
    },
    {
      day: "76",
      theme: "Checkout и оплата",
      task: "Интегрировать Stripe/PayPal (макет)",
      resources:
        "<a href='https://stripe.com/docs/stripe-js' target='_blank'>Stripe Elements</a>",
      example: "elements.create('card')",
    },
    {
      day: "77",
      theme: "Админ-панель",
      task: "Создать CRUD для управления товарами",
      resources: "-",
      example: "POST /products, PUT /products/:id, DELETE /products/:id",
    },
    {
      day: "78",
      theme: "Дашборд",
      task: "Добавить графики и аналитику",
      resources:
        "<a href='https://apexcharts.com/docs/vue-charts/' target='_blank'>Vue ApexCharts</a>",
      example: '<apexchart :options="..." :series="..."/>',
    },
    {
      day: "79",
      theme: "Личный кабинет",
      task: "Реализовать редактирование профиля пользователя",
      resources: "-",
      example: "PATCH /users/me",
    },
    {
      day: "80",
      theme: "История заказов",
      task: "Отображать список покупок",
      resources: "-",
      example: "GET /orders?userId=...",
    },
    {
      day: "81",
      theme: "Push-уведомления",
      task: "Настроить уведомления о новых заказах",
      resources:
        "<a href='https://firebase.google.com/docs/cloud-messaging' target='_blank'>Firebase Cloud Messaging</a>",
      example:
        "messaging.onMessage(payload => toast.info(payload.notification.title))",
    },
    {
      day: "82",
      theme: "IndexedDB и кэширование",
      task: "Реализовать локальное кэширование данных",
      resources:
        "<a href='https://developer.mozilla.org/ru/docs/Web/API/IndexedDB_API' target='_blank'>IndexedDB API</a>",
      example: "indexedDB.open('my-db')",
    },
    {
      day: "83",
      theme: "Производительность и оптимизация",
      task: "Применить lazy loading, memoization, code splitting",
      resources:
        "<a href='https://vuejs.org/guide/best-practices/performance.html' target='_blank'>Performance Tips</a>",
      example: "v-once, keep-alive, Suspense",
    },
    {
      day: "84",
      theme: "Итоговый проект: SPA",
      task: "Создать полноценное приложение: интернет-магазин с авторизацией, корзиной и админкой",
      resources: "-",
      example: "-",
    },
    {
      day: "85",
      theme: "Работа с формами и валидацией",
      task: "Реализовать форму регистрации с валидацией на стороне клиента",
      resources:
        "<a href='https://vee-validate.logaretm.com/v4/' target='_blank'>VeeValidate</a>",
      example: 'v-validate="required|email"',
    },
    {
      day: "86",
      theme: "JWT-авторизация",
      task: "Реализовать систему входа/выхода с токенами JWT",
      resources: "-",
      example:
        "axios.post('/login', { email, password }).then(res => localStorage.setItem('token', res.token))",
    },
    {
      day: "87",
      theme: "Роутинг с авторизацией",
      task: "Создать защищённые маршруты, доступные только авторизованным пользователям",
      resources:
        "<a href='https://router.vuejs.org/guide/advanced/navigation-guards.html' target='_blank'>Vue Router Navigation Guards</a>",
      example:
        "beforeEach((to, from, next) => { if (store.getters.isAuthenticated) next(); else next('/login') })",
    },
    {
      day: "88",
      theme: "Интернационализация (i18n)",
      task: "Добавить поддержку нескольких языков в приложение",
      resources:
        "<a href='https://vue-i18n.intlify.dev/guide/' target='_blank'>Vue I18n Documentation</a>",
      example: "$t('buttons.submit'), $t('welcome.message')",
    },
    {
      day: "89",
      theme: "Темизация и динамическая смена темы",
      task: "Реализовать возможность переключения между светлой и тёмной темой",
      resources: "-",
      example:
        "computed: { themeClass() { return this.darkMode ? 'dark' : 'light' } }, data: { darkMode: false }",
    },
    {
      day: "90",
      theme: "Финальный проект — интернет-магазин",
      task: "Собрать всё вместе: каталог товаров, корзина, оплата, админка, авторизация, фильтрация, пагинация, локализация",
      resources: "-",
      example: "-",
    },
  ],
  golang: [
    {
      day: "1",
      theme: "Установка Go и настройка среды разработки",
      task: "Установить Go, проверить версию, создать первый Hello World",
      resources:
        "<a href='https://go.dev/dl/' target='_blank'>Официальная установка Go</a>",
      example:
        'package main\nimport "fmt"\nfunc main() {\n    fmt.Println("Hello, World!")\n}',
    },
    {
      day: "2",
      theme: "Переменные и типы данных",
      task: "Изучить var, :=, базовые типы (int, string, bool)",
      resources:
        "<a href='https://go.dev/ref/spec#Variables' target='_blank'>Go переменные</a>",
      example: 'var a int = 42\nb := "text"',
    },
    {
      day: "3",
      theme: "Константы и операторы",
      task: "Работа с const, арифметические и логические операции",
      resources:
        "<a href='https://go.dev/ref/spec#Constants' target='_blank'>Go константы</a>",
      example: "const Pi = 3.14\nresult := 5 + 3",
    },
    {
      day: "4",
      theme: "Условия if/else",
      task: "Использовать условия в Go",
      resources:
        "<a href='https://go.dev/ref/spec#If_statements' target='_blank'>Go условия</a>",
      example:
        'if age > 18 {\n    fmt.Println("Adult")\n} else {\n    fmt.Println("Minor")\n}',
    },
    {
      day: "5",
      theme: "Циклы for",
      task: "Изучить цикл for, классический и условный",
      resources:
        "<a href='https://go.dev/ref/spec#For_statements' target='_blank'>Go циклы</a>",
      example: "for i := 0; i < 10; i++ { fmt.Println(i) }",
    },
    {
      day: "6",
      theme: "Массивы и срезы",
      task: "Создавать и использовать массивы и срезы",
      resources:
        "<a href='https://go.dev/ref/spec#Array_types' target='_blank'>Массивы</a>, <a href='https://go.dev/ref/spec#Slice_types' target='_blank'>Срезы</a>",
      example: "arr := [3]int{1, 2, 3}\nslice := []int{1, 2, 3}",
    },
    {
      day: "7",
      theme: "Карты (map)",
      task: "Использовать map для хранения пар ключ-значение",
      resources:
        "<a href='https://go.dev/ref/spec#Map_types' target='_blank'>Go maps</a>",
      example:
        'user := map[string]string{\n    "name": "Alice",\n    "role": "dev",\n}',
    },
    {
      day: "8",
      theme: "Функции",
      task: "Создание и вызов функций",
      resources:
        "<a href='https://go.dev/ref/spec#Function_declarations' target='_blank'>Функции в Go</a>",
      example: "func add(a, b int) int {\n    return a + b\n}",
    },
    {
      day: "9",
      theme: "Множественный возврат из функций",
      task: "Использовать несколько возвращаемых значений",
      resources:
        "<a href='https://go.dev/ref/spec#Return_statements' target='_blank'>Return в Go</a>",
      example:
        'func divide(a, b float64) (float64, error) {\n    if b == 0 {\n        return 0, errors.New("division by zero")\n    }\n    return a / b, nil\n}',
    },
    {
      day: "10",
      theme: "Указатели",
      task: "Изучить работу с указателями",
      resources:
        "<a href='https://go.dev/ref/spec#Address_operators' target='_blank'>Pointers в Go</a>",
      example:
        "func increment(x *int) {\n    *x++\n}\nnum := 5\nincrement(&num)",
    },
    {
      day: "11",
      theme: "Structs — пользовательские типы",
      task: "Создавать структуры и работать с ними",
      resources:
        "<a href='https://go.dev/ref/spec#Struct_types' target='_blank'>Structs в Go</a>",
      example:
        'type User struct {\n    Name string\n    Age  int\n}\nu := User{Name: "Alice", Age: 30}',
    },
    {
      day: "12",
      theme: "Методы",
      task: "Создавать методы для структур",
      resources:
        "<a href='https://go.dev/tour/methods/1' target='_blank'>Go Tour - Methods</a>",
      example: 'func (u User) Greet() {\n    fmt.Println("Hi, ", u.Name)\n}',
    },
    {
      day: "13",
      theme: "Интерфейсы",
      task: "Изучить работу с интерфейсами",
      resources:
        "<a href='https://go.dev/tour/methods/9' target='_blank'>Interfaces в Go</a>",
      example: "type Shape interface {\n    Area() float64\n}",
    },
    {
      day: "14",
      theme: "Packages и импорт",
      task: "Работать с пакетами, создать свой пакет",
      resources:
        "<a href='https://go.dev/tour/basics/1' target='_blank'>Packages в Go</a>",
      example: "package math\nfunc Add(a, b int) int {\n    return a + b\n}",
    },
    {
      day: "15",
      theme: "Error Handling",
      task: "Изучить обработку ошибок через error",
      resources:
        "<a href='https://go.dev/blog/error-handling-and-go' target='_blank'>Error handling</a>",
      example: "if err != nil {\n    log.Fatal(err)\n}",
    },
    {
      day: "16",
      theme: "Strings и работа с текстом",
      task: "Изучить строки, их методы и форматирование",
      resources:
        "<a href='https://pkg.go.dev/strings' target='_blank'>Пакет strings</a>",
      example: 's := "hello world"\nupper := strings.ToUpper(s)',
    },
    {
      day: "17",
      theme: "Работа с файлами",
      task: "Чтение и запись файлов в Go",
      resources: "<a href='https://pkg.go.dev/os' target='_blank'>os.File</a>",
      example: 'file, _ := os.Create("test.txt")\nfile.WriteString("content")',
    },
    {
      day: "18",
      theme: "Работа с директориями и путями",
      task: "Создание, удаление, чтение директорий",
      resources:
        "<a href='https://pkg.go.dev/os#ReadDir' target='_blank'>os.ReadDir</a>",
      example: 'dirs, _ := os.ReadDir(".")',
    },
    {
      day: "19",
      theme: "JSON и работа с данными",
      task: "Кодировать и декодировать JSON",
      resources:
        "<a href='https://pkg.go.dev/encoding/json' target='_blank'>JSON в Go</a>",
      example: "data, _ := json.Marshal(user)",
    },
    {
      day: "20",
      theme: "Time и дата",
      task: "Работать с датой и временем",
      resources:
        "<a href='https://pkg.go.dev/time' target='_blank'>Time в Go</a>",
      example: "now := time.Now()\nfmt.Println(now.Format(time.RFC3339))",
    },
    {
      day: "21",
      theme: "Работа с регулярными выражениями",
      task: "Использовать regexp для поиска и замены",
      resources:
        "<a href='https://pkg.go.dev/regexp' target='_blank'>Regexp в Go</a>",
      example: "re := regexp.MustCompile(`\\d+`)",
    },
    {
      day: "22",
      theme: "Работа с флагами командной строки",
      task: "Создавать CLI-приложения с флагами",
      resources:
        "<a href='https://pkg.go.dev/flag' target='_blank'>flag package</a>",
      example: 'port := flag.Int("port", 8080, "server port")',
    },
    {
      day: "23",
      theme: "Testing и тестирование кода",
      task: "Писать unit-тесты на Go",
      resources:
        "<a href='https://pkg.go.dev/testing' target='_blank'>Testing в Go</a>",
      example: "func TestAdd(t *testing.T) { ... }",
    },
    {
      day: "24",
      theme: "Benchmarking",
      task: "Проводить бенчмаркинг кода",
      resources:
        "<a href='https://pkg.go.dev/testing#hdr-Benchmarks' target='_blank'>Benchmarks</a>",
      example: "func BenchmarkAdd(b *testing.B) { ... }",
    },
    {
      day: "25",
      theme: "Работа с HTTP клиентом",
      task: "Делать GET-запросы и обрабатывать ответы",
      resources:
        "<a href='https://pkg.go.dev/net/http' target='_blank'>net/http</a>",
      example: 'res, _ := http.Get("https://api.example.com/data")',
    },
    {
      day: "26",
      theme: "HTTP сервер",
      task: "Создать простой веб-сервер",
      resources:
        "<a href='https://pkg.go.dev/net/http#ListenAndServe' target='_blank'>HTTP сервер</a>",
      example:
        'http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) { fmt.Fprintf(w, "Hello") })\nhttp.ListenAndServe(":8080", nil)',
    },
    {
      day: "27",
      theme: "Middleware и маршрутизация",
      task: "Добавлять middleware и маршруты",
      resources:
        "<a href='https://github.com/go-chi/chi' target='_blank'>Chi router</a>",
      example: 'r.Use(middleware.Logger)\nr.Get("/users/{id}", userHandler)',
    },
    {
      day: "28",
      theme: "Работа с базами данных",
      task: "Подключаться к SQL-базам, выполнять запросы",
      resources:
        "<a href='https://pkg.go.dev/database/sql' target='_blank'>database/sql</a>",
      example:
        'db, _ := sql.Open("mysql", "user:pass@tcp(localhost:3306)/dbname")',
    },
    {
      day: "29",
      theme: "CRUD с БД",
      task: "Выполнять INSERT, SELECT, UPDATE, DELETE",
      resources:
        "<a href='https://jmoiron.github.io/sqlx/' target='_blank'>sqlx</a>",
      example:
        'var name string\ndb.QueryRow("SELECT name FROM users WHERE id=1").Scan(&name)',
    },
    {
      day: "30",
      theme: "Мини-проект: API сервер",
      task: "Создать простой REST API сервер",
      resources: "-",
      example: "-",
    },
    {
      day: "31",
      theme: "Concurrency и горутины",
      task: "Запускать задачи параллельно через go",
      resources:
        "<a href='https://go.dev/tour/concurrency/1' target='_blank'>Goroutines</a>",
      example: "go doSomething()\ngo doAnother()",
    },
    {
      day: "32",
      theme: "Каналы (channels)",
      task: "Обмениваться данными между горутинами",
      resources:
        "<a href='https://go.dev/tour/concurrency/2' target='_blank'>Channels</a>",
      example: 'ch := make(chan string)\nch <- "message"\nmsg := <-ch',
    },
    {
      day: "33",
      theme: "WaitGroup и управление горутинами",
      task: "Ждать завершения всех горутин",
      resources:
        "<a href='https://pkg.go.dev/sync#WaitGroup' target='_blank'>sync.WaitGroup</a>",
      example:
        "var wg sync.WaitGroup\nwg.Add(1)\ngo func() { defer wg.Done(); ... }()\nwg.Wait()",
    },
    {
      day: "34",
      theme: "Mutex и блокировка",
      task: "Работать с конкурентным доступом к данным",
      resources:
        "<a href='https://pkg.go.dev/sync#Mutex' target='_blank'>sync.Mutex</a>",
      example: "var mu sync.Mutex\nmu.Lock()\ndata.Counter++\nmu.Unlock()",
    },
    {
      day: "35",
      theme: "Context и отмена операций",
      task: "Использовать context.Context в HTTP и горутинах",
      resources:
        "<a href='https://pkg.go.dev/context' target='_blank'>context</a>",
      example:
        "ctx, cancel := context.WithCancel(context.Background())\ncancel()",
    },
    {
      day: "36",
      theme: "Работа с Gorilla Mux",
      task: "Использовать маршрутизатор Gorilla Mux",
      resources:
        "<a href='https://github.com/gorilla/mux' target='_blank'>Gorilla Mux</a>",
      example:
        'router := mux.NewRouter()\nrouter.HandleFunc("/users/{id}", getUser)',
    },
    {
      day: "37",
      theme: "Работа с Echo Framework",
      task: "Создать сервер на легковесном фреймворке",
      resources:
        "<a href='https://echo.labstack.com/' target='_blank'>Echo Framework</a>",
      example:
        'e := echo.New()\ne.GET("/", func(c echo.Context) error { return c.String(http.StatusOK, "Hello") })',
    },
    {
      day: "38",
      theme: "Шаблоны и HTML-рендеринг",
      task: "Использовать html/template для генерации HTML",
      resources:
        "<a href='https://pkg.go.dev/html/template' target='_blank'>html/template</a>",
      example:
        'tmpl, _ := template.ParseFiles("template.html")\ntmpl.Execute(w, data)',
    },
    {
      day: "39",
      theme: "Forms и обработка ввода",
      task: "Обрабатывать формы и POST-запросы",
      resources:
        "<a href='https://pkg.go.dev/net/http#Request.ParseForm' target='_blank'>ParseForm</a>",
      example: 'r.ParseForm()\nusername := r.FormValue("username")',
    },
    {
      day: "40",
      theme: "Работа с куками и сессиями",
      task: "Устанавливать и читать cookies",
      resources:
        "<a href='https://pkg.go.dev/net/http#Cookie' target='_blank'>Cookies</a>",
      example: 'http.SetCookie(w, &http.Cookie{Name: "auth", Value: "token"})',
    },
    {
      day: "41",
      theme: "Работа с gorilla/sessions",
      task: "Добавить поддержку сессий в приложение",
      resources:
        "<a href='https://github.com/gorilla/sessions' target='_blank'>gorilla/sessions</a>",
      example:
        'session, _ := store.Get(r, "session-name")\nsession.Values["user"] = "Alice"',
    },
    {
      day: "42",
      theme: "Работа с gorilla/mux: параметры, маршруты",
      task: "Работать с параметрами маршрутов",
      resources:
        "<a href='https://github.com/gorilla/mux' target='_blank'>Mux Router</a>",
      example: 'vars := mux.Vars(r)\nid := vars["id"]',
    },
    {
      day: "43",
      theme: "Работа с Gorilla Websocket",
      task: "Создать WebSocket сервер и клиент",
      resources:
        "<a href='https://github.com/gorilla/websocket' target='_blank'>WebSockets</a>",
      example:
        'conn, _ := upgrader.Upgrade(w, r, nil)\ngo func() { conn.WriteMessage(websocket.TextMessage, []byte("Hello")) }()',
    },
    {
      day: "44",
      theme: "Работа с ORM (например, GORM)",
      task: "Использовать GORM для работы с БД",
      resources: "<a href='https://gorm.io/docs/' target='_blank'>GORM</a>",
      example: "db.First(&user, 1)\ndb.Create(&User{...})",
    },
    {
      day: "45",
      theme: "Migrations и модели",
      task: "Создавать миграции и работать с моделями",
      resources:
        "<a href='https://gorm.io/docs/migration.html' target='_blank'>GORM Migrations</a>",
      example: "db.AutoMigrate(&User{})",
    },
    {
      day: "46",
      theme: "Работа с Gin Framework",
      task: "Создать сервер на Gin",
      resources:
        "<a href='https://gin-gonic.com/docs/' target='_blank'>Gin Framework</a>",
      example:
        'r := gin.Default()\nr.GET("/", func(c *gin.Context) { c.JSON(200, gin.H{"status": "ok"}) })',
    },
    {
      day: "47",
      theme: "Работа с gRPC",
      task: "Создать gRPC сервер и клиент",
      resources:
        "<a href='https://grpc.io/docs/languages/go/basics/' target='_blank'>gRPC</a>",
      example:
        'service "myapp" {\n  rpc SayHello (HelloRequest) returns (HelloResponse);\n}',
    },
    {
      day: "48",
      theme: "Работа с Protobuf",
      task: "Использовать Protobuf для сериализации",
      resources:
        "<a href='https://protobuf.dev/programming-guides/proto3/' target='_blank'>Protobuf</a>",
      example: "message Person { string name = 1; int32 id = 2; }",
    },
    {
      day: "49",
      theme: "Работа с JSON и XML",
      task: "Кодировать/декодировать JSON и XML",
      resources:
        "<a href='https://pkg.go.dev/encoding/xml' target='_blank'>XML</a>",
      example: "xmlData, _ := xml.Marshal(data)",
    },
    {
      day: "50",
      theme: "Работа с Gorilla Schema",
      task: "Привязка формы к структуре",
      resources:
        "<a href='https://github.com/gorilla/schema' target='_blank'>Gorilla Schema</a>",
      example:
        "decoder := schema.NewDecoder()\n_ = decoder.Decode(&struct{}, r.Form)",
    },
    {
      day: "51",
      theme: "Работа с Gorilla Pat",
      task: "Использовать маршрутизатор Pat",
      resources:
        "<a href='https://github.com/bmizerany/pat' target='_blank'>Pat Router</a>",
      example: 'p := pat.New()\np.Get("/users/{id}", userHandler)',
    },
    {
      day: "52",
      theme: "Работа с Gorilla Context",
      task: "Хранить данные в контексте запроса",
      resources:
        "<a href='https://github.com/gorilla/context' target='_blank'>Gorilla Context</a>",
      example: 'context.Set(r, "user", user)\nuser := context.Get(r, "user")',
    },
    {
      day: "53",
      theme: "Работа с JWT",
      task: "Генерировать и проверять JWT-токены",
      resources:
        "<a href='https://pkg.go.dev/github.com/dgrijalva/jwt-go' target='_blank'>JWT-Go</a>",
      example:
        "token := jwt.New(jwt.SigningMethodHS256)\nsignedToken, _ := token.SignedString(mySigningKey)",
    },
    {
      day: "54",
      theme: "Работа с PostgreSQL",
      task: "Подключиться к PostgreSQL и выполнять запросы",
      resources:
        "<a href='https://github.com/jackc/pgx' target='_blank'>PGX</a>",
      example:
        'conn, _ := pgx.Connect(context.Background(), os.Getenv("DATABASE_URL"))',
    },
    {
      day: "55",
      theme: "Работа с MySQL",
      task: "Работать с MySQL через Go",
      resources:
        "<a href='https://github.com/go-sql-driver/mysql' target='_blank'>MySQL driver</a>",
      example:
        'db, _ := sql.Open("mysql", "user:pass@tcp(localhost:3306)/dbname")',
    },
    {
      day: "56",
      theme: "Работа с Redis",
      task: "Использовать Redis как хранилище данных",
      resources:
        "<a href='https://pkg.go.dev/github.com/go-redis/redis/v8' target='_blank'>Redis</a>",
      example:
        'client := redis.NewClient(&redis.Options{Addr: "localhost:6379"})',
    },
    {
      day: "57",
      theme: "Работа с MongoDB",
      task: "Подключиться к MongoDB и сохранять данные",
      resources:
        "<a href='https://www.mongodb.com/docs/drivers/go/current/usage-examples/' target='_blank'>MongoDB Go</a>",
      example:
        "client, _ := mongo.Connect(ctx, options.Client().ApplyURI(uri))",
    },
    {
      day: "58",
      theme: "Работа с Gorilla Toolkit",
      task: "Использовать набор инструментов Gorilla",
      resources:
        "<a href='https://github.com/gorilla' target='_blank'>Gorilla Project</a>",
      example: "mux, handlers, securecookie, csrf",
    },
    {
      day: "59",
      theme: "Работа с Cobra CLI",
      task: "Создать CLI-приложение с Cobra",
      resources:
        "<a href='https://github.com/spf13/cobra' target='_blank'>Cobra CLI</a>",
      example:
        'cobra.Command{Use: "add", Run: func(cmd *cobra.Command, args []string)}',
    },
    {
      day: "60",
      theme: "Работа с Viper",
      task: "Управление конфигурацией через Viper",
      resources:
        "<a href='https://github.com/spf13/viper' target='_blank'>Viper</a>",
      example: 'viper.SetConfigName("config")\nviper.ReadInConfig()',
    },
    {
      day: "61",
      theme: "Работа с GORM: отношения",
      task: "Создать связи между таблицами",
      resources:
        "<a href='https://gorm.io/docs/' target='_blank'>GORM Relationships</a>",
      example: 'type User { ID uint; Posts []Post `gorm:"foreignkey:UserID"` }',
    },
    {
      day: "62",
      theme: "Работа с GORM: миграции",
      task: "Автоматизировать миграции",
      resources:
        "<a href='https://gorm.io/docs/migration.html' target='_blank'>GORM Migrations</a>",
      example: "db.AutoMigrate(&User{})",
    },
    {
      day: "63",
      theme: "Работа с GORM: CRUD",
      task: "Создать, прочитать, обновить, удалить записи",
      resources:
        "<a href='https://gorm.io/docs/create.html' target='_blank'>GORM CRUD</a>",
      example: "db.Create(&user)\ndb.Find(&users)\ndb.Delete(&user)",
    },
    {
      day: "64",
      theme: "Работа с GORM: Query",
      task: "Фильтровать и выбирать данные",
      resources:
        "<a href='https://gorm.io/docs/query.html' target='_blank'>GORM Queries</a>",
      example: 'db.Where("age > ?", 30).Find(&users)',
    },
    {
      day: "65",
      theme: "Работа с GORM: Update",
      task: "Обновлять записи в БД",
      resources:
        "<a href='https://gorm.io/docs/update.html' target='_blank'>GORM Update</a>",
      example: 'db.Model(&user).Update("name", "Alice")',
    },
    {
      day: "66",
      theme: "Работа с GORM: Delete",
      task: "Удалять данные из БД",
      resources:
        "<a href='https://gorm.io/docs/delete.html' target='_blank'>GORM Delete</a>",
      example: "db.Delete(&user)",
    },
    {
      day: "67",
      theme: "Работа с GORM: Preload",
      task: "Загружать связанные данные",
      resources:
        "<a href='https://gorm.io/docs/preload.html' target='_blank'>GORM Preload</a>",
      example: 'db.Preload("Posts").Find(&users)',
    },
    {
      day: "68",
      theme: "Работа с GORM: Joins",
      task: "Использовать JOIN-запросы",
      resources:
        "<a href='https://gorm.io/docs/advanced_query.html' target='_blank'>Joins</a>",
      example:
        'db.Joins("JOIN emails ON emails.user_id = users.id").Where(...)',
    },
    {
      day: "69",
      theme: "Работа с GORM: Transactions",
      task: "Использовать транзакции",
      resources:
        "<a href='https://gorm.io/docs/transactions.html' target='_blank'>Transactions</a>",
      example: "db.Transaction(func(tx *gorm.DB) error { tx.Create(...) })",
    },
    {
      day: "70",
      theme: "Работа с GORM: Hooks",
      task: "Использовать BeforeCreate, AfterSave и другие",
      resources:
        "<a href='https://gorm.io/docs/hooks.html' target='_blank'>GORM Hooks</a>",
      example:
        "func (u *User) BeforeCreate(tx *gorm.DB) error { u.CreatedAt = time.Now() }",
    },
    {
      day: "71",
      theme: "Работа с GORM: Raw SQL",
      task: "Выполнять SQL-запросы напрямую",
      resources:
        "<a href='https://gorm.io/docs/sql_builder.html' target='_blank'>Raw SQL</a>",
      example: 'db.Raw("SELECT * FROM users").Scan(&users)',
    },
    {
      day: "72",
      theme: "Работа с GORM: Scopes",
      task: "Создавать переиспользуемые части запросов",
      resources:
        "<a href='https://gorm.io/docs/scopes.html' target='_blank'>Scopes</a>",
      example:
        'func FilterByAge(db *gorm.DB) *gorm.DB { return db.Where("age > 18") }',
    },
    {
      day: "73",
      theme: "Работа с GORM: Indexes",
      task: "Создавать и управлять индексами",
      resources:
        "<a href='https://gorm.io/docs/indexes.html' target='_blank'>GORM Indexes</a>",
      example: 'db.Model(&User{}).AddUniqueIndex("idx_user_email", "email")',
    },
    {
      day: "74",
      theme: "Работа с GORM: Optimistic Lock",
      task: "Использовать оптимистичную блокировку",
      resources:
        "<a href='https://gorm.io/docs/optimistic_locking.html' target='_blank'>Optimistic Lock</a>",
      example:
        'db.Model(&user).Where("version = ?", user.Version).Updates(...)',
    },
    {
      day: "75",
      theme: "Работа с GORM: Debug",
      task: "Использовать режим отладки",
      resources:
        "<a href='https://gorm.io/docs/debugging.html' target='_blank'>Debug mode</a>",
      example: 'db.Debug().Where("id = 1").First(&user)',
    },
    {
      day: "76",
      theme: "Работа с GORM: Logging",
      task: "Логировать SQL-запросы",
      resources:
        "<a href='https://gorm.io/docs/logger.html' target='_blank'>GORM Logger</a>",
      example:
        'newLogger := logger.New(log.New(os.Stdout, "\\r\\n", log.LstdFlags), logger.Config{ SlowThreshold: time.Second })',
    },
    {
      day: "77",
      theme: "Работа с GORM: AutoPreload",
      task: "Настроить автоматическую загрузку связанных данных",
      resources:
        "<a href='https://gorm.io/docs/preload.html' target='_blank'>AutoPreload</a>",
      example: 'db.Set("gorm:auto_preload", true).Find(&users)',
    },
    {
      day: "78",
      theme: "Работа с GORM: Custom Types",
      task: "Создавать собственные типы данных",
      resources:
        "<a href='https://gorm.io/docs/customize_data_type.html' target='_blank'>Custom Types</a>",
      example:
        'type MyInt int\nfunc (mi MyInt) GORMValue(db *gorm.DB) clause.Expr { return clause.Expr{SQL: "?", Vars: []interface{}{mi} } }',
    },
    {
      day: "79",
      theme: "Работа с GORM: Composite Primary Key",
      task: "Создавать составные первичные ключи",
      resources:
        "<a href='https://gorm.io/docs/composite_primary_key.html' target='_blank'>Composite Keys</a>",
      example:
        'type UserRole struct { UserID uint `gorm:"primaryKey"`\nRoleID uint `gorm:"primaryKey"` }',
    },
    {
      day: "80",
      theme: "Работа с GORM: Soft Delete",
      task: "Использовать мягкое удаление",
      resources:
        "<a href='https://gorm.io/docs/delete.html#Soft-Delete' target='_blank'>Soft Delete</a>",
      example: "type User struct { gorm.Model }",
    },
    {
      day: "81",
      theme: "Работа с GORM: Tagging",
      task: "Использовать теги в структурах",
      resources:
        "<a href='https://gorm.io/docs/models.html#tags' target='_blank'>Model Tags</a>",
      example: 'type User struct { Name string `gorm:"size:64"` }',
    },
    {
      day: "82",
      theme: "Работа с GORM: Many to Many",
      task: "Создавать связи many-to-many",
      resources:
        "<a href='https://gorm.io/docs/many_to_many.html' target='_blank'>ManyToMany</a>",
      example:
        'type User struct { gorm.Model\nRoles []Role `gorm:"many2many:user_roles;"` }',
    },
    {
      day: "83",
      theme: "Работа с GORM: One To One",
      task: "Создавать one-to-one связи",
      resources:
        "<a href='https://gorm.io/docs/has_one.html' target='_blank'>HasOne</a>",
      example: "type User struct { gorm.Model\nProfile Profile }",
    },
    {
      day: "84",
      theme: "Работа с GORM: One To Many",
      task: "Создавать one-to-many связи",
      resources:
        "<a href='https://gorm.io/docs/has_many.html' target='_blank'>HasMany</a>",
      example: "type User struct { gorm.Model\nPosts []Post }",
    },
    {
      day: "85",
      theme: "Работа с GORM: Belongs To",
      task: "Создавать связи belongs-to",
      resources:
        "<a href='https://gorm.io/docs/belongs_to.html' target='_blank'>BelongsTo</a>",
      example:
        'type Profile struct { gorm.Model\nUserID uint\nUser User `gorm:"foreignKey',
    },
    {
      day: "86",
      theme: "Работа с GORM: Many to Many",
      task: "Создавать many-to-many связи",
      resources:
        "<a href='https://gorm.io/docs/many_to_many.html' target='_blank'>ManyToMany</a>",
      example:
        'type User struct {\n    gorm.Model\n    Roles []Role `gorm:"many2many:user_roles;"`\n}',
    },
    {
      day: "87",
      theme: "Работа с GORM: Transactions",
      task: "Использовать транзакции",
      resources:
        "<a href='https://gorm.io/docs/transactions.html' target='_blank'>Transactions</a>",
      example:
        "db.Transaction(func(tx *gorm.DB) error {\ntx.Create(...)\ntx.Save(...)\nreturn nil\n})",
    },
    {
      day: "88",
      theme: "Работа с GORM: Raw SQL",
      task: "Выполнять SQL-запросы напрямую",
      resources:
        "<a href='https://gorm.io/docs/sql_builder.html' target='_blank'>Raw SQL</a>",
      example: 'db.Raw("SELECT * FROM users").Scan(&users)',
    },
    {
      day: "89",
      theme: "Мини-проект: CLI приложение на Go",
      task: "Создать консольное приложение с Cobra",
      resources: "-",
      example: "-",
    },
    {
      day: "90",
      theme: "Финальный проект: REST API сервер",
      task: "Создать полноценный REST API сервер с CRUD, JWT, базой данных",
      resources: "-",
      example: "-",
    },
  ],
  rust: [
    {
      day: "1",
      theme: "Установка Rust и настройка среды",
      task: "Установить Rust через rustup, проверить версию, создать первый Hello World",
      resources:
        "<a href='https://www.rust-lang.org/tools/install' target='_blank'>Rust установка</a>",
      example: 'fn main() {\n    println!("Hello, world!");\n}',
    },
    {
      day: "2",
      theme: "Переменные и mutability",
      task: "Изучить let, mut, shadowing",
      resources:
        "<a href='https://doc.rust-lang.org/book/ch03-01-variables-and-mutability.html' target='_blank'>Variables</a>",
      example: "let mut x = 5;\nx = 6;",
    },
    {
      day: "3",
      theme: "Типы данных и инференция типов",
      task: "Работать с int, float, bool, char, строками",
      resources:
        "<a href='https://doc.rust-lang.org/book/ch03-02-data-types.html' target='_blank'>Data Types</a>",
      example: 'let guess: u32 = "42".parse().expect("Not a number");',
    },
    {
      day: "4",
      theme: "Константы и неизменяемые переменные",
      task: "Разница между const и let, область видимости",
      resources:
        "<a href='https://doc.rust-lang.org/book/ch03-01-variables-and-mutability.html' target='_blank'>Immutability</a>",
      example: "const MAX_POINTS: u32 = 100_000;",
    },
    {
      day: "5",
      theme: "Условия if/else и match",
      task: "Использовать условия и выражения в Rust",
      resources:
        "<a href='https://doc.rust-lang.org/book/ch03-05-control-flow.html' target='_blank'>Control Flow</a>",
      example:
        'let number = 3;\nif number < 5 {\n    println!("less than five");\n}',
    },
    {
      day: "6",
      theme: "Циклы: loop, while, for",
      task: "Использовать все виды циклов",
      resources:
        "<a href='https://doc.rust-lang.org/book/ch03-05-control-flow.html' target='_blank'>Loops</a>",
      example: 'for number in (1..4).rev() {\n    println!("{}!", number);\n}',
    },
    {
      day: "7",
      theme: "Структуры данных: кортежи и массивы",
      task: "Изучить кортежи и массивы",
      resources:
        "<a href='https://doc.rust-lang.org/book/ch03-02-data-types.html' target='_blank'>Primitive Types</a>",
      example: "let a = [1, 2, 3];\nlet t = (500, 6.4, 1);",
    },
    {
      day: "8",
      theme: "Ownership и Borrowing",
      task: "Понять систему владения и заимствования",
      resources:
        "<a href='https://doc.rust-lang.org/book/ch04-00-understanding-ownership.html' target='_blank'>Ownership</a>",
      example:
        'let s1 = String::from("hello");\nlet len = calculate_length(&s1);',
    },
    {
      day: "9",
      theme: "Structs — пользовательские типы",
      task: "Создавать структуры и работать с ними",
      resources:
        "<a href='https://doc.rust-lang.org/book/ch05-00-structs.html' target='_blank'>Structs</a>",
      example:
        'struct User {\n    username: String,\n    active: bool,\n}\nlet user1 = User { username: String::from("Alice"), active: true }',
    },
    {
      day: "10",
      theme: "Enums и match",
      task: "Изучить перечисления и паттерн match",
      resources:
        "<a href='https://doc.rust-lang.org/book/ch06-00-enums.html' target='_blank'>Enums</a>",
      example:
        "enum IpAddrKind {\n    V4,\n    V6,\n}\nlet four = IpAddrKind::V4;",
    },
    {
      day: "11",
      theme: "Методы и функции",
      task: "Создавать методы для структур",
      resources:
        "<a href='https://doc.rust-lang.org/book/ch05-03-method-syntax.html' target='_blank'>Methods</a>",
      example:
        "impl Rectangle {\n    fn area(&self) -> u32 {\n        self.width * self.height\n    }\n}",
    },
    {
      day: "12",
      theme: "Trait и реализация поведения",
      task: "Создавать trait и реализовывать их",
      resources:
        "<a href='https://doc.rust-lang.org/book/ch10-02-traits.html' target='_blank'>Traits</a>",
      example:
        "trait Summary {\n    fn summarize(&self) -> String;\n}\nimpl Summary for NewsArticle { ... }",
    },
    {
      day: "13",
      theme: "Packages, Crates, Modules",
      task: "Работать с пакетами, крейтами и модулями",
      resources:
        "<a href='https://doc.rust-lang.org/book/ch07-00-modules.html' target='_blank'>Modules</a>",
      example:
        "mod front_of_house {\n    pub mod hosting {\n        pub fn add_to_waitlist() {}\n    }\n}",
    },
    {
      day: "14",
      theme: "Error Handling",
      task: "Обработка ошибок через Result и Option",
      resources:
        "<a href='https://doc.rust-lang.org/book/ch09-00-error-handling.html' target='_blank'>Error handling</a>",
      example: 'let f = File::open("hello.txt")?;',
    },
    {
      day: "15",
      theme: "Более глубокое понимание lifetimes",
      task: "Изучить время жизни ссылок",
      resources:
        "<a href='https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html' target='_blank'>Lifetimes</a>",
      example: "fn longest<'a>(x: &'a str, y: &'a str) -> &'a str { ... }",
    },
    {
      day: "16",
      theme: "Strings и работа с текстом",
      task: "Работать с String, &str, методами строк",
      resources:
        "<a href='https://doc.rust-lang.org/std/string/struct.String.html' target='_blank'>String API</a>",
      example: 'let mut s = String::new();\ns.push_str("text");',
    },
    {
      day: "17",
      theme: "Vectors и коллекции",
      task: "Изучить Vec<T> и работу с ними",
      resources:
        "<a href='https://doc.rust-lang.org/std/vec/struct.Vec.html' target='_blank'>Vec</a>",
      example: "let mut v = Vec::new();\nv.push(1);\nv.pop();",
    },
    {
      day: "18",
      theme: "HashMap и HashSet",
      task: "Работать с хэш-картами и множествами",
      resources:
        "<a href='https://doc.rust-lang.org/std/collections/struct.HashMap.html' target='_blank'>HashMap</a>",
      example:
        'use std::collections::HashMap;\nlet mut scores = HashMap::new();\nscores.insert(String::from("Blue"), 10);',
    },
    {
      day: "19",
      theme: "Iterators и итерации",
      task: "Использовать итераторы для обработки данных",
      resources:
        "<a href='https://doc.rust-lang.org/book/ch13-02-iterators.html' target='_blank'>Iterators</a>",
      example:
        "let v1: Vec<i32> = vec![1, 2, 3];\nlet v2: Vec<_> = v1.iter().map(|x| x + 1).collect();",
    },
    {
      day: "20",
      theme: "Smart Pointers и Box<T>",
      task: "Изучить Box<T> и управление памятью",
      resources:
        "<a href='https://doc.rust-lang.org/book/ch15-00-smart-pointers.html' target='_blank'>Smart Pointers</a>",
      example: 'let b = Box::new(5);\nprintln!("b = {}", *b);',
    },
    {
      day: "21",
      theme: "Работа с файлами",
      task: "Читать и записывать файлы в Rust",
      resources:
        "<a href='https://doc.rust-lang.org/std/fs/struct.File.html' target='_blank'>File I/O</a>",
      example:
        'use std::fs::File;\nuse std::io::prelude::*;\nlet mut file = File::open("test.txt").expect("Failed to open file");',
    },
    {
      day: "22",
      theme: "Работа с директориями",
      task: "Создавать, удалять, читать директории",
      resources:
        "<a href='https://doc.rust-lang.org/std/fs/f.read_dir.html' target='_blank'>Read Dir</a>",
      example:
        'for entry in fs::read_dir(".").unwrap() {\n    let path = entry.unwrap().path();\n    println!("{:?}", path);\n}',
    },
    {
      day: "23",
      theme: "JSON и сериализация/десериализация",
      task: "РаЍ이터 с JSON через serde",
      resources: "<a href='https://serde.rs/' target='_blank'>Serde</a>",
      example:
        "#[derive(Serialize, Deserialize)]\nstruct User {\n    name: String,\n    age: u8,\n}",
    },
    {
      day: "24",
      theme: "Time и дата",
      task: "Работать с временем и датой",
      resources:
        "<a href='https://docs.rs/chrono/latest/chrono/' target='_blank'>Chrono</a>",
      example:
        'use chrono::prelude::*;\nlet dt = Utc::now();\nprintln!("Today is {}", dt.format("%Y-%m-%d"));',
    },
    {
      day: "25",
      theme: "Регулярные выражения",
      task: "Использовать регулярные выражения в Rust",
      resources:
        "<a href='https://docs.rs/regex/latest/regex/' target='_blank'>Regex</a>",
      example:
        'let re = Regex::new(r"\\d+").unwrap();\nlet cap = re.captures("abc123xyz").unwrap();',
    },
    {
      day: "26",
      theme: "Работа с HTTP клиентом",
      task: "Делать GET-запросы и обрабатывать ответы",
      resources:
        "<a href='https://docs.rs/reqwest/latest/reqwest/' target='_blank'>Reqwest</a>",
      example:
        'let body = reqwest::get("https://example.com")\n    .await?\n    .text()\n    .await?;',
    },
    {
      day: "27",
      theme: "HTTP сервер на Actix-web",
      task: "Создать простой веб-сервер на Actix",
      resources: "<a href='https://actix.rs/' target='_blank'>Actix Web</a>",
      example:
        'async fn index() -> HttpResponse {\n    HttpResponse::Ok().body("Hello World!")\n}\n#[actix_web::main]\nasync fn main() -> std::io::Result<()> {\n    HttpServer::new(|| App::new().route("/", web::get().to(index)))\n        .bind("127.0.0.1:8080")?.run().await\n}',
    },
    {
      day: "28",
      theme: "Middleware и маршрутизация",
      task: "Добавлять middleware и маршруты",
      resources:
        "<a href='https://actix.rs/docs/middleware/' target='_blank'>Actix Middleware</a>",
      example:
        'App::new()\n    .wrap(middleware::Logger::default())\n    .service(web::resource("/").route(web::get().to(handler)))',
    },
    {
      day: "29",
      theme: "Работа с базами данных: Diesel ORM",
      task: "Подключиться к SQL-базе через Diesel",
      resources:
        "<a href='http://diesel.rs/guides/getting-started' target='_blank'>Diesel ORM</a>",
      example:
        "use diesel::prelude::*;\nlet connection = establish_connection();\nlet users = users.load::<User>(&connection)",
    },
    {
      day: "30",
      theme: "CRUD операции с базой",
      task: "Выполнять INSERT, SELECT, UPDATE, DELETE",
      resources:
        "<a href='http://diesel.rs/guides/working-with-database/' target='_blank'>Diesel CRUD</a>",
      example:
        'insert_into(users)\n    .values((name.eq("Alice"), email.eq("a@example.com")))\n    .execute(&conn)?;',
    },
    {
      day: "31",
      theme: "Concurrency и async/await",
      task: "Работать с асинхронным кодом",
      resources:
        "<a href='https://doc.rust-lang.org/book/ch13-01-iterators.html' target='_blank'>Async Rust</a>",
      example:
        'async fn fetch_data() -> Result<String, reqwest::Error> {\n    let res = reqwest::get("https://api.example.com/data").await?.text().await?;\n    Ok(res)\n}',
    },
    {
      day: "32",
      theme: "Futures и Tokio Runtime",
      task: "Использовать futures и запускать async-задачи",
      resources:
        "<a href='https://tokio.rs/tokio/tutorial' target='_blank'>Tokio</a>",
      example:
        'tokio::spawn(async {\n    println!("Running in Tokio runtime");\n});',
    },
    {
      day: "33",
      theme: "Channels и передача данных между задачами",
      task: "Использовать каналы для коммуникации",
      resources:
        "<a href='https://docs.rs/tokio/latest/tokio/sync/mpsc/index.html' target='_blank'>MPSC Channels</a>",
      example:
        'let (tx, mut rx) = mpsc::channel(32);\ntx.send("message").await?;\nwhile let Some(msg) = rx.recv().await {\n    println!("Received: {}", msg);\n}',
    },
    {
      day: "34",
      theme: "Mutex и блокировка",
      task: "Использовать Arc<Mutex<T>> для конкурентного доступа",
      resources:
        "<a href='https://doc.rust-lang.org/book/ch16-03-shared-state.html' target='_blank'>Shared State</a>",
      example:
        "let counter = Arc::new(Mutex::new(0));\nlet c = Arc::clone(&counter);\nthread::spawn(move || {\n    let mut num = c.lock().unwrap();\n    *num += 1;\n}).join();",
    },
    {
      day: "35",
      theme: "Testing и тестирование кода",
      task: "Писать unit- и integration-тесты",
      resources:
        "<a href='https://doc.rust-lang.org/book/ch11-01-writing-tests.html' target='_blank'>Writing Tests</a>",
      example:
        "fn add(a: i32, b: i32) -> i32 { a + b }\n#[cfg(test)]\nmod tests {\n    use super::*;\n    #[test]\n    fn test_add() {\n        assert_eq!(add(2, 2), 4);\n    }\n}",
    },
    {
      day: "36",
      theme: "Benchmarking и производительность",
      task: "Проводить бенчмаркинг кода",
      resources:
        "<a href='https://doc.rust-lang.org/unstable-book/library-features/test.html' target='_blank'>Benches</a>",
      example:
        "#[bench]\nfn bench_add(b: &mut Bencher) {\n    b.iter(|| add(2, 2));\n}",
    },
    {
      day: "37",
      theme: "Работа с Serde JSON",
      task: "Сериализовать и десериализовать данные в JSON",
      resources: "<a href='https://serde.rs/' target='_blank'>Serde</a>",
      example:
        "#[derive(Serialize, Deserialize)]\nstruct User {\n    name: String,\n    age: u8,\n}\nlet json = serde_json::to_string(&user)?;\nlet user: User = serde_json::from_str(&json)?;",
    },
    {
      day: "38",
      theme: "Работа с XML и YAML",
      task: "Использовать serde-xml-rs и serde-yaml",
      resources:
        "<a href='https://crates.io/crates/serde-xml-rs' target='_blank'>serde-xml-rs</a>, <a href='https://crates.io/crates/serde_yaml' target='_blank'>serde-yaml</a>",
      example:
        'let yaml = "name: Alice\\nage: 30";\nlet user: User = serde_yaml::from_str(yaml).unwrap();',
    },
    {
      day: "39",
      theme: "Работа с CLI и clap",
      task: "Создавать CLI-приложения с флагами и аргументами",
      resources: "<a href='https://clap.rs/' target='_blank'>Clap</a>",
      example:
        'let matches = Command::new("myapp")\n    .arg(Arg::new("input").short(\'i\').long("input"))\n    .get_matches();',
    },
    {
      day: "40",
      theme: "Работа с Tokio TCP/UDP",
      task: "Создать TCP и UDP серверы и клиенты",
      resources:
        "<a href='https://docs.rs/tokio/latest/tokio/net/tcp/struct.TcpListener.html' target='_blank'>TCP in Tokio</a>",
      example:
        'let listener = TcpListener::bind("127.0.0.1:8080").await?;\nloop {\n    let (stream, _) = listener.accept().await?;\n    tokio::spawn(async move { handle_client(stream).await });\n}',
    },
    {
      day: "41",
      theme: "Работа с Async Traits и Futures",
      task: "Изучить async/await в контексте traits",
      resources:
        "<a href='https://rust-lang.github.io/async-book/03_async_await.html' target='_blank'>Async Book</a>",
      example:
        'async fn get_data() -> Result<String, reqwest::Error> {\n    let res = reqwest::get("https://example.com").await?.text().await?;\n    Ok(res)\n}',
    },
    {
      day: "42",
      theme: "Работа с Tokio JoinHandle",
      task: "Запускать задачи параллельно и ожидать результат",
      resources:
        "<a href='https://docs.rs/tokio/latest/tokio/task/struct.JoinHandle.html' target='_blank'>JoinHandle</a>",
      example:
        "let handle = tokio::spawn(async {\n    // some async code\n});\nhandle.await?",
    },
    {
      day: "43",
      theme: "Работа с Tokio Mutex",
      task: "Использовать мьютексы в async-среде",
      resources:
        "<a href='https://docs.rs/tokio/latest/tokio/sync/struct.Mutex.html' target='_blank'>Tokio Mutex</a>",
      example: "use tokio::sync::Mutex;\nlet data = Arc::new(Mutex::new(0));",
    },
    {
      day: "44",
      theme: "Работа с Tokio RwLock",
      task: "Использовать read/write locks в многопоточной среде",
      resources:
        "<a href='https://docs.rs/tokio/latest/tokio/sync/struct.RwLock.html' target='_blank'>RwLock</a>",
      example:
        'let lock = Arc::new(RwLock::new(5));\n{\n    let n = lock.read().await;\n    println!("n = {}", *n);\n}',
    },
    {
      day: "45",
      theme: "Работа с Tokio Channel",
      task: "Обмениваться данными между задачами",
      resources:
        "<a href='https://docs.rs/tokio/latest/tokio/sync/mpsc' target='_blank'>Channel</a>",
      example:
        'let (tx, mut rx) = mpsc::channel(32);\ntx.send("message").await?;\nassert_eq!(rx.recv().await, Some("message"));',
    },
    {
      day: "46",
      theme: "Работа с Warp Framework",
      task: "Создать HTTP-сервер на Warp",
      resources:
        "<a href='https://github.com/seanmonstar/warp' target='_blank'>Warp</a>",
      example:
        'let hello = warp::path("hello")\n    .map(|| "Hello, World!");\nwarp::serve(hello).run(([127, 0, 0, 1], 3030)).await;',
    },
    {
      day: "47",
      theme: "Работа с Axum Framework",
      task: "Создать веб-приложение на Axum",
      resources:
        "<a href='https://github.com/tokio-rs/axum' target='_blank'>Axum</a>",
      example:
        'async fn hello(Query(params): Query<HashMap<String, String>>) -> String {\n    format!("Hello, {:?}!", params)',
    },
    {
      day: "48",
      theme: "Работа с Hyper HTTP",
      task: "Создать сервер и клиент на Hyper",
      resources:
        "<a href='https://hyper.rs/guides/server/hello-world/' target='_blank'>Hyper</a>",
      example:
        'async fn serve_req(_req: Request<Body>) -> Result<Response<Body>, Infallible> {\n    Ok(Response::new(Body::from("Hello World")))\n}',
    },
    {
      day: "49",
      theme: "Работа с Tonic gRPC",
      task: "Создать gRPC-сервис на Rust",
      resources:
        "<a href='https://github.com/hyperium/tonic' target='_blank'>Tonic</a>",
      example:
        'pub async fn say_hello(&self, request: Request<HelloRequest>) -> Result<Response<HelloReply>, Status> {\n    Ok(Response::new(HelloReply { message: "Hello".into() }))\n}',
    },
    {
      day: "50",
      theme: "Работа с Protobuf",
      task: "Генерировать и использовать Protobuf",
      resources:
        "<a href='https://github.com/pingcap/protobuf' target='_blank'>Protobuf в Rust</a>",
      example:
        "message Person {\n    required string name = 1;\n    required int32 id = 2;\n}",
    },
    {
      day: "51",
      theme: "Работа с prost",
      task: "Использовать prost вместо protobuf",
      resources:
        "<a href='https://github.com/danburkert/prost' target='_blank'>Prost</a>",
      example: "prost::Message::encode(&msg, &mut buf)?;",
    },
    {
      day: "52",
      theme: "Работа с Diesel: migrations",
      task: "Создавать миграции и работать с БД",
      resources:
        "<a href='http://diesel.rs/guides/getting-started' target='_blank'>Migrations</a>",
      example: "diesel setup\n    .table(users)\n    .run()",
    },
    {
      day: "53",
      theme: "Работа с Diesel: модели",
      task: "Создавать модели и связывать с таблицами",
      resources:
        "<a href='http://diesel.rs/guides/first-app/' target='_blank'>Models</a>",
      example:
        "use diesel::prelude::*;\n#[derive(Queryable)]\nstruct User {\n    id: i32,\n    name: String,\n}",
    },
    {
      day: "54",
      theme: "Работа с Diesel: запросы",
      task: "Писать SELECT, WHERE, JOIN",
      resources:
        "<a href='http://diesel.rs/guides/getting-started' target='_blank'>Queries</a>",
      example: 'users.filter(name.like("%Bob%"))',
    },
    {
      day: "55",
      theme: "Работа с Diesel: insert",
      task: "Выполнять INSERT-запросы",
      resources:
        "<a href='http://diesel.rs/guides/getting-started' target='_blank'>Insert</a>",
      example:
        "diesel::insert_into(users)\n    .values(&new_user)\n    .execute(conn)?;",
    },
    {
      day: "56",
      theme: "Работа с Diesel: update",
      task: "Обновлять записи в БД",
      resources:
        "<a href='http://diesel.rs/guides/getting-started' target='_blank'>Update</a>",
      example:
        'diesel::update(users.find(id))\n    .set(name.eq("New Name"))\n    .execute(conn)?;',
    },
    {
      day: "57",
      theme: "Работа с Diesel: delete",
      task: "Удалять записи из базы",
      resources:
        "<a href='http://diesel.rs/guides/getting-started' target='_blank'>Delete</a>",
      example: "diesel::delete(users.find(id))\n    .execute(conn)?;",
    },
    {
      day: "58",
      theme: "Работа с Diesel: join",
      task: "Выполнять JOIN-запросы",
      resources:
        "<a href='http://diesel.rs/guides/associations/' target='_blank'>JOIN</a>",
      example:
        "let query = posts.inner_join(users::table).select((posts::all_columns, users::name));",
    },
    {
      day: "59",
      theme: "Работа с Diesel: preload",
      task: "Загружать связанные данные",
      resources:
        "<a href='http://diesel.rs/guides/relationships/' target='_blank'>Preload</a>",
      example:
        "let post_with_author = Post::with_related(Author::belonging_to(&posts))",
    },
    {
      day: "60",
      theme: "Работа с Diesel: transactions",
      task: "Использовать транзакции",
      resources:
        "<a href='http://diesel.rs/guides/advanced-debugging/' target='_blank'>Transactions</a>",
      example:
        "conn.transaction::<_, diesel::result::Error, _>(|| {\n    diesel::insert_into(...).execute(...)?;\n    Ok(())\n})",
    },
    {
      day: "61",
      theme: "Работа с Tokio: TCP сервер",
      task: "Создать TCP-сервер",
      resources:
        "<a href='https://docs.rs/tokio/latest/tokio/net/tcp/struct.TcpListener.html' target='_blank'>TCP Server</a>",
      example:
        'async fn run_server() -> Result<(), Box<dyn Error>> {\n    let listener = TcpListener::bind("127.0.0.1:8080").await?;',
    },
    {
      day: "62",
      theme: "Работа с Tokio: TCP клиент",
      task: "Создать TCP-клиент",
      resources:
        "<a href='https://docs.rs/tokio/latest/tokio/net/tcp/struct.TcpStream.html' target='_blank'>TCP Client</a>",
      example: 'let stream = TcpStream::connect("127.0.0.1:8080").await?;',
    },
    {
      day: "63",
      theme: "Работа с Tokio: UDP",
      task: "Создать UDP сервер и клиент",
      resources:
        "<a href='https://docs.rs/tokio/latest/tokio/net/struct.UdpSocket.html' target='_blank'>UDP</a>",
      example:
        'let socket = UdpSocket::bind("127.0.0.1:8080").await?;\nlet (size, src) = socket.recv_from(&mut buffer).await?;',
    },
    {
      day: "64",
      theme: "Работа с Tokio: Timers",
      task: "Использовать таймеры и задержки",
      resources:
        "<a href='https://docs.rs/tokio/latest/tokio/time/fn.sleep.html' target='_blank'>Timers</a>",
      example: "tokio::time::sleep(Duration::from_secs(1)).await;",
    },
    {
      day: "65",
      theme: "Работа с Tokio: Select",
      task: "Ожидать выполнения нескольких задач",
      resources:
        "<a href='https://docs.rs/tokio/latest/tokio/macro.select.html' target='_blank'>Select</a>",
      example:
        'tokio::select! {\n    _ = sleep(Duration::from_secs(1)) => {},\n    result = do_something() => { println!("Done: {:?}", result); },\n}',
    },
    {
      day: "66",
      theme: "Работа с Tokio: Join",
      task: "Запускать несколько задач и ждать их завершения",
      resources:
        "<a href='https://docs.rs/tokio/latest/tokio/join!.html' target='_blank'>Join!</a>",
      example: "let (res1, res2) = join!(do_work(), do_other()).unwrap();",
    },
    {
      day: "67",
      theme: "Работа с Tokio: Spawn и Tasks",
      task: "Создавать и управлять задачами",
      resources:
        "<a href='https://docs.rs/tokio/latest/tokio/task/fn.spawn.html' target='_blank'>Tasks</a>",
      example: 'tokio::spawn(async {\n    println!("Task running");\n});',
    },
    {
      day: "68",
      theme: "Работа с Tokio: Shared state",
      task: "Общие данные между задачами",
      resources:
        "<a href='https://tokio.rs/tokio/tutorial/shared-state' target='_blank'>Shared State</a>",
      example: "let state = Arc::new(Mutex::new(Counter { value: 0 }));",
    },
    {
      day: "69",
      theme: "Работа с Tokio: Broadcast",
      task: "Использовать broadcast для отправки сообщений нескольким слушателям",
      resources:
        "<a href='https://docs.rs/tokio/latest/tokio/sync/broadcast' target='_blank'>Broadcast</a>",
      example:
        'let (tx, mut rx1) = broadcast::channel(16);\ntx.send("broadcast message").unwrap();',
    },
    {
      day: "70",
      theme: "Работа с Tokio: Oneshot channel",
      task: "Использовать одноразовые каналы",
      resources:
        "<a href='https://docs.rs/tokio/latest/tokio/sync/oneshot' target='_blank'>Oneshot</a>",
      example:
        'let (tx, rx) = oneshot::channel();\ntx.send("Hi").unwrap();\nlet msg = rx.await.unwrap();',
    },
    {
      day: "71",
      theme: "Работа с Tokio: MPSC channel",
      task: "Использовать multi-producer single-consumer каналы",
      resources:
        "<a href='https://docs.rs/tokio/latest/tokio/sync/mpsc' target='_blank'>MPSC</a>",
      example:
        'let (tx, mut rx) = mpsc::channel(32);\ntx.send("message").await?;\nwhile let Some(msg) = rx.recv().await {\n    println!("Got: {}", msg);\n}',
    },
    {
      day: "72",
      theme: "Работа с Tokio: Fused и select!",
      task: "Использовать fused streams и макрос select! для работы с несколькими задачами",
      resources:
        "<a href='https://docs.rs/tokio/latest/tokio/macro.select.html' target='_blank'>select! in Tokio</a>",
      example:
        'tokio::select! {\n    Some(msg) = rx.recv() => println!("Got message: {}", msg),\n    _ = interval.tick() => println!("Tick"),\n}',
    },
    {
      day: "73",
      theme: "Работа с Tokio: Stream и Sink",
      task: "Изучить работу с потоками данных и отправкой сообщений",
      resources:
        "<a href='https://docs.rs/tokio/latest/tokio/io/trait.AsyncReadExt.html' target='_blank'>Streams and Sinks</a>",
      example:
        "use tokio::io::{AsyncBufReadExt, BufReader};\nlet mut lines = BufReader::new(stream).lines();",
    },
    {
      day: "74",
      theme: "Работа с Tokio: Timers и интервалы",
      task: "Создавать периодические задачи через Interval",
      resources:
        "<a href='https://docs.rs/tokio/latest/tokio/time/struct.Interval.html' target='_blank'>Interval</a>",
      example:
        'let mut interval = tokio::time::interval(Duration::from_secs(1));\nloop {\n    interval.tick().await;\n    println!("Tick every second");\n}',
    },
    {
      day: "75",
      theme: "Работа с Actix-web: маршруты и обработчики",
      task: "Создать сервер на Actix-web с маршрутами и обработчиками",
      resources:
        "<a href='https://actix.rs/docs/' target='_blank'>Actix Web Docs</a>",
      example:
        'async fn index(info: web::Path<(String, u32)>) -> String {\n    format!("Name: {}, age: {}", info.0, info.1)\n}\nweb::resource("/{name}/{id}/index.html")\n    .route(web::get().to(index))',
    },
    {
      day: "76",
      theme: "Работа с Actix-web: middleware",
      task: "Добавлять middleware к HTTP-приложению",
      resources:
        "<a href='https://actix.rs/docs/middleware/' target='_blank'>Middleware</a>",
      example:
        "App::new()\n    .wrap(middleware::Logger::default())\n    .service(index)",
    },
    {
      day: "77",
      theme: "Работа с Actix-web: JSON и формы",
      task: "Обрабатывать JSON и форму-данные в запросах",
      resources:
        "<a href='https://actix.rs/docs/extractors/' target='_blank'>Extractors</a>",
      example:
        'async fn submit(form: web::Form<FormData>) -> HttpResponse {\n    HttpResponse::Ok().body(format!("Name: {}", form.name))\n}',
    },
    {
      day: "78",
      theme: "Работа с Actix-web: state и shared data",
      task: "Передавать общие данные между обработчиками",
      resources:
        "<a href='https://actix.rs/docs/state/' target='_blank'>Shared State</a>",
      example:
        'struct AppState {\n    app_name: String,\n}\nasync fn index(data: web::Data<AppState>) -> String {\n    format!("App name: {}", data.app_name)\n}',
    },
    {
      day: "79",
      theme: "Работа с Actix-web: WebSocket",
      task: "Создать WebSocket сервер",
      resources:
        "<a href='https://github.com/actix/examples/tree/master/websocket' target='_blank'>WebSocket</a>",
      example:
        "fn ws_index(r: HttpRequest, stream: web::Payload) -> Result<HttpResponse> {\n    ws::start(r, stream, MyWebSocketHandler)",
    },
    {
      day: "80",
      theme: "Работа с Actix-web: тестирование",
      task: "Писать тесты для HTTP-обработчиков",
      resources:
        "<a href='https://actix.rs/docs/testing/' target='_blank'>Testing</a>",
      example:
        'let req = test::TestRequest::with_header("content-type", "application/json").to_http_request();',
    },
    {
      day: "81",
      theme: "Работа с Serde: Serialize / Deserialize",
      task: "Изучить сериализацию и десериализацию через serde",
      resources:
        "<a href='https://serde.rs/derive.html' target='_blank'>Serde Derive</a>",
      example:
        "#[derive(Serialize, Deserialize)]\nstruct User {\n    name: String,\n    age: u8,\n}",
    },
    {
      day: "82",
      theme: "Работа с Serde: custom (пользовательская сериализация)",
      task: "Создавать собственные реализации Serialize и Deserialize",
      resources:
        "<a href='https://serde.rs/custom-serialization.html' target='_blank'>Custom Serialization</a>",
      example:
        "impl Serialize for CustomType { ... }\nimpl<'de> Deserialize<'de> for CustomType { ... }",
    },
    {
      day: "83",
      theme: "Работа с Tonic gRPC: клиент",
      task: "Создать gRPC-клиент на Rust",
      resources:
        "<a href='https://github.com/hyperium/tonic' target='_blank'>Tonic</a>",
      example:
        'let mut client = HelloClient::connect("http://[::1]:50051").await?;\nlet request = tonic::Request::new(HelloRequest { name: "Alice" });',
    },
    {
      day: "84",
      theme: "Работа с Tonic gRPC: streaming",
      task: "Работать с потоковыми запросами и ответами",
      resources:
        "<a href='https://github.com/hyperium/tonic/blob/master/examples/src/routeguide/server.rs' target='_blank'>Streaming</a>",
      example:
        "pub async fn route_chat(\n    request: Request<Streaming<Location>>,\n    response: Response<Streaming<RouteNote>>,",
    },
    {
      day: "85",
      theme: "Мини-проект: CLI приложение на Rust",
      task: "Создать консольное приложение с флагами и аргументами",
      resources: "-",
      example: "-",
    },
    {
      day: "86",
      theme: "Мини-проект: TCP чат на Tokio",
      task: "Создать многопользовательский TCP-чат",
      resources: "-",
      example: "-",
    },
    {
      day: "87",
      theme: "Мини-проект: WebSocket чат на Actix",
      task: "Создать простой WebSocket-чат",
      resources: "-",
      example:
        "Этот день — практический. Он направлен на создание простого WebSocket-чата , используя фреймворк Actix-web + WebSocket API . ",
    },
    {
      day: "88",
      theme: "Мини-проект: REST API сервер на Axum",
      task: "Создать полноценный REST API сервер",
      resources: "-",
      example: "-",
    },
    {
      day: "89",
      theme: "Мини-проект: CRUD приложение с базой данных",
      task: "Создать приложение с добавлением, чтением, обновлением и удалением записей",
      resources: "-",
      example: "-",
    },
    {
      day: "90",
      theme: "Финальный проект: Fullstack приложение",
      task: "Создать фронтенд + бэкенд на Rust, соединить с БД",
      resources: "-",
      example: "-",
    },
  ],
};

let currentLang = "js";
let savedProgress = {};
const progressKeyPrefix = "progress-";

// DOM элементы
const tbody = document.querySelector("#plan-table tbody");
const completedCountEl = document.getElementById("completed-count");
const progressPercentEl = document.getElementById("progress-percent");
const progressBarEl = document.getElementById("progress-fill");

const languageButtons = document.querySelectorAll("#language-buttons button");
const planTable = document.querySelector("#plan-table");

// === Функции ===

function loadProgress() {
  const key = `${progressKeyPrefix}${currentLang}`;
  savedProgress = JSON.parse(localStorage.getItem(key)) || {};
}

function saveProgress() {
  const key = `${progressKeyPrefix}${currentLang}`;
  localStorage.setItem(key, JSON.stringify(savedProgress));
}

function updateTable() {
  if (!tbody) return;

  tbody.innerHTML = "";

  const plan = plans[currentLang] || [];

  plan.forEach((item) => {
    const row = document.createElement("tr");
    if (savedProgress[item.day]) row.classList.add("done");

    row.innerHTML = `
      <td>${item.day}</td>
      <td><strong>${item.theme}</strong></td>
      <td>${item.task}</td>
      <td>${item.resources}</td>
      <td><code>${item.example}</code></td>
      <td style="text-align:center;">
        <input type="checkbox" ${
          savedProgress[item.day] ? "checked" : ""
        } data-day="${item.day}" />
      </td>
    `;
    tbody.appendChild(row);
  });

  updateProgress();
}

function updateProgress() {
  const plan = plans[currentLang];
  const total = plan.length;
  const completed = Object.values(savedProgress).filter(Boolean).length;
  const percent = Math.round((completed / total) * 100);

  if (completedCountEl) completedCountEl.textContent = completed;
  if (progressPercentEl) progressPercentEl.textContent = `${percent}%`;
  if (progressBarEl) progressBarEl.style.width = `${percent}%`;
}

function initApp() {
  // Обработчики кнопок выбора языка
  languageButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      languageButtons.forEach((b) => b.classList.remove("active"));
      e.target.classList.add("active");
      currentLang = e.target.dataset.lang;
      loadProgress();
      updateTable();
    });
  });

  // Активируем текущую кнопку
  const activeBtn = document.querySelector(
    `#language-buttons button[data-lang="${currentLang}"]`
  );
  if (activeBtn) activeBtn.classList.add("active");

  // Обработка чекбоксов
  planTable.addEventListener("change", (e) => {
    if (e.target.type === "checkbox") {
      const day = e.target.getAttribute("data-day");
      savedProgress[day] = e.target.checked;
      saveProgress();
      e.target.closest("tr").classList.toggle("done", e.target.checked);
      updateProgress();
    }
  });

  // Загрузка начального состояния
  loadProgress();
  updateTable();
}

// === Инициализация ===
window.addEventListener("DOMContentLoaded", () => {
  initApp();
});
