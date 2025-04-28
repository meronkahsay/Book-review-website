
function changeQuote() {
    const quotes = ["The Golden Rule of Habit Change: You can't extinguish a bad habit, you can only change it.","Language, even more than color, defines who you are to people.", " Small wins are a steady application of a small advantage.","We tell people to follow their dreams, but you can only dream of what you can imagine."];
    document.getElementById("quote").innerText = quotes[Math.floor(Math.random() * quotes.length)]

};