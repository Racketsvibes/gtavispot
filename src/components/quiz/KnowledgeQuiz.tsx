'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './KnowledgeQuiz.module.css';

interface QuizOption {
  text: string;
  explanation: string;
}

interface RawQuestion {
  id: number;
  question: string;
  options: QuizOption[];
  correctIndex: number;
  hint: string;
}

interface ProcessedQuestion {
  id: number;
  question: string;
  options: { label: string; explanation: string }[];
  correctIndex: number;
  hint: string;
}

const rawQuestionBank: RawQuestion[] = [
  {
    id: 1,
    question: 'What is the name of the fictional U.S. state where Grand Theft Auto VI is primarily set?',
    options: [
      { text: 'San Andreas', explanation: 'Incorrect. San Andreas is the state featured in GTA: San Andreas and GTA V.' },
      { text: 'Liberty State', explanation: 'Incorrect. Liberty State is the home of Liberty City from GTA IV.' },
      { text: 'Leonida', explanation: 'Correct! Leonida is the new fictional state introduced in GTA VI, heavily inspired by Florida.' },
      { text: 'Carcer City', explanation: 'Incorrect. Carcer City is a neighboring gritty metropolis from the Manhunt and 3D GTA universe.' },
    ],
    correctIndex: 2,
    hint: 'Think of the historical Spanish explorer Juan Ponce de León who named Florida.',
  },
  {
    id: 2,
    question: 'Which iconic fictional city, returning from a classic 2002 title, anchors the map of Grand Theft Auto VI?',
    options: [
      { text: 'Los Santos', explanation: 'Incorrect. Los Santos was the setting for GTA V and GTA: San Andreas.' },
      { text: 'Vice City', explanation: 'Correct! Vice City returns as the major urban hub in GTA VI, reimagined within the modern era of Leonida.' },
      { text: 'Liberty City', explanation: 'Incorrect. Liberty City is based on New York City.' },
      { text: 'Alderney', explanation: 'Incorrect. Alderney is the state adjacent to Liberty City in GTA IV.' },
    ],
    correctIndex: 1,
    hint: 'Famous for neon lights, palm trees, Ocean Drive, and 80s pastel aesthetics.',
  },
  {
    id: 3,
    question: 'What are the names of the two main playable protagonists featured in the narrative of GTA VI?',
    options: [
      { text: 'Michael and Trevor', explanation: 'Incorrect. Michael and Trevor are two of the three playable leads in GTA V.' },
      { text: 'Franklin and Lamar', explanation: 'Incorrect. Franklin and Lamar are key figures from GTA V.' },
      { text: 'Jason and Lucia', explanation: 'Correct! Jason and Lucia are the dual criminal protagonists driving the story of GTA VI.' },
      { text: 'Toni and Maria', explanation: 'Incorrect. Toni Cipriani is from GTA: Liberty City Stories and Maria is from GTA III.' },
    ],
    correctIndex: 2,
    hint: 'The lead duo consists of a modern Bonnie-and-Clyde inspired romantic pair.',
  },
  {
    id: 4,
    question: 'The dynamic and criminal relationship between the two protagonists in GTA VI has drawn widespread comparisons to which famous real-world historical outlaw duo?',
    options: [
      { text: 'Butch Cassidy and the Sundance Kid', explanation: 'Incorrect. Butch and Sundance were a legendary Old West robbery partnership.' },
      { text: 'Bonnie and Clyde', explanation: 'Correct! The romantic and criminal partnership of Jason and Lucia strongly echoes the classic American outlaw couple Bonnie and Clyde.' },
      { text: 'Al Capone and Bugs Moran', explanation: 'Incorrect. Al Capone and Bugs Moran were rival Chicago mob bosses.' },
      { text: 'Billy the Kid and Jesse James', explanation: 'Incorrect. Billy the Kid and Jesse James were separate famous 19th-century outlaws.' },
    ],
    correctIndex: 1,
    hint: 'An iconic 1930s romantic bank-robbing couple from American folklore.',
  },
  {
    id: 5,
    question: 'In what month and year was the official Trailer 1 for Grand Theft Auto VI released by Rockstar Games?',
    options: [
      { text: 'December 2023', explanation: 'Correct! Trailer 1 was officially dropped in December 2023 after an early leak forced Rockstar\'s hand.' },
      { text: 'September 2022', explanation: 'Incorrect. September 2022 was when a massive early development footage leak occurred, not the official trailer.' },
      { text: 'November 2024', explanation: 'Incorrect. No official trailer was scheduled for November 2024.' },
      { text: 'January 2023', explanation: 'Incorrect. Rockstar was quiet during early 2023 following the breach.' },
    ],
    correctIndex: 0,
    hint: 'Released just before Rockstar\'s planned December 5 premiere date due to an online leak.',
  },
  {
    id: 6,
    question: 'Upon its initial reveal and announcements by Rockstar Games, which platforms were officially confirmed for the launch of GTA VI?',
    options: [
      { text: 'PlayStation 4 and Xbox One', explanation: 'Incorrect. Eighth-generation consoles were completely dropped.' },
      { text: 'PC, PlayStation 5, and Xbox Series X/S simultaneously', explanation: 'Incorrect. PC was not confirmed for the simultaneous day-one launch.' },
      { text: 'PlayStation 5 and Xbox Series X/S', explanation: 'Correct! The initial platform rollout confirmed by Rockstar targets current-generation home consoles.' },
      { text: 'Nintendo Switch 2 only', explanation: 'Incorrect. Nintendo hardware was not announced as a primary launch platform.' },
    ],
    correctIndex: 2,
    hint: 'Only ninth-generation Sony and Microsoft home consoles.',
  },
  {
    id: 7,
    question: 'Trailer 1 prominently showcased satirical in-game short-form video feeds and livestreams, parodying which modern cultural phenomenon?',
    options: [
      { text: 'Traditional broadcast cable television', explanation: 'Incorrect. While TV parodies exist in the series, the vertical video feeds shown in the trailer specifically target social media apps.' },
      { text: 'Encrypted messaging forums', explanation: 'Incorrect. The focus was on public viral content and livestreams rather than private encrypted chats.' },
      { text: 'Retro arcade cabinets', explanation: 'Incorrect. Arcade cabinets are a throwback, whereas these feeds reflect modern smartphone culture.' },
      { text: 'TikTok and Instagram Reels style viral video apps', explanation: 'Correct! The trailer featured numerous vertical-video clips mocking modern social media influencer and livestream culture.' },
    ],
    correctIndex: 3,
    hint: 'Vertical smartphone video streams and viral social media clips.',
  },
  {
    id: 8,
    question: 'Which major holding and publishing corporation owns Rockstar Games?',
    options: [
      { text: 'Electronic Arts', explanation: 'Incorrect. EA publishes Battlefield and EA Sports FC.' },
      { text: 'Take-Two Interactive', explanation: 'Correct! Take-Two Interactive is the parent company of Rockstar Games as well as 2K.' },
      { text: 'Sony Interactive Entertainment', explanation: 'Incorrect. Sony produces first-party PlayStation titles.' },
      { text: 'Microsoft Gaming', explanation: 'Incorrect. Microsoft Gaming operates Xbox Game Studios and Activision Blizzard.' },
    ],
    correctIndex: 1,
    hint: 'Ticker symbol TTWO on the NASDAQ stock exchange.',
  },
  {
    id: 9,
    question: 'The fictional state of Leonida in GTA VI draws its distinct environmental inspiration primarily from which real-world U.S. region?',
    options: [
      { text: 'The Pacific Northwest', explanation: 'Incorrect. The Pacific Northwest is known for pine forests and rainy coasts like Washington and Oregon.' },
      { text: 'The Midwest Rust Belt', explanation: 'Incorrect. The Rust Belt centers on industrial Midwestern cities.' },
      { text: 'Florida (with its keys, beaches, and everglades)', explanation: 'Correct! Leonida captures the swamps, bright beaches, and unique cultural flavor of Florida.' },
      { text: 'The Rocky Mountain range', explanation: 'Incorrect. The Rockies represent rugged alpine terrain like Colorado and Montana.' },
    ],
    correctIndex: 2,
    hint: 'Known as the Sunshine State, famous for the Everglades and tropical keys.',
  },
  {
    id: 10,
    question: 'Prior to the modern-day setting of GTA VI, the original Grand Theft Auto: Vice City (released in 2002) was famously set during which specific decade?',
    options: [
      { text: 'The 1970s', explanation: 'Incorrect. The 70s era featured disco and classic muscle cars, seen in Driver \'76.' },
      { text: 'The 1980s', explanation: 'Correct! GTA: Vice City was an homage to 1980s neon aesthetics, synth music, and crime dramas like Miami Vice.' },
      { text: 'The 1990s', explanation: 'Incorrect. Grand Theft Auto: San Andreas was set in the 1990s.' },
      { text: 'The 2000s', explanation: 'Incorrect. GTA IV and modern titles leaned into or past the 2000s, while classic Vice City was a distinct period piece.' },
    ],
    correctIndex: 1,
    hint: 'The decade of synthwave, pastel suits, and Miami Vice.',
  },
  {
    id: 11,
    question: 'What is the official worldwide release date confirmed by Rockstar Games and Take-Two for Grand Theft Auto VI?',
    options: [
      { text: 'November 19, 2026', explanation: 'Correct! Take-Two and Rockstar officially confirmed November 19, 2026 for the worldwide console debut.' },
      { text: 'October 25, 2025', explanation: 'Incorrect. The initial 2025 window was delayed to ensure maximum game polish.' },
      { text: 'May 12, 2026', explanation: 'Incorrect. The spring 2026 window was updated in a subsequent schedule revision.' },
      { text: 'December 31, 2026', explanation: 'Incorrect. December 31 is merely a standard retailer placeholder date.' },
    ],
    correctIndex: 0,
    hint: 'A Thursday in late November 2026 ahead of the holiday shopping season.',
  },
  {
    id: 12,
    question: 'In the opening scene of Trailer 1, where is Lucia shown speaking with her counselor Stefanie?',
    options: [
      { text: 'Leonida Department of Corrections (Prison)', explanation: 'Correct! Lucia is wearing a prison uniform behind glass at the Leonida Department of Corrections.' },
      { text: 'Vice City Police Department Headquarters', explanation: 'Incorrect. The scene takes place inside a state correctional institution, not a local police desk.' },
      { text: 'Jack of Hearts Nightclub', explanation: 'Incorrect. Jack of Hearts is a nightlife venue featured later in the trailer.' },
      { text: 'Ocean Beach Motel Safehouse', explanation: 'Incorrect. The motel is the hideout where Jason and Lucia plan heists.' },
    ],
    correctIndex: 0,
    hint: 'She is wearing a correctional jumpsuit behind glass.',
  },
  {
    id: 13,
    question: 'Which legendary classic rock song by Tom Petty provides the official soundtrack for GTA VI Trailer 1?',
    options: [
      { text: '"Love Is a Long Road"', explanation: 'Correct! Tom Petty\'s 1989 hit "Love Is a Long Road" from the album Full Moon Fever set the emotional tone for the trailer.' },
      { text: '"Free Fallin\'"', explanation: 'Incorrect. While a famous Tom Petty track, it was not the song selected for the trailer.' },
      { text: '"I Won\'t Back Down"', explanation: 'Incorrect. This track was not used in Trailer 1.' },
      { text: '"Runnin\' Down a Dream"', explanation: 'Incorrect. That song previously appeared on K-DST in GTA: San Andreas.' },
    ],
    correctIndex: 0,
    hint: 'From Tom Petty\'s iconic 1989 solo album \'Full Moon Fever\'.',
  },
  {
    id: 14,
    question: 'Which advanced proprietary game engine powers the physics, lighting, and rendering pipelines in Grand Theft Auto VI?',
    options: [
      { text: 'RAGE 9 (Rockstar Advanced Game Engine)', explanation: 'Correct! GTA 6 runs on RAGE 9, featuring upgraded water physics, ray-traced global illumination, and high-density AI.' },
      { text: 'Unreal Engine 5.4', explanation: 'Incorrect. Rockstar develops all flagship open-world titles using their custom in-house engine.' },
      { text: 'Frostbite Engine', explanation: 'Incorrect. Frostbite is EA\'s internal proprietary game engine.' },
      { text: 'Decima Engine', explanation: 'Incorrect. Decima is developed by Guerrilla Games and used in Horizon and Death Stranding.' },
    ],
    correctIndex: 0,
    hint: 'Rockstar\'s custom in-house engine, now in its 9th generation release.',
  },
  {
    id: 15,
    question: 'What is the in-game fictional archipelago inspired by the Florida Keys called in the state of Leonida?',
    options: [
      { text: 'Leonida Keys (Gator Keys)', explanation: 'Correct! The Leonida Keys represent the tropical island chain connected by long ocean causeways.' },
      { text: 'Pacific Keys', explanation: 'Incorrect. The Pacific is on the western coast of the United States.' },
      { text: 'San Fierro Atolls', explanation: 'Incorrect. San Fierro is the northern California parody from GTA: San Andreas.' },
      { text: 'Alderney Isles', explanation: 'Incorrect. Alderney is from the GTA IV Liberty City metropolitan area.' },
    ],
    correctIndex: 0,
    hint: 'The southern island chain famous for fishing boats and coastal bridges.',
  },
  {
    id: 16,
    question: 'Lucia makes franchise history by becoming the first female playable lead character in which major era of Grand Theft Auto?',
    options: [
      { text: 'The 3D / HD Cinematic Universe', explanation: 'Correct! While original 2D top-down GTA 1 had selectable avatars, Lucia is the first lead female in the 3D/HD cinematic narrative era.' },
      { text: 'The entire franchise since 1997', explanation: 'Incorrect. GTA 1 in 1997 included basic 2D female sprites with no story dialogue.' },
      { text: 'Handheld spin-off titles only', explanation: 'Incorrect. Lucia is the full protagonist of the mainline blockbuster release.' },
      { text: 'Multiplayer mode only', explanation: 'Incorrect. Lucia is the co-lead of the single-player campaign.' },
    ],
    correctIndex: 0,
    hint: 'The modern cinematic story era starting with GTA III and continuing through HD titles.',
  },
  {
    id: 17,
    question: 'Approximately how many views did the official GTA VI Trailer 1 accumulate within its first 24 hours on YouTube?',
    options: [
      { text: '93 Million Views', explanation: 'Correct! Trailer 1 generated 93 million views in 24 hours, setting a world record for the most-viewed non-music video debut.' },
      { text: '25 Million Views', explanation: 'Incorrect. It surpassed 25 million views in just a few hours.' },
      { text: '50 Million Views', explanation: 'Incorrect. The view counter crossed 50 million before the 12-hour mark.' },
      { text: '150 Million Views', explanation: 'Incorrect. While it later passed 150 million, its 24-hour total was 93 million.' },
    ],
    correctIndex: 0,
    hint: 'Over 90 million views in a single day, breaking YouTube world records.',
  },
  {
    id: 18,
    question: 'What is the vast wetland and swamp territory in GTA VI called that parodies the real-world Florida Everglades?',
    options: [
      { text: 'Grassrivers', explanation: 'Correct! Grassrivers is the wildlife-rich wetland region filled with mud parks, alligators, and airboat routes.' },
      { text: 'Red County', explanation: 'Incorrect. Red County was the rural countryside of San Andreas.' },
      { text: 'Sandy Shores', explanation: 'Incorrect. Sandy Shores was Trevor\'s desert hometown in Blaine County.' },
      { text: 'Lago Zancudo', explanation: 'Incorrect. Lago Zancudo is the marsh surrounding Fort Zancudo in GTA V.' },
    ],
    correctIndex: 0,
    hint: 'A play on the poetic description "River of Grass".',
  },
  {
    id: 19,
    question: 'Which proprietary AI upscaling technology is GTA 6 anticipated to leverage on PlayStation 5 Pro for 60 FPS performance modes?',
    options: [
      { text: 'PSSR (PlayStation Spectral Super Resolution)', explanation: 'Correct! PS5 Pro features custom machine-learning PSSR hardware to upscale 1440p internal render targets to 4K at 60 FPS.' },
      { text: 'NVIDIA DLSS 3.5', explanation: 'Incorrect. DLSS is proprietary to NVIDIA GeForce PC graphics cards.' },
      { text: 'AMD FSR 1.0', explanation: 'Incorrect. FSR 1.0 is legacy spatial upscaling, whereas PSSR is hardware-accelerated ML.' },
      { text: 'Checkerboard 2.0', explanation: 'Incorrect. Checkerboard rendering is older temporal reconstruction from the PS4 Pro generation.' },
    ],
    correctIndex: 0,
    hint: 'Sony\'s custom AI-driven upscaling technology built for PS5 Pro.',
  },
  {
    id: 20,
    question: 'What feature on the Rockstar Games Social Club portal allows players to manage squads, custom emblems, and multiplayer progression?',
    options: [
      { text: 'Rockstar Crews', explanation: 'Correct! Rockstar Crews manage custom emblem editors, squad hierarchies, and shared multiplayer XP bonuses.' },
      { text: 'Rockstar Guilds', explanation: 'Incorrect. Rockstar uses the term "Crews" for all squad operations.' },
      { text: 'Leonida Clans', explanation: 'Incorrect. Clans is not the official Social Club system name.' },
      { text: 'Vice City Syndicates', explanation: 'Incorrect. Syndicates refers to in-game crime factions rather than Social Club groups.' },
    ],
    correctIndex: 0,
    hint: 'The official Social Club squad platform with emblem creators and leaderboards.',
  },
];

const optionLetters = ['A', 'B', 'C', 'D'];

function generateRandomQuiz(count = 10): ProcessedQuestion[] {
  // Fisher-Yates shuffle for questions
  const shuffledQuestions = [...rawQuestionBank];
  for (let i = shuffledQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]];
  }

  const selected = shuffledQuestions.slice(0, count);

  return selected.map((q, qIndex) => {
    // Shuffle options while tracking correct option
    const originalOptionsWithIndex = q.options.map((opt, originalIdx) => ({
      ...opt,
      isCorrect: originalIdx === q.correctIndex,
    }));

    for (let i = originalOptionsWithIndex.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [originalOptionsWithIndex[i], originalOptionsWithIndex[j]] = [originalOptionsWithIndex[j], originalOptionsWithIndex[i]];
    }

    const newCorrectIndex = originalOptionsWithIndex.findIndex(o => o.isCorrect);

    const formattedOptions = originalOptionsWithIndex.map((opt, optIdx) => ({
      label: `${optionLetters[optIdx]}. ${opt.text}`,
      explanation: opt.explanation,
    }));

    return {
      id: q.id,
      question: `${qIndex + 1}. ${q.question}`,
      options: formattedOptions,
      correctIndex: newCorrectIndex,
      hint: q.hint,
    };
  });
}

export default function KnowledgeQuiz() {
  const [questions, setQuestions] = useState<ProcessedQuestion[]>(() => generateRandomQuiz(10));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [showHint, setShowHint] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  // Re-shuffle on mount so client gets unique quiz every session
  useEffect(() => {
    setQuestions(generateRandomQuiz(10));
  }, []);

  const currentQ = questions[currentIndex] || questions[0];
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
    if (currentIndex < questions.length - 1) {
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
    setQuestions(generateRandomQuiz(10));
    setCurrentIndex(0);
    setUserAnswers({});
    setShowHint(false);
    setIsFinished(false);
  };

  // Calculate score
  const totalCorrect = Object.entries(userAnswers).filter(
    ([qIdx, ansIdx]) => ansIdx === questions[Number(qIdx)]?.correctIndex
  ).length;

  return (
    <div className={styles.quizContainer}>
      <h1 className={styles.mainTitle}>Grand Theft Auto VI (GTA 6) Knowledge Quiz</h1>

      {!isFinished ? (
        <div>
          {/* Progress Tracker with checkmarks */}
          <div className={styles.progressSection}>
            <div className={styles.segmentsWrapper}>
              {questions.map((q, idx) => {
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
              {currentIndex + 1} / {questions.length}
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
                {currentIndex === questions.length - 1 ? 'Finish Quiz' : 'Next'}
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Results View */
        <div className={styles.resultsCard}>
          <div className={styles.scoreBadge}>
            {totalCorrect} / {questions.length}
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
              : `You scored ${totalCorrect} out of ${questions.length}! Check out our guides below to master the state of Leonida, character backstories, and launch specs.`}
          </p>

          <button type="button" className={styles.restartBtn} onClick={handleRestart}>
            🔄 Retake Quiz (Shuffle Questions)
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
