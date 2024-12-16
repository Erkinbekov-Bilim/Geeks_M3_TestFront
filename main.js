const containsOnlyDigits = (str) => {
    return /^\d+$/.test(str);
};

console.log(containsOnlyDigits("12345")); // Выведет true
console.log(containsOnlyDigits("12a45")); // Выведет false


// 2

const consoleLogSecond = () => {
    setInterval(() => {
        console.log("Прошла секунда");
    }, 1000)
}

consoleLogSecond()

// 3

const count = () => {
    let i = 1;
    const interval = setInterval(
        () => {
            console.log(i);
            i++;
            if (i > 10) {
                clearInterval(interval);
            }
        },
        1000
    );
}

count()


// 4

// const box = document.getElementById('colorBox');
//
// box.onclick(() => {
//     box.classList.remove('active');
// })

// 5

const getData = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "data.json")
    request.setRequestHeader("Content-Type", "application/json")
    request.send()

    request.onload = () => {
        const data = JSON.parse(request.response)
        console.log(data)
    }
}

getData()