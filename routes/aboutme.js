import express from 'express';
const router = express.Router();

router.post('/aboutme', async (req, res) => {
    res.send("Hey")
    
});
router.get('/aboutme', async (req, res) => {
    res.render(`about_me`)
})




export default router;