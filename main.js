function getValue() {
    var y = document.getElementById('output');
    var x = document.getElementById('input').value;
    if(x % 2 === 0) {
        x = 'even';
        console.log('Even');
        
    }
    else {
        x = 'Odd';
    }

    y.innerHTML = x;
}