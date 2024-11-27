// Feature 1: Daily Good Morning Message (one-time per day)
const messages = [
    "Good morning, Maria! 🌞 You’re the sunshine that brightens my day.",
    "Rise and shine, Maria! Today is a beautiful day because you’re in it.",
    "Good morning, love! Remember, you’re unstoppable and loved.",
    "Hey beautiful, good morning! Let’s make today unforgettable."
  ];
  
  function revealDailyMessage() {
    const today = new Date().toDateString();
    const savedDate = localStorage.getItem("dailyMessageDate");
    const messageElement = document.getElementById("morning-message");
  
    if (savedDate === today) {
      // Show the previously saved message
      messageElement.textContent = localStorage.getItem("dailyMessage");
    } else {
      // Generate a new message and save it
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      localStorage.setItem("dailyMessage", randomMessage);
      localStorage.setItem("dailyMessageDate", today);
      messageElement.textContent = randomMessage;
    }
  }
  
  // Feature 2: Daily Surprise
  function revealSurprise() {
    document.getElementById('surprise-message').style.display = 'block';
  }
  
  // Feature 3: Background Theme Selection
  function setBackground(theme) {
    if (theme === 'sunrise') {
      document.body.style.background = "linear-gradient(to bottom, #FF9A8B, #FFC898, #FFDEA5";
    } else if (theme === 'flowers') {
      document.body.style.background = "linear-gradient(to bottom, #FBD786, #C6FFDD)";
    } else if (theme === 'pastel') {
      document.body.style.background = "linear-gradient(to bottom, #FFDEE9, #B5FFFC)";
    }
  }
  
  // Feature 4: Biceps Button (Redirect to Biceps Image)
  function showBiceps() {
    window.location.href = "biceps.png";
  }
  
  // Feature 5: Face Button (Redirect to Face Image)
  function showFace() {
    window.location.href = "myface.png";
  }
  
  // Feature 6: Countdown Timer (to Monthaversary)
  const countdownElement = document.getElementById('countdown');
  function getNextMonthaversary() {
    const now = new Date();
    const currentMonth = now.getMonth();
    const year = now.getFullYear();
    const nextMonth = (currentMonth + 1) % 12; // Wrap around to January
    const nextYear = currentMonth === 11 ? year + 1 : year;
    const monthaversaryDate = new Date(nextYear, nextMonth, 4);
    return monthaversaryDate;
  }
  
  function updateCountdown() {
    const targetDate = getNextMonthaversary();
    const now = new Date();
    const timeDifference = targetDate - now;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDifference / 1000) % 60);
    countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
  setInterval(updateCountdown, 1000);
  