function Footer() {
    const footer = document.getElementById('footer');
    footer.innerHTML = ` 
        <div class="grid wide">
        <div class="row a-items">
            <div class="col l-3 m-12 c-12">
                <div class="footer_heading">
                    <h1>Fruitables</h1>
                    <p>Fresh products</p>
                </div>
            </div>
            <div class="col l-6 m-12 c-12">
                <div class="search_input w-100 border-n m-t-24 m-b-24">
                    <input type="email" placeholder="Your Email" class="input_search">
                    <button class="btn btn_submit border-n">Subscribe Now</button>
                </div>
            </div>
            <div class="col l-3 m-12 c-12">
                <div class="footer_icon-link">
                    <a href="#" class="footer_link">
                        <i class="fa-brands fa-twitter"></i>
                    </a>                            
                    <a href="#" class="footer_link">
                        <i class="fa-brands fa-facebook-f"></i>
                    </a>                            
                    <a href="#" class="footer_link">
                        <i class="fa-brands fa-youtube"></i>
                    </a>                            
                    <a href="#" class="footer_link">
                        <i class="fa-brands fa-linkedin-in"></i>
                    </a>         
                </div>           
            </div>
        </div>
        <div class="border_bottom bg-yellow-rgba"></div>
        <div class="row a-items">
            <div class="col l-3 m-6 c-12">
                <div class="footer_content">
                    <h4>Why People Like us!</h4>
                    <p>typesetting, remaining essentially unchanged. It was popularised in the 1960s with the like Aldus PageMaker including of Lorem Ipsum.</p>
                    <button class="btn btn_add-cart footer_btn">
                        <span>Read More</span>
                    </button>
                </div>
            </div>
            <div class="col l-3 m-6 c-12">
                <div class="footer_content m-t-24-mobile">
                    <h4>Shop Info</h4>
                    <ul class="footer_list">
                        <li class="footer_item">
                            <a href="#" class="footer_item-link">About Us</a>
                        </li>
                        <li class="footer_item">
                            <a href="#" class="footer_item-link">Contact Us</a>
                        </li>
                        <li class="footer_item">
                            <a href="#" class="footer_item-link">Privacy Policy</a>
                        </li>
                        <li class="footer_item">
                            <a href="#" class="footer_item-link">Terms & Condition</a>
                        </li>
                        <li class="footer_item">
                            <a href="#" class="footer_item-link">Return Policy</a>
                        </li>
                        <li class="footer_item">
                            <a href="#" class="footer_item-link">FAQs & Help</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col l-3 m-6 c-12">
                <div class="footer_content m-t-24">
                    <h4>Account</h4>
                    <ul class="footer_list">
                        <li class="footer_item">
                            <a href="#" class="footer_item-link">My Account</a>
                        </li>
                        <li class="footer_item">
                            <a href="#" class="footer_item-link">Shope details</a>
                        </li>
                        <li class="footer_item">
                            <a href="#" class="footer_item-link">Shopping Cart</a>
                        </li>
                        <li class="footer_item">
                            <a href="#" class="footer_item-link">Wishlist</a>
                        </li>
                        <li class="footer_item">
                            <a href="#" class="footer_item-link">Order History</a>
                        </li>
                        <li class="footer_item">
                            <a href="#" class="footer_item-link">International Orders</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col l-3 m-6 c-12">
                <div class="footer_content m-t-24">
                    <h4>Contact</h4>
                    <ul class="footer_list">
                        <li class="footer_item m-b-16">
                            <a href="#" class="footer_item-link l-h-24">Address: Viet Nam</a>
                        </li>
                        <li class="footer_item m-b-16">
                            <a href="#" class="footer_item-link l-h-24">Email: Example@gmail.com</a>
                        </li>
                        <li class="footer_item m-b-16">
                            <a href="#" class="footer_item-link l-h-24">Phone: +0123 4567 8910</a>
                        </li>
                        <li class="footer_item m-b-16">
                            <a href="#" class="footer_item-link l-h-24">Payment Accepted</a>
                        </li>
                        <li class="footer_item">
                            <img src="./assets/images/footer/payment.png" alt="" class="footer_image">
                        </li>
                    
                    </ul>
                </div>
            </div>
        </div>
        <div class="copy-right">
            <div class="row a-items">
                <div class="col l-6 m-6 c-12">
                    <div class="copy-right_body">
                        <p class="copy-right_desc">
                            <a href="#" class="copy-right_name">
                            <i class="fa-solid fa-copyright copy-right_icon"></i>
                                Your Site Name,
                            </a>
                            All tight Reserved.
                        </p>
                    </div>
                </div>
                <div class="col l-6 m-6 c-12">
                    <div class="copy-right_body j-flex-end m-t-24-mobile">
                        <p class="copy-right_desc">Designed By<a href="#" class="copy-right_name border_bottom-white ">HTML Codex</a> 
                            Distributed By<a href="#" class="copy-right_name border_bottom-white ">ThemeWagon</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>  `
}

export default Footer