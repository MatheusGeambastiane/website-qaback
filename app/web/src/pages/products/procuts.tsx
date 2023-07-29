import { useContext, useEffect, useState } from "react";
import { ContextProducts } from "../../context/products";
import {
  Container,
  ProductsContainer,
  ContainerHeaderProducts,
  ProductsList,
  Cards,
  CardContainer,
  Content,
  Overlay,
  DetailsCard,
  FormContainer,
  FilterComponent,
  OpenFilters,
  ContentList,
} from "./styles";
import axios from "axios";
import * as z from "zod";
import * as Dialog from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Accordion from "@radix-ui/react-accordion";
import { getProducts } from "../../services/getProducts";
import "react-toastify/dist/ReactToastify.css";
import { Carrousel } from "../../components/swiper";
import React from "react";
import { Header } from "../../components/header";
import { IoIosAdd } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md";
import SearchBar from "@mkyy/mui-search-bar";
import Marquee from "react-fast-marquee";
import { AiFillThunderbolt } from "react-icons/ai";
import { BiListCheck } from "react-icons/bi";

const MAX_FILE_SIZE = 12500000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const schema = z.object({
  name: z.string().nonempty("Preencha o campo Nome"),
  description: z.string().nonempty("Descrição do produto necessaria."),
  image: z
    .any()
    .refine((files) => files?.length == 1, "Image is required.")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Tamanho da imagem não pode ser maior que 5mb.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png and .webp files are accepted."
    ),
  category: z.string().nonempty("Categoria necessaria."),
  price: z.string().nonempty("Defina o preço do produto."),
  shipment: z.string(),
});

type FormProps = z.infer<typeof schema>;

export const Products = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: zodResolver(schema),
    mode: "all",
  });

  const { products, setProducts } = useContext(ContextProducts);

  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const [textFieldValue, setTextFieldValue] = useState("");

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  useEffect(() => {
    getProducts(setProducts);
  }, [setProducts]);

  const Submit = (data: FormProps) => {
    try {
      const jwt = localStorage.getItem("jwt");
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("price", data.price);
      formData.append("category", data.category);
      formData.append("image", data.image[0]);
      formData.append("description", data.description);
      formData.append("shipment", data.shipment);
      axios
        .post("http://localhost:3300", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: jwt,
          },
        })
        .then((response) => {
          console.log("Produto enviado com sucesso!");
          console.log(response.data);
          getProducts(setProducts);
          reset();
        })
        .catch((error) => {
          console.log("Erro ao enviar produto!");
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const handleSearch = (labelOptionValue: string) => {
    setTextFieldValue(labelOptionValue);
    console.log(textFieldValue);
  };

  console.log(errors);
  return (
    <Container>
      <ContainerHeaderProducts>
        <Header />
        <Carrousel />
      </ContainerHeaderProducts>
      <div className="marqueeContainer">
        <Marquee pauseOnHover={true} speed={150} className="marquee">
          <div>
            <span>
              <AiFillThunderbolt /> Explore o poder do Jogajunto!
            </span>
            <span>
              <AiFillThunderbolt /> Suas melhores ofertas merecem destaque no
              Jogajunto!
            </span>
            <span>
              <AiFillThunderbolt /> Produtos de todas as categorias, em um só
              lugar
            </span>
          </div>
        </Marquee>
      </div>
      <ProductsContainer>
        <nav>
          <ul>
            <SearchBar
              width={"100%"}
              value={textFieldValue}
              onChange={(newValue) => setTextFieldValue(newValue)}
              onSearch={handleSearch}
              placeholder="Pesquisar um produto"
            />
            <h2 className="first">
              <BiListCheck /> Products <span>{products.length}</span>
            </h2>
            <Accordion.Root
              className="AccordionRoot"
              type="single"
              defaultValue="item-1"
              collapsible
            >
              <FilterComponent value="item-1">
                <OpenFilters>
                  <h2>Categorias: </h2>
                </OpenFilters>
                <ContentList>
                  <li
                    className="contentList"
                    onClick={() => handleCategoryFilter("")}
                  >
                    Todos
                  </li>
                </ContentList>
                <ContentList>
                  <li
                    className="contentList"
                    onClick={() => handleCategoryFilter("Roupas")}
                  >
                    Roupas
                  </li>
                </ContentList>
                <ContentList>
                  <li
                    className="contentList"
                    onClick={() => handleCategoryFilter("Camisas")}
                  >
                    Camisas
                  </li>
                </ContentList>
                <ContentList>
                  <li
                    className="contentList"
                    onClick={() => handleCategoryFilter("Acessórios")}
                  >
                    Acessórios
                  </li>
                </ContentList>
              </FilterComponent>

              <FilterComponent value="2" className="AccordionRoot">
                <OpenFilters>
                  <h2>Preços: </h2>
                </OpenFilters>
                <Accordion.Content>
                  <ContentList>
                    <li className="contentList">Até R$ 100</li>
                  </ContentList>
                  <ContentList>
                    <li className="contentList">Até R$ 100</li>
                  </ContentList>
                  <ContentList>
                    <li className="contentList">Até R$ 100</li>
                  </ContentList>
                  <ContentList>
                    <li className="contentList">Até R$ 100</li>
                  </ContentList>
                </Accordion.Content>
              </FilterComponent>
            </Accordion.Root>
          </ul>
        </nav>

        <ProductsList>
          <Dialog.Root>
            <header>
              <h1>
                {" "}
                <MdShoppingCart size="22" color="#ffd700" />
                Backoffice JogaJunto
              </h1>
              <Dialog.Trigger asChild>
                <button>
                  <IoIosAdd size="20" /> Adicionar
                </button>
              </Dialog.Trigger>
            </header>
            <Overlay>
              <Content>
                <FormContainer onSubmit={handleSubmit(Submit)}>
                  <h1>Painel de cadastro</h1>
                  <div>
                    <label>Nome do Produto</label>
                    <input
                      {...register("name")}
                      type="text"
                      placeholder="Camiseta..."
                    />
                  </div>
                  <div>
                    <label htmlFor="">Descrição do Produto</label>
                    <input
                      {...register("description")}
                      type="text"
                      placeholder="Camisa branca tamanho P"
                    />
                  </div>
                  <div>
                    <label htmlFor="">Preço</label>
                    <input
                      {...register("price")}
                      type="text"
                      placeholder="R$ 59,90"
                    />
                  </div>
                  <div>
                    <label htmlFor="">Categoria</label>
                    <input
                      {...register("category")}
                      type="text"
                      placeholder="Camisas"
                    />
                  </div>
                  <div>
                    <label>Imagens:</label>
                    <input
                      {...register("image")}
                      className="custom-file-input"
                      type="file"
                    />
                  </div>
                  <div>
                    <label htmlFor="">frete:</label>
                    <input
                      {...register("shipment")}
                      type="text"
                      placeholder="Frete"
                    />
                  </div>

                  <button type="submit">adcionar produto</button>
                </FormContainer>
              </Content>
            </Overlay>
          </Dialog.Root>
          <CardContainer>
            {filteredProducts.map((item) => {
              return (
                <div>
                  <Cards>
                    <img src={item.image} alt={item.description} />
                  </Cards>
                  <DetailsCard>
                    <div>
                      <h1>{item.name}</h1>
                      <span>R$ {item.price}</span>
                    </div>
                  </DetailsCard>
                </div>
              );
            })}
          </CardContainer>
        </ProductsList>
      </ProductsContainer>
    </Container>
  );
};
