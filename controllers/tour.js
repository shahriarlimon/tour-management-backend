const Tour = require("../models/tours.js")
exports.createTour = async (req, res) => {
    try {
        const { name, img, description, price } = req.body;
        const newTour = new Tour({ name, img, description, price })
        await newTour.save();
        res.status(200).json({
            status: "success",
            data: result
        })
    } catch (error) {
        res.status(401).json({
            status: "fail",
            message: "can't get the data",
            error: error.message
        })
    }



};
exports.getTours = async (req, res) => {
    try {
        const filter = { ...req.query };
        const excludeFields = ['sort', 'page', 'limit'];
        excludeFields.forEach(field => delete filter[field]);
        const queries = {}
        if (req.query.fields) {
            const fields = req.query.fields.split(',').join(' ');
            queries.fields = fields

        }
        if (req.query.page) {
            const { page = 1, limit = 5 } = req.query;
            const skip = (page - 1) * parseInt(limit);
            queries.skip = skip;
            queries.limit = parseInt(limit);


        }
        const result = await Tour.find({ filter }, '-viewsCount').skip(queries.skip).limit(queries.limit).select(queries.fields);
        const total = await Tour.countDocuments({ filter });
        const pageCount = Math.ceil(total / queries.limit)
        res.status(200).json({
            status: "success",
            total,
            pageCount,
            data: result,

        })
    } catch (error) {
        res.status(401).json({
            status: "fail",
            message: "can't get the data",
            error: error.message
        })
    }
}
exports.getTour = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Tour.findByIdAndUpdate(id, { $inc: { viewsCount: 1 } })
        res.status(200).json({
            status: "success",
            data: result
        })
    } catch (error) {
        res.status(401).json({
            status: "fail",
            message: "can't get data",
            error: error.message
        })
    }
}
exports.updateTour = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, img, description, price } = req.body;
        const result = await Tour.findOneAndUpdate(id, { name, img, description, price })
        res.status(200).json({
            status: "success",
            data: result
        })
    } catch (error) {
        res.status(401).json({
            status: "fail",
            message: "can't get data",
            error: error.message
        })
    }
};

exports.getCheapest = async (req, res) => {
    try {
        const result = await Tour.find({}, "-viewsCount").sort({ price: 1 }).limit(3);
        res.status(200).json({
            status: "success",
            data: result
        })

    } catch (error) {
        res.status(401).json({
            status: "fail",
            message: "can't get data",
            error: error.message
        })
    }
};
exports.getTrending = async (req, res) => {
    try {
        const result = await Tour.find({}, "-viewsCount").sort({ viewsCounts: 1 }).limit(3);
        res.status(200).json({
            status: "success",
            data: result
        })

    } catch (error) {
        res.status(401).json({
            message: "can't get data",
            error: error.message
        })

    }
}