import React, {useState, useEffect} from 'react';
import '../tailwind.output.css';
import Logo from '../images/logo-putih3.png';
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
										<img src={Logo} alt="logo" className="logo" />
										<div>Doux</div>
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

								<a href="www.c.com" className="icon-link">
									<img className="icon" src={ChatIcon} alt="" />
									<span className="badge">7</span>
								</a>

							</div>
					</div>

				
				</nav>
				

{/* Hero */}
<div className="pt-24">

<div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
	{/* Left Col */}
	<div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
		<p className="uppercase tracking-loose w-full">What business are you?</p>
		<h1 className="my-4 text-5xl font-bold leading-tight">Main Hero Message to sell yourself!</h1>
		<p className="leading-normal text-2xl mb-8">Sub-hero message, not too long and not too short. Make it just right!</p>
	
		

		<button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">Subscribe</button>
		
	</div>
	{/* Right Col */}
	<div className="w-full md:w-3/5 py-6 text-center">
		<img className="w-full md:w-4/5 z-50" src="hero.png" alt="" />
	</div>
	
</div>

</div>



</div>
			</div>

			<div className="pt-24">

<div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
	{/* Left Col */}
	<div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
		<p className="uppercase tracking-loose w-full">What business are you?</p>
		<h1 className="my-4 text-5xl font-bold leading-tight">Main Hero Message to sell yourself!</h1>
		<p className="leading-normal text-2xl mb-8">Sub-hero message, not too long and not too short. Make it just right!</p>
	
		

		<button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">Subscribe</button>
		
	</div>
	{/* Right Col */}
	<div className="w-full md:w-3/5 py-6 text-center">
		<img className="w-full md:w-4/5 z-50" src="hero.png" alt="" />
	</div>
	
</div>

</div>


      </div>
    );
}

export default Home;