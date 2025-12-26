import ServiceCard from "../components/ServiceCard";
import { posters, podcasts, videography, BundlePack } from "../utils/Constants";
import Coming from "../assets/Coming.jpg";

const ServiceSection = ({ title, services }) => (
	<section className="w-full mb-16 px-4 sm:px-6">
		<h2 className="text-center font-serif text-black text-2xl sm:text-4xl font-bold my-10 drop-shadow">
			{title}
		</h2>
		<div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
			{services?.map((service, index) => (
				<ServiceCard
					key={service.id || index}
					title={service.title}
					description={service.description}
					features={service.features}
					notIncluded={service.notIncluded}
					Icon={service.icon}
					price={service.price}
				/>
			))}
		</div>
	</section>
);

// const BundlePackage = ({ bundlePack }) => (
//     <div className="">
//         <div className="relative w-full ">
//             <h1 className="font-serif w-full text-center text-black text-4xl sm:text-6xl font-bold drop-shadow-lg">
//                 BUNDLED PACKAGES
//             </h1>
//             <p className="font-mono text-slate-800 text-center w-full">
//                 (Best Value)
//             </p>
//         </div>
//         <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-y-12">
//             {bundlePack &&
//                 bundlePack.map((service, index) => (
//                     <ServiceCard
//                         key={index}
//                         title={service.title}
//                         description={service.description}
//                         features={service.features}
//                         Icon={service.icon}
//                         price={service.price}
//                     />
//                 ))}
//         </div>
//     </div>
// )

const Service = () => {
  return (
		<main className="w-full overflow-x-hidden">
			<div className="flex flex-col items-center px-4 sm:px-6">
				<h1 className="text-2xl sm:text-3xl font-bold my-8 text-center">
					Our Marketing Services
				</h1>
				<p className="text-gray-800 mb-6 mx-3 text-lg text-wrap text-center">
					It's Your <strong>Industry's Time</strong> to Shine, with{" "}
					<strong>Industries Times</strong>! We don't just report success; we
					create it. We craft magnetic posters, viral-ready reels, engaging
					podcasts, cinematic videography, and provide razor-sharp editing to
					make your business iconic. Get all your marketing firepower in one
					place and dominate your sector.
				</p>

				{/* Bundled Package */}
				{/* <BundlePackage bundlePack={BundlePack} /> */}


				<ServiceSection title="Posters" services={posters} />
				<ServiceSection title="Podcast Shooting" services={podcasts} />
				<ServiceSection title="Videography" services={videography} />

				{/* Coming Soon Section */}
				<section className="w-full mb-20 px-4 sm:px-6">
					<h2 className="font-serif text-xl sm:text-3xl font-bold text-center text-black my-10 drop-shadow">
						SEO Optimization, Web Designing, SEM and More ...
					</h2>
					<p className="text-center font-mono text-base sm:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-6">
						Stay tuned for updates
					</p>
					<div className="flex justify-center">
						<img
							src={Coming}
							alt="Coming soon"
							loading="lazy"
							className="w-full max-w-screen-sm h-auto object-contain"
						/>
					</div>
				</section>
			</div>
		</main>
	);
};

export default Service;
