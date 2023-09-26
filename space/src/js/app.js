const input = document.getElementById("custom-input");

input.addEventListener("keydown", function(event) {
    if (event.keyCode === 32) {
        event.preventDefault();
        input.value = ''; 
    }

    input.addEventListener("keydown", function(event) {
        if (event.keyCode === 8) {
            event.preventDefault()    
            const currentValue = input.value;
            const selectionStart = input.selectionStart;   

            if (selectionStart === 0) {
                input.value = ' ' + currentValue;
                input.selectionStart = 1;
                input.selectionEnd = 1;
            } else {
                const newValue = currentValue.substring(0, selectionStart - 1) + ' ' + currentValue.substring(selectionStart);
                input.value = newValue;
                input.selectionStart = selectionStart;
                input.selectionEnd = selectionStart;
            }
        }
    });

});
