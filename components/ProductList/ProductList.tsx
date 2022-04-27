import React from "react";
import Link from "next/link";
import { Card } from "semantic-ui-react";
import Image from "next/image";

type ProductListProps = {
  products: any[];
};

const mapProductsToCards = (products: any[]) =>
  products.map(({ name, id, price, image }) => (
    <Link key={id} href="/product/[id]" as={`/product/${id}`} passHref>
      <Card
        as="a"
        color="green"
        header={name}
        image={<Image src={image} width={333} height={333} />}
        meta={<Card.Meta style={{ color: "dimgray" }}>{price}</Card.Meta>}
      />
    </Link>
  ));

const ProductList = ({ products }: ProductListProps) => {
  return (
    <Card.Group itemsPerRow={2} stackable>
      {mapProductsToCards(products)}
    </Card.Group>
  );
};

export default ProductList;
