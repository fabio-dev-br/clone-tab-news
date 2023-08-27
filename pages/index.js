import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';

function Home() {
  const containerStyle = {
    fontSize: '18px',
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '10px',
  };

  const { width, height } = useWindowSize();
  const [shouldShowConfetti, setShouldShowConfetti] = useState(false);

  useEffect(() => {
    setShouldShowConfetti(true);
  }, []);

  return (
    <div style={containerStyle}>
      Oii, Xuu! <span style={{ fontStyle: 'italic' }}>Te amo</span>
      {shouldShowConfetti && <Confetti width={width} height={height} />}
    </div>
  );
}

export default Home;
