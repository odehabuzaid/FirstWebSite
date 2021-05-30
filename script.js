let input 
let aNumber 

    do{
        alert('To Enter this page , you must answer a question.')
        input = prompt('What year did javascript start ?')}
        while ( input != '1995'  )


 
 function addRepeatedPicture(){
     input = prompt('Rate this page . 1 to 5 ?')
         if (input >= 0 && input <= 5 ){
            for (let i = 0 ; i < input ; i++){
                document.write("<img src='res/aStar.png' width='5%' hight='5%'>")
                    }

       document.write('<h1>' + input + ' Out of 5</h1>')
     
         }else {addRepeatedPicture()}

 }




