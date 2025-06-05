// widget-script.js

(function(){
    // 1) Insert the HTML structure into the page
    var container = document.createElement("div");
    container.innerHTML = `
      <!-- Five round circle icons -->
      <div class="circle-icons">
        <!-- 1. Call Now -->
        <div class="circle-icon" onclick="callNow()">
          <svg viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 
                     11.36 11.36 0 003.55.57 1 1 0 011 1v3.44a1 1 0 01-1 1A17.09 
                     17.09 0 013 5a1 1 0 011-1h3.44a1 1 0 011 1 11.36 11.36 0 
                     00.57 3.55 1 1 0 01-.27 1.11l-2.12 2.13z"/>
          </svg>
          <span class="label">Call Now</span>
        </div>
        <!-- 2. Call Me Back -->
        <div class="circle-icon" onclick="callBack()">
          <svg viewBox="0 0 24 24">
            <path d="M17 1H7a2 2 0 00-2 2v18a2 2 0 002 2h10a2 2 0 002-2V3a2 
                     2 0 00-2-2zm-5 22a1 1 0 110-2 1 1 0 010 2zm5-4H7V3h10v16z"/>
          </svg>
          <span class="label">Call Me Back</span>
        </div>
        <!-- 3. Schedule Now (gear icon) -->
        <div class="circle-icon" onclick="openJobberModal()">
          <img
            src="https://your-cdn.com/path/to/7e8238537f889d8cd04cdfd5560b3f48-Picsart-BackgroundRemover.jpg"
            alt="Schedule Now"
            width="24"
            height="24"
          />
          <span class="label">Schedule Now</span>
        </div>
        <!-- 4. Email Us -->
        <div class="circle-icon" onclick="emailUs()">
          <svg viewBox="0 0 24 24">
            <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 
                     2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 
                     12H4V8l8 5 8-5v8z"/>
          </svg>
          <span class="label">Email Us</span>
        </div>
        <!-- 5. Send File -->
        <div class="circle-icon" onclick="sendFile()">
          <svg viewBox="0 0 24 24">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 
                     2 0 002-2V8l-6-6zM6 20V4h8v5h5v11H6z"/>
          </svg>
          <span class="label">Send File</span>
        </div>
      </div>
  
      <!-- “Let’s Talk” trigger + panel -->
      <div class="lets-talk-wrapper">
        <button id="lets-talk-trigger" onclick="toggleLetsTalkPanel()">
          Let's Talk
        </button>
        <div id="lets-talk-panel">
          <span class="close-panel" onclick="toggleLetsTalkPanel()">&times;</span>
          <h3>Let's Talk!</h3>
          <p>
            Thanks for stopping by! We’re here to help,
            please don’t hesitate to reach out.
          </p>
          <div class="btn-row">
            <button class="schedule-btn" onclick="openJobberModal()">
              Schedule Now
            </button>
            <div id="menu-container" onmouseenter="showMenu()" onmouseleave="hideMenu()" style="position: relative;">
              <!-- Dropdown menu options -->
              <div id="menu-options" style="display: none; position: absolute; bottom: 100%; right: 0; background: rgba(51, 51, 51, 0.85); border-radius: 6px; box-shadow: 0 4px 12px rgba(0,0,0,0.3); z-index: 1001;">
                <div class="menu-item" onclick="callNow()">Call Now</div>
                <div class="menu-item" onclick="callBack()">Call Me Back</div>
                <div class="menu-item" onclick="openJobberModal()">Schedule Now</div>
                <div class="menu-item" onclick="emailUs()">Email Us</div>
                <div class="menu-item" onclick="sendFile()">Send File</div>
              </div>
              <div class="menu-btn">&#9776;</div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Jobber Modal (Embedded Form) -->
      <div id="jobber-modal">
        <div class="modal-content">
          <span class="close-modal" onclick="closeJobberModal()">&times;</span>
          <div id="3d4da358-9dda-4aca-ac1b-824a5b9f4694"></div>
        </div>
      </div>
    `;
    document.body.appendChild(container);
  
    // 2) JavaScript behaviors
    window.toggleLetsTalkPanel = function() {
      var panel = document.getElementById('lets-talk-panel');
      var menu = document.getElementById('menu-options');
      if (panel.style.display === 'block') {
        panel.style.display = 'none';
        menu.style.display = 'none';
      } else {
        panel.style.display = 'block';
        menu.style.display = 'none';
      }
    };
  
    window.showMenu = function() {
      document.getElementById('menu-options').style.display = 'block';
    };
    window.hideMenu = function() {
      document.getElementById('menu-options').style.display = 'none';
    };
  
    window.openJobberModal = function() {
      document.getElementById('jobber-modal').style.display = 'block';
      document.getElementById('lets-talk-panel').style.display = 'none';
    };
    window.closeJobberModal = function() {
      document.getElementById('jobber-modal').style.display = 'none';
    };
  
    window.callNow = function() {
      window.location.href = 'tel:+19137067071';
    };
    window.callBack = function() {
      window.location.href = 'tel:+19137067071';
    };
    window.emailUs = function() {
      window.location.href = 'mailto:advisor@prohomeexteriorskc.com';
    };
    window.sendFile = function() {
      openJobberModal();
    };
  })();