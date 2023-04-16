import { memo } from "react";

const Imagen = ({ src, alt, width }) => {
  return <img src={src} alt={alt} width={width} />;
};

export default memo(Imagen);