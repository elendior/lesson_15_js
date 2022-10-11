let count = 0;
let value = document.querySelector("#value");
let btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e){
        // console.log(e.currentTarget.classList)
        const style = e.currentTarget.classList;

        if (style.contains('decrease')) {
            count --
        } else if (style.contains('increase')) {
            count ++
        } else  {
            count = 0;
        }

        if (count > 0) {
            value.style.color = 'green'
        }
        if (count < 0){
            value.style.color = 'red'
        }
        if (count === 0){
            value.style.color = 'black'
        }
        value.textContent = count;
    })
})

let countrs = document.querySelectorAll('.counter');
console.log(countrs)

countrs.forEach(function (counter) {
    counter.innerText = '0';
    const updateCounter = function (){
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;
        const increment = target/200;

        if (c < target){
            counter.innerText = `${c + increment}`
        }
        setTimeout(updateCounter, 10)
    }

    updateCounter();
})
