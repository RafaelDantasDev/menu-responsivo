class MobileNavBAR {
    constructor(mobileMenu, navlist, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu)
        this.navlist = document.querySelector(navlist)
        this.navLinks  =document.querySelectorAll(navLinks)
        this.activeClass = 'active'
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