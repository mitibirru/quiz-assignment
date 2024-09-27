import React from 'react';

const QuestionTracker = ({ currentQuestionIndex, totalLength }: { currentQuestionIndex: number; totalLength: number }) => {
	return (
		<div className="absolute rounded-full -top-[100px] w-[150px] h-[150px] md:h-[200px] md:w-[200px] bg-white p-4">
			<div className="relative w-full h-full rounded-full border-[16px] border-[#F3F4FA] flex items-center justify-center">
				<svg className="absolute hidden md:block -top-8 -left-8" width="200" height="200">
					<circle
						cx="100"
						cy="100"
						r="75"
						stroke="#44B77B"
						strokeWidth="16"
						fill="none"
						strokeDasharray={`${(currentQuestionIndex / totalLength) * 502.65} 502.65`} // Circumference
						style={{
							transition: 'stroke-dasharray 0.5s ease-in-out',
							transform: 'rotate(-90deg)',
							transformOrigin: '50% 50%'
						}}
					/>
				</svg>
				<svg className="absolute md:hidden -top-8 -left-8" width="200" height="200">
					<circle
						cx="125"
						cy="75"
						r="51"
						stroke="#44B77B"
						strokeWidth="16"
						fill="none"
						strokeDasharray={`${(currentQuestionIndex / totalLength) * 502.65} 502.65`}
						style={{
							transition: 'stroke-dasharray 0.5s ease-in-out',
							transform: 'rotate(-90deg)',
							transformOrigin: '50% 50%'
						}}
					/>
				</svg>

				<p style={{ fontWeight: 900, fontStyle: 'italic' }}>
					<span className="text-slate-800 md:text-[70px] text-[40px]">{currentQuestionIndex + 1}</span>
					<span className="text-zinc-400 md:text-[24px]">/{totalLength}</span>
				</p>
			</div>
		</div>
	);
};

export default QuestionTracker;
