const meatList = [
    {
        name: "食在一方",
        category: ["brunch"],
        filter: false,
    },
    {
        name: "日十",
        category: ["brunch"],
        filter: false,
    },
    {
        name: "鹽行站",
        category: ["buffet", "rice"],
        filter: false,
    },
    {
        name: "鍋燒意麵",
        category: ["noodle"],
        filter: false,
    },
    {
        name: "炒飯",
        category: ["rice"],
        filter: false,
    },
    {
        name: "八方雲集",
        category: ["others"],
        filter: false,
    },
    {
        name: "火鍋",
        category: ["others"],
        filter: false,
    },
    {
        name: "韓式料理",
        category: ["rice", "noodle"],
        filter: false,
    },
    {
        name: "小飯糰大飯糰",
        category: ["rice"],
        filter: false,
    },
    {
        name: "後校門滷肉飯",
        category: ["rice", "noodle"],
        filter: false,
    },
    {
        name: "魚耶",
        category: ["brunch", "rice", "noodle"],
        filter: false,
    },
    {
        name: "吳家鴨香飯",
        category: ["rice", "noodle"],
        filter: false,
    },
    {
        name: "施家雞肉飯",
        category: ["rice"],
        filter: false,
    },
    {
        name: "黑盤",
        category: ["rice", "noodle"],
        filter: false,
    },
    {
        name: "神武拉麵",
        category: ["noodle"],
        filter: false,
    },
    {
        name: "森井丼飯",
        category: ["rice"],
        filter: false,
    },
    {
        name: "雙醬咖哩",
        category: ["rice"],
        filter: false,
    },
    {
        name: "麺や青鈴",
        category: ["noodle"],
        filter: false,
    },
    {
        name: "金拱門",
        category: ["noodle", "rice"],
        filter: false,
    },
];

console.log(meatList[9].name);
console.log(meatList.length);

// 接標籤
const brunchEl = document.getElementById("brunch");
const riceEl = document.getElementById("rice");
const noodleEl = document.getElementById("noodle");
const buffetEl = document.getElementById("buffet");
const othersEl = document.getElementById("others");
const btnEl = document.getElementById("btn");
const resultEl = document.getElementById("result");

btnEl.addEventListener("click", () => {
    // console.log(meatList[Math.floor(Math.random() * meatList.length)]);
    //加條件式？
    resultEl.innerText = `${
        meatList[Math.floor(Math.random() * meatList.length)].name
    }！！`;
});

// checked add to a list of array
const checked = [];

checked.push();

// 過濾
mealList.filter

function filterOut() {


}
