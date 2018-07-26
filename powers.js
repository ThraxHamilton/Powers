console.log('Lord knows....')

// document.querySelector("#activate-flight").addEventListener('click', handlerFunction)

function handlerFunction () {
    document.querySelector("#flight").addEventListener('click', function(){
        toggleClass('enabled')
    })
}