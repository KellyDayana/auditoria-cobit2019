// ============================================
// CONFIGURACIÓN GLOBAL
// ============================================

let currentModule = 1;
const totalModules = 14;
let auditData = {};
let progressChart = null;
let currentLanguage = localStorage.getItem('language') || 'es';
let darkMode = localStorage.getItem('darkMode') === 'true';

// Datos de los módulos
const modules = [
    { id: 1, name: 'Portada', icon: 'fa-file-alt', color: 'blue', sheetName: '1. Portada' },
    { id: 2, name: 'Contexto', icon: 'fa-building', color: 'purple', sheetName: '2. Contexto' },
    { id: 3, name: 'Escalas', icon: 'fa-chart-line', color: 'green', sheetName: '3. Escalas' },
    { id: 4, name: 'Factores de Diseño', icon: 'fa-cogs', color: 'orange', sheetName: '4. Factores' },
    { id: 5, name: 'Alcance', icon: 'fa-target', color: 'red', sheetName: '5. Alcance' },
    { id: 6, name: 'Riesgos', icon: 'fa-exclamation-triangle', color: 'yellow', sheetName: '6. Riesgos' },
    { id: 7, name: 'Evidencias', icon: 'fa-folder-open', color: 'indigo', sheetName: '7. Evidencias' },
    { id: 8, name: 'Programa', icon: 'fa-tasks', color: 'pink', sheetName: '8. Programa' },
    { id: 9, name: 'Muestreo', icon: 'fa-flask', color: 'teal', sheetName: '9. Muestreo' },
    { id: 10, name: 'Capacidad', icon: 'fa-gauge-high', color: 'cyan', sheetName: '10. Capacidad' },
    { id: 11, name: 'Hallazgos', icon: 'fa-search', color: 'amber', sheetName: '11. Hallazgos' },
    { id: 12, name: 'Plan de Acción', icon: 'fa-list-check', color: 'lime', sheetName: '12. Plan' },
    { id: 13, name: 'Resumen', icon: 'fa-chart-pie', color: 'emerald', sheetName: '13. Resumen' },
    { id: 14, name: 'Informe', icon: 'fa-file-contract', color: 'rose', sheetName: '14. Informe' }
];

// ============================================
// INICIALIZACIÓN
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Sistema de Auditoría COBIT 2019 - Iniciando...');
    
    // Aplicar modo oscuro si está guardado
    if (darkMode) {
        applyDarkMode();
    }
    
    // Inicializar AOS (Animaciones)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }
    
    // Inicializar partículas
    initParticles();
    
    // Generar lista de módulos
    generateModulesList();
    
    // Mostrar el primer módulo y ocultar los demás
    document.querySelectorAll('.module-section').forEach((section, index) => {
        if (index === 0) {
            section.classList.remove('hidden');
            section.classList.add('active');
        } else {
            section.classList.add('hidden');
            section.classList.remove('active');
        }
    });
    
    // Inicializar gráfico de progreso
    initProgressChart();
    
    // Cargar datos guardados
    loadSavedData();
    
    // Auto-save cada 30 segundos
    setInterval(autoSave, 30000);
    
    // Listener para el menú de descargas
    const downloadBtn = document.getElementById('downloadBtn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            const menu = document.getElementById('downloadMenu');
            if (menu) {
                menu.classList.toggle('hidden');
            }
        });
    }
    
    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(e) {
        const menu = document.getElementById('downloadMenu');
        const downloadBtn = document.getElementById('downloadBtn');
        if (menu && downloadBtn && !menu.contains(e.target) && !downloadBtn.contains(e.target)) {
            menu.classList.add('hidden');
        }
    });
    
    // Animación de contadores
    animateCounters();
    
    // Actualizar progreso inicial
    updateProgress();
    updateStepper();
    updateModuleView();
    updateLanguageButtons();
    
    console.log('✅ Sistema inicializado correctamente');
    
    // Mostrar toast de bienvenida
    setTimeout(() => {
        showToast('¡Bienvenido! Sistema listo para usar', 'success');
    }, 500);
});

// ============================================
// PARTÍCULAS DE FONDO
// ============================================

function initParticles() {
    const canvas = document.getElementById('particles');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 50;
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 1 - 0.5;
            this.speedY = Math.random() * 1 - 0.5;
            this.opacity = Math.random() * 0.5 + 0.2;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }
        
        draw() {
            ctx.fillStyle = `rgba(30, 64, 175, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        // Conectar partículas cercanas
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    ctx.strokeStyle = `rgba(30, 64, 175, ${0.2 - distance / 500})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ============================================
// GENERACIÓN DE MÓDULOS
// ============================================

function generateModulesList() {
    const container = document.getElementById('modulesList');
    
    modules.forEach(module => {
        const div = document.createElement('div');
        div.className = `module-item p-3 rounded-lg cursor-pointer transition-all hover:shadow-md ${module.id === 1 ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' : 'bg-white hover:bg-gray-50'}`;
        div.setAttribute('data-module', module.id);
        div.onclick = () => goToModule(module.id);
        
        div.innerHTML = `
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-3">
                    <i class="fas ${module.icon} ${module.id === 1 ? 'text-white' : 'text-' + module.color + '-500'}"></i>
                    <span class="text-sm font-medium">${module.name}</span>
                </div>
                <div class="flex items-center space-x-2">
                    <span class="module-status text-xs" id="status-${module.id}">
                        ${module.id === 1 ? '<i class="fas fa-circle-dot"></i>' : '<i class="fas fa-circle text-gray-300"></i>'}
                    </span>
                </div>
            </div>
        `;
        
        container.appendChild(div);
    });
}

// ============================================
// NAVEGACIÓN ENTRE MÓDULOS
// ============================================

function goToModule(moduleId) {
    if (moduleId < 1 || moduleId > totalModules) return;
    
    currentModule = moduleId;
    updateModuleView();
    updateProgress();
    updateStepper();
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Animación con GSAP
    gsap.from('#moduleContent', {
        opacity: 0,
        x: 50,
        duration: 0.5,
        ease: 'power2.out'
    });
}

function nextModule() {
    if (currentModule < totalModules) {
        // Validar módulo actual antes de avanzar
        if (validateCurrentModule()) {
            saveModule();
            goToModule(currentModule + 1);
            showToast('Módulo guardado exitosamente', 'success');
        } else {
            showToast('Complete todos los campos obligatorios', 'warning');
        }
    } else {
        // Último módulo - finalizar
        finishAudit();
    }
}

function previousModule() {
    if (currentModule > 1) {
        goToModule(currentModule - 1);
    }
}

function updateModuleView() {
    // Ocultar todos los módulos
    document.querySelectorAll('.module-section').forEach(section => {
        section.classList.add('hidden');
        section.classList.remove('active');
    });
    
    // Mostrar módulo actual
    const currentSection = document.querySelector(`.module-section[data-module="${currentModule}"]`);
    if (currentSection) {
        currentSection.classList.remove('hidden');
        currentSection.classList.add('active');
    }
    
    // Actualizar botones
    document.getElementById('btnPrevious').disabled = currentModule === 1;
    
    if (currentModule < totalModules) {
        document.getElementById('btnNext').innerHTML = 'Siguiente <i class="fas fa-arrow-right ml-2"></i>';
    } else {
        document.getElementById('btnNext').innerHTML = '<i class="fas fa-check mr-2"></i> Finalizar';
    }
    
    // Actualizar lista de módulos en el sidebar
    document.querySelectorAll('.module-item').forEach(item => {
        const moduleId = parseInt(item.getAttribute('data-module'));
        
        if (moduleId === currentModule) {
            // Módulo actual - resaltado
            item.className = 'module-item p-3 rounded-lg cursor-pointer transition-all hover:shadow-md bg-gradient-to-r from-blue-500 to-purple-500 text-white';
            const icon = item.querySelector('i.fas');
            if (icon) {
                icon.className = icon.className.replace(/text-\w+-\d+/, 'text-white');
            }
            const status = item.querySelector('.module-status');
            if (status) {
                status.innerHTML = '<i class="fas fa-circle-dot text-white"></i>';
            }
        } else if (moduleId < currentModule) {
            // Módulos completados
            item.className = 'module-item p-3 rounded-lg cursor-pointer transition-all hover:shadow-md bg-green-50 hover:bg-green-100';
            const status = item.querySelector('.module-status');
            if (status) {
                status.innerHTML = '<i class="fas fa-check-circle text-green-500"></i>';
            }
        } else {
            // Módulos pendientes
            item.className = 'module-item p-3 rounded-lg cursor-pointer transition-all hover:shadow-md bg-white hover:bg-gray-50';
            const status = item.querySelector('.module-status');
            if (status) {
                status.innerHTML = '<i class="fas fa-circle text-gray-300"></i>';
            }
        }
    });
}

// ============================================
// STEPPER DE PROGRESO
// ============================================

function updateStepper() {
    const progress = ((currentModule - 1) / (totalModules - 1)) * 100;
    document.getElementById('stepperProgress').style.width = progress + '%';
    
    // Actualizar círculos del stepper
    document.querySelectorAll('.step-circle').forEach((circle, index) => {
        const stepNumber = index + 1;
        const stepGroup = Math.ceil(currentModule / 3);
        const circleStepGroup = Math.ceil(stepNumber / 3);
        
        if (circleStepGroup < stepGroup || (circleStepGroup === stepGroup && stepNumber <= currentModule)) {
            circle.className = 'w-12 h-12 mx-auto rounded-full gradient-primary flex items-center justify-center text-white font-bold shadow-lg mb-2 step-circle';
            circle.innerHTML = '<i class="fas fa-check"></i>';
        } else if (circleStepGroup === stepGroup && stepNumber === currentModule) {
            circle.className = 'w-12 h-12 mx-auto rounded-full gradient-primary flex items-center justify-center text-white font-bold shadow-lg mb-2 step-circle pulse-slow';
            circle.textContent = stepNumber;
        } else {
            circle.className = 'w-12 h-12 mx-auto rounded-full bg-gray-300 flex items-center justify-center text-white font-bold mb-2 step-circle';
            circle.textContent = stepNumber;
        }
    });
}

// ============================================
// PROGRESO GENERAL
// ============================================

function updateProgress() {
    const completedModules = currentModule - 1;
    const progress = Math.round((completedModules / totalModules) * 100);
    
    // Actualizar texto
    document.getElementById('progressText').textContent = progress + '%';
    document.getElementById('stat4').textContent = progress;
    
    // Actualizar círculo SVG
    const circle = document.getElementById('progressCircle');
    const circumference = 88; // 2 * PI * 14
    const offset = circumference - (progress / 100) * circumference;
    circle.style.strokeDashoffset = offset;
    
    // Actualizar gráfico
    if (progressChart) {
        progressChart.data.datasets[0].data = [completedModules, totalModules - completedModules];
        progressChart.update();
    }
}

// ============================================
// GRÁFICO DE PROGRESO
// ============================================

function initProgressChart() {
    const ctx = document.getElementById('progressChart').getContext('2d');
    
    progressChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Completado', 'Pendiente'],
            datasets: [{
                data: [0, totalModules],
                backgroundColor: [
                    'rgba(102, 126, 234, 0.8)',
                    'rgba(229, 231, 235, 0.5)'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            cutout: '70%',
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: true
                }
            }
        }
    });
}

// ============================================
// VALIDACIÓN
// ============================================

function validateCurrentModule() {
    const form = document.querySelector('.module-section.active form');
    if (!form) return true;
    
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.classList.add('border-red-500');
            isValid = false;
            
            // Animación de shake
            gsap.to(field, {
                x: [-10, 10, -10, 10, 0],
                duration: 0.4,
                ease: 'power2.inOut'
            });
        } else {
            field.classList.remove('border-red-500');
        }
    });
    
    return isValid;
}

// ============================================
// GUARDADO
// ============================================

function saveModule() {
    const form = document.querySelector('.module-section.active form');
    if (!form) return;
    
    const formData = new FormData(form);
    const moduleData = {};
    
    for (let [key, value] of formData.entries()) {
        moduleData[key] = value;
    }
    
    auditData[`module_${currentModule}`] = moduleData;
    auditData.lastModified = new Date().toISOString();
    
    localStorage.setItem('auditData', JSON.stringify(auditData));
    
    showToast('Datos guardados correctamente', 'success');
}

function autoSave() {
    saveModule();
    console.log('✅ Auto-guardado realizado');
}

function loadSavedData() {
    const saved = localStorage.getItem('auditData');
    if (saved) {
        auditData = JSON.parse(saved);
        console.log('📂 Datos cargados desde localStorage');
        showToast('Datos anteriores recuperados', 'info');
    }
}

// ============================================
// DESCARGAS - Sistema basado en plantillas JavaScript
// ============================================

// Mapeo de módulos a nombres de plantilla
const moduleTemplateMap = {
    1: 'portada',
    2: 'contexto',
    3: 'escalas',
    4: 'factores',
    5: 'alcance',
    6: 'riesgos',
    7: 'evidencias',
    8: 'programa',
    9: 'muestreo',
    10: 'capacidad',
    11: 'hallazgos',
    12: 'plan',
    13: 'resumen',
    14: 'informe'
};

// Descargar hoja vacía del módulo actual
function downloadEmptySheet() {
    try {
        const module = modules[currentModule - 1];
        const templateName = moduleTemplateMap[currentModule];
        const template = getSheetTemplate(templateName);
        
        if (!template) {
            showToast('Plantilla no disponible para este módulo', 'warning');
            return;
        }
        
        // Crear workbook
        const wb = XLSX.utils.book_new();
        
        // Crear hoja desde plantilla
        const sheetData = createEmptySheet(templateName);
        const ws = XLSX.utils.aoa_to_sheet(sheetData);
        
        // Configurar anchos de columna
        ws['!cols'] = [
            { wch: 3 },   // Columna A (vacía)
            { wch: 35 },  // Columna B (Campo)
            { wch: 50 },  // Columna C (Información)
            { wch: 40 }   // Columna D (Ayuda)
        ];
        
        XLSX.utils.book_append_sheet(wb, ws, template.sheetName);
        
        const fecha = new Date().toISOString().split('T')[0];
        XLSX.writeFile(wb, `Modulo_${currentModule}_${module.name}_Vacio_${fecha}.xlsx`);
        
        showToast(`Hoja vacía descargada: ${template.sheetName}`, 'success');
        document.getElementById('downloadMenu').classList.add('hidden');
    } catch (error) {
        console.error('Error al descargar hoja vacía:', error);
        showToast('Error al descargar hoja vacía', 'error');
    }
}

// Descargar hoja llena del módulo actual
function downloadFilledSheet() {
    try {
        const module = modules[currentModule - 1];
        const templateName = moduleTemplateMap[currentModule];
        const moduleData = auditData[`module_${currentModule}`];
        
        if (!moduleData || Object.keys(moduleData).length === 0) {
            showToast('No hay datos en este módulo. Complete el formulario primero.', 'warning');
            return;
        }
        
        const template = getSheetTemplate(templateName);
        if (!template) {
            showToast('Plantilla no disponible para este módulo', 'warning');
            return;
        }
        
        // Crear workbook
        const wb = XLSX.utils.book_new();
        
        // Crear hoja con datos
        const sheetData = createFilledSheet(templateName, moduleData);
        const ws = XLSX.utils.aoa_to_sheet(sheetData);
        
        // Configurar anchos de columna
        ws['!cols'] = [
            { wch: 3 },
            { wch: 35 },
            { wch: 50 },
            { wch: 40 }
        ];
        
        XLSX.utils.book_append_sheet(wb, ws, template.sheetName);
        
        const fecha = new Date().toISOString().split('T')[0];
        XLSX.writeFile(wb, `Modulo_${currentModule}_${module.name}_Lleno_${fecha}.xlsx`);
        
        showToast(`Hoja con datos descargada: ${template.sheetName}`, 'success');
        document.getElementById('downloadMenu').classList.add('hidden');
    } catch (error) {
        console.error('Error al descargar hoja llena:', error);
        showToast('Error al descargar hoja con datos', 'error');
    }
}

// Descargar Excel completo con todas las hojas
function downloadCompleteExcel() {
    try {
        showToast('Generando Excel completo con 14 hojas...', 'info');
        
        const wb = XLSX.utils.book_new();
        
        // Crear cada hoja
        for (let moduleId = 1; moduleId <= totalModules; moduleId++) {
            const templateName = moduleTemplateMap[moduleId];
            const template = getSheetTemplate(templateName);
            
            if (!template) continue;
            
            const moduleData = auditData[`module_${moduleId}`];
            let sheetData;
            
            // Si hay datos, usar hoja llena; si no, hoja vacía
            if (moduleData && Object.keys(moduleData).length > 0) {
                sheetData = createFilledSheet(templateName, moduleData);
            } else {
                sheetData = createEmptySheet(templateName);
            }
            
            const ws = XLSX.utils.aoa_to_sheet(sheetData);
            
            // Configurar anchos de columna
            ws['!cols'] = [
                { wch: 3 },
                { wch: 35 },
                { wch: 50 },
                { wch: 40 }
            ];
            
            XLSX.utils.book_append_sheet(wb, ws, template.sheetName);
        }
        
        const fecha = new Date().toISOString().split('T')[0];
        XLSX.writeFile(wb, `Auditoria_COBIT_2019_Completa_${fecha}.xlsx`);
        
        showToast('Excel completo descargado: 14 hojas', 'success');
        document.getElementById('downloadMenu').classList.add('hidden');
    } catch (error) {
        console.error('Error al descargar Excel completo:', error);
        showToast('Error al generar Excel completo', 'error');
    }
}

// ============================================
// TOUR GUIADO
// ============================================

function startTour() {
    introJs().setOptions({
        nextLabel: 'Siguiente',
        prevLabel: 'Anterior',
        doneLabel: 'Finalizar',
        skipLabel: 'Saltar',
        showProgress: true,
        showBullets: false
    }).start();
}

// ============================================
// TOAST NOTIFICATIONS
// ============================================

function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    
    const colors = {
        success: 'bg-green-500',
        error: 'bg-red-500',
        warning: 'bg-yellow-500',
        info: 'bg-blue-500'
    };
    
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        warning: 'fa-exclamation-triangle',
        info: 'fa-info-circle'
    };
    
    const toast = document.createElement('div');
    toast.className = `toast ${colors[type]} text-white px-6 py-4 rounded-lg shadow-2xl flex items-center space-x-3`;
    toast.innerHTML = `
        <i class="fas ${icons[type]} text-xl"></i>
        <span class="font-medium">${message}</span>
    `;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// ============================================
// ANIMACIÓN DE CONTADORES
// ============================================

function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        let current = 0;
        const increment = target / 50;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// ============================================
// FINALIZACIÓN
// ============================================

function finishAudit() {
    // Guardar todo
    saveModule();
    
    // Descargar automáticamente
    downloadExcel();
    
    // Mostrar modal de confirmación
    const modal = document.getElementById('downloadModal');
    modal.classList.remove('hidden');
    
    // Confetti animation (opcional, requiere librería canvas-confetti)
    showToast('¡Auditoría completada exitosamente!', 'success');
}

function closeModal() {
    document.getElementById('downloadModal').classList.add('hidden');
}

// ============================================
// MODAL DE INTEGRANTES DEL GRUPO
// ============================================

function showTeamModal() {
    document.getElementById('teamModal').classList.remove('hidden');
    // Animar entrada con GSAP
    gsap.from('#teamModal > div', {
        scale: 0.8,
        opacity: 0,
        duration: 0.3,
        ease: 'back.out'
    });
}

function closeTeamModal() {
    const modal = document.getElementById('teamModal');
    gsap.to('#teamModal > div', {
        scale: 0.8,
        opacity: 0,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => {
            modal.classList.add('hidden');
        }
    });
}

// ============================================
// UTILIDADES
// ============================================

// Debounce para optimizar eventos
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Formatear fecha
function formatDate(date) {
    return new Date(date).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// ============================================
// MODO OSCURO
// ============================================

function toggleDarkMode() {
    darkMode = !darkMode;
    localStorage.setItem('darkMode', darkMode);
    applyDarkMode();
    showToast(darkMode ? 'Modo oscuro activado' : 'Modo claro activado', 'success');
}

function applyDarkMode() {
    const body = document.body;
    const toggle = document.getElementById('darkModeToggle');
    
    if (darkMode) {
        body.classList.add('dark-mode');
        if (toggle) toggle.checked = true;
    } else {
        body.classList.remove('dark-mode');
        if (toggle) toggle.checked = false;
    }
}

// ============================================
// CAMBIO DE IDIOMA
// ============================================

const translations = {
    es: {
        nav_title: 'Auditoría COBIT 2019',
        nav_subtitle: 'Sistema Profesional de Gestión',
        btn_tour: 'Tour guiado',
        btn_save: 'Guardar',
        btn_download: 'Descargar',
        modules_title: 'Módulos',
        btn_previous: 'Anterior',
        btn_next: 'Siguiente',
        btn_finish: 'Finalizar',
        msg_saved: 'Datos guardados correctamente',
        msg_welcome: '¡Bienvenido! Sistema listo para usar'
    },
    en: {
        nav_title: 'COBIT 2019 Audit',
        nav_subtitle: 'Professional Management System',
        btn_tour: 'Guided tour',
        btn_save: 'Save',
        btn_download: 'Download',
        modules_title: 'Modules',
        btn_previous: 'Previous',
        btn_next: 'Next',
        btn_finish: 'Finish',
        msg_saved: 'Data saved successfully',
        msg_welcome: 'Welcome! System ready to use'
    }
};

function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updateLanguageButtons();
    applyTranslations();
    showToast(lang === 'es' ? 'Idioma cambiado a Español' : 'Language changed to English', 'success');
}

function applyTranslations() {
    const t = translations[currentLanguage];
    
    // Actualizar título y subtítulo
    const navTitle = document.querySelector('h1.text-xl');
    const navSubtitle = document.querySelector('p.text-xs.text-gray-500');
    if (navTitle) navTitle.textContent = t.nav_title;
    if (navSubtitle) navSubtitle.textContent = t.nav_subtitle;
    
    // Actualizar botón de tour
    const tourBtn = document.querySelector('[onclick="startTour()"]');
    if (tourBtn) tourBtn.setAttribute('data-tooltip', t.btn_tour);
    
    // Actualizar botón de guardar
    const saveBtn = document.querySelector('[onclick="autoSave()"]');
    if (saveBtn) saveBtn.setAttribute('data-tooltip', t.btn_save);
    
    // Actualizar título de módulos
    const modulesTitle = document.querySelector('h3.text-lg');
    if (modulesTitle && modulesTitle.textContent.includes('Módulos')) {
        modulesTitle.innerHTML = `<i class="fas fa-list-ul mr-2 text-primary"></i>${t.modules_title}`;
    }
    
    // Actualizar botones de navegación
    const btnPrevious = document.getElementById('btnPrevious');
    const btnNext = document.getElementById('btnNext');
    if (btnPrevious) {
        btnPrevious.innerHTML = `<i class="fas fa-arrow-left mr-2"></i>${t.btn_previous}`;
    }
    if (btnNext) {
        const isLastModule = currentModule === totalModules;
        btnNext.innerHTML = isLastModule ? 
            `<i class="fas fa-check mr-2"></i>${t.btn_finish}` : 
            `${t.btn_next}<i class="fas fa-arrow-right ml-2"></i>`;
    }
    
    // Actualizar nombres de módulos si es necesario
    if (currentLanguage === 'en') {
        const moduleNames = {
            'Portada': 'Cover',
            'Contexto': 'Context',
            'Escalas': 'Scales',
            'Factores de Diseño': 'Design Factors',
            'Alcance': 'Scope',
            'Riesgos': 'Risks',
            'Evidencias': 'Evidence',
            'Programa': 'Program',
            'Muestreo': 'Sampling',
            'Capacidad': 'Capability',
            'Hallazgos': 'Findings',
            'Plan de Acción': 'Action Plan',
            'Resumen': 'Summary',
            'Informe': 'Report'
        };
        
        // Actualizar en el sidebar
        document.querySelectorAll('.module-item span').forEach((span, index) => {
            if (modules[index]) {
                const spanishName = modules[index].name;
                span.textContent = moduleNames[spanishName] || spanishName;
            }
        });
    } else {
        // Restaurar nombres en español
        document.querySelectorAll('.module-item span').forEach((span, index) => {
            if (modules[index]) {
                span.textContent = modules[index].name;
            }
        });
    }
}

function updateLanguageButtons() {
    const esBtn = document.getElementById('lang-es');
    const enBtn = document.getElementById('lang-en');
    
    if (!esBtn || !enBtn) return;
    
    if (currentLanguage === 'es') {
        esBtn.classList.add('bg-purple-600', 'text-white');
        esBtn.classList.remove('text-gray-600');
        enBtn.classList.remove('bg-purple-600', 'text-white');
        enBtn.classList.add('text-gray-600');
    } else {
        enBtn.classList.add('bg-purple-600', 'text-white');
        enBtn.classList.remove('text-gray-600');
        esBtn.classList.remove('bg-purple-600', 'text-white');
        esBtn.classList.add('text-gray-600');
    }
}

// ============================================
// DESCARGAS MEJORADAS
// ============================================



// Descargar PDF del módulo actual (diseño HTML mejorado)
function downloadModulePDF() {
    try {
        const element = document.querySelector('.module-section.active');
        
        if (!element) {
            showToast('No hay módulo activo', 'error');
            return;
        }
        
        if (typeof html2pdf === 'undefined') {
            showToast('Librería PDF no cargada. Recarga la página.', 'error');
            return;
        }
        
        const module = modules[currentModule - 1];
        
        // Crear contenedor temporal con mejor formato
        const tempDiv = document.createElement('div');
        tempDiv.style.padding = '20px';
        tempDiv.style.fontFamily = 'Arial, sans-serif';
        
        // Agregar encabezado
        const header = document.createElement('div');
        header.innerHTML = `
            <h1 style="color: #667eea; border-bottom: 3px solid #667eea; padding-bottom: 10px; margin-bottom: 20px;">
                Auditoría COBIT 2019 - ${module.name}
            </h1>
            <p style="color: #666; margin-bottom: 30px;">
                Fecha: ${new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
        `;
        tempDiv.appendChild(header);
        
        // Clonar contenido del formulario
        const formClone = element.cloneNode(true);
        formClone.classList.remove('hidden');
        
        // Limpiar clases innecesarias para PDF
        formClone.querySelectorAll('[class*="transition"]').forEach(el => {
            el.style.transition = 'none';
        });
        
        tempDiv.appendChild(formClone);
        
        // Agregar al documento temporalmente (fuera de vista)
        tempDiv.style.position = 'absolute';
        tempDiv.style.left = '-9999px';
        document.body.appendChild(tempDiv);
        
        const opt = {
            margin: [15, 15, 15, 15],
            filename: `Modulo_${currentModule}_${module.name}_${new Date().toISOString().split('T')[0]}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { 
                scale: 2, 
                useCORS: true,
                logging: false,
                letterRendering: true
            },
            jsPDF: { 
                unit: 'mm', 
                format: 'a4', 
                orientation: 'portrait',
                compress: true
            },
            pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
        };
        
        showToast('Generando PDF del módulo...', 'info');
        
        html2pdf().set(opt).from(tempDiv).save().then(() => {
            document.body.removeChild(tempDiv);
            showToast('PDF descargado exitosamente', 'success');
            document.getElementById('downloadMenu').classList.add('hidden');
        }).catch(error => {
            console.error('Error al generar PDF:', error);
            document.body.removeChild(tempDiv);
            showToast('Error al generar PDF', 'error');
        });
    } catch (error) {
        console.error('Error al generar PDF:', error);
        showToast('Error al generar PDF', 'error');
    }
}

// Obtener encabezados según el módulo
function getModuleHeaders(moduleId) {
    const headers = {
        1: ['Campo', 'Valor'],
        2: ['Campo', 'Valor'],
        3: ['Nivel', 'Nombre', 'Descripción'],
        4: ['Factor', 'Selección', 'Observaciones'],
        5: ['Proceso COBIT', 'Incluido', 'Justificación'],
        6: ['Riesgo', 'Probabilidad', 'Impacto', 'Nivel', 'Controles'],
        7: ['Evidencia', 'Tipo', 'Descripción', 'Fecha'],
        8: ['Actividad', 'Procedimiento', 'Responsable', 'Estado'],
        9: ['Población', 'Tamaño', 'Muestra', 'Método'],
        10: ['Proceso', 'Nivel Actual', 'Nivel Objetivo', 'Brecha'],
        11: ['Hallazgo', 'Severidad', 'Condición', 'Recomendación'],
        12: ['Acción', 'Responsable', 'Fecha', 'Estado', 'Progreso'],
        13: ['Aspecto', 'Resumen', 'Conclusión'],
        14: ['Estadística', 'Valor']
    };
    
    return headers[moduleId] || ['Campo', 'Valor'];
}

// Aplicar estilos a la hoja de Excel
function styleWorksheet(ws) {
    const range = XLSX.utils.decode_range(ws['!ref']);
    
    for (let C = range.s.c; C <= range.e.c; ++C) {
        const address = XLSX.utils.encode_col(C) + "1";
        if (!ws[address]) continue;
        
        ws[address].s = {
            font: { bold: true, color: { rgb: "FFFFFF" } },
            fill: { fgColor: { rgb: "667EEA" } },
            alignment: { horizontal: "center", vertical: "center" }
        };
    }
    
    // Ajustar ancho de columnas
    const colWidths = [];
    for (let C = range.s.c; C <= range.e.c; ++C) {
        colWidths.push({ wch: 20 });
    }
    ws['!cols'] = colWidths;
}

// Cargar plantilla al iniciar
console.log('✨ Sistema de Auditoría COBIT 2019 - Listo');
