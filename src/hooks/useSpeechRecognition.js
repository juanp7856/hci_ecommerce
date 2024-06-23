import { useState, useCallback } from 'react';

const useSpeechRecognition = (onResult) => {
  const [recognition, setRecognition] = useState(null);

  const startRecognition = useCallback(() => {
    if (recognition) {
      recognition.start();
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    const newRecognition = new SpeechRecognition();
    newRecognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      if (onResult) onResult(transcript);
    };

    setRecognition(newRecognition);
    newRecognition.start();
  }, [recognition, onResult]);

  return { startRecognition };
};

export default useSpeechRecognition;