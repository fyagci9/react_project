import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCategories } from "../../redux/actions/categoryActions";
import { saveProduct } from "../../redux/actions/productActions";
import ProductDetail from './ProductDetail';

function AddOrUpdateProduct({
  products,
  categories,
  getProducts,
  getCategories,
  saveProduct,
  history,
  ...props
}) {
  const [product, setProduct] = useState({...props.product});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (categories.length === 0) {
      getCategories();
    }
    setProduct({ ...props.product });
  }, [categories.length, getCategories, props.product]);

  function handleChange(event) {
    const { name, value } = event.target;
    setProduct((previousProduct) => ({
      ...previousProduct,
      [name]: name === "categoryId" ? parseInt(value, 10) : value,
    }));
    validate(name,value);
    
  }

  function validate(name,value){
    if(name==="productName" && value===""){
      setErrors(previousErrors=>({...previousErrors,productName:"ürün ismi olmalıdır..."}))
    }else{setErrors(previousErrors=>({...previousErrors,productName:""}))
      
    }
  }


  function handleSave(event) {
    event.preventDefault();
    saveProduct(product).then(() => {
      if(history){
        history.push("/");
      }
      else{
        console.error("history prop'u geçirilmemiş!");
      }
      
    });
  }
  return (
    <ProductDetail
    product={product}
    categories={categories}
    onChange={handleChange}
    onSave={handleSave}
    errors={errors}>  
   
    </ProductDetail>
  )
}

export function getProductById(products, productId) {
  let product = products.find(product => product.id == productId) || null;
  return product;
}

function mapStateToProps(state, ownProps) {
  const productId = ownProps.match ? ownProps.match.params.productId : null
  const product =
    productId && state.productListReducer.length > 0
      ? getProductById(state.productListReducer, productId)
      : {};
  return {
    product,
    products: state.productListReducer,
    categories: state.categoryListReducer,
  };
}

const mapDispatchToProps = {
  getCategories,
  saveProduct,
};

export default connect(mapStateToProps, mapDispatchToProps )(AddOrUpdateProduct);
