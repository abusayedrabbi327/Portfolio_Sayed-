<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Ishrak Ahmed - Developer &amp; Designer</title>
  <meta name="description" content="Ishrak Ahmed — Full-stack developer, graphic designer, and AI-proficient creative technologist based in Dhaka, Bangladesh." />
  <meta property="og:title" content="Ishrak Ahmed — Developer & Designer" />
  <meta property="og:description" content="Full-stack developer, graphic designer, and AI-proficient creative technologist." />
  <meta property="og:type" content="website" />
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🅸</text></svg>" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/devicon.min.css" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <!-- Loader -->
  <div class="loader"><span class="loader-text">IA</span></div>

  <!-- Background Canvas -->
  <canvas id="bg-canvas"></canvas>

  <!-- Navigation -->
  <header class="top-nav" id="top-nav">
    <a href="#hero" class="nav-logo">Ishrak<span>.</span></a>
    <nav class="nav-links">
      <a href="#hero">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Works</a>
      <a href="#design">Design</a>
      <a href="#experience">Experience</a>
      <a href="#contact">Contact</a>
    </nav>
    <button class="theme-toggle" id="theme-toggle" aria-label="Toggle theme">
      <i class="fas fa-moon" id="theme-icon"></i>
    </button>
  </header>

  <!-- Mobile Navigation -->
  <nav class="mobile-nav" aria-label="Mobile navigation">
    <a href="#hero"><i class="fas fa-home"></i>Home</a>
    <a href="#about"><i class="fas fa-user"></i>About</a>
    <a href="#projects"><i class="fas fa-code"></i>Works</a>
    <a href="#design"><i class="fas fa-paint-brush"></i>Design</a>
    <a href="#contact"><i class="fas fa-envelope"></i>Contact</a>
  </nav>

  <!-- Main Content -->
  <main class="main-content">

    <!-- ==================== HERO ==================== -->
    <section class="hero" id="hero">
      <div class="hero-left">
        <p class="hero-greeting">Hi, I'm Ishrak Ahmed</p>
        <h1 class="hero-title">
          <span class="typing-line" id="typing-text"></span>
          <span class="typing-cursor">|</span>
        </h1>
        <p class="hero-desc">
          Full-stack developer, graphic designer, and AI-proficient creative technologist based in Dhaka, Bangladesh.
        </p>
        <div class="hero-buttons">
          <a href="#projects" class="btn-primary"><i class="fas fa-briefcase"></i> View Works</a>
          <a href="Ishrak_CV.pdf" target="_blank" class="btn-outline"><i class="fas fa-download"></i> Resume</a>
        </div>
        <div class="hero-stats">
          <div class="stat-item">
            <h3>11+</h3>
            <p>Projects</p>
          </div>
          <div class="stat-item">
            <h3>3+</h3>
            <p>Years Design</p>
          </div>
          <div class="stat-item">
            <h3>AI</h3>
            <p>Proficient</p>
          </div>
        </div>
      </div>
      <div class="hero-right">
        <img src="ishrak.jpg" alt="Ishrak Ahmed" class="hero-photo" />
        <div class="hero-photo-glow"></div>
      </div>
    </section>

    <!-- ==================== ABOUT ==================== -->
    <section class="section" id="about">
      <div class="reveal">
        <span class="section-label">About Me</span>
        <h2 class="section-title">Who <span class="accent">I Am</span></h2>
      </div>

      <div class="about-grid">
        <div class="reveal">
          <p class="about-bio">
            Hey, I'm Ishrak. I code stuff, design stuff, and I'm pretty good at
            getting AI to do both with me. I'm currently doing my B.Sc. in CSE at
            United International University, Dhaka.
          </p>
          <p class="about-bio">
           I build web apps, sites, mess around with ML models. I've been into graphics design since way before I started coding and ran my
            own clothing brand, led the design team at my uni's photography club, and taught workshops on Photoshop and Illustrator.
          </p>
          <p class="about-bio">
            I'm big on AI tools. I know which model works best for what. I genuinely
            enjoy figuring out the fastest way to go from an idea to a working thing.
          </p>
          <br>
        </div>

        <div class="reveal">
          <!-- Education -->
          <div class="edu-block">
            <h3>Education</h3>
            <div class="edu-item">
              <span class="edu-num">01</span>
              <div class="edu-details">
                <h4>United International University, Dhaka</h4>
                <span class="edu-date">2022 – 2026</span>
                <p class="edu-degree">B.Sc. in Computer Science & Engineering</p>
              </div>
            </div>
            <div class="edu-item">
              <span class="edu-num">02</span>
              <div class="edu-details">
                <h4>Government Science College, Dhaka</h4>
                <span class="edu-date">2018 – 2020</span>
                <p class="edu-degree">H.S.C in Science — GPA: 5.00</p>
              </div>
            </div>
            <div class="edu-item">
              <span class="edu-num">03</span>
              <div class="edu-details">
                <h4>Motijheel Model High School, Dhaka</h4>
                <span class="edu-date">2008 – 2018</span>
                <p class="edu-degree">S.S.C in Science — GPA: 5.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== TECH STACK ==================== -->
    <section class="section marquee-section" id="skills">
      <div class="reveal">
        <span class="section-label">Expertise</span>
        <h2 class="section-title">Tech Stack & <span class="accent">Tools</span></h2>
      </div>

      <!-- Row 1: Tech Stack (scrolls left) -->
      <div class="marquee-wrapper reveal">
        <h4 class="marquee-label">Tech Stack</h4>
        <div class="marquee" data-direction="left">
          <div class="marquee-track">
            <div class="marquee-item"><i class="fab fa-python"></i><span>Python</span></div>
            <div class="marquee-item"><i class="fab fa-node-js"></i><span>Node.js</span></div>
            <div class="marquee-item"><i class="fab fa-java"></i><span>Java</span></div>
            <div class="marquee-item"><i class="devicon-cplusplus-plain"></i><span>C/C++</span></div>
            <div class="marquee-item"><i class="fab fa-php"></i><span>PHP</span></div>
            <div class="marquee-item"><i class="fab fa-laravel"></i><span>Laravel</span></div>
            <div class="marquee-item"><i class="devicon-mysql-plain colored"></i><span>MySQL</span></div>
            <div class="marquee-item"><i class="fas fa-cloud"></i><span>Cloud Databases</span></div>
            <div class="marquee-item"><i class="fab fa-html5"></i><span>HTML</span></div>
            <div class="marquee-item"><i class="fab fa-css3-alt"></i><span>CSS</span></div>
            <div class="marquee-item"><i class="fab fa-js-square"></i><span>JavaScript</span></div>
            <div class="marquee-item"><i class="fab fa-unity"></i><span>Unity</span></div>
            <div class="marquee-item"><i class="devicon-csharp-plain"></i><span>C#</span></div>
            <div class="marquee-item"><i class="fab fa-git-alt"></i><span>Git</span></div>
          </div>
        </div>
      </div>

      <!-- Row 2: Tools (scrolls right) -->
      <div class="marquee-wrapper reveal">
        <h4 class="marquee-label">Tools & Skills</h4>
        <div class="marquee" data-direction="right">
          <div class="marquee-track">
            <div class="marquee-item"><i class="devicon-photoshop-plain colored" style="font-size: 24px;"></i><span>Photoshop</span></div>
            <div class="marquee-item"><i class="devicon-illustrator-plain colored" style="font-size: 24px;"></i><span>Illustrator</span></div>
            <div class="marquee-item"><i class="devicon-figma-plain colored" style="font-size: 24px;"></i><span>Figma</span></div>
            <div class="marquee-item"><img src="https://logo.clearbit.com/picsart.com" alt="PicsArt" style="width:24px;height:24px;border-radius:4px;" onerror="this.src='https://cdn.simpleicons.org/picsart/FF1E83'"><span>PicsArt</span></div>
            <div class="marquee-item"><img src="https://logo.clearbit.com/vegascreativesoftware.com" alt="Sony Vegas Pro" style="width:24px;height:24px;border-radius:4px;"><span>Sony Vegas Pro</span></div>

            <div class="marquee-item"><i class="fas fa-robot"></i><span>Prompt Engineering</span></div>
            <div class="marquee-item"><i class="fas fa-code"></i><span>AI-Assisted Dev</span></div>
            <div class="marquee-item"><i class="fas fa-diagram-project"></i><span>AI Workflow</span></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== PROJECTS ==================== -->
    <section class="section" id="projects">
      <div class="reveal">
        <span class="section-label">Portfolio</span>
        <h2 class="section-title">My <span class="accent">Projects</span></h2>
      </div>

      <div class="projects-grid">

        <!-- 1. AEGIS -->
        <div class="project-card reveal">
          <div class="project-card-header">
            <div class="project-icon"><i class="fas fa-shield-virus"></i></div>
            <div class="project-links">
              <a href="https://github.com/Ishrak-1520/AEGIS" target="_blank" rel="noopener" class="project-link"><i class="fab fa-github"></i></a>
            </div>
          </div>
          <h3>AEGIS - Desktop Cybersecurity</h3>
          <p class="project-date">2026</p>
          <p class="project-desc">
            A comprehensive Host-based Intrusion Detection System (HIDS) for Windows. It acts as an all-in-one security guard, constantly monitoring for malicious files, suspicious programs, phishing websites, and dangerous network traffic.
          </p>
          <div class="project-tech-tags">
            <span class="project-tech-tag">C#</span>
            <span class="project-tech-tag">.NET</span>
            <span class="project-tech-tag">Security</span>
            <span class="project-tech-tag">HIDS</span>
          </div>
        </div>

        <!-- 2. BiniOrbit -->
        <div class="project-card reveal">
          <div class="project-card-header">
            <div class="project-icon"><i class="fas fa-chart-line"></i></div>
            <div class="project-links">
              <a href="https://github.com/Ishrak-1520/BiniOrbit" target="_blank" rel="noopener" class="project-link"><i class="fab fa-github"></i></a>
            </div>
          </div>
          <h3>BiniOrbit - Investment Platform</h3>
          <p class="project-date">June 2025</p>
          <p class="project-desc">
            A platform connecting business owners with investors. Features comprehensive user profiles, verification systems, investment proposal creation, and interactive connection networking to facilitate business growth.
          </p>
          <div class="project-tech-tags">
            <span class="project-tech-tag">PHP</span>
            <span class="project-tech-tag">Laravel</span>
            <span class="project-tech-tag">MySQL</span>
            <span class="project-tech-tag">MVC</span>
          </div>
        </div>

        <!-- 3. Pronto -->
        <div class="project-card reveal">
          <div class="project-card-header">
            <div class="project-icon"><i class="fas fa-bullhorn"></i></div>
            <div class="project-links">
              <a href="https://github.com/Ishrak-1520/Pronto" target="_blank" rel="noopener" class="project-link"><i class="fab fa-github"></i></a>
              <a href="https://pronto-rho.vercel.app" target="_blank" rel="noopener" class="project-link"><i class="fas fa-external-link-alt"></i></a>
            </div>
          </div>
          <h3>Pronto - AI Marketing Studio</h3>
          <p class="project-date">January 2026</p>
          <p class="project-desc">
            A SaaS application that generates high-quality marketing campaigns in seconds. Uses Brand DNA profiling and Google Gemini's Multimodal AI to create on-brand headlines, captions, strategies, and visual assets automatically.
          </p>
          <div class="project-tech-tags">
            <span class="project-tech-tag">Node.js</span>
            <span class="project-tech-tag">Express</span>
            <span class="project-tech-tag">EJS</span>
            <span class="project-tech-tag">Gemini 1.5</span>
            <span class="project-tech-tag">Tailwind</span>
          </div>
        </div>

        <!-- 4. Flux -->
        <div class="project-card reveal">
          <div class="project-card-header">
            <div class="project-icon"><i class="fas fa-brain"></i></div>
            <div class="project-links">
              <a href="https://github.com/Ishrak-1520/Flux" target="_blank" rel="noopener" class="project-link"><i class="fab fa-github"></i></a>
            </div>
          </div>
          <h3>Flux - AI Project Mentor</h3>
          <p class="project-date">2026</p>
          <p class="project-desc">
            An intelligent agent designed to guide students from raw ideas to scaffolded codebases. Uses Agentic RAG and DuckDuckGo search to automate market research, generate educational blueprints, and produce professional technical docs.
          </p>
          <div class="project-tech-tags">
            <span class="project-tech-tag">Python</span>
            <span class="project-tech-tag">FastAPI</span>
            <span class="project-tech-tag">AI</span>
            <span class="project-tech-tag">LongCat SDK</span>
          </div>
        </div>

        <!-- 5. VeritasAI -->
        <div class="project-card reveal">
          <div class="project-card-header">
            <div class="project-icon"><i class="fas fa-user-shield"></i></div>
            <div class="project-links">
              <a href="https://github.com/Ishrak-1520/veritasai" target="_blank" rel="noopener" class="project-link"><i class="fab fa-github"></i></a>
            </div>
          </div>
          <h3>VeritasAI - Deepfake Detection</h3>
          <p class="project-date">March 2026</p>
          <p class="project-desc">
            Upload a photo or video and it tells you if it's AI-generated or real. Runs 11 different checks under the hood and explains the results in plain English so anyone can understand what's going on.
          </p>
          <div class="project-tech-tags">
            <span class="project-tech-tag">Node.js</span>
            <span class="project-tech-tag">Express</span>
            <span class="project-tech-tag">SQLite</span>
            <span class="project-tech-tag">FFmpeg</span>
            <span class="project-tech-tag">AI</span>
          </div>
        </div>

        <!-- 6. Echo -->
        <div class="project-card reveal">
          <div class="project-card-header">
            <div class="project-icon"><i class="fas fa-desktop"></i></div>
            <div class="project-links">
              <a href="https://github.com/Ishrak-1520/Echo" target="_blank" rel="noopener" class="project-link"><i class="fab fa-github"></i></a>
            </div>
          </div>
          <h3>Echo - AI Screen Assistant</h3>
          <p class="project-date">April 2026</p>
          <p class="project-desc">
            A desktop AI that literally watches your screen and helps you out. It can see what you're looking at, talk in English and Bengali, and floats around your screen like a little assistant. One of my favorite builds.
          </p>
          <div class="project-tech-tags">
            <span class="project-tech-tag">TypeScript</span>
            <span class="project-tech-tag">Electron</span>
            <span class="project-tech-tag">Vite</span>
            <span class="project-tech-tag">AI Vision</span>
          </div>
        </div>

      </div>

      <div style="text-align:center;">
        <a href="https://github.com/Ishrak-1520" target="_blank" rel="noopener" class="view-all-btn"><i class="fab fa-github"></i> View All on GitHub ↗</a>
      </div>
    </section>

    <!-- ==================== DESIGN WORK ==================== -->
    <section class="section" id="design">
      <div class="reveal">
        <span class="section-label">Creative Work</span>
        <h2 class="section-title">Design <span class="accent">Portfolio</span></h2>
      </div>

      <p class="design-intro reveal">
        Design has been my thing since before I even started coding. I've made logos, posters,
        social media content, brand kits - you name it. Most of this work came from leading
        the design team at my uni's photography club and running my own brand, Blooming Baby.
      </p>

      <div class="design-grid reveal">
        <div class="design-card design-card-featured">
          <i class="fas fa-palette"></i>
          <h3>Brand Identity</h3>
          <p>Logos, brand guidelines, the whole visual identity package. Done it for clubs and small businesses.</p>
        </div>
        <div class="design-card">
          <i class="fas fa-image"></i>
          <h3>Social Media</h3>
          <p>Posts, stories, campaign visuals - the kind of stuff that actually gets people to stop scrolling.</p>
        </div>
        <div class="design-card">
          <i class="fas fa-calendar-alt"></i>
          <h3>Event Posters</h3>
          <p>Posters and promo materials for uni events. I've designed a ton of these over the years.</p>
        </div>
                <div class="design-card">
          <i class="fas fa-video"></i>
          <h3>Video Editing</h3>
          <p>Promo videos, reels, and some motion graphics. Sony Vegas Pro has been my go-to editor for years.</p>
        </div>
      </div>

      <div class="design-cta reveal">
        <p>View my full design portfolio on Instagram</p>
        <a href="https://www.instagram.com/_ishrak.a_/" target="_blank" rel="noopener" class="view-all-btn">
          <i class="fab fa-instagram"></i> @_ishrak.a_ ↗
        </a>
      </div>
    </section>

    <!-- ==================== EXPERIENCE ==================== -->
    <section class="section" id="experience">
      <div class="reveal">
        <span class="section-label">Career</span>
        <h2 class="section-title">My <span class="accent">Experience</span></h2>
      </div>

      <div class="experience-timeline">
        <div class="exp-item reveal">
          <span class="exp-date">2023 – 2026</span>
          <h3>Head of Design</h3>
          <p class="exp-org">UIU Photography Club - United International University</p>
          <p class="exp-desc">
            Ran the design side of things — posters, social media graphics, all the club's
            branding. Started as an executive before moving up to head the whole design team.
          </p>
        </div>

        <div class="exp-item reveal">
          <span class="exp-date">2025 – 2026</span>
          <h3>Graphics Designing Instructor</h3>
          <p class="exp-org">UIU Photography Club - United International University</p>
          <p class="exp-desc">
            Taught juniors how to use Photoshop and Illustrator through hands-on workshops.
            Pretty cool seeing people go from zero to making their own designs.
          </p>
        </div>

        <div class="exp-item reveal">
          <span class="exp-date">2020 – 2024</span>
          <h3>Founder & Graphics Designer</h3>
          <p class="exp-org">Blooming Baby — Dhaka</p>
          <p class="exp-desc">
            Started this during high school - took on branding, social media, and photo editing
            projects for clients. Was basically a one-man design agency for a few years.
          </p>
        </div>
      </div>
    </section>

    <!-- ==================== CONTACT ==================== -->
    <section class="section" id="contact">
      <div class="reveal">
        <span class="section-label">Get In Touch</span>
        <h2 class="section-title">Let's <span class="accent">Talk</span></h2>
      </div>

      <div class="contact-grid">
        <div class="contact-text reveal">
          <p>
            Got something you want to build? Or need design work done? I'm always down to
            chat about new projects - dev, design, AI stuff, whatever. Hit me up.
          </p>
          <div class="contact-info-list">
            <div class="contact-info-item">
              <i class="fas fa-envelope"></i>
              <a href="mailto:ishrakahmed00@gmail.com">ishrakahmed00@gmail.com</a>
            </div>
            <div class="contact-info-item">
              <i class="fab fa-linkedin-in"></i>
              <a href="https://www.linkedin.com/in/ishrakahmed00/" target="_blank" rel="noopener">linkedin.com/in/ishrakahmed00</a>
            </div>
            <div class="contact-info-item">
              <i class="fab fa-github"></i>
              <a href="https://github.com/Ishrak-1520" target="_blank" rel="noopener">github.com/Ishrak-1520</a>
            </div>
          </div>
        </div>

        <div class="contact-cta-box reveal">
          <div class="contact-cta-icon">
            <i class="fas fa-envelope-open-text"></i>
          </div>
          <h3 class="contact-cta-heading">Prefer email? Let's connect directly.</h3>
          <p class="contact-cta-desc">
            Click below to open your email client with my address pre-filled.
            I typically respond within 24 hours.
          </p>
          <a href="mailto:ishrakahmed00@gmail.com?subject=Hello%20Ishrak%20%E2%80%93%20From%20Your%20Portfolio" class="mailto-btn">
            <i class="fas fa-paper-plane"></i> Send Me an Email
          </a>
        </div>
      </div>
    </section>

    <!-- ==================== FOOTER ==================== -->
    <footer class="footer">
      <div class="footer-grid">
        <div class="footer-brand">
          <h3>Ishrak Ahmed</h3>
          <p>Developer, Designer & AI Enthusiast<br>Dhaka, Bangladesh</p>
          <div class="footer-socials">
            <a href="https://www.linkedin.com/in/ishrakahmed00/" target="_blank" rel="noopener"><i class="fab fa-linkedin-in"></i></a>
            <a href="https://github.com/Ishrak-1520" target="_blank" rel="noopener"><i class="fab fa-github"></i></a>
            <a href="https://www.instagram.com/_ishrak.a_/" target="_blank" rel="noopener"><i class="fab fa-instagram"></i></a>
            <a href="https://www.facebook.com/ishrak.ahmed00" target="_blank" rel="noopener"><i class="fab fa-facebook-f"></i></a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Quick Links</h4>
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#design">Design</a>
          <a href="#contact">Contact</a>
        </div>
        
        <div class="footer-col">
          <h4>Contact</h4>
          <a href="mailto:ishrakahmed00@gmail.com"><i class="fas fa-envelope" style="margin-right:8px"></i>ishrakahmed00@gmail.com</a>
          <a href="https://www.linkedin.com/in/ishrakahmed00/" target="_blank"><i class="fab fa-linkedin-in" style="margin-right:8px"></i>LinkedIn</a>
          <a href="https://github.com/Ishrak-1520" target="_blank"><i class="fab fa-github" style="margin-right:8px"></i>GitHub</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 Ishrak Ahmed. All rights reserved.</span>
      </div>
    </footer>

  </main>

  <!-- Scroll to Top -->
  <button class="scroll-top" id="scroll-top" aria-label="Scroll to top">
    <i class="fas fa-arrow-up"></i>
  </button>

  <!-- AI Chatbot Widget -->
  <div class="chatbot-toggle" id="chatbot-toggle" title="Chat with Ash">
    <i class="fas fa-robot"></i>
  </div>
  <div class="chatbot-window" id="chatbot-window">
    <div class="chatbot-header">
      <div class="chatbot-header-info">
        <div class="chatbot-avatar"><i class="fas fa-robot"></i></div>
        <div>
          <h4>Ash</h4>
          <span class="chatbot-status">Ishrak's virtual stand-in</span>
        </div>
      </div>
      <button class="chatbot-close" id="chatbot-close"><i class="fas fa-times"></i></button>
    </div>
    <div class="chatbot-messages" id="chatbot-messages">
      <div class="chat-msg bot">
        <p>Hey, I'm Ash. Think of me as Ishrak but available 24/7. Ask me anything about his work, skills, projects, whatever you need.</p>
      </div>
    </div>
    <div class="chatbot-input-area">
      <input type="text" id="chatbot-input" placeholder="Ask me anything..." autocomplete="off" />
      <button id="chatbot-send"><i class="fas fa-paper-plane"></i></button>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
