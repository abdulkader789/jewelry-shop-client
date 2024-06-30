import React from 'react';
import '@/styles/font.css';

const AboutStore = () => {
    return (
        <div className="flex items-stretch lg:flex-row flex-col">
            <div className="lg:w-1/2 w-full p-10 relative flex flex-col bg-[url('/bg-about.jpg')] bg-cover bg-center">
                <div className="absolute inset-0 bg-amber-200 opacity-55"></div>
                <div className="relative lg:left-40 left-0 z-10 lg:py-10 lg:pl-10 lg:pr-16 py-5 px-5 max-w-lg border-white border-solid border-4">
                    <h2 className="text-xl font-heading mb-1"><small>ABOUT</small></h2>
                    <h1 className="text-2xl font-heading mb-3">JEWELRY STORE</h1>
                    <p className="mb-4 text-sm font-paragraph">
                        Jewelry is a prestigious global brand renowned for its exquisite and diverse collections. Celebrated by a vast community of loyal customers and Facebook fans, our stores around the world feature exclusive designs. We offer exceptional craftsmanship and occasional discounts, ensuring each piece is a timeless treasure.
                    </p>
                    <button className="bg-white font-button px-4 py-2 rounded">Read More</button>
                </div>
            </div>

            <div className="lg:w-1/2 w-full bg-black text-white lg:p-20 p-10 flex flex-col">
                <div className="space-y-5">
                    <StatItem icon="🏆" count="3,500 +" label="FEATURED PRODUCTS -" desc="Premium, unique designs" />
                    <StatItem icon="🎯" count="2,000 +" label="FACEBOOK FANS -" desc="Join our vibrant community" />
                    <StatItem icon="😊" count="2,000 +" label="HAPPY CUSTOMER -" desc="Satisfied, loyal clients" />
                    <StatItem icon="🌎" count="1,500 +" label="STORE AROUND THE WORLD -" desc="Extensive global network" />
                </div>
            </div>
        </div>
    );
};

const StatItem = ({ icon, count, label, desc }) => (
    <div className="flex items-center space-x-4">
        <div className="w-8 h-8 p-2 bg-white text-black rounded-full flex items-center justify-center">
            {icon}
        </div>
        <div>
            <div className="font-paragraph text-xl">{count}</div>
            <div className="font-paragraph text-sm text-white">{label} <small className='font-medium'>{desc}</small></div>
        </div>
    </div>
);

export default AboutStore;