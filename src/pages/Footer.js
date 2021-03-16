import React, {useState} from 'react';



import Delivery from '../images/delivery.png';
import Alarm from '../images/alarm.png';
import Instagram from '../images/instagram.png';

function Home (){
	
	return(
    	<div>
			

			{/* Footer */}

			<div className="footer w-full">
				<div className="pt-16 pb-12 text-white text-center w-full sm:w-4/5 flex flex-wrap flex-row mx-auto">
					<div className="w-full lg:w-1/3 mb-5 px-4">
						<img src={Delivery} alt="d" className="mx-auto" />
						<p className="ft-lr pr-nm font-bold text-md text-white">Delivery Service</p>
						<hr className="udlw"/>
						<p className="text-sm">249 Street Ung Van Khiem, Ward 25,</p>
						<p className="text-sm">Prime Wild District, JHSK, Polynesia</p>
						<a href="g.com" className="text-sm">lavie.polynesia@company.com</a>
						<p className="ph mt-3">+54864723876</p>
					</div>
					<div className="w-full lg:w-1/3 mb-5 px-4">
						<img src={Alarm} alt="d" className="mx-auto" />
						<p className="ft-lr pr-nm font-bold text-md text-white">Opening Time</p>
						<hr className="udlw"/>
						<p className="tm font-semibold uppercase py-1 px-6 text-sm">Weekdays Service</p>
						<p className="mb-3 italic text-sm">Monday-Friday: 10am - 8pm</p>
						<p className="tm font-semibold uppercase py-1 px-6 text-sm">Weekend Service</p>
						<p className="text-sm italic">Saturday-Sunday: 11am - 10pm</p>
					</div>
					<div className="w-full lg:w-1/3 mb-5 px-4">
						<img src={Instagram} alt="d" className="mx-auto" />
						<p className="ft-lr pr-nm font-bold text-md text-white">Follow Us</p>
						<hr className="udlw"/>
						<p className="text-sm">Follow to <a href="g.com" className="ft-gv text-lg">La Vie</a> instagram to get </p>
						<p className="text-sm">regular updates about our offers</p>
					</div>
				</div>
			</div>
			<div className="bg-gray-300 text-center py-10">				
				<p className="ft-gv text-4xl lg-br">La Vie</p>
				<p className="text-xs text-gray-600">Copyright &copy; 2021 La Vie Patisserie. All Right Reserved</p>
			</div>
    	</div>
    );
}

export default Home;