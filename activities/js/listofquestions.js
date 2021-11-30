/*for those of you who are reading the list of questions, here is how the listOfQuestions object is created:

Type: 'normal' or 'in order'; 'normal' means that the choices will be rearranged. 'in order' means that choices will be in order for some particular reasons (i.e. "all of the above" questions)

Difficulty: Listed from 1-3.
1 = Easy
2 = Medium
3 = Hard

The 'category' property will be used to filter out certain questions, depending on what the user wants to take the quiz on.

The 'explanation' property, as its name implies, would show the explanation when the user wants to go over any of the questions. A "C" on the explanation property will mean that the question is pretty much common sense, and no explanation will be provided.

This .js file is used simply for storage of questions. Feel free to edit any of the questions if needed. To look at the actual game code, go to game.js.

*/

var listOfQuestions = 
[{question: 'The dysphoric state of SUD is fueled by stress-related hormones such as?', choices: ['Corticotropin releasing factor (CRF)', 'Cortisol', 'Dopamine', 'Adrenaline'], answer: 'Corticotropin releasing factor (CRF)', type: 'normal', category: [2], explanation: 'C'},

{question: 'What is the active ingredient in marijuana?', choices: ['THC', 'Cannabis', 'Nicotine', 'Carcinogens'], answer: 'THC', type: 'normal', category: [1, 2], explanation: 'C'},

{question: 'What is the 1st stage of substance use disorders?', choices: ['Intoxication', 'Anticipation', 'Withdrawal', 'Craving'], answer: 'Intoxication', type: 'normal', category: [2], explanation: 'C'},

{question: 'How many adolesents struggled with alcohol use disorder in the past year?', choices: ['50,000', '128,000', '349,000', '414,000'], answer: '414,000', type: 'in order', category: [2, 3], explanation: 'C'},

{question: 'Nitrous oxide is known as?', choices: ['Inhalant', 'Hallucinogen', 'Prescription drug', 'Stimulant'], answer: 'Inhalant', type: 'normal', category: [2, 3], explanation: 'C'},

{question: 'What is the most widely used illicit drug amongst adolescents?', choices: ['Nitrous oxide', 'Marijuana', 'Cocaine', 'Heroin'], answer: 'Marijuana', type: 'normal', category: [1, 2], explanation: 'C'},

{question: 'What percentage of high school seniors have used alcohol once in their life?', choices: ['10%', '27%', '44%', '61%'], answer: '61%', type: 'in order', category: [1, 2], explanation: 'C'},

{question: 'Is there a difference between substance use and substance use disorders?', choices: ['No, the terms are used interchangeably.', 'No, all people who have used a substance can be classified as having a substance use disorder.', 'Yes, substance use disorders can be caused by substance use, and it is a behavioral problem.', 'Yes, substance use disorders can be caused by substance use, and has physical signs and symptoms.'], answer: 'Yes, substance use disorders can be caused by substance use, and it is a behavioral problem.', type: 'in order', category: [1, 2, 3], explanation: 'There is a difference between substance use and substance use disorders. Substance use disorders is the uncontrollable use of a particular substance, and it is a behavioral problem. Substance use, as its name implies, is when an individual uses a substance. The danger of substance use is that it could lead to substance use disorders.'},

{question: 'About ____ of marijuana users in high school get D\'s and F\'s.', choices: ['Half', 'a third', 'a quarter', 'three-quarters'], answer: 'Half', type: 'normal', category: [2, 3], explanation: 'To be exact, 48% of marijuana users in high school get D\'s and F\'s. This is opposed to 10% of marijuana users who get A\'s.',},

{question: 'What is the leading cause of preventable death in the United States?', choices: ['Alcohol use', 'Heart attacks', 'Smoking', 'Methamphetamine'], answer: 'Smoking', type: 'normal', category: [1, 2, 3]},
];