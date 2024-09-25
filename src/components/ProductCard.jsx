import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import ItemAddButtons from "./ItemAddButtons";

const ProductCard = ({ imageSrc, productName, productPrice, productDescription, productId }) => {


  return (
    <Card className="flex justify-center items-center w-80">
      <CardHeader shadow={false} floated={false}>
        <Zoom color={"black"} className="bg-black" >
        <img
          src={imageSrc}
          alt="card-image"
          className="w-52 h-52"
        />
        </Zoom>
      </CardHeader>
      <CardBody className="w-80 h-44">
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            {productName}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            {productPrice}$
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          {productDescription}{" "}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 w-full flex justify-center">
        <ItemAddButtons productId={productId} productPrice={productPrice}/>
      </CardFooter>
    </Card>
  );
};


export default ProductCard;