let participantCount = 1;

document.getElementById("add").addEventListener("click", () => {
    participantCount++;
    addParticipant(participantCount);
});

function addParticipant(count) {
    const participantTemplate =
        `<section class="participant ${count}">
            <p>Participant ${count}</p>
            <div class="item">
              <label for="fname${count}"> First Name<span>*</span></label>
              <input id="fname${count}" type="text" name="fname" value="" required />
            </div>
            <div class="item activities">
              <label for="activity${count}">Activity #<span>*</span></label>
              <input id="activity${count}" type="text" name="activity" />
            </div>
            <div class="item">
              <label for="fee${count}">Fee ($)<span>*</span></label>
              <input id="fee${count}" type="number" name="fee" />
            </div>
            <div class="item">
              <label for="date${count}">Desired Date <span>*</span></label>
              <input id="date${count}" type="date" name="date" />
            </div>
            <div class="item">
              <p>Grade</p>
              <select>
                <option selected value="" disabled></option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
              </select>
            </div>
          </section>`;
    document.getElementById("add").insertAdjacentHTML("beforebegin", participantTemplate);
}

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    submitForm();
});

function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    feeElements = [...feeElements];
    return feeElements.reduce((total, element) => total + Number(element.value || 0), 0);
}

function submitForm() {
    const adultName = document.getElementById("adult_name").value;
    const feeTotal = totalFees();
    const summaryMessage = successTemplate({
        name: adultName,
        count: participantCount,
        fees: feeTotal,
    });

    document.querySelector("form").style.display = "none";
    document.getElementById("summary").innerHTML = summaryMessage;
}

function successTemplate(info) {
    return `
    <h2>Thank You, ${info.name}!</h2>
    <p>You have registered ${info.count} participant(s) and owe $${info.fees} in fees.</p>
    `;
}
