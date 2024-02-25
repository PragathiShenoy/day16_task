let number = 10;
let message = document.getElementById('message');
message.innerText = number;
setTimeout(()=>{
    number--;
    message.innerText = number;
    setTimeout(()=>{
        number--;
        message.innerText = number;
        setTimeout(()=>{
            number--;
            message.innerText = number;
            setTimeout(()=>{
                number--;
                message.innerText = number;
                setTimeout(()=>{
                    number--;
                    message.innerText = number;
                    setTimeout(()=>{
                        number--;
                        message.innerText = number;
                        setTimeout(()=>{
                            number--;
                            message.innerText = number;
                            setTimeout(()=>{
                                number--;
                                message.innerText = number;
                                setTimeout(()=>{
                                    number--;
                                    message.innerText = number;
                                    setTimeout(()=>{
                                            number--;
                                            message.innerText = "Happy Independence Day!..";
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);

