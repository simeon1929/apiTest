





document.querySelector('button').onclick = ()=>{
    let selVal = document.getElementById('cars')
    //console.log(selVal);
    let optionVal = selVal.options[selVal.selectedIndex].value
    console.log(optionVal);

   
    
    switch(optionVal) {
        case 'empty': 
        result = 'please select your vehicles'
        carsName = 'Not selected'
        color = ''
        model = ''
        price = ''
        break

        case 'volvo': 
        result = 'Thanks for choosen Valvo'
        carsName = 'Valvo'
        color = 'Black'
        model = 2019
        price = 500
        break

        case 'saab': 
        result = 'Thanks for choosen saab'
        carsName = 'saab'
        color = 'Red'
        model = 2020
        price = 100
        break

        case 'mercedes': 
        result = 'Thanks for choosen mercedes'
        carsName = 'mercedes'
        color = 'Yello'
        model = 1010
        price = 8000
        break

        case 'mercedes': 
        result = 'Thanks for choosen mercedes'
        carsName = 'mercedes'
        color = 'Yello'
        model = 1010
        price = 8000
        break
    }

    let output = `Result : ${result} Car Name : ${carsName}
    Color : ${color} <br>
    Model : ${model} <br>
    Price : ${price} <br>

`

document.getElementById('result').innerHTML = output

    
}
