import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<div
			className="h-screen w-screen flex flex-col items-center justify-between p-12"
			style={{ background: 'linear-gradient(180deg, rgba(175, 156, 243, 0) 7.92%, #AF9CF3 86.48%)' }}>
			<div className="md:w-[290px] w-[200px] h-[70px]">
				<Image alt="Upraised Logo" src="/assets/images/logo.svg" width={300} height={100} />
			</div>
			<div className="rounded-full bg-white md:w-[300px] h-[200px] w-[200px] md:h-[300px] flex items-center justify-center" style={{ boxShadow: '0px 8px 8px 0px #0000001A' }}>
				<h1 className="text-[#FF3B3C] font-extrabold text-[80px]">Quiz</h1>
			</div>
			<Link
				href="/start"
				className="bg-[#FF3B3C] hover:shadow-2xl transition-all text-white rounded-full md:w-[350px] md:h-[72px] w-[200px] h-[54px] md:text-[32px] text-[24px] font-extrabold flex items-center justify-center">
				Start
			</Link>
		</div>
	);
}
