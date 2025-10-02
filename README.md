# SmartPark - Landing Page

Landing page para el sistema inteligente de estacionamiento SmartPark.

## Características

- **Diseño Responsivo**: Optimizado para dispositivos móviles, tablets y desktop
- **Navegación Suave**: Scroll suave entre secciones
- **Animaciones**: Efectos de fade-in al hacer scroll
- **SEO Optimizado**: Meta tags y estructura semántica
- **Accesibilidad**: Navegación por teclado y contraste adecuado
- **Arquitectura Modular**: HTML y CSS separados por secciones

## Estructura del Proyecto

```
landing-page/
├── index.html              # Página principal con todas las secciones
├── css/
│   ├── main.css           # Estilos base y comunes
│   ├── header.css         # Estilos del header
│   ├── hero.css           # Estilos de la sección hero
│   ├── features.css       # Estilos de características
│   ├── demo.css           # Estilos del demo
│   ├── apps.css           # Estilos de aplicaciones
│   ├── technology.css     # Estilos de tecnología
│   ├── testimonials.css   # Estilos de testimonios
│   ├── about.css          # Estilos de nosotros
│   └── footer.css         # Estilos del footer
├── js/
│   └── main.js            # JavaScript principal
├── package.json           # Configuración del proyecto
└── README.md              # Este archivo
```

## Secciones

1. **Inicio**: Presentación principal del sistema con preview de todas las secciones
2. **Características**: Automatización, tiempo ilimitado, facilidad de uso y más
3. **Aplicaciones**: Enlaces para descargar Web App y App Móvil
4. **Tecnología**: Detalles técnicos (ESP32, sensores, stack tecnológico)
5. **Nosotros**: Información del equipo de desarrollo

## Despliegue

Esta landing page puede ser desplegada en cualquier servidor web estático o plataforma de hosting como GitHub Pages, Netlify, Vercel, etc.

### Estructura de Archivos

Simplemente sube todos los archivos de la carpeta `landing-page/` a tu servidor web o plataforma de hosting.

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Flexbox, Grid, Animations, Variables CSS
- **JavaScript**: Vanilla JS para interactividad
- **Font Awesome**: Iconos
- **Google Fonts**: Tipografía Inter

## User Stories Implementadas

- **US26**: Página Principal Informativa - Información sobre automatización, tiempo ilimitado y facilidad de uso
- **US27**: Descarga de Aplicaciones - Botones claros para App Web y App Móvil
- **US28**: Información Técnica - Detalles de IoT (ESP32, sensores, LEDs) y stack tecnológico

## Equipo de Desarrollo

- **Fernando Salgado**: Desarrollador Full Stack
- **Luciano Ruiz**: Arquitecto de Software
- **Leonardo Linares**: Desarrollador Backend
- **Carlos Chávez**: Desarrollador Frontend
- **Luis Aquije**: Especialista IoT

## Desarrollo Local

Para ejecutar el proyecto localmente:

```bash
# Opción 1: Usar npm (recomendado)
npm install
npm start

# Opción 2: Usar Python
python -m http.server 8000

# Opción 3: Usar Node.js
npx http-server . -p 3000

# Opción 4: Abrir directamente en el navegador
# Simplemente abre index.html en tu navegador
```

## Licencia

MIT License - Ver archivo LICENSE para más detalles.
