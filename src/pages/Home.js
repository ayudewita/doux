import React, {useState} from 'react';
import '../tailwind.output.css';
// import Logo from '../images/logo-putih3.png';
import CartIcon from '../images/shopping-cart.png';
import UserIcon from '../images/user.png';
import ChatIcon from '../images/chat.png';
import Cheesecake from '../images/cheesecake.jpg';

function Home (){
	const [navbar, setNavbar] = useState(false);
	const changeBackground = () => {
		if(window.scrollY >= 40){
			setNavbar(true);
		}else{
			setNavbar(false)
		}
	}
	window.addEventListener('scroll', changeBackground);
	return(
    	<div>
			<div className="bg-img">
				<div className="bg-overlay">

					{/* Nav */}

					<nav className={navbar ? 'nav ac' : 'nav'}>
						<div className="nav-wrapper">	

							{/* Logo */}

							<div className="logo-wrapper">
								<div className="logo-link">
									<a className="logo-a" href="www.d.com">
										{/* <img src={Logo} alt="logo" className="logo" /> */}
										<div className="ft-gv">La Vie</div>
									</a>																	
								</div>
							</div>		

							{/* Search Input */}										

							<div className="search-wrapper">
								<div className="w-full">
									<form>
										<input className="transparent-search" type="text" placeholder="Search..." />									
									</form>
								</div>
							</div>

							{/* Icon */}


							<div className="icon-wrapper">									
								
								<div href="www.c.com" className="icon-link cart">
									<img className="icon" src={CartIcon} alt="" />
									<span className="badge">7</span>
									<div className="cart-tooltip">
										<div className="tooltip-title">Just Added</div>
										<div className="tooltip-product">
											<img src={Cheesecake} className="h-10" alt="" />											
											<div className="product-name">Cheesecake</div>										
											<div className="price-wrapper">
												<div className="price">$100</div>
												<div className="text-brown">Remove</div>
											</div>											
										</div>

                                        <div className="tooltip-product">
											<img src={Cheesecake} className="h-10" alt="" />											
											<div className="product-name">Cheesecake</div>										
											<div className="price-wrapper">
												<div className="price">$100</div>
												<div className="text-brown">Remove</div>
											</div>											
										</div>

										<div className="more-products">
											<a href="www.c.com" className="text-brown cart-link">20+ More Products</a>
											<a href="www.c.com" className="text-brown cart-link hidden">Cart</a>
										</div>												
									</div>
								</div>
							
								<div href="www.c.com" className="icon-link user">
									<img className="icon" src={UserIcon} alt="" />
									<div className="user-tooltip">
										<div className="text-brown cart-link">Login</div>
										<div className="text-brown cart-link">Register</div>                                  
																				
									</div>									
								</div>

								<a href="www.c.com" className="icon-link hidden">
									<img className="icon" src={ChatIcon} alt="" title="Chat" />
									<span className="badge">7</span>
								</a>

							</div>
						</div>				
					</nav>
				
					{/* Home */}

					<div className="home">
						<div className="home-wrapper">							
							<div className="home-container">
								<p className="line">Discount</p>
								<h1 className="line2">50% OFF</h1>
								<p className="line3">for second slice of cake</p>																	
							</div>				
						</div>
					</div>
				</div>
			</div>

			{/* Product List */}

			<div className="w-full flex justify-center py-6">
				<div className="mx-auto w-2/3">
				<div className="left w-2/3">
					<div className="top flex">
						<div className="top-left w-1/2 flex items-center">Showing 1 - 8 of 19 results</div>
						<div className="top-right w-1/2 flex justify-end">
							<div className="w-3/4 px-3 mb-6 md:mb-0">								
								<div className="relative">
									<select className="select block appearance-none w-full border py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white" id="grid-state">
									<option>New Mexico</option>
									<option>Missouri</option>
									<option>Texas</option>
									</select>
									<div className="dw-ar pointer-events-none absolute inset-y-0 flex items-center px-2">
										<svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="bottom flex">
						<div className="rounded-md p-3 relative">
							<div className="h-64 w-64">
								<img src={Cheesecake} alt="" className="rounded-t-md" />
							</div>
							<div className="br-clr rounded-b-md h-32 w-64 border">
								
							</div>
							<div className="prod-desc text-center rounded-sm h-24 w-56 bg-white absolute">
								<p className="ft-lr pr-nm">Strawberry Cheesecake</p>
								<p className="pr-ds">Cake with mousey cheese texture top with strawberry jam</p>
								<p className="prc">$13.00</p>
							</div>	
						</div>
						<div className="rounded-md p-3 relative">
							<div className="h-64 w-64">
								<img src={Cheesecake} alt="" className="rounded-t-md" />
							</div>
							<div className="rounded-b-md h-32 w-64 border border-gray-400">
								
							</div>
							<div className="prod-desc text-center rounded-sm h-24 w-56 bg-white absolute">
								<p className="ft-lr pr-nm">Strawberry Cheesecake</p>
								<p className="pr-ds">Cake with mousey cheese texture top with strawberry jam</p>
								<p className="prc">$13.00</p>
							</div>					
						</div>
					</div>
				</div>
				<div className="right">

				</div>
				</div>
				
			</div>
    	</div>
    );
}

export default Home;