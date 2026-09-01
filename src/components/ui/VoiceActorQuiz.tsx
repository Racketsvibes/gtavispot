'use client';

import React, { useState } from 'react';
import styles from './VoiceActorQuiz.module.css';

interface PollOption {
  id: string;
  name: string;
  actor: string;
  baseVotes: number;
}

interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const initialPollOptions: PollOption[] = [
  { id: 'lucia', name: 'Lucia Caminos', actor: 'Manni L. Perez', baseVotes: 7120 },
  { id: 'jason', name: 'Jason Duval', actor: 'Gregory Connors', baseVotes: 4890 },
  { id: 'raul', name: 'Raul Bautista', actor: 'Cartel Boss Contact', baseVotes: 1640 },
  { id: 'boobie', name: 'Boobie Ike', actor: 'Nightclub Entrepreneur', baseVotes: 780 },
  { id: 'cal', name: 'Sheriff Cal Hampton', actor: 'Kelly County Antagonist', baseVotes: 590 },
];

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What technique did Rockstar Games use for recording Lucia and Jason’s performances?',
    options: [
      'Full 3D Performance Capture (Voice, Facial Mocap & Body Movement simultaneously)',
      'Traditional voice-over booths with separate animators',
      'AI-generated vocal synthesizers',
      'Pre-rendered dialogue with outsourced dubbing'
    ],
    correctIndex: 0,
    explanation: 'Rockstar Games utilized full-body performance capture with head-mounted camera rigs in dedicated studios across New York and London over 3+ years.'
  },
  {
    question: 'Which actress is widely recognized by the community as the face and voice of Lucia?',
    options: [
      'Laura Bailey',
      'Manni L. Perez',
      'Stefanie Joosten',
      'Michelle Rodriguez'
    ],
    correctIndex: 1,
    explanation: 'Manni L. Perez is matched to Lucia based on identical facial structure, vocal registry, motion-capture credits, and previous work with Rockstar on GTA Online.'
  },
  {
    question: 'Will GTA 5 main characters (Michael, Franklin, Trevor) return as playable leads in GTA 6?',
    options: [
      'Yes, all three return as lead characters in Leonida',
      'Only Trevor returns as a cartel contact',
      'No, Rockstar maintains a fresh standalone cast for the Leonida story',
      'Michael is confirmed as the state governor'
    ],
    correctIndex: 2,
    explanation: 'Rockstar has maintained their policy of separating storylines between major entries, keeping the focus entirely on Lucia and Jason.'
  }
];

export default function VoiceActorQuiz() {
  const [activeTab, setActiveTab] = useState<'poll' | 'quiz'>('poll');

  // Poll state
  const [pollOptions, setPollOptions] = useState<PollOption[]>(initialPollOptions);
  const [selectedPoll, setSelectedPoll] = useState<string | null>(null);
  const [hasVoted, setHasVoted] = useState(false);

  // Quiz state
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isQuizDone, setIsQuizDone] = useState(false);

  // Poll handler
  const handleVote = (optionId: string) => {
    if (hasVoted) return;
    setSelectedPoll(optionId);
    setHasVoted(true);
    setPollOptions(prev =>
      prev.map(opt => (opt.id === optionId ? { ...opt, baseVotes: opt.baseVotes + 1 } : opt))
    );
  };

  const totalVotes = pollOptions.reduce((acc, curr) => acc + curr.baseVotes, 0);

  // Quiz handler
  const handleAnswer = (index: number) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
    setIsAnswered(true);
    if (index === quizQuestions[currentQIndex].correctIndex) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQIndex < quizQuestions.length - 1) {
      setCurrentQIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setIsQuizDone(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setIsQuizDone(false);
  };

  return (
    <div className={styles.quizWrapper}>
      <div className={styles.header}>
        <span className={styles.badge}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          Interactive Hub
        </span>
        <h3 className={styles.title}>Voice Cast Community Hub & Quiz</h3>
      </div>

      <div className={styles.tabs}>
        <button
          className={`${styles.tabBtn} ${activeTab === 'poll' ? styles.tabBtnActive : ''}`}
          onClick={() => setActiveTab('poll')}
          type="button"
        >
          📊 Community Poll
        </button>
        <button
          className={`${styles.tabBtn} ${activeTab === 'quiz' ? styles.tabBtnActive : ''}`}
          onClick={() => setActiveTab('quiz')}
          type="button"
        >
          🎯 Casting Trivia Quiz
        </button>
      </div>

      {activeTab === 'poll' ? (
        <div>
          <div className={styles.pollQuestion}>
            Which GTA 6 voice performance are you most excited to experience?
          </div>
          <div className={styles.pollOptions}>
            {pollOptions.map(opt => {
              const percentage = Math.round((opt.baseVotes / totalVotes) * 100);
              const isSelected = selectedPoll === opt.id;

              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleVote(opt.id)}
                  className={`${styles.pollOptionBtn} ${isSelected ? styles.pollOptionBtnSelected : ''}`}
                >
                  {hasVoted && (
                    <div
                      className={styles.pollBar}
                      style={{ width: `${percentage}%` }}
                    />
                  )}
                  <div className={styles.pollOptionContent}>
                    <span>{isSelected ? '✅ ' : '⚪ '}</span>
                    <span>
                      <strong>{opt.name}</strong> ({opt.actor})
                    </span>
                  </div>
                  {hasVoted && (
                    <span className={styles.pollPercent}>{percentage}%</span>
                  )}
                </button>
              );
            })}
          </div>

          <div className={styles.pollFooter}>
            <span>{hasVoted ? 'Thanks for voting!' : 'Click any option to cast your vote'}</span>
            <span>Total Community Votes: {totalVotes.toLocaleString()}</span>
          </div>
        </div>
      ) : (
        <div>
          {!isQuizDone ? (
            <div>
              <div className={styles.quizHeader}>
                <span>Question {currentQIndex + 1} of {quizQuestions.length}</span>
                <span>Score: {score}</span>
              </div>

              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${((currentQIndex + 1) / quizQuestions.length) * 100}%` }}
                />
              </div>

              <div className={styles.quizQuestion}>
                {quizQuestions[currentQIndex].question}
              </div>

              <div className={styles.quizOptions}>
                {quizQuestions[currentQIndex].options.map((opt, idx) => {
                  let optionClass = styles.quizOptionBtn;
                  if (isAnswered) {
                    if (idx === quizQuestions[currentQIndex].correctIndex) {
                      optionClass += ` ${styles.quizOptionCorrect}`;
                    } else if (idx === selectedAnswer) {
                      optionClass += ` ${styles.quizOptionWrong}`;
                    }
                  }

                  return (
                    <button
                      key={idx}
                      type="button"
                      disabled={isAnswered}
                      onClick={() => handleAnswer(idx)}
                      className={optionClass}
                    >
                      <span>{opt}</span>
                      {isAnswered && idx === quizQuestions[currentQIndex].correctIndex && (
                        <span>✓</span>
                      )}
                      {isAnswered && idx === selectedAnswer && idx !== quizQuestions[currentQIndex].correctIndex && (
                        <span>✗</span>
                      )}
                    </button>
                  );
                })}
              </div>

              {isAnswered && (
                <div>
                  <div className={styles.explanation}>
                    <strong>Insight: </strong>
                    {quizQuestions[currentQIndex].explanation}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button
                      type="button"
                      className={styles.nextBtn}
                      onClick={handleNextQuestion}
                    >
                      {currentQIndex < quizQuestions.length - 1 ? 'Next Question →' : 'View Results 🏆'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className={styles.resultsBox}>
              <div className={styles.scoreCircle}>
                {score}/{quizQuestions.length}
              </div>
              <h4 className={styles.resultTitle}>
                {score === 3
                  ? '🎯 Casting Trivia Master!'
                  : score >= 2
                  ? '🔥 Great Voice Cast Knowledge!'
                  : '🎮 Good Attempt! Keep Exploring'}
              </h4>
              <p className={styles.resultDesc}>
                {score === 3
                  ? 'You know every detail about the GTA 6 cast, performance capture tech, and character backgrounds!'
                  : 'You are well on your way to mastering the GTA 6 cast list. Brush up on our character guides and try again!'}
              </p>
              <button
                type="button"
                className={styles.restartBtn}
                onClick={handleRestartQuiz}
              >
                🔄 Play Again
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
