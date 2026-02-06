class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background: #29310C;
          border-top: 1px solid rgba(206, 247, 59, 0.2);
        }
        
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem 1.5rem;
        }
        
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
          margin-bottom: 3rem;
        }
        
        .footer-section h4 {
          color: #CEF73B;
          font-size: 1.125rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }
        
        .footer-section p, .footer-section a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          line-height: 1.75;
          transition: color 0.3s ease;
        }
        
        .footer-section a:hover {
          color: #CEF73B;
        }
        
        .footer-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .footer-section ul li {
          margin-bottom: 0.75rem;
        }
        
        .footer-section ul li a {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
        }
        
        .social-icon {
          width: 40px;
          height: 40px;
          background: rgba(206, 247, 59, 0.1);
          border: 1px solid rgba(206, 247, 59, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #CEF73B;
          transition: all 0.3s ease;
        }
        
        .social-icon:hover {
          background: #CEF73B;
          color: #29310C;
          transform: translateY(-3px);
        }
        
        .whatsapp-float {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          background: #25D366;
          color: white;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
          transition: all 0.3s ease;
          z-index: 40;
          text-decoration: none;
        }
        
        .whatsapp-float:hover {
          transform: scale(1.1) rotate(10deg);
          box-shadow: 0 6px 30px rgba(37, 211, 102, 0.6);
        }
        
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 2rem;
          text-align: center;
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.875rem;
        }
        
        .highlight {
          color: #CEF73B;
          font-weight: 600;
        }
        
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .whatsapp-float {
            width: 50px;
            height: 50px;
            bottom: 1rem;
            right: 1rem;
          }
        }
      </style>
      
      <div class="footer-container">
        <div class="footer-grid">
          <div class="footer-section">
            <h4>Alex Consignado</h4>
            <p>Especialista em crédito consignado com as melhores taxas do mercado. Atendimento personalizado e humanizado para realizar seus sonhos.</p>
            <div class="social-links">
              <a href="https://api.whatsapp.com/send?phone=5588996617322" target="_blank" class="social-icon" title="WhatsApp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </a>
              <a href="#" class="social-icon" title="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" class="social-icon" title="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div class="footer-section">
            <h4>Links Rápidos</h4>
            <ul>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#calculadora">Simulador</a></li>
              <li><a href="#beneficios">Benefícios</a></li>
              <li><a href="https://api.whatsapp.com/send?phone=5588996617322" target="_blank">Contato</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4>Contato</h4>
            <ul>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline; vertical-align: middle; margin-right: 0.5rem;">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                (88) 99661-7322
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline; vertical-align: middle; margin-right: 0.5rem;">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                alex@consignado.pro
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline; vertical-align: middle; margin-right: 0.5rem;">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Ceará, Brasil
              </li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4>Horário de Atendimento</h4>
            <p>Segunda a Sexta: <span class="highlight">08h às 18h</span></p>
            <p>Sábado: <span class="highlight">09h às 13h</span></p>
            <p style="margin-top: 1rem; font-size: 0.875rem; color: rgba(255,255,255,0.5);">
              Atendimento emergencial via WhatsApp 24h para clientes.
            </p>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2024 Alex Consignado. Todos os direitos reservados.</p>
          <p style="margin-top: 0.5rem; font-size: 0.75rem;">
            CNPJ: 00.000.000/0000-00 | CRECI: 00000-J | Sujeito à análise de crédito.
          </p>
        </div>
      </div>
      
      <a href="https://api.whatsapp.com/send?phone=5588996617322&text=Olá%20Alex!%20Gostaria%20de%20mais%20informações%20sobre%20crédito%20consignado." 
         target="_blank" 
         class="whatsapp-float"
         title="Fale com Alex no WhatsApp">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      </a>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);
