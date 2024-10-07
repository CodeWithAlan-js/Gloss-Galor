import ProductCard from "./ProductCard";
import ball from "../assets/ball.avif";
import classic from "../assets/classic.avif";
import intense from "../assets/intense.avif";
import paillette from "../assets/paillette.avif";
import plump from "../assets/plump.avif";
import kit from "../assets/kit.avif";

const productData = [
  {
    productId: "Gloss-Paillette",
    imageSrc: paillette,
    productName: "Glitter lip gloss",
    productPrice: 12.99,
    productDescription:
      "Glossed reinvents the codes of shine through a multitude of effects and coverings, so you can wear gloss with attitude.",
  },
  {
    productId: "Kit-StValentin",
    imageSrc: kit,
    productName: "Valentine's day kit",
    productPrice: 24.99,
    productDescription:
      "A make-up box to celebrate love and express your passion for pink, with 3 cheek, lip and eye products in a pretty case.",
  },
  {
    productId: "Gloss-Classic",
    imageSrc: classic,
    productName: "Intense colour",
    productPrice: 12.99,
    productDescription:
      "Discover Glossed Vinyl: a powerful colour combined with extreme shine for a stunning lacquered effect.",
  },
  {
    productId: "Gloss-Plump",
    imageSrc: plump,
    productName: "Plumping Gloss",
    productPrice: 14.99,
    productDescription:
      "Play up the shine for an ultra-glossy, deliciously coloured mouth with instantly boosted volume.",
  },
  {
    productId: "Gloss-Intense",
    imageSrc: intense,
    productName: "12H hydration",
    productPrice: 16.99,
    productDescription:
      "All the power of chilli pepper combined with the moisturising power of hyaluronic acid infused into an intensely shiny skincare texture for instantly increased volume, day after day.",
  },
  {
    productId: "Ball",
    imageSrc: ball,
    productName: "Gloss ball",
    productPrice: 2.99,
    productDescription:
      "An adorable, limited-edition gift to enhance your lips and your Christmas tree.",
  },
];

const Cards = () => {
  return (
    <div className="flex flex-wrap justify-evenly gap-10 relative z-10 py-10 ml-32 mr-32 ">
      {productData.map((product) => (
        <ProductCard
          key={product.productId}
          productId={product.productId}
          imageSrc={product.imageSrc}
          productName={product.productName}
          productPrice={product.productPrice}
          productDescription={product.productDescription}
        />
      ))}
    </div>
  );
};

export default Cards;
