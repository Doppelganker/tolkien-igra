import type { PageLoad } from './$types'
import item from './questions.json'

interface OutputProps {
	id: number
	question: string
	answer: number[]
}

export const load: PageLoad<OutputProps> = ({ params }) => {
	const id = +params.id
	return {
		id: id,
		question: item[id - 1].question,
		answer: item[id - 1].answer
	}
}
