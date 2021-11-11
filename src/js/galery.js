import { enableScroll, disableScroll } from "./main";

export const galery=()=>{
	const portfolioList=document.querySelector('.portfolio__list');

	const pageOverlay=document.createElement('div');
	pageOverlay.classList.add('page__overlay')

	portfolioList.addEventListener('click',(e)=>{
		console.log(e.target)
		const card=e.target.closest('.card');
		if (card){
			console.log(card.dataset.fullImage)
			document.body.append(pageOverlay)
		/* 	const img=document.createElement('img');
			img.style=`
			position: absolute;
			top:20px;
			left:50%;
			transform: translateX(-50%);`
			img.src=card.dataset.fullImage+'.jpg'
			pageOverlay.append(img) */
			const title=card.querySelector('.card__client')
			const picture=document.createElement('picture');
			picture.style=`
			position: absolute;
			top:20px;
			left:50%;
			transform: translateX(-50%);
			width:80%;
			max-width:1440px;`;
			picture.innerHTML=`
			<source srcset='${card.dataset.fullImage}.avif' type='image/avif' />;
			<source srcset='${card.dataset.fullImage}.webp' type='image/webp' />;
			<img src="${card.dataset.fullImage}.jpg" alt='${title.textContent}' />`;
			pageOverlay.append(picture)
			disableScroll()
		}
		pageOverlay.addEventListener('click',()=>{
			pageOverlay.remove();
			pageOverlay.textContent='';
			enableScroll();
		})
	})
}