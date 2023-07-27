import { useContext, useEffect, useState } from "react";
import { ContextProducts } from "../../context/products";
import {
  ContainerHeaderProducts,
  ProductsContainer,
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
import { useFilter } from "../../hooks/useFilter";
import * as Accordion from "@radix-ui/react-accordion";
import { getProducts } from "../../services/getProducts";

const MAX_FILE_SIZE = 10500000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const schema = z.object({
  name: z.string(),
  description: z.string(),
  image: z
    .any()
    .refine((files) => files?.length == 1, "Image is required.")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max file size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png and .webp files are accepted."
    ),
  category: z.string(),
  price: z.string(),
  shipment: z.string(),
});

type FormProps = z.infer<typeof schema>;

export const Products = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: zodResolver(schema),
    mode: "all",
  });

  const { products, setProducts } = useContext(ContextProducts);

  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  useEffect(() => {
    getProducts(setProducts);
  }, [setProducts]);

  console.log(errors);

  const filteredProductBone = useFilter("category", "bone");
  console.log(filteredProductBone);

  const Submit = async (e: FormProps) => {
    try {
      const formData = new FormData();
      formData.append("name", e.name);
      formData.append("price", e.price);
      formData.append("category", e.category);
      formData.append("image", e.image[0]);
      formData.append("description", e.description);
      formData.append("shipment", e.shipment);
      console.log("formData: ", formData);
      const response = await axios.post("http://localhost:3300", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response.data);
      getProducts(setProducts);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ContainerHeaderProducts>
        <h1>Backoffice Loja Joga Junto</h1>
        <div>Bem vindo, Usuário!</div>
      </ContainerHeaderProducts>
      <ProductsContainer>
        <nav>
          <ul>
            <h2 className="first">Filtar por:</h2>
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
              <FilterComponent className="AccordionRoot">
                <h2>Frete grátis</h2>
              </FilterComponent>
            </Accordion.Root>
          </ul>
        </nav>
        <section>
          <header>
            <ul>
              <li>Camisas</li>
              <li>Canecas</li>
              <li>Bonés</li>
            </ul>
          </header>
          <ProductsList>
            <Dialog.Root>
              <header>
                <input type="text" placeholder="Pesquisar" />
                <Dialog.Trigger asChild>
                  <button>Adicionar</button>
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
                      <label htmlFor="">Imagens:</label>
                      <input {...register("image")} type="file" />
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
                        <span>{item.price}</span>
                      </div>
                    </DetailsCard>
                  </div>
                );
              })}
            </CardContainer>
          </ProductsList>
        </section>
      </ProductsContainer>
    </div>
  );
};
