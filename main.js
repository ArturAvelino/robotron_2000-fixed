const control = document.querySelectorAll('[data-control')
const statistic = document.querySelectorAll('[data-statistic')
const parts = {
    "arm": {
        "force": 29,
        "power": 35,
        "energy": -21,
        "speed": -5
    },

    "armor": {
        "force": 41,
        "power": 20,
        "energy": 0,
        "speed": -20
    },
    "core":{
        "force": 0,
        "power": 7,
        "energy": 48,
        "speed": -24
    },
    "leg":{
        "force": 27,
        "power": 21,
        "energy": -32,
        "speed": 42
    },
    "rocket":{
        "force": 0,
        "power": 28,
        "energy": 0,
        "speed": -2
    }
}


//add.addEventListener("click", () => {dataManipulation("add")});
//reduce.addEventListener("click", () => {dataManipulation("reduce")});

control.forEach( (element) => {
    element.addEventListener("click", (event) => {
        dataManipulation(event.target.dataset.control, event.target.parentNode)
        refreshStatistic(event.target.dataset.control, event.target.dataset.part)
    })
})

function dataManipulation (operation, control) {
    const part = control.querySelector("[data-counter]")

    if (operation === "-") {
        part.value = parseInt(part.value) - 1
    }
    else {
        part.value = parseInt(part.value) + 1
    }
}

function refreshStatistic(operation, part) {
    if (operation === "+") {
        statistic.forEach( (element) => {
            element.textContent = parseInt(element.textContent) + parts[part][element.dataset.statistic]
        })
    }
    else {
        statistic.forEach( (element) => {
            element.textContent = parseInt(element.textContent) - parts[part][element.dataset.statistic]
        })
    }
}