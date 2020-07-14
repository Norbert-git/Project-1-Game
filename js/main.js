// console.log('senity checks')


// // link the start button 

const blocksContainer = document.querySelector('.blocks')
document.querySelector('button').addEventListener("click", () => {
    createBlocks(12)
})

// // // create the blocks

const createBlocks = (numberOfBlocks) => {
    for (let i =0; i< numberOfBlocks; i++){
        const blocks = document.createElement('div')
        blocksContainer.append(blocks)
    }
}
// // // create the back of the pictures

// // // flip over the cards

// document.querySelector('.blocks').addEventListener('click', flipPicture)

// const flipPicture = () => {
//     if (event.target === createBlocksContainer){








// document.querySelector('.blocks').addEventListener('click', flipPicture)
