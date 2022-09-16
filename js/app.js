/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/actions.js":
/*!***************************!*\
  !*** ./src/js/actions.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n//код js для сайта\r\nwindow.onload = () => {\r\n  //Код бургера-----------------------------------------------\r\n  const headerBurgerIcon = document.querySelector(\".header__burger\");\r\n  const burgerMenu = document.querySelector(\".header__menu\");\r\n  if (headerBurgerIcon) {\r\n    headerBurgerIcon.addEventListener(\"click\", function () {\r\n      headerBurgerIcon.classList.toggle(\"_active\");\r\n      document.body.classList.toggle(\"_isLocked\");\r\n      burgerMenu.classList.toggle(\"_active\");\r\n    });\r\n  }\r\n  //---------------------------------------------------------\r\n\r\n  if (document.body.classList.contains(\"_mobile\")) {\r\n    const headerArrows = document.querySelectorAll(\".header__arrow\");\r\n    for (const arrow of headerArrows) {\r\n      arrow.addEventListener(\"click\", function () {\r\n        const submenu = this.parentElement.querySelector(\".header__sub-list\");\r\n        if (submenu) {\r\n          submenu.classList.toggle(\"_active\");\r\n          this.classList.toggle(\"_active\");\r\n        }\r\n      });\r\n    }\r\n  }\r\n  const items = [1,2,34];\r\n  const clientsTabsParent = document.querySelector(\".clients__all-tabs\");\r\n  const clientsTabsLinks = document.querySelectorAll(\".clients__tab-link\");\r\n  const clientAllTabs = document.querySelectorAll(\".clients__tab\");\r\n  const clientsLi = Array.from(\r\n    document.querySelectorAll(\".clients__tabs-menu > li\")\r\n  );\r\n\r\n  for (const tabLink of clientsTabsLinks) {\r\n    tabLink.addEventListener(\"click\", function () {\r\n      const index = clientsLi.indexOf(this.parentElement);\r\n\r\n      if (clientAllTabs[index]) {\r\n        this.closest(\"ul\")\r\n          .querySelector(\"._active\")\r\n          .classList.remove(\"_active\");\r\n        this.classList.add(\"_active\");\r\n        clientsTabsParent.querySelector(\".current\").classList.remove(\"current\");\r\n        clientAllTabs[index].classList.add(\"current\");\r\n      }\r\n    });\r\n  }\r\n\r\n\r\n  const clientMobileInfo = document.querySelectorAll('.tab__mobile-info');\r\n\r\n   for (const mobileInfo of clientMobileInfo) {\r\n      mobileInfo.addEventListener('click',function(){\r\n         mobileInfo.parentElement.querySelector('.tab__hover').classList.toggle('_active');\r\n\r\n      });\r\n   }\r\n\r\n};\r\n\n\n//# sourceURL=webpack://gulp-template/./src/js/actions.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_mobile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/mobile.js */ \"./src/js/modules/mobile.js\");\n/* harmony import */ var _modules_webp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/webp.js */ \"./src/js/modules/webp.js\");\n/* harmony import */ var _dynamic_adapt_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamic-adapt.js */ \"./src/js/dynamic-adapt.js\");\n/* harmony import */ var _actions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions.js */ \"./src/js/actions.js\");\n/* harmony import */ var _popups_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popups.js */ \"./src/js/popups.js\");\n//Проверка на устройство----------------------------\r\n\r\nif (_modules_mobile_js__WEBPACK_IMPORTED_MODULE_0__.isMobile.any()) {\r\n  document.body.classList.add(\"_mobile\");\r\n} else {\r\n  document.body.classList.add(\"_pc\");\r\n}\r\n//---------------------------------------------------\r\n//---------------------------------------------------\r\n\r\n(0,_modules_webp_js__WEBPACK_IMPORTED_MODULE_1__.testWebP)(function (support) {\r\n  if (support == true) {\r\n    document.querySelector(\"body\").classList.add(\"webp\");\r\n  } else {\r\n    document.querySelector(\"body\").classList.add(\"no-webp\");\r\n  }\r\n});\r\n\r\n//---------------------------------------------------\r\n\r\n\r\n//Подключение файлов\r\n\r\n //Динамический адаптив\r\n //js код на сайте\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://gulp-template/./src/js/app.js?");

/***/ }),

/***/ "./src/js/dynamic-adapt.js":
/*!*********************************!*\
  !*** ./src/js/dynamic-adapt.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// Dynamic Adapt v.1\r\n// HTML data-da=\"where(uniq class name),when(breakpoint),position(digi)\"\r\n// e.x. data-da=\".item,992,2\"\r\n// Andrikanych Yevhen 2020\r\n// https://www.youtube.com/c/freelancerlifestyle\r\n\r\n\r\n\r\nfunction DynamicAdapt(type) {\r\n\tthis.type = type;\r\n}\r\n\r\nDynamicAdapt.prototype.init = function () {\r\n\tconst _this = this;\r\n\t// массив объектов\r\n\tthis.оbjects = [];\r\n\tthis.daClassname = \"_dynamic_adapt_\";\r\n\t// массив DOM-элементов\r\n\tthis.nodes = document.querySelectorAll(\"[data-da]\");\r\n\r\n\t// наполнение оbjects объктами\r\n\tfor (let i = 0; i < this.nodes.length; i++) {\r\n\t\tconst node = this.nodes[i];\r\n\t\tconst data = node.dataset.da.trim();\r\n\t\tconst dataArray = data.split(\",\");\r\n\t\tconst оbject = {};\r\n\t\tоbject.element = node;\r\n\t\tоbject.parent = node.parentNode;\r\n\t\tоbject.destination = document.querySelector(dataArray[0].trim());\r\n\t\tоbject.breakpoint = dataArray[1] ? dataArray[1].trim() : \"767\";\r\n\t\tоbject.place = dataArray[2] ? dataArray[2].trim() : \"last\";\r\n\t\tоbject.index = this.indexInParent(оbject.parent, оbject.element);\r\n\t\tthis.оbjects.push(оbject);\r\n\t}\r\n\r\n\tthis.arraySort(this.оbjects);\r\n\r\n\t// массив уникальных медиа-запросов\r\n\tthis.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {\r\n\t\treturn '(' + this.type + \"-width: \" + item.breakpoint + \"px),\" + item.breakpoint;\r\n\t}, this);\r\n\tthis.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {\r\n\t\treturn Array.prototype.indexOf.call(self, item) === index;\r\n\t});\r\n\r\n\t// навешивание слушателя на медиа-запрос\r\n\t// и вызов обработчика при первом запуске\r\n\tfor (let i = 0; i < this.mediaQueries.length; i++) {\r\n\t\tconst media = this.mediaQueries[i];\r\n\t\tconst mediaSplit = String.prototype.split.call(media, ',');\r\n\t\tconst matchMedia = window.matchMedia(mediaSplit[0]);\r\n\t\tconst mediaBreakpoint = mediaSplit[1];\r\n\r\n\t\t// массив объектов с подходящим брейкпоинтом\r\n\t\tconst оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {\r\n\t\t\treturn item.breakpoint === mediaBreakpoint;\r\n\t\t});\r\n\t\tmatchMedia.addListener(function () {\r\n\t\t\t_this.mediaHandler(matchMedia, оbjectsFilter);\r\n\t\t});\r\n\t\tthis.mediaHandler(matchMedia, оbjectsFilter);\r\n\t}\r\n};\r\n\r\nDynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {\r\n\tif (matchMedia.matches) {\r\n\t\tfor (let i = 0; i < оbjects.length; i++) {\r\n\t\t\tconst оbject = оbjects[i];\r\n\t\t\tоbject.index = this.indexInParent(оbject.parent, оbject.element);\r\n\t\t\tthis.moveTo(оbject.place, оbject.element, оbject.destination);\r\n\t\t}\r\n\t} else {\r\n\t\tfor (let i = 0; i < оbjects.length; i++) {\r\n\t\t\tconst оbject = оbjects[i];\r\n\t\t\tif (оbject.element.classList.contains(this.daClassname)) {\r\n\t\t\t\tthis.moveBack(оbject.parent, оbject.element, оbject.index);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n};\r\n\r\n// Функция перемещения\r\nDynamicAdapt.prototype.moveTo = function (place, element, destination) {\r\n\telement.classList.add(this.daClassname);\r\n\tif (place === 'last' || place >= destination.children.length) {\r\n\t\tdestination.insertAdjacentElement('beforeend', element);\r\n\t\treturn;\r\n\t}\r\n\tif (place === 'first') {\r\n\t\tdestination.insertAdjacentElement('afterbegin', element);\r\n\t\treturn;\r\n\t}\r\n\tdestination.children[place].insertAdjacentElement('beforebegin', element);\r\n}\r\n\r\n// Функция возврата\r\nDynamicAdapt.prototype.moveBack = function (parent, element, index) {\r\n\telement.classList.remove(this.daClassname);\r\n\tif (parent.children[index] !== undefined) {\r\n\t\tparent.children[index].insertAdjacentElement('beforebegin', element);\r\n\t} else {\r\n\t\tparent.insertAdjacentElement('beforeend', element);\r\n\t}\r\n}\r\n\r\n// Функция получения индекса внутри родителя\r\nDynamicAdapt.prototype.indexInParent = function (parent, element) {\r\n\tconst array = Array.prototype.slice.call(parent.children);\r\n\treturn Array.prototype.indexOf.call(array, element);\r\n};\r\n\r\n// Функция сортировки массива по breakpoint и place \r\n// по возрастанию для this.type = min\r\n// по убыванию для this.type = max\r\nDynamicAdapt.prototype.arraySort = function (arr) {\r\n\tif (this.type === \"min\") {\r\n\t\tArray.prototype.sort.call(arr, function (a, b) {\r\n\t\t\tif (a.breakpoint === b.breakpoint) {\r\n\t\t\t\tif (a.place === b.place) {\r\n\t\t\t\t\treturn 0;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (a.place === \"first\" || b.place === \"last\") {\r\n\t\t\t\t\treturn -1;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (a.place === \"last\" || b.place === \"first\") {\r\n\t\t\t\t\treturn 1;\r\n\t\t\t\t}\r\n\r\n\t\t\t\treturn a.place - b.place;\r\n\t\t\t}\r\n\r\n\t\t\treturn a.breakpoint - b.breakpoint;\r\n\t\t});\r\n\t} else {\r\n\t\tArray.prototype.sort.call(arr, function (a, b) {\r\n\t\t\tif (a.breakpoint === b.breakpoint) {\r\n\t\t\t\tif (a.place === b.place) {\r\n\t\t\t\t\treturn 0;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (a.place === \"first\" || b.place === \"last\") {\r\n\t\t\t\t\treturn 1;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (a.place === \"last\" || b.place === \"first\") {\r\n\t\t\t\t\treturn -1;\r\n\t\t\t\t}\r\n\r\n\t\t\t\treturn b.place - a.place;\r\n\t\t\t}\r\n\r\n\t\t\treturn b.breakpoint - a.breakpoint;\r\n\t\t});\r\n\t\treturn;\r\n\t}\r\n};\r\n\r\nconst da = new DynamicAdapt(\"max\");\r\nda.init();\n\n//# sourceURL=webpack://gulp-template/./src/js/dynamic-adapt.js?");

/***/ }),

/***/ "./src/js/functions.js":
/*!*****************************!*\
  !*** ./src/js/functions.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"_slideDown\": () => (/* binding */ _slideDown),\n/* harmony export */   \"_slideToggle\": () => (/* binding */ _slideToggle),\n/* harmony export */   \"_slideUp\": () => (/* binding */ _slideUp)\n/* harmony export */ });\nlet _slideUp = (target, duration) => {\r\n  if (!target.classList.contains(\"_slide\")) {\r\n    target.classList.add(\"_slide\");\r\n    target.style.transitionProperty = \"height, margin, padding\"; /* [1.1] */\r\n    target.style.transitionDuration = duration + \"ms\"; /* [1.2] */\r\n\r\n    target.style.height = target.offsetHeight + \"px\"; /* [3] */\r\n    target.offsetHeight;\r\n    target.style.overflow = \"hidden\"; /* [7] */\r\n    target.style.height = 0; /* [4] */\r\n    target.style.paddingTop = 0; /* [5.1] */\r\n    target.style.paddingBottom = 0; /* [5.2] */\r\n    target.style.marginTop = 0; /* [6.1] */\r\n    target.style.marginBottom = 0; /* [7.2] */\r\n\r\n    window.setTimeout(() => {\r\n      target.style.display = \"none\"; /* [8] */\r\n      target.style.removeProperty(\"height\"); /* [9] */\r\n      target.style.removeProperty(\"padding-top\"); /* [10.1] */\r\n      target.style.removeProperty(\"padding-bottom\"); /* [10.2] */\r\n      target.style.removeProperty(\"margin-top\"); /* [11.1] */\r\n      target.style.removeProperty(\"margin-bottom\"); /* [11.2] */\r\n      target.style.removeProperty(\"overflow\"); /* [12] */\r\n      target.style.removeProperty(\"transition-duration\"); /* [13.1] */\r\n      target.style.removeProperty(\"transition-property\"); /* [13.2] */\r\n      target.classList.remove(\"_slide\");\r\n    }, duration);\r\n  }\r\n};\r\n\r\nlet _slideDown = (target, duration) => {\r\n  if (!target.classList.contains(\"_slide\")) {\r\n    target.classList.add(\"_slide\");\r\n    target.style.removeProperty(\"display\"); /* [1] */\r\n    let display = window.getComputedStyle(target).display;\r\n    if (display === \"none\") {\r\n      /* [2] */\r\n      display = \"block\";\r\n    }\r\n    target.style.display = display;\r\n    let height = target.offsetHeight; /* [3] */\r\n    target.style.overflow = \"hidden\"; /* [7] */\r\n    target.style.height = 0; /* [4] */\r\n    target.style.paddingTop = 0; /* [5.1] */\r\n    target.style.paddingBottom = 0; /* [5.2] */\r\n    target.style.marginTop = 0; /* [6.1] */\r\n    target.style.marginBottom = 0; /* [6.2] */\r\n    target.offsetHeight;\r\n\r\n    target.style.transitionProperty = \"height, margin, padding\"; /* [9.1] */\r\n    target.style.transitionDuration = duration + \"ms\"; /* [9.2] */\r\n    target.style.height = height + \"px\"; /* [10] */\r\n    target.style.removeProperty(\"padding-top\"); /* [11.1] */\r\n    target.style.removeProperty(\"padding-bottom\"); /* [11.2] */\r\n    target.style.removeProperty(\"margin-top\"); /* [12.1] */\r\n    target.style.removeProperty(\"margin-bottom\"); /* [12.2] */\r\n    window.setTimeout(() => {\r\n      target.style.removeProperty(\"height\"); /* [13] */\r\n      target.style.removeProperty(\"overflow\"); /* [14] */\r\n      target.style.removeProperty(\"transition-duration\"); /* [15.1] */\r\n      target.style.removeProperty(\"transition-property\"); /* [15.2] */\r\n      target.classList.remove(\"_slide\");\r\n    }, duration);\r\n  }\r\n};\r\n\r\nlet _slideToggle = (target, duration = 500) => {\r\n  if (window.getComputedStyle(target).display === \"none\") {\r\n    return _slideDown(target, duration);\r\n  } else {\r\n    return _slideUp(target, duration);\r\n  }\r\n};\r\n\r\n//Анимация при скоре (добавление класа при достижении 1/4 блока)\r\nconst anim_items = document.querySelectorAll(\"._anim-items\");\r\nif (anim_items.length > 0) {\r\n  window.addEventListener(\"scroll\", animOnScroll);\r\n  function animOnScroll(params) {\r\n    for (let index = 0; index < anim_items.length; index++) {\r\n      const animElement = anim_items[index];\r\n      const animElementHeigt = animElement.offsetHeight;\r\n      const animItemOffset = offset(animElement).top;\r\n      const animStart = 4;\r\n\r\n      let animStartPoint =\r\n        document.documentElement.clientHeight - animElementHeigt / animStart;\r\n      if (animElementHeigt > document.documentElement.clientHeight) {\r\n        animStartPoint =\r\n          document.documentElement.clientHeight -\r\n          document.documentElement.clientHeight / animStart;\r\n      }\r\n      if (\r\n        pageYOffset > animItemOffset - animStartPoint &&\r\n        pageYOffset < animItemOffset + animElementHeigt\r\n      ) {\r\n        animElement.classList.add(\"_active\");\r\n      } else {\r\n        if (!animElement.classList.contains(\"_noAnimAgain\"))\r\n          animElement.classList.remove(\"_active\");\r\n      }\r\n    }\r\n  }\r\n\r\n  function offset(el) {\r\n    const rect = el.getBoundingClientRect(),\r\n      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,\r\n      scrollTop = window.pageYOffset || document.documentElement.scrollTop;\r\n    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };\r\n  }\r\n\r\n  setTimeout(() => {\r\n    animOnScroll();\r\n  }, 300);\r\n}\r\n\n\n//# sourceURL=webpack://gulp-template/./src/js/functions.js?");

/***/ }),

/***/ "./src/js/modules/mobile.js":
/*!**********************************!*\
  !*** ./src/js/modules/mobile.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isMobile\": () => (/* binding */ isMobile)\n/* harmony export */ });\nconst  isMobile = {\r\n    Android: function () {\r\n      return navigator.userAgent.match(/Android/i);\r\n    },\r\n    BlackBerry: function () {\r\n      return navigator.userAgent.match(/BlackBerry/i);\r\n    },\r\n    iOS: function () {\r\n      return navigator.userAgent.match(/iPhone|iPad|iPod/i);\r\n    },\r\n    Opera: function () {\r\n      return navigator.userAgent.match(/Opera Mini/i);\r\n    },\r\n    Windows: function () {\r\n      return navigator.userAgent.match(/IEMobile/i);\r\n    },\r\n    any: function () {\r\n      return (\r\n        isMobile.Android() ||\r\n        isMobile.BlackBerry() ||\r\n        isMobile.iOS() ||\r\n        isMobile.Opera() ||\r\n        isMobile.Windows()\r\n      );\r\n    },\r\n  };\n\n//# sourceURL=webpack://gulp-template/./src/js/modules/mobile.js?");

/***/ }),

/***/ "./src/js/modules/webp.js":
/*!********************************!*\
  !*** ./src/js/modules/webp.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"testWebP\": () => (/* binding */ testWebP)\n/* harmony export */ });\nfunction testWebP(callback) {\r\n    var webP = new Image();\r\n    webP.onload = webP.onerror = function () {\r\n      callback(webP.height == 2);\r\n    };\r\n    webP.src =\r\n      \"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA\";\r\n  }\r\n  \n\n//# sourceURL=webpack://gulp-template/./src/js/modules/webp.js?");

/***/ }),

/***/ "./src/js/popups.js":
/*!**************************!*\
  !*** ./src/js/popups.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions.js */ \"./src/js/functions.js\");\n\r\n\r\n//Код попапов\r\n//В попапе должен быть класс popup (самый верхний)\r\n// В контенкте попапа должен быть класс popup-content\r\n\r\nconst popupOpenButtons = document.querySelectorAll(\"[data-popup]\");\r\nconst popupCloseBtn = document.querySelectorAll(\"[data-close]\");\r\nconst burger = document.querySelector(\".header__burger\");\r\n\r\nif (popupOpenButtons.length > 0) {\r\n  for (const openPopup of popupOpenButtons) {\r\n    const popupClass = openPopup.dataset.popup;\r\n    const popupToOpen = document.querySelector(`#${popupClass}`);\r\n    popupToOpen.addEventListener(\"click\", function (e) {\r\n      if (!e.target.closest(\".popup-content\")) {\r\n        popupToOpen.classList.remove(\"_active\");\r\n\r\n        if (!burger.classList.contains(\"_active\"))\r\n          document.body.classList.remove(\"_isLocked\");\r\n        popupToOpen.querySelector(\".popup-content\").classList.remove(\"_active\");\r\n      }\r\n    });\r\n\r\n    if (popupToOpen) {\r\n      openPopup.addEventListener(\"click\", function () {\r\n        popupToOpen.classList.add(\"_active\");\r\n\r\n        document.body.classList.add(\"_isLocked\");\r\n        popupToOpen.querySelector(\".popup-content\").classList.add(\"_active\");\r\n      });\r\n    }\r\n  }\r\n\r\n  for (const btn of popupCloseBtn) {\r\n    btn.addEventListener(\"click\", function () {\r\n      btn.closest(\".popup\").classList.remove(\"_active\");\r\n      btn\r\n        .closest(\".popup\")\r\n        .querySelector(\".popup-content\")\r\n        .classList.remove(\"_active\");\r\n      if (!burger.classList.contains(\"_active\"))\r\n        document.body.classList.remove(\"_isLocked\");\r\n    });\r\n  }\r\n}\r\n\r\n//Код табов js\r\n//У родителя ссылок-таба должнен быть data-атрибут tab с именем родителя класса табов\r\n//Также ссылка таб находся в каком-то блоке в li с родителем data-tab \r\n//Первому табу добавляем класс current\r\n//\r\n\r\nconst tabLinks = document.querySelectorAll(\".tab-link\");\r\n\r\nif (tabLinks.length > 0) {\r\n  for (const tabLink of tabLinks) {\r\n    tabLink.addEventListener(\"click\", function () {\r\n      const parentList = this.closest(\"[data-tab]\"); //Элемент родитель табов\r\n      const tabLinksParents = Array.from(parentList.children);\r\n\r\n      const currentTabIndex = tabLinksParents.indexOf(this.parentElement);\r\n      const tabsParent = document.querySelector(`.${parentList.dataset.tab}`);\r\n\r\n      const allTabsToOpen = tabsParent.children;\r\n\r\n      if (allTabsToOpen[currentTabIndex]) {\r\n        parentList.querySelector(\"._active\").classList.remove(\"_active\");\r\n\r\n        tabsParent.querySelector(\".current\").classList.remove(\"current\");\r\n\r\n        allTabsToOpen[currentTabIndex].classList.add(\"current\");\r\n\r\n        this.classList.add(\"_active\");\r\n      }\r\n    });\r\n  }\r\n}\r\n\r\n//Работа со спойлреами\r\n//Добавляем атрибут [data-spoller] у класса по которому хотим открывать спойлер\r\n// Внутри класса добавляем элемент со стрелкой вниз с классом  spoller\r\n// Открывающий блок открывается за следующим элементом сразу\r\n//У общего родителя спойлеров добавляем атрибу [data-spoller]\r\n// Если хотим чтобы одновременно был открыт только один спойлер то пишем значение атрибута @one@\r\n//Также указываем разрешение на разрешении ниже которого спойлер должен работать (если есть) (max-width)\r\n//Если должен работать всегда указываем огромное число  просто указываем огромное число\r\n//Если не, то что угодно\r\nconst spollers = document.querySelectorAll(\"[data-spoller]\");\r\nif (spollers.length > 0) {\r\n  for (const spoller of spollers) {\r\n    spoller.addEventListener(\"click\", function (e) {\r\n      const spollersParent = this.closest(\"[data-spollers\");\r\n      const isOneSpollerAvailible =\r\n        spollersParent.dataset.spollers.split(\",\")[0]; // Разрешено ли открывать больше одного спойлера одновременно\r\n      const mediaNumber = Number(spollersParent.dataset.spollers.split(\",\")[1]);\r\n      console.log(mediaNumber);\r\n\r\n      if (document.body.clientWidth <= mediaNumber) {\r\n        if (isOneSpollerAvailible != \"one\") {\r\n          if (!this.nextElementSibling.classList.contains(\"_slide\")) {\r\n            (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__._slideToggle)(this.nextElementSibling, 800);\r\n            this.classList.toggle(\"_active\");\r\n          }\r\n        } else {\r\n          const activeSpoller = spollersParent.querySelector(\"._active\");\r\n\r\n          if (activeSpoller) {\r\n            if (activeSpoller == e.target.closest(\"[data-spoller]\")) {\r\n              if (!this.nextElementSibling.classList.contains(\"_slide\")) {\r\n                (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__._slideToggle)(this.nextElementSibling, 800);\r\n                this.classList.toggle(\"_active\");\r\n              }\r\n              return;\r\n            }\r\n\r\n            if (\r\n              this.nextElementSibling.classList.contains(\"_slide\") ||\r\n              activeSpoller.nextElementSibling.classList.contains(\"_slide\")\r\n            ) {\r\n              return;\r\n            }\r\n\r\n            (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__._slideToggle)(activeSpoller.nextElementSibling, 800);\r\n            activeSpoller.classList.remove(\"_active\");\r\n            (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__._slideToggle)(this.nextElementSibling, 800);\r\n            this.classList.toggle(\"_active\");\r\n          } else {\r\n            if (!this.nextElementSibling.classList.contains(\"_slide\")) {\r\n              (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__._slideToggle)(this.nextElementSibling, 800);\r\n              this.classList.toggle(\"_active\");\r\n            }\r\n          }\r\n        }\r\n      }\r\n\r\n      e.preventDefault();\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://gulp-template/./src/js/popups.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;