// Logo oficial de Café Andino S.A.S
// Reemplaza el placeholder SVG por el archivo de marca real (img/logo_andino.png).
//
// El PNG ya incluye monograma + wordmark + tagline en su propio fondo oscuro;
// por eso ignoramos `color`, `mark` y `wordmark`: el logo se renderiza siempre
// completo. `size` controla la ALTURA del logo en px (el ancho escala libre,
// preservando el aspect ratio original ~1.83:1).

function Logo({ size = 44 }) {
  return (
    <img
      src="img/logo_andino.png"
      alt="Café Andino S.A.S"
      style={{
        height: size,
        width: 'auto',
        display: 'block',
        // El PNG trae fondo oscuro propio; en el header (papel cálido) queda
        // como una plaqueta oscura, parte de la identidad de marca.
      }}
    />
  );
}

window.Logo = Logo;
