import { memo, useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { Slider, Header, Producto } from "../index";
import { WrapperGrid } from "./components";
//importacion de img construccion
import construccion003 from "../../assets/img/imagenes-mastin/Construccion003.jpg";
import construccion002 from "../../assets/img/imagenes-mastin/Construccion002.jpg";
import construccion004 from "../../assets/img/imagenes-mastin/Construccion004.jpg";

//importacion de img industria
import industria001 from "../../assets/img/imagenes-mastin/Industria001.jpg";
import industria002 from "../../assets/img/imagenes-mastin/Industria002.jpg";
//import industria003 from "../../assets/img/imagenes-mastin/Industria003.jpg";

//importacion de img filtros
import filtros005 from "../../assets/img/imagenes-mastin/Filtros005.jpg";
import filtros001 from "../../assets/img/imagenes-mastin/Filtros001.jpg";
import filtros003 from "../../assets/img/imagenes-mastin/Filtros003.jpg";

//importacion de img consume confort
import consume001 from "../../assets/img/imagenes-mastin/Industria004.jpg";
import consume002 from "../../assets/img/imagenes-mastin/CONSUMER-CONFORT-001.jpg";
import consume003 from "../../assets/img/imagenes-mastin/CONSUMER-CONFORT-002.jpg";

//construccion Slider
const construccionImg = [construccion003, construccion002, construccion004];

/* filtro Slider */
const filtrosImg = [
  filtros005,
  industria001,
  filtros001,
  industria002,
  filtros003,
];

//Consumer confort Slider,
const consumerImg = [consume001, consume002, consume003];

const Segmento = () => {
  const { itemsFiltrosIndustria, itemsConstruccion, itemsConsumer } =
    useContext(AppContext);
  const [products, setProducts] = useState([]);
  const [segmentImgs, setSegmentImgs] = useState([]);
  const [segmentTitle, setSegmentTitle] = useState("");

  const { categoria } = useParams();

  useEffect(() => {
    if (categoria === "filtros-industria") {
      setProducts(itemsFiltrosIndustria);
      setSegmentTitle("Amplia gama de insumos para filtros e industria");
      setSegmentImgs(filtrosImg);
    } else if (categoria === "construccion") {
      setProducts(itemsConstruccion);
      setSegmentTitle(
        "Materiales de alta calidad para el área de la construcción"
      );
      setSegmentImgs(construccionImg);
    } else if (categoria === "consumer-confort") {
      setProducts(itemsConsumer);
      setSegmentTitle("Ofrecemos soluciones en PU a la medida de su industria");
      setSegmentImgs(consumerImg);
    }
  }, [categoria, itemsFiltrosIndustria, itemsConstruccion, itemsConsumer]);

  return (
    <>
      <Slider imagenes={segmentImgs} />
      <Header text={segmentTitle} />
      <WrapperGrid>
        {products.map((product) => {
          return <Producto item={product} key={product.PRODUCTO} />;
        })}
        {console.log(products)}
      </WrapperGrid>
    </>
  );
};

export default memo(Segmento);
