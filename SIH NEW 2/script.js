/* ============================================================
   SKILLPATH AI
   Main JavaScript
   ============================================================ */


/* ============================================================
   BASIC NAVIGATION
   ============================================================ */

function scrollToSection(id) {

    const section = document.getElementById(id);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }
}


/* ============================================================
   TOAST
   ============================================================ */

function showToast(message) {

    let toast = document.getElementById("toast");

    if (!toast) {

        toast = document.createElement("div");

        toast.id = "toast";

        toast.className = "toast";

        document.body.appendChild(toast);

    }

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 3500);

}


/* ============================================================
   START COUNSELLING
   ============================================================ */

function startCounselling(language) {

    if (language === "marathi") {

        scrollToSection("counselling");

        showToast(
            "तुमचे कौटुंबिक करिअर मार्गदर्शन सुरू झाले आहे."
        );

    } else {

        scrollToSection("counselling");

        showToast(
            "Your family career counselling has started."
        );

    }

}


/* ============================================================
   ENGLISH PROFILE
   ============================================================ */

function generateEnglishRecommendation() {

    const name =
        document.getElementById("engName").value ||
        "the learner";

    const education =
        document.getElementById("engEducation").value;

    const location =
        document.getElementById("engLocation").value;

    const interest =
        document.getElementById("engInterest").value;

    const concern =
        document.getElementById("engConcern").value;


    const chat =
        document.getElementById("englishChat");


    addChatMessage(
        chat,
        `
        <strong>Family Profile</strong><br><br>

        Learner: <b>${name}</b><br>
        Education: <b>${education}</b><br>
        Location: <b>${location}</b><br>
        Interest: <b>${interest}</b><br>
        Main Concern: <b>${concern}</b>
        `,
        "user-message"
    );


    setTimeout(() => {

        addChatMessage(
            chat,
            `
            <strong>✦ Personalized AI Insight</strong>

            <p>
                Based on the selected profile, the system
                recommends exploring career pathways related
                to <b>${interest}</b>.
            </p>

            <p>
                Your family's main concern is
                <b>${concern}</b>.
            </p>

            <p>
                The production system would now retrieve
                verified local placement, earning, training
                and progression information before producing
                the final recommendation.
            </p>

            <div class="ai-recommendation-box">

                <strong>Recommended next step</strong>

                <p>
                    Compare the suitable career pathways
                    and review their verified outcomes.
                </p>

            </div>
            `,
            "ai-message"
        );

    }, 600);

}


/* ============================================================
   MARATHI PROFILE
   ============================================================ */

function generateMarathiRecommendation() {

    const name =
        document.getElementById("marathiName").value ||
        "विद्यार्थी";

    const education =
        document.getElementById("marathiEducation").value;

    const location =
        document.getElementById("marathiLocation").value;

    const interest =
        document.getElementById("marathiInterest").value;

    const concern =
        document.getElementById("marathiConcern").value;


    const chat =
        document.getElementById("marathiChat");


    addChatMessage(
        chat,
        `
        <strong>कुटुंब प्रोफाइल</strong><br><br>

        विद्यार्थी: <b>${name}</b><br>
        शिक्षण: <b>${education}</b><br>
        स्थान: <b>${location}</b><br>
        आवड: <b>${interest}</b><br>
        मुख्य चिंता: <b>${concern}</b>
        `,
        "user-message"
    );


    setTimeout(() => {

        addChatMessage(
            chat,
            `
            <strong>✦ वैयक्तिक AI मार्गदर्शन</strong>

            <p>
                दिलेल्या माहितीनुसार
                <b>${interest}</b>
                संबंधित करिअर पर्याय पाहणे योग्य ठरेल.
            </p>

            <p>
                तुमच्या कुटुंबाची मुख्य चिंता:
                <b>${concern}</b>
            </p>

            <p>
                प्रत्यक्ष प्रणालीमध्ये या माहितीनुसार
                स्थानिक आणि सत्यापित रोजगार, उत्पन्न,
                प्रशिक्षण आणि करिअर प्रगतीची माहिती शोधली जाईल.
            </p>

            <div class="ai-recommendation-box">

                <strong>पुढील पाऊल</strong>

                <p>
                    योग्य करिअर पर्यायांची तुलना करा आणि
                    त्यांची सत्यापित माहिती पहा.
                </p>

            </div>
            `,
            "ai-message"
        );

    }, 600);

}


/* ============================================================
   CHAT MESSAGE
   ============================================================ */

function addChatMessage(container, message, type) {

    const div =
        document.createElement("div");

    div.className =
        "chat-message " + type;

    div.innerHTML =
        message;

    container.appendChild(div);

    container.scrollTop =
        container.scrollHeight;

}


/* ============================================================
   ENGLISH CHAT
   ============================================================ */

function sendEnglishMessage() {

    const input =
        document.getElementById("englishInput");

    if (!input) return;

    const message =
        input.value.trim();

    if (!message) return;


    const chat =
        document.getElementById("englishChat");


    addChatMessage(
        chat,
        message,
        "user-message"
    );


    input.value = "";


    setTimeout(() => {

        addChatMessage(
            chat,
            getEnglishAIResponse(message),
            "ai-message"
        );

    }, 500);

}


function englishQuickMessage(message) {

    const input =
        document.getElementById("englishInput");

    input.value =
        message;

    sendEnglishMessage();

}


/* ============================================================
   ENGLISH AI RESPONSE
   ============================================================ */

function getEnglishAIResponse(message) {

    const text =
        message.toLowerCase();


    if (
        text.includes("salary") ||
        text.includes("earn") ||
        text.includes("income")
    ) {

        return `
            <strong>✦ AI Counsellor</strong>

            <p>
                Earnings depend on the trade, location,
                qualification, experience and employer.
            </p>

            <p>
                Instead of generating a random number,
                SkillPath AI is designed to retrieve the
                latest verified earning information from
                its career database.
            </p>

            <div class="ai-recommendation-box">
                <strong>Verified Data First</strong>
                <p>
                    Compare local career outcomes before
                    making a decision.
                </p>
            </div>
        `;

    }


    if (
        text.includes("job") ||
        text.includes("security") ||
        text.includes("employment")
    ) {

        return `
            <strong>✦ AI Counsellor</strong>

            <p>
                Job security should be evaluated using
                placement trends, apprenticeship opportunities,
                local industry demand and skill progression.
            </p>

            <p>
                The platform combines these factors instead
                of promising a guaranteed job.
            </p>
        `;

    }


    if (
        text.includes("growth") ||
        text.includes("future")
    ) {

        return `
            <strong>✦ AI Counsellor</strong>

            <p>
                Vocational careers can progress through
                additional certifications, experience,
                advanced skills, supervisory roles and
                further education.
            </p>

            <button
                class="inline-action"
                onclick="scrollToSection('roadmap')">

                View Career Roadmap →

            </button>
        `;

    }


    if (
        text.includes("study") ||
        text.includes("education") ||
        text.includes("degree")
    ) {

        return `
            <strong>✦ AI Counsellor</strong>

            <p>
                Depending on the qualification and applicable
                rules, vocational learners may have progression
                routes through advanced certification, diplomas
                and further education.
            </p>
        `;

    }


    return `
        <strong>✦ AI Counsellor</strong>

        <p>
            I understand your concern.
        </p>

        <p>
            I can help you compare careers, training,
            job opportunities, earning information,
            progression and further education.
        </p>

        <p>
            Try asking about <b>salary</b>,
            <b>job security</b>, <b>career growth</b>
            or <b>further education</b>.
        </p>
    `;

}


/* ============================================================
   MARATHI CHAT
   ============================================================ */

function sendMarathiMessage() {

    const input =
        document.getElementById("marathiInput");

    if (!input) return;

    const message =
        input.value.trim();

    if (!message) return;


    const chat =
        document.getElementById("marathiChat");


    addChatMessage(
        chat,
        message,
        "user-message"
    );


    input.value = "";


    setTimeout(() => {

        addChatMessage(
            chat,
            getMarathiAIResponse(message),
            "ai-message"
        );

    }, 500);

}


function marathiQuickMessage(message) {

    const input =
        document.getElementById("marathiInput");

    input.value =
        message;

    sendMarathiMessage();

}


/* ============================================================
   MARATHI AI RESPONSE
   ============================================================ */

function getMarathiAIResponse(message) {

    const text =
        message.toLowerCase();


    if (
        text.includes("उत्पन्न") ||
        text.includes("पगार") ||
        text.includes("पैसे")
    ) {

        return `
            <strong>✦ AI करिअर मार्गदर्शक</strong>

            <p>
                उत्पन्न हे व्यवसाय, स्थान, शिक्षण,
                अनुभव आणि नियोक्ता यावर अवलंबून असते.
            </p>

            <p>
                SkillPath AI अंदाजे आकडे तयार करण्याऐवजी
                सत्यापित करिअर माहितीमधून संबंधित माहिती
                घेण्यासाठी तयार केले आहे.
            </p>

            <div class="ai-recommendation-box">

                <strong>सत्यापित माहिती</strong>

                <p>
                    निर्णय घेण्यापूर्वी स्थानिक करिअर
                    संधी आणि परिणामांची तुलना करा.
                </p>

            </div>
        `;

    }


    if (
        text.includes("नोकरी") ||
        text.includes("सुरक्षित")
    ) {

        return `
            <strong>✦ AI करिअर मार्गदर्शक</strong>

            <p>
                नोकरीची सुरक्षितता समजण्यासाठी रोजगार,
                अप्रेंटिसशिप, स्थानिक उद्योगांची मागणी
                आणि कौशल्याची प्रगती पाहणे आवश्यक आहे.
            </p>

            <p>
                प्लॅटफॉर्म कोणतीही नोकरी मिळण्याची
                हमी देत नाही; तो उपलब्ध माहितीच्या
                आधारे निर्णय घेण्यास मदत करतो.
            </p>
        `;

    }


    if (
        text.includes("प्रगती") ||
        text.includes("भविष्य")
    ) {

        return `
            <strong>✦ AI करिअर मार्गदर्शक</strong>

            <p>
                व्यावसायिक करिअरमध्ये अतिरिक्त प्रमाणपत्रे,
                अनुभव, प्रगत कौशल्ये, सुपरवायझरी भूमिका
                आणि पुढील शिक्षणाच्या संधी असू शकतात.
            </p>

            <button
                class="inline-action"
                onclick="scrollToSection('roadmap')">

                करिअर मार्ग पहा →

            </button>
        `;

    }


    if (
        text.includes("शिक्षण") ||
        text.includes("डिग्री")
    ) {

        return `
            <strong>✦ AI करिअर मार्गदर्शक</strong>

            <p>
                पात्रता आणि लागू नियमांनुसार पुढील
                प्रमाणपत्रे, डिप्लोमा आणि उच्च शिक्षणाचे
                मार्ग उपलब्ध असू शकतात.
            </p>
        `;

    }


    return `
        <strong>✦ AI करिअर मार्गदर्शक</strong>

        <p>
            मला तुमची चिंता समजली.
        </p>

        <p>
            मी तुम्हाला करिअर, प्रशिक्षण, नोकरी,
            उत्पन्न, करिअर प्रगती आणि पुढील
            शिक्षणाबद्दल माहिती देऊ शकतो.
        </p>

        <p>
            तुम्ही <b>उत्पन्न</b>, <b>नोकरी</b>,
            <b>करिअर प्रगती</b> किंवा
            <b>पुढील शिक्षण</b> याबद्दल विचारू शकता.
        </p>
    `;

}


/* ============================================================
   PARENT CONCERNS - ENGLISH
   ============================================================ */

function parentConcern(type) {

    const responses = {

        salary:
            "The platform explains earning ranges, experience-based growth and relevant career pathways using verified data.",

        job:
            "The platform looks at placement trends, apprenticeship opportunities and local industry demand.",

        status:
            "Families can see career progression and further education routes rather than viewing vocational education as an endpoint.",

        safety:
            "Safety information can be connected to verified training-provider and workplace information.",

        education:
            "The system explains applicable progression routes to advanced qualifications and further education.",

        local:
            "Location-based recommendations can show nearby training providers and relevant opportunities."

    };


    showToast(responses[type]);

}


/* ============================================================
   PARENT CONCERNS - MARATHI
   ============================================================ */

function parentConcernMarathi(type) {

    const responses = {

        salary:
            "सत्यापित माहितीच्या आधारे उत्पन्न, अनुभव आणि करिअर वाढ समजावून सांगितली जाते.",

        job:
            "रोजगार, अप्रेंटिसशिप आणि स्थानिक उद्योगांची मागणी यांचा विचार केला जातो.",

        status:
            "व्यावसायिक शिक्षणानंतरच्या करिअर प्रगतीचे आणि पुढील शिक्षणाचे मार्ग समजावले जातात.",

        safety:
            "प्रशिक्षण संस्था आणि कार्यस्थळाशी संबंधित सत्यापित सुरक्षितता माहिती उपलब्ध करता येते.",

        education:
            "पुढील प्रमाणपत्रे, डिप्लोमा आणि उच्च शिक्षणाच्या लागू मार्गांची माहिती दिली जाते.",

        local:
            "स्थानानुसार जवळच्या प्रशिक्षण संस्था आणि उपलब्ध संधी शोधता येतात."

    };


    showToast(responses[type]);

}


/* ============================================================
   CAREER DETAILS
   ============================================================ */

function showCareerDetails(career) {

    let message = "";


    if (career === "Electrician") {

        message =
            "Electrician pathway: 10th/12th → ITI → Apprenticeship → Technician → Senior Technician → Supervisor → Advanced Skills.";

    }

    else if (career === "Automobile Technician") {

        message =
            "Automobile pathway: Education → Automobile Training → Apprenticeship → Technician → Diagnostic Specialist → Service Advisor/Supervisor.";

    }

    else {

        message =
            "IT Support pathway: Vocational Training → IT Support → Technical Support → Specialist → Advanced Certification / Further Education.";

    }


    showToast(message);

}


/* ============================================================
   HUMAN COUNSELLOR MODAL
   ============================================================ */

function openCounsellor() {

    const modal =
        document.getElementById("counsellorModal");

    if (modal) {

        modal.classList.add("show");

    }

}


function closeCounsellor() {

    const modal =
        document.getElementById("counsellorModal");

    if (modal) {

        modal.classList.remove("show");

    }

}


function requestCounselling() {

    const input =
        document.getElementById("callbackName");

    const name =
        input?.value || "User";

    closeCounsellor();

    showToast(
        `Counselling request created for ${name}.`
    );

}


function requestCounsellingMarathi() {

    const input =
        document.getElementById("callbackName");

    const name =
        input?.value || "वापरकर्ता";

    closeCounsellor();

    showToast(
        `${name} यांच्यासाठी समुपदेशनाची विनंती नोंदवली आहे.`
    );

}


/* ============================================================
   VOICE INPUT
   ============================================================ */

function voiceInput(language) {

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;


    if (!SpeechRecognition) {

        showToast(
            "Voice input is not supported by this browser."
        );

        return;

    }


    const recognition =
        new SpeechRecognition();


    if (language === "marathi") {

        recognition.lang =
            "mr-IN";

    } else {

        recognition.lang =
            "en-IN";

    }


    recognition.start();


    recognition.onresult =
        function(event) {

            const text =
                event.results[0][0].transcript;


            if (language === "marathi") {

                document.getElementById(
                    "marathiInput"
                ).value = text;

            } else {

                document.getElementById(
                    "englishInput"
                ).value = text;

            }

        };


    recognition.onerror =
        function() {

            showToast(
                "Voice input could not be started."
            );

        };

}


/* ============================================================
   MODAL OUTSIDE CLICK
   ============================================================ */

window.addEventListener(
    "click",
    function(event) {

        const modal =
            document.getElementById("counsellorModal");

        if (
            modal &&
            event.target === modal
        ) {

            closeCounsellor();

        }

    }
)
function showNotification(message) {

    const notification = document.createElement("div");

    notification.innerText = message;

    notification.style.position = "fixed";
    notification.style.bottom = "25px";
    notification.style.right = "25px";
    notification.style.background = "#111827";
    notification.style.color = "white";
    notification.style.padding = "15px 22px";
    notification.style.borderRadius = "10px";
    notification.style.boxShadow = "0 8px 25px rgba(0,0,0,0.2)";
    notification.style.zIndex = "9999";

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 2500);
}