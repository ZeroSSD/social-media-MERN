import React, { useState } from 'react';
import { Link,withRouter } from 'react-router-dom';
function Quiz(){
    const questions = [
		{
			questionText: 'Process of inserting an element in stack is called',
			answerOptions: [
				{ answerText: 'Pop', isCorrect: false },
				{ answerText: 'Create', isCorrect: false },
				{ answerText: 'Push', isCorrect: true },
				{ answerText: 'Down', isCorrect: false },
			],
		},

		{
			questionText: 'Process of Removing an element from stack is called',
			answerOptions: [
				{ answerText: 'Pop', isCorrect: true },
				{ answerText: 'Create', isCorrect: false },
				{ answerText: 'Push', isCorrect: false },
				{ answerText: 'Down', isCorrect: false },
			],
		},
		
		{
			questionText: 'Which case of data structure operation takes maximum time?',
			answerOptions: [
				{ answerText: 'Worst Case', isCorrect: true },
				{ answerText: 'Best Case', isCorrect: false },
				{ answerText: 'Average Case', isCorrect: false },
				{ answerText: 'None of the above', isCorrect: false },
			],
		},
		{
			questionText: 'Which data structure allows deleting data elements from front and inserting at rear?',
			answerOptions: [
				{ answerText: 'Stacks', isCorrect: false },
				{ answerText: 'Queues', isCorrect: true },
				{ answerText: 'Deques', isCorrect: false },
				{ answerText: 'Binary Search Tree', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following sorting algorithm is of divide-and-conquer type?',
			answerOptions: [
				{ answerText: 'Bubble Sort', isCorrect: false },
				{ answerText: 'Insertion Sort', isCorrect: false },
				{ answerText: 'Quick Sort', isCorrect: true },
				{ answerText: 'Selection Sort', isCorrect: false },
			],
		},
		{
			questionText: 'What type of an algorithms running time is represented by omega notation ?',
			answerOptions: [
				{ answerText: 'upper bound', isCorrect: false },
				{ answerText: 'medium bound', isCorrect: false },
				{ answerText: 'lower bound', isCorrect: true},
				{ answerText: 'Both medium and lower bound', isCorrect: false },
			],
		},

		{
			questionText: 'What is the full form of HTML?',
			answerOptions: [
				{ answerText: 'Hyper Text Mark Up Language', isCorrect: true },
				{ answerText: 'Hollow Target Mark Up Language', isCorrect: false },
				{ answerText: 'Hyper Text Money Up Language', isCorrect: false },
				{ answerText: 'Hyperlink Transfer Mark Up Language', isCorrect: false },
			],
		},

		{
			questionText: 'A linear collection of data elements where the linear node is given by means of pointer is called?',
			answerOptions: [
				{ answerText: 'Node list', isCorrect: false },
				{ answerText: 'Linked list', isCorrect: true },
				{ answerText: 'Stack', isCorrect: false },
				{ answerText: 'Array', isCorrect: false },
			],
		},

		{
			questionText: 'What in an algorithm represnts the amount of memory space required by the algorithm in its life cycle ?',
			answerOptions: [
				{ answerText: 'Space Complexity', isCorrect: true },
				{ answerText: 'Time Complexity', isCorrect: false },
				{ answerText: 'Quadratic Complexity', isCorrect: false },
				{ answerText: 'Exponential Complexity', isCorrect: false },
			],
		},

		{
			questionText: 'What is the type of the algorithm used in solving the 8 Queens problem?',
			answerOptions: [
				{ answerText: 'Backtracking', isCorrect: true },
				{ answerText: 'Dynamic', isCorrect: false },
				{ answerText: 'Branch and Bound', isCorrect: false },
				{ answerText: 'Both A and B', isCorrect: false },
			],
		},
		
	];
	const [currentQuestion,setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score,setScore] = useState(0);
	const handleAnswerClick = (isCorrect) =>{
		if(isCorrect)
		{
			setScore(score+1);
		}
		const nextQuestion = currentQuestion+1;
		if(nextQuestion<questions.length){
			setCurrentQuestion(nextQuestion);
		}
		else{
			setShowScore(true);
		}
	}

    return(
		<div>
			{showScore?
			(
				<div className="container">
					<Link to="/dashboard" className="btn btn-primary">
                        Go Back
                    </Link>
					<br /><br /><br />
					 <h1 className="display-4 text-center">You scored {score} out of {questions.length}</h1>
				</div>
			):
			(
				<div className="create-profile">
                	<div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
						<h1 className="display-4 text-center">Skill Test</h1>
						<p className="lead text-center">Get a chance to check your technical skills and improve them. Only you can see how you performed in the test.</p>
						<br/>
					 <div className="question-section">
						<span>Question {currentQuestion+1} of {questions.length}</span> 
						<br/>
						<div className="question-text">
							<h2>{questions[currentQuestion].questionText}</h2>
							<br/>
						</div>
						<div className="answer-section">
							{questions[currentQuestion].answerOptions.map((answerOption,keyA)=>(
								<div key={keyA}>								
								 {/*<button onClick={()=>{handleAnswerClick(answerOption.isCorrect)}}>Option {keyA+1}</button>
								  <p>{answerOption.answerText}</p>*/}	 

								  <button 
                                        type="button"
                                        className="btn btn-primary" onClick={()=>{handleAnswerClick(answerOption.isCorrect)}}>
                                        {answerOption.answerText}
                                  </button>

								 <br/> <br /> <br/>
								</div>
							))}
						</div>
					 </div>
					 </div>
					 </div>
					 </div>
				</div>
			)
			}
		</div>	
        
    )
}

export default Quiz;