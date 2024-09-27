export type CategoryType = { id: number; name: string };

export type CategoriesType = Array<CategoryType>;

export interface Tag {
	name: string;
}

export interface Answers {
	answer_a?: string | null;
	answer_b?: string | null;
	answer_c?: string | null;
	answer_d?: string | null;
	answer_e?: string | null;
	answer_f?: string | null;
}

export interface CorrectAnswers {
	answer_a_correct: boolean;
	answer_b_correct: boolean;
	answer_c_correct: boolean;
	answer_d_correct: boolean;
	answer_e_correct: boolean;
	answer_f_correct: boolean;
}

export interface Question {
	id: number;
	question: string;
	description: string | null;
	answers: Answers;
	multiple_correct_answers: string;
	correct_answers: CorrectAnswers;
	correct_answer: string;
	explanation: string | null;
	tip: string | null;
	tags: Tag[];
	category: string;
	difficulty: string;
}

export type Questions = Question[];
