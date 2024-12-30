// script.js
function submitForm() {
    const radios = document.querySelectorAll('input[type="radio"]');
    let totalScore = 0;
    let group1Score = 0; // For questions 4, 10, 13, 18
    let group2Score = 0; // For questions 1, 6, 12, 16
    let group3Score = 0; // For questions 2, 8, 11, 17
    let group4Score = 0; // For questions 5, 7, 14
    let group5Score = 0; // For questions 3, 9, 15

    const group1Questions = [4, 10, 13, 18];
    const group2Questions = [1, 6, 12, 16];
    const group3Questions = [2, 8, 11, 17];
    const group4Questions = [5, 7, 14];
    const group5Questions = [3, 9, 15];

    const numQuestions = radios.length / 5;

    for (let i = 0; i < numQuestions; i++) {
        let questionScore = 0;
        const radioName = `question${i + 1}`;
        const selectedRadio = document.querySelector(`input[name="${radioName}"]:checked`);
        if (selectedRadio) {
            questionScore = parseInt(selectedRadio.value);
            totalScore += questionScore;
            if (group1Questions.includes(i + 1)) {
                group1Score += questionScore;
            } else if (group2Questions.includes(i + 1)) {
                group2Score += questionScore;
            } else if (group3Questions.includes(i + 1)) {
                group3Score += questionScore;
            } else if (group4Questions.includes(i + 1)) {
                group4Score += questionScore;
            } else if (group5Questions.includes(i + 1)) {
                group5Score += questionScore;
            }
        }
    }

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `Your total score is: ${totalScore} <br>`;

    let comment = "";
    if (totalScore <= 42) {
        comment = "It is likely this team member is unhappy at work, with little to satisfy them, but plenty to dissatisfy. Their work output is minimal and its quality is poor – when they actually turn up! It might not be long before they leave. The cause might be poor relationships with their colleagues, their attitude to their work, or their inability to look at the wider context of what they are doing. But there are plenty of tools to help you turn the situation around.";
    } else if (totalScore <= 66) {
        comment = "Your team member is not at their most happy but you can glimpse some positivity. Have a look through your answers more closely to pinpoint where they scored lowest. Focus your energy here and you'll likely see a rapid improvement in their well-being and productivity.";
    } else if (totalScore <= 90) {
        comment = "Great! Your team member appears to be happy at work. They're a great team player but also engaged enough in their own work to get on well by themselves, too. Their quantity and quality of work is high, and they have a strong sense of the wider context and meaning for their role. But don't be complacent. Keep working with them to help maintain their motivation and to ensure you don't lose them. This is particularly important if they're actually masking unhappiness and putting all their energies into work. They'll need your support to keep going.";
    } else {
        comment = "Thank you! We are thrilled that you loved our product.";
    }

    resultsDiv.innerHTML += `<strong>${comment}</strong> <br><br>`;

    resultsDiv.innerHTML += "Your leadership skill shows on "How happy are your team"<br>";
    resultsDiv.innerHTML += "Measure it and work on your leadership skill<br><br>";

    resultsDiv.innerHTML += `Positive Emotions: ${group1Score} <br>`;
    resultsDiv.innerHTML += `Engagement: ${group2Score} <br>`;
    resultsDiv.innerHTML += `Positive Relationships: ${group3Score} <br>`;
    resultsDiv.innerHTML += `Meaning: ${group4Score} <br>`;
    resultsDiv.innerHTML += `Accomplishment/Achievement: ${group5Score} <br>`;
    resultsDiv.innerHTML += `Total Group Score: ${group1Score + group2Score + group3Score + group4Score + group5Score} <br><br>`;

    const scores = [group1Score, group2Score, group3Score, group4Score, group5Score];
    const minScore = Math.min(...scores);
    const sortedScores = [...scores].sort((a, b) => a - b);
    const colors = scores.map(score => {
        if (score === minScore) return "red";
        if (score === sortedScores[1]) return "blue";
        return "grey";
    });

    let barChartHTML = "<div style='display: flex;'>";
    for (let i = 0; i < scores.length; i++) {
        barChartHTML += `<div class="bar ${colors[i]}" style="height: ${scores[i] * 10}px;">${scores[i]}</div>`;
    }
    barChartHTML += "</div>";

    resultsDiv.innerHTML += barChartHTML;

    resultsDiv.innerHTML += "<button onclick='window.print()'>Print</button>";
}

