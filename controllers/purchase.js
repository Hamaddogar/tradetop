let router = require('express').Router();
let api = require('../api/purchase');

router.post('/create', (req, res) => {

    // req.body.customer = req.body.customer.id;

    api.createPurchase(req.body, (err, purchase) => {

        purchase.populate('supplier', (err, purchase) => {

            if (err) {
                res.status(500).json(err);
            } else {
                res.json(purchase);
            }

        });

    });

});


router.get('/all', (req, res) => {

    api.get(req.body, (err, company) => {

        if (err) {
            res.status(500).json(err);
        } else {
            res.json(company);
        }

    });

})

router.post('/delete', (req, res) => {

    api.deletePuchase(req.body, (err, product) => {

        if (err) {
            res.status(500).json(err);
        } else {
            res.json(product);
        }

    });

})

module.exports = router;