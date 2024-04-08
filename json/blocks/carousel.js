class Carousel {
    /**
     * 
     * @param { HTMLEklement}container
     * @param {Object} options
     * @param {Object} options.slidesToScroll=1 Nombre d'éléments à faire défiler
     * @param {Object}options.slidesVisible=1 Nombre d'éléments visibles dans un slide
     * @param {boolean} options.loop=false dois-t-ion bouclé en fi nde slides ?
    */
   moveCallBacks=[]
   
   constructor(element, options = {}) {
       this.element=element
       this.isMobile=false
       this.options=Object.assign(
        {},
        { 
            slidesToScroll: 1,
            slidesVisible: 1,
            loop : false,
            autoLoop: false,
        },
        options
        )
        let children=[].slice.call(element.children)
        this.visible=options.slidesVisible
        this.scroll=options.slidesToScroll
        this.currentItem=0
        this.root=this.createDivWithClass("carousel")
        this.root.setAttribute('tabindex', '0')
        this.container=this.createDivWithClass("carousel__container")
        this.container.classList.add("d-flex-row")
        this.root.appendChild(this.container)
        this.element.appendChild(this.root)
        this.items = children.map(
            (child)=> {
                let item = this.createDivWithClass('carousel__item')
                item.appendChild(child)
                this.container.appendChild(item)
                return item
            }
        )
        this.setStyle()
        this.onResize()
        window.addEventListener('resize', this.onResize.bind(this))
        this.root.addEventListener('keyup', e => {
            if (e.key === 'ArrowRight' || e.key === 'Right') {this.next()}
            else if (e.key === 'ArrowLeft' || e.key === 'Left') {this.previous()}
            
        })
        if (this.options.autoLoop) {
            setTimeout(() => this.next(), 5000)
        }
    }
    /**
     * 
     * @param {String} className 
     * @returns {HTMLElement}
    */
   createDivWithClass(className){
       let div=document.createElement("div")
       div.className=className
       return div
    }
    /**
     * applique les bonnes dimentions aux éléments du carousel
    */
   setStyle(){
       let ratio= this.items.length / this.slidesVisible
        this.container.style.width = (ratio * 100) +"%"
        this.items.forEach(item => {item.style.width = (100/this.slidesVisible )/ratio + "%"})
    }
    createNavBTN () {
        if (this.items.length <= this.slidesVisible) {return}
        let nextBTN= this.createDivWithClass('carousel__nextBTN')
        let previousBTN= this.createDivWithClass('carousel__previousBTN')
        this.root.append(nextBTN)
        this.root.append(previousBTN)
        nextBTN.addEventListener('click', this.next.bind(this))
        previousBTN.addEventListener('click', this.previous.bind(this))
        if (this.options.loop===false) {return }
        else {
            this.onMove(index => {
                if(index==0){
                    previousBTN.classList.add('carousel__previous--hidden')
                } else { 
                    previousBTN.classList.remove('carousel__previous--hidden')
                }
                if(this.items[this.currentItem + this.options.slidesVisible]=== undefined){
                    nextBTN.classList.add('carousel__next--hidden')
                } else { 
                    nextBTN.classList.remove('carousel__next--hidden')
                }
            })
        }
    }
    next() {
        this.goToSlide(this.currentItem + this.slidesToScroll)
        if (this.options.autoLoop) {
            setTimeout(() => this.next(), 5000)
        }
    }
    previous() {
        this.goToSlide(this.currentItem - this.slidesToScroll)        
    }
    /**
     * Déplace le carousel au slide number index
     * @param {number} index
    */
   goToSlide(index){
       let lastSlide= this.items.length- this.slidesVisible
       if (index<0) {
           if (this.options.loop) {
               index = lastSlide 
            } else {return}
        } else if (index > lastSlide) {
        if (this.options.loop) {
            index = 0
        } else {return}
    } 
    let transalateX = - 100 * index / this.items.length
    this.container.style.transform= "translate3d(" + transalateX + "%,0,0)"
    this.currentItem= index
    this.moveCallBacks.forEach(cb => cb(index))
}
onMove(callback) {
    this.moveCallBacks.push(callback)
}
onResize() {
        let mobile= window.innerWidth < 800
        if (mobile !== this.isMobile) {
            this.isMobile= mobile
            this.setStyle()
            this.moveCallBacks.forEach(cb => cb(this.currentItem))
        }
        this.createNavBTN()
    }
    get slidesToScroll(){
        return this.isMobile ? 1 : this.options.slidesToScroll
    }
    get slidesVisible(){
        return this.isMobile ? 1 : this.options.slidesVisible
    }
}


document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById("carousel1")!=null) {
        let topCarousel = new Carousel(document.getElementById("carousel1"),{
            // slidesToScroll : 3,
            slidesVisible : 3,
            loop : true,
            autoLoop: true
        })      
    }
    
    if (document.getElementById("catalogContainer")!=null) {
        new Carousel(document.getElementById("catalogContainer"),{
            slidesVisible : 3,
            loop : true
        })
    }
})



//   // Execution de cette fonction lorsque le DOM sera entièrement chargé
//   $(document).ready(function() {
    // 	// Calcul préalables :
    // 		// Element de référence pour la zone de visualisation (ici le premier item)
    // 		Reference = $(".carrousel li:first-child");
    // 	// Ciblage de la bande de diapositives
    // 	$(".carrousel")
    // 		// Englobage de la liste par la zone de visualisation
    // 		.wrap('<div class="carrousel-conteneur"></div>')
    // 	// Ciblage de la zone de visualisation
    // 	$(".carrousel-conteneur")
    // 		// Application de la largeur d'une seule diapositive
    // 		.css("width",  Reference.width()  )
    // 		// Application de la hauteur d'une seule diapositive
    // 		.css("height", Reference.height() )
    // 		// Blocage des débordements
    // 		.css("overflow", "hidden");
    // });
    
    