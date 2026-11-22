# 🛡️ Sistema de Auditoría COBIT 2019

## Sistema Profesional de Gestión de Auditorías

### 📋 Descripción

Aplicación web profesional para realizar auditorías de gobierno y gestión de TI basadas en el marco COBIT 2019. Sistema completo con 14 módulos integrados, validación automática y generación de reportes en Excel y PDF.

---

## ✨ Características Principales

### 🎯 **14 Módulos Completos**
1. **Portada** - Datos generales de la auditoría
2. **Contexto** - Entendimiento del negocio y TI
3. **Escalas** - Referencias de capacidad y evaluación
4. **Factores de Diseño** - 11 factores COBIT 2019
5. **Alcance** - 40 objetivos de gobierno de TI
6. **Riesgos** - Evaluación de riesgos de auditoría
7. **Evidencias** - Solicitud y control de documentos
8. **Programa** - Procedimientos por objetivo
9. **Muestreo** - Pruebas y poblaciones
10. **Capacidad** - Niveles actuales vs. objetivos
11. **Hallazgos** - Matriz de observaciones
12. **Plan de Acción** - Acciones correctivas
13. **Resumen** - Panel ejecutivo automático
14. **Informe** - Dictamen y conclusiones

### 📊 **Sistema de Descargas**
- ✅ **Excel Individual Vacío** - Plantilla limpia por módulo
- ✅ **Excel Individual Lleno** - Con datos ingresados
- ✅ **Excel Completo** - Todas las 14 hojas (vacías o llenas)
- ✅ **PDF por Módulo** - Exportación con formato profesional

### 🎨 **Interfaz Moderna**
- ✅ Diseño responsive (mobile, tablet, desktop)
- ✅ Modo oscuro / claro
- ✅ Animaciones fluidas con GSAP y AOS
- ✅ Paleta de colores profesional para auditoría
- ✅ Partículas animadas en el fondo

### 🔧 **Funcionalidades**
- ✅ Auto-guardado cada 30 segundos
- ✅ Navegación por módulos con progreso visual
- ✅ Validación de campos obligatorios
- ✅ Tour guiado interactivo (Intro.js)
- ✅ Gráficos de progreso (Chart.js)
- ✅ Notificaciones toast
- ✅ Persistencia en LocalStorage

### 🌐 **Multi-idioma**
- 🇪🇸 Español (por defecto)
- 🇬🇧 Inglés

---

## 🚀 Tecnologías Utilizadas

### Frontend
- **Tailwind CSS** - Framework CSS utility-first
- **Font Awesome 6** - Iconografía profesional
- **Google Fonts (Inter)** - Tipografía moderna

### Animaciones
- **GSAP 3** - Animaciones avanzadas
- **AOS (Animate On Scroll)** - Animaciones al scroll
- **Intro.js** - Tour guiado interactivo

### Visualización
- **Chart.js** - Gráficos estadísticos

### Exportación
- **SheetJS (xlsx)** - Generación de archivos Excel
- **html2pdf.js** - Exportación a PDF

---

## 📦 Estructura del Proyecto

```
auditoria-cobit2019/
├── index.html              # Página principal
├── app.js                  # Lógica de la aplicación
├── excel-templates.js      # Plantillas Excel (14 módulos)
├── dark-mode.css          # Estilos del modo oscuro
├── README.md              # Documentación
└── Formularios_COBIT_2019_Vacios.xlsx  # Plantilla de referencia
```

---

## 🎨 Paleta de Colores

### Colores Principales (Tema Profesional de Auditoría)
```css
--primary: #1e40af      /* Azul confiable */
--secondary: #3b82f6    /* Azul brillante */
--accent: #0ea5e9       /* Azul cielo */
--dark: #1e3a8a         /* Azul oscuro profesional */
--success: #10b981      /* Verde aprobado */
--warning: #f59e0b      /* Ámbar alerta */
--danger: #ef4444       /* Rojo crítico */
--info: #06b6d4         /* Cyan informativo */
```

---

## 🛠️ Instalación y Uso

### Opción 1: Uso Directo
1. Descarga todos los archivos del proyecto
2. Abre `index.html` en cualquier navegador moderno
3. ¡Listo! No requiere instalación ni servidor

### Opción 2: Servidor Local (Recomendado)
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (http-server)
npx http-server

# Con PHP
php -S localhost:8000
```

Luego abre: `http://localhost:8000`

---

## 📖 Guía de Uso

### 1️⃣ **Iniciar Auditoría**
- Completa el módulo 1 (Portada) con los datos básicos
- Los campos marcados con * son obligatorios

### 2️⃣ **Navegación**
- Usa el **sidebar izquierdo** para navegar entre módulos
- O usa los botones **Anterior / Siguiente** al final de cada formulario
- El progreso se guarda automáticamente

### 3️⃣ **Descargar Resultados**
- Haz clic en el botón **"Descargar"** (esquina superior derecha)
- Elige entre:
  - **Hoja Vacía**: Plantilla sin datos
  - **Hoja Llena**: Con tus datos ingresados
  - **Excel Completo**: Todas las 14 hojas
  - **PDF del Módulo**: Exportación visual

### 4️⃣ **Ver Integrantes**
- Haz clic en el botón **"Integrantes"** (junto al logo)
- Verás la lista completa del equipo de auditoría

### 5️⃣ **Cambiar Tema**
- Usa el **toggle** ☀️/🌙 en la parte superior derecha
- Cambia entre modo claro y oscuro

---

## 👥 Equipo de Desarrollo

- Amoloto Diego
- Ayavaca Gustavo
- Chicaiza Jeniffer
- Chicaiza Kelly
- Guanoliquin Carlos
- Loachamin Gabriela
- Quispe Neiser
- Sangucho Jeniffer
- Tituaña Patricio
- Toaquiza William
- Yanguicela Diego

---

## 📝 Notas Técnicas

### Almacenamiento
- Los datos se guardan en **LocalStorage**
- Persistencia automática cada 30 segundos
- No se requiere base de datos

### Compatibilidad
- ✅ Chrome / Edge (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Opera
- ⚠️ Internet Explorer no soportado

### Seguridad
- Los datos se almacenan localmente en el navegador
- No se envía información a servidores externos
- Exportaciones se generan en el cliente

---

## 🔄 Próximas Mejoras

- [ ] Importar datos desde Excel existente
- [ ] Exportación con estilos y colores en Excel
- [ ] Gráficos en el resumen ejecutivo
- [ ] Firma digital en el informe
- [ ] Modo de impresión optimizado
- [ ] Sincronización en la nube (opcional)

---

## 📄 Licencia

Este proyecto fue desarrollado con fines educativos como parte del curso de Auditoría de Sistemas.

---

## 📞 Soporte

Para reportar problemas o sugerencias, contacta al equipo de desarrollo.

---

**Versión:** 2.0  
**Última actualización:** Diciembre 2024  
**Marco de referencia:** COBIT 2019 (ISACA)

---

<p align="center">
  <strong>Hecho con ❤️ por el equipo de Auditoría COBIT 2019</strong>
</p>
