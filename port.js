const htmlProjectElement = document.querySelector('.js-htmlproject');
const htmlProjectBox1 = document.querySelector('.js-box1');
const htmlProjectElement2 = document.querySelector('.js-htmlproject2');
const htmlProjectBox2 = document.querySelector('.js-box2');

const html2 =`<div class="project-description">
            <div class="project-description1">
                <div><b>My Resume</b></div>
                <div>To create a digital resume that effectively highlights my professional journey, skills, and accomplishments.
                It allows easy navigation & quick access to important information.</div>
                <div><a href="">To View</a></div>
            </div>
            <div class="project-description2">
                <div><b>Google Form</b></div>
                <div>This project is designed to create a user-friendly web application that 
                utilizes google forms for data collection and feedback.</div>
                <div><a href="https://kishorejn.github.io/Form/" target="_blank">To View</a></div>
            </div>
        </div>`;

const html1 = `<div class="project-description">
            <div class="project-description1">
                <div><b>My Resume</b></div>
                <div>To create a digital resume that effectively highlights my professional journey, skills, and accomplishments.
                It allows easy navigation & quick access to important information.</div>
                <div><a href="">To View</a></div>
            </div>
            <div class="project-description2">
                <div><b>Google Form</b></div>
                <div>This project is designed to create a user-friendly web application that 
                utilizes google forms for data collection and feedback.</div>
                <div><a href="https://kishorejn.github.io/Form/" target="_blank">To View</a></div>
            </div>
        </div>`;



htmlProjectElement.addEventListener('click', () => {
    htmlProjectBox1.innerHTML = html1;
    htmlProjectBox1.classList.add('css-box1');
});

htmlProjectElement2.addEventListener('click', ()=> {
    htmlProjectBox2.innerHTML = html2;
});

