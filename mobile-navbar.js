class MobileNavBAR {
    constructor(mobileMenu, navlist, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu)
        this.navList = document.querySelector(navlist)
        this.navLinks  =document.querySelectorAll(navLinks)
        this.activeClass = 'active'

        this.handleClick = this.handleClick.bind()
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation ? (link.style.animation = "") : (link.style.animation = `navLinkFade 0.5s ease frowards ${index / 7 + 0.3}s`)
        })
    }

    handleClick() {
        this.navlist.classList.toggle(this.activeClass)
        this.mobileMenu.classList.toggle(this.activeClass)
        this.animateLinks()
    }
    
    addClickEvent() {
        this.mobileMenu.addEventListener("click", () => console.log('Hey'))
    }
    
    Init(){
        if(this.mobileMenu){
            this.addClickEvent()
        }
        return this
    }
}
    
    
    const mobileNavBar = new MobileNavBAR(
        ".mobile-menu",
        ".nav-list",
        ".nav-list li"
    ) 
        
mobileNavBar.Init()