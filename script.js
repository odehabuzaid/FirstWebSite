let Stars = document.getElementById('rating-div')
let input
    do{
        alert('To Enter this page , you must answer a question.')
          input = prompt(`What year did javascript start ?   '1996'`)}
        while ( input != '1996'  )
 
addRepeatedPicture(prompt('Rate this page . 1 to 5 ?'))
 function addRepeatedPicture(_input){
     
    if (_input >= 1 && _input <= 5 && _input != 'undefind' ){
       for (let i = 0 ; i < _input ; i++){
        Stars.innerHTML = Stars.innerHTML + `<img src='res/aStar.png' width='5%' hight='5%'>`}
            Stars.innerHTML = Stars.innerHTML + `<br><h2> ${_input}` + ' out of 5</h2>'}
    else {addRepeatedPicture(prompt('Rate this page . 1 to 5 ?'))}

}

