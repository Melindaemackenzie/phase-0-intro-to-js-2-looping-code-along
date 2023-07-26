// Code your solutions in this file
function writeCards (cards,event) {
    let messagesArray = []
    for (let i =0; i < cards.length; i++) {
       messagesArray.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`) 
       console.log(messagesArray)
    }
    return messagesArray;
    }

  

        function countDown(a) {
            while (a >=0)
            console.log(a--);
        }
    