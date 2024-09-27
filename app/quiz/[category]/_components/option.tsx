import { Questions } from '@/public/lib/types';
import React from 'react';

const Option = ({
	currentQuestionIndex,
	selectedAnswers,
	setSelectedAnswers,
	answer,
	questions
}: {
	currentQuestionIndex: number;
	selectedAnswers: string[];
	setSelectedAnswers: any;
	answer: string;
	questions: Questions;
}) => {
	return (
		<div
			onClick={() => {
				let newSelectedAnswers = [...selectedAnswers];
				newSelectedAnswers[currentQuestionIndex] = answer;
				setSelectedAnswers(newSelectedAnswers);
			}}
			className={`rounded-[20px] hover:bg-slate-300 cursor-pointer transition-all min-h-20 p-4 px-5 min-w-full flex gap-4 items-center ${
				selectedAnswers[currentQuestionIndex] == answer ? 'border-[#44B77B] border-4 bg-white hover:bg-white' : 'bg-[#F3F4FA]'
			}`}>
			<label className="relative flex items-center cursor-pointer">
				<input defaultChecked={false} checked={selectedAnswers[currentQuestionIndex] == answer} className="sr-only peer" name="futuristic-radio" type="radio" />
				<div
					className={`w-6 h-6 bg-transparent border-4 border-black/10 rounded-full transition duration-300 ease-in-out ${
						selectedAnswers[currentQuestionIndex] == answer ? 'border-none bg-[#44B77B]' : ''
					} flex items-center justify-center text-white `}>
					{selectedAnswers[currentQuestionIndex] == answer && check}
				</div>
			</label>
			{/* @ts-ignore */}
			<span>{questions[currentQuestionIndex].answers[answer]}</span>
		</div>
	);
};

const check = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		width="16"
		height="16"
		fill="none"
		stroke="currentColor"
		stroke-width="4"
		stroke-linecap="round"
		stroke-linejoin="round">
		<polyline points="20 6 9 17 4 12" />
	</svg>
);

export default Option;
