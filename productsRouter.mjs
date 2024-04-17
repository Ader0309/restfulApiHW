import express from "express";
const router = express.Router();

router.get("/api/products", (req, res) => {
    res.send("獲取所有產品");
});

router.get("/api/products/search", (req, res) => {
    res.send("使用ID作為搜尋條件來搜尋產品");
});

router.get("/api/products/catagory", (req, res) => {
    res.send("使用ID作為分類條件來分類產品");
});

router.get("/api/products/:id", (req, res) => {
    res.send(`獲取特定ID的產品 ${req.params.id}`);
});

router.post("/api/products", (req, res) => {
    res.send("新增一個產品");
});

router.put("/api/products/:id", (req, res) => {
    res.send(`更新特定ID的產品 ${req.params.id}`);
});

router.delete("/api/products/:id", (req, res) => {
    res.send(`刪除特定ID的產品 ${req.params.id}`);
});

export default router;
