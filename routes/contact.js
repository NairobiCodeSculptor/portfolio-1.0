import express from 'express';
const router = express.Router();

router.post('/contact', async (req, res) => {
    res.send("Hey")
    
});
router.get('/contact', async (req, res) => {
    res.render(`contact`)
})




export default router;