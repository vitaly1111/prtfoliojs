
const presentOrderBtn=document.querySelector('.present__order-btn')
const pageOverlayModal=document.querySelector('.page__overlay_modal');
const modalClose=document.querySelector('.modal__close')

/* const closeModal=()=>{
	pageOverlayModal.classList.remove('page__overlay_modal_open')
}

presentOrderBtn.addEventListener('click',()=>{
	pageOverlayModal.classList.add('page__overlay_modal_open')
})

modalClose.addEventListener('click',()=>{closeModal()}) */

const handlerModal=(openBtn,modal,openSelector,closeTrigger,sk)=>{
	let opacity=0;
	const speed={
		slow:15,
		medium:8,
		fast:1,
		default:5
	};
	openBtn.addEventListener('click',()=>{
		modal.style.opacity=opacity;
		modal.classList.add(openSelector);
		const timer=setInterval(()=>{
			opacity=opacity+0.02
			modal.style.opacity=opacity;
			if (opacity>=1) clearInterval(timer)
		},speed[sk]? speed[sk] : speed.default)
	})
	closeTrigger.addEventListener('click',()=>{
		
		const timer=setInterval(() => {
			opacity=opacity-0.02
			modal.style.opacity=opacity;
			if (opacity<=0) {
				clearTimeout(timer);
				modal.classList.remove(openSelector);
			}
				
		},speed[sk]? speed[sk]:speed.default)
	})
}

handlerModal(presentOrderBtn,pageOverlayModal,'page__overlay_modal_open',modalClose,'slow')

console.log(presentOrderBtn)

//# sourceMappingURL=main.js.map
