'use client';

import { API_KEY, BASE_URL } from '@/public/lib/constants';
import { Questions } from '@/public/lib/types';
import Head from 'next/head';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import ResultsQuiz from './_components/results';
import QuizLoader from './_components/quiz-loader';
import Option from './_components/option';
import QuestionTracker from './_components/question-tracker';

const CategoryQuiz = () => {
	const { category } = useParams();
	const [questions, setQuestions] = useState<Questions>([]);
	const [loading, setLoading] = useState(false);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [selectedAnswers, setSelectedAnswers] = useState<Array<string>>([]);
	const [results, setResults] = useState({
		correct: 0,
		incorrect: 0
	});

	useEffect(() => {
		setLoading(true);
		fetch(`${BASE_URL}/v1/questions?category=${category}&apiKey=${API_KEY}`)
			.then(res => res.json())
			.then(data => {
				setQuestions(data);
				setSelectedAnswers(new Array(data.length));
			})
			.finally(() => setLoading(false));
	}, []);

	useEffect(() => {
		if (currentQuestionIndex === questions.length) {
			setResults(
				selectedAnswers.reduce(
					(acc, answer, index) => (questions[index].correct_answer === answer ? { ...acc, correct: acc.correct + 1 } : { ...acc, incorrect: acc.incorrect + 1 }),
					{
						correct: 0,
						incorrect: 0
					}
				)
			);
		}
	}, [currentQuestionIndex]);

	return (
		<>
			<Head>
				<title>{category} Quiz | Upraised Challenge</title>
			</Head>
			<div className="h-screen w-screen flex flex-col gap-14 items-center bg-[#AF9CF3]">
				<div className="h-[100px]">
					<Image src="/assets/images/quiz-top-bg.svg" alt="" width={600} height={100} />
				</div>
				<div className="rounded-t-[60px] h-full w-full bg-white relative flex flex-col items-center gap-6">
					{currentQuestionIndex < questions.length && <QuestionTracker currentQuestionIndex={currentQuestionIndex} totalLength={questions.length} />}
					{currentQuestionIndex < questions.length && (
						<>
							<div className="flex flex-col items-center md:w-[70%] md:pt-28 pt-16 gap-5 sm:px-10 px-5 lg:mb-0 md:mb-[500px] mb-32">
								<h3 className="md:font-extrabold lg:text-[40px] md:text-[28px] text-[20px] font-bold text-center">{questions[currentQuestionIndex].question}</h3>
								<div className="grid xl:grid-cols-2 gap-4 min-w-full">
									{Object.keys(questions[currentQuestionIndex].answers)
										// @ts-ignore
										.filter(key => questions[currentQuestionIndex].answers[key])
										.map(answer => (
											<Option
												key={answer}
												answer={answer}
												currentQuestionIndex={currentQuestionIndex}
												selectedAnswers={selectedAnswers}
												setSelectedAnswers={setSelectedAnswers}
												questions={questions}
											/>
										))}
								</div>
							</div>
							<button
								disabled={!selectedAnswers[currentQuestionIndex]}
								onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
								className="bg-[#FF3B3C] group/button transition-all text-white rounded-full min-w-[260px] md:w-[350px] min-h-[50px] md:min-h-[72px] text-[20px] md:text-[24px] font-extrabold flex items-center justify-center lg:relative mb-6 disabled:bg-red-300 disabled:cursor-not-allowed fixed bottom-0">
								<p className="w-full">Next</p>
								<div
									className={`absolute md:top-[40%] right-6 md:right-8 ${
										selectedAnswers[currentQuestionIndex] ? 'group-hover/button:right-6' : ''
									} transition-all`}>
									{rightArrowSVG}
								</div>
							</button>
						</>
					)}
					{!!questions.length && currentQuestionIndex === questions.length && <ResultsQuiz results={results} />}
				</div>
			</div>
			{loading && <QuizLoader />}
		</>
	);
};

const rightArrowSVG = (
	<svg width="24" height="16" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M26.4853 14.1421L18 22.6274L15.1716 19.799L21.1716 13.799L0.828441 13.799V9.79897H22.1421L15.1716 2.82844L18 1.23978e-05L26.4853 8.48529L29.3137 11.3137L26.4853 14.1421Z"
			fill="white"
		/>
	</svg>
);

export default CategoryQuiz;
