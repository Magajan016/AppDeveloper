
import React, { useState } from 'react';

function OTPGenerator() {
  const [otp, setOTP] = useState('');

  const generateOTP = () => {
    // Generate a random 6-digit OTP
    const newOTP = Math.floor(100000 + Math.random() * 900000).toString();
    setOTP(newOTP);
  };

  return (
    <div>
      <h2>Generated OTP: {otp}</h2>
      <button onClick={generateOTP}>Generate OTP</button>
    </div>
  );
}

export default OTPGenerator;

// export default Pages1