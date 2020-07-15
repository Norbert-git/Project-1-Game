 console.log('senity checks')


// // link the start button 

const blocksContainer = document.querySelector('.blocks')
document.querySelector('button').addEventListener("click", () => {
    createBlocks(12)
})

// // // create the blocks

let  clickedCard = null;
let preventClick = false;
let pairFound = 0;


function onCardClicked(event) {
    const target = event.currentTarget;
    if ( target.className.includes('done')){
        return;
    }
    target.className = target.className.replace('color-hidden', '').trim();

    if (!clickedCard) {
   
        clickedCard = target;
      } else if (clickedCard) {
        preventClick = false;
        if (
            clickedCard.getAttribute('data-color') !== 
            target.getAttribute('data-color')
        ) {
            console.log('cards not the same')
            clickedCard.className += 'done';
            clickedCard.className += 'done';
           

          setTimeout(() => {
            clickedCard.className = 
             clickedCard.className.replace('done', '').trim() + 
             'color-hidden';
             target.className = 
             clickedCard.className.replace('done', '').trim() + 
             ' color-hidden';
             clickedCard = null;
             preventClick =false;
            }, 700);
        } else {
            pairFound ++;
          clickedCard = null;
          if (pairFound === 6){
              alert('You Win');
          }
        }
    }    
}