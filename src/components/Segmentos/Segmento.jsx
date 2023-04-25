import { memo, useContext, useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { AppContext } from "../../context/AppContext";
import { Slider, Header, Producto } from "../index";
import { WrapperGrid } from "./components";
import {
  construccion001,
  construccion002,
  construccion003,
  construccion004,
  construccion005,
  construccion006,
  construccion007,
  construccion008,
  filtros001,
  filtros002,
  filtros003,
  filtros005,
  industria001,
  industria002,
  industria003,
  industria004,
} from "../../assets/img/imagenes-mastin/index";

const construccionImg = [
  construccion001,
  construccion002,
  construccion003,
  construccion004,
  construccion005,
  construccion006,
  construccion007,
  construccion008,
];

const filtrosImg = [filtros001, filtros002, filtros003, filtros005];

const industriaImg = [industria001, industria002, industria003, industria004];

const Segmento = () => {
  const { itemsFiltros, itemsIndustria, itemsConstruccion } = useContext(AppContext);
  const [products, setProducts] = useState([]);
  const [segmentImgs, setSegmentImgs] = useState([]);
  const [segmentTitle, setSegmentTitle] = useState('');

  const { categoria } = useParams();

  useEffect(() => {
    if (categoria === 'filtros') {
      setProducts(itemsFiltros);
      setSegmentTitle('Amplia gama de insumos para filtros');
      setSegmentImgs(filtrosImg);
    } else if (categoria === 'construccion') {
      setProducts(itemsConstruccion);
      setSegmentTitle('Materiales de alta calidad para el área de la construcción');
      setSegmentImgs(construccionImg);
    }else if (categoria === 'industria') {
      setProducts(itemsIndustria);
      setSegmentTitle('Ofrecemos soluciones en PU a la medida de su industria');
      setSegmentImgs(industriaImg);
    }
  }, [categoria, itemsFiltros, itemsIndustria, itemsConstruccion]);

  return (
    <>
      <Slider
        imagenes={segmentImgs}
      />
      <Header
        text={segmentTitle}
      />
      <WrapperGrid>
        {products.map((product) => {
          return <Producto item={product} key={product.PRODUCTO} />;
        })}
      </WrapperGrid>
    </>
  );
};

export default memo(Segmento);
