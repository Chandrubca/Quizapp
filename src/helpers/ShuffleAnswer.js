export const ShuffleAnswer = (question) => {
const unshuffleAnswer = [
    question.correctAnswer, ...question.incorrectAnswers
];

return unshuffleAnswer
.map(ans=>({sort:Math.random(), val:ans}))
.sort((a,b)=>a.sort - b.sort)
.map(obj=>obj.val)
}