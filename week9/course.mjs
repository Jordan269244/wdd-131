// Course.mjs

// Define the course object with sections and methods
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
      {
        sectionNum: 1,
        roomNum: "STC 353",
        enrolled: 26,
        days: "TTh",
        instructor: "Bro T",
      },
      {
        sectionNum: 2,
        roomNum: "STC 347",
        enrolled: 25,
        days: "TTh",
        instructor: "Sis A",
      },
    ],
    
    changeEnrollment: function (sectionNum, add = true) {
      const sectionIndex = this.sections.findIndex(
        (section) => section.sectionNum == sectionNum
      );
      if (sectionIndex >= 0) {
        if (add) {
          this.sections[sectionIndex].enrolled++;
        } else {
          this.sections[sectionIndex].enrolled--;
        }
        this.renderSections();
      }
    },
  
    setCourseInfo: function () {
      const courseName = document.querySelector("#courseName");
      const courseCode = document.querySelector("#courseCode");
      courseName.textContent = this.name;
      courseCode.textContent = this.code;
    },
  
    renderSections: function () {
      const html = this.sections.map(
        (section) => `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td></tr>`
      );
      document.querySelector("#sections").innerHTML = html.join("");
    },
  
    init: function () {
      this.setCourseInfo();
      this.renderSections();
    }
  };
  
  // Export the course object as the default export
  export default aCourse;
  