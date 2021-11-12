export const cards=() => {
	const portfolioList=document.querySelector('.portfolio__list');
	const portfolioAdd=document.querySelector('.portfolio__add');

	const COUNT_CARD=2

	const getData=() => fetch('db.json')
		.then(res => {
			if (res.ok) {
				return res.json()
			} else {
				throw `Что то пошло не так, ${res.status}`
			}

		})
		.catch(err => {
			console.log(err)
		})
	const createStore=async () => {
		const data=await getData()
		return {
			data,
			counter: 0,
			count: COUNT_CARD,
			get length() {
				return this.data.length;
			},
			get cardData() {
				const renderData=this.data.slice(this.counter,this.counter+this.count);
				this.counter+=renderData.length;
				return renderData;
			}
		}
	}

	const renderCard=(data)=>{
		const cards = data.map(({ preview, year, type , client, image})=>{
			const li = document.createElement('li');
			li.classList.add('portfolio__item')
			li.innerHTML=`
			 <article class="card" tabindex="0" role="button" aria-label="открыть макет" data-full-image="${image}">
              <picture class="card__picture">
                <source srcset="${preview}.avif" type="image/avif">
                <source srcset="${preview}.webp" type="image/webp">
                <img src="${preview}.jpg" alt="превью ${client}" width="166" height="103">
              </picture>

              <p class="card__data">
                <span class="card__client">Клиент: ${client}</span>
                <time class="card__date" datetime="${year}">год: ${year}</time>
              </p>

              <h3 class="card__title">${type}</h3>
            </article>`;
			return li;
		})
		portfolioList.append(...cards)
	}

	const initPortfolio=async () => {
		const store=await createStore();
		renderCard(store.cardData)
		portfolioAdd.addEventListener ('click',() => {
		
			renderCard(store.cardData)
			if(store.length===store.counter){
				portfolioAdd.remove();
			}
		})
	}
	initPortfolio()
}
