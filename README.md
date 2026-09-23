# Licos Autopartes

Sitio web oficial de **Licos Autopartes**.

## Dirección

Avenida Poniente #93  
Presa del Gallinero  
C.P. 37800

## Horarios

- Lunes a Viernes: 8:00 am a 6:00 pm
- Sábado: 8:00 am a 3:00 pm
- Domingo: cerrado

## Publicación

El sitio se publica automáticamente con **GitHub Actions + GitHub Pages** desde la rama `main`.

El workflow está en:

```
.github/workflows/deploy-pages.yml
```

### Activación inicial de GitHub Pages

Una sola vez en GitHub:

1. Settings
2. Pages
3. Build and deployment
4. Source: **GitHub Actions**

Después puedes ejecutar el workflow manualmente desde **Actions** o hacer un push a `main`.

## Desarrollo local

No requiere build ni dependencias:

```bash
python -m http.server 8080
```

Abrir: http://localhost:8080
