"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// Website Scroll Position
document.addEventListener("DOMContentLoaded", function (event) {
    var scrollpos = localStorage.getItem("scrollpos");
    if (scrollpos)
        window.scrollTo(0, parseInt(scrollpos));
});
window.onbeforeunload = function (e) {
    localStorage.setItem("scrollpos", "".concat(window.scrollY));
};
// Website Themes
var themes = {
    purple: {
        primary: "#4c237e",
        secondary: "#2e154c",
        homeimage: "url(images/home_purple.png)"
    },
    orange: {
        primary: "#d3671d",
        secondary: "#7f3e11",
        homeimage: "url(images/home_orange.png)"
    },
    yellow: {
        primary: "#e0b12d",
        secondary: "#8d6d15",
        homeimage: "url(images/home_yellow.png)"
    },
    brown: {
        primary: "#a16b4c",
        secondary: "#61402e",
        homeimage: "url(images/home_brown.png)"
    },
    black: {
        primary: "#3b363f",
        secondary: "#232026",
        homeimage: "url(images/home_black.png)"
    },
    green: {
        primary: "#249465",
        secondary: "#16593d",
        homeimage: "url(images/home_green.png)"
    },
    pink: {
        primary: "#fa4664",
        secondary: "#bb0523",
        homeimage: "url(images/home_pink.png)"
    },
    blue: {
        primary: "#2575aa",
        secondary: "#164666",
        homeimage: "url(images/home_blue.png)"
    },
    red: {
        primary: "#c95252",
        secondary: "#812828",
        homeimage: "url(images/home_red.png)"
    }
};
$(document).on("change", "#theme", function () {
    var theme = $("#theme").val();
    localStorage.setItem("theme", theme);
    loadTheme();
});
function loadTheme() {
    var theme = localStorage.getItem("theme");
    if (!theme)
        return;
    var root = document.querySelector(":root");
    root.style.setProperty("--primary", themes[theme]["primary"]);
    root.style.setProperty("--secondary", themes[theme]["secondary"]);
    root.style.setProperty("--homeimage", themes[theme]["homeimage"]);
}
loadTheme();
document.addEventListener("DOMContentLoaded", function () {
    var _a;
    var theme = (_a = localStorage.getItem("theme")) !== null && _a !== void 0 ? _a : "pink";
    $("#theme").selectpicker("val", theme);
});
// Form JS Buttons
function eraseInputText(targetelement) {
    var target = document.getElementById(targetelement);
    if (target)
        target.value = "";
}
function moveToInput() {
    var outputTextElement = document.getElementById("outputtext");
    var inputTextElement = document.getElementById("inputtext");
    if (outputTextElement && inputTextElement) {
        var text = outputTextElement.value;
        inputTextElement.value = text;
    }
}
function copyToClipboard() {
    var textarea = document.getElementById("outputtext");
    if (!textarea)
        return;
    textarea.select();
    document.execCommand("copy");
}
var range = function (end, start, step) {
    if (start === void 0) { start = 0; }
    if (step === void 0) { step = 1; }
    var keys = new Array(end).keys();
    return Array.from(keys).slice(start).map(function (val) { return val * step; });
};
function switchInputFields(setA, setB) {
    for (var _i = 0, _a = range(setA.length); _i < _a.length; _i++) {
        var i = _a[_i];
        var fielda = document.getElementById(setA[i]);
        var fieldb = document.getElementById(setB[i]);
        if (!fielda || !fieldb)
            break;
        var oldFieldAValue = fielda.value;
        fielda.value = fieldb.value;
        fieldb.value = oldFieldAValue;
    }
}
// Form Result Control
$(document).ready(function () {
    var _this = this;
    var buttonpressed;
    var type = $(".actiontype");
    var form = document.getElementById("calculationform");
    $(".submitbutton").click(function () {
        buttonpressed = $(this).attr("name");
    });
    if (form)
        form.onsubmit = function (e) { return __awaiter(_this, void 0, void 0, function () {
            var url, targetFormInputElems, targetFormInputs, errorElem, helpElem, result, data_1, outputtext, resultcard;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        e.preventDefault();
                        type.attr("name", buttonpressed !== null && buttonpressed !== void 0 ? buttonpressed : null);
                        url = (_a = form.attributes.getNamedItem("action")) === null || _a === void 0 ? void 0 : _a.textContent;
                        if (!url)
                            return [2 /*return*/];
                        targetFormInputElems = document.getElementsByClassName("form-control");
                        targetFormInputs = Object.entries(targetFormInputElems).filter(function (_a) {
                            var key = _a[0], value = _a[1];
                            try {
                                var i = parseInt(key);
                                return !isNaN(i);
                            }
                            catch (_b) {
                                return false;
                            }
                        }).reduce(function (acc, _a) {
                            var _b;
                            var value = _a[1];
                            return (__assign(__assign({}, acc), (_b = {}, _b[value.id] = value.value, _b)));
                        }, {});
                        errorElem = $("[id*='error']");
                        helpElem = $("[id*='help']");
                        // Clear errors
                        errorElem.attr("style", "display: none;");
                        errorElem.toArray().forEach(function (elem) { elem.innerText = ""; });
                        return [4 /*yield*/, fetch(url, {
                                method: "POST", body: $("#calculationform").serialize(), headers: {
                                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                                }
                            })];
                    case 1:
                        result = _b.sent();
                        if (!result.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, result.json()];
                    case 2:
                        data_1 = _b.sent();
                        if (typeof data_1 == "object" && data_1.error) {
                            delete data_1.error;
                            // Assign each error to the appropriate field
                            errorElem.toArray().forEach(function (element) {
                                var _a, _b;
                                var fieldName = (_b = (_a = /.*(?=error)/.exec(element.id)) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : "";
                                if (typeof data_1[fieldName] === "string")
                                    element.innerText = data_1[fieldName];
                            });
                            errorElem.removeAttr("style");
                            helpElem.attr("style", "display: none;");
                            return [2 /*return*/];
                        }
                        outputtext = $("#outputtext");
                        if (data_1 instanceof Array) {
                            outputtext.val(data_1.join("|"));
                        }
                        else if (typeof data_1 === "object") {
                            outputtext.val(Object
                                .entries(data_1)
                                .map(function (_a) {
                                var key = _a[0], value = _a[1];
                                return "key: ".concat(key, ", value: ").concat(value);
                            })
                                .join("|"));
                        }
                        else {
                            outputtext.val("".concat(data_1));
                        }
                        $("[id*='help']").removeAttr("style");
                        resultcard = $(".resultcard");
                        resultcard.removeAttr("style");
                        if (data_1 !== "Process Execution Failed")
                            outputtext.removeClass("text-danger");
                        else {
                            outputtext.addClass("text-danger");
                            errorElem.removeAttr("style");
                        }
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
});
//# sourceMappingURL=main.js.map