// Inicialización de AOS con configuración mejorada
        AOS.init({
            duration: 1200,
            once: true,
            offset: 100,
            easing: 'ease-out-cubic'
        });

        // Inicialización de Swiper para Hero con efectos mejorados
        const heroSwiper = new Swiper('.heroSwiper', {
            loop: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            speed: 1000
        });

        // Inicialización de Swiper para Testimonios
        const testimonialsSwiper = new Swiper('.testimonialsSwiper', {
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.testimonialsSwiper .swiper-pagination',
                clickable: true,
            },
            speed: 800
        });

        // GALLERY DATA
        const galleryData = [
            {
                id: 0,
                category: 'Senos',
                title: 'Mamoplastia Aumento',
                description: 'Aumento de senos con implantes de cohesivo alto. Resultados naturales y proporcionales.',
                image: 'https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg'
            },
            {
                id: 1,
                category: 'Nariz',
                title: 'Rinoplastia Refinamiento',
                description: 'Refinamiento de nariz con resultados armónicos con el rostro. Técnica cerrada.',
                image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg'
            },
            {
                id: 2,
                category: 'Cuerpo',
                title: 'Liposucción Abdominal',
                description: 'Liposucción de alta definición con esculpido abdominal. Técnica de mínima invasión.',
                image: 'https://images.pexels.com/photos/4162338/pexels-photo-4162338.jpeg'
            },
            {
                id: 3,
                category: 'Facial',
                title: 'Facelift Completo',
                description: 'Levantamiento facial completo con técnica SMAS. Rejuvenecimiento integral.',
                image: 'https://images.pexels.com/photos/3768127/pexels-photo-3768127.jpeg'
            },
            {
                id: 4,
                category: 'Facial',
                title: 'Blefaroplastia',
                description: 'Corrección de párpados para apariencia más juvenil. Eliminación de bolsas.',
                image: 'https://images.pexels.com/photos/3807516/pexels-photo-3807516.jpeg'
            },
            {
                id: 5,
                category: 'Cuerpo',
                title: 'Gluteoplastia',
                description: 'Aumento de glúteos con implantes. Resultados armónicos y naturales.',
                image: 'https://images.pexels.com/photos/3768215/pexels-photo-3768215.jpeg'
            },
            {
                id: 6,
                category: 'Cuerpo',
                title: 'Abdominoplastia',
                description: 'Reafirmación abdominal post-gestación. Abdomen plano y tonificado.',
                image: 'https://images.pexels.com/photos/4162339/pexels-photo-4162339.jpeg'
            },
            {
                id: 7,
                category: 'Nariz',
                title: 'Rinoplastia Secundaria',
                description: 'Corrección de rinoplastia previa. Resultados perfeccionados.',
                image: 'https://images.pexels.com/photos/3807518/pexels-photo-3807518.jpeg'
            },
            {
                id: 8,
                category: 'Senos',
                title: 'Levantamiento de Senos',
                description: 'Levantamiento sin implantes. Indicado en ptosis mamaria.',
                image: 'https://images.pexels.com/photos/3867407/pexels-photo-3867407.jpeg'
            },
            {
                id: 9,
                category: 'Cuerpo',
                title: 'Liposucción Brazos',
                description: 'Eliminación de grasa en brazos con esculpido. Brazos tonificados.',
                image: 'https://images.pexels.com/photos/4162340/pexels-photo-4162340.jpeg'
            },
            {
                id: 10,
                category: 'Facial',
                title: 'Rejuvenecimiento Integral',
                description: 'Combinación de facelift, blefaroplastia y peeling. Rejuvenecimiento completo.',
                image: 'https://images.pexels.com/photos/3768128/pexels-photo-3768128.jpeg'
            },
            {
                id: 11,
                category: 'Cuerpo',
                title: 'Combo Procedures',
                description: 'Múltiples procedimientos combinados. Transformación corporal completa.',
                image: 'https://images.pexels.com/photos/4162341/pexels-photo-4162341.jpeg'
            }
        ];

        // Current lightbox state
        let currentImageIndex = 0;
        let currentFilter = 'all';

        // Get filtered gallery items
        function getFilteredItems() {
            if (currentFilter === 'all') {
                return galleryData;
            }
            return galleryData.filter(item => item.category === currentFilter);
        }

        // Open Lightbox
        function openLightbox(index) {
            const filteredItems = getFilteredItems();
            currentImageIndex = index;
            const item = filteredItems[currentImageIndex];
            
            const modal = document.getElementById('lightbox-modal');
            const image = document.getElementById('lightbox-image');
            const category = document.querySelector('.lightbox-category');
            const title = document.querySelector('.lightbox-title');
            const description = document.querySelector('.lightbox-description');
            const counter = document.querySelector('.lightbox-counter');
            
            image.src = item.image;
            image.alt = item.title;
            category.textContent = item.category.toUpperCase();
            title.textContent = item.title;
            description.textContent = item.description;
            counter.textContent = `${currentImageIndex + 1} / ${filteredItems.length}`;
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        // Close Lightbox
        function closeLightbox() {
            const modal = document.getElementById('lightbox-modal');
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // Next Image
        function nextImage() {
            const filteredItems = getFilteredItems();
            currentImageIndex = (currentImageIndex + 1) % filteredItems.length;
            updateLightboxImage();
        }

        // Previous Image
        function previousImage() {
            const filteredItems = getFilteredItems();
            currentImageIndex = (currentImageIndex - 1 + filteredItems.length) % filteredItems.length;
            updateLightboxImage();
        }

        // Update Lightbox Image
        function updateLightboxImage() {
            const filteredItems = getFilteredItems();
            const item = filteredItems[currentImageIndex];
            
            const image = document.getElementById('lightbox-image');
            const category = document.querySelector('.lightbox-category');
            const title = document.querySelector('.lightbox-title');
            const description = document.querySelector('.lightbox-description');
            const counter = document.querySelector('.lightbox-counter');
            
            // Fade out
            image.style.opacity = '0';
            
            setTimeout(() => {
                image.src = item.image;
                image.alt = item.title;
                category.textContent = item.category.toUpperCase();
                title.textContent = item.title;
                description.textContent = item.description;
                counter.textContent = `${currentImageIndex + 1} / ${filteredItems.length}`;
                
                // Fade in
                image.style.opacity = '1';
            }, 200);
        }

        // Filter Gallery
        function filterGallery(filter) {
            currentFilter = filter;
            const galleryItems = document.querySelectorAll('.gallery-item');
            
            galleryItems.forEach((item, index) => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.9)';
                    item.classList.remove('hidden');
                    
                    setTimeout(() => {
                        item.style.transition = 'all 0.4s ease';
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, index * 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.9)';
                    setTimeout(() => {
                        item.classList.add('hidden');
                    }, 300);
                }
            });
        }

        // Gallery item click handlers
        document.addEventListener('DOMContentLoaded', () => {
            const galleryItems = document.querySelectorAll('.gallery-item');
            
            galleryItems.forEach((item, index) => {
                item.addEventListener('click', () => {
                    const itemId = parseInt(item.getAttribute('data-id'));
                    const filteredItems = getFilteredItems();
                    const clickedIndex = filteredItems.findIndex(i => i.id === itemId);
                    openLightbox(clickedIndex);
                });
            });

            // Lightbox controls
            document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
            document.querySelector('.lightbox-overlay').addEventListener('click', closeLightbox);
            document.querySelector('.lightbox-prev').addEventListener('click', previousImage);
            document.querySelector('.lightbox-next').addEventListener('click', nextImage);

            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                const modal = document.getElementById('lightbox-modal');
                if (modal.classList.contains('active')) {
                    if (e.key === 'Escape') {
                        closeLightbox();
                    } else if (e.key === 'ArrowLeft') {
                        previousImage();
                    } else if (e.key === 'ArrowRight') {
                        nextImage();
                    }
                }
            });
        });

        // Menú móvil toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (mobileMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Cerrar menú móvil al hacer clic en un enlace
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });

        // Header background al hacer scroll
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Filtros de galería mejorados
        const filterButtons = document.querySelectorAll('.filter-btn');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');

                // Actualizar botones activos
                filterButtons.forEach(btn => {
                    btn.classList.remove('active');
                });
                button.classList.add('active');

                // Filtrar items con animación
                filterGallery(filter);
            });
        });

        // Validación de formulario de contacto
        const contactForm = document.getElementById('contact-form');
        const formMessage = document.getElementById('form-message');

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const message = document.getElementById('message').value.trim();

            // Validación simple
            if (name === '' || email === '' || message === '') {
                formMessage.textContent = 'Por favor, completa todos los campos requeridos.';
                formMessage.className = 'mt-4 p-4 rounded-lg';
                formMessage.style.background = 'rgba(255, 0, 110, 0.2)';
                formMessage.style.color = 'var(--neon-pink)';
                formMessage.style.border = '2px solid var(--neon-pink)';
                formMessage.classList.remove('hidden');
                return;
            }

            // Validar email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                formMessage.textContent = 'Por favor, ingresa un correo electrónico válido.';
                formMessage.className = 'mt-4 p-4 rounded-lg';
                formMessage.style.background = 'rgba(255, 0, 110, 0.2)';
                formMessage.style.color = 'var(--neon-pink)';
                formMessage.style.border = '2px solid var(--neon-pink)';
                formMessage.classList.remove('hidden');
                return;
            }

            // Simulación de envío exitoso
            formMessage.textContent = '¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.';
            formMessage.className = 'mt-4 p-4 rounded-lg';
            formMessage.style.background = 'rgba(0, 255, 136, 0.2)';
            formMessage.style.color = 'var(--neon-lime)';
            formMessage.style.border = '2px solid var(--neon-lime)';
            formMessage.classList.remove('hidden');
            contactForm.reset();

            // Ocultar mensaje después de 5 segundos
            setTimeout(() => {
                formMessage.classList.add('hidden');
            }, 5000);
        });

        // Desplazamiento suave para anclas
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });