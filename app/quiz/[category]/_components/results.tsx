'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const ResultsQuiz = ({ results }: { results: any }) => {
	const { push } = useRouter();
	return (
		<div className="flex flex-col gap-8 items-center lg:w-[30%] mt-8">
			<h3 className="text-slate-800 font-extrabold lg:text-[56px] text-3xl">Your result</h3>
			<div className="flex flex-col gap-4 items-center w-full">
				<div className="w-full gap-3 rounded-xl bg-[#44B77B]/10 h-[80px] py-5 px-5 flex items-center">
					<div className="w-6 h-6 rounded-full bg-[#44B77B]"></div>
					<p className="font-bold text-black/50 text-xl">
						<span className="font-extrabold text-black">{results.correct}</span> Correct
					</p>
				</div>
				<div className="w-full gap-3 rounded-xl bg-[#FF3B3F]/10 h-[80px] py-5 px-5 flex items-center">
					<div className="w-6 h-6 rounded-full bg-[#FF3B3F]"></div>
					<p className="font-bold text-black/50 text-xl">
						<span className="font-extrabold text-black">{results.incorrect}</span> Correct
					</p>
				</div>
			</div>
			<button
				onClick={() => window.location.reload()}
				className="bg-[#FF3B3C] group/button transition-all text-white rounded-full sm:w-[350px] w-[260px] h-[54px] sm:h-[72px] text-[24px] font-extrabold flex items-center justify-center relative disabled:bg-[#FF3B3C]/70 disabled:cursor-not-allowed">
				Start Again
			</button>
			<button
				onClick={() => push('/')}
				className="bg-[#FF3B3C] group/button transition-all text-white rounded-full sm:w-[350px] w-[260px] h-[54px] sm:h-[72px] text-[24px] font-extrabold flex items-center justify-center relative -mt-6 disabled:bg-[#FF3B3C]/70 disabled:cursor-not-allowed">
				Home
			</button>
		</div>
	);
};

export default ResultsQuiz;
