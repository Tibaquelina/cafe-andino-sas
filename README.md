# Café Andino S.A.S — Landing

Sitio web de Café Andino S.A.S. Café 100% colombiano producido y comercializado
desde Fusagasugá, Cundinamarca, con respaldo del Comité de Cafeteros de Cundinamarca.

Tres presentaciones de 1 kg: **Café Especial**, **Café Tradicional** y **Café Instantáneo**.

## Stack

Sitio estático — sin paso de build:

- HTML + CSS (variables de tema)
- React 18 y Babel cargados por CDN (compila el JSX en el navegador)
- Fuentes Google: DM Serif Display, Cormorant Garamond, Plus Jakarta Sans, Caveat
- Imágenes locales en `img/` + algunas de Unsplash

## Estructura

```
index.html         · Página principal
app.jsx            · Composición de secciones + panel de Tweaks
sections.jsx       · Header, Hero, Nosotros, Valores, Productos, Proceso, Tienda, Contacto, Footer
logo.jsx           · Logo Café Andino (PNG)
tweaks-panel.jsx   · Panel de ajustes (paleta, tipografía, modo oscuro…)
img/               · Logo y fotos de producto
```

## Desarrollo local

```bash
python3 serve.py
# Abre http://127.0.0.1:8080/index.html
```

## Despliegue

Sitio estático, desplegado en [Vercel](https://vercel.com). Cada push a `main`
re-despliega automáticamente.
