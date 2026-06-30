import React, { useState, useEffect } from 'react';

export default function TypedText({ 
  strings = [], 
  typeSpeed = 80, 
  backSpeed = 40, 
  backDelay = 1500 
}) {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(typeSpeed);

  useEffect(() => {
    if (strings.length === 0) return;

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker); };
  }, [text, delta, isDeleting, loopNum]);

  const tick = () => {
    let i = loopNum % strings.length;
    let fullText = strings[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1) 
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(backSpeed);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(backDelay); // Pause before starting deletion
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(typeSpeed);
    }
  };

  return (
    <span style={{ borderRight: '2px solid var(--accent-cyan)', paddingRight: '4px', animation: 'blink 0.75s step-end infinite' }}>
      {text}
    </span>
  );
}
