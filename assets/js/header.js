const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const app = {
	isTrue: true,
	isFalse: false,
	handelMenu(){
		const headerList = $('.header-list')
		const menuIcon = $('.menu-icon')
		const arrowDownIcon = $('.arrow-down-icon')
		const headerItemList =$('.header-item-list')
		menuIcon.addEventListener('click', () => {
			if(this.isTrue === true) {
				headerList.classList.add('active')
				this.isTrue = false
			}
			else {
				headerList.classList.remove('active')
				this.isTrue = true
			}
		})
		arrowDownIcon.addEventListener('click', () => {
			if(this.isFalse === false) {
				headerItemList.classList.add('active')
				this.isFalse = true
			}
			else {
				headerItemList.classList.remove('active')
				this.isFalse = false
			}
		})
	},
	start(){
		this.handelMenu()
	}
}
app.start()












