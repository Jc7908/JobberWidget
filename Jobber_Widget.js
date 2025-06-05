// widget.js

// 1) Configuration & inline SVGs
const PHONE_NUMBER = "+19137067071";

// (A) Phone handset icon
const phoneSVG = `
  <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27
             11.36 11.36 0 003.55.57 1 1 0 011 1v3.44a1 1 0 01-1 1A17.09
             17.09 0 013 5a1 1 0 011-1h3.44a1 1 0 011 1 11.36 11.36 0
             00.57 3.55 1 1 0 01-.27 1.11l-2.12 2.13z"/>
  </svg>
`;

// (B) Smartphone icon
const mobileSVG = `
  <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
    <path d="M17 1H7a2 2 0 00-2 2v18a2 2 0 002 2h10a2 2 0 002-2V3a2
             2 0 00-2-2zm-5 22a1 1 0 110-2 1 1 0 010 2zm5-4H7V3h10v16z"/>
  </svg>
`;

// (C) Envelope icon
const mailSVG = `
  <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
    <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2
             2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zm0
             12H4V8l8 5 8-5v8z"/>
  </svg>
`;

// (D) File icon
const fileSVG = `
  <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2
             2 0 002-2V8l-6-6zM6 20V4h8v5h5v11H6z"/>
  </svg>
`;

// (E) Menu (three lines) icon
const menuLinesSVG = `
  <svg viewBox="0 0 24 24" width="24" height="24" fill="#555">
    <path d="M4 7h16v2H4V7zm0 4h16v2H4v-2zm0 4h16v2H4v-2z"/>
  </svg>
`;

// 2) Build & inject circle icons + Lets Talk + modal + Jobber snippet
(function() {
  // 2a) Circle icons container
  const circleContainer = document.createElement("div");
  circleContainer.className = "circle-icons";

  // • Call Now
  const phoneIcon = document.createElement("div");
  phoneIcon.className = "circle-icon";
  phoneIcon.innerHTML = phoneSVG;
  phoneIcon.onclick = () => window.location.href = `tel:${PHONE_NUMBER}`;
  const phoneLabel = document.createElement("span");
  phoneLabel.className = "label";
  phoneLabel.textContent = "Call Now";
  phoneIcon.appendChild(phoneLabel);
  circleContainer.appendChild(phoneIcon);

  // • Call Me Back
  const mobileIcon = document.createElement("div");
  mobileIcon.className = "circle-icon";
  mobileIcon.innerHTML = mobileSVG;
  mobileIcon.onclick = () => window.location.href = `tel:${PHONE_NUMBER}`;
  const mobileLabel = document.createElement("span");
  mobileLabel.className = "label";
  mobileLabel.textContent = "Call Me Back";
  mobileIcon.appendChild(mobileLabel);
  circleContainer.appendChild(mobileIcon);

  // • Schedule Now (gear icon)
  const gearIcon = document.createElement("div");
  gearIcon.className = "circle-icon";
  const img = document.createElement("img");
  img.src = "https://raw.githubusercontent.com/Jc7908/image1/main/7e8238537f889d8cd04cdfd5560b3f48-Picsart-BackgroundRemover.jpg";
  img.alt = "Schedule Now";
  gearIcon.appendChild(img);
  gearIcon.onclick = () => openJobberModal();
  const gearLabel = document.createElement("span");
  gearLabel.className = "label";
  gearLabel.textContent = "Schedule Now";
  gearIcon.appendChild(gearLabel);
  circleContainer.appendChild(gearIcon);

  // • Email Us
  const mailIcon = document.createElement("div");
  mailIcon.className = "circle-icon";
  mailIcon.innerHTML = mailSVG;
  mailIcon.onclick = () => window.location.href = "mailto:advisor@prohomeexteriorskc.com";
  const mailLabel = document.createElement("span");
  mailLabel.className = "label";
  mailLabel.textContent = "Email Us";
  mailIcon.appendChild(mailLabel);
  circleContainer.appendChild(mailIcon);

  // • Send File
  const fileIcon = document.createElement("div");
  fileIcon.className = "circle-icon";
  fileIcon.innerHTML = fileSVG;
  fileIcon.onclick = () => openJobberModal();
  const fileLabel = document.createElement("span");
  fileLabel.className = "label";
  fileLabel.textContent = "Send File";
  fileIcon.appendChild(fileLabel);
  circleContainer.appendChild(fileIcon);

  document.body.appendChild(circleContainer);

  // 2b) “Let’s Talk” widget
  const wrapper = document.createElement("div");
  wrapper.className = "lets-talk-wrapper";

  const triggerBtn = document.createElement("button");
  triggerBtn.id = "lets-talk-trigger";
  triggerBtn.textContent = "Let's Talk";
  triggerBtn.onclick = () => toggleLetsTalkPanel();
  wrapper.appendChild(triggerBtn);

  const panel = document.createElement("div");
  panel.id = "lets-talk-panel";

  const closeX = document.createElement("span");
  closeX.className = "close-panel";
  closeX.textContent = "×";
  closeX.onclick = () => toggleLetsTalkPanel();
  panel.appendChild(closeX);

  const heading = document.createElement("h3");
  heading.textContent = "Let's Talk!";
  panel.appendChild(heading);

  const para = document.createElement("p");
  para.textContent = "Thanks for stopping by! We're here to help, please don't hesitate to reach out.";
  panel.appendChild(para);

  const btnRow = document.createElement("div");
  btnRow.className = "btn-row";

  // Schedule Now inside popup
  const scheduleBtn = document.createElement("button");
  scheduleBtn.className = "schedule-btn";
  scheduleBtn.textContent = "Schedule Now";
  scheduleBtn.onclick = () => openJobberModal();
  btnRow.appendChild(scheduleBtn);

  // Hamburger (☰)
  const menuContainer = document.createElement("div");
  menuContainer.id = "menu-container";
  menuContainer.onmouseenter = () => showMenu();
  menuContainer.onmouseleave = () => hideMenu();
  menuContainer.style.position = "relative";

  const menuBtn = document.createElement("div");
  menuBtn.className = "menu-btn";
  menuBtn.innerHTML = menuLinesSVG;
  menuContainer.appendChild(menuBtn);

  const menuOptions = document.createElement("div");
  menuOptions.id = "menu-options";
  menuOptions.style.display = "none";
  menuOptions.style.position = "absolute";
  menuOptions.style.bottom = "100%";
  menuOptions.style.right = "0";
  menuOptions.style.background = "rgba(51,51,51,0.85)";
  menuOptions.style.borderRadius = "6px";
  menuOptions.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
  menuOptions.style.zIndex = "1001";

  const items = [
    { text: "Call Now",     action: () => callNow() },
    { text: "Call Me Back", action: () => callBack() },
    { text: "Schedule Now", action: () => openJobberModal() },
    { text: "Email Us",     action: () => emailUs() },
    { text: "Send File",    action: () => sendFile() },
  ];
  items.forEach((it) => {
    const div = document.createElement("div");
    div.className = "menu-item";
    div.style.padding = "12px 16px";
    div.style.color = "#fff";
    div.style.cursor = "pointer";
    div.textContent = it.text;
    div.onclick = it.action;
    menuOptions.appendChild(div);
  });

  menuContainer.appendChild(menuOptions);
  btnRow.appendChild(menuContainer);
  panel.appendChild(btnRow);

  wrapper.appendChild(panel);
  document.body.appendChild(wrapper);

  // 2c) Jobber modal
  const modal = document.createElement("div");
  modal.id = "jobber-modal";
  modal.style.display = "none";
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.backgroundColor = "rgba(0,0,0,0.6)";
  modal.style.zIndex = "2000";
  modal.style.overflow = "auto";

  const modalContent = document.createElement("div");
  modalContent.className = "modal-content";
  modalContent.style.position = "relative";
  modalContent.style.top = "50%";
  modalContent.style.left = "50%";
  modalContent.style.transform = "translate(-50%, -50%)";
  modalContent.style.background = "white";
  modalContent.style.padding = "20px";
  modalContent.style.width = "90%";
  modalContent.style.maxWidth = "700px";
  modalContent.style.borderRadius = "10px";
  modalContent.style.fontFamily = "'Montserrat', sans-serif";
  modalContent.style.zIndex = "10001";
  modalContent.style.overflowY = "auto";
  modalContent.style.maxHeight = "90vh";

  const closeModalBtn = document.createElement("span");
  closeModalBtn.className = "close-modal";
  closeModalBtn.textContent = "×";
  closeModalBtn.onclick = () => closeJobberModal();
  closeModalBtn.style.position = "absolute";
  closeModalBtn.style.top = "10px";
  closeModalBtn.style.right = "30px";
  closeModalBtn.style.fontSize = "26px";
  closeModalBtn.style.width = "32px";
  closeModalBtn.style.height = "32px";
  closeModalBtn.style.display = "flex";
  closeModalBtn.style.alignItems = "center";
  closeModalBtn.style.justifyContent = "center";
  closeModalBtn.style.color = "#888";
  closeModalBtn.style.cursor = "pointer";
  closeModalBtn.style.transition = "color 0.3s";
  closeModalBtn.style.background = "rgba(255,255,255,0.8)";
  closeModalBtn.style.borderRadius = "50%";

  closeModalBtn.onmouseover = () => (closeModalBtn.style.color = "#444");
  closeModalBtn.onmouseout  = () => (closeModalBtn.style.color = "#888");

  modalContent.appendChild(closeModalBtn);

  const jobberContainer = document.createElement("div");
  jobberContainer.id = "3d4da358-9dda-4aca-ac1b-824a5b9f4694";
  modalContent.appendChild(jobberContainer);

  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  // 3) Interaction functions
  window.toggleLetsTalkPanel = function() {
    const p = document.getElementById("lets-talk-panel");
    const m = document.getElementById("menu-options");
    if (p.style.display === "block") {
      p.style.display = "none";
      m.style.display = "none";
    } else {
      p.style.display = "block";
      m.style.display = "none";
    }
  };

  window.showMenu = function() {
    document.getElementById("menu-options").style.display = "block";
  };
  window.hideMenu = function() {
    document.getElementById("menu-options").style.display = "none";
  };

  window.openJobberModal = function() {
    document.getElementById("jobber-modal").style.display = "block";
    document.getElementById("lets-talk-panel").style.display = "none";
  };
  window.closeJobberModal = function() {
    document.getElementById("jobber-modal").style.display = "none";
  };

  window.callNow = function() {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };
  window.callBack = function() {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };
  window.emailUs = function() {
    window.location.href = "mailto:advisor@prohomeexteriorskc.com";
  };
  window.sendFile = function() {
    openJobberModal();
  };

  // 4) Load the Jobber embed snippet
  const script = document.createElement("script");
  script.src = "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js";
  script.setAttribute("clienthub_id", "3d4da358-9dda-4aca-ac1b-824a5b9f4694");
  script.setAttribute("form_url", "https://clienthub.getjobber.com/client_hubs/3d4da358-9dda-4aca-ac1b-824a5b9f4694/public/work_request/embedded_work_request_form");
  document.body.appendChild(script);
})();
