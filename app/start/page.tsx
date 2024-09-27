'use client';

import { API_KEY, BASE_URL } from '@/public/lib/constants';
import { CategoriesType } from '@/public/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const QuizStart = () => {
	const [categories, setCategories] = useState<CategoriesType>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`${BASE_URL}/v1/categories?apiKey=${API_KEY}`)
			.then(res => res.json())
			.then(data => setCategories(data))
			.finally(() => setLoading(false));
	}, []);

	return (
		<div className="min-h-screen w-screen flex flex-col items-center gap-8 p-12" style={{ background: 'linear-gradient(180deg, rgba(175, 156, 243, 0) 7.92%, #AF9CF3 86.48%)' }}>
			<div className="w-[290px] h-[70px]">
				<Image alt="Upraised Logo" src="/assets/images/logo.svg" width={300} height={100} />
			</div>
			<div className="flex flex-col gap-6 lg:w-[60%] w-full items-center mt-12">
				{!loading ? (
					<>
						<p className="font-extrabold text-3xl">Choose a topic!</p>
						<div className="grid md:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 items-center gap-8">
							{categories.map(cat => (
								<QuizCategorySelectionCard category={cat} key={cat.id} />
							))}
						</div>
					</>
				) : (
					<div className="fixed top-0 left-0 w-screen h-screen bg-slate-200/50 flex items-center justify-center">
						<div className="flex items-center gap-2">
							<svg className="animate-spin bg-indigo-500 h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
							<p className="text-lg font-bold text-slate-700">Loading Categories...</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

const QuizCategorySelectionCard = ({ category }: { category: { id: number; name: string } }) => {
	return (
		<Link href={`/quiz/${category.name}`} className="flex flex-col group/category items-center gap-2 w-full h-full border-2 border-indigo-500 hover:bg-indigo-50/90 py-8 px-4 rounded-xl">
			<h4 className="text-xl font-extrabold text-slate-800">
				{category.id}. {category.name}
			</h4>
			<p className="text-orange-600 font-bold text-lg group-hover/category:text-xl transition-all">Start Quiz</p>
		</Link>
	);
};

export default QuizStart;
