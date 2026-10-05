const API_URL = "http://localhost:5000/api/skills";

const skillButtons =
  document.querySelectorAll(".skills button");

const careerSelect =
  document.getElementById("career");

const analyzeButton =
  document.getElementById("analyze");

const loadHistoryButton =
  document.getElementById("loadHistory");

let selectedSkills = [];


/*
CAREER REQUIREMENTS
*/

const careers = {

  fullstack: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "Git"
  ],

  frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git"
  ],

  backend: [
    "JavaScript",
    "Node.js",
    "MongoDB",
    "SQL",
    "Git"
  ],

  data: [
    "Python",
    "SQL",
    "Git"
  ],

  uiux: [
    "Figma",
    "HTML",
    "CSS"
  ],

  devops: [
    "Linux",
    "Docker",
    "Git",
    "Node.js"
  ]

};


/*
SKILL SELECTION
*/

skillButtons.forEach(button => {

  button.addEventListener("click", () => {

    const skill =
      button.dataset.skill;

    button.classList.toggle("active");

    if (selectedSkills.includes(skill)) {

      selectedSkills =
        selectedSkills.filter(
          item => item !== skill
        );

    } else {

      selectedSkills.push(skill);

    }

  });

});


/*
ANALYZE
*/

analyzeButton.addEventListener(
  "click",
  async () => {

    if (selectedSkills.length === 0) {

      alert(
        "Please select at least one skill."
      );

      return;
    }


    const career =
      careerSelect.value;


    const requiredSkills =
      careers[career];


    const matched =
      requiredSkills.filter(
        skill =>
          selectedSkills.includes(skill)
      );


    const missing =
      requiredSkills.filter(
        skill =>
          !selectedSkills.includes(skill)
      );


    const percentage =
      Math.round(
        matched.length /
        requiredSkills.length *
        100
      );


    updateDashboard(
      percentage,
      missing
    );


    /*
    SEND DATA TO BACKEND
    */

    try {

      const response =
        await fetch(API_URL + "/analyze", {

          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify({

            skills: selectedSkills,

            career: career,

            score: percentage,

            missingSkills: missing

          })

        });


      if (response.ok) {

        showToast(
          "Analysis saved successfully."
        );

        loadHistory();

      }

    } catch (error) {

      console.log(
        "Backend unavailable:",
        error
      );

      showToast(
        "Analysis complete. Backend unavailable."
      );

    }

  }
);


/*
UPDATE DASHBOARD
*/

function updateDashboard(
  percentage,
  missing
) {

  document.getElementById(
    "score"
  ).textContent = percentage;


  document.getElementById(
    "heroScore"
  ).textContent =
    percentage + "%";


  document.getElementById(
    "progress"
  ).style.width =
    percentage + "%";


  let message;

  if (percentage >= 80) {

    message =
      "Excellent! You're almost career ready.";

  } else if (percentage >= 50) {

    message =
      "Good foundation. Keep developing your skills.";

  } else {

    message =
      "You have several important skills to develop.";

  }


  document.getElementById(
    "message"
  ).textContent = message;


  /*
  MISSING SKILLS
  */

  const missingBox =
    document.getElementById(
      "missing"
    );


  if (missing.length === 0) {

    missingBox.innerHTML = `
      <span style="
        background:#e8f8ef;
        color:#198754;
      ">
        ✓ No major skill gaps
      </span>
    `;

  } else {

    missingBox.innerHTML =
      missing.map(
        skill =>
          `<span>+ ${skill}</span>`
      ).join("");

  }


  /*
  ROADMAP
  */

  const roadmap =
    document.getElementById(
      "roadmap"
    );


  if (missing.length === 0) {

    roadmap.innerHTML = `
      <div class="roadmap-step">
        <b>✓</b>
        <span>
          You're ready to start building projects!
        </span>
      </div>
    `;

    return;
  }


  roadmap.innerHTML =
    missing.map(
      (skill, index) => `

        <div class="roadmap-step">

          <b>
            ${String(index + 1).padStart(2, "0")}
          </b>

          <span>
            Learn ${skill}
          </span>

        </div>

      `
    ).join("");

}


/*
LOAD HISTORY
*/

async function loadHistory() {

  try {

    const response =
      await fetch(
        API_URL + "/history"
      );


    if (!response.ok) {
      throw new Error(
        "Unable to load history"
      );
    }


    const data =
      await response.json();


    renderHistory(data);

  } catch (error) {

    console.log(error);

  }

}


/*
RENDER HISTORY
*/

function renderHistory(data) {

  const history =
    document.getElementById(
      "history"
    );


  if (!data.length) {

    history.innerHTML = `
      <p class="empty-history">
        No analysis history yet.
      </p>
    `;

    return;
  }


  history.innerHTML =
    data.map(
      item => `

        <div class="history-item">

          <div>

            <strong>
              ${formatCareer(item.career)}
            </strong>

            <small>
              ${item.skills.join(", ")}
            </small>

          </div>

          <strong>
            ${item.score}%
          </strong>

        </div>

      `
    ).join("");

}


/*
CAREER NAME
*/

function formatCareer(value) {

  return value
    .replace("fullstack",
      "Full Stack Developer")
    .replace("frontend",
      "Frontend Developer")
    .replace("backend",
      "Backend Developer")
    .replace("data",
      "Data Analyst")
    .replace("uiux",
      "UI/UX Designer")
    .replace("devops",
      "DevOps Engineer");

}


/*
TOAST
*/

function showToast(message) {

  const toast =
    document.getElementById(
      "toast"
    );

  toast.textContent = message;

  toast.classList.add("show");

  setTimeout(() => {

    toast.classList.remove(
      "show"
    );

  }, 3000);

}


loadHistoryButton.addEventListener(
  "click",
  loadHistory
);

loadHistory();
