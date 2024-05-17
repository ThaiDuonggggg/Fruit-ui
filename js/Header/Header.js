const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

function Header() {
    const header = document.querySelector('header');
    const html = 
        `
            <div class="header_top ">
            <div class="grid wide">
                <div class="header_container">
                    <div class="row a-items">
                        <div class="col l-6 m-0 c-0">
                            <div class="header_address">
                                    <div class="header_contact">
                                        <i class="fa-solid fa-location-dot header_contact-icon"></i>
                                        <span class="header_contact-desc">123 Street, Viet Nam</span>
                                    </div>
                                    <div class="header_contact">
                                        <i class="fa-solid fa-envelope header_contact-icon"></i>
                                        <span class="header_contact-desc">Email@Example.com</span>
                                    </div>
                            </div>
                        </div>
                        <div class="col l-6 m-0 c-0">
                                <ul class="header_nav-list d-flex a-items j-flex-end">
                                    <li class="header_nav-item">
                                        <a href="#" class="header_nav-link">Privacy Policy</a>
                                        
                                    </li>
                                    <li class="header_nav-item">
                                        <a href="#" class="header_nav-link">Terms of Use</a>
                                    </li>
                                    <li class="header_nav-item">
                                        <a href="#" class="header_nav-link">Sales and Refunds</a>
                                    </li>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        <nav class="header_navbar">
            <div class="grid wide ">
                <div class="header_navbar-container">
                    <div class="row current-height a-items">
                        <div class="col l-2 m-12 c-12">
                                <div class="navbar_logo">
                                    <a href="index.html">
                                        <h1 class="navbar_logo-link">Fruitables</h1>
                                    </a>
                                    <div class="header_mobile-bars l-0">
                                        <i class="fa-solid fa-bars"></i>
                                    </div>
                                </div>
                                
                        </div>
                        <div class="col l-8 m-12 c-12">
                                <div class="navbar_content">
                                    <ul class="navbar_content-list">
                                        <li class="navbar_content-item">
                                            <a href="index.html" class="navbar_content-link">Home</a>
                                        </li>
                                        <li class="navbar_content-item">
                                            <a href="shop.html" class="navbar_content-link">Shop</a>
                                        </li>
                                        <li class="navbar_content-item">
                                            <a href="shopDetail.html" class="navbar_content-link">Shope Detail</a>
                                        </li>
                                        <li class="navbar_content-item">
                                            <a href="#" class="d-flex a-items pages">
                                                Pages
                                                <i class="fa-solid fa-angle-down more-icon"></i>
                                                <nav class="header_subnav">
                                                    <ul class="header_subnav-list">
                                                        <li class="header_subnav-item">
                                                            <a href="errorPage.html" class="header_subnav-link">404 Page</a>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </a>
                                        </li>
                                        <li class="navbar_content-item">
                                            <a href="contact.html" class="navbar_content-link">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                        </div>
                        <div class="col l-2 m-12 c-12">
                                <div class="navbar_actions">
                                    <div class="navbar_actions-btn">
                                        <button class="btn-search"><i class="fa-solid fa-magnifying-glass"></i></button>
                                    </div>
                                    <div class="navbar_actions-btn">
                                        <button class="btn-shopping">
                                            <i class="fa-solid fa-bag-shopping"></i>
                                            <span class="quantity">3</span>
                                        </button>
                                    </div>
                                    <div class="navbar_actions-btn">
                                        <button class="btn-user"><i class="fa-solid fa-user"></i></button>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div class="scroll-top">
            <i class="fa-solid fa-arrow-up"></i>
        </div>
        `
    header.innerHTML = html
    
    /* 1. handle Header scroll*/

    const scrollElement = () => {
        const headerScroll = document.querySelector('.header')
        
        if (scrollY > 48) {
            headerScroll.classList.add('top-hidden')
            headerScroll.classList.remove('top-header')
            headerScroll.classList.add('header_box-shadow')
        } else {
            headerScroll.classList.add('top-header')
            headerScroll.classList.remove('top-hidden')
            headerScroll.classList.remove('header_box-shadow')
        }
    }
        window.addEventListener('scroll', scrollElement)


    /* 2. Scroll Top */

    const scrollTop = $('.scroll-top')

    const handleScrollTop = () => {
        if(scrollY > 208) {
            scrollTop.style.display = 'flex'
        } else {
            scrollTop.style.display = 'none'
        }
    }

    const handleScrollClickTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    window.addEventListener('scroll', handleScrollTop)
    scrollTop.addEventListener('click', handleScrollClickTop)
 
    /* 3. handle header mobile bars */

    const barsMobile = $('.header_mobile-bars');
    const navContent = $('.navbar_content');
    const navActions = $('.navbar_actions');


    const toggleBarsMobile = () => {
        navContent.classList.toggle('active')
        navActions.classList.toggle('active')
    }

    barsMobile.addEventListener('click', toggleBarsMobile)
    
    /* 4. Active link header */
    
    const listLink = location.href;
    const listItem = $$('.navbar_content-link');
    const listLength = listItem.length;

    for(var i = 0; i < listLength; i++) {
        if (listItem[i].href === listLink) {
            listItem[i].classList.add('active');
        }
    }
    
    const subListLink = location.href;
    const subListItem = $$('.header_subnav-link');
    const subListLength = subListItem.length;

    for(var j = 0; j < subListLength; j++) {
        if (subListItem[j].href === subListLink) {
            subListItem[j].classList.add('active');
        }
    }

}

export default Header