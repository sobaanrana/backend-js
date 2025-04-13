const Product = require("../models/productModel");

// business logic

const getProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();

    if (!allProducts || allProducts.length === 0) {
      // check if allProducts is null or undefined = empty
      return res.status(404).json({ message: "No products found" });
    }

    res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      products: allProducts,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const createProduct = async (req, res) => {
  try {
    const { name, price, description, category } = req.body;

    const newProduct = new Product({
      name,
      price,
      description,
      category,
    });
    if (!newProduct) {
      return res.status(400).json({ message: "Product creation failed" });
    }

    await newProduct.save();

    res.status(200).json({
      success: true,
      message: "Product created successfully",
      product: newProduct,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, description, category } = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, price, description, category },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json({
      success: true,
      message: "Product deleted successfully",
      product: deletedProduct,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = { getProducts, createProduct, updateProduct, deleteProduct };
