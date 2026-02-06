// Tailwind Configuration
tailwind.config = {
  theme: {
    extend: {
      colors: {
        lime: {
          400: '#CEF73B',
          500: '#b8dd33',
        },
        blue: {
          900: '#3108C4',
          800: '#4a1dd6',
        },
        olive: {
          600: '#7C9423',
          700: '#526318',
          800: '#3d4a12',
          950: '#29310C',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    }
  }
}

// Calculator Logic
function calcularParcela() {
  const valorInput = document.getElementById('valor');
  const prazoInput = document.getElementById('prazo');
  const resultadoParcela = document.getElementById('resultado-parcela');
  const resultadoTotal = document.getElementById('resultado-total');

  if (!valorInput || !prazoInput) return;

  const valor = parseFloat(valorInput.value) || 0;
  const prazo = parseInt(prazoInput.value) || 1;
  const taxaJuros = 0.013; // 1.30% ao mês

  // Cálculo de parcela usando sistema Price (Parcelas fixas)
  // Fórmula: P = VP * [(1 + i)^n * i] / [(1 + i)^n - 1]
  const fator = Math.pow(1 + taxaJuros, prazo);
  const parcela = valor * ((fator * taxaJuros) / (fator - 1));
  const total = parcela * prazo;

  // Formatação para Real
  const formatarMoeda = (valor) => {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  if (resultadoParcela) {
    resultadoParcela.textContent = formatarMoeda(parcela);
  }
  
  if (resultadoTotal) {
    resultadoTotal.textContent = formatarMoeda(total);
  }
}

// Smooth Scroll Function
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Intersection Observer for Animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fade-in-up');
      entry.target.style.opacity = '1';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  // Setup Calculator
  const valorInput = document.getElementById('valor');
  const prazoInput = document.getElementById('prazo');

  if (valorInput) {
    valorInput.addEventListener('input', calcularParcela);
    valorInput.addEventListener('change', calcularParcela);
  }

  if (prazoInput) {
    prazoInput.addEventListener('change', calcularParcela);
  }

  // Initial calculation
  calcularParcela();

  // Observe elements for animation
  document.querySelectorAll('.observable').forEach((el) => {
    el.style.opacity = '0';
    observer.observe(el);
  });

  // Navbar scroll effect
  let lastScroll = 0;
  const navbar = document.querySelector('custom-navbar');
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      document.body.classList.add('scrolled');
    } else {
      document.body.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });

  // Add notification animation for recent approvals
  const notifications = [
    { nome: 'Maria S.', valor: 'R$ 15.000', tempo: 'há 2 minutos' },
    { nome: 'João C.', valor: 'R$ 25.000', tempo: 'há 5 minutos' },
    { nome: 'Ana P.', valor: 'R$ 10.000', tempo: 'há 8 minutos' },
    { nome: 'Carlos M.', valor: 'R$ 30.000', tempo: 'há 12 minutos' }
  ];

  let notifIndex = 0;
  const floatingCard = document.querySelector('.absolute.-bottom-6.-left-6');
  
  if (floatingCard) {
    setInterval(() => {
      notifIndex = (notifIndex + 1) % notifications.length;
      const notif = notifications[notifIndex];
      
      // Fade out
      floatingCard.style.opacity = '0';
      floatingCard.style.transform = 'translateY(10px)';
      
      setTimeout(() => {
        // Update content
        const textElements = floatingCard.querySelectorAll('p');
        if (textElements.length >= 2) {
          textElements[0].textContent = notif.nome;
          textElements[1].textContent = notif.tempo;
          textElements[2].textContent = `Acabou de liberar ${notif.valor}`;
        }
        
        // Fade in
        floatingCard.style.opacity = '1';
        floatingCard.style.transform = 'translateY(0)';
      }, 300);
    }, 4000);
  }

  // Input mask for currency
  if (valorInput) {
    valorInput.addEventListener('blur', function(e) {
      let value = e.target.value;
      if (value) {
        value = parseFloat(value).toFixed(2);
        e.target.value = value;
      }
    });
  }
});

// Mobile menu toggle function (called from navbar component)
window.toggleMobileMenu = function() {
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
  }
};

// Close mobile menu when clicking on a link
window.closeMobileMenu = function() {
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('flex');
  }
};
