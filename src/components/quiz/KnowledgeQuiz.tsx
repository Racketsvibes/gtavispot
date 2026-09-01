'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './KnowledgeQuiz.module.css';

interface QuizOption {
  label: string;
  explanation: string;
}

interface Question {
  id: number;
  question: string;
  options: QuizOption[];
  correctIndex: number;
  hint: string;
}

const quizData: Question[] = [
  {
    id: 1,
    question: '1. What is the name of the fictional U.S. state where Grand Theft Auto VI is primarily set?',
    options: [
      { label: 'A. San Andreas', explanation: 'Incorrect. San Andreas is the state featured in GTA: San Andreas and GTA V.' },
      { label: 'B. Liberty State', explanation: 'Incorrect. Liberty State is the home of Liberty City from GTA IV.' },
      { label: 'C. Leonida', explanation: 'Correct! Leonida is the new fictional state introduced in GTA VI, heavily inspired by Florida.' },
      { label: 'D. Carcer City', explanation: 'Incorrect. Carcer City is a neighboring gritty metropolis from the Manhunt and 3D GTA universe.' },
    ],
    correctIndex: 2,
    hint: 'Think of the historical Spanish explorer Juan Ponce de León who named Florida.',
  },
  {
    id: 2,
    question: '2. Which iconic fictional city, returning from a classic 2002 title, anchors the map of Grand Theft Auto VI?',
    options: [
      { label: 'A. Los Santos', explanation: 'Incorrect. Los Santos was the setting for GTA V and GTA: San Andreas.' },
      { label: 'B. Vice City', explanation: 'Correct! Vice City returns as the major urban hub in GTA VI, reimagined within the modern era of Leonida.' },
      { label: 'C. Liberty City', explanation: 'Incorrect. Liberty City is based on New York City.' },
      { label: 'D. Alderney', explanation: 'Incorrect. Alderney is the state adjacent to Liberty City in GTA IV.' },
    ],
    correctIndex: 1,
    hint: 'Famous for neon lights, palm trees, Ocean Drive, and 80s pastel aesthetics.',
  },
  {
    id: 3,
    question: '3. What are the names of the two main playable protagonists featured in the narrative of GTA VI?',
    options: [
      { label: 'A. Michael and Trevor', explanation: 'Incorrect. Michael and Trevor are two of the three playable leads in GTA V.' },
      { label: 'B. Franklin and Lamar', explanation: 'Incorrect. Franklin and Lamar are key figures from GTA V.' },
      { label: 'C. Jason and Lucia', explanation: 'Correct! Jason and Lucia are the dual criminal protagonists driving the story of GTA VI.' },
      { label: 'D. Toni and Maria', explanation: 'Incorrect. Toni Cipriani is from GTA: Liberty City Stories and Maria is from GTA III.' },
    ],
    correctIndex: 2,
    hint: 'The lead duo consists of a modern Bonnie-and-Clyde inspired romantic pair.',
  },
  {
    id: 4,
    question: '4. The dynamic and criminal relationship between the two protagonists in GTA VI has drawn widespread comparisons to which famous real-world historical outlaw duo?',
    options: [
      { label: 'A. Butch Cassidy and the Sundance Kid', explanation: 'Incorrect. Butch and Sundance were a legendary Old West robbery partnership.' },
      { label: 'B. Bonnie and Clyde', explanation: 'Correct! The romantic and criminal partnership of Jason and Lucia strongly echoes the classic American outlaw couple Bonnie and Clyde.' },
      { label: 'C. Al Capone and Bugs Moran', explanation: 'Incorrect. Al Capone and Bugs Moran were rival Chicago mob bosses.' },
      { label: 'D. Billy the Kid and Jesse James', explanation: 'Incorrect. Billy the Kid and Jesse James were separate famous 19th-century outlaws.' },
    ],
    correctIndex: 1,
    hint: 'An iconic 1930s romantic bank-robbing couple from American folklore.',
  },
  {
    id: 5,
    question: '5. In what month and year was the official Trailer 1 for Grand Theft Auto VI released by Rockstar Games?',
    options: [
      { label: 'A. December 2023', explanation: 'Correct! Trailer 1 was officially dropped in December 2023 after an early leak forced Rockstar\'s hand.' },
      { label: 'B. September 2022', explanation: 'Incorrect. September 2022 was when a massive early development footage leak occurred, not the official trailer.' },
      { label: 'C. November 2024', explanation: 'Incorrect. No official trailer was scheduled for November 2024.' },
      { label: 'D. January 2023', explanation: 'Incorrect. Rockstar was quiet during early 2023 following the breach.' },
    ],
    correctIndex: 0,
    hint: 'Released just before Rockstar\'s planned December 5 premiere date due to an online leak.',
  },
  {
    id: 6,
    question: '6. Upon its initial reveal and announcements by Rockstar Games, which platforms were officially confirmed for the launch of GTA VI?',
    options: [
      { label: 'A. PlayStation 4 and Xbox One', explanation: 'Incorrect. Eighth-generation consoles were completely dropped.' },
      { label: 'B. PC, PlayStation 5, and Xbox Series X/S simultaneously', explanation: 'Incorrect. PC was not confirmed for the simultaneous day-one launch.' },
      { label: 'C. PlayStation 5 and Xbox Series X/S', explanation: 'Correct! The initial platform rollout confirmed by Rockstar targets current-generation home consoles.' },
      { label: 'D. Nintendo Switch 2 only', explanation: 'Incorrect. Nintendo hardware was not announced as a primary launch platform.' },
    ],
    correctIndex: 2,
    hint: 'Only ninth-generation Sony and Microsoft home consoles.',
  },
  {
    id: 7,
    question: '7. Trailer 1 prominently showcased satirical in-game short-form video feeds and livestreams, parodying which modern cultural phenomenon?',
    options: [
      { label: 'A. Traditional broadcast cable television', explanation: 'Incorrect. While TV parodies exist in the series, the vertical video feeds shown in the trailer specifically target social media apps.' },
      { label: 'B. Encrypted messaging forums', explanation: 'Incorrect. The focus was on public viral content and livestreams rather than private encrypted chats.' },
      { label: 'C. Retro arcade cabinets', explanation: 'Incorrect. Arcade cabinets are a throwback, whereas these feeds reflect modern smartphone culture.' },
      { label: 'D. TikTok and Instagram Reels style viral video apps', explanation: 'Correct! The trailer featured numerous vertical-video clips mocking modern social media influencer and livestream culture.' },
    ],
    correctIndex: 3,
    hint: 'Vertical smartphone video streams and viral social media clips.',
  },
  {
    id: 8,
    question: '8. Which major holding and publishing corporation owns Rockstar Games?',
    options: [
      { label: 'A. Electronic Arts', explanation: 'Incorrect. EA publishes Battlefield and EA Sports FC.' },
      { label: 'B. Take-Two Interactive', explanation: 'Correct! Take-Two Interactive is the parent company of Rockstar Games as well as 2K.' },
      { label: 'C. Sony Interactive Entertainment', explanation: 'Incorrect. Sony produces first-party PlayStation titles.' },
      { label: 'D. Microsoft Gaming', explanation: 'Incorrect. Microsoft Gaming operates Xbox Game Studios and Activision Blizzard.' },
    ],
    correctIndex: 1,
    hint: 'Ticker symbol TTWO on the NASDAQ stock exchange.',
  },
  {
    id: 9,
    question: '9. The fictional state of Leonida in GTA VI draws its distinct environmental inspiration primarily from which real-world U.S. region?',
    options: [
      { label: 'A. The Pacific Northwest', explanation: 'Incorrect. The Pacific Northwest is known for pine forests and rainy coasts like Washington and Oregon.' },
      { label: 'B. The Midwest Rust Belt', explanation: 'Incorrect. The Rust Belt centers on industrial Midwestern cities.' },
      { label: 'C. Florida (with its keys, beaches, and everglades)', explanation: 'Correct! Leonida captures the swamps, bright beaches, and unique cultural flavor of Florida.' },
      { label: 'D. The Rocky Mountain range', explanation: 'Incorrect. The Rockies represent rugged alpine terrain like Colorado and Montana.' },
    ],
    correctIndex: 2,
    hint: 'Known as the Sunshine State, famous for the Everglades and tropical keys.',
  },
  {
    id: 10,
    question: '10. Prior to the modern-day setting of GTA VI, the original Grand Theft Auto: Vice City (released in 2002) was famously set during which specific decade?',
    options: [
      { label: 'A. The 1970s', explanation: 'Incorrect. The 70s era featured disco and classic muscle cars, seen in Driver \'76.' },
      { label: 'B. The 1980s', explanation: 'Correct! GTA: Vice City was an homage to 1980s neon aesthetics, synth music, and crime dramas like Miami Vice.' },
      { label: 'C. The 1990s', explanation: 'Incorrect. Grand Theft Auto: San Andreas was set in the 1990s.' },
      { label: 'D. The 2000s', explanation: 'Incorrect. GTA IV and modern titles leaned into or past the 2000s, while classic Vice City was a distinct period piece.' },
    ],
    correctIndex: 1,
    hint: 'The decade of synthwave, pastel suits, and Miami Vice.',
  },
];

export default function KnowledgeQuiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [showHint, setShowHint] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = quizData[currentIndex];
  const selectedOptionIndex = userAnswers[currentIndex];
  const hasAnsweredCurrent = selectedOptionIndex !== undefined;

  const handleSelectOption = (optionIndex: number) => {
    if (hasAnsweredCurrent) return;
    setUserAnswers(prev => ({
      ...prev,
      [currentIndex]: optionIndex,
    }));
  };

  const handleNext = () => {
    if (currentIndex < quizData.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setShowHint(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setShowHint(false);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setUserAnswers({});
    setShowHint(false);
    setIsFinished(false);
  };

  // Calculate score
  const totalCorrect = Object.entries(userAnswers).filter(
    ([qIdx, ansIdx]) => ansIdx === quizData[Number(qIdx)].correctIndex
  ).length;

  return (
    <div className={styles.quizContainer}>
      <h1 className={styles.mainTitle}>Grand Theft Auto VI (GTA 6) Knowledge Quiz</h1>

      {!isFinished ? (
        <div>
          {/* Progress Tracker with checkmarks */}
          <div className={styles.progressSection}>
            <div className={styles.segmentsWrapper}>
              {quizData.map((q, idx) => {
                const ans = userAnswers[idx];
                const isAnswered = ans !== undefined;
                const isCorrect = isAnswered && ans === q.correctIndex;
                const isActive = idx === currentIndex;

                return (
                  <div key={q.id} className={styles.segmentItem}>
                    <div className={styles.segmentIcon}>
                      {isAnswered && (
                        <span className={isCorrect ? styles.iconCorrect : styles.iconWrong}>
                          {isCorrect ? '✓' : '✗'}
                        </span>
                      )}
                    </div>
                    <div
                      className={`${styles.segmentLine} ${
                        isActive ? styles.segmentActive : isAnswered ? styles.segmentCompleted : ''
                      }`}
                    />
                  </div>
                );
              })}
            </div>
            <div className={styles.stepCounter}>
              {currentIndex + 1} / {quizData.length}
            </div>
          </div>

          {/* Question Title */}
          <div className={styles.questionTitle}>{currentQ.question}</div>

          {/* Options */}
          <div className={styles.optionsList}>
            {currentQ.options.map((opt, idx) => {
              const isSelected = selectedOptionIndex === idx;
              const isCorrectOption = idx === currentQ.correctIndex;

              let cardClass = styles.optionCard;
              if (hasAnsweredCurrent) {
                if (isSelected && isCorrectOption) {
                  cardClass += ` ${styles.optionCorrect}`;
                } else if (isSelected && !isCorrectOption) {
                  cardClass += ` ${styles.optionWrong}`;
                } else if (!isSelected && isCorrectOption) {
                  cardClass += ` ${styles.optionCorrect}`;
                }
              }

              return (
                <button
                  key={idx}
                  type="button"
                  disabled={hasAnsweredCurrent}
                  onClick={() => handleSelectOption(idx)}
                  className={cardClass}
                >
                  <div className={styles.optionText}>{opt.label}</div>
                  {hasAnsweredCurrent && (isSelected || isCorrectOption) && (
                    <div className={styles.optionExplanation}>{opt.explanation}</div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Bottom Bar */}
          <div className={styles.bottomControls}>
            <div>
              <button
                type="button"
                className={styles.hintToggle}
                onClick={() => setShowHint(prev => !prev)}
              >
                <span>{showHint ? 'Hide hint' : 'Show hint'}</span>
                <span>{showHint ? '⌃' : '⌄'}</span>
              </button>
              {showHint && (
                <div className={styles.hintBox}>
                  <strong>💡 Hint: </strong>
                  {currentQ.hint}
                </div>
              )}
            </div>

            <div className={styles.navButtons}>
              <button
                type="button"
                disabled={currentIndex === 0}
                onClick={handleBack}
                className={styles.backBtn}
              >
                Back
              </button>
              <button
                type="button"
                disabled={!hasAnsweredCurrent}
                onClick={handleNext}
                className={styles.nextBtn}
              >
                {currentIndex === quizData.length - 1 ? 'Finish Quiz' : 'Next'}
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Results View */
        <div className={styles.resultsCard}>
          <div className={styles.scoreBadge}>
            {totalCorrect} / {quizData.length}
          </div>
          <h2 className={styles.resultTitle}>
            {totalCorrect === 10
              ? '🏆 Grand Theft Auto Mastermind!'
              : totalCorrect >= 7
              ? '🌴 Vice City Veteran!'
              : totalCorrect >= 4
              ? '🚗 Leonida Explorer!'
              : '🎮 Good Attempt! Keep Learning'}
          </h2>
          <p className={styles.resultDesc}>
            {totalCorrect === 10
              ? 'Flawless score! You answered every question correctly and know every detail of GTA 6 lore, platforms, and release milestones.'
              : `You scored ${totalCorrect} out of 10! Check out our guides below to master the state of Leonida, character backstories, and launch specs.`}
          </p>

          <button type="button" className={styles.restartBtn} onClick={handleRestart}>
            🔄 Retake Quiz
          </button>

          {/* Quick CTA Hub */}
          <div className={styles.relatedLinksGrid}>
            <Link href="/gta-6-timeline/" className={styles.relatedCard}>
              <div className={styles.relatedCardTitle}>📅 GTA 6 Timeline</div>
              <div className={styles.relatedCardDesc}>View every trailer, delay, and reveal checkpoint from 2014 to 2026.</div>
            </Link>
            <Link href="/story/voice-actors/" className={styles.relatedCard}>
              <div className={styles.relatedCardTitle}>🎭 Voice Actors Guide</div>
              <div className={styles.relatedCardDesc}>Explore Lucia, Jason, and the full mo-cap cast of Leonida.</div>
            </Link>
            <Link href="/tech/gta-6-system-requirements/" className={styles.relatedCard}>
              <div className={styles.relatedCardTitle}>💻 System Requirements</div>
              <div className={styles.relatedCardDesc}>Compare PS5, PS5 Pro 60FPS targets, Xbox Series X, and PC specs.</div>
            </Link>
            <Link href="/gta-6-gameplay/" className={styles.relatedCard}>
              <div className={styles.relatedCardTitle}>🎮 Gameplay Deep Dive</div>
              <div className={styles.relatedCardDesc}>Discover 37+ verified physics, weapon, and AI combat features.</div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
