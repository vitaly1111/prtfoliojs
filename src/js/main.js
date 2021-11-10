
const presentOrderBtn=document.querySelector('.present__order-btn')
const pageOverlayModal=document.querySelector('.page__overlay_modal');
const modalClose=document.querySelector('.modal__close');
const headerBurger=document.querySelector('.header__contacts-burger')
const headerContacts=document.querySelector('.header__contacts')

/* const closeModal=()=>{
	pageOverlayModal.classList.remove('page__overlay_modal_open')
}

presentOrderBtn.addEventListener('click',()=>{
	pageOverlayModal.classList.add('page__overlay_modal_open')
})

modalClose.addEventListener('click',()=>{closeModal()}) */

const disableScroll=()=>{
	const widthScroll=window.innerWidth-document.body.offsetWidth;
	document.body.scrollPosition=window.scrollY
	document.body.style=`
	overflow:hidden;
	position:fixed;
	top:-${document.body.scrollPosition}+'px';
	left:0;
	height:100vh;
	width:100vw;
	padding-right:${widthScroll}px;`
}
const enableScroll=()=>{
 document.body.style='position: relative';
 window.scroll({top: document.body.scrollPosition})
}

const handlerModal=(openBtn,modal,openSelector,closeTrigger,sk)=>{
	let opacity=0;
	const speed={
		slow:15,
		medium:8,
		fast:1,
		default:5
	};

	const openModal=() => {
		disableScroll()
		modal.style.opacity=opacity;
		modal.classList.add(openSelector);
		const timer=setInterval(() => {
			opacity=opacity+0.02
			modal.style.opacity=opacity;
			if (opacity>=1) clearInterval(timer)
		},speed[sk]? speed[sk]:speed.default)
	}

	const closeModal=()=>{
		const timer=setInterval(() => {
			opacity=opacity-0.02
			modal.style.opacity=opacity;
			if (opacity<=0) {
				clearTimeout(timer);
				modal.classList.remove(openSelector);
				enableScroll()
			}

		},speed[sk]? speed[sk]:speed.default)
	}

	openBtn.addEventListener('click',openModal)
	closeTrigger.addEventListener('click',closeModal)
	modal.addEventListener('click',e=>{
		if (e.target.classList.contains('page__overlay')){
			closeModal()
		}
	
	})
}

handlerModal(presentOrderBtn,pageOverlayModal,'page__overlay_modal_open',modalClose,'slow')

const heandlerBurger=(openBtn,menu,openSelector)=>{
	openBtn.addEventListener('click',()=>{
		if(menu.classList.contains(openSelector)){
			menu.style.height=''
			menu.classList.remove(openSelector)
		}else{
			menu.style.height=menu.scrollHeight+'px'
			menu.classList.add(openSelector)
		}
		
	})
}

heandlerBurger(headerBurger,headerContacts,'header__contacts_open')

console.log(presentOrderBtn)

//# sourceMappingURL=main.js.map
