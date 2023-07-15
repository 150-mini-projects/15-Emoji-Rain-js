function createEmoji() {
    const emoji = document.createElement('div')
    emoji.classList.add('emoji')

    emoji.style.left = Math.random() * 100 + 'vw'

    emoji.style.animationDuration = Math.random() * 2 + 3 + 's'

    emoji.innerText = '😄'

    document.body.appendChild(emoji)

    setTimeout(() => {
      emoji.remove() 
    }, 4000)
}

setInterval(createEmoji, 300)