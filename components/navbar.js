class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          transition: all 0.3s ease;
        }
        
        .navbar {
          background: transparent;
          transition: all 0.3s ease;
          padding: 1.5rem 0;
        }
        
        .navbar.scrolled {
          background: rgba(41, 49, 12, 0.95);
          backdrop-filter: blur(10px);
          padding: 1rem 0;
          border-bottom: 1px solid rgba(206, 247, 59, 0.2);
        }
        
        .logo {
          font-size: 1.5rem;
          font-weight: 800;
          color: #CEF73B;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .logo span {
          color: white;
        }
        
        .nav-link {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .nav-link:hover {
          color: #CEF73B;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: #CEF73B;
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .cta-button {
          background: #CEF73B;
          color: #29310C;
          padding: 0.75rem 1.5rem;
          border-radius: 9999px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .cta-button:hover {
          background: #b8dd33;
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(206, 247, 59, 0.4);
        }
        
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          padding: 0.5rem;
        }
        
        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }
          
          .mobile-menu-btn {
            display: block;
          }
          
          .cta-button {
            display: none;
          }
        }
        
        .mobile-menu {
          display: none;
          flex-direction: column;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: rgba(41, 49, 12, 0.98);
          backdrop-filter: blur(10px);
          padding: 1.5rem;
          gap: 1rem;
          border-top: 1px solid rgba(206, 247, 59, 0.2);
        }
        
        .mobile-menu.active {
          display: flex;
        }
        
        .mobile-link {
          color: white;
          text-decoration: none;
          font-size: 1.125rem;
          font-weight: 500;
          padding: 0.75rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: color 0.3s ease;
        }
        
        .mobile-link:hover {
          color: #CEF73B;
        }
        
        .mobile-cta {
          background: #CEF73B;
          color: #29310C;
          padding: 1rem;
          border-radius: 9999px;
          font-weight: 700;
          text-decoration: none;
          text-align: center;
          margin-top: 1rem;
        }
      </style>
      
      <nav class="navbar" id="main-nav">
        <div class="container mx-auto px-6 flex items-center justify-between">
          <a href="#" class="logo">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="8" fill="#CEF73B"/>
              <path d="M8 16L14 22L24 10" stroke="#29310C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Alex<span>Consignado</span>
          </a>
          
          <div class="desktop-nav hidden md:flex items-center gap-8">
            <a href="#servicos" class="nav-link">Serviços</a>
            <a href="#calculadora" class="nav-link">Simulador</a>
            <a href="#beneficios" class="nav-link">Benefícios</a>
            <a href="https://api.whatsapp.com/send?phone=5588996617322&text=Olá%20Alex!" target="_blank" class="cta-button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              Fale Comigo
            </a>
          </div>
          
          <button class="mobile-menu-btn" onclick="toggleMobileMenu()">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <div class="mobile-menu" id="mobile-menu">
          <a href="#servicos" class="mobile-link" onclick="closeMobileMenu()">Serviços</a>
          <a href="#calculadora" class="mobile-link" onclick="closeMobileMenu()">Simulador</a>
          <a href="#beneficios" class="mobile-link" onclick="closeMobileMenu()">Benefícios</a>
          <a href="https://api.whatsapp.com/send?phone=5588996617322&text=Olá%20Alex!" target="_blank" class="mobile-cta" onclick="closeMobileMenu()">
            Falar no WhatsApp
          </a>
        </div>
      </nav>
    `;
    
    // Handle scroll effect
    const handleScroll = () => {
      const navbar = this.shadowRoot.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
  }
}

customElements.define('custom-navbar', CustomNavbar);
