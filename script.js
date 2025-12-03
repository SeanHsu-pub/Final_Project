
const projects = [
  {
    "title": "初學網頁設計的心得",
    "description": "雖然我沒有完全的認真學習，一方面在忙工作的事情，幾乎每次都遲到，但是我覺得我學到超級多東西，希望下學期的課程，我能空出更多時間學習",
    "date": "2025/12/03",
    "url": "https://seanhsu-pub.github.io/Final_Project/"
  },
  {
    "title": "社課的貪吃蛇小專題",
    "description": "之前與高中朋友一起回母校當高中資訊社社師，給學生的一個學期小專題，但就是沒有很多人寫出來><",
    "date": "2020/09-2024/06",
    "url": "https://github.com/SeanHsu-pub/snake_code_for_ckshcsdc"
  },
  {
    "title": "大學程式課練習的題目",
    "description": "大學有空就會刷題，我的程式能力沒有很好，所以盡可能刷題增加經驗。",
    "date": "long ago",
    "url": "https://github.com/SeanHsu-pub/kattis"
  },
  {
    "title": "zero judge practice",
    "description": "很久很久以前用zerojudge練習刷題的程式碼XD。",
    "date": "long long ago",
    "url": "https://github.com/SeanHsu-pub/zerojudge_practice"
  }
]

const projectsList = document.querySelector(".project-list");

function renderProjects(list) {
    projectsList.innerHTML = list
        .map(p => {
            return `
            <div class="project-item" data-url="${p.url}" target="_blank">
                
                <h3>${p.title}</h3>
                <div class="content">
                    <p>${p.description.replace(/\n/g, "<br>")}</p>
                    <p class="meta">Created on ${p.date}</p>
                </div>
            </div>
            `;
        })
        .join("");
        attachProjectClickListeners();
}

// first time load all projects
renderProjects(projects);


// const projectItems = document.querySelectorAll(".project-item"); // 選取所有 project 卡片

// projectItems.forEach(item => {
//     console.log("I'm clicked.");
//     item.addEventListener("click", function() {
//         const url = this.getAttribute("data-url"); // 在 HTML 加入的連結
//         if (url) {
//             window.open(url,"_blank"); // 在新分頁開啟
//         }
//     });
// });

function attachProjectClickListeners() {
    const projectItems = document.querySelectorAll(".project-item");
    projectItems.forEach(item => {
        item.addEventListener("click", function() {
            const url = this.getAttribute("data-url");
            if (url) {
                window.open(url, "_blank");
            }
        });
    });
}

// Typewriter effect
const typewriterElement = document.querySelector(".typewriter");
const texts = ["滴水之恩 湧泉以報 U didadida me, I hualahuala u.", "If u think u can, u can. 如果尼覺得你是罐頭，你就是罐頭", "😮的意思其實是保齡球，所以當你使用這個😮表情時就代表你感覺非常保齡球", "How old are u 怎麼老是你", "U see see u. 你看看你", "I watch watch watch. 我看看手錶"];
let textIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentText = texts[textIndex];
    const typingSpeed = 100; 
    const deletingSpeed = 50; 
    const pauseAfterTyping = 2000;
    const pauseAfterDeleting = 500;
    
    if (!isDeleting) {
    // typing phase
    let charIndex = 0;
    typewriterElement.textContent = '';
    
    const typingInterval = setInterval(() => {
        typewriterElement.textContent += currentText[charIndex];
        charIndex++;
        
        if (charIndex === currentText.length) { // finished typing
        clearInterval(typingInterval);
        // pause after typing, then start deleting
        setTimeout(() => {
            isDeleting = true;
            typeWriter();
        }, pauseAfterTyping);
        }
    }, typingSpeed);
    
    } else {
    // deleting phase
    let charIndex = currentText.length;
    
    const deletingInterval = setInterval(() => {
        typewriterElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        
        if (charIndex === 0) {
        clearInterval(deletingInterval);
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        
        setTimeout(() => {
            typeWriter();
        }, pauseAfterDeleting);
        }
    }, deletingSpeed);
    }
}

// Start the typewriter effect
typeWriter();