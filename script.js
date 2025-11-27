
const projects = [
  {
    "title": "Full Stack Intro.",
    "description": "從零開始認識前後端開發！從環境設定、HTML、CSS、JavaScript 等基礎打好地基，並逐步學習版面切版、網頁動態效果實作，讓大家都能獨立完成屬於自己、能「動起來」的互動式履歷網站。",
    "date": "2025/09/22",
    "url": "https://github.com/NYCU-SDC/full-stack-intro-frontend"
  },
  {
    "title": "Full Stack Advanced",
    "description": "這門課會透過實作任務管理工具，熟悉 React 的開發生態系，了解前端的實作細節。下學期則會延續專案，完成 Golang 後端，學習完整的前後端開發。",
    "date": "2025/08/29",
    "url": "https://github.com/NYCU-SDC/full-stack-advanced-frontend"
  },
  {
    "title": "Core System",
    "description": "一站式完成大部分行政操作，不必在表單、試算表和群組訊息間來回切換。\n從真實需求出發，逐步迭代。\n讓行政變簡單，把時間留給更有價值的活動與交流。",
    "date": "2025/05/29",
    "url": "https://github.com/NYCU-SDC/core-system-frontend"
  },
  {
    "title": "Clustron",
    "description": "Clustron 是一個計算機叢集與異質計算管理的可視化解決方案，結合實驗室與課程的實務需求，提供一個可實際運作的解決方案。",
    "date": "2025/04/16",
    "url": "https://github.com/NYCU-SDC/clustron-frontend"
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
