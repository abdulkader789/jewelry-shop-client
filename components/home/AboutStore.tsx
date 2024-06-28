import React from 'react';

const AboutStore = () => {
    return (
        <div className="flex items-stretch lg:flex-row flex-col">
            <div className="lg:w-1/2 w-full p-10 relative bg-blue-700 flex flex-col">
                <div className="absolute inset-0 bg-amber-200 opacity-50"></div>
                <div className="relative lg:left-40 left-0 z-10 lg:py-10 lg:pl-10 lg:pr-16 py-5 px-5 max-w-lg border-white border-solid border-4">
                    <h2 className="text-xl font-bold mb-2"><small>ABOUT</small></h2>
                    <h1 className="text-2xl font-bold mb-4">JEWELRY STORE</h1>
                    <p className="mb-4 text-sm">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius dolores dolorum eveniet quam impedit quisquam voluptas hic doloremque itaque assumenda facere, repellendus id vero vitae recusandae culpa optio laborum natus inventore animi veniam error accusamus. Obcaecati modi necessitatibus illum nulla.
                    </p>
                    <button className="bg-white px-4 py-2 rounded">Read More</button>
                </div>
            </div>

            <div className="lg:w-1/2 w-full bg-black text-white lg:p-20 p-10 flex flex-col">
                <div className="space-y-5">
                    <StatItem icon="🏆" count="3,500 +" label="FEATURED PRODUCTS -" desc="Vivamous molestie gravida turpis" />
                    <StatItem icon="🎯" count="2,000 +" label="FACEBOOK FANS -" desc="Vivamous molestie gravida turpis" />
                    <StatItem icon="😊" count="2,000 +" label="HAPPY CUSTOMER -" desc="Vivamous molestie gravida turpis" />
                    <StatItem icon="🌎" count="1,500 +" label="STORE AROUND THE WORLD -" desc="Vivamous molestie gravida turpis" />
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
            <div className="font-bold text-xl">{count}</div>
            <div className="font-semibold text-sm text-white">{label} <small className='font-medium'>{desc}</small></div>
        </div>
    </div>
);

export default AboutStore;