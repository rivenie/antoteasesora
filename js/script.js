// javascript/script.js

document.addEventListener('DOMContentLoaded', function() {
    console.log('Página cargada - Antonella Cook');

    function isMobile() {
        return window.innerWidth <= 768;
    }

    // Botón 1: Quiero proteger a mi familia
    const btnProteger = document.getElementById('btnProteger');
    if (btnProteger) {
        btnProteger.addEventListener('click', function() {
            if (!isMobile()) return;
            
            this.style.transform = 'scale(0.97)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            mostrarNotificacion('¡Gracias por querer proteger a tu familia! Te contactaré pronto.');
        });
    }

    // Botón 2: Quiero hablar con Antonella
    const btnHablar = document.getElementById('btnHablar');
    if (btnHablar) {
        btnHablar.addEventListener('click', function() {
            if (!isMobile()) return;
            
            mostrarNotificacion('Conectando con Antonella...');
        });
    }

    // Botón 3: Quiero asegurar mi futuro hoy
    const btnFuturo = document.getElementById('btnFuturo');
    if (btnFuturo) {
        btnFuturo.addEventListener('click', function() {
            if (!isMobile()) return;
            
            this.style.transform = 'scale(0.97)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            mostrarNotificacion('¡Excelente decisión! En breve te escribiré para comenzar.');
        });
    }

    // Función de notificación
    function mostrarNotificacion(mensaje) {
        const notificacion = document.createElement('div');
        notificacion.style.cssText = `
            position: fixed;
            bottom: 30px;
            left: 20px;
            right: 20px;
            background: #1f2937;
            color: white;
            padding: 16px 20px;
            border-radius: 30px;
            text-align: center;
            font-size: 15px;
            z-index: 9999;
            animation: slideUpFade 0.3s ease;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
            border: 1px solid rgba(255,255,255,0.1);
        `;
        notificacion.textContent = mensaje;

        document.body.appendChild(notificacion);

        setTimeout(() => {
            notificacion.style.animation = 'slideDownFade 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(notificacion);
            }, 300);
        }, 2800);
    }

    // Estilos para animaciones
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideUpFade {
            from {
                transform: translateY(100%);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
        
        @keyframes slideDownFade {
            from {
                transform: translateY(0);
                opacity: 1;
            }
            to {
                transform: translateY(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Observador de animación para pasos
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.step-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
});