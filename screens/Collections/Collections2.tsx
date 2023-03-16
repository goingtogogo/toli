import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { theme } from '../../utils/theme'



type Props = {}

const flashcards = [{ buryat: 'хайр', english: 'hello' }, { buryat: 'баярлалаа', english: 'thank you' }, { buryat: 'сайн байна уу?', english: 'how are you?' }]  // additional flashcards...];

const quizQuestions = [{ question: 'What is the English translation for хайр?', options: ['hello', 'goodbye', 'thank you'], answer: 'hello' },
{ question: 'What is the English translation for баярлалаа?', options: ['hello', 'goodbye', 'thank you'], answer: 'thank you' },
{ question: 'What is the English translation for сайн байна уу??', options: ['how are you?', 'what is your name?', 'where are you from?'], answer: 'how are you?' },
  // additional quiz questions...
];

export function Collections(props: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flashcardsCompleted, setFlashcardsCompleted] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);


  const handleFlipCard = () => {
    setShowAnswer(true);
  };

  const handleNextCard = () => {
    setShowAnswer(false);
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setFlashcardsCompleted(true);
    }
  };

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };


  const handleQuizAnswer = (selectedAnswer) => {
    if (selectedAnswer === quizQuestions[currentQuizIndex].answer) {
      setScore({ ...score, correct: score.correct + 1 });
    } else {
      setScore({ ...score, incorrect: score.incorrect + 1 });
    }
    if (currentQuizIndex < quizQuestions.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setFlashcardsCompleted(false);
    setShowAnswer(false);
    setScore({ correct: 0, incorrect: 0 });
    setQuizStarted(false);
    setCurrentQuizIndex(0);
    setQuizCompleted(false);
  };

  return (
    <View style={styles.container}>
      <Text>Collections</Text>
      <View style={styles.container}>
        {!flashcardsCompleted && !quizStarted && (
          <>
            <Text style={styles.header}>Select a flashcard set:</Text>
            <View style={styles.flashcardSetContainer}>
              {/* Map through flashcard sets and display them as TouchableOpacity */}
              {flashcards.map((set, index) => (
                <TouchableOpacity key={index} style={styles.flashcardSetButton}>
                  <Text style={styles.flashcardSetText}>{set.buryat}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <TouchableOpacity onPress={handleStartQuiz} style={styles.startQuizButton}>
              <Text style={styles.startQuizText}>Start Quiz</Text>
            </TouchableOpacity>
          </>
        )}
        {!flashcardsCompleted && quizStarted && !quizCompleted && (
          <>
            <Text style={styles.quizHeader}>Quiz Question {currentQuizIndex + 1}</Text>
            <Text style={styles.quizQuestion}>{quizQuestions[currentQuizIndex].question}</Text>
            <View style={styles.quizOptionsContainer}>
              {/* Map through quiz options and display them as TouchableOpacity */}
              {quizQuestions[currentQuizIndex].options.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.quizOptionButton}
                  onPress={() => handleQuizAnswer(option)}
                >
                  <Text style={styles.quizOptionText}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.scoreContainer}>
              <Text style={styles.scoreText}>Correct: {score.correct}</Text>
              <Text style={styles.scoreText}>Incorrect: {score.incorrect}</Text>
            </View>
          </>
        )}
        {flashcardsCompleted && (
          <>
            <Text style={styles.header}>Flashcards Completed!</Text>
            <TouchableOpacity onPress={handleStartQuiz} style={styles.startQuizButton}>
              <Text style={styles.startQuizText}>Start Quiz</Text>
            </TouchableOpacity>
          </>
        )}
        {quizCompleted && (
          <>
            <Text style={styles.quizHeader}>Quiz Completed!</Text>
            <View style={styles.scoreContainer}>
              <Text style={styles.scoreText}>Final Score: {score.correct} / {quizQuestions.length}</Text>
            </View>
            <TouchableOpacity onPress={handleRestart} style={styles.restartButton}>
              <Text style={styles.restartText}>Restart</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  flashcardSetContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  flashcardSetButton: {
    padding: 10,
    margin: 10,
    backgroundColor: '#ccc',
    borderRadius: 10,
  },
  flashcardSetText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  startQuizButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#ff7f50',
    borderRadius: 10,
  },
  startQuizText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  quizHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  quizQuestion: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  quizOptionsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quizOptionButton: {
    padding: 10,
    margin: 10,
    backgroundColor: '#ccc',
    borderRadius: 10,
  },
  quizOptionText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  scoreText: {
    fontSize: 16,
  },
  restartButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#ff7f50',
    borderRadius: 10,
  },
  restartText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});
