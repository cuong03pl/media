const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const overlay = {
	isTrue: true,
	isFalse: false,
    
	handelMenu(){
		const commercialItems = $$('.commercial-item')
        const videoOverlayItems = $$('.video-overlay-item')
        const buttonClose = $('.button-close')
        commercialItems.forEach((commercialItem, index) => {
            const videoOverlayItem = videoOverlayItems[index]
            commercialItem.onclick = () => {
                $('.video-overlay-item.active').classList.remove('active')
                videoOverlayItem.classList.add('active')
                $('.video-overlay').classList.add('flex')
            }
        });

        buttonClose.onclick = () => {
            $('.video-overlay.flex').classList.remove('flex')
        }




	},
	start(){
		this.handelMenu()
	}
}
overlay.start()









