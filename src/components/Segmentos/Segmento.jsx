import { memo, useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { Slider, Header, Producto } from "../index";
import { WrapperGrid } from "./components";
//import construccion001 from "../../assets/img/imagenes-mastin/construccion-slider.png";
import construccion003 from "../../assets/img/imagenes-mastin/Construccion003.jpg";
import construccion002 from "../../assets/img/imagenes-mastin/Construccion002.jpg";
import construccion004 from "../../assets/img/imagenes-mastin/Construccion004.jpg";

//import industriaSlider from "../../assets/img/imagenes-mastin/industria-slider.png";
import industria001 from "../../assets/img/imagenes-mastin/Industria001.jpg";
import industria002 from "../../assets/img/imagenes-mastin/Industria002.jpg";
import industria003 from "../../assets/img/imagenes-mastin/Industria003.jpg";
import industria004 from "../../assets/img/imagenes-mastin/Industria004.jpg";

//import filtroSlider from "../../assets/img/imagenes-mastin/filtros-slider.png";
import filtros005 from "../../assets/img/imagenes-mastin/Filtros005.jpg";
import filtros001 from "../../assets/img/imagenes-mastin/Filtros001.jpg";
import filtros003 from "../../assets/img/imagenes-mastin/Filtros003.jpg";

const construccionImg = [
  //construccion001,
  construccion003,
  construccion002,
  construccion004,
];

const filtrosImg = [/* filtroSlider */ filtros005, filtros001, filtros003];

const industriaImg = [
  //industriaSlider,
  industria001,
  industria002,
  industria003,
  industria004,
];

const Segmento = () => {
  const { itemsFiltros, itemsIndustria, itemsConstruccion } =
    useContext(AppContext);
  const [products, setProducts] = useState([]);
  const [segmentImgs, setSegmentImgs] = useState([]);
  const [segmentTitle, setSegmentTitle] = useState("");

  const { categoria } = useParams();

  useEffect(() => {
    if (categoria === "filtros") {
      setProducts(itemsFiltros);
      setSegmentTitle("Amplia gama de insumos para filtros");
      setSegmentImgs(filtrosImg);
    } else if (categoria === "construccion") {
      setProducts(itemsConstruccion);
      setSegmentTitle(
        "Materiales de alta calidad para el área de la construcción"
      );
      setSegmentImgs(construccionImg);
    } else if (categoria === "industria") {
      setProducts(itemsIndustria);
      setSegmentTitle("Ofrecemos soluciones en PU a la medida de su industria");
      setSegmentImgs(industriaImg);
    }
  }, [categoria, itemsFiltros, itemsIndustria, itemsConstruccion]);

  return (
    <>
      <Slider imagenes={segmentImgs} />
      <Header text={segmentTitle} />
      <WrapperGrid>
        {products.map((product) => {
          return <Producto item={product} key={product.PRODUCTO} />;
        })}
      </WrapperGrid>
    </>
  );
};

export default memo(Segmento);
