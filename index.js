const steps = Array.from(document.querySelectorAll('.circle'))
const next = document.getElementById('next')
const prevous = document.getElementById('prevous')

let i = 0;

next.addEventListener('click', activatingStep)
prevous.addEventListener('click', unActivateStep)

function activatingStep(){
    prevous.removeAttribute('disabled')
    steps[i+1].classList.add('active')
    steps[i+1].innerHTML =`<i class="fa fa-check" aria-hidden="true"></i>` 
    i++
    if(i == steps.length){
    next.disabled ='true' 
    }
};

function  unActivateStep(){
    next.removeAttribute('disabled')
    steps[i].classList.remove('active')
    steps[i].innerHTML =`<i class="fa fa-times" aria-hidden="true"></i>`
    i--
    if(i == 0){
    prevous.disabled ='true'
    }
}

