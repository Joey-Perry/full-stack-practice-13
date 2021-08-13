const db = (req) => req.app.get('db');


const getAll = (req, res) => {
    db(req).get_all()
        .then(movies => {
            res.status(200).send(movies);
        }).catch(err => {
            console.log(`Error with request: ${err}`);
        })
}

module.exports = { getAll }